/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"56BC68FE-E378-4F92-859F-4CB49C5D0E10",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"432001B9-5459-4896-AB24-0836C93E5A70",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DD20BEDF-1367-43C3-B361-5644E024D9B1",variableType:4}
 */
var HastaProveedor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B84251C2-24B1-4759-A882-D0B21AB0D280",variableType:4}
 */
var DesdeProveedor = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E606BB7A-6F31-455E-9F8D-7C350783C616"}
 */
var HastaArticulo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2F2CFDE0-C304-4208-9132-5A9DC7DAC901"}
 */
var DesdeArticulo = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"518324D6-3ADC-485A-8BF6-CB88B4F116A7"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"FA255762-54A7-4AC7-B426-905759DA4800"}
 */
function onShow() {
	// TODO Auto-generated method stub
	var fecha = new Date(new Date().getFullYear(),0,1,0,0,0);
	//globals.FechaFactura=fecha;
	DesdeFecha = fecha
	fecha = new Date(new Date().getFullYear(),11,31,0,0,0);
	HastaFecha= fecha;	
	DesdeProveedor=null
	HastaProveedor=null
	DesdeArticulo=null
	HastaArticulo=null
	elements.DesdeAlbaran.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B4A2992D-44CE-4FEC-BD2D-5575DB3CA1C2"}
 */
function btnClienteDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_ComprasArticulo1';
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
 * @properties={typeid:24,uuid:"2D7BE0ED-2A95-43B6-A09E-FA109A4C4BD7"}
 */
function btnClienteHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_ComprasArticulo2';
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
 *
 * @properties={typeid:24,uuid:"9E239901-657B-4DB0-9662-6134A15DCE7E"}
 */
function btnArticuloDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_ComprasArticulo1';
	//globals.GCshowDialogArticulos('Artículos', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Articulos')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Articulos", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Artículos';
	//win.resizable = true;
	//win.show(forms.dialog_ArticulosGC)
	win.show(forms.dlgArticulosGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"1ED503C6-EFD9-405C-ACE9-55D03A3AF072"}
 */
function btnArticuloHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_ComprasArticulo2';
	//globals.GCshowDialogArticulos('Artículos', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Articulos')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Articulos", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Artículos';
	//win.resizable = true;
	//win.show(forms.dialog_ArticulosGC)
	win.show(forms.dlgArticulosGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"03538350-1819-4809-93A7-1E62B8412960"}
 */
function onActiondesdealbaran(event) {
	// TODO Auto-generated method stub
	elements.HastaAlbaran.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FFA1A607-A358-40C6-88B1-0E077D51341C"}
 */
function onActionhastaalbaran(event) {
	// TODO Auto-generated method stub
	elements.DesdeCliente.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D2E2482E-4F4B-4949-8B43-238E9B26E112"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.HastaCliente.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D48C904C-921B-4017-9216-3B9EEB149D49"}
 */
function onActionHastacliente(event) {
	// TODO Auto-generated method stub
	elements.DesdeFecha.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"0E4822A8-58C3-4492-8E78-2D34F4C0C94E"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}
