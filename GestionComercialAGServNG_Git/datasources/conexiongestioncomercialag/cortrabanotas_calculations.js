/**
*
*
*
 *
 * @properties={typeid:36,uuid:"99EA230D-73AE-4BA5-BDCB-2C96C6F92A10"}
 */
function icon_pdf()
{
var top = '<html> <head></head> <body> <div align = "center"><img border=0 src="media:///'

	if(docupdf)
	{		
		var ext = utils.stringRight(filename,3)
		var ext1 = utils.stringRight(filename,4)
		if(ext == 'pdf' || ext == 'PDF' || ext == 'Pdf')
		{
			return top + 'pdf_icon_sm2.gif" title="'+filename+'"> </body> </html>'
		}
		else if(ext == 'xls' || ext == 'XLS' || ext1 == 'xlsx' || ext1 == 'XLSX' || ext1 == 'xlsb' || 
				ext1 == 'XLSB' || ext == 'xlt' || ext == 'XLT' || ext1 == 'xlsm' || ext1 == 'XLSM' || 
				ext1 == 'xltx' || ext1 == 'XLTX' || ext1 == 'xltm' || ext1 == 'XLTM')
		{
			return top + 'Excel5.gif" title="'+filename+'"> </body> </html>'
		}
		else if(ext == 'avi')
		{
			return top + 'Video2.gif" title="'+filename+'"> </body> </html>'
		}
		else if(ext == 'doc' || ext == 'DOC' || ext1 == 'docx' || ext1 == 'DOCX')
		{
			return top + 'Word2.gif" title="'+filename+'"> </body> </html>'
		}
		else
		{
			return top + 'txt2.gif" title="'+filename+'"></html>'
		}
	}
	else
	{
		return top + 'NEW2.gif" title="Adjuntar documento"></div> </body> </html>'
	}
}
