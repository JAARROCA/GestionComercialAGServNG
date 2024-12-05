/**
 * @properties={typeid:24,uuid:"9E490322-AA63-4710-92B3-1487B2A2EAA1"}
 */
function btn_save() {
	if(!codigo || !descripcion)
	{
		globals.GCshowErrorDialog('Los campos de Código y Descripción son obligatorios.',null,'Aceptar',null,null,null)
	}	
	else
	{
		var editedRecs = databaseManager.getEditedRecords( foundset)
		
		if(editedRecs.length > 0)
		{
			for (var x=0;x<editedRecs.length;x++)
			{
				var cod = editedRecs[x]['codigo'];
				var dataset = editedRecs[x].getChangedData();
				var rows = dataset.getMaxRowIndex()
				for( var i = 1 ; i <= rows ; i++ )
				{
					var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
					var record = vSet.getRecord(vSet.newRecord());
					record.id = application.getUUID()
		            record.tipo = 'OB' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
		elements.lbl_codrequired.visible = false
		elements.btn_histmodificaciones.visible = true
	
		if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
	}
}

/**
 * @properties={typeid:24,uuid:"78A38C9B-0E66-4F7F-9266-1C86DF88DE90"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	
	globals.GCRegistroNuevo = null
	elements.lbl_codrequired.visible = false
	elements.btn_histmodificaciones.visible = true
}

/**
 * @properties={typeid:24,uuid:"46FC2BFC-FC33-4BB7-86FC-18581FD89D49"}
 */
function doEdit()
{
	_super.doEdit()
	elements.fld_denom_fp.bgcolor = '#FFFF00';
	elements.btn_histmodificaciones.visible = false
}

/**
 * @properties={typeid:24,uuid:"ADA1B41B-B192-470C-86E2-C29B95433C60"}
 */
function hide_btn_reset_fields()
{
	_super.hide_btn_reset_fields()
	
}

/**
 * @properties={typeid:24,uuid:"13DE08F2-36B1-4908-BB7D-1852B083037C"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_Observacion = id
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
 * @properties={typeid:24,uuid:"BB5E0E55-7EE4-4B6B-BB4A-08591CA5E8A0"}
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
 * @properties={typeid:24,uuid:"15E96498-0ECD-43AF-9DFD-B70640C3146D"}
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
	forms.lst_ObservacionGC.foundset.loadAllRecords()
	forms.lst_ObservacionGC.btn_sortAsc()
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)
}

/**
 * @properties={typeid:24,uuid:"55F9455C-2E70-4F48-9F69-375354E74CBC"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Observacion_list();
}

/**
 * @properties={typeid:24,uuid:"C9357C24-3F7D-46C6-8F66-32FE3E696A0C"}
 * @AllowToRunInFind
 */
function rpt_Observacion_list()
{
	if(codigo)
	{
		var dobser = 0
		var hobser = 99999999
		
		globals.btn_runJasperReportListadoObservacion(dobser, hobser)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AAB2778C-2BA2-4EB7-B6E0-D970E48C5098"}
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
 * @properties={typeid:24,uuid:"70DE2054-A703-4AD2-BEE0-DA1737D2D1A2"}
 */
function onActiondenom(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	//{
		
	//}
}

/**
 * @properties={typeid:24,uuid:"5F32BD2F-6437-4784-AF9A-1C053862FA27"}
 */
function validate_autoEnter()
{
	globals.GCRegistroNuevo = 1
	id = application.getUUID()
	sub_setNewNumeroLinea()
	elements.fld_denom_fp.requestFocus()
}

/**
 *
 * @properties={typeid:24,uuid:"95B71D3E-A0B6-41BC-BEC5-5514C90952E8"}
 */
function sub_setNewNumeroLinea()
{
	var query = "select [codigo] from [tbmaestroobservaciones] order by codigo desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	codigo = dataset.getValue(1, 1) + 1	
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"F76616C5-C04F-40E8-B004-7A3BC15EA392"}
 */
function validate_beforeDelete()
{
	return 0
}

/**
*
 * @properties={typeid:24,uuid:"E05B7E18-8322-47F8-9449-9B102B4CBE7B"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'OB' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = codigo;
		record.fecha = new Date();
		record.datomodif = descripcion;
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
 * @properties={typeid:24,uuid:"6285C636-15B1-4118-BD41-60B670A53017"}
 */
function handle_shortCut(v_event)
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	globals.GCevento = null
	if(!globals.GCisEditing() && frm == 'FrmObservacionGC' && v_event.getType() == 'control shift M')
	{
		var DREF = codigo.toString()
		if(DREF == null || DREF == '') DREF = '0';
		var HREF = codigo.toString()
		if(HREF == null || HREF == '') HREF = '99999999';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'OB'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6CE51EC6-F136-49D1-9AC1-0E9EA6D5432F"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Observaciones';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de esta Observación';	
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
 * @properties={typeid:24,uuid:"3A32AE8B-EDEC-4A45-9AAB-E46C84E391FB"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Observaciones'.toUpperCase():
		var DREF = '0';
		var HREF = '9999999';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'OB'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de esta Observación'.toUpperCase():
		DREF = forms.FrmObservacionGC.codigo.toString();
		HREF = forms.FrmObservacionGC.codigo.toString();
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'OB'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}
