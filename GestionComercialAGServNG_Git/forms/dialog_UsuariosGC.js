/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"D23224C9-F550-4886-83A0-800A991A8815"}
 */
var frmCryptedText = null;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"3E898FAA-EE0B-4EF5-8CB7-D824432F5B29"}
 */
var frmDecryptedText = null;

/**
 * Perform the element default action.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"350D8B27-E618-48DD-93E2-CB6780CD6A99"}
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
 * @properties={typeid:24,uuid:"BF449E87-D6EB-4F4D-BBE0-321663847EFD"}
 */
function Encriptar() 
{
	frmCryptedText=globals.GCcryptString(frmDecryptedText,globals.GCcryptKey,'C');
	//frmDecryptedText=utils.stringMD5HashBase64(frmCryptedText)
	
}

/**
 *
 *
 *
 * @properties={typeid:24,uuid:"79D6DA0F-A746-493C-97E1-E679406CC481"}
 * @SuppressWarnings(deprecated)
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing();
		}
	}
	
	globals.GCClave = null
	globals.GCRegistroNuevo = null;
	if(globals.GClogin_usuario != null)
	{
		if(globals.GCconex == null || globals.GCconex == '') globals.GCconex = databaseManager.getDataSourceServerName(controller.getDataSource())
		var today = new Date();
		var query = 'select fechalimite from usuarios WHERE cod_us = ' + globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var fecha = dataset.getValue(1,1)
		if(fecha < today)
		{
			
			application.exit();
		}
		else
		{
			application.getWindow('DialogUsuarios').hide();
			globals.GCenableBgElements();
		}
	}
	else
	{
		application.getWindow('DialogUsuarios').hide();
		globals.GCenableBgElements();
	}
	plugins.window.createShortcut('control A', globals.handle_shortCutGC);
	plugins.window.createShortcut('ESCAPE', globals.handle_shortCutGC);
	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A430439A-D8A3-4CEB-BEB2-55C1933CD540"}
 */
function onShow() {
	// TODO Auto-generated method stub
	elements.btn_anterior.imageURL = "media:///nav_left_blue_greyBg.gif";
	elements.btn_siguiente.imageURL = "media:///nav_right_blue_greyBg.gif";
	elements.btn_Borrar.imageURL = "media:///papelera.GIF";
	elements.btn_Nuevo.imageURL = "media:///NEW.gif";
	elements.btn_ok.imageURL = "media:///guardar.gif";
	elements.btn_cancel.imageURL = "media:///cal_delete.gif";
	
	forms.dlg_UsuariosGC.elements.cod_us.editable = false
	forms.dlg_UsuariosGC.elements.cod_us.bgcolor = '#f0f0f0'
	forms.dlg_UsuariosGC.elements.cod_us.visible = false
	forms.dlg_UsuariosGC.elements.lblidcodigo.visible = true	
	globals.GCdialog_buttonPressed = null;
	globals.GCRegistroNuevo = null;
}

