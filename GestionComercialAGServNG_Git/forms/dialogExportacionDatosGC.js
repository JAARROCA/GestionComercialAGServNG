/**
 *
 * @properties={typeid:24,uuid:"C30B1721-F6AF-4C1A-AAB6-F4BA9944DB6F"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Exportacion Datos').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"1D63DC53-85FB-40AE-94C3-D7B23BDA9940"}
 * @SuppressWarnings(unused)
 */
function btn_ok()
{
	if(globals.GCTipoConsulta == 3 && globals.GCCriterios == 2 && gcfechalimite_usuarios.taop_018 != '1')
	{
		globals.GCshowErrorDialog("Este usuario no dispone de permisos para exportar facturas en ese formato.\n\nPóngase en contacto con AG Informática", null, null, null, null, null)
		
	}
	else
	{
		//set a global to the text of the button pressed
		switch(globals.GCTipoConsulta){
			case 0:
				ExportarClientes()
				break;
			case 1:
				ExportarProveedores()
				break;
			case 2:
				ExportarArticulos()
				break;
			case 3:
				ExportarFacturas()
				break;
			case 4:
				ExportarFacturasProforma()
				break;
			case 5:
				ExportarDelegaciones()
				break;
			case 6:
				ExportarBancos()
				break;
			case 7:
				ExportarComisionistas()
				break;
			default: break;
			
		}
		application.getWindow('Exportacion Datos').hide();
		globals.GCenableBgElements();	
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D84F7ECE-B990-428A-993B-BA9975FE717D"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5DB21855-5D51-4282-84F6-FF9BF6F40D0F"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Exportacion Datos').hide();
	globals.GCenableBgElements();
	return true
}

/**
*
* @SuppressWarnings(unused)
*
 * @properties={typeid:24,uuid:"F2FD3431-9EC3-4333-A9FC-C5B724D299BF"}
 */
function ExportarClientes()
{
	var DC = globals.GCDesdeCodigo
	if(DC == null || DC == '') DC = '1';
	var HC = globals.GCHastaCodigo
	if(HC == null || HC == '') HC = '99999999';
	// Get the dataset by quering to database
	var query = "SELECT IdCliente,isnull(replace(replace(replace(replace(replace(replace(replace(DescCliente, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as DescCliente,isnull(replace(replace(replace(replace(replace(replace(replace(Direccion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Direccion,isnull(replace(replace(replace(replace(replace(replace(replace(Poblacion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Poblacion"+
				",isnull(replace(replace(replace(replace(replace(replace(replace(Provincia, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Provincia,isnull(CodPostal,'') as CodPostal,isnull(replace(replace(replace(replace(replace(replace(replace(RazonSocial, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as RazonSocial,isnull(replace(replace(replace(replace(replace(replace(replace(PersContacto, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as PersonaContacto,isnull(EmailContacto,'') as EmailContacto"+
				",isnull(Telf1,'') as Telf1,isnull(Telf2,'') as Telf2,isnull(Fax,'') as Fax,isnull(CIF,'') as CIF,isnull(CuentaContable,'') as CuentaContable"+
				",isnull(FORMAT(TipoIva,'###,###,##0.00'),'') as IVA,isnull(DiaPago1,'') as DiaPago1,isnull(DiaPago2,'') as DiaPago2,isnull(DiaPago3,'') as DiaPago3,isnull(Pais,'') as Pais"+
				",isnull(replace(replace(replace(replace(replace(replace(replace(Observaciones, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Observaciones,isnull(CodigoBanco,'') as CodigoBanco,isnull(CodigoSucursal,'') as CodigoSucursal,isnull(Codigo1dc,'') as CodigoDC"+
				" ,isnull(CodigoCuenta,'') as CodigoCuenta,isnull(CodigoIBAN,'') as IBAN,isnull(SWIFT,'') SWIFT,isnull(CuentaContableVentas,'') as CuentaContableVentas "+
				"FROM tbMaestroClientes WHERE IdCliente BETWEEN "+DC+" AND "+HC+
				" ORDER BY IdCliente";
	var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1);
	if(globals.GCCriterios == 0)
	{	
		/*var htm = '<html>'+ ds.getAsHTML()+'</html>'
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var js = plugins.file.showFileSaveDialog('Listado_Clientes.xls', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;			
			
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			
			
		}
		else
		{*/
			/*var nom = 'Listado_Clientes.xls';
			
			var serverURL = application.getServerURL() 
			js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			*/
			var tempFile = plugins.file.createTempFile('Listado_Clientes','.xls');
			var DS = databaseManager.createDataSourceByQuery('LC', globals.GCconex, query, null, -1);
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
			
		//}
		
	}
	else 
	{
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			// Get the dataset by quering to database
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);
			js = plugins.file.showFileSaveDialog('Listado_Clientes.csv', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;
			  
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, str);
		}
		else
		{*/
			var nom = 'Listado_Clientes.csv';
			
			var serverURL = application.getServerURL() 
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);				
			var js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, str);
							
		//}
	}
}

/**
*
* @SuppressWarnings(unused)
*
 *
 * @properties={typeid:24,uuid:"DCEBD34E-6F40-4511-A135-248A6F136C49"}
 */
