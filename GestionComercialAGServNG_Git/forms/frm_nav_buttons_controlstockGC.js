/**
 * @properties={typeid:24,uuid:"800B3595-3455-4558-9097-AE804F8CFDCE"}
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
 * @properties={typeid:24,uuid:"F5695151-63AC-4DE1-BD0D-9C4A46157E54"}
 * @SuppressWarnings(deprecated)
 */
function btn_delete()
{
	//see what form is front-most
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(forms[frm].validate_beforeDelete() != 0) return;

	var msg = forms[frm].delete_text

	if(!msg) msg = '¿Estás seguro de querer borrarlo?'
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
 * @properties={typeid:24,uuid:"4F0ABFB3-6BBB-42E2-B9AD-FF35614760D7"}
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
 * @properties={typeid:24,uuid:"07D782B6-2B05-4AEC-B32D-B4D71CD01F8F"}
 * @SuppressWarnings(deprecated)
 */
function btn_print()
{
	//see what form is front-most
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	if(globals.GCisEditing()) forms[frm].btn_cancel()
	//execute the "print_default" method on each form
	forms[frm].print_default()
}

/**
 * @properties={typeid:24,uuid:"AD41DFA7-839E-47B7-86C6-3A72BDD4DA97"}
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
	forms[frm2].btn_sortAsc()
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
 * @properties={typeid:24,uuid:"690651E6-3811-4070-BB69-90743FED2515"}
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
	
}

/**
 * @properties={typeid:24,uuid:"FD0BD4C1-9525-4E87-988F-8CB32C281DE6"}
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
 * @properties={typeid:24,uuid:"ECA05D7D-DF72-4F70-A3CE-025A7900E5D9"}
 */
function sub_hideShowAll()
{
	elements.btn_showAll.visible = false
	elements.lbl_showAll.visible = false
	elements.grc_divLine.visible = false
}

/**
 * @properties={typeid:24,uuid:"7B458DDC-BAA0-47A8-90C4-F8D51307CEB9"}
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
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"85EA4930-EDBC-45EC-BB5F-8B31EFF32408"}
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
