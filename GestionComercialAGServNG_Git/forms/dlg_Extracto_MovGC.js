/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"379CDA73-B172-4479-B105-16EC41FC9A8A"}
 */
var Criterio = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"A17EDD48-4B02-44EB-A0D7-E5A9B42568E9"}
 */
var HastaArticulo = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"02DD4E45-BE46-4692-9BFA-B85CE3B463A7"}
 */
var DesdeArticulo = null;

/**
 * @type {Date}
 *
 *
 * @properties={typeid:35,uuid:"855EFE0E-35AF-4A4F-A16B-D77EF63CBA43",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 *
 * @properties={typeid:35,uuid:"5C5BB2A3-4648-4924-84AE-FF5F5DAC39B7",variableType:93}
 */
var DesdeFecha = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AB27701A-5EF5-48A7-8A14-5D0755AD9B34"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"F341F6AB-A45F-490F-B3EB-AFCD4133180C"}
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
 * @properties={typeid:24,uuid:"8B995ED2-6A06-4C11-A9ED-9A5CA41AE58B"}
 */
function btnArticuloDesde(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Extracto_Mov1';
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
 * @properties={typeid:24,uuid:"D5DF5853-CA1A-4017-A50E-7297967560E2"}
 */
function btnClienteHasta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario =  'dlg_Extracto_Mov2';
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
