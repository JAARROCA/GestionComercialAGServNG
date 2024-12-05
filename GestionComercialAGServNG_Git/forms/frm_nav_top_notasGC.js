/**
 * @properties={typeid:24,uuid:"AA1B8EF3-3C09-4D81-B2B4-9EBDF3A041C3"}
 */
function _dev()
{
	showError();
}

/**
 * @properties={typeid:24,uuid:"97D9B7A8-A857-4543-B9C0-94B053EF8A05"}
 */
function _devtemp()
{
	elements.tabs_nav.enabled = false
	plugins.dialogs.showErrorDialog( 'err',  'error','ok')
	elements.tabs_nav.enabled = true
}

/**
 *
 * @properties={typeid:24,uuid:"4B8BA9CE-F493-49FF-8C3B-5C7D6EB47FF6"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_notasGC.btn_delete();
}

/**
 *
 * @properties={typeid:24,uuid:"E3DAD1BD-AA0A-47A1-B614-2C37542151A9"}
 */
function cmd_newRecord()
{
	forms.frm_nav_buttons_notasGC.btn_add();
}

/**
 *
 * @properties={typeid:24,uuid:"1DF8D394-B5C5-4A93-9444-2922A3BF399C"}
 */
function cmd_printPreview()
{
	forms.frm_nav_buttons_notasGC.btn_print();
}

/**
 *
 * @properties={typeid:24,uuid:"70112440-22A3-4A07-ABA8-E445D9BE306D"}
 */
function cmd_search() {
	forms.frm_nav_main_notasGC.elements.fld_search.requestFocus(false);
}

/**
 *
 * @properties={typeid:24,uuid:"036A6BC1-421F-442D-B050-0D1016F890CE"}
 */
function cmd_showAll()
{
	forms.frm_nav_buttons_notasGC.btn_showAll();
}

/**
 * @properties={typeid:24,uuid:"4A567AE3-3C1B-46A2-A65E-39DB5A778C3C"}
 */
function evt_find()
{
	forms.frm_nav_main_notasGC.elements.fld_search.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"5209C0C7-EDD6-4741-B5F2-04973F4BA675"}
 */
function showError()
{
	globals.core_dlg_elementDisableEnable = new Array('forms.frm_nav_main.elements.tabs_recList','forms.frm_nav_main.elements.tabs_solNav')
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!!','error', null, null, null, null, null);	
}

/**
 * @properties={typeid:24,uuid:"786C1393-F8C1-44C5-AEFE-129DFCE5CD98"}
 */
function showInfo()
{
//	globals.showIconDialog('Info', 'This message is just for your information only.','info');
}

/**
*
 * @properties={typeid:24,uuid:"D79E08B1-CE22-4B48-94A7-E518C27A1316"}
 */
function btn_save()
{
	globals.GCsaveEdits()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"E4B39F91-0C58-4A13-A30A-BBD1C564AB3E"}
 */
function btn_cancel()
{
	globals.GCcancelEditing()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"22D90C51-5ACF-4CE8-84EC-A57E38EFF739"}
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
 * @properties={typeid:24,uuid:"7D604280-39EA-47F4-B454-8E37DE36DCEE"}
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
 * @properties={typeid:24,uuid:"73FBE7E0-D6F7-4BA2-BF8D-F81B6B4B2A1C"}
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
 * @properties={typeid:24,uuid:"B2187045-0BAF-4C28-BA7F-A8832F73D0AB"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Delete')
	{
		foundset.deleteRecord()

		//if there are no records showing - then show all
		if(foundset.getSize() == 0) forms.frm_nav_buttons_notasGC.btn_showAll();
	}
}
