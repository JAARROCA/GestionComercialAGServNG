/**
 * @protected
 * 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"4FAD023B-8C9E-411C-B577-3C9E29B2050F"}
 */
function onLoad(event) {
	
	// register for navigation event
	scopes.svyNavigation.addNavigationListener(onOpenHandler);
	
	var menuItems = loadMenuItems();
	elements.sidenav.setRootMenuItems(menuItems)
	//elements.sidenav.setRootMenuItems(menuItems);

	// init the navbar menu
	var navbarItems = loadNavbarItems(event);
	elements.navbar.setMenuItems(navbarItems);
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 *
 * @properties={typeid:24,uuid:"A595D70C-ED59-42F3-B778-1E35D15E3E7D"}
 */
function onShow(firstShow, event) {
	if(gcparametrosaplicacion_to_parametrosaplicacion && gcparametrosaplicacion_to_parametrosaplicacion.empresa) {
		elements.navbar.brandText = gcparametrosaplicacion_to_parametrosaplicacion.empresa;
		globals.GCNombreEmpresa = gcparametrosaplicacion_to_parametrosaplicacion.empresa;
	}
	else if(globals.GCNombreEmpresa) elements.navbar.brandText = globals.GCNombreEmpresa;
	else elements.navbar.brandText = 'MENÚ PRINCIPAL';
	
	
	
	if (firstShow) {
		// set first selection
		if (elements.sidenav.containedForm) {
			var selectedItemID = getMenuItemID(elements.sidenav.containedForm); 
			var selectedItem = elements.sidenav.getMenuItem(selectedItemID);
			if (selectedItem) {
				elements.sidenav.setSelectedMenuItem(selectedItemID, false, false);
			}
		}
	}
}

/** 
 * @param {JSEvent} event the event that triggered the action
 * 
 * @return {Array}
 * @properties={typeid:24,uuid:"76B647D6-E016-464E-8DD5-C2A609EAC4F7"}
 * @override
 */
function loadNavbarItems(event) {
	var menuItems = [];
	var menuItem;

	/*menuItem = elements.navbar.createMenuItem('Search', DEFAULT_NAVBAR_ACTIONS.SEARCH, 'RIGHT');
	menuItem.displayType = 'INPUT_GROUP';
	menuItem.styleClass = 'closed searchbar';
	menuItem.inputButtonStyleClass = "btn-default";
	menuItem.iconName = "fa fa-search";
	menuItems.push(menuItem);*/

	if(globals.GClogin_usuario){
	//if (security.getUserName()) {
		menuItem = elements.navbar.createMenuItem('Buscar...', DEFAULT_NAVBAR_ACTIONS.SEARCH, 'RIGHT');
		//menuItem = elements.navbar.createMenuItem('Buscar...', globals.GCnav_search, 'RIGHT');
		menuItem.dataProvider = globals.GCnav_search;
		menuItem.displayType = 'INPUT_GROUP';
		menuItem.styleClass = 'closed searchbar';
		menuItem.inputButtonStyleClass = "btn-default";
		menuItem.iconName = "fa fa-search";
		menuItems.push(menuItem);
		
		menuItem = elements.navbar.createMenuItem('', 'Navbar_divider', 'RIGHT');
		menuItem.isActive = false;
		menuItem.isDivider = true;
		menuItem.displayType = 'MENU_ITEM';
		//menuItem.iconName = 'fa fa-grip-lines-vertical';//"fa-solid fa-grip-lines-vertical"
		menuItem.styleClass = 'no-border';
		menuItems.push(menuItem); 
		
		menuItem = elements.navbar.createMenuItem(globals.GCNombreUsuario, DEFAULT_NAVBAR_ACTIONS.USER, 'RIGHT');
		//menuItem = elements.navbar.createMenuItem(security.getUserName(), DEFAULT_NAVBAR_ACTIONS.USER, 'RIGHT');
		menuItem.displayType = 'BUTTON';/*'MENU_ITEM';*/
		menuItem.iconName = 'fa fa-user';/*'glyphicon glyphicon-camera';*/
		menuItem.styleClass = 'btn btn-primary';/*'no-border';*/
		menuItem.tooltip = 'Editar Perfil Usuario';
		menuItems.push(menuItem);
		/*var submenuItems = [];

		submenuItems.push(elements.navbar.createMenuItem('Logout', DEFAULT_NAVBAR_ACTIONS.LOGOUT));
		menuItem.subMenuItems = submenuItems;
		menuItems.push(menuItem);*/
		
		menuItem = elements.navbar.createMenuItem('', 'Navbar_divider', 'RIGHT');
		menuItem.isActive = false;
		menuItem.isDivider = true;
		menuItem.displayType = 'MENU_ITEM';
		//menuItem.iconName = 'fa fa-grip-lines-vertical';//"fa-solid fa-grip-lines-vertical"
		menuItem.styleClass = 'no-border';
		menuItems.push(menuItem); 
		
		menuItem = elements.navbar.createMenuItem('', DEFAULT_NAVBAR_ACTIONS.USER, 'RIGHT');
		menuItem.itemId = 'LOGOUT';
		//menuItem = elements.navbar.createMenuItem(security.getUserName(), DEFAULT_NAVBAR_ACTIONS.USER, 'RIGHT');
		menuItem.displayType = 'BUTTON';/*'MENU_ITEM';*/
		menuItem.iconName = 'fa fa-sign-out-alt';/*'glyphicon glyphicon-camera';*/
		menuItem.styleClass = 'btn btn-primary';/*'no-border';*/
		menuItem.tooltip = 'Salir de la aplicación';
		//menuItem.onAction = customexitdialog();//forms.FrmPrincipalGC.btn_Salir(event)
		menuItems.push(menuItem); 
	}

	return menuItems;
}

/**
 * This method is called as part of the [onLoad]{@link onLoad} operation flow.
 * Override this method to initialize your navigation form
 * @return {Array}
 * @properties={typeid:24,uuid:"22B3B0B6-44D1-4295-A98C-93A3A7E45E7C"}
 */
function loadMenuItems() { 
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	var menuItem;
	var menuItems = [];
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	var submenuItem;
	var submenuItems = [];
	
	//var menu = [{id: 1,text: "Sample Item #1",styleClass : "sn-large",iconStyleClass: "glyphicon glyphicon-search",data: { description: "This is sample information that can be added to a menuItem" },menuItems: [{id: 5,text: "Sub Item #1"}, {id: 6,text: "Sub Item #2"}]}, {id: 2,text: "Sample Item #2"},{isDivider: true},{id: 3,text: "Sample Item #3",enabled: false}];elements.sideNavigation.setRootMenuItems(menu);
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	menuItem = {
		id : "FrmPrincipalNGGC",
		iconStyleClass : "fas fa-home",
		styleClass :"svy-sidenav-itemprincipal",
		text : "INICIO",
		tooltip : "INICIO",
		data :  {formName: 'FrmPrincipalNGGC'}/*,
	    /*isDivider : true,
		enabled : false*/
	}
	menuItems.push(menuItem);
	
	var query = 'select [item_name],[action_method],[icon_name],[nav_id] from [solution_navigation_maestros]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	var rows = dataset.getMaxRowIndex()
	for(var i=1;i<=rows;i++)
	{
		var titulo = dataset.getValue(i,1);	
		titulo = titulo.toUpperCase()
		var frm = 'Frm'+dataset.getValue(i,2);	
		submenuItem = {
			id : frm,
			iconStyleClass : "fas fa-angle-right",
			styleClass :"svy-sidenav-item.sn-level-1",
			text : titulo,
			data :  {formName: frm}
		}
		submenuItems.push(submenuItem)
	}
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	menuItem = {
		id : "BBDDMaestras",
		iconStyleClass : "fas fa-database",
		text : "BBDD MAESTRAS",
		tooltip : "BBDD MAESTRAS",
		menuItems:  submenuItems
	}
	menuItems.push(menuItem)
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	submenuItem = null;
	submenuItems = [];
	query = 'select [item_name],[action_method],[icon_name],[nav_id] from [solution_navigation_presupuest]'
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	rows = dataset.getMaxRowIndex()
	for(i=1;i<=rows;i++)
	{
		titulo = dataset.getValue(i,1);	
		titulo = titulo.toUpperCase()
		frm = 'Frm'+dataset.getValue(i,2);	
		submenuItem = {
			id : frm,
			iconStyleClass : "fas fa-angle-right",
			text : titulo,
			data :  {formName: frm}
		}
		submenuItems.push(submenuItem)
	}
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	menuItem = {
		id : "Presupuestos",
		iconStyleClass : "fas fa-clipboard-check",
		text : "PRESUPUESTOS",
		tooltip : "PRESUPUESTOS",
		menuItems:  submenuItems
	}
	menuItems.push(menuItem)
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	submenuItem = null;
	submenuItems = [];
	query = 'select [item_name],[action_method],[icon_name],[nav_id] from [solution_navigation_pedidos]'
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	rows = dataset.getMaxRowIndex()
	for(i=1;i<=rows;i++)
	{
		titulo = dataset.getValue(i,1);	
		titulo = titulo.toUpperCase()
		frm = 'Frm'+dataset.getValue(i,2);	
		submenuItem = {
			id : frm,
			iconStyleClass : "fas fa-angle-right",
			text : titulo,
			data :  {formName: frm}
		}
		submenuItems.push(submenuItem)
	}
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	menuItem = {
		id : "Pedidos",
		iconStyleClass : "fas fa-clipboard-list",
		text : "PEDIDOS",
		tooltip : "PEDIDOS",
		menuItems:  submenuItems
	}
	menuItems.push(menuItem)
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	submenuItem = null;
	submenuItems = [];
	query = 'select [item_name],[action_method],[icon_name],[nav_id] from [solution_navigation_albaran]'
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	rows = dataset.getMaxRowIndex()
	for(i=1;i<=rows;i++)
	{
		titulo = dataset.getValue(i,1);	
		titulo = titulo.toUpperCase()
		frm = 'Frm'+dataset.getValue(i,2);	
		submenuItem = {
			id : frm,
			iconStyleClass : "fas fa-angle-right",
			text : titulo,
			data :  {formName: frm}
		}
		submenuItems.push(submenuItem)
	}
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	menuItem = {
		id : "Albaranes",
		iconStyleClass : "fas fa-clipboard-list",
		text : "ALBARANES",
		tooltip : "ALBARANES",
		menuItems:  submenuItems
	}
	menuItems.push(menuItem)
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	submenuItem = null;
	submenuItems = [];
	query = 'select [item_name],[action_method],[icon_name],[nav_id] from [solution_navigation_facturas]'
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	rows = dataset.getMaxRowIndex()
	for(i=1;i<=rows;i++)
	{
		titulo = dataset.getValue(i,1);	
		titulo = titulo.toUpperCase()
		frm = 'Frm'+dataset.getValue(i,2);	
		submenuItem = {
			id : frm,
			iconStyleClass : "fas fa-angle-right",
			text : titulo,
			data :  {formName: frm}
		}
		submenuItems.push(submenuItem)
	}
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	menuItem = {
		id : "Facturación",
		iconStyleClass : "fas fa-file-invoice",
		text : "FACTURACIÓN",
		tooltip : "FACTURACIÓN",
		menuItems:  submenuItems
	}
	menuItems.push(menuItem)
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	submenuItem = null;
	submenuItems = [];
	query = 'select [item_name],[action_method],[icon_name],[nav_id] from [solution_navigation_compras]'
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	rows = dataset.getMaxRowIndex()
	for(i=1;i<=rows;i++)
	{
		titulo = dataset.getValue(i,1);	
		titulo = titulo.toUpperCase()
		frm = 'Frm'+dataset.getValue(i,2);	
		submenuItem = {
			id : frm,
			iconStyleClass : "fas fa-angle-right",
			text : titulo,
			data :  {formName: frm}
		}
		submenuItems.push(submenuItem)
	}
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	menuItem = {
		id : "Compras",
		iconStyleClass : "fas fa-shopping-cart",
		text : "COMPRAS",
		tooltip : "COMPRAS",
		menuItems:  submenuItems
	}
	menuItems.push(menuItem)
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	submenuItem = null;
	submenuItems = [];
	query = 'select [item_name],[action_method],[icon_name],[nav_id] from [solution_navigation_gccobrospago]'
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	rows = dataset.getMaxRowIndex()
	for(i=1;i<=rows;i++)
	{
		titulo = dataset.getValue(i,1);	
		titulo = titulo.toUpperCase()
		frm = 'Frm'+dataset.getValue(i,2);	
		submenuItem = {
			id : frm,
			iconStyleClass : "fas fa-angle-right",
			text : titulo,
			data :  {formName: frm}
		}
		submenuItems.push(submenuItem)
	}
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	menuItem = {
		id : "CobrosPago",
		iconStyleClass : "fas fa-money-bill-alt",//"fas fa-credit-card",
		text : "COBROS/PAGOS TESORERÍA",
		tooltip : "COBROS/PAGOS TESORERÍA",
		menuItems:  submenuItems
	}
	menuItems.push(menuItem)
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	submenuItem = null;
	submenuItems = [];
	query = 'select [item_name],[action_method],[icon_name],[nav_id] from [solution_navigation_contrstock]'
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	rows = dataset.getMaxRowIndex()
	for(i=1;i<=rows;i++)
	{
		titulo = dataset.getValue(i,1);	
		titulo = titulo.toUpperCase()
		frm = 'Frm'+dataset.getValue(i,2);	
		submenuItem = {
			id : frm,
			iconStyleClass : "fas fa-angle-right",
			text : titulo,
			data :  {formName: frm}
		}
		submenuItems.push(submenuItem)
	}
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	menuItem = {
		id : "Stock",
		iconStyleClass : "fas fa-store-alt",
		text : "STOCK",
		tooltip : "STOCK",
		menuItems:  submenuItems
	}
	menuItems.push(menuItem)
	
	/*menuItem = new Object();
	menuItem.id = "FrmPrincipalNGGC";
	menuItem.iconStyleClass = "fas fa-home";
	menuItem.text = "";//"MENÚ PRINCIPAL";
	//menuItem.styleClass = 'sidenav_a1item';
	menuItem.data =  {formName: 'FrmPrincipalNGGC'},
    menuItem.isDivider = true;
	menuItem.enabled = false;
	menuItems.push(menuItem);*/
	
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	/*menuItem = new Object();
	menuItem.id = "BBDDMaestras";
	menuItem.iconStyleClass = "fas fa-database";
	menuItem.text = "BBDD MAESTRAS";
	//menuItem.data =  { description: "This is sample information that can be added to a menuItem" },
    /*var submenuItems= [{
    	  id: 5,
    	  text: "Sub Item #1"
    	}, {
    	  id: 6,
    	  text: "Sub Item #2"}]*/
	/*var submenuItems= [];
    var query = 'select [item_name],[action_method],[icon_name],[nav_id] from [solution_navigation_maestros]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	var rows = dataset.getMaxRowIndex()
	for(var i=1;i<=rows;i++)
	{
		var titulo = dataset.getValue(i,1);	
		titulo = titulo.toUpperCase()
		var id = dataset.getValue(i,4);	
		
	}*/
	//menuItems.push(menuItem)
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	/*menuItem = new Object();
	menuItem.id = "Presupuestos";
	menuItem.iconStyleClass = "fas fa-clipboard-check";
	menuItem.text = "PRESUPUESTOS";
	menuItems.push(menuItem)*/
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	/*menuItem = new Object();
	menuItem.id = "Pedidos";
	menuItem.iconStyleClass = "fas fa-clipboard-list";
	menuItem.text = "PEDIDOS";
	menuItems.push(menuItem)*/
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	/*menuItem = new Object();
	menuItem.id = "Albaranes";
	menuItem.iconStyleClass = "fas fa-clipboard-list";
	menuItem.text = "ALBARANES";
	menuItems.push(menuItem)*/
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	/*menuItem = new Object();
	menuItem.id = "Facturación";
	menuItem.iconStyleClass = "fas fa-file-invoice";
	menuItem.text = "FACTURACIÓN";
	menuItems.push(menuItem)*/
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	/*menuItem = new Object();
	menuItem.id = "Compras";
	menuItem.iconStyleClass = "fas fa-shopping-cart";
	menuItem.text = "COMPRAS";
	menuItems.push(menuItem)*/
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	/*menuItem = new Object();
	menuItem.id = "CobrosPagos";
	menuItem.iconStyleClass = "fas fa-money-bill-alt";//"fas fa-credit-card";
	menuItem.text = "Cobros/Pagos Tesorería";
	menuItems.push(menuItem)*/
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	/*menuItem = new Object();
	menuItem.id = "Stock";
	menuItem.iconStyleClass = "fas fa-store-alt";
	menuItem.text = "STOCK";
	menuItems.push(menuItem)*/
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	/*menuItem = new Object();
	menuItem.id = "Informes";
	menuItem.iconStyleClass = "fas fa-chart-pie";
	menuItem.text = "INFORMES",
	menuItem.tooltip = "INFORMES";
	menuItems.push(menuItem)*/
	
	//Submenus y menu Balance Aplicacion
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	submenuItem = null;
	submenuItems = [];
	
	titulo = 'Balance Ingresos/Gastos';	
	titulo = titulo.toUpperCase()
	frm = 'FrmBalance';	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Compras - Artículos';	
	titulo = titulo.toUpperCase()
	frm = 'Compras - Artículos';	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Compras - Familias';	
	titulo = titulo.toUpperCase()
	frm = 'Compras - Familias';	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Compras - Proveedores';	
	titulo = titulo.toUpperCase()
	frm = 'Compras - Proveedores';	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Compras / Meses';	
	titulo = titulo.toUpperCase()
	frm = 'Compras / Meses';	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Compras / Años';	
	titulo = titulo.toUpperCase()
	frm = 'Compras / Años';	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Ventas - Artículos';	
	titulo = titulo.toUpperCase()
	frm = 'Ventas - Artículos';	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Ventas - Familias';	
	titulo = titulo.toUpperCase()
	frm = 'Ventas - Familias';	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Ventas - Clientes';	
	titulo = titulo.toUpperCase()
	frm = 'Ventas - Clientes';	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Ventas / Meses';	
	titulo = titulo.toUpperCase()
	frm = 'Ventas / Meses';	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Ventas / Años';	
	titulo = titulo.toUpperCase()
	frm = 'Ventas / Años';	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Ventas / Zonas';	
	titulo = titulo.toUpperCase()
	frm = 'Ventas / Años';	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	
	menuItem = {
		id : "Informes",
		iconStyleClass : "fas fa-chart-pie",
		text : "INFORMES",
		tooltip : "INFORMES",
		menuItems:  submenuItems
	}
	menuItems.push(menuItem)
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	/*menuItem = new Object();
	menuItem.id = "Mantenimiento";
	menuItem.iconStyleClass = "fas fa-wrench";
	menuItem.text = "MANTENIMIENTO";
	menuItem.tooltip = "MANTENIMIENTO";
	menuItems.push(menuItem)*/
	
	//Submenus y menu Mantenimiento Aplicacion
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	submenuItem = null;
	submenuItems = [];
	
	titulo = 'Parámetros Aplicación';	
	titulo = titulo.toUpperCase()
	frm = titulo;	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Usuarios';	
	titulo = titulo.toUpperCase()
	frm = titulo;	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'EDITAR PERFIL USUARIO';	
	titulo = titulo.toUpperCase()
	frm = titulo;	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Exportación de Datos';	
	titulo = titulo.toUpperCase()
	frm = titulo;	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Importación de Datos';	
	titulo = titulo.toUpperCase()
	frm = titulo;	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Actualizar tipos de I.V.A. en Maestros';	
	titulo = titulo.toUpperCase()
	frm = titulo;	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Borrado de Presupuestos';	
	titulo = titulo.toUpperCase()
	frm = titulo;	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Borrado de Albaranes';	
	titulo = titulo.toUpperCase()
	frm = titulo;	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Borrado de Facturas';	
	titulo = titulo.toUpperCase()
	frm = titulo;	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Cambiar Precios Articulos';	
	titulo = titulo.toUpperCase()
	frm = titulo;	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	titulo = 'Cambiar Descuentos Articulos';	
	titulo = titulo.toUpperCase()
	frm = titulo;	
	submenuItem = {
		id : frm,
		iconStyleClass : "fas fa-angle-right",
		text : titulo,
		data :  {formName: frm}
	}
	submenuItems.push(submenuItem)
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	menuItem = {
		id : "Mantenimiento",
		iconStyleClass : "fas fa-wrench",
		text : "MANTENIMIENTO",
		tooltip : "MANTENIMIENTO",
		menuItems:  submenuItems
	}
	menuItems.push(menuItem)
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	/*menuItem = new Object();
	menuItem.id = "Contabilidad";
	menuItem.iconStyleClass = "fas fa-balance-scale";
	menuItem.text = "GESTIÓN CONTABLE AG";
	menuItem.tooltip = "GESTIÓN CONTABLE AG";
	menuItems.push(menuItem)*/
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	/*menuItem = new Object();
	menuItem.id = "Acerca";
	menuItem.iconStyleClass = "fas fa-info";
	menuItem.text = "ACERCA DE...";
	menuItem.tooltip = "ACERCA DE...";
	menuItem.data =  {formName: 'ACERCA'}
	menuItems.push(menuItem)*/
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	menuItem = {
		id : "Acerca",
		iconStyleClass : "fas fa-info",
		text : "ACERCA DE...",
		tooltip : "ACERCA DE...",
		data :  {formName: 'ACERCA'}
	}
	menuItems.push(menuItem)
	
	return menuItems;
	
}

/**
 * @return {Boolean}
 * @param {scopes.svyNavigation.NavigationEvent} event
 *
 * @properties={typeid:24,uuid:"E139B553-507E-4A7E-98DA-C2112B9FEBB3"}
 */
function onOpenHandler(event) {

	var type = event.getEventType();

	if (type == scopes.svyNavigation.NAVIGATION_EVENT.BEFORE_CLOSE) {
		
		// don't allow navigation when beforeClose is called
		if (beforeClose(event) === false) {
			return false;
		}
		
	} else if (type == scopes.svyNavigation.NAVIGATION_EVENT.AFTER_OPEN) {
		
		// run the beforOpen and prevent open if goes wrong
		if (beforeOpen(event) === false) {
			// FIXME i have to remove the navigation item from the list of navigationItems
			//	scopes.svyNavigation.close();
			// return false;
		}
		
		// open the item. the UI will be updated by the onOpen function
		onOpen(event);
		
		// run the after openEvent
		afterOpen(event);
	}
	return true;
}

/**
 * This method is called as part of the [onOpenHandler]{@link onOpen} operation flow.
 * 
 * @param {scopes.svyNavigation.NavigationEvent} event
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"D80B332E-AEAE-4C79-8D66-FEF48C322388"}
 */
function beforeOpen(event) {
	/** @type {scopes.svyNavigation.NavigationItem} */
	var item = event.getNavigationItem();
	var dataToShow = event.getDataToShow();
	var dataSelectionType = event.getDataSelectionType();
	
	var success = true;
	var formName = item.getFormName();
	//	var navPks = item.getPks();
	//	var navFilters = item.getFilters();

	// get the form instance
	var form = forms[formName];
	if (!form) {
		plugins.webnotificationsToastr.warning('No se puede navegar al formulario porque no se puede encontrar la instancia del formulario ' + formName,'¡IllegalStateException!')
		throw new scopes.svyExceptions.IllegalStateException('No se puede navegar al formulario porque no se puede encontrar la instancia del formulario ' + formName);
	}
	
	if (dataToShow) {
		success = loadFormData(form, dataToShow, dataSelectionType);
	}
	return success;
}

/**
 * 
 * @param {RuntimeForm} form
 * @param {JSRecord|JSFoundSet|QBSelect} dataToShow
 * @param dataSelectionType
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"7C5042F4-FA48-4CFA-AED0-AFC2583F422C"}
 */
function loadFormData(form, dataToShow, dataSelectionType) {
	var success = false;
	
	/** @type {JSRecord} */
	var record;
	/** @type {JSFoundSet} */
	var jsFoundset;
	/** @type {QBSelect} */
	var query;
	
	switch (dataSelectionType) {
	case scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.LOAD_RECORDS:
		// load the given data into the foundset form
		
		// TODO shall i check the dataSource type ?
		if (dataToShow instanceof JSFoundSet) {
			jsFoundset = dataToShow;
			success = form.foundset.loadRecords(jsFoundset);
		} else if (dataToShow instanceof QBSelect) {
			query = dataToShow;
			success = form.foundset.loadRecords(query);
		} else if (dataToShow instanceof JSRecord) {
			record = dataToShow;
			success = scopes.svyDataUtils.loadRecords(form.foundset, record.getPKs());
		}
		break;
		
	case scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SET_FOUNDSET:
		jsFoundset = dataToShow;
		form.controller.loadRecords(jsFoundset);
		break;
		
	case scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SELECT_RECORD:
		/** @type {JSRecord} */
		record = dataToShow;
		success = scopes.svyDataUtils.selectRecord(form.foundset, record);
		break;
		
	case scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.FORCE_SELECT_RECORD:
		/** @type {JSRecord} */
		record = dataToShow;
		success = scopes.svyDataUtils.selectRecord(form.foundset, record);
		
		if (!success) {
			// to force the selection, load all the record in foundset
			jsFoundset = form.foundset.duplicateFoundSet();
			jsFoundset.loadAllRecords();
			if (scopes.svyDataUtils.selectRecord(jsFoundset, record)) {
				success = form.foundset.loadRecords(jsFoundset);
			} else {
				application.output(utils.stringFormat('No se puede seleccionar el registro "%1$s"', [record.getPKs().join(",")]), LOGGINGLEVEL.WARNING)
			}
		}
		
		break;
	default:
		plugins.webnotificationsToastr.error("No se puede abrir el elemento; Error al cargar datos, dataSelectionType no válido " + dataSelectionType,'¡Error!')
		throw new Error("No se puede abrir el elemento; Error al cargar datos, dataSelectionType no válido " + dataSelectionType);
		break;
	}
	return success;
}

/**
 * This method is called as part of the [onOpen]{@link onOpenHandler} operation flow.
 * 
 * @protected 
 * @param {scopes.svyNavigation.NavigationEvent} event
 * 
 * @return {Boolean} True (default) if the navItem can be closed and navigation can proceed, false to cancel the navigation.
 *
 * @properties={typeid:24,uuid:"24E0471D-5A65-4A3C-ACF8-194E172EAB07"}
 */
function beforeClose(event) {
	return true;
}

/**
 * This method is called as part of the [onOpen]{@link onOpenHandler} operation flow.
 * 
 * @protected 
 * @param {scopes.svyNavigation.NavigationEvent} event
 *
 * @properties={typeid:24,uuid:"26B404B5-2DC8-45CF-BE40-4E49C7B3ADE3"}
 */
function onOpen(event) {
	/** @type {scopes.svyNavigation.NavigationItem} */
	var item = event.getNavigationItem();
	var formName = item.getFormName();
	
	// get the form instance
	var form = forms[formName];
	if (!form) {
		plugins.webnotificationsToastr.warning('No se puede navegar al formulario porque no se puede encontrar la instancia del formulario ' + formName,'¡IllegalStateException!')
		throw new scopes.svyExceptions.IllegalStateException('No se puede navegar al formulario porque no se puede encontrar la instancia del formulario ' + formName);
	}

	// show form
	elements.sidenav.containedForm = formName;

	//  update the selected menu item for the main menu
	var menuId = getMenuItemID(item.getFormName());
	if (menuId) {
		elements.sidenav.setSelectedMenuItem(menuId, false, false);
	} else {
		elements.sidenav.setSelectedMenuItem(null, false, false);
	}
}

/**
 * This method is called as part of the [onOpen]{@link onOpenHandler} operation flow.
 * 
 * @protected 
 * @param {scopes.svyNavigation.NavigationEvent} event
 *
 * @properties={typeid:24,uuid:"576264F3-45F5-4EC6-B3CB-4353041A7DDC"}
 */
function afterOpen(event) { }

/**
 * Returns the formName associated with the given menuItemID.
 * With the Default behavior it assumes the given menuItemID value is the formName to be used in navigation, therefore it returns the menuItemID value as is.
 * Override this function if you would like to use your own mapping between the menuItemID and the formName for navigation item.
 * 
 * @protected 
 * @param {String|Number} menuItemID 
 * 
 * TODO add example
 * 
 * @return {String} Returns the formName for the given menuItemID. Default returns the menuItemID value.
 *
 * @properties={typeid:24,uuid:"B4FFAC16-F10F-4953-AC5C-84490E7011BF"}
 */
function getMenuItemFormName(menuItemID) {
	
	/** @type {String} */
	var formName = menuItemID;
	return formName;
}

/**
 * Returns the menuItemID associated with the given formName.
 * With the Default behavior it assumes the given menuItemID value is the formName to be used in navigation, therefore it returns the formName value as is.
 * Override this function if you would like to use your own mapping between the menuItemID and the formName for navigation item.
 * 
 * @protected 
 * @param {String} formName 
 * 
 * TODO add example
 * 
 * @return {String|Number} Returns the menuItemID for the given formName. Default returns the formName value.
 *
 * @properties={typeid:24,uuid:"A0C7D6F7-22BB-4473-BE75-47E2E7902636"}
 */
function getMenuItemID(formName) {
	return formName;
}

/**
 * @return {String}
 * @public
 *
 * @properties={typeid:24,uuid:"5234E8B2-F3C0-4F98-8DE9-229008B80A8F"}
 */
function getActiveFormName() {
	throw new scopes.svyExceptions.AbstractMethodInvocationException("implement getActiveFormName for Navigation Form " + controller.getName());
}

/**
 * Called whenever a menu item from the sidenav is selected with the JSEvent and the menuItemId clicked on.
 * 
 * @param {String} menuItemId
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 *
 *
 * @properties={typeid:24,uuid:"7DA35A82-819F-4F40-BD3A-7949E216ACF9"}
 */
function onMenuItemSelectedHandler(menuItemId, event) {

	if (onMenuItemSelected(menuItemId, event) === false) {
		return false;
	}

	
	// form to navigate too
	var formName = getMenuItemFormName(menuItemId)
	
	var form = forms[formName];
	
	// open the selected navigation item
	if (menuItemId && formName && form) {
		var menuItem = elements.sidenav.getMenuItem(menuItemId);

		// TODO will always be a new navigation item !?!?
		var item = new scopes.svyNavigation.NavigationItem(formName, menuItem.text);
		if(formName != 'FrmPrincipalNGGC') elements.sidenav.open = false;
		else if(formName == 'FrmPrincipalNGGC') elements.sidenav.open = true;
		
		if(!form) application.output(menuItemId)
		return scopes.svyNavigation.open(item);
	}	
	if(!form && (menuItemId == 'Compras - Artículos' ||
		menuItemId == 'Compras - Familias' ||
		menuItemId == 'Compras - Proveedores' ||
		menuItemId == 'Compras / Meses' ||
		menuItemId == 'Compras / Años' ||
		menuItemId == 'Ventas - Artículos' ||
		menuItemId == 'Ventas - Familias' ||
		menuItemId == 'Ventas - Clientes' ||
		menuItemId == 'Ventas / Meses' ||
		menuItemId == 'Ventas / Años' ||
		menuItemId == 'Ventas / Zonas')) {
	globals.MenuInformesNG(event, menuItemId.toUpperCase())    		
	}
	
	if(!form && menuItemId && menuItemId != '') {
		switch( menuItemId )
		{
			case 'Acerca':
			{
				//scopes.svyCustomDialogs.showFormInDialog('dlgAyudaGC')
				//globals.GCshowDialogAyuda('Acerca de...',1,null,null,null,null,null,null,null,null)
				var win = application.getWindow("Ayuda")
				if(win != null) win.destroy();
				
				win = application.createWindow("Ayuda", JSWindow.MODAL_DIALOG);
				win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, 550, 250);
				win.title = "Acerca de...";		
				win.show(forms.dlgAyudaGC)
				break;
			}
			case 'PARÁMETROS APLICACIÓN': 
			{
				var query = "select NºEmpresa from ParametrosAplicacion where NºEmpresa = 1";
				if(globals.GCconex == null) var con = 'conexiongestioncomercialag'
				else con = globals.GCconex
				var dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
				var emp = dataset.getValue(1,1);
				if(emp == null) 
				{
					forms.dlg_ParametroAplicacionGC.foundset.newRecord(true)
					
					forms.dlg_ParametroAplicacionGC.nºempresa = 1;
					forms.dlg_ParametroAplicacionGC.propiedad = 'AG Informática y Servicios S.A.'
					forms.dlg_ParametroAplicacionGC.facturapredet = 1;
					databaseManager.saveData()
				
				}
				forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
			
				//start a transaction
				if(!globals.GCisEditing()) globals.GCstartEditing()
			
				//setup the method to execute when the dialog closes
				//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deleteAddressItem()'
			
				//show the "fake" dialog
				
				globals.GCshowDialogParametrosAplicacion('Editar Parámetros Aplicación', 1, null, null, true, 'Borrar Línea', null, null, null, null);
				break;		
			}
			case 'USUARIOS': 
			{
				 globals.GCevento = 'control Z'
				 globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);		
				 break;
			}
			case 'EDITAR PERFIL USUARIO': 
			{
				onGlobalUser(event)
				break;
			}
			case 'Exportación de Datos'.toUpperCase(): 
			{
				globals.GCCriterios = 0;
				globals.GCTipoConsulta = 0;
				globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null);	
				break;
			}
			case 'Importación de Datos'.toUpperCase(): 
			{
				globals.GCshowDialogImportacionDatos('Importación de Datos',1,null,null,null,null,null,null,null,null);
				break;
			}
			case 'Actualizar tipos de I.V.A. en Maestros'.toUpperCase(): 
			{
				globals.GCshowDialogActualizarIVA('Actualizar tipos de I.V.A.',1,null,null,null,null,null,null,null,null);
				break;
			}
			case 'Borrado de Presupuestos'.toUpperCase(): 
			{
				globals.GCevento = 'Borrado de Presupuestos'
				globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);
				break;
			}
			case 'Borrado de Albaranes'.toUpperCase(): 
			{
				globals.GCevento = 'Borrado de Albaranes'
				globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);
				break;
			}
			case 'Borrado de Facturas'.toUpperCase(): 
			{
				globals.GCevento = 'Borrado de Facturas'
				globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);
				break;
			}
			case 'Cambiar Precios Articulos'.toUpperCase(): 
			{
				globals.GCshowDialogCambiarPreciosArticulos('Cambiar Precios Articulos',1,null,null,null,null,null,null,null,null)
				break;
			}
			case 'Cambiar Descuentos Articulos'.toUpperCase(): 
			{
				globals.GCshowDialogCambiarDtoArticulos('Cambiar Descuento Articulos',1,null,null,null,null,null,null,null,null)    	
				break;
			}
			default: break;
		}
	}
	/*if(!form && menuItemId == 'Acerca') {
		//scopes.svyCustomDialogs.showFormInDialog('dlgAyudaGC')
		//globals.GCshowDialogAyuda('Acerca de...',1,null,null,null,null,null,null,null,null)
		var win = application.getWindow("Ayuda")
		if(win != null) win.destroy();
		
		win = application.createWindow("Ayuda", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, 550, 250);
		win.title = "Acerca de...";		
		win.show(forms.dlgAyudaGC)
	}
	else if(!form && menuItemId == 'PARÁMETROS APLICACIÓN') {
		var query = "select NºEmpresa from ParametrosAplicacion where NºEmpresa = 1";
		if(globals.GCconex == null) var con = 'conexiongestioncomercialag'
		else con = globals.GCconex
		var dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
		var emp = dataset.getValue(1,1);
		if(emp == null) 
		{
			forms.dlg_ParametroAplicacionGC.foundset.newRecord(true)
			
			forms.dlg_ParametroAplicacionGC.nºempresa = 1;
			forms.dlg_ParametroAplicacionGC.propiedad = 'AG Informática y Servicios S.A.'
			forms.dlg_ParametroAplicacionGC.facturapredet = 1;
			databaseManager.saveData()
		
		}
		forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)

		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()

		//setup the method to execute when the dialog closes
		//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deleteAddressItem()'

		//show the "fake" dialog
		
		globals.GCshowDialogParametrosAplicacion('Editar Parámetros Aplicación', 1, null, null, true, 'Borrar Línea', null, null, null, null);
				
	}
	else if(!form && menuItemId == 'USUARIOS') {
		 globals.GCevento = 'control Z'
		 globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);		
	}
	else if(!form && menuItemId == 'EDITAR PERFIL USUARIO') {
		onGlobalUser(event)
	}
	else if(!form && menuItemId == 'Exportación de Datos'.toUpperCase()) {
		globals.GCCriterios = 0;
		globals.GCTipoConsulta = 0;
		globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null);		
	}
	else if(!form && menuItemId == 'Importación de Datos'.toUpperCase()) {
		globals.GCshowDialogImportacionDatos('Importación de Datos',1,null,null,null,null,null,null,null,null)			
	}
	else if(!form && menuItemId == 'Actualizar tipos de I.V.A. en Maestros'.toUpperCase()) {
		globals.GCshowDialogActualizarIVA('Actualizar tipos de I.V.A.',1,null,null,null,null,null,null,null,null)
	}
	else if(!form && menuItemId == 'Borrado de Presupuestos'.toUpperCase()) {
		globals.GCevento = 'Borrado de Presupuestos'
		globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);
	}
	else if(!form && menuItemId == 'Borrado de Albaranes'.toUpperCase()) {
		globals.GCevento = 'Borrado de Albaranes'
		globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);
	}
	else if(!form && menuItemId == 'Borrado de Facturas'.toUpperCase()) {
		globals.GCevento = 'Borrado de Facturas'
		globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);
	}
	else if(!form && menuItemId == 'Cambiar Precios Articulos'.toUpperCase()) {
		globals.GCshowDialogCambiarPreciosArticulos('Cambiar Precios Articulos',1,null,null,null,null,null,null,null,null)
	}
	else if(!form && menuItemId == 'Cambiar Descuentos Articulos'.toUpperCase()) {
		globals.GCshowDialogCambiarDtoArticulos('Cambiar Descuento Articulos',1,null,null,null,null,null,null,null,null)    		
	}
	else if(!form && (menuItemId == 'Compras - Artículos' ||
			menuItemId == 'Compras - Familias' ||
			menuItemId == 'Compras - Proveedores' ||
			menuItemId == 'Compras / Meses' ||
			menuItemId == 'Compras / Años' ||
			menuItemId == 'Ventas - Artículos' ||
			menuItemId == 'Ventas - Familias' ||
			menuItemId == 'Ventas - Clientes' ||
			menuItemId == 'Ventas / Meses' ||
			menuItemId == 'Ventas / Años' ||
			menuItemId == 'Ventas / Zonas')) {
		globals.MenuInformesNG(event, menuItemId.toUpperCase())    		
	}*/
	if(!form && elements.sidenav.open == false) elements.sidenav.open = true;
	
	return true;
}

