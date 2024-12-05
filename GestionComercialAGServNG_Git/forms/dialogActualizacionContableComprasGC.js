/**
 * @properties={typeid:24,uuid:"7C05F51C-BA11-437E-9E2D-FB2815B4E342"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Actualizacion Contable').hide();
	globals.GCenableBgElements();
}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F5C63BED-E2D0-49F2-B699-67E24FC2986A",variableType:8}
 */
var cont = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EF0BB9F6-D08D-4ABA-A4BE-C2C86ADF4DE9"}
 */
var con = '';

/**
 * @properties={typeid:24,uuid:"E4F23783-5421-496F-8862-08588293A6D4"}
 * @SuppressWarnings(unused)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	try
	{
		cont = 0;
		desdeasiento = 0;
		hastaasiento = 0;
		if(forms.dlg_ActualizacionContableComprasGC.DesdeProveedor != null)
		{
			var desdeprov = forms.dlg_ActualizacionContableComprasGC.DesdeProveedor
		}
		else
		{
			desdeprov = 1
		}
		if(forms.dlg_ActualizacionContableComprasGC.HastaProveedor != null)
		{
			var hastaprov = forms.dlg_ActualizacionContableComprasGC.HastaProveedor
		}
		else
		{
			hastaprov = 999999999
		}
		
		if(forms.dlg_ActualizacionContableComprasGC.DesdeFactura != null)
		{
			var desdefactura = forms.dlg_ActualizacionContableComprasGC.DesdeFactura
		}
		else
		{
			desdefactura = '0'
		}
		if(forms.dlg_ActualizacionContableComprasGC.HastaFactura != null)
		{
			var hastafactura = forms.dlg_ActualizacionContableComprasGC.HastaFactura
		}
		else
		{
			hastafactura = 'Z'
		}
		
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		con = dataset.getValue(1,2);
		if(Empresa == null || Empresa == '')
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No está definida la Empresa Contable en los Parametros','¡Error!')
			else globals.GCshowErrorDialog('No está definida la Empresa Contable en los Parametros',null,'Aceptar',null,null,null)
		}
		else if(con == null || con == '')
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No está definida la conexión a la contabilidad en los Parametros','¡Error!')
			else globals.GCshowErrorDialog('No está definida la conexión a la contabilidad en los Parametros',null,'Aceptar',null,null,null)
		}
		else
		{
			query = "select IdEjercicio,AgnoEjercicio,estadoejercicio from cMaestroFicheroEmpresa where IdEjercicio = '"+Empresa+"'"
			dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
			Empresa = dataset.getValue(1,1)
			var Estado = dataset.getValue(1,3)
			if(Empresa == null)
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('La Empresa Contable no existe','¡Error!')
				else globals.GCshowErrorDialog('La Empresa Contable no existe',null,'Aceptar',null,null,null)
			}
			else if(Estado == 1)
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El Ejercio Contable esta cerrado.','¡Error!')
				else globals.GCshowErrorDialog('El Ejercio Contable esta cerrado.',null,'Aceptar',null,null,null)
			}			
			else
			{
				var Agno = dataset.getValue(1,2)
				query = "select distinct year(fecha_cfca) from tbFacturaCompraCabecera "+
						"where (pro_cfca BETWEEN " + desdeprov + " AND "+ hastaprov+
					") AND (nup_cfca BETWEEN '" + desdefactura+"' AND '"+hastafactura+
						"') order by year(fecha_cfca) asc"
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				application.output(dataset.getValue(1,1))
				if(dataset.getValue(1,1) != Agno)
				{
					if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El año de alguna Factura no coincide con el año del ejercicio contable.','¡Error!')
					else globals.GCshowErrorDialog('El año de alguna Factura no coincide con el año del ejercicio contable.',null,'Aceptar',null,null,null)
				}
				else if((globals.GCDesdeFecha.getFullYear() != Agno && forms.dlg_ActualizacionContableComprasGC.AgruparFacturasContabilizar != 0))
				{
					if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('La fecha del asiento a generar no coincide con el año del ejercicio contable.','¡Error!')
					else globals.GCshowErrorDialog('La fecha del asiento a generar no coincide con el año del ejercicio contable.',null,'Aceptar',null,null,null)
				}
				else
				{
					if(forms.dlg_ActualizacionContableComprasGC.AgruparFacturasContabilizar == 1)
					{
						AgruparFacturas(Empresa)
					}
					else
					{
						AgruparFacturas(Empresa)
						//NoAgruparFacturas(Empresa)
					}
					if(cont > 0) 
					{
						forms.dlg_ActualizacionCarteraPagosGC.DesdeProveedor = desdeprov;
						forms.dlg_ActualizacionCarteraPagosGC.HastaProveedor = hastaprov;
						forms.dlg_ActualizacionCarteraPagosGC.DesdeFactura = desdefactura;
						forms.dlg_ActualizacionCarteraPagosGC.HastaFactura = hastafactura;
						application.getWindow('Actualizacion Contable').hide();
						globals.GCenableBgElements();
						
						globals.GCshowDialogActualizacionCarteraPagos('Actualizar Cartera de Pagos', null, null, null, null, null, null, null, null, null);
						
					}
					else
					{
						globals.GCshowInfoDialog('Ninguna Factura contabilizada.',null,'Aceptar',null,null,null)
					}
						if(desdeasiento > 0)
						{
							globals.conexCONTA = con;
							globals.Empresa = Empresa;
							globals.DesdeAsiento = desdeasiento
							globals.HastaAsiento = hastaasiento
							globals.GCCriterios = 1
							globals.PendActualizar = 0
							globals.DetallarIva = 1
							globals.btn_runJasperReportDiarioAsientos()
						}
				}
			}
		}
	
	}
	catch(e)
	{
		application.output(e)
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(e.toString(),'¡Error!')
		else globals.GCshowErrorDialog(e.toString(),null,'Aceptar',null,null,null)
	}	
		
	
		
		
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"35413A2D-4C04-4E1F-82B7-CB2762B486DF"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
}

/**
 * Callback method when form is destroyed.
 *
 * @param {String} E
 *
 * @properties={typeid:24,uuid:"5E2F2B3C-F0B9-4300-BE56-6B2C8C19E33F"}
 * @SuppressWarnings(deprecated)
 */
