/**
 * @properties={typeid:24,uuid:"39C3AF58-B24D-4D77-8DB0-B03480B5B6D7"}
 * @SuppressWarnings(deprecated)
 */
function btn_newLinea()
{
	var ro = forms.FrmPedidosComprasGC.elements.fld_fecha_cot.readOnly;
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera del Pedido antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{		
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Pedidos de Compras.',null,'Aceptar',null,null,null)
		}
		else
		{
			var Pedido = forms.FrmPedidosComprasGC.npedido;
			if(Pedido == null) Pedido = 0;
			query = 'select * from [tbPedidoCompraCabecera] where [NPedido] =' + Pedido
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			Pedido = dataset.getValue(1, 2)
			
			if(Pedido == null)
			{
				globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir líneas.',null,'Ok',null,null,null)
			}
			else
			{
				
				Pedido= forms.FrmPedidosComprasGC.npedido
				var Fecha = forms.FrmPedidosComprasGC.fecha		
				var Proveedor = forms.FrmPedidosComprasGC.proveedor
				
				//if there's no transaction, start one - so they can "cancel"
				if(!globals.GCisEditing()) globals.GCstartEditing()
				//make a new record
				forms.dlg_Linea_PedidoComprasGC.foundset.newRecord(true)
			
				forms.dlg_Linea_PedidoComprasGC.npedido = Pedido;
				forms.dlg_Linea_PedidoComprasGC.validate_autoEnter();
				forms.dlg_Linea_PedidoComprasGC.fecha = Fecha;
				forms.dlg_Linea_PedidoComprasGC.proveedor = Proveedor;
				
				
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogPedidoCompraLinea('Nueva Linea', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_Linea_PedidoComprasGC.elements.refpieza.requestFocus();
				
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"FE57A4B7-C80A-4D7D-A5C0-1D0A89FE201F"}
 * @SuppressWarnings(deprecated)
 */
function btn_showPedidoLinea()
{
	var ro = forms.FrmPedidosComprasGC.elements.fld_fecha_cot.readOnly;
	//select the right row
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera del Pedido antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		forms.dlg_Linea_PedidoComprasGC.foundset.loadAllRecords()
		var result = forms.dlg_Linea_PedidoComprasGC.foundset.selectRecord(npedido, npedidolinea)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_PedidoComprasGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_Linea_PedidoComprasGC.foundset.getSize())
			{
			return;
			}
		forms.dlg_Linea_PedidoComprasGC.foundset.setSelectedIndex(forms.dlg_Linea_PedidoComprasGC.foundset.getSize());
		result = forms.dlg_Linea_PedidoComprasGC.foundset.selectRecord(npedido, npedidolinea);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
		
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_PedidoCompras_LineasGC.sub_deletePedidoLinea()'
	
		//show the "fake" dialog
		globals.GCshowDialogPedidoCompraLinea('Editar Línea', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"EB8C6FB1-88F5-4DF4-B4F0-5701EC3BFE40"}
 */
function sub_deletePedidoLinea()
{
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Pedidos de Compras.',null,'Aceptar',null,null,null)
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
 * @properties={typeid:24,uuid:"FC9EF51E-1A8C-48A7-BD36-086A9DA07167"}
 */
function btndeletePedidoCompraLinea(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Peidos Compras.',null,'Aceptar',null,null,null)
	}
	else
	{
		/*var situ = forms.FrmPedidosComprasGC.situconta
		if(situ == 'C')
		{
			globals.GCdialog_buttonPressed = null
			var methd = null;
			globals.GCshowErrorDialog('Factura ya contabilizada. No se puede borrar.',methd,'Aceptar',null,null,null)
		}
		else
		{*/
			var methd = 'forms.lst_PedidoCompras_LineasGC.BorraloLinea(event)'
			globals.GCshowQuestionDialog('Deseas realmente borrar esta línea?',methd,'No','Si',null,null)
		//}
	}
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"8B307DD9-52B5-43B9-9E34-49B3BB62CB80"}
 */
function BorraloLinea(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{	
		foundset.deleteRecord()	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"A7E59D28-39E1-41B0-9E3D-49CC9CD16B11"}
 */
function btnCopyPedidoCompraLinea(event) {
	var ro = forms.FrmPedidosComprasGC.elements.fld_fecha_cot.readOnly;
	// TODO Auto-generated method stub
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera del Pedido de Compra antes de duplicar Línea.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Pedidos de Compra.',null,'Aceptar',null,null,null)
		}
		else
		{
			/*var situ = forms.FrmFacturasGC.situconta
			if(situ == 'C')
			{
				globals.GCdialog_buttonPressed = null
				var methd = null;
				globals.GCshowErrorDialog('Factura ya contabilizada. No se puede modificar.',methd,'Aceptar',null,null,null)
			}
			else
			{*/	
				//make a new record
				forms.dlg_Linea_PedidoComprasGC.foundset.newRecord(true)
				forms.dlg_Linea_PedidoComprasGC.npedido = npedido;
				forms.dlg_Linea_PedidoComprasGC.validate_autoEnter()
				forms.dlg_Linea_PedidoComprasGC.proveedor = proveedor;
				forms.dlg_Linea_PedidoComprasGC.fecha = fecha;
				forms.dlg_Linea_PedidoComprasGC.refpieza = refpieza;
				forms.dlg_Linea_PedidoComprasGC.descripcion = descripcion;
				forms.dlg_Linea_PedidoComprasGC.cantidad = cantidad;
				forms.dlg_Linea_PedidoComprasGC.unidsum = unidsum;
				forms.dlg_Linea_PedidoComprasGC.fechaentrega = fechaentrega;
				forms.dlg_Linea_PedidoComprasGC.precio = precio;
				forms.dlg_Linea_PedidoComprasGC.dto = dto;
				forms.dlg_Linea_PedidoComprasGC.situacion = null;
				
				databaseManager.saveData()
				
			//}
		}
	}
}
