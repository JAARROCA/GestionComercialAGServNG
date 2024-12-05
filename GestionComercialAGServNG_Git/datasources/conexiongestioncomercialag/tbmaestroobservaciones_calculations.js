/**
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"00DC677E-9808-4C4A-B6F3-4B131BAA67A0"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar la Observación\n"' +
codigo+' - '+ descripcion+'" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"28081BC3-B0F1-487D-B20A-0E63093AB014"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Observacion)
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
 * @properties={typeid:36,uuid:"437079C6-BB50-4BE9-9073-EBBE73D4F600"}
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
