/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"CDFBD030-BCC6-43D3-AD31-026348E35574"}
 */
var busyWindowName = 'dialog_DuplicarPresupuestoGC';

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"D49CFE0E-9302-41FC-BC7F-4FABFC197F8A"}
 */
var uid = '';

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"5429A58D-7CED-4007-855E-3BA544B0EC63"}
 */
var selections = '';

/**
*
 * @properties={typeid:24,uuid:"955F45C3-ECFB-4554-9637-DC2DBF279154"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Duplicar Presupuesto').hide();
	globals.GCenableBgElements();
	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"BC8FD802-B882-4942-83ED-FAF6D772F5AA"}
 * @AllowToRunInFind
 */
function btn_ok(event)
{
	if(!forms.dlgDuplicarPresupuestosGC.FechaFacturaDuplicar){
		forms.dlgDuplicarPresupuestosGC.elements.FechaFacturaDuplicar.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta indicar la Fecha de Presupuesto(s) a duplicar.','¡Error!')
		else globals.GCshowErrorDialog('Falta indicar la Fecha de Presupuesto(s) a duplicar.',null,'Aceptar',null,null,null)
	}
	else
	{
		uid = null;
		selections  = forms.dlgDuplicarPresupuestosGC.selections;
		if(selections)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT) process(event)
			else
			{
				//if (plugins.busy) startBusy(busyWindowName)
				//else process(event)
				if(plugins.svyBlockUI) {
					//plugins.svyBlockUI.setMessage('Importando Datos... Por favor espere!')
					 // "Rotating plane", "Double bounce", "Wave", "Wandering cubes", "Pulse", "Chasing dots", "Three bounce", "Circle", "Cube grid", "Fading circle", "Folding cube"
					 plugins.svyBlockUI.spinner = "Three bounce";
					 plugins.svyBlockUI.overlayColor = '#000000'
					 plugins.svyBlockUI.overlayOpacity = 0.35;
					 plugins.svyBlockUI.show('Duplicando Presupuesto... Por favor espere!');
					 
					process(event)
				}
				else process(event);
			}
			
			/*var uuids = selections.split('\n')
			var n = uuids.length
			
				
			var str = str = utils.stringReplace(uuids.toString(),"[","('");
			str = utils.stringReplace(str,"]","')");
			str = utils.stringReplace(str,",","','")
			var query = "select id from tbfacturacabecera where id in "+str+" order by eje_cfa,nup_cfa,ser_cfa"
			var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1)
			var rows = ds.getMaxRowIndex()
			if(rows > 0)
			{
				application.getWindow('Duplicar Facturas').hide();
				globals.GCenableBgElements();
				
				for(var i=1;i<=rows;i++){
					var uuid = ds.getValue(i,1);
					
					var result = forms.FrmFacturasGC.foundset.selectRecord(uuid)
					var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.FrmFacturasGC.foundset.getSize())return;
						forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
						result = forms.FrmFacturasGC.foundset.selectRecord(uuid);
					}
					
					var arg1 = forms.FrmFacturasGC.foundset;					
					var arg2 = new Array('GCtbfacturacabecera_to_tbfacturalinea');
					duplicateRec(arg1,arg2)
					
					
					
					
					forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords()
					result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
					fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize())return;
						forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
						result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
					}
						
					forms.dlg_ParametroAplicacionGC.numfactura = nup_cfa;
					databaseManager.saveData()
					
					forms.FrmFacturasGC.onShow(false,event)
					
					
					forms.FrmFacturasGC.foundset.loadAllRecords()
					result = forms.FrmFacturasGC.foundset.selectRecord(uid)
					fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.FrmFacturasGC.foundset.getSize()) break;
						forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
						result = forms.FrmFacturasGC.foundset.selectRecord(uid);
					}
					forms.FrmFacturasGC.situ = null;
					forms.FrmFacturasGC.situconta = null;
					forms.FrmFacturasGC.fechconta_cfa = null;
					forms.FrmFacturasGC.emailenviado = null;
					if(forms.FrmFacturasGC.fechcobro_cfa < forms.FrmFacturasGC.fecha_cfa) 
					{		
						forms.FrmFacturasGC.fechcobro_cfa = forms.FrmFacturasGC.fecha_cfa;		
						
						var clidiapago = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.diapago1;
						var clidiapago2 = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.diapago2;
						var clidiapago3 = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.diapago3;
						
						if(clidiapago != 0 && clidiapago != null)
						{
							if(forms.FrmFacturasGC.fechcobro_cfa.getDate() <= clidiapago)
							{
								forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth(),clidiapago)
							}
							else if(clidiapago2 != 0 && clidiapago2 != null)
							{
								if(forms.FrmFacturasGC.fechcobro_cfa.getDate() <= clidiapago2)
								{
									forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth(),clidiapago2)
								}
								else if(clidiapago3 != 0 && clidiapago3 != null)
								{
									if(forms.FrmFacturasGC.fechcobro_cfa.getDate() <= clidiapago3)
									{
										forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth(),clidiapago3)
									}
									else
									{
										forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth()+1,clidiapago)
									}
								}
								else
								{
									forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth()+1,clidiapago)
								}
							}
							else
							{
								forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth()+1,clidiapago)
							}
						}
						
						
					}
					databaseManager.saveData()
					
					if(forms.FrmFacturasGC.foundset.GCtbfacturacabecera_to_tbfacturalinea.fecha_lfa)
					{
						// get the foundset updater object
					
						var updater = databaseManager.getFoundSetUpdater(forms.FrmFacturasGC.foundset.GCtbfacturacabecera_to_tbfacturalinea);
					
						// set the column value
					
						updater.setColumn('fecha_lfa', forms.dlgDuplicarFacturasGC.FechaFacturaDuplicar);
						
						 
					
						// update in all the records in the foundset
					
						updater.performUpdate();
						
						databaseManager.saveData()
					}
					//databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
					//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas.foundset,-1)
					//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas_Cuentas.foundset,-1)
					
					forms.frm_nav_buttons_facturasGC.btn_showAll()
					forms.FrmFacturasGC.foundset.selectRecord(uid);
					forms.FrmFacturasGC.Generacion_Efecto_Factura();
					forms.FrmFacturasGC.Generacion_FacturaComision();
					forms.FrmFacturasGC.onRecordSelect();
					forms.lst_FacturasGC.btn_sortDesc();
					
				}
				
			}
			else
			{
				globals.GCshowErrorDialog('Falta seleccionar la(s) Factura(s) a duplicar.',null,'Aceptar',null,null,null)
			}*/
		}
		else
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta indicar la Fecha de Presupuesto(s) a duplicar.','¡Error!')
			else globals.GCshowErrorDialog('Falta indicar la Fecha de Presupuesto(s) a duplicar.',null,'Aceptar',null,null,null)
		}
	}
	//set a global to the text of the button pressed
	
	/*application.getWindow('Duplicar Presupuesto').hide();
	globals.GCenableBgElements();
	
	var arg1 = forms.FrmPresupuestosGC.foundset;
	var arg2 = new Array('GCcofertas_to_lofertas');
	duplicateRec(arg1,arg2)
	
	var query = "select ID from cofertas where cod_cof ="+ cod_cof;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var uuid = dataset.getValue(1,1)
	
	forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords()
	var result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
	var fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
	while(result==false)
	{
			if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize())
			{
				return;
			}
		forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
		result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
	}
				
	forms.dlg_ParametroAplicacionGC.numpresupuesto = cod_cof;
	databaseManager.saveData()
	
	result = forms.FrmPresupuestosGC.foundset.selectRecord(uuid)
	fsCount = databaseManager.getFoundSetCount(forms.FrmPresupuestosGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmPresupuestosGC.foundset.getSize())
		{
			return;
		}
	forms.FrmPresupuestosGC.foundset.setSelectedIndex(forms.FrmPresupuestosGC.foundset.getSize());
	result = forms.FrmPresupuestosGC.foundset.selectRecord(uuid);
	}
	forms.FrmPresupuestosGC.fechavalidez_cof = fecha_cof;
	forms.FrmPresupuestosGC.fechavalidez_cof.setMonth(forms.FrmPresupuestosGC.fechavalidez_cof + 1)
	forms.FrmPresupuestosGC.situ_cof = null;
	
	databaseManager.saveData()
	
	if(forms.FrmPresupuestosGC.foundset.GCcofertas_to_lofertas.fecha_lof)
	{
		// get the foundset updater object
	
		var updater = databaseManager.getFoundSetUpdater(forms.FrmPresupuestosGC.foundset.GCcofertas_to_lofertas);
	
		// set the column value
	
		updater.setColumn('fecha_lof', forms.dlgDuplicarPresupuestoGC.FechaPresupuestoDuplicar);
		
		 
	
		// update in all the records in the foundset
	
		updater.performUpdate();
		
		databaseManager.saveData()
	}
	
	//databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas_Cuentas.foundset,-1)
	
	forms.frm_nav_buttons_presupuestosGC.btn_showAll()
	forms.FrmPresupuestosGC.foundset.selectRecord(uuid);
	forms.FrmPresupuestosGC.onRecordSelect();
	forms.lst_PresupuestosGC.btn_sortDesc();
	*/
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"838B90A6-8D77-4BCE-A089-B02FC683243A"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
 * @properties={typeid:24,uuid:"1B4109FC-6661-4F47-8951-57CCF4FBF4A4"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}

