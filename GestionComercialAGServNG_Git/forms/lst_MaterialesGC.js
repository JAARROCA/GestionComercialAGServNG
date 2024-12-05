/**
 * @properties={typeid:24,uuid:"897DE1A0-CEFA-4178-91E8-CD4AF9A8C66D"}
 */
function btn_goRec()
{
	globals.GCcurID_Material = id
}

/**
 * @properties={typeid:24,uuid:"0B972686-B542-4618-882D-B3F061AD92DF"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("codigo asc")
}

/**
 * @properties={typeid:24,uuid:"AA1309FF-A0C1-40BE-BD3B-5B4CDC316AA7"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('codigo desc')
}
