/**
 * @properties={typeid:24,uuid:"74B4C9AC-EF0D-40D7-9A22-F21FAF8BA303"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Facturas Compras').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"D33410A2-99FB-4315-8DDC-F773A1369F90"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		var DFRA = forms.dlg_Consulta_FacturasComprasGC.DesdeFactura
		if(DFRA == null || DFRA == '') DFRA = '0'
		var HFRA = forms.dlg_Consulta_FacturasComprasGC.HastaFactura
		if(HFRA == null || HFRA == '') HFRA = 'ZZZZZZ'
		var DPRO = forms.dlg_Consulta_FacturasComprasGC.DesdeProveedor
		if(DPRO == null || DPRO == '') DPRO = 1
		var HPRO = forms.dlg_Consulta_FacturasComprasGC.HastaProveedor
		if(HPRO == null || HPRO == '') HPRO = 999999
		var DFECH = utils.dateFormat(forms.dlg_Consulta_FacturasComprasGC.DesdeFecha,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '') DFECH = '01-01-1970'
		var HFECH = utils.dateFormat(forms.dlg_Consulta_FacturasComprasGC.HastaFecha,'dd-MM-yyyy') + ' 23:59:59'
		if(HFECH == null || HFECH == '') HFECH = '31-12-2999'
		var	PEND = forms.dlg_Consulta_FacturasComprasGC.PendientesConta
		var	DET = forms.dlg_Consulta_FacturasComprasGC.Detallado
		
		
		
		
		
		globals.btn_runJasperReportConsultaFacturasCompras(DPRO,HPRO,DFRA,HFRA,DFECH,HFECH,PEND,DET)
	
		//application.getWindow('Consulta Facturas Compras').hide();
		//globals.GCenableBgElements();
		
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F030D72A-6995-48EA-8ED6-341C3CB73143"}
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
 * @properties={typeid:24,uuid:"26D09B9A-7B21-416E-9A37-4CDF4DDEE720"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}
