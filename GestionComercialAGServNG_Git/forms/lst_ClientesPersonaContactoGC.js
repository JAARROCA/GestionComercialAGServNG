/**
 * @properties={typeid:24,uuid:"B04B6F8A-88DD-4579-910A-FD0A44CF2002"}
 */
function btn_newLinea()
{
	var ro = forms.FrmClientesGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el cliente antes de agregar Contactos.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'SELECT * FROM [dbo].[tbMaestroClientes] where [IdCliente] =' + forms.FrmClientesGC.idcliente;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Cliente = dataset.getValue(1, 1)
		
		if(Cliente == null)
		{
			globals.GCshowErrorDialog('Cliente Inexistente! Cree uno y grabelo antes de añadir direcciones.',null,'Aceptar',null,null,null)
		}
		else
		{
			
				Cliente= forms.FrmClientesGC.idcliente
				
		
				if(!globals.GCisEditing()) 
				{	
					globals.GCstartEditing()
			
				//make a new record
				forms.dlg_ClientesPersonaContactoGC.foundset.newRecord(true)
				forms.dlg_ClientesPersonaContactoGC.id = application.getUUID()
				forms.dlg_ClientesPersonaContactoGC.idcliente = Cliente;
				
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogClientesContactos('Nuevo Contacto', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_ClientesPersonaContactoGC.elements.nombre.requestFocus();
				}
			
		}
	}
}

/**
 * @properties={typeid:24,uuid:"B24883AA-4D98-45CF-9BE8-5ED1A8492917"}
 * @AllowToRunInFind
 */
function btn_showPedidoLinea()
{
	var ro = forms.FrmClientesGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el cliente antes de editar Contactos.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		forms.dlg_ClientesPersonaContactoGC.foundset.loadAllRecords()
		var result = forms.dlg_ClientesPersonaContactoGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ClientesPersonaContactoGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ClientesPersonaContactoGC.foundset.getSize())
			{
			return;
			}
		forms.dlg_ClientesPersonaContactoGC.foundset.setSelectedIndex(forms.dlg_ClientesPersonaContactoGC.foundset.getSize());
		result = forms.dlg_ClientesPersonaContactoGC.foundset.selectRecord(uid);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	    
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_ClientesPersonaContactoGC.sub_deleteContacto()'
	
		//show the "fake" dialog
		globals.GCshowDialogClientesContactos('Editar Contacto', 1, null, null, true, 'Borrar Contacto', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"F5BCC96F-0F1F-4347-8846-C4424C8513CC"}
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
