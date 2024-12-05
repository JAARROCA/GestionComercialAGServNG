/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7F41ABAD-00CD-48FF-9146-41AEAC99AB66"}
 */
function btn_Salir(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) {
		if(gcparametrosaplicacion_to_parametrosaplicacion && gcparametrosaplicacion_to_parametrosaplicacion.empresa) var nombreempresa = gcparametrosaplicacion_to_parametrosaplicacion.empresa;
		else nombreempresa = 'GestionComercialAGServNG';
		/*var custom_dlg = scopes.svyCustomDialogs.createCustomDialog(
		'custom_servoy_theme_properties.less',
		nombreempresa,
		'<html>¿Desea realmente salir de la Alicación?<br>',
		scopes.svyCustomDialogs.DEFAULT_ICON.INFO,
		['No', 'Si']);*/	
		
		var custom_dlg = scopes.svyCustomDialogs.showQuestionDialog(nombreempresa,'¿Desea realmente salir de la Aplicación?','Si','No')
		if(custom_dlg == "Si") 
		{
			//application.closeAllWindows();
			//controller.show(null);
			//scopes.svySecurity.logout();
			application.exit();
		}
	}
	else globals.GCshowDialogSalir('Salir de la Aplicación', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	//}
	//else
	//{
	//	var respuesta = plugins.dialogs.showQuestionDialog('Salir de Gestión ERP','¿Desea terminar la Sesión?','Si','No')
	//}
	//if(respuesta =='Si')
	//{
	//	application.exit();
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"201EFFA4-0DF2-405A-98C8-3A7656CC00AD"}
 */
