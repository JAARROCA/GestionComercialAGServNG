/**
 * @properties={typeid:24,uuid:"FA53C5F4-162C-47A1-BD05-4285A6330E9C"}
 */
function btn_goRec()
{
	globals.GCcurID_Pedido = id
}

/**
 * @properties={typeid:24,uuid:"402551F2-677C-4F11-BE58-17A3EAEB143A"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("cod_cot asc")
}

/**
 * @properties={typeid:24,uuid:"FDB23D0A-862C-4432-B480-BDDF9075B6E4"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('cod_cot desc')
}
