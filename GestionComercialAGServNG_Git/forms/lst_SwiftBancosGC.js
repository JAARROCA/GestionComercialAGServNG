/**
 * @properties={typeid:24,uuid:"50DAB8CD-881B-4BE4-9517-3CA0E5F6B44D"}
 */
function btn_goRec()
{
	globals.GCcurID_SWIFTBancos = id
}

/**
 * @properties={typeid:24,uuid:"9DC5A611-D5BB-4326-9F7F-486D877FE458"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("nombrebanco asc")
}

/**
 * @properties={typeid:24,uuid:"5EAE3937-C28E-4289-A89D-A37F07453AA9"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('nombrebanco desc')
}
