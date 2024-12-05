/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"676BF543-B146-47FE-AEBB-08FD350F4BF0"}
 */
function btn_logo(event) {
	// TODO Auto-generated method stub
	application.showURL( 'https://www.agissa.com');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA88262D-CE8D-450F-9F9D-281FFA90B299"}
 */
function btnAgenda(event) {
	// TODO Auto-generated method stub
	var query = 'select id from tbcalendariousuariocabecera where idusuario = ' + globals.GClogin_usuario;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1);
	var uuid = dataset.getValue(1,1)
	
	if(uuid == null)
	{
		uuid = application.getUUID()
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbcalendariousuariocabecera')  
		  
		//load record by ID in foundset  
		//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
		vSet.newRecord();
		vSet.id = uuid;
		vSet.idusuario = globals.GClogin_usuario;
		vSet.desccalendario = globals.GCNombreUsuario;		
		
		databaseManager.saveData(vSet);
	}
	
	//globals.GCshowDialogCalendarioUsuarioMnto('Calendario / Agenda',1,null,null,null,null,null,null,null,null)
	var win = application.getWindow('Agenda')
	
	if(win != null)
	{
		win.destroy();
	}	
	
	win = application.createWindow("Agenda", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(10, 10, 1100, 600);
	win.title = "Calendario / Agenda";
	forms.dialogCalendarioUsuarioGC.controller.show(win);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BD9C8634-78AD-4B1A-915B-52CB8A86A902"}
 */
function btn_ContaAG_Web(event) {
	// TODO Auto-generated method stub
	var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Conta = dataset.getValue(1, 12)
	if(Conta == '1' || globals.GCNombreUsuario == 'DEMO')
	{
		var win = application.getWindow('Conta')
		
		if(win != null)
		{
			win.destroy();
		}	
		globals.PopUp = 1;
		win = application.createWindow("Conta", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 1100, 600);
		win.title = "Conta_AGWeb";
		forms.FrmLogin.controller.show(win);
	}
	else
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador','¡Error!')
		else globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D7DEEA2D-F8CB-4B44-99E7-7170AA44C804"}
 * @SuppressWarnings(deprecated)
 */
function onAction(event) {
	// TODO Auto-generated method stub
	try {
		//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) forms.FrmPrincipalGC_web.controller.show()
		//else
		//forms.FrmPrincipalGC.controller.show()
		globals.GCMenuPrincipal(event)
		}
		catch (e) {}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"611B2C69-752D-4C06-A9E1-63391F0E1AEA"}
 */
function btnInformes(event) {
		try {
			
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var titulo = 'Compras';	
			titulo = titulo.toUpperCase();
			var submenu1 = menu.addMenu(titulo);
			titulo = 'Compras - Artículos';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras - Familias';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras - Proveedores';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras / Meses';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras / Años';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			
			titulo = 'Ventas';	
			titulo = titulo.toUpperCase();
			submenu1 = menu.addMenu(titulo);
			titulo = 'Ventas - Artículos';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas - Familias';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas - Clientes';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas / Meses';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas / Años';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas / Zonas';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			
			titulo = 'Ventas y Beneficios';	
			titulo = titulo.toUpperCase();
			submenu1 = menu.addMenu(titulo);
			titulo = 'Ventas y Beneficios - Artículos';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas y Beneficios - Familias';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas y Beneficios - Clientes';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			
			titulo = 'Informe de Comisiones';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuInformes, null);
			
			/*titulo = 'Ventas y Beneficios';	
			titulo = titulo.toUpperCase();
			submenu1 = menu.addMenu(titulo);
			titulo = 'Ventas y Beneficios - Artículos';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas y Beneficios - Familias';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas y Beneficios - Clientes';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas y Beneficios - Comisionista';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			
			titulo = 'Compras / Ventas';	
			titulo = titulo.toUpperCase();
			submenu1 = menu.addMenu(titulo);
			titulo = 'Compras / Ventas - Artículos';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras / Ventas - Familias';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras / Ventas - Clientes';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras / Ventas - Proveedores';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			*/
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),220,0);				
			}
			
					
		
	}
	catch (e) {}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"7A913341-045F-40C4-8215-B3F37E4442E6"}
 */
function btnInformes2(event) {
		try {
			
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var titulo = 'Compras';	
			titulo = titulo.toUpperCase();
			var submenu1 = menu.addMenu(titulo);
			titulo = 'Compras - Artículos';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras - Familias';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras - Proveedores';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras / Meses';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras / Años';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			
			titulo = 'Ventas';	
			titulo = titulo.toUpperCase();
			submenu1 = menu.addMenu(titulo);
			titulo = 'Ventas - Artículos';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas - Familias';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas - Clientes';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas / Meses';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas / Años';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas / Zonas';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			
			/*titulo = 'Ventas y Beneficios';	
			titulo = titulo.toUpperCase();
			submenu1 = menu.addMenu(titulo);
			titulo = 'Ventas y Beneficios - Artículos';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas y Beneficios - Familias';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas y Beneficios - Clientes';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Ventas y Beneficios - Comisionista';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			
			titulo = 'Compras / Ventas';	
			titulo = titulo.toUpperCase();
			submenu1 = menu.addMenu(titulo);
			titulo = 'Compras / Ventas - Artículos';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras / Ventas - Familias';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras / Ventas - Clientes';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras / Ventas - Proveedores';	
			titulo = titulo.toUpperCase();
			submenu1.addMenuItem(titulo, globals.MenuInformes, null);
			*/
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),16,-10);				
			}
			
					
		
	}
	catch (e) {}
}
