/**
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"D6745358-5C9F-406F-8DB7-3910389CE9DC",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"B5683A20-410F-4D3A-BAD1-2AD5BA9FD793"}
 */
var subFolder = "/";

/**
 *
 * @properties={typeid:24,uuid:"66AEFBB7-5973-492A-BCA2-A35024146461"}
 */
function sub_setNewNumero()
{
	var query = "select linea from cortrabaNotas where cod_cot = " + cod_cot + 
	" order by linea desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	linea = dataset.getValue(1, 1) + 1	
}

/**
 *
 * @properties={typeid:24,uuid:"E00A8960-C4C8-4541-AE89-F24825C91DAC"}
 */
function validate_autoEnter()
{
	id = application.getUUID();
	fecha = new Date();
	sub_setNewNumero();	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"9E7D5E1D-CF2A-427D-98E8-66F24C1452F5"}
 */
function btn_PDF(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT )
	{
		BtnUpload(event) 
	}
	else
	{
		onActionStreamFileToServer(event) 
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
 * @properties={typeid:24,uuid:"7FEB325F-3565-4B9B-82B3-8BDE660038B0"}
 */
function BtnUpload(event) 
{
	var startdir = gcfechalimite_usuarios.startdirectory;
	if(!startdir) startdir = null;
	plugins.file.showFileOpenDialog( 1, startdir, false, null, uploadCallbackFunction, 'Seleccione documento' );
	
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
 * @properties={typeid:24,uuid:"D3E8E290-F953-402D-9A61-51BC06C3F3B7"}
 */
function onActionStreamFileToServer(event) 
{
	fromServer = false;
	// initialize the progress state
	// validate the relative path if provided
	if(subFolder)
	{
		var startdir = gcfechalimite_usuarios.startdirectory;
		if(!startdir) startdir = null;
		var currentFile = plugins.file.showFileOpenDialog( 1, startdir, false, null, null, 'Seleccione documento' );
		if (currentFile) 
		{
			if(subFolder)
			{
				var rawData = plugins.file.readFile(currentFile)
				docupdf = rawData
				filename = currentFile.getName();
		        // Save any unsaved data
		        //databaseManager.saveData();
				
			}
			
		}
	}
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"095BD9B7-E42F-4CCE-A559-EE15BDF01D78"}
 */
function uploadCallbackFunction(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
    plugins.file.streamFilesToServer(_oFile, doImportFile);
	
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D3517711-D443-4707-985E-C81BD9C0301A"}
 */
function doImportFile(_oFile) {
    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
    var NombreFichero = _oFile.getName()
	NombreFichero = globals.GCQuitarCaracteresEspeciales(NombreFichero)		
	var RutaFichero =  _oFile;
	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT )
	{
		var rutapred = plugins.file.getDefaultUploadLocation()
	    _oFile = rutapred + '/' +NombreFichero//_oFile.getName();
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
		docupdf = rawData
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
        
    }
}
