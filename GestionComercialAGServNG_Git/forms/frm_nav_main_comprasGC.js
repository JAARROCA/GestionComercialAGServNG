/**
 * @properties={typeid:24,uuid:"D3DC8967-5D60-474F-8750-41EEB94B4FBC"}
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 */
function btn_search()
{
	/** @type String */
	var frm = currentcontroller.getName();
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	/** @type String */
	var search = globals.GCnav_search

	if(search)
	{
		var dataType = 'str'
		var searchStr = '%' + search + '%'
		var op = ""

		//see if there are any operators (< > = !=) entered
		if(search.indexOf('!=') != -1)
		{
			op = '!='
		}
		else if(search.indexOf('>=') != -1)
		{
			op = '>='
		}
		else if(search.indexOf('>') != -1)
		{
			op = '>'
		}
		else if(search.indexOf('<=') != -1)
		{
			op = '<='
		}
		else if(search.indexOf('<') != -1)
		{
			op = '<'
		}
		else if(search.indexOf('=') != -1)
		{
			op = '='
		}

		if(op) search = utils.stringReplace(search, op, '') //take off the operator to see if date or num

		//try to guess what type of data is entered in the search
		if(search.indexOf('/') != -1 || search.indexOf('-') != -1)
		{
			dataType = 'date' //probably a date
			search = new Date(search)
			searchStr = op + search
		}
		else if(search.indexOf('.') != -1 && !isNaN(parseFloat(search)))
		{
			dataType = 'number' //probably a number
			search = parseFloat(search);
			searchStr = op + search
		}
		else if(!isNaN(parseInt(search)) && search.indexOf('.') == -1)
		{
				dataType = 'int' //probably an integer
				search = parseInt(search, 10);
				searchStr = op + search
		}
		
		//Encontrar Pedido Compras
		if(frm.indexOf('PeedidosCompras') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'int')
			{
				forms[frm]['npedido'] = search
				forms[frm].foundset.newRecord()
				forms[frm]['proveedor'] = search
				forms[frm].foundset.newRecord()					
			}
			else if(dataType == 'str')
			{
				forms[frm]['GCtbpedidocompracabecera_to_tbmaestroproveedores.descproveedor'] = searchStr				
			}	
		}
		
		//Encontrar Peticion ofertas
		if(frm.indexOf('PetOfertaCompras') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'int')
			{
				forms[frm]['npetoferta'] = search
				forms[frm].foundset.newRecord()
				forms[frm]['codpro'] = search
				forms[frm].foundset.newRecord()					
			}
			else if(dataType == 'str')
			{
				forms[frm]['descproveedor'] = searchStr				
			}	
		}
		
		
		
		

		//perform the search
		var found = forms[frm].controller.search()

		//see if anything was found
		if(found == 0)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
			{
				plugins.webnotificationsToastr.error('No se han encontrado coincidencias con la búsqueda realizada.','¡Error!')
				forms.frm_nav_buttons_comprasGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				var methd = 'forms.frm_nav_buttons_comprasGC.btn_showAll()'
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', methd, null, null, null, null)
				controller.setSelectedIndex(1)
				//forms[frm].foundset.loadAllRecords()
			}
		}
		else
		{
			var foundsetSort = forms[frm].foundset.getCurrentSort()
			//show the "show all" button
			forms.frm_nav_buttons_comprasGC.sub_showShowAll()
			forms[frm].foundset.sort(foundsetSort)
			controller.setSelectedIndex(1)
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_nav_buttons_comprasGC.btn_showAll()
		controller.setSelectedIndex(1)
		elements.fld_search.requestFocus(false)		
	}
}

/**
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"3498AA8F-FD40-4BDE-8694-33F6B2F02788"}
 */