/**
 * @type {JSFoundset}
 *
 *
 *
 * @properties={typeid:35,uuid:"181BE86F-FC6C-43DE-A7B6-60E4C59D48DD",variableType:-4}
 */
var related;

/**
 * 
 * @param {JSFoundset} arg1
 * 
 * @param {Array} arg2
 * 
 * 
 *
 * @return {Number}
 *
 * @properties={typeid:24,uuid:"24924FCC-30DF-4A21-B042-4C756754508F"}
 */
function duplicateRec(arg1,arg2) {
	var fs = arg1;
	var relatedFsArray = arg2;

	// Duplicate master record.
	var dup = fs.getRecord(fs.duplicateRecord(false,false));
	//*********	
	var ident = dup.cod_cof
	validate_autoEnter()
	dup.id = application.getUUID()
	dup.cod_cof = cod_cof
	dup.fecha_cof = forms.dlgDuplicarPresupuestosGC.FechaFacturaDuplicar	
	//*********
	databaseManager.saveData();
	
	for(var k=0;k<relatedFsArray.length;k++)
	{
		related = fs[relatedFsArray[k]];
		related.loadAllRecords();
		var fsCount = databaseManager.getFoundSetCount(related);
	   for(var i=1;i<=fsCount;i++)
	   {
	       var relatedOriginal = related.getRecord(i);
	       var relatedDub = dup[relatedFsArray[k]].getRecord(dup[relatedFsArray[k]].newRecord(false,false));
	       databaseManager.copyMatchingFields( relatedOriginal,  relatedDub);
	   }
	}
	
	databaseManager.saveData();
	//*********
	return ident;
	//*********
	}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"EAB83693-9F7B-47E7-AE88-BB2EC1303477",variableType:93}
 */
