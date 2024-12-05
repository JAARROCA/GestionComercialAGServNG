/**
 *
 * @properties={type:12,typeid:36,uuid:"E23F597A-1B2A-46EF-9924-72387A806FC6"}
 */
function BarraAlbaran()
{
	var Caracter;
	if(nalb_lfa != null && nalb_lfa != '')
	{
		Caracter = '/';
	}
	else
	{
		Caracter = null;
	}
	return Caracter;
}

/**
*
*
 * @properties={type:12,typeid:36,uuid:"4564E07E-A96C-44E0-8BF1-9940AEF147C6"}
 */
function Factura()
{
	return eje_lfa.toString()+utils.numberFormat(nup_lfa,'00000').toString()+ser_lfa.toString();
}

/**
 *
 * @properties={typeid:36,uuid:"FBD59A72-FB8D-4840-9DFE-A18C82E9C449"}
 */
function TotalFactura()
{
	if(nli_lfa == 1)
	{
		var importe = gctbfacturaproformalinea_to_tbfacturaproformacabecera.impnee_cfa
	}
	else 
	{
		importe = null
	}
	
	return importe
}
