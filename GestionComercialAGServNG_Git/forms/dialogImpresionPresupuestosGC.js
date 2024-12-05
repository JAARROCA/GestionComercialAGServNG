/**
 *
 * @properties={typeid:24,uuid:"CCE4294E-9791-456B-963D-7660039D052B"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Impresion Presupuestos').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"33A05799-F631-49D8-87C6-D47822AB70AE"}
 * @SuppressWarnings(wrongparameters)
 * 
 * @AllowToRunInFind
 */
function btn_ok()
{
	var desdepresup = forms.dlg_ImpresionPresupuestosGC.DesdePresupuesto
	if(desdepresup == null || desdepresup == '') desdepresup = 1
	var hastapresup = forms.dlg_ImpresionPresupuestosGC.HastaPresupuesto
	if(hastapresup == null || hastapresup == '') hastapresup = 99999999
	var desdecli = forms.dlg_ImpresionPresupuestosGC.DesdeCliente
	if(desdecli == null || desdecli == '') desdecli = 1
	var hastacli = forms.dlg_ImpresionPresupuestosGC.HastaCliente
	if(hastacli == null || hastacli == '') hastacli = 9999999999
	globals.btn_runJasperReportPresupuestoVentas(desdepresup,hastapresup,desdecli,hastacli)
	
	//application.getWindow('Impresion Albaranes').hide();
	//globals.GCenableBgElements();	
	
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"CC8085E0-EDD7-4872-8DF3-7D680E3916B1"}
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
 * @properties={typeid:24,uuid:"65752ADB-D95F-45BB-8A5A-F8A8FCB1F9FA"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Impresion Presupuestos').hide();
	globals.GCenableBgElements();
	return true
}
