/**
 *
 * @properties={typeid:24,uuid:"9D3A0353-4A23-42A5-8485-37CC0E1565A7"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('PDF').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"EC4E6EF5-4710-42C9-B2F0-1D398EFF2A9E"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		forms.dlg_pdfDocumentViewer3GC.docupdf = null	
		forms.dlg_pdfDocumentViewer3GC.filename = null	
		
		databaseManager.saveData()
	
		application.getWindow('PDF').hide();
		globals.GCenableBgElements();		
		
		
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"5728D6E3-F2BC-47CC-BA76-30F847D3D9EC"}
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
 * @properties={typeid:24,uuid:"73F90E47-EB96-427A-8783-2560F0AF3158"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('PDF').hide();
	globals.GCenableBgElements();
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"EA051F5C-FC43-4853-9F24-53C439EA009B"}
 */
function btn_Refresh(event) {
	// TODO Auto-generated method stub
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		//plugins.WebClientUtils.executeClientSideJS('location.reload();');
	}
}
