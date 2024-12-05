/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"058BD727-0909-406D-9BAC-8D29974F5FB3"}
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
