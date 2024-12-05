/**
 * @properties={typeid:24,uuid:"1CA85FDA-5B14-4247-879B-FEBB7FC409DC"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Ventas Articulos').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"1F3CBC1E-B6D1-4ACB-8DA9-FE0595E92857"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		//application.getWindow('Consulta Ventas Articulos').hide();
		//globals.GCenableBgElements();
		var DART = forms.dlg_Consulta_VentasArticulosGC.DesdeArticulo
		if(!DART) DART = '';
		var HART = forms.dlg_Consulta_VentasArticulosGC.HastaArticulo
		if(HART == null || HART == '') HART = 'zzzzzzzzz'
		var DCLI = forms.dlg_Consulta_VentasArticulosGC.DesdeCliente
		if(!DCLI) DCLI = 1
		var HCLI = forms.dlg_Consulta_VentasArticulosGC.HastaCliente
		if(!HCLI) HCLI = 99999999
		var DFECH = utils.dateFormat(forms.dlg_Consulta_VentasArticulosGC.DesdeFecha,'dd-MM-yyyy')
		if(!DFECH) DFECH = '01-01-1970'
		var HFECH = utils.dateFormat(forms.dlg_Consulta_VentasArticulosGC.HastaFecha,'dd-MM-yyyy') 
		if(!HFECH) DFECH = '31-12-2999'
		
		
		
		
		globals.btn_runJasperReportConsultaVentasArticulo(DCLI,HCLI,DART,HART,DFECH,HFECH)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"06A19115-338B-4264-A7F2-D694914775A3"}
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
 * @properties={typeid:24,uuid:"E0AC1C2E-36AC-41D7-B140-F1A9566DFE6C"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
