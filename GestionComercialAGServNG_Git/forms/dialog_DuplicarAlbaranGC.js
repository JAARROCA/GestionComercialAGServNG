/**
*
 * @properties={typeid:24,uuid:"91BF9656-CE79-4E85-8FE6-440A2F6CF5B9"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Duplicar Albaran').hide();
	globals.GCenableBgElements();
	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"0DCA2198-D747-4EAC-9CAC-0E0AA8FFA0B4"}
 * @AllowToRunInFind
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	
	application.getWindow('Duplicar Albaran').hide();
	globals.GCenableBgElements();
	
	var arg1 = forms.FrmAlbaranGC.foundset;
	var arg2 = new Array('GCcalbaran_to_lalbaran');
	duplicateRec(arg1,arg2)
	
	var query = "select ID from calbaran where cod_cal ="+ cod_cal;
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
				
	forms.dlg_ParametroAplicacionGC.numalbaran = cod_cal;
	databaseManager.saveData()
	
	result = forms.FrmAlbaranGC.foundset.selectRecord(uuid)
	fsCount = databaseManager.getFoundSetCount(forms.FrmAlbaranGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmAlbaranGC.foundset.getSize())
		{
			return;
		}
	forms.FrmAlbaranGC.foundset.setSelectedIndex(forms.FrmAlbaranGC.foundset.getSize());
	result = forms.FrmAlbaranGC.foundset.selectRecord(uuid);
	}
	forms.FrmAlbaranGC.situ_cal = null;
	
	databaseManager.saveData()
	
	if(forms.FrmAlbaranGC.foundset.GCcalbaran_to_lalbaran.fecha_lal)
	{
		// get the foundset updater object
	
		var updater = databaseManager.getFoundSetUpdater(forms.FrmAlbaranGC.foundset.GCcalbaran_to_lalbaran);
	
		// set the column value
	
		updater.setColumn('fecha_lal', forms.dlgDuplicarAlbaranGC.FechaAlbaranDuplicar);
		
		 
	
		// update in all the records in the foundset
	
		updater.performUpdate();
		
		databaseManager.saveData()
	}
	if(forms.FrmAlbaranGC.foundset.GCcalbaran_to_lalbaran)
	{
		updater = databaseManager.getFoundSetUpdater(forms.FrmAlbaranGC.foundset.GCcalbaran_to_lalbaran);
		
		// set the column value
		
		updater.setColumn('situ_lal', null);
		updater.setColumn('sifa_lal', null);
		 
	
		// update in all the records in the foundset
	
		updater.performUpdate();
		
		databaseManager.saveData()
	}
	//databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas_Cuentas.foundset,-1)
	
	forms.frm_nav_buttons_albaranGC.btn_showAll()
	forms.FrmAlbaranGC.foundset.selectRecord(uuid);
	forms.FrmAlbaranGC.onRecordSelect();
	forms.lst_AlbaranGC.btn_sortDesc();
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C4EA74B7-921B-4FF9-81A2-D78FB3BE7357"}
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
 * @properties={typeid:24,uuid:"27290D30-DE6D-4216-A5DE-048B2D4F629E"}
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
 * @properties={typeid:35,uuid:"5E91AC90-6869-4AD4-92E6-9162B72F8130",variableType:-4}
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
 * @properties={typeid:24,uuid:"11E983C7-83A0-4EF6-A4DC-3163BE1ACDCE"}
 */
function duplicateRec(arg1,arg2) {
	var fs = arg1;
	var relatedFsArray = arg2;

	// Duplicate master record.
	var dup = fs.getRecord(fs.duplicateRecord(false,false));
	//*********	
	var ident = dup.cod_cal
	validate_autoEnter()
	dup.id = application.getUUID()
	dup.cod_cal = cod_cal
	dup.fecha_cal = forms.dlgDuplicarAlbaranGC.FechaAlbaranDuplicar
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
 * @properties={typeid:35,uuid:"3B3DF5CB-0517-4034-A2A1-7768DC8380CD",variableType:93}
 */
var fecha_cal;

/**
	 *
	 *
	 *
 * @properties={typeid:24,uuid:"AC0C2586-A9F9-4268-8A9B-F3351CA7790C"}
 */
function validate_autoEnter()
	{
		fecha_cal = forms.dlgDuplicarAlbaranGC.FechaAlbaranDuplicar
		sub_setNewNumeroAlbaran();	
		
	}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"98523B28-279D-4D03-BA12-BB5B1E54F54E",variableType:8}
 */
var cod_cal;

/**
  *
 * @properties={typeid:24,uuid:"E54BEBA4-4249-4565-B4C5-B90E7B93929B"}
 */
function sub_setNewNumeroAlbaran()
 {
 	var query = 'select NumAlbaran from ParametrosAplicacion'
 	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
 	cod_cal = dataset.getValue(1, 1) + 1	
 	
 	
 }
