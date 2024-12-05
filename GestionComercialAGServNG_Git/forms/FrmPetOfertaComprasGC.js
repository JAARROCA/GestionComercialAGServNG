/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"D73D4164-895F-4B1B-97DB-508E7021BD3B"}
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	//application.setNumpadEnterAsFocusNextEnabled(true)
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @properties={typeid:24,uuid:"76070957-8C52-480D-B659-4EE18009D686"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	globals.GCcurID_PetOfertaCompra = npetoferta
	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
			globals.GCRegistroNuevo = null
			doEdit()
		}
	}
	if(GCtbpetofertacompracabecera_to_tbpetofertacompralinea)
	{
		if(GCtbpetofertacompracabecera_to_tbpetofertacompralinea.getSize() > 0)
		{
			forms.lst_PetOfertaCompras_LineasGC.foundset.setSelectedIndex(1)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"1FBE2308-4288-449D-8C4C-D63AF30B4357"}
 */
function btn_save()
{
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Peticiones de Ofertas.',null,'Aceptar',null,null,null)		
	}
	else
	{
		/*if(!codpro)
		{
			globals.GCshowErrorDialog('Falta introducir el proveedor de la Petición de Oferta.',null,'Aceptar',null,null,null)
		}
		else if(!GCalbapro_to_tbmaestroproveedores)
		{
			globals.GCshowErrorDialog('Falta introducir un proveedor válido de la Petición de Oferta.',null,'Aceptar',null,null,null)
		}
		else*/
		if(!descproveedor)
		{
			globals.GCshowErrorDialog('Falta introducir un nombre de proveedor a la Petición de Oferta.',null,'Aceptar',null,null,null)
		}
		else
		{
			if(globals.GCRegistroNuevo == 1)
			{
				query = 'select [NPetOferta] from [tbPetOfertaCompraCabecera] ORDER BY [NPetOferta] DESC'
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				npetoferta = dataset.getValue(1, 1) + 1	
			}
			_super.btn_save()
			globals.GCRegistroNuevo = null
			elements.BtnProveedor.visible = false
			elements.btn_Proveedor.visible = true
			elements.btnEnvMail.visible = true
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
			{
				/** @type Number*/
				var idx = elements.tabs_mainPanel.tabIndex;
				var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
				forms[frm].controller.enabled = true
				forms[frm].controller.readOnly = false
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"1F97707B-5C7C-40A7-B064-C0127CA9DA54"}
 */
function doEdit()
{
	_super.doEdit()
	
	
	//for web client - disable the form showing in the tabpanel at the bottom
	elements.BtnProveedor.visible = true
	elements.btn_Proveedor.visible = false
	elements.btnEnvMail.visible = false
	elements.fld_fecha.bgcolor = '#FFFF00';
	elements.fld_descproveedor.bgcolor = '#FFFF00';
	
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		/** @type Number*/
		var idx = elements.tabs_mainPanel.tabIndex;
		var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
		forms[frm].controller.enabled = false
		forms[frm].controller.readOnly = true
	}
}

/**
 * @properties={typeid:24,uuid:"BE6E8295-2BB9-4327-A9E1-B2720978D3A5"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	elements.BtnProveedor.visible = false
	elements.btn_Proveedor.visible = true
	elements.btnEnvMail.visible = true
	globals.GCRegistroNuevo = null
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		/** @type Number*/
		var idx = elements.tabs_mainPanel.tabIndex;
		var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
		forms[frm].controller.enabled = true
		forms[frm].controller.readOnly = false
	}
	
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"8B654BF6-EDB6-47C3-A371-3F0E84927DA2"}
 * @AllowToRunInFind
 */
function onShow(firstShow,event)
{
	//make read only
	if(!globals.GClogin_usuario) globals.btn_SalirGC(event)
	 btn_cancel();
	onLoad(event)
	globals.GCnav_search = null
	foundset.loadAllRecords()
	controller.readOnly = true
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)

	//hide save/cancel btsn
	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
	elements.BtnProveedor.visible = false
	elements.btn_Proveedor.enabled = true
	elements.btnEnvMail.enabled = true
	globals.GCRegistroNuevo = null
	
	
	
}

/**
 * @properties={typeid:24,uuid:"93BB2BD0-DE79-4252-8BA1-121A069783C7"}
 */
function sub_setNewNumeroPeticion()
{
	globals.GCRegistroNuevo = 1
	
	var query = 'select [NPetOferta] from [tbPetOfertaCompraCabecera] ORDER BY [NPetOferta] DESC'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	npetoferta = dataset.getValue(1, 1) + 1	
	
}

