/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C2047884-DBC7-4D6D-B71D-054AFF4AB6E6"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	
}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"F74036A2-7AA8-4FFA-BAD0-7F45D0D7201C",variableType:93}
 */
var FechaNotaDuplicar;

/**
 * Callback method for when form is shown.
 *
* @properties={typeid:24,uuid:"F988FEAE-73E6-4043-96E0-A59B7A4AC0F0"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(new Date(),'dd-MM-yyyy')
	FechaNotaDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
	
	elements.FechaFacturaDuplicar.requestFocus()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"B501A6EE-D770-43FB-9F39-D8234726305F"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(FechaNotaDuplicar,'dd-MM-yyyy');
	FechaNotaDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
}