function ExportarProveedores()
{
	var DC = globals.GCDesdeCodigo
	if(DC == null || DC == '') DC = '1';
	var HC = globals.GCHastaCodigo
	if(HC == null || HC == '') HC = '99999999';
	// Get the dataset by quering to database
	var query = "SELECT [Codpro],isnull(replace(replace(replace(replace(replace(replace(replace(DescProveedor, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as DescProveedor,isnull(replace(replace(replace(replace(replace(replace(replace(Direccion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Direccion,isnull(replace(replace(replace(replace(replace(replace(replace(Poblacion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Poblacion"+
				",isnull(replace(replace(replace(replace(replace(replace(replace(Provincia, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Provincia,isnull([CodPostal],'') as CodPostal,isnull([Pais],'') as Pais,isnull(replace(replace(replace(replace(replace(replace(replace(PersContacto, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as PersContacto"+
				",isnull([Telf1],'') as Telf1,isnull([Telf2],'') as Telf2,isnull([Fax],'') as Fax,isnull([CIF],'') as Fax,isnull([EMail],'') as EMail,isnull([CuentaContable],'') as CuentaContable"+
				",isnull([CCGastos],'') as CCGastos,isnull(FORMAT([PorcIva],'###,###,##0.00'),'') as PorcIva,isnull(FORMAT([PorcIRPF],'###,###,##0.00'),'') as PorcIRPF"+
				",isnull(FORMAT([PorcDPP],'###,###,##0.00'),'') as PorcDPP,isnull(FORMAT([DtoPP],'###,###,##0.00'),'') as DtoPP,isnull(FORMAT([GtosFinan],'###,###,##0.00'),'') as GtosFinan "+
				"FROM [tbMaestroProveedores] WHERE [Codpro] BETWEEN "+DC+" AND "+HC+
				" ORDER BY [Codpro] ASC";
	var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	if(globals.GCCriterios == 0)
	{			
		var htm = '<html>'+ ds.getAsHTML()+'</html>'
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var js = plugins.file.showFileSaveDialog('Listado_Proveedores.xls', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;
			
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
		}
		else
		{*/
			/*var nom = 'Listado_Proveedores.xls';
			
			var serverURL = application.getServerURL() 
			js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			*/
			var tempFile = plugins.file.createTempFile('Listado_Proveedores','.xls');
			var DS = databaseManager.createDataSourceByQuery('LP', globals.GCconex, query, null, -1);
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
		//}
		
	}
	else 
	{
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			// Get the dataset by quering to database
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);
			js = plugins.file.showFileSaveDialog('Listado_Proveedores.csv', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;
			  
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, str);
		}
		else
		{*/
			var nom = 'Listado_Proveedores.csv';
			
			var serverURL = application.getServerURL() 
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);				
			var js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, str);
							
		//}
	}
}

/**
*
* @SuppressWarnings(unused)
*
 *
 *
 * @properties={typeid:24,uuid:"785C140D-0953-4E21-8F47-33B11355018F"}
 */
function ExportarArticulos()
{
	var DC = globals.GCDesdeCodigo
	if(DC == null || DC == '') DC = '1';
	var HC = globals.GCHastaCodigo
	if(HC == null || HC == '') HC = '99999999';
	// Get the dataset by quering to database
	var query = "SELECT [Codigo],isnull(replace(replace(replace(replace(replace(replace(replace(Descripcion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Descripcion,isnull([RefCliente],'') as RefCliente,isnull([DescIngles],'') as DescIngles,isnull([FechaVigor],'') as FechaVigor"+
				",isnull([Situacion],'') as Situacion,isnull([Familia],'') as Familia,isnull([UnidMedida],'') as UnidMedida,isnull(FORMAT([PesoBruto],'###,###,##0.00'),'') as PesoBruto,isnull(FORMAT([PesoNeto],'###,###,##0.00'),'') as PesoNeto"+
				",isnull(FORMAT([PrecioCosto],'###,###,##0.00'),'') as PrecioCosto,isnull([LoteEcon],'') as LoteEcon,isnull([StockMin],'') as StockMin,isnull([Observacion],'') as Observacion"+
				",isnull(FORMAT([PrecioPieza],'###,###,##0.00'),'') as PrecioPieza,isnull([Multiplo],'') as Multiplo "+
				"FROM [tbMaestroArticulos] WHERE [Codigo] BETWEEN '"+DC+"' AND '"+HC+
				"' ORDER BY [Codigo] ASC";
	var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	if(globals.GCCriterios == 0)
	{			
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
			/*var nom = 'Listado_Articulos.xls';
			
			var serverURL = application.getServerURL() 
			js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			*/
			var tempFile = plugins.file.createTempFile('Listado_Articulos','.xls');
			var DS = databaseManager.createDataSourceByQuery('LA', globals.GCconex, query, null, -1);
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
		//}
		
	}
	else 
	{
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			// Get the dataset by quering to database
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);
			js = plugins.file.showFileSaveDialog('Listado_Articulos.csv', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;
			  
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, str);
		}
		else
		{*/
			var nom = 'Listado_Articulos.csv';
			
			var serverURL = application.getServerURL() 
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);				
			var js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, str);
							
		//}
	}
}

/**
*
* @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"443DEF6D-F741-49CE-A4A6-F82B892909DD"}
 * @SuppressWarnings(deprecated)
 */
