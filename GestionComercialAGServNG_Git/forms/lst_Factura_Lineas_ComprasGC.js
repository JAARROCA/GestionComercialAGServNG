/**
 * @properties={typeid:24,uuid:"1FE0BC30-A756-40CA-905E-CFA9894BA5C7"}
 * @SuppressWarnings(deprecated)
 */
function btn_newLinea()
{
	var ro = forms.FrmFacturasComprasGC.elements.fld_fecha_cfca.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		
		var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Facturas de Compras.',null,'Aceptar',null,null,null)		
		}
		else
		{
			if(forms.FrmFacturasComprasGC.pro_cfca == null) var prov = 0;
			else prov = forms.FrmFacturasComprasGC.pro_cfca;
			if(forms.FrmFacturasComprasGC.nup_cfca == null) var fra = 0;
			else fra = forms.FrmFacturasComprasGC.nup_cfca;
			query = "select * from tbFacturaCompraCabecera where pro_cfca="+prov+
						" and nup_cfca = '"+fra+"'";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var Factura = dataset.getValue(1, 1)
			
			if(Factura == null)
			{
				globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir líneas.',null,'Ok',null,null,null)
			}
			else
			{
				Factura= forms.FrmFacturasComprasGC.nup_cfca
				var Proveedor = forms.FrmFacturasComprasGC.pro_cfca;
				var Fecha = forms.FrmFacturasComprasGC.fecha_cfca
				var IVA = forms.FrmFacturasComprasGC.GCtbfacturacompracabecera_to_tbmaestroproveedores.porciva			
				
				//if there's no transaction, start one - so they can "cancel"
				if(!globals.GCisEditing()) globals.GCstartEditing()
			
					//make a new record
					forms.dlg_Linea_FacturaComprasGC.foundset.newRecord(true)
					forms.dlg_Linea_FacturaComprasGC.pro_lfca = Proveedor
					forms.dlg_Linea_FacturaComprasGC.nup_lfca = Factura
					forms.dlg_Linea_FacturaComprasGC.validate_autoEnter()
					forms.dlg_Linea_FacturaComprasGC.fecha_lfca = Fecha
					forms.dlg_Linea_FacturaComprasGC.piva_lfca = IVA
					
				
					//databaseManager.saveData();
				
					//show the "fake" dialog
					globals.GCshowDialogFacturaCompraLinea('Nueva Linea', null, null, null, null, null, null, null, null, null);
				
					//go first field
					forms.dlg_Linea_FacturaComprasGC.controller.focusFirstField()
				
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"CB2A619B-87D1-4A9C-A5B0-43C542E30E90"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 */
function btn_showFacturaLinea()
{
	var ro = forms.FrmFacturasComprasGC.elements.fld_fecha_cfca.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		//select the right row
		foundset.loadAllRecords()
		var result = forms.dlg_Linea_FacturaComprasGC.foundset.selectRecord(nli_lfca,nup_lfca,pro_lfca)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_FacturaComprasGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_Linea_FacturaComprasGC.foundset.getSize())
		{
			return;
		}
		forms.dlg_Linea_FacturaComprasGC.foundset.setSelectedIndex(forms.dlg_Linea_FacturaComprasGC.foundset.getSize());
		result = forms.dlg_Linea_FacturaComprasGC.foundset.selectRecord(nli_lfca,nup_lfca,pro_lfca);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_Factura_Lineas_ComprasGC.sub_deleteFacturaLinea()'
		
		//show the "fake" dialog
		globals.GCshowDialogFacturaCompraLinea('Editar Línea', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"32FE1D43-5BEE-4E1F-9F87-4B21EB98BEBB"}
 */
function sub_deleteFacturaLinea()
{
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Facturas de Compras.',null,'Aceptar',null,null,null)		
	}
	else
	{
		if(globals.GCdialog_buttonPressed == 'Borrar Línea')
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
				globals.GCshowErrorDialog(msg,'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null)
			}*/
		}
	}
}
