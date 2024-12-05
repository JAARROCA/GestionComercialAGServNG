/**
*
*
 *
 *
 *
 * @properties={typeid:36,uuid:"8DEF1899-A57D-4908-8B06-C19DC146BE36"}
 */
function PresupuestoLineasTotal()
{
	if(sum_impor_lof)
	{
		//var importe = importot_lfa - impor_lfa;
		var importtotallineas = utils.numberFormat(sum_impor_lof,'###,###,##0.00¤')
	}
	else 
	{
		importtotallineas = utils.numberFormat(0,'###,###,##0.00¤');
	}
	
	return importtotallineas
}
