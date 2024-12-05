/**
 * @properties={typeid:24,uuid:"6F2C0345-76B0-4BF3-A818-AA27365A1861"}
 */
function btn_newLinea()
{
	var ro = forms.FrmClientesGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el cliente antes de agregar Precios de Artículos.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'SELECT * FROM [dbo].[tbMaestroClientes] where [IdCliente] =' + forms.FrmClientesGC.idcliente;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Cliente = dataset.getValue(1, 1)
		
		if(Cliente == null)
		{
			globals.GCshowErrorDialog('Cliente Inexistente! Cree uno y grabelo antes de añadir Precios de Artículos.',null,'Aceptar',null,null,null)
		}
		else
		{
			
				Cliente= forms.FrmClientesGC.idcliente
				
		
				if(!globals.GCisEditing()) 
				{	
					globals.GCstartEditing()
			
				forms.dlg_ClientesArticuloPrecioGC.elements.BtnRefencia.visible = true;
				forms.dlg_ClientesArticuloPrecioGC.elements.idarticulo.readOnly = false;
				forms.dlg_ClientesArticuloPrecioGC.elements.idarticulo.bgcolor = '#ffffff'//'#f0f0f0';
				forms.dlg_ClientesArticuloPrecioGC.elements.idarticulo.visible = true;
				forms.dlg_ClientesArticuloPrecioGC.elements.lbl_idarticulo.visible = false;
				//make a new record
				forms.dlg_ClientesArticuloPrecioGC.foundset.newRecord(true)
				forms.dlg_ClientesArticuloPrecioGC.id = application.getUUID()
				forms.dlg_ClientesArticuloPrecioGC.idcliente = Cliente;
				
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogClientesPrecioArticulo('Nuevo Precio Artículo', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_ClientesArticuloPrecioGC.elements.idarticulo.requestFocus();
				}
			
		}
	}
}

/**
 * @properties={typeid:24,uuid:"0946F36B-2BA9-4843-8AC4-7DDD3E264CDE"}
 * @AllowToRunInFind
 */
function btn_showPedidoLinea()
{
	var ro = forms.FrmClientesGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el cliente antes de editar Precios de Artículos.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		forms.dlg_ClientesArticuloPrecioGC.foundset.loadAllRecords()
		var result = forms.dlg_ClientesArticuloPrecioGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ClientesArticuloPrecioGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ClientesArticuloPrecioGC.foundset.getSize())
			{
			return;
			}
		forms.dlg_ClientesArticuloPrecioGC.foundset.setSelectedIndex(forms.dlg_ClientesArticuloPrecioGC.foundset.getSize());
		result = forms.dlg_ClientesArticuloPrecioGC.foundset.selectRecord(uid);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	    
		forms.dlg_ClientesArticuloPrecioGC.elements.BtnRefencia.visible = false;
		forms.dlg_ClientesArticuloPrecioGC.elements.idarticulo.readOnly = true;
		forms.dlg_ClientesArticuloPrecioGC.elements.idarticulo.bgcolor = '#F0F0F0';
		forms.dlg_ClientesArticuloPrecioGC.elements.idarticulo.visible = false;
		forms.dlg_ClientesArticuloPrecioGC.elements.lbl_idarticulo.visible = true;
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_ClientesPrecioArticuloGC.sub_deleteContacto()'
	
		//show the "fake" dialog
		globals.GCshowDialogClientesPrecioArticulo('Editar Precio Artículo', 1, null, null, true, 'Borrar Precio Artículo', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"22C95886-5EA1-4EFF-8DE3-AA5259881990"}
 */
function sub_deleteContacto()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Precio Artículo')
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
