/**
*
 * @properties={typeid:24,uuid:"AE48AF51-7D35-4785-BA11-B42741186072"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Duplicar Nota').hide();
	globals.GCenableBgElements();
	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"A88547F1-1201-4E5A-B16C-A6268EA21396"}
 * @AllowToRunInFind
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	
	application.getWindow('Duplicar Nota').hide();
	globals.GCenableBgElements();
	
	var arg1 = forms.FrmNotasGC.foundset;
	var arg2 = new Array('GCtbnotacabecera_to_tbnotalinea');
	duplicateRec(arg1,arg2)
	
	var query = "select ID from tbNotaCabecera where eje_cfa ="+ eje_cfa +
					" AND nup_cfa ="+nup_cfa;
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
				
	forms.dlg_ParametroAplicacionGC.numnota = nup_cfa;
	databaseManager.saveData()
	
	result = forms.FrmNotasGC.foundset.selectRecord(uuid)
	fsCount = databaseManager.getFoundSetCount(forms.FrmNotasGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmNotasGC.foundset.getSize())
		{
			return;
		}
	forms.FrmNotasGC.foundset.setSelectedIndex(forms.FrmNotasGC.foundset.getSize());
	result = forms.FrmNotasGC.foundset.selectRecord(uuid);
	}
	forms.FrmNotasGC.situcobrado = null;
	forms.FrmNotasGC.usu_cfa = globals.GClogin_usuario;
	
	if(forms.FrmNotasGC.fechacobro_cfa < forms.FrmNotasGC.fecha_cfa) forms.FrmNotasGC.fechacobro_cfa = forms.FrmNotasGC.fecha_cfa;
	databaseManager.saveData()
	
	if(forms.FrmNotasGC.foundset.GCtbnotacabecera_to_tbnotalinea.fecha_lfa)
	{
		// get the foundset updater object
	
		var updater = databaseManager.getFoundSetUpdater(forms.FrmNotasGC.foundset.GCtbnotacabecera_to_tbnotalinea);
	
		// set the column value
	
		updater.setColumn('fecha_lfa', forms.dlgDuplicarNotaGC.FechaNotaDuplicar);
		
		 
	
		// update in all the records in the foundset
	
		updater.performUpdate();
		
		databaseManager.saveData()
	}
	
	//databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas_Cuentas.foundset,-1)
	
	forms.frm_nav_buttons_notasGC.btn_showAll()
	forms.FrmNotasGC.foundset.selectRecord(uuid);
	forms.lst_NotasGC.btn_sortDesc()
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"3CB6FD4C-02E9-49A7-9E1A-C7E19A23E7ED"}
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
 * @properties={typeid:24,uuid:"29A62B9C-863D-4BC7-9F44-0612CF5BCE09"}
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
 * @properties={typeid:35,uuid:"269014CF-13AD-405A-80CB-566ED551045C",variableType:-4}
 */
var related;

/**
 * 
 * @param {JSFoundset} arg1
 * 
 * @param {Array} arg2
 * 
 * 
 * @return {String}
 *
 *
 * @properties={typeid:24,uuid:"717FCF3E-7E87-4C12-AA2E-4373FA521957"}
 */
function duplicateRec(arg1,arg2) {
	var fs = arg1;
	var relatedFsArray = arg2;

	// Duplicate master record.
	var dup = fs.getRecord(fs.duplicateRecord(false,false));
	//*********	
	var ident = dup.eje_cfa.toString()+dup.nup_cfa.toString()
	validate_autoEnter()
	dup.id = application.getUUID()
	dup.eje_cfa = eje_cfa
	dup.nup_cfa = nup_cfa	
	dup.fecha_cfa = forms.dlgDuplicarNotaGC.FechaNotaDuplicar
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
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"F5D656BD-9F20-4C3A-A30B-218F5258EE17",variableType:8}
 */
var idasiento;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6FBB957D-23A7-4AE4-9709-9E640F573CA0",variableType:93}
 */
var fecha_cfa;

/**
	 *
	 *
	 *
 * @properties={typeid:24,uuid:"CD04B5E8-23F5-416E-A13E-3FF6AA18CA6D"}
 */
function validate_autoEnter()
	{
		fecha_cfa = forms.dlgDuplicarNotaGC.FechaNotaDuplicar
		sub_setEjercicio();
		sub_setNewNumeroNota();	
		
	}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2702DCB5-B91F-4696-B7A9-3406B64CA5E5",variableType:8}
 */
var eje_cfa;

/**
 *
 * @properties={typeid:24,uuid:"AD049AE6-9C28-48AD-9047-C546471F8279"}
 */
function sub_setEjercicio()
	{
		var Agno = fecha_cfa;
		Agno= Agno.getFullYear()
		var a = new String()
		a = Agno.toString()
		a= a.substr(2,2)
		eje_cfa = a
	}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9A3246B5-1869-4F2D-9409-1618B57A035F",variableType:8}
 */
var nup_cfa;

/**
  *
 * @properties={typeid:24,uuid:"45653FBE-91EE-44F7-99E3-5D29BBBD085E"}
 */
function sub_setNewNumeroNota()
 {
 	var query = 'select NumNota from ParametrosAplicacion'
 	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
 	nup_cfa = dataset.getValue(1, 1) + 1	
 	
 	
 }
