/**
 * @properties={typeid:24,uuid:"848D026E-B4DB-4B2F-A4E3-59E2EAAD1CDC"}
 * @SuppressWarnings(deprecated)
 */
function btn_newLinea()
{
	var ro = forms.FrmFacturasProformaGC.elements.fld_fecha_cfa.readOnly;
	var franlin = forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbfacturaproformalinea.getSize()
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera de la Factura antes de agregar Líneas.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else if(franlin >= 100)
	{
		var msg = '<html>No se pueden registrar más de 100 líneas por factura.<br><br>Póngase en contacto con AG Informática y Servicios</html>';
		scopes.svyCustomDialogs.showInfoDialog('Info',msg,'Aceptar');
		//globals.GCshowInfoDialog('No se pueden registrar más de 100 líneas por factura.\n\nPóngase en contacto con AG Informática y Servicios',null,'Aceptar',null,null,null)
	}
	else
	{		
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Líneas de Factura.','Aceptar');
			//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Factura.',null,'Aceptar',null,null,null)
		}
		else
		{	
			if(forms.FrmFacturasProformaGC.eje_cfa && forms.FrmFacturasProformaGC.nup_cfa)
			{
				if(forms.FrmFacturasProformaGC.ser_cfa == null)
				{
					var ser = 'IS NULL'
				}
				else
				{
					ser = "= '"+forms.FrmFacturasProformaGC.ser_cfa+"'"
				}	
				query = "select * from [tbFacturaProformaCabecera] where eje_cfa="+forms.FrmFacturasProformaGC.eje_cfa+
							" and ser_cfa "+ser+" and nup_cfa =" + forms.FrmFacturasProformaGC.nup_cfa
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var Fra = dataset.getValue(1, 1)
				
				if(Fra == null)
				{
					scopes.svyCustomDialogs.showErrorDialog('Error','Cabecera Inexistente! Cree una y grabela antes de añadir líneas.','Aceptar');
					//globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir líneas.',null,'Ok',null,null,null)
				}
				else
				{
					var ejer = forms.FrmFacturasProformaGC.eje_cfa
					ser =forms.FrmFacturasProformaGC.ser_cfa
					Fra= forms.FrmFacturasProformaGC.nup_cfa
					var Cliente= forms.FrmFacturasProformaGC.clie_cfa
					var Fecha = forms.FrmFacturasProformaGC.fecha_cfa
					var IVA = forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes.tipoiva
					
					
					//if there's no transaction, start one - so they can "cancel"
					if(!globals.GCisEditing()) globals.GCstartEditing()
				
					forms.dlg_Linea_FacturaProformaGC.elements.BtnImagRefencia.enabled = false;
					forms.dlg_Linea_FacturaProformaGC.elements.BtnImagRefencia.visible = false;
					
					//make a new record
					forms.dlg_Linea_FacturaProformaGC.foundset.newRecord(true)
					forms.dlg_Linea_FacturaProformaGC.eje_lfa = ejer
					forms.dlg_Linea_FacturaProformaGC.ser_lfa = ser
					forms.dlg_Linea_FacturaProformaGC.nup_lfa = Fra
					forms.dlg_Linea_FacturaProformaGC.validate_autoEnter()
					forms.dlg_Linea_FacturaProformaGC.clie_lfa = Cliente
					forms.dlg_Linea_FacturaProformaGC.fecha_lfa = Fecha;
					forms.dlg_Linea_FacturaProformaGC.unme_lfa = 1;
					if(IVA == null || IVA == '') IVA = 0; 
					forms.dlg_Linea_FacturaProformaGC.piva_lfa = IVA
					if(forms.dlg_Linea_FacturaGC.clie_lfa && 
					forms.dlg_Linea_FacturaProformaGC.gctbfacturaproformalinea_to_tbmaestroclientes &&
					forms.dlg_Linea_FacturaProformaGC.gctbfacturaproformalinea_to_tbmaestroclientes.preciohora &&
					forms.dlg_Linea_FacturaProformaGC.gctbfacturaproformalinea_to_tbmaestroclientes.preciohora != 0)
					{
						forms.dlg_Linea_FacturaProformaGC.prec_lfa = forms.dlg_Linea_FacturaProformaGC.gctbfacturaproformalinea_to_tbmaestroclientes.preciohora;
						forms.dlg_Linea_FacturaProformaGC.onDataChange()
					}
					//databaseManager.saveData();
				
					//show the "fake" dialog
					globals.GCshowDialogFacturaProformaLinea('Nueva Linea', null, null, null, null, null, null, null, null, null);
				
					//go first field
					forms.dlg_Linea_FacturaProformaGC.controller.focusFirstField()
					
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"B6D02CD8-CA10-4C92-A357-EE122DFFF6D1"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 */
function btn_showFacturaLinea()
{
	var ro = forms.FrmFacturasProformaGC.elements.fld_fecha_cfa.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera de la Factura antes de editar Líneas.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		
		if(globals.GCisEditing()) globals.GCcancelEditing()
		/*var uid = id
		forms.dlg_Linea_FacturaProformaGC.foundset.loadAllRecords()
		var result = forms.dlg_Linea_FacturaProformaGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_FacturaProformaGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_Linea_FacturaProformaGC.foundset.getSize())
			{
				return;
			}
		forms.dlg_Linea_FacturaProformaGC.foundset.setSelectedIndex(forms.dlg_Linea_FacturaProformaGC.foundset.getSize());
		result = forms.dlg_Linea_FacturaProformaGC.foundset.selectRecord(uid);
		}*/
		var bool = forms.dlg_Linea_FacturaProformaGC.foundset.loadRecords(databaseManager.convertToDataSet([id]))
		if(bool == true)
		{
			//start a transaction
			if(!globals.GCisEditing()) globals.GCstartEditing()
		
			if(forms.dlg_Linea_FacturaProformaGC.foundset.gctbfacturaproformalinea_to_tbmaestroarticulos)
			{
				if(forms.dlg_Linea_FacturaProformaGC.foundset.gctbfacturaproformalinea_to_tbmaestroarticulos.imag_a != null && 
				forms.dlg_Linea_FacturaProformaGC.foundset.gctbfacturaproformalinea_to_tbmaestroarticulos.imag_a != '')
				{
					forms.dlg_Linea_FacturaProformaGC.elements.BtnImagRefencia.enabled = true;
					forms.dlg_Linea_FacturaProformaGC.elements.BtnImagRefencia.visible = true;
				}
				else
				{
					forms.dlg_Linea_FacturaProformaGC.elements.BtnImagRefencia.enabled = false;
					forms.dlg_Linea_FacturaProformaGC.elements.BtnImagRefencia.visible = false;
				}
			}
			else
			{
				forms.dlg_Linea_FacturaProformaGC.elements.BtnImagRefencia.enabled = false;
				forms.dlg_Linea_FacturaProformaGC.elements.BtnImagRefencia.visible = false;
			}
			//setup the method to execute when the dialog closes
			globals.GCdialog_performMethod = 'forms.lst_FacturaProforma_LineasGC.sub_deleteFacturaLinea()'
			
			//show the "fake" dialog
			globals.GCshowDialogFacturaProformaLinea('Editar Línea', 1, null, null, true, 'Borrar Línea', null, null, null, null);
		}
	}
}

/**
 * @properties={typeid:24,uuid:"063B501E-9D85-437A-B02B-CE7447BC34B6"}
 */
function sub_deleteFacturaLinea()
{
	var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para borrar Líneas de Factura.','Aceptar');
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Factura.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCdialog_buttonPressed == 'Borrar Línea')
		{
			var e = forms.FrmFacturasProformaGC.eje_cfa;
			var s = forms.FrmFacturasProformaGC.ser_cfa;
			var n = forms.FrmFacturasProformaGC.nup_cfa;
			
			if(s == null)
			{
				s = 'IS NULL'
			}
			else
			{
				s = "= '"+s+"'"
			}
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
				query = "select ID "+
				"from tbFacturaProformaLinea "+
				"where eje_lfa ='"+e+"' and nup_lfa = "+n+" and "+
				"ser_lfa "+s+
				" order by nli_lfa asc";
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
				
				
				
				var rows = dataset.getMaxRowIndex()
				for(var i=1;i<=rows;i++)
				{
					var uuid = dataset.getValue(i,1)
					
					var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturaproformalinea')  
			  
					//load record by ID in foundset  
					vSet.loadRecords(databaseManager.convertToDataSet([uuid]))  
					var record = vSet.getSelectedRecord()//forms.lst_FacturaProforma_LineasGC.foundset.getSelectedRecord();
					if(record && record.nli_lfa != i)
					{
						record.nli_lfa = i
						databaseManager.saveData(record)
					}
				}	
				
				databaseManager.refreshRecordFromDatabase(forms.lst_FacturaProforma_LineasGC.foundset,-1)
	
		}
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
 * @properties={typeid:24,uuid:"27DCF8CE-7CC6-4D10-9E5E-1FF90F210FA7"}
 * @SuppressWarnings(deprecated)
 */
function btndeleteFacturaLinea(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	
	var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para borrar Líneas de Factura.','Aceptar');
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Factura.',null,'Aceptar',null,null,null)
	}
	else
	{
		var situ = forms.FrmFacturasProformaGC.situ;
		if(situ == 'F')
		{
			globals.GCdialog_buttonPressed = null
			scopes.svyCustomDialogs.showErrorDialog('Error','Factura Proforma ya facturada. No se puede borrar.','Aceptar');
			//var methd = null;
			//globals.GCshowErrorDialog('Factura Proforma ya facturada. No se puede borrar.',methd,'Aceptar',null,null,null)
		}
		else
		{
			var resp = scopes.svyCustomDialogs.showQuestionDialog('Borrar línea','¿Deseas realmente borrar esta línea?','No','Si');
			if(resp == 'Si') {
				globals.core_dlg_buttonPressed = 'Si';
				BorraloLinea(event)
			}
			//methd = 'forms.lst_FacturaProforma_LineasGC.BorraloLinea(event)'
			//globals.GCshowQuestionDialog('Deseas realmente borrar esta línea?',methd,'No','Si',null,null)
		}
	}
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"9C943A19-E488-4FD7-A107-C1D940CD25B9"}
 */
function BorraloLinea(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{	
		var e = forms.FrmFacturasProformaGC.eje_cfa;
		var s = forms.FrmFacturasProformaGC.ser_cfa;
		var n = forms.FrmFacturasProformaGC.nup_cfa;
		
		if(rec) foundset.deleteRecord(rec);	
		else foundset.deleteRecord();
		
		if(s == null) s = 'IS NULL';
		else s = "= '"+s+"'";
		
		var query = "select sum(impor_lfa) from tbFacturaProformaLinea "+
		"where eje_lfa = "+ e +" AND ser_lfa "+s+
		" AND nup_lfa = "+n;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var imporbr=dataset.getValue(1,1)
		
		
		if(imporbr==null) imporbr=0;
		
		forms.FrmFacturasProformaGC.impbre_cfa = imporbr;
		forms.FrmFacturasProformaGC.impbie_cfa = null
		forms.FrmFacturasProformaGC.impbie2_cfa = null
		forms.FrmFacturasProformaGC.impbie3_cfa = null
		forms.FrmFacturasProformaGC.piva_cfa = null
		forms.FrmFacturasProformaGC.piva2_cfa = null
		forms.FrmFacturasProformaGC.piva3_cfa = null
		forms.FrmFacturasProformaGC.cuotaiva_cfa = null
		forms.FrmFacturasProformaGC.cuotaiva2_cfa = null
		forms.FrmFacturasProformaGC.cuotaiva3_cfa = null
		forms.FrmFacturasProformaGC.impre = null
		forms.FrmFacturasProformaGC.impre2 = null
		forms.FrmFacturasProformaGC.impre3 = null
		forms.FrmFacturasProformaGC.onFocusLostDtoPP(event)
		forms.FrmFacturasProformaGC.onFocusLostgtosfinan(event)
		forms.FrmFacturasProformaGC.onFocusLostIva(event)
		databaseManager.saveData();
		
		query = "select ID "+
		"from tbFacturaProformaLinea "+
		"where eje_lfa ='"+e+"' and nup_lfa = "+n+" and "+
		"ser_lfa "+s+
		" order by nli_lfa asc";
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
		
		
		
		var rows = dataset.getMaxRowIndex()
		for(var i=1;i<=rows;i++)
		{
			var uuid = dataset.getValue(i,1)
			
			var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturaproformalinea')  
	  
			//load record by ID in foundset  
			vSet.loadRecords(databaseManager.convertToDataSet([uuid]))  
			var record = vSet.getSelectedRecord()//forms.lst_FacturaProforma_LineasGC.foundset.getSelectedRecord();
			if(record && record.nli_lfa != i)
			{
				record.nli_lfa = i
				databaseManager.saveData(record)
			}
		}	
		
		databaseManager.refreshRecordFromDatabase(forms.lst_FacturaProforma_LineasGC.foundset,-1)

	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3E01B4E0-9E75-4808-A5AF-37D230DE3576"}
 * @SuppressWarnings(deprecated)
 */
function btnCopyFacturaLinea(event) {
	// TODO Auto-generated method stub
	//var frm = currentcontroller.getName()
	var ro = forms.FrmFacturasProformaGC.elements.fld_fecha_cfa.readOnly;
	var franlin = forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbfacturaproformalinea.getSize()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera de la Factura antes de duplicar Línea.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else if(franlin >= 100)
	{
		var msg = '<html>No se pueden registrar más de 100 líneas por factura.<br><br>Póngase en contacto con AG Informática y Servicios</html>'
		scopes.svyCustomDialogs.showInfoDialog('Info',msg,'Aceptar');
		//globals.GCshowInfoDialog('No se pueden registrar más de 100 líneas por factura.\n\nPóngase en contacto con AG Informática y Servicios',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Líneas de Factura.','Aceptar');
			//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Factura.',null,'Aceptar',null,null,null)
		}
		else
		{
			var situ = forms.FrmFacturasProformaGC.situ
			if(situ == 'F')
			{
				globals.GCdialog_buttonPressed = null
				scopes.svyCustomDialogs.showErrorDialog('Error','Factura Proforma ya facturada. No se puede modificar.','Aceptar');
				//var methd = null;
				//globals.GCshowErrorDialog('Factura Proforma ya facturada. No se puede modificar.',methd,'Aceptar',null,null,null)
			}
			else
			{
			
				//make a new record
				forms.dlg_Linea_FacturaProformaGC.foundset.newRecord(true)
				forms.dlg_Linea_FacturaProformaGC.eje_lfa = eje_lfa;
				forms.dlg_Linea_FacturaProformaGC.ser_lfa = ser_lfa;
				forms.dlg_Linea_FacturaProformaGC.nup_lfa = nup_lfa;
				forms.dlg_Linea_FacturaProformaGC.validate_autoEnter()
				forms.dlg_Linea_FacturaProformaGC.fecha_lfa = fecha_lfa;
				forms.dlg_Linea_FacturaProformaGC.ref_lfa = ref_lfa;
				forms.dlg_Linea_FacturaProformaGC.concep_lfa = concep_lfa;
				forms.dlg_Linea_FacturaProformaGC.cant1_lfa = cant1_lfa;
				forms.dlg_Linea_FacturaProformaGC.prec_lfa = prec_lfa;
				forms.dlg_Linea_FacturaProformaGC.ref_lfa = ref_lfa;
				forms.dlg_Linea_FacturaProformaGC.unme_lfa = unme_lfa;
				forms.dlg_Linea_FacturaProformaGC.piva_lfa = piva_lfa;
				forms.dlg_Linea_FacturaProformaGC.clie_lfa = clie_lfa;
				forms.dlg_Linea_FacturaProformaGC.precuni_lfa = precuni_lfa;
				forms.dlg_Linea_FacturaProformaGC.impor_lfa = impor_lfa;
				forms.dlg_Linea_FacturaProformaGC.importot_lfa = importot_lfa;
				forms.dlg_Linea_FacturaProformaGC.nprograma_lfa = nprograma_lfa;
				forms.dlg_Linea_FacturaProformaGC.dto_lfa = dto_lfa;
				forms.dlg_Linea_FacturaProformaGC.impdto_lfa = impdto_lfa;
				forms.dlg_Linea_FacturaProformaGC.medida_lfa = medida_lfa;
				
				databaseManager.saveData()
				
				var e = forms.FrmFacturasProformaGC.eje_cfa;
				var s = forms.FrmFacturasProformaGC.ser_cfa;
				var n = forms.FrmFacturasProformaGC.nup_cfa;
				
				if(s == null)
				{
					s = 'IS NULL'
				}
				else
				{
					s = "= '"+ser_lfa+"'"
				}
				query = "select sum(impor_lfa) from tbFacturaProformaLinea "+
				"where eje_lfa = "+ e +" AND ser_lfa "+s+
				" AND nup_lfa = "+n;
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var imporbr=dataset.getValue(1,1)
				
				
				if(imporbr==null)
				{
					imporbr=0
				}
				forms.FrmFacturasProformaGC.impbre_cfa = imporbr;
				forms.FrmFacturasProformaGC.impbie_cfa = null
				forms.FrmFacturasProformaGC.impbie2_cfa = null
				forms.FrmFacturasProformaGC.impbie3_cfa = null
				forms.FrmFacturasProformaGC.piva_cfa = null
				forms.FrmFacturasProformaGC.piva2_cfa = null
				forms.FrmFacturasProformaGC.piva3_cfa = null
				forms.FrmFacturasProformaGC.cuotaiva_cfa = null
				forms.FrmFacturasProformaGC.cuotaiva2_cfa = null
				forms.FrmFacturasProformaGC.cuotaiva3_cfa = null
				forms.FrmFacturasProformaGC.impre = null
				forms.FrmFacturasProformaGC.impre2 = null
				forms.FrmFacturasProformaGC.impre3 = null
				forms.FrmFacturasProformaGC.onFocusLostDtoPP(event)
				forms.FrmFacturasProformaGC.onFocusLostgtosfinan(event)
				forms.FrmFacturasProformaGC.onFocusLostIva(event)
				databaseManager.saveData();
			}
		}
	}
}

/**
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"82BD2990-A529-4C1C-B5B0-D3056FF133E7"}
 */
function onRightClick(event) {
	// TODO Auto-generated method stub
	//forms.frm_nav_buttons_asientos.btn_information()
	var popUpObj = plugins.window.createPopupMenu();
		popUpObj.addMenuItem("Editar línea", MenuOpcFacturaLineas, null);
		popUpObj.addMenuItem("Borrar línea", MenuOpcFacturaLineas, null);
		popUpObj.addMenuItem("Duplicar línea", MenuOpcFacturaLineas, null);
		popUpObj.addMenuItem("Imprimir Factura", MenuOpcFacturaLineas, null);
		popUpObj.addSeparator();
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			popUpObj.show(event.getSource(),10,0);				
		}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 * @AllowToRunInFind
 *
 *
 * @properties={typeid:24,uuid:"C6CD1564-8AAB-41C4-A13D-9B97E0FA418F"}
 */
function MenuOpcFacturaLineas(event) 
{
	switch (arguments[4]) {
	 	case 'Editar línea': 
	 			btn_showFacturaLinea()
	 			break;
	 	case 'Borrar línea': 
	 			btndeleteFacturaLinea(event)
				break;
	 	case 'Duplicar línea': 
	 			btnCopyFacturaLinea(event)
				break;
	 	case 'Imprimir Factura': 
	 			forms.frm_nav_buttons_facturasGC.btn_print()
				break;
	 	default: break;
	}
}

/**
 * @type {JSRecord}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"16B3B38B-2E46-45D5-A7E9-8A1AD97619FA",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"6395D8E1-3614-4087-B734-D540D49CA68F",variableType:8}
 */
var fsindex;

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"52907F3B-D7D4-47D7-B168-A556723E5452"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var column = elements.table_FacturaLineas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if(column.id != "editar" && column.id != "borrar" && column.id != "duplicar") {
		if(foundsetindex && columnindex && record) btn_showFacturaLinea();
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
 *
 *
 *
  *
 * @properties={typeid:24,uuid:"EE96DDE8-2E9C-463A-848D-D8BCD2934CA2"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
var column = elements.table_FacturaLineas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if (column.id === "editar") {
		btn_showFacturaLinea()
	}
	else if (column.id === "borrar") {
		btndeleteFacturaLinea(event)
	}
	else if (column.id === "duplicar") {
		btnCopyFacturaLinea(event)
	}
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"DB069FF3-7F0B-4CB6-8BC4-03E0DAA3B810"}
 */
function onShow(firstShow, event) {
	rec,fsindex = null;
	forms.lst_FacturaLineasGCNG.elements.table_FacturaLineas.myFoundset.foundset.sort('nli_lfa asc')
}
