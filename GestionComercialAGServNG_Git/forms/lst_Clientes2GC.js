/**
 * @properties={typeid:24,uuid:"E76C1E6C-DEF2-48DF-9CB1-2570C2E61E52"}
 */
function evt_find()
{
	
}

/**
 * @properties={typeid:24,uuid:"CA403BBE-2B33-4A88-9CC2-264737723A82"}
 */
function cmd_search() {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0173F4B9-1EA5-4EE0-91C4-89F13CC4D59E"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmClientesGC': 
		{
			globals.GCcurID_Cliente = id
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('dialog_Clientes3').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7109A15F-D38C-452A-A3AF-4A2BEF8232F7"}
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
 * @properties={typeid:24,uuid:"0DB617A8-A549-4E23-ADC4-8AD3C1555D57"}
 */
function onLoad(event) {
	elements.datagrid_clientes.myFoundset.foundset.loadAllRecords()
	//controller.setSelectedIndex(1)
	//elements.datagrid_clientes.myFoundset.foundset.setSelectedIndex(1)
	elements.datagrid_clientes.myFoundset.foundset.sort('idcliente ASC')	
	/*foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idcliente ASC')*/	
}
