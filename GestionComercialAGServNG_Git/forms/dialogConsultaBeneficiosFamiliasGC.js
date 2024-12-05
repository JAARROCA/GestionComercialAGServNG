/**
 * @properties={typeid:24,uuid:"248DA5C2-7CCA-4436-9F6A-9E474266AEC7"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Beneficios Familias').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"4CC9E375-BC9D-4664-926D-699355EC945B"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		//application.getWindow('Consulta Ventas Articulos').hide();
		//globals.GCenableBgElements();
		var DART = forms.dlg_Consulta_BeneficiosFamiliasGC.DesdeArticulo
		if(!DART) DART = '';
		var HART = forms.dlg_Consulta_BeneficiosFamiliasGC.HastaArticulo
		if(!HART) HART = 'zzzzzzzz'
		var DCLI = forms.dlg_Consulta_BeneficiosFamiliasGC.DesdeCliente
		if(!DCLI) DCLI = 1
		var HCLI = forms.dlg_Consulta_BeneficiosFamiliasGC.HastaCliente
		if(!HCLI) HCLI = 99999999
		if(forms.dlg_Consulta_BeneficiosFamiliasGC.DesdeFecha) var DFECH = utils.dateFormat(forms.dlg_Consulta_BeneficiosFamiliasGC.DesdeFecha,'dd-MM-yyyy')
		if(!DFECH) DFECH = '01-01-1970'
		if(forms.dlg_Consulta_BeneficiosFamiliasGC.HastaFecha) var HFECH = utils.dateFormat(forms.dlg_Consulta_BeneficiosFamiliasGC.HastaFecha,'dd-MM-yyyy') 
		if(!HFECH) HFECH = '31-12-2999'
		var DFAM = forms.dlg_Consulta_BeneficiosFamiliasGC.DesdeFamilia
		if(!DFAM) DFAM = '';
		var HFAM = forms.dlg_Consulta_BeneficiosFamiliasGC.HastaFamilia
		if(!HFAM) HFAM = 'ZZZZZZZZ';
		
		
		globals.btn_runJasperReportConsultaBeneficiosFamilias(DCLI,HCLI,DART,HART,DFECH,HFECH,DFAM,HFAM)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B8356602-05D5-4B7C-9745-96FAE187048E"}
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
 * @properties={typeid:24,uuid:"F6C4B9AF-3D4B-4092-A079-002B040EF607"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
