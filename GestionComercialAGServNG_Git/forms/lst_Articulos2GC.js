/**
 * @properties={typeid:24,uuid:"14D60A7E-129E-454D-A8F3-3AD0B0A2FC2D"}
 */
function evt_find()
{
	
}

/**
 * @properties={typeid:24,uuid:"6753ABE8-05D9-42DB-A60E-83FCD390505A"}
 */
function cmd_search() {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7B51F8FB-267A-4539-86E7-A4000802E2BE"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmArticulosGC': 
		{
			globals.GCcurID_Articulo = id
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('dialog_Articulos3').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9D07A5F4-E9C3-4FE5-B7A4-9DB22909827A"}
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
 * @properties={typeid:24,uuid:"39F95CA8-7790-4E11-8897-EECF71DFCA6C"}
 */
function onLoad(event) {
	elements.datagrid_articulos.myFoundset.foundset.loadAllRecords()
	//controller.setSelectedIndex(1)
	//elements.datagrid_clientes.myFoundset.foundset.setSelectedIndex(1)
	elements.datagrid_articulos.myFoundset.foundset.sort('codigo ASC')	
	/*foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idcliente ASC')*/	
}
