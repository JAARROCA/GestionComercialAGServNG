/**
 * @properties={typeid:24,uuid:"91F90103-EE51-4261-8130-AD147FA8BEF2"}
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
		/*else if(isNaN(utils.stringLeft(search,1)) || isNaN(utils.stringRight(search,1)))
		{
			dataType = 'str' //probably a date
			searchStr = op + search		
		}*/
		else if(!isNaN(parseInt(search)) && search.indexOf('.') == -1 && (frm == 'FrmProveedoresGC' || frm == 'FrmClientesGC'))
		{
			dataType = 'int' //probably an integer
			search = parseInt(search, 10);
			searchStr = op + search
		}
		else if(frm != 'FrmSwiftBancosGC')
		{
			if(!isNaN(parseInt(search)) && search.indexOf('.') == -1)
			{
				dataType = 'int' //probably an integer
				search = parseInt(search, 10);
				searchStr = op + search
			}
		}
		
		
		//Encontrar Clientes
		if(frm.indexOf('Clientes') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'int')
			{
				forms[frm]['idcliente'] = search
				forms[frm].foundset.newRecord()
				forms[frm]['telf1'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['telf2'] = searchStr
				forms[frm].foundset.newRecord()	
				forms[frm]['cif'] = searchStr+'%'
				forms[frm].foundset.newRecord()
				forms[frm]['numproveedor'] = searchStr+'%'
				forms[frm].foundset.newRecord()
			}
			else if(dataType == 'str')
			{
				forms[frm]['desccliente'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['cif'] = searchStr	
				forms[frm].foundset.newRecord()
				forms[frm]['numproveedor'] = searchStr
			}	
		}
		//Encontrar proveedores
		else if(frm.indexOf('Proveedores') >= 0)
		{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				
				if(dataType == 'int')
				{
					forms[frm]['codpro'] = search
					forms[frm].foundset.newRecord()
					forms[frm]['telf1'] = searchStr
					forms[frm].foundset.newRecord()
					forms[frm]['telf2'] = searchStr
					forms[frm].foundset.newRecord()	
					forms[frm]['cif'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
				}
				else if(dataType == 'str')
				{
					forms[frm]['descproveedor'] = searchStr	
					forms[frm].foundset.newRecord()
					forms[frm]['cif'] = searchStr	
				}					
		}
		else if(frm.indexOf('Operarios') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'int')
			{
				forms[frm]['idoperario'] = search
				forms[frm].foundset.newRecord()
				forms[frm]['telefono'] = searchStr
				forms[frm].foundset.newRecord()	
				forms[frm]['dni'] = searchStr+'%'
				forms[frm].foundset.newRecord()	
			}
			else if(dataType == 'str')
			{
				forms[frm]['nombre'] = searchStr	
				forms[frm].foundset.newRecord()
				forms[frm]['apellido1'] = searchStr	
				forms[frm].foundset.newRecord()
				forms[frm]['apellido2'] = searchStr	
				forms[frm].foundset.newRecord()
				forms[frm]['dni'] = searchStr	
			}	
		}
		//Encontrar articulos
		else if(frm.indexOf('Articulos') >= 0)
		{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				
				
					forms[frm]['codigo'] = searchStr
					forms[frm].foundset.newRecord()
					forms[frm]['descripcion'] = searchStr				
					forms[frm].foundset.newRecord()
					forms[frm]['refcliente'] = searchStr						
		}
		//Encontrar material
		else if(frm.indexOf('Materiales') >= 0)
		{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				
				
					forms[frm]['codigo'] = searchStr
					forms[frm].foundset.newRecord()
					forms[frm]['descripcion'] = searchStr				
					forms[frm].foundset.newRecord()
					forms[frm]['abreviatura'] = searchStr						
		}
		//Encontrar Delegacion
		else if(frm.indexOf('Delegacion') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'int')
			{
				forms[frm]['idcliente'] = search
				forms[frm].foundset.newRecord()		
				forms[frm]['telf1'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['telf2'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['cif'] = searchStr+'%'
				forms[frm].foundset.newRecord()
			}
			else if(dataType == 'str')
			{
				forms[frm]['desccliente'] = searchStr	
				forms[frm].foundset.newRecord()
				forms[frm]['cif'] = searchStr	
			}	
		}
		//Encontrar Transportista
		else if(frm.indexOf('Transportes') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'int')
			{
				forms[frm]['idtransportista'] = search
				forms[frm].foundset.newRecord()		
				forms[frm]['telf1'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['fax'] = searchStr
				forms[frm].foundset.newRecord()
				
			}
			else if(dataType == 'str')
			{
				forms[frm]['razonsocial'] = searchStr	
				forms[frm].foundset.newRecord()
				forms[frm]['idtransportista'] = searchStr	
			}	
		}
		//Encontrar Agente
		else if(frm.indexOf('Agentes') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'int')
			{
				forms[frm]['idagente'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['telf1'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['telf2'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['cif'] = searchStr+'%'
				forms[frm].foundset.newRecord()	
			}
			else if(dataType == 'str')
			{
				forms[frm]['idagente'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['descagente'] = searchStr	
				forms[frm].foundset.newRecord()
				forms[frm]['cif'] = searchStr	
			}	
		}
		//FormaPago FIND
		else if(frm.indexOf('FormaPagoGC') >= 0)
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
		//Familias FIND
		else if(frm.indexOf('FamiliasGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'int')
			{
				forms[frm]['idfamilia'] = search
				forms[frm].foundset.newRecord()
				
			}
			else if(dataType == 'str')
			{
				forms[frm]['idfamilia'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['descfamilia'] = searchStr
			}			
		}
		//TipoIva FIND
		else if(frm.indexOf('TiposIVAGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'int')
			{
				forms[frm]['factor'] = search
				forms[frm].foundset.newRecord()
				
			}
			else if(dataType == 'number')
			{
				forms[frm]['factor'] = search
				forms[frm].foundset.newRecord()
				
			}
			else if(dataType == 'str')
			{
				forms[frm]['desctipoiva'] = search
			}			
		}
		//SWIFT Bancos
		else if(frm.indexOf('SwiftBancosGC') >= 0)
		{
			
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'str')
			{
				forms[frm]['idbanco'] = searchStr
				forms[frm].foundset.newRecord()			
				forms[frm]['nombrebanco'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['bic'] = searchStr
			}
		}
		//SWIFT Bancos
		else if(frm.indexOf('UnidMedidaGC') >= 0)
		{
			
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'int')
			{
				forms[frm]['unidade_id'] = searchStr
				forms[frm].foundset.newRecord()						
			}
			else if(dataType == 'str')
			{
				forms[frm]['unidade_id'] = searchStr
				forms[frm].foundset.newRecord()			
				forms[frm]['desc_uni'] = searchStr				
			}
		}
		//Transportes
		else if(frm.indexOf('TransportesGC') >= 0)
		{
			
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'int')
			{
				forms[frm]['idtransportista'] = searchStr
				forms[frm].foundset.newRecord()						
			}
			else if(dataType == 'str')
			{
				forms[frm]['idtransportista'] = searchStr
				forms[frm].foundset.newRecord()			
				forms[frm]['razonsocial'] = searchStr				
			}
		}
		else if(frm.indexOf('ObservacionGC') >= 0)
		{
			
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'int')
			{
				forms[frm]['codigo'] = searchStr
				forms[frm].foundset.newRecord()						
			}
			else if(dataType == 'str')
			{
				forms[frm]['descripcion'] = searchStr						
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
				forms.frm_nav_buttons_maestrosGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				var methd = 'forms.frm_nav_buttons_maestrosGC.btn_showAll()'
				controller.setSelectedIndex(1)
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', methd, null, null, null, null)
				//forms[frm].foundset.loadAllRecords()
			}
		}
		else
		{
			var foundsetSort = forms[frm].foundset.getCurrentSort()
			//show the "show all" button
			forms.frm_nav_buttons_maestrosGC.sub_showShowAll()
			forms[frm].foundset.sort(foundsetSort)
			controller.setSelectedIndex(1)
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_nav_buttons_maestrosGC.btn_showAll()
		controller.setSelectedIndex(1)
		elements.fld_search.requestFocus(false)
	}
}

/**
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"7A62BA6D-AD4D-45CC-AB30-F04897DD803B"}
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
			search = new Date(search)
			searchStr = op + search
		}
		else if(search.indexOf('.') != -1 && !isNaN(parseFloat(search)))
		{
			dataType = 'number' //probably a number
			search = parseFloat(search);
			searchStr = op + search
		}
		else if(!isNaN(parseInt(search)) && search.indexOf('.') == -1 && (frm == 'FrmProveedoresGC' || frm == 'FrmClientesGC'))
		{
			dataType = 'int' //probably an integer
			search = parseInt(search, 10);
			searchStr = op + search
		}
		else if(frm != 'FrmSwiftBancosGC')
		{
			if(!isNaN(parseInt(search)) && search.indexOf('.') == -1)
			{
				dataType = 'int' //probably an integer
				search = parseInt(search, 10);
				searchStr = op + search
			}
		}
		*/
		application.output(dataType+' '+searchStr);
		//Encontrar Clientes
		if(frm.indexOf('Clientes') >= 0)
		{
			var svysearch = scopes.svySearch.createSimpleSearch(forms.FrmClientesGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			var searchProviders = [
				'idcliente',
				'desccliente',
				'cif',
				'numproveedor',
				'telf1',
				'telf2'
				
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmClientesGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			var found = databaseManager.getFoundSetCount(forms.FrmClientesGC.foundset);
		}
		//Encontrar proveedores
		else if(frm.indexOf('Proveedores') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmProveedoresGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'codpro',
				'descproveedor',
				'cif',
				'telf1',
				'telf2'
				
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmProveedoresGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmProveedoresGC.foundset);
		}
		else if(frm.indexOf('Operarios') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmOperariosGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'idoperario',
				'nombre',
				'apellido1',
				'apellido2',
				'dni',
				'telefono'
								
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmOperariosGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmOperariosGC.foundset);
		}
		//Encontrar articulos
		else if(frm.indexOf('Articulos') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmArticulosGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'codigo',
				'descripcion',
				'refcliente'
								
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmArticulosGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmArticulosGC.foundset);
		}
		//Encontrar material
		else if(frm.indexOf('Materiales') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmMaterialesGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'codigo',
				'descripcion',
				'abreviatura'
								
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmMaterialesGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmMaterialesGC.foundset);
		}
		//Encontrar Delegacion
		else if(frm.indexOf('Delegacion') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmDelegacionesGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'idcliente',
				'desccliente',
				'telf1',
				'telf2',
				'cif'
								
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmDelegacionesGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmDelegacionesGC.foundset);
		}
		//Encontrar Transportista
		else if(frm.indexOf('Transportes') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmTransportesGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'idtransportista',
				'razonsocial',
				'telf1',
				'fax'
								
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmTransportesGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmTransportesGC.foundset);
		}
		//Encontrar Agente
		else if(frm.indexOf('Agentes') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmAgentesGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'idagente',
				'descagente',
				'telf1',
				'telf2',
				'cif'
								
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmAgentesGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmAgentesGC.foundset);
		}
		//FormaPago FIND
		else if(frm.indexOf('FormaPagoGC') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmFormaPagoGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'codig_fp',
				'denom_fp'
								
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmFormaPagoGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmFormaPagoGC.foundset);
		}
		//Familias FIND
		else if(frm.indexOf('FamiliasGC') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmFamiliasGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'idfamilia',
				'descfamilia'
								
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmFamiliasGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmFamiliasGC.foundset);
		}
		//TipoIva FIND
		else if(frm.indexOf('TiposIVAGC') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmTiposIVAGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'desctipoiva',
				'factor'
								
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmTiposIVAGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmTiposIVAGC.foundset);
		}
		//SWIFT Bancos
		else if(frm.indexOf('SwiftBancosGC') >= 0)
		{
			
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmSwiftBancosGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'idbanco',
				'nombrebanco',
				'bic'
								
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmSwiftBancosGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmSwiftBancosGC.foundset);
		}
		//SWIFT Bancos
		else if(frm.indexOf('UnidMedidaGC') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmUnidMedidaGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'unidade_id',
				'desc_uni'
								
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmUnidMedidaGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmUnidMedidaGC.foundset);
		}
		//Transportes
		else if(frm.indexOf('TransportesGC') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmTransportesGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'idtransportista',
				'razonsocial'
								
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmTransportesGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmTransportesGC.foundset);
		}
		else if(frm.indexOf('ObservacionGC') >= 0)
		{
			svysearch = scopes.svySearch.createSimpleSearch(forms.FrmObservacionGC.foundset);
			
			// set the search text
			svysearch.setSearchText(search);
			
			//list of data providers to include in search
			searchProviders = [
				'codigo',
				'descripcion',
				'apellido1',
								
				// related data providers
				//'GCtbfacturacabecera_to_tbfacturalinea.ref_lfa',
				
				
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
			svysearch.loadRecords(forms.FrmObservacionGC.foundset);
			//application.output(databaseManager.getSQL(foundset));
			//application.output(databaseManager.getSQLParameters(foundset));
			found = databaseManager.getFoundSetCount(forms.FrmObservacionGC.foundset);
		}
		
		
		
		//perform the search
		//var found = forms[frm].controller.search()

		//see if anything was found
		if(found == 0)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
			{
				plugins.webnotificationsToastr.error('No se han encontrado coincidencias con la búsqueda realizada.','¡Error!')
				forms.frm_nav_buttons_maestrosGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				var methd = 'forms.frm_nav_buttons_maestrosGC.btn_showAll()'
				controller.setSelectedIndex(1)
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', methd, null, null, null, null)
				//forms[frm].foundset.loadAllRecords()
			}
		}
		else
		{
			var foundsetSort = forms[frm].foundset.getCurrentSort()
			//show the "show all" button
			forms.frm_nav_buttons_maestrosGC.sub_showShowAll()
			forms[frm].foundset.sort(foundsetSort)
			controller.setSelectedIndex(1)
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_nav_buttons_maestrosGC.btn_showAll()
		controller.setSelectedIndex(1)
		elements.fld_search.requestFocus(false)
	}
}

