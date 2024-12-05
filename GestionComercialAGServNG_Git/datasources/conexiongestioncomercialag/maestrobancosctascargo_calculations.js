/**
 *
 * @properties={typeid:36,uuid:"3F806030-77A5-4A67-A5A8-2200FFE8FCF5"}
 */
function iban()
{
	if(ncuentaiban && ncuentaiban.length == 24)
	{
		var banc = utils.stringLeft(ncuentaiban,4);
		var banc2 = utils.stringMiddle(ncuentaiban, 5, 4);
		var banc3 = utils.stringMiddle(ncuentaiban, 9, 4);
		var banc4 = utils.stringMiddle(ncuentaiban, 13, 4);
		var banc5 = utils.stringMiddle(ncuentaiban, 17, 4);
		var banc6 = utils.stringRight(ncuentaiban,4);
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
 * @properties={typeid:36,uuid:"A219D928-9323-4F95-BAFF-422CBB99ACE6"}
 */
function MargenRiesgo()
{
	var total = null
	if(riesgoconcedido)
	{
		var riesgo = gcmaestrobancosctascargo_to_ccobrospagos.SumaEfectos;
		total = riesgoconcedido - riesgo;
		if(total == 0) total = null;
	}
	return total;
}

/**
 *
 *
 * @properties={typeid:36,uuid:"FB450B1A-AD68-40EF-ADEB-1EA7635315EF"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar el Banco\n"' +
	codigoctabanco + '" - "' + nombreentidad + ' ? ' +
	'\n\n¡NO SE PODRÁ DESHACER ESTA ACCIÓN!'
}

/**
 *
 *
 * @properties={typeid:36,uuid:"D39CC583-6B54-492A-A688-20F311AB36D5"}
 */
function icon_display()
{
var top = '<html> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_BancosCuentasCargo)
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
 * @properties={typeid:36,uuid:"F9FC3026-9C99-4E59-8A6A-260C49463B15"}
 */
function list_display()
{
if(codigoctabanco)
{
	if((codigoctabanco+' - '+ nombreentidad).length > 29)
	{
		return (codigoctabanco+' - '+ nombreentidad).substr(0,27) + '...'
	}
	else
	{
		return (codigoctabanco+' - '+ nombreentidad)
	}
}
else
{
	return "UNKNOWN"
}
}
