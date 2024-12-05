/**
 * @properties={typeid:24,uuid:"7BF60B43-625E-492B-A07E-CE77EC31BB14"}
 */
function _dev()
{
	showError();
}

/**
 * @properties={typeid:24,uuid:"6A1935BD-798A-41F5-84C6-E3326C0587E8"}
 */
function _devtemp()
{
	elements.tabs_nav.enabled = false
	plugins.dialogs.showErrorDialog( 'err',  'error','ok')
	elements.tabs_nav.enabled = true
}

/**
 *
 * @properties={typeid:24,uuid:"16B626F5-D9B9-4C22-B171-D5C14A764B15"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_facturasGC.btn_delete();
}

/**
 *
 * @properties={typeid:24,uuid:"31AD251F-0783-4A04-A5C2-FA856E84B72B"}
 */
function cmd_newRecord()
{
	forms.frm_nav_buttons_facturasGC.btn_add();
}

/**
 *
 * @properties={typeid:24,uuid:"167237B8-B854-4BC8-A81B-14ABC8ECE530"}
 */
function cmd_printPreview()
{
	forms.frm_nav_buttons_facturasGC.btn_print();
}

/**
 *
 * @properties={typeid:24,uuid:"48FE888F-8201-47E9-BAEC-9B75437A2693"}
 */
function cmd_search() {
	forms.frm_nav_main_facturasGC.elements.fld_search.requestFocus(false);
}

/**
 *
 * @properties={typeid:24,uuid:"674F53DF-12EA-4456-8B06-FC1796B03800"}
 */
function cmd_showAll()
{
	forms.frm_nav_buttons_facturasGC.btn_showAll();
}

/**
 * @properties={typeid:24,uuid:"5892D58A-FF88-41DE-8129-30A067FD8DAE"}
 */
function evt_find()
{
	forms.frm_nav_main_facturasGC.elements.fld_search.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"AE1AAE17-A90C-42E5-8886-86C3BE8134FC"}
 */
function showError()
{
	globals.core_dlg_elementDisableEnable = new Array('forms.frm_nav_main.elements.tabs_recList','forms.frm_nav_main.elements.tabs_solNav')
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!!','error', null, null, null, null, null);	
}

/**
 * @properties={typeid:24,uuid:"A89479E0-541C-40EE-8742-FD6FA434B4CF"}
 */
function showInfo()
{
//	globals.showIconDialog('Info', 'This message is just for your information only.','info');
}

/**
*
 * @properties={typeid:24,uuid:"3D500760-0325-4276-AC23-A9DAB93250B7"}
 */
function btn_save()
{
	globals.GCsaveEdits()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"F8D2B2B9-7141-4C02-9352-85F7E3B51BE2"}
 */
function btn_cancel()
{
	globals.GCcancelEditing()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"56BD69BB-5686-4DD4-809C-C0DBC7847025"}
 */
function doEdit()
{
	if(!globals.GCisEditing()) globals.GCstartEditing()

	var allNames = elements.allnames

	for ( var i = 0 ; i < allNames.length ; i++ )
	{
		//work on fields only - starting with name "fld_"
		if(allNames[i].indexOf('fld_') >= 0)
		{
			//if it's a field - then change color and make editable			
			elements[allNames[i]].bgcolor = '#feffe4'
			elements[allNames[i]]['readOnly'] = false
		}
		if(allNames[i].indexOf('lbl_required') >= 0)
		{
			elements[allNames[i]].visible = true
		}
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			//not the web client so also do the "checkboxes" as well
			if(allNames[i].indexOf('chk_') >= 0)
			{
				//if it's a checkbox - then change color and make editable
				elements[allNames[i]].bgcolor = '#feffe4'
				elements[allNames[i]]['readOnly'] = false
			}
		}*/
	}

	elements.btn_save.visible = true
	elements.btn_cancel.visible = true
}

/**
 *
 * @properties={typeid:24,uuid:"236E2C6C-5C48-41EE-9002-FBEE9004EE19"}
 */
function doEdit2()
{
	if(!globals.GCisEditing()) globals.GCstartEditing()

	var allNames = elements.allnames

	for ( var i = 0 ; i < allNames.length ; i++ )
	{
		
			//if it's a field - then change color and make editable			
			elements[allNames[i]].bgcolor = '#feffe4'
			elements[allNames[i]]['readOnly'] = false		
	}

	elements.btn_save.visible = true
	elements.btn_cancel.visible = true
}

