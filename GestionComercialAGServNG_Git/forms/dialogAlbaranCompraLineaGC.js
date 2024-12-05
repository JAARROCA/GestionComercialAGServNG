/**
 * @properties={typeid:24,uuid:"69AA0C95-9547-4089-9401-774639004036"}
 */
function btn_3rdBtn()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para borrar Líneas de Albarán Compras.','¡Error!')
		else {
			var methd = 'forms.dialogAlbaranCompraLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Albarán Compras.',methd,'Aceptar',null,null,null)
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
		
		
		if(globals.GCdialog_performMethod)
		{
			//perform whatever method is in the global
			eval(globals.GCdialog_performMethod)
			globals.GCdialog_performMethod = null
		}
		application.getWindow('Albaran Compra Linea').hide();
		globals.GCenableBgElements();
	}
}

/**
 * @properties={typeid:24,uuid:"A1289D31-F644-4101-9377-FB2E3482197A"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing()		
		}
	}
	application.getWindow('Albaran Compra Linea').hide();
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"7E3ED9F0-C99F-4C89-8597-3F4197A2BA3E"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para grabar Líneas de Albarán Compras.','¡Error!')
		else {
			var methd = 'forms.dialogAlbaranCompraLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Albarán Compras.',methd,'Aceptar',null,null,null)
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
		
		
		
		application.getWindow('Albaran Compra Linea').hide();
		globals.GCenableBgElements();
	}

}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"80AE7AF5-57F7-4859-A218-35BA7F4C0593"}
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
 * @properties={typeid:24,uuid:"D8D457B9-3363-453E-A084-2922913E1EE2"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text && globals.GCdialog_buttonPressed != elements.btn_3.text)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing()
		}
	}
	application.getWindow('Albaran Compra Linea').hide();
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
 * @properties={typeid:24,uuid:"BC2ECADB-D63A-4A29-925E-ED16838FFA8F"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
