/**
 * @properties={typeid:24,uuid:"D2B68AE3-56F5-4E69-A5C6-292E75388D7F"}
 */
function btn_save() {
	if(!idfamilia || !descfamilia)
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
				var cod = editedRecs[x]['idfamilia'];
				var dataset = editedRecs[x].getChangedData();
				var rows = dataset.getMaxRowIndex()
				for( var i = 1 ; i <= rows ; i++ )
				{
					var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
					var record = vSet.getRecord(vSet.newRecord());
					record.id = application.getUUID()
		            record.tipo = 'F' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
		elements.btn_histmodificaciones.visible = true
	
		if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
	}
}

/**
 * @properties={typeid:24,uuid:"EE4C5726-097A-45A3-8584-FBE198AE09FF"}
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
	elements.btn_histmodificaciones.visible = true
}

/**
 * @properties={typeid:24,uuid:"326044F0-E046-40FA-9AC3-D94BC912362A"}
 */
function doEdit()
{
	_super.doEdit()
	elements.codig_fp.bgcolor = '#FFFF00';
	elements.fld_denom_fp.bgcolor = '#FFFF00';
	elements.btn_histmodificaciones.visible = false
}

/**
 * @properties={typeid:24,uuid:"FCC3F422-6DC5-447D-9319-F42020587690"}
 */
function hide_btn_reset_fields()
{
	_super.hide_btn_reset_fields()
	
}

/**
 * @properties={typeid:24,uuid:"F3BD2033-D60D-48C3-B0CA-84DE0F0BD6A8"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_Familia = id
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
 * @properties={typeid:24,uuid:"0D8294A4-F4AA-4AEF-B7FE-6B6C80C257E5"}
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
 * @properties={typeid:24,uuid:"F916A70A-BAAF-408B-9ADA-03FF240EB49E"}
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
	forms.lst_FamiliasGC.foundset.loadAllRecords()
	forms.lst_FamiliasGC.btn_sortAsc()
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)
}

/**
 * @properties={typeid:24,uuid:"5C815B91-8B68-4012-91DB-AB1000AF3B7B"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Familias_list();
}

/**
 * @properties={typeid:24,uuid:"2540BECA-CAA0-4357-98EC-A4655AB57D2B"}
 * @AllowToRunInFind
 */
function rpt_Familias_list()
{
	if(idfamilia)
	{
		var dfam = '0'
		var hfam = 'ZZZZZZ'
		
		globals.btn_runJasperReportListadoFamilias(dfam, hfam)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C7B0A6F6-089A-4ED2-935C-2E907CB6791A"}
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
 * @properties={typeid:24,uuid:"6FA8C57E-A511-4EC5-A1DE-6CF6ADAA5D08"}
 */
function onActiondenom(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	//{
		
	//}
}

/**
 * @properties={typeid:24,uuid:"3AFED111-264F-4BEF-8DF6-D3958E3C4242"}
 */
function validate_autoEnter()
{
	globals.GCRegistroNuevo = 1
	id = application.getUUID()
	elements.codig_fp.bgcolor = '#feffe4'
	elements.codig_fp.readOnly = false
	elements.codig_fp.visible = true
	elements.lblcodig_fp.visible = false
	elements.lbl_codrequired.visible = true
	
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"9B28A29B-36A9-4436-B11D-EB017CB572EC"}
 */
function validate_beforeDelete()
{
	return 0
}

/**
*
 * @properties={typeid:24,uuid:"7457E7CA-9325-4EBC-ABC2-12115EB059DA"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'F' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = idfamilia;
		record.fecha = new Date();
		record.datomodif = descfamilia;
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
 * @properties={typeid:24,uuid:"6EBEE8E6-A19C-469A-9DDE-CAAAA9C8314C"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [idfamilia] from [tbMaestroFamila] where [idfamilia] = '" + idfamilia + "'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		var methd = 'forms.FrmFamiliasGC.foco()';
		globals.GCshowErrorDialog('Familia duplicada!',methd,'Aceptar',null,null,null)
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"9524EEF5-DF37-483A-9138-AB590017EC41"}
 */
function foco() {
	elements.codig_fp.requestFocus()
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
 * @properties={typeid:24,uuid:"FEF88D74-3E61-4F8B-9E38-6D04655E4F90"}
 */
function handle_shortCut(v_event)
{
	var frm = currentcontroller.getName()
	globals.GCevento = null
	if(!globals.GCisEditing() && frm == 'FrmFamiliasGC' && v_event.getType() == 'control shift M')
	{
		var DREF = idfamilia.toString()
		if(DREF == null || DREF == '') DREF = '';
		var HREF = idfamilia.toString()
		if(HREF == null || HREF == '') HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'F'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2ABE7605-4B4F-4461-AB60-99B8B678FFB1"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Familias';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de esta Familia';	
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
 * @properties={typeid:24,uuid:"D21CA6A0-B3AC-4CA2-B35B-E637218A7B0D"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Familias'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'F'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de esta Familia'.toUpperCase():
		DREF = forms.FrmFamiliasGC.idfamilia.toString();
		HREF = forms.FrmFamiliasGC.idfamilia.toString();
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'F'		
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
 * @properties={typeid:24,uuid:"69B23877-9443-47AB-84CD-7D62E575ACF1"}
 */
function btn_listadoFamilias(event) {
	
	globals.GCFormulario = 'FrmFamiliasGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialog_Familias3')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialog_Familias3", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Familias';
	//win.resizable = true;
	//win.show(forms.dialog_Clientes2GC)
	win.show(forms.lst_Familias2GC)

}