function ExportarFacturas()
{
	var desdeeje = forms.dlg_ExportacionDatosGC.DesdeEje
	if(desdeeje == null || desdeeje == '') desdeeje = 0
	var desdeser = forms.dlg_ExportacionDatosGC.DesdeSer
	if(desdeser == null || desdeser == '') desdeser = '';
	var desdenup = forms.dlg_ExportacionDatosGC.DesdeNup
	if(desdenup == null || desdenup == '') desdenup = 1
	var hastaeje = forms.dlg_ExportacionDatosGC.HastaEje
	if(hastaeje == null || hastaeje == '') hastaeje = 9999
	var hastaser = forms.dlg_ExportacionDatosGC.HastaSer
	if(hastaser == null || hastaser == '') hastaser = 'ZZ';
	var hastanup = forms.dlg_ExportacionDatosGC.HastaNup
	if(hastanup == null || hastanup == '') hastanup = 999999999
	var desdecli = globals.GCDesdeCodigo
	if(desdecli == null || desdecli == '') desdecli = 1
	var hastacli = globals.GCHastaCodigo
	if(hastacli == null || hastacli == '') hastacli = 999999999
	var desdefech = forms.dlg_ExportacionDatosGC.DesdeFecha
	if(desdefech == null || desdefech == '') desdefech = new Date(new Date().getFullYear(),0,1);
	var hastafech = forms.dlg_ExportacionDatosGC.HastaFecha
	if(hastafech == null || hastafech == '') hastafech = new Date(2999,11,31);
	
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
				" AND "+hastacli+") AND (fecha_cfa) BETWEEN '"+utils.dateFormat(desdefech,'dd-MM-yyyy')+"' AND '"+
				utils.dateFormat(hastafech,'dd-MM-yyyy')+" 23:59:59' "+
				"ORDER BY [eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC";
	var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999);
	if(globals.GCCriterios == 0)
	{			
		var htm = '<html>'+ ds.getAsHTML()+'</html>'
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var js = plugins.file.showFileSaveDialog('Listado_Facturas.xls', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;
			
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
		}
		else
		{*/
			/*var nom = 'Listado_Facturas.xls';
			
			var serverURL = application.getServerURL() 
			js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			*/
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
		//}
		
	}
	else if(globals.GCCriterios == 2)
	{
		AgruparFacturas()		
	}
	else 
	{
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			// Get the dataset by quering to database
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);
			js = plugins.file.showFileSaveDialog('Listado_Facturas.csv', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;
			  
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, str);
		}
		else
		{*/
			var nom = 'Listado_Facturas.csv';
			
			var serverURL = application.getServerURL() 
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);				
			var js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, str);
							
		//}
	}
}

/**
*
* @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"41707D73-0E4B-418B-BC43-02D6D2647FA7"}
 */
function ExportarFacturasProforma()
{
	var desdeeje = forms.dlg_ExportacionDatosGC.DesdeEje
	if(desdeeje == null || desdeeje == '') desdeeje = 0
	var desdeser = 'P'
	if(desdeser == null || desdeser == '') desdeser = '';
	var desdenup = forms.dlg_ExportacionDatosGC.DesdeNup
	if(desdenup == null || desdenup == '') desdenup = 1
	var hastaeje = forms.dlg_ExportacionDatosGC.HastaEje
	if(hastaeje == null || hastaeje == '') hastaeje = 9999
	var hastaser = 'P'
	if(hastaser == null || hastaser == '') hastaser = 'ZZ';
	var hastanup = forms.dlg_ExportacionDatosGC.HastaNup
	if(hastanup == null || hastanup == '') hastanup = 999999
	var desdecli = globals.GCDesdeCodigo
	if(desdecli == null || desdecli == '') desdecli = 1
	var hastacli = globals.GCHastaCodigo
	if(hastacli == null || hastacli == '') hastacli = 999999
	var desdefech = forms.dlg_ExportacionDatosGC.DesdeFecha
	if(desdefech == null || desdefech == '') desdefech = new Date(new Date().getFullYear(),0,1);
	var hastafech = forms.dlg_ExportacionDatosGC.HastaFecha
	if(hastafech == null || hastafech == '') hastafech = new Date(2999,11,31);
	// Get the dataset by quering to database
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
				" AND "+hastacli+") AND (fecha_cfa) BETWEEN '"+utils.dateFormat(desdefech,'dd-MM-yyyy')+"' AND '"+
				utils.dateFormat(hastafech,'dd-MM-yyyy')+" 23:59:59' "+
				"ORDER BY [eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC";
	var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	if(globals.GCCriterios == 0)
	{			
		var htm = '<html>'+ ds.getAsHTML()+'</html>'
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var js = plugins.file.showFileSaveDialog('Listado_Facturas_Proforma.xls', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;
			
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
		}
		else
		{*/
			/*var nom = 'Listado_Facturas_Proforma.xls';
			
			var serverURL = application.getServerURL() 
			js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			*/
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
		//}
		
	}
	else 
	{
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			// Get the dataset by quering to database
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);
			js = plugins.file.showFileSaveDialog('Listado_Facturas_Proforma.csv', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;
			  
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, str);
		}
		else
		{*/
			var nom = 'Listado_Facturas_Proforma.csv';
			
			var serverURL = application.getServerURL() 
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);				
			var js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, str);
							
		//}
	}
}

/**
*
* @SuppressWarnings(unused)
*
 *
 * @properties={typeid:24,uuid:"C235F708-33B5-4F1B-B7DE-070A1320C04A"}
 */
function ExportarDelegaciones()
{
	var DC = globals.GCDesdeCodigo
	if(DC == null || DC == '') DC = '1';
	var HC = globals.GCHastaCodigo
	if(HC == null || HC == '') HC = '999999999';
	// Get the dataset by quering to database
	var query = "SELECT IdCliente as IdDelegacion,isnull(replace(replace(replace(replace(replace(replace(replace(DescCliente, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as DescDelegacion,isnull(replace(replace(replace(replace(replace(replace(replace(Direccion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Direccion,isnull(replace(replace(replace(replace(replace(replace(replace(Poblacion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Poblacion"+
				",isnull(replace(replace(replace(replace(replace(replace(replace(Provincia, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Provincia,isnull(CodPostal,'') as CodPostal,isnull(replace(replace(replace(replace(replace(replace(replace(RazonSocial, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as RazonSocial,isnull(PersContacto,'') as PersonaContacto,isnull(EmailContacto,'') as EmailContacto"+
				",isnull(Telf1,'') as Telf1,isnull(Telf2,'') as Telf2,isnull(Fax,'') as Fax,isnull(CIF,'') as CIF,"+
				"isnull(Pais,'') as Pais,isnull(replace(replace(replace(replace(replace(replace(replace(Observaciones, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Observaciones "+
				"FROM tbMaestroDelegacion WHERE IdCliente BETWEEN "+DC+" AND "+HC+
				" ORDER BY IdCliente";
	var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	if(globals.GCCriterios == 0)
	{	
		var htm = '<html>'+ ds.getAsHTML()+'</html>'
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var js = plugins.file.showFileSaveDialog('Listado_Delegaciones.xls', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;			
			
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
		}
		else
		{*/
			/*var nom = 'Listado_Delegaciones.xls';
			
			var serverURL = application.getServerURL() 
			js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			*/
			var tempFile = plugins.file.createTempFile('Listado_Delegaciones','.xls');
			var DS = databaseManager.createDataSourceByQuery('LD', globals.GCconex, query, null, -1);
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
		//}
		
	}
	else 
	{
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			// Get the dataset by quering to database
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);
			js = plugins.file.showFileSaveDialog('Listado_Delegaciones.csv', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;
			  
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, str);
		}
		else
		{*/
			var nom = 'Listado_Delegaciones.csv';
			
			var serverURL = application.getServerURL() 
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);				
			var js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, str);
							
		//}
	}
}

