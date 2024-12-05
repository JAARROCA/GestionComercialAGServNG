/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"A33CFEC4-E47D-4386-A109-6233BAD5F01F",variableType:8}
 */
var cont = null;

/**
 *
 * @properties={typeid:24,uuid:"A6682EAF-CFA9-4563-93CE-AF5A07BED666"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	
	application.getWindow('C1958').hide();
	globals.GCenableBgElements();
}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C8E8DBFD-6BCA-4664-BC9A-3D6CCEFF0123",variableType:8}
 */
var error;

/**
 *
 * @properties={typeid:24,uuid:"A2FB931A-8D36-4925-BDB8-B0E30C73C142"}
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(unused)
 */
function btn_ok()
{
	application.getWindow('C1958').hide();
	globals.GCenableBgElements();
	
	/*var d = globals.FechaCargoAbono.getDate()
	var m = globals.FechaCargoAbono.getMonth() + 1
	var a = globals.FechaCargoAbono.getFullYear()
	d = Fech(d) 
	m = Fech(m)*/        	
	var Fecha = utils.dateFormat(globals.FechaCargoAbono,'yyyyMMdd')//a.toString()+m.toString()+d.toString()
	var Fecha2 = utils.dateFormat(globals.FechaCargoAbono,'dd-MM-yyyy')//d.toString()+'-'+m.toString()+'-'+a.toString() 
		
	if(globals.CobroPago == 1)
	{
		if(forms.dlg_RemesasC19SEPAGC.FormatoFichero == 0)
		{
			error = 0;
			ComprobarDatosCuentas(Fecha2)
			if(error == 0)
			{
				cont = 0;
				GenerarXML(Fecha2)
				
				if(cont != 0)
				{
					var msg = '¿Desea enviar avisos de cobro de la remesa por EMail?'
					
					//tell it what method to execute when dialog closes
					var methd = 'forms.dialogRemesasC19SEPAGC.sub_envioAviso()'
				
					//show the tabpanel "dialog"
					globals.GCshowQuestionDialog(msg, methd, 'No', 'Si', null, null);
				}
			}
		}
		else
		{
			query = "SELECT A.[FechaVencimiento],A.[CuentaContable]"+ 
			",A.[ImporteVencimiento],B.[DescCuentaContable],A.[IdFactura]"+
			",A.[FechaFactura],A.[FormaPago],C.[denom_fp],A.[CuentaBanco]"+
			",D.[IDBanco],D.[Sucursal],D.[DigitoControl],D.[NCuenta]"+
			",A.[Observaciones],A.[CobroPago],A.[TipoDeudor],A.[TipoAdeudo] "+
			"FROM [CCobrosPagos] A INNER JOIN [ctbCuentaContable] B ON "+
			"(A.IdEjercicio = B.IdEjercicio AND A.CuentaContable = B.CuentaContable) "+
			"LEFT JOIN [formpago] C ON "+ 
			"(A.IdEjercicio = C.IdEjercicio AND A.FormaPago = C.codig_fp) "+
			"LEFT JOIN [cMaestroBancosCtasCargo] D ON "+ 
			"(A.IdEjercicio = D.IdEjercicio AND A.CuentaBanco = D.CodigoCtaBanco) "+
			"WHERE  A.[Situacion] = 'R'"+
			" AND A.[FechaRemesa] ='"+Fecha2+"' AND "+
			"[CuentaBanco] ='"+globals.CuentaBanco+"' ORDER BY A.CuentaContable,A.[FechaVencimiento]";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
			var n = dataset.getMaxRowIndex()
			error = 0;
			if(n>0)
			{
			var f = plugins.file.createTempFile(globals.FechaFichero,'.dat');
					var fechasistema = new Date()
		        	var d = fechasistema.getDate()
					var m = fechasistema.getMonth() + 1
					var a = fechasistema.getFullYear()
					var h = fechasistema.getHours()	
					var min = fechasistema.getMinutes()
					var sec = fechasistema.getSeconds()
					var mili = fechasistema.getMilliseconds()
					d = Fech(d)
		        	m = Fech(m)
		        	h = Fech(h)
					min = Fech(min)
					sec = Fech(sec)	
					var fechacreacion = a.toString() + m + d
					fechasistema = a.toString() + m + d + h + min + sec + mili.toString()+'00'
		        	var query = "select [empresa],[cif],[Direccion],[CodPostal],[Poblacion],[Provincia] "+
					"from [parametrosaplicacion] ";
		        	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var DescEmpresa = dataset.getValue(1, 1)
					if(DescEmpresa == null) error +=1
		        	var CIF = dataset.getValue(1, 2)
					if(CIF == null) error +=1
					var Dir = dataset.getValue(1, 3)
					if(Dir == null) error +=1
					var CP = dataset.getValue(1, 4)
					if(CP == null) error +=1
					var Pob = dataset.getValue(1, 5)
					if(Pob == null) error +=1
					var Prov = dataset.getValue(1, 6)
					if(Prov == null) error +=1
					
					query = "select [IDBanco],[Sucursal],[Sufijo],[Pais],[NCuentaIBAN] from [cMaestroBancosCtasCargo] where " + 
					" [CodigoCtaBanco] = '" + globals.CuentaBanco + "'"
		        	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var IDBanco = dataset.getValue(1, 1)
					if(IDBanco == null) error +=1
					var Sucursal = dataset.getValue(1, 2)
					if(Sucursal == null) error +=1
					var Sufijo = dataset.getValue(1, 3)
					if(Sufijo == null)
					{
						Sufijo = '000'
					}
					var Pais = dataset.getValue(1, 4) 
					Pais = Pais.toUpperCase()			
					if(Pais == null) error +=1
					var IB = dataset.getValue(1, 5) 
					if(IB == null) error +=1
					//var SWIFT = dataset.getValue(1, 6) 
					var DC = CalculoDC(CIF,Pais)
					if(DC == null) error +=1
					
		        	
					//cabecera presentador
		        	var CodigoRegistro = "01";
		        	var VersionCuaderno = "19143";//'19154'
		        	var NumeroDato = "001";
		        	var CodigoPresentador = Pais + DC + Sufijo +CIF
		        	var linea = PreparaLinea(CodigoRegistro, 2, 'Left');
		        	linea = linea + PreparaLinea(VersionCuaderno, 5, 'Left');
		        	linea = linea + PreparaLinea(NumeroDato, 3, 'Left');
		        	linea = linea + PreparaLinea(CodigoPresentador, 35, 'Left'); 
		        	linea = linea + PreparaLinea(DescEmpresa, 70, 'Left');
		        	linea = linea + PreparaLinea(fechacreacion, 8, 'Left');
		        	linea = linea + PreparaLinea2('PRE', 3, 'Left');
		        	linea = linea + PreparaLinea2(fechasistema.toString(), 19, 'Left');
		        	linea = linea + PreparaLinea2(CIF, 13, 'Left');
		        	linea = linea + PreparaLinea2(IDBanco, 4, 'Left');
		        	linea = linea + PreparaLinea2(Sucursal, 4, 'Left');
		        	linea = linea + PreparaLinea('', 434, 'Left');        	
		        	InsertaLinea(linea,f)
					
					query = "SELECT A.[FechaVencimiento],A.[CuentaContable]"+ 
					",A.[ImporteVencimiento],B.[DescCuentaContable],A.[IdFactura]"+
					",A.[FechaFactura],A.[FormaPago],C.[denom_fp],A.[CuentaBanco]"+
					",D.[IDBanco],D.[Sucursal],D.[DigitoControl],D.[NCuenta]"+
					",A.[Observaciones],A.[CobroPago],A.[TipoDeudor],A.[TipoAdeudo] "+
					"FROM [CCobrosPagos] A INNER JOIN [ctbCuentaContable] B ON "+
					"(A.IdEjercicio = B.IdEjercicio AND A.CuentaContable = B.CuentaContable) "+
					"LEFT JOIN [formpago] C ON "+ 
					"(A.IdEjercicio = C.IdEjercicio AND A.FormaPago = C.codig_fp) "+
					"LEFT JOIN [cMaestroBancosCtasCargo] D ON "+ 
					"(A.IdEjercicio = D.IdEjercicio AND A.CuentaBanco = D.CodigoCtaBanco) "+
					"WHERE  A.[Situacion] = 'R'"+
					" AND A.[IdEjercicio] = '"+globals.Empresa+"' AND "+
					"A.[FechaRemesa] ='"+Fecha2+"'  AND "+
					"[CuentaBanco] ='"+globals.CuentaBanco+"' ORDER BY A.[FechaVencimiento] ASC";
					dataset = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 99999999)
					n = dataset.getMaxRowIndex()
					
					var TotalRegistros = 0;  
					var TotalRegistrosAdeudos = 0;			
					var ImpTotal = 0;
					var ImpTotalAcreedor = 0;
					var FechaVencimiento = null;
					var FechaVencimientoSig = null;
					var FechaVencimientoAnt = null;
		        	var NumAdeudos = 0;
					for(var i=1;i<=n;i++)
		        	{
		        		FechaVencimiento = dataset.getValue(i,1)
						d = FechaVencimiento.getDate()
						m = FechaVencimiento.getMonth() + 1
						a = FechaVencimiento.getFullYear()
						d = Fech(d)
						m = Fech(m)
						FechaVencimiento = a.toString()+m+d;
		        		if(FechaVencimiento != FechaVencimientoAnt)
		        		{
							//CABECERA DE ACREEDOR        	
							CodigoRegistro = '02';
				        	VersionCuaderno = '19143';//'19154'
				        	NumeroDato = '002'
				        	TotalRegistrosAdeudos += 1;
				        	linea = PreparaLinea(CodigoRegistro, 2, 'Left');
				        	linea = linea + PreparaLinea(VersionCuaderno, 5, 'Left');
				        	linea = linea + PreparaLinea(NumeroDato, 3, 'Left');
				        	linea = linea + PreparaLinea(CodigoPresentador, 35, 'Left'); 
				        	linea = linea + PreparaLinea(FechaVencimiento, 8, 'Left');
				        	linea = linea + PreparaLinea(DescEmpresa, 70, 'Left');
				        	linea = linea + PreparaLinea(Dir, 50, 'Left');
				        	linea = linea + PreparaLinea(CP+' '+Pob, 50, 'Left');
				        	linea = linea + PreparaLinea(Prov, 40, 'Left');
				        	linea = linea + PreparaLinea(Pais, 2, 'Left');
				        	linea = linea + PreparaLinea(IB, 34, 'Left');
				        	linea = linea + PreparaLinea('', 301, 'Left');
				        	InsertaLinea(linea,f)
		        		}
						
						//REGISTRO 1º ADEUDO INDIVIDUAL OBLIGATORIO
					
		        	
		        		var tipodeudor = dataset.getValue(i,16)
						var tipoadeudo = dataset.getValue(i,17)
						
		        		query = "SELECT [desccliente],[Direccion],[CodPostal],[Poblacion],[Provincia]"+
								",[Pais],[CodigoIBAN],[SWIFT],[CIF],RefMandatoSEPA,FechaFirmaMandato  "+    
								"FROM [tbmaestroclientes] "+
								"WHERE [IdCliente] = "+dataset.getValue(i,2);
						var dataset2 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 1)
						var SWIFTdeudor = dataset2.getValue(1,8)
						if(SWIFTdeudor == null) error +=1
						var IBANdeudor = dataset2.getValue(1,7)
						if(IBANdeudor == null) error +=1
						var Paisdeudor = dataset2.getValue(1,6)
						if(Paisdeudor == null) error +=1
						var CIFdeudor = dataset2.getValue(1,9)
						if(CIFdeudor == null) error +=1
						var refmandato = dataset2.getValue(1,10)
						if(refmandato == null) 
						{
							refmandato = CIFdeudor+CIF;
							var fechamandato = utils.dateFormat(new Date(),'yyyyMMdd');							
						}
						else
						{
							fechamandato = utils.dateFormat(dataset2.getValue(1,11),'yyyyMMdd');	
						}
						CodigoRegistro = '03';
			        	VersionCuaderno = '19143';//'19154'
			        	NumeroDato = '003'
			        	var Imp = dataset.getValue(i,3)				
						ImpTotal += Imp;
			        	ImpTotalAcreedor += Imp;
						Imp = utils.numberFormat(Imp, '000000000.00'); 
						Imp = Imp.replace(',','')	
						NumAdeudos += 1;
						var Facturas = dataset.getValue(i,5)
						TotalRegistrosAdeudos += 1;
			        	linea = PreparaLinea(CodigoRegistro, 2, 'Left');
			        	linea = linea + PreparaLinea(VersionCuaderno, 5, 'Left');
			        	linea = linea + PreparaLinea(NumeroDato, 3, 'Left');
			        	linea = linea + PreparaLinea(Facturas, 35, 'Left');	   
			        	linea = linea + PreparaLinea(refmandato, 35, 'Left');	//Referencia única del mandato 
			        	if(tipoadeudo == '1')
			        	{
			        		var tipadeud = 'FNAL'
			        	}
			        	else if(tipoadeudo == '2')
			        	{
			        		tipadeud = 'FRST'
			        	}
			        	else if(tipoadeudo == '3')
			        	{
			        		tipadeud = 'OOFF'
			        	}
			        	else 
			        	{
			        		tipadeud = 'RCUR'
			        	}
			        	linea = linea + PreparaLinea(tipadeud, 4, 'Left');//'FNAL','FRST','OOFF','RCUR'
			        	linea = linea + PreparaLinea('', 4, 'Left');
			        	linea = linea + PreparaLinea2(Imp, 11, 'Right');
			        	linea = linea + PreparaLinea(fechamandato, 8, 'Left');//Fecha mandato
			        	linea = linea + PreparaLinea(SWIFTdeudor, 11, 'Left');//SWIFT deudor
			        	linea = linea + PreparaLinea(dataset2.getValue(1,1), 70, 'Left');//Nombre del deudor
			        	linea = linea + PreparaLinea(dataset2.getValue(1,2), 50, 'Left');//Dirección deudor
			        	linea = linea + PreparaLinea(dataset2.getValue(1,3) + ' ' +dataset2.getValue(1,4), 50, 'Left');//CP y Localidad deudor
			        	linea = linea + PreparaLinea(dataset2.getValue(1,5), 40, 'Left');//provincia deudor
			        	linea = linea + PreparaLinea(Paisdeudor, 2, 'Left');//pais deudor	        	
			        	
			        	linea = linea + PreparaLinea(tipodeudor, 1, 'Left');
			        	if(tipodeudor == '1')
			        	{
			        		var Identi = 'A'+SWIFTdeudor
			        	}
			        	else
			        	{
			        		Identi = 'J'+SWIFTdeudor
			        	}
			        	linea = linea + PreparaLinea(Identi, 36, 'Left');//tipo deudor +swift
			        	linea = linea + PreparaLinea('', 35, 'Left');
			        	linea = linea + PreparaLinea('A', 1, 'Left');//'A' es IBAN 'B' es CCC
			        	linea = linea + PreparaLinea(IBANdeudor, 34, 'Left');//IBAN deudor
			        	linea = linea + PreparaLinea('', 4, 'Left');//Propósito del adeudo
			        	linea = linea + PreparaLinea('', 140, 'Left');//Concepto
			        	linea = linea + PreparaLinea('', 19, 'Left');//Libre
			        	
			        	InsertaLinea(linea,f)
						FechaVencimientoSig = dataset.getValue(i+1,1)
						if(FechaVencimientoSig != null && FechaVencimientoSig != 'Undefined')
						{
							d = FechaVencimientoSig.getDate()
							m = FechaVencimientoSig.getMonth() + 1
							a = FechaVencimientoSig.getFullYear()
							d = Fech(d)
							m = Fech(m)
							FechaVencimientoSig = a.toString()+m+d;
						}
						if(FechaVencimientoSig != FechaVencimiento)
						{
							//REGISTROS DE TOTALES DE ACREEDOR POR FECHA DE COBRO
				        	CodigoRegistro = '04';
				        	TotalRegistrosAdeudos += 1;
				        	linea = PreparaLinea(CodigoRegistro, 2, 'Left');
				        	linea = linea + PreparaLinea(CodigoPresentador, 35, 'Left');
				        	linea = linea + PreparaLinea(FechaVencimiento, 8, 'Left');//Fecha Cobro		        	
				        	ImpTotalAcreedor = utils.numberFormat(ImpTotalAcreedor, '000000000000000.00'); 
				        	ImpTotalAcreedor = ImpTotalAcreedor.toString()
				        	ImpTotalAcreedor = ImpTotalAcreedor.replace(',','')
							linea = linea + PreparaLinea2(ImpTotalAcreedor.toString(), 17, 'Right');//Total de importes
				        	linea = linea + PreparaLinea2(NumAdeudos.toString(), 8, 'Right');//Número de adeudos
				        	linea = linea + PreparaLinea2(TotalRegistrosAdeudos.toString(), 10, 'Right');//Total de registros
				        	linea = linea + PreparaLinea('', 520, 'Left');//Libre
				        	InsertaLinea(linea,f)
							ImpTotalAcreedor = 0;		        	
				        	TotalRegistros += TotalRegistrosAdeudos;
				        	TotalRegistrosAdeudos = 0;
				        	NumAdeudos = 0;
						}
						FechaVencimientoAnt = FechaVencimiento;
		        	}
					
		        	
					//REGISTROS DE TOTALES DE ACREEDOR
		        	CodigoRegistro = '05';
		        	TotalRegistros += 1;
		        	linea = PreparaLinea(CodigoRegistro, 2, 'Left');
		        	linea = linea + PreparaLinea(CodigoPresentador, 35, 'Left');
		        	ImpTotal = utils.numberFormat(ImpTotal, '000000000000000.00'); 
		        	ImpTotal = ImpTotal.toString()
		        	ImpTotal = ImpTotal.replace(',','')
		        	linea = linea + PreparaLinea2(ImpTotal.toString(), 17, 'Right');//Total de importes
		        	linea = linea + PreparaLinea2(n.toString(), 8, 'Right');//Número de adeudos
		        	linea = linea + PreparaLinea2(TotalRegistros.toString(), 10, 'Right');//Total de registros
		        	linea = linea + PreparaLinea('', 528, 'Left');//Libre
		        	InsertaLinea(linea,f)
					
					//REGISTRO DE TOTALES GENERAL
		        	CodigoRegistro = '99';
		        	TotalRegistros += 2;//CABECERA PRESENTADOT Y TOTAL GENERAL
		        	linea = PreparaLinea(CodigoRegistro, 2, 'Left');
		        	linea = linea + PreparaLinea2(ImpTotal.toString(), 17, 'Right');//Total de importes
		        	linea = linea + PreparaLinea2(n.toString(), 8, 'Right');//Número de adeudos
		        	linea = linea + PreparaLinea2(TotalRegistros.toString(), 10, 'Right');//Total de registros
		        	linea = linea + PreparaLinea('', 563, 'Left');//Libre
		        	InsertaLinea(linea,f)
		        
				
		        var fcopy = plugins.file.createFile(globals.FicheroGenerar);
		        if (!fcopy.createNewFile())
		        {
		        	fcopy.deleteFile()
					fcopy = plugins.file.createFile(globals.FicheroGenerar);
		        }
		        plugins.file.copyFile(f, fcopy)
				if(error == 0)
				{
					plugins.file.openFile(fcopy)
				}
				
				var arg = new Array()
				arg[0] = 'true';
				arg[1] = 'false';
						
				Informe(arg);
				
				databaseManager.revertEditedRecords(forms.lst_EfectosPendientes2.foundset)
			
				
				
			}
		}  
	}
	else
	{
		if(forms.dlg_RemesasC19SEPAGC.FormatoFichero == 0)
		{
			error = 0;
			ComprobarDatosCuentas(Fecha2)
			if(error == 0)
			{
				GenerarXMLPagos(Fecha2)
			}
		}
		else
		{
			
		}
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {Array} arg
 *
 *
 * @properties={typeid:24,uuid:"8C2B1A9E-38B8-4C39-8273-2F0DC5D92408"}
 */
function Informe(arg) {
	var vSuccess = arg[0], // true if successfuly
	vIsAborted = arg[1] // true if the user cancelled the transfer
	
	

	if (vIsAborted == 'true') {
		// user hit the cancel button in a progress dialog
		return;
	}
	
	if (vSuccess == 'true' && error == 0) 
	{
		var methd = null;
		globals.GCshowInfoDialog('Fichero generado correctamente.',methd,'Aceptar',null,null,null);
		
		
	} 
	else 
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Error al generar el fichero. Pueden faltar datos fiscales.','¡Error!')
		else globals.GCshowErrorDialog('Error al generar el fichero. Pueden faltar datos fiscales.',null,'Aceptar',null,null,null)
	}
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"555FFB62-B64B-46D2-83EA-E27D409F8B98"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
	
}

