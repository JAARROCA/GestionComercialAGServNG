/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"3AEE1856-5498-4BA4-8B4F-A5F0E2E3572E"}
 */
function btn_3rdBtn(event)
{
	
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	var situ = forms.FrmNotasGC.situcobrado
	if(situ == 'C')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Nota ya cobrada. No se puede modificar.','¡Error!')
		else {
			var methd = 'forms.dialogNotaLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Nota ya cobrada. No se puede modificar.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		var eje = forms.dlg_Linea_NotaGC.eje_lfa;
		var nup = forms.dlg_Linea_NotaGC.nup_lfa;
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
		
		var query = "select sum(impor_lfa) from tbNotaLinea "+
		"where eje_lfa = "+ eje +" AND nup_lfa = "+nup;
		//var ds = controller.getDataSource().split('/');
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var imporbr=dataset.getValue(1,1)
		
		
		if(imporbr==null)
		{
			imporbr=0
		}
		
		forms.FrmNotasGC.impbre_cfa = imporbr
		forms.FrmNotasGC.impbie_cfa = null
		forms.FrmNotasGC.onFocusLostDtoPP(event)
		forms.FrmNotasGC.onFocusLostgtosfinan(event)
		forms.FrmNotasGC.onFocusLostIva(event)
		databaseManager.saveData();
		
		
		application.getWindow('Nota Linea').hide();
		globals.GCenableBgElements();
	}
}

/**
 * @properties={typeid:24,uuid:"A53C3151-B636-4FCA-92F3-28E48AED1504"}
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
	application.getWindow('Nota Linea').hide();
	globals.GCenableBgElements();
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 
 * @properties={typeid:24,uuid:"0AA57B25-141B-4C32-BE89-467BB6BC302F"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	var situ = forms.FrmNotasGC.situcobrado
	if(situ == 'C')
	{
		globals.GCdialog_buttonPressed = null
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Nota ya cobrada. No se puede modificar.','¡Error!')
		else {
			var methd = 'forms.dialogNotaLineaGC.onHide(event)' 
			globals.GCshowErrorDialog('Nota ya cobrada. No se puede modificar.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		var eje = forms.dlg_Linea_NotaGC.eje_lfa;
		var nup = forms.dlg_Linea_NotaGC.nup_lfa;
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) 
			{
				globals.GCsaveEdits()
			}
		}
		
		databaseManager.saveData();
		   var query = "select sum(impor_lfa) from tbNotaLinea "+
			"where eje_lfa = "+ eje +" AND nup_lfa = "+nup;
			//var ds = controller.getDataSource().split('/');
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var imporbr=dataset.getValue(1,1)
			
			
			if(imporbr==null)
			{
				imporbr=0
			}
			var result = forms.FrmNotasGC.foundset.selectRecord(forms.FrmNotasGC.id)
			var fsCount = databaseManager.getFoundSetCount(forms.FrmNotasGC.foundset);
			while(result==false)
			{
				if(fsCount == forms.FrmNotasGC.foundset.getSize())
			{
				return;
			}
			forms.FrmNotasGC.foundset.setSelectedIndex(forms.FrmNotasGC.foundset.getSize());
			result = forms.FrmNotasGC.foundset.selectRecord(forms.FrmNotasGC.id);
			}
			forms.FrmNotasGC.impbre_cfa = imporbr
			forms.FrmNotasGC.impbie_cfa = null
			forms.FrmNotasGC.onFocusLostDtoPP(event)
			forms.FrmNotasGC.onFocusLostgtosfinan(event)
			forms.FrmNotasGC.onFocusLostIva(event)
			databaseManager.saveData();
		
		application.getWindow('Nota Linea').hide();
		globals.GCenableBgElements();
	}

}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2CA0D27E-5DFF-4275-B525-00CE72F242A7"}
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
 * @properties={typeid:24,uuid:"E7F179D5-81D3-4578-B45B-E7DA1B011F0C"}
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
	application.getWindow('Nota Linea').hide();
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
 * @properties={typeid:24,uuid:"680856CB-FC54-4E6C-A915-BD5A5FE2BB88"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
