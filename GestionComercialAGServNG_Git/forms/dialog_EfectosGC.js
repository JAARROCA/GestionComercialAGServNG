/**
 * @type {Array}
 *
 *
 *
 * @properties={typeid:35,uuid:"F8CC3A89-D4FD-43EE-9B45-A459DEDA6153",variableType:-4}
 */
var editedRecs;

/**
  * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"437AF4A9-E60C-433D-AEF5-91B47AAD23FD"}
 */
function btn_3rdBtn(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	var situ = forms.FrmFacturasGC.situconta
	if(situ == 'C')
	{
		globals.GCdialog_buttonPressed = null
		var methd = 'forms.dialog_EfectosGC.onHide(event)' 
		globals.GCshowErrorDialog('Factura ya contabilizada. No se puede borrar el efecto.',methd,'Aceptar',null,null,null)
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
  * @properties={typeid:24,uuid:"4D3EEB87-6E7A-4CB7-8F92-F943F0120A23"}
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
 * @properties={typeid:24,uuid:"AD0D8F07-E42B-4941-91ED-E3695FD44C40"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	var situ = forms.FrmFacturasGC.situconta
	editedRecs = databaseManager.getEditedRecords(forms.dlgEfectosGC.foundset)
	if(editedRecs.length > 0 && situ == 'C')
	{
		globals.GCdialog_buttonPressed = null
		var methd = 'forms.dialog_EfectosGC.onHide(event)' 
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
 * @properties={typeid:24,uuid:"51A6A4C5-09FD-4120-9EE9-FDC37D69C65A"}
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
 * @properties={typeid:24,uuid:"B650C085-9A08-4DC2-BEC9-1190E8CF4FD1"}
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
 * @properties={typeid:24,uuid:"D6881CD3-9B74-45A1-8855-AC83905F7EC9"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
