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
 * @properties={typeid:36,uuid:"EC0CBBA3-E6A1-4208-BFCB-CFD6B381B11A"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar la Nota\n"' +
eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+'" ? ' +
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
 *
 *
 * @properties={typeid:36,uuid:"CAE4EB51-36E4-4A15-8A5D-8563F126F09F"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Nota)
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
 * @properties={typeid:36,uuid:"3D37E940-3BCD-43FD-A1E5-5052328A7941"}
 */
function list_display()
{
	if(eje_cfa && nup_cfa)
	{
		if(descclie_cfa)
		{
			if((eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+' - '+descclie_cfa).length > 29)
			{
				return (eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+' - '+descclie_cfa).substr(0,27) + '...'
			}
			else
			{
				return eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+' - '+descclie_cfa
			}
		}
		else
		{
			if((eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()).length > 29)
			{
				return (eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()).substr(0,27) + '...'
			}
			else
			{
				return eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()
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
 * @properties={typeid:36,uuid:"F4D1EE01-01C1-4C46-9045-1F35FFCACD34"}
 */
function nNota()
{
	if(eje_cfa && nup_cfa)
	{
		var Fra = eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString();
		if(descclie_cfa)
		{
			Fra = Fra + ' - '+descclie_cfa		
		}
	}
	else
	{
		Fra = null;
	}
	return 'NOTA: '+Fra
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
 * @properties={typeid:36,uuid:"F67ADC93-D08B-475C-9B7A-6C0A4475D3BE"}
 */
function nNota2()
{
	if(eje_cfa && nup_cfa)
	{
		var Nota = eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString();
		/*if(descclie_cfa)
		{
			Nota = Nota + ' - '+descclie_cfa		
		}*/
	}
	else
	{
		Nota = null;
	}
	return Nota
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
*
 * @properties={typeid:36,uuid:"C9D9380A-6D33-459E-A7F5-5A049ED2CE9B"}
 */
function SituacionCobro()
{
	if(situcobrado == 'C')
	{
		var Resp = 'SI';
	}
	else
	{
		Resp = 'NO';
	}
	return Resp
}
