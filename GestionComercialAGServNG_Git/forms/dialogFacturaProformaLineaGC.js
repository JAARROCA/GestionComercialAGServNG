/**
 * @type {Array}
 *
 *
 *
 * @properties={typeid:35,uuid:"BCAB800C-888B-4851-A625-E275CDF02243",variableType:-4}
 */
var editedRecs;

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"A2784DA8-1A43-4986-A7AA-6912D6490FAC"}
 */
function btn_3rdBtn(event)
{
	
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	var situ = forms.FrmFacturasProformaGC.situ;
	var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para borrar Líneas de Factura.','¡Error!')
		else {
			var methd = 'forms.dialogFacturaProformaLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Factura.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		if(situ == 'F')
		{
			globals.GCdialog_buttonPressed = null
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Factura Proforma ya facturada. No se puede modificar.','¡Error!')
			else {
				methd = 'forms.dialogFacturaProformaLineaGC.onHide(event)' 
				globals.GCshowErrorDialog('Factura Proforma ya facturada. No se puede modificar.',methd,'Aceptar',null,null,null)
			}
		}
		else
		{
			var eje = forms.dlg_Linea_FacturaProformaGC.eje_lfa;
			var ser = forms.dlg_Linea_FacturaProformaGC.ser_lfa;
			var nup = forms.dlg_Linea_FacturaProformaGC.nup_lfa;
			var iva = forms.dlg_Linea_FacturaProformaGC.piva_lfa;
			if(iva == null || iva == '') iva = 0;
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
			
			if(ser == null)
			{
				ser = 'IS NULL'
			}
			else
			{
				ser = "= '"+ser_lfa+"'"
			}
			query = "select sum(impor_lfa) from tbFacturaProformaLinea "+
			"where eje_lfa = "+ eje +" AND ser_lfa "+ser+
			" AND nup_lfa = "+nup;
			//var ds = controller.getDataSource().split('/');
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var imporbr=dataset.getValue(1,1)
			
			
			if(imporbr==null)
			{
				imporbr=0
			}
			
			forms.FrmFacturasProformaGC.impbre_cfa = imporbr
			forms.FrmFacturasProformaGC.impbie_cfa = null
			forms.FrmFacturasProformaGC.impbie2_cfa = null
			forms.FrmFacturasProformaGC.impbie3_cfa = null
			forms.FrmFacturasProformaGC.piva_cfa = null
			forms.FrmFacturasProformaGC.piva2_cfa = null
			forms.FrmFacturasProformaGC.piva3_cfa = null
			forms.FrmFacturasProformaGC.cuotaiva_cfa = null
			forms.FrmFacturasProformaGC.cuotaiva2_cfa = null
			forms.FrmFacturasProformaGC.cuotaiva3_cfa = null
			forms.FrmFacturasProformaGC.impre = null
			forms.FrmFacturasProformaGC.impre2 = null
			forms.FrmFacturasProformaGC.impre3 = null
			forms.FrmFacturasProformaGC.onFocusLostDtoPP(event)
			forms.FrmFacturasProformaGC.onFocusLostgtosfinan(event)
			forms.FrmFacturasProformaGC.onFocusLostIva(event)
			databaseManager.saveData();
			
			
			application.getWindow('Factura Proforma Linea').hide();
			globals.GCenableBgElements();
		}
	}
}

/**
 * @properties={typeid:24,uuid:"C3F4921D-8808-4062-9849-1DE371429923"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing();
		}
	}
	application.getWindow('Factura Proforma Linea').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"CAFE7CA0-4266-480C-9B00-3B1E9D5492A6"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	var situ = forms.FrmFacturasProformaGC.situ	
	var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para borrar Líneas de Factura.','¡Error!')
		else {
			var methd = 'forms.dialogFacturaProformaLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Factura.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		editedRecs = databaseManager.getEditedRecords(forms.dlg_Linea_FacturaProformaGC.foundset)
		if(editedRecs.length > 0 && situ == 'F')
		{
			globals.GCdialog_buttonPressed = null
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Factura Proforma ya facturada. No se puede modificar.','¡Error!')
			else {
				methd = 'forms.dialogFacturaProformaLineaGC.onHide(event)' 
				globals.GCshowErrorDialog('Factura Proforma ya facturada. No se puede modificar.',methd,'Aceptar',null,null,null)
			}
		}
		else
		{		
			var eje = forms.dlg_Linea_FacturaProformaGC.eje_lfa;
			var ser = forms.dlg_Linea_FacturaProformaGC.ser_lfa;
			var nup = forms.dlg_Linea_FacturaProformaGC.nup_lfa;
			if(globals.GCokToCommit == 1)
			{
				if(globals.GCisEditing()) 
				{
					globals.GCsaveEdits()
				}
			}
			
			databaseManager.saveData();
			    if(ser == null || ser == 'Undefined')
				{
					ser = 'IS NULL'
				}
				else
				{
					ser = "= '"+ser_lfa+"'"
				}
				query = "select sum(impor_lfa) from tbFacturaProformaLinea "+
				"where eje_lfa = "+ eje +" AND ser_lfa "+ser+" AND nup_lfa = "+nup;
				//var ds = controller.getDataSource().split('/');
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var imporbr=dataset.getValue(1,1)
				
				
				if(imporbr==null)
				{
					imporbr=0
				}
				var result = forms.FrmFacturasProformaGC.foundset.selectRecord(forms.FrmFacturasProformaGC.id)
				var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasProformaGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.FrmFacturasProformaGC.foundset.getSize())
				{
					return;
				}
				forms.FrmFacturasProformaGC.foundset.setSelectedIndex(forms.FrmFacturasProformaGC.foundset.getSize());
				result = forms.FrmFacturasProformaGC.foundset.selectRecord(forms.FrmFacturasProformaGC.id);
				}
				forms.FrmFacturasProformaGC.impbre_cfa = imporbr
				forms.FrmFacturasProformaGC.impbie_cfa = null
				forms.FrmFacturasProformaGC.impbie2_cfa = null
				forms.FrmFacturasProformaGC.impbie3_cfa = null
				forms.FrmFacturasProformaGC.piva_cfa = null
				forms.FrmFacturasProformaGC.piva2_cfa = null
				forms.FrmFacturasProformaGC.piva3_cfa = null
				forms.FrmFacturasProformaGC.cuotaiva_cfa = null
				forms.FrmFacturasProformaGC.cuotaiva2_cfa = null
				forms.FrmFacturasProformaGC.cuotaiva3_cfa = null
				forms.FrmFacturasProformaGC.impre = null
				forms.FrmFacturasProformaGC.impre2 = null
				forms.FrmFacturasProformaGC.impre3 = null
				forms.FrmFacturasProformaGC.onFocusLostDtoPP(event)
				forms.FrmFacturasProformaGC.onFocusLostgtosfinan(event)
				forms.FrmFacturasProformaGC.onFocusLostIva(event)
				databaseManager.saveData();
			
			application.getWindow('Factura Proforma Linea').hide();
			globals.GCenableBgElements();
		}
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A6C56BF0-CEAE-4248-954F-4BEC507265C1"}
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
 * @properties={typeid:24,uuid:"E1E6FED5-4569-44B3-9226-DE6925D62118"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text && globals.GCdialog_buttonPressed != elements.btn_3.text)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing();
		}
	}
	application.getWindow('Factura Proforma Linea').hide();
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
 * @properties={typeid:24,uuid:"03995259-4D0D-46F3-BB8D-CA3A160B29F4"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
