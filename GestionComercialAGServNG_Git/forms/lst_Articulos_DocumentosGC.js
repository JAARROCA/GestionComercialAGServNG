/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FDEF1AD2-39CF-454F-A9BB-6CA7EB107843"}
 */
var CP = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"8F539896-227B-4305-A360-313B15E322E8",variableType:8}
 */
var Detalle = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"5CB84A5C-7730-4E3B-B397-1580BFA8E8B5"}
 */
var DOCPDF = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"65F228B0-9E97-4E05-84F5-49AF581794B6",variableType:8}
 */
var currentIndex = -1;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"67264094-E899-4D7E-AB67-A72FE452DFC9",variableType:-4}
 */
var files_positions = null;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"51B55DD6-AC24-496E-8EFD-B55BB13C2D21",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"FB8983F0-1D71-4812-8416-4E550B3E22D6"}
 */
var subFolder = "/";

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * 
 * 
 * @properties={typeid:24,uuid:"EB567A7E-D35F-40C7-B49D-5920D482B4CC"}
 */
function btn_newDocument(event)
{
	var ro = forms.FrmArticulosGC.elements.fld_descripcion.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero el artículo antes de agregar Documentos.','Aceptar')
		//globals.GCshowInfoDialog('Grabe primero el artículo antes de agregar Documentos.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		if(forms.FrmArticulosGC.codigo != null)
		{
			CP = forms.FrmArticulosGC.codigo;
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
			{
				BtnUploaddocu(event) 
			}
			else
			{
				onActionStreamFileToServerdocu(event) 
			}
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 * @properties={typeid:24,uuid:"64514119-1C0D-406B-8E34-070D90035564"}
 */
function BtnUploaddocu(event) 
{
	plugins.file.showFileOpenDialog( 1, gcfechalimite_usuarios.startdirectory, false, null, uploadCallbackFunctiondocu, 'Seleccione documento' );
	
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 * @properties={typeid:24,uuid:"35068F87-7329-48CD-989D-62FBF0EA771A"}
 */
function uploadCallbackFunctiondocu(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
    plugins.file.streamFilesToServer(_oFile, doImportFiledocu);
	
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 *
 * @properties={typeid:24,uuid:"EA477F94-F217-4A39-80E8-A71C8D54512B"}
 */
function doImportFiledocu(_oFile) {
    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
    var NombreFichero = _oFile.getName()
	var RutaFichero =  _oFile;
	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
	{
		var rutapred = plugins.file.getDefaultUploadLocation()
	    _oFile = rutapred + '\\' +_oFile.getName();
		RutaFichero = _oFile
	}
	else
	{
		_oFile = RutaFichero
	}

    //
    // Use BufferedReader so we don't have to read the whole file into memory
    //
    var _oFR = new Packages.java.io.FileInputStream(_oFile),
        _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
        _oBR = new Packages.java.io.BufferedReader(_oIR),
        _sLine = "dummy",
        _nReadLine = 0;

    // using a database transaction (might/will) speed things up
    databaseManager.startTransaction();

    try {
        while (_sLine) {
            _sLine = _oBR.readLine();
            _nReadLine++;

            if (_sLine) {

                // Put your processing code here
            }
        }
        
        var rawData = plugins.file.readFile(_oFile)
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbmaestroarticulosdocumentos')  
				  
		//load record by ID in foundset  
		//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
		vSet.newRecord();
		vSet.codpieza = CP
		vSet.docu = rawData
		vSet.filename = NombreFichero;
		
        // Save any unsaved data
        databaseManager.saveData(vSet);

        //
        //do NOT forget this close! to prevent memory leaks
        //
        _oBR.close();

        // Close the database transaction
        databaseManager.commitTransaction();
       
    } catch (_oErr) {
    	_oBR.close();
        globals.GCshowErrorDialog("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+
        						LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
        //application.output("ERROR: " + _oFile.getName() + " at row " + _nReadLine, LOGGINGLEVEL.ERROR);
        globals.GCshowErrorDialog("ERROR: " + _oErr+'\n'+
        						LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
        //application.output("ERROR: " + _oErr, LOGGINGLEVEL.ERROR);
        databaseManager.rollbackTransaction();
    } finally {
        //
        // garbage collection
        //
        _oFR = null;
        _oIR = null;
        _oBR = null;
        DOCPDF = null
		rec = null;
    	fsindex = null;
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 * @properties={typeid:24,uuid:"93F006AE-5A46-4B21-877E-91D68F697C34"}
 */
function onActionStreamFileToServerdocu(event) 
{
	fromServer = false;
	// initialize the progress state
	// validate the relative path if provided
	if(subFolder)
	{
		var currentFile = plugins.file.showFileOpenDialog( 1, gcfechalimite_usuarios.startdirectory, false, null, null, 'Seleccione documento' );
		if (currentFile) 
		{
			if(subFolder)
			{
				var rawData = plugins.file.readFile(currentFile)
				forms.lst_Articulos_DocumentosGC.foundset.newRecord()
				forms.lst_Articulos_DocumentosGC.codpieza = CP
				forms.lst_Articulos_DocumentosGC.docu = rawData
				forms.lst_Articulos_DocumentosGC.filename = currentFile.getName();
		        // Save any unsaved data
		        databaseManager.saveData();
				
			}
			
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"50594213-8E5B-4D88-B9C6-D2DDC9E7014E"}
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 */
function btnshowDocument(event) {
	// TODO Auto-generated method stub
	if(docu)
	{   
		//forms.dialogpdfDocument.docu = 'docu1'
		var tempFile = plugins.file.createFile(filename)//plugins.file.createTempFile(filename,'.pdf');
		var success = plugins.file.writeFile(tempFile, docu);
		uploadCallbackFunctiondocu2(tempFile)
		
	}
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 * @properties={typeid:24,uuid:"AAB29C0F-8998-4D9C-9248-E948682C0B99"}
 */
function uploadCallbackFunctiondocu2(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
   var monitor = plugins.file.streamFilesToServer(_oFile, Visualizardocu);
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile} _oFile
 *
 *
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"D0890985-417C-47FB-8A8F-9EE24CFF75BC"}
 * @SuppressWarnings(unused)
 */
function Visualizardocu(_oFile)
{
	if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
	{
		var sw = 0;
		//var vFilePath = plugins.file.getDefaultUploadLocation()  +'\\'+ _oFile.getName();
		//var vLocalFilePath = 'C:\\tmp\\'+ _oFile.getName();
		//var s = plugins.UserManager.copyFileFromServer(vFilePath, vLocalFilePath, true)
		//Creates a temporary file (will be deleted after application shutdown)

			//get the position of the last "." in the file name 
			var a = _oFile.getName().lastIndexOf(".")
			//var b = "temp"
			var b = _oFile.getName().substring(0,a)
		
			//get the 3 letter extension - INCLUDING the "."
			var c = _oFile.getName().substring(a)

			//create a temporary file that will be auto-deleted by Servoy when client is exited
			var fname = plugins.file.createTempFile(b,c)

			//write the binary data out to disk at the temporary file location
			var docupdf = _oFile.getBytes()
			plugins.file.writeFile(fname,docupdf); 
			
			var vLocalFilePath = fname.getAbsolutePath();
		//windows
        if (utils.stringMiddle(application.getOSName(), 1, 7) == "Windows") {
        	sw = 1
            var success = application.executeProgram('rundll32', 'url.dll,FileProtocolHandler', vLocalFilePath)
        }
        //FreeBSD or Linux
        else if (utils.stringMiddle(application.getOSName(), 1, 7) == "FreeBSD" || utils.stringMiddle(application.getOSName(), 1, 5) == "Linux") {
        	sw = 1
        	success = application.executeProgram('mozilla', vLocalFilePath)
        }
        //Mac OSX
        else if (application.getOSName().match("Mac")) {
        	sw = 1
        	success = application.executeProgram('open', vLocalFilePath)
        }
        if(sw == 1)
        {
        	var msg = "¿Desea borrar de la Base de Datos este documento?"
        	var methd = 'forms.lst_Articulos_DocumentosGC.BorradoPDFdocu()'
        	globals.GCshowQuestionDialog(msg,methd,'No','Si',null,null)
        }
	}
	else
	{
		/*var ext = _oFile.getContentType()
		if(ext == null) ext='text/plain'
			else if(ext == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || ext == 'application/vnd.ms-excel') ext = 'application/excel'
			else if(ext == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') ext = 'application/msword'
		
		forms.dlg_pdfDocumentViewerGC.htmlString = '<html>'+
													'<body>'+
													"</body>"+
													'<div align="center";>'+
														'<embed width="825" height="525" name="plugin" src="../uploads/'+_oFile.getName()+'" type="'+ext+'">'+
													'</div>'+
												 '</html>'	
												
		var result = forms.dlg_pdfDocumentViewerGC.foundset.selectRecord(codpieza,filename)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_pdfDocumentViewerGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_pdfDocumentViewerGC.foundset.getSize())
			{
				return;
			}
			forms.dlg_pdfDocumentViewerGC.foundset.setSelectedIndex(forms.dlg_pdfDocumentViewerGC.foundset.getSize());
			result = forms.dlg_pdfDocumentViewerGC.foundset.selectRecord(codpieza,filename);
		}										       								
		      								
		globals.GCshowDialogPDFViewer(_oFile.getName()+'.pdf', 1, null, null, true, null, null, null, null, null);
		// get the solution model JSForm
		var form = solutionModel.getForm("dlg_pdfDocumentViewerGC");
		// get the JSField of the form
		var field = form.getField("pdfContent");
		forms.dlg_pdfDocumentViewerGC.controller.recreateUI()
		*/
		var rawData = plugins.file.readFile(_oFile)
		var ext = _oFile.getContentType()
		if(ext == null) ext='txt'//'text/plain'
			else if(ext == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || ext == 'application/vnd.ms-excel') ext = 'xls'//'application/excel'
			else if(ext == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') ext = 'doc'//'application/msword'
			else if(ext == 'application/pdf') ext = 'pdf'
		
		
		var tempFile = plugins.file.createFile(filename+'.'+ext)//plugins.file.createTempFile(filename,'.pdf');
		success = plugins.file.writeFile(tempFile, rawData);
		if(success)
		{
			globals.uploadCallbackFunctionGC(tempFile)
			msg = "¿Desea borrar de la Base de Datos este documento?"
        	methd = 'forms.lst_Articulos_DocumentosGC.BorradoPDFdocu()'
        	globals.GCshowQuestionDialog(msg,methd,'No','Si',null,null)
		}
	}
}

/**
*
* @SuppressWarnings(deprecated)
*
 *
 *
 * @properties={typeid:24,uuid:"8CCADF53-CD8B-4C9B-AA2F-8FBBA336DA13"}
 */
function BorradoPDFdocu()
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		if(rec) foundset.deleteRecord(rec)
		else foundset.deleteRecord()
	}
}

/**
 * @type {JSRecord}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"98A83AD6-02D8-4713-B475-604EE42D3E22",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"5C296529-D3B2-4F00-9A28-BA7D283F40A1",variableType:8}
 */
var fsindex;

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"B1527E3B-BE4F-42C3-8568-09C9DDBF718B"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	// TODO Auto-generated method stub
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if(foundsetindex && columnindex && record) btnshowDocument(event);
	
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"91F6916E-671B-4F49-A07C-BEF3F9287B44"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
var column = elements.table_ArticuloNotas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if (column.id === "docu3") {
		btnshowDocument(event);
	}

}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"8DF42E32-289E-4381-AD7A-0497A91E65EF"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function onShow() {
	rec = null;
	fsindex = null;
	elements.table_ArticuloNotas.myFoundset.foundset.sort('filename asc')
	foundset.loadAllRecords()
	foundset.sort('codpieza ASC,filename ASC')
}
