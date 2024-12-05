/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"56BFDB7F-7ED3-4A40-B629-37EEFF2E5C01",variableType:8}
 */
var IVAAplicar = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"34A61B8D-F435-4974-AD5F-95145C4FFB30",variableType:8}
 */
var IVAActual = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4427843A-E9DE-4DE2-860F-67A7C92E6769",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4D1D6756-8045-4D1E-99C2-6037AAE61C6E",variableType:4}
 */
var DesdeCliente = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D2C2EF1-8EF6-4347-9CC3-139D7B2B31DE"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"A0249A04-0BED-4F41-AB09-A1C370FABF6B"}
 */
function onShow() {
	// TODO Auto-generated method stub	
	DesdeCliente = null
	HastaCliente = null	
	IVAActual = null
	IVAAplicar = null
	elements.DesdeCliente.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"641A996F-2545-49EB-B97E-1FFCE9EADF1B"}
 */
function btnClienteDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ActualizarTiposIvaClientes1';
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
 * @properties={typeid:24,uuid:"2C3FAD2C-A4CF-4002-817A-5075007091DA"}
 */
function btnClienteHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ActualizarTiposIvaClientes2';
	//globals.GCshowDialogClientes('Clientes', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	var win = application.getWindow('Clientes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Clientes';
	//win.resizable = true;
	win.show(forms.dialog_ClientesGC)
}
