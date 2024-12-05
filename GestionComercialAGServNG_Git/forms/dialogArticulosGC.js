/**
 * @properties={typeid:24,uuid:"A640F8A3-6CE0-4E1A-8907-E6E4CDE58078"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	forms.dlg_ArticulosGC.Articulo = null;
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{
			databaseManager.revertEditedRecords(forms.dlg_ArticulosGC.foundset)
		}
	}
	application.getWindow('Articulos').hide();
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"3703F51F-4708-4E26-92C2-AADB4AE7B2B5"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	var editedRecs = databaseManager.getEditedRecords( forms.dlg_ArticulosGC.foundset)
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
	            record.tipo = 'A' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{			
			databaseManager.saveData(forms.dlg_ArticulosGC.foundset);
		}
	}
	
	databaseManager.saveData(forms.dlg_ArticulosGC.foundset);
	forms.dlg_ArticulosGC.Articulo = null;
	
	
	
	application.getWindow('Articulos').hide();
	globals.GCenableBgElements();	
	

}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5D30D348-29FB-4ABC-993C-6A95DF5A34CC"}
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
 * @properties={typeid:24,uuid:"6B4EB155-084E-435B-80BC-7FE4F0FFE4B3"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	forms.dlg_ArticulosGC.Articulo = null;
	
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) 
		{
			databaseManager.revertEditedRecords(forms.dlg_ArticulosGC.foundset)
			
		}
	}
	application.getWindow('Articulos').hide();
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
 * @properties={typeid:24,uuid:"29008D93-4415-48FB-8E2A-66B800E83FD0"}
 */
function onShow() {
	elements.btn_anterior.imageURL = "media:///nav_left_blue_greyBg.gif";
	elements.btn_siguiente.imageURL = "media:///nav_right_blue_greyBg.gif";
	elements.btn_Borrar.imageURL = "media:///papelera.GIF";
	elements.btn_Nuevo.imageURL = "media:///NEW.gif";
	elements.btn_ok.imageURL = "media:///guardar.gif";
	elements.btn_cancel.imageURL = "media:///cal_delete.gif";
	globals.GCdialog_buttonPressed = null;
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"D7456BD9-E86F-4947-9090-A3037E7C045C"}
 */
function btn_Anterior(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords(forms.dlg_ArticulosGC.foundset)
	forms.dlg_ArticulosGC.controller.setSelectedIndex(forms.dlg_ArticulosGC.controller.getSelectedIndex() - 1)
	forms.dlg_ArticulosGC.elements.codigo.editable = false;
	forms.dlg_ArticulosGC.elements.codigo.bgcolor = '#FFFF00'//'#f0f0f0';
	forms.dlg_ArticulosGC.elements.codigo.visible = false;
	forms.dlg_ArticulosGC.elements.lblcodigo.visible = true;
	forms.dlg_ArticulosGC.Articulo = null;
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"814690B5-4BF9-4F00-A7E6-2C852127C443"}
 */
function btn_Siguiente(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords(forms.dlg_ArticulosGC.foundset)
	forms.dlg_ArticulosGC.controller.setSelectedIndex(forms.dlg_ArticulosGC.controller.getSelectedIndex() + 1)
	forms.dlg_ArticulosGC.elements.codigo.editable = false;
	forms.dlg_ArticulosGC.elements.codigo.bgcolor = '#FFFF00'//'#f0f0f0';
	forms.dlg_ArticulosGC.elements.codigo.visible = false;
	forms.dlg_ArticulosGC.elements.lblcodigo.visible = true;
	forms.dlg_ArticulosGC.Articulo = null;
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"7E317479-FFE9-4FB5-AE2F-05200EA738F5"}
 */
function btn_Borrar(event) {
	// TODO Auto-generated method stub
	var pre = forms.dlg_ArticulosGC.gctbmaestroarticulos_to_lofertas.getSize()
	var alb = forms.dlg_ArticulosGC.gctbmaestroarticulos_to_lalbaran.getSize()
	var fra = forms.dlg_ArticulosGC.gctbmaestroarticulos_to_tbfacturalinea.getSize()
	var pedcompra = forms.dlg_ArticulosGC.gctbmaestroarticulos_to_tbpedidocompralinea.getSize()
	var albcompra = forms.dlg_ArticulosGC.gctbmaestroarticulos_to_lalbapro.getSize()
	var fracompra = forms.dlg_ArticulosGC.gctbmaestroarticulos_to_tbfacturacompralinea.getSize()
	//var cont = companies_to_contacts.getSize()

	if(fra > 0 || pre > 0 || alb > 0 || pedcompra > 0 || albcompra > 0 || fracompra > 0)
	{
		globals.GCshowErrorDialog("No se puede borrar un Artículo que se utiliza en varios documentos.", null,'Aceptar', null, null, null);
	}
	else
	{
		var msg =  '¿Estás seguro de querer borrarlo?'
		var frm = currentcontroller.getName()
		var methd = 'forms.' + frm + '.sub_doDelete()'
	
		//clear out global - so we don't accidentally delete something
		globals.core_dlg_buttonPressed = null
		//show the tabpanel "dialog"
		globals.GCshowWarningDialog(msg, methd, 'Cancelar', 'Borrar', null, null);
	}
}

/**
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"CFFFB7AC-61D7-4310-A583-3FD075F4DE35"}
 */
function sub_doDelete()
{
	//see what button text was pressed and then delete if necessary
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'A' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = forms.dlg_ArticulosGC.codigo;
		record.fecha = new Date();
		record.datomodif = forms.dlg_ArticulosGC.descripcion;
		record.anterior = 'BORRADO DE LA BD';
		record.despues = 'BORRADO DE LA BD';
		record.usuario = globals.GClogin_usuario
		
		databaseManager.saveData(record)
		
		record = forms.dlg_ArticulosGC.foundset.getSelectedRecord()		
		forms.dlg_ArticulosGC.foundset.deleteRecord(record)

		//clear out global - so we don't accidentally delete something
		globals.core_dlg_buttonPressed = null
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"8E2756A2-E62B-4113-B766-9F12A21A83AD"}
 */
function btn_Nuevo(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords(forms.dlg_ArticulosGC.foundset)
	if(!globals.GCisEditing()) globals.GCstartEditing()	
	forms.dlg_ArticulosGC.Articulo = null;
	forms.dlg_ArticulosGC.foundset.newRecord(true)
	forms.dlg_ArticulosGC.id = application.getUUID()
	forms.dlg_ArticulosGC.multiplo = 1;
	forms.dlg_ArticulosGC.situacion = 'A';
	forms.dlg_ArticulosGC.fechavigor = new Date();
	forms.dlg_ArticulosGC.porcbeneficio = 20;
	forms.dlg_ArticulosGC.piva_a = 21;
	forms.dlg_ArticulosGC.elements.codigo.editable = true
	forms.dlg_ArticulosGC.elements.codigo.bgcolor = '#FFFF00'//'#ffffff'
	forms.dlg_ArticulosGC.elements.codigo.visible = true
	forms.dlg_ArticulosGC.elements.lblcodigo.visible = false	
	forms.dlg_ArticulosGC.elements.codigo.requestFocus()
}