/**
*
* @SuppressWarnings(unused)
*
*
*
 * @properties={typeid:24,uuid:"5DD402F8-E373-413F-BE31-E17D3FE6209B"}
 */
function ExportarBancos()
{
	var DC = globals.GCDesdeCodigo
	if(DC == null || DC == '') DC = '';
	var HC = globals.GCHastaCodigo
	if(HC == null || HC == '') HC = 'ZZZZZZZZ';
	// Get the dataset by quering to database
	var query = "SELECT codigoctabanco as codigoctabanco,isnull(replace(replace(replace(replace(replace(replace(replace(nombreentidad, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as nombreentidad,isnull(replace(replace(replace(replace(replace(replace(replace(Direccion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Direccion,isnull(replace(replace(replace(replace(replace(replace(replace(Poblacion, 'Á', 'A' ), 'É', 'E' ), 'Í', 'I' ), 'Ó', 'O' ), 'Ú', 'U' ), 'Ñ', 'N'), 'º', ''),'') as Poblacion"+
				",isnull(telefono,'') as Telefono,isnull(cif,'') as CIF,isnull(Email,'') as Email"+
				",isnull(ncuentaiban,'') as ncuentaiban "+
				"FROM maestrobancosctascargo WHERE codigoctabanco BETWEEN '"+DC+"' AND '"+HC+
				"' ORDER BY codigoctabanco";
	var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	if(globals.GCCriterios == 0)
	{	
		var htm = '<html>'+ ds.getAsHTML()+'</html>'
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var js = plugins.file.showFileSaveDialog('Listado_Bancos.xls', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;			
			
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
		}
		else
		{*/
			/*var nom = 'Listado_Bancos.xls';
			
			var serverURL = application.getServerURL() 
			js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			*/
			var tempFile = plugins.file.createTempFile('Listado_Bancos','.xls');
			var DS = databaseManager.createDataSourceByQuery('LB', globals.GCconex, query, null, -1);
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
		//}
		
	}
	else 
	{
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			// Get the dataset by quering to database
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);
			js = plugins.file.showFileSaveDialog('Listado_Bancos.csv', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;
			  
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, str);
		}
		else
		{*/
			var nom = 'Listado_Bancos.csv';
			
			var serverURL = application.getServerURL() 
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);				
			var js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, str);
							
		//}
	}
}

/**
*
* @SuppressWarnings(unused)
*
*
*
 * @properties={typeid:24,uuid:"394FD466-8627-4DBB-A401-90B2317FC352"}
 */
function ExportarComisionistas()
{
	var DC = globals.GCDesdeCodigo
	if(DC == null || DC == '') DC = '';
	var HC = globals.GCHastaCodigo
	if(HC == null || HC == '') HC = 'ZZZZZZZ';
	// Get the dataset by quering to database
	var query = "SELECT idagente as IdAgente,isnull(descagente,'') as DescAgente,isnull(direccion,'') as Direccion,isnull(poblacion,'') as Poblacion"+
				",isnull(provincia,'') as Provincia,isnull(codpostal,'') as CodPostal,isnull(Email,'') as Email"+
				",isnull(Telf1,'') as Telf1,isnull(Telf2,'') as Telf2,isnull(Fax,'') as Fax,isnull(CIF,'') as CIF,"+
				"isnull(FORMAT([porccomision],'###,###,##0.00'),'') as PorcComision,isnull(Observaciones,'') as Observaciones "+
				"FROM tbMaestroAgentes WHERE idagente BETWEEN '"+DC+"' AND '"+HC+
				"' ORDER BY idagente";
	var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	if(globals.GCCriterios == 0)
	{	
		var htm = '<html>'+ ds.getAsHTML()+'</html>'
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var js = plugins.file.showFileSaveDialog('Listado_Comisionistas.xls', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;			
			
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
		}
		else
		{*/
			/*var nom = 'Listado_Comisionistas.xls';
			
			var serverURL = application.getServerURL() 
			js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/vnd.ms-excel');
			*/
			var tempFile = plugins.file.createTempFile('Listado_Comisionistas','.xls');
			var DS = databaseManager.createDataSourceByQuery('LC', globals.GCconex, query, null, -1);
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
		//}
		
	}
	else 
	{
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			// Get the dataset by quering to database
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);
			js = plugins.file.showFileSaveDialog('Listado_Comisionistas.csv', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;
			  
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, str);
		}
		else
		{*/
			var nom = 'Listado_Comisionistas.csv';
			
			var serverURL = application.getServerURL() 
			var CD = forms.dlg_ExportacionDatosGC.CaracterSeparador
			var str = ds.getAsText(CD, '\n', '', true);				
			var js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, str);
							
		//}
	}
}

/**
 * Callback method when form is destroyed.
 * 
 * @param {String} CAMPO
 * 
 * @param {Number} LONGITUD
 *
 * @param {String} ALINEACION
 *
 * @return {String}
 *
*
 *
 * @properties={typeid:24,uuid:"2893570D-CE71-4C9F-A432-8ADE6FEB436C"}
 */
