/**
 *
 * @properties={typeid:24,uuid:"477EB229-041A-4A13-B139-58DA77528D44"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Cuentas Bancos').hide();
	globals.GCenableBgElements();
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"881A08AB-1D05-4917-9297-83E2F81002DF"}
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
 * @properties={typeid:24,uuid:"40E7884D-620D-40D3-AB8B-AD912DF39860"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}
