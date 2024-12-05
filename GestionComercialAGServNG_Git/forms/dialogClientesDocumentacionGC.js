/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"9D03DA3E-5F26-429E-8528-6420596B0841"}
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
 * @properties={typeid:24,uuid:"F1217A1D-87B5-4E4E-8F78-CE77CDD3ADF9"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Clientes Documentacion').hide();
	globals.GCenableBgElements();
	return true
}
