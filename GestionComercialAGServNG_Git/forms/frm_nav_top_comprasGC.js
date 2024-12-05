/**
 * @properties={typeid:24,uuid:"20C1D129-5367-4468-A8E7-35ABBBA8C69E"}
 */
function _dev()
{
	showError();
}

/**
 * @properties={typeid:24,uuid:"D4816E60-3E3B-4C96-9345-F345ACEA376A"}
 */
function _devtemp()
{
	elements.tabs_nav.enabled = false
	plugins.dialogs.showErrorDialog( 'err',  'error','ok')
	elements.tabs_nav.enabled = true
}

/**
 *
 * @properties={typeid:24,uuid:"82567C7F-9D52-4625-BBFC-14C14F5EAF5B"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_comprasGC.btn_delete();
}

/**
 *
 * @properties={typeid:24,uuid:"E4995083-A82C-42A8-B27A-E6F885BEE545"}
 */
function cmd_newRecord()
{
	forms.frm_nav_buttons_comprasGC.btn_add();
}

/**
 *
 * @properties={typeid:24,uuid:"B494B429-C83B-47DD-BE3C-DC332684017F"}
 */
function cmd_printPreview()
{
	forms.frm_nav_buttons_comprasGC.btn_print();
}

/**
 *
 * @properties={typeid:24,uuid:"03C5647B-BB08-49A4-89C8-3C17E823229C"}
 */
function cmd_search() {
	forms.frm_nav_main_comprasGC.elements.fld_search.requestFocus(false);
}

/**
 *
 * @properties={typeid:24,uuid:"3ACF3FEC-98FE-4736-95C6-D632CA2938AF"}
 */
function cmd_showAll()
{
	forms.frm_nav_buttons_comprasGC.btn_showAll();
}

/**
 * @properties={typeid:24,uuid:"1B9DCE2A-690E-42E0-B17E-153ECEF83BE9"}
 */
function evt_find()
{
	forms.frm_nav_main_comprasGC.elements.fld_search.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"722812B2-B19F-4AB0-AA22-966DF2479D95"}
 */
function showError()
{
	globals.core_dlg_elementDisableEnable = new Array('forms.frm_nav_main.elements.tabs_recList','forms.frm_nav_main.elements.tabs_solNav')
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!!','error', null, null, null, null, null);	
}

/**
 * @properties={typeid:24,uuid:"C3D148AC-B1FF-4FB3-B6BA-6E5D91D38035"}
 */
function showInfo()
{
//	globals.showIconDialog('Info', 'This message is just for your information only.','info');
}

/**
*
 * @properties={typeid:24,uuid:"CA7045AA-00E0-42D6-B86D-D2ABCFAFA63C"}
 */
function btn_save()
{
	globals.GCsaveEdits()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"93D25477-F1DE-4558-A447-FA483BDFAAE4"}
 */
function btn_cancel()
{
	globals.GCcancelEditing()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"22C46F36-3596-4000-991B-6B0F21913C6D"}
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

	elements.btn_save.visible = true
	elements.btn_cancel.visible = true
}

/**
 *
 * @properties={typeid:24,uuid:"36B2E145-0A17-49A4-ACEC-5497517BF4D9"}
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
 * @properties={typeid:24,uuid:"5F36E3E2-C158-4047-9F13-44F5AB6F1302"}
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

	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
}

/**
 *
 * @properties={typeid:24,uuid:"993DB2E2-9013-4A0B-829B-6D191794F492"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Delete')
	{
		foundset.deleteRecord()

		//if there are no records showing - then show all
		if(foundset.getSize() == 0) forms.frm_nav_buttons_comprasGC.btn_showAll();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"64C86130-284D-4D27-8E7F-EA8CC9D61A88"}
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
 * @properties={typeid:24,uuid:"74634759-E3D8-40A1-A198-B1E1188C4F00"}
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
		
		
		
		
		if(frm.indexOf('FacturasComprasGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['GCtbfacturacompracabecera_to_tbmaestroproveedores.descproveedor'] = searchStr
				forms[frm].foundset.newRecord()				
			}				
		}
		else if(frm.indexOf('AlbaranComprasGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['GCalbapro_to_tbmaestroproveedores.descproveedor'] = searchStr
				forms[frm].foundset.newRecord()				
			}				
		}
		else if(frm.indexOf('PedidosComprasGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['GCtbpedidocompracabecera_to_tbmaestroproveedores.descproveedor'] = searchStr
				forms[frm].foundset.newRecord()				
			}				
		}
		else if(frm.indexOf('PetOfertaComprasGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['GCtbpetofertacompracabecera_to_tbmaestroproveedores.descproveedor'] = searchStr
				forms[frm].foundset.newRecord()				
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
				forms.frm_nav_buttons_comprasGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				forms.frm_nav_buttons_comprasGC.btn_showAll()
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', null, null, null, null, null)
			}
		}
		else
		{
			//show the "show all" button
			forms.frm_nav_buttons_comprasGC.sub_showShowAll()
		}
	}
	else
	{
		//empty search - so show all
		//forms.frm_nav_buttons.btn_showAll()
		//elements.fld_search.requestFocus(false)
	}
}
