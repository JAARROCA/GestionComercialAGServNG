/**
 * 
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"45469546-B5DF-474F-BBB7-0947294E6E14"}
 */
function btn_cancel(event)
{
	//set a global to the text of the button pressed
	application.getWindow('ContactaGC').hide();
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
 * @properties={typeid:24,uuid:"9A84045B-4A5B-445A-B7AF-B6028B3FAA0F"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel(event)
	return true
}
