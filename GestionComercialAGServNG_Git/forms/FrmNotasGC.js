/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"570DA76C-D1B7-4E0C-AF9E-828EAAC845C5"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	btn_tabLineas()
	plugins.window.createShortcut('control F10', handle_shortCut);
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @properties={typeid:24,uuid:"CF3565CB-9429-4C69-848A-DCADF37F98AE"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_Nota = id;
	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
			globals.GCRegistroNuevo = null
			doEdit()
		}
	}
	//databaseManager.acquireLock(foundset, 0);
	if(GCtbnotacabecera_to_tbnotalinea)
	{
		if(GCtbnotacabecera_to_tbnotalinea.getSize() > 0)
		{
			forms.lst_Notas_LineasGC.foundset.setSelectedIndex(1)
		}
	}
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"BF93787A-A23B-48DE-BBC4-6D634AF7F171"}
 */
function btn_save(event)
{
	if(situcobrado == 'C' && forms.FrmNotasGC.elements.situcobrado.readOnly == true)
	{
		var methd = 'forms.FrmNotasGC.btn_cancel()'
		globals.GCshowErrorDialog('Factura ya cobrada.',methd,'Aceptar',null,null,null)
	}
	else if(!fecha_cfa)
	{
		globals.GCshowErrorDialog('Falta introducir la fecha de la factura.',null,'Aceptar',null,null,null)
	}
	else if(!clie_cfa && !descclie_cfa)
	{
		globals.GCshowErrorDialog('Falta introducir el cliente de la factura.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCRegistroNuevo == 1)
		{
			
				var query = 'select [NumNota] from [ParametrosAplicacion]'
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				nup_cfa = dataset.getValue(1, 1) + 1
				
		}		
		/*var Agno = new Date()
		Agno= Agno.getFullYear().toString()
		Agno = Agno.substr(2,2)*/
		if(cfpa_cfa == '')  cfpa_cfa = null
		if(GCtbnotacabecera_to_tbnotalinea)
		{
			var rows = GCtbnotacabecera_to_tbnotalinea.getSize();
			for(var i=1;i<=rows;i++)
			{
				var record = GCtbnotacabecera_to_tbnotalinea.getRecord(i);
				if(record.clie_lfa != clie_cfa)
				{
					record.clie_lfa = clie_cfa;		
					databaseManager.saveData(record)
				}
			}			
		}
		_super.btn_save()
		
				query = "select [nup_cfa] from [tbNotaCabecera] order by [nup_cfa] desc"			
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
				
				forms.dlg_ParametroAplicacionGC.numnota = n;*/
				gcparametrosaplicacion_to_parametrosaplicacion.numnota = n;
				databaseManager.saveData()
			
		
		globals.GCRegistroNuevo = null	
			
		elements.situcobrado.bgcolor = '#f0f0f0'
		elements.situcobrado.readOnly = true	
		elements.BtnCliente.visible = false
		elements.BtnFormaPago.visible = false
		elements.btn_EnvMail.visible = true
		elements.btn_Cliente.visible = true
		elements.eje_cfa.visible = false
		elements.lbleje_cfa.visible = true
		elements.nup_cfa.visible = false
		elements.lblnup_cfa.visible = true
		elements.fld_fecha_cfa.visible = false
		elements.lblfecha_cfa.visible = true
		databaseManager.refreshRecordFromDatabase(foundset,-1)
		
		if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
		{
			/** @type Number*/
			var idx = elements.tabs_mainPanel.tabIndex;
			var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
			forms[frm].controller.enabled = true
			forms[frm].controller.readOnly = false
		}
	}
}

/**
 * @properties={typeid:24,uuid:"2A1D6F43-BDD9-455A-92E5-83F10801C829"}
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
	elements.BtnFormaPago.visible = true
	elements.btn_EnvMail.visible = false
	elements.btn_Cliente.visible = false
	elements.fld_fecha_cfa.visible = true
	elements.lblfecha_cfa.visible = false
	
	
	elements.fld_fecha_cfa.requestFocus()
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		/** @type Number*/
		var idx = elements.tabs_mainPanel.tabIndex;
		var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
		forms[frm].controller.enabled = false
		forms[frm].controller.readOnly = true
	}
}

/**
 * @properties={typeid:24,uuid:"16F6AC89-7AAF-437B-A05A-99D3D4D6184A"}
 */
