/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"EBB40A67-ECE9-422E-9F4F-A5963783955E"}
 */
var DOCPDF = null;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"A77611F0-609F-4141-BC7E-C9F71212A9A7",variableType:8}
 */
var currentIndex = -1;

/**
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"54B6052C-340E-4E28-B72D-FA8560669BB0",variableType:-4}
 */
var files_positions = null;

/**
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"CF0757A1-63EF-46DD-BB74-2F893226A3CB",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"F2F4C6EE-7CC4-4C9A-9672-C78A7F7467BA"}
 */
var subFolder = "/";

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"839A9068-1474-4F7A-B033-5738B9B10B63"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
}

/**
 * @properties={typeid:24,uuid:"8272FBC6-D509-492A-8947-A95CB6CC9F55"}
 */
function sub_setNewNumeroLinea()
{
	var query = "select [nli_lofnotas] from [lofertasnotas] where [nup_lofnotas] = "+nup_lofnotas+
	" order by nli_lofnotas desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	nli_lofnotas = dataset.getValue(1, 1) + 1	
}

/**
 * @properties={typeid:24,uuid:"ACDEA9FA-BDBB-412E-96AE-4A97FCD5DBEE"}
 */
function validate_autoEnter()
{
	sub_setNewNumeroLinea();	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"EDAC0466-A5F8-4205-9FE5-3731C73011A2"}
 */
