/**
 * @properties={typeid:24,uuid:"6DE6382A-DA21-488A-A2FD-C02F7E4B486D"}
 */
function btn_save() {
	if(!idbanco || !nombrebanco || !bic)
	{
		globals.GCshowErrorDialog('Los campos de ID Banco, Nombre y SWIFT/BIC son obligatorios.',null,'Aceptar',null,null,null)
	}	
	else
	{
		if(globals.GCRegistroNuevo == 1)
		{
			var query = "select idbanco from swiftbancos where idbanco ='"+ idbanco+"'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n != null)
			{
				var methd = 'forms.FrmSwiftBancosGC.foco()';
				globals.GCshowErrorDialog('Código de Banco duplicado!',methd,'Aceptar',null,null,null)
			}
			else
			{
				var editedRecs = databaseManager.getEditedRecords( foundset)
				
				if(editedRecs.length > 0)
				{
					for (var x=0;x<editedRecs.length;x++)
					{
						var cod = editedRecs[x]['idbanco'];
						dataset = editedRecs[x].getChangedData();
						var rows = dataset.getMaxRowIndex()
						for( var i = 1 ; i <= rows ; i++ )
						{
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
							var record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
				            record.tipo = 'SW' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
				
				
				elements.IdBanco.bgcolor = '#f0f0f0'
				elements.IdBanco.readOnly = true
				elements.IdBanco.visible = false
				elements.lblIdBanco.visible = true
				elements.lbl_codrequired.visible = false;
				elements.btn_histmodificaciones.visible = true
				globals.GCRegistroNuevo = null
				
				
			
				if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ) onRecordSelect();
				//for web client - to refresh buttons
				
			}
		}
		else
		{
			editedRecs = databaseManager.getEditedRecords( foundset)
			
			if(editedRecs.length > 0)
			{
				for (x=0;x<editedRecs.length;x++)
				{
					cod = editedRecs[x]['idbanco'];
					dataset = editedRecs[x].getChangedData();
					rows = dataset.getMaxRowIndex()
					for( i = 1 ; i <= rows ; i++ )
					{
						vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
			            record.tipo = 'SW' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
			
			
			elements.IdBanco.bgcolor = '#f0f0f0'
			elements.IdBanco.readOnly = true
			elements.IdBanco.visible = false
			elements.lblIdBanco.visible = true
			elements.lbl_codrequired.visible = false;
			elements.btn_histmodificaciones.visible = true
			globals.GCRegistroNuevo = null
			
			
		
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ) onRecordSelect();
			//for web client - to refresh buttons
			
		}
	}
}

/**
 * @properties={typeid:24,uuid:"395A1829-8AB3-48CE-9D48-1D3C61CD9825"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	
	elements.IdBanco.bgcolor = '#f0f0f0'
	elements.IdBanco.readOnly = true
	elements.IdBanco.visible = false
	elements.lblIdBanco.visible = true
	elements.lbl_codrequired.visible = false;
	elements.btn_histmodificaciones.visible = true
	globals.GCRegistroNuevo = null
}

/**
 * @properties={typeid:24,uuid:"34AEE316-5751-4F00-9E39-7EADEA76B66D"}
 */
function doEdit()
{
	_super.doEdit()
	
	elements.IdBanco.bgcolor = '#FFFF00';
	elements.fld_nombrebanco.bgcolor = '#FFFF00';
	elements.fld_bic.bgcolor = '#FFFF00';
	elements.btn_histmodificaciones.visible = false
	
}

/**
 * @properties={typeid:24,uuid:"4A292A0C-B1C1-449B-A6F6-533A2AF396A8"}
 */
function hide_btn_reset_fields()
{
	_super.hide_btn_reset_fields()
	
}

/**
 * @properties={typeid:24,uuid:"C3574DE3-D423-42D6-B77D-0B5115E51C28"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_SWIFTBancos = id
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
 * @properties={typeid:24,uuid:"777D028E-E056-4908-A7D9-315E8FBEFEE7"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function onShow(firstShow,event)
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
	elements.IdBanco.visible = false
	elements.lblIdBanco.visible = true
	foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	globals.GCnav_search = null
	globals.GCRegistroNuevo = null
	globals.GCsetupRecordStatus();
	
	
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D42781B6-998D-4080-8641-CCF0537CA388"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ) globals.LoadingGC()
	
	forms.lst_SwiftBancosGC.foundset.loadAllRecords()
	forms.lst_SwiftBancosGC.btn_sortAsc()
}

/**
 * @properties={typeid:24,uuid:"B9C7310F-859F-4ED7-AD0D-9128A641E50D"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_SWIFTBancos_list();
}

/**
 * @properties={typeid:24,uuid:"1192FF4F-9A13-4C6C-8A49-93C07C1536F3"}
 * @AllowToRunInFind
 */
function rpt_SWIFTBancos_list()
{
	globals.btn_runJasperReportSWIFTBancosGC();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BAC33FAD-F20B-4E91-A9BA-35C66950D966"}
 */
function onActioncodigofp(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT )
	//{
		elements.fld_nombrebanco.requestFocus()
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"991C1D8D-40EE-4AE5-8A13-2FED078D33C5"}
 */
function onActiondenom(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT )
	//{
		elements.fld_bic.requestFocus()
	//}
}

/**
 * @properties={typeid:24,uuid:"49535A08-9645-405E-8F42-BED38D227EF3"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	elements.IdBanco.bgcolor = '#feffe4'
	elements.IdBanco.readOnly = false
	elements.IdBanco.visible = true
	elements.lblIdBanco.visible = false
	elements.lbl_codrequired.visible = true;
	globals.GCRegistroNuevo = 1
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"91AB09EE-E174-44C6-8D80-59A9B59514CD"}
 */
function validate_beforeDelete()
{
	return 0
}

/**
*
 * @properties={typeid:24,uuid:"7BA4896E-17C8-416C-9CCD-73C271556502"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'SW' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = idbanco;
		record.fecha = new Date();
		record.datomodif = nombrebanco;
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
		
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"96026F9B-04B7-485D-A33D-AB036C4238ED"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [IdBanco] from [SwiftBancos] WHERE [IdBanco] = '" + idbanco + "'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		var methd = 'forms.FrmSwiftBancosGC.foco()';
		globals.GCshowErrorDialog('Banco duplicado!',methd,'Aceptar',null,null,null)
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"66F57504-80B8-4E5B-88F6-799C8407D59C"}
 */
function foco() {
	elements.IdBanco.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"9EC5ADFA-B410-4EAD-BB4C-BD11C1A226A7"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Swift/BIC';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de este Swift/BIC';	
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
 * @properties={typeid:24,uuid:"31A9315F-9363-451C-ADD3-2D16B4556464"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Swift/BIC'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'SW'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de este Swift/BIC'.toUpperCase():
		DREF = forms.FrmSwiftBancosGC.idbanco.toString();
		HREF = forms.FrmSwiftBancosGC.idbanco.toString();
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'SW'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}
