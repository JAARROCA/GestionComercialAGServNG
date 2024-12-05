/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D223AB59-E50B-4E49-AEC5-5BCE09251F58"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	
}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"EA336F9A-FF57-4976-AB00-09015CB0AD40",variableType:93}
 */
var FechaPedidoCompraDuplicar;

/**
 * Callback method for when form is shown.
 *
* @properties={typeid:24,uuid:"2790FFED-6B60-40B9-885C-5477358FF88F"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(new Date(),'dd-MM-yyyy')
	FechaPedidoCompraDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
	
	elements.FechaPresupuestoDuplicar.requestFocus()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"3582A99F-CFE0-4A77-94C7-71C195C2C895"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(FechaPedidoCompraDuplicar,'dd-MM-yyyy');
	FechaPedidoCompraDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
}
