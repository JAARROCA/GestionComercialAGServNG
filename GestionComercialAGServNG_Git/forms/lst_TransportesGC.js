/**
 * @properties={typeid:24,uuid:"C7276FCA-F829-4724-B2D4-7DE25167656B"}
 */
function btn_goRec()
{
	globals.GCcurID_Transportista = id
}

/**
 * @properties={typeid:24,uuid:"6C076F94-EEDB-46B9-B6CA-A4B786AA7243"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("idtransportista asc")
}

/**
 * @properties={typeid:24,uuid:"9F07691E-BD80-4DDA-BDCE-8437B479294A"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('idtransportista desc')
}
