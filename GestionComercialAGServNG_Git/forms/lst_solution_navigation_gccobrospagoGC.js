/**
 * @properties={typeid:24,uuid:"D190E39F-8D04-41C1-B5B6-B4E856F00B3F"}
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
		if(action_method == 'InformeCobrosPagosGC')
		{
			globals.GCshowDialogCobrosPagosPendientes('Cobros y Pagos Pendientes', 1, null, null, true, null, null, null, null, null);
		}
		else if(action_method == 'CobrosRemesarGC')
		{
			globals.GCshowDialogSelecCobrosProcesar('Selección Cobros/Pagos a remesar', 1, null, null, true, null, null, null, null, null);    		
		}		
		else if(action_method == 'RemesasC19SEPAGC')
		{
			globals.CobroPago = 1
			 globals.GCshowDialogRemesasC19SEPA('Remesas/Transf. SEPA XML', 1, null, null, true, null, null, null, null, null);
		}		
		else
		{
			forms['Frm'+action_method].controller.show()
		}
	}
	catch (e) {}
	if(action_method != 'InformeCobrosPagosGC' && action_method != 'CobrosRemesarGC' && action_method != 'RemesasC19SEPAGC')
	{
		var tabCount = forms.frm_nav_main_cobrospagosGC.elements.tabs_recList.getMaxTabIndex();
		for (var index = 1; index <= tabCount; index++) 
		{
			var tname = forms.frm_nav_main_cobrospagosGC.elements.tabs_recList.getTabFormNameAt(index);
			if (tname.substr(4) == action_method)
			{
				forms.frm_nav_main_cobrospagosGC.elements.tabs_recList.tabIndex = index;
				break;
			}
		}
	
		if (item_name != null)
		if (item_name.indexOf('Admin') == -1)
		{
			//update the record information
			globals.GCsetupRecordStatus();
	
			//hide search stuff
			forms.frm_nav_main_cobrospagosGC.elements.lbl_search.visible = true
			forms.frm_nav_main_cobrospagosGC.elements.fld_search.visible = true
			forms.frm_nav_main_cobrospagosGC.elements.btn_search.visible = true
		}
		else
		{
			//hide search stuff
			forms.frm_nav_main_cobrospagosGC.elements.lbl_search.visible = false
			forms.frm_nav_main_cobrospagosGC.elements.fld_search.visible = false
			forms.frm_nav_main_cobrospagosGC.elements.btn_search.visible = false
		}
	}
}

/**
 * @properties={typeid:24,uuid:"A2597E9E-FDC6-4E90-A873-2100EFCFE4C6"}
 */
function btn_showNewErrorDialog()
{
	//plugins.dialogs.showErrorDialog( 'My Title',  "Here is the message, it can be very long!",  'OK', "Cancel","No Way")
	
	//globals.showIconDialog2('Error', 'There has been a TERRIBLE error!!','error');
	
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!','error', 'Cancel', 'OK', null, null, null);
}

/**
 * @properties={typeid:24,uuid:"652A7E1E-9DEA-4A2C-BC56-3F47859A7972"}
 */
function nav()
{
	globals.GCnav_itemName = item_name
	application.updateUI()
}

/**
 * @param {Boolean} firstShow form is shown first time after load
 * @properties={typeid:24,uuid:"835D19EE-F0B7-47E1-A746-6EE454E6F345"}
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
