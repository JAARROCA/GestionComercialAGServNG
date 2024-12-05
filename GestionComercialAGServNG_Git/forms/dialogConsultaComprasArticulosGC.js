/**
 * @properties={typeid:24,uuid:"3DE89D91-1403-4725-B3FD-856F91A306C0"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Compras Articulos').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"5477BE06-B96E-4D49-89E4-011FD55D251B"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		//application.getWindow('Consulta Ventas Articulos').hide();
		//globals.GCenableBgElements();
		var DART = forms.dlg_Consulta_ComprasArticulosGC.DesdeArticulo
		if(!DART) DART = '';
		var HART = forms.dlg_Consulta_ComprasArticulosGC.HastaArticulo
		if(HART == null || HART == '') HART = 'zzzzzzzzz'
		var DCLI = forms.dlg_Consulta_ComprasArticulosGC.DesdeProveedor
		if(!DCLI) DCLI = 1
		var HCLI = forms.dlg_Consulta_ComprasArticulosGC.HastaProveedor
		if(!HCLI) HCLI = 99999999
		var DFECH = utils.dateFormat(forms.dlg_Consulta_ComprasArticulosGC.DesdeFecha,'dd-MM-yyyy')
		if(!DFECH) DFECH = '01-01-1970'
		var HFECH = utils.dateFormat(forms.dlg_Consulta_ComprasArticulosGC.HastaFecha,'dd-MM-yyyy') 
		if(!HFECH) DFECH = '31-12-2999'
		
		
		
		
		globals.btn_runJasperReportConsultaComprasArticulo(DCLI,HCLI,DART,HART,DFECH,HFECH)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B63308A8-333D-4467-BCE1-547B13607CDC"}
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
 * @properties={typeid:24,uuid:"ED3E6AEC-64F3-4767-923E-220E57880E76"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
