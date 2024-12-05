/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"91F06ED9-6D67-4E2B-AA4B-2F27189A4301"}
 */
function onActionclave(event) {
	// TODO Auto-generated method stub
	forms.dialog_ClaveGC.btn_ok()
}

/**
 * Callback method for when form is shown.
 *
* @properties={typeid:24,uuid:"C0172FE1-743D-4B43-81BD-10BF4B2AB171"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCClave = null;
	elements.clave.requestFocus()
}
