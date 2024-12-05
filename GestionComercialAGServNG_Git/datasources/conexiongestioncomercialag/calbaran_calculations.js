/**
 * @properties={type:12,typeid:36,uuid:"339D2792-8B25-49CF-AC74-621E750B1BB9"}
 */
function sit()
{
	if(GCcalbaran_to_lalbaran && albaranlineasfacturadas){
		var size = GCcalbaran_to_lalbaran.getSize()
		application.output(size)
		var sizeFact = albaranlineasfacturadas.getSize()
		application.output(sizeFact)
		
		var lbl = '';
		if(size > 0 && size == sizeFact){
			lbl = 'FACTURADO'
		}
		else if(size > 0 && sizeFact > 0){
			lbl = 'PARCIALMENTE FACTURADO'
		}
		else{
			lbl = 'NO FACTURADO'
		}
		return lbl;
	}
	else return null
}

/**
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"52BFC249-DD51-4BC3-8EE3-40EF4B205102"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar el Albarán\n"' +
	utils.numberFormat(cod_cal,'00000').toString() + '" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"CCC01CFA-2101-4DAC-8641-2EB7A1DB91E5"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Albaran)
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
 * @properties={typeid:36,uuid:"D673183D-56B6-4A50-BBB5-727A2005D85B"}
 */
function list_display()
{
if(cod_cal)
{
	if(nomcl_cal)
	{
		if((utils.numberFormat(cod_cal,'00000')+' - '+nomcl_cal).length > 29)
		{
			return (utils.numberFormat(cod_cal,'00000')+' - '+nomcl_cal).substr(0,27) + '...'
		}
		else
		{
			return utils.numberFormat(cod_cal,'00000')+' - '+nomcl_cal
		}
	}
	else
	{
		if((utils.numberFormat(cod_cal,'00000')).length > 29)
		{
			return (utils.numberFormat(cod_cal,'00000')).substr(0,27) + '...'
		}
		else
		{
			return utils.numberFormat(cod_cal,'00000')
		}
	}
}
else
{
	return "UNKNOWN"
}
}
