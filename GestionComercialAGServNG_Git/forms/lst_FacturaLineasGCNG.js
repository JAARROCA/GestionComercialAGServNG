/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"85105A80-DA9A-4053-8234-853CE4EB2381"}
 */
function btn_newLinea()
{
	var ro = forms.FrmFacturasGC.elements.fld_fecha_cfa.readOnly;
	var franlin = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbfacturalinea.getSize()
	
	if(globals.GCisEditing() && ro == false)
	{
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
			var situ = forms.FrmFacturasGC.situconta
			if(situ == 'C')
			{
				globals.GCdialog_buttonPressed = null
				scopes.svyCustomDialogs.showErrorDialog('Error','Factura ya contabilizada. No se puede añadir más lineas.','Aceptar');
				//var methd = null;
				//globals.GCshowErrorDialog('Factura ya contabilizada. No se puede añadir más lineas.',methd,'Aceptar',null,null,null)
			}
			else if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai && forms.FrmFacturasGC.mac && forms.FrmFacturasGC.fechaenviofichero)
			{
				globals.GCdialog_buttonPressed = null
				msg = '<html>Esta factura está marcado como enviada a TicketBAI.<br>No se puede añadir más lineas.</html>'
				scopes.svyCustomDialogs.showErrorDialog('Error',msg,'Aceptar');
				//scopes.svyCustomDialogs.showErrorDialog('Error','Esta factura está marcado como enviada a TicketBAI.\n No se puede añadir más lineas.');
				//methd = null;
				//globals.GCshowErrorDialog('Esta factura está marcado como enviada a TicketBAI.\n No se puede añadir más lineas.',methd,'Aceptar',null,null,null)
			}		
			else
			{
				
				if(forms.FrmFacturasGC.eje_cfa && forms.FrmFacturasGC.nup_cfa)
				{
					if(forms.FrmFacturasGC.ser_cfa == null)
					{
						var ser = 'IS NULL'
					}
					else
					{
						ser = "= '"+forms.FrmFacturasGC.ser_cfa+"'"
					}	
					query = "select * from [tbFacturaCabecera] where eje_cfa="+forms.FrmFacturasGC.eje_cfa+
								" and ser_cfa "+ser+" and nup_cfa =" + forms.FrmFacturasGC.nup_cfa
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var Fra = dataset.getValue(1, 1)
					
					if(Fra == null)
					{
						scopes.svyCustomDialogs.showErrorDialog('Error','Cabecera Inexistente! Cree una y grabela antes de añadir líneas.','Aceptar');
						//globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir líneas.',null,'Ok',null,null,null)
					}
					else
					{
						var ejer = forms.FrmFacturasGC.eje_cfa
						ser =forms.FrmFacturasGC.ser_cfa
						Fra= forms.FrmFacturasGC.nup_cfa
						var Cliente= forms.FrmFacturasGC.clie_cfa
						var Fecha = forms.FrmFacturasGC.fecha_cfa
						var IVA = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.tipoiva
						
						
						//if there's no transaction, start one - so they can "cancel"
						if(!globals.GCisEditing()) globals.GCstartEditing()
					
						forms.dlg_Linea_FacturaGC.elements.BtnImagRefencia.enabled = false;
						forms.dlg_Linea_FacturaGC.elements.BtnImagRefencia.visible = false;
						
						//make a new record
						forms.dlg_Linea_FacturaGC.foundset.newRecord(true)
						forms.dlg_Linea_FacturaGC.eje_lfa = ejer
						forms.dlg_Linea_FacturaGC.ser_lfa = ser
						forms.dlg_Linea_FacturaGC.nup_lfa = Fra
						forms.dlg_Linea_FacturaGC.validate_autoEnter()
						forms.dlg_Linea_FacturaGC.clie_lfa = Cliente
						forms.dlg_Linea_FacturaGC.fecha_lfa = Fecha;
						forms.dlg_Linea_FacturaGC.unme_lfa = 1;
						if(IVA == null || IVA == '') IVA = 0.00; 
						forms.dlg_Linea_FacturaGC.piva_lfa = IVA
						if(forms.dlg_Linea_FacturaGC.clie_lfa && 
							forms.dlg_Linea_FacturaGC.GCtbfacturalinea_to_tbmaestroclientes &&
							forms.dlg_Linea_FacturaGC.GCtbfacturalinea_to_tbmaestroclientes.preciohora &&
							forms.dlg_Linea_FacturaGC.GCtbfacturalinea_to_tbmaestroclientes.preciohora != 0)
						{
							forms.dlg_Linea_FacturaGC.prec_lfa = forms.dlg_Linea_FacturaGC.GCtbfacturalinea_to_tbmaestroclientes.preciohora;
							forms.dlg_Linea_FacturaGC.onDataChange()
						}
						//databaseManager.saveData();
						
						//show the "fake" dialog
						globals.GCshowDialogFacturaLinea('Nueva Línea', null, null, null, null, null, null, null, null, null);
					
						//go first field
						forms.dlg_Linea_FacturaGC.controller.focusFirstField()
						
					}
				}
			}
		}
	}
}

