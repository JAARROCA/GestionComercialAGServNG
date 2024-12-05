/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"34CB9408-A76D-4CE4-88A7-BDCA19C68FC1"}
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
 * @properties={typeid:24,uuid:"DBF322AD-D889-4736-92F5-7C4F10CAA77F"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Imagen Articulo').hide();
	globals.GCenableBgElements();
	return true
}
