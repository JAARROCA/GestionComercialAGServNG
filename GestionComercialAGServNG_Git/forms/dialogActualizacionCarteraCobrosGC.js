/**
 * @properties={typeid:24,uuid:"F278B468-EA47-4C63-AB3A-F71951968E30"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Actualizacion Cartera Cobros').hide();
	globals.GCenableBgElements();
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0960BCD7-AD8C-467D-ABD1-CD608794D46C"}
 */
var con = '';

/**
 * @properties={typeid:24,uuid:"33F0A90B-2BC6-446A-B852-A50D6041D567"}
 * @SuppressWarnings(unused)
 */
function btn_ok()
{
	try
	{
		con = null;
		
		if(forms.dlg_ActualizacionCarteraCobrosGC.DesdeEjer != null)
		{
			var desdeejer = forms.dlg_ActualizacionCarteraCobrosGC.DesdeEjer
		}
		else
		{
			desdeejer = 1
		}
		if(forms.dlg_ActualizacionCarteraCobrosGC.HastaEjer != null)
		{
			var hastaejer = forms.dlg_ActualizacionCarteraCobrosGC.HastaEjer
		}
		else
		{
			hastaejer = 999999999
		}
		
		if(forms.dlg_ActualizacionCarteraCobrosGC.DesdeSer != null)
		{
			var desdeser = forms.dlg_ActualizacionCarteraCobrosGC.DesdeSer
		}
		else
		{
			desdeser = ''
		}
		if(forms.dlg_ActualizacionCarteraCobrosGC.HastaSer != null)
		{
			var hastaser = forms.dlg_ActualizacionCarteraCobrosGC.HastaSer
		}
		else
		{
			hastaser = 'Z'
		}
		
		if(forms.dlg_ActualizacionCarteraCobrosGC.DesdeNup != null)
		{
			var desdenfact = forms.dlg_ActualizacionCarteraCobrosGC.DesdeNup
		}
		else
		{
			desdenfact = 1
		}
		if(forms.dlg_ActualizacionCarteraCobrosGC.HastaNup != null)
		{
			var hastanfact = forms.dlg_ActualizacionCarteraCobrosGC.HastaNup
		}
		else
		{
			hastanfact = 999999999
		}
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		con = dataset.getValue(1,2);
		
		GenerarCarteraCobros2()
		
		if(Empresa && con)
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
					globals.GCshowInfoDialog('El año de la Factura no coincide con el año del ejercicio contable.',null,'Aceptar',null,null,null)
				}
				else
				{
					GenerarCarteraCobros(Empresa)
				}
			}
		}
		application.getWindow('Actualizacion Cartera Cobros').hide();
		globals.GCenableBgElements();
	}
	catch(e)
	{
		application.output(e)
	}		
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4009A688-E85E-49E0-9DA4-52542FB424A8"}
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
 *
 * @properties={typeid:24,uuid:"31E74244-856C-40CB-AF07-232A8B4CC6F0"}
 */
