/**
 *
 * @properties={typeid:24,uuid:"AC43BF1A-401D-4782-83F4-45E7CB5FBA39"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Paises').hide();
	globals.GCenableBgElements();
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"53E5E10B-7373-48F7-89D0-8FD26724ECEB"}
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
 * @properties={typeid:24,uuid:"8A353BDC-37C3-4133-9850-62A85C1EB2FD"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}
