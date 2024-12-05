/**
 * @properties={typeid:24,uuid:"06D83881-9A04-4E82-BC57-C5203F87FEF7"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	
	application.getWindow('Consulta Albaranes Pendientes Facturar').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"FB31B92A-3F89-417B-AC87-3D769F250DC0"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		
		//application.getWindow('Consulta Albaranes Pendientes Facturar').hide();
		//globals.GCenableBgElements();
		
		var DNUP = forms.dlg_Consulta_AlbaranesPendientesGC.DesdeAlbaran
		if(DNUP == null || DNUP == '') DNUP = 1
		var HNUP = forms.dlg_Consulta_AlbaranesPendientesGC.HastaAlbaran
		if(HNUP == null || HNUP == '') HNUP = 999999
		var DCLI = forms.dlg_Consulta_AlbaranesPendientesGC.DesdeCliente
		if(DCLI == null || DCLI == '') DCLI = 1
		var HCLI = forms.dlg_Consulta_AlbaranesPendientesGC.HastaCliente
		if(HCLI == null || HCLI == '') HCLI = 999999
		var DFECH = utils.dateFormat(forms.dlg_Consulta_AlbaranesPendientesGC.DesdeFecha,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '') DFECH = '01-01-1970'
		var HFECH = utils.dateFormat(forms.dlg_Consulta_AlbaranesPendientesGC.HastaFecha,'dd-MM-yyyy') + ' 23:59:59'
		if(DFECH == null || DFECH == '') DFECH = '31-12-2999'
		var	CRIT = forms.dlg_Consulta_AlbaranesPendientesGC.Criterios
		globals.btn_runJasperReportConsultaAlbaranesPendientesFacturar(DNUP,HNUP,DCLI,HCLI,DFECH,HFECH,CRIT)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A25BEF99-5E22-469C-95BF-801CE9C4EC4A"}
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
 * @properties={typeid:24,uuid:"BEE0408D-7C97-4ABA-A911-2E9EA3E38E68"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
