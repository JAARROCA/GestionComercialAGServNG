/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"F6685F13-9A5F-46EB-914C-0B4EFC5CC77E"}
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	btn_tabLineas()
	plugins.window.createShortcut('control F10', handle_shortCut);
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @properties={typeid:24,uuid:"17872DE1-5B69-4711-8B47-42E3ABFB5962"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_Albaran = id
	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
			doEdit()
		}
	}
	situacionColor()
	if(GCcalbaran_to_lalbaran)
	{
		if(GCcalbaran_to_lalbaran.getSize() > 0)
		{
			forms.lst_Albaran_LineasGC.foundset.setSelectedIndex(1)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"2DAC724A-CA4F-4D73-AE03-B4E6B3739A6B"}
 */
function btn_save()
{
	var query = 'select savealbaran from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Albaranes.',null,'Aceptar',null,null,null)
	}
	else
	{
		query = "select count(*) from [lalbaran] where nup_lal = "+cod_cal+
					" and (sifa_lal = 1 or sifa_lal = 2)"
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var cont = dataset.getValue(1,1)
		
		if(cont > 0)
		{
			var methd = 'forms.FrmAlbaranGC.btn_cancel()'
			globals.GCshowErrorDialog('Albarán con líneas ya facturadas.',methd,'Aceptar',null,null,null)
		}
		else if(situ_cal == 'F' && forms.FrmAlbaranGC.elements.situ_cal.readOnly == true)
		{
			methd = 'forms.FrmAlbaranGC.btn_cancel()'
			globals.GCshowErrorDialog('Albarán ya facturado.',methd,'Aceptar',null,null,null)
		}
		else if(!fecha_cal)
		{
			elements.fld_fecha_cal.requestFocus()
			globals.GCshowErrorDialog('Falta introducir la fecha del albarán.',null,'Aceptar',null,null,null)
		}
		else if(!clie_cal)
		{
			elements.fld_clie_cal.requestFocus()
			globals.GCshowErrorDialog('Falta introducir el cliente del albarán.',null,'Aceptar',null,null,null)
		}
		else if(!GCcalbaran_to_tbmaestroclientes)
		{
			elements.fld_clie_cal.requestFocus()
			globals.GCshowErrorDialog('Falta introducir un cliente del albarán válido.',null,'Aceptar',null,null,null)
		}
		else if(!GCcalbaran_to_tbmaestroclientes.id)
		{
			elements.fld_clie_cal.requestFocus()
			globals.GCshowErrorDialog('Falta introducir un cliente del albarán válido.',null,'Aceptar',null,null,null)
		}
		else
		{
			if(globals.GCRegistroNuevo == 1)
			{
				query = 'select [NumAlbaran] from [ParametrosAplicacion]'
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				cod_cal = dataset.getValue(1, 1) + 1
			}
			
			if(GCcalbaran_to_lalbaran)
			{
				var rows = GCcalbaran_to_lalbaran.getSize();
				for(var i=1;i<=rows;i++)
				{
					var record = GCcalbaran_to_lalbaran.getRecord(i);
					if(record.clie_lal != clie_cal)
					{
						record.clie_lal = clie_cal;		
						databaseManager.saveData(record)
					}
				}			
			}
			if(rcli_cal == null) rcli_cal = '';
			if(!usu_cal) usu_cal = globals.GClogin_usuario;
			_super.btn_save()
			query = 'select [cod_cal] from [calbaran] order by [cod_cal] desc'
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
			
			forms.dlg_ParametroAplicacionGC.foundset.numalbaran = n;*/
			gcparametrosaplicacion_to_parametrosaplicacion.numalbaran = n;
			databaseManager.saveData()
			
			globals.GCRegistroNuevo = null	
			elements.situ_cal.bgcolor = '#f0f0f0'
			elements.situ_cal.readOnly = true
			elements.BtnCliente.visible = false
			elements.BtnContactos.visible = false
			elements.BtnFormaPago.visible = false
			elements.BtnAddCliente.visible = false
			elements.btnEnvMail.visible = true
			elements.btnGenFactura.visible = true
			elements.btnGenFacturasProf.visible = true
			elements.btnGenFacturasProf.enabled = false
			elements.btnActStockAlbaran.visible = true
			elements.btn_Cliente.visible = true
			//elements.btnFacturas.visible = true
			elements.fld_fecha_cal.visible = false
			elements.lblfecha_cal.visible = true
			elements.btnUltimoAlbaran.visible = true
			situacionColor()
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
 * @properties={typeid:24,uuid:"6E211680-B640-41A5-AA30-A15B942BBE46"}
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
	elements.BtnContactos.visible = true
	elements.BtnFormaPago.visible = true
	elements.BtnAddCliente.visible = true
	elements.btnEnvMail.visible = false
	elements.btnGenFactura.visible = false
	elements.btnGenFacturasProf.visible = false
	elements.btnGenFacturasProf.enabled = false
	elements.btnActStockAlbaran.visible = false
	elements.btn_Cliente.visible = false
	//elements.btnFacturas.visible = false
	elements.fld_fecha_cal.visible = true
	elements.lblfecha_cal.visible = false
	elements.fld_fecha_cal.bgcolor = '#FFFF00';
	elements.fld_clie_cal.bgcolor = '#FFFF00';
	elements.btnUltimoAlbaran.visible = false
	
	
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
 * @properties={typeid:24,uuid:"2A314458-51DF-4548-B31F-943AC3E55854"}
 */
function btn_cancel()
{
	_super.btn_cancel()	
	elements.BtnCliente.visible = false
	elements.BtnContactos.visible = false
	elements.BtnFormaPago.visible = false
	elements.BtnAddCliente.visible = false
	elements.btnEnvMail.visible = true
	elements.btnGenFactura.visible = true
	elements.btnGenFacturasProf.visible = true
	elements.btnGenFacturasProf.enabled = false
	elements.btnActStockAlbaran.visible = true
	elements.btn_Cliente.visible = true
	//elements.btnFacturas.visible = true
	elements.fld_fecha_cal.visible = false
	elements.lblfecha_cal.visible = true
	elements.btnUltimoAlbaran.visible = true
	globals.GCRegistroNuevo = null	
	situacionColor()
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		/** @type Number*/
		/*var idx = elements.tabs_mainPanel.tabIndex;
		var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
		forms[frm].controller.enabled = true
		forms[frm].controller.readOnly = false*/
	}
	elements.situ_cal.bgcolor = '#f0f0f0'
	elements.situ_cal.readOnly = true
	
}

/**
 * 
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"9B26B5F9-E89F-41D1-A1BC-1AF40EC09D48"}
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
	elements.btnEnvMail.enabled = true
	elements.btnGenFactura.enabled = true
	elements.btnGenFacturasProf.enabled = false
	elements.btnActStockAlbaran.visible = true
	elements.btn_Cliente.enabled = true
	elements.fld_fecha_cal.visible = false
	elements.lblfecha_cal.visible = true
	globals.GCRegistroNuevo = null	
	//hide the comboboxes
	/*elements.fld_companyCategoryc.visible = false
	elements.fld_companyIndustryc.visible = false
	elements.fld_companyTypec.visible = false
	elements.fld_accountmanagerc.visible = false
	elements.fld_statusc.visible = false*/
	if(globals.GCFormulario)	
	{
		if(globals.GCFormulario == 'FrmClientesGC')
		{
			if(forms.lst_ClientesAlbaran_LineasGC.gclalbaran_to_calbaran)
			{			
				if(forms.lst_ClientesAlbaran_LineasGC.gclalbaran_to_calbaran.id)
				{
					var uuid = forms.lst_ClientesAlbaran_LineasGC.gclalbaran_to_calbaran.id
					var result = foundset.selectRecord(uuid)
					var fsCount = databaseManager.getFoundSetCount(foundset);
					while(result==false)
					{
						if(fsCount == foundset.getSize()) return;
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
 * @properties={typeid:24,uuid:"E8A75B3E-79A8-480A-8B78-79BF8B6F0F49"}
 */
function evt_changeItem(event)
{
	if(clie_cal)
	{
		if(GCcalbaran_to_tbmaestroclientes)
		{
			nomcl_cal = GCcalbaran_to_tbmaestroclientes.desccliente
			dircl_cal = GCcalbaran_to_tbmaestroclientes.direccion
			pobcl_cal = GCcalbaran_to_tbmaestroclientes.poblacion
			procl_cal = GCcalbaran_to_tbmaestroclientes.provincia
			cdpcl_cal = GCcalbaran_to_tbmaestroclientes.codpostal
			telcl_cal = GCcalbaran_to_tbmaestroclientes.telf1
			faxcl_cal = GCcalbaran_to_tbmaestroclientes.fax
			emacl_cal = GCcalbaran_to_tbmaestroclientes.emailcontacto
			if(GCcalbaran_to_tbmaestroclientes.idformapago) cfpa_cal = GCcalbaran_to_tbmaestroclientes.idformapago
			if(GCcalbaran_to_tbmaestroclientes.tipoiva) piva_cal = GCcalbaran_to_tbmaestroclientes.tipoiva;
			if(piva_cal == null)
			{
				piva_cal = 0;
			}			
			if(GCcalbaran_to_tbmaestroclientes.dto) depp_cal = GCcalbaran_to_tbmaestroclientes.dto;
			if(depp_cal)
			{
				onFocusLostDtoPP(event)
			}
			if(impbre_cal) onFocusLostIva(event)
			var rows = GCcalbaran_to_lalbaran.getSize()
			for(var i=1;i<=rows;i++)
			{
				var record = GCcalbaran_to_lalbaran.getRecord(i)
				record.clie_lal = clie_cal;
				
				databaseManager.saveData(record)
			}			
		}
		else
		{
			cfpa_cal = null;
			piva_cal = 0;
			depp_cal = null;
		}
	}
	else
	{
		cfpa_cal = null;
		piva_cal = 0;
		depp_cal = null;
	}	
}

/**
 * @properties={typeid:24,uuid:"9CB852E2-4CB0-418C-BCE4-7F7AB3F7E7E6"}
 */
function btn_sendEmail()
{
	if(globals.GCisEditing()) forms.FrmAlbaranGC.btn_cancel()
	
	if(cod_cal)
	{
		//if(emacl_cal) application.showURL( 'mailto:' + emacl_cal, '_blank');
		var query = 'select [ServidorCorreoSMTP] from [ParametrosAplicacion]'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var SMTP = dataset.getValue(1,1)
		if(!SMTP)
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
				globals.GCFormulario = 'FrmAlbaran'
				globals.GCshowDialogEnvioMail('Impresión y Envio Albarán',1,null,null,null,null,null,null,null,null)
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"FDAC64F5-B034-4824-9F61-95A0E8A979A0"}
 */
function sub_setNewNumeroAlbaran()
{
	var query = 'select [NumAlbaran] from [ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	cod_cal = dataset.getValue(1, 1) + 1		
	
	
}

/**
 * @properties={typeid:24,uuid:"29AD3D06-C7C8-4D65-BCCC-B01D8627E588"}
 */
function validate_autoEnter()
{
	globals.GCRegistroNuevo = 1	
	sub_setNewNumeroAlbaran();	
	id = application.getUUID()
	var Fecha = utils.dateFormat(new Date(),'dd-MM-yyyy')
	fecha_cal = utils.parseDate(Fecha,'dd-MM-yyyy')
	rcli_cal = '';	
	usu_cal = globals.GClogin_usuario;
	elements.fld_fecha_cal.requestFocus();
}

/**
  * @return {Number}
 * @properties={typeid:24,uuid:"A40F94B0-DECB-4A30-9FDA-6C313B77C0CD"}
 */
function validate_beforeDelete()
{
	var lin = GCcalbaran_to_lalbaran.getSize()
	var situlogistica = 0;
	var situfra = 0;
	
	for(var i=1;i<=lin;i++)
	{
		var record = GCcalbaran_to_lalbaran.getRecord(i);
		if(record['situ_lal'] == 'A')
		{
			situlogistica = 1;
			break;
		}
		if(record['sifa_lal'] == 2)
		{
			situfra = 1;
			break;
		}
	}

	var query = 'select savealbaran from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Albaranes.',null,'Aceptar',null,null,null)
		return 1
	}
	else if(situfra != 0 || situlogistica != 0)
	{
		if(situfra == 1)
		{
			//show dialog and return 1
			//show the tabpanel "dialog"
			globals.GCshowErrorDialog("Albarán ya facturado, no se puede borrar sin borrar antes la factura y cambiando luego manualmente la situación de las líneas del albaran.", null,'Aceptar', null, null, null);
			return 1
		}
		if(situlogistica == 1)
		{
			//show dialog
			//show the tabpanel "dialog"
			globals.GCshowErrorDialog("Albarán actualizado en logística. Cambie primero la situación de las líneas antes de poder borrar el albarán. Posteriormente habrá que realizar una regularización manual del Stock.", null,'Aceptar', null, null, null);
			return 1
		}
	}
	else
	{
		return 0
	}
	return null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"A681D3B3-6BA1-429E-BC70-9DA14B2A143E"}
 */
function onActionBtnCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmAlbaran';
	//globals.GCshowDialogClientes('Clientes', 1, null, null, true, 'Borrar Línea', null, null, null, null);
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
 * @properties={typeid:24,uuid:"87E23165-102A-4F8A-9922-7E065C501BA2"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Albaran_list();
}

/**
 * @properties={typeid:24,uuid:"9C2F9C70-1A04-4A61-850B-8F84C75B429B"}
 * @AllowToRunInFind
 */
function rpt_Albaran_list()
{
	try
	{
		/*var DNUP = cod_cal;
		var HNUP = cod_cal;
		var DCLI = clie_cal;
		var HCLI = clie_cal;
		globals.btn_runJasperReportAlbaranVentas(DNUP,HNUP,DCLI,HCLI)
		application.updateUI(); */
		//to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		forms.dlg_ImpresionAlbaranesGC.DesdeAlbaran = cod_cal;
		forms.dlg_ImpresionAlbaranesGC.HastaAlbaran = cod_cal;			
		globals.GCshowDialogImpresionAlbaranes('Impresión de Albaranes',1,null,null,null,null,null,null,null,null)			
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
 * @properties={typeid:24,uuid:"C319CA4F-1659-4066-B576-51D82634BC22"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	elements.fld_clie_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF1EF5F0-E433-47DB-98AB-5E09465A662B"}
 */
function onActionnom(event) {
	// TODO Auto-generated method stub
	elements.fld_dircl_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB52AD67-06A5-496C-B7B4-33E9DABF4B0B"}
 */
function onActiondir(event) {
	// TODO Auto-generated method stub
	elements.fld_pobcl_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DF32B1EB-9996-40DD-AF8D-F62878AB19ED"}
 */
function onActionpob(event) {
	// TODO Auto-generated method stub
	elements.fld_procl_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D2ECE7D7-9C78-48B5-8743-F4F4A321694E"}
 */
function onActionpro(event) {
	// TODO Auto-generated method stub
	elements.fld_attcl_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B111780A-3378-45E0-B67E-DFCD84DBC790"}
 */
function onActioncdp(event) {
	// TODO Auto-generated method stub
	elements.fld_procl_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B3B09F3D-02C5-467A-8072-EC002965B032"}
 */
function onActionatt(event) {
	// TODO Auto-generated method stub
	elements.fld_telcl_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"73C9D28D-4BA0-45F1-8A72-D54D70A5B675"}
 */
function onActiontelf(event) {
	// TODO Auto-generated method stub
	elements.fld_faxcl_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6820C79F-67A0-4173-A7ED-3006575F436D"}
 */
function onActionfax(event) {
	// TODO Auto-generated method stub
	elements.fld_rcli_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"657BE938-74FB-423B-AB8D-CD6629781979"}
 */
function onActionrcli(event) {
	// TODO Auto-generated method stub
	elements.fld_emacl_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"792706B7-7EF4-4F36-B555-E068A1F9F304"}
 */
function onActionema(event) {
	// TODO Auto-generated method stub
	elements.fld_portes_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"68929AF1-8409-4C56-879B-17219D31804D"}
 */
function onActionportes(event) {
	// TODO Auto-generated method stub
	elements.fld_refped_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DAF6F62C-DA88-47D0-94FC-E2E7026DBA40"}
 */
function onActionrefped(event) {
	// TODO Auto-generated method stub
	elements.fld_cfpa_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B9801E00-418B-465B-A632-A40F95A49067"}
 */
function btn_BDCliente(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmAlbaranGC.btn_cancel()
	
	if(clie_cal)
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
		globals.GCFormulario = 'FrmAlbaranGC';
		forms.FrmClientesGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1)*/ 
		
		var query = "select [ID] from [tbMaestroClientes] where [IdCliente] = " + clie_cal
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
		globals.GCFormulario = 'FrmAlbaranGC';
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
 * @properties={typeid:24,uuid:"0A93DFC0-3536-46D3-8EFC-25487D643473"}
 */
function onActionclie(event) {
	// TODO Auto-generated method stub
	evt_changeItem(event)
	elements.fld_nomcl_cal.requestFocus()
}

/**
 *
 * @properties={typeid:24,uuid:"ADD5734D-5AC3-4F26-96E4-7CB6ADCF8AE3"}
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
		var query = "select [cod_cal] from [calbaran] order by [cod_cal] desc"			
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
		
		forms.dlg_ParametroAplicacionGC.numalbaran = n;*/
		gcparametrosaplicacion_to_parametrosaplicacion.numalbaran = n;
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
 * @properties={typeid:24,uuid:"F9B20B9A-5D81-4E55-9AA8-E0947D4DC851"}
 */
function btngooglemaps(event) {
	// TODO Auto-generated method stub
	if(dircl_cal)
	{
		var dir = utils.stringReplace(dircl_cal,' ','+')
		var pob = utils.stringReplace(pobcl_cal,' ','+')
		application.showURL( 'http://maps.google.com/maps?q=' + dir + ','+pob,'_blank');
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"97AA55C1-B88A-4478-A4A2-9B3E33546B38"}
 */
function btnGenerarFactura(event) {
	if(globals.GCisEditing()) forms.FrmAlbaranGC.btn_cancel()
	
	var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Facturas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(cod_cal && clie_cal)
		{
			if(situ_cal == null)
			{
				/*
				var result = forms.dlg_Generacion_FacturaGC.foundset.selectRecord(id)
				var fsCount = databaseManager.getFoundSetCount(forms.dlg_Generacion_FacturaGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.dlg_Generacion_FacturaGC.foundset.getSize())
					{
						return;
					}
				forms.dlg_Generacion_FacturaGC.foundset.setSelectedIndex(forms.dlg_Generacion_FacturaGC.foundset.getSize());
				result = forms.dlg_Generacion_FacturaGC.foundset.selectRecord(id);
				}
				//start a transaction
				//if(!globals.GCisEditing()) globals.GCstartEditing()
			
				//setup the method to execute when the dialog closes
				//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deletePresupuestoLinea()'
			
				//show the "fake" dialog
				globals.GCshowDialogGeneracionFactura('Generación Factura', 1, null, null, true, null, null, null, null, null);
				*/
				
				//start a transaction
				globals.AlbaranCliente = clie_cal;
				if(lalbaranpendfacturar)
				{
					if(lalbaranpendfacturar.getSize() > 0)
					{
						if(!globals.GCisEditing()) globals.GCstartEditing()
						
						//setup the method to execute when the dialog closes
						//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deletePresupuestoLinea()'
					
						//show the "fake" dialog
						globals.GCshowDialogGeneracionFactura5('Generación Factura', 1, null, null, true, null, null, null, null, null);
					}
					else 
					{
						globals.GCshowErrorDialog('No existen líneas de albarán por facturar a este cliente.',null,'Aceptar',null,null,null)
					}
				}
				else 
				{
					globals.GCshowErrorDialog('No existen líneas de albarán por facturar a este cliente.',null,'Aceptar',null,null,null)
				}
			}
			else if(situ_cal == 'F')
			{
				globals.GCshowErrorDialog('Albarán ya facturado anteriormente.',null,'Aceptar',null,null,null)
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
 * @properties={typeid:24,uuid:"D1CC741D-4D53-4FA7-951E-637D851D8A0F"}
 */
function handle_shortCut(v_event)
{
	globals.GCevento = null
	if(v_event.getType() == 'control F10')
	{
		if(globals.GCisEditing())
		{
			elements.situ_cal.bgcolor = '#feffe4'
			elements.situ_cal.readOnly = false
		}
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"07CF296E-7655-440D-86DB-6894E73258F1"}
 */
function onFocusLostDtoPP(event) {
	// TODO Auto-generated method stub
	var Dtopp = (impbre_cal * depp_cal) / 100
	impbie_cal = globals.GCROUND(impbre_cal - Dtopp,2)
	var Importebruto = impbre_cal - Dtopp
	impcie_cal = Importebruto * (piva_cal / 100)
	impcie_cal = globals.GCROUND(impcie_cal,2)
	impnee_cal = Importebruto + impcie_cal
	impnee_cal = globals.GCROUND(impnee_cal,2)
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"E29D93E1-5343-401C-B8EB-01880A30D12A"}
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
 * @properties={typeid:24,uuid:"794E04FF-2F5C-438C-AB75-FBDE5A8F2B8F"}
 */
function onActionanticipo(event) {
	// TODO Auto-generated method stub
	elements.fld_depp_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"DC7906E7-1151-47EC-89B2-AC072236E672"}
 */
function onActiondto(event) {
	// TODO Auto-generated method stub
	elements.fld_piva_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"9FC0B901-03B1-4AA0-A91D-877DA7B316DB"}
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
 * @properties={typeid:24,uuid:"EE284D03-63E8-4881-97EF-FB183717B4F2"}
 */
function btnFacturas(event) {
	if(globals.GCisEditing()) forms.FrmAlbaranGC.btn_cancel()
	
	var win = application.getWindow('Factura Lineas')
	//setup the record status
	if(win != null)
	{
		win.destroy();
	}
	/*
	win = application.createWindow("Factura Lineas", JSWindow.MODAL_DIALOG);
	var w = forms.FrmLoginGC.controller.getFormWidth()+20;
	var h = forms.FrmLoginGC.controller.getPartHeight(JSPart.BODY)+20;
	win.setInitialBounds(50, 0, w, h);
	*/
	win = application.createWindow("Factura Lineas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(10, 10, 1100, 600);	
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
 *
 * @properties={typeid:24,uuid:"2587334E-80CD-40F7-92FD-5DE0B5F5F5E5"}
 */
function btn_UltimoAlbaran(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) btn_cancel()
	
		forms.lst_AlbaranGC.foundset.loadAllRecords()
		forms.lst_AlbaranGC.btn_sortDesc()
		if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)
		if(forms.frm_nav_buttons_albaranGC.elements.btn_showAll.visible == true) 
		{
			forms.frm_nav_buttons_albaranGC.btn_showAll()
		}
	
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"8ABAA174-F1A6-42AC-AB42-1FD1BA9B3EEE"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(fecha_cal,'dd-MM-yyyy')
	fecha_cal = utils.parseDate(fech,'dd-MM-yyyy')	
	
}

/**
*
*
 * @properties={typeid:24,uuid:"B9B3D769-7CE5-4CDA-8D17-B65594E474B3"}
 */
function situacionColor()
{
	var lbl = sit
	if (lbl == 'FACTURADO') {
	    elements.lblsitu_cof.fgcolor = '#00994C';
	} else if (lbl == 'NO FACTURADO') {
		elements.lblsitu_cof.fgcolor = '#FF0000';
	} 
	else {
		elements.lblsitu_cof.fgcolor = '#FF8000';
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
 * @properties={typeid:24,uuid:"2492B922-F155-41C7-A296-AA2D8E9D3BB4"}
 */
function onActionBtnFormasPago(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmAlbaran';
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
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"AAB7C9C8-B9F8-415D-80D4-BCC793BF74D6"}
 */
function onDataChangeCP() {
	if(cdpcl_cal)
	{
		if(cdpcl_cal.length == 5)
		{
			var prov = utils.stringLeft(cdpcl_cal,2)			
			switch( prov )
			{
				case '01': 
				{
					procl_cal = 'ÁLAVA';				
					break;
				}
				case '02': 
				{
					procl_cal = 'ALBACETE';
					break;
				}
				case '03': 
				{
					procl_cal = 'ALICANTE';					
					break;
				}
				case '04': 
				{
					procl_cal = 'ALMERÍA';					
					break;
				}
				case '33': 
				{
					procl_cal = 'ASTURIAS';					
					break;
				}
				case '05': 
				{
					procl_cal = 'ÁVILA';
					break;
				}
				case '06': 
				{
					procl_cal = 'BADAJOZ';					
					break;
				}
				case '08': 
				{
					procl_cal = 'BARCELONA';					
					break;
				}
				case '09': 
				{
					procl_cal = 'BURGOS';					
					break;
				}
				case '10': 
				{
					procl_cal = 'CÁCERES';					
					break;
				}
				case '11': 
				{
					procl_cal = 'CÁDIZ';					
					break;
				}
				case '39': 
				{
					procl_cal = 'CANTABRIA';					
					break;
				}
				case '12':
				{
					procl_cal = 'CASTELLÓN';					
					break;
				}
				case '51':
				{
					procl_cal = 'CEUTA';
					break;
				}
				case '13':
				{
					procl_cal = 'CIUDAD REAL';					
					break;
				}
				case '14':
				{
					procl_cal = 'CÓRDOBA';					
					break;
				}
				case '15':
				{
					procl_cal = 'CORUÑA, A';					
					break;
				}
				case '16':
				{
					procl_cal = 'CUENCA';					
					break;
				}
				case '17':
				{
					procl_cal = 'GIRONA';					
					break;
				}
				case '18':
				{
					procl_cal = 'GRANADA';					
					break;
				}
				case '19':
				{
					procl_cal = 'GUADALAJARA';					
					break;
				}
				case '20':
				{
					procl_cal = 'GUIPÚZCOA';					
					break;
				}
				case '21':
				{
					procl_cal = 'HUELVA';					
					break;
				}
				case '22':
				{
					procl_cal = 'HUESCA';					
					break;
				}
				case '07':
				{
					procl_cal = 'ILLES BALEARS';					
					break;
				}
				case '23':
				{
					procl_cal = 'JAÉN';					
					break;
				}
				case '24':
				{
					procl_cal = 'LEÓN';					
					break;
				}
				case '25':
				{
					procl_cal = 'LLEIDA';					
					break;
				}
				case '27':
				{
					procl_cal = 'LUGO';					
					break;
				}
				case '28':
				{
					procl_cal = 'MADRID';
					break;
				}
				case '29':
				{
					procl_cal = 'MÁLAGA';					
					break;
				}
				case '52':
				{
					procl_cal = 'MELILLA';					
					break;
				}
				case '30':
				{
					procl_cal = 'MURCIA';					
					break;
				}
				case '31':
				{
					procl_cal = 'NAVARRA';					
					break;
				}
				case '32':
				{
					procl_cal = 'OURENSE';					
					break;
				}
				case '34':
				{
					procl_cal = 'PALENCIA';					
					break;
				}
				case '35':
				{
					procl_cal = 'PALMAS, LAS';					
					break;
				}
				case '36':
				{
					procl_cal = 'PONTEVEDRA';					
					break;					
				}
				case '26':
				{
					procl_cal = 'RIOJA, LA';					
					break;
				}
				case '37':
				{
					procl_cal = 'SALAMANCA';					
					break;
				}
				case '38':
				{
					procl_cal = 'S.C.TENERIFE';					
					break;
				}
				case '40':
				{
					procl_cal = 'SEGOVIA';
					break;
				}
				case '41':
				{
					procl_cal = 'SEVILLA';					
					break;
				}
				case '42':
				{
					procl_cal = 'SORIA';					
					break;
				}
				case '43':
				{
					procl_cal = 'TARRAGONA';					
					break;
				}
				case '44':
				{
					procl_cal = 'TERUEL';					
					break;
				}
				case '45':
				{
					procl_cal = 'TOLEDO';					
					break;
				}
				case '46':
				{
					procl_cal = 'VALENCIA';					
					break;
				}
				case '47':
				{
					procl_cal = 'VALLADOLID';					
					break;
				}
				case '48':
				{
					procl_cal = 'VIZCAYA';					
					break;
				}
				case '49':
				{
					procl_cal = 'ZAMORA';					
					break;
				}
				case '50':
				{
					procl_cal = 'ZARAGOZA';
					break;
				}
				default: break;		
			}
			var query = "select municipio_nombre from cp_municipios where  codigo_postal = '" + cdpcl_cal + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			if(dataset.getValue(1,1)) pobcl_cal = dataset.getValue(1,1);
		}
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"07D2E53A-E46D-4FD6-B70C-AC6560478C06"}
 */
function btn_OtrosContactos(event) {
	if(clie_cal && GCcalbaran_to_tbmaestroclientes && GCcalbaran_to_tbmaestroclientes.id)
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
								
				var query = 'select nombre from [tbmaestroclientescontactos] where idcliente ='+clie_cal
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
 *
 * @properties={typeid:24,uuid:"F97F4387-6DF7-4412-A790-71CEAA9D264B"}
 */
function MenuContactos(event) {
	forms.FrmAlbaranGC.attcl_cal = arguments[4]
	var query = "select email from [tbmaestroclientescontactos] where idcliente ="+clie_cal+
				" and nombre = '"+arguments[4]+"'"
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1);
	forms.FrmAlbaranGC.emacl_cal = dataset.getValue(1,1);	
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D01A57EC-DAD5-49F9-8BA8-AEBEB3C31058"}
 */
function btn_GenerarFacturaProforma(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"FA30D86A-C00C-42D9-9203-2749205392AD"}
 */
function btn_ActualizarStockAlbaran(event) {
	if(globals.GCisEditing()) forms.FrmAlbaranGC.btn_cancel()
	
	if(gcfechalimite_usuarios.taop_007=='1') 
	{					
		if(forms.FrmAlbaranGC.id && forms.FrmAlbaranGC.cod_cal && forms.FrmAlbaranGC.fecha_cal)
		{
			if(forms.FrmAlbaranGC.GCcalbaran_to_lalbaran.getSize() == 0)
			{
				var msg = 'No existen líneas registradas en este albarán'
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(msg,'¡Error!')
				else globals.GCshowWarningDialog(msg, null, null, null, null, null)
			}
			else
			{
				//var desdeAlb = forms.FrmAlbaranGC.cod_cal;
				//var hastaAlb = forms.FrmAlbaranGC.cod_cal;
				var desdeFech = utils.dateFormat(forms.FrmAlbaranGC.fecha_cal,'dd-MM-yyyy')
				if(!desdeFech) desdeFech = '1-1-1900'
				var hastaFech = utils.dateFormat(forms.FrmAlbaranGC.fecha_cal,'dd-MM-yyyy')+ ' 23:59:59'
				if(!hastaFech) 
				{
					hastaFech = new Date()
					var dia = hastaFech.getDate()
					var mes = hastaFech.getMonth() + 1
					var agno = hastaFech.getFullYear()
					hastaFech = dia + '-' + mes + '-' + agno + ' 23:59:59'
				}
					
				
				/*if(globals.GCCriterios == 0)*/ 
				var ord = 'nup_lal,nli_lal'
				//else ord = 'fecha_cal,nup_lal,nli_lal'
				
				var query = "select nup_lal,nli_lal,cant1_lal,refm_lal,unme_lal from [dbo].[lalbaran] " +
				"inner join [dbo].[calbaran] ON [dbo].[calbaran].cod_cal = [dbo].[lalbaran].nup_lal "+
				"where ([dbo].[lalbaran].[nup_lal] = " + forms.FrmAlbaranGC.cod_cal +") AND ([dbo].[calbaran].[fecha_cal] between '"+desdeFech+"' and '"+hastaFech+"') and"+
							" ([dbo].[lalbaran].[situ_lal] is NULL or [dbo].[lalbaran].[situ_lal] = '') ORDER BY "+ord;
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
						var Albaran = dataset.getValue(i, 1)
						var Linea = dataset.getValue(i, 2)
						var unid = dataset.getValue(i, 3)
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
								exis -= cant;
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
								forms.FrmMoviArtiGC.tipo_ms = 'S'
								forms.FrmMoviArtiGC.ndoc_ms = Albaran
								forms.FrmMoviArtiGC.ndoc1_ms = Linea
								forms.FrmMoviArtiGC.movi_ms = cant
								forms.FrmMoviArtiGC.exis_ms = stock
								forms.FrmMoviArtiGC.ferm_ms = fecha
								forms.FrmMoviArtiGC.nusu_ms = globals.GClogin_usuario;
								databaseManager.saveData(forms.FrmMoviArtiGC.foundset)
							}	
							//Actualizo situación Linea Albarán
							forms.lst_Albaran_LineasGC.foundset.loadAllRecords();
							var result = forms.lst_Albaran_LineasGC.foundset.selectRecord([Linea,Albaran])
							var fsCount = databaseManager.getFoundSetCount(forms.lst_Albaran_LineasGC.foundset);
							while(result==false)
							{
								if(fsCount == forms.lst_Albaran_LineasGC.foundset.getSize()) break//return;
								forms.lst_Albaran_LineasGC.foundset.setSelectedIndex(forms.lst_Albaran_LineasGC.foundset.getSize());
								result = forms.lst_Albaran_LineasGC.foundset.selectRecord([Linea,Albaran]);
							}
							if(result == true){
								forms.lst_Albaran_LineasGC.foundset.situ_lal = 'A'
								databaseManager.saveData(forms.lst_Albaran_LineasGC.foundset)
							}
							else{
								query = "UPDATE lalbaran SET situ_lal = 'A' "+    
					                			"WHERE nup_lal = "+Albaran+" AND nli_lal = "+Linea
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
		globals.GCshowErrorDialog('Este usuario no tiene permiso para actualizar Stock de Albaranes!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * @return {Number}
 *
 * @properties={typeid:24,uuid:"47B79D6C-53E4-4B18-AB10-20B4EF506CC4"}
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
 * @properties={typeid:24,uuid:"02A2CB15-6BF4-4D4D-860C-D1AF2D1FB9B6"}
 */
function sub_stock(art)
{
	var query = "select exis_a from tbmaestroarticulos where codigo='"+art+"'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var exis = dataset.getValue(1,1)
	
	return exis
	
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"8C4C5846-68DF-4FA4-BC9E-775432C3C1BB"}
 */
function btn_listadoAlbaranes(event) {
	
	globals.GCFormulario = 'FrmAlbaranGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialog_Albaranes3')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialog_Albaranes3", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'Últimos Albaranes';
	//win.resizable = true;
	//win.show(forms.dialog_Clientes2GC)
	win.show(forms.lst_Albaran2GC)

}
