/**
 * @properties={typeid:24,uuid:"FEB355A4-A1D9-4980-8586-84DD7469D6DB"}
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
 * @properties={typeid:35,uuid:"01398FBD-EC50-47C6-878C-B8410784DFB0",variableType:8}
 */
var cont = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8DAB0F5B-8B19-40C2-99AC-1D25D0911DE6"}
 */
var con = '';

/**
 * @properties={typeid:24,uuid:"88231F91-9E9A-4746-A6D8-0C2E8F5539CF"}
 * @SuppressWarnings(unused)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	try
	{
		cont = 0
		con = null;
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
			hastaejer = 999999999
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
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		con = dataset.getValue(1,2);
		if(Empresa == null || Empresa == '')
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error("No está definida la Empresa Contable en los Parametros",'¡Error!')
			else globals.GCshowErrorDialog('No está definida la Empresa Contable en los Parametros',null,'Aceptar',null,null,null)
		}
		else if(con == null || con == '')
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error("No está definida la conexión a la contabilidad en los Parametros",'¡Error!')
			else globals.GCshowErrorDialog('No está definida la conexión a la contabilidad en los Parametros',null,'Aceptar',null,null,null)
		}
		else
		{
			query = "select IdEjercicio,AgnoEjercicio,estadoejercicio from cMaestroFicheroEmpresa where IdEjercicio = '"+Empresa+"'"
			dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
			Empresa = dataset.getValue(1,1)
			var Estado = dataset.getValue(1,3)
			if(!Empresa)
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error("La Empresa Contable no existe.",'¡Error!')
				else globals.GCshowErrorDialog('La Empresa Contable no existe.',null,'Aceptar',null,null,null)
			}
			else if(Estado == 1)
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error("El Ejercio Contable esta cerrado.",'¡Error!')
				else globals.GCshowErrorDialog('El Ejercio Contable esta cerrado.',null,'Aceptar',null,null,null)
			}			
			else
			{
				var Agno = dataset.getValue(1,2)
				query = "select distinct year(fecha_cfa) from tbFacturaCabecera "+
						"where (eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
					") AND (ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
					"') AND (nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+
						") order by year(fecha_cfa) asc"
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				if(dataset.getValue(1,1) != Agno)
				{
					if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error("El año de alguna Factura no coincide con el año del ejercicio contable.",'¡Error!')
					else globals.GCshowErrorDialog('El año de alguna Factura no coincide con el año del ejercicio contable.',null,'Aceptar',null,null,null)
				}
				else if((globals.GCDesdeFecha.getFullYear() != Agno && forms.dlg_ActualizacionContableGC.AgruparFacturasContabilizar != 0))
				{
					if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error("La fecha del asiento a generar no coincide con el año del ejercicio contable.",'¡Error!')
					else globals.GCshowErrorDialog('La fecha del asiento a generar no coincide con el año del ejercicio contable.',null,'Aceptar',null,null,null)
				}
				else
				{
					if(forms.dlg_ActualizacionContableGC.AgruparFacturasContabilizar == 2)
					{
						AgruparFacturas(Empresa)						
					}
					else if(forms.dlg_ActualizacionContableGC.AgruparFacturasContabilizar == 0)
					{
						AgruparFacturasFecha(Empresa)						
					}
					else
					{
						NoAgruparFacturas(Empresa)
					}
					if(cont > 0 && Estado != 1) 
					{
						globals.Empresa = forms.dlg_ActualizacionContableGC.Ejercicio;
						globals.conexCONTA = con
						globals.DesdeAsiento = desdeasiento;
						globals.HastaAsiento = hastaasiento;
						globals.GCCriterios = 1;
						globals.PendActualizar = 0;
						globals.DetallarIva = 1;
						forms.FrmFacturasGC.situcontacolor()
						application.getWindow('Actualizacion Contable').hide();
						globals.GCenableBgElements();
						
						forms.FrmFacturasGC.onDataChangefechconta()
						
						//globals.btn_runJasperReportDiarioAsientos()
						
						forms.dlg_ActualizacionCarteraCobrosGC.DesdeEjer = desdeejer;
						forms.dlg_ActualizacionCarteraCobrosGC.HastaEjer = hastaejer;
						forms.dlg_ActualizacionCarteraCobrosGC.DesdeSer = desdeser;
						forms.dlg_ActualizacionCarteraCobrosGC.HastaSer = hastaser;
						forms.dlg_ActualizacionCarteraCobrosGC.DesdeNup = desdenfact;
						forms.dlg_ActualizacionCarteraCobrosGC.HastaNup = hastanfact;
						
						//setup the method to execute when the dialog closes
						//globals.GCdialog_performMethod = 'forms.FrmFacturasGC.sub_asientos()'
						
						
						globals.GCshowDialogActualizacionCarteraCobros('Actualizar Cartera de Cobros', null, null, null, null, null, null, null, null, null);
						
						
					}
					else
					{
						globals.GCshowInfoDialog('Ninguna Factura por contabilizar con el filtro introducido',null,'Aceptar',null,null,null)
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
 * @properties={typeid:24,uuid:"4F6C8442-7A3F-4A1A-8501-5ACA5495DB3D"}
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
 * @properties={typeid:24,uuid:"5591ED81-4253-4A7B-82C9-7D7063D49FF2"}
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(unused)
 */