function PreparaLinea(CAMPO,LONGITUD,ALINEACION)
{	
	if(CAMPO == null)
	{
		CAMPO = '';
	}
	var espacios = null
	var n = LONGITUD - CAMPO.length
	for(var i=1;i<=n;i++)
	{
		espacios = espacios + ' ';
	}

	if(ALINEACION == 'Left') return CAMPO + espacios;
	else return espacios + CAMPO;
}

/**
* Callback method when form is destroyed.
* 
* @param {String} CAMPO
* 
* @param {Number} LONGITUD
*
* @param {String} ALINEACION
*
* @return {String}
*
*
*
*
 * @properties={typeid:24,uuid:"B8C93525-9F85-405E-AC59-9CFA0F9D22D6"}
 */
function PreparaLinea2(CAMPO,LONGITUD,ALINEACION)
{	
	if(CAMPO == null)
	{
		CAMPO = '';
	}
	var espacios = null
	var n = LONGITUD - CAMPO.length
	for(var i=1;i<=n;i++)
	{
		espacios = espacios + '0';
	}
	
	if(ALINEACION == 'Left') return CAMPO + espacios;
	else return espacios + CAMPO;
}

/**
* Callback method when form is destroyed.
* 
* @param {String} CAMPO
* 
* @param {Number} LONGITUD
*
* @param {String} ALINEACION
*
* @return {String}
*
*
*
*
 * @properties={typeid:24,uuid:"5A92AC48-C14B-4FEE-A4FE-DD9EED99306E"}
 */
function PreparaLinea3(CAMPO,LONGITUD,ALINEACION)
{	
	if(CAMPO == null)
	{
		CAMPO = '';
	}
	var espacios = null
	var n = LONGITUD - CAMPO.length
	for(var i=1;i<=n;i++)
	{
		espacios = espacios + '*';
	}
	
	if (ALINEACION == 'Left') return CAMPO + espacios;
	else return espacios + CAMPO;
}

/**
 * Callback method when form is destroyed.
 *
 * @param {String} TEXTO
 *
 * @param {plugins.file.JSFile} FILE
*
 *
 * @properties={typeid:24,uuid:"13AAA91F-EE26-4794-8C87-47F9F4F2CA3D"}
 */
function InsertaLinea(TEXTO,FILE)
{
	plugins.file.appendToTXTFile(FILE,TEXTO+'\n')   
}

/**
 * Callback method when form is destroyed.
 *
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"8DB19EAA-2715-43BD-AE7D-53BA2E86B914"}
 */
