/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DA06087A-F681-49E1-8D58-D15FC6FEE7B3"}
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 */
function btnMaestras(event) {
	// TODO Auto-generated method stub
	try {
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var BBDDMaestras = dataset.getValue(1, 4)
		if(BBDDMaestras == '1')
		{*/
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_maestros]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				var icon = dataset.getValue(i,3);	
				if(icon) menu.addMenuItem(titulo, globals.MenuMaestrosGC, 'media:///'+icon);
				else menu.addMenuItem(titulo, globals.MenuMaestrosGC, null);
			}			
			
			
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),220,0);					
			}			
		/*}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}
		*/
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var ds = forms.dlg_ParametroAplicacionGC.controller.getDataSource().split('/');
		var dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 1)
		var BBDDMaestras = dataset.getValue(1, 4)
		if(BBDDMaestras == '1')
		{	
			globals.GCnav_search = null
			globals.GCnav_search2 = null
			
			forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 

			//change tabs
			forms.lst_solution_navigation_maestrosGC.btn_goForm();
		}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}
		*/
		}
		catch (e) {
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(e.toString(),'¡Error!')
			else globals.GCshowErrorDialog(e.toString(),null,'Aceptar',null,null,null)
		}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"0113974C-D31D-4437-8B71-83257FF00C97"}
 */
function btnMaestras2(event) {
	// TODO Auto-generated method stub
	try {
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var BBDDMaestras = dataset.getValue(1, 4)
		if(BBDDMaestras == '1')
		{*/
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_maestros]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				var icon = dataset.getValue(i,3);	
				if(icon) menu.addMenuItem(titulo, globals.MenuMaestrosGC, 'media:///'+icon);
				else menu.addMenuItem(titulo, globals.MenuMaestrosGC, null);
			}			
			
			
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),16,-10);					
			}			
		/*}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}
		*/
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var ds = forms.dlg_ParametroAplicacionGC.controller.getDataSource().split('/');
		var dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 1)
		var BBDDMaestras = dataset.getValue(1, 4)
		if(BBDDMaestras == '1')
		{	
			globals.GCnav_search = null
			globals.GCnav_search2 = null
			
			forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 

			//change tabs
			forms.lst_solution_navigation_maestrosGC.btn_goForm();
		}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}
		*/
		}
		catch (e) {
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(e.toString(),'¡Error!')
			else globals.GCshowErrorDialog(e.toString(),null,'Aceptar',null,null,null)
		}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"97DE9B2A-6449-4EAA-A38C-7C86EE503A03"}
 */
function btnCompras(event) {
	// TODO Auto-generated method stub
	try {
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Programas = dataset.getValue(1, 8)
		if(Programas == '1')
		{*/
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_compras]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				if(titulo == 'Pedidos a Proveedores'.toUpperCase())
				{
					var	submenu1 = menu.addMenu(titulo);
					titulo = 'Gestión Pedidos a Proveedores';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///orders_24.gif');
					titulo = 'Impresión de Pedidos a Proveedores';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///printer.gif');
					titulo = 'Consulta Pedidos a Proveedores';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///consulta.gif');
				}
				else if(titulo == 'Albaranes de Entrada'.toUpperCase())
				{
					submenu1 = menu.addMenu(titulo);
					titulo = 'BD Albaranes de Proveedor';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///albaran.gif');
					titulo = 'Consulta Albaranes de Proveedor';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///consulta.gif');
					titulo = 'Actualización Albaranes Stock';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///actualizar.gif');
				}
				else if(titulo == 'Facturas de Proveedor'.toUpperCase())
				{
					submenu1 = menu.addMenu(titulo);
					titulo = 'BD Facturas de Proveedor';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///compras.gif');
					titulo = 'Consulta Facturas de Proveedor';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///consulta.gif');
					titulo = 'Contabilizar Facturas de Proveedor';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///LogoAGMed.gif');
					titulo = 'Compras / Meses';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///calendario.gif');
				}
				else if(titulo == 'GESTIÓN I.V.A. POR SISTEMA SII')
				{
					submenu1 = menu.addMenu(titulo);
					titulo = 'Generar XML Facturas Emitidas';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///SII.gif');
					titulo = 'Generar XML Facturas Recibidas';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///SII.gif');
					titulo = 'Generar XML Facturas Bienes Inversión';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///SII.gif');
					titulo = 'Conexión web SII transf. Archivos';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///SII.gif');					
				}
				else if(titulo == 'Petición de Ofertas'.toUpperCase())
				{
					menu.addMenuItem(titulo, globals.MenuCompras, 'media:///aceptar.gif');
				}
				//menu.addMenuItem(titulo, globals.MenuCompras, null);
			}
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),220,0);					
			}
		/*}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}*/
		}
		catch (e) {}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"4E1A7089-E616-47EB-87F8-9A7FB921D06F"}
 */
