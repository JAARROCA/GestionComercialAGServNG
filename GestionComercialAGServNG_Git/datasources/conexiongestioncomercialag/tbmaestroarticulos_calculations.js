/**
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"BB7AB2DF-2F42-4B95-B28D-463115BCA792"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar el Artículo\n"' +
	codigo + ' - '+descripcion+'" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"62A0B11B-6B90-4430-8AE7-E4D66F7960C8"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Articulo)
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
 * @properties={typeid:36,uuid:"BE3FBF6F-840B-4463-AE83-141BB03B4A52"}
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
