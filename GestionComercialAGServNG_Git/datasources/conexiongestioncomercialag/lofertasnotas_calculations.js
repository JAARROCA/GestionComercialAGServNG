/**
*
*
*
*
*
 *
 * @properties={typeid:36,uuid:"39F08E44-B6EE-454A-8A64-902AEA1DF28B"}
 */
function icon_pdf()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

	if(docu)
	{		
		var ext = utils.stringRight(filename,3)
		var ext1 = utils.stringRight(filename,4)
		if(ext == 'pdf' || ext == 'PDF')
		{
			return top + 'pdf_icon_sm.gif" title="Visualizar documento PDF"></html>'
		}
		else if(ext == 'xls' || ext == 'XLS' || ext1 == 'xlsx' || ext1 == 'XLSX')
		{
			return top + 'Excel.gif" title="Visualizar EXCEL"></html>'
		}
		else if(ext == 'avi' || ext == 'AVI')
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
	else if(!docu && filename)
	{
		//return null
		return top + 'sm_earth.gif" title="Abrir URL"></html>'
	}
	else
	{
		return null
	}
}