function btnCompras2(event) {
	// TODO Auto-generated method stub
	try {
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Programas = dataset.getValue(1, 8)
		if(Programas == '1')
		{*/
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method] from [solution_navigation_compras]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				if(titulo == 'Pedidos a Proveedores'.toUpperCase())
				{
					var	submenu1 = menu.addMenu(titulo);
					titulo = 'Gestión Pedidos a Proveedores';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///orders_24.gif');
					titulo = 'Impresión de Pedidos a Proveedores';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///printer.gif');
					titulo = 'Consulta Pedidos a Proveedores';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///consulta.gif');
				}
				else if(titulo == 'Albaranes de Entrada'.toUpperCase())
				{
					submenu1 = menu.addMenu(titulo);
					titulo = 'BD Albaranes de Proveedor';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///albaran.gif');
					titulo = 'Consulta Albaranes de Proveedor';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///consulta.gif');
					titulo = 'Actualización Albaranes Stock';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///actualizar.gif');
				}
				else if(titulo == 'Facturas de Proveedor'.toUpperCase())
				{
					submenu1 = menu.addMenu(titulo);
					titulo = 'BD Facturas de Proveedor';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///compras.gif');
					titulo = 'Consulta Facturas de Proveedor';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///consulta.gif');
					titulo = 'Contabilizar Facturas de Proveedor';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///LogoAGMed.gif');
					titulo = 'Compras / Meses';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///calendario.gif');
				}
				else if(titulo == 'GESTIÓN I.V.A. POR SISTEMA SII')
				{
					submenu1 = menu.addMenu(titulo);
					titulo = 'Generar XML Facturas Emitidas';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///SII.gif');
					titulo = 'Generar XML Facturas Recibidas';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///SII.gif');
					titulo = 'Generar XML Facturas Bienes Inversión';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///SII.gif');
					titulo = 'Conexión web SII transf. Archivos';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuCompras, 'media:///SII.gif');					
				}
				else if(titulo == 'Petición de Ofertas'.toUpperCase())
				{
					menu.addMenuItem(titulo, globals.MenuCompras, 'media:///aceptar.gif');
				}
				//menu.addMenuItem(titulo, globals.MenuCompras, null);
			}
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),16,-10);					
			}
		/*}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}*/
		}
		catch (e) {}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FD173665-D92E-478C-8F15-B8A9BF13EAF3"}
 */
function btnExpediciones(event) {
	// TODO Auto-generated method stub
	try {
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Expediciones = dataset.getValue(1, 6)
		if(Expediciones == '1')
		{*/
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_albaran]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				var icon = dataset.getValue(i,3);	
				if(icon) menu.addMenuItem(titulo, globals.MenuAlbaran, 'media:///'+icon);
				else menu.addMenuItem(titulo, globals.MenuAlbaran, null);
			}			
			
			
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),220,0);				
			}
		/*}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}*/
		}
		catch (e) {}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D9BA9F4E-EFD6-49DF-9F0A-F4A4038AFF69"}
 */