function btn_cancel()
{
	globals.GCRegistroNuevo = null	
	_super.btn_cancel()
	elements.situcobrado.bgcolor = '#f0f0f0'
	elements.situcobrado.readOnly = true		
	elements.BtnFormaPago.visible = false
	elements.BtnCliente.visible = false
	elements.btn_EnvMail.visible = true
	elements.btn_Cliente.visible = true
	elements.eje_cfa.visible = false
	elements.lbleje_cfa.visible = true
	elements.nup_cfa.visible = false
	elements.lblnup_cfa.visible = true
	elements.eje_cfa.visible = false
	elements.lbleje_cfa.visible = true
	elements.nup_cfa.visible = false
	elements.lblnup_cfa.visible = true
	elements.fld_fecha_cfa.visible = false
	elements.lblfecha_cfa.visible = true
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		/** @type Number*/
		var idx = elements.tabs_mainPanel.tabIndex;
		var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
		forms[frm].controller.enabled = true
		forms[frm].controller.readOnly = false
	}
}

/**
 * 
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"5532D7B0-E8DA-4F10-BE1B-AB2A885CF097"}
 * @AllowToRunInFind
 */
function onShow(firstShow,event)
{
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
	elements.BtnFormaPago.visible = false
	elements.btn_EnvMail.enabled = true
	elements.btn_Cliente.enabled = true
	elements.eje_cfa.visible = false
	elements.lbleje_cfa.visible = true
	elements.nup_cfa.visible = false
	elements.lblnup_cfa.visible = true
	elements.fld_fecha_cfa.visible = false
	elements.lblfecha_cfa.visible = true
	globals.GCRegistroNuevo = null	
}

/**
 *
 * @properties={typeid:24,uuid:"73D5438E-B7E2-4570-A30F-B547147AFEEC"}
 */
function btn_tabLineas()
{
	if(globals.GCisEditing()) btn_cancel()
	//{
		tabs_dimAll()
		elements.lblLineas.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 1)
		{
			elements.tabs_mainPanel.tabIndex = 1
		}
	//}
}

/**
*
*
 * @properties={typeid:24,uuid:"93C1082E-DF0B-4FC8-9044-2C82998A3025"}
 */
function btn_tabGCultimasnotas()
{
	//if(!globals.GCisEditing()) //if there is a transaction - we're editing something
	//{
		tabs_dimAll()
		elements.lblGCultimasnotas.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 2)
		{
			elements.tabs_mainPanel.tabIndex = 2
		}
	//}
}

/**
*
*
 * @properties={typeid:24,uuid:"7EC7F474-E2FD-4340-8CF7-3993E2952E40"}
 */
function btn_tabtop5()
{
	//if(!globals.GCisEditing()) //if there is a transaction - we're editing something
	//{
		tabs_dimAll()
		elements.lbltop5.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 3)
		{
			elements.tabs_mainPanel.tabIndex = 3
		}
	//}
}

/**
 * @properties={typeid:24,uuid:"D66770BA-F305-47BC-8AE4-E99D0A9C68D4"}
 */
function tabs_dimAll()
{
	elements.lblLineas.bgcolor = '#606060'
	elements.lblGCultimasnotas.bgcolor = '#606060'
	elements.lbltop5.bgcolor = '#606060'
}

/**
 * @properties={typeid:24,uuid:"43368682-6F71-49A4-991F-2D1BC550BE0E"}
 */
function sub_setNewNumeroFacturaOrd()
{
	var query = 'select [NumNota] from [ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	nup_cfa = dataset.getValue(1, 1) + 1	
	
	var Fecha = new Date()
	fecha_cfa = Fecha
}

/**
 * @properties={typeid:24,uuid:"3845861C-1501-4A19-9985-F30E50F8FDD1"}
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
 * @properties={typeid:24,uuid:"57DDA730-0BBB-40CD-92F8-31C25B04AB04"}
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
 * @properties={typeid:24,uuid:"5C360E50-45E3-45BA-9269-A88F0C242C8B"}
 */
function validate_autoEnter()
{
	globals.GCRegistroNuevo = 1	
	elements.eje_cfa.visible = false
	elements.lbleje_cfa.visible = true
	elements.nup_cfa.visible = false
	elements.lblnup_cfa.visible = true
	id = application.getUUID()
	usu_cfa = globals.GClogin_usuario
	sub_setEjercicio();
	sub_setNewNumeroFacturaOrd();	
	fecha_cfa = new Date()
	
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"0FF94F94-FDC4-4C8C-85FD-C7D3ABCC440E"}
 */
