/**
 *
 * @properties={typeid:24,uuid:"A287847B-7196-49B8-A061-79CAB978D410"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Clientes').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"AAEF476D-15E0-4869-BB2F-0BEC23ADD468"}
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
 * @properties={typeid:24,uuid:"36F45861-30E9-48F7-9A62-8DD62634B2DD"}
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
 * @properties={typeid:24,uuid:"6D69CA8C-947F-4C1B-BFBD-F316A5F0854F"}
 */
function onShow(firstShow, event) {
	//forms.dlgClientesGC.elements.fld_search_cuenta.requestFocus()
}
