/**
 * @properties={typeid:24,uuid:"63861A76-8C43-4ED0-B227-A965F896A6A8"}
 */
function btn_goRec()
{
	globals.GCcurID_FacturaCompras = pro_cfca+'/'+nup_cfca
}

/**
 * @properties={typeid:24,uuid:"95649624-733E-47AF-BCA3-908759FC6B92"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("fecha_cfca asc, pro_cfca asc, nup_cfca asc")
}

/**
 * @properties={typeid:24,uuid:"1E5624E8-07F5-4222-A529-E52837208DF1"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('fecha_cfca desc, pro_cfca desc, nup_cfca desc')
}
