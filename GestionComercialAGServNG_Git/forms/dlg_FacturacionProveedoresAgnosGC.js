/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"224E5E0A-BEA4-4486-BACC-9ADF4D7E0AA9"}
 */
var HastaDescCliente = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"DC497916-5EB6-4B9E-9E9B-031BA09AB411"}
 */
var DescDesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DF3A4ADB-9153-48B8-B603-0E8788B5C637",variableType:8}
 */
var hcli = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"13B3590F-DE0D-4B77-AD4E-83F08ADFB8B7",variableType:8}
 */
var dcli = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A871343B-63CB-4044-9B1E-7BBB7801C5C7"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"4E680011-BF85-4630-9827-7776A12078DB"}
 */
function onShow() {
	// TODO Auto-generated method stub
	
	
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
 * @properties={typeid:24,uuid:"54419555-4A36-42DB-A411-348BC393E1B3"}
 */
function btnClienteDesde(event) {
	
	//if(globals.TipoConsultaPor == 1)
	//{
	globals.GCFormulario = 'dlg_FacturacionProveedoresAgnosGC1';
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
 * @properties={typeid:24,uuid:"9C69BF34-9C9A-431C-BB17-F455879DDECD"}
 */
function btnClienteHasta(event) {
	//if(globals.TipoConsultaPor == 1)
	//{
	globals.GCFormulario = 'dlg_FacturacionProveedoresAgnosGC2';
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
 * @properties={typeid:24,uuid:"32C7431D-5F12-423B-847E-16DBF3A04546"}
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
 * @properties={typeid:24,uuid:"AE5362AC-22E7-4AB0-8F55-B81FED7B01EA"}
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
 * @properties={typeid:24,uuid:"A09C65B6-6A5B-4833-901A-CA53FA530407"}
 */
function onActionAgno(event) {
	elements.DesdeCliente.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E5265BF1-F289-4245-8B69-E01BF72C2C13"}
 */
function onActiondcli(event) {
	elements.HastaCliente.requestFocus()
}
