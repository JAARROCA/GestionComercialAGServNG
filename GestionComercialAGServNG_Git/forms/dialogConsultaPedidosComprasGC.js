/**
 * @properties={typeid:24,uuid:"AB23133B-10A8-47F9-AE34-65647C5FA48D"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Pedidos Compras').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"C1D03E99-A2E2-48C5-BA9A-E9F0DE841A43"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		application.getWindow('Consulta Pedidos Compras').hide();
		globals.GCenableBgElements();
		var DFRA = forms.dlg_Consulta_PedidosComprasGC.DesdePedido
		if(DFRA == null || DFRA == '') DFRA = 1
		var HFRA = forms.dlg_Consulta_PedidosComprasGC.HastaPedido
		if(HFRA == null || HFRA == '') HFRA = 999999
		var DPRO = forms.dlg_Consulta_PedidosComprasGC.DesdeProveedor
		if(DPRO == null || DPRO == '') DPRO = 1
		var HPRO = forms.dlg_Consulta_PedidosComprasGC.HastaProveedor
		if(HPRO == null || HPRO == '') HPRO = 999999
		var DFECH = utils.dateFormat(forms.dlg_Consulta_PedidosComprasGC.DesdeFecha,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '') DFECH = '01-01-1970'
		var HFECH = utils.dateFormat(forms.dlg_Consulta_PedidosComprasGC.HastaFecha,'dd-MM-yyyy') + ' 23:59:59'
		if(HFECH == null || HFECH == '') HFECH = '31-12-2999'
		var	PEND = forms.dlg_Consulta_PedidosComprasGC.PendientesFacturar
		var	DET = forms.dlg_Consulta_PedidosComprasGC.Detallado
		
		
		
		
		
		globals.btn_runJasperReportConsultaPedidosCompras(DPRO,HPRO,DFRA,HFRA,DFECH,HFECH,PEND,DET)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9115BF11-FE29-40C0-AE26-292D2D4E893F"}
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
 * @properties={typeid:24,uuid:"D22CCE85-2B64-42E3-AC5A-C83E05D2C826"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
