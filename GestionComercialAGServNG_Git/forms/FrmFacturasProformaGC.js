/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"1DFC2ECD-94D7-4657-A716-873B2A82C80A"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	//plugins.window.createShortcut('control F12', handle_shortCut);
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	plugins.window.createShortcut('control F10', handle_shortCut);
}

/**
 * @properties={typeid:24,uuid:"C66AD9B9-1E76-4166-A96A-E12E25BD029C"}
 * @SuppressWarnings(deprecated)
 */
function onRecordSelect()
{	
	//setup the record status
	globals.GCsetupRecordStatus();
	
	//set the global curID_company to the current company_id
	globals.GCcurID_FacturaProforma = id;
	//databaseManager.acquireLock(foundset, 0);
	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
			globals.GCRegistroNuevo = null
			doEdit()
		}
	}
	//notasclientes()
	if(gctbfacturaproformacabecera_to_tbfacturaproformalinea)
	{
		if(gctbfacturaproformacabecera_to_tbfacturaproformalinea.getSize() > 0)
		{
			forms.lst_FacturaProforma_LineasGC.foundset.setSelectedIndex(1)
		}
	}	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"489D780C-6849-4440-86CB-685F0DE29590"}
 */
function btn_save(event)
{
	var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Facturas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(!fecha_cfa)
		{
			globals.GCshowErrorDialog('Falta introducir la fecha de la factura.',null,'Aceptar',null,null,null)
		}
		else if(!clie_cfa)
		{
			globals.GCshowErrorDialog('Falta introducir el cliente de la factura.',null,'Aceptar',null,null,null)
		}
		else if(!gctbfacturaproformacabecera_to_tbmaestroclientes.id)
		{
			globals.GCshowErrorDialog('Falta introducir el cliente de la factura.',null,'Aceptar',null,null,null)
		}
		else if(fechcobro_cfa && fechcobro_cfa < fecha_cfa)
		{
			globals.GCshowErrorDialog('La fecha de cobro no puede ser inferior a la fecha de factura.',null,'Aceptar',null,null,null)
		}	
		else
		{
			if(globals.GCRegistroNuevo == 1)
			{				
					if(ser_cfa == 'P')
					{
						query = 'select [NumFacturaProforma] from [ParametrosAplicacion]'
						dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
						nup_cfa = dataset.getValue(1, 1) + 1		
					}					
			}		
			/*var Agno = new Date()
			Agno= Agno.getFullYear().toString()
			Agno = Agno.substr(2,2)*/
			if(cfpa_cfa == '')  cfpa_cfa = null
			if(gctbfacturaproformacabecera_to_tbfacturaproformalinea)
			{
				var rows = gctbfacturaproformacabecera_to_tbfacturaproformalinea.getSize();
				for(var i=1;i<=rows;i++)
				{
					var record = gctbfacturaproformacabecera_to_tbfacturaproformalinea.getRecord(i);
					if(record.clie_lfa != clie_cfa)
					{
						record.clie_lfa = clie_cfa;		
						databaseManager.saveData(record)
					}
				}	
				
			}
			_super.btn_save()
			var Agno = new Date()
			Agno= Agno.getFullYear()
			var a = new String()
			a = Agno.toString()
			a= a.substr(2,2)
			if(forms.FrmFacturasProformaGC.ser_cfa == 'P')
				{
					query = "select [nup_cfa] from [tbFacturaProformaCabecera] WHERE eje_cfa = "+a+" and [ser_cfa]  = 'P' order by [nup_cfa] desc"			
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var n = dataset.getValue(1,1)
					if(n == null) n = 0;
					/*forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords()
					var result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
					var fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize())
						{
						return;
						}
					forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
					result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
					}
					
					forms.dlg_ParametroAplicacionGC.numfacturaproforma = n;*/
					gcparametrosaplicacion_to_parametrosaplicacion.numfacturaproforma = n;
					databaseManager.saveData()
				}
				
			
			globals.GCRegistroNuevo = null	
				
			elements.ser_cfa.bgcolor = '#f0f0f0'
			elements.ser_cfa.readOnly= true
			elements.BtnCliente.visible = false
			elements.BtnAddCliente.visible = false
			elements.btn_googlemaps.visible = true
			elements.BtnFormaPago.visible = false
			elements.BtnObservacion.visible = false
			elements.BtnAñadirObs.visible = false
			elements.BtnAñadirFP.visible = false
			elements.BtnTransportes.visible = false
			elements.btn_EnvMail.visible = true
			elements.btn_DirFacturacion.visible = true
			elements.btnGenFactura.visible = true
			elements.btn_DatosRegistrales.visible = true
			elements.btn_Cliente.visible = true
			elements.eje_cfa.visible = false
			elements.lbleje_cfa.visible = true
			elements.ser_cfa.visible = false
			elements.lblser_cfa.visible = true
			elements.nup_cfa.visible = false
			elements.lblnup_cfa.visible = true
			elements.fld_fecha_cfa.visible = false
			elements.lblfecha_cfa.visible = true
			elements.fld_fechacobro_cfa.visible = false
			elements.lblfechcobro_cfa.visible = true	
			elements.situ.bgcolor = '#f0f0f0'
			elements.situ.readOnly = true
			elements.fld_clie_cfa.visible = false
			elements.lbl_clie_cfa.visible = true
			//notasclientes()
			databaseManager.refreshRecordFromDatabase(foundset,-1)
			
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
			{
				/** @type Number*/
				/*var idx = elements.tabs_mainPanel.tabIndex;
				var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
				forms[frm].controller.enabled = true
				forms[frm].controller.readOnly = false*/
			}
			
			
		}
	}
}

/**
 * @properties={typeid:24,uuid:"BEDB9025-B422-4138-AC7F-D1FE3F2CF81B"}
 */
function doEditser_cfa()
{
	ser_cfa ='P';	
	//elements.ser_cfa.bgcolor = '#feffe4'
	//elements.ser_cfa.readOnly= false
}

/**
 * @properties={typeid:24,uuid:"99B2E476-7489-4EB4-A5F0-CE78C344DE46"}
 */
