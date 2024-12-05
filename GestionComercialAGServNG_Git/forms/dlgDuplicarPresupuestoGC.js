/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"92943387-D8EA-43C1-AF98-CE8DA7F15194"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	
}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"FDB8AB03-61E8-4E16-ACC5-1D1360AF51C1",variableType:93}
 */
var FechaPresupuestoDuplicar;

/**
 * Callback method for when form is shown.
 *
* @properties={typeid:24,uuid:"3C131AE4-E429-48BC-87E4-348FBF5D651B"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(new Date(),'dd-MM-yyyy')
	FechaPresupuestoDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
	
	elements.FechaPresupuestoDuplicar.requestFocus()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"4915C7A1-379F-4DD9-92D2-F981A0A32CB8"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(FechaPresupuestoDuplicar,'dd-MM-yyyy');
	FechaPresupuestoDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
}
