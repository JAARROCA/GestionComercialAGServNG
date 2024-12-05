/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"002AB360-BD5D-4D8F-8A0E-B17F73784202",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"F0FCDD4D-13A0-468B-A70B-C154A82316EA",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E09E998C-CC75-4960-BD02-AEC6BB368A4F",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D8481407-A846-4DE9-9798-5CE6F6241886",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A5D2829F-7F2B-4A1E-ACA5-7AF820F4FA5B"}
 */
var HastaArticulo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8F902F8A-18C1-4EE7-AE50-C5C6A6CEA569"}
 */
var DesdeArticulo = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"395B6917-FDD3-4229-8CA5-3A75BBBCE549"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"FBFF6715-0232-49BD-87B6-7AFB620552F4"}
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
	DesdeArticulo=null
	HastaArticulo=null
	elements.DesdeAlbaran.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F4E94897-A405-4586-8519-14D2E791EA0D"}
 */
function btnClienteDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_BeneficiosArticulos1';
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
 * @properties={typeid:24,uuid:"FB289BFC-AD83-47F2-BC83-797958657765"}
 */
function btnClienteHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_BeneficiosArticulos2';
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
 * @properties={typeid:24,uuid:"7158ADEF-C100-4C96-A551-A3991F04F9B9"}
 */
function btnArticuloDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_BeneficiosArticulos1';
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
 * @properties={typeid:24,uuid:"4C186819-A5AA-4D0D-B191-7C67A39DDB0F"}
 */
function btnArticuloHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Consulta_BeneficiosArticulos2';
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
 * @properties={typeid:24,uuid:"E4632525-3F7D-4CF6-8E56-08A1B9AB5179"}
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
 * @properties={typeid:24,uuid:"115FA716-129A-476E-A70F-1E8BE846EA25"}
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
 * @properties={typeid:24,uuid:"44998CC6-C7F1-48D0-BA4B-4E7A2D9BB1BE"}
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
 * @properties={typeid:24,uuid:"61C1ED46-AF74-4B8E-8D29-4EFB36B1A620"}
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
 * @properties={typeid:24,uuid:"264150E6-8CF6-4A67-AD96-722317648EB0"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}
