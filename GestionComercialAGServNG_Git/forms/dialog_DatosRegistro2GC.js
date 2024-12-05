/**
 * @properties={typeid:24,uuid:"37E7DD39-C8DE-40F5-ADD0-3A30711A84C7"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Datos del Registro Mercantil de la Sociedad').hide();
	globals.GCenableBgElements();
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"17E9C87A-5797-4A93-981A-4CE9B3296314"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"D90CE590-158B-4A97-B0AA-CBD2B00A2BF1"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits()
	}
	
	databaseManager.saveData();	
	
	
	application.getWindow('Datos del Registro Mercantil de la Sociedad').hide();
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
 * @properties={typeid:24,uuid:"A2ADD189-16D6-4F59-B3DD-C5EE629F22FC"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Datos del Registro Mercantil de la Sociedad').hide();
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
 * @properties={typeid:24,uuid:"5D9ABDBB-B18E-4C3A-9AF7-516351D59839"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