function AgruparFacturas(E) {
	if(!globals.GCDesdeFecha) globals.GCDesdeFecha = new Date();
	var fech = utils.dateFormat(globals.GCDesdeFecha,'dd-MM-yyyy');
	globals.GCDesdeFecha = utils.parseDate(fech,'dd-MM-yyyy');
	
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
		hastanfact = 999999999
	}
	
	var query = "select a.ID,a.impbre_cfa,a.depp_cfa,a.piva_cfa,a.cuotaiva_cfa,a.impbie_cfa,a.clie_cfa,b.DescCliente,"+
	"a.impnee_cfa,a.eje_cfa,a.ser_cfa,a.nup_cfa,a.fecha_cfa,B.CuentaContable,B.CuentaContableVentas,a.fechcobro_cfa,"+
	"a.piva2_cfa,a.cuotaiva2_cfa,a.impbie2_cfa,a.piva3_cfa,a.cuotaiva3_cfa,a.impbie3_cfa,a.impgtosfinan,a.gtosfinan_cfa,"+
	"a.pirpf, a.impirpf,a.tipofacturasii, a.tipooperacionsii,a.sujetaexentaivasii,a.fraoriginal,a.causarect,B.pais,"+
	"a.impre,a.impre2,a.impre3,a.xml_enviado_tbai "+
	"from tbFacturaCabecera AS a LEFT JOIN tbMaestroClientes AS B ON "+
	"a.clie_cfa = b.IdCliente "+
	"where (a.eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
	") AND (a.ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
	"') AND (a.nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+") AND (a.situconta IS NULL OR a.situconta = '') "+
	"AND (a.impnee_cfa != 0) "+
	"ORDER BY a.eje_cfa,a.ser_cfa,a.nup_cfa";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
	
	var rows = dataset.getMaxRowIndex();
	
	if(rows > 0)
	{
		try{
			NuevoAsiento(E)
			desdeasiento = idasiento;
			hastaasiento = idasiento+1;
			
			//cabecera
			var vSet = databaseManager.getFoundSet(con, 'casientocontablecabecera')  
					  
					//load record by ID in foundset  
					//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
					var record = vSet.getRecord(vSet.newRecord());
					record.id = application.getUUID()
					record.idasiento = idasiento;
					record.idejercicio = E;
					var MesTexto = utils.dateFormat(globals.GCDesdeFecha, 'MMMM yyyy');	
					record.descasiento = 'FACTURAS EMITIDAS ' + MesTexto.toUpperCase()
					record.fechaasiento = globals.GCDesdeFecha;
					record.situacion = 0;
					
					databaseManager.saveData(record);
					
			
			
			var iva = 0;
			//var iva2 = 0;
			//var iva3 = 0;
			var ventas = 0;
			var impdto = 0;
			for(var i=1;i<=rows;i++)
			{
				var id = dataset.getValue(i,1)
				fech = utils.dateFormat( dataset.getValue(i,13),'dd-MM-yyyy')
				var FechaFra = utils.parseDate(fech,'dd-MM-yyyy')
				var cli = dataset.getValue(i,7);
				var cuentacli = dataset.getValue(i,14);
				if(cuentacli == null || cuentacli == '') cuentacli = '43'+utils.numberFormat(cli,'000000')
				query = "select DescCuentaContable "+
				"FROM dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + cuentacli +"'";
				var dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var desccuentacli = dataset2.getValue(1,1);
				var cuentaventas = dataset.getValue(i,15);
				if(cuentaventas == null || cuentaventas == '') cuentaventas = '70500000';
				var Fra = "F:"+dataset.getValue(i,10)+utils.numberFormat(dataset.getValue(i,12),'00000')+dataset.getValue(i,11)+
						  " "+utils.dateFormat(dataset.getValue(i,13),'ddMMyyyy')+" "+utils.dateFormat(dataset.getValue(i,16),'ddMMyyyy');
						  //Fra = "F:"/*+dataset.getValue(i,10)*/+utils.numberFormat(dataset.getValue(i,12),'00000')
				var Fra2 = "F:"+dataset.getValue(i,10)+utils.numberFormat(dataset.getValue(i,12),'00000')+dataset.getValue(i,11);
				var tipoiva = dataset.getValue(i,4);
				var impbr = dataset.getValue(i,2);
				if(tipoiva == null) tipoiva = 0;
				var baseiva1 = dataset.getValue(i,6)
				var cuotaiva1 = dataset.getValue(i,5)
				var baseiva2 = dataset.getValue(i,19)
				var cuotaiva2 = dataset.getValue(i,18)
				var baseiva3 = dataset.getValue(i,22)
				var cuotaiva3 = dataset.getValue(i,21)
				//MIro a ver si tiene descuento por pronto pago
				var porcdto = dataset.getValue(i,3)
				if(porcdto)
				{
					impdto += impdto = /*baseiva1*/globals.GCROUND(impbr * porcdto * 0.01,2)			
				}
				//Miro a ver si tiene gastos financieros
				var gtosfinan = dataset.getValue(i,23)
				var porcgtosfinan = dataset.getValue(i,24)
				
				//Miro a ver si tiene retenciones
				var preten = dataset.getValue(i,25)
				var impreten = dataset.getValue(i,26)
				//Miro datos del SII
				var tipofacturasii = dataset.getValue(i,27)
				var tipooperacionsii = dataset.getValue(i,28)
				var sujetaexentaivasii = dataset.getValue(i,29)
				var fraoriginal = dataset.getValue(i,30)
				var causarect = dataset.getValue(i,31)
				var pais = dataset.getValue(i,32)
				 
				// MIro la cuenta IVA 477 de la empresa contable
				
				query = "select CuentaContable from ctbCuentaContable "+
						"where IdEjercicio = '"+E+"' and CuentaContable like '477%' "+
						"and (ClaveDesglose is null or ClaveDesglose = 0)"	
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var cuentaiva = dataset2.getValue(1,1)
				if(cuentaiva == null) cuentaiva = '47700000';	
				//var cuentaiva = '477'+utils.numberFormat(tipoiva,'00000')	
				var tipoiva2 = dataset.getValue(i,17);
				/*if(tipoiva2 != null)
				{
					var cuentaiva2 = '477'+utils.numberFormat(tipoiva2,'00000')	
				}*/
				var tipoiva3 = dataset.getValue(i,20);
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
				var impre1 = dataset.getValue(i,33);
				var impre2 = dataset.getValue(i,34);
				var impre3 = dataset.getValue(i,35);
				var xmlenviadotbai = dataset.getValue(i,36)
				
				iva += dataset.getValue(i,5)
				var Importebruto = dataset.getValue(i,2)
				var Importeneto = dataset.getValue(i,9)
				ventas += Importebruto
				
				NuevoAsientolinea(E)
				
				rawData = null;
				pdfname = null;
				
				if(forms.dlg_ActualizacionContableGC.GenerarPDF == 1)
				{
					var DEJER = dataset.getValue(i,10);
					var DSER = dataset.getValue(i,11);
					var DNUP = dataset.getValue(i,12);
					var HEJER = dataset.getValue(i,10);
					var HSER = dataset.getValue(i,11);
					var HNUP = dataset.getValue(i,12);
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
				record = vSet.getRecord(vSet.newRecord());
				record.id = application.getUUID()
				record.idejercicio = E;
				record.idasiento = idasiento;
				record.idasientolinea = idasientolinea;
				record.fechaasiento = globals.GCDesdeFecha;
				record.cuentacontable = cuentacli;
				record.desccuentacontable = desccuentacli;
				record.importedebe = dataset.getValue(i,9);
				record.importehaber = null;
				record.concepto = Fra;
				if(pais == 'ES' || pais == '' || pais == null)
				{
					record.idtipofactura = 1;					
				}
				else if(globals.GCPaisesUE.indexOf(pais) >= 0)
				{
					record.idtipofactura = 2;		
				}
				else
				{
					record.idtipofactura = 4;		
				}
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
				if(gtosfinan) record.importegtosfinan = gtosfinan;
				record.fechadocumento = FechaFra;
				record.numfactura = Fra2;
				record.cuentaiva = cuentaiva;
				record.cuentacontrapartida = cuentaventas;
				record.docupdf = rawData;
				record.filename = pdfname;
				record.tipofacturasii = tipofacturasii;
				record.tipooperacionsii = tipooperacionsii;
				record.sujetaexentaivasii = sujetaexentaivasii;
				record.claveoperacionsii = '01';
				record.pirpf = preten;
				record.impirpf = impreten;
				if(fraoriginal && causarect)
				{
					record.tipofrarectsii = 'S';
					record.baseivarectsii = baseiva1 + baseiva2 + baseiva3;
					record.cuotaivarectsii = cuotaiva1 + cuotaiva2 + cuotaiva3;
					record.nfrarectsii = fraoriginal;
					record.fechafrarectsii = FechaFra;
				}
				if(xmlenviadotbai) record.xml_enviado_tbai = xmlenviadotbai;
				
				cont = 1;
				
				databaseManager.saveData(record);
				
				var vSetFacturasCli = databaseManager.getFoundSet(con, 'ctbfacturasclientes')  
				
				vSetFacturasCli.newRecord();
				vSetFacturasCli.id = application.getUUID()			
				vSetFacturasCli.idejercicio = E;
				vSetFacturasCli.cuentacontable = cuentacli;
				vSetFacturasCli.numfactura = Fra2;
				var fechfra = utils.dateFormat(FechaFra,'dd-MM-yyyy')
				vSetFacturasCli.fechafactura = utils.parseDate(fechfra,'dd-MM-yyyy');
				vSetFacturasCli.importeneto = Importeneto;
				vSetFacturasCli.contrapartida = cuentaventas;
				vSetFacturasCli.cuentacargoiva = cuentaiva;
				vSetFacturasCli.porciva1 = tipoiva;
				vSetFacturasCli.porciva2 = tipoiva2;
				vSetFacturasCli.porciva3 = tipoiva3;
				vSetFacturasCli.baseiva1 = baseiva1;
				vSetFacturasCli.baseiva2 = baseiva2;
				vSetFacturasCli.baseiva3 = baseiva3;
				vSetFacturasCli.cuotaiva1 = cuotaiva1;
				vSetFacturasCli.cuotaiva2 = cuotaiva2;
				vSetFacturasCli.cuotaiva3 = cuotaiva3;
				vSetFacturasCli.importebruto = Importebruto;
				vSetFacturasCli.descfactura = Fra;
				vSetFacturasCli.situacionconta = 'C';
				vSetFacturasCli.docupdf = rawData;
				vSetFacturasCli.filename = pdfname;
				vSetFacturasCli.porcretirpf = preten;
				vSetFacturasCli.retirpf = impreten;
				if(gtosfinan) 
				{
					vSetFacturasCli.gtosfinan = gtosfinan;
					vSetFacturasCli.porcgtosfinan = porcgtosfinan;
				}
				databaseManager.saveData(vSetFacturasCli);
			}
			query = "select MIN(a.eje_cfa),MIN(a.ser_cfa),MIN(a.nup_cfa),MAX(a.eje_cfa),MAX(a.ser_cfa),MAX(a.nup_cfa) "+
			"from tbFacturaCabecera AS a "+
			"where (a.eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
			") AND (a.ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
			"') AND (a.nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+") AND (a.situconta IS NULL OR a.situconta = '')";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var concepto = 'FACTURACION '+/*dataset.getValue(1,1)+*/
			utils.numberFormat(dataset.getValue(1,3),'00000')+/*dataset.getValue(1,2)+*/' '+
			/*dataset.getValue(1,4)+*/utils.numberFormat(dataset.getValue(1,6),'00000')/*+
			dataset.getValue(1,5)*/
			
			//Miro a ver si tiene dto por pronto pago
			if(impdto != 0)
			{
				query = "select CuentaContable,DescCuentaContable from ctbCuentaContable "+
						"where IdEjercicio = '"+E+"' and CuentaContable like '706%' "+
						"and (ClaveDesglose is null or ClaveDesglose = 0)"	
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var cuentadtopp = dataset2.getValue(1,1)
				var desccuentadtopp = dataset2.getValue(1,2)
				if(cuentadtopp == null) 
				{
					cuentadtopp = '70600000'
					desccuentadtopp = 'DESCUENTO VENTAS POR PRONTO PAGO'
				}	
				vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
				  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				record = vSet.getRecord(vSet.newRecord());
				record.id = application.getUUID()
				record.idejercicio = E;
				record.idasiento = idasiento;
				NuevoAsientolinea(E)
				record.idasientolinea = idasientolinea;
				record.fechaasiento = globals.GCDesdeFecha;
				record.cuentacontable = cuentadtopp;
				record.desccuentacontable = desccuentadtopp;
				record.importedebe = impdto;
				record.importehaber = null;
				record.concepto = concepto;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
				
				databaseManager.saveData(record);
			}
			
			//Miro a ver si tiene recargo financiero
			query = "select ISNULL(SUM(impgtosfinan),0) "+
				"from tbFacturaCabecera "+ 
				"where (eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
				") AND (ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
				"') AND (nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+") AND (situconta IS NULL OR situconta = '')";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			gtosfinan = dataset.getValue(1,1)
			if(gtosfinan != 0) 
			{
				query = "select CuentaContable,DescCuentaContable from ctbCuentaContable "+
						"where IdEjercicio = '"+E+"' and CuentaContable like '759%' "+
						"and (ClaveDesglose is null or ClaveDesglose = 0)"	
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var cuentagtosfinan = dataset2.getValue(1,1)
				var desccuentagtosfinan = dataset2.getValue(1,2)
				if(cuentagtosfinan == null) 
				{
					cuentagtosfinan = '75900000'
					desccuentagtosfinan = 'RECARGO FINANCIERO'
				}	
				vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
				  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				record = vSet.getRecord(vSet.newRecord());
				record.id = application.getUUID()
				record.idejercicio = E;
				record.idasiento = idasiento;
				NuevoAsientolinea(E)
				record.idasientolinea = idasientolinea;
				record.fechaasiento = globals.GCDesdeFecha;
				record.cuentacontable = cuentagtosfinan;
				record.desccuentacontable = desccuentagtosfinan;
				record.importedebe = null;
				record.importehaber = gtosfinan;
				record.concepto = concepto;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
				
				databaseManager.saveData(record);
			}
			
				
			query = "select ISNULL(SUM(cuotaiva_cfa),0), piva_cfa,ISNULL(SUM(cuotaiva2_cfa),0), piva2_cfa,"+
					"ISNULL(SUM(cuotaiva3_cfa),0), piva3_cfa "+
						"from tbFacturaCabecera "+ 
						"where (eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
						") AND (ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
						"') AND (nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+") AND (situconta IS NULL OR situconta = '') "+
						"group by piva_cfa,piva2_cfa,piva3_cfa";
						
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
				//iva2 = dataset.getValue(i,3)
				//var piva2 = dataset.getValue(i,4)
				/*if(piva2)
				{
					cuentaiva2 = '477'+utils.numberFormat(piva2,'00000')	
					query = "select DescCuentaContable "+
					"FROM dbo.ctbCuentaContable "+
					"WHERE IdEjercicio = '" + E + "' AND "+
					"CuentaContable = '" + cuentaiva2 +"'";
					dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
					var desccuentaiva2 = dataset2.getValue(1,1);
				}
				iva3 = dataset.getValue(i,5)
				var piva3 = dataset.getValue(i,6)
				if(piva3)
				{
					cuentaiva3 = '477'+utils.numberFormat(piva3,'00000')	
					query = "select DescCuentaContable "+
					"FROM dbo.ctbCuentaContable "+
					"WHERE IdEjercicio = '" + E + "' AND "+
					"CuentaContable = '" + cuentaiva3 +"'";
					dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
					var desccuentaiva3 = dataset2.getValue(1,1);
				}*/
				
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
					record.importedebe = null;
					record.importehaber = iva;
					record.concepto = concepto;
					record.situacion = '...';
					record.situacioncobro = '...';
					record.idusuario = globals.GClogin_usuario;
					cont = 1;
					
					databaseManager.saveData(record);
				}
				/*if(iva2 != 0)
				{				
					vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
					  
					//load record by ID in foundset  
					//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
					record = vSet.getRecord(vSet.newRecord());
					record.idejercicio = E;
					record.idasiento = idasiento;
					record.idasientolinea = idasientolinea;
					record.fechaasiento = globals.GCDesdeFecha;
					record.cuentacontable = cuentaiva2;
					record.desccuentacontable = desccuentaiva2;
					record.importedebe = null;
					record.importehaber = iva2;
					record.concepto = concepto;
					record.situacion = '...';
					record.situacioncobro = '...';
					record.idusuario = globals.GClogin_usuario;
					cont = 1;
					
					databaseManager.saveData(record);
				}
				if(iva3 != 0)
				{				
					vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
					  
					//load record by ID in foundset  
					//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
					record = vSet.getRecord(vSet.newRecord());
					record.idejercicio = E;
					record.idasiento = idasiento;
					record.idasientolinea = idasientolinea;
					record.fechaasiento = globals.GCDesdeFecha;
					record.cuentacontable = cuentaiva3;
					record.desccuentacontable = desccuentaiva3;
					record.importedebe = null;
					record.importehaber = iva3;
					record.concepto = concepto;
					record.situacion = '...';
					record.situacioncobro = '...';
					record.idusuario = globals.GClogin_usuario;
					cont = 1;
					
					databaseManager.saveData(record);
				}*/
			}
			query = "SELECT b.CuentaContableVentas,isnull(sum(a.impbre_cfa),0) AS TotalBaseImp "+/*isnull(sum(a.impbie_cfa),0)+isnull(sum(a.impbie2_cfa),0)+isnull(sum(a.impbie3_cfa),0)*/
					"from tbFacturaCabecera as a left join tbMaestroClientes as b on "+ 
					"a.clie_cfa = b.IDCliente "+
					"where (eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
					") AND (ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
					"') AND (nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+") AND (a.situconta IS NULL OR a.situconta = '') "+
					"group by b.CuentaContableVentas";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				cuentaventas = dataset.getValue(i,1)
				if(cuentaventas == null) cuentaventas = '70500000';
				ventas = dataset.getValue(i,2)
				if(ventas < 0) cuentaventas = '70800000';
				query = "select DescCuentaContable "+
				"FROM dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + cuentaventas +"'";
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
				record.cuentacontable = cuentaventas;
				record.desccuentacontable = desccuentaventas;
				record.importedebe = null;
				record.importehaber = ventas;
				record.concepto = concepto;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
				
				databaseManager.saveData(record);
			}
			
			databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
			databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.casientocontablecabecera_to_casientocontablelinea,-1)
			
			
			query = "select ID "+
			"from tbFacturaCabecera "+
			"where (eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
			") AND (ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
			"') AND (nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+") AND (situconta IS NULL OR situconta = '') "+
			"ORDER BY eje_cfa,ser_cfa,nup_cfa";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
			
			rows = dataset.getMaxRowIndex();
			for(i=1;i<=rows;i++)
			{
				id = dataset.getValue(i,1)
				var result = forms.FrmFacturasGC.foundset.selectRecord(id)
				var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.FrmFacturasGC.foundset.getSize())
					{
						return;
					}
					forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
					result = forms.FrmFacturasGC.foundset.selectRecord(id);
				}
				forms.FrmFacturasGC.foundset.situconta = 'C'
				var fechconta = utils.dateFormat(new Date(),'dd-MM-yyyy')
				forms.FrmFacturasGC.foundset.fechconta_cfa = utils.parseDate(fechconta,'dd-MM-yyyy')
				databaseManager.saveData()
			}
		}
		catch(e){
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(e.toString(),'¡Error!')
			else globals.GCshowErrorDialog(e.toString(), null, null, null, null, null)
		}
	}
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {String} E
 *
 * @properties={typeid:24,uuid:"1D18EC13-D64B-4724-8E12-0C747AD76A21"}
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
		hastanfact = 999999999
	}
	
	var query = "select a.ID,a.impbre_cfa,a.depp_cfa,a.piva_cfa,a.cuotaiva_cfa,a.impbie_cfa,a.clie_cfa,b.DescCliente,"+
				"a.impnee_cfa,a.eje_cfa,a.ser_cfa,a.nup_cfa,a.fecha_cfa,B.CuentaContable,B.CuentaContableVentas,a.fechcobro_cfa,"+
				"a.piva2_cfa,a.cuotaiva2_cfa,a.impbie2_cfa,a.piva3_cfa,a.cuotaiva3_cfa,a.impbie3_cfa,a.impgtosfinan,a.gtosfinan_cfa,"+
				"a.pirpf, a.impirpf,a.tipofacturasii, a.tipooperacionsii,a.sujetaexentaivasii,a.fraoriginal,a.causarect,B.pais,"+
				"a.impre,a.impre2,a.impre3,a.xml_enviado_tbai "+
				"from tbFacturaCabecera AS a LEFT JOIN tbMaestroClientes AS B ON "+
				"a.clie_cfa = b.IdCliente "+
				"where (a.eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
				") AND (a.ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
				"') AND (a.nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+") AND (a.situconta IS NULL OR a.situconta = '') "+
				"AND (a.impnee_cfa != 0) "+
				"ORDER BY a.eje_cfa,a.ser_cfa,a.nup_cfa";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
	
	var rows = dataset.getMaxRowIndex();
	var iva = 0
	var ventas = 0
	var impbr = 0;
	var fecha = null;
	var fechaant = null;
	var impdto = 0;
	try{
	    for(var i=1;i<=rows;i++)
		{
			fecha = utils.dateFormat(dataset.getValue(i,13),'dd-MM-yyyy');
			var uuid = dataset.getValue(i,1)
			impbr = dataset.getValue(i,2)
			var FechaFra = utils.parseDate(fecha,'dd-MM-yyyy')
			var cli = dataset.getValue(i,7);
			var DEJER = dataset.getValue(i,10);
			var DSER = dataset.getValue(i,11);
			var DNUP = dataset.getValue(i,12);
			var HEJER = dataset.getValue(i,10);
			var HSER = dataset.getValue(i,11);
			var HNUP = dataset.getValue(i,12);
			var cuentacli = dataset.getValue(i,14);
			if(!cuentacli) cuentacli = '43'+utils.numberFormat(cli,'000000')
			query = "select DescCuentaContable "+
			"FROM dbo.ctbCuentaContable "+
			"WHERE IdEjercicio = '" + E + "' AND "+
			"CuentaContable = '" + cuentacli +"'";
			var dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
			var desccuentacli = dataset2.getValue(1,1);
			var cventas = dataset.getValue(i,15);
			if(cventas == null || cventas == '') cventas = '70500000';
			if(ventas < 0) cventas = '70800000';
			var Fra = "F:"+dataset.getValue(i,10)+utils.numberFormat(dataset.getValue(i,12),'00000')+dataset.getValue(i,11)+
			  " "+utils.dateFormat(dataset.getValue(i,13),'ddMMyyyy')+" "+utils.dateFormat(dataset.getValue(i,16),'ddMMyyyy');
			var Fra2 = "F:"+dataset.getValue(i,10)+utils.numberFormat(dataset.getValue(i,12),'00000')+dataset.getValue(i,11);
			var tipoiva = dataset.getValue(i,4);
			if(tipoiva == null) tipoiva = 0;
			query = "select CuentaContable from ctbCuentaContable "+
			"where IdEjercicio = '"+E+"' and CuentaContable like '477%' "+
			"					and (ClaveDesglose is null or ClaveDesglose = 0)"	
			dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
			var civa = dataset2.getValue(1,1)
			if(civa == null) civa = '47700000';
			//var civa = '477'+utils.numberFormat(tipoiva,'00000')	
			var tipoiva2 = dataset.getValue(i,17);
			if(tipoiva2 != null)
			{
				//var civa2 = '477'+utils.numberFormat(tipoiva2,'00000')	
			}
			var tipoiva3 = dataset.getValue(i,20);
			if(tipoiva3 != null)
			{
				//var civa3 = '477'+utils.numberFormat(tipoiva3,'00000')	
			}
			
			var baseiva1 = dataset.getValue(i,6)
				baseiva1 = globals.GCROUND(baseiva1,2)
			var cuotaiva1 = dataset.getValue(i,5)
				cuotaiva1 = globals.GCROUND(cuotaiva1,2)
			var baseiva2 = dataset.getValue(i,19)
			var cuotaiva2 = dataset.getValue(i,18)
			var baseiva3 = dataset.getValue(i,22)
			var cuotaiva3 = dataset.getValue(i,21)
			//MIro a ver si tiene descuento por pronto pago
			var porcdto = dataset.getValue(i,3)
			if(porcdto)
			{
				impdto = /*baseiva1*/globals.GCROUND(impbr * porcdto * 0.01,2)			
			}
			//Miro a ver si tiene gastos financieros
			var gtosfinan = dataset.getValue(i,23)
			if(gtosfinan == null) gtosfinan = 0;
			var porcgtosfinan = dataset.getValue(i,24)
			
			//Miro a ver si tiene retenciones
			var preten = dataset.getValue(i,25)
			var impreten = dataset.getValue(i,26)
			//Miro datos del SII
			var tipofacturasii = dataset.getValue(i,27)
			var tipooperacionsii = dataset.getValue(i,28)
			var sujetaexentaivasii = dataset.getValue(i,29)	
			var fraoriginal = dataset.getValue(i,30)
			var causarect = dataset.getValue(i,31)
			var pais = dataset.getValue(i,32)
				
			var Importebruto = dataset.getValue(i,2)
			var Importeneto = dataset.getValue(i,9)
			
			//Recargo Equivalencia
			var impre1 = dataset.getValue(i,33);
			var impre2 = dataset.getValue(i,34);
			var impre3 = dataset.getValue(i,35);
			var xmlenviadotbai = dataset.getValue(i,36);
				
			//if(fecha != fechaant)
			//{
				NuevoAsiento(E);
				if(i == 1)	desdeasiento = idasiento;
				hastaasiento = idasiento+1;
		       
				//cabecera
				vSet = databaseManager.getFoundSet(con, 'casientocontablecabecera')  
				  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				var record = vSet.getRecord(vSet.newRecord());
				record.id = application.getUUID()
		        record.idasiento = idasiento;
		        record.idejercicio = E;
		        record.fechaasiento = utils.parseDate(fecha,'dd-MM-yyyy');
		        var MesTexto = utils.dateFormat(globals.GCDesdeFecha, 'MMMM yyyy');	
				record['descasiento'] = 'FACTURAS EMITIDAS ' + MesTexto.toUpperCase()
				record.situacion = 0;
				
				databaseManager.saveData(record);
			//}
			
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
			if(pais == 'ES' || pais == '' || pais == null)
			{
				record2.idtipofactura = 1;					
			}
			else if(globals.GCPaisesUE.indexOf(pais) >= 0)
			{
				record2.idtipofactura = 2;		
			}
			else
			{
				record2.idtipofactura = 4;		
			}
			record2.situacion = '...';
			record2.situacioncobro = '...';
			record2.idusuario = globals.GClogin_usuario;
			record2.porciva1 = tipoiva;
			record2.baseiva1 = baseiva1;
			ventas += baseiva1
			record2.cuotaiva1 = cuotaiva1;
			record2.pirpf = preten;
			record2.impirpf = impreten;
			if(tipoiva2 != null)
			{
				record2.porciva2 = tipoiva2;
				record2.baseiva2 = baseiva2;
				ventas += baseiva2
				record2.cuotaiva2 = cuotaiva2;
			}
			if(tipoiva3 != null)
			{
				record2.porciva3 = tipoiva3;
				record2.baseiva3 = baseiva3;
				ventas += baseiva3
				record2.cuotaiva3 = cuotaiva3;
			}
			if(gtosfinan) record2.importegtosfinan = gtosfinan;
			record2.fechadocumento = FechaFra;
			record2.numfactura = Fra2;
			record2.cuentaiva = civa;
			record2.cuentacontrapartida = cventas;
			record2.docupdf = rawData;
			record2.filename = pdfname;
			record2.tipofacturasii = tipofacturasii;
			record2.tipooperacionsii = tipooperacionsii;
			record2.sujetaexentaivasii = sujetaexentaivasii;
			record2.claveoperacionsii = '01';
			if(fraoriginal && causarect)
			{
				record2.tipofrarectsii = 'S';
				record2.baseivarectsii = baseiva1 + baseiva2 + baseiva3;
				record2.cuotaivarectsii = cuotaiva1 + cuotaiva2 + cuotaiva3;
				record2.nfrarectsii = fraoriginal;
				record2.fechafrarectsii = FechaFra;
			}
			if(xmlenviadotbai) record2.xml_enviado_tbai = xmlenviadotbai
			
			cont = 1;
			
			databaseManager.saveData(record2);
			
			var vSetFacturasCli = databaseManager.getFoundSet(con, 'ctbfacturasclientes')  
			
			vSetFacturasCli.newRecord();
			vSetFacturasCli.id = application.getUUID()
			vSetFacturasCli.idejercicio = E;
			vSetFacturasCli.cuentacontable = cuentacli;
			vSetFacturasCli.numfactura = Fra2;
			var fechfra = utils.dateFormat(FechaFra,'dd-MM-yyyy')
			vSetFacturasCli.fechafactura = utils.parseDate(fechfra,'dd-MM-yyyy');
			vSetFacturasCli.importeneto = Importeneto;
			vSetFacturasCli.contrapartida = cventas;
			vSetFacturasCli.cuentacargoiva = civa;
			vSetFacturasCli.porciva1 = tipoiva;
			vSetFacturasCli.porciva2 = tipoiva2;
			vSetFacturasCli.porciva3 = tipoiva3;
			vSetFacturasCli.baseiva1 = baseiva1;
			vSetFacturasCli.baseiva2 = baseiva2;
			vSetFacturasCli.baseiva3 = baseiva3;
			vSetFacturasCli.cuotaiva1 = cuotaiva1;
			vSetFacturasCli.cuotaiva2 = cuotaiva2;
			vSetFacturasCli.cuotaiva3 = cuotaiva3;
			vSetFacturasCli.importebruto = Importebruto;
			vSetFacturasCli.descfactura = Fra;
			vSetFacturasCli.situacionconta = 'C';
			vSetFacturasCli.docupdf = rawData;
			vSetFacturasCli.filename = pdfname;
			vSetFacturasCli.porcretirpf = preten;
			vSetFacturasCli.retirpf = impreten;
			if(gtosfinan) 
			{
				vSetFacturasCli.gtosfinan = gtosfinan;
				vSetFacturasCli.porcgtosfinan = porcgtosfinan;
			}
			databaseManager.saveData(vSetFacturasCli);
			
			//Miro a ver si tiene dto por pronto pago
			if(impdto != 0)
			{
				query = "select CuentaContable,DescCuentaContable from ctbCuentaContable "+
						"where IdEjercicio = '"+E+"' and CuentaContable like '706%' "+
						"and (ClaveDesglose is null or ClaveDesglose = 0)"	
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var cuentadtopp = dataset2.getValue(1,1)
				var desccuentadtopp = dataset2.getValue(1,2)
				if(cuentadtopp == null) 
				{
					cuentadtopp = '70600000'
					desccuentadtopp = 'DESCUENTO VENTAS POR PRONTO PAGO'
				}	
				vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
				  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				record = vSet.getRecord(vSet.newRecord());
				record.id = application.getUUID()
				record.idejercicio = E;
				record.idasiento = idasiento;
				NuevoAsientolinea(E)
				record.idasientolinea = idasientolinea;
				record.fechaasiento = globals.GCDesdeFecha;
				record.cuentacontable = cuentadtopp;
				record.desccuentacontable = desccuentadtopp;
				record.importedebe = impdto;
				record.importehaber = null;
				record.concepto = Fra;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
				
				databaseManager.saveData(record);
			}
			
			//Miro a ver si tiene recargo financiero
			if(gtosfinan != 0) 
			{
				query = "select CuentaContable,DescCuentaContable from ctbCuentaContable "+
						"where IdEjercicio = '"+E+"' and CuentaContable like '759%' "+
						"and (ClaveDesglose is null or ClaveDesglose = 0)"	
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var cuentagtosfinan = dataset2.getValue(1,1)
				var desccuentagtosfinan = dataset2.getValue(1,2)
				if(cuentagtosfinan == null) 
				{
					cuentagtosfinan = '75900000'
					desccuentagtosfinan = 'RECARGO FINANCIERO'
				}	
				vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
				  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				record = vSet.getRecord(vSet.newRecord());
				record.id = application.getUUID()
				record.descasiento 
				record.idejercicio = E;
				record.idasiento = idasiento;
				NuevoAsientolinea(E)
				record.idasientolinea = idasientolinea;
				record.fechaasiento = globals.GCDesdeFecha;
				record.cuentacontable = cuentagtosfinan;
				record.desccuentacontable = desccuentagtosfinan;
				record.importedebe = null;
				record.importehaber = gtosfinan;
				record.concepto = Fra;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
				
				databaseManager.saveData(record);
			}
			
			
			NuevoAsientolinea(E)
							
							
			
			if(cuotaiva1 != 0)
			{
				query = "select DescCuentaContable "+
				"FROM dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + civa +"'";
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var desccuentaiva = dataset2.getValue(1,1);
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
				record.importehaber = globals.GCROUND(cuotaiva1+cuotaiva2+cuotaiva3,2);
				record.concepto = Fra;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
								
				databaseManager.saveData(record);
			}
			/*if(cuotaiva2 != 0 && cuotaiva2 != null)
			{
				query = "select DescCuentaContable "+
				"FROM dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + civa2 +"'";
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var desccuentaiva2 = dataset2.getValue(1,1);
				vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
						  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				record = vSet.getRecord(vSet.newRecord());
				record.idejercicio = E;
				record.idasiento = idasiento;
				record.idasientolinea = idasientolinea;
				record.fechaasiento = utils.parseDate(fecha,'dd-MM-yyyy');
				record.cuentacontable = civa2;
				record.desccuentacontable = desccuentaiva2;
				record.importedebe = null;
				record.importehaber = cuotaiva2;
				record.concepto = Fra;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
								
				databaseManager.saveData(record);
			}
			if(cuotaiva3 != 0 && cuotaiva3 != null)
			{
				query = "select DescCuentaContable "+
				"FROM dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + civa3 +"'";
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var desccuentaiva3 = dataset2.getValue(1,1);
				vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
						  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				record = vSet.getRecord(vSet.newRecord());
				record.idejercicio = E;
				record.idasiento = idasiento;
				record.idasientolinea = idasientolinea;
				record.fechaasiento = utils.parseDate(fecha,'dd-MM-yyyy');
				record.cuentacontable = civa3;
				record.desccuentacontable = desccuentaiva3;
				record.importedebe = null;
				record.importehaber = cuotaiva3;
				record.concepto = Fra;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
								
				databaseManager.saveData(record);
			}*/
			
			
			query = "select DescCuentaContable "+
					"FROM dbo.ctbCuentaContable "+
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
			record.importehaber = globals.GCROUND(impbr,2)//globals.GCROUND(baseiva1+baseiva2+baseiva3,2)/*ventas*/;
			record.concepto = Fra;
			record.situacion = '...';
			record.situacioncobro = '...';
			record.idusuario = globals.GClogin_usuario;
			cont = 1;
							
			databaseManager.saveData(record);
			
			databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
			databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.casientocontablecabecera_to_casientocontablelinea,-1)
			
			
			var result = forms.FrmFacturasGC.foundset.selectRecord(uuid)
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
			var fechconta = utils.dateFormat(new Date(),'dd-MM-yyyy')
			forms.FrmFacturasGC.foundset.fechconta_cfa = utils.parseDate(fechconta,'dd-MM-yyyy')
			databaseManager.saveData()
							
	        		
	       
		}     
	}
	catch(e){
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(e.toString(),'¡Error!')
		else globals.GCshowErrorDialog(e.toString(), null, null, null, null, null)
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
 * @properties={typeid:24,uuid:"8C5277FB-2E23-4F63-B2BB-EFD82A3E26E9"}
 */
function AgruparFacturasFecha(E) {
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
				"a.impnee_cfa,a.eje_cfa,a.ser_cfa,a.nup_cfa,a.fecha_cfa,B.CuentaContable,B.CuentaContableVentas,a.fechcobro_cfa,"+
				"a.piva2_cfa,a.cuotaiva2_cfa,a.impbie2_cfa,a.piva3_cfa,a.cuotaiva3_cfa,a.impbie3_cfa,a.impgtosfinan,a.gtosfinan_cfa,"+
				"a.pirpf, a.impirpf,a.tipofacturasii, a.tipooperacionsii,a.sujetaexentaivasii,a.fraoriginal,a.causarect,B.pais,"+
				"a.impre,a.impre2,a.impre3,a.xml_enviado_tbai "+
				"from tbFacturaCabecera AS a LEFT JOIN tbMaestroClientes AS B ON "+
				"a.clie_cfa = b.IdCliente "+
				"where (a.eje_cfa BETWEEN " + desdeejer + " AND "+ hastaejer+
				") AND (a.ser_cfa BETWEEN '" + desdeser +"' AND '"+hastaser+
				"') AND (a.nup_cfa BETWEEN " + desdenfact+" AND "+hastanfact+") AND (a.situconta IS NULL OR a.situconta = '') "+
				"AND (a.impnee_cfa != 0) "+
				"ORDER BY a.fecha_cfa,a.eje_cfa,a.ser_cfa,a.nup_cfa";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
	
	var rows = dataset.getMaxRowIndex();
	var iva = 0
	var ventas = 0
	var impbr = 0;
	var fecha = null;
	var fechaant = null;
	var impdto = 0;
	var FechaFra = null;
	var FechaFraAnt = null;
	try{
	    for(var i=1;i<=rows;i++)
		{
			fecha = utils.dateFormat(dataset.getValue(i,13),'dd-MM-yyyy');
			var uuid = dataset.getValue(i,1)
			FechaFra = utils.parseDate(fecha,'dd-MM-yyyy')
			if(FechaFraAnt != FechaFra)
			{
				iva = 0
				ventas = 0
				impbr = 0;
				impdto = 0;
			}
			impbr = dataset.getValue(i,2);
			var cli = dataset.getValue(i,7);
			var DEJER = dataset.getValue(i,10);
			var DSER = dataset.getValue(i,11);
			var DNUP = dataset.getValue(i,12);
			var HEJER = dataset.getValue(i,10);
			var HSER = dataset.getValue(i,11);
			var HNUP = dataset.getValue(i,12);
			var cuentacli = dataset.getValue(i,14);
			if(!cuentacli) cuentacli = '43'+utils.numberFormat(cli,'000000')
			query = "select DescCuentaContable "+
			"FROM dbo.ctbCuentaContable "+
			"WHERE IdEjercicio = '" + E + "' AND "+
			"CuentaContable = '" + cuentacli +"'";
			var dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
			var desccuentacli = dataset2.getValue(1,1);
			var cventas = dataset.getValue(i,15);
			if(cventas == null || cventas == '') cventas = '70500000';
			if(ventas < 0) cventas = '70800000';
			var Fra = "F:"+dataset.getValue(i,10)+utils.numberFormat(dataset.getValue(i,12),'00000')+dataset.getValue(i,11)+
			  " "+utils.dateFormat(dataset.getValue(i,13),'ddMMyyyy')+" "+utils.dateFormat(dataset.getValue(i,16),'ddMMyyyy');
			var Fra2 = "F:"+dataset.getValue(i,10)+utils.numberFormat(dataset.getValue(i,12),'00000')+dataset.getValue(i,11);
			var tipoiva = dataset.getValue(i,4);
			if(tipoiva == null) tipoiva = 0;
			query = "select CuentaContable from ctbCuentaContable "+
			"where IdEjercicio = '"+E+"' and CuentaContable like '477%' "+
			"					and (ClaveDesglose is null or ClaveDesglose = 0)"	
			dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
			var civa = dataset2.getValue(1,1)
			if(civa == null) civa = '47700000';
			//var civa = '477'+utils.numberFormat(tipoiva,'00000')	
			var tipoiva2 = dataset.getValue(i,17);
			if(tipoiva2 != null)
			{
				//var civa2 = '477'+utils.numberFormat(tipoiva2,'00000')	
			}
			var tipoiva3 = dataset.getValue(i,20);
			if(tipoiva3 != null)
			{
				//var civa3 = '477'+utils.numberFormat(tipoiva3,'00000')	
			}
			
			var baseiva1 = dataset.getValue(i,6)
				baseiva1 = globals.GCROUND(baseiva1,2)
			var cuotaiva1 = dataset.getValue(i,5)
				cuotaiva1 = globals.GCROUND(cuotaiva1,2)
			var baseiva2 = dataset.getValue(i,19)
			var cuotaiva2 = dataset.getValue(i,18)
			var baseiva3 = dataset.getValue(i,22)
			var cuotaiva3 = dataset.getValue(i,21)
			//MIro a ver si tiene descuento por pronto pago
			var porcdto = dataset.getValue(i,3)
			if(porcdto)
			{
				impdto = /*baseiva1*/globals.GCROUND(impbr * porcdto * 0.01,2)			
			}
			//Miro a ver si tiene gastos financieros
			var gtosfinan = dataset.getValue(i,23)
			if(gtosfinan == null) gtosfinan = 0;
			var porcgtosfinan = dataset.getValue(i,24)
			
			//Miro a ver si tiene retenciones
			var preten = dataset.getValue(i,25)
			var impreten = dataset.getValue(i,26)
			//Miro datos del SII
			var tipofacturasii = dataset.getValue(i,27)
			var tipooperacionsii = dataset.getValue(i,28)
			var sujetaexentaivasii = dataset.getValue(i,29)	
			var fraoriginal = dataset.getValue(i,30)
			var causarect = dataset.getValue(i,31)
			var pais = dataset.getValue(i,32)
			//Recargo Equivalencia
			var impre1 = dataset.getValue(i,33);
			var impre2 = dataset.getValue(i,34);
			var impre3 = dataset.getValue(i,35);
			var xmlenviadotbai = dataset.getValue(i,36)
					
			var Importebruto = dataset.getValue(i,2)
			var Importeneto = dataset.getValue(i,9)
			
			if(FechaFraAnt != FechaFra)
			{
				NuevoAsiento(E);
				if(i == 1)	desdeasiento = idasiento;
				hastaasiento = idasiento+1;
		       
				//cabecera
				vSet = databaseManager.getFoundSet(con, 'casientocontablecabecera')  
				  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				var record = vSet.getRecord(vSet.newRecord());
				record.id = application.getUUID()
		        record.idasiento = idasiento;
		        record.idejercicio = E;
		        record.fechaasiento = utils.parseDate(fecha,'dd-MM-yyyy');
		        record['descasiento'] = 'FACTURAS EMITIDAS ' +utils.dateFormat(FechaFra,'dd/MM/yyyy');
				record.situacion = 0;
				
				databaseManager.saveData(record);
				
				
			}
			
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
			if(pais == 'ES' || pais == '' || pais == null)
			{
				record2.idtipofactura = 1;					
			}
			else if(globals.GCPaisesUE.indexOf(pais) >= 0)
			{
				record2.idtipofactura = 2;		
			}
			else
			{
				record2.idtipofactura = 4;		
			}
			record2.situacion = '...';
			record2.situacioncobro = '...';
			record2.idusuario = globals.GClogin_usuario;
			record2.porciva1 = tipoiva;
			record2.baseiva1 = baseiva1;
			ventas += baseiva1
			record2.cuotaiva1 = cuotaiva1;
			if(tipoiva2 != null)
			{
				record2.porciva2 = tipoiva2;
				record2.baseiva2 = baseiva2;
				ventas += baseiva2
				record2.cuotaiva2 = cuotaiva2;
			}
			if(tipoiva3 != null)
			{
				record2.porciva3 = tipoiva3;
				record2.baseiva3 = baseiva3;
				ventas += baseiva3
				record2.cuotaiva3 = cuotaiva3;
			}
			if(gtosfinan) record2.importegtosfinan = gtosfinan;
			record2.fechadocumento = FechaFra;
			record2.numfactura = Fra2;
			record2.cuentaiva = civa;
			record2.cuentacontrapartida = cventas;
			record2.docupdf = rawData;
			record2.filename = pdfname;
			record2.tipofacturasii = tipofacturasii;
			record2.tipooperacionsii = tipooperacionsii;
			record2.sujetaexentaivasii = sujetaexentaivasii;
			record2.claveoperacionsii = '01';
			record2.pirpf = preten;
			record2.impirpf = impreten;
			if(fraoriginal && causarect)
			{
				record2.tipofrarectsii = 'S';
				record2.baseivarectsii = baseiva1 + baseiva2 + baseiva3;
				record2.cuotaivarectsii = cuotaiva1 + cuotaiva2 + cuotaiva3;
				record2.nfrarectsii = fraoriginal;
				record2.fechafrarectsii = FechaFra;
			}
			if(xmlenviadotbai) record2.xml_enviado_tbai = xmlenviadotbai;
			
			cont = 1;
			
			databaseManager.saveData(record2);
			
			var vSetFacturasCli = databaseManager.getFoundSet(con, 'ctbfacturasclientes')  
			
			vSetFacturasCli.newRecord();
			vSetFacturasCli.id = application.getUUID()
			vSetFacturasCli.idejercicio = E;
			vSetFacturasCli.cuentacontable = cuentacli;
			vSetFacturasCli.numfactura = Fra2;
			var fechfra = utils.dateFormat(FechaFra,'dd-MM-yyyy')
			vSetFacturasCli.fechafactura = utils.parseDate(fechfra,'dd-MM-yyyy');
			vSetFacturasCli.importeneto = Importeneto;
			vSetFacturasCli.contrapartida = cventas;
			vSetFacturasCli.cuentacargoiva = civa;
			vSetFacturasCli.porciva1 = tipoiva;
			vSetFacturasCli.porciva2 = tipoiva2;
			vSetFacturasCli.porciva3 = tipoiva3;
			vSetFacturasCli.baseiva1 = baseiva1;
			vSetFacturasCli.baseiva2 = baseiva2;
			vSetFacturasCli.baseiva3 = baseiva3;
			vSetFacturasCli.cuotaiva1 = cuotaiva1;
			vSetFacturasCli.cuotaiva2 = cuotaiva2;
			vSetFacturasCli.cuotaiva3 = cuotaiva3;
			vSetFacturasCli.importebruto = Importebruto;
			vSetFacturasCli.descfactura = Fra;
			vSetFacturasCli.situacionconta = 'C';
			vSetFacturasCli.docupdf = rawData;
			vSetFacturasCli.filename = pdfname;
			vSetFacturasCli.porcretirpf = preten;
			vSetFacturasCli.retirpf = impreten;
			if(gtosfinan) 
			{
				vSetFacturasCli.gtosfinan = gtosfinan;
				vSetFacturasCli.porcgtosfinan = porcgtosfinan;
			}
			databaseManager.saveData(vSetFacturasCli);
			
			//Miro a ver si tiene dto por pronto pago
			if(impdto != 0)
			{
				query = "select CuentaContable,DescCuentaContable from ctbCuentaContable "+
						"where IdEjercicio = '"+E+"' and CuentaContable like '706%' "+
						"and (ClaveDesglose is null or ClaveDesglose = 0)"	
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var cuentadtopp = dataset2.getValue(1,1)
				var desccuentadtopp = dataset2.getValue(1,2)
				if(cuentadtopp == null) 
				{
					cuentadtopp = '70600000'
					desccuentadtopp = 'DESCUENTO VENTAS POR PRONTO PAGO'
				}	
				vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
				  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				record = vSet.getRecord(vSet.newRecord());
				record.id = application.getUUID()
				record.idejercicio = E;
				record.idasiento = idasiento;
				NuevoAsientolinea(E)
				record.idasientolinea = idasientolinea;
				record.fechaasiento = globals.GCDesdeFecha;
				record.cuentacontable = cuentadtopp;
				record.desccuentacontable = desccuentadtopp;
				record.importedebe = impdto;
				record.importehaber = null;
				record.concepto = Fra;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
				
				databaseManager.saveData(record);
			}
			
			//Miro a ver si tiene recargo financiero
			if(gtosfinan != 0) 
			{
				query = "select CuentaContable,DescCuentaContable from ctbCuentaContable "+
						"where IdEjercicio = '"+E+"' and CuentaContable like '759%' "+
						"and (ClaveDesglose is null or ClaveDesglose = 0)"	
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var cuentagtosfinan = dataset2.getValue(1,1)
				var desccuentagtosfinan = dataset2.getValue(1,2)
				if(cuentagtosfinan == null) 
				{
					cuentagtosfinan = '75900000'
					desccuentagtosfinan = 'RECARGO FINANCIERO'
				}	
				vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
				  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				record = vSet.getRecord(vSet.newRecord());
				record.id = application.getUUID()
				record.descasiento 
				record.idejercicio = E;
				record.idasiento = idasiento;
				NuevoAsientolinea(E)
				record.idasientolinea = idasientolinea;
				record.fechaasiento = globals.GCDesdeFecha;
				record.cuentacontable = cuentagtosfinan;
				record.desccuentacontable = desccuentagtosfinan;
				record.importedebe = null;
				record.importehaber = gtosfinan;
				record.concepto = Fra;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
				
				databaseManager.saveData(record);
			}
			
			
			NuevoAsientolinea(E)
							
							
			
			if(cuotaiva1 != 0)
			{
				query = "select DescCuentaContable "+
				"FROM dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + civa +"'";
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var desccuentaiva = dataset2.getValue(1,1);
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
				record.importehaber = globals.GCROUND(cuotaiva1+cuotaiva2+cuotaiva3,2);
				record.concepto = Fra;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
								
				databaseManager.saveData(record);
			}
			/*if(cuotaiva2 != 0 && cuotaiva2 != null)
			{
				query = "select DescCuentaContable "+
				"FROM dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + civa2 +"'";
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var desccuentaiva2 = dataset2.getValue(1,1);
				vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
						  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				record = vSet.getRecord(vSet.newRecord());
				record.idejercicio = E;
				record.idasiento = idasiento;
				record.idasientolinea = idasientolinea;
				record.fechaasiento = utils.parseDate(fecha,'dd-MM-yyyy');
				record.cuentacontable = civa2;
				record.desccuentacontable = desccuentaiva2;
				record.importedebe = null;
				record.importehaber = cuotaiva2;
				record.concepto = Fra;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
								
				databaseManager.saveData(record);
			}
			if(cuotaiva3 != 0 && cuotaiva3 != null)
			{
				query = "select DescCuentaContable "+
				"FROM dbo.ctbCuentaContable "+
				"WHERE IdEjercicio = '" + E + "' AND "+
				"CuentaContable = '" + civa3 +"'";
				dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
				var desccuentaiva3 = dataset2.getValue(1,1);
				vSet = databaseManager.getFoundSet(con, 'casientocontablelinea')  
						  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				record = vSet.getRecord(vSet.newRecord());
				record.idejercicio = E;
				record.idasiento = idasiento;
				record.idasientolinea = idasientolinea;
				record.fechaasiento = utils.parseDate(fecha,'dd-MM-yyyy');
				record.cuentacontable = civa3;
				record.desccuentacontable = desccuentaiva3;
				record.importedebe = null;
				record.importehaber = cuotaiva3;
				record.concepto = Fra;
				record.situacion = '...';
				record.situacioncobro = '...';
				record.idusuario = globals.GClogin_usuario;
				cont = 1;
								
				databaseManager.saveData(record);
			}*/
			
			
			query = "select DescCuentaContable "+
					"FROM dbo.ctbCuentaContable "+
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
			record.importehaber = globals.GCROUND(impbr,2)//globals.GCROUND(baseiva1+baseiva2+baseiva3,2)/*ventas*/;
			record.concepto = Fra;
			record.situacion = '...';
			record.situacioncobro = '...';
			record.idusuario = globals.GClogin_usuario;
			cont = 1;
							
			databaseManager.saveData(record);
			
			databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
			databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.casientocontablecabecera_to_casientocontablelinea,-1)
			
			
			var result = forms.FrmFacturasGC.foundset.selectRecord(uuid)
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
			var fechconta = utils.dateFormat(new Date(),'dd-MM-yyyy')
			forms.FrmFacturasGC.foundset.fechconta_cfa = utils.parseDate(fechconta,'dd-MM-yyyy')
			databaseManager.saveData()
							
	        		
	       FechaFraAnt = FechaFra;
		}     
	}
	catch(e){
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(e.toString(),'¡Error!')
		else globals.GCshowErrorDialog(e.toString(), null, null, null, null, null)
	}    
	
}

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"6FF983E1-EB7E-4AA2-BDA5-EE834917D09D",variableType:8}
 */
