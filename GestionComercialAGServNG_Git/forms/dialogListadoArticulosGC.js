/**
 *
 * @properties={typeid:24,uuid:"9045265B-9DD2-4F42-8246-9C47294ACD7F"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Listado Articulos').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"492FBC6D-D627-420C-9FD3-D811BCEFF362"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	if(forms.dlg_ListadoArticulosGC.DesdeArticulo == null)
	{
		var dart = ''
	}
	else
	{
		dart = forms.dlg_ListadoArticulosGC.DesdeArticulo
	}
	
	if(forms.dlg_ListadoArticulosGC.HastaArticulo == null)
	{
		var hart = 'ZZZZZZ'
	}
	else
	{
		hart = forms.dlg_ListadoArticulosGC.HastaArticulo + 'Z';
	}
	if(forms.dlg_ListadoArticulosGC.DesdeDescArticulo == null)
	{
		var ddart = 'a'
	}
	else
	{
		ddart = forms.dlg_ListadoArticulosGC.DesdeDescArticulo
	}
	
	if(forms.dlg_ListadoArticulosGC.HastaDescArticulo == null)
	{
		var hdart = 'ZZZZZ'
	}
	else
	{
		hdart = forms.dlg_ListadoArticulosGC.HastaDescArticulo+'Z'
	}
	var orden = forms.dlg_ListadoArticulosGC.Criterio;
	var foto = forms.dlg_ListadoArticulosGC.foto;
	
	globals.btn_runJasperReportListadoArticulos(dart, hart,ddart,hdart,orden,foto)		
			
	
	
	//application.getWindow('Listado Articulos').hide();
	//globals.GCenableBgElements();	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"ED760493-C997-4894-9787-A8430D6FA8C2"}
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
 * @properties={typeid:24,uuid:"E030F10A-99EA-4E04-827D-B2BE930C0121"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Listado Articulos').hide();
	globals.GCenableBgElements();
	return true
}
