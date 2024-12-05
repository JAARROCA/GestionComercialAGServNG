/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"19F54C40-6D9B-42C0-A84E-0B6857A95CA2"}
 */
var ClientesProveedores = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A7D6BEDA-8B0A-412D-BC46-C8F7C3AD5573"}
 */
var ClaveActualizacion = '';

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B2EA0E0C-2B6D-4E57-B73D-C122A6D95352"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"EAE3E6C8-CE89-4F0E-B9E0-63B7BE95EFD2"}
 */
function onShow() {
	// TODO Auto-generated method stub
	ClaveActualizacion = null
	globals.GCTipoIvaAnterior = null
	globals.GCTipoIvaNuevo = null
	ClientesProveedores = 'C'
	elements.Clave.requestFocus()
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6495AFFD-1380-47C6-97E4-7C84CA5C86D1"}
 */
function onActionclave(event) {
	// TODO Auto-generated method stub
	elements.Anterior.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C4BA38A8-ABEC-4E6F-A377-0D1C6A69ADDA"}
 */
function onActionanterior(event) {
	// TODO Auto-generated method stub
	elements.Nuevo.requestFocus()
}
