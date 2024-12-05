/**
 * @properties={typeid:24,uuid:"622A852B-ACE0-45E9-B66C-36512DAD64C3"}
 */
function btn_save() {
	if(!codigo)
	{
		elements.idcodigo.requestFocus()
		globals.GCshowErrorDialog('Falta introducir el código del Material.',null,'Aceptar',null,null,null)
	}
	else if(!descripcion)
	{
		elements.fld_descripcion.requestFocus()
		globals.GCshowErrorDialog('Falta introducir la descripción del Material.',null,'Aceptar',null,null,null)
	}	
	else
	{
		if(globals.GCRegistroNuevo == 1)
		{
			var query = "select [codigo] from [dbo].[tbMaestroMateriales] where [codigo] = '" + codigo + "'"
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n != null)
			{
				elements.idcodigo.selectAll()
				elements.idcodigo.requestFocus()
				globals.GCshowErrorDialog('Código duplicado!Elija otro.',null,'Aceptar',null,null,null)
			}
			else
			{
				var editedRecs = databaseManager.getEditedRecords( foundset)
				for (var x=0;x<editedRecs.length;x++)
				{
					var cod = editedRecs[x]['codigo'];
					dataset = editedRecs[x].getChangedData();
					var rows = dataset.getMaxRowIndex()
					for( var i = 1 ; i <= rows ; i++ )
					{
						var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
						var record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
			            record.tipo = 'M' //(A=Piezas) (M=Materiales) (E=Procesos) (R=Estructuras) (C=Clientes) (P=Proveedores)
						record.codigo = cod
						record.fecha = new Date()
						record.datomodif = dataset.getValue(i,1)
						record.anterior = dataset.getValue(i,2)
						record.despues = dataset.getValue(i,3)
						record.usuario = globals.GClogin_usuario
						
						databaseManager.saveData(record)
					    application.output(cod+' '+dataset.getValue(i,1) +' '+ dataset.getValue(i,2) +' '+ dataset.getValue(i,3));
					}
				}
				_super.btn_save()
				var artid = id;
				var result = foundset.selectRecord(artid)
				var fsCount = databaseManager.getFoundSetCount(foundset);
				while(result==false)
				{
					if(fsCount == foundset.getSize())
					{
					return;
					}
				foundset.setSelectedIndex(foundset.getSize());
				result = foundset.selectRecord(artid);
				}
				globals.GCRegistroNuevo = null
				
			
				elements.idcodigo.bgcolor = '#f0f0f0'
				elements.idcodigo.readOnly = true
				elements.idcodigo.visible = false
				elements.lblcodigo.visible = true
				elements.lbl_codrequired.visible = false
				elements.BtnFamilia.visible = false
				elements.btn_histmodificaciones.visible = true
				
				//do sort and hilight the newly added (edited) record
				
			
				if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
			}
		}
		else
		{
			editedRecs = databaseManager.getEditedRecords( foundset)
			for (x=0;x<editedRecs.length;x++)
			{
				cod = editedRecs[x]['codigo'];
				dataset = editedRecs[x].getChangedData();
				rows = dataset.getMaxRowIndex()
				for(i = 1 ; i <= rows ; i++ )
				{
					vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
					record = vSet.getRecord(vSet.newRecord());
		            record.id = application.getUUID()
					record.tipo = 'M' //(A=Piezas) (M=Materiales) (E=Procesos) (R=Estructuras) (C=Clientes) (P=Proveedores)
					record.codigo = cod
					record.fecha = new Date()
					record.datomodif = dataset.getValue(i,1)
					record.anterior = dataset.getValue(i,2)
					record.despues = dataset.getValue(i,3)
					record.usuario = globals.GClogin_usuario
					
					databaseManager.saveData(record)
				    application.output(cod+' '+dataset.getValue(i,1) +' '+ dataset.getValue(i,2) +' '+ dataset.getValue(i,3));
				}
			}
			_super.btn_save()
			artid = id;
				result = foundset.selectRecord(artid)
				fsCount = databaseManager.getFoundSetCount(foundset);
				while(result==false)
				{
					if(fsCount == foundset.getSize())
					{
					return;
					}
				foundset.setSelectedIndex(foundset.getSize());
				result = foundset.selectRecord(artid);
				}
				globals.GCRegistroNuevo = null
				
			
				elements.idcodigo.bgcolor = '#f0f0f0'
				elements.idcodigo.readOnly = true
				elements.idcodigo.visible = false
				elements.lblcodigo.visible = true
				elements.lbl_codrequired.visible = false
				elements.BtnFamilia.visible = false
				elements.btn_histmodificaciones.visible = true
				
			//do sort and hilight the newly added (edited) record
			
		
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
		}
	}
}

