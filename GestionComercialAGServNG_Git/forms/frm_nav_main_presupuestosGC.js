/**
 * @properties={typeid:24,uuid:"C907ECE0-98C8-4D89-BE1F-E309C7217479"}
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
			//search = new Date(search)
			if(search.indexOf('/') != -1) search = utils.parseDate(search,'dd/MM/yyyy')
			else if(search.indexOf('-') != -1) search = utils.parseDate(search,'dd-MM-yyyy')			
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
		
		
		
		//Encontrar Clientes
		if(frm.indexOf('Presupuestos') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'int')
			{
				forms[frm]['cod_cof'] = search
				forms[frm].foundset.newRecord()
				forms[frm]['clie_cof'] = search
				forms[frm].foundset.newRecord()		
			}
			else if(dataType == 'str')
			{
				forms[frm]['nomcl_cof'] = searchStr				
			}	
			else if(dataType == 'date')
			{
				forms[frm]['fecha_cof'] = search
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
				forms.frm_nav_buttons_presupuestosGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				var methd = 'forms.frm_nav_buttons_presupuestosGC.btn_showAll()'
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', methd, null, null, null, null)
				controller.setSelectedIndex(1)
				//forms[frm].foundset.loadAllRecords()
			}
		}
		else
		{
			var foundsetSort = 'cod_cof desc'//forms[frm].foundset.getCurrentSort()
			//show the "show all" button
			forms.frm_nav_buttons_presupuestosGC.sub_showShowAll()
			forms[frm].foundset.sort(foundsetSort)
			controller.setSelectedIndex(1)
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_nav_buttons_presupuestosGC.btn_showAll()
		controller.setSelectedIndex(1)
		elements.fld_search.requestFocus(false)
	}
}

/**
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"997FBA48-8992-4A67-89A1-A8AADD721D46"}
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
		/*
		//see if there are any operators (< > = !=) entered
		var op = ""

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
			//search = new Date(search)
			if(search.indexOf('/') != -1) search = utils.parseDate(search,'dd/MM/yyyy')
			else if(search.indexOf('-') != -1) search = utils.parseDate(search,'dd-MM-yyyy')			
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
		*/
		
		application.output(dataType+' '+searchStr)
		//Encontrar Clientes
		if(frm.indexOf('Presupuestos') >= 0)
		{
			var svysearch = scopes.svySearch.createSimpleSearch(forms.FrmPresupuestosGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
//			list of data providers to include in search
			var searchProviders = [
				'cod_cof',
				'clie_cof',
				'nomcl_cof',
				'fecha_cof'
				
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa'
				
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
			svysearch.loadRecords(forms.FrmPresupuestosGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			var found = databaseManager.getFoundSetCount(forms.FrmPresupuestosGC.foundset);			
		}
		
		//see if anything was found
		if(found == 0)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
			{
				plugins.webnotificationsToastr.error('No se han encontrado coincidencias con la búsqueda realizada.','¡Error!')
				forms.frm_nav_buttons_presupuestosGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				var methd = 'forms.frm_nav_buttons_presupuestosGC.btn_showAll()'
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', methd, null, null, null, null)
				controller.setSelectedIndex(1)
				//forms[frm].foundset.loadAllRecords()
			}
		}
		else
		{
			var foundsetSort = 'cod_cof desc'//forms[frm].foundset.getCurrentSort()
			//show the "show all" button
			forms.frm_nav_buttons_presupuestosGC.sub_showShowAll()
			forms[frm].foundset.sort(foundsetSort)
			controller.setSelectedIndex(1)
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_nav_buttons_presupuestosGC.btn_showAll()
		controller.setSelectedIndex(1)
		elements.fld_search.requestFocus(false)
	}
}

/**
 * @properties={typeid:24,uuid:"0BE50F2F-BA50-4FCC-AD87-B96BB0F6CB3E"}
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
 * @properties={typeid:24,uuid:"FF538E81-E28B-407F-BB0F-F71B287B71C1"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_presupuestosGC.btn_delete();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D1DBC894-A7BE-4233-930C-B50C2418B3FD"}
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
		
		globals.GCFormulario = null;
		var win = application.getWindow('Presupuesto Lineas')
			
			if(win != null)
			{
				win.destroy();
			}
			else
			{
				win = application.getWindow('Maestros')
				//setup the record status
				if(win != null)
				{
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
 * @properties={typeid:24,uuid:"756B27E1-3D03-4F44-9226-1F9FD687402A"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search = '';
	btn_search()
	elements.fld_search.requestFocus()
}
