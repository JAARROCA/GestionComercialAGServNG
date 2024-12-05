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
 * @properties={typeid:36,uuid:"01F82EFD-AE11-4320-82AB-EF822C6A9454"}
 */
function delete_text()
{
return '¿Estás seguro que deseas borrar la Factura\n"' +
nup_cfca+' de "'+GCtbfacturacompracabecera_to_tbmaestroproveedores.descproveedor+' ? ' +
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
 * @properties={typeid:36,uuid:"30FF3CBA-CDD8-4883-AFA7-26BC066ADDB1"}
 */
function icon_display()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

if(pro_cfca+'/'+nup_cfca == globals.GCcurID_FacturaCompras)
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
 *
 * @properties={typeid:36,uuid:"6D65F233-718F-48C0-AE1C-426C3AEFE8BC"}
 */
function list_display()
{
	if(nup_cfca)
	{
		if(GCtbfacturacompracabecera_to_tbmaestroproveedores)
		{
			if((nup_cfca+' - '+GCtbfacturacompracabecera_to_tbmaestroproveedores.descproveedor).length > 29)
			{
				return (nup_cfca+' - '+GCtbfacturacompracabecera_to_tbmaestroproveedores.descproveedor).substr(0,27) + '...'
			}
			else
			{
				return nup_cfca+' - '+GCtbfacturacompracabecera_to_tbmaestroproveedores.descproveedor
			}
		}
		else
		{
			if((nup_cfca).length > 29)
			{
				return (nup_cfca).substr(0,27) + '...'
			}
			else
			{
				return nup_cfca
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
 * @properties={typeid:36,uuid:"39A345F5-8B4D-4574-BEA0-66F6FD6A7864"}
 */
function icon_pdf()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

	if(docupdf)
	{		
		var ext = utils.stringRight(filename,3)
		var ext1 = utils.stringRight(filename,4)
		if(ext == 'pdf' || ext == 'PDF')
		{
			return top + 'pdf_icon_sm.gif" title="Visualizar documento PDF"></html>'
		}
		else if(ext == 'xls' || ext == 'XLS' || ext1 == 'xlsx' || ext1 == 'XLSX' || ext1 == 'xlsb' || ext1 == 'XLSB')
		{
			return top + 'Excel.gif" title="Visualizar EXCEL"></html>'
		}
		else if(ext == 'avi')
		{
			return top + 'Video.gif" title="Visualizar Video"></html>'
		}
		else if(ext == 'doc' || ext == 'DOC' || ext1 == 'docx' || ext1 == 'DOCX')
		{
			return top + 'Word.gif" title="Visualizar WORD"></html>'
		}
		else
		{
			return top + 'txt.gif" title="Visualizar Archivo"></html>'
		}
	}
	else
	{
		return top + 'NEW.gif" title="Adjuntar documento"></html>'
	}
}

/**
*
*
 * @properties={typeid:36,uuid:"5A96A386-E4D1-4806-A00C-4D21F0FEB6E5"}
 */
function SituacionPago()
{
	var situcobr = null
	var pagado = 0;
	if(gctbfacturacompracabecera_to_tbfacturacompracabecerapagos)
	{
		pagado = gctbfacturacompracabecera_to_tbfacturacompracabecerapagos.sumimporte
		if(pagado == 0 || pagado == null)
		{
			situcobr = 'NO PAGADA'
		}
		else if(pagado < impnee_cfca)
		{
			situcobr = 'PARCIALMENTE PAGADA'
		}
		else
		{
			situcobr = 'PAGADA'
		}
	}
	
	return situcobr
}

/**
 * @properties={typeid:36,uuid:"ED385849-675B-4F32-8262-ED175F514ABF"}
 */
function SituacionConta()
{
	var sitconta = null;
	if(situconta == 'C') sitconta = 'CONTABILIZADA';
	else sitconta = 'NO CONTABILIZADA';
		
	
	return sitconta
}
