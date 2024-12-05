/**
 *
 * @properties={typeid:24,uuid:"DD7F7367-160E-4397-B68A-1B6118A21FC5"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	
	application.getWindow('C1958GC').hide();
	globals.GCenableBgElements();
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A15BED8D-FFE9-4F3F-B4C6-45D624B4923A"}
 */
var error = '';

/**
 *
 * @properties={typeid:24,uuid:"981C3A2E-790A-4DF3-89E3-4146BD88AF55"}
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(unused)
 */
function btn_ok()
{
	var form = 0//forms.dlg_C1958GC.FormatoFichero;
	var tf = forms.dlg_C1958GC.TipoFicheroSEPA;
	application.getWindow('C1958GC').hide();
	application.getWindow('Seleccion Remesa GC').hide();
	application.getWindow('Seleccion Cobros a Procesar GC').hide();
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
		if(form == 0)
		{
			error = 0;
			ComprobarDatosCuentas(Fecha2)
			if(error == 0)
			{
				if(tf == 'C19')	GenerarXMLCobros(Fecha2)
				else if(tf == 'C58') GenerarXMLCobros2(Fecha2)
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
			" AND A.[IdEjercicio] = '"+globals.Empresa+"' AND "+
			"A.[FechaRemesa] ='"+Fecha2+"' AND "+
			"[CuentaBanco] ='"+globals.CuentaBanco+"' ORDER BY A.CuentaContable,A.[FechaVencimiento]";
			dataset = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 99999999)
			var n = dataset.getMaxRowIndex()
			error = 0;
			if(n>0)
			{
			var f = plugins.file.createTempFile(globals.FechaFichero,'.txt');				
					
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
		        	var query = "select [NombreEmpresa],[CIFEmpresa],[DireccionEmpresa],[CodPostalEmpresa],[PoblacionEmpresa],[Provincia] "+
					"from [cMaestroFicheroEmpresa] WHERE [IdEjercicio] = '" + globals.Empresa +"'" 
		        	var dataset = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 1)
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
					
					query = "select [IDBanco],[Sucursal],[Sufijo],[Pais],[NCuentaIBAN] from [cMaestroBancosCtasCargo] where IdEjercicio = '" + globals.Empresa +
					"' AND [CodigoCtaBanco] = '" + globals.CuentaBanco + "'"
		        	dataset = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 1)
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
					var IBAN = dataset.getValue(1, 5) 
					if(IBAN == null) error +=1
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
				        	linea = linea + PreparaLinea(IBAN, 34, 'Left');
				        	linea = linea + PreparaLinea('', 301, 'Left');
				        	InsertaLinea(linea,f)
		        		}
						
						//REGISTRO 1º ADEUDO INDIVIDUAL OBLIGATORIO
					
		        	
		        		var tipodeudor = dataset.getValue(i,16)
						var tipoadeudo = dataset.getValue(i,17)
						
		        		query = "SELECT [Nombre],[Direccion],[CodPostal],[Poblacion],[Provincia]"+
								",[CodigoPaisUE],[CodigoIBAN],[SWIFT],[CIF],RefMandatoSEPA,FechaFirmaMandato  "+    
								"FROM [cMaestroDatosFiscales] "+
								"WHERE [IdEjercicio] = '"+globals.Empresa+
								"' AND [IdCodigo] = '"+dataset.getValue(i,2)+"'";
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
				
		        	
			}
		}  
	}
	else
	{
		if(forms.dlg_C1958.FormatoFichero == 0)
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
 * @properties={typeid:24,uuid:"A605A2FB-EAF7-475F-9857-899A22819530"}
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
 * @properties={typeid:24,uuid:"CA386370-46C7-41D5-A09F-F49A17D56251"}
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
	 * @properties={typeid:24,uuid:"60296D54-FA7C-4BE3-BCE3-F5EB39F12C2A"}
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
	 * @properties={typeid:24,uuid:"4D9F3628-2E9F-42BF-B3B2-A6171C767313"}
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
	 * @properties={typeid:24,uuid:"8B70D79F-CB1F-4F6C-B299-D0840D1225DF"}
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
 * @properties={typeid:24,uuid:"EB681D6C-0F4C-4C0B-82BA-6F9A6DE27B51"}
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
 * @properties={typeid:24,uuid:"FB75A752-5B2C-4ED1-9159-22B67CC344D5"}
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
 * @properties={typeid:24,uuid:"0DFC8E51-A9A6-4B86-94B8-EB3F5232C49E"}
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
*
* @return {String}
 *
 * @properties={typeid:24,uuid:"20D1A078-1DA2-45CC-AF05-E310CD88FC3A"}
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
 * @properties={typeid:24,uuid:"749C2933-345D-4FC6-8E5E-BF6563F78691"}
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
 * @properties={typeid:24,uuid:"8A896370-23C4-46F9-8311-A82E54CA4EEF"}
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
 * @properties={typeid:24,uuid:"DAB45EDE-371A-4859-846F-72FFFCCDD982"}
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
 * @properties={typeid:35,uuid:"E0724576-E541-4B83-9F5C-3BD29935501E",variableType:-4}
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
 * @properties={typeid:35,uuid:"ED2BC6E0-D61E-4718-9D84-B77454636D30",variableType:-4}
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
 * @properties={typeid:24,uuid:"B71A143C-179C-4B19-93DE-58ED262088ED"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('C1958GC').hide();
	globals.GCenableBgElements();
	return true
}

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"D8818531-5B78-47AF-BF86-68D9900C0A53"}
 */
