/**
 *
 *
 * @properties={type:12,typeid:36,uuid:"581645CC-5D5C-4EA6-85B7-D9559866C548"}
 */
function BarraAlbaran()
{
	var Caracter;
	if(nalb_lfa != null && nalb_lfa != '')
	{
		Caracter = '/';
	}
	else
	{
		Caracter = null;
	}
	return Caracter;
}

/**
*
*
 *
 * @properties={type:12,typeid:36,uuid:"200B4E36-F91F-4007-88E4-320EE2033FB6"}
 */
function Nota()
{
	return eje_lfa.toString()+utils.numberFormat(nup_lfa,'00000').toString();
}
