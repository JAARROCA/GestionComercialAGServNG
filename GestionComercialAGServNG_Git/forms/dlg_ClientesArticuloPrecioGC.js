/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D74AF0C8-43FB-4EF9-9BEE-D3346F22F7AD"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"8424E8D3-48DA-4CC1-9DE8-0DD3D23BF267"}
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
 * @properties={typeid:24,uuid:"CB569FBE-09B0-4461-BC83-A38ED75EAAB8"}
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
 * @properties={typeid:24,uuid:"4C26A42C-F0D2-4462-B638-23805ABB12AA"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ClientesArticuloPrecioGC';
	//globals.GCshowDialogArticulos('BD Artículos', 1, null, null, true, null, null, null, null, null);
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
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @properties={typeid:24,uuid:"D41764D0-4685-40BA-8DE6-81B5397B2CF4"}
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
			idarticulo = '-';
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Ya existe un precio registrado para ese Artículo-Cliente','¡Error!')
			else globals.GCshowErrorDialog('Ya existe un precio registrado para ese Artículo-Cliente',null,'Aceptar',null,null,null)
			forms.dlg_ClientesArticuloPrecioGC.elements.idarticulo.requestFocus();			
		}
	}
}