var desdeasiento;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"8B3AFA5C-CBF7-4AF5-A68C-8B3D4D2912C6",variableType:8}
 */
var hastaasiento;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"336E0A0C-1BCA-4BFE-B90E-A16019FF90C4",variableType:8}
 */
var idasiento;

/**
 * Callback method when form is destroyed.
 *
 * @param {String} E
 *
 * @properties={typeid:24,uuid:"639352ED-8369-4593-9270-B761701EEEC8"}
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
 * @properties={typeid:35,uuid:"DCFBB735-B07D-4C32-985B-3E2EC9E9A17E",variableType:8}
 */
var idasientolinea;

/**
 * Callback method when form is destroyed.
 *
 * @param {String} E
 *
 * @properties={typeid:24,uuid:"0C3256F2-768C-4ECD-9C1C-E91B1B5C44C1"}
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
 * @properties={typeid:35,uuid:"96C037E9-219A-4F80-8252-BA8020E74707",variableType:-4}
 */
var rawData;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DF7A9CE2-47D0-4BF1-92E7-BA89FF0538DF"}
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
 * @properties={typeid:24,uuid:"198EB491-77AA-4EF5-A2F3-4FE18DEE4482"}
 * @SuppressWarnings(deprecated)
 */
function ImpresionPDF(DEJER,DSER,DNUP,HEJER,HSER,HNUP,DCLI,HCLI) {
	var server_name = globals.GCconex
	
	var query = "select fechaenviofichero,cqr from tbFacturaCabecera where eje_cfa = "+DEJER+" and nup_cfa = "+DNUP;
	var dataset = databaseManager.getDataSetByQuery(server_name, query, null, 1);
	var fechenvfich = dataset.getValue(1,1);
	var cqr = dataset.getValue(1,2);
	
	if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai && fechenvfich && cqr) var reportName = 'FacturaVentaTBAIGC.jrxml';
	else reportName = 'FacturaVentaGC.jrxml';
	
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
		pdfname = 'Fra' + DEJER.toString() + utils.numberFormat(DNUP,'00000') + DSER +'.pdf';
	
	}
	catch (e){
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
 * @properties={typeid:24,uuid:"78DACA9E-D926-449C-94D6-8D45D26AEC7C"}
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
