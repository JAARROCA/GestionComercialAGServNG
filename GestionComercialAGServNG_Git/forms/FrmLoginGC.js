/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"5FC8A0AE-B220-4D10-9ACF-0678EA485D05"}
 */
var errorMessage2 = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"4F24F9CF-9AB5-469C-B8EC-BB4480D6DDE6"}
 */
var errorMessage = null;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"03759E41-59CA-4EE6-BCC9-0BC2254D93EB"}
 */
var Politica = "<a href='https://agissa.com/politica-privacidad/' target='_blank'>Política de Privacidad</a>";

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"6BDEBBE1-1878-462A-A065-A2F86D22E55B"}
 */
var AvisoLegal = "<a href='https://agissa.com/sobre-nosotros/aviso-legal/' target='_blank'>Aviso Legal</a>";

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"BCB3D560-91F9-45CB-80A8-27E6BAB9D24D"}
 */
var DireccionRegistrar = "<a href='javascript:globals.GCshowDialogRegistroUsuario('Registro de Usuario', 1, null, null, true, null, null, null, null, null)'>Registrar</a>";

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"937FDA78-F856-477D-9F06-3504A95D64E2"}
 */
var DireccionOlvido = "<a href='javascript:globals.GCshowDialogOlvidoContraseña('Restablecer contraseña', 1, null, null, true, null, null, null, null, null)'>¿Ha olvidado su contraseña?</a>";

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"58ED64BB-2078-4069-A574-C7C3095D2ED9"}
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(unused)
 */
