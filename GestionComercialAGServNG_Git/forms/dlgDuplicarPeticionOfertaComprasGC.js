/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"16412F89-9BB0-4013-A72C-017CABE40AD1"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	
}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"9104A59D-37F7-4E41-A85E-CAD168BC4EC1",variableType:93}
 */
var FechaPeticionOferta;

/**
 * Callback method for when form is shown.
 *
* @properties={typeid:24,uuid:"542E402A-6931-49D2-9187-9E889B10DB2C"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(new Date(),'dd-MM-yyyy')
	FechaPeticionOferta = utils.parseDate(fech,'dd-MM-yyyy')
	
	elements.FechaPresupuestoDuplicar.requestFocus()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"31B381CB-5B73-4E60-8263-E1FBC1E62BB0"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(FechaPeticionOferta,'dd-MM-yyyy');
	FechaPeticionOferta = utils.parseDate(fech,'dd-MM-yyyy')
}