function AgruparFacturas(E) {
	if(globals.GCDesdeFecha == null) globals.GCDesdeFecha = new Date();
	var fech = utils.dateFormat(globals.GCDesdeFecha,'dd-MM-yyyy');
	globals.GCDesdeFecha = utils.parseDate(fech,'dd-MM-yyyy');
	
	if(forms.dlg_ActualizacionContableComprasGC.DesdeProveedor != null)
	{
		var desdeprov = forms.dlg_ActualizacionContableComprasGC.DesdeProveedor
	}
	else
	{
		desdeprov = 1
	}
	if(forms.dlg_ActualizacionContableComprasGC.HastaProveedor != null)
	{
		var hastaprov = forms.dlg_ActualizacionContableComprasGC.HastaProveedor
	}
	else
	{
		hastaprov = 9999999999
	}
	
	if(forms.dlg_ActualizacionContableComprasGC.DesdeFactura != null)
	{
		var desdefactura = forms.dlg_ActualizacionContableComprasGC.DesdeFactura
	}
	else
	{
		desdefactura = '0'
	}
	if(forms.dlg_ActualizacionContableComprasGC.HastaFactura != null)
	{
		var hastafactura = forms.dlg_ActualizacionContableComprasGC.HastaFactura
	}
	else
	{
		hastafactura = 'ZZZZZZZZZZZZ'
	}
	
	var query = "SELECT a.pro_cfca,a.nup_cfca,a.fecha_cfca,b.CuentaContable,b.CCGastos,a.fechpago_cfca"+
	",a.fechconta_cfca,a.cfpa_cfca,a.obse_cfca,a.situconta,a.situ"+
	",a.impbre_cfca,a.preten_cfca,a.reten_cfca,a.ccreten_cfca"+
	",a.impbie1_cfca,a.piva1_cfca,a.cuotaiva1_cfca,a.impbie2_cfca"+
	",a.piva2_cfca,a.cuotaiva2_cfca,a.impbie3_cfca,a.piva3_cfca"+
	",a.cuotaiva3_cfca,a.impnee_cfca,a.nasiento_cfca,a.idtipofactura_cfca,a.docupdf,a.filename"+
	",a.portes,a.ccportes,a.tipofacturasii, a.tipooperacionsii,B.pais"+
	",a.impbie4_cfca,a.piva4_cfca,a.cuotaiva4_cfca,a.impbie5_cfca,a.piva5_cfca,a.cuotaiva5_cfca "+
	"FROM [dbo].[tbFacturaCompraCabecera] AS a LEFT JOIN tbMaestroProveedores AS B ON a.pro_cfca = b.Codpro "+
	"where (a.pro_cfca between "+desdeprov+" and "+hastaprov+
	") and (a.nup_cfca between '"+desdefactura+"' and '"+hastafactura+"') "+
	"AND (a.situconta IS NULL OR a.situconta = '') " +
	"AND (a.impnee_cfca != 0) "+
	"ORDER BY a.pro_cfca,a.nup_cfca,a.fecha_cfca";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
	
	var rows = dataset.getMaxRowIndex();
	
	if(rows > 0)
	{
		var ok = null;
		for(var i=1;i<=rows;i++)
		{
			var pro = dataset.getValue(i,1);
			var nup = dataset.getValue(i,2);
			var cuentaprov = dataset.getValue(i,4);
			var cuentagastos = dataset.getValue(i,5);
			var preten = dataset.getValue(i,13);
			var reten = dataset.getValue(i,14);
			var ccreten = dataset.getValue(i,15);
			var port = dataset.getValue(i,30);
			var ccport = dataset.getValue(i,31);
			//Miro datos del SII
			var tipofacturasii = dataset.getValue(i,32);
			var tipooperacionsii = dataset.getValue(i,33);
			
			
			query = "select descproveedor from tbmaestroproveedores where codpro ="+pro;
			var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var descprov = dataset2.getValue(1,1);
			
			if(!cuentaprov || !cuentagastos)
			{
				ok = 1;
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error("Falta la Cuenta Contable o la Cuenta de Gastos de la factura '"+nup+"' del Proveedor "+pro+" - "+descprov,'¡Error!')
				else globals.GCshowErrorDialog("Falta la Cuenta Contable o la Cuenta de Gastos de la factura '"+nup+"' del Proveedor "+pro+" - "+descprov,null,'Aceptar',null,null,null)
				return
			}
			else if(reten && !ccreten)
			{
				ok = 1;
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error("Falta la Cuenta de Retención de la factura '"+nup+"' del Proveedor "+pro+" - "+descprov,'¡Error!')
				else globals.GCshowErrorDialog("Falta la Cuenta de Retención de la factura '"+nup+"' del Proveedor "+pro+" - "+descprov,null,'Aceptar',null,null,null)
				return
			}
			else if(port && !ccport)
			{
				ok = 1;
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error("Falta la Cuenta de Portes de la factura '"+nup+"' del Proveedor "+pro+" - "+descprov,'¡Error!')
				else globals.GCshowErrorDialog("Falta la Cuenta de Portes de la factura '"+nup+"' del Proveedor "+pro+" - "+descprov,null,'Aceptar',null,null,null)
				return
			}
		}
		
		if(!ok)
		{
			var iva = 0;
			var compras = 0;
			for(i=1;i<=rows;i++)
			{
				pro = dataset.getValue(i,1);
				nup = dataset.getValue(i,2);
				cuentaprov = dataset.getValue(i,4);
				cuentagastos = dataset.getValue(i,5);
				reten = dataset.getValue(i,14);
				ccreten = dataset.getValue(i,15);
				port = dataset.getValue(i,30);
				ccport = dataset.getValue(i,31);
				
				
				if(cuentaprov && cuentagastos)
				{
					if(!reten || (reten && ccreten))
					{
						if(!port || (port && ccport))
						{			
							CabeceraAsiento(E)
							
							fech = utils.dateFormat( dataset.getValue(i,3),'dd-MM-yyyy')
							var FechaFra = utils.parseDate(fech,'dd-MM-yyyy')
							//var cuentaprov = dataset.getValue(i,4);
							//if(!cuentaprov) cuentaprov = '40'+utils.numberFormat(pro,'000000')
							query = "select DescCuentaContable "+
							"FROM dbo.ctbCuentaContable "+
							"WHERE IdEjercicio = '" + E + "' AND "+
							"CuentaContable = '" + cuentaprov +"'";
							dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
							var desccuentaprov = dataset2.getValue(1,1);
							//var cuentagastos = dataset.getValue(i,5);
							//if(!cuentagastos) cuentagastos = '60000000';
							var Fra = "F:"+dataset.getValue(i,2);
							if(dataset.getValue(i,9)) Fra = Fra + " " + dataset.getValue(i,9); 
							var tipoiva = dataset.getValue(i,17);
							if(tipoiva == null) tipoiva = 0;
							query = "select CuentaContable from ctbCuentaContable "+
							"where IdEjercicio = '"+E+"' and CuentaContable like '472%' "+
				"					and (ClaveDesglose is null or ClaveDesglose = 0)"	
							dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
							var cuentaiva = dataset2.getValue(1,1)
							if(!cuentaiva) cuentaiva = '47200000';
							
							var baseiva1 = dataset.getValue(i,16) 
							var cuotaiva1 = dataset.getValue(i,18) 
							var baseiva2 = dataset.getValue(i,19) 
							var tipoiva2 = dataset.getValue(i,20);
							var cuotaiva2 = dataset.getValue(i,21) 
							var baseiva3 = dataset.getValue(i,22) 
							var tipoiva3 = dataset.getValue(i,23);
							var cuotaiva3 = dataset.getValue(i,24) 
							var baseiva4 = dataset.getValue(i,35) 
							var tipoiva4 = dataset.getValue(i,36);
							var cuotaiva4 = dataset.getValue(i,37) 
							var baseiva5 = dataset.getValue(i,38) 
							var tipoiva5 = dataset.getValue(i,39);
							var cuotaiva5 = dataset.getValue(i,40) 
								
							iva += globals.GCROUND(cuotaiva1 + cuotaiva2 + cuotaiva3 + cuotaiva4 + cuotaiva5,2)
							var Importebruto = dataset.getValue(i,12)
							compras += Importebruto
							
							NuevoAsientolinea(E)
							
							rawData = dataset.getValue(i,28);
							pdfname = dataset.getValue(i,29);
							
							
							
							var vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
							  
							//load record by ID in foundset  
							//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
							var record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
							record.idejercicio = E;
							record.idasiento = idasiento;
							record.idasientolinea = idasientolinea;
							record.fechaasiento = globals.GCDesdeFecha;
							record.cuentacontable = cuentaprov;
							record.desccuentacontable = desccuentaprov;
							record.importedebe = null;
							record.importehaber = dataset.getValue(i,25);
							record.concepto = Fra;
							record.idtipofactura = dataset.getValue(i,27);
							record.situacion = '...';
							record.situacioncobro = '...';
							record.idusuario = globals.GClogin_usuario;
							record.porciva1 = tipoiva;
							record.baseiva1 = baseiva1;
							record.cuotaiva1 = cuotaiva1;
							record.pirpf = preten;
							record.impirpf = reten;
							
							if(tipoiva2 != null)
							{
								record.porciva2 = tipoiva2;
								record.baseiva2 = baseiva2;
								record.cuotaiva2 = cuotaiva2;
							}
							if(tipoiva3 != null)
							{
								record.porciva3 = tipoiva3;
								record.baseiva3 = baseiva3;
								record.cuotaiva3 = cuotaiva3;
							}
							if(tipoiva4 != null)
							{
								record.porciva4 = tipoiva4;
								record.baseiva4 = baseiva4;
								record.cuotaiva4 = cuotaiva4;
							}
							if(tipoiva5 != null)
							{
								record.porciva5 = tipoiva5;
								record.baseiva5 = baseiva5;
								record.cuotaiva5 = cuotaiva5;
							}
							record.fechadocumento = FechaFra;
							record.numfactura = Fra;
							record.cuentaiva = cuentaiva;
							record.cuentacontrapartida = cuentagastos;
							record.docupdf = rawData;
							record.filename = pdfname;
							record.tipofacturasii = tipofacturasii;
							record.tipooperacionsii = tipooperacionsii;
							record.claveoperacionsii = '01';
							cont = 1;
							
							databaseManager.saveData(record);
							
							//Cuota Iva
							var concepto = 'FACTURAS COMPRAS '+ Fra;
							
							query = "select ISNULL(SUM(cuotaiva1_cfca),0), piva1_cfca,ISNULL(SUM(cuotaiva2_cfca),0), piva2_cfca,"+
							"ISNULL(SUM(cuotaiva3_cfca),0), piva3_cfca "+
								"from tbFacturaCompraCabecera as a "+ 
								"where (a.pro_cfca = "+pro+
								") and (a.nup_cfca = '"+nup+"') "+
								"AND (a.situconta IS NULL OR a.situconta = '') " +
								"group by piva1_cfca,piva2_cfca,piva3_cfca";
								
							dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
							rows = dataset.getMaxRowIndex();
							for(i=1;i<=rows;i++)
							{
								iva = dataset.getValue(i,1)
								var piva = dataset.getValue(i,2)
								if(piva == null) piva = 0;
								//cuentaiva = '477'+utils.numberFormat(piva,'00000')				
								NuevoAsientolinea(E)
								query = "select DescCuentaContable "+
								"FROM dbo.ctbCuentaContable "+
								"WHERE IdEjercicio = '" + E + "' AND "+
								"CuentaContable = '" + cuentaiva +"'";
								dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
								var desccuentaiva = dataset2.getValue(1,1);
								if(iva != 0)
								{				
									vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
									  
									//load record by ID in foundset  
									//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
									record = vSet.getRecord(vSet.newRecord());
									record.id = application.getUUID()
									record.idejercicio = E;
									record.idasiento = idasiento;
									record.idasientolinea = idasientolinea;
									record.fechaasiento = globals.GCDesdeFecha;
									record.cuentacontable = cuentaiva;
									record.desccuentacontable = desccuentaiva;
									record.importedebe = iva;
									record.importehaber = null;
									record.concepto = concepto;
									record.situacion = '...';
									record.situacioncobro = '...';
									record.idusuario = globals.GClogin_usuario;
									cont = 1;
									
									databaseManager.saveData(record);
								}
								
							}
							
							//BaseIva
							query = "SELECT b.CCGastos,isnull(sum(a.impbie1_cfca),0)+isnull(sum(a.impbie2_cfca),0)+"+
									"isnull(sum(a.impbie3_cfca),0)+isnull(sum(a.impbie4_cfca),0)+isnull(sum(a.impbie5_cfca),0) AS TotalBaseImp "+
									"from tbFacturaCompraCabecera as a left join tbMaestroProveedores as b on "+ 
									"a.pro_cfca = b.Codpro "+
									"where (a.pro_cfca = "+pro+
									") and (a.nup_cfca = '"+nup+"') "+
									"AND (a.situconta IS NULL OR a.situconta = '') " +
									"group by b.CuentaContable,b.CCGastos";
							dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
							rows = dataset.getMaxRowIndex();
							for(i=1;i<=rows;i++)
							{
								cuentagastos = dataset.getValue(i,1)
								if(cuentagastos == null) cuentagastos = '60000000';
								compras = dataset.getValue(i,2)
								query = "select DescCuentaContable "+
								"FROM dbo.ctbCuentaContable "+
								"WHERE IdEjercicio = '" + E + "' AND "+
								"CuentaContable = '" + cuentagastos +"'";
								dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
								var desccuentacompras = dataset2.getValue(1,1);
								NuevoAsientolinea(E)
								vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
								  
								//load record by ID in foundset  
								//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
								record = vSet.getRecord(vSet.newRecord());
								record.id = application.getUUID()
								record.idejercicio = E;
								record.idasiento = idasiento;
								record.idasientolinea = idasientolinea;
								record.fechaasiento = globals.GCDesdeFecha;
								record.cuentacontable = cuentagastos;
								record.desccuentacontable = desccuentacompras;
								record.importedebe = compras;
								record.importehaber = null;
								record.concepto = concepto;
								record.situacion = '...';
								record.situacioncobro = '...';
								record.idusuario = globals.GClogin_usuario;
								cont = 1;
								
								databaseManager.saveData(record);
							}
							
							//Retencion
							concepto = 'RETENCIÓN '+ Fra;
							
							query = "select ISNULL(SUM(reten_cfca),0), ccreten_cfca "+
								"from tbFacturaCompraCabecera as a "+ 
								"where (a.pro_cfca = "+pro+
								") and (a.nup_cfca = '"+nup+"') "+
								"AND (a.situconta IS NULL OR a.situconta = '') " +
								"group by ccreten_cfca";
								
							dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
							rows = dataset.getMaxRowIndex();
							for(i=1;i<=rows;i++)
							{
								var retencion = dataset.getValue(i,1)
								var ccretencion = dataset.getValue(i,2)
								
								if(ccretencion && retencion)
								{
									NuevoAsientolinea(E)
									query = "select DescCuentaContable "+
									"FROM dbo.ctbCuentaContable "+
									"WHERE IdEjercicio = '" + E + "' AND "+
									"CuentaContable = '" + ccretencion +"'";
									dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
									var descccretencion = dataset2.getValue(1,1);
									if(retencion != 0)
									{				
										vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
										  
										//load record by ID in foundset  
										//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
										record = vSet.getRecord(vSet.newRecord());
										record.id = application.getUUID()
										record.idejercicio = E;
										record.idasiento = idasiento;
										record.idasientolinea = idasientolinea;
										record.fechaasiento = globals.GCDesdeFecha;
										record.cuentacontable = ccretencion;
										record.desccuentacontable = descccretencion;
										record.importedebe = null;
										record.importehaber = retencion;
										record.concepto = concepto;
										record.situacion = '...';
										record.situacioncobro = '...';
										record.idusuario = globals.GClogin_usuario;
										cont = 1;
										
										databaseManager.saveData(record);
									}
								}
								
								
								
							}
							
							//Portes
							concepto = 'PORTES/SUPLIDOS '+ Fra;
							
							query = "select ISNULL(SUM(portes),0), ccportes "+
								"from tbFacturaCompraCabecera as a "+ 
								"where (a.pro_cfca = "+pro+
								") and (a.nup_cfca = '"+nup+"') "+
								"AND (a.situconta IS NULL OR a.situconta = '') " +
								"group by ccportes";
								
							dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
							rows = dataset.getMaxRowIndex();
							for(i=1;i<=rows;i++)
							{
								var portes = dataset.getValue(i,1)
								var ccportes = dataset.getValue(i,2)
								
								if(ccportes && portes)
								{
									NuevoAsientolinea(E)
									query = "select DescCuentaContable "+
									"FROM dbo.ctbCuentaContable "+
									"WHERE IdEjercicio = '" + E + "' AND "+
									"CuentaContable = '" + ccportes +"'";
									dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
									var descportes = dataset2.getValue(1,1);
									if(portes != 0)
									{				
										vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
										  
										//load record by ID in foundset  
										//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
										record = vSet.getRecord(vSet.newRecord());
										record.id = application.getUUID()
										record.idejercicio = E;
										record.idasiento = idasiento;
										record.idasientolinea = idasientolinea;
										record.fechaasiento = globals.GCDesdeFecha;
										record.cuentacontable = ccportes;
										record.desccuentacontable = descportes;
										record.importedebe = portes;
										record.importehaber = null;
										record.concepto = concepto;
										record.situacion = '...';
										record.situacioncobro = '...';
										record.idusuario = globals.GClogin_usuario;
										cont = 1;
										
										databaseManager.saveData(record);
									}
								}								
							}
							
							//Genero Pagos en Contabilidad
							query = "SELECT A.pro_efc,A.nup_efc,A.fecha_efc,A.cfpa_efc,A.porc_efc,A.impo_efc,"+
										"C.CuentaContable,B.impnee_cfca,B.fecha_cfca,B.pro_cfca,B.fechpago_cfca "+
										"from efectoscompras AS A INNER JOIN "+
										"tbFacturaCompraCabecera AS B ON A.pro_efc = B.pro_cfca AND "+
										" A.nup_efc = B.nup_cfca LEFT JOIN "+
										"tbMaestroProveedores C ON B.pro_cfca = C.CodPro "+
										"where (A.pro_efc = " + pro + 
										") AND (A.nup_efc = '" + nup +
										"') ORDER BY A.pro_efc,A.nup_efc,A.nli_efc";
										//") AND (B.situconta IS NULL OR B.situconta = '') ORDER BY A.eje_ef,A.ser_ef,A.nup_ef,A.nli_ef";
							dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
							
							rows = dataset.getMaxRowIndex();
							
							for(i=1;i<=rows;i++)
							{
								var FV = dataset.getValue(i,3);
								var CC = dataset.getValue(i,7);
								if(!CC) CC = '400'+utils.numberFormat(pro,'00000');
								var FP = dataset.getValue(i,4);
								var fra = nup;
								var IMPEFECTO = dataset.getValue(i,6);
								var fechafra = dataset.getValue(i,9);
								var impfra = dataset.getValue(i,8);
								
								query = "select * "+
								"from cCobrosPagos "+ 
								"where IdEjercicio = '"+E+"' AND "+
								"FechaVencimiento = '"+utils.dateFormat(FV,'dd-MM-yyyy')+"' AND " +
								"CuentaContable = '"+CC+"' AND "+
								"ImporteVencimiento = "+IMPEFECTO+
								" AND IdFactura ='"+fra+"'";
								dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
								var uuid = dataset2.getValue(1,1)
								var vSet2 = databaseManager.getFoundSet(con, 'ccobrospagos')  
								
								if(CC != null && CC != '')
								{
									if(uuid == null)
									{
										query = "select cif from tbmaestroproveedores "+
											    "where  codpro = "+pro;
										var dataset3 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
										var cif = new String() 
										cif = dataset3.getValue(1,1)
										if(cif != null && cif != '')
										{
											var l = utils.stringLeft(cif,1)
											var Letr = 'NO'
											for(var j=0;j<Letras.length;j++)
											{
												if(Letras[j] == l)
												{
													Letr = 'SI'
													break;
												}
											}
											
											if(Letr == 'SI')
											{
												var tipodeudor = 1
											}
											else if(Letr == 'NO')
											{
												tipodeudor = 2
											}
										}
										else
										{
											tipodeudor = 1
										}
										var tipoadeudo = 4
										
										record = vSet2.getRecord(vSet2.newRecord());
										record.id = application.getUUID();
										record.idejercicio = E;
										record.fechavencimiento = FV;
										record.cuentacontable = CC;
										record.cobropago = 2;
										record.formapago = FP;
										record.importevencimiento = IMPEFECTO;			
										record.idfactura = fra
										record.fechafactura = fechafra;
										record.importefactura = impfra;
										//record.numdocumento = fra;
										record.concepto = fra;
										record.tipodeudor = tipodeudor;
										record.tipoadeudo = tipoadeudo;
										
										databaseManager.saveData(record);
										
										forms.FrmCobrosPagosGC.foundset.newRecord(true)	
										forms.FrmCobrosPagosGC.id = application.getUUID()
										forms.FrmCobrosPagosGC.fechavencimiento = FV;
										forms.FrmCobrosPagosGC.cuentacontable = pro;
										forms.FrmCobrosPagosGC.cobropago = 2;
										forms.FrmCobrosPagosGC.formapago = FP;
										forms.FrmCobrosPagosGC.importevencimiento = IMPEFECTO;			
										forms.FrmCobrosPagosGC.idfactura = fra
										forms.FrmCobrosPagosGC.fechafactura = fechafra;
										forms.FrmCobrosPagosGC.importefactura = impfra;
										//record.numdocumento = fra;
										forms.FrmCobrosPagosGC.concepto = fra;
										forms.FrmCobrosPagosGC.tipodeudor = tipodeudor;
										forms.FrmCobrosPagosGC.tipoadeudo = tipoadeudo;
										
										if (i % 10 == 0) databaseManager.saveData(forms.FrmCobrosPagosGC.foundset);
										
									}
								}
							}
							
							databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
							databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.casientocontablecabecera_to_casientocontablelinea,-1)
							
							
							var result = forms.FrmFacturasComprasGC.foundset.selectRecord(nup,pro)
							var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasComprasGC.foundset);
							while(result==false)
							{
								if(fsCount == forms.FrmFacturasComprasGC.foundset.getSize())
								{
									break;
								}
								forms.FrmFacturasComprasGC.foundset.setSelectedIndex(forms.FrmFacturasComprasGC.foundset.getSize());
								result = forms.FrmFacturasComprasGC.foundset.selectRecord(nup,pro);
							}
							forms.FrmFacturasComprasGC.foundset.situconta = 'C'
							databaseManager.saveData()
							
							forms.FrmFacturasComprasGC.situcontacolor()
						}
					}
				}
			}
		}
		/*if(rows > 0)
		{
			var concepto = 'FACTURAS COMPRAS '+ Fra;
			
			query = "select ISNULL(SUM(cuotaiva1_cfca),0), piva1_cfca,ISNULL(SUM(cuotaiva2_cfca),0), piva2_cfca,"+
			"ISNULL(SUM(cuotaiva3_cfca),0), piva3_cfca "+
				"from tbFacturaCompraCabecera as a "+ 
				"where (a.pro_cfca between "+desdeprov+" and "+hastaprov+
				") and (a.nup_cfca between '"+desdefactura+"' and '"+hastafactura+"') "+
				"AND (a.situconta IS NULL OR a.situconta = '') " +
				"group by piva1_cfca,piva2_cfca,piva3_cfca";
				
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				iva = dataset.getValue(i,1)
				var piva = dataset.getValue(i,2)
				if(piva == null) piva = 0;
				//cuentaiva = '477'+utils.numberFormat(piva,'00000')				
				NuevoAsientolinea(E)
				query = "select DescCuentaContable "+
				"FROM dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + cuentaiva +"'";
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var desccuentaiva = dataset2.getValue(1,1);
				if(iva != 0)
				{				
					vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
					  
					//load record by ID in foundset  
					//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
					record = vSet.getRecord(vSet.newRecord());
					record.id = application.getUUID()
					record.idejercicio = E;
					record.idasiento = idasiento;
					record.idasientolinea = idasientolinea;
					record.fechaasiento = globals.GCDesdeFecha;
					record.cuentacontable = cuentaiva;
					record.desccuentacontable = desccuentaiva;
					record.importedebe = iva;
					record.importehaber = null;
					record.concepto = concepto;
					record.situacion = '...';
					record.situacioncobro = '...';
					record.idusuario = globals.GClogin_usuario;
					cont = 1;
					
					databaseManager.saveData(record);
				}
				
			}
			query = "SELECT b.CCGastos,isnull(sum(a.impbie1_cfca),0)+isnull(sum(a.impbie2_cfca),0)+isnull(sum(a.impbie3_cfca),0) AS TotalBaseImp "+
					"from tbFacturaCompraCabecera as a left join tbMaestroProveedores as b on "+ 
					"a.pro_cfca = b.Codpro "+
					"where (a.pro_cfca between "+desdeprov+" and "+hastaprov+
					") and (a.nup_cfca between '"+desdefactura+"' and '"+hastafactura+"') "+
					"AND (a.situconta IS NULL OR a.situconta = '') " +
					"group by b.CuentaContable,b.CCGastos";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				cuentagastos = dataset.getValue(i,1)
				if(cuentagastos == null) cuentagastos = '60000000';
				compras = dataset.getValue(i,2)
				query = "select DescCuentaContable "+
				"FROM CONTAAG.dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + cuentagastos +"'";
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var desccuentaventas = dataset2.getValue(1,1);
				NuevoAsientolinea(E)
				vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
				  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				record = vSet.getRecord(vSet.newRecord());
				record.id = application.getUUID()
				record.idejercicio = E;
				record.idasiento = idasiento;
				record.idasientolinea = idasientolinea;
				record.fechaasiento = globals.GCDesdeFecha;
				record.cuentacontable = cuentagastos;
				record.desccuentacontable = desccuentaventas;
				record.importedebe = compras;
				record.importehaber = null;
				record.concepto = concepto;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
				
				databaseManager.saveData(record);
			}
			
			concepto = 'RETENCIÓN '+ Fra;
			
			query = "select ISNULL(SUM(reten_cfca),0), ccreten_cfca "+
				"from tbFacturaCompraCabecera as a "+ 
				"where (a.pro_cfca between "+desdeprov+" and "+hastaprov+
				") and (a.nup_cfca between '"+desdefactura+"' and '"+hastafactura+"') "+
				"AND (a.situconta IS NULL OR a.situconta = '') " +
				"group by ccreten_cfca";
				
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				var retencion = dataset.getValue(i,1)
				var ccretencion = dataset.getValue(i,2)
				
				if(ccretencion && retencion)
				{
					NuevoAsientolinea(E)
					query = "select DescCuentaContable "+
					"FROM dbo.ctbCuentaContable "+
					"WHERE IdEjercicio = '" + E + "' AND "+
					"CuentaContable = '" + ccretencion +"'";
					dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
					var descccretencion = dataset2.getValue(1,1);
					if(retencion != 0)
					{				
						vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
						  
						//load record by ID in foundset  
						//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
						record.idejercicio = E;
						record.idasiento = idasiento;
						record.idasientolinea = idasientolinea;
						record.fechaasiento = globals.GCDesdeFecha;
						record.cuentacontable = ccretencion;
						record.desccuentacontable = descccretencion;
						record.importedebe = null;
						record.importehaber = retencion;
						record.concepto = concepto;
						record.situacion = '...';
						record.situacioncobro = '...';
						record.idusuario = globals.GClogin_usuario;
						cont = 1;
						
						databaseManager.saveData(record);
					}
				}
				
				
				
			}
			
			concepto = 'PORTES/SUPLIDOS'+ Fra;
			
			query = "select ISNULL(SUM(portes),0), ccportes "+
				"from tbFacturaCompraCabecera as a "+ 
				"where (a.pro_cfca between "+desdeprov+" and "+hastaprov+
				") and (a.nup_cfca between '"+desdefactura+"' and '"+hastafactura+"') "+
				"AND (a.situconta IS NULL OR a.situconta = '') " +
				"group by ccportes";
				
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				var portes = dataset.getValue(i,1)
				var ccportes = dataset.getValue(i,2)
				
				if(ccportes && portes)
				{
					NuevoAsientolinea(E)
					query = "select DescCuentaContable "+
					"FROM dbo.ctbCuentaContable "+
					"WHERE IdEjercicio = '" + E + "' AND "+
					"CuentaContable = '" + ccretencion +"'";
					dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
					var descportes = dataset2.getValue(1,1);
					if(portes != 0)
					{				
						vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
						  
						//load record by ID in foundset  
						//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
						record.idejercicio = E;
						record.idasiento = idasiento;
						record.idasientolinea = idasientolinea;
						record.fechaasiento = globals.GCDesdeFecha;
						record.cuentacontable = ccportes;
						record.desccuentacontable = descportes;
						record.importedebe = null;
						record.importehaber = portes;
						record.concepto = concepto;
						record.situacion = '...';
						record.situacioncobro = '...';
						record.idusuario = globals.GClogin_usuario;
						cont = 1;
						
						databaseManager.saveData(record);
					}
				}
				
				
				
			}
			
			databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
			databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.casientocontablecabecera_to_casientocontablelinea,-1)
			
			query = "select pro_cfca,nup_cfca "+
			"from tbFacturaCompraCabecera "+
			"where (pro_cfca between "+desdeprov+" and "+hastaprov+
			") and (nup_cfca between '"+desdefactura+"' and '"+hastafactura+"') "+
			"AND (situconta IS NULL OR situconta = '') " +
			"ORDER BY pro_cfca,nup_cfca";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				var pro = dataset.getValue(i,1)
				var nup = dataset.getValue(i,2)
				var result = forms.FrmFacturasComprasGC.foundset.selectRecord(nup,pro)
				var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasComprasGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.FrmFacturasComprasGC.foundset.getSize())
					{
						return;
					}
					forms.FrmFacturasComprasGC.foundset.setSelectedIndex(forms.FrmFacturasComprasGC.foundset.getSize());
					result = forms.FrmFacturasComprasGC.foundset.selectRecord(nup,pro);
				}
				forms.FrmFacturasComprasGC.foundset.situconta = 'C'
				databaseManager.saveData()
			}
			
		}*/
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {String} E
 *
 * @properties={typeid:24,uuid:"8223F086-E243-421E-B230-376A33EFCED6"}
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(unused)
 */
