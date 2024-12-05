/**
 * @properties={typeid:24,uuid:"AA101E04-4599-4674-BBF2-64CA1D0D6D10"}
 */
function _dev()
{
	showError();
}

/**
 * @properties={typeid:24,uuid:"6424D8E8-EFEE-4F87-90AB-0335FFD838BA"}
 */
function _devtemp()
{
	elements.tabs_nav.enabled = false
	plugins.dialogs.showErrorDialog( 'err',  'error','ok')
	elements.tabs_nav.enabled = true
}

/**
 *
 * @properties={typeid:24,uuid:"B9C07039-1015-4D55-A30E-98455C2CC8B8"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_maestrosGC.btn_delete();
}

/**
 *
 * @properties={typeid:24,uuid:"D8664EE0-3D50-48CE-8B69-5DCACC2B367F"}
 */
function cmd_newRecord()
{
	forms.frm_nav_buttons_maestrosGC.btn_add();
}

/**
 *
 * @properties={typeid:24,uuid:"C7D137C7-B81B-418E-BCE5-E665F57F0C61"}
 */
function cmd_printPreview()
{
	forms.frm_nav_buttons_maestrosGC.btn_print();
}

/**
 *
 * @properties={typeid:24,uuid:"85198F18-E700-4434-9BA3-B0BF866D7719"}
 */
function cmd_search() {
	forms.frm_nav_main_maestrosGC.elements.fld_search.requestFocus(false);
}

/**
 *
 * @properties={typeid:24,uuid:"D4880484-DBF4-40E4-AA93-F1287484E0DA"}
 */
function cmd_showAll()
{
	forms.frm_nav_buttons_maestrosGC.btn_showAll();
}

/**
 * @properties={typeid:24,uuid:"0321057C-1BE1-4935-B147-3ED0E6BFE3EF"}
 */
function evt_find()
{
	forms.frm_nav_main_maestrosGC.elements.fld_search.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"BCC6CC12-3908-4AA7-BCA4-D4CFE1CDC115"}
 */
function showError()
{
	globals.core_dlg_elementDisableEnable = new Array('forms.frm_nav_main.elements.tabs_recList','forms.frm_nav_main.elements.tabs_solNav')
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!!','error', null, null, null, null, null);	
}

/**
 * @properties={typeid:24,uuid:"C2AD0984-5278-4EC5-889D-3EE334C78BA2"}
 */
function showInfo()
{
//	globals.showIconDialog('Info', 'This message is just for your information only.','info');
}

/**
*
 * @properties={typeid:24,uuid:"CCD14E11-1DAC-4C5C-9B63-C84DBBB510B3"}
 */
function btn_save()
{
	globals.GCsaveEdits()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"9C2F8946-CA18-49AA-A5A4-B2AE5F878F9D"}
 */
function btn_cancel()
{
	globals.GCcancelEditing()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"4ED84EFE-A681-474D-B42A-341C4FA905F5"}
 */
function doEdit()
{
	if(!globals.GCisEditing()) globals.GCstartEditing()

	var allNames = elements.allnames


	for ( var i = 0 ; i < allNames.length ; i++ )
	{
		//work on fields only - starting with name "fld_"
		if(allNames[i].indexOf('fld_') >= 0)
		{
			//if it's a field - then change color and make editable			
			elements[allNames[i]].bgcolor = '#feffe4'
			elements[allNames[i]]['readOnly'] = false
		}
		if(allNames[i].indexOf('lbl_required') >= 0)
		{
			elements[allNames[i]].visible = true
		}
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			//not the web client so also do the "checkboxes" as well
			if(allNames[i].indexOf('chk_') >= 0)
			{
				//if it's a checkbox - then change color and make editable
				elements[allNames[i]].bgcolor = '#feffe4'
				elements[allNames[i]]['readOnly'] = false
			}
		}*/
	}
	if(controller.getName() == 'FrmArticulosGC') 
	{
		forms.lst_ArticulosDescripcionDetalleGC.elements.fld_desc_detalle_a.bgcolor = '#feffe4'
		forms.lst_ArticulosDescripcionDetalleGC.elements.fld_desc_detalle_a.readOnly = false;
	}

	elements.btn_save.visible = true
	elements.btn_cancel.visible = true
}

