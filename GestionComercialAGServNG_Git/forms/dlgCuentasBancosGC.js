/**
 * @properties={typeid:24,uuid:"0858B676-875D-47DE-868C-FA28FADA4BF0"}
 */
function evt_find()
{
	elements.fld_search_cuenta.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"ECED971E-5DB3-4786-B3D9-81B87876291C"}
 */
function cmd_search() {
	elements.fld_search_cuenta.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E805A497-5EB7-4395-9C59-47167CCFD363"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmCobrosPagos': 
		{
			forms.FrmCobrosPagosGC.cuentabanco = codigoctabanco		
			break;
		}
		case 'dlg_SelecCobrosProcesarGC': 
		{
			globals.CuentaBanco = codigoctabanco		
			forms.dlg_SelecCobrosProcesarGC.evt_changeItem()
			break;
		}
		case 'dlg_RemesasC19SEPAGC': 
		{
			globals.CuentaBanco = codigoctabanco	
			forms.dlg_RemesasC19SEPAGC.onDataChangecuenta()
			break;
		}
		default: break;
		
	}
	controller.recreateUI()
	application.getWindow('Cuentas Bancos').hide();
	globals.GCenableBgElements();
		
}

/**
 * Callback method for when form is shown.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D99DB930-1A4B-4F31-A90C-1885B392F516"}
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
 * @properties={typeid:24,uuid:"4443D787-05F7-4A6A-AF60-4F15AB79677C"}
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

			//Encontrar Cuenta bancos
			if(frm.indexOf('CuentasBancos') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				if(dataType == 'str')
				{
					/*globals.GCshowErrorDialog('There is no numeric or date data to find in clientes.', null, 'OK', null, null, null);
					elements.fld_search.selectAll()
					return*/
					forms[frm]['nombreentidad'] = searchStr+'%'
					forms[frm].foundset.newRecord()									
				}
				else if(dataType == 'int')
				{
					forms[frm]['codigoctabanco'] = searchStr+'%'
					
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
					databaseManager.refreshRecordFromDatabase(forms.dlgCuentasBancosGC.foundset,-1);						
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
	 * @properties={typeid:24,uuid:"A5788BFC-1129-41EC-9F31-64E0B1F498D0"}
	 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
		// TODO Auto-generated method stub
		
		//var ds = controller.getDataSource().split('/');
		//databaseManager.removeTableFilterParam(globals.GCconex,'FiltradoBancosCtasCargo')
	    foundset.loadAllRecords()
		foundset.sort('codigoctabanco asc');
	}

/**
	 * Perform the element default action.
	 *
	 * @param {JSEvent} event the event that triggered the action
	 *
	 *
 * @properties={typeid:24,uuid:"6C86AFB9-64A9-4D19-8E6C-0BDB62027E08"}
 */
function onActionlblcod(event) {
		// TODO Auto-generated method stub
		var foundsetSort = foundset.getCurrentSort()
		if(foundsetSort == 'codigoctabanco asc')
		{
			foundset.sort('codigoctabanco desc');
		}
		else
		{
			foundset.sort('codigoctabanco asc');
		}
		
	}

/**
	 * Perform the element default action.
	 *
	 * @param {JSEvent} event the event that triggered the action
	 *
	 *
	 *
 * @properties={typeid:24,uuid:"EBA48CFF-E492-4D64-B0FE-A5B7DF24DAC7"}
 */
function onActionlbldesc(event) {
		// TODO Auto-generated method stub
		var foundsetSort = foundset.getCurrentSort()
		if(foundsetSort == 'nombreentidad asc')
		{
			foundset.sort('nombreentidad desc');
		}
		else
		{
			foundset.sort('nombreentidad asc');
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
 * @properties={typeid:24,uuid:"CAEAF418-5958-45FA-AA49-19B481777911"}
 */
function btn_clearsearch(event) {
		// TODO Auto-generated method stub
		globals.GCnav_search2 = '';
		btn_search()
		elements.fld_search_cuenta.requestFocus()
	}
