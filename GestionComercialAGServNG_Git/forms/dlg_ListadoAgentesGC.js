/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"035828FF-A5F4-432E-A165-4C79F1388153",variableType:4}
 */
var Tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D91AC2CC-F36B-42DD-82B4-D6C9BF75F0D8",variableType:4}
 */
var Criterio = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"5C53A3B9-F16B-4937-BCFD-906AD9E5B550"}
 */
var HastaDescAgente = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"11300C6E-1754-4B7A-972E-E6EFE0BEAE77"}
 */
var DesdeDescAgente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5502327D-237E-4F8F-8C5A-C45CCB51FE4D"}
 */
var HastaAgente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C153C7BF-A414-4CB3-802B-74B4C50DCF56"}
 */
var DesdeAgente = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"382BD06B-7DD4-4C61-B7BF-2B3DB46C7464"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"9F388B3D-D9EF-40B1-B0AB-441B339B402E"}
 */
function onShow() {
	// TODO Auto-generated method stub
	DesdeAgente = null
	HastaAgente = null
	DesdeDescAgente = null
	HastaDescAgente = null
	Criterio = 0;
	Tipo = 0;
	elements.DesdeCliente.requestFocus()
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0EA0C2C6-9667-4512-9143-87EC6A774E3B"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.HastaCliente.requestFocus()
}
