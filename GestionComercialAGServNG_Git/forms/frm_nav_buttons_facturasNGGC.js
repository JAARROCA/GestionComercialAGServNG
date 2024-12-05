/**
 * @properties={typeid:24,uuid:"3B2C40EC-F29C-4E23-8773-D97DFD1C25BF"}
 * @SuppressWarnings(deprecated)
 */
function btn_add()
{
	//see what form is front-most
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	//if there's no transaction, start one - so they can "cancel"
	if(!globals.GCisEditing()) 
	{
		globals.GCstartEditing()

		//make a new record
		forms[frm].foundset.newRecord(true)
	
		//see if there is an auto-enter method to be performed on that form
		if(forms[frm].validate_autoEnter != undefined) forms[frm].validate_autoEnter()
	
		//ALL forms must have a method "doEdit" for this to work
		
		forms[frm].doEdit()
		
		//tell the first field in the tab order to receive focus
		forms[frm].controller.focusFirstField()
	}
}

/**
 * @properties={typeid:24,uuid:"94ECCB4E-7C23-4208-A9E9-C15583139504"}
 * @SuppressWarnings(deprecated)
 */
function btn_delete()
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	//see what form is front-most
	if(forms[frm].validate_beforeDelete() != 0) return;

	var msg = forms[frm].delete_text

	if(!msg) msg = '¿Estás seguro de querer borrarlo?'
	if(application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT) 
	{
		//tell it what method to execute when dialog closes
		var methd = 'forms.' + frm + '.sub_doDelete()'
	
		//show the tabpanel "dialog"
		globals.GCshowWarningDialog(msg, methd, 'Cancelar', 'Borrar', null, null);
	}
	else
	{
		if(msg) msg = '<html>'+utils.stringReplace(msg,'\n','<br>')+'</html>';
		var resp = scopes.svyCustomDialogs.showQuestionDialog('Borrar',msg,'Cancelar', 'Borrar')
		/*var custom_dlg = scopes.svyCustomDialogs.createCustomDialog(
		'',
			'Borrar',
			msg,
			scopes.svyCustomDialogs.DEFAULT_ICON.WARNING,
			['Cancelar', 'Cancelar']);
		
		var resp = custom_dlg.showDialog()*/
		if(resp == 'Borrar') {
			globals.core_dlg_buttonPressed = 'Borrar';
			forms[frm].sub_doDelete()
		}	
	}
}

/**
 * @properties={typeid:24,uuid:"F56247EC-103B-4AC6-AA5F-0C9E18040D57"}
 * @SuppressWarnings(deprecated)
 */
function btn_edit()
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	if(forms[frm].foundset.getSize() == 0)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No existen registros. Pulsa el botón Añadir para incorporar el primero.','¡Error!')
		else globals.GCshowErrorDialog('No existen registros. Pulsa el botón Añadir para incorporar el primero.', null, null, null, null, null)
	}
	else
	{
		//only do edit if there is no existing transaction
		if(!globals.GCisEditing())
		{
			//ALL forms must have a method "doEdit" for this to work
			forms[frm].doEdit()
	
			//tell the first field in the tab order to receive focus
			forms[frm].controller.focusFirstField()
		}
	}
}

/**
 * @properties={typeid:24,uuid:"AD04273A-F3D2-469D-BF98-CD474C2F32AB"}
 * @SuppressWarnings(deprecated)
 */
function btn_print()
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	//see what form is front-most
	//execute the "print_default" method on each form
	forms[frm].print_default()
}

/**
 * @properties={typeid:24,uuid:"38542065-5F72-46AB-90DF-B41AF4AA50EA"}
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 */
function btn_showAll()
{
	//see what form is front-most
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	var frm2 = utils.stringReplace(frm, 'Frm', 'lst_')
	var uuid = forms[frm]['id']
	//load all records
	forms[frm].foundset.loadAllRecords()
	forms[frm2].foundset.loadAllRecords()
	forms[frm2].btn_sortDesc()
	var result = forms[frm].foundset.selectRecord(uuid)
	var fsCount = databaseManager.getFoundSetCount(forms[frm].foundset);
	while(result==false)
	{
		if(fsCount == forms[frm].foundset.getSize())
		{
			break;
		}
	forms[frm].foundset.setSelectedIndex(forms[frm].foundset.getSize());
	result = forms[frm].foundset.selectRecord(uuid);
	}
	//hide the "show all" button
	sub_hideShowAll();
	globals.GCnav_search = ''
	globals.GCsetupRecordStatus()
}

