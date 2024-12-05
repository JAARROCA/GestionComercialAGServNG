/**
 *
 * @properties={typeid:24,uuid:"5AD078D1-AF1A-422E-BDAB-37F4CE4FB9E7"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Impresion Notas').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"BA000480-024C-4E0F-AAEF-397FBA23CE4D"}
 * @SuppressWarnings(wrongparameters)
 * 
 * @AllowToRunInFind
 */
function btn_ok()
{
	var desdeeje = forms.dlg_ImpresionNotasGC.DesdeEje
	if(desdeeje == null || desdeeje == '') desdeeje = 0
	var desdenup = forms.dlg_ImpresionNotasGC.DesdeNup
	if(desdenup == null || desdenup == '') desdenup = 0
	var hastaeje = forms.dlg_ImpresionNotasGC.HastaEje
	if(hastaeje == null || hastaeje == '') hastaeje = 9999
	var hastanup = forms.dlg_ImpresionNotasGC.HastaNup
	if(hastanup == null || hastanup == '') hastanup = 999999
	var desdecli = forms.dlg_ImpresionNotasGC.DesdeCliente
	if(desdecli == null || desdecli == '') desdecli = 1
	var hastacli = forms.dlg_ImpresionNotasGC.HastaCliente
	if(hastacli == null || hastacli == '') hastacli = 999999
	globals.btn_runJasperReportNotaVentas(desdeeje,desdenup,hastaeje,hastanup,desdecli,hastacli)
	
	//application.getWindow('Impresion Albaranes').hide();
	//globals.GCenableBgElements();	
	
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"9D56CF5A-DD83-4F26-A30D-945E72AC483B"}
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
 * @properties={typeid:24,uuid:"8DF1355A-8CE5-48F0-B5B6-0F10689025CB"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Impresion Notas').hide();
	globals.GCenableBgElements();
	return true
}
