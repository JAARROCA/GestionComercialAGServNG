/**
 * @properties={typeid:24,uuid:"F8DEED6B-372A-4BEC-A06E-EE190F5D4D9A"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	
	application.getWindow('Facturacion Proveedores Agnos').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"A00242B5-8D11-47DC-8601-C96008062DD0"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	
	
		//application.getWindow('Diario de Facturacion').hide();
		//globals.enableBgElements1();
		
		globals.btn_runJasperReportFacturacionProveedoresAgnosGC(forms.dlg_FacturacionProveedoresAgnosGC.dcli,forms.dlg_FacturacionProveedoresAgnosGC.hcli)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1669129A-A164-4A4F-BB0D-67B8A643F1B2"}
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
 * @properties={typeid:24,uuid:"55443687-99C0-4158-A668-DDAAD1A1ADE5"}
 */
function onHide(event) {
	btn_cancel()
	
}