function btnExpediciones2(event) {
	// TODO Auto-generated method stub
	try {
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Expediciones = dataset.getValue(1, 6)
		if(Expediciones == '1')
		{*/
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_albaran]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				var icon = dataset.getValue(i,3);	
				if(icon) menu.addMenuItem(titulo, globals.MenuAlbaran, 'media:///'+icon);
				else menu.addMenuItem(titulo, globals.MenuAlbaran, null);
			}			
			
			
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),16,-10);				
			}
		/*}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}*/
		}
		catch (e) {}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61EF624E-8D98-4CAD-91C7-4A5C058D4369"}
 */
function btnFacturacion(event) {
	// TODO Auto-generated method stub
	try {
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Facturacion = dataset.getValue(1, 7)
		if(Facturacion == '1')
		{*/
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_facturas]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				if(titulo == 'Contabilizar Facturas'.toUpperCase())
				{
					var	submenu1 = menu.addMenu(titulo);
					titulo = 'Asientos Conta AG Web';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///sm_earth.gif");
					titulo = 'Asientos Conta AG Win';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///LogoAGMin.gif");
				}
				else if(titulo == 'Gestión Cartera de Cobros'.toUpperCase())
				{
					submenu1 = menu.addMenu(titulo);
					titulo = 'Mantenimiento BD de Cobros';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///RegistraPago.png");
					titulo = 'Informe de cobros pendientes';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///consulta.gif");
					titulo = 'Generación Remesas SEPA';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///sepa-image.png");
					titulo = 'BD Bancos ctas. cargo';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///banco.gif");
					titulo = 'BD formas de pago';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///euro.gif");
				}
				else if(titulo == 'GESTIÓN I.V.A. POR SISTEMA SII')
				{
					submenu1 = menu.addMenu(titulo);
					titulo = 'Generar XML Facturas Emitidas';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///SII.gif");
					titulo = 'Generar XML Facturas Recibidas';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///SII.gif");
					titulo = 'Generar XML Facturas Bienes Inversión';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///SII.gif");
					titulo = 'Conexión web SII transf. Archivos';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///SII.gif");					
				}
				else
				{
					var icon = dataset.getValue(i,3);	
					if(icon) menu.addMenuItem(titulo, globals.MenuFacturas, 'media:///'+icon);
					else menu.addMenuItem(titulo, globals.MenuFacturas, null);
				}
			}			
			
			
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),220,0);				
			}					
		/*}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}*/
		}
		catch (e) {}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"8697A70E-8630-428C-B473-673475CC4182"}
 */
function btnFacturacion2(event) {
	// TODO Auto-generated method stub
	try {
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Facturacion = dataset.getValue(1, 7)
		if(Facturacion == '1')
		{*/
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_facturas]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				if(titulo == 'Contabilizar Facturas'.toUpperCase())
				{
					var	submenu1 = menu.addMenu(titulo);
					titulo = 'Asientos Conta AG Web';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///sm_earth.gif");
					titulo = 'Asientos Conta AG Win';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///LogoAGMin.gif");
				}
				else if(titulo == 'Gestión Cartera de Cobros'.toUpperCase())
				{
					submenu1 = menu.addMenu(titulo);
					titulo = 'Mantenimiento BD de Cobros';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///RegistraPago.png");
					titulo = 'Informe de cobros pendientes';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///consulta.gif");
					titulo = 'Generación Remesas SEPA';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///sepa-image.png");
					titulo = 'BD Bancos ctas. cargo';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///banco.gif");
					titulo = 'BD formas de pago';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///euro.gif");
				}
				else if(titulo == 'GESTIÓN I.V.A. POR SISTEMA SII')
				{
					submenu1 = menu.addMenu(titulo);
					titulo = 'Generar XML Facturas Emitidas';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///SII.gif");
					titulo = 'Generar XML Facturas Recibidas';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///SII.gif");
					titulo = 'Generar XML Facturas Bienes Inversión';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///SII.gif");
					titulo = 'Conexión web SII transf. Archivos';	
					titulo = titulo.toUpperCase()
					submenu1.addMenuItem(titulo, globals.MenuFacturas, "media:///SII.gif");					
				}
				else
				{
					var icon = dataset.getValue(i,3);	
					if(icon) menu.addMenuItem(titulo, globals.MenuFacturas, 'media:///'+icon);
					else menu.addMenuItem(titulo, globals.MenuFacturas, null);
				}
			}			
			
			
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),16,-10);				
			}					
		/*}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}*/
		}
		catch (e) {}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DA8C7C5A-7022-4F1D-8D14-AF6E4188973C"}
 */
