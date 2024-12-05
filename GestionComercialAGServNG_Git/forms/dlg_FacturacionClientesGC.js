/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AB3B50B3-7606-4AB6-823B-A4C309CC2BE9",variableType:4}
 */
var AnuladasTBAI = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"16266169-2B86-4E84-B218-5D20C5ED149A",variableType:4}
 */
var hmes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2B0C601E-AECC-4B85-ACDB-04BAF4F563E4",variableType:4}
 */
var dmes = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"EE8A18CC-ED62-4319-91EC-E6EBC47B1546"}
 */
var HastaDescCliente = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"C65CD557-2D85-4E9A-9C64-247377A7D009"}
 */
var DescDesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0B3D3D4A-44FC-45F8-8CFF-BD7ACFB51840",variableType:8}
 */
var hcli = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"84173C09-F66A-4550-9053-58FDAFC8BE87",variableType:8}
 */
var dcli = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5909AC60-C8CB-40E3-98BD-C54833655662",variableType:4}
 */
var Agno = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C945842E-E28B-4D3E-B73B-610AD643519F"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"7CE6A27F-9FE9-4ADF-8D03-9683ED57AA64"}
 */
function onShow() {
	// TODO Auto-generated method stub
	
	Agno = new Date().getFullYear();	
	dmes = 1;
	hmes = 12;
	globals.GCCriterios=0;
	dcli=null;
	hcli=null;
	AnuladasTBAI = null;
	if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai)
	{
		elements.chk_AnuladasTBAI.visible = true;
		elements.chk_AnuladasTBAI.enabled = true;
	}
	else
	{
		elements.chk_AnuladasTBAI.visible = false;
		elements.chk_AnuladasTBAI.enabled = false;
	}
	
	elements.Agno.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E4E0777B-77CE-41C9-AF60-4E6236435BE0"}
 */
function btnClienteDesde(event) {
	
	//if(globals.TipoConsultaPor == 1)
	//{
		globals.GCFormulario = 'dlg_FacturacionClientesGC1';
		//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
		var win = application.getWindow('Clientes')
		if(win != null) win.destroy();
		 
		win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
		//win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Clientes';
		//win.resizable = true;
		win.show(forms.dialog_ClientesGC)

	/*}
	else
	{
		globals.CONTAFormulario = 'dlg_FacturacionClientesCONTA1';
		globals.showDialogCuentasContablesProveedores('Cuentas Contables Proveedores', 1, null, null, true, null, null, null, null, null);
	}*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D874B514-8185-4285-A807-2FAEAB34C6A8"}
 */
function btnClienteHasta(event) {
	//if(globals.TipoConsultaPor == 1)
	//{
		globals.GCFormulario = 'dlg_FacturacionClientesGC2';
		//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
		var win = application.getWindow('Clientes')
		if(win != null) win.destroy();
		 
		win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
		//win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Clientes';
		//win.resizable = true;
		win.show(forms.dialog_ClientesGC)
	/*}
	else
	{
		globals.CONTAFormulario = 'dlg_FacturacionClientesCONTA2';
		globals.showDialogCuentasContablesProveedores('Cuentas Contables Proveedores', 1, null, null, true, null, null, null, null, null);
	}*/
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"49573A59-EC5F-4784-8098-A89424A4CF88"}
 */
function onDataChangeDesdeCliente() {
	// TODO Auto-generated method stub
	if(dcli)
	{
		var query = "select desccliente from tbmaestroclientes where idcliente = " + dcli;
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
 *
 * @properties={typeid:24,uuid:"F0431C10-CFAA-4E8D-9FCE-91BA94D2690F"}
 */
function onDataChangeHastaCliente() {
	// TODO Auto-generated method stub
	if(hcli)
	{
		var query = "select desccliente from tbmaestroclientes where idcliente = " + hcli;
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
 * @properties={typeid:24,uuid:"14C12F1C-9C70-41E6-86D2-F51DDCEC1DB4"}
 */
function onActionAgno(event) {
	elements.DesdeCliente.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A77E7462-E3A0-41FC-8B6E-3E54BB3C3509"}
 */
function onActiondcli(event) {
	elements.HastaCliente.requestFocus()
}