/**
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"1332A2BF-89F4-4607-9BD4-D453E9E81BFA"}
 */
function btn_showFacturaLinea()
{
	var ro = forms.FrmFacturasGC.elements.fld_fecha_cfa.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera de la Factura antes de editar Líneas.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		/*forms.dlg_Linea_FacturaGC.foundset.loadAllRecords()
		var result = forms.dlg_Linea_FacturaGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_FacturaGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_Linea_FacturaGC.foundset.getSize())return;
			forms.dlg_Linea_FacturaGC.foundset.setSelectedIndex(forms.dlg_Linea_FacturaGC.foundset.getSize());
			result = forms.dlg_Linea_FacturaGC.foundset.selectRecord(uid);
		}*/
		var bool = forms.dlg_Linea_FacturaGC.foundset.loadRecords(databaseManager.convertToDataSet([uid]))
		if(bool == true)
		{
			//start a transaction
			if(!globals.GCisEditing()) globals.GCstartEditing()
		
			if(forms.dlg_Linea_FacturaGC.foundset.GCtbfacturalinea_to_tbmaestroarticulos)
			{		
				if(forms.dlg_Linea_FacturaGC.foundset.GCtbfacturalinea_to_tbmaestroarticulos.imag_a)
				{
					forms.dlg_Linea_FacturaGC.elements.BtnImagRefencia.enabled = true;
					forms.dlg_Linea_FacturaGC.elements.BtnImagRefencia.visible = true;
				}
				else
				{
					forms.dlg_Linea_FacturaGC.elements.BtnImagRefencia.enabled = false;
					forms.dlg_Linea_FacturaGC.elements.BtnImagRefencia.visible = false;
				}		
			}
			else
			{
				forms.dlg_Linea_FacturaGC.elements.BtnImagRefencia.enabled = false;
				forms.dlg_Linea_FacturaGC.elements.BtnImagRefencia.visible = false;
			}
			//setup the method to execute when the dialog closes
			globals.GCdialog_performMethod = 'forms.lst_FacturaLineasGCNG.sub_deleteFacturaLinea()'
			
			//show the "fake" dialog
			globals.GCshowDialogFacturaLinea('Editar Línea', 1, null, null, true, 'Borrar Línea', null, null, null, null);
		}
	}
}

