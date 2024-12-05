/**
 * @properties={typeid:24,uuid:"DA4A3E19-4986-4E19-A011-10C37CAF9631"}
 */
function evt_find()
{
	
}

/**
 * @properties={typeid:24,uuid:"22BBCAF3-BE74-422C-BA7B-CDC7D3662D80"}
 */
function cmd_search() {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"730902F5-D092-463F-9C9A-2E1EA4369EB3"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmFaturasProformaGC': 
		{
			globals.GCcurID_FacturaProforma = id;
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('dialog_FacturasProforma3').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F01F037E-1C37-4F78-B8BD-FFE16880DD68"}
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
 * @properties={typeid:24,uuid:"03D12B33-CA7D-4882-A760-E1F1BE9D9607"}
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
