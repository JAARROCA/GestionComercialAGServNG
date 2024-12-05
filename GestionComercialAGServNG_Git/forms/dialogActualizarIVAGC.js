/**
 *
 * @properties={typeid:24,uuid:"A330615D-1702-47FD-A0EF-B258B0664EC2"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Actualizar IVA').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"793DFD3F-5349-4C1E-A9A0-92FD2195784D"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	if(globals.GCTipoIvaAnterior == null)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir el tipo de IVA anterior.','¡Error!')
		else globals.GCshowErrorDialog('Falta introducir el tipo de IVA anterior.',null,'Aceptar',null,null,null)
	}
	else if(globals.GCTipoIvaNuevo == null)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir el tipo de IVA nuevo.','¡Error!')
		else globals.GCshowErrorDialog('Falta introducir el tipo de IVA nuevo.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(forms.dlg_ActualizarIVAGC.ClaveActualizacion == 'agissa')
		{		
			if(forms.dlg_ActualizarIVAGC.ClientesProveedores == 'C')
			{
				var updater = databaseManager.getFoundSetUpdater(GCactualizarivaclientes);
				updater.setColumn('tipoiva', globals.GCTipoIvaNuevo);			
			    // update in all the records in the foundset
	
				 updater.performUpdate();
				
				databaseManager.refreshRecordFromDatabase(forms.FrmClientesGC.foundset,-1)
			}
			else
			{
				updater = databaseManager.getFoundSetUpdater(GCactualizarivaproveedores);
				updater.setColumn('porciva', globals.GCTipoIvaNuevo);			
			    // update in all the records in the foundset
	
				 updater.performUpdate();
				
				databaseManager.refreshRecordFromDatabase(forms.FrmProveedoresGC.foundset,-1)
			}
			
			
		}
		application.getWindow('Actualizar IVA').hide();
		globals.GCenableBgElements();		
	}	
		
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"AA62485D-162D-49F4-8382-1E28E8A81AD6"}
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
 * @properties={typeid:24,uuid:"ED935260-43C8-40F1-92F0-5FBED5895842"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Actualizar IVA').hide();
	globals.GCenableBgElements();
	return true
}
