/**
 * @properties={typeid:24,uuid:"3CB290C1-51BA-4109-82BC-EFE614BA81E9"}
 */
function btn_newLinea()
{
	var ro = forms.FrmMaterialesGC.elements.fld_descripcion.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el material antes de agregar Precios de Proveedores.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = "SELECT * FROM [dbo].[tbMaestroMateriales] where [codigo] ='" + forms.FrmMaterialesGC.codigo +"'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var articulo = dataset.getValue(1, 1)
		
		if(articulo == null)
		{
			globals.GCshowErrorDialog('Material Inexistente! Cree uno y grabelo antes de añadir Precios de Proveedores.',null,'Aceptar',null,null,null)
		}
		else
		{
			
				articulo= forms.FrmMaterialesGC.codigo;
				
		
				if(!globals.GCisEditing()) 
				{	
					globals.GCstartEditing()
			
				forms.dlg_MaterialProveedorPrecioGC.elements.BtnRefencia.visible = true;
				forms.dlg_MaterialProveedorPrecioGC.elements.idcliente.readOnly = false;
				forms.dlg_MaterialProveedorPrecioGC.elements.idcliente.bgcolor = '#ffffff'//'#f0f0f0';
				forms.dlg_MaterialProveedorPrecioGC.elements.idcliente.visible = true;
				forms.dlg_MaterialProveedorPrecioGC.elements.lbl_idcliente.visible = false;
				//make a new record
				forms.dlg_MaterialProveedorPrecioGC.foundset.newRecord(true)
				forms.dlg_MaterialProveedorPrecioGC.id = application.getUUID()
				forms.dlg_MaterialProveedorPrecioGC.idarticulo = articulo;
				
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogMaterialPrecioProveedores('Nuevo Precio Material', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_MaterialProveedorPrecioGC.elements.idcliente.requestFocus();
				}
			
		}
	}
}

/**
 * @properties={typeid:24,uuid:"B587040F-BEB8-42FF-9AF3-FFB4765A93F5"}
 * @AllowToRunInFind
 */
function btn_showPedidoLinea()
{
	var ro = forms.FrmMaterialesGC.elements.fld_descripcion.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el material antes de editar Precios de Proveedores.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		forms.dlg_MaterialProveedorPrecioGC.foundset.loadAllRecords()
		var result = forms.dlg_MaterialProveedorPrecioGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_MaterialProveedorPrecioGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_MaterialProveedorPrecioGC.foundset.getSize())
			{
			return;
			}
		forms.dlg_MaterialProveedorPrecioGC.foundset.setSelectedIndex(forms.dlg_MaterialProveedorPrecioGC.foundset.getSize());
		result = forms.dlg_MaterialProveedorPrecioGC.foundset.selectRecord(uid);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	    
		forms.dlg_MaterialProveedorPrecioGC.elements.BtnRefencia.visible = false;
		forms.dlg_MaterialProveedorPrecioGC.elements.idcliente.readOnly = true;
		forms.dlg_MaterialProveedorPrecioGC.elements.idcliente.bgcolor = '#F0F0F0'//'#f0f0f0';
		forms.dlg_MaterialProveedorPrecioGC.elements.idcliente.visible = false;
		forms.dlg_MaterialProveedorPrecioGC.elements.lbl_idcliente.visible = true;
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_MaterialPrecioProveedorGC.sub_deleteContacto()'
	
		//show the "fake" dialog
		globals.GCshowDialogMaterialPrecioProveedores('Editar Precio Proveedor', 1, null, null, true, 'Borrar Precio Proveedor', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"D790CA99-55C0-4848-AEB5-85B33F992C7F"}
 */
function sub_deleteContacto()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Precio Proveedor')
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
