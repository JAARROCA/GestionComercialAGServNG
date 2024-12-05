/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C9FD0E21-7F0F-4C50-8F1C-E18F77116CE7",variableType:4}
 */
var PendientesFacturar = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A975583C-C799-4A78-9DAA-D2B3A7E392C5",variableType:4}
 */
var Detallado = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C2AF1FF2-3A55-4591-A873-83CFF3A06A87",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"960E3145-B8AC-4AB6-9DFE-1F029E18E4A3",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C086B69E-3AD8-4918-B720-394266DEE903",variableType:4}
 */
var HastaProveedor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9D5789E5-36EE-40D0-A637-F31C83518611",variableType:4}
 */
var DesdeProveedor = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2F298E69-4482-482E-9917-262730DDFC51"}
 */
var HastaPedido = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"63E1295F-E486-4AAA-B4D3-0852B0A257D9"}
 */
var DesdePedido = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"90D02D20-F1C0-4E01-BF6E-ACCC5FB8F6D9"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"D7DB019C-D2E1-41C0-8141-BCE2A0606D3C"}
 */
function onShow() {
	// TODO Auto-generated method stub
	var fecha = new Date();
	//globals.FechaFactura=fecha;
	DesdeFecha = null;
	HastaFecha=fecha;	
	DesdeProveedor=null;
	HastaProveedor=null;
	DesdePedido=null;
	HastaPedido=null;
	Detallado = null;
	PendientesFacturar = null;
	elements.DesdeProveedor.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"25312A73-B319-4201-A3C2-F9BB495797F7"}
 */
function btnProveedorDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_PedidosCompras1';
	//globals.GCshowDialogProveedores('Proveedores', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Proveedores')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Proveedores", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Proveedores';
	//win.resizable = true;
	win.show(forms.dialog_ProveedoresGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ECCB25A8-1139-4686-92AE-3917D2F50434"}
 */
function btnProveedorHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_PedidosCompras2';
	//globals.GCshowDialogProveedores('Proveedores', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Proveedores')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Proveedores", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Proveedores';
	//win.resizable = true;
	win.show(forms.dialog_ProveedoresGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BBE09DBB-B9FD-4513-8487-F027FB6908A8"}
 */
function onActiondesdeFactura(event) {
	// TODO Auto-generated method stub
	elements.HastaFactura.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F625EEC3-FEBF-4A79-AE1E-F24CB6079023"}
 */
function onActionhastaFactura(event) {
	// TODO Auto-generated method stub
	elements.DesdeFecha.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F33EAE2F-BBCE-4234-975A-ABB763F1F016"}
 */
function onActiondesdeproveedor(event) {
	// TODO Auto-generated method stub
	elements.HastaProveedor.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F2C26B62-B43F-43FA-8D7B-E9509EA261C6"}
 */
function onActionHastaproveedor(event) {
	// TODO Auto-generated method stub
	elements.DesdeFactura.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"735ED113-4191-4FE0-8C81-41BCD33E1F3A"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}
