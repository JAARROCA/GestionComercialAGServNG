/**
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"1598D7DA-F206-48A3-B64D-1092FF619C64"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar la Petición de Oferta\n"' +
	utils.numberFormat(npetoferta,'00000').toString() + '" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"3B0189E8-98A4-4D61-99DB-E4EA3FD06326"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

	if(npetoferta == globals.GCcurID_PetOfertaCompra)
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
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"332F61A5-E670-48CE-A0F6-E19D9C414AA4"}
 */
function list_display()
{
if(npetoferta)
{
	if((utils.numberFormat(npetoferta,'00000').toString()).length > 29)
	{
		return (utils.numberFormat(npetoferta,'00000').toString()).substr(0,27) + '...'
	}
	else
	{
		return utils.numberFormat(npetoferta,'00000').toString()
	}
}
else
{
	return "UNKNOWN"
}
}
