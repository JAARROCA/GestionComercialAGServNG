/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DDA4E4D0-CF0E-41E7-95D2-DFBF56679B22"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'dlg_ClientesGC': 
		{
			forms.dlg_ClientesGC.ClienteID = id;
			forms.dlg_ClientesGC.onDataChangeListadoClientes()
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('Clientes2').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F4B11CBB-AEE6-4412-8272-920102296D52"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function onShow(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search = null
	globals.GCnav_search2 = null
	onLoad(event)
	//elements.fld_search_cuenta.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"66F70152-93C6-4564-B38D-ADCCCDEACC22"}
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
			if(frm.indexOf('Clientes') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				
					/*globals.GCshowErrorDialog('There is no numeric or date data to find in clientes.', null, 'OK', null, null, null);
					elements.fld_search.selectAll()
					return*/
				if(dataType == 'int')
				{
					forms[frm]['idcliente'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
					forms[frm]['cif'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
				}	
				else 
				{
					forms[frm]['desccliente'] = searchStr+'%'
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
					databaseManager.refreshRecordFromDatabase(forms.dlgClientesGC.foundset,-1);						
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
 * @properties={typeid:24,uuid:"E0CBE69F-BC37-413D-8CC3-288245B932D3"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	/*elements.datagrid_clientes.myFoundset.foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	elements.datagrid_clientes.myFoundset.foundset.sort('idcliente ASC')*/	
	foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idcliente ASC')	
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
 * @properties={typeid:24,uuid:"53297CB6-D276-485B-A322-CF8E0E6625DC"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_cuenta.requestFocus()
}

/**
 * Perform find.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E0776B2C-1178-470C-AC29-4EAC4E088D00"}
 */
function evt_find(event) {
	// TODO Auto-generated method stub
	elements.fld_search_cuenta.requestFocus(false)
}

/**
 * Perform search.
 *
 * @param {Boolean} clear clear last results
 * @param {Boolean} reduce reduce search
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BBDBFD0D-10BD-43D3-B036-F4422D9DBAF1"}
 * @AllowToRunInFind
 */
function cmd_search(clear, reduce, event) {
	elements.fld_search_cuenta.requestFocus(false);
}
