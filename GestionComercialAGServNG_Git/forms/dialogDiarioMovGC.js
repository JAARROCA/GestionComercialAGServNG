/**
 * @properties={typeid:24,uuid:"F39A1E31-C492-4E4B-9A8A-771FE2CE6DBB"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	
	application.getWindow('Diario de Movimiento de Almacen').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"5E608F31-5A31-4256-8C9F-35938B0F3FC0"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		globals.GCdialog_buttonPressed = elements.btn_ok.text
	
		
		//application.getWindow('Extracto de Movimiento de Almacen').hide();
		//globals.enableBgElements1();
		
		globals.btn_runJasperReportDiarioMovAlmacen(forms.dlg_Diario_MovGC.Criterio,forms.dlg_Diario_MovGC.DesdeArticulo,forms.dlg_Diario_MovGC.HastaArticulo,forms.dlg_Diario_MovGC.DesdeFecha,forms.dlg_Diario_MovGC.HastaFecha)
	
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
 * @properties={typeid:24,uuid:"98E45D24-90D0-45B9-B925-E4A2CD293468"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Diario de Movimiento de Almacen').hide();
	globals.GCenableBgElements();
	return true
}
