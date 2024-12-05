/**
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"FCC67696-9B48-4E58-AABB-77DD3D40C70D"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar el Albarán\n"' +
	nup_ap + ' del Proveedor "'+GCalbapro_to_tbmaestroproveedores.descproveedor+' ? ' +
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
 * @properties={typeid:36,uuid:"588BB238-C4EE-45E7-8A5C-FFAA9FEDA95E"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_AlbaranCompra)
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
 * @properties={typeid:36,uuid:"C013F1AB-E29C-4038-996C-24F9F06ABFB9"}
 */
function list_display()
{
	if(pro_ap && nup_ap)
	{
		if(GCalbapro_to_tbmaestroproveedores)
		{
			if((nup_ap+' - '+GCalbapro_to_tbmaestroproveedores.descproveedor).length > 29)
			{
				return (nup_ap+' - '+GCalbapro_to_tbmaestroproveedores.descproveedor).substr(0,27) + '...'
			}
			else
			{
				return nup_ap+' - '+GCalbapro_to_tbmaestroproveedores.descproveedor
			}
		}
		else
		{
			if((nup_ap).length > 29)
			{
				return (nup_ap).substr(0,27) + '...'
			}
			else
			{
				return nup_ap
			}
		}
	}
	else
	{
		return "UNKNOWN"
	}

}