/**
 *
 * @properties={typeid:24,uuid:"61AD0A75-F39A-44C1-8F89-DD49FF1853A0"}
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
		var situ = forms.FrmFacturasGC.situconta
		if(situ == 'C')
		{
			globals.GCdialog_buttonPressed = null
			scopes.svyCustomDialogs.showErrorDialog('Error','Factura ya contabilizada. No se puede borrar.','Aceptar');
			//var methd = null;
			//globals.GCshowErrorDialog('Factura ya contabilizada. No se puede borrar.',methd,'Aceptar',null,null,null)
		}
		else if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai && forms.FrmFacturasGC.mac && forms.FrmFacturasGC.fechaenviofichero)
		{
			globals.GCdialog_buttonPressed = null
			var msg = '<html>Esta factura está marcado como enviada a TicketBAI.<br>No se puede añadir más lineas.</html>'
			scopes.svyCustomDialogs.showErrorDialog('Error',msg,'Aceptar');
			//scopes.svyCustomDialogs.showErrorDialog('Error','Esta factura está marcado como enviada a TicketBAI.\n No se puede añadir más lineas.');
			//methd = null;
			//globals.GCshowErrorDialog('Esta factura está marcado como enviada a TicketBAI.\n No se puede modificar.',methd,'Aceptar',null,null,null)
		}		
		else
		{
			if(globals.GCdialog_buttonPressed == 'Borrar Línea')
			{
				var e = forms.FrmFacturasGC.eje_cfa;
				var s = forms.FrmFacturasGC.ser_cfa;
				var n = forms.FrmFacturasGC.nup_cfa;
				if(s == null) s = 'IS NULL';
				else s = "= '"+s+"'";
				
				//check to make sure that the address in question isn't used on any orders
				/*var bAdrCnt = addresses_to_orders_billing.getSize()
				var sAdrCnt = addresses_to_orders_shipping.getSize()
		
				if(bAdrCnt == 0 && sAdrCnt == 0)
				{*/
					if(rec) foundset.deleteRecord(rec);	
					else foundset.deleteRecord();
				/*}
				else
				{
					//there are orders that use this address
					var msg = 'There are orders that use this address as a shipping or billing address.' +
					' Change the orders to a new address, then you can delete this address.'
					globals.GCshowErrorDialog(msg,'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null)
				}*/
					query = "select ID from tbFacturaLinea "+
					"where eje_lfa ='"+e+"' and nup_lfa = "+n+" and "+
					"ser_lfa "+s+" order by nli_lfa asc";
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
					
					
					
					var rows = dataset.getMaxRowIndex()
					for(var i=1;i<=rows;i++)
					{
						var uuid = dataset.getValue(i,1)
						
						var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturalinea')  
				  
						//load record by ID in foundset  
						vSet.loadRecords(databaseManager.convertToDataSet([uuid]))  
						var record = vSet.getSelectedRecord()//forms.lst_Factura_LineasGC.foundset.getSelectedRecord();
						
						if(record && record.nli_lfa != i)
						{
							record.nli_lfa = i
							databaseManager.saveData(record)
						}
					}	
					
					databaseManager.refreshRecordFromDatabase(forms.lst_FacturaLineasGCNG.foundset,-1)
		
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
 *
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"D56B5C63-2E0B-4B41-9499-5FD5C7F33925"}
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
		var situ = forms.FrmFacturasGC.situconta
		if(situ == 'C')
		{
			globals.GCdialog_buttonPressed = null
			scopes.svyCustomDialogs.showErrorDialog('Error','Factura ya contabilizada. No se puede borrar.','Aceptar');
			//var methd = null;
			//globals.GCshowErrorDialog('Factura ya contabilizada. No se puede borrar.',methd,'Aceptar',null,null,null)
		}
		else if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai && forms.FrmFacturasGC.mac && forms.FrmFacturasGC.fechaenviofichero)
		{
			globals.GCdialog_buttonPressed = null;
			var msg = '<html>Esta factura está marcado como enviada a TicketBAI.<br>No se puede modificar.</html>';
			scopes.svyCustomDialogs.showErrorDialog('Error',msg,'Aceptar');
			//methd = null;
			//globals.GCshowErrorDialog('Esta factura está marcado como enviada a TicketBAI.\n No se puede modificar.',methd,'Aceptar',null,null,null)
		}		
		else
		{
			var resp = scopes.svyCustomDialogs.showQuestionDialog('Borrar línea','¿Deseas realmente borrar esta línea?','No','Si');
			if(resp == 'Si') {
				globals.core_dlg_buttonPressed = 'Si';
				BorraloLinea(event)
			}
			//methd = 'forms.lst_FacturaLineasGCNG.BorraloLinea(event)'
			//globals.GCshowQuestionDialog('Deseas realmente borrar esta línea?',methd,'No','Si',null,null)
		}
	}
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"0A098453-F422-489F-8F2B-BE4BD3E8FAFE"}
 */
