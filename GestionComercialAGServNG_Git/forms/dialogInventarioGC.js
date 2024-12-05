/**
 * @properties={typeid:24,uuid:"AB4F0DF0-40D2-4F61-8A5E-A88B36BAD1C5"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Inventario de Stocks').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"9E158BFD-57D9-4684-A1AB-E0D146E1CB49"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		globals.GCdialog_buttonPressed = elements.btn_ok.text
	
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) globals.GCcancelEditing()
		}
		//application.getWindow('Inventario de Stocks').hide();
		//globals.enableBgElements1();
		
		globals.btn_runJasperReportInventario(forms.dlg_InventarioGC.Eleccion,forms.dlg_InventarioGC.FechaInventario,forms.dlg_InventarioGC.CriterioOrdenacion)
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
 * @properties={typeid:24,uuid:"F9401CFA-489F-4359-AB5A-F70339C2E2C3"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Inventario de Stocks').hide();
	globals.GCenableBgElements();
	return true
}
