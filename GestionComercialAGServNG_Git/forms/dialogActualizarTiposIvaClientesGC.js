/**
 * @properties={typeid:24,uuid:"1AF10191-445D-49D7-9BDB-45C80DE2A878"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Actualizar Tipos de IVA Clientes').hide();
	globals.GCenableBgElements();
}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7D5698C6-403E-4351-87C6-7E7CFA3B6638",variableType:8}
 */
var n;

/**
 * @properties={typeid:24,uuid:"E07B57DA-6B00-4413-B0E3-E5581B896DD9"}
 */
function btn_ok()
{
		//set a global to the text of the button pressed
		n = null
		globals.GCdialog_buttonPressed = elements.btn_ok.text
	
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) globals.GCcancelEditing()
		}
		
		if(forms.dlg_ActualizarTiposIvaClientesGC.DesdeCliente != null)
		{
			var desdeCliente = forms.dlg_ActualizarTiposIvaClientesGC.DesdeCliente
		}
		else
		{
			desdeCliente = 0
		}
		if(forms.dlg_ActualizarTiposIvaClientesGC.HastaCliente != null)
		{
			var hastaCliente = forms.dlg_ActualizarTiposIvaClientesGC.HastaCliente
		}
		else
		{
			hastaCliente = 99999999
		}
		
		if((forms.dlg_ActualizarTiposIvaClientesGC.IVAActual != null && forms.dlg_ActualizarTiposIvaClientesGC.IVAAplicar == null))
		{	
			if(forms.dlg_ActualizarTiposIvaClientesGC.IVAActual != null && forms.dlg_ActualizarTiposIvaClientesGC.IVAAplicar == null)
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Debes indicar el IVA a aplicar','¡Error!')
				else globals.GCshowErrorDialog('Debes indicar el IVA a aplicar',null,'Aceptar',null,null,null)
				forms.dlg_ActualizarTiposIvaClientesGC.elements.IVAAplicar.requestFocus()
			}			
		}
		else 
		{			
			if((forms.dlg_ActualizarTiposIvaClientesGC.IVAActual == null && forms.dlg_ActualizarTiposIvaClientesGC.IVAAplicar != null))
			{	
				if(forms.dlg_ActualizarTiposIvaClientesGC.IVAActual == null && forms.dlg_ActualizarTiposIvaClientesGC.IVAAplicar != null)
				{
					forms.dlg_ActualizarTiposIvaClientesGC.elements.IVAActual.requestFocus()
					if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Debes indicar el IVA actual a modificar','¡Error!')
					else globals.GCshowErrorDialog('Debes indicar el IVA actual a modificar',null,'Aceptar',null,null,null)					
				}				
			}
			if(forms.dlg_ActualizarTiposIvaClientesGC.IVAActual != null && forms.dlg_ActualizarTiposIvaClientesGC.IVAAplicar != null )
			{			
				IVA(desdeCliente,hastaCliente)					
			}			
		}
		
		if(n != null)
		{
			application.getWindow('Actualizar Tipos de IVA Clientes').hide();
			globals.GCenableBgElements();
			globals.GCshowInfoDialog('Actualización de Tipos de IVA de Clientes realizada correctamente',null,'Aceptar',null,null,null)
		}
			
		
		
		
		//application.getWindow('Actualizar Tipos de IVA Clientes').hide();
		//globals.GCenableBgElements1();
		//globals.GCenableBgElements();
		
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"529C6BA4-759E-4951-8BD4-5DF8A18FBC47"}
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
 * @properties={typeid:24,uuid:"7D10FCEF-5C59-4AC7-A5FF-1656BD530E99"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
	return true
}

/**
 * Callback method when form is destroyed.
 *
 * @param {number} DC
 * 
 *
 * @param {number} HC
 * 
 *
 *
 * @properties={typeid:24,uuid:"4E610AEB-5F62-4E57-B50D-39373B5502B8"}
 * @SuppressWarnings(unused)
 */
function IVA(DC,HC) 
{
	var query = "select ID,IdCliente,TipoIva from tbMaestroClientes WHERE IdCliente BETWEEN "+
	DC +" AND " + HC + " AND TipoIva = " + forms.dlg_ActualizarTiposIvaClientesGC.IVAActual
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999999)
	
	
	for( var i = 1 ; i <= dataset.getMaxRowIndex() ; i++ )
	{
		n += 1;
		var uuid = dataset.getValue(i,1)
		var codigo = dataset.getValue(i, 2)		
		
		forms.FrmClientesGC.foundset.loadAllRecords();
		var result = forms.FrmClientesGC.foundset.selectRecord(uuid)
		var fsCount = databaseManager.getFoundSetCount(forms.FrmClientesGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.FrmClientesGC.foundset.getSize())
			{
				return;
			}
		forms.FrmClientesGC.foundset.setSelectedIndex(forms.FrmClientesGC.foundset.getSize());
		result = forms.FrmClientesGC.foundset.selectRecord(uuid);
		}
		
		forms.FrmClientesGC.foundset.tipoiva = forms.dlg_ActualizarTiposIvaClientesGC.IVAAplicar
		databaseManager.saveData()
		
			
	}
}
