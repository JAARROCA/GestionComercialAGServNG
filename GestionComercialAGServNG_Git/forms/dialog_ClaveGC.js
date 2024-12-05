/**
 * @properties={typeid:24,uuid:"D7B45998-0BE2-4635-851A-8B64DDC3AF99"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	//globals.GCClave = null;
	application.getWindow('DialogClave').hide();
	globals.GCenableBgElements();
	if(globals.GCevento == 'ClaveMod')
	{
		forms.dlg_ParametroAplicacionGC.elements.btn_DatosRegistrales.enabled = false;
		forms.dlg_ParametroAplicacionGC.elements.btn_CertifDigital.enabled = false;
		forms.dlg_ParametroAplicacionGC.elements.fld_ticketbaientorno.enabled = false;
	}
	forms.dlg_ParametroAplicacionGC.elements.btnModificar.enabled = true;
}

/**
 * @properties={typeid:24,uuid:"9A514677-EE63-4E19-9033-46FABE67E830"}
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	var resp = globals.GCClave;
	
	
	application.getWindow('DialogClave').hide();
	globals.GCenableBgElements();
	//var ds = forms.FrmLoginGC.controller.getDataSource().split('/');	
	if(resp === 'agissa' && globals.GCevento ==  'control A') 
	{
		var query = "select NºEmpresa from ParametrosAplicacion where NºEmpresa = 1";
		if(globals.GCconex == null) var con = 'conexiongestioncomercialag'
		else con = globals.GCconex
		var dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
		var emp = dataset.getValue(1,1);
		if(emp == null) 
		{
			forms.dlg_ParametroAplicacionGC.foundset.newRecord(true)
			
			forms.dlg_ParametroAplicacionGC.nºempresa = 1;
			forms.dlg_ParametroAplicacionGC.propiedad = 'AG Informática y Servicios S.A.'
			forms.dlg_ParametroAplicacionGC.facturapredet = 1;
			databaseManager.saveData()
		
		}
		forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)

		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()

		//setup the method to execute when the dialog closes
		//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deleteAddressItem()'

		//show the "fake" dialog
		
		globals.GCshowDialogParametrosAplicacion('Editar Parámetros Aplicación', 1, null, null, true, 'Borrar Línea', null, null, null, null);
		
	}
	else if(resp === '280188' && globals.GCevento == 'ClaveMod')
	{
		forms.dlg_ParametroAplicacionGC.doEdit()
		forms.dlg_ParametroAplicacionGC.elements.btnModificar.enabled = false;
		//forms.dlg_ParametroAplicacionGC.elements.fld_fechalimite.visible = true
		forms.dlg_ParametroAplicacionGC.elements.fld_empresa.requestFocus();
	}
	else if(resp != '280188' && globals.GCevento == 'ClaveMod')
	{
		forms.dlg_ParametroAplicacionGC.elements.btnModificar.enabled = true;
		forms.dlg_ParametroAplicacionGC.elements.btn_DatosRegistrales.enabled = false;
		forms.dlg_ParametroAplicacionGC.elements.btn_CertifDigital.enabled = false;
	}
	else if(resp === '280188'  && globals.GCevento ==  'control Z')
	{
		
			if(globals.GClogin_usuario != null && globals.GClogin_usuario != '')
			{
				if(globals.GCconex) var conex = globals.GCconex;
				else conex = 'conexiongestioncomercialag';
				
				query = "select ID from usuarios where cod_us =" + globals.GClogin_usuario;
				dataset = databaseManager.getDataSetByQuery(conex, query, null, 1)
				var uuid = dataset.getValue(1, 1)
				//var uuid = gcfechalimite_usuarios.id
				var result = forms.dlg_UsuariosGC.foundset.selectRecord(uuid)
					var fsCount = databaseManager.getFoundSetCount(forms.dlg_UsuariosGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.dlg_UsuariosGC.foundset.getSize())
						{
							forms.dlg_UsuariosGC.foundset.setSelectedIndex(1)
							break;
						}
					forms.dlg_UsuariosGC.foundset.setSelectedIndex(forms.dlg_UsuariosGC.foundset.getSize());
					result = forms.dlg_UsuariosGC.foundset.selectRecord(uuid);
					}
				
			}
			else
			{
				forms.dlg_UsuariosGC.foundset.setSelectedIndex(1)
			}


		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
		
			
	
			//setup the method to execute when the dialog closes
			//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deleteAddressItem()'
	
			//show the "fake" dialog
			
			globals.GCshowDialogUsuario('Usuarios de la Aplicación', 1, null, null, true, 'Borrar Línea', null, null, null, null);
			
		
	}
	else if(resp === '280188' && globals.GCevento ==  'Renovación') 
	{
		application.getWindow('Renovación').hide();
		//forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)

		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()

		//setup the method to execute when the dialog closes
		//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deleteAddressItem()'

		//show the "fake" dialog
		
		//globals.GCshowDialogParametrosAplicacion('Editar Parametros Aplicación', 1, null, null, true, 'Borrar Línea', null, null, null, null);
		globals.GCshowDialogUsuario('Usuarios de la Aplicación', 1, null, null, true, null, null, null, null, null);
	}
	else if(resp != '280188' && globals.GCevento ==  'Renovación') 
	{
		application.exit();
	}
	else if(resp === 'agissa' && (globals.GCevento ==  'Borrado de Presupuestos' ||
	globals.GCevento ==  'Borrado de Albaranes' || globals.GCevento ==  'Borrado de Facturas')) 
	{
		if(globals.GCevento == 'Borrado de Presupuestos') globals.GCTipoConsulta = 0;
		else if(globals.GCevento == 'Borrado de Albaranes') globals.GCTipoConsulta = 1;
		else if(globals.GCevento == 'Borrado de Facturas') globals.GCTipoConsulta = 2;
		globals.GCshowDialogBorradoDatos(globals.GCevento,1,null,null,null,null,null,null,null,null)
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 * 
 *
 *
 * @properties={typeid:24,uuid:"60160DAD-2643-44D4-A726-F6CFE206D56F"}
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
 * @properties={typeid:24,uuid:"0335187A-6A8F-48A9-ACAC-0EB47FF3610F"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ED771B9F-6E1C-41FE-8D1A-9D9D67B00487"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	forms.dlgClaveGC.elements.clave.requestFocus()
}
