/**
 * @properties={typeid:24,uuid:"D74857E0-3ED1-46C9-B27D-9818CC2ACF49"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	
	application.getWindow('Facturacion Clientes').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"E67C0821-A2D9-4D1D-9A90-3FF90EDCAD77"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	
	
		//application.getWindow('Diario de Facturacion').hide();
		//globals.enableBgElements1();
		if(!forms.dlg_FacturacionClientesGC.Agno) forms.dlg_FacturacionClientesGC.Agno = new Date().getFullYear();
		if(!forms.dlg_FacturacionClientesGC.dmes) forms.dlg_FacturacionClientesGC.dmes = 1;
		if(forms.dlg_FacturacionClientesGC.dmes < 1 || forms.dlg_FacturacionClientesGC.dmes > forms.dlg_FacturacionClientesGC.hmes) forms.dlg_FacturacionClientesGC.dmes = 1;
		if(!forms.dlg_FacturacionClientesGC.hmes) forms.dlg_FacturacionClientesGC.hmes = 12;
		if(forms.dlg_FacturacionClientesGC.hmes > 12) forms.dlg_FacturacionClientesGC.hmes = 12;
		
		if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai && forms.dlg_FacturacionClientesGC.AnuladasTBAI == 1)
		{			
			globals.btn_runJasperReportFacturacionClientes_2GC(forms.dlg_FacturacionClientesGC.dcli,forms.dlg_FacturacionClientesGC.hcli,forms.dlg_FacturacionClientesGC.Agno,forms.dlg_FacturacionClientesGC.dmes,forms.dlg_FacturacionClientesGC.hmes)
		}
		else
		{
			globals.btn_runJasperReportFacturacionClientesGC(forms.dlg_FacturacionClientesGC.dcli,forms.dlg_FacturacionClientesGC.hcli,forms.dlg_FacturacionClientesGC.Agno,forms.dlg_FacturacionClientesGC.dmes,forms.dlg_FacturacionClientesGC.hmes)
		}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B9A49F21-9FAA-462A-B8FE-B5762A423198"}
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
 * @properties={typeid:24,uuid:"D31E9ED2-400A-408D-A5D6-ABF602229E80"}
 */
function onHide(event) {
	btn_cancel()
	
}