function validate_beforeDelete()
{
	
		if(situcobrado == 'C')
		{
			//show dialog and return 1
			//show the tabpanel "dialog"
			globals.GCshowErrorDialog("Esta nota ya está cobrada. No se puede borrar. ", null,'Aceptar', null, null, null);
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
 * @properties={typeid:24,uuid:"AF37D78C-125B-4923-AD77-44BA32E8BEE8"}
 */
function onActionBtnCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmNotas';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Clientes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Clientes';
	//win.resizable = true;
	win.show(forms.dialog_ClientesGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"013D5EB3-484C-4EDE-B77C-99D06A1FA945"}
 */
function onActionBtnFormasPago(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmNotas';
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
 * @properties={typeid:24,uuid:"1F4EB3C6-51D4-476B-95E4-768A6107AEB6"}
 */
function print_default()
{
	
	//Generacion_Efecto_Factura();
	
	if(foundset.getSize() > 0) rpt_Factura_list();
}

/**
 * @properties={typeid:24,uuid:"EA7DB233-5F32-4CAB-9975-B4C4BB39AF6D"}
 * @AllowToRunInFind
 */
function rpt_Factura_list()
{
	try
	{
		forms.dlg_ImpresionNotasGC.DesdeEje = eje_cfa
		forms.dlg_ImpresionNotasGC.HastaEje = eje_cfa
		forms.dlg_ImpresionNotasGC.DesdeNup = nup_cfa
		forms.dlg_ImpresionNotasGC.HastaNup = nup_cfa
		forms.dlg_ImpresionNotasGC.DesdeCliente = null
		forms.dlg_ImpresionNotasGC.HastaCliente = null
		globals.GCshowDialogImpresionNotas('Impresión de Notas',1,null,null,null,null,null,null,null,null)
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
 * @properties={typeid:24,uuid:"D7C719C2-AED8-4E02-B1D1-BBD9CFE16596"}
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
			foundset.deleteRecord()
		/*}
		else
		{
			//there are orders that use this address
			var msg = 'There are orders that use this address as a shipping or billing address.' +
			' Change the orders to a new address, then you can delete this address.'
			globals.GCshowErrorDialog(msg,'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null)
		}*/
			var query = "select [nup_cfa] from [tbNotaCabecera] order by [nup_cfa] desc"			
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
			
			forms.dlg_ParametroAplicacionGC.numnota = n;*/
			gcparametrosaplicacion_to_parametrosaplicacion.numnota = n;
			databaseManager.saveData()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"188CB5A5-1BFC-48AE-982B-F330F213EBC0"}
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
 * @properties={typeid:24,uuid:"69C471BE-C2B0-463D-AEE1-7729C5793C31"}
 */
function btn_BDCliente(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmNotasGC.btn_cancel()
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
		globals.GCFormulario = 'FrmNotasGC';
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
		forms.dlg_ClientesGC.elements.idcodigo.bgcolor = '#f0f0f0'
		forms.dlg_ClientesGC.elements.idcodigo.readOnly = true
		forms.dlg_ClientesGC.elements.idcodigo.visible = false
		forms.dlg_ClientesGC.elements.lblidcodigo.visible = true
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
		globals.GCFormulario = 'FrmNotasGC';
		forms.FrmClientesGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1)*/ 
		forms.dlg_ClientesGC.foundset.setSelectedIndex(1)
		if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ClientesGC.elements.idcodigo.readOnly = true
		forms.dlg_ClientesGC.elements.idcodigo.bgcolor = '#f0f0f0';
		forms.dlg_ClientesGC.elements.idcodigo.visible = false
		forms.dlg_ClientesGC.elements.lblidcodigo.visible = true
		globals.GCshowDialogCliente('BD Cliente', 1, null, null, true, null, null, null, null, null);
		
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"13B16946-1F2D-427D-B784-6167F75EB0CE"}
 */
function onFocusLostDtoPP(event) {
	// TODO Auto-generated method stub
	impbie_cfa = null
	
	
	var Dtopp = impbre_cfa * depp_cfa * 0.01
	impbie_cfa = globals.GCROUND(impbre_cfa - Dtopp,2)
	
	onFocusLostgtosfinan(event) 
	//impnee_cfa = impbie_cfa + impbie2_cfa + impbie2_cfa + cuotaiva_cfa  + cuotaiva2_cfa  + cuotaiva3_cfa + impgtosfinan
	//impnee_cfa = globals.GCROUND(impnee_cfa,2)
	
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87DF31DA-47DF-4E21-89AF-77F0E5927768"}
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
 * @properties={typeid:24,uuid:"F6975224-742E-450F-A492-4D96FC220B51"}
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
 * @properties={typeid:24,uuid:"4E2B6448-EB2F-4B67-83ED-9D0DD5D8A6E3"}
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
 * @properties={typeid:24,uuid:"4349806E-4183-4760-A0A1-B84AE26459FC"}
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
 * @properties={typeid:24,uuid:"69F4F925-2574-4B44-9073-3DD6F65B115C"}
 */
function onFocusLostgtosfinan(event) {
	// TODO Auto-generated method stub
	impgtosfinan = impbie_cfa * gtosfinan_cfa  * 0.01
	impgtosfinan = globals.GCROUND(impgtosfinan,2)
	if(impgtosfinan == 0) impgtosfinan = null;
	impnee_cfa = impbie_cfa + impgtosfinan
	impnee_cfa = globals.GCROUND(impnee_cfa,2)
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"AAF3DC9E-F949-4485-97B7-7B7272F5315D"}
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
 * @properties={typeid:24,uuid:"F8543CCC-EC27-4E8E-AB8D-62A20D55C24B"}
 */
function onActionEnviarEmail(event) {
	if(globals.GCisEditing()) forms.FrmNotasGC.btn_cancel()
	
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
				globals.GCFormulario = 'FrmNotas'
				globals.GCshowDialogEnvioMail('Impresión y Envio Nota',1,null,null,null,null,null,null,null,null)
			}
		}
	}
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"650D0899-E911-44A3-9D88-3079B6393FA0"}
 */
function onDataChangeCliente() {
	// TODO Auto-generated method stub
	if(clie_cfa)
	{
		descclie_cfa = GCtbnotacabecera_to_tbmaestroclientes.desccliente
		cfpa_cfa = GCtbnotacabecera_to_tbmaestroclientes.idformapago
		if(cfpa_cfa) onDataChangeFP()
				
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5A09DD21-4DDE-4CB5-91A4-9BC3C0CDAB78"}
 */
function onActioncli(event) {
	// TODO Auto-generated method stub
	onDataChangeCliente()
	elements.fld_descclie_cfa.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"19F4561D-8495-400F-931A-87FE1B2F3D2D"}
 */
function onActiondesccli(event) {
	// TODO Auto-generated method stub
	elements.fld_fechacobro_cfa.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F41DEB1A-9E15-45EF-A3D7-53718F847440"}
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
 * @properties={typeid:24,uuid:"F627B2B5-EF55-4F9E-9F7F-B969FBCC1C94"}
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
 * @properties={typeid:24,uuid:"55F00E92-F19A-44DA-94FB-430332840B3B"}
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
 * @properties={typeid:24,uuid:"BF8FFE94-C90D-4312-9E43-C5C21CAF9331"}
 */
function onActionfcobro(event) {
	// TODO Auto-generated method stub
	elements.fld_cfpa_cfa.selectAll()
	elements.fld_cfpa_cfa.requestFocus()
}

/**
 * Handle changed data.
 *
*
 * @properties={typeid:24,uuid:"2B95AACE-AA33-4C50-8984-FDDECC909782"}
 */
function onDataChangefechacobro() {
	var fech = utils.dateFormat(fechacobro_cfa,'dd-MM-yyyy')
	fechacobro_cfa = utils.parseDate(fech,'dd-MM-yyyy')
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"E51AF358-7534-4323-AE62-B6D890B84C28"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var agno = fecha_cfa.getFullYear();
	var a = new String()
	a = agno.toString()
	a= a.substr(2,2)
	var fech = utils.dateFormat(fecha_cfa,'dd-MM-yyyy')
	fecha_cfa = utils.parseDate(fech,'dd-MM-yyyy')	
	
	var rows = forms.FrmNotasGC.foundset.GCtbnotacabecera_to_tbnotalinea.getSize();
	if(rows > 0)
	{
		for(var i=1;i<=rows;i++)
		{
			var record = forms.FrmNotasGC.foundset.GCtbnotacabecera_to_tbnotalinea.getRecord(i);
			
			var fecha = record.fecha_lfa;
			if(fecha) record.fecha_lfa = forms.FrmNotasGC.foundset.fecha_cfa;
			
			if(eje_cfa != a) 
			{		
				record.eje_lfa = a;				
			}
		}		
	}
	eje_cfa = a;
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
 * @properties={typeid:24,uuid:"2EC31E74-38C5-4142-BD0F-C45A7CE9FA3A"}
 */
function handle_shortCut(v_event)
{
	globals.GCevento = null
	if(v_event.getType() == 'control F10')
	{
		if(globals.GCisEditing())
		{
			elements.situcobrado.bgcolor = '#feffe4'
			elements.situcobrado.readOnly = false
		}
	}
}
