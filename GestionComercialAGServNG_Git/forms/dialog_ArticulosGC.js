/**
 *
 * @properties={typeid:24,uuid:"3D5E2EF6-3C3B-45C2-AB17-344B459D45D2"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Articulos').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"0BEA7722-497C-495D-8DC0-7DA726B1D4F1"}
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
 * @properties={typeid:24,uuid:"A87DC195-AAEF-43C7-8ECC-396F93F2FA81"}
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
 * @properties={typeid:24,uuid:"C3C20F07-A6F9-4988-9F50-A7E93C801675"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	forms.dlgArticulosGC.elements.fld_search_cuenta.requestFocus()
}
