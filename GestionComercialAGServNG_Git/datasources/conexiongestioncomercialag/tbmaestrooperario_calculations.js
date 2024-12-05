/**
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"66FB6896-FC99-43F1-8896-AA1EF067C4AD"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar el Operario\n"' +
	nombre + ' '+apellido1+ ' '+apellido2+'" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"069CB777-1CEC-4930-B6D1-A8546EB17A27"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Operario)
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
 * @properties={typeid:36,uuid:"1051E7A3-93F4-46D9-81AB-15D227CA910B"}
 */
function list_display()
{
	if(idoperario)
	{
		if((nombre+' '+ apellido1+' '+apellido2).length > 29)
		{
			return (nombre+' '+ apellido1+' '+apellido2).substr(0,27) + '...'
		}
		else
		{
			return nombre+' '+ apellido1+' '+apellido2
		}
	}
	else
	{
		return "UNKNOWN"
	}
}
