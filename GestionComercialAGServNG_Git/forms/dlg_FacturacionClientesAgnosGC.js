/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"66A70A6F-293F-4D9E-8735-A84DAF119D27"}
 */
var HastaDescCliente = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"C84F9346-D1FB-452B-AEEE-C8122DDF16B0"}
 */
var DescDesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F0960287-3B10-4636-81EA-6DC8F9E4ABCB",variableType:8}
 */
var hcli = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AEC52B8A-49AF-400B-AF00-CB199EA091C8",variableType:8}
 */
var dcli = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"91CFD1F6-8B08-459F-97D4-D80D05C8DF3F"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"EF99307B-AFB6-4AE4-939C-AAF64CE08D25"}
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
 * @properties={typeid:24,uuid:"D6A64781-076E-4812-BAA3-AB18003F09B4"}
 */
function btnClienteDesde(event) {
	
	//if(globals.TipoConsultaPor == 1)
	//{
		globals.GCFormulario = 'dlg_FacturacionClientesAgnosGC1';
		//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
		var win = application.getWindow('Clientes')
		if(win != null) win.destroy();
		 
		win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
		//win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Clientes';
		//win.resizable = true;
		win.show(forms.dialog_ClientesGC)

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
 * @properties={typeid:24,uuid:"E2DB538C-49D2-4801-9A14-563C2520C139"}
 */
function btnClienteHasta(event) {
	//if(globals.TipoConsultaPor == 1)
	//{
		globals.GCFormulario = 'dlg_FacturacionClientesAgnosGC2';
		//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
		var win = application.getWindow('Clientes')
		if(win != null) win.destroy();
		 
		win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
		//win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Clientes';
		//win.resizable = true;
		win.show(forms.dialog_ClientesGC)
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
 * @properties={typeid:24,uuid:"A08C4DA3-9862-4BA5-9484-F363463A43F7"}
 */
function onDataChangeDesdeCliente() {
	// TODO Auto-generated method stub
	if(dcli)
	{
		var query = "select desccliente from tbmaestroclientes where idcliente = " + dcli;
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
 * @properties={typeid:24,uuid:"A4EB54D5-FDEE-4CAC-98E2-1FFBF65494DB"}
 */
function onDataChangeHastaCliente() {
	// TODO Auto-generated method stub
	if(hcli)
	{
		var query = "select desccliente from tbmaestroclientes where idcliente = " + hcli;
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
 * @properties={typeid:24,uuid:"583F6F23-3EE1-4FA8-82C4-37D58E356E7C"}
 */
function onActionAgno(event) {
	elements.DesdeCliente.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E138044-4715-47E8-8AA0-9E36455CBF9A"}
 */
function onActiondcli(event) {
	elements.HastaCliente.requestFocus()
}