/**
	 * Callback method when form is destroyed.
	 *
	 * @param {String} TEXTO
	 *
	 * @param {plugins.file.JSFile} FILE
	*
	 * @properties={typeid:24,uuid:"E5C91E21-A725-4724-9908-4BC52A5A053B"}
	 */
function InsertaLinea(TEXTO,FILE)
	{
		plugins.file.appendToTXTFile(FILE,TEXTO+'\n')   
	}

/**
	 * Callback method when form is destroyed.
	 *
	 * @param {String} FECHA
	 *
	 * @return {String}
	 * @properties={typeid:24,uuid:"0C842FB5-9245-4D25-9AD6-04F38C457B35"}
	 */
function Fech(FECHA)
	{
		if(FECHA<10)
		{
			FECHA = '0' + FECHA
		}
		else 
		{
			FECHA = FECHA.toString()
		}
		return FECHA
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
	 * @properties={typeid:24,uuid:"84C42AFC-2455-4844-9A92-FD083DC8841A"}
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
    
    if (ALINEACION == 'Left')
        return CAMPO + espacios;
    else
        return espacios + CAMPO;
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
 * @properties={typeid:24,uuid:"2F99F0B4-1095-4AD2-B5BA-0B185E04AE85"}
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

if (ALINEACION == 'Left')
    return CAMPO + espacios;
else
    return espacios + CAMPO;
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
 * @properties={typeid:24,uuid:"78294B16-1F3C-4ED6-9E80-9B8729D98171"}
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

if (ALINEACION == 'Left')
    return CAMPO + espacios;
else
    return espacios + CAMPO;
}

/**
 * Perform the element default action.
 *
 * @param {String} CC
 *
 * @param {String} Pais
 *
 * @return {Number}
 * @properties={typeid:24,uuid:"006C982B-A1D5-4376-A80C-E4C988F54905"}
 */
function CalculoDC(CC,Pais) {
	  
	//Limpiamos el numero de IBAN
	var account = CC
	account = account.toUpperCase();  //Todo a Mayus
	account = trim(account); //Quitamos blancos de principio y final.
	account  = account.replace(/\s/g, "");  //Quitamos blancos del medio.
	             
	var letra1,letra2,letra3,num1,num2,num3;
	var isbanaux;
	//var numeroSustitucion;
	             
	            //Generamos IBAN Temporal
	var codigopais = Pais.toUpperCase();
	             
	isbanaux = codigopais + '00' + account;
	  
	// Cambiamos las letras por numeros.
	letra1 = isbanaux.substring(0, 1);
	letra2 = isbanaux.substring(1, 2);
	letra3 = isbanaux.substring(4, 5);
	             
	num1 = getnumIBAN(letra1);
	num2 = getnumIBAN(letra2); 
	num3 = getnumIBAN(letra3); 
	             
	isbanaux = String(num1) + String(num2) + isbanaux.substr(2, isbanaux.length - 2); 
	isbanaux = isbanaux.substr(0,6) + String(num3) + isbanaux.substr(7);                
	// Movemos los 6 primeros caracteres al final de la cadena.         
	isbanaux = isbanaux.substr(6,isbanaux.length - 6) + isbanaux.substr(0,6);
	
	             
	//Calculamos el resto    
	
	var parte1 = isbanaux.substring(0,13)
	var parte2 = isbanaux.substring(13)
	var n = parte2.length
	var l = Digitos('1',n)
	var resto = ((parte1 % 97)*(l/*10000000000000*/ % 97) + (parte2 % 97)) % 97
	//var resto = isbanaux % 97;            
	var DC = 98 - resto;
	             
	return DC
	
	  
}