function doEdit()
{
	_super.doEdit()
	//hide the non combobox fields
	/*elements.fld_companyCategory.visible = false
	elements.fld_companyIndustry.visible = false
	elements.fld_companyType.visible = false
	elements.fld_accountmanager.visible = false
	elements.fld_status.visible = false

	//show the comboboxes
	elements.fld_companyCategoryc.visible = true
	elements.fld_companyIndustryc.visible = true
	elements.fld_companyTypec.visible = true
	elements.fld_accountmanagerc.visible = true
	elements.fld_statusc.visible = true

	//hide the buttons that will mess things up
	elements.btn_openURL.visible = false
	elements.btn_sendEmail.visible = false

	//disable the navpanel at the bottom
	elements.tabs_mainPanel.enabled = false*/

	//for web client - disable the form showing in the tabpanel at the bottom
	elements.BtnCliente.visible = true
	elements.BtnAddCliente.visible = true
	elements.btn_googlemaps.visible = false
	elements.BtnFormaPago.visible = true
	elements.BtnObservacion.visible = true
	elements.BtnAñadirObs.visible = true
	elements.BtnAñadirFP.visible = true
	elements.BtnTransportes.visible = true
	elements.btn_EnvMail.visible = false
	elements.btn_DirFacturacion.visible = false
	elements.btnGenFactura.visible = false
	elements.btn_DatosRegistrales.visible = false
	elements.btn_Cliente.visible = false
	elements.fld_fecha_cfa.visible = true
	elements.lblfecha_cfa.visible = false
	elements.fld_fechacobro_cfa.visible = true
	elements.lblfechcobro_cfa.visible = false
	elements.fld_fecha_cfa.bgcolor = '#FFFF00';
	elements.fld_clie_cfa.bgcolor = '#FFFF00';
	elements.fld_clie_cfa.visible = true
	elements.lbl_clie_cfa.visible = false
	
	elements.fld_fecha_cfa.requestFocus()
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		/** @type Number*/
		/*var idx = elements.tabs_mainPanel.tabIndex;
		var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
		forms[frm].controller.enabled = false
		forms[frm].controller.readOnly = true*/
	}
	
	
}

/**
 * @properties={typeid:24,uuid:"3E8790CD-3DFA-47AC-9CE2-F45C566156B6"}
 */
function btn_cancel()
{
	globals.GCRegistroNuevo = null	
	_super.btn_cancel()
	elements.ser_cfa.bgcolor = '#f0f0f0'
	elements.ser_cfa.readOnly= true
	elements.BtnFormaPago.visible = false
	elements.BtnObservacion.visible = false
	elements.BtnAñadirObs.visible = false
	elements.BtnAñadirFP.visible = false
	elements.BtnTransportes.visible = false
	elements.BtnCliente.visible = false
	elements.BtnAddCliente.visible = false
	elements.btn_googlemaps.visible = true
	elements.btn_EnvMail.visible = true
	elements.btnGenFactura.visible = true
	elements.btn_DatosRegistrales.visible = true
	elements.btn_Cliente.visible = true
	elements.btn_DirFacturacion.visible = true
	elements.eje_cfa.visible = false
	elements.lbleje_cfa.visible = true
	elements.ser_cfa.visible = false
	elements.lblser_cfa.visible = true
	elements.nup_cfa.visible = false
	elements.lblnup_cfa.visible = true
	elements.eje_cfa.visible = false
	elements.lbleje_cfa.visible = true
	elements.ser_cfa.visible = false
	elements.lblser_cfa.visible = true
	elements.lblnup_cfa.visible = true
	elements.fld_fecha_cfa.visible = false
	elements.lblfecha_cfa.visible = true
	elements.fld_fechacobro_cfa.visible = false
	elements.lblfechcobro_cfa.visible = true
	elements.situ.bgcolor = '#f0f0f0'
	elements.situ.readOnly = true
	elements.fld_clie_cfa.visible = false
	elements.lbl_clie_cfa.visible = true
	//notasclientes()
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		/** @type Number*/
		/*var idx = elements.tabs_mainPanel.tabIndex;
		var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
		forms[frm].controller.enabled = true
		forms[frm].controller.readOnly = false*/
	}
	
	
}

/**
 * 
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"B1D5F010-6A34-4BF6-89AE-E5CA18AC3DE3"}
 * @AllowToRunInFind
 */
function onShow(firstShow,event)
{
	/*var win = application.getWindow('Conta')
	//setup the record status
	if(win != null)
	{
		win.destroy();
	}*/
	
	//make read only
	if(!globals.GClogin_usuario) globals.btn_SalirGC(event)
	 btn_cancel();
	onLoad(event)
	
	globals.GCnav_search = null
	foundset.loadAllRecords()
	controller.readOnly = true
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)

	//hide save/cancel btsn
	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
	elements.BtnCliente.visible = false
	elements.BtnAddCliente.visible = false
	elements.BtnFormaPago.visible = false
	elements.BtnObservacion.visible = false
	elements.BtnAñadirObs.visible = false
	elements.BtnAñadirFP.visible = false
	elements.BtnTransportes.visible = false
	elements.btn_EnvMail.enabled = true
	elements.btnGenFactura.enabled = true
	elements.btn_Cliente.enabled = true
	elements.eje_cfa.visible = false
	elements.lbleje_cfa.visible = true
	elements.ser_cfa.visible = false
	elements.lblser_cfa.visible = true
	elements.nup_cfa.visible = false
	elements.lblnup_cfa.visible = true
	elements.fld_fecha_cfa.visible = false
	elements.lblfecha_cfa.visible = true
	elements.fld_fechacobro_cfa.visible = false
	elements.lblfechcobro_cfa.visible = true
	globals.GCRegistroNuevo = null	
	forms.frm_nav_buttons_facturasGC.elements.btn_duplicate.enabled = true;
	forms.frm_nav_buttons_facturasGC.elements.lbl_duplicate.enabled = true;
	
	
	/*if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{*/
	//	elements.btn_contaagweb.visible = true;
	//	elements.btn_contaagweb.enabled = true;
	/*}
	else
	{
		elements.btn_contaagweb.visible = false;
		elements.btn_contaagweb.enabled = false;
	}*/
	
}

/**
 * @properties={typeid:24,uuid:"0BEC7F14-27BF-4DD0-B3A6-EE1D4D2A0C41"}
 */
