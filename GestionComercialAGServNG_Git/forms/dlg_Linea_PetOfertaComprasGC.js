/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4CC0FD66-3E78-4ADC-9BC2-9EC68DA6E15C"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
}

/**
 * @properties={typeid:24,uuid:"3574091C-8FB8-42F0-B4D8-0EBC4A177900"}
 */
function sub_setNewNumeroLinea()
{
	var query = 'select [Linea] from [tbPetOfertaCompraLinea] where [NPetOferta] = ' + npetoferta + ' order by [Linea] desc'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	linea = dataset.getValue(1, 1) + 1	
}

/**
 * @properties={typeid:24,uuid:"2DC9D5D4-12CA-49F2-BB9D-9596F046632A"}
 */
function validate_autoEnter()
{
	sub_setNewNumeroLinea();	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3794D81F-940F-45E9-B815-222D2BFBD393"}
 */
function BtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Linea_PetOfertaCompras'
	globals.GCshowDialogMateriales('BD Articulos', 1, null, null, true, null, null, null, null, null);
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"C5AC6B34-024A-4A27-995D-E6ABCBC1F42D"}
 */
function onShow() {
	// TODO Auto-generated method stub
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"E658DA56-2B16-4E5F-9426-D829B259B0E0"}
 */
function onActionrefpieza(event) {
	// TODO Auto-generated method stub
	onDataChangerefpieza()
	elements.descripcion.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"CA04EDB4-0607-4DA1-B5BE-5875966770A8"}
 */
function onActiondesc(event) {
	// TODO Auto-generated method stub
	elements.fld_cantidad.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F35E6BA2-F1B9-495C-9A31-6987BAA12CBC"}
 */
function onActioncantidad(event) {
	// TODO Auto-generated method stub
	
	elements.fld_unid.requestFocus()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"55302749-86AB-4747-9F4C-90F88D37A7EB"}
 */
function onDataChangerefpieza() {
	// TODO Auto-generated method stub
	
	if(ref)
	{
		if(gctbpetofertacompralinea_to_tbmaestromateriales)
		{
			var query = "select [ID] from [tbMaestroMateriales] where [Codigo] = '" + ref + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var uuid = dataset.getValue(1,1)
			if(uuid == null)
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Referencia de Artículo inexistente','¡Error!')
				else globals.GCshowErrorDialog('Referencia de Artículo inexistente',null,'Aceptar',null,null,null)
			}
			else
			{
				descripcion = gctbpetofertacompralinea_to_tbmaestromateriales.descripcion				
			}
		}		
	}
}
