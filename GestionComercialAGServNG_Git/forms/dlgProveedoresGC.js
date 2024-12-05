/**
 * @properties={typeid:24,uuid:"2E162B4F-611D-4AFC-90B3-2BDEE7BA204C"}
 */
function evt_find()
{
	elements.fld_search_cuenta.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"B828BD57-25C0-4116-8043-3D47F1DBEE4D"}
 */
function cmd_search() {
	elements.fld_search_cuenta.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"178E8562-097C-4F01-A140-50E15092119F"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmPedidosCompras': 
		{
			forms.FrmPedidosComprasGC.proveedor = codpro
			break;
		}		
		case 'FrmPetOfertaCompras': 
		{
			forms.FrmPetOfertaComprasGC.codpro = codpro
			forms.FrmPetOfertaComprasGC.evt_changeitem()
			break;
		}		
		case 'FrmAlbaranCompras': 
		{
			forms.FrmAlbaranComprasGC.pro_ap = codpro
			break;
		}		
		case 'FrmFacturasCompras': 
		{
			forms.FrmFacturasComprasGC.pro_cfca = codpro
			forms.FrmFacturasComprasGC.onDataChangeProveedor()
			break;
		}		
		case 'dlg_MaterialProveedorPrecioGC': 
		{
			forms.dlg_MaterialProveedorPrecioGC.codpro = codpro
			forms.dlg_MaterialProveedorPrecioGC.onDataChangeNombre()
			break;
		}		
		case 'dlg_Consulta_FacturasCompras1': 
		{
			forms.dlg_Consulta_FacturasComprasGC.DesdeProveedor = codpro
			break;
		}		
		case 'dlg_Consulta_FacturasCompras2': 
		{
			forms.dlg_Consulta_FacturasComprasGC.HastaProveedor = codpro
			break;
		}
		case 'dlg_Consulta_AlbaranesCompras1': 
		{
			forms.dlg_Consulta_AlbaranesComprasGC.DesdeProveedor = codpro
			break;
		}		
		case 'dlg_Consulta_AlbaranesCompras2': 
		{
			forms.dlg_Consulta_AlbaranesComprasGC.HastaProveedor = codpro
			break;
		}
		case 'dlg_Consulta_PedidosCompras1': 
		{
			forms.dlg_Consulta_PedidosComprasGC.DesdeProveedor = codpro
			break;
		}		
		case 'dlg_Consulta_PedidosCompras2': 
		{
			forms.dlg_Consulta_PedidosComprasGC.HastaProveedor = codpro
			break;
		}
		case 'dlg_ImpresionPedidosCompras1': 
		{
			forms.dlg_ImpresionPedidosComprasGC.DesdeProveedor = codpro
			break;
		}		
		case 'dlg_ImpresionPedidosCompras2': 
		{
			forms.dlg_ImpresionPedidosComprasGC.HastaProveedor = codpro
			break;
		}
		case 'dlg_ConsultaCobrosPagosPendientes1': 
		{
			forms.dlg_ConsultaCobrosPagosPendientesGC.DesdeCuenta = codpro
			break;
		}
		case 'dlg_ConsultaCobrosPagosPendientes2': 
		{
			forms.dlg_ConsultaCobrosPagosPendientesGC.HastaCuenta = codpro
			break;
		}
		case 'dlg_Consulta_ComprasArticulo1': 
		{
			forms.dlg_Consulta_ComprasArticulosGC.DesdeProveedor = codpro
			break;
		}
		case 'dlg_Consulta_ComprasArticulo2': 
		{
			forms.dlg_Consulta_ComprasArticulosGC.HastaProveedor = codpro
			break;
		}
		case 'dlg_Consulta_ComprasProveedores1': 
		{
			forms.dlg_Consulta_ComprasProveedoresGC.DesdeProveedor = codpro
			break;
		}
		case 'dlg_Consulta_ComprasProveedores2': 
		{
			forms.dlg_Consulta_ComprasProveedoresGC.HastaProveedor = codpro
			break;
		}
		case 'dlg_Consulta_ComprasFamilias1': 
		{
			forms.dlg_Consulta_ComprasFamiliasGC.DesdeProveedor = codpro
			break;
		}
		case 'dlg_Consulta_ComprasFamilias2': 
		{
			forms.dlg_Consulta_ComprasFamiliasGC.HastaProveedor = codpro
			break;
		}
		case 'dlg_FacturacionProveedoresGC1': 
		{
			forms.dlg_FacturacionProveedoresGC.dcli = codpro
			forms.dlg_FacturacionProveedoresGC.onDataChangeDesdeCliente()
			break;
		}
		case 'dlg_FacturacionProveedoresGC2': 
		{
			forms.dlg_FacturacionProveedoresGC.hcli = codpro
			forms.dlg_FacturacionProveedoresGC.onDataChangeHastaCliente()
			break;
		}
		case 'dlg_FacturacionProveedoresAgnosGC1': 
		{
			forms.dlg_FacturacionProveedoresAgnosGC.dcli = codpro
			forms.dlg_FacturacionProveedoresAgnosGC.onDataChangeDesdeCliente()
			break;
		}
		case 'dlg_FacturacionProveedoresAgnosGC2': 
		{
			forms.dlg_FacturacionProveedoresAgnosGC.hcli = codpro
			forms.dlg_FacturacionProveedoresAgnosGC.onDataChangeHastaCliente()
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('Proveedores').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F7066D7F-D79B-4256-B419-00700506EE93"}
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
 * @properties={typeid:24,uuid:"A439C3AD-CE14-444D-B546-206AB8A62568"}
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
			if(frm.indexOf('Proveedores') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				
					/*globals.GCshowErrorDialog('There is no numeric or date data to find in clientes.', null, 'OK', null, null, null);
					elements.fld_search.selectAll()
					return*/
				if(dataType == 'int')
				{
					forms[frm]['codpro'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
					forms[frm]['cif'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
				}	
				else 
				{
					forms[frm]['descproveedor'] = searchStr+'%'
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
					databaseManager.refreshRecordFromDatabase(forms.dlgProveedoresGC.foundset,-1);						
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
 * @properties={typeid:24,uuid:"DC017EB5-4457-48C0-9DAB-43F6B785CC0E"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('codpro ASC')
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
 * @properties={typeid:24,uuid:"C3BA0DE1-7684-4C4C-ABE0-7CD31E6409DD"}
 */
function btnlblcodigo(event) {
	// TODO Auto-generated method stub
	var foundsetSort = foundset.getCurrentSort()
	if(foundsetSort == 'codpro asc')
	{
		foundset.sort('codpro desc');
	}
	else
	{
		foundset.sort('codpro asc');
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
 * @properties={typeid:24,uuid:"ACF6203C-4C12-48E4-B118-EB21802188FD"}
 */
function btnlbldescripcion(event) {
	// TODO Auto-generated method stub
	var foundsetSort = foundset.getCurrentSort()
	if(foundsetSort == 'descproveedor asc')
	{
		foundset.sort('descproveedor desc');
	}
	else
	{
		foundset.sort('descproveedor asc');
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
 *
 * @properties={typeid:24,uuid:"AB4DCE53-10EA-47FA-902C-6B821AD72BDD"}
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
 *
 * @properties={typeid:24,uuid:"37AE281F-EA59-4CF4-8B56-EF5E056ACB0C"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_cuenta.requestFocus()
}
