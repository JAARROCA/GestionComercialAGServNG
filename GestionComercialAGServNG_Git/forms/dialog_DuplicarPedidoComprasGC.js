/**
*
 * @properties={typeid:24,uuid:"496BE9BA-3783-4DA2-907F-AF4E1A2041D0"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Duplicar Pedido Compras').hide();
	globals.GCenableBgElements();
	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"0368AE08-01AC-4780-834A-78630065BD76"}
 * @AllowToRunInFind
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	
	application.getWindow('Duplicar Pedido Compras').hide();
	globals.GCenableBgElements();
	
	var arg1 = forms.FrmPedidosComprasGC.foundset;
	var arg2 = new Array('GCtbpedidocompracabecera_to_tbpedidocompralinea');
	duplicateRec(arg1,arg2)
	
	var query = "select npedido from tbpedidocompracabecera where npedido ="+ cod_cofc;
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
				
	forms.dlg_ParametroAplicacionGC.pedidocompras = cod_cofc;
	databaseManager.saveData()
	
	/*
	result = forms.FrmPedidosComprasGC.foundset.selectRecord(uuid)
	fsCount = databaseManager.getFoundSetCount(forms.FrmPedidosComprasGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmPedidosComprasGC.foundset.getSize()) return;
		forms.FrmPedidosComprasGC.foundset.setSelectedIndex(forms.FrmPedidosComprasGC.foundset.getSize());
		result = forms.FrmPedidosComprasGC.foundset.selectRecord(uuid);
	}
	forms.FrmPedidosComprasGC.fechavalidez_cof = fecha_cof;
	forms.FrmPedidosComprasGC.fechavalidez_cof.setMonth(forms.FrmPresupuestosGC.fechavalidez_cof + 1)
	forms.FrmPedidosComprasGC.situ_cof = null;
	
	
	databaseManager.saveData()
	*/
	if(forms.FrmPedidosComprasGC.foundset.GCtbpedidocompracabecera_to_tbpedidocompralinea.fecha)
	{
		// get the foundset updater object
	
		var updater = databaseManager.getFoundSetUpdater(forms.FrmPedidosComprasGC.foundset.GCtbpedidocompracabecera_to_tbpedidocompralinea);
	
		// set the column value
	
		updater.setColumn('fecha', forms.dlgDuplicarPedidoCompraGC.FechaPedidoCompraDuplicar);
		
		 
	
		// update in all the records in the foundset
	
		updater.performUpdate();
		
		databaseManager.saveData()
	}
	
	//databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas_Cuentas.foundset,-1)
	
	forms.frm_nav_buttons_comprasGC.btn_showAll()
	forms.FrmPedidosComprasGC.foundset.selectRecord(uuid);
	forms.FrmPedidosComprasGC.onRecordSelect();
	forms.lst_PedidosComprasGC.btn_sortDesc();
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"39CF98FE-ED50-40A4-940E-AA450F987A70"}
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
 * @properties={typeid:24,uuid:"F79B3074-2564-42B1-880C-1AA158A39F49"}
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
 * @properties={typeid:35,uuid:"74774FC6-0C41-4BB8-8C11-930A84742559",variableType:-4}
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
 * @properties={typeid:24,uuid:"394542BA-3FE4-423E-9332-B7FBD404BF8A"}
 */
function duplicateRec(arg1,arg2) {
	var fs = arg1;
	var relatedFsArray = arg2;

	// Duplicate master record.
	var dup = fs.getRecord(fs.duplicateRecord(false,false));
	//*********	
	var ident = dup.npedido
	validate_autoEnter()
	//dup.id = application.getUUID()
	dup.npedido = cod_cofc
	dup.fecha = forms.dlgDuplicarPedidoCompraGC.FechaPedidoCompraDuplicar
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
 * @properties={typeid:35,uuid:"8B7DF8F3-DDE0-4541-807B-4CEF72FE3EAB",variableType:93}
 */
var fecha_cofc;

/**
	 *
	 *
	 *
 * @properties={typeid:24,uuid:"1E196765-DF1C-4CAC-B44F-23868C5F02D0"}
 */
function validate_autoEnter()
	{
		fecha_cofc = forms.dlgDuplicarPedidoCompraGC.FechaPedidoCompraDuplicar
		sub_setNewNumeroPedidoCompras();	
		
	}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"98D6D1C7-3250-4A30-9F0D-70A8171EF41D",variableType:8}
 */
var cod_cofc;

/**
  *
 * @properties={typeid:24,uuid:"33F0975B-DC54-4925-807F-3F859D5293CB"}
 */
function sub_setNewNumeroPedidoCompras()
 {
 	var query = 'select [PedidoCompras] from [ParametrosAplicacion]'
 	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
 	cod_cofc = dataset.getValue(1, 1) + 1	
 	
 	
 }
