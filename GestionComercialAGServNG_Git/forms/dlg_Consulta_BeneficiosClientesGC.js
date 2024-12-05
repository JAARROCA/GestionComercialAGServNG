/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"00FAE5A4-3E28-4F33-9E65-B4E424AD19DB",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"427A01ED-3651-4689-87F1-5C7B30DF80A6",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"97A8A483-756D-4E03-B6A8-10F3CABE078D",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"93DC096D-4B56-4D40-903E-F8DFEC4893CD",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B24E3D7E-6CBA-4E9E-A446-3A054039CE20"}
 */
var HastaArticulo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8AD2A141-E3FD-43B3-B261-987AED81B424"}
 */
var DesdeArticulo = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C371E38A-F195-4C2B-BA7C-CEEF5EBAB105"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"70F0336B-3950-45E8-A408-F9575A00DC37"}
 */
function onShow() {
	// TODO Auto-generated method stub
	var fecha = new Date(new Date().getFullYear(),0,1,0,0,0);
	DesdeFecha = fecha
	fecha = new Date(new Date().getFullYear(),11,31,0,0,0);
	HastaFecha= fecha;	
	DesdeCliente=null
	HastaCliente=null
	DesdeArticulo=null
	HastaArticulo=null
	elements.DesdeAlbaran.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD786241-BD83-40E3-94F5-8538961E6911"}
 */
function btnClienteDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_BeneficiosClientes1';
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
 * @properties={typeid:24,uuid:"92D4BD40-8132-41F9-B08F-F72F13CA04C9"}
 */
function btnClienteHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_BeneficiosClientes2';
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
 *
 * @properties={typeid:24,uuid:"CB81095D-AF16-40E6-881B-2ADD4B304A13"}
 */
function btnArticuloDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_BeneficiosClientes1';
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
 * @properties={typeid:24,uuid:"8437B649-2C26-4DF3-A361-28975A3BDF1B"}
 */
function btnArticuloHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_BeneficiosClientes2';
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
 * @properties={typeid:24,uuid:"DCD2D71A-0A78-4046-8814-09E9489B6A86"}
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
 * @properties={typeid:24,uuid:"828D12E7-0035-44C9-805B-C5F9CAC927C4"}
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
 * @properties={typeid:24,uuid:"3A32D3E5-E534-4D90-AF58-3C1D3D335634"}
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
 * @properties={typeid:24,uuid:"5A494B9E-AA8B-4048-B526-6273FEE82F7A"}
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
 * @properties={typeid:24,uuid:"34C3E69F-F459-4E47-8842-572AEDAFAFAE"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}
