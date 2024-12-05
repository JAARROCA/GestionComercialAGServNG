/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7BDB1F2D-D8ED-4B92-8E4C-931A298C6CD5"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	
}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"4642697F-CABC-43B5-99A3-9F716BC87316",variableType:93}
 */
var FechaPedidoDuplicar;

/**
 * Callback method for when form is shown.
 *
* @properties={typeid:24,uuid:"295F7EA0-FDA0-492A-B5E1-B70C4E3B015F"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(new Date(),'dd-MM-yyyy')
	FechaPedidoDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
	
	elements.FechaPresupuestoDuplicar.requestFocus()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"48DCE5B6-CE7D-456D-BA2D-E61911692C2B"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(FechaPedidoDuplicar,'dd-MM-yyyy');
	FechaPedidoDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
}
