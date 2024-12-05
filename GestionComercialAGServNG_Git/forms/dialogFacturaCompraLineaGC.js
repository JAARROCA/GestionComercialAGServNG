/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"19822CE7-A8C6-41D6-BE7E-F23073F40C2D"}
 */
function btn_3rdBtn(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para borrar Líneas de Facturas de Compras.','¡Error!')
		else {
			var methd = 'forms.dialogFacturaCompraLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Facturas de Compras.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
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
		
		
		
		
		application.getWindow('Factura Compra Linea').hide();
		globals.GCenableBgElements();
	}
}

/**
 * @properties={typeid:24,uuid:"127B180E-C1F3-4D97-9C9E-3FDBAD4EE3A0"}
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
	application.getWindow('Factura Compra Linea').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"34D6DCB1-F867-42FB-9979-6C1C0527712D"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para grabar Líneas de Facturas de Compras.','¡Error!')
		else {
			var methd = 'forms.dialogFacturaCompraLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Facturas de Compras.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) 
			{
				globals.GCsaveEdits()
			}
		}
		
		databaseManager.saveData();
		   
		
		application.getWindow('Factura Compra Linea').hide();
		globals.GCenableBgElements();
	}

}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AB8BB3EC-D901-4A44-A03C-4C2A0DC9043F"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
	
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
 * @properties={typeid:24,uuid:"E2A6BA3B-F830-45B4-8124-AE790168E8AD"}
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
	application.getWindow('Factura Compra Linea').hide();
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
 * @properties={typeid:24,uuid:"2049DDF0-1DBC-4CB8-AA31-8CDD48D5F131"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