/**
 *
 *
 * @properties={typeid:24,uuid:"D8848745-C580-41BA-B831-FE7E84F38EF5"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	//Encriptar
	if(forms.dlg_UsuariosGC.cla_us != null && forms.dlg_UsuariosGC.cla_us != '')
	{
		//forms.dlg_UsuariosGC.cla_us = utils.stringMD5HashBase64(forms.dlg_UsuariosGC.cla_us)
		forms.dlg_UsuariosGC.cla_us = globals.GCcryptString(forms.dlg_UsuariosGC.cla_us,globals.GCcryptKey,'C');
	}
	if(forms.dlg_UsuariosGC.cla_us == null) forms.dlg_UsuariosGC.cla_us = ''
	if(forms.dlg_UsuariosGC.passw_us != null  && forms.dlg_UsuariosGC.passw_us != '')
	{
		//forms.dlg_UsuariosGC.passw_us = utils.stringMD5HashBase64(forms.dlg_UsuariosGC.passw_us)
		forms.dlg_UsuariosGC.passw_us = globals.GCcryptString(forms.dlg_UsuariosGC.passw_us,globals.GCcryptKey,'C');
	}
	if(forms.dlg_UsuariosGC.passw_us == null) forms.dlg_UsuariosGC.passw_us = ''
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	if(globals.GCconex && globals.GCconex !=  'conexiongestioncomercialag')
	{
		query = "select [id] from [GESTIONCOMERCIALAG].[dbo].[usuarios] WHERE [cod_us] = " + forms.dlg_UsuariosGC.cod_us;
		dataset = databaseManager.getDataSetByQuery('conexiongestioncomercialag', query, null, 1)
		var uid = dataset.getValue(1,1);	
		
		if(globals.GCRegistroNuevo != 1)
		{
			query = "UPDATE [GESTIONCOMERCIALAG].[dbo].[usuarios] "+
	    			"SET [nom_us] = '"+forms.dlg_UsuariosGC.nom_us+"'"+
				   ",[enus_us] = '"+forms.dlg_UsuariosGC.enus_us+"'"+
				    ",[imde_us] = '"+forms.dlg_UsuariosGC.imde_us+"'"+
				    ",[cla_us] = '"+forms.dlg_UsuariosGC.cla_us+"'"+
				    ",[nuser_us] = '"+forms.dlg_UsuariosGC.nuser_us+"'"+
				    ",[passw_us] = '"+forms.dlg_UsuariosGC.passw_us+"'"+
				    ",[emp_us] = '"+forms.dlg_UsuariosGC.emp_us+"'"+
				    ",[cifemp_us] = '"+forms.dlg_UsuariosGC.cifemp_us+"'"+
				    ",[fechalimite] = '"+utils.dateFormat(forms.dlg_UsuariosGC.fechalimite,'dd-MM-yyyy')+"'"+
				    ",[firmaemail] = '"+forms.dlg_UsuariosGC.firmaemail+"'"+
				    ",[startdirectory] = '"+forms.dlg_UsuariosGC.startdirectory+"' "+
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
		}
	}
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits();
	}
	
	databaseManager.saveData();
	
	forms.dlg_UsuariosGC.elements.cod_us.editable = false
	forms.dlg_UsuariosGC.elements.cod_us.bgcolor = '#f0f0f0'
	forms.dlg_UsuariosGC.elements.cod_us.visible = false
	forms.dlg_UsuariosGC.elements.lblidcodigo.visible = true	
	globals.GCClave = null
	globals.GCRegistroNuevo = null;
	if(globals.GClogin_usuario)
	{
		if(globals.GCconex == null) globals.GCconex = 'conexiongestioncomercialag'
		var today = new Date();
		var query = 'select fechalimite from usuarios WHERE cod_us = ' + globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var fecha = dataset.getValue(1,1)
		if(fecha < today)
		{
			
			application.exit(); 
		}
		else
		{
			application.getWindow('DialogUsuarios').hide();
			globals.GCenableBgElements();
		}
	}
	else
	{
		application.getWindow('DialogUsuarios').hide();
		globals.GCenableBgElements();
	}	
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"4EEF4320-6AB6-46CB-82CA-B74AD053DFEA"}
 */
