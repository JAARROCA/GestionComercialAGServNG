/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3968FDBE-C7B0-4CFF-828F-6C6526485F41"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
}

/**
 * @properties={typeid:24,uuid:"3242854D-A4DB-4000-A366-13AA581012B9"}
 */
function sub_setNewNumeroLinea()
{
	var query = "select [nli_lap] from [lalbapro] where [prov_lap] = " + prov_lap + 
	" AND [nup_lap] = '"+nup_lap+"' order by [nli_lap] desc"
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	nli_lap = dataset.getValue(1, 1) + 1		
}

/**
 * @properties={typeid:24,uuid:"B59DA2C1-6102-4E00-BAC0-49B3C93B30FC"}
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
 * @properties={typeid:24,uuid:"2C8F8BBF-FA6E-4E1D-9EF9-3B9E18818B40"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Linea_AlbaranCompras'
	//globals.GCshowDialogArticulos('BD Articulos', 1, null, null, true, null, null, null, null, null);
	//globals.GCshowDialogMateriales('BD Materiales', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Materiales')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Materiales", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Materiales';
	//win.resizable = true;
	win.show(forms.dialog_MaterialesGC)
	
	/*globals.GCFormulario = 'dlg_Linea_AlbaranCompras';
	//globals.GCshowDialogArticulos('BD Artículos', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Artículos')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Articulos", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Artículos';
	//win.resizable = true;
	win.show(forms.dialog_ArticulosGC)*/
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"85BA6D2A-6EAD-4472-AE84-0C6CD6362512"}
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
 * @properties={typeid:24,uuid:"E8F25874-211E-4F7A-B805-4D9021443D66"}
 */
function onActionrefpieza(event) {
	// TODO Auto-generated method stub
	elements.descripcion.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"5D44E178-9A15-4BC8-9C5C-061683199A39"}
 */
function onActionnpedido(event) {
	// TODO Auto-generated method stub
	elements.lipc_lap.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"EA236E59-F975-483E-B54D-A1221EC2F02D"}
 */
function onActionlpedido(event) {
	// TODO Auto-generated method stub
	elements.refa_lap.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"5713A2FA-3C0C-4817-8F43-0431EBF46E92"}
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
 * @properties={typeid:24,uuid:"5F13ED1B-8C79-499E-BA3E-14E7FDCAC683"}
 */
function onActioncantidad(event) {
	// TODO Auto-generated method stub
	
	elements.fld_unidadinterna.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2B62F941-77F3-44BA-8A73-E5B6900BAB16"}
 */
function onActionum(event) {
	// TODO Auto-generated method stub
	elements.precio.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7DAE0C85-A359-493A-A940-2D1ABCC23302"}
 */
function onActioprecio(event) {
	// TODO Auto-generated method stub
	elements.dto.requestFocus()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"A94025E7-23E1-4FC1-A3C7-ADA2A46314E1"}
 */
function onDataChangerefpieza() {
	// TODO Auto-generated method stub
	
	if(refa_lap)
	{
			var query = "select [ID] from [tbMaestroMateriales] where [Codigo] = '" + refa_lap + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var uuid = dataset.getValue(1,1)
			if(!uuid)
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Referencia de Material inexistente','¡Error!')
				else globals.GCshowErrorDialog('Referencia de Material inexistente',null,'Aceptar',null,null,null)
			}
			else
			{
				if(gclalbapro_to_tbmaestromateriales)
				{
					descrefa_lap = gclalbapro_to_tbmaestromateriales.descripcion
					unidsum_lap = gclalbapro_to_tbmaestromateriales.unidalmacenaje
					if(gclalbapro_to_tbmaestroproveedorespreciomaterial) prec_lap = gclalbapro_to_tbmaestroproveedorespreciomaterial.precio;
				}
			}	
			
			/*var query = "select [ID],[Descripcion] from [tbMaestroArticulos] where [Codigo] = '" + refa_lap +"'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var uuid = dataset.getValue(1,1)
			if(!uuid)
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Referencia de Material inexistente','¡Error!')
				else globals.GCshowErrorDialog('Referencia de Material inexistente',null,'Aceptar',null,null,null)
			}
			else
			{
				if(gclalbapro_to_tbmaestroarticulos)
				{
					descrefa_lap = gclalbapro_to_tbmaestroarticulos.descripcion
					unidsum_lap = gclalbapro_to_tbmaestroarticulos.unidmedida
					prec_lap = gclalbapro_to_tbmaestroarticulos.preciocosto;
				}
			}*/
	}
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"AE997351-FE4A-493D-B569-E4F83BA6C067"}
 */
function onDataChangepedido() {
	// TODO Auto-generated method stub
	
	if(nupc_lap && lipc_lap)
	{
			var query = "select [NPedido] from [tbPedidoCompraLinea] where [NPedido] = " + nupc_lap + 
			" AND [NPedidoLinea] = "+ lipc_lap;
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var nped = dataset.getValue(1,1)
			if(!nped)
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Nº de Pedido de compra inexistente','¡Error!')
				else globals.GCshowErrorDialog('Nº de Pedido de compra inexistente',null,'Aceptar',null,null,null)
			}
			else
			{
				if(GClalbapro_to_tbpedidocompralinea)
				{
					refa_lap = GClalbapro_to_tbpedidocompralinea.refpieza
					descrefa_lap = GClalbapro_to_tbpedidocompralinea.descripcion
					unidsum_lap = GClalbapro_to_tbpedidocompralinea.unidsum
					prec_lap = GClalbapro_to_tbpedidocompralinea.precio
					dto_lap = GClalbapro_to_tbpedidocompralinea.dto
					cant_lap = GClalbapro_to_tbpedidocompralinea.cantidad
				}
			}		
	}
}
