/**
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"4164D34F-77D6-4277-878D-B1930C1ABA49"}
 */
function btn_showEfectoFactura()
{
	forms.FrmFacturasGC.foundset.loadAllRecords()
	//select the right row
	var uid = id;
	var result = forms.FrmFacturasGC.foundset.selectRecord(uid)
	var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmFacturasGC.foundset.getSize()) return;
		forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
		result = forms.FrmFacturasGC.foundset.selectRecord(uid);
	}
	globals.GCcurID_Factura = uid
	
	forms.FrmFacturasGC.onRecordSelect()
	
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"88563022-EEA0-451B-B757-B7B3582815DA"}
 */
function onActionTicketBAIQR(event) {
	//if(mac && fechaenviofichero && cqr) application.showURL(cqr,'_blank')
	if(rec){
		if(rec['mac'] && rec['fechaenviofichero'] && rec['cqr']) application.showURL(rec['cqr'],'_blank')
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"94AC2365-83DD-445B-908C-9BCB3F2B03C5"}
 */
function onShow(firstShow) {
	/*if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai){
		elements.lbl_logoTBai.visible = true;
		elements.lbl_enviadatbai.visible = true;
	}
	else{
		elements.lbl_logoTBai.visible = false;
		elements.lbl_enviadatbai.visible = false;
	}*/
	if(!firstShow) databaseManager.recalculate(foundset)
}

/**
 * @type {JSRecord}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"8B4EB04E-61A1-46EF-A2CF-A5F44AC1E688",variableType:-4}
 */
var rec;

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
 * @properties={typeid:24,uuid:"5A6C1E0A-4C3B-4E36-B98C-72CBEAA8A5F8"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
var column = elements.table_GCUltimasFacturas.getColumn(columnindex);
	
rec = record;
if(rec){ 
	globals.GCcurID_Factura = rec['id'];
	var uid = rec['id'];
	var result = forms.FrmFacturasGC.foundset.selectRecord(uid)
	var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmFacturasGC.foundset.getSize()) return;
		forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
		result = forms.FrmFacturasGC.foundset.selectRecord(uid);
	}
	

}
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	if (column.id === "enviadaTicketBAI") {
		onActionTicketBAIQR(event)
	}
	
}
