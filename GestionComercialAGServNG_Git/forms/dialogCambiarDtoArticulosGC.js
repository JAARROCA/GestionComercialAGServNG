/**
 * @properties={typeid:24,uuid:"C7CD08B6-193B-45E0-AA9D-BB84DC425A71"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Cambiar Dto Articulos').hide();
	globals.GCenableBgElements();
}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5059DCBA-E29C-4B76-9C78-8D817B7F280B",variableType:8}
 */
var n;

/**
 * @properties={typeid:24,uuid:"3A7AFB05-E60C-4407-B5A5-0082EA86EC61"}
 * @SuppressWarnings(deprecated)
 */
function btn_ok()
{
		//set a global to the text of the button pressed
		/*if(!forms.dlg_CambiarDtoArticulosGC.Descuento)
		{
			forms.dlg_CambiarDtoArticulosGC.elements.Descuento.requestFocus()
			forms.dlg_CambiarDtoArticulosGC.elements.Descuento.selectAll()
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Debes indicar el nuevo porcentaje de Descuento.','¡Error!')
			else globals.GCshowErrorDialog('Debes indicar el nuevo porcentaje de Descuento.',null,'Aceptar',null,null,null)
		}
		else
		{*/
			n = null
			globals.GCdialog_buttonPressed = elements.btn_ok.text
		
			if(globals.GCokToCommit == 1)
			{
				if(globals.GCisEditing()) globals.GCcancelEditing()
			}
			
			if(forms.dlg_CambiarDtoArticulosGC.Familia)
			{
				var familia = forms.dlg_CambiarDtoArticulosGC.Familia
			}
			
				DTO(familia,forms.dlg_CambiarDtoArticulosGC.Descuento)					
			
			
			if(n != null)
			{
				application.getWindow('Cambiar Dto Articulos').hide();
				globals.GCenableBgElements();
				var frm = currentcontroller.getName()
				if(frm == 'FrmArticulosGC') forms.FrmArticulosGC.controller.setSelectedIndex(1)
				globals.GCshowInfoDialog('Actualización de Descuentos de Articulos realizada correctamente',null,'Aceptar',null,null,null)
			}
				
			
			
			
			//application.getWindow('Actualizar Tipos de IVA Clientes').hide();
			//globals.GCenableBgElements1();
			//globals.GCenableBgElements();
		//}
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B217847D-B613-4162-9F43-844683E8261E"}
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
 * @properties={typeid:24,uuid:"490DB6A9-E7E7-4F49-9697-2BE26CEEF65A"}
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
 * @properties={typeid:24,uuid:"335AF585-373B-47A2-BC24-6EA0A6FF6D69"}
 * @SuppressWarnings(unused)
 */
function DTO(FAM,PORC) 
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
		
		if(!PORC) PORC = null
		forms.FrmArticulosGC.foundset.dto = PORC;
		if (i % 10 == 0 || i == dataset.getMaxRowIndex())	databaseManager.saveData()
					
	}
}
