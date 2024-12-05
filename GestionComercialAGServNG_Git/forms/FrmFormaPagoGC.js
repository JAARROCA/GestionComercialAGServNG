/**
 * @type {Array}
 *
 *
 * @properties={typeid:35,uuid:"A93E758B-4E5C-4C4D-BD01-DA479ECDF12C",variableType:-4}
 */
var editedRecs;

/**
 * @properties={typeid:24,uuid:"D8F177BB-0655-4C2D-AA4F-CD389F4126F3"}
 */
function btn_save() {
	if(!codig_fp)
	{
		elements.codig_fp.requestFocus()
		globals.GCshowErrorDialog('El campo de Código es obligatorio.',null,'Aceptar',null,null,null)
	}	
	else if(!denom_fp)
	{
		elements.fld_denom_fp.requestFocus()
		globals.GCshowErrorDialog('El campo Descripción es obligatorio.',null,'Aceptar',null,null,null)
	}	
	else
	{
		if(globals.GCRegistroNuevo == 1)
		{
			var query = "select [codig_fp] from [tbmaestroformpago] where  [codig_fp] = '" + codig_fp + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n != null)
			{
				var methd = 'forms.FrmFormaPagoGC.foco()';
				globals.GCshowErrorDialog('Código de Forma de Pago duplicado!',methd,'Aceptar',null,null,null)
			}
			else
			{
				/*query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var Empresa = dataset.getValue(1,1);
				var con = dataset.getValue(1,2);
				editedRecs = databaseManager.getEditedRecords( foundset)
				*/
				editedRecs = databaseManager.getEditedRecords( foundset)
				if(editedRecs.length > 0)
				{
					for (var x=0;x<editedRecs.length;x++)
					{
						var cod = editedRecs[x]['codig_fp'];
						dataset = editedRecs[x].getChangedData();
						var rows = dataset.getMaxRowIndex()
						for( var i = 1 ; i <= rows ; i++ )
						{
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
							var record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
				            record.tipo = 'FP' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
				
				globals.GCRegistroNuevo = null
				elements.codig_fp.bgcolor = '#f0f0f0'
				elements.codig_fp.readOnly = true
				elements.codig_fp.visible = false
				elements.lblcodig_fp.visible = true
				elements.lbl_codrequired.visible = false
				elements.fld_tipocuentaefec_fpc.visible = true
				elements.fld_tipocuentaefec_fp.visible = false
				elements.fld_tipocuentavenc_fpc.visible = true
				elements.fld_tipocuentavenc_fp.visible = false
				elements.btn_histmodificaciones.visible = true
			
				if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
				/*if(con && editedRecs.length > 0 && Empresa)
				{
					methd = 'forms.FrmFormaPagoGC.ActualizarConta(event)'
					globals.GCshowQuestionDialog("¿Desea que los datos modificados se actualicen también en la contabilidad '"+Empresa+"'?",methd,'No','Si',null,null)
				}*/
			}
		}
		else
		{
			/*query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			Empresa = dataset.getValue(1,1);
			con = dataset.getValue(1,2);
			editedRecs = databaseManager.getEditedRecords( foundset)
			*/
			editedRecs = databaseManager.getEditedRecords( foundset)
			if(editedRecs.length > 0)
			{
				for (x=0;x<editedRecs.length;x++)
				{
					cod = editedRecs[x]['codig_fp'];
					dataset = editedRecs[x].getChangedData();
					rows = dataset.getMaxRowIndex()
					for( i = 1 ; i <= rows ; i++ )
					{
						vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
			            record.tipo = 'FP' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
			
			globals.GCRegistroNuevo = null
			elements.codig_fp.bgcolor = '#f0f0f0'
			elements.codig_fp.readOnly = true
			elements.codig_fp.visible = false
			elements.lblcodig_fp.visible = true
			elements.lbl_codrequired.visible = false
			elements.fld_tipocuentaefec_fpc.visible = true
			elements.fld_tipocuentaefec_fp.visible = false
			elements.fld_tipocuentavenc_fpc.visible = true
			elements.fld_tipocuentavenc_fp.visible = false
			elements.btn_histmodificaciones.visible = true
		
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
			/*if(editedRecs.length > 0 && Empresa && con)
			{
				methd = 'forms.FrmFormaPagoGC.ActualizarConta(event)'
				globals.GCshowQuestionDialog("¿Desea que los datos modificados se actualicen también en la contabilidad '"+Empresa+"'?",methd,'No','Si',null,null)
			}*/
		}
	}	
}

/**
 * @properties={typeid:24,uuid:"37A24D5F-C7AB-4896-9852-4A2A9958A4FA"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	
	globals.GCRegistroNuevo = null
	elements.codig_fp.bgcolor = '#f0f0f0'
	elements.codig_fp.readOnly = true
	elements.codig_fp.visible = false
	elements.lblcodig_fp.visible = true
	elements.lbl_codrequired.visible = false
	elements.fld_tipocuentaefec_fpc.visible = true
	elements.fld_tipocuentaefec_fp.visible = false
	elements.fld_tipocuentavenc_fpc.visible = true
	elements.fld_tipocuentavenc_fp.visible = false
	elements.btn_histmodificaciones.visible = true
}

/**
 * @properties={typeid:24,uuid:"9253B82A-36B3-4F93-AD95-00FC62631705"}
 */
function doEdit()
{
	_super.doEdit()
	elements.codig_fp.bgcolor = '#FFFF00';
	elements.fld_denom_fp.bgcolor = '#FFFF00';
	elements.fld_tipocuentaefec_fp.visible = true
	elements.fld_tipocuentaefec_fpc.visible = false
	elements.fld_tipocuentavenc_fp.visible = true
	elements.fld_tipocuentavenc_fpc.visible = false
	elements.btn_histmodificaciones.visible = true
}

/**
 * @properties={typeid:24,uuid:"076CFAF7-63E5-4038-8BF6-4A415AF42027"}
 */
function hide_btn_reset_fields()
{
	_super.hide_btn_reset_fields()
	
}

/**
 * @properties={typeid:24,uuid:"BB54AD1F-4E56-4794-A51C-4C03C17DC769"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_FormaPago = id
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
 * @properties={typeid:24,uuid:"1CE9111A-0D9E-4764-9555-F456F020948B"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function onShow(firstShow, event)
{
	if(!globals.GClogin_usuario) globals.btn_SalirGC(event)
	 btn_cancel();
	onLoad(event)
	//make read only
	globals.GCenableBgElements();
	controller.readOnly = true
	elements.codig_fp.visible = false
	elements.lblcodig_fp.visible = true
	elements.fld_tipocuentaefec_fpc.visible = true
	elements.fld_tipocuentaefec_fp.visible = false
	elements.fld_tipocuentavenc_fpc.visible = true
	elements.fld_tipocuentavenc_fp.visible = false
	//hide save/cancel btsn
	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
	globals.GCnav_search = null
	globals.GCsetupRecordStatus();
	
	
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"66DD9A66-9A6B-4960-BFA7-C6DA78EB2EE1"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	plugins.window.createShortcut('control shift M', handle_shortCut);
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	/*var ds = controller.getDataSource().split('/');
	databaseManager.removeTableFilterParam(globals.conex,'FiltradoFormaPago')
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	foundset.loadAllRecords()
	var success = databaseManager.addTableFilterParam(globals.conex, ds[2], 'idejercicio', '=', globals.Empresa, 'FiltradoFormaPago')
	foundset.loadAllRecords()*/
	forms.lst_FormaPagoGC.foundset.loadAllRecords()
	forms.lst_FormaPagoGC.btn_sortAsc()
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)
}

/**
 * @properties={typeid:24,uuid:"2752DFBE-24B7-4BBF-9012-4AA315641D2A"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_FormasPago_list();
}

/**
 * @properties={typeid:24,uuid:"AA744FFD-8A69-42D9-9F97-7F4C697FABFD"}
 * @AllowToRunInFind
 */
function rpt_FormasPago_list()
{
	globals.btn_runJasperReportListadoFP()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1A965E2F-98A2-4703-B006-91836B689E34"}
 */
function onActioncodigofp(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	//{
		elements.fld_denom_fp.requestFocus()
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8BAE4DF3-802B-4B46-A871-D9099417CB97"}
 */
function onActiondenom(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	//{
		elements.fld_ngiro_fp.requestFocus()
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC7562FB-CCD7-4908-B89D-810F759A3FD9"}
 */
function onActionngiro(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	//{
		elements.fld_mefec_fp.requestFocus()
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"04E6F309-34FA-49AA-BE28-224D5ADF52F5"}
 */
function onActionmefec(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	//{
		elements.fld_mprve_fp.requestFocus()
	//}
}

/**
 * @properties={typeid:24,uuid:"AAFB43D8-0464-4DA3-B389-A8B9219315C9"}
 */
function validate_autoEnter()
{
	globals.GCRegistroNuevo = 1
	id = application.getUUID()
	tipocuentaefec_fp = 'D'
	tipocuentavenc = 'D'
	elements.codig_fp.bgcolor = '#feffe4'
	elements.codig_fp.readOnly = false
	elements.codig_fp.visible = true
	elements.lblcodig_fp.visible = false
	elements.lbl_codrequired.visible = true
	
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"37BD39D5-382F-4BED-89A8-3826D0DFB89D"}
 */
function validate_beforeDelete()
{
	return 0
}

/**
*
 * @properties={typeid:24,uuid:"9C6B0B8A-5DB8-4A76-8D14-7AD3CDD740D6"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'FP' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = codig_fp;
		record.fecha = new Date();
		record.datomodif = denom_fp;
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
 *
 * @properties={typeid:24,uuid:"726F53CD-1651-4686-BA9F-1226CDCDD0AC"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [codig_fp] from [tbmaestroformpago] where [codig_fp] = '" + codig_fp + "'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		var methd = 'forms.FrmFormaPagoGC.foco()';
		globals.GCshowErrorDialog('Forma de Pago duplicada!',methd,'Aceptar',null,null,null)
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"F0288D34-45EF-4097-9832-E3A49320B3EA"}
 */
function foco() {
	elements.codig_fp.requestFocus()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"96ABA4F9-1FA3-4FE2-84F6-3450DAEDDC55"}
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
			var cod = editedRecs[x]['codig_fp'];
			
				
				
				query = "select ID from formpago where idejercicio = '"+Empresa+"' and "+
						"codig_fp ='"+cod+"'"
				dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
				var uuid = dataset.getValue(1,1)
				var vSet2 = databaseManager.getFoundSet(con, 'formpago') 
				if(uuid)
				{
					vSet2.loadRecords(databaseManager.convertToDataSet([uuid])) 
					var record = vSet2.getSelectedRecord();
					
					if( record['denom_fp'] != editedRecs[x]['denom_fp']) record['denom_fp'] = editedRecs[x]['denom_fp'];
					if(record['ngiro_fp'] != editedRecs[x]['ngiro_fp']) record['ngiro_fp'] = editedRecs[x]['ngiro_fp'];
					if(record['mefec_fp'] != editedRecs[x]['mefec_fp']) record['mefec_fp'] = editedRecs[x]['mefec_fp'];
					if(record['tipocuentaefec_fp'] != editedRecs[x]['tipocuentaefec_fp']) record['tipocuentaefec_fp'] = editedRecs[x]['tipocuentaefec_fp'];
					if(record['mprve_fp'] != editedRecs[x]['mprve_fp']) record['mprve_fp'] = editedRecs[x]['mprve_fp'];
					if(record['tipocuentavenc'] != editedRecs[x]['tipocuentavenc']) record['tipocuentavenc'] = editedRecs[x]['tipocuentavenc'];
					
					if(record.getChangedData().getMaxRowIndex() > 0)	databaseManager.saveData(record)
				}
				else
				{
					vSet2.newRecord();
					vSet2['id'] = application.getUUID();
					vSet2['idejercicio'] = Empresa;
					vSet2['codig_fp'] = cod;
					vSet2['denom_fp'] = editedRecs[x]['denom_fp'];
					vSet2['ngiro_fp'] = editedRecs[x]['ngiro_fp'];
					vSet2['mefec_fp'] = editedRecs[x]['mefec_fp'];
					vSet2['tipocuentaefec_fp'] = editedRecs[x]['tipocuentaefec_fp'];
					vSet2['mprve_fp'] = editedRecs[x]['mprve_fp'];
					vSet2['tipocuentavenc'] = editedRecs[x]['tipocuentavenc'];
						
					databaseManager.saveData(vSet2)
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
 *
 * @properties={typeid:24,uuid:"D6BCE11D-602B-4BC4-8429-CA6A3A2F3EE4"}
 */
function handle_shortCut(v_event)
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	globals.GCevento = null
	if(!globals.GCisEditing() && (frm == 'FrmFormaPagoGC' || frm == 'FrmFormaPago2GC') && v_event.getType() == 'control shift M')
	{
		var DREF = codig_fp.toString()
		if(DREF == null || DREF == '') DREF = '';
		var HREF = codig_fp.toString()
		if(HREF == null || HREF == '') HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'FP'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"75C83017-88B3-407E-A115-09378330B138"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Formas de Pago';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de esta Forma de Pago';	
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
 * @properties={typeid:24,uuid:"61D8E836-A16C-43F5-8BF4-7D5392ACAB4D"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Formas de Pago'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'FP'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de esta Forma de Pago'.toUpperCase():
		DREF = forms.FrmFormaPagoGC.codig_fp.toString();
		HREF = forms.FrmFormaPagoGC.codig_fp.toString();
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'FP'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}
