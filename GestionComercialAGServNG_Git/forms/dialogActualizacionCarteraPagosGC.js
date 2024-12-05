/**
 * @properties={typeid:24,uuid:"2C87CF6B-360F-4A36-88A3-E6852D8391D5"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Actualizacion Cartera Pagos').hide();
	globals.GCenableBgElements();
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"54656F41-CEC8-4A5B-A3E7-039143605C57"}
 */
var con = '';

/**
 * @properties={typeid:24,uuid:"24E3564F-D330-4B69-809A-36B5C974045C"}
 * @SuppressWarnings(unused)
 */
function btn_ok()
{
	try
	{
		con = null;
		
		if(forms.dlg_ActualizacionCarteraPagosGC.DesdeProveedor)
		{
			var desdeprov = forms.dlg_ActualizacionCarteraPagosGC.DesdeProveedor
		}
		else
		{
			desdeprov = 1
		}
		if(forms.dlg_ActualizacionCarteraPagosGC.HastaProveedor)
		{
			var hastaprov = forms.dlg_ActualizacionCarteraPagosGC.HastaProveedor
		}
		else
		{
			hastaprov = 9999999999
		}
		
		
		
		if(forms.dlg_ActualizacionCarteraPagosGC.DesdeFactura)
		{
			var desdenfact = forms.dlg_ActualizacionCarteraPagosGC.DesdeFactura
		}
		else
		{
			desdenfact = 1
		}
		if(forms.dlg_ActualizacionCarteraPagosGC.HastaFactura)
		{
			var hastanfact = forms.dlg_ActualizacionCarteraPagosGC.HastaFactura
		}
		else
		{
			hastanfact = 99999999
		}
		
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		con = dataset.getValue(1,2);
		
		GenerarCarteraPagos2()
		
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
				query = "select distinct year(fecha_cfca) from tbFacturaCompraCabecera "+
						"where (pro_cfca BETWEEN " + desdeprov + " AND "+ hastaprov+
					") AND (nup_cfca BETWEEN '" + desdenfact+"' AND '"+hastanfact+
						"') order by year(fecha_cfca) asc"
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				if(dataset.getValue(1,1) != Agno)
				{
					globals.GCshowInfoDialog('El año de la Factura no coincide con el año del ejercicio contable.',null,'Aceptar',null,null,null)
				}
				else
				{
					GenerarCarteraPagos(Empresa)
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
 * @properties={typeid:24,uuid:"D6C3A89C-A27C-4AAF-AC50-05695DFEB5C4"}
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
 *
 * @properties={typeid:24,uuid:"D3ED5583-D297-468C-8580-DE6F64796B0D"}
 */
function GenerarCarteraPagos(E) {
	
	if(forms.dlg_ActualizacionCarteraPagosGC.DesdeProveedor)
	{
		var desdeprov = forms.dlg_ActualizacionCarteraPagosGC.DesdeProveedor
	}
	else
	{
		desdeprov = 1
	}
	if(forms.dlg_ActualizacionCarteraPagosGC.HastaProveedor)
	{
		var hastaprov = forms.dlg_ActualizacionCarteraPagosGC.HastaProveedor
	}
	else
	{
		hastaprov = 9999999999
	}
	
	
	
	if(forms.dlg_ActualizacionCarteraPagosGC.DesdeFactura)
	{
		var desdenfact = forms.dlg_ActualizacionCarteraPagosGC.DesdeFactura
	}
	else
	{
		desdenfact = ''
	}
	if(forms.dlg_ActualizacionCarteraPagosGC.HastaFactura)
	{
		var hastanfact = forms.dlg_ActualizacionCarteraPagosGC.HastaFactura
	}
	else
	{
		hastanfact = 'ZZZZZZZZ'
	}
	
	var query = "SELECT A.pro_efc,A.nup_efc,A.fecha_efc,A.cfpa_efc,A.porc_efc,A.impo_efc,"+
				"C.CuentaContable,B.impnee_cfca,B.fecha_cfca,B.fechpago_cfca "+
				"from efectos AS A INNER JOIN "+
				"tbfacturacompracabecera AS B ON A.pro_efc = B.pro_cfca AND "+
				"A.nup_efc = B.nup_cfca LEFT JOIN "+
				"tbMaestroProveedores C ON B.pro_cfca = C.codpro "+
				"where (A.pro_efc BETWEEN " + desdeprov + " AND "+ hastaprov+
				") AND (A.nup_efc BETWEEN '" + desdenfact+"' AND '"+hastanfact+
				"') ORDER BY A.pro_efc,A.nup_efc,A.nli_efc";
				//") AND (B.situconta IS NULL OR B.situconta = '') ORDER BY A.eje_ef,A.ser_ef,A.nup_ef,A.nli_ef";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
	
	var rows = dataset.getMaxRowIndex();
	
	for(var i=1;i<=rows;i++)
	{
		var FV = dataset.getValue(i,10);
		var CC = dataset.getValue(i,7);
		var prov = dataset.getValue(i,1);
		if(CC == null || CC == '') CC = '400'+utils.numberFormat(prov,'00000');
		var FP = dataset.getValue(i,4);
		var fra = "F:"+dataset.getValue(i,2)+
		  " "+utils.dateFormat(dataset.getValue(i,3),'ddMMyyyy')+" "+utils.dateFormat(dataset.getValue(i,10),'ddMMyyyy');
		  //Fra = "F:"/*+dataset.getValue(i,10)*/+utils.numberFormat(dataset.getValue(i,12),'00000')

		//var fra = 'F:'+dataset.getValue(i,1).toString()+utils.numberFormat(dataset.getValue(i,3),'00000').toString()+dataset.getValue(i,2);
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
		var dataset2 = databaseManager.getDataSetByQuery(con, query, null, 1)
		var uuid = dataset2.getValue(1,1)
		var vSet = databaseManager.getFoundSet(con, 'ccobrospagos')  
		  
		//load record by ID in foundset  
		//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
		if(CC)
		{
			if(uuid == null)
			{
				query = "select cif from tbmaestroproveedores "+
					    "where  codpro = "+prov;
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
 *
 * @properties={typeid:24,uuid:"A75920A0-9FB7-4DA9-B7AE-629D82433901"}
 */
function GenerarCarteraPagos2() {
	
	if(forms.dlg_ActualizacionCarteraPagosGC.DesdeProveedor)
	{
		var desdeprov = forms.dlg_ActualizacionCarteraPagosGC.DesdeProveedor
	}
	else
	{
		desdeprov = 1
	}
	if(forms.dlg_ActualizacionCarteraPagosGC.HastaProveedor)
	{
		var hastaprov = forms.dlg_ActualizacionCarteraPagosGC.HastaProveedor
	}
	else
	{
		hastaprov = 9999999
	}
	
	
	
	if(forms.dlg_ActualizacionCarteraPagosGC.DesdeFactura)
	{
		var desdenfact = forms.dlg_ActualizacionCarteraPagosGC.DesdeFactura
	}
	else
	{
		desdenfact = ''
	}
	if(forms.dlg_ActualizacionCarteraPagosGC.HastaFactura)
	{
		var hastanfact = forms.dlg_ActualizacionCarteraPagosGC.HastaFactura
	}
	else
	{
		hastanfact = 'ZZZZZZZZ'
	}
	
	var query = "SELECT A.pro_efc,A.nup_efc,A.fecha_efc,A.cfpa_efc,A.porc_efc,A.impo_efc,"+
				"C.CuentaContable,B.impnee_cfca,B.fecha_cfca,B.fechpago_cfca "+
				"from efectos AS A INNER JOIN "+
				"tbfacturacompracabecera AS B ON A.pro_efc = B.pro_cfca AND "+
				"A.nup_efc = B.nup_cfca LEFT JOIN "+
				"tbMaestroProveedores C ON B.pro_cfca = C.codpro "+
				"where (A.pro_efc BETWEEN " + desdeprov + " AND "+ hastaprov+
				") AND (A.nup_efc BETWEEN '" + desdenfact+"' AND '"+hastanfact+
				"') ORDER BY A.pro_efc,A.nup_efc,A.nli_efc";
				//") AND (B.situconta IS NULL OR B.situconta = '') ORDER BY A.eje_ef,A.ser_ef,A.nup_ef,A.nli_ef";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
	
	var rows = dataset.getMaxRowIndex();
	
	for(var i=1;i<=rows;i++)
	{
		var FV = dataset.getValue(i,10);
		var CC = dataset.getValue(i,7);
		var prov = dataset.getValue(i,1);
		if(CC == null || CC == '') CC = '400'+utils.numberFormat(prov,'00000');
		var FP = dataset.getValue(i,4);
		var fra = "F:"+dataset.getValue(i,2)+
		  " "+utils.dateFormat(dataset.getValue(i,9),'ddMMyyyy')+" "+utils.dateFormat(dataset.getValue(i,10),'ddMMyyyy');
		  //Fra = "F:"/*+dataset.getValue(i,10)*/+utils.numberFormat(dataset.getValue(i,12),'00000')

		//var fra = 'F:'+dataset.getValue(i,1).toString()+utils.numberFormat(dataset.getValue(i,3),'00000').toString()+dataset.getValue(i,2);
		var IMPEFECTO = dataset.getValue(i,6);
		var fechafra = dataset.getValue(i,9);
		var impfra = dataset.getValue(i,8);
		query = "select * "+
		"from cCobrosPagos "+ 
		"where FechaVencimiento = '"+utils.dateFormat(FV,'dd-MM-yyyy')+"' AND " +
		"CuentaContable = "+CC+" AND "+
		"ImporteVencimiento = "+IMPEFECTO+
		" AND IdFactura ='"+fra+"'";
		var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var uuid = dataset2.getValue(1,1)
		//var vSet = databaseManager.getFoundSet(con, 'ccobrospagos')  
		  
		//load record by ID in foundset  
		//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
		if(prov != null && prov != '')
		{
			if(uuid == null)
			{
				query = "select cif from tbmaestroproveedores "+
					    "where  codpro = "+prov;
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
				forms.FrmCobrosPagosGC.cuentacontable = prov;
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
			else
			{
				var bool = forms.FrmCobrosPagosGC.foundset.loadRecords(databaseManager.convertToDataSet([uuid]))
				if(bool == true)
				{
					query = "select cif from tbmaestroproveedores "+
				    "where  codpro = "+prov;
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
					forms.FrmCobrosPagosGC.foundset.cuentacontable = prov;
					forms.FrmCobrosPagosGC.foundset.cobropago = 2;
					forms.FrmCobrosPagosGC.foundset.formapago = FP;
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
	}
}

/**
*
*
*
*
 * @type {Array}
 *
* @properties={typeid:35,uuid:"525F4767-A0F8-49B9-B2EC-6FE1D5FBDDDF",variableType:-4}
 */
var Letras = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"CF229BB6-50C3-4AE0-BCA6-3188A033D298"}
 */
function onHide(event) {
	if(globals.GCdialog_performMethod)
	{
			//perform whatever method is in the global
			eval(globals.GCdialog_performMethod)
			globals.GCdialog_performMethod = null
	}
	
}
