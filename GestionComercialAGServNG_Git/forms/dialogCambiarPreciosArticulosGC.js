/**
 * @properties={typeid:24,uuid:"2F43BC39-BB91-4740-A6F7-B70DE4E22BEE"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Cambiar Precios Articulos').hide();
	globals.GCenableBgElements();
}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C30444F4-FAD6-4A1E-B7A9-D28EF6EFA687",variableType:8}
 */
var n;

/**
 * @properties={typeid:24,uuid:"8A46437A-BC7D-4B6B-8F7D-BBAE5CFF01DD"}
 * @SuppressWarnings(deprecated)
 */
function btn_ok()
{
		//set a global to the text of the button pressed
		if(!forms.dlg_CambiarPreciosArticulosGC.PorcCambio)
		{
			forms.dlg_CambiarPreciosArticulosGC.elements.PorcCambio.requestFocus()
			forms.dlg_CambiarPreciosArticulosGC.elements.PorcCambio.selectAll()
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Debes indicar porcentaje de Cambio de precios.','¡Error!')
			else globals.GCshowErrorDialog('Debes indicar porcentaje de Cambio de precios.',null,'Aceptar',null,null,null)
		}
		else
		{
			n = null
			globals.GCdialog_buttonPressed = elements.btn_ok.text
		
			if(globals.GCokToCommit == 1)
			{
				if(globals.GCisEditing()) globals.GCcancelEditing()
			}
			
			if(forms.dlg_CambiarPreciosArticulosGC.Familia)
			{
				var familia = forms.dlg_CambiarPreciosArticulosGC.Familia
			}
			
				PRECIO(familia,forms.dlg_CambiarPreciosArticulosGC.PorcCambio)					
			
			
			if(n != null)
			{
				application.getWindow('Cambiar Precios Articulos').hide();
				globals.GCenableBgElements();
				var frm = currentcontroller.getName()
				if(frm == 'FrmArticulosGC') forms.FrmArticulosGC.controller.setSelectedIndex(1)
				globals.GCshowInfoDialog('Actualización de Precios de Articulos realizada correctamente',null,'Aceptar',null,null,null)
			}
				
			
			
			
			//application.getWindow('Actualizar Tipos de IVA Clientes').hide();
			//globals.GCenableBgElements1();
			//globals.GCenableBgElements();
		}
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"13B2F8E0-B51F-4878-A6F1-11124740632B"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D345081C-BDFF-49B4-BE6E-A1CB7EF02EED"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
	return true
}

/**
 * Callback method when form is destroyed.
 *
 * @param {String} FAM
 * 
 *
 * @param {number} PORC
 * 
 *
 *
 * @properties={typeid:24,uuid:"A3B62D3B-5D23-4F10-B32F-6FAEC376A1E6"}
 * @SuppressWarnings(unused)
 */
function PRECIO(FAM,PORC) 
{
	if(FAM)
	{
		var query = "select ID from tbMaestroArticulos WHERE familia = '"+
		FAM + "' ORDER BY Codigo";
	}
	else
	{
		query = "select ID from tbMaestroArticulos ORDER BY Codigo"
	}
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999999)
	
	
	for( var i = 1 ; i <= dataset.getMaxRowIndex() ; i++ )
	{
		n += 1;
		var uuid = dataset.getValue(i,1)
		var codigo = dataset.getValue(i, 2)		
		
		forms.FrmArticulosGC.foundset.loadAllRecords();
		var result = forms.FrmArticulosGC.foundset.selectRecord(uuid)
		var fsCount = databaseManager.getFoundSetCount(forms.FrmArticulosGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.FrmArticulosGC.foundset.getSize()) return;
			forms.FrmArticulosGC.foundset.setSelectedIndex(forms.FrmArticulosGC.foundset.getSize());
			result = forms.FrmArticulosGC.foundset.selectRecord(uuid);
		}
		
		
		
		if(forms.FrmArticulosGC.foundset.preciopieza)
		{
			if(!forms.FrmArticulosGC.foundset.porcbeneficio) var pbeneficio = 0;
			else pbeneficio = forms.FrmArticulosGC.foundset.porcbeneficio;
			var beneficio = forms.FrmArticulosGC.foundset.preciocosto * pbeneficio * 0.01;
			if(!forms.FrmArticulosGC.foundset.piva_a) var piva = 0;
			else piva = forms.FrmArticulosGC.foundset.piva_a;
			//forms.FrmArticulosGC.foundset.preciopieza = (forms.FrmArticulosGC.foundset.preciocosto * 100 / (100 - pbeneficio))  
			forms.FrmArticulosGC.foundset.preciopieza = globals.GCROUND((forms.FrmArticulosGC.foundset.preciocosto + beneficio) * (1 + (piva * 0.01)), 2)
			databaseManager.saveData(forms.FrmArticulosGC.foundset)
		}			
	}
}
