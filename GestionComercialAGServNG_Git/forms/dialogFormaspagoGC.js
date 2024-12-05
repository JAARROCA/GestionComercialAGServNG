/**
 *
 * @properties={typeid:24,uuid:"F36005E2-EAD5-4C8C-87D7-AEC5FFB83BEB"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing();
		}
	}
	forms.dlg_FormaspagoGC.elements.codig_fp.bgcolor = '#f0f0f0';
	globals.GCClave = null
	application.getWindow('FormasPago').hide();
	globals.GCenableBgElements();
	
	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 * @properties={typeid:24,uuid:"7767A1D7-26DF-48D6-BE88-4103CAF6ABBB"}
 */
function onShow() {
	// TODO Auto-generated method stub
	
	
	globals.GCdialog_buttonPressed = null;
}

/**
 *
 * @properties={typeid:24,uuid:"93BDC843-A983-471F-B126-C654419D9D62"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	//Encriptar
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits();
	}
	
	databaseManager.saveData();
	
	forms.dlg_FormaspagoGC.elements.codig_fp.editable = false
	forms.dlg_FormaspagoGC.elements.codig_fp.bgcolor = '#f0f0f0';
	//application.getWindow('DialogTiposPescados').hide();
	//globals.GCenableBgElements();
		
		
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D6C33CB8-A138-4E93-9E11-CA265EEF8E4A"}
 */
function btn_Anterior(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	forms.dlg_FormaspagoGC.controller.setSelectedIndex(forms.dlg_FormaspagoGC.controller.getSelectedIndex() - 1)
	forms.dlg_FormaspagoGC.elements.codig_fp.editable = false
	forms.dlg_FormaspagoGC.elements.codig_fp.bgcolor = '#f0f0f0';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"36F6FCF7-BEA8-4AF3-B12A-178E11BDF412"}
 */
function btn_Siguiente(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	forms.dlg_FormaspagoGC.controller.setSelectedIndex(forms.dlg_FormaspagoGC.controller.getSelectedIndex() + 1)
	forms.dlg_FormaspagoGC.elements.codig_fp.editable = false
	forms.dlg_FormaspagoGC.elements.codig_fp.bgcolor = '#f0f0f0';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"DB76CD9B-F82E-4A86-8C59-D6C80E6759E0"}
 */
function btn_Nuevo(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	if(!globals.GCisEditing()) globals.GCstartEditing()	
	forms.dlg_FormaspagoGC.foundset.newRecord(true)
	forms.dlg_FormaspagoGC.elements.codig_fp.editable = true
	forms.dlg_FormaspagoGC.elements.codig_fp.bgcolor = '#ffffff'
	forms.dlg_FormaspagoGC.elements.codig_fp.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"C8BC7BE6-C8A3-4EFF-8C49-EB5AD2E06203"}
 */
function btn_Borrar(event) {
	// TODO Auto-generated method stub
	var msg =  '¿Estás seguro de querer borrarlo?'
	var frm = currentcontroller.getName()
	var methd = 'forms.' + frm + '.sub_doDelete()'

	//clear out global - so we don't accidentally delete something
	globals.core_dlg_buttonPressed = null
	//show the tabpanel "dialog"
	globals.GCshowWarningDialog(msg, methd, 'Cancel', 'Borrar', null, null);
}

/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"E131A094-3B50-4090-89DA-313548785F47"}
 */
function sub_doDelete()
{
	//see what button text was pressed and then delete if necessary
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'FP' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = forms.dlg_FormaspagoGC.codig_fp;
		record.fecha = new Date();
		record.datomodif = forms.dlg_FormaspagoGC.denom_fp;
		record.anterior = 'BORRADO DE LA BD';
		record.despues = 'BORRADO DE LA BD';
		record.usuario = globals.GClogin_usuario
		
		databaseManager.saveData(record)
		
		record = forms.dlg_FormaspagoGC.foundset.getSelectedRecord()		
		forms.dlg_FormaspagoGC.foundset.deleteRecord(record)

		//clear out global - so we don't accidentally delete something
		globals.core_dlg_buttonPressed = null
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2B073C18-96D1-41F7-B12E-0F14A261BFD3"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCClave = null
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E150723A-5704-4218-A8EB-7207FC4DDDC9"}
 */
function onHide(event) 
{
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}
