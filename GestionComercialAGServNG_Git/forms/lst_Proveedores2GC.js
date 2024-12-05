/**
 * @properties={typeid:24,uuid:"6C30C00A-98B6-4D5C-847C-B33B77702687"}
 */
function evt_find()
{
	
}

/**
 * @properties={typeid:24,uuid:"12DC384C-7067-425A-9FA2-095B1D9FB50E"}
 */
function cmd_search() {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"08B7B9E2-3420-4023-AA8F-E8E3CDF0F932"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmProveedoresGC': 
		{
			globals.GCcurID_Proveedor = id
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('dialog_Proveedores3').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F0C6B1DE-3805-4226-91B1-10C32C271091"}
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
 * @properties={typeid:24,uuid:"715FCFC0-48A5-4089-B8BC-EA4D41DEBA34"}
 */
function onLoad(event) {
	elements.datagrid_proveedores.myFoundset.foundset.loadAllRecords()
	//controller.setSelectedIndex(1)
	//elements.datagrid_clientes.myFoundset.foundset.setSelectedIndex(1)
	elements.datagrid_proveedores.myFoundset.foundset.sort('codpro ASC')	
	/*foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idcliente ASC')*/	
}
