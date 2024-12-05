/**
 * @properties={typeid:24,uuid:"282F2E99-F426-474E-834A-EE1FE6258816"}
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
 * @properties={typeid:24,uuid:"36A44DB8-4877-4A99-BE73-2905FA677183"}
 * @SuppressWarnings(deprecated)
 */
function btn_delete()
{
	//see what form is front-most
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	if(globals.GCisEditing()) forms[frm].btn_cancel()
	//if there's no transaction, start one - so they can "cancel"
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
 * @properties={typeid:24,uuid:"EEFBE910-FA70-4056-89BE-FB8346AFF32C"}
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
 * @properties={typeid:24,uuid:"31520033-0606-49CC-AD30-0CB38747CB44"}
 * @SuppressWarnings(deprecated)
 */
function btn_print()
{
	//see what form is front-most
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	if(globals.GCisEditing()) forms[frm].btn_cancel()
	//if there's no transaction, start one - so they can "cancel"
	
	//execute the "print_default" method on each form
	forms[frm].print_default()
}

/**
 * @properties={typeid:24,uuid:"CA2D1EAF-27E0-49E9-810A-6CFDA6BBEBA9"}
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 */
function btn_showAll()
{
	//see what form is front-most
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
		
		//var menuItem = forms.frm_nav_main_principalNGGC.elements.navbar.getMenuItem(forms.frm_nav_main_principalNGGC.DEFAULT_NAVBAR_ACTIONS.SEARCH);
		//if(menuItem) menuItem.text = null;
	}
	var frm2 = utils.stringReplace(frm, 'Frm', 'lst_')
	var uuid = forms[frm]['id']
	//load all records
	forms[frm].foundset.loadAllRecords()
	forms[frm2].foundset.loadAllRecords()
	forms[frm2].btn_sortAsc()
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
 * @properties={typeid:24,uuid:"F034172A-E2C9-49A8-86F2-089B758442DB"}
 * @SuppressWarnings(deprecated)
 */
function onShow()
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}


	if(frm == 'FrmOperariosGC') 
	{
		forms.frm_nav_buttons_maestrosGC.elements.btn_excel.enabled = false;
		forms.frm_nav_buttons_maestrosGC.elements.lbl_excel.enabled = false;	
		forms.frm_nav_buttons_maestrosGC.elements.btn_print.enabled = true;
		forms.frm_nav_buttons_maestrosGC.elements.lbl_print.enabled = true;
	}
	else if(frm == 'FrmDelegacionesGC' || frm == 'FrmTiposIVAGC') 
	{
		forms.frm_nav_buttons_maestrosGC.elements.btn_excel.enabled = false;
		forms.frm_nav_buttons_maestrosGC.elements.lbl_excel.enabled = false;	
		forms.frm_nav_buttons_maestrosGC.elements.btn_print.enabled = false;
		forms.frm_nav_buttons_maestrosGC.elements.lbl_print.enabled = false;
	}	
	else 
	{
		forms.frm_nav_buttons_maestrosGC.elements.btn_excel.enabled = true;
		forms.frm_nav_buttons_maestrosGC.elements.lbl_excel.enabled = true;	
		forms.frm_nav_buttons_maestrosGC.elements.btn_print.enabled = true;
		forms.frm_nav_buttons_maestrosGC.elements.lbl_print.enabled = true;
	}
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
 * @properties={typeid:24,uuid:"F4175B63-53A9-4604-B16F-C1D8E89B76ED"}
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
 * @properties={typeid:24,uuid:"E1A99B80-6566-4CF4-BA11-29D1CA5C19B5"}
 */
function sub_hideShowAll()
{
	elements.btn_showAll.visible = false
	elements.lbl_showAll.visible = false
	elements.grc_divLine.visible = false
}

/**
 * @properties={typeid:24,uuid:"85E61F45-732D-478F-A6E8-8C49AE4DDB2B"}
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
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"99C9872C-BD35-4053-9422-B304566435D4"}
 */
