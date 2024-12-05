/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9484FBD4-C7AA-4B25-B4EB-9ACE520CA2BC"}
 */
function onAction(event) {
	if(!sifa_lal) forms.dlg_Generacion_Factura5GC.Importe -= impor_lal;
	else forms.dlg_Generacion_Factura5GC.Importe += impor_lal;
}
