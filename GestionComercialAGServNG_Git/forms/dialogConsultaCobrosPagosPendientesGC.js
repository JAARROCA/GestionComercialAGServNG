/**
 *
 * @properties={typeid:24,uuid:"68F2B0D1-F745-4596-9AE5-0537BE06700F"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	
	application.getWindow('Consulta Cobros Pagos Pendientes').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"DC6C3241-9A05-47F2-8BF7-EDEC3535F810"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed	
			
	
		//application.getWindow('Consulta Cobros Pagos Pendientes').hide();
		//globals.GCenableBgElements();		
		
		globals.GCbtn_runJasperReportConsultaCobrosPagosPendientes()
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"3E8D17FF-6C9E-416F-AC8B-F22BF1689D1C"}
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
 * @properties={typeid:24,uuid:"677DD1A4-FE83-4384-8EC0-E6AC0445DA8E"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Consulta Cobros Pagos Pendientes').hide();
	globals.GCenableBgElements();
	return true
}
