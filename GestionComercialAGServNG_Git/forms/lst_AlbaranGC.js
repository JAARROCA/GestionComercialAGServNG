/**
 * @properties={typeid:24,uuid:"9CF7CB70-03CF-4587-A0F2-09D2EDE628A3"}
 */
function btn_goRec()
{
	globals.GCcurID_Albaran = id
}

/**
 * @properties={typeid:24,uuid:"45E9F003-2204-4A1C-BEFD-0A76A445D535"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("cod_cal asc")
}

/**
 * @properties={typeid:24,uuid:"E036BF31-071D-4A6B-A57E-A33B3D38FA48"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('cod_cal desc')
}