/**
* Perform the element default action.
*
* @param {String} myString
*
* @return {String}
 *
*
 * @properties={typeid:24,uuid:"3E234E72-2853-40A8-8336-764068F580E8"}
 */
function trim(myString)
{
	return myString.replace(/^\s+/g,'').replace(/\s+$/g,'');
}

/**
* Perform the element default action.
*
* @param {String} letra
*
*
* @return {Number}
* @AllowToRunInFind
*
 * @properties={typeid:24,uuid:"ACDD5364-C4E1-4805-9B4E-3812D544AE6C"}
 */
function getnumIBAN(letra)
{
	    var ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';     
	    return ls_letras.search(letra) + 10;
}

/**
 * Callback method when form is destroyed.
 * 
 * @param {String} CAMPO
 * 
 * @param {Number} LONGITUD
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"34316E0E-2758-433A-8DB2-4E4B10EBFA59"}
 */
function Digitos(CAMPO,LONGITUD)
{	
	var espacios = '0'
	var n = LONGITUD - CAMPO.length
	for(var i=1;i<=n;i++)
	{
		espacios = espacios + '0';
	}
    return (CAMPO + espacios);
}

/**
* Perform the element default action.
*
* @param {String} CodigoCuenta
*
*
* @return {String}
 * @AllowToRunInFind
*
*
 * @properties={typeid:24,uuid:"E9BEC4BF-1FA1-4DAD-BFE0-A6BA74625BB8"}
 */
function getSWIFT(CodigoCuenta)
{
	var bic = new String();
	for(var i=0;i<CB.length;i++)
	{
		if(CB[i] == CodigoCuenta)
		{
			bic =  sw[i]
			break;
		}
	}
	return bic;
	
}

/**
*
*
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"3B62727B-963B-4184-905F-5512D4579D87",variableType:-4}
 */
var CB = new Array('1478','1479','1480','1488','1491','1494','1497','1502','1505','1506','1508','1522','1524','1525','1534','1538','1545',
	'0147','0151','0160','0161','0164','0166','0169','0171','0177','0178','0195','0199','0203','0206','1452','1460','1485','0106','0107',
	'0108','0131','0144','0145','0149','0150','0152','0154','0155','0156','0159','0162','0163','0167','0168','0172','0174','0179','0180',
	'0190','0196','0197','0201','0212','0213','0218','1451','1453','1454','1457','1459','1462','1463','1464','1465','1466','1467','1468',
	'1469','1470','1471','1472','1473','1474','1475','0003','0009','0011','0024','0030','0031','0042','0043','0048','0049','0050','0059',
	'0061','0063','0065','0083','0069','0072','0078','0086','0087','0089','0095','0104','0200','0202','0205','0208','0216','0189','2024',
	'2073','0004','0016','0021','0036','0056','0076','0082','0088','0109','0111','8835','6852','1127','0118','0127','0182','0185','0198',
	'0215','0217','0224','0226','0227','0239','1490','0488','1004','1302','1544','2000','2013','2038','2048','2080','2085','2086','2090',
	'2095','2100','2103','2108','2010','2017','2030','2031','2032','2037','2040','2041','2043','2051','2052','2054','2056','2069','2071',
	'2074','2077','2081','2092','2094','2096','2098','2099','2101','2104','2105','2106','2045','3001','3005','3007','3008','3009','3016',
	'3017','3018','3020','3023','3063','3064','3066','3067','3070','3076','3078','3080','3081','3096','3098','3102','3104','3111','3112',
	'3113','3114','3115','3117','3118','3119','3121','3123','3127','3159','8512','1113','1116','1156','1168','1164','1000','0013','0015',
	'0019','0046','0057','0058','0073','0075','0081','0085','0094','0096','0097','0100','0101','0113','0121','0122','0125','0128','0129',
	'0130','0132','0133','0136','0137','0138','0142','0184','0186','0188','0209','0210','0211','0219','0220','0221','0223','0225','0228',
	'0229','0231','0232','0233','0234','0235','0236','0237','0238','0486','0487','0489','1001','2066','3021','3022','3025','3029','3035',
	'3045','3056','3058','3059','3060','3061','3062','3082','3083','3084','3085','3089','3092','3093','3094','3095','3105','3110','3128',
	'3130','3134','3135','3138','3140','3144','3146','3147','3150','3152','3157','3160','3161','3162','3165','3166','3174','3172','3179',
	'3181','3183','3186','3187','3189','3190','3191','8233','1182','1191','1193','1196','1197','1173','1199','1209','1210','1221','1222',
	'1224','1227','1231','1248','1233','1234','1236','1238','1239','1240','1241','1242','1245','1249','1251','1252','1255','1273');

/**
*
*
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"207F3D8F-1059-4990-A504-20267B1DA841",variableType:-4}
 */
var sw = new Array('MLIBESM1XXX','NATXESMMXXX','VOWAES21XXX','PICTESMMXXX','TRIOESMMXXX','BCITESMMXXX','ESSIESMMXXX','IKBDESM1XXX',
	'ARABESMMXXX','MLCBESM1XXX','RCINFRPPXXX','EFGBESMMXXX','UBIBESMMXXX','BCDMESM1XXX','KBLXESMMXXX','ICBKESMMXXX','AGRIESMMXXX',
	'MGTCESMXXXX','CHASESM3XXX','BOTKESMXXXX','BKTRESM1XXX','BSCEESMMXXX','BESPESMMXXX','NACNESMMXXX','SMITESMXXXX','MITKESM1XXX',
	'ROYCESM1XXX','SANWESM1XXX','CRESESMMXXX','FUJIJPJTXXX','DKBBESM1XXX','UBSWESMMXXX','CRESESMMXXX','BOFAES2XXXX','LOYDESMMXXX',
	'BNLIESM1XXX','SOGEESMMAGM','BESMESMMXXX','PARBESMXXXX','DEUTESM1XXX','BNPAESMSXXX','NWBKESMXXXX','BPLCESMMXXX','BSUIESMMXXX',
	'BRASESMMXXX','ABNAESMMXXX','COBAESMXXXX','MIDLESMMXXX','UNCRESMMXXX','GEBAESMMXXX','BBRUESMXXXX','CCFRESMMXXX','BCITESMMXXX',
	'AGRIESMM','ILBKESMMXXX','BBPIESMMXXX','WELAESMMXXX','BESCESMMXXX','NAPBESMMXXX','COBFFRPPXXX','CARIESMMXXX','FCEFESM1XXX',
	'AGRIESB1XXX','PASCESMMXXX','NEWGESM1XXX','LLISESM1XXX','PRABESMMXXX','ASSCESM1XXX','PSABESM1XXX','NFFSESM1XXX','INGDESMMXXX',
	'FRANESM1XXX','EHYPESMXXXX','EEHDESM1XXX','SHSAESM1XXX','BPIPESM1XXX','ROYCESM1XXX','UCSSESM1XXX','PRIBESMXXXX','CITIESMXXXX',
	'CCSEESM1XXX','BDEPESM1XXX','FICDESM1XXX','ALLFESMMXXX','BALEES22XXX','ESPCESMMXXX','ETCHES2GXXX','BGUIES22XXX','BHROESM2XXX',
	'CGDIES2VXXX','BSCHESMMXXX','BCIOESMMXXX','MADRESMMXXX','BMARES2MXXX','BMAPESM1XXX','BARCESMMXXX','RENBESMMXXX','BAMUES22XXX',
	'PSTRESMMXXX','BAPUES22XXX','NORTESMMXXX','SIBBESBBXXX','CGDIES2CXXX','VASCES2PXXX','EXTEESMMXXX','PRVBESB1XXX','BNARESMMXXX',
	'DECRESM1XXX','CRLEESMMXXX','POHIESMMXXX','IBJTESM1XXX','CECAESMM024','CECAESMM073','BANDESSSXXX','CENTESMM','BCNDESM1XXX',
	'SABNESMMXXX','JOVEESBBXXX','PROGESMM','CASTES2SXXX','BOFAES2XXXX','DEEEESM1XXX','BAFOESMM','SBFCESMMXXX','BMEUESM1XXX',
	'SCBLESM1XXX','ASTUESMMXXX','BBVAESMMXXX','BBVAESMMXXX','UIJOESMMXXX','BCOEESMMXXX','DBOLESM1XXX','HLFXESMMXXX','SCFBESMMXXX',
	'UBSWESMMXXX','UNOEESM1XXX','EVOBESMMXXX','SELFESMMXXX','BFASESMMXXX','BCLEESMMXXX','BBVAESMMXXX','BACAESMMXXX','CECAESMMXXX',
	'CESCESBBXXX','CAHMESMMXXX','CECAESMM048','CAGLESMMVIG','CAZRES2ZXXX','CECAESMM086','CAAMES2AXXX','BASKES2BXXX','CAIXESBBXXX',
	'UCJAES2MXXX','CSPAES2L108','CECAESMM010','CECAESMM017','CECAESMM030','CECAESMM031','CECAESMM032','CECAESMM037','CECAESMM040',
	'CECAESMM041','CECAESMM043','CECAESMM051','CECAESMM052','CANVES2PXXX','CECAESMM056','CECAESMM069','CECAESMM071','CECAESMM074',
	'CVALESVVXXX','CECAESMM081','CECAESMM092','CECAESMM094','CSPAES2LXXX','CECAESMM098','CECAESMM099','CGGKES22XXX','CSSOES2SXXX',
	'CECAESMM105','CECAESMM106','CECAESMM045','BCOEESMM01 ','BCOEESMM005','BCOEESMM007','BCOEESMM008','BCOEESMM009','BCOEESMM016',
	'BCOEESMM017','BCOEESMM018','BCOEESMM020','BCOEESMM023','BCOEESMM063','BCOEESMM064','BCOEESMM066','BCOEESMM067','BCOEESMM070',
	'BCOEESMM076','BCOEESMM078','BCOEESMM080','BCOEESMM081','BCOEESMM096','BCOEESMM098','CCRIES2A102','BCOEESMM104','BCOEESMM111',
	'CCRIES2A112','BCOEESMM113','BCOEESMM114','BCOEESMM115','BCOEESMM117','CCRIES2A118','CCRIES2A119','CCRIES2A121','CCRIES2A123',
	'BCOEESMM127','BCOEESMM159','UCINESMMXXX','BSUDESM1XXX','SCSIESM1XXX','IRVTESM1XXX','BNACESM1XXX','ESBFESM1XXX','ICROESMMXXX',
	'SLBKESBBXXX','CATAESBBXXX','DEUTESBBXXX','GALEES2GXXX','BVADESMMXXX','BNPAESMMXXX','OPENESMMXXX','POPUESMMXXX','BSABESBBXXX',
	'BDERESMMXXX','BVALESMMXXX','PROAESMMXXX','GALIES2VXXX','BVICES21XXX','CBANESBBXXX','INBBESM1XXX','OCBAESM1XXX','CITIES2XXXX',
	'BAOFESM1XXX','BKBKESMMXXX','INALESM1XXX','CGDIESMMXXX','PRNEESM1XXX','MIKBESB1XXX','AREBESMMXXX','BADIESMMXXX','BKOAES22XXX',
	'BPMEESBBXXX','BEDFESM1XXX','BFIVESBBXXX','ALCLESMMXXX','ABBKESM1XXX','MDBOESM1XXX','PROAESMMXXX','BMCEESMMXXX','FIOFESM1XXX',
	'PRABESMMXXX','GEECESB1XXX','FIEIESM1XXX','IXIUESM1XXX','POPLESMMXXX','DSBLESMMXXX','INVLESMMXXX','POPIESMMXXX','CCOCESMMXXX',
	'PIESESM1XXX','LOYIESMMXXX','CSURES2CXXX','PSTRESMMXXX','TRESES2BXXX','GBMNESMMXXX','EMACESMMXXX','BCAEESMM','CECAESMM066',
	'BCOEESMM021','BCOEESMM022','CDENESBBXXX','CCRIES2A029','CLPEES2MXXX','CCRIES2A045','BCOEESMM056','CCRIES2AXXX','BCOEESMM059',
	'BCOEESMM060','CRCPES2CXXX','BCOEESMM062','CCRIES2A082','BCOEESMM083','CVRVES2BXXX','BCOEESMM085','BCOEESMM089','BCOEESMM092',
	'BCOEESM1093','CCRIES2A094','CCRIES2A095','CCRIES2A105','CCRIES2A110','BCOEESMM128','BCOEESMM130','BCOEESMM134','CCRIES2A135',
	'BCOEESMM138','BCOEESMM140','BCOEESMM144','CCCVESM1XXX','BCOEESMM147','BCOEESMM150','CCRIES2A152','CCRIES2A157','CCRIES2A160',
	'BCOEESMM161','BCOEESMM162','CCRIES2A165','BCOEESMM166','BCOEESMM174','CCOCESMMXXX','CCRIES2A179','BCOEESM1181','CASDESBBXXX',
	'CCRIES2A186','BCOEESMM187','BCOEESMM189','BCOEESMM190','BCOEESMM191','CSFAESM1XXX','HYVEESM1XXX','HANDES21XXX','PKBSES21XXX',
	'AEEVESM1XXX','BILLESB1XXX','COURESB1XXX','CRGEESM1XXX','ABCMESM1XXX','REDEESM1XXX','PNBMESM1XXX','PCIBESM1XXX','RHRHESM1XXX',
	'BSSAESB1XXX','BOCAES21XXX','WAFAESM1XXX','BCMAESM1XXX','PRBAESM1XXX','HELAESM1XXX','BIMEESM1XXX','GENOESM1XXX','LOFPESB1XXX',
	'STOLESM1XXX','SOLAESB1XXX','BEIVESM1XXX','NPBSES21XXX','IHZUES21XXX','VONTESM1XXX','AARBESM1XXX','IKBDESM1XXX');

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"DCAEE02D-BA3C-45FA-AC7A-40693934DD56"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('C1958').hide();
	globals.GCenableBgElements();
	return true
}

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"8496D1D6-645F-4A38-92A5-98E5D463BA4B"}
 */