/**
 * @properties={typeid:24,uuid:"B9D31D04-F504-41DD-87F4-1CA6245B0B95"}
 */
function onShow()
{
	//see if the record status has as "(" in it - if so, it's a foundset
	if(globals.GCrecord_status.indexOf("(") > 0)
	{
		sub_showShowAll();
	}
	else
	{
		sub_hideShowAll();
	}
	
}

/**
 * @properties={typeid:24,uuid:"6834A2F5-3446-42B0-8294-9488EACF6CC8"}
 * @SuppressWarnings(deprecated)
 */
function sub_doDelete()
{
	//see what button text was pressed and then delete if necessary
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var frm = currentcontroller.getName()
		if(frm == 'frm_nav_main_principalNGGC') {
			frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
		}
		forms[frm].foundset.deleteRecord()

		//clear out global - so we don't accidentally delete something
		globals.core_dlg_buttonPressed = null
	}
}

/**
 * @properties={typeid:24,uuid:"7E499A94-D59A-40AD-ADA4-64DEC68A0672"}
 */
function sub_hideShowAll()
{
	elements.btn_showAll.visible = false
	elements.lbl_showAll.visible = false
	elements.grc_divLine.visible = false
}

/**
 * @properties={typeid:24,uuid:"A8A564C2-97EC-4605-B4E5-DED8B6CB5C87"}
 */