/**
 * @properties={typeid:24,uuid:"06A6531F-845F-4771-BD20-8EB6C64BEF03"}
 */
function validate_autoEnter()
{
	sub_setNewNumeroPeticion();	
	
	var Fecha = new Date()
	fecha = Fecha
	
	solicita = globals.GCNombreUsuario
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"693371FD-6973-40C0-BFAE-FF8399627C85"}
 */
function validate_beforeDelete()
{
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Peticiones de Ofertas.',null,'Aceptar',null,null,null)
		return 1
	}
	else
	{
	//var ord = companies_to_orders.getSize()
	//var cont = companies_to_contacts.getSize()

	//if(ord > 0 || cont > 0)
	//{
		//there are contacts and/or orders - so don't allow the delete
	//	if(ord > 0)
	//	{
			//show dialog and return 1
			//show the tabpanel "dialog"
	//		globals.GCshowErrorDialog("You can't delete a company that has orders.\n\nDelete all the orders first.", 'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null);
	//		return 1
	//	}

	//	if(cont > 0)
	//	{
			//show dialog
			//show the tabpanel "dialog"
	//		globals.GCshowErrorDialog("You can't delete a company that has contacts related to it.\n\nDelete all the related contacts first.", 'forms.frm_company.sub_showCompanyContacts()','OK', null, null, null);
	//		return 1
	//	}
	//}
	//else
	//{
		return 0
	//}
	//return null;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"81E65FC6-12EA-4322-ACFB-A328BF3E9BA1"}
 */
function onActionBtnProveedor(event) {
	// TODO Auto-generated method stub	
	globals.GCFormulario = 'FrmPetOfertaCompras';
	//globals.GCshowDialogProveedores('Proveedores', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Proveedores')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Proveedores", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Proveedores';
	//win.resizable = true;
	win.show(forms.dialog_ProveedoresGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"44830541-A3AC-4092-ABDA-8ADBFB36411C"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	
		elements.fld_codpro.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * 
 * TODO generated, please specify type and doc for the params
*
 * @properties={typeid:24,uuid:"FC087B73-3036-4967-A2C1-86DB1B279B35"}
 */
function evt_changeitem() {
	if(codpro)
	{
		descproveedor = GCtbpetofertacompracabecera_to_tbmaestroproveedores.descproveedor
		direccion = GCtbpetofertacompracabecera_to_tbmaestroproveedores.direccion
		poblacion = GCtbpetofertacompracabecera_to_tbmaestroproveedores.poblacion
		provincia = GCtbpetofertacompracabecera_to_tbmaestroproveedores.provincia
	}
}

/**
 *
 * @properties={typeid:24,uuid:"AE69FA89-D278-41E3-846B-5FC47B496466"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		//check to make sure that the address in question isn't used on any orders
		/*var bAdrCnt = addresses_to_orders_billing.getSize()
		var sAdrCnt = addresses_to_orders_shipping.getSize()

		if(bAdrCnt == 0 && sAdrCnt == 0)
		{*/
			foundset.deleteRecord()
		/*}
		else
		{
			//there are orders that use this address
			var msg = 'There are orders that use this address as a shipping or billing address.' +
			' Change the orders to a new address, then you can delete this address.'
			globals.GCshowErrorDialog(msg,'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null)
		}*/
			
	}
}

/**
 * @properties={typeid:24,uuid:"0197BDE7-0401-4DBC-B934-38B96D5A4F5D"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_PeticionOfertaCompras_list();
}

/**
 * @properties={typeid:24,uuid:"C4846462-A168-4629-AFD8-8F9019259CCD"}
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 */
function rpt_PeticionOfertaCompras_list()
{
	
	try
	{
		globals.btn_runJasperReportPeticionOfertas(npetoferta,npetoferta)
	}
	catch (e) 
	{
	   //plugins.dialogs.showErrorDialog('Error',e.toString(),'Ok')
	   application.output(e);   
	   return;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0D39D16-931D-4D2F-8536-92EE6214BF80"}
 */
function onActionproveedor(event) {
	// TODO Auto-generated method stub
	elements.fld_descproveedor.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"4DA73F3E-DE9D-419C-9417-83D6ABEC7A4D"}
 */
function onActionEnviarEmail(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmPetOfertaComprasGC.btn_cancel()
	if(npetoferta)
	{
		var query = 'select [ServidorCorreoSMTP] from [ParametrosAplicacion]'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var SMTP = dataset.getValue(1,1)
		if(SMTP == null || SMTP == '')
		{
			globals.GCshowErrorDialog('No está definido el Servidor de Correo SMTP en los Parametros de la Aplicación.',null,'Aceptar',null,null,null)
		}
		else
		{
			query = 'select imde_us,nuser_us,passw_us from [usuarios] WHERE [cod_us] = ' + globals.GClogin_usuario
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var EmailFrom = dataset.getValue(1,1)
			var UserEmail = dataset.getValue(1,2)
			var PasswEmail = dataset.getValue(1,3)
			if(EmailFrom == null || EmailFrom == '')
			{
				globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else if(UserEmail == null || UserEmail == '')
			{
				globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else if(PasswEmail == null || PasswEmail == '')
			{
				globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else
			{
				globals.GCFormulario = 'FrmPetOfertaCompras'
				globals.GCshowDialogEnvioMail('Impresión y Envio Petición Oferta',1,null,null,null,null,null,null,null,null)
			}
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"822E5468-5790-4304-BB69-A6B19424E2EB"}
 */
function onActiondescprov(event) {
	// TODO Auto-generated method stub
	elements.fld_direccion.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"30BA6D46-5975-4BE3-8E56-3D42C54D6F7D"}
 */
function onActiondireccion(event) {
	// TODO Auto-generated method stub
	elements.fld_poblacion.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"455CE62D-D6A7-439E-9F4A-2DAA6C67DA4E"}
 */
function onActionpobl(event) {
	// TODO Auto-generated method stub
	elements.fld_provincia.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"27C19BBF-AC7A-4F53-B2BE-E870BD4FD808"}
 */
function onActionprov(event) {
	// TODO Auto-generated method stub
	elements.fld_att.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89965D2B-A0F8-42CF-82E4-55D07989159B"}
 */
function onActionatt(event) {
	// TODO Auto-generated method stub
	elements.fld_solicita.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7632D209-7BF6-49EA-A5F8-BBC05B93B226"}
 */
function onActionsolicita(event) {
	// TODO Auto-generated method stub
	elements.fld_fechalimite.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"91C5C113-D0D2-46E5-BDA4-6B6403736769"}
 */
function btn_BDProveedores(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmPetOfertaComprasGC.btn_cancel()
	if(codpro != null )
	{
		/*var win = application.getWindow('Maestros')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		win = application.createWindow("Maestros", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Proveedores';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmPetOfertaComprasGC';
		forms.FrmProveedoresGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(2) */
		
		var query = "select [ID] from [tbMaestroProveedores] where [Codpro] = " + codpro
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		
		var result = forms.dlg_ProveedoresGC.foundset.selectRecord(dataset.getValue(1,1))
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ProveedoresGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ProveedoresGC.foundset.getSize())
			{
				return;
			}
			forms.dlg_ProveedoresGC.foundset.setSelectedIndex(forms.dlg_ProveedoresGC.foundset.getSize());
		result = forms.dlg_ProveedoresGC.foundset.selectRecord(dataset.getValue(1,1));
		}
		if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ProveedoresGC.elements.idcodigo.bgcolor = '#f0f0f0'
		forms.dlg_ProveedoresGC.elements.idcodigo.readOnly = true
		forms.dlg_ProveedoresGC.elements.idcodigo.visible = false
		forms.dlg_ProveedoresGC.elements.lblidcodigo.visible = true
		globals.GCshowDialogProveedor('BD Proveedor', 1, null, null, true, 'Borrar Proveedor', null, null, null, null);
		
	}
	else
	{
		/*win = application.getWindow('Maestros')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		win = application.createWindow("Maestros", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Proveedores';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmPetOfertaComprasGC';
		forms.FrmProveedoresGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(2) */
		
		forms.dlg_ProveedoresGC.foundset.setSelectedIndex(1)
		if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ProveedoresGC.elements.idcodigo.bgcolor = '#f0f0f0'
		forms.dlg_ProveedoresGC.elements.idcodigo.readOnly = true
		forms.dlg_ProveedoresGC.elements.idcodigo.visible = false
		forms.dlg_ProveedoresGC.elements.lblidcodigo.visible = true
		globals.GCshowDialogProveedor('BD Proveedores', 1, null, null, true, 'Borrar Proveedor', null, null, null, null);
		
	}
}
