/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E04EF5E7-F3EE-4745-B977-0364B16B414A"}
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
		var win = application.getWindow('Factura Lineas')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		win = application.createWindow("Factura Lineas", JSWindow.MODAL_DIALOG);
		//win = application.createWindow("Factura Lineas", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'Facturas';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmClientesGC';
		forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) 
		forms.FrmFacturasGC.controller.show(win);
	
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
		win = application.getWindow('Conta')
		//setup the record status
		if(win != null) win.destroy();
		
		globals.GCnav_search = null
		globals.GCnav_search2 = null
		globals.GCFormulario = 'FrmClientesGC';
				
		forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) 
			
				//change tabs
		forms.lst_solution_navigation_facturasGC.btn_goForm(event);	
	}
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"B00459D0-5529-449E-A11B-58DC742F8EB9"}
 */
function onActionTicketBAIQR(event) {
	if(gctbfacturalinea_to_tbfacturacabecera.mac && gctbfacturalinea_to_tbfacturacabecera.fechaenviofichero && 
	gctbfacturalinea_to_tbfacturacabecera.cqr) application.showURL(gctbfacturalinea_to_tbfacturacabecera.cqr,'_blank')
}

/**
 * Callback method for when form is shown.
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"38A14208-1FE0-4D4F-AD39-63DDD81DA237"}
 */
function onShow(firstShow) {
	var empresatbai = gcparametrosaplicacion_to_parametrosaplicacion.ticketbai;
	if(empresatbai){
		elements.lbl_TBAI.visible = true;
		elements.lbl_enviadatbai.visible = true;			
	}
	else{
		elements.lbl_TBAI.visible = false;
		elements.lbl_enviadatbai.visible = false;		
	}
	
	if(!firstShow) databaseManager.recalculate(foundset)
}
