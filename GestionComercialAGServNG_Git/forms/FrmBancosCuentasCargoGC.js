/**
 * @type {Array}
 *
 *
 * @properties={typeid:35,uuid:"1638B929-428F-4703-91BC-3ACDBE0136D3",variableType:-4}
 */
var editedRecs;

/**
 *
 *
 * @properties={typeid:24,uuid:"FC97A997-F252-478C-8B6D-46717EF99622"}
 */
function btn_save() {
	
	var ok = true;
	//if(cif) ok = globals.validateCIFGC(cif)
	if(!codigoctabanco || !nombreentidad)
	{
		globals.GCshowErrorDialog('Los campos de Cuenta Banco y Nombre son obligatorios.',null,'Aceptar',null,null,null)
	}	
	else if(ok == false){
		elements.fld_cif.requestFocus()
		elements.fld_cif.selectAll()
		globals.GCshowErrorDialog("CIF no válido!!!.\nVerifíquelo.", null, null, null, null, null)
	}
	else
	{
		if(globals.GCRegistroNuevo == 1)
		{
			var query = "select codigoctabanco from maestrobancosctascargo where codigoctabanco = '" + codigoctabanco + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n != null)
			{
				var methd = 'forms.FrmBancosCuentasCargoGC.foco()';
				globals.GCshowErrorDialog('Cuenta de Banco duplicada!',methd,'Aceptar',null,null,null)
			}
			else
			{
				/*query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var Empresa = dataset.getValue(1,1);
				var con = dataset.getValue(1,2);
				editedRecs = databaseManager.getEditedRecords( foundset)*/
				
				var editedRecs2 = databaseManager.getEditedRecords( foundset)
				
				if(editedRecs2.length > 0)
				{
					for (var x=0;x<editedRecs2.length;x++)
					{
						var cod = editedRecs2[x]['codigoctabanco'];
						dataset = editedRecs2[x].getChangedData();
						var rows = dataset.getMaxRowIndex()
						for( var i = 1 ; i <= rows ; i++ )
						{
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
							var record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
				            record.tipo = 'BAN' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (TR=Transportistas) (BAN = Bancos)
							record.codigo = cod
							record.fecha = new Date()
							record.datomodif = dataset.getValue(i,1)
							record.anterior = dataset.getValue(i,2)
							record.despues = dataset.getValue(i,3)
							record.usuario = globals.GClogin_usuario
							
							databaseManager.saveData(record)
						    //application.output(cod+' '+dataset.getValue(i,1) +' '+ dataset.getValue(i,2) +' '+ dataset.getValue(i,3));
						}
					}
				}
				_super.btn_save()
				
				elements.idcodigo.bgcolor = '#f0f0f0'
				elements.idcodigo.readOnly = true
				elements.idcodigo.visible = false
				elements.lbl_codigoctabanco.visible = true
				elements.lbl_codrequired.visible = false
				//elements.btn_sendEmail.visible = true
				elements.btn_webBanca.visible = true
				//elements.BtnCuentaContable.visible = false
				elements.BtnPais.visible = false
				elements.btn_histmodificaciones.visible = true
				//do sort and hilight the newly added (edited) record
				globals.GCRegistroNuevo = null
				
				if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect();
				/*if(con && editedRecs.length > 0 && Empresa)
				{
					methd = 'forms.FrmBancosCuentasCargoGC.ActualizarConta(event)'
					globals.GCshowQuestionDialog("¿Desea que los datos modificados en los Bancos se actualicen también en la contabilidad '"+Empresa+"'?",methd,'No','Si',null,null)
				}*/
			}
		}
		else
		{
			/*query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			Empresa = dataset.getValue(1,1);
			con = dataset.getValue(1,2);
			editedRecs = databaseManager.getEditedRecords( foundset)*/
			
			editedRecs2 = databaseManager.getEditedRecords( foundset)
			
			if(editedRecs2.length > 0)
			{
				for (x=0;x<editedRecs2.length;x++)
				{
					cod = editedRecs2[x]['codigoctabanco'];
					dataset = editedRecs2[x].getChangedData();
					rows = dataset.getMaxRowIndex()
					for( i = 1 ; i <= rows ; i++ )
					{
						vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
			            record.tipo = 'BAN' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (TR=Transportistas) (BAN = Bancos)
						record.codigo = cod
						record.fecha = new Date()
						record.datomodif = dataset.getValue(i,1)
						record.anterior = dataset.getValue(i,2)
						record.despues = dataset.getValue(i,3)
						record.usuario = globals.GClogin_usuario
						
						databaseManager.saveData(record)
					    //application.output(cod+' '+dataset.getValue(i,1) +' '+ dataset.getValue(i,2) +' '+ dataset.getValue(i,3));
					}
				}
			}
			_super.btn_save()
			
			elements.idcodigo.bgcolor = '#f0f0f0'
			elements.idcodigo.readOnly = true
			elements.idcodigo.visible = false
			elements.lbl_codigoctabanco.visible = true
			elements.lbl_codrequired.visible = false
			//elements.btn_sendEmail.visible = true
			elements.btn_webBanca.visible = true
			//elements.BtnCuentaContable.visible = false
			elements.BtnPais.visible = false
			elements.btn_histmodificaciones.visible = true
			//do sort and hilight the newly added (edited) record
			globals.GCRegistroNuevo = null
			
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect();
			/*if(con && editedRecs.length > 0 && Empresa)
			{
				methd = 'forms.FrmBancosCuentasCargoGC.ActualizarConta(event)'
				globals.GCshowQuestionDialog("¿Desea que los datos modificados en los Bancos se actualicen también en la contabilidad '"+Empresa+"'?",methd,'No','Si',null,null)
			}*/
		}
		 //for web client - to refresh buttons
	}
}

/**
 *
 *
 * @properties={typeid:24,uuid:"AF88D068-BC42-4738-8533-28370B41B885"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	
	elements.idcodigo.bgcolor = '#f0f0f0'
	elements.idcodigo.readOnly = true
	elements.idcodigo.visible = false
	elements.lbl_codigoctabanco.visible = true
	elements.lbl_codrequired.visible = false
	//elements.btn_sendEmail.visible = true
	elements.btn_webBanca.visible = true
	//elements.BtnCuentaContable.visible = false
	elements.BtnPais.visible = false
	elements.btn_histmodificaciones.visible = true
	globals.GCRegistroNuevo = null	
}

/**
 *
 *
 * @properties={typeid:24,uuid:"17FC841B-946F-414E-AB6E-E17CB6B4D5A8"}
 */
