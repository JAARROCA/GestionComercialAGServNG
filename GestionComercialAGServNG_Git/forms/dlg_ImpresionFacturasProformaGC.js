/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"32C0D03D-857E-4C5E-A2C4-A13467717C8E",variableType:4}
 */
var versFacturaE = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9AFFDDF4-11CB-4618-A8DB-980E0361F26A",variableType:4}
 */
var FacturaE = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"36C2B10D-9BAA-4112-BF0A-F093B5E40F36",variableType:4}
 */
var FacturaProForma = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"400BB6FB-10C7-4C09-9A00-49300CB0613D"}
 */
var HastaDescCliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FDD989EA-5C99-4C38-942C-109F79E63BAF"}
 */
var DescDesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"90A4A49D-A878-453B-B914-887694ACC882",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9DFA3A8A-D92C-4A93-84CB-72C4366A1784",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"D97509B9-72FB-43E8-BA4E-EE7D5C7D8777",variableType:8}
 */
var HastaEje = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"4D9DC597-CB29-4A56-ACAF-600FE5E45422"}
 */
var HastaSer = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"9621F28D-58A8-4701-B301-868DCABC635D",variableType:8}
 */
var HastaNup = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"E1C44FD1-0004-477D-87A7-18AEF4149373",variableType:8}
 */
var DesdeEje = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"86698B43-A53A-425D-AAEC-B302378B93E4"}
 */
var DesdeSer = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"77E2DD64-80B8-4AC0-BE72-8B8DEE5903C5",variableType:8}
 */
var DesdeNup = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7800BF5-F6DD-4D86-9605-9181726935D7"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"CA013B51-186C-4E00-ADF6-3708F5DF1024"}
 */
function onShow() {
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
	FacturaProForma = 1;
	globals.GCSalidaPor = 0;
	elements.lblversion.visible = false;
	elements.rdFacturaE.visible = false;
	elements.rdFacturaE.enabled = false;
	if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
	{
		elements.lbl_salidapor.visible = true;
		elements.rdSalidaPor.visible = true;
	}
	else
	{
		elements.lbl_salidapor.visible = false;
		elements.rdSalidaPor.visible = false;
	}
	elements.desdenup.requestFocus()
	
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"655F8753-E5F1-4A71-8D6A-BD524BEA0BA4"}
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
 * @properties={typeid:24,uuid:"E19E59EC-97F9-4E84-9B5B-47F97B872C7A"}
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
 * @properties={typeid:24,uuid:"018271D0-E38C-4637-80B1-C42C8D44EA0A"}
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
 * @properties={typeid:24,uuid:"8CDB5137-A5F1-4FE7-B4D2-77EA413B4697"}
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
 * @properties={typeid:24,uuid:"7758CEFE-4848-4B2A-8903-380304DCC61B"}
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
 * @properties={typeid:24,uuid:"1364616F-DCC4-4BC4-861B-8FE2296E8820"}
 */
function btn_DesdeCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionFacturasProforma1';
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
 * @properties={typeid:24,uuid:"D2F74D26-7E13-4315-9014-18BCEA4D6FEF"}
 */
function btn_HastaCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionFacturasProforma2';
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
 * @properties={typeid:24,uuid:"E05DE538-0FF6-4C17-97C8-1BD3575C86CF"}
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
 * @properties={typeid:24,uuid:"FF0D9C58-0B4D-420C-9099-1D3BC26C9691"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.HastaCliente.requestFocus()
	elements.HastaCliente.selectAll()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"FBF4A475-6B74-416C-BEFB-1BF0F0C767C4"}
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
 * @properties={typeid:24,uuid:"0D38D86B-1143-4B45-968E-9F7F38A9D6C8"}
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
 * @properties={typeid:24,uuid:"0B82E35E-B79F-4B2E-9921-B1F553CD97BC"}
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
 * @properties={typeid:24,uuid:"35AFDE9B-05D3-47B3-AB36-3A15F2620A05"}
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
