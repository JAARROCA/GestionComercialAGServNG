/**
 * @properties={type:8,typeid:36,uuid:"64CDDE41-FC5F-4CBB-8D05-95B4C3743353"}
 */
function ImpDtoPP()
{
	var impdto = null
	if(depp_cfa  && impbre_cfa) 
	{
		impdto = globals.GCROUND(depp_cfa * impbre_cfa * 0.01,2);
	}
	
	return impdto;
}

/**
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"9736DF47-DF38-4821-92F7-BDFB68DD2A06"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar la Factura Proforma\n"' +
eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa+'" ? ' +
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
 * @properties={typeid:36,uuid:"6922B372-B92A-43E5-BDFD-4BB8D84DC0D7"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_FacturaProforma)
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
 * @properties={typeid:36,uuid:"26A579D7-70FD-4F82-87FA-2D5D90CC77A1"}
 */
function list_display()
{
	if(eje_cfa && nup_cfa)
	{
		if(gctbfacturaproformacabecera_to_tbmaestroclientes)
		{
			if((eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa+' - '+gctbfacturaproformacabecera_to_tbmaestroclientes.desccliente).length > 29)
			{
				return (eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa+' - '+gctbfacturaproformacabecera_to_tbmaestroclientes.desccliente).substr(0,27) + '...'
			}
			else
			{
				return eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa+' - '+gctbfacturaproformacabecera_to_tbmaestroclientes.desccliente
			}
		}
		else
		{
			if((eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa).length > 29)
			{
				return (eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa).substr(0,27) + '...'
			}
			else
			{
				return eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa
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
 *
 * @properties={type:12,typeid:36,uuid:"6F1DC4F7-9FD6-49FC-A932-242652F76099"}
 */
function nFactura()
{
	if(eje_cfa && nup_cfa)
	{
		var Fra = eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa;	
		if(clie_cfa)
		{
			if(gctbfacturaproformacabecera_to_tbmaestroclientes)
			{
				Fra = Fra + ' - '+gctbfacturaproformacabecera_to_tbmaestroclientes.desccliente
			}
		}
	}
	else
	{
		Fra = null;
	}
	
	return 'FACTURA PROFORMA: '+Fra
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
*
*
 * @properties={typeid:36,uuid:"F4737448-12A5-45D2-9585-134C2E5F2D17"}
 */
function nFactura2()
{
	if(eje_cfa && nup_cfa)
	{
		var Fra = eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa;
	}
	else
	{
		Fra = null;
	}
	return Fra
}
