/**
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"B463FEAC-3267-4896-BE30-4DD37034D1ED"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar el Pedido de Compra\n"' +
	utils.numberFormat(npedido,'00000').toString() + '" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"43CE1AE1-659A-4361-8C7F-A919A8DF841B"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

	if(npedido == globals.GCcurID_PedidoCompra)
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
 *
 * @properties={typeid:36,uuid:"23906847-11E3-4212-9ABC-8C3C6138D094"}
 */
function list_display()
{
	if(npedido)
	{
		if(GCtbpedidocompracabecera_to_tbmaestroproveedores)
		{
			if((utils.numberFormat(npedido,'00000')+' - '+GCtbpedidocompracabecera_to_tbmaestroproveedores.descproveedor).length > 29)
			{
				return (utils.numberFormat(npedido,'00000')+' - '+GCtbpedidocompracabecera_to_tbmaestroproveedores.descproveedor).substr(0,27) + '...'
			}
			else
			{
				return utils.numberFormat(npedido,'00000')+' - '+GCtbpedidocompracabecera_to_tbmaestroproveedores.descproveedor
			}
		}
		else
		{
			if((utils.numberFormat(npedido,'00000')).length > 29)
			{
				return (utils.numberFormat(npedido,'00000')).substr(0,27) + '...'
			}
			else
			{
				return utils.numberFormat(npedido,'00000')
			}
		}
	}
	else
	{
		return "UNKNOWN"
	}
}
