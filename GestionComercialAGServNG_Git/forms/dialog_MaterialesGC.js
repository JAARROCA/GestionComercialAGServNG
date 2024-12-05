/**
 *
 * @properties={typeid:24,uuid:"49E139EF-4DAD-4055-A35C-6A1575605E39"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Materiales').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2B623574-7F44-4356-8FD7-3EDE3A5AB2E1"}
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
 * @properties={typeid:24,uuid:"A4B7D4C2-EE4E-4525-ACB4-48AAC055F1F2"}
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
 * @properties={typeid:24,uuid:"6AE60660-1036-44E8-A83E-D03444079CDE"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	forms.dlgMaterialesGC.elements.fld_search_cuenta.requestFocus()
}
