/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"D328A540-C884-458B-9A72-CBEA4BBE74E9"}
 */
function btn_newLinea()
{
	var ro = forms.FrmFacturasGC.elements.fld_fecha_cfa.readOnly;
	
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera de la Factura antes de agregar Efectos nuevos.');
		//globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de agregar Efectos nuevos.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Efectos de Factura.','Aceptar');
			//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Efectos de Factura.',null,'Aceptar',null,null,null)
		}
		else
		{
			if( forms.FrmFacturasGC.gctbfacturacabecera_to_efectos &&
			 forms.FrmFacturasGC.gctbfacturacabecera_to_efectos.sumefectos) {
				 var sumefectosfra = forms.FrmFacturasGC.gctbfacturacabecera_to_efectos.sumefectos;
			}
			else sumefectosfra = 0;
			if( forms.FrmFacturasGC.id && forms.FrmFacturasGC.impnee_cfa) var impfra = forms.FrmFacturasGC.impnee_cfa;
			var situ = forms.FrmFacturasGC.situconta
			if(situ == 'C')
			{
				globals.GCdialog_buttonPressed = null
				scopes.svyCustomDialogs.showErrorDialog('Error','Factura ya contabilizada. No se puede añadir más efectos.','Aceptar');
				//var methd = null;
				//globals.GCshowErrorDialog('Factura ya contabilizada. No se puede añadir más efectos.',methd,'Aceptar',null,null,null)
			}
			/*else if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai && forms.FrmFacturasGC.mac && forms.FrmFacturasGC.fechaenviofichero)
			{
				globals.GCdialog_buttonPressed = null
				scopes.svyCustomDialogs.showErrorDialog('Error','Esta factura está marcado como enviada a TicketBAI.\n No se puede añadir más lineas.');
				//methd = null;
				//globals.GCshowErrorDialog('Esta factura está marcado como enviada a TicketBAI.\n No se puede añadir más lineas.',methd,'Aceptar',null,null,null)
			}*/		
			else if(sumefectosfra == impfra)
			{
				globals.GCdialog_buttonPressed = null
				var msg = '<html>La suma de los efectos registrados ya es igual al importe de la factura<br><br>No es posible registrar más efectos.</html>';
				scopes.svyCustomDialogs.showErrorDialog('Error',msg,'Aceptar');
				//var methd = null;
				//globals.GCshowErrorDialog('La suma de los efectos registrados ya es igual al importe de la factura\n\nNo es posible registrar más efectos.',methd,'Aceptar',null,null,null)
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
						scopes.svyCustomDialogs.showErrorDialog('Error','Cabecera Inexistente! Cree una y grabela antes de añadir efectos.','Aceptar');
						//globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir efectos.',null,'Ok',null,null,null)
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
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"13872B7F-D5DA-4E8C-B295-14794EC7B6A6"}
 */
function btn_showEfectoFactura()
{
	var ro = forms.FrmFacturasGC.elements.fld_fecha_cfa.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera de la Factura antes de editar el Efecto.');
		//globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de editar el Efecto.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		/*forms.dlg_Linea_FacturaGC.foundset.loadAllRecords()
		var result = forms.dlg_Linea_FacturaGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_FacturaGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_Linea_FacturaGC.foundset.getSize())return;
			forms.dlg_Linea_FacturaGC.foundset.setSelectedIndex(forms.dlg_Linea_FacturaGC.foundset.getSize());
			result = forms.dlg_Linea_FacturaGC.foundset.selectRecord(uid);
		}*/
		var bool = forms.dlgEfectosGC.foundset.loadRecords(databaseManager.convertToDataSet([uid]))
		if(bool == true)
		{
			//start a transaction
			if(!globals.GCisEditing()) globals.GCstartEditing()
		
			//setup the method to execute when the dialog closes
			globals.GCdialog_performMethod = 'forms.lst_EfectosFacturaGCNG.sub_deleteEfecto()'
			
			//show the "fake" dialog
			globals.GCshowDialogEfectoFactura('Editar Efecto', 1, null, null, true, 'Borrar Efecto', null, null, null, null);
		}
	}
}

/**
 *
 * @properties={typeid:24,uuid:"92AD4329-B7E6-4F77-B9DD-E1A49FE88386"}
 */