function sub_setNewNumeroFacturaOrd()
{
	var query = 'select [NumFacturaProforma] from [ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	nup_cfa = dataset.getValue(1, 1) + 1	
	
	var Fecha = new Date()
	fecha_cfa = Fecha
}

/**
 * @properties={typeid:24,uuid:"6437AD06-7995-4158-A2C2-4375742ABAF4"}
 */
function sub_setEjercicio()
{
	var Agno = new Date()
	Agno= Agno.getFullYear()
	var a = new String()
	a = Agno.toString()
	a= a.substr(2,2)
	eje_cfa = a
}

/**
 * @properties={typeid:24,uuid:"149BB3C2-6EB6-45A6-900B-9E8D6F5350E5"}
 */
function sub_setFecha()
{
	var fecha=new Date();
	
	var d = fecha.getDate()
	var m = fecha.getMonth()+1
	var y = fecha.getFullYear()
	fecha = d + "-" + m + "-" + y
	fecha_cfa = fecha;
}

/**
 * @properties={typeid:24,uuid:"92B91B2C-991C-4C05-8B31-79B53D7A2986"}
 */
function validate_autoEnter()
{
	globals.GCRegistroNuevo = 1	
	elements.eje_cfa.visible = false
	elements.lbleje_cfa.visible = true
	elements.ser_cfa.visible = true
	elements.lblser_cfa.visible = false
	elements.nup_cfa.visible = false
	elements.lblnup_cfa.visible = true
	id = application.getUUID()
	usu_cfa = globals.GClogin_usuario
	ser_cfa = 'P';
	sub_setEjercicio();
	doEditser_cfa()
	sub_setNewNumeroFacturaOrd();	
	var fech = utils.dateFormat(new Date(),'dd-MM-yyyy')
	fecha_cfa = utils.parseDate(fech,'dd-MM-yyyy')
	
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"505FDEE3-063A-4DF4-B55C-3A78DB4A8804"}
 */
function validate_beforeDelete()
{
	var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Facturas.',null,'Aceptar',null,null,null)
		return 1
	}
	else if(situ == 'F')
	{
			//show dialog and return 1
			//show the tabpanel "dialog"
		globals.GCshowErrorDialog("Esta factura PROFORMA ya está facturada. Borre primero la factura y luego cambie la situación para poder borrarla. ", null,'Aceptar', null, null, null);
		return 1
	}
	else
	{
		return 0
	}			
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A6996A76-B729-466F-9AA9-62669A201DA3"}
 */
function onActionBtnCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmFacturasProforma';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Clientes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Clientes';
	//win.resizable = true;
	win.show(forms.dlgClientesGC)
	//win.show(forms.dialog_ClientesGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"08999CF2-05D0-4EB6-80CA-6F1B2082273C"}
 */
function onActionBtnFormasPago(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmFacturasProforma';
	//globals.GCshowDialogFormasPago('Formas de Pago', 1, null, null, true,null, null, null, null, null);
	var win = application.getWindow('Formas Pago')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Formas Pago", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Formas de Pago';
	//win.resizable = true;
	win.show(forms.dlgFormasPagoGCNG)
	//win.show(forms.dialog_FormasPagoGC)
}

/**
 * @properties={typeid:24,uuid:"322BFD66-0004-4CF0-BDD5-C565405744FD"}
 */
function print_default()
{
	
	//Generacion_Efecto_Factura();
	
	if(foundset.getSize() > 0) rpt_Factura_list();
}

/**
 * @properties={typeid:24,uuid:"9C6BB377-044F-4C07-885B-FE4518C1A13A"}
 * @AllowToRunInFind
 */
function rpt_Factura_list()
{
	try
	{
		forms.dlg_ImpresionFacturasProformaGC.DesdeEje = eje_cfa
		forms.dlg_ImpresionFacturasProformaGC.HastaEje = eje_cfa
		forms.dlg_ImpresionFacturasProformaGC.DesdeSer = ser_cfa
		forms.dlg_ImpresionFacturasProformaGC.HastaSer = ser_cfa
		forms.dlg_ImpresionFacturasProformaGC.DesdeNup = nup_cfa
		forms.dlg_ImpresionFacturasProformaGC.HastaNup = nup_cfa
		forms.dlg_ImpresionFacturasProformaGC.DesdeCliente = null
		forms.dlg_ImpresionFacturasProformaGC.onDataChangeDesdeCliente()
		forms.dlg_ImpresionFacturasProformaGC.HastaCliente = null
		forms.dlg_ImpresionFacturasProformaGC.onDataChangeHastaCliente()
		forms.dlg_ImpresionFacturasProformaGC.FacturaProForma = null
		forms.dlg_ImpresionFacturasProformaGC.FacturaE = null
		globals.GCshowDialogImpresionFacturasProforma('Impresión de Facturas Proforma',1,null,null,null,null,null,null,null,null)
		//globals.btn_runJasperReportFacturaVentas(eje_cfa,ser_cfa,nup_cfa,eje_cfa,ser_cfa,nup_cfa,clie_cfa,clie_cfa)
		
	}
	catch (e) 
	{
	   //plugins.dialogs.showErrorDialog('Error',e.toString(),'Ok')
	   application.output(e);   
	   return;
	}
}

/**
*
*
 * @properties={typeid:24,uuid:"B0C28674-D54C-4EAF-9AE6-67F3B56B3D88"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		//check to make sure that the address in question isn't used on any orders
		/*var bAdrCnt = addresses_to_orders_billing.getSize()
		var sAdrCnt = addresses_to_orders_shipping.getSize()

		if(bAdrCnt == 0 && sAdrCnt == 0)
		{*/
		var Agno = new Date()
		Agno= Agno.getFullYear()
		var a = new String()
		a = Agno.toString()
		a= a.substr(2,2)
		var ser = forms.FrmFacturasProformaGC.ser_cfa;
		foundset.deleteRecord()
		/*}
		else
		{
			//there are orders that use this address
			var msg = 'There are orders that use this address as a shipping or billing address.' +
			' Change the orders to a new address, then you can delete this address.'
			globals.GCshowErrorDialog(msg,'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null)
		}*/
		if(ser == 'P' || ser == null)
		{
			var query = "select [nup_cfa] from [tbFacturaProformaCabecera] WHERE eje_cfa = "+a+" and [ser_cfa]  = 'P' order by [nup_cfa] desc"			
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n == null) n = 0;
			/*forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords()
			var result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
			var fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
			while(result==false)
			{
				if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize())
				{
				return;
				}
			forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
			result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
			}
			
			forms.dlg_ParametroAplicacionGC.numfacturaproforma = n;
			*/
			gcparametrosaplicacion_to_parametrosaplicacion.numfacturaproforma = n;
			databaseManager.saveData()
		}
				
	}
}

