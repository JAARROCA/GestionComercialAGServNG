/**
 * @properties={typeid:24,uuid:"EB69992B-D3FE-41F0-A49A-F96C10FDE587"}
 */
function btn_goRec()
{
	globals.GCcurID_CobrosPagos = id
}

/**
 * @properties={typeid:24,uuid:"34F1AAC0-9B0B-4E0C-8255-37499AA6F968"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("fechavencimiento asc, cuentacontable asc,fecharemesa asc")
}

/**
 * @properties={typeid:24,uuid:"79CF9FFD-A614-4B84-88C4-6EDC9D2CD673"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('fechavencimiento desc, cuentacontable desc,fecharemesa desc')
}
