/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"A2486D4F-EE3B-48F0-B1A5-3506B7D8C2DF"}
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	plugins.window.createShortcut('control F10', handle_shortCut);
	foundset.loadAllRecords()
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
}

/**
 * @properties={typeid:24,uuid:"B819CE6F-2B4B-4748-B4D7-B4375E1526A5"}
 * @SuppressWarnings(unused)
 * @SuppressWarnings(deprecated)
 */
function onRecordSelect()
{
	
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_Presupuesto = id
	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
			doEdit()
		}
	}
	situacion()
	if(GCcofertas_to_lofertas)
	{
		if(GCcofertas_to_lofertas.getSize() > 0)
		{
			forms.lst_Presupuesto_LineasGCNG.foundset.setSelectedIndex(1)
			forms.lst_Presupuesto_LineasGCNG.elements.table_PresupuestoLineas.myFoundset.foundset.setSelectedIndex(1)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"0F5C1BF7-FAE3-4FFA-BC85-8E910AEEE651"}
 */
function btn_save()
{
	var query = 'select savepresupuestos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Presupuestos.','Aceptar')
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Presupuestos.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(situ_cof == 'F' && forms.FrmPresupuestosGC.elements.situ_cof.readOnly == true)
		{
			var btn = scopes.svyCustomDialogs.showErrorDialog('Error','Presupuesto ya facturado. No se puede modificar.','Aceptar')
			if(btn == 'Aceptar') forms.FrmPresupuestosGC.btn_cancel();
			
			//var methd = 'forms.FrmPresupuestosGC.btn_cancel()'
			//globals.GCshowErrorDialog('Presupuesto ya facturado. No se puede modificar.',methd,'Aceptar',null,null,null)
		}
		else if(!fecha_cof)
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Falta introducir la fecha del presupuesto.','Aceptar')
			//globals.GCshowErrorDialog('Falta introducir la fecha del presupuesto.',null,'Aceptar',null,null,null)
		}
		else if(!nomcl_cof)
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Falta introducir el nombre a quien se le realiza el presupuesto.','Aceptar')
			//globals.GCshowErrorDialog('Falta introducir el nombre a quien se le realiza el presupuesto.',null,'Aceptar',null,null,null)
		}
		else
		{
			var editRecs = new Array()
			editRecs = databaseManager.getEditedRecords( foundset)
			if(globals.GCRegistroNuevo == 1)
			{
				query = 'select NumPresupuesto from [ParametrosAplicacion]'
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				cod_cof = dataset.getValue(1, 1) + 1	
			}
			for (var x=0;x<editRecs.length;x++)
			{
				var sit =  editRecs[x]['situconta'];
				if((sit == 'F' || sit == 'A') && elements.situ_cof.readOnly == true)
				{
					var uid = editRecs[x]['id'];
					
					var vSet = databaseManager.getFoundSet(globals.GCconex, 'cofertas')  
					  
					vSet.loadRecords(databaseManager.convertToDataSet([uid])) 
					var rec = vSet.getSelectedRecord()
					if(rec)
					{
						var ds = rec.getChangedData()
						for( var i = 1 ; i <= dataset.getMaxRowIndex() ; i++ )
						{
							var col = ds.getValue(i,1);
							rec[col] = ds.getValue(i,2);
							databaseManager.saveData(rec)
						}
					}
				}				
			}
			if(!usu_cof) usu_cof = globals.GClogin_usuario;
			_super.btn_save()
			query = 'select [cod_cof] from [cofertas] order by [cod_cof] desc'
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n == null) n = 0;
			
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
			forms.dlg_ParametroAplicacionGC.foundset.numpresupuesto = n;	
			databaseManager.saveData()
			globals.GCRegistroNuevo = null
			elements.BtnCliente.visible = false
			elements.BtnFormaPago.visible = false
			elements.BtnAddCliente.visible = false
			elements.BtnContactos.visible = false
			elements.btnGenPed.visible = true
			elements.btnGenAlb.visible = true
			elements.btnGenFactura.visible = true
			elements.btnGenFacturaProforma.visible = true
			elements.btnEnvMail.visible = true
			elements.btn_Cliente.visible = true
			elements.btnUltimoPresupuesto.visible = true
			elements.situ_cof.bgcolor = '#f0f0f0'
			elements.situ_cof.readOnly = true
			elements.lblfecha_cof.visible = true
			elements.fld_fecha_cof.visible = false
			elements.lblfechavalidez_cof.visible = true
			elements.fld_fechavalidez_cof.visible = false
			elements.situ_cof.visible = false
			elements.lblsitu_cof.visible = true
			situacion()
			
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
 * @properties={typeid:24,uuid:"5A56007E-1AE7-4383-97A2-E99673C9902A"}
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
	elements.BtnCliente.visible = true
	elements.BtnFormaPago.visible = true
	elements.BtnAddCliente.visible = true
	elements.BtnContactos.visible = true
	elements.BtnCliente.enabled =true
	elements.btnGenPed.visible = false
	elements.btnGenAlb.visible = false
	elements.btnGenFactura.visible = false
	elements.btnGenFacturaProforma.visible = false
	elements.btnEnvMail.visible = false
	elements.btn_Cliente.visible = false
	elements.lblfecha_cof.visible = false
	elements.fld_fecha_cof.visible = true
	elements.fld_fecha_cof.bgcolor = '#FFFF00';
	elements.lblfechavalidez_cof.visible = false
	elements.fld_fechavalidez_cof.visible = true
	elements.fld_fechavalidez_cof.bgcolor = '#FFFF00';
	elements.fld_nomcl_cof.bgcolor = '#FFFF00';	
	elements.btnUltimoPresupuesto.visible = false
	elements.situ_cof.visible = true
	elements.lblsitu_cof.visible = false
	
	
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
 * @properties={typeid:24,uuid:"3DDA0C86-B9E4-4953-AF37-C8B1E026F88B"}
 */
