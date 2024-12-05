/**
 *
 * @properties={typeid:24,uuid:"4B06320C-5535-40B4-9C54-1ED1E9053BD9"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('PDF').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"9DDB5F74-15F5-4A2D-BC0F-8A4AA06EE13B"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	forms.lst_Articulos_DocumentosGC.foundset.deleteRecord()
	
		application.getWindow('PDF').hide();
		globals.GCenableBgElements();		
		
		
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C6A4FEF1-86E7-4D35-B2E7-A11B776C4914"}
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
 * @properties={typeid:24,uuid:"D4C16F2D-E3BF-48C8-9970-9DEBDC43CFE0"}
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
 * @properties={typeid:24,uuid:"02210988-8528-429E-8135-F612F2914C8D"}
 */
function btn_Refresh(event) {
	// TODO Auto-generated method stub
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		//plugins.WebClientUtils.executeClientSideJS('location.reload();');
	}
}
