/**
 * @type {Array}
 *
 *
 * @properties={typeid:35,uuid:"EBA95E13-50AE-4866-8A6A-7C382F866675",variableType:-4}
 */
var editedRecs;

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"D311B0CE-8148-4528-8F07-2C16449DD64F"}
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
	
	application.getWindow('Material Precio Proveedores').hide();
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"07F23811-3D56-4997-92C0-81B5168E4895"}
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
	application.getWindow('Material Precio Proveedores').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"AD3FF60B-CAEE-409D-82E6-0EF0B38AF459"}
 */
function btn_ok(event)
{
	if(!forms.dlg_MaterialProveedorPrecioGC.codpro)
	{
		forms.dlg_MaterialProveedorPrecioGC.elements.idcliente.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El código del proveedor es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('El código del proveedor es obligatorio.',null,'Aceptar',null,null,null)
	}	
	else if(!forms.dlg_MaterialProveedorPrecioGC.precio)
	{
		forms.dlg_MaterialProveedorPrecioGC.elements.precio.requestFocus()
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
		application.getWindow('Material Precio Proveedores').hide();
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
 * @properties={typeid:24,uuid:"F5A0A1CC-8B3C-488A-A113-82AB1B206082"}
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
 * @properties={typeid:24,uuid:"6DB018CF-F775-4BDF-9605-513CABEC6218"}
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
	application.getWindow('Material Precio Proveedores').hide();
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
 * @properties={typeid:24,uuid:"49E4742C-2B47-414E-B614-5A9AD42C12C4"}
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
 * @properties={typeid:24,uuid:"18F62895-76D8-406E-9A52-4145DFAE8C46"}
 */
function onLoad(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}
