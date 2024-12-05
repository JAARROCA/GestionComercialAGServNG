/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DBAEAC67-34E5-4000-AEE8-F7866F6A1B80"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"0D7A9D58-9C25-4A30-8DD7-3B15BDEE04E6"}
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
 * @properties={typeid:24,uuid:"B442B6E8-4006-4056-AE0A-166B91D634AD"}
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
 * @properties={typeid:24,uuid:"DA6C1405-E83D-468F-A1F9-AF586570CCCA"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ProveedorMaterialPrecioGC';
	globals.GCshowDialogMateriales('BD Materiales', 1, null, null, true, null, null, null, null, null);
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @properties={typeid:24,uuid:"C9115B57-9FD8-4F8A-A52B-1A8851788B18"}
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
			idarticulo = '-';
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Ya existe un precio registrado para ese Material-Proveedor','¡Error!')
			else globals.GCshowErrorDialog('Ya existe un precio registrado para ese Material-Proveedor',null,'Aceptar',null,null,null)
			forms.dlg_ProveedorMaterialPrecioGC.elements.idarticulo.requestFocus();			
		}
	}
}