function btn_Anterior(event) {
	globals.GCRegistroNuevo = null;
	databaseManager.revertEditedRecords()
	forms.dlg_UsuariosGC.controller.setSelectedIndex(forms.dlg_UsuariosGC.controller.getSelectedIndex() - 1)
	forms.dlg_UsuariosGC.elements.cod_us.editable = false
	forms.dlg_UsuariosGC.elements.cod_us.bgcolor = '#f0f0f0'
	forms.dlg_UsuariosGC.elements.cod_us.visible = false
	forms.dlg_UsuariosGC.elements.lblidcodigo.visible = true	
	if(forms.dlg_UsuariosGC.cla_us != null && forms.dlg_UsuariosGC.cla_us != '')		
	{	     
		frmCryptedText = forms.dlg_UsuariosGC.cla_us
		Desencriptar()
		forms.dlg_UsuariosGC.cla_us = frmDecryptedText
	}
	if(forms.dlg_UsuariosGC.passw_us != null && forms.dlg_UsuariosGC.passw_us != '')
	{
		frmCryptedText = forms.dlg_UsuariosGC.passw_us
		Desencriptar()
		forms.dlg_UsuariosGC.passw_us = frmDecryptedText
	}	
	forms.dlg_UsuariosGC.elements.cla_us.visible = true;
	forms.dlg_UsuariosGC.elements.cla_us.enabled = true;
	forms.dlg_UsuariosGC.elements.cla_usc.visible = false;
	forms.dlg_UsuariosGC.elements.cla_usc.enabled = false;
	forms.dlg_UsuariosGC.elements.passw_us.visible = true;
	forms.dlg_UsuariosGC.elements.passw_us.enabled = true;
	forms.dlg_UsuariosGC.elements.passw_usc.visible = false;
	forms.dlg_UsuariosGC.elements.passw_usc.enabled = false;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
*
 * @properties={typeid:24,uuid:"63449AF6-4289-4C1C-A6DB-F43DF1FBA72C"}
 */
function btn_Siguiente(event) {
	globals.GCRegistroNuevo = null;
	databaseManager.revertEditedRecords()
	forms.dlg_UsuariosGC.controller.setSelectedIndex(forms.dlg_UsuariosGC.controller.getSelectedIndex() + 1)
	forms.dlg_UsuariosGC.elements.cod_us.editable = false
	forms.dlg_UsuariosGC.elements.cod_us.bgcolor = '#f0f0f0'
	forms.dlg_UsuariosGC.elements.cod_us.visible = false
	forms.dlg_UsuariosGC.elements.lblidcodigo.visible = true	
	if(forms.dlg_UsuariosGC.cla_us != null && forms.dlg_UsuariosGC.cla_us != '')		
	{	     
		frmCryptedText = forms.dlg_UsuariosGC.cla_us
		Desencriptar()
		forms.dlg_UsuariosGC.cla_us = frmDecryptedText
	}
	if(forms.dlg_UsuariosGC.passw_us != null && forms.dlg_UsuariosGC.passw_us != '')
	{
		frmCryptedText = forms.dlg_UsuariosGC.passw_us
		Desencriptar()
		forms.dlg_UsuariosGC.passw_us = frmDecryptedText
	}	
	forms.dlg_UsuariosGC.elements.cla_us.visible = true;
	forms.dlg_UsuariosGC.elements.cla_us.enabled = true;
	forms.dlg_UsuariosGC.elements.cla_usc.visible = false;
	forms.dlg_UsuariosGC.elements.cla_usc.enabled = false;
	forms.dlg_UsuariosGC.elements.passw_us.visible = true;
	forms.dlg_UsuariosGC.elements.passw_us.enabled = true;
	forms.dlg_UsuariosGC.elements.passw_usc.visible = false;
	forms.dlg_UsuariosGC.elements.passw_usc.enabled = false;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"2B7AAB81-3FCC-4AA8-BE37-9E4E126324FC"}
 */
function btn_Nuevo(event) {
	globals.GCRegistroNuevo = 1;
	databaseManager.revertEditedRecords()
	forms.dlg_UsuariosGC.foundset.newRecord(true)
	forms.dlg_UsuariosGC.elements.cod_us.editable = true
	forms.dlg_UsuariosGC.elements.cod_us.bgcolor = '#ffffff'
	forms.dlg_UsuariosGC.elements.cod_us.visible = true
	forms.dlg_UsuariosGC.elements.lblidcodigo.visible = false	
	forms.dlg_UsuariosGC.elements.cod_us.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"DC73F66E-E8F6-4261-8A61-F490C092BB1F"}
 */
function btn_Borrar(event) {
	// TODO Auto-generated method stub
	var msg =  '¿Estás seguro de querer borrarlo?'
	var frm = currentcontroller.getName()
	var methd = 'forms.' + frm + '.sub_doDelete()'

	//clear out global - so we don't accidentally delete something
	globals.core_dlg_buttonPressed = null
	//show the tabpanel "dialog"
	globals.GCshowWarningDialog(msg, methd, 'Cancel', 'Borrar', null, null);
}

/**
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"ECE85210-24EA-42E0-A714-81072A6EA09F"}
 */
function sub_doDelete()
{
	//see what button text was pressed and then delete if necessary
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		//var frm = currentcontroller.getName()
		//forms.dlg_UsuariosGC.foundset.deleteRecord()
		var record = forms.dlg_UsuariosGC.foundset.getSelectedRecord();
		forms.dlg_UsuariosGC.foundset.deleteRecord(record);
		//clear out global - so we don't accidentally delete something
		globals.core_dlg_buttonPressed = null
		globals.GCRegistroNuevo = null;
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
*
 * @properties={typeid:24,uuid:"5D5EEE34-03E0-49FD-8FA2-EE4145F78D69"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCClave = null
	plugins.window.createShortcut('control A', globals.handle_shortCutGC);
	plugins.window.createShortcut('ESCAPE', globals.handle_shortCutGC);
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
 * @properties={typeid:24,uuid:"3F82BA17-0667-436E-B301-2EE7BEF6B3FF"}
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
	globals.GCRegistroNuevo = null;
	if(globals.GClogin_usuario != null)
	{
		if(globals.GCconex == null) globals.GCconex = 'conexiongestioncomercialag'
		var today = new Date();
		var query = 'select fechalimite from usuarios WHERE cod_us = ' + globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var fecha = dataset.getValue(1,1)
		if(fecha < today)
		{
			
			application.exit(); 
		}
		else
		{
			application.getWindow('DialogUsuarios').hide();
			globals.GCenableBgElements();
		}
	}
	else
	{
		application.getWindow('DialogUsuarios').hide();
		globals.GCenableBgElements();
	}
	

	plugins.window.createShortcut('control A', globals.handle_shortCutGC);
	plugins.window.createShortcut('ESCAPE', globals.handle_shortCutGC);
	return true
}
