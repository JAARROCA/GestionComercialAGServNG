/**
*
 * @properties={typeid:24,uuid:"9F57D053-2725-45D1-8C4D-8202BA5AC778"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Duplicar Pedido').hide();
	globals.GCenableBgElements();
	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"2879649B-2E5C-465B-B7BB-8428A99202B8"}
 * @AllowToRunInFind
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	
	application.getWindow('Duplicar Pedido').hide();
	globals.GCenableBgElements();
	
	var arg1 = forms.FrmPedidosGC.foundset;
	var arg2 = new Array('gccortraba_to_lortraba');
	duplicateRec(arg1,arg2)
	
	var query = "select ID from cortraba where cod_cot ="+ cod_cot;
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
				
	forms.dlg_ParametroAplicacionGC.numpedido = cod_cot;
	databaseManager.saveData()
	
	result = forms.FrmPedidosGC.foundset.selectRecord(uuid)
	fsCount = databaseManager.getFoundSetCount(forms.FrmPedidosGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmPedidosGC.foundset.getSize())
		{
			return;
		}
	forms.FrmPedidosGC.foundset.setSelectedIndex(forms.FrmPedidosGC.foundset.getSize());
	result = forms.FrmPedidosGC.foundset.selectRecord(uuid);
	}
	//forms.FrmPresupuestosGC.fechavalidez_cof = fecha_cof;
	//forms.FrmPresupuestosGC.fechavalidez_cof.setMonth(forms.FrmPresupuestosGC.fechavalidez_cof + 1)
	forms.FrmPedidosGC.fecha_cot = forms.dlgDuplicarPedidoGC.FechaPedidoDuplicar;
	forms.FrmPedidosGC.situ_cot = null;
	
	
	databaseManager.saveData()
	
	if(forms.FrmPedidosGC.foundset.GCcortraba_to_lortraba.fecha_lot)
	{
		// get the foundset updater object
	
		var updater = databaseManager.getFoundSetUpdater(forms.FrmPedidosGC.foundset.GCcortraba_to_lortraba);
	
		// set the column value
	
		updater.setColumn('fecha_lot', forms.dlgDuplicarPedidoGC.FechaPedidoDuplicar);
		
		 
	
		// update in all the records in the foundset
	
		updater.performUpdate();
		
		databaseManager.saveData()
	}
	
	//databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas_Cuentas.foundset,-1)
	
	forms.frm_nav_buttons_pedidosGC.btn_showAll()
	forms.FrmPedidosGC.foundset.selectRecord(uuid);
	forms.FrmPedidosGC.onRecordSelect();
	forms.lst_PedidosGC.btn_sortDesc();
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"0FBA0BF9-BC88-4116-93EE-C6687971965B"}
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
 * @properties={typeid:24,uuid:"A2723718-1DB5-455D-9FCC-F2E49ABD552B"}
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
 * @properties={typeid:35,uuid:"D30F7B0F-74E7-4496-871B-E00D3F02F906",variableType:-4}
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
 * @properties={typeid:24,uuid:"E2445C0A-0D84-465B-B380-E6F5DA390121"}
 */
function duplicateRec(arg1,arg2) {
	var fs = arg1;
	var relatedFsArray = arg2;

	// Duplicate master record.
	var dup = fs.getRecord(fs.duplicateRecord(false,false));
	//*********	
	var ident = dup.cod_cot
	validate_autoEnter()
	dup.id = application.getUUID()
	dup.cod_cot = cod_cot
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
 * @properties={typeid:35,uuid:"CB816495-1472-4039-BA2B-0C6A47402FEA",variableType:93}
 */
var fecha_cot;

/**
	 *
	 *
	 *
 * @properties={typeid:24,uuid:"0A3F07B2-2769-46EC-B84B-AF999314E04C"}
 */
function validate_autoEnter()
	{
		fecha_cot = forms.dlgDuplicarPedidoGC.FechaPedidoDuplicar
		sub_setNewNumeroPedido();	
		
	}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"68FA02BC-F4DC-446E-BB26-D41EE03142A1",variableType:8}
 */
var cod_cot;

/**
  *
 * @properties={typeid:24,uuid:"D023536B-669D-43D3-AA9F-5740105A18F7"}
 */
function sub_setNewNumeroPedido()
 {
 	var query = 'select numpedido from ParametrosAplicacion'
 	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
 	cod_cot = dataset.getValue(1, 1) + 1	
 	
 	
 }
