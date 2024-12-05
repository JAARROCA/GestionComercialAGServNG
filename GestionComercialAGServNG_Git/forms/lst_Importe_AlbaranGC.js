/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"296C8178-2BBB-4AD3-8F56-6E883441F67F"}
 */
function onFocusLostDtoPP(event) {
	// TODO Auto-generated method stub
	var Dtopp = (impbre_cal * depp_cal) / 100
	impbie_cal = globals.GCROUND(impbre_cal - Dtopp,2)
	var Importebruto = impbre_cal - Dtopp
	impcie_cal = Importebruto * (piva_cal / 100)
	impcie_cal = globals.GCROUND(impcie_cal,2)
	impnee_cal = Importebruto + impcie_cal
	impnee_cal = globals.GCROUND(impnee_cal,2)
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE362685-8919-4184-83E8-E317D57E6454"}
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
 * @properties={typeid:24,uuid:"107542C7-4CDF-4466-8A78-7B13C88013C4"}
 */
function onActionanticipo(event) {
	// TODO Auto-generated method stub
	elements.fld_depp_cal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"41DC7CF0-92B5-4D6E-9D10-5B8594878466"}
 */
function onActiondto(event) {
	// TODO Auto-generated method stub
	elements.fld_piva_cal.requestFocus()
	
}