function btnAyuda(event) {
	// TODO Auto-generated method stub
	globals.GCshowDialogAyuda('Acerca de...',1,null,null,null,null,null,null,null,null)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"4EFDA4A1-6EDC-4663-8170-67E6B7568712"}
 */
function btnNotas(event) {
	// TODO Auto-generated method stub
	try {
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Facturacion = dataset.getValue(1, 7)
		if(Facturacion == '1')
		{*/
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_notas]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				var icon = dataset.getValue(i,3);	
				if(icon) menu.addMenuItem(titulo, globals.MenuNotas, 'media:///'+icon);
				else menu.addMenuItem(titulo, globals.MenuNotas, null);
			}	
			
			
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),220,0);				
			}					
		/*}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}*/
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
 *
 * @properties={typeid:24,uuid:"A025427B-8875-4EF5-B0FC-E981B2A991B6"}
 */
function btnMantenimiento(event) {
	// TODO Auto-generated method stub
	try {
		
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var titulo = 'Parametros de la Aplicación';	
				titulo = titulo.toUpperCase()
				menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///engranaje.gif');
				
				titulo = 'Usuarios';	
				titulo = titulo.toUpperCase()
				menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///grupo.png');
						
				titulo = 'EDITAR PERFIL USUARIO'.toUpperCase();
				menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///nav_edit_greyBg.gif');
				
				titulo = 'Exportación de Datos';	
				titulo = titulo.toUpperCase()
				menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///tabla.gif');
				
				titulo = 'Importación de Datos';	
				titulo = titulo.toUpperCase()
				menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///importar2.jpg');
				
				titulo = 'Actualizar tipos de I.V.A. en Maestros';	
				titulo = titulo.toUpperCase()
				menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///actualizar.gif');
				
				titulo = 'Borrado de Presupuestos';	
				titulo = titulo.toUpperCase()
				menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///papelera.gif');
				
				titulo = 'Borrado de Albaranes';	
				titulo = titulo.toUpperCase()
				menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///papelera.gif');
				
				titulo = 'Borrado de Facturas';	
				titulo = titulo.toUpperCase()
				menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///papelera.gif');
			
				titulo = 'Cambiar Precios Articulos';	
				titulo = titulo.toUpperCase()
				menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///actualizar.gif');
				
				titulo = 'Cambiar Descuentos Articulos';	
				titulo = titulo.toUpperCase()
				menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///actualizar.gif');
			
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
 *
 *
 * @properties={typeid:24,uuid:"04BD4920-93BB-4E97-8E7A-250C9FC047DB"}
 */
function btnMantenimiento2(event) {
	// TODO Auto-generated method stub
	try {
		
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var titulo = 'Parametros de la Aplicación';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///engranaje.gif');
			
			titulo = 'Usuarios';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///grupo.png');
					
			titulo = 'EDITAR PERFIL USUARIO'.toUpperCase();
			menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///nav_edit_greyBg.gif');
			
			titulo = 'Exportación de Datos';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///tabla.gif');
			
			titulo = 'Importación de Datos';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///importar2.jpg');
			
			titulo = 'Actualizar tipos de I.V.A. en Maestros';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///actualizar.gif');
			
			titulo = 'Borrado de Presupuestos';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///papelera.gif');
			
			titulo = 'Borrado de Albaranes';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///papelera.gif');
			
			titulo = 'Borrado de Facturas';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///papelera.gif');
		
			titulo = 'Cambiar Precios Articulos';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///actualizar.gif');
			
			titulo = 'Cambiar Descuentos Articulos';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuMantenimientoGC, 'media:///actualizar.gif');
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),16,-10);				
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
 *
 *
 * @properties={typeid:24,uuid:"CF48E058-65DB-4549-8961-094708F3DAB5"}
 */
function btnStock(event) {
	// TODO Auto-generated method stub
	try {
		
		// create a popup menu
		var menu = plugins.window.createPopupMenu();
		// add a menu item
		var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_contrstock]'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
		var rows = dataset.getMaxRowIndex()
		for(var i=1;i<=rows;i++)
		{
			var titulo = dataset.getValue(i,1);	
			titulo = titulo.toUpperCase()
			var icon = dataset.getValue(i,3);	
			if(icon) menu.addMenuItem(titulo, globals.MenuStock, 'media:///'+icon);
			else menu.addMenuItem(titulo, globals.MenuStock, null);
		}	
		
		
		
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
 *
 *
 *
 * @properties={typeid:24,uuid:"40D2F89F-48FB-4253-8ABC-21E3CB6C7AF3"}
 */
function btnStock2(event) {
	// TODO Auto-generated method stub
	try {
		
		// create a popup menu
		var menu = plugins.window.createPopupMenu();
		// add a menu item
		var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_contrstock]'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
		var rows = dataset.getMaxRowIndex()
		for(var i=1;i<=rows;i++)
		{
			var titulo = dataset.getValue(i,1);	
			titulo = titulo.toUpperCase()
			var icon = dataset.getValue(i,3);	
			if(icon) menu.addMenuItem(titulo, globals.MenuStock, 'media:///'+icon);
			else menu.addMenuItem(titulo, globals.MenuStock, null);
		}	
		
		
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			menu.show(event.getSource(),16,-10);				
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
 *
 *
 *
 * @properties={typeid:24,uuid:"BB1AAF42-F53F-4EDA-BD9E-7416DEBAD672"}
 */
function btnPedidos(event) {
	// TODO Auto-generated method stub
	try {
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Pedidos = dataset.getValue(1, 11)
		if(Pedidos == '1')
		{*/
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_pedidos]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				var icon = dataset.getValue(i,3);	
				if(icon) menu.addMenuItem(titulo, globals.MenuPedidos, 'media:///'+icon);
				else menu.addMenuItem(titulo, globals.MenuPedidos, null);
			}			
			
			
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),220,0);				
			}
			
					
		/*}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}*/
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
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A6604698-5F57-4220-911F-F192C5D82C96"}
 */
function btnPedidos2(event) {
	// TODO Auto-generated method stub
	try {
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Pedidos = dataset.getValue(1, 11)
		if(Pedidos == '1')
		{*/
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_pedidos]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				var icon = dataset.getValue(i,3);	
				if(icon) menu.addMenuItem(titulo, globals.MenuPedidos, 'media:///'+icon);
				else menu.addMenuItem(titulo, globals.MenuPedidos, null);
			}			
			
			
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),16,-10);				
			}
			
					
		/*}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}*/
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
 *
 *
 * @properties={typeid:24,uuid:"4029B4FB-AE36-4EBE-9D59-F76BB8B2F336"}
 */