var frmCryptedText = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"10E61E60-2D61-4072-B352-7D9CC649AB73"}
 */
var frmDecryptedText = null;

/**
 * Perform the element default action.
 *
 *
 * @properties={typeid:24,uuid:"AAF3D5A7-B51A-444D-8416-BDD7275DF0EE"}
 */
function Encriptar() 
{
	frmCryptedText=globals.GCcryptString(frmDecryptedText,globals.GCcryptKey,'C');
	//frmDecryptedText=utils.stringMD5HashBase64(frmCryptedText)
	
}

/**
 * @properties={typeid:35,uuid:"6CD4CAAF-7B35-4BDF-82A4-DA90EE1C8FCC",variableType:-4}
 */
var xml;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DD44C58C-57C1-4826-A64B-093D5D21147C",variableType:-4}
 */
var Document;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"66A139AE-71A2-49F7-89C3-B987EB2EF4B8",variableType:-4}
 */
var CstmrDrctDbtInitn;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"93CE4AA3-D641-4FFD-890C-B7C7ACB7783A",variableType:-4}
 */
var GroupHeader;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"77BF36CF-65E1-43F2-A2F2-67608C092917",variableType:-4}
 */
var MessageIdentification;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"9706A007-57F7-4124-8C25-DB7127DA9619",variableType:-4}
 */
var CreationDateTime;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"7B759BDA-FD82-4793-9EF0-EF0F7A3352B3",variableType:-4}
 */
var NumberOfTransactions;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"0BC71326-EC2A-401C-904A-A732C98318DE",variableType:-4}
 */
var ControlSum;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"44970288-35FC-4821-9385-1A0BF1AEAE29",variableType:-4}
 */
var InitiatingParty;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"1D814A67-E40F-47F6-A5EC-5A0B91E4D153",variableType:-4}
 */
var Name;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3499B7EA-3BFC-4943-8E78-BFD44DF49C24",variableType:-4}
 */
var Id1;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"D235D836-5B42-40BA-A827-4713AB743E79",variableType:-4}
 */
var Id2;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DE3B8C51-E5A7-4412-9341-01C836E9C37E",variableType:-4}
 */
var Other;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"FC51F9D8-9FA9-4C50-A2C3-7E7A04BBC46B",variableType:-4}
 */
var PrivateIdentification;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"FEE736AB-F020-457F-962D-6DB3B61CFDB7",variableType:-4}
 */
var PaymentInformation;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"0DD4991B-DF43-4CE0-BAE7-D86B2991E132",variableType:-4}
 */
var PaymentInformationIdentification;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"EA0BD17E-DA87-4D96-9F3C-5A097D6A9C83",variableType:-4}
 */
var PaymentMethod;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"133348B4-E574-4A18-A18E-28C7111CD1BF",variableType:-4}
 */
var NumberOfTransactions2;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"81736E52-DE42-4065-A210-DB3569505921",variableType:-4}
 */
var ControlSum2;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C605CF07-B594-47F6-8EDE-153759551EA7",variableType:-4}
 */
var PaymentTypeInformation;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"CF5AD0C9-45C4-4A63-81F3-65021425F5A7",variableType:-4}
 */
var ServiceLevel;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"68F95034-BC07-4256-A298-F65A291451D4",variableType:-4}
 */
var Code;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E1E640A9-CF92-4AAF-98CC-A2F58AD190F9",variableType:-4}
 */
var LocalInstrument;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"05E1EFCC-9B67-44B9-806B-AC78DC6CA56F",variableType:-4}
 */
var Code2;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"D2217BAB-7405-46D9-ABB6-9609BCDEC903",variableType:-4}
 */
var SequenceType;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"28C4DD44-1C49-4632-8391-4569924B80BC",variableType:-4}
 */
var RequestedCollectionDate;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"B089E573-2C6B-458F-911D-BD2819E34D8E",variableType:-4}
 */
var Creditor;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"0C9C14E7-A69A-4256-BEA8-E43165CA8410",variableType:-4}
 */
var Name2;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C45DF280-6C0B-4AF2-B45A-5D0B2A832CD0",variableType:-4}
 */
var PostalAddress;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"18913652-3EB2-4518-BE35-72A5AE5FAD0C",variableType:-4}
 */
var Id3;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"7752E574-313F-4FD5-BAE5-3BBA645FB65E",variableType:-4}
 */
var PrivateIdentification2;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"8DE2E21C-AF29-4229-8429-EBD052AD1638",variableType:-4}
 */
var Other2;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"8788D60B-A8CF-4FC6-A32C-7D4C5E16A6D4",variableType:-4}
 */
var Id4;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"B1A96B8E-C976-4304-A93A-DC2E78686695",variableType:-4}
 */
var CreditorAccount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"8C07B313-ED85-4294-AAAE-18C8DF5A8599",variableType:-4}
 */
var Identification;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"5FFEF24E-A6BE-41B9-9BB0-5A11E300A73F",variableType:-4}
 */
var IBAN;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"9193A54B-A8C7-4FC3-AC0D-6FE3D87FA4A1",variableType:-4}
 */
var CreditorAgent;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"768F5383-1FBA-4121-883D-B5338177B3E8",variableType:-4}
 */
var FinancialInstitutionIdentification;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"052D3A23-4E61-4DC8-A123-923C103FD610",variableType:-4}
 */
var BICFI;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C0F4C9E5-CDBB-4184-8BA1-3651A82CF80A",variableType:-4}
 */
var ChargeBearer;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"20A8C19B-ACC0-41B8-9F46-991C15205F49",variableType:-4}
 */
var CreditorSchemeIdentification;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"60905B75-F222-4C5D-B878-CE0BDA11799A",variableType:-4}
 */
var Identification5;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"840C0C49-F548-4B42-BCFD-5B500864F306",variableType:-4}
 */
var Identification6;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"41230259-54C0-4652-B698-2C19C3EA250D",variableType:-4}
 */
var SchemeName;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A52E7F65-0BC6-415B-A750-E9BAC79DF860",variableType:-4}
 */
var Proprietary;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C0793DF7-6768-4ECA-9E08-0C7108F73B20",variableType:-4}
 */
var DirectDebitTransactionInformation;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"5DBDFF78-D2F9-4ED0-9406-8A6712829DAC",variableType:-4}
 */
var PaymentIdentification;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"819957B1-2AEA-4386-9285-E50D9AC68FC7",variableType:-4}
 */
var InstructionIdentification;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"12C27798-81D4-45F8-B3BF-676EE46DC389",variableType:-4}
 */
var EndToEndIdentification;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"EADD97C9-54BE-4D51-BCF0-5828EF8F5638",variableType:-4}
 */
var InstructedAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"0CEC9D49-2E47-4B46-A9D8-07B7268C321E",variableType:-4}
 */
var DirectDebitTransaction;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"F5D31E94-7FF0-4CA8-A015-D442B623AC8B",variableType:-4}
 */
var MandateRelatedInformation;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"726821A8-EB0D-402A-BCD2-0B4D555BC4A8",variableType:-4}
 */
var MandateIdentification;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"916A0357-5A84-462E-A362-3AFFB250AB70",variableType:-4}
 */
var DateOfSignature;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"4D55A135-C9A8-4B5C-B770-B4DD601A1BA1",variableType:-4}
 */
var AmendmentIndicator;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"69F7C7F8-0CE8-402A-8605-B111342CFD5F",variableType:-4}
 */
var DebtorAgent;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"53B9D6D2-405F-41D5-932B-1C86B3C2BB62",variableType:-4}
 */
var FinancialInstitutionIdentification2;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"4C8AF92D-B54F-4332-9511-6E5E12227CDC",variableType:-4}
 */
var BICFI2;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"F5C50437-B088-439E-A0BB-E499037D4A0A",variableType:-4}
 */
var Debtor;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C2F18929-3809-4A07-AD5E-B5357C327636",variableType:-4}
 */
var Name3;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E657ABEB-6420-4129-BEC1-9807BECFD87F",variableType:-4}
 */
var PostalAddress2;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"1EDBF0F8-C8F8-406B-812F-E99F2BD3351B",variableType:-4}
 */
var Department;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"674D55D0-51D0-4B4E-9656-FC94B8E0C20C",variableType:-4}
 */
var PostCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DEA48932-C623-4786-8F6F-E2AF0E0BD767",variableType:-4}
 */
var TownName;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DD8F37FF-8B34-4DE0-81DD-AC239EF4E534",variableType:-4}
 */
var Country;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"5B39044F-E4E1-4E5A-9FE0-8B38BBCB8D29",variableType:-4}
 */
var AddressLine;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DCEB595B-6C7E-40AE-A742-5BCBB91EDCF3",variableType:-4}
 */
var OrganisationIdentification;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"748A9FFC-8882-4E80-BD2C-82BC24E15037",variableType:-4}
 */
var Identification2;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"12A24A0B-C91F-48A1-B256-258582B730BD",variableType:-4}
 */
var DebtorAccount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3DE7B3C2-29D7-4463-826C-2AAF015588BE",variableType:-4}
 */
var Currency2;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"03579A15-3791-4438-849A-7DD22BB195F6",variableType:-4}
 */
var RemittanceInformation;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"914C135C-CEDE-44E4-AB3B-8C4D848CAA27",variableType:-4}
 */
