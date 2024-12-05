/**
 * @properties={typeid:24,uuid:"B2971F06-6DB8-49AD-B3FA-92C76412EF88"}
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
		/*else if(!isNaN(parseInt(search)) && search.indexOf('.') == -1 && (frm == 'FrmProveedoresGC' || frm == 'FrmClientesGC'))
		{
				dataType = 'int' //probably an integer
				search = parseInt(search, 10);
				searchStr = op + search
		}*/
		
		
		
		//Encontrar Movimientos
		if(frm.indexOf('MoviArti') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['cod_ms'] = searchStr	
				forms[frm].foundset.newRecord()
				forms[frm]['moviarti_to_tbmaestroarticulos.descripcion'] = searchStr	
				forms[frm].foundset.newRecord()
			}
			else if(dataType == 'date')
			{
				forms[frm]['fecha_ms'] = search
				forms[frm].foundset.newRecord()
			}
			else if(dataType == 'int')
			{
				forms[frm]['cod_ms'] = search
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
				forms.frm_nav_buttons_controlstockGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				var methd = 'forms.frm_nav_buttons_controlstockGC.btn_showAll()'
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', methd, null, null, null, null)
				controller.setSelectedIndex(1)
				//forms[frm].foundset.loadAllRecords()
			}
		}
		else
		{
			var foundsetSort = forms[frm].foundset.getCurrentSort()
			//show the "show all" button
			forms.frm_nav_buttons_controlstockGC.sub_showShowAll()
			forms[frm].foundset.sort(foundsetSort)
			controller.setSelectedIndex(1)
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_nav_buttons_controlstockGC.btn_showAll()
		elements.fld_search.requestFocus(false)
	}
}

/**
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"90249FF4-F6BD-441F-B747-CE4A50258C5B"}
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
		/*else if(!isNaN(parseInt(search)) && search.indexOf('.') == -1 && (frm == 'FrmProveedoresGC' || frm == 'FrmClientesGC'))
		{
				dataType = 'int' //probably an integer
				search = parseInt(search, 10);
				searchStr = op + search
		}*/
		
		
		application.output(dataType+' '+searchStr)
		//Encontrar Movimientos
		if(frm.indexOf('MoviArti') >= 0)
		{
			var svysearch = scopes.svySearch.createSimpleSearch(forms.FrmMoviArtiGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
//			list of data providers to include in search
			var searchProviders = [
				'cod_ms',
				'fecha_ms',
				
				// related data providers
				'moviarti_to_tbmaestroarticulos.descripcion'
				
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
			svysearch.loadRecords(forms.FrmMoviArtiGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			var found = databaseManager.getFoundSetCount(forms.FrmMoviArtiGC.foundset);					
		}
				
				
		//see if anything was found
		if(found == 0)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
			{
				plugins.webnotificationsToastr.error('No se han encontrado coincidencias con la búsqueda realizada.','¡Error!')
				forms.frm_nav_buttons_controlstockGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				var methd = 'forms.frm_nav_buttons_controlstockGC.btn_showAll()'
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', methd, null, null, null, null)
				controller.setSelectedIndex(1)
				//forms[frm].foundset.loadAllRecords()
			}
		}
		else
		{
			var foundsetSort = forms[frm].foundset.getCurrentSort()
			//show the "show all" button
			forms.frm_nav_buttons_controlstockGC.sub_showShowAll()
			forms[frm].foundset.sort(foundsetSort)
			controller.setSelectedIndex(1)
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_nav_buttons_controlstockGC.btn_showAll()
		elements.fld_search.requestFocus(false)
	}
}

/**
 * @properties={typeid:24,uuid:"72E1F886-2433-4CA3-A785-9E9D2E0BACBE"}
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
 * @properties={typeid:24,uuid:"4A29B274-A900-4C08-A484-1F35A3D0B006"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_controlstockGC.btn_delete();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E676E69-7689-4E61-82A1-6E9C3155F294"}
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
		
		var win = application.getWindow('Maestros')
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
		catch (e) {}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D5934D6E-6554-462F-B0A2-50AD0201FDC1"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search = '';
	btn_search()
	elements.fld_search.requestFocus()
}
