/**
 * @type {Array}
 *
 *
 * @properties={typeid:35,uuid:"56F71F8B-9321-42DE-A3D8-672EAF3A7015",variableType:-4}
 */
var editedRecs;

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"CB9D5588-93FF-4B18-A26B-11E4709A73E3"}
 */
function btn_3rdBtn(event)
{
	
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	var situ = forms.FrmFacturasGC.situconta
	var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para borrar Líneas de Factura.','¡Error!')
		else {
			var methd = 'forms.dialogFacturaLineaGC.btn_cancel()' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Factura.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		if(situ == 'C')
		{
			globals.GCdialog_buttonPressed = null
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Factura ya contabilizada. No se puede modificar.','¡Error!')
			else {
				methd = 'forms.dialogFacturaLineaGC.btn_cancel()' 
				globals.GCshowErrorDialog('Factura ya contabilizada. No se puede modificar.',methd,'Aceptar',null,null,null)
			}
		}
		else if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai && forms.FrmFacturasGC.mac && forms.FrmFacturasGC.fechaenviofichero)
		{
			globals.GCdialog_buttonPressed = null
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Esta factura está marcado como enviada a TicketBAI.\n No se puede modificar.','¡Error!')
			else {
				methd = 'forms.dialogFacturaLineaGC.btn_cancel()'
				globals.GCshowErrorDialog('Esta factura está marcado como enviada a TicketBAI.\n No se puede modificar.',methd,'Aceptar',null,null,null)
			}
		}		
		else
		{
			var eje = forms.dlg_Linea_FacturaGC.eje_lfa;
			var ser = forms.dlg_Linea_FacturaGC.ser_lfa;
			var nup = forms.dlg_Linea_FacturaGC.nup_lfa;
			var iva = forms.dlg_Linea_FacturaGC.piva_lfa;
			if(iva == null || iva == '') iva = 0;
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
			
			if(ser == null)
			{
				ser = 'IS NULL'
			}
			else
			{
				ser = "= '"+ser_lfa+"'"
			}
			query = "select sum(impor_lfa) from tbFacturaLinea "+
			"where eje_lfa = "+ eje +" AND ser_lfa "+ser+
			" AND nup_lfa = "+nup;
			//var ds = controller.getDataSource().split('/');
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var imporbr=dataset.getValue(1,1)
			
			
			if(imporbr==null)
			{
				imporbr=0
			}
			
			forms.FrmFacturasGC.impbre_cfa = imporbr
			forms.FrmFacturasGC.impbie_cfa = null
			forms.FrmFacturasGC.impbie2_cfa = null
			forms.FrmFacturasGC.impbie3_cfa = null
			forms.FrmFacturasGC.piva_cfa = null
			forms.FrmFacturasGC.piva2_cfa = null
			forms.FrmFacturasGC.piva3_cfa = null
			forms.FrmFacturasGC.cuotaiva_cfa = null
			forms.FrmFacturasGC.cuotaiva2_cfa = null
			forms.FrmFacturasGC.cuotaiva3_cfa = null
			forms.FrmFacturasGC.impre = null
			forms.FrmFacturasGC.impre2 = null
			forms.FrmFacturasGC.impre3 = null
			forms.FrmFacturasGC.onFocusLostDtoPP(event)
			forms.FrmFacturasGC.onFocusLostgtosfinan(event)
			forms.FrmFacturasGC.onFocusLostIva(event)
			forms.FrmFacturasGC.Generacion_Efecto_Factura()
			forms.FrmFacturasGC.Generacion_FacturaComision()
			databaseManager.saveData();
			
			
			application.getWindow('Factura Linea').hide();
			globals.GCenableBgElements();
		}
	}
}

