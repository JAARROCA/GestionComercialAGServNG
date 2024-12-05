/**
 * @properties={typeid:24,uuid:"F9E7BA7B-2EF1-41EC-A744-37CED6D36EB1"}
 * @SuppressWarnings(deprecated)
 */
function btn_add()
{
	//see what form is front-most
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	if(globals.GCisEditing()) forms[frm].btn_cancel()
	//if there's no transaction, start one - so they can "cancel"
	if(!globals.GCisEditing()) 
	{
		globals.GCstartEditing()

		//make a new record
		forms[frm].foundset.newRecord(true)
	
		//see if there is an auto-enter method to be performed on that form
		if(forms[frm].validate_autoEnter != undefined) forms[frm].validate_autoEnter()
	
		//ALL forms must have a method "doEdit" for this to work
		
		forms[frm].doEdit()
		
		//tell the first field in the tab order to receive focus
		forms[frm].controller.focusFirstField()
	}
}

/**
 * @properties={typeid:24,uuid:"055F913A-5991-4E07-AE6A-7C8DF9A19F61"}
 * @SuppressWarnings(deprecated)
 */
function btn_delete()
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	if(globals.GCisEditing()) forms[frm].btn_cancel()
	//see what form is front-most
	if(forms[frm].validate_beforeDelete() != 0) return;

	var msg = forms[frm].delete_text
	if(application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT) 
	{
		//tell it what method to execute when dialog closes
		var methd = 'forms.' + frm + '.sub_doDelete()'
	
		//show the tabpanel "dialog"
		globals.GCshowWarningDialog(msg, methd, 'Cancelar', 'Borrar', null, null);
	}
	else
	{
		if(msg) msg = '<html>'+utils.stringReplace(msg,'\n','<br>')+'</html>';
		var resp = scopes.svyCustomDialogs.showQuestionDialog('Borrar',msg,'Cancelar', 'Borrar')
		/*var custom_dlg = scopes.svyCustomDialogs.createCustomDialog(
		'',
			'Borrar',
			msg,
			scopes.svyCustomDialogs.DEFAULT_ICON.WARNING,
			['Cancelar', 'Cancelar']);
		
		var resp = custom_dlg.showDialog()*/
		if(resp == 'Borrar') {
			globals.core_dlg_buttonPressed = 'Borrar';
			forms[frm].sub_doDelete()
		}	
	}
}

/**
 * @properties={typeid:24,uuid:"0580EE1F-4053-46C0-89E2-F5BD10FA2D04"}
 * @SuppressWarnings(deprecated)
 */
function btn_edit()
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	if(globals.GCisEditing()) forms[frm].btn_cancel()
	if(forms[frm].foundset.getSize() == 0)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No existen registros. Pulsa el botón Añadir para incorporar el primero.','¡Error!')
		else globals.GCshowErrorDialog('No existen registros. Pulsa el botón Añadir para incorporar el primero.', null, null, null, null, null)
	}
	else
	{
		//only do edit if there is no existing transaction
		if(!globals.GCisEditing())
		{
			//ALL forms must have a method "doEdit" for this to work
			forms[frm].doEdit()
	
			//tell the first field in the tab order to receive focus
			forms[frm].controller.focusFirstField()
		}
	}
}

/**
 * @properties={typeid:24,uuid:"9DB9A6AF-C1F8-4719-A29A-CE9465FB6C20"}
 * @SuppressWarnings(deprecated)
 */
function btn_print()
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	if(globals.GCisEditing()) forms[frm].btn_cancel()
	//see what form is front-most
	//execute the "print_default" method on each form
	forms[frm].print_default()
}

/**
 * @properties={typeid:24,uuid:"1AD3D010-96FE-468C-B23D-AB19D3FBAED7"}
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 */
function btn_showAll()
{
	//see what form is front-most
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	var frm2 = utils.stringReplace(frm, 'Frm', 'lst_')
	var uuid = forms[frm]['id']
	//load all records
	forms[frm].foundset.loadAllRecords()
	forms[frm2].foundset.loadAllRecords()
	forms[frm2].btn_sortDesc()
	var result = forms[frm].foundset.selectRecord(uuid)
	var fsCount = databaseManager.getFoundSetCount(forms[frm].foundset);
	while(result==false)
	{
		if(fsCount == forms[frm].foundset.getSize())
		{
			break;
		}
	forms[frm].foundset.setSelectedIndex(forms[frm].foundset.getSize());
	result = forms[frm].foundset.selectRecord(uuid);
	}
	//hide the "show all" button
	sub_hideShowAll();
	globals.GCnav_search = ''
	globals.GCsetupRecordStatus()
}

