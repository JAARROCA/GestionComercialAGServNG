/**
 *
 * @properties={typeid:24,uuid:"7030743B-0F19-4F71-9031-B9AEB7A8DCE8"}
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
	application.getWindow('DialogTipoIVA').hide();
	globals.GCenableBgElements();
	
	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 * @properties={typeid:24,uuid:"25509A4E-74E9-4F06-A42C-496E8B7A665E"}
 */
function onShow() {
	// TODO Auto-generated method stub
	elements.btn_anterior.imageURL = "media:///nav_left_blue_greyBg.gif";
	elements.btn_siguiente.imageURL = "media:///nav_right_blue_greyBg.gif";
	elements.btn_Borrar.imageURL = "media:///papelera.GIF";
	elements.btn_Nuevo.imageURL = "media:///NEW.gif";
	elements.btn_ok.imageURL = "media:///guardar.gif";
	elements.btn_cancel.imageURL = "media:///cal_delete.gif";
	
	
	globals.GCdialog_buttonPressed = null;
}

/**
 *
 * @properties={typeid:24,uuid:"0984471F-411A-4AAE-9E24-98A868E539DC"}
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
	
	//application.getWindow('DialogTiposPescados').hide();
	//globals.GCenableBgElements();
		
		
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"4F1F1401-E20D-465C-B4B7-43D67D6D7766"}
 */
function btn_Anterior(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	forms.dlg_TipoIVAGC.controller.setSelectedIndex(forms.dlg_TipoIVAGC.controller.getSelectedIndex() - 1)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"13089C8B-C6CF-4C2A-87BB-1229204C2BD9"}
 */
function btn_Siguiente(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	forms.dlg_TipoIVAGC.controller.setSelectedIndex(forms.dlg_TipoIVAGC.controller.getSelectedIndex() + 1)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"8192C348-D734-4E17-8213-7D64265D7F0E"}
 */
function btn_Nuevo(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	if(!globals.GCisEditing()) globals.GCstartEditing()	
	forms.dlg_TipoIVAGC.foundset.newRecord(true)
	forms.dlg_TipoIVAGC.elements.descripcion.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"095886C3-C89A-461A-A53A-5625247E3BB9"}
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
 * @properties={typeid:24,uuid:"99E370E9-9283-4BDE-A8DD-F680D56A9579"}
 */
function sub_doDelete()
{
	//see what button text was pressed and then delete if necessary
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		//var frm = currentcontroller.getName()
		//forms.dlg_TipoIVAGC.foundset.deleteRecord()
		var record = forms.dlg_TipoIVAGC.foundset.getSelectedRecord();
		forms.dlg_TipoIVAGC.foundset.deleteRecord(record);
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
 * @properties={typeid:24,uuid:"D1E27F87-57F1-4D21-9671-004E2492A661"}
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
 * @properties={typeid:24,uuid:"752F0F6C-D44C-4EA6-8CCA-7AA0E8A0201A"}
 */
function onHide(event) 
{
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCClave = null
			globals.GCcancelEditing()
		}
		
	}	

	application.getWindow('DialogTipoIVA').hide();
	globals.GCenableBgElements();
	return true
}
