/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB3FB629-4C4B-4B8B-9D1E-DCB43C03FAA8"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var uid = id
	var result = forms.FrmMoviArtiGC.foundset.selectRecord(uid);
	var fsCount = databaseManager.getFoundSetCount(forms.FrmMoviArtiGC.foundset);
	while(result==false)
	{
		if(fsCount == forms.FrmMoviArtiGC.foundset.getSize())
		{
		return;
		}
	forms.FrmMoviArtiGC.foundset.setSelectedIndex(forms.FrmMoviArtiGC.foundset.getSize());
	result = forms.FrmMoviArtiGC.foundset.selectRecord(uid);
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
 * @properties={typeid:24,uuid:"A5597B89-9FE1-473E-90D4-7EE70C2C2753"}
 */
function onShow(firstShow, event) {
	//rec,fsindex = null;
	elements.table_ArticuloUltMovStock.myFoundset.foundset.sort('fecha_ms desc')
}
