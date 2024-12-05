/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"0BDEE0D0-411D-4C61-BE42-C9822AAFA0D0"}
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
		var win = application.getWindow('Presupuesto Lineas')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		/*win = application.createWindow("Presupuesto Lineas", JSWindow.MODAL_DIALOG);
		var w = forms.FrmLoginGC.controller.getFormWidth()+20;
		var h = forms.FrmLoginGC.controller.getPartHeight(JSPart.BODY)+20;
		win.setInitialBounds(50, 0, w, h);
		*/
		win = application.createWindow("Presupuesto Lineas", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'Presupuestos';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmClientesGC';
		forms.lst_solution_navigation_presupuestosGC.controller.setSelectedIndex(1) 
		forms.FrmPresupuestosGC.controller.show(win);
	}
	else
	{
		win = application.getWindow('Conta')
		//setup the record status
		if(win != null) win.destroy();
		
		globals.GCnav_search = null
		globals.GCnav_search2 = null
		globals.GCFormulario = 'FrmClientesGC';
				
		forms.lst_solution_navigation_presupuestosGC.controller.setSelectedIndex(1) 
			
				//change tabs
		forms.lst_solution_navigation_presupuestosGC.btn_goForm();	
	}
}
