/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"96837A23-74FB-4683-8720-79BD1E63663A"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B14DD5B-B0DE-48B6-9EAE-32D009DC6A6F"}
 */
function onActionCod_us(event) {
	// TODO Auto-generated method stub
	
	elements.descripcion.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"2C44F300-B32F-49AE-97B2-C485FD1CE629"}
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

			//Encontrar Pescado
			if(frm.indexOf('TipoIVA') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				if(dataType == 'str')
				{
					forms[frm]['desctipoiva'] = searchStr
					forms[frm].foundset.newRecord()
				}
				else 
				{
					forms[frm]['factor'] = search
				}	
			
				
						
				//perform the search
				var found = forms[frm].controller.search()

				//see if anything was found
				if(found == 0)
				{
					//globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', null, null, null, null, null)
					forms[frm].foundset.loadAllRecords()
					forms[frm].foundset.sort('factor desc')
				}
				else
				{
					//show the "show all" button
					//databaseManager.refreshRecordFromDatabase(forms.dlg_TiposPescados.foundset,-1);		
					if(dataType == 'str')
					{
						var query = "select [ID] from [tbMaestroTipoIva] "+
								"where [desctipoiva] LIKE '"+searchStr+"'";		
					}
					else if(dataType == 'int')
					{
						query = "select [ID] from [tbMaestroTipoIva] "+
						"where [factor] = "+search;	
					}
					var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					foundset.selectRecord(dataset.getValue(1,1))
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
			forms[frm].foundset.sort('factor desc')
		}
		
	}

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"DBC9ECB1-46ED-4AFC-87B0-9922736F52CD"}
 * @AllowToRunInFind
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = null;
	foundset.loadAllRecords()
	foundset.sort('factor desc, desctipoiva asc')
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"A4F87FCE-8CAC-46A5-8E30-87467D15F5FF"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_usuario.requestFocus()
}
