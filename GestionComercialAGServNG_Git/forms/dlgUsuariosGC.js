/**
 * @properties={typeid:24,uuid:"26EF8E12-2101-4507-99F1-88AA817A3D27"}
 */
function evt_find()
{
	elements.fld_search_usuario.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"675542E5-AB4A-43D2-85DD-994770E4807A"}
 */
function cmd_search() {
	elements.fld_search_usuario.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"17BE193E-234F-4A9D-B050-14AE554B5D4E"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmLogin': 
		{
			globals.GCFormulario = null
			globals.GCNombreUsuario=nom_us
			forms.FrmLoginGC.evt_changeItem()	
			break;
		}
		default: break;
		
	}
	
	controller.recreateUI()
	application.getWindow('Usuarios').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"2D64F8E8-5EBF-4316-AC25-0732ABB35F1F"}
 * @AllowToRunInFind
 */
function onShow() {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	elements.fld_search_usuario.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"D4D8D3E4-5865-47C2-BB93-E4E345DA12F5"}
 * @SuppressWarnings(deprecated)
 * @AllowToRunInFind
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

			//Encontrar Articulo
			if(frm.indexOf('Usuarios') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				if(dataType == 'int')
				{
					/*globals.GCshowErrorDialog('There is no numeric or date data to find in clientes.', null, 'OK', null, null, null);
					elements.fld_search.selectAll()
					return*/
					forms[frm]['cod_us'] = searchStr+'%'
					forms[frm].foundset.newRecord()
					
				}
				else if(dataType == 'str')
				{
					forms[frm]['nom_us'] = searchStr+'%'
					
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
					databaseManager.refreshRecordFromDatabase(forms.dlgUsuariosGC.foundset,-1);						
				}
			}
			else
			{
				//empty search - so show all			
				elements.fld_search_usuario.requestFocus(false)
			}
		}
		else
		{
			forms[frm].foundset.loadAllRecords()
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
 * @properties={typeid:24,uuid:"513BFBF2-301E-4F27-A7CF-223C11013457"}
 */
function btnlblcodigo(event) {
		// TODO Auto-generated method stub
		var foundsetSort = foundset.getCurrentSort()
		if(foundsetSort == 'cod_us asc')
		{
			foundset.sort('cod_us desc');
		}
		else
		{
			foundset.sort('cod_us asc');
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
 * @properties={typeid:24,uuid:"10694917-0E27-419D-8337-C9A45D990AE2"}
 */
function btnlbldescripcion(event) {
		// TODO Auto-generated method stub
		var foundsetSort = foundset.getCurrentSort()
		if(foundsetSort == 'nom_us asc')
		{
			foundset.sort('nom_us desc');
		}
		else
		{
			foundset.sort('nom_us asc');
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
 * @properties={typeid:24,uuid:"DA41F6A6-1C10-404D-B3FF-4B5F7FCCF039"}
 */
function btn_clearsearch(event) {
		// TODO Auto-generated method stub
		globals.GCnav_search2 = '';
		btn_search()
		elements.fld_search_usuario.requestFocus()
	}
