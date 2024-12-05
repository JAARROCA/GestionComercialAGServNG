/**
 * @properties={typeid:24,uuid:"A22C0893-74C4-427F-8B06-174C0D4E08FC"}
 */
function btn_goRec()
{
	globals.GCcurID_Observacion = id
}

/**
 * @properties={typeid:24,uuid:"353C0207-BD3A-4499-98BE-CDC3899DB48A"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("codigo asc")
}

/**
 * @properties={typeid:24,uuid:"94B91CE1-89E8-4563-B2FF-E503ED1E24C7"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('codigo desc')
}
