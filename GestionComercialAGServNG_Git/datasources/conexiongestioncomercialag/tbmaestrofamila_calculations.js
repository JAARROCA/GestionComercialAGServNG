/**
 *
 *
 *
 * @properties={typeid:36,uuid:"5A035376-CC0F-4964-B44C-FD2A1135F1DC"}
 */
function delete_text()
{
return '¿Estás seguro que quieres borrar la Familia \n"' +
	descfamilia + '"? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 * @properties={typeid:36,uuid:"12DB02C9-03A6-4546-BC69-5575F7FBD2AF"}
 */
function icon_display()
{
var top = '<html> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Familia)
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
 * @properties={typeid:36,uuid:"3EA17DF5-EA16-417E-B136-F79B8B487A5F"}
 */
function list_display()
{
if(idfamilia && descfamilia)
{
	if(idfamilia+' - '+descfamilia.length > 29)
	{
		return (idfamilia+' - '+descfamilia).substr(0,27) + '...'
	}
	else
	{
		return idfamilia+' - '+descfamilia
	}
}
else
{
	return "UNKNOWN"
}
}
