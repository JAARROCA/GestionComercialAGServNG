/**
 * @properties={typeid:24,uuid:"963E6726-5EF3-4818-8C63-F4032187EACA"}
 */
function _dev()
{
	showError();
}

/**
 * @properties={typeid:24,uuid:"9AA3FE06-0BFB-4FD7-BF98-894DAC3F11BF"}
 */
function _devtemp()
{
	elements.tabs_nav.enabled = false
	plugins.dialogs.showErrorDialog( 'err',  'error','ok')
	elements.tabs_nav.enabled = true
}

/**
 *
 * @properties={typeid:24,uuid:"037C634D-CC9A-4A00-BC4E-0015271F5809"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_controlstockGC.btn_delete();
}

/**
 *
 * @properties={typeid:24,uuid:"98562E16-FC08-49C3-9FF4-B628006C303C"}
 */
function cmd_newRecord()
{
	forms.frm_nav_buttons_controlstockGC.btn_add();
}

/**
 *
 * @properties={typeid:24,uuid:"F97B0D8F-7671-44AC-BF18-A2FD5344E04F"}
 */
function cmd_printPreview()
{
	forms.frm_nav_buttons_controlstockGC.btn_print();
}

/**
 *
 * @properties={typeid:24,uuid:"BE405C69-BE57-496B-AF6B-D9FE68207BFA"}
 */
function cmd_search() {
	forms.frm_nav_main_controlstockGC.elements.fld_search.requestFocus(false);
}

/**
 *
 * @properties={typeid:24,uuid:"DD0AA0FA-8E9A-4486-AF9A-028F91CBF321"}
 */
function cmd_showAll()
{
	forms.frm_nav_buttons_controlstockGC.btn_showAll();
}

/**
 * @properties={typeid:24,uuid:"95BD8A00-725E-4BB8-8E7F-7BBD55A0ECA7"}
 */
function evt_find()
{
	forms.frm_nav_main_controlstockGC.elements.fld_search.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"53449724-0053-4BFE-A5F7-ECE524B2DE13"}
 */
function showError()
{
	globals.core_dlg_elementDisableEnable = new Array('forms.frm_nav_main.elements.tabs_recList','forms.frm_nav_main.elements.tabs_solNav')
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!!','error', null, null, null, null, null);	
}

/**
 * @properties={typeid:24,uuid:"37523D38-10B5-48A6-A778-A5D470945C7B"}
 */
function showInfo()
{
//	globals.showIconDialog('Info', 'This message is just for your information only.','info');
}

/**
*
 * @properties={typeid:24,uuid:"5D5611CD-E54F-48E4-905E-12C6888761E9"}
 */
function btn_save()
{
	globals.GCsaveEdits()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"A6E2850D-731B-4531-BD8B-0B9AF419E063"}
 */
function btn_cancel()
{
	globals.GCcancelEditing()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"9767E30F-2EA9-4ECB-8489-2FFE0BF9DDC0"}
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
 * @properties={typeid:24,uuid:"3F206DAD-B39C-4E9E-9119-C064D3842F87"}
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
 * @properties={typeid:24,uuid:"6EB94EE6-FD97-40AB-ADE6-5108B69619FC"}
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
 * @properties={typeid:24,uuid:"5674DF0C-28FD-4AF5-9771-A2C825706B57"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		foundset.deleteRecord()

		//if there are no records showing - then show all
		if(foundset.getSize() == 0) forms.frm_nav_buttons_controlstockGC.btn_showAll();
	}
}
