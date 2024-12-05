/**
 * @properties={typeid:24,uuid:"6C0C1F1B-C568-46CC-A3C5-902FAFBF0C57"}
 */
function btn_goRec()
{
	globals.GCcurID_FacturaProforma = id
	
	
}

/**
 * @properties={typeid:24,uuid:"A359A852-C9E6-4A27-A076-8791964F98DE"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("eje_cfa asc, nup_cfa asc, ser_cfa asc")
}

/**
 * @properties={typeid:24,uuid:"D2D0487C-168F-44E2-AE33-ED8E7B06EBF5"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('eje_cfa desc, nup_cfa desc, ser_cfa desc')
}
