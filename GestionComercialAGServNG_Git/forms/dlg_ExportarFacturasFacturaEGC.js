/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"EC92D0FC-D37C-47E2-84FE-07E79902CFAA"}
 */
var Certif = null;

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"EA419C0B-D9E3-4D40-9220-C72061D2FF55",variableType:8}
 */
var FormatoFactura = null;

/**
 * @type {Number}
 * 
 *
 * @properties={typeid:35,uuid:"67FCFCD1-3C7C-45C6-815D-3C84254F163E",variableType:8}
 */
var FormatoFactura2 = null;

/**
 * @type {Number}
 * 
 *
 *
 * @properties={typeid:35,uuid:"62FDE370-CDD5-467F-9555-E47FF8D1A72D",variableType:8}
 */
var FormatoFactura3 = null;

/**
 * @type {Number}
 * 
 *
 *
 *
 * @properties={typeid:35,uuid:"86B2E8C0-6B4D-4C2E-B079-5DD6A1508724",variableType:8}
 */
var FormatoFactura4 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9E704A4A-0776-4C9A-AD4C-A2539BBC23D5",variableType:4}
 */
var versFacturaE = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"66DEA5A3-7D6E-4A47-B4A5-341FDE4C676F",variableType:4}
 */
var FacturaE = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1FD19D88-7C16-4833-A74B-8BE286135941",variableType:4}
 */
var FacturaProForma = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B836C309-BACF-46FB-AFC0-E7F129AB6A61"}
 */
var HastaDescCliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8B869937-D321-4AA5-96E4-AD2BCD1E4BB9"}
 */
var DescDesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1DAC1711-B945-47E7-B84D-71C4907C0822",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"372FDABB-974B-43EA-9E85-B8D64742EA77",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"F9C96EDB-1960-4B81-918E-C897D2AD27DB",variableType:8}
 */
var HastaEje = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"DDEBD723-AE38-4959-9A58-541758660C15"}
 */
var HastaSer = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"16C52E44-E498-4A4B-B191-8FC8FCF947A5",variableType:8}
 */
var HastaNup = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"0A59579F-02E6-478C-92D7-C618D0CEB274",variableType:8}
 */
var DesdeEje = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"5BC2C4CD-0214-4A38-852F-D3C23A975A14"}
 */
var DesdeSer = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"C6BD267D-1C7F-44C5-AEBF-530145BDD02A",variableType:8}
 */
var DesdeNup = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F4047FBA-83C1-44E3-9FA6-54F46949E1B2"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"41861CF3-2282-4E74-8636-0FDC2251A628"}
 */
function onShow(event) {
	// TODO Auto-generated method stub
	/*var A = new Date().getFullYear().toString()
	A = A.substr(2,4)
	DesdeEje = A
	HastaEje = A
	DesdeSer = ''
	HastaSer = ''
	DesdeNup = null
	HastaNup = null*/
	versFacturaE = 2;
	FacturaE = 1;
	FacturaProForma = null;
	/*var formato = gcparametrosaplicacion_to_parametrosaplicacion.facturapredet;
	if(!formato) formato = 1
	if(formato == 1){
		onActionFormatoFactura1(event)
	}
	else if(formato == 2){
		onActionFormatoFactura2(event)
	}
	else if(formato == 3){
		onActionFormatoFactura3(event)
	}
	else if(formato == 4){
		onActionFormatoFactura4(event)
	}
	certif()
	
	globals.GCSalidaPor = 0;
	if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
	{
		elements.lbl_clavecertif.visible = false;
		elements.filename.visible = false;
		elements.lbl_salidapor.visible = true;
		elements.rdSalidaPor.visible = true;
	}
	else
	{
		elements.lbl_clavecertif.visible = true;
		elements.filename.visible = true;
		elements.lbl_salidapor.visible = false;
		elements.rdSalidaPor.visible = false;
	}*/
	elements.lblversion.visible = false;
	elements.rdFacturaE.visible = false;
	elements.rdFacturaE.enabled = false;
	elements.desdenup.requestFocus()
	
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"36A46CA0-6A10-4AA8-BFBA-7DD7F51F63CC"}
 */
function onActiondesdeeje(event) {
	// TODO Auto-generated method stub
	elements.desdeser.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"534005D9-8E68-4858-AA46-0451E5D25A38"}
 */
function onActiondesdeser(event) {
	// TODO Auto-generated method stub
	elements.desdenup.selectAll()
	elements.desdenup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"E6D79C5E-2366-4D6C-9737-34B95238C6D3"}
 */
function onActiondesdenup(event) {
	// TODO Auto-generated method stub
	elements.hastanup.selectAll()
	elements.hastanup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"192179A1-A800-495D-9999-2B0C5F769B98"}
 */
