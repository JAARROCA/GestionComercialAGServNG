/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"E2067614-7728-47E2-A7CE-4597EF4BEAFD",variableType:8}
 */
var Importe;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"2F0BE3D5-70F1-4320-939B-96D1263EDE27"}
 */
var NuevaFactura = '';

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"96C91F41-D6AA-4D49-896C-5A6CA3754556"}
 */
var Ejer = '';

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"D0209FB1-EE04-4735-86A7-1EA18BA02FC1",variableType:8}
 */
var NF;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EF0E3A67-F656-4FD4-84F4-2676D43FC3E7"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 *
 * @properties={typeid:24,uuid:"89263F71-3058-4C6C-890C-253741EF089A"}
 */
function sub_setNewNumeroFactura()
{
	sub_setEjercicio();
	var query = 'select [NumFacturaProforma] from [ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	NF = dataset.getValue(1, 1) + 1	
	
	NuevaFactura = Ejer + utils.numberFormat(NF,'00000')+'P';	
}

/**
 * @properties={typeid:24,uuid:"11534655-9BA3-439D-8A96-5712A206E45B"}
 */
function setImporteTotal()
{
	//var query = 'select [impnee_cof] from [cofertas] where [cof_cof]='+cod_cof
	//var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Importe = impnee_cof//dataset.getValue(1, 1)	
}

/**
 *
 * @properties={typeid:24,uuid:"7FD4208B-ACF8-4A15-816A-14E64C4D8B8D"}
 */
function validate_autoEnter()
{	
	sub_setNewNumeroFactura();	
	
}

/**
 *
 * @properties={typeid:24,uuid:"8EADA197-16B7-41A1-AFD9-0B8DE577B019"}
 */
function sub_setEjercicio()
{
	var Agno = new Date()
	Agno= Agno.getFullYear()
	var a = new String()
	a = Agno.toString()
	a= a.substr(2,2)
	Ejer = a
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"3CE5C884-6D76-4752-8D39-809389B6A1EF"}
 */
function onShow() {
	// TODO Auto-generated method stub
	setImporteTotal();
	validate_autoEnter()
}
