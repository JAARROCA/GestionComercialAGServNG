/**
*
*
*
*
*
*
  *
 * @properties={typeid:36,uuid:"FA6FA9DE-6B84-4A5B-BC25-D276FE0876D2"}
 */
function icon_pdf()
{
var top = '<html> <head></head> <body> <img border=0 src="media:///'

	if(docu)
	{		
		var ext = utils.stringRight(filename,3)
		var ext1 = utils.stringRight(filename,4)
		if(ext == 'pdf' || ext == 'PDF' || ext == 'Pdf')
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
	else
	{
		return null
		//return top + 'NEW.gif" title="Adjuntar documento"></html>'
	}
}
