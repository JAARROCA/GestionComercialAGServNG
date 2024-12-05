/**
 * @properties={typeid:24,uuid:"80542BE2-99AA-4895-AB53-86DE5479337E"}
 */
function evt_find()
{
	elements.fld_search_cuenta.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"8A04EF86-B5F6-49F6-924C-7C6EC343708D"}
 */
function cmd_search() {
	elements.fld_search_cuenta.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"940DA3B1-AE8A-48E8-B219-25D270749272"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmClientes': 
		{
			forms.FrmClientesGC.pais = pai_iso2
			break;
		}
		case 'FrmAgentes': 
		{
			forms.FrmAgentesGC.pais = pai_iso2
			break;
		}
		case 'FrmOperarios': 
		{
			forms.FrmOperariosGC.idpais = pai_iso2
			break;
		}
		case 'FrmDelegaciones': 
		{
			forms.FrmDelegacionesGC.pais = pai_iso2
			break;
		}
		case 'dlg_Clientes': 
		{
			forms.dlg_ClientesGC.pais = pai_iso2
			break;
		}
		case 'dlg_Operarios':
		{
			forms.dlg_OperariosGC.idpais = pai_iso2
		}
		case 'FrmProveedores':
		{
			forms.FrmProveedoresGC.pais = pai_iso2
		}
		case 'dlg_Proveedores':
		{
			forms.dlg_ProveedoresGC.pais = pai_iso2
		}
		case 'dlg_BancosCuentasCargo':
		{
			forms.dlg_BancosCuentasCargoGC.pais = pai_iso2
		}
		case 'FrmBancosCuentasCargoGC':
		{
			forms.FrmBancosCuentasCargoGC.pais = pai_iso2
		}
		case 'FrmBancosCuentasCargo2GC':
		{
			forms.FrmBancosCuentasCargo2GC.pais = pai_iso2
		}
		case 'dlg_ParametroAplicacion':
		{
			forms.dlg_ParametroAplicacionGC.pais = pai_iso2
		}
		default:break;
		
	}
	
	
	
	controller.recreateUI()
	application.getWindow('dialogPaises').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"75985E2C-D749-4EAC-8EFC-F8912723FCB2"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCnav_search = null;
	globals.GCnav_search2 = null;
	elements.datagrid_paises.myFoundset.foundset.loadAllRecords();
	elements.datagrid_paises.myFoundset.foundset.sort('pai_nombre ASC');
	/*foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('pai_nombre ASC')*/
	//elements.fld_search_cuenta.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"DC3DF857-38A2-4CB4-87F2-BEAF9F0B9AC3"}
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
			if(frm.indexOf('Paises') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				if(dataType == 'str')
				{
					/*globals.GCshowErrorDialog('There is no numeric or date data to find in clientes.', null, 'OK', null, null, null);
					elements.fld_search.selectAll()
					return*/
					forms[frm]['pai_iso2'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
					forms[frm]['pai_nombre'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
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
					
					databaseManager.refreshRecordFromDatabase(forms.dlgPaisesGC.foundset,-1);						
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
	 * Perform the element default action.
	 *
	 * @param {JSEvent} event the event that triggered the action
	 *
	 *
	 *
	 *
	 *
 * @properties={typeid:24,uuid:"82970EB3-7F48-442F-A5CA-E385D7C90002"}
 */
function btnlblcodigo(event) {
		// TODO Auto-generated method stub
		var foundsetSort = foundset.getCurrentSort()
		if(foundsetSort == 'pai_iso2 asc')
		{
			foundset.sort('pai_iso2 desc');
		}
		else
		{
			foundset.sort('pai_iso2 asc');
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
 * @properties={typeid:24,uuid:"D67E3FAF-5513-42E6-8735-848E851774D2"}
 */
function btnlbldescripcion(event) {
		// TODO Auto-generated method stub
		var foundsetSort = foundset.getCurrentSort()
		if(foundsetSort == 'pai_nombre asc')
		{
			foundset.sort('pai_nombre desc');
		}
		else
		{
			foundset.sort('pai_nombre asc');
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
 * @properties={typeid:24,uuid:"07C99149-2734-40DA-8C86-ED3471380B35"}
 */
function btn_clearsearch(event) {
		// TODO Auto-generated method stub
		globals.GCnav_search2 = '';
		btn_search()
		elements.fld_search_cuenta.requestFocus()
	}
