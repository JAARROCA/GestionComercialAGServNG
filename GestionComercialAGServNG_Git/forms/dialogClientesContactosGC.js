/**
 * @type {Array}
 *
 *
 * @properties={typeid:35,uuid:"43C16AC2-7CB3-4182-90AD-78DD9C7A271F",variableType:-4}
 */
var editedRecs;

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"58BFFEB6-9CA3-465B-B38F-5068D386BD7C"}
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
	
	application.getWindow('Clientes Persona Contacto').hide();
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"6E28AC09-6DF6-4FCF-AB56-401728441B77"}
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
	application.getWindow('Clientes Persona Contacto').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"2AF5C757-55EC-4C03-B40F-0B0B3BDE40AC"}
 */
function btn_ok(event)
{
	if(!forms.dlg_ClientesPersonaContactoGC.nombre)
	{
		forms.dlg_ClientesPersonaContactoGC.elements.nombre.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El nombre del contacto es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('El nombre del contacto es obligatorio.',null,'Aceptar',null,null,null)
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
		application.getWindow('Clientes Persona Contacto').hide();
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
 * @properties={typeid:24,uuid:"2AFC55F4-5669-4053-909F-F218497D389A"}
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
 * @properties={typeid:24,uuid:"0DAB93E8-2BE2-411B-956B-21B12FB1CD5A"}
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
	application.getWindow('Clientes Persona Contacto').hide();
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
 * @properties={typeid:24,uuid:"87ADABB1-395E-4245-A559-CEAEABD378BB"}
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
 * @properties={typeid:24,uuid:"89EF4AE8-630C-4CAC-9EF0-8680683F298D"}
 */
function onLoad(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}
