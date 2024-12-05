/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A9797ACE-6C46-468F-83E4-F565061C2BF5"}
 */
var hprovincia = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4BBAB0CC-29E2-4774-9C52-D698A7AF667C"}
 */
var dprovincia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DA72767C-41F7-448D-B96D-245C7CDF3C46",variableType:4}
 */
var Tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2757E53A-4D9B-44E2-9C7F-BB8632FD6160",variableType:4}
 */
var Criterio = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"204628F5-7DB8-4B98-8592-C293C7591546"}
 */
var HastaDescCliente = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"47819A1C-EBAE-4AF9-AC8E-31D4D8C88A98"}
 */
var DesdeDescCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"98D89BB4-DFB0-43D4-8476-CE165F62DE49",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9206705A-A928-47AD-84B5-DDD4F8C2F91B",variableType:4}
 */
var DesdeCliente = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F0C9E23-52E3-4BCC-A37B-F80A4612C9A4"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"59104CDA-7DBF-4045-9FCF-F479B4C07720"}
 */
function onShow() {
	// TODO Auto-generated method stub
	DesdeCliente = null
	HastaCliente = null
	DesdeDescCliente = null
	HastaDescCliente = null
	dprovincia = null
	hprovincia = null
	Criterio = 0;
	Tipo = 0;
	elements.DesdeCliente.requestFocus()
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"22E203BF-268A-4506-9F14-CB0C2148365A"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.HastaCliente.requestFocus()
}
