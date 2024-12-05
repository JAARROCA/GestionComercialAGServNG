/**
 * @properties={typeid:24,uuid:"341148E0-B1CA-4AED-A48C-891F474689F6"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	
	application.getWindow('Extracto de Movimiento de Almacen').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"536ACD03-0CDF-4580-80A3-BAC40E63FDA0"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		globals.GCdialog_buttonPressed = elements.btn_ok.text
	
		
		//application.getWindow('Extracto de Movimiento de Almacen').hide();
		//globals.enableBgElements1();
		
		globals.btn_runJasperReportExtractoMovAlmacen(forms.dlg_Extracto_MovGC.Criterio,forms.dlg_Extracto_MovGC.DesdeArticulo,forms.dlg_Extracto_MovGC.HastaArticulo,forms.dlg_Extracto_MovGC.DesdeFecha,forms.dlg_Extracto_MovGC.HastaFecha)
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
 *
 * @properties={typeid:24,uuid:"49738BAD-E9AE-4F53-B222-067334665B35"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Extracto de Movimiento de Almacen').hide();
	globals.GCenableBgElements();
	return true
}
