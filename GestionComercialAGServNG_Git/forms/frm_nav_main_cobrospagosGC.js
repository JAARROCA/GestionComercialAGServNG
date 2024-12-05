/**
 * @properties={typeid:24,uuid:"E7A9B73F-E648-4ED9-8922-3E43E33A861A"}
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
		
		
		
		if(frm.indexOf('CobrosPagos') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'int')
			{
				forms[frm]['cuentacontable'] = searchStr+'%'
				forms[frm].foundset.newRecord()
				forms[frm]['importevencimiento'] = search
				forms[frm].foundset.newRecord()
			}
			else if(dataType == 'str')
			{	
				if(search == 'c' || search == 'C')
				{
					forms[frm]['cobropago'] = 1
					forms[frm].foundset.newRecord()
				}
				else if(search == 'p' || search == 'P')
				{
					forms[frm]['cobropago'] = 2
					forms[frm].foundset.newRecord()
				}
				else
				{
					forms[frm]['gcccobrospagos_to_tbmaestroclientes.desccliente'] = '%'+searchStr+'%'
					forms[frm].foundset.newRecord()
					forms[frm]['gcccobrospagos_to_tbmaestroproveedores.descproveedor'] = '%'+searchStr+'%'
					forms[frm].foundset.newRecord()
					forms[frm]['concepto'] = '%'+searchStr+'%'
					forms[frm].foundset.newRecord()
					forms[frm]['idfactura'] = '%'+searchStr+'%'
					forms[frm].foundset.newRecord()
				}
								
			}
			else if(dataType == 'date')
			{				
				forms[frm]['fechavencimiento'] = search				
			}
			else if(dataType == 'number')
			{
				forms[frm]['importevencimiento'] = search
			}
		}
		//FormaPago FIND
		else if(frm.indexOf('FormaPago2GC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'int')
			{
				forms[frm]['codig_fp'] = search
				forms[frm].foundset.newRecord()
				
			}
			else if(dataType == 'str')
			{
				forms[frm]['codig_fp'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['denom_fp'] = searchStr
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
				forms.frm_nav_buttons_cobrospagosGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				var methd = 'forms.frm_nav_buttons_cobrospagosGC.btn_showAll()'
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', methd, null, null, null, null)
				controller.setSelectedIndex(1)
				//forms[frm].foundset.loadAllRecords()
			}
		}
		else
		{
			if(frm.indexOf('FrmCobrosPagos2GC') >= 0) forms.lst_CobrosPagosGC.btn_sortDesc()
			//show the "show all" button
			forms.frm_nav_buttons_cobrospagosGC.sub_showShowAll()
			controller.setSelectedIndex(1)
			
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_nav_buttons_cobrospagosGC.btn_showAll()
		controller.setSelectedIndex(1)			
		elements.fld_search.requestFocus(false)
	}
}

/**
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"38D244F5-D93A-4ECD-BC68-F97414142B05"}
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
		else if(!isNaN(parseInt(search)) && search.indexOf('.') == -1)
		{
				dataType = 'int' //probably an integer
				search = parseInt(search, 10);
				searchStr = op + search
		}
		
		
		application.output(dataType+' '+searchStr)
		if(frm.indexOf('CobrosPagos') >= 0)
		{
			var svysearch = scopes.svySearch.createSimpleSearch(forms.FrmCobrosPagosGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
//			list of data providers to include in search
			var searchProviders = [
				'cuentacontable',
				'importevencimiento',
				'concepto',
				'idfactura',
				'fechavencimiento',
				'importevencimiento',
				
				// related data providers
				'gcccobrospagos_to_tbmaestroclientes.desccliente',
				'gcccobrospagos_to_tbmaestroproveedores.descproveedor'
				
				
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
			svysearch.loadRecords(forms.FrmCobrosPagosGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			var found = databaseManager.getFoundSetCount(forms.FrmCobrosPagosGC.foundset);
					}
		//FormaPago FIND
		else if(frm.indexOf('FormaPago2GC') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmFormaPago2GC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
//			list of data providers to include in search
			searchProviders = [
				'codig_fp',
				'denom_fp'
				
				// related data providers
				//'gcccobrospagos_to_tbmaestroclientes.desccliente',
				
				
				
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
			svysearch.loadRecords(forms.FrmFormaPago2GC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmFormaPago2GC.foundset);
		}
		
		
		

		
		//see if anything was found
		if(found == 0)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
			{
				plugins.webnotificationsToastr.error('No se han encontrado coincidencias con la búsqueda realizada.','¡Error!')
				forms.frm_nav_buttons_cobrospagosGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				var methd = 'forms.frm_nav_buttons_cobrospagosGC.btn_showAll()'
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', methd, null, null, null, null)
				controller.setSelectedIndex(1)
				//forms[frm].foundset.loadAllRecords()
			}
		}
		else
		{
			if(frm.indexOf('FrmCobrosPagos2GC') >= 0) forms.lst_CobrosPagosGC.btn_sortDesc()
			//show the "show all" button
			forms.frm_nav_buttons_cobrospagosGC.sub_showShowAll()
			controller.setSelectedIndex(1)
			
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_nav_buttons_cobrospagosGC.btn_showAll()
		controller.setSelectedIndex(1)			
		elements.fld_search.requestFocus(false)
	}
}

/**
 * @properties={typeid:24,uuid:"49179A6C-1780-4C6B-85F6-53598C1FA040"}
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
 * @properties={typeid:24,uuid:"F06430F8-7664-4FBE-A1EC-E024ED154F6D"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_cobrospagosGC.btn_delete();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"019675E9-6241-44ED-ACFC-E836D945BFC8"}
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
 * @properties={typeid:24,uuid:"A66D9374-B95F-46F6-9988-FEBE9DB9546D"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search = '';
	btn_search()
	elements.fld_search.requestFocus()
}
