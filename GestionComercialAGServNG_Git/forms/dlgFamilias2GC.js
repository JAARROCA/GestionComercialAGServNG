/**
 * @properties={typeid:24,uuid:"4597BA92-20CA-435A-B4E1-F5C2FF492CCD"}
 */
function evt_find()
{
	elements.fld_search_cuenta.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"2A2EA0D4-C3C0-42A1-B9F5-7F1B11FBAE16"}
 */
function cmd_search() {
	elements.fld_search_cuenta.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F8BBA75-FE48-4739-AD2A-0969C552E007"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmArticulos': 
		{
			forms.FrmArticulosGC.familia = idfamilia
			break;
		}
		case 'FrmMaterialesGC': 
		{
			forms.FrmMaterialesGC.familia = idfamilia
			break;
		}
		case 'dlg_Articulos': 
		{
			forms.dlg_ArticulosGC.familia = idfamilia
			break;
		}
		case 'dlg_Consulta_VentasFamilias1': 
		{
			forms.dlg_Consulta_VentasFamiliasGC.DesdeFamilia = idfamilia
			break;
		}
		case 'dlg_Consulta_VentasFamilias2': 
		{
			forms.dlg_Consulta_VentasFamiliasGC.HastaFamilia = idfamilia
			break;
		}
		case 'dlg_Consulta_ComprasFamilias1': 
		{
			forms.dlg_Consulta_ComprasFamiliasGC.DesdeFamilia = idfamilia
			break;
		}
		case 'dlg_Consulta_ComprasFamilias2': 
		{
			forms.dlg_Consulta_ComprasFamiliasGC.HastaFamilia = idfamilia
			break;
		}
		case 'dlg_Consulta_BeneficiosFamilias1': 
		{
			forms.dlg_Consulta_BeneficiosFamiliasGC.DesdeFamilia = idfamilia
			break;
		}
		case 'dlg_Consulta_BeneficiosFamilias2': 
		{
			forms.dlg_Consulta_BeneficiosFamiliasGC.HastaFamilia = idfamilia
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('Clientes').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3D6F4496-9BE7-460E-9596-57BACCCD9136"}
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
 * @properties={typeid:24,uuid:"97F4359B-2F82-4532-9492-DC3CD325FEA9"}
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
			if(frm.indexOf('Familias') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				
					/*globals.GCshowErrorDialog('There is no numeric or date data to find in clientes.', null, 'OK', null, null, null);
					elements.fld_search.selectAll()
					return*/
				if(dataType == 'str')
				{
					/*globals.GCshowErrorDialog('There is no numeric or date data to find in clientes.', null, 'OK', null, null, null);
					elements.fld_search.selectAll()
					return*/
					forms[frm]['idfamilia'] = searchStr
					forms[frm].foundset.newRecord()	
					forms[frm]['descfamilia'] = searchStr
					forms[frm].foundset.newRecord()	
				}
				else if(dataType == 'int')
				{
					forms[frm]['idfamilia'] = searchStr
					
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
					databaseManager.refreshRecordFromDatabase(forms.dlgFamilias2GC.foundset,-1);						
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
 * @properties={typeid:24,uuid:"4651B219-E80E-4E4D-B7C1-E5BB22A593AC"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idfamilia ASC')	
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
 * @properties={typeid:24,uuid:"6F67EDEB-F897-4451-AF2F-5AD90F0C6A76"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_cuenta.requestFocus()
}
