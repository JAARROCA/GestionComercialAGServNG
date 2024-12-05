/**
 * @properties={typeid:24,uuid:"629FEEED-91A3-4F6A-9C81-E2122EA38749"}
 */
function evt_find()
{
	elements.fld_search_cuenta.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"5837FA7D-A8D3-48A0-95B6-6FC2D5B1E1E6"}
 */
function cmd_search() {
	elements.fld_search_cuenta.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2602BA89-6ABA-4948-9612-D3F8F230FD0B"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmFacturasGC': 
		{
			forms.FrmFacturasGC.obse_cfa = descripcion
			break;
		}
		case 'FrmFacturasProformaGC': 
		{
			forms.FrmFacturasProformaGC.obse_cfa = descripcion
			break;
		}
		case 'FrmClientesGC': 
		{
			forms.FrmClientesGC.observaciones = descripcion
			break;
		}
		case 'dlg_ClientesGC': 
		{
			forms.dlg_ClientesGC.observaciones = descripcion
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('Observaciones').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F12AC38E-708B-4B6B-9118-102350590741"}
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
 * @properties={typeid:24,uuid:"58391C90-919C-44CE-83BA-3C2E3D94874D"}
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
			/*else if(!isNaN(parseInt(search)) && search.indexOf('.') == -1)
			{
				dataType = 'int' //probably an integer
				search = parseInt(search, 10);
				searchStr = op + search
			}*/

			//Encontrar Forma de Pago
			if(frm.indexOf('Observacion') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				
					/*globals.GCshowErrorDialog('There is no numeric or date data to find in clientes.', null, 'OK', null, null, null);
					elements.fld_search.selectAll()
					return*/
				
					forms[frm]['codigo'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
					forms[frm]['descripcion'] = searchStr+'%'
				
					
						
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
					databaseManager.refreshRecordFromDatabase(forms.dlgObservacionGC.foundset,-1);						
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
 * @properties={typeid:24,uuid:"12B54B33-DAE7-4150-8E3B-F411BA199E7A"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	foundset.sort('codigo ASC')
	controller.setSelectedIndex(1);
	
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
 * @properties={typeid:24,uuid:"29537251-D3FC-48D2-9013-6C0B62F5BC2F"}
 */
function btnlblcodigo(event) {
	// TODO Auto-generated method stub
	var foundsetSort = foundset.getCurrentSort()
	if(foundsetSort == 'codigo asc')
	{
		foundset.sort('codigo desc');
		
	}
	else
	{
		foundset.sort('codigo asc');
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
 * @properties={typeid:24,uuid:"19365FAF-9548-4076-BBC8-EB74575A4B98"}
 */
function btnlbldescripcion(event) {
	// TODO Auto-generated method stub
	var foundsetSort = foundset.getCurrentSort()
	if(foundsetSort == 'descripcion asc')
	{
		foundset.sort('descripcion desc');
	}
	else
	{
		foundset.sort('descripcion asc');
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
 * @properties={typeid:24,uuid:"C1852F79-BD50-4B23-887B-592B883DB9AD"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_cuenta.requestFocus()
}
