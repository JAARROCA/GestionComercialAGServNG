/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D003CBCD-1299-4AA9-AA6B-820C93E4AF2C"}
 */
var HastaFamilia = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8428D6BD-25B3-4288-8131-0F7E3047C173"}
 */
var DesdeFamilia = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"F946CC23-753B-4717-B690-F8FF2F792C6B",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6E8048AC-C7D8-4691-9D23-6B385BD48B0B",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"98BDAA5A-FA83-46F1-A934-ADDDA210486A",variableType:4}
 */
var HastaProveedor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5DC6D21F-144B-483F-BC81-733714CE1582",variableType:4}
 */
var DesdeProveedor = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"767BDA1F-A58E-47C8-8DC4-845FD0554421"}
 */
var HastaArticulo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1A6DCC4B-F69C-4B2B-AC53-8C4E4743A7A4"}
 */
var DesdeArticulo = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"202CE359-9335-4D61-B626-10AE7F2F6F49"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"27304C7E-DD55-4FAD-94A2-5B3EEC222D2A"}
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
	DesdeFamilia=null
	HastaFamilia=null
	elements.DesdeAlbaran.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C607A5AB-03B3-4FF9-8BD5-C5F9EC1BE9A0"}
 */
function btnClienteDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_ComprasFamilias1';
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
 * @properties={typeid:24,uuid:"6F568817-F900-417E-9D9C-717CDBF1CAA3"}
 */
function btnClienteHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_ComprasFamilias2';
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
 * @properties={typeid:24,uuid:"DCF49A98-440E-4421-866D-EE0197D80F97"}
 */
function btnArticuloDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_ComprasFamilias1';
	//globals.GCshowDialogArticulos('Artículos', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Artículos')
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
 * @properties={typeid:24,uuid:"8C17A1B1-7D84-4FC2-9DDF-CFFE54ED1543"}
 */
function btnArticuloHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_ComprasFamilias2';
	//globals.GCshowDialogArticulos('Artículos', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Artículos')
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
 *
 * @properties={typeid:24,uuid:"D483ECA4-D7C2-4C75-9556-A85F69503461"}
 */
function btnFamiliaDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_ComprasFamilias1';
	globals.GCshowDialogBDFamilias('Familias', 1, null, null, true, null, null, null, null, null);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"3395C670-6B53-4AB1-ACFA-6376612E367D"}
 */
function btnFamiliaHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_ComprasFamilias2';
	globals.GCshowDialogBDFamilias('Familias', 1, null, null, true, null, null, null, null, null);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"48C936DC-1D25-4595-BB03-6198D87B70F1"}
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
 * @properties={typeid:24,uuid:"5D108500-B279-4F9C-A30C-614EBDAB80F4"}
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
 * @properties={typeid:24,uuid:"EEEDCD4B-D44E-44B8-9909-740E2FE7BCC4"}
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
 * @properties={typeid:24,uuid:"59775139-0C7E-4E28-BA30-C3A059739221"}
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
 * @properties={typeid:24,uuid:"76D8A905-8E70-40F1-B623-A95CF6374D1F"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}
