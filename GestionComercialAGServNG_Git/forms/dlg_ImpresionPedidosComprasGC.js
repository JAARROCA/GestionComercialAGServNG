/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"65275606-C121-4DE1-88DA-33EE245AB3AC",variableType:8}
 */
var HastaProveedor = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"832C26A4-5264-4020-9471-A8D4B6AA19D9",variableType:8}
 */
var DesdeProveedor = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"4A912739-C5F3-44BF-AE7A-D326EDF56CBD",variableType:8}
 */
var HastaPedido = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"4E09CEF2-F66E-4F33-9344-1F66578F9F07",variableType:8}
 */
var DesdePedido = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"281F2349-3133-469E-BA7F-EF62B11BBD44"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"35EE91C8-4769-426C-BF26-CA02FF2823DF"}
 */
function onShow() {
	// TODO Auto-generated method stub
	DesdePedido = null
	HastaPedido = null
	DesdeProveedor = null
	HastaProveedor = null
	elements.DesdePresupuesto.requestFocus()
	
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"8931F710-F03D-424C-954D-5E289B7B69AC"}
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
 * @properties={typeid:24,uuid:"866D6D36-7580-4952-9BCB-4953A652A3E3"}
 */
function onActionhastaalbaran(event) {
	// TODO Auto-generated method stub
	elements.DesdeProveedor.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"086A9123-884C-4599-9D02-17406EB750FD"}
 */
function btn_DesdeCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionPedidosCompras1';
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
 *
 * @properties={typeid:24,uuid:"8CED6954-CBB3-4208-AE60-26229587BA81"}
 */
function btn_HastaCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionPedidosCompras2';
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
 * @properties={typeid:24,uuid:"D9EA44E8-A20F-4134-A011-2BF14F4B193F"}
 */
function onActionhastanup(event) {
	// TODO Auto-generated method stub
	elements.DesdeProveedor.requestFocus()
	elements.DesdeProveedor.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"AE287E43-1B30-4460-9F00-7907BCD9A367"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.HastaProveedor.requestFocus()
	elements.HastaProveedor.selectAll()
}