function doEdit()
{
	_super.doEdit()
	//elements.btn_sendEmail.visible = false
	elements.idcodigo.bgcolor = '#FFFF00';
	elements.fld_nombre.bgcolor = '#FFFF00';
	elements.btn_webBanca.visible = false
	elements.BtnPais.visible = true	
	elements.btn_histmodificaciones.visible = false
	
}

/**
 *
 *
 * @properties={typeid:24,uuid:"D9DE25DE-6178-4B58-B2F8-2E5B73C7E612"}
 */
function hide_btn_reset_fields()
{
	_super.hide_btn_reset_fields()
	
}

/**
 * @properties={typeid:24,uuid:"1B5E3AF6-8764-4507-A757-640EFD0A64B2"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_BancosCuentasCargo = id
	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
			globals.GCRegistroNuevo = null
			forms.FrmBancosCuentasCargoGC.doEdit()
		}
	}
	//setup or dim the buttons on the form based on field contents
	/*if(company_url)
	{
		elements.btn_openURL.imageURL = 'media:///sm_earth.gif';
	}
	else
	{
		elements.btn_openURL.imageURL = 'media:///nav_right_grey_whiteBg.gif';
	}

	if(company_email)
	{
		elements.btn_sendEmail.imageURL = 'media:///sm_contract_whiteBg.gif';
	}
	else
	{
		elements.btn_sendEmail.imageURL = 'media:///nav_right_grey_whiteBg.gif';
	}
	
	//see if we're on the last tab and no orders - then jump to the orders tab
	if((companies_to_orders) && elements.tabs_mainPanel.tabIndex == 4)
	{
		btn_tabOrders();
	}*/
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event the event that triggered the action 
 * @properties={typeid:24,uuid:"92478429-9581-4B9C-BE33-AF0EA781A8C0"}
 * @SuppressWarnings(unused)
 * @SuppressWarnings(deprecated)
 */
function onShow(firstShow, event)
{
	if(!globals.GClogin_usuario) globals.btn_SalirGC(event)
	 btn_cancel();
	onLoad(event)
	
	btn_tabEfectosPendientes()
	
	//make read only
	currentcontroller.enabled = true
	controller.readOnly = true

	//hide save/cancel btsn
	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
	//elements.btn_sendEmail.visible = true
	elements.btn_webBanca.visible = true
	//elements.BtnCuentaContable.visible = false	
	elements.BtnPais.visible = false
	elements.idcodigo.visible = false
	elements.lbl_codigoctabanco.visible = true
	globals.GCRegistroNuevo = null	
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F12844BA-4579-43AC-9F12-09ACFAC16E72"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	/*var ds = controller.getDataSource().split('/');
	databaseManager.removeTableFilterParam(globals.conex,'FiltradoBancosCtasCargo')
	databaseManager.refreshRecordFromDatabase(foundset,-1)	
	foundset.loadAllRecords()
	var success = databaseManager.addTableFilterParam(globals.conex, 'cmaestrobancosctascargo', 'idejercicio', '=', globals.Empresa, 'FiltradoBancosCtasCargo')
	foundset.loadAllRecords()*/
	//forms.lst_BancosCuentasCargo.foundset.loadAllRecords()
	forms.lst_BancosCuentasCargoGC.btn_sortAsc()
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)
}

/**
 * @properties={typeid:24,uuid:"DD12E548-6CC8-446A-AE4B-D461FFEEC2BD"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_BancosCtasCargo_list();
}

/**
 * @properties={typeid:24,uuid:"5EE14A36-013F-4E85-94D4-942E2294A1F5"}
 * @AllowToRunInFind
 */
