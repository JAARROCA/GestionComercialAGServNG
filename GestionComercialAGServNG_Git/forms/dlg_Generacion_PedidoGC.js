/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"2F1D1662-A94D-4D59-A1ED-72A818AD7E64",variableType:8}
 */
var Importe;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"7D257AE6-90CD-4C00-B43D-F11CB6914F68",variableType:8}
 */
var NuevoPedido;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F403485D-A23F-42A2-85EE-06118BC50C9F"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * @properties={typeid:24,uuid:"C482C777-B1E4-4A3D-91BB-59066283DFF0"}
 */
function sub_setNewNumeroLinea()
{
	var query = 'select [numpedido] from [dbo].[ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	NuevoPedido = dataset.getValue(1, 1) + 1	
}

/**
 * @properties={typeid:24,uuid:"0A014D28-663B-4208-83B6-A4DC8F47F014"}
 */
function setImporteTotal()
{
	var query = 'select sum([impor_lof]) from [dbo].[lofertas] where [nup_lof]='+cod_cof
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Importe = dataset.getValue(1, 1)	
}

/**
 * @properties={typeid:24,uuid:"C26DE4C6-9BBE-4552-836A-424814A6D4F8"}
 */
function validate_autoEnter()
{
	sub_setNewNumeroLinea();	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"EB563259-6360-4AEA-AC80-9DFA14366775"}
 */
function onShow() {
	// TODO Auto-generated method stub
	validate_autoEnter();	
	setImporteTotal();
}
