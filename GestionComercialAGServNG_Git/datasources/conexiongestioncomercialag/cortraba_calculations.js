/**
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"51CD6869-4532-4D31-B199-3E034C6D7202"}
 */
function delete_text()
{
	return '¿Estás seguro que deseas borrar el Pedido\n"' +
		utils.numberFormat(cod_cot,'00000').toString() + '" ? ' +
		'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"C42781AF-5365-49CA-BAAB-F52B00B6C9D8"}
 */
function icon_display()
{
	var top = '<html> <head></head> <body> <img border=0 src="media:///'
	
	if(id == globals.GCcurID_Pedido)
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
 * @properties={typeid:36,uuid:"35842DED-87A1-480C-B2DD-E66DB17403EB"}
 */
function list_display()
{
	if(cod_cot)
	{
		if(nomcl_cot)
		{
			if((utils.numberFormat(cod_cot,'00000')+' - '+nomcl_cot).length > 29)
			{
				return (utils.numberFormat(cod_cot,'00000')+' - '+nomcl_cot).substr(0,27) + '...'
			}
			else
			{
				return utils.numberFormat(cod_cot,'00000')+' - '+nomcl_cot
			}
		}
		else
		{
			if((utils.numberFormat(cod_cot,'00000')).length > 29)
			{
				return (utils.numberFormat(cod_cot,'00000')).substr(0,27) + '...'
			}
			else
			{
				return utils.numberFormat(cod_cot,'00000')
			}
		}
		
	}
	else
	{
		return "UNKNOWN"
	}
}
