/**
 * @properties={typeid:24,uuid:"6E59F7D9-19CA-4C44-B957-276AE83AAAAA"}
 */
function btn_newLinea()
{
	var ro = forms.FrmArticulosGC.elements.fld_descripcion.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero el artículo antes de agregar Precios de Clientes.','Aceptar')
		//globals.GCshowInfoDialog('Grabe primero el artículo antes de agregar Precios de Clientes.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = "SELECT * FROM [dbo].[tbMaestroArticulos] where [codigo] ='" + forms.FrmArticulosGC.codigo +"'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var articulo = dataset.getValue(1, 1)
		
		if(articulo == null)
		{
			scopes.svyCustomDialogs.showInfoDialog('Info','Artículo Inexistente! Cree uno y grabelo antes de añadir Precios de Clientes.','Aceptar')
			//globals.GCshowErrorDialog('Artículo Inexistente! Cree uno y grabelo antes de añadir Precios de Clientes.',null,'Aceptar',null,null,null)
		}
		else
		{
			if(globals.GCisEditing()) globals.GCcancelEditing()			
			articulo= forms.FrmArticulosGC.codigo;
				
		
			if(!globals.GCisEditing()) 
			{	
				globals.GCstartEditing()
			
				forms.dlg_ArticuloClientesPrecioGC.elements.BtnRefencia.visible = true;
				forms.dlg_ArticuloClientesPrecioGC.elements.idcliente.readOnly = false;
				forms.dlg_ArticuloClientesPrecioGC.elements.idcliente.bgcolor = '#ffffff'//'#f0f0f0';
				forms.dlg_ArticuloClientesPrecioGC.elements.idcliente.visible = true;
				forms.dlg_ArticuloClientesPrecioGC.elements.lbl_idcliente.visible = false;
				//make a new record
				forms.dlg_ArticuloClientesPrecioGC.foundset.newRecord(true)
				forms.dlg_ArticuloClientesPrecioGC.id = application.getUUID()
				forms.dlg_ArticuloClientesPrecioGC.idarticulo = articulo;
				
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogArticuloPrecioClientes('Nuevo Precio Artículo', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_ArticuloClientesPrecioGC.elements.idcliente.requestFocus();
			}			
		}
	}
}

/**
 * @properties={typeid:24,uuid:"5DF804E6-8232-4908-962C-C63EB3EAD1C6"}
 * @AllowToRunInFind
 */
function btn_showPedidoLinea()
{
	var ro = forms.FrmArticulosGC.elements.fld_descripcion.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero el artículo antes de editar Precios de Clientes.','Aceptar')
		//globals.GCshowInfoDialog('Grabe primero el artículo antes de editar Precios de Clientes.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		forms.dlg_ArticuloClientesPrecioGC.foundset.loadAllRecords()
		var result = forms.dlg_ArticuloClientesPrecioGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ArticuloClientesPrecioGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ArticuloClientesPrecioGC.foundset.getSize()) return;
			forms.dlg_ArticuloClientesPrecioGC.foundset.setSelectedIndex(forms.dlg_ArticuloClientesPrecioGC.foundset.getSize());
			result = forms.dlg_ArticuloClientesPrecioGC.foundset.selectRecord(uid);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	    
		forms.dlg_ArticuloClientesPrecioGC.elements.BtnRefencia.visible = false;
		forms.dlg_ArticuloClientesPrecioGC.elements.idcliente.readOnly = true;
		forms.dlg_ArticuloClientesPrecioGC.elements.idcliente.bgcolor = '#F0F0F0'//'#f0f0f0';
		forms.dlg_ArticuloClientesPrecioGC.elements.idcliente.visible = false;
		forms.dlg_ArticuloClientesPrecioGC.elements.lbl_idcliente.visible = true;
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_ArticulosPrecioClientesGC.sub_deleteContacto()'
	
		//show the "fake" dialog
		globals.GCshowDialogArticuloPrecioClientes('Editar Precio Cliente', 1, null, null, true, 'Borrar Precio Cliente', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"2ADBFF14-51CD-4B9C-8CBD-1C1B6AABAA5C"}
 */
function sub_deleteContacto()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Precio Cliente')
	{
		if(rec) foundset.deleteRecord(rec)
		else foundset.deleteRecord()
	}
}

/**
 * @type {JSRecord}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"1F39231B-9DAA-4AD3-8291-84C55CC0CE07",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"3CCEB501-021E-4791-BF60-99848B2DCA69",variableType:8}
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
 *
  *
 * @properties={typeid:24,uuid:"D62D449F-5DCF-47FB-A1C4-EBF8C0FCAA70"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var column = elements.table_ArticuloPrecios.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if(column.id != "editar") {
		if(foundsetindex && columnindex && record) btn_showPedidoLinea();
	}
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
 *
 *
 * @properties={typeid:24,uuid:"086A39FF-2394-4AD3-BA14-925852D0CC2D"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
var column = elements.table_ArticuloPrecios.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if (column.id === "editar") {
		btn_showPedidoLinea()
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
 * @properties={typeid:24,uuid:"E076EC3E-E7FD-4F4A-8CAC-25C7C21542CF"}
 */
function onShow(firstShow, event) {
	rec,fsindex = null;
	elements.table_ArticuloPrecios.myFoundset.foundset.sort('idcliente asc')
}
