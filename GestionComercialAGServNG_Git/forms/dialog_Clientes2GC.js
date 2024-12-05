/**
 *
 * @properties={typeid:24,uuid:"69E7490F-2FA4-4819-B537-A32F08EF0389"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Clientes2').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"AAAB34B5-5100-425D-BAF5-F0B5E46C441B"}
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
 * @properties={typeid:24,uuid:"2C93A702-2220-40D2-A1BC-451E149BE836"}
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
 * @properties={typeid:24,uuid:"D98AC7C1-9561-40E8-900F-7345AEE4575D"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	forms.dlgClientes2GC.elements.fld_search_cuenta.requestFocus()
}