var frmCryptedText = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"AD273D97-7EBE-444C-A7B0-831089313782"}
 */
var frmDecryptedText = null;

/**
 * Perform the element default action.
 *
 *
 * @properties={typeid:24,uuid:"1C19E18F-B62A-48C2-913E-6F995C5E3798"}
 */
function Encriptar() 
{
	frmCryptedText=globals.GCcryptString(frmDecryptedText,globals.GCcryptKey,'C');
	//frmDecryptedText=utils.stringMD5HashBase64(frmCryptedText)
	
}

/**
 * @properties={typeid:35,uuid:"A302451B-89DE-44F2-B270-6BA23AD83238",variableType:-4}
 */
var xml;

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
 * @properties={typeid:24,uuid:"2F17FCB3-50FE-4CD8-B738-9758E2372AEF"}
 */
function GenerarXMLCobros(FECH)
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
			error = 0;
			if(n>0)
			{
				//var miiban = dataset.getValue(1,14)
				xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
				
				var Document = <Document xmlns="urn:iso:std:iso:20022:tech:xsd:pain.008.001.02"/>
				
				var ns = new Namespace('xsi','http://www.w3.org/2001/XMLSchema-instance')
				Document.addNamespace(ns)							
				var CstmrDrctDbtInitn = <CstmrDrctDbtInitn/>	
				
						var GroupHeader = <GrpHdr/>
							var MessageIdentification = <MsgId/>
							var mesagid = Digitos('PRE'+utils.dateFormat(new Date(),'yyyyMMddHHmmssSSS'),34)
							MessageIdentification.setChildren(mesagid)
							GroupHeader.appendChild(MessageIdentification)
							var CreationDateTime = <CreDtTm/>
							var fech = utils.dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')
							fech = fech.replace(' ','T')
							CreationDateTime.setChildren(fech)
							GroupHeader.appendChild(CreationDateTime)
							query = "SELECT ISNULL(SUM(A.[ImporteVencimiento]),0),count(*) "+
								"FROM [CCobrosPagos] A  "+
								"WHERE  A.[Situacion] = 'R'"+
								" AND A.[FechaRemesa] ='"+FECH+"' AND "+
								"[CuentaBanco] ='"+globals.CuentaBanco+"' AND cobropago = 1 and "+
								"NumDocumento = '"+globals.RefDocumento+"'";
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
							
							var NumberOfTransactions = <NbOfTxs/>
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
							var ControlSum = <CtrlSum/>
							var Importe = dataset2.getValue(1,1)
							//Miro a ver si esta creada Remesa en Banco
								/*query = "select id from cBancosRemesasCabecera where cuentabanco = '"+globals.CuentaBanco+"' and fecharemesa = '"+utils.dateFormat(globals.FechaCargoAbono,'dd-MM-yyyy')+
										"' and refdocumento = '"+globals.RefDocumento+"'";	
								var dataset3 = databaseManager.getDataSetByQuery(globals.conex, query, null, 1)
								var uuid = dataset3.getValue(1,1)
								var vSet2 = databaseManager.getFoundSet(globals.conex, 'cbancosremesascabecera') 
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
									record.usuario = globals.login_usuario
									
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
									record.usuario = globals.login_usuario
									
									databaseManager.saveData(record);
								}*/
							//
							ControlSum.setChildren(importetotal)
							GroupHeader.appendChild(ControlSum)
							var InitiatingParty = <InitgPty/>
								var Name = <Nm/>
								Name.setChildren(globals.GCNombreEmpresa)
								InitiatingParty.appendChild(Name)
								var Id1 = <Id/>
									var PrivateIdentification = <PrvtId/>
										var Other = <Othr/>
											var Id2 = <Id/>
											Id2.setChildren(globals.CodigoEmisorSEPA)
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
							
							
							var PaymentInformation = <PmtInf/>
								var PaymentInformationIdentification = <PmtInfId/>
								PaymentInformationIdentification.setChildren('REF'+fechacreacionXML)
								PaymentInformation.appendChild(PaymentInformationIdentification)
								var PaymentMethod = <PmtMtd/>
								PaymentMethod.setChildren('DD')
								PaymentInformation.appendChild(PaymentMethod)
								var NumberOfTransactions2 = <NbOfTxs/>
								NumberOfTransactions2.setChildren(nrecibos)
								PaymentInformation.appendChild(NumberOfTransactions2)
								var ControlSum2 = <CtrlSum/>
								ControlSum2.setChildren(Importe)
								PaymentInformation.appendChild(ControlSum2)
								var PaymentTypeInformation = <PmtTpInf/>
									var ServiceLevel = <SvcLvl/>
										var Code = <Cd/>
										Code.setChildren('SEPA')
										ServiceLevel.appendChild(Code)
									var LocalInstrument = <LclInstrm/>
										var Code2 = <Cd/>
										Code2.setChildren('CORE')
										LocalInstrument.appendChild(Code2)
									
										
										
										
									//Modificacion temporal a RCUR todos recibos
									var SequenceType = <SeqTp/>
									SequenceType.setChildren('RCUR')	
									PaymentTypeInformation.appendChild(ServiceLevel)
									PaymentTypeInformation.appendChild(LocalInstrument)
									PaymentTypeInformation.appendChild(SequenceType)
									
									
								var RequestedCollectionDate = <ReqdColltnDt/>
								RequestedCollectionDate.setChildren(utils.dateFormat(globals.FechaCargoAbono/*fechavencimiento*/,'yyyy-MM-dd'))
								var Creditor = <Cdtr/>
									var Name2 = <Nm/>
									//Name2.setChildren(globals.NombreEmpresa)
									Name2.setChildren(forms.dlg_C1958GC.NombreAcreedor)
									Creditor.appendChild(Name2)
									var PostalAddress = <PstlAdr/> 
									Creditor.appendChild(PostalAddress)
									var Id3 = <Id/>
										var PrivateIdentification2 = <PrvtId/>
											var Other2 = <Othr/>
												var Id4 = <Id/>
												Id4.setChildren(/*globals.CodigoEmisorSEPA*/forms.dlg_C1958GC.IdentificadorAcreedor)
												Other2.appendChild(Id4)
											PrivateIdentification2.appendChild(Other2)
									Id3.appendChild(PrivateIdentification2)
									Creditor.appendChild(Id3)
								var CreditorAccount = <CdtrAcct/>
									var Identification = <Id/>
										var IBAN = <IBAN/>
										IBAN.setChildren(/*miiban*/forms.dlg_C1958GC.IBAN)
										Identification.appendChild(IBAN)
									/*var Currency = <Ccy/>
									Currency.setChildren('EUR')*/
									CreditorAccount.appendChild(Identification)
									//CreditorAccount.appendChild(Currency)
								var CreditorAgent = <CdtrAgt/>
									var FinancialInstitutionIdentification = <FinInstnId/>
										var BICFI = <BIC/>//<BICFI/>
										BICFI.setChildren(dataset.getValue(1,15))
										FinancialInstitutionIdentification.appendChild(BICFI)
									CreditorAgent.appendChild(FinancialInstitutionIdentification)
								var ChargeBearer = <ChrgBr/>
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
								var CreditorSchemeIdentification = <CdtrSchmeId/>
												var Identification5 = <Id/>
													PrivateIdentification = <PrvtId/>
														Other = <Othr/>
															var Identification6 = <Id/>
															Identification6.setChildren(/*globals.CodigoEmisorSEPA*/forms.dlg_C1958GC.IdentificadorAcreedor)
															Other.appendChild(Identification6)
															var SchemeName = <SchmeNm/>
																var Proprietary = <Prtry/>
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
									
									var DirectDebitTransactionInformation = <DrctDbtTxInf/>
										var PaymentIdentification = <PmtId/>
											var InstructionIdentification = <InstrId/>
											InstructionIdentification.setChildren('NOTPROVIDED')
											PaymentIdentification.appendChild(InstructionIdentification)
											var EndToEndIdentification = <EndToEndId/>
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
										
											
											
										var InstructedAmount = <InstdAmt Ccy="EUR"></InstdAmt>
											//Importe = dataset.getValue(i,3)
											InstructedAmount.setChildren(globals.GCROUND(Importe,2))		
										var DirectDebitTransaction = <DrctDbtTx/>
											var MandateRelatedInformation = <MndtRltdInf/>
											var refmandato = dataset.getValue(i,20)	
											var fechamandato = dataset.getValue(i,21)	
											//Si no tengo almacenado Referencia de Mandato creo uno con mi CIF y su CIF
											if(refmandato == null || refmandato == '')
											{
												var cifemp = dataset.getValue(i,28)
												refmandato = cifemp+globals.CIF;
												fechamandato = new Date()
												
												//Actualizo datos fiscales
												var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbmaestroclientes')
												var uuid = dataset.getValue(i,31)
												
												//load record by ID in foundset  
												vSet.loadRecords(databaseManager.convertToDataSet([uuid]))
												var record = vSet.getRecord(vSet.getSelectedIndex())
												
												record.refmandatosepa = refmandato;
												record.fechafirmamandato = fechamandato;
												databaseManager.saveData(record)
											}
											var MandateIdentification = <MndtId/>
												MandateIdentification.setChildren(refmandato)
												MandateRelatedInformation.appendChild(MandateIdentification)
												var DateOfSignature = <DtOfSgntr/>
												DateOfSignature.setChildren(utils.dateFormat(fechamandato,'yyyy-MM-dd'))
												MandateRelatedInformation.appendChild(DateOfSignature)
												var AmendmentIndicator = <AmdmntInd/>
												AmendmentIndicator.setChildren(false)
												MandateRelatedInformation.appendChild(AmendmentIndicator)
											/*var CreditorSchemeIdentification = <CdtrSchmeId/>
												var Identification5 = <Id/>
													PrivateIdentification = <PrvtId/>
														Other = <Othr/>
															var Identification6 = <Id/>
															Identification6.setChildren(forms.dlg_C1958.IdentificadorAcreedor)
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
										var DebtorAgent = <DbtrAgt/>
											var FinancialInstitutionIdentification2 = <FinInstnId/>
												var bic = dataset.getValue(i,22)
												var BICFI2 = <BIC/>//<BICFI/>
												BICFI2.setChildren(bic)
												FinancialInstitutionIdentification2.appendChild(BICFI2)
											DebtorAgent.appendChild(FinancialInstitutionIdentification2)
										var Debtor = <Dbtr/>	
											var Name3 = <Nm/>
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
											var PostalAddress2 = <PstlAdr/>
												if(provinciaempresa){													
													var Department = <Dept/>
													Department.setChildren(provinciaempresa)
													PostalAddress2.appendChild(Department)
													}
												if(codpostalempresa){													
													var PostCode = <PstCd/>
													PostCode.setChildren(codpostalempresa)
													PostalAddress2.appendChild(PostCode)
													}
												if(poblacionempresa){													
													var TownName = <TwnNm/>
													TownName.setChildren(poblacionempresa)
													PostalAddress2.appendChild(TownName)
													}
												if(paisempresa){													
													var Country = <Ctry/>
													Country.setChildren(paisempresa)
													PostalAddress2.appendChild(Country)
													}
												if(direccionempresa){													
													var AddressLine = <AdrLine/>
													AddressLine.setChildren(direccionempresa)
													PostalAddress2.appendChild(AddressLine)
													}		
											Identification = <Id/>
												var OrganisationIdentification = <OrgId/> 
													Other = <Othr/>
														Identification2 = <Id/>
														Identification2.setChildren(cifempresa)
														Other.appendChild(Identification2)
												OrganisationIdentification.appendChild(Other)
												Identification.appendChild(OrganisationIdentification)
											Debtor.appendChild(PostalAddress2)
											Debtor.appendChild(Identification)
											
										var DebtorAccount = <DbtrAcct/>
											var Identification2 = <Id/> 
												IBAN = <IBAN/> 
												IBAN.setChildren(IBANempresa)
												Identification2.appendChild(IBAN)
											var Currency2 = <Ccy/>
											Currency2.setChildren('EUR')											
											DebtorAccount.appendChild(Identification2)
											DebtorAccount.appendChild(Currency2)
										var RemittanceInformation = <RmtInf/>
											var Unstructured = <Ustrd/>
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
				var newxml = utils.stringReplace(xml.toString(),' xmlns=""','')
				//var xml2 = new XML(newxml)
				application.output(newxml);
				
				
				/*var jsFile = plugins.file.createTempFile('SEPA','.xml');
				
				var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
				if (!success) application.output('Could not write file.');
				//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
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
						plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');	*/	
						
						var jsFile = plugins.file.createTempFile('SEPA','.xml');
						
						var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
						if (!success) application.output('Could not write file.');
						
						//plugins.file.streamFilesToServer(jsFile)
						//plugins.file.openFile(jsFile,"_blank",'application/xml')
						else plugins.file.openFile("SEPA.xml",jsFile.getBytes(),'application/txt')
					//}
			}
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"05DC2425-8A4B-45D9-8428-1EA8F790C731"}
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
    	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT){ 
    		plugins.webnotificationsToastr.error("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+
        						LOGGINGLEVEL.ERROR,'¡Error!')
			plugins.webnotificationsToastr.error("ERROR: " + _oErr + " at row " + _nReadLine+'\n'+
        						LOGGINGLEVEL.ERROR,'¡Error!')
    	}
    	else {
    		globals.GCshowErrorDialog("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+
        						LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
	        //application.output("ERROR: " + _oFile.getName() + " at row " + _nReadLine, LOGGINGLEVEL.ERROR);
	        globals.GCshowErrorDialog("ERROR: " + _oErr+'\n'+
	        						LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
	        						//application.output("ERROR: " + _oErr, LOGGINGLEVEL.ERROR);
	    }
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
 * @properties={typeid:24,uuid:"D5A5F444-09F3-40AE-87EF-B32065BBD5CF"}
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
				"NumDocumento = '"+globals.RefDocumento+"' ORDER BY A.[FechaVencimiento],A.[CuentaContable]";
			var dataset = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 99999999)
			var n = dataset.getMaxRowIndex()
			error = 0;
			if(n>0)
			{				
				var miiban = dataset.getValue(1,14)				
				xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
				
				var Document = <Document xmlns="urn:iso:std:iso:20022:tech:xsd:pain.001.001.03"/>
				
				var ns = new Namespace('xsi','http://www.w3.org/2001/XMLSchema-instance')
				Document.addNamespace(ns)							
				var CstmrCdtTrfInitn = <CstmrCdtTrfInitn/>	
				
						var GroupHeader = <GrpHdr/>
							var MessageIdentification = <MsgId/>
							query = "SELECT CIFEmpresa,PoblacionEmpresa,DireccionEmpresa "+
							"FROM cMaestroFicheroEmpresa WHERE  IdEjercicio = '"+globals.Empresa+"'";
							var dataset2 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 1)
							var cif = globals.GCQuitarCaracteresEspeciales(dataset2.getValue(1,1))
							var pob = globals.GCQuitarCaracteresEspeciales(dataset2.getValue(1,2))
							var dir = globals.GCQuitarCaracteresEspeciales(dataset2.getValue(1,3))
							MessageIdentification.setChildren(cif)
							GroupHeader.appendChild(MessageIdentification)
							var CreationDateTime = <CreDtTm/>
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
							
							var NumberOfTransactions = <NbOfTxs/>
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
							var ControlSum = <CtrlSum/>
							var Importe = dataset2.getValue(1,1);
							
							
							ControlSum.setChildren(importetotal)
							GroupHeader.appendChild(ControlSum)
							var InitiatingParty = <InitgPty/>
								var Name = <Nm/>
								Name.setChildren(globals.GCNombreEmpresa)
								InitiatingParty.appendChild(Name)
								var Id1 = <Id/>
									var PrivateIdentification = <PrvtId/>
										var Other = <Othr/>
											var Id2 = <Id/>
											Id2.setChildren(globals.CodigoEmisorSEPA)
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
							
							
									
							
							var PaymentInformation = <PmtInf/>
								var PaymentInformationIdentification = <PmtInfId/>
								PaymentInformationIdentification.setChildren(cif)
								PaymentInformation.appendChild(PaymentInformationIdentification)
								var PaymentMethod = <PmtMtd/>
								PaymentMethod.setChildren('TRF')
								PaymentInformation.appendChild(PaymentMethod)
								var BatchBooking = <BtchBookg/>
								BatchBooking.setChildren(true)
								PaymentInformation.appendChild(BatchBooking)
								var PaymentTypeInformation = <PmtTpInf/>
									var ServiceLevel = <SvcLvl/>
										var Code = <Cd/>
										Code.setChildren('SEPA')
										ServiceLevel.appendChild(Code)									
									PaymentTypeInformation.appendChild(ServiceLevel)									
								var  RequestedExecutionDate = <ReqdExctnDt/>
								RequestedExecutionDate.setChildren(utils.dateFormat(fechavencimiento,'yyyy-MM-dd'))
								var Debtor = <Dbtr/>
									var Name2 = <Nm/>
									Name2.setChildren(globals.GCNombreEmpresa)
									Debtor.appendChild(Name2)
									var PostalAddress = <PstlAdr/> 
										var CountrySubDivision = <CtrySubDvsn/>
										CountrySubDivision.setChildren(pob)
										PostalAddress.appendChild(CountrySubDivision)
										var Address = <AdrLine/>
										Address.setChildren(dir)
										PostalAddress.appendChild(Address)									
									Debtor.appendChild(PostalAddress)								
								var DebtorAccount = <DbtrAcct/>
									var Identification = <Id/>
										var IBAN = <IBAN/>
										IBAN.setChildren(miiban)
										Identification.appendChild(IBAN)									
									DebtorAccount.appendChild(Identification)									
								var DebtorAgent = <DbtrAgt/>
									var FinancialInstitutionIdentification = <FinInstnId/>
										DebtorAgent.appendChild(FinancialInstitutionIdentification)
								var ChargeBearer = <ChrgBr/>
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
										var PaymentIdentification = <PmtId/>
											var InstructionIdentification = <InstrId/>
											InstructionIdentification.setChildren('NOTPROVIDED')
											PaymentIdentification.appendChild(InstructionIdentification)
											var EndToEndIdentification = <EndToEndId/>
											var cli_prov = dataset.getValue(i,4)
											EndToEndIdentification.setChildren(cli_prov)
											PaymentIdentification.appendChild(EndToEndIdentification)
										CreditTransferTransactionInformation.appendChild(PaymentIdentification)										
										var Amount = <Amt/>
											var InstructedAmount = <InstdAmt Ccy="EUR"></InstdAmt>
											Importe = dataset.getValue(i,3)
											InstructedAmount.setChildren(Importe)
											Amount.appendChild(InstructedAmount)
										CreditTransferTransactionInformation.appendChild(Amount)											
										var CreditorAgent = <CdtrAgt/>
											var FinancialInstitutionIdentification2 = <FinInstnId/>
												var bic = dataset.getValue(i,22)
												var BICFI2 = <BIC/>//<BICFI/>
												BICFI2.setChildren(bic)
												FinancialInstitutionIdentification2.appendChild(BICFI2)
											CreditorAgent.appendChild(FinancialInstitutionIdentification2)
										var Creditor = <Cdtr/>	
											var Name3 = <Nm/>
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
											var PostalAddress2 = <PstlAdr/>
												if(codpostalempresa){													
													var PostCode = <PstCd/>
													PostCode.setChildren(codpostalempresa)
													PostalAddress2.appendChild(PostCode)
													}
												if(poblacionempresa){													
													var TownName = <TwnNm/>
													TownName.setChildren(poblacionempresa)
													PostalAddress2.appendChild(TownName)
													}
													if(provinciaempresa){													
													CountrySubDivision = <CtrySubDvsn/>
													CountrySubDivision.setChildren(provinciaempresa)
													PostalAddress2.appendChild(CountrySubDivision)
													}
												if(paisempresa){													
													var Country = <CtrySubDvsn/>
													Country.setChildren(paisempresa)
													PostalAddress2.appendChild(Country)
													}
												if(direccionempresa){													
													var AddressLine = <AdrLine/>
													AddressLine.setChildren(direccionempresa)
													PostalAddress2.appendChild(AddressLine)
													}		
											Creditor.appendChild(PostalAddress2)											
										var CreditorAccount = <CdtrAcct/>
											var Identification2 = <Id/> 
												IBAN = <IBAN/> 
												IBAN.setChildren(IBANempresa)
												Identification2.appendChild(IBAN)
											CreditorAccount.appendChild(Identification2)
										var RemittanceInformation = <RmtInf/>
											var Unstructured = <Ustrd/>
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
				var newxml = utils.stringReplace(xml.toString(),' xmlns=""','')
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
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');	*/	
					
					var jsFile = plugins.file.createTempFile('SEPA','.xml');
					
					var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
					if (!success) application.output('Could not write file.');
					
					//plugins.file.streamFilesToServer(jsFile)
					//plugins.file.openFile(jsFile,"_blank",'application/xml')
					else plugins.file.openFile("SEPA.xml",jsFile.getBytes(),'application/txt')
				//}
				
			}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} FECH
 *
 *
 *
 * @properties={typeid:24,uuid:"CEAB2B88-714A-461B-9DC5-4C0DEAA71541"}
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
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Faltan datos fiscales necesarios de '+nombreempresa,'¡Error!')
			else globals.GCshowErrorDialog('Faltan datos fiscales necesarios de '+nombreempresa,null,'Aceptar',null,null,null)
			break;
		}
		else if(!forms.dlg_C1958GC.IBAN || !forms.dlg_C1958GC.SWIFT || !forms.dlg_C1958GC.IdentificadorAcreedor)
		{
			error = 1;
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Faltan datos del acreedor de la remesa '+forms.dlg_C1958.NombreCuenta,'¡Error!')
			else globals.GCshowErrorDialog('Faltan datos del acreedor de la remesa '+forms.dlg_C1958.NombreCuenta,null,'Aceptar',null,null,null)
			break;
		}
	}
}

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
 *
 * @properties={typeid:24,uuid:"50D2F4BF-F4E9-43B7-8E36-6669775AC68F"}
 */
