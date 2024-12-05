/**
 * @properties={typeid:24,uuid:"5955D628-9004-4574-8155-ABB82769061C"}
 */
function evt_find()
{
	
}

/**
 * @properties={typeid:24,uuid:"7D4747E5-EB45-4A64-88FE-762F14ADE794"}
 */
function cmd_search() {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"35865616-7BA3-479C-A421-0977C7EDCE1B"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmPedidosGC': 
		{
			globals.GCcurID_Pedido = id;
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('dialog_Pedidos3').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD6D8B28-7EE5-455E-AF16-12558448D9A7"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function onShow(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search = null
	globals.GCnav_search2 = null
	onLoad(event)
	//elements.fld_search_cuenta.requestFocus()
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"3463DE79-7F9A-4E77-B33F-9567C2D12E82"}
 */
function onLoad(event) {
	elements.datagrid_pedidos.myFoundset.foundset.loadAllRecords()
	//controller.setSelectedIndex(1)
	//elements.datagrid_clientes.myFoundset.foundset.setSelectedIndex(1)
	elements.datagrid_pedidos.myFoundset.foundset.sort('cod_cot desc')	
	/*foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idcliente ASC')*/	
}
