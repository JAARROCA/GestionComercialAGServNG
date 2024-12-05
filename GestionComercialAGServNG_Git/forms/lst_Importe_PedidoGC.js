/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C22F3F5B-64C1-4C53-B333-EBD05C92D4D7"}
 */
function onFocusLostDtoPP(event) {
	// TODO Auto-generated method stub
	var Dtopp = (impbre_cot * depp_cot) / 100
	var Importebruto = impbre_cot - Dtopp + imprec_cot
	impcie_cot = Importebruto * (piva_cot / 100)
	impcie_cot = globals.GCROUND(impcie_cot,2)
	impnee_cot = Importebruto + impcie_cot
	impnee_cot = globals.GCROUND(impnee_cot,2)
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"12BAD7FE-E4C4-4C7C-91BC-6CAD2EC21481"}
 */
function onFocusLostIva(event) {
	// TODO Auto-generated method stub
	onFocusLostDtoPP(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1C9F32DA-B59A-4FBE-A931-F1E6CC4396A2"}
 */
function onActionanticipo(event) {
	// TODO Auto-generated method stub
	elements.fld_depp_cot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D7A19028-29DE-4F71-84EC-66353662D9EA"}
 */
function onActiondto(event) {
	// TODO Auto-generated method stub
	elements.fld_piva_cot.requestFocus()
	
}
