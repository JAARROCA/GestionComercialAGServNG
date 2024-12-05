/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"DDCCCC16-BD88-4F54-9008-F1ABEC270425"}
 */
var frmCryptedText = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"A967BBC3-7ECA-4777-88F2-3EE2421CE540"}
 */
var frmDecryptedText = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"0C1320BF-EFC0-476B-98D2-10AC666B6F03"}
 */
function Desencriptar() 
{
	frmDecryptedText=globals.GCcryptString(frmCryptedText,globals.GCcryptKey,'D');
	//frmDecryptedText=utils.stringMD5HashBase64(frmCryptedText)
	
}

/**
 * Perform the element default action.
 *
 *
 * @properties={typeid:24,uuid:"AFC053C1-368C-4DFF-9126-F317AF56D3E7"}
 */
function Encriptar() 
{
	frmCryptedText=globals.GCcryptString(frmDecryptedText,globals.GCcryptKey,'C');
	//frmDecryptedText=utils.stringMD5HashBase64(frmCryptedText)
	
}

/**
 *
 * @properties={typeid:24,uuid:"BE117A08-0A77-4CE8-BDDC-A7B746B6ED98"}
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
	forms.dlg_OperariosGC.elements.codigo.bgcolor = '#f0f0f0';
	application.getWindow('DialogOperarios').hide();
	globals.GCenableBgElements();
	
	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 * @properties={typeid:24,uuid:"7E643B71-0582-4A61-8E9E-C6294BF24831"}
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
 * @properties={typeid:24,uuid:"4A451782-4972-4459-AE5C-6E1803425E5A"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits();
	}
	
	databaseManager.saveData();
	
	
	forms.dlg_OperariosGC.elements.codigo.editable = false
	forms.dlg_OperariosGC.elements.codigo.bgcolor = '#f0f0f0';
	forms.dlg_OperariosGC.foundset.sort('idoperario asc')
	//application.getWindow('DialogOperarios').hide();
	//globals.GCenableBgElements();
		
		
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7B23D26B-2D4F-4AE0-882B-9AB4137BF232"}
 */
function btn_Anterior(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	forms.dlg_OperariosGC.controller.setSelectedIndex(forms.dlg_OperariosGC.controller.getSelectedIndex() - 1)
	forms.dlg_OperariosGC.elements.codigo.editable = false
	forms.dlg_OperariosGC.elements.codigo.bgcolor = '#f0f0f0';
	forms.dlg_OperariosGC.sub_setPreviewLabels();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"DD84C24B-128E-4011-A8C3-870880964F46"}
 */
function btn_Siguiente(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	forms.dlg_OperariosGC.controller.setSelectedIndex(forms.dlg_OperariosGC.controller.getSelectedIndex() + 1)
	forms.dlg_OperariosGC.elements.codigo.editable = false
	forms.dlg_OperariosGC.elements.codigo.bgcolor = '#f0f0f0';	
	forms.dlg_OperariosGC.sub_setPreviewLabels();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7D010C41-5B2B-481B-9178-80ABA37CC4C5"}
 */
function btn_Nuevo(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	if(!globals.GCisEditing()) globals.GCstartEditing()	
	forms.dlg_OperariosGC.foundset.newRecord(true)
	forms.dlg_OperariosGC.elements.codigo.editable = true
	forms.dlg_OperariosGC.elements.codigo.bgcolor = '#ffffff'
	forms.dlg_OperariosGC.sub_setPreviewLabels();
	forms.dlg_OperariosGC.elements.codigo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"AAD68619-D420-4AF1-A2C4-F46887633DAA"}
 */
function btn_Borrar(event) {
	// TODO Auto-generated method stub
	var msg =  '¿Estás seguro de querer borrarlo?'
	var frm = currentcontroller.getName()
	var methd = 'forms.' + frm + '.sub_doDelete()'

	//clear out global - so we don't accidentally delete something
	globals.core_dlg_buttonPressed = null
	//show the tabpanel "dialog"
	globals.GCshowWarningDialog(msg, methd, 'Cancelar', 'Borrar', null, null);
}

/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"AFB66E19-6E22-4ED8-B73C-BBAC9CC9C7AC"}
 */
function sub_doDelete()
{
	//see what button text was pressed and then delete if necessary
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		//var frm = currentcontroller.getName()
		var record = forms.dlg_OperariosGC.foundset.getSelectedRecord();
		forms.dlg_OperariosGC.foundset.deleteRecord(record);

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
 * @properties={typeid:24,uuid:"24F844F8-59CE-4D50-A699-D89807B666F8"}
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
 * @properties={typeid:24,uuid:"3261B919-951F-4C8B-8E20-4F6DD61D6FA5"}
 */
function onHide(event) 
{
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		//if(globals.GCisEditing()) 
		//{
			globals.GCcancelEditing()
		//}
		
	}	

	application.getWindow('DialogOperarios').hide();
	globals.GCenableBgElements();
	return true
}
