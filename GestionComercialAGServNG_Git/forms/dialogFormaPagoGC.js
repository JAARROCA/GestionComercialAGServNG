/**
 * @type {Array}
 *
 *
 * @properties={typeid:35,uuid:"2BAD67DC-B0F7-4F14-90CF-4DC770B5EC62",variableType:-4}
 */
var editedRecs;

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"01B7267C-8FD3-4683-B287-ABBB3C22DBDC"}
 */
function btn_3rdBtn(event)
{
			
		//set a global to the text of the button pressed
			globals.GCdialog_buttonPressed = elements.btn_3.text
			if(globals.GCokToCommit == 1)
			{
				if(globals.GCisEditing()) 
				{
					//globals.GCsaveEdits();
					databaseManager.saveData(forms.dlg_FormaPagoGC.foundset)
				}
			}
			
			
			if(globals.GCdialog_performMethod)
			{
				//perform whatever method is in the global
				eval(globals.GCdialog_performMethod)
				globals.GCdialog_performMethod = null
			}
			
			
			
			
			application.getWindow('Forma Pago').hide();
			globals.GCenableBgElements();
		
	
}

/**
 * @properties={typeid:24,uuid:"F314B315-5B3A-432C-B0D3-60C8F2298999"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{
			//globals.GCcancelEditing();
			databaseManager.revertEditedRecords(forms.dlg_FormaPagoGC.foundset)
		}
	}
	application.getWindow('Forma Pago').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"9BBE2580-5841-44DF-87A3-3CBA96F08EB6"}
 */
function btn_ok(event)
{
	var query = "select [codig_fp] from [tbmaestroformpago] where [codig_fp] = '" + forms.dlg_FormaPagoGC.codig_fp + "'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		forms.dlg_FormaPagoGC.elements.codig_fp.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Forma de Pago duplicada!','¡Error!')
		else globals.GCshowErrorDialog('Forma de Pago duplicada!',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_FormaPagoGC.codig_fp)
	{
		forms.dlg_FormaPagoGC.elements.codig_fp.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('El código de la Forma de Pago es obligatoria','¡Error!')
		else globals.GCshowErrorDialog('El código de la Forma de Pago es obligatoria',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_FormaPagoGC.denom_fp)
	{
		forms.dlg_FormaPagoGC.elements.fld_denom_fp.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('La descripción de la Forma de Pago es obligatoria','¡Error!')
		else globals.GCshowErrorDialog('La descripción de la Forma de Pago es obligatoria',null,'Aceptar',null,null,null)
	}
	else
	{
		editedRecs = databaseManager.getEditedRecords( forms.dlg_FormaPagoGC.foundset)
		if(editedRecs.length > 0)
		{
			for (var x=0;x<editedRecs.length;x++)
			{
				var cod = editedRecs[x]['codig_fp'];
				dataset = editedRecs[x].getChangedData();
				var rows = dataset.getMaxRowIndex()
				for( var i = 1 ; i <= rows ; i++ )
				{
					var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
					var record = vSet.getRecord(vSet.newRecord());
					record.id = application.getUUID()
		            record.tipo = 'FP' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
					record.codigo = cod
					record.fecha = new Date()
					record.datomodif = dataset.getValue(i,1)
					record.anterior = dataset.getValue(i,2)
					record.despues = dataset.getValue(i,3)
					record.usuario = globals.GClogin_usuario
					
					databaseManager.saveData(record)
				    //application.output(cod+' '+dataset.getValue(i,1) +' '+ dataset.getValue(i,2) +' '+ dataset.getValue(i,3));
				}
			}
		}				
		//set a global to the text of the button pressed
			globals.GCdialog_buttonPressed = elements.btn_ok.text
			if(globals.GCokToCommit == 1)
			{
				if(globals.GCisEditing()) 
				{
					databaseManager.saveData(forms.dlg_FormaPagoGC.foundset)
				}
			}
			
			databaseManager.saveData(forms.dlg_FormaPagoGC.foundset)
			  
				
			application.getWindow('Forma Pago').hide();
			globals.GCenableBgElements();
		
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"837FF347-C607-47A3-B8EB-0AE8E0801DAA"}
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
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"808E2087-3523-4117-9E7B-851FF9E0733B"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text && globals.GCdialog_buttonPressed != elements.btn_3.text)
	{
		if(globals.GCisEditing()) 
		{
			databaseManager.revertEditedRecords(forms.dlg_FormaPagoGC.foundset)
		}
	}
	application.getWindow('Forma Pago').hide();
	globals.GCenableBgElements();	
	
	return true
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"21839470-AE7C-48C1-855C-507B47E5E867"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
