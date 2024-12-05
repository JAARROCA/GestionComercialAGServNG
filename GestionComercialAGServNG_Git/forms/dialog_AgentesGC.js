/**
 *
 * @properties={typeid:24,uuid:"0A68201C-C1A5-489C-BC66-29FB2C086116"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Agentes').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"1E8A2187-5263-4FD2-91C5-F246C2E9311E"}
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
 * @properties={typeid:24,uuid:"8C63C116-0413-4D96-B61B-D77A3C8F6E88"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}