function btn_svysearch()
{
	/** @type String */
	var frm = currentcontroller.getName();
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	/** @type String */
	var search = globals.GCnav_search

	if(search)
	{
		var dataType = 'str'
		var searchStr = '%' + search + '%'
		var op = ""

		//see if there are any operators (< > = !=) entered
		if(search.indexOf('!=') != -1)
		{
			op = '!='
		}
		else if(search.indexOf('>=') != -1)
		{
			op = '>='
		}
		else if(search.indexOf('>') != -1)
		{
			op = '>'
		}
		else if(search.indexOf('<=') != -1)
		{
			op = '<='
		}
		else if(search.indexOf('<') != -1)
		{
			op = '<'
		}
		else if(search.indexOf('=') != -1)
		{
			op = '='
		}

		if(op) search = utils.stringReplace(search, op, '') //take off the operator to see if date or num

		//try to guess what type of data is entered in the search
		if(search.indexOf('/') != -1 || search.indexOf('-') != -1)
		{
			dataType = 'date' //probably a date
			search = new Date(search)
			searchStr = op + search
		}
		else if(search.indexOf('.') != -1 && !isNaN(parseFloat(search)))
		{
			dataType = 'number' //probably a number
			search = parseFloat(search);
			searchStr = op + search
		}
		else if(!isNaN(parseInt(search)) && search.indexOf('.') == -1)
		{
				dataType = 'int' //probably an integer
				search = parseInt(search, 10);
				searchStr = op + search
		}
		application.output(dataType+' '+searchStr);
		//Encontrar Pedido Compras
		if(frm.indexOf('PedidosCompras') >= 0)
		{
			var svysearch = scopes.svySearch.createSimpleSearch(forms.FrmPedidosComprasGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
//			list of data providers to include in search
			var searchProviders = [
				'npedido',
				'proveedor',				
				// related data providers
				'GCtbpedidocompracabecera_to_tbmaestroproveedores.descproveedor'
				
				//	N-levels depth on relations
				//'orders_to_order_details.order_details_to_products.productname'
			];
			
			// add search providers
			for(var i in searchProviders){
				svysearch.addSearchProvider(searchProviders[i]);
			}
			
			//add order date as an explicit search
			//svysearch.addSearchProvider('orderdate')
			//	.setAlias('facturas')			//	specify the alias which may be used	
			//	.setImpliedSearch(false)		//	specify that the column is not searched unless explicitly specified
				
			//	add freight as an explicit search
			//svysearch.addSearchProvider('freight')	
			//	.setImpliedSearch(false)		//	specify that the column is not searched unless explicitly specified
			
			//	execute search
			svysearch.loadRecords(forms.FrmPedidosComprasGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			var found = databaseManager.getFoundSetCount(forms.FrmPedidosComprasGC.foundset);
		}
		
		//Encontrar Peticion ofertas
		if(frm.indexOf('PetOfertaCompras') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmPetOfertaComprasGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
//			list of data providers to include in search
			searchProviders = [
				'npetoferta',
				'codpro',				
				'descproveedor',				
				// related data providers
				//'GCtbpedidocompracabecera_to_tbmaestroproveedores.descproveedor'
				
				//	N-levels depth on relations
				//'orders_to_order_details.order_details_to_products.productname'
			];
			
			// add search providers
			for(i in searchProviders){
				svysearch.addSearchProvider(searchProviders[i]);
			}
			
			//add order date as an explicit search
			//svysearch.addSearchProvider('orderdate')
			//	.setAlias('facturas')			//	specify the alias which may be used	
			//	.setImpliedSearch(false)		//	specify that the column is not searched unless explicitly specified
				
			//	add freight as an explicit search
			//svysearch.addSearchProvider('freight')	
			//	.setImpliedSearch(false)		//	specify that the column is not searched unless explicitly specified
			
			//	execute search
			svysearch.loadRecords(forms.FrmPetOfertaComprasGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmPetOfertaComprasGC.foundset);			
		}
		
		
		//see if anything was found
		if(found == 0)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
			{
				plugins.webnotificationsToastr.error('No se han encontrado coincidencias con la búsqueda realizada.','¡Error!')
				forms.frm_nav_buttons_comprasGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				var methd = 'forms.frm_nav_buttons_comprasGC.btn_showAll()'
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', methd, null, null, null, null)
				controller.setSelectedIndex(1)
				//forms[frm].foundset.loadAllRecords()
			}
		}
		else
		{
			var foundsetSort = forms[frm].foundset.getCurrentSort()
			//show the "show all" button
			forms.frm_nav_buttons_comprasGC.sub_showShowAll()
			forms[frm].foundset.sort(foundsetSort)
			controller.setSelectedIndex(1)
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_nav_buttons_comprasGC.btn_showAll()
		controller.setSelectedIndex(1)
		elements.fld_search.requestFocus(false)		
	}
}

/**
 * @properties={typeid:24,uuid:"62BD2F24-5EA6-4555-9483-8306E9BA75F9"}
 * @SuppressWarnings(unused)
 */
function sub_toggleRecList()
{
	//make the rec list bigger or smaller
	var lh = elements.tabs_recList.getHeight()
	var lw = elements.tabs_recList.getWidth()

	var nx = elements.tabs_solNav.getLocationX()
	var ny = elements.tabs_solNav.getLocationY()

	if(lh > 23)
	{
		//records currently showing - so hide
		elements.tabs_recList.setSize(lw, 23)
	}
	else
	{
		//records not showing - so show list
		elements.tabs_recList.setSize(lw, 346)
	}

	elements.tabs_solNav.setLocation(nx, elements.tabs_recList.getHeight()+ 2)
}

/**
 * @properties={typeid:24,uuid:"86CE1E1A-7684-4F13-A4EF-498238B59D8E"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_comprasGC.btn_delete();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9EAC5ACF-74F3-487E-B27B-CC954809E256"}
 * @SuppressWarnings(deprecated)
 */
function onAction(event) {
	// TODO Auto-generated method stub
	try {
		var frm = currentcontroller.getName();
		if(frm == 'frm_nav_main_principalNGGC') {
			frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
		}
		if(globals.GCisEditing()) forms[frm].btn_cancel();
		
		var win = application.getWindow('Factura Compras')
		//setup the record status
		if(win != null)
		{
			globals.GCFormulario = null;
			win.destroy();
		}		
		else
		{
			win = application.getWindow('Maestros')
			//setup the record status
			if(win != null)
			{
				globals.GCFormulario = null;
				win.destroy();
			}
			
			//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) forms.FrmPrincipalGC_web.controller.show()
			//else
			//forms.FrmPrincipalGC.controller.show()
			globals.GCMenuPrincipal(event)
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
 * @properties={typeid:24,uuid:"D9DE6CB7-E929-4BDD-89F1-3BB58B5B31D4"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search = '';
	btn_search()
	elements.fld_search.requestFocus()
}
