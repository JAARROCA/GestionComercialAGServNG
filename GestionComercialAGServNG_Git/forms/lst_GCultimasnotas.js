/**
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"C0EBE766-B11C-4D61-B210-61627AC10FBA"}
 */
function btn_showEfectoFactura()
{
	//select the right row
	var uid = id
	var result = forms.FrmNotasGC.foundset.selectRecord(uid)
	var fsCount = databaseManager.getFoundSetCount(forms.FrmNotasGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmNotasGC.foundset.getSize())
	{
		return;
	}
	forms.FrmNotasGC.foundset.setSelectedIndex(forms.FrmNotasGC.foundset.getSize());
	result = forms.FrmNotasGC.foundset.selectRecord(uid);
	}
	globals.GCcurID_Nota = id
	
	forms.FrmNotasGC.onRecordSelect()
	
}