function BtnAceptarLogin(event) {
	var users = datasources.db.conexiongestioncomercialag.usuarios.getFoundSet();
	var ds = forms.FrmLoginGC.controller.getDataSource().split('/')
	if(globals.GClogin_usuario)	
	{
		if(globals.GClogin_password != null && globals.GClogin_password != '')
		{
			var password =globals.GCcryptString(globals.GClogin_password,globals.GCcryptKey,'C');
			
		}
		else{
			password = globals.GClogin_password
		}
		//if(!password) password = 'agissaZZZZZZZZ999999';
		
		/*if (users.find()) {
		users.cod_us = globals.GClogin_usuario;
		users.cla_us = password;
		var found = users.search();
		*/
		var query = "select count(*) from [usuarios] where [cod_us] = " + globals.GClogin_usuario + 
		" and [cla_us] ='" + password +"'";	
		var dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 1)
		var found = dataset.getValue(1, 1)	
			
			if(found == 1)
			{
				if(globals.GCNombreUsuario == 'ADMINISTRADOR' || globals.GCNombreUsuario == 'DEMO')
				{										
					//globals.GCshowDialogElijeEmpresa('Empresa', 1, null, null, true, null, null, null, null, null);
					var win = application.getWindow('Elije Empresa')
					if(win != null) win.destroy();
					 
					win = application.createWindow("Elije Empresa", JSWindow.MODAL_DIALOG);
					//win.setInitialBounds(10, 10, 1100, 600);
					win.title = 'Empresa';
					//win.resizable = true;
					win.show(forms.dialog_ElijeEmpresaGC)
				}
				else
				{
					errorMessage,errorMessage2 = null;
					var userid = security.getUserUID(globals.GCNombreUsuario);
					if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
					{
						/*var vAllClients = plugins.UserManager.getClients()//.getWebClients();
						var vClientId, vClientSolution;
						var ncli = 0;
						// Define the idle time limit
						var idleTImeLimit = 2;
						var seg = 0;
						var now = new Date().getTime();    // Store the seconds when this method is triggered
						
						for ( var i = 0 ; i < vAllClients.length ; i ++ )
						{
							vClientId = vAllClients[i].userUid;
							
							application.output(vClientId)
							if(vClientId == userid && vClientId != null)
							{
								vClientSolution = vAllClients[i].solutionName;
								application.output('Solucion: '+vClientSolution)	
								if(vClientSolution == 'GestionComercialAGServ')	{
									var idleTime = vAllClients[i].idle.getTime();      // Get the idle time
							        seg = (now - idleTime)/(60*60*24);
							        
							         // If the time difference is more than 90 min, shutdown the client
							         if(seg >= idleTImeLimit){
							        	 vAllClients[i].shutdown();
							         }
							         else{
							        	 ncli = 1;
							         }
								}
								break;
							}
						}
						
						
						var vClient = plugins.UserManager.getClientByUID(vClientId);
												
						// check since when this client is idle
						var vIdleSince = vClient.idle;
						var vLogin = vClient.login;
						var vAllProps = vClient.getAllProperties();				
						
						
						//if(vClient && vClient.idle){
						//	vClient.shutdown()
						//}						 
						 */
						
						/*var vAllClients = plugins.clientmanager.getConnectedClients();
						var vClientId, vClientSolution;
						var ncli = 0;
						if(forms.auto_logout_warn_dialog_NGGC && 
						forms.auto_logout_warn_dialog_NGGC.AUTO_LOGOUT_CUSTOM_PROPERTIES.IDLE_TIME_TO_TRIGGER_LOGOUT_IN_SECONDS) {
							var idleTImeLimit = forms.auto_logout_warn_dialog_NGGC.AUTO_LOGOUT_CUSTOM_PROPERTIES.IDLE_TIME_TO_TRIGGER_LOGOUT_IN_SECONDS;
						}
						else idleTImeLimit = 300;
						var seg = 0;
						var now = new Date().getTime();    // Store the seconds when this method is triggered
						for ( var i = 0 ; i < vAllClients.length ; i ++ )
						{
							vClientId = vAllClients[i].getUserName();
							
							application.output(vClientId)
							if(vClientId == userid && vClientId != null)
							{
								vClientSolution = vAllClients[i].getOpenSolutionName();
								application.output('Solucion: '+vClientSolution)	
								if(vClientSolution == 'GestionComercialAGServ')	{
									var idleTime = vAllClients[i].getIdleTime();      // Get the idle time
							        seg = (now - idleTime)/(60*60*24);
							        
							       if(seg < idleTImeLimit){
							        	ncli = 1;
							         }
								}
								break;
							}
						}*/
						
						var vClientSolution = '';
						var ncli = 0;
						if(ncli == 0  && vClientSolution != 'GestionComercialAGServ' || globals.GCNombreUsuario == 'DEMO')
						{
							var ok = security.login(globals.GCNombreUsuario, userid, ['Administrators'])
							
							
							query = "select [conex_us] from [usuarios] where [cod_us] = " + globals.GClogin_usuario + 
							" and [cla_us] ='" + password +"'";	
							dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 1)
							globals.GCconex = dataset.getValue(1,1)
							if(globals.GCconex != null && globals.GCconex != '')
							{
								globals.GCHoraConex  =new Date();
								foundset.newRecord();
								foundset.id=application.getUUID()
								foundset.cod_us = globals.GClogin_usuario;
								foundset.fechaconex = globals.GCHoraConex;			
								/*var vServer = plugins.UserManager.getWebClients();
								foundset.ip = vServer.ipAddress;
								foundset.host = vServer.hostAddress;
								foundset.hname = vServer.hostName;*/
								foundset.ip = application.getIPAddress();
								foundset.host = application.getHostName();
								foundset.hname =  application.getHostName();
								
								var hfolder = plugins.file.getHomeFolder()+"\\.servoy\\";
								var rutabat = hfolder+"Comando_numero_serie.bat";
								var f = plugins.file.convertToJSFile(rutabat);
								/*if(f && f.exists() && application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
								{
									var str = application.executeProgram(rutabat);
									str = str.replace("SerialNumber","")
									str = str.trim();
									mac = str;
									if(!mac) mac = vServer.macAddress;
								}
								else*/ if(!f || !f.exists() && application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
								{
									var jsFile = plugins.file.createTempFile('Comando_numero_serie','.bat');
									
									var success = plugins.file.writeTXTFile(jsFile,'@echo off\nwmic bios get serialnumber');
									if (!success) application.output('Could not write file.');
									
									var str = application.executeProgram(jsFile);
									str = str.replace("SerialNumber","")
									str = str.trim();
									mac = str;
									if(!mac) mac = 'Ha sido imposible obtener la mac del equipo.';//vServer.macAddress;
								}
								else if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
								{
									jsFile = plugins.file.createTempFile('Comando_numero_serie','.bat');
									
									success = plugins.file.writeTXTFile(jsFile,'@echo off\nwmic bios get serialnumber');
									if (!success) application.output('Could not write file.');
									
									str = application.executeProgram(jsFile);
									str = str.replace("SerialNumber","")
									str = str.trim();
									mac = str;
									if(!mac) mac = 'Ha sido imposible obtener la mac del equipo.';//vServer.macAddress;
								}
								else
								{
									mac = 'Ha sido imposible obtener la mac del equipo.';//vServer.macAddress;						
								}
								if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) tipo = 'NGClient';
								else tipo = null;
								databaseManager.saveData(foundset)
								var fech = globals.GCHoraConex;
								fech.setMonth(fech.getMonth()-3)
								globals.GCFechaControlAcceso = fech;
								GCborradofechascontrolacceso.loadAllRecords()
								var cont = GCborradofechascontrolacceso.getSize()
								GCborradofechascontrolacceso.deleteAllRecords()
								
								if(globals.GCconex != ds[1])
								{
									var z = databaseManager.switchServer(ds[1],globals.GCconex)									
								}
								else z = true
														
								if(z == true)
								{
									//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) forms.FrmPrincipalGC_web.controller.show()
									//else
									if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.success('Acceso correcto','¡Acceso!')
									//forms.FrmPrincipalGC.controller.show()
									forms.frm_nav_main_principalNGGC.controller.show()		
								}
							}
							else
							{
								if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Conexión a la BD no establecida! Póngase en contacto con AG Informática','¡Error!')
								errorMessage = null;
								errorMessage2 = 'Conexión a la BD no establecida! Póngase en contacto con AG Informática';
							}
						//}
						}
						else
						{
							var msg = 'Existe una sesión abierta para este usuario.\nPuede ocurrir que otra persona esté utilizando la misma cuenta de usuario que usted o no haya cerrado correctamente la sesión anterior.\n'+
							  'Intente acceder pasado un tiempo y si el problema persiste comuníqueselo a la administración de la plataforma.'
							if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(msg,'¡Error!')
							else globals.GCshowWarningDialog(msg, null, null, null, null, null)
						}
					}					
				}
			}
			else{
				if(globals.GCNombreUsuario == 'DEMO'){
					//errorMessage = null;
					//errorMessage2 = 'Fallo en el Login!';
					application.showURL('https://agissa.com/es/contacta/','_blank')
					msg = 'Rellene el formulario de nuestra web, indicando la aplicación de la que desea acceder, y se le facilitaran claves de acceso.'
					scopes.svyCustomDialogs.showInfoDialog('¡Acceso!',msg)
					//if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.info(msg,'¡Acceso!')
					//else globals.GCshowWarningDialog(msg, null, null, null, null, null)
					//registrar2(event)
				}
				else{
					//var methd = 'forms.FrmLogin.Foco()'
					//var methd = 'forms.FrmLoginGC.Foco()'
					errorMessage = null;
					errorMessage2 = 'Fallo en el Login!';
					if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(errorMessage2,'¡Acceso!')
					Foco()
				//globals.GCshowErrorDialog('Login Incorrecto!', methd, null, null, null, null)
				}
			}	
		}
	//}
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 * @properties={typeid:24,uuid:"F3310F8A-DEB9-4836-8D74-432F2CAC8A6B"}
 */
