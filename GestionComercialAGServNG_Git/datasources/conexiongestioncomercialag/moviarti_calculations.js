/**
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"B028B866-0B35-4CF7-A650-1F680D480332"}
 */
function delete_text()
{
	return '¿Estás seguro que deseas borrar este movimiento del Artículo\n"' +
		cod_ms + ' - '+moviarti_to_tbmaestroarticulos.descripcion+'" ? ' +
		'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"5AFD2E23-63FB-4D0E-901A-5F811B2F3DBB"}
 */
function icon_display()
{
	var top = '<html> <head></head> <body> <img border=0 src="media:///'
	
	if(id == globals.GCcurID_MovArti)
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
 * @properties={typeid:36,uuid:"E8CCA2A8-B4B1-489C-8C2B-4E293FBFEEC7"}
 */
function list_display()
{
	if(fecha_ms && cod_ms)
	{
		if(moviarti_to_tbmaestroarticulos)
		{
			if((utils.dateFormat(fecha_ms,'dd-MM-yyyy') + ' | '+ moviarti_to_tbmaestroarticulos.descripcion).length > 29)
			{
				return (utils.dateFormat(fecha_ms,'dd-MM-yyyy') + ' | '+ moviarti_to_tbmaestroarticulos.descripcion).substr(0,27) + '...'
			}
			else
			{
				return utils.dateFormat(fecha_ms,'dd-MM-yyyy') + ' | '+ moviarti_to_tbmaestroarticulos.descripcion
			}
		}
		else
		{
			if((utils.dateFormat(fecha_ms,'dd-MM-yyyy')).length > 29)
			{
				return (utils.dateFormat(fecha_ms,'dd-MM-yyyy')).substr(0,27) + '...'
			}
			else
			{
				return utils.dateFormat(fecha_ms,'dd-MM-yyyy')
			}
		}
	}
	else
	{
		return "UNKNOWN"
	}
}

/**
 *
 * @properties={type:12,typeid:36,uuid:"3576AD79-CE47-434B-A357-0A309004BD98"}
 */
function TipoMovimiento()
{
	var resp = '';
	if(!tipo_ms) resp = null
	else if(tipo_ms == 'I') resp = 'INVENTARIO'
	else if(tipo_ms == 'S') resp = 'SALIDA'
	else if(tipo_ms == 'E') resp = 'ENTRADA'
	return resp;
}
