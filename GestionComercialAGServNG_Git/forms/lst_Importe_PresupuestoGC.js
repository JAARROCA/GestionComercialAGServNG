/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C9019364-ABBD-400A-873B-76BF5D1E781B"}
 */
function onFocusLostDtoPP(event) {
	// TODO Auto-generated method stub
	var Dtopp = (impbre_cof * depp_cof) / 100
	impbie_cof = globals.GCROUND(impbre_cof - Dtopp,2)
	var Importebruto = impbre_cof - Dtopp
	impcie_cof = Importebruto * (piva_cof / 100)
	impcie_cof = globals.GCROUND(impcie_cof,2)
	impnee_cof = Importebruto + impcie_cof
	impnee_cof = globals.GCROUND(impnee_cof,2)
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1358DB84-6FF2-4006-906A-2B3951AE0AFF"}
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
 * @properties={typeid:24,uuid:"FBAD16CA-2E9D-4361-9A89-004479FE5C62"}
 */
function onActionanticipo(event) {
	// TODO Auto-generated method stub
	elements.fld_depp_cof.requestFocus()
	elements.fld_depp_cof.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1CDAE9D7-F24F-4E03-8AA6-590CB581AE49"}
 */
function onActiondto(event) {
	// TODO Auto-generated method stub
	
		elements.fld_piva_cof.requestFocus()
		elements.fld_piva_cof.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FC3E2CC4-08B0-45DF-8F5F-53217561E229"}
 */
function onActionpiva(event) {
	// TODO Auto-generated method stub
	onFocusLostIva(event)
}
