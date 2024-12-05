/**
 *
 *
 *
 * @properties={typeid:36,uuid:"CEA9BA83-FEC1-4DD5-8D5C-2CAD963FC590"}
 */
function delete_text()
{
return '¿Estás seguro que quieres borrar el SWIFT/BIC del Banco \n"' +
	nombrebanco + '"? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 * @properties={typeid:36,uuid:"C51A2B77-2314-4550-89A7-DE0FEDFA0537"}
 */
function icon_display()
{
var top = '<html> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_SWIFTBancos)
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
 * @properties={typeid:36,uuid:"81AD99F3-E18F-4F86-9E15-B8A2CB0F263F"}
 */
function list_display()
{
if(idbanco && nombrebanco)
{
	if((/*idbanco+' - '+*/nombrebanco).length > 29)
	{
		return (/*idbanco+' - '+*/nombrebanco).substr(0,27) + '...'
	}
	else
	{
		return /*idbanco+' - '+*/nombrebanco
	}
}
else
{
	return "UNKNOWN"
}
}