var Unstructured;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"068D882B-85D8-4E4D-B4E0-A89173E1A93E"}
 */
var newxml = '';

/**
 * Callback method when form is destroyed.
 * 
 * @param {String} FECH
 * 
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D35696D3-4734-4025-B017-455E56F8A0F8"}
 */
function GenerarXML(FECH)
{	
			if(globals.RefDocumento == null || globals.RefDocumento == '') globals.RefDocumento = ' ';
			var query = "SELECT A.[FechaVencimiento],A.[CuentaContable]"+ 
			",A.[ImporteVencimiento],B.[DescCliente],A.[IdFactura]"+
			",A.[FechaFactura],A.[FormaPago],C.[denom_fp],A.[CuentaBanco]"+
			",D.[IDBanco],D.[Sucursal],D.[DigitoControl],D.[NCuenta],D.[NCuentaIBAN],D.SWIFT"+
			",A.[Observaciones],A.[CobroPago],A.[TipoDeudor],A.[TipoAdeudo],"+
			"B.RefMandatoSEPA,B.FechaFirmaMandato,B.SWIFT,B.DescCliente,B.Direccion,"+
			"B.CodPostal,B.Poblacion,B.Provincia,B.CIF,B.Pais,B.CodigoIBAN,B.ID "+
			"FROM [CCobrosPagos] A INNER JOIN [tbmaestroClientes] B ON "+
			"(A.CuentaContable = B.IdCliente) "+
			"LEFT JOIN tbMaestroformpago C ON "+ 
			"(A.FormaPago = C.codig_fp) "+
			"LEFT JOIN [MaestroBancosCtasCargo] D ON "+ 
			"(A.CuentaBanco = D.CodigoCtaBanco)	"+
			"WHERE  A.[Situacion] = 'R'"+
			" AND A.[FechaRemesa] ='"+FECH+"' AND "+
			"CuentaBanco ='"+globals.CuentaBanco+"' AND cobropago = 1 and "+
			"NumDocumento = '"+globals.RefDocumento+"' ORDER BY A.[FechaVencimiento],A.[CuentaContable]";
				
			
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
			var n = dataset.getMaxRowIndex()
			cont = n;
			error = 0;
			if(n>0){
				//var miiban = dataset.getValue(1,14)
				xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
				
				
				Document = <Document xmlns="urn:iso:std:iso:20022:tech:xsd:pain.008.001.02"/>
				
				var ns = new Namespace('xsi','http://www.w3.org/2001/XMLSchema-instance')
				Document.addNamespace(ns)							
				CstmrDrctDbtInitn = <CstmrDrctDbtInitn/>	
				
						GroupHeader = <GrpHdr/>
							MessageIdentification = <MsgId/>
							var mesagid = Digitos('PRE'+utils.dateFormat(new Date(),'yyyyMMddHHmmssSSS'),34)
							MessageIdentification.setChildren(mesagid)
							GroupHeader.appendChild(MessageIdentification)
							CreationDateTime = <CreDtTm/>
							var fech = utils.dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')
							fech = fech.replace(' ','T')
							CreationDateTime.setChildren(fech)
							GroupHeader.appendChild(CreationDateTime)
							if(forms.dlg_RemesasC19SEPA.Contabilizados == 1){
								query = "SELECT ISNULL(SUM(A.[ImporteVencimiento]),0),count(*) "+
								"FROM [CCobrosPagos] A  "+
								"WHERE A.[FechaRemesa] ='"+FECH+"' AND "+
								"[CuentaBanco] ='"+globals.CuentaBanco+"' AND cobropago = 1 and "+
								"NumDocumento = '"+globals.RefDocumento+"'";
							}
							else{
							query = "SELECT ISNULL(SUM(A.[ImporteVencimiento]),0),count(*) "+
								"FROM [CCobrosPagos] A  "+
								"WHERE  A.[Situacion] = 'R'"+
								" AND A.[FechaRemesa] ='"+FECH+"' AND "+
								"[CuentaBanco] ='"+globals.CuentaBanco+"' AND cobropago = 1 and "+
								"NumDocumento = '"+globals.RefDocumento+"'";
							}
							var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
							var importetotal = globals.GCROUND(dataset2.getValue(1,1),2)
							
							
							query = "SELECT distinct A.[FechaVencimiento],A.CuentaContable "+
								"FROM [CCobrosPagos] A  "+
								"WHERE  A.[Situacion] = 'R'"+
								" AND A.[FechaRemesa] ='"+FECH+"' AND cobropago = 1 and "+
								"[CuentaBanco] ='"+globals.CuentaBanco+"' AND "+
								"NumDocumento = '"+globals.RefDocumento+"'";
							
							dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
							var nrecibos = dataset2.getMaxRowIndex()
							
							NumberOfTransactions = <NbOfTxs/>
							NumberOfTransactions.setChildren(nrecibos)
							GroupHeader.appendChild(NumberOfTransactions)
															
							query = "SELECT ISNULL(SUM(A.[ImporteVencimiento]),0),count(*),A.[FechaVencimiento] "+
								"FROM [CCobrosPagos] A  "+
								"WHERE  A.[Situacion] = 'R'"+
								" AND A.[FechaRemesa] ='"+FECH+"' AND "+
								"[CuentaBanco] ='"+globals.CuentaBanco+"' AND cobropago = 1 and "+
								"NumDocumento = '"+globals.RefDocumento+"' "+
								"GROUP BY A.[FechaVencimiento] ORDER BY A.[FechaVencimiento]";
							
							dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999)
							ControlSum = <CtrlSum/>
							var Importe = dataset2.getValue(1,1)
							//Miro a ver si esta creada Remesa en Banco
								/*query = "select id from BancosRemesasCabecera where cuentabanco = '"+globals.CuentaBanco+"' and fecharemesa = '"+utils.dateFormat(globals.FechaCargoAbono,'dd-MM-yyyy')+
										"' and refdocumento = '"+globals.RefDocumento+"'";	
								var dataset3 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
								var uuid = dataset3.getValue(1,1)
								var vSet2 = databaseManager.getFoundSet(globals.GCconex, 'cbancosremesascabecera') 
								if(uuid == null)
								{					  
									//load record by ID in foundset  
									//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
									vSet2.newRecord();
									var record = vSet2.getSelectedRecord();
									record.idejercicio = globals.Empresa;
									record.cuentabanco = globals.CuentaBanco
									record.fecharemesa = globals.FechaCargoAbono
									if(globals.RefDocumento == null || globals.RefDocumento == '') var ref = ' ';
									else ref = globals.RefDocumento
									record.refdocumento = ref
									record.importeremesa = importetotal
									record.nefectos = nrecibos;
									record.usuario = globals.login_usuarioCONTA
									
									databaseManager.saveData(record);
								}
								else
								{
									vSet2.loadRecords(databaseManager.convertToDataSet([uuid]))  
									
									record = vSet2.getSelectedRecord();
									record.idejercicio = globals.Empresa;
									record.cuentabanco = globals.CuentaBanco
									record.fecharemesa = globals.FechaCargoAbono
									if(globals.RefDocumento == null || globals.RefDocumento == '') ref = ' ';
									else ref = globals.RefDocumento
									record.refdocumento = ref
									record.importeremesa = importetotal
									record.nefectos = nrecibos;
									record.usuario = globals.login_usuarioCONTA
									
									databaseManager.saveData(record);
								}
							*/
							ControlSum.setChildren(importetotal)
							GroupHeader.appendChild(ControlSum)
							InitiatingParty = <InitgPty/>
								Name = <Nm/>
								Name.setChildren(globals.GCNombreEmpresa)
								InitiatingParty.appendChild(Name)
								Id1 = <Id/>
									PrivateIdentification = <PrvtId/>
										Other = <Othr/>
											Id2 = <Id/>
											Id2.setChildren(/*globals.CodigoEmisorSEPA*/forms.dlg_RemesasC19SEPAGC.IdentificadorAcreedor)
											Other.appendChild(Id2)
										PrivateIdentification.appendChild(Other)
									Id1.appendChild(PrivateIdentification)
								InitiatingParty.appendChild(Id1)
							GroupHeader.appendChild(InitiatingParty)
					CstmrDrctDbtInitn.appendChild(GroupHeader)						
							var fechacreacionXML = utils.dateFormat(new Date(),'yyyyMMddHHmmssSSS');
							
					var rows2 = dataset2.getMaxRowIndex()
					for(var j=1;j<=rows2;j++)
					{			
							Importe = dataset2.getValue(j,1)
							var fechavencimiento = dataset2.getValue(j,3)
													
								query = "SELECT distinct A.[FechaVencimiento],A.CuentaContable "+
								"FROM [CCobrosPagos] A  "+
								"WHERE  A.[Situacion] = 'R'"+
								" AND A.[FechaVencimiento] ='"+utils.dateFormat(fechavencimiento,'dd-MM-yyyy')+"' AND "+
								"[CuentaBanco] ='"+globals.CuentaBanco+"' AND cobropago = 1 and "+
								"NumDocumento = '"+globals.RefDocumento+"'";
							
							var dataset4 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
							nrecibos = dataset4.getMaxRowIndex()
							//nrecibos = dataset2.getValue(j,2)
							
							
							PaymentInformation = <PmtInf/>
								PaymentInformationIdentification = <PmtInfId/>
								PaymentInformationIdentification.setChildren('REF'+fechacreacionXML)
								PaymentInformation.appendChild(PaymentInformationIdentification)
								PaymentMethod = <PmtMtd/>
								PaymentMethod.setChildren('DD')
								PaymentInformation.appendChild(PaymentMethod)
								NumberOfTransactions2 = <NbOfTxs/>
								NumberOfTransactions2.setChildren(nrecibos)
								PaymentInformation.appendChild(NumberOfTransactions2)
								ControlSum2 = <CtrlSum/>
								ControlSum2.setChildren(Importe)
								PaymentInformation.appendChild(ControlSum2)
								PaymentTypeInformation = <PmtTpInf/>
									ServiceLevel = <SvcLvl/>
										Code = <Cd/>
										Code.setChildren('SEPA')
										ServiceLevel.appendChild(Code)
									LocalInstrument = <LclInstrm/>
										Code2 = <Cd/>
										Code2.setChildren('CORE')
										LocalInstrument.appendChild(Code2)
									
										
									//Modificacion temporal a RCUR todos recibos
									SequenceType = <SeqTp/>
									SequenceType.setChildren('RCUR')	
									PaymentTypeInformation.appendChild(ServiceLevel)
									PaymentTypeInformation.appendChild(LocalInstrument)
									PaymentTypeInformation.appendChild(SequenceType)
								RequestedCollectionDate = <ReqdColltnDt/>
								RequestedCollectionDate.setChildren(utils.dateFormat(globals.FechaCargoAbono/*fechavencimiento*/,'yyyy-MM-dd'))
								Creditor = <Cdtr/>
									Name2 = <Nm/>
									//Name2.setChildren(globals.CONTANombreEmpresa)
									Name2.setChildren(forms.dlg_RemesasC19SEPAGC.NombreAcreedor)
									Creditor.appendChild(Name2)
									PostalAddress = <PstlAdr/> 
									Creditor.appendChild(PostalAddress)
									Id3 = <Id/>
										PrivateIdentification2 = <PrvtId/>
											Other2 = <Othr/>
												Id4 = <Id/>
												Id4.setChildren(/*globals.CodigoEmisorSEPA*/forms.dlg_RemesasC19SEPAGC.IdentificadorAcreedor)
												Other2.appendChild(Id4)
											PrivateIdentification2.appendChild(Other2)
									Id3.appendChild(PrivateIdentification2)
									Creditor.appendChild(Id3)
								CreditorAccount = <CdtrAcct/>
									Identification = <Id/>
										IBAN = <IBAN/>
										IBAN.setChildren(/*miiban*/forms.dlg_RemesasC19SEPAGC.IBAN)
										Identification.appendChild(IBAN)
									//var Currency = <Ccy/>
									//Currency.setChildren('EUR')
									CreditorAccount.appendChild(Identification)
									//CreditorAccount.appendChild(Currency)
								CreditorAgent = <CdtrAgt/>
									FinancialInstitutionIdentification = <FinInstnId/>
										BICFI = <BIC/>//<BICFI/>
										BICFI.setChildren(dataset.getValue(1,15))
										FinancialInstitutionIdentification.appendChild(BICFI)
									CreditorAgent.appendChild(FinancialInstitutionIdentification)
								ChargeBearer = <ChrgBr/>
								//DEBT All transaction charges are to be borne by the debtor.
								//CRED All transaction charges are to be borne by the creditor.
								//SHAR In a credit transfer context, means that
									 //transaction charges on the sender side
									 //are to be borne by the debtor,
									 //transaction charges on the receiver side
									 //are to be borne by the creditor. In a
									 //direct debit context, means that
									 //transaction charges on the sender side
									 //are to be borne by the creditor,
									 //transaction charges on the receiver side
									 //are to be borne by the debtor.
								//SLEV Charges are to be applied following the
								//rules agreed in the service level and/or scheme.
								ChargeBearer.setChildren('SLEV')	
								
								//Modificacion iba abajo en las lineas
								CreditorSchemeIdentification = <CdtrSchmeId/>
												Identification5 = <Id/>
													PrivateIdentification = <PrvtId/>
														Other = <Othr/>
															Identification6 = <Id/>
															Identification6.setChildren(/*globals.CodigoEmisorSEPA*/forms.dlg_RemesasC19SEPAGC.IdentificadorAcreedor)
															Other.appendChild(Identification6)
															SchemeName = <SchmeNm/>
																Proprietary = <Prtry/>
																Proprietary.setChildren('SEPA')
																SchemeName.appendChild(Proprietary)															
															Other.appendChild(SchemeName)
														PrivateIdentification.appendChild(Other)
													Identification5.appendChild(PrivateIdentification)
												CreditorSchemeIdentification.appendChild(Identification5)
												
								PaymentInformation.appendChild(PaymentTypeInformation)
								PaymentInformation.appendChild(RequestedCollectionDate)
								PaymentInformation.appendChild(Creditor)
								PaymentInformation.appendChild(CreditorAccount)
								PaymentInformation.appendChild(CreditorAgent)
								PaymentInformation.appendChild(ChargeBearer)
								PaymentInformation.appendChild(CreditorSchemeIdentification)
								Importe = 0;
																	
									query = "SELECT A.[FechaVencimiento],A.[CuentaContable]"+ 
									",A.[ImporteVencimiento],B.[DescCliente],A.[IdFactura]"+
									",A.[FechaFactura],A.[FormaPago],C.[denom_fp],A.[CuentaBanco]"+
									",D.[IDBanco],D.[Sucursal],D.[DigitoControl],D.[NCuenta],D.[NCuentaIBAN],D.SWIFT"+
									",A.[Observaciones],A.[CobroPago],A.[TipoDeudor],A.[TipoAdeudo],"+
									"B.RefMandatoSEPA,B.FechaFirmaMandato,B.SWIFT,B.Desccliente,B.Direccion,"+
									"B.CodPostal,B.Poblacion,B.Provincia,B.CIF,B.Pais,B.CodigoIBAN,B.ID "+
									"FROM [CCobrosPagos] A INNER JOIN [tbmaestroClientes] B ON "+
									"(A.CuentaContable = B.IdCliente) "+
									"LEFT JOIN tbMaestroformpago C ON "+ 
									"(A.FormaPago = C.codig_fp) "+
									"LEFT JOIN [MaestroBancosCtasCargo] D ON "+ 
									"(A.CuentaBanco = D.CodigoCtaBanco)	"+
									"WHERE  A.[Situacion] = 'R'"+
									" AND A.[FechaVencimiento] ='"+utils.dateFormat(fechavencimiento,'dd-MM-yyyy')+"' AND "+
									"CuentaBanco ='"+globals.CuentaBanco+"' AND cobropago = 1 and "+
									"NumDocumento = '"+globals.RefDocumento+"' ORDER BY A.[FechaVencimiento],A.[CuentaContable]";
								
								dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
								var rows = dataset.getMaxRowIndex()
								var idfactura = null
								for(var i=1;i<=rows;i++)
								{
									idfactura = null
									var cc_prov = dataset.getValue(i,2)
									var cc_provsig = dataset.getValue((i+1),2)
									while(cc_prov == cc_provsig)
									{
										if(idfactura == null) idfactura = dataset.getValue(i,5)
										else idfactura = idfactura+' '+dataset.getValue(i,5)
										Importe += dataset.getValue(i,3)
										i++;
										cc_provsig = dataset.getValue(i,2)
										
										if(cc_prov != cc_provsig) i--;										
									}
									if(Importe == 0) Importe = dataset.getValue(i,3)
									if(idfactura == null) idfactura = dataset.getValue(i,5)
									if(idfactura.length > 140) idfactura = idfactura.substring(1,140)
									
									DirectDebitTransactionInformation = <DrctDbtTxInf/>
										PaymentIdentification = <PmtId/>
											InstructionIdentification = <InstrId/>
											InstructionIdentification.setChildren('NOTPROVIDED')
											PaymentIdentification.appendChild(InstructionIdentification)
											EndToEndIdentification = <EndToEndId/>
											var cli_prov = dataset.getValue(i,4)
											EndToEndIdentification.setChildren(cli_prov)
											PaymentIdentification.appendChild(EndToEndIdentification)
										DirectDebitTransactionInformation.appendChild(PaymentIdentification)
										
										
										//Modificacion temporanea
										/*var PaymentTypeInformation2 = <PmtTpInf/>
											var SequenceType = <SeqTp/>
												var tipoadeudo = dataset.getValue(i,19)
												if(tipoadeudo == '1')
									        	{
									        		var tipadeud = 'FNAL'
									        	}
									        	else if(tipoadeudo == '2')
									        	{
									        		tipadeud = 'FRST'
									        	}
									        	else if(tipoadeudo == '3')
									        	{
									        		tipadeud = 'OOFF'
									        	}
									        	else 
									        	{
									        		tipadeud = 'RCUR'
									        	}
									        	SequenceType.setChildren(tipadeud)
											PaymentTypeInformation2.appendChild(SequenceType)*/
										InstructedAmount = <InstdAmt Ccy="EUR"></InstdAmt>
											//Importe = dataset.getValue(i,3)
											InstructedAmount.setChildren(globals.GCROUND(Importe,2))		
										DirectDebitTransaction = <DrctDbtTx/>
											MandateRelatedInformation = <MndtRltdInf/>
											var refmandato = dataset.getValue(i,20)	
											var fechamandato = dataset.getValue(i,21)	
											//Si no tengo almacenado Referencia de Mandato creo uno con mi CIF y su CIF
											if(refmandato == null || refmandato == '')
											{
												var cifemp = dataset.getValue(i,28)
												refmandato = cifemp+globals.CIF;
												fechamandato = new Date()
												
												//Actualizo datos fiscales
												var vSet = databaseManager.getFoundSet(globals.GCconex, 'cmaestrodatosfiscales')
												var uuid = dataset.getValue(i,31)
												
												//load record by ID in foundset  
												vSet.loadRecords(databaseManager.convertToDataSet([uuid]))
												var record = vSet.getRecord(vSet.getSelectedIndex())
												
												record.refmandatosepa = refmandato;
												record.fechafirmamandato = fechamandato;
												databaseManager.saveData(record)
											}
											MandateIdentification = <MndtId/>
												MandateIdentification.setChildren(refmandato)
												MandateRelatedInformation.appendChild(MandateIdentification)
												DateOfSignature = <DtOfSgntr/>
												DateOfSignature.setChildren(utils.dateFormat(fechamandato,'yyyy-MM-dd'))
												MandateRelatedInformation.appendChild(DateOfSignature)
												AmendmentIndicator = <AmdmntInd/>
												AmendmentIndicator.setChildren(false)
												MandateRelatedInformation.appendChild(AmendmentIndicator)
											/*var CreditorSchemeIdentification = <CdtrSchmeId/>
												var Identification5 = <Id/>
													PrivateIdentification = <PrvtId/>
														Other = <Othr/>
															var Identification6 = <Id/>
															Identification6.setChildren(forms.dlg_RemesasC19SEPA.IdentificadorAcreedor)
															Other.appendChild(Identification6)
															var SchemeName = <SchmeNm/>
																var Proprietary = <Prtry/>
																Proprietary.setChildren('SEPA')
																SchemeName.appendChild(Proprietary)															
															Other.appendChild(SchemeName)
														PrivateIdentification.appendChild(Other)
													Identification5.appendChild(PrivateIdentification)
												CreditorSchemeIdentification.appendChild(Identification5)*/
											DirectDebitTransaction.appendChild(MandateRelatedInformation)
											//DirectDebitTransaction.appendChild(CreditorSchemeIdentification)
										DebtorAgent = <DbtrAgt/>
											FinancialInstitutionIdentification2 = <FinInstnId/>
												var bic = dataset.getValue(i,22)
												BICFI2 = <BIC/>//<BICFI/>
												BICFI2.setChildren(bic)
												FinancialInstitutionIdentification2.appendChild(BICFI2)
											DebtorAgent.appendChild(FinancialInstitutionIdentification2)
										Debtor = <Dbtr/>	
											Name3 = <Nm/>
											var nombreempresa = globals.GCQuitarCaracteresEspeciales(dataset.getValue(i,23))
											var direccionempresa = globals.GCQuitarCaracteresEspeciales(dataset.getValue(i,24))
											var codpostalempresa = dataset.getValue(i,25) 
											var poblacionempresa = globals.GCQuitarCaracteresEspeciales(dataset.getValue(i,26))
											var provinciaempresa = globals.GCQuitarCaracteresEspeciales(dataset.getValue(i,27))
											var cifempresa = dataset.getValue(i,28)
											var paisempresa = dataset.getValue(i,29)
											var IBANempresa = dataset.getValue(i,30)
											Name3.setChildren(nombreempresa)
											Debtor.appendChild(Name3)
											PostalAddress2 = <PstlAdr/>
												if(provinciaempresa){													
													Department = <Dept/>
													Department.setChildren(provinciaempresa)
													PostalAddress2.appendChild(Department)
													}
												if(codpostalempresa){													
													PostCode = <PstCd/>
													PostCode.setChildren(codpostalempresa)
													PostalAddress2.appendChild(PostCode)
													}
												if(poblacionempresa){													
													TownName = <TwnNm/>
													TownName.setChildren(poblacionempresa)
													PostalAddress2.appendChild(TownName)
													}
												if(paisempresa){													
													Country = <Ctry/>
													Country.setChildren(paisempresa)
													PostalAddress2.appendChild(Country)
													}
												if(direccionempresa){													
													AddressLine = <AdrLine/>
													AddressLine.setChildren(direccionempresa)
													PostalAddress2.appendChild(AddressLine)
													}		
											Identification = <Id/>
												OrganisationIdentification = <OrgId/> 
													Other = <Othr/>
														Identification2 = <Id/>
														Identification2.setChildren(cifempresa)
														Other.appendChild(Identification2)
												OrganisationIdentification.appendChild(Other)
												Identification.appendChild(OrganisationIdentification)
											Debtor.appendChild(PostalAddress2)
											Debtor.appendChild(Identification)
											
										DebtorAccount = <DbtrAcct/>
											Identification2 = <Id/> 
												IBAN = <IBAN/> 
												IBAN.setChildren(IBANempresa)
												Identification2.appendChild(IBAN)
											Currency2 = <Ccy/>
											Currency2.setChildren('EUR')											
											DebtorAccount.appendChild(Identification2)
											DebtorAccount.appendChild(Currency2)
										RemittanceInformation = <RmtInf/>
											Unstructured = <Ustrd/>
											Unstructured.setChildren(idfactura)
											RemittanceInformation.appendChild(Unstructured)
										//DirectDebitTransactionInformation.appendChild(PaymentTypeInformation2)
										DirectDebitTransactionInformation.appendChild(InstructedAmount)
										DirectDebitTransactionInformation.appendChild(DirectDebitTransaction)
										DirectDebitTransactionInformation.appendChild(DebtorAgent)
										DirectDebitTransactionInformation.appendChild(Debtor)
										DirectDebitTransactionInformation.appendChild(DebtorAccount)
										DirectDebitTransactionInformation.appendChild(RemittanceInformation)
									PaymentInformation.appendChild(DirectDebitTransactionInformation)
									Importe = 0;
								}
						CstmrDrctDbtInitn.appendChild(PaymentInformation)
					}
					Document.appendChild(CstmrDrctDbtInitn)
					
				xml += Document
				//var newxml = xml.toString().replace(' xmlns=""','')
				newxml = utils.stringReplace(xml.toString(),' xmlns=""','')
				//var xml2 = new XML(newxml)
				application.output(newxml);
				
				
				/*var jsFile = plugins.file.createTempFile('SEPA','.xml');
				
				var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
				if (!success) application.output('Could not write file.');
				//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ) 
				//{
					plugins.file.streamFilesToServer(jsFile)
					plugins.file.openFile(jsFile,"_blank",application/xml)
				/*}
				else 
				{
					plugins.file.streamFilesToServer(jsFile,doImportFile)
				}*/


					/*var htm = newxml
					if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
					{
						var js = plugins.file.showFileSaveDialog('SEPA.xml', 'Selecciona localización para salvar el fichero');
						if (!js) return;			
						
						// Write the file in the selected location
						plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
					}
					else
					{*/
						/*var nom = 'SEPA.xml';
						
						var serverURL = application.getServerURL() 
						js = serverURL + "\\uploads\\" + nom
						plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');*/
						
						var jsFile = plugins.file.createTempFile('SEPA','.xml');
						
						var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
						if (!success) application.output('Could not write file.');
						
						//plugins.file.streamFilesToServer(jsFile)
						//plugins.file.openFile(jsFile,"_blank",'application/xml')
						else plugins.file.openFile('SEPA.xml',jsFile.getBytes(),'application/txt')
					//}
			}
		
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"63762EAE-7C4F-489E-8634-CB828A4A7094"}
 */
