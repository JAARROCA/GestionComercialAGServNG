/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B6D9855C-DE48-40C1-8179-607BD795A8A5",variableType:4}
 */
var PendientesConta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CEDCF5A2-5617-49B4-8844-E0BB986AD5BF",variableType:4}
 */
var Detallado = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"9D98E592-068B-4C4B-B4DC-737BD50A4417",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7E5CCBF2-1FC4-48AC-B2D8-F3C21F18D802",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D4203091-E28D-4331-80D8-EE56E90F7BB1",variableType:4}
 */
var HastaProveedor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FFCB82A2-7442-4951-AC51-5BEAD269F6A8",variableType:4}
 */
var DesdeProveedor = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CA17E50F-3C2A-4773-BC37-D1FABBF9ECED"}
 */
var HastaFactura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B89C96B2-1665-46ED-8EE6-935518EAA487"}
 */
var DesdeFactura = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B2FBD9F5-E73F-4CC4-A074-A2E05F5245DF"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"AF9A001E-0832-4ECD-A243-C7B3B61D4F58"}
 */
function onShow() {
	// TODO Auto-generated method stub
	var fecha = new Date();
	//globals.FechaFactura=fecha;
	DesdeFecha = null;
	HastaFecha=fecha;	
	DesdeProveedor=null;
	HastaProveedor=null;
	DesdeFactura=null;
	HastaFactura=null;
	Detallado = null;
	PendientesConta = null;
	elements.DesdeProveedor.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"208FDA51-4C94-439B-B136-AEF33F487BF3"}
 */
function btnProveedorDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_FacturasCompras1';
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
 * @properties={typeid:24,uuid:"163B5FB2-375A-40E2-8123-D56FAF40EB8F"}
 */
function btnProveedorHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_FacturasCompras2';
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
 * @properties={typeid:24,uuid:"BE3D8B40-0E24-4ED3-8AAF-B835D3B98297"}
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
 * @properties={typeid:24,uuid:"7084E0EA-9C8A-4FB2-AC9A-A733C748C1AE"}
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
 * @properties={typeid:24,uuid:"AD717D1B-3A68-4576-9A4B-FB858E8E4A3A"}
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
 * @properties={typeid:24,uuid:"6636C0F4-99AD-48E2-9426-F33C4CAF27AA"}
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
 * @properties={typeid:24,uuid:"E9A71441-22E8-43F0-A1DB-1607D06A12E9"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}
