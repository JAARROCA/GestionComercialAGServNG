/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"7A4C52EB-7762-4373-8200-FA5FFD27F876"}
 */
var html_datosconexion = null;

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"680F4DEE-614F-4666-803B-BC0DEDADAF34"}
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
 *
 * @properties={typeid:24,uuid:"3D24B399-6647-4A6D-9A2F-722C08E2F1C6"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Datos Conexion').hide();
	globals.GCenableBgElements();
	return true
}
