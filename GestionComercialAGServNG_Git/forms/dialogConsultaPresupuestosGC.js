/**
 * @properties={typeid:24,uuid:"039539A3-E34C-4B50-A1F0-D776B3B791F9"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Presupuestos').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"98B57AC9-10B3-4B8C-8269-42059F3A64E1"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		//application.getWindow('Consulta Presupuestos').hide();
		//globals.GCenableBgElements();
		var DPRE = forms.dlg_Consulta_PresupuestosGC.DesdePresupuesto
		if(DPRE == null || DPRE == '') DPRE = 0
		var HPRE = forms.dlg_Consulta_PresupuestosGC.HastaPresupuesto
		if(HPRE == null || HPRE == '') HPRE = 999999999
		var DCLI = forms.dlg_Consulta_PresupuestosGC.DesdeCliente
		if(DCLI == null || DCLI == '') DCLI = 0
		var HCLI = forms.dlg_Consulta_PresupuestosGC.HastaCliente
		if(HCLI == null || HCLI == '') HCLI = 999999999
		var DREFCLI = forms.dlg_Consulta_PresupuestosGC.DesdeRefCliente
		if(DREFCLI == null || DREFCLI == '') DREFCLI = ''
		var HREFCLI = forms.dlg_Consulta_PresupuestosGC.HastaRefCliente
		if(HREFCLI == null || HREFCLI == '') HREFCLI = 'ZZZZZ'
		var DFECH = utils.dateFormat(forms.dlg_Consulta_PresupuestosGC.DesdeFecha,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '') DFECH = '01-01-1970'
		var HFECH = utils.dateFormat(forms.dlg_Consulta_PresupuestosGC.HastaFecha,'dd-MM-yyyy') + ' 23:59:59'
		if(DFECH == null || DFECH == '') DFECH = '31-12-2999'
		var	CRIT = forms.dlg_Consulta_PresupuestosGC.Criterios
		if(CRIT == 0) var Orden = 'cofertas.cod_cof'				
		else if(CRIT == 1) Orden = 'cofertas.nomcl_cof'	
		else if(CRIT == 2) Orden = 'cofertas.rcli_cof'			
		else if(CRIT == 3) Orden = 'cofertas.fecha_cof'			
		var	SITUPRE = forms.dlg_Consulta_PresupuestosGC.SituacionPresupuestos
		if(SITUPRE == 'T') var Situacion = " cofertas.situ_cof IS NULL OR cofertas.situ_cof = 'A' OR cofertas.situ_cof = 'N'  OR cofertas.situ_cof = 'F'"				
		else if(SITUPRE == null) Situacion = " cofertas.situ_cof IS NULL"	
		else if(SITUPRE == 'A') Situacion = " cofertas.situ_cof = 'A'"	
		else if(SITUPRE == 'N') Situacion = " cofertas.situ_cof = 'N'"			
		else if(SITUPRE == 'F') Situacion = " cofertas.situ_cot = 'F'"			
		
		
		
		
		globals.btn_runJasperReportConsultaPresupuestos(DCLI,HCLI,DPRE,HPRE,DFECH,HFECH,Situacion,DREFCLI,HREFCLI,Orden)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6ADE7217-8886-4039-8A7C-C80FA8E6E6F7"}
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
 * @properties={typeid:24,uuid:"04571F0E-CDF0-4E05-AC31-BA9A3D1BE718"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