function onActionhastaeje(event) {
	// TODO Auto-generated method stub
	elements.hastaser.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"F1EF48AF-C349-4B60-B752-73496567E002"}
 */
function onActionhastaser(event) {
	// TODO Auto-generated method stub
	elements.hastanup.selectAll()
	elements.hastanup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"E3EF2E2C-73AE-4B29-9651-DD2C3497AA66"}
 */
function btn_DesdeCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ExportarFacturasFacturaEGC1';
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"6A2C5200-57E3-42DD-A964-9DA2C12F5ED5"}
 */
function btn_HastaCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ExportarFacturasFacturaEGC2';
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B9BA91FA-B691-4D6F-BC16-AA81B839E82E"}
 */
function onActionhastanup(event) {
	// TODO Auto-generated method stub
	elements.DesdeCliente.requestFocus()
	elements.DesdeCliente.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"8B49698B-276C-4572-B968-ED524CD42A27"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.HastaCliente.requestFocus()
	elements.HastaCliente.selectAll()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"BF1795F7-1637-4C47-8C2C-5B4121EAE9B8"}
 */
function onDataChangeDesdeCliente() {
	// TODO Auto-generated method stub
	if(DesdeCliente)
	{
		var query = "select desccliente from tbmaestroclientes where idcliente = " + DesdeCliente;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		DescDesdeCliente = dataset.getValue(1,1)
	}
	else
	{
		DescDesdeCliente = null
	}
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"2794A167-3733-4E56-93D8-2DB05EA492A5"}
 */
function onDataChangeHastaCliente() {
	// TODO Auto-generated method stub
	if(HastaCliente)
	{
		var query = "select desccliente from tbmaestroclientes where idcliente = " + HastaCliente;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		HastaDescCliente = dataset.getValue(1,1)
	}
	else
	{
		HastaDescCliente = null
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"498667F9-E93B-44B9-AA8F-A65CD443772B"}
 */
function onActionFacturoProforma(event) {
	// TODO Auto-generated method stub
	if(FacturaE == 1) FacturaE = null;
	elements.lblversion.visible = false;
	elements.rdFacturaE.visible = false;
	elements.rdFacturaE.enabled = false;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"19DA3408-A229-4E28-9E9E-0615CFEA9D26"}
 */
function onActionFacturoE(event) {
	// TODO Auto-generated method stub
	if(FacturaProForma == 1) FacturaProForma = null;
	if(FacturaE == 0 || FacturaE == null)
	{	
		elements.lblversion.visible = false;
		elements.rdFacturaE.visible = false;
		elements.rdFacturaE.enabled = false;
	}
	else
	{
		elements.lblversion.visible = true;
		elements.rdFacturaE.visible = true;
		elements.rdFacturaE.enabled = true;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2AB0B758-9354-4D36-A694-0E3DF273493A"}
 */
function onActionFormatoFactura1(event) {
	// TODO Auto-generated method stub	
		FormatoFactura = 1;
		FormatoFactura2 = null;
		FormatoFactura3 = null;
		FormatoFactura4 = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D348E081-D2B9-4A22-8B5E-A46E7C3F1022"}
 */
function onActionFormatoFactura2(event) {
	// TODO Auto-generated method stub	
		FormatoFactura2 = 1;
		FormatoFactura = null;
		FormatoFactura3 = null;
		FormatoFactura4 = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"9FE8D9B5-3A54-4B54-BB07-9A7E378C697F"}
 */
function onActionFormatoFactura3(event) {
	// TODO Auto-generated method stub	
		FormatoFactura3 = 1;
		FormatoFactura = null;
		FormatoFactura2 = null;
		FormatoFactura4 = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"03BF5C91-7D77-46E5-9ADB-0AAF3041A65A"}
 */
function onActionFormatoFactura4(event) {
	// TODO Auto-generated method stub	
		FormatoFactura4 = 1;
		FormatoFactura = null;
		FormatoFactura2 = null;
		FormatoFactura3 = null;
}

/**
 * @properties={typeid:24,uuid:"CF587AD2-2D29-4A46-9D6E-5F9A0E81087B"}
 */
function certif(){
	if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) Certif = gcparametrosaplicacion_to_parametrosaplicacion.name_certifdigital;
	else Certif = 'NO SE HA GUARDADO CERTIFICADO ALGUNO\n EN LOS PARAMETROS DE LA APLICACIÓN'
	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @properties={typeid:24,uuid:"B2E92A1A-65EA-46A7-B868-83FBE25A7038"}
 */
function onDataChangednup() {
	if(DesdeNup && DesdeNup > HastaNup) HastaNup = DesdeNup;
}
