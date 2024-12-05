/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"36753BBE-F61B-4F4A-AE44-1F87FBE8ECD6"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
}

/**
 * @properties={typeid:24,uuid:"6120E342-4B13-4E96-B2A9-CC8124D816C2"}
 */
function sub_setNewNumeroLinea()
{
	var query = 'select [NPedidoLinea] from [tbPedidoCompraLinea] where [NPedido] = ' + npedido + ' order by [NPedidoLinea] desc'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	npedidolinea = dataset.getValue(1, 1) + 1		
}

/**
 * @properties={typeid:24,uuid:"12F737EE-9DAB-4D08-B492-E500FB2F0A25"}
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
 * @properties={typeid:24,uuid:"A4525D82-DAE3-4FDA-B777-84EE8A664C92"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Linea_PedidoCompras'
	//globals.GCshowDialogArticulos('BD Articulos', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Artículos')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Articulos", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Artículos';
	//win.resizable = true;
	//win.show(forms.dialog_ArticulosGC)
	win.show(forms.dlgArticulosGC)
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"69E63533-2DFB-43C8-B861-8BD9144F1850"}
 */
function onShow() {
	// TODO Auto-generated method stub
	elements.situacion.readOnly = true;
	elements.situacion.bgcolor = '#f0f0f0';	
	plugins.window.createShortcut('control F10', globals.handle_shortCutGC);
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"49691948-112B-4F8F-ADC2-D5B03E11BE8C"}
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
 * @properties={typeid:24,uuid:"7C05F48D-A21F-447F-B4BF-AA763F632538"}
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
 * @properties={typeid:24,uuid:"CB4CB713-CF82-4F6A-B667-F32BD59ACD05"}
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
 * @properties={typeid:24,uuid:"ED8D5762-19DF-4D46-8F3B-47EAE945163F"}
 */
function onActionum(event) {
	// TODO Auto-generated method stub
	elements.fld_fechaentrega.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"FF3FF244-CB4D-4CBB-A2DB-E84D94205300"}
 */
function onActiofechaentrega(event) {
	// TODO Auto-generated method stub
	elements.precio.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"842D5F72-E9B5-448D-8922-8FEA453352DA"}
 */
function onActioprecio(event) {
	// TODO Auto-generated method stub
	elements.dto.requestFocus()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"D7B9E4BE-7469-499E-9521-37DF93CC4BF5"}
 */
function onDataChangerefpieza() {
	// TODO Auto-generated method stub
	
	if(refpieza)
	{
			var query = "select [ID] from [tbMaestroMateriales] where [Codigo] = '" + refpieza + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var uuid = dataset.getValue(1,1)
			if(uuid == null)
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Material inexistente','¡Error!')
				else globals.GCshowErrorDialog('Material inexistente',null,'Aceptar',null,null,null)
			}
			else
			{
				if(gctbpedidocompralinea_to_tbmaestromateriales)
				{
					descripcion = gctbpedidocompralinea_to_tbmaestromateriales.descripcion
					unidsum = gctbpedidocompralinea_to_tbmaestromateriales.unidpedido;
					if(gctbpedidocompralinea_to_tbmaestroproveedorespreciomaterial) precio = gctbpedidocompralinea_to_tbmaestroproveedorespreciomaterial.precio;
				}
			}		
	}
}
