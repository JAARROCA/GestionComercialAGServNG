/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"ECEB6EC3-1969-48A7-B233-15A91BD8414E"}
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
	
}

/**
 * @properties={typeid:24,uuid:"7BBF6A8A-CEFC-413D-94FD-17A3BFCCBD93"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_Pedido = id
	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
			doEdit()
		}
	}
	if(GCcortraba_to_lortraba)
	{
		if(GCcortraba_to_lortraba.getSize() > 0)
		{
			//forms.lst_Pedido_LineasGC.foundset.setSelectedIndex(1)
			forms.lst_PedidoLineasGCNG.elements.table_PedidoLineas.myFoundset.foundset.setSelectedIndex(1)
			forms.lst_PedidoLineasGCNG.elements.table_PedidoLineas.myFoundset.foundset.sort('nli_lot asc')
		}
	}
}

/**
 * @properties={typeid:24,uuid:"F2D2CD45-00CA-4F16-BC71-311A9D318939"}
 */
function btn_save()
{
	var query = 'select savepedidos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Pedidos.','Aceptar')
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Pedidos.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(!fecha_cot)
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Falta introducir la fecha del pedido.','Aceptar')
			//globals.GCshowErrorDialog('Falta introducir la fecha del pedido.',null,'Aceptar',null,null,null)
		}
		else if(!clie_cot)
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Falta introducir el cliente del pedido.','Aceptar')
			//globals.GCshowErrorDialog('Falta introducir el cliente del pedido.',null,'Aceptar',null,null,null)
		}
		else if(!GCcortraba_to_tbmaestroclientes)
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Falta introducir el cliente del pedido.','Aceptar')
			//globals.GCshowErrorDialog('Falta introducir el cliente del pedido.',null,'Aceptar',null,null,null)
		}
		else if(!GCcortraba_to_tbmaestroclientes.id)
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Falta introducir el cliente del pedido.','Aceptar')
			//globals.GCshowErrorDialog('Falta introducir el cliente del pedido.',null,'Aceptar',null,null,null)
		}
		else
		{
			
			if(globals.GCRegistroNuevo == 1)
			{
				query = 'select numpedido from [ParametrosAplicacion]'
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				cod_cot = dataset.getValue(1, 1) + 1	
			}
			if(GCcortraba_to_lortraba)
			{
				var rows = GCcortraba_to_lortraba.getSize();
				for(var i=1;i<=rows;i++)
				{
					var record = GCcortraba_to_lortraba.getRecord(i);
					if(record.clie_lot != clie_cot)
					{
						record.clie_lot = clie_cot;		
						databaseManager.saveData(record)
					}
				}		
			}
			_super.btn_save()
			query = 'select [cod_cot] from [cortraba] order by [cod_cot] desc'
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n == null) n = 0;
			/*var result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
			var fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
			while(result==false)
			{
				if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize())
				{
				return;
				}
			forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
			result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
			}
			forms.dlg_ParametroAplicacionGC.foundset.numpedido = n;	*/
			gcparametrosaplicacion_to_parametrosaplicacion.numpedido = n;
			databaseManager.saveData()
			globals.GCRegistroNuevo = null
			
			elements.BtnCliente.visible = false
			elements.btn_Cliente.visible = true
			elements.btnGenAlb.visible = true
			elements.btnEnvMail.visible = true
			elements.BtnFormaPago.visible = false
			elements.lblfecha_cot.visible = true
			elements.fld_fecha_cot.visible = false
			elements.btnUltimoPedido.visible = true
			
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
			{
				/** @type Number*/
				/*var idx = elements.tabs_mainPanel.tabIndex;
				var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
				forms[frm].controller.enabled = true
				forms[frm].controller.readOnly = false*/
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"35B667B7-2B2F-45B8-9654-1B63A3D2B916"}
 */
