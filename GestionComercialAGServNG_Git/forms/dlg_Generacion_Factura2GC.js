/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"3D32112E-DFC6-4FAC-AC39-0BF580E5E1B1",variableType:8}
 */
var Importe;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"AE3E7E6C-338C-4780-891B-114D3FDBED2D"}
 */
var NuevaFactura = '';

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"C4B20DA0-8CC8-466B-86EA-189F6984BD55"}
 */
var Ejer = '';

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"0640F954-B5A8-450D-A980-CB9021C4A02E",variableType:8}
 */
var NF;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5423C5A-5CD1-4B15-A818-00AECA2D0459"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 *
 * @properties={typeid:24,uuid:"AFE410B5-79F5-4397-8433-37844225BF09"}
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
*
 * @properties={typeid:24,uuid:"82923C23-DD5D-4E3B-A2A0-58D5F89A77CF"}
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
 * @properties={typeid:24,uuid:"245AF5BA-466D-4554-97F7-5BD6EC0898A5"}
 */
function setImporteTotal()
{
	//var query = 'select [impnee_cof] from [cofertas] where [cof_cof]='+cod_cof
	//var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Importe = impnee_cof//dataset.getValue(1, 1)	
}

/**
 *
 * @properties={typeid:24,uuid:"D25743CB-3EC5-4519-96C1-097D2FB7C832"}
 */
function validate_autoEnter()
{	
	if(piva_cof != 0 && piva_cof != null) sub_setNewNumeroFactura();	
	else sub_setNewNumeroNota();
}

/**
 *
 * @properties={typeid:24,uuid:"C1E415C5-21B0-4D69-97FD-E13A2DA27B30"}
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
 * @properties={typeid:24,uuid:"74783D12-AD2F-441B-95C1-A017477CB8DE"}
 */
function onShow() {
	// TODO Auto-generated method stub
	setImporteTotal();
	validate_autoEnter()
}
