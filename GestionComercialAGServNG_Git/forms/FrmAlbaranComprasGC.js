/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"A8436D43-60C1-4E8D-9A76-4D015C2E82D2"}
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	
	btn_tabLineas()
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
		
}

/**
 * @properties={typeid:24,uuid:"0FAF1204-37B1-4575-845D-9F517CFB9EE0"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_AlbaranCompra = id
	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
			doEdit()
		}
	}
	if(GCalbapro_to_lalbapro)
	{
		if(GCalbapro_to_lalbapro.getSize() > 0)
		{
			forms.lst_AlbaranCompra_LineasGC.foundset.setSelectedIndex(1)
		}
	}
	
}

/**
 * @properties={typeid:24,uuid:"F97CFDB4-6E8A-4564-93DB-82F63EEF2691"}
 */
function validate_autoEnter()
{
	globals.GCRegistroNuevo = 1
	elements.pro_ap.bgcolor = '#FFFF00'//'#feffe4'
	elements.pro_ap.readOnly = false
	elements.nup_ap.bgcolor = '#FFFF00'//'#feffe4'
	elements.nup_ap.readOnly = false
	elements.fld_fecha_ap.bgcolor = '#FFFF00'//'#feffe4'
	elements.lbl_codrequired.visible = true
	elements.lbl_codrequiredc.visible = true	
	elements.BtnProveedor.visible = true
	elements.BtnAddProveedor.visible = true
	id = application.getUUID()
}

/**
 * @properties={typeid:24,uuid:"C4B30227-7D58-44CE-9091-AE5D5824CAA1"}
 */
function btn_save()
{
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para grabar Albaranes de Compras.','¡Error!')
		else globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Albaranes de Compras.',null,'Aceptar',null,null,null)		
	}
	else
	{
		if(!pro_ap)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir el proveedor del Albarán de Compras.','¡Error!')
			else globals.GCshowErrorDialog('Falta introducir el proveedor del Albarán de Compras.',null,'Aceptar',null,null,null)
		}
		else if(!GCalbapro_to_tbmaestroproveedores || !GCalbapro_to_tbmaestroproveedores.id)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir un proveedor válido del Albarán de Compras.','¡Error!')
			else globals.GCshowErrorDialog('Falta introducir un proveedor válido del Albarán de Compras.',null,'Aceptar',null,null,null)
		}
		else if(!nup_ap)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir un número de Albarán de Compras.','¡Error!')
			else globals.GCshowErrorDialog('Falta introducir un número de Albarán de Compras.',null,'Aceptar',null,null,null)
		}
		else if(!fech_ap)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir la fecha del Albarán de Compras.','¡Error!')
			else globals.GCshowErrorDialog('Falta introducir la fecha del Albarán de Compras.',null,'Aceptar',null,null,null)
		}
		else
		{
			if(GCalbapro_to_lalbapro)
			{
				var rows = GCalbapro_to_lalbapro.getSize();
				for(var i=1;i<=rows;i++)
				{
					var record = GCalbapro_to_lalbapro.getRecord(i);
					if(record.prov_lap != pro_ap)
					{
						record.prov_lap = pro_ap;		
						databaseManager.saveData(record)
					}
				}			
			}
			_super.btn_save()
			//hideImportes()
			globals.GCRegistroNuevo = null
			elements.BtnProveedor.visible = false
			elements.btn_Proveedor.visible = true
			elements.BtnAddProveedor.visible = false
			elements.btn_sendEmail.visible = true
			elements.btnActStockAlbaran.visible = true
			elements.pro_ap.bgcolor = '#f0f0f0'
			elements.pro_ap.readOnly = true
			elements.nup_ap.bgcolor = '#f0f0f0'
			elements.nup_ap.readOnly = true
			elements.lbl_codrequired.visible = false
			elements.lbl_codrequiredc.visible = false	
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
 * @properties={typeid:24,uuid:"FD97A487-1729-4E9E-9070-34AC1070E894"}
 */
function doEdit()
{
	_super.doEdit()
	//doeditImportes()
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
	//elements.BtnProveedor.visible = true
	elements.btn_sendEmail.visible = false
	elements.btn_Proveedor.visible = false
	elements.btnActStockAlbaran.visible = false
	elements.fld_fecha_ap.bgcolor = '#FFFF00';
	
	
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
 * @properties={typeid:24,uuid:"B69E4943-51EA-4AE5-9B34-4529A9812C71"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	//hideImportes()
	globals.GCRegistroNuevo = null
	elements.btn_sendEmail.visible = true
	elements.BtnProveedor.visible = false
	elements.btn_Proveedor.visible = true
	elements.BtnAddProveedor.visible = false
	elements.btnActStockAlbaran.visible = true
	elements.pro_ap.bgcolor = '#f0f0f0'
	elements.pro_ap.readOnly = true
	elements.nup_ap.bgcolor = '#f0f0f0'
	elements.nup_ap.readOnly = true
	elements.lbl_codrequired.visible = false
	elements.lbl_codrequiredc.visible = false	
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
 * 
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"07ABC9C1-921C-40A0-BE00-97541E982088"}
 * @AllowToRunInFind
 */
function onShow(firstShow,event)
{
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
	elements.btnActStockAlbaran.enabled = true
	
	//evt_changeItem()
}

/**
 * @properties={typeid:24,uuid:"4D7CD9CB-4C42-403D-B50A-48ED7CE01BF1"}
 */
function btn_tabLineas()
{
	//if(!globals.GCisEditing()) //if there is a transaction - we're editing something
	//{
		tabs_dimAll()
		elements.lblLineas.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 1)
		{
			elements.tabs_mainPanel.tabIndex = 1
		}
	//}
}

/**
 * @properties={typeid:24,uuid:"385810BA-257D-4655-9B89-28AACD69C7E7"}
 */
function btn_tabUltAlbaranes()
{
	//if(!globals.GCisEditing()) //if there is a transaction - we're editing something
	//{
		tabs_dimAll()
		elements.lblUltAlbaranes.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 2)
		{
			elements.tabs_mainPanel.tabIndex = 2
		}
	//}
}

