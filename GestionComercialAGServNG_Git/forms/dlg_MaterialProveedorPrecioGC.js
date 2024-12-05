/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"66F4135E-9D2B-49EC-89FC-435D51CAA08C"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"7B2057B8-488E-44F3-8F31-E5D5C0E850A8"}
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
 * @properties={typeid:24,uuid:"A005B16D-2F03-4B62-9438-29D466E53159"}
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
 * @properties={typeid:24,uuid:"A8BAC31A-996E-4807-A4F6-31830F3F600D"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_MaterialProveedorPrecioGC';
	//globals.GCshowDialogProveedores('BD Proveedores', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Proveedores')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Proveedores", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Proveedores';
	//win.resizable = true;
	win.show(forms.dialog_ProveedoresGC)
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"6E43391F-F2B7-42B5-A361-D8AA5818E735"}
 */
function onDataChangeNombre() {
	// TODO Auto-generated method stub
	if(codpro && idarticulo)
	{
		var query = "SELECT id FROM [dbo].[tbMaestroproveedorespreciomaterial] where [codpro] =" + codpro+
					" and idarticulo ='"+idarticulo+"'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		
		var uuid = dataset.getValue(1,1);
		
		if(uuid)
		{
			codpro = 0;
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Ya existe un precio registrado para ese Material-Proveedor','¡Error!')
			else globals.GCshowErrorDialog('Ya existe un precio registrado para ese Material-Proveedor',null,'Aceptar',null,null,null)
			elements.idcliente.requestFocus();			
		}
	}
}
