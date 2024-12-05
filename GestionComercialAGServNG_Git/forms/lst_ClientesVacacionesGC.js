/**
 * @properties={typeid:24,uuid:"2B22D359-F40E-4BBD-A62B-33E7AAC0BA3A"}
 */
function btn_newLinea()
{
	var ro = forms.FrmClientesGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el cliente antes de agregar periodos de Vacaciones.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'SELECT * FROM [dbo].[tbMaestroClientes] where [IdCliente] =' + forms.FrmClientesGC.idcliente;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Cliente = dataset.getValue(1, 1)
		
		if(Cliente == null)
		{
			globals.GCshowErrorDialog('Cliente Inexistente! Cree uno y grabelo antes de periodos de Vacaciones.',null,'Aceptar',null,null,null)
		}
		else
		{
			
				Cliente= forms.FrmClientesGC.idcliente
				
		
				if(!globals.GCisEditing()) 
				{	
					globals.GCstartEditing()
			
				//make a new record
				forms.dlg_ClientesVacacionesGC.foundset.newRecord(true)
				forms.dlg_ClientesVacacionesGC.idcliente = Cliente;
				forms.dlg_ClientesVacacionesGC.validate_autoEnter()
				
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogClienteVacaciones('Nuevo Periodo de Vacaciones', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_ClientesVacacionesGC.elements.nombre.requestFocus();
				}
			
		}
	}
}

/**
 * @properties={typeid:24,uuid:"228AD2B1-5BFC-486C-B955-530AE06BFDD1"}
 * @AllowToRunInFind
 */
function btn_showPedidoLinea()
{
	var ro = forms.FrmClientesGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el cliente antes de editar periodos de Vacaciones.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		forms.dlg_ClientesVacacionesGC.foundset.loadAllRecords()
		var result = forms.dlg_ClientesVacacionesGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ClientesVacacionesGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ClientesVacacionesGC.foundset.getSize())
			{
			return;
			}
		forms.dlg_ClientesVacacionesGC.foundset.setSelectedIndex(forms.dlg_ClientesVacacionesGC.foundset.getSize());
		result = forms.dlg_ClientesVacacionesGC.foundset.selectRecord(uid);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	    
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_ClientesVacacionesGC.sub_deleteContacto()'
	
		//show the "fake" dialog
		globals.GCshowDialogClienteVacaciones('Editar Vacaciones', 1, null, null, true, 'Borrar Vacaciones', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"945BA814-814A-44A7-9F9A-CD68D78692CA"}
 */
function sub_deleteContacto()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Vacaciones')
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
