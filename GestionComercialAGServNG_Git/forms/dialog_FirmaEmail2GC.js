/**
 *
 * @properties={typeid:24,uuid:"3D0F91B4-7FA1-49EA-9CC0-AA66C9179D31"}
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
	application.getWindow('Firma Email').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"0DB0D827-5CBC-45E7-923B-632083D94E3B"}
 */
function btn_ok(event)
{
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
		  
		
		application.getWindow('Firma Email').hide();
		globals.GCenableBgElements();
	

}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F96C995-6FC3-4B57-8879-4712010F8FCF"}
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
 * @properties={typeid:24,uuid:"582EF485-8BA4-4621-97E5-982B080B43CF"}
 */
function onHide(event) {
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing();
		}
	}
	application.getWindow('Firma Email').hide();
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
 * @properties={typeid:24,uuid:"291A8679-E912-41A4-93C4-31BA5994AC97"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
