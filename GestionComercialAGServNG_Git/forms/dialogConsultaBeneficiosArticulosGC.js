/**
 * @properties={typeid:24,uuid:"C2FB3E09-F57C-495A-B700-F14470697507"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Beneficios Articulos').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"EE6CA1CF-6349-4A6F-9044-622BFEC6D1B0"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		//application.getWindow('Consulta Ventas Articulos').hide();
		//globals.GCenableBgElements();
		var DART = forms.dlg_Consulta_BeneficiosArticulosGC.DesdeArticulo
		if(!DART) DART = '';
		var HART = forms.dlg_Consulta_BeneficiosArticulosGC.HastaArticulo
		if(HART == null || HART == '') HART = 'zzzzzzzzz'
		var DCLI = forms.dlg_Consulta_BeneficiosArticulosGC.DesdeCliente
		if(!DCLI) DCLI = 1
		var HCLI = forms.dlg_Consulta_BeneficiosArticulosGC.HastaCliente
		if(!HCLI) HCLI = 99999999
		var DFECH = utils.dateFormat(forms.dlg_Consulta_BeneficiosArticulosGC.DesdeFecha,'dd-MM-yyyy')
		if(!DFECH) DFECH = '01-01-1970'
		var HFECH = utils.dateFormat(forms.dlg_Consulta_BeneficiosArticulosGC.HastaFecha,'dd-MM-yyyy') 
		if(!HFECH) DFECH = '31-12-2999'
		
		
		
		
		globals.btn_runJasperReportConsultaBeneficiosArticulo(DCLI,HCLI,DART,HART,DFECH,HFECH)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1CCE3481-F03A-4F6B-83C5-819557746825"}
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
 * @properties={typeid:24,uuid:"CEDE0CAC-0EEE-4357-ABAA-8A899427FD16"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
