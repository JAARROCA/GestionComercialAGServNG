/**
 *
 * @properties={typeid:24,uuid:"9414139C-1D9B-46D4-8814-8F6C07F65ED8"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Listado Agentes').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"94AB59A4-D72B-4411-8732-F84CAB6FE3BE"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	if(!forms.dlg_ListadoAgentesGC.DesdeAgente)
	{
		var dcli = ''
	}
	else
	{
		dcli = forms.dlg_ListadoAgentesGC.DesdeAgente
	}
	
	if(forms.dlg_ListadoClientesGC.HastaCliente == null)
	{
		var hcli = 'ZZZZZZ'
	}
	else
	{
		hcli = forms.dlg_ListadoAgentesGC.HastaAgente
	}
	if(!forms.dlg_ListadoAgentesGC.DesdeDescAgente)
	{
		var ddcli = 'a'
	}
	else
	{
		ddcli = forms.dlg_ListadoAgentesGC.DesdeDescAgente
	}
	
	if(!forms.dlg_ListadoAgentesGC.HastaDescAgente)
	{
		var hdcli = 'ZZZZZ'
	}
	else
	{
		hdcli = forms.dlg_ListadoAgentesGC.HastaDescAgente + 'Z';
	}
	var orden = forms.dlg_ListadoAgentesGC.Criterio;
	var tipo = forms.dlg_ListadoAgentesGC.Tipo
	
	globals.btn_runJasperReportListadoComisionistas(dcli, hcli,ddcli,hdcli,orden,tipo)		
			
	
	
	//application.getWindow('Listado Clientes').hide();
	//globals.GCenableBgElements();	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"4C53392A-5466-48A4-BE8D-33038C046957"}
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
 * @properties={typeid:24,uuid:"3C45738A-C25F-47F5-BE03-99C7682FF223"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Listado Agentes').hide();
	globals.GCenableBgElements();
	return true
}
