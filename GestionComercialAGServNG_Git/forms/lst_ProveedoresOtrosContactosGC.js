/**
 * @properties={typeid:24,uuid:"55980521-E01C-4342-964E-209889F8DFAA"}
 */
function btn_newLinea()
{
	var ro = forms.FrmProveedoresGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el proveedor antes de agregar Contactos.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var prov = forms.FrmProveedoresGC.codpro;
		if(prov != null)
		{
			var query = 'SELECT * FROM [tbMaestroProveedores] where [Codpro] =' + prov;
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var Proveedor = dataset.getValue(1, 1)
			
			if(Proveedor == null)
			{
				globals.GCshowErrorDialog('Proveedor Inexistente! Cree uno y grabelo antes de añadir Contactos.',null,'Ok',null,null,null)
			}
			else
			{
				
				Proveedor= forms.FrmProveedoresGC.codpro
				
		
				if(!globals.GCisEditing()) 
				{	
					globals.GCstartEditing()
			
				//make a new record
				forms.dlg_ProveedorOtrosContactosGC.foundset.newRecord(true)
			
				forms.dlg_ProveedorOtrosContactosGC.codpro = Proveedor;
				forms.dlg_ProveedorOtrosContactosGC.elements.idcontacto.bgcolor = '#ffffff'
				forms.dlg_ProveedorOtrosContactosGC.elements.idcontacto.readOnly = false
				
			
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogProveedorOtrosContactos('Nuevo Contacto', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_ProveedorOtrosContactosGC.elements.idcontacto.requestFocus();
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"4F28A72F-0AB6-4B04-B6CC-68FD76797FDA"}
 * @AllowToRunInFind
 */
function btn_showPedidoLinea()
{
	var ro = forms.FrmProveedoresGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el proveedor antes de editar Contactos.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		forms.dlg_ProveedorOtrosContactosGC.foundset.loadAllRecords()
		var result = forms.dlg_ProveedorOtrosContactosGC.foundset.selectRecord(codpro,idcontacto)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ProveedorOtrosContactosGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ProveedorOtrosContactosGC.foundset.getSize())
			{
			return;
			}
		forms.dlg_ProveedorOtrosContactosGC.foundset.setSelectedIndex(forms.dlg_ProveedorOtrosContactosGC.foundset.getSize());
		result = forms.dlg_ProveedorOtrosContactosGC.foundset.selectRecord(codpro,idcontacto);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	    forms.dlg_ProveedorOtrosContactosGC.elements.idcontacto.bgcolor = '#f0f0f0'
		forms.dlg_ProveedorOtrosContactosGC.elements.idcontacto.readOnly = true
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_ProveedoresOtrosContactosGC.sub_deleteContacto()'
	
		//show the "fake" dialog
		globals.GCshowDialogProveedorOtrosContactos('Editar Contacto', 1, null, null, true, 'Borrar Contacto', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"5E7F8801-0BF5-4749-866B-647F445D9826"}
 */
function sub_deleteContacto()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Contacto')
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
