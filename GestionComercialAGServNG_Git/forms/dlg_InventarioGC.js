/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A6F34DB3-3EA3-4776-9622-4A298C3A1A98",variableType:4}
 */
var CriterioOrdenacion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"17F56042-D0B5-4FDD-81A8-4D6FE4125E91",variableType:4}
 */
var Eleccion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E56BEA3B-E31F-4850-AB79-2FEDA6E6B77D",variableType:93}
 */
var FechaInventario = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2329C43C-6640-4570-8C26-C9F661060627"}
 */
var HastaArticulo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0F347FCE-5D05-4B67-9DA6-4BD7F33AB9F4"}
 */
var DesdeArticulo = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D533BF5-2179-4A7D-9759-A2E7D0ADD3CB"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"CE0EA7B8-746A-4EC6-8266-125EA2D997D8"}
 */
function onShow() {
	// TODO Auto-generated method stub
	FechaInventario = new Date()
	CriterioOrdenacion = 0
	Eleccion = 0
	DesdeArticulo=null
	HastaArticulo=null
	elements.DesdeArticulo.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"695BBEBA-5CF6-4F61-830C-41D49A3BAC8F"}
 */
function btnArticuloDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Inventario1';
	//globals.GCshowDialogArticulos('BD Artículos', 1, null, null, true, null, null, null, null, null);
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
 * @properties={typeid:24,uuid:"04D2DD6C-532D-4641-89EA-DFB76FD9CAEF"}
 */
function btnClienteHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Inventario2';
	//globals.GCshowDialogArticulos('BD Artículos', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Artículos')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Articulos", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Artículos';
	//win.resizable = true;
	//win.show(forms.dialog_ArticulosGC)
	win.show(forms.dlgArticulosGC)
}
