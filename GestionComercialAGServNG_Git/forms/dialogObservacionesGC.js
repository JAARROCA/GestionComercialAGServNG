/**
 * @type {Array}
 *
 *
 * @properties={typeid:35,uuid:"08C17E28-F7C1-4C39-9F9B-C341C9FD8542",variableType:-4}
 */
var editedRecs;

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"18FE3D8E-C1AA-4F41-8D80-7725B03266D6"}
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
					databaseManager.saveData(forms.dlg_ObservacionesGC.foundset)
				}
			}
			
			
			if(globals.GCdialog_performMethod)
			{
				//perform whatever method is in the global
				eval(globals.GCdialog_performMethod)
				globals.GCdialog_performMethod = null
			}
			
			
			
			
			application.getWindow('Observacion').hide();
			globals.GCenableBgElements();
		
	
}

/**
 * @properties={typeid:24,uuid:"9A51D0EB-7CEB-480F-BC41-062D2232EA37"}
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
			databaseManager.revertEditedRecords(forms.dlg_ObservacionesGC.foundset)
		}
	}
	application.getWindow('Observacion').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"5C0BA004-EC79-41A3-8429-C3554749CFDC"}
 */
function btn_ok(event)
{
	if(!forms.dlg_ObservacionesGC.descripcion)
	{
		forms.dlg_ObservacionesGC.elements.fld_denom_fp.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('La descripción de la Observación es obligatoria','¡Error!')
		else globals.GCshowErrorDialog('La descripción de la Observación es obligatoria',null,'Aceptar',null,null,null)
	}
	else
	{
		editedRecs = databaseManager.getEditedRecords( forms.dlg_ObservacionesGC.foundset)
		
		if(editedRecs.length > 0)
		{
			for (var x=0;x<editedRecs.length;x++)
			{
				var cod = editedRecs[x]['codigo'];
				var dataset = editedRecs[x].getChangedData();
				var rows = dataset.getMaxRowIndex()
				for( var i = 1 ; i <= rows ; i++ )
				{
					var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
					var record = vSet.getRecord(vSet.newRecord());
					record.id = application.getUUID()
		            record.tipo = 'OB' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
					databaseManager.saveData(forms.dlg_ObservacionesGC.foundset)
				}
			}
			
			databaseManager.saveData(forms.dlg_ObservacionesGC.foundset)
			  
				
			application.getWindow('Observacion').hide();
			globals.GCenableBgElements();
		
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"01319CDB-67CE-4DE2-806A-6D0C238A4DEB"}
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
 * @properties={typeid:24,uuid:"86CBCEBC-0AA9-4D00-ADE2-8D63DEF870D6"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text && globals.GCdialog_buttonPressed != elements.btn_3.text)
	{
		if(globals.GCisEditing()) 
		{
			databaseManager.revertEditedRecords(forms.dlg_ObservacionesGC.foundset)
		}
	}
	application.getWindow('Observacion').hide();
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
 * @properties={typeid:24,uuid:"3A0C813E-C617-4927-88E6-370639D2481F"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