/**
 * @properties={typeid:24,uuid:"E5186C33-B6D3-47BA-8600-B888D61FC05B"}
 */
function tabs_dimAll()
{
	elements.lblLineas.bgcolor = '#606060'
	elements.lblUltAlbaranes.bgcolor = '#606060'			
}

/**
 * @properties={typeid:24,uuid:"3E30FD55-7B10-4FF9-83B9-1B67BD00093C"}
 */
function btn_sendEmail()
{
	//if(globals.emaprov) application.showURL( 'mailto:' + globals.emaprov, '_blank');
	if(id){
		var query = 'select [ServidorCorreoSMTP] from [ParametrosAplicacion]'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var SMTP = dataset.getValue(1,1)
		if(!SMTP)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No está definido el Servidor de Correo SMTP en los Parametros de la Aplicación.','¡Error!')
			else globals.GCshowErrorDialog('No está definido el Servidor de Correo SMTP en los Parametros de la Aplicación.',null,'Aceptar',null,null,null)
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
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.','¡Error!')
				else globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else if(UserEmail == null || UserEmail == '')
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.','¡Error!')
				else globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else if(PasswEmail == null || PasswEmail == '')
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.','¡Error!')
				else globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else
			{
				globals.GCFormulario = 'FrmAlbaranCompras'
				globals.GCshowDialogEnvioMail('Envio EMail',1,null,null,null,null,null,null,null,null)
			}
		}
	}
}

/**
  * @return {Number}
 * @properties={typeid:24,uuid:"C14875E3-DB50-43CA-AFE3-7CE22341CC24"}
 */
