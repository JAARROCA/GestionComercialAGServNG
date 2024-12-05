/**
 * @properties={typeid:24,uuid:"6092F9B1-0A53-4D73-9C4B-9EC71B6B80E9"}
 */
function evt_find()
{
	elements.fld_search_cuenta.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"8CCA7B6E-0ECD-41EC-A11C-A59A0747307A"}
 */
function cmd_search() {
	elements.fld_search_cuenta.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7FA10C2-B6C5-4453-A726-F4182FF63498"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'dlg_ProveedoresGC': 
		{
			forms.dlg_ProveedoresGC.ProveedorID = id;
			forms.dlg_ProveedoresGC.onDataChangeListadoProveedores()
			break;
		}		
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('Proveedores2').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B6C0A420-06BE-407E-B8B1-B4DC407592D4"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function onShow(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search = null
	globals.GCnav_search2 = null
	onLoad(event)
	elements.fld_search_cuenta.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"107E5071-6B0E-4475-A0A8-BA0BBA0A26BE"}
 * @SuppressWarnings(deprecated)
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function btn_search()
	{
		/** @type String */
		var frm = currentcontroller.getName();
		/** @type String */
		var search = globals.GCnav_search2

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

			//Encontrar Forma de Pago
			if(frm.indexOf('Proveedores') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				
					/*globals.GCshowErrorDialog('There is no numeric or date data to find in clientes.', null, 'OK', null, null, null);
					elements.fld_search.selectAll()
					return*/
				if(dataType == 'int')
				{
					forms[frm]['codpro'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
					forms[frm]['cif'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
				}	
				else 
				{
					forms[frm]['descproveedor'] = searchStr+'%'
					forms[frm].foundset.newRecord()
					forms[frm]['cif'] = searchStr+'%'
				}
					
						
				//perform the search
				var found = forms[frm].controller.search()

				//see if anything was found
				if(found == 0)
				{
					//globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', null, null, null, null, null)
					forms[frm].foundset.loadAllRecords()
				}
				else
				{
					//show the "show all" button
					databaseManager.refreshRecordFromDatabase(forms.dlgProveedores2GC.foundset,-1);						
				}
			}
			else
			{
				//empty search - so show all			
				elements.fld_search_cuenta.requestFocus(false)
			}
		}
		else
		{
			forms[frm].foundset.loadAllRecords()
		}
		
	}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C53F736B-31F6-43E9-9C5D-3E25FD22AED2"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('codpro ASC')
	//var query = "Select * FROM [formpago] WHERE [IdEjercicio] = '"+globals.Empresa+
	//"' ORDER BY [codig_fp] ASC";
	//var ds = controller.getDataSource().split('/');
	//var dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 99999999999) 
	//foundset.loadRecords(dataset)
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
 * @properties={typeid:24,uuid:"B432DB8B-4858-4A9E-A81A-24DFEE99FF91"}
 */
function btnlblcodigo(event) {
	// TODO Auto-generated method stub
	var foundsetSort = foundset.getCurrentSort()
	if(foundsetSort == 'codpro asc')
	{
		foundset.sort('codpro desc');
	}
	else
	{
		foundset.sort('codpro asc');
	}
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
 * @properties={typeid:24,uuid:"6E77E036-2352-4E6C-BC9D-023C04DF2C7A"}
 */
function btnlbldescripcion(event) {
	// TODO Auto-generated method stub
	var foundsetSort = foundset.getCurrentSort()
	if(foundsetSort == 'descproveedor asc')
	{
		foundset.sort('descproveedor desc');
	}
	else
	{
		foundset.sort('descproveedor asc');
	}
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
 * @properties={typeid:24,uuid:"F88C6CBF-3735-41E6-8907-912B991CD729"}
 */
function btnlblcif(event) {
	// TODO Auto-generated method stub
	var foundsetSort = foundset.getCurrentSort()
	if(foundsetSort == 'cif asc')
	{
		foundset.sort('cif desc');
	}
	else
	{
		foundset.sort('cif asc');
	}
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
 * @properties={typeid:24,uuid:"7C250E6A-5F1D-4EFC-A7B8-C5AC4B507946"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_cuenta.requestFocus()
}
