/**
 *
 * @properties={typeid:24,uuid:"3682DD42-B3EA-42F6-B531-D14A6730E239"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	application.getWindow('Restablecer Contraseña').hide();
	globals.GCenableBgElements();
	
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"0BB68E25-C961-4467-8C7D-96F5849F99C4"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	//Encriptar
	
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	var correo = forms.dlgOlvidoContraseñaGC.CorreoMail
	if(!correo)
	{
		forms.dlgOlvidoContraseñaGC.elements.mail.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Indique el correo electrónico al que se le enviaran sus datos de conexión.','¡Error!')
		else globals.GCshowErrorDialog('Indique el correo electrónico al que se le enviaran sus datos de conexión.', null, 'Aceptar', null, null, null)
	}
	else if(utils.stringLeft(correo,1) == '.') 
	{	   
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Dirección de correo electrónico no válida.','¡Error!')
		else globals.GCshowErrorDialog('Dirección de correo electrónico no válida.', null, 'Aceptar', null, null, null)
	   forms.dlgOlvidoContraseñaGC.elements.mail.requestFocus()
	}
	else if(utils.stringPatternCount(correo,",") == 0
	&& utils.stringPatternCount(correo," ") == 0
	&& utils.stringPatternCount(correo,"@") == 1
	&& utils.stringPatternCount(correo,".") >= 1)
	{	   
		
		application.getWindow('Restablecer Contraseña').hide();
		globals.GCenableBgElements();
		var query = "select * from tbUsuariosRegistrados where Mail = '" + 
				utils.stringTrim(forms.dlgOlvidoContraseñaGC.CorreoMail) + "' AND Aplicacion ='GESTION COMERCIAL'"; 
		var dataset = databaseManager.getDataSetByQuery('conexionregistrousuarios', query, null, 1)
		var rows = dataset.getMaxRowIndex()
		if(rows > 0)
		{
			var app = dataset.getValue(1,1);
			var nomus = dataset.getValue(1,2);
			var pass = globals.GCcryptString(dataset.getValue(1,5),globals.GCcryptKey,'D');
			var activada = dataset.getValue(1,6)
			if(!activada)
			{
				globals.GCshowInfoDialog('La cuenta aún no ha sido activada.', null, 'Aceptar', null, null, null)
			}
			else
			{
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
						var msg = "DATOS DE CONEXIÓN APLICACIÓN "+app+"\n\n"+
								  "Usuario: "+nomus+	
								  "\nPassword: "+pass+
								  "\n\n\nSi no ha solicitado la recuperación de la contraseña, ignore este mensaje y borrelo."+
								  "\n\nSaludos, "+
								  "\n\nJavier Arroyo. "+
								  "\nAG Informatica y Servicios, SA      San Sebastian, Spain"+
								  "\nTelef. +34 - 943 445101"+
								  "\njaviarroyoss@agissa.com     / www.agissa.com";
								
						var emailSend = utils.stringTrim(forms.dlgOlvidoContraseñaGC.CorreoMail);
						var emailFrom = 'javiarroyoss@agissa.com';
						var emailCC = null;
						var emailBCC = null;
						var emailSubject = 'Restablecer Contraseña';
						var emailMsg = msg;
						attachment = new Array();
					
				
				
				var success = plugins.mail.sendMail(emailSend, emailFrom, emailSubject, emailMsg, emailCC, emailBCC, attachment, authorization );
				  
				// What was the result of trying to send the email
				if(success)
				{
					globals.GCshowInfoDialog('Se le ha enviado un correo electrónico a la dirección facilitada con los datos de conexión a la aplicación.', null, 'Aceptar', null, null, null)
					//plugins.dialogs.showInfoDialog('Envio Email', 'Email enviado satisfactoriamente','OK');
				}
				else
				{
					if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No se ha podido realizar correctamente la acción requerida. Intentelo de nuevo pasado unos minutos.','¡Error!')
					else globals.GCshowErrorDialog('No se ha podido realizar correctamente la acción requerida. Intentelo de nuevo pasado unos minutos.', null, 'Aceptar', null, null, null)
					//plugins.dialogs.showInfoDialog('Envio Email', 'Email NO se ha enviado satisfactoriamente','OK');
				}
			}
		}
	}
	else
	{
		forms.dlgOlvidoContraseñaGC.elements.mail.selectAll()
		forms.dlgOlvidoContraseñaGC.elements.mail.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Dirección de correo electrónico no válida.','¡Error!')
		else globals.GCshowErrorDialog('Dirección de correo electrónico no válida.', null, 'Aceptar', null, null, null)
		   
			
		
	}
		
		
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"217CBB3B-6B02-47EA-888A-DE4F6E0D7020"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	
	btn_cancel()
	return true
}

/**
* Callback method for when form is shown.
*
*
*
*
*
 * @properties={typeid:24,uuid:"F18460DD-3CDF-4E02-B3C4-88D10AB91A0C"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