/**
 *
 * @properties={typeid:24,uuid:"965EA8BF-9B37-4A35-BD6E-F1873967B1E3"}
 */
function doEdit2()
{
	if(!globals.GCisEditing()) globals.GCstartEditing()

	var allNames = elements.allnames

	for ( var i = 0 ; i < allNames.length ; i++ )
	{
		
			//if it's a field - then change color and make editable			
			elements[allNames[i]].bgcolor = '#feffe4'
			elements[allNames[i]]['readOnly'] = false		
	}

	elements.btn_save.visible = true
	elements.btn_cancel.visible = true
}

/**
 *
 * @properties={typeid:24,uuid:"4606EBBF-83C7-453C-8168-11811305483C"}
 */
function hide_btn_reset_fields()
{
	var allNames = elements.allnames

	for ( var i = 0 ; i < allNames.length ; i++ )
	{
		var etype = elements[allNames[i]].getElementType()
		if (etype == ELEMENT_TYPES.TEXT_FIELD || 
				etype == ELEMENT_TYPES.CALENDAR || 
				etype == ELEMENT_TYPES.COMBOBOX)
		{
			elements[allNames[i]].bgcolor = '#f0f0f0'
		}
		//work on fields only - starting with name "fld_"
		if(allNames[i].indexOf('fld_') >= 0)
		{
			//if it's a field - then change color and make not editable
			elements[allNames[i]].bgcolor = '#f0f0f0'
			elements[allNames[i]]['readOnly'] = true
		}
		if(allNames[i].indexOf('lbl_required') >= 0)
		{
			elements[allNames[i]].visible = false
		}
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			//not the web client so also do the "checkboxes" as well
			if(allNames[i].indexOf('chk_') >= 0)
			{
				//if it's a checkbox - then change color and make editable
				elements[allNames[i]].bgcolor = '#f0f0f0'
				elements[allNames[i]]['readOnly'] = true
			}
		}*/
	}
	if(controller.getName() == 'FrmArticulosGC') 
	{
		forms.lst_ArticulosDescripcionDetalleGC.elements.fld_desc_detalle_a.bgcolor = '#f0f0f0'
		forms.lst_ArticulosDescripcionDetalleGC.elements.fld_desc_detalle_a.readOnly = true;
	}

	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
}

/**
 *
 * @properties={typeid:24,uuid:"1487D6B2-2645-48F0-8AFD-7A994DD2E767"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		foundset.deleteRecord()

		//if there are no records showing - then show all
		if(foundset.getSize() == 0) forms.frm_nav_buttons_maestrosGC.btn_showAll();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"234423FA-3244-452F-81D6-CED9040E32FA"}
 */
