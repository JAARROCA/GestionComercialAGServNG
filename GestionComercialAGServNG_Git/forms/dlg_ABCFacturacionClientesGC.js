/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1161F380-B37B-4574-B7EF-5903072F1E46",variableType:4}
 */
var Agno = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA6316F2-53CB-4A7A-9DD2-A65ADA1311B9"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"FB00E73F-409D-42B7-9EE3-AF0F2ADED3C8"}
 */
function onShow() {
	// TODO Auto-generated method stub
	
	Agno = new Date().getFullYear();	
		
	elements.Agno.requestFocus();
	elements.Agno.selectAll()
}
