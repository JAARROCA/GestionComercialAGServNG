/**
 * @properties={typeid:24,uuid:"F521910A-7920-4E6D-98FF-7719E7465A55"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 */
function btn_showEfectoFactura()
{
	//select the right row
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	
	
	var uid = id
	var result = forms.dlgEfectosGC.foundset.selectRecord(uid)
	var fsCount = databaseManager.getFoundSetCount(forms.dlgEfectosGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.dlgEfectosGC.foundset.getSize())
	{
		return;
	}
	forms.dlgEfectosGC.foundset.setSelectedIndex(forms.dlgEfectosGC.foundset.getSize());
	result = forms.dlgEfectosGC.foundset.selectRecord(uid);
	}
	//start a transaction
	if(!globals.GCisEditing()) globals.GCstartEditing()

	//setup the method to execute when the dialog closes
	globals.GCdialog_performMethod = 'forms.lst_EfectosFacturaGC.sub_deleteEfecto()'
	
	//show the "fake" dialog
	globals.GCshowDialogEfectoFactura('Editar Efecto', 1, null, null, true, 'Borrar Efecto', null, null, null, null);
}

/**
 * @properties={typeid:24,uuid:"3954C524-5BDA-431F-9BC4-CB52F83F9F52"}
 */
function sub_deleteEfecto()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Efecto')
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