function NoAgruparFacturas(E) {
	if(forms.dlg_ActualizacionContableGC.DesdeEjer != null)
	{
		var desdeejer = forms.dlg_ActualizacionContableGC.DesdeEjer
	}
	else
	{
		desdeejer = 1
	}
	if(forms.dlg_ActualizacionContableGC.HastaEjer != null)
	{
		var hastaejer = forms.dlg_ActualizacionContableGC.HastaEjer
	}
	else
	{
		hastaejer = 9999999
	}
	
	if(forms.dlg_ActualizacionContableGC.DesdeSer != null)
	{
		var desdeser = forms.dlg_ActualizacionContableGC.DesdeSer
	}
	else
	{
		desdeser = ''
	}
	if(forms.dlg_ActualizacionContableGC.HastaSer != null)
	{
		var hastaser = forms.dlg_ActualizacionContableGC.HastaSer
	}
	else
	{
		hastaser = 'Z'
	}
	
	if(forms.dlg_ActualizacionContableGC.DesdeNup != null)
	{
		var desdenfact = forms.dlg_ActualizacionContableGC.DesdeNup
	}
	else
	{
		desdenfact = 1
	}
	if(forms.dlg_ActualizacionContableGC.HastaNup != null)
	{
		var hastanfact = forms.dlg_ActualizacionContableGC.HastaNup
	}
	else
	{
		hastanfact = 99999999
	}
	
	var query = "select a.ID,a.impbre_cfa,a.depp_cfa,a.piva_cfa,a.cuotaiva_cfa,a.impbie_cfa,a.clie_cfa,b.DescCliente,"+
				"a.impnee_cfa,a.eje_cfa,a.ser_cfa,a.nup_cfa,a.fecha_cfa,B.CuentaContable,B.CuentaContableVentas,a.fechcobro_cfa "+
				"from tbFacturaCompraCabecera AS a LEFT JOIN tbMaestroProveedores AS B ON "+
				"a.clie_cfa = b.IdCliente "+
				"where (eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
				") AND (ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
				"') AND (nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+") AND (a.situconta IS NULL OR a.situconta = '') "+
				"ORDER BY a.fecha_cfa,a.eje_cfa,a.ser_cfa,a.nup_cfa";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
	
	var rows = dataset.getMaxRowIndex();
	var iva = 0
	var ventas = 0
	var fecha = null;
    for(var i=1;i<=rows;i++)
	{
		fecha = utils.dateFormat(dataset.getValue(i,13),'dd-MM-yyyy');
		var uuid = dataset.getValue(i,1)
		var FechaFra = utils.parseDate(fecha,'dd-MM-yyyy')
		var cli = dataset.getValue(i,7);
		var DEJER = dataset.getValue(i,10);
		var DSER = dataset.getValue(i,11);
		var DNUP = dataset.getValue(i,12);
		var HEJER = dataset.getValue(i,10);
		var HSER = dataset.getValue(i,11);
		var HNUP = dataset.getValue(i,12);
		var cuentacli = dataset.getValue(i,14);
		if(cuentacli == null || cuentacli == '') cuentacli = '43'+utils.numberFormat(cli,'000000')
		query = "select DescCuentaContable "+
		"FROM CONTAAG.dbo.ctbCuentaContable "+
		"WHERE IdEjercicio = '" + E + "' AND "+
		"CuentaContable = '" + cuentacli +"'";
		var dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
		var desccuentacli = dataset2.getValue(1,1);
		var cventas = dataset.getValue(i,15);
		if(cventas == null || cventas == '') cventas = '70500000';
		var Fra = "F:"/*+dataset.getValue(i,10)*/+utils.numberFormat(dataset.getValue(i,12),'00000')+/*dataset.getValue(i,11)*/
		  " "+utils.dateFormat(dataset.getValue(i,13),'ddMMyyyy')+" "+utils.dateFormat(dataset.getValue(i,16),'ddMMyyyy');
		var tipoiva = dataset.getValue(i,4);
		if(tipoiva == null) tipoiva = 0;
		var civa = '477'+utils.numberFormat(tipoiva,'00000')	
		
		var baseiva1 = dataset.getValue(i,6)
			baseiva1 = globals.GCROUND(baseiva1,2)
		var cuotaiva1 = dataset.getValue(i,5)
			cuotaiva1 = globals.GCROUND(cuotaiva1,2)
		
			
		
		var Importebruto = dataset.getValue(i,2)
		var Importeneto = dataset.getValue(i,9)
		
		NuevoAsiento(E);
       
		//cabecera
		vSet = databaseManager.getFoundSet(con, 'casientocontablecabecera')  
		  
		//load record by ID in foundset  
		//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.idasiento = idasiento;
        record.idejercicio = E;
        record.fechaasiento = utils.parseDate(fecha,'dd-MM-yyyy');
        record.situacion = 0;
		
		databaseManager.saveData(record);
		
		NuevoAsientolinea(E)
		
		rawData = null;
		pdfname = null;
			
		if(forms.dlg_ActualizacionContableGC.GenerarPDF == 1)
		{
			
			var DCLI = cli;
			var HCLI = cli;
			try{
			ImpresionPDF(DEJER,DSER,DNUP,HEJER,HSER,HNUP,DCLI,HCLI)
			}
			catch(e)
		    {
		    	application.output(e.toString())
		    }
		}				
		
		
		vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
		  
		//load record by ID in foundset  
		//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
		var record2 = vSet.getRecord(vSet.newRecord());
		record2.id = application.getUUID()
		record2.idejercicio = E;
		record2.idasiento = idasiento;
		record2.idasientolinea = idasientolinea;
		record2.fechaasiento = utils.parseDate(fecha,'dd-MM-yyyy');
		record2.cuentacontable = cuentacli;
		record2.desccuentacontable = desccuentacli;
		record2.importedebe = Importeneto/*dataset.getValue(i,9)*/;
		record2.importehaber = null;
		record2.concepto = Fra;
		record2.idtipofactura = 1;
		record2.situacion = '...';
		record2.situacioncobro = '...';
		record2.idusuario = globals.GClogin_usuario;
		record2.porciva1 = tipoiva;
		record2.baseiva1 = baseiva1;
		record2.cuotaiva1 = cuotaiva1;
		record2.fechadocumento = FechaFra;
		record2.numfactura = Fra;
		record2.cuentaiva = civa;
		record2.cuentacontrapartida = cventas;
		record2.docupdf = rawData;
		record2.filename = pdfname;
		cont = 1;
		
		databaseManager.saveData(record2);
		
					
		NuevoAsientolinea(E)
						
						
		query = "select DescCuentaContable "+
				"FROM CONTAAG.dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + civa +"'";
		dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
		var desccuentaiva = dataset2.getValue(1,1);
		if(cuotaiva1 != 0)
		{
			var vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
					  
			//load record by ID in foundset  
			//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
			record = vSet.getRecord(vSet.newRecord());
			record.id = application.getUUID()
			record.idejercicio = E;
			record.idasiento = idasiento;
			record.idasientolinea = idasientolinea;
			record.fechaasiento = utils.parseDate(fecha,'dd-MM-yyyy');
			record.cuentacontable = civa;
			record.desccuentacontable = desccuentaiva;
			record.importedebe = null;
			record.importehaber = cuotaiva1;
			record.concepto = Fra;
			record.situacion = '...';
			record.situacioncobro = '...';
			record.idusuario = globals.GClogin_usuario;
			cont = 1;
							
			databaseManager.saveData(record);
		}
		
		query = "select DescCuentaContable "+
				"FROM CONTAAG.dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + cventas +"'";
		dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
		var desccuentaventas = dataset2.getValue(1,1);
		NuevoAsientolinea(E)
		vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
						  
						//load record by ID in foundset  
						//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
		record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
		record.idejercicio = E;
		record.idasiento = idasiento;
		record.idasientolinea = idasientolinea;
		record.fechaasiento = utils.parseDate(fecha,'dd-MM-yyyy');;
		record.cuentacontable = cventas;
		record.desccuentacontable = desccuentaventas;
		record.importedebe = null;
		record.importehaber = baseiva1;
		record.concepto = Fra;
		record.situacion = '...';
		record.situacioncobro = '...';
		record.idusuario = globals.GClogin_usuario;
		cont = 1;
						
		databaseManager.saveData(record);
		
		databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
		databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.casientocontablecabecera_to_casientocontablelinea,-1)
		
		
		var result = forms.FrmFacturasComprasGC.foundset.selectRecord(uuid)
		var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.FrmFacturasGC.foundset.getSize())
			{
				return;
			}
		forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
		result = forms.FrmFacturasGC.foundset.selectRecord(uuid);
		}
		forms.FrmFacturasGC.foundset.situconta = 'C'
		databaseManager.saveData()
	}     
}

