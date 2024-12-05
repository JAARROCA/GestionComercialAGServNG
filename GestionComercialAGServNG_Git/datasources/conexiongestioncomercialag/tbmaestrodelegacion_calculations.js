/**
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"644F36AD-FB2E-455C-B646-7E43D164E686"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar la Delegación\n"' +
	idcliente + ' - '+desccliente+'" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"7B7703D4-2585-4FF5-A003-470E2EA7AA48"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Delegacion)
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
 * @properties={typeid:36,uuid:"04DFCE99-0BB0-4205-B8AC-076D932499BD"}
 */
function list_display()
{
	if(idcliente || idcliente == 0)
	{
		if((idcliente+' - '+ desccliente).length > 29)
		{
			return (idcliente+' - '+ desccliente).substr(0,27) + '...'
		}
		else
		{
			return idcliente+' - '+ desccliente
		}
	}
	else
	{
		return "UNKNOWN"
	}
}
