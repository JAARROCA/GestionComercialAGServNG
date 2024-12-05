/**
 * @properties={typeid:24,uuid:"15D0F1AF-C111-4F0A-BF07-C7455DADA55C"}
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
		
		
		
		if(frm.indexOf('FacturasGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(searchStr.length > 5 && dataType == 'int')
			{
				var nfra = utils.stringToNumber(searchStr)
				var nfstr = nfra.toString()
				search = utils.stringToNumber(utils.stringRight(nfstr,5))
			}
			if(dataType == 'int')
			{
				forms[frm]['nup_cfa'] = search
				forms[frm].foundset.newRecord()
				forms[frm]['clie_cfa'] = search
				forms[frm].foundset.newRecord()	
				forms[frm]['GCtbfacturacabecera_to_tbfacturalinea.ref_lfa'] = search
				forms[frm].foundset.newRecord()				
			}
			else if(dataType == 'str')
			{
				/*if(search == 'R' || search == 'A' || search == 'C')
				{
					forms[frm]['ser_cfa'] = search
					forms[frm].foundset.newRecord()					
				}
				else
				{*/
					forms[frm]['nup_cfa'] = search
					forms[frm].foundset.newRecord()
					forms[frm]['GCtbfacturacabecera_to_tbmaestroclientes.desccliente'] = searchStr
					forms[frm].foundset.newRecord()
					forms[frm]['GCtbfacturacabecera_to_tbmaestroclientes.cif'] = searchStr
					forms[frm].foundset.newRecord()
					forms[frm]['GCtbfacturacabecera_to_tbfacturalinea.concep_lfa'] = searchStr
					forms[frm].foundset.newRecord()
					forms[frm]['GCtbfacturacabecera_to_tbfacturalinea.ref_lfa'] = searchStr
					forms[frm].foundset.newRecord()
				//}
			}	
			else if(dataType == 'date')
			{
				forms[frm]['fecha_cfa'] = search
			}
		}
		else if(frm.indexOf('FacturasProformaGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(searchStr.length > 5 && dataType == 'int')
			{
				nfra = utils.stringToNumber(searchStr)
				nfstr = nfra.toString()
				search = utils.stringToNumber(utils.stringRight(nfstr,5))
			}
			if(dataType == 'int')
			{
				forms[frm]['nup_cfa'] = search
				forms[frm].foundset.newRecord()
				forms[frm]['clie_cfa'] = search
				forms[frm].foundset.newRecord()						
				
			}
			else if(dataType == 'str')
			{
				forms[frm]['nup_cfa'] = search
				forms[frm].foundset.newRecord()
				forms[frm]['gctbfacturaproformacabecera_to_tbmaestroclientes.desccliente'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['gctbfacturaproformacabecera_to_tbmaestroclientes.cif'] = searchStr
				forms[frm].foundset.newRecord()
				//forms[frm]['GCtbfacturacabecera_to_tbfacturalinea.concep_lfa'] = searchStr
				//forms[frm].foundset.newRecord()
			}	
			else if(dataType == 'date')
			{
				forms[frm]['fecha_cfa'] = search
			}
		}
		
		
		
		

		//perform the search
		var found = forms[frm].controller.search(false,false)

		//see if anything was found
		if(found == 0)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
			{
				plugins.webnotificationsToastr.error('No se han encontrado coincidencias con la búsqueda realizada.','¡Error!')
				forms.frm_nav_buttons_facturasGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				var methd = 'forms.frm_nav_buttons_facturasGC.btn_showAll()'
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', methd, null, null, null, null)
				controller.setSelectedIndex(1)
				//forms[frm].foundset.loadAllRecords()
			}
		}
		else
		{
			var foundsetSort = 'eje_cfa desc, nup_cfa desc, ser_cfa desc'//forms[frm].foundset.getCurrentSort()
			//show the "show all" button
			forms.frm_nav_buttons_facturasGC.sub_showShowAll()
			forms[frm].foundset.sort(foundsetSort)
			controller.setSelectedIndex(1)
			
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_nav_buttons_facturasGC.btn_showAll()
		controller.setSelectedIndex(1)
		elements.fld_search.requestFocus(false)
	}
}

/**
* @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"27D992A4-9353-4F63-8E84-1D8E4161C105"}
 */
