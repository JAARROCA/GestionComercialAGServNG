/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"38C97894-0831-414F-8A4C-15CBDF8A8445"}
 */
var SituCobrado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"20D4973A-0115-497E-A3B9-F41FA45ACBF1",variableType:4}
 */
var Detalles = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"71077227-0323-4E77-A014-F61FE45B3160",variableType:8}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1280C4EC-1A9C-4DCA-B2CD-233F4B2B9C3E",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BD5C2E16-930A-446D-B304-FE557EE279AD",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"8F20031C-E753-480D-9027-A6CB89C5ACBE",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3F1D53BB-548A-4057-97BF-1B9398E9A582",variableType:4}
 */
var Orden = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"EB7A8BC3-34F1-4D33-B247-074A137B9C86",variableType:8}
 */
var HastaEje = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"A8A4E2A0-5642-459F-8F9C-1BCBD14A41B5",variableType:8}
 */
var HastaNup = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"BCAD8EE4-DDC4-4C44-9B2F-63D3485020CB",variableType:8}
 */
var DesdeEje = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"9E0A6D17-4E86-49A4-A15E-8239C419D46E",variableType:8}
 */
var DesdeNup = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F2B5C2D4-CF63-4208-92D3-19119CED6676"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"A8F0775C-CC65-4046-8890-E7CE4CA7EC51"}
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 */
function onShow() {
	// TODO Auto-generated method stub
	var fechdes = new Date()
	fechdes.setMonth(0,1)
	var a = fechdes.getFullYear().toString().substr(2,2);
	fechdes = utils.dateFormat(fechdes,'dd-MM-yyyy')
	DesdeFecha = utils.parseDate(fechdes,'dd-MM-yyyy')
	HastaFecha = null
	DesdeCliente = null
	HastaCliente = null
	DesdeEje = utils.stringToNumber(a)
	DesdeNup = null
	HastaEje = utils.stringToNumber(a)
	HastaNup = null
	Detalles = null;
	Orden = 1
	SituCobrado = 'T'
	onDataChangeCriterios()
}

/**
 * @properties={typeid:24,uuid:"D0177745-373C-4ACC-9187-FE49724BD6AA"}
 */
function onActiondesdeFecha() {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
	
}

/**
 *
 * @properties={typeid:24,uuid:"2F7AA764-C899-4403-82E0-CCAE36B83ECD"}
 */
function onActionhastaFecha() {
	// TODO Auto-generated method stub
	elements.desdeeje.requestFocus()
	elements.desdeeje.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8A6D7D70-D5C3-4195-8543-BC3AF9B6E3E6"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.Clientec.requestFocus()
	elements.Clientec.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F3F27E57-717A-4757-BB82-C034D1AB338D"}
 */
function BtnDesdeCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_DiarioNotas1';
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
 *
 * @properties={typeid:24,uuid:"37C590BA-C096-4390-8364-9C7E26E83085"}
 */
function BtnHastaCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_DiarioNotas2';
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



/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"4CF10834-473D-4770-AE6D-B26AB8442C7E"}
 */
function onDataChangeCriterios() {
	// TODO Auto-generated method stub
	if(Orden == 1) elements.desdeeje.requestFocus()
	else if(Orden == 2) elements.DesdeFecha.requestFocus()
	else if(Orden == 3) elements.Cliente.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"BB131BFE-91B5-4AE5-8DB1-E95774BA1AEF"}
 */
function onActiondesdeeje(event) {
	// TODO Auto-generated method stub
	elements.desdenup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"7CD95142-4309-4D1C-AF9C-AFD1962187AD"}
 */
function onActiondesdenup(event) {
	// TODO Auto-generated method stub
	elements.hastaeje.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"03431B18-E88D-4FAB-939D-73D24E6654E7"}
 */
function onActionhastaeje(event) {
	// TODO Auto-generated method stub
	elements.hastanup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"011B01C3-BD0C-4164-B967-14A805A62B78"}
 */
function onActionhastanup(event) {
	// TODO Auto-generated method stub
	elements.Cliente.requestFocus()
}
