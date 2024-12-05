/**
 * @properties={typeid:24,uuid:"7BABC773-0EF0-4AD8-896D-87A6DA96A747"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Compras Familias').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"A59C6A45-9395-485C-A86D-2FC3D545808A"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		//application.getWindow('Consulta Ventas Articulos').hide();
		//globals.GCenableBgElements();
		var DART = forms.dlg_Consulta_ComprasFamiliasGC.DesdeArticulo
		if(!DART) DART = '';
		var HART = forms.dlg_Consulta_ComprasFamiliasGC.HastaArticulo
		if(!HART) HART = 'zzzzzzzz'
		var DCLI = forms.dlg_Consulta_ComprasFamiliasGC.DesdeProveedor
		if(!DCLI) DCLI = 1
		var HCLI = forms.dlg_Consulta_ComprasFamiliasGC.HastaProveedor
		if(!HCLI) HCLI = 99999999
		if(forms.dlg_Consulta_ComprasFamiliasGC.DesdeFecha) var DFECH = utils.dateFormat(forms.dlg_Consulta_ComprasFamiliasGC.DesdeFecha,'dd-MM-yyyy')
		if(!DFECH) DFECH = '01-01-1970'
		if(forms.dlg_Consulta_ComprasFamiliasGC.HastaFecha) var HFECH = utils.dateFormat(forms.dlg_Consulta_ComprasFamiliasGC.HastaFecha,'dd-MM-yyyy') 
		if(!HFECH) HFECH = '31-12-2999'
		var DFAM = forms.dlg_Consulta_ComprasFamiliasGC.DesdeFamilia
		if(!DFAM) DFAM = '';
		var HFAM = forms.dlg_Consulta_ComprasFamiliasGC.HastaFamilia
		if(!HFAM) HFAM = 'ZZZZZZZZ';
		
		
		globals.btn_runJasperReportConsultaComprasFamilias(DCLI,HCLI,DART,HART,DFECH,HFECH,DFAM,HFAM)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E140CDA4-2C46-4FBC-8DFA-8551557D7F1B"}
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
 * @properties={typeid:24,uuid:"370F1F4A-7BFC-4EC0-9D53-0B1F8E19C3F9"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
