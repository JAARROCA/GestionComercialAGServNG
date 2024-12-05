/**
 * @properties={typeid:24,uuid:"45FA20C2-50D7-4D7E-B92B-D857E357EBAF"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Albaran Notas').hide();
	globals.GCenableBgElements();
	
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"93CCE003-1D19-408E-B028-A10D0DEFD1A0"}
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 */
function btn_AceptarEmpresa() {
	// TODO Auto-generated method stub
	if(!forms.dlgAlbaranNotasGC.fecha)
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
		
		application.getWindow('Albaran Notas').hide();
		globals.GCenableBgElements();
		
	}
}

/**
 * @properties={typeid:24,uuid:"DFED43C1-986F-4B3E-B992-E7A323A28024"}
 */
function btn_3rdBtn()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits()
	}
	application.getWindow('Albaran Notas').hide();
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
 * @properties={typeid:24,uuid:"7E742A58-C2A3-4C89-9BB0-06ED1E9D85CE"}
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
 * @properties={typeid:24,uuid:"E9A40520-C2C0-4438-8F35-A553093F0A80"}
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
	application.getWindow('Albaran Notas').hide();
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
 * @properties={typeid:24,uuid:"7A7EC799-3C60-43BF-B952-5ABFF82BACE8"}
 */
function onShow() {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	globals.GCdialog_buttonPressed = null;
}
