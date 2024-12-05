/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E519A6AA-D185-40B1-8D74-512AB29A6FA7",variableType:4}
 */
var Criterios = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"9BD71C21-FFE0-43EF-BBB5-B8DF6EB9163A",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"2BB1770B-7FBC-41BA-A719-62A6F0D841AB",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F8C8C1F1-DD80-42E2-B3C4-E14FDF234CBD",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"93BFE5D8-B54B-42B1-A317-5FBAABF4471D",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CE41AD41-05B1-4004-888E-345407FB16F1",variableType:4}
 */
var HastaAlbaran = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"01BFA29A-FF63-4AA3-9536-E7AD459315FB",variableType:4}
 */
var DesdeAlbaran = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F56EF007-3886-4E38-8C62-C734F9DA265D"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"A7451207-72DB-41E1-AB09-2FD2632BD897"}
 */
function onShow() {
	// TODO Auto-generated method stub
	var fecha = new Date();
	//globals.FechaFactura=fecha;
	DesdeFecha = null
	HastaFecha=fecha;	
	Criterios=0
	DesdeCliente=null
	HastaCliente=null
	DesdeAlbaran=null
	HastaAlbaran=null
	elements.DesdeAlbaran.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87C7CA2F-527A-4B58-A90D-46ECF4928095"}
 */
function btnClienteDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_AlbaranesPendientes1';
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
 * @properties={typeid:24,uuid:"48974E48-8B10-480F-BEC5-E1A52639B706"}
 */
function btnClienteHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_AlbaranesPendientes2';
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
 * @properties={typeid:24,uuid:"7CAD5283-DF2B-4372-B492-BD285B8F8633"}
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
 *
 * @properties={typeid:24,uuid:"6BEE9AFF-1F8D-4C05-B697-5BA1B7DE2032"}
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
 *
 * @properties={typeid:24,uuid:"BC9AA70E-110A-4AD5-BD88-E3DD1543D076"}
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
 *
 *
 * @properties={typeid:24,uuid:"575EDEBB-23BA-4730-9752-F4B04070140F"}
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
 *
 * @properties={typeid:24,uuid:"806C6D99-7B90-4FF9-8C26-42E8067F9366"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}
