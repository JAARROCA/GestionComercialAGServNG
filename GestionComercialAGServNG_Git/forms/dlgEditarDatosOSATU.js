/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76C7D293-9112-442F-A097-EFBFA0217931"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"C2F921A6-3E81-4A82-A3D2-B5F30DC8F963"}
 */
function onShow() {
	// TODO Auto-generated method stub
	foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSelectedIndex())
	
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"04570D43-7B40-4298-8F63-E5C765F09111"}
 */
function btn_envioOSATU(event) {
	if(!gcparametrosaplicacion_to_parametrosaplicacion.osatu ||
	gcparametrosaplicacion_to_parametrosaplicacion.osatu == null)
	{
		globals.GCshowInfoDialog('No está habilitado el módulo OSATU. Póngase en contacto con AG Informática y Servcios.',null,'Aceptar',null,null,null)
	}
	else if(xml_enviado_osatu)
	{  
		
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Visualizar Documento';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, MenuDocu, 'media:///ver.png');
		titulo = 'Borrar Documento';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, MenuDocu, 'media:///borrado.png');
		titulo = 'Enviar Documento por EMail';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, MenuDocu, 'media:///email_icon.png');
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			menu.show(event.getSource(),236,51);				
		}
		//get the position of the last "." in the file name 
		/*var a = filename.lastIndexOf(".")*/
		//var b = "temp"
		/*var b = filename.substring(0,a)*/
		//get the 3 letter extension - INCLUDING the "."
		/*var c = filename.substring(a)*/
		//var tempFile = /*plugins.file.createFile(filename)*/plugins.file.createTempFile(b,c);
		/*var success = plugins.file.writeFile(tempFile, docupdf);
		uploadCallbackFunction2(tempFile)
		*/
	}
	else
	{
		globals.GCshowErrorDialog('No existe fichero de envío al servicio OSATU.',null,'Aceptar',null,null,null)
	}
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"72A0E69B-BFE7-4077-8D6A-57C85B43AA24"}
 */
function btn_respuestaOSATU(event) {
	if(!gcparametrosaplicacion_to_parametrosaplicacion.osatu ||
	gcparametrosaplicacion_to_parametrosaplicacion.osatu == null)
	{
		globals.GCshowInfoDialog('No está habilitado el módulo OSATU. Póngase en contacto con AG Informática y Servcios.',null,'Aceptar',null,null,null)
	}
	else if(fichero_respuesta_osatu)
	{  
		
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Visualizar Documento';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, MenuDocu2, 'media:///ver.png');
		titulo = 'Borrar Documento';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, MenuDocu2, 'media:///borrado.png');
		titulo = 'Enviar Documento por EMail';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, MenuDocu2, 'media:///email_icon.png');
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			menu.show(event.getSource(),236,51);				
		}
		//get the position of the last "." in the file name 
		/*var a = filename.lastIndexOf(".")*/
		//var b = "temp"
		/*var b = filename.substring(0,a)*/
		//get the 3 letter extension - INCLUDING the "."
		/*var c = filename.substring(a)*/
		//var tempFile = /*plugins.file.createFile(filename)*/plugins.file.createTempFile(b,c);
		/*var success = plugins.file.writeFile(tempFile, docupdf);
		uploadCallbackFunction2(tempFile)
		*/
	}
	else
	{
		globals.GCshowErrorDialog('No existe fichero de respuesta del servicio OSATU.',null,'Aceptar',null,null,null)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"4F419397-2009-4A18-A174-390296D5E935"}
 */