/**
 * Callback method when form is destroyed.
 *
 * @param {String} E
 *
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"5B72C5F4-0CE6-41BC-997F-6B433A800109"}
 */
function AgruparFacturasFecha(E) {
	if(globals.GCDesdeFecha == null) globals.GCDesdeFecha = new Date();
	var fech = utils.dateFormat(globals.GCDesdeFecha,'dd-MM-yyyy');
	globals.GCDesdeFecha = utils.parseDate(fech,'dd-MM-yyyy');
	
	if(forms.dlg_ActualizacionContableComprasGC.DesdeProveedor != null)
	{
		var desdeprov = forms.dlg_ActualizacionContableComprasGC.DesdeProveedor
	}
	else
	{
		desdeprov = 1
	}
	if(forms.dlg_ActualizacionContableComprasGC.HastaProveedor != null)
	{
		var hastaprov = forms.dlg_ActualizacionContableComprasGC.HastaProveedor
	}
	else
	{
		hastaprov = 9999999
	}
	
	if(forms.dlg_ActualizacionContableComprasGC.DesdeFactura != null)
	{
		var desdefactura = forms.dlg_ActualizacionContableComprasGC.DesdeFactura
	}
	else
	{
		desdefactura = '0'
	}
	if(forms.dlg_ActualizacionContableComprasGC.HastaFactura != null)
	{
		var hastafactura = forms.dlg_ActualizacionContableComprasGC.HastaFactura
	}
	else
	{
		hastafactura = 'Z'
	}
	
	var query = "SELECT a.pro_cfca,a.nup_cfca,a.fecha_cfca,b.CuentaContable,b.CCGastos,a.fechpago_cfca"+
	",a.fechconta_cfca,a.cfpa_cfca,a.obse_cfca,a.situconta,a.situ"+
	",a.impbre_cfca,a.preten_cfca,a.reten_cfca,a.ccreten_cfca"+
	",a.impbie1_cfca,a.piva1_cfca,a.cuotaiva1_cfca,a.impbie2_cfca"+
	",a.piva2_cfca,a.cuotaiva2_cfca,a.impbie3_cfca,a.piva3_cfca"+
	",a.cuotaiva3_cfca,a.impnee_cfca,a.nasiento_cfca,a.idtipofactura_cfca,a.docupdf,a.filename"+
	",a.portes,a.ccportes,a.tipofacturasii, a.tipooperacionsii,B.pais "+
	"FROM [dbo].[tbFacturaCompraCabecera] AS a LEFT JOIN tbMaestroProveedores AS B ON a.pro_cfca = b.Codpro "+
	"where (a.pro_cfca between "+desdeprov+" and "+hastaprov+
	") and (a.nup_cfca between '"+desdefactura+"' and '"+hastafactura+"') "+
	"AND (a.situconta IS NULL OR a.situconta = '') " +
	"AND (a.impnee_cfca != 0) "+
	"ORDER BY a.pro_cfca,a.nup_cfca";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
	
	var rows = dataset.getMaxRowIndex();
	
	if(rows > 0)
	{
		var ok = null;
		for(var i=1;i<=rows;i++)
		{
			var pro = dataset.getValue(i,1);
			var nup = dataset.getValue(i,2);
			var cuentaprov = dataset.getValue(i,4);
			var cuentagastos = dataset.getValue(i,5);
			var reten = dataset.getValue(i,14);
			var ccreten = dataset.getValue(i,15);
			var port = dataset.getValue(i,30);
			var ccport = dataset.getValue(i,31);
			//Miro datos del SII
			var tipofacturasii = dataset.getValue(i,32);
			var tipooperacionsii = dataset.getValue(i,33);
			
			
			query = "select descproveedor from tbmaestroproveedores where codpro ="+pro;
			var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var descprov = dataset2.getValue(1,1);
			
			if(!cuentaprov || !cuentagastos)
			{
				ok = 1;
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error("Falta la Cuenta Contable o la Cuenta de Gastos de la factura '"+nup+"' del Proveedor "+pro+" - "+descprov,'¡Error!')
				else globals.GCshowErrorDialog("Falta la Cuenta Contable o la Cuenta de Gastos de la factura '"+nup+"' del Proveedor "+pro+" - "+descprov,null,'Aceptar',null,null,null)
				return
			}
			else if(reten && !ccreten)
			{
				ok = 1;
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error("Falta la Cuenta de Retención de la factura '"+nup+"' del Proveedor "+pro+" - "+descprov,'¡Error!')
				else globals.GCshowErrorDialog("Falta la Cuenta de Retención de la factura '"+nup+"' del Proveedor "+pro+" - "+descprov,null,'Aceptar',null,null,null)
				return
			}
			else if(port && !ccport)
			{
				ok = 1;
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error("Falta la Cuenta de Portes de la factura '"+nup+"' del Proveedor "+pro+" - "+descprov,'¡Error!')
				else globals.GCshowErrorDialog("Falta la Cuenta de Portes de la factura '"+nup+"' del Proveedor "+pro+" - "+descprov,null,'Aceptar',null,null,null)
				return
			}
		}
		
		if(!ok)
		{
			var iva = 0;
			var compras = 0;
			var FechaFra = null;
			var FechaFraAnt = null;
			for(i=1;i<=rows;i++)
			{
				pro = dataset.getValue(i,1);
				nup = dataset.getValue(i,2);
				cuentaprov = dataset.getValue(i,4);
				cuentagastos = dataset.getValue(i,5);
				reten = dataset.getValue(i,14);
				ccreten = dataset.getValue(i,15);
				port = dataset.getValue(i,30);
				ccport = dataset.getValue(i,31);
				
				
				if(cuentaprov && cuentagastos)
				{
					if(!reten || (reten && ccreten))
					{
						if(!port || (port && ccport))
						{	
							fech = utils.dateFormat( dataset.getValue(i,3),'dd-MM-yyyy')
							FechaFra = utils.parseDate(fech,'dd-MM-yyyy')
							if(FechaFraAnt != FechaFra)
							{
								CabeceraAsiento(E)
							}
							//var cuentaprov = dataset.getValue(i,4);
							//if(!cuentaprov) cuentaprov = '40'+utils.numberFormat(pro,'000000')
							query = "select DescCuentaContable "+
							"FROM dbo.ctbCuentaContable "+
							"WHERE IdEjercicio = '" + E + "' AND "+
							"CuentaContable = '" + cuentaprov +"'";
							dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
							var desccuentaprov = dataset2.getValue(1,1);
							//var cuentagastos = dataset.getValue(i,5);
							//if(!cuentagastos) cuentagastos = '60000000';
							var Fra = "F:"+dataset.getValue(i,2);
							if(dataset.getValue(i,9)) Fra = Fra + " " + dataset.getValue(i,9); 
							var tipoiva = dataset.getValue(i,17);
							if(tipoiva == null) tipoiva = 0;
							query = "select CuentaContable from ctbCuentaContable "+
							"where IdEjercicio = '"+E+"' and CuentaContable like '472%' "+
				"					and (ClaveDesglose is null or ClaveDesglose = 0)"	
							dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
							var cuentaiva = dataset2.getValue(1,1)
							if(!cuentaiva) cuentaiva = '47200000';
							
							var baseiva1 = dataset.getValue(i,16) 
							var cuotaiva1 = dataset.getValue(i,18) 
							var baseiva2 = dataset.getValue(i,19) 
							var tipoiva2 = dataset.getValue(i,20);
							var cuotaiva2 = dataset.getValue(i,21) 
							var baseiva3 = dataset.getValue(i,22) 
							var tipoiva3 = dataset.getValue(i,23);
							var cuotaiva3 = dataset.getValue(i,24) 
								
							iva += globals.GCROUND(cuotaiva1 + cuotaiva2 + cuotaiva3,2)
							var Importebruto = dataset.getValue(i,12)
							compras += Importebruto
							
							NuevoAsientolinea(E)
							
							rawData = dataset.getValue(i,28);
							pdfname = dataset.getValue(i,29);
							
							
							
							var vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
							  
							//load record by ID in foundset  
							//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
							var record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
							record.idejercicio = E;
							record.idasiento = idasiento;
							record.idasientolinea = idasientolinea;
							record.fechaasiento = globals.GCDesdeFecha;
							record.cuentacontable = cuentaprov;
							record.desccuentacontable = desccuentaprov;
							record.importedebe = null;
							record.importehaber = dataset.getValue(i,25);
							record.concepto = Fra;
							record.idtipofactura = dataset.getValue(i,27);
							record.situacion = '...';
							record.situacioncobro = '...';
							record.idusuario = globals.GClogin_usuario;
							record.porciva1 = tipoiva;
							record.baseiva1 = baseiva1;
							record.cuotaiva1 = cuotaiva1;
							if(tipoiva2 != null)
							{
								record.porciva2 = tipoiva2;
								record.baseiva2 = baseiva2;
								record.cuotaiva2 = cuotaiva2;
							}
							if(tipoiva3 != null)
							{
								record.porciva3 = tipoiva3;
								record.baseiva3 = baseiva3;
								record.cuotaiva3 = cuotaiva3;
							}
							record.fechadocumento = FechaFra;
							record.numfactura = Fra;
							record.cuentaiva = cuentaiva;
							record.cuentacontrapartida = cuentagastos;
							record.docupdf = rawData;
							record.filename = pdfname;
							record.tipofacturasii = tipofacturasii;
							record.tipooperacionsii = tipooperacionsii;
							record.claveoperacionsii = '01';
							cont = 1;
							
							databaseManager.saveData(record);
							
							//Cuota Iva
							var concepto = 'FACTURAS COMPRAS '+ Fra;
							
							query = "select ISNULL(SUM(cuotaiva1_cfca),0), piva1_cfca,ISNULL(SUM(cuotaiva2_cfca),0), piva2_cfca,"+
							"ISNULL(SUM(cuotaiva3_cfca),0), piva3_cfca "+
								"from tbFacturaCompraCabecera as a "+ 
								"where (a.pro_cfca = "+pro+
								") and (a.nup_cfca = '"+nup+"') "+
								"AND (a.situconta IS NULL OR a.situconta = '') " +
								"group by piva1_cfca,piva2_cfca,piva3_cfca";
								
							dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
							rows = dataset.getMaxRowIndex();
							for(i=1;i<=rows;i++)
							{
								iva = dataset.getValue(i,1)
								var piva = dataset.getValue(i,2)
								if(piva == null) piva = 0;
								//cuentaiva = '477'+utils.numberFormat(piva,'00000')				
								NuevoAsientolinea(E)
								query = "select DescCuentaContable "+
								"FROM dbo.ctbCuentaContable "+
								"WHERE IdEjercicio = '" + E + "' AND "+
								"CuentaContable = '" + cuentaiva +"'";
								dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
								var desccuentaiva = dataset2.getValue(1,1);
								if(iva != 0)
								{				
									vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
									  
									//load record by ID in foundset  
									//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
									record = vSet.getRecord(vSet.newRecord());
									record.id = application.getUUID()
									record.idejercicio = E;
									record.idasiento = idasiento;
									record.idasientolinea = idasientolinea;
									record.fechaasiento = globals.GCDesdeFecha;
									record.cuentacontable = cuentaiva;
									record.desccuentacontable = desccuentaiva;
									record.importedebe = iva;
									record.importehaber = null;
									record.concepto = concepto;
									record.situacion = '...';
									record.situacioncobro = '...';
									record.idusuario = globals.GClogin_usuario;
									cont = 1;
									
									databaseManager.saveData(record);
								}
								
							}
							
							//BaseIva
							query = "SELECT b.CCGastos,isnull(sum(a.impbie1_cfca),0)+isnull(sum(a.impbie2_cfca),0)+isnull(sum(a.impbie3_cfca),0) AS TotalBaseImp "+
									"from tbFacturaCompraCabecera as a left join tbMaestroProveedores as b on "+ 
									"a.pro_cfca = b.Codpro "+
									"where (a.pro_cfca = "+pro+
									") and (a.nup_cfca = '"+nup+"') "+
									"AND (a.situconta IS NULL OR a.situconta = '') " +
									"group by b.CuentaContable,b.CCGastos";
							dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
							rows = dataset.getMaxRowIndex();
							for(i=1;i<=rows;i++)
							{
								cuentagastos = dataset.getValue(i,1)
								if(cuentagastos == null) cuentagastos = '60000000';
								compras = dataset.getValue(i,2)
								query = "select DescCuentaContable "+
								"FROM dbo.ctbCuentaContable "+
								"WHERE IdEjercicio = '" + E + "' AND "+
								"CuentaContable = '" + cuentagastos +"'";
								dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
								var desccuentacompras = dataset2.getValue(1,1);
								NuevoAsientolinea(E)
								vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
								  
								//load record by ID in foundset  
								//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
								record = vSet.getRecord(vSet.newRecord());
								record.id = application.getUUID()
								record.idejercicio = E;
								record.idasiento = idasiento;
								record.idasientolinea = idasientolinea;
								record.fechaasiento = globals.GCDesdeFecha;
								record.cuentacontable = cuentagastos;
								record.desccuentacontable = desccuentacompras;
								record.importedebe = compras;
								record.importehaber = null;
								record.concepto = concepto;
								record.situacion = '...';
								record.situacioncobro = '...';
								record.idusuario = globals.GClogin_usuario;
								cont = 1;
								
								databaseManager.saveData(record);
							}
							
							//Retencion
							concepto = 'RETENCIÓN '+ Fra;
							
							query = "select ISNULL(SUM(reten_cfca),0), ccreten_cfca "+
								"from tbFacturaCompraCabecera as a "+ 
								"where (a.pro_cfca = "+pro+
								") and (a.nup_cfca = '"+nup+"') "+
								"AND (a.situconta IS NULL OR a.situconta = '') " +
								"group by ccreten_cfca";
								
							dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
							rows = dataset.getMaxRowIndex();
							for(i=1;i<=rows;i++)
							{
								var retencion = dataset.getValue(i,1)
								var ccretencion = dataset.getValue(i,2)
								
								if(ccretencion && retencion)
								{
									NuevoAsientolinea(E)
									query = "select DescCuentaContable "+
									"FROM dbo.ctbCuentaContable "+
									"WHERE IdEjercicio = '" + E + "' AND "+
									"CuentaContable = '" + ccretencion +"'";
									dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
									var descccretencion = dataset2.getValue(1,1);
									if(retencion != 0)
									{				
										vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
										  
										//load record by ID in foundset  
										//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
										record = vSet.getRecord(vSet.newRecord());
										record.id = application.getUUID()
										record.idejercicio = E;
										record.idasiento = idasiento;
										record.idasientolinea = idasientolinea;
										record.fechaasiento = globals.GCDesdeFecha;
										record.cuentacontable = ccretencion;
										record.desccuentacontable = descccretencion;
										record.importedebe = null;
										record.importehaber = retencion;
										record.concepto = concepto;
										record.situacion = '...';
										record.situacioncobro = '...';
										record.idusuario = globals.GClogin_usuario;
										cont = 1;
										
										databaseManager.saveData(record);
									}
								}
								
								
								
							}
							
							//Portes
							concepto = 'PORTES/SUPLIDOS '+ Fra;
							
							query = "select ISNULL(SUM(portes),0), ccportes "+
								"from tbFacturaCompraCabecera as a "+ 
								"where (a.pro_cfca = "+pro+
								") and (a.nup_cfca = '"+nup+"') "+
								"AND (a.situconta IS NULL OR a.situconta = '') " +
								"group by ccportes";
								
							dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
							rows = dataset.getMaxRowIndex();
							for(i=1;i<=rows;i++)
							{
								var portes = dataset.getValue(i,1)
								var ccportes = dataset.getValue(i,2)
								
								if(ccportes && portes)
								{
									NuevoAsientolinea(E)
									query = "select DescCuentaContable "+
									"FROM dbo.ctbCuentaContable "+
									"WHERE IdEjercicio = '" + E + "' AND "+
									"CuentaContable = '" + ccportes +"'";
									dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
									var descportes = dataset2.getValue(1,1);
									if(portes != 0)
									{				
										vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
										  
										//load record by ID in foundset  
										//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
										record = vSet.getRecord(vSet.newRecord());
										record.id = application.getUUID()
										record.idejercicio = E;
										record.idasiento = idasiento;
										record.idasientolinea = idasientolinea;
										record.fechaasiento = globals.GCDesdeFecha;
										record.cuentacontable = ccportes;
										record.desccuentacontable = descportes;
										record.importedebe = portes;
										record.importehaber = null;
										record.concepto = concepto;
										record.situacion = '...';
										record.situacioncobro = '...';
										record.idusuario = globals.GClogin_usuario;
										cont = 1;
										
										databaseManager.saveData(record);
									}
								}								
							}
							
							//Genero Pagos en Contabilidad
							query = "SELECT A.pro_efc,A.nup_efc,A.fecha_efc,A.cfpa_efc,A.porc_efc,A.impo_efc,"+
										"C.CuentaContable,B.impnee_cfca,B.fecha_cfca,B.pro_cfca,B.fechpago_cfca "+
										"from efectoscompras AS A INNER JOIN "+
										"tbFacturaCompraCabecera AS B ON A.pro_efc = B.pro_cfca AND "+
										" A.nup_efc = B.nup_cfca LEFT JOIN "+
										"tbMaestroProveedores C ON B.pro_cfca = C.CodPro "+
										"where (A.pro_efc = " + pro + 
										") AND (A.nup_efc = '" + nup +
										"') ORDER BY A.pro_efc,A.nup_efc,A.nli_efc";
										//") AND (B.situconta IS NULL OR B.situconta = '') ORDER BY A.eje_ef,A.ser_ef,A.nup_ef,A.nli_ef";
							dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
							
							rows = dataset.getMaxRowIndex();
							
							for(i=1;i<=rows;i++)
							{
								var FV = dataset.getValue(i,3);
								var CC = dataset.getValue(i,7);
								if(!CC) CC = '400'+utils.numberFormat(pro,'00000');
								var FP = dataset.getValue(i,4);
								var fra = nup;
								var IMPEFECTO = dataset.getValue(i,6);
								var fechafra = dataset.getValue(i,9);
								var impfra = dataset.getValue(i,8);
								
								query = "select * "+
								"from cCobrosPagos "+ 
								"where IdEjercicio = '"+E+"' AND "+
								"FechaVencimiento = '"+utils.dateFormat(FV,'dd-MM-yyyy')+"' AND " +
								"CuentaContable = '"+CC+"' AND "+
								"ImporteVencimiento = "+IMPEFECTO+
								" AND IdFactura ='"+fra+"'";
								dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
								var uuid = dataset2.getValue(1,1)
								var vSet2 = databaseManager.getFoundSet(con, 'ccobrospagos')  
								
								if(CC != null && CC != '')
								{
									if(uuid == null)
									{
										query = "select cif from tbmaestroproveedores "+
											    "where  codpro = "+pro;
										var dataset3 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
										var cif = new String() 
										cif = dataset3.getValue(1,1)
										if(cif != null && cif != '')
										{
											var l = utils.stringLeft(cif,1)
											var Letr = 'NO'
											for(var j=0;j<Letras.length;j++)
											{
												if(Letras[j] == l)
												{
													Letr = 'SI'
													break;
												}
											}
											
											if(Letr == 'SI')
											{
												var tipodeudor = 1
											}
											else if(Letr == 'NO')
											{
												tipodeudor = 2
											}
										}
										else
										{
											tipodeudor = 1
										}
										var tipoadeudo = 4
										
										record = vSet2.getRecord(vSet2.newRecord());
										record.id = application.getUUID();
										record.idejercicio = E;
										record.fechavencimiento = FV;
										record.cuentacontable = CC;
										record.cobropago = 2;
										record.formapago = FP;
										record.importevencimiento = IMPEFECTO;			
										record.idfactura = fra
										record.fechafactura = fechafra;
										record.importefactura = impfra;
										//record.numdocumento = fra;
										record.concepto = fra;
										record.tipodeudor = tipodeudor;
										record.tipoadeudo = tipoadeudo;
										
										databaseManager.saveData(record);
										
										forms.FrmCobrosPagosGC.foundset.newRecord(true)	
										forms.FrmCobrosPagosGC.id = application.getUUID()
										forms.FrmCobrosPagosGC.fechavencimiento = FV;
										forms.FrmCobrosPagosGC.cuentacontable = pro;
										forms.FrmCobrosPagosGC.cobropago = 2;
										forms.FrmCobrosPagosGC.formapago = FP;
										forms.FrmCobrosPagosGC.importevencimiento = IMPEFECTO;			
										forms.FrmCobrosPagosGC.idfactura = fra
										forms.FrmCobrosPagosGC.fechafactura = fechafra;
										forms.FrmCobrosPagosGC.importefactura = impfra;
										//record.numdocumento = fra;
										forms.FrmCobrosPagosGC.concepto = fra;
										forms.FrmCobrosPagosGC.tipodeudor = tipodeudor;
										forms.FrmCobrosPagosGC.tipoadeudo = tipoadeudo;
										
										if (i % 10 == 0) databaseManager.saveData(forms.FrmCobrosPagosGC.foundset);
										
									}
								}
							}
							
							databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
							databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.casientocontablecabecera_to_casientocontablelinea,-1)
							
							
							var result = forms.FrmFacturasComprasGC.foundset.selectRecord(nup,pro)
							var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasComprasGC.foundset);
							while(result==false)
							{
								if(fsCount == forms.FrmFacturasComprasGC.foundset.getSize())
								{
									break;
								}
								forms.FrmFacturasComprasGC.foundset.setSelectedIndex(forms.FrmFacturasComprasGC.foundset.getSize());
								result = forms.FrmFacturasComprasGC.foundset.selectRecord(nup,pro);
							}
							forms.FrmFacturasComprasGC.foundset.situconta = 'C'
							databaseManager.saveData()
							
							forms.FrmFacturasComprasGC.situcontacolor()
						}
					}
				}
			}
		}
		/*if(rows > 0)
		{
			var concepto = 'FACTURAS COMPRAS '+ Fra;
			
			query = "select ISNULL(SUM(cuotaiva1_cfca),0), piva1_cfca,ISNULL(SUM(cuotaiva2_cfca),0), piva2_cfca,"+
			"ISNULL(SUM(cuotaiva3_cfca),0), piva3_cfca "+
				"from tbFacturaCompraCabecera as a "+ 
				"where (a.pro_cfca between "+desdeprov+" and "+hastaprov+
				") and (a.nup_cfca between '"+desdefactura+"' and '"+hastafactura+"') "+
				"AND (a.situconta IS NULL OR a.situconta = '') " +
				"group by piva1_cfca,piva2_cfca,piva3_cfca";
				
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				iva = dataset.getValue(i,1)
				var piva = dataset.getValue(i,2)
				if(piva == null) piva = 0;
				//cuentaiva = '477'+utils.numberFormat(piva,'00000')				
				NuevoAsientolinea(E)
				query = "select DescCuentaContable "+
				"FROM dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + cuentaiva +"'";
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var desccuentaiva = dataset2.getValue(1,1);
				if(iva != 0)
				{				
					vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
					  
					//load record by ID in foundset  
					//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
					record = vSet.getRecord(vSet.newRecord());
					record.id = application.getUUID()
					record.idejercicio = E;
					record.idasiento = idasiento;
					record.idasientolinea = idasientolinea;
					record.fechaasiento = globals.GCDesdeFecha;
					record.cuentacontable = cuentaiva;
					record.desccuentacontable = desccuentaiva;
					record.importedebe = iva;
					record.importehaber = null;
					record.concepto = concepto;
					record.situacion = '...';
					record.situacioncobro = '...';
					record.idusuario = globals.GClogin_usuario;
					cont = 1;
					
					databaseManager.saveData(record);
				}
				
			}
			query = "SELECT b.CCGastos,isnull(sum(a.impbie1_cfca),0)+isnull(sum(a.impbie2_cfca),0)+isnull(sum(a.impbie3_cfca),0) AS TotalBaseImp "+
					"from tbFacturaCompraCabecera as a left join tbMaestroProveedores as b on "+ 
					"a.pro_cfca = b.Codpro "+
					"where (a.pro_cfca between "+desdeprov+" and "+hastaprov+
					") and (a.nup_cfca between '"+desdefactura+"' and '"+hastafactura+"') "+
					"AND (a.situconta IS NULL OR a.situconta = '') " +
					"group by b.CuentaContable,b.CCGastos";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				cuentagastos = dataset.getValue(i,1)
				if(cuentagastos == null) cuentagastos = '60000000';
				compras = dataset.getValue(i,2)
				query = "select DescCuentaContable "+
				"FROM CONTAAG.dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + cuentagastos +"'";
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var desccuentaventas = dataset2.getValue(1,1);
				NuevoAsientolinea(E)
				vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
				  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				record = vSet.getRecord(vSet.newRecord());
				record.id = application.getUUID()
				record.idejercicio = E;
				record.idasiento = idasiento;
				record.idasientolinea = idasientolinea;
				record.fechaasiento = globals.GCDesdeFecha;
				record.cuentacontable = cuentagastos;
				record.desccuentacontable = desccuentaventas;
				record.importedebe = compras;
				record.importehaber = null;
				record.concepto = concepto;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
				
				databaseManager.saveData(record);
			}
			
			concepto = 'RETENCIÓN '+ Fra;
			
			query = "select ISNULL(SUM(reten_cfca),0), ccreten_cfca "+
				"from tbFacturaCompraCabecera as a "+ 
				"where (a.pro_cfca between "+desdeprov+" and "+hastaprov+
				") and (a.nup_cfca between '"+desdefactura+"' and '"+hastafactura+"') "+
				"AND (a.situconta IS NULL OR a.situconta = '') " +
				"group by ccreten_cfca";
				
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				var retencion = dataset.getValue(i,1)
				var ccretencion = dataset.getValue(i,2)
				
				if(ccretencion && retencion)
				{
					NuevoAsientolinea(E)
					query = "select DescCuentaContable "+
					"FROM dbo.ctbCuentaContable "+
					"WHERE IdEjercicio = '" + E + "' AND "+
					"CuentaContable = '" + ccretencion +"'";
					dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
					var descccretencion = dataset2.getValue(1,1);
					if(retencion != 0)
					{				
						vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
						  
						//load record by ID in foundset  
						//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
						record.idejercicio = E;
						record.idasiento = idasiento;
						record.idasientolinea = idasientolinea;
						record.fechaasiento = globals.GCDesdeFecha;
						record.cuentacontable = ccretencion;
						record.desccuentacontable = descccretencion;
						record.importedebe = null;
						record.importehaber = retencion;
						record.concepto = concepto;
						record.situacion = '...';
						record.situacioncobro = '...';
						record.idusuario = globals.GClogin_usuario;
						cont = 1;
						
						databaseManager.saveData(record);
					}
				}
				
				
				
			}
			
			concepto = 'PORTES/SUPLIDOS'+ Fra;
			
			query = "select ISNULL(SUM(portes),0), ccportes "+
				"from tbFacturaCompraCabecera as a "+ 
				"where (a.pro_cfca between "+desdeprov+" and "+hastaprov+
				") and (a.nup_cfca between '"+desdefactura+"' and '"+hastafactura+"') "+
				"AND (a.situconta IS NULL OR a.situconta = '') " +
				"group by ccportes";
				
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				var portes = dataset.getValue(i,1)
				var ccportes = dataset.getValue(i,2)
				
				if(ccportes && portes)
				{
					NuevoAsientolinea(E)
					query = "select DescCuentaContable "+
					"FROM dbo.ctbCuentaContable "+
					"WHERE IdEjercicio = '" + E + "' AND "+
					"CuentaContable = '" + ccretencion +"'";
					dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
					var descportes = dataset2.getValue(1,1);
					if(portes != 0)
					{				
						vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
						  
						//load record by ID in foundset  
						//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
						record.idejercicio = E;
						record.idasiento = idasiento;
						record.idasientolinea = idasientolinea;
						record.fechaasiento = globals.GCDesdeFecha;
						record.cuentacontable = ccportes;
						record.desccuentacontable = descportes;
						record.importedebe = null;
						record.importehaber = portes;
						record.concepto = concepto;
						record.situacion = '...';
						record.situacioncobro = '...';
						record.idusuario = globals.GClogin_usuario;
						cont = 1;
						
						databaseManager.saveData(record);
					}
				}
				
				
				
			}
			
			databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
			databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.casientocontablecabecera_to_casientocontablelinea,-1)
			
			query = "select pro_cfca,nup_cfca "+
			"from tbFacturaCompraCabecera "+
			"where (pro_cfca between "+desdeprov+" and "+hastaprov+
			") and (nup_cfca between '"+desdefactura+"' and '"+hastafactura+"') "+
			"AND (situconta IS NULL OR situconta = '') " +
			"ORDER BY pro_cfca,nup_cfca";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				var pro = dataset.getValue(i,1)
				var nup = dataset.getValue(i,2)
				var result = forms.FrmFacturasComprasGC.foundset.selectRecord(nup,pro)
				var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasComprasGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.FrmFacturasComprasGC.foundset.getSize())
					{
						return;
					}
					forms.FrmFacturasComprasGC.foundset.setSelectedIndex(forms.FrmFacturasComprasGC.foundset.getSize());
					result = forms.FrmFacturasComprasGC.foundset.selectRecord(nup,pro);
				}
				forms.FrmFacturasComprasGC.foundset.situconta = 'C'
				databaseManager.saveData()
			}
			
		}*/
	}
}

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"CEC149A9-2196-400E-9F8D-FD9C99B4BB5C",variableType:8}
 */