function Foco() {
	globals.GClogin_password = null;
	elements.Clave.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5167A708-C8C8-4642-8890-D1D1E892723E"}
 */
function BtnCancelarLogin(event) {
	// TODO Auto-generated method stub
	//globals.GCshowDialogSalir('Salir de la Aplicación', 1, null, null, true, null, null, null, null, null);
	application.exit()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D99C2B70-9307-44CA-A526-4E4FF1E20C06"}
 */
function onActionUsuario(event) {
	// TODO Auto-generated method stub	
	if(globals.GCNombreUsuario)
	{
		evt_changeItem()		
	}
	else
	{
		errorMessage = null;
		errorMessage2 = null;
		globals.GClogin_usuario = null
		globals.GClogin_password = null
		globals.GCNombreUsuario = null
		globals.GCNomEmp = null	
		globals.GCCIFEmpresa = null
		elements.Nombre.requestFocus()
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"84A26021-EF4B-4D47-9E38-510D9F798CD1"}
 * @SuppressWarnings(unused)
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
	var ds = controller.getDataSource().split('/')
	
	if(globals.GCconex)
	{
		//if(ds[1] != 'conexioncontaag') var z = databaseManager.switchServer(ds[1],'conexioncontaag')	
		if(globals.GCconex != 'conexiongestioncomercialag') var z = databaseManager.switchServer(globals.GCconex,'conexiongestioncomercialag')	
	}
	
	/*if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		var groups = ['Administrators']; //normally these groups are for example received from LDAP
		var user_uid = security.getUserUID('Administrador')
		var ok = security.login('Administrador', user_uid, groups)
		if (!ok) {
				globals.GCshowErrorDialog('Login Incorrecto o ya está logueado.',  null, null, null, null, null)
			}
	}*/
	plugins.window.createShortcut('control A', globals.handle_shortCutGC);
	plugins.window.createShortcut('ESCAPE', globals.handle_shortCutGC);
	plugins.window.createShortcut('control Z', globals.handle_shortCutGC);
	plugins.window.createShortcut('control alt P', globals.handle_shortCutGC);
	//scopes.autologout.startAutoLogout()
	globals.GClogin_usuario = null
	globals.GClogin_password = null
	elements.Nombre.requestFocus()
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B657773D-CA1B-4B5B-8906-21006EC62C65"}
 * @SuppressWarnings(unused)
 */
function onShow(firstShow,event) {
	// TODO Auto-generated method stub
	onLoad(event)
	
		/*elements.lblaviso.visible = false;
		elements.lblpolitica.visible = false;	
		elements.lblaviso.enabled = false;
		elements.lblpolitica.enabled = false;*/	
		//elements.btn_OnlineDemo.visible = false;
	
	if(firstShow && application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
	{
		var username = security.getUserName();
		if(username && username != '<dummy-login>')
		{
			errorMessage = null;
			errorMessage2 = null;
			globals.GCNombreUsuario = username;
			forms.FrmLoginGC.onFocusLostCodigo(event)
			if(globals.GClogin_usuario != null)
			{
				var query = "select [cla_us] from [dbo].[usuarios] where [cod_us] = " + globals.GClogin_usuario;	
				var ds = controller.getDataSource().split('/');
				var dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 1)
				var passw = dataset.getValue(1, 1)
				if(passw) passw = globals.GCcryptString(passw.toString(),globals.GCcryptKey,'D');
				globals.GClogin_password = passw;
				forms.FrmLoginGC.BtnAceptarLogin(event)
			}
		}
		else
		{
			/*
			var groups = ['Administrators']; //normally these groups are for example received from LDAP
			var user_uid = security.getUserUID('Administrador')
			var ok = security.login(globals.GCNombreUsuario, user_uid, groups)
			*/
			errorMessage = null;
			errorMessage2 = null;
			globals.GClogin_usuario = null
			globals.GClogin_password = null
			globals.GCNombreUsuario = null
			globals.GCNomEmp = null	
			globals.GCCIFEmpresa = null
			elements.Nombre.requestFocus()
		}
	}
	else
	{
		/*
		groups = ['Administrators']; //normally these groups are for example received from LDAP
		user_uid = security.getUserUID('Administrador')
		ok = security.login(globals.GCNombreUsuario, user_uid, groups)
		*/
		errorMessage = null;
		errorMessage2 = null;
		globals.GClogin_usuario = null
		globals.GClogin_password = null
		globals.GCNombreUsuario = null
		globals.GCNomEmp = null	
		globals.GCCIFEmpresa = null
		elements.Nombre.requestFocus()
	}
	
	
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"30E7FF2B-DA73-4865-BC2F-11ADB1550C04"}
 */
function onFocusLostCodigo(event) {
	// TODO Auto-generated method stub
	if(globals.GCNombreUsuario)
	{
		evt_changeItem()
	}
	else
	{
		errorMessage = null;
		errorMessage2 = null;
		globals.GClogin_usuario = null;
		globals.GCCIFEmpresa = null;
		globals.GCNomEmp =null;
		globals.GClogin_password = null
	}
}

/**
 *
 * @properties={typeid:24,uuid:"B8A26DB2-F8F6-4111-B01A-D1EDDBEE091C"}
 */
function evt_changeItem()
{
	var query = "select cod_us,cifemp_us,emp_us,foto from usuarios where nom_us = '" + globals.GCNombreUsuario + "' COLLATE Latin1_General_CS_AS ";
	var dataset = databaseManager.getDataSetByQuery('conexiongestioncomercialag', query, null, 1)
	globals.GClogin_usuario = dataset.getValue(1, 1)
	globals.GCCIFEmpresa = dataset.getValue(1, 2)
	globals.GCNomEmp = dataset.getValue(1, 3)
	globals.GClogin_password = null
	globals.GCfoto_usuario = dataset.getValue(1, 4)
	if(globals.GClogin_usuario == null)
	{
		elements.Nombre.requestFocus()
		errorMessage = 'Usuario Inexistente!';
		errorMessage2 = null;
		//globals.GCshowErrorDialog('Usuario Inexistente!', null, null, null, null, null)
		plugins.webnotificationsToastr.error(errorMessage)
		
	}
	else
	{
		errorMessage = null;
		if(globals.GCNombreUsuario == 'DEMO')
		{
			errorMessage2 = 'INTRODUZCA CLAVE DE ACCESO PARA EL USUARIO DEMO O SOLICITELA PULSANDO ACEPTAR'
			plugins.webnotificationsToastr.info(errorMessage2, /*'Online DEMO'*/null, null, 'LoginDemoUSToastrID', onClickToastrinfo)
		}		
		else errorMessage2 = null;		
		elements.Clave.requestFocus()		
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event the event that triggered the action
 * @param toastrId
 *
 * @properties={typeid:24,uuid:"963EE02B-6DB3-4603-8204-8571769BB80B"}
 */
function onClickToastrinfo(event, toastrId) {
 	//application.output('toastrId');
	BtnAceptarLogin(event)
 }

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B24ADB73-3219-420B-A71F-C862C22FDC52"}
 */
function onActionBtnUsuario(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmLogin'
	globals.GCshowDialogUsuarios('Usuarios de la Aplicación', 1, null, null, true, null, null, null, null, null);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0005F60C-724F-42BC-80A9-4E438A3F03DA"}
 */
function btnAdobe(event) {
	// TODO Auto-generated method stub
	application.showURL( 'https://get.adobe.com/es/reader/');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"987346E9-2F1F-42A9-A16D-1C136A0B458C"}
 */
function btnJava(event) {
	// TODO Auto-generated method stub
	application.showURL( 'https://www.java.com/es/');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"38BA5FE4-A9C9-4ECF-A48E-001D97564B4A"}
 */
function olvidoContraseña(event) {
	// TODO Auto-generated method stub
	globals.GCshowDialogOlvidoContraseña('Restablecer contraseña', 1, null, null, true, null, null, null, null, null);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"FF1856A4-C517-4097-92C0-664C5A1CA811"}
 */
function btn_OnlineDemo(event) {
	// TODO Auto-generated method stub
	globals.GCNombreUsuario = 'DEMO'
	onActionUsuario(event)
	errorMessage2 = 'INTRODUZCA CLAVE DE ACCESO PARA EL USUARIO DEMO O SOLICITELA PULSANDO ACEPTAR'
	//globals.GClogin_password = 'DEMO'
	//BtnAceptarLogin(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"1BB8422A-28C3-49F2-BAED-9FCEA6B990D7"}
 */
function btnVersionEscritorio(event) {
	/*var vServer = plugins.UserManager.Client();
	var ipc = vServer.ipAddress;
	var hostc = vServer.hostAddress;
	var hnamec = vServer.hostName;
	
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
			var emailSubject = 'Usuario descargando SmartClient de GestionAG_Web';
			var emailMsg = 'Descarga de SmartClient de GestionAG_Web'+
							'\n\n'+ipc+' '+hostc+' '+hnamec+
							'\n\n'+new Date();
			attachment = null;
		
	
	
	plugins.mail.sendMail(emailSend, emailFrom, emailSubject, emailMsg, emailCC, emailBCC, attachment, authorization );
	*/
	application.showURL( 'http://appwebag.agissa.com:8081/GestionAG.jnlp','_blank');
	//application.showURL( 'http://192.168.0.200:8081/GestionAGSCLocal Standalone starter/GestionAGServ.exe','_blank');
	application.sleep(2000);
	
	
	globals.GCshowDialogContacta('Solicitud credenciales de Acceso al Login', 1, null, null, true, null, null, null, null, null);
}
