/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C84083F1-97E8-4F02-A91D-FF9D8949E20D"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	
}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3EB3698A-6424-4F4F-8FD0-5F362607493E",variableType:93}
 */
var FechaFacturaDuplicar;

/**
 * Callback method for when form is shown.
 *
* @properties={typeid:24,uuid:"B66D8248-5BBA-4D01-A62F-2FE45C6CA495"}
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
 * @properties={typeid:24,uuid:"1F7957B7-2CD4-47E0-A7DD-FA11E48621AC"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	if(FechaFacturaDuplicar){
	var fech = utils.dateFormat(FechaFacturaDuplicar,'dd-MM-yyyy');
	FechaFacturaDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
	}
}
