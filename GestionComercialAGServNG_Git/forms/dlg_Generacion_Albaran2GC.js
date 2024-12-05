/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"0ABA8EE0-B3AC-4937-915E-08BDB3AF031D",variableType:8}
 */
var Importe;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"82752B5F-55D4-43F5-B246-35A17B0BDEB0",variableType:8}
 */
var NuevoAlbaran;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"35D40F32-D27C-4B65-AB86-2CD947604BC8"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * @properties={typeid:24,uuid:"4CBE8FAD-35EA-481F-A8EE-EDB2D129FA6D"}
 */
function sub_setNewNumeroLinea()
{
	var query = 'select [NumAlbaran] from [ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	NuevoAlbaran = dataset.getValue(1, 1) + 1	
}

/**
 * @properties={typeid:24,uuid:"108BA95B-4122-4EAF-B44D-32E3091E8791"}
 */
function setImporteTotal()
{
	//var query = 'select [impnee_cof] from [cofertas] where [cof_cof]='+cod_cof
	//var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Importe = impnee_cot//dataset.getValue(1, 1)	
}

/**
 * @properties={typeid:24,uuid:"85B4A470-EA7B-4EBB-9C13-4B8F0A06A5B0"}
 */
function validate_autoEnter()
{
	sub_setNewNumeroLinea();	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"F5415F76-8B2A-4181-A7B1-17535D3967B5"}
 */
function onShow() {
	// TODO Auto-generated method stub
	setImporteTotal();
	validate_autoEnter()
}