var fecha_cof;

/**
	 *
	 *
	 *
 * @properties={typeid:24,uuid:"9598DE17-57EA-490B-9A99-6E1D1B41A987"}
 */
function validate_autoEnter()
	{
		fecha_cof = forms.dlgDuplicarPresupuestosGC.FechaFacturaDuplicar
		sub_setNewNumeroPresupuesto();	
		
	}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E9DA8B87-F967-48F5-8D6B-966229C530B4",variableType:8}
 */
var cod_cof;

/**
  *
 * @properties={typeid:24,uuid:"1229A436-413D-49ED-9007-49D3761A34B5"}
 */
function sub_setNewNumeroPresupuesto()
 {
 	var query = 'select numpresupuesto from ParametrosAplicacion'
 	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
 	cod_cof = dataset.getValue(1, 1) + 1	
 	
 	
 }

/**
  * @params {String} theDialogName
  * 
  *
  *
  * @properties={typeid:24,uuid:"49793C1A-6B62-4654-B1D8-D0A444F73B48"}
  */
function startBusy(theDialogName)
 {
 	var params = {
          processFunction: process,
          message: 'Duplicando Presupuestos... Por favor espere!', 
          opacity: 0.5,
          paneColor: '#000000',
          showCancelButton: false,
          cancelButtonText: 'Stop this!'
 	};
 	if (theDialogName) {
 		params.dialogName = theDialogName;
 	}
 	//plugins.busy.block( params );
 }

