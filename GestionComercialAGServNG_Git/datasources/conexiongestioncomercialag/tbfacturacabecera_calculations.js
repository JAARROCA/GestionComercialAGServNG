/**
 * @properties={type:12,typeid:36,uuid:"4D8D8F3A-2B60-48E1-A88B-81F614384E72"}
 */
function FraEmail()
{
	if(GCtbfacturacabecera_to_tbmaestroclientes){
		if(GCtbfacturacabecera_to_tbmaestroclientes.envfraemail){
			return 'ENVIAR FACTURA POR EMAIL'
		}
		else{
			return null
		}
	}
	else{
		return null
	}	
}

/**
 * @properties={type:8,typeid:36,uuid:"BDDF04B7-0831-4B40-9BA5-E418C039A178"}
 */
function ImporDto()
{
	var impdto = null
	if(depp_cfa  && impbre_cfa) 
	{
		impdto = globals.GCROUND(depp_cfa * (impbre_cfa/*+impre+impre2+impre3*/) * 0.01,2);
	}
	/*if(depp_cfa  && impbre_cfa) 
	{
		if(ser_cfa == null)
		{
			var ser = 'IS NULL'
		}
		else
		{
			ser = "= '"+ser_cfa+"'"
		}
		impdto = globals.GCimportedpp(eje_cfa,ser,nup_cfa,depp_cfa)
		impdto = globals.GCROUND(impdto,2)
	}*/
	return impdto;
}

/**
 * @properties={type:12,typeid:36,uuid:"D409524D-F519-49AD-801E-DBBAA8F08175"}
 */
function SituacionConta2()
{
	if(situconta == 'C')
	{
		var Resp = 'CONTABILIZADA';
	}
	else
	{
		Resp = 'NO CONTABILIZADA';
	}
	return Resp
}

/**
 *
 * @properties={typeid:36,uuid:"B2D4D25A-11C5-485E-ABC7-95B118ECB731"}
 */
function SituacionCobro()
{
	var situcobr = null
	var cobrado = 0;
	if(gctbfacturacabecera_to_tbfacturacabeceracobros)
	{
		cobrado = gctbfacturacabecera_to_tbfacturacabeceracobros.sumimporte
		if(cobrado == 0 || cobrado == null)
		{
			situcobr = 'NO COBRADA'
		}
		else if(cobrado < impnee_cfa)
		{
			situcobr = 'PARCIALMENTE COBRADA'
		}
		else
		{
			situcobr = 'COBRADA'
		}
	}
	
	return situcobr
}

/**
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:36,uuid:"171D1256-2306-43DD-B53A-78E8092E312E"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar la Factura\n"' +
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
 * @properties={typeid:36,uuid:"46E1867D-A537-4250-B52D-BC8144C82349"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(id == globals.GCcurID_Factura)
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
 * @properties={type:12,typeid:36,uuid:"4C160B9F-8E20-4887-80F2-C174FF1A0B1B"}
 */
