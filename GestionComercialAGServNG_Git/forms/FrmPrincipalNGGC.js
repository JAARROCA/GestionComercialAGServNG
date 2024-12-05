/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C04D05F9-6E82-47FE-82FF-2A51CE2C43C4"}
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
	
	if(globals.GCNombreUsuario == 'DEMO') elements.lblnota.visible = true;
	else elements.lblnota.visible = false;
	
		
	globals.GCNombreEmpresa = gcparametrosaplicacion_to_parametrosaplicacion.empresa;
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"82153D85-7392-4799-9B78-51E9557F64EC"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	if(!globals.GClogin_usuario) globals.btn_SalirGC(event)
	onLoad(event)
	globals.GCClave=null
	
	
	
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
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"77752905-0C8D-435C-B419-1E6846E90E17"}
 */
function onAction_prespuestos(event) {
	var menuItemId = 'FrmPresupuestosGC';
	forms.frm_nav_main_principalNGGC.onMenuItemSelectedHandler(menuItemId, event)
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"EB364A8D-71F8-48A3-9154-3B70F5E98DBE"}
 */
function onAction_albaranes(event) {
	var menuItemId = 'FrmAlbaranGC';
	forms.frm_nav_main_principalNGGC.onMenuItemSelectedHandler(menuItemId, event)
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"0583C111-8B71-43A3-87A3-24C10AB4A283"}
 */
function onAction_facturas(event) {
	var menuItemId = 'FrmFacturasGC';
	forms.frm_nav_main_principalNGGC.onMenuItemSelectedHandler(menuItemId, event)
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"16FD38BE-5FC1-40D8-BD9A-F6B3935C3786"}
 */
function onAction_facturascompras(event) {
	var menuItemId = 'FrmFacturasComprasGC';
	forms.frm_nav_main_principalNGGC.onMenuItemSelectedHandler(menuItemId, event)
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"B885FBB4-8D1D-4848-813E-19DA3C0109D2"}
 */
function onAction_balance(event) {
	var menuItemId = 'FrmBalance';
	forms.frm_nav_main_principalNGGC.onMenuItemSelectedHandler(menuItemId, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"0FA37693-C507-4A1A-B5F4-C0554C026C5C"}
 * @SuppressWarnings(deprecated)
 */
function btnDatosConexión(event) {
	var query = "SELECT FechaConex FROM GESTIONCOMERCIALAG.dbo.ControlAcceso "+
				"WHERE cod_us = "+globals.GClogin_usuario+" ORDER BY FechaConex DESC"
	var dataset = databaseManager.getDataSetByQuery('conexiongestioncomercialag', query, null, 2)
	var conexactual = utils.dateFormat(dataset.getValue(1,1),'dd/MM/yyyy HH:mm')
	var ultconex = utils.dateFormat(dataset.getValue(2,1),'dd/MM/yyyy HH:mm')
	if(ultconex == null || ultconex == '') ultconex = conexactual
	
	var jsFile = plugins.file.createTempFile('Comando_numero_serie','.bat');	
	var success = plugins.file.writeTXTFile(jsFile,'@echo off\nwmic bios get serialnumber');
	if (!success) application.output('Could not write file.');
	
	var mac = '';
	if(success) {
		var str = application.executeProgram(jsFile);
		str = str.replace("SerialNumber","")
		str = str.trim();
		mac = str;
	}
	
	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT){ 
		//plugins.webnotificationsToastr.info('Última: '+ultconex+'     Actual: '+conexactual+'     MAC: '+mac,'Datos Conexión')
		var options = {
			  /*"closeButton": false,
			  "newestOnTop": false,
			  "positionClass": "toast-top-full-width",
			  "showDuration": "300",
			  "hideDuration": "1000",
			  "hideEasing": "linear",
			  "showMethod": "fadeIn",
			  "hideMethod": "fadeOut",
			  "progressBar": false*/
			  enableHtml : true
			}
		var message = '<html>Última: '+ultconex+'<br>     Actual: '+conexactual+'<br>     MAC: '+mac + '</html>';
		plugins.webnotificationsToastr.info(message,'Datos Conexión',options)
	}
	else{
		var popUpObj = plugins.window.createPopupMenu();
		popUpObj.addMenuItem("Última: "+ultconex, null, null);
		popUpObj.addMenuItem("Actual: "+conexactual, null, null);
		popUpObj.addSeparator();
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			popUpObj.show(event.getSource(),25,0);				
		}
	}
}
