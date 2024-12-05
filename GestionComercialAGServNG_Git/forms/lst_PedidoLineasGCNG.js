/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"EF70C063-0B71-49A5-8E76-451E2BFFE992"}
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
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera del Pedido antes de agregar Líneas.');
		//globals.GCshowInfoDialog('Grabe primero la cabecera del Pedido antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else if(franlin >= 100)
	{
		var msg = '<html>No se pueden registrar más de 100 líneas por pedido.<br><br>Póngase en contacto con AG Informática y Servicios</html>';
		scopes.svyCustomDialogs.showInfoDialog('Info',msg);
		//globals.GCshowInfoDialog('No se pueden registrar más de 100 líneas por pedido.\n\nPóngase en contacto con AG Informática y Servicios',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savepedidos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar líneas de Pedido.','Aceptar');
			//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar líneas de Pedido.',null,'Aceptar',null,null,null)
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
				scopes.svyCustomDialogs.showErrorDialog('Error','Cabecera Inexistente! Cree una y grabela antes de añadir líneas.','Aceptar');
				//globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir líneas.',null,'Ok',null,null,null)
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
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"DFF69490-D49F-4793-ABC1-9277C878E85E"}
 */
function btn_showPedidoLinea()
{
	var ro = forms.FrmPedidosGC.elements.fld_fecha_cot.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera del Pedido antes de editar Líneas.');
		//globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
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
		globals.GCdialog_performMethod = 'forms.lst_Pedido_LineasGCNG.sub_deletePedidoLinea()'
	
		//show the "fake" dialog
		globals.GCshowDialogPedidoLinea('Editar Línea', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	}
}

/**
 *
 * @properties={typeid:24,uuid:"A351D28F-69D9-4586-87F0-AF1F49F79B75"}
 */
function sub_deletePedidoLinea()
{
	var query = 'select savepedidos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para borrar Líneas de Pedido.','Aceptar');
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Pedido.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCdialog_buttonPressed == 'Borrar Línea')
		{
			if(rec) foundset.deleteRecord(rec);	
			else foundset.deleteRecord();			
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
 * @properties={typeid:24,uuid:"48B2C7E5-A80D-4905-8EDF-A8C9F8D2778B"}
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
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para borrar Líneas de Pedido.','Aceptar');
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Pedido.',null,'Aceptar',null,null,null)
	}
	else
	{
		var resp = scopes.svyCustomDialogs.showQuestionDialog('Borrar línea','¿Deseas realmente borrar esta línea?','No','Si');
		if(resp == 'Si') {
			globals.core_dlg_buttonPressed = 'Si';
			BorraloLinea(event)
		}
		//var methd = 'forms.lst_Pedido_LineasGCNG.BorraloLinea(event)'
		//globals.GCshowQuestionDialog('Deseas realmente borrar esta línea?',methd,'No','Si',null,null)	
	}
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"7EC7A933-35AA-44A9-8513-2CAC188922F1"}
 */
function BorraloLinea(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{	
		if(rec) foundset.deleteRecord(rec);
		else foundset.deleteRecord();
		
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
 * @properties={typeid:24,uuid:"D940CDA3-391C-4746-A499-7B0D201A0382"}
 */
function btnCopyPedidoLinea(event) {
	var ro = forms.FrmPedidosGC.elements.fld_fecha_cot.readOnly;
	var franlin = forms.FrmPedidosGC.GCcortraba_to_lortraba.getSize()
	// TODO Auto-generated method stub
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera del Pedido antes de duplicar Línea.');
		//globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de duplicar Línea.',null,'Aceptar',null,null,null)
	}
	else if(franlin >= 100)
	{
		var msg = '<html>No se pueden registrar más de 100 líneas por pedido.<br><br>Póngase en contacto con AG Informática y Servicios</html>'
		scopes.svyCustomDialogs.showInfoDialog('Info',msg,'Aceptar');
		//globals.GCshowInfoDialog('No se pueden registrar más de 100 líneas por pedido.\n\nPóngase en contacto con AG Informática y Servicios',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savepedidos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Líneas de Pedido.','Aceptar');
			//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Factura.',null,'Aceptar',null,null,null)
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
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"B5FEE63E-7632-4600-B513-009114D3098C"}
 */
function onRightClick(event) {
	// TODO Auto-generated method stub
	//forms.frm_nav_buttons_asientos.btn_information()
	var popUpObj = plugins.window.createPopupMenu();
		popUpObj.addMenuItem("Nueva línea", MenuOpcFacturaLineas, null);
		popUpObj.addMenuItem("Editar línea", MenuOpcFacturaLineas, null);
		popUpObj.addMenuItem("Borrar línea", MenuOpcFacturaLineas, null);
		popUpObj.addMenuItem("Duplicar línea", MenuOpcFacturaLineas, null);
		popUpObj.addMenuItem("Imprimir Factura", MenuOpcFacturaLineas, null);
		popUpObj.addSeparator();
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			popUpObj.show(event.getSource(),10,0);				
		}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 * @AllowToRunInFind
 *
 *
 * @properties={typeid:24,uuid:"977D1ED0-A005-44C1-A395-9E4DE4F14FB7"}
 */
function MenuOpcFacturaLineas(event) 
{
	switch (arguments[4]) {
		case 'Nueva línea': 
				btn_newLinea()
				break;
		case 'Editar línea': 
	 			btn_showPedidoLinea()
	 			break;
	 	case 'Borrar línea': 
	 			btndeletePedidoLinea(event)
				break;
	 	case 'Duplicar línea': 
	 			btnCopyPedidoLinea(event)
				break;
	 	case 'Imprimir Factura': 
	 			forms.frm_nav_buttons_pedidosGC.btn_print()
				break;
	 	default: break;
	}
}

/**
 * @type {JSRecord}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"B689E771-F978-494A-8B37-95EDBC61796D",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"E6362526-9BB0-449E-A419-42327796746D",variableType:8}
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
 * @properties={typeid:24,uuid:"B17759CA-936B-4BF8-A7FB-56B023D2C710"}
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
 * @properties={typeid:24,uuid:"8030F20F-2708-4056-A105-9C2D26943A64"}
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
 *
 * @properties={typeid:24,uuid:"6DFFA6C8-1C0A-4C20-B7E3-13526580E2E6"}
 */
function onShow(firstShow, event) {
	rec,fsindex = null;
	forms.lst_PedidoLineasGCNG.elements.table_PedidoLineas.myFoundset.foundset.sort('nli_lot asc')
}
