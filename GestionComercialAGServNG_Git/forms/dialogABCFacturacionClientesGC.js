/**
 * @properties={typeid:24,uuid:"1AE319C4-B03A-4969-8E7A-4376DEC2CB0B"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	
	application.getWindow('ABC Facturacion Clientes').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"E2C9F74E-0A54-4EE6-9846-922A42567B80"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	
	
	//application.getWindow('ABC Facturacion Clientes').hide();
	//globals.enableBgElements1();
	if(!forms.dlg_ABCFacturacionClientesGC.Agno) forms.dlg_ABCFacturacionClientesGC.Agno = new Date().getFullYear();
		
	globals.btn_runJasperReportVentasClientesGC(forms.dlg_ABCFacturacionClientesGC.Agno)
		
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7ADFE460-4EF7-42E2-809E-494D256281A0"}
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
 * @properties={typeid:24,uuid:"F66C61A0-2F0D-437A-B0F1-8A005A166EE8"}
 */
function onHide(event) {
	btn_cancel()
	
}