function doImportFile(_oFile) {
    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
    var NombreFichero = _oFile.getName()
	NombreFichero = globals.GCQuitarCaracteresEspeciales(NombreFichero)		
	var vFilePath = plugins.file.getDefaultUploadLocation()  +'\\'+ _oFile.getName();
    var vLocalFilePath = 'C:\\tmp\\'+ _oFile.getName();
    var s = plugins.UserManager.copyFileFromServer(vFilePath, vLocalFilePath, true)

    //
    // Use BufferedReader so we don't have to read the whole file into memory
    //
    var _oFR = new Packages.java.io.FileInputStream(vLocalFilePath),
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
        
        var rawData = plugins.file.readFile(vFilePath)
		// Save any unsaved data
		
        databaseManager.saveData();
        
        var ext = _oFile.getContentType()
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
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
		}
		
        //
        //do NOT forget this close! to prevent memory leaks
        //
        _oBR.close();

        // Close the database transaction
        databaseManager.commitTransaction();
       
    } catch (_oErr) {
    	_oBR.close();
        globals.CONTAshowErrorDialog("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+
        						LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
        //application.output("ERROR: " + _oFile.getName() + " at row " + _nReadLine, LOGGINGLEVEL.ERROR);
        globals.CONTAshowErrorDialog("ERROR: " + _oErr+'\n'+
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
        
    }
}

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"62D5930E-D045-4212-8991-C030EC95698C",variableType:-4}
 */
