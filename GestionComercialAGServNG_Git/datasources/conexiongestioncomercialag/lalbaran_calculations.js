/**
 * @properties={type:12,typeid:36,uuid:"023ED440-F8EA-4B5A-B6CB-E0AC49929BFA"}
 */
function SituacionFactura()
{
	var resp = '';
	if(!sifa_lal) resp = 'NO'
	else resp = 'SI'
	return resp;
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
 *
 * @properties={typeid:36,uuid:"E73251AD-E500-4405-BFD8-B669867BCE5C"}
 */
function SituacionStockAlbaran()
{
	if(situ_lal == 'A')
	{
		var Resp = 'ACTUALIZADO';
	}
	else
	{
		Resp = null;
	}
	return Resp
}

/**
*
*
 *
 *
 * @properties={typeid:36,uuid:"FF7F85D6-A2EB-4107-B575-9587E396FB91"}
 */
function AlbaranLineasTotal()
{
	if(sum_impor_lal)
	{
		//var importe = importot_lfa - impor_lfa;
		var importtotallineas = utils.numberFormat(sum_impor_lal,'###,###,##0.00¤')
	}
	else 
	{
		importtotallineas = utils.numberFormat(0,'###,###,##0.00¤');
	}
	
	return importtotallineas
}