function btn_cancel()
{
	globals.GCRegistroNuevo = null
	_super.btn_cancel()
	elements.BtnCliente.visible = false
	elements.BtnFormaPago.visible = false
	elements.BtnAddCliente.visible = false
	elements.BtnContactos.visible = false
	elements.btnGenPed.visible = true
	elements.btnGenAlb.visible = true
	elements.btnGenFactura.visible = true
	elements.btnGenFacturaProforma.visible = true
	elements.btnEnvMail.visible = true
	elements.btn_Cliente.visible = true
	elements.situ_cof.bgcolor = '#f0f0f0'
	elements.situ_cof.readOnly = true
	elements.lblfecha_cof.visible = true
	elements.fld_fecha_cof.visible = false
	elements.lblfechavalidez_cof.visible = true
	elements.fld_fechavalidez_cof.visible = false
	elements.btnUltimoPresupuesto.visible = true
	elements.situ_cof.visible = false
	elements.lblsitu_cof.visible = true
	
	situacion()
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
 * 
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"46966846-5A1E-4AAD-9009-7160B87BA743"}
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
	//elements.btnGenPed.visible = true
	elements.btnGenAlb.visible = true
	elements.btnGenFactura.enabled = true
	elements.btnGenFacturaProforma.enabled = false
	elements.btnEnvMail.visible = true
	elements.btn_Cliente.visible = true
	globals.GCRegistroNuevo = null
	
	if(globals.GCFormulario)	
	{
		if(globals.GCFormulario == 'FrmClientesGC')
		{
			if(forms.lst_ClientesPresupuesto_LineasGC.gclofertas_to_cofertas)
			{			
				if(forms.lst_ClientesPresupuesto_LineasGC.gclofertas_to_cofertas.id)
				{
					var uuid = forms.lst_ClientesPresupuesto_LineasGC.gclofertas_to_cofertas.id
					var result = foundset.selectRecord(uuid)
					var fsCount = databaseManager.getFoundSetCount(foundset);
					while(result==false)
					{
						if(fsCount == foundset.getSize())
						{
							return;
						}
						foundset.setSelectedIndex(foundset.getSize());
						result = foundset.selectRecord(uuid);
					}	
				}
			}
		}
	}
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"460CE6E9-1C0B-4FE3-B52E-F6513BDF2639"}
 */
function evt_changeItem(event)
{
	if(clie_cof)
	{
		if(GCcliente_presupuesto)
		{
			nomcl_cof = GCcliente_presupuesto.desccliente
			dircl_cof = GCcliente_presupuesto.direccion
			pobcl_cof = GCcliente_presupuesto.poblacion
			procl_cof = GCcliente_presupuesto.provincia
			cdpcl_cof = GCcliente_presupuesto.codpostal
			telcl_cof = GCcliente_presupuesto.telf1
			faxcl_cof = GCcliente_presupuesto.fax
			emacl_cof = GCcliente_presupuesto.emailcontacto
			if(GCcliente_presupuesto.idformapago) cfpa_cof = GCcliente_presupuesto.idformapago
			if(GCcliente_presupuesto.tipoiva) piva_cof = GCcliente_presupuesto.tipoiva
			if(piva_cof == null)
			{
				piva_cof = 0;
			}			
			if(GCcliente_presupuesto.dto) depp_cof = GCcliente_presupuesto.dto;
			if(impbre_cof) onFocusLostIva(event)
			/*if(depp_cof)
			{
				onFocusLostDtoPP(event)
			}*/
		}
	}
	
	
}

/**
 * @properties={typeid:24,uuid:"69ACF0E3-5777-40E8-934B-1EB7384DDC72"}
 */
function btn_sendEmail()
{
	if(globals.GCisEditing()) forms.FrmPresupuestosGC.btn_cancel()
	//if(emacl_cof) application.showURL( 'mailto:' + emacl_cof, '_blank');
	if(cod_cof)
	{
		try
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
					globals.GCFormulario = 'FrmPresupuesto'
					globals.GCshowDialogEnvioMail('Impresión y Envio Presupuesto',1,null,null,null,null,null,null,null,null)
				}
			}	
			
		}
		catch (e) 
		{
		    application.output(e);   
			return;
		}
	}
}