/**
 * Called as part of the onMenuItemSelectedHandler event
 * Called whenever a menu item from the sidenav is selected with the JSEvent and the menuItemId clicked on.
 * This method can be overriden to prevent the selection (.e.g check if user has permissions) or for handling specific menu options which will trigger a function (.e.g logout) instead of switching the visible form
 * Return false to stop the navigation and prevent the selection.
 * 
 * @protected
 * @param {String} menuItemId
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 *
 * @properties={typeid:24,uuid:"AAAB4BC8-1CA2-4577-ABCF-6B382A9C99B0"}
 */
function onMenuItemSelected(menuItemId, event) {
	return true;
}

//handle the custom actions event for the navbar

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param menuItem
 *
 * @properties={typeid:24,uuid:"E32569D4-18EA-4428-A55D-263392E864B1"}
 * @override
 */
function onNavbarMenuItemClicked(event, menuItem) {
	var menuItemId = menuItem.itemId;
	
	if (onMenuItemSelected(menuItemId, event) === false) {
		return;
	}
	
	switch (menuItem.itemId) {
	case DEFAULT_NAVBAR_ACTIONS.SEARCH:
		onGlobalSearch(menuItem.text);
		break;
	case DEFAULT_NAVBAR_ACTIONS.USER:
		onGlobalUser(event)
		break;
	case 'LOGOUT'/*DEFAULT_NAVBAR_ACTIONS.LOGOUT*/:
		//scopes.svySecurity.logout();
		//customexitdialog()
		onLogout();
		break;
	default:
		break;
	}
}

