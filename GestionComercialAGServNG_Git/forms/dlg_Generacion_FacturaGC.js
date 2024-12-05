/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"A6F48B38-E693-4E15-B00D-90A258B32686",variableType:8}
 */
var Importe;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4ED4515A-6778-4E2F-91C7-B17F41EE9092"}
 */
var NuevaFactura = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ECE18451-5A01-4244-BCD6-8BC52D0B5EAB"}
 */
var Ejer = '';

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"A61B3494-C1BB-4EF0-BD75-22A6A3BF0E53",variableType:8}
 */
var NF;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE68196F-AF6F-4B79-8C77-92320952432A"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * @properties={typeid:24,uuid:"C36B3BA5-2F13-4919-97E3-435496677879"}
 */
function sub_setNewNumeroFactura()
{
	sub_setEjercicio();
	var query = 'select [NumFactura] from [ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	NF = dataset.getValue(1, 1) + 1	
	
	NuevaFactura = Ejer + utils.numberFormat(NF,'00000')
	elements.lblFactura.text = 'Nº Factura a generar'
	elements.lblTotalFactura.text = 'Total Factura'
}

/**
 *
 * @properties={typeid:24,uuid:"41A8BFA9-CD6B-4CC4-9A9F-0E01F3BD162F"}
 */
function sub_setNewNumeroNota()
{
	sub_setEjercicio();
	var query = 'select [NumNota] from [ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	NF = dataset.getValue(1, 1) + 1	
	
	NuevaFactura = Ejer + utils.numberFormat(NF,'00000')
	elements.lblFactura.text = 'Nº Nota a generar'
	elements.lblTotalFactura.text = 'Total Nota'
}

/**
 * @properties={typeid:24,uuid:"E2CBA8DF-C214-417B-A4E8-353FBD0ABA46"}
 */
function setImporteTotal()
{
	//var query = 'select [impnee_cal] from [calbaran] where [cod_cal]='+cod_cal
	//var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Importe = impnee_cal//dataset.getValue(1, 1)	
}

/**
 * @properties={typeid:24,uuid:"9773C0B8-B5E3-464E-BCDB-C908F5232D53"}
 */
function validate_autoEnter()
{	
	if(piva_cal != 0 && piva_cal != null) sub_setNewNumeroFactura();	
	else sub_setNewNumeroNota();	
}

/**
 * @properties={typeid:24,uuid:"E6BAEBC9-CA32-4065-8E7A-92E9AE81EFB2"}
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
 * @properties={typeid:24,uuid:"D9AF22F0-2659-40FA-8E6D-9C14FD413932"}
 */
function onShow() {
	// TODO Auto-generated method stub
	setImporteTotal();
	validate_autoEnter()
}
