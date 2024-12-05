/**
 *
 *
 *
 * @properties={typeid:24,uuid:"83A8BC19-B0E5-4304-B615-C2DB4C8FAB7E"}
 */
function btn_nuevaCita()
{
	
		
		//if there's no transaction, start one - so they can "cancel"
		if(!globals.GCisEditing()) globals.GCstartEditing()
	
		//make a new record
		forms.dlg_Linea_CalendarioUsuarioGC.foundset.newRecord(true)
	
		forms.dlg_Linea_CalendarioUsuarioGC.idusuario = globals.GClogin_usuario;
		forms.dlg_Linea_CalendarioUsuarioGC.start_datetime = new Date();
		forms.dlg_Linea_CalendarioUsuarioGC.end_datetime = new Date();
		forms.dlg_Linea_CalendarioUsuarioGC.categoria = 1;
	
		//databaseManager.saveData();
	
		//show the "fake" dialog
		globals.GCshowDialogDiaCalendario('Introducción de horas', null, null, null, null, null, null, null, null, null);
	
		//go first field
		forms.dlg_Linea_CalendarioUsuarioGC.elements.asunto.requestFocus();
		
	
}

/**
 * @properties={typeid:24,uuid:"BC309EBF-12CA-46E6-A8F6-19AE954FC87F"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 */
function btn_showFacturaLinea()
{
	//select the right row
	
	//foundset.loadAllRecords()
	var result = forms.dlg_Linea_CalendarioUsuarioGC.foundset.selectRecord(calendario_idx)
	var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_CalendarioUsuarioGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.dlg_Linea_CalendarioUsuarioGC.foundset.getSize())
	{
		return;
	}
	forms.dlg_Linea_CalendarioUsuarioGC.foundset.setSelectedIndex(forms.dlg_Linea_CalendarioUsuarioGC.foundset.getSize());
	result = forms.dlg_Linea_CalendarioUsuarioGC.foundset.selectRecord(calendario_idx);
	}
	//start a transaction
	if(!globals.GCisEditing()) globals.GCstartEditing()
	globals.GCClaveCalendario = calendario_idx;
	//setup the method to execute when the dialog closes
	globals.GCdialog_performMethod = 'forms.lst_AgendaUsuario_LineasGC.sub_deleteCita()'
	
	//show the "fake" dialog
	globals.GCshowDialogDiaCalendario('Modificacion de horas', 1, null, null, true, 'Borrar', null, null, null, null);
}

/**
 * @properties={typeid:24,uuid:"ED75569F-C7B5-4592-BDBA-A31BF6F08CA2"}
 */
function sub_deleteCita()
{
	if(globals.GCdialog_buttonPressed == 'Borrar')
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
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AF3FFB85-F114-4A74-9FA4-D086D1FB54BA"}
 * @SuppressWarnings(deprecated)
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	
	globals.GCdayStartDate = new Date(new Date().getFullYear(), new Date().getMonth(),
		new Date().getDate(), 00, 00, 00, 00);
	globals.GCdayEndDate = new Date(globals.GCdayStartDate.getFullYear(), globals.GCdayStartDate.getMonth(),
		globals.GCdayStartDate.getDate(), 23, 59, 59, 59);
	
	var query = "SELECT a.Calendario_idx,a.IdUsuario,a.Asunto,a.Ubicacion"+
	",a.Observaciones,a.Start_Datetime,a.End_Datetime"+
	",a.Categoria "+
	"FROM tbCalendarioUsuarioLinea as a "+
	"WHERE " +
	"(a.idusuario = ? AND (a.done IS NULL OR a.done != 1)) " +
	"AND " +
	"(a.start_datetime >= ? " +
	"AND " +
	"a.start_datetime < ? )" +
	" OR (a.start_datetime < ? AND a.end_datetime > ?  AND a.idusuario = ?) " +
	"ORDER BY " +
	"a.start_datetime ASC";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, 
		query, [globals.GClogin_usuario,globals.GCdayStartDate, globals.GCdayEndDate, globals.GCdayStartDate, globals.GCdayStartDate , 
		globals.GClogin_usuario], 10000);
	
	
	
	forms.lst_AgendaUsuario_LineasGC.foundset.loadRecords(dataset)
}
