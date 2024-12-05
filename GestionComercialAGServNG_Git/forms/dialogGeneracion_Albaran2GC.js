/**
 * @properties={typeid:24,uuid:"585488B0-C9DF-4947-82F8-83387B94C485"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	//if(globals.GCokToCommit == 1)
	//{
	//	if(globals.GCisEditing()) globals.GCcancelEditing()
	//}
	application.getWindow('Generacion Albaran').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"F731563E-232D-4312-98C5-F652E3912E28"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	//if(globals.GCokToCommit == 1)
	//{
		//if(globals.GCisEditing()) globals.GCsaveEdits()
	//}
	
	//databaseManager.saveData();	
	var query = 'select * from [cortraba] where [cod_cot]='+cod_cot
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var nuevoAlbaran = forms.dlg_Generacion_Albaran2GC.NuevoAlbaran
	var cliente = dataset.getValue(1, 3)
	var nomcli = dataset.getValue(1, 4)
	var dircli = dataset.getValue(1, 5)
	var pobcli = dataset.getValue(1, 6)
	var provcli = dataset.getValue(1, 7)
	var cpcli = dataset.getValue(1, 8)
	var att = dataset.getValue(1, 9)
	var telcli = dataset.getValue(1, 10)
	var faxcli = dataset.getValue(1, 11)
	var emacli = dataset.getValue(1, 12)
	var emba = dataset.getValue(1, 13)
	var portes = dataset.getValue(1, 14)
	var cfpa = dataset.getValue(1, 15)
	var fpago = dataset.getValue(1, 16)
	var rcli = dataset.getValue(1, 18)
	var mone = dataset.getValue(1, 19)
	var ndre = dataset.getValue(1, 21)
	var repr = dataset.getValue(1, 22)
	if(repr == null)
	{
		repr = 0
	}
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
	var caeu = dataset.getValue(1, 27)
	if(caeu == null)
	{
		caeu = 0
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
	var anticipo = dataset.getValue(1, 37)
	if(anticipo == null)
	{
		anticipo = 0
	}
	var pedido = forms.dlg_Generacion_Albaran2GC.cod_cot
	var fecha=utils.dateFormat(new Date(),'dd-MM-yyyy');
	
	
	
	
	//cabecera
	forms.FrmAlbaranGC.foundset.newRecord(true)
	forms.FrmAlbaranGC.foundset.id = application.getUUID()
	forms.FrmAlbaranGC.foundset.cod_cal = nuevoAlbaran
	forms.FrmAlbaranGC.foundset.clie_cal = cliente
	forms.FrmAlbaranGC.foundset.nomcl_cal = nomcli
	forms.FrmAlbaranGC.foundset.dircl_cal = dircli
	forms.FrmAlbaranGC.foundset.pobcl_cal = pobcli
	forms.FrmAlbaranGC.foundset.procl_cal = provcli
	forms.FrmAlbaranGC.foundset.cdpcl_cal = cpcli
	forms.FrmAlbaranGC.foundset.attcl_cal = att
	forms.FrmAlbaranGC.foundset.telcl_cal = telcli
	forms.FrmAlbaranGC.foundset.faxcl_cal = faxcli
	forms.FrmAlbaranGC.foundset.emacl_cal = emacli
	forms.FrmAlbaranGC.foundset.emba_cal = emba
	forms.FrmAlbaranGC.foundset.portes_cal = portes
	forms.FrmAlbaranGC.foundset.cfpa_cal = cfpa
	forms.FrmAlbaranGC.foundset.fpago_cal = fpago
	forms.FrmAlbaranGC.foundset.rcli_cal = rcli
	forms.FrmAlbaranGC.foundset.mone_cal = mone
	forms.FrmAlbaranGC.foundset.ndre_cal = ndre
	forms.FrmAlbaranGC.foundset.repr_cal = repr
	forms.FrmAlbaranGC.foundset.piva_cal = piva
	forms.FrmAlbaranGC.foundset.pgfi_cal = pgfi
	forms.FrmAlbaranGC.foundset.depp_cal = depp
	forms.FrmAlbaranGC.foundset.impbre_cal = impbre
	forms.FrmAlbaranGC.foundset.impdee_cal = impdee
	forms.FrmAlbaranGC.foundset.impcre_cal = impcre
	forms.FrmAlbaranGC.foundset.impgfe_cal = impgfe
	forms.FrmAlbaranGC.foundset.impbie_cal = impbie
	forms.FrmAlbaranGC.foundset.impcie_cal = impcie
	forms.FrmAlbaranGC.foundset.impnee_cal = impnee
	forms.FrmAlbaranGC.foundset.anticipo_cal = anticipo
	forms.FrmAlbaranGC.foundset.fecha_cal = utils.parseDate(fecha,'dd-MM-yyyy');
	forms.FrmAlbaranGC.foundset.refped_cal = pedido
	var uuid = forms.FrmAlbaranGC.foundset.id
	databaseManager.saveData(forms.FrmAlbaranGC.foundset)
	
	//actualizo el valor del ultimo albaran
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
	
	forms.dlg_ParametroAplicacionGC.foundset.numalbaran = nuevoAlbaran
	
	databaseManager.saveData(forms.dlg_ParametroAplicacionGC.foundset)
	
	
	
	
	query = 'select * from [lortraba] where [nup_lot]='+cod_cot+' order by nli_lot'  
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
	var rows = dataset.getMaxRowIndex()
	
	
	for(var i=1; i <= rows;i++)
	{
		var linea = dataset.getValue(i, 2)
		var refm = dataset.getValue(i, 3)
		//var desc = dataset.getValue(i, 4)
		var cant = dataset.getValue(i, 4)
		if(cant == null)
		{
			cant = 0
		}
		var unme = dataset.getValue(i, 5)
		var clie = dataset.getValue(i, 6)
		rcli = dataset.getValue(i, 7)
		var prec = dataset.getValue(i, 8)
		if(prec == null)
		{
			prec = 0
		}
		var dto = dataset.getValue(i, 10)
		piva = forms.FrmPedidosGC.piva_cot
		/*query = "select piva_a from [dbo].[tbMaestroArticulos] where Codigo = '"+refm+"'";  
		var dataset99 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		piva = dataset99.getValue(1,1)
		if(piva == null)
		{
			piva = 0;
		}*/
		
		/*piva = dataset.getValue(i, 11)
		if(piva == null)
		{
			piva = 0
		}*/
		var precuni = dataset.getValue(i, 15)
		if(precuni == null)
		{
			precuni = 0
		}
		var impor = dataset.getValue(i, 16)
		if(impor == null)
		{
			impor = 0
		}
		var importot = dataset.getValue(i, 17)
		if(importot == null)
		{
			importot = 0
		}
		var f = dataset.getValue(i, 18)
		var detalle = dataset.getValue(i, 19)
		
		
		//lineas
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'lalbaran')  
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID();
		record.nup_lal = nuevoAlbaran;
		record.nli_lal = linea;
		record.refm_lal = refm;
		record.desc_lal = detalle;
		record.cant1_lal = cant;
		record.unme_lal = unme;
		record.clie_lal = clie;
		record.rcli_lal = rcli;
		record.prec_lal = prec;
		record.dto_lal = dto;
		record.piva_lal = piva;
		record.nuplof_lal = cod_cot;
		record.nlilof_lal = linea;
		record.precuni_lal = precuni;
		record.impor_lal = impor;
		record.importot_lal = importot;
		record.fecha_lal = f;
		//record.impdto_lal = impdto;
		
		databaseManager.saveData(record)				
	}
	
	//actualizo situacion presupuesto
	forms.FrmPedidosGC.situ_cot = 'A';
	databaseManager.saveData();
	
	application.getWindow('Generacion Albaran').hide();
	globals.GCenableBgElements();	
	//forms['FrmAlbaranGC'].controller.show()
	goAlbaran(uuid.toString()/*nuevoAlbaran*/)
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EE8036AC-4827-41D0-A5BC-97AA58C8B181"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"835FF761-3174-4724-B072-B48525A3E8F1"}
 * 
 * @param {String} ALB
 */
function goAlbaran(ALB)
{
	//load the record based on the current id
	forms.FrmAlbaranGC.controller.show()
	var result = forms.FrmAlbaranGC.foundset.selectRecord(ALB)
	var fsCount = databaseManager.getFoundSetCount(forms.FrmAlbaranGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmAlbaranGC.foundset.getSize())
		{
		return;
		}
	forms.FrmAlbaranGC.foundset.setSelectedIndex(forms.FrmAlbaranGC.foundset.getSize());
	result = forms.FrmAlbaranGC.foundset.selectRecord(ALB);
	}
	
	
	forms.lst_solution_navigation_albaranGC.controller.setSelectedIndex(1) //articulos es 2

	//change tabs
	forms.lst_solution_navigation_albaranGC.btn_goForm();
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
 * @properties={typeid:24,uuid:"BDC8F091-3EC3-4FEA-9275-40EDFF0B4E06"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Generacion Albaran').hide();
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
 * @properties={typeid:24,uuid:"5CF5B82E-A5E0-408B-AF79-4DF6458BF628"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
