/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"437B58FA-0EE6-46EE-A141-2E5D001E9BEC",variableType:8}
 */
var Importe;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5BE10E6F-1B6C-4A50-9806-83C018F41D20",variableType:8}
 */
var NuevoAlbaran;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"950A24D9-A308-443B-B452-A581878E6193"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * @properties={typeid:24,uuid:"C26D5695-BE46-42DF-B784-9EC78339B7BF"}
 */
function sub_setNewNumeroLinea()
{
	var query = 'select [NumAlbaran] from [ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	NuevoAlbaran = dataset.getValue(1, 1) + 1	
}

/**
 * @properties={typeid:24,uuid:"8C9BA70B-366E-48D6-B495-2C2D26B5CCF1"}
 */
function setImporteTotal()
{
	//var query = 'select [impnee_cof] from [cofertas] where [cof_cof]='+cod_cof
	//var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Importe = impnee_cof//dataset.getValue(1, 1)	
}

/**
 * @properties={typeid:24,uuid:"B18D3514-B104-4CAC-BD02-DB27949D98C5"}
 */
function validate_autoEnter()
{
	sub_setNewNumeroLinea();	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"B9389531-7638-41E8-A706-04C10508969E"}
 */
function onShow() {
	// TODO Auto-generated method stub
	setImporteTotal();
	validate_autoEnter()
}