function GenerarXMLCobros2(FECH)
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
		"CuentaBanco ='"+globals.CuentaBanco+"' AND cobropago = 1 and "+
		"NumDocumento = '"+globals.RefDocumento+"' ORDER BY A.[FechaVencimiento],A.[CuentaContable]";
	var dataset = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 99999999)
	var n = dataset.getMaxRowIndex()
	error = 0;
	if(n>0)
	{
		//var miiban = dataset.getValue(1,14)
		xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
		
		var Document = <Document xmlns="urn:iso:std:iso:20022:tech:xsd:pain.008.001.02"/>
		
		var ns = new Namespace('xsi','http://www.w3.org/2001/XMLSchema-instance')
		Document.addNamespace(ns)							
		var CstmrDrctDbtInitn = <CstmrDrctDbtInitn/>	
		
				var GroupHeader = <GrpHdr/>
					var MessageIdentification = <MsgId/>
					var mesagid = Digitos('FSDD'+utils.dateFormat(globals.FechaCargoAbono,'yyyyMMddHHmmssSSS'),34)
					MessageIdentification.setChildren(mesagid)
					GroupHeader.appendChild(MessageIdentification)
					var CreationDateTime = <CreDtTm/>
					var fech = utils.dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')
					fech = fech.replace(' ','T')
					CreationDateTime.setChildren(fech)
					GroupHeader.appendChild(CreationDateTime)
					query = "SELECT ISNULL(SUM(A.[ImporteVencimiento]),0),count(*) "+
						"FROM [CCobrosPagos] A  "+
						"WHERE  A.[Situacion] = 'R'"+
						" AND A.[IdEjercicio] = '"+globals.Empresa+"' AND "+
						"A.[FechaRemesa] ='"+FECH+"' AND "+
						"[CuentaBanco] ='"+globals.CuentaBanco+"' AND cobropago = 1 and "+
						"NumDocumento = '"+globals.RefDocumento+"'";
					var dataset2 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 9999999)
					var importetotal = globals.GCROUND(dataset2.getValue(1,1),2)
					
					query = "SELECT distinct A.[FechaVencimiento],A.CuentaContable "+
						"FROM [CCobrosPagos] A  "+
						"WHERE  A.[Situacion] = 'R'"+
						" AND A.[IdEjercicio] = '"+globals.Empresa+"' AND "+
						"A.[FechaRemesa] ='"+FECH+"' AND cobropago = 1 and "+
						"[CuentaBanco] ='"+globals.CuentaBanco+"' AND "+
						"NumDocumento = '"+globals.RefDocumento+"'";
					dataset2 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 9999999)
					var nrecibos = dataset2.getMaxRowIndex()
					
					var NumberOfTransactions = <NbOfTxs/>
					NumberOfTransactions.setChildren(nrecibos)
					GroupHeader.appendChild(NumberOfTransactions)
					query = "SELECT ISNULL(SUM(A.[ImporteVencimiento]),0),count(*),A.[FechaVencimiento] "+
						"FROM [CCobrosPagos] A  "+
						"WHERE  A.[Situacion] = 'R'"+
						" AND A.[IdEjercicio] = '"+globals.Empresa+"' AND "+
						"A.[FechaRemesa] ='"+FECH+"' AND "+
						"[CuentaBanco] ='"+globals.CuentaBanco+"' AND cobropago = 1 and "+
						"NumDocumento = '"+globals.RefDocumento+"' "+
						"GROUP BY A.[FechaVencimiento] ORDER BY A.[FechaVencimiento]";
					dataset2 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 999999)
					var ControlSum = <CtrlSum/>
					var Importe = dataset2.getValue(1,1)
					//Miro a ver si esta creada Remesa en Banco
						query = "select id from cBancosRemesasCabecera where IdEjercicio ='"+globals.Empresa+
								"' and cuentabanco = '"+globals.CuentaBanco+"' and fecharemesa = '"+utils.dateFormat(globals.FechaCargoAbono,'dd-MM-yyyy')+
								"' and refdocumento = '"+globals.RefDocumento+"'";	
						var dataset3 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 1)
						var uuid = dataset3.getValue(1,1)
						var vSet2 = databaseManager.getFoundSet(globals.conexCONTA, 'cbancosremesascabecera') 
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
							record.usuario = globals.GClogin_usuario
							
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
							record.usuario = globals.GClogin_usuario
							
							databaseManager.saveData(record);
						}
					//
					ControlSum.setChildren(importetotal)
					GroupHeader.appendChild(ControlSum)
					var InitiatingParty = <InitgPty/>
						var Name = <Nm/>
						Name.setChildren(globals.GCNombreEmpresa)
						InitiatingParty.appendChild(Name)
						var Id1 = <Id/>
							var PrivateIdentification = <PrvtId/>
								var Other = <Othr/>
									var Id2 = <Id/>
									Id2.setChildren(globals.CodigoEmisorSEPA)
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
						" AND A.[IdEjercicio] = '"+globals.Empresa+"' AND "+
						"A.[FechaVencimiento] ='"+utils.dateFormat(fechavencimiento,'dd-MM-yyyy')+"' AND "+
						"[CuentaBanco] ='"+globals.CuentaBanco+"' AND cobropago = 1 and "+
						"NumDocumento = '"+globals.RefDocumento+"'";
					var dataset4 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 9999999)
					nrecibos = dataset4.getMaxRowIndex()
					//nrecibos = dataset2.getValue(j,2)
					
					
					var PaymentInformation = <PmtInf/>
						var PaymentInformationIdentification = <PmtInfId/>
						PaymentInformationIdentification.setChildren('REF'+fechacreacionXML)
						PaymentInformation.appendChild(PaymentInformationIdentification)
						var PaymentMethod = <PmtMtd/>
						PaymentMethod.setChildren('DD')
						PaymentInformation.appendChild(PaymentMethod)
						var NumberOfTransactions2 = <NbOfTxs/>
						NumberOfTransactions2.setChildren(nrecibos)
						PaymentInformation.appendChild(NumberOfTransactions2)
						var ControlSum2 = <CtrlSum/>
						ControlSum2.setChildren(Importe)
						PaymentInformation.appendChild(ControlSum2)
						var PaymentTypeInformation = <PmtTpInf/>
							var ServiceLevel = <SvcLvl/>
								var Code = <Cd/>
								Code.setChildren('SEPA')
								ServiceLevel.appendChild(Code)
							var LocalInstrument = <LclInstrm/>
								var Code2 = <Cd/>
								Code2.setChildren('CORE')
								LocalInstrument.appendChild(Code2)
							
								
								
								
							//Modificacion temporal a RCUR todos recibos
							var SequenceType = <SeqTp/>
							SequenceType.setChildren('RCUR')	
							PaymentTypeInformation.appendChild(ServiceLevel)
							PaymentTypeInformation.appendChild(LocalInstrument)
							PaymentTypeInformation.appendChild(SequenceType)
							
							
						var RequestedCollectionDate = <ReqdColltnDt/>
						RequestedCollectionDate.setChildren(utils.dateFormat(fechavencimiento,'yyyy-MM-dd'))
						var Creditor = <Cdtr/>
							var Name2 = <Nm/>
							//Name2.setChildren(globals.NombreEmpresa)
							Name2.setChildren(forms.dlg_C1958.NombreAcreedor)
							Creditor.appendChild(Name2)
							var PostalAddress = <PstlAdr/> 
							Creditor.appendChild(PostalAddress)
							var Id3 = <Id/>
								var PrivateIdentification2 = <PrvtId/>
									var Other2 = <Othr/>
										var Id4 = <Id/>
										Id4.setChildren(/*globals.CodigoEmisorSEPA*/forms.dlg_C1958.IdentificadorAcreedor)
										Other2.appendChild(Id4)
									PrivateIdentification2.appendChild(Other2)
							Id3.appendChild(PrivateIdentification2)
							Creditor.appendChild(Id3)
						var CreditorAccount = <CdtrAcct/>
							var Identification = <Id/>
								var IBAN = <IBAN/>
								IBAN.setChildren(/*miiban*/forms.dlg_C1958.IBAN)
								Identification.appendChild(IBAN)
							/*var Currency = <Ccy/>
							Currency.setChildren('EUR')*/
							CreditorAccount.appendChild(Identification)
							//CreditorAccount.appendChild(Currency)
						var CreditorAgent = <CdtrAgt/>
							var FinancialInstitutionIdentification = <FinInstnId/>
								var BICFI = <BIC/>//<BICFI/>
								BICFI.setChildren(dataset.getValue(1,15))
								FinancialInstitutionIdentification.appendChild(BICFI)
							CreditorAgent.appendChild(FinancialInstitutionIdentification)
						var ChargeBearer = <ChrgBr/>
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
						var CreditorSchemeIdentification = <CdtrSchmeId/>
										var Identification5 = <Id/>
											PrivateIdentification = <PrvtId/>
												Other = <Othr/>
													var Identification6 = <Id/>
													Identification6.setChildren(/*globals.CodigoEmisorSEPA*/forms.dlg_C1958.IdentificadorAcreedor)
													Other.appendChild(Identification6)
													var SchemeName = <SchmeNm/>
														var Proprietary = <Prtry/>
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
							"A.[FechaVencimiento] ='"+utils.dateFormat(fechavencimiento,'dd-MM-yyyy')+"' AND "+
							"CuentaBanco ='"+globals.CuentaBanco+"' AND cobropago = 1 and "+
							"NumDocumento = '"+globals.RefDocumento+"' ORDER BY A.[FechaVencimiento],A.[CuentaContable]";
						dataset = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 99999999)
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
							
							var DirectDebitTransactionInformation = <DrctDbtTxInf/>
								var PaymentIdentification = <PmtId/>
									var InstructionIdentification = <InstrId/>
									InstructionIdentification.setChildren('NOTPROVIDED')
									PaymentIdentification.appendChild(InstructionIdentification)
									var EndToEndIdentification = <EndToEndId/>
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
								
									
									
								var InstructedAmount = <InstdAmt Ccy="EUR"></InstdAmt>
									//Importe = dataset.getValue(i,3)
									InstructedAmount.setChildren(globals.GCROUND(Importe,2))		
								var DirectDebitTransaction = <DrctDbtTx/>
									var MandateRelatedInformation = <MndtRltdInf/>
									var refmandato = dataset.getValue(i,20)	
									var fechamandato = dataset.getValue(i,21)	
									//Si no tengo almacenado Referencia de Mandato creo uno con mi CIF y su CIF
									if(refmandato == null || refmandato == '')
									{
										var cifemp = dataset.getValue(i,28)
										refmandato = cifemp+globals.CIF;
										fechamandato = new Date()
										
										//Actualizo datos fiscales
										var vSet = databaseManager.getFoundSet(globals.conexCONTA, 'cmaestrodatosfiscales')
										uuid = dataset.getValue(i,31)
										
										//load record by ID in foundset  
										vSet.loadRecords(databaseManager.convertToDataSet([uuid]))
										record = vSet.getRecord(vSet.getSelectedIndex())
										
										record.refmandatosepa = refmandato;
										record.fechafirmamandato = fechamandato;
										databaseManager.saveData(record)
									}
									var MandateIdentification = <MndtId/>
										MandateIdentification.setChildren(refmandato)
										MandateRelatedInformation.appendChild(MandateIdentification)
										var DateOfSignature = <DtOfSgntr/>
										DateOfSignature.setChildren(utils.dateFormat(fechamandato,'yyyy-MM-dd'))
										MandateRelatedInformation.appendChild(DateOfSignature)
										var AmendmentIndicator = <AmdmntInd/>
										AmendmentIndicator.setChildren(false)
										MandateRelatedInformation.appendChild(AmendmentIndicator)
									/*var CreditorSchemeIdentification = <CdtrSchmeId/>
										var Identification5 = <Id/>
											PrivateIdentification = <PrvtId/>
												Other = <Othr/>
													var Identification6 = <Id/>
													Identification6.setChildren(forms.dlg_C1958.IdentificadorAcreedor)
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
								var DebtorAgent = <DbtrAgt/>
									var FinancialInstitutionIdentification2 = <FinInstnId/>
										var bic = dataset.getValue(i,22)
										var BICFI2 = <BIC/>//<BICFI/>
										BICFI2.setChildren(bic)
										FinancialInstitutionIdentification2.appendChild(BICFI2)
									DebtorAgent.appendChild(FinancialInstitutionIdentification2)
								var Debtor = <Dbtr/>	
									var Name3 = <Nm/>
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
									var PostalAddress2 = <PstlAdr/>
										if(provinciaempresa){													
											var Department = <Dept/>
											Department.setChildren(provinciaempresa)
											PostalAddress2.appendChild(Department)
											}
										if(codpostalempresa){													
											var PostCode = <PstCd/>
											PostCode.setChildren(codpostalempresa)
											PostalAddress2.appendChild(PostCode)
											}
										if(poblacionempresa){													
											var TownName = <TwnNm/>
											TownName.setChildren(poblacionempresa)
											PostalAddress2.appendChild(TownName)
											}
										if(paisempresa){													
											var Country = <Ctry/>
											Country.setChildren(paisempresa)
											PostalAddress2.appendChild(Country)
											}
										if(direccionempresa){													
											var AddressLine = <AdrLine/>
											AddressLine.setChildren(direccionempresa)
											PostalAddress2.appendChild(AddressLine)
											}		
									Identification = <Id/>
										var OrganisationIdentification = <OrgId/> 
											Other = <Othr/>
												Identification2 = <Id/>
												Identification2.setChildren(cifempresa)
												Other.appendChild(Identification2)
										OrganisationIdentification.appendChild(Other)
										Identification.appendChild(OrganisationIdentification)
									Debtor.appendChild(PostalAddress2)
									Debtor.appendChild(Identification)
									
								var DebtorAccount = <DbtrAcct/>
									var Identification2 = <Id/> 
										IBAN = <IBAN/> 
										IBAN.setChildren(IBANempresa)
										Identification2.appendChild(IBAN)
									var Currency2 = <Ccy/>
									Currency2.setChildren('EUR')											
									DebtorAccount.appendChild(Identification2)
									DebtorAccount.appendChild(Currency2)
								var RemittanceInformation = <RmtInf/>
									var Unstructured = <Ustrd/>
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
		var newxml = utils.stringReplace(xml.toString(),' xmlns=""','')
		//var xml2 = new XML(newxml)
		application.output(newxml);
		
		
		/*var jsFile = plugins.file.createTempFile('SEPA','.xml');
		
		var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
		if (!success) application.output('Could not write file.');
		//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
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
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');		*/
				
				var jsFile = plugins.file.createTempFile('SEPA','.xml');
				
				var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
				if (!success) application.output('Could not write file.');
				
				//plugins.file.streamFilesToServer(jsFile)
				//plugins.file.openFile(jsFile,"_blank",'application/xml')
				else plugins.file.openFile("SEPA.xml",jsFile.getBytes(),'application/txt')
			//}
	}
}