function doEdit()
{
	_super.doEdit()
	//hide the non combobox fields
	/*elements.fld_companyCategory.visible = false
	elements.fld_companyIndustry.visible = false
	elements.fld_companyType.visible = false
	elements.fld_accountmanager.visible = false
	elements.fld_status.visible = false

	//show the comboboxes
	elements.fld_companyCategoryc.visible = true
	elements.fld_companyIndustryc.visible = true
	elements.fld_companyTypec.visible = true
	elements.fld_accountmanagerc.visible = true
	elements.fld_statusc.visible = true

	//hide the buttons that will mess things up
	elements.btn_openURL.visible = false
	elements.btn_sendEmail.visible = false

	//disable the navpanel at the bottom
	elements.tabs_mainPanel.enabled = false*/

	//for web client - disable the form showing in the tabpanel at the bottom
	elements.BtnCliente.visible = true;
	elements.btn_Cliente.visible = false;
	elements.btnGenAlb.visible = false;
	elements.btnEnvMail.visible = false;
	elements.BtnFormaPago.visible = true;
	elements.lblfecha_cot.visible = false;
	elements.fld_fecha_cot.visible = true;
	elements.fld_fecha_cot.bgcolor = '#FFFF00';
	elements.fld_clie_cot.bgcolor = '#FFFF00';
	elements.btnUltimoPedido.visible = false
	
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		/** @type Number*/
		/*var idx = elements.tabs_mainPanel.tabIndex;
		var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
		forms[frm].controller.enabled = false
		forms[frm].controller.readOnly = true*/
	}
}

/**
 * @properties={typeid:24,uuid:"E0B78A18-E35B-488A-ADE1-EDAB5C2CDC2B"}
 */
function btn_cancel()
{
	globals.GCRegistroNuevo = null
	_super.btn_cancel()
	elements.BtnCliente.visible = false
	elements.btn_Cliente.visible = true
	elements.btnGenAlb.visible = true
	elements.btnEnvMail.visible = true
	elements.BtnFormaPago.visible = false
	elements.lblfecha_cot.visible = true
	elements.fld_fecha_cot.visible = false
	elements.btnUltimoPedido.visible = true
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		/** @type Number*/
		/*var idx = elements.tabs_mainPanel.tabIndex;
		var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
		forms[frm].controller.enabled = true
		forms[frm].controller.readOnly = false*/
	}
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"EC3B2AF7-287A-4960-AC07-053FBCB7101A"}
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
	elements.BtnCliente.visible = false
	elements.btn_Cliente.enabled = true
	elements.BtnFormaPago.visible = false
	elements.lblfecha_cot.visible = true
	elements.fld_fecha_cot.visible = false
	globals.GCRegistroNuevo = null	
}

/**
 * @properties={typeid:24,uuid:"5189ADF7-748C-45DC-917A-B7C2DBB14F65"}
 */
function evt_changeItem()
{
	nomcl_cot = GCcortraba_to_tbmaestroclientes.desccliente
	dircl_cot = GCcortraba_to_tbmaestroclientes.direccion
	pobcl_cot = GCcortraba_to_tbmaestroclientes.poblacion
	procl_cot = GCcortraba_to_tbmaestroclientes.provincia
	cdpcl_cot = GCcortraba_to_tbmaestroclientes.codpostal
	telcl_cot = GCcortraba_to_tbmaestroclientes.telf1
	faxcl_cot = GCcortraba_to_tbmaestroclientes.fax
	emacl_cot = GCcortraba_to_tbmaestroclientes.emailcontacto
	cfpa_cot = GCcortraba_to_tbmaestroclientes.idformapago
	
	
}

/**
 * @properties={typeid:24,uuid:"FA4B79AE-E493-4CCF-A166-DD2C416754CE"}
 */
