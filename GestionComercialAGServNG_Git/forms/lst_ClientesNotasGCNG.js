/**
 *
 * @properties={typeid:24,uuid:"C3B761E0-95F5-4244-9ECC-900E84B8067D"}
 * @SuppressWarnings(deprecated)
 */
function btn_newEmpresaPExtra()
{
	var ro = forms.FrmClientesGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Cliente editandose','Grabe primero el cliente antes de agregar Notas.')
		//globals.GCshowInfoDialog('Grabe primero el cliente antes de agregar Notas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var cli = forms.FrmClientesGC.idcliente;
		if(!cli) cli = -99;
		var query = "select * from [dbo].[tbMaestroClientes] where [IdCliente] =" + cli;
					
		//var ds = controller.getDataSource().split('/');
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Cliente = dataset.getValue(1, 1)
		
		if(Cliente == null)
		{
			var msg = '<html>¡El Cliente aún no existe!<br><br>Cree uno y grabelo antes de añadir Notas.</html>'
			scopes.svyCustomDialogs.showErrorDialog('Error',msg,'Aceptar')
			//scopes.svyCustomDialogs.showErrorDialog('Error','El Cliente aún no existe!\n\n Cree uno y grabelo antes de añadir Notas.','Aceptar')
			//globals.GCshowErrorDialog('El Cliente aún no existe!\n\n Cree uno y grabelo antes de añadir Notas.',null,'Aceptar',null,null,null)
		}
		else
		{
		    Cliente= forms.FrmClientesGC.idcliente;
			
			//if there's no transaction, start one - so they can "cancel"
			if(!globals.GCisEditing()) 
			{
				rec = null;
				fsindex = null;
				globals.GCstartEditing()
		
			//make a new record
				forms.dlgClientesNotasGC.foundset.newRecord(false)
			
				
				forms.dlgClientesNotasGC.idcliente = Cliente;
				forms.dlgClientesNotasGC.validate_autoEnter();
				
			
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogClientesNotas('Nueva Nota', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlgClientesNotasGC.elements.titulo.requestFocus()
			}
		}
	}
}

/**
 *
 * @properties={typeid:24,uuid:"521CA71C-F8E2-423F-B214-D80CC1BA3B63"}
 * @SuppressWarnings(deprecated)
 */
function btn_showEmpresaPExtra()
{
	var ro = forms.FrmClientesGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Cliente editandose','Grabe primero el cliente antes de editar Notas.')
		//globals.GCshowInfoDialog('Grabe primero el cliente antes de editar Notas.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		var result = forms.dlgClientesNotasGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlgClientesNotasGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlgClientesNotasGC.foundset.getSize()) return;
			forms.dlgClientesNotasGC.foundset.setSelectedIndex(forms.dlgClientesNotasGC.foundset.getSize());
			result = forms.dlgClientesNotasGC.foundset.selectRecord(uid);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_ClientesNotasGCNG.sub_deleteClientesNotas()'
		
		//show the "fake" dialog
		globals.GCshowDialogClientesNotas('Editar Nota', 1, null, null, true, 'Borrar Nota', null, null, null, null);
	}
}

/**
 *
 * @properties={typeid:24,uuid:"0151C3E2-88D1-4C69-ACAC-B9B93B39242B"}
 */
function sub_deleteClientesNotas()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Nota')
	{
		if(fsindex) {
			//var bool = foundset.deleteRecord(fsindex);		
			var bool = elements.table_ClientesNotas.myFoundset.foundset.deleteRecord(fsindex);	
		}
		if(bool == false && rec) {
			//bool = foundset.deleteRecord(rec);
			bool = elements.table_ClientesNotas.myFoundset.foundset.deleteRecord(rec);				
		}		
	}
	fsindex = null;
	rec = null;
}

/**
 * @type {JSRecord}
 *
 * @properties={typeid:35,uuid:"0904671F-F4AB-43A8-85D0-5F3C11F7FB86",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"2E870543-416D-45C8-8739-9E374BB347F7",variableType:8}
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
 * @properties={typeid:24,uuid:"2CADA94E-3852-4817-9870-41E1499802C1"}
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
 * @properties={typeid:24,uuid:"B7C55ED2-59EC-4B65-8EE4-CCB29DBCD427"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
var column = elements.table_ClientesNotas.getColumn(columnindex);
	
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
 * @properties={typeid:24,uuid:"AAFF0D6E-CAE6-425E-92A3-22CAFEEB68EF"}
 */
function onShow(firstShow, event) {
	rec = null;
	fsindex = null;
	elements.table_ClientesNotas.myFoundset.foundset.sort('fecha asc')
}