/**
 *
 * @properties={typeid:24,uuid:"09DD76E2-ADAD-4931-A3D1-3C73D8EBAAE4"}
 */
function hide_btn_reset_fields()
{
	var allNames = elements.allnames

	for ( var i = 0 ; i < allNames.length ; i++ )
	{
		var etype = elements[allNames[i]].getElementType()
		if (etype == ELEMENT_TYPES.TEXT_FIELD || 
				etype == ELEMENT_TYPES.CALENDAR || 
				etype == ELEMENT_TYPES.COMBOBOX)
		{
			elements[allNames[i]].bgcolor = '#f0f0f0'
		}
		//work on fields only - starting with name "fld_"
		if(allNames[i].indexOf('fld_') >= 0)
		{
			//if it's a field - then change color and make not editable
			elements[allNames[i]].bgcolor = '#f0f0f0'
			elements[allNames[i]]['readOnly'] = true
		}
		if(allNames[i].indexOf('lbl_required') >= 0)
		{
			elements[allNames[i]].visible = false
		}
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			//not the web client so also do the "checkboxes" as well
			if(allNames[i].indexOf('chk_') >= 0)
			{
				//if it's a checkbox - then change color and make editable
				elements[allNames[i]].bgcolor = '#f0f0f0'
				elements[allNames[i]]['readOnly'] = true
			}
		}*/
	}

	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
}

/**
 *
 * @properties={typeid:24,uuid:"D5E6D9C8-FE99-495A-AC12-1D87E554DC75"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Delete')
	{
		foundset.deleteRecord()

		//if there are no records showing - then show all
		if(foundset.getSize() == 0) forms.frm_nav_buttons_facturasGC.btn_showAll();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"16E7F442-E125-46BB-920D-9A4807488B0A"}
 */
function GCbuscar(event) {
	// TODO Auto-generated method stub
	var menu = plugins.window.createPopupMenu();
		/*menu.addMenuItem('A', Busqueda, null);
		menu.addMenuItem('B', Busqueda, null);
		menu.addMenuItem('C', Busqueda, null);
		menu.addMenuItem('D', Busqueda, null);
		menu.addMenuItem('E', Busqueda, null);
		menu.addMenuItem('F', Busqueda, null);
		menu.addMenuItem('G', Busqueda, null);
		menu.addMenuItem('H', Busqueda, null);
		menu.addMenuItem('I', Busqueda, null);
		menu.addMenuItem('J', Busqueda, null);
		menu.addMenuItem('K', Busqueda, null);
		menu.addMenuItem('L', Busqueda, null);
		menu.addMenuItem('M', Busqueda, null);
		menu.addMenuItem('N', Busqueda, null);
		menu.addMenuItem('Ñ', Busqueda, null);
		menu.addMenuItem('O', Busqueda, null);
		menu.addMenuItem('P', Busqueda, null);
		menu.addMenuItem('Q', Busqueda, null);
		menu.addMenuItem('R', Busqueda, null);
		menu.addMenuItem('S', Busqueda, null);
		menu.addMenuItem('T', Busqueda, null);
		menu.addMenuItem('U', Busqueda, null);
		menu.addMenuItem('V', Busqueda, null);
		menu.addMenuItem('W', Busqueda, null);
		menu.addMenuItem('X', Busqueda, null);
		menu.addMenuItem('Y', Busqueda, null);
		menu.addMenuItem('Z', Busqueda, null);
		*/
	menu.addMenuItem('A', svyBusqueda, null);
	menu.addMenuItem('B', svyBusqueda, null);
	menu.addMenuItem('C', svyBusqueda, null);
	menu.addMenuItem('D', svyBusqueda, null);
	menu.addMenuItem('E', svyBusqueda, null);
	menu.addMenuItem('F', svyBusqueda, null);
	menu.addMenuItem('G', svyBusqueda, null);
	menu.addMenuItem('H', svyBusqueda, null);
	menu.addMenuItem('I', svyBusqueda, null);
	menu.addMenuItem('J', svyBusqueda, null);
	menu.addMenuItem('K', svyBusqueda, null);
	menu.addMenuItem('L', svyBusqueda, null);
	menu.addMenuItem('M', svyBusqueda, null);
	menu.addMenuItem('N', svyBusqueda, null);
	menu.addMenuItem('Ñ', svyBusqueda, null);
	menu.addMenuItem('O', svyBusqueda, null);
	menu.addMenuItem('P', svyBusqueda, null);
	menu.addMenuItem('Q', svyBusqueda, null);
	menu.addMenuItem('R', svyBusqueda, null);
	menu.addMenuItem('S', svyBusqueda, null);
	menu.addMenuItem('T', svyBusqueda, null);
	menu.addMenuItem('U', svyBusqueda, null);
	menu.addMenuItem('V', svyBusqueda, null);
	menu.addMenuItem('W', svyBusqueda, null);
	menu.addMenuItem('X', svyBusqueda, null);
	menu.addMenuItem('Y', svyBusqueda, null);
	menu.addMenuItem('Z', svyBusqueda, null);
			
	
	
	
	if (event.getSource()) {
		// display the popup over the component which is the source of the event
		menu.show(event.getSource(),20,0);					
	}			
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @SuppressWarnings(deprecated)
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"8EBBCF82-E647-43EB-AB38-C2D72CF3E552"}
 */
