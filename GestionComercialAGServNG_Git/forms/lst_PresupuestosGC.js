/**
 * @properties={typeid:24,uuid:"03C2B4CC-6088-4069-9D9D-404F99BBD898"}
 */
function btn_goRec()
{
	globals.GCcurID_Presupuesto = id
}

/**
 * @properties={typeid:24,uuid:"559E426C-7466-4BCC-9CB0-AD338BF87515"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("cod_cof asc")
}

/**
 * @properties={typeid:24,uuid:"71432EAB-530F-49E6-A8FA-39A456707810"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('cod_cof desc')
}