function btnDatosConexión(event) {
	// TODO Auto-generated method stub
	/*forms.dialog_DatosConexionGC.html_datosconexion = null
	var HTML = '<html><body>'
	*/
	var query = "SELECT FechaConex FROM GESTIONCOMERCIALAG.dbo.ControlAcceso "+
				"WHERE cod_us = "+globals.GClogin_usuario+" ORDER BY FechaConex DESC"
	var dataset = databaseManager.getDataSetByQuery('conexiongestioncomercialag', query, null, 2)
	var conexactual = utils.dateFormat(dataset.getValue(1,1),'dd/MM/yyyy HH:mm')
	var ultconex = utils.dateFormat(dataset.getValue(2,1),'dd/MM/yyyy HH:mm')
	if(ultconex == null || ultconex == '') ultconex = conexactual
	/*HTML += '<table><tr><td style="padding:0 15px 0 15px;">Última: '+ultconex+'</td></tr>'+
	'<tr><td style="padding:0 15px 0 15px;">Actual: '+conexactual+'</td></tr></table>'
	HTML += '</table>'+'</body>\n'	
	
	
	
	HTML += '</table>'+'</body>\n' //+'</html>'		
	forms.dialog_DatosConexionGC.html_datosconexion = HTML
		
		
	globals.GCshowDialogDatosConexion(null,1,null,null,null,null,null,null,null,null)
	*/
	var popUpObj = plugins.window.createPopupMenu();
	popUpObj.addMenuItem("Última: "+ultconex, null, null);
	popUpObj.addMenuItem("Actual: "+conexactual, null, null);
	popUpObj.addSeparator();
	
	if (event.getSource()) {
		// display the popup over the component which is the source of the event
		popUpObj.show(event.getSource(),25,0);				
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD187090-01FB-49FF-9CDC-9E1D8418F17D"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	plugins.window.createShortcut('control A', globals.handle_shortCutGC);
	plugins.window.createShortcut('ESCAPE', globals.handle_shortCutGC);
	plugins.window.createShortcut('control Z', globals.handle_shortCutGC);
	plugins.window.createShortcut('control shift A', globals.handle_shortCutGC);
	plugins.window.createShortcut('control shift C', globals.handle_shortCutGC);
	if(new Date() < new Date(2021,10,11)) plugins.window.createShortcut('control alt B', globals.handle_shortCutGC);
	//plugins.window.createShortcut('control alt N', globals.handle_shortCutGC);
	
	
	if(globals.GCNombreUsuario == 'DEMO')
	{
		elements.lblnota.visible = true;
	}
	else
	{
		elements.lblnota.visible = false;
	}
		
	/*var query = 'select Empresa from ParametrosAplicacion where NºEmpresa = 1'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	globals.GCNombreEmpresa = dataset.getValue(1, 1);
	*/
	globals.GCNombreEmpresa = gcparametrosaplicacion_to_parametrosaplicacion.empresa
	
	sub_setPreviewLabels()
	if(globals.GCfoto_usuario)
	{
		elements.image_logoc.visible = true;
	}
	else
	{
		elements.image_logoc.visible = false;
	}	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5D500FA2-36E1-42FD-9007-776F2BBE3CBB"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	if(!globals.GClogin_usuario) globals.btn_SalirGC(event)
	onLoad(event)
	globals.GCClave=null
	forms.frm_nav_main_principalGC.elements.ImagNotas.visible = false;
	forms.frm_nav_main_principalGC.elements.ImagNotas.enabled = false;
	forms.frm_nav_main_principalGC.elements.Notas.visible = false;
	forms.frm_nav_main_principalGC.elements.Notas.enabled = false;
	forms.frm_nav_main_principalGC.elements.btn_menuNotas.visible = false;
	forms.frm_nav_main_principalGC.elements.btn_menuNotas.enabled = false;
	
	
	var query = "select fechalimite from usuarios WHERE nom_us = '" + globals.GCNombreUsuario+"'"
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var FechaLimite = dataset.getValue(1,1)		
	
	//var FechaLimite = gcfechalimite_usuarios.fechalimite;
	var today = new Date();
	
	if(FechaLimite < today)
	{
		globals.GCshowDialogRenovacion('Expiración Fecha Límite Aplicación', 1, null, null, true, null, null, null, null, null);
	}
	else
	{
		if(firstShow)
		{	
			/*if(globals.GCNombreUsuario == 'DEMO')	
			{
				var vServer = plugins.UserManager.Client();
				var ip = vServer.ipAddress;
				var host = vServer.hostAddress;
				var hname = vServer.hostName;
				
				var authorization = new Array();
				authorization[0] = 'mail.smtp.host=smtp.agissa.com';
				authorization[1] = 'mail.smtp.auth=true';
				//authorization[2] = 'mail.smtp.starttls.enable=true';
				//authorization[3] = 'mail.smtp.port=465';
				authorization[2] = 'mail.smtp.username=javiarroyoss@agissa.com';
				authorization[3] = 'mail.smtp.password=AGag2424';
			      
				var attachment = new Array()
				// read the file into a file object
				//var rawData = plugins.file.readFile(filename)
			
				// convert the file to a binary attachment
				//var myFile = plugins.mail.createBinaryAttachment('test.xls', rawData)
			
				// put the binary file into an array in preparation for the email plugin
								
								
						var emailSend = 'javiarroyoss@agissa.com';
						var emailFrom = 'javiarroyoss@agissa.com';
						var emailCC = null;
						var emailBCC = null;
						var emailSubject = 'Usuario '+globals.GCNombreUsuario+' conectado a GestionComercial_AG_Web';
						var emailMsg = 'El Usuario '+globals.GCNombreUsuario+' se ha conectado a las '+utils.dateFormat(globals.GCHoraConex,'dd/MM/yyyy HH:mm:ss')+
										'\n\n'+ip+' '+host+' '+hname+
										'\n\n'+globals.GCconex;
						attachment = null;
					
				
				
				plugins.mail.sendMail(emailSend, emailFrom, emailSubject, emailMsg, emailCC, emailBCC, attachment, authorization );
			}*/
			globals.GCdayStartDate = new Date(new Date().getFullYear(), new Date().getMonth(),
				new Date().getDate(), 00, 00, 00, 00);
			globals.GCdayEndDate = new Date(globals.GCdayStartDate.getFullYear(), globals.GCdayStartDate.getMonth(),
				globals.GCdayStartDate.getDate(), 23, 59, 59, 59);
			
			query = "SELECT a.Calendario_idx,a.IdUsuario,a.Asunto,a.Ubicacion"+
			",a.Observaciones,a.Start_Datetime,a.End_Datetime"+
			",a.Categoria "+
			"FROM tbCalendarioUsuarioLinea as a "+
			"WHERE " +
			"(a.idusuario = ? AND (a.done IS NULL OR a.done != 1)) " +
			"AND " +
			"(a.start_datetime >= ? " +
			"AND " +
			"a.start_datetime < ? )" +
			" OR (a.start_datetime < ? AND a.end_datetime > ?  AND a.idusuario = ?) " +
			"ORDER BY " +
			"a.start_datetime ASC";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, 
				query, [globals.GClogin_usuario,globals.GCdayStartDate, globals.GCdayEndDate, globals.GCdayStartDate, globals.GCdayStartDate , 
				globals.GClogin_usuario], 10000);
			
			var rows = dataset.getMaxRowIndex()
			
			if(rows > 0)
			{
				globals.GCshowDialogAgendaUsuarioLineas('Agenda / Calendario '+ utils.dateFormat(globals.GCdayStartDate,'dd-MM-yyyy'), 1, null, null, true, null, null, null, null, null);
			}
			
		}	
		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CA6EBA27-FEC3-487D-B8C8-5B371B1E3BE7"}
 */
function btn_presupuestos(event) {
	// TODO Auto-generated method stub
	/*var query = 'select taop_002 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Ofertas = dataset.getValue(1, 1)*/
	var Ofertas = gcfechalimite_usuarios.taop_002;
	if(Ofertas == '1')
	{
		globals.GCnav_search = null
		globals.GCnav_search2 = null
				
		forms.lst_solution_navigation_presupuestosGC.controller.setSelectedIndex(1) 
			
				//change tabs
		forms.lst_solution_navigation_presupuestosGC.btn_goForm();
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"154965DE-D8D3-4873-BC4E-C500FBDA19A6"}
 */
function btn_albaranes(event) {
	// TODO Auto-generated method stub
	/*var query = 'select taop_003 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Expediciones = dataset.getValue(1, 1)*/
	var Expediciones = gcfechalimite_usuarios.taop_003;
	if(Expediciones == '1')
	{
		globals.GCnav_search = null
		globals.GCnav_search2 = null
		globals.GCFormulario = null
				
		forms.lst_solution_navigation_albaranGC.controller.setSelectedIndex(1) 
			
				//change tabs
		forms.lst_solution_navigation_albaranGC.btn_goForm();
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"73168F7C-9CE4-4DFE-8A9A-9CA20147E178"}
 */
function btn_facturas(event) {
	// TODO Auto-generated method stub
	/*var query = 'select taop_004 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Facturacion = dataset.getValue(1, 1)*/
	var Facturacion = gcfechalimite_usuarios.taop_004;
	if(Facturacion == '1')
	{
		globals.GCnav_search = null
		globals.GCnav_search2 = null
		globals.GCFormulario = null
				
		forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) 
			
				//change tabs
		forms.lst_solution_navigation_facturasGC.btn_goForm(event);	
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"72DF65C6-DE38-461E-BEEF-56AB941DBD73"}
 */
function btn_facturasCOMPRAS(event) {
	// TODO Auto-generated method stub
	/*var query = 'select taop_004 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Facturacion = dataset.getValue(1, 1)*/
	var Facturacion = gcfechalimite_usuarios.taop_005;
	if(Facturacion == '1')
	{
		globals.GCnav_search = null
		globals.GCnav_search2 = null
		globals.GCFormulario = null
				
		forms.lst_solution_navigation_comprasGC.controller.setSelectedIndex(1) 
			
				//change tabs
		forms.lst_solution_navigation_comprasGC.btn_goForm(event);	
		forms.lst_solution_navigation_comprasGC.controller.setSelectedIndex(3) 

		//change tabs
		forms.lst_solution_navigation_comprasGC.btn_goForm(event);	
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"971F9428-C4A6-42B2-90C5-DB5B6F6F2234"}
 */
function btn_Balance(event) {
	// TODO Auto-generated method stub
	forms.FrmBalance.controller.show()
}

/**
*
*
*
 *
 * @properties={typeid:24,uuid:"9A9DD4B9-AE80-4F99-9826-4F2A10475BF2"}
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
	if(!globals.GCfoto_usuario)
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
*
*
 *
 * @properties={typeid:24,uuid:"71DD9237-81C3-4EC0-A146-0AD954FD6A9B"}
 */
function product_image_dataChange() {
	databaseManager.setAutoSave(false);
	
	if (globals.GCsmart_chg == 0) {
		var rawData = globals.GCfoto_usuario;

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
				globals.GCfoto_usuario = img_raw.resize(90,90);
			}
			else
			{
				//there will be no display
				globals.GCfoto_usuario = null;
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
 *
 * @properties={typeid:24,uuid:"52EB06E6-BDD4-498F-BEB7-E749C4823060"}
 */
function btn_editarperfil(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) globals.GCcancelEditing()
	
	if(globals.GClogin_usuario && globals.GCNombreUsuario)
	{
		if(globals.GCNombreUsuario != 'DEMO' && globals.GCNombreUsuario != 'ADMINISTRADOR')
		{
			var query = "select id from [usuarios] where [cod_us] =" + globals.GClogin_usuario;
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var uid = dataset.getValue(1,1);
	
			forms.dlg_EditarPerfilUsuarioGC.foundset.loadAllRecords()
			var result = forms.dlg_EditarPerfilUsuarioGC.foundset.selectRecord(uid)
			
			var fsCount = databaseManager.getFoundSetCount(forms.dlg_EditarPerfilUsuarioGC.foundset);
			while(result==false)
			{
				if(fsCount == forms.dlg_EditarPerfilUsuarioGC.foundset.getSize()) return;
				forms.dlg_EditarPerfilUsuarioGC.foundset.setSelectedIndex(forms.dlg_EditarPerfilUsuarioGC.foundset.getSize());
				result = forms.dlg_EditarPerfilUsuarioGC.foundset.selectRecord(uid);
			}
	
			//start a transaction
			if(!globals.GCisEditing()) globals.GCstartEditing()
			
			//forms.dlg_DatosFiscales.elements.idcodigo.readOnly = true
			//setup the method to execute when the dialog closes
			globals.GCdialog_performMethod = null
			globals.GCRegistroNuevo = null;
			
			//show the "fake" dialog
			globals.GCshowDialogEditarPerfilUsuario('Editar Perfil Usuario', 3, null, null, true, null, null, null, null, null);
		}
		else
		{
			globals.GCshowErrorDialog('El usuario '+globals.GCNombreUsuario+' no tiene permiso para editar perfil', null, null, null, null, null)
		}
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
 * @properties={typeid:24,uuid:"36C87F29-E83C-4531-ACBF-2AECF1F25DD8"}
 */
function btnverifactudeclaracionresponsable(event) {
	// TODO Auto-generated method stub
	application.showURL('https://agissa.com/documents/Declaracion_medidas_antifraude_Con_firma_digital.pdf','_blank');
}
