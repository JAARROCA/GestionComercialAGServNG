/**
 * @properties={typeid:24,uuid:"9087693F-EC2C-4C32-9752-8DD099C9F56A"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	forms.dlg_ParametroAplicacionGC.ctabancaria = globals.GCParametrosCuentaBancaria
	forms.dlg_ParametroAplicacionGC.bic = globals.GCBIC
	forms.dlg_ParametroAplicacionGC.registro = globals.GCParametrosRegistro
	forms.dlg_ParametroAplicacionGC.tomo = globals.GCParametrosTomo
	forms.dlg_ParametroAplicacionGC.folio = globals.GCParametrosFolio
	forms.dlg_ParametroAplicacionGC.hojaregistral = globals.GCParametrosHoja
	forms.dlg_ParametroAplicacionGC.web_hacienda = globals.GCHaciendaWeb
	/*if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}*/
	application.getWindow('Datos del Registro Mercantil de la Sociedad').hide();
	globals.GCenableBgElements();
	forms.dlg_ParametroAplicacionGC.elements.btnModificar.enabled = false;
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"27B1BBC2-77A2-4B30-BDF9-316721110637"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"DE35156C-0242-465A-8B43-C42E0FDA36ED"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	/*if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits()
	}
	
	databaseManager.saveData();	
	*/
	forms.dlg_ParametroAplicacionGC.ctabancaria = forms.dlgDatosRegistroGC.ctabancaria
	forms.dlg_ParametroAplicacionGC.bic = forms.dlgDatosRegistroGC.bic
	forms.dlg_ParametroAplicacionGC.registro = forms.dlgDatosRegistroGC.registro
	forms.dlg_ParametroAplicacionGC.tomo = forms.dlgDatosRegistroGC.tomo
	forms.dlg_ParametroAplicacionGC.folio = forms.dlgDatosRegistroGC.folio
	forms.dlg_ParametroAplicacionGC.hojaregistral = forms.dlgDatosRegistroGC.hojaregistral
	forms.dlg_ParametroAplicacionGC.web_hacienda = forms.dlgDatosRegistroGC.web_hacienda
	application.getWindow('Datos del Registro Mercantil de la Sociedad').hide();
	globals.GCenableBgElements();	
	forms.dlg_ParametroAplicacionGC.elements.btnModificar.enabled = false;
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
*
 *
 * @properties={typeid:24,uuid:"9AB3E2A7-9905-45BD-9608-E824321FF05D"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		//if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Datos del Registro Mercantil de la Sociedad').hide();
	globals.GCenableBgElements();	
	forms.dlg_ParametroAplicacionGC.elements.btnModificar.enabled = false;
	return true
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"3938CF0B-C400-44E7-9268-3A6FF10ACB1D"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
