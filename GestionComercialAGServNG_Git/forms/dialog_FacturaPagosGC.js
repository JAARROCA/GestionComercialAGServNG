/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"F02DBE7C-AD89-4A20-B982-4D6B8F33C482"}
 */
function btn_3rdBtn(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCsaveEdits();
		}
	}
	
	
	if(globals.GCdialog_performMethod)
	{
		//perform whatever method is in the global
		eval(globals.GCdialog_performMethod)
		globals.GCdialog_performMethod = null
	}
	
	application.getWindow('Factura Pagos').hide();
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"8D9C10B6-F865-4F53-B5D4-59A8617C610B"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing();
		}
	}
	application.getWindow('Factura Pagos').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"D04BF3E6-7E05-41C8-AE58-B872AED60ED8"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	var query = "select isnull(sum(impor_pag),0) from tbfacturacompracabecerapagos where pro_pag="+forms.FrmFacturasComprasGC.pro_cfca+
						" and nup_pag =" + forms.FrmFacturasComprasGC.nup_cfca+
						" and id != '"+forms.lst_FacturasCompras_PagosGC.id+"'";	
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var sumtotal = dataset.getValue(1,1)
	var sum = forms.dlg_FacturaPagosGC.impor_pag;
	var totfactura = forms.FrmFacturasComprasGC.impnee_cfca;
	if(globals.GCROUND((sumtotal + sum),2) > totfactura)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('La suma de los pagos supera '+utils.numberFormat(forms.FrmFacturasComprasGC.impnee_cfca,'###,##0.00')+'€ que es el neto de la Factura!','¡Error!')
		else globals.GCshowErrorDialog('La suma de los pagos supera '+utils.numberFormat(forms.FrmFacturasComprasGC.impnee_cfca,'###,##0.00')+'€ que es el neto de la Factura!', null, null, null, null, null)
	}
	else
	{
		if(!forms.dlg_FacturaPagosGC.fecha_pag)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Indique fecha de pago.','¡Error!')
			else globals.GCshowErrorDialog('Indique fecha de pago.',null,'Aceptar',null,null,null)
		}
		else if(!forms.dlg_FacturaPagosGC.impor_pag)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Indique importe del pago.','¡Error!')
			else globals.GCshowErrorDialog('Indique importe del pago.',null,'Aceptar',null,null,null)
		}
		else
		{			
			globals.GCdialog_buttonPressed = elements.btn_ok.text
			
			if(globals.GCokToCommit == 1)
			{
				if(globals.GCisEditing()) 
				{
					globals.GCsaveEdits()
				}
			}
			
			databaseManager.saveData();
			forms.FrmFacturasComprasGC.situcobrocolor()
			application.getWindow('Factura Pagos').hide();
			globals.GCenableBgElements();
		}
		
	}

}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9739FDDC-9F10-4E85-AB4B-DF40D2A2730C"}
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
 * @properties={typeid:24,uuid:"AC1DBCDC-E3E1-4EEB-AF86-0EB30A0327E9"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text && globals.GCdialog_buttonPressed != elements.btn_3.text)
	{
		if(globals.GCisEditing()) 
		{
			globals.GCcancelEditing();
		}
	}
	application.getWindow('Factura Pagos').hide();
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
 * @properties={typeid:24,uuid:"595EDA63-BB2C-4CCF-84F4-9704B8F74410"}
 */
function onShow() {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	globals.GCdialog_buttonPressed = null;
}
