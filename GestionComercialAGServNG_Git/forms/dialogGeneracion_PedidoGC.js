/**
 * @properties={typeid:24,uuid:"B730B865-06E2-4142-9597-86739C7CD055"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	//globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	//if(globals.GCokToCommit == 1)
	//{
	//	if(globals.GCisEditing()) globals.GCcancelEditing()
	//}
	application.getWindow('Generacion Pedido').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"BF14EA4C-9770-44FB-98A5-85E965272F7B"}
 * @SuppressWarnings(deprecated)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	//globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	//if(globals.GCokToCommit == 1)
	//{
		//if(globals.GCisEditing()) globals.GCsaveEdits()
	//}
	
	//databaseManager.saveData();	
	var query = 'select * from [dbo].[cofertas] where [cod_cof]='+cod_cof
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var nuevoPedido = globals.NuevoPedido
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
	var imprec = dataset.getValue(1, 34)
	if(imprec == null)
	{
		imprec = 0
	}
	var anticipo = dataset.getValue(1, 35)
	if(anticipo == null)
	{
		anticipo = 0
	}
	var presupuesto = cod_cof
	var fecha=utils.dateFormat(new Date(),'dd-MM-yyyy');
	
	
	//cabecera
	forms.FrmPedidosGC.foundset.newRecord(true)
	forms.FrmPedidosGC.foundset.id = application.getUUID()
	forms.FrmPedidosGC.foundset.cod_cot = nuevoPedido
	forms.FrmPedidosGC.foundset.clie_cot = cliente
	forms.FrmPedidosGC.foundset.nomcl_cot = nomcli
	forms.FrmPedidosGC.foundset.dircl_cot = dircli
	forms.FrmPedidosGC.foundset.pobcl_cot = pobcli
	forms.FrmPedidosGC.foundset.procl_cot = provcli
	forms.FrmPedidosGC.foundset.cdpcl_cot = cpcli
	forms.FrmPedidosGC.foundset.attcl_cot = att
	forms.FrmPedidosGC.foundset.telcl_cot = telcli
	forms.FrmPedidosGC.foundset.faxcl_cot = faxcli
	forms.FrmPedidosGC.foundset.emacl_cot = emacli
	forms.FrmPedidosGC.foundset.emba_cot = emba
	forms.FrmPedidosGC.foundset.portes_cot = portes
	forms.FrmPedidosGC.foundset.cfpa_cot = cfpa
	forms.FrmPedidosGC.foundset.fpago_cot = fpago
	forms.FrmPedidosGC.foundset.rcli_cot = rcli
	forms.FrmPedidosGC.foundset.mone_cot = mone
	forms.FrmPedidosGC.foundset.ndre_cot = ndre
	forms.FrmPedidosGC.foundset.repr_cot = repr
	forms.FrmPedidosGC.foundset.piva_cot = piva
	forms.FrmPedidosGC.foundset.pgfi_cot = pgfi
	forms.FrmPedidosGC.foundset.depp_cot = depp
	forms.FrmPedidosGC.foundset.impbre_cot = impbre
	forms.FrmPedidosGC.foundset.impdee_cot= impdee
	forms.FrmPedidosGC.foundset.impcre_cot = impcre
	forms.FrmPedidosGC.foundset.impgfe_cot = impgfe
	forms.FrmPedidosGC.foundset.impbie_cot = impbie
	forms.FrmPedidosGC.foundset.impcie_cot = impcie
	forms.FrmPedidosGC.foundset.impnee_cot = impnee
	forms.FrmPedidosGC.foundset.anticipo_cot = anticipo
	forms.FrmPedidosGC.foundset.fecha_cot = utils.parseDate(fecha,'dd-MM-yyyy');
	forms.FrmPedidosGC.foundset.refofe_cot = cod_cof;
	//var uuid = forms.FrmPedidosGC.foundset.id
	databaseManager.saveData(forms.FrmPedidosGC.foundset)
	
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
	
	forms.dlg_ParametroAplicacionGC.foundset.numpedido = nuevoPedido
	
	databaseManager.saveData(forms.dlg_ParametroAplicacionGC.foundset)
	
	
	
	query = 'select * from [dbo].[lofertas] where [nup_lof]='+cod_cof+' order by nli_lof'
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999)
	var rows = dataset.getMaxRowIndex()
	for(var i=1; i <= rows;i++)
	{
		var linea = dataset.getValue(i, 2)
		var refm = dataset.getValue(i, 3)
		var descrefm = dataset.getValue(i, 4)
		var cant = dataset.getValue(i, 5)
		if(cant == null)
		{
			cant = 0
		}
		var unme = dataset.getValue(i, 6)
		var clie = dataset.getValue(i, 7)
		rcli = dataset.getValue(i, 8)
		var prec = dataset.getValue(i, 9)
		var dto = dataset.getValue(i, 11)		
		piva = dataset.getValue(i, 12)
		var precuni = dataset.getValue(i, 14)
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
		
		
		
		//lineas
		forms.dlg_Linea_PedidoGC.foundset.newRecord(true)
		forms.dlg_Linea_PedidoGC.foundset.nup_lot = nuevoPedido
		forms.dlg_Linea_PedidoGC.foundset.nli_lot = linea
		forms.dlg_Linea_PedidoGC.foundset.clie_lot = clie
		forms.dlg_Linea_PedidoGC.foundset.nuplof_lot = presupuesto;
		forms.dlg_Linea_PedidoGC.foundset.nlilof_lot = linea;
		forms.dlg_Linea_PedidoGC.foundset.refm_lot = refm;
		forms.dlg_Linea_PedidoGC.foundset.detalle_lot = descrefm;
		forms.dlg_Linea_PedidoGC.foundset.fecha_lot = new Date();
		forms.dlg_Linea_PedidoGC.foundset.cant1_lot = cant;
		forms.dlg_Linea_PedidoGC.foundset.dto_lot = dto;
		forms.dlg_Linea_PedidoGC.foundset.prec_lot = prec;
		forms.dlg_Linea_PedidoGC.foundset.unme_lot = unme;
		forms.dlg_Linea_PedidoGC.foundset.cant1_lot = cant;
		forms.dlg_Linea_PedidoGC.foundset.piva_lot = piva;
		forms.dlg_Linea_PedidoGC.foundset.precuni_lot = precuni;
		forms.dlg_Linea_PedidoGC.foundset.impor_lot = impor;
		forms.dlg_Linea_PedidoGC.foundset.importot_lot = importot;
		
		
		
		databaseManager.saveData(forms.dlg_Linea_PedidoGC.foundset)
	}
	forms.FrmPresupuestosGC.situ_cof = 'A';
	databaseManager.saveData();
	
	
	
	application.getWindow('Generacion Pedido').hide();
	globals.GCenableBgElements();	
	forms.FrmPedidosGC.controller.show()
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5039D5DE-AAE9-421C-828E-198A0E49B070"}
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
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"E32211ED-2453-4C4A-98C7-FD38ECB86255"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Generacion Pedido').hide();
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
 *
 * @properties={typeid:24,uuid:"453CDD38-D93C-4B06-956A-700A92AC7FE0"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
