/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0DBA8A90-06E7-48BB-9448-7C9FC709939A"}
 */
var CP = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"1A148AED-DABC-4414-87BC-617C9D7B6944",variableType:8}
 */
var Detalle = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"68C2BB70-4DB2-4649-94B3-86CF09B2FB87"}
 */
var DOCPDF = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"8C996797-7DAD-4E70-A8FE-3F69DD031B88",variableType:8}
 */
var currentIndex = -1;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"0A8BF173-D202-461D-B4EB-7618B1CD67B7",variableType:-4}
 */
var files_positions = null;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"286CDEF9-3115-4DD0-98E3-C6456A29967F",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"07467163-14F6-4F6E-B900-52C11264A32F"}
 */
var subFolder = "/";

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * 
 * 
 * @properties={typeid:24,uuid:"D4BF0BDE-17F5-4017-80BE-89209BB0B02D"}
 */
function btn_newDocument(event)
{
	if(globals.GCFormulario == 'dlg_ClientesGC')
	{
		if(forms.dlg_ClientesGC.id && forms.dlg_ClientesGC.idcliente != null)
		{
			CP = forms.dlg_ClientesGC.idcliente;
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
		if(forms.FrmClientesGC.id && forms.FrmClientesGC.idcliente != null)
		{
			CP = forms.FrmClientesGC.idcliente;
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
 * @properties={typeid:24,uuid:"2E6CD55A-C4DC-4DB3-B376-286AE437C102"}
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
 * @properties={typeid:24,uuid:"1C7826C4-A7BF-4002-94A0-03CA30E728EF"}
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
 * @properties={typeid:24,uuid:"277958C7-7017-4661-A12E-9D57F960CA42"}
 */
function doImportFiledocu(_oFile) {
    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
    var NombreFichero = _oFile.getName()
	var RutaFichero =  _oFile;
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ||
	application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
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
		/*var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbmaestroclientesdocumentos')  
				  
		//load record by ID in foundset  
		//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
		vSet.newRecord();
		vSet.codcli = CP
		vSet.docu = rawData
		vSet.filename = NombreFichero;
		
		 // Save any unsaved data
        databaseManager.saveData(vSet);
		*/
        forms.lst_Clientes_DocumentosGC.foundset.newRecord()
		
		forms.lst_Clientes_DocumentosGC.codcli = CP
		forms.lst_Clientes_DocumentosGC.docu = rawData
		forms.lst_Clientes_DocumentosGC.filename = NombreFichero;
		
        // Save any unsaved data
        databaseManager.saveData(forms.lst_Clientes_DocumentosGC.foundset);

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
 * @properties={typeid:24,uuid:"710503F2-B18D-4F5F-8C23-4FA3ED549C5B"}
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
				forms.lst_Clientes_DocumentosGC.foundset.newRecord()
				forms.lst_Clientes_DocumentosGC.codcli = CP
				forms.lst_Clientes_DocumentosGC.docu = rawData
				forms.lst_Clientes_DocumentosGC.filename = currentFile.getName();
		        // Save any unsaved data
		        databaseManager.saveData(forms.lst_Clientes_DocumentosGC.foundset);
				
			}
			
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A0D04F34-8D6A-45CF-893E-2BAEFEC689CE"}
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
		
		/*var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Visualizar Documento';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, MenuDocu, 'media:///ver.png');
		titulo = 'Borrar Documento';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, MenuDocu, 'media:///borrado.png');
		titulo = 'Enviar Documento por EMail';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, MenuDocu, 'media:///email_icon.png');
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			menu.show(event.getSource(),20,16);				
		}*/
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
 * @properties={typeid:24,uuid:"132EBF49-504E-4177-A16E-183175ECC86E"}
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
 * @properties={typeid:24,uuid:"57802A7C-8A5A-45A7-94B7-8D9300BF5055"}
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
        	var methd = 'forms.lst_Clientes_DocumentosGC.BorradoPDFdocu()'
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
        	methd = 'forms.lst_Clientes_DocumentosGC.BorradoPDFdocu()'
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
 * @properties={typeid:24,uuid:"148835A7-C61C-4496-BE5E-8DDA19D4E8AD"}
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
 * @properties={typeid:24,uuid:"6ED150A4-9996-42B8-AE32-BCB8322F531A"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function onShow() {
	// TODO Auto-generated method stub
	foundset.loadAllRecords()
	foundset.sort('codcli ASC,filename ASC')
}
