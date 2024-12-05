/**
 * @properties={typeid:24,uuid:"28B88A60-B9EF-4DC4-95F3-913B22351FAF"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	
	application.getWindow('Facturacion Proveedores').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"9FFE2F90-2C07-4C87-93DF-EE71E0D4190E"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	
	
		//application.getWindow('Diario de Facturacion').hide();
		//globals.enableBgElements1();
		if(!forms.dlg_FacturacionProveedoresGC.Agno) forms.dlg_FacturacionProveedoresGC.Agno = new Date().getFullYear()
		globals.btn_runJasperReportFacturacionProveedoresGC(forms.dlg_FacturacionProveedoresGC.dcli,forms.dlg_FacturacionProveedoresGC.hcli,forms.dlg_FacturacionProveedoresGC.Agno)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3CC8C699-5C93-4478-85FF-E8AD83596D5D"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
}
