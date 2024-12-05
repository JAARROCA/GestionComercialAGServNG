/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"EEA2E060-E977-4760-A5A3-A0340B1BD4EA"}
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
		//var frm = application.getWindow('Conta')
		//setup the record status
		
		if(action_method == 'DiarioFacturacion')
		{
			globals.GCshowDialogDiarioFacturacion('Diario de Facturación',1,null,null,null,null,null,null,null,null)    		
		}
		else if(action_method == 'SII')
		{
			var menu = plugins.window.createPopupMenu();
			var titulo = 'Generar XML Facturas Emitidas';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuFacturas, null);
			titulo = 'Generar XML Facturas Recibidas';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuFacturas, null);
			titulo = 'Generar XML Facturas Bienes Inversión';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuFacturas, null);
			titulo = 'Conexión web SII transf. Archivos';	
			titulo = titulo.toUpperCase()
			menu.addMenuItem(titulo, globals.MenuFacturas, null);	
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),236,0);				
			}
		}
		else if(action_method == 'Imprimir')
		{
			var tbai = gcparametrosaplicacion_to_parametrosaplicacion.ticketbai;
			var verifactu = gcparametrosaplicacion_to_parametrosaplicacion.verifactu;
			if(forms.FrmFacturasGC.id && tbai){
				/*forms.dlg_ImpresionFacturasTBAIGC_2.DesdeEje = forms.FrmFacturasGC.eje_cfa;
				forms.dlg_ImpresionFacturasTBAIGC_2.HastaEje = forms.FrmFacturasGC.eje_cfa;
				forms.dlg_ImpresionFacturasTBAIGC_2.DesdeSer = forms.FrmFacturasGC.ser_cfa;
				forms.dlg_ImpresionFacturasTBAIGC_2.HastaSer = forms.FrmFacturasGC.ser_cfa;
				forms.dlg_ImpresionFacturasTBAIGC_2.DesdeNup = forms.FrmFacturasGC.nup_cfa;
				forms.dlg_ImpresionFacturasTBAIGC_2.HastaNup = forms.FrmFacturasGC.nup_cfa;
				globals.GCshowDialogImpresionFacturasTBAI_2('Impresión de Facturas TBAI',1,null,null,null,null,null,null,null,null)
				*/
				forms.dlg_ImpresionFacturasTBAIGC.DesdeEje = forms.FrmFacturasGC.eje_cfa;
				forms.dlg_ImpresionFacturasTBAIGC.HastaEje = forms.FrmFacturasGC.eje_cfa;
				forms.dlg_ImpresionFacturasTBAIGC.DesdeSer = forms.FrmFacturasGC.ser_cfa;
				forms.dlg_ImpresionFacturasTBAIGC.HastaSer = forms.FrmFacturasGC.ser_cfa;
				forms.dlg_ImpresionFacturasTBAIGC.DesdeNup = forms.FrmFacturasGC.nup_cfa;
				forms.dlg_ImpresionFacturasTBAIGC.HastaNup = forms.FrmFacturasGC.nup_cfa;
				//forms.dlg_ImpresionFacturasTBAIGC.DesdeCliente = null
				//forms.dlg_ImpresionFacturasTBAIGC.onDataChangeDesdeCliente()
				//forms.dlg_ImpresionFacturasTBAIGC.HastaCliente = null
				//forms.dlg_ImpresionFacturasTBAIGC.onDataChangeHastaCliente()
				globals.GCshowDialogImpresionFacturasTBAI('Impresión de Facturas TBAI',1,null,null,null,null,null,null,null,null)
			}
			else if(forms.FrmFacturasGC.id && verifactu){
				forms.dlg_ImpresionFacturasVERIFACTUGC.DesdeEje = forms.FrmFacturasGC.eje_cfa;
				forms.dlg_ImpresionFacturasVERIFACTUGC.HastaEje = forms.FrmFacturasGC.eje_cfa;
				forms.dlg_ImpresionFacturasVERIFACTUGC.DesdeSer = forms.FrmFacturasGC.ser_cfa;
				forms.dlg_ImpresionFacturasVERIFACTUGC.HastaSer = forms.FrmFacturasGC.ser_cfa;
				forms.dlg_ImpresionFacturasVERIFACTUGC.DesdeNup = forms.FrmFacturasGC.nup_cfa;
				forms.dlg_ImpresionFacturasVERIFACTUGC.HastaNup = forms.FrmFacturasGC.nup_cfa;
				forms.dlg_ImpresionFacturasVERIFACTUGC.DesdeCliente = null
				forms.dlg_ImpresionFacturasVERIFACTUGC.DescDesdeCliente = null
				//forms.dlg_ImpresionFacturasTBAIGC.onDataChangeDesdeCliente()
				forms.dlg_ImpresionFacturasVERIFACTUGC.HastaCliente = null
				forms.dlg_ImpresionFacturasVERIFACTUGC.HastaDescCliente = null
				globals.GCshowDialogImpresionFacturasVERIFACTU('Impresión de Facturas VERIFACTU',1,null,null,null,null,null,null,null,null)
				
			}
			else{
				var A = new Date().getFullYear().toString()
				A = A.substr(2,4)
				forms.dlg_ImpresionFacturasGC.DesdeEje = A
				forms.dlg_ImpresionFacturasGC.HastaEje = A
				forms.dlg_ImpresionFacturasGC.DesdeSer = ''
				forms.dlg_ImpresionFacturasGC.HastaSer = ''
				forms.dlg_ImpresionFacturasGC.DesdeNup = null
				forms.dlg_ImpresionFacturasGC.HastaNup = null
				forms.dlg_ImpresionFacturasGC.DesdeCliente = null
				forms.dlg_ImpresionFacturasGC.DescDesdeCliente = null
				forms.dlg_ImpresionFacturasGC.HastaCliente = null
				forms.dlg_ImpresionFacturasGC.HastaDescCliente = null			
				forms.dlg_ImpresionFacturasGC.FacturaProForma = null
				forms.dlg_ImpresionFacturasGC.FacturaE = null
				globals.GCshowDialogImpresionFacturas('Impresión de Facturas',1,null,null,null,null,null,null,null,null)
				
				
			}
		}
		else if(action_method == 'GenerarAsientos')
		{
			/*var popUpObj = plugins.window.createPopupMenu();
			titulo = 'Asientos Conta AG Web';	
			titulo = titulo.toUpperCase()
			popUpObj.addMenuItem(titulo, globals.MenuFacturas, "media:///sm_earth.gif");
			titulo = 'Asientos Conta AG Win';	
			titulo = titulo.toUpperCase()
			popUpObj.addMenuItem(titulo, globals.MenuFacturas, "media:///LogoAGMin.gif");
			popUpObj.addSeparator();
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				popUpObj.show(event.getSource(),250,0);				
			}*/
			var query = 'select [EmpresaContable] from [ParametrosAplicacion]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var EC = dataset.getValue(1,1)
			if(EC == null || EC == '')
			{
				globals.GCshowErrorDialog('No está definida la Empresa Contable en los Parametros de la Aplicación.',null,'Aceptar',null,null,null)
			}
			else
			{
				
					A = new Date().getFullYear().toString()
					A = A.substr(2,4)
					forms.dlg_ActualizacionContableGC.DesdeEjer = A;
					forms.dlg_ActualizacionContableGC.HastaEjer = A;
					forms.dlg_ActualizacionContableGC.DesdeSer = '';
					forms.dlg_ActualizacionContableGC.HastaSer = '';
					forms.dlg_ActualizacionContableGC.DesdeNup = null;
					forms.dlg_ActualizacionContableGC.HastaNup = null;							
				
				
				
				globals.GCshowDialogActualizacionContable('Actualización Contable',1,null,null,null,null,null,null,null,null)
			}
		}
		else if(action_method == 'ActualizacionCobros')
		{
			forms.dlg_ActualizacionCarteraCobrosGC.DesdeEjer=null;
			forms.dlg_ActualizacionCarteraCobrosGC.HastaEjer=null;
			forms.dlg_ActualizacionCarteraCobrosGC.DesdeSer='';
			forms.dlg_ActualizacionCarteraCobrosGC.HastaSer='';
			forms.dlg_ActualizacionCarteraCobrosGC.DesdeNup=null;
			forms.dlg_ActualizacionCarteraCobrosGC.HastaNup=null;	
			globals.GCshowDialogActualizacionCarteraCobros('Actualización Cartera de Cobros',1,null,null,null,null,null,null,null,null)    		
		}
		else if(action_method == 'Comision')
		{
			globals.GCshowDialogInformeComision('Informe de Comisiones',1,null,null,null,null,null,null,null,null)    		
		}
		else if(action_method == 'VentasMeses')
		{
			globals.GCshowDialogFacturacionClientes('Ventas / Meses',1,null,null,null,null,null,null,null,null)
		}
		else if(action_method == 'VentasAgnos')
		{
			globals.GCshowDialogFacturacionClientesAgnos('Ventas / Años',1,null,null,null,null,null,null,null,null)
		}
		else if(action_method == 'VentasZonas')
		{
			globals.GCshowDialogConsultaVentasZonas('Ventas / Zonas',1,null,null,null,null,null,null,null,null)
		}
		else if(action_method == 'ABC')
		{
			if(globals.GCisEditing()) forms.FrmFacturasGC.btn_cancel()
			if(forms.FrmFacturasGC.id && forms.FrmFacturasGC.fecha_cfa)
			{
				//var year = forms.FrmFacturasGC.fecha_cfa.getFullYear()
				//globals.btn_runJasperReportVentasClientesGC(year)
				globals.GCshowDialogABCFacturacionClientes('ABC de Ventas por Clientes',1,null,null,null,null,null,null,null,null)
			}
		}
		else if(action_method == 'AlbPend')
		{
			globals.GCshowDialogAlbaranesPendFacturar('Albaranes Pendientes de Facturar',1,null,null,null,null,null,null,null,null)
		}
		else if(action_method == 'GenerarFraAlbPend')
		{
			query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
			var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var save = dataset2.getValue(1, 1)
			
			if(save != '1')
			{
				globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Facturas.',null,'Aceptar',null,null,null)
			}
			else
			{
				
						//start a transaction
						globals.AlbaranCliente = null;
						/*if(lalbaranpendfacturar)
						{
							if(lalbaranpendfacturar.getSize() > 0)
							{*/
								if(!globals.GCisEditing()) globals.GCstartEditing()
								
								//setup the method to execute when the dialog closes
								//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deletePresupuestoLinea()'
							
								//show the "fake" dialog
								globals.GCshowDialogGeneracionFactura5('Generación Factura', 1, null, null, true, null, null, null, null, null);
							/*}
							else 
							{
								globals.GCshowErrorDialog('No existen líneas de albarán por facturar a este cliente.',null,'Aceptar',null,null,null)
							}
						}
						else 
						{
							globals.GCshowErrorDialog('No existen líneas de albarán por facturar a este cliente.',null,'Aceptar',null,null,null)
						}
					*/
				
			}
		}
		/*else if(frm != null)
		{
			
		}*/
		else
		{
			forms['Frm'+action_method].controller.show()
		}
	}
	catch (e) {application.output(e.toString())}
	if(action_method != 'DiarioFacturacion' && action_method != 'Imprimir' && action_method != 'GenerarAsientos' && action_method != 'ActualizacionCobros' && action_method != 'CarteraCobros' && action_method != 'VentasMeses' && action_method != 'VentasAgnos'  && 
			action_method != 'VentasZonas' && action_method != 'AlbPend' && action_method != 'GenerarFraAlbPend'/*&& frm != null*/)
	{
		var tabCount = forms.frm_nav_main_facturasGC.elements.tabs_recList.getMaxTabIndex();
		for (var index = 1; index <= tabCount; index++) 
		{
			var tname = forms.frm_nav_main_facturasGC.elements.tabs_recList.getTabFormNameAt(index);
			if (tname.substr(4) == action_method)
			{
				forms.frm_nav_main_facturasGC.elements.tabs_recList.tabIndex = index;
				break;
			}
		}
	
		if (item_name != null)
		if (item_name.indexOf('Admin') == -1)
		{
			//update the record information
			globals.GCsetupRecordStatus();
	
			//hide search stuff
			forms.frm_nav_main_facturasGC.elements.lbl_search.visible = true
			forms.frm_nav_main_facturasGC.elements.fld_search.visible = true
			forms.frm_nav_main_facturasGC.elements.btn_search.visible = true
		}
		else
		{
			//hide search stuff
			forms.frm_nav_main_facturasGC.elements.lbl_search.visible = false
			forms.frm_nav_main_facturasGC.elements.fld_search.visible = false
			forms.frm_nav_main_facturasGC.elements.btn_search.visible = false
		}
	}
}

/**
 * @properties={typeid:24,uuid:"4E65892B-2DEE-4B55-A4D6-4BA8C0AF3A6B"}
 */
function btn_showNewErrorDialog()
{
	//plugins.dialogs.showErrorDialog( 'My Title',  "Here is the message, it can be very long!",  'OK', "Cancel","No Way")
	
	//globals.showIconDialog2('Error', 'There has been a TERRIBLE error!!','error');
	
	globals.core_showWcGenericDialog('Error', 'There has been a TERRIBLE error!','error', 'Cancel', 'OK', null, null, null);
}

/**
 * @properties={typeid:24,uuid:"A0B58C79-F7D3-449D-BA01-415E8482CB90"}
 */
function nav()
{
	globals.GCnav_itemName = item_name
	application.updateUI()
}

/**
 * @param {Boolean} firstShow form is shown first time after load
 * @properties={typeid:24,uuid:"172BD3C6-B605-476B-A28C-06983FDF7B2C"}
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
