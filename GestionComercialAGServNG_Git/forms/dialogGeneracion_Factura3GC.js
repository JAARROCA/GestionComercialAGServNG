/**
 * @properties={typeid:24,uuid:"86BD7A02-E7FA-4157-8C7A-8AA1F40B207F"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	//if(globals.GCokToCommit == 1)
	//{
	//	if(globals.GCisEditing()) globals.GCcancelEditing()
	//}
	application.getWindow('Generacion Factura Proforma').hide();
	globals.GCenableBgElements();
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * 
 * @properties={typeid:24,uuid:"D5BBD5F4-AD11-48D2-8B9B-984EA35BC94A"}
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
	var query = 'select * from cofertas where cod_cof='+forms.FrmPresupuestosGC.cod_cof;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var eje = forms.dlg_Generacion_Factura3GC.Ejer
	var ser = 'P'
	var nup = forms.dlg_Generacion_Factura3GC.NF
	var cliente = dataset.getValue(1, 3)
	//var nomcliente = dataset.getValue(1, 4)	
	var cfpa = dataset.getValue(1, 15)
	//var rcli = dataset.getValue(1, 17)
	var piva = dataset.getValue(1, 23)
	if(piva == null)
	{
		piva = 0
	}
	var pgfi = dataset.getValue(1, 24)
	if(pgfi == null)
	{
		pgfi = 0
	}
	var depp = dataset.getValue(1, 25)
	if(depp == null)
	{
		depp = 0
	}
	var impbre = dataset.getValue(1, 26)
	if(impbre == null)
	{
		impbre = 0
	}
	var impdee = dataset.getValue(1, 28)
	if(impdee == null)
	{
		impdee = 0
	}
	var impcre = dataset.getValue(1, 29)
	if(impcre == null)
	{
		impcre = 0
	}
	var impgfe = dataset.getValue(1, 30)
	if(impgfe == null)
	{
		impgfe = 0
	}
	var impbie = dataset.getValue(1, 31)
	if(impbie == null)
	{
		impbie = 0
	}
	var impcie = dataset.getValue(1, 32)
	if(impcie == null)
	{
		impcie = 0
	}
	var impnee = dataset.getValue(1, 33)
	if(impnee == null)
	{
		impnee = 0
	}
	var anticipo = dataset.getValue(1, 35)
	if(anticipo == null)
	{
		anticipo = 0
	}
	var fecha=utils.dateFormat(new Date(),'dd-MM-yyyy');
	
	
	
	
		//cabecera
		forms.FrmFacturasProformaGC.foundset.newRecord(true)	
		forms.FrmFacturasProformaGC.id = application.getUUID()
		forms.FrmFacturasProformaGC.eje_cfa = eje
		forms.FrmFacturasProformaGC.ser_cfa = ser
		forms.FrmFacturasProformaGC.nup_cfa = nup
		forms.FrmFacturasProformaGC.fecha_cfa = utils.parseDate(fecha,'dd-MM-yyyy');
		forms.FrmFacturasProformaGC.clie_cfa = cliente
		forms.FrmFacturasProformaGC.cfpa_cfa = cfpa
		if(forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroformpago) forms.FrmFacturasProformaGC.desccfpa_cfa = forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroformpago.denom_fp	
		forms.FrmFacturasProformaGC.piva_cfa = piva
		forms.FrmFacturasProformaGC.pgfi_cfa = pgfi
		if(depp != 0) forms.FrmFacturasProformaGC.depp_cfa = depp	
		forms.FrmFacturasProformaGC.impbre_cfa = impbre
		forms.FrmFacturasProformaGC.impbie_cfa = impbie
		forms.FrmFacturasProformaGC.cuotaiva_cfa = impcie
		forms.FrmFacturasProformaGC.impnee_cfa = impnee
		var uuid = forms.FrmFacturasProformaGC.id
		databaseManager.saveData(forms.FrmFacturasProformaGC.foundset)
		
		//actualizo el valor del ultimo factura proforma en los parametros
		forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords();
		var result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize()) return;
			forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
			result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
		}
		
		forms.dlg_ParametroAplicacionGC.foundset.numfacturaproforma = nup
		
		databaseManager.saveData(forms.dlg_ParametroAplicacionGC.foundset)
		
		
		
		
		query = 'select * from lofertas where nup_lof='+forms.FrmPresupuestosGC.cod_cof
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
			var precuni = dataset.getValue(i, 14)
			if(precuni == null)
			{
				precuni = 0
			}
			var impor = dataset.getValue(i, 15)
			if(impor == null)
			{
				impor = 0
			}
			var importot = dataset.getValue(i, 16)
			if(importot == null)
			{
				importot = 0
			}
			//var impdto = dataset.getValue(i, 22)
			
			
			//lineas
			forms.dlg_Linea_FacturaProformaGC.foundset.newRecord(true)	
			forms.dlg_Linea_FacturaProformaGC.eje_lfa = eje;
			forms.dlg_Linea_FacturaProformaGC.ser_lfa = 'P';
			forms.dlg_Linea_FacturaProformaGC.nup_lfa = nup;
			forms.dlg_Linea_FacturaProformaGC.nli_lfa = linea;
			forms.dlg_Linea_FacturaProformaGC.fecha_lfa = utils.parseDate(fecha,'dd-MM-yyyy');
			forms.dlg_Linea_FacturaProformaGC.nalb_lfa = cod_cof;
			forms.dlg_Linea_FacturaProformaGC.lalb_lfa = linea;
			forms.dlg_Linea_FacturaProformaGC.ref_lfa = refm;
			forms.dlg_Linea_FacturaProformaGC.concep_lfa = desc;
			forms.dlg_Linea_FacturaProformaGC.cant1_lfa = cant;
			forms.dlg_Linea_FacturaProformaGC.prec_lfa = prec;
			forms.dlg_Linea_FacturaProformaGC.unme_lfa = unme;
			forms.dlg_Linea_FacturaProformaGC.piva_lfa = piva;
			forms.dlg_Linea_FacturaProformaGC.clie_lfa = clie;
			//forms.dlg_Linea_NotaGC.descclie_lfa = nomcliente;
			forms.dlg_Linea_FacturaProformaGC.dto_lfa = dto;
			forms.dlg_Linea_FacturaProformaGC.precuni_lfa = precuni;
			forms.dlg_Linea_FacturaProformaGC.onDataChange()
			
			databaseManager.saveData(forms.dlg_Linea_FacturaProformaGC.foundset)
			
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
	
	
	//actualizo situacion albaran
	forms.FrmPresupuestosGC.situ_cof = 'A';
	databaseManager.saveData();
	
	application.getWindow('Generacion Factura Proforma').hide();
	globals.GCenableBgElements();	
	//forms['FrmAlbaranGC'].controller.show()
	
	goFactura(uuid.toString(), event)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BC8D8886-8C68-4406-A9F1-BEC67212FEC9"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"B2422CC2-A54A-4449-B962-3486A2D0BA00"}
 * 
 * @param {String} FRA
 * 
 * @param {JSEvent} event the event that triggered the action
 * @AllowToRunInFind
 */
function goFactura(FRA, event)
{
	//load the record based on the current id
	forms.FrmFacturasProformaGC.foundset.loadAllRecords()
	var result = forms.FrmFacturasProformaGC.foundset.selectRecord(FRA)
	var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasProformaGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmFacturasProformaGC.foundset.getSize())
		{
		return;
		}
	forms.FrmFacturasProformaGC.foundset.setSelectedIndex(forms.FrmFacturasProformaGC.foundset.getSize());
	result = forms.FrmFacturasProformaGC.foundset.selectRecord(FRA);
	}
	forms.FrmFacturasProformaGC.onFocusLostgtosfinan(event)
	databaseManager.saveData(forms.FrmFacturasProformaGC.foundset)
	forms.FrmFacturasProformaGC.controller.show()
	
	forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) 

	//change tabs
	forms.lst_solution_navigation_facturasGC.btn_goForm(event);
	forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(4) 

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
 * @properties={typeid:24,uuid:"0B79CF23-FDEB-4392-A2F5-402CF99076E5"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Generacion Factura Proforma').hide();
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
 * @properties={typeid:24,uuid:"4ADF1542-1882-4B16-ACE5-5657926CC9B1"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