/**
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"4D5782C6-393A-4507-8EDA-662BE326003D"}
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
 *
 * @properties={typeid:24,uuid:"53D1389C-499F-4B5D-B47A-F6B7A96E2029"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_maestrosGC.btn_delete();
}

/**
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"264D6A39-77DF-445F-A7F9-C957F5AF9337"}
 * @SuppressWarnings(deprecated)
 */
function btn_goForm(foundsetindex, columnindex, record, event)
{
	var frm = currentcontroller.getName()
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	/*var name = '';
	//switch tabs in the main form - and the list form

	if (action_method == null)
	{
		//incase having old db, fill with correct data
		if (item_name != null)
			name = item_name.toLocaleLowerCase();
		else name = 'Clientes';
		if (name == 'customers') name = 'Clientes'
		action_method = name;
	}*/
	try {
		/*if(action_method == 'FormasPago')
		{
			var frm = currentcontroller.getName()
			if(globals.GCisEditing()) forms[frm].btn_cancel()
			if(!globals.GCisEditing()) globals.GCstartEditing()
			globals.GCshowDialogFormaPago('BD Formas de Pago', 1, null, null, true, null, null, null, null, null);
		}*/
		/*else if(action_method == 'OperariosGC')
		{
			frm = currentcontroller.getName()
			if(globals.GCisEditing()) forms[frm].btn_cancel()
			if(!globals.GCisEditing()) globals.GCstartEditing()
			globals.GCshowDialogOperarios('BD Operarios', 1, null, null, true, null, null, null, null, null);
		}*/
		/*else */
		if(record)
		{
			var action_method = record['action_method']
			if(action_method == 'Familias' || action_method == 'TiposIVA')
			{
				action_method = action_method + 'GC'
				/*var frm = currentcontroller.getName()
				if(globals.GCisEditing()) forms[frm].btn_cancel()
				if(!globals.GCisEditing()) globals.GCstartEditing()
				globals.GCshowDialogFamilias('BD Familias', 1, null, null, true, null, null, null, null, null);
				*/
				forms['Frm'+action_method].controller.show()
			}
			/*else if(action_method == 'TiposIVA')
			{
				var frm = currentcontroller.getName()
				if(globals.GCisEditing()) forms[frm].btn_cancel()
				if(!globals.GCisEditing()) globals.GCstartEditing()
				globals.GCshowDialogTiposIva('BD de Tipos de I.V.A.', 1, null, null, true, null, null, null, null, null);
				
			}
			*/
			else
			{
				forms['Frm'+action_method].controller.show()
			}
		}
	}
	catch (e) {}
	if(record)
	{
		//var item_name = record['item_name']
		var tabCount = forms.frm_nav_main_maestrosGC.elements.tabs_recList.getMaxTabIndex();
		for (var index = 1; index <= tabCount; index++) 
		{
			var tname = forms.frm_nav_main_maestrosGC.elements.tabs_recList.getTabFormNameAt(index);
			if (tname.substr(4) == action_method)
			{
				forms.frm_nav_main_maestrosGC.elements.tabs_recList.tabIndex = index;
				break;
			}
		}
	
		/*if (item_name.indexOf('Admin') == -1)
		{
			//update the record information
			globals.GCsetupRecordStatus();
	
			//hide search stuff
			forms.frm_nav_main_maestrosGC.elements.lbl_search.visible = true
			forms.frm_nav_main_maestrosGC.elements.fld_search.visible = true
			forms.frm_nav_main_maestrosGC.elements.btn_search.visible = true
		}
		else
		{
			//hide search stuff
			forms.frm_nav_main_maestrosGC.elements.lbl_search.visible = false
			forms.frm_nav_main_maestrosGC.elements.fld_search.visible = false
			forms.frm_nav_main_maestrosGC.elements.btn_search.visible = false
		}*/
	//}
	}
}
