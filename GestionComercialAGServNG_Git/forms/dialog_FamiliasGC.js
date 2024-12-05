/**
 *
 * @properties={typeid:24,uuid:"42676C65-DAAB-4667-909E-AB950D56F432"}
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
	forms.dlg_FamiliasGC.elements.codigo.bgcolor = '#f0f0f0';
	globals.GCClave = null
	application.getWindow('DialogFamilias').hide();
	globals.GCenableBgElements();
	
	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 * @properties={typeid:24,uuid:"9CF30BF7-94EB-460D-96DA-87ABF6321C27"}
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
 * @properties={typeid:24,uuid:"E339FE99-B9DB-4421-A249-787A420CE26F"}
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
	
	forms.dlg_FamiliasGC.elements.codigo.editable = false
	forms.dlg_FamiliasGC.elements.codigo.bgcolor = '#f0f0f0';
	//application.getWindow('DialogTiposPescados').hide();
	//globals.GCenableBgElements();
		
		
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C1E0FB4A-6DF6-4CE2-A681-C891604A4E82"}
 */
function btn_Anterior(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	forms.dlg_FamiliasGC.controller.setSelectedIndex(forms.dlg_FamiliasGC.controller.getSelectedIndex() - 1)
	forms.dlg_FamiliasGC.elements.codigo.editable = false
	forms.dlg_FamiliasGC.elements.codigo.bgcolor = '#f0f0f0';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D696AF26-3D85-4171-B560-E1F6E6B68DF8"}
 */
function btn_Siguiente(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	forms.dlg_FamiliasGC.controller.setSelectedIndex(forms.dlg_FamiliasGC.controller.getSelectedIndex() + 1)
	forms.dlg_FamiliasGC.elements.codigo.editable = false
	forms.dlg_FamiliasGC.elements.codigo.bgcolor = '#f0f0f0';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6D27D5E7-42D4-4490-9F65-4DA85F3C463E"}
 */
function btn_Nuevo(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	if(!globals.GCisEditing()) globals.GCstartEditing()	
	forms.dlg_FamiliasGC.foundset.newRecord(true)
	forms.dlg_FamiliasGC.elements.codigo.editable = true
	forms.dlg_FamiliasGC.elements.codigo.bgcolor = '#ffffff'
	forms.dlg_FamiliasGC.elements.codigo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"036416EA-D832-4B3B-9610-C25B2F422EC8"}
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
 * @properties={typeid:24,uuid:"95056DC7-8F93-44BF-B41B-88A8930F2E2D"}
 */
function sub_doDelete()
{
	//see what button text was pressed and then delete if necessary
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		//var frm = currentcontroller.getName()
		var record = forms.dlg_FamiliasGC.foundset.getSelectedRecord();
		forms.dlg_FamiliasGC.foundset.deleteRecord(record);

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
 * @properties={typeid:24,uuid:"F56272C9-26D4-40CB-9ADF-6DCAB7A7988C"}
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
 * @properties={typeid:24,uuid:"9BF063FB-F98D-4F90-8936-3454DCC29AFD"}
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

	application.getWindow('DialogFamilias').hide();
	globals.GCenableBgElements();
	return true
}
