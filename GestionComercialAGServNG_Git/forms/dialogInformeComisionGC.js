/**
 *
 * @properties={typeid:24,uuid:"5E850352-E622-48FF-A7D1-D4912409ED17"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Informe Comision').hide();
	globals.GCenableBgElements();
	
}

/**
 *
 * @properties={typeid:24,uuid:"B9327979-31EF-4A4C-95D4-2EB554DBB077"}
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
		var DFECH = forms.dlg_InformeComisionGC.DesdeFecha
		var HFECH = forms.dlg_InformeComisionGC.HastaFecha
		var DCLI = forms.dlg_InformeComisionGC.DesdeAgente
		var HCLI = forms.dlg_InformeComisionGC.HastaAgente
		var DET = forms.dlg_InformeComisionGC.Detalles
		
		//application.getWindow('Informe Comision').hide();
		//globals.GCenableBgElements();
		
		globals.btn_runJasperReportInformeComision(DFECH,HFECH,DCLI,HCLI,DET)
		
		
		
		
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"41DC9A94-A809-4FAA-A6A6-8E1CEEBC6367"}
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
 * @properties={typeid:24,uuid:"4AD5F23A-E496-4603-A052-02F5EFC06C78"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Informe Comision').hide();
	globals.GCenableBgElements();
	return true
}
