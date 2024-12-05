/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1BE76CDA-5DBE-4AC9-9CB5-8FBE04029A38"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
}

/**
 * Callback method for when form is shown.
 * 
 * @properties={typeid:24,uuid:"E94ACB52-5F92-4337-BD11-FFD49833BAA2"}
 */
function onShow() {
	// TODO Auto-generated method stub
	controller.readOnly = true
	
	
	elements.numpresupuesto.readOnly=false
	elements.pedidocompras.readOnly=false
	elements.numalbaran.readOnly=false
	elements.numfactura.readOnly=false
	elements.numfacturarect.readOnly=false
	elements.numfacturaabono.readOnly=false
	elements.numfacturacargo.readOnly=false
	elements.numfacturaproforma.readOnly = false
	elements.numpedido.readOnly=false
	elements.numnota.readOnly=false
	
	elements.btn_DatosRegistrales.enabled = false
	elements.btn_CertifDigital.enabled = false;
	//elements.btn_FacturaPredet.enabled = false
	elements.BtnPais.visible = false
	
	elements.numpresupuesto.bgcolor = '#feffe4'
	elements.pedidocompras.bgcolor = '#feffe4'
	elements.numalbaran.bgcolor = '#feffe4'
	elements.numfactura.bgcolor = '#feffe4'
	elements.numfacturarect.bgcolor = '#feffe4'
	elements.numfacturaabono.bgcolor = '#feffe4'
	elements.numfacturacargo.bgcolor = '#feffe4'
	elements.numfacturaproforma.bgcolor = '#feffe4'
	elements.numpedido.bgcolor = '#feffe4'
	elements.numnota.bgcolor = '#feffe4'
		
	elements.btnModificar.enabled = true
		
	//elements.fld_fechalimite.visible = false
	sub_setPreviewLabels();
	sub_setPreviewLabels2();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5CA591BF-D054-4A9A-8ABE-0B6CF5417381"}
 */
function onActionClaveMod(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	//{
	if(globals.GCNombreUsuario == 'DEMO')	
	{
		forms.dlg_ParametroAplicacionGC.doEdit()
		forms.dlg_ParametroAplicacionGC.elements.btnModificar.enabled = false;
		//forms.dlg_ParametroAplicacionGC.elements.fld_fechalimite.visible = true
		forms.dlg_ParametroAplicacionGC.elements.fld_empresa.requestFocus();
	}
	else
	{
		globals.GCClave = null
		globals.GCevento = 'ClaveMod'
		//globals.GCshowDialogClave('Clave', 1, null, null, true, 'Borrar Línea', null, null, null, null);
		var win = application.getWindow('DialogClave')
		if(win != null) win.destroy();
		 
		win = application.createWindow("DialogClave", JSWindow.MODAL_DIALOG);
		//win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'Clave';
		//win.resizable = true;
		win.show(forms.dialog_ClaveGC)
		
	}
	//}
	//else
	//{
	//	var resp = plugins.dialogs.showInputDialog('Clave','Introduzca Clave de Modificación'); 
	//}
	
	
	//if(resp == '1234')
	//{
	//	doEdit()
	//	elements.fld_propiedad.requestFocus();
	//}
}

/**
 * @properties={typeid:24,uuid:"ED3344F9-999E-46C8-8E53-29920E949B54"}
 */
function doEdit()
{	
	if(!globals.GCisEditing()) globals.GCstartEditing()

	var allNames = elements.allnames

	for ( var i = 0 ; i < allNames.length ; i++ )
	{
		//work on fields only - starting with name "fld_"
		if(allNames[i].indexOf('fld_') >= 0)
		{
			//if it's a field - then change color and make editable			
			elements[allNames[i]].bgcolor = '#feffe4'
			elements[allNames[i]]['readOnly'] = false
		}
		
	}	
	elements.btn_DatosRegistrales.enabled = true
	elements.btn_CertifDigital.enabled = true
	//elements.btn_FacturaPredet.enabled = true
	elements.BtnPais.visible = true
}

/**
 * @properties={typeid:24,uuid:"BCA2F9F2-156E-47C6-BDE0-6BE3241C0683"}
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
	if(!logo)
	{
		elements.lbl_imagePreview.text = '';//'Sin Imágen';
		elements.lbl_imagePreview.visible = true;
		elements.lbl_imagePreview.imageURL = "media:///no_foto.png";
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
 * @properties={typeid:24,uuid:"FF913751-75B3-4F95-9302-FAA4DF5E094F"}
 */
function sub_setPreviewLabels2()
{
	/*if(logo && (utils.stringPatternCount(image_mime_type, 'image') == 0 || !image_mime_type))
	{
		//show that there is no preview for this item
		elements.lbl_imagePreview.text = '<html><body><center>No Preview for .' + image_type + ' files</center></body></html>';
		elements.lbl_imagePreview.visible = true;
		application.updateUI(100);
	}
	else*/ 
	if(!logo2)
	{
		elements.lbl_imagePreview2.text = '';//'Sin Imágen';
		elements.lbl_imagePreview2.visible = true;
		elements.lbl_imagePreview2.imageURL = "media:///no_foto.png";
		application.updateUI(100);
	}
	else
	{
		elements.lbl_imagePreview2.text = '';
		elements.lbl_imagePreview2.visible = false;
		elements.lbl_imagePreview2.imageURL = null
		application.updateUI(100);
	}
	/*if(!logo2)
	{
		elements.lbl_imagePreview2.text = 'No Logo';
		elements.lbl_imagePreview2.visible = true;
		application.updateUI(100);
	}
	else
	{
		elements.lbl_imagePreview2.text = '';
		elements.lbl_imagePreview2.visible = false;
		application.updateUI(100);
	}*/
}

/**
 * @properties={typeid:24,uuid:"12DEA8FF-FE2E-4919-BB50-B9F9E8E45512"}
 */
function product_image_dataChange() {
	databaseManager.setAutoSave(false);
	
	if (globals.GCsmart_chg == 0) {
		var rawData = logo;

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
				logo = img_raw.resize(300,300);
			}
			else
			{
				//there will be no display
				logo = null;
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
 *
 * @properties={typeid:24,uuid:"C40089AD-B3A3-452C-AD62-4E4004051355"}
 */
function product_image_dataChange2() {
	databaseManager.setAutoSave(false);
	
	if (globals.GCsmart_chg == 0) {
		var rawData = logo2;

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
				logo2 = img_raw.resize(300,300);
			}
			else
			{
				//there will be no display
				logo2 = null;
				//show error message!
//				globals.svyCore_dlg_warning('<html>This is<b> NOT an image file!</b><br>Please select a different file.</html>','','OK') - the method is not defined
				return;
			}
			//image_type = ext;
			//image_name = product_image_filename;
			//image_mime_type = product_image_mimetype;

			sub_setPreviewLabels2();
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
 * @properties={typeid:24,uuid:"A6321B00-6BCF-4898-8914-44CA876C1D60"}
 */
function btn_deleteLogo()
{
	if(logo)
	{
		//show a warning dialog
		//globals.GCshowWarningDialog('¿¿Estás seguro que quieres borrar este Logo?', 'forms.dlg_ParametroAplicacion.sub_clearImage()','Cancel','Delete', null, null)
		logo = null
		sub_setPreviewLabels();
	}
}

/**
 *
 * @properties={typeid:24,uuid:"985C2644-C4FB-4AF0-9BBD-3B785DFFB463"}
 */
function btn_deleteLogo2()
{
	if(logo2)
	{
		//show a warning dialog
		//globals.GCshowWarningDialog('¿¿Estás seguro que quieres borrar este Logo?', 'forms.dlg_ParametroAplicacion.sub_clearImage()','Cancel','Delete', null, null)
		logo2 = null
		sub_setPreviewLabels2();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1614A698-0513-4A8D-AB79-7C820413C8C0"}
 */
function onActionpropiedad(event) {
	// TODO Auto-generated method stub
	
		elements.fld_empresa.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C7852722-940F-40D6-9CB1-1E07099B878B"}
 */
function onActionempresa(event) {
	// TODO Auto-generated method stub
	
		elements.fld_direccion.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"42DD43B6-E776-44AB-8B8E-B90A234E2F38"}
 */
function onActiondir(event) {
	// TODO Auto-generated method stub
	
		elements.fld_codpostal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38442A3C-B43C-4567-A675-2B3B985725EB"}
 */
function onActionpob(event) {
	// TODO Auto-generated method stub
	
		elements.fld_provincia.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"48523BDB-B6EE-489F-81D9-443A5C9110BA"}
 */
function onActionprov(event) {
	// TODO Auto-generated method stub
	
		elements.fld_cif.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A45C44F-D305-44AE-A218-92FE2DDFB51D"}
 */
function onActioncif(event) {
	// TODO Auto-generated method stub
	
		elements.fld_telefono.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"19C40C35-975E-43B9-84F7-056E167C72B1"}
 */
function onActiontlf(event) {
	// TODO Auto-generated method stub
	
		elements.fld_fax.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61BE2729-5C55-42F7-8452-41034D089319"}
 */
function onActionfax(event) {
	// TODO Auto-generated method stub
	
		elements.fld_diraux.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87CDC7D1-4D10-45F8-B277-69E119666C5B"}
 */
function onActiondiraux(event) {
	// TODO Auto-generated method stub
	
		elements.fld_pobaux.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ED33C0B1-8A62-44EA-B981-2D912938D7B9"}
 */
function onActionpobaux(event) {
	// TODO Auto-generated method stub
	
		elements.fld_telfaux.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EAD742AF-5001-46A6-BFE4-C22B79F6B616"}
 */
function onActiontelfaux(event) {
	// TODO Auto-generated method stub
	
		elements.fld_servidorcorreosmtp.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0384A30C-FA68-4066-BFC5-84BD0E48FE06"}
 */
function onActionfechalimite(event) {
	// TODO Auto-generated method stub
	onDataChangeFechaLimite()
	
		elements.fld_servidorcorreosmtp.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D5B1B57-3AE4-4868-8C1A-931CC66B92C5"}
 */
function onActionservcorreo(event) {
	// TODO Auto-generated method stub
	
		elements.fld_mail.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6B9A395F-DEEB-4B38-8495-3C3DBDDD4B19"}
 */
function onActionmail(event) {
	// TODO Auto-generated method stub
	
		elements.fld_web.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E2795C23-9B0E-409E-BB64-1B3E3FA65987"}
 */
function onActionnempconta(event) {
	// TODO Auto-generated method stub
	elements.numpresupuesto.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"A45E8D25-13B4-4CA8-A47C-7F0B6175003E"}
 */
function onActionnnumpresupuesto(event) {
	// TODO Auto-generated method stub
	elements.pedidocompras.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E2FF0C4D-E15A-4D2D-96D3-8EBC352A35BE"}
 */
function onActionweb(event) {
	// TODO Auto-generated method stub
	elements.fld_nempconta.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8EEE2EC6-E394-456E-92BE-EFE0D96930EA"}
 */
function onActionpedidocompras(event) {
	// TODO Auto-generated method stub
	elements.numalbaran.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4FD8CF4D-A55E-4E8F-85EF-AF3B1F8DF26A"}
 */
function onActionnumalbaran(event) {
	// TODO Auto-generated method stub
	elements.numfactura.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"1D24E08F-D790-48EC-B480-CD612834CA3E"}
 */
function BtnDatosRegistrales(event) {
	// TODO Auto-generated method stub
	globals.GCshowDialogDatosRegistro('Datos del Registro Mercantil de la Sociedad', 1, null, null, true, null, null, null, null, null);
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"D5EFE3CB-8FEE-4356-8B09-410386EFAE3A"}
 */
function onDataChangeFechaLimite() {
	// TODO Auto-generated method stub
	fechalimite = fechalimite.setHours(23,59,59)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"59AF0C8B-D60F-409E-BE5F-EE771D8702E5"}
 */
function onActioncp(event) {
	// TODO Auto-generated method stub
	elements.fld_poblacion.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"08A186BD-D351-4EC1-A8BA-63BD1FBDF738"}
 */
function onActionBtnPaises(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ParametroAplicacion'
	//globals.GCshowDialogPaises('Paises', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialogPaises')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialogPaises", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Paises';
	//win.resizable = true;
	//win.show(forms.dialog_PaisesGC)
	win.show(forms.dlgPaisesGC)
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"8FFC0FFF-5DB8-43C3-8B63-1D5DE40E90A3"}
 */
function onDataChangeCIF() {
	// TODO Auto-generated method stub
	var ok = true
	//if(cif) ok = globals.validateCIFGC(cif)
	if(ok == false){
		elements.fld_cif.requestFocus()
		elements.fld_cif.selectAll()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('CIF no válido!!!.\nVerifíquelo.','¡Error!')
		else globals.GCshowErrorDialog("CIF no válido!!!.\nVerifíquelo.", null, null, null, null, null)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C99EA29F-3B7E-4E41-A8B1-AEF67738CB20"}
 */
function btn_FacturaPredet(event) {
	var menu = plugins.window.createPopupMenu();
	if(!gcparametrosaplicacion_to_parametrosaplicacion.ticketbai){
		if(!forms.dlg_ParametroAplicacionGC.facturapredet) forms.dlg_ParametroAplicacionGC.facturapredet = 1;
		if(forms.dlg_ParametroAplicacionGC.facturapredet == 1)
		{
			menu.addMenuItem('✔', FacturasPredet, "media:///Fra_2.GIF");
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra2_2.GIF");
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra3_2.GIF");
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra4_2.GIF");
		}
		else if(forms.dlg_ParametroAplicacionGC.facturapredet == 2)
		{
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra_2.GIF");
			menu.addMenuItem('✔', FacturasPredet, "media:///Fra2_2.GIF");
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra3_2.GIF");
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra4_2.GIF");
		}
		else if(forms.dlg_ParametroAplicacionGC.facturapredet == 3)
		{
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra_2.GIF");
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra2_2.GIF");
			menu.addMenuItem('✔', FacturasPredet, "media:///Fra3_2.GIF");
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra4_2.GIF");
		}
		else if(forms.dlg_ParametroAplicacionGC.facturapredet == 4)
		{
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra_2.GIF");
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra2_2.GIF");
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra3_2.GIF");
			menu.addMenuItem('✔', FacturasPredet, "media:///Fra4_2.GIF");
		}
		else 
		{
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra_2.GIF");
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra2_2.GIF");
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra3_2.GIF");
			menu.addMenuItem(' ', FacturasPredet, "media:///Fra4_2.GIF");
		}
	}
	else
	{
		if(!forms.dlg_ParametroAplicacionGC.facturapredettbai) forms.dlg_ParametroAplicacionGC.facturapredettbai = 1;
		if(forms.dlg_ParametroAplicacionGC.facturapredettbai == 1)
		{
			menu.addMenuItem('✔', FacturasPredet, "media:///FraTBAI.PNG");
			menu.addMenuItem(' ', FacturasPredet, "media:///FraTBAI3.PNG");
			menu.addMenuItem(' ', FacturasPredet, "media:///FraTBAI2.PNG");			
		}
		else if(forms.dlg_ParametroAplicacionGC.facturapredettbai == 2)
		{
			menu.addMenuItem(' ', FacturasPredet, "media:///FraTBAI.PNG");
			menu.addMenuItem('✔', FacturasPredet, "media:///FraTBAI3.PNG");
			menu.addMenuItem(' ', FacturasPredet, "media:///FraTBAI2.PNG");
		}
		else if(forms.dlg_ParametroAplicacionGC.facturapredettbai == 3)
		{
			menu.addMenuItem(' ', FacturasPredet, "media:///FraTBAI.PNG");
			menu.addMenuItem(' ', FacturasPredet, "media:///FraTBAI3.PNG");
			menu.addMenuItem('✔', FacturasPredet, "media:///FraTBAI2.PNG");
		}		
	}
	
	if (event.getSource()) {
		// display the popup over the component which is the source of the event
		menu.show(event.getSource(),0,22);					
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"E1B6E9CB-879B-4F2E-B19D-2B119B7A7D23"}
 */
function FacturasPredet(event) 
{
	if(!gcparametrosaplicacion_to_parametrosaplicacion.ticketbai){
		var arg = arguments[0]
		switch (arg) {
			case 0: 
			forms.dlg_ParametroAplicacionGC.facturapredet = 1;		
				break;
			case 1: 
			forms.dlg_ParametroAplicacionGC.facturapredet = 2;		
				break;
			case 2: 
			forms.dlg_ParametroAplicacionGC.facturapredet = 3;		
				break;
			case 3: 
			forms.dlg_ParametroAplicacionGC.facturapredet = 4;		
				break;
			default: break
			
		}
	}
	else
	{
		arg = arguments[0]
		switch (arg) {
			case 0: 
			forms.dlg_ParametroAplicacionGC.facturapredettbai = 1;		
				break;
			case 1: 
			forms.dlg_ParametroAplicacionGC.facturapredettbai = 2;		
				break;
			case 2: 
			forms.dlg_ParametroAplicacionGC.facturapredettbai = 3;		
				break;
			default: break
			
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4350B3B9-AB6B-4C06-AD4A-2E94F6C62F31"}
 */
function onActionpresupuestos(event) {
	elements.pedidocompras.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2A534AFD-8FC5-45D1-A3FE-26386B43A946"}
 */
function onActionnumfactura(event) {
	elements.numfacturarect.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"5F670CD1-8947-4987-BF55-D6CAED20F140"}
 */
function onActionnumfacturarect(event) {
	elements.numfacturaabono.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"5D3F8BAE-306E-404F-BD7A-C641F6FE5FB5"}
 */
function onActionnumfacturaabono(event) {
	elements.numfacturacargo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D0FD85D3-C2CB-473F-945E-9E314DBE3D61"}
 */
function onActionnumfacturacargo(event) {
	elements.numfacturaproforma.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"0FD49434-F092-456F-A5B9-0122E002188D"}
 */
function onActionnumfacturaproforma(event) {
	elements.numpedido.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7C0EAB47-739B-4DAE-B8B1-4F2C74E4B1B3"}
 */
function onActionnumpedido(event) {
	elements.numnota.requestFocus()
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"04E3245F-3D2A-4641-A12D-C46C9806AF72"}
 */
function onDataChangeCP() {
	if(codpostal)
	{
		if(codpostal.length == 5)
		{
			var prov = utils.stringLeft(codpostal,2)			
			switch( prov )
			{
				case '01': 
				{
					provincia = 'ÁLAVA';				
					break;
				}
				case '02': 
				{
					provincia = 'ALBACETE';
					break;
				}
				case '03': 
				{
					provincia = 'ALICANTE';					
					break;
				}
				case '04': 
				{
					provincia = 'ALMERÍA';					
					break;
				}
				case '33': 
				{
					provincia = 'ASTURIAS';					
					break;
				}
				case '05': 
				{
					provincia = 'ÁVILA';
					break;
				}
				case '06': 
				{
					provincia = 'BADAJOZ';					
					break;
				}
				case '08': 
				{
					provincia = 'BARCELONA';					
					break;
				}
				case '09': 
				{
					provincia = 'BURGOS';					
					break;
				}
				case '10': 
				{
					provincia = 'CÁCERES';					
					break;
				}
				case '11': 
				{
					provincia = 'CÁDIZ';					
					break;
				}
				case '39': 
				{
					provincia = 'CANTABRIA';					
					break;
				}
				case '12':
				{
					provincia = 'CASTELLÓN';					
					break;
				}
				case '51':
				{
					provincia = 'CEUTA';
					break;
				}
				case '13':
				{
					provincia = 'CIUDAD REAL';					
					break;
				}
				case '14':
				{
					provincia = 'CÓRDOBA';					
					break;
				}
				case '15':
				{
					provincia = 'CORUÑA, A';					
					break;
				}
				case '16':
				{
					provincia = 'CUENCA';					
					break;
				}
				case '17':
				{
					provincia = 'GIRONA';					
					break;
				}
				case '18':
				{
					provincia = 'GRANADA';					
					break;
				}
				case '19':
				{
					provincia = 'GUADALAJARA';					
					break;
				}
				case '20':
				{
					provincia = 'GUIPÚZCOA';					
					break;
				}
				case '21':
				{
					provincia = 'HUELVA';					
					break;
				}
				case '22':
				{
					provincia = 'HUESCA';					
					break;
				}
				case '07':
				{
					provincia = 'ILLES BALEARS';					
					break;
				}
				case '23':
				{
					provincia = 'JAÉN';					
					break;
				}
				case '24':
				{
					provincia = 'LEÓN';					
					break;
				}
				case '25':
				{
					provincia = 'LLEIDA';					
					break;
				}
				case '27':
				{
					provincia = 'LUGO';					
					break;
				}
				case '28':
				{
					provincia = 'MADRID';
					break;
				}
				case '29':
				{
					provincia = 'MÁLAGA';					
					break;
				}
				case '52':
				{
					provincia = 'MELILLA';					
					break;
				}
				case '30':
				{
					provincia = 'MURCIA';					
					break;
				}
				case '31':
				{
					provincia = 'NAVARRA';					
					break;
				}
				case '32':
				{
					provincia = 'OURENSE';					
					break;
				}
				case '34':
				{
					provincia = 'PALENCIA';					
					break;
				}
				case '35':
				{
					provincia = 'PALMAS, LAS';					
					break;
				}
				case '36':
				{
					provincia = 'PONTEVEDRA';					
					break;					
				}
				case '26':
				{
					provincia = 'RIOJA, LA';					
					break;
				}
				case '37':
				{
					provincia = 'SALAMANCA';					
					break;
				}
				case '38':
				{
					provincia = 'S.C.TENERIFE';					
					break;
				}
				case '40':
				{
					provincia = 'SEGOVIA';
					break;
				}
				case '41':
				{
					provincia = 'SEVILLA';					
					break;
				}
				case '42':
				{
					provincia = 'SORIA';					
					break;
				}
				case '43':
				{
					provincia = 'TARRAGONA';					
					break;
				}
				case '44':
				{
					provincia = 'TERUEL';					
					break;
				}
				case '45':
				{
					provincia = 'TOLEDO';					
					break;
				}
				case '46':
				{
					provincia = 'VALENCIA';					
					break;
				}
				case '47':
				{
					provincia = 'VALLADOLID';					
					break;
				}
				case '48':
				{
					provincia = 'VIZCAYA';					
					break;
				}
				case '49':
				{
					provincia = 'ZAMORA';					
					break;
				}
				case '50':
				{
					provincia = 'ZARAGOZA';
					break;
				}
				default: break;		
			}
			var query = "select municipio_nombre from cp_municipios where  codigo_postal = '" + codpostal + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			if(dataset.getValue(1,1)) poblacion = dataset.getValue(1,1);
		}
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 *
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"42D48469-5CAA-46D1-A76B-1736D67BD745"}
 */
function btn_CD(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing())
	{
		if(certifdigital)
		{ 
			var msg = "¿Desea borrar de la Base de Datos este Certificado?"
        	var methd = 'forms.dlg_ParametroAplicacionGC.BorradoCD()'
        	globals.GCshowQuestionDialog(msg,methd,'No','Si',null,null) 
		}
		else
		{
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT )
			{
				BtnUpload(event) 
			}
			else
			{
				onActionStreamFileToServer(event) 
			}
		}
	}	
}

/**
*
* @SuppressWarnings(deprecated)
*
 *
 *
 *
 * @properties={typeid:24,uuid:"1115014C-24D9-4B7F-8FC8-AB9EC6DFA406"}
 */
function BorradoCD()
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		certifdigital = null	
		name_certifdigital = null	
		clave_certifdigital = null
		//databaseManager.saveData()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"3872CFFC-809B-4FCF-BEE0-E86CE433023A"}
 */
function BtnUpload(event) 
{
	var startdir = null//gcfechalimite_usuarios.startdirectory;
	if(!startdir) startdir = null;
	plugins.file.showFileOpenDialog( 1, startdir, false, new Array("p12 and pfx","p12","pfx"), uploadCallbackFunction, 'Seleccione certificado' );
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"A6EF675A-495A-4121-BC29-511440C1A653"}
 */
function onActionStreamFileToServer(event) 
{
	var fromServer = false;
	var subFolder = "/";
	// initialize the progress state
	// validate the relative path if provided
	if(subFolder)
	{
		var startdir = contafechalimite_usuarios.startdirectory;
		if(!startdir) startdir = null;
		var currentFile = plugins.file.showFileOpenDialog( 1, startdir, false,new Array("p12 and pfx","p12","pfx"), null, 'Seleccione certificado' );
		if (currentFile) 
		{
			if(subFolder)
			{
				var rawData = plugins.file.readFile(currentFile)
				certifdigital = rawData
				name_certifdigital = currentFile.getName();
		        // Save any unsaved data
		        //databaseManager.saveData();
				
			}
			
		}
	}
}

/**
	* @param {plugins.file.JSFile} _oFile
	*
	 *
	 *
 *
 * @properties={typeid:24,uuid:"C8052054-CE31-4F94-9F7E-5F5DFFCF9136"}
 */
function uploadCallbackFunction(_oFile) {
	    // Streaming the file to the server and call the callback method when this is done
	    plugins.file.streamFilesToServer(_oFile, doImportFile);
		
	}

/**
* @param {plugins.file.JSFile} _oFile
*
*
*
*
 * @properties={typeid:24,uuid:"BFCD7689-7207-4CF2-AAEB-C12808C28DDA"}
 */
function doImportFile(_oFile) {
	    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
	    var NombreFichero = _oFile.getName()
		NombreFichero = globals.GCQuitarCaracteresEspeciales(NombreFichero)		
		var RutaFichero =  _oFile;
		if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT )
		{
			var rutapred = plugins.file.getDefaultUploadLocation()
		    _oFile = rutapred + '/' +NombreFichero//_oFile.getName();
			RutaFichero = _oFile
		}
		else
		{
			_oFile = RutaFichero
		}

	    //
	    // Use BufferedReader so we don't have to read the whole file into memory
	    //
	    var _oFR = new Packages.java.io.FileInputStream(_oFile),
	        _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
	        _oBR = new Packages.java.io.BufferedReader(_oIR),
	        _sLine = "dummy",
	        _nReadLine = 0;

	    // using a database transaction (might/will) speed things up
	    //databaseManager.startTransaction();

	    try {
	        while (_sLine) {
	            _sLine = _oBR.readLine();
	            _nReadLine++;

	            if (_sLine) {

	                // Put your processing code here
	            }
	        }
	        
	        var rawData = plugins.file.readFile(_oFile)
			certifdigital = rawData
			name_certifdigital = NombreFichero;
	        // Save any unsaved data
	        //databaseManager.saveData();

	        //
	        //do NOT forget this close! to prevent memory leaks
	        //
	        _oBR.close();

	        // Close the database transaction
	        //databaseManager.commitTransaction();
	       
	    } catch (_oErr) {
	    	_oBR.close();
	    	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
	    	{
	    		plugins.webnotificationsToastr.error("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+LOGGINGLEVEL.ERROR,'¡Error!')
				plugins.webnotificationsToastr.error("ERROR: " + _oErr+'\n'+LOGGINGLEVEL.ERROR,'¡Error!')
	    	}
			else 
			{
	        globals.GCshowErrorDialog("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+
	        						LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
	        //application.output("ERROR: " + _oFile.getName() + " at row " + _nReadLine, LOGGINGLEVEL.ERROR);
	        globals.GCshowErrorDialog("ERROR: " + _oErr+'\n'+
	        						LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
	        //application.output("ERROR: " + _oErr, LOGGINGLEVEL.ERROR);
			}
	        databaseManager.rollbackTransaction();
	    } finally {
	        //
	        // garbage collection
	        //
	        _oFR = null;
	        _oIR = null;
	        _oBR = null;
	       
	        
	    }
	}
