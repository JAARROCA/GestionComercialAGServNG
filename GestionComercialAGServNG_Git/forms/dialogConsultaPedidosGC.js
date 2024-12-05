/**
 * @properties={typeid:24,uuid:"96131D18-BA79-4746-8679-A64933C7DB9F"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Pedidos').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"90A1E207-1353-411B-AB1C-D6EED14A190C"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		//application.getWindow('Consulta Pedidos').hide();
		//globals.GCenableBgElements();
		var DPRE = forms.dlg_Consulta_PedidosGC.DesdePresupuesto
		if(DPRE == null || DPRE == '') DPRE = 1
		var HPRE = forms.dlg_Consulta_PedidosGC.HastaPresupuesto
		if(HPRE == null || HPRE == '') HPRE = 999999
		var DCLI = forms.dlg_Consulta_PedidosGC.DesdeCliente
		if(DCLI == null || DCLI == '') DCLI = 1
		var HCLI = forms.dlg_Consulta_PedidosGC.HastaCliente
		if(HCLI == null || HCLI == '') HCLI = 999999
		var DREFCLI = forms.dlg_Consulta_PedidosGC.DesdeRefCliente
		if(DREFCLI == null || DREFCLI == '') DREFCLI = ''
		var HREFCLI = forms.dlg_Consulta_PedidosGC.HastaRefCliente
		if(HREFCLI == null || HREFCLI == '') HREFCLI = 'ZZZZZ'
		var DFECH = utils.dateFormat(forms.dlg_Consulta_PedidosGC.DesdeFecha,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '') DFECH = '01-01-1970'
		var HFECH = utils.dateFormat(forms.dlg_Consulta_PedidosGC.HastaFecha,'dd-MM-yyyy') + ' 23:59:59'
		if(DFECH == null || DFECH == '') DFECH = '31-12-2999'
		var	CRIT = forms.dlg_Consulta_PedidosGC.Criterios
		if(CRIT == 0) var Orden = 'cortraba.cod_cot'				
		else if(CRIT == 1) Orden = 'cortraba.nomcl_cot'	
		else if(CRIT == 2) Orden = 'cortraba.rcli_cot'			
		else if(CRIT == 3) Orden = 'cortraba.fecha_cot'			
		var	SITUPRE = forms.dlg_Consulta_PedidosGC.SituacionPresupuestos
		if(SITUPRE == 'T') var Situacion = " cortraba.situ_cot IS NULL OR cortraba.situ_cot = 'A' OR cortraba.situ_cot = 'N'  OR cortraba.situ_cot = 'F'"				
		else if(SITUPRE == null) Situacion = " cortraba.situ_cot IS NULL"	
		else if(SITUPRE == 'A') Situacion = " cortraba.situ_cot = 'A'"	
		else if(SITUPRE == 'N') Situacion = " cortraba.situ_cot = 'N'"			
		else if(SITUPRE == 'F') Situacion = " cortraba.situ_cot = 'F'"	
		
		
		
		
		globals.btn_runJasperReportConsultaPedidos(DCLI,HCLI,DPRE,HPRE,DFECH,HFECH,Situacion,DREFCLI,HREFCLI,Orden)
		application.updateUI();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"435FB336-086C-42B2-9384-0B75B3C1959F"}
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
 * @properties={typeid:24,uuid:"E3205A5A-7334-49CD-B3C9-29B7C57C6D32"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
