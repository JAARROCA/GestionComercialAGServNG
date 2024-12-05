/**
 * @properties={typeid:24,uuid:"E0B1AB0F-450A-46DE-873C-33758D0F91CC"}
 */
function btn_goRec()
{
	globals.GCcurID_Cliente = id
}

/**
 * @properties={typeid:24,uuid:"8B65A97C-7EAE-4FD1-9DAE-A9B157F4152B"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("idcliente asc")
}

/**
 * @properties={typeid:24,uuid:"91172D60-038E-4BB4-A53D-1A7B4EB6F9C1"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('idcliente desc')
}