var hastaasiento;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"AA41A909-4501-42C5-8851-CCD3B762FEB5",variableType:8}
 */
var desdeasiento;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"819E98C3-FDBB-4477-BCA9-0E8B568C9A60",variableType:8}
 */
var idasiento;

/**
 * Callback method when form is destroyed.
 *
 * @param {String} E
 *
 * @properties={typeid:24,uuid:"650F43D1-66C3-4137-A4BD-8AFD252291EB"}
 */
function NuevoAsiento(E) {
	var query = "select IdAsiento from cAsientoContableCabecera where IdEjercicio ='"+ E+
	"' order by IdAsiento desc"
	var dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
	idasiento = dataset.getValue(1, 1) + 1
}

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"6193C1A4-CFCE-4E90-92B2-96E09403FE0A",variableType:8}
 */
var idasientolinea;

/**
 * Callback method when form is destroyed.
 *
 * @param {String} E
 *
 * @properties={typeid:24,uuid:"C0566504-BF1D-4447-B9E2-0D12FBBA77CE"}
 */
function NuevoAsientolinea(E) {
	var query = "select IdAsientoLinea from cAsientoContableLinea where IdEjercicio ='"+ E+
	"' AND IdAsiento = "+idasiento+" order by IdAsientoLinea desc"
	var dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
	idasientolinea = dataset.getValue(1, 1) + 1
}

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"E9DC10C1-1713-4795-AC20-0CCF5027F18E",variableType:-4}
 */