function sub_showShowAll()
{
	elements.btn_showAll.visible = true
	elements.lbl_showAll.visible = true
	elements.grc_divLine.visible = true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA227054-B963-4A51-9EF8-AFC1C06CA20F"}
 * @SuppressWarnings(deprecated)
 */
function btn_duplicate(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(frm == 'FrmFacturasGC')
	{		
		if(globals.GCisEditing()) forms.FrmFacturasGC.btn_cancel()
		//btn_showAll()
		if(forms.FrmFacturasGC.eje_cfa && forms.FrmFacturasGC.nup_cfa && forms.FrmFacturasGC.clie_cfa)
		{
			//globals.GCshowDialogDuplicarFactura('Duplicar Factura',1,null,null,null,null,null,null,null,null)
			globals.GCshowDialogDuplicarFacturas('Seleccione Facturas a Duplicar',1,null,null,null,null,null,null,null,null)
			//globals.GCshowDialogDuplicarFacturas2('Seleccione Facturas a Duplicar',1,null,null,null,null,null,null,null,null)
		}
	}
	else if(frm == 'FrmFacturasProformaGC')
	{		
		if(globals.GCisEditing()) forms.FrmFacturasProformaGC.btn_cancel()
		if(forms.FrmFacturasProformaGC.eje_cfa && forms.FrmFacturasProformaGC.nup_cfa && forms.FrmFacturasProformaGC.ser_cfa && forms.FrmFacturasProformaGC.clie_cfa)
		{
			globals.GCshowDialogDuplicarFacturaProforma('Duplicar Factura Proforma',1,null,null,null,null,null,null,null,null)
		}
	}
	else if(frm == 'FrmCobrosPagosGC')
	{		
		if(globals.GCisEditing()) forms.FrmCobrosPagosGC.btn_cancel()
		globals.GCshowDialogDuplicarCobroPago('Duplicar Cobro/Pago',1,null, null, null, null, null, null, null, null);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BD6A7D9C-24DB-4E7F-8AD6-1C6EA1E24CCA"}
 * @SuppressWarnings(deprecated)
 */
function btn_excel(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	//var ro = forms.FrmFacturasGC.elements.fld_fecha_cfa.readOnly;
	if(frm == 'FrmFacturasGC')
	{
		if(globals.GCisEditing()) forms.FrmFacturasGC.btn_cancel()
		if(forms.FrmFacturasGC.eje_cfa && forms.FrmFacturasGC.nup_cfa && forms.FrmFacturasGC.clie_cfa)
		{
			globals.GCCriterios = 0;
			forms.dlg_ExportacionDatosGC.onDataChangeFicheroSalida()
    		globals.GCTipoConsulta = 3;
			forms.dlg_ExportacionDatosGC.onDataChangeDatos()
    		/*globals.GCDesdeCodigo = forms.FrmFacturasGC.clie_cfa;
    		globals.GCHastaCodigo = forms.FrmFacturasGC.clie_cfa;
    		forms.dlg_ExportacionDatosGC.DesdeEje = forms.FrmFacturasGC.eje_cfa;
			forms.dlg_ExportacionDatosGC.HastaEje = forms.FrmFacturasGC.eje_cfa;
			forms.dlg_ExportacionDatosGC.DesdeSer = forms.FrmFacturasGC.ser_cfa;
			forms.dlg_ExportacionDatosGC.HastaSer = forms.FrmFacturasGC.ser_cfa;
			forms.dlg_ExportacionDatosGC.DesdeNup = forms.FrmFacturasGC.nup_cfa;
			forms.dlg_ExportacionDatosGC.HastaNup = forms.FrmFacturasGC.nup_cfa;*/
			
			globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null)
			
			/*var desdeeje = 0;
			var desdeser = '';
			var desdenup = 1;
			var hastaeje = 9999;
			var hastaser = 'ZZ';
			var hastanup = 999999999
			var desdecli = 1;
			var hastacli =99999999;
			// Get the dataset by quering to database
			var query = "SELECT CONCAT([eje_cfa],'',FORMAT([nup_cfa],'00000'),'',[ser_cfa]) AS NFactura"+
						",[fecha_cfa] AS Fecha,isnull([fechcobro_cfa],'') AS FechaCobro,[clie_cfa] AS Cliente"+
						",isnull(replace(replace(replace(replace(replace(replace(replace(desccfpa_cfa, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') AS FormaPago,isnull(replace(replace(replace(replace(replace(replace(replace(obse_cfa, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') AS Observaciones,isnull(FORMAT([impbre_cfa],'###,###,##0.00'),'') AS ImporteBruto"+
						",isnull(FORMAT(isnull(isnull([impbie_cfa],0),0),'###,###,##0.00'),'') AS BaseImponible1,"+
						"isnull(FORMAT(isnull([impbie2_cfa],0),'###,###,##0.00'),'') AS BaseImponible2,"+
						"isnull(FORMAT(isnull([impbie3_cfa],0),'###,###,##0.00'),'') AS BaseImponible3,"+
						"isnull(FORMAT([piva_cfa],'###,###,##0.00'),'') AS IVA1,isnull(FORMAT(isnull([cuotaiva_cfa],0),'###,###,##0.00'),'') AS CuotaIva1,"+
						"isnull(FORMAT([piva2_cfa],'###,###,##0.00'),'') AS IVA2,isnull(FORMAT(isnull([cuotaiva2_cfa],0),'###,###,##0.00'),'') AS CuotaIva2,"+
						"isnull(FORMAT([piva3_cfa],'###,###,##0.00'),'') AS IVA3,isnull(FORMAT(isnull([cuotaiva3_cfa],0),'###,###,##0.00'),'') AS CuotaIva3"+
						",isnull(FORMAT([impnee_cfa],'###,###,##0.00'),'') As ImporteNeto,isnull(FORMAT([gtosfinan_cfa],'###,###,##0.00'),'') AS GastosFinacieros"+
						",isnull(FORMAT([impgtosfinan],'###,###,##0.00'),'') AS ImporteGastosFinacieros,isnull(FORMAT(pirpf,'###,###,##0.00'),'') AS Retencion"+
						",isnull(FORMAT([impirpf],'###,###,##0.00'),'') AS ImporteRetencion,"+
						"isnull(replace(replace(replace(replace(replace(replace(replace(tbMaestroClientes.desccliente, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') AS Nombre,isnull(replace(replace(replace(replace(replace(replace(replace(tbMaestroClientes.direccion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') AS Direccion,"+
						"isnull(replace(replace(replace(replace(replace(replace(replace(tbMaestroClientes.poblacion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') AS Poblacion,isnull(replace(replace(replace(replace(replace(replace(replace(tbMaestroClientes.codpostal, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') AS CosPostal,"+
						"isnull(replace(replace(replace(replace(replace(replace(replace(tbMaestroClientes.provincia, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') AS Provincia,isnull(replace(replace(replace(replace(replace(replace(replace(tbMaestroClientes.cif, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') AS Cif,"+
						"isnull(replace(replace(replace(replace(replace(replace(replace(tbMaestroClientes.telf1, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') AS telf1,isnull(replace(replace(replace(replace(replace(replace(replace(tbMaestroClientes.emailcontacto, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') AS Email,"+
						"ISNULL(tbMaestroClientes.codigoiban,'') as IBAN,"+
						"ISNULL(tbMaestroClientes.CuentaContable,'') as CuentaContable,ISNULL(tbMaestroClientes.CuentaContableVentas,'') as CuentaContableVentas "+
						"FROM [tbFacturaCabecera] INNER JOIN tbMaestroClientes ON tbFacturaCabecera.clie_cfa = tbMaestroClientes.IdCliente "+
						"WHERE ([eje_cfa] BETWEEN "+desdeeje+
						" AND "+hastaeje+") AND ([ser_cfa] BETWEEN '"+desdeser+
						"' AND '"+hastaser+"') AND ([nup_cfa] BETWEEN "+desdenup+
						" AND "+hastanup+") AND ([clie_cfa] BETWEEN "+desdecli+
						" AND "+hastacli+") "+
						"ORDER BY [eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC";
			var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1);
	
			var htm = '<html>'+ ds.getAsHTML()+'</html>'
			if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{
				var js = plugins.file.showFileSaveDialog('Listado_Facturas.xls', 'Selecciona localización para salvar el fichero a exportar');
				if (!js) return;			
				
				// Write the file in the selected location
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			}
			else
			{
				
				var tempFile = plugins.file.createTempFile('Listado_Facturas','.xls');
				var DS = databaseManager.createDataSourceByQuery('LF', globals.GCconex, query, null, -1);
				   if (DS) {
				      var fs = databaseManager.getFoundSet(DS);
				      fs.loadAllRecords();
				      if (fs.getSize() > 0) {
				    	var table = databaseManager.getTable(fs)
						var dataProviders = table.getColumnNames()
						var bytes = plugins.excelxport.excelExport(fs,dataProviders)
						
						plugins.file.writeFile(tempFile,bytes)
						plugins.file.openFile(tempFile,"_self",'application/vnd.ms-excel')
						
				      }
				   }
			}*/
		}
	}
	else if(frm == 'FrmFacturasProformaGC')
	{
		if(globals.GCisEditing()) forms.FrmFacturasProformaGC.btn_cancel()
		if(forms.FrmFacturasProformaGC.eje_cfa && forms.FrmFacturasProformaGC.nup_cfa && forms.FrmFacturasProformaGC.clie_cfa)
		{
			globals.GCCriterios = 0;
			forms.dlg_ExportacionDatosGC.onDataChangeFicheroSalida()
    		globals.GCTipoConsulta = 4;
			forms.dlg_ExportacionDatosGC.onDataChangeDatos()
    		/*globals.GCDesdeCodigo = forms.FrmFacturasProformaGC.clie_cfa;
    		globals.GCHastaCodigo = forms.FrmFacturasProformaGC.clie_cfa;
    		forms.dlg_ExportacionDatosGC.DesdeEje = forms.FrmFacturasProformaGC.eje_cfa;
			forms.dlg_ExportacionDatosGC.HastaEje = forms.FrmFacturasProformaGC.eje_cfa;
			forms.dlg_ExportacionDatosGC.DesdeSer = forms.FrmFacturasProformaGC.ser_cfa;
			forms.dlg_ExportacionDatosGC.HastaSer = forms.FrmFacturasProformaGC.ser_cfa;
			forms.dlg_ExportacionDatosGC.DesdeNup = forms.FrmFacturasProformaGC.nup_cfa;
			forms.dlg_ExportacionDatosGC.HastaNup = forms.FrmFacturasProformaGC.nup_cfa;*/
			
			globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null)
			
			/*var desdeeje = 0;
			var desdeser = 'P'
			var desdenup = 1;
			var hastaeje = 9999;
			var hastaser = 'P';
			var hastanup = 9999999;
			var desdecli = 1;
			var hastacli = 9999999;
			var query = "SELECT CONCAT([eje_cfa],'',FORMAT([nup_cfa],'00000'),'',[ser_cfa]) AS NFactura"+
						",[fecha_cfa] AS Fecha,isnull([fechcobro_cfa],'') AS FechaCobro,[clie_cfa] AS Cliente"+
						",isnull(replace(replace(replace(replace(replace(replace(replace(desccfpa_cfa, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') AS FormaPago,isnull(replace(replace(replace(replace(replace(replace(replace(obse_cfa, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') AS Observaciones,isnull(FORMAT([impbre_cfa],'###,###,##0.00'),'') AS ImporteBruto"+
						",isnull(FORMAT([impbie_cfa],'###,###,##0.00'),'') AS BaseImponible,isnull(FORMAT([piva_cfa],'###,###,##0.00'),'') AS IVA,isnull(FORMAT([cuotaiva_cfa],'###,###,##0.00'),'') AS CuotaIva"+
						",isnull(FORMAT([impnee_cfa],'###,###,##0.00'),'') As ImporteNeto,isnull(FORMAT([gtosfinan_cfa],'###,###,##0.00'),'') AS GastosFinacieros"+
						",isnull(FORMAT([impgtosfinan],'###,###,##0.00'),'') AS ImporteGastosFinacieros "+
						"FROM [tbFacturaProformaCabecera] WHERE ([eje_cfa] BETWEEN "+desdeeje+
						" AND "+hastaeje+") AND ([ser_cfa] BETWEEN '"+desdeser+
						"' AND '"+hastaser+"') AND ([nup_cfa] BETWEEN "+desdenup+
						" AND "+hastanup+") AND ([clie_cfa] BETWEEN "+desdecli+
						" AND "+hastacli+") "+
						"ORDER BY [eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC";
			var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
			
			var htm = '<html>'+ ds.getAsHTML()+'</html>'
			if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{
				var js = plugins.file.showFileSaveDialog('Listado_Facturas_Proforma.xls', 'Selecciona localización para salvar el fichero a exportar');
				if (!js) return;			
				
				// Write the file in the selected location
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			}
			else
			{
				var tempFile = plugins.file.createTempFile('Listado_Facturas_Proforma','.xls');
				var DS = databaseManager.createDataSourceByQuery('LFPR', globals.GCconex, query, null, -1);
				   if (DS) {
				      var fs = databaseManager.getFoundSet(DS);
				      fs.loadAllRecords();
				      if (fs.getSize() > 0) {
				    	var table = databaseManager.getTable(fs)
						var dataProviders = table.getColumnNames()
						var bytes = plugins.excelxport.excelExport(fs,dataProviders)
						
						plugins.file.writeFile(tempFile,bytes)
						plugins.file.openFile(tempFile,"_self",'application/vnd.ms-excel')
						
				      }
				   }
			}*/
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"57D4545C-B256-4D9B-96F5-A1F6FC8F1ADF"}
 * @SuppressWarnings(deprecated)
 */
function btn_Salir(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	//{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	
	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) {
		if(gcparametrosaplicacion_to_parametrosaplicacion && gcparametrosaplicacion_to_parametrosaplicacion.empresa) var nombreempresa = gcparametrosaplicacion_to_parametrosaplicacion.empresa;
		else nombreempresa = 'GestionComercialAGServNG';
		/*var custom_dlg = scopes.svyCustomDialogs.createCustomDialog(
		'custom_servoy_theme_properties.less',
		nombreempresa,
		'<html>¿Desea realmente salir de la Alicación?<br>',
		scopes.svyCustomDialogs.DEFAULT_ICON.INFO,
		['No', 'Si']);*/	
		
		var custom_dlg = scopes.svyCustomDialogs.showQuestionDialog(nombreempresa,'¿Desea realmente salir de la Aplicación?','Si','No')
		if(custom_dlg == "Si") 
		{
			//application.closeAllWindows();
			//controller.show(null);
			//scopes.svySecurity.logout();
			application.exit();
		}
	}
	else globals.GCshowDialogSalir('Salir de la Aplicación', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	
}
