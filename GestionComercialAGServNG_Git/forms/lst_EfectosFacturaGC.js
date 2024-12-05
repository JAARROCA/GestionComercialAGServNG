/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"8D3DDD92-B85A-40C7-B565-B827320293AA"}
 */
function btn_newLinea()
{
	var ro = forms.FrmFacturasGC.elements.fld_fecha_cfa.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de agregar Efectos nuevos.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Efectos de Factura.',null,'Aceptar',null,null,null)
		}
		else
		{
			var situ = forms.FrmFacturasGC.situconta
			if(situ == 'C')
			{
				globals.GCdialog_buttonPressed = null
				var methd = null;
				globals.GCshowErrorDialog('Factura ya contabilizada. No se puede añadir más efectos.',methd,'Aceptar',null,null,null)
			}
			else
			{
				
				if(forms.FrmFacturasGC.eje_cfa && forms.FrmFacturasGC.nup_cfa)
				{
					if(forms.FrmFacturasGC.ser_cfa == null)
					{
						var ser = 'IS NULL'
					}
					else
					{
						ser = "= '"+forms.FrmFacturasGC.ser_cfa+"'"
					}	
					query = "select * from [tbFacturaCabecera] where eje_cfa="+forms.FrmFacturasGC.eje_cfa+
								" and ser_cfa "+ser+" and nup_cfa =" + forms.FrmFacturasGC.nup_cfa
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var Fra = dataset.getValue(1, 1)
					
					if(Fra == null)
					{
						globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir efectos.',null,'Ok',null,null,null)
					}
					else
					{
						/*var ejer = forms.FrmFacturasGC.eje_cfa
						ser =forms.FrmFacturasGC.ser_cfa
						Fra= forms.FrmFacturasGC.nup_cfa
						var Cliente= forms.FrmFacturasGC.clie_cfa
						var Fecha = forms.FrmFacturasGC.fecha_cfa
						var IVA = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.tipoiva
						*/
						
						//if there's no transaction, start one - so they can "cancel"
						if(!globals.GCisEditing()) globals.GCstartEditing()
					
						
						//databaseManager.saveData();
						
						//show the "fake" dialog
						globals.GCshowDialogEfectoFactura('Nuevo Efecto', null, null, null, null, null, null, null, null, null);
					
						//go first field
						forms.dlgEfectosGC.controller.focusFirstField()
						
					}
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"8924ADF6-1711-4A02-A2D8-6EF2D3590C18"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 */
function btn_showEfectoFactura()
{
	var ro = forms.FrmFacturasGC.elements.fld_fecha_cfa.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	//if(globals.GCisEditing()) forms[frm].btn_cancel()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de editar el Efecto.',null,'Aceptar',null,null,null)
	}
	else
	{
	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		/*forms.dlgEfectosGC.foundset.loadAllRecords()
		var result = forms.dlgEfectosGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlgEfectosGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlgEfectosGC.foundset.getSize())
		{
			return;
		}
		forms.dlgEfectosGC.foundset.setSelectedIndex(forms.dlgEfectosGC.foundset.getSize());
		result = forms.dlgEfectosGC.foundset.selectRecord(uid);
		}
		*/
		var bool = forms.dlgEfectosGC.foundset.loadRecords(databaseManager.convertToDataSet([uid]))
		if(bool == true)
		{
			//start a transaction
			if(!globals.GCisEditing()) globals.GCstartEditing()
		
			//setup the method to execute when the dialog closes
			globals.GCdialog_performMethod = 'forms.lst_EfectosFacturaGC.sub_deleteEfecto()'
			
			//show the "fake" dialog
			globals.GCshowDialogEfectoFactura('Editar Efecto', 1, null, null, true, 'Borrar Efecto', null, null, null, null);
		}
	}
}

/**
 * @properties={typeid:24,uuid:"5F9FF1CC-2B00-477E-B455-9ADC26116616"}
 */
function sub_deleteEfecto()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Efecto')
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

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89EB4084-5300-486A-87DD-BD21D59A5FF6"}
 */
function btn_duplicarefecto(event) {
	// TODO Auto-generated method stub
	
	 	var ro = forms.FrmFacturasGC.elements.fld_fecha_cfa.readOnly;
		//var frm = currentcontroller.getName()
		if(globals.GCisEditing() && ro == false)
		{
			//forms[frm].btn_cancel()
			globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de duplicar Efecto.',null,'Aceptar',null,null,null)
		}
		else
		{	
			if(globals.GCisEditing()) globals.GCcancelEditing()
			var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var save = dataset.getValue(1, 1)
			
			if(save != '1')
			{
				globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Efectos.',null,'Aceptar',null,null,null)
			}
			else
			{
				var situ = forms.FrmFacturasGC.situconta
				if(situ == 'C')
				{
					globals.GCdialog_buttonPressed = null
					var methd = null;
					globals.GCshowErrorDialog('Factura ya contabilizada. No se puede modificar.',methd,'Aceptar',null,null,null)
				}
				else
				{	
					
					//make a new record
					forms.dlgEfectosGC.foundset.newRecord(true)
					forms.dlgEfectosGC.id = application.getUUID();
					forms.dlgEfectosGC.eje_ef = eje_ef;
					forms.dlgEfectosGC.ser_ef = ser_ef;
					forms.dlgEfectosGC.nup_ef = nup_ef;
					forms.dlgEfectosGC.nli_ef = forms.FrmFacturasGC.sub_setNewNumeroLineaEfecto()
					forms.dlgEfectosGC.fecha_ef = fecha_ef;
					forms.dlgEfectosGC.cfpa_ef = cfpa_ef;
					forms.dlgEfectosGC.porc_ef = porc_ef;
					forms.dlgEfectosGC.impo_ef = impo_ef;
					
					
					databaseManager.saveData()
					
					
				}
			}
		}
	
}

/**
 * @type {JSRecord}
 *
 *
 *
 * @properties={typeid:35,uuid:"055AA72A-93D4-4556-A06B-2F4E6D6DE723",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"E9632B1D-EE5E-4D5B-B671-11FCDBFC71BF",variableType:8}
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
 * @properties={typeid:24,uuid:"C0A4DAD9-FB77-4976-9F47-2DDA343E806C"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var column = elements.table_EfectosFacturaLineas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if(column.id != "editar" && column.id != "borrar" && column.id != "duplicar") {
		if(foundsetindex && columnindex && record) btn_showEfectoFactura();
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
 * @properties={typeid:24,uuid:"0C6669EE-9769-4406-A2C6-4548CB2E5B9A"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
var column = elements.table_EfectosFacturaLineas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if (column.id === "editar") {
		btn_showEfectoFactura()
	}
	else if (column.id === "duplicar") {
		btn_duplicarefecto(event)
	}
}
