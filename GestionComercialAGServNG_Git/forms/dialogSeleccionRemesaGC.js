/**
 *
 * @properties={typeid:24,uuid:"2332A8F3-B61D-4C5E-8972-5BE6DB612E1D"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
    globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Seleccion Remesa GC').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"14440A57-ACC6-43F0-8A03-C2171B415178"}
 */
function btn_C19()
{
	//set a global to the text of the button pressed
	forms.dlg_C1958GC.TipoFicheroSEPA = 'C19';
	globals.GCshowDialogFicheroGenerar('Fichero a Generar', 1, null, null, true, null, null, null, null, null);
		//application.getWindow('Seleccion Remesa').hide();
		//globals.enableBgElements1();
		//globals.enableBgElements();		
		
}

/**
*
*
 * @properties={typeid:24,uuid:"A284A389-27F5-4FD3-A56F-9C7CE22C58E8"}
 */
function btn_C58()
{
	forms.dlg_C1958GC.TipoFicheroSEPA = 'C58';
	globals.GCshowDialogFicheroGenerar('Fichero a Generar', 1, null, null, true, null, null, null, null, null);
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"0F9699BA-F031-4CB0-A47B-5C3F0CDAA6E1"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A3836324-5677-4BE0-BC16-173683158C47"}
 */
function btnGenerarRemesa(event) {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = elements.btn_generar.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing())	globals.GCsaveEdits();
	}
	
	/*var d = globals.FechaCargoAbono.getDate()
	var m = globals.FechaCargoAbono.getMonth() + 1
	var a = globals.FechaCargoAbono.getFullYear()
	var fecha = d+'-'+m+'-'+a;*/
	
	elements.btn_generar.enabled = false;
	elements.btn_ok.enabled = true;
	//elements.btn_okc.enabled = true;
	//elements.btn_contabilizacion.enabled = true
	forms.lst_EfectosPendientes2GC.elements.Situacion.enabled = false;
	
	var query = "select * from cCobrosPagos where Situacion = 'S'";	
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
	var n = dataset.getValue(1, 1)
	
	if(n != null)
	{
		// get the foundset updater object

		var updater = databaseManager.getFoundSetUpdater(gcactualizacionsituacioncobrospagos);	 

		// set the column value
		
		updater.setColumn('situacion', 'R');
		var fech = utils.dateFormat(globals.FechaCargoAbono,'dd-MM-yyyy')
		globals.FechaCargoAbono = utils.parseDate(fech,'dd-MM-yyyy')
		updater.setColumn('fecharemesa', globals.FechaCargoAbono);
		updater.setColumn('cuentabanco', globals.CuentaBanco);
		if(globals.RefDocumento == null) globals.RefDocumento = ' ';
		updater.setColumn('numdocumento', globals.RefDocumento); 

		// update in all the records in the foundset

		updater.performUpdate();
		databaseManager.refreshRecordFromDatabase(forms.FrmCobrosPagosGC.foundset,-1)
		/*query = "UPDATE cCobrosPagos "+
					"SET Situacion = 'R',"+
					"FechaRemesa = '"+fecha+      
					"',CuentaBanco ='"+globals.CuentaBanco+
					"',NumDocumento ='"+globals.RefDocumento+
					"' where IdEjercicio ='"+globals.Empresa+"' AND Situacion = 'S'";
	
		var done = plugins.rawSQL.executeSQL(globals.conex,"ccobrospagos",query)
		if (done)
		{
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache(globals.conex,"ccobrospagos")				
	
		}
		else
		{
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error',  'SQL exception: '+msg,  'Ok')
		}*/
		
		/*query = "select count(*),isnull(sum(ImporteVencimiento),0) "+
				"from cCobrosPagos where cuentabanco = '"+globals.CuentaBanco+"' and fecharemesa = '"+utils.dateFormat(globals.FechaCargoAbono,'dd-MM-yyyy')+
				"' and numdocumento = '"+globals.RefDocumento+"'"+
				" group by FechaRemesa,numdocumento";	
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var cont = dataset.getValue(1,1)
		var importe = dataset.getValue(1,2)
		
		if(cont > 0)
		{
			query = "select id from cBancosRemesasCabecera where cuentabanco = '"+globals.CuentaBanco+"' and fecharemesa = '"+utils.dateFormat(globals.FechaCargoAbono,'dd-MM-yyyy')+
					"' and refdocumento = '"+globals.RefDocumento+"'";	
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var uuid = dataset.getValue(1,1)
			if(uuid == null)
			{
				var vSet = databaseManager.getFoundSet(globals.GCconex, 'cbancosremesascabecera')  
				  
				//load record by ID in foundset  
				//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
				vSet.newRecord();
				var record = vSet.getSelectedRecord();
				record.idejercicio = globals.Empresa;
				record.cuentabanco = globals.CuentaBanco
				record.fecharemesa = globals.FechaCargoAbono
				if(globals.RefDocumento == null || globals.RefDocumento == '') var ref = ' ';
				else ref = globals.RefDocumento
				record.refdocumento = ref
				record.importeremesa = importe
				record.nefectos = cont
				record.usuario = globals.login_usuario
				
				databaseManager.saveData(record);
			}
			else
			{
				vSet = databaseManager.getFoundSet(globals.conex, 'cbancosremesascabecera')  
				vSet.loadRecords(databaseManager.convertToDataSet([uuid]))  
				
				record = vSet.getSelectedRecord();
				record.idejercicio = globals.Empresa;
				record.cuentabanco = globals.CuentaBanco
				record.fecharemesa = globals.FechaCargoAbono
				if(globals.RefDocumento == null || globals.RefDocumento == '') ref = ' ';
				else ref = globals.RefDocumento
				record.refdocumento = ref
				record.importeremesa = importe
				record.nefectos = cont
				record.usuario = globals.login_usuario
				
				databaseManager.saveData(record);
			}
		}
		*/
		
	}
	var rows = dataset.getMaxRowIndex()
	
	for(var i=1;i<=rows;i++){
		//var idfactura = dataset.getValue(i,7);
		var fechfactura = dataset.getValue(i,8);
		var importevencimiento = dataset.getValue(i,6);
		var importefactura = dataset.getValue(i,9);
		var cuenta = dataset.getValue(i,3);
		
		query = "select id,eje_cfa,ser_cfa,nup_cfa from tbfacturacabecera where clie_cfa ="+cuenta+
		" and fecha_cfa ='"+utils.dateFormat(fechfactura,'dd-MM-yyyy')+"' and impnee_cfa ="+importefactura;	
		var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var uuid = dataset2.getValue(1,1)
		
		if(uuid)
		{
			var ejer = dataset2.getValue(1,2)
			var ser = dataset2.getValue(1,3)
			var Fra = dataset2.getValue(1,4)
			
			forms.dlg_FacturaCobrosGC.foundset.newRecord(true)
			forms.dlg_FacturaCobrosGC.eje_cob = ejer;
			forms.dlg_FacturaCobrosGC.ser_cob = ser;
			forms.dlg_FacturaCobrosGC.nup_cob = Fra;
			forms.dlg_FacturaCobrosGC.validate_autoEnter()
			forms.dlg_FacturaCobrosGC.impor_cob = importevencimiento;
			forms.dlg_FacturaCobrosGC.motivo_cob = globals.DescCuentaBanco;
			
			databaseManager.saveData()
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A98AD927-5310-437B-8A22-D26C071E196E"}
 * @SuppressWarnings(deprecated)
 */
function btnRefrescar(event) {
	// TODO Auto-generated method stub
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) databaseManager.revertEditedRecords()		
	}
	var query = "DELETE FROM [CCobrosPagosImpresion] "+
	"WHERE [Usuario] ="+globals.GClogin_usuario;

	var done = plugins.rawSQL.executeSQL(globals.GCconex,"CCobrosPagosImpresion",query)
	if (done)
	{
		//flush is required when changes are made in db
		plugins.rawSQL.flushAllClientsCache(globals.GCconex,"CCobrosPagosImpresion")				
	
	}
	else
	{
		var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error',  'SQL exception: '+msg,  'Ok')
	}
	globals.FechaVtoSel = null
	globals.NFacturaSel = null
	globals.ImporteSel = null
	globals.ImporteAcumSel = null
	globals.FPSel = null
	globals.CuentaSel = null
	globals.DescCuentaSel = null
	globals.DocuSel = null
	globals.ConceptoSel = null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9CB4AB3E-B40A-4A57-83F1-EE474F1CDF4E"}
 */
function btnImprimir(event) {
	// TODO Auto-generated method stub
	globals.btn_runJasperReportConsultaCobrosPagosSeleccionGC();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"60E400F0-792B-459D-B532-CBB56C6F423F"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_generar.text)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing()
		}
		
	}	
	application.getWindow('Seleccion Remesa GC').hide();
	globals.GCenableBgElements();
	return true
}

/**
* Callback method for when form is shown.
*
*
*
*
 *
  *
 * @properties={typeid:24,uuid:"D9409943-F0CD-45AC-9990-EDA70659AFE3"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"669D9F76-2ABC-4BED-BE64-CBB122130AA1"}
 */
function btn_contabilizacion(event) {
	// TODO Auto-generated method stub
	globals.showDialogContabilizacionCobrosPagos('Contabilización de Cobros/Pagos', 1, null, null, null, null, null, null, null, null);
	
}
