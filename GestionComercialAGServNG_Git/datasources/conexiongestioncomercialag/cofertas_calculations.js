/**
 *
 * @properties={typeid:36,uuid:"FEC1D597-8251-4AD9-B522-98A922960350"}
 */
function Situacion()
{
	if(situ_cof == 'A')
	{
		var Resp = 'ACEPTADO';
	}
	else if(situ_cof == null || situ_cof == '')
	{
		Resp = 'PENDIENTE';
	}
	else if(situ_cof == 'F')
	{
		Resp = 'FACTURADO';
	}
	else
	{
		Resp = 'NO ACEPTADO';
	}
	return Resp
}

/**
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"00C06306-F84E-4276-91AE-3355CAC5C2EE"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar el Presupuesto\n"' +
	utils.numberFormat(cod_cof,'00000').toString() + '" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"05B53A86-1217-45AA-A8CB-95741575A160"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Presupuesto)
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
 * @properties={typeid:36,uuid:"90C9AE9D-9DE2-41D3-B69B-1A9B8BE1BF8F"}
 */
function list_display()
{
if(cod_cof)
{
	if(nomcl_cof)
	{
		if((utils.numberFormat(cod_cof,'00000')+' - '+nomcl_cof).length > 29)
		{
			return (utils.numberFormat(cod_cof,'00000')+' - '+nomcl_cof).substr(0,27) + '...'
		}
		else
		{
			return utils.numberFormat(cod_cof,'00000')+' - '+nomcl_cof
		}
	}
	else
	{
		if((utils.numberFormat(cod_cof,'00000')).length > 29)
		{
			return (utils.numberFormat(cod_cof,'00000')).substr(0,27) + '...'
		}
		else
		{
			return utils.numberFormat(cod_cof,'00000')
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
*
*
*
*
*
*
*
 * @properties={typeid:36,uuid:"F3B42827-260D-47E4-9144-DE192A1F5728"}
 */
function list_display2()
{
	if(cod_cof)
	{
		if(nomcl_cof)
		{			
				return utils.numberFormat(cod_cof,'00000')+' | '+nomcl_cof+' | '+utils.dateFormat(fecha_cof,'dd-MM-yyyy')+
				' | '+utils.numberFormat(impnee_cof,'###,###,##0.00¤')
				/*return globals.PreparaLinea(eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa,8,'Left')+' | '+
						globals.PreparaLinea(GCtbfacturacabecera_to_tbmaestroclientes.desccliente,80,'Left')+' | '+
						globals.PreparaLinea(utils.dateFormat(fecha_cfa,'dd-MM-yyyy'),10,'Left')+' | '+
						globals.PreparaLinea(utils.numberFormat(impnee_cfa,'###,###,##0.00¤'),15,'Left')
				*/
		}
		else
		{
			return utils.numberFormat(cod_cof,'00000')+' | '
			
		}
	}
	else
	{
		return null
	}
}
