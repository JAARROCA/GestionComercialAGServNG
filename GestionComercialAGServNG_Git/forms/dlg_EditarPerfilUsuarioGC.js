/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"51C92AEF-C86C-44B7-8B05-84CE150143B8"}
 */
var frmCryptedText = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"2B7F57C7-B0C5-4500-A121-60459502A2B9"}
 */
var frmDecryptedText = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"55F5D610-41F0-4A62-8E33-147124367605"}
 */
var servidorcorreossmtp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8000CB17-A423-432A-865E-1D28AF07FDDD"}
 */
var newpasswordrepeat = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"57298079-AD66-49B8-BC72-5F363AA46C15"}
 */
var newpassword = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"40E2D605-8FB5-4379-B595-F387EFC77484"}
 */
var actualpassword = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F3BE052-8992-479C-865E-B6412D20E3FA"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
}

/**
 * Perform the element default action.
 *
 *
 * @properties={typeid:24,uuid:"776EF7B9-B91A-4AB8-A36E-1B25F9E00F05"}
 */
function Desencriptar() 
{
	frmDecryptedText=globals.GCcryptString(frmCryptedText,globals.GCcryptKey,'D');
	//frmDecryptedText=utils.stringMD5HashBase64(frmCryptedText)
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"87DED03B-4040-43B3-BFAC-FC186AEF6410"}
 */
function onShow() {
	// TODO Auto-generated method stub
	//don't need image buttons for webclient - at all
	/*elements.actualpassword.visible = false;
	elements.actualpasswordc.visible = true;
	elements.newpassword.visible = false;
	elements.newpasswordc.visible = true;
	elements.newpasswordrepeat.visible = false;
	elements.newpasswordrepeatc.visible = true;
	elements.lbl_actualpassw.imageURL = 'media:///eye.png'*/
	sub_setPreviewLabels()
	actualpassword = null;
	newpassword = null;
	newpasswordrepeat = null;
	servidorcorreossmtp = gcparametrosaplicacion_to_parametrosaplicacion.servidorcorreosmtp;
	if(passw_us != null && passw_us != '')
	{
		frmCryptedText = passw_us
		Desencriptar()
		passw_us = frmDecryptedText
	}
	elements.passw_us.visible = true;
	elements.passw_us.enabled = true;
	elements.passw_usc.visible = false;
	elements.passw_usc.enabled = false;
	elements.lbl_claemail.imageURL = 'media:///eye.png'
	//elements.actualpassword.requestFocus()
}

/**
 *
 * @properties={typeid:24,uuid:"17D6FC45-C558-4599-B821-0C8C454CCA29"}
 */
function btn_deleteImage()
{
	if(foto)
	{
		//show a warning dialog
		//globals.CONTAshowWarningDialog('¿¿Estás seguro que quieres borrar este Logo?', 'forms.dlg_ParametroAplicacionCONTA.sub_clearImage()','Cancel','Delete', null, null)
		foto = null
		sub_setPreviewLabels();
	}
}

/**
 *
 * @properties={typeid:24,uuid:"76586FFC-2BDE-4060-B4E4-66034A821B1E"}
 */
function sub_setPreviewLabels()
{
	/*if(logo && (utils.stringPatternCount(image_mime_type, 'image') == 0 || !image_mime_type))
	{
		//show that there is no preview for this item
		elements.lbl_imagePreview.text = '<html><body><center>No Preview for .' + image_type + ' files</center></body></html>';
		elements.lbl_imagePreview.visible = true;
		application.updateUI(100);
	}
	else*/ 
	if(!foto)
	{
		elements.lbl_imagePreview.text = '';//'Sin Imágen';
		elements.lbl_imagePreview.visible = true;
		elements.lbl_imagePreview.imageURL = "media:///noimagen.jpg";
		application.updateUI(100);
	}
	else
	{
		elements.lbl_imagePreview.text = '';
		elements.lbl_imagePreview.visible = false;
		elements.lbl_imagePreview.imageURL = null
		application.updateUI(100);
	}
	/*if(!logo)
	{
		elements.lbl_imagePreview.text = 'No Logo';
		elements.lbl_imagePreview.visible = true;
		application.updateUI(100);
	}
	else
	{
		elements.lbl_imagePreview.text = '';
		elements.lbl_imagePreview.visible = false;
		application.updateUI(100);
	}*/
}

/**
*
*
 * @properties={typeid:24,uuid:"70BD0D7E-977B-4702-9FFA-D69DA8B5E7B4"}
 */
