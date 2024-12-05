/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"97C4478E-511F-4CFC-96F5-3C1BEA61EA22"}
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
 *
*
 *
 * @properties={typeid:24,uuid:"58AAF873-78B8-40CF-A388-41AAB6ADE5E7"}
 */
function onHide(event) {
	if(globals.GCFormulario == 'dlg_UsuariosGC')
	{
		forms.dlg_UsuariosGC.firmaemail = forms.dlgFirmaEmailGC.firmaemail;
	}
	else if(globals.GCFormulario == 'dlg_EditarPerfilUsuarioGC')
	{
		forms.dlg_EditarPerfilUsuarioGC.firmaemail = forms.dlgFirmaEmailGC.firmaemail;
	}
	application.getWindow('Firma Email').hide();
	globals.GCenableBgElements();	
	return true
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"BB70B395-8605-437A-9AA0-CC72E4C41045"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
