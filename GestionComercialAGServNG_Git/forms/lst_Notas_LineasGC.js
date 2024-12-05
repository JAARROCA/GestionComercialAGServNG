/**
 * @properties={typeid:24,uuid:"6E90D751-23E0-46DC-895F-B7F034B011C2"}
 * @SuppressWarnings(deprecated)
 */
function btn_newLinea()
{
	var ro = forms.FrmNotasGC.elements.fld_fecha_cfa.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera de la Nota antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var situ = forms.FrmNotasGC.situcobrado
		if(situ == 'C')
		{
			globals.GCdialog_buttonPressed = null
			var methd = null;
			globals.GCshowErrorDialog('Nota ya cobrada. No se añadir más lineas.',methd,'Aceptar',null,null,null)
		}
		else
		{
			if(forms.FrmNotasGC.eje_cfa && forms.FrmNotasGC.nup_cfa)
			{
				var query = "select id from [tbNotaCabecera] where eje_cfa="+forms.FrmNotasGC.eje_cfa+
							" and nup_cfa =" + forms.FrmNotasGC.nup_cfa
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var Fra = dataset.getValue(1, 1)
				
				if(Fra == null)
				{
					globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir líneas.',null,'Ok',null,null,null)
				}
				else
				{
					var ejer = forms.FrmNotasGC.eje_cfa
					Fra= forms.FrmNotasGC.nup_cfa
					var Cliente= forms.FrmNotasGC.clie_cfa
					var DescCliente= forms.FrmNotasGC.descclie_cfa			
					var Fecha = forms.FrmNotasGC.fecha_cfa
					
					
					
					//if there's no transaction, start one - so they can "cancel"
					if(!globals.GCisEditing()) globals.GCstartEditing()
					
					forms.dlg_Linea_NotaGC.elements.BtnImagRefencia.enabled = false;
					forms.dlg_Linea_NotaGC.elements.BtnImagRefencia.visible = false;
				
					//make a new record
					forms.dlg_Linea_NotaGC.foundset.newRecord(true)
					forms.dlg_Linea_NotaGC.eje_lfa = ejer
					forms.dlg_Linea_NotaGC.nup_lfa = Fra
					forms.dlg_Linea_NotaGC.validate_autoEnter()
					forms.dlg_Linea_NotaGC.clie_lfa = Cliente
					forms.dlg_Linea_NotaGC.descclie_lfa = DescCliente
					forms.dlg_Linea_NotaGC.fecha_lfa = Fecha;
					forms.dlg_Linea_NotaGC.unme_lfa = 1;
					
				
					//databaseManager.saveData();
				
					//show the "fake" dialog
					globals.GCshowDialogNotaLinea('Nueva Linea', null, null, null, null, null, null, null, null, null);
				
					//go first field
					forms.dlg_Linea_NotaGC.controller.focusFirstField()
					
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"C6293C0B-329A-4EDF-B638-4C8C6AD352A2"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 */
function btn_showFacturaLinea()
{
	var ro = forms.FrmNotasGC.elements.fld_fecha_cfa.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera de la Nota antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		/*var uid = id
		forms.dlg_Linea_NotaGC.foundset.loadAllRecords()
		var result = forms.dlg_Linea_NotaGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_NotaGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_Linea_NotaGC.foundset.getSize())
			{
				return;
			}
		forms.dlg_Linea_NotaGC.foundset.setSelectedIndex(forms.dlg_Linea_NotaGC.foundset.getSize());
		result = forms.dlg_Linea_NotaGC.foundset.selectRecord(uid);
		}*/
		var bool = forms.dlg_Linea_NotaGC.foundset.loadRecords(databaseManager.convertToDataSet([id]))
		if(bool == true)
		{
			//start a transaction
			if(!globals.GCisEditing()) globals.GCstartEditing()
			
			if(forms.dlg_Linea_NotaGC.foundset.GCtbnotalinea_to_tbmaestroarticulos)
			{
				if(forms.dlg_Linea_NotaGC.foundset.GCtbnotalinea_to_tbmaestroarticulos.imag_a != null && 
				forms.dlg_Linea_NotaGC.foundset.GCtbnotalinea_to_tbmaestroarticulos.imag_a != '')
				{
					forms.dlg_Linea_NotaGC.elements.BtnImagRefencia.enabled = true;
					forms.dlg_Linea_NotaGC.elements.BtnImagRefencia.visible = true;
				}
				else
				{
					forms.dlg_Linea_NotaGC.elements.BtnImagRefencia.enabled = false;
					forms.dlg_Linea_NotaGC.elements.BtnImagRefencia.visible = false;
				}
			}
			else
			{
				forms.dlg_Linea_NotaGC.elements.BtnImagRefencia.enabled = false;
				forms.dlg_Linea_NotaGC.elements.BtnImagRefencia.visible = false;
			}
		
			//setup the method to execute when the dialog closes
			globals.GCdialog_performMethod = 'forms.lst_Notas_LineasGC.sub_deleteNotaLinea()'
			
			//show the "fake" dialog
			globals.GCshowDialogNotaLinea('Editar Línea', 1, null, null, true, 'Borrar Línea', null, null, null, null);
		}
	}
}

/**
 * @properties={typeid:24,uuid:"36E06598-B96C-439A-BB09-F0E3723ABFFF"}
 */
function sub_deleteNotaLinea()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Línea')
	{
		var e = forms.lst_Notas_LineasGC.eje_lfa;
		var n = forms.lst_Notas_LineasGC.nup_lfa;
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
			var query = "select ID "+
			"from tbNotaLinea "+
			"where eje_lfa ='"+e+"' and nup_lfa = "+n+
			" order by nli_lfa asc";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
			
			
			
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var uuid = dataset.getValue(i,1)
				
				var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbnotalinea')  
		  
				//load record by ID in foundset  
				vSet.loadRecords(databaseManager.convertToDataSet([uuid]))  
				var record = vSet.getSelectedRecord()//forms.lst_Notas_LineasGC.foundset.getSelectedRecord();
				if(record && record.nli_lfa != i)
				{
					record.nli_lfa = i
					databaseManager.saveData(record)
				}
			}	
			
			databaseManager.refreshRecordFromDatabase(forms.lst_Notas_LineasGC.foundset,-1)
	}
}
