/**
 * @properties={typeid:24,uuid:"E638FF7A-F849-4F8F-B06D-9E25B4D404B5"}
 */
function btn_goRec()
{
	globals.GCcurID_PetOfertaCompra = npetoferta
}

/**
 * @properties={typeid:24,uuid:"A108B1A2-19E1-44E9-9AB4-70BE5230DF3D"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("npetoferta asc")
}

/**
 * @properties={typeid:24,uuid:"3F24432C-0AD9-4D5F-9B83-44659AA9FFD2"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('npetoferta desc')
}
