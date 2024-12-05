/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BED8A9D5-6230-44A1-A528-8E542FBBC998",variableType:4}
 */
var PorcCambio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9BB4EE45-273C-4758-B6E3-B1BA1C2A5C53"}
 */
var Familia = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FD5916E0-15E1-4B4D-9F2A-A776CFB38F98"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"92762653-79CE-4DF3-A776-4D84D90EBED9"}
 */
function onShow() {
	// TODO Auto-generated method stub	
	Familia = null
	PorcCambio = 0	
	elements.PorcCambio.requestFocus()
	elements.PorcCambio.selectAll()
}
