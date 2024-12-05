/**
 * 
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"E99BD7A7-97AA-4799-AB00-160BF68A0CA1"}
 */
function btn_cancel(event)
{
	//set a global to the text of the button pressed
	application.getWindow('Agenda Usuario Lineas').hide();
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
 * @properties={typeid:24,uuid:"423294E4-C928-41C5-9F74-48B2E748A2E9"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel(event)
	return true
}
