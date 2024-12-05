/**
 *
 * @properties={typeid:24,uuid:"CC20A357-BC64-4B50-BC50-31386F0D3191"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Impresion Albaranes').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"11FD96F8-80A5-4A32-96CA-0055D35AF14E"}
 * @SuppressWarnings(wrongparameters)
 * 
 * @AllowToRunInFind
 */
function btn_ok()
{
	var desdealb = forms.dlg_ImpresionAlbaranesGC.DesdeAlbaran
	if(desdealb == null || desdealb == '') desdealb = 1
	var hastaalb = forms.dlg_ImpresionAlbaranesGC.HastaAlbaran
	if(hastaalb == null || hastaalb == '') hastaalb = 999999
	var desdecli = forms.dlg_ImpresionAlbaranesGC.DesdeCliente
	if(desdecli == null || desdecli == '') desdecli = 1
	var hastacli = forms.dlg_ImpresionAlbaranesGC.HastaCliente
	if(hastacli == null || hastacli == '') hastacli = 999999
	var sinvalorar = forms.dlg_ImpresionAlbaranesGC.sinvalorar
	globals.btn_runJasperReportAlbaranVentas(desdealb,hastaalb,desdecli,hastacli,sinvalorar)
	
	//application.getWindow('Impresion Albaranes').hide();
	//globals.GCenableBgElements();	
	
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C4193639-6D0D-4C09-A5F9-BA8ACE3081E0"}
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
 * @properties={typeid:24,uuid:"4A2AB339-128B-4D57-8570-5024AFA05964"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Impresion Albaranes').hide();
	globals.GCenableBgElements();
	return true
}
