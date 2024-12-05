/**
 * @properties={typeid:24,uuid:"14A03B61-8BF4-4B01-990C-5F5043AA58BE"}
 */
function _dev()
{
	showError();
}

/**
 * @properties={typeid:24,uuid:"8CC5FECA-3FF1-41B8-889B-4234C327A14A"}
 */
function _devtemp()
{
	elements.tabs_nav.enabled = false
	plugins.dialogs.showErrorDialog( 'err',  'error','ok')
	elements.tabs_nav.enabled = true
}

/**
 *
 * @properties={typeid:24,uuid:"A6F4F713-D8D5-4DF3-AAA3-68031A0EDD5C"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_presupuestosGC.btn_delete();
}

/**
 *
 * @properties={typeid:24,uuid:"8FD1F514-3098-4D58-B527-86DD83E6D5F8"}
 */
function cmd_newRecord()
{
	forms.frm_nav_buttons_presupuestosGC.btn_add();
}

/**
 *
 * @properties={typeid:24,uuid:"CAF134A4-61F8-452D-9524-7CF146585796"}
 */
function cmd_printPreview()
{
	forms.frm_nav_buttons_presupuestosGC.btn_print();
}

/**
 *
 * @properties={typeid:24,uuid:"34DA5A19-C4B2-4CFC-AC75-538F575643EC"}
 */
function cmd_search() {
	forms.frm_nav_main_presupuestosGC.elements.fld_search.requestFocus(false);
}

/**
 *
 * @properties={typeid:24,uuid:"545C7B6E-4D6E-40F9-8D6F-09F2A9D6AD1B"}
 */
function cmd_showAll()
{
	forms.frm_nav_buttons_presupuestosGC.btn_showAll();
}

/**
 * @properties={typeid:24,uuid:"D30F81FF-8C3F-4C20-AD58-187A0498B202"}
 */
function evt_find()
{
	forms.frm_nav_main_presupuestosGC.elements.fld_search.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"B4F934D1-E566-4D26-B88E-D8DE840E8173"}
 */
function showError()
{
	globals.core_dlg_elementDisableEnable = new Array('forms.frm_nav_main.elements.tabs_recList','forms.frm_nav_main.elements.tabs_solNav')
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!!','error', null, null, null, null, null);	
}

/**
 * @properties={typeid:24,uuid:"FE0C5BF5-332D-4F8D-9E23-A15A5006D139"}
 */
function showInfo()
{
//	globals.showIconDialog('Info', 'This message is just for your information only.','info');
}

/**
*
 * @properties={typeid:24,uuid:"77537DA7-A014-4F0B-8010-8FC9CBBE26A2"}
 */
function btn_save()
{
	globals.GCsaveEdits()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"9EFA15D7-0A78-4D5C-805C-7616F3019232"}
 */
function btn_cancel()
{
	globals.GCcancelEditing()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"0B50D2B9-C211-4275-A86C-4E5556EC4337"}
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
 * @properties={typeid:24,uuid:"6A1A1F46-FA99-45DB-9156-3038CB5B3356"}
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
 * @properties={typeid:24,uuid:"704B83FD-2461-406D-94EA-A2C1E8CEE680"}
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
 * @properties={typeid:24,uuid:"BE52EF4B-B47C-4D67-91BB-0015AC7E4833"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Delete')
	{
		foundset.deleteRecord()

		//if there are no records showing - then show all
		if(foundset.getSize() == 0) forms.frm_nav_buttons_presupuestosGC.btn_showAll();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C09F9EFF-6F3D-4B7F-A725-31596C4B1962"}
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
 * @properties={typeid:24,uuid:"8DDB04E1-4905-4DB0-AF5E-FB4C2932968A"}
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
		
		
		
		
		if(frm.indexOf('PresupuestosGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['nomcl_cof'] = searchStr
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
				forms.frm_nav_buttons_presupuestosGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				forms.frm_nav_buttons_presupuestosGC.btn_showAll()
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', null, null, null, null, null)
			}
		}
		else
		{
			//show the "show all" button
			forms.frm_nav_buttons_presupuestosGC.sub_showShowAll()
		}
	}
	else
	{
		//empty search - so show all
		//forms.frm_nav_buttons.btn_showAll()
		//elements.fld_search.requestFocus(false)
	}
}
