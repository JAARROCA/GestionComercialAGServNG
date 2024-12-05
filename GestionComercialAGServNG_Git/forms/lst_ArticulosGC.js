/**
 * @properties={typeid:24,uuid:"509A4E46-0846-450F-8908-DCEFF5B09A84"}
 */
function btn_goRec()
{
	globals.GCcurID_Articulo = id
}

/**
 * @properties={typeid:24,uuid:"B3339554-F628-42C3-B94E-0BF8AB2D3276"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("codigo asc")
}

/**
 * @properties={typeid:24,uuid:"0FE23DA7-0D3D-4FFA-A9F2-B9EF97B59F6E"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('codigo desc')
}
