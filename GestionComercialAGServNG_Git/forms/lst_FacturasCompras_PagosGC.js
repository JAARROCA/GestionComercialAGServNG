/**
 * @properties={typeid:24,uuid:"EDE89CCB-EAB3-4C73-91C2-1552BA31A3AF"}
 * @SuppressWarnings(deprecated)
 */
function btn_newLinea()
{
	var ro = forms.FrmFacturasComprasGC.elements.fld_fecha_cfca.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de agregar Pagos.',null,'Aceptar',null,null,null)
	}
	else
	{		
		if(globals.GCisEditing()) globals.GCcancelEditing()
		if(forms.FrmFacturasComprasGC.pro_cfca && forms.FrmFacturasComprasGC.nup_cfca)
		{
			var query = "select * from [tbFacturaCompraCabecera] where pro_cfca="+forms.FrmFacturasComprasGC.pro_cfca+
						" and nup_cfca ='" + forms.FrmFacturasComprasGC.nup_cfca +"'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var Fra = dataset.getValue(1, 1)
			
			if(Fra == null)
			{
				globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir Pagos.',null,'Ok',null,null,null)
			}
			else
			{
				var prov = forms.FrmFacturasComprasGC.pro_cfca
				Fra= forms.FrmFacturasComprasGC.nup_cfca
				
				
				
				//if there's no transaction, start one - so they can "cancel"
				if(!globals.GCisEditing()) globals.GCstartEditing()
			
				
				//make a new record
				forms.dlg_FacturaPagosGC.foundset.newRecord(true)
				forms.dlg_FacturaPagosGC.pro_pag = prov;
				forms.dlg_FacturaPagosGC.nup_pag = Fra;
				forms.dlg_FacturaPagosGC.validate_autoEnter()
				forms.dlg_FacturaPagosGC.impor_pag = forms.FrmFacturasComprasGC.impnee_cfca  - forms.lst_FacturasCompras_PagosGC.sumimporte;
				
				
			
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogFacturaPagos('Nuevo Pago', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_FacturaPagosGC.controller.focusFirstField()
				
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"1EDB996F-7481-460C-9F3F-B29DF198C7D0"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 */
function btn_showFacturaLinea()
{
	var ro = forms.FrmFacturasComprasGC.elements.fld_fecha_cfca.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de editar Pagos.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		forms.dlg_FacturaPagosGC.foundset.loadAllRecords()
		var result = forms.dlg_FacturaPagosGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_FacturaPagosGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_FacturaPagosGC.foundset.getSize())
			{
				return;
			}
		forms.dlg_FacturaPagosGC.foundset.setSelectedIndex(forms.dlg_FacturaPagosGC.foundset.getSize());
		result = forms.dlg_FacturaPagosGC.foundset.selectRecord(uid);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	
		
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_FacturasCompras_PagosGC.sub_deleteFacturaLinea()'
		
		//show the "fake" dialog
		globals.GCshowDialogFacturaPagos('Editar Pago', 1, null, null, true, 'Borrar Pago', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"96B57C53-594D-4EBA-9DC0-4465C97C083B"}
 */
function sub_deleteFacturaLinea()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Pago')
	{
		var p = forms.lst_FacturasCompras_PagosGC.pro_pag;
		var n = forms.lst_FacturasCompras_PagosGC.nup_pag;
		
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
			"from tbFacturacompracabecerapagos "+
			"where pro_pag ='"+p+"' and nup_pag = '"+n+
			"' order by linea_pag asc";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
			
			
			
			var Linea = 0;
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var uuid = dataset.getValue(i,1)
				
				var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturacompracabecerapagos')  
		  
				//load record by ID in foundset  
				vSet.loadRecords(databaseManager.convertToDataSet([uuid]))  
				var record = vSet.getSelectedRecord()//forms.lst_FacturasCompras_PagosGC.foundset.getSelectedRecord();
				Linea += 1  
				record.linea_cob = Linea
				databaseManager.saveData(record)
				
			}	
			
			databaseManager.refreshRecordFromDatabase(forms.lst_FacturasCompras_PagosGC.foundset,-1)
			forms.FrmFacturasComprasGC.situcobrocolor()
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
 * @properties={typeid:24,uuid:"6A7141A7-2976-4580-8ED0-CEF2B8B69C14"}
 * @SuppressWarnings(deprecated)
 */
function btndeleteFacturaLinea(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	
	
	var methd = 'forms.lst_FacturasCompras_PagosGC.BorraloLinea(event)'
	globals.GCshowQuestionDialog('Deseas realmente borrar este pago?',methd,'No','Si',null,null)
	
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"4C49EAF4-33AF-489C-9048-B1BB79C8611C"}
 */
function BorraloLinea(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{	
		foundset.deleteRecord()	
		forms.FrmFacturasComprasGC.situcobrocolor()
	}
}

/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"2789BA2A-2317-4A9D-B219-E1A914BC8F86"}
 */
function btn_RegistrarPagoAutomaticoLinea()
{
	var ro = forms.FrmFacturasComprasGC.elements.fld_fecha_cfca.readOnly;
	var impnee = forms.FrmFacturasComprasGC.impnee_cfca;
	if(!impnee) impnee = 0;
	var pagosfactura = forms.lst_FacturasCompras_PagosGC.sumimporte;
	if(!pagosfactura) pagosfactura = 0;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de agregar Pagos.',null,'Aceptar',null,null,null)
	}
	else if((impnee  - pagosfactura) <= 0)
	{
		globals.GCshowErrorDialog('Ya existen pagos registrados que completan el importe total de la factura.',null,'Aceptar',null,null,null)
	}
	else
	{		
		if(globals.GCisEditing()) globals.GCcancelEditing()
		if(forms.FrmFacturasComprasGC.pro_cfca && forms.FrmFacturasComprasGC.nup_cfca)
		{
			var query = "select * from [tbFacturaCompraCabecera] where pro_cfca="+forms.FrmFacturasComprasGC.pro_cfca+
						" and nup_cfca ='" + forms.FrmFacturasComprasGC.nup_cfca +"'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var Fra = dataset.getValue(1, 1)
			
			if(Fra == null)
			{
				globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir Pagos.',null,'Ok',null,null,null)
			}
			else
			{
				var prov = forms.FrmFacturasComprasGC.pro_cfca
				Fra= forms.FrmFacturasComprasGC.nup_cfca
				
				
				
				//if there's no transaction, start one - so they can "cancel"
				//if(!globals.GCisEditing()) globals.GCstartEditing()
			
				
				//make a new record
				forms.dlg_FacturaPagosGC.foundset.newRecord(true)
				forms.dlg_FacturaPagosGC.pro_pag = prov;
				forms.dlg_FacturaPagosGC.nup_pag = Fra;
				forms.dlg_FacturaPagosGC.validate_autoEnter()
				forms.dlg_FacturaPagosGC.motivo_pag = 'PAGO AUTOMÁTICO'
				forms.dlg_FacturaPagosGC.impor_pag = forms.FrmFacturasComprasGC.impnee_cfca  - forms.lst_FacturasCompras_PagosGC.sumimporte;
				
				
			
				databaseManager.saveData(forms.dlg_FacturaPagosGC.foundset);
			
				//show the "fake" dialog
				//globals.GCshowDialogFacturaPagos('Nuevo Pago', null, null, null, null, null, null, null, null, null);
			
				//go first field
				//forms.dlg_FacturaPagosGC.controller.focusFirstField()
				
			}
		}
	}
}
