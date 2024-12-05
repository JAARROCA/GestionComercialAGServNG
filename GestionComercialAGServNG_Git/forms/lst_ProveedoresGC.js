/**
 * @properties={typeid:24,uuid:"E9D73CB8-B4AE-425E-A0D5-0A78BA8C1CAC"}
 */
function btn_goRec()
{
	globals.GCcurID_Proveedor = id
}

/**
 * @properties={typeid:24,uuid:"2459176D-0521-4EC4-954A-E43BED071CB9"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("codpro asc")
}

/**
 * @properties={typeid:24,uuid:"92F784F0-3A52-4FC9-BE94-9665BBCA7918"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('codpro desc')
}
