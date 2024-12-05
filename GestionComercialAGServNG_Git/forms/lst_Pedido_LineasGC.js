/**
 * @properties={typeid:24,uuid:"CDA3E563-515D-4C39-B3BC-1DEBCF533561"}
 * @SuppressWarnings(deprecated)
 */
function btn_newLinea()
{
	var ro = forms.FrmPedidosGC.elements.fld_fecha_cot.readOnly;
	var franlin = forms.FrmPedidosGC.GCcortraba_to_lortraba.getSize()
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera del Pedido antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else if(franlin >= 100)
	{
		globals.GCshowInfoDialog('No se pueden registrar más de 100 líneas por pedido.\n\nPóngase en contacto con AG Informática y Servicios',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savepedidos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar líneas de Pedido.',null,'Aceptar',null,null,null)
		}
		else
		{
			if(forms.FrmPedidosGC.cod_cot)
			{
				query = 'select * from [cortraba] where cod_cot =' + forms.FrmPedidosGC.cod_cot
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var Pedido = dataset.getValue(1, 1)
			}
			else
			{
				Pedido = null;
			}
			if(Pedido == null)
			{
				globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir líneas.',null,'Ok',null,null,null)
			}
			else
			{
				Pedido= forms.FrmPedidosGC.cod_cot
				var Fecha = forms.FrmPedidosGC.fecha_cot
				var Cliente= forms.FrmPedidosGC.clie_cot
				
				
				//if there's no transaction, start one - so they can "cancel"
				if(!globals.GCisEditing()) globals.GCstartEditing()
			
				//make a new record
				forms.dlg_Linea_PedidoGC.foundset.newRecord(true)
			
				forms.dlg_Linea_PedidoGC.nup_lot = Pedido
				forms.dlg_Linea_PedidoGC.validate_autoEnter()
				forms.dlg_Linea_PedidoGC.clie_lot = Cliente
				forms.dlg_Linea_PedidoGC.fecha_lot = Fecha
			
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogPedidoLinea('Nueva Linea', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_Linea_PedidoGC.controller.focusFirstField()
				
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"AB231247-A1B3-4D20-B760-C7EB218DFDFC"}
 * @SuppressWarnings(deprecated)
 */
function btn_showPedidoLinea()
{
	var ro = forms.FrmPedidosGC.elements.fld_fecha_cot.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera del Pedido antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		//select the right row
		var Pedido= forms.FrmPedidosGC.cod_cot	
		forms.dlg_Linea_PedidoGC.foundset.loadAllRecords()
		var result = forms.dlg_Linea_PedidoGC.foundset.selectRecord(nli_lot, Pedido)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_PedidoGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_Linea_PedidoGC.foundset.getSize()) return;
			forms.dlg_Linea_PedidoGC.foundset.setSelectedIndex(forms.dlg_Linea_PedidoGC.foundset.getSize());
			result = forms.dlg_Linea_PedidoGC.foundset.selectRecord(nli_lot, Pedido);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_Pedido_LineasGC.sub_deletePresupuestoLinea()'
	
		//show the "fake" dialog
		globals.GCshowDialogPedidoLinea('Editar Línea', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"3990B90B-D222-4595-AE81-5958B6E986FC"}
 */
function sub_deletePresupuestoLinea()
{
	var query = 'select savepedidos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar líneas de Pedido.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCdialog_buttonPressed == 'Borrar Línea')
		{
			//check to make sure that the address in question isn't used on any orders
			/*var bAdrCnt = addresses_to_orders_billing.getSize()
			var sAdrCnt = addresses_to_orders_shipping.getSize()
	
			if(bAdrCnt == 0 && sAdrCnt == 0)
			{*/
				foundset.deleteRecord()
			/*}
			else
			{
				//there are orders that use this address
				var msg = 'There are orders that use this address as a shipping or billing address.' +
				' Change the orders to a new address, then you can delete this address.'
				globals.GCshowErrorDialog(msg,'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null)
			}*/
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"F3C31E8F-1B11-40B6-9A8C-017EC00CB04F"}
 */
function btndeletePedidoLinea(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	
	var query = 'select savepedidos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Pedidos.',null,'Aceptar',null,null,null)
	}
	else
	{
		var methd = 'forms.lst_Pedido_LineasGC.BorraloLinea(event)'
		globals.GCshowQuestionDialog('Deseas realmente borrar esta línea?',methd,'No','Si',null,null)		
	}
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"E42C9739-6661-4E02-ABB6-10A9C64528F4"}
 */
function BorraloLinea(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{	
		foundset.deleteRecord()	
		
		var query = 'select sum(impor_lot) from [lortraba] where nup_lot='+ nup_lot
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var imporbr=dataset.getValue(1,1)
			
		if(imporbr==null) imporbr=0;
		
		forms.lst_Importe_PedidoGC.impbre_cot = imporbr
		forms.lst_Importe_PedidoGC.onFocusLostDtoPP(event)
		databaseManager.saveData();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"BABE2A55-AC69-4CF4-977C-34FC64A5AD54"}
 */
function btnCopyPedidoLinea(event) {
	var ro = forms.FrmPedidosGC.elements.fld_fecha_cot.readOnly;
	var franlin = forms.FrmPedidosGC.GCcortraba_to_lortraba.getSize()
	// TODO Auto-generated method stub
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera del Pedido antes de duplicar Línea.',null,'Aceptar',null,null,null)
	}
	else if(franlin >= 100)
	{
		globals.GCshowInfoDialog('No se pueden registrar más de 100 líneas por pedido.\n\nPóngase en contacto con AG Informática y Servicios',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savepedidos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Pedido.',null,'Aceptar',null,null,null)
		}
		else
		{
				
				//make a new record
				forms.dlg_Linea_PedidoGC.foundset.newRecord(true)
				forms.dlg_Linea_PedidoGC.nup_lot = nup_lot;
				forms.dlg_Linea_PedidoGC.validate_autoEnter()
				forms.dlg_Linea_PedidoGC.fecha_lot = fecha_lot;
				forms.dlg_Linea_PedidoGC.refm_lot = refm_lot;
				forms.dlg_Linea_PedidoGC.detalle_lot = detalle_lot;
				forms.dlg_Linea_PedidoGC.cant1_lot = cant1_lot;
				forms.dlg_Linea_PedidoGC.prec_lot = prec_lot;
				forms.dlg_Linea_PedidoGC.unme_lot = unme_lot;
				forms.dlg_Linea_PedidoGC.piva_lot = piva_lot;
				forms.dlg_Linea_PedidoGC.clie_lot = clie_lot;
				forms.dlg_Linea_PedidoGC.precuni_lot = precuni_lot;
				forms.dlg_Linea_PedidoGC.impor_lot = impor_lot;
				forms.dlg_Linea_PedidoGC.importot_lot = importot_lot;
				forms.dlg_Linea_PedidoGC.nuplof_lot = nuplof_lot;
				forms.dlg_Linea_PedidoGC.dto_lot = dto_lot;
				//forms.dlg_Linea_PedidoGC.impdto_lot = impdto_lot;
				//forms.dlg_Linea_PedidoGC.medida_lot = medida_lot;
				
				databaseManager.saveData()
				
				var n = forms.FrmPedidosGC.cod_cot;
				query = "select sum(impor_lot) from lortraba where nup_lot = "+n;
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var imporbr=dataset.getValue(1,1)
				
				
				if(imporbr==null)
				{
					imporbr=0
				}
				forms.FrmPedidosGC.impbre_cot = imporbr;
				forms.FrmPedidosGC.piva_cot = null
				forms.FrmPedidosGC.onFocusLostDtoPP(event)
				forms.FrmPedidosGC.onFocusLostIva(event)
				databaseManager.saveData();
				
		}
	}
}

/**
 * @type {JSRecord}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"FF8F4A53-CABE-432B-981C-A887D55FBC52",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"67F830DE-846E-49C2-9896-F7604F839A66",variableType:8}
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
 * @properties={typeid:24,uuid:"9AD3B189-A3D7-4E6E-82C2-961A5C1809B3"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var column = elements.table_PedidoLineas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if(column.id != "editar" && column.id != "borrar" && column.id != "duplicar") {
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
 * @properties={typeid:24,uuid:"F3D2D025-DDCE-4698-8CD9-D1F66D2595DD"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
var column = elements.table_PedidoLineas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if (column.id === "editar") {
		btn_showPedidoLinea()
	}
	else if (column.id === "borrar") {
		btndeletePedidoLinea(event)
	}
	else if (column.id === "duplicar") {
		btnCopyPedidoLinea(event)
	}
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DD90CF0E-7FBF-44D8-AA3A-21F7273E3816"}
 */
function onShow(firstShow, event) {
	forms.lst_Pedido_LineasGC.elements.table_PedidoLineas.myFoundset.foundset.sort('nli_lot asc')
}