function btn_excel(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(frm == 'FrmArticulosGC')
	{
		if(globals.GCisEditing()) forms.FrmArticulosGC.btn_cancel()
		if(forms.FrmArticulosGC.codigo)
		{
			/*globals.GCCriterios = 0;
    		globals.GCTipoConsulta = 2;
    		globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null)
    		*/
    		var DC = '';
			var HC = 'ZZZZZZZZZ';
			var query = "SELECT [Codigo],isnull(replace(replace(replace(replace(replace(replace(replace(Descripcion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Descripcion,isnull([RefCliente],'') as RefCliente,isnull([DescIngles],'') as DescIngles,isnull([FechaVigor],'') as FechaVigor"+
			",isnull([Situacion],'') as Situacion,isnull([Familia],'') as Familia,isnull([UnidMedida],'') as UnidMedida,isnull(FORMAT([PesoBruto],'###,###,##0.00'),'') as PesoBruto,isnull(FORMAT([PesoNeto],'###,###,##0.00'),'') as PesoNeto"+
			",isnull(FORMAT([PrecioCosto],'###,###,##0.00'),'') as PrecioCosto,isnull([LoteEcon],'') as LoteEcon,isnull([StockMin],'') as StockMin,isnull([Observacion],'') as Observacion"+
			",isnull(FORMAT([PrecioPieza],'###,###,##0.00'),'') as PrecioPieza,isnull([Multiplo],'') as Multiplo "+
			"FROM [tbMaestroArticulos] WHERE [Codigo] BETWEEN '"+DC+"' AND '"+HC+
			"' ORDER BY [Codigo] ASC";
			//var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1);
	
			/*var htm = '<html>'+ ds.getAsHTML()+'</html>'
			if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{
				var js = plugins.file.showFileSaveDialog('Listado_Articulos.xls', 'Selecciona localización para salvar el fichero a exportar');
				if (!js) return;			
				
				// Write the file in the selected location
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			}
			else
			{*/
				
				var tempFile = plugins.file.createTempFile('Listado_Articulos','.xls');
				var DS = databaseManager.createDataSourceByQuery('LAGC', globals.GCconex, query, null, -1);
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
				   
				  /* var tempFile = plugins.file.createTempFile('Listado_Articulos','.xls');
				   var folderName = plugins.ngdesktopfile.homeDir();
				   var targetFileName = folderName + java.io.File.separator + tempFile;
				   targetFileName = targetFileName.replace(/\\/g, "/");
				   var DS = databaseManager.createDataSourceByQuery('LAGC', globals.GCconex, query, null, -1);
				   if (DS) {
				      var fs = databaseManager.getFoundSet(DS);
				      fs.loadAllRecords();
				      if (fs.getSize() > 0) {
				    	var table = databaseManager.getTable(fs)
						var dataProviders = table.getColumnNames()
						var bytes = plugins.excelxport.excelExport(fs,dataProviders)
					   plugins.ngdesktopfile.writeFile(targetFileName, bytes);
					   if (targetFileName) {
					       plugins.ngdesktopfile.openFile(targetFileName);
					   }
				      }
				   }*/
			//}
			
			//create a xlsx workbook from the dataset, including all columns, using the given header names
			/*var workbook = scopes.svyExcelUtils.createWorkbookFromDataSet(
				ds,
				null,
				['Codigo', 'Descripcion', 'RefCliente', 'DescIngles', 'FechaVigor','Situacion','Familia','UnidMedida',
				'PesoBruto','PesoNeto','PrecioCosto','LoteEcon','StockMin','Observacion','PrecioPieza','Multiplo'], 
				scopes.svyExcelUtils.FILE_FORMAT.XLSX);
				
			workbook.sheetName = 'Listado_Articulos';
			//create styles for header and rows
			var headerStyle = workbook.createHeaderStyle();
			headerStyle
				.setFont('Calibri,0,11')
				.setFillPattern(scopes.svyExcelUtils.FILL_PATTERN.SOLID_FOREGROUND)
				.setFillForegroundColor(scopes.svyExcelUtils.INDEXED_COLOR.LIGHT_ORANGE)
				.setAlignment(scopes.svyExcelUtils.ALIGNMENT.CENTER);
			workbook.headerStyle = headerStyle;
				
			var rowStyle = workbook.createRowStyle();
			rowStyle
				.setFont('Calibri,0,11');
			workbook.rowStyle = rowStyle;
			if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{
				//write to file
				//workbook.writeToFile('C:\\Temp\\dataset.xlsx');
				//or get the xlsx data
				//var bytes = workbook.getBytes();
				var js = plugins.file.showFileSaveDialog('Listado_Articulos.xlsx', 'Selecciona localización para salvar el fichero a exportar');
				if (!js) return;
				workbook.writeToFile(js);
			}
			else
			{
				var tempFile = plugins.file.createTempFile('Listado_Articulos','.xlsx');
				var bytes = workbook.getBytes();
				plugins.file.writeFile(tempFile,bytes)
				plugins.file.openFile(tempFile,"_self",'application/vnd.ms-excel')
			}*/
		}
	}
	else if(frm == 'FrmClientesGC')
	{
		if(globals.GCisEditing()) forms.FrmClientesGC.btn_cancel()
		if(forms.FrmClientesGC.idcliente)
		{
			/*globals.GCCriterios = 0;
    		globals.GCTipoConsulta = 0;
    		globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null)
    		*/
    		DC = '0';
			HC = '999999999';
			query = "SELECT IdCliente,isnull(replace(replace(replace(replace(replace(replace(replace(DescCliente, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as DescCliente,isnull(replace(replace(replace(replace(replace(replace(replace(Direccion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Direccion,isnull(replace(replace(replace(replace(replace(replace(replace(Poblacion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Poblacion"+
			",isnull(replace(replace(replace(replace(replace(replace(replace(Provincia, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Provincia,isnull(CodPostal,'') as CodPostal,isnull(NumProveedor,'') as NumProveedor,isnull(replace(replace(replace(replace(replace(replace(replace(RazonSocial, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as RazonSocial,isnull(replace(replace(replace(replace(replace(replace(replace(PersContacto, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as PersonaContacto,isnull(EmailContacto,'') as EmailContacto"+
			",isnull(web,'') as Web,isnull(Telf1,'') as Telf1,isnull(Telf2,'') as Telf2,isnull(Fax,'') as Fax,isnull(CIF,'') as CIF"+
			",isnull(FORMAT(TipoIva,'###,###,##0.00'),'') as IVA,isnull(DiaPago1,'') as DiaPago1,isnull(DiaPago2,'') as DiaPago2,isnull(DiaPago3,'') as DiaPago3,isnull(Pais,'') as Pais"+
			",isnull(replace(replace(replace(replace(replace(replace(replace(Observaciones, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Observaciones,isnull(CodigoBanco,'') as CodigoBanco,isnull(CodigoSucursal,'') as CodigoSucursal,isnull(Codigo1dc,'') as CodigoDC"+
			" ,isnull(CodigoCuenta,'') as CodigoCuenta,isnull(CodigoIBAN,'') as IBAN,isnull(SWIFT,'') SWIFT,isnull(CuentaContable,'') as CuentaContable,isnull(CuentaContableVentas,'') as CuentaContableVentas "+
			"FROM tbMaestroClientes WHERE IdCliente BETWEEN "+DC+" AND "+HC+
			" ORDER BY IdCliente";
			//ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1);
			
			/*htm = '<html>'+ ds.getAsHTML()+'</html>'
			if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{
				js = plugins.file.showFileSaveDialog('Listado_Clientes.xls', 'Selecciona localización para salvar el fichero a exportar');
				if (!js) return;			
				
				// Write the file in the selected location
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			}
			else
			{*/
			
				tempFile = plugins.file.createTempFile('Listado_Clientes','.xls');
				DS = databaseManager.createDataSourceByQuery('LCGC', globals.GCconex, query, null, -1);
				   if (DS) {
				      fs = databaseManager.getFoundSet(DS);
				      fs.loadAllRecords();
				      if (fs.getSize() > 0) {
				    	table = databaseManager.getTable(fs)
						dataProviders = table.getColumnNames()
						bytes = plugins.excelxport.excelExport(fs,dataProviders)
						
						plugins.file.writeFile(tempFile,bytes)
						plugins.file.openFile(tempFile,"_self",'application/vnd.ms-excel')
						
				      }
				   }
				   
			//}
			
			//create a xlsx workbook from the dataset, including all columns, using the given header names
			/*var workbook = scopes.svyExcelUtils.createWorkbookFromDataSet(
				ds,
				null,
				['IdCliente', 'DescCliente', 'Direccion', 'Poblacion', 'Provincia','CodPostal','NumProveedor','RazonSocial',
				'PersContacto','EmailContacto','Web','Telf1','Telf2','Fax','CIF','IVA','DiaPago1','DiaPago2','DiaPago3',
				'Pais','Observaciones','CodigoBanco','CodigoSucursal','CodigoDC','CodigoCuenta','IBAN','SWIFT',
				'CuentaContable','CuentaContableVentas'], 
				scopes.svyExcelUtils.FILE_FORMAT.XLSX);
				
			workbook.sheetName = 'Listado_Clientes';
			//create styles for header and rows
			var headerStyle = workbook.createHeaderStyle();
			headerStyle
				.setFont('Calibri,0,11')
				.setFillPattern(scopes.svyExcelUtils.FILL_PATTERN.SOLID_FOREGROUND)
				.setFillForegroundColor(scopes.svyExcelUtils.INDEXED_COLOR.LIGHT_ORANGE)
				.setAlignment(scopes.svyExcelUtils.ALIGNMENT.CENTER);
			workbook.headerStyle = headerStyle;
				
			var rowStyle = workbook.createRowStyle();
			rowStyle
				.setFont('Calibri,0,11');
			workbook.rowStyle = rowStyle;
			if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{
				//write to file
				//workbook.writeToFile('C:\\Temp\\dataset.xlsx');
				//or get the xlsx data
				//var bytes = workbook.getBytes();
				js = plugins.file.showFileSaveDialog('Listado_Clientes.xlsx', 'Selecciona localización para salvar el fichero a exportar');
				if (!js) return;
				workbook.writeToFile(js);
			}
			else
			{
				tempFile = plugins.file.createTempFile('Listado_Clientes','.xlsx');
				bytes = workbook.getBytes();
				plugins.file.writeFile(tempFile,bytes)
				plugins.file.openFile(tempFile,"_self",'application/vnd.ms-excel')
			}*/
		}
	}
	else if(frm == 'FrmProveedoresGC')
	{
		if(globals.GCisEditing()) forms.FrmProveedoresGC.btn_cancel()
		if(forms.FrmProveedoresGC.codpro)
		{
			/*globals.GCCriterios = 0;
    		globals.GCTipoConsulta = 1;
    		globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null)
    		*/
    		DC = '0';
			HC = '999999999';
			query = "SELECT [Codpro],isnull(replace(replace(replace(replace(replace(replace(replace(DescProveedor, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as DescProveedor,isnull(replace(replace(replace(replace(replace(replace(replace(Direccion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Direccion,isnull(replace(replace(replace(replace(replace(replace(replace(Poblacion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Poblacion"+
			",isnull(replace(replace(replace(replace(replace(replace(replace(Provincia, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Provincia,isnull([CodPostal],'') as CodPostal,isnull([Pais],'') as Pais,isnull(replace(replace(replace(replace(replace(replace(replace(PersContacto, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as PersContacto"+
			",isnull([Telf1],'') as Telf1,isnull([Telf2],'') as Telf2,isnull([Fax],'') as Fax,isnull([CIF],'') as CIF,isnull([EMail],'') as EMail,isnull([CuentaContable],'') as CuentaContable"+
			",isnull([CCGastos],'') as CCGastos,isnull(FORMAT([PorcIva],'###,###,##0.00'),'') as PorcIva,isnull(FORMAT([PorcIRPF],'###,###,##0.00'),'') as PorcIRPF"+
			",isnull(FORMAT([PorcDPP],'###,###,##0.00'),'') as PorcDPP,isnull(FORMAT([DtoPP],'###,###,##0.00'),'') as DtoPP,isnull(FORMAT([GtosFinan],'###,###,##0.00'),'') as GtosFinan "+
			"FROM [tbMaestroProveedores] WHERE [Codpro] BETWEEN "+DC+" AND "+HC+
			" ORDER BY [Codpro] ASC";
			//ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1);
	
			/*htm = '<html>'+ ds.getAsHTML()+'</html>'
			if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{
				var js = plugins.file.showFileSaveDialog('Listado_Proveedores.xls', 'Selecciona localización para salvar el fichero a exportar');
				if (!js) return;			
				
				// Write the file in the selected location
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			}
			else
			{*/
				/*var nom = 'Listado_Articulos.xls';
				
				var serverURL = application.getServerURL() 
				js = serverURL + "\\uploads\\" + nom
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
				*/
				tempFile = plugins.file.createTempFile('Listado_Proveedores','.xls');
				DS = databaseManager.createDataSourceByQuery('LPGC', globals.GCconex, query, null, -1);
				   if (DS) {
				      fs = databaseManager.getFoundSet(DS);
				      fs.loadAllRecords();
				      if (fs.getSize() > 0) {
				    	table = databaseManager.getTable(fs)
						dataProviders = table.getColumnNames()
						bytes = plugins.excelxport.excelExport(fs,dataProviders)
						
						plugins.file.writeFile(tempFile,bytes)
						plugins.file.openFile(tempFile,"_self",'application/vnd.ms-excel')
						
				      }
				   }
			//}
		}
	}
	else if(frm == 'FrmDelegacionesGC')
	{
		if(globals.GCisEditing()) forms.FrmDelegacionesGC.btn_cancel()
		if(forms.FrmDelegacionesGC.idcliente)
		{
			globals.GCCriterios = 0;
    		globals.GCTipoConsulta = 5;
    		globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null)
		}
	}
	else if(frm == 'FrmBancosCuentasCargoGC')
	{
		if(globals.GCisEditing()) forms.FrmBancosCuentasCargoGC.btn_cancel()
		if(forms.FrmBancosCuentasCargoGC.codigoctabanco)
		{
			globals.GCCriterios = 0;
    		globals.GCTipoConsulta = 6;
    		globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null)
		}
	}
	else if(frm == 'FrmAgentesGC')
	{
		if(globals.GCisEditing()) forms.FrmAgentesGC.btn_cancel()
		if(forms.FrmAgentesGC.idagente)
		{
			globals.GCCriterios = 0;
    		globals.GCTipoConsulta = 7;
    		globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null)
		}
	}	
	else if(frm == 'FrmSwiftBancosGC')
	{
		if(globals.GCisEditing()) forms.FrmSwiftBancosGC.btn_cancel()
		if(forms.FrmSwiftBancosGC.idbanco)
		{
			query = "SELECT [IdBanco] AS IdBanco,ISNULL([NombreBanco],'') AS NombreBanco,ISNULL([BIC],'') as SWIFT  "+
			"FROM [dbo].[SwiftBancos] ORDER BY [IdBanco]";
			//ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	
			/*htm = '<html>'+ ds.getAsHTML()+'</html>'
			if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{
				js = plugins.file.showFileSaveDialog('Swifts_Bancos.xls', 'Selecciona localización para salvar el fichero a exportar');
				if (!js) return;			
				
				// Write the file in the selected location
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			}
			else
			{*/
				/*var nom = 'Swifts_Bancos.xls';
				
				var serverURL = application.getServerURL() 
				js = serverURL + "\\uploads\\" + nom
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
				*/
				tempFile = plugins.file.createTempFile('Swift_Bancos','.xls');
				DS = databaseManager.createDataSourceByQuery('SB', globals.GCconex, query, null, -1);
				   if (DS) {
				      fs = databaseManager.getFoundSet(DS);
				      fs.loadAllRecords();
				      if (fs.getSize() > 0) {
				    	table = databaseManager.getTable(fs)
						dataProviders = table.getColumnNames()
						bytes = plugins.excelxport.excelExport(fs,dataProviders)
						
						plugins.file.writeFile(tempFile,bytes)
						plugins.file.openFile(tempFile,"_self",'application/vnd.ms-excel')
						
				      }
				   }
			//}
		}
	}
	else if(frm == 'FrmFormaPagoGC')
	{
		if(globals.GCisEditing()) forms.FrmFormaPagoGC.btn_cancel()
		if(forms.FrmFormaPagoGC.codig_fp)
		{
			DC = '';
			HC = 'ZZZZZZZZ';
			// Get the dataset by quering to database
			query = "SELECT [codig_fp],isnull([denom_fp],'') as denom_fp,isnull([ngiro_fp],'') as ngiro_fp,isnull([mefec_fp],'') as mefec_fp,isnull([tipocuentaefec_fp],'') as tipocuentaefec_fp"+
						",isnull([mprve_fp],'') as mprve_fp,isnull([tipocuentavenc],'') as tipocuentavenc "+
						"FROM [dbo].[tbMaestroformpago] WHERE [codig_fp] BETWEEN '"+DC+"' AND '"+HC+
						"' ORDER BY [codig_fp] ASC";
			//ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
						
				/*htm = '<html>'+ ds.getAsHTML()+'</html>'
				if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					js = plugins.file.showFileSaveDialog('Listado_FormasPago.xls', 'Selecciona localización para salvar el fichero a exportar');
					if (!js) return;
					
					// Write the file in the selected location
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
				}
				else
				{*/
					/*nom = 'Listado_FormasPago.xls';
					
					serverURL = application.getServerURL() 
					js = serverURL + "\\uploads\\" + nom
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
					*/
					tempFile = plugins.file.createTempFile('Listado_FormasPago','.xls');
					DS = databaseManager.createDataSourceByQuery('LFP', globals.GCconex, query, null, -1);
					   if (DS) {
					      fs = databaseManager.getFoundSet(DS);
					      fs.loadAllRecords();
					      if (fs.getSize() > 0) {
					    	table = databaseManager.getTable(fs)
							dataProviders = table.getColumnNames()
							bytes = plugins.excelxport.excelExport(fs,dataProviders)
							
							plugins.file.writeFile(tempFile,bytes)
							plugins.file.openFile(tempFile,"_self",'application/vnd.ms-excel')
							
					      }
					   }
				//}
				
						
		}
	}	
	else if(frm == 'FrmFamiliasGC')
	{
		if(globals.GCisEditing()) forms.FrmFamiliasGC.btn_cancel()
		if(forms.FrmFamiliasGC.idfamilia)
		{
			DC = '0';
			HC = 'ZZZZZZZZ';
			// Get the dataset by quering to database
			query = "SELECT [idfamilia],isnull([descfamilia],'') as descfamilia FROM [dbo].[tbMaestrofamila] WHERE [idfamilia] BETWEEN '"+DC+"' AND '"+HC+
						"' ORDER BY [idfamilia] ASC";
			//ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999);
						
				/*htm = '<html>'+ ds.getAsHTML()+'</html>'
				if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					js = plugins.file.showFileSaveDialog('Listado_Familias.xls', 'Selecciona localización para salvar el fichero a exportar');
					if (!js) return;
					
					// Write the file in the selected location
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
				}
				else
				{*/
					/*nom = 'Listado_Familias.xls';
					
					serverURL = application.getServerURL() 
					js = serverURL + "\\uploads\\" + nom
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
					*/
					tempFile = plugins.file.createTempFile('Listado_Familias','.xls');
					DS = databaseManager.createDataSourceByQuery('LF', globals.GCconex, query, null, -1);
					   if (DS) {
					      fs = databaseManager.getFoundSet(DS);
					      fs.loadAllRecords();
					      if (fs.getSize() > 0) {
					    	table = databaseManager.getTable(fs)
							dataProviders = table.getColumnNames()
							bytes = plugins.excelxport.excelExport(fs,dataProviders)
							
							plugins.file.writeFile(tempFile,bytes)
							plugins.file.openFile(tempFile,"_self",'application/vnd.ms-excel')
							
					      }
					   }
				//}
				
						
		}
	}
	else if(frm == 'FrmTransportesGC')
	{
		if(globals.GCisEditing()) forms.FrmTransportesGC.btn_cancel()
		if(forms.FrmTransportesGC.idtransportista)
		{
			DC = '';
			HC = 'ZZZZZZZZ';
			// Get the dataset by quering to database
			query = "SELECT [IdTransportista],isnull([RazonSocial],'') as razonsocial,isnull([Direccion],'') as direccion,isnull([Poblacion],'') as poblacion,isnull([email],'') as email"+
					",isnull([Telefono],'') as telefono,isnull([Fax],'') as fax,isnull([PersonaContacto],'') as PersonaContacto,isnull([Matricula],'') as Matricula,isnull([Remolque],'') as Remolque "+      
      				"FROM [dbo].[tbMaestroTransportista] WHERE [idtransportista] BETWEEN '"+DC+"' AND '"+HC+
						"' ORDER BY [idtransportista] ASC";
			//ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
						
				/*htm = '<html>'+ ds.getAsHTML()+'</html>'
				if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					js = plugins.file.showFileSaveDialog('Listado_Transportistas.xls', 'Selecciona localización para salvar el fichero a exportar');
					if (!js) return;
					
					// Write the file in the selected location
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
				}
				else
				{*/
					/*nom = 'Listado_Transportistas.xls';
					
					serverURL = application.getServerURL() 
					js = serverURL + "\\uploads\\" + nom
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
					*/
					tempFile = plugins.file.createTempFile('Listado_Transportistas','.xls');
					DS = databaseManager.createDataSourceByQuery('LT', globals.GCconex, query, null, -1);
					   if (DS) {
					      fs = databaseManager.getFoundSet(DS);
					      fs.loadAllRecords();
					      if (fs.getSize() > 0) {
					    	table = databaseManager.getTable(fs)
							dataProviders = table.getColumnNames()
							bytes = plugins.excelxport.excelExport(fs,dataProviders)
							
							plugins.file.writeFile(tempFile,bytes)
							plugins.file.openFile(tempFile,"_self",'application/vnd.ms-excel')
							
					      }
					   }
				//}
				
						
		}
	}	
	else if(frm == 'FrmUnidMedidaGC')
	{
		if(globals.GCisEditing()) forms.FrmUnidMedidaGC.btn_cancel()
		if(forms.FrmUnidMedidaGC.unidade_id)
		{
			DC = '';
			HC = 'ZZZZZZZZ';
			// Get the dataset by quering to database
			query = "SELECT [unidade_id],isnull([desc_uni],'') as desc_uni "+      
      				"FROM [dbo].[tbmaestrounidades] WHERE [unidade_id] BETWEEN '"+DC+"' AND '"+HC+
						"' ORDER BY [unidade_id] ASC";
			//ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
						
				/*htm = '<html>'+ ds.getAsHTML()+'</html>'
				if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					js = plugins.file.showFileSaveDialog('Listado_Unidades.xls', 'Selecciona localización para salvar el fichero a exportar');
					if (!js) return;
					
					// Write the file in the selected location
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
				}
				else
				{*/
					/*nom = 'Listado_Unidades.xls';
					
					serverURL = application.getServerURL() 
					js = serverURL + "\\uploads\\" + nom
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
					*/
					tempFile = plugins.file.createTempFile('Listado_Unidades','.xls');
					DS = databaseManager.createDataSourceByQuery('LU', globals.GCconex, query, null, -1);
					   if (DS) {
					      fs = databaseManager.getFoundSet(DS);
					      fs.loadAllRecords();
					      if (fs.getSize() > 0) {
					    	table = databaseManager.getTable(fs)
							dataProviders = table.getColumnNames()
							bytes = plugins.excelxport.excelExport(fs,dataProviders)
							
							plugins.file.writeFile(tempFile,bytes)
							plugins.file.openFile(tempFile,"_self",'application/vnd.ms-excel')
							
					      }
					   }
				//}
				
						
		}
	}
	else if(frm == 'FrmObservacionGC')
	{
		if(globals.GCisEditing()) forms.FrmObservacionGC.btn_cancel()
		if(forms.FrmObservacionGC.codigo)
		{
			// Get the dataset by quering to database
			query = "SELECT [codigo],isnull([descripcion],'') as descripcion "+      
      				"FROM [dbo].[tbmaestroobservaciones] WHERE [codigo] BETWEEN 0 AND 9999999"+
						" ORDER BY [codigo] ASC";
			//ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
						
				/*htm = '<html>'+ ds.getAsHTML()+'</html>'
				if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					js = plugins.file.showFileSaveDialog('Listado_Observaciones.xls', 'Selecciona localización para salvar el fichero a exportar');
					if (!js) return;
					
					// Write the file in the selected location
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
				}
				else
				{*/
					/*nom = 'Listado_Observaciones.xls';
					
					serverURL = application.getServerURL() 
					js = serverURL + "\\uploads\\" + nom
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
					*/
					tempFile = plugins.file.createTempFile('Listado_Observaciones','.xls');
					DS = databaseManager.createDataSourceByQuery('LO', globals.GCconex, query, null, -1);
					   if (DS) {
					      fs = databaseManager.getFoundSet(DS);
					      fs.loadAllRecords();
					      if (fs.getSize() > 0) {
					    	table = databaseManager.getTable(fs)
							dataProviders = table.getColumnNames()
							bytes = plugins.excelxport.excelExport(fs,dataProviders)
							
							plugins.file.writeFile(tempFile,bytes)
							plugins.file.openFile(tempFile,"_self",'application/vnd.ms-excel')
							
					      }
					   }
				//}
				
						
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"AD5F2CBD-B282-400F-9E50-F7DF7E0FA73B"}
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
	//}
	//else
	//{
	//	var respuesta = plugins.dialogs.showQuestionDialog('Salir de Gestión ERP','¿Desea terminar la Sesión?','Si','No')
	//}
	//if(respuesta =='Si')
	//{
	//	application.exit();
	//}
}
