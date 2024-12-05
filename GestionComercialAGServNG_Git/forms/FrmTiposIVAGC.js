/**
 * @properties={typeid:24,uuid:"E9772C9B-7595-4504-9BF6-2F4B17C73B0A"}
 * @SuppressWarnings(deprecated)
 */
function btn_save() {
	if(!desctipoiva)
	{
		elements.fld_denom_fp.requestFocus()
		globals.GCshowErrorDialog('El campo Descripción es obligatorio.',null,'Aceptar',null,null,null)
	}	
	else
	{
		if(globals.GCRegistroNuevo == 1)
		{
			var query = "select [ID] from [tbMaestroTipoIva] where [Factor] = " + factor;
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n != null)
			{
				var methd = 'forms.FrmTiposIVAGC.foco()';
				globals.GCshowErrorDialog('Iva duplicado!',methd,'Aceptar',null,null,null)
			}
			else
			{
				var editedRecs = databaseManager.getEditedRecords( foundset)
				
				if(editedRecs.length > 0)
				{
					for (var x=0;x<editedRecs.length;x++)
					{
						var cod = editedRecs[x]['factor']+'%';
						dataset = editedRecs[x].getChangedData();
						var rows = dataset.getMaxRowIndex()
						for( var i = 1 ; i <= rows ; i++ )
						{
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
							var record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
				            record.tipo = 'IVA' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
				elements.btn_histmodificaciones.visible = true
			
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
					cod = editedRecs[x]['factor']+'%';
					dataset = editedRecs[x].getChangedData();
					rows = dataset.getMaxRowIndex()
					for( i = 1 ; i <= rows ; i++ )
					{
						vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
			            record.tipo = 'IVA' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
			elements.btn_histmodificaciones.visible = true
			
		
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
		}
	}
}

/**
 * @properties={typeid:24,uuid:"9055AEAF-1501-4CC2-B212-899123168212"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	
	globals.GCRegistroNuevo = null
	elements.btn_histmodificaciones.visible = true
	
}

/**
 * @properties={typeid:24,uuid:"40795A7F-0742-4ED6-8A55-E9396AB25CCC"}
 */
function doEdit()
{
	_super.doEdit()
	elements.fld_denom_fp.bgcolor = '#FFFF00';
	elements.fld_factor.bgcolor = '#FFFF00';
	elements.btn_histmodificaciones.visible = false
	
}

/**
 * @properties={typeid:24,uuid:"E816B530-E15B-4E85-BB08-3A21B5EA0E93"}
 */
function hide_btn_reset_fields()
{
	_super.hide_btn_reset_fields()
	
}

/**
 * @properties={typeid:24,uuid:"C66F7A7F-5766-4D53-AF5F-8DEE1C434807"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_TipoIva = id
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
 * @properties={typeid:24,uuid:"9C99A8C2-92C4-4D1D-977F-1F0F7C84E904"}
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
 * @properties={typeid:24,uuid:"04CA5057-6935-43FB-8C93-F08AC0E31699"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	/*var ds = controller.getDataSource().split('/');
	databaseManager.removeTableFilterParam(globals.conex,'FiltradoFormaPago')
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	foundset.loadAllRecords()
	var success = databaseManager.addTableFilterParam(globals.conex, ds[2], 'idejercicio', '=', globals.Empresa, 'FiltradoFormaPago')
	foundset.loadAllRecords()*/
	forms.lst_TiposIVAGC.foundset.loadAllRecords()
	forms.lst_TiposIVAGC.btn_sortDesc()
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)
}

/**
 * @properties={typeid:24,uuid:"56AF2929-A6C0-40FC-970F-613F4CA4AE7E"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_TiposIVA_list();
}

/**
 * @properties={typeid:24,uuid:"E76CCC7A-4AC8-4EC7-B910-21671D7ED77D"}
 * @AllowToRunInFind
 */
function rpt_TiposIVA_list()
{
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"30C9FBEE-582F-4C48-91AE-8A3625DDFA34"}
 */
function onActiondenom(event) {
	// TODO Auto-generated method stub
	elements.fld_factor.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"82DDB8B9-D2C5-4433-AF6B-A556D799055E"}
 */
function onActionfactor(event) {
	// TODO Auto-generated method stub
	elements.fld_ivare.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"1BCCD49C-E73E-4590-8805-3D3440CB7821"}
 */
function validate_autoEnter()
{
	globals.GCRegistroNuevo = 1
	id = application.getUUID()
	
	
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"E0EBB789-958A-4B7A-A334-0AA93D6227D8"}
 */
function validate_beforeDelete()
{
	return 0
}

/**
*
 * @properties={typeid:24,uuid:"61134055-DC0F-45CE-BD5C-91385BA1F930"}
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
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"6940557C-7A54-43E6-ABC3-931CFE1CFA0E"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [id] from [tbmaestrotipoiva] where [factor] = " + factor;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		var methd = 'forms.FrmTiposIVAGC.foco()';
		globals.GCshowErrorDialog('IVA ya existente!',methd,'Aceptar',null,null,null)
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"6E3F30CE-F714-49FA-9616-984AAE597B86"}
 */
function foco() {
	elements.fld_factor.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D5AEB508-6B3D-4A1A-8DF8-CCBEA31DA1BA"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Tipos IVA';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de este Tipos IVA';	
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
 * @properties={typeid:24,uuid:"0718BA05-7BC1-4D11-B036-02FFDE9DDC52"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Tipos IVA'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'IVA'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de este Tipos IVA'.toUpperCase():
		DREF = forms.FrmTiposIVAGC.factor.toString()+'%';
		HREF = forms.FrmTiposIVAGC.factor.toString()+'%';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'IVA'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}
