/**
 * @properties={typeid:24,uuid:"CC56B295-F758-4449-A74F-C4FA945BC8D3"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Ventas Zonas').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"B4FDBE56-AD8B-45EA-9F89-D15072DE6DE7"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		//application.getWindow('Consulta Ventas Articulos').hide();
		//globals.GCenableBgElements();
		var DART = forms.dlg_Consulta_VentaZonasGC.DesdeProvincia
		if(!DART) DART = '';
		var HART = forms.dlg_Consulta_VentaZonasGC.HastaProvincia
		if(HART == null || HART == '') HART = 'zzzzzzzzz'
		var DCLI = forms.dlg_Consulta_VentaZonasGC.DesdeCliente
		if(!DCLI) DCLI = 0
		var HCLI = forms.dlg_Consulta_VentaZonasGC.HastaCliente
		if(!HCLI) HCLI = 99999999
		var DFECH = utils.dateFormat(forms.dlg_Consulta_VentaZonasGC.DesdeFecha,'dd-MM-yyyy')
		if(!DFECH) DFECH = '01-01-1970'
		var HFECH = utils.dateFormat(forms.dlg_Consulta_VentaZonasGC.HastaFecha,'dd-MM-yyyy') 
		if(!HFECH) DFECH = '31-12-2999'
		
		
		
		
		globals.btn_runJasperReportConsultaVentasZonas(DCLI,HCLI,DART,HART,DFECH,HFECH)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B7A9576B-9A66-407A-9A45-CBAEEEE4E98A"}
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
 * @properties={typeid:24,uuid:"886A8789-9471-4F79-B400-0DF631AF4D59"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
