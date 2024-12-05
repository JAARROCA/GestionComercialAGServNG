/**
 * @properties={typeid:24,uuid:"35363AAD-3DF6-415F-9520-3EE03F965246"}
 */
function evt_find()
{
	elements.fld_search_cuenta.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"0327F219-1709-4A79-BA15-8EE915052322"}
 */
function cmd_search() {
	elements.fld_search_cuenta.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6BDD3E77-FA4E-4416-91E9-CC79FD03C7CB"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'dlg_Linea_Factura': 
		{
			forms.dlg_Linea_FacturaGC.ref_lfa = codigo
			forms.dlg_Linea_FacturaGC.onDataChangerefpieza()
			break;
		}
		case 'dlg_Linea_FacturaCompra': 
		{
			forms.dlg_Linea_FacturaComprasGC.ref_lfca = codigo
			forms.dlg_Linea_FacturaComprasGC.onDataChangerefpieza()
			break;
		}
		case 'dlg_Linea_FacturaProforma': 
		{
			forms.dlg_Linea_FacturaProformaGC.ref_lfa = codigo
			forms.dlg_Linea_FacturaProformaGC.onDataChangerefpieza()
			break;
		}
		case 'dlg_Linea_Nota': 
		{
			forms.dlg_Linea_NotaGC.ref_lfa = codigo
			forms.dlg_Linea_NotaGC.onDataChangerefpieza()
			break;
		}
		case 'dlg_Linea_Presupuesto': 
		{
			forms.dlg_Linea_PresupuestoGC.refm_lof = codigo
			forms.dlg_Linea_PresupuestoGC.onDataChangerefpieza()
			break;
		}		
		case 'dlg_Linea_Pedido': 
		{
			forms.dlg_Linea_PedidoGC.refm_lot = codigo
			forms.dlg_Linea_PedidoGC.onDataChangerefpieza()
			break;
		}		
		case 'dlg_Linea_Albaran': 
		{
			forms.dlg_Linea_AlbaranGC.refm_lal = codigo
			forms.dlg_Linea_AlbaranGC.onDataChangerefpieza()
			break;
		}		
		case 'dlg_Linea_PetOfertaCompras': 
		{
			forms.dlg_Linea_PetOfertaComprasGC.ref = codigo
			forms.dlg_Linea_PetOfertaComprasGC.onDataChangerefpieza()
			break;
		}		
		case 'dlg_Linea_PedidoCompras': 
		{
			forms.dlg_Linea_PedidoComprasGC.refpieza = codigo
			forms.dlg_Linea_PedidoComprasGC.onDataChangerefpieza()
			break;
		}		
		case 'dlg_Linea_AlbaranCompras': 
		{
			forms.dlg_Linea_AlbaranComprasGC.refa_lap = codigo
			forms.dlg_Linea_AlbaranComprasGC.onDataChangerefpieza()
			break;
		}	
		case 'dlg_ProveedorMaterialPrecioGC': 
		{
			forms.dlg_ProveedorMaterialPrecioGC.idarticulo = codigo
			forms.dlg_ProveedorMaterialPrecioGC.onDataChangeNombre()
			break;
		}	
		case 'FrmMoviArtiGC': 
		{
			forms.FrmMoviArtiGC.cod_ms = codigo
			forms.FrmMoviArtiGC.sub_setNewNumero()
			break;
		}
		case 'dlg_Inventario1': 
		{
			forms.dlg_InventarioGC.DesdeArticulo = codigo
			break;
		}
		case 'dlg_Inventario2': 
		{
			forms.dlg_InventarioGC.HastaArticulo = codigo
			break;
		}
		case 'dlg_ClientesArticuloPrecioGC': 
		{
			forms.dlg_ClientesArticuloPrecioGC.idarticulo = codigo
			forms.dlg_ClientesArticuloPrecioGC.elements.precio.requestFocus()
			break;
		}
		case 'dlg_Extracto_Mov1': 
		{
			forms.dlg_Extracto_MovGC.DesdeArticulo = codigo
			break;
		}
		case 'dlg_Extracto_Mov2': 
		{
			forms.dlg_Extracto_MovGC.HastaArticulo = codigo
			break;
		}
		case 'dlg_Diario_Mov1': 
		{
			forms.dlg_Diario_MovGC.DesdeArticulo = codigo
			break;
		}
		case 'dlg_Diario_Mov2': 
		{
			forms.dlg_Diario_MovGC.HastaArticulo = codigo
			break;
		}
		case 'dlg_Consulta_VentasArticulo1': 
		{
			forms.dlg_Consulta_VentasArticulosGC.DesdeArticulo = codigo
			break;
		}
		case 'dlg_Consulta_VentasArticulo2': 
		{
			forms.dlg_Consulta_VentasArticulosGC.HastaArticulo = codigo
			break;
		}
		case 'dlg_Consulta_VentasClientes1': 
		{
			forms.dlg_Consulta_VentasClientesGC.DesdeArticulo = codigo
			break;
		}
		case 'dlg_Consulta_VentasClientes2': 
		{
			forms.dlg_Consulta_VentasClientesGC.HastaArticulo = codigo
			break;
		}
		case 'dlg_Consulta_ComprasArticulo1': 
		{
			forms.dlg_Consulta_ComprasArticulosGC.DesdeArticulo = codigo
			break;
		}
		case 'dlg_Consulta_ComprasArticulo2': 
		{
			forms.dlg_Consulta_ComprasArticulosGC.HastaArticulo = codigo
			break;
		}
		case 'dlg_Consulta_ComprasProveedores1': 
		{
			forms.dlg_Consulta_ComprasProveedoresGC.DesdeArticulo = codigo
			break;
		}
		case 'dlg_Consulta_ComprasProveedores2': 
		{
			forms.dlg_Consulta_ComprasProveedoresGC.HastaArticulo = codigo
			break;
		}
		case 'dlg_Consulta_ComprasFamilias1': 
		{
			forms.dlg_Consulta_ComprasFamiliasGC.DesdeArticulo = codigo
			break;
		}
		case 'dlg_Consulta_ComprasFamilias2': 
		{
			forms.dlg_Consulta_ComprasFamiliasGC.HastaArticulo = codigo
			break;
		}
		case 'dlg_Consulta_BeneficiosClientes1': 
		{
			forms.dlg_Consulta_BeneficiosClientesGC.DesdeArticulo = codigo
			break;
		}
		case 'dlg_Consulta_BeneficiosClientes2': 
		{
			forms.dlg_Consulta_BeneficiosClientesGC.HastaArticulo = codigo
			break;
		}
		case 'dlg_Consulta_BeneficiosArticulos1': 
		{
			forms.dlg_Consulta_BeneficiosArticulosGC.DesdeArticulo = codigo
			break;
		}
		case 'dlg_Consulta_BeneficiosArticulos2': 
		{
			forms.dlg_Consulta_BeneficiosArticulosGC.HastaArticulo = codigo
			break;
		}
		case 'dlg_Consulta_BeneficiosFamilias1': 
		{
			forms.dlg_Consulta_BeneficiosFamiliasGC.DesdeArticulo = codigo
			break;
		}
		case 'dlg_Consulta_BeneficiosFamilias2': 
		{
			forms.dlg_Consulta_BeneficiosFamiliasGC.HastaArticulo = codigo
			break;
		}
		default: break;
	}
		
	controller.recreateUI()
	application.getWindow('Materiales').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9875D86D-70D3-48AF-A1FB-0A59B9E08BC7"}
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
 * @properties={typeid:24,uuid:"0E0C2068-3004-41AA-81FF-8DA26C647261"}
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
			if(frm.indexOf('Materiales') >= 0)
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
					databaseManager.refreshRecordFromDatabase(forms.dlgMaterialesGC.foundset,-1);						
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
 * @properties={typeid:24,uuid:"711B0FAB-95A0-4CEA-9311-A978C9F99F1B"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	var success = foundset.removeFoundSetFilterParam('FiltradoMaterialesActivos') 
	success = foundset.addFoundSetFilterParam('materialobsoleto','!=',1,'FiltradoMaterialesActivos') 
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
 * @properties={typeid:24,uuid:"0310641B-A5F2-4183-A5B6-20CCA07018E4"}
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
 * @properties={typeid:24,uuid:"72D047B3-28B4-47CD-BCB0-0A6A5295C2D0"}
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
 * @properties={typeid:24,uuid:"D35A3E6A-58C4-4E77-8398-2745F62A64F3"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_cuenta.requestFocus()
}
