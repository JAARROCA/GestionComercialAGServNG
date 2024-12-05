/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"BD3CA28B-C80C-4B72-B223-E33850551C35"}
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	//application.setNumpadEnterAsFocusNextEnabled(true)
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @properties={typeid:24,uuid:"F6CE6FB2-6B4B-4357-B9FC-AC35FF062BCE"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	globals.GCcurID_PedidoCompra = npedido
	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
			globals.GCRegistroNuevo = null
			doEdit()
		}
	}
	if(GCtbpedidocompracabecera_to_tbpedidocompralinea)
	{
		if(GCtbpedidocompracabecera_to_tbpedidocompralinea.getSize() > 0)
		{
			forms.lst_PedidoCompras_LineasGC.foundset.setSelectedIndex(1)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"BD76E6CA-0747-4402-9E7F-0E80ECA83E09"}
 */
function btn_save()
{
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Pedidos de Compras.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(!fecha)
		{
			globals.GCshowErrorDialog('Falta introducir la fecha del pedido.',null,'Aceptar',null,null,null)
		}
		else if(!proveedor)
		{
			globals.GCshowErrorDialog('Falta introducir el proveedor del pedido.',null,'Aceptar',null,null,null)
		}
		else if(!GCtbpedidocompracabecera_to_tbmaestroproveedores || !GCtbpedidocompracabecera_to_tbmaestroproveedores.id)
		{
			globals.GCshowErrorDialog('Falta introducir un proveedor válido.',null,'Aceptar',null,null,null)
		}
		else
		{
			if(globals.GCRegistroNuevo == 1)
			{
				query = 'select pedidocompras from [ParametrosAplicacion]'
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				npedido = dataset.getValue(1, 1) + 1	
			}
			if(gctbpedidocompracabecera_to_tbpedidocompralinea)
			{
				var rows = gctbpedidocompracabecera_to_tbpedidocompralinea.getSize();
				for(var i=1;i<=rows;i++)
				{
					var record = gctbpedidocompracabecera_to_tbpedidocompralinea.getRecord(i);
					if(record.proveedor != proveedor)
					{
						record.preoveedor = proveedor;		
						databaseManager.saveData(record)
					}
				}		
			}
			_super.btn_save()
			query = 'select [npedido] from [tbPedidoCompraCabecera] order by [npedido] desc'
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n == null) n = 0;
			
			var result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
			var fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
			while(result==false)
			{
				if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize())
				{
					forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(1);
					break;
				}
			forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
			result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
			}
			
			forms.dlg_ParametroAplicacionGC.foundset.pedidocompras = n;
			
			databaseManager.saveData()
			globals.GCRegistroNuevo = null
			/*query = 'UPDATE parametrosaplicacion SET [NumProgCliente] = '+n+' WHERE nºempresa = 1'
			var done = plugins.rawSQL.executeSQL(ds[1],"parametrosaplicacion",query)
			if (done)
			{
				//flush is required when changes are made in db
				plugins.rawSQL.flushAllClientsCache(ds[1],"parametrosaplicacion")
			}
			else
			{
				var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
				plugins.dialogs.showErrorDialog('Error',  'SQL exception: '+msg,  'Ok')
			}*/
			elements.BtnProveedor.visible = false
			elements.BtnAddProveedor.visible = false
			elements.btn_Proveedor.visible = true
			elements.btnEnvMail.visible = true
			elements.btn_Consulta.visible = true
			elements.lblfecha_cot.visible = true
			elements.fld_fecha_cot.visible = false
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
 * @properties={typeid:24,uuid:"15F5BCA4-B001-4378-95F0-D574D687122D"}
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
	elements.BtnProveedor.visible = true
	elements.btn_Proveedor.visible = false
	elements.btnEnvMail.visible = false
	elements.btn_Consulta.visible = false
	elements.lblfecha_cot.visible = false
	elements.fld_fecha_cot.visible = true
	elements.fld_fecha_cot.bgcolor = '#FFFF00';
	elements.fld_proveedor.bgcolor = '#FFFF00';
	
	
	
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
 * @properties={typeid:24,uuid:"ECF5E710-7500-4733-88B1-57092B530CDE"}
 */
function btn_cancel()
{
	globals.GCRegistroNuevo = null
	_super.btn_cancel()
	elements.BtnProveedor.visible = false
	elements.BtnAddProveedor.visible = false
	elements.btn_Proveedor.visible = true
	elements.btnEnvMail.visible = true
	elements.btn_Consulta.visible = true
	elements.lblfecha_cot.visible = true
	elements.fld_fecha_cot.visible = false
	
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
 * @properties={typeid:24,uuid:"2AA547E2-4BA9-4F3D-8CC0-609547D815C4"}
 */
function onShow(firstShow,event)
{
	//make read only
	if(!globals.GClogin_usuario) globals.btn_SalirGC(event)
	 btn_cancel();
	onLoad(event)
	globals.GCnav_search = null
	controller.readOnly = true

	//hide save/cancel btsn
	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
	elements.BtnProveedor.visible = false
	elements.btn_Proveedor.enabled = true
	elements.btnEnvMail.enabled = true
	globals.GCRegistroNuevo = null
	
}

/**
 * @properties={typeid:24,uuid:"EE867080-CFF9-43CB-A9B6-BEF9DD5F9CFD"}
 */
function btn_sendEmail()
{
	if(globals.GCisEditing()) forms.FrmPedidosComprasGC.btn_cancel()
	if(npedido)
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
				globals.GCFormulario = 'FrmPedidosCompras'
				globals.GCshowDialogEnvioMail('Impresión y Envio de Pedido de Compra',1,null,null,null,null,null,null,null,null)
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"C14869DF-89E3-440C-8752-ADCF6F546DB1"}
 */
function sub_setNewNumeroPedido()
{
	var query = 'select [PedidoCompras] from [ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	npedido = dataset.getValue(1, 1) + 1	
	
}

/**
 * @properties={typeid:24,uuid:"E7324E08-E01F-4450-A760-EFB0D91D75E7"}
 */
function validate_autoEnter()
{
	sub_setNewNumeroPedido();	
	
	globals.GCRegistroNuevo = 1
	var Fecha = utils.dateFormat(new Date(),'dd-MM-yyyy')
	fecha = utils.parseDate(Fecha,'dd-MM-yyyy')
	elements.BtnAddProveedor.visible = true
	usuario = globals.GClogin_usuario
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"9AB034ED-9899-4559-AD05-F68D6088F044"}
 */
function validate_beforeDelete()
{
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Pedidos de Compras.',null,'Aceptar',null,null,null)
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
 * @properties={typeid:24,uuid:"C9997993-2C73-4067-ABF7-6D0CF8AABA7F"}
 */
function onActionBtnProveedor(event) {
	// TODO Auto-generated method stub	
	globals.GCFormulario = 'FrmPedidosCompras';
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
 * @properties={typeid:24,uuid:"2F096BF1-FF38-43DE-8723-8504F76E5E82"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
		onDataChangefecha()
		elements.BtnProveedor.requestFocus()
	
}

/**
 *
 * @properties={typeid:24,uuid:"8C044950-1154-4C97-885D-676ABEB50AD4"}
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
			var query = "select [npedido] from [tbPedidoCompraCabecera] order by [npedido] desc"			
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n == null) n = 0;
			forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords()
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
			
			forms.dlg_ParametroAplicacionGC.pedidocompras = n;
			databaseManager.saveData()
	}
}

/**
 * @properties={typeid:24,uuid:"65FBE73A-B920-435C-B322-DD98F07690FA"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_PedidoCompra_list();
}

/**
 * @properties={typeid:24,uuid:"E8016860-EC53-4FDB-84D8-5ECEB9D0510A"}
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 */
function rpt_PedidoCompra_list()
{
	
	try
	{
		/*var desdenped = forms.FrmPedidosComprasGC.npedido
		if(desdenped == null || desdenped == '') desdenped = 0
		var hastanped = forms.FrmPedidosComprasGC.npedido
		if(hastanped == null || hastanped == '') hastanped = 999999
		var desdepro = forms.FrmPedidosComprasGC.proveedor
		if(desdepro == null || desdepro == '') desdepro = 0
		var hastapro = forms.FrmPedidosComprasGC.proveedor
		if(hastapro == null || hastapro == '') hastapro = 999999
		globals.btn_runJasperReportPedidoCompra(desdenped,hastanped,desdepro,hastapro)		
		application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		*/
		globals.GCshowDialogImpresionPedidosCompras('Impresión Pedidos a Proveedores',1,null,null,null,null,null,null,null,null)
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
 * @properties={typeid:24,uuid:"64554106-1F77-495C-ACFB-889A3B6AD22B"}
 */
function onActionproveedor(event) {
	// TODO Auto-generated method stub
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"7D22C081-0AF0-40E8-842C-26A20385F8B5"}
 */
function onDataChangefecha() {
	if(fecha){
	var fech = utils.dateFormat(fecha,'dd-MM-yyyy')
	fecha = utils.parseDate(fech,'dd-MM-yyyy')
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"9D8C9E6D-006E-4055-AEC6-B00C11C99DD0"}
 */
function btn_BDProveedores(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmPedidosComprasGC.btn_cancel()
	if(proveedor)
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
		globals.GCFormulario = 'FrmPedidosComprasGC';
		forms.FrmProveedoresGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(2) */
		
		var query = "select [ID] from [tbMaestroProveedores] where [Codpro] = " + proveedor
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
		globals.GCshowDialogProveedor('Proveedor', 1, null, null, true, 'Borrar Proveedor', null, null, null, null);
		
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
		globals.GCFormulario = 'FrmPedidosComprasGC';
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

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"71E92201-BFF9-4E9E-95AE-F6B18079E346"}
 */
function btnConsulta(event) {
	globals.GCshowDialogConsultaPedidosCompras('Consulta Pedidos a Proveedores',1,null,null,null,null,null,null,null,null)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"14A61C06-FBDE-4DB5-A715-9CF1EE49456A"}
 */
function btn_AddProveedor(event) {
	// TODO Auto-generated method stub
	if(!globals.GCisEditing()) globals.GCstartEditing()	
	forms.dlg_ProveedoresGC.ProveedorID = null;
	forms.dlg_ProveedoresGC.foundset.newRecord(true)
	forms.dlg_ProveedoresGC.id = application.getUUID()
	forms.dlg_ProveedoresGC.pais = 'ES'
	forms.dlg_ProveedoresGC.elements.idcodigo.editable = true
	forms.dlg_ProveedoresGC.elements.idcodigo.bgcolor = '#FFFF00'//'#ffffff'
	forms.dlg_ProveedoresGC.elements.idcodigo.visible = true
	forms.dlg_ProveedoresGC.elements.lblidcodigo.visible = false	
	forms.dlg_ProveedoresGC.elements.btn_print.enabled = false	
	forms.dlg_ProveedoresGC.elements.idcodigo.requestFocus()
	
	globals.GCshowDialogProveedor('BD Proveedores', 1, null, null, true, null, null, null, null, null);	
}
