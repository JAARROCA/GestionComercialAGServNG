/**
*
 * @properties={typeid:24,uuid:"C70C1F61-0690-4933-8291-8DF7F85BDD2A"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Duplicar Factura Proforma').hide();
	globals.GCenableBgElements();
	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"E88B3EE1-AA5F-4AB2-A4EE-C7B247BF6CDE"}
 * @AllowToRunInFind
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	
	application.getWindow('Duplicar Factura Proforma').hide();
	globals.GCenableBgElements();
	
	var arg1 = forms.FrmFacturasProformaGC.foundset;
	var arg2 = new Array('gctbfacturaproformacabecera_to_tbfacturaproformalinea');
	duplicateRec(arg1,arg2)
	
	var query = "select ID from tbFacturaProformaCabecera where eje_cfa ="+ eje_cfa +
					" AND ser_cfa = '"+ser_cfa+"' AND nup_cfa ="+nup_cfa;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var uuid = dataset.getValue(1,1)
	
	forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords()
	var result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
	var fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize()) return;
		forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
		result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
	}
				
	forms.dlg_ParametroAplicacionGC.numfacturaproforma = nup_cfa;
	databaseManager.saveData()
	
	forms.FrmFacturasProformaGC.foundset.loadAllRecords()
	result = forms.FrmFacturasProformaGC.foundset.selectRecord(uuid)
	fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasProformaGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmFacturasProformaGC.foundset.getSize())
		{
			return;
		}
	forms.FrmFacturasProformaGC.foundset.setSelectedIndex(forms.FrmFacturasProformaGC.foundset.getSize());
	result = forms.FrmFacturasProformaGC.foundset.selectRecord(uuid);
	}
	forms.FrmFacturasProformaGC.situ = null;
	forms.FrmFacturasProformaGC.situconta = null;
	forms.FrmFacturasProformaGC.fechconta_cfa = null;
	forms.FrmFacturasProformaGC.usu_cfa = globals.GClogin_usuario;
	if(forms.FrmFacturasProformaGC.fechcobro_cfa < forms.FrmFacturasProformaGC.fecha_cfa) forms.FrmFacturasProformaGC.fechcobro_cfa = forms.FrmFacturasProformaGC.fecha_cfa;
	databaseManager.saveData()
	
	if(forms.FrmFacturasProformaGC.foundset.gctbfacturaproformacabecera_to_tbfacturaproformalinea.fecha_lfa)
	{
		// get the foundset updater object
	
		var updater = databaseManager.getFoundSetUpdater(forms.FrmFacturasProformaGC.foundset.gctbfacturaproformacabecera_to_tbfacturaproformalinea);
	
		// set the column value
	
		updater.setColumn('fecha_lfa', forms.dlgDuplicarFacturaProformaGC.FechaFacturaDuplicar);
		
		 
	
		// update in all the records in the foundset
	
		updater.performUpdate();
		
		databaseManager.saveData()
	}
	//databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas_Cuentas.foundset,-1)
	
	forms.frm_nav_buttons_facturasGC.btn_showAll()
	forms.FrmFacturasProformaGC.foundset.selectRecord(uuid);
	forms.lst_FacturasProformaGC.btn_sortDesc()
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"EE2296D1-2641-4E9B-A149-A3C2B9DBC965"}
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
 * @properties={typeid:24,uuid:"DCAEED99-8335-4172-9143-DC52957305FC"}
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
 * @properties={typeid:35,uuid:"6A8AF236-74DE-49AE-A33C-B588CC1402EA",variableType:-4}
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
 * @properties={typeid:24,uuid:"EF93A07F-EF3A-43A2-A101-952C6544040C"}
 */
function duplicateRec(arg1,arg2) {
	var fs = arg1;
	var relatedFsArray = arg2;

	// Duplicate master record.
	var dup = fs.getRecord(fs.duplicateRecord(false,false));
	//*********	
	var ident = dup.eje_cfa+dup.nup_cfa+ser_cfa
	validate_autoEnter()
	dup.id = application.getUUID()
	dup.eje_cfa = eje_cfa
	dup.ser_cfa = ser_cfa
	dup.nup_cfa = nup_cfa	
	dup.fecha_cfa = forms.dlgDuplicarFacturaProformaGC.FechaFacturaDuplicar
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
 * @properties={typeid:35,uuid:"9BF94250-4BFB-4F38-B547-33468CFF8AE9",variableType:8}
 */
var idasiento;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D880C1C0-361C-43B1-A8F6-F457AEDFA92B",variableType:93}
 */
var fecha_cfa;

/**
	 *
	 *
	 *
 * @properties={typeid:24,uuid:"5C2A690B-183B-472C-B6FD-3A6A115E63B7"}
 */
function validate_autoEnter()
	{
		fecha_cfa = forms.dlgDuplicarFacturaProformaGC.FechaFacturaDuplicar
		sub_setEjercicio();
		doEditser_cfa()
		sub_setNewNumeroFacturaOrd();	
		
	}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DFCE8660-86CA-4ED7-A34D-94041538C97D",variableType:8}
 */
var eje_cfa;

/**
	 *
 * @properties={typeid:24,uuid:"BEBC42F5-A57B-4281-AA26-EBD16B6EFD49"}
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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8F1A39B3-D738-4CD1-A669-BB7FF68E8E06"}
 */
var ser_cfa = 'P';

/**
 *
 * @properties={typeid:24,uuid:"E4583C5E-0488-4189-8656-7256B8816A14"}
 */
function doEditser_cfa()
 {
	ser_cfa ='P';		
 }

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E28BF9B0-62C9-412C-AAAA-3987104D4322",variableType:8}
 */
var nup_cfa;

/**
  *
 * @properties={typeid:24,uuid:"E6132965-63A6-4FB4-8E1A-403997EBE663"}
 */
function sub_setNewNumeroFacturaOrd()
 {
 	var query = 'select NumFacturaProforma from ParametrosAplicacion'
 	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
 	nup_cfa = dataset.getValue(1, 1) + 1	
 	
 	
 }
