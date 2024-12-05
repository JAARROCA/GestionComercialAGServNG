/**
 * @properties={typeid:24,uuid:"8C30006B-03AD-40B7-859B-ED5876B92266"}
 */
function btn_goRec()
{
	globals.GCcurID_Agente = id
}

/**
 * @properties={typeid:24,uuid:"C0DC22E6-F59B-4B72-85A0-E47D2C9ABCB0"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("idagente asc")
}

/**
 * @properties={typeid:24,uuid:"652A7802-5AD7-41F7-847E-6607A8095075"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('idagente desc')
}
