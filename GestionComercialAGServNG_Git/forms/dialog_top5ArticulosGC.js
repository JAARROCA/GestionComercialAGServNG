/**
 * 
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"29EDBFC6-7253-4F22-A47D-D2C3F1853C81"}
 */
function btn_cancel(event)
{
	//set a global to the text of the button pressed
	application.getWindow('top5Articulos').hide();
	globals.GCenableBgElements();
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
 * @properties={typeid:24,uuid:"39800536-03DB-4179-B6DF-7000492B0BA7"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel(event)
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"52A2D391-29A2-45C6-9A10-E1E2769EC2D7"}
 */
function btn_print(event) {
	if(!forms.lst_top5ArticulosGC.agno) forms.lst_top5ArticulosGC.agno = new Date().getFullYear()
	globals.btn_runJasperReporttop5Articulos(forms.lst_top5ArticulosGC.agno)
}
