/**
 * @type {Array}
 *
 *
 * @properties={typeid:35,uuid:"2E5602BF-1051-42C9-AEA1-AB01C060C324",variableType:-4}
 */
var editedRecs;

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"781B076E-B73B-4E94-ABB2-5DFAF30B4CB4"}
 */
function btn_3rdBtn(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCsaveEdits();
		}
	}
	
	
	if(globals.GCdialog_performMethod)
	{
		//perform whatever method is in the global
		eval(globals.GCdialog_performMethod)
		globals.GCdialog_performMethod = null
	}
	
	application.getWindow('Cliente Vacaciones').hide();
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"E996408A-3421-458C-ABDB-C03AD7A80AB2"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing();
		}
	}
	application.getWindow('Cliente Vacaciones').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"3EDF260D-E476-48F2-A00A-DF85C56E13AA"}
 */
function btn_ok(event)
{
	if(!forms.dlg_ClientesVacacionesGC.fechainicio)
	{
		forms.dlg_ClientesVacacionesGC.elements.cif.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('La Fecha de inicio del periodo de Vacaciones es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('La Fecha de inicio del periodo de Vacaciones es obligatorio.',null,'Aceptar',null,null,null)
	}	
	else if(!forms.dlg_ClientesVacacionesGC.fechafin)
	{
		forms.dlg_ClientesVacacionesGC.elements.razonsocial.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('La Fecha de finalización del periodo de Vacaciones es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('La Fecha de finalización del periodo de Vacaciones es obligatorio.',null,'Aceptar',null,null,null)
	}	
	else if(!forms.dlg_ClientesVacacionesGC.fechapagos)
	{
		forms.dlg_ClientesVacacionesGC.elements.direccionfiscal.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('La Fecha de pagos del periodo de Vacaciones es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('La Fecha de pagos del periodo de Vacaciones es obligatorio.',null,'Aceptar',null,null,null)
	}	
	else if(forms.dlg_ClientesVacacionesGC.fechafin < forms.dlg_ClientesVacacionesGC.fechainicio)
	{
		forms.dlg_ClientesVacacionesGC.elements.razonsocial.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('La Fecha de finalización no puedes ser inferior a la de inicio del periodo de Vacaciones.','¡Error!')
		else globals.GCshowErrorDialog('La Fecha de finalización no puedes ser inferior a la de inicio del periodo de Vacaciones.',null,'Aceptar',null,null,null)
	}
	else
	{
		/*var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		var con = dataset.getValue(1,2);
		editedRecs = databaseManager.getEditedRecords(forms.dlg_ClientesPersonaContactoGC.foundset)*/
		//set a global to the text of the button pressed
		globals.GCdialog_buttonPressed = elements.btn_ok.text
		
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) 
			{
				globals.GCsaveEdits()
			}
		}
		
		databaseManager.saveData();
		application.getWindow('Cliente Vacaciones').hide();
		globals.GCenableBgElements();
		
		/*if(con && editedRecs.length > 0 && Empresa)
		{
			var methd = 'forms.dialogClientesContactoGC.ActualizarConta(event)'
			globals.GCshowQuestionDialog("¿Desea que los datos modificados se actualicen también en la contabilidad '"+Empresa+"'?",methd,'No','Si',null,null)
		}*/
	}

}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D4A5024A-7DB7-49F8-8E49-0958CCA746A2"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
*
 *
 *
 * @properties={typeid:24,uuid:"0CF4E8BA-2438-41D9-BE5A-1734BF988C0C"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text && globals.GCdialog_buttonPressed != elements.btn_3.text)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing();
		}
	}
	application.getWindow('Cliente Vacaciones').hide();
	globals.GCenableBgElements();	
	
	return true
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"7206826D-9762-40D9-A3D9-62DF7C07457C"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75B1EAB4-80EC-4887-A5A4-6A006944B488"}
 */
function onLoad(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}
