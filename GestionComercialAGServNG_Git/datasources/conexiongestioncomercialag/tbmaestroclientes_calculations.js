/**
 *
 *
 * @properties={typeid:36,uuid:"75DEDA28-2705-4367-B7FD-3A0F501C323C"}
 */
function iban()
{
	if(codigoiban && codigoiban.length == 24)
	{
		var banc = utils.stringLeft(codigoiban,4);
		var banc2 = utils.stringMiddle(codigoiban, 5, 4);
		var banc3 = utils.stringMiddle(codigoiban, 9, 4);
		var banc4 = utils.stringMiddle(codigoiban, 13, 4);
		var banc5 = utils.stringMiddle(codigoiban, 17, 4);
		var banc6 = utils.stringRight(codigoiban,4);
		return banc+' '+ banc2+' '+ banc3+' '+ banc4 +' ' + banc5 +' ' + banc6;
	}
	else
	{
		return null;
	}
	
}

/**
 *
 *
 *
 * @properties={typeid:36,uuid:"A60D3CAE-13DD-466D-9F2B-C8F9175687A8"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar el Cliente\n"' +
	idcliente + ' - '+desccliente+'" ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 *
 * @properties={typeid:36,uuid:"C69B5E3A-787B-4426-A02B-AD3137B15098"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Cliente)
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
 * @properties={typeid:36,uuid:"38C0C6DB-6D9C-41FF-AC46-69E4829DF392"}
 */
function list_display()
{
	if(idcliente || idcliente == 0)
	{
		if((idcliente+' - '+ desccliente).length > 29)
		{
			return (idcliente+' - '+ desccliente).substr(0,27) + '...'
		}
		else
		{
			return idcliente+' - '+ desccliente
		}
	}
	else
	{
		return "UNKNOWN"
	}
}
