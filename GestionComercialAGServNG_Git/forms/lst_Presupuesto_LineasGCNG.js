/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"A93E4F4B-C4C3-4462-AFF8-457174F446D3"}
 */
function btn_newLinea()
{
	var ro = forms.FrmPresupuestosGC.elements.fld_fecha_cof.readOnly;
	var franlin = forms.FrmPresupuestosGC.GCcofertas_to_lofertas.getSize()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera del Presupuesto antes de agregar Líneas.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero la cabecera del Presupuesto antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else if(franlin >= 100)
	{
		var msg = '<html>No se pueden registrar más de 100 líneas por presupuesto.<br><br>Póngase en contacto con AG Informática y Servicios</html>';
		scopes.svyCustomDialogs.showInfoDialog('Info',msg,'Aceptar');
		//globals.GCshowInfoDialog('No se pueden registrar más de 100 líneas por presupuesto.\n\nPóngase en contacto con AG Informática y Servicios',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savepresupuestos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Líneas de Presupuestos.','Aceptar');
			//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Presupuestos.',null,'Aceptar',null,null,null)
		}
		else
		{
			if(forms.FrmPresupuestosGC.cod_cof)
			{
				query = 'select * from [cofertas] where cod_cof =' + forms.FrmPresupuestosGC.cod_cof
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var Presupuesto = dataset.getValue(1, 1)
				
				if(!Presupuesto)
				{
					scopes.svyCustomDialogs.showErrorDialog('Error','Cabecera Inexistente! Cree una y grabela antes de añadir líneas.','Aceptar');
					//globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir líneas.',null,'Ok',null,null,null)
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
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"F0B7532D-78A4-42DD-9274-CF75C92521FB"}
 */
function btn_showPresupuestoLinea()
{
	var ro = forms.FrmPresupuestosGC.elements.fld_fecha_cof.readOnly;
	var Presupuesto= forms.FrmPresupuestosGC.cod_cof	
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera del Presupuesto antes de editar Líneas.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero la cabecera del Presupuesto antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		forms.dlg_Linea_PresupuestoGC.foundset.loadAllRecords()
		var result = forms.dlg_Linea_PresupuestoGC.foundset.selectRecord(nli_lof, Presupuesto)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_PresupuestoGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_Linea_PresupuestoGC.foundset.getSize()) return;
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
		globals.GCdialog_performMethod = 'forms.lst_Presupuesto_LineasGCNG.sub_deletePresupuestoLinea()'
	
		//show the "fake" dialog
		globals.GCshowDialogPresupuestoLinea('Editar Línea', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	}
}

/**
 *
 * @properties={typeid:24,uuid:"8C0F2185-9DF4-4DB0-9975-F8F11C10FF36"}
 */
function sub_deletePresupuestoLinea()
{
	var query = 'select savepresupuestos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para borrar Líneas de Presupuestos.','Aceptar');
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Presupuestos.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCdialog_buttonPressed == 'Borrar Línea')
		{
			if(forms.FrmPresupuestosGC.situ_cof == 'F')
			{
				scopes.svyCustomDialogs.showErrorDialog('Error','Presupuesto ya facturado. No se puede modificar.','Aceptar');
				//globals.GCshowErrorDialog('Presupuesto ya facturado. No se puede modificar.',null,'Aceptar',null,null,null)
			}
			else
			{
				if(rec) forms.lst_Presupuesto_LineasGCNG.foundset.deleteRecord(rec);
				else forms.lst_Presupuesto_LineasGCNG.foundset.deleteRecord();
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
 * @properties={typeid:24,uuid:"CD20F3E1-0867-4703-8CB5-9AB235022A81"}
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
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para borrar Líneas de Presupuestos.','Aceptar');
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Factura.',null,'Aceptar',null,null,null)
	}
	else
	{
		var situ = forms.FrmPresupuestosGC.situ_cof
		if(situ == 'F')
		{
			globals.GCdialog_buttonPressed = null
			scopes.svyCustomDialogs.showErrorDialog('Error','Presupuesto ya facturado. No se puede borrar.','Aceptar');
			//var methd = null;
			//globals.GCshowErrorDialog('Presupuesto ya facturado. No se puede borrar.',methd,'Aceptar',null,null,null)
		}
		else
		{
			var resp = scopes.svyCustomDialogs.showQuestionDialog('Borrar línea','¿Deseas realmente borrar esta línea?','No','Si');
			if(resp == 'Si') {
				globals.core_dlg_buttonPressed = 'Si';
				BorraloLinea(event)
			}
			//methd = 'forms.lst_Presupuesto_LineasGCNG.BorraloLinea(event)'
			//globals.GCshowQuestionDialog('Deseas realmente borrar esta línea?',methd,'No','Si',null,null)
		}
	}
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"3B131309-13F7-48DA-9C32-83038ACB3E5B"}
 */
function BorraloLinea(event)
{
	var Presup = nup_lof;
	if(globals.core_dlg_buttonPressed == 'Si')
	{	
		if(rec) foundset.deleteRecord(rec);	
		else foundset.deleteRecord();	
		
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
 * @properties={typeid:24,uuid:"6A489E19-94D8-4012-BE84-495950D53E43"}
 */
function btnCopyPresupuestoLinea(event) {
	var ro = forms.FrmPresupuestosGC.elements.fld_fecha_cof.readOnly;
	var franlin = forms.FrmPresupuestosGC.GCcofertas_to_lofertas.getSize()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera del Presupuesto antes de duplicar Línea.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero la cabecera del Presupuesto antes de duplicar Línea.',null,'Aceptar',null,null,null)
	}
	else if(franlin >= 100)
	{
		var msg = '<html>No se pueden registrar más de 100 líneas por presupuesto.<br><br>Póngase en contacto con AG Informática y Servicios</html>'
		scopes.svyCustomDialogs.showInfoDialog('Info',msg,'Aceptar');
		//globals.GCshowInfoDialog('No se pueden registrar más de 100 líneas por presupuesto.\n\nPóngase en contacto con AG Informática y Servicios',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savepresupuestos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Líneas de Presupuestos.','Aceptar');
			//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Presupuesto.',null,'Aceptar',null,null,null)
		}
		else
		{
				
				var situ = forms.FrmPresupuestosGC.situ_cof
				if(situ != null)
				{
					globals.GCdialog_buttonPressed = null
					scopes.svyCustomDialogs.showErrorDialog('Error','Presupuesto ya gestionado. No se puede modificar.','Aceptar');
					//var methd = null;
					//globals.GCshowErrorDialog('Presupuesto ya gestionado. No se puede modificar.',methd,'Aceptar',null,null,null)
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
					
					databaseManager.saveData(forms.dlg_Linea_PresupuestoGC.foundset)
					
					var n = forms.FrmPresupuestosGC.cod_cof;
					
					
					query = "select sum(impor_lof) from lofertas where nup_lof = "+n;
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var imporbr=dataset.getValue(1,1)					
					
					if(imporbr==null) imporbr=0;
					
					forms.FrmPresupuestosGC.impbre_cof = imporbr;
					forms.FrmPresupuestosGC.impbie_cof = null
					forms.FrmPresupuestosGC.onFocusLostDtoPP(event)
					forms.FrmPresupuestosGC.onFocusLostIva(event)
					databaseManager.saveData();
				}			
		}
	}
}

/**
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"321C5017-F614-4EF1-902C-BC9AE1B87BDF"}
 */
function onRightClick(event) {
	// TODO Auto-generated method stub
	//forms.frm_nav_buttons_asientos.btn_information()
	var popUpObj = plugins.window.createPopupMenu();
		popUpObj.addMenuItem("Nueva línea", MenuOpcFacturaLineas, null);
		popUpObj.addMenuItem("Editar línea", MenuOpcFacturaLineas, null);
		popUpObj.addMenuItem("Borrar línea", MenuOpcFacturaLineas, null);
		popUpObj.addMenuItem("Duplicar línea", MenuOpcFacturaLineas, null);
		popUpObj.addMenuItem("Imprimir Presupuesto", MenuOpcFacturaLineas, null);
		popUpObj.addSeparator();
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			popUpObj.show(event.getSource(),10,0);				
		}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 * @AllowToRunInFind
 *
 *
 * @properties={typeid:24,uuid:"79198E28-E0D9-4F9F-B1EE-417755FB7002"}
 */
function MenuOpcFacturaLineas(event) 
{
	switch (arguments[4]) {
		case 'Nueva línea': 
				btn_newLinea()
				break;
		case 'Editar línea': 
	 			btn_showPresupuestoLinea()
	 			break;
	 	case 'Borrar línea': 
	 			btndeletePresupuestoLinea(event)
				break;
	 	case 'Duplicar línea': 
	 			btnCopyPresupuestoLinea(event)
				break;
	 	case 'Imprimir Presupuesto': 
	 			forms.frm_nav_buttons_presupuestosGC.btn_print()
				break;
	 	default: break;
	}
}

/**
 * @type {JSRecord}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"EBAA9791-C24F-411F-B172-46FCD67BBBCF",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"F843F55F-32E6-4DAF-9572-8B05B7CF43B5",variableType:8}
 */
var fsindex;

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"6D7F87A3-4E0D-466D-8828-A835D5F19D53"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var column = elements.table_PresupuestoLineas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if(column.id != "editar" && column.id != "borrar" && column.id != "duplicar") {
		if(foundsetindex && columnindex && record) btn_showPresupuestoLinea();
	}
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"9FD54D22-9248-4E63-8499-DE39F85F15A8"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
var column = elements.table_PresupuestoLineas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if (column.id === "editar") {
		btn_showPresupuestoLinea()
	}
	else if (column.id === "borrar") {
		btndeletePresupuestoLinea(event)
	}
	else if (column.id === "duplicar") {
		btnCopyPresupuestoLinea(event)
	}
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6F0A043E-EA92-48D6-9B01-D49254242017"}
 */
function onShow(firstShow, event) {
	rec,fsindex = null;
	forms.lst_Presupuesto_LineasGCNG.elements.table_PresupuestoLineas.myFoundset.foundset.sort('nli_lof asc')
}
