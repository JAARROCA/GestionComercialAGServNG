/**
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"E6DD06CE-9281-4478-B326-640D82E4AA26"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar el Material\n"' +
	codigo + ' - '+descripcion+'" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"2BF3A132-A0B6-465B-BD60-75F157407509"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Material)
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
 * @properties={typeid:36,uuid:"E01FDF6B-F598-47EF-8165-ACC24BB780E7"}
 */
function list_display()
{
if(codigo)
{
	if((codigo+' - '+ descripcion).length > 29)
	{
		return (codigo+' - '+ descripcion).substr(0,27) + '...'
	}
	else
	{
		return codigo+' - '+ descripcion
	}
}
else
{
	return "UNKNOWN"
}
}