function GCbuscar(event) {
	// TODO Auto-generated method stub
	var menu = plugins.window.createPopupMenu();
		menu.addMenuItem('A', Busqueda, null);
		menu.addMenuItem('B', Busqueda, null);
		menu.addMenuItem('C', Busqueda, null);
		menu.addMenuItem('D', Busqueda, null);
		menu.addMenuItem('E', Busqueda, null);
		menu.addMenuItem('F', Busqueda, null);
		menu.addMenuItem('G', Busqueda, null);
		menu.addMenuItem('H', Busqueda, null);
		menu.addMenuItem('I', Busqueda, null);
		menu.addMenuItem('J', Busqueda, null);
		menu.addMenuItem('K', Busqueda, null);
		menu.addMenuItem('L', Busqueda, null);
		menu.addMenuItem('M', Busqueda, null);
		menu.addMenuItem('N', Busqueda, null);
		menu.addMenuItem('Ñ', Busqueda, null);
		menu.addMenuItem('O', Busqueda, null);
		menu.addMenuItem('P', Busqueda, null);
		menu.addMenuItem('Q', Busqueda, null);
		menu.addMenuItem('R', Busqueda, null);
		menu.addMenuItem('S', Busqueda, null);
		menu.addMenuItem('T', Busqueda, null);
		menu.addMenuItem('U', Busqueda, null);
		menu.addMenuItem('V', Busqueda, null);
		menu.addMenuItem('W', Busqueda, null);
		menu.addMenuItem('X', Busqueda, null);
		menu.addMenuItem('Y', Busqueda, null);
		menu.addMenuItem('Z', Busqueda, null);
		
		
			
	
	
	
	if (event.getSource()) {
		// display the popup over the component which is the source of the event
		menu.show(event.getSource(),20,0);					
	}			
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @SuppressWarnings(deprecated)
 * @AllowToRunInFind
 *
 *
 * @properties={typeid:24,uuid:"7D046DAC-1087-4BC8-8209-B5AEDC169EDC"}
 */
function Busqueda(event) 
{
	globals.GCnav_search = arguments[4];
	/** @type String */
	var frm = currentcontroller.getName();
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	/** @type String */
	var search = globals.GCnav_search

	if(search)
	{
		var dataType = 'str'
		var searchStr = search + '%'
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
			//search = new Date(search)
			if(search.indexOf('/') != -1) search = utils.parseDate(search,'dd/MM/yyyy')
			else if(search.indexOf('-') != -1) search = utils.parseDate(search,'dd-MM-yyyy')			
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
		
		
		
		//Encontrar Clientes
		if(frm.indexOf('Clientes') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['desccliente'] = searchStr
				forms[frm].foundset.newRecord()				
			}			
		}
		//Encontrar Proveedores
		else if(frm.indexOf('Proveedores') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['descproveedor'] = searchStr
				forms[frm].foundset.newRecord()				
			}			
		}
		//Encontrar Articulos
		else if(frm.indexOf('Articulos') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['descripcion'] = searchStr
				forms[frm].foundset.newRecord()				
			}			
		}
		//Encontrar Material
		else if(frm.indexOf('Materiales') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['descripcion'] = searchStr
				forms[frm].foundset.newRecord()				
			}			
		}
		//Encontrar Delegaciones
		else if(frm.indexOf('Delegaciones') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['desccliente'] = searchStr
				forms[frm].foundset.newRecord()				
			}			
		}
		//Encontrar Delegaciones
		else if(frm.indexOf('Transportes') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['razonsocial'] = searchStr
				forms[frm].foundset.newRecord()				
			}			
		}
		else if(frm.indexOf('BancosCuentasCargo') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['nombreentidad'] = searchStr
				forms[frm].foundset.newRecord()				
			}			
		}
		//Encontrar Agentes
		else if(frm.indexOf('Agentes') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['descagente'] = searchStr
				forms[frm].foundset.newRecord()				
			}			
		}
		//Encontrar Operarios
		else if(frm.indexOf('Operarios') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'int')
			{
				forms[frm]['idoperario'] = search
				forms[frm].foundset.newRecord()		
			}
			else if(dataType == 'str')
			{
				forms[frm]['nombre'] = searchStr
				forms[frm].foundset.newRecord()	
				forms[frm]['apellido1'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['apellido2'] = searchStr
				forms[frm].foundset.newRecord()
			}			
		}
		//FormaPago FIND
		else if(frm.indexOf('FormaPagoGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'int')
			{
				forms[frm]['codig_fp'] = search+'%'
				forms[frm].foundset.newRecord()
				
			}
			else if(dataType == 'str')
			{
				forms[frm]['codig_fp'] = search+'%'
				forms[frm].foundset.newRecord()
				forms[frm]['denom_fp'] = search+'%'
			}			
		}
		//Familia FIND
		else if(frm.indexOf('FamiliasGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'int')
			{
				forms[frm]['idfamilia'] = search+'%'
				forms[frm].foundset.newRecord()
				
			}
			else if(dataType == 'str')
			{
				forms[frm]['idfamilia'] = search+'%'
				forms[frm].foundset.newRecord()
				forms[frm]['descfamilia'] = search+'%'
			}			
		}
		//Familia FIND
		else if(frm.indexOf('TiposIVAGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'str')
			{
				forms[frm]['desctipoiva'] = search+'%'				
			}			
		}
		//SWIFT Bancos
		else if(frm.indexOf('SwiftBancosGC') >= 0)
		{
			
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'str')
			{
				forms[frm]['idbanco'] = searchStr
				forms[frm].foundset.newRecord()			
				forms[frm]['nombrebanco'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['bic'] = searchStr
			}
		}
		//Unidades
		else if(frm.indexOf('UnidMedidaGC') >= 0)
		{
			
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'str')
			{
				forms[frm]['unidade_id'] = searchStr
				forms[frm].foundset.newRecord()			
				forms[frm]['desc_uni'] = searchStr				
			}
		}
		else if(frm.indexOf('TransportesGC') >= 0)
		{
			
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'str')
			{
				forms[frm]['idtransportista'] = searchStr
				forms[frm].foundset.newRecord()			
				forms[frm]['razonsocial'] = searchStr				
			}
		}
		else if(frm.indexOf('ObservacionGC') >= 0)
		{
			
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?

			if(dataType == 'str')
			{
				forms[frm]['descripcion'] = searchStr				
			}
		}
		

		//perform the search
		var found = forms[frm].controller.search()

		//see if anything was found
		if(found == 0)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
			{
				plugins.webnotificationsToastr.error('No se han encontrado coincidencias con la búsqueda realizada.','¡Error!')
				forms.frm_nav_buttons_maestrosGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				forms.frm_nav_buttons_maestrosGC.btn_showAll()
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', null, null, null, null, null)
			}
		}
		else
		{
			if(frm.indexOf('Clientes') >= 0) forms.lst_ClientesGC.btn_sortAsc()
			else if(frm.indexOf('Proveedores') >= 0) forms.lst_ProveedoresGC.btn_sortAsc()
			else if(frm.indexOf('Articulos') >= 0) forms.lst_ArticulosGC.btn_sortAsc()
			else if(frm.indexOf('Delegaciones') >= 0) forms.lst_DelegacionesGC.btn_sortAsc()
			else if(frm.indexOf('BancosCuentasCargo') >= 0) forms.lst_BancosCuentasCargoGC.btn_sortAsc()
			else if(frm.indexOf('Agentes') >= 0) forms.lst_AgentesGC.btn_sortAsc()
			else if(frm.indexOf('Operarios') >= 0) forms.lst_OperariosGC.btn_sortAsc()
			else if(frm.indexOf('FormaPago') >= 0) forms.lst_FormaPagoGC.btn_sortAsc()
			else if(frm.indexOf('Familias') >= 0) forms.lst_FamiliasGC.btn_sortAsc()
			else if(frm.indexOf('TiposIVA') >= 0) forms.lst_TiposIVAGC.btn_sortAsc()
			else if(frm.indexOf('SwiftBancos') >= 0) forms.lst_SwiftBancosGC.btn_sortAsc()
			else if(frm.indexOf('UnidMedida') >= 0) forms.lst_UnidMedidaGC.btn_sortAsc()
			//show the "show all" button
			forms.frm_nav_buttons_maestrosGC.sub_showShowAll()
		}
	}
	else
	{
		//empty search - so show all
		forms.frm_nav_buttons_maestrosGC.btn_showAll()
		//elements.fld_search.requestFocus(false)
	}
}
