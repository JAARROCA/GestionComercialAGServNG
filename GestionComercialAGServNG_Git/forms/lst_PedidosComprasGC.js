/**
 * @properties={typeid:24,uuid:"7979182C-9CFE-4E09-80F3-5A8C321DFDC8"}
 */
function btn_goRec()
{
	globals.GCcurID_PedidoCompra = npedido
}

/**
 * @properties={typeid:24,uuid:"1BAB0EAC-D17D-4D09-BE93-E6D03186F772"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("npedido asc")
}

/**
 * @properties={typeid:24,uuid:"DEBFBD36-6B07-4201-9D80-1FF1E95530DB"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('npedido desc')
}
