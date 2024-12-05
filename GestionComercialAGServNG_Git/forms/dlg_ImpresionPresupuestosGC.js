/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"C78541B7-7466-43F9-B80E-8E0E1CCDF3C0"}
 */
var HastaDescCliente = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"2D77A3DA-A8AA-48B2-9036-12AC5E72D171"}
 */
var DescDesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FE91A11E-F8F1-4DED-82B5-B67D921D85B6",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1BF1099D-B65F-4705-8519-B7E566D25668",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"B928FC85-E0D1-46C0-BE91-C64B1589C826",variableType:8}
 */
var HastaPresupuesto = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"415AD9AA-4FA6-4D83-8351-3D2BC09159CA",variableType:8}
 */
var DesdePresupuesto = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2013354F-7EA7-4940-A7A5-E5B050A546CE"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"B3C8A8DA-65C5-4AE1-8776-CA10FA6D4543"}
 */
function onShow() {
	// TODO Auto-generated method stub
	DesdeCliente = null
	HastaCliente = null
	elements.DesdePresupuesto.requestFocus()
	
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"B299AC76-1230-4DD6-ADBD-B12DD798FC83"}
 */
function onActiondesdealbaran(event) {
	// TODO Auto-generated method stub
	elements.HastaPresupuesto.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"0FF35295-C012-487F-8964-F74443C7D64E"}
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
 * @properties={typeid:24,uuid:"7A4DFC74-83AD-44A7-BF5D-A59AAFE14CEF"}
 */
function btn_DesdeCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionPresupuestos1';
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
 *
 * @properties={typeid:24,uuid:"447A0DFB-A21E-4B42-BFE6-11327AFF338A"}
 */
function btn_HastaCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionPresupuestos2';
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
 * @properties={typeid:24,uuid:"15FC2B94-CAA8-48F7-B5BF-C68AB28EF59E"}
 */
function onActionhastanup(event) {
	// TODO Auto-generated method stub
	elements.DesdeCliente.requestFocus()
	elements.DesdeCliente.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"60FB9E5E-09F0-4F46-BEC2-81430ABE3E24"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.HastaCliente.requestFocus()
	elements.HastaCliente.selectAll()
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"F313ECF4-5733-43A6-8945-A90043992DBF"}
 */
function onDataChangeDesdeCliente() {
	// TODO Auto-generated method stub
	if(DesdeCliente)
	{
		var query = "select desccliente from tbmaestroclientes where idcliente = " + DesdeCliente;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		DescDesdeCliente = dataset.getValue(1,1)
	}
	else
	{
		DescDesdeCliente = null
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"00C22E30-F595-4137-97EC-203E12CF8580"}
 */
function onDataChangeHastaCliente() {
	// TODO Auto-generated method stub
	if(HastaCliente)
	{
		var query = "select desccliente from tbmaestroclientes where idcliente = " + HastaCliente;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		HastaDescCliente = dataset.getValue(1,1)
	}
	else
	{
		HastaDescCliente = null
	}
}
