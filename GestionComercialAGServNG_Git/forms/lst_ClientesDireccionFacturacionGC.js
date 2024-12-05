/**
 * @properties={typeid:24,uuid:"3F2E78A7-4E86-4460-B225-7309470115F4"}
 */
function btn_newLinea()
{
	var ro = forms.FrmClientesGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero el cliente antes de agregar direcciones.')
		//globals.GCshowInfoDialog('Grabe primero el cliente antes de agregar direcciones.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'SELECT * FROM [dbo].[tbMaestroClientes] where [IdCliente] =' + forms.FrmClientesGC.idcliente;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Cliente = dataset.getValue(1, 1)
		
		if(Cliente == null)
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Cliente Inexistente! Cree uno y grabelo antes de añadir direcciones.','Aceptar')
			//globals.GCshowErrorDialog('Cliente Inexistente! Cree uno y grabelo antes de añadir direcciones.',null,'Aceptar',null,null,null)
		}
		else
		{
			if(forms.FrmClientesGC.gctbmaestroclientes_to_tbmaestroclientesdirecfacturacion && 
			forms.FrmClientesGC.gctbmaestroclientes_to_tbmaestroclientesdirecfacturacion.getSize() > 0)
			{
				btn_showPedidoLinea()
			}
			else
			{
				Cliente= forms.FrmClientesGC.idcliente
				
		
				if(!globals.GCisEditing()) 
				{	
					globals.GCstartEditing()
			
				//make a new record
				forms.dlg_ClientesDireccionFacturacionGC.foundset.newRecord(true)
			
				forms.dlg_ClientesDireccionFacturacionGC.idcliente = Cliente;
				forms.dlg_ClientesDireccionFacturacionGC.cif = forms.FrmClientesGC.cif;
				forms.dlg_ClientesDireccionFacturacionGC.razonsocial = forms.FrmClientesGC.desccliente;
				forms.dlg_ClientesDireccionFacturacionGC.direccionfiscal = forms.FrmClientesGC.direccion;
				forms.dlg_ClientesDireccionFacturacionGC.poblacion = forms.FrmClientesGC.poblacion;
				forms.dlg_ClientesDireccionFacturacionGC.provincia = forms.FrmClientesGC.provincia;			
				forms.dlg_ClientesDireccionFacturacionGC.codpostal = forms.FrmClientesGC.codpostal;			
				forms.dlg_ClientesDireccionFacturacionGC.pais = forms.FrmClientesGC.GCtbmaestroclientes_to_pais.pai_nombre;
			
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogClientesDireccionFacturacion('Nueva Dirección', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_ClientesDireccionFacturacionGC.elements.cif.requestFocus();
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"34FCEFA2-778C-4731-A82A-B25E929F2B66"}
 * @AllowToRunInFind
 */
function btn_showPedidoLinea()
{
	var ro = forms.FrmClientesGC.elements.fld_nombre.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero el cliente antes de editar direcciones.')
		//globals.GCshowInfoDialog('Grabe primero el cliente antes de editar direcciones.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		forms.dlg_ClientesDireccionFacturacionGC.foundset.loadAllRecords()
		var result = forms.dlg_ClientesDireccionFacturacionGC.foundset.selectRecord(forms.FrmClientesGC.idcliente)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ClientesDireccionFacturacionGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ClientesDireccionFacturacionGC.foundset.getSize()) return;
			forms.dlg_ClientesDireccionFacturacionGC.foundset.setSelectedIndex(forms.dlg_ClientesDireccionFacturacionGC.foundset.getSize());
			result = forms.dlg_ClientesDireccionFacturacionGC.foundset.selectRecord(forms.FrmClientesGC.idcliente);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	    
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_ClientesDireccionFacturacionGC.sub_deleteDireccion()'
	
		//show the "fake" dialog
		globals.GCshowDialogClientesDireccionFacturacion('Editar Dirección', 1, null, null, true, 'Borrar Dirección', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"43525A9D-6449-4818-A73E-1FF14D20835C"}
 */
function sub_deleteDireccion()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Dirección')
	{	
		fsindex = 1;
		rec = elements.table_ClientesDireccionFacturas.myFoundset.foundset.getRecord(1);
		//foundset.deleteRecord()
		if(fsindex) {
			//var bool = foundset.deleteRecord(fsindex);		
			var bool = elements.table_ClientesDireccionFacturas.myFoundset.foundset.deleteRecord(fsindex);	
		}
		if(bool == false && rec) {
			//bool = foundset.deleteRecord(rec);
			bool = elements.table_ClientesDireccionFacturas.myFoundset.foundset.deleteRecord(rec);				
		}
	}
	fsindex = null;
	rec = null;
}

/**
 * @type {JSRecord}
 *
 *
 * @properties={typeid:35,uuid:"5BBD5B60-DEE7-40DA-AA10-73EEB6773FB0",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"3430D92A-2F3F-4707-8BEB-37B564944CE8",variableType:8}
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
 * @properties={typeid:24,uuid:"0BADC070-E006-4034-9756-DA030C798D95"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	// TODO Auto-generated method stub
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if(foundsetindex && columnindex && record) btn_showPedidoLinea();
	
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
 * @properties={typeid:24,uuid:"2684FFA9-9360-4630-B7C8-D1660B325027"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
var column = elements.table_ClientesDireccionFacturas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if (column.id === "editar") {
		btn_showPedidoLinea();
	}

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F95AAB0F-58BE-4735-9055-3A169E991690"}
 */
function onShow(firstShow, event) {
	rec = null;
	fsindex = null;
	elements.table_ClientesDireccionFacturas.myFoundset.foundset.sort('razonsocial asc')
}
