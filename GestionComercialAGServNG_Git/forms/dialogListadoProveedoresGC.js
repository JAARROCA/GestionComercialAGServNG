/**
 *
 * @properties={typeid:24,uuid:"E1C5A1BA-CD77-4D22-87B3-FC57963A88F1"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Listado Proveedores').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"258BA2F0-741B-4B4D-8D80-062418A8343A"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	if(forms.dlg_ListadoProveedoresGC.DesdeProveedor == null)
	{
		var dprov = 0
	}
	else
	{
		dprov = forms.dlg_ListadoProveedoresGC.DesdeProveedor
	}
	
	if(forms.dlg_ListadoProveedoresGC.HastaProveedor == null)
	{
		var hprov = 99999999
	}
	else
	{
		hprov = forms.dlg_ListadoProveedoresGC.HastaProveedor
	}
	if(forms.dlg_ListadoProveedoresGC.DesdeDescProveedor == null)
	{
		var ddprov = 'a'
	}
	else
	{
		ddprov = forms.dlg_ListadoProveedoresGC.DesdeDescProveedor
	}
	
	if(forms.dlg_ListadoProveedoresGC.HastaDescProveedor == null)
	{
		var hdprov = 'ZZZZZ'
	}
	else
	{
		hdprov = forms.dlg_ListadoProveedoresGC.HastaDescProveedor + 'Z';
	}
	if(!forms.dlg_ListadoProveedoresGC.dprovincia)
	{
		var dprovin = 'a'
	}
	else
	{
		dprovin = forms.dlg_ListadoProveedoresGC.dprovincia
	}
	
	if(!forms.dlg_ListadoProveedoresGC.hprovincia)
	{
		var hprovin = 'ZZZZZ'
	}
	else
	{
		hprovin = forms.dlg_ListadoProveedoresGC.hprovincia + 'Z';
	}
	var orden = forms.dlg_ListadoProveedoresGC.Criterio;
	var tipo = forms.dlg_ListadoProveedoresGC.Tipo
	
	globals.btn_runJasperReportListadoProveedores(dprov, hprov,ddprov,hdprov,orden,tipo,dprovin,hprovin)		
			
	
	
	//application.getWindow('Listado Proveedores').hide();
	//globals.GCenableBgElements();	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"905F0926-9DF2-4319-AD77-4FEE2F6D4A7F"}
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
 * @properties={typeid:24,uuid:"B1E9D2E0-4BD0-42EA-81D3-B910180CAE61"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Listado Proveedores').hide();
	globals.GCenableBgElements();
	return true
}
