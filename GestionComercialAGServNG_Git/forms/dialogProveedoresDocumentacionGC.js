/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"93DCA99E-4083-4BF0-A214-3B7E097D9849"}
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
 * @properties={typeid:24,uuid:"D88DCA94-8171-47B0-AC74-D50F21AE83E0"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Proveedores Documentacion').hide();
	globals.GCenableBgElements();
	return true
}
