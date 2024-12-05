/**
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"B7F2D155-8EA0-47BD-8259-A7BFC6932DE7"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar el Transportista\n"' +
	idtransportista + ' - '+razonsocial+'" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"3ED9BF66-9481-4DED-9FAB-44856B1697F4"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Transportista)
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
 * @properties={typeid:36,uuid:"4DA3765E-E569-49C4-A3F5-A299FC7859FB"}
 */
function list_display()
{
	if(idtransportista)
	{
		if(razonsocial)
		{
			if((idtransportista+' - '+ razonsocial).length > 29)
			{
				return (idtransportista+' - '+ razonsocial).substr(0,27) + '...'
			}
			else
			{
				return idtransportista+' - '+ razonsocial
			}
		}
		else
		{
			if(idtransportista.length > 29)
			{
				return idtransportista.substr(0,27) + '...'
			}
			else
			{
				return idtransportista
			}
		}
	}
	else
	{
		return "UNKNOWN"
	}
}
