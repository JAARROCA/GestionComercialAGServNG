/**
 * @properties={typeid:24,uuid:"2A86A960-269D-4755-A320-22977D9E42B4"}
 * @SuppressWarnings(deprecated)
 */
function btn_newLinea()
{
	var ro = forms.FrmAlbaranComprasGC.elements.fld_fecha_ap.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera del Albarán antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Albaranes de Compras.',null,'Aceptar',null,null,null)
			
		}
		else
		{
			query = "select * from [albapro] where [pro_ap] =" + forms.FrmAlbaranComprasGC.pro_ap +
					" and [nup_ap] = '" + forms.FrmAlbaranComprasGC.nup_ap + "'"
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var Albaran = dataset.getValue(1, 2)
			
			if(Albaran == null)
			{
				globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir líneas.',null,'Ok',null,null,null)
			}
			else
			{
				var Proveedor = forms.FrmAlbaranComprasGC.pro_ap
				Albaran= forms.FrmAlbaranComprasGC.nup_ap
				
				
				//if there's no transaction, start one - so they can "cancel"
				if(!globals.GCisEditing())
				{
					globals.GCstartEditing()
			
				//make a new record
				forms.dlg_Linea_AlbaranComprasGC.foundset.newRecord(true)
			
				forms.dlg_Linea_AlbaranComprasGC.prov_lap = Proveedor
				forms.dlg_Linea_AlbaranComprasGC.nup_lap = Albaran
				forms.dlg_Linea_AlbaranComprasGC.validate_autoEnter()		
				
			
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogAlbaranCompraLinea('Nueva Linea', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_Linea_AlbaranComprasGC.controller.focusFirstField()
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"1122AAF4-79DB-48B1-AF3D-AE69503DB562"}
 * @SuppressWarnings(deprecated)
 */
function btn_showAlbaranCompraLinea()
{
	var ro = forms.FrmAlbaranComprasGC.elements.fld_fecha_ap.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera del Albarán antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		//select the right row
		var Proveedor = forms.FrmAlbaranComprasGC.pro_ap
		var Albaran = forms.FrmAlbaranComprasGC.nup_ap	
		
		forms.dlg_Linea_AlbaranComprasGC.foundset.loadAllRecords()
		var result = forms.dlg_Linea_AlbaranComprasGC.foundset.selectRecord(nli_lap, Albaran, Proveedor)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_AlbaranComprasGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_Linea_AlbaranComprasGC.foundset.getSize())
		{
			return;
		}
		forms.dlg_Linea_AlbaranComprasGC.foundset.setSelectedIndex(forms.dlg_Linea_AlbaranComprasGC.foundset.getSize());
		result = forms.dlg_Linea_AlbaranComprasGC.foundset.selectRecord(nli_lap, Albaran, Proveedor);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_AlbaranCompra_LineasGC.sub_deleteAlbaranCompraLinea()'
	
		//show the "fake" dialog
		globals.GCshowDialogAlbaranCompraLinea('Editar Línea', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"85C6C5AA-F25D-48E7-9E6E-13258366B02A"}
 */
function sub_deleteAlbaranCompraLinea()
{
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Albaranes de Compras.',null,'Aceptar',null,null,null)
		
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
