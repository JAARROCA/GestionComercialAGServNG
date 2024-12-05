/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EE783A92-0F0D-49DE-9C00-5098F5D59AA3"}
 */
var CP = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"10976F9F-45F9-467D-B9F4-5B3D0CAAC54A",variableType:8}
 */
var Detalle = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"34C7F0B9-69CA-4CFA-9C57-8A05BFFDC840"}
 */
var DOCPDF = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"C9193FE3-A419-414B-A92C-F39EFE980813",variableType:8}
 */
var currentIndex = -1;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"7EFB5A22-C0CE-4565-AC24-E2189F97282D",variableType:-4}
 */
var files_positions = null;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"0EB49B65-2AD2-4416-8564-5858B1C4A54A",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"1CC13835-6F59-4F73-A3BE-49F335CB8FDA"}
 */
var subFolder = "/";

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * 
 * 
 * @properties={typeid:24,uuid:"7295D29B-1389-428D-8956-E02CD6FF2806"}
 */
function btn_newDocument(event)
{
	if(globals.GCFormulario == 'dlg_ProveedoresGC')
	{
		if(forms.dlg_ProveedoresGC.codpro)
		{
			CP = forms.dlg_ProveedoresGC.codpro;
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
			{
				BtnUploaddocu(event) 
			}
			else
			{
				onActionStreamFileToServerdocu(event) 
			}
		}
	}
	else
	{
		if(forms.FrmProveedoresGC.codpro)
		{
			CP = forms.FrmProveedoresGC.codpro;
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
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
 * @properties={typeid:24,uuid:"062A77D8-A067-4ED4-8262-B55C57B29671"}
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
 * @properties={typeid:24,uuid:"C5ED03E3-7124-4230-A042-09C3C1752ECA"}
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
 * @properties={typeid:24,uuid:"84C2E00A-80EE-4E7D-BA46-956466342AD4"}
 */
function doImportFiledocu(_oFile) {
    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
    var NombreFichero = _oFile.getName()
	var RutaFichero =  _oFile;
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
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
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbmaestroproveedoresdocumentos')  
				  
		//load record by ID in foundset  
		//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
		vSet.newRecord();
		vSet.codpro = CP
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
 * @properties={typeid:24,uuid:"104187EA-ADFE-426E-A054-313BE6A73507"}
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
				forms.lst_Proveedores_DocumentosGC.foundset.newRecord()
				forms.lst_Proveedores_DocumentosGC.codpro = CP
				forms.lst_Proveedores_DocumentosGC.docu = rawData
				forms.lst_Proveedores_DocumentosGC.filename = currentFile.getName();
		        // Save any unsaved data
		        databaseManager.saveData(forms.lst_Proveedores_DocumentosGC.foundset);
				
			}
			
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7C995A3A-26E8-4650-9FB6-AF90737595F5"}
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
 * @properties={typeid:24,uuid:"98713571-0EEE-472E-BC3D-66117EAC33EE"}
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
 * @properties={typeid:24,uuid:"FDE5D853-5BD7-422A-8225-848437017F6E"}
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
        	var methd = 'forms.lst_Proveedores_DocumentosGC.BorradoPDFdocu()'
        	globals.GCshowQuestionDialog(msg,methd,'No','Si',null,null)
        }
	}
	else
	{
		/*
		var ext = _oFile.getContentType()
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
												
		var result = forms.dlg_pdfDocumentViewerGC.foundset.selectRecord(codcli,filename)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_pdfDocumentViewerGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_pdfDocumentViewerGC.foundset.getSize())
			{
				return;
			}
			forms.dlg_pdfDocumentViewerGC.foundset.setSelectedIndex(forms.dlg_pdfDocumentViewerGC.foundset.getSize());
			result = forms.dlg_pdfDocumentViewerGC.foundset.selectRecord(codcli,filename);
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
        	methd = 'forms.lst_Proveedores_DocumentosGC.BorradoPDFdocu()'
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
 * @properties={typeid:24,uuid:"2B18E4C1-A291-481F-90D2-0AF80FAD8D39"}
 */
function BorradoPDFdocu()
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		foundset.deleteRecord()
	}
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"70910434-C5C8-44FD-9DD4-7D1DED64F2D0"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function onShow() {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	foundset.sort('codpro ASC,filename ASC')
}