var CstmrCdtTrfInitn;

/**
 * Callback method when form is destroyed.
 * 
 * @param {String} FECH
 * 
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"B67F5D23-4A1F-4389-8093-12A715CC324C"}
 */
function GenerarXMLPagos(FECH)
{	
	if(globals.RefDocumento == null || globals.RefDocumento == '') globals.RefDocumento = ' ';
			var query = "SELECT A.[FechaVencimiento],A.[CuentaContable]"+ 
				",A.[ImporteVencimiento],B.[DescCuentaContable],A.[IdFactura]"+
				",A.[FechaFactura],A.[FormaPago],C.[denom_fp],A.[CuentaBanco]"+
				",D.[IDBanco],D.[Sucursal],D.[DigitoControl],D.[NCuenta],D.[NCuentaIBAN],D.SWIFT"+
				",A.[Observaciones],A.[CobroPago],A.[TipoDeudor],A.[TipoAdeudo],"+
				"E.RefMandatoSEPA,E.FechaFirmaMandato,E.SWIFT,E.Nombre,E.Direccion,"+
				"E.CodPostal,E.Poblacion,E.Provincia,E.CIF,E.CodigoPaisUE,E.CodigoIBAN,E.ID "+
				"FROM [CCobrosPagos] A INNER JOIN [ctbCuentaContable] B ON "+
				"(A.IdEjercicio = B.IdEjercicio AND A.CuentaContable = B.CuentaContable) "+
				"LEFT JOIN [formpago] C ON "+ 
				"(A.IdEjercicio = C.IdEjercicio AND A.FormaPago = C.codig_fp) "+
				"LEFT JOIN [cMaestroBancosCtasCargo] D ON "+ 
				"(A.IdEjercicio = D.IdEjercicio AND A.CuentaBanco = D.CodigoCtaBanco) "+
				"LEFT JOIN cMaestroDatosFiscales E ON "+ 
				"(B.IdEjercicio = E.IdEjercicio AND B.CuentaContable = E.IdCodigo) "+
				"WHERE  A.[Situacion] = 'R'"+
				" AND A.[IdEjercicio] = '"+globals.Empresa+"' AND "+
				"A.[FechaRemesa] ='"+FECH+"' AND "+
				"CuentaBanco ='"+globals.CuentaBanco+"' AND cobropago = 2 and "+
				"NumDocumento = '"+globals.RefDocumento+"' ORDER BY A.[FechaVencimiento],A.[CuentaContable], A.[FechaFactura],A.[IdFactura]";
			var dataset = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 99999999)
			var n = dataset.getMaxRowIndex()
			cont = n;
			error = 0;
			if(n>0)
			{				
				var miiban = dataset.getValue(1,14)				
				xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
				
				Document = <Document xmlns="urn:iso:std:iso:20022:tech:xsd:pain.001.001.03"/>
				
				var ns = new Namespace('xsi','http://www.w3.org/2001/XMLSchema-instance')
				Document.addNamespace(ns)							
				CstmrCdtTrfInitn = <CstmrCdtTrfInitn/>	
				
						GroupHeader = <GrpHdr/>
							MessageIdentification = <MsgId/>
							query = "SELECT CIFEmpresa,PoblacionEmpresa,DireccionEmpresa "+
							"FROM cMaestroFicheroEmpresa WHERE  IdEjercicio = '"+globals.Empresa+"'";
							var dataset2 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 1)
							var cif = dataset2.getValue(1,1)
							var pob = globals.GCQuitarCaracteresEspeciales(dataset2.getValue(1,2))
							var dir = globals.GCQuitarCaracteresEspeciales(dataset2.getValue(1,3))
							MessageIdentification.setChildren(cif)
							GroupHeader.appendChild(MessageIdentification)
							CreationDateTime = <CreDtTm/>
							var fech = utils.dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')
							fech = fech.replace(' ','T')
							CreationDateTime.setChildren(fech)
							GroupHeader.appendChild(CreationDateTime)
							
							query = "SELECT ISNULL(SUM(A.[ImporteVencimiento]),0),count(*) "+
								"FROM [CCobrosPagos] A  "+
								"WHERE  A.[Situacion] = 'R'"+
								" AND A.[IdEjercicio] = '"+globals.Empresa+"' AND "+
								"A.[FechaRemesa] ='"+FECH+"' AND "+
								"[CuentaBanco] ='"+globals.CuentaBanco+"' AND cobropago = 2 and "+
								"NumDocumento = '"+globals.RefDocumento+"'";
							dataset2 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 9999999)
							var importetotal = dataset2.getValue(1,1)
							
							query = "SELECT distinct A.[FechaVencimiento],A.CuentaContable "+
								"FROM [CCobrosPagos] A  "+
								"WHERE  A.[Situacion] = 'R'"+
								" AND A.[IdEjercicio] = '"+globals.Empresa+"' AND "+
								"A.[FechaRemesa] ='"+FECH+"' AND cobropago = 2 and "+
								"[CuentaBanco] ='"+globals.CuentaBanco+"' AND "+
								"NumDocumento = '"+globals.RefDocumento+"'";
							dataset2 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 9999999)
							var nrecibos = dataset2.getMaxRowIndex()
							
							NumberOfTransactions = <NbOfTxs/>
							NumberOfTransactions.setChildren(nrecibos)
							GroupHeader.appendChild(NumberOfTransactions)
							query = "SELECT ISNULL(SUM(A.[ImporteVencimiento]),0),count(*),A.[FechaVencimiento] "+
								"FROM [CCobrosPagos] A  "+
								"WHERE  A.[Situacion] = 'R'"+
								" AND A.[IdEjercicio] = '"+globals.Empresa+"' AND "+
								"A.[FechaRemesa] ='"+FECH+"' AND "+
								"[CuentaBanco] ='"+globals.CuentaBanco+"' AND cobropago = 2 and "+
								"NumDocumento = '"+globals.RefDocumento+"' "+
								"GROUP BY A.[FechaVencimiento] ORDER BY A.[FechaVencimiento]";
							dataset2 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 999999)
							/*GroupHeader.appendChild(NumberOfTransactions)
							query = "SELECT ISNULL(SUM(A.[ImporteVencimiento]),0),count(*),A.[FechaVencimiento] "+
								"FROM [CCobrosPagos] A  "+
								"WHERE  A.[Situacion] = 'R'"+
								" AND A.[IdEjercicio] = '"+globals.Empresa+"' AND "+
								"A.[FechaRemesa] ='"+FECH+"' AND "+
								"[CuentaBanco] ='"+globals.CuentaBanco+"' AND cobropago = 2 and "+
								"NumDocumento = '"+globals.RefDocumento+"' "+
								"GROUP BY A.[FechaVencimiento] ORDER BY A.[FechaVencimiento]";
							dataset2 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 999999)*/
							ControlSum = <CtrlSum/>
							var Importe = dataset2.getValue(1,1);
							
							
							ControlSum.setChildren(importetotal)
							GroupHeader.appendChild(ControlSum)
							InitiatingParty = <InitgPty/>
								Name = <Nm/>
								Name.setChildren(globals.CONTANombreEmpresa)
								InitiatingParty.appendChild(Name)
								Id1 = <Id/>
									PrivateIdentification = <PrvtId/>
										Other = <Othr/>
											Id2 = <Id/>
											Id2.setChildren(/*globals.CodigoEmisorSEPA*/forms.dlg_RemesasC19SEPA.IdentificadorAcreedor)
											Other.appendChild(Id2)
										PrivateIdentification.appendChild(Other)
									Id1.appendChild(PrivateIdentification)
								InitiatingParty.appendChild(Id1)
							GroupHeader.appendChild(InitiatingParty)
					CstmrCdtTrfInitn.appendChild(GroupHeader)
					//var fechacreacionXML = utils.dateFormat(new Date(),'yyyyMMddHHmmssSSS');
							
					var rows2 = dataset2.getMaxRowIndex()
					for(var j=1;j<=rows2;j++)
					{			
							Importe = dataset2.getValue(j,1)
							var fechavencimiento = dataset2.getValue(j,3)
							query = "SELECT distinct A.[FechaVencimiento],A.CuentaContable "+
								"FROM [CCobrosPagos] A  "+
								"WHERE  A.[Situacion] = 'R'"+
								" AND A.[IdEjercicio] = '"+globals.Empresa+"' AND "+
								"A.[FechaVencimiento] ='"+utils.dateFormat(fechavencimiento,'dd-MM-yyyy')+"' AND "+
								"[CuentaBanco] ='"+globals.CuentaBanco+"' AND cobropago = 2 and "+
								"NumDocumento = '"+globals.RefDocumento+"'";
							var dataset4 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 9999999)
							nrecibos = dataset4.getMaxRowIndex()
							//nrecibos = dataset2.getValue(j,2)
							
							
									
							
							PaymentInformation = <PmtInf/>
								PaymentInformationIdentification = <PmtInfId/>
								PaymentInformationIdentification.setChildren(cif)
								PaymentInformation.appendChild(PaymentInformationIdentification)
								PaymentMethod = <PmtMtd/>
								PaymentMethod.setChildren('TRF')
								PaymentInformation.appendChild(PaymentMethod)
								var BatchBooking = <BtchBookg/>
								BatchBooking.setChildren(true)
								PaymentInformation.appendChild(BatchBooking)
								PaymentTypeInformation = <PmtTpInf/>
									ServiceLevel = <SvcLvl/>
										Code = <Cd/>
										Code.setChildren('SEPA')
										ServiceLevel.appendChild(Code)									
									PaymentTypeInformation.appendChild(ServiceLevel)									
								var  RequestedExecutionDate = <ReqdExctnDt/>
								RequestedExecutionDate.setChildren(utils.dateFormat(fechavencimiento,'yyyy-MM-dd'))
								Debtor = <Dbtr/>
									Name2 = <Nm/>
									Name2.setChildren(globals.CONTANombreEmpresa)
									Debtor.appendChild(Name2)
									PostalAddress = <PstlAdr/> 
										var CountrySubDivision = <CtrySubDvsn/>
										CountrySubDivision.setChildren(pob)
										PostalAddress.appendChild(CountrySubDivision)
										var Address = <AdrLine/>
										Address.setChildren(dir)
										PostalAddress.appendChild(Address)									
									Debtor.appendChild(PostalAddress)								
								DebtorAccount = <DbtrAcct/>
									Identification = <Id/>
										IBAN = <IBAN/>
										IBAN.setChildren(miiban)
										Identification.appendChild(IBAN)									
									DebtorAccount.appendChild(Identification)									
								DebtorAgent = <DbtrAgt/>
									FinancialInstitutionIdentification = <FinInstnId/>
										DebtorAgent.appendChild(FinancialInstitutionIdentification)
								ChargeBearer = <ChrgBr/>
								//DEBT All transaction charges are to be borne by the debtor.
								//CRED All transaction charges are to be borne by the creditor.
								//SHAR In a credit transfer context, means that
									 //transaction charges on the sender side
									 //are to be borne by the debtor,
									 //transaction charges on the receiver side
									 //are to be borne by the creditor. In a
									 //direct debit context, means that
									 //transaction charges on the sender side
									 //are to be borne by the creditor,
									 //transaction charges on the receiver side
									 //are to be borne by the debtor.
								//SLEV Charges are to be applied following the
								//rules agreed in the service level and/or scheme.
								ChargeBearer.setChildren('SLEV')								
								PaymentInformation.appendChild(PaymentTypeInformation)
								PaymentInformation.appendChild(RequestedExecutionDate)
								PaymentInformation.appendChild(Debtor)
								PaymentInformation.appendChild(DebtorAccount)
								PaymentInformation.appendChild(DebtorAgent)
								PaymentInformation.appendChild(ChargeBearer)
								for(var i=1;i<=n;i++)
								{
									var CreditTransferTransactionInformation = <CdtTrfTxInf/>
										PaymentIdentification = <PmtId/>
											InstructionIdentification = <InstrId/>
											InstructionIdentification.setChildren('NOTPROVIDED')
											PaymentIdentification.appendChild(InstructionIdentification)
											EndToEndIdentification = <EndToEndId/>
											var cli_prov = dataset.getValue(i,4)
											EndToEndIdentification.setChildren(cli_prov)
											PaymentIdentification.appendChild(EndToEndIdentification)
										CreditTransferTransactionInformation.appendChild(PaymentIdentification)										
										var PmtTpInf = <PmtTpInf/>
											var CtgyPurp = <CtgyPurp/>
												var cd = <CD/>
												cd.setChildren('SUPP')
											CtgyPurp.appendChild(cd)
										PmtTpInf.appendChild(CtgyPurp)	
										var Amount = <Amt/>
											InstructedAmount = <InstdAmt Ccy="EUR"></InstdAmt>
											Importe = dataset.getValue(i,3)
											InstructedAmount.setChildren(Importe)
											Amount.appendChild(InstructedAmount)
										CreditTransferTransactionInformation.appendChild(Amount)											
										CreditorAgent = <CdtrAgt/>
											FinancialInstitutionIdentification2 = <FinInstnId/>
												var bic = dataset.getValue(i,22)
												BICFI2 = <BIC/>//<BICFI/>
												BICFI2.setChildren(bic)
												FinancialInstitutionIdentification2.appendChild(BICFI2)
											CreditorAgent.appendChild(FinancialInstitutionIdentification2)
										Creditor = <Cdtr/>	
											Name3 = <Nm/>
											var nombreempresa = globals.GCQuitarCaracteresEspeciales(dataset.getValue(i,23))
											var direccionempresa = globals.GCQuitarCaracteresEspeciales(dataset.getValue(i,24))
											var codpostalempresa = dataset.getValue(i,25) 
											var poblacionempresa = globals.GCQuitarCaracteresEspeciales(dataset.getValue(i,26))
											var provinciaempresa = globals.GCQuitarCaracteresEspeciales(dataset.getValue(i,27))
											var paisempresa = dataset.getValue(i,29)
											var IBANempresa = dataset.getValue(i,30)
											var idfactura = dataset.getValue(i,5)
											Name3.setChildren(nombreempresa)
											Creditor.appendChild(Name3)
											PostalAddress2 = <PstlAdr/>
												if(codpostalempresa){													
													PostCode = <PstCd/>
													PostCode.setChildren(codpostalempresa)
													PostalAddress2.appendChild(PostCode)
													}
												if(poblacionempresa){													
													TownName = <TwnNm/>
													TownName.setChildren(poblacionempresa)
													PostalAddress2.appendChild(TownName)
													}
													if(provinciaempresa){													
													CountrySubDivision = <CtrySubDvsn/>
													CountrySubDivision.setChildren(provinciaempresa)
													PostalAddress2.appendChild(CountrySubDivision)
													}
												if(paisempresa){													
													Country = <Ctry/>
													Country.setChildren(paisempresa)
													PostalAddress2.appendChild(Country)
													}
												if(direccionempresa){													
													AddressLine = <AdrLine/>
													AddressLine.setChildren(direccionempresa)
													PostalAddress2.appendChild(AddressLine)
													}		
											Creditor.appendChild(PostalAddress2)											
										CreditorAccount = <CdtrAcct/>
											Identification2 = <Id/> 
												IBAN = <IBAN/> 
												IBAN.setChildren(IBANempresa)
												Identification2.appendChild(IBAN)
											CreditorAccount.appendChild(Identification2)
										RemittanceInformation = <RmtInf/>
											Unstructured = <Ustrd/>
											Unstructured.setChildren(idfactura)
											RemittanceInformation.appendChild(Unstructured)											
										CreditTransferTransactionInformation.appendChild(CreditorAgent)
										CreditTransferTransactionInformation.appendChild(Creditor)
										CreditTransferTransactionInformation.appendChild(CreditorAccount)
										CreditTransferTransactionInformation.appendChild(RemittanceInformation)
										
									PaymentInformation.appendChild(CreditTransferTransactionInformation)
								}
						CstmrCdtTrfInitn.appendChild(PaymentInformation)
					}
					Document.appendChild(CstmrCdtTrfInitn)
					
				xml += Document
				//var newxml = xml.toString().replace(' xmlns=""','')
				newxml = utils.stringReplace(xml.toString(),' xmlns=""','')
				//var xml2 = new XML(newxml)
				application.output(newxml);
				
				
				/*var htm = newxml
				if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var js = plugins.file.showFileSaveDialog('SEPA.xml', 'Selecciona localización para salvar el fichero');
					if (!js) return;			
						
					// Write the file in the selected location
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
				}
				else
				{*/
					/*var nom = 'SEPA.xml';
						
					var serverURL = application.getServerURL() 
					js = serverURL + "\\uploads\\" + nom
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');*/
					
					var jsFile = plugins.file.createTempFile('SEPA','.xml');
					
					var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
					if (!success) application.output('Could not write file.');
					
					//plugins.file.streamFilesToServer(jsFile)
					//plugins.file.openFile(jsFile,"_blank",'application/xml')
					else plugins.file.openFile('SEPA.xml',jsFile.getBytes(),'application/txt')
				//}
				
			}			
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} FECH
 *
 * @properties={typeid:24,uuid:"DC5B5515-705C-43F3-8B7A-CB9206660E4F"}
 */
