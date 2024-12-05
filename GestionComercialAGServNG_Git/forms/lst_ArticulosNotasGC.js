/**
 *
 * @properties={typeid:24,uuid:"071B7AA3-ED2E-461F-972B-54A4C6F4EB9A"}
 * @SuppressWarnings(deprecated)
 */
function btn_newEmpresaPExtra()
{
	var ro = forms.FrmArticulosGC.elements.fld_descripcion.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero el Artículo antes de agregar Observaciones.','Aceptar')
		//globals.GCshowInfoDialog('Grabe primero el Artículo antes de agregar Observaciones.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = "select * from [dbo].[tbMaestroArticulos] where [Codigo] ='" + forms.FrmArticulosGC.codigo+"'";
					
		//var ds = controller.getDataSource().split('/');
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Articulo = dataset.getValue(1, 1)
		
		if(Articulo == null)
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','El Artículo aún no existe! Cree uno y grabelo antes de añadir Observaciones.','Aceptar')
			//globals.GCshowErrorDialog('El Artículo aún no existe!\n\n Cree uno y grabelo antes de añadir Observaciones.',null,'Aceptar',null,null,null)
		}
		else
		{
			Articulo= forms.FrmArticulosGC.codigo;
			
			//if there's no transaction, start one - so they can "cancel"
			if(!globals.GCisEditing()) 
			{
				globals.GCstartEditing()
		
			//make a new record
				forms.dlgArticulosNotasGC.foundset.newRecord(false)
			
				
				forms.dlgArticulosNotasGC.codpieza = Articulo;
				forms.dlgArticulosNotasGC.validate_autoEnter();
				
			
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogArticulosNotas('Nueva Nota', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlgArticulosNotasGC.elements.titulo.requestFocus()
			}
		}
	}
}

/**
 *
 * @properties={typeid:24,uuid:"B086822F-49F8-47A3-AC46-6A7B81D887FC"}
 * @SuppressWarnings(deprecated)
 */
function btn_showEmpresaPExtra()
{
	var ro = forms.FrmArticulosGC.elements.fld_descripcion.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero el Artículo antes de editar Observaciones.','Aceptar')
		//globals.GCshowInfoDialog('Grabe primero el Artículo antes de editar Observaciones.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		var result = forms.dlgArticulosNotasGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlgArticulosNotasGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlgArticulosNotasGC.foundset.getSize()) return;
			forms.dlgArticulosNotasGC.foundset.setSelectedIndex(forms.dlgArticulosNotasGC.foundset.getSize());
			result = forms.dlgArticulosNotasGC.foundset.selectRecord(uid);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_ArticulosNotasGC.sub_deleteArticulosNotas()'
		
		//show the "fake" dialog
		globals.GCshowDialogArticulosNotas('Editar Nota', 1, null, null, true, 'Borrar Nota', null, null, null, null);
	}
}

/**
 *
 * @properties={typeid:24,uuid:"E2E4E5E1-7CEC-4C1E-B090-CBAF57F56383"}
 */
function sub_deleteArticulosNotas()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Nota')
	{
		if(rec) forms.lst_ArticulosNotasGC.foundset.deleteRecord(rec)
		else forms.lst_ArticulosNotasGC.foundset.deleteRecord()
	}
}

/**
 * @type {JSRecord}
 *
 *
 *
 * @properties={typeid:35,uuid:"5A6CFCE7-C29B-4D2E-9CC4-E16F81303453",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"5D9F000E-41F2-43E1-8D43-8E655D4EA3A2",variableType:8}
 */
var fsindex;

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 *
 *
 * @properties={typeid:24,uuid:"8410D60F-8D04-47F1-8544-D9A864697658"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	// TODO Auto-generated method stub
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if(foundsetindex && columnindex && record) btn_showEmpresaPExtra();
	
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 *
 *
 * @properties={typeid:24,uuid:"9CCA584D-E4C5-4C88-BB87-DED93C01C533"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
var column = elements.table_ArticulosNotas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if (column.id === "editar") {
		btn_showEmpresaPExtra();
	}

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"4CAD821A-3463-4D11-B8FD-87A3DAC29535"}
 */
function onShow(firstShow, event) {
	rec = null;
	fsindex = null;
	elements.table_ArticulosNotas.myFoundset.foundset.sort('linea asc')
}
