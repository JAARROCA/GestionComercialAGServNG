/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9CD0D971-EE0B-4FA6-8D5A-5ED04B968994"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"5DB43DBC-A874-44E5-81C9-3751A49F7EF0"}
 */
function onActioncodigofp(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	//{
		elements.fld_denom_fp.requestFocus()
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"CC60600A-E453-47CA-A827-D1255B62D092"}
 */
function onActiondenom(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	//{
		elements.fld_ngiro_fp.requestFocus()
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"9C42A785-05EB-45D3-A86A-40CBC9AEF516"}
 */
function onActionngiro(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	//{
		elements.fld_mefec_fp.requestFocus()
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6F62F328-F8B4-41AD-9A2C-FB2040672616"}
 */
function onActionmefec(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	//{
		elements.fld_mprve_fp.requestFocus()
	//}
}

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"4C55C438-E29A-48D4-BD08-C3566BAEE3A2"}
 * @AllowToRunInFind
 */
function onShow() {
	// TODO Auto-generated method stub
	
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"D8CE731B-5B84-43EB-8438-D8F1860A59D5"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	tipocuentaefec_fp = 'D'
	tipocuentavenc = 'D'
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"61EBFF51-FFCA-4CAC-8838-9648684DEF05"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [codig_fp] from [tbmaestroformpago] where [codig_fp] = '" + codig_fp + "'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Forma de Pago duplicada!','¡Error!')
		else {
		var methd = 'forms.dlg_FormaPagoGC.foco()';
		globals.GCshowErrorDialog('Forma de Pago duplicada!',methd,'Aceptar',null,null,null)
		}
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"730B4B33-2C23-42D2-8B97-A34C9FDA5275"}
 */
function foco() {
	elements.codig_fp.requestFocus()
}
