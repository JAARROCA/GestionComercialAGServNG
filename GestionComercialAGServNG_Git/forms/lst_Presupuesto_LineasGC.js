/**
 * @properties={typeid:24,uuid:"A4F196E4-B76A-47D9-AF15-1B649A64209F"}
 * @SuppressWarnings(deprecated)
 */
function btn_newLinea()
{
	var ro = forms.FrmPresupuestosGC.elements.fld_fecha_cof.readOnly;
	var franlin = forms.FrmPresupuestosGC.GCcofertas_to_lofertas.getSize()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera del Presupuesto antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else if(franlin >= 100)
	{
		globals.GCshowInfoDialog('No se pueden registrar más de 100 líneas por presupuesto.\n\nPóngase en contacto con AG Informática y Servicios',null,'Aceptar',null,null,null)
	}
	else
	{		
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savepresupuestos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Presupuestos.',null,'Aceptar',null,null,null)
		}
		else
		{
			if(forms.FrmPresupuestosGC.cod_cof)
			{
				query = 'select * from [cofertas] where cod_cof =' + forms.FrmPresupuestosGC.cod_cof
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var Presupuesto = dataset.getValue(1, 1)
				
				if(Presupuesto == null)
				{
					globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir líneas.',null,'Ok',null,null,null)
				}
				else
				{
					Presupuesto= forms.FrmPresupuestosGC.cod_cof
					var Cliente= forms.FrmPresupuestosGC.clie_cof
					var Fecha = forms.FrmPresupuestosGC.fecha_cof
					var IVA = forms.FrmPresupuestosGC.GCcliente_presupuesto.tipoiva
					/*if(forms.FrmPresupuestosGC.GCcliente_presupuesto)
					{
						var iva = forms.FrmPresupuestosGC.GCcliente_presupuesto.tipoiva
					}
					else iva = null;*/
					//if there's no transaction, start one - so they can "cancel"
					if(!globals.GCisEditing()) globals.GCstartEditing()
				
						//make a new record
						forms.dlg_Linea_PresupuestoGC.foundset.newRecord(true)
					
						forms.dlg_Linea_PresupuestoGC.nup_lof = Presupuesto
						forms.dlg_Linea_PresupuestoGC.validate_autoEnter()
						forms.dlg_Linea_PresupuestoGC.clie_lof = Cliente
						forms.dlg_Linea_PresupuestoGC.fecha_lof = Fecha
						if(IVA == null || IVA == '') IVA = 0.00; 
						//forms.dlg_Linea_PresupuestoGC.piva_lof = IVA
						forms.dlg_Linea_PresupuestoGC.unme_lof = 1;
						if(forms.dlg_Linea_PresupuestoGC.clie_lof && 
						forms.dlg_Linea_PresupuestoGC.GClofertas_to_tbmaestroclientes &&
						forms.dlg_Linea_PresupuestoGC.GClofertas_to_tbmaestroclientes.preciohora &&
						forms.dlg_Linea_PresupuestoGC.GClofertas_to_tbmaestroclientes.preciohora != 0)
						{
							forms.dlg_Linea_PresupuestoGC.prec_lof = forms.dlg_Linea_PresupuestoGC.GClofertas_to_tbmaestroclientes.preciohora;
							forms.dlg_Linea_FacturaGC.onDataChange()
						}
					
					
						//databaseManager.saveData();
					
						//show the "fake" dialog
						globals.GCshowDialogPresupuestoLinea('Nueva Línea', null, null, null, null, null, null, null, null, null);
					
						//go first field
						forms.dlg_Linea_PresupuestoGC.controller.focusFirstField()
					
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"315A4DA6-7BCA-4F66-960B-4D152E8628B1"}
 * @SuppressWarnings(deprecated)
 */
function btn_showPresupuestoLinea()
{
	var ro = forms.FrmPresupuestosGC.elements.fld_fecha_cof.readOnly;
	//select the right row
	var Presupuesto= forms.FrmPresupuestosGC.cod_cof	
	//if(forms.FrmPresupuestosGC.GCcliente_presupuesto) var iva = forms.FrmPresupuestosGC.GCcliente_presupuesto.tipoiva
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera del Presupuesto antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		forms.dlg_Linea_PresupuestoGC.foundset.loadAllRecords()
		var result = forms.dlg_Linea_PresupuestoGC.foundset.selectRecord(nli_lof, Presupuesto)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_PresupuestoGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_Linea_PresupuestoGC.foundset.getSize())
		{
			return;
		}
		forms.dlg_Linea_PresupuestoGC.foundset.setSelectedIndex(forms.dlg_Linea_PresupuestoGC.foundset.getSize());
		result = forms.dlg_Linea_PresupuestoGC.foundset.selectRecord(nli_lof, Presupuesto);
		}
		if(!forms.dlg_Linea_PresupuestoGC.foundset.clie_lof)
		{
			if(forms.FrmPresupuestosGC.clie_cof) forms.dlg_Linea_PresupuestoGC.foundset.clie_lof = forms.FrmPresupuestosGC.clie_cof;
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
		/*if(forms.dlg_Linea_PresupuestoGC.piva_lof == null || forms.dlg_Linea_PresupuestoGC.piva_lof == '')
		{
			if(iva) 
			{
				forms.dlg_Linea_PresupuestoGC.piva_lof = iva;
				databaseManager.saveData()
			}
		}*/
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_Presupuesto_LineasGC.sub_deletePresupuestoLinea()'
	
		//show the "fake" dialog
		globals.GCshowDialogPresupuestoLinea('Editar Línea', 1, null, null, true, 'Borrar Línea', null, null, null, null);
		
	}
}

/**
 * @properties={typeid:24,uuid:"83C523BE-37E8-40F3-9C71-C01B52DB6FB1"}
 */
function sub_deletePresupuestoLinea()
{
	var query = 'select savepresupuestos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Presupuestos.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCdialog_buttonPressed == 'Borrar Línea')
		{
			if(forms.FrmPresupuestosGC.situ_cof == 'F')
			{
				globals.GCshowErrorDialog('Presupuesto ya facturado. No se puede modificar.',null,'Aceptar',null,null,null)
			}
			else
			{
				forms.lst_Presupuesto_LineasGC.foundset.deleteRecord()
			}
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"3F53B2ED-76F7-4D3F-AC61-F5FEB882641A"}
 */
function btndeletePresupuestoLinea(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	
	var query = 'select savepresupuestos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar líneas de Presupuestos.',null,'Aceptar',null,null,null)
	}
	else
	{
		var situ = forms.FrmPresupuestosGC.situ_cof
		if(situ == 'F')
		{
			globals.GCdialog_buttonPressed = null
			var methd = null;
			globals.GCshowErrorDialog('Presupuesto ya facturado. No se puede borrar.',methd,'Aceptar',null,null,null)
		}
		else
		{
			methd = 'forms.lst_Presupuesto_LineasGC.BorraloLinea(event)'
			globals.GCshowQuestionDialog('Deseas realmente borrar esta línea?',methd,'No','Si',null,null)
		}
	}
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"7BB68DFA-5CB7-4244-89F1-A39C5511C303"}
 */
