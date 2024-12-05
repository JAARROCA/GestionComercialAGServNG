/**
 * @properties={typeid:24,uuid:"0616C9A2-0B7C-432E-8DF4-9B80C90BC40B"}
 */
function btn_newLinea()
{
	var ro = forms.FrmProveedoresGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el Proveedor antes de agregar Precios de Material.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'SELECT * FROM [dbo].[tbMaestroProveedores] where [codpro] =' + forms.FrmProveedoresGC.codpro;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Proveedor = dataset.getValue(1, 1)
		
		if(Proveedor == null)
		{
			globals.GCshowErrorDialog('Proveedor Inexistente! Cree uno y grabelo antes de añadir Precios de Material.',null,'Aceptar',null,null,null)
		}
		else
		{
			
			Proveedor= forms.FrmProveedoresGC.codpro
				
		
				if(!globals.GCisEditing()) 
				{	
					globals.GCstartEditing()
			
				forms.dlg_ProveedorMaterialPrecioGC.elements.BtnRefencia.visible = true;
				forms.dlg_ProveedorMaterialPrecioGC.elements.idarticulo.readOnly = false;
				forms.dlg_ProveedorMaterialPrecioGC.elements.idarticulo.bgcolor = '#ffffff'//'#f0f0f0';
				forms.dlg_ProveedorMaterialPrecioGC.elements.idarticulo.visible = true;
				forms.dlg_ProveedorMaterialPrecioGC.elements.lbl_idarticulo.visible = false;
				//make a new record
				forms.dlg_ProveedorMaterialPrecioGC.foundset.newRecord(true)
				forms.dlg_ProveedorMaterialPrecioGC.id = application.getUUID()
				forms.dlg_ProveedorMaterialPrecioGC.codpro = Proveedor;
				
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogProveedoresPrecioMaterial('Nuevo Precio Material', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_ProveedorMaterialPrecioGC.elements.idarticulo.requestFocus();
				}
			
		}
	}
}

/**
 * @properties={typeid:24,uuid:"7A125C3C-4202-4217-86A4-D127B1FB9519"}
 * @AllowToRunInFind
 */
function btn_showPedidoLinea()
{
	var ro = forms.FrmProveedoresGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el proveedor antes de editar Precios de Material.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		forms.dlg_ProveedorMaterialPrecioGC.foundset.loadAllRecords()
		var result = forms.dlg_ProveedorMaterialPrecioGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ProveedorMaterialPrecioGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ProveedorMaterialPrecioGC.foundset.getSize())
			{
			return;
			}
		forms.dlg_ProveedorMaterialPrecioGC.foundset.setSelectedIndex(forms.dlg_ProveedorMaterialPrecioGC.foundset.getSize());
		result = forms.dlg_ProveedorMaterialPrecioGC.foundset.selectRecord(uid);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	    
		forms.dlg_ProveedorMaterialPrecioGC.elements.BtnRefencia.visible = false;
		forms.dlg_ProveedorMaterialPrecioGC.elements.idarticulo.readOnly = true;
		forms.dlg_ProveedorMaterialPrecioGC.elements.idarticulo.bgcolor = '#F0F0F0';
		forms.dlg_ProveedorMaterialPrecioGC.elements.idarticulo.visible = false;
		forms.dlg_ProveedorMaterialPrecioGC.elements.lbl_idarticulo.visible = true;
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_ProveedorPrecioMaterialGC.sub_deleteContacto()'
	
		//show the "fake" dialog
		globals.GCshowDialogProveedoresPrecioMaterial('Editar Precio Material', 1, null, null, true, 'Borrar Precio Material', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"8EDDCCA5-8A30-42FA-A314-39086AB099E4"}
 */
function sub_deleteContacto()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Precio Material')
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