function btnPresupuestos(event) {
	// TODO Auto-generated method stub
	try {
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Ofertas = dataset.getValue(1, 5)
		if(Ofertas == '1')
		{*/
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_presupuest]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				var icon = dataset.getValue(i,3);	
				if(icon) menu.addMenuItem(titulo, globals.MenuPresupuestos, 'media:///'+icon);
				else menu.addMenuItem(titulo, globals.MenuPresupuestos, null);
			}			
			
			
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),220,0);				
			}
			
					
		/*}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}*/
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
 *
 *
 *
 * @properties={typeid:24,uuid:"9B9C6A93-277A-46A6-A0AD-3AC960F862B7"}
 */
function btnPresupuestos2(event) {
	// TODO Auto-generated method stub
	try {
		/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Ofertas = dataset.getValue(1, 5)
		if(Ofertas == '1')
		{*/
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_presupuest]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				var icon = dataset.getValue(i,3);	
				if(icon) menu.addMenuItem(titulo, globals.MenuPresupuestos, 'media:///'+icon);
				else menu.addMenuItem(titulo, globals.MenuPresupuestos, null);
			}			
			
			
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),16,-10);				
			}
			
					
		/*}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}*/
	}
	catch (e) {}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"177D1233-C3E5-4851-98A9-EA7D7A7F3C36"}
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
 * @properties={typeid:24,uuid:"1190500C-FD16-49C5-8BAF-8AFC92E5BDDC"}
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
	
	/*win = application.createWindow("Agenda", JSWindow.DIALOG);
	win.setInitialBounds(10, 10, 1100, 600);
	win.title = "Calendario / Agenda";
	forms.dialogCalendarioUsuarioGC.controller.show(win);*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7CE64C09-4C02-49E9-B180-28D0C65454C2"}
 */
