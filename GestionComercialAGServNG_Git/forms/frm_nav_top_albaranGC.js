/**
 * @properties={typeid:24,uuid:"976A69A1-4CAD-4CCD-B10C-35F89DC0D4FB"}
 */
function _dev()
{
	showError();
}

/**
 * @properties={typeid:24,uuid:"8863F7BC-7C36-4038-9075-B1B7E90B4E90"}
 */
function _devtemp()
{
	elements.tabs_nav.enabled = false
	plugins.dialogs.showErrorDialog( 'err',  'error','ok')
	elements.tabs_nav.enabled = true
}

/**
 *
 * @properties={typeid:24,uuid:"5EEC1CA2-E685-45BB-87B0-A515C3AC809F"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_albaranGC.btn_delete();
}

/**
 *
 * @properties={typeid:24,uuid:"CD1D197C-4FDE-4C1F-B91E-A0285D072AC9"}
 */
function cmd_newRecord()
{
	forms.frm_nav_buttons_albaranGC.btn_add();
}

/**
 *
 * @properties={typeid:24,uuid:"AAD7A213-22A4-4809-9D0F-E56E69AD4C1B"}
 */
function cmd_printPreview()
{
	forms.frm_nav_buttons_albaranGC.btn_print();
}

/**
 *
 * @properties={typeid:24,uuid:"D25AC4B9-6CCE-470D-97EF-0F7E1ECDECE8"}
 */
function cmd_search() {
	forms.frm_nav_main_albaranGC.elements.fld_search.requestFocus(false);
}

/**
 *
 * @properties={typeid:24,uuid:"2CDABDB4-697C-4A52-A8EE-38A5FFEABC5E"}
 */
function cmd_showAll()
{
	forms.frm_nav_buttons_albaranGC.btn_showAll();
}

/**
 * @properties={typeid:24,uuid:"115F77BB-4C8F-48A4-AF09-93ADAC39FD34"}
 */
function evt_find()
{
	forms.frm_nav_main_albaranGC.elements.fld_search.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"1706B731-E340-4E61-B4A7-333C6F51B04B"}
 */
function showError()
{
	globals.core_dlg_elementDisableEnable = new Array('forms.frm_nav_main.elements.tabs_recList','forms.frm_nav_main.elements.tabs_solNav')
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!!','error', null, null, null, null, null);	
}

/**
 * @properties={typeid:24,uuid:"702CB0DE-92D7-4AB4-B7AC-30DD45FEDD4D"}
 */
function showInfo()
{
//	globals.showIconDialog('Info', 'This message is just for your information only.','info');
}

/**
*
 * @properties={typeid:24,uuid:"EE8A65DD-0E6F-4426-ADAB-F076A6D05E25"}
 */
function btn_save()
{
	globals.GCsaveEdits()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"1D9A5743-BA11-4293-B6F8-F048E98FE6DB"}
 */
function btn_cancel()
{
	globals.GCcancelEditing()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"0B4E16F4-BCD8-4BAD-A51F-505B93F48546"}
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
 * @properties={typeid:24,uuid:"98D94143-C8EC-4B6E-A07F-B99E2612EC14"}
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
 * @properties={typeid:24,uuid:"192354E4-A804-4077-B7A1-A8519E9DA7E1"}
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
 * @properties={typeid:24,uuid:"80D4ECDB-632C-4488-9FC7-C17136F31075"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Delete')
	{
		foundset.deleteRecord()

		//if there are no records showing - then show all
		if(foundset.getSize() == 0) forms.frm_nav_buttons_albaranGC.btn_showAll();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"ED7027C9-1459-4537-A881-508B30890D26"}
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
 * @properties={typeid:24,uuid:"BF06D3AB-E862-45BC-A484-85B284D872B8"}
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
		
		
		
		
		if(frm.indexOf('AlbaranGC') >= 0)
		{
			if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
			//there is no numeric or date data - so show dialog
			if(dataType == 'str')
			{
				forms[frm]['nomcl_cal'] = searchStr
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
				forms.frm_nav_buttons_albaranGC.btn_showAll()
				controller.setSelectedIndex(1)
			}
			else
			{
				forms.frm_nav_buttons_albaranGC.btn_showAll()
				globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', null, null, null, null, null)
			}
		}
		else
		{
			//show the "show all" button
			forms.frm_nav_buttons_albaranGC.sub_showShowAll()
		}
	}
	else
	{
		//empty search - so show all
		//forms.frm_nav_buttons.btn_showAll()
		//elements.fld_search.requestFocus(false)
	}
}
