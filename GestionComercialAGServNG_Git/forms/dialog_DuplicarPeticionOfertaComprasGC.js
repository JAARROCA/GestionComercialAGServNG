/**
*
 * @properties={typeid:24,uuid:"36B4149B-2A97-45C7-940D-761334DABFE6"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Duplicar Peticion Compras').hide();
	globals.GCenableBgElements();
	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"A50471B3-5594-4F51-94A8-6E6C5B919E28"}
 * @AllowToRunInFind
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	
	application.getWindow('Duplicar Peticion Compras').hide();
	globals.GCenableBgElements();
	
	var arg1 = forms.FrmPetOfertaComprasGC.foundset;
	var arg2 = new Array('GCtbpetofertacompracabecera_to_tbpetofertacompralinea');
	duplicateRec(arg1,arg2)
	
	var query = "select npetoferta from tbpetofertacompracabecera where npetoferta ="+ cod_cofc;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var uuid = dataset.getValue(1,1)
	
	/*forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords()
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
	*/
	
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
	/*if(forms.FrmPetOfertaComprasGC.foundset.GCtbpetofertacompracabecera_to_tbpetofertacompralinea.fecha)
	{
		// get the foundset updater object
	
		var updater = databaseManager.getFoundSetUpdater(forms.FrmPedidosComprasGC.foundset.GCtbpedidocompracabecera_to_tbpedidocompralinea);
	
		// set the column value
	
		updater.setColumn('fecha', forms.dlgDuplicarPedidoCompraGC.FechaPedidoCompraDuplicar);
		
		 
	
		// update in all the records in the foundset
	
		updater.performUpdate();
		
		databaseManager.saveData()
	}
	*/
	
	//databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas_Cuentas.foundset,-1)
	
	forms.frm_nav_buttons_comprasGC.btn_showAll()
	forms.FrmPetOfertaComprasGC.foundset.selectRecord(uuid);
	forms.FrmPetOfertaComprasGC.onRecordSelect();
	forms.lst_PetOfertaComprasGC.btn_sortDesc();
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"49D79982-64FF-472F-98E6-295304FD9381"}
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
 * @properties={typeid:24,uuid:"A0553C4B-6145-430C-83D7-73CE02BC3834"}
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
 * @properties={typeid:35,uuid:"9E066532-D251-4E84-B431-EBA66227F870",variableType:-4}
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
 * @properties={typeid:24,uuid:"DF6B2AA3-90CD-42FA-8CC9-FADAB2DCA7B0"}
 */
function duplicateRec(arg1,arg2) {
	var fs = arg1;
	var relatedFsArray = arg2;

	// Duplicate master record.
	var dup = fs.getRecord(fs.duplicateRecord(false,false));
	//*********	
	var ident = dup.npetoferta
	validate_autoEnter()
	//dup.id = application.getUUID()
	dup.npetoferta = cod_cofc
	dup.fecha = forms.dlgDuplicarPeticionOfertaComprasGC.FechaPeticionOferta
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
 * @properties={typeid:35,uuid:"0926A646-EF16-4F9A-B751-246793E72970",variableType:93}
 */
var fecha_cofc;

/**
	 *
	 *
	 *
 * @properties={typeid:24,uuid:"6220D139-4F45-44A0-932F-EEB3CBFD01F1"}
 */
function validate_autoEnter()
	{
		fecha_cofc = forms.dlgDuplicarPeticionOfertaComprasGC.FechaPeticionOferta
		sub_setNewNumeroPedidoCompras();	
		
	}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2E6ED19E-12B3-4D23-AC2B-EE1F426DDC2C",variableType:8}
 */
var cod_cofc;

/**
  *
 * @properties={typeid:24,uuid:"57A916E8-F275-4D3D-9315-8ACCF30EEB4A"}
 */
function sub_setNewNumeroPedidoCompras()
 {
	var query = 'select [NPetOferta] from [tbPetOfertaCompraCabecera] ORDER BY [NPetOferta] DESC'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	cod_cofc = dataset.getValue(1, 1) + 1		
 	
 	
 }
