/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"B793843A-5D29-4BDC-9A1E-FB019EEE0DF2",variableType:8}
 */
var agrupar2 = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"F0D42226-96ED-4916-9605-C3BC8BEF93D4",variableType:8}
 */
var agrupar = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0696DF44-9506-475F-A17D-10EFB86EC613"}
 */
var HastaFP = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"91B9DE54-0257-4FB0-9131-FB61C4E4509D"}
 */
var DesdeFP = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"059359F1-3208-4ACE-8340-C614A00C57C0"}
 */
var SituacionCobroPago = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"95B1E6C8-E9AE-4F4A-933B-CC14A99F1819",variableType:4}
 */
var CriterioCobroPago = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E464D137-C856-409D-9B7C-F17FA04E0CBD"}
 */
var HastaCuenta = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"132E4EF2-A77E-4CF1-8B99-FE22C94AAD1B"}
 */
var DesdeCuenta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"76C82A54-6528-458E-8937-E695FF58C5F7",variableType:8}
 */
var HastaImporte = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3D1D395-85A1-4CFB-A894-C14C2207580A",variableType:8}
 */
var DesdeImporte = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3EFBE07D-8F29-4DB7-87E2-B9579A1FC231",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E1FC202E-5A04-4972-8939-12659DF7BD59",variableType:93}
 */
var DesdeFecha = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3DF57409-D786-465E-8CF4-8EE16D4C1D93"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"845E4F98-1CFE-4F59-992D-A5407F59C59D"}
 */
function onShow() {
	// TODO Auto-generated method stub
	CriterioCobroPago = 1;
	globals.GCCriterios = 0;
	DesdeCuenta = null;
	HastaCuenta = null;
	DesdeFecha = null;
	HastaFecha = null;
	DesdeImporte = null;
	HastaImporte = null;
	DesdeFP = null;
	HastaFP = null;
	agrupar = 1;
	agrupar2 = null;
	SituacionCobroPago = '1';	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F22D053C-3EE4-4375-BE5B-51247EEE24BA"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9C6567FE-A7CC-4D87-8401-8A0BAD93397B"}
 */
function onActionhastafecha(event) {
	// TODO Auto-generated method stub
	elements.DesdeCuenta.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10A9702F-F0C6-40A5-8F1E-CAD5CCE17DD8"}
 */
function onActiondesdecuenta(event) {
	// TODO Auto-generated method stub
	elements.HastaCuenta.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5A7EEB73-2818-4C31-A30A-4069F0D68D1A"}
 */
function onActionhastacuenta(event) {
	// TODO Auto-generated method stub
	elements.DesdeImporte.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C4D1A52B-40DF-4B6C-889B-2712199D1C90"}
 */
function onActiondesdeimporte(event) {
	// TODO Auto-generated method stub
	elements.HastaImporte.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"84234D82-FAD1-4EF7-B40C-9F8A4231ECCF"}
 */
function onActionhastaimporte(event) {
	// TODO Auto-generated method stub
	elements.DesdeFP.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"288B5CB0-03CF-4330-BBE0-3AB734AEEF5A"}
 */
function onActiondesdefp(event) {
	// TODO Auto-generated method stub
	elements.HastaFP.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"5C5AD863-DDAB-436F-B031-EDC40F0246A1"}
 */
function onActionBtnFormaPago1(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ConsultaCobrosPagosPendientes1'
	//globals.GCshowDialogFormasPago('Formas de Pago', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Formas Pago')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Formas Pago", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Formas de Pago';
	//win.resizable = true;
	win.show(forms.dlgFormasPagoGCNG)
	//win.show(forms.dialog_FormasPagoGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"028AEE19-786F-4009-9811-071749D8D535"}
 */
function onActionBtnFormaPago2(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ConsultaCobrosPagosPendientes2'
	//globals.GCshowDialogFormasPago('Formas de Pago', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Formas Pago')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Formas Pago", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Formas de Pago';
	//win.resizable = true;
	win.show(forms.dlgFormasPagoGCNG)
	//win.show(forms.dialog_FormasPagoGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"D06F218B-850C-4FF2-BFD0-7331138711D6"}
 */
function onActionBtnCuenta1(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ConsultaCobrosPagosPendientes1'
	if(CriterioCobroPago == 1)
	{
		//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
		var win = application.getWindow('Clientes')
		if(win != null) win.destroy();
		 
		win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
		//win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Clientes';
		//win.resizable = true;
		win.show(forms.dialog_ClientesGC)
	}
	else
	{
		//globals.GCshowDialogProveedores('Proveedores', 1, null, null, true, null, null, null, null, null);
		win = application.getWindow('Proveedores')
		if(win != null) win.destroy();
		 
		win = application.createWindow("Proveedores", JSWindow.MODAL_DIALOG);
		//win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Proveedores';
		//win.resizable = true;
		win.show(forms.dialog_ProveedoresGC)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"9DC6FA48-8CD5-4C75-8448-092B12FEFAD9"}
 */
function onActionBtnCuenta2(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ConsultaCobrosPagosPendientes2'
	if(CriterioCobroPago == 1)
	{
		//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
		var win = application.getWindow('Clientes')
		if(win != null) win.destroy();
		 
		win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
		//win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Clientes';
		//win.resizable = true;
		win.show(forms.dialog_ClientesGC)
	}
	else
	{
		//globals.GCshowDialogProveedores('Proveedores', 1, null, null, true, null, null, null, null, null);
		win = application.getWindow('Proveedores')
		if(win != null) win.destroy();
		 
		win = application.createWindow("Proveedores", JSWindow.MODAL_DIALOG);
		//win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Proveedores';
		//win.resizable = true;
		win.show(forms.dialog_ProveedoresGC)
	}
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"1E3F7709-BC73-4B84-834D-AECDAC9CFFA9"}
 */
function onClickAgrupar(event) {
	
		globals.GCCriterios = 0;
		agrupar2 = null;
	
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"EBA600D8-283B-44AD-B458-F25A407058F0"}
 */
function onClickAgrupar2(event) {
	
		globals.GCCriterios = 1;
		agrupar = null;
	
}
