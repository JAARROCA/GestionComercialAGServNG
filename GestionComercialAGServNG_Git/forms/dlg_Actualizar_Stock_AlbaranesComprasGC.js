/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"51A27190-B7C8-46AF-964F-AE26EF982D6D",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3C270CA3-7E16-4A99-A084-96EEA0C36088",variableType:93}
 */
var DesdeFecha = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"567446F6-3745-4898-8A78-B76676018C09"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"BF7D3571-E940-41FD-B1F4-4EC77793A8DC"}
 */
function onShow() {
	// TODO Auto-generated method stub
	HastaFecha = new Date();		
	DesdeFecha = null
	elements.DesdeFecha.requestFocus();
}
