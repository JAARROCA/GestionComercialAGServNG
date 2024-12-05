/**
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"BF2162DB-E98C-4E7E-B65A-B4EBE88E3C50"}
 */
function btn_3rdBtn(event)
{
	//set a global to the text of the button pressed
	var Pedido = forms.dlg_Linea_PedidoGC.nup_lot
	globals.GCdialog_buttonPressed = elements.btn_3.text
	
	var query = 'select savepedidos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para borrar Líneas de Pedido.','¡Error!')
		else {
			var methd = 'forms.dialogPedidoLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Pedido.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) databaseManager.saveData(foundset);
		}
		
		
		if(globals.GCdialog_performMethod)
		{
			//perform whatever method is in the global
			eval(globals.GCdialog_performMethod)
			globals.GCdialog_performMethod = null
		}
		query = 'select sum(impor_lot) from [lortraba] where nup_lot='+ Pedido
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var imporbr=dataset.getValue(1,1)
			
		if(imporbr==null)
		{
			imporbr=0
		}
		
		forms.lst_Importe_PedidoGC.impbre_cot = imporbr
		forms.lst_Importe_PedidoGC.onFocusLostDtoPP(event)
		databaseManager.saveData();
			
		
		application.getWindow('Pedido Linea').hide();
		globals.GCenableBgElements();
	}
}

/**
 * @properties={typeid:24,uuid:"1A462B2A-5B90-4FE8-99B6-C529B0D8CC29"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Pedido Linea').hide();	
	globals.GCenableBgElements();	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"C5A3183C-6589-4E1E-AF09-8E283F343CCC"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	var Pedido = forms.dlg_Linea_PedidoGC.nup_lot
	var query = 'select savepedidos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para grabar Líneas de Pedido.','¡Error!')
		else {
			var methd = 'forms.dialogPedidoLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Pedido.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) globals.GCsaveEdits();
		}
		
		databaseManager.saveData(foundset);
		
		
			
		query = 'select sum(impor_lot) from [lortraba] where nup_lot='+ Pedido
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var imporbr=dataset.getValue(1,1)
		
		
		if(imporbr==null)
		{
			imporbr=0
		}
		var result = forms.lst_Importe_PedidoGC.foundset.selectRecord(forms.FrmPedidosGC.id)
		var fsCount = databaseManager.getFoundSetCount(forms.lst_Importe_PedidoGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.lst_Importe_PedidoGC.foundset.getSize())
			{
				return;
			}
		forms.lst_Importe_PedidoGC.foundset.setSelectedIndex(forms.lst_Importe_PedidoGC.foundset.getSize());
		result = forms.lst_Importe_PedidoGC.foundset.selectRecord(forms.lst_Importe_PedidoGC.id);
		}
		forms.lst_Importe_PedidoGC.impbre_cot = imporbr
		forms.lst_Importe_PedidoGC.onFocusLostDtoPP(event)	
		databaseManager.saveData();
		
			
			
			//application.sleep(2000);
			application.getWindow('Pedido Linea').hide();
			globals.GCenableBgElements();
	}	
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A2CEE2AD-E3D4-4592-827A-42306FBC37C6"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
*
 *
 *
 * @properties={typeid:24,uuid:"6F8BAFD0-C327-49B7-B17B-D9760C1C3F37"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text && globals.GCdialog_buttonPressed != elements.btn_3.text)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Pedido Linea').hide();
	globals.GCenableBgElements();	
	return true
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"AF3F59C8-A77C-41DD-8698-97B6D5549942"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
