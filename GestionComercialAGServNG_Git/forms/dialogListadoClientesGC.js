/**
 *
 * @properties={typeid:24,uuid:"15C4AE19-43D9-4DD3-98BC-075BF5F53B75"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Listado Clientes').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"672A415A-4078-409F-855D-7C11A4471061"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	if(forms.dlg_ListadoClientesGC.DesdeCliente == null)
	{
		var dcli = 0
	}
	else
	{
		dcli = forms.dlg_ListadoClientesGC.DesdeCliente
	}
	
	if(forms.dlg_ListadoClientesGC.HastaCliente == null)
	{
		var hcli = 99999999
	}
	else
	{
		hcli = forms.dlg_ListadoClientesGC.HastaCliente
	}
	if(forms.dlg_ListadoClientesGC.DesdeDescCliente == null)
	{
		var ddcli = 'a'
	}
	else
	{
		ddcli = forms.dlg_ListadoClientesGC.DesdeDescCliente
	}
	
	if(forms.dlg_ListadoClientesGC.HastaDescCliente == null)
	{
		var hdcli = 'ZZZZZ'
	}
	else
	{
		hdcli = forms.dlg_ListadoClientesGC.HastaDescCliente + 'Z';
	}
	if(!forms.dlg_ListadoClientesGC.dprovincia)
	{
		var dprovin = 'a'
	}
	else
	{
		dprovin = forms.dlg_ListadoClientesGC.dprovincia
	}
	
	if(!forms.dlg_ListadoClientesGC.hprovincia)
	{
		var hprovin = 'ZZZZZ'
	}
	else
	{
		hprovin = forms.dlg_ListadoClientesGC.hprovincia + 'Z';
	}
	var orden = forms.dlg_ListadoClientesGC.Criterio;
	var tipo = forms.dlg_ListadoClientesGC.Tipo
	
	globals.btn_runJasperReportListadoClientes(dcli, hcli,ddcli,hdcli,orden,tipo,dprovin,hprovin)		
			
	
	
	//application.getWindow('Listado Clientes').hide();
	//globals.GCenableBgElements();	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"95D0567A-5A60-4E01-ADDD-77439C2A1628"}
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
 * @properties={typeid:24,uuid:"278332B0-FC79-4F20-B1EA-084262EF0B7F"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Listado Clientes').hide();
	globals.GCenableBgElements();
	return true
}