var rawData;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5BD69E1B-8149-4AE8-80B5-89842764D374"}
 */
var pdfname = '';

/**
 * Callback method when form is destroyed.
 *
 * @param {Number} DEJER
 *
 * @param {String} DSER
 *
 * @param {Number} DNUP
 *
 * @param {Number} HEJER
 *
 * @param {String} HSER
 *
 * @param {Number} HNUP
 *
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 *
 * @properties={typeid:24,uuid:"F7589972-5857-43AA-9AAB-0EFD3835CD2B"}
 * @SuppressWarnings(deprecated)
 */
function ImpresionPDF(DEJER,DSER,DNUP,HEJER,HSER,HNUP,DCLI,HCLI) {
	var server_name = globals.GCconex
	
	var reportName = 'FacturaVentaGC.jrxml';
	
	var params = new java.util.HashMap()
	params.put('DesdeEjer', DEJER)
	params.put('DesdeSer', DSER)
	params.put('DesdeNFact', DNUP)
	params.put('HastaEjer', HEJER)
	params.put('HastaSer', HSER)
	params.put('HastaNFact', HNUP)
	params.put('DesdeCliente', DCLI)
	params.put('HastaCliente', HCLI)
	
	var exportTo = 'pdf';//
	var temp_file = plugins.file.createTempFile('Fra' + utils.numberFormat(DNUP,'00000'), '.'+exportTo);
			//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
	
	var _attachment = temp_file.getParent() + '\\Fra' + utils.numberFormat(DNUP,'00000')+'.pdf';
	//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
	try{
	plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
			
			
	rawData = plugins.file.readFile(_attachment)
			
			
			
	pdfname = 'Fra' + utils.numberFormat(DNUP,'00000')+'.pdf';
	}
	catch(e){
		application.output(e.toString())
	}
}

