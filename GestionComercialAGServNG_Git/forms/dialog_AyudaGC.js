/**
 * 
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"FC81A5CF-49CF-4CBC-B749-51E66BF55C42"}
 */
function btn_cancel(event)
{
	//set a global to the text of the button pressed
	application.getWindow('Ayuda').hide();
	globals.GCenableBgElements();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
 *
 * @properties={typeid:24,uuid:"09A1CEA1-0144-4E75-ABC1-FD76A571615F"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel(event)
	return true
}
