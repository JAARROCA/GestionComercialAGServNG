/**
 *
 * @properties={typeid:24,uuid:"6424928A-CF62-4365-86AA-51AC62A0A104"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Diario Notas').hide();
	globals.GCenableBgElements();
	
}

/**
 *
 * @properties={typeid:24,uuid:"65D5AF70-BCBE-4FE9-82AA-76B99BE4167D"}
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
		var DFECH = forms.dlg_DiarioNotasGC.DesdeFecha
		var HFECH = forms.dlg_DiarioNotasGC.HastaFecha
		var DCLI = forms.dlg_DiarioNotasGC.DesdeCliente
		var HCLI = forms.dlg_DiarioNotasGC.HastaCliente
		var DEJE = forms.dlg_DiarioNotasGC.DesdeEje
		var HEJE = forms.dlg_DiarioNotasGC.HastaEje
		var DNUP = forms.dlg_DiarioNotasGC.DesdeNup
		var HNUP = forms.dlg_DiarioNotasGC.HastaNup
		var ORD = forms.dlg_DiarioNotasGC.Orden
		var DET = forms.dlg_DiarioNotasGC.Detalles
		var SITU = forms.dlg_DiarioNotasGC.SituCobrado
	
		//application.getWindow('Diario Notas').hide();
		//globals.GCenableBgElements();
		
		globals.btn_runJasperReportDiarioNotas(DFECH,HFECH,DCLI,HCLI,DEJE,HEJE,DNUP,HNUP,ORD,DET,SITU)
		
		
		
		
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"4C015DF2-AD6F-4584-89B4-DE5B009A8457"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"54BA42B4-E242-4EFD-9926-7BE4B3B6C1F9"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Diario Notas').hide();
	globals.GCenableBgElements();
	return true
}
