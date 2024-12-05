/**
 * @properties={typeid:24,uuid:"5AB00E33-5FDA-4A0A-AE22-B1157ED5EB68"}
 */
function btn_goRec()
{
	globals.GCcurID_AlbaranCompra = id
}

/**
 * @properties={typeid:24,uuid:"1378947E-3358-45D3-9582-B75BD7C36AA5"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("pro_ap asc, nup_ap asc")
}

/**
 * @properties={typeid:24,uuid:"294A78A9-F96E-4943-B4ED-529EAB1FA97C"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('pro_ap desc, nup_ap desc')
}
