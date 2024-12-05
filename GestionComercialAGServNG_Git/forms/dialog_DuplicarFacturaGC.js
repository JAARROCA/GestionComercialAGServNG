/**
*
 * @properties={typeid:24,uuid:"41712397-E861-4720-9861-643BE9E130E1"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Duplicar Factura').hide();
	globals.GCenableBgElements();
	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"CAA26D01-B912-4C06-B4C3-ABA23E2A0122"}
 * @AllowToRunInFind
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	
	application.getWindow('Duplicar Factura').hide();
	globals.GCenableBgElements();
	
	var arg1 = forms.FrmFacturasGC.foundset;
	var arg2 = new Array('GCtbfacturacabecera_to_tbfacturalinea');
	duplicateRec(arg1,arg2)
	
	var query = "select ID from tbFacturaCabecera where eje_cfa ="+ eje_cfa +
					" AND ser_cfa = '"+ser_cfa+"' AND nup_cfa ="+nup_cfa;
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
				
	forms.dlg_ParametroAplicacionGC.numfactura = nup_cfa;
	databaseManager.saveData()
	
	result = forms.FrmFacturasGC.foundset.selectRecord(uuid)
	fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmFacturasGC.foundset.getSize())
		{
			return;
		}
	forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
	result = forms.FrmFacturasGC.foundset.selectRecord(uuid);
	}
	forms.FrmFacturasGC.situ = null;
	forms.FrmFacturasGC.situconta = null;
	forms.FrmFacturasGC.fechconta_cfa = null;
	forms.FrmFacturasGC.emailenviado = null;
	forms.FrmFacturasGC.usu_cfa = globals.GClogin_usuario;
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
	
		updater.setColumn('fecha_lfa', forms.dlgDuplicarFacturaGC.FechaFacturaDuplicar);
		
		 
	
		// update in all the records in the foundset
	
		updater.performUpdate();
		
		databaseManager.saveData()
	}
	//databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas.foundset,-1)
	//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas_Cuentas.foundset,-1)
	
	forms.frm_nav_buttons_facturasGC.btn_showAll()
	forms.FrmFacturasGC.foundset.selectRecord(uuid);
	forms.FrmFacturasGC.Generacion_Efecto_Factura();
	forms.FrmFacturasGC.Generacion_FacturaComision();
	forms.FrmFacturasGC.onRecordSelect();
	forms.lst_FacturasGC.btn_sortDesc();
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"E66FE789-DEB9-4DC4-A528-FDEE61272CAC"}
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
 * @properties={typeid:24,uuid:"67F384E0-AADB-4FE9-87FE-BFA4A574C51F"}
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
 * @properties={typeid:35,uuid:"439EA5AD-0FC3-4C2E-847D-7E7BD6E6AEFC",variableType:-4}
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
 * @properties={typeid:24,uuid:"EAE7F720-B6B5-470F-99FA-BA54F095EDCB"}
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
	dup.fecha_cfa = forms.dlgDuplicarFacturaGC.FechaFacturaDuplicar
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
 * @properties={typeid:35,uuid:"61722FCB-5D0A-4B18-904A-2EA61F76E59A",variableType:8}
 */
var idasiento;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"33FAF6E0-CC1A-4D5F-8B27-2AA5DA7525E8",variableType:93}
 */
var fecha_cfa;

/**
	 *
	 *
	 *
 * @properties={typeid:24,uuid:"3C82936F-6549-41DC-95E2-5C19FFA8DC75"}
 */
function validate_autoEnter()
	{
		fecha_cfa = forms.dlgDuplicarFacturaGC.FechaFacturaDuplicar
		sub_setEjercicio();
		doEditser_cfa()
		sub_setNewNumeroFacturaOrd();	
		
	}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FCE73502-654A-45A0-849A-0DCB1D89D574",variableType:8}
 */
var eje_cfa;

/**
	 *
 * @properties={typeid:24,uuid:"CDE66A6A-FA68-4EF6-8777-A47A7D40C7A7"}
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
 * @properties={typeid:35,uuid:"C5B716A1-1192-4308-A29D-8A5F79F46A82"}
 */
var ser_cfa = '';

/**
 *
 * @properties={typeid:24,uuid:"96425082-C9F9-414E-B2BF-CE2F6E72BF8A"}
 */
function doEditser_cfa()
 {
	ser_cfa ='';		
 }

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B6730B16-C1E4-4ECE-A38F-602BD6A24BB1",variableType:8}
 */
var nup_cfa;

/**
  *
 * @properties={typeid:24,uuid:"AA800B77-FBDC-4EC6-B6DD-32C979ECFC1F"}
 */
function sub_setNewNumeroFacturaOrd()
 {
 	var query = 'select NumFactura from ParametrosAplicacion'
 	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
 	nup_cfa = dataset.getValue(1, 1) + 1	
 	
 	
 }
