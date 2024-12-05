/**
 * @properties={typeid:24,uuid:"854CD818-17C6-4F82-AAF4-BE1C70F0E51C"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	
	application.getWindow('Facturacion Clientes Agnos').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"962B8030-9433-40DB-B45F-7B9998804D57"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	
	
		//application.getWindow('Diario de Facturacion').hide();
		//globals.enableBgElements1();
		
		globals.btn_runJasperReportFacturacionClientesAgnosGC(forms.dlg_FacturacionClientesAgnosGC.dcli,forms.dlg_FacturacionClientesAgnosGC.hcli)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A90C14C9-1964-4FDC-A7FC-127DC9039ECA"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB22043F-E6A2-49A2-B146-DFBCF8EF4BD5"}
 */
function onHide(event) {
	btn_cancel()
	
}
