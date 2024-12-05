/**
*
 * @properties={typeid:24,uuid:"9EF77AC5-096E-41E5-A8A5-911C24C10B27"}
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
 * @properties={typeid:24,uuid:"0A7EA512-7E1C-41DB-ADBA-8C360CC5D428"}
 * @AllowToRunInFind
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	
	application.getWindow('Duplicar Presupuesto').hide();
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
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6AF92DF8-7ED4-47A0-80AF-A80C7BD94796"}
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
 * @properties={typeid:24,uuid:"1D7D1ADC-A781-4F30-8EC8-FFFE5318AE86"}
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
 * @properties={typeid:35,uuid:"28E042C9-8506-4AF9-A91B-6DB6ED215A9D",variableType:-4}
 */
var related;

/**
 * 
 * @param {JSFoundset} arg1
 * 
 * @param {Array} arg2
 * 
 * 
 * @return {Number}
 *
 *
 * @properties={typeid:24,uuid:"FC6FA78C-25E7-40B5-9910-127D12AC7F6B"}
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
	dup.fecha_cof = forms.dlgDuplicarPresupuestoGC.FechaPresupuestoDuplicar
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
 * @properties={typeid:35,uuid:"2385E84D-75A6-485C-895D-CFC201525DED",variableType:93}
 */
var fecha_cof;

/**
	 *
	 *
	 *
 * @properties={typeid:24,uuid:"E87FAC47-7D03-4873-BA5D-B175FBF965F0"}
 */
function validate_autoEnter()
	{
		fecha_cof = forms.dlgDuplicarPresupuestoGC.FechaPresupuestoDuplicar
		sub_setNewNumeroPresupuesto();	
		
	}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9CA3CC47-3238-4A07-AD3B-F9274B7B39E0",variableType:8}
 */
var cod_cof;

/**
  *
 * @properties={typeid:24,uuid:"94C2CE7F-6E68-44C7-AE4E-FC718F7A387F"}
 */
function sub_setNewNumeroPresupuesto()
 {
 	var query = 'select numpresupuesto from ParametrosAplicacion'
 	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
 	cod_cof = dataset.getValue(1, 1) + 1	
 	
 	
 }
