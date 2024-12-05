/**
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"3CAD4F5C-020D-4FA2-8CA7-E9EDC73F6FBF"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar la Unidad de Medida\n"' +
	unidade_id + ' - '+desc_uni+'" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"C1CB4C09-2E98-4B01-9BB2-55346AEA3730"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(unidade_id == globals.GCcurID_UnidMedida)
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
 * @properties={typeid:36,uuid:"75D94C21-3DA9-4049-8E81-AE0B0D7E664E"}
 */
function list_display()
{
	if(unidade_id)
	{
		if(desc_uni)
		{
			if((unidade_id+' - '+ desc_uni).length > 29)
			{
				return (unidade_id+' - '+ desc_uni).substr(0,27) + '...'
			}
			else
			{
				return unidade_id+' - '+ desc_uni
			}
		}
		else
		{
			if(unidade_id.length > 29)
			{
				return unidade_id.substr(0,27) + '...'
			}
			else
			{
				return unidade_id
			}
		}
	}
	else
	{
		return "UNKNOWN"
	}
}
