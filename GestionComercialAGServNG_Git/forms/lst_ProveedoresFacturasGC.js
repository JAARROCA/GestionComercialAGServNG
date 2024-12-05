/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9EDCBF51-8707-4CFB-AC6A-22B7012B9139"}
 * @SuppressWarnings(deprecated)
 */
function onDoubleClick(event) {
	if(globals.GCisEditing())
	{
		var frm = currentcontroller.getName()
		if(frm == 'frm_nav_main_principalNGGC') {
			frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
		}
		if(frm == 'FrmProveedoresGC') forms.FrmProveedoresGC.btn_cancel()
	}
	if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
	{
		var win = application.getWindow('Maestros')
		//setup the record status
		if(win == null)
		{
			win = application.getWindow('Factura Compras')
			//setup the record status
			if(win != null)
			{
				win.destroy();
			}
			
			win = application.createWindow("Factura Compras", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(10, 10, 1100, 600);
			win.title = 'Facturas Compras';
			globals.GCnav_search = null;
			globals.GCFormulario = 'FrmProveedoresGC';
			forms.lst_solution_navigation_comprasGC.controller.setSelectedIndex(3) 
			forms.FrmFacturasComprasGC.controller.show(win);
		}
		/*var win = application.getWindow('Factura Lineas')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		win = application.createWindow("Factura Lineas", JSWindow.MODAL_DIALOG);
		var w = forms.FrmLoginGC.controller.getFormWidth()+20;
		var h = forms.FrmLoginGC.controller.getPartHeight(JSPart.BODY)+20;
		win.setInitialBounds(50, 0, w, h);
		win.title = 'Facturas';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmClientesGC';
		forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) 
		forms.FrmFacturasGC.controller.show(win);
		*/
	}
	else
	{
		win = application.getWindow('Maestros')
		//setup the record status
		if(win == null)
		{
			win = application.getWindow('Conta')
			//setup the record status
			if(win != null) win.destroy();
			
			globals.GCnav_search = null
			globals.GCnav_search2 = null
			globals.GCFormulario = 'FrmProveedoresGC';
					
			forms.lst_solution_navigation_comprasGC.controller.setSelectedIndex(1) 
			
			//change tabs
			forms.lst_solution_navigation_comprasGC.btn_goForm(event);
		    forms.lst_solution_navigation_comprasGC.controller.setSelectedIndex(3) 
			
			//change tabs
			forms.lst_solution_navigation_comprasGC.btn_goForm(event);		
		}
	}
}
