/**
 * @properties={typeid:24,uuid:"FB69EEC2-8284-4BDB-BA57-F5D3488AB142"}
 */
function btn_save() {
	
	var query = 'select savestock from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Movimientos.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(!cod_ms)
		{
			globals.GCshowErrorDialog('Falta introducir el código de articulo.',null,'Aceptar',null,null,null)
		}
		else if(!fecha_ms)
		{
			globals.GCshowErrorDialog('Falta introducir la fecha del movimiento.',null,'Aceptar',null,null,null)
		}	
		else if(!tipo_ms)
		{
			globals.GCshowErrorDialog('Falta introducir el tipo de movimiento.',null,'Aceptar',null,null,null)
		}	
		else if(!movi_ms)
		{
			globals.GCshowErrorDialog('Falta introducir la cantidad.',null,'Aceptar',null,null,null)
		}	
		else
		{
			query = "select [id] from [tbMaestroArticulos] where  [Codigo] = '" + cod_ms+"'";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n == null)
			{
				globals.GCshowErrorDialog('Código de Articulo inexistente!',null,'Aceptar',null,null,null)
			}
			else
			{
				var codart = cod_ms;
				ferm_ms = new Date();
				_super.btn_save()
				ActualizarStockArticulo(codart)
				globals.GCRegistroNuevo = null
				//do sort and hilight the newly added (edited) record
				elements.cod_ms.bgcolor = '#f0f0f0'
				elements.cod_ms.readOnly = true
				elements.fecha_ms.bgcolor = '#f0f0f0'
				elements.fecha_ms.readOnly = true
				elements.hfech_ms.bgcolor = '#f0f0f0'
				elements.hfech_ms.readOnly = true
				elements.mfech_ms.bgcolor = '#f0f0f0'
				elements.mfech_ms.readOnly = true
				elements.tipo_ms.bgcolor = '#f0f0f0'
				elements.tipo_ms.readOnly = true
				elements.movi_ms.bgcolor = '#f0f0f0'
				elements.movi_ms.readOnly = true
				elements.exis_ms.bgcolor = '#f0f0f0'
				elements.exis_ms.readOnly = true
				elements.BtnRefencia.visible = false
				elements.btn_Articulo.visible = true;
				elements.lbl_codrequired.visible = false
				elements.lbl_codrequiredc.visible = false
				elements.lbl_codrequiredcc.visible = false
				elements.lbl_codrequiredccc.visible = false
				elements.lbl_codrequiredcccc.visible = false
				elements.cod_ms.visible = false
				elements.lblcodigo.visible = true
				
				if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelect(); //for web client - to refresh buttons
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"319CC588-BA22-412E-92F7-BFD1166BA00F"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	globals.GCRegistroNuevo = null
	elements.cod_ms.bgcolor = '#f0f0f0'
	elements.cod_ms.readOnly = true
	elements.fecha_ms.bgcolor = '#f0f0f0'
	elements.fecha_ms.readOnly = true
	elements.hfech_ms.bgcolor = '#f0f0f0'
	elements.hfech_ms.readOnly = true
	elements.mfech_ms.bgcolor = '#f0f0f0'
	elements.mfech_ms.readOnly = true
	elements.tipo_ms.bgcolor = '#f0f0f0'
	elements.tipo_ms.readOnly = true
	elements.movi_ms.bgcolor = '#f0f0f0'
	elements.movi_ms.readOnly = true
	elements.exis_ms.bgcolor = '#f0f0f0'
	elements.exis_ms.readOnly = true
	elements.BtnRefencia.visible = false
	elements.btn_Articulo.visible = true;
	elements.lbl_codrequired.visible = false
	elements.lbl_codrequiredc.visible = false
	elements.lbl_codrequiredcc.visible = false
	elements.lbl_codrequiredccc.visible = false
	elements.lbl_codrequiredcccc.visible = false
	elements.cod_ms.visible = false
	elements.lblcodigo.visible = true
}

/**
 * @properties={typeid:24,uuid:"C5E5346A-7FAA-4021-8031-CDB39AE89D5B"}
 */
function doEdit()
{
	_super.doEdit()
	
	elements.btn_Articulo.visible = false;	
}

/**
 * @properties={typeid:24,uuid:"63A37103-546F-459E-88C4-DF62574A5CC1"}
 */
function hide_btn_reset_fields()
{
	_super.hide_btn_reset_fields()
	
}

/**
 * @properties={typeid:24,uuid:"39671994-85F9-4C36-B711-41E5800F9586"}
 */
function onRecordSelect()
{
	//if(globals.GCisEditing()) databaseManager.revertEditedRecords()
	//setup the record status
	globals.GCsetupRecordStatus();

	
	globals.GCcurID_MovArti = id
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
 * 
 * @properties={typeid:24,uuid:"E1F112D6-D12C-4B78-963D-FEBA86C15A97"}
 * @AllowToRunInFind
 */
function onShow(firstShow,event)
{
	if(!globals.GClogin_usuario) globals.btn_SalirGC(event)
	 btn_cancel();
	onLoad(event)
	//make read only
	foundset.loadAllRecords()
	controller.readOnly = true
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)

	//hide save/cancel btsn
	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
	elements.BtnRefencia.visible = false
	elements.btn_Articulo.visible = true;
	elements.cod_ms.visible = false
	elements.lblcodigo.visible = true
	//hide the comboboxes
	/*elements.fld_companyCategoryc.visible = false
	elements.fld_companyIndustryc.visible = false
	elements.fld_companyTypec.visible = false
	elements.fld_accountmanagerc.visible = false
	elements.fld_statusc.visible = false*/
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2766E2DF-4161-4562-A7AE-10F767633D11"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @properties={typeid:24,uuid:"E3CFA14E-D757-42A6-9BCA-1D6EC3E67D01"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Diario_Mov_Piezas_list();
}

/**
 * @properties={typeid:24,uuid:"6AC29366-6323-4043-AB02-6897F4F5EF80"}
 * @AllowToRunInFind
 */
function rpt_Diario_Mov_Piezas_list()
{
	globals.showDialogDiarioMovGC('Diario de Movimientos',1,null,null,null,null,null,null,null,null)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"304DB504-6817-43CB-B9FF-5B006E1718E7"}
 */
function onActioncod(event) {
	// TODO Auto-generated method stub
	
		elements.fecha_ms.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89AF94EB-8FFD-4357-A90B-271ACAB982F3"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmMoviArtiGC';
	//globals.GCshowDialogArticulos('Referencia Articulos', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	var win = application.getWindow('Artículos')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Articulos", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Artículos';
	//win.resizable = true;
	//win.show(forms.dialog_ArticulosGC)
	win.show(forms.dlgArticulosGC)
}

/**
 * @properties={typeid:24,uuid:"9BE8ACE1-9143-4475-A669-20710C251E28"}
 */
function sub_setNewNumero()
{
	var query = "select [tip1_ms] from [dbo].[moviarti] where cod_ms ='"+cod_ms+"' order by [tip1_ms] desc"
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	tip1_ms = dataset.getValue(1, 1) + 1;
}

/**
 * @properties={typeid:24,uuid:"A508E788-9D22-47E0-87AB-F33DB9C5D33F"}
 */
function validate_autoEnter()
{
	globals.GCRegistroNuevo = 1
	id = application.getUUID()
	//sub_setNewNumero();	
	nusu_ms = globals.GClogin_usuario
	
	elements.cod_ms.bgcolor = '#FFFF00'//'#feffe4'
	elements.cod_ms.readOnly = false
	elements.fecha_ms.bgcolor = '#FFFF00'//'#feffe4'
	elements.fecha_ms.readOnly = false
	elements.hfech_ms.bgcolor = '#FFFF00'//'#feffe4'
	elements.hfech_ms.readOnly = false
	elements.mfech_ms.bgcolor = '#FFFF00'//'#feffe4'
	elements.mfech_ms.readOnly = false
	elements.tipo_ms.bgcolor = '#FFFF00'//'#feffe4'
	elements.tipo_ms.readOnly = false
	elements.movi_ms.bgcolor = '#FFFF00'//'#feffe4'
	elements.movi_ms.readOnly = false
	
	//elements.exis_ms.bgcolor = '#FFFF00'//'#feffe4'
	//elements.exis_ms.readOnly = false
	fecha_ms = new Date
	elements.BtnRefencia.visible = true;
	elements.lbl_codrequired.visible = true
	elements.lbl_codrequiredc.visible = true
	elements.lbl_codrequiredcc.visible = true
	elements.lbl_codrequiredccc.visible = true
	elements.lbl_codrequiredcccc.visible = true
	elements.cod_ms.visible = true
	elements.lblcodigo.visible = false
	elements.cod_ms.requestFocus()
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FFE0EED8-EE83-44BB-AD51-7187F84F163C"}
 */
function onFocusLostmovi(event) {
	// TODO Auto-generated method stub
	if(movi_ms != null && movi_ms != '' && elements.movi_ms.readOnly == false)
	{
		sub_setstock()
	}
}

/**
 * @properties={typeid:24,uuid:"798F90AD-3339-4199-B130-F739B3BCF42E"}
 */
function sub_setstock()
{
	var query = "select [exis_a] from [dbo].[tbmaestroarticulos] where [codigo] = '" + cod_ms + "'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	if(tipo_ms == 'E')
	{
		exis_ms = dataset.getValue(1, 1) + movi_ms	
		globals.GCROUND(exis_ms,2)
	}
	else if(tipo_ms == 'S')
	{
		exis_ms = dataset.getValue(1, 1) - movi_ms	
		globals.GCROUND(exis_ms,2)
	}
	else if(tipo_ms == 'I')
	{
		exis_ms = movi_ms	
		globals.GCROUND(exis_ms,2)
	}
	else
	{
		exis_ms = null
	}	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"50F591D1-EF14-48E9-8A0B-19F8EA779F78"}
 */
function onDataChangetipo() {
	// TODO Auto-generated method stub
	if(movi_ms != null)
	{
		sub_setstock()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09C35CAD-E8D8-4700-87C3-DEA7CFCC9D6E"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	elements.tipo_ms.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2CE9EFE9-BA0C-4324-B22C-3D531DE9A6A6"}
 */
function onActiontipo(event) {
	// TODO Auto-generated method stub
	elements.fld_ndoc_ms.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F1EEE94F-C4FA-4DDF-8B71-28B1002BD3C3"}
 */
function onActionndoc(event) {
	// TODO Auto-generated method stub
	elements.movi_ms.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0C511524-92A9-41EB-91BE-10E2BF42B3C9"}
 */
function onActionmovi(event) {
	// TODO Auto-generated method stub
	onFocusLostmovi(event)
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"3FE1ED43-F834-4388-8272-4E1560E1D413"}
 */
function validate_beforeDelete()
{
	var query = 'select savestock from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Movimientos.',null,'Aceptar',null,null,null)
		return 1
	}
	else
	{
	//var ord = companies_to_orders.getSize()
	//var cont = companies_to_contacts.getSize()

	//if(ord > 0 || cont > 0)
	//{
		//there are contacts and/or orders - so don't allow the delete
	//	if(ord > 0)
	//	{
			//show dialog and return 1
			//show the tabpanel "dialog"
	//		globals.GCshowErrorDialog("You can't delete a company that has orders.\n\nDelete all the orders first.", 'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null);
	//		return 1
	//	}

	//	if(cont > 0)
	//	{
			//show dialog
			//show the tabpanel "dialog"
	//		globals.GCshowErrorDialog("You can't delete a company that has contacts related to it.\n\nDelete all the related contacts first.", 'forms.frm_company.sub_showCompanyContacts()','OK', null, null, null);
	//		return 1
	//	}
	//}
	//else
	//{
		return 0
	//}
	//return null;

	}
}

/**
 *
 * @properties={typeid:24,uuid:"BC2E0133-DC59-421C-90F3-7B577A8396AC"}
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
		var codart = cod_ms;
		foundset.deleteRecord()
		/*}
		else
		{
			//there are orders that use this address
			var msg = 'There are orders that use this address as a shipping or billing address.' +
			' Change the orders to a new address, then you can delete this address.'
			globals.GCshowErrorDialog(msg,'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null)
		}*/
		ActualizarStockArticulo(codart)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} CART
 *
 *
 * @properties={typeid:24,uuid:"AC0216EA-DFB3-47B1-AF0D-607975AF4F24"}
 */
function ActualizarStockArticulo(CART)
{
	var query = "select [movi_ms],[tipo_ms] from [dbo].[moviarti] where cod_ms = '"+CART+"' order by [fecha_ms] asc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999999)
	var rows = dataset.getMaxRowIndex()
	
	var cant = 0;
	for(var i=1;i<=rows;i++)
	{
		var tipom = dataset.getValue(i,2)
		if(tipom == 'E')
		{
			cant += dataset.getValue(i,1)
		}
		else if(tipom == 'S')
		{
			cant -= dataset.getValue(i,1)
		}
		else
		{
			cant = dataset.getValue(i,1)
		}
	}
	
	query = "select ID from tbmaestroarticulos where codigo = '"+CART+"'";
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var uuid = dataset.getValue(1,1)
	//var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbmaestroarticulos') 
	if(uuid)
	{
		forms.FrmArticulosGC.foundset.loadAllRecords()
		var result = forms.FrmArticulosGC.foundset.selectRecord(uuid)
		var fsCount = databaseManager.getFoundSetCount(forms.FrmArticulosGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.FrmArticulosGC.foundset.getSize())
			{
				return;
			}
		forms.FrmArticulosGC.foundset.setSelectedIndex(forms.FrmArticulosGC.foundset.getSize());
		result = forms.FrmArticulosGC.foundset.selectRecord(uuid);
		}
		
		forms.FrmArticulosGC.exis_a = cant;
		
		databaseManager.saveData(forms.FrmArticulosGC.foundset)
		/*vSet.loadRecords(databaseManager.convertToDataSet([uuid])) 
		var record = vSet.getSelectedRecord();
		
		record['exis_a'] = cant;
		
		databaseManager.saveData(record)*/
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"4569634E-9353-46EA-9291-EABE49D2C715"}
 */
function btn_Articulo(event) {
	if(globals.GCisEditing()) forms.FrmMoviArtiGC.btn_cancel()
	
	/*if(cod_ms)
	{
		var query = "select [ID] from [tbMaestroArticulos] where [codigo] = '" + cod_ms + "'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		
		var result = forms.dlg_ArticulosGC.foundset.selectRecord(dataset.getValue(1,1))
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ArticulosGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ArticulosGC.foundset.getSize())
			{
				return;
				
			}
			forms.dlg_ArticulosGC.foundset.setSelectedIndex(forms.dlg_ArticulosGC.foundset.getSize());
		result = forms.dlg_ArticulosGC.foundset.selectRecord(dataset.getValue(1,1));
		}
		if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ArticulosGC.elements.codigo.bgcolor = '#f0f0f0';
		forms.dlg_ArticulosGC.elements.codigo.readOnly = true;
		forms.dlg_ArticulosGC.elements.codigo.visible = false;
		forms.dlg_ArticulosGC.elements.lblcodigo.visible = true;
		globals.GCshowDialogArticulo('BD Articulos', 1, null, null, true, null, null, null, null, null);
	}
	else
	{
		forms.dlg_ArticulosGC.foundset.setSelectedIndex(1)
		if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ArticulosGC.elements.codigo.readOnly = true;
		forms.dlg_ArticulosGC.elements.codigo.bgcolor = '#f0f0f0';
		forms.dlg_ArticulosGC.elements.codigo.visible = false;
		forms.dlg_ArticulosGC.elements.lblcodigo.visible = true;
		globals.GCshowDialogArticulo('BD Articulos', 1, null, null, true, null, null, null, null, null);
	}*/
	
	if(cod_ms)
	{
		var win = application.getWindow('Maestros')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		win = application.createWindow("Maestros", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Articulos';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmMoviArtiGC';
		forms.FrmArticulosGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(4) 
		
		
	}
	else
	{
		win = application.getWindow('Maestros')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		win = application.createWindow("Maestros", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Articulos';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmMoviArtiGC';
		forms.FrmArticulosGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(4) 
		
	}
}