/**
 * @properties={typeid:24,uuid:"F276BA82-0F73-4D67-A5D4-EC16B2634051"}
 * @SuppressWarnings(deprecated)
 */
function onShow()
{
	//see if the record status has as "(" in it - if so, it's a foundset
	if(globals.GCrecord_status.indexOf("(") > 0)
	{
		sub_showShowAll();
	}
	else
	{
		sub_hideShowAll();
	}
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	if(frm == 'FrmCobrosPagosGC'){
		elements.btn_excel.enabled = false
		elements.lbl_editc.enabled = false
	}
	else{
		elements.btn_excel.enabled = true
		elements.lbl_editc.enabled = true
	}
}

/**
 * @properties={typeid:24,uuid:"EF813B7E-8C0F-4A57-81D4-73073DC39974"}
 * @SuppressWarnings(deprecated)
 */
function sub_doDelete()
{
	//see what button text was pressed and then delete if necessary
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var frm = currentcontroller.getName()
		if(frm == 'frm_nav_main_principalNGGC') {
			frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
		}
		forms[frm].foundset.deleteRecord()

		//clear out global - so we don't accidentally delete something
		globals.core_dlg_buttonPressed = null
	}
}

/**
 * @properties={typeid:24,uuid:"1BCEF86A-AE3C-410F-90C2-C49B00FA1B5B"}
 */
function sub_hideShowAll()
{
	elements.btn_showAll.visible = false
	elements.lbl_showAll.visible = false
	elements.grc_divLine.visible = false
}

/**
 * @properties={typeid:24,uuid:"E80C505A-E70E-43E0-BCA8-93A538C0B7EC"}
 */
function sub_showShowAll()
{
	elements.btn_showAll.visible = true
	elements.lbl_showAll.visible = true
	elements.grc_divLine.visible = true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"47140E54-DF54-4EE2-B8C5-00D6FA044C4F"}
 * @SuppressWarnings(deprecated)
 */
function btn_duplicate(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(frm == 'FrmCobrosPagosGC')
	{		
		if(globals.GCisEditing()) forms.FrmCobrosPagosGC.btn_cancel()
		globals.GCshowDialogDuplicarCobroPago('Duplicar Cobro/Pago',1,null, null, null, null, null, null, null, null);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"624C8C1B-76D3-4899-B228-C9486A116847"}
 * @SuppressWarnings(deprecated)
 */
function btn_excel(event) {
	// TODO Auto-generated method stub
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"ED114A22-02C9-4A3E-A369-2ABFF42CDF90"}
 * @SuppressWarnings(deprecated)
 */
function btn_Salir(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	//{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	if(globals.GCisEditing()) forms[frm].btn_cancel()
	
	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) {
		if(gcparametrosaplicacion_to_parametrosaplicacion && gcparametrosaplicacion_to_parametrosaplicacion.empresa) var nombreempresa = gcparametrosaplicacion_to_parametrosaplicacion.empresa;
		else nombreempresa = 'GestionComercialAGServNG';
		/*var custom_dlg = scopes.svyCustomDialogs.createCustomDialog(
		'custom_servoy_theme_properties.less',
		nombreempresa,
		'<html>¿Desea realmente salir de la Alicación?<br>',
		scopes.svyCustomDialogs.DEFAULT_ICON.INFO,
		['No', 'Si']);*/	
		
		var custom_dlg = scopes.svyCustomDialogs.showQuestionDialog(nombreempresa,'¿Desea realmente salir de la Aplicación?','Si','No')
		if(custom_dlg == "Si") 
		{
			//application.closeAllWindows();
			//controller.show(null);
			//scopes.svySecurity.logout();
			application.exit();
		}
	}
	else globals.GCshowDialogSalir('Salir de la Aplicación', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	//}
	//else
	//{
	//	var respuesta = plugins.dialogs.showQuestionDialog('Salir de Gestión ERP','¿Desea terminar la Sesión?','Si','No')
	//}
	//if(respuesta =='Si')
	//{
	//	application.exit();
	//}
}
