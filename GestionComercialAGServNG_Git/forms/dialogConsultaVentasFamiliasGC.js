/**
 * @properties={typeid:24,uuid:"50A65A43-2DA4-474B-AE38-88BDBF587F0D"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Ventas Familias').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"E833A7C7-19F4-4DDC-A642-1E1F512ED6F4"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		//application.getWindow('Consulta Ventas Articulos').hide();
		//globals.GCenableBgElements();
		var DART = forms.dlg_Consulta_VentasFamiliasGC.DesdeArticulo
		if(!DART) DART = '';
		var HART = forms.dlg_Consulta_VentasFamiliasGC.HastaArticulo
		if(!HART) HART = 'zzzzzzzz'
		var DCLI = forms.dlg_Consulta_VentasFamiliasGC.DesdeCliente
		if(!DCLI) DCLI = 1
		var HCLI = forms.dlg_Consulta_VentasFamiliasGC.HastaCliente
		if(!HCLI) HCLI = 99999999
		if(forms.dlg_Consulta_VentasFamiliasGC.DesdeFecha) var DFECH = utils.dateFormat(forms.dlg_Consulta_VentasFamiliasGC.DesdeFecha,'dd-MM-yyyy')
		if(!DFECH) DFECH = '01-01-1970'
		if(forms.dlg_Consulta_VentasFamiliasGC.HastaFecha) var HFECH = utils.dateFormat(forms.dlg_Consulta_VentasFamiliasGC.HastaFecha,'dd-MM-yyyy') 
		if(!HFECH) HFECH = '31-12-2999'
		var DFAM = forms.dlg_Consulta_VentasFamiliasGC.DesdeFamilia
		if(!DFAM) DFAM = '';
		var HFAM = forms.dlg_Consulta_VentasFamiliasGC.HastaFamilia
		if(!HFAM) HFAM = 'ZZZZZZZZ';
		
		
		globals.btn_runJasperReportConsultaVentasFamilias(DCLI,HCLI,DART,HART,DFECH,HFECH,DFAM,HFAM)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"05476218-3686-48B4-B003-E61B0E7CD414"}
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
 * @properties={typeid:24,uuid:"56979DEF-94C9-4DAB-A1AE-F20F166729B8"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
