/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DE53AB85-6F54-452F-B9C5-8F8F4C65D13D"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"65FFFED1-D301-4A45-9114-1AF7C2933D00"}
 */
function onShow() {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"CEF8CEA2-82AF-455D-A584-FED46D204881"}
 */
function onActionnombre(event) {
	// TODO Auto-generated method stub
	elements.precio.requestFocus()
	elements.precio.selectAll()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"4D5FB500-1DD8-46B1-BF28-B983F7BF7216"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ArticuloClientesPrecioGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Clientes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Clientes';
	//win.resizable = true;
	win.show(forms.dialog_ClientesGC)
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"EB393D85-E61A-4BBD-9B00-858BA94FC710"}
 */
function onDataChangeNombre() {
	// TODO Auto-generated method stub
	if(idcliente && idarticulo)
	{
		var query = "SELECT id FROM [dbo].[tbMaestroclientesprecioarticulos] where [IdCliente] =" + idcliente+
					" and idarticulo ='"+idarticulo+"'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		
		var uuid = dataset.getValue(1,1);
		
		if(uuid)
		{
			idcliente = 0;
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Ya existe un precio registrado para ese Artículo-Cliente','¡Error!')
			else globals.GCshowErrorDialog('Ya existe un precio registrado para ese Artículo-Cliente',null,'Aceptar',null,null,null)
			forms.dlg_ArticuloClientesPrecioGC.elements.idcliente.requestFocus();			
		}
	}
}
