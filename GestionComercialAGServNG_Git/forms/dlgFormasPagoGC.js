/**
 * @properties={typeid:24,uuid:"0AAEB0E3-86CB-47B2-B822-87CBBDD1099E"}
 */
function evt_find()
{
	elements.fld_search_cuenta.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"5782DFAB-51BE-4883-8B5F-60FC9F5DFEF7"}
 */
function cmd_search() {
	elements.fld_search_cuenta.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EBB811F0-EF39-422C-8EA4-533F1F1AEA94"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmClientes': 
		{
			forms.FrmClientesGC.idformapago = codig_fp
			break;
		}
		case 'dlg_Clientes': 
		{
			forms.dlg_ClientesGC.idformapago = codig_fp
			break;
		}
		case 'FrmProveedores': 
		{
			forms.FrmProveedoresGC.codigfp = codig_fp
			break;
		}
		case 'dlg_Proveedores': 
		{
			forms.dlg_ProveedoresGC.codigfp = codig_fp
			break;
		}
		case 'FrmPresupuestos': 
		{
			forms.FrmPresupuestosGC.cfpa_cof = codig_fp
			break;
		}
		case 'FrmFacturas': 
		{
			forms.FrmFacturasGC.cfpa_cfa = codig_fp
			forms.FrmFacturasGC.onDataChangeFP()
			break;
		}
		case 'FrmFacturasProforma': 
		{
			forms.FrmFacturasProformaGC.cfpa_cfa = codig_fp
			forms.FrmFacturasProformaGC.onDataChangeFP()
			break;
		}
		case 'FrmCobrosPagosGC': 
		{
			forms.FrmCobrosPagosGC.formapago = codig_fp
			break;
		}
		case 'FrmNotas': 
		{
			forms.FrmNotasGC.cfpa_cfa = codig_fp
			forms.FrmNotasGC.onDataChangeFP()
			break;
		}
		case 'FrmFacturasCompras': 
		{
			forms.FrmFacturasComprasGC.cfpa_cfca = codig_fp
			break;
		}
		case 'FrmPedidos': 
		{
			forms.FrmPedidosGC.cfpa_cot = codig_fp
			break;
		}
		case 'dlg_ConsultaCobrosPagosPendientes1': 
		{
			forms.dlg_ConsultaCobrosPagosPendientesGC.DesdeFP = codig_fp
			break;
		}
		case 'dlg_ConsultaCobrosPagosPendientes2': 
		{
			forms.dlg_ConsultaCobrosPagosPendientesGC.HastaFP = codig_fp
			break;
		}
		case 'FrmAlbaran': 
		{
			forms.FrmAlbaranGC.cfpa_cal = codig_fp
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('Formas Pago').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76F91419-0459-485D-BE74-E28440244C41"}
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
 * @properties={typeid:24,uuid:"ABAEF805-3173-4111-BB4A-7B04808FD280"}
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
			if(frm.indexOf('FormasPago') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				if(dataType == 'str')
				{
					/*globals.GCshowErrorDialog('There is no numeric or date data to find in clientes.', null, 'OK', null, null, null);
					elements.fld_search.selectAll()
					return*/
					forms[frm]['codig_fp'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
					forms[frm]['denom_fp'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
				}
				else if(dataType == 'int')
				{
					forms[frm]['codig_fp'] = searchStr+'%'
					
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
					databaseManager.refreshRecordFromDatabase(forms.dlgFormasPagoGC.foundset,-1);						
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
 * @properties={typeid:24,uuid:"84A9BCE8-DB7C-4FFE-B804-EB080388DD3D"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('codig_fp ASC')
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
 * @properties={typeid:24,uuid:"C7C95DFE-5BFB-4E5F-BB75-1AC7817304CB"}
 */
function btnlblcodigo(event) {
	// TODO Auto-generated method stub
	var foundsetSort = foundset.getCurrentSort()
	if(foundsetSort == 'codig_fp asc')
	{
		foundset.sort('codig_fp desc');
	}
	else
	{
		foundset.sort('codig_fp asc');
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
 * @properties={typeid:24,uuid:"0F4F523A-0500-4E2A-8057-CE5F8EE4DFB7"}
 */
function btnlbldescripcion(event) {
	// TODO Auto-generated method stub
	var foundsetSort = foundset.getCurrentSort()
	if(foundsetSort == 'denom_fp asc')
	{
		foundset.sort('denom_fp desc');
	}
	else
	{
		foundset.sort('denom_fp asc');
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
 * @properties={typeid:24,uuid:"5DA0717C-9858-48D4-8D14-D54837F69AFC"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_cuenta.requestFocus()
}