function btn_svySearch()
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
		if(!isNaN(parseInt(search)) && search.indexOf('.') == -1) dataType = 'int'
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
		if(frm.indexOf('FacturasGC') >= 0)
		{
			/*if(searchStr.length > 5 && dataType == 'int')
			{
				var nfra = utils.stringToNumber(searchStr)
				var nfstr = nfra.toString()
				search = utils.stringToNumber(utils.stringRight(nfstr,5))				
			}*/
			if(search.length > 5 && dataType == 'int')
			{
				var nfra = utils.stringToNumber(searchStr)
				var nfstr = nfra.toString()
				search = utils.stringRight(nfstr,5)				
			}
			var svysearch = scopes.svySearch.createSimpleSearch(forms.FrmFacturasGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
//			list of data providers to include in search
			var searchProviders = [
				'nup_cfa',
				'clie_cfa',
				'fecha_cfa',
				
				// related data providers
				'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				'GCtbfacturacabecera_to_tbmaestroclientes.desccliente',
				'GCtbfacturacabecera_to_tbmaestroclientes.cif',
				'GCtbfacturacabecera_to_tbfacturalinea.concep_lfa',
				'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa'
				
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
			svysearch.loadRecords(forms.FrmFacturasGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			var found = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
			
			/*if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			
			if(searchStr.length > 5 && dataType == 'int')
			{
				var nfra = utils.stringToNumber(searchStr)
				var nfstr = nfra.toString()
				search = utils.stringToNumber(utils.stringRight(nfstr,5))				
			}
			if(dataType == 'int')
			{
				
				forms[frm]['nup_cfa'] = search
				forms[frm].foundset.newRecord()
				forms[frm]['clie_cfa'] = search
				forms[frm].foundset.newRecord()	
				forms[frm]['GCtbfacturacabecera_to_tbfacturalinea.ref_lfa'] = search
				forms[frm].foundset.newRecord()				
			}
			else if(dataType == 'str')
			{
				
					forms[frm]['nup_cfa'] = search
					forms[frm].foundset.newRecord()
					forms[frm]['GCtbfacturacabecera_to_tbmaestroclientes.desccliente'] = searchStr
					forms[frm].foundset.newRecord()
					forms[frm]['GCtbfacturacabecera_to_tbmaestroclientes.cif'] = searchStr
					forms[frm].foundset.newRecord()
					forms[frm]['GCtbfacturacabecera_to_tbfacturalinea.concep_lfa'] = searchStr
					forms[frm].foundset.newRecord()
					forms[frm]['GCtbfacturacabecera_to_tbfacturalinea.ref_lfa'] = searchStr
					forms[frm].foundset.newRecord()
				//}
			}	
			else if(dataType == 'date')
			{
				forms[frm]['fecha_cfa'] = search
			}*/
		}
		else if(frm.indexOf('FacturasProformaGC') >= 0)
		{
			/*if(searchStr.length > 5 && dataType == 'int')
			{
				nfra = utils.stringToNumber(searchStr)
				nfstr = nfra.toString()
				search = utils.stringToNumber(utils.stringRight(nfstr,5))
			}*/
			if(search.length > 5 && dataType == 'int')
			{
				nfra = utils.stringToNumber(searchStr)
				nfstr = nfra.toString()
				search = utils.stringRight(nfstr,5)				
			}
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmFacturasProformaGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
//			list of data providers to include in search
			searchProviders = [
				'nup_cfa',
				'clie_cfa',
				'fecha_cfa',
				
				// related data providers
				'gctbfacturaproformacabecera_to_tbmaestroclientes.desccliente',
				'GCtbfacturacabecera_to_tbmaestroclientes.desccliente',
				'GCtbfacturacabecera_to_tbmaestroclientes.cif',
				'GCtbfacturacabecera_to_tbfacturalinea.concep_lfa',				
				'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa'
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
			svysearch.loadRecords(forms.FrmFacturasProformaGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmFacturasProformaGC.foundset);
			/*if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(searchStr.length > 5 && dataType == 'int')
			{
				nfra = utils.stringToNumber(searchStr)
				nfstr = nfra.toString()
				search = utils.stringToNumber(utils.stringRight(nfstr,5))
			}
			if(dataType == 'int')
			{
				forms[frm]['nup_cfa'] = search
				forms[frm].foundset.newRecord()
				forms[frm]['clie_cfa'] = search
				forms[frm].foundset.newRecord()						
				
			}
			else if(dataType == 'str')
			{
				forms[frm]['nup_cfa'] = search
				forms[frm].foundset.newRecord()
				forms[frm]['gctbfacturaproformacabecera_to_tbmaestroclientes.desccliente'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['gctbfacturaproformacabecera_to_tbmaestroclientes.cif'] = searchStr
				forms[frm].foundset.newRecord()
				//forms[frm]['GCtbfacturacabecera_to_tbfacturalinea.concep_lfa'] = searchStr
				//forms[frm].foundset.newRecord()
			}	
			else if(dataType == 'date')
			{
				forms[frm]['fecha_cfa'] = search
			}*/
		}
		
		
		
		

		

		//see if anything was found
		if(found == 0)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
			{
				plugins.webnotificationsToastr.error('No se han encontrado coincidencias con la búsqueda realizada.','¡Error!')
				forms.frm_nav_buttons_facturasGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				var methd = 'forms.frm_nav_buttons_facturasGC.btn_showAll()'
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', methd, null, null, null, null)
				controller.setSelectedIndex(1)
				//forms[frm].foundset.loadAllRecords()
			}
		}
		else
		{
			var foundsetSort = 'eje_cfa desc, nup_cfa desc, ser_cfa desc'//forms[frm].foundset.getCurrentSort()
			//show the "show all" button
			forms.frm_nav_buttons_facturasGC.sub_showShowAll()
			forms[frm].foundset.sort(foundsetSort)
			controller.setSelectedIndex(1)
			
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_nav_buttons_facturasGC.btn_showAll()
		controller.setSelectedIndex(1)
		elements.fld_search.requestFocus(false)
	}
}

/**
 * @properties={typeid:24,uuid:"029C0AAA-F0B9-46D4-A4AD-8392D1C3C5BF"}
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
 * @properties={typeid:24,uuid:"687498D9-89D5-4FA6-89B9-B4DAA77C2777"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_facturasGC.btn_delete();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CA445902-08BD-4141-9ECA-883E7C2E25E7"}
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
		
		var win = application.getWindow('Factura Lineas')
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
 * @properties={typeid:24,uuid:"8C98401C-1798-42E2-8EBC-5C2D75D25339"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search = '';
	btn_search()
	elements.fld_search.requestFocus()
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6FC815AE-F504-4719-BC68-231E3BC9DBA8"}
 */
function btn_hide_formnav(event) {
	var h = elements.tabs_recList.getHeight();
	var w = elements.tabs_recList.getWidth();
	application.output(h)
	application.output(w)
	if(w == 249) 
	{
		elements.tabs_recList.setSize(30,h);
		elements.tabs_solNav.setSize(30,h);
	}
	else
	{
		elements.tabs_recList.setSize(249,h);
		elements.tabs_solNav.setSize(249,h)	
	}
}
