/**
 * @type {Array}
 *
 *
 *
 * @properties={typeid:35,uuid:"4069FF73-AB43-4855-9B43-DF605771B38D",variableType:-4}
 */
var editedRecs;

/**
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"6DC6C39A-F2E0-42A9-878B-E2A5A9C6DA50"}
 */
function btn_3rdBtn(event)
{
	//set a global to the text of the button pressed
	var Presupuesto = forms.dlg_Linea_PresupuestoGC.nup_lof
	globals.GCdialog_buttonPressed = elements.btn_3.text
	var situ = forms.FrmPresupuestosGC.situ_cof
	var query = 'select savepresupuestos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para borrar Líneas de Presupuesto.','¡Error!')
		else {
			var methd = 'forms.dialogPresupuestoLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Presupuesto.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		if(situ == 'F')
		{
			globals.GCdialog_buttonPressed = null
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Presupuesto ya facturado. No se puede modificar.','¡Error!')
			else {
				methd = 'forms.dialogPresupuestoLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Presupuesto ya facturado. No se puede modificar.',methd,'Aceptar',null,null,null)
			}
		}
		else
		{
			if(globals.GCokToCommit == 1)
			{
				if(globals.GCisEditing()) globals.GCsaveEdits();
			}
			
			
			if(globals.GCdialog_performMethod)
			{
				//perform whatever method is in the global
				eval(globals.GCdialog_performMethod)
				globals.GCdialog_performMethod = null
			}
			query = 'select sum(impor_lof) from [lofertas] where nup_lof='+ Presupuesto
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var imporbr=dataset.getValue(1,1)
				
			if(imporbr==null)
			{
				imporbr=0
			}
			
			forms.FrmPresupuestosGC.impbre_cof = imporbr
			forms.FrmPresupuestosGC.onFocusLostDtoPP(event)
			databaseManager.saveData();
				
			
			application.getWindow('Presupuesto Linea').hide();
			globals.GCenableBgElements();
		}
	}
}

/**
 * @properties={typeid:24,uuid:"FD920D37-E1F4-457D-9837-5A92509871F5"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Presupuesto Linea').hide();	
	globals.GCenableBgElements();	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"4F6088BF-AFE5-4080-909A-E98A22CD9E98"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	var query = 'select savepresupuestos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para grabar Líneas de Presupuesto.','¡Error!')
		else {
			var methd = 'forms.dialogPresupuestoLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Presupuesto.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		var Presupuesto = forms.dlg_Linea_PresupuestoGC.nup_lof
		var situ = forms.FrmPresupuestosGC.situ_cof
		editedRecs = databaseManager.getEditedRecords(forms.dlg_Linea_PresupuestoGC.foundset)
		if(editedRecs.length > 0 && situ == 'F')
		{
			globals.GCdialog_buttonPressed = null
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Presupuesto ya facturado. No se puede modificar.','¡Error!')
			else {
				methd = 'forms.dialogPresupuestoLineaGC.onHide(event)' 
				globals.GCshowErrorDialog('Presupuesto ya facturado. No se puede modificar.',methd,'Aceptar',null,null,null)
			}
		}
		else
		{
			if(globals.GCokToCommit == 1)
			{
				if(globals.GCisEditing()) globals.GCsaveEdits();
			}
			
			databaseManager.saveData(foundset);
			
			
				
			query = 'select sum(impor_lof) from [lofertas] where nup_lof='+ Presupuesto
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var imporbr=dataset.getValue(1,1)
			
			
			if(imporbr==null)
			{
				imporbr=0
			}
			/*var result = forms.lst_Importe_PresupuestoGC.foundset.selectRecord(forms.FrmPresupuestosGC.id)
			var fsCount = databaseManager.getFoundSetCount(forms.lst_Importe_PresupuestoGC.foundset);
			while(result==false)
			{
				if(fsCount == forms.lst_Importe_PresupuestoGC.foundset.getSize())
				{
					return;
				}
			forms.lst_Importe_PresupuestoGC.foundset.setSelectedIndex(forms.lst_Importe_PresupuestoGC.foundset.getSize());
			result = forms.lst_Importe_PresupuestoGC.foundset.selectRecord(forms.lst_Importe_PresupuestoGC.id);
			}*/
			forms.FrmPresupuestosGC.impbre_cof = imporbr
			forms.FrmPresupuestosGC.onFocusLostDtoPP(event)	
			databaseManager.saveData();
			
				
				
				//application.sleep(2000);
				application.getWindow('Presupuesto Linea').hide();
				globals.GCenableBgElements();
		}		
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"66E40E7F-1E6D-41AF-8979-76F9974E0695"}
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
 * @properties={typeid:24,uuid:"BD301F23-6B02-41E6-9913-736F77ECF991"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text && globals.GCdialog_buttonPressed != elements.btn_3.text)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Presupuesto Linea').hide();
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
 * @properties={typeid:24,uuid:"464B31C1-B6CD-4D30-9DCD-3247C76FE032"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
