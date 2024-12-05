/**
 * @properties={typeid:24,uuid:"6E2F11E8-99CA-4E42-92C8-127F18B392DB"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Clientes Notas').hide();
	globals.GCenableBgElements();
	
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"72B36091-8151-43F8-8DA0-E7F98F32287E"}
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 */
function btn_AceptarEmpresa() {
	// TODO Auto-generated method stub
	if(!forms.dlgClientesNotasGC.fecha)
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
		
		application.getWindow('Clientes Notas').hide();
		globals.GCenableBgElements();
		globals.GCenableBgElements();
	}
}

/**
 * @properties={typeid:24,uuid:"228DC829-9388-4F17-8867-A39AAE0EF6A7"}
 */
function btn_3rdBtn()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits()
	}
	application.getWindow('Clientes Notas').hide();
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
 * @properties={typeid:24,uuid:"6F7A2255-F774-485D-8320-FB45F36CD265"}
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
 * @properties={typeid:24,uuid:"E22005D5-7817-47FF-A90C-550A0D8FDF0A"}
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
	application.getWindow('Clientes Notas').hide();
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
 * @properties={typeid:24,uuid:"30F2E305-9BD9-4CC5-820A-CA7D27FD04CD"}
 */
function onShow() {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	globals.GCdialog_buttonPressed = null;
}
