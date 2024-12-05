/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"90EDB7B9-A027-4CA5-95F6-C256F3D8547C"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	
}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A44FA6AF-C5B8-4400-A158-E37A39165CE1",variableType:93}
 */
var FechaFacturaDuplicar;

/**
 * Callback method for when form is shown.
 *
* @properties={typeid:24,uuid:"6163D778-9575-4C9B-8B0D-E25049A3248B"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(new Date(),'dd-MM-yyyy')
	FechaFacturaDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
	
	elements.FechaFacturaDuplicar.requestFocus()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"6D306FF6-113F-4664-968A-0E9816AE0FF1"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(FechaFacturaDuplicar,'dd-MM-yyyy');
	FechaFacturaDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
}
