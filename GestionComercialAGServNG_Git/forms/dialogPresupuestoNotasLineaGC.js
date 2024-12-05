/**
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"6BAB1571-F32A-4732-BCA0-0E235481703D"}
 */
function btn_3rdBtn(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_3.text
	/*var Presupuesto = forms.dlg_Linea_PresupuestoNotasGC.nup_lofnotas
	var situ = forms.FrmPresupuestosGC.situ_cof
	if(situ == 'F')
	{
		globals.GCdialog_buttonPressed = null
		var methd = 'forms.dialogPresupuestoLineaGC.onHide(event)' 
		globals.GCshowErrorDialog('Presupuesto ya facturado. No se puede modificar.',methd,'Aceptar',null,null,null)
	}
	else
	{*/
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) globals.GCsaveEdits();
		}
		
		
		if(globals.GCdialog_performMethod)
		{
			//perform whatever method is in the global
			eval(globals.GCdialog_performMethod)
			globals.GCdialog_performMethod = null
		}
		
		
		application.getWindow('Presupuesto Notas Linea').hide();
		globals.GCenableBgElements();
	//}
}

/**
 * @properties={typeid:24,uuid:"DF948484-812C-438B-9FEB-C47ECE16338B"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Presupuesto Notas Linea').hide();	
	globals.GCenableBgElements();	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"2F635C57-1E65-48D2-8C36-D59B988409CD"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	/*var Presupuesto = forms.dlg_Linea_PresupuestoNotasGC.nup_lofnotas
	var situ = forms.FrmPresupuestosGC.situ_cof
	if(situ == 'F')
	{
		globals.GCdialog_buttonPressed = null
		var methd = 'forms.dialogPresupuestoLineaGC.onHide(event)' 
		globals.GCshowErrorDialog('Prespuesto ya facturado. No se puede modificar.',methd,'Aceptar',null,null,null)
	}
	else
	{*/
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) globals.GCsaveEdits();
		}
		
		databaseManager.saveData(foundset);
		
		
			
		
		
			
			
			//application.sleep(2000);
			application.getWindow('Presupuesto Notas Linea').hide();
			globals.GCenableBgElements();
	//}		
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D61EC1E9-49A1-4B84-B69B-7CDDF7544AD1"}
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
 * @properties={typeid:24,uuid:"1CE57B8D-ABC8-457E-9B74-4E9B3731C953"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text && globals.GCdialog_buttonPressed != elements.btn_3.text)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Presupuesto Notas Linea').hide();
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
 * @properties={typeid:24,uuid:"8A1D5D89-B889-40DB-A27E-C0118245B42A"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
