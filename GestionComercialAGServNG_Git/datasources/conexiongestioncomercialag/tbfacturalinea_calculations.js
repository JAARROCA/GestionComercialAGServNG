/**
 *
 * @properties={type:12,typeid:36,uuid:"CD1CF51A-85B3-4669-AC44-9C5D0BD18738"}
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
 * @properties={type:12,typeid:36,uuid:"1F19467B-B7F4-4974-A300-8CC0C40D6A5D"}
 */
function Factura()
{
	return eje_lfa.toString()+utils.numberFormat(nup_lfa,'00000').toString()+ser_lfa.toString();
}

/**
 * @properties={type:8,typeid:36,uuid:"D65B44A4-CF5D-442C-9C3D-26E094E6EAA0"}
 */
function TotalFactura()
{
	if(nli_lfa == 1)
	{
		var importe = gctbfacturalinea_to_tbfacturacabecera.impnee_cfa
	}
	else 
	{
		importe = null
	}
	
	return importe
}

/**
 *
 * @properties={typeid:36,uuid:"3DA0A7C4-52A8-4C76-94B9-9C086568B9FA"}
 */
function IVALineaFactura()
{
	if(impor_lfa && importot_lfa)
	{
		//var importe = importot_lfa - impor_lfa;
		var importe = utils.numberFormat(importot_lfa - impor_lfa,'###,###,##0.00¤')
	}
	else 
	{
		importe = null;
	}
	
	return importe
}

/**
*
*
 *
 * @properties={typeid:36,uuid:"188A6334-DD4F-4DE9-9903-980FCEBCC689"}
 */
function FacturaLineasTotal()
{
	if(sum_impor_lfa)
	{
		//var importe = importot_lfa - impor_lfa;
		var importtotallineas = utils.numberFormat(sum_impor_lfa,'###,###,##0.00¤')
	}
	else 
	{
		importtotallineas = utils.numberFormat(0,'###,###,##0.00¤');
	}
	
	return importtotallineas
}

/**
 *
 * @properties={typeid:36,uuid:"5D033315-0606-4463-AE1F-0FE08163E965"}
 */
function nfra()
{
	if(nli_lfa == 1)
	{
		var nf = eje_lfa.toString()+utils.numberFormat(nup_lfa,'00000').toString()+ser_lfa.toString();
	}
	else 
	{
		nf = null
	}
	
	return nf
}

/**
*
*
 * @properties={typeid:36,uuid:"34544A5E-EE27-484B-8E8F-F5AC39A7889D"}
 */
function enviadacabeceraTicketBAI(){
	
	var envtbai = null
	if(nli_lfa == 1)
	{
		var top = '<html> <head></head> <body> <div align = "center"><img border=0 src="media:///'
		//if(fechaenviofichero){
		if(gctbfacturalinea_to_tbfacturacabecera.mac && 
				gctbfacturalinea_to_tbfacturacabecera.fechaenviofichero){
			envtbai = top + 'green.gif" ></div> </body> </html>'		
		}
		else{
			envtbai = top + 'red.gif" ></div> </body> </html>'
		}
	}
	
	
	return envtbai
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
 * @properties={typeid:36,uuid:"80A116C3-3557-4B33-90CD-3F06BB83C89B"}
 */
function edit_icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///greyNav_right.gif"> </body> </html>'
return top
}
