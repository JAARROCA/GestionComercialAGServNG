/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"FAE886DE-125C-46A3-BCD5-D2ED5D60B061"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	
}

/**
 * Callback method for when form is shown.
 *
* @properties={typeid:24,uuid:"1C5ACC3C-1119-4B6C-98B5-44B2C9D5C6C4"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(forms.FrmCobrosPagosGC.fechavencimiento,'dd-MM-yyyy')
	globals.FechaAsientoDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
	elements.FechaAsientoDuplicar.requestFocus()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"E87F7577-C4A4-4C56-96B8-1D101E11DF44"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(globals.FechaAsientoDuplicar,'dd-MM-yyyy');
	globals.FechaAsientoDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FB5FEFF7-8400-46D3-90E1-D9170A9B8BBC"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}
