/**
 * @properties={typeid:24,uuid:"AADB624C-6572-4DF7-801B-BE3247A01CC7"}
 */
function evt_find()
{
	elements.fld_search_cuenta.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"1ECF4104-8DDF-48BD-A139-A31D865F7FFC"}
 */
function cmd_search() {
	elements.fld_search_cuenta.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C8250ED8-A9D5-456C-9CB8-D87BF6447956"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmClientes': 
		{
			forms.FrmClientesGC.comisionista = idagente;
			break;
		}
		case 'dlg_Clientes': 
		{
			forms.dlg_ClientesGC.comisionista = idagente;
			break;
		}
		case 'dlg_InformeComisionGC1': 
		{
			forms.dlg_InformeComisionGC.DesdeAgente = idagente;
			break;
		}
		case 'dlg_InformeComisionGC2': 
		{
			forms.dlg_InformeComisionGC.HastaAgente = idagente;
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('dialogAgentes').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"260F6361-7859-44F5-8944-5F0C8CD853AE"}
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
 * @properties={typeid:24,uuid:"E7D79009-0FB6-4018-906C-28FB377A7B05"}
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

			//Encontrar Forma de Pago
			if(frm.indexOf('Agentes') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				if(dataType == 'str')
				{
					/*globals.GCshowErrorDialog('There is no numeric or date data to find in clientes.', null, 'OK', null, null, null);
					elements.fld_search.selectAll()
					return*/
					forms[frm]['idagente'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
					forms[frm]['descagente'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
				}
				else if(dataType == 'int')
				{
					forms[frm]['idagente'] = searchStr+'%'
					
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
					databaseManager.refreshRecordFromDatabase(forms.dlgAgentesGC.foundset,-1);						
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
 * @properties={typeid:24,uuid:"BA407802-0E57-4316-A358-13449E541AEB"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	elements.datagrid_agentes.myFoundset.foundset.loadAllRecords()
	elements.datagrid_agentes.myFoundset.foundset.sort('idagente ASC')
	/*foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idagente ASC')*/
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
 * @properties={typeid:24,uuid:"A7FF9379-DDE0-4763-A9A7-450FF053E0E8"}
 */
function btnlblcodigo(event) {
	// TODO Auto-generated method stub
	var foundsetSort = foundset.getCurrentSort()
	if(foundsetSort == 'idagente asc')
	{
		foundset.sort('idagente desc');
	}
	else
	{
		foundset.sort('idagente asc');
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
 * @properties={typeid:24,uuid:"4C25FBDE-7249-42CF-A236-4773F067DCBF"}
 */
function btnlbldescripcion(event) {
	// TODO Auto-generated method stub
	var foundsetSort = foundset.getCurrentSort()
	if(foundsetSort == 'descagente asc')
	{
		foundset.sort('descagente desc');
	}
	else
	{
		foundset.sort('descagente asc');
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"4257B22B-C2D8-4DF1-9EDC-95D0A544CD31"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_cuenta.requestFocus()
}
