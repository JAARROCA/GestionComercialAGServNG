/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C8EA4F6D-0564-4631-8484-1B00C644E9D8",variableType:4}
 */
var PendientesFacturar = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4AB5C742-F791-44E2-9F5D-FB2C5073A52E",variableType:4}
 */
var Detallado = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5C7F9573-B322-4A8F-8E6D-F0CD2792A9A7",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"782CD97E-3271-4A2A-B3EE-FEA1731603D1",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9B920378-F329-452C-9617-9AEFC4988345",variableType:4}
 */
var HastaProveedor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"46B6D115-69D9-4D34-9BEF-4D8186A20E01",variableType:4}
 */
var DesdeProveedor = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"53E3ADF0-427F-45ED-856D-81E1E9FEE29F"}
 */
var HastaAlbaran = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"89634933-3E86-441D-8C2B-FBA0806B7F1F"}
 */
var DesdeAlbaran = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75CE4ED5-D71F-4F1A-82F4-0AFA54350D5F"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"2ADE2BD4-452E-48EE-92B8-7ADA9A37C8C4"}
 */
function onShow() {
	// TODO Auto-generated method stub
	var fecha = new Date();
	//globals.FechaFactura=fecha;
	DesdeFecha = null;
	HastaFecha=fecha;	
	DesdeProveedor=null;
	HastaProveedor=null;
	DesdeAlbaran=null;
	HastaAlbaran=null;
	Detallado = null;
	PendientesFacturar = null;
	elements.DesdeProveedor.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"21AE8A14-0F38-4B21-9890-F6A8B4FC9FA8"}
 */
function btnProveedorDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_AlbaranesCompras1';
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
 * @properties={typeid:24,uuid:"CE024313-E28A-4FD9-BF91-643B5817AE63"}
 */
function btnProveedorHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_AlbaranesCompras2';
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
 * @properties={typeid:24,uuid:"ACA3C9F2-3857-4788-A222-05ED514E5601"}
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
 * @properties={typeid:24,uuid:"7350EAFD-9544-4112-997D-AB9F6007C0EE"}
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
 * @properties={typeid:24,uuid:"881C8DEC-9104-4135-9403-88A249D1C79B"}
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
 * @properties={typeid:24,uuid:"2E34B6A1-E107-42B0-B35D-6EAC4A2BBB70"}
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
 * @properties={typeid:24,uuid:"10F99936-DEF5-49D0-A55B-6324B1504458"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}
