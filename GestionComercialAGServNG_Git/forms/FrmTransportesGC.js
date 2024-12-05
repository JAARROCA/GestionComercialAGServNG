/**
 * @properties={typeid:24,uuid:"F0E22F90-A783-443E-B79C-CD195FA3AE36"}
 */
function btn_save() {
	
	if(!idtransportista)
	{
		globals.GCshowErrorDialog('Falta introducir el código del tranportista.',null,'Aceptar',null,null,null)
	}
	if(!razonsocial)
	{
		globals.GCshowErrorDialog('Falta introducir la Razón Social del tranportista.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCRegistroNuevo == 1)
		{
			var query = "select [Idtransportista] from [tbMaestrotransportista] where  [IdTransportista] = '" + idtransportista + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n != null)
			{
				var methd = 'forms.FrmTrasnporteGC.foco()';
				globals.GCshowErrorDialog('Código de transportista duplicado!',methd,'Aceptar',null,null,null)
			}
			else
			{
				/*query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var Empresa = dataset.getValue(1,1);
				var con = dataset.getValue(1,2);
				editedRecs = databaseManager.getEditedRecords( foundset)
				*/
				var editedRecs = databaseManager.getEditedRecords( foundset)
				
				if(editedRecs.length > 0)
				{
					for (var x=0;x<editedRecs.length;x++)
					{
						var cod = editedRecs[x]['idtransportista'];
						dataset = editedRecs[x].getChangedData();
						var rows = dataset.getMaxRowIndex()
						for( var i = 1 ; i <= rows ; i++ )
						{
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
							var record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
				            record.tipo = 'TR' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (TR=Transportistas)
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
				var cliid = id;
				_super.btn_save()
				var result = foundset.selectRecord(cliid)
				var fsCount = databaseManager.getFoundSetCount(foundset);
				while(result==false)
				{
					if(fsCount == foundset.getSize())
					{
					return;
					}
				foundset.setSelectedIndex(foundset.getSize());
				result = foundset.selectRecord(cliid);
				}
			
				globals.GCRegistroNuevo = null
				elements.idcodigo.bgcolor = '#f0f0f0'
				elements.idcodigo.readOnly = true
				elements.idcodigo.visible = false
				elements.lblidcliente.visible = true
				elements.lbl_codrequired.visible = false
				elements.btn_sendEmail.visible = true
				//do sort and hilight the newly added (edited) record
				
			
				if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
				
			}
		}
		else
		{
editedRecs = databaseManager.getEditedRecords( foundset)
			
			if(editedRecs.length > 0)
			{
				for (x=0;x<editedRecs.length;x++)
				{
					cod = editedRecs[x]['idtransportista'];
					dataset = editedRecs[x].getChangedData();
					rows = dataset.getMaxRowIndex()
					for( i = 1 ; i <= rows ; i++ )
					{
						vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
			            record.tipo = 'TR' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (TR=Transportistas)
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
			
			cliid = id;
			_super.btn_save()
			result = foundset.selectRecord(cliid)
			fsCount = databaseManager.getFoundSetCount(foundset);
			while(result==false)
			{
				if(fsCount == foundset.getSize())
				{
				return;
				}
			foundset.setSelectedIndex(foundset.getSize());
			result = foundset.selectRecord(cliid);
			}
		
			globals.GCRegistroNuevo = null
			elements.idcodigo.bgcolor = '#f0f0f0'
			elements.idcodigo.readOnly = true
			elements.idcodigo.visible = false
			elements.lblidcliente.visible = true
			elements.lbl_codrequired.visible = false
			elements.btn_sendEmail.visible = true
			//do sort and hilight the newly added (edited) record
			
		
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
			
		}
		
			
		
	}
}

/**
 * @properties={typeid:24,uuid:"B7F4CB30-640A-442B-8F74-CCA01B61A8EE"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	
	globals.GCRegistroNuevo = null
	elements.idcodigo.bgcolor = '#f0f0f0'
	elements.idcodigo.readOnly = true
	elements.idcodigo.visible = false
	elements.lblidcliente.visible = true
	elements.lbl_codrequired.visible = false
	elements.btn_sendEmail.visible = true
	
}

/**
 * @properties={typeid:24,uuid:"6CDF6A5C-066B-4087-B91F-69FA1963AE7A"}
 */
function doEdit()
{
	_super.doEdit()
	
	elements.btn_sendEmail.visible = false
	elements.idcodigo.bgcolor = '#FFFF00';
	elements.fld_nombre.bgcolor = '#FFFF00';
	
}

/**
 * @properties={typeid:24,uuid:"A4AA86E1-6249-4956-A0FB-F179DDEAE454"}
 */
function hide_btn_reset_fields()
{
	_super.hide_btn_reset_fields()
	
}

/**
 * @properties={typeid:24,uuid:"ED586F7A-6D7F-4B4F-BD8B-2464D29928F2"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_Transportista = id
	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
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
 * @properties={typeid:24,uuid:"618B7549-AEF3-4909-9ED7-6363FA277317"}
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
	foundset.loadAllRecords()
	controller.readOnly = true
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)
	elements.idcodigo.visible = false
	elements.lblidcliente.visible = true
	globals.GCRegistroNuevo = null
	
	
	//hide save/cancel btsn
	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
	elements.btn_sendEmail.visible = true
	
	
	globals.GCenableBgElements();
	
	
	globals.GCnav_search = null
	globals.GCsetupRecordStatus();

	
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3DBFAB17-E211-46AA-ABC3-63C063639E5E"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @properties={typeid:24,uuid:"6C95A27A-0FB2-4208-A2CB-4E82BB4CF529"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Transportistas_list();
}

/**
 * @properties={typeid:24,uuid:"BB53C26F-9C11-4DE1-945B-25B85AAE21FA"}
 * @AllowToRunInFind
 */
function rpt_Transportistas_list()
{
	if(idtransportista)
	{
		globals.btn_runJasperReportListadoTransportistas()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"01B57606-0C2C-4A2D-BB43-02D354A541DC"}
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
 * @properties={typeid:24,uuid:"5EF21BF9-F9CD-40BF-B251-2669EB8938A7"}
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
 * @properties={typeid:24,uuid:"A76D62F4-6843-4FF6-A87B-968FCAFE74C3"}
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
 * @properties={typeid:24,uuid:"35460DB9-AAD4-49AE-8709-7B025299EF9F"}
 */
function onActionpob(event) {
	// TODO Auto-generated method stub
	elements.fld_email.requestFocus()
	
}

/**
 * @properties={typeid:24,uuid:"F5467E0F-50B9-4ECF-A689-AAE0CDA17580"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	globals.GCRegistroNuevo = 1
	elements.idcodigo.bgcolor = '#feffe4'
	elements.idcodigo.readOnly = false
	elements.idcodigo.visible = true
	elements.lblidcliente.visible = false
	elements.lbl_codrequired.visible = true
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5DDD7EAE-840F-49A9-855F-7563648CF264"}
 */
function onActionmatr(event) {
	// TODO Auto-generated method stub
	elements.fld_remolque.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"12DA1DC3-A5AE-4909-8AA2-6364F949A5F7"}
 */
function onActionfax(event) {
	// TODO Auto-generated method stub
	elements.fld_personacontacto.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"13F65ECC-83AA-4A2C-8840-A16F068E6B2F"}
 */
function onActioncontacto(event) {
	// TODO Auto-generated method stub
	elements.fld_matricula.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D260F41D-5BF8-4D1B-84AF-F8870AA608E6"}
 */
function onActiontelf1(event) {
	// TODO Auto-generated method stub
	elements.fld_fax.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D2A44353-6482-42A2-B404-13163C8F88B5"}
 */
function onActionmail(event) {
	// TODO Auto-generated method stub
	elements.fld_telefono.requestFocus()
}

/**
 *
 * @properties={typeid:24,uuid:"103AB5E9-998E-4A83-BA4C-089BAA8999A2"}
 */
function btn_sendEmail()
{
	if(email) 
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
				globals.GCFormulario = 'FrmTransportesGC'
				globals.GCshowDialogEnvioMail('Envio EMail',1,null,null,null,null,null,null,null,null)
			}
		}
		
	}
	// create a file object
	
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"D39E2A2C-D758-446A-A809-5266D019E950"}
 */
function validate_beforeDelete()
{
	/*var query = "SELECT COUNT(*) FROM tbfacturacabecera WHERE clie_cfa = "+idcliente;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var cont = dataset.getValue(1,1)
	
	query = "SELECT COUNT(*) FROM tbfacturaproformacabecera WHERE clie_cfa = "+idcliente;
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var cont2 = dataset.getValue(1,1)
	
	var pre = GCtbmaestroclientes_to_lofertas.getSize()
	var alb = GCtbmaestroclientes_to_lalbaran.getSize()
	var fra = GCtbmaestroclientes_to_tbfacturalinea.getSize()
	//var cont = companies_to_contacts.getSize()

	if(fra > 0 || cont > 0 || pre > 0 || alb > 0 || cont2 > 0 )
	{
		globals.GCshowErrorDialog("No se puede borrar un Cliente que se utiliza en varios documentos.", null,'Aceptar', null, null, null);
		return 1
	}
	else
	{
		return 0
	}*/
	return 0
}

/**
 * @properties={typeid:24,uuid:"B39D7486-1112-404B-BAA1-70C83B358E6A"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'TR' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = idtransportista;
		record.fecha = new Date();
		record.datomodif = razonsocial;
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
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"E60B00AB-62DE-44DA-A918-C1FF9FA62586"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [Idtransportista] from [tbMaestroTransportista] where  [Idtransportista] = '" + idtransportista + "'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		var methd = 'forms.FrmTransportesGC.foco()';
		globals.GCshowErrorDialog('Código de Transportista duplicado!',methd,'Aceptar',null,null,null)
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D0096773-4ED7-482C-A149-422BEBCF9A5A"}
 */
function foco() {
	elements.idcodigo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"449422B1-2515-4427-B927-9080A96F6593"}
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"2FCA8212-3C76-4672-888B-C51062116F39"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Transportistas';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de este Transportista';	
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
 * @properties={typeid:24,uuid:"55608E1E-0F7E-4495-9493-D7DF218DE026"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Transportistas'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'TR'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de este Transportista'.toUpperCase():
		DREF = forms.FrmTransportesGC.idtransportista.toString();
		HREF = forms.FrmTransportesGC.idtransportista.toString();
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'TR'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}