/**
 * @properties={typeid:24,uuid:"649DC901-E0C3-4440-B121-B45B2298A662"}
 */
function customexitdialog() {
	if(gcparametrosaplicacion_to_parametrosaplicacion && gcparametrosaplicacion_to_parametrosaplicacion.empresa) var nombreempresa = gcparametrosaplicacion_to_parametrosaplicacion.empresa;
	else nombreempresa = 'GestionComercialAGServNG';
	/*var custom_dlg = scopes.svyCustomDialogs.createCustomDialog(
	'custom_servoy_theme_properties.less',
	nombreempresa,
	'<html>¿Desea realmente salir de la Alicación?<br>',
	scopes.svyCustomDialogs.DEFAULT_ICON.INFO,
	['No', 'Si']);*/	
	
	var custom_dlg = scopes.svyCustomDialogs.showQuestionDialog(nombreempresa,'¿Desea realmente salir de la Aplicación?','Si','No')
	if(custom_dlg == "Si") 
	{
		//application.closeAllWindows();
		//controller.show(null);
		//scopes.svySecurity.logout();
		application.exit();
	}
}

/**
 * @properties={typeid:24,uuid:"8967310D-EA53-4C66-AF7A-70928E22648D"}
 */
function dialog() {
	var cd = scopes.svyCustomDialogs.createCustomDialog();
	cd.addPasswordField('Your password');
	cd.addPasswordField('New password');
	cd.addPasswordField('New password (repeat)');
	cd.addLabel('').setName('feedback');
	
	cd.addButton('Cancel');
	cd.addButton('OK')
		.setCloseDialogOnClick(false)
		.setOnActionMethod(onActionBtnOk);
	
	cd.showDialog();
}

