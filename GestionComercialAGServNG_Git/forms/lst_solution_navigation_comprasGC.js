/**
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"AC96DB43-A7E7-4AA9-84C4-2095F0AB5F46"}
 * @SuppressWarnings(deprecated)
 */
function btn_goForm(event)
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
		if(action_method == 'Consulta')
		{
			globals.GCshowDialogConsultaAlbaranes('Consulta de Albaranes',1,null,null,null,null,null,null,null,null)
		}
		else if(action_method == 'SII')
		{
			var menu = plugins.window.createPopupMenu();
			var titulo = 'Generar XML Facturas Emitidas';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuCompras, null);
			titulo = 'Generar XML Facturas Recibidas';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuCompras, null);
			titulo = 'Generar XML Facturas Bienes Inversión';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuCompras, null);
			titulo = 'Conexión web SII transf. Archivos';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuCompras, null);	
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),236,0);				
			}
		}
		else
		{
			forms['Frm'+action_method].controller.show()
		}
	}
	catch (e) {}
	if(action_method != 'Consulta' && action_method != 'SII')
	{
		var tabCount = forms.frm_nav_main_comprasGC.elements.tabs_recList.getMaxTabIndex();
		for (var index = 1; index <= tabCount; index++) 
		{
			var tname = forms.frm_nav_main_comprasGC.elements.tabs_recList.getTabFormNameAt(index);
			if (tname.substr(4) == action_method)
			{
				forms.frm_nav_main_comprasGC.elements.tabs_recList.tabIndex = index;
				break;
			}
		}
	
		if (item_name != null)
		if (item_name.indexOf('Admin') == -1)
		{
			//update the record information
			globals.GCsetupRecordStatus();
	
			//hide search stuff
			forms.frm_nav_main_comprasGC.elements.lbl_search.visible = true
			forms.frm_nav_main_comprasGC.elements.fld_search.visible = true
			forms.frm_nav_main_comprasGC.elements.btn_search.visible = true
		}
		else
		{
			//hide search stuff
			forms.frm_nav_main_comprasGC.elements.lbl_search.visible = false
			forms.frm_nav_main_comprasGC.elements.fld_search.visible = false
			forms.frm_nav_main_comprasGC.elements.btn_search.visible = false
		}
	}
}

/**
 * @properties={typeid:24,uuid:"448D5A6E-6C9E-4B85-B9D5-A18D2AA6DD02"}
 */
function btn_showNewErrorDialog()
{
	//plugins.dialogs.showErrorDialog( 'My Title',  "Here is the message, it can be very long!",  'OK', "Cancel","No Way")
	
	//globals.showIconDialog2('Error', 'There has been a TERRIBLE error!!','error');
	
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!','error', 'Cancel', 'OK', null, null, null);
}

/**
 * @properties={typeid:24,uuid:"E600D18C-3C4C-4BBD-B3AB-EB4385DCEC9C"}
 */
function nav()
{
	globals.GCnav_itemName = item_name
	application.updateUI()
}

/**
 * @param {Boolean} firstShow form is shown first time after load
 * @properties={typeid:24,uuid:"DD0B934D-046E-403E-9B72-1BAC39D82AB7"}
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