function MenuDocu(event){
	switch (arguments[4]) {
			case 'Visualizar Documento'.toUpperCase():
			//get the position of the last "." in the file name 
			//var a = filename.lastIndexOf(".")
			//var b = filename.substring(0,a)
			//get the 3 letter extension - INCLUDING the "."
			//var c = filename.substring(a)
			var tempFile = plugins.file.createTempFile('Envio_OSATU','xml');/*plugins.file.createFile('Envio_OSATU.xml')*//*plugins.file.createTempFile(b,c);*/
			var success = plugins.file.writeFile(tempFile, xml_enviado_osatu);
			uploadCallbackFunction2(tempFile)
			break;
		case 'Borrar Documento'.toUpperCase():
			var msg = "¿Desea borrar de la Base de Datos este documento?"
			var methd = 'forms.dlgEditarDatosOSATU.BorradoPDF()'
			globals.GCshowQuestionDialog(msg,methd,'No','Si',null,null)
			break;
		case 'Enviar Documento por EMail'.toUpperCase():
			var query = 'select [ServidorCorreoSMTP] from [ParametrosAplicacion]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var SMTP = dataset.getValue(1,1)
			if(!SMTP)
			{
				globals.CONTAshowErrorDialog('No está definido el Servidor de Correo SMTP en los Parametros de la Aplicación.',null,'Aceptar',null,null,null)
			}
			else
			{
				query = 'select imde_us from [usuarios] WHERE [cod_us] = ' + globals.GClogin_usuario
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var EmailFrom = dataset.getValue(1,1)
				if(EmailFrom == null || EmailFrom == '')
				{
					globals.GCshowErrorDialog('No está definida la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
				}
				else
				{				
					globals.GCFormulario = 'Envio_OSATU'
					globals.GCshowDialogEnvioMail('Envio Documento por EMail',1,null,null,null,null,null,null,null,null)
				}
			}
			break;
		default: break;
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 *
 *
 * @properties={typeid:24,uuid:"DF332F0A-5BB7-4243-8BEC-12334F92308F"}
 */
function MenuDocu2(event){
	switch (arguments[4]) {
			case 'Visualizar Documento'.toUpperCase():
			//get the position of the last "." in the file name 
			//var a = filename.lastIndexOf(".")
			//var b = filename.substring(0,a)
			//get the 3 letter extension - INCLUDING the "."
			//var c = filename.substring(a)
			var tempFile = plugins.file.createTempFile('Respuesta_OSATU','xml');/*plugins.file.createFile('Envio_OSATU.xml')*//*plugins.file.createTempFile(b,c);*/
			var success = plugins.file.writeFile(tempFile, fichero_respuesta_osatu);
			uploadCallbackFunction3(tempFile)
			break;
		case 'Borrar Documento'.toUpperCase():
			var msg = "¿Desea borrar de la Base de Datos este documento?"
			var methd = 'forms.dlgEditarDatosOSATU.BorradoPDF2()'
			globals.GCshowQuestionDialog(msg,methd,'No','Si',null,null)
			break;
		case 'Enviar Documento por EMail'.toUpperCase():
			var query = 'select [ServidorCorreoSMTP] from [ParametrosAplicacion]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var SMTP = dataset.getValue(1,1)
			if(!SMTP)
			{
				globals.GCshowErrorDialog('No está definido el Servidor de Correo SMTP en los Parametros de la Aplicación.',null,'Aceptar',null,null,null)
			}
			else
			{
				query = 'select imde_us from [usuarios] WHERE [cod_us] = ' + globals.GClogin_usuario
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var EmailFrom = dataset.getValue(1,1)
				if(EmailFrom == null || EmailFrom == '')
				{
					globals.GCshowErrorDialog('No está definida la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
				}
				else
				{				
					globals.GCFormulario = 'Respuesta_OSATU'
					globals.GCshowDialogEnvioMail('Envio Documento por EMail',1,null,null,null,null,null,null,null,null)
				}
			}
			break;
		default: break;
	}
}

/**
*
* @SuppressWarnings(deprecated)
*
 *
 *
 * @properties={typeid:24,uuid:"83B675FC-71BA-4C1A-AF02-14719B3B19C4"}
 */
function BorradoPDF()
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		forms.FrmFacturasGC.xml_enviado_osatu = null	
		
		databaseManager.saveData(forms.FrmFacturasGC.foundset)
	}
}

/**
*
* @SuppressWarnings(deprecated)
*
 *
 *
 *
 * @properties={typeid:24,uuid:"17C96A54-632A-4E7F-8D20-5F8CBCAA72E2"}
 */
function BorradoPDF2()
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		forms.FrmFacturasGC.fichero_respuesta_osatu = null	
		
		databaseManager.saveData(forms.FrmFacturasGC.foundset)
	}
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"4FE4A925-ADC1-4C4C-9AF7-797C5EB34CF2"}
 */
