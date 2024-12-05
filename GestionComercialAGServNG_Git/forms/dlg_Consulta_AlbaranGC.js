/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"508B6610-86AB-47E0-858F-DF60BCEB7E04"}
 */
var SituacionAlbaran = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CF211071-55D9-4D24-A142-8D78204C4A63"}
 */
var HastaRefCliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7CED1442-03DD-449D-A9DF-1FCBEA63C116"}
 */
var DesdeRefCliente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"0E2EA40D-D320-4A5E-99CA-2EA38FF1523C",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"DC983664-F34A-4CEB-805A-D1AC9E1B57C3",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"98857E97-CF57-4D6C-B90E-8B57CC68D7E5",variableType:4}
 */
var Criterios = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"05540EC3-B6F2-4D9D-8AFC-E4D74863A4BC",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3D38F85-A4FA-4172-854A-B5A146273B1F",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"41397741-0C2B-4F7C-8D87-E7C3C85D25D4",variableType:4}
 */
var HastaAlbaran = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C27AF27E-AD36-4CBB-A7CD-AF74A1C105BC",variableType:4}
 */
var DesdeAlbaran = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"41F5761B-4F7B-43C4-9B5C-6DC2B18CD584"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"A4C6256B-8001-4CF1-B377-FECDFB18657F"}
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
	DesdeRefCliente=null
	HastaRefCliente=null
	SituacionAlbaran=null
	elements.DesdeAlbaran.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DFA56C69-10D3-48AE-90C5-E0129D82B0D2"}
 */
function btnClienteDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_Albaran1';
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
 * @properties={typeid:24,uuid:"AD17913E-793F-418C-AD86-191B0893D05A"}
 */
function btnClienteHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_Albaran2';
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
 * @properties={typeid:24,uuid:"32FB3005-B9BA-4441-BA79-2CEDB647AB1D"}
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
 * @properties={typeid:24,uuid:"DBBC792D-E4EA-4CFD-B0E8-4340F9D1558D"}
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
 * @properties={typeid:24,uuid:"5924B4C8-F4D9-4D48-B245-C79DBF0DA513"}
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
 * @properties={typeid:24,uuid:"EAEDF95E-1290-420D-9C97-9BF86449C17C"}
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
 * @properties={typeid:24,uuid:"6E837F20-81A7-410C-A32C-224E8556259A"}
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
 * @properties={typeid:24,uuid:"A7F47388-E9C6-46AF-8F7F-D643427D5065"}
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
 * @properties={typeid:24,uuid:"D71819F9-B1A2-404A-80CA-00C35387EAF9"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}
