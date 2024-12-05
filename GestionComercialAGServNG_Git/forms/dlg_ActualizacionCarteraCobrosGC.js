/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"43387528-805B-4B8E-A2A6-9A227FE40D47",variableType:8}
 */
var DesdeNup = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"AD574ED5-D089-4BDD-888B-F7009ED6CE01"}
 */
var DesdeSer = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"924316F3-CA33-4444-A8D3-C2232E97270A",variableType:8}
 */
var DesdeEjer = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"58398A8A-9E62-4937-B643-55C13DEA31FB",variableType:8}
 */
var HastaNup = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"C00B9925-7FE6-4EFF-B64B-EF0A33C32566"}
 */
var HastaSer = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"DD817DEF-6C8D-402E-BBFB-A66DD59A5268",variableType:8}
 */
var HastaEjer = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"EE283BD0-AA70-44C3-A8B7-323C03D80831"}
 */
var Ejercicio = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6F6D6E91-04F6-4201-92ED-343968388269"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"9EA78552-F176-42DD-A58F-35DEAD42D9FA"}
 */
function onShow() {
	// TODO Auto-generated method stub
	/*var query = 'select [EmpresaContable] from [ParametrosAplicacion] where [NºEmpresa] = 1'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Ejercicio = dataset.getValue(1,1)*/
	Ejercicio = gcparametrosaplicacion_to_parametrosaplicacion.empresacontable
	if(Ejercicio == null || Ejercicio == '') Ejercicio = 'NO DEFINIDO'
	elements.DesdeEjer.requestFocus();
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B4E349B-0BC7-4354-B23C-30C1E981B911"}
 */
function onActiondesdeejer(event) {
	// TODO Auto-generated method stub
	elements.DesdeSer.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E12C7C1-4C92-4418-9BF2-9AD56797238E"}
 */
function onActiondesdeser(event) {
	// TODO Auto-generated method stub
	elements.DesdeNup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"381CDA25-C803-47D2-8024-A598E3B4FE52"}
 */
function onActiondesdenfact(event) {
	// TODO Auto-generated method stub
	elements.HastaEjer.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"50C38F0E-5956-457E-8479-18D69422FCA0"}
 */
function onActionhastaejer(event) {
	// TODO Auto-generated method stub
	elements.HastaSer.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E5B1598C-3C5D-46EE-A43A-B0D489A472C3"}
 */
function onActionhastaser(event) {
	// TODO Auto-generated method stub
	elements.HastaNup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4E894B47-E062-4010-93AA-88138DC5DE61"}
 */
function onActionhastanfact(event) {
	// TODO Auto-generated method stub
	
}
