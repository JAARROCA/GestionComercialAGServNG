/**
 * @properties={typeid:24,uuid:"DC513C7C-662D-438F-B8C1-1A03B505C27B"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Editar Datos OSATU').hide();
	globals.GCenableBgElements();
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.xmltbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.anulatbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.modificartbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_borrardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_importardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.codcrc = null;
	forms.dlg_ImpresionFacturasTBAIGC.crcurl = null;
	if(globals.GCNombreUsuario == 'JAVI' || globals.GCNombreUsuario == 'ADMINISTRADOR')
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = true;
		if(gcparametrosaplicacion_to_parametrosaplicacion.osatu) forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = true;
		else forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false;
	}
	else
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = false
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"631F012F-49FC-4142-A054-637DC9CA634A"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.xmltbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.anulatbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.modificartbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_borrardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_importardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.codcrc = null;
	forms.dlg_ImpresionFacturasTBAIGC.crcurl = null;
	if(globals.GCNombreUsuario == 'JAVI' || globals.GCNombreUsuario == 'ADMINISTRADOR')
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = true
		if(gcparametrosaplicacion_to_parametrosaplicacion.osatu) forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = true
		else forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
	else
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = false
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
}

/**
 * @properties={typeid:24,uuid:"C5F634DE-4AD0-4BAF-BD49-11540BB12D13"}
 * @SuppressWarnings(deprecated)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits()
	}
	
	databaseManager.saveData();	
	
	
	application.getWindow('Editar Datos OSATU').hide();
	globals.GCenableBgElements();	
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.xmltbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.anulatbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.modificartbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_borrardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_importardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.codcrc = null;
	forms.dlg_ImpresionFacturasTBAIGC.crcurl = null;
	if(globals.GCNombreUsuario == 'JAVI' || globals.GCNombreUsuario == 'ADMINISTRADOR')
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = true
		if(gcparametrosaplicacion_to_parametrosaplicacion.osatu) forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = true
		else forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
	else
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = false
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
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
 * @properties={typeid:24,uuid:"CBA690E2-EF0B-4ADD-A406-6EA8762175AE"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Editar Datos OSATU').hide();
	globals.GCenableBgElements();	
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.xmltbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.anulatbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.modificartbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_borrardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_importardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.codcrc = null;
	forms.dlg_ImpresionFacturasTBAIGC.crcurl = null;
	if(globals.GCNombreUsuario == 'JAVI' || globals.GCNombreUsuario == 'ADMINISTRADOR')
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = true
		if(gcparametrosaplicacion_to_parametrosaplicacion.osatu) forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = true
		else forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
	else
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = false
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
	return true
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"57C96049-998D-4047-8360-9B8A47CD7205"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
