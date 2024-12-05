/**
 * @properties={typeid:24,uuid:"21ACE26E-F271-4B07-86F3-4DFB3A9A0141"}
 */
function btn_goRec()
{
	globals.GCcurID_Operario = id
}

/**
 * @properties={typeid:24,uuid:"C471DF5A-4AE9-4E5A-A978-52B5378A8368"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("nombre asc, apellido1 asc, apellido2 asc")
}

/**
 * @properties={typeid:24,uuid:"1CEFD771-CB64-4C8E-9640-8570210EA936"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('nombre desc, apellido1 desc, apellido2 desc')
}
