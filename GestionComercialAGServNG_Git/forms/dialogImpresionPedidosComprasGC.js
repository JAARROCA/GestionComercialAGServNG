/**
 *
 * @properties={typeid:24,uuid:"47EFDABB-C571-4960-B240-462A0517AF4B"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Impresion Pedidos Compras').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"C79FB236-69BE-4FDD-84AA-384398F61E48"}
 * @SuppressWarnings(wrongparameters)
 * 
 * @AllowToRunInFind
 */
function btn_ok()
{
	var desdenped = forms.dlg_ImpresionPedidosComprasGC.DesdePedido
	if(desdenped == null || desdenped == '') desdenped = 0
	var hastanped = forms.dlg_ImpresionPedidosComprasGC.HastaPedido
	if(hastanped == null || hastanped == '') hastanped = 999999
	var desdepro = forms.dlg_ImpresionPedidosComprasGC.DesdeProveedor
	if(desdepro == null || desdepro == '') desdepro = 0
	var hastapro = forms.dlg_ImpresionPedidosComprasGC.HastaProveedor
	if(hastapro == null || hastapro == '') hastapro = 999999
	globals.btn_runJasperReportPedidoCompra(desdenped,hastanped,desdepro,hastapro)
	
	//application.getWindow('Impresion Albaranes').hide();
	//globals.GCenableBgElements();	
	
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"22DAFBE4-CC8B-4417-A765-732DC0E91DC3"}
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
 * @properties={typeid:24,uuid:"2F40BBCC-4F6B-446E-A47D-4E37DC44D50C"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Impresion Pedidos Compras').hide();
	globals.GCenableBgElements();
	return true
}
