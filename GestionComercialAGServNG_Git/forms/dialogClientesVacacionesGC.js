/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F8257F24-2A92-45FF-8A0B-95F9C8B7EA32"}
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
 * @properties={typeid:24,uuid:"256751E6-6071-4430-94C3-E667E1A500BA"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Clientes Vacaciones').hide();
	globals.GCenableBgElements();
	return true
}