function rpt_BancosCtasCargo_list()
{
	globals.btn_runJasperReportConsultaBancosCuentasCargoGC()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9CA285C9-F6B8-4AB0-8648-A21A5D756352"}
 */
function onActioncodigo(event) {
	// TODO Auto-generated method stub
	elements.fld_nombre.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E387AACC-77EB-4C58-A97A-E21D640EC8E8"}
 */
function onActionnom(event) {
	// TODO Auto-generated method stub
	elements.fld_direccion.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"02011F83-D277-4C73-A4A3-8FEC20DCE040"}
 */
function onActionpob(event) {
	// TODO Auto-generated method stub
	elements.fld_codigopaisue.requestFocus()
	
}

/**
 * @properties={typeid:24,uuid:"B229D9BA-FF1F-4300-9177-49690370A042"}
 */
function validate_autoEnter()
{
	elements.idcodigo.bgcolor = '#feffe4'
	elements.idcodigo.readOnly = false
	elements.idcodigo.visible = true
	elements.lbl_codigoctabanco.visible = false
	elements.lbl_codrequired.visible = true
	//elements.BtnCuentaContable.visible = true
	id = application.getUUID()
	pais = 'ES'
	globals.GCRegistroNuevo = 1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5367B972-C464-45F2-9471-B29A085A1CC2"}
 */
function onActiondir(event) {
	// TODO Auto-generated method stub
	elements.fld_poblacion.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89080AA1-F107-4EF0-83DF-786745806A0F"}
 */
function onActioncif(event) {
	// TODO Auto-generated method stub
	elements.fld_riesgoconcedido.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A6479D38-E979-4636-AD4D-C45F87311049"}
 */
function onActioncontacto(event) {
	// TODO Auto-generated method stub
	elements.fld_email.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0791D526-78AE-4956-9E68-C9CADC43296D"}
 */
function onActioncodpostal(event) {
	// TODO Auto-generated method stub
	elements.fld_cif.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F73C1F0-C159-4691-98B1-250EB0F10450"}
 */
function onActionriesgoconcedido(event) {
	// TODO Auto-generated method stub
	elements.fld_codigoine.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FEEAA171-A1BD-4F05-9CA1-E18BF21415A0"}
 */
function onActionmail(event) {
	// TODO Auto-generated method stub
	elements.fld_comisionefecto.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F116257B-79F8-4EB1-8BD3-333711E36708"}
 */
function onActioncomisionefecto(event) {
	// TODO Auto-generated method stub
	elements.fld_importeminimo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"742C0C38-9BD1-4546-8AE8-9693ADD3F5E7"}
 */
function onActioniban(event) {
	// TODO Auto-generated method stub
	elements.fld_codigobanco.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2B7B6D47-6359-42C9-8CE6-5E955D695A4D"}
 */
function onActioncodigobanco(event) {
	// TODO Auto-generated method stub
	elements.fld_codigosucursal.requestFocus()
}

/**
 *
 *
 *
 * @properties={typeid:24,uuid:"A844F787-776A-4B22-A156-26190EF265B4"}
 */
function evt_changeItem2() {
	// TODO Auto-generated method stub
	if(idbanco  && sucursal && digitocontrol && ncuenta && pais)
	{
		CalculoIBAN() 
	}	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"140158C9-C828-46F7-9EC0-568DC46AC449"}
 */
function onActioncodigosucursal(event) {
	// TODO Auto-generated method stub
	elements.fld_codigodc.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C6BCCBA2-2024-4C6D-9795-B691FDF6D13A"}
 */
function onActioncodigodc(event) {
	// TODO Auto-generated method stub
	if(pais != null)
	{
		evt_changeItempais()
	}
	elements.fld_codigocuenta.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"5E479626-E729-4573-9A8C-BEEF24FE8261"}
 */
function onActionPais(event) {
	// TODO Auto-generated method stub
	if(idbanco != null && sucursal != null && digitocontrol != null && ncuenta != null)
	{
		evt_changeItempais()
	}
elements.fld_idbanco.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"882ADB83-72A3-49F9-BB6E-8489C72924F7"}
 */
function onActioncodigoine(event) {
	// TODO Auto-generated method stub
	elements.fld_numlinea.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BD11D30F-0EA4-41F2-B5E4-A905A221B546"}
 */
function onActionnumlinea(event) {
	// TODO Auto-generated method stub
	elements.fld_contacto.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"690FBC04-6E42-4BE8-AEF3-CBDFB482A537"}
 */
function onActionintereses(event) {
	// TODO Auto-generated method stub
	elements.fld_comisionglobal.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E98665E1-C1BE-4983-BAA3-EF05CAE0539D"}
 */
function onActiondigitoiban(event) {
	// TODO Auto-generated method stub
	elements.fld_idtipoiva.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AF6489DC-EF5C-4234-B810-ED1836A7F7EA"}
 */
function onActionprefijoccciban(event) {
	// TODO Auto-generated method stub
	elements.fld_sufijo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"993F01D9-CB90-43B9-A7D8-5EB9B45699C4"}
 */
function onActionsufijo(event) {
	// TODO Auto-generated method stub
	elements.fld_personacontacto.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C048E376-50BC-4B95-9141-A1679A6C4C08"}
 */
function onActionpersonacontacto(event) {
	// TODO Auto-generated method stub
	elements.fld_webbancaonline.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5F39E920-8C2B-4261-A468-1E8446FB31CE"}
 */
function onActiontelefono(event) {
	// TODO Auto-generated method stub
	elements.fld_cif.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"2A2F4307-88D6-4F4E-BAB7-8734F0361A6E"}
 */
function btn_sendEmail()
{
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
			globals.GCFormulario = 'FrmBancosCuentasCargoGC'
			globals.GCshowDialogEnvioMail('Envio EMail',1,null,null,null,null,null,null,null,null)
		}
	}
	
}

/**
 *
 * @properties={typeid:24,uuid:"41E9AD71-BBE1-4322-8FF2-3344B28546DF"}
 */
function btn_webBanca()
{
	if(webbancaonline) 
	{
		if((webbancaonline.indexOf('http://',0) >= 0 || webbancaonline.indexOf('https://',0) >= 0))
		{
			application.showURL(webbancaonline);	
		}
		else
		{
			application.showURL( 'http://' + webbancaonline);
		}
	}// create a file object
	
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"694D3452-7B35-42D6-AAC5-2728015A8E97"}
 */
function validate_beforeDelete()
{
	return 0
}

/**
 * @properties={typeid:24,uuid:"B0F86E94-3619-49FB-A638-EEC4FB8F310E"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'B' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = codigoctabanco;
		record.fecha = new Date();
		record.datomodif = nombreentidad;
		record.anterior = 'BORRADO DE LA BD';
		record.despues = 'BORRADO DE LA BD';
		record.usuario = globals.GClogin_usuario
		
		databaseManager.saveData(record)
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
 *
 *
 * @properties={typeid:24,uuid:"C2A8A449-C5ED-4EE3-B30D-5552A72E8700"}
 */
function evt_changeItem()
{
	if(codigoctabanco != null)
	{
		nombreentidad = cmaestrobancosctascargo_to_ctbcuentacontable.desccuentacontable		
	}
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"C0A1917C-C545-4423-A364-87CD9DFE5F77"}
 */
function evt_changeItempais() {
	// TODO Auto-generated method stub
	if(idbanco != null && sucursal != null && digitocontrol != null && ncuenta != null)
	{
		CalculoIBAN() 
	}	
}

/**
 * Perform the element default action.
 *
 
 *
 *
 * @properties={typeid:24,uuid:"80A6ABDD-951B-4790-88B2-F557D5B79632"}
 */
function CalculoIBAN() {
	  
	//Limpiamos el numero de IBAN
	var account = idbanco + sucursal +	digitocontrol + ncuenta
	account = account.toUpperCase();  //Todo a Mayus
	account = trim(account); //Quitamos blancos de principio y final.
	account  = account.replace(/\s/g, "");  //Quitamos blancos del medio.
	             
	var letra1,letra2,num1,num2;
	var isbanaux;
	//var numeroSustitucion;
	             
	            //Generamos IBAN Temporal
	var codigopais = pais.toUpperCase();
	             
	isbanaux = codigopais + '00' + account;
	  
	// Cambiamos las letras por numeros.
	letra1 = isbanaux.substring(0, 1);
	letra2 = isbanaux.substring(1, 2);
	             
	num1 = getnumIBAN(letra1);
	num2 = getnumIBAN(letra2);      
	             
	isbanaux = String(num1) + String(num2) + isbanaux.substr(2, isbanaux.length - 2);   
	             
	// Movemos los 6 primeros caracteres al final de la cadena.         
	isbanaux = isbanaux.substr(6,isbanaux.length - 6) + isbanaux.substr(0,6);
	
	             
	//Calculamos el resto    
	
	var parte1 = isbanaux.substring(0,13)
	var parte2 = isbanaux.substring(13)
	var n = parte2.length
	var l = Digitos('1',n)
	var resto = ((parte1 % 97)*(l/*10000000000000*/ % 97) + (parte2 % 97)) % 97
	//var resto = isbanaux % 97;            
	var DC = 98 - resto;
	             
	if(DC < 10) DC = '0'+ String(DC);
	var Ibanfinal = codigopais + DC + account;
	  
	ncuentaiban = Ibanfinal;
	
	  
}

/**
* Perform the element default action.
*
* @param {String} myString
*
*
* @return {String}
 *
 * @properties={typeid:24,uuid:"7A45BDB6-A542-4D69-9967-0236910581BE"}
 */
function trim(myString)
{
	return myString.replace(/^\s+/g,'').replace(/\s+$/g,'');
}

/**
* Perform the element default action.
*
* @param {String} letra
*
*
* @return {Number}
 * @AllowToRunInFind
*
 * @properties={typeid:24,uuid:"BACA3C9C-5754-4247-9D5E-5C4500474A3E"}
 */
function getnumIBAN(letra)
{
	    var ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';           
	    return ls_letras.search(letra) + 10;
}

/**
 * Callback method when form is destroyed.
 * 
 * @param {String} CAMPO
 * 
 * @param {Number} LONGITUD
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"8285CD2F-E199-46F3-B7B0-ACD9225D7A7D"}
 */
function Digitos(CAMPO,LONGITUD)
{	
	var espacios = '0'
	var n = LONGITUD - CAMPO.length
	for(var i=1;i<=n;i++)
	{
		espacios = espacios + '0';
	}
    return (CAMPO + espacios);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"6AB52BC0-7DC8-47B2-A330-B19C59E4AFA3"}
 */
function onActionBtnPaises(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmBancosCuentasCargoGC'
	//globals.GCshowDialogPaises('Paises', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialogPaises')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialogPaises", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Paises';
	//win.resizable = true;
	//win.show(forms.dialog_PaisesGC)
	win.show(forms.dlgPaisesGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8957B357-87FA-48E6-A777-E677EBBDCD0B"}
 */
function onActioncodicocuenta(event) {
	// TODO Auto-generated method stub
	
		if(pais != null)
		{
			evt_changeItempais()
		}
	elements.fld_telefono.requestFocus()
	
}

/**
* Perform the element default action.
*
* @param {String} CodigoCuenta
*
*
* @return {String}
 * @AllowToRunInFind
*
 * @properties={typeid:24,uuid:"7F7FF361-1B78-41BB-A5F1-47978EEB8237"}
 */
function getSWIFT(CodigoCuenta)
{
	var bic = new String
	//var bic = null
	for(var i=0;i<CB.length;i++)
	{
		if(CB[i] == CodigoCuenta)
		{
			bic =  sw[i]
			break;
		}
	}
	return bic;
	
}

/**
*
*
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"1486A581-FCBA-4F28-9BA2-BD3E22A5820B",variableType:-4}
 */
var CB = new Array('1478','1479','1480','1488','1491','1494','1497','1502','1505','1506','1508','1522','1524','1525','1534','1538','1545',
	'0147','0151','0160','0161','0164','0166','0169','0171','0177','0178','0195','0199','0203','0206','1452','1460','1485','0106','0107',
	'0108','0131','0144','0145','0149','0150','0152','0154','0155','0156','0159','0162','0163','0167','0168','0172','0174','0179','0180',
	'0190','0196','0197','0201','0212','0213','0218','1451','1453','1454','1457','1459','1462','1463','1464','1465','1466','1467','1468',
	'1469','1470','1471','1472','1473','1474','1475','0003','0009','0011','0024','0030','0031','0042','0043','0048','0049','0050','0059',
	'0061','0063','0065','0083','0069','0072','0078','0086','0087','0089','0095','0104','0200','0202','0205','0208','0216','0189','2024',
	'2073','0004','0016','0021','0036','0056','0076','0082','0088','0109','0111','8835','6852','1127','0118','0127','0182','0185','0198',
	'0215','0217','0224','0226','0227','0239','1490','0488','1004','1302','1544','2000','2013','2038','2048','2080','2085','2086','2090',
	'2095','2100','2103','2108','2010','2017','2030','2031','2032','2037','2040','2041','2043','2051','2052','2054','2056','2069','2071',
	'2074','2077','2081','2092','2094','2096','2098','2099','2101','2104','2105','2106','2045','3001','3005','3007','3008','3009','3016',
	'3017','3018','3020','3023','3063','3064','3066','3067','3070','3076','3078','3080','3081','3096','3098','3102','3104','3111','3112',
	'3113','3114','3115','3117','3118','3119','3121','3123','3127','3159','8512','1113','1116','1156','1168','1164','1000','0013','0015',
	'0019','0046','0057','0058','0073','0075','0081','0085','0094','0096','0097','0100','0101','0113','0121','0122','0125','0128','0129',
	'0130','0132','0133','0136','0137','0138','0142','0184','0186','0188','0209','0210','0211','0219','0220','0221','0223','0225','0228',
	'0229','0231','0232','0233','0234','0235','0236','0237','0238','0486','0487','0489','1001','2066','3021','3022','3025','3029','3035',
	'3045','3056','3058','3059','3060','3061','3062','3082','3083','3084','3085','3089','3092','3093','3094','3095','3105','3110','3128',
	'3130','3134','3135','3138','3140','3144','3146','3147','3150','3152','3157','3160','3161','3162','3165','3166','3174','3172','3179',
	'3181','3183','3186','3187','3189','3190','3191','8233','1182','1191','1193','1196','1197','1173','1199','1209','1210','1221','1222',
	'1224','1227','1231','1248','1233','1234','1236','1238','1239','1240','1241','1242','1245','1249','1251','1252','1255','1273');

/**
*
*
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"B7B1D247-4B84-4988-9E9C-03DB9ADFB730",variableType:-4}
 */
var sw = new Array('MLIBESM1XXX','NATXESMMXXX','VOWAES21XXX','PICTESMMXXX','TRIOESMMXXX','BCITESMMXXX','ESSIESMMXXX','IKBDESM1XXX',
	'ARABESMMXXX','MLCBESM1XXX','RCINFRPPXXX','EFGBESMMXXX','UBIBESMMXXX','BCDMESM1XXX','KBLXESMMXXX','ICBKESMMXXX','AGRIESMMXXX',
	'MGTCESMXXXX','CHASESM3XXX','BOTKESMXXXX','BKTRESM1XXX','BSCEESMMXXX','BESPESMMXXX','NACNESMMXXX','SMITESMXXXX','MITKESM1XXX',
	'ROYCESM1XXX','SANWESM1XXX','CRESESMMXXX','FUJIJPJTXXX','DKBBESM1XXX','UBSWESMMXXX','CRESESMMXXX','BOFAES2XXXX','LOYDESMMXXX',
	'BNLIESM1XXX','SOGEESMMAGM','BESMESMMXXX','PARBESMXXXX','DEUTESM1XXX','BNPAESMSXXX','NWBKESMXXXX','BPLCESMMXXX','BSUIESMMXXX',
	'BRASESMMXXX','ABNAESMMXXX','COBAESMXXXX','MIDLESMMXXX','UNCRESMMXXX','GEBAESMMXXX','BBRUESMXXXX','CCFRESMMXXX','BCITESMMXXX',
	'AGRIESMM','ILBKESMMXXX','BBPIESMMXXX','WELAESMMXXX','BESCESMMXXX','NAPBESMMXXX','COBFFRPPXXX','CARIESMMXXX','FCEFESM1XXX',
	'AGRIESB1XXX','PASCESMMXXX','NEWGESM1XXX','LLISESM1XXX','PRABESMMXXX','ASSCESM1XXX','PSABESM1XXX','NFFSESM1XXX','INGDESMMXXX',
	'FRANESM1XXX','EHYPESMXXXX','EEHDESM1XXX','SHSAESM1XXX','BPIPESM1XXX','ROYCESM1XXX','UCSSESM1XXX','PRIBESMXXXX','CITIESMXXXX',
	'CCSEESM1XXX','BDEPESM1XXX','FICDESM1XXX','ALLFESMMXXX','BALEES22XXX','ESPCESMMXXX','ETCHES2GXXX','BGUIES22XXX','BHROESM2XXX',
	'CGDIES2VXXX','BSCHESMMXXX','BCIOESMMXXX','MADRESMMXXX','BMARES2MXXX','BMAPESM1XXX','BARCESMMXXX','RENBESMMXXX','BAMUES22XXX',
	'PSTRESMMXXX','BAPUES22XXX','NORTESMMXXX','SIBBESBBXXX','CGDIES2CXXX','VASCES2PXXX','EXTEESMMXXX','PRVBESB1XXX','BNARESMMXXX',
	'DECRESM1XXX','CRLEESMMXXX','POHIESMMXXX','IBJTESM1XXX','CECAESMM024','CECAESMM073','BANDESSSXXX','CENTESMM','BCNDESM1XXX',
	'SABNESMMXXX','JOVEESBBXXX','PROGESMM','CASTES2SXXX','BOFAES2XXXX','DEEEESM1XXX','BAFOESMM','SBFCESMMXXX','BMEUESM1XXX',
	'SCBLESM1XXX','ASTUESMMXXX','BBVAESMMXXX','BBVAESMMXXX','UIJOESMMXXX','BCOEESMMXXX','DBOLESM1XXX','HLFXESMMXXX','SCFBESMMXXX',
	'UBSWESMMXXX','UNOEESM1XXX','EVOBESMMXXX','SELFESMMXXX','BFASESMMXXX','BCLEESMMXXX','BBVAESMMXXX','BACAESMMXXX','CECAESMMXXX',
	'CESCESBBXXX','CAHMESMMXXX','CECAESMM048','CAGLESMMVIG','CAZRES2ZXXX','CECAESMM086','CAAMES2AXXX','BASKES2BXXX','CAIXESBBXXX',
	'UCJAES2MXXX','CSPAES2L108','CECAESMM010','CECAESMM017','CECAESMM030','CECAESMM031','CECAESMM032','CECAESMM037','CECAESMM040',
	'CECAESMM041','CECAESMM043','CECAESMM051','CECAESMM052','CANVES2PXXX','CECAESMM056','CECAESMM069','CECAESMM071','CECAESMM074',
	'CVALESVVXXX','CECAESMM081','CECAESMM092','CECAESMM094','CSPAES2LXXX','CECAESMM098','CECAESMM099','CGGKES22XXX','CSSOES2SXXX',
	'CECAESMM105','CECAESMM106','CECAESMM045','BCOEESMM01 ','BCOEESMM005','BCOEESMM007','BCOEESMM008','BCOEESMM009','BCOEESMM016',
	'BCOEESMM017','BCOEESMM018','BCOEESMM020','BCOEESMM023','BCOEESMM063','BCOEESMM064','BCOEESMM066','BCOEESMM067','BCOEESMM070',
	'BCOEESMM076','BCOEESMM078','BCOEESMM080','BCOEESMM081','BCOEESMM096','BCOEESMM098','CCRIES2A102','BCOEESMM104','BCOEESMM111',
	'CCRIES2A112','BCOEESMM113','BCOEESMM114','BCOEESMM115','BCOEESMM117','CCRIES2A118','CCRIES2A119','CCRIES2A121','CCRIES2A123',
	'BCOEESMM127','BCOEESMM159','UCINESMMXXX','BSUDESM1XXX','SCSIESM1XXX','IRVTESM1XXX','BNACESM1XXX','ESBFESM1XXX','ICROESMMXXX',
	'SLBKESBBXXX','CATAESBBXXX','DEUTESBBXXX','GALEES2GXXX','BVADESMMXXX','BNPAESMMXXX','OPENESMMXXX','POPUESMMXXX','BSABESBBXXX',
	'BDERESMMXXX','BVALESMMXXX','PROAESMMXXX','GALIES2VXXX','BVICES21XXX','CBANESBBXXX','INBBESM1XXX','OCBAESM1XXX','CITIES2XXXX',
	'BAOFESM1XXX','BKBKESMMXXX','INALESM1XXX','CGDIESMMXXX','PRNEESM1XXX','MIKBESB1XXX','AREBESMMXXX','BADIESMMXXX','BKOAES22XXX',
	'BPMEESBBXXX','BEDFESM1XXX','BFIVESBBXXX','ALCLESMMXXX','ABBKESM1XXX','MDBOESM1XXX','PROAESMMXXX','BMCEESMMXXX','FIOFESM1XXX',
	'PRABESMMXXX','GEECESB1XXX','FIEIESM1XXX','IXIUESM1XXX','POPLESMMXXX','DSBLESMMXXX','INVLESMMXXX','POPIESMMXXX','CCOCESMMXXX',
	'PIESESM1XXX','LOYIESMMXXX','CSURES2CXXX','PSTRESMMXXX','TRESES2BXXX','GBMNESMMXXX','EMACESMMXXX','BCAEESMM','CECAESMM066',
	'BCOEESMM021','BCOEESMM022','CDENESBBXXX','CCRIES2A029','CLPEES2MXXX','CCRIES2A045','BCOEESMM056','CCRIES2AXXX','BCOEESMM059',
	'BCOEESMM060','CRCPES2CXXX','BCOEESMM062','CCRIES2A082','BCOEESMM083','CVRVES2BXXX','BCOEESMM085','BCOEESMM089','BCOEESMM092',
	'BCOEESM1093','CCRIES2A094','CCRIES2A095','CCRIES2A105','CCRIES2A110','BCOEESMM128','BCOEESMM130','BCOEESMM134','CCRIES2A135',
	'BCOEESMM138','BCOEESMM140','BCOEESMM144','CCCVESM1XXX','BCOEESMM147','BCOEESMM150','CCRIES2A152','CCRIES2A157','CCRIES2A160',
	'BCOEESMM161','BCOEESMM162','CCRIES2A165','BCOEESMM166','BCOEESMM174','CCOCESMMXXX','CCRIES2A179','BCOEESM1181','CASDESBBXXX',
	'CCRIES2A186','BCOEESMM187','BCOEESMM189','BCOEESMM190','BCOEESMM191','CSFAESM1XXX','HYVEESM1XXX','HANDES21XXX','PKBSES21XXX',
	'AEEVESM1XXX','BILLESB1XXX','COURESB1XXX','CRGEESM1XXX','ABCMESM1XXX','REDEESM1XXX','PNBMESM1XXX','PCIBESM1XXX','RHRHESM1XXX',
	'BSSAESB1XXX','BOCAES21XXX','WAFAESM1XXX','BCMAESM1XXX','PRBAESM1XXX','HELAESM1XXX','BIMEESM1XXX','GENOESM1XXX','LOFPESB1XXX',
	'STOLESM1XXX','SOLAESB1XXX','BEIVESM1XXX','NPBSES21XXX','IHZUES21XXX','VONTESM1XXX','AARBESM1XXX','IKBDESM1XXX');

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CDF33E74-CAF6-4C32-87F4-E5FD40E9B20D"}
 */
function onActiontipoiva(event) {
	// TODO Auto-generated method stub
	elements.fld_sufijo.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"1FEB20A9-4875-484C-870E-603526853F3D"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	if(codigoctabanco)
	{
		var query = "select [CodigoCtaBanco] from [MaestroBancosCtasCargo] where [CodigoCtaBanco] = '" + codigoctabanco + "'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var n = dataset.getValue(1,1)
		if(n != null)
		{
			var methd = 'forms.FrmBancosCuentasCargoGC.foco()';
			globals.GCshowErrorDialog('Código de Banco duplicado!',methd,'Aceptar',null,null,null)
		}
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"9B243ACC-8009-41E4-9A7E-62B24D798C53"}
 */
function foco() {
	elements.idcodigo.requestFocus()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"8E518A85-2FCD-4D5B-A7D1-B710AB98FA88"}
 */
function onDataChangeIdBanco() {
	// TODO Auto-generated method stub
	if(idbanco)
	{
		swift = maestrobancosctascargo_to_swiftbancos.bic
		evt_changeItem2()
	}
	else
	{
		swift = null;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"EDEE3C3C-BC8E-4B86-8667-56DA592F96C8"}
 */
function btngooglemaps(event) {
	// TODO Auto-generated method stub
	if(direccion)
	{
		//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
		//{
			var dircompleta = utils.stringReplace('http://maps.google.com/maps?q=' + direccion + ', '+poblacion,' ','+')
			application.showURL(dircompleta,'_blank');
		//}
		/*else
		{
			application.showURL( 'http://maps.google.com/maps');
		}*/
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6386EB1D-3FCC-49ED-97FF-123BD947D16E"}
 */
function btnConceptosC43(event) {
	// TODO Auto-generated method stub
	if(codigoctabanco == null)
	{
		globals.GCshowWarningDialog('Añada primero un Banco.',null,'Aceptar',null,null,null)
	}
	else
	{
		globals.CuentaBanco = codigoctabanco;
		globals.showDialogConceptosC43('BD Conceptos Bancos',1,null,null,null,null,null,null,null,null)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"AA8CEE6A-64FC-4079-958C-659B78C11618"}
 */
function btnextracto(event) {
	// TODO Auto-generated method stub
	if(codigoctabanco)
	{
		globals.GCTipoConsulta = 1;
		globals.GCCriterios = 0;
		globals.DesdeCuenta = codigoctabanco;
		globals.HastaCuenta = codigoctabanco;
		globals.DesdedescCuenta = null;
		globals.HastadescCuenta = null;
		globals.DesdeFecha = new Date(utils.stringToNumber(globals.Ejercicio),0,1,0,0,0);
		globals.HastaFecha = new Date(utils.stringToNumber(globals.Ejercicio),11,31,23,59,59);
		globals.btn_runJasperReportExtractoCuentas();
	}
}

/**
 *
 * @properties={typeid:24,uuid:"8B53C5B5-0FBF-4470-BD9A-092CA439B55B"}
 */
function btn_tabEfectosPendientes()
{
	//if(!globals.GCisEditing()) //if there is a transaction - we're editing something
	//{
		tabs_dimAll()
		elements.lblEfectosPendientes.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 1)
		{
			elements.tabs_mainPanel.tabIndex = 1
		}
	//}
}

/**
 *
 * @properties={typeid:24,uuid:"CD9334E7-4BD1-41AC-9104-93CEB1458B49"}
 */
function tabs_dimAll()
{
	elements.lblEfectosPendientes.bgcolor = '#606060'	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6EA70505-29C4-4F69-9A28-E7FF4E6EE7CE"}
 */
function btnRemesasRealizadas(event) {
	// TODO Auto-generated method stub
	if(codigoctabanco)
	{
		globals.CuentaBanco = codigoctabanco
		globals.showDialogBancosRemesas('Remesas-Pagos realizados  Banco: '+codigoctabanco+' '+nombreentidad,1,null,null,null,null,null,null,null,null)
	}
}

/**
 * 
 * @param {String} CC
 * 
 * @param {String} DESCCC
 *
 *
 * @properties={typeid:24,uuid:"2722F26B-BD70-4F88-B9EF-7AFF3187178C"}
 */
function CrearCuenta(CC,DESCCC)
{
	var query = "select * from [ctbCuentaContable] where IdEjercicio = '"+globals.Empresa+
	"' and [CuentaContable] like '"+CC+"'"+"+'%'"
	var dataset = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 9999999)
	var rows = dataset.getMaxRowIndex()
	if(rows > 1 ) var clavdesgl = 1;
	else clavdesgl = 0;
	
	if(!DESCCC)
	{
		query = "select desccuentacontable from [ctbCuentaContable] where IdEjercicio = '"+globals.Empresa+
				"' and [CuentaContable] like '"+CC+"'"+"+'%' and len(cuentacontable) > "+CC.length+
				" and desccuentacontable is not null"
		var dataset2 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 1)
		DESCCC = dataset2.getValue(1,1)
		
	}
	
	forms.FrmCuentasContables.foundset.newRecord(true)	
	forms.FrmCuentasContables.id = application.getUUID()
	forms.FrmCuentasContables.idejercicio = globals.Empresa;
	forms.FrmCuentasContables.cuentacontable = CC;
	forms.FrmCuentasContables.desccuentacontable = DESCCC;
	forms.FrmCuentasContables.clavedesglose = clavdesgl;
	forms.FrmCuentasContables.debeenero = 0;
	forms.FrmCuentasContables.debefebrero = 0;
	forms.FrmCuentasContables.debemarzo = 0;
	forms.FrmCuentasContables.debeabril = 0;
	forms.FrmCuentasContables.debemayo = 0;
	forms.FrmCuentasContables.debejunio = 0;
	forms.FrmCuentasContables.debejulio = 0;
	forms.FrmCuentasContables.debeagosto = 0;
	forms.FrmCuentasContables.debeseptiembre = 0;
	forms.FrmCuentasContables.debeoctubre = 0;
	forms.FrmCuentasContables.debenoviembre = 0;
	forms.FrmCuentasContables.debediciembre = 0;
	forms.FrmCuentasContables.haberenero = 0;
	forms.FrmCuentasContables.haberfebrero = 0;
	forms.FrmCuentasContables.habermarzo = 0;
	forms.FrmCuentasContables.haberabril = 0;
	forms.FrmCuentasContables.habermayo = 0;
	forms.FrmCuentasContables.haberjunio = 0;
	forms.FrmCuentasContables.haberjulio = 0;
	forms.FrmCuentasContables.haberagosto = 0;
	forms.FrmCuentasContables.haberseptiembre = 0;
	forms.FrmCuentasContables.haberoctubre = 0;
	forms.FrmCuentasContables.habernoviembre = 0;
	forms.FrmCuentasContables.haberdiciembre = 0;
	forms.FrmCuentasContables.previsionenero = 0;
	forms.FrmCuentasContables.previsionfebrero = 0;
	forms.FrmCuentasContables.previsionmarzo = 0;
	forms.FrmCuentasContables.previsionabril = 0;
	forms.FrmCuentasContables.previsionmayo = 0;
	forms.FrmCuentasContables.previsionjunio = 0;
	forms.FrmCuentasContables.previsionjulio = 0;
	forms.FrmCuentasContables.previsionagosto = 0;
	forms.FrmCuentasContables.previsionseptiembre = 0;
	forms.FrmCuentasContables.previsionoctubre = 0;
	forms.FrmCuentasContables.previsionnoviembre = 0;
	forms.FrmCuentasContables.previsiondiciembre = 0;
	forms.FrmCuentasContables.previsionanual = 0;	
	forms.FrmCuentasContables.saldoenero = 0;
	forms.FrmCuentasContables.saldofebrero = 0;
	forms.FrmCuentasContables.saldomarzo = 0;
	forms.FrmCuentasContables.saldoabril = 0;
	forms.FrmCuentasContables.saldomayo = 0;
	forms.FrmCuentasContables.saldojunio = 0;
	forms.FrmCuentasContables.saldojulio = 0;
	forms.FrmCuentasContables.saldoagosto = 0;
	forms.FrmCuentasContables.saldoseptiembre = 0;
	forms.FrmCuentasContables.saldooctubre = 0;
	forms.FrmCuentasContables.saldonoviembre = 0;
	forms.FrmCuentasContables.saldodiciembre = 0;
	forms.FrmCuentasContables.saldoejercicioanterior = 0;
	forms.FrmCuentasContables.totaldebe = 0;
	forms.FrmCuentasContables.totalhaber = 0;
	forms.FrmCuentasContables.saldo = 0;
	
	databaseManager.saveData()
}

/**
 * 
 * @param {String} CC
 * 
 * 
 *
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"1C628553-049D-412E-B1D1-0F3B49991DD3"}
 */
function ControlNivelDesglose(CC)
{
	
	if(CC.length > 4)
	{
		var CC8 = CC;
		var CC4 = CC.substr(0, 4);
		var CC3 = CC.substr(0, 3);
		var CC2 = CC.substr(0, 2);
		var CC1 = CC.substr(0, 1);
		var Cuentas = new Array(CC8,CC4,CC3,CC2,CC1);
	}
	else if(CC.length == 4)
	{
		CC4 = CC.substr(0, 4);
		CC3 = CC.substr(0, 3);
		CC2 = CC.substr(0, 2);
		CC1 = CC.substr(0, 1);
		Cuentas = new Array(CC4,CC3,CC2,CC1);
	}
	else if(CC.length == 3)
	{
		CC3 = CC.substr(0, 3);
		CC2 = CC.substr(0, 2);
		CC1 = CC.substr(0, 1);
		Cuentas = new Array(CC3,CC2,CC1);
	}
	else if(CC.length == 2)
	{
		CC2 = CC.substr(0, 2);
		CC1 = CC.substr(0, 1);
		Cuentas = new Array(CC2,CC1);
	}
	else if(CC.length == 1)
	{
		CC1 = CC.substr(0, 1);
		Cuentas = new Array(CC1);
	}
	//var Cuentas = new Array(CC8,CC4,CC3,CC2,CC1);
	for(var i=0;i<Cuentas.length;i++)
	{
		var query = "select ID from ctbCuentaContable where IdEjercicio = '"+globals.Empresa+
				"' AND CuentaContable = '"+Cuentas[i]+"'";
		var dataset = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 1); 
		var uuid = dataset.getValue(1,1);
		if(uuid == null && Cuentas[i] != CC)
		{
			CrearCuenta(Cuentas[i],null)
		}
		else
		{
			query = "SELECT COUNT(*) FROM ctbCuentaContable WHERE IdEjercicio = '"+globals.Empresa+
			"' and CuentaContable LIKE '"+Cuentas[i]+"'+'%'";
			dataset = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 1); 
			var cont = dataset.getValue(1,1)
			var vSet = databaseManager.getFoundSet(globals.conexCONTA, 'ctbcuentacontable')  
			  
			//load record by ID in foundset  
			vSet.loadRecords(databaseManager.convertToDataSet([uuid]))  
			var record = vSet.getRecord(vSet.getSelectedIndex())
			if(record)
			{
				if(vSet.desccuentacontable == null || vSet.desccuentacontable == '')
				{
					query = "select desccuentacontable from [ctbCuentaContable] where IdEjercicio = '"+globals.Empresa+
					"' and [CuentaContable] like '"+CC+"'"+"+'%' and len(cuentacontable) > "+CC.length+
					" and desccuentacontable is not null"
					var dataset2 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 1)
					var desccc = dataset2.getValue(1,1)
					
					vSet.desccuentacontable = desccc;
				}
				if(cont==1)
				{
					vSet.clavedesglose = 0;
				}
				else
				{
					vSet.clavedesglose = 1;
				}
				if(vSet.debeenero == null) vSet.debeenero = 0;
				if(vSet.debefebrero == null) vSet.debefebrero = 0;
				if(vSet.debemarzo == null) vSet.debemarzo = 0;
				if(vSet.debeabril == null) vSet.debeabril = 0;
				if(vSet.debemayo == null) vSet.debemayo = 0;
				if(vSet.debejunio == null) vSet.debejunio = 0;
				if(vSet.debejulio == null) vSet.debejulio = 0;
				if(vSet.debeagosto == null) vSet.debeagosto = 0;
				if(vSet.debeseptiembre == null) vSet.debeseptiembre = 0;
				if(vSet.debeoctubre == null) vSet.debeoctubre = 0;
				if(vSet.debenoviembre == null) vSet.debenoviembre = 0;
				if(vSet.debediciembre == null) vSet.debediciembre = 0;
				if(vSet.haberenero == null) vSet.haberenero = 0;
				if(vSet.haberfebrero == null) vSet.haberfebrero = 0;
				if(vSet.habermarzo == null) vSet.habermarzo = 0;
				if(vSet.haberabril == null) vSet.haberabril = 0;
				if(vSet.habermayo == null) vSet.habermayo = 0;
				if(vSet.haberjunio == null) vSet.haberjunio = 0;
				if(vSet.haberjulio == null) vSet.haberjulio = 0;
				if(vSet.haberagosto == null) vSet.haberagosto = 0;
				if(vSet.haberseptiembre == null) vSet.haberseptiembre = 0;
				if(vSet.haberoctubre == null) vSet.haberoctubre = 0;
				if(vSet.habernoviembre == null) vSet.habernoviembre = 0;
				if(vSet.haberdiciembre == null) vSet.haberdiciembre = 0;
				if(vSet.previsionenero == null) vSet.previsionenero = 0;
				if(vSet.previsionfebrero == null) vSet.previsionfebrero = 0;
				if(vSet.previsionmarzo == null) vSet.previsionmarzo = 0;
				if(vSet.previsionabril == null) vSet.previsionabril = 0;
				if(vSet.previsionmayo == null) vSet.previsionmayo = 0;
				if(vSet.previsionjunio == null) vSet.previsionjunio = 0;
				if(vSet.previsionjulio == null) vSet.previsionjulio = 0;
				if(vSet.previsionagosto == null) vSet.previsionagosto = 0;
				if(vSet.previsionseptiembre == null) vSet.previsionseptiembre = 0;
				if(vSet.previsionoctubre == null) vSet.previsionoctubre = 0;
				if(vSet.previsionnoviembre == null) vSet.previsionnoviembre = 0;
				if(vSet.previsiondiciembre == null) vSet.previsiondiciembre = 0;	
				if(vSet.previsionanual == null) vSet.previsionanual = 0;	
				if(vSet.saldoenero == null) vSet.saldoenero = 0;
				if(vSet.saldofebrero == null) vSet.saldofebrero = 0;
				if(vSet.saldomarzo == null) vSet.saldomarzo = 0;
				if(vSet.saldoabril == null) vSet.saldoabril = 0;
				if(vSet.saldomayo == null) vSet.saldomayo = 0;
				if(vSet.saldojunio == null) vSet.saldojunio = 0;
				if(vSet.saldojulio == null) vSet.saldojulio = 0;
				if(vSet.saldoagosto == null) vSet.saldoagosto = 0;
				if(vSet.saldoseptiembre == null) vSet.saldoseptiembre = 0;
				if(vSet.saldooctubre == null) vSet.saldooctubre = 0;
				if(vSet.saldonoviembre == null) vSet.saldonoviembre = 0;
				if(vSet.saldodiciembre == null) vSet.saldodiciembre = 0;
				if(vSet.saldoejercicioanterior == null) vSet.saldoejercicioanterior = 0;	
				if(vSet.totaldebe == null) vSet.totaldebe = 0;
				if(vSet.totalhaber == null) vSet.totalhaber = 0;
				if(vSet.saldo == null) vSet.saldo = 0;
				if(i == (Cuentas.length - 1)) databaseManager.saveData()
				
			}
		}
	}
	databaseManager.refreshRecordFromDatabase(forms.FrmCuentasContables.foundset,-1)
	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"17F5BFE8-CE18-40C2-8298-06F79939CA6B"}
 */
function onDataChangeCIF() {
	// TODO Auto-generated method stub
	var ok = true
	//if(cif) ok = globals.validateCIF(cif)
	if(ok == false){
		elements.fld_cif.requestFocus()
		elements.fld_cif.selectAll()
		globals.GCshowErrorDialog("CIF no válido!!!.\nVerifíquelo.", null, null, null, null, null)
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
 * @properties={typeid:24,uuid:"FD64CCC0-0671-423D-9463-1DB61B98FA38"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Bancos';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de este Bancos';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_1.png');
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			menu.show(event.getSource(),0,40);				
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
  *
 *
 * @properties={typeid:24,uuid:"65A66E65-C904-4EBA-AA96-A475FDCF785C"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Bancos'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'BAN'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de este Bancos'.toUpperCase():
		DREF = forms.FrmBancosCuentasCargoGC.codigoctabanco.toString();
		HREF = forms.FrmBancosCuentasCargoGC.codigoctabanco.toString();
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'BAN'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}
