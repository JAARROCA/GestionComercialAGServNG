/**
 *
 *
 *
 * @properties={typeid:36,uuid:"9437C41F-3032-4B27-A1E4-5A8EB5855635"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar el Cliente\n"' +
	codpro + ' - '+descproveedor+'" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 * @properties={typeid:36,uuid:"F236086A-3674-408B-BBCC-93217F49BCAE"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Proveedor)
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
 * @properties={typeid:36,uuid:"5E86CE3B-2F2E-4E7A-8184-1251B8BD4DE1"}
 */
function list_display()
{
if(codpro || codpro == 0)
{
	if((codpro+' - '+ descproveedor).length > 29)
	{
		return (codpro+' - '+ descproveedor).substr(0,27) + '...'
	}
	else
	{
		return codpro+' - '+ descproveedor
	}
}
else
{
	return "UNKNOWN"
}
}
