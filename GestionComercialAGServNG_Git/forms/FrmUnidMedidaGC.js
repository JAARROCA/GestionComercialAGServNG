/**
 * @properties={typeid:24,uuid:"CDCD309D-3A39-4E7D-9642-97E56027F1B1"}
 */
function btn_save() {
	if(!unidade_id || !desc_uni )
	{
		//globals.GCshowErrorDialog('Los campos de Código y Descripción son obligatorios.',null,'Aceptar',null,null,null)
		plugins.webnotificationsToastr.error('Los campos de Código y Descripción son obligatorios.', 'Error')
	}	
	else
	{
		if(globals.GCRegistroNuevo == 1)
		{
			var query = "select unidade_id from tbmaestrounidades where unidade_id ='"+ unidade_id+"'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n != null)
			{
				var methd = 'forms.FrmUnidMedidaGC.foco()';
				//globals.GCshowErrorDialog('Código de Unidad de Medida duplicado!',methd,'Aceptar',null,null,null)
				plugins.webnotificationsToastr.error('Código de Unidad de Medida duplicada! Elija otro Código.', 'Error', null, 'focoID', methd);
 

				if(methd) eval(methd);
			}
			else
			{
				var editedRecs = databaseManager.getEditedRecords( foundset)
				
				if(editedRecs.length > 0)
				{
					for (var x=0;x<editedRecs.length;x++)
					{
						var cod = editedRecs[x]['unidade_id'];
						dataset = editedRecs[x].getChangedData();
						var rows = dataset.getMaxRowIndex()
						for( var i = 1 ; i <= rows ; i++ )
						{
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
							var record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
				            record.tipo = 'UM' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
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
					cod = editedRecs[x]['unidade_id'];
					dataset = editedRecs[x].getChangedData();
					rows = dataset.getMaxRowIndex()
					for( i = 1 ; i <= rows ; i++ )
					{
						vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
			            record.tipo = 'UM' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
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
 * @properties={typeid:24,uuid:"0A4A2D4E-7C03-419C-9FEF-EAFF49A5A34C"}
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
 * @properties={typeid:24,uuid:"1048E2D6-0D86-4103-84D6-56B9A2214922"}
 */
function doEdit()
{
	_super.doEdit()
	
	elements.IdBanco.bgcolor = '#FFFF00';
	elements.fld_nombrebanco.bgcolor = '#FFFF00';
	elements.btn_histmodificaciones.visible = false
	
}

/**
 * @properties={typeid:24,uuid:"FC133CE0-D03D-43D4-9CA0-BC694CD8A482"}
 */
function hide_btn_reset_fields()
{
	_super.hide_btn_reset_fields()
	
}

/**
 * @properties={typeid:24,uuid:"A8ACB188-0BDC-47CC-A920-50FC51938FF6"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_UnidMedida = unidade_id
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
 * @properties={typeid:24,uuid:"D9742567-2BC6-497B-982A-DA4CB1452047"}
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
 * @properties={typeid:24,uuid:"DDFC72FE-C98F-4BF0-B5E4-2446EFE14933"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ) globals.LoadingGC()
	
	forms.lst_UnidMedidaGC.foundset.loadAllRecords()
	forms.lst_UnidMedidaGC.btn_sortAsc()
}

/**
 * @properties={typeid:24,uuid:"3CD22DA6-8E9E-4A34-A70A-CF3C387D0E68"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_UnidMedida_list();
}

/**
 * @properties={typeid:24,uuid:"3D03CFBC-1651-4CFD-A0B9-270A491F4A7C"}
 * @AllowToRunInFind
 */
function rpt_UnidMedida_list()
{
	globals.btn_runJasperReportUnidMedidaGC();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"964D6DB5-097D-43E2-B73F-09D764685E32"}
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
 * @properties={typeid:24,uuid:"0A53A3D1-C434-44C8-BCBD-7171344BEEC8"}
 */
function onActiondenom(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT )
	//{
		
	//}
}

/**
 * @properties={typeid:24,uuid:"45A1FEA2-F0C0-4ED3-A33B-4771EA2F3D0F"}
 */
function validate_autoEnter()
{
	elements.IdBanco.bgcolor = '#feffe4'
	elements.IdBanco.readOnly = false
	elements.IdBanco.visible = true
	elements.lblIdBanco.visible = false
	elements.lbl_codrequired.visible = true;
	globals.GCRegistroNuevo = 1
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"349BC016-22ED-41B9-A077-E5FF125E35B5"}
 */
function validate_beforeDelete()
{
	return 0
}

/**
*
 * @properties={typeid:24,uuid:"CED07E52-27F6-40E2-91B9-22EF7AB11EAC"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'UM' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = unidade_id;
		record.fecha = new Date();
		record.datomodif = desc_uni;
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
 * @properties={typeid:24,uuid:"6DD7A8ED-9515-4D77-AA66-AD1AA3F3782B"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select unidade_id from tbmaestrounidades where unidade_id ='"+ unidade_id+"'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		var methd = 'forms.FrmUnidMedida.foco()';
		//globals.GCshowErrorDialog('Código de Unidad de Medida duplicada! Elija otro Código.',methd,'Aceptar',null,null,null)
		plugins.webnotificationsToastr.error('Código de Unidad de Medida duplicada! Elija otro Código.', 'Error', null, 'focoID', methd);
		if(methd) eval(methd);
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"DA087963-0869-487D-BC33-8B302F6EA1D5"}
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
 * @properties={typeid:24,uuid:"ABFBFC64-3137-4410-B2B6-7FFFC9F02223"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Unidades de Medida';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de esta Unidad de Medida';	
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
 * @properties={typeid:24,uuid:"CC8FABFD-3B17-4240-AE97-587497FB14B9"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Unidades de Medida'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'UM'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de esta Unidad de Medida'.toUpperCase():
		DREF = forms.FrmSwiftBancosGC.idbanco.toString();
		HREF = forms.FrmSwiftBancosGC.idbanco.toString();
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'UM'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"56252E75-38FA-4C9A-830B-F32C3610E1CA"}
 */
function btn_listadoUnidMedida(event) {
	
	globals.GCFormulario = 'FrmUnidMedidaGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialog_UnidMedida3')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialog_UnidMedida3", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Unidades Medidas';
	//win.resizable = true;
	//win.show(forms.dialog_Clientes2GC)
	win.show(forms.lst_UnidMedida2GC)

}
