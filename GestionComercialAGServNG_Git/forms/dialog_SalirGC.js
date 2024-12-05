/**
 *
 * @properties={typeid:24,uuid:"FB503815-8154-4EB4-BEBB-1A4F3E5BA98B"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	
	application.getWindow('DialogSalir').hide();
	globals.GCenableBgElements();
	plugins.window.createShortcut('control A', globals.handle_shortCutGC);
	plugins.window.createShortcut('ESCAPE', globals.handle_shortCutGC);
}

/**
 *
 * @properties={typeid:24,uuid:"502D6E98-CF2C-4CC0-A23A-FA3236CF07CC"}
 * @SuppressWarnings(deprecated)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
	application.getWindow('DialogSalir').hide();
	globals.GCenableBgElements();
	var frm = currentcontroller.getName()
	if(frm == 'FrmLoginGC') 
	{
		//security.logout()
		application.exit();
	}		
	else 
	{
		if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
		{
			security.logout()
			application.showURL('http://appwebag.agissa.com:8081/servoy-webclient/solutions/solution/GestionComercialAGServ', '_self');  //Web Client only
		}
		else
		{
			application.exit();
		}
			//forms.FrmLogin.controller.show()
	}
	plugins.window.createShortcut('control A', globals.handle_shortCutGC);
	plugins.window.createShortcut('ESCAPE', globals.handle_shortCutGC);
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6C4D8931-E0B8-4E79-908C-D1B6D9DF628B"}
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
 * @properties={typeid:24,uuid:"1D86F573-7E61-4564-94F9-85B487B2377E"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}
