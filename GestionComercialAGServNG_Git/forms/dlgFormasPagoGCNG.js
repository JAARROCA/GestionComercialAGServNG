/**
 * @properties={typeid:24,uuid:"875A3E28-0108-4575-B597-4F97586EDBF3"}
 */
function evt_find()
{
	elements.fld_search_cuenta.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"0587E1E2-BFBE-4160-BA25-6E0711C30751"}
 */
function cmd_search() {
	elements.fld_search_cuenta.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"12958054-0DD5-45D3-ADF2-30A038F2F667"}
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
 * @properties={typeid:24,uuid:"AA67A05F-940D-457F-9D5F-82AA36558278"}
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
 * @properties={typeid:24,uuid:"BB682FC4-0876-4AD2-B42C-16E8DE92A0F1"}
 * @SuppressWarnings(deprecated)
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function btn_search()
	{
		/** @type String */
		var frm = 'dlgFormasPagoGCNG';//currentcontroller.getName();
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
					databaseManager.refreshRecordFromDatabase(forms.dlgFormasPagoGCNG.foundset,-1);						
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
 * @properties={typeid:24,uuid:"5CF68073-11F4-4791-87A6-622454AD766B"}
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
 * @properties={typeid:24,uuid:"187BBE50-8CD4-4991-856D-E53493783EA4"}
 */
function btnlblcodigo(event) {
	// TODO Auto-generated method stub
	var foundsetSort = foundset.getCurrentSort()
	if(foundsetSort == 'idcliente asc')
	{
		foundset.sort('idcliente desc');
	}
	else
	{
		foundset.sort('idcliente asc');
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
 * @properties={typeid:24,uuid:"514A8356-FFC6-4A47-961E-6DF319B61243"}
 */
function btnlbldescripcion(event) {
	// TODO Auto-generated method stub
	var foundsetSort = foundset.getCurrentSort()
	if(foundsetSort == 'desccliente asc')
	{
		foundset.sort('desccliente desc');
	}
	else
	{
		foundset.sort('desccliente asc');
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
 * @properties={typeid:24,uuid:"A1274C2E-403F-4991-93D3-7D877BDAF978"}
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
 * @properties={typeid:24,uuid:"51BB2F12-78E1-4FA3-8325-BED2AB14ABF8"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_cuenta.requestFocus()
}