function validate_beforeDelete()
{
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para borrar Albaranes de Compras.','¡Error!')
		else globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Albaranes de Compras.',null,'Aceptar',null,null,null)
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
 * @properties={typeid:24,uuid:"BD38A83F-BD93-4B8A-AC23-401B2A9945CD"}
 */
function onActionBtnProveedor(event) {
	// TODO Auto-generated method stub	
	globals.GCFormulario = 'FrmAlbaranCompras';
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
 * @properties={typeid:24,uuid:"D4287E5D-E3AE-445A-88F4-AD7AED15E85B"}
 */
function btnGeneracionAlbaran(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7EC2FDFF-42D7-4139-A331-05697EC7F121"}
 */
function btn_BDProveedor(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmAlbaranComprasGC.btn_cancel()
	if(pro_ap)
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
		globals.GCFormulario = 'FrmAlbaranComprasGC';
		forms.FrmProveedoresGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(2) */
		
		var query = "select [ID] from [tbMaestroProveedores] where [Codpro] = " + pro_ap
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
		globals.GCshowDialogProveedor('BD Proveedores', 1, null, null, true, 'Borrar Proveedor', null, null, null, null);
		
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
		globals.GCFormulario = 'FrmAlbaranComprasGC';
		forms.FrmProveedoresGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(2)*/ 
		
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
 * @properties={typeid:24,uuid:"73340932-E15D-4DF5-93F5-7F859903EDF3"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Pedido_list();
}

/**
 * @properties={typeid:24,uuid:"B452F043-A538-4D06-B6D3-018D67CCD573"}
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 */
function rpt_Pedido_list()
{
	
	try
	{
		globals.GCshowDialogConsultaAlbaranesCompras('Consulta Albaranes de Proveedores',1,null,null,null,null,null,null,null,null)
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
 * @properties={typeid:24,uuid:"560111B5-ED7A-4A90-A6F3-14D8FC124887"}
 */
function onActionpro(event) {
	// TODO Auto-generated method stub
	elements.nup_ap.requestFocus()
}

/**
 *
 * @properties={typeid:24,uuid:"FE7040E0-8EF2-4820-99F7-27BA0884FB7E"}
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"D22C68BC-7C1E-46EF-B6B5-34D247C46058"}
 */
function btngooglemaps(event) {
	// TODO Auto-generated method stub
	if(GCalbapro_to_tbmaestroproveedores)
	{
		if(GCalbapro_to_tbmaestroproveedores.direccion)
		{
			var dir = utils.stringReplace(GCalbapro_to_tbmaestroproveedores.direccion,' ','+')
			var pob = utils.stringReplace(GCalbapro_to_tbmaestroproveedores.poblacion,' ','+')
			application.showURL( 'http://maps.google.com/maps?q=' + dir + ','+pob,'_blank');			
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
 * @properties={typeid:24,uuid:"3A4FE0EC-E077-49DC-A863-1D78DBB0BA3B"}
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

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"E9860F21-25B8-4D62-8522-7033D7F0885B"}
 */
function btn_ActualizarStockAlbaranCompras(event) {
	if(globals.GCisEditing()) forms.FrmAlbaranComprasGC.btn_cancel()
	
	if(gcfechalimite_usuarios.taop_007=='1') 
	{
		if(forms.FrmAlbaranComprasGC.id && forms.FrmAlbaranComprasGC.pro_ap && forms.FrmAlbaranComprasGC.nup_ap)
		{
			if(forms.FrmAlbaranComprasGC.GCalbapro_to_lalbapro.getSize() == 0)
			{
				var msg = 'No existen líneas registradas en este albarán'
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(msg,'¡Error!')
				else globals.GCshowWarningDialog(msg, null, null, null, null, null)
			}
			else
			{
				//var desdeAlb = forms.FrmAlbaranGC.cod_cal;
				//var hastaAlb = forms.FrmAlbaranGC.cod_cal;
				var desdeFech = utils.dateFormat(forms.FrmAlbaranComprasGC.fech_ap,'dd-MM-yyyy')
				if(!desdeFech) desdeFech = '1-1-1900'
				var hastaFech = utils.dateFormat(forms.FrmAlbaranComprasGC.fech_ap,'dd-MM-yyyy')+ ' 23:59:59'
				if(!hastaFech) 
				{
					hastaFech = new Date()
					var dia = hastaFech.getDate()
					var mes = hastaFech.getMonth() + 1
					var agno = hastaFech.getFullYear()
					hastaFech = dia + '-' + mes + '-' + agno + ' 23:59:59'
				}
					
				
				/*if(globals.GCCriterios == 0)*/ 
				//var ord = 'nup_lal,nli_lal'
				//else ord = 'fecha_cal,nup_lal,nli_lal'
				
				var query = "SELECT [prov_lap],[nup_lap],[nli_lap]"+
						",[refa_lap],[cant_lap],[prec_lap] "+      
						"FROM [dbo].[lalbapro] inner join [dbo].[albapro] on "+
						"[dbo].[albapro].pro_ap = [dbo].[lalbapro].prov_lap and "+
						"[dbo].[albapro].nup_ap = [dbo].[lalbapro].nup_lap "+
						"WHERE [dbo].[albapro].pro_ap = "+forms.FrmAlbaranComprasGC.pro_ap+
						" and [dbo].[albapro].nup_ap = '"+forms.FrmAlbaranComprasGC.nup_ap+"'";
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1)
				
				var rows = dataset.getMaxRowIndex()
				if(rows == 0)
				{
					msg = 'No existen líneas en este albarán por actualizar en el Stock'
					if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(msg,'¡Error!')
					else globals.GCshowWarningDialog(msg, null, null, null, null, null)
				}
				else
				{
					for(var i=1;i<=rows;i++)
					{
						var Proveedor = dataset.getValue(i, 1)
						var Albaran = dataset.getValue(i, 2)
						var Linea = dataset.getValue(i, 3)
						var unid = dataset.getValue(i, 5)
						var art = dataset.getValue(i, 4)
						//var unme = dataset.getValue(i, 5)
						
						
						/*if(unme == 'm2')
						{
							var cant = unid * m2			
						}
						else if(unme== 'ml')
						{
							cant = unid * mlin
						}
						else if(unme== 'und')
						{*/
							var cant = unid
						/*}
						else if(unme== 'kgr')
						{
							cant = unid
						}
						else if(unme== 'H')
						{
							cant = unid
						}*/
						globals.GCROUND(cant,2)
						//Actualizo Stock Articulo
						query = "Select [ID] from [dbo].[tbmaestroarticulos] WHERE [codigo]='"+art+"'";
						var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
						var uuid = dataset2.getValue(1,1)
						if(uuid)
						{
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbmaestroarticulos')  
									  
							//load record by ID in foundset  
							vSet.loadRecords(databaseManager.convertToDataSet([uuid]))
							var record = vSet.getRecord(vSet.getSelectedIndex())
							if(record)
							{
								var exis = record.exis_a;
								if(!exis) exis = 0;
								exis += cant;
								record.exis_a = exis;
								
								databaseManager.saveData(record)
								
								/*forms.FrmArticulosGC.foundset.loadAllRecords();
								var result = forms.FrmArticulosGC.foundset.selectRecord(uuid)
								var fsCount = databaseManager.getFoundSetCount(forms.FrmArticulosGC.foundset);
								while(result==false)
								{
									if(fsCount == forms.FrmArticulosGC.foundset.getSize()) break;
									}
									forms.FrmArticulosGC.foundset.setSelectedIndex(forms.FrmArticulosGC.foundset.getSize());
									result = forms.FrmArticulosGC.foundset.selectRecord(uuid);
								}
								
								var exis = forms.FrmArticulosGC.foundset.exis_a;
								exis -= cant;
								//var disp = forms.FrmArticulosGC.foundset.disp_a
								//disp -= cant;
								forms.FrmArticulosGC.foundset.exis_a = exis;
								//forms.FrmArticulosGC.foundset.disp_a = disp
								databaseManager.saveData(forms.FrmArticulosGC.foundset)*/
								
								//Inserto un nuevo movimento de Salida
								var fecha = new Date();
								
								
								var tip1 = sub_setTip1()		
								var stock = sub_stock(art)
								
								
								forms.FrmMoviArtiGC.foundset.newRecord(true)	
								forms.FrmMoviArtiGC.id = application.getUUID()
								forms.FrmMoviArtiGC.cod_ms = art
								forms.FrmMoviArtiGC.fecha_ms = fecha
								forms.FrmMoviArtiGC.tip1_ms = tip1
								forms.FrmMoviArtiGC.tipo_ms = 'E'
								forms.FrmMoviArtiGC.ndoc_ms = /*Proveedor +"/"+*/ Albaran
								forms.FrmMoviArtiGC.ndoc1_ms = Linea
								forms.FrmMoviArtiGC.movi_ms = cant
								forms.FrmMoviArtiGC.exis_ms = stock
								forms.FrmMoviArtiGC.ferm_ms = fecha
								forms.FrmMoviArtiGC.nusu_ms = globals.GClogin_usuario;
								databaseManager.saveData(forms.FrmMoviArtiGC.foundset)
							}	
							//Actualizo situación Linea Albarán
							forms.lst_AlbaranCompra_LineasGC.foundset.loadAllRecords();
							var result = forms.lst_AlbaranCompra_LineasGC.foundset.selectRecord(Linea,Albaran,Proveedor)
							var fsCount = databaseManager.getFoundSetCount(forms.lst_AlbaranCompra_LineasGC.foundset);
							while(result==false)
							{
								if(fsCount == forms.lst_AlbaranCompra_LineasGC.foundset.getSize()) break;
								forms.lst_AlbaranCompra_LineasGC.foundset.setSelectedIndex(forms.lst_AlbaranCompra_LineasGC.foundset.getSize());
								result = forms.lst_AlbaranCompra_LineasGC.foundset.selectRecord(Linea,Albaran,Proveedor);
							}
							if(result == true){
								forms.lst_AlbaranCompra_LineasGC.foundset.situ_lap = 'A'
								databaseManager.saveData(forms.lst_AlbaranCompra_LineasGC.foundset)
							}
							else{
								query = "UPDATE lalbapro SET situ_lap = 'A' "+    
									"WHERE prov_lap = "+Proveedor+" and nup_lap = '"+Albaran+"' AND nli_lap = "+Linea
	                			var done = plugins.rawSQL.executeSQL(globals.GCconex,query)
					            if (done)
					            {
					            	//flush is required when changes are made in db
					            	plugins.rawSQL.flushAllClientsCache(globals.GCconex,"lalbaran")							
					            }
							}
						}				
					}
					msg = 'Líneas de Albarán actualizadas en el Stock'
					if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(msg,'¡Error!')
					else globals.GCshowInfoDialog(msg, null, null, null, null, null)
				}
			}	
		}
	}
	else
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no tiene permiso para actualizar Stock de Albaranes!\n\nPóngase en contacto con el Administrador','¡Error!')
		else globals.GCshowErrorDialog('Este usuario no tiene permiso para actualizar Stock de Albaranes!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * @return {Number}
 *
 *
 * @properties={typeid:24,uuid:"04B7AD36-746A-43DD-86E2-A2B482E985DC"}
 */
function sub_setTip1()
{
	var query = 'select tip1_ms from [dbo].[moviarti] order by tip1_ms desc'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var tip1 = dataset.getValue(1,1) + 1
	
	return tip1
	
}

/**
 * {String} art
 * @return {Number}
 * 
 * TODO generated, please specify type and doc for the params
 * @param art
 *
 *
 * @properties={typeid:24,uuid:"1387030B-6480-4A6A-9C00-03D3B790B3B7"}
 */
function sub_stock(art)
{
	var query = "select exis_a from tbmaestroarticulos where codigo='"+art+"'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var exis = dataset.getValue(1,1)
	
	return exis
	
}
