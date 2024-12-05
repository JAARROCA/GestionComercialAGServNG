/**
 * @properties={typeid:24,uuid:"53A8C339-E1ED-485F-9DDF-595A1782381A"}
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
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para borrar Líneas de Peticiones de Oferta.','¡Error!')
		else {
			var methd = 'forms.dialogPetOfertaCompraLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Peticiones de Oferta.',methd,'Aceptar',null,null,null)
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
		application.getWindow('Peticion Oferta Compra Linea').hide();
		globals.GCenableBgElements();
	}
}

/**
 * @properties={typeid:24,uuid:"D571946B-5655-4ABC-B85B-B06B82B621C3"}
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
	application.getWindow('Peticion Oferta Compra Linea').hide();
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"C824F063-5DE7-4D6F-A805-2D88E876B7AC"}
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
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para grabar Líneas de Peticiones de Oferta.','¡Error!')
		else {
			var methd = 'forms.dialogPetOfertaCompraLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Peticiones de Oferta.',methd,'Aceptar',null,null,null)
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
		
		
		
		application.getWindow('Peticion Oferta Compra Linea').hide();
		globals.GCenableBgElements();
	}

}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"36BA814E-8A85-4548-9F81-49483A6C1127"}
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
 * @properties={typeid:24,uuid:"12A2D382-385A-4D5C-8109-B5C38821FDD1"}
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
	application.getWindow('Peticion Oferta Compra Linea').hide();
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
 * @properties={typeid:24,uuid:"ECEBCDBC-E42A-49F5-995D-FBCD1A2693E8"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
