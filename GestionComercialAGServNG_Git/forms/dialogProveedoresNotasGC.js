/**
 * @properties={typeid:24,uuid:"11551603-BDE8-42E2-946D-AFC8622BC485"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Proveedores Notas').hide();
	globals.GCenableBgElements();
	
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"08D20C16-6312-4430-A6B3-17F836F9DAF0"}
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 */
function btn_AceptarEmpresa() {
	// TODO Auto-generated method stub
	if(!forms.dlgProveedoresNotasGC.fecha)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Introduzca fecha de la Nota.','¡Error!')
		else globals.GCshowErrorDialog('Introduzca fecha de la Nota.', null, null, null, null, null)
	}
	else
	{
		globals.GCdialog_buttonPressed = elements.btn_ok.text
		
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) globals.GCsaveEdits()
		}
		
		databaseManager.saveData();
		
		application.getWindow('Proveedores Notas').hide();
		globals.GCenableBgElements();
		globals.GCenableBgElements();
	}
}

/**
 * @properties={typeid:24,uuid:"4F8BEC70-352B-4E2B-8D76-8A3D5DA7FC29"}
 */
function btn_3rdBtn()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits()
	}
	application.getWindow('Proveedores Notas').hide();
	globals.GCenableBgElements();
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
 * @properties={typeid:24,uuid:"A40425CD-8FB7-4794-9991-12CBCFF5D8EE"}
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
 * @properties={typeid:24,uuid:"E1855471-9029-4BE0-BDC6-72E48AE2A722"}
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
	application.getWindow('Proveedores Notas').hide();
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
 * @properties={typeid:24,uuid:"32EF476E-7D19-4FEE-BB05-3A158A875351"}
 */
function onShow() {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	globals.GCdialog_buttonPressed = null;
}
