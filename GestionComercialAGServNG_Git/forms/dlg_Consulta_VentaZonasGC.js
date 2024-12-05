/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"80BE9FE0-9AE7-4E1E-94DA-5332F2F1FE7A",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A03598FF-E442-440F-B2E0-B648D1BB1BCF",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C563C5E2-9373-41FB-97A4-B652A93194E2",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5BED34D4-61C8-4042-9ED3-96BCD1F1FE15",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"436B9E7E-1ABE-4A04-9104-F73510C1A49B"}
 */
var HastaProvincia = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A366D823-1601-4726-8BA3-85D7D4BEEA9B"}
 */
var DesdeProvincia = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E6E26C40-6C88-4E34-B830-CEABF2D217B4"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"E3DB7E73-EE41-42B4-BEF8-9941B625D083"}
 */
function onShow() {
	// TODO Auto-generated method stub
	var fecha = new Date(new Date().getFullYear(),0,1,0,0,0);
	//globals.FechaFactura=fecha;
	DesdeFecha = fecha
	fecha = new Date(new Date().getFullYear(),11,31,0,0,0);
	HastaFecha= fecha;	
	DesdeCliente=null
	HastaCliente=null
	DesdeProvincia=null
	HastaProvincia=null
	elements.DesdeCliente.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"992EABA9-1738-4ED7-A0A4-718FC0FCF110"}
 */
function btnClienteDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_VentasZonas1';
	//globals.GCshowDialogClientes('Clientes', 1, null, null, true, null, null, null, null, null);
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
 * @properties={typeid:24,uuid:"7DC5D42E-774E-45AE-AC9A-EC23211720A9"}
 */
function btnClienteHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_VentasZonas2';
	//globals.GCshowDialogClientes('Clientes', 1, null, null, true, null, null, null, null, null);
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
 * @properties={typeid:24,uuid:"DD17766A-DAB3-4DE5-8CFA-B426529BDC60"}
 */
function onActiondesdealbaran(event) {
	// TODO Auto-generated method stub
	elements.HastaProvincia.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CE670E1E-0470-4135-827A-5D48832D6E39"}
 */
function onActionhastacliente(event) {
	// TODO Auto-generated method stub
	elements.DesdeProvincia.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"A926E79B-673D-4C09-9EB4-3D038B2BA596"}
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
 * @properties={typeid:24,uuid:"0660D8AC-DC7E-4AE5-BB90-39AC0BFBFCE4"}
 */
function onActionHastacliente(event) {
	// TODO Auto-generated method stub
	elements.DesdeProvincia.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"5AE4DE31-BA50-44CD-A183-4C7ED2EC4878"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}