function AgruparFacturas() {
	//if(!globals.GCDesdeFecha) globals.GCDesdeFecha = new Date();
	//var fech = utils.dateFormat(globals.GCDesdeFecha,'dd-MM-yyyy');
	//globals.GCDesdeFecha = utils.parseDate(fech,'dd-MM-yyyy');
	
	if(forms.dlg_ExportacionDatosGC.DesdeEje != null)
	{
		var desdeejer = forms.dlg_ExportacionDatosGC.DesdeEje
	}
	else
	{
		desdeejer = 1
	}
	if(forms.dlg_ExportacionDatosGC.HastaEje != null)
	{
		var hastaejer = forms.dlg_ExportacionDatosGC.HastaEje
	}
	else
	{
		hastaejer = 9999999
	}
	
	if(forms.dlg_ExportacionDatosGC.DesdeSer != null)
	{
		var desdeser = forms.dlg_ExportacionDatosGC.DesdeSer
	}
	else
	{
		desdeser = ''
	}
	if(forms.dlg_ExportacionDatosGC.HastaSer != null)
	{
		var hastaser = forms.dlg_ExportacionDatosGC.HastaSer
	}
	else
	{
		hastaser = 'ZZZZZZ'
	}
	
	if(forms.dlg_ExportacionDatosGC.DesdeNup != null)
	{
		var desdenfact = forms.dlg_ExportacionDatosGC.DesdeNup
	}
	else
	{
		desdenfact = 1
	}
	if(forms.dlg_ExportacionDatosGC.HastaNup != null)
	{
		var hastanfact = forms.dlg_ExportacionDatosGC.HastaNup
	}
	else
	{
		hastanfact = 99999999
	}
	
	var query = "select a.ID,a.impbre_cfa,a.depp_cfa,a.piva_cfa,a.cuotaiva_cfa,a.impbie_cfa,a.clie_cfa,b.DescCliente,"+
	"a.impnee_cfa,a.eje_cfa,a.ser_cfa,a.nup_cfa,a.fecha_cfa,B.CuentaContable,B.CuentaContableVentas,a.fechcobro_cfa,"+
	"a.piva2_cfa,a.cuotaiva2_cfa,a.impbie2_cfa,a.piva3_cfa,a.cuotaiva3_cfa,a.impbie3_cfa,a.impgtosfinan,a.gtosfinan_cfa,"+
	"a.pirpf, a.impirpf,a.tipofacturasii, a.tipooperacionsii,a.sujetaexentaivasii,a.fraoriginal,a.causarect,B.pais,"+
	"a.impre,a.impre2,a.impre3 "+
	"from tbFacturaCabecera AS a LEFT JOIN tbMaestroClientes AS B ON "+
	"a.clie_cfa = b.IdCliente "+
	"where (a.eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
	") AND (a.ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
	"') AND (a.nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+") "+
	"AND (a.impnee_cfa != 0) "+
	"ORDER BY a.eje_cfa,a.ser_cfa,a.nup_cfa";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1)
	
	var rows = dataset.getMaxRowIndex();
	
	if(rows > 0)
	{
		try{
			var f = plugins.file.createTempFile('Asientos formato AG_ERP','.txt');
			
			var iva = 0;
			//var iva2 = 0;
			//var iva3 = 0;
			var ventas = 0;
			var impdto = 0;
			for(var i=1;i<=rows;i++)
			{
				//var fech = utils.dateFormat(dataset.getValue(i,13),'yyyyMMdd')
				var fech = utils.dateFormat(new Date(),'yyyyMMdd')
				//var FechaFra = utils.parseDate(fech,'dd-MM-yyyy')
				var cli = dataset.getValue(i,7);
				var cuentacli = dataset.getValue(i,14);
				if(cuentacli == null || cuentacli == '') cuentacli = '43'+utils.numberFormat(cli,'000000')
				/*query = "select DescCuentaContable FROM dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND CuentaContable = '" + cuentacli +"'";
				var dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var desccuentacli = dataset2.getValue(1,1);*/
				var cuentaventas = dataset.getValue(i,15);
				if(cuentaventas == null || cuentaventas == '') cuentaventas = '70500000';
				var Fra = "F:"+dataset.getValue(i,10)+utils.numberFormat(dataset.getValue(i,12),'00000')+dataset.getValue(i,11)+
						  " "+utils.dateFormat(dataset.getValue(i,13),'ddMMyyyy')+" "+utils.dateFormat(dataset.getValue(i,16),'ddMMyyyy');
						  //Fra = "F:"/*+dataset.getValue(i,10)*/+utils.numberFormat(dataset.getValue(i,12),'00000')
				//var Fra2 = "F:"+dataset.getValue(i,10)+utils.numberFormat(dataset.getValue(i,12),'00000')+dataset.getValue(i,11);
				var tipoiva = dataset.getValue(i,4);
				var impbr = dataset.getValue(i,2);
				if(tipoiva == null) tipoiva = 0;
				var baseiva1 = dataset.getValue(i,6)
				baseiva1 = utils.numberFormat(baseiva1,'0.00')
				baseiva1 = utils.stringReplace(baseiva1,'.','')
				baseiva1 = utils.stringReplace(baseiva1,',','')
				var cuotaiva1 = dataset.getValue(i,5)
				cuotaiva1 = utils.numberFormat(cuotaiva1,'0.00')
				cuotaiva1 = utils.stringReplace(cuotaiva1,'.','')
				cuotaiva1 = utils.stringReplace(cuotaiva1,',','')
				var baseiva2 = dataset.getValue(i,19)
				baseiva2 = utils.numberFormat(baseiva2,'0.00')
				baseiva2 = utils.stringReplace(baseiva2,'.','')
				baseiva2 = utils.stringReplace(baseiva2,',','')
				var cuotaiva2 = dataset.getValue(i,18)
				cuotaiva2 = utils.numberFormat(cuotaiva2,'0.00')
				cuotaiva2 = utils.stringReplace(cuotaiva2,'.','')
				cuotaiva2 = utils.stringReplace(cuotaiva2,',','')
				var baseiva3 = dataset.getValue(i,22)
				baseiva3 = utils.numberFormat(baseiva3,'0.00')
				baseiva3 = utils.stringReplace(baseiva3,'.','')
				baseiva3 = utils.stringReplace(baseiva3,',','')
				var cuotaiva3 = dataset.getValue(i,21)
				cuotaiva3 = utils.numberFormat(cuotaiva3,'0.00')
				cuotaiva3 = utils.stringReplace(cuotaiva3,'.','')
				cuotaiva3 = utils.stringReplace(cuotaiva3,',','')
				//MIro a ver si tiene descuento por pronto pago
				var porcdto = dataset.getValue(i,3)
				if(porcdto)
				{
					impdto += impdto = /*baseiva1*/globals.GCROUND(impbr * porcdto * 0.01,2)			
				}
				//Miro a ver si tiene gastos financieros
				//var gtosfinan = dataset.getValue(i,23)
				//var porcgtosfinan = dataset.getValue(i,24)
				
				//Miro a ver si tiene retenciones
				//var preten = dataset.getValue(i,25)
				//var impreten = dataset.getValue(i,26)
				//Miro datos del SII
				/*var tipofacturasii = dataset.getValue(i,27)
				var tipooperacionsii = dataset.getValue(i,28)
				var sujetaexentaivasii = dataset.getValue(i,29)
				var fraoriginal = dataset.getValue(i,30)
				var causarect = dataset.getValue(i,31)
				var pais = dataset.getValue(i,32)*/
				 
				// MIro la cuenta IVA 477 de la empresa contable
				var cuentaiva = '47700000';	
				//var cuentaiva = '477'+utils.numberFormat(tipoiva,'00000')	
				var tipoiva2 = dataset.getValue(i,17);
				/*if(tipoiva2 != null)
				{
					var cuentaiva2 = '477'+utils.numberFormat(tipoiva2,'00000')	
				}*/
				//var tipoiva3 = dataset.getValue(i,20);
				/*if(tipoiva3 != null)
				{
					var cuentaiva3 = '477'+utils.numberFormat(tipoiva3,'00000')	
				}*/
				
				/*var baseiva1 = dataset.getValue(i,9) / (1 +(tipoiva/100))
					baseiva1 = globals.GCROUND(baseiva1,2)
				var cuotaiva1 = dataset.getValue(i,9) - baseiva1
					cuotaiva1 = globals.GCROUND(cuotaiva1,2)
				*/
				
				//Recargo Equivalencia
				/*var impre1 = dataset.getValue(i,33);
				var impre2 = dataset.getValue(i,34);
				var impre3 = dataset.getValue(i,35);*/
				
				
				iva += dataset.getValue(i,5)
				var Importebruto = dataset.getValue(i,2)
				var Importeneto = dataset.getValue(i,9)
				Importeneto = utils.numberFormat(Importeneto,'0.00')
				ventas += Importebruto
				Importeneto = utils.stringReplace(Importeneto.toString(),'.','')
				Importeneto = utils.stringReplace(Importeneto.toString(),',','')
				
				
				
				var linea = PreparaLinea(fech, 8, 'Left');//FECHA
				linea = linea + PreparaLinea('D', 1, 'Left');//Debe o Haber
				linea = linea + PreparaLinea(cuentacli, 8, 'Left');//Cuenta Contable
				linea = linea + PreparaLinea(Fra, 50, 'Left');//Concepto
				linea = linea + PreparaLinea2(tipoiva.toString(), 2, 'Left');//TIPO IVA 1
				if(tipoiva2) linea = linea + PreparaLinea2(tipoiva2.toString(), 2, 'Left');//TIPO IVA 2
				else linea = linea + PreparaLinea2('00', 2, 'Left');//TIPO IVA 2
				linea = linea + PreparaLinea('', 1, 'Left');//CLAVE IVA
				linea = linea + PreparaLinea('', 30, 'Left');//NOMBRE CUENTA, NO NECESARIO
				linea = linea + PreparaLinea('', 1, 'Left');//MONEDA
				linea = linea + PreparaLinea2(Importeneto, 11, 'Right');//IMPORTE APUNTE
				linea = linea + PreparaLinea2(baseiva1, 11, 'Right');//BI1
				linea = linea + PreparaLinea2(cuotaiva1, 11, 'Right');//Cuota1
				linea = linea + PreparaLinea2(baseiva2, 11, 'Right');//BI2
				linea = linea + PreparaLinea('', 2, 'Left');//CONCEPTO CLAVE
				linea = linea + PreparaLinea2(cuotaiva2, 9, 'Right');//Cuota2
				InsertaLinea(linea,f)
				
							
			}
			query = "select MIN(a.eje_cfa),MIN(a.ser_cfa),MIN(a.nup_cfa),MAX(a.eje_cfa),MAX(a.ser_cfa),MAX(a.nup_cfa) "+
			"from tbFacturaCabecera AS a "+
			"where (a.eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
			") AND (a.ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
			"') AND (a.nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+")";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var concepto = 'FACTURACION '+dataset.getValue(1,1)+
			utils.numberFormat(dataset.getValue(1,3),'00000')+/*dataset.getValue(1,2)+*/' '+
			dataset.getValue(1,4)+utils.numberFormat(dataset.getValue(1,6),'00000')/*+
			dataset.getValue(1,5)*/
			
			//Miro a ver si tiene dto por pronto pago
			if(impdto != 0)
			{
				impdto = utils.numberFormat(impdto,'0.00')
				impdto = utils.stringReplace(impdto.toString(),'.','')
				impdto = utils.stringReplace(impdto.toString(),',','')
				
				var cuentadtopp = '70600000'
			
				linea = PreparaLinea(fech, 8, 'Left');//FECHA
				linea = linea + PreparaLinea('D', 1, 'Left');//Debe o Haber
				linea = linea + PreparaLinea(cuentadtopp, 8, 'Left');//Cuenta Contable
				linea = linea + PreparaLinea(concepto, 50, 'Left');//Concepto
				linea = linea + PreparaLinea2('', 2, 'Left');//TIPO IVA 1
				linea = linea + PreparaLinea2('', 2, 'Left');//TIPO IVA 2
				linea = linea + PreparaLinea('', 1, 'Left');//CLAVE IVA
				linea = linea + PreparaLinea('', 30, 'Left');//NOMBRE CUENTA, NO NECESARIO
				linea = linea + PreparaLinea('', 1, 'Left');//MONEDA
				linea = linea + PreparaLinea2(impdto.toString(), 11, 'Right');//IMPORTE APUNTE
				linea = linea + PreparaLinea2('', 11, 'Right');//BI1
				linea = linea + PreparaLinea2('', 11, 'Right');//Cuota1
				linea = linea + PreparaLinea2('', 11, 'Right');//BI2
				linea = linea + PreparaLinea('', 2, 'Left');//CONCEPTO CLAVE
				linea = linea + PreparaLinea2('', 9, 'Right');//Cuota2
				InsertaLinea(linea,f)
			
				
			}
			
			//Miro a ver si tiene recargo financiero
			query = "select ISNULL(SUM(impgtosfinan),0) "+
				"from tbFacturaCabecera "+ 
				"where (eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
				") AND (ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
				"') AND (nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+") ";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var gtosfinan = dataset.getValue(1,1)
			if(gtosfinan != 0) 
			{
				gtosfinan = utils.numberFormat(gtosfinan,'0.00')
				gtosfinan = utils.stringReplace(gtosfinan.toString(),'.','')
				gtosfinan = utils.stringReplace(gtosfinan.toString(),',','')
				
				var cuentagtosfinan = '75900000'
					
				linea = PreparaLinea(fech, 8, 'Left');//FECHA
				linea = linea + PreparaLinea('D', 1, 'Left');//Debe o Haber
				linea = linea + PreparaLinea(cuentagtosfinan, 8, 'Left');//Cuenta Contable
				linea = linea + PreparaLinea(concepto, 50, 'Left');//Concepto
				linea = linea + PreparaLinea2('', 2, 'Left');//TIPO IVA 1
				linea = linea + PreparaLinea2('', 2, 'Left');//TIPO IVA 2
				linea = linea + PreparaLinea('', 1, 'Left');//CLAVE IVA
				linea = linea + PreparaLinea('', 30, 'Left');//NOMBRE CUENTA, NO NECESARIO
				linea = linea + PreparaLinea('', 1, 'Left');//MONEDA
				linea = linea + PreparaLinea2(gtosfinan.toString(), 11, 'Right');//IMPORTE APUNTE
				linea = linea + PreparaLinea2('', 11, 'Right');//BI1
				linea = linea + PreparaLinea2('', 11, 'Right');//Cuota1
				linea = linea + PreparaLinea2('', 11, 'Right');//BI2
				linea = linea + PreparaLinea('', 2, 'Left');//CONCEPTO CLAVE
				linea = linea + PreparaLinea2('', 9, 'Right');//Cuota2
				InsertaLinea(linea,f)				
			}
			
				
			query = "select ISNULL(SUM(cuotaiva_cfa),0), piva_cfa,ISNULL(SUM(cuotaiva2_cfa),0), piva2_cfa,"+
					"ISNULL(SUM(cuotaiva3_cfa),0), piva3_cfa "+
						"from tbFacturaCabecera "+ 
						"where (eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
						") AND (ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
						"') AND (nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+") "+
						"group by piva_cfa,piva2_cfa,piva3_cfa";
						
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				iva = dataset.getValue(i,1)
				var piva = dataset.getValue(i,2)
				if(piva == null) piva = 0;
				//cuentaiva = '477'+utils.numberFormat(piva,'00000')				
				
				
				if(iva != 0)
				{
					iva = utils.numberFormat(iva,'0.00')
					iva = utils.stringReplace(iva.toString(),'.','')
					iva = utils.stringReplace(iva.toString(),',','')
					
					linea = PreparaLinea(fech, 8, 'Left');//FECHA
					linea = linea + PreparaLinea('H', 1, 'Left');//Debe o Haber
					linea = linea + PreparaLinea(cuentaiva, 8, 'Left');//Cuenta Contable
					linea = linea + PreparaLinea(concepto, 50, 'Left');//Concepto
					linea = linea + PreparaLinea2('', 2, 'Left');//TIPO IVA 1
					linea = linea + PreparaLinea2('', 2, 'Left');//TIPO IVA 2
					linea = linea + PreparaLinea('', 1, 'Left');//CLAVE IVA
					linea = linea + PreparaLinea('', 30, 'Left');//NOMBRE CUENTA, NO NECESARIO
					linea = linea + PreparaLinea('', 1, 'Left');//MONEDA
					linea = linea + PreparaLinea2(iva.toString(), 11, 'Right');//IMPORTE APUNTE
					linea = linea + PreparaLinea2('', 11, 'Right');//BI1
					linea = linea + PreparaLinea2('', 11, 'Right');//Cuota1
					linea = linea + PreparaLinea2('', 11, 'Right');//BI2
					linea = linea + PreparaLinea('', 2, 'Left');//CONCEPTO CLAVE
					linea = linea + PreparaLinea2('', 9, 'Right');//Cuota2
					InsertaLinea(linea,f)				
				}
				
			}
			query = "SELECT b.CuentaContableVentas,isnull(sum(a.impbre_cfa),0) AS TotalBaseImp "+/*isnull(sum(a.impbie_cfa),0)+isnull(sum(a.impbie2_cfa),0)+isnull(sum(a.impbie3_cfa),0)*/
					"from tbFacturaCabecera as a left join tbMaestroClientes as b on "+ 
					"a.clie_cfa = b.IDCliente "+
					"where (eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
					") AND (ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
					"') AND (nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+") "+
					"group by b.CuentaContableVentas";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				cuentaventas = dataset.getValue(i,1)
				if(cuentaventas == null) cuentaventas = '70500000';
				ventas = dataset.getValue(i,2)
				if(ventas < 0) cuentaventas = '70800000';
				ventas = utils.numberFormat(ventas,'0.00')
				ventas = utils.stringReplace(ventas.toString(),'.','')
				ventas = utils.stringReplace(ventas.toString(),',','')
				
				linea = PreparaLinea(fech, 8, 'Left');//FECHA
				linea = linea + PreparaLinea('H', 1, 'Left');//Debe o Haber
				linea = linea + PreparaLinea(cuentaventas, 8, 'Left');//Cuenta Contable
				linea = linea + PreparaLinea(concepto, 50, 'Left');//Concepto
				linea = linea + PreparaLinea2('', 2, 'Left');//TIPO IVA 1
				linea = linea + PreparaLinea2('', 2, 'Left');//TIPO IVA 2
				linea = linea + PreparaLinea('', 1, 'Left');//CLAVE IVA
				linea = linea + PreparaLinea('', 30, 'Left');//NOMBRE CUENTA, NO NECESARIO
				linea = linea + PreparaLinea('', 1, 'Left');//MONEDA
				linea = linea + PreparaLinea2(ventas.toString(), 11, 'Right');//IMPORTE APUNTE
				linea = linea + PreparaLinea2('', 11, 'Right');//BI1
				linea = linea + PreparaLinea2('', 11, 'Right');//Cuota1
				linea = linea + PreparaLinea2('', 11, 'Right');//BI2
				linea = linea + PreparaLinea('', 2, 'Left');//CONCEPTO CLAVE
				linea = linea + PreparaLinea2('', 9, 'Right');//Cuota2
				InsertaLinea(linea,f)
				
			}
			/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{
				// Get the dataset by quering to database
				var js = plugins.file.showFileSaveDialog('AUXCONTA.dat', 'Selecciona localización para salvar el fichero a exportar');
				if (!js) return;
				  
				// Write the file in the selected location
				//plugins.file.writeTXTFile(js, fcopy);
				plugins.file.copyFile(f, js)
			}
			else
			{*/
				//var fcopy = plugins.file.createFile("AUXCONTA.dat");
				//var fcopy = plugins.file.createTempFile('AUXCONTA','.dat');
				//var nom = 'AUXCONTA.dat';
				
				//var serverURL = application.getServerURL() 
				//js = serverURL + "\\uploads\\" + nom
				
				//plugins.file.writeTXTFile(js, f);
				
				//plugins.file.copyFile(f, fcopy)
				//plugins.file.openFile(fcopy,"_blank",'application/text')
				plugins.file.openFile("AUXCONTA.dat",f.getBytes(),'application/txt')
			//}
			
				

		}
		catch(e){
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(e.toString(),'¡Error!')
			else globals.GCshowErrorDialog(e.toString(), null, null, null, null, null)
		}
	}
	
}
