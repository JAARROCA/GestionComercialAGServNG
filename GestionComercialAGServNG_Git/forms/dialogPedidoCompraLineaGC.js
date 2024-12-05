/**
 * @properties={typeid:24,uuid:"BFB5901E-4EAD-4F94-9065-BE3C99F88409"}
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
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para borrar Líneas de Pedidos de Compras.','¡Error!')
		else {
			var methd = 'forms.dialogPedidoCompraLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Pedidos de Compras.',methd,'Aceptar',null,null,null)
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
		application.getWindow('Pedido Compra Linea').hide();
		globals.GCenableBgElements();
	}
}

/**
 * @properties={typeid:24,uuid:"C8E86F68-BA04-4384-BB7D-59C371C3ED65"}
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
	application.getWindow('Pedido Compra Linea').hide();
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"6506A7A3-A3BE-4907-AE6E-570821144474"}
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
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para grabar Líneas de Pedidos de Compras.','¡Error!')
		else {
			var methd = 'forms.dialogPedidoCompraLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Pedidos de Compras.',methd,'Aceptar',null,null,null)
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
		
		
		
		application.getWindow('Pedido Compra Linea').hide();
		globals.GCenableBgElements();
	}

}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"654E7AE9-BB83-4745-A7B8-4BC647341A51"}
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
 * @properties={typeid:24,uuid:"38AEE730-FFBD-4AB6-99DE-2DF1135EE2C7"}
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
	application.getWindow('Pedido Compra Linea').hide();
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
 * @properties={typeid:24,uuid:"A3137162-A3BD-4BA8-B037-190A69CE7B5B"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
