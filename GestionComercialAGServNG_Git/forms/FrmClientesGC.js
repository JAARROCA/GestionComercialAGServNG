/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"DE676469-2442-43AC-9DC2-DCC32120E36D",variableType:-4}
 */
var editedRecs;

/**
 * @properties={typeid:24,uuid:"A650CE74-75D1-4B39-9726-8B95CFC46530"}
 */
function btn_save() {
	
	var ok = true;
	//if(cif) ok = globals.validateCIFGC(cif)	
	if(!idcliente)
	{
		globals.GCshowErrorDialog('Falta introducir el código del cliente.',null,'Aceptar',null,null,null)
	}
	else if(!desccliente)
	{
		globals.GCshowErrorDialog('Falta introducir el nombre del cliente.',null,'Aceptar',null,null,null)
	}
	else if(!direccion)
	{
		globals.GCshowErrorDialog('Falta introducir la dirección del cliente.',null,'Aceptar',null,null,null)
	}
	else if(!cif)
	{
		globals.GCshowErrorDialog('Falta introducir el CIF del cliente.',null,'Aceptar',null,null,null)
	}
	else if(!pais)
	{
		globals.GCshowErrorDialog('Falta introducir el país del cliente.',null,'Aceptar',null,null,null)
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
			var query = "select [IdCliente] from [tbMaestroClientes] where  [IdCliente] = " + idcliente;
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n != null)
			{
				var methd = 'forms.FrmClientesGC.foco()';
				globals.GCshowErrorDialog('Código de Cliente duplicado!',methd,'Aceptar',null,null,null)
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
						if(editedRecs[i]['tipoiva'] && editedRecs[i]['tipoiva'] != 0) editedRecs[i]['tipoiva'] = 0;
					}
				}
				*/
				var cliid = id;
				if(editedRecs.length > 0)
				{
					for (var x=0;x<editedRecs.length;x++)
					{
						var cod = editedRecs[x]['idcliente'];
						dataset = editedRecs[x].getChangedData();
						var rows = dataset.getMaxRowIndex()
						for( var i = 1 ; i <= rows ; i++ )
						{
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
							var record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
				            record.tipo = 'C' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
				var result = foundset.selectRecord(cliid)
				var fsCount = databaseManager.getFoundSetCount(foundset);
				while(result==false)
				{
					if(fsCount == foundset.getSize()) return;
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
				elements.btn_sendEmailcc.visible = true
				elements.btn_web.visible = true
				elements.BtnFormaPago.visible = false
				elements.BtnAgentes.visible = false
				elements.BtnPais.visible = false
				elements.BtnObservacion.visible = false
				elements.BtnAñadirObs.visible = false
				elements.btnDocumentacion.visible = true
				elements.btn_histmodificaciones.visible = true
				elements.btn_comprcifdni.visible = true
				elements.BtnValidarCif.visible = true
				elements.btn_vacaciones.visible = true
				//elements.BtnSkype.visible = true
				//do sort and hilight the newly added (edited) record
				
			
				if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
				if(editedRecs.length > 0 && con && Empresa)
				{
					methd = 'forms.FrmClientesGC.ActualizarConta(event)'
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
					if(editedRecs[i]['tipoiva'] && editedRecs[i]['tipoiva'] != 0) editedRecs[i]['tipoiva'] = 0;
				}
			}
			*/	
			cliid = id;
			if(editedRecs.length > 0)
			{
				for (x=0;x<editedRecs.length;x++)
				{
					cod = editedRecs[x]['idcliente'];
					dataset = editedRecs[x].getChangedData();
					rows = dataset.getMaxRowIndex()
					for( i = 1 ; i <= rows ; i++ )
					{
						vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
			            record.tipo = 'C' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
			result = foundset.selectRecord(cliid)
			fsCount = databaseManager.getFoundSetCount(foundset);
			while(result==false)
			{
				if(fsCount == foundset.getSize()) return;
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
			elements.btn_sendEmailcc.visible = true
			elements.btn_web.visible = true
			elements.BtnFormaPago.visible = false
			elements.BtnAgentes.visible = false
			elements.BtnPais.visible = false
			elements.BtnObservacion.visible = false
			elements.BtnAñadirObs.visible = false
			elements.btnDocumentacion.visible = true
			elements.btn_histmodificaciones.visible = true
			elements.btn_comprcifdni.visible = true
			elements.BtnValidarCif.visible = true
			elements.btn_vacaciones.visible = true
			//elements.BtnSkype.visible = true
			//do sort and hilight the newly added (edited) record
			
		
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
			
			if(editedRecs.length > 0 && Empresa && con)
			{
				methd = 'forms.FrmClientesGC.ActualizarConta(event)'
				globals.GCshowQuestionDialog("¿Desea que los datos modificados se actualicen también en la contabilidad '"+Empresa+"'?",methd,'No','Si',null,null)
			}			
		}		
	}
}

/**
 * @properties={typeid:24,uuid:"AE920D6E-5B19-42C0-8015-9E7B46997E5A"}
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
	elements.btn_sendEmailcc.visible = true
	elements.btn_web.visible = true
	elements.BtnFormaPago.visible = false
	elements.BtnAgentes.visible = false
	elements.BtnPais.visible = false
	elements.BtnObservacion.visible = false
	elements.BtnAñadirObs.visible = false
	elements.btnDocumentacion.visible = true
	elements.btn_histmodificaciones.visible = true
	elements.btn_comprcifdni.visible = true
	elements.BtnValidarCif.visible = true
	elements.btn_vacaciones.visible = true
	//elements.BtnSkype.visible = true
	
}

/**
 * @properties={typeid:24,uuid:"84ADC42D-BDD6-43E8-B7E2-697B31BFC7A3"}
 */
function doEdit()
{
	_super.doEdit()
	
	elements.btn_sendEmail.visible = false
	elements.btn_sendEmailcc.visible = false
	elements.btn_web.visible = false
	elements.BtnFormaPago.visible = true
	elements.BtnAgentes.visible = true
	elements.BtnPais.visible = true
	elements.BtnObservacion.visible = true
	elements.BtnAñadirObs.visible = true
	elements.btnDocumentacion.visible = false
	elements.btn_histmodificaciones.visible = false
	elements.btn_comprcifdni.visible = false
	elements.BtnValidarCif.visible = false
	elements.btn_vacaciones.visible = false
	//elements.BtnSkype.visible = false
	elements.idcodigo.bgcolor = '#FFFF00';
	elements.fld_nombre.bgcolor = '#FFFF00';
	elements.fld_direccion.bgcolor = '#FFFF00';
	elements.fld_cif.bgcolor = '#FFFF00';
	elements.fld_codigopaisue.bgcolor = '#FFFF00';
	
}

/**
 * @properties={typeid:24,uuid:"974EE666-DC23-4C3F-B724-E5FDC13D5565"}
 */
function hide_btn_reset_fields()
{
	_super.hide_btn_reset_fields()
	
}

/**
 * @properties={typeid:24,uuid:"756B794A-23F4-4790-B34E-AA6E7A4E8059"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_Cliente = id
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
 * @properties={typeid:24,uuid:"5AF01435-7217-4D63-BD42-A90A2714F2A0"}
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
	elements.BtnFormaPago.visible = false
	elements.BtnAgentes.visible = false
	elements.BtnPais.visible = false
	//elements.BtnSkype.visible = true
	elements.idcodigo.visible = false
	elements.lblidcliente.visible = true
	globals.GCRegistroNuevo = null
	
	
	//hide save/cancel btsn
	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
	elements.btn_sendEmail.visible = true
	elements.btn_sendEmailcc.visible = true
	elements.btn_web.visible = true
	
	//elements.tabs_mainPanel2.tabIndex = 0;
	
	
	globals.GCenableBgElements();
	
	
	globals.GCnav_search = null
	globals.GCsetupRecordStatus();

	if(globals.GCFormulario)	
	{
		if(globals.GCFormulario == 'FrmFacturasGC')
		{
			if(forms.FrmFacturasGC.clie_cfa)
			{
				var query = "select [Id] from [tbmaestroclientes] where [idcliente] ="+ forms.FrmFacturasGC.clie_cfa;
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var uuid = dataset.getValue(1, 1)
				foundset.loadAllRecords()
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
		else if(globals.GCFormulario == 'FrmFacturasProformaGC')
		{
			if(forms.FrmFacturasProformaGC.clie_cfa)
			{
				query = "select [Id] from [tbmaestroclientes] where [idcliente] ="+ forms.FrmFacturasProformaGC.clie_cfa;
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				uuid = dataset.getValue(1, 1)
				foundset.loadAllRecords()
				result = foundset.selectRecord(uuid)
				fsCount = databaseManager.getFoundSetCount(foundset);
				while(result==false)
				{
					if(fsCount == foundset.getSize()) return;
					foundset.setSelectedIndex(foundset.getSize());
					result = foundset.selectRecord(uuid);
				}
			}
		}
		else if(globals.GCFormulario == 'FrmAlbaranGC')
		{
			if(forms.FrmAlbaranGC.clie_cal)
			{
				query = "select [Id] from [tbmaestroclientes] where [idcliente] ="+ forms.FrmAlbaranGC.clie_cal;
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				uuid = dataset.getValue(1, 1)
				foundset.loadAllRecords()
				result = foundset.selectRecord(uuid)
				fsCount = databaseManager.getFoundSetCount(foundset);
				while(result==false)
				{
					if(fsCount == foundset.getSize()) return;
					foundset.setSelectedIndex(foundset.getSize());
					result = foundset.selectRecord(uuid);
				}
			}
		}
		else if(globals.GCFormulario == 'FrmPresupuestosGC')
		{
			if(forms.FrmPresupuestosGC.clie_cof)
			{
				query = "select [Id] from [tbmaestroclientes] where [idcliente] ="+ forms.FrmPresupuestosGC.clie_cof;
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				uuid = dataset.getValue(1, 1)
				foundset.loadAllRecords()
				result = foundset.selectRecord(uuid)
				fsCount = databaseManager.getFoundSetCount(foundset);
				while(result==false)
				{
					if(fsCount == foundset.getSize()) return;
					foundset.setSelectedIndex(foundset.getSize());
					result = foundset.selectRecord(uuid);
				}
			}
		}
		else if(globals.GCFormulario == 'FrmNotasGC')
		{
			if(forms.FrmNotasGC.clie_cfa)
			{
				query = "select [Id] from [tbmaestroclientes] where [idcliente] ="+ forms.FrmNotasGC.clie_cfa;
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
		else if(globals.GCFormulario == 'FrmPedidosGC')
		{
			if(forms.FrmPedidosGC.clie_cot)
			{
				query = "select [Id] from [tbmaestroclientes] where [idcliente] ="+ forms.FrmPedidosGC.clie_cot;
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
 * @properties={typeid:24,uuid:"CF998350-89F8-4686-9C30-000D6EACC8B5"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	plugins.window.createShortcut('control shift M', handle_shortCut);
	//plugins.window.createShortcut('control D', handle_shortCut);
	elements.tabs_mainPanel2.tabIndex = 0;
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @properties={typeid:24,uuid:"03497143-D59B-4286-B172-DCCD654C48A2"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Clientes_list();
}

/**
 * @properties={typeid:24,uuid:"849A3DC1-8972-4B4E-90C6-ADF57B4F972B"}
 * @AllowToRunInFind
 */
function rpt_Clientes_list()
{
	globals.GCshowDialogListadoClientes('Listado de Clientes',1,null,null,null,null,null,null,null,null)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"508B3B32-DB4C-448C-B002-11BA50B7B5EF"}
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
 * @properties={typeid:24,uuid:"9F609169-0879-488C-9350-624889A9E321"}
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
 * @properties={typeid:24,uuid:"D5E6FABB-02E0-40FD-820A-5C4ECAA57630"}
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
 * @properties={typeid:24,uuid:"F441D381-1FE0-485D-8FCB-6F3D0BBE8B01"}
 */
function onActionpro(event) {
	// TODO Auto-generated method stub
	elements.fld_poblacion.requestFocus()
	
}

/**
 * @properties={typeid:24,uuid:"17F93BE6-0254-44BD-A0CA-737D9CD0FB7A"}
 */
function validate_autoEnter()
{
	id = application.getUUID();
	pais = 'ES';
	tipoiva = 21;
	envfraemail = 1;
	globals.GCRegistroNuevo = 1;
	elements.idcodigo.bgcolor = '#feffe4';
	elements.idcodigo.readOnly = false;
	elements.idcodigo.visible = true;
	elements.lblidcliente.visible = false;
	elements.lbl_codrequired.visible = true;	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"08312B19-E28D-4342-A2D7-FF594A92788C"}
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
 * @properties={typeid:24,uuid:"C138A3BB-9075-42CA-932A-2CB18F870FA4"}
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
 * @properties={typeid:24,uuid:"1034C492-4C19-4806-B129-6BD21FDFC923"}
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
 * @properties={typeid:24,uuid:"10C269D9-6A69-4E11-B8FC-E330DBEAB800"}
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
 * @properties={typeid:24,uuid:"2B4E395A-3E37-452B-9D47-429C97781C47"}
 */
function onActioncontacto(event) {
	// TODO Auto-generated method stub
	elements.fld_numproveedor.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"84253A89-A703-4AE1-BD60-0998348EFE6E"}
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
 * @properties={typeid:24,uuid:"BEFDF2AC-20E6-4A97-BBCE-DD4983FC5A3C"}
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
 * @properties={typeid:24,uuid:"BBC5C4C0-DF6C-4064-AE6E-B9433DE665D7"}
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
 * @properties={typeid:24,uuid:"71282993-7C92-4116-88EE-EE764EF79181"}
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
 * @properties={typeid:24,uuid:"C01A1B69-839A-4AE1-9C16-D8C362C7BE6C"}
 */
function onActionmailcc(event) {
	// TODO Auto-generated method stub
	elements.fld_numproveedor.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EFCBB0B7-0F41-46B0-9104-68027C9C7C56"}
 */
function onActioncuentacontable(event) {
	// TODO Auto-generated method stub
	elements.fld_cuentacontableventas.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"1DADB525-362F-4B8D-AD7B-828230EE3FFE"}
 */
function onActioncuentacontableventas(event) {
	// TODO Auto-generated method stub
	elements.fld_tipoiva.requestFocus()
}

/**
 *
 * @properties={typeid:24,uuid:"A7584C0E-82C2-497F-9AFA-30217991CBB0"}
 * @SuppressWarnings(deprecated)
 */
function btn_sendEmail()
{
	if(emailcontacto) 
	{		
		
		if(utils.stringPatternCount(emailcontacto,",") == 0
		&& utils.stringPatternCount(emailcontacto," ") == 0
		&& utils.stringPatternCount(emailcontacto,"@") == 1
		&& utils.stringPatternCount(emailcontacto,".") >= 1)
		{
			/*if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
			{
				//var url = 'mailto:your.friend@doesntexist.com?cc=another.friend@doesntexist.com,yetanother.friend@doesntexist.com&bcc=yourboss@doesntexist.com&reply-to=me@myadress.com&subject=mailto%20scheme&body=Hello%20Everybody'
				
				var url = 'mailto:'+emailcontacto+'?'
				//application.showURL(url)
				if(utils.stringMiddle(application.getOSName(),1,7) == "Windows")
				{
					application.executeProgram('rundll32', 'url.dll,FileProtocolHandler', url)
				}
			}
			else
			{*/
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
					globals.GCFormulario = 'FrmClientes'
					globals.GCshowDialogEnvioMail('Envio EMail',1,null,null,null,null,null,null,null,null)
				}
			}
			//}
		}
		else
		{
			globals.GCshowInfoDialog("Debes introducir una dirección de correo válida.", null,'Aceptar', null, null, null);			
		}
	}
	
}

/**
*
* @SuppressWarnings(deprecated)
*
 * @properties={typeid:24,uuid:"1B97C6C1-9E71-4DB0-B2B5-C63C85DDAA61"}
 */
function btn_sendEmail2()
{
	if(emailcc) 
	{		
		
		if(utils.stringPatternCount(emailcc,",") == 0
		&& utils.stringPatternCount(emailcc," ") == 0
		&& utils.stringPatternCount(emailcc,"@") == 1
		&& utils.stringPatternCount(emailcc,".") >= 1)
		{
			/*if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
			{
				//var url = 'mailto:your.friend@doesntexist.com?cc=another.friend@doesntexist.com,yetanother.friend@doesntexist.com&bcc=yourboss@doesntexist.com&reply-to=me@myadress.com&subject=mailto%20scheme&body=Hello%20Everybody'
				
				var url = 'mailto:'+emailcontacto+'?'
				//application.showURL(url)
				if(utils.stringMiddle(application.getOSName(),1,7) == "Windows")
				{
					application.executeProgram('rundll32', 'url.dll,FileProtocolHandler', url)
				}
			}
			else
			{*/
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
					globals.GCFormulario = 'FrmClientes2'
					globals.GCshowDialogEnvioMail('Envio EMail',1,null,null,null,null,null,null,null,null)
				}
			}
			//}
		}
		else
		{
			globals.GCshowInfoDialog("Debes introducir una dirección de correo válida.", null,'Aceptar', null, null, null);			
		}
	}
	
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"9BD4CFFD-B0F6-4CCF-B57E-F3396D45CEF7"}
 */
function validate_beforeDelete()
{
	var query = "SELECT COUNT(*) FROM tbfacturacabecera WHERE clie_cfa = "+idcliente;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var cont = dataset.getValue(1,1)
	
	query = "SELECT COUNT(*) FROM tbfacturaproformacabecera WHERE clie_cfa = "+idcliente;
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var cont2 = dataset.getValue(1,1)
	
	var pre = gctbmaestroclientes_to_lofertas.getSize()
	var alb = gctbmaestroclientes_to_lalbaran.getSize()
	var fra = gctbmaestroclientes_to_tbfacturalinea.getSize()
	//var cont = companies_to_contacts.getSize()

	if(fra > 0 || cont > 0 || pre > 0 || alb > 0 || cont2 > 0 )
	{
		globals.GCshowErrorDialog("No se puede borrar un Cliente que se utiliza en varios documentos.", null,'Aceptar', null, null, null);
		return 1
	}
	else
	{
		return 0
	}
}

/**
 * @properties={typeid:24,uuid:"BFBEE327-AA83-47A6-983E-0E63A67DBE40"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'C' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = idcliente;
		record.fecha = new Date();
		record.datomodif = desccliente;
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
 * @properties={typeid:24,uuid:"D425230C-1939-4EFE-BB5A-A21EBD49A730"}
 */
function onActionBtnFormaPago(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmClientes'
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
 * @properties={typeid:24,uuid:"7E25FB60-BF4D-423B-A73F-4BD4037374C3"}
 */
function onActionBtnAgentes(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmClientes'
	//globals.GCshowDialogAgentes('Representantes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialogAgentes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialogAgentes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Representantes';
	//win.resizable = true;
	//win.show(forms.dialog_AgentesGC)
	win.show(forms.dlgAgentesGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7A656C94-40C4-4A15-8675-F6254EC33904"}
 */
function onActionBtnPaises(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmClientes'
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
 * @properties={typeid:24,uuid:"771DE2BC-E54F-4BE3-A447-C47489BFA9AD"}
 */
function onActiondiapago1(event) {
	// TODO Auto-generated method stub
	elements.fld_diapago2.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7E537C75-88A9-44F7-9826-9673683E2CA3"}
 */
function onActiondiapago2(event) {
	// TODO Auto-generated method stub
	elements.fld_diapago3.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"63D7F2B9-0941-499B-A1CE-931555CCE201"}
 */
function onActiondiapago3(event) {
	// TODO Auto-generated method stub
	elements.fld_observaciones.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6071C536-8903-486B-9C30-1907CAA65299"}
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
 * @properties={typeid:24,uuid:"B2B3AB8B-EE32-45D7-9B61-1671F2ED8C76"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [IdCliente] from [tbMaestroClientes] where  [IdCliente] = " + idcliente;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		var methd = 'forms.FrmClientesGC.foco()';
		globals.GCshowErrorDialog('Código de Cliente duplicado!',methd,'Aceptar',null,null,null)
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"919C2C05-EADD-4FCB-ABD7-A4B79D403D71"}
 */
function foco() {
	elements.idcodigo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5A0E55C0-1C04-4FFB-8A8C-2DDCE74A720A"}
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
 * @properties={typeid:24,uuid:"9144F26E-0CEF-4332-9088-B5F9B7EC2E7E"}
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
 * @properties={typeid:24,uuid:"B760588B-A433-4DFB-98FD-57B376E4D4C8"}
 */
function onActiontipoiva(event) {
	// TODO Auto-generated method stub
	elements.fld_tiporetenirpf.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F45537EA-C598-437F-8BDB-E029362D4E8E"}
 */
function onActiontipoirpf(event) {
	// TODO Auto-generated method stub
	elements.fld_diapago1.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"ADF8B7B3-AEEA-4975-B757-ACF6FB6D6BED"}
 */
function btngooglemaps(event) {
	// TODO Auto-generated method stub
	if(direccion)
	{
		var dir = utils.stringReplace(direccion,' ','+')
		var pob = utils.stringReplace(poblacion,' ','+')
		application.showURL( 'http://maps.google.com/maps?q=' + dir + ','+pob,'_blank','_blank');
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"26ACAE6E-B15C-462A-B970-BCE87561AB6B"}
 */
function onActioncodigobanco(event) {
	// TODO Auto-generated method stub
	evt_changeItem()
	elements.fld_codigosucursal.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"36847F1F-0BFB-4018-8177-F56EBF4B2ABB"}
 */
function onActioncodigosucursal(event) {
	// TODO Auto-generated method stub
	onDataChangeCodigobanco()
	evt_changeItem()
	elements.fld_codigodc.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"134280F4-E64C-45FD-B01E-45201458FE49"}
 */
function onActioncodigodc(event) {
	// TODO Auto-generated method stub
	onDataChangeCodigobanco()
	evt_changeItem()
	elements.fld_codigocuenta.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"CDE25347-FA1F-42CE-A220-C7EE69C5331A"}
 */
function onActioncodigocuenta(event) {
	// TODO Auto-generated method stub
	onDataChangeCodigobanco()
	elements.fld_refmandatosepa.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"482E14C3-CA20-4322-A303-033B1D0165F2"}
 */
function onActioncodigoiban(event) {
	// TODO Auto-generated method stub
	//elements.fld_swift.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"39898EC1-9EBE-4D65-B491-935891EF7E31"}
 */
function onDataChangeCodigobanco() {
	// TODO Auto-generated method stub
	if(codigobanco)
	{
		swift = GCtbmaestroclientes_to_swiftbancos.bic
		evt_changeItem()		
	}
	else
	{
		swift = null;
	}
	/*if(swift == null)
	{		
		globals.GCshowErrorDialog('Codigo bancario no válido.',null,'Aceptar',null,null,null)
	}
	*/
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"A308BBCB-7526-40B0-BE85-F131307F866D"}
 */
function evt_changeItem() {
	// TODO Auto-generated method stub
	if(codigobanco  && codigosucursal && codigo1dc && codigocuenta && pais) CalculoIBAN() 
	else codigoiban = null;
}

/**
 * Perform the element default action.
 *
 
 *
 *
 * @properties={typeid:24,uuid:"CE23CAA5-12EA-4565-A776-D09B84AD1ECB"}
 */
function CalculoIBAN() {
	  
	//Limpiamos el numero de IBAN
	var account = codigobanco + codigosucursal + codigo1dc + codigocuenta
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
	var digitocontrol = 98 - resto;
	             
	if(digitocontrol < 10) digitocontrol = '0'+ String(digitocontrol);
	var Ibanfinal = codigopais + digitocontrol + account;
	 
	codigoiban = Ibanfinal;
	
	  
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
 * @properties={typeid:24,uuid:"FAC3A7A2-B449-4184-9867-E59381163089"}
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
 * @properties={typeid:24,uuid:"DC523659-23EB-4C96-AF11-673AFB11739F"}
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
* @param {String} myString
*
* @return {String}
 *
* @properties={typeid:24,uuid:"EB7508E1-D547-4ECD-B2AC-3DCBF5C2475B"}
*/
function trim(myString)
{
	return myString.replace(/^\s+/g,'').replace(/\s+$/g,'');
}

/**
 * @properties={typeid:24,uuid:"5A7FD05E-EF44-49F9-8335-14FE1BA62CD9"}
 * @SuppressWarnings(deprecated)
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
 * @properties={typeid:24,uuid:"998150A9-046E-4ACC-84EF-525C5062A3BA"}
 * @SuppressWarnings(deprecated)
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
 * @properties={typeid:24,uuid:"E8F33B28-A18C-4CFC-8DC8-BA846C2F46F7"}
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
 * @properties={typeid:24,uuid:"A6D4B1CF-0DFB-425C-A23F-C34BC07F7ED8"}
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
			//var cod = editedRecs[x]['idcliente'];
			var cod = editedRecs[x]['idcliente'];
			query = 'select cuentacontable,desccliente,cuentacontableventas,tipoiva from tbmaestroclientes where idcliente = '+cod;
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var cc = new String()
			//cc = editedRecs[x]['cuentacontable'];
			//var desccc = editedRecs[x]['desccliente']
			cc = dataset.getValue(1,1)
			//if(!cc) cc = '430'+ PreparaLinea2(cod, 5, 'Right');
			var desccc = dataset.getValue(1,2)
			var ccventascli = dataset.getValue(1,3)			
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
						CrearCuenta(Cuentas[i],desccc,con,Empresa,ccventascli,piva)
					}
					else if(Cuentas[i] == cc)
					{
						var vSet = databaseManager.getFoundSet(con, 'ctbcuentacontable') 
						vSet.loadRecords(databaseManager.convertToDataSet([uuid])) 
						var record2 = vSet.getSelectedRecord();
						if(record2['desccuentacontable'] != editedRecs[x]['desccliente']) record2['desccuentacontable'] = editedRecs[x]['desccliente'];
						if(record2['contrapartida'] != editedRecs[x]['cuentacontableventas']) record2['contrapartida'] = editedRecs[x]['cuentacontableventas'];
						if(record2['tipoiva'] != editedRecs[x]['tipoiva']) record2['tipoiva'] = editedRecs[x]['tipoiva'];
						if(record2.getChangedData().getMaxRowIndex() > 0) databaseManager.saveData(record2)
					}
				}
				
				
				query = "select ID from cmaestrodatosfiscales where idejercicio = '"+Empresa+"' and "+
						"idcodigo ='"+cc+"'"
				dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
				uuid = dataset.getValue(1,1)
				var vSet2 = databaseManager.getFoundSet(con, 'cmaestrodatosfiscales') 
				if(uuid)
				{
					vSet2.loadRecords(databaseManager.convertToDataSet([uuid])) 
					var record = vSet2.getSelectedRecord();
					
					if( record['nombre'] != editedRecs[x]['desccliente']) record['nombre'] = editedRecs[x]['desccliente'];
					if(record['direccion'] != editedRecs[x]['direccion']) record['direccion'] = editedRecs[x]['direccion'];
					if(record['codpostal'] != editedRecs[x]['codpostal']) record['codpostal'] = editedRecs[x]['codpostal'];
					if(record['poblacion'] != editedRecs[x]['poblacion']) record['poblacion'] = editedRecs[x]['poblacion'];
					if(record['provincia'] != editedRecs[x]['provincia']) record['provincia'] = editedRecs[x]['provincia'];
					if(record['cif'] != editedRecs[x]['cif']) record['cif'] = editedRecs[x]['cif'];
					if(record['telefono'] != editedRecs[x]['telf1']) record['telefono'] = editedRecs[x]['telf1'];
					if(record['fax'] != editedRecs[x]['fax']) record['fax'] = editedRecs[x]['fax'];
					if(record['contacto'] != editedRecs[x]['perscontacto']) record['contacto'] = editedRecs[x]['perscontacto'];
					if(record['codigobanco'] != editedRecs[x]['codigobanco']) record['codigobanco'] = editedRecs[x]['codigobanco'];
					if(record['codigosucursal'] != editedRecs[x]['codigosucursal']) record['codigosucursal'] = editedRecs[x]['codigosucursal'];
					if(record['codigodc'] != editedRecs[x]['codigo1dc']) record['codigodc'] = editedRecs[x]['codigo1dc'];
					if(record['codigocuenta'] != editedRecs[x]['codigocuenta']) record['codigocuenta'] = editedRecs[x]['codigocuenta'];
					if(record['codigopaisue'] != editedRecs[x]['pais']) record['codigopaisue'] = editedRecs[x]['pais'];
					if(record['swift'] != editedRecs[x]['swift']) record['swift'] = editedRecs[x]['swift'];
					if(record['codigoiban'] != editedRecs[x]['codigoiban']) record['codigoiban'] = editedRecs[x]['codigoiban'];
					if(record['mail'] != editedRecs[x]['emailcontacto']) record['mail'] = editedRecs[x]['emailcontacto'];
					if(record['formapago'] != editedRecs[x]['idformapago']) record['formapago'] = editedRecs[x]['idformapago'];
					if(record['web'] != editedRecs[x]['web']) record['web'] = editedRecs[x]['web'];
					if(editedRecs[x]['refmandatosepa'] && (record['refmandatosepa'] != editedRecs[x]['refmandatosepa'])) record['refmandatosepa'] = editedRecs[x]['refmandatosepa'];
					if(editedRecs[x]['fechafirmamandato'] && (record['fechafirmamandato'] != editedRecs[x]['fechafirmamandato'])) record['fechafirmamandato'] = editedRecs[x]['fechafirmamandato'];
					if(!record['tiponif']) record['tiponif'] = '02';
					
					if(record.getChangedData().getMaxRowIndex() > 0)	databaseManager.saveData(record)
				}
				else
				{
					vSet2.newRecord();
					vSet2['id'] = application.getUUID();
					vSet2['idejercicio'] = Empresa;
					vSet2['idcodigo'] = cc;
					vSet2['nombre'] = editedRecs[x]['desccliente'];
					vSet2['direccion'] = editedRecs[x]['direccion'];
					vSet2['codpostal'] = editedRecs[x]['codpostal'];
					vSet2['poblacion'] = editedRecs[x]['poblacion'];
					vSet2['provincia'] = editedRecs[x]['provincia'];
					vSet2['cif'] = editedRecs[x]['cif'];
					vSet2['telefono'] = editedRecs[x]['telf1'];
					vSet2['fax'] = editedRecs[x]['fax'];
					vSet2['contacto'] = editedRecs[x]['perscontacto'];
					vSet2['codigobanco'] = editedRecs[x]['codigobanco'];
					vSet2['codigosucursal'] = editedRecs[x]['codigosucursal'];
					vSet2['codigodc'] = editedRecs[x]['codigo1dc'];
					vSet2['codigocuenta'] = editedRecs[x]['codigocuenta'];
					vSet2['codigopaisue'] = editedRecs[x]['pais'];
					vSet2['swift'] = editedRecs[x]['swift'];
					vSet2['codigoiban'] = editedRecs[x]['codigoiban'];
					vSet2['mail'] = editedRecs[x]['emailcontacto'];
					vSet2['formapago'] = editedRecs[x]['idformapago'];
					vSet2['web'] = editedRecs[x]['web'];
					if(editedRecs[x]['refmandatosepa']) vSet2['refmandatosepa'] = editedRecs[x]['refmandatosepa'];
					if(editedRecs[x]['fechafirmamandato']) vSet2['fechafirmamandato'] = editedRecs[x]['fechafirmamandato'];
					vSet2['tiponif'] = '02';
					
					databaseManager.saveData(vSet2)
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
 * @param {String} CCV
 *
 * @param {Number} PIVA
 * 
 * @properties={typeid:24,uuid:"24B697A6-A295-4891-9E21-36F1A97AD920"}
 */
function CrearCuenta(CC,DESCCC,CON,E,CCV,PIVA)
{
	var query = "select * from [ctbCuentaContable] where IdEjercicio = '"+E+
	"' and [CuentaContable] like '"+CC+"'"+"+'%'"
	var dataset = databaseManager.getDataSetByQuery(CON, query, null, 9999999)
	var rows = dataset.getMaxRowIndex()
	if(rows > 1 ) var clavdesgl = 1;
	else clavdesgl = 0;
	
	var vSet2 = databaseManager.getFoundSet(CON, 'ctbcuentacontable') 
	vSet2.newRecord();
	vSet2.id = application.getUUID()
	vSet2.idejercicio = E;
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
	if(CCV && clavdesgl == 0) vSet2.contrapartida = CCV;
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
 * @return {String}
 *
 *
 * @properties={typeid:24,uuid:"E55CA646-A8DD-442D-B389-ACB690657D8B"}
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
* @properties={typeid:24,uuid:"8B731F1A-6401-4079-A6A4-5698F984C82C"}
 */
function onDataChangeEmail() {
	// TODO Auto-generated method stub
	if(emailcontacto){
	if(utils.stringPatternCount(emailcontacto,",") == 0
			&& utils.stringPatternCount(emailcontacto," ") == 0
			&& utils.stringPatternCount(emailcontacto,"@") == 1
			&& utils.stringPatternCount(emailcontacto,".") >= 1)
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
 * @properties={typeid:24,uuid:"C825CDA7-8103-4146-81CD-D4BE05FAF3E3"}
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
 *
 * @properties={typeid:24,uuid:"B7D6BCB2-30EE-4B15-9A3C-7547A85EE340"}
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
 *
 * @properties={typeid:24,uuid:"B6D49BCA-DB29-4A75-BCD4-C4CE607A7126"}
 */
function onDataChangeccventas() {
	// TODO Auto-generated method stub
	if(cuentacontableventas)
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
			"' and CuentaContable='" + cuentacontableventas + "'"/*"' AND (ClaveDesglose = 0 OR ClaveDesglose IS NULL)"*/
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
 * @properties={typeid:24,uuid:"93BE4E6D-13D8-4C86-B01F-41047AC68BD6"}
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
 * @properties={typeid:24,uuid:"1DAB4356-7D02-40A5-B39D-FEF87829EA5A"}
 */
function btn_Documentacion(event) {
	if(globals.GCisEditing()) forms.FrmClientesGC.btn_cancel()
	globals.GCFormulario = null;
	if(idcliente)
	{
		globals.COD = idcliente;
		globals.GCshowDialogClientesDocumentacion('Nuevo Documento', null, null, null, null, null, null, null, null, null);
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
 * @properties={typeid:24,uuid:"2F02C40C-4E7E-4475-B63B-743B0E22DA11"}
 */
function handle_shortCut(v_event)
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	globals.GCevento = null
	if(!globals.GCisEditing() && frm == 'FrmClientesGC' && v_event.getType() == 'control shift M')
	{
		var DREF = idcliente.toString()
		if(DREF == null || DREF == '') DREF = '0';
		var HREF = idcliente.toString()
		if(HREF == null || HREF == '') HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'C'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	}
	else if(!globals.GCisEditing() && frm == 'FrmClientesGC' && (globals.GCNombreUsuario == 'ADMINISTRADOR' || globals.GCNombreUsuario == 'JAVI') && v_event.getType() == 'control D')
	{
		var query = "select cif,idcliente,desccliente from tbMaestroClientes ORDER BY IDCLIENTE"		
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
				if(n == false && n3 == false) 
				{
					application.output(idcli+' '+desccli+ ' '+cifcli)
				}
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
 * @properties={typeid:24,uuid:"CF32A221-730D-4BD9-90A6-CF55B299CB3F"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Clientes';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de este Cliente';	
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
 * @properties={typeid:24,uuid:"5EAD1761-646D-4E00-BDBC-8668449A9DFD"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Clientes'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'C'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de este Cliente'.toUpperCase():
		DREF = forms.FrmClientesGC.idcliente.toString();
		HREF = forms.FrmClientesGC.idcliente.toString();
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'C'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"42FF0980-7264-4ED2-AC9B-2C0DBA180C42"}
 */
function btn_CompCif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Comprobar CIF de este Cliente';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperCompCif, 'media:///edit_2.png');
		titulo = 'Comprobar CIF de todos los Clientes';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperCompCif, 'media:///edit_1.png');
		
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
 * @properties={typeid:24,uuid:"1081A8D9-9318-4B7E-9EAE-3F7844A4E435"}
 */
function JasperCompCif(event){
	switch (arguments[4]) {
	case 'Comprobar CIF de este Cliente'.toUpperCase():
			btn_comprcifdni(event)
			break;
	case 'Comprobar CIF de todos los Clientes'.toUpperCase():
			btn_comprallcifdni(event)
			break;
	default: break;
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @properties={typeid:24,uuid:"1237111E-BA65-4AC8-A1E8-B731A19C0CDB"}
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
					tipoiva = 21;
					break;
				}
				case '02': 
				{
					provincia = 'ALBACETE';
					tipoiva = 21;
					break;
				}
				case '03': 
				{
					provincia = 'ALICANTE';					
					tipoiva = 21;
					break;
				}
				case '04': 
				{
					provincia = 'ALMERÍA';					
					tipoiva = 21;
					break;
				}
				case '33': 
				{
					provincia = 'ASTURIAS';					
					tipoiva = 21;
					break;
				}
				case '05': 
				{
					provincia = 'ÁVILA';
					tipoiva = 21;
					break;
				}
				case '06': 
				{
					provincia = 'BADAJOZ';					
					tipoiva = 21;
					break;
				}
				case '08': 
				{
					provincia = 'BARCELONA';					
					tipoiva = 21;
					break;
				}
				case '09': 
				{
					provincia = 'BURGOS';					
					tipoiva = 21;
					break;
				}
				case '10': 
				{
					provincia = 'CÁCERES';					
					tipoiva = 21;
					break;
				}
				case '11': 
				{
					provincia = 'CÁDIZ';					
					tipoiva = 21;
					break;
				}
				case '39': 
				{
					provincia = 'CANTABRIA';					
					tipoiva = 21;
					break;
				}
				case '12':
				{
					provincia = 'CASTELLÓN';					
					tipoiva = 21;
					break;
				}
				case '51':
				{
					provincia = 'CEUTA';
					tipoiva = 0;
					break;
				}
				case '13':
				{
					provincia = 'CIUDAD REAL';					
					tipoiva = 21;
					break;
				}
				case '14':
				{
					provincia = 'CÓRDOBA';					
					tipoiva = 21;
					break;
				}
				case '15':
				{
					provincia = 'CORUÑA, A';					
					tipoiva = 21;
					break;
				}
				case '16':
				{
					provincia = 'CUENCA';					
					tipoiva = 21;
					break;
				}
				case '17':
				{
					provincia = 'GIRONA';					
					tipoiva = 21;
					break;
				}
				case '18':
				{
					provincia = 'GRANADA';					
					tipoiva = 21;
					break;
				}
				case '19':
				{
					provincia = 'GUADALAJARA';					
					tipoiva = 21;
					break;
				}
				case '20':
				{
					provincia = 'GUIPÚZCOA';					
					tipoiva = 21;
					break;
				}
				case '21':
				{
					provincia = 'HUELVA';					
					tipoiva = 21;
					break;
				}
				case '22':
				{
					provincia = 'HUESCA';					
					tipoiva = 21;
					break;
				}
				case '07':
				{
					provincia = 'ILLES BALEARS';					
					tipoiva = 21;
					break;
				}
				case '23':
				{
					provincia = 'JAÉN';					
					tipoiva = 21;
					break;
				}
				case '24':
				{
					provincia = 'LEÓN';					
					tipoiva = 21;
					break;
				}
				case '25':
				{
					provincia = 'LLEIDA';					
					tipoiva = 21;
					break;
				}
				case '27':
				{
					provincia = 'LUGO';					
					tipoiva = 21;
					break;
				}
				case '28':
				{
					provincia = 'MADRID';
					tipoiva = 21;
					break;
				}
				case '29':
				{
					provincia = 'MÁLAGA';					
					tipoiva = 21;
					break;
				}
				case '52':
				{
					provincia = 'MELILLA';					
					tipoiva = 0;
					break;
				}
				case '30':
				{
					provincia = 'MURCIA';					
					tipoiva = 21;
					break;
				}
				case '31':
				{
					provincia = 'NAVARRA';					
					tipoiva = 21;
					break;
				}
				case '32':
				{
					provincia = 'OURENSE';					
					tipoiva = 21;
					break;
				}
				case '34':
				{
					provincia = 'PALENCIA';					
					tipoiva = 21;
					break;
				}
				case '35':
				{
					provincia = 'PALMAS, LAS';					
					tipoiva = 0;
					break;
				}
				case '36':
				{
					provincia = 'PONTEVEDRA';	
					tipoiva = 21;
					break;					
				}
				case '26':
				{
					provincia = 'RIOJA, LA';					
					tipoiva = 21;
					break;
				}
				case '37':
				{
					provincia = 'SALAMANCA';					
					tipoiva = 21;
					break;
				}
				case '38':
				{
					provincia = 'S.C.TENERIFE';					
					tipoiva = 0;
					break;
				}
				case '40':
				{
					provincia = 'SEGOVIA';
					tipoiva = 21;
					break;
				}
				case '41':
				{
					provincia = 'SEVILLA';					
					tipoiva = 21;
					break;
				}
				case '42':
				{
					provincia = 'SORIA';					
					tipoiva = 21;
					break;
				}
				case '43':
				{
					provincia = 'TARRAGONA';					
					tipoiva = 21;
					break;
				}
				case '44':
				{
					provincia = 'TERUEL';					
					tipoiva = 21;
					break;
				}
				case '45':
				{
					provincia = 'TOLEDO';					
					tipoiva = 21;
					break;
				}
				case '46':
				{
					provincia = 'VALENCIA';					
					tipoiva = 21;
					break;
				}
				case '47':
				{
					provincia = 'VALLADOLID';					
					tipoiva = 21;
					break;
				}
				case '48':
				{
					provincia = 'VIZCAYA';					
					tipoiva = 21;
					break;
				}
				case '49':
				{
					provincia = 'ZAMORA';					
					tipoiva = 21;
					break;
				}
				case '50':
				{
					provincia = 'ZARAGOZA';
					tipoiva = 21;
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
 * @properties={typeid:24,uuid:"DA3981C9-DC3B-4BEB-A0E5-903FE6FA249E"}
 */
function onChangeCIF() {
	if(globals.GCRegistroNuevo == 1)
	{
		if(cif)
		{
			var query = "select [IdCliente],[DescCliente],id from [tbMaestroClientes] where  [CIF] = '" + cif + "' order by idcliente";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var uuid = dataset.getValue(1,3);
			var cli = dataset.getValue(1,1);
			var dcli = dataset.getValue(1,2);
			if(uuid)
			{
				globals.GCshowInfoDialog('Ya se ha registrado este CIF en el cliente '+cli+' - '+dcli,null,'Aceptar',null,null,null)
			}
			else
			{
				//cif = utils.stringReplace(cif,'-','');
				cif = utils.stringTrim(cif)
				cif = utils.stringReplace(cif,' ','');
				if(pais == 'ES' && cif.length != 9) 
				{
					globals.GCshowErrorDialog('En España el CIF se compone de 9 cifras. Corrijalo.',null,'Aceptar',null,null,null)
					elements.fld_cif.requestFocus()
					elements.fld_cif.selectAll()
				}
				/*else{
					try{
						if(pais == 'GR') pais = 'EL'
						if(utils.stringLeft(cif,2) != pais) var vat_number = pais+cif;
						else vat_number = cif;
						var result = plugins.vatid_validator.verifyVATNumber(vat_number)
						}
						catch(ex){
						//vat number structure incorrect
						//plugins.dialogs.showWarningDialog('error',ex.message.substring(21), 'OK');
						globals.GCshowErrorDialog('El CIF es incorrecto. '+ex.message.substring(21),null,'Aceptar',null,null,null)
						}
				}*/
			}
		}
	}
	else
	{
		if(cif)
		{
			//cif = utils.stringReplace(cif,'-','');
			cif = utils.stringTrim(cif)
			cif = utils.stringReplace(cif,' ','');
			if(pais == 'ES' && cif.length != 9) 
			{
				globals.GCshowErrorDialog('En España el CIF se compone de 9 cifras. Corrijalo.',null,'Aceptar',null,null,null)
				elements.fld_cif.requestFocus()
				elements.fld_cif.selectAll()
			}
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F6C7CF7C-7E4E-4E52-BFEC-699505FDDD93"}
 */
function btn_comprcifdni(event) {
	// TODO Auto-generated method stub
	if(!globals.GCisEditing())
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbciferroneos')  
		vSet.loadAllRecords()
		vSet.deleteAllRecords()
		 
		if(forms.FrmClientesGC.id) 
		{
			var cifcli = forms.FrmClientesGC.cif;
			var idcli = forms.FrmClientesGC.idcliente;
			var desccli = forms.FrmClientesGC.desccliente;
			var paiscli = forms.FrmClientesGC.pais;
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
			globals.GCshowInfoDialog('El CIF/DNI de este cliente es correcto.',null,'Aceptar',null,null,null)
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"EDEFAD98-75E9-4B0D-859B-81D9DD6DA66A"}
 */
function btn_comprallcifdni(event) {
	if(!globals.GCisEditing())
	{
		
				/*var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbciferroneos')  
				vSet.loadAllRecords()
				vSet.deleteAllRecords()
				
				var query = "select cif,idcliente,desccliente,pais from tbMaestroClientes ORDER BY IDCLIENTE"		
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
				var rows = dataset.getMaxRowIndex();
				var z=0;
				for(var i=1;i<=rows;i++)
				{
					var cifcli = dataset.getValue(i,1);
					var idcli = dataset.getValue(i,2);
					var desccli = dataset.getValue(i,3);
					var paiscli = dataset.getValue(i,4);
					if(paiscli == 'GR') paiscli = 'EL'
					if(utils.stringLeft(cifcli,2) != paiscli) cifcli = paiscli+cifcli;
					if(cifcli)
					{
						var vat_number = cifcli
						var result = plugins.vatid_validator.verifyVATNumber(vat_number)
						if(result == false)
						{
							//vat number structure incorrect
							//plugins.dialogs.showWarningDialog('error',ex.message.substring(21), 'OK');
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
				}*/
			
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbciferroneos')  
		vSet.loadAllRecords()
		vSet.deleteAllRecords()
		
		var query = "select cif,idcliente,desccliente,pais from tbMaestroClientes ORDER BY IDCLIENTE"		
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
			var n = false;
			var n3 = false;
			if(cifcli)
			{
				//var l = utils.stringRight(cifcli,1);
				//var booleandni = (/[a-zA-Z]/).test(l)
				
				//var n = globals.validateCIFGC(cifcli) 
				//if(n == false) application.output(idcli+' '+desccli)
				
				n = globals.GCcheckCIF(utils.stringTrim(cifcli))
				
				//var n2 = globals.GCcheckNIF(cifcli)
				
				n3 = globals.GCcheckNSS(utils.stringTrim(cifcli))
				
				//if(utils.stringLeft(cifcli,2) != paiscli) cifcli = paiscli+cifcli;
				//var n4 = globals.checkVatNumber(cifcli/*"BE0838141069"*/, {
				//	  countries: [paiscli]// ["BEE", "BE"]
				//});
				
				if(paiscli /*&& paiscli != 'ES'*/)
				{
					var url = new String();
					if(utils.stringLeft(cifcli,2) == paiscli ) 
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
				
				if(n == false && n3 == false /*&& n4 == false*/ && n5 != '{  "isValid" : true,') 
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
			if(rows > 0) globals.GCshowInfoDialog('Los CIF/DNI de los clientes son correctos.',null,'Aceptar',null,null,null)
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CEA3C466-6364-4C3C-B1AA-C1E8EFBF0E65"}
 */
function btn_vacaciones(event) {
	if(globals.GCisEditing()) forms.FrmClientesGC.btn_cancel()
	if(idcliente)
	{
		globals.COD = idcliente;
		globals.GCshowDialogClientesVacaciones('Vacaciones de '+desccliente, null, null, null, null, null, null, null, null, null);
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
 * @properties={typeid:24,uuid:"1A9847CB-0C41-4FF2-B96A-BCB9A834E403"}
 */
function onActionObservacion(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmClientesGC';
	//globals.GCshowDialogObservacion('BD Observaciones', 1, null, null, true,null, null, null, null, null);
	var win = application.getWindow('Observaciones')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Observaciones", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Observaciones';
	//win.resizable = true;
	win.show(forms.dlgObservacionGCNG)
	//win.show(forms.dialog_ObservacionGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"82C42B9A-3063-42A1-A742-011613B10E03"}
 */
function btn_addobservacion(event) {
	// TODO Auto-generated method stub
	/*if(obse_cfa)
	{
		var query = "select id from [tbmaestroobservaciones] where [descripcion] ='"+ obse_cfa +"'"
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		
		var uuid = dataset.getValue(1,1);
		
		if(!uuid)
		{
			forms.FrmObservacionGC.foundset.newRecord(true)
			forms.FrmObservacionGC.validate_autoEnter()
			forms.FrmObservacionGC.descripcion = obse_cfa;
			
			var bool = databaseManager.saveData(forms.FrmObservacionGC.foundset)
			
			if(bool == true) globals.GCshowInfoDialog('Observación añadida correctamente a la Base de Datos.',null,'Aceptar',null,null,null)
		}		
	}*/
	if(!globals.GCisEditing()) globals.GCstartEditing()
	forms.dlg_ObservacionesGC.foundset.newRecord(true)
	forms.dlg_ObservacionesGC.validate_autoEnter()
	if(observaciones)
	{
		var query = "select id from [tbmaestroobservaciones] where [descripcion] ='"+ observaciones +"'"
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)		
		var uuid = dataset.getValue(1,1);		
		if(!uuid)
		{
			forms.dlg_ObservacionesGC.descripcion = observaciones;
		}
	}
	
	//show the "fake" dialog
	globals.GCshowDialogObserv('Nueva Observación', null, null, null, null, null, null, null, null, null);

	//go first field
	forms.dlg_ObservacionesGC.controller.focusFirstField()
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D94673D4-F1B7-4DA5-A906-D34AC9C11AA4"}
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
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"1E7E8670-04B0-4B07-922F-3F9A5E060371"}
 */
function onDataChangePais() {
	if(pais)
	{
		if(pais != 'ES')
		{
			tipoiva = 0;
		}
		else if(codpostal)
		{
			onDataChangeCP()
		}
		else
		{
			tipoiva = 21;
		}
	}
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"AE706D30-486F-4F95-8F68-09DEDE493FF6"}
 */
function btn_listadoClientes(event) {
	
	globals.GCFormulario = 'FrmClientesGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialog_Clientes3')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialog_Clientes3", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Clientes';
	//win.resizable = true;
	//win.show(forms.dialog_Clientes2GC)
	win.show(forms.lst_Clientes2GC)

}
