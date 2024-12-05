/**
 * @properties={typeid:24,uuid:"9F074E82-9E47-45AF-BEB7-71FA3CB03CEE"}
 * @SuppressWarnings(deprecated)
 */
function btn_newLinea()
{
	var ro = forms.FrmAlbaranGC.elements.fld_fecha_cal.readOnly;
	var franlin = forms.FrmAlbaranGC.GCcalbaran_to_lalbaran.getSize()
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera del Albarán antes de agregar Líneas.','Aceptar');
		globals.GCshowInfoDialog('Grabe primero la cabecera del Albarán antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else if(franlin >= 100)
	{
		var msg = '<html>No se pueden registrar más de 100 líneas por albarán.<br><br>Póngase en contacto con AG Informática y Servicios</html>';
		scopes.svyCustomDialogs.showInfoDialog('Info',msg,'Aceptar');
		//globals.GCshowInfoDialog('No se pueden registrar más de 100 líneas por albarán.\n\nPóngase en contacto con AG Informática y Servicios',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savealbaran from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Líneas de Albaran.','Aceptar');
			//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Albaran.',null,'Aceptar',null,null,null)
		}
		else
		{
			if(forms.FrmAlbaranGC.cod_cal == null) 
			{
				var Albaran = null;
			}
			else
			{
				query = 'select * from [calbaran] where cod_cal =' + forms.FrmAlbaranGC.cod_cal
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				Albaran = dataset.getValue(1, 1)
			}
			if(Albaran == null)
			{
				scopes.svyCustomDialogs.showErrorDialog('Error','Cabecera Inexistente! Cree una y grabela antes de añadir líneas.','Aceptar');
				//globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir líneas.',null,'Ok',null,null,null)
			}
			else
			{
				Albaran= forms.FrmAlbaranGC.cod_cal
				var Cliente= forms.FrmAlbaranGC.clie_cal
				var Fecha = forms.FrmAlbaranGC.fecha_cal
				var iva = forms.FrmAlbaranGC.GCcalbaran_to_tbmaestroclientes.tipoiva
				if(iva == null || iva == '') iva = 0.00; 
				
				//if there's no transaction, start one - so they can "cancel"
				if(!globals.GCisEditing()) globals.GCstartEditing()
			
				forms.dlg_Linea_AlbaranGC.elements.BtnImagRefencia.enabled = false;
				forms.dlg_Linea_AlbaranGC.elements.BtnImagRefencia.visible = false;
				//make a new record
				forms.dlg_Linea_AlbaranGC.foundset.newRecord(true)
			
				forms.dlg_Linea_AlbaranGC.nup_lal = Albaran
				forms.dlg_Linea_AlbaranGC.validate_autoEnter()
				forms.dlg_Linea_AlbaranGC.clie_lal = Cliente
				forms.dlg_Linea_AlbaranGC.fecha_lal = Fecha
				forms.dlg_Linea_AlbaranGC.unme_lal = 1;
				forms.dlg_Linea_AlbaranGC.piva_lal = iva
				if(forms.dlg_Linea_AlbaranGC.clie_lal && 
				forms.dlg_Linea_AlbaranGC.GClalbaran_to_tbmaestroclientes &&
				forms.dlg_Linea_AlbaranGC.GClalbaran_to_tbmaestroclientes.preciohora &&
				forms.dlg_Linea_AlbaranGC.GClalbaran_to_tbmaestroclientes.preciohora != 0)
				{
					forms.dlg_Linea_AlbaranGC.prec_lal = forms.dlg_Linea_AlbaranGC.GClalbaran_to_tbmaestroclientes.preciohora;
					forms.dlg_Linea_AlbaranGC.onDataChange()
				}
				
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogAlbaranLinea('Nueva Linea', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_Linea_AlbaranGC.controller.focusFirstField()
				
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"2F782A5D-D3E5-4DFC-A538-4EE9219E7484"}
 * @SuppressWarnings(deprecated)
 */
function btn_showAlbaranLinea()
{
	var ro = forms.FrmAlbaranGC.elements.fld_fecha_cal.readOnly;
	//select the right row
	var Albaran= forms.FrmAlbaranGC.cod_cal;
	var iva = forms.FrmAlbaranGC.GCcalbaran_to_tbmaestroclientes.tipoiva;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera del Albarán antes de editar Líneas.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero la cabecera del Albarán antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		forms.dlg_Linea_AlbaranGC.foundset.loadAllRecords()
		var result = forms.dlg_Linea_AlbaranGC.foundset.selectRecord(nli_lal, Albaran)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_AlbaranGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_Linea_AlbaranGC.foundset.getSize()) return;
			forms.dlg_Linea_AlbaranGC.foundset.setSelectedIndex(forms.dlg_Linea_AlbaranGC.foundset.getSize());
			result = forms.dlg_Linea_AlbaranGC.foundset.selectRecord(nli_lal, Albaran);
		}
		if(forms.dlg_Linea_AlbaranGC.piva_lal == null || forms.dlg_Linea_AlbaranGC.piva_lal == '')
		{
			if(iva) 
			{
				forms.dlg_Linea_AlbaranGC.piva_lal = iva;
				databaseManager.saveData()
			}
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	
		if(forms.dlg_Linea_AlbaranGC.foundset.GClalbaran_to_tbmaestroarticulos)
		{
			if(forms.dlg_Linea_AlbaranGC.foundset.GClalbaran_to_tbmaestroarticulos.imag_a != null && 
			forms.dlg_Linea_AlbaranGC.foundset.GClalbaran_to_tbmaestroarticulos.imag_a != '')
			{
				forms.dlg_Linea_AlbaranGC.elements.BtnImagRefencia.enabled = true;
				forms.dlg_Linea_AlbaranGC.elements.BtnImagRefencia.visible = true;
			}
			else
			{
				forms.dlg_Linea_AlbaranGC.elements.BtnImagRefencia.enabled = false;
				forms.dlg_Linea_AlbaranGC.elements.BtnImagRefencia.visible = false;
			}
		}
		else
		{
			forms.dlg_Linea_AlbaranGC.elements.BtnImagRefencia.enabled = false;
			forms.dlg_Linea_AlbaranGC.elements.BtnImagRefencia.visible = false;
		}
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_Albaran_LineasGC.sub_deleteAlbaranLinea()'
		
		//show the "fake" dialog
		globals.GCshowDialogAlbaranLinea('Editar Línea', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"74B9BE61-FE1D-4343-938C-E87A77D97B33"}
 */
function sub_deleteAlbaranLinea()
{
	var query = 'select savealbaran from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para borrar Líneas de Albaran.','Aceptar');
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Albaran.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCdialog_buttonPressed == 'Borrar Línea')
		{
			//check to make sure that the address in question isn't used on any orders
			if(situ_lal == 'A')
			{
				globals.GCdialog_buttonPressed = null
				//var methd = null;
				scopes.svyCustomDialogs.showErrorDialog('Error','Línea actualizada en logística. No se puede borrar sin antes cambiar la situacion.','Aceptar');
				//globals.GCshowErrorDialog('Línea actualizada en logística. No se puede borrar sin antes cambiar la situacion.',methd,'Aceptar',null,null,null)
			}
			else if(sifa_lal != 0 && sifa_lal != null)
			{
				globals.GCdialog_buttonPressed = null
				//methd = null;
				scopes.svyCustomDialogs.showErrorDialog('Error','Albarán ya facturado, no se puede borrar sin borrar antes la factura.','Aceptar');
				//globals.GCshowErrorDialog("Albarán ya facturado, no se puede borrar sin borrar antes la factura.", methd,'Aceptar', null, null, null);
			}
			else
			{
				if(rec) foundset.deleteRecord(rec);	
				else foundset.deleteRecord();
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
 * @properties={typeid:24,uuid:"6F67A5BD-B346-49BC-A5F7-6701663E8913"}
 */
function btndeleteAlbaranLinea(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	
	var query = 'select savealbaran from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para borrar Líneas de Albarán.','Aceptar');
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Albaran.',null,'Aceptar',null,null,null)
	}
	else
	{
		//var situ = forms.FrmAlbaranGC.situ_cal
		if(situ_lal == 'A')
		{
			globals.GCdialog_buttonPressed = null
			scopes.svyCustomDialogs.showErrorDialog('Error','Línea actualizada en logística. No se puede borrar sin antes cambiar la situacion. Posteriormente habrá que realizar una regularización manual del Stock.','Aceptar');
			//var methd = null;
			//globals.GCshowErrorDialog('Línea actualizada en logística. No se puede borrar sin antes cambiar la situacion. Posteriormente habrá que realizar una regularización manual del Stock.',methd,'Aceptar',null,null,null)
		}
		else if(sifa_lal != 0 && sifa_lal != null)
		{
			globals.GCdialog_buttonPressed = null
			scopes.svyCustomDialogs.showErrorDialog('Error','Albarán ya facturado, no se puede borrar sin borrar antes la factura.','Aceptar');
			//methd = null;
			//globals.GCshowErrorDialog("Albarán ya facturado, no se puede borrar sin borrar antes la factura.", methd,'Aceptar', null, null, null);
		}
		else
		{
			var resp = scopes.svyCustomDialogs.showQuestionDialog('Borrar línea','¿Deseas realmente borrar esta línea?','No','Si');
			if(resp == 'Si') {
				globals.core_dlg_buttonPressed = 'Si';
				BorraloLinea(event)
			}
			//methd = 'forms.lst_Albaran_LineasGC.BorraloLinea(event)'
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
 *
 * @properties={typeid:24,uuid:"C5340A5D-172F-4640-900E-509F472B1F50"}
 */
function BorraloLinea(event)
{
	var Albaran = nup_lal;
	
		if(globals.core_dlg_buttonPressed == 'Si')
		{		
			if(rec) foundset.deleteRecord(rec);	
			else foundset.deleteRecord();	
			
			var query = 'select sum(impor_lal) from lalbaran where nup_lal='+ Albaran
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var imporbr=dataset.getValue(1,1)
				
			if(imporbr==null) imporbr=0;
			
			
			forms.FrmAlbaranGC.impbre_cal = imporbr
			forms.FrmAlbaranGC.onFocusLostDtoPP(event)
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
 * @properties={typeid:24,uuid:"943D7A25-FCE2-426B-AF3C-81D260155735"}
 */
function btnCopyAlbaranLinea(event) {
	var ro = forms.FrmAlbaranGC.elements.fld_fecha_cal.readOnly;
	var franlin = forms.FrmAlbaranGC.GCcalbaran_to_lalbaran.getSize()
	// TODO Auto-generated method stub
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera de la Factura antes de duplicar Línea.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero la cabecera del Albarán antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else if(franlin >= 100)
	{
		var msg = '<html>No se pueden registrar más de 100 líneas por albarán.<br><br>Póngase en contacto con AG Informática y Servicios</html>'
		scopes.svyCustomDialogs.showInfoDialog('Info',msg,'Aceptar');
		//globals.GCshowInfoDialog('No se pueden registrar más de 100 líneas por albarán.\n\nPóngase en contacto con AG Informática y Servicios',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savealbaran from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Líneas de Albarán.','Aceptar');
			//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Albarán.',null,'Aceptar',null,null,null)
		}
		else
		{	
			if(sifa_lal != 0 && sifa_lal != null)
			{
				globals.GCdialog_buttonPressed = null
				scopes.svyCustomDialogs.showErrorDialog('Error','Albarán ya facturado. No se puede modificar.','Aceptar');
				//var methd = null;
				//globals.GCshowErrorDialog('Albarán ya facturado. No se puede modificar.',methd,'Aceptar',null,null,null)
			}
			else
			{	
				//make a new record
				forms.dlg_Linea_AlbaranGC.foundset.newRecord(true)
				forms.dlg_Linea_AlbaranGC.nup_lal = nup_lal;
				forms.dlg_Linea_AlbaranGC.validate_autoEnter()
				forms.dlg_Linea_AlbaranGC.refm_lal = refm_lal;
				forms.dlg_Linea_AlbaranGC.desc_lal = desc_lal;
				forms.dlg_Linea_AlbaranGC.cant1_lal = cant1_lal;
				forms.dlg_Linea_AlbaranGC.unme_lal = unme_lal;
				forms.dlg_Linea_AlbaranGC.clie_lal = clie_lal;
				forms.dlg_Linea_AlbaranGC.rcli_lal = rcli_lal;
				forms.dlg_Linea_AlbaranGC.prec_lal = prec_lal;
				forms.dlg_Linea_AlbaranGC.dto_lal = dto_lal;
				forms.dlg_Linea_AlbaranGC.piva_lal = piva_lal;
				forms.dlg_Linea_AlbaranGC.facprov_lal = facprov_lal;
				forms.dlg_Linea_AlbaranGC.impcomp_lal = impcomp_lal;
				forms.dlg_Linea_AlbaranGC.precuni_lal = precuni_lal;
				forms.dlg_Linea_AlbaranGC.impor_lal = impor_lal;
				forms.dlg_Linea_AlbaranGC.importot_lal = importot_lal;
				forms.dlg_Linea_AlbaranGC.fecha_lal = fecha_lal;
				forms.dlg_Linea_AlbaranGC.impdto_lal = impdto_lal;
				
				databaseManager.saveData(forms.dlg_Linea_AlbaranGC.foundset)
				
				query = 'select sum(impor_lal) from lalbaran where nup_lal='+ nup_lal
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var imporbr=dataset.getValue(1,1)
					
				if(!imporbr || imporbr==null) imporbr = 0;
				
				
				forms.FrmAlbaranGC.impbre_cal = imporbr
				forms.FrmAlbaranGC.onFocusLostDtoPP(event)
				databaseManager.saveData();		
				
				
			}
		}
	}
}

/**
 * @type {JSRecord}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"51CE0E1D-402D-4B91-8948-C47274A8C067",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"D6A9E493-49EF-4E9E-9089-B10BA52F82FE",variableType:8}
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
  *
 * @properties={typeid:24,uuid:"E9804311-B00F-466B-9D4E-84223BFA600C"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var column = elements.table_AlbaranLineas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if(column.id != "editar" && column.id != "borrar" && column.id != "duplicar") {
		if(foundsetindex && columnindex && record) btn_showAlbaranLinea();
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
 *
 * @properties={typeid:24,uuid:"6366015F-7201-4C4C-8F9C-E4842C987452"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
var column = elements.table_AlbaranLineas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if (column.id === "editar") {
		btn_showAlbaranLinea()
	}
	else if (column.id === "borrar") {
		btndeleteAlbaranLinea(event)
	}
	else if (column.id === "duplicar") {
		btnCopyAlbaranLinea(event)
	}
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
  *
 * @properties={typeid:24,uuid:"1A4EC0D6-7BCA-473A-95D8-9CD1BDDC4239"}
 */
function onShow(firstShow, event) {
	rec,fsindex = null;
	forms.lst_Albaran_LineasGC.elements.table_AlbaranLineas.myFoundset.foundset.sort('nli_lal asc')
}
