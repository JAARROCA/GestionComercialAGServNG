/**
 * @properties={typeid:24,uuid:"CC557155-6129-4ADB-9227-9C9DC5135F35"}
 */
function evt_find()
{
	
}

/**
 * @properties={typeid:24,uuid:"6B983A23-A5D9-4B45-8EDE-D5C3B93DA5B1"}
 */
function cmd_search() {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"42C8013D-5B11-4269-A2CB-ACA08D494207"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmAlbaranGC': 
		{
			globals.GCcurID_Albaran = id
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('dialog_Albaranes3').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9DE63C2A-4506-4E86-82B8-F8F21EBBBA58"}
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
 * @properties={typeid:24,uuid:"BCC677D4-13FF-4FE5-ACA5-28829FD28856"}
 */
function onLoad(event) {
	elements.datagrid_albaranes.myFoundset.foundset.loadAllRecords()
	//controller.setSelectedIndex(1)
	//elements.datagrid_clientes.myFoundset.foundset.setSelectedIndex(1)
	elements.datagrid_albaranes.myFoundset.foundset.sort('cod_cal ASC')	
	/*foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idcliente ASC')*/	
}
