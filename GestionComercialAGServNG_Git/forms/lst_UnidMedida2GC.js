/**
 * @properties={typeid:24,uuid:"4E0AEDFC-0B63-4F8B-B4BB-E87609897F3C"}
 */
function evt_find()
{
	
}

/**
 * @properties={typeid:24,uuid:"530AB0A5-E4CC-4E24-920C-B5664AEE760A"}
 */
function cmd_search() {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"59606BA7-9B7B-41C6-BBF3-A76762225702"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmUnidMedidaGC': 
		{
			globals.GCcurID_UnidMedida = unidade_id
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('dialog_UnidMedida3').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F1D7A1D3-8441-4060-9763-45CF3E55E340"}
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
 * @properties={typeid:24,uuid:"6526D285-4AB9-4A1E-9907-A26957BA0B34"}
 */
function onLoad(event) {
	elements.datagrid_unidmedidas.myFoundset.foundset.loadAllRecords()
	//controller.setSelectedIndex(1)
	//elements.datagrid_clientes.myFoundset.foundset.setSelectedIndex(1)
	elements.datagrid_unidmedidas.myFoundset.foundset.sort('unidade_id asc')	
	/*foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idcliente ASC')*/	
}
