/**
 * @properties={typeid:24,uuid:"9CF353E6-96F1-46D6-A451-0725656D7654"}
 */
function btn_goRec()
{
	globals.GCcurID_Nota = id
	var uid = id
	var result = forms.lst_GCultimasnotas.foundset.selectRecord(uid)
	var fsCount = databaseManager.getFoundSetCount(forms.lst_GCultimasnotas.foundset);
	while(result==false)
	{
		if(fsCount == forms.lst_GCultimasnotas.foundset.getSize())
	{
		return;
	}
	forms.lst_GCultimasnotas.foundset.setSelectedIndex(forms.lst_GCultimasnotas.foundset.getSize());
	result = forms.lst_GCultimasnotas.foundset.selectRecord(uid);
	}
	
}

/**
 * @properties={typeid:24,uuid:"A669C547-A123-447D-B1EA-C82621D37986"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("eje_cfa asc, nup_cfa asc")
}

/**
 * @properties={typeid:24,uuid:"D7892912-AC1D-4445-8103-D5373D1C7A28"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('eje_cfa desc, nup_cfa desc')
}