/**
 * @param {JSEvent} event
 * @param {scopes.svyCustomDialogs.CustomDialog} customDialog
 *
 * @properties={typeid:24,uuid:"DED48801-77F9-4FE4-81C3-451F4BCB2BBD"}
 */
function onActionBtnOk(event, customDialog) {
	var dialogResult = customDialog.getResult();
	if (dialogResult[1] != dialogResult[2]) {
		/** @type {scopes.svyCustomDialogs.Label} */
		var label = customDialog.getComponent('feedback');
		label.text = 'New password repeat does not match';
	} else {
		customDialog.closeDialog();
	}
}

/**
 * Override the method for a custom logout
 * @protected  
 *
 * @properties={typeid:24,uuid:"22D035D6-CB47-48B9-859F-6A2628EF27F5"}
 */
function onLogout() {
	// test for svySecurity logout
	/*if (scopes['svySecurity']) {
		scopes['svySecurity'].logout();
	} else {
		security.logout();
	}*/
	customexitdialog()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param searchText
 *
 * @properties={typeid:24,uuid:"FC09F2AC-E88E-4619-BBB6-5225331622D5"}
 * @override
 * @SuppressWarnings(deprecated)
 */
function onGlobalSearch(searchText) {
	globals.GCnav_search = null;
	var frm = currentcontroller.getName();
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	
	if(searchText && frm != 'FrmPrincipalNGGC')
	{		
		if(frm) {
			/*var aNavigator = solutionModel.getForm(frm);
			// Get the navigators NAME
			application.output(aNavigator.navigator.name); 
			var frm_nav_main_name = aNavigator.navigator.name; 
			if(frm_nav_main_name && forms[aNavigator.navigator.name]) {
				globals.GCnav_search = searchText;
				if(forms[aNavigator.navigator.name].btn_svysearch()) forms[aNavigator.navigator.name].btn_svysearch()
			}*/
			if(frm.indexOf('Clientes') >= 0 || frm.indexOf('Proveedores') >= 0 ||
			frm.indexOf('Operarios') >= 0 || frm.indexOf('Articulos') >= 0 ||
			frm.indexOf('Materiales') >= 0 || frm.indexOf('Delegacion') >= 0 ||
			frm.indexOf('Transportes') >= 0 || frm.indexOf('Agentes') >= 0 ||
			frm.indexOf('FormaPagoGC') >= 0 || frm.indexOf('FamiliasGC') >= 0 ||
			frm.indexOf('TiposIVAGC') >= 0 || frm.indexOf('SwiftBancosGC') >= 0 ||
			frm.indexOf('UnidMedidaGC') >= 0 || frm.indexOf('TransportesGC') >= 0 ||
			frm.indexOf('ObservacionGC') >= 0)
			{
				globals.GCnav_search = searchText;
				forms.frm_nav_main_maestrosGC.btn_svysearch();
			}
			else if(frm.indexOf('Presupuestos') >= 0)
			{
				globals.GCnav_search = searchText;
				forms.frm_nav_main_presupuestosGC.btn_svysearch();
			}
			else if(frm.indexOf('Pedidos') >= 0)
			{
				globals.GCnav_search = searchText;
				forms.frm_nav_main_pedidosGC.btn_svysearch();
			}
			else if(frm.indexOf('Albaran') >= 0)
			{
				globals.GCnav_search = searchText;
				forms.frm_nav_main_albaranGC.btn_svysearch();
			}
			else if(frm.indexOf('FacturasGC') >= 0 || frm.indexOf('FacturasProformaGC') >= 0)
			{
				globals.GCnav_search = searchText;
				forms.frm_nav_main_facturasGC.btn_svySearch();
			}
			else if(frm.indexOf('PedidosCompras') >= 0 || frm.indexOf('PetOfertaCompras') >= 0)
			{
				globals.GCnav_search = searchText;
				forms.frm_nav_main_comprasGC.btn_svysearch();
			}
			else if(frm.indexOf('CobrosPagos') >= 0 || frm.indexOf('FormaPago2GC') >= 0)
			{
				globals.GCnav_search = searchText;
				forms.frm_nav_main_cobrospagosGC.btn_svysearch();
			}
			else if(frm.indexOf('MoviArti') >= 0)
			{
				globals.GCnav_search = searchText;
				forms.frm_nav_main_controlstockGC.btn_svysearch();
			}
			else globals.GCnav_search = searchText;
		}
		else globals.GCnav_search = searchText;
	}	
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"C9041544-829D-4FC8-AD01-EEB595264953"}
 * @SuppressWarnings(deprecated)
 */
function onGlobalUser(event) {
	var frm = currentcontroller.getName();
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
		if(globals.GClogin_usuario && globals.GCNombreUsuario)
		{
			if(globals.GCisEditing())
			{
				if(forms[frm].elements.btn_cancel && 
				forms[frm].elements.btn_cancel.visible == true)
				{
					if(forms[frm].btn_cancel()) forms[frm].btn_cancel();
					else if(forms[frm].btn_cancel(event)) forms[frm].btn_cancel(event);
				}
				//globals.GCcancelEditing()
			}
			if(globals.GCNombreUsuario != 'DEMO' && globals.GCNombreUsuario != 'ADMINISTRADOR')
			{
				var query = "select id from [usuarios] where [cod_us] =" + globals.GClogin_usuario;
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var uid = dataset.getValue(1,1);
		
				forms.dlg_EditarPerfilUsuarioGC.foundset.loadAllRecords()
				var result = forms.dlg_EditarPerfilUsuarioGC.foundset.selectRecord(uid)
				
				var fsCount = databaseManager.getFoundSetCount(forms.dlg_EditarPerfilUsuarioGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.dlg_EditarPerfilUsuarioGC.foundset.getSize()) return;
					forms.dlg_EditarPerfilUsuarioGC.foundset.setSelectedIndex(forms.dlg_EditarPerfilUsuarioGC.foundset.getSize());
					result = forms.dlg_EditarPerfilUsuarioGC.foundset.selectRecord(uid);
				}
		
				//start a transaction
				if(!globals.GCisEditing()) globals.GCstartEditing()
				
				//forms.dlg_DatosFiscales.elements.idcodigo.readOnly = true
				//setup the method to execute when the dialog closes
				globals.GCdialog_performMethod = null
				globals.GCRegistroNuevo = null;
				
				//show the "fake" dialog
				//globals.GCshowDialogEditarPerfilUsuario('Editar Perfil Usuario', 3, null, null, true, null, null, null, null, null);
				
				var win = application.getWindow("Editar Perfil Usuario")
				if(win != null) win.destroy();
				 
				win = application.createWindow("Editar Perfil Usuario", JSWindow.MODAL_DIALOG);
				win.setCSSClass('svy-dialogfacebook')
				win.title = globals.GCNombreEmpresa;
				forms.dialogEditarPerfilUsuarioGC.elements.lbl_title.text = "Editar Perfil Usuario";
				win.show(forms.dialogEditarPerfilUsuarioGC)
			}
			else
			{
				plugins.webnotificationsToastr.error('El usuario '+globals.GCNombreUsuario+' no tiene permiso para editar perfil')
				//globals.GCshowErrorDialog('El usuario '+globals.GCNombreUsuario+' no tiene permiso para editar perfil', null, null, null, null, null)
			}
		}	
}
