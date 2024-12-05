/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C6D67CE7-F27B-4540-A710-2AAB59CEF192"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	elements.ctabancaria.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EEAC22EB-2E4A-4D4D-91CA-FDA4055BB44F"}
 */
function onActioncta(event) {
	// TODO Auto-generated method stub
	elements.bic.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D170E342-DCDC-4E78-B20D-EFFBF7438C9C"}
 */
function onActionbic(event) {
	// TODO Auto-generated method stub
	elements.registro.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"91561A08-D30D-4F2A-A9D3-53B4CE1547A4"}
 */
function onActionregistro(event) {
	// TODO Auto-generated method stub
	elements.tomo.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E9F10F5E-F69B-4793-B80B-FA4BC1B2E831"}
 */
function onActiontomo(event) {
	// TODO Auto-generated method stub
	elements.folio.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CEB49886-2320-4749-B1BE-3D1328B480FC"}
 */
function onActionfolio(event) {
	// TODO Auto-generated method stub
	elements.hojaregistral.requestFocus()
	
}

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"005A1B37-7FD5-407F-81ED-1FF75EE1CF57"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCParametrosCuentaBancaria = ctabancaria
	globals.GCBIC = bic
	globals.GCParametrosRegistro = registro
	globals.GCParametrosTomo = tomo
	globals.GCParametrosFolio = folio
	globals.GCParametrosHoja = hojaregistral
	globals.GCHaciendaWeb = web_hacienda
	elements.ctabancaria.requestFocus()
}
