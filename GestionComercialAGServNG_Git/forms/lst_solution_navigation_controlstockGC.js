/**
 * @properties={typeid:24,uuid:"6ED5E032-7A21-43CC-B8E1-3919F3E1A5B4"}
 * @SuppressWarnings(deprecated)
 */
function btn_goForm()
{
	var frm = currentcontroller.getName()
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	/*var name = '';
	//switch tabs in the main form - and the list form

	if (action_method == null)
	{
		//incase having old db, fill with correct data
		if (item_name != null)
			name = item_name.toLocaleLowerCase();
		else name = 'Clientes';
		if (name == 'customers') name = 'Clientes'
		action_method = name;
	}*/
	try {
		if(action_method == 'Inventario')
		{
			globals.showDialogInventarioGC('Inventario', 1, null, null, true, null, null, null, null, null);			
		}
		else if(action_method == 'Extracto')
		{
			globals.showDialogExtractoMovGC('Extracto de Movimentos de Stock', 1, null, null, true, null, null, null, null, null);			
		}		
		else if(action_method == 'Diario')
		{
			globals.showDialogDiarioMovGC('Diario de Movimientos',1,null,null,null,null,null,null,null,null)
		}		
		else
		{
			forms['Frm'+action_method].controller.show()
		}
	}
	catch (e) {}
	if(action_method != 'Inventario' && action_method != 'Extracto' && action_method != 'Diario')
	{
		var tabCount = forms.frm_nav_main_controlstockGC.elements.tabs_recList.getMaxTabIndex();
		for (var index = 1; index <= tabCount; index++) 
		{
			var tname = forms.frm_nav_main_controlstockGC.elements.tabs_recList.getTabFormNameAt(index);
			if (tname.substr(4) == action_method)
			{
				forms.frm_nav_main_controlstockGC.elements.tabs_recList.tabIndex = index;
				break;
			}
		}
	
		if (item_name != null)
		if (item_name.indexOf('Admin') == -1)
		{
			//update the record information
			globals.GCsetupRecordStatus();
	
			//hide search stuff
			forms.frm_nav_main_controlstockGC.elements.lbl_search.visible = true
			forms.frm_nav_main_controlstockGC.elements.fld_search.visible = true
			forms.frm_nav_main_controlstockGC.elements.btn_search.visible = true
		}
		else
		{
			//hide search stuff
			forms.frm_nav_main_controlstockGC.elements.lbl_search.visible = false
			forms.frm_nav_main_controlstockGC.elements.fld_search.visible = false
			forms.frm_nav_main_controlstockGC.elements.btn_search.visible = false
		}
	}
}

/**
 * @properties={typeid:24,uuid:"EBF15947-5F70-459C-A4AD-61E33F5D4BB5"}
 */
function btn_showNewErrorDialog()
{
	//plugins.dialogs.showErrorDialog( 'My Title',  "Here is the message, it can be very long!",  'OK', "Cancel","No Way")
	
	//globals.showIconDialog2('Error', 'There has been a TERRIBLE error!!','error');
	
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!','error', 'Cancel', 'OK', null, null, null);
}

/**
 * @properties={typeid:24,uuid:"866CA2FC-7D1C-4F8E-A666-74E4C72809D5"}
 */
function nav()
{
	globals.GCnav_itemName = item_name
	application.updateUI()
}

/**
 * @param {Boolean} firstShow form is shown first time after load
 * @properties={typeid:24,uuid:"18B1E110-BE15-4686-BC35-9B89253098C3"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(unused)
 */
function setupNav(firstShow)
{
	//get all the rows of the current foundset
	/** @type {JSDataSet}*/
	var dataset = databaseManager.convertToDataSet(foundset, 'item_name');
	/** @type {JSDataSet}*/
	var dataset2 = databaseManager.convertToDataSet(foundset, 'icon_name');
	var max = dataset.getMaxRowIndex();
	var item = ''
	var html = '<html><body>'
	
	if(max > 0)
	{
		html += '<table width="100%" border=0 cellpadding=0 cellspacing=0>\n'

		for( var i = 0 ; i < max ; i++ )
		{
			if(globals.GCnav_node == i+1)
			{
				/*
			html += '<tr bgcolor="#666666"><td height=25 valign="middle"><font face="Verdana, sans-serif" color="#ffffff">' +
			'<img src="media:///' + dataset2[i] + '" border=0>&nbsp;&nbsp;<b>' + dataset[i] + '</b></font></td></tr>\n'
				 */
			html += '<tr bgcolor="#666666"><td height=25 valign="bottom"><font face="Verdana, sans-serif" color="#ffffff">' +
			'&nbsp;&nbsp;<b>' + dataset[i] + '</b></font></td></tr>\n'
			}
			else
			{
				html += '<tr><td height=20 valign="middle"><img src="media:///' + dataset2[i] + '" border=0>&nbsp;' + dataset[i] + '</td></tr>\n'
			}
		}
	}

	html += '</table>\n</body>\n</html>'

	globals.GCnav_solution = html	
	if (application.getApplicationType() != APPLICATION_TYPES.SMART_CLIENT && !firstShow) {
		plugins.WebClientUtils.executeClientSideJS('location.reload();');
	}
}
