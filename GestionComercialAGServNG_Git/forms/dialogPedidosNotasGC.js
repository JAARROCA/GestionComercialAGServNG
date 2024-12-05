/**
 * @properties={typeid:24,uuid:"49A6EAE2-3DEC-462D-8ADF-C040CA858E96"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Pedidos Notas').hide();
	globals.GCenableBgElements();
	
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"274EAD58-6760-4EC3-9B0E-5ACF71517478"}
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 */
function btn_AceptarEmpresa() {
	// TODO Auto-generated method stub
	if(!forms.dlgPedidosNotasGC.fecha)
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
		
		application.getWindow('Pedidos Notas').hide();
		globals.GCenableBgElements();
		
	}
}

/**
 * @properties={typeid:24,uuid:"951E76B9-DDF9-42E5-8C41-AF8D2F6C4429"}
 */
function btn_3rdBtn()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits()
	}
	application.getWindow('Pedidos Notas').hide();
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
 * @properties={typeid:24,uuid:"446581C5-9486-42C2-91CB-D858DC2DA568"}
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
 * @properties={typeid:24,uuid:"A4649C40-C34D-4640-98D3-CAD69DB72641"}
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
	application.getWindow('Pedidos Notas').hide();
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
 * @properties={typeid:24,uuid:"7ABAC27A-6DC2-45B1-A117-77567171B59E"}
 */
function onShow() {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	globals.GCdialog_buttonPressed = null;
}
