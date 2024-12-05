/**
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"3149E098-26FB-45AA-BCD8-FAEC54021BAE"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar el Representante\n"' +
	idagente + ' - '+descagente+'" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"A2009600-BCA1-40BD-ACD5-EC9FFBAFFD64"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Agente)
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
 * @properties={typeid:36,uuid:"D4C7F462-A416-4D67-AE82-1E3571E0F1F7"}
 */
function list_display()
{
	if(idagente)
	{
		if((idagente+' - '+ descagente).length > 29)
		{
			return (idagente+' - '+ descagente).substr(0,27) + '...'
		}
		else
		{
			return idagente+' - '+ descagente
		}
	}
	else
	{
		return "UNKNOWN"
	}
}
