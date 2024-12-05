/**
 * @properties={type:12,typeid:36,uuid:"96E56621-565E-4D77-AD19-099AFA6BF044"}
 */
function desccuenta()
{
	if(cobropago == 1)
	{
		return gcccobrospagos_to_tbmaestroclientes.desccliente
	}
	else{
		return gcccobrospagos_to_tbmaestroproveedores.descproveedor
	}
	
}

/**
 *
 * @properties={typeid:36,uuid:"F386206C-6660-41D3-80EC-0285E9A5A7DB"}
 */
function fechaformato()
{
	return utils.dateFormat(fechavencimiento,'dd-MM-yyyy');
}

/**
 *
 *
 *
 * @properties={typeid:36,uuid:"51FCA2A3-037B-49B6-AE8F-CC3AAC47344D"}
 */
function delete_text()
{
	if(cobropago == 1)
	{
		return '¿Estás seguro que deseas borrar el Cobro/Pago\n"' +
			 cuentacontable + '" - "'+ gcccobrospagos_to_tbmaestroclientes.desccliente + '" ? ' +
			'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
	}
	else
	{
		return '¿Estás seguro que deseas borrar el Cobro/Pago\n"' +
		 cuentacontable + '" - "'+ gcccobrospagos_to_tbmaestroproveedores.descproveedor + '" ? ' +
		'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
	}
}

/**
 *
 *
 *
 * @properties={typeid:36,uuid:"800AF54D-61D9-4DCB-9663-111899F86F8C"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_CobrosPagos)
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
 * @properties={typeid:36,uuid:"E1EBA589-4A18-49BA-8115-B37D9A6A07BA"}
 */
function list_display()
{
	if(fechavencimiento && cuentacontable)
	{
		if(cobropago == 1)
		{
			if((cuentacontable + ' - ' + gcccobrospagos_to_tbmaestroclientes.desccliente).length > 29)
			{
				return (cuentacontable + ' - ' + gcccobrospagos_to_tbmaestroclientes.desccliente).substr(0,27) + '...'
			}
			else
			{
				return (cuentacontable + ' - ' + gcccobrospagos_to_tbmaestroclientes.desccliente)
			}
		}
		else
		{
			if((cuentacontable + ' - ' + gcccobrospagos_to_tbmaestroproveedores.descproveedor).length > 29)
			{
				return (cuentacontable + ' - ' + gcccobrospagos_to_tbmaestroproveedores.descproveedor).substr(0,27) + '...'
			}
			else
			{
				return (cuentacontable + ' - ' + gcccobrospagos_to_tbmaestroproveedores.descproveedor)
			}
		}
	}
	else
	{
		return "UNKNOWN"
	}
}
