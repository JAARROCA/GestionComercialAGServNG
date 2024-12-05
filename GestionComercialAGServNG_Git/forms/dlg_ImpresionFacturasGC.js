/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"87ADE250-6A1C-4C2C-B7BB-C44B75633E5B"}
 */
var Certif = null;

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"4098DDB7-E9FB-4145-BFC6-A78EB9D9BB4A",variableType:8}
 */
var FormatoFactura = null;

/**
 * @type {Number}
 * 
 *
 * @properties={typeid:35,uuid:"191E755E-5B77-415B-B241-3D19A05AD30B",variableType:8}
 */
var FormatoFactura2 = null;

/**
 * @type {Number}
 * 
 *
 *
 * @properties={typeid:35,uuid:"CF3DBA56-0987-4843-BF7E-7F870773DE64",variableType:8}
 */
var FormatoFactura3 = null;

/**
 * @type {Number}
 * 
 *
 *
 *
 * @properties={typeid:35,uuid:"0B52A3C6-98E0-4A34-9632-9401CB0457AC",variableType:8}
 */
var FormatoFactura4 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9CD558A5-A7B8-4B62-8DD4-429585AF45CB",variableType:4}
 */
var versFacturaE = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"03CDA49E-714E-4000-B618-9E0DD35CF41E",variableType:4}
 */
var FacturaE = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C154131E-5D72-476B-A215-5FC96C807F69",variableType:4}
 */
var FacturaProForma = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6EDA44FD-C1D1-4542-9D7C-5473F7A32335"}
 */
var HastaDescCliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C76CDC7E-EF91-4EEF-BE25-BE789A26F32E"}
 */
var DescDesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"545858C6-6DF9-4EF8-B973-71C15E8AEC07",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0138FD46-E3DB-4064-93DF-D48EBE6FB212",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"1EF10049-5C8D-422C-9B26-1A543114A518",variableType:8}
 */
var HastaEje = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"605CCC81-DDEA-44D8-A062-A5E7B0942F04"}
 */
var HastaSer = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"E6A1BABA-C654-41C6-A88C-9B9BE48DD5ED",variableType:8}
 */
var HastaNup = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"A21023ED-A893-4730-8FE7-457CF454FF8B",variableType:8}
 */
var DesdeEje = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"4802E472-D83C-45A1-AAC2-CAB68DAEA95A"}
 */
var DesdeSer = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"3BF8E979-BBD4-410A-BCF3-F83B6FAB29EE",variableType:8}
 */
var DesdeNup = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3F049837-AA37-441F-B096-D5ACBE17704C"}
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
 * @properties={typeid:24,uuid:"C8F9C047-EA42-4DB5-BF6D-7B21D3BCFEA4"}
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
	FacturaE = null;
	FacturaProForma = null;
	var formato = gcparametrosaplicacion_to_parametrosaplicacion.facturapredet;
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
	}
	elements.lblversion.visible = false;
	elements.rdFacturaE.visible = false;
	elements.rdFacturaE.enabled = false;
	elements.FacturaE.visible = false;
	elements.FacturaE.enabled = false;
	elements.logofacturae.visible = false;
	elements.logofacturae.enabled = false;
	elements.desdenup.requestFocus()
	
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"AD4BE426-E800-4681-A11E-C2F2996FACE3"}
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
 * @properties={typeid:24,uuid:"AB476D3E-844C-45D9-9D4A-A6155F6A770B"}
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
 * @properties={typeid:24,uuid:"85AF035D-28DD-4EAD-A006-9000BD25B3F2"}
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
 * @properties={typeid:24,uuid:"4C54F2B8-5047-4473-AB3E-47190EC0980A"}
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
 * @properties={typeid:24,uuid:"FA7AD52D-6EB2-4165-8C63-3C5DBCEBF146"}
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
 * @properties={typeid:24,uuid:"9EB09DF1-A36E-4A38-BA45-81AE13F65F25"}
 */
function btn_DesdeCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionFacturas1';
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
 * @properties={typeid:24,uuid:"A0DFFA99-530C-4A67-BC33-8006029795C8"}
 */
function btn_HastaCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionFacturas2';
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
 * @properties={typeid:24,uuid:"061C8E89-01D6-4249-8972-6B04CFF85248"}
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
 * @properties={typeid:24,uuid:"2CB0FF7E-6094-4CEA-889E-7EBFB4F4467E"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.HastaCliente.requestFocus()
	elements.HastaCliente.selectAll()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"FF3D10B4-9B30-49F5-A7A0-DE9239B3F274"}
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
 * @properties={typeid:24,uuid:"E33A9EFA-4A80-4592-919E-D244F5FEAEA6"}
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
 * @properties={typeid:24,uuid:"CD1179E7-4EAD-4B54-A265-E881224C4D4B"}
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
 * @properties={typeid:24,uuid:"30BC3688-EBA4-4AF8-A961-AFA2325BA5EC"}
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
		/*elements.lblversion.visible = true;
		elements.rdFacturaE.visible = true;
		elements.rdFacturaE.enabled = true;*/
		elements.lblversion.visible = false;
		elements.rdFacturaE.visible = false;
		elements.rdFacturaE.enabled = false;
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"C7073180-4522-4F88-B152-D2BB3771E4CE"}
 */
function onActionFacturoE_button(event) {
	// TODO Auto-generated method stub
	if(FacturaE == 0 || FacturaE == null)
	{	
		FacturaE = 1;
	}
	else
	{
		FacturaE = null;
	}
	onActionFacturoE(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0C496746-4CBF-4137-B6A0-7FA962A3B07F"}
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
 * @properties={typeid:24,uuid:"D49D0912-1A2F-4355-9B6A-B3C34B970649"}
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
 * @properties={typeid:24,uuid:"0FA109F3-C9C4-4F64-84F3-0A4EC22F5317"}
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
 * @properties={typeid:24,uuid:"88D805FF-2241-4080-9023-E441E2D8E0E4"}
 */
function onActionFormatoFactura4(event) {
	// TODO Auto-generated method stub	
		FormatoFactura4 = 1;
		FormatoFactura = null;
		FormatoFactura2 = null;
		FormatoFactura3 = null;
}

/**
 * @properties={typeid:24,uuid:"A2898F27-ACF6-4342-BF67-A22CDE4D117F"}
 */
function certif(){
	if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) Certif = gcparametrosaplicacion_to_parametrosaplicacion.name_certifdigital;
	else Certif = 'NO SE HA GUARDADO CERTIFICADO ALGUNO\n EN LOS PARAMETROS DE LA APLICACIÓN'
	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @properties={typeid:24,uuid:"4106A1B0-7950-474D-A5A2-C7575262207E"}
 */
function onDataChangednup() {
	if(DesdeNup && DesdeNup > HastaNup) HastaNup = DesdeNup;
}
