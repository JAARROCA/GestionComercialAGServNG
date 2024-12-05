/**
 *
 * @properties={typeid:24,uuid:"5249F380-1197-4251-B7B4-851894ED5D6C"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Articulos2').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"1326D905-3292-4494-84FC-9B1BDBB73C43"}
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
 * @properties={typeid:24,uuid:"53D52E68-1B84-4D96-AAF3-7317B8641FF7"}
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
 * @properties={typeid:24,uuid:"73C128A6-F35B-4844-8663-60752138DBAB"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	forms.dlgArticulos2GC.elements.fld_search_cuenta.requestFocus()
}
