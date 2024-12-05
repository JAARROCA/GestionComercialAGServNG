/**
 *
 * @properties={typeid:24,uuid:"49CD1913-5083-4D0B-872C-89D41832815E"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Formas Pago').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"46786F9C-72DD-4B07-864F-AFF3FCB03977"}
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
 * @properties={typeid:24,uuid:"D1782A95-8793-4D28-9134-25654B699596"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}
