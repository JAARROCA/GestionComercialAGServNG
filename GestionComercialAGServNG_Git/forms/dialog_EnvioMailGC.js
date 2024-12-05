/**
 * @properties={typeid:24,uuid:"AD977570-80EB-4BB3-B4BB-39C00B797C59"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	
	application.getWindow('Envio Mail').hide();
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"A1DC8A80-CFF3-45A6-A602-548C350BECAD"}
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	try
	{
		/*if(forms.dlgEnvioMailGC.EmailTo){ 
			var ArrEmailTo = forms.dlgEnvioMailGC.EmailTo.split(',');
			var rows = ArrEmailTo.length;
			for(var i=0;i<rows;i++)
			{
				if(utils.stringLeft(ArrEmailTo[i],1) != '.' ||
				utils.stringPatternCount(ArrEmailTo[i],",") == 0
				&& utils.stringPatternCount(ArrEmailTo[i]," ") == 0
				&& utils.stringPatternCount(ArrEmailTo[i],"@") == 1
				&& utils.stringPatternCount(ArrEmailTo[i],".") >= 1)
				{
					var validEmailTo = 1;
				}
				else validEmailTo = 0;				
			}
		}
		
		if(forms.dlgEnvioMailGC.EmailFrom) {
			if(utils.stringLeft(forms.dlgEnvioMailGC.EmailFrom,1) != '.' ||
			utils.stringPatternCount(forms.dlgEnvioMailGC.EmailFrom,",") == 0
			&& utils.stringPatternCount(forms.dlgEnvioMailGC.EmailFrom," ") == 0
			&& utils.stringPatternCount(forms.dlgEnvioMailGC.EmailFrom,"@") == 1
			&& utils.stringPatternCount(forms.dlgEnvioMailGC.EmailFrom,".") >= 1)
			{
				var validEmailFrom = 1;
			}
			else validEmailFrom = 0;
		}*/
		
		
		if(!forms.dlgEnvioMailGC.EmailFrom)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta  EMail del remitente.','¡Error!')
			else globals.GCshowErrorDialog('Falta  EMail del remitente.', null, 'Aceptar', null, null, null)
		}
		/*else if(forms.dlgEnvioMailGC.EmailFrom && validEmailFrom == 0)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Dirección de correo electrónico del remitente no válida.','¡Error!')
			else globals.GCshowErrorDialog('Dirección de correo electrónico del remitente no válida.', null, 'Aceptar', null, null, null)
		}*/
		else if(!forms.dlgEnvioMailGC.EmailTo)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta  EMail del destinatario.','¡Error!')
			else globals.GCshowErrorDialog('Falta  EMail del destinatario.', null, 'Aceptar', null, null, null)
		}
		/*else if(forms.dlgEnvioMailGC.EmailTo && validEmailTo == 1) {			
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Dirección de correo electrónico de destinatario no válida.','¡Error!')
			else globals.GCshowErrorDialog('Dirección de correo electrónico de destinatario no válida.', null, 'Aceptar', null, null, null)
		}*/
		else if(!forms.dlgEnvioMailGC.EmailAsunto)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir el asunto del Email.','¡Error!')
			else globals.GCshowErrorDialog('Falta introducir el asunto del Email.', null, 'Aceptar', null, null, null)
		}
		else
		{
			var emailSend = forms.dlgEnvioMailGC.EmailTo
			var emailFrom = forms.dlgEnvioMailGC.EmailFrom;
			var emailCC = forms.dlgEnvioMailGC.EmailCC;
			var emailBCC = forms.dlgEnvioMailGC.EmailCCO;
			var emailSubject = forms.dlgEnvioMailGC.EmailAsunto;
			var emailMsg = forms.dlgEnvioMailGC.EmailTexto;
			var attachment = new Array();
			attachment = forms.dlgEnvioMailGC.EmailAdjuntar;
			var nomattachment = forms.dlgEnvioMailGC.Adjuntar;		 
			
			application.getWindow('Envio Mail').hide();
			globals.GCenableBgElements();
			
			var query = 'select servidorcorreosmtp from ParametrosAplicacion'
			//var ds = controller.getDataSource().split('/');
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var smtp = dataset.getValue(1, 1)
			
			query = 'select nuser_us,passw_us from usuarios WHERE cod_us = ' + globals.GClogin_usuario
			//ds = controller.getDataSource().split('/');
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var Usuario = dataset.getValue(1, 1)
			var Password = dataset.getValue(1, 2)
			
			if(Password != null)
			{
				Password = globals.GCcryptString(Password.toString(),globals.GCcryptKey,'D');
			}
				
			
				// Get the filename of the file we just saved to disk
				
				//var filename = file.getAbsoluteFile();
			
				// here's where the emailing starts
			
				var authorization = new Array();
				if(smtp == 'smtp.gmail.com' && utils.stringRight(forms.dlgEnvioMailGC.EmailFrom,9)== 'gmail.com')
				{
					authorization[0] = 'mail.smtp.host=smtp.gmail.com';
					//authorization[0] = 'mail.smtp.host='+smtp;
					authorization[1] = 'mail.smtp.auth=true';
					//authorization[2] = 'mail.smtp.starttls.enable=true';
					authorization[2] = 'mail.smtp.port=587';
					authorization[3] = 'mail.smtp.username='+Usuario;
					authorization[4] = 'mail.smtp.password='+Password;
					authorization[5] = 'mail.smtp.starttls.enable=true';
					authorization[6] = 'mail.smtp.auth=true';
					authorization[7] = 'mail.transport.protocol=smtp';
					authorization[8] = 'security.require-ssl=true';										
				}
				else
				{
					authorization[0] = 'mail.smtp.host='+smtp;
					authorization[1] = 'mail.smtp.auth=true';
					authorization[2] = 'mail.smtp.port=587';
					authorization[3] = 'mail.smtp.username='+Usuario;
					authorization[4] = 'mail.smtp.password='+Password.toString();
					authorization[5] = 'mail.smtp.starttls.enable=true';
					//if(utils.stringRight(forms.dlgEnvioMailGC.EmailFrom,9)== 'gmail.com') authorization[5] = 'mail.smtp.starttls.enable=true';
				} 
				//var attachment = new Array()
				// read the file into a file object
				//var rawData = plugins.file.readFile(filename)
			
				// convert the file to a binary attachment
				//var myFile = plugins.mail.createBinaryAttachment('test.xls', rawData)
			
				// put the binary file into an array in preparation for the email plugin
												
					
				
				var success = plugins.mail.sendMail(emailSend, emailFrom, emailSubject, emailMsg, emailCC, emailBCC, attachment, authorization );
				  
				// What was the result of trying to send the email
				if(success)
				{
					if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.success('Email enviado satisfactoriamente','¡Envío!')
					else globals.GCshowInfoDialog('Email enviado satisfactoriamente', null, 'Aceptar', null, null, null)
					//plugins.dialogs.showInfoDialog('Envio Email', 'Email enviado satisfactoriamente','OK');
					if(!forms.FrmFacturasGC.emailenviado)
					{
						var fra = forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa+'.pdf'
						
						if(nomattachment && nomattachment.indexOf(fra) >= 0)
						{
							forms.FrmFacturasGC.emailenviado = 1;
							databaseManager.saveData(forms.FrmFacturasGC.foundset)
						}	
					}
				}
				else
				{
					if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Email NO se ha enviado  satisfactoriamente','¡Error!')
					else globals.GCshowErrorDialog('Email NO se ha enviado  satisfactoriamente', null, 'Aceptar', null, null, null)
					//plugins.dialogs.showInfoDialog('Envio Email', 'Email NO se ha enviado satisfactoriamente','OK');
				}
		}
	
	}
	catch(e)
	{
		application.output(e)
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"54DF23B4-0AED-4F30-9FDF-5C8DE57BBE3C"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"81B29511-8130-4351-BFF7-049D0731DFEF"}
 */
function onHide(event) {
	btn_cancel()
	return true
}
