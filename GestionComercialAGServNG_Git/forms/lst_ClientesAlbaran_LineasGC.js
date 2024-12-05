/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"FCB197EC-30B8-4EBC-9C98-E53B2A9D59F7"}
 */
function onShow() {
	// TODO Auto-generated method stub
	//foundset.sort('nup_lal, nli_lal')
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"EF9C1E2F-17C1-4A08-87AB-46F5D823BE75"}
 * @SuppressWarnings(deprecated)
 */
function onDoubleClick(event) {
	if(globals.GCisEditing())
	{
		var frm = currentcontroller.getName()
		if(frm == 'frm_nav_main_principalNGGC') {
			frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
		}
		if(frm == 'FrmClientesGC') forms.FrmClientesGC.btn_cancel()
	}
	if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
	{
		var win = application.getWindow('Albaran Lineas')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		/*win = application.createWindow("Albaran Lineas", JSWindow.MODAL_DIALOG);
		var w = forms.FrmLoginGC.controller.getFormWidth()+20;
		var h = forms.FrmLoginGC.controller.getPartHeight(JSPart.BODY)+20;
		win.setInitialBounds(50, 0, w, h);
		*/
		win = application.createWindow("Albaran Lineas", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'Albaranes';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmClientesGC';
		forms.lst_solution_navigation_albaranGC.controller.setSelectedIndex(1) 
		forms.FrmAlbaranGC.controller.show(win);
	}
	else
	{
		win = application.getWindow('Conta')
		//setup the record status
		if(win != null) win.destroy();
		
		globals.GCnav_search = null
		globals.GCnav_search2 = null
		globals.GCFormulario = 'FrmClientesGC';
				
		forms.lst_solution_navigation_albaranGC.controller.setSelectedIndex(1) 
			
				//change tabs
		forms.lst_solution_navigation_albaranGC.btn_goForm();	
	}
}