function GenerarCarteraCobros(E) {
	
	if(forms.dlg_ActualizacionCarteraCobrosGC.DesdeEjer != null)
	{
		var desdeejer = forms.dlg_ActualizacionCarteraCobrosGC.DesdeEjer
	}
	else
	{
		desdeejer = 1
	}
	if(forms.dlg_ActualizacionCarteraCobrosGC.HastaEjer != null)
	{
		var hastaejer = forms.dlg_ActualizacionCarteraCobrosGC.HastaEjer
	}
	else
	{
		hastaejer = 9999999
	}
	
	if(forms.dlg_ActualizacionCarteraCobrosGC.DesdeSer != null)
	{
		var desdeser = forms.dlg_ActualizacionCarteraCobrosGC.DesdeSer
	}
	else
	{
		desdeser = ''
	}
	if(forms.dlg_ActualizacionCarteraCobrosGC.HastaSer != null)
	{
		var hastaser = forms.dlg_ActualizacionCarteraCobrosGC.HastaSer
	}
	else
	{
		hastaser = ''
	}
	
	if(forms.dlg_ActualizacionCarteraCobrosGC.DesdeNup != null)
	{
		var desdenfact = forms.dlg_ActualizacionCarteraCobrosGC.DesdeNup
	}
	else
	{
		desdenfact = 1
	}
	if(forms.dlg_ActualizacionCarteraCobrosGC.HastaNup != null)
	{
		var hastanfact = forms.dlg_ActualizacionCarteraCobrosGC.HastaNup
	}
	else
	{
		hastanfact = 99999999
	}
	
	var query = "SELECT A.eje_ef,A.ser_ef,A.nup_ef,A.fecha_ef,A.cfpa_ef,A.porc_ef,A.impo_ef,"+
				"C.CuentaContable,B.impnee_cfa,B.fecha_cfa,B.clie_cfa,B.fechcobro_cfa "+
				"from efectos AS A INNER JOIN "+
				"tbFacturaCabecera AS B ON A.eje_ef = B.eje_cfa AND "+
				"A.ser_ef = B.ser_cfa AND A.nup_ef = B.nup_cfa LEFT JOIN "+
				"tbMaestroClientes C ON B.clie_cfa = C.IdCliente "+
				"where (A.eje_ef BETWEEN " + desdeejer + " AND "+ hastaejer+
				") AND (A.ser_ef BETWEEN '" + desdeser +"' AND '"+hastaser+
				"') AND (A.nup_ef BETWEEN " + desdenfact+" AND "+hastanfact+
				") ORDER BY A.eje_ef,A.ser_ef,A.nup_ef,A.nli_ef";
				//") AND (B.situconta IS NULL OR B.situconta = '') ORDER BY A.eje_ef,A.ser_ef,A.nup_ef,A.nli_ef";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
	
	var rows = dataset.getMaxRowIndex();
	
	for(var i=1;i<=rows;i++)
	{
		var FV = dataset.getValue(i,4);
		var CC = dataset.getValue(i,8);
		var cli = dataset.getValue(i,11);
		if(CC == null || CC == '') CC = '430'+utils.numberFormat(cli,'00000');
		var FP = dataset.getValue(i,5);
		var fra = "F:"+dataset.getValue(i,1)+utils.numberFormat(dataset.getValue(i,3),'00000')+dataset.getValue(i,2)+
		  " "+utils.dateFormat(dataset.getValue(i,10),'ddMMyyyy')+" "+utils.dateFormat(dataset.getValue(i,12),'ddMMyyyy');
		var fra2 = "F:"+dataset.getValue(i,1)+utils.numberFormat(dataset.getValue(i,3),'00000')+dataset.getValue(i,2);

		//var fra = 'F:'+dataset.getValue(i,1).toString()+utils.numberFormat(dataset.getValue(i,3),'00000').toString()+dataset.getValue(i,2);
		var IMPEFECTO = dataset.getValue(i,7);
		var fechafra = dataset.getValue(i,10);
		var impfra = dataset.getValue(i,9);
		query = "select * "+
		"from cCobrosPagos "+ 
		"where IdEjercicio = '"+E+"' AND "+
		"FechaVencimiento = '"+utils.dateFormat(FV,'dd-MM-yyyy')+"' AND " +
		"CuentaContable = '"+CC+"' AND "+
		"ImporteVencimiento = "+IMPEFECTO+
		" AND IdFactura ='"+fra2+"'";
		var dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
		var uuid = dataset2.getValue(1,1)
		var vSet = databaseManager.getFoundSet(con, 'ccobrospagos')  
		  
		//load record by ID in foundset  
		//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
		if(CC)
		{
			if(uuid == null)
			{
				query = "select cif from tbmaestroclientes "+
					    "where  Idcliente = "+cli;
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
			
				var record = vSet.getRecord(vSet.newRecord());
				record.id = application.getUUID();
				record.idejercicio = E;
				record.fechavencimiento = FV;
				record.cuentacontable = CC;
				record.cobropago = 1;
				record.formapago = FP;
				record.importevencimiento = IMPEFECTO;			
				record.idfactura = fra2
				record.fechafactura = fechafra;
				record.importefactura = impfra;
				//record.numdocumento = fra;
				record.concepto = fra;
				record.tipodeudor = tipodeudor;
				record.tipoadeudo = tipoadeudo;
				
				databaseManager.saveData(record);
			}
			/*else
			{
				var result = vSet.selectRecord(uuid)
				var fsCount = databaseManager.getFoundSetCount(vSet);
				while(result==false)
				{
					if(fsCount == vSet.getSize())
					{
						return;
					}
					vSet.setSelectedIndex(vSet.getSize());
					result = vSet.selectRecord(uuid);
					
					record = vSet.getRecord(vSet.getSelectedIndex())
					record.idejercicio = E;
					record.fechavencimiento = FV;
					record.cuentacontable = CC;
					record.cobropago = 1;
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
				}
			}*/
			
		}
	}
}

