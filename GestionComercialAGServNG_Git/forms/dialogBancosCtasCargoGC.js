/**
 *
 *
 * @properties={typeid:24,uuid:"8F5707B3-AE1E-46C3-A83A-1C35EE64763B"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing();
		}
	}
	forms.dlg_BancosCuentasCargoGC.elements.codigoctabanco.enabled = false;
	forms.dlg_BancosCuentasCargoGC.elements.codigoctabanco.visible = false;
	forms.dlg_BancosCuentasCargoGC.elements.lblidcodigo.visible = true;	
	application.getWindow('Bancos').hide();
	globals.GCenableBgElements();
	
	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 * @properties={typeid:24,uuid:"E3DA3416-9B02-4FAF-BBF6-C8204768E7D3"}
 */
function onShow() {
	// TODO Auto-generated method stub
	forms.dlg_BancosCuentasCargoGC.elements.codigoctabanco.enabled = false;
	forms.dlg_BancosCuentasCargoGC.elements.codigoctabanco.visible = false;
	forms.dlg_BancosCuentasCargoGC.elements.lblidcodigo.visible = true;	
	
	
	globals.GCdialog_buttonPressed = null;
}

/**
 *
 * @properties={typeid:24,uuid:"DFB29A1E-A058-4DDA-924C-F6EACAC6D811"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	//Encriptar
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits();
	}
	
	databaseManager.saveData();
	
	forms.dlg_BancosCuentasCargoGC.elements.codigoctabanco.enabled = false;
	forms.dlg_BancosCuentasCargoGC.elements.codigoctabanco.visible = false;
	forms.dlg_BancosCuentasCargoGC.elements.lblidcodigo.visible = true;	
	
	//application.getWindow('DialogTiposPescados').hide();
	//globals.GCenableBgElements();
		
		
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2DA98DBE-931D-4E1B-A61C-6CB46D269A49"}
 */
function btn_Anterior(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	forms.dlg_BancosCuentasCargoGC.controller.setSelectedIndex(forms.dlg_BancosCuentasCargoGC.controller.getSelectedIndex() - 1)
	forms.dlg_BancosCuentasCargoGC.elements.codigoctabanco.enabled = false;
	forms.dlg_BancosCuentasCargoGC.elements.codigoctabanco.visible = false;
	forms.dlg_BancosCuentasCargoGC.elements.lblidcodigo.visible = true;	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6B1CFBE2-C3BE-4DB3-908E-ED7999B91405"}
 */
function btn_Siguiente(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	forms.dlg_BancosCuentasCargoGC.controller.setSelectedIndex(forms.dlg_BancosCuentasCargoGC.controller.getSelectedIndex() + 1)
	forms.dlg_BancosCuentasCargoGC.elements.codigoctabanco.enabled = false;
	forms.dlg_BancosCuentasCargoGC.elements.codigoctabanco.visible = false;
	forms.dlg_BancosCuentasCargoGC.elements.lblidcodigo.visible = true;	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"A41D4850-D63E-4118-A2FF-085E36FA0209"}
 */
function btn_Nuevo(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	if(!globals.GCisEditing()) globals.GCstartEditing()	
	forms.dlg_BancosCuentasCargoGC.foundset.newRecord(true)
	forms.dlg_BancosCuentasCargoGC.elements.codigoctabanco.enabled = true;
	forms.dlg_BancosCuentasCargoGC.elements.codigoctabanco.visible = true;
	forms.dlg_BancosCuentasCargoGC.elements.lblidcodigo.visible = false;	
	forms.dlg_BancosCuentasCargoGC.elements.codigoctabanco.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"F8186FBD-7494-41A7-88BB-6519D8F2D8FF"}
 */
function btn_Borrar(event) {
	// TODO Auto-generated method stub
	var msg =  '¿Estás seguro de querer borrarlo?'
	var frm = currentcontroller.getName()
	var methd = 'forms.' + frm + '.sub_doDelete()'

	//clear out global - so we don't accidentally delete something
	globals.core_dlg_buttonPressed = null
	//show the tabpanel "dialog"
	globals.GCshowWarningDialog(msg, methd, 'Cancel', 'Borrar', null, null);
}

/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"B2C38840-41E6-4D46-A672-6116713301BD"}
 */
function sub_doDelete()
{
	//see what button text was pressed and then delete if necessary
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'B' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = forms.dlg_BancosCuentasCargoGC.codigoctabanco;
		record.fecha = new Date();
		record.datomodif = forms.dlg_BancosCuentasCargoGC.nombreentidad;
		record.anterior = 'BORRADO DE LA BD';
		record.despues = 'BORRADO DE LA BD';
		record.usuario = globals.GClogin_usuario
		
		databaseManager.saveData(record)
		
		record = forms.dlg_BancosCuentasCargoGC.foundset.getSelectedRecord()		
		forms.dlg_BancosCuentasCargoGC.foundset.deleteRecord(record)

		//clear out global - so we don't accidentally delete something
		globals.core_dlg_buttonPressed = null
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"0859E864-0189-46EE-A267-6732E3900E71"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCClave = null
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7F7A06BA-C749-4F8C-9149-B8EA9A3062E3"}
 */
function onHide(event) 
{
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		
			globals.GCcancelEditing()
		
		
	}	

	application.getWindow('Bancos').hide();
	globals.GCenableBgElements();
	return true
}
