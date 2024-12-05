/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"E60E365B-2A2D-427E-A3A2-2C9FA3464C12"}
 */
function btn_3rdBtn(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	
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
	
	application.getWindow('Clientes Direccion Facturacion').hide();
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"9CE2638C-842B-4312-954A-5BC1E77FCD02"}
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
	application.getWindow('Clientes Direccion Facturacion').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"89F135A2-205F-4FE8-BCE6-A008D5B99AE7"}
 */
function btn_ok(event)
{
	if(!forms.dlg_ClientesDireccionFacturacionGC.cif)
	{
		forms.dlg_ClientesDireccionFacturacionGC.elements.cif.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El dato CIF es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('El dato CIF es obligatorio.',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_ClientesDireccionFacturacionGC.razonsocial)
	{
		forms.dlg_ClientesDireccionFacturacionGC.elements.razonsocial.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El dato Razón Social es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('El dato Razón Social es obligatorio.',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_ClientesDireccionFacturacionGC.direccionfiscal)
	{
		forms.dlg_ClientesDireccionFacturacionGC.elements.direccionfiscal.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El dato Dirección Fiscal es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('El dato Dirección Fiscal es obligatorio.',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_ClientesDireccionFacturacionGC.poblacion)
	{
		forms.dlg_ClientesDireccionFacturacionGC.elements.poblacion.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El dato Población es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('El dato Población es obligatorio.',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_ClientesDireccionFacturacionGC.codpostal)
	{
		forms.dlg_ClientesDireccionFacturacionGC.elements.codpostal.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El dato Código Postal es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('El dato Código Postal es obligatorio.',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_ClientesDireccionFacturacionGC.provincia)
	{
		forms.dlg_ClientesDireccionFacturacionGC.elements.provincia.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El dato Provincia es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('El dato Provincia es obligatorio.',null,'Aceptar',null,null,null)
	}
	else
	{
		//set a global to the text of the button pressed
		globals.GCdialog_buttonPressed = elements.btn_ok.text
		
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) 
			{
				globals.GCsaveEdits()
			}
		}
		
		databaseManager.saveData();
		application.getWindow('Clientes Direccion Facturacion').hide();
		globals.GCenableBgElements();
	}

}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CE6F3ED0-E65A-470C-8D7C-354DB3088D13"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	
	
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
 * @properties={typeid:24,uuid:"917C8C8C-5836-448D-8B91-4BFD409F0174"}
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
	application.getWindow('Clientes Direccion Facturacion').hide();
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
 * @properties={typeid:24,uuid:"D23D8ED3-40E5-4CE7-8E93-B8190B2D765D"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA530600-A7FA-4726-B2B7-F7E367105236"}
 */
function onLoad(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}
