/**
 * @properties={typeid:24,uuid:"E9B4266B-E838-4185-BB00-ECE38AC2D048"}
 */
function btn_goRec()
{
	globals.GCcurID_FormaPago = id
}

/**
 * @properties={typeid:24,uuid:"ADF08913-6C57-4AE1-A747-9EA8DAE03DDC"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("codig_fp asc")
}

/**
 * @properties={typeid:24,uuid:"8872ECA6-41D1-4663-9923-C677FB0EA212"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('codig_fp desc')
}
