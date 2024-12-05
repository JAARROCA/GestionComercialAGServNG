/**
 * @properties={typeid:24,uuid:"4E01D259-D34E-4246-85AF-7AF93AA2A86E"}
 */
function btn_goRec()
{
	globals.GCcurID_Cliente = id
}

/**
 * @properties={typeid:24,uuid:"BF1801FA-EE4A-4141-9915-2EA905156C32"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("idcliente asc")
}

/**
 * @properties={typeid:24,uuid:"E27DB377-BAE2-47EA-A312-E70AD4EC08EA"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('idcliente desc')
}