/**
 * Callback method when form is destroyed.
 *
 *
 *
 * @properties={typeid:24,uuid:"FEA24793-0FA8-4363-923C-3FB4CED6F93A"}
 */
function GenerarCarteraCobros2() {
	
	if(forms.dlg_ActualizacionCarteraCobrosGC.DesdeEjer != null)
	{
		var desdeejer = forms.dlg_ActualizacionCarteraCobrosGC.DesdeEjer
	}
	else
	{
		desdeejer = 1
	}
	if(forms.dlg_ActualizacionCarteraCobrosGC.HastaEjer != null)
	{
		var hastaejer = forms.dlg_ActualizacionCarteraCobrosGC.HastaEjer
	}
	else
	{
		hastaejer = 9999999
	}
	
	if(forms.dlg_ActualizacionCarteraCobrosGC.DesdeSer != null)
	{
		var desdeser = forms.dlg_ActualizacionCarteraCobrosGC.DesdeSer
	}
	else
	{
		desdeser = ''
	}
	if(forms.dlg_ActualizacionCarteraCobrosGC.HastaSer != null)
	{
		var hastaser = forms.dlg_ActualizacionCarteraCobrosGC.HastaSer
	}
	else
	{
		hastaser = 'ZZZZZZ'
	}
	
	if(forms.dlg_ActualizacionCarteraCobrosGC.DesdeNup != null)
	{
		var desdenfact = forms.dlg_ActualizacionCarteraCobrosGC.DesdeNup
	}
	else
	{
		desdenfact = 1
	}
	if(forms.dlg_ActualizacionCarteraCobrosGC.HastaNup != null)
	{
		var hastanfact = forms.dlg_ActualizacionCarteraCobrosGC.HastaNup
	}
	else
	{
		hastanfact = 99999999
	}
	
	var query = "SELECT A.eje_ef,A.ser_ef,A.nup_ef,A.fecha_ef,A.cfpa_ef,A.porc_ef,A.impo_ef,"+
				"C.CuentaContable,B.impnee_cfa,B.fecha_cfa,B.clie_cfa,B.fechcobro_cfa "+
				"from efectos AS A INNER JOIN "+
				"tbFacturaCabecera AS B ON A.eje_ef = B.eje_cfa AND "+
				"A.ser_ef = B.ser_cfa AND A.nup_ef = B.nup_cfa LEFT JOIN "+
				"tbMaestroClientes C ON B.clie_cfa = C.IdCliente "+
				"where (A.eje_ef BETWEEN " + desdeejer + " AND "+ hastaejer+
				") AND (A.ser_ef BETWEEN '" + desdeser +"' AND '"+hastaser+
				"') AND (A.nup_ef BETWEEN " + desdenfact+" AND "+hastanfact+
				") ORDER BY A.eje_ef,A.ser_ef,A.nup_ef,A.nli_ef";
				//") AND (B.situconta IS NULL OR B.situconta = '') ORDER BY A.eje_ef,A.ser_ef,A.nup_ef,A.nli_ef";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
	
	var rows = dataset.getMaxRowIndex();
	
	for(var i=1;i<=rows;i++)
	{
		var FV = dataset.getValue(i,4);
		var CC = dataset.getValue(i,8);
		var cli = dataset.getValue(i,11);
		if(CC == null || CC == '') CC = '430'+utils.numberFormat(cli,'00000');
		var FP = dataset.getValue(i,5);
		var fra = "F:"+dataset.getValue(i,1)+utils.numberFormat(dataset.getValue(i,3),'00000')+dataset.getValue(i,2)+
		  " "+utils.dateFormat(dataset.getValue(i,10),'ddMMyyyy')+" "+utils.dateFormat(dataset.getValue(i,12),'ddMMyyyy');
		var fra2 = "F:"+dataset.getValue(i,1)+utils.numberFormat(dataset.getValue(i,3),'00000')+dataset.getValue(i,2);

		var IMPEFECTO = dataset.getValue(i,7);
		var fechafra = dataset.getValue(i,10);
		var impfra = dataset.getValue(i,9);
		query = "select * "+
		"from cCobrosPagos "+ 
		"where FechaVencimiento = '"+utils.dateFormat(FV,'dd-MM-yyyy')+"' AND " +
		"CuentaContable = "+cli+" AND "+
		"ImporteVencimiento = "+IMPEFECTO+		
		" AND IdFactura ='"+fra2+"'";
		var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var uuid = dataset2.getValue(1,1)
		//var vSet = databaseManager.getFoundSet(con, 'ccobrospagos')  
		  
		//load record by ID in foundset  
		//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
		if(cli != null && cli != '')
		{
			if(uuid == null)
			{
				query = "select cif from tbmaestroclientes "+
					    "where  Idcliente = "+cli;
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
			
				forms.FrmCobrosPagosGC.foundset.newRecord(true)	
				forms.FrmCobrosPagosGC.id = application.getUUID()
				forms.FrmCobrosPagosGC.fechavencimiento = FV;
				forms.FrmCobrosPagosGC.cuentacontable = cli;
				forms.FrmCobrosPagosGC.cobropago = 1;
				forms.FrmCobrosPagosGC.formapago = FP;
				forms.FrmCobrosPagosGC.importevencimiento = IMPEFECTO;			
				forms.FrmCobrosPagosGC.idfactura = fra2
				forms.FrmCobrosPagosGC.fechafactura = fechafra;
				forms.FrmCobrosPagosGC.importefactura = impfra;
				//record.numdocumento = fra;
				forms.FrmCobrosPagosGC.concepto = fra;
				forms.FrmCobrosPagosGC.tipodeudor = tipodeudor;
				forms.FrmCobrosPagosGC.tipoadeudo = tipoadeudo;
				
				if (i % 10 == 0) databaseManager.saveData(forms.FrmCobrosPagosGC.foundset);
			}
			else
			{
				var bool = forms.FrmCobrosPagosGC.foundset.loadRecords(databaseManager.convertToDataSet([uuid]))
				if(bool == true)
				{
					query = "select cif from tbmaestroclientes "+
						    "where  Idcliente = "+cli;
					dataset3 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					cif = new String() 
					cif = dataset3.getValue(1,1)
					if(cif != null && cif != '')
					{
						l = utils.stringLeft(cif,1)
						Letr = 'NO'
						for(j=0;j<Letras.length;j++)
						{
							if(Letras[j] == l)
							{
								Letr = 'SI'
								break;
							}
						}
						
						if(Letr == 'SI')
						{
							tipodeudor = 1
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
					tipoadeudo = 4
		
				
					
					forms.FrmCobrosPagosGC.foundset.fechavencimiento = FV;
					forms.FrmCobrosPagosGC.foundset.cuentacontable = cli;
					forms.FrmCobrosPagosGC.foundset.cobropago = 1;
					forms.FrmCobrosPagosGC.foundset.formapago = FP;
					forms.FrmCobrosPagosGC.importevencimiento = IMPEFECTO;			
					forms.FrmCobrosPagosGC.idfactura = fra2
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
	}
}

/**
*
*
*
*
 * @type {Array}
 *
* @properties={typeid:35,uuid:"5C12C106-A407-40B5-94CB-56B56694EA21",variableType:-4}
 */
var Letras = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6C0DEA6A-9585-4252-8B27-477D5E86495A"}
 */
function onHide(event) {
	if(globals.GCdialog_performMethod)
	{
			//perform whatever method is in the global
			eval(globals.GCdialog_performMethod)
			globals.GCdialog_performMethod = null
	}
	
}