function sub_deleteEfecto()
{
	var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para borrar Efectos.','Aceptar');
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Efectos.',null,'Aceptar',null,null,null)
	}
	else
	{
		var situ = forms.FrmFacturasGC.situconta
		if(situ == 'C')
		{
			globals.GCdialog_buttonPressed = null
			scopes.svyCustomDialogs.showErrorDialog('Error','Factura ya contabilizada. No se puede borrar.','Aceptar');
			//var methd = null;
			//globals.GCshowErrorDialog('Factura ya contabilizada. No se puede borrar.',methd,'Aceptar',null,null,null)
		}
		/*else if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai && forms.FrmFacturasGC.mac && forms.FrmFacturasGC.fechaenviofichero)
		{
			globals.GCdialog_buttonPressed = null
			scopes.svyCustomDialogs.showErrorDialog('Error','Esta factura está marcado como enviada a TicketBAI.\n No se puede modificar.');
			//methd = null;
			//globals.GCshowErrorDialog('Esta factura está marcado como enviada a TicketBAI.\n No se puede modificar.',methd,'Aceptar',null,null,null)
		}*/		
		else
		{
			if(globals.GCdialog_buttonPressed == 'Borrar Efecto')
			{
				/*var e = forms.FrmFacturasGC.eje_cfa;
				var s = forms.FrmFacturasGC.ser_cfa;
				var n = forms.FrmFacturasGC.nup_cfa;
				if(s == null)
				{
					s = 'IS NULL'
				}
				else
				{
					s = "= '"+s+"'"
				}*/
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
					
					
					//databaseManager.refreshRecordFromDatabase(forms.lst_EfectosFacturaGCNG.foundset,-1)
		
			}
		}
	}
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"10891729-D68A-4D71-8C37-4942BB6396BE"}
 */
function btn_duplicarefecto(event) {
	// TODO Auto-generated method stub
	
	 	var ro = forms.FrmFacturasGC.elements.fld_fecha_cfa.readOnly;
		//var frm = currentcontroller.getName()
		if(globals.GCisEditing() && ro == false)
		{
			//forms[frm].btn_cancel()
			scopes.svyCustomDialogs.showErrorDialog('Error','Grabe primero la cabecera de la Factura antes de duplicar Efecto.','Aceptar');
			//globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de duplicar Efecto.',null,'Aceptar',null,null,null)
		}
		else
		{	
			if(globals.GCisEditing()) globals.GCcancelEditing()
			var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var save = dataset.getValue(1, 1)
			
			if(save != '1')
			{
				scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Efectos.','Aceptar');
				//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Efectos.',null,'Aceptar',null,null,null)
			}
			else
			{
				if( forms.FrmFacturasGC.gctbfacturacabecera_to_efectos &&
				 forms.FrmFacturasGC.gctbfacturacabecera_to_efectos.sumefectos) {
					 var sumefectosfra = forms.FrmFacturasGC.gctbfacturacabecera_to_efectos.sumefectos;
				}
				else sumefectosfra = 0;
				if( forms.FrmFacturasGC.id && forms.FrmFacturasGC.impnee_cfa) var impfra = forms.FrmFacturasGC.impnee_cfa;
				else impfra = 0;
				var situ = forms.FrmFacturasGC.situconta
				if(situ == 'C')
				{
					globals.GCdialog_buttonPressed = null
					scopes.svyCustomDialogs.showErrorDialog('Error','Factura ya contabilizada. No se puede modificar.','Aceptar');
					//var methd = null;
					//globals.GCshowErrorDialog('Factura ya contabilizada. No se puede modificar.',methd,'Aceptar',null,null,null)
				}
				else if(sumefectosfra == impfra)
				{
					globals.GCdialog_buttonPressed = null
					var msg = '<html>La suma de los efectos registrados ya es igual al importe de la factura<br><br>No es posible registrar más efectos.</html>';
					scopes.svyCustomDialogs.showErrorDialog('Error',msg,'Aceptar');
					//var methd = null;
					//globals.GCshowErrorDialog('La suma de los efectos registrados ya es igual al importe de la factura\n\nNo es posible registrar más efectos.',methd,'Aceptar',null,null,null)
				}
				else
				{	
					var importeefec = globals.GCROUND(impfra - sumefectosfra,2)
					if(importeefec > 0) {
						forms.FrmFacturasGC.gctbfacturacabecera_to_efectos.sumefectos;
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
						//forms.dlgEfectosGC.impo_ef = impo_ef;
						forms.dlgEfectosGC.impo_ef = importeefec;
						
						databaseManager.saveData(forms.dlgEfectosGC.foundset)
					}
					
				}
			}
		}
	
}

/**
 * @type {JSRecord}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"E3342512-FA44-4B38-9AE7-A347D503E30B",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"BE018763-E0DD-41CC-AF29-E75C8873A769",variableType:8}
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
 * @properties={typeid:24,uuid:"E3DC6B78-6D65-4B2E-9FBD-34A57F717C80"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var column = elements.table_FacturaEfectos.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if(column.id != "editar" /*&& column.id != "borrar"*/ && column.id != "duplicar") {
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
 * @properties={typeid:24,uuid:"D10C2B4E-7151-4A3D-8DF8-471994586C9E"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
var column = elements.table_FacturaEfectos.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if (column.id === "editar") {
		btn_showEfectoFactura();
	}
	/*else if (column.id === "borrar") {
		btndeleteFacturaLinea(event)
	}*/
	else if (column.id === "duplicar") {
		btn_duplicarefecto(event);
	}
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"23FBF8FA-EEF7-4F9F-96C5-B255587BB63C"}
 */
function onShow(firstShow, event) {
	forms.lst_EfectosFacturaGCNG.elements.table_FacturaEfectos.myFoundset.foundset.sort('nli_ef asc')
}
