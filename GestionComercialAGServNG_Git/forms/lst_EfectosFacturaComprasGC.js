/**
 * @properties={typeid:24,uuid:"345F2F5C-7200-462A-A9AE-EDCF11EF5E37"}
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
	var result = forms.dlgEfectosComprasGC.foundset.selectRecord(uid)
	var fsCount = databaseManager.getFoundSetCount(forms.dlgEfectosComprasGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.dlgEfectosComprasGC.foundset.getSize())
	{
		return;
	}
	forms.dlgEfectosComprasGC.foundset.setSelectedIndex(forms.dlgEfectosComprasGC.foundset.getSize());
	result = forms.dlgEfectosComprasGC.foundset.selectRecord(uid);
	}
	//start a transaction
	if(!globals.GCisEditing()) globals.GCstartEditing()

	//setup the method to execute when the dialog closes
	globals.GCdialog_performMethod = 'forms.lst_EfectosFacturaComprasGC.sub_deleteEfecto()'
	
	//show the "fake" dialog
	globals.GCshowDialogEfectoFacturaCompras('Editar Efecto', 1, null, null, true, 'Borrar Efecto', null, null, null, null);
}

/**
 * @properties={typeid:24,uuid:"BC73D820-8D86-4105-AD19-926160966D95"}
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