/**
 * Callback method when form is destroyed.
 * 
 * @param {String} CAMPO
 * 
 * @param {Number} LONGITUD
 * 
 *
 * @return {String}
 *
 *
 * @properties={typeid:24,uuid:"69DD4386-BA38-4EF1-9621-F203DD00576D"}
 */
function Digitos(CAMPO,LONGITUD)
{	
	var espacios = '0';
	var n = LONGITUD
	for(var i=1;i<n;i++)
	{
		espacios = '0' + espacios;
	}
    return (espacios + CAMPO);
}

/**
 * @param {String} E
 * 
 * @properties={typeid:24,uuid:"C7D7DDBE-053D-45A1-9DF4-1FA68657C0B4"}
 */
function CabeceraAsiento(E)
{
	NuevoAsiento(E)
	if(!desdeasiento) desdeasiento = idasiento;
	hastaasiento = idasiento;
	//cabecera
	var vSet = databaseManager.getFoundSet(con, 'casientocontablecabecera')  
			  
			//load record by ID in foundset  
			//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
			var record = vSet.getRecord(vSet.newRecord());
			record.id = application.getUUID()
			record.idasiento = idasiento;
			record.idejercicio = E;
			record.fechaasiento = globals.GCDesdeFecha;
			record.descasiento = 'FACTURAS RECIBIDAS'
			record.situacion = 0;
			
			databaseManager.saveData(record);
	
}

/**
*
*
*
*
*
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"0B459E8A-54C6-48E1-A1DC-FBEC14205C70",variableType:-4}
 */
var Letras = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