/**
 * Handle changed data.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D2FC85D7-0C97-4F10-95DF-3273F80FFBEE"}
 */
function onDataChangeSerie(event) {
	// TODO Auto-generated method stub
	if(ser_cfa == 'P')
	{
		sub_setNewNumeroFacturaOrd();
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E853E71-BD78-4AD3-9BB6-0A041AB93CCB"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	elements.fld_clie_cfa.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE3364A6-7B1C-4030-8C34-94069C93BA8D"}
 */
function btn_BDCliente(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmFacturasProformaGC.btn_cancel()
	if(clie_cfa)
	{
		/*var win = application.getWindow('Maestros')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		win = application.createWindow("Maestros", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Clientes';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmFacturasProformaGC';
		forms.FrmClientesGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) */
		
		var query = "select [ID] from [tbMaestroClientes] where [IdCliente] = " + clie_cfa
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		
		var result = forms.dlg_ClientesGC.foundset.selectRecord(dataset.getValue(1,1))
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ClientesGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ClientesGC.foundset.getSize())
			{
				return;
			}
			forms.dlg_ClientesGC.foundset.setSelectedIndex(forms.dlg_ClientesGC.foundset.getSize());
		result = forms.dlg_ClientesGC.foundset.selectRecord(dataset.getValue(1,1));
		}
		if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ClientesGC.elements.idcodigo.bgcolor = '#f0f0f0';
		forms.dlg_ClientesGC.elements.idcodigo.readOnly = true;
		forms.dlg_ClientesGC.elements.idcodigo.visible = false;
		forms.dlg_ClientesGC.elements.lblidcodigo.visible = true;
		forms.dlg_ClientesGC.elements.btn_print.enabled = true;
		globals.GCshowDialogCliente('BD Clientes', 1, null, null, true, null, null, null, null, null);
		
	}
	else
	{
		/*win = application.getWindow('Maestros')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		win = application.createWindow("Maestros", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Clientes';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmFacturasProformaGC';
		forms.FrmClientesGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) */
		forms.dlg_ClientesGC.foundset.setSelectedIndex(1)
		if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ClientesGC.elements.idcodigo.readOnly = true;
		forms.dlg_ClientesGC.elements.idcodigo.bgcolor = '#f0f0f0';
		forms.dlg_ClientesGC.elements.idcodigo.visible = false;
		forms.dlg_ClientesGC.elements.lblidcodigo.visible = true;
		forms.dlg_ClientesGC.elements.btn_print.enabled = true;
		globals.GCshowDialogCliente('BD Cliente', 1, null, null, true, null, null, null, null, null);
		
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AC0453D3-9B17-4D24-8B58-5D9EE0C10280"}
 */
function onFocusLostDtoPP(event) {
	// TODO Auto-generated method stub
	impbie_cfa = null
	cuotaiva_cfa = null
	impbie2_cfa = null
	cuotaiva2_cfa = null
	impbie3_cfa = null
	cuotaiva3_cfa = null
	impre = null
	impre2 = null
	impre3 = null
	if(ser_cfa == null)
	{
		var ser = 'IS NULL'
	}
	else
	{
		ser = "= '"+ser_cfa+"'"
	}
	var query = "select DISTINCT(piva_lfa), ISNULL(SUM(impor_lfa),0),ISNULL(SUM(importot_lfa),0)-ISNULL(SUM(impor_lfa),0) as IVAlinea "+
				"FROM tbFacturaProformaLinea WHERE eje_lfa = "+eje_cfa+
				" AND ser_lfa "+ser+" AND nup_lfa = "+nup_cfa+
				" GROUP BY piva_lfa"+
				" ORDER BY piva_lfa DESC";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 3)
	var rows = dataset.getMaxRowIndex()
	for(var i=1;i<=rows;i++)
	{
		if(i == 1) 
		{
			piva_cfa = dataset.getValue(i,1)
			impbie_cfa = dataset.getValue(i,2)
			var Dtopp = impbie_cfa * depp_cfa * 0.01
			impbie_cfa = globals.GCROUND(impbie_cfa - Dtopp,2)
			if(dataset.getValue(i,3)) cuotaiva_cfa = globals.GCROUND(dataset.getValue(i,3),2);
			else cuotaiva_cfa = globals.GCROUND(impbie_cfa * piva_cfa * 0.01,2)
			//cuotaiva_cfa =globals.GCROUND(cuotaiva_cfa,2)
			if(gctbfacturaproformacabecera_to_tbmaestroclientes.aplicarre == 1)
			{
				query = "select [IvaRE] FROM [tbMaestroTipoIva] "+
						"WHERE [Factor] = "+piva_cfa;
				var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var re = dataset2.getValue(1,1)
				impre = globals.GCROUND((impbie_cfa * re * 0.01),2)
			}
			else
			{
				impre = null
			}
			if(impbie_cfa == 0) 
			{
				impbie_cfa = null;
				cuotaiva_cfa = null;
				piva_cfa = null;
				impre = null;
			}	
		}
		else if(i == 2) 
		{
			piva2_cfa = dataset.getValue(i,1)
			impbie2_cfa = dataset.getValue(i,2)
			Dtopp = impbie2_cfa * depp_cfa * 0.01
			impbie2_cfa = globals.GCROUND(impbie2_cfa - Dtopp,2)
			if(dataset.getValue(i,3)) cuotaiva_cfa = globals.GCROUND(dataset.getValue(i,3),2);
			else cuotaiva2_cfa = globals.GCROUND(impbie2_cfa * piva2_cfa * 0.01,2)
			//cuotaiva2_cfa =globals.GCROUND(cuotaiva2_cfa,2)
			if(gctbfacturaproformacabecera_to_tbmaestroclientes.aplicarre == 1)
			{
				query = "select [IvaRE] FROM [tbMaestroTipoIva] "+
						"WHERE [Factor] = "+piva2_cfa;
				dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				re = dataset2.getValue(1,1)
				impre2 = globals.GCROUND((impbie2_cfa * re * 0.01),2)
			}
			else
			{
				impre2 = null
			}
			if(impbie2_cfa == 0) 
			{
				impbie2_cfa = null;
				cuotaiva2_cfa = null;
				piva2_cfa = null;
				impre2 = null;
			}			
			
		}
		else if(i == 3) 
		{
			piva3_cfa = dataset.getValue(i,1)
			impbie3_cfa = dataset.getValue(i,2)
			Dtopp = impbie3_cfa * depp_cfa * 0.01
			impbie3_cfa = globals.GCROUND(impbie3_cfa - Dtopp,2)
			if(dataset.getValue(i,3)) cuotaiva_cfa = globals.GCROUND(dataset.getValue(i,3),2);
			else cuotaiva3_cfa = globals.GCROUND(impbie3_cfa * piva3_cfa * 0.01,2)
			//cuotaiva3_cfa =globals.GCROUND(cuotaiva3_cfa,2)
			if(gctbfacturaproformacabecera_to_tbmaestroclientes.aplicarre == 1)
			{
				query = "select [IvaRE] FROM [tbMaestroTipoIva] "+
						"WHERE [Factor] = "+piva3_cfa;
				dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				re = dataset2.getValue(1,1)
				impre3 = globals.GCROUND((impbie3_cfa * re * 0.01),2)
			}
			else
			{
				impre3 = null
			}
			if(impbie3_cfa == 0) 
			{
				impbie3_cfa = null;
				cuotaiva3_cfa = null;
				piva3_cfa = null;
				impre3 = null;
			}	
		}
	}
	/*var Dtopp = impbre_cfa * depp_cfa * 0.01
	impbie_cfa = globals.GCROUND(impbre_cfa - Dtopp,2)
	cuotaiva_cfa = impbie_cfa * piva_cfa * 0.01
	cuotaiva_cfa =globals.GCROUND(cuotaiva_cfa,2)
	*/
	onFocusLostgtosfinan(event) 
	//impnee_cfa = impbie_cfa + impbie2_cfa + impbie2_cfa + cuotaiva_cfa  + cuotaiva2_cfa  + cuotaiva3_cfa + impgtosfinan
	//impnee_cfa = globals.GCROUND(impnee_cfa,2)
	
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"29EB94C2-DFD1-4F0C-8A81-F13046694DBD"}
 */
