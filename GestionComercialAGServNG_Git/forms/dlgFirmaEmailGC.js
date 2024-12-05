/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FAB471EC-83CD-482B-951F-2B326C1F23C7"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	elements.firmaemail.requestFocus();
}

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"E008EE7D-CB96-43CF-9532-29D4F7CBAA65"}
 * @SuppressWarnings(deprecated)
 */
function onShow() {
	//var frm = currentcontroller.getName()
	//if(frm == 'dialog_FirmaEmailGC') 
	if(globals.GCFormulario == 'dlg_UsuariosGC')
	{
		controller.setSelectedIndex(forms.dlg_UsuariosGC.controller.getSelectedIndex())
	}
	else if(globals.GCFormulario == 'dlg_EditarPerfilUsuarioGC')
	{
		controller.setSelectedIndex(forms.dlg_EditarPerfilUsuarioGC.controller.getSelectedIndex())
	}
	
	elements.firmaemail.requestFocus()
}
