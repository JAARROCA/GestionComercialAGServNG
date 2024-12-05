/**
 * @properties={typeid:24,uuid:"2AB16041-E093-44AC-ADE2-4DF866875914"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Usuarios').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4803E1A6-CFDC-49BF-BF02-B252C95E1433"}
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
 * @properties={typeid:24,uuid:"882E58BB-D489-4610-945D-198542BE3B00"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Usuarios').hide();
	globals.GCenableBgElements();
	return true
}
