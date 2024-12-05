/**
 * @properties={typeid:24,uuid:"003CBFBA-2F4A-4ABC-9008-BF55E195A089"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Articulos Notas').hide();
	globals.GCenableBgElements();
	
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"692C9585-5030-40A9-B436-2CE43FFED8DD"}
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 */
function btn_AceptarEmpresa() {
	// TODO Auto-generated method stub
	if(!forms.dlgArticulosNotasGC.observaciones)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Introduzca Observaciones.','¡Error!')
		else globals.GCshowErrorDialog('Introduzca Observaciones.', null, null, null, null, null)
	}
	else
	{
		globals.GCdialog_buttonPressed = elements.btn_ok.text
		
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) globals.GCsaveEdits()
		}
		
		databaseManager.saveData();
		
		application.getWindow('Articulos Notas').hide();
		globals.GCenableBgElements();
		
	}
}

/**
 * @properties={typeid:24,uuid:"053B7281-52F4-4A16-B525-77006D3ADC2E"}
 */
function btn_3rdBtn()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits()
	}
	application.getWindow('Articulos Notas').hide();
	globals.GCenableBgElements();
	
	
	if(globals.GCdialog_performMethod)
	{
		//perform whatever method is in the global
		eval(globals.GCdialog_performMethod)
		globals.GCdialog_performMethod = null
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2F99D13F-ACA2-4425-B7AD-AEFCF0403A88"}
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
 * @properties={typeid:24,uuid:"2D4A14E6-15F6-4273-B929-4A428A60A737"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing()
		}
		
	}
	application.getWindow('Articulos Notas').hide();
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
 * @properties={typeid:24,uuid:"6ADD42C5-08C6-4E53-B771-4AAC8D19FEC3"}
 */
function onShow() {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	globals.GCdialog_buttonPressed = null;
}
