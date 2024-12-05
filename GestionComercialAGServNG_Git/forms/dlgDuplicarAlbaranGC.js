/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"878D1CB3-263C-48A3-ADB3-643B9A48CF55"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	
}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"9139D965-9CAD-4D4C-983C-24CA1A60112B",variableType:93}
 */
var FechaAlbaranDuplicar;

/**
 * Callback method for when form is shown.
 *
* @properties={typeid:24,uuid:"404778CB-36E9-4262-BB3A-30D688C30FDA"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(new Date(),'dd-MM-yyyy')
	FechaAlbaranDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
	
	elements.FechaFacturaDuplicar.requestFocus()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"F5A8842B-CFB2-46F9-9C56-8AB0D94334AC"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(FechaAlbaranDuplicar,'dd-MM-yyyy');
	FechaAlbaranDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
}
