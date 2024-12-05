/**
 *
 * @properties={typeid:24,uuid:"52A5632E-F4C0-4F51-B1B9-83A2D12754DA"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Proveedores2').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"5293559E-BEAF-44A3-AC9C-26C9E07AFDF6"}
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
 * @properties={typeid:24,uuid:"0A06458F-0091-4807-B9A5-2ECFAE3550FD"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}