function ComprobarDatosCuentas(FECH)
{
	var query = "SELECT A.[FechaVencimiento],A.[CuentaContable]"+ 
	",A.[ImporteVencimiento],B.[DescCliente],A.[IdFactura]"+
	",A.[FechaFactura],A.[FormaPago],C.[denom_fp],A.[CuentaBanco]"+
	",D.[IDBanco],D.[Sucursal],D.[DigitoControl],D.[NCuenta],D.[NCuentaIBAN],D.SWIFT"+
	",A.[Observaciones],A.[CobroPago],A.[TipoDeudor],A.[TipoAdeudo],"+
	"B.RefMandatoSEPA,B.FechaFirmaMandato,B.SWIFT,B.DescCliente,B.Direccion,"+
	"B.CodPostal,B.Poblacion,B.Provincia,B.CIF,B.Pais,B.CodigoIBAN,B.ID "+
	"FROM [CCobrosPagos] A INNER JOIN [tbmaestroClientes] B ON "+
	"(A.CuentaContable = B.IdCliente) "+
	"LEFT JOIN tbMaestroformpago C ON "+ 
	"(A.FormaPago = C.codig_fp) "+
	"LEFT JOIN [MaestroBancosCtasCargo] D ON "+ 
	"(A.CuentaBanco = D.CodigoCtaBanco)	"+
	"WHERE  A.[Situacion] = 'R'"+
	" AND A.[FechaRemesa] ='"+FECH+"' AND "+
	"CuentaBanco ='"+globals.CuentaBanco+"' AND cobropago = 1 and "+
	"NumDocumento = '"+globals.RefDocumento+"' ORDER BY A.[FechaVencimiento],A.[CuentaContable]";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
	
	var rows = dataset.getMaxRowIndex()
	
	for(var i=1;i<=rows;i++)
	{
		var bicempresa = dataset.getValue(i,22)
		var nombreempresa = dataset.getValue(i,23)
		var ibanempresa = dataset.getValue(i,30)
		var paisempresa = dataset.getValue(i,29)
		
		if(!bicempresa || !paisempresa || !ibanempresa)
		{
			error = 1;
			globals.CONTAshowErrorDialog('Faltan datos fiscales necesarios de '+nombreempresa,null,'Aceptar',null,null,null)
			break;
		}
		else if(!forms.dlg_RemesasC19SEPAGC.IBAN || !forms.dlg_RemesasC19SEPAGC.SWIFT || !forms.dlg_RemesasC19SEPAGC.IdentificadorAcreedor)
		{
			error = 1;
			globals.CONTAshowErrorDialog('Faltan datos del acreedor de la remesa '+forms.dlg_RemesasC19SEPA.NombreCuenta,null,'Aceptar',null,null,null)
			break;
		}
	}
}

/**
 *
 * @properties={typeid:24,uuid:"A9A4DEC4-D787-4FC0-A0FB-A45295BCAABA"}
 */
function sub_envioAviso(){	
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		globals.CONTAshowDialogAvisoCobroRemesasSEPA('Envío AVISO DE COBRO',1,null,null,null,null,null,null,null,null)
	}
}
