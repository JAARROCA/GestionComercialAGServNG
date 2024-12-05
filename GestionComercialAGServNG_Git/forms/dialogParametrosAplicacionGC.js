/**
 *
 * @properties={typeid:24,uuid:"5AA3E7BC-4265-424C-BFFF-4A624568E79B"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	
	globals.GCClave = null
	hide_btn_reset_fields();
	/*var today = new Date();
	if(forms.dlg_ParametroAplicacionGC.fechalimite < today)
	{
		
		application.exit(); 
	}
	else
	{*/
		application.getWindow('Parametros Aplicacion').hide();
		globals.GCenableBgElements();
	//}
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"01547066-00DB-4F07-A6BB-F6B4B2E1E9B9"}
 */
function btn_ok()
{
	var ok = true;
	//if(forms.dlg_ParametroAplicacionGC.cif) ok = globals.validateCIF(forms.dlg_ParametroAplicacionGC.cif)
	
	if(ok == false){
		forms.dlg_ParametroAplicacionGC.elements.fld_cif.requestFocus()
		forms.dlg_ParametroAplicacionGC.elements.fld_cif.selectAll()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('CIF no válido!!!.\nVerifíquelo.','¡Error!')
		else globals.GCshowErrorDialog("CIF no válido!!!.\nVerifíquelo.", null, null, null, null, null)
	}
	else
	{
		//set a global to the text of the button pressed
		globals.GCdialog_buttonPressed = elements.btn_ok.text
		if(forms.dlg_ParametroAplicacionGC.empresa == '') forms.dlg_ParametroAplicacionGC.empresa = null;
		if(forms.dlg_ParametroAplicacionGC.direccion == '') forms.dlg_ParametroAplicacionGC.direccion = null;
		if(forms.dlg_ParametroAplicacionGC.codpostal == '') forms.dlg_ParametroAplicacionGC.codpostal = null;
		if(forms.dlg_ParametroAplicacionGC.poblacion == '') forms.dlg_ParametroAplicacionGC.poblacion = null;
		if(forms.dlg_ParametroAplicacionGC.provincia == '') forms.dlg_ParametroAplicacionGC.provincia = null;
		if(forms.dlg_ParametroAplicacionGC.pais == '') forms.dlg_ParametroAplicacionGC.pais = null;
		if(forms.dlg_ParametroAplicacionGC.cif == '') forms.dlg_ParametroAplicacionGC.cif = null;
		if(forms.dlg_ParametroAplicacionGC.telefono == '') forms.dlg_ParametroAplicacionGC.telefono = null;
		if(forms.dlg_ParametroAplicacionGC.fax == '') forms.dlg_ParametroAplicacionGC.fax = null;
		if(forms.dlg_ParametroAplicacionGC.direaux == '') forms.dlg_ParametroAplicacionGC.direaux = null;
		if(forms.dlg_ParametroAplicacionGC.pobaux == '') forms.dlg_ParametroAplicacionGC.pobaux = null;
		if(forms.dlg_ParametroAplicacionGC.telaux == '') forms.dlg_ParametroAplicacionGC.telaux = null;
		if(forms.dlg_ParametroAplicacionGC.mail == '') forms.dlg_ParametroAplicacionGC.mail = null;
		if(forms.dlg_ParametroAplicacionGC.web == '') forms.dlg_ParametroAplicacionGC.web = null;
		if(forms.dlg_ParametroAplicacionGC.empresacontable == '') forms.dlg_ParametroAplicacionGC.empresacontable = null;
		if(forms.dlg_ParametroAplicacionGC.conexconta == '') forms.dlg_ParametroAplicacionGC.conexconta = null;
		
		globals.GCNombreEmpresa = forms.dlg_ParametroAplicacionGC.empresa
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) globals.GCsaveEdits()
		}
		
		databaseManager.saveData();
		
		
		globals.GCClave = null
		hide_btn_reset_fields();
		/*var today = new Date();
		if(forms.dlg_ParametroAplicacionGC.fechalimite < today)
		{		
			application.exit(); 
		}
		else
		{*/
			application.getWindow('Parametros Aplicacion').hide();
			globals.GCenableBgElements();
		//}
	}
}

/**
 *
 * @properties={typeid:24,uuid:"FD2BFB40-C9E3-422F-B1C0-D5EBDD3E603C"}
 */
function hide_btn_reset_fields()
{
	var allNames = forms.dlg_ParametroAplicacionGC.elements.allnames

	for ( var i = 0 ; i < allNames.length ; i++ )
	{
		//work on fields only - starting with name "fld_"
		if(allNames[i].indexOf('fld_') >= 0)
		{
			//if it's a field - then change color and make not editable
			forms.dlg_ParametroAplicacionGC.elements[allNames[i]].bgcolor = '#f0f0f0'
			forms.dlg_ParametroAplicacionGC.elements[allNames[i]]['readOnly'] = true
		}		
	}

	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"9DFAE259-ABA6-4F49-B7AA-872ABD372F76"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCClave = null
	plugins.window.createShortcut('control A', globals.handle_shortCutGC);
	plugins.window.createShortcut('ESCAPE', globals.handle_shortCutGC);
	plugins.window.createShortcut('control Z', globals.handle_shortCutGC);
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"380AB638-70FA-4845-BAB6-41B7D38051A4"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	


	globals.GCClave = null
	hide_btn_reset_fields();
	/*var today = new Date();
	if(forms.dlg_ParametroAplicacionGC.fechalimite < today)
	{
		
		application.exit(); 
	}
	else
	{*/
		btn_cancel()
	//}
	return true
}