/**
  * @param {JSEvent} event
  * 
  * @properties={typeid:24,uuid:"DAE45F9C-B2B7-4CEC-83E2-8B97D19FF69F"}
  */
function process(event)
 {
 	application.output("process started");
 	try {
 		var uuids = selections.split('\n')
 		
 		
 			
 		var str = str = utils.stringReplace(uuids.toString(),"[","('");
 		str = utils.stringReplace(str,"]","')");
 		str = utils.stringReplace(str,",","','")
 		var query = "select id from cofertas where id in "+str+" order by cod_cof"
 		var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1)
 		var rows = ds.getMaxRowIndex()
 		if(rows > 0)
 		{
 			application.getWindow('Duplicar Presupuesto').hide();
 			globals.GCenableBgElements();
 			
 			for(var i=1;i<=rows;i++){
 				var uuid = ds.getValue(i,1);
 				
 				
 				var arg1 = forms.FrmPresupuestosGC.foundset;
 				var arg2 = new Array('GCcofertas_to_lofertas');
 				duplicateRec(arg1,arg2)
 				
 				query = "select ID from cofertas where cod_cof ="+ cod_cof;
 				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
 				uuid = dataset.getValue(1,1)
 				
 				forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords()
 				var result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
 				var fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
 				while(result==false)
 				{
 						if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize())
 						{
 							return;
 						}
 					forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
 					result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
 				}
 							
 				forms.dlg_ParametroAplicacionGC.numpresupuesto = cod_cof;
 				databaseManager.saveData()
 				
 				result = forms.FrmPresupuestosGC.foundset.selectRecord(uuid)
 				fsCount = databaseManager.getFoundSetCount(forms.FrmPresupuestosGC.foundset);
 				while(result==false)
 				{
 					if(fsCount == forms.FrmPresupuestosGC.foundset.getSize()) return;
 					forms.FrmPresupuestosGC.foundset.setSelectedIndex(forms.FrmPresupuestosGC.foundset.getSize());
 					result = forms.FrmPresupuestosGC.foundset.selectRecord(uuid);
 				}
 				forms.FrmPresupuestosGC.fechavalidez_cof = fecha_cof;
 				forms.FrmPresupuestosGC.fechavalidez_cof.setMonth(forms.FrmPresupuestosGC.fechavalidez_cof + 1)
 				forms.FrmPresupuestosGC.situ_cof = null;
 				
 				databaseManager.saveData()
 				
 				if(forms.FrmPresupuestosGC.foundset.GCcofertas_to_lofertas.fecha_lof)
 				{
 					// get the foundset updater object
 				
 					var updater = databaseManager.getFoundSetUpdater(forms.FrmPresupuestosGC.foundset.GCcofertas_to_lofertas);
 				
 					// set the column value
 				
 					updater.setColumn('fecha_lof', forms.dlgDuplicarPresupuestosGC.FechaFacturaDuplicar);
 					
 					 
 				
 					// update in all the records in the foundset
 				
 					updater.performUpdate();
 					
 					databaseManager.saveData()
 				}
 				
 				//databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
 				//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas.foundset,-1)
 				//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas_Cuentas.foundset,-1)
 				
 				forms.frm_nav_buttons_presupuestosGC.btn_showAll()
 				forms.FrmPresupuestosGC.foundset.selectRecord(uuid);
 				forms.FrmPresupuestosGC.onRecordSelect();
 				forms.lst_PresupuestosGC.btn_sortDesc(); 				
 			}
 			
 		}
 		else
 		{
 			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta seleccionar Presupuesto(s) a duplicar.','¡Error!')
			else globals.GCshowErrorDialog('Falta seleccionar Presupuesto(s) a duplicar.',null,'Aceptar',null,null,null)
 		}
 		
 	}catch (e) {
 		application.output("catched exception");
 		application.output(e);		
 	} finally {
 		//if (plugins.busy) plugins.busy.unblock();	
 		if(plugins.svyBlockUI) plugins.svyBlockUI.stop()		
 		
 		application.getWindow('Duplicar Presupuesto').hide();
 		globals.GCenableBgElements();
 	}
 	application.output("process end");
 	//HoraFin = new Date()
 	//var tiempo = getElapsedTime(HoraInicio,HoraFin,'seconds')
 	//application.output(tiempo+' segundos');
 	
 }
