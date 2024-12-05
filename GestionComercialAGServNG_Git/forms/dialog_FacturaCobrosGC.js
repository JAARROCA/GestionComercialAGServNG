/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"174D93A8-9597-490D-A1D9-D10A600222F3"}
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
	
	application.getWindow('Factura Cobro').hide();
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"6003F8E2-025E-419A-BF5B-EF7A9C809108"}
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
	application.getWindow('Factura Cobro').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"6270D186-5A26-4817-97DB-EF27B9F41395"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	if(forms.FrmFacturasGC.ser_cfa == null)
	{
		var ser = 'IS NULL'
	}
	else
	{
		ser = "= '"+forms.FrmFacturasGC.ser_cfa+"'"
	}	
	var query = "select isnull(sum(impor_cob),0) from tbfacturacabeceracobros where eje_cob="+forms.FrmFacturasGC.eje_cfa+
						" and ser_cob "+ser+" and nup_cob =" + forms.FrmFacturasGC.nup_cfa+
						" and id != '"+forms.lst_Factura_CobrosGC.id+"'";	
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var sumtotal = dataset.getValue(1,1)
	var sum = forms.dlg_FacturaCobrosGC.impor_cob;
	var totfactura = forms.FrmFacturasGC.impnee_cfa;
	if(globals.GCROUND((sumtotal + sum),2) > totfactura)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('La suma de los cobros supera '+utils.numberFormat(forms.FrmFacturasGC.impnee_cfa,'###,##0.00')+'€ que es el neto de la Factura!','¡Error!')
		else globals.GCshowErrorDialog('La suma de los cobros supera '+utils.numberFormat(forms.FrmFacturasGC.impnee_cfa,'###,##0.00')+'€ que es el neto de la Factura!', null, null, null, null, null)
	}
	else
	{
		if(!forms.dlg_FacturaCobrosGC.fecha_cob)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Indique fecha de cobro.','¡Error!')
			else globals.GCshowErrorDialog('Indique fecha de cobro.',null,'Aceptar',null,null,null)
		}
		else if(!forms.dlg_FacturaCobrosGC.impor_cob)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Indique importe del cobro.','¡Error!')
			else globals.GCshowErrorDialog('Indique importe del cobro.',null,'Aceptar',null,null,null)
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
			
			forms.FrmFacturasGC.situcobrocolor()
			application.getWindow('Factura Cobro').hide();
			globals.GCenableBgElements();
		}
		
	}

}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"95D9E084-499A-4963-92BE-96C11CF1F0AD"}
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
 * @properties={typeid:24,uuid:"73116509-4A75-4C49-9D78-3D16DB49112F"}
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
	application.getWindow('Factura Cobro').hide();
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
 * @properties={typeid:24,uuid:"492AF082-C8B5-407C-A99F-F0E9DC6DB38B"}
 */
function onShow() {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	globals.GCdialog_buttonPressed = null;
}

/**
 * Callback method when form is destroyed.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"9044485D-0C6C-49B9-941A-0EF02ED8E920"}
 */
function situacionCarteraCobros() {
	
}
