/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"98ADF6AF-9C9D-464F-BB1E-852E8A0914E1"}
 */
var DOCPDF = null;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"F13ED698-9B4E-48A5-8D5E-55B2A63311B7",variableType:8}
 */
var currentIndex = -1;

/**
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"931EAA5F-823F-42DD-8512-E01C2D6EC46D",variableType:-4}
 */
var files_positions = null;

/**
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"C4CE6DFE-442A-458A-9A47-24F0C49612BF",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"010E5358-115F-4B62-81EB-E99F0871359B"}
 */
var subFolder = "/";

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"4B1D704B-7C8D-429E-A58E-799A50AEDF0F"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	btn_tabLineas()
	plugins.window.createShortcut('control F10', handle_shortCut);
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @properties={typeid:24,uuid:"AF3C8612-2E21-451A-A05E-CBB1C8B92757"}
 */
function onRecordSelect()
{
	//setup the record status
	globals.GCsetupRecordStatus();

	//set the global curID_company to the current company_id
	globals.GCcurID_FacturaCompras = pro_cfca+'/'+nup_cfca;
	if(globals.GCRegistroNuevo == 1)
	{
		if(globals.GCisEditing())
		{
			btn_cancel()
			globals.GCRegistroNuevo = null
			doEdit()
		}
	}
	situcobrocolor()
	situcontacolor()
	if(GCtbfacturacompracabecera_to_tbfacturacompralinea)
	{
		if(GCtbfacturacompracabecera_to_tbfacturacompralinea.getSize() > 0)
		{
			forms.lst_Factura_Lineas_ComprasGC.foundset.setSelectedIndex(1)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"226F6D23-5F02-4C3C-BFBB-4178A39DC857"}
 */
function btn_save()
{
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Facturas de Compras.',null,'Aceptar',null,null,null)		
	}
	else
	{
		if(situconta == 'C' && forms.FrmFacturasComprasGC.elements.situconta.readOnly == true)
		{
			var methd = 'forms.FrmFacturasComprasGC.btn_cancel()'
			globals.GCshowErrorDialog('Factura ya contabilizada.',methd,'Aceptar',null,null,null)
		}
		else if(!pro_cfca)
		{
			elements.pro_cfca.requestFocus()
			globals.GCshowErrorDialog('Falta introducir el proveedor.',null,'Aceptar',null,null,null)
		}
		else if(!GCtbfacturacompracabecera_to_tbmaestroproveedores || !GCtbfacturacompracabecera_to_tbmaestroproveedores.id)
		{
			elements.pro_cfca.requestFocus()
			globals.GCshowErrorDialog('Falta introducir un proveedor válido.',null,'Aceptar',null,null,null)
		}
		else if(!nup_cfca)
		{
			elements.nup_cfca.requestFocus()
			globals.GCshowErrorDialog('Falta introducir el número de la factura.',null,'Aceptar',null,null,null)
		}
		else if(!fecha_cfca)
		{
			elements.fld_fecha_cfca.requestFocus()
			globals.GCshowErrorDialog('Falta introducir la fecha de la factura.',null,'Aceptar',null,null,null)
		}
		else if(!impnee_cfca)
		{
			elements.fld_impnee_cfca.requestFocus()
			globals.GCshowErrorDialog('Falta introducir el total a pagar.',null,'Aceptar',null,null,null)
		}
		else
		{
			//var editRecs = new Array()
			//editRecs = databaseManager.getEditedRecords( foundset)
			if(globals.GCRegistroNuevo == 1)
			{
				query = "select [pro_cfca] from [tbfacturacompracabecera] where pro_cfca = "+pro_cfca+" and nup_cfca = '"+nup_cfca+"'";
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var x = dataset.getValue(1, 1)
				if(!x)
				{
					fechareg_cfca = new Date()
					if(gctbfacturacompracabecera_to_tbfacturacompralinea)
					{
						var rows = gctbfacturacompracabecera_to_tbfacturacompralinea.getSize();
						for(var i=1;i<=rows;i++)
						{
							var record = gctbfacturacompracabecera_to_tbfacturacompralinea.getRecord(i);
							if(record.pro_lfca != pro_cfca)
							{
								record.pro_lfca = pro_cfca;		
								databaseManager.saveData(record)
							}
						}			
					}
					_super.btn_save()
					Generacion_Efecto_Factura()
					globals.GCRegistroNuevo = null
					elements.pro_cfca.bgcolor = '#f0f0f0'
					elements.pro_cfca.readOnly = true
					elements.nup_cfca.bgcolor = '#f0f0f0'
					elements.nup_cfca.readOnly = true
					elements.lbl_codrequired.visible = false
					elements.lbl_codrequiredc.visible = false	
					elements.BtnAddProveedor.visible = false
					elements.situconta.bgcolor = '#f0f0f0'
					elements.situconta.readOnly = true
					elements.situconta.visible = false;
					elements.lblsituconta.visible = true;
					elements.fld_idtipofactura_cfca.visible = false;
					elements.lblidtipofactura_cfca.visible = true;	
						
					elements.BtnProveedor.visible = false
					elements.BtnFormaPago.visible = false
					elements.btn_Proveedor.visible = true
					elements.btn_contabilizarfacturas.visible = true
					elements.btn_actpagos.visible = true
					elements.btn_comprasmeses.visible = true
					elements.fld_fecha_cfca.visible = false
					elements.lblfecha_cfca.visible = true
					elements.fld_fechapago_cfca.visible = false
					elements.lblfechapago_cfca.visible = true
					elements.pro_cfca.visible = false
					elements.lblpro_cfca.visible = true
					elements.nup_cfca.visible = false
					elements.lblnup_cfca.visible = true
					situcobrocolor()
					situcontacolor()
					if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
					{
						/** @type Number*/
						var idx = elements.tabs_mainPanel.tabIndex;
						var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
						forms[frm].controller.enabled = true
						forms[frm].controller.readOnly = false
					}
				}
				else
				{
					elements.pro_cfca.requestFocus()
					globals.GCshowErrorDialog('Factura de compra ya registrada con anterioridad.\n ¡NO SE PUEDE DUPLICAR! Revisela.',null,'Aceptar',null,null,null)
				}
			}
			/*for (var x=0;x<editRecs.length;x++)
			{
				var sit =  editRecs[x]['situconta'];
				if(sit == 'C')
				{
					var uid = editRecs[x]['pro_cfca'];
					var uid2 = editRecs[x]['nup_cfca'];
					query = "select * from [tbfacturacompracabecera] where [pro_cfca] ="+ uid+
							" and nup_cfca = '"+uid2+"'";
					var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturacompracabecera')  
					 
					//vSet.loadRecords(databaseManager.convertToDataSet(new Array(uid2,uid))) 
					vSet.loadRecords(dataset2) 
					var rec = vSet.getSelectedRecord()
					if(rec)
					{
						var ds = rec.getChangedData()
						for( var i = 1 ; i <= dataset.getMaxRowIndex() ; i++ )
						{
							var col = ds.getValue(i,1);
							rec[col] = ds.getValue(i,2);
							databaseManager.saveData(rec)
						}
					}
				}				
			}*/
			else
			{
				_super.btn_save()
				Generacion_Efecto_Factura()
				globals.GCRegistroNuevo = null
				elements.pro_cfca.bgcolor = '#f0f0f0'
				elements.pro_cfca.readOnly = true
				elements.nup_cfca.bgcolor = '#f0f0f0'
				elements.nup_cfca.readOnly = true
				elements.lbl_codrequired.visible = false
				elements.lbl_codrequiredc.visible = false	
				elements.BtnAddProveedor.visible = false
				elements.situconta.bgcolor = '#f0f0f0'
				elements.situconta.readOnly = true
				elements.situconta.visible = false;
				elements.lblsituconta.visible = true;
				elements.fld_idtipofactura_cfca.visible = false;
				elements.lblidtipofactura_cfca.visible = true;	
					
				elements.BtnProveedor.visible = false
				elements.BtnFormaPago.visible = false
				elements.btn_Proveedor.visible = true
				elements.btn_contabilizarfacturas.visible = true
				elements.btn_actpagos.visible = true
				elements.btn_comprasmeses.visible = true
				elements.fld_fecha_cfca.visible = false
				elements.lblfecha_cfca.visible = true
				elements.fld_fechapago_cfca.visible = false
				elements.lblfechapago_cfca.visible = true
				elements.pro_cfca.visible = false
				elements.lblpro_cfca.visible = true
				elements.nup_cfca.visible = false
				elements.lblnup_cfca.visible = true
				situcobrocolor()
				situcontacolor()
				if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
				{
					/** @type Number*/
					idx = elements.tabs_mainPanel.tabIndex;
					frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
					forms[frm].controller.enabled = true
					forms[frm].controller.readOnly = false
				}			
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"ECBADC3E-F7D4-449C-B451-4B06617BE6B7"}
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
	elements.BtnFormaPago.visible = true
	elements.btn_Proveedor.visible = false
	elements.btn_contabilizarfacturas.visible = false
	elements.btn_actpagos.visible = false
	elements.btn_comprasmeses.visible = false
	elements.situconta.visible = true;
	elements.lblsituconta.visible = false;
	elements.fld_fecha_cfca.visible = true;
	elements.lblfecha_cfca.visible = false;
	elements.fld_fechapago_cfca.visible = true;
	elements.lblfechapago_cfca.visible = false;
	elements.fld_fecha_cfca.bgcolor = '#FFFF00';
	elements.fld_impnee_cfca.bgcolor = '#FFFF00';
	elements.fld_idtipofactura_cfca.visible = true;
	elements.lblidtipofactura_cfca.visible = false;	
	//elements.fld_fecha_cfca.requestFocus()
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		/** @type Number*/
		var idx = elements.tabs_mainPanel.tabIndex;
		var frm =  elements.tabs_mainPanel.getTabFormNameAt(idx)
		forms[frm].controller.enabled = false
		forms[frm].controller.readOnly = true
	}
	if(globals.GCRegistroNuevo == 1) elements.pro_cfca.requestFocus()
	else elements.fld_impnee_cfca.requestFocus()
	
}

/**
 * @properties={typeid:24,uuid:"B3D77D90-8B61-44A5-8CDD-7C9E624A0D63"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	globals.GCRegistroNuevo = null
	elements.pro_cfca.bgcolor = '#f0f0f0'
	elements.pro_cfca.readOnly = true
	elements.nup_cfca.bgcolor = '#f0f0f0'
	elements.nup_cfca.readOnly = true
	elements.lbl_codrequired.visible = false
	elements.lbl_codrequiredc.visible = false	
	elements.BtnAddProveedor.visible = false
	elements.situconta.bgcolor = '#f0f0f0'
	elements.situconta.readOnly = true
	elements.situconta.visible = false;
	elements.lblsituconta.visible = true;
	elements.fld_fecha_cfca.visible = false
	elements.lblfecha_cfca.visible = true
	elements.fld_fechapago_cfca.visible = false
	elements.lblfechapago_cfca.visible = true
	elements.pro_cfca.visible = false
	elements.lblpro_cfca.visible = true
	elements.nup_cfca.visible = false
	elements.lblnup_cfca.visible = true
	elements.fld_idtipofactura_cfca.visible = false;
	elements.lblidtipofactura_cfca.visible = true;	
	
	elements.BtnFormaPago.visible = false
	elements.BtnProveedor.visible = false
	elements.btn_Proveedor.visible = true
	elements.btn_contabilizarfacturas.visible = true
	elements.btn_actpagos.visible = true
	elements.btn_comprasmeses.visible = true
	situcobrocolor()
	situcontacolor()
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
 * @properties={typeid:24,uuid:"C714D111-147D-493A-8CDA-751E99776262"}
 * @AllowToRunInFind
 */
function onShow(firstShow,event)
{
	var win = application.getWindow('Conta')
	//setup the record status
	if(win != null)
	{
		win.destroy();
	}
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
	elements.BtnProveedor.visible = false
	elements.BtnFormaPago.visible = false
	elements.btn_Proveedor.enabled = true
	elements.btn_contabilizarfacturas.enabled = true
	elements.btn_actpagos.enabled = true
	elements.pro_cfca.bgcolor = '#f0f0f0'
	elements.pro_cfca.readOnly = true
	elements.nup_cfca.bgcolor = '#f0f0f0'
	elements.nup_cfca.readOnly = true
	elements.fld_fecha_cfca.visible = false
	elements.lblfecha_cfca.visible = true
	elements.fld_fechapago_cfca.visible = false
	elements.lblfechapago_cfca.visible = true
	elements.pro_cfca.visible = false
	elements.lblpro_cfca.visible = true
	elements.nup_cfca.visible = false
	elements.lblnup_cfca.visible = true
	elements.situconta.bgcolor = '#f0f0f0'
	elements.situconta.readOnly = true
	elements.situconta.visible = false;
	elements.lblsituconta.visible = true;
	situcobrocolor()
	situcontacolor()
	if(gcparametrosaplicacion_to_parametrosaplicacion.empresasii){
		elements.logoSII.visible = true;
		elements.lbl_tipofacturasii.visible = true;
		elements.lbl_tipooperacionsii.visible = true;
		elements.fld_tipofacturasii.visible = true;
		elements.fld_tipooperacionsii.visible = true;
	}
	else{
		elements.logoSII.visible = false;
		elements.lbl_tipofacturasii.visible = false;
		elements.lbl_tipooperacionsii.visible = false;
		elements.fld_tipofacturasii.visible = false;
		elements.fld_tipooperacionsii.visible = false;
	}
	if(globals.GCFormulario)	
	{
		if(globals.GCFormulario == 'FrmProveedoresGC')
		{
			if(forms.lst_ProveedoresFacturasGC.pro_cfca && forms.lst_ProveedoresFacturasGC.nup_cfca)
			{			
					var result = foundset.selectRecord(forms.lst_ProveedoresFacturasGC.nup_cfca,forms.lst_ProveedoresFacturasGC.pro_cfca)
					var fsCount = databaseManager.getFoundSetCount(foundset);
					while(result==false)
					{
						if(fsCount == foundset.getSize())
						{
							return;
						}
						foundset.setSelectedIndex(foundset.getSize());
						result = foundset.selectRecord(forms.lst_ProveedoresFacturasGC.nup_cfca,forms.lst_ProveedoresFacturasGC.pro_cfca);
					}	
				
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"7A34F3E9-E221-4077-8EBB-1BA4DFAB8401"}
 */
function validate_autoEnter()
{
	globals.GCRegistroNuevo = 1
	idtipofactura_cfca = 1
	tipofacturasii = 'F1'
	tipooperacionsii = 'E'
	elements.BtnProveedor.visible = true
	
	elements.pro_cfca.visible = true
	elements.lblpro_cfca.visible = false
	elements.nup_cfca.visible = true
	elements.lblnup_cfca.visible = false
	elements.pro_cfca.bgcolor = '#FFFF00'//'#feffe4'
	elements.pro_cfca.readOnly = false
	elements.nup_cfca.bgcolor = '#FFFF00'//'#feffe4'
	elements.nup_cfca.readOnly = false
	elements.lbl_codrequired.visible = true
	elements.lbl_codrequiredc.visible = true	
	elements.BtnAddProveedor.visible = true
	fecha_cfca = new Date()
	elements.pro_cfca.requestFocus()
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"AE076629-EAD8-4F23-98A4-47AE84DEDB07"}
 */
function validate_beforeDelete()
{
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Facturas de Compras.',null,'Aceptar',null,null,null)
		return 1
	}
	else
	{
		if(situconta == 'C')
		{
			//show dialog and return 1
			//show the tabpanel "dialog"
			globals.GCshowErrorDialog("Esta factura ya está contabilizada. No se puede borrar. ", null,'Aceptar', null, null, null);
			return 1
		}
		else
		{
			return 0
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9F667C1F-0192-4AE8-9ACD-C1514CDAF5D0"}
 */
function onActionBtnCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmFacturasCompras';
	//globals.GCshowDialogProveedores('Proveedores', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Proveedores')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Proveedores", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Proveedores';
	//win.resizable = true;
	win.show(forms.dialog_ProveedoresGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"47FB1C47-E4AF-4E78-9AED-83B36CECB5E2"}
 */
function onActionBtnFormasPago(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmFacturasCompras';
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
 * @properties={typeid:24,uuid:"31E9A72F-189C-47E1-BC52-82DB33A25F16"}
 */
function print_default()
{
	
	//Generacion_Efecto_Factura();
	
	if(foundset.getSize() > 0) rpt_Factura_list();
}

/**
 * @properties={typeid:24,uuid:"25370FC2-B558-4382-A368-F7BF4F9389CA"}
 * @AllowToRunInFind
 */
function rpt_Factura_list()
{
	try
	{
		globals.GCshowDialogConsultaFacturasCompras('Consulta Facturas de Proveedores',1,null,null,null,null,null,null,null,null)
		
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
 * @properties={typeid:24,uuid:"AB59AEB3-0A53-4860-98DB-F6E836961A90"}
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
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B144CB92-4402-44F7-A67F-C5C1AB709205"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	elements.fld_fechapago_cfca.requestFocus();	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"580BB9BA-5997-4E8B-B6B4-046118A4706A"}
 */
function onActionfechapago(event) {
	// TODO Auto-generated method stub
	onDataChangefechapago()
	elements.fld_cfpa_cfca.requestFocus();
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4592A188-91AA-41F3-9F6E-F331923C5D66"}
 */
function btn_BDproveedor(event) {
	if(globals.GCisEditing()) forms.FrmFacturasComprasGC.btn_cancel()
	
	if(pro_cfca)
	{
		/*var win = application.getWindow('Maestros')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		win = application.createWindow("Maestros", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Proveedores';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmFacturasComprasGC';
		forms.FrmProveedoresGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(2) */
		
		var query = "select [ID] from [dbo].[tbMaestroProveedores] where [Codpro] = " + pro_cfca
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var prov = dataset.getValue(1,1);
		var result = forms.dlg_ProveedoresGC.foundset.selectRecord(prov)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ProveedoresGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ProveedoresGC.foundset.getSize()) return;
			forms.dlg_ProveedoresGC.foundset.setSelectedIndex(forms.dlg_ProveedoresGC.foundset.getSize());
			result = forms.dlg_ProveedoresGC.foundset.selectRecord(prov);
		}
		//if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ProveedoresGC.elements.idcodigo.bgcolor = '#f0f0f0';
		forms.dlg_ProveedoresGC.elements.idcodigo.readOnly = true;
		forms.dlg_ProveedoresGC.elements.idcodigo.visible = false;
		forms.dlg_ProveedoresGC.elements.lblidcodigo.visible = true;
		forms.dlg_ProveedoresGC.elements.btn_print.enabled = true;
		globals.GCshowDialogProveedor('Proveedor', 1, null, null, true, 'Borrar Proveedor', null, null, null, null);
		
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
		win.title = 'BD Proveedores';
		globals.GCnav_search = null;
		globals.GCFormulario = 'FrmFacturasComprasGC';
		forms.FrmProveedoresGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(2) */
		
		forms.dlg_ProveedoresGC.foundset.setSelectedIndex(1)
		if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ProveedoresGC.elements.idcodigo.bgcolor = '#f0f0f0'
		forms.dlg_ProveedoresGC.elements.idcodigo.readOnly = true
		globals.GCshowDialogProveedor('BD Proveedores', 1, null, null, true, 'Borrar Proveedor', null, null, null, null);
		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8820B8EE-E6E2-440A-986F-97AF85B8B173"}
 */
function onActionpreten(event) {
	// TODO Auto-generated method stub
	elements.fld_portes.requestFocus()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"533F47BF-078F-4057-9437-48404CB4C3D4"}
 */
function onDataChangeProveedor() {
	// TODO Auto-generated method stub
	if(pro_cfca)
	{
		if(GCtbfacturacompracabecera_to_tbmaestroproveedores)
		{
			if(GCtbfacturacompracabecera_to_tbmaestroproveedores.codigfp) cfpa_cfca = GCtbfacturacompracabecera_to_tbmaestroproveedores.codigfp;
			if(GCtbfacturacompracabecera_to_tbmaestroproveedores.porciva ||
			GCtbfacturacompracabecera_to_tbmaestroproveedores.porciva == 0.0) piva1_cfca = GCtbfacturacompracabecera_to_tbmaestroproveedores.porciva;		
			if(GCtbfacturacompracabecera_to_tbmaestroproveedores.porcirpf) preten_cfca = GCtbfacturacompracabecera_to_tbmaestroproveedores.porcirpf;
		}
		if(piva1_cfca == null)
		{
			piva1_cfca = 0;
		}
		onDataChangenup()
	}
	else
	{
		preten_cfca = null;
		cfpa_cfca = null;
		piva1_cfca = 0;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89FE0EFC-F83E-4687-9EA3-E5FC1B7AAD91"}
 */
function onActionprov(event) {
	// TODO Auto-generated method stub
	onDataChangeProveedor()
	elements.nup_cfca.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9FB38C93-CFFF-4EB7-80BE-626C8ABBD253"}
 */
function onActionfechacobro(event) {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(fechpago_cfca,'dd-MM-yyyy')
	fechpago_cfca = utils.parseDate(fech,'dd-MM-yyyy')
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"60D7985F-38E5-43BA-BF1C-7FD220587E21"}
 */
function onActionFP(event) {
	// TODO Auto-generated method stub
	elements.fld_impnee_cfca.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7A07DBDD-ABCA-4DA5-84C5-5B1360E24638"}
 */
function onActionobse(event) {
	// TODO Auto-generated method stub
	elements.fld_preten_cfca.requestFocus()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"C9B8950D-A57E-4ABA-B726-982E5FD9E6A4"}
 */
function onDataChangefecha() {
	if(fecha_cfca)
	{
		var fech = utils.dateFormat(fecha_cfca,'dd-MM-yyyy')
		fecha_cfca = utils.parseDate(fech,'dd-MM-yyyy')
		/*if(GCtbfacturacompracabecera_to_tbfacturacompralinea.getSize() > 0)
		{
			GCtbfacturacompracabecera_to_tbfacturacompralinea.fecha_lfca = fecha_cfca;
		}*/
	}
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"051CFC93-54E7-4E32-8307-0DFAA380D70E"}
 */
function onDataChangefechapago() {
	// TODO Auto-generated method stub
	if(fechpago_cfca)
	{
		var fech = utils.dateFormat(fechpago_cfca,'dd-MM-yyyy')
		fechpago_cfca = utils.parseDate(fech,'dd-MM-yyyy')
	}
	
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"0AAF736D-5B7B-4E88-AB45-C4EB6B8C4C86"}
 */
function onDataChangetipoiva1() {
	// TODO Auto-generated method stub
	if(impnee_cfca)
	{
		impbie1_cfca = impnee_cfca / (1 +(piva1_cfca * 0.01))
		impbie1_cfca = globals.GCROUND(impbie1_cfca,2)
		cuotaiva1_cfca = globals.GCROUND(impnee_cfca - impbie1_cfca,2)
		//cuotaiva1_cfca = globals.GCROUND(cuotaiva1_cfca,2)		
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}
	else
	{
		impbie1_cfca = null
		cuotaiva1_cfca = null
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}
	onDataChangepreten()
	
	elements.fld_impbie1_cfca.requestFocus()
	elements.fld_impbie1_cfca.selectAll()
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"0972F8DB-5E83-47DC-95B7-1E879E9A4F80"}
 */
function onDataChangetipoiva2() {
	// TODO Auto-generated method stub
	if(impnee_cfca)
	{
		impbie2_cfca = impnee_cfca / (1 +(piva2_cfca * 0.01))
		impbie2_cfca = globals.GCROUND(impbie2_cfca,2)
		cuotaiva2_cfca = impnee_cfca - impbie2_cfca
		cuotaiva2_cfca = globals.GCROUND(cuotaiva2_cfca,2)	
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}
	else
	{
		impbie2_cfca = null
		cuotaiva2_cfca = null
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}
	onDataChangepreten()
	
	elements.fld_impbie2_cfca.requestFocus()
	elements.fld_impbie2_cfca.selectAll()
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"821D1A32-0938-4D19-8A44-1F635DA01F21"}
 */
function onDataChangetipoiva3() {
	// TODO Auto-generated method stub
	if(impnee_cfca)
	{
		impbie3_cfca = impnee_cfca / (1 +(piva3_cfca * 0.01))
		impbie3_cfca = globals.GCROUND(impbie3_cfca,2)
		cuotaiva3_cfca = impnee_cfca - impbie3_cfca
		cuotaiva3_cfca = globals.GCROUND(cuotaiva3_cfca,2)	
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}
	else
	{
		impbie1_cfca = null
		cuotaiva1_cfca = null
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}
	onDataChangepreten()
	
	elements.fld_impbie3_cfca.requestFocus()
	elements.fld_impbie3_cfca.selectAll()
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"DBF9756E-2EFE-4E98-9692-9B046264D3EC"}
 */
function onDataChangetipoiva4() {
	// TODO Auto-generated method stub
	if(impnee_cfca)
	{
		impbie4_cfca = impnee_cfca / (1 +(piva4_cfca * 0.01))
		impbie4_cfca = globals.GCROUND(impbie4_cfca,2)
		cuotaiva4_cfca = impnee_cfca - impbie4_cfca
		cuotaiva4_cfca = globals.GCROUND(cuotaiva4_cfca,2)	
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}
	else
	{
		impbie1_cfca = null
		cuotaiva1_cfca = null
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}
	onDataChangepreten()
	
	elements.fld_impbie3_cfca.requestFocus()
	elements.fld_impbie3_cfca.selectAll()
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"DC3FC944-292D-41DE-BC9F-FF3A58FABAC7"}
 */
function onDataChangetipoiva5() {
	// TODO Auto-generated method stub
	if(impnee_cfca)
	{
		impbie5_cfca = impnee_cfca / (1 +(piva5_cfca * 0.01))
		impbie5_cfca = globals.GCROUND(impbie5_cfca,2)
		cuotaiva5_cfca = impnee_cfca - impbie5_cfca
		cuotaiva5_cfca = globals.GCROUND(cuotaiva5_cfca,2)	
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}
	else
	{
		impbie1_cfca = null
		cuotaiva1_cfca = null
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}
	onDataChangepreten()
	
	elements.fld_impbie5_cfca.requestFocus()
	elements.fld_impbie5_cfca.selectAll()
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"9C5D9C05-96C3-4933-9CA7-3C95E88253E8"}
 */
function onActionbaseiva1() {
	// TODO Auto-generated method stub
	onFocusLostbaseiva1()
	onDataChangepreten()
	elements.fld_cuotaiva1_cfca.requestFocus()
	elements.fld_cuotaiva1_cfca.selectAll()
	
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"75EF55E2-B3FD-4431-9838-BCDDCA162725"}
 */
function onActionbaseiva2() {
	// TODO Auto-generated method stub
	onFocusLostbaseiva2()
	onDataChangepreten()
	elements.fld_cuotaiva2_cfca.requestFocus()
	elements.fld_cuotaiva2_cfca.selectAll()
	
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"EF7F7BF3-AA68-4C1F-828D-B669FD4319C3"}
 */
function onActionbaseiva3() {
	// TODO Auto-generated method stub
	onFocusLostbaseiva3()
	onDataChangepreten()
	elements.fld_cuotaiva3_cfca.requestFocus()
	elements.fld_cuotaiva3_cfca.selectAll()
	
}

/**
 * Perform the element default action.
 *
 *
 * @properties={typeid:24,uuid:"20E2423D-F3AB-48B2-9FC6-78556E271306"}
 */
function onActionbaseiva4() {
	// TODO Auto-generated method stub
	onFocusLostbaseiva4()
	onDataChangepreten()
	elements.fld_cuotaiva4_cfca.requestFocus()
	elements.fld_cuotaiva4_cfca.selectAll()
	
}

/**
 * Perform the element default action.
*
*
 * @properties={typeid:24,uuid:"55DC2332-0AC8-42BE-82D2-9736B6B5E4C6"}
 */
function onActionbaseiva5() {
	// TODO Auto-generated method stub
	onFocusLostbaseiva5()
	onDataChangepreten()
	elements.fld_cuotaiva5_cfca.requestFocus()
	elements.fld_cuotaiva5_cfca.selectAll()
	
}

/**
 * Handle focus lost event of the element.
 *
 * @properties={typeid:24,uuid:"CF92F570-26F1-4F93-9500-AF5980939875"}
 */
function onFocusLostbaseiva1() {
	// TODO Auto-generated method stub
	if(impnee_cfca)
	{
		cuotaiva1_cfca = impbie1_cfca * piva1_cfca * 0.01;
		cuotaiva1_cfca = globals.GCROUND(cuotaiva1_cfca,2)	
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}	
}

/**
 * Handle focus lost event of the element.
 *
 * @properties={typeid:24,uuid:"9B8B3625-46BD-42DF-B4F4-7FC24C1519D6"}
 */
function onFocusLostbaseiva2() {
	// TODO Auto-generated method stub
	if(impnee_cfca)
	{
		cuotaiva2_cfca = impbie2_cfca * piva2_cfca * 0.01;
		cuotaiva2_cfca = globals.GCROUND(cuotaiva2_cfca,2)	
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}	
}

/**
 * Handle focus lost event of the element.
 *
 * @properties={typeid:24,uuid:"D1ABCEE5-2D70-40D1-A95E-FCE3BB685A89"}
 */
function onFocusLostbaseiva3() {
	// TODO Auto-generated method stub
	if(impnee_cfca)
	{
		cuotaiva3_cfca = impbie3_cfca * piva3_cfca * 0.01;
		cuotaiva3_cfca = globals.GCROUND(cuotaiva3_cfca,2)	
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}	
}

/**
 * Handle focus lost event of the element.
 *
 *
 * @properties={typeid:24,uuid:"5C3EAB21-4027-472F-A02F-2C9A727FD8B5"}
 */
function onFocusLostbaseiva4() {
	// TODO Auto-generated method stub
	if(impnee_cfca)
	{
		cuotaiva4_cfca = impbie4_cfca * piva4_cfca * 0.01;
		cuotaiva4_cfca = globals.GCROUND(cuotaiva4_cfca,2)	
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}	
}

/**
 * Handle focus lost event of the element.
 *
 *
 * @properties={typeid:24,uuid:"D5063512-1C36-4706-9559-CF573E91B189"}
 */
function onFocusLostbaseiva5() {
	// TODO Auto-generated method stub
	if(impnee_cfca)
	{
		cuotaiva5_cfca = impbie5_cfca * piva5_cfca * 0.01;
		cuotaiva5_cfca = globals.GCROUND(cuotaiva5_cfca,2)	
		impbre_cfca = globals.GCROUND(impbie1_cfca+impbie2_cfca+impbie3_cfca+impbie4_cfca+impbie5_cfca,2)		
	}	
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"E02B866C-AE5A-43D3-87A8-4A3A4A6263B7"}
 */
function onActioncuotaiva1() {
	// TODO Auto-generated method stub
	elements.fld_preten_cfca.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"B222A6CC-563F-4D04-A201-8DE86676EFD7"}
 */
function onActioncuotaiva2() {
	// TODO Auto-generated method stub
	elements.fld_preten_cfca.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"E3527263-A108-4A12-A2DE-85A78DECD59A"}
 */
function onActioncuotaiva3() {
	// TODO Auto-generated method stub
	elements.fld_preten_cfca.requestFocus()
}

/**
 * Perform the element default action.
 *
 *
 * @properties={typeid:24,uuid:"E212EE3B-7ABD-45DB-8711-7BC0C38031A4"}
 */
function onActioncuotaiva4() {
	// TODO Auto-generated method stub
	elements.fld_preten_cfca.requestFocus()
}

/**
 * Perform the element default action.
 *
 *
 * @properties={typeid:24,uuid:"66D1C60E-D7FD-4324-BD49-2A8BF9884BC3"}
 */
function onActioncuotaiva5() {
	// TODO Auto-generated method stub
	elements.fld_preten_cfca.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B2B39178-8930-408A-A603-D6D535474D0E"}
 */
function onActiontipoiva1(event) {
	// TODO Auto-generated method stub
	onDataChangetipoiva1()
	elements.fld_impbie1_cfca.requestFocus()
	elements.fld_impbie1_cfca.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7FEE7921-31FF-45B7-85E5-C8129F0FA3A7"}
 */
function onActiontipoiva2(event) {
	// TODO Auto-generated method stub
	elements.fld_impbie2_cfca.requestFocus()
	elements.fld_impbie2_cfca.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"A1505250-9B24-4E54-9CC7-547BAEE20EFC"}
 */
function onActiontipoiva3(event) {
	// TODO Auto-generated method stub
	elements.fld_impbie3_cfca.requestFocus()
	elements.fld_impbie3_cfca.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"34E07021-A049-4FAB-A9B7-AA9986334B99"}
 */
function onActiontipoiva4(event) {
	// TODO Auto-generated method stub
	elements.fld_impbie4_cfca.requestFocus()
	elements.fld_impbie4_cfca.selectAll()
}

/**
 * Perform the element default action.
*
* @param {JSEvent} event the event that triggered the action
*
*
*
 * @properties={typeid:24,uuid:"375791D3-A35A-4D66-9965-797A5818A4E4"}
 */
function onActiontipoiva5(event) {
	// TODO Auto-generated method stub
	elements.fld_impbie5_cfca.requestFocus()
	elements.fld_impbie5_cfca.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D9E4D309-3722-4216-B74D-1FD66CB4DECD"}
 */
function onActionimpnee(event) {
	// TODO Auto-generated method stub
	onDataChangetipoiva1()
	elements.fld_piva1_cfca.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2BD50953-FD92-4FF8-AFA3-3C05CAE8038B"}
 */
function onActionnup(event) {
	// TODO Auto-generated method stub
	onDataChangenup()
	elements.fld_fecha_cfca.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"EAC08F73-4C7C-48E9-8F7D-1175B7D16F87"}
 */
function onDataChangenup() {
	// TODO Auto-generated method stub
	if(pro_cfca && nup_cfca)
	{
		var query = "select pro_cfca,nup_cfca from tbFacturaCompraCabecera where pro_cfca = " + pro_cfca + 
		" and nup_cfca ='"+nup_cfca+"'"
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var n = dataset.getValue(1,1)
		if(n != null)
		{
			var methd = 'forms.FrmFacturasComprasGC.foco()';
			globals.GCshowErrorDialog('Factura de compra ya registrada con anterioridad.\n ¡NO SE PUEDE DUPLICAR! Revisela.',methd,'Aceptar',null,null,null)
		}	
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"5EDA5786-F504-4883-8238-3F77641EA795"}
 */
function foco() {
	elements.nup_cfca.requestFocus()
}

/**
 * @AllowToRunInFind
 *
 *
 *
*
 * @properties={typeid:24,uuid:"FC6E6368-49F1-419A-A5E3-178823924E9E"}
 */
function btn_ContabilizarFacturas()
{
	if(globals.GCisEditing()) forms.FrmFacturasComprasGC.btn_cancel()
	
	var query = 'select [EmpresaContable] from [ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var EC = dataset.getValue(1,1)
	if(EC == null || EC == '')
	{
		globals.GCshowErrorDialog('No está definida la Empresa Contable en los Parametros de la Aplicación.',null,'Aceptar',null,null,null)
	}
	else
	{
		forms.dlg_ActualizacionContableComprasGC.DesdeProveedor = pro_cfca;
		forms.dlg_ActualizacionContableComprasGC.HastaProveedor = pro_cfca;
		forms.dlg_ActualizacionContableComprasGC.DesdeFactura = nup_cfca;
		forms.dlg_ActualizacionContableComprasGC.HastaFactura = nup_cfca;
		globals.GCshowDialogActualizacionContableCompras('Actualización Contable',1,null,null,null,null,null,null,null,null)
		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"96FCEE88-8A56-4766-AFE1-96D9BA408571"}
 */
function btn_PDF(event) {
	if(globals.GCisEditing())
	{
		if(docupdf)
		{   
			var menu = plugins.window.createPopupMenu();
			
			var titulo = 'Visualizar Documento';	
			titulo = titulo.toUpperCase();				
			menu.addMenuItem(titulo, MenuDocu, 'media:///ver.png');
			titulo = 'Borrar Documento';	
			titulo = titulo.toUpperCase();				
			menu.addMenuItem(titulo, MenuDocu, 'media:///borrado.png');
			titulo = 'Enviar Documento por EMail';	
			titulo = titulo.toUpperCase();				
			menu.addMenuItem(titulo, MenuDocu, 'media:///email_icon.png');
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),20,16);				
			}
			//get the position of the last "." in the file name 
			/*var a = filename.lastIndexOf(".")*/
			//var b = "temp"
			/*var b = filename.substring(0,a)*/
			//get the 3 letter extension - INCLUDING the "."
			/*var c = filename.substring(a)*/
			//var tempFile = plugins.file.createFile(filename)//plugins.file.createTempFile(filename,'.pdf');
			//var success = plugins.file.writeFile(tempFile, docupdf);
			//uploadCallbackFunction2(tempFile)
			
		}
		else
		{
			if(pro_cfca && nup_cfca)
			{ 
				if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
				{
					BtnUpload(event) 
				}
				else
				{
					onActionStreamFileToServer(event) 
				}
			}
		}
	}
	else
	{
		if(docupdf)
		{   
			menu = plugins.window.createPopupMenu();
			
			titulo = 'Visualizar Documento';	
			titulo = titulo.toUpperCase();				
			menu.addMenuItem(titulo, MenuDocu, 'media:///ver.png');
			titulo = 'Enviar Documento por EMail';	
			titulo = titulo.toUpperCase();				
			menu.addMenuItem(titulo, MenuDocu, 'media:///email_icon.png');
			
			if (event.getSource()) {
				// display the popup over the component which is the source of the event
				menu.show(event.getSource(),20,16);				
			}
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"CCA95B93-E6DD-425A-9B38-B233F7FC88E0"}
 * @SuppressWarnings(wrongparameters)
 */
function MenuDocu(event){
	switch (arguments[4]) {
			case 'Visualizar Documento'.toUpperCase():
			//get the position of the last "." in the file name 
			var a = filename.lastIndexOf(".")
			//var b = "temp"
			var b = filename.substring(0,a)
			//get the 3 letter extension - INCLUDING the "."
			var c = filename.substring(a)
			var tempFile = /*plugins.file.createFile(filename)*/plugins.file.createTempFile(b,c);
			var success = plugins.file.writeFile(tempFile, docupdf);
			uploadCallbackFunction2(tempFile) 
			break;
		case 'Borrar Documento'.toUpperCase():
			var msg = "¿Desea borrar de la Base de Datos este documento?"
	    	var methd = 'forms.FrmFacturasComprasGC.BorradoPDF()'
	    	globals.GCshowQuestionDialog(msg,methd,'No','Si',null,null)
			break;
		case 'Enviar Documento por EMail'.toUpperCase():
				var query = 'select [ServidorCorreoSMTP] from [ParametrosAplicacion]'
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var SMTP = dataset.getValue(1,1)
				if(!SMTP)
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
						globals.GCFormulario = 'Docu_FrmFacturasCompras'
						globals.GCshowDialogEnvioMail('Envio Documento por EMail',1,null,null,null,null,null,null,null,null)
					}
				}
		break;
	default: break;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"E5C8F2BF-B058-4F48-8486-6D130F543F65"}
 */
function BtnUpload(event) 
{
	plugins.file.showFileOpenDialog( 1, gcfechalimite_usuarios.startdirectory, false, null, uploadCallbackFunction, 'Seleccione documento' );
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"65B2EA0D-6D4B-4A31-8430-0C2B2E8C2E44"}
 */
function onActionStreamFileToServer(event) 
{
	fromServer = false;
	// initialize the progress state
	// validate the relative path if provided
	if(subFolder)
	{
		var currentFile = plugins.file.showFileOpenDialog( 1, gcfechalimite_usuarios.startdirectory, false, null, null, 'Seleccione documento' );
		if (currentFile) 
		{
			if(subFolder)
			{
				var rawData = plugins.file.readFile(currentFile)
				docupdf = rawData
				filename = currentFile.getName();
		        // Save any unsaved data
		        //databaseManager.saveData();
				
			}
			
		}
	}
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 * @properties={typeid:24,uuid:"6A83C329-D193-493E-8F4A-AEBAF9B556EA"}
 */
function uploadCallbackFunction2(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
   var monitor = plugins.file.streamFilesToServer(_oFile, Visualizar);
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile} _oFile
 *
 *
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"1F860020-6D23-4177-899C-5C25C5781591"}
 */
function Visualizar(_oFile)
{
	var ext = _oFile.getContentType()
	if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
	{
		var sw = 0;
		//var vFilePath = plugins.file.getDefaultUploadLocation()  +'\\'+ _oFile.getName();
		//var vLocalFilePath = 'C:\\tmp\\'+ _oFile.getName();
		//var s = plugins.UserManager.copyFileFromServer(vFilePath, vLocalFilePath, true)
		//Creates a temporary file (will be deleted after application shutdown)

			//get the position of the last "." in the file name 
			var a = _oFile.getName().lastIndexOf(".")
			//var b = "temp"
			var b = _oFile.getName().substring(0,a)
		
			//get the 3 letter extension - INCLUDING the "."
			var c = _oFile.getName().substring(a)

			//create a temporary file that will be auto-deleted by Servoy when client is exited
			var fname = plugins.file.createTempFile(b,c)

			//write the binary data out to disk at the temporary file location
			var docpdf = _oFile.getBytes()
			plugins.file.writeFile(fname,docpdf); 
			
			var vLocalFilePath = fname.getAbsolutePath();
		//windows
        if (utils.stringMiddle(application.getOSName(), 1, 7) == "Windows") {
        	sw = 1;
            var success = application.executeProgram('rundll32', ['url.dll,FileProtocolHandler', vLocalFilePath])
        }
        //FreeBSD or Linux
        else if (utils.stringMiddle(application.getOSName(), 1, 7) == "FreeBSD" || utils.stringMiddle(application.getOSName(), 1, 5) == "Linux") {
        	sw = 1;
            success = application.executeProgram('mozilla', [vLocalFilePath])
        }
        //Mac OSX
        else if (application.getOSName().match("Mac")) {
        	sw = 1;
            success = application.executeProgram('open', [vLocalFilePath])
        }
        if(sw == 1)
        {
        	//var msg = "¿Desea borrar de la Base de Datos este documento?"
        	//var methd = 'forms.lst_AsientoContable_Lineas.BorradoPDF()'
        	//globals.GCshowQuestionDialog(msg,methd,'No','Si',null,null)
        }
	}
	else
	{
		if(ext == null) ext='text/plain'
			else if(ext == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || ext == 'application/vnd.ms-excel' ||
					ext == 'application/vnd.ms-excel.sheet.binary.macroenabled.12') ext = 'application/msexcel'
			else if(ext == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') ext = 'application/msword'
		if(ext == 'application/msexcel' || ext == 'application/msword')
		{
			var serverURL = application.getServerURL() 
			application.showURL(serverURL + "uploads/" + _oFile.getName());
			
			//msg = "¿Desea borrar de la Base de Datos este documento?"
        	//methd = 'forms.lst_AsientoContable_Lineas.BorradoPDF()'
        	//globals.GCshowQuestionDialog(msg,methd,'No','Si',null,null)   
		}
		else
		{
			forms.dlg_pdfDocumentViewer3GC.htmlString = '<html>'+
														'<body>'+
														"</body>"+
														'<div align="center";>'+
															'<embed width="825" height="525" name="plugin" src="../uploads/'+_oFile.getName()+'" type="'+ext+'">'+
														'</div>'+
													 '</html>'	
													
			var result = forms.dlg_pdfDocumentViewer3GC.foundset.selectRecord(nup_cfca,pro_cfca)
			var fsCount = databaseManager.getFoundSetCount(forms.dlg_pdfDocumentViewer3GC.foundset);
			while(result==false)
			{
				if(fsCount == forms.dlg_pdfDocumentViewer3GC.foundset.getSize())
				{
					return;
				}
				forms.dlg_pdfDocumentViewer3GC.foundset.setSelectedIndex(forms.dlg_pdfDocumentViewer3GC.foundset.getSize());
				result = forms.dlg_pdfDocumentViewer3GC.foundset.selectRecord(nup_cfca,pro_cfca);
			}										       								
			      								
			globals.GCshowDialogPDFViewer3(_oFile.getName(), 1, null, null, true, null, null, null, null, null);
			forms.dlg_pdfDocumentViewer3GC.controller.recreateUI()
			application.updateUI()
		}
	}
}

/**
*
* @SuppressWarnings(deprecated)
*
 *
 *
 * @properties={typeid:24,uuid:"61943FF9-F200-4112-87C9-CD0B08E91C80"}
 */
function BorradoPDF()
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		forms.FrmFacturasComprasGC.docupdf = null	
		forms.FrmFacturasComprasGC.filename = null	
		
		//databaseManager.saveData()
	}
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 * @properties={typeid:24,uuid:"940DF39B-660E-4983-B8DC-7D7ADBF2297D"}
 */
function uploadCallbackFunction(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
    plugins.file.streamFilesToServer(_oFile, doImportFile);
	
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 * @properties={typeid:24,uuid:"5780875A-03BB-44C6-A0AA-9117EEDF0FE0"}
 */
function doImportFile(_oFile) {
    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
    var NombreFichero = _oFile.getName()
	NombreFichero = globals.GCQuitarCaracteresEspeciales(NombreFichero)		
	var RutaFichero =  _oFile;
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		var rutapred = plugins.file.getDefaultUploadLocation()
	    _oFile = rutapred + '/' +NombreFichero//_oFile.getName();
		RutaFichero = _oFile
	}
	else
	{
		_oFile = RutaFichero
	}

    //
    // Use BufferedReader so we don't have to read the whole file into memory
    //
    var _oFR = new Packages.java.io.FileInputStream(_oFile),
        _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
        _oBR = new Packages.java.io.BufferedReader(_oIR),
        _sLine = "dummy",
        _nReadLine = 0;

    // using a database transaction (might/will) speed things up
    databaseManager.startTransaction();

    try {
        while (_sLine) {
            _sLine = _oBR.readLine();
            _nReadLine++;

            if (_sLine) {

                // Put your processing code here
            }
        }
        
        var rawData = plugins.file.readFile(_oFile)
		docupdf = rawData
		filename = NombreFichero;
        // Save any unsaved data
        //databaseManager.saveData();

        //
        //do NOT forget this close! to prevent memory leaks
        //
        _oBR.close();

        // Close the database transaction
        databaseManager.commitTransaction();
       
    } catch (_oErr) {
    	_oBR.close();
        globals.GCshowErrorDialog("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+
        						LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
        //application.output("ERROR: " + _oFile.getName() + " at row " + _nReadLine, LOGGINGLEVEL.ERROR);
        globals.GCshowErrorDialog("ERROR: " + _oErr+'\n'+
        						LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
        //application.output("ERROR: " + _oErr, LOGGINGLEVEL.ERROR);
        databaseManager.rollbackTransaction();
    } finally {
        //
        // garbage collection
        //
        _oFR = null;
        _oIR = null;
        _oBR = null;
        DOCPDF = null;
        
    }
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"66E1907F-CCCF-4365-B717-5941F0443672"}
 */
function onDataChangepreten() {
	if(impnee_cfca && impbre_cfca && preten_cfca)
	{
		reten_cfca = globals.GCROUND(impbre_cfca*preten_cfca*0.01,2)				
	}
	else
	{
		reten_cfca = null
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
 * @properties={typeid:24,uuid:"5C201F4B-2A21-4AC5-B463-D382EB1D213B"}
 */
function handle_shortCut(v_event)
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	globals.GCevento = null
	if(frm == 'FrmFacturasComprasGC' && v_event.getType() == 'control F10')
	{
		if(globals.GCisEditing())
		{
			elements.situconta.bgcolor = '#feffe4'
			elements.situconta.readOnly = false
		}
	}
	/*else if(v_event.getType() == 'control alt F12')
	{
		if(globals.GCisEditing())
		{
			elements.nup_cfa.visible = true
			elements.nup_cfa.bgcolor = '#feffe4'
			elements.nup_cfa.readOnly = false
		}
	}*/
}

/**
*
*
*
 * @properties={typeid:24,uuid:"C7D5FFC1-E85F-4B7E-BE51-5B581CB6FFE6"}
 */
function btn_tabLineas()
{
	//if(!globals.GCisEditing()) //if there is a transaction - we're editing something
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
*
*
*
 * @properties={typeid:24,uuid:"1BDA0A14-FC1E-493B-B877-C995C038FB5C"}
 */
function btn_tabEfectos()
{
	//if(!globals.GCisEditing()) //if there is a transaction - we're editing something
	//{
		tabs_dimAll()
		elements.lblEfectos.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 2)
		{
			elements.tabs_mainPanel.tabIndex = 2			
		}
		
	//}
}

/**
*
*
*
*
 * @properties={typeid:24,uuid:"3065B425-B413-478A-B681-6519DEE261DF"}
 */
function btn_tabPagos()
{
	//if(!globals.GCisEditing()) //if there is a transaction - we're editing something
	//{
		tabs_dimAll()
		elements.lblPagos.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 3)
		{
			elements.tabs_mainPanel.tabIndex = 3			
		}
		
	//}
}

/**
 *
 * @properties={typeid:24,uuid:"424F28E1-D6A2-4945-8A47-4B0D7C8368FB"}
 */
function tabs_dimAll()
{
	elements.lblLineas.bgcolor = '#606060'
	elements.lblEfectos.bgcolor = '#606060'
	elements.lblPagos.bgcolor = '#606060'
	
}

/**
*
*
 * @properties={typeid:24,uuid:"CF4B246D-010E-4340-B023-4FC1F2E2E698"}
 */
function situcobrocolor()
{
	var situpag = SituacionPago;
	if (situpag == 'NO PAGADA') {
	    elements.lblsitucobro.fgcolor = '#FF0000';
	} 
	else if (situpag == 'PARCIALMENTE PAGADA') {
	    elements.lblsitucobro.fgcolor = '#FF8000';
	} 
	else {
		elements.lblsitucobro.fgcolor = '#00994C';
	} 
}

/**
*
*
 *
 * @properties={typeid:24,uuid:"D82FBC6B-95CF-4EFA-83C8-D264A8EF7C00"}
 */
function situcontacolor()
{
	var situcon = SituacionConta;
	if (situcon == 'NO CONTABILIZADA') {
	    elements.lblsituconta.fgcolor = '#FF0000';
	} 
	else {
		elements.lblsituconta.fgcolor = '#00994C';
	} 
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
  *
 * @properties={typeid:24,uuid:"B0645611-2D1D-4E76-AE0D-D549107659C6"}
 */
function onDataChangeccreten() {
	// TODO Auto-generated method stub
	if(ccreten_cfca)
	{
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		var con = dataset.getValue(1,2);
		
		if(!Empresa || !con)
		{
			globals.GCshowErrorDialog('No está realizada ninguna conexión con ninguna Contabilidad.\nNo se puede comprobar la existencia de la Cuenta Contable.', null, null, null, null, null)
		}
		else
		{
			query = "select DescCuentaContable,Saldo,CuentaContable,ClaveDesglose from ctbCuentaContable where IdEjercicio ='"+ Empresa+
			"' and CuentaContable='" + ccreten_cfca + "'"/*"' AND (ClaveDesglose = 0 OR ClaveDesglose IS NULL)"*/
			dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
			var cc = dataset.getValue(1,3)
			var clave = dataset.getValue(1,4)
			if(!cc || clave == 1)
			{
				elements.fld_ccreten.selectAll()
				elements.fld_ccreten.requestFocus()
				globals.GCshowErrorDialog("Cuenta Contable no válida o no existe en el PGC de la Empresa '"+Empresa+"'.\nVerifíquela.", null, null, null, null, null)
			}
		}
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
  *
 *
 * @properties={typeid:24,uuid:"DB9B373A-E6E5-47CA-BB7D-B894E9B84FE6"}
 */
function onDataChangeccportes() {
	// TODO Auto-generated method stub
	if(ccportes)
	{
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		var con = dataset.getValue(1,2);
		
		if(!Empresa || !con)
		{
			globals.GCshowErrorDialog('No está realizada ninguna conexión con ninguna Contabilidad.\nNo se puede comprobar la existencia de la Cuenta Contable.', null, null, null, null, null)
		}
		else
		{
			query = "select DescCuentaContable,Saldo,CuentaContable,ClaveDesglose from ctbCuentaContable where IdEjercicio ='"+ Empresa+
			"' and CuentaContable='" + ccportes + "'"/*"' AND (ClaveDesglose = 0 OR ClaveDesglose IS NULL)"*/
			dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
			var cc = dataset.getValue(1,3)
			var clave = dataset.getValue(1,4)
			if(!cc || clave == 1)
			{
				elements.fld_ccportes.selectAll()
				elements.fld_ccportes.requestFocus()
				globals.GCshowErrorDialog("Cuenta Contable no válida o no existe en el PGC de la Empresa '"+Empresa+"'.\nVerifíquela.", null, null, null, null, null)
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"75DB27ED-A176-4730-BA5A-924F70D2E103"}
 * @AllowToRunInFind
 */
function Generacion_Efecto_Factura()
{
	var pro = pro_cfca
	var nup = nup_cfca
	var cfpa = cfpa_cfca
	var fechaefec = fecha_cfca
	var importe = impnee_cfca
	gctbfacturacompracabecera_to_efectoscompras.loadAllRecords()
	gctbfacturacompracabecera_to_efectoscompras.deleteAllRecords()
	if(cfpa_cfca)
	{
		if(GCtbfacturacompracabecera_to_tbmaestroformpago)
		{
			var nefectos = GCtbfacturacompracabecera_to_tbmaestroformpago.ngiro_fp
			var mesvenc = GCtbfacturacompracabecera_to_tbmaestroformpago.mefec_fp
			var tipomesvenc = GCtbfacturacompracabecera_to_tbmaestroformpago.tipocuentaefec_fp
			var diasvenc = GCtbfacturacompracabecera_to_tbmaestroformpago.mprve_fp
			var tipodiasvenc = GCtbfacturacompracabecera_to_tbmaestroformpago.tipocuentavenc
		}
			if(nefectos == null || nefectos == 0 || nefectos == 'Undefined')
			{
				nefectos = 1;
			}
			if(mesvenc == null || mesvenc == 0 || mesvenc == 'Undefined')
			{
				mesvenc = 0;
			}
			if(diasvenc == null || diasvenc == 0 || diasvenc == 'Undefined')
			{
				diasvenc = 0;
			}
			
			
			
				
				var importeefec = impnee_cfca / nefectos
				importeefec = globals.GCROUND(importeefec,2)
				for(var i=1;i<=nefectos;i++)
				{
					if(importe-importeefec >= 0)
					{
						importe -= importeefec
					}
					else
					{
						importeefec = importe
						importe -= importeefec
					}
					
					var porc = 100 / nefectos
					porc = globals.GCROUND(porc,2)
					var Linea = sub_setNewNumeroLineaEfecto()
					
					if(i==1)
					{
						if(tipodiasvenc == 'D')
						{
							fechaefec = new Date(fechaefec.getFullYear(),fechaefec.getMonth(),fechaefec.getDate() + diasvenc)			
						}
						else
						{
							fechaefec = new Date(fechaefec.getFullYear(),fechaefec.getMonth() + diasvenc,fechaefec.getDate() )					
						}
						
					}
					else
					{
						if(tipomesvenc == 'D')
						{
							fechaefec = new Date(fechaefec.getFullYear(),fechaefec.getMonth(),fechaefec.getDate() + mesvenc)												
						}
						else
						{
							fechaefec = new Date(fechaefec.getFullYear(),fechaefec.getMonth() + mesvenc,fechaefec.getDate() )						
						}			
					}
					var clidiapago = 0;//GCtbfacturacabecera_to_tbmaestroclientes.diapago1;
					var clidiapago2 = 0;//GCtbfacturacabecera_to_tbmaestroclientes.diapago2;
					var clidiapago3 = 0;//GCtbfacturacabecera_to_tbmaestroclientes.diapago3;
					
	 				if(clidiapago != 0 && clidiapago != null)
					{
						if(fechaefec.getDate() <= clidiapago)
						{
							fechaefec = new Date(fechaefec.getFullYear(),fechaefec.getMonth(),clidiapago)
						}
						else if(clidiapago2 != 0 && clidiapago2 != null)
						{
							if(fechaefec.getDate() <= clidiapago2)
							{
								fechaefec = new Date(fechaefec.getFullYear(),fechaefec.getMonth(),clidiapago2)
							}
							else if(clidiapago3 != 0 && clidiapago3 != null)
							{
								if(fechaefec.getDate() <= clidiapago3)
								{
									fechaefec = new Date(fechaefec.getFullYear(),fechaefec.getMonth(),clidiapago3)
								}
								else
								{
									fechaefec = new Date(fechaefec.getFullYear(),fechaefec.getMonth()+1,clidiapago)
								}
							}
							else
							{
								fechaefec = new Date(fechaefec.getFullYear(),fechaefec.getMonth()+1,clidiapago)
							}
						}
						else
						{
							fechaefec = new Date(fechaefec.getFullYear(),fechaefec.getMonth()+1,clidiapago)
						}
					}
					
					fechpago_cfca = fechaefec
					databaseManager.saveData(foundset)
					
						
					forms.lst_EfectosFacturaComprasGC.foundset.newRecord(true)
					forms.lst_EfectosFacturaComprasGC.id = application.getUUID()
					forms.lst_EfectosFacturaComprasGC.pro_efc = pro
					forms.lst_EfectosFacturaComprasGC.nup_efc = nup
					forms.lst_EfectosFacturaComprasGC.nli_efc = Linea
					forms.lst_EfectosFacturaComprasGC.fecha_efc = fechaefec
					forms.lst_EfectosFacturaComprasGC.cfpa_efc = cfpa
					forms.lst_EfectosFacturaComprasGC.porc_efc = porc
					forms.lst_EfectosFacturaComprasGC.impo_efc = importeefec
				
					databaseManager.saveData();
					
					
				}
	}
	else if(fechpago_cfca != null && fechpago_cfca != '')
	{
		forms.lst_EfectosFacturaComprasGC.foundset.newRecord(true)
		forms.lst_EfectosFacturaComprasGC.id = application.getUUID()
		forms.lst_EfectosFacturaComprasGC.pro_efc = pro
		forms.lst_EfectosFacturaComprasGC.nup_efc = nup
		Linea = sub_setNewNumeroLineaEfecto()
		forms.lst_EfectosFacturaComprasGC.nli_efc = Linea
		forms.lst_EfectosFacturaComprasGC.fecha_efc = fechpago_cfca
		forms.lst_EfectosFacturaComprasGC.cfpa_efc = null
		forms.lst_EfectosFacturaComprasGC.porc_efc = 100
		forms.lst_EfectosFacturaComprasGC.impo_efc = importe
	
		databaseManager.saveData();
		
	}
	else
	{
		fechpago_cfca = fecha_cfca;
		
		forms.lst_EfectosFacturaComprasGC.foundset.newRecord(true)
		forms.lst_EfectosFacturaComprasGC.id = application.getUUID()
		forms.lst_EfectosFacturaComprasGC.pro_efc = pro
		forms.lst_EfectosFacturaComprasGC.nup_efc = nup
		Linea = sub_setNewNumeroLineaEfecto()
		forms.lst_EfectosFacturaComprasGC.nli_efc = Linea
		forms.lst_EfectosFacturaComprasGC.fecha_efc = fechpago_cfca
		forms.lst_EfectosFacturaComprasGC.cfpa_efc = null
		forms.lst_EfectosFacturaComprasGC.porc_efc = 100
		forms.lst_EfectosFacturaComprasGC.impo_efc = importe
	
		databaseManager.saveData();
	}
}

/**
 *
 * @return {Number}
 * @properties={typeid:24,uuid:"1A3A47D3-F46C-4DC1-B874-9C227FCB83C0"}
 */
function sub_setNewNumeroLineaEfecto()
{
	var query = "select nli_efc from [efectoscompras] where pro_efc = " + pro_cfca +
	" and nup_efc = '"+ nup_cfca +"' order by nli_efc desc"
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Linea = dataset.getValue(1, 1) + 1
	return Linea
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"FA8F6396-E797-4A56-8DF5-E7DFD598EEC1"}
 */
function btn_AddProveedor(event) {
	// TODO Auto-generated method stub
	if(!globals.GCisEditing()) globals.GCstartEditing()	
	forms.dlg_ProveedoresGC.ProveedorID = null;
	forms.dlg_ProveedoresGC.foundset.newRecord(true)
	forms.dlg_ProveedoresGC.id = application.getUUID()
	forms.dlg_ProveedoresGC.pais = 'ES'
	forms.dlg_ProveedoresGC.elements.idcodigo.editable = true
	forms.dlg_ProveedoresGC.elements.idcodigo.bgcolor = '#FFFF00'//'#ffffff'
	forms.dlg_ProveedoresGC.elements.idcodigo.visible = true
	forms.dlg_ProveedoresGC.elements.lblidcodigo.visible = false	
	forms.dlg_ProveedoresGC.elements.btn_print.enabled = false	
	forms.dlg_ProveedoresGC.elements.idcodigo.requestFocus()
	
	globals.GCshowDialogProveedor('BD Proveedores', 1, null, null, true, null, null, null, null, null);	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"51272FD1-FC83-4D88-8D37-16353D02AF3A"}
 */
function bnt_cc(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9ABBA5A2-ECEE-463C-97B5-EB54F5F5B33F"}
 */
function btn_comprasmeses(event) {
	if(globals.GCisEditing()) forms.FrmFacturasComprasGC.btn_cancel()
	globals.GCshowDialogFacturacionProveedores('Compras / Meses',1,null,null,null,null,null,null,null,null)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"1F180480-E789-461F-886F-4D05BD33003C"}
 */
function btn_actPagos(event) {
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(globals.GCisEditing()) forms.FrmFacturasGC.btn_cancel()
	if(pro_cfca && nup_cfca)
	{
		forms.dlg_ActualizacionCarteraPagosGC.DesdeProveedor=forms.FrmFacturasComprasGC.pro_cfca;
		forms.dlg_ActualizacionCarteraPagosGC.HastaProveedor=forms.FrmFacturasComprasGC.pro_cfca;
		forms.dlg_ActualizacionCarteraPagosGC.DesdeFactura=forms.FrmFacturasComprasGC.nup_cfca;
		forms.dlg_ActualizacionCarteraPagosGC.HastaFactura=forms.FrmFacturasComprasGC.nup_cfca;
		globals.GCshowDialogActualizacionCarteraPagos('Actualización Cartera de Pagos',1,null,null,null,null,null,null,null,null)
	}
}
