/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DE3FDC87-E74D-4FA9-B2B3-4139B590A4AE"}
 */
var SituacionPresupuestos = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5AE3959A-719C-4F4F-B970-21CD6D356508"}
 */
var HastaRefCliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9BDBC351-4EBC-45D7-8093-7F2F23E77946"}
 */
var DesdeRefCliente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"57CD1026-74B6-4139-BE3B-619F127B3610",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3C17D54B-3D2C-4E19-9EE5-9DA3A501EA95",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2EF5A03E-1497-48A4-B7CB-5B21EDE0E866",variableType:4}
 */
var Criterios = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D42B964D-9BC7-4749-BEDA-7A663762DE83",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2B640D12-BDB6-459C-BE68-98CF54D563D7",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"40D6B5A0-4A30-4D8C-976E-550178BB42FE",variableType:4}
 */
var HastaPresupuesto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0F734B92-0892-404A-A767-07E4804382E4",variableType:4}
 */
var DesdePresupuesto = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E064806-1B9C-4BFF-B7BE-B2E9B60BBDAE"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"05117ED1-22BC-46D6-AA2C-002DD3D364F7"}
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
	DesdePresupuesto=null
	HastaPresupuesto=null
	DesdeRefCliente=null
	HastaRefCliente=null
	SituacionPresupuestos='T'
	elements.DesdePresupuesto.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F7096693-68FB-4187-A8E6-6C8009973AF9"}
 */
function btnClienteDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_Presupuestos1';
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
 * @properties={typeid:24,uuid:"556828AB-D240-4A45-A2DD-D386FA2E0139"}
 */
function btnClienteHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_Presupuestos2';
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
 * @properties={typeid:24,uuid:"5D623D51-F71F-4264-8BF5-B1A46CBC7010"}
 */
function onActiondesdePresupuesto(event) {
	// TODO Auto-generated method stub
	elements.HastaPresupuesto.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BF683E6C-9D6B-4BAA-ABF9-C7DC5C9CE31C"}
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
 * @properties={typeid:24,uuid:"0BF8FBF6-E7B6-4069-8030-335F195D408E"}
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
 * @properties={typeid:24,uuid:"99E3AF70-BC59-47FA-86E9-F78644B153B6"}
 */
function onActionHastacliente(event) {
	// TODO Auto-generated method stub
	elements.DesdeRefCliente.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"F40CE36A-65F2-4727-9A7B-DA31CE729C7A"}
 */
function onActiondederefcliente(event) {
	// TODO Auto-generated method stub
	elements.HastaRefCliente.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"51BB1736-013C-4D5B-8AD0-FA6C8D58E3E3"}
 */
function onActionHastarefcliente(event) {
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
 * @properties={typeid:24,uuid:"C29B7A12-ADE3-417F-A527-DE7BA5402ED7"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}
