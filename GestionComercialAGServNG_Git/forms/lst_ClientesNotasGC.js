/**
 *
 * @properties={typeid:24,uuid:"D15A7329-E57B-4DE7-AA51-9E77A35C173E"}
 * @SuppressWarnings(deprecated)
 */
function btn_newEmpresaPExtra()
{
	var ro = forms.FrmClientesGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el cliente antes de agregar Notas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var cli = forms.FrmClientesGC.idcliente;
		if(!cli) cli = -99;
		var query = "select * from [dbo].[tbMaestroClientes] where [IdCliente] =" + cli;
					
		//var ds = controller.getDataSource().split('/');
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Cliente = dataset.getValue(1, 1)
		
		if(Cliente == null)
		{
			globals.GCshowErrorDialog('El Cliente aún no existe!\n\n Cree uno y grabelo antes de añadir Notas.',null,'Aceptar',null,null,null)
		}
		else
		{
		    Cliente= forms.FrmClientesGC.idcliente;
			
			//if there's no transaction, start one - so they can "cancel"
			if(!globals.GCisEditing()) 
			{
				globals.GCstartEditing()
		
			//make a new record
				forms.dlgClientesNotasGC.foundset.newRecord(false)
			
				
				forms.dlgClientesNotasGC.idcliente = Cliente;
				forms.dlgClientesNotasGC.validate_autoEnter();
				
			
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogClientesNotas('Nueva Nota', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlgClientesNotasGC.elements.titulo.requestFocus()
			}
		}
	}
}

/**
 *
 * @properties={typeid:24,uuid:"501856D8-2E3D-4B2D-A37B-0E283C5C4F1F"}
 * @SuppressWarnings(deprecated)
 */
function btn_showEmpresaPExtra()
{
	var ro = forms.FrmClientesGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el cliente antes de editar Notas.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		var result = forms.dlgClientesNotasGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlgClientesNotasGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlgClientesNotasGC.foundset.getSize())
			{
			return;
			}
		forms.dlgClientesNotasGC.foundset.setSelectedIndex(forms.dlgClientesNotasGC.foundset.getSize());
		result = forms.dlgClientesNotasGC.foundset.selectRecord(uid);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_ClientesNotasGC.sub_deleteClientesNotas()'
		
		//show the "fake" dialog
		globals.GCshowDialogClientesNotas('Editar Nota', 1, null, null, true, 'Borrar Nota', null, null, null, null);
	}
}

/**
 *
 * @properties={typeid:24,uuid:"24A33180-3743-4E81-AE57-A5049DE1B4DC"}
 */
function sub_deleteClientesNotas()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Nota')
	{
		//check to make sure that the address in question isn't used on any orders
		/*var bAdrCnt = addresses_to_orders_billing.getSize()
		var sAdrCnt = addresses_to_orders_shipping.getSize()

		if(bAdrCnt == 0 && sAdrCnt == 0)
		{*/
		forms.lst_ClientesNotasGC.foundset.deleteRecord()
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
