/**
 *
 * @properties={typeid:24,uuid:"FA89A85B-46B6-41E7-8C69-7BEAAFFC2C80"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Transportistas').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"8E786D4B-A344-4DCF-94F7-5C6297A7A8D6"}
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
 * @properties={typeid:24,uuid:"0942403F-4DD2-4CFC-803C-F92ADF534B37"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}
