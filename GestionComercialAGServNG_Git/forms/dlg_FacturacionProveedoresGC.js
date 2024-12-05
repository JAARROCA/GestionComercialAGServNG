/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"93359917-58C7-4B91-B79D-7E3C6EE1AE78"}
 */
var HastaDescCliente = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"BF505744-7277-49EF-AC3B-14C1FAB5D6D1"}
 */
var DescDesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"166D3994-8168-411E-BA71-414BCB19B5F1",variableType:8}
 */
var hcli = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9B566672-A1EF-4D87-B9C7-9AE566467A1A",variableType:8}
 */
var dcli = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F8582116-B59E-423E-8F35-A39B212FCF11",variableType:4}
 */
var Agno = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2422B887-C698-4E0D-AC1E-69FF6B3B64A3"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"4CE8642F-6916-4479-B00D-0D672F42D41A"}
 */
function onShow() {
	// TODO Auto-generated method stub
	
	Agno = new Date().getFullYear()	
	globals.GCCriterios=0
	DescDesdeCliente = null;
	HastaDescCliente = null;
	dcli=null
	hcli=null
	
	elements.DesdeCliente.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A9268E24-B5D2-4F57-9B45-12D4168DD339"}
 */
function btnClienteDesde(event) {
	
	//if(globals.TipoConsultaPor == 1)
	//{
		globals.GCFormulario = 'dlg_FacturacionProveedoresGC1';
		//globals.GCshowDialogProveedores('BD Proveedores', 1, null, null, true, null, null, null, null, null);
		var win = application.getWindow('Proveedores')
		if(win != null) win.destroy();
		 
		win = application.createWindow("Proveedores", JSWindow.MODAL_DIALOG);
		//win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Proveedores';
		//win.resizable = true;
		win.show(forms.dialog_ProveedoresGC)

	/*}
	else
	{
		globals.CONTAFormulario = 'dlg_FacturacionClientesCONTA1';
		globals.showDialogCuentasContablesProveedores('Cuentas Contables Proveedores', 1, null, null, true, null, null, null, null, null);
	}*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E2DE32E9-B67A-4D47-9B41-82700A9F46D8"}
 */
function btnClienteHasta(event) {
	//if(globals.TipoConsultaPor == 1)
	//{
		globals.GCFormulario = 'dlg_FacturacionProveedoresGC2';
		//globals.GCshowDialogProveedores('BD Proveedores', 1, null, null, true, null, null, null, null, null);
		var win = application.getWindow('Proveedores')
		if(win != null) win.destroy();
		 
		win = application.createWindow("Proveedores", JSWindow.MODAL_DIALOG);
		//win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Proveedores';
		//win.resizable = true;
		win.show(forms.dialog_ProveedoresGC)
	/*}
	else
	{
		globals.CONTAFormulario = 'dlg_FacturacionClientesCONTA2';
		globals.showDialogCuentasContablesProveedores('Cuentas Contables Proveedores', 1, null, null, true, null, null, null, null, null);
	}*/
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"7692880E-4A30-4661-BE93-DA9B85697099"}
 */
function onDataChangeDesdeCliente() {
	// TODO Auto-generated method stub
	if(dcli)
	{
		var query = "select descproveedor from tbmaestroproveedores where codpro = " + dcli;
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
 * @properties={typeid:24,uuid:"A24EDB2E-2FBE-4B8D-A3AA-9780E6F7E5D3"}
 */
function onDataChangeHastaCliente() {
	// TODO Auto-generated method stub
	if(hcli)
	{
		var query = "select descproveedor from tbmaestroproveedores where codpro = " + hcli;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		HastaDescCliente = dataset.getValue(1,1)
	}
	else
	{
		HastaDescCliente = null
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"1E2DDC93-E436-4C95-8ACE-40319E737045"}
 */
function onActionAgno(event) {
	elements.DesdeCliente.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"4EB46958-0BEB-4869-BACC-D3BD9E3F723F"}
 */
function onActiondcli(event) {
	elements.HastaCliente.requestFocus()
}
