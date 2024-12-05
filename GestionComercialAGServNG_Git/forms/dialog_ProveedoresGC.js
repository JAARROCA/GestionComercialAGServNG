/**
 *
 * @properties={typeid:24,uuid:"B0815410-9FCC-4539-8ED0-B13C47D3C365"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Proveedores').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2BC3602B-2EEB-40D1-AD8B-B10FB5127AD1"}
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
 * @properties={typeid:24,uuid:"A3D49538-8402-4837-8418-42F83C1E605B"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}
