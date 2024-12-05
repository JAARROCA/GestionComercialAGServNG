/**
 * @properties={typeid:24,uuid:"ACC3D735-C91C-4C79-8D49-4582143B0A41"}
 */
function evt_find()
{
	
}

/**
 * @properties={typeid:24,uuid:"BB577239-D6EA-45E9-97BD-5CB2D1FCD747"}
 */
function cmd_search() {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BAB6C02C-C1F4-49B1-A81A-CD0FF7339237"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmFacturasGC': 
		{
			globals.GCcurID_Factura = id;
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('dialog_Facturas3').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EEBAAF87-46EA-440C-954E-437BA1E9F6DA"}
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
 * @properties={typeid:24,uuid:"8F792FA9-1136-4467-B5BA-EF17958E344C"}
 */
function onLoad(event) {
	elements.datagrid_facturas.myFoundset.foundset.loadAllRecords()
	//controller.setSelectedIndex(1)
	//elements.datagrid_clientes.myFoundset.foundset.setSelectedIndex(1)
	elements.datagrid_facturas.myFoundset.foundset.sort('eje_cfa desc, nup_cfa desc, ser_cfa asc')	
	/*foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idcliente ASC')*/	
}