/**
 * @properties={typeid:24,uuid:"58EAD538-6FC7-4E69-B6F4-C29D05B428F2"}
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
	application.getWindow('Factura Linea').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"8FCB76D3-69AE-47A2-BE5D-159EC4B443E8"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	var situ = forms.FrmFacturasGC.situconta
	var query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Este usuario no dispone de permiso para grabar Líneas de Factura.','¡Error!')
		else {
			var methd = 'forms.dialogFacturaLineaGC.btn_cancel()' 
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Factura.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		editedRecs = databaseManager.getEditedRecords(forms.dlg_Linea_FacturaGC.foundset)
		if(editedRecs.length > 0 && situ == 'C')
		{
			globals.GCdialog_buttonPressed = null
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Factura ya contabilizada. No se puede modificar.','¡Error!')
			else {
				methd = 'forms.dialogFacturaLineaGC.btn_cancel()' 
				globals.GCshowErrorDialog('Factura ya contabilizada. No se puede modificar.',methd,'Aceptar',null,null,null)
			}
		}
		else if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai && forms.FrmFacturasGC.mac && forms.FrmFacturasGC.fechaenviofichero && editedRecs.length > 0)
		{
			globals.GCdialog_buttonPressed = null
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Esta factura está marcado como enviada a TicketBAI.\n No se puede modificar.','¡Error!')
			else {
				methd = 'forms.dialogFacturaLineaGC.btn_cancel()'
				globals.GCshowErrorDialog('Esta factura está marcado como enviada a TicketBAI.\n No se puede modificar.',methd,'Aceptar',null,null,null)
			}
		}		
		else
		{
			var eje = forms.dlg_Linea_FacturaGC.eje_lfa;
			var ser = forms.dlg_Linea_FacturaGC.ser_lfa;
			var nup = forms.dlg_Linea_FacturaGC.nup_lfa;
			if(globals.GCokToCommit == 1)
			{
				if(globals.GCisEditing()) 
				{
					globals.GCsaveEdits()
				}
			}
			
			databaseManager.saveData();
			    if(ser == null || ser == 'Undefined')
				{
					ser = 'IS NULL'
				}
				else
				{
					ser = "= '"+ser_lfa+"'"
				}
				query = "select sum(impor_lfa) from tbFacturaLinea "+
				"where eje_lfa = "+ eje +" AND ser_lfa "+ser+" AND nup_lfa = "+nup;
				//var ds = controller.getDataSource().split('/');
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var imporbr=dataset.getValue(1,1)
				
				
				if(imporbr==null)
				{
					imporbr=0
				}
				var result = forms.FrmFacturasGC.foundset.selectRecord(forms.FrmFacturasGC.id)
				var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.FrmFacturasGC.foundset.getSize())
					{
						return;
					}
				forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
				result = forms.FrmFacturasGC.foundset.selectRecord(forms.FrmFacturasGC.id);
				}
				forms.FrmFacturasGC.impbre_cfa = imporbr
				forms.FrmFacturasGC.impbie_cfa = null
				forms.FrmFacturasGC.impbie2_cfa = null
				forms.FrmFacturasGC.impbie3_cfa = null
				forms.FrmFacturasGC.piva_cfa = null
				forms.FrmFacturasGC.piva2_cfa = null
				forms.FrmFacturasGC.piva3_cfa = null
				forms.FrmFacturasGC.cuotaiva_cfa = null
				forms.FrmFacturasGC.cuotaiva2_cfa = null
				forms.FrmFacturasGC.cuotaiva3_cfa = null
				forms.FrmFacturasGC.impre = null
				forms.FrmFacturasGC.impre2 = null
				forms.FrmFacturasGC.impre3 = null
				forms.FrmFacturasGC.onFocusLostDtoPP(event)
				forms.FrmFacturasGC.onFocusLostgtosfinan(event)
				forms.FrmFacturasGC.onFocusLostIva(event)
				forms.FrmFacturasGC.Generacion_Efecto_Factura()
				forms.FrmFacturasGC.Generacion_FacturaComision()
				databaseManager.saveData();
				
			application.getWindow('Factura Linea').hide();
			globals.GCenableBgElements();
		}
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D71E2C5-704C-47AC-969D-E93CCEC6B9D0"}
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
 * @properties={typeid:24,uuid:"FD863AE0-2F24-4DE2-9A2D-739208928ED3"}
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
	application.getWindow('Factura Linea').hide();
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
 * @properties={typeid:24,uuid:"0E969849-8199-41F5-AFED-6502CA616B64"}
 */
function onShow() {
	// TODO Auto-generated method stub
	plugins.window.createShortcut('alt U', globals.handle_shortCutGC);	
	plugins.window.createShortcut('alt L', globals.handle_shortCutGC);	
	globals.GCdialog_buttonPressed = null;
	
}
