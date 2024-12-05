/**
 * @properties={typeid:24,uuid:"F85BCC34-62C4-47FD-81F1-809CB3445150"}
 */
function btn_goRec()
{
	globals.GCcurID_UnidMedida = unidade_id
}

/**
 * @properties={typeid:24,uuid:"747CA773-3B96-4C12-A8D0-875E6017621E"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("unidade_id asc")
}

/**
 * @properties={typeid:24,uuid:"F213F5EF-2465-475E-9381-4D385D2F320D"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('unidade_id desc')
}
