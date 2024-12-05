/**
 * @properties={typeid:24,uuid:"4F4D8425-FE2C-4421-B31C-2119378779D3"}
 */
function evt_find()
{
	elements.fld_search_cuenta.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"5B8A5040-0096-40D4-B7A9-425E60D02D90"}
 */
function cmd_search() {
	elements.fld_search_cuenta.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ACFF94FA-D8A0-4C73-9998-A57F30F62733"}
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
			forms.dlg_ClientesArticuloPrecioGC.onDataChangeNombre()
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
	application.getWindow('Articulos').hide();
	globals.GCenableBgElements();
}

/**
 * Callback method for when form is shown.
 *
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"851E3CD3-31C4-4552-8D89-3C680B4109B0"}
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
 * @properties={typeid:24,uuid:"1295191C-E440-43B4-BA80-D900AC2E3C47"}
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
			if(frm.indexOf('Articulos') >= 0)
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
					databaseManager.refreshRecordFromDatabase(forms.dlgArticulosGC.foundset,-1);						
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
 * @properties={typeid:24,uuid:"F7998530-D414-4180-9DAC-A0848992E696"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	var success = foundset.removeFoundSetFilterParam('FiltradoArticulosActivos') 
	success = foundset.addFoundSetFilterParam('situacion','=','A','FiltradoArticulosActivos') 
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
 * @properties={typeid:24,uuid:"0B87535E-8DDF-4E57-9500-2D209D65606B"}
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
 * @properties={typeid:24,uuid:"A4632A15-12BA-4C89-9B14-77F6CB6EF9BE"}
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
 * @properties={typeid:24,uuid:"59A8DF5E-A01D-4A17-B271-6ACF1C898B1C"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_cuenta.requestFocus()
}