function onFocusLostIva(event) {
	// TODO Auto-generated method stub
	onFocusLostDtoPP(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"307AF893-5765-4AA5-BC35-3F491BAB657D"}
 */
function onActionanticipo(event) {
	// TODO Auto-generated method stub
	elements.fld_depp_cfa.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4FD3DA00-D063-48B6-B5EE-0994A6CE9938"}
 */
function onActiondto(event) {
	// TODO Auto-generated method stub
	elements.fld_gtosfinan_cfa.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E7DBCB5-61CE-497C-A6D9-3FB890A4B54B"}
 */
function onActiongtosfinan(event) {
	// TODO Auto-generated method stub
	onFocusLostgtosfinan(event)
	
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4C445458-AD5E-4F3F-ABDE-E3074561B6F7"}
 */
function onFocusLostgtosfinan(event) {
	// TODO Auto-generated method stub
	impgtosfinan = (impbie_cfa + impbie2_cfa + impbie3_cfa) * gtosfinan_cfa  * 0.01
	impgtosfinan = globals.GCROUND(impgtosfinan,2)
	if(impgtosfinan == 0) impgtosfinan = null;
	impnee_cfa = globals.GCROUND(impbie_cfa + impbie2_cfa + impbie3_cfa + cuotaiva_cfa  + cuotaiva2_cfa  + cuotaiva3_cfa + impre + impre2 + impre3 + impgtosfinan,2)
	//impnee_cfa = globals.GCROUND(impnee_cfa,2)
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"A48D7D9B-5F18-457A-BD3B-C7B23CB0F63C"}
 */
function onDataChangeFP() {
	// TODO Auto-generated method stub
	var query = "select [denom_fp] from [tbMaestroformpago] where [codig_fp] = '" + cfpa_cfa +"'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	desccfpa_cfa = dataset.getValue(1,1);
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"321971B7-A942-4A04-BF07-15C56AF4DAAF"}
 */
function onActionEnviarEmail(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmFacturasProformaGC.btn_cancel()
	
	if(id)
	{
		var query = 'select [ServidorCorreoSMTP] from [ParametrosAplicacion]'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var SMTP = dataset.getValue(1,1)
		if(SMTP == null || SMTP == '')
		{
			globals.GCshowErrorDialog('No está definido el Servidor de Correo SMTP en los Parametros de la Aplicación.',null,'Aceptar',null,null,null)
		}
		else
		{
			query = 'select imde_us,nuser_us,passw_us from [usuarios] WHERE [cod_us] = ' + globals.GClogin_usuario
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var EmailFrom = dataset.getValue(1,1)
			var UserEmail = dataset.getValue(1,2)
			var PasswEmail = dataset.getValue(1,3)
			if(EmailFrom == null || EmailFrom == '')
			{
				globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else if(UserEmail == null || UserEmail == '')
			{
				globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else if(PasswEmail == null || PasswEmail == '')
			{
				globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
			}
			else
			{
				globals.GCFormulario = 'FrmFacturasProforma'
				globals.GCshowDialogEnvioMail('Impresión y Envio Factura',1,null,null,null,null,null,null,null,null)
			}
		}
	}
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"D19B971F-1426-4705-B919-BB61B32CA67E"}
 */
function onDataChangeCliente() {
	// TODO Auto-generated method stub
	if(clie_cfa)
	{
		if(gctbfacturaproformacabecera_to_tbmaestroclientes)
		{
			cfpa_cfa = gctbfacturaproformacabecera_to_tbmaestroclientes.idformapago
			if(cfpa_cfa) onDataChangeFP()
			piva_cfa = gctbfacturaproformacabecera_to_tbmaestroclientes.tipoiva;
			if(piva_cfa == null)
			{
				piva_cfa = 0;
			}		
			if(!gctbfacturaproformacabecera_to_tbmaestroclientes.cif)
			{
				globals.GCshowWarningDialog('En la ficha de este cliente falta indicar el cif. Agregaselo para que sea una factura legal.',null,'Aceptar',null,null,null)
			}
		}
		else
		{
			cfpa_cfa = null;
			piva_cfa = 0;
		}
	}
	else
	{
		cfpa_cfa = null;
		piva_cfa = 0;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E38C85B5-35B6-4775-82CE-78C5009801DE"}
 */
function onActioncli(event) {
	// TODO Auto-generated method stub
	onDataChangeCliente()
	elements.fld_fechacobro_cfa.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"002BE1E1-A48A-4AE1-98EE-BF3D91908ED8"}
 */
function onActioncliexp(event) {
	// TODO Auto-generated method stub
	onDataChangeCliente()
	elements.fld_fechacobro_cfa.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7547E3CF-D61B-4D2B-B9E6-2010FB59314E"}
 */
function onActionfechacobro(event) {
	// TODO Auto-generated method stub
	onDataChangefechacobro()
	elements.fld_cfpa_cfa.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2BDC6B01-94C2-41D5-B97D-8E8D3FE85379"}
 */
function onActionFP(event) {
	// TODO Auto-generated method stub
	onDataChangeFP()
	elements.fld_desccfpa_cfa.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"58BF3444-5427-40F4-BB92-5D5E65E81D36"}
 */
function onActiondescFP(event) {
	// TODO Auto-generated method stub
	elements.fld_obse_cfa.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CC84AA97-641C-4746-9F6E-FBB3640EFD3D"}
 */
function onActionobse(event) {
	// TODO Auto-generated method stub
	elements.fld_fenvio.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2494544C-BB10-4345-84D0-7D07C27EC869"}
 */
function onActionfenvio(event) {
	// TODO Auto-generated method stub
	elements.fld_depp_cfa.requestFocus()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"9C9FF71B-DEEB-4DC4-A1C6-09820BFDF8E7"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var agno = fecha_cfa.getFullYear();
	var a = new String()
	a = agno.toString()
	a= a.substr(2,2)
	var fech = utils.dateFormat(fecha_cfa,'dd-MM-yyyy')
	fecha_cfa = utils.parseDate(fech,'dd-MM-yyyy')	
	
	var rows = forms.FrmFacturasProformaGC.foundset.gctbfacturaproformacabecera_to_tbfacturaproformalinea.getSize();
	if(rows > 0)
	{
		for(var i=1;i<=rows;i++)
		{
			var record = forms.FrmFacturasProformaGC.foundset.gctbfacturaproformacabecera_to_tbfacturaproformalinea.getRecord(i);
			
			var fecha = record.fecha_lfa;
			if(fecha)
			{
				record.fecha_lfa = forms.FrmFacturasProformaGC.foundset.fecha_cfa;
			}
			if(eje_cfa != a) 
			{		
				record.eje_lfa = a;				
			}
		}
		
		
		
	}
	eje_cfa = a;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DDDCBEE4-A304-42C2-B0ED-951C5314644A"}
 */
function onActioniva1(event) {
	// TODO Auto-generated method stub
	elements.piva2_cfa.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"CA3E3979-028B-4E71-AB21-A9AFD2AAF56E"}
 */
function onActioniva2(event) {
	// TODO Auto-generated method stub
	elements.piva3_cfa.requestFocus()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"363E33BA-DA1C-41E6-994D-EDFB4739D008"}
 */
function onDataChangefechacobro() {
	// TODO Auto-generated method stub
	if(fechcobro_cfa)
	{
		var fech = utils.dateFormat(fechcobro_cfa,'dd-MM-yyyy')
		fechcobro_cfa = utils.parseDate(fech,'dd-MM-yyyy')	
		
		if(fechcobro_cfa < fecha_cfa)
		{
			elements.fld_fechacobro_cfa.requestFocus()
			globals.GCshowErrorDialog('La fecha de cobro no puede ser inferior a la fecha Factura.',null,'Aceptar',null,null,null)			
		}
		else
		{
			if(gctbfacturaproformacabecera_to_tbmaestroclientes)
			{
				var clidiapago1 = gctbfacturaproformacabecera_to_tbmaestroclientes.diapago1;
				var clidiapago2 = gctbfacturaproformacabecera_to_tbmaestroclientes.diapago2;
				var clidiapago3 = gctbfacturaproformacabecera_to_tbmaestroclientes.diapago3;
				var diafechcobro = fechcobro_cfa.getDate()
				if(clidiapago1 != null && clidiapago1 != '')
				{
					if(diafechcobro != clidiapago1 && diafechcobro != clidiapago2 && diafechcobro != clidiapago3)
					{
						var d = clidiapago1;
						if(clidiapago2 != null && clidiapago2 != '')
						{
							d = d+' y el '+clidiapago2;
						}
						if(clidiapago3 != null && clidiapago3 != '')
						{
							d = d+' y el '+clidiapago3;
						}
						d = d+'. Cambie la fecha de cobro.'
						globals.GCshowInfoDialog('El cliente tiene días de pago el '+d, null, null, null, null, null)
					}
				}
			}
		}
		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"90D1F557-2A7A-4476-81DC-47492863EE15"}
 */
function btnGenFactura(event) {
	if(globals.GCisEditing()) forms.FrmFacturasProformaGC.btn_cancel()
	
	var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Facturas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(eje_cfa && ser_cfa && nup_cfa)
		{
			if(situ == null || situ != 'F')
			{
				var uid = id;
				var result = forms.dlg_Generacion_Factura4GC.foundset.selectRecord(uid)
				var fsCount = databaseManager.getFoundSetCount(forms.dlg_Generacion_Factura4GC.foundset);
				while(result==false)
				{
					if(fsCount == forms.dlg_Generacion_Factura4GC.foundset.getSize()) return;
					forms.dlg_Generacion_Factura4GC.foundset.setSelectedIndex(forms.dlg_Generacion_Factura4GC.foundset.getSize());
					result = forms.dlg_Generacion_Factura4GC.foundset.selectRecord(uid);
				}
				//start a transaction
				//if(!globals.GCisEditing()) globals.GCstartEditing()
			
				//setup the method to execute when the dialog closes
				//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deletePresupuestoLinea()'
			
				//show the "fake" dialog
				globals.GCshowDialogGeneracionFactura4('Generación Factura', 1, null, null, true, null, null, null, null, null);
			}
			else if(situ == 'F')
			{
				globals.GCshowErrorDialog('Factura Proforma ya facturada anteriormente.',null,'Aceptar',null,null,null)
			}
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param v_event
 *
 * @SuppressWarnings(deprecated)
 *
 *
  * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"56213798-FAAD-4D6F-B5A0-A9EEF048CED1"}
 */
function handle_shortCut(v_event)
{
	globals.GCevento = null
	if(v_event.getType() == 'control F10')
	{
		if(globals.GCisEditing())
		{
			elements.situ.bgcolor = '#feffe4'
			elements.situ.readOnly = false
		}
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C9963919-F456-4CB3-873D-1B808AD36C08"}
 */
function btn_AddCliente(event) {
	// TODO Auto-generated method stub
	if(!globals.GCisEditing()) globals.GCstartEditing()	
	forms.dlg_ClientesGC.ClienteID = null;
	forms.dlg_ClientesGC.foundset.newRecord(true)
	forms.dlg_ClientesGC.id = application.getUUID()
	forms.dlg_ClientesGC.pais = 'ES'
	forms.dlg_ClientesGC.elements.idcodigo.editable = true
	forms.dlg_ClientesGC.elements.idcodigo.bgcolor = '#FFFF00'//'#ffffff'
	forms.dlg_ClientesGC.elements.idcodigo.visible = true
	forms.dlg_ClientesGC.elements.lblidcodigo.visible = false	
	forms.dlg_ClientesGC.elements.btn_print.enabled = false	
	forms.dlg_ClientesGC.elements.idcodigo.requestFocus()
	
	globals.GCshowDialogCliente('BD Cliente', 1, null, null, true, null, null, null, null, null);
}

/**
 * @AllowToRunInFind
 *
 *
 *
 * @properties={typeid:24,uuid:"A9107734-3B17-46CD-889E-96F819EE377E"}
 */
function btn_DireccionFacturacion()
{
	if(globals.GCisEditing()) forms.FrmFacturasProformaGC.btn_cancel()
	if(clie_cfa)
	{
		if(forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes.gctbmaestroclientes_to_tbmaestroclientesdirecfacturacion)
		{
			if(forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes.gctbmaestroclientes_to_tbmaestroclientesdirecfacturacion.getSize() > 0)
			{
				forms.dlg_ClientesDireccionFacturacionGC.foundset.loadAllRecords()
				var result = forms.dlg_ClientesDireccionFacturacionGC.foundset.selectRecord(clie_cfa)
				var fsCount = databaseManager.getFoundSetCount(forms.dlg_ClientesDireccionFacturacionGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.dlg_ClientesDireccionFacturacionGC.foundset.getSize())
					{
					return;
					}
				forms.dlg_ClientesDireccionFacturacionGC.foundset.setSelectedIndex(forms.dlg_ClientesDireccionFacturacionGC.foundset.getSize());
				result = forms.dlg_ClientesDireccionFacturacionGC.foundset.selectRecord(clie_cfa);
				}
				//start a transaction
				if(!globals.GCisEditing()) globals.GCstartEditing()
			    //setup the method to execute when the dialog closes
				globals.GCdialog_performMethod = 'forms.FrmFacturasProformaGC.sub_deleteDireccion()'
				
				//show the "fake" dialog
				globals.GCshowDialogClientesDireccionFacturacion('Editar Dirección', 1, null, null, true, 'Borrar Dirección', null, null, null, null);
			}
			else
			{
				if(clie_cfa)
				{
					if(!globals.GCisEditing()) 
					{	
						globals.GCstartEditing()
				
					//make a new record
					forms.dlg_ClientesDireccionFacturacionGC.foundset.newRecord(true)
				
					forms.dlg_ClientesDireccionFacturacionGC.idcliente = clie_cfa;
					forms.dlg_ClientesDireccionFacturacionGC.cif = forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes.cif;
					forms.dlg_ClientesDireccionFacturacionGC.razonsocial = forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes.desccliente;
					forms.dlg_ClientesDireccionFacturacionGC.direccionfiscal = forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes.direccion;
					forms.dlg_ClientesDireccionFacturacionGC.poblacion = forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes.poblacion;
					forms.dlg_ClientesDireccionFacturacionGC.provincia = forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes.provincia;			
					forms.dlg_ClientesDireccionFacturacionGC.codpostal =forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes.codpostal;			
					forms.dlg_ClientesDireccionFacturacionGC.pais = forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes.GCtbmaestroclientes_to_pais.pai_nombre;
					
				
					//databaseManager.saveData();
				
					//show the "fake" dialog
					globals.GCshowDialogClientesDireccionFacturacion('Nueva Dirección', null, null, null, null, null, null, null, null, null);
				
					//go first field
					forms.dlg_ClientesDireccionFacturacionGC.elements.cif.requestFocus();
					}
				}
			}
		}
	}
}

/**
*
*
 * @properties={typeid:24,uuid:"5D061502-DE06-430A-8563-093DF7025591"}
 */
function sub_deleteDireccion()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Dirección')
	{
		//check to make sure that the address in question isn't used on any orders
		/*var bAdrCnt = addresses_to_orders_billing.getSize()
		var sAdrCnt = addresses_to_orders_shipping.getSize()

		if(bAdrCnt == 0 && sAdrCnt == 0)
		{*/
			forms.dlg_ClientesDireccionFacturacionGC.foundset.deleteRecord()
		/*}
		else
		{
			//there are orders that use this address
			var msg = 'There are orders that use this address as a shipping or billing address.' +
			' Change the orders to a new address, then you can delete this address.'
			globals.GCshowErrorDialog(msg,'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null)
		}*/
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
  *
 * @properties={typeid:24,uuid:"4CAF7025-D038-4C69-AABF-A9AEE08AF067"}
 */
function btngooglemaps(event) {
	// TODO Auto-generated method stub
	if(gctbfacturaproformacabecera_to_tbmaestroclientes && gctbfacturaproformacabecera_to_tbmaestroclientes.direccion)
	{
		var dir = utils.stringReplace(gctbfacturaproformacabecera_to_tbmaestroclientes.direccion,' ','+')
		var pob = utils.stringReplace(gctbfacturaproformacabecera_to_tbmaestroclientes.poblacion,' ','+')
		application.showURL( 'https://maps.google.com/maps?q=' + dir + ','+pob,'_blank' );
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"FCE7694D-3650-445A-8896-10DAF6FC207A"}
 */
function onActionObservacion(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmFacturasProformaGC';
	//globals.GCshowDialogObservacion('BD Observaciones', 1, null, null, true,null, null, null, null, null);
	var win = application.getWindow('Observaciones')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Observaciones", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Observaciones';
	//win.resizable = true;
	win.show(forms.dlgObservacionGCNG)
	//win.show(forms.dialog_ObservacionGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"E79A17A3-34FF-493F-B9AF-8B1A763BAA6F"}
 */
function onActionBtnTransportes(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmFacturasProformaGC';
	//globals.GCshowDialogTransportistas('Transportistas', 1, null, null, true,null, null, null, null, null);
	var win = application.getWindow('Transportistas')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Transportistas", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Transportistas';
	//win.resizable = true;
	win.show(forms.dlgTransportesGCNG)
	//win.show(forms.dialog_TransportistasGC)
}

/**
 *
 * @properties={typeid:24,uuid:"E4F6AD65-BCAE-4AB7-92AE-3CA38F508D7C"}
 */
function notasclientes()
{
	if(clie_cfa && gctbfacturaproformacabecera_to_tbmaestroclientes)
	{
		if(gctbfacturaproformacabecera_to_tbmaestroclientes.tbmaestroclientes_to_tbmaestroclientesnotas &&
		gctbfacturaproformacabecera_to_tbmaestroclientes.tbmaestroclientes_to_tbmaestroclientesnotas.getSize() > 0)
		{
			elements.BtnNotasCliente.visible = true
		}
		else
		{
			elements.BtnNotasCliente.visible = false
		}
	}
	else
	{
		elements.BtnNotasCliente.visible = false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4F1D2857-93EB-4E84-949B-A89F21961191"}
 */
function btn_addobservacion(event) {
	// TODO Auto-generated method stub
	/*if(obse_cfa)
	{
		var query = "select id from [tbmaestroobservaciones] where [descripcion] ='"+ obse_cfa +"'"
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		
		var uuid = dataset.getValue(1,1);
		
		if(!uuid)
		{
			forms.FrmObservacionGC.foundset.newRecord(true)
			forms.FrmObservacionGC.validate_autoEnter()
			forms.FrmObservacionGC.descripcion = obse_cfa;
			
			var bool = databaseManager.saveData(forms.FrmObservacionGC.foundset)
			
			if(bool == true) globals.GCshowInfoDialog('Observación añadida correctamente a la Base de Datos.',null,'Aceptar',null,null,null)
		}		
	}*/
	if(!globals.GCisEditing()) globals.GCstartEditing()
	forms.dlg_ObservacionesGC.foundset.newRecord(true)
	forms.dlg_ObservacionesGC.validate_autoEnter()
	if(obse_cfa)
	{
		var query = "select id from [tbmaestroobservaciones] where [descripcion] ='"+ obse_cfa +"'"
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)		
		var uuid = dataset.getValue(1,1);		
		if(!uuid)
		{
			forms.dlg_ObservacionesGC.descripcion = obse_cfa;
		}
	}
	
	//show the "fake" dialog
	globals.GCshowDialogObserv('Nueva Observación', null, null, null, null, null, null, null, null, null);

	//go first field
	forms.dlg_ObservacionesGC.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"F8504263-7DCF-46AF-AD50-88795308CDA9"}
 */
function btn_addFP(event) {
	// TODO Auto-generated method stub
	if(!globals.GCisEditing()) globals.GCstartEditing()
	forms.dlg_FormaPagoGC.foundset.newRecord(true)
	forms.dlg_FormaPagoGC.validate_autoEnter()
	if(!cfpa_cfa && desccfpa_cfa)
	{
		forms.dlg_FormaPagoGC.denom_fp = desccfpa_cfa;		
	}
	
	//show the "fake" dialog
	globals.GCshowDialogFP('Nueva Forma de Pago', null, null, null, null, null, null, null, null, null);

	//go first field
	forms.dlg_FormaPagoGC.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"8197449D-F72E-4427-BD9D-A1E481ECDB1E"}
 */
function onActionDatosFactura(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	
	var query = "select NºEmpresa from ParametrosAplicacion where NºEmpresa = 1";
	if(globals.GCconex == null) var con = 'conexiongestioncomercialag'
	else con = globals.GCconex
	var dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
	var emp = dataset.getValue(1,1);
	if(emp == null) 
	{
		forms.dlgDatosRegistro2GC.foundset.newRecord(true)
		    				
		forms.dlgDatosRegistro2GC.nºempresa = 1;
		forms.dlgDatosRegistro2GC.propiedad = 'AG Informática y Servicios S.A.'
		databaseManager.saveData()
	}
	forms.dlgDatosRegistro2GC.foundset.selectRecord(1)
	//start a transaction
	if(!globals.GCisEditing()) globals.GCstartEditing()
	
	globals.GCshowDialogDatosRegistro2('Datos del Registro Mercantil de la Sociedad', 1, null, null, true, null, null, null, null, null);
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"26C9F108-38FB-4D01-9C01-03EEB3F86A0E"}
 */
function btn_listadoFacturas(event) {
	
	globals.GCFormulario = 'FrmFaturasProformaGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialog_FacturasProforma3')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialog_FacturasProforma3", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'Últimas Facturas Proforma';
	//win.resizable = true;
	//win.show(forms.dialog_Clientes2GC)
	win.show(forms.lst_FacturasProforma2GC)

}
