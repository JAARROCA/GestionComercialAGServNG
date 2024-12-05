/**
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"A91E8FD0-848C-4A5F-BA11-FCE67FAD4257"}
 */
function delete_text()
{
return '¿Estás seguro que quieres borrar el tipo de IVA \n"' +
	desctipoiva + '"? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"A3B2199B-D655-4519-B5A9-03570F25B97A"}
 */
function icon_display()
{
var top = '<html> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_TipoIva)
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
 * @properties={typeid:36,uuid:"6EEE7551-36F3-46BA-BD39-0707F5836851"}
 */
function list_display()
{
	if(factor || factor == 0.00 && desctipoiva)
	{
		if((utils.numberFormat(factor,'#0.00')+' %'+' - '+desctipoiva).length > 29)
		{
			return (utils.numberFormat(factor,'#0.00')+' %'+' - '+desctipoiva).substr(0,27) + '...'
		}
		else
		{
			return utils.numberFormat(factor,'#0.00')+' %'+' - '+desctipoiva
		}
	}
	else
	{
		return "UNKNOWN"
	}
}
