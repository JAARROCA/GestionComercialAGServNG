/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"5A0480D6-0348-4039-A879-EBC821A53C5A"}
 */
var frmCryptedText = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"BBC6D814-3C6E-4BAB-AB71-0BF9B1F6DAEA"}
 */
var frmDecryptedText = null;

/**
 * Perform the element default action.
 *
 *
 * @properties={typeid:24,uuid:"43C4B75F-02C2-4FA7-8325-96FF66F50A37"}
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
 *
 *
 *
 * @properties={typeid:24,uuid:"B4B3C6AD-6F37-480B-BC80-7321A7A16D59"}
 */
function Encriptar() 
{
	frmCryptedText=globals.GCcryptString(frmDecryptedText,globals.GCcryptKey,'C');
	//frmDecryptedText=utils.stringMD5HashBase64(frmCryptedText)
	
}

/**
 *
 * @properties={typeid:24,uuid:"BD27461A-BEF9-41C6-AD8C-EF429320DC1C"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Editar Perfil Usuario').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"4FC911EE-FB94-47D0-B952-719BA569AB99"}
 * @SuppressWarnings(deprecated)
 */
function btn_ok()
{
	var scsmtp = forms.dlg_EditarPerfilUsuarioGC.servidorcorreossmtp;
	if(!scsmtp) scsmtp = null
	gcparametrosaplicacion_to_parametrosaplicacion.servidorcorreosmtp = scsmtp;
	databaseManager.saveData(gcparametrosaplicacion_to_parametrosaplicacion)
	
	if(forms.dlg_EditarPerfilUsuarioGC.passw_us != null  && forms.dlg_EditarPerfilUsuarioGC.passw_us != '')
	{
		//forms.dlg_UsuariosGC.passw_us = utils.stringMD5HashBase64(forms.dlg_UsuariosGC.passw_us)
		forms.dlg_EditarPerfilUsuarioGC.passw_us = globals.GCcryptString(forms.dlg_EditarPerfilUsuarioGC.passw_us,globals.GCcryptKey,'C');
	}
		query = "select [id] from [GESTIONCOMERCIALAG].[dbo].[usuarios] WHERE [cod_us] = " + forms.dlg_EditarPerfilUsuarioGC.cod_us;
		dataset = databaseManager.getDataSetByQuery('conexiongestioncomercialag', query, null, 1)
		var uid = dataset.getValue(1,1);			
		
		query = "UPDATE [GESTIONCOMERCIALAG].[dbo].[usuarios] "+
		"SET passw_us = '"+forms.dlg_EditarPerfilUsuarioGC.passw_us+ "'"+
		",[startdirectory] = '"+forms.dlg_EditarPerfilUsuarioGC.startdirectory+"' "+
		"WHERE id = '"+uid+"'"

		var done = plugins.rawSQL.executeSQL('conexiongestioncomercialag',query)
		if (done)
		{
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache('conexiongestioncomercialag',"usuarios")						
		}
		else
		{
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error',  'SQL exception: '+msg,  'Ok')
		}
		
		
	var claact = forms.dlg_EditarPerfilUsuarioGC.actualpassword;
	var clanew = forms.dlg_EditarPerfilUsuarioGC.newpassword;
	var clanewrep = forms.dlg_EditarPerfilUsuarioGC.newpasswordrepeat;
	var query = "select [cla_us] from [usuarios] where [cod_us] = " + globals.GClogin_usuario;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	
	if(!claact && !clanew && !clanewrep)
	{
		globals.GCdialog_buttonPressed = elements.btn_ok.text
		globals.GCfoto_usuario = forms.dlg_EditarPerfilUsuarioGC.foto;
		forms.FrmPrincipalGC.sub_setPreviewLabels()
		
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) globals.GCsaveEdits();
		}
				
		databaseManager.saveData();
				
		if(globals.GClogin_usuario != null)
		{
			var ds = forms.FrmLoginGC.controller.getDataSource().split('/')
			var today = new Date();
			query = 'select [fechalimite] from [usuarios] WHERE [cod_us] = ' + globals.GClogin_usuario
			dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 1)
			var fecha = dataset.getValue(1,1)
			if(fecha < today)
			{
				application.exit();
			}
			else
			{
				if(globals.GCfoto_usuario)
				{
					forms.FrmPrincipalGC.elements.image_logoc.visible = true;
				}
				else
				{
					forms.FrmPrincipalGC.elements.image_logoc.visible = false;
				}
				application.getWindow('Editar Perfil Usuario').hide();
				globals.GCenableBgElements();
			}
		}
		else
		{
			if(globals.GCfoto_usuario)
			{
				forms.FrmPrincipalGC.elements.image_logoc.visible = true;
			}
			else
			{
				forms.FrmPrincipalGC.elements.image_logoc.visible = false;
			}
			application.getWindow('Editar Perfil Usuario').hide();
			globals.GCenableBgElements();
		}
	}
	else
	{
		var claacttemp = null;
		if(dataset.getValue(1,1))
		{
			frmCryptedText = dataset.getValue(1,1)
			Desencriptar()
			claacttemp = frmDecryptedText
		}
		
		if(claacttemp === claact)
		{
			if(clanew === clanewrep)
			{
				globals.GCdialog_buttonPressed = elements.btn_ok.text
				globals.GCfoto_usuario = forms.dlg_EditarPerfilUsuarioGC.foto;
				forms.FrmPrincipalGC.sub_setPreviewLabels()
				if(clanew)
				{					
					//gets the current loggedIn username
					//var userName = security.getUserName();
					//var userid = security.getUserUID(globals.GCNombreUsuario);
					//if(userid) security.setPassword(userid,clanew)
					//forms.dlg_UsuariosCONTA.cla_us = utils.stringMD5HashBase64(forms.dlg_UsuariosCONTA.cla_us)
					forms.dlg_EditarPerfilUsuarioGC.cla_us = globals.GCcryptString(clanew,globals.GCcryptKey,'C');
				}
				else
				{
					//userName = security.getUserName();
					//userid = security.getUserUID(globals.GCNombreUsuario);
					//if(userid) security.setPassword(userid,'')
					forms.dlg_EditarPerfilUsuarioGC.cla_us = ''
				}
				if(forms.dlg_EditarPerfilUsuarioGC.cla_us == null) forms.dlg_EditarPerfilUsuarioGC.cla_us = ''
				if(globals.GCconex && globals.GCconex !=  'conexiongestioncomercialag')
				{
					query = "select [id] from [GESTIONCOMERCIALAG].[dbo].[usuarios] WHERE [cod_us] = " + forms.dlg_EditarPerfilUsuarioGC.cod_us;
					dataset = databaseManager.getDataSetByQuery('conexiongestioncomercialag', query, null, 1)
					uid = dataset.getValue(1,1);	
					
					query = "UPDATE [GESTIONCOMERCIALAG].[dbo].[usuarios] "+
		        			"SET cla_us = '"+forms.dlg_EditarPerfilUsuarioGC.cla_us+ "' "+
							"WHERE id = '"+uid+"'"
		
		    		done = plugins.rawSQL.executeSQL('conexiongestioncomercialag',query)
		    		if (done)
		    		{
		    			//flush is required when changes are made in db
		    			plugins.rawSQL.flushAllClientsCache('conexiongestioncomercialag',"usuarios")						
		    		}
		    		else
		    		{
		    			msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		    			plugins.dialogs.showErrorDialog('Error',  'SQL exception: '+msg,  'Ok')
		    		}
					/*var vSet = databaseManager.getFoundSet('conexiongestioncomercialag', 'usuarios')  
					  
					//load record by ID in foundset  
					vSet.loadRecords(databaseManager.convertToDataSet([uid]))  
					var record = vSet.getRecord(vSet.getSelectedIndex())
 					if(record)
					{
						record.cla_us = forms.dlg_EditarPerfilUsuarioGC.cla_us;
						databaseManager.saveData(record)
					}	*/				
				}
				if(globals.GCokToCommit == 1)
				{
					if(globals.GCisEditing()) globals.GCsaveEdits();
				}
				
				databaseManager.saveData();
				
				if(globals.GClogin_usuario != null)
				{
					ds = forms.FrmLoginGC.controller.getDataSource().split('/')
					today = new Date();
					query = 'select [fechalimite] from [usuarios] WHERE [cod_us] = ' + globals.GClogin_usuario
					dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 1)
					fecha = dataset.getValue(1,1)
					if(fecha < today)
					{
						
						application.exit();
					}
					else
					{
						if(globals.GCfoto_usuario)
						{
							forms.FrmPrincipalGC.elements.image_logoc.visible = true;
						}
						else
						{
							forms.FrmPrincipalGC.elements.image_logoc.visible = false;
						}
						application.getWindow('Editar Perfil Usuario').hide();
						globals.GCenableBgElements();
					}
				}
				else
				{
					if(globals.GCfoto_usuario)
					{
						forms.FrmPrincipalGC.elements.image_logoc.visible = true;
					}
					else
					{
						forms.FrmPrincipalGC.elements.image_logoc.visible = false;
					}
					application.getWindow('Editar Perfil Usuario').hide();
					globals.GCenableBgElements();
				}
			}
			else
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('La contraseña nueva y la repetida no coinciden.','¡Error!')
				else globals.GCshowErrorDialog('La contraseña nueva y la repetida no coinciden.', null, null, null, null, null)
			}
		}
		else
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('La contraseña actual no coincide.','¡Error!')
			else globals.GCshowErrorDialog('La contraseña actual no coincide.', null, null, null, null, null)
		}
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"CFC898F3-85FC-4168-8FF0-9A30AD2AC067"}
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
 * @properties={typeid:24,uuid:"F52301B8-EEA7-4C87-A3F5-648F8802A8E8"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCClave = null
			globals.GCcancelEditing()
		}
		
	}
	
	if(globals.GClogin_usuario)
	{
		var ds = forms.FrmLoginGC.controller.getDataSource().split('/')
		var today = new Date();
		var query = 'select [fechalimite],[taop_015] from [usuarios] WHERE [cod_us] = ' + globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 1)
		var fecha = dataset.getValue(1,1);
		//globals.GCPermiso = dataset.getValue(1,2);
		if(fecha < today)
		{
			
			application.exit();
		}
		else
		{
			application.getWindow('Editar Perfil Usuario').hide();
			globals.GCenableBgElements();
		}
	}
	else
	{
		application.getWindow('Editar Perfil Usuario').hide();
		globals.GCenableBgElements();
	}
	
	return true
}
