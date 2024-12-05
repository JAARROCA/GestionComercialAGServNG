/**
 * @properties={typeid:24,uuid:"5BFA303E-4CEB-4BB8-9E47-F33B2BC16B2F"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Ventas Clientes').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"6C259811-93BB-41B5-8C06-730F1819481E"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		//application.getWindow('Consulta Ventas Articulos').hide();
		//globals.GCenableBgElements();
		var DART = forms.dlg_Consulta_VentasClientesGC.DesdeArticulo
		if(!DART) DART = '';
		var HART = forms.dlg_Consulta_VentasClientesGC.HastaArticulo
		if(!HART) HART = 'zzzzzzzz'
		var DCLI = forms.dlg_Consulta_VentasClientesGC.DesdeCliente
		if(!DCLI) DCLI = 1
		var HCLI = forms.dlg_Consulta_VentasClientesGC.HastaCliente
		if(!HCLI) HCLI = 99999999
		if(forms.dlg_Consulta_VentasClientesGC.DesdeFecha) var DFECH = utils.dateFormat(forms.dlg_Consulta_VentasClientesGC.DesdeFecha,'dd-MM-yyyy')
		if(!DFECH) DFECH = '01-01-1970'
		if(forms.dlg_Consulta_VentasClientesGC.HastaFecha) var HFECH = utils.dateFormat(forms.dlg_Consulta_VentasClientesGC.HastaFecha,'dd-MM-yyyy') 
		if(!HFECH) HFECH = '31-12-2999'
		
				
		globals.btn_runJasperReportConsultaVentasClientes(DCLI,HCLI,DART,HART,DFECH,HFECH)
		
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EF1BBF7D-7BC3-4560-AFB4-4681526F48E5"}
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
 * @properties={typeid:24,uuid:"60B7A1AE-CC42-4D12-AF0C-C6AAAFABE9DE"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
