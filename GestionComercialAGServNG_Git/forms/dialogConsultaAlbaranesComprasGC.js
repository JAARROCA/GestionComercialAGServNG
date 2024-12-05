/**
 * @properties={typeid:24,uuid:"2D0A0268-8900-460B-A25D-1F1EAA972B6E"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Albaranes Compras').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"3361239E-264B-4EA5-A7C8-68CF71046C4D"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		application.getWindow('Consulta Albaranes Compras').hide();
		globals.GCenableBgElements();
		var DFRA = forms.dlg_Consulta_AlbaranesComprasGC.DesdeAlbaran
		if(DFRA == null || DFRA == '') DFRA = '0'
		var HFRA = forms.dlg_Consulta_AlbaranesComprasGC.HastaAlbaran
		if(HFRA == null || HFRA == '') HFRA = 'ZZZZZZ'
		var DPRO = forms.dlg_Consulta_AlbaranesComprasGC.DesdeProveedor
		if(DPRO == null || DPRO == '') DPRO = 1
		var HPRO = forms.dlg_Consulta_AlbaranesComprasGC.HastaProveedor
		if(HPRO == null || HPRO == '') HPRO = 999999
		var DFECH = utils.dateFormat(forms.dlg_Consulta_AlbaranesComprasGC.DesdeFecha,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '') DFECH = '01-01-1970'
		var HFECH = utils.dateFormat(forms.dlg_Consulta_AlbaranesComprasGC.HastaFecha,'dd-MM-yyyy') + ' 23:59:59'
		if(HFECH == null || HFECH == '') HFECH = '31-12-2999'
		var	PEND = forms.dlg_Consulta_AlbaranesComprasGC.PendientesFacturar
		var	DET = forms.dlg_Consulta_AlbaranesComprasGC.Detallado
		
		
		
		
		
		globals.btn_runJasperReportConsultaAlbaranesCompras(DPRO,HPRO,DFRA,HFRA,DFECH,HFECH,PEND,DET)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DEF137E8-DFE0-4383-A5BB-40B999E6797A"}
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
 * @properties={typeid:24,uuid:"45B2A1CA-3095-448C-A337-7828B23817D0"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
