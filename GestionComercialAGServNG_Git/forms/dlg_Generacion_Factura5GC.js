/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6DBBBDE7-C8DF-43E0-94B7-8DF08DD560D5",variableType:4}
 */
var TipoFra = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"43E38369-FAE5-4A02-959F-702E095C117A",variableType:8}
 */
var Importe;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"19040D02-7AA0-4974-B4C0-E5BFBF089FE1"}
 */
var NuevaFactura = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"08300701-90B4-4BD8-914D-07F8B4B12702"}
 */
var Ejer = '';

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"50C0A3C0-6318-4541-982A-3BEC95019C25",variableType:8}
 */
var NF;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"2379CF4E-EBBA-48E2-B36B-DB03E0564F00",variableType:8}
 */
var CLI;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"407E5AC4-24C6-434D-B9A6-E9EB4346C27E"}
 */
var DESCCLI = '';

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"40184C2A-DE8A-43A5-B39F-EC4C095066DC"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()	
	
}

/**
 * @properties={typeid:24,uuid:"F1197CA0-D3AC-44D6-A90B-942AC1E4FCD3"}
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
 * @properties={typeid:24,uuid:"6891188A-6A4B-4119-88A7-29EAC25AE23F"}
 */
function setImporteTotal()
{
	//var query = 'select [impnee_cal] from [calbaran] where [cod_cal]='+cod_cal
	//var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Importe = 0//dataset.getValue(1, 1)	
}

/**
 * @properties={typeid:24,uuid:"45E019F9-CF60-4D6A-AD6A-F05AEE5BD37D"}
 */
function validate_autoEnter()
{	
	sub_setNewNumeroFactura();	
	if(globals.AlbaranCliente)
	{
		CLI = forms.FrmAlbaranGC.clie_cal;
		DESCCLI = forms.FrmAlbaranGC.nomcl_cal;
	}
	else
	{
		CLI = null;
		DESCCLI = null;
	}
	globals.GCDesdeFecha = new Date();
}

/**
 * @properties={typeid:24,uuid:"16EE0967-DEB5-4947-A4AF-2D84801B1A30"}
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
 * @properties={typeid:24,uuid:"C339BF2A-C882-4254-8EE8-D199B039E7C2"}
 */
function onShow() {
	// TODO Auto-generated method stub
	setImporteTotal();
	validate_autoEnter()
	TipoFra = 0;
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"0C702217-EDBC-4129-93D5-EA81C9E39F0E"}
 */
function BtnCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Generacion_Factura5GC';
	//globals.GCshowDialogClientes('Clientes', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	var win = application.getWindow('Clientes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Clientes';
	//win.resizable = true;
	win.show(forms.dialog_ClientesGC)
}

/**
 * @properties={typeid:24,uuid:"A4BA5BF4-45B0-49D9-8FBD-D1A78C21072E"}
 */
function evt_changecliente()
{
	if(CLI)
	{
		var query = 'select idcliente, desccliente from tbmaestroclientes where idcliente = ' + CLI;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		globals.AlbaranCliente = dataset.getValue(1,1);
		DESCCLI = dataset.getValue(1,2);
	}
	else
	{
		DESCCLI = null;
		globals.AlbaranCliente = 0;
	}
	
}
