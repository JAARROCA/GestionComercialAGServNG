/**
 * @properties={typeid:24,uuid:"7845E4DE-DBDC-4D67-98AF-5D2DB5971B63"}
 */
function evt_find()
{
	
}

/**
 * @properties={typeid:24,uuid:"9ED4D6EC-19D3-446F-9B36-B7DD9890A35E"}
 */
function cmd_search() {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E42C974F-5D49-44D7-8722-2161CEED0622"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmFamiliasGC': 
		{
			globals.GCcurID_Familia = id
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('dialog_Familias3').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"66561A35-E02E-4855-8A6F-437C73CA011E"}
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
 * @properties={typeid:24,uuid:"31FFDA8F-E6DB-48F9-AF75-13A67A198FCC"}
 */
function onLoad(event) {
	elements.datagrid_familias.myFoundset.foundset.loadAllRecords()
	//controller.setSelectedIndex(1)
	//elements.datagrid_clientes.myFoundset.foundset.setSelectedIndex(1)
	elements.datagrid_familias.myFoundset.foundset.sort('idfamilia ASC')	
	/*foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idcliente ASC')*/	
}