function BorraloLinea(event)
{
	var Presup = nup_lof;
	if(globals.core_dlg_buttonPressed == 'Si')
	{		
		foundset.deleteRecord()	
		
		var query = 'select sum(impor_lof) from lofertas where nup_lof='+ Presup
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var imporbr=dataset.getValue(1,1)
			
		if(imporbr==null) imporbr=0;
		
		forms.FrmPresupuestosGC.impbre_cof = imporbr
		forms.FrmPresupuestosGC.onFocusLostDtoPP(event)
		databaseManager.saveData();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"7F6363E0-7C49-49AA-848E-AB3269BD9C66"}
 */
function btnCopyPresupuestoLinea(event) {
	var ro = forms.FrmPresupuestosGC.elements.fld_fecha_cof.readOnly;
	var franlin = forms.FrmPresupuestosGC.GCcofertas_to_lofertas.getSize()
	// TODO Auto-generated method stub
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera del Presupuesto antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else if(franlin >= 100)
	{
		globals.GCshowInfoDialog('No se pueden registrar más de 100 líneas por presupuesto.\n\nPóngase en contacto con AG Informática y Servicios',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savepresupuestos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Presupuestos.',null,'Aceptar',null,null,null)
		}
		else
		{
			var situ = forms.FrmPresupuestosGC.situ_cof
			if(situ != null)
			{
				globals.GCdialog_buttonPressed = null
				var methd = null;
				globals.GCshowErrorDialog('Presupuesto ya gestionado. No se puede modificar.',methd,'Aceptar',null,null,null)
			}
			else
			{	
				//make a new record
				forms.dlg_Linea_PresupuestoGC.foundset.newRecord(true)
				forms.dlg_Linea_PresupuestoGC.nup_lof = nup_lof;
				forms.dlg_Linea_PresupuestoGC.validate_autoEnter()
				forms.dlg_Linea_PresupuestoGC.fecha_lof = fecha_lof;
				forms.dlg_Linea_PresupuestoGC.refm_lof = refm_lof;
				forms.dlg_Linea_PresupuestoGC.descrip = descrip;
				forms.dlg_Linea_PresupuestoGC.cant1_lof = cant1_lof;
				forms.dlg_Linea_PresupuestoGC.prec_lof = prec_lof;
				forms.dlg_Linea_PresupuestoGC.unme_lof = unme_lof;
				forms.dlg_Linea_PresupuestoGC.piva_lof = piva_lof;
				forms.dlg_Linea_PresupuestoGC.clie_lof = clie_lof;
				forms.dlg_Linea_PresupuestoGC.impor_lof = impor_lof;
				forms.dlg_Linea_PresupuestoGC.importot_lof = importot_lof;
				forms.dlg_Linea_PresupuestoGC.dto_lof = dto_lof;
				forms.dlg_Linea_PresupuestoGC.impdto_lof = impdto_lof;
				forms.dlg_Linea_PresupuestoGC.imag_lof = imag_lof;
				
				databaseManager.saveData()
				
				var n = forms.FrmPresupuestosGC.cod_cof;
				
				
				query = "select sum(impor_lof) from lofertas "+
				"where nup_lof = "+n;
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var imporbr=dataset.getValue(1,1)
				
				
				if(imporbr==null)
				{
					imporbr=0
				}
				forms.FrmPresupuestosGC.impbre_cof = imporbr;
				forms.FrmPresupuestosGC.impbie_cof = null
				forms.FrmPresupuestosGC.onFocusLostDtoPP(event)
				forms.FrmPresupuestosGC.onFocusLostIva(event)
				databaseManager.saveData();
			}
		}
	}
}
