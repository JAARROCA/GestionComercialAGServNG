/**
 * @properties={typeid:24,uuid:"4A212DE1-3E07-4976-A227-671F90BD4DD3"}
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
		if(action_method == 'DiarioNotas')
		{
			globals.GCshowDialogDiarioNotas('Diario de Notas',1,null,null,null,null,null,null,null,null)    		
		}
		else if(action_method == 'Imprimir')
		{
			var A = new Date().getFullYear().toString()
			A = A.substr(2,4)
			forms.dlg_ImpresionNotasGC.DesdeEje = A
			forms.dlg_ImpresionNotasGC.HastaEje = A
			forms.dlg_ImpresionNotasGC.DesdeNup = null
			forms.dlg_ImpresionNotasGC.HastaNup = null
			forms.dlg_ImpresionNotasGC.DesdeCliente = null
			forms.dlg_ImpresionNotasGC.HastaCliente = null
			globals.GCshowDialogImpresionNotas('Impresión de Notas',1,null,null,null,null,null,null,null,null)
		}
		else if(action_method == 'Pendientes')
		{
			globals.btn_runJasperReportNotasPendCobro()
		}
		else if(action_method == 'BorradoFacturas')
		{
			//globals.GCshowDialogOperarios('BD Operarios', 1, null, null, true, null, null, null, null, null);
		}
		else
		{
			forms['Frm'+action_method].controller.show()
		}
	}
	catch (e) {}
	if(action_method != 'DiarioNotas' && action_method != 'Imprimir' && action_method != 'Pendientes'
	 && action_method != 'BorradoFacturas')
	{
		var tabCount = forms.frm_nav_main_maestrosGC.elements.tabs_recList.getMaxTabIndex();
		for (var index = 1; index <= tabCount; index++) 
		{
			var tname = forms.frm_nav_main_maestrosGC.elements.tabs_recList.getTabFormNameAt(index);
			if (tname.substr(4) == action_method)
			{
				forms.frm_nav_main_maestrosGC.elements.tabs_recList.tabIndex = index;
				break;
			}
		}
	
		if (item_name != null)
		if (item_name.indexOf('Admin') == -1)
		{
			//update the record information
			globals.GCsetupRecordStatus();
	
			//hide search stuff
			forms.frm_nav_main_maestrosGC.elements.lbl_search.visible = true
			forms.frm_nav_main_maestrosGC.elements.fld_search.visible = true
			forms.frm_nav_main_maestrosGC.elements.btn_search.visible = true
		}
		else
		{
			//hide search stuff
			forms.frm_nav_main_maestrosGC.elements.lbl_search.visible = false
			forms.frm_nav_main_maestrosGC.elements.fld_search.visible = false
			forms.frm_nav_main_maestrosGC.elements.btn_search.visible = false
		}
	}
}

/**
 * @properties={typeid:24,uuid:"637016D7-3C5B-4CCE-ABC2-354186E2582A"}
 */
function btn_showNewErrorDialog()
{
	//plugins.dialogs.showErrorDialog( 'My Title',  "Here is the message, it can be very long!",  'OK', "Cancel","No Way")
	
	//globals.showIconDialog2('Error', 'There has been a TERRIBLE error!!','error');
	
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!','error', 'Cancel', 'OK', null, null, null);
}

/**
 * @properties={typeid:24,uuid:"0D72CB74-162C-4CB9-B6FF-5F214802D88A"}
 */
function nav()
{
	globals.GCnav_itemName = item_name
	application.updateUI()
}

/**
 * @param {Boolean} firstShow form is shown first time after load
 * @properties={typeid:24,uuid:"BFB67320-C56A-470D-8770-5C77E0B1C4D6"}
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