/**
 * @properties={typeid:24,uuid:"54AF397B-79D3-45B3-A565-CA3C5D584B15"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	
	globals.GCRegistroNuevo = null
	elements.idcodigo.bgcolor = '#f0f0f0'
	elements.idcodigo.readOnly = true
	elements.idcodigo.visible = false
	elements.lblcodigo.visible = true
	elements.lbl_codrequired.visible = false
	elements.btn_histmodificaciones.visible = true
	elements.BtnFamilia.visible = false	
}

/**
 * @properties={typeid:24,uuid:"24ED5D86-BDB2-4E0D-8755-B1807BA8ED58"}
 */
function doEdit()
{
	_super.doEdit()
	
	elements.idcodigo.bgcolor = '#FFFF00';
	elements.fld_descripcion.bgcolor = '#FFFF00';
	elements.BtnFamilia.visible = true;
	elements.btn_histmodificaciones.visible = false
	
	
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
 * @properties={typeid:24,uuid:"8CF744E7-A00F-4C11-93C4-9671F362FD94"}
 */
function BtnFamilia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmMaterialesGC';
	globals.GCshowDialogBDFamilias('Familias', 1, null, null, true, null, null, null, null, null);
}

/**
 * @properties={typeid:24,uuid:"EFC9CF6D-DCF8-4703-81C9-05E650E48D8E"}
 */
function hide_btn_reset_fields()
{
	_super.hide_btn_reset_fields()
	
}

/**
 * @properties={typeid:24,uuid:"C81F89FC-C6E4-4454-82D3-573F785513B3"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_Material = id

	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
			globals.GCRegistroNuevo = null
			doEdit()
		}
	}
	//databaseManager.recalculate(forms.FrmMaterialesGC.foundset.getRecord(forms.FrmMateriales.controller.getSelectedIndex()))
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
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"3D032A04-34D3-47A4-BF90-5F9A925CCDFD"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onShow(event)
{
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	btn_cancel();
	onLoad(event)
	
	globals.GCnav_search = null
	foundset.loadAllRecords()
	controller.readOnly = true
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)
	globals.GCRegistroNuevo = null
	
	
	
	//hide save/cancel btsn
	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
	
	
	
	globals.GCenableBgElements();
	
	
	globals.GCnav_search = null
	globals.GCsetupRecordStatus();

	/*if(globals.GCFormulario)	
	{
		if(globals.Formulario == 'FrmOFs')
		{
			if(forms.FrmOFs.codmaterial)
			{
				var query = "select [ID] from [dbo].[tbMaestroMateriales] where [codigo] = '" + forms.FrmOFs.codmaterial + "'"
				var dataset = databaseManager.getDataSetByQuery(globals.conex, query, null, 1)
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
	}*/
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D9C12367-1559-4C0E-864B-6EBBAB480DF3"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	var success = foundset.removeFoundSetFilterParam('FiltradoMaterialesActivos') 
	plugins.window.createShortcut('control F12', handle_shortCut);
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @properties={typeid:24,uuid:"556C3FC9-88F2-48ED-9124-EBEF1F22ECEE"}
 */
function print_default()
{
	rpt_Materiales_list();
}

/**
 * @properties={typeid:24,uuid:"08F84636-A6A2-449C-86DB-151AA387FC12"}
 * @AllowToRunInFind
 */
