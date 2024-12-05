/**
 * @properties={typeid:24,uuid:"D80913E7-E8DC-48DD-B549-5A3BFB99FF7F"}
 */
function evt_find()
{
	elements.fld_search_cuenta.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"16472A2B-3C8E-461D-8141-DADFF901404E"}
 */
function cmd_search() {
	elements.fld_search_cuenta.requestFocus(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD6EC9B7-B5AA-47C3-AA2F-655F6F2F05CC"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var frm=globals.GCFormulario;
	switch( frm )
	{
		case 'FrmPresupuestos': 
		{
			forms.FrmPresupuestosGC.clie_cof = idcliente
			forms.FrmPresupuestosGC.evt_changeItem(event)
			break;
		}
		case 'FrmFacturas': 
		{
			forms.FrmFacturasGC.clie_cfa = idcliente
			forms.FrmFacturasGC.onDataChangeCliente(event)
			break;
		}		
		case 'dlg_FacturacionClientesGC1': 
		{
			forms.dlg_FacturacionClientesGC.dcli = idcliente	
			forms.dlg_FacturacionClientesGC.onDataChangeDesdeCliente()
			break;
		}		
		case 'dlg_FacturacionClientesGC2': 
		{
			forms.dlg_FacturacionClientesGC.hcli = idcliente	
			forms.dlg_FacturacionClientesGC.onDataChangeHastaCliente()
			break;
		}		
		case 'dlg_FacturacionClientesAgnosGC1': 
		{
			forms.dlg_FacturacionClientesAgnosGC.dcli = idcliente	
			forms.dlg_FacturacionClientesAgnosGC.onDataChangeDesdeCliente()
			break;
		}		
		case 'dlg_FacturacionClientesAgnosGC2': 
		{
			forms.dlg_FacturacionClientesAgnosGC.hcli = idcliente	
			forms.dlg_FacturacionClientesAgnosGC.onDataChangeHastaCliente()
			break;
		}		
		case 'FrmFacturasProforma': 
		{
			forms.FrmFacturasProformaGC.clie_cfa = idcliente
			forms.FrmFacturasProformaGC.onDataChangeCliente()
			break;
		}		
		case 'FrmNotas': 
		{
			forms.FrmNotasGC.clie_cfa = idcliente
			forms.FrmNotasGC.onDataChangeCliente()
			break;
		}		
		case 'FrmAlbaran': 
		{
			forms.FrmAlbaranGC.clie_cal = idcliente
			forms.FrmAlbaranGC.evt_changeItem(event)
			break;
		}		
		case 'FrmPedidos': 
		{
			forms.FrmPedidosGC.clie_cot = idcliente
			forms.FrmPedidosGC.evt_changeItem()
			break;
		}		
		case 'dlg_DiarioNotas1': 
		{
			forms.dlg_DiarioNotasGC.DesdeCliente = idcliente
			break;
		}		
		case 'dlg_DiarioNotas2': 
		{
			forms.dlg_DiarioNotasGC.HastaCliente = idcliente
			break;
		}
		case 'dlg_ArticuloClientesPrecioGC': 
		{
			forms.dlg_ArticuloClientesPrecioGC.idcliente = idcliente
			forms.dlg_ArticuloClientesPrecioGC.onDataChangeNombre()
			break;
		}		
		case 'dlg_DiarioFacturacion1': 
		{
			forms.dlg_DiarioFacturacionGC.DesdeCliente = idcliente
			break;
		}		
		case 'dlg_DiarioFacturacion2': 
		{
			forms.dlg_DiarioFacturacionGC.HastaCliente = idcliente
			break;
		}
		case 'dlg_ImpresionFacturas1': 
		{
			forms.dlg_ImpresionFacturasGC.DesdeCliente = idcliente
			forms.dlg_ImpresionFacturasGC.onDataChangeDesdeCliente()
			break;
		}		
		case 'dlg_ImpresionFacturas2': 
		{
			forms.dlg_ImpresionFacturasGC.HastaCliente = idcliente
			forms.dlg_ImpresionFacturasGC.onDataChangeHastaCliente()
			break;
		}
		case 'dlg_ImpresionFacturasTBAI1': 
		{
			forms.dlg_ImpresionFacturasTBAIGC.DesdeCliente = idcliente
			//forms.dlg_ImpresionFacturasTBAIGC.onDataChangeDesdeCliente()
			break;
		}		
		case 'dlg_ImpresionFacturasTBAI2': 
		{
			forms.dlg_ImpresionFacturasTBAIGC.HastaCliente = idcliente
			//forms.dlg_ImpresionFacturasTBAIGC.onDataChangeHastaCliente()
			break;
		}
		case 'dlg_ImpresionFacturasVERIFACTU1': 
		{
			forms.dlg_ImpresionFacturasVERIFACTUGC.DesdeCliente = idcliente
			//forms.dlg_ImpresionFacturasTBAIGC.onDataChangeDesdeCliente()
			break;
		}		
		case 'dlg_ImpresionFacturasVERIFACTU2': 
		{
			forms.dlg_ImpresionFacturasVERIFACTUGC.HastaCliente = idcliente
			//forms.dlg_ImpresionFacturasTBAIGC.onDataChangeHastaCliente()
			break;
		}
		case 'dlg_ImpresionFacturasProforma1': 
		{
			forms.dlg_ImpresionFacturasProformaGC.DesdeCliente = idcliente
			forms.dlg_ImpresionFacturasProformaGC.onDataChangeDesdeCliente()
			break;
		}		
		case 'dlg_ImpresionFacturasProforma2': 
		{
			forms.dlg_ImpresionFacturasProformaGC.HastaCliente = idcliente
			forms.dlg_ImpresionFacturasProformaGC.onDataChangeHastaCliente()
			break;
		}
		case 'dlg_ImpresionNotas1': 
		{
			forms.dlg_ImpresionNotasGC.DesdeCliente = idcliente;
			forms.dlg_ImpresionNotasGC.onDataChangeDesdeCliente()
			break;
		}		
		case 'dlg_ImpresionNotas2': 
		{
			forms.dlg_ImpresionNotasGC.HastaCliente = idcliente;
			forms.dlg_ImpresionNotasGC.onDataChangeHastaCliente()
			break;
		}
		case 'dlg_ImpresionAlbaranes1': 
		{
			forms.dlg_ImpresionAlbaranesGC.DesdeCliente = idcliente
			forms.dlg_ImpresionAlbaranesGC.onDataChangeDesdeCliente()
			break;
		}		
		case 'dlg_ImpresionAlbaranes2': 
		{
			forms.dlg_ImpresionAlbaranesGC.HastaCliente = idcliente
			forms.dlg_ImpresionAlbaranesGC.onDataChangeHastaCliente()
			break;
		}
		case 'dlg_ImpresionPresupuestos1': 
		{
			forms.dlg_ImpresionPresupuestosGC.DesdeCliente = idcliente
			forms.dlg_ImpresionPresupuestosGC.onDataChangeDesdeCliente()
			break;
		}		
		case 'dlg_ImpresionPresupuestos2': 
		{
			forms.dlg_ImpresionPresupuestosGC.HastaCliente = idcliente
			forms.dlg_ImpresionPresupuestosGC.onDataChangeHastaCliente()
			break;
		}
		case 'dlg_Consulta_AlbaranesPendientes1': 
		{
			forms.dlg_Consulta_AlbaranesPendientesGC.DesdeCliente = idcliente
			break;
		}		
		case 'dlg_Consulta_AlbaranesPendientes2': 
		{
			forms.dlg_Consulta_AlbaranesPendientesGC.HastaCliente = idcliente
			break;
		}
		case 'dlg_Consulta_Albaran1': 
		{
			forms.dlg_Consulta_AlbaranGC.DesdeCliente = idcliente
			break;
		}		
		case 'dlg_Consulta_Albaran2': 
		{
			forms.dlg_Consulta_AlbaranGC.HastaCliente = idcliente
			break;
		}
		case 'dlg_Consulta_Presupuestos1': 
		{
			forms.dlg_Consulta_PresupuestosGC.DesdeCliente = idcliente
			break;
		}		
		case 'dlg_Consulta_Presupuestos2': 
		{
			forms.dlg_Consulta_PresupuestosGC.HastaCliente = idcliente
			break;
		}
		case 'dlg_Generacion_Factura5GC': 
		{
			forms.dlg_Generacion_Factura5GC.CLI = idcliente;
			forms.dlg_Generacion_Factura5GC.evt_changecliente()
			break;
		}
		case 'dlg_ConsultaCobrosPagosPendientes1': 
		{
			forms.dlg_ConsultaCobrosPagosPendientesGC.DesdeCuenta = idcliente;
			break;
		}
		case 'dlg_ConsultaCobrosPagosPendientes2': 
		{
			forms.dlg_ConsultaCobrosPagosPendientesGC.HastaCuenta = idcliente;
			break;
		}
		case 'dlg_Consulta_VentasArticulo1': 
		{
			forms.dlg_Consulta_VentasArticulosGC.DesdeCliente = idcliente;
			break;
		}
		case 'dlg_Consulta_VentasArticulo2': 
		{
			forms.dlg_Consulta_VentasArticulosGC.HastaCliente = idcliente;
			break;
		}
		case 'dlg_Consulta_VentasZonas1': 
		{
			forms.dlg_Consulta_VentaZonasGC.DesdeCliente = idcliente;
			break;
		}
		case 'dlg_Consulta_VentasZonas2': 
		{
			forms.dlg_Consulta_VentaZonasGC.HastaCliente = idcliente;
			break;
		}
		case 'dlg_Consulta_VentasClientes1': 
		{
			forms.dlg_Consulta_VentasClientesGC.DesdeCliente = idcliente;
			break;
		}
		case 'dlg_Consulta_VentasClientes2': 
		{
			forms.dlg_Consulta_VentasClientesGC.HastaCliente = idcliente;
			break;
		}
		case 'dlg_Consulta_BeneficiosClientes1': 
		{
			forms.dlg_Consulta_BeneficiosClientesGC.DesdeCliente = idcliente;
			break;
		}
		case 'dlg_Consulta_BeneficiosClientes2': 
		{
			forms.dlg_Consulta_BeneficiosClientesGC.HastaCliente = idcliente;
			break;
		}
		case 'dlg_Consulta_BeneficiosArticulos1': 
		{
			forms.dlg_Consulta_BeneficiosArticulosGC.DesdeCliente = idcliente;
			break;
		}
		case 'dlg_Consulta_BeneficiosArticulos2': 
		{
			forms.dlg_Consulta_BeneficiosArticulosGC.HastaCliente = idcliente;
			break;
		}
		case 'dlg_Consulta_BeneficiosFamilias1': 
		{
			forms.dlg_Consulta_BeneficiosFamiliasGC.DesdeCliente = idcliente;
			break;
		}
		case 'dlg_Consulta_BeneficiosFamilias2': 
		{
			forms.dlg_Consulta_BeneficiosFamiliasGC.HastaCliente = idcliente;
			break;
		}
		case 'dlg_ExportarFacturasFacturaEGC1': 
		{
			forms.dlg_ExportarFacturasFacturaEGC.DesdeCliente = idcliente;
			forms.dlg_ExportarFacturasFacturaEGC.onDataChangeDesdeCliente()
			break;
		}
		case 'dlg_ExportarFacturasFacturaEGC2': 
		{
			forms.dlg_ExportarFacturasFacturaEGC.HastaCliente = idcliente;
			forms.dlg_ExportarFacturasFacturaEGC.onDataChangeHastaCliente()
			break;
		}
		case 'dlg_ClientesGC': 
		{
			forms.dlg_ClientesGC.ClienteID = idcliente;
			forms.dlg_ClientesGC.onDataChangeListadoClientes()
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
 * @properties={typeid:24,uuid:"16117479-B506-4C01-9EB6-EBB0645292BD"}
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
 * @properties={typeid:24,uuid:"698A8A96-1A15-4498-B759-3FF9E4F904AB"}
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
			if(frm.indexOf('Clientes') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				
					/*globals.GCshowErrorDialog('There is no numeric or date data to find in clientes.', null, 'OK', null, null, null);
					elements.fld_search.selectAll()
					return*/
				if(dataType == 'int')
				{
					forms[frm]['idcliente'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
					forms[frm]['cif'] = searchStr+'%'
					forms[frm].foundset.newRecord()	
				}	
				else 
				{
					forms[frm]['desccliente'] = searchStr+'%'
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
					databaseManager.refreshRecordFromDatabase(forms.dlgClientesGC.foundset,-1);						
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
 * @properties={typeid:24,uuid:"B0D9EE96-4CFE-4600-8E81-39E482B17B9B"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	controller.setSelectedIndex(1)
	foundset.sort('idcliente ASC')	
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
 * @properties={typeid:24,uuid:"9122F4E3-70CA-4DDE-B1BD-6778466947EE"}
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
 * @properties={typeid:24,uuid:"190072C9-ECA0-4C39-8943-C4EB5A7A7AB7"}
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
 * @properties={typeid:24,uuid:"EBB0DEAF-6FE0-4696-B18F-2220C11C6B20"}
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
 * @properties={typeid:24,uuid:"DE11D17B-C8FB-4848-9FFF-6E0793A7DAF3"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_cuenta.requestFocus()
}