/**
 * @properties={typeid:24,uuid:"119731F3-557D-4DCE-9B76-4E9150711DC3"}
 */
function sub_setNewNumeroPresupuesto()
{
	var query = 'select NumPresupuesto from [ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	cod_cof = dataset.getValue(1, 1) + 1	
	
		
	
}

/**
 * @properties={typeid:24,uuid:"D9D1FF4D-E5DA-467D-944E-CD9720E6D667"}
 */
function sub_NombreUsuario()
{
	var query = "select [nom_us] from [usuarios] WHERE [cod_us] ="+globals.GClogin_usuario;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	hace_cof = dataset.getValue(1, 1)		
}

/**
 * @properties={typeid:24,uuid:"886BAC9C-379E-43AD-9EC0-E512ACF0A088"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	sub_setNewNumeroPresupuesto();	
	
	sub_NombreUsuario();
	globals.GCRegistroNuevo = 1
	var Fecha = utils.dateFormat(new Date(),'dd-MM-yyyy')
	fecha_cof = utils.parseDate(Fecha,'dd-MM-yyyy')
	var fech = new Date();
	fech = fech.setDate(fecha_cof.getDate() + 85)
	fechavalidez_cof = fech	
	usu_cof = globals.GClogin_usuario
	//rcli_cof = '.'
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"B86B52C8-0522-46D6-80C3-29540B7C481F"}
 */
function validate_beforeDelete()
{
	var query = 'select savepresupuestos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para borrar Presupuestos.','Aceptar')
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Presupuestos.',null,'Aceptar',null,null,null)
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
		if(situ_cof == 'A') 
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Presupuesto ya albaranado, no se puede borrar sin borrar antes el albarán y cambiando manualmente la situación.','Aceptar')
			//globals.GCshowErrorDialog("Presupuesto ya albaranado, no se puede borrar sin borrar antes el albarán y cambiando manualmente la situación.", null,'Aceptar', null, null, null);
			return 1	
		}
		else if(situ_cof == 'F') 
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Presupuesto ya facturado, no se puede borrar sin borrar antes la factura y cambiando manualmente la situación.','Aceptar')
			//globals.GCshowErrorDialog("Presupuesto ya facturado, no se puede borrar sin borrar antes la factura y cambiando manualmente la situación.", null,'Aceptar', null, null, null);
			return 1	
		}
		else return 0
		//}
		//return null;

	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"14D76B0B-1D70-41FD-9C31-29265F24D7AC"}
 */
function onActionBtnCliente(event) {
	// TODO Auto-generated method stub	
	globals.GCFormulario = 'FrmPresupuestos';
	//globals.GCshowDialogClientes('Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Clientes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Clientes';
	//win.resizable = true;
	//win.show(forms.dialog_ClientesGC)
	win.show(forms.dlgClientesGC)
}

