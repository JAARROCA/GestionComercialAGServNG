/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"91598BC5-DCBA-427F-BDCA-4D47409EB9F1"}
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
 * @properties={typeid:24,uuid:"E927C354-0812-4695-AF9F-F273BB373039"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Politica Proteccion Datos').hide();
	globals.GCenableBgElements();
	return true
}
