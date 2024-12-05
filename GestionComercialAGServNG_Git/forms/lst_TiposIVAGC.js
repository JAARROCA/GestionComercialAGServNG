/**
 * @properties={typeid:24,uuid:"851E4646-F40C-42EC-A185-71CA5A4191AB"}
 */
function btn_goRec()
{
	globals.GCcurID_TipoIva = id
}

/**
 * @properties={typeid:24,uuid:"469062A5-BC37-498F-993C-0AEEA715817B"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("factor asc")
}

/**
 * @properties={typeid:24,uuid:"A90456CA-EC7A-4A5C-B682-A17540EB8ABB"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('factor desc')
}