/**
 * @properties={typeid:24,uuid:"4FA081BF-F50B-472F-A4BA-DC6E953E90EC"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Presupuesto_list();
	
}

/**
 * @properties={typeid:24,uuid:"18292C3A-E0A1-4E05-BC43-806C6C486216"}
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 */
function rpt_Presupuesto_list()
{
	
	try
	{
		forms.dlg_ImpresionPresupuestosGC.DesdePresupuesto = cod_cof;
		forms.dlg_ImpresionPresupuestosGC.HastaPresupuesto = cod_cof;		
		globals.GCshowDialogImpresionPresupuestos('Impresión de Presupuestos',1,null,null,null,null,null,null,null,null)
		/*var DNUP = cod_cof;
		var HNUP = cod_cof;
		var DCLI = clie_cof;
		var HCLI = clie_cof;
		globals.btn_runJasperReportPresupuestoVentas(DNUP,HNUP,DCLI,HCLI)
		application.updateUI();
		*/
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
 * @properties={typeid:24,uuid:"A28E558E-3EEB-416A-AE43-0230AEDAF910"}
 */
function btnGeneracionPedido(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmPresupuestosGC.btn_cancel()
	
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
		if(cod_cof)
		{
			if(!situ_cof)
			{
				var result = forms.dlg_Generacion_PedidoGC.foundset.selectRecord(id)
				var fsCount = databaseManager.getFoundSetCount(forms.dlg_Generacion_PedidoGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.dlg_Generacion_PedidoGC.foundset.getSize())
				{
					return;
				}
				forms.dlg_Generacion_PedidoGC.foundset.setSelectedIndex(forms.dlg_Generacion_PedidoGC.foundset.getSize());
				result = forms.dlg_Generacion_PedidoGC.foundset.selectRecord(id);
				}
				//start a transaction
				if(!globals.GCisEditing()) globals.GCstartEditing()
		
				//setup the method to execute when the dialog closes
				//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deletePresupuestoLinea()'
		
				//show the "fake" dialog
				globals.showDialogGeneracionPedidoGC('Generación Pedido', 1, null, null, true, null, null, null, null, null);
			}
			else if(situ_cof == 'A')
			{
				scopes.svyCustomDialogs.showErrorDialog('Error','Presupuesto aceptado ya generado anteriormente.','Aceptar')
				//globals.GCshowErrorDialog('Presupuesto aceptado ya generado anteriormente.',null,'Aceptar',null,null,null)
			}
			else if(situ_cof == 'N')
			{
				scopes.svyCustomDialogs.showErrorDialog('Error','Presupuesto no aceptado.','Aceptar')
				//globals.GCshowErrorDialog('Presupuesto no aceptado.',null,'Aceptar',null,null,null)
			}
			else if(situ_cof == 'F')
			{
				scopes.svyCustomDialogs.showErrorDialog('Error','Presupuesto ya facturado.','Aceptar')
				//globals.GCshowErrorDialog('Presupuesto ya facturado.',null,'Aceptar',null,null,null)
			}
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"859ED370-1786-4673-A262-3DE0E843E262"}
 */
function btnGeneracionAlbaran(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmPresupuestosGC.btn_cancel()
	
	var query = 'select savealbaran from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Albaranes.','Aceptar')
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Albaranes.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(cod_cof)
		{
			if(situ_cof == null)
			{
				if(!clie_cof)
				{
					scopes.svyCustomDialogs.showErrorDialog('Error','Cliente no dado de alta en la BD Maestras. Cree primero el cliente antes de generar el albarán.','Aceptar')
					//globals.GCshowErrorDialog('Cliente no dado de alta en la BD Maestras. Cree primero el cliente antes de generar el albarán.',null,'Aceptar',null,null,null)
				}
				else
				{
					var result = forms.dlg_Generacion_AlbaranGC.foundset.selectRecord(id)
					var fsCount = databaseManager.getFoundSetCount(forms.dlg_Generacion_AlbaranGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.dlg_Generacion_AlbaranGC.foundset.getSize())
						{
							return;
						}
					forms.dlg_Generacion_AlbaranGC.foundset.setSelectedIndex(forms.dlg_Generacion_AlbaranGC.foundset.getSize());
					result = forms.dlg_Generacion_AlbaranGC.foundset.selectRecord(id);
					}
					//start a transaction
					//if(!globals.GCisEditing()) globals.GCstartEditing()
				
					//setup the method to execute when the dialog closes
					//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deletePresupuestoLinea()'
				
					//show the "fake" dialog
					globals.GCshowDialogGeneracionAlbaran('Generación Albarán', 1, null, null, true, 'Borrar Línea', null, null, null, null);
				}
			}
			else if(situ_cof == 'A')
			{
				scopes.svyCustomDialogs.showErrorDialog('Error','Albarán ya generado anteriormente.','Aceptar')
				//globals.GCshowErrorDialog('Albarán ya generado anteriormente.',null,'Aceptar',null,null,null)
			}
			else if(situ_cof == 'N')
			{
				scopes.svyCustomDialogs.showErrorDialog('Error','Presupuesto no aceptado.','Aceptar')
				//globals.GCshowErrorDialog('Presupuesto no aceptado.',null,'Aceptar',null,null,null)
			}
			else if(situ_cof == 'F')
			{
				scopes.svyCustomDialogs.showErrorDialog('Error','Presupuesto ya facturado.','Aceptar')
				//globals.GCshowErrorDialog('Presupuesto ya facturado.',null,'Aceptar',null,null,null)
			}
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BD9DE74A-65AD-433B-90E1-BCD81D67EA6A"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	elements.fld_clie_cof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0546BB91-EA0C-4B40-9CF2-DC8565EA35C2"}
 */
function onActionnom(event) {
	// TODO Auto-generated method stub
	elements.fld_dircl_cof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0B42978D-166C-4C95-8168-D5DA5C92169B"}
 */
function onActiondir(event) {
	// TODO Auto-generated method stub
	elements.fld_pobcl_cof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2E61D8B6-7DF6-4950-897A-AB6B3A53DCB6"}
 */
function onActionpob(event) {
	// TODO Auto-generated method stub
	elements.fld_cdpcl_cof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"49052EFD-1647-4E07-B5C3-5387AAB9E8CB"}
 */
function onActionpro(event) {
	// TODO Auto-generated method stub
	elements.fld_attcl_cof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38DAD607-F041-4DFD-9D78-8792207D07D2"}
 */
function onActioncdp(event) {
	// TODO Auto-generated method stub
	elements.fld_procl_cof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"24C39BDF-BEFE-4C34-8DFB-32843204A640"}
 */
function onActionatt(event) {
	// TODO Auto-generated method stub
	elements.fld_telcl_cof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A0EF3DD7-3854-4693-BDD2-7E308B913AB1"}
 */
function onActiontelf(event) {
	// TODO Auto-generated method stub
	elements.fld_faxcl_cof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0A9713A4-3E58-4978-833D-726D2BC524D6"}
 */
function onActionfax(event) {
	// TODO Auto-generated method stub
	elements.fld_rcli_cof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7AF5617A-BA0B-4BE7-B9B7-1A94B53A1A2B"}
 */
function onActionrcli(event) {
	// TODO Auto-generated method stub
	elements.fld_emacl_cof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"622A49E9-310D-4854-8E38-DA133CD4EA7F"}
 */
function onActionema(event) {
	// TODO Auto-generated method stub
	elements.fld_portes_cof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"39A027D3-99E1-46B7-A198-1E10BF4DF0FB"}
 */
function onActionportes(event) {
	// TODO Auto-generated method stub
	elements.fld_cfpa_cof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E921E525-F723-471F-A265-D68A7814A4D7"}
 */
function onActionrefped(event) {
	// TODO Auto-generated method stub
	elements.fld_cfpa_cof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"299569FB-8D90-4831-B8B3-EBB135CA2169"}
 */
function btn_BDCliente(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmPresupuestosGC.btn_cancel()
	if(clie_cof)
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
		globals.GCFormulario = 'FrmPresupuestosGC';
		forms.FrmClientesGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1)*/ 
		
		var query = "select [ID] from [tbMaestroClientes] where [IdCliente] = " + clie_cof
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var uuid = dataset.getValue(1,1);
		var result = forms.dlg_ClientesGC.foundset.selectRecord(uuid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ClientesGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ClientesGC.foundset.getSize())
			{
				return;
			}
			forms.dlg_ClientesGC.foundset.setSelectedIndex(forms.dlg_ClientesGC.foundset.getSize());
		result = forms.dlg_ClientesGC.foundset.selectRecord(uuid);
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
		globals.GCFormulario = 'FrmPresupuestosGC';
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4D81529F-DB15-471C-BC32-5763BE67A6BB"}
 */
function onActionclie(event) {
	// TODO Auto-generated method stub
	evt_changeItem(event)
	elements.fld_nomcl_cof.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"4B0447B3-E062-4670-A14F-CCF9770DDE19"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(fecha_cof,'dd-MM-yyyy')
	fecha_cof = utils.parseDate(fech,'dd-MM-yyyy')	
	
}

/**
 *
 * @properties={typeid:24,uuid:"C545C097-AB5B-44F5-842E-D9E328BE8847"}
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
		var query = "select [cod_cof] from [cofertas] order by [cod_cof] desc"			
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
		
		forms.dlg_ParametroAplicacionGC.numpresupuesto = n;*/
		gcparametrosaplicacion_to_parametrosaplicacion.numpresupuesto = n;
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
 * @properties={typeid:24,uuid:"DB6DFC8B-4F38-49DF-BD8F-E74B683272B0"}
 */
function btngooglemaps(event) {
	// TODO Auto-generated method stub
	if(dircl_cof)
	{
		var dir = utils.stringReplace(dircl_cof,' ','+')
		var pob = utils.stringReplace(pobcl_cof,' ','+')
		application.showURL( 'http://maps.google.com/maps?q=' + dir + ','+pob,'_blank');
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"8DA9EFCA-E9BD-4582-B5CC-023931B8EB58"}
 */
function btnGenerarFactura(event) {
	if(globals.GCisEditing()) forms.FrmPresupuestosGC.btn_cancel()
	
	var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Facturas.','Aceptar')
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Facturas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(cod_cof)
		{
			if(situ_cof == null || situ_cof == 'A')
			{
				if(!clie_cof)
				{
					scopes.svyCustomDialogs.showErrorDialog('Error','Cliente no dado de alta en la BD Maestras. Cree primero el cliente antes de generar la factura.','Aceptar')
					//globals.GCshowErrorDialog('Cliente no dado de alta en la BD Maestras. Cree primero el cliente antes de generar la factura.',null,'Aceptar',null,null,null)
				}
				else
				{
					var result = forms.dlg_Generacion_Factura2GC.foundset.selectRecord(id)
					var fsCount = databaseManager.getFoundSetCount(forms.dlg_Generacion_Factura2GC.foundset);
					while(result==false)
					{
						if(fsCount == forms.dlg_Generacion_Factura2GC.foundset.getSize()) return;
						forms.dlg_Generacion_Factura2GC.foundset.setSelectedIndex(forms.dlg_Generacion_Factura2GC.foundset.getSize());
						result = forms.dlg_Generacion_Factura2GC.foundset.selectRecord(id);
					}
					//start a transaction
					//if(!globals.GCisEditing()) globals.GCstartEditing()
				
					//setup the method to execute when the dialog closes
					//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deletePresupuestoLinea()'
				
					//show the "fake" dialog
					globals.GCshowDialogGeneracionFactura2('Generación Factura', 1, null, null, true, null, null, null, null, null);
				}
			}
			else if(situ_cof == 'F')
			{
				scopes.svyCustomDialogs.showErrorDialog('Error','Presupuesto ya facturado anteriormente.','Aceptar')
				//globals.GCshowErrorDialog('Presupuesto ya facturado anteriormente.',null,'Aceptar',null,null,null)
			}
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"1FE307F5-71A3-42AB-B3FD-0C8BA741D84A"}
 */
function btnGenerarFacturaProforma(event) {
	if(globals.GCisEditing()) forms.FrmPresupuestosGC.btn_cancel()
	
	var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Facturas.','Aceptar')
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Facturas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(cod_cof)
		{
			if(situ_cof == null)
			{
				if(!clie_cof)
				{
					scopes.svyCustomDialogs.showErrorDialog('Error','Cliente no dado de alta en la BD Maestras. Cree primero el cliente antes de generar la factura.','Aceptar')
					//globals.GCshowErrorDialog('Cliente no dado de alta en la BD Maestras. Cree primero el cliente antes de generar la factura.',null,'Aceptar',null,null,null)
				}
				else
				{
					var result = forms.dlg_Generacion_Factura3GC.foundset.selectRecord(id)
					var fsCount = databaseManager.getFoundSetCount(forms.dlg_Generacion_Factura3GC.foundset);
					while(result==false)
					{
						if(fsCount == forms.dlg_Generacion_Factura3GC.foundset.getSize())
						{
							return;
						}
					forms.dlg_Generacion_Factura3GC.foundset.setSelectedIndex(forms.dlg_Generacion_Factura3GC.foundset.getSize());
					result = forms.dlg_Generacion_Factura3GC.foundset.selectRecord(id);
					}
					//start a transaction
					//if(!globals.GCisEditing()) globals.GCstartEditing()
				
					//setup the method to execute when the dialog closes
					//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deletePresupuestoLinea()'
				
					//show the "fake" dialog
					globals.GCshowDialogGeneracionFactura3('Generación Factura Proforma', 1, null, null, true, null, null, null, null, null);
				}
			}
			else if(situ_cof == 'F')
			{
				scopes.svyCustomDialogs.showErrorDialog('Error','Presupuesto ya facturado anteriormente.','Aceptar')
				//globals.GCshowErrorDialog('Presupuesto ya facturado anteriormente.',null,'Aceptar',null,null,null)
			}
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param v_event
 *
 * @SuppressWarnings(deprecated)
 *
 *
  * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"75AE37C0-1482-476F-BE13-9E510BA59570"}
 */
function handle_shortCut(v_event)
{
	globals.GCevento = null
	if(v_event.getType() == 'control F10')
	{
		if(globals.GCisEditing())
		{
			elements.situ_cof.bgcolor = '#feffe4'
			elements.situ_cof.readOnly = false
		}
	}	
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D6FEF05A-CE7A-45E9-9570-EF682C786293"}
 */
function onFocusLostDtoPP(event) {
	// TODO Auto-generated method stub
	var Dtopp = impbre_cof * depp_cof * 0.01
	impbie_cof = globals.GCROUND(impbre_cof - Dtopp,2)
	var Importebruto = impbre_cof - Dtopp
	impcie_cof = Importebruto * piva_cof * 0.01
	impcie_cof = globals.GCROUND(impcie_cof,2)
	impnee_cof = Importebruto + impcie_cof
	impnee_cof = globals.GCROUND(impnee_cof,2)
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"242AA847-C26C-4550-8436-8708FF21EFC0"}
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
 * @properties={typeid:24,uuid:"4FA888A5-A403-41AB-B8B1-87787F59D5CA"}
 */
function onActionanticipo(event) {
	// TODO Auto-generated method stub
	elements.fld_depp_cof.requestFocus()
	elements.fld_depp_cof.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"EC89CA59-2667-4716-9C6D-004BC73966E9"}
 */
function onActiondto(event) {
	// TODO Auto-generated method stub
	
		elements.fld_piva_cof.requestFocus()
		elements.fld_piva_cof.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"213887FA-E915-4F04-920B-75349CFF7971"}
 */
function onActionpiva(event) {
	// TODO Auto-generated method stub
	onFocusLostIva(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"4764EEAC-A6F5-4139-9761-71FD89F91CF9"}
 */
function btn_AddCliente(event) {
	// TODO Auto-generated method stub
	if(!globals.GCisEditing()) globals.GCstartEditing()	
	forms.dlg_ClientesGC.ClienteID = null;
	forms.dlg_ClientesGC.foundset.newRecord(true)
	forms.dlg_ClientesGC.id = application.getUUID()
	forms.dlg_ClientesGC.pais = 'ES'
	forms.dlg_ClientesGC.elements.idcodigo.editable = true
	forms.dlg_ClientesGC.elements.idcodigo.bgcolor = '#FFFF00'//'#ffffff'
	forms.dlg_ClientesGC.elements.idcodigo.visible = true
	forms.dlg_ClientesGC.elements.lblidcodigo.visible = false	
	forms.dlg_ClientesGC.elements.btn_print.enabled = false	
	forms.dlg_ClientesGC.elements.idcodigo.requestFocus()
	
	globals.GCshowDialogCliente('BD Cliente', 1, null, null, true, null, null, null, null, null);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD183763-195D-48CC-8735-240A4CAD14C2"}
 */
function btnAlbaranes(event) {
	if(globals.GCisEditing()) forms.FrmPresupuestosGC.btn_cancel()
	
	var win = application.getWindow('Albaran Lineas')
	//setup the record status
	if(win != null)
	{
		win.destroy();
	}
	
	win = application.createWindow("Albaran Lineas", JSWindow.MODAL_DIALOG);
	var w = forms.FrmLoginGC.controller.getFormWidth()+20;
	var h = forms.FrmLoginGC.controller.getPartHeight(JSPart.BODY)+20;
	win.setInitialBounds(50, 0, w, h);
	win.title = 'Albaranes';
	globals.GCnav_search = null;
	globals.GCFormulario = null;
	forms.lst_solution_navigation_albaranGC.controller.setSelectedIndex(1) 
	forms.FrmAlbaranGC.controller.show(win);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D9E57E69-1601-4E6F-A510-E76A0DF9599A"}
 */
function btnFacturas(event) {
		if(globals.GCisEditing()) forms.FrmPresupuestosGC.btn_cancel()
		
		var win = application.getWindow('Factura Lineas')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		win = application.createWindow("Factura Lineas", JSWindow.MODAL_DIALOG);
		var w = forms.FrmLoginGC.controller.getFormWidth()+20;
		var h = forms.FrmLoginGC.controller.getPartHeight(JSPart.BODY)+20;
		win.setInitialBounds(50, 0, w, h);
		win.title = 'Facturas';
		globals.GCnav_search = null;
		globals.GCFormulario = null;
		forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) 
		forms.FrmFacturasGC.controller.show(win);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @AllowToRunInFind
 *
 *
 * @properties={typeid:24,uuid:"914A4092-408D-43DD-8ED8-8E4BD90665CE"}
 */
function btn_UltimoPresupuesto(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) btn_cancel()
	
		forms.lst_PresupuestosGC.foundset.loadAllRecords()
		forms.lst_PresupuestosGC.btn_sortDesc()
		if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)
		if(forms.frm_nav_buttons_presupuestosGC.elements.btn_showAll.visible == true) 
		{
			forms.frm_nav_buttons_presupuestosGC.btn_showAll()
		}
	
}

/**
 *
 * @properties={typeid:24,uuid:"A85F33C6-AB2E-4263-9D9C-A855D0509BF5"}
 */
function situacion()
{
	if (situ_cof == 'A' || situ_cof == 'F') {
	    elements.lblsitu_cof.fgcolor = '#00994C';
	} else {
		elements.lblsitu_cof.fgcolor = '#FF0000';
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
 * @properties={typeid:24,uuid:"B14EE474-5634-4104-BCCE-C9AC1B1F05C9"}
 */
function onActionBtnFormasPago(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmPresupuestos';
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A90B6E76-E628-45C2-ACDC-BCF8AC8347D5"}
 */
function btn_OtrosContactos(event) {
	if(clie_cof && GCcliente_presupuesto && GCcliente_presupuesto.id)
	{
		try {
			/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var BBDDMaestras = dataset.getValue(1, 4)
			if(BBDDMaestras == '1')
			{*/
				// create a popup menu
				var menu = plugins.window.createPopupMenu();
				// add a menu item
								
				var query = 'select nombre from [tbmaestroclientescontactos] where idcliente ='+clie_cof
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
				var rows = dataset.getMaxRowIndex()
				if(rows > 0)
				{
					for(var i=1;i<=rows;i++)
					{
						var titulo = dataset.getValue(i,1);	
						titulo = titulo.toUpperCase()
						menu.addMenuItem(titulo, MenuContactos, null);
					}			
					
					if (event.getSource()) {
						// display the popup over the component which is the source of the event
						menu.show(event.getSource(),20,0);					
					}	
				}
				else
				{
					titulo = 'Este Cliente no dispone de otros contactos en la ficha maestra.';	
					//titulo = titulo.toUpperCase()
					menu.addMenuItem(titulo, null, null);
					
					if (event.getSource()) {
						// display the popup over the component which is the source of the event
						menu.show(event.getSource(),20,0);					
					}	
				}
			}
			catch (e) {
				globals.GCshowErrorDialog(e.toString(),null,'Aceptar',null,null,null)
			}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D3924F51-EF75-4660-867C-DEDDA6674CDC"}
 */
function MenuContactos(event) {
	forms.FrmPresupuestosGC.attcl_cof = arguments[4]
	var query = "select email from [tbmaestroclientescontactos] where idcliente ="+clie_cof+
				" and nombre = '"+arguments[4]+"'"
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1);
	forms.FrmPresupuestosGC.emacl_cof = dataset.getValue(1,1);	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"357A6F80-E037-484A-A71A-2D04CC38B24A"}
 */
function onDataChangeCP() {
	if(cdpcl_cof)
	{
		if(cdpcl_cof.length == 5)
		{
			var prov = utils.stringLeft(cdpcl_cof,2)			
			switch( prov )
			{
				case '01': 
				{
					procl_cof = 'ÁLAVA';				
					break;
				}
				case '02': 
				{
					procl_cof = 'ALBACETE';
					break;
				}
				case '03': 
				{
					procl_cof = 'ALICANTE';					
					break;
				}
				case '04': 
				{
					procl_cof = 'ALMERÍA';					
					break;
				}
				case '33': 
				{
					procl_cof = 'ASTURIAS';					
					break;
				}
				case '05': 
				{
					procl_cof = 'ÁVILA';
					break;
				}
				case '06': 
				{
					procl_cof = 'BADAJOZ';					
					break;
				}
				case '08': 
				{
					procl_cof = 'BARCELONA';					
					break;
				}
				case '09': 
				{
					procl_cof = 'BURGOS';					
					break;
				}
				case '10': 
				{
					procl_cof = 'CÁCERES';					
					break;
				}
				case '11': 
				{
					procl_cof = 'CÁDIZ';					
					break;
				}
				case '39': 
				{
					procl_cof = 'CANTABRIA';					
					break;
				}
				case '12':
				{
					procl_cof = 'CASTELLÓN';					
					break;
				}
				case '51':
				{
					procl_cof = 'CEUTA';
					break;
				}
				case '13':
				{
					procl_cof = 'CIUDAD REAL';					
					break;
				}
				case '14':
				{
					procl_cof = 'CÓRDOBA';					
					break;
				}
				case '15':
				{
					procl_cof = 'CORUÑA, A';					
					break;
				}
				case '16':
				{
					procl_cof = 'CUENCA';					
					break;
				}
				case '17':
				{
					procl_cof = 'GIRONA';					
					break;
				}
				case '18':
				{
					procl_cof = 'GRANADA';					
					break;
				}
				case '19':
				{
					procl_cof = 'GUADALAJARA';					
					break;
				}
				case '20':
				{
					procl_cof = 'GUIPÚZCOA';					
					break;
				}
				case '21':
				{
					procl_cof = 'HUELVA';					
					break;
				}
				case '22':
				{
					procl_cof = 'HUESCA';					
					break;
				}
				case '07':
				{
					procl_cof = 'ILLES BALEARS';					
					break;
				}
				case '23':
				{
					procl_cof = 'JAÉN';					
					break;
				}
				case '24':
				{
					procl_cof = 'LEÓN';					
					break;
				}
				case '25':
				{
					procl_cof = 'LLEIDA';					
					break;
				}
				case '27':
				{
					procl_cof = 'LUGO';					
					break;
				}
				case '28':
				{
					procl_cof = 'MADRID';
					break;
				}
				case '29':
				{
					procl_cof = 'MÁLAGA';					
					break;
				}
				case '52':
				{
					procl_cof = 'MELILLA';					
					break;
				}
				case '30':
				{
					procl_cof = 'MURCIA';					
					break;
				}
				case '31':
				{
					procl_cof = 'NAVARRA';					
					break;
				}
				case '32':
				{
					procl_cof = 'OURENSE';					
					break;
				}
				case '34':
				{
					procl_cof = 'PALENCIA';					
					break;
				}
				case '35':
				{
					procl_cof = 'PALMAS, LAS';					
					break;
				}
				case '36':
				{
					procl_cof = 'PONTEVEDRA';					
					break;					
				}
				case '26':
				{
					procl_cof = 'RIOJA, LA';					
					break;
				}
				case '37':
				{
					procl_cof = 'SALAMANCA';					
					break;
				}
				case '38':
				{
					procl_cof = 'S.C.TENERIFE';					
					break;
				}
				case '40':
				{
					procl_cof = 'SEGOVIA';
					break;
				}
				case '41':
				{
					procl_cof = 'SEVILLA';					
					break;
				}
				case '42':
				{
					procl_cof = 'SORIA';					
					break;
				}
				case '43':
				{
					procl_cof = 'TARRAGONA';					
					break;
				}
				case '44':
				{
					procl_cof = 'TERUEL';					
					break;
				}
				case '45':
				{
					procl_cof = 'TOLEDO';					
					break;
				}
				case '46':
				{
					procl_cof = 'VALENCIA';					
					break;
				}
				case '47':
				{
					procl_cof = 'VALLADOLID';					
					break;
				}
				case '48':
				{
					procl_cof = 'VIZCAYA';					
					break;
				}
				case '49':
				{
					procl_cof = 'ZAMORA';					
					break;
				}
				case '50':
				{
					procl_cof = 'ZARAGOZA';
					break;
				}
				default: break;		
			}
			var query = "select municipio_nombre from cp_municipios where  codigo_postal = '" + cdpcl_cof + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			if(dataset.getValue(1,1)) pobcl_cof = dataset.getValue(1,1);
		}
	}
	
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"7F63607F-77D6-4E29-AE1A-14C58DB2A3BA"}
 */
function btn_listadoPresupuestos(event) {
	
	globals.GCFormulario = 'FrmPresupuestosGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialog_Presupuestos3')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialog_Presupuestos3", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'Últimos Presupuestos';
	//win.resizable = true;
	//win.show(forms.dialog_Clientes2GC)
	win.show(forms.lst_Presupuestos2GC)

}
