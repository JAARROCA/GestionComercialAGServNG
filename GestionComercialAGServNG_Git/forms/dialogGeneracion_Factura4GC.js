/**
 * @properties={typeid:24,uuid:"BCD5293C-E86C-469D-8CB6-B98B04BF851C"}
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
 * @properties={typeid:24,uuid:"72983352-59BB-4E5D-9A85-1D78E12C01CC"}
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
	var query = "select * from tbfacturaproformacabecera where eje_cfa ="+forms.FrmFacturasProformaGC.eje_cfa+
	" and ser_cfa ='P' and nup_cfa="+forms.FrmFacturasProformaGC.nup_cfa;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var eje = forms.FrmFacturasProformaGC.eje_cfa;
	//var ser = forms.FrmFacturasProformaGC.ser_cfa
	var nup = forms.FrmFacturasProformaGC.nup_cfa;
	var cliente = forms.FrmFacturasProformaGC.clie_cfa;
	//var nomcliente = dataset.getValue(1, 4)	
	var cfpa = forms.FrmFacturasProformaGC.cfpa_cfa;
	var desccfpa = forms.FrmFacturasProformaGC.desccfpa_cfa;
	var obser = forms.FrmFacturasProformaGC.obse_cfa;
	//var rcli = dataset.getValue(1, 17)
	var piva = forms.FrmFacturasProformaGC.piva_cfa;
	if(piva == null) piva = 0;
	var pgfi = forms.FrmFacturasProformaGC.pgfi_cfa;
	if(pgfi == null) pgfi = 0;
	var depp = forms.FrmFacturasProformaGC.depp_cfa;
	if(depp == null) depp = 0;
	var impbre = forms.FrmFacturasProformaGC.impbre_cfa;
	if(impbre == null) impbre = 0;
	var impgfe = forms.FrmFacturasProformaGC.impgtosfinan;
	if(impgfe == null) impgfe = 0;
	var impbie = forms.FrmFacturasProformaGC.impbie_cfa;
	if(impbie == null) impbie = 0;
	var impcie = forms.FrmFacturasProformaGC.cuotaiva_cfa;
	if(impcie == null) impcie = 0;
	var impnee = forms.FrmFacturasProformaGC.impnee_cfa;
	if(impnee == null) impnee = 0;
	var fecha=utils.dateFormat(new Date(),'dd-MM-yyyy');
	var fechcobro = forms.FrmFacturasProformaGC.fechcobro_cfa;
	if(!fechcobro || fechcobro < fecha) fechcobro = utils.parseDate(fecha,'dd-MM-yyyy');
	
	
	
	
		//cabecera
		forms.FrmFacturasGC.foundset.newRecord(true)	
		forms.FrmFacturasGC.validate_autoEnter()
		//forms.FrmFacturasGC.eje_cfa = eje
		//forms.FrmFacturasGC.ser_cfa = ser
		//forms.FrmFacturasGC.nup_cfa = nup
		globals.GCRegistroNuevo = null;
		var nfactura = forms.FrmFacturasGC.nup_cfa
		//forms.FrmFacturasGC.fecha_cfa = utils.parseDate(fecha,'dd-MM-yyyy');
		forms.FrmFacturasGC.clie_cfa = cliente
		forms.FrmFacturasGC.cfpa_cfa = cfpa
		//if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroformpago) forms.FrmFacturasGC.desccfpa_cfa = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroformpago.denom_fp
		forms.FrmFacturasGC.desccfpa_cfa = desccfpa	
		forms.FrmFacturasGC.obse_cfa = obser
		if(fechcobro < forms.FrmFacturasGC.fecha_cfa) fechcobro = forms.FrmFacturasGC.fecha_cfa
		forms.FrmFacturasGC.fechcobro_cfa = fechcobro	
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
		else
		{
			forms.FrmFacturasGC.tipooperacionsii = 'E';
			forms.FrmFacturasGC.sujetaexentaivasii = 'NE';
		}
		
		/*if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.pais &&
		forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.pais != 'ES')
		{
			forms.FrmFacturasGC.tipooperacionsii = 'E';
			forms.FrmFacturasGC.sujetaexentaivasii = 'E';
		}
		else{
			forms.FrmFacturasGC.tipooperacionsii = 'PS';
			forms.FrmFacturasGC.sujetaexentaivasii = 'NE';
		}*/
		var uuid = forms.FrmFacturasGC.id
		databaseManager.saveData(forms.FrmFacturasGC.foundset)
		
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
		
		forms.dlg_ParametroAplicacionGC.foundset.numfactura = nup
		
		databaseManager.saveData(forms.dlg_ParametroAplicacionGC.foundset)
		
		
		
		
		query = "select * from tbfacturaproformalinea where eje_lfa ="+forms.FrmFacturasProformaGC.eje_cfa+
				" and ser_lfa ='P' and nup_lfa="+forms.FrmFacturasProformaGC.nup_cfa;
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
		var rows = dataset.getMaxRowIndex()
		
		
		for(var i=1; i <= rows;i++)
		{
			//var linea = dataset.getValue(i, 5)
			var nalb = dataset.getValue(i, 6)
			var nalblin = dataset.getValue(i, 7)
			var refm = dataset.getValue(i, 8)
			var desc = dataset.getValue(i, 9)
			var cant = dataset.getValue(i, 10)
			if(cant == null) cant = 0
			var unme = dataset.getValue(i, 12)
			var clie = dataset.getValue(i, 14)
			//rcli = dataset.getValue(i, 8)
			var prec = dataset.getValue(i, 11)
			if(prec == null) prec = 0
			var dto = dataset.getValue(i, 21)
			piva = dataset.getValue(i, 13)
			if(piva == null) piva = 0
			var precuni = dataset.getValue(i, 16)
			if(precuni == null) precuni = 0
			var impor = dataset.getValue(i, 17)
			if(impor == null) impor = 0
			var importot = dataset.getValue(i, 18)
			if(importot == null) importot = 0
			//var impdto = dataset.getValue(i, 22)
			
			
			//lineas
			forms.dlg_Linea_FacturaGC.foundset.newRecord(true)	
			forms.dlg_Linea_FacturaGC.eje_lfa = eje;
			forms.dlg_Linea_FacturaGC.ser_lfa = '';
			forms.dlg_Linea_FacturaGC.nup_lfa = nfactura;
			forms.dlg_Linea_FacturaGC.validate_autoEnter()
			//forms.dlg_Linea_FacturaGC.nli_lfa = linea;
			forms.dlg_Linea_FacturaGC.fecha_lfa = utils.parseDate(fecha,'dd-MM-yyyy');
			forms.dlg_Linea_FacturaGC.nalb_lfa = nalb;
			forms.dlg_Linea_FacturaGC.lalb_lfa = nalblin;
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
	
	
	
	
	//actualizo situacion albaran
	forms.FrmFacturasProformaGC.situ = 'F';
	databaseManager.saveData();
	
	application.getWindow('Generacion Factura').hide();
	globals.GCenableBgElements();	
	//forms['FrmAlbaranGC'].controller.show()
	
	goFactura(uuid.toString(), event)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"695609D1-3FE9-415F-8BFD-0B429E810DD6"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"09A63E2C-817E-425A-96F4-FE0F02701E92"}
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
		if(fsCount == forms.FrmFacturasGC.foundset.getSize()) return;
		forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
		result = forms.FrmFacturasGC.foundset.selectRecord(FRA);
	}
	forms.FrmFacturasGC.Generacion_Efecto_Factura()
	forms.FrmFacturasGC.onFocusLostgtosfinan(event)
	databaseManager.saveData(forms.FrmFacturasGC.foundset)
	forms.FrmFacturasGC.controller.show()
	
	forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) 

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
 * @properties={typeid:24,uuid:"F21D0DBC-6D03-4532-B89A-6A011BEA59A4"}
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
 * @properties={typeid:24,uuid:"E2BFD915-80FE-4D1B-8FC1-02B28BCA4873"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
