/**
  * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"1E4B4185-9D10-4210-879C-B9BDFBFB4B2B"}
 */
function btn_3rdBtn(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	var situ = forms.FrmFacturasComprasGC.situconta
	if(situ == 'C')
	{
		globals.GCdialog_buttonPressed = null
		var methd = 'forms.dialog_EfectosComprasGC.onHide(event)' 
		globals.GCshowErrorDialog('Factura ya contabilizada. No se borrar el efecto.',methd,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) globals.GCsaveEdits()
		}
		application.getWindow('Efecto').hide();
		globals.GCenableBgElements();
		
		if(globals.GCdialog_performMethod)
		{
			//perform whatever method is in the global
			eval(globals.GCdialog_performMethod)
			globals.GCdialog_performMethod = null
		}
	}
}

/**
  * @properties={typeid:24,uuid:"D5F2AE08-F3E7-4F47-84FD-18D199A357C5"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Efecto').hide();
	globals.GCenableBgElements();
}

/**
  * @param {JSEvent} event the event that triggered the action
  *  
 * @properties={typeid:24,uuid:"01C15419-4B04-4F78-B584-6B2419D3D241"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	var situ = forms.FrmFacturasComprasGC.situconta
	if(situ == 'C')
	{
		globals.GCdialog_buttonPressed = null
		var methd = 'forms.dialog_EfectosComprasGC.onHide(event)' 
		globals.GCshowErrorDialog('Factura ya contabilizada. No se puede modificar el efecto.',methd,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) globals.GCsaveEdits()
		}
		
		databaseManager.saveData();
		
		application.getWindow('Efecto').hide();
		globals.GCenableBgElements();
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"33A2776E-80C0-4680-B114-38CBD9E0B4AC"}
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
 * @properties={typeid:24,uuid:"2925AE08-B2A5-4CD5-AB5D-B3E3EC16A31C"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Efecto').hide();
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
 * @properties={typeid:24,uuid:"A846735C-E9DD-4F9F-AF32-01CE174D206E"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
