/**
 * @properties={typeid:24,uuid:"3C20E78C-B84A-49B7-A9F3-C90A4393EE3A"}
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
 * @properties={typeid:24,uuid:"C13E88CE-1733-4EDD-9E60-E3E43C8BFD75"}
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
	var query = 'select * from [cofertas] where [cod_cof]='+cod_cof
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var nuevoAlbaran = forms.dlg_Generacion_AlbaranGC.NuevoAlbaran
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
	var rcli = dataset.getValue(1, 17)
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
	var anticipo = dataset.getValue(1, 34)
	if(anticipo == null)
	{
		anticipo = 0
	}
	var presupuesto = forms.dlg_Generacion_AlbaranGC.cod_cof
	var fecha=utils.dateFormat(new Date(),'dd-MM-yyyy');
	
	
	
	
	//cabecera
	forms.FrmAlbaranGC.foundset.newRecord(true)	
	forms.FrmAlbaranGC.id = application.getUUID();
	forms.FrmAlbaranGC.cod_cal = nuevoAlbaran
	forms.FrmAlbaranGC.clie_cal = cliente
	forms.FrmAlbaranGC.nomcl_cal = nomcli
	forms.FrmAlbaranGC.dircl_cal = dircli
	forms.FrmAlbaranGC.pobcl_cal = pobcli
	forms.FrmAlbaranGC.procl_cal = provcli
	forms.FrmAlbaranGC.cdpcl_cal = cpcli
	forms.FrmAlbaranGC.attcl_cal = att
	forms.FrmAlbaranGC.telcl_cal = telcli
	forms.FrmAlbaranGC.faxcl_cal = faxcli
	forms.FrmAlbaranGC.emacl_cal = emacli
	forms.FrmAlbaranGC.emba_cal = emba
	forms.FrmAlbaranGC.portes_cal = portes
	forms.FrmAlbaranGC.cfpa_cal = cfpa
	forms.FrmAlbaranGC.fpago_cal = fpago
	forms.FrmAlbaranGC.rcli_cal = rcli
	forms.FrmAlbaranGC.mone_cal = mone
	forms.FrmAlbaranGC.ndre_cal = ndre
	forms.FrmAlbaranGC.repr_cal = repr
	forms.FrmAlbaranGC.piva_cal = piva
	forms.FrmAlbaranGC.pgfi_cal = pgfi
	forms.FrmAlbaranGC.depp_cal = depp
	forms.FrmAlbaranGC.impbre_cal = impbre
	forms.FrmAlbaranGC.impdee_cal = impdee
	forms.FrmAlbaranGC.impcre_cal = impcre
	forms.FrmAlbaranGC.impgfe_cal = impgfe
	forms.FrmAlbaranGC.impbie_cal = impbie
	forms.FrmAlbaranGC.impcie_cal = impcie
	forms.FrmAlbaranGC.impnee_cal = impnee
	forms.FrmAlbaranGC.anticipo_cal = anticipo
	forms.FrmAlbaranGC.fecha_cal = utils.parseDate(fecha,'dd-MM-yyyy');
	forms.FrmAlbaranGC.refped_cal = presupuesto
	var uuid = forms.FrmAlbaranGC.id
	databaseManager.saveData()
	
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
	
	databaseManager.saveData()
	
	
	
	
	query = 'select * from [lofertas] where [nup_lof]='+cod_cof
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
		rcli = dataset.getValue(i, 8)
		var prec = dataset.getValue(i, 9)
		if(prec == null)
		{
			prec = 0
		}
		var dto = dataset.getValue(i, 11)
		piva = forms.FrmPresupuestosGC.piva_cof
		
		/*query = "select piva_a from [dbo].[tbMaestroArticulos] where Codigo = '"+refm+"'";  
		var dataset99 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		piva = dataset99.getValue(1,1)
		if(piva == null)
		{
			piva = 0;
		}*/
		
		/*piva = dataset.getValue(i, 12)
		if(piva == null);
		{
			piva = 0
		}*/
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
		var f = dataset.getValue(i, 17)
		var impdto = dataset.getValue(i, 18)
		
		
		//lineas
		forms.lst_Albaran_LineasGC.foundset.newRecord(true)	
		forms.lst_Albaran_LineasGC.nup_lal = nuevoAlbaran;
		forms.lst_Albaran_LineasGC.nli_lal = linea;
		forms.lst_Albaran_LineasGC.refm_lal = refm;
		forms.lst_Albaran_LineasGC.desc_lal = desc;
		forms.lst_Albaran_LineasGC.cant1_lal = cant;
		forms.lst_Albaran_LineasGC.unme_lal = unme;
		forms.lst_Albaran_LineasGC.clie_lal = clie;
		forms.lst_Albaran_LineasGC.rcli_lal = rcli;
		forms.lst_Albaran_LineasGC.prec_lal = prec;
		forms.lst_Albaran_LineasGC.dto_lal = dto;
		forms.lst_Albaran_LineasGC.piva_lal = piva;
		forms.lst_Albaran_LineasGC.nuplof_lal = cod_cof;
		forms.lst_Albaran_LineasGC.nlilof_lal = linea;
		forms.lst_Albaran_LineasGC.precuni_lal = precuni;
		forms.lst_Albaran_LineasGC.impor_lal = impor;
		forms.lst_Albaran_LineasGC.importot_lal = importot;
		forms.lst_Albaran_LineasGC.fecha_lal = f;
		forms.lst_Albaran_LineasGC.impdto_lal = impdto;
		databaseManager.saveData(forms.lst_Albaran_LineasGC.foundset)
		/*var vSet = databaseManager.getFoundSet(globals.GCconex, 'lalbaran')  
		var record = vSet.getRecord(vSet.newRecord());
		record.nup_lal = nuevoAlbaran;
		record.nli_lal = linea;
		record.refm_lal = refm;
		record.desc_lal = desc;
		record.cant1_lal = cant;
		record.unme_lal = unme;
		record.clie_lal = clie;
		record.rcli_lal = rcli;
		record.prec_lal = prec;
		record.dto_lal = dto;
		record.piva_lal = piva;
		record.nuplof_lal = cod_cof;
		record.nlilof_lal = linea;
		record.precuni_lal = precuni;
		record.impor_lal = impor;
		record.importot_lal = importot;
		record.fecha_lal = f;
		record.impdto_lal = impdto;
		
		databaseManager.saveData(record)*/				
	}
	
	//actualizo situacion presupuesto
	forms.FrmPresupuestosGC.situ_cof = 'A';
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
 * @properties={typeid:24,uuid:"EBE7D2AF-8E64-4831-BDAD-2C59DBDE0154"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
	
}

/**
 * @properties={typeid:24,uuid:"F2570446-A7C9-4E6F-A3E2-138E9AE0CDAA"}
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
	
	
	forms.lst_solution_navigation_albaranGC.controller.setSelectedIndex(1) 

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
 * @properties={typeid:24,uuid:"4F37C836-E37B-4F36-8F56-5CDD8D5D79B0"}
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
 * @properties={typeid:24,uuid:"4D797F3F-B08C-4451-A0A8-02CC2E08E705"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
