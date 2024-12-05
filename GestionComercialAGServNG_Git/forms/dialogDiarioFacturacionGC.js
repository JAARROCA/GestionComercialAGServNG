/**
 *
 * @properties={typeid:24,uuid:"CB7B8248-6CE5-4270-A61D-D94EDBC45012"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Diario Facturacion').hide();
	globals.GCenableBgElements();
	
}

/**
 *
 * @properties={typeid:24,uuid:"DD3694BC-AC9C-478B-8674-0D483DF408D5"}
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
		var DFECH = forms.dlg_DiarioFacturacionGC.DesdeFecha;
		var HFECH = forms.dlg_DiarioFacturacionGC.HastaFecha;
		var DCLI = forms.dlg_DiarioFacturacionGC.DesdeCliente;
		var HCLI = forms.dlg_DiarioFacturacionGC.HastaCliente;
		var DEJE = forms.dlg_DiarioFacturacionGC.DesdeEje;
		var HEJE = forms.dlg_DiarioFacturacionGC.HastaEje;
		var DSER = forms.dlg_DiarioFacturacionGC.DesdeSer;
		var HSER = forms.dlg_DiarioFacturacionGC.HastaSer;
		var DNUP = forms.dlg_DiarioFacturacionGC.DesdeNup;
		var HNUP = forms.dlg_DiarioFacturacionGC.HastaNup;
		var ORD = forms.dlg_DiarioFacturacionGC.Orden;
		var DET = forms.dlg_DiarioFacturacionGC.Detalles;
		var SITU = forms.dlg_DiarioFacturacionGC.SituConta;
		var TBAI = forms.dlg_DiarioFacturacionGC.PendEnvioTBAI;
	
		//application.getWindow('Diario Facturacion').hide();
		//globals.GCenableBgElements();
		
		if(forms.dlg_DiarioFacturacionGC.PendCobro == 1) globals.btn_runJasperReportDiarioFacturacionPendCobro(DFECH,HFECH,DCLI,HCLI,DEJE,HEJE,DSER,HSER,DNUP,HNUP,ORD,DET,SITU)
		else globals.btn_runJasperReportDiarioFacturacion(DFECH,HFECH,DCLI,HCLI,DEJE,HEJE,DSER,HSER,DNUP,HNUP,ORD,DET,SITU)
		
		
		
		
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7DAA4232-0A40-4FB1-B840-83F8F6830C1C"}
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
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"55C73F5E-5C88-4434-85D1-7E311691755B"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Diario Facturacion').hide();
	globals.GCenableBgElements();
	return true
}
