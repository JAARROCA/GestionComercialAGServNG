/**
 * @type {Array}
 *
 *
 * @properties={typeid:35,uuid:"F005DC8D-1693-49E3-8E9E-42D03565BBF4",variableType:-4}
 */
var editedRecs;

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"6E57C6AE-DCBC-4353-91D8-DDAA0580FE6D"}
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
	
	application.getWindow('Proveedores Precio Material').hide();
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"25FD8EDB-49A5-4121-B7A4-8E43900A9CE4"}
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
	application.getWindow('Proveedores Precio Material').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"476F23FB-0510-48C1-947A-E38CB979AE79"}
 */
function btn_ok(event)
{
	if(!forms.dlg_ProveedorMaterialPrecioGC.idarticulo)
	{
		forms.dlg_ProveedorMaterialPrecioGC.elements.idarticulo.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El código del material es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('El código del material es obligatorio.',null,'Aceptar',null,null,null)
	}	
	else if(!forms.dlg_ProveedorMaterialPrecioGC.precio)
	{
		forms.dlg_ProveedorMaterialPrecioGC.elements.precio.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El precio del material es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('El precio del material es obligatorio.',null,'Aceptar',null,null,null)
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
			application.getWindow('Proveedores Precio Material').hide();
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
 * @properties={typeid:24,uuid:"FF1A229B-474C-42CA-A1E8-CF530CFA667F"}
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
 * @properties={typeid:24,uuid:"99903D08-CB7C-4CDA-9BED-F65A950DBFEA"}
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
	application.getWindow('Proveedores Precio Material').hide();
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
 * @properties={typeid:24,uuid:"3ECDB764-56BB-4843-9C21-FA5FFAA9452C"}
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
 * @properties={typeid:24,uuid:"1AE13DFB-0611-48D4-94C1-1D62141EE1C8"}
 */
function onLoad(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}
