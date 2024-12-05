/**
 * @properties={typeid:24,uuid:"869AFDF0-1E04-44FC-A0C9-6E26B90FB6D5"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	//if(globals.GCokToCommit == 1)
	//{
	//	if(globals.GCisEditing()) globals.GCcancelEditing()
	//}
	application.getWindow('Generacion Factura').hide();
	globals.GCenableBgElements();
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"77055CA0-56CF-4ABD-AB39-46496880A4BC"}
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	//if(globals.GCokToCommit == 1)
	//{
		//if(globals.GCisEditing()) globals.GCsaveEdits()
	//}
	
	//databaseManager.saveData();	
	var query = 'select * from [calbaran] where [cod_cal]='+cod_cal
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var eje = forms.dlg_Generacion_FacturaGC.Ejer
	var ser = ''
	var nup = forms.dlg_Generacion_FacturaGC.NF
	var cliente = dataset.getValue(1, 3)
	var nomcliente = dataset.getValue(1, 4)
	var cfpa = dataset.getValue(1, 15)
	//var rcli = dataset.getValue(1, 17)
	var repr = dataset.getValue(1, 21)
	if(repr == null)
	{
		repr = 0
	}
	var piva = dataset.getValue(1, 22)
	if(piva == null)
	{
		piva = 0
	}
	var pgfi = dataset.getValue(1, 23)
	if(pgfi == null)
	{
		pgfi = 0
	}
	var depp = dataset.getValue(1, 24)
	if(depp == null)
	{
		depp = 0
	}
	var impbre = dataset.getValue(1, 25)
	if(impbre == null)
	{
		impbre = 0
	}
	var impdee = dataset.getValue(1, 26)
	if(impdee == null)
	{
		impdee = 0
	}
	var impcre = dataset.getValue(1, 27)
	if(impcre == null)
	{
		impcre = 0
	}
	var impgfe = dataset.getValue(1, 28)
	if(impgfe == null)
	{
		impgfe = 0
	}
	var impbie = dataset.getValue(1, 29)
	if(impbie == null)
	{
		impbie = 0
	}
	var impcie = dataset.getValue(1, 30)
	if(impcie == null)
	{
		impcie = 0
	}
	var impnee = dataset.getValue(1, 31)
	if(impnee == null)
	{
		impnee = 0
	}
	var anticipo = dataset.getValue(1, 32)
	if(anticipo == null)
	{
		anticipo = 0
	}
	var refped = dataset.getValue(1, 34)
	var fecha=utils.dateFormat(new Date(),'dd-MM-yyyy');
	
	var pivanota = null
	
	if(piva != 0)
	{
		//cabecera
		forms.FrmFacturasGC.foundset.newRecord(true)	
		forms.FrmFacturasGC.eje_cfa = eje
		forms.FrmFacturasGC.ser_cfa = ser
		forms.FrmFacturasGC.nup_cfa = nup
		forms.FrmFacturasGC.fecha_cfa = utils.parseDate(fecha,'dd-MM-yyyy');
		forms.FrmFacturasGC.clie_cfa = cliente
		forms.FrmFacturasGC.cfpa_cfa = cfpa
		if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroformpago) forms.FrmFacturasGC.desccfpa_cfa = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroformpago.denom_fp	
		forms.FrmFacturasGC.repr_cfa = repr
		forms.FrmFacturasGC.piva_cfa = piva
		forms.FrmFacturasGC.pgfi_cfa = pgfi
		if(depp != 0) forms.FrmFacturasGC.depp_cfa = depp	
		forms.FrmFacturasGC.impbre_cfa = impbre
		forms.FrmFacturasGC.impbie_cfa = impbie
		forms.FrmFacturasGC.cuotaiva_cfa = impcie
		forms.FrmFacturasGC.impnee_cfa = impnee
		forms.FrmFacturasGC.tipofacturasii = 'F1';
		if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.pais &&
		forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.pais != 'ES')
		{
			forms.FrmFacturasGC.tipooperacionsii = 'E';
			forms.FrmFacturasGC.sujetaexentaivasii = 'E';
		}
		else if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal &&
		(utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '35' ||
		utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '38'||
		utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '51'||
		utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '52'))
		{
			forms.FrmFacturasGC.tipooperacionsii = 'E';
			forms.FrmFacturasGC.sujetaexentaivasii = 'NS';
		}
		else{
			forms.FrmFacturasGC.tipooperacionsii = 'E';
			forms.FrmFacturasGC.sujetaexentaivasii = 'NE';
		}
		var uuid = forms.FrmFacturasGC.id
		databaseManager.saveData()
		
		//actualizo el valor del ultimo albaran en los parametros
		forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords();
		var result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize())
			{
				return;
			}
		forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
		result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
		}
		
		forms.dlg_ParametroAplicacionGC.foundset.numfactura = nup
		
		databaseManager.saveData()
		
		
		
		
		query = 'select * from [lalbaran] where [nup_lal]='+cod_cal
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
		var rows = dataset.getMaxRowIndex()
		
		
		for(var i=1; i <= rows;i++)
		{
			var linea = dataset.getValue(i, 2)
			var refm = dataset.getValue(i, 3)
			var desc = dataset.getValue(i, 4)
			var cant = dataset.getValue(i, 5)
			if(cant == null)
			{
				cant = 0
			}
			var unme = dataset.getValue(i, 6)
			var clie = dataset.getValue(i, 7)
			//rcli = dataset.getValue(i, 8)
			var prec = dataset.getValue(i, 9)
			if(prec == null)
			{
				prec = 0
			}
			var dto = dataset.getValue(i, 11)
			piva = dataset.getValue(i, 12)
			if(piva == null)
			{
				piva = 0
			}		
			var precuni = dataset.getValue(i, 18)
			if(precuni == null)
			{
				precuni = 0
			}
			var impor = dataset.getValue(i, 19)
			if(impor == null)
			{
				impor = 0
			}
			var importot = dataset.getValue(i, 20)
			if(importot == null)
			{
				importot = 0
			}
			//var impdto = dataset.getValue(i, 22)
			
			
			//lineas
			forms.dlg_Linea_FacturaGC.foundset.newRecord(true)	
			forms.dlg_Linea_FacturaGC.eje_lfa = eje;
			forms.dlg_Linea_FacturaGC.ser_lfa = '';
			forms.dlg_Linea_FacturaGC.nup_lfa = nup;
			forms.dlg_Linea_FacturaGC.nli_lfa = linea;
			forms.dlg_Linea_FacturaGC.fecha_lfa = utils.parseDate(fecha,'dd-MM-yyyy');
			forms.dlg_Linea_FacturaGC.nalb_lfa = cod_cal;
			forms.dlg_Linea_FacturaGC.lalb_lfa = linea;
			forms.dlg_Linea_FacturaGC.ref_lfa = refm;
			forms.dlg_Linea_FacturaGC.concep_lfa = desc;
			forms.dlg_Linea_FacturaGC.cant1_lfa = cant;
			forms.dlg_Linea_FacturaGC.prec_lfa = prec;
			forms.dlg_Linea_FacturaGC.unme_lfa = unme;
			forms.dlg_Linea_FacturaGC.piva_lfa = piva;
			forms.dlg_Linea_FacturaGC.clie_lfa = clie;
			forms.dlg_Linea_FacturaGC.dto_lfa = dto;
			forms.dlg_Linea_FacturaGC.precuni_lfa = precuni;
			forms.dlg_Linea_FacturaGC.onDataChange()
			
			databaseManager.saveData()
			
			/*var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturalinea')  
			var record = vSet.getRecord(vSet.newRecord());
			record.eje_lfa = eje;
			record.ser_lfa = '';
			record.nup_lfa = nup;
			record.nli_lfa = linea;
			record.fecha_lfa = utils.parseDate(fecha,'dd-MM-yyyy');
			record.nalb_lfa = cod_cal;
			record.lalb_lfa = linea;
			record.ref_lfa = refm;
			record.concep_lfa = desc;
			record.cant1_lfa = cant;
			record.prec_lfa = prec;
			record.unme_lfa = unme;
			record.piva_lfa = piva;
			record.clie_lfa = clie;
			record.rcli_lal = rcli;
			record.dto_lfa = dto;
			record.precuni_lfa = precuni;
			record.onDataChange()
			record.impor_lfa = impor;
			record.importot_lfa = importot;
			record.impdto_lfa = impdto;
			
			databaseManager.saveData(record)*/				
		}
	}
	else
	{
		pivanota = 0
		//cabecera
		forms.FrmNotasGC.foundset.newRecord(true)	
		forms.FrmNotasGC.eje_cfa = eje
		forms.FrmNotasGC.nup_cfa = nup
		forms.FrmNotasGC.fecha_cfa = utils.parseDate(fecha,'dd-MM-yyyy');
		forms.FrmNotasGC.clie_cfa = cliente
		forms.FrmNotasGC.descclie_cfa = nomcliente
		forms.FrmNotasGC.cfpa_cfa = cfpa
		if(forms.FrmNotasGC.GCtbnotacabecera_to_tbmaestroformpago) forms.FrmNotasGC.desccfpa_cfa = forms.FrmNotasGC.GCtbnotacabecera_to_tbmaestroformpago.denom_fp	
		forms.FrmNotasGC.pgfi_cfa = pgfi
		if(depp != 0) forms.FrmNotasGC.depp_cfa = depp	
		forms.FrmNotasGC.impbre_cfa = impbre
		forms.FrmNotasGC.impbie_cfa = impbie
		forms.FrmNotasGC.impnee_cfa = impnee
		uuid = forms.FrmNotasGC.id
		databaseManager.saveData()
		
		//actualizo el valor del ultimo albaran en los parametros
		forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords();
		result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
		fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize())
			{
				return;
			}
		forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
		result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
		}
		
		forms.dlg_ParametroAplicacionGC.foundset.numnota = nup
		
		databaseManager.saveData()
		
		
		
		
		query = 'select * from [lalbaran] where [nup_lal]='+cod_cal
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
		rows = dataset.getMaxRowIndex()
		
		
		for(i=1; i <= rows;i++)
		{
			linea = dataset.getValue(i, 2)
			refm = dataset.getValue(i, 3)
			desc = dataset.getValue(i, 4)
			cant = dataset.getValue(i, 5)
			if(cant == null)
			{
				cant = 0
			}
			unme = dataset.getValue(i, 6)
			clie = dataset.getValue(i, 7)
			//rcli = dataset.getValue(i, 8)
			prec = dataset.getValue(i, 9)
			if(prec == null)
			{
				prec = 0
			}
			dto = dataset.getValue(i, 11)
			piva = dataset.getValue(i, 12)
			if(piva == null)
			{
				piva = 0
			}		
			precuni = dataset.getValue(i, 18)
			if(precuni == null)
			{
				precuni = 0
			}
			impor = dataset.getValue(i, 19)
			if(impor == null)
			{
				impor = 0
			}
			importot = dataset.getValue(i, 20)
			if(importot == null)
			{
				importot = 0
			}
			//var impdto = dataset.getValue(i, 22)
			
			
			//lineas
			forms.dlg_Linea_NotaGC.foundset.newRecord(true)	
			forms.dlg_Linea_NotaGC.eje_lfa = eje;
			forms.dlg_Linea_NotaGC.nup_lfa = nup;
			forms.dlg_Linea_NotaGC.nli_lfa = linea;
			forms.dlg_Linea_NotaGC.fecha_lfa = utils.parseDate(fecha,'dd-MM-yyyy');
			forms.dlg_Linea_NotaGC.nalb_lfa = cod_cal;
			forms.dlg_Linea_NotaGC.lalb_lfa = linea;
			forms.dlg_Linea_NotaGC.ref_lfa = refm;
			forms.dlg_Linea_NotaGC.concep_lfa = desc;
			forms.dlg_Linea_NotaGC.cant1_lfa = cant;
			forms.dlg_Linea_NotaGC.prec_lfa = prec;
			forms.dlg_Linea_NotaGC.unme_lfa = unme;
			forms.dlg_Linea_NotaGC.clie_lfa = clie;
			forms.dlg_Linea_NotaGC.descclie_lfa = nomcliente;
			forms.dlg_Linea_NotaGC.dto_lfa = dto;
			forms.dlg_Linea_NotaGC.precuni_lfa = precuni;
			forms.dlg_Linea_NotaGC.onDataChange()
			
			databaseManager.saveData()
			
			/*var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturalinea')  
			var record = vSet.getRecord(vSet.newRecord());
			record.eje_lfa = eje;
			record.ser_lfa = '';
			record.nup_lfa = nup;
			record.nli_lfa = linea;
			record.fecha_lfa = utils.parseDate(fecha,'dd-MM-yyyy');
			record.nalb_lfa = cod_cal;
			record.lalb_lfa = linea;
			record.ref_lfa = refm;
			record.concep_lfa = desc;
			record.cant1_lfa = cant;
			record.prec_lfa = prec;
			record.unme_lfa = unme;
			record.piva_lfa = piva;
			record.clie_lfa = clie;
			record.rcli_lal = rcli;
			record.dto_lfa = dto;
			record.precuni_lfa = precuni;
			record.onDataChange()
			record.impor_lfa = impor;
			record.importot_lfa = importot;
			record.impdto_lfa = impdto;
			
			databaseManager.saveData(record)*/				
		}
	}
	
	if(refped != null && refped != '')
	{
		query = 'select ID from cofertas where cod_cof ='+refped
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var preuuid = dataset.getValue(1,1)
		if(preuuid != null)
		{
			//actualizo situacion presupuesto
			var vSet2 = databaseManager.getFoundSet(globals.GCconex, 'cofertas')  
			  
			//load record by ID in foundset  
			vSet2.loadRecords(databaseManager.convertToDataSet([preuuid]))
			var record2 = vSet2.getRecord(vSet2.getSelectedIndex());
			record2.situ_cof = 'F';
			
			databaseManager.saveData(record2)
		}
	}
	
	//actualizo situacion albaran
	forms.FrmAlbaranGC.situ_cal = 'F';
	databaseManager.saveData();
	
	application.getWindow('Generacion Factura').hide();
	globals.GCenableBgElements();	
	//forms['FrmAlbaranGC'].controller.show()
	
	if(pivanota == null)
	{
		goFactura(uuid.toString(), event)
	}
	else
	{
		globals.GCshowInfoDialog('Se ha generado correctamente la Nota '+forms.dlg_Generacion_FacturaGC.NuevaFactura,null,'Aceptar',null,null,null)
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4E0870BB-904D-47C5-92F5-45E6D4D47F39"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"204CEA35-FF8A-4769-8C98-591D93F62ED5"}
 * 
 * @param {String} FRA
 * 
 * @param {JSEvent} event the event that triggered the action
 * @AllowToRunInFind
 */
function goFactura(FRA, event)
{
	//load the record based on the current id
	forms.FrmFacturasGC.foundset.loadAllRecords()
	var result = forms.FrmFacturasGC.foundset.selectRecord(FRA)
	var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmFacturasGC.foundset.getSize())
		{
		return;
		}
	forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
	result = forms.FrmFacturasGC.foundset.selectRecord(FRA);
	}
	forms.FrmFacturasGC.onFocusLostgtosfinan(event)
	databaseManager.saveData(forms.FrmFacturasGC.foundset)
	forms.FrmFacturasGC.controller.show()
	
	forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) //articulos es 2

	//change tabs
	forms.lst_solution_navigation_facturasGC.btn_goForm(event);
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
 *
 * @properties={typeid:24,uuid:"E1F580A3-D2C4-4500-8D91-C36FB01571DE"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Generacion Factura').hide();
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
 *
 * @properties={typeid:24,uuid:"5EA08348-85A5-466A-98E3-36138D62FF81"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