function rpt_Materiales_list()
{
	globals.btn_runJasperReportListadoMateriales('', 'ZZZZZZ','','ZZZZZZZ',0,null)		
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"7609B08E-E7C8-4EB6-84D2-5D41BD78C0E3"}
 */
function validate_beforeDelete()
{
	return 0
}

/**
 * @properties={typeid:24,uuid:"D4C6A2D2-CEA7-4DDA-A263-87A7B9DA89B2"}
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
			globals.showErrorDialog(msg,'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null)
		}*/
	}
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"9D8AED71-BFDD-494D-A43C-9B4380CFE7BC"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [Codigo] from [dbo].[tbMaestroMateriales] where  [Codigo] = '" + codigo+"'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		var methd = 'forms.FrmMaterialesGC.foco()';
		globals.GCshowErrorDialog('Código de Material duplicado!',methd,'Aceptar',null,null,null)
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"7252BAE8-C5A6-4ABE-84EA-F31BA93243DB"}
 */
function foco() {
	elements.idcodigo.requestFocus()
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
 *
 * @properties={typeid:24,uuid:"B21E6131-AD20-4483-B463-791E4816CB51"}
 */
function handle_shortCut(v_event)
{
	globals.GCevento = null
	if(!globals.GCisEditing())
	{
		if(v_event.getType() == 'control F12')
		{
			if(globals.GCNombreUsuario == 'DEMO')
			{
				actdatosmateriales()
			}
		}
	}
}

/**
 * @AllowToRunInFind
 *
 *
 *
 * @properties={typeid:24,uuid:"B9BE390A-0F97-44A6-B988-659A039A8580"}
 */
function actdatosmateriales()
{
	var query = "select id from tbmaestromateriales order by codigo";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
	var rows = dataset.getMaxRowIndex()
	
	for(var i=1;i<=rows;i++)
	{
		var uuid = dataset.getValue(i,1)
		
		forms.FrmMaterialesGC.foundset.loadAllRecords()
		var result = forms.FrmMaterialesGC.foundset.selectRecord(uuid)
		var fsCount = databaseManager.getFoundSetCount(forms.FrmMaterialesGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.FrmMaterialesGC.foundset.getSize())
			{
				return;
			}
		forms.FrmMaterialesGC.foundset.setSelectedIndex(forms.FrmMaterialesGC.foundset.getSize());
		result = forms.FrmMaterialesGC.foundset.selectRecord(uuid);
		}
		forms.FrmMaterialesGC.descripcion = 'MATERIAL '+ forms.FrmMaterialesGC.codigo;
		
		databaseManager.saveData(forms.FrmMaterialesGC.foundset)
		
		
		
	}
	
}

/**
 *
 * @properties={typeid:24,uuid:"72A940D6-9185-4505-96C6-0B3EDDA6AD39"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	globals.GCRegistroNuevo = 1
	elements.idcodigo.bgcolor = '#feffe4'
	elements.idcodigo.readOnly = false
	elements.idcodigo.visible = true
	elements.lblcodigo.visible = false
	elements.lbl_codrequired.visible = true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"1CE4A173-DE68-4A82-AD9A-3C46771080F5"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Materiales';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de este Material';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_1.png');
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			menu.show(event.getSource(),0,0);				
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"DA137033-2785-4F3C-AB31-CEB463711669"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Materiales'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'M'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de este Material'.toUpperCase():
		DREF = forms.FrmMaterialesGC.codigo;
		HREF = forms.FrmMaterialesGC.codigo;
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'M'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"10EEC875-072B-45FE-B64E-309FB6DCEDC9"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	// TODO Auto-generated method stub
	if(record)
	{
		forms.lst_MaterialPrecioProveedorGC.btn_showPedidoLinea()
	}
	else
	{
		forms.lst_MaterialPrecioProveedorGC.btn_newLinea()
	}
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1A958165-947A-41F8-BDE4-73409630C8EE"}
 */
function btn_add_Proveedor_precio(event) {
	forms.lst_MaterialPrecioProveedorGC.btn_newLinea()
}