function uploadCallbackFunction2(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
   var monitor = plugins.file.streamFilesToServer(_oFile, Visualizar);
	
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 * @properties={typeid:24,uuid:"E7F3DC93-CB12-41EF-98B0-934E2B321987"}
 */
function uploadCallbackFunction3(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
   var monitor = plugins.file.streamFilesToServer(_oFile, Visualizar2);
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile} _oFile
 *
 *
 *
 * @properties={typeid:24,uuid:"D032BEE4-9627-4DBE-85DE-FDAAEA10123A"}
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 */
function Visualizar(_oFile)
{
	var ext = _oFile.getContentType()
	if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
	{
		var sw = 0;
		//var name = _oFile.getName();
		//var vFilePath = plugins.file.getDefaultUploadLocation()  +'\\'+ name;
		//var vLocalFilePath = 'C:\\tmp\\'+ _oFile.getName();
		//var s = plugins.UserManager.copyFileFromServer(vFilePath, vLocalFilePath, true)
		
		//Creates a temporary file (will be deleted after application shutdown)
		var filename = 'Envio_OSATU.xml';
		//get the position of the last "." in the file name 
		var a = filename.lastIndexOf(".")
		var b = filename.substring(0,a)
		//get the 3 letter extension - INCLUDING the "."
		var c = filename.substring(a)

		//create a temporary file that will be auto-deleted by Servoy when client is exited
		var fname = plugins.file.createTempFile(b,c)

		//write the binary data out to disk at the temporary file location
		plugins.file.writeFile(fname,xml_enviado_osatu); 
		
		var vLocalFilePath = fname.getAbsolutePath();
		//windows
        if (utils.stringMiddle(application.getOSName(), 1, 7) == "Windows") {
        	sw = 1;
            var success = application.executeProgram('rundll32', ['url.dll,FileProtocolHandler', vLocalFilePath])
        }
        //FreeBSD or Linux
        else if (utils.stringMiddle(application.getOSName(), 1, 7) == "FreeBSD" || utils.stringMiddle(application.getOSName(), 1, 5) == "Linux") {
        	sw = 1;
            success = application.executeProgram('mozilla', [vLocalFilePath])
        }
        //Mac OSX
        else if (application.getOSName().match("Mac")) {
        	sw = 1;
            success = application.executeProgram('open', [vLocalFilePath])
        }
        if(sw == 1)
        {
        	//var msg = "¿Desea borrar de la Base de Datos este documento?"
        	//var methd = 'forms.lst_AsientoContable_Lineas.BorradoPDF()'
        	//globals.CONTAshowQuestionDialog(msg,methd,'No','Si',null,null)
        }
	}
	else
	{
		if(ext == null) ext='text/plain'
			else if(ext == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || ext == 'application/vnd.ms-excel' ||
					ext == 'application/vnd.ms-excel.sheet.binary.macroenabled.12') ext = 'application/msexcel'
			else if(ext == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') ext = 'application/msword'
		if(ext == 'application/msexcel' || ext == 'application/msword')
		{
			var serverURL = application.getServerURL() 
			application.showURL(serverURL + "uploads/" + _oFile.getName());
			//plugins.WebClientUtils.executeClientSideJS('location.reload();');
			//msg = "¿Desea borrar de la Base de Datos este documento?"
        	//methd = 'forms.lst_AsientoContable_Lineas.BorradoPDF()'
        	//globals.CONTAshowQuestionDialog(msg,methd,'No','Si',null,null)   
		}
		else
		{
			serverURL = application.getServerURL() 
		    application.showURL(serverURL + "uploads/" + _oFile.getName()+'?nodebug=true','_blank','height=600,width=800,status=yes,toolbar=no,menubar=no,location=no')
			//plugins.WebClientUtils.executeClientSideJS('location.reload();');
			//msg = "¿Desea borrar de la Base de Datos este documento?"
        	//methd = 'forms.lst_AsientoContable_Lineas.BorradoPDF()'
        	//globals.CONTAshowQuestionDialog(msg,methd,'No','Si',null,null)
			/*forms.dlg_pdfDocumentViewer.htmlString = '<html>'+
														'<body>'+
														"</body>"+
														'<div align="center";>'+
															'<embed width="825" height="525" name="plugin" src="../uploads/'+_oFile.getName()+'" type="'+ext+'">'+
														'</div>'+
													 '</html>'	
													
			var result = forms.dlg_pdfDocumentViewer.foundset.selectRecord(id)
			var fsCount = databaseManager.getFoundSetCount(forms.dlg_pdfDocumentViewer.foundset);
			while(result==false)
			{
				if(fsCount == forms.dlg_pdfDocumentViewer.foundset.getSize())
				{
					return;
				}
				forms.dlg_pdfDocumentViewer.foundset.setSelectedIndex(forms.dlg_pdfDocumentViewer.foundset.getSize());
				result = forms.dlg_pdfDocumentViewer.foundset.selectRecord(id);
			}										       								
			      								
			globals.CONTAshowDialogPDFViewer(_oFile.getName(), 1, null, null, true, null, null, null, null, null);
			plugins.WebClientUtils.executeClientSideJS('location.reload();');*/
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile} _oFile
 *
 *
 *
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"DA02419A-84D6-4D49-9A9D-C4DD64364A06"}
 */
function Visualizar2(_oFile)
{
	var ext = _oFile.getContentType()
	if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
	{
		var sw = 0;
		//var name = _oFile.getName();
		//var vFilePath = plugins.file.getDefaultUploadLocation()  +'\\'+ name;
		//var vLocalFilePath = 'C:\\tmp\\'+ _oFile.getName();
		//var s = plugins.UserManager.copyFileFromServer(vFilePath, vLocalFilePath, true)
		
		//Creates a temporary file (will be deleted after application shutdown)
		var filename = 'Respuesta_OSATU.xml';
		//get the position of the last "." in the file name 
		var a = filename.lastIndexOf(".")
		var b = filename.substring(0,a)
		//get the 3 letter extension - INCLUDING the "."
		var c = filename.substring(a)

		//create a temporary file that will be auto-deleted by Servoy when client is exited
		var fname = plugins.file.createTempFile(b,c)

		//write the binary data out to disk at the temporary file location
		plugins.file.writeFile(fname,fichero_respuesta_osatu); 
		
		var vLocalFilePath = fname.getAbsolutePath();
		//windows
        if (utils.stringMiddle(application.getOSName(), 1, 7) == "Windows") {
        	sw = 1;
            var success = application.executeProgram('rundll32', ['url.dll,FileProtocolHandler', vLocalFilePath])
        }
        //FreeBSD or Linux
        else if (utils.stringMiddle(application.getOSName(), 1, 7) == "FreeBSD" || utils.stringMiddle(application.getOSName(), 1, 5) == "Linux") {
        	sw = 1;
            success = application.executeProgram('mozilla', [vLocalFilePath])
        }
        //Mac OSX
        else if (application.getOSName().match("Mac")) {
        	sw = 1;
            success = application.executeProgram('open', [vLocalFilePath])
        }
        if(sw == 1)
        {
        	//var msg = "¿Desea borrar de la Base de Datos este documento?"
        	//var methd = 'forms.lst_AsientoContable_Lineas.BorradoPDF()'
        	//globals.CONTAshowQuestionDialog(msg,methd,'No','Si',null,null)
        }
	}
	else
	{
		if(ext == null) ext='text/plain'
			else if(ext == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || ext == 'application/vnd.ms-excel' ||
					ext == 'application/vnd.ms-excel.sheet.binary.macroenabled.12') ext = 'application/msexcel'
			else if(ext == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') ext = 'application/msword'
		if(ext == 'application/msexcel' || ext == 'application/msword')
		{
			var serverURL = application.getServerURL() 
			application.showURL(serverURL + "uploads/" + _oFile.getName());
			//plugins.WebClientUtils.executeClientSideJS('location.reload();');
			//msg = "¿Desea borrar de la Base de Datos este documento?"
        	//methd = 'forms.lst_AsientoContable_Lineas.BorradoPDF()'
        	//globals.CONTAshowQuestionDialog(msg,methd,'No','Si',null,null)   
		}
		else
		{
			serverURL = application.getServerURL() 
		    application.showURL(serverURL + "uploads/" + _oFile.getName()+'?nodebug=true','_blank','height=600,width=800,status=yes,toolbar=no,menubar=no,location=no')
			//plugins.WebClientUtils.executeClientSideJS('location.reload();');
			//msg = "¿Desea borrar de la Base de Datos este documento?"
        	//methd = 'forms.lst_AsientoContable_Lineas.BorradoPDF()'
        	//globals.CONTAshowQuestionDialog(msg,methd,'No','Si',null,null)
			/*forms.dlg_pdfDocumentViewer.htmlString = '<html>'+
														'<body>'+
														"</body>"+
														'<div align="center";>'+
															'<embed width="825" height="525" name="plugin" src="../uploads/'+_oFile.getName()+'" type="'+ext+'">'+
														'</div>'+
													 '</html>'	
													
			var result = forms.dlg_pdfDocumentViewer.foundset.selectRecord(id)
			var fsCount = databaseManager.getFoundSetCount(forms.dlg_pdfDocumentViewer.foundset);
			while(result==false)
			{
				if(fsCount == forms.dlg_pdfDocumentViewer.foundset.getSize())
				{
					return;
				}
				forms.dlg_pdfDocumentViewer.foundset.setSelectedIndex(forms.dlg_pdfDocumentViewer.foundset.getSize());
				result = forms.dlg_pdfDocumentViewer.foundset.selectRecord(id);
			}										       								
			      								
			globals.CONTAshowDialogPDFViewer(_oFile.getName(), 1, null, null, true, null, null, null, null, null);
			plugins.WebClientUtils.executeClientSideJS('location.reload();');*/
		}
	}
}