function btn_sendEmail()
{
	if(globals.GCisEditing()) forms.FrmPedidosGC.btn_cancel()
	if(cod_cot)
	{
		var query = 'select [ServidorCorreoSMTP] from [ParametrosAplicacion]'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var SMTP = dataset.getValue(1,1)
		if(SMTP == null || SMTP == '')
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','No está definido el Servidor de Correo SMTP en los Parametros de la Aplicación.','Aceptar')
			//globals.GCshowErrorDialog('No está definido el Servidor de Correo SMTP en los Parametros de la Aplicación.',null,'Aceptar',null,null,null)
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
				scopes.svyCustomDialogs.showErrorDialog('Error','No están definidos los datos de la cuenta de correo del usuario en los Usuarios.','Aceptar')
				//globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else if(UserEmail == null || UserEmail == '')
			{
				scopes.svyCustomDialogs.showErrorDialog('Error','No están definidos los datos de la cuenta de correo del usuario en los Usuarios.','Aceptar')
				//globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else if(PasswEmail == null || PasswEmail == '')
			{
				scopes.svyCustomDialogs.showErrorDialog('Error','No están definidos los datos de la cuenta de correo del usuario en los Usuarios.','Aceptar')
				//globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else
			{
				globals.GCFormulario = 'FrmPedidos'
				globals.GCshowDialogEnvioMail('Impresión y Envio Pedido',1,null,null,null,null,null,null,null,null)
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"E2774405-BD45-42FE-90E0-D41478D5C335"}
 */
function sub_setNewNumeroPedido()
{
	var query = 'select [NumPedido] from [ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	cod_cot = dataset.getValue(1, 1) + 1	
	
}

/**
 * @properties={typeid:24,uuid:"B03FFFD3-B5B9-46C1-9C49-05BDAF6B444B"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	sub_setNewNumeroPedido();	
	
	globals.GCRegistroNuevo = 1
	var Fecha = utils.dateFormat(new Date(),'dd-MM-yyyy')
	fecha_cot = utils.parseDate(Fecha,'dd-MM-yyyy')
	usu_cot = globals.GClogin_usuario;
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"DC1C23D8-5080-42FC-B820-C86386BF2AA7"}
 */
function validate_beforeDelete()
{
	var query = 'select savepedidos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para borrar Pedidos.','Aceptar')
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Pedidos.',null,'Aceptar',null,null,null)
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
 * @properties={typeid:24,uuid:"3A4CE03B-0384-4C78-9A00-0044EBE7A5EC"}
 */
function onActionBtnCliente(event) {
	// TODO Auto-generated method stub	
	globals.GCFormulario = 'FrmPedidos';
	//globals.GCshowDialogClientes('Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Clientes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Clientes';
	//win.resizable = true;
	win.show(forms.dlgClientesGC)
	//win.show(forms.dialog_ClientesGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7353EA26-5BFD-45B4-A863-28A9ACCC20D0"}
 */
function btnGeneracionAlbaran(event) {
	if(globals.GCisEditing()) forms.FrmPedidosGC.btn_cancel()
	var query = 'select savealbaran from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Albaranes.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(cod_cot)
		{
			var uid = id;
			var result = forms.dlg_Generacion_Albaran2GC.foundset.selectRecord(uid)
			var fsCount = databaseManager.getFoundSetCount(forms.dlg_Generacion_Albaran2GC.foundset);
			while(result==false)
			{
				if(fsCount == forms.dlg_Generacion_Albaran2GC.foundset.getSize()) return;
				forms.dlg_Generacion_Albaran2GC.foundset.setSelectedIndex(forms.dlg_Generacion_Albaran2GC.foundset.getSize());
				result = forms.dlg_Generacion_Albaran2GC.foundset.selectRecord(uid);
			}
			//start a transaction
			//if(!globals.GCisEditing()) globals.GCstartEditing()
		
			//setup the method to execute when the dialog closes
			//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deletePresupuestoLinea()'
		
			//show the "fake" dialog
			globals.GCshowDialogGeneracionAlbaran2('Generacion Albaran', 1, null, null, true, null, null, null, null, null);
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AB3C85BE-37FA-4B52-9F14-BDC206A2552D"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	elements.fld_clie_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BF3F6413-B267-46D9-A7F1-CC27074946E7"}
 */
function onActionnom(event) {
	// TODO Auto-generated method stub
	elements.fld_dircl_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"595BA4EB-6055-4303-B34C-069C747AE00F"}
 */
function onActiondir(event) {
	// TODO Auto-generated method stub
	elements.fld_pobcl_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"995E8962-068C-4930-AA4B-00EF0276BDAD"}
 */
function onActionproy(event) {
	// TODO Auto-generated method stub
	elements.fld_pobcl_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B1ADA07-8502-41B8-B39B-4ACB83435C17"}
 */
function onActionpob(event) {
	// TODO Auto-generated method stub
	elements.fld_cdpcl_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"929FD340-4161-4784-9585-ED6A882287AF"}
 */
function onActionpro(event) {
	// TODO Auto-generated method stub
	elements.fld_attcl_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3309EC98-B239-4B12-A352-75903AC6293F"}
 */
function onActioncdp(event) {
	// TODO Auto-generated method stub
	elements.fld_procl_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2401F76F-7BEF-4988-A3FC-69F9142BF00B"}
 */
function onActionatt(event) {
	// TODO Auto-generated method stub
	elements.fld_telcl_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3CC132DE-043B-4FED-9F8A-028DE8E42F10"}
 */
function onActiontelf(event) {
	// TODO Auto-generated method stub
	elements.fld_faxcl_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3C057A0B-58CE-4804-9AC3-42E589591736"}
 */
function onActionfax(event) {
	// TODO Auto-generated method stub
	elements.fld_rcli_cot.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"909D43D4-987B-4205-9220-CFD98C2C8FA0"}
 */
function onActionrcli(event) {
	// TODO Auto-generated method stub
	elements.fld_emacl_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4E833AC1-2491-4576-80F4-13A29F69F00F"}
 */
function onActionema(event) {
	// TODO Auto-generated method stub
	elements.fld_portes_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"52274335-7297-4F48-A70F-89A456F6F22E"}
 */
function onActionportes(event) {
	// TODO Auto-generated method stub
	elements.fld_refofe_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA44DA6D-6EE8-493E-B8EA-E00C6B8C5B07"}
 */
function onActionrefped(event) {
	// TODO Auto-generated method stub
	elements.fld_cfpa_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D68991AA-FEF3-4DF6-A0DD-34B2DF03DC4B"}
 */
function btn_BDCliente(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmPedidosGC.btn_cancel()
	if(clie_cot != null)
	{
		/*var win = application.getWindow('Maestros')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		win = application.createWindow("Maestros", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Clientes';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmPedidosGC';
		forms.FrmClientesGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) */
		
		var query = "select [ID] from [tbMaestroClientes] where [IdCliente] = " + clie_cot
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		
		var result = forms.dlg_ClientesGC.foundset.selectRecord(dataset.getValue(1,1))
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ClientesGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ClientesGC.foundset.getSize())
			{
				return;
			}
			forms.dlg_ClientesGC.foundset.setSelectedIndex(forms.dlg_ClientesGC.foundset.getSize());
		result = forms.dlg_ClientesGC.foundset.selectRecord(dataset.getValue(1,1));
		}
		
		if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ClientesGC.elements.idcodigo.bgcolor = '#f0f0f0'
		forms.dlg_ClientesGC.elements.idcodigo.readOnly = true
		forms.dlg_ClientesGC.elements.idcodigo.visible = false
		forms.dlg_ClientesGC.elements.lblidcodigo.visible = true
		globals.GCshowDialogCliente('BD Clientes', 1, null, null, true, null, null, null, null, null);
		
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
		win.title = 'BD Clientes';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmPedidosGC';
		forms.FrmClientesGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) */
		forms.dlg_ClientesGC.foundset.setSelectedIndex(1)
		if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ClientesGC.elements.idcodigo.readOnly = true
		forms.dlg_ClientesGC.elements.idcodigo.bgcolor = '#f0f0f0';
		forms.dlg_ClientesGC.elements.idcodigo.visible = false
		forms.dlg_ClientesGC.elements.lblidcodigo.visible = true
		globals.GCshowDialogCliente('BD Cliente', 1, null, null, true, null, null, null, null, null);
		
	}
}

/**
 * @properties={typeid:24,uuid:"BBB08FD7-5D16-424B-87E0-E1E713860AFA"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Pedido_list();
}

/**
 * @properties={typeid:24,uuid:"99D73EAC-D7F0-475A-A8A1-BB1ECB881F03"}
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 */
function rpt_Pedido_list()
{
	
	try
	{
		globals.GCshowDialogConsultaPedidos('Pedidos de Clientes',1,null,null,null,null,null,null,null,null)
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
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
 * @properties={typeid:24,uuid:"38C6C041-49C1-45DE-AA6B-3D7046A57C89"}
 */
function onActionclie(event) {
	// TODO Auto-generated method stub
	evt_changeItem()
	elements.fld_nomcl_cot.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"910976E6-D9E0-42E5-B470-7A70A92EDAEA"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var rows = GCcortraba_to_lortraba.getSize()
	for(var i=1;i<=rows;i++)
	{
		var record = GCcortraba_to_lortraba.getRecord(i)
		record.fecha_lot = fecha_cot
		databaseManager.saveData(record)
	}
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"1CDEECC5-CEBB-45FA-9944-DB25BA9C9299"}
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
		var query = "select [cod_cot] from [cortraba] order by [cod_cot] desc"			
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var n = dataset.getValue(1,1)
		if(n == null) n = 0;
		/*forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords()
		var result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize())
			{
			return;
			}
		forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
		result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
		}
		
		forms.dlg_ParametroAplicacionGC.numpedido = n;*/
		gcparametrosaplicacion_to_parametrosaplicacion.numpedido = n;
		databaseManager.saveData()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"0E1B9485-D776-445F-9D03-E3118BE8102F"}
 */
function btngooglemaps(event) {
	// TODO Auto-generated method stub
	if(dircl_cot)
	{
		var dir = utils.stringReplace(dircl_cot,' ','+')
		var pob = utils.stringReplace(pobcl_cot,' ','+')
		application.showURL( 'http://maps.google.com/maps?q=' + dir + ','+pob,'_blank');
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
 * @properties={typeid:24,uuid:"328E4A0E-4747-40E0-9EE1-9519878F5344"}
 */
function BtnFormasPago(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmPedidos';
	//globals.GCshowDialogFormasPago('Formas de Pago', 1, null, null, true,null, null, null, null, null);
	var win = application.getWindow('Formas Pago')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Formas Pago", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Formas de Pago';
	//win.resizable = true;
	win.show(forms.dlgFormasPagoGCNG)
	//win.show(forms.dialog_FormasPagoGC)
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"850EE13E-78E5-42F4-B500-31A2E67B585D"}
 */
function onFocusLostDtoPP(event) {
	// TODO Auto-generated method stub
	var Dtopp = (impbre_cot * depp_cot) / 100
	var Importebruto = impbre_cot - Dtopp + imprec_cot
	impcie_cot = Importebruto * (piva_cot / 100)
	impcie_cot = globals.GCROUND(impcie_cot,2)
	impnee_cot = Importebruto + impcie_cot
	impnee_cot = globals.GCROUND(impnee_cot,2)
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"BD0FE881-9CF4-4B8F-A83F-B69AE50373A1"}
 */
function onFocusLostIva(event) {
	// TODO Auto-generated method stub
	onFocusLostDtoPP(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"FB21417D-75D9-4D4C-B152-0A8B13A288A4"}
 */
function onActionanticipo(event) {
	// TODO Auto-generated method stub
	elements.fld_depp_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"BEF18AC4-582A-4EBA-8BD5-92DC9A5840EE"}
 */
function onActiondto(event) {
	// TODO Auto-generated method stub
	elements.fld_piva_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @AllowToRunInFind
 *
 *
 *
 * @properties={typeid:24,uuid:"145FC70A-08ED-468C-A5AF-42B26161842C"}
 */
function btn_UltimoPedido(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) btn_cancel()
	
		forms.lst_PedidosGC.foundset.loadAllRecords()
		forms.lst_PedidosGC.btn_sortDesc()
		controller.setSelectedIndex(1)
		if(forms.frm_nav_buttons_pedidosGC.elements.btn_showAll.visible == true) 
		{
			forms.frm_nav_buttons_pedidosGC.btn_showAll()
		}
	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A1D2DBE9-B9A4-4012-9E0B-97C1C9C163FC"}
 */
function onDataChangeCP() {
	if(cdpcl_cot)
	{
		if(cdpcl_cot.length == 5)
		{
			var prov = utils.stringLeft(cdpcl_cot,2)			
			switch( prov )
			{
				case '01': 
				{
					procl_cot = 'ÁLAVA';				
					break;
				}
				case '02': 
				{
					procl_cot = 'ALBACETE';
					break;
				}
				case '03': 
				{
					procl_cot = 'ALICANTE';					
					break;
				}
				case '04': 
				{
					procl_cot = 'ALMERÍA';					
					break;
				}
				case '33': 
				{
					procl_cot = 'ASTURIAS';					
					break;
				}
				case '05': 
				{
					procl_cot = 'ÁVILA';
					break;
				}
				case '06': 
				{
					procl_cot = 'BADAJOZ';					
					break;
				}
				case '08': 
				{
					procl_cot = 'BARCELONA';					
					break;
				}
				case '09': 
				{
					procl_cot = 'BURGOS';					
					break;
				}
				case '10': 
				{
					procl_cot = 'CÁCERES';					
					break;
				}
				case '11': 
				{
					procl_cot = 'CÁDIZ';					
					break;
				}
				case '39': 
				{
					procl_cot = 'CANTABRIA';					
					break;
				}
				case '12':
				{
					procl_cot = 'CASTELLÓN';					
					break;
				}
				case '51':
				{
					procl_cot = 'CEUTA';
					break;
				}
				case '13':
				{
					procl_cot = 'CIUDAD REAL';					
					break;
				}
				case '14':
				{
					procl_cot = 'CÓRDOBA';					
					break;
				}
				case '15':
				{
					procl_cot = 'CORUÑA, A';					
					break;
				}
				case '16':
				{
					procl_cot = 'CUENCA';					
					break;
				}
				case '17':
				{
					procl_cot = 'GIRONA';					
					break;
				}
				case '18':
				{
					procl_cot = 'GRANADA';					
					break;
				}
				case '19':
				{
					procl_cot = 'GUADALAJARA';					
					break;
				}
				case '20':
				{
					procl_cot = 'GUIPÚZCOA';					
					break;
				}
				case '21':
				{
					procl_cot = 'HUELVA';					
					break;
				}
				case '22':
				{
					procl_cot = 'HUESCA';					
					break;
				}
				case '07':
				{
					procl_cot = 'ILLES BALEARS';					
					break;
				}
				case '23':
				{
					procl_cot = 'JAÉN';					
					break;
				}
				case '24':
				{
					procl_cot = 'LEÓN';					
					break;
				}
				case '25':
				{
					procl_cot = 'LLEIDA';					
					break;
				}
				case '27':
				{
					procl_cot = 'LUGO';					
					break;
				}
				case '28':
				{
					procl_cot = 'MADRID';
					break;
				}
				case '29':
				{
					procl_cot = 'MÁLAGA';					
					break;
				}
				case '52':
				{
					procl_cot = 'MELILLA';					
					break;
				}
				case '30':
				{
					procl_cot = 'MURCIA';					
					break;
				}
				case '31':
				{
					procl_cot = 'NAVARRA';					
					break;
				}
				case '32':
				{
					procl_cot = 'OURENSE';					
					break;
				}
				case '34':
				{
					procl_cot = 'PALENCIA';					
					break;
				}
				case '35':
				{
					procl_cot = 'PALMAS, LAS';					
					break;
				}
				case '36':
				{
					procl_cot = 'PONTEVEDRA';					
					break;					
				}
				case '26':
				{
					procl_cot = 'RIOJA, LA';					
					break;
				}
				case '37':
				{
					procl_cot = 'SALAMANCA';					
					break;
				}
				case '38':
				{
					procl_cot = 'S.C.TENERIFE';					
					break;
				}
				case '40':
				{
					procl_cot = 'SEGOVIA';
					break;
				}
				case '41':
				{
					procl_cot = 'SEVILLA';					
					break;
				}
				case '42':
				{
					procl_cot = 'SORIA';					
					break;
				}
				case '43':
				{
					procl_cot = 'TARRAGONA';					
					break;
				}
				case '44':
				{
					procl_cot = 'TERUEL';					
					break;
				}
				case '45':
				{
					procl_cot = 'TOLEDO';					
					break;
				}
				case '46':
				{
					procl_cot = 'VALENCIA';					
					break;
				}
				case '47':
				{
					procl_cot = 'VALLADOLID';					
					break;
				}
				case '48':
				{
					procl_cot = 'VIZCAYA';					
					break;
				}
				case '49':
				{
					procl_cot = 'ZAMORA';					
					break;
				}
				case '50':
				{
					procl_cot = 'ZARAGOZA';
					break;
				}
				default: break;		
			}
			var query = "select municipio_nombre from cp_municipios where  codigo_postal = '" + cdpcl_cot + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			if(dataset.getValue(1,1)) pobcl_cot = dataset.getValue(1,1);
		}
	}
	
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"E56FAD3E-0B9B-4B35-B16B-443CF3D61FD2"}
 */
function btn_listadoPedidos(event) {
	
	globals.GCFormulario = 'FrmPedidosGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialog_Pedidos3')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialog_Pedidos3", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'Últimos Pedidos';
	//win.resizable = true;
	//win.show(forms.dialog_Clientes2GC)
	win.show(forms.lst_Pedidos2GC)

}
