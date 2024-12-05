/**
 *
 * @properties={typeid:24,uuid:"D4FCC0F4-981A-4B3E-9AAE-6C6F924502DA"}
 * @SuppressWarnings(deprecated)
 */
function btn_newEmpresaPExtra()
{
	var ro = forms.FrmProveedoresGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el proveedor antes de agregar Notas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var prov = forms.FrmProveedoresGC.codpro;
		if(!prov) prov = -99;
		var query = "select * from [dbo].[tbMaestroProveedores] where [Codpro] =" + prov;
					
		//var ds = controller.getDataSource().split('/');
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Proveedor = dataset.getValue(1, 1)
		
		if(Proveedor == null)
		{
			globals.GCshowErrorDialog('El Proveedor aún no existe!\n\n Cree uno y grabelo antes de añadir Notas.',null,'Aceptar',null,null,null)
		}
		else
		{
			Proveedor= forms.FrmProveedoresGC.codpro;
			
			//if there's no transaction, start one - so they can "cancel"
			if(!globals.GCisEditing()) 
			{
				globals.GCstartEditing()
		
			//make a new record
				forms.dlgProveedoresNotasGC.foundset.newRecord(false)
			
				
				forms.dlgProveedoresNotasGC.codpro = Proveedor;
				forms.dlgProveedoresNotasGC.validate_autoEnter();
				
			
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogProveedoresNotas('Nueva Nota', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlgProveedoresNotasGC.elements.titulo.requestFocus()
			}
		}
	}
}

/**
 *
 * @properties={typeid:24,uuid:"75B3E3FB-725D-4667-A96E-3C20099133A4"}
 * @SuppressWarnings(deprecated)
 */
function btn_showEmpresaPExtra()
{
	var ro = forms.FrmProveedoresGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el proveedor antes de agregar Notas.',null,'Aceptar',null,null,null)
	}
	else
	{		
		if(globals.GCisEditing()) globals.GCcancelEditing()
		//select the right row
		var uid = id
		var result = forms.dlgProveedoresNotasGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlgProveedoresNotasGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlgProveedoresNotasGC.foundset.getSize())
			{
			return;
			}
		forms.dlgProveedoresNotasGC.foundset.setSelectedIndex(forms.dlgProveedoresNotasGC.foundset.getSize());
		result = forms.dlgProveedoresNotasGC.foundset.selectRecord(uid);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_ProveedoresNotasGC.sub_deleteProveedoresNotas()'
		
		//show the "fake" dialog
		globals.GCshowDialogProveedoresNotas('Editar Nota', 1, null, null, true, 'Borrar Nota', null, null, null, null);
	}
}

/**
 *
 * @properties={typeid:24,uuid:"0623D9BC-E45D-4B51-8AB1-E6F61447E801"}
 */
function sub_deleteProveedoresNotas()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Nota')
	{
		//check to make sure that the address in question isn't used on any orders
		/*var bAdrCnt = addresses_to_orders_billing.getSize()
		var sAdrCnt = addresses_to_orders_shipping.getSize()

		if(bAdrCnt == 0 && sAdrCnt == 0)
		{*/
		forms.lst_ProveedoresNotasGC.foundset.deleteRecord()
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
