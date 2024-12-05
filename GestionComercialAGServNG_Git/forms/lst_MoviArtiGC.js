/**
 * @properties={typeid:24,uuid:"6A4D63FF-2026-4D16-AED7-D5485BFD1F60"}
 */
function btn_goRec()
{
	globals.GCcurID_MovArti = id
}

/**
 * @properties={typeid:24,uuid:"7E0A9295-3BB9-423B-BD5C-ACE966F58DDC"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("fecha_ms asc,cod_ms asc")
}

/**
 * @properties={typeid:24,uuid:"E36875BA-3CE2-4356-BC97-00AE27005E9B"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('fecha_ms desc,cod_ms asc')
}
