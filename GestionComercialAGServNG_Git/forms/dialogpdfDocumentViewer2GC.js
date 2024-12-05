/**
 *
 * @properties={typeid:24,uuid:"6749218E-7153-4EFC-ADB6-3D50DACE281D"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('PDF').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"589F41A2-3AC4-4D4A-A6E7-54B8E0E4D55F"}
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
 * @properties={typeid:24,uuid:"53D42AA3-4482-472B-8BA7-F66A40075857"}
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
 * @properties={typeid:24,uuid:"3DEBB192-97D6-466B-8DF9-013F86CBEF40"}
 */
function btn_Refresh(event) {
	// TODO Auto-generated method stub
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		//plugins.WebClientUtils.executeClientSideJS('location.reload();');
	}
}