function BorraloLinea(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{	
		var e = forms.FrmFacturasGC.eje_cfa;
		var s = forms.FrmFacturasGC.ser_cfa;
		var n = forms.FrmFacturasGC.nup_cfa;		
		
		if(rec) foundset.deleteRecord(rec);	
		else foundset.deleteRecord();	
		
		if(s == null) s = 'IS NULL';
		else s = "= '"+s+"'";
		
		var query = "select sum(impor_lfa) from tbFacturaLinea "+
		"where eje_lfa = "+ e +" AND ser_lfa "+s+
		" AND nup_lfa = "+n;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var imporbr=dataset.getValue(1,1)
		
		
		if(imporbr==null) imporbr=0;
		
		forms.FrmFacturasGC.impbre_cfa = imporbr;
		forms.FrmFacturasGC.impbie_cfa = null
		forms.FrmFacturasGC.impbie2_cfa = null
		forms.FrmFacturasGC.impbie3_cfa = null
		forms.FrmFacturasGC.piva_cfa = null
		forms.FrmFacturasGC.piva2_cfa = null
		forms.FrmFacturasGC.piva3_cfa = null
		forms.FrmFacturasGC.cuotaiva_cfa = null
		forms.FrmFacturasGC.cuotaiva2_cfa = null
		forms.FrmFacturasGC.cuotaiva3_cfa = null
		forms.FrmFacturasGC.impre = null
		forms.FrmFacturasGC.impre2 = null
		forms.FrmFacturasGC.impre3 = null
		forms.FrmFacturasGC.onFocusLostDtoPP(event)
		forms.FrmFacturasGC.onFocusLostgtosfinan(event)
		forms.FrmFacturasGC.onFocusLostIva(event)
		forms.FrmFacturasGC.Generacion_Efecto_Factura()
		forms.FrmFacturasGC.Generacion_FacturaComision()
		databaseManager.saveData();
		
		query = "select ID from tbFacturaLinea "+
		"where eje_lfa ='"+e+"' and nup_lfa = "+n+" and "+
		"ser_lfa "+s+" order by nli_lfa asc";
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
		
		
		
		var rows = dataset.getMaxRowIndex()
		for(var i=1;i<=rows;i++)
		{
			var uuid = dataset.getValue(i,1)
			
			
			var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturalinea')  
	  
			//load record by ID in foundset  
			vSet.loadRecords(databaseManager.convertToDataSet([uuid]))  
			var record = vSet.getSelectedRecord()//forms.lst_Factura_LineasGC.foundset.getSelectedRecord();
			
			if(record && record.nli_lfa != i)
			{
				record.nli_lfa = i
				databaseManager.saveData(record)
			}
			
		}	
		
		databaseManager.refreshRecordFromDatabase(forms.lst_FacturaLineasGCNG.foundset,-1)

	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"172984C7-30BA-463D-9A90-95480C9998AB"}
 */
function btnCopyFacturaLinea(event) {
	var ro = forms.FrmFacturasGC.elements.fld_fecha_cfa.readOnly;
	var franlin = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbfacturalinea.getSize()
	// TODO Auto-generated method stub
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera de la Factura antes de duplicar Línea.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de duplicar Línea.',null,'Aceptar',null,null,null)
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
			var situ = forms.FrmFacturasGC.situconta
			if(situ == 'C')
			{
				globals.GCdialog_buttonPressed = null
				scopes.svyCustomDialogs.showErrorDialog('Error','Factura ya contabilizada. No se puede modificar.','Aceptar');
				//var methd = null;
				//globals.GCshowErrorDialog('Factura ya contabilizada. No se puede modificar.',methd,'Aceptar',null,null,null)
			}
			else if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai && forms.FrmFacturasGC.mac && forms.FrmFacturasGC.fechaenviofichero)
			{
				globals.GCdialog_buttonPressed = null
				msg = '<html>Esta factura está marcado como enviada a TicketBAI.<br>No se puede añadir más lineas.</html>'
				scopes.svyCustomDialogs.showErrorDialog('Error',msg,'Aceptar');
				//scopes.svyCustomDialogs.showErrorDialog('Error','Esta factura está marcado como enviada a TicketBAI.\n No se puede añadir más lineas.');
				//methd = null;
				//globals.GCshowErrorDialog('Esta factura está marcado como enviada a TicketBAI.\n No se puede modificar.',methd,'Aceptar',null,null,null)
			}		
			else
			{	
				//make a new record
				forms.dlg_Linea_FacturaGC.foundset.newRecord(true)
				forms.dlg_Linea_FacturaGC.eje_lfa = eje_lfa;
				forms.dlg_Linea_FacturaGC.ser_lfa = ser_lfa;
				forms.dlg_Linea_FacturaGC.nup_lfa = nup_lfa;
				forms.dlg_Linea_FacturaGC.validate_autoEnter()
				forms.dlg_Linea_FacturaGC.fecha_lfa = fecha_lfa;
				forms.dlg_Linea_FacturaGC.ref_lfa = ref_lfa;
				forms.dlg_Linea_FacturaGC.concep_lfa = concep_lfa;
				forms.dlg_Linea_FacturaGC.cant1_lfa = cant1_lfa;
				forms.dlg_Linea_FacturaGC.prec_lfa = prec_lfa;
				forms.dlg_Linea_FacturaGC.ref_lfa = ref_lfa;
				forms.dlg_Linea_FacturaGC.unme_lfa = unme_lfa;
				forms.dlg_Linea_FacturaGC.piva_lfa = piva_lfa;
				forms.dlg_Linea_FacturaGC.clie_lfa = clie_lfa;
				forms.dlg_Linea_FacturaGC.precuni_lfa = precuni_lfa;
				forms.dlg_Linea_FacturaGC.impor_lfa = impor_lfa;
				forms.dlg_Linea_FacturaGC.importot_lfa = importot_lfa;
				forms.dlg_Linea_FacturaGC.nprograma_lfa = nprograma_lfa;
				forms.dlg_Linea_FacturaGC.dto_lfa = dto_lfa;
				forms.dlg_Linea_FacturaGC.impdto_lfa = impdto_lfa;
				forms.dlg_Linea_FacturaGC.medida_lfa = medida_lfa;
				
				databaseManager.saveData()
				
				var e = forms.FrmFacturasGC.eje_cfa;
				var s = forms.FrmFacturasGC.ser_cfa;
				var n = forms.FrmFacturasGC.nup_cfa;
				
				
				if(s == null)
				{
					s = 'IS NULL'
				}
				else
				{
					s = "= '"+ser_lfa+"'"
				}
				query = "select sum(impor_lfa) from tbFacturaLinea "+
				"where eje_lfa = "+ e +" AND ser_lfa "+s+
				" AND nup_lfa = "+n;
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var imporbr=dataset.getValue(1,1)
				
				
				if(imporbr==null)
				{
					imporbr=0
				}
				forms.FrmFacturasGC.impbre_cfa = imporbr;
				forms.FrmFacturasGC.impbie_cfa = null
				forms.FrmFacturasGC.impbie2_cfa = null
				forms.FrmFacturasGC.impbie3_cfa = null
				forms.FrmFacturasGC.piva_cfa = null
				forms.FrmFacturasGC.piva2_cfa = null
				forms.FrmFacturasGC.piva3_cfa = null
				forms.FrmFacturasGC.cuotaiva_cfa = null
				forms.FrmFacturasGC.cuotaiva2_cfa = null
				forms.FrmFacturasGC.cuotaiva3_cfa = null
				forms.FrmFacturasGC.impre = null
				forms.FrmFacturasGC.impre2 = null
				forms.FrmFacturasGC.impre3 = null
				forms.FrmFacturasGC.onFocusLostDtoPP(event)
				forms.FrmFacturasGC.onFocusLostgtosfinan(event)
				forms.FrmFacturasGC.onFocusLostIva(event)
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
 * @properties={typeid:24,uuid:"97B98D8F-F55F-49CA-8DDF-D69CA3A76263"}
 */
function onRightClick(event) {
	// TODO Auto-generated method stub
	//forms.frm_nav_buttons_asientos.btn_information()
	var popUpObj = plugins.window.createPopupMenu();
		popUpObj.addMenuItem("Nueva línea", MenuOpcFacturaLineas, null);
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
 * @properties={typeid:24,uuid:"2DC6A5DA-EBA7-4D2B-AC6B-042E7EBD5A63"}
 */
function MenuOpcFacturaLineas(event) 
{
	switch (arguments[4]) {
		case 'Nueva línea': 
				btn_newLinea()
				break;
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
 * @properties={typeid:35,uuid:"F1783582-A6BF-41EB-AB84-C32F6D79AF4A",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"9C546EAA-A29D-4572-8739-C8751890F3F7",variableType:8}
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
 * @properties={typeid:24,uuid:"8B80E98E-017B-412F-9C73-28CEA53F67F5"}
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
 * @properties={typeid:24,uuid:"9CEE615F-368F-43BA-B159-344ACDFA80F5"}
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
 * @properties={typeid:24,uuid:"A951D0B4-4059-4350-AD30-4162A57072AA"}
 */
function onShow(firstShow, event) {
	rec,fsindex = null;
	forms.lst_FacturaLineasGCNG.elements.table_FacturaLineas.myFoundset.foundset.sort('nli_lfa asc')
}