function onShow() {
	// TODO Auto-generated method stub
	if(docu) {
		elements.btn_adddocu.visible = false;
		elements.btn_adddocu.enabled = false;
		elements.btn_borrardocu.visible = true;
		elements.btn_borrardocu.enabled = true;
		elements.btn_docupdf.visible = true;
	}
	else {
		elements.btn_adddocu.visible = true;
		elements.btn_adddocu.enabled = true;
		elements.btn_borrardocu.visible = false;
		elements.btn_borrardocu.enabled = false;
		elements.btn_docupdf.visible = false;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"385AB82A-E523-433B-BD57-A029DB99A382"}
 */
function btn_docu(event) {
	// TODO Auto-generated method stub
	
	if(!docu)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
		{
			BtnUploaddocu(event) 
		}
		else
		{
			onActionStreamFileToServerdocu(event) 
		}
	}
	else
	{
		var resp = scopes.svyCustomDialogs.showQuestionDialog('Borrar Nota/Documentación','¿Deseas realmente borrar esta Nota/Documentación?','No','Si');
		if(resp=='Si') {
			docu == null;
			filename = null;			
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
 *
 *
 * @properties={typeid:24,uuid:"5A21AE25-462A-4797-82A3-FC37827B772B"}
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
 *
 *
 * @properties={typeid:24,uuid:"1BA3C9BA-E1E8-47B1-9A25-038347818343"}
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
 *
 *
 * @properties={typeid:24,uuid:"0B1BFA17-12F7-43F4-A302-10F4F1D35389"}
 */
function doImportFiledocu(_oFile) {
    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
    var NombreFichero = _oFile.getName()
	var RutaFichero =  _oFile;
	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
	{
		var rutapred = plugins.file.getDefaultUploadLocation()
	    _oFile = rutapred + '/' +_oFile.getName();
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
		docu = rawData
		filename = NombreFichero;
       
        // Save any unsaved data
        //databaseManager.saveData();

        //
        //do NOT forget this close! to prevent memory leaks
        //
        _oBR.close();

        // Close the database transaction
        databaseManager.commitTransaction();
       
    } catch (_oErr) {
    	_oBR.close();
    	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
    	{
    		plugins.webnotificationsToastr.error("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+LOGGINGLEVEL.ERROR,'¡Error!')
			plugins.webnotificationsToastr.error("ERROR: " + _oErr+'\n'+LOGGINGLEVEL.ERROR,'¡Error!')
    	}
		else {
        globals.GCshowErrorDialog("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+
        						LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
        //application.output("ERROR: " + _oFile.getName() + " at row " + _nReadLine, LOGGINGLEVEL.ERROR);
        globals.GCshowErrorDialog("ERROR: " + _oErr+'\n'+
        						LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
        //application.output("ERROR: " + _oErr, LOGGINGLEVEL.ERROR);
		}
        databaseManager.rollbackTransaction();
    } finally {
        //
        // garbage collection
        //
        _oFR = null;
        _oIR = null;
        _oBR = null;
        DOCPDF = null
        if(docu) {
    		elements.btn_adddocu.visible = false;
    		elements.btn_adddocu.enabled = false;
    		elements.btn_borrardocu.visible = true;
    		elements.btn_borrardocu.enabled = true;
    		elements.btn_docupdf.visible = true;
    	}
    	else {
    		elements.btn_adddocu.visible = true;
    		elements.btn_adddocu.enabled = true;
    		elements.btn_borrardocu.visible = false;
    		elements.btn_borrardocu.enabled = false;
    		elements.btn_docupdf.visible = false;
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
 *
 * @properties={typeid:24,uuid:"A563BDA7-3A4E-4A9C-90AA-933FFBE195C2"}
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
				docu = rawData
				filename = currentFile.getName();
		        // Save any unsaved data
		        
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
 * @properties={typeid:24,uuid:"D7CE6641-73C3-47ED-84F2-E7D4E00283D5"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(wrongparameters)
 */
function btnshowDocument(event) {
	// TODO Auto-generated method stub
	if(docu)
	{   
		var tempFile = plugins.file.createFile(filename)//plugins.file.createTempFile(filename,'.pdf');
		var success = plugins.file.writeFile(tempFile, docu);
		uploadCallbackFunctiondocu2(tempFile)
		
	}
	else if(filename)
	{
		if((filename.indexOf('http://',0) >= 0 || filename.indexOf('https://',0) >= 0))
		{
			application.showURL(filename);	
		}
		else
		{
			application.showURL( 'http://' + filename);
		}
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
 *
 *
 * @properties={typeid:24,uuid:"8177AE6C-4664-459A-90B5-E516147EE1D3"}
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
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"6D4A010E-B3BD-4B86-966C-D240695287A8"}
 */
function Visualizardocu(_oFile)
{
	var ext = _oFile.getContentType()
	if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
	{
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
        	var success = application.executeProgram('rundll32', ['url.dll,FileProtocolHandler', vLocalFilePath])
        }
        //FreeBSD or Linux
        else if (utils.stringMiddle(application.getOSName(), 1, 7) == "FreeBSD" || utils.stringMiddle(application.getOSName(), 1, 5) == "Linux") {
        	success = application.executeProgram('mozilla', [vLocalFilePath])
        }
        //Mac OSX
        else if (application.getOSName().match("Mac")) {
        	success = application.executeProgram('open', [vLocalFilePath])
        }
        
	}
	else
	{
		if(ext == null) ext='text/plain'
			else if(ext == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || ext == 'application/vnd.ms-excel' ||
					ext == 'application/vnd.ms-excel.sheet.binary.macroenabled.12') ext = 'application/msexcel'
			else if(ext == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') ext = 'application/msword'
		if(ext == 'application/msexcel' || ext == 'application/msword')
		{
			var serverURL = application.getServerURL() 
			application.showURL(serverURL + "/uploads/" + _oFile.getName());
		//	plugins.WebClientUtils.executeClientSideJS('location.reload();');
			
		}
		else
		{
			serverURL = application.getServerURL() 
		    application.showURL(serverURL + "/uploads/" + _oFile.getName()+'?nodebug=true','_blank','height=600,width=800,status=yes,toolbar=no,menubar=no,location=no')
			//plugins.WebClientUtils.executeClientSideJS('location.reload();');
			/*forms.dlg_pdfDocumentViewer.htmlString = '<html>'+
														'<body>'+
														"</body>"+
														'<div align="center";>'+
															'<embed width="825" height="525" name="plugin" src="../uploads/'+_oFile.getName()+'" type="'+ext+'">'+
														'</div>'+
													 '</html>'	
													
			var result = forms.dlg_pdfDocumentViewer.foundset.selectRecord(id)
			var fsCount = databaseManager.getFoundSetCount(forms.dlg_pdfDocumentViewer.foundset);
			while(result==false)
			{
				if(fsCount == forms.dlg_pdfDocumentViewer.foundset.getSize())
				{
					return;
				}
				forms.dlg_pdfDocumentViewer.foundset.setSelectedIndex(forms.dlg_pdfDocumentViewer.foundset.getSize());
				result = forms.dlg_pdfDocumentViewer.foundset.selectRecord(id);
			}										       								
			      								
			globals.GCshowDialogPDFViewer(_oFile.getName(), 1, null, null, true, null, null, null, null, null);
			plugins.WebClientUtils.executeClientSideJS('location.reload();');*/
		}
	}
	
	
}
