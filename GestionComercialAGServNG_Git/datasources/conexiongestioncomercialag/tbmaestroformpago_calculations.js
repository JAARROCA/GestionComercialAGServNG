/**
 *
 *
 * @properties={typeid:36,uuid:"9BCC9EF7-1FDE-46BA-AFDC-1DBD9D5B5D7B"}
 */
function delete_text()
{
return '¿Estás seguro que quieres borrar la Forma de Pago \n"' +
	denom_fp + '"? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 * @properties={typeid:36,uuid:"8B73433C-800D-4F45-AB86-BCDAC0957408"}
 */
function icon_display()
{
var top = '<html> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_FormaPago)
{
	return top + 'nav_right_red_whiteBg.gif"> </body> </html>'
}
else
{
	return top + 'greyNav_right.gif"> </body> </html>'
}
}

/**
 *
 *
 * @properties={typeid:36,uuid:"0C7E4935-C064-4E5E-B1DF-677816D6F086"}
 */
function list_display()
{
if(codig_fp && denom_fp)
{
	if(codig_fp+' - '+denom_fp.length > 29)
	{
		return (codig_fp+' - '+denom_fp).substr(0,27) + '...'
	}
	else
	{
		return codig_fp+' - '+denom_fp
	}
}
else
{
	return "UNKNOWN"
}
}
