/**
 * @properties={typeid:24,uuid:"A57E30F0-4F62-48A5-A3E2-09178D535008"}
 */
function btn_goRec()
{
	globals.GCcurID_Familia = id
}

/**
 * @properties={typeid:24,uuid:"4AE04223-BC34-44F6-87E6-E8311152C17B"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("idfamilia asc")
}

/**
 * @properties={typeid:24,uuid:"6839DC82-EA89-4346-9255-9A2AE18D8A73"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('idfamilia desc')
}