function list_display()
{
	if(eje_cfa && nup_cfa)
	{
		if(GCtbfacturacabecera_to_tbmaestroclientes)
		{
			if((eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa+' | '+GCtbfacturacabecera_to_tbmaestroclientes.desccliente).length > 27)
			{
				return (eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa+' | '+GCtbfacturacabecera_to_tbmaestroclientes.desccliente).substr(0,25) + '...'
			}
			else
			{
				return eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa+' | '+GCtbfacturacabecera_to_tbmaestroclientes.desccliente
			}
		}
		else
		{
			if((eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa).length > 27)
			{
				return (eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa).substr(0,25) + '...'
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
 * @properties={type:12,typeid:36,uuid:"1C13F061-04F8-4C5F-8C3E-8A246A35C6A9"}
 */
function list_display2()
{
	if(eje_cfa && nup_cfa)
	{
		if(GCtbfacturacabecera_to_tbmaestroclientes)
		{			
				return eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa+' | '+GCtbfacturacabecera_to_tbmaestroclientes.desccliente+' | '+utils.dateFormat(fecha_cfa,'dd-MM-yyyy')+
				' | '+utils.numberFormat(impnee_cfa,'###,###,##0.00¤')
				/*return globals.PreparaLinea(eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa,8,'Left')+' | '+
						globals.PreparaLinea(GCtbfacturacabecera_to_tbmaestroclientes.desccliente,80,'Left')+' | '+
						globals.PreparaLinea(utils.dateFormat(fecha_cfa,'dd-MM-yyyy'),10,'Left')+' | '+
						globals.PreparaLinea(utils.numberFormat(impnee_cfa,'###,###,##0.00¤'),15,'Left')
				*/
		}
		else
		{
			return eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa+' | '
			
		}
	}
	else
	{
		return null
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
 * @properties={type:12,typeid:36,uuid:"2477738F-772B-4E29-BD6E-DC96D38BC7F6"}
 */
function nFactura()
{
	if(eje_cfa && nup_cfa)
	{
		var Fra = eje_cfa.toString()+utils.numberFormat(nup_cfa,'00000').toString()+ser_cfa;	
		if(clie_cfa)
		{
			if(GCtbfacturacabecera_to_tbmaestroclientes)
			{
				Fra = Fra + ' - '+GCtbfacturacabecera_to_tbmaestroclientes.desccliente
			}
		}
	}
	else
	{
		Fra = null;
	}
	
	return 'FACTURA: '+Fra
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
 * @properties={type:12,typeid:36,uuid:"555BBD29-6C0C-4DF9-A17E-1F052980D766"}
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
 * @properties={type:12,typeid:36,uuid:"9C4FACCE-B5BC-4826-8A96-7EF7DCD63540"}
 */
function SituacionConta()
{
	if(situconta == 'C')
	{
		var Resp = 'SI';
	}
	else
	{
		Resp = 'NO';
	}
	return Resp
}

/**
 *
 * @properties={typeid:36,uuid:"FD38162F-405F-419C-80E0-5297931A9D9C"}
 */
function enviadaTicketBAI(){
	
		var top = null
		
			top = '<html> <head></head> <body> <div align = "center"><img border=0 src="media:///'
			//if(fechaenviofichero){
			if(mac && fechaenviofichero){
				return top + 'green.gif" ></div> </body> </html>'		
			}
			else if(!mac && fechaenviofichero){
				return top + 'light_red.gif" ></div> </body> </html>'		
			}
			else{
				return top + 'red.gif" ></div> </body> </html>'
			}
		
	
}

/**
*
*
 * @properties={typeid:36,uuid:"CFA5C03F-E04A-44B4-B682-64986F8FA117"}
 */
function enviadaTicketBAIOSATU(){
	
		var top = null
		
			top = '<html> <head></head> <body> <div align = "center"><img border=0 src="media:///'
		if(fichero_respuesta_osatu &&xml_enviado_osatu){
				return top + 'green.gif" ></div> </body> </html>'		
			}
			else{
				return top + 'red.gif" ></div> </body> </html>'
			}
		
	
}

/**
 * @properties={type:8,typeid:36,uuid:"0A007213-9869-4113-A269-2EADF3F4EAE3"}
 */
function totalPendCobroCliente(){
	var imppendcobro = null;
	if(id && eje_cfa && nup_cfa && clie_cfa){
		imppendcobro = globals.totalPendienteCobroCliente(clie_cfa)
	}
	return imppendcobro;
}

/**
 *
 * @properties={type:8,typeid:36,uuid:"DAE86467-958C-4EE0-99CA-6854AF6CDBAD"}
 */
function totalFacturasCliente(){
	var impsumfracli = null;
	if(id && eje_cfa && nup_cfa && clie_cfa){
		impsumfracli = globals.totalFacturasCliente(clie_cfa)
	}
	return impsumfracli;
}
