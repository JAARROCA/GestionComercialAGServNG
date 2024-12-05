/**
 * @properties={typeid:24,uuid:"949DCBA2-56A5-4909-8514-D74CA058E01A"}
 */
function btn_goRec()
{
	globals.GCcurID_FormaPago = id
}

/**
 * @properties={typeid:24,uuid:"D91EC583-56C6-4A70-BCFA-72F60A9E0CE9"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("codig_fp asc")
}

/**
 * @properties={typeid:24,uuid:"FFF51E1A-9A1B-49B9-A601-5A2454A93A4C"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('codig_fp desc')
}
