/**
 * @properties={typeid:24,uuid:"8C01D511-8A74-4793-96FD-3FC3D69CA1B0"}
 */
function _dev()
{
	showError();
}

/**
 * @properties={typeid:24,uuid:"B027B49E-A2CA-4514-B77B-B5546719A32A"}
 */
function _devtemp()
{
	elements.tabs_nav.enabled = false
	plugins.dialogs.showErrorDialog( 'err',  'error','ok')
	elements.tabs_nav.enabled = true
}

/**
 *
 * @properties={typeid:24,uuid:"3573D302-9C7E-4381-B5D2-712718F169B5"}
 */
function cmd_deleteRecord()
{
	forms.frm_nav_buttons_pedidosGC.btn_delete();
}

/**
 *
 * @properties={typeid:24,uuid:"FC511215-4C96-4F58-A940-8B271F8D5EFF"}
 */
function cmd_newRecord()
{
	forms.frm_nav_buttons_pedidosGC.btn_add();
}

/**
 *
 * @properties={typeid:24,uuid:"234D8BAC-29F4-45DB-B63B-9299E3084B39"}
 */
function cmd_printPreview()
{
	forms.frm_nav_buttons_pedidosGC.btn_print();
}

/**
 *
 * @properties={typeid:24,uuid:"3331B743-7ACA-4E5C-AB69-4F4445213D67"}
 */
function cmd_search() {
	forms.frm_nav_main_pedidosGC.elements.fld_search.requestFocus(false);
}

/**
 *
 * @properties={typeid:24,uuid:"2440A5C6-15D7-4100-B245-1D3D44B102B2"}
 */
function cmd_showAll()
{
	forms.frm_nav_buttons_pedidosGC.btn_showAll();
}

/**
 * @properties={typeid:24,uuid:"F39F464A-7568-46F3-9BC1-14B21CEDEB60"}
 */
function evt_find()
{
	forms.frm_nav_main_pedidosGC.elements.fld_search.requestFocus(false)
}

/**
 * @properties={typeid:24,uuid:"DDA84BD9-0CD3-441B-96A4-6070968608AE"}
 */
function showError()
{
	globals.core_dlg_elementDisableEnable = new Array('forms.frm_nav_main.elements.tabs_recList','forms.frm_nav_main.elements.tabs_solNav')
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!!','error', null, null, null, null, null);	
}

/**
 * @properties={typeid:24,uuid:"423210D8-7D85-414F-BB30-3E63FBADBFA8"}
 */
function showInfo()
{
//	globals.showIconDialog('Info', 'This message is just for your information only.','info');
}

/**
*
 * @properties={typeid:24,uuid:"288781B1-21AE-4D06-A438-C9EA84D1DC34"}
 */
function btn_save()
{
	globals.GCsaveEdits()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"7FEDAFE1-0505-4186-A77A-E874385FF4C4"}
 */
function btn_cancel()
{
	globals.GCcancelEditing()
	globals.GCRegistroNuevo = null
	hide_btn_reset_fields();
}

/**
 *
 * @properties={typeid:24,uuid:"CCD7EFAF-499E-4106-9EF4-8619F1F1E72E"}
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
 * @properties={typeid:24,uuid:"327C7F2B-0F36-4DAF-B340-AE8EE0A87004"}
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
 * @properties={typeid:24,uuid:"67BFB9C4-929D-4FB6-B944-233424616C4A"}
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
 * @properties={typeid:24,uuid:"DD89DA8A-8D68-40E0-A561-DA97F97D7603"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Delete')
	{
		foundset.deleteRecord()

		//if there are no records showing - then show all
		if(foundset.getSize() == 0) forms.frm_nav_buttons_pedidosGC.btn_showAll();
	}
}
