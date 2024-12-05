/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A6B76313-B68C-4963-8CEB-9CEAEEDA0032"}
 */
var SituacionPresupuestos = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3C73DABB-1550-4535-9068-4A87DB08E9DD"}
 */
var HastaRefCliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2E6C5236-8084-409F-A80D-57DC3ACB3BE7"}
 */
var DesdeRefCliente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"9D6645DE-262B-4EDF-AC78-BFB91B293657",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A72E9375-A6D7-4979-AD22-3012B51EB502",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3A25007A-6FBA-4756-BFE9-3EA09466AA7D",variableType:4}
 */
var Criterios = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5767C303-4662-4510-BD15-B696974919FB",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C0B992E6-5877-4B50-8C9E-A0BD2A585D32",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AF419519-A52A-4587-86A1-074F8422D787",variableType:4}
 */
var HastaPresupuesto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DD35E819-DBF2-4592-94C3-AE9A14193633",variableType:4}
 */
var DesdePresupuesto = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"97E71EB1-E0C0-4033-8127-47D9C4664339"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"2154FE91-1459-43EC-8DD9-326287903068"}
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
 * @properties={typeid:24,uuid:"865901AD-7904-4966-99B2-B0702DF61523"}
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
 * @properties={typeid:24,uuid:"3BD75710-BED9-4528-AFF7-7F8178320E4E"}
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
 * @properties={typeid:24,uuid:"640E7A3B-1A01-4C4C-B807-B0900EACCE2E"}
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
 * @properties={typeid:24,uuid:"6A612407-CF50-41D3-B1F5-73AB71AD61C5"}
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
 * @properties={typeid:24,uuid:"026AEA4E-EF13-43B9-BC66-4CC90DC89052"}
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
 * @properties={typeid:24,uuid:"6DFB28DD-544D-478A-B3CB-BAEE6CACDDF0"}
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
 * @properties={typeid:24,uuid:"EC640131-5441-405E-A72B-A5D7AB96E6FC"}
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
 * @properties={typeid:24,uuid:"0762F357-0F9B-4B51-8C79-A3B1FC4F5C54"}
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
 * @properties={typeid:24,uuid:"EF3F3E60-B29F-4AC4-B233-7735C60F1728"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}
