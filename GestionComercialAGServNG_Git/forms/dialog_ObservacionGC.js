/**
 *
 * @properties={typeid:24,uuid:"B20EEBA4-2A37-470C-8B53-A915B12F4FA7"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Observaciones').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"54CA5A56-568F-4614-92BA-10BEA58E2AA1"}
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
 * @properties={typeid:24,uuid:"B5D080AD-B91C-4BD5-A92B-E920CF740811"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"827DE6AA-37AB-4247-8820-A97FE8AE5A1E"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	forms.dlgObservacionGC.elements.fld_search_cuenta.requestFocus()
}
