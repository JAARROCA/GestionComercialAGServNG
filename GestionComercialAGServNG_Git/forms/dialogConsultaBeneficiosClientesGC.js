/**
 * @properties={typeid:24,uuid:"5C5EE38E-4901-42E5-AF64-330F8A286140"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Beneficios Clientes').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"780D9101-59E1-4FF3-85FB-C05EC6A29416"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		//application.getWindow('Consulta Ventas Articulos').hide();
		//globals.GCenableBgElements();
		var DART = forms.dlg_Consulta_BeneficiosClientesGC.DesdeArticulo
		if(!DART) DART = '';
		var HART = forms.dlg_Consulta_BeneficiosClientesGC.HastaArticulo
		if(!HART) HART = 'zzzzzzzz'
		var DCLI = forms.dlg_Consulta_BeneficiosClientesGC.DesdeCliente
		if(!DCLI) DCLI = 1
		var HCLI = forms.dlg_Consulta_BeneficiosClientesGC.HastaCliente
		if(!HCLI) HCLI = 99999999
		if(forms.dlg_Consulta_BeneficiosClientesGC.DesdeFecha) var DFECH = utils.dateFormat(forms.dlg_Consulta_BeneficiosClientesGC.DesdeFecha,'dd-MM-yyyy')
		if(!DFECH) DFECH = '01-01-1970'
		if(forms.dlg_Consulta_BeneficiosClientesGC.HastaFecha) var HFECH = utils.dateFormat(forms.dlg_Consulta_BeneficiosClientesGC.HastaFecha,'dd-MM-yyyy') 
		if(!HFECH) HFECH = '31-12-2999'
		
		
		
		
		globals.btn_runJasperReportConsultaBeneficiosClientes(DCLI,HCLI,DART,HART,DFECH,HFECH)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F169B8DD-6642-4411-978F-F06CD29ABF0F"}
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
 * @properties={typeid:24,uuid:"EE25C38C-B689-44C3-A533-239665AD96C5"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
