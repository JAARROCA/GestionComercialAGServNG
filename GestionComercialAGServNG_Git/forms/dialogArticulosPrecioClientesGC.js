/**
 * @type {Array}
 *
 *
 * @properties={typeid:35,uuid:"EA4CE507-8DEB-4797-9572-F2B17679C873",variableType:-4}
 */
var editedRecs;

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"7B74BD0A-13AA-482D-9FD5-901D3490B3D8"}
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
	
	application.getWindow('Articulo Precio Clientes').hide();
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"1C183775-A952-4BB5-8251-F97B5540E578"}
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
	application.getWindow('Articulo Precio Clientes').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"15D11C83-91BA-4FD7-9138-3FFB0E4D0AB0"}
 */
function btn_ok(event)
{
	if(!forms.dlg_ArticuloClientesPrecioGC.idcliente)
	{
		forms.dlg_ArticuloClientesPrecioGC.elements.idcliente.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El código del cliente es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('El código del cliente es obligatorio.',null,'Aceptar',null,null,null)
	}	
	else if(!forms.dlg_ArticuloClientesPrecioGC.precio)
	{
		forms.dlg_ArticuloClientesPrecioGC.elements.precio.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El precio del artículo es obligatorio.','¡Error!')
		else globals.GCshowErrorDialog('El precio del artículo es obligatorio.',null,'Aceptar',null,null,null)
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
		application.getWindow('Articulo Precio Clientes').hide();
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
 * @properties={typeid:24,uuid:"2140E12F-E950-4952-82A5-6497D418194F"}
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
 * @properties={typeid:24,uuid:"4A99F0E4-4C93-4AE1-B3A7-DE9466D438E5"}
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
	application.getWindow('Articulo Precio Clientes').hide();
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
 * @properties={typeid:24,uuid:"3385BCBE-AF2B-49BE-ABEF-638CC137B07B"}
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
 * @properties={typeid:24,uuid:"B22F8BDD-1969-4ABE-A173-DAAC7997AD18"}
 */
function onLoad(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}
