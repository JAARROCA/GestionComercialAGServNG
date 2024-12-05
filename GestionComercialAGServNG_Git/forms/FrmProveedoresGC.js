/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"A1AE4E5A-CB5D-465D-AA6D-4064776C8E45",variableType:-4}
 */
var editedRecs;

/**
 * @properties={typeid:24,uuid:"1C5A28AD-3E44-4AE9-AB30-0DA2DAF7A481"}
 */
function btn_save() {
	
	var ok = true;
	//if(cif) ok = globals.validateCIFGC(cif)
	if(!codpro)
	{
		globals.GCshowErrorDialog('Falta introducir el código del proveedor.',null,'Aceptar',null,null,null)
	}
	else if(!descproveedor)
	{
		globals.GCshowErrorDialog('Falta introducir el nombre del proveedor.',null,'Aceptar',null,null,null)
	}
	else if(!direccion)
	{
		globals.GCshowErrorDialog('Falta introducir la dirección del proveedor.',null,'Aceptar',null,null,null)
	}
	else if(!cif)
	{
		globals.GCshowErrorDialog('Falta introducir el CIF del proveedor.',null,'Aceptar',null,null,null)
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
			var query = "select [CodPro] from [tbMaestroProveedores] where  [CodPro] = " + codpro;
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n != null)
			{
				var methd = 'forms.FrmProveedoresGC.foco()';
				globals.GCshowErrorDialog('Código de Proveedor duplicado!',methd,'Aceptar',null,null,null)
			}
			else
			{
				query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var Empresa = dataset.getValue(1,1);
				var con = dataset.getValue(1,2);
				editedRecs = databaseManager.getEditedRecords( foundset)
				
				/*var rows = editedRecs.length;				
				for(var i=0;i<rows;i++)
				{
					var country = editedRecs[i]['pais'];
					if(country && country != 'ES')
					{
						if(editedRecs[i]['porciva'] && editedRecs[i]['porciva'] != 0) editedRecs[i]['porciva'] = 0;
					}
				}
				*/
				var provid = id;
				if(editedRecs.length > 0)
				{
					for (var x=0;x<editedRecs.length;x++)
					{
						var cod = editedRecs[x]['codpro'];
						dataset = editedRecs[x].getChangedData();
						var rows = dataset.getMaxRowIndex()
						for( var i = 1 ; i <= rows ; i++ )
						{
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
							var record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
				            record.tipo = 'P' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
				var result = foundset.selectRecord(provid)
				var fsCount = databaseManager.getFoundSetCount(foundset);
				while(result==false)
				{
					if(fsCount == foundset.getSize())
					{
					return;
					}
				foundset.setSelectedIndex(foundset.getSize());
				result = foundset.selectRecord(provid);
				}
				
			
				globals.GCRegistroNuevo = null
				elements.idcodigo.bgcolor = '#f0f0f0'
				elements.idcodigo.readOnly = true
				elements.idcodigo.visible = false
				elements.lblcodpro.visible = true
				elements.lbl_codrequired.visible = false
				elements.btn_sendEmail.visible = true
				elements.btn_web.visible = true
				elements.BtnFormaPago.visible = false
				elements.BtnPais.visible = false
				elements.btnDocumentacion.visible = true
				elements.btn_histmodificaciones.visible = true
				elements.btn_comprcifdni.visible = true
				//elements.BtnSkype.visible = true
				
				//do sort and hilight the newly added (edited) record
				
			
				if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
				if(editedRecs.length > 0 && Empresa && con)
				{
					methd = 'forms.FrmProveedoresGC.ActualizarConta(event)'
					globals.GCshowQuestionDialog("¿Desea que los datos modificados se actualicen también en la contabilidad '"+Empresa+"'?",methd,'No','Si',null,null)
				}				
			}
		}
		else
		{
			query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			Empresa = dataset.getValue(1,1);
			con = dataset.getValue(1,2);
			editedRecs = databaseManager.getEditedRecords( foundset)
			
			/*rows = editedRecs.length;				
			for(i=0;i<rows;i++)
			{
				country = editedRecs[i]['pais'];
				if(country && country != 'ES')
				{
					if(editedRecs[i]['porciva'] && editedRecs[i]['porciva'] != 0) editedRecs[i]['porciva'] = 0;
				}
			}
			*/
			provid = id;
			if(editedRecs.length > 0)
			{
				for (x=0;x<editedRecs.length;x++)
				{
					cod = editedRecs[x]['codpro'];
					dataset = editedRecs[x].getChangedData();
					rows = dataset.getMaxRowIndex()
					for( i = 1 ; i <= rows ; i++ )
					{
						vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
			            record.tipo = 'P' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
			result = foundset.selectRecord(provid)
			fsCount = databaseManager.getFoundSetCount(foundset);
			while(result==false)
			{
				if(fsCount == foundset.getSize())
				{
				return;
				}
			foundset.setSelectedIndex(foundset.getSize());
			result = foundset.selectRecord(provid);
			}
			
		
			globals.GCRegistroNuevo = null
			elements.idcodigo.bgcolor = '#f0f0f0'
			elements.idcodigo.readOnly = true
			elements.idcodigo.visible = false
			elements.lblcodpro.visible = true
			elements.lbl_codrequired.visible = false
			elements.btn_sendEmail.visible = true
			elements.btn_web.visible = true
			elements.BtnFormaPago.visible = false
			elements.BtnPais.visible = false
			elements.btnDocumentacion.visible = true
			elements.btn_histmodificaciones.visible = true
			elements.btn_comprcifdni.visible = true
			//elements.BtnSkype.visible = true
			
			//do sort and hilight the newly added (edited) record
			
		
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
			if(editedRecs.length > 0 && Empresa && con)
			{
				methd = 'forms.FrmProveedoresGC.ActualizarConta(event)'
				globals.GCshowQuestionDialog("¿Desea que los datos modificados se actualicen también en la contabilidad '"+Empresa+"'?",methd,'No','Si',null,null)
			}			
		}
	}
}

/**
 * @properties={typeid:24,uuid:"A7484156-25F7-478B-98F1-00126A1172F4"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	
	globals.GCRegistroNuevo = null
	elements.idcodigo.bgcolor = '#f0f0f0'
	elements.idcodigo.readOnly = true
	elements.idcodigo.visible = false
	elements.lblcodpro.visible = true
	elements.lbl_codrequired.visible = false
	elements.btn_sendEmail.visible = true
	elements.btn_web.visible = true
	elements.BtnFormaPago.visible = false
	elements.BtnPais.visible = false
	elements.btnDocumentacion.visible = true
	elements.btn_histmodificaciones.visible = true
	elements.btn_comprcifdni.visible = true
	//elements.BtnSkype.visible = true
	
}

/**
 * @properties={typeid:24,uuid:"0C0C8DEA-E253-4DF0-B1BB-FC9C530F79D5"}
 */
function doEdit()
{
	_super.doEdit()
	
	elements.btn_sendEmail.visible = false
	elements.btn_web.visible = false
	elements.BtnFormaPago.visible = true
	elements.BtnPais.visible = true
	//elements.BtnSkype.visible = false
	elements.idcodigo.bgcolor = '#FFFF00';
	elements.fld_nombre.bgcolor = '#FFFF00';
	elements.fld_direccion.bgcolor = '#FFFF00';
	elements.fld_cif.bgcolor = '#FFFF00';
	elements.fld_codigopaisue.bgcolor = '#FFFF00';
	elements.btnDocumentacion.visible = false
	elements.btn_histmodificaciones.visible = false
	elements.btn_comprcifdni.visible = false
	
}

/**
 * @properties={typeid:24,uuid:"F3EA46EE-5C5E-4898-B740-BF3E48BBA90C"}
 */
function hide_btn_reset_fields()
{
	_super.hide_btn_reset_fields()
	
}

/**
 * @properties={typeid:24,uuid:"0572A557-7EF2-49BB-BC56-4DC886D2E987"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_Proveedor = id
	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
			globals.GCRegistroNuevo = null
			doEdit()
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
 * @properties={typeid:24,uuid:"40D51289-1285-4794-BA2F-E988492099E0"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onShow(firstShow,event)
{
	if(!globals.GClogin_usuario) globals.btn_SalirGC(event)
	 btn_cancel();
	/*var query = "SELECT [ID] FROM [cMaestroDatosFiscales] "+
				"WHERE IdEjercicio = '"+globals.Empresa+"' AND [SWIFT] IS NULL AND [CodigoBanco] IS NOT NULL";
	var ds = controller.getDataSource().split('/');
	var dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 99999999999)
	var rows = dataset.getMaxRowIndex();
	for(var i=1;i<=rows;i++)
	{
		var uuid = dataset.getValue(i,1)
		forms.FrmDatosFiscales.foundset.loadAllRecords();
		var result = forms.FrmDatosFiscales.foundset.selectRecord(uuid)
		var fsCount = databaseManager.getFoundSetCount(forms.FrmDatosFiscales.foundset);
		while(result==false)
		{
			if(fsCount == forms.FrmDatosFiscales.foundset.getSize())
			{
			return;
			}
			forms.FrmDatosFiscales.foundset.setSelectedIndex(forms.FrmDatosFiscales.foundset.getSize());
			result = forms.FrmDatosFiscales.foundset.selectRecord(uuid);
		}
	
		forms.FrmDatosFiscales.swift = getSWIFT(codigobanco);
		databaseManager.saveData(foundset);
	}*/
	onLoad(event)
	//make read only
	globals.GCRegistroNuevo = null
	foundset.loadAllRecords()
	controller.readOnly = true
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)
	elements.BtnFormaPago.visible = false
	elements.BtnPais.visible = false
	//elements.BtnSkype.visible = true
	elements.idcodigo.visible = false
	elements.lblcodpro.visible = true
	
	//hide save/cancel btsn
	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
	elements.btn_sendEmail.visible = true
	elements.btn_web.visible = true
	
	
	globals.GCenableBgElements();
	
	
	globals.GCnav_search = null
	globals.GCsetupRecordStatus();

	if(globals.GCFormulario)	
	{
		if(globals.GCFormulario == 'FrmFacturasComprasGC')
		{
			if(forms.FrmFacturasComprasGC.pro_cfca)
			{
				var query = "select [Id] from [tbmaestroproveedores] where [codpro] ="+ forms.FrmFacturasComprasGC.pro_cfca;
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var uuid = dataset.getValue(1, 1)
				foundset.loadAllRecords()
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
		else if(globals.GCFormulario == 'FrmAlbaranComprasGC')
		{
			if(forms.FrmAlbaranComprasGC.pro_ap)
			{
				query = "select [Id] from [tbmaestroproveedores] where [codpro] ="+ forms.FrmAlbaranComprasGC.pro_ap;
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				uuid = dataset.getValue(1, 1)
				foundset.loadAllRecords()
				result = foundset.selectRecord(uuid)
				fsCount = databaseManager.getFoundSetCount(foundset);
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
		else if(globals.GCFormulario == 'FrmPetOfertaComprasGC')
		{
			if(forms.FrmPetOfertaComprasGC.codpro)
			{
				query = "select [Id] from [tbmaestroproveedores] where [codpro] ="+ forms.FrmPetOfertaComprasGC.codpro;
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				uuid = dataset.getValue(1, 1)
				foundset.loadAllRecords()
				result = foundset.selectRecord(uuid)
				fsCount = databaseManager.getFoundSetCount(foundset);
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
		else if(globals.GCFormulario == 'FrmPedidosComprasGC')
		{
			if(forms.FrmPedidosComprasGC.proveedor)
			{
				query = "select [Id] from [tbmaestroproveedores] where [codpro] ="+ forms.FrmPedidosComprasGC.proveedor;
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				uuid = dataset.getValue(1, 1)
				foundset.loadAllRecords()
				result = foundset.selectRecord(uuid)
				fsCount = databaseManager.getFoundSetCount(foundset);
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

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"456D0281-69BD-4159-9361-59BCD256FD86"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	plugins.window.createShortcut('control shift M', handle_shortCut);
	//plugins.window.createShortcut('control D', handle_shortCut);
	btn_tabContactos()
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @properties={typeid:24,uuid:"C14BAEFE-65F2-41B1-827D-DB82F842F8D7"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Proveedores_list();
}

/**
 * @properties={typeid:24,uuid:"60AD2619-5C3F-40AD-B7F5-05CCD2DD0EE8"}
 * @AllowToRunInFind
 */
function rpt_Proveedores_list()
{
	globals.GCshowDialogListadoProveedores('Listado de Proveedores',1,null,null,null,null,null,null,null,null)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB23256E-9744-4CFE-A692-6FA76D24AFEC"}
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
 * @properties={typeid:24,uuid:"640C67F2-2E1D-4331-8436-6F457B069A53"}
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
 * @properties={typeid:24,uuid:"06269316-E9A5-4DB4-A568-612AF8EAA0D7"}
 */
function onActionpob(event) {
	// TODO Auto-generated method stub
	elements.fld_cif.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"56EFB4B3-B96B-4D18-8393-68D7D7AECD7B"}
 */
function onActionpro(event) {
	// TODO Auto-generated method stub
	elements.fld_poblacion.requestFocus()
	
}

/**
 * @properties={typeid:24,uuid:"343A00BA-CFD5-44A8-BB40-9D845FEADAEA"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	pais = 'ES'
	porciva = 21;
	globals.GCRegistroNuevo = 1
	elements.idcodigo.bgcolor = '#feffe4'
	elements.idcodigo.readOnly = false
	elements.idcodigo.visible = true
	elements.lblcodpro.visible = false
	elements.lbl_codrequired.visible = true
	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"9541D43C-EC9F-460D-8D03-82DBE992436B"}
 */
function onDataChangePais() {
	if(pais)
	{
		if(pais != 'ES')
		{
			porciva = 0;
		}
		else if(codpostal)
		{
			onDataChangeCP()
		}
		else
		{
			porciva = 21;
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8EA59381-EDAF-4AB9-A5E4-10E1DE40D5F8"}
 */
function onActiondir(event) {
	// TODO Auto-generated method stub
	elements.fld_codpostal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8AD74460-BA82-4312-81D9-C5C2A7B26ED7"}
 */
function onActioncif(event) {
	// TODO Auto-generated method stub
	elements.fld_formapago.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"EEECED67-B996-4431-9CD0-CD8FB586124D"}
 */
function onActionformapago(event) {
	// TODO Auto-generated method stub
	elements.fld_telf1.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E9CFFE34-9FBE-4A18-B654-EA5229AA665A"}
 */
function onActionfax(event) {
	// TODO Auto-generated method stub
	elements.fld_email.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F7A04FFA-7798-4E47-9B75-D9C87B11719E"}
 */
function onActioncontacto(event) {
	// TODO Auto-generated method stub
	elements.fld_cuentacontable.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D68B6FB6-D760-454B-84D6-952296E542D7"}
 */
function onActioncodpostal(event) {
	// TODO Auto-generated method stub
	elements.fld_provincia.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"49A3D479-BA8A-496D-A320-E0081FF93207"}
 */
function onActiontelf1(event) {
	// TODO Auto-generated method stub
	elements.fld_telf2.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"522255C3-D059-4279-9A44-3E8297AD5ED3"}
 */
function onActiontelf2(event) {
	// TODO Auto-generated method stub
	elements.fld_fax.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ED68C166-D690-411A-98D0-787895353B8A"}
 */
function onActionmail(event) {
	// TODO Auto-generated method stub
	elements.fld_emailcc.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"C5A12EAD-6076-4454-B39D-8F1F29CD1731"}
 */
function onActionmailcc(event) {
	// TODO Auto-generated method stub
	elements.fld_contacto.requestFocus()
}

/**
 *
 * @properties={typeid:24,uuid:"BC6FDCEE-4BA1-434B-ABD1-C85D27CFCEEA"}
 */
function btn_sendEmail()
{
	if(email) 
	{		
		if(utils.stringPatternCount(email,",") == 0
				&& utils.stringPatternCount(email," ") == 0
				&& utils.stringPatternCount(email,"@") == 1
				&& utils.stringPatternCount(email,".") >= 1)
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
							globals.GCFormulario = 'FrmProveedores'
							globals.GCshowDialogEnvioMail('Envio EMail',1,null,null,null,null,null,null,null,null)
						}
					}
				}
				else
				{
					globals.GCshowInfoDialog("Debes introducir una dirección de correo válida.", null,'Aceptar', null, null, null);			
				}
			
		
	}
	// create a file object
	
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"6F811733-D535-48FC-9C7D-467EFE24CCDE"}
 */
function validate_beforeDelete()
{
	var query = "SELECT COUNT(*) FROM tbfacturacompracabecera WHERE pro_cfca = "+codpro;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var cont = dataset.getValue(1,1)
	
	var ped = gctbmaestroproveedores_to_tbpedidocompracabecera.getSize()
	var alb = gctbmaestroproveedores_to_albapro.getSize()
	var fra = gctbmaestroproveedores_to_tbfacturacompracabecera.getSize()
	//var cont = companies_to_contacts.getSize()

	if(cont > 0 || ped > 0 || alb > 0 || fra > 0)
	{
		globals.GCshowErrorDialog("No se puede borrar un Proveedor que se utiliza en varios documentos.", null,'Aceptar', null, null, null);
		return 1
	}
	else
	{
		return 0
	}
}

/**
 * @properties={typeid:24,uuid:"DF739D57-4D72-4241-9877-FA03869B8FC5"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'P' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = codpro;
		record.fecha = new Date();
		record.datomodif = descproveedor;
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FBBE803E-0F3E-4AAB-841A-F630BD2E6C61"}
 */
function onActionBtnFormaPago(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmProveedores'
	//globals.GCshowDialogFormasPago('Formas de Pago', 1, null, null, true, null, null, null, null, null);
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
 *
 * @properties={typeid:24,uuid:"E0F32F7D-BE26-4C02-8D00-B37A9BB4BB8A"}
 */
function onActionBtnPaises(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmProveedores'
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
* @param {String} myString
*
* @return {String}
 *
* @properties={typeid:24,uuid:"85A5AAE0-6AC2-4440-9598-2B9407BF9EC8"}
*/
function trim(myString)
{
	return myString.replace(/^\s+/g,'').replace(/\s+$/g,'');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2AE49FBF-B8A2-47EC-ABC3-964EDC63FE34"}
 */
function onActionPais(event) {
	// TODO Auto-generated method stub
	
elements.fld_cif.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"D374A267-6240-4114-8437-9BF9151DED8A"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [CodPro] from [tbMaestroProveedores] where  [CodPro] = " + codpro;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		var methd = 'forms.FrmProveedoresGC.foco()';
		globals.GCshowErrorDialog('Código de Proveedor duplicado!',methd,'Aceptar',null,null,null)
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"AE6D2E82-88F4-495D-BA06-B0A7B518F68C"}
 */
function foco() {
	elements.idcodigo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"095DA538-96B1-4FCF-B1EB-40188C4726E9"}
 */
function onActionnumproveedor(event) {
	// TODO Auto-generated method stub
	elements.fld_cuentacontable.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F1468D30-385E-49C4-96B0-506B16F0BF98"}
 */
function onActionnumbuzonedi(event) {
	// TODO Auto-generated method stub
	elements.fld_tipoiva.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B95DE915-1F3A-4C43-AA9F-DC695EE2CD52"}
 */
function onActiontipoiva(event) {
	// TODO Auto-generated method stub
	elements.fld_porcirpf.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"92F37C62-F04A-4693-BE1C-9F25B6F41BE0"}
 */
function onActioncc(event) {
	// TODO Auto-generated method stub
	elements.fld_ccgastos.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DE043649-42E7-4755-8B97-52AAAAB0547B"}
 */
function onActionccgastos(event) {
	// TODO Auto-generated method stub
	elements.fld_tipoiva.requestFocus()
}

/**
*
*
 *
 * @properties={typeid:24,uuid:"4942747F-8CD9-4FA1-8930-B9C7DD49BAE8"}
 */
function btn_tabContactos()
{
	//if(!globals.GCisEditing()) //if there is a transaction - we're editing something
	//{
		tabs_dimAll()
		elements.lblOtrosContactos.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 1)
		{
			elements.tabs_mainPanel.tabIndex = 1
		}
	//}
}

/**
*
*
 *
 *
 * @properties={typeid:24,uuid:"336FA105-A444-4288-8933-B49F36F87352"}
 */
function btn_tabNotas()
{
	//if(!globals.GCisEditing()) //if there is a transaction - we're editing something
	//{
		tabs_dimAll()
		elements.lblNotas.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 2)
		{
			elements.tabs_mainPanel.tabIndex = 2
		}
	//}
}

/**
*
*
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"8D32B7F2-34F2-4175-8712-BF2A6ABE21B7"}
 */
function btn_tabPrecioMaterial()
{
	//if(!globals.GCisEditing()) //if there is a transaction - we're editing something
	//{
		tabs_dimAll()
		elements.lblPrecioMaterial.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 3)
		{
			elements.tabs_mainPanel.tabIndex = 3
		}
	//}
}

/**
*
*
 *
 *
 *
 * @properties={typeid:24,uuid:"CA336DF1-34FB-40A7-A732-A7AB53B33127"}
 */
function btn_tabFacturas()
{
	//if(!globals.GCisEditing()) //if there is a transaction - we're editing something
	//{
		tabs_dimAll()
		elements.lblFacturas.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 4)
		{
			elements.tabs_mainPanel.tabIndex = 4
		}
	//}
}

/**
*
 * @properties={typeid:24,uuid:"7AF75EA1-F7AA-4C78-9F61-E05DEBCD150E"}
 */
function tabs_dimAll()
{
	elements.lblOtrosContactos.bgcolor = '#606060'
	elements.lblNotas.bgcolor = '#606060'
	elements.lblFacturas.bgcolor = '#606060'
	elements.lblPrecioMaterial.bgcolor = '#606060'
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"03AB63FE-5813-404E-8AB4-116A0664E231"}
 */
function btngooglemaps(event) {
	// TODO Auto-generated method stub
	if(direccion)
	{
		var dir = utils.stringReplace(direccion,' ','+')
		var pob = utils.stringReplace(poblacion,' ','+')
		application.showURL( 'http://maps.google.com/maps?q=' + dir + ','+pob,'_blank');
	}
}

/**
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"74F854EE-EEFD-4B94-A18B-720332A3F6AD"}
 */
function startCallUsingSkype()

{

/*

          method name : startCallUsingSkype

          usage: startCallUsingSkype(countryCode, phoneNumber

                                      , [isSkypeName])

 

          input: countryCode: text representing valid country code,

                                      prefixed by sign '+'.Ex. +91 - For India.

                      phoneNumber: integer representing the phone number to

                                           make a call.

                      isSkypeName (opt):  boolean value indicating whether

                                                   want to call a skype name. Calling to

                                                   a skype name does not require a country code.

 

          output: The script will establish a call to the specified number

                     or the specified skype name, if the third argument,

                     isSkypeName, has been passed as true, from your servoy

                     solution. The script can be used in Windows and Mac to

                     make call from your Servoy Solution.

     note:

 

          Change history:

          04/04/09             Arup Ranjan Sahoo            Created method

 *********************************************************************/

         

          var countryCode = /*arguments[0]*/pais;

          var phoneNumber = /*arguments[1]*/telf1;

          var isSkypeName = /*arguments[2] != null?arguments[2]:*/false;

         

          //Check for OS Type

          if(utils.stringMiddle(application.getOSName(),1,7) == "Windows") 
          {
                   //Windows Detected
                   //Check for Client Type
                   if(application.getApplicationType() == 2 || application.getApplicationType() == 3
                      || application.getApplicationType() == 4 ) 
                   {
                	   //Make a Skype Call for Rich Client in Windows
                       //Prepare a Call String to call the Number Using Skype
                             var callString = '';
                             if(isSkypeName)
                             {
                                      callString = '/callto:' + phoneNumber;
                             } 
                             else 
                             {
                                      callString = '/callto:' + countryCode + phoneNumber;
                             }

                            

                             //Get the Path for Skype Executable

                             //Default Path is C:\Documents and Settings

                             //\Program Files\Skype\Phone\Skype.exe

                             var pathToSkype = plugins.file.getHomeDirectory().getAbsolutePath()

                             pathToSkype = pathToSkype.substring(0
                                      ,pathToSkype.indexOf("Documents and Settings"))
                                                          + "Program Files\\Skype\\Phone\\Skype.exe";
                             //Call the number Using Skype
                             application.executeProgram(pathToSkype, callString)
                   }
                   else if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
                   {
                             //Make a Skype Call for WebClient in Windows

                             //Call the number Using Skype

                             if(isSkypeName)
                             {
                                      application.showURL('skype:'
                                                + phoneNumber +'?call','_self');
                             } 
                             else 
                             {
                                      application.showURL('skype:'
                                                + countryCode + phoneNumber +'?call','_self');
                             }
                   }
          } 
          else if(utils.stringMiddle(application.getOSName(),1,3) == "Mac") 
          {
                   //Mac OS Detected
                   //Check for Client Type

                   if(application.getApplicationType() == 2 || application.getApplicationType() == 3
                                      || application.getApplicationType() == 4 ) 
                   {
                             //Make a Skype Call for Rich Client in Mac

                             //Prepare a Call String to call the Number Using Skype
                             callString = '';

                             if(isSkypeName)
                             {
                                      callString = 'skype:'
                                                + phoneNumber + '?call';
                             }
                             else 
                             {
                                      callString = 'skype:'
                                                + countryCode + phoneNumber + '?call';
                             }

                            

                             //Call the number Using Skype

                             application.executeProgram("open", callString);

                   } 
                   else if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
                   {
                             //Make a Skype Call for WebClient in Windows

                             //Call the number Using Skype

                             if(isSkypeName)
                             {
                                      application.showURL('skype:'
                                                + phoneNumber +'?call','_self');
                             } 
                             else 
                             {
                                      application.showURL('skype:'
                                                + countryCode + phoneNumber +'?call','_self');
                             }
                   }
          }
}

/**
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"56EBCA26-6EDE-4FFC-A823-A24DC1B67949"}
 */
function startChatUsingSkype()

{

/*

          method name : startChatUsingSkype

          usage: startChatUsingSkype(skypeName)

 

          input: skypeName: text representing the Skype Name to start

                                     the Chat with.

 

          output: The script will start a chart with the Skype Name

                     passed as an argument to the method. The script

                     can be used in Windows and Mac to start the Skype Chat.

      note:

 

          Change history:

          04/04/09         Arup Ranjan Sahoo               Created method

 *******************************************************************/

         

          var skypeName = arguments[0];

         

          //Check for OS Type

          if(utils.stringMiddle(application.getOSName(),1,7) == "Windows") 
          {
                   //Windows Detected

                   //Check for Client Type

                   if(application.getApplicationType() == 2 || application.getApplicationType() == 3
                                      || application.getApplicationType() == 4 ) 
                   {
                             //Start a Skype Chat for Rich Client in Windows

                             //Prepare a chat String to chat with the Skype Name

                             var chatString = 'skype:'+ skypeName +'?chat';

                             //Start the Chat

                             application.executeProgram('rundll32'
                                      , 'url.dll,FileProtocolHandler',chatString);
                   } 
                   else if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
                   {
                             //Start a Skype Chat for WebClient in Windows                       

                             application.showURL('skype:'
                                      + skypeName +'?chat','_self');
                   }
          } 
          else if(utils.stringMiddle(application.getOSName(),1,3) == "Mac") 
          {
                   //Mac OS Detected

                   //Check for Client Type

                   if(application.getApplicationType() == 2 || application.getApplicationType() == 3
                                      || application.getApplicationType() == 4 ) 
                   {
                             //Start a Skype Chat for Rich Client in Mac

                             //Prepare a chat String to chat with the Skype Name

                             var callString = 'skype:'
                                      + skypeName + '?chat';

                            

                             //Start the Chat

                             application.executeProgram("open", callString);
                   } 
                   else if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
                   {
                             //Start a Skype Chat for Web Client in Mac

                             application.showURL('skype:'
                                      + skypeName +'?chat','_self');
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
 * @properties={typeid:24,uuid:"E105DB4A-D509-4632-BAE4-70588E9F31AA"}
 */
function btnSkype(event) {
	// TODO Auto-generated method stub
	var popUpObj = plugins.window.createPopupMenu();
	popUpObj.addMenuItem("Llamada Skype", globals.MenuSkype, "media:///SkypeLlamadas.GIF");
	popUpObj.addMenuItem("Chat Skype", globals.MenuSkype, "media:///SkypeChat.GIF");
	popUpObj.addSeparator();
	
	if (event.getSource()) {
		// display the popup over the component which is the source of the event
		popUpObj.show(event.getSource(),25,0);				
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 * @properties={typeid:24,uuid:"F229F137-82BA-4177-A3E1-278EB4959063"}
 */
function ActualizarConta(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		var con = dataset.getValue(1,2);
		//var editedRecs = databaseManager.getEditedRecords( foundset)
		for (var x=0;x<editedRecs.length;x++)
		{
			
			var cod = editedRecs[x]['codpro'];
			query = 'select cuentacontable,descproveedor,ccgastos,porciva from tbmaestroproveedores where codpro = '+cod;
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var cc = new String()
			//cc = editedRecs[x]['cuentacontable'];
			//var desccc = editedRecs[x]['descproveedor']
			cc = dataset.getValue(1,1)
			//if(!cc) cc = '400'+ PreparaLinea2(cod, 5, 'Right');
			var desccc = dataset.getValue(1,2)
			var ccgastosprov = dataset.getValue(1,3)			
			var piva = dataset.getValue(1,4)			
			if(cc)
			{
				var CC8 = cc;
				var CC4 = cc.substr(0, 4);
				var CC3 = cc.substr(0, 3);
				var CC2 = cc.substr(0, 2);
				var CC1 = cc.substr(0, 1);
				var Cuentas = new Array(CC8,CC4,CC3,CC2,CC1);
				for(var i=0;i<Cuentas.length;i++)
				{
					query = "select ID from ctbcuentacontable "+ 
						"where [IdEjercicio] = '"+Empresa+
						"' AND [CuentaContable] = '"+Cuentas[i]+"'";
					dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
					var uuid = dataset.getValue(1,1)
					if(uuid == null)
					{
						CrearCuenta(Cuentas[i],desccc,con,Empresa,ccgastosprov,piva)
					}
					else if(Cuentas[i] == cc)
					{
						var vSet2 = databaseManager.getFoundSet(con, 'ctbcuentacontable') 
						vSet2.loadRecords(databaseManager.convertToDataSet([uuid])) 
						var record2 = vSet2.getSelectedRecord();
						if(record2['desccuentacontable'] != editedRecs[x]['descproveedor']) record2['desccuentacontable'] = editedRecs[x]['descproveedor'];
						if(record2['contrapartida'] != editedRecs[x]['ccgastos']) record2['contrapartida'] = editedRecs[x]['ccgastos'];
						if(record2['tipoiva'] != editedRecs[x]['porciva']) record2['tipoiva'] = editedRecs[x]['porciva'];
						if(record2.getChangedData().getMaxRowIndex() > 0) databaseManager.saveData(record2)
					}
				}
				
				query = "select ID from cmaestrodatosfiscales where idejercicio = '"+Empresa+"' and "+
						"idcodigo ='"+cc+"'"
				dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
				uuid = dataset.getValue(1,1)
				var vSet = databaseManager.getFoundSet(con, 'cmaestrodatosfiscales') 
				if(uuid)
				{
					vSet.loadRecords(databaseManager.convertToDataSet([uuid])) 
					var record = vSet.getSelectedRecord();
					
					if(record['nombre'] != editedRecs[x]['descproveedor']) record['nombre'] = editedRecs[x]['descproveedor'];
					if(record['direccion'] != editedRecs[x]['direccion']) record['direccion'] = editedRecs[x]['direccion'];
					if(record['codpostal'] != editedRecs[x]['codpostal']) record['codpostal'] = editedRecs[x]['codpostal'];
					if(record['poblacion'] != editedRecs[x]['poblacion']) record['poblacion'] = editedRecs[x]['poblacion'];
					if(record['provincia'] != editedRecs[x]['provincia']) record['provincia'] = editedRecs[x]['provincia'];
					if(record['cif'] != editedRecs[x]['cif']) record['cif'] = editedRecs[x]['cif'];
					if(record['telefono'] != editedRecs[x]['telf1']) record['telefono'] = editedRecs[x]['telf1'];
					if(record['fax'] != editedRecs[x]['fax']) record['fax'] = editedRecs[x]['fax'];
					if(record['contacto'] != editedRecs[x]['perscontacto']) record['contacto'] = editedRecs[x]['perscontacto'];
					/*record['codigobanco'] = editedRecs[x]['codigobanco'];
					record['codigosucursal'] = editedRecs[x]['codigosucursal'];
					record['codigodc'] = editedRecs[x]['codigo1dc'];
					record['codigocuenta'] = editedRecs[x]['codigocuenta'];*/
					if(record['codigopaisue'] != editedRecs[x]['pais']) record['codigopaisue'] = editedRecs[x]['pais'];
					//record['swift'] = editedRecs[x]['swift'];
					//record['codigoiban'] = editedRecs[x]['codigoiban'];
					if(record['mail'] != editedRecs[x]['email']) record['mail'] = editedRecs[x]['email'];
					if(record['formapago'] != editedRecs[x]['codig_fp']) record['formapago'] = editedRecs[x]['codig_fp'];
					if(record['web'] != editedRecs[x]['web']) record['web'] = editedRecs[x]['web'];
					if(!record['tiponif']) record['tiponif'] = '02';
					
					if(record.getChangedData().getMaxRowIndex() > 0) databaseManager.saveData(record)
				}
				else
				{
					vSet.newRecord();
					vSet['id'] = application.getUUID();
					vSet['idejercicio'] = Empresa;
					vSet['idcodigo'] = cc;
					vSet['nombre'] = editedRecs[x]['descproveedor'];
					vSet['direccion'] = editedRecs[x]['direccion'];
					vSet['codpostal'] = editedRecs[x]['codpostal'];
					vSet['poblacion'] = editedRecs[x]['poblacion'];
					vSet['provincia'] = editedRecs[x]['provincia'];
					vSet['cif'] = editedRecs[x]['cif'];
					vSet['telefono'] = editedRecs[x]['telf1'];
					vSet['fax'] = editedRecs[x]['fax'];
					vSet['contacto'] = editedRecs[x]['perscontacto'];
					/*vSet['codigobanco'] = editedRecs[x]['codigobanco'];
					vSet['codigosucursal'] = editedRecs[x]['codigosucursal'];
					vSet['codigodc'] = editedRecs[x]['codigo1dc'];
					vSet['codigocuenta'] = editedRecs[x]['codigocuenta'];*/
					vSet['codigopaisue'] = editedRecs[x]['pais'];
					/*vSet['swift'] = editedRecs[x]['swift'];
					vSet['codigoiban'] = editedRecs[x]['codigoiban'];*/
					vSet['mail'] = editedRecs[x]['email'];
					vSet['formapago'] = editedRecs[x]['codig_fp'];
					vSet['web'] = editedRecs[x]['web'];
					vSet['tiponif'] = '02';
					
					databaseManager.saveData(vSet)
				}
			}			
		}
	}
}

/**
 * 
 * @param {String} CC
 * 
 * @param {String} DESCCC
 *
 * @param {String} CON
 *
 * @param {String} E
 *
 * @param {String} CCG
 *
 * @param {Number} PIVA
 *
 *
 * @properties={typeid:24,uuid:"D5B0E2D1-AB3E-47BD-9CB4-D221644A4F52"}
 */
function CrearCuenta(CC,DESCCC,CON,E,CCG,PIVA)
{
	var query = "select * from [ctbCuentaContable] where IdEjercicio = '"+E+
	"' and [CuentaContable] like '"+CC+"'"+"+'%'"
	var dataset = databaseManager.getDataSetByQuery(CON, query, null, 9999999)
	var rows = dataset.getMaxRowIndex()
	if(rows > 1 ) var clavdesgl = 1;
	else clavdesgl = 0;
	
	var vSet2 = databaseManager.getFoundSet(CON, 'ctbcuentacontable') 
	vSet2.newRecord();	
	vSet2.id = application.getUUID();
	vSet2.idejercicio = globals.Empresa;
	vSet2.cuentacontable = CC;
	vSet2.desccuentacontable = DESCCC;
	vSet2.clavedesglose = clavdesgl;
	vSet2.debeenero = 0;
	vSet2.debefebrero = 0;
	vSet2.debemarzo = 0;
	vSet2.debeabril = 0;
	vSet2.debemayo = 0;
	vSet2.debejunio = 0;
	vSet2.debejulio = 0;
	vSet2.debeagosto = 0;
	vSet2.debeseptiembre = 0;
	vSet2.debeoctubre = 0;
	vSet2.debenoviembre = 0;
	vSet2.debediciembre = 0;
	vSet2.haberenero = 0;
	vSet2.haberfebrero = 0;
	vSet2.habermarzo = 0;
	vSet2.haberabril = 0;
	vSet2.habermayo = 0;
	vSet2.haberjunio = 0;
	vSet2.haberjulio = 0;
	vSet2.haberagosto = 0;
	vSet2.haberseptiembre = 0;
	vSet2.haberoctubre = 0;
	vSet2.habernoviembre = 0;
	vSet2.haberdiciembre = 0;
	vSet2.previsionenero = 0;
	vSet2.previsionfebrero = 0;
	vSet2.previsionmarzo = 0;
	vSet2.previsionabril = 0;
	vSet2.previsionmayo = 0;
	vSet2.previsionjunio = 0;
	vSet2.previsionjulio = 0;
	vSet2.previsionagosto = 0;
	vSet2.previsionseptiembre = 0;
	vSet2.previsionoctubre = 0;
	vSet2.previsionnoviembre = 0;
	vSet2.previsiondiciembre = 0;
	vSet2.previsionanual = 0;	
	vSet2.saldoenero = 0;
	vSet2.saldofebrero = 0;
	vSet2.saldomarzo = 0;
	vSet2.saldoabril = 0;
	vSet2.saldomayo = 0;
	vSet2.saldojunio = 0;
	vSet2.saldojulio = 0;
	vSet2.saldoagosto = 0;
	vSet2.saldoseptiembre = 0;
	vSet2.saldooctubre = 0;
	vSet2.saldonoviembre = 0;
	vSet2.saldodiciembre = 0;
	vSet2.saldoejercicioanterior = 0;
	vSet2.totaldebe = 0;
	vSet2.totalhaber = 0;
	vSet2.saldo = 0;
	if(CCG && clavdesgl == 0) vSet2.contrapartida = CCG;
	if(PIVA && clavdesgl == 0) vSet2.tipoiva = PIVA;
	
	databaseManager.saveData(vSet2)
}

/**
 * Callback method when form is destroyed.
 * 
 * @param {String} CAMPO
 * 
 * @param {Number} LONGITUD
 *
 * @param {String} ALINEACION
 *
 *
*
 *
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"B1EB72CD-0100-40FF-A108-39BB1C0C1F37"}
 */
function PreparaLinea2(CAMPO,LONGITUD,ALINEACION)
{	
	if(CAMPO == null)
	{
		CAMPO = '';
	}
	var espacios = null
	var n = LONGITUD - CAMPO.length
	for(var i=1;i<=n;i++)
	{
		espacios = espacios + '0';
	}

	if (ALINEACION == 'Left')
	    return CAMPO + espacios;
	else
	    return espacios + CAMPO;
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"91E6EFF9-211A-49A1-B916-A7DFECE89D52"}
 */
function onDataChangeEmail() {
	if(email){
	if(utils.stringPatternCount(email,",") == 0
			&& utils.stringPatternCount(email," ") == 0
			&& utils.stringPatternCount(email,"@") == 1
			&& utils.stringPatternCount(email,".") >= 1)
			{
				return
			}
			else
			{
				elements.fld_email.selectAll()
				elements.fld_email.requestFocus()
				globals.GCshowInfoDialog("Debes introducir una dirección de correo válida.", null,'Aceptar', null, null, null);			
			}
	}
}

/**
 * Handle changed data.
 *
*
 *
 * @properties={typeid:24,uuid:"DE34B2AB-BD39-4385-ACE7-A67260EA8DBE"}
 */
function onDataChangeEmailCC() {
	if(emailcc){
	if(utils.stringPatternCount(emailcc,",") == 0
			&& utils.stringPatternCount(emailcc," ") == 0
			&& utils.stringPatternCount(emailcc,"@") == 1
			&& utils.stringPatternCount(emailcc,".") >= 1)
			{
				return
			}
			else
			{
				elements.fld_emailcc.selectAll()
				elements.fld_emailcc.requestFocus()
				globals.GCshowInfoDialog("Debes introducir una dirección de correo válida.", null,'Aceptar', null, null, null);			
			}
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
  *
 *
 *
 * @properties={typeid:24,uuid:"DA3AC6CB-36AB-4AE9-A79D-721B768ABEF1"}
 */
function onDataChangecc() {
	// TODO Auto-generated method stub
	if(cuentacontable)
	{
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		var con = dataset.getValue(1,2);
		
		if(!Empresa || !con)
		{
			globals.GCshowErrorDialog('No está realizada ninguna conexión con ninguna Contabilidad.\nNo se puede comprobar la existencia de la Cuenta Contable.', null, null, null, null, null)
		}
		else
		{
			query = "select DescCuentaContable,Saldo,CuentaContable,ClaveDesglose from ctbCuentaContable where IdEjercicio ='"+ Empresa+
			"' and CuentaContable='" + cuentacontable + "'"/*"' AND (ClaveDesglose = 0 OR ClaveDesglose IS NULL)"*/
			dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
			var cc = dataset.getValue(1,3)
			var clave = dataset.getValue(1,4)
			if(!cc || clave == 1)
			{
				elements.fld_cuentacontable.selectAll()
				elements.fld_cuentacontable.requestFocus()
				globals.GCshowErrorDialog("Cuenta Contable no válida o no existe en el PGC de la Empresa '"+Empresa+"'.\nVerifíquela.", null, null, null, null, null)
			}
		}
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
  *
 *
 *
 *
 * @properties={typeid:24,uuid:"6D892569-00D3-4DED-B824-588D2537B679"}
 */
function onDataChangeccgastos() {
	// TODO Auto-generated method stub
	if(ccgastos)
	{
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		var con = dataset.getValue(1,2);
		
		if(!Empresa || !con)
		{
			globals.GCshowErrorDialog('No está realizada ninguna conexión con ninguna Contabilidad.\nNo se puede comprobar la existencia de la Cuenta Contable.', null, null, null, null, null)
		}
		else
		{
			query = "select DescCuentaContable,Saldo,CuentaContable,ClaveDesglose from ctbCuentaContable where IdEjercicio ='"+ Empresa+
			"' and CuentaContable='" + ccgastos + "'"/*"' AND (ClaveDesglose = 0 OR ClaveDesglose IS NULL)"*/
			dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
			var cc = dataset.getValue(1,3)
			var clave = dataset.getValue(1,4)
			if(!cc || clave == 1)
			{
				elements.fld_cuentacontable.selectAll()
				elements.fld_cuentacontable.requestFocus()
				globals.GCshowErrorDialog("Cuenta Contable no válida o no existe en el PGC de la Empresa '"+Empresa+"'.\nVerifíquela.", null, null, null, null, null)
			}
		}
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"02678395-3EBE-439E-B90E-1509E15AA226"}
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
 * @properties={typeid:24,uuid:"84E0649B-15F0-4879-A75E-7E18882AF621"}
 */
function btn_Documentacion(event) {
	globals.GCFormulario = null;
	if(codpro)
	{
		globals.COD = codpro;
		globals.GCshowDialogProveedoresDocumentacion('Nuevo Documento', null, null, null, null, null, null, null, null, null);
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
 *
 * @properties={typeid:24,uuid:"FF488EE1-4401-45B1-91FA-18785D01B628"}
 */
function handle_shortCut(v_event)
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	globals.GCevento = null
	if(!globals.GCisEditing() && frm == 'FrmProveedoresGC' && v_event.getType() == 'control shift M')
	{
		var DREF = codpro.toString()
		if(DREF == null || DREF == '') DREF = '0';
		var HREF = codpro.toString()
		if(HREF == null || HREF == '') HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'P'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	}
	else if(!globals.GCisEditing() && frm == 'FrmProveedoresGC' && (globals.GCNombreUsuario == 'ADMINISTRADOR' || globals.GCNombreUsuario == 'JAVI') && v_event.getType() == 'control D')
	{
		var query = "select cif,codpro,descproveedor from tbMaestroProveedores ORDER BY codpro"		
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
		var rows = dataset.getMaxRowIndex();
		
		for(var i=1;i<=rows;i++)
		{
			var cifcli = dataset.getValue(i,1);
			var idcli = dataset.getValue(i,2);
			var desccli = dataset.getValue(i,3);
			
			if(cifcli)
			{
				//var n = globals.validateCIFGC(cifcli) 
				//if(n == false) application.output(idcli+' '+desccli)
				var n = globals.GCcheckCIF(cifcli)
				//var n2 = globals.GCcheckNIF(cifcli)
				var n3 = globals.GCcheckNSS(cifcli)
				if(n == false && n3 == false) application.output(idcli+' '+desccli + ' '+cifcli)
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
 * @properties={typeid:24,uuid:"214953E4-8DEE-410A-B8A3-92756CDBFFCF"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Proveedores';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de este Proveedor';	
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
 * @properties={typeid:24,uuid:"A1A70F54-1966-4479-A112-EF02DBB6DC30"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Proveedores'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'P'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de este Proveedor'.toUpperCase():
		DREF = forms.FrmProveedoresGC.codpro.toString();
		HREF = forms.FrmProveedoresGC.codpro.toString();
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'P'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"A74C8CBB-341C-4C8D-8E3C-6B3F18DDDDE7"}
 */
function onDataChangeCP() {
	if(codpostal)
	{
		if(codpostal.length == 5)
		{
			var prov = utils.stringLeft(codpostal,2)			
			switch( prov )
			{
				case '01': 
				{
					provincia = 'ÁLAVA';				
					break;
				}
				case '02': 
				{
					provincia = 'ALBACETE';
					break;
				}
				case '03': 
				{
					provincia = 'ALICANTE';					
					break;
				}
				case '04': 
				{
					provincia = 'ALMERÍA';					
					break;
				}
				case '33': 
				{
					provincia = 'ASTURIAS';					
					break;
				}
				case '05': 
				{
					provincia = 'ÁVILA';
					break;
				}
				case '06': 
				{
					provincia = 'BADAJOZ';					
					break;
				}
				case '08': 
				{
					provincia = 'BARCELONA';					
					break;
				}
				case '09': 
				{
					provincia = 'BURGOS';					
					break;
				}
				case '10': 
				{
					provincia = 'CÁCERES';					
					break;
				}
				case '11': 
				{
					provincia = 'CÁDIZ';					
					break;
				}
				case '39': 
				{
					provincia = 'CANTABRIA';					
					break;
				}
				case '12':
				{
					provincia = 'CASTELLÓN';					
					break;
				}
				case '51':
				{
					provincia = 'CEUTA';
					break;
				}
				case '13':
				{
					provincia = 'CIUDAD REAL';					
					break;
				}
				case '14':
				{
					provincia = 'CÓRDOBA';					
					break;
				}
				case '15':
				{
					provincia = 'CORUÑA, A';					
					break;
				}
				case '16':
				{
					provincia = 'CUENCA';					
					break;
				}
				case '17':
				{
					provincia = 'GIRONA';					
					break;
				}
				case '18':
				{
					provincia = 'GRANADA';					
					break;
				}
				case '19':
				{
					provincia = 'GUADALAJARA';					
					break;
				}
				case '20':
				{
					provincia = 'GUIPÚZCOA';					
					break;
				}
				case '21':
				{
					provincia = 'HUELVA';					
					break;
				}
				case '22':
				{
					provincia = 'HUESCA';					
					break;
				}
				case '07':
				{
					provincia = 'ILLES BALEARS';					
					break;
				}
				case '23':
				{
					provincia = 'JAÉN';					
					break;
				}
				case '24':
				{
					provincia = 'LEÓN';					
					break;
				}
				case '25':
				{
					provincia = 'LLEIDA';					
					break;
				}
				case '27':
				{
					provincia = 'LUGO';					
					break;
				}
				case '28':
				{
					provincia = 'MADRID';
					break;
				}
				case '29':
				{
					provincia = 'MÁLAGA';					
					break;
				}
				case '52':
				{
					provincia = 'MELILLA';					
					break;
				}
				case '30':
				{
					provincia = 'MURCIA';					
					break;
				}
				case '31':
				{
					provincia = 'NAVARRA';					
					break;
				}
				case '32':
				{
					provincia = 'OURENSE';					
					break;
				}
				case '34':
				{
					provincia = 'PALENCIA';					
					break;
				}
				case '35':
				{
					provincia = 'PALMAS, LAS';					
					break;
				}
				case '36':
				{
					provincia = 'PONTEVEDRA';					
					break;					
				}
				case '26':
				{
					provincia = 'RIOJA, LA';					
					break;
				}
				case '37':
				{
					provincia = 'SALAMANCA';					
					break;
				}
				case '38':
				{
					provincia = 'S.C.TENERIFE';					
					break;
				}
				case '40':
				{
					provincia = 'SEGOVIA';
					break;
				}
				case '41':
				{
					provincia = 'SEVILLA';					
					break;
				}
				case '42':
				{
					provincia = 'SORIA';					
					break;
				}
				case '43':
				{
					provincia = 'TARRAGONA';					
					break;
				}
				case '44':
				{
					provincia = 'TERUEL';					
					break;
				}
				case '45':
				{
					provincia = 'TOLEDO';					
					break;
				}
				case '46':
				{
					provincia = 'VALENCIA';					
					break;
				}
				case '47':
				{
					provincia = 'VALLADOLID';					
					break;
				}
				case '48':
				{
					provincia = 'VIZCAYA';					
					break;
				}
				case '49':
				{
					provincia = 'ZAMORA';					
					break;
				}
				case '50':
				{
					provincia = 'ZARAGOZA';
					break;
				}
				default: break;		
			}
			var query = "select municipio_nombre from cp_municipios where  codigo_postal = '" + codpostal + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			if(dataset.getValue(1,1)) poblacion = dataset.getValue(1,1);
		}
	}
	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"30F00855-73EE-4F2C-881B-F9D6D3B27000"}
 */
function onChangeCIF() {
	if(globals.GCRegistroNuevo == 1)
	{
		if(cif)
		{
			var query = "select codpro,descproveedor,id from tbmaestroproveedores where  cif = '" + cif + "' order by codpro";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var uuid = dataset.getValue(1,3);
			var prov = dataset.getValue(1,1);
			var dprov = dataset.getValue(1,2);
			if(uuid)
			{
				globals.GCshowInfoDialog('Ya se ha registrado este CIF en el proveedor '+prov+' - '+dprov,null,'Aceptar',null,null,null)
			}
			else
			{
				//cif = utils.stringReplace(cif,'-','');
				cif = utils.stringTrim(cif)
				cif = utils.stringReplace(cif,' ','');
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
 * @properties={typeid:24,uuid:"B9E47F50-6DD3-405A-9801-E48230E54F84"}
 */
function btn_comprcifdni(event) {
	// TODO Auto-generated method stub
	if(!globals.GCisEditing())
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbciferroneos')  
		vSet.loadAllRecords()
		vSet.deleteAllRecords()
		 
		if(forms.FrmProveedoresGC.id) 
		{
			var cifcli = forms.FrmProveedoresGC.cif;
			var idcli = forms.FrmProveedoresGC.codpro;
			var desccli = forms.FrmProveedoresGC.descproveedor;
			var paiscli = forms.FrmProveedoresGC.pais;
			var n5 = null;
			var z = 0;
			if(cifcli)
			{				
				//var n = globals.validateCIFGC(cifcli) 
				//if(n == false) application.output(idcli+' '+desccli)
				var n = globals.GCcheckCIF(utils.stringTrim(cifcli))
				//var n2 = globals.GCcheckNIF(cifcli)
				var n3 = globals.GCcheckNSS(utils.stringTrim(cifcli))
				
			
				if(paiscli /*&& paiscli != 'ES'*/)
				{
					var url = new String();
					if(utils.stringLeft(cifcli,2) == paiscli) 
					{
						var cifcl = utils.stringReplace(cifcli,paiscli,'');
						cifcl = utils.stringTrim(cifcl);
						cifcl = utils.stringReplace(cifcl,' ','');
						url = 'https://ec.europa.eu/taxation_customs/vies/rest-api/ms/'+paiscli+'/vat/'+cifcl;
						var pageData = plugins.http.getPageData(url);
						pageData = utils.stringReplace(pageData,'\n','')
						n5 = utils.stringLeft(pageData,20);
					}
					else
					{
						if(!paiscli || paiscli == ' ' || paiscli == '  '){ 
							paiscli = 'ES';
						}
						url = 'https://ec.europa.eu/taxation_customs/vies/rest-api/ms/'+paiscli+'/vat/'+cifcli;
						pageData = plugins.http.getPageData(url);
						pageData = utils.stringReplace(pageData,'\n','')
						n5 = utils.stringLeft(pageData,20);
					}
					//application.showURL(url,'_blank')
				}
				
				if(n == false && n3 == false /*&& n4 == false*/ && n5 != '{  "isValid" : true,') 
				//if(n == false && n3 == false) 
				{
					z+=1;
					application.output(idcli+' '+desccli+ ' '+cifcli)
					  
					//load record by ID in foundset  
					//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
					vSet.newRecord();
					vSet.id = application.getUUID();
					vSet.idcli = idcli;
					vSet.descli = desccli;
					vSet.cifcli = cifcli;
					
					
					databaseManager.saveData(vSet);					
										
				}
			}
		}
		if(z>0)
		{
			globals.btn_runJasperReportciferroneos()
		}
		else
		{
			globals.GCshowInfoDialog('El CIF/DNI de este proveedor es correcto.',null,'Aceptar',null,null,null)
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"0CE19EBB-D05A-4955-A5A3-F1D8D28174BD"}
 */
function btn_comprallcifdni(event) {
	if(!globals.GCisEditing())
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbciferroneos')  
		vSet.loadAllRecords()
		vSet.deleteAllRecords()
		
		var query = "select cif,codpro,descproveedor,pais from tbMaestroProveedores ORDER BY codpro"		
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
		var rows = dataset.getMaxRowIndex();
		var z=0;
		for(var i=1;i<=rows;i++)
		{
			var cifcli = dataset.getValue(i,1);
			var idcli = dataset.getValue(i,2);
			var desccli = dataset.getValue(i,3);
			var paiscli = dataset.getValue(i,4);
			var n5 = null;
			if(cifcli)
			{
				//var n = globals.validateCIFGC(cifcli) 
				//if(n == false) application.output(idcli+' '+desccli)
				var n = globals.GCcheckCIF(utils.stringTrim(cifcli))
				//var n2 = globals.GCcheckNIF(cifcli)
				var n3 = globals.GCcheckNSS(utils.stringTrim(cifcli))
				if(paiscli /*&& paiscli != 'ES'*/)
				{
					var url = new String();
					if(utils.stringLeft(cifcli,2) == paiscli) 
					{
						var cifcl = utils.stringReplace(cifcli,paiscli,'');
						cifcl = utils.stringTrim(cifcl);
						cifcl = utils.stringReplace(cifcl,' ','');
						url = 'https://ec.europa.eu/taxation_customs/vies/rest-api/ms/'+paiscli+'/vat/'+cifcl;
						var pageData = plugins.http.getPageData(url);
						pageData = utils.stringReplace(pageData,'\n','')
						n5 = utils.stringLeft(pageData,20);
					}
					else
					{
						if(!paiscli || paiscli == ' ' || paiscli == '  '){ 
							paiscli = 'ES';
						}
						url = 'https://ec.europa.eu/taxation_customs/vies/rest-api/ms/'+paiscli+'/vat/'+cifcli;
						pageData = plugins.http.getPageData(url);
						pageData = utils.stringReplace(pageData,'\n','')
						n5 = utils.stringLeft(pageData,20);
					}
				}
				if(n == false && n3 == false && n5 != '{  "isValid" : true,') 
				{
					z+=1;
					application.output(idcli+' '+desccli+ ' '+cifcli)
					  
					//load record by ID in foundset  
					//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
					vSet.newRecord();
					vSet.id = application.getUUID();
					vSet.idcli = idcli;
					vSet.descli = desccli;
					vSet.cifcli = cifcli;
					
					
					databaseManager.saveData(vSet);					
										
				}
			}
		}
		if(z>0)
		{
			globals.btn_runJasperReportciferroneos()
		}
		else
		{
			if(rows > 0) globals.GCshowInfoDialog('Los CIF/DNI de los proveedores son correctos.',null,'Aceptar',null,null,null)
		}
	}
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"53EA1178-2B98-4593-BE71-ED5F1127A2A8"}
 */
function btn_web(event) {
	if(web)
	{
		if((web.indexOf('http://',0) >= 0 || web.indexOf('https://',0) >= 0))
		{
			application.showURL(web);	
		}
		else
		{
			application.showURL( 'http://' + web);
		}
	}
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"9705A926-9FAA-486E-A89A-A0F6F3291873"}
 */
function btn_listadoProveedores(event) {
	
	globals.GCFormulario = 'FrmProveedoresGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialog_Proveedores3')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialog_Proveedores3", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Proveedores';
	//win.resizable = true;
	//win.show(forms.dialog_Clientes2GC)
	win.show(forms.lst_Clientes2GC)

}
