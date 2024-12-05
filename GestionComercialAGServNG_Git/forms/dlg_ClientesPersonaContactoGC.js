/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"60039B0C-2A7D-436D-BF12-DAC9690CE045"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"F5D17209-D468-4820-9C90-9E7B8032551D"}
 */
function onShow() {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2E141F2A-EF30-490D-ACF0-2ADDA4381301"}
 */
function onActionnombre(event) {
	// TODO Auto-generated method stub
	elements.cif.requestFocus()
	elements.cif.selectAll()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"43AECD89-8160-444B-9F4A-395138050096"}
 */
function onActioncif(event) {
	// TODO Auto-generated method stub
	elements.razonsocial.requestFocus()
	elements.razonsocial.selectAll()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C3CD182C-0C09-46EE-8633-FF7E4923C1AB"}
 */
function onActionrazonsocial(event) {
	// TODO Auto-generated method stub
	elements.direccionfiscal.requestFocus()
	elements.direccionfiscal.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"24603781-0831-4A47-863F-2171F49A77B9"}
 */
function onActiondireccionfiscal(event) {
	// TODO Auto-generated method stub
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4EC6AA2C-1FA0-46BE-8E60-20A32B263FF0"}
 */
function btnsendmail(event) {
	if(email) application.showURL( 'mailto:' + email, '_blank');
}
