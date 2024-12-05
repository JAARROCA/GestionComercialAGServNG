/**
 * @type {Array}
 *
 *
 *
 * @properties={typeid:35,uuid:"DBB69374-8ACD-48B4-A378-2B324F8605DD",variableType:-4}
 */
var editedRecs;

/**
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"FB5E2889-4563-429E-B655-0A5E918E0EA5"}
 */
function btn_3rdBtn(event)
{
	//set a global to the text of the button pressed
	var Albaran = forms.dlg_Linea_AlbaranGC.nup_lal
	globals.GCdialog_buttonPressed = elements.btn_3.text
	var situ = forms.FrmAlbaranGC.situ_cal
	var query = 'select savealbaran from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para borrar Líneas de Albarán.','¡Error!')
		else {
			var methd = 'forms.dialogAlbaranLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Albarán.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		if(situ == 'F')
		{
			globals.GCdialog_buttonPressed = null
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Albarán ya facturado. No se puede modificar.','¡Error!')
			else {
				methd = 'forms.dialogAlbaranLineaGC.onHide(event)' 
				globals.GCshowErrorDialog('Albarán ya facturado. No se puede modificar.',methd,'Aceptar',null,null,null)
			}
		}
		else
		{
			if(globals.GCokToCommit == 1)
			{
				if(globals.GCisEditing()) 
				{
					globals.GCsaveEdits();
				}
			}
			
			
			if(globals.GCdialog_performMethod)
			{
				//perform whatever method is in the global
				eval(globals.GCdialog_performMethod)
				globals.GCdialog_performMethod = null
			}
			query = 'select sum(impor_lal) from lalbaran where nup_lal='+ Albaran
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var imporbr=dataset.getValue(1,1)
				
			if(imporbr==null)
			{
				imporbr=0
			}
			
			forms.lst_Importe_AlbaranGC.impbre_cal = imporbr
			forms.lst_Importe_AlbaranGC.onFocusLostDtoPP(event)
			databaseManager.saveData();
				
			
			application.getWindow('Albaran Linea').hide();
			globals.GCenableBgElements();
		}
	}
}

/**
 * @properties={typeid:24,uuid:"74C9CD06-A53A-4442-90B7-E33A3DE3EBF9"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Albaran Linea').hide();	
	globals.GCenableBgElements();	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"772E7E72-01F6-4CE7-8400-6CE4B906B506"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	var Albaran = forms.dlg_Linea_AlbaranGC.nup_lal
	var situ = forms.FrmAlbaranGC.situ_cal
	//var situstock = forms.dlg_Linea_AlbaranGC.situ_lal;
	var query = 'select savealbaran from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para grabar Líneas de Albarán.','¡Error!')
		else {
			var methd = 'forms.dialogAlbaranLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Albarán.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		/*if(situstock != '')
		{
			btn_ok2()
		}
		else
		{*/
			editedRecs = databaseManager.getEditedRecords(forms.dlg_Linea_AlbaranGC.foundset)
			if(editedRecs.length > 0 && situ == 'F')
			{
				globals.GCdialog_buttonPressed = null
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Albarán ya facturado. No se puede modificar.','¡Error!')
				else {
					methd = 'forms.dialogAlbaranLineaGC.onHide(event)' 
					globals.GCshowErrorDialog('Albarán ya facturado. No se puede modificar.',methd,'Aceptar',null,null,null)
				}
			}
			else
			{
				if(globals.GCokToCommit == 1)
				{
					if(globals.GCisEditing()) globals.GCsaveEdits();
				}
				
				databaseManager.saveData(foundset);
				
				
					
				query = 'select sum(impor_lal) from lalbaran where nup_lal='+ Albaran
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var imporbr=dataset.getValue(1,1)
				
				
				if(imporbr==null) imporbr=0
				
				var result = forms.lst_Importe_AlbaranGC.foundset.selectRecord(forms.FrmAlbaranGC.id)
				var fsCount = databaseManager.getFoundSetCount(forms.lst_Importe_AlbaranGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.lst_Importe_AlbaranGC.foundset.getSize()) return;
					forms.lst_Importe_AlbaranGC.foundset.setSelectedIndex(forms.lst_Importe_AlbaranGC.foundset.getSize());
					result = forms.lst_Importe_AlbaranGC.foundset.selectRecord(forms.FrmAlbaranGC.id);
				}
				forms.lst_Importe_AlbaranGC.impbre_cal = imporbr
				forms.lst_Importe_AlbaranGC.onFocusLostDtoPP(event)	
				databaseManager.saveData();
				
					
					
					//application.sleep(2000);
					application.getWindow('Albaran Linea').hide();
					globals.GCenableBgElements();
			}
		//}
	}
}

/**
 * 
 * 
 *
 * @properties={typeid:24,uuid:"2DB95015-6E34-4B29-936F-85972D9C5E92"}
 */
function btn_ok2()
{
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4F3A8551-409B-4033-99B2-BAFA077881F7"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
*
 *
 *
 * @properties={typeid:24,uuid:"3D6FD0DD-37DE-40F4-9B1C-5CBDD3D00D88"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text && globals.GCdialog_buttonPressed != elements.btn_3.text)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Albaran Linea').hide();
	globals.GCenableBgElements();	
	return true
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"74CDDF74-2FD5-4390-AF77-4261EF0B6F21"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
