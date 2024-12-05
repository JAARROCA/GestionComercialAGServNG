/**
 *
 * @properties={typeid:24,uuid:"976DAB93-4F23-45ED-BA45-FF6600225988"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Familias').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"043C7647-0A39-4AC6-A3E6-8BF85B90529B"}
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
 * @properties={typeid:24,uuid:"394C330D-65D9-4A6E-B070-44557669FBEE"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Familias').hide();
	globals.GCenableBgElements();
	return true
}
