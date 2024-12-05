/**
 * @properties={typeid:24,uuid:"CC673BD0-F0D3-4358-99C0-3D5E2EF32EF1"}
 */
function evt_find()
{
	
}

/**
 * @properties={typeid:24,uuid:"C0AD3559-7CC5-4118-9B8C-0D22F0835BD3"}
 */
function cmd_search() {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CEB256AA-8A5C-4BCF-9859-0DA35E0A9B45"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmOperariosGC': 
		{
			globals.GCcurID_Operario = id
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('dialog_Operarios3').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8EFF2823-4286-4B0B-B37E-E8ADF2928D9B"}
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
 * @properties={typeid:24,uuid:"185A8605-1B80-47A6-B7F6-ACA5BAB3BECE"}
 */
function onLoad(event) {
	elements.datagrid_operarios.myFoundset.foundset.loadAllRecords()
	//controller.setSelectedIndex(1)
	//elements.datagrid_clientes.myFoundset.foundset.setSelectedIndex(1)
	elements.datagrid_operarios.myFoundset.foundset.sort('idoperario ASC')	
	/*foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idcliente ASC')*/	
}
