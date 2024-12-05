/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"2CDA3D5C-4F4A-42A4-9E32-98021A38A874"}
 */
var Criterio = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"92C6E34B-316D-411D-88DE-4E1DABF223DA"}
 */
var HastaArticulo = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"670BB2A7-0F63-4D36-ABEF-5312AC5BE3D2"}
 */
var DesdeArticulo = null;

/**
 * @type {Date}
 *
 *
 * @properties={typeid:35,uuid:"CB03BAF6-F3FE-4C6F-B79E-3E87786560D4",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 *
 * @properties={typeid:35,uuid:"8EA4A6C1-405A-4B2E-8E35-C82FBE557891",variableType:93}
 */
var DesdeFecha = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"31910FE2-E629-4396-B83D-5464C63DB009"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"14C4EDDF-23B4-4AC4-9F86-C8C85270D800"}
 */
function onShow() {
	// TODO Auto-generated method stub
	
	DesdeFecha = null
	HastaFecha = null;	
	Criterio='0'
	DesdeArticulo=null
	HastaArticulo=null
	elements.DesdeArticulo.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"37CBE468-5FFE-43F1-8298-5BA598810D27"}
 */
function btnArticuloDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Diario_Mov1';
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
 * @properties={typeid:24,uuid:"6CC81CC3-3F7F-45EF-9AA7-798ACAF17D6D"}
 */
function btnClienteHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario =  'dlg_Diario_Mov2';
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
