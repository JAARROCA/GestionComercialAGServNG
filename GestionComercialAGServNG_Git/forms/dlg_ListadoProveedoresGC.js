/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4C38B921-3DC4-4731-B895-865EF8981BC8"}
 */
var hprovincia = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"13AA76BD-B890-48BF-A7ED-E3731841ABBD"}
 */
var dprovincia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9961123D-565B-4558-8643-E8C48C26E4B3",variableType:4}
 */
var Tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D144B3A7-92C9-48AA-A1E9-91E0C83C370F",variableType:4}
 */
var Criterio = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"F3738728-188B-406E-93B7-CF6852069414"}
 */
var HastaDescProveedor = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"2622DF10-6288-4DD0-9229-E80A082D5EBF"}
 */
var DesdeDescProveedor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8BFA0382-219B-47EF-B9B8-E69DBAB5A4E4",variableType:4}
 */
var HastaProveedor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DBC02588-C515-4B35-8E60-58758BDA5C27",variableType:4}
 */
var DesdeProveedor = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"13EFC64C-7AC5-42FB-9E43-C047B6828DCD"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"8326DE10-45EC-4FCE-BEA7-0C5CEE2AA767"}
 */
function onShow() {
	// TODO Auto-generated method stub
	DesdeProveedor = null
	HastaProveedor = null
	DesdeDescProveedor = null
	HastaDescProveedor = null
	dprovincia = null
	hprovincia = null
	Criterio = 0;
	Tipo = 0;
	elements.DesdeProveedor.requestFocus()
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"80302B97-0FD0-4342-A8ED-0E729B6E61CE"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.HastaProveedor.requestFocus()
}