function product_image_dataChange() {
	databaseManager.setAutoSave(false);
	
	if (globals.GCsmart_chg == 0) {
		var rawData = foto;

		if(rawData)
		{
			//var fileName = product_image_filename;
			//var ext = utils.stringRight(fileName, 3);
			var type = plugins.images.getImage(rawData);
			var contentType = type.getContentType();

			if(utils.stringPatternCount(contentType, 'image') > 0)
			{
				//it's an image we can display
				//image_thumbnail = application.createJPGImage(rawData, 90, 90);  - depricated method

				var img_raw = plugins.images.getImage(rawData);
				foto = img_raw.resize(90,90);
			}
			else
			{
				//there will be no display
				foto = null;
				//show error message!
//				globals.svyCore_dlg_warning('<html>This is<b> NOT an image file!</b><br>Please select a different file.</html>','','OK') - the method is not defined
				return;
			}
			//image_type = ext;
			//image_name = product_image_filename;
			//image_mime_type = product_image_mimetype;

			sub_setPreviewLabels();
		}
	}
	else {
		globals.GCsmart_chg = 0;
	}
	/*if (product_image_mimetype == null)
	{
		image_mime_type = null
		image_name = null
		image_thumbnail = null
		image_type = null
		product_image = null;
		product_image_filename = null;
		product_image_mimetype = null;
		sub_setPreviewLabels();
	}*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C0421F9E-30E6-4C75-8CF9-BF351D59DFC1"}
 */
function onActionactpassw(event) {
	if(elements.newpassword.visible == true) elements.newpassword.requestFocus()
	else elements.newpasswordc.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2211C7F7-E315-4F96-B1B4-2816B51236AB"}
 */
function onActionactnewpassw(event) {
	if(elements.newpasswordrepeat.visible == true)	elements.newpasswordrepeat.requestFocus()
	else elements.newpasswordrepeatc.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"2AB22D06-E3A3-4476-A617-1986511CCF20"}
 */
function btn_verPassword(event) {
	if(actualpassword)
	{
		if(elements.actualpassword.visible == false)
		{
		elements.actualpassword.visible = true;
		elements.actualpassword.enabled = true;
		elements.actualpasswordc.visible = false;
		elements.actualpasswordc.enabled = false;
		elements.lbl_actualpassw.imageURL = 'media:///eye-slash.png'
		}
		else
		{
			elements.actualpassword.visible = false;
			elements.actualpassword.enabled = false;
			elements.actualpasswordc.visible = true;
			elements.actualpasswordc.enabled = true;
			elements.lbl_actualpassw.imageURL = 'media:///eye.png'
		}
	}
	else
	{
		elements.actualpassword.visible = false;
		elements.actualpassword.enabled = false;
		elements.actualpasswordc.visible = true;
		elements.actualpasswordc.enabled = true;
		elements.lbl_actualpassw.imageURL = 'media:///eye.png'
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"87FBC0CB-CE42-4713-BEA5-912B0FBE4213"}
 */
function btn_verPassword2(event) {
	if(newpassword)
	{
		if(elements.newpassword.visible == false)
		{
		elements.newpassword.visible = true;
		elements.newpassword.enabled = true;
		elements.newpasswordc.visible = false;
		elements.newpasswordc.enabled = false;
		elements.lbl_newpassw.imageURL = 'media:///eye-slash.png'
		}
		else
		{
			elements.newpassword.visible = false;
			elements.newpassword.enabled = false;
			elements.newpasswordc.visible = true;
			elements.newpasswordc.enabled = true;
			elements.lbl_newpassw.imageURL = 'media:///eye.png'
		}
	}
	else
	{
		elements.newpassword.visible = false;
		elements.newpassword.enabled = false;
		elements.newpasswordc.visible = true;
		elements.newpasswordc.enabled = true;
		elements.lbl_newpassw.imageURL = 'media:///eye.png'
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"86A13B5F-491E-482D-908D-C2042BE8F8B0"}
 */
function btn_verPassword3(event) {
	if(newpasswordrepeat)
	{
		if(elements.newpasswordrepeat.visible == false)
		{
		elements.newpasswordrepeat.visible = true;
		elements.newpasswordrepeat.enabled = true;
		elements.newpasswordrepeatc.visible = false;
		elements.newpasswordrepeatc.enabled = false;
		elements.lbl_newpasswr.imageURL = 'media:///eye-slash.png'
		}
		else
		{
			elements.newpasswordrepeat.visible = false;
			elements.newpasswordrepeat.enabled = false;
			elements.newpasswordrepeatc.visible = true;
			elements.newpasswordrepeatc.enabled = true;
			elements.lbl_newpasswr.imageURL = 'media:///eye.png'
		}
	}
	else
	{
		elements.newpasswordrepeat.visible = false;
		elements.newpasswordrepeat.enabled = false;
		elements.newpasswordrepeatc.visible = true;
		elements.newpasswordrepeatc.enabled = true;
		elements.lbl_newpasswr.imageURL = 'media:///eye.png'
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"4B48128D-1986-4D0F-BAE2-E71B83DFA8CC"}
 */
function BtnFirmaEmail(event) {
	globals.GCFormulario = 'dlg_EditarPerfilUsuarioGC'
	globals.GCshowDialogFirmaEmail('Firma de correo electrónico', 1, null, null, true, null, null, null, null, null);
	
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"476C8880-0A29-4FE0-8A8F-9D2285A39665"}
 */
function onActionservidorsmtp(event) {
	elements.imde_us.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D143C165-5977-4DF0-8FAB-424451AC52C0"}
 */
function onActionimde(event) {
	// TODO Auto-generated method stub
	elements.nuser_us.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"E261BEFB-355E-435C-BFCE-B9F652A0D9B7"}
 */
function onActionnuser(event) {
	// TODO Auto-generated method stub
	elements.passw_us.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"7526A982-0B90-4B6D-B4F2-C2A8431219CB"}
 */
function btn_verPassword4(event) {
	if(passw_us)
	{
		if(elements.passw_us.visible == false)
		{
		elements.passw_us.visible = true;
		elements.passw_us.enabled = true;
		elements.passw_usc.visible = false;
		elements.passw_usc.enabled = false;
		elements.lbl_claemail.imageURL = 'media:///eye.png'
		}
		else
		{
			elements.passw_us.visible = false;
			elements.passw_us.enabled = false;
			elements.passw_usc.visible = true;
			elements.passw_usc.enabled = true;
			elements.lbl_claemail.imageURL = 'media:///eye-slash.png'
		}
	}
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A1FAB9EF-4D19-436F-A812-2EA8CAE17251"}
 */
function btn_conf_GMail(event) {
	application.showURL('https://agissa.com/documents/Configuracion_GMAIL_AppWeb.pdf','_blank');
}
