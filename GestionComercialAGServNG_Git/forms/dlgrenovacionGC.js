/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"66497E16-9C1C-429D-905B-1352AFEFF034"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	forms.dialog_renovacionGC.elements.btn_ok.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"21F7FD72-140B-44FB-BCF1-7ECBD26B8AAF"}
 */
function onAction(event) {
	globals.GCFormulario = 'dlgrenovacionGC'
	globals.GCshowDialogEnvioMail('Envio EMail',1,null,null,null,null,null,null,null,null)
}
