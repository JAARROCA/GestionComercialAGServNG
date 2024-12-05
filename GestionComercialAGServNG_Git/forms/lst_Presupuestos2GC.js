/**
 * @properties={typeid:24,uuid:"13D955A5-C433-4E81-870E-F5CDEEC8CBBC"}
 */
function evt_find()
{
	
}

/**
 * @properties={typeid:24,uuid:"3A573581-13F5-4510-893D-7E16756A159E"}
 */
function cmd_search() {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75B65F3D-E189-4CEE-A71D-C3123EDF0405"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmPresupuestosGC': 
		{
			globals.GCcurID_Presupuesto = id
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('dialog_Presupuestos3').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2C0350C0-56DA-4CD7-839A-6B00B4253C19"}
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
 * @properties={typeid:24,uuid:"9111EDBE-CAD6-4DFC-9633-BA2B7C6F87F1"}
 */
function onLoad(event) {
	elements.datagrid_presupuestos.myFoundset.foundset.loadAllRecords()
	//controller.setSelectedIndex(1)
	//elements.datagrid_clientes.myFoundset.foundset.setSelectedIndex(1)
	elements.datagrid_presupuestos.myFoundset.foundset.sort('cod_cof ASC')	
	/*foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idcliente ASC')*/	
}