function Busqueda(event) 
{
	globals.GCnav_search = arguments[4];
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
		var searchStr = search + '%'
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
			if(dataType == 'str')
			{
				forms[frm]['GCtbfacturacabecera_to_tbmaestroclientes.desccliente'] = searchStr
				forms[frm].foundset.newRecord()		
				/*var ds = forms[frm].foundset.getDataSource()
				var query = databaseManager.createSelect(ds)
				ds = forms[frm]['GCtbfacturacabecera_to_tbmaestroclientes'].getDataSource()
				var join = query.joins.add(ds, JSRelation.INNER_JOIN, 'cliente')
				join.on.add(join.columns.idcliente.add(column.like(searchStr + '%')))	
				*/
				
			}				
		}
		else if(frm.indexOf('FacturasProformaGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['gctbfacturaproformacabecera_to_tbmaestroclientes.desccliente'] = searchStr
				forms[frm].foundset.newRecord()		
				
			}				
		}
		
		
		
		//perform the search
		var found = forms[frm].controller.search()
		//if(query) forms[frm].foundset.loadRecords(query)
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
				forms.frm_nav_buttons_facturasGC.btn_showAll()
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', null, null, null, null, null)
			}
		}
		else
		{
			if(frm.indexOf('CobrosPagosGC') >= 0) forms.lst_CobrosPagosGC.btn_sortDesc()
			//show the "show all" button
			forms.frm_nav_buttons_facturasGC.sub_showShowAll()
		}
	}
	else
	{
		//empty search - so show all
		//forms.frm_nav_buttons.btn_showAll()
		//elements.fld_search.requestFocus(false)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @SuppressWarnings(deprecated)
 * @AllowToRunInFind
 *
 *
 * @properties={typeid:24,uuid:"08127EFE-F7AB-4F74-BBB3-1F19AAE97C66"}
 */
function svyBusqueda(event) 
{
	globals.GCnav_search = arguments[4];
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
		var searchStr = search + '%'
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
			var svysearch = scopes.svySearch_2.createSimpleSearch(forms.FrmFacturasGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
//			list of data providers to include in search
			var searchProviders = [				
				'GCtbfacturacabecera_to_tbmaestroclientes.desccliente'
				
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
			application.output(databaseManager.getSQL(foundset));
			application.output(databaseManager.getSQLParameters(foundset));
			var found = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);						
		}
		else if(frm.indexOf('FacturasProformaGC') >= 0)
		{
			svysearch = scopes.svySearch_2.createSimpleSearch(forms.FrmFacturasProformaGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
//			list of data providers to include in search
			searchProviders = [
				'gctbfacturaproformacabecera_to_tbmaestroclientes.desccliente'
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
				forms.frm_nav_buttons_facturasGC.btn_showAll()
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', null, null, null, null, null)
			}
		}
		else
		{
			if(frm.indexOf('CobrosPagosGC') >= 0) forms.lst_CobrosPagosGC.btn_sortDesc()
			//show the "show all" button
			forms.frm_nav_buttons_facturasGC.sub_showShowAll()
		}
	}
	else
	{
		//empty search - so show all
		//forms.frm_nav_buttons.btn_showAll()
		//elements.fld_search.requestFocus(false)
	}
}
