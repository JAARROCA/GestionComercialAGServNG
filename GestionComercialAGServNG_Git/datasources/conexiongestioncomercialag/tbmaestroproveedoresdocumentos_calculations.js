/**
*
*
*
*
*
*
*
*
 * @properties={typeid:36,uuid:"EC9F9182-4993-4869-9AAD-2D80F9AA58CA"}
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
