/**
 * @properties={typeid:24,uuid:"865F82BC-0D6F-4E0D-9CE8-92602DA65F23"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	//globals.GCClave = null;
	application.getWindow('Elije Empresa').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"0C48BE05-188C-49B3-9277-A208A2032F30"}
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(unused)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	var ds = forms.FrmLoginGC.controller.getDataSource().split('/')
	var emp = forms.dlgEligeEmpresaGC.Tipo;
	if(!emp)
	{
		
	}
	else
	{
		application.getWindow('Elije Empresa').hide();
		globals.GCenableBgElements();
		
		var userid = security.getUserUID(globals.GCNombreUsuario)
		//var ok = security.login(globals.GCNombreUsuario, userid, ['Administrators'])
		
		/*var query = "select [conex_us] from [usuarios] where [cod_us] = " + globals.GClogin_usuario + 
		" and [cla_us] ='" + password +"'";	
		var dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 1)*/
		if((globals.GCNombreUsuario) == 'ADMINISTRADOR'){
			if(emp == 1 ) globals.GCconex = 'conexiongestioncomercialag';
			else if(emp == 3 ) globals.GCconex = 'conexiongestionzusipruebas';
			else if(emp == 4 ) globals.GCconex = 'conexiongestionmlegazpipruebas';
			else if(emp == 5 ) globals.GCconex = 'conexiongestiontmendizabalpruebas';
			else if(emp == 6 ) globals.GCconex = 'conexiongestionolabemarpruebas';
			else if(emp == 7 ) globals.GCconex = 'conexiongestionsectorvertical';
			else if(emp == 8 ) globals.GCconex = 'conexiongestionamsorolla';
			else if(emp == 9 ) globals.GCconex = 'conexiongestiontedelbi';
			else if(emp == 10 ) globals.GCconex = 'conexiongestiongm';
			else globals.GCconex = 'conexiongestioncostaluz';
		}
		else if((globals.GCNombreUsuario) == 'DEMO'){
			if(emp == 1 ) globals.GCconex = 'conexiongestioncomercialagdemo';
			else globals.GCconex = 'conexiongestioncomercialagdemo2';
		}
		
		if(globals.GClogin_password != null && globals.GClogin_password != '')
		{
			var password =globals.GCcryptString(globals.GClogin_password,globals.GCcryptKey,'C');
			
		}
		else{
			password = globals.GClogin_password
		}
		
		if(globals.GCconex)
		{
			/*globals.GCHoraConex  =new Date();
			forms.FrmLoginGC.foundset.newRecord();
			forms.FrmLoginGC.cod_us = globals.GClogin_usuario;
			forms.FrmLoginGC.fechaconex = globals.GCHoraConex;			
			databaseManager.saveData()
			var fech = globals.GCHoraConex;
			fech.setMonth(fech.getMonth()-3)
			globals.GCFechaControlAcceso = fech;
			GCborradofechascontrolacceso.loadAllRecords()
			var cont = GCborradofechascontrolacceso.getSize()
			GCborradofechascontrolacceso.deleteAllRecords()
			if(globals.GCconex != ds[1]) var z = databaseManager.switchServer(ds[1],globals.GCconex) 
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT || 
	application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) forms.FrmPrincipalGC_web.controller.show()
			else
				forms.FrmPrincipalGC.controller.show()
			*/	
						forms.FrmLoginGC.errorMessage = null; 
						forms.FrmLoginGC.errorMessage2 = null; 
						//var userid = security.getUserUID(globals.GCNombreUsuario)
						if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
						{
							/*var vAllClients = plugins.UserManager.getWebClients();
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
								        seg = (now - idleTime)/(60*60*24);//
								        
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
							
							//if(!vClientSolution) vClientSolution = 'GestionComercialAGServ';
							
							var vClient = plugins.UserManager.getClientByUID(vClientId);
							
							
							// check since when this client is idle
							var vIdleSince = vClient.idle;
							//application.output('Idle: '+vIdleSince)			
							// check when the client logged in
							var vLogin = vClient.login;
							//application.output('Loged: '+vIdleSince)			
							// to get all of the client's properties in one array use
							var vAllProps = vClient.getAllProperties();				
							//application.output(vAllProps)
							
							
							/*if(vClient && vClient.idle){
								vClient.shutdown()
							}*/
							
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
								vClientId = vAllClients[i].getClientID();
								
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
								
								
								/*query = "select [conex_us] from [usuarios] where [cod_us] = " + globals.GClogin_usuario + 
								" and [cla_us] ='" + password +"'";	
								dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 1)
								globals.GCconex = dataset.getValue(1,1)*/
								if(globals.GCconex != null && globals.GCconex != '')
								{
									globals.GCHoraConex  =new Date();
									forms.FrmLoginGC.foundset.newRecord();
									forms.FrmLoginGC.id = application.getUUID()
									forms.FrmLoginGC.cod_us = globals.GClogin_usuario;
									forms.FrmLoginGC.fechaconex = globals.GCHoraConex;			
									/*var vServer = plugins.UserManager.Client();
									forms.FrmLoginGC.ip = vServer.ipAddress;
									forms.FrmLoginGC.host = vServer.hostAddress;
									forms.FrmLoginGC.hname = vServer.hostName;*/
									forms.FrmLoginGC.foundset.ip = application.getIPAddress();
									forms.FrmLoginGC.foundset.host = application.getHostName();
									forms.FrmLoginGC.foundset.hname =  application.getHostName();
									
									var hfolder = plugins.file.getHomeFolder()+"\\.servoy\\";
									var rutabat = hfolder+"Comando_numero_serie.bat";
									//var rutabat = "c:\\Servoy\\Comando_numero_serie.bat";
									var f = plugins.file.convertToJSFile(rutabat);
									/*if(f && f.exists() && application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
									{
										var str = application.executeProgram(rutabat);
										str = str.replace("SerialNumber","")
										str = str.trim();
										forms.FrmLoginGC.mac = str;
										if(!forms.FrmLoginGC.mac) forms.FrmLoginGC.mac = vServer.macAddress;
									}
									else*/ if(!f || !f.exists() && application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
									{
										var jsFile = plugins.file.createTempFile('Comando_numero_serie','.bat');
										
										var success = plugins.file.writeTXTFile(jsFile,'@echo off\nwmic bios get serialnumber');
										if (!success) application.output('Could not write file.');
										
										var str = application.executeProgram(jsFile);
										str = str.replace("SerialNumber","")
										str = str.trim();
										forms.FrmLoginGC.mac = str;
										if(!forms.FrmLoginGC.mac) forms.FrmLoginGC.mac = 'Ha sido imposible obtener la mac del equipo.';//vServer.macAddress;
									}
									else if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
									{
										jsFile = plugins.file.createTempFile('Comando_numero_serie','.bat');
										
										success = plugins.file.writeTXTFile(jsFile,'@echo off\nwmic bios get serialnumber');
										if (!success) application.output('Could not write file.');
										
										str = application.executeProgram(jsFile);
										str = str.replace("SerialNumber","")
										str = str.trim();
										forms.FrmLoginGC.mac = str;
										if(!forms.FrmLoginGC.mac) forms.FrmLoginGC.mac = 'Ha sido imposible obtener la mac del equipo.';//vServer.macAddress;
									}
									else
									{
										forms.FrmLoginGC.mac = 'Ha sido imposible obtener la mac del equipo.';//vServer.macAddress;						
									}
									
									if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) forms.FrmLoginGC.tipo = 'NGClient'
									else forms.FrmLoginGC.tipo = null
									databaseManager.saveData(forms.FrmLoginGC.foundset)
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
									application.output(z)								
									if(z == true)
									{
										//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) forms.FrmPrincipalGC_web.controller.show()
										//else
										//	forms.FrmPrincipalGC.controller.show()	
										if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.success('Acceso correcto','¡Acceso!')
										forms.frm_nav_main_principalNGGC.controller.show()		
									}
								}
								else
								{
									if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Conexión a la BD no establecida! Póngase en contacto con AG Informática','¡Error!')
									forms.FrmLoginGC.errorMessage = null;
									forms.FrmLoginGC.errorMessage2 = 'Conexión a la BD no establecida! Póngase en contacto con AG Informática';
								}
							//}
							}
							else
							{
								var msg = 'Existe una sesión abierta para este usuario.\nPuede ocurrir que otra persona esté utilizando la misma cuenta de usuario que usted o no haya cerrado correctamente la sesión anterior.\n'+
								  'Intente acceder pasado un tiempo y si el problema persiste comuníqueselo a la administración de la plataforma.'
								if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.info(msg,'¡Acceso!')
								else  globals.GCshowWarningDialog(msg, null, null, null, null, null)
							}
						}				
			
		}
	
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 * 
 *
 *
 * @properties={typeid:24,uuid:"4C336CA7-41FA-4B40-A6C3-76D06E2068E8"}
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
 *
 *
 * @properties={typeid:24,uuid:"3AC97A16-5703-4C7D-8AD8-FFA20702D63E"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}
