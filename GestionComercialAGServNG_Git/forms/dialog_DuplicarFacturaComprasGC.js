/**
*
 * @properties={typeid:24,uuid:"9640E371-AB5C-4E24-8121-7265A46728DC"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Duplicar Factura Compras').hide();
	globals.GCenableBgElements();
	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"A198B890-8729-414D-B278-10A5267CA1C2"}
 * @AllowToRunInFind
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	if(forms.dlgDuplicarFacturaCompraGC.FechaFacturaCompraDuplicar && 
		forms.dlgDuplicarFacturaCompraGC.NFactura)
	{
		
		var query = "select pro_cfca,nup_cfca from tbFacturaCompraCabecera where pro_cfca = " + forms.FrmFacturasComprasGC.pro_cfca + 
		" and nup_cfca ='"+forms.dlgDuplicarFacturaCompraGC.NFactura+"'"
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var n = dataset.getValue(1,1)
		if(n != null)
		{
			if(gcparametrosaplicacion_to_parametrosaplicacion && gcparametrosaplicacion_to_parametrosaplicacion.empresa) var nombreempresa = gcparametrosaplicacion_to_parametrosaplicacion.empresa;
			else nombreempresa = 'GestionComercialAGServNG';
			//var methd = 'forms.dlgDuplicarFacturaCompraGC.foco()';
			//globals.GCshowErrorDialog('Factura de compra de '+forms.FrmFacturasComprasGC.GCtbfacturacompracabecera_to_tbmaestroproveedores.descproveedor+' y número "'+forms.dlgDuplicarFacturaCompraGC.NFactura+'", ya registrada con anterioridad.\n ¡NO SE PUEDE DUPLICAR! Revisela.',methd,'Aceptar',null,null,null)
			var msg = '<html>Factura de compra de '+forms.FrmFacturasComprasGC.GCtbfacturacompracabecera_to_tbmaestroproveedores.descproveedor+
			' y número "'+forms.dlgDuplicarFacturaCompraGC.NFactura+'", ya registrada con anterioridad.<br>¡NO SE PUEDE DUPLICAR! Revisela.</html>';
			scopes.svyCustomDialogs.showErrorDialog('Error',msg,'Aceptar');
			//scopes.svyCustomDialogs.showErrorDialog(nombreempresa,'Factura de compra de '+forms.FrmFacturasComprasGC.GCtbfacturacompracabecera_to_tbmaestroproveedores.descproveedor+' y número "'+forms.dlgDuplicarFacturaCompraGC.NFactura+'", ya registrada con anterioridad.\n ¡NO SE PUEDE DUPLICAR! Revisela.')
				
		}	
		else
		{
			application.getWindow('Duplicar Factura Compras').hide();
			globals.GCenableBgElements();
			
			var arg1 = forms.FrmFacturasComprasGC.foundset;
			var arg2 = new Array('gctbfacturacompracabecera_to_tbfacturacompralinea');
			duplicateRec(arg1,arg2)
			
			
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
			if(forms.FrmFacturasComprasGC.foundset.GCtbfacturacompracabecera_to_tbfacturacompralinea.fecha_lfca)
			{
				// get the foundset updater object
			
				var updater = databaseManager.getFoundSetUpdater(forms.FrmFacturasComprasGC.foundset.GCtbfacturacompracabecera_to_tbfacturacompralinea);
			
				// set the column value
			
				updater.setColumn('fecha', forms.dlgDuplicarFacturaCompraGC.FechaFacturaCompraDuplicar);
				
				 
			
				// update in all the records in the foundset
			
				updater.performUpdate();
				
				databaseManager.saveData()
			}
			
			//databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
			//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas.foundset,-1)
			//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas_Cuentas.foundset,-1)
			
			forms.frm_nav_buttons_comprasGC.btn_showAll()
			forms.FrmFacturasComprasGC.foundset.selectRecord(forms.dlgDuplicarFacturaCompraGC.NFactura, forms.FrmFacturasComprasGC.pro_cfca);
			forms.FrmFacturasComprasGC.onRecordSelect();
			forms.lst_FacturasComprasGC.btn_sortDesc();
		}
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"0ACB946B-7388-45B2-A699-B014771956F4"}
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
 * @properties={typeid:24,uuid:"448825E8-D3A0-4159-9DAF-E7BA90BA1F1D"}
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
 * @properties={typeid:35,uuid:"0F58FD41-5AE6-417D-AAAE-1E188509D5BE",variableType:-4}
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
 * @properties={typeid:24,uuid:"109B5241-B7A6-4103-8F09-2EE1A0C96973"}
 */
function duplicateRec(arg1,arg2) {
	var fs = arg1;
	var relatedFsArray = arg2;

	// Duplicate master record.
	var dup = fs.getRecord(fs.duplicateRecord(false,false));
	//*********	
	var ident = dup.pro_cfca.toString()+dup.nup_cfca;
	dup.nup_cfca = forms.dlgDuplicarFacturaCompraGC.NFactura
	dup.pro_cfca = forms.FrmFacturasComprasGC.pro_cfca
	dup.fecha_cfca = forms.dlgDuplicarFacturaCompraGC.FechaFacturaCompraDuplicar
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