function btn_ContaAG_Web(event) {
	// TODO Auto-generated method stub
	globals.PopUp = null
	var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Conta = dataset.getValue(1, 12)
	if(Conta == '1' || globals.GCNombreUsuario == 'DEMO')
	{
		globals.PopUp = 1;
		//var ge = java.awt.GraphicsEnvironment.getLocalGraphicsEnvironment();
		//var gs = ge.getScreenDevices();
		/*var j;
		for (j = 0; j < gs.length; j++) { 
		     var gd = gs[j];
		     application.output("Default configuration with bounds: " + gd.getDefaultConfiguration().getBounds() + " found for screen '" + gd.getIDstring() + "'.");

		     // OR, if you want to see all capabilities of a screen
		     var gc = gd.getConfigurations();
		     var i;
		     for (i=0; i < gc.length; i++) {
		         application.output("Configuration with bounds: " + gc[i].getBounds() + " found for device '" + gd.getIDstring() + "'.");
		     }
		}*/
		
		
		
		//var w = 1100;
		//var h = 600;
		//globals.GCshowDialogContaAG('Conta_AGWeb',1,null,null,null,null,null,null,/*gd.getDefaultConfiguration().getBounds().width*/w,/*gd.getDefaultConfiguration().getBounds().height*/h)
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
 * @properties={typeid:24,uuid:"8F8C4FA5-A6E9-4D88-9635-21812C960C4C"}
 */
function btn_CobrosPagos(event) {
	try {
		
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_gccobrospago]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				var icon = dataset.getValue(i,3);	
				if(icon) menu.addMenuItem(titulo, globals.MenuCobrosPagoGC, 'media:///'+icon);
				else menu.addMenuItem(titulo, globals.MenuCobrosPagoGC, null);
			}			
			
			
			
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
 * @properties={typeid:24,uuid:"2C5EB06D-6189-4057-9716-B33B4875DD97"}
 */
function btn_CobrosPagos2(event) {
	try {
		
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var query = 'select [item_name],[action_method],[icon_name] from [solution_navigation_gccobrospago]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			var rows = dataset.getMaxRowIndex()
			for(var i=1;i<=rows;i++)
			{
				var titulo = dataset.getValue(i,1);	
				titulo = titulo.toUpperCase()
				var icon = dataset.getValue(i,3);	
				if(icon) menu.addMenuItem(titulo, globals.MenuCobrosPagoGC, 'media:///'+icon);
				else menu.addMenuItem(titulo, globals.MenuCobrosPagoGC, null);
			}			
			
			
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),16,-10);				
			}
			
					
		
	}
	catch (e) {}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B389A993-C087-485E-991E-FC92ECF32E43"}
 */
function btnInformes(event) {
		try {
			
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var titulo = 'Balance Ingresos/Gastos';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras';	
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
			
			/*titulo = 'Compras / Ventas';	
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
 * @properties={typeid:24,uuid:"A2D1B479-44CB-4236-A34A-57B183ABE5A3"}
 */
function btnInformes2(event) {
		try {
			
			// create a popup menu
			var menu = plugins.window.createPopupMenu();
			// add a menu item
			var titulo = 'Balance Ingresos/Gastos';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuInformes, null);
			titulo = 'Compras';	
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
