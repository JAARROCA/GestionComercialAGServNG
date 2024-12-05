/**
 * 
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BE953059-CB81-4F37-87C9-B4FCD38F614A"}
 */
function btn_cancel(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		//if(globals.GCisEditing()) globals.GCcancelEditing()
		//application.exit()
		application.exit();
	}
	application.getWindow('Renovación').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"2D3D7A10-6BBB-49AD-B472-1AFC7FDD3207"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	if(globals.GCokToCommit == 1)
	{
		globals.GCClave = null
		globals.GCevento =  'Renovación'
		//globals.GCshowDialogClave('Clave', 1, null, null, true, 'Borrar Línea', null, null, null, null);			
		var win = application.getWindow('DialogClave')
		if(win != null) win.destroy();
		 
		win = application.createWindow("DialogClave", JSWindow.MODAL_DIALOG);
		//win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'Clave';
		//win.resizable = true;
		win.show(forms.dialog_ClaveGC)
		//var resp= plugins.dialogs.showInputDialog('Clave','Introduzca Clave'); 
		/*if(resp == 'agissa') 
		{
			forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)

			//start a transaction
			if(!globals.GCisEditing()) globals.GCstartEditing()

			//setup the method to execute when the dialog closes
			//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deleteAddressItem()'

			//show the "fake" dialog
			globals.showDialog2('Editar Parametros Aplicación', 1, null, null, true, 'Borrar Línea', null, null, null, null);
			
		}
		else
		{
			application.exit();
		}*/
	}	
	//application.getWindow('Dialog').hide();
	//globals.GCenableBgElements();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
 * @properties={typeid:24,uuid:"F9F1FFDA-D2B3-4321-B314-01E2734F54A5"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCClave != '280188')
	{
		application.exit()
	}
	return true
}
