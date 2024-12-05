/**
 * @properties={typeid:24,uuid:"8F05FC24-970C-40FE-B8C4-D0513DE90DA3"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Compras Proveedores').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"5C46E457-BEBF-4860-B995-8C0AB54DB9CA"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		//application.getWindow('Consulta Ventas Articulos').hide();
		//globals.GCenableBgElements();
		var DART = forms.dlg_Consulta_ComprasProveedoresGC.DesdeArticulo
		if(!DART) DART = '';
		var HART = forms.dlg_Consulta_ComprasProveedoresGC.HastaArticulo
		if(HART == null || HART == '') HART = 'zzzzzzzzz'
		var DCLI = forms.dlg_Consulta_ComprasProveedoresGC.DesdeProveedor
		if(!DCLI) DCLI = 1
		var HCLI = forms.dlg_Consulta_ComprasProveedoresGC.HastaProveedor
		if(!HCLI) HCLI = 99999999
		var DFECH = utils.dateFormat(forms.dlg_Consulta_ComprasProveedoresGC.DesdeFecha,'dd-MM-yyyy')
		if(!DFECH) DFECH = '01-01-1970'
		var HFECH = utils.dateFormat(forms.dlg_Consulta_ComprasProveedoresGC.HastaFecha,'dd-MM-yyyy') 
		if(!HFECH) DFECH = '31-12-2999'
		
		
		
		
		globals.btn_runJasperReportConsultaComprasProveedores(DCLI,HCLI,DART,HART,DFECH,HFECH)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"91FAD6D2-C0F3-46B9-8F6C-E9ED885CA684"}
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
 * @properties={typeid:24,uuid:"EDCB09A7-B302-41A6-B222-2851E306DD9C"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
