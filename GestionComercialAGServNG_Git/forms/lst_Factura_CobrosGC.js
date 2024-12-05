/**
 * @properties={typeid:24,uuid:"4F82A890-A186-4993-AEC8-279FC53EE3CB"}
 * @SuppressWarnings(deprecated)
 */
function btn_newLinea()
{
	var ro = forms.FrmFacturasGC.elements.fld_fecha_cfa.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de agregar Cobros.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
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
			var query = "select * from [tbFacturaCabecera] where eje_cfa="+forms.FrmFacturasGC.eje_cfa+
						" and ser_cfa "+ser+" and nup_cfa =" + forms.FrmFacturasGC.nup_cfa
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var Fra = dataset.getValue(1, 1)
			
			if(Fra == null)
			{
				globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir cobros.',null,'Ok',null,null,null)
			}
			else
			{
				var ejer = forms.FrmFacturasGC.eje_cfa
				ser =forms.FrmFacturasGC.ser_cfa
				Fra= forms.FrmFacturasGC.nup_cfa
				
				
				
				//if there's no transaction, start one - so they can "cancel"
				if(!globals.GCisEditing()) globals.GCstartEditing()
			
				
				//make a new record
				forms.dlg_FacturaCobrosGC.foundset.newRecord(true)
				forms.dlg_FacturaCobrosGC.eje_cob = ejer;
				forms.dlg_FacturaCobrosGC.ser_cob = ser;
				forms.dlg_FacturaCobrosGC.nup_cob = Fra;
				forms.dlg_FacturaCobrosGC.validate_autoEnter()
				forms.dlg_FacturaCobrosGC.impor_cob = forms.FrmFacturasGC.impnee_cfa  - forms.lst_Factura_CobrosGC.sumimporte;
				
				
			
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogFacturaCobros('Nuevo Cobro', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_FacturaCobrosGC.controller.focusFirstField()
				
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"BADBD30F-C499-41E0-B5A2-9B09BB69E0BD"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 */
function btn_showFacturaLinea()
{
	var ro = forms.FrmFacturasGC.elements.fld_fecha_cfa.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de editar Cobros.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		/*forms.dlg_FacturaCobrosGC.foundset.loadAllRecords()
		var result = forms.dlg_FacturaCobrosGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_FacturaCobrosGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_FacturaCobrosGC.foundset.getSize())
			{
				return;
			}
		forms.dlg_FacturaCobrosGC.foundset.setSelectedIndex(forms.dlg_FacturaCobrosGC.foundset.getSize());
		result = forms.dlg_FacturaCobrosGC.foundset.selectRecord(uid);
		}*/
		var bool = forms.dlg_FacturaCobrosGC.foundset.loadRecords(databaseManager.convertToDataSet([uid]))
		if(bool == true)
		{
			//start a transaction
			if(!globals.GCisEditing()) globals.GCstartEditing()
		
			
			//setup the method to execute when the dialog closes
			globals.GCdialog_performMethod = 'forms.lst_Factura_CobrosGC.sub_deleteFacturaLinea()'
			
			//show the "fake" dialog
			globals.GCshowDialogFacturaCobros('Editar Cobro', 1, null, null, true, 'Borrar Cobro', null, null, null, null);
		}
	}
}

/**
 * @properties={typeid:24,uuid:"9FAFF32E-A79F-4B7B-AA05-133D66D6AD01"}
 */
function sub_deleteFacturaLinea()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Cobro')
	{
		var e = forms.lst_Factura_CobrosGC.eje_cob;
		var s = forms.lst_Factura_CobrosGC.ser_cob;
		var n = forms.lst_Factura_CobrosGC.nup_cob;
		
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
			"from tbFacturacabeceracobros "+
			"where eje_cob ='"+e+"' and nup_cob = "+n+" and "+
			"ser_cob = '"+s+
			"' order by linea_cob asc";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
			
			
			
			var Linea = 0;
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var uuid = dataset.getValue(i,1)
				
				var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturacabeceracobros')  
		  
				//load record by ID in foundset  
				vSet.loadRecords(databaseManager.convertToDataSet([uuid]))  
				var record = vSet.getSelectedRecord()//forms.lst_Factura_CobrosGC.foundset.getSelectedRecord();
				Linea += 1  
				record.linea_cob = Linea
				databaseManager.saveData(record)
				
			}	
			
			databaseManager.refreshRecordFromDatabase(forms.lst_Factura_CobrosGC.foundset,-1)
			forms.FrmFacturasGC.situcobrocolor()
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
 * @properties={typeid:24,uuid:"C05B2818-2ABF-4D23-AEF9-A33FCCE97F96"}
 * @SuppressWarnings(deprecated)
 */
function btndeleteFacturaLinea(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	
	
	var methd = 'forms.lst_Factura_CobrosGC.BorraloLinea(event)'
	globals.GCshowQuestionDialog('Deseas realmente borrar este cobro?',methd,'No','Si',null,null)
	
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"5C0EB882-7B59-4F35-9986-F2DA9ADF5176"}
 */
function BorraloLinea(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{	
		foundset.deleteRecord()	
		forms.FrmFacturasGC.situcobrocolor()
	}
}

/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"6E8EC9AB-7C40-4DE8-B619-4F82B5413AE7"}
 */
function btn_RegistrarCobroAutomaticoLinea()
{
	var ro = forms.FrmFacturasGC.elements.fld_fecha_cfa.readOnly;
	var impnee = forms.FrmFacturasGC.impnee_cfa;
	if(!impnee) impnee = 0;
	var cobrosfactura = forms.lst_Factura_CobrosGC.sumimporte;
	if(!cobrosfactura) cobrosfactura = 0;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de agregar Cobros.',null,'Aceptar',null,null,null)
	}
	else if((impnee  - cobrosfactura) <= 0)
	{
		globals.GCshowErrorDialog('Ya existen cobros registrados que completan el importe total de la factura.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
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
			var query = "select * from [tbFacturaCabecera] where eje_cfa="+forms.FrmFacturasGC.eje_cfa+
						" and ser_cfa "+ser+" and nup_cfa =" + forms.FrmFacturasGC.nup_cfa
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var Fra = dataset.getValue(1, 1)
			
			if(Fra == null)
			{
				globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir cobros.',null,'Ok',null,null,null)
			}			
			else
			{
				var ejer = forms.FrmFacturasGC.eje_cfa
				ser =forms.FrmFacturasGC.ser_cfa
				Fra= forms.FrmFacturasGC.nup_cfa
				
				
				
				//if there's no transaction, start one - so they can "cancel"
				//if(!globals.GCisEditing()) globals.GCstartEditing()
			
				
				//make a new record
				forms.dlg_FacturaCobrosGC.foundset.newRecord(true)
				forms.dlg_FacturaCobrosGC.eje_cob = ejer;
				forms.dlg_FacturaCobrosGC.ser_cob = ser;
				forms.dlg_FacturaCobrosGC.nup_cob = Fra;
				forms.dlg_FacturaCobrosGC.validate_autoEnter()
				forms.dlg_FacturaCobrosGC.motivo_cob = 'COBRO AUTOMÁTICO'
				forms.dlg_FacturaCobrosGC.impor_cob = forms.FrmFacturasGC.impnee_cfa  - forms.lst_Factura_CobrosGC.sumimporte;
				
				
			
				databaseManager.saveData(forms.dlg_FacturaCobrosGC.foundset);
			
				
				
			}
		}
	}
}
