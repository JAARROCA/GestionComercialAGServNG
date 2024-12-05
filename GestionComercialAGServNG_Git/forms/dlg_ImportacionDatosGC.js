/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E6D86CB6-F807-40B7-A30C-E167B1BF3A6C",variableType:8}
 */
var TipoConsulta = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"729787EB-635C-4BCB-8DDC-530B0E7FD4CB",variableType:8}
 */
var FormatoFichero = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"59437C4C-2130-4250-9BFD-6E4BD4EB0F8E"}
 */
var lblejemplo = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"3C4EAD82-7C85-4D75-9880-C94A5C400A74",variableType:8}
 */
var currentIndex = -1;

/**
 *
 * @properties={typeid:35,uuid:"29A4A5DB-0CA9-46BD-9E0A-0EE34991E949",variableType:-4}
 */
var files_positions = null;

/**
 *
 * @properties={typeid:35,uuid:"64F90D9C-0209-4CDA-B59B-F4C1CC6E2352",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"9638F863-07D1-4AA6-A3D3-1A8A55BBFD3F"}
 */
var subFolder = "/";

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"F5E2C6AF-8880-4690-A948-DF5718B77CB1"}
 */
function BtnUpload(event) 
{
	var startdir = gcfechalimite_usuarios.startdirectory;
	if(!startdir) startdir = null;
	plugins.file.showFileOpenDialog( 1, startdir, false, null, uploadCallbackFunction, 'Seleccione el Fichero a Importar' );
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"621319F6-4F0E-4624-B4DA-B5ADAFAFC553"}
 */
function onActionStreamFileToServer(event) 
{
	fromServer = false;
	// initialize the progress state
	// validate the relative path if provided
	if(subFolder)
	{
		var currentFile = plugins.file.showFileOpenDialog( 1, gcfechalimite_usuarios.startdirectory, false, null, null, 'Seleccione el Fichero a Importar' );
		if (currentFile) 
		{
			globals.FicheroImportar = currentFile.getName()
			globals.RutaFicheroImportar = currentFile
			var monitor;
			currentIndex = -1;
			if(subFolder)
			{
				files_positions = new Array();
				files_positions[0] = currentFile.getName();
				var serverPath = subFolder + currentFile.getName();
				// store in the default location (/application_server/server/webapps/ROOT/uploads)
				//monitor = plugins.file.streamFilesToServer( currentFile, serverPath , null );
				uploadCallbackFunction(currentFile)
				// show the progress of the files sent to the server
			}
			
		}
	}
}

/**
* @param {plugins.file.JSFile} _oFile
*
*
 * @properties={typeid:24,uuid:"09E54A0C-C1EB-4458-983D-91A2E384205A"}
 */
function uploadCallbackFunction(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
    plugins.file.streamFilesToServer(_oFile, doImportFile);
}

/**
* @param {plugins.file.JSFile} _oFile
*
*
 * @properties={typeid:24,uuid:"814DBAE8-8948-4D6D-B5B0-F6998BB034AC"}
 */
function doImportFile(_oFile) {
    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
    
	globals.FicheroImportar =  _oFile.getName();
	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
	{
		var rutapred = plugins.file.getDefaultUploadLocation()
	    _oFile = rutapred + '\\' +_oFile.getName();
		globals.RutaFicheroImportar = _oFile
	}
	else
	{
		_oFile = globals.RutaFicheroImportar
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
        // Save any unsaved data
        databaseManager.saveData();

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
		else 
		{
        globals.GCshowErrorDialog("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+
        						LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
        //application.output("ERROR: " + _oFile.getName() + " at row " + _nReadLine, LOGGINGLEVEL.ERROR);
        globals.GCshowErrorDialog("ERROR: " + _oErr+'\n'+
        						LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
		}
        //application.output("ERROR: " + _oErr, LOGGINGLEVEL.ERROR);
        databaseManager.rollbackTransaction();
    } finally {
        //
        // garbage collection
        //
        _oFR = null;
        _oIR = null;
        _oBR = null;
        globals.GCFichero43 = null
		globals.GCRutaFichero43 = null
		globals.RutaFicheroImportar = null
		globals.FicheroImportar = null
        application.updateUI()
		forms.dlg_ImportacionDatosGC.controller.recreateUI()
		forms.dlg_ImportacionDatosGC.onDataChangeDato()
    }
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F8FCBB3E-07DC-46A0-AECA-D070536CC717"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(false)
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"C736F52D-CADC-4315-AE2C-CDEFA348EAA9"}
 */
function onShow() {
	// TODO Auto-generated method stub
	//globals.GCCriterios = 0;
	//globals.GCTipoConsulta = 0;
	lblejemplo = null;
	TipoConsulta = 0;
	FormatoFichero = 0;
	//globals.GCTipoConsulta = 0;
	globals.RutaFicheroImportar = null;
	globals.GCFilaNombresCampos = 1;
	globals.FicheroImportar = null;
	
	
	
	onDataChangeDato()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F5BEBB44-C057-4D7F-AD1D-DF8EE43BE6EF"}
 */
function btnExaminar(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
	{
		BtnUpload(event) 
	}
	else
	{
		onActionStreamFileToServer(event)
	}
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"4EAF9FEB-D04F-4B73-B45B-BFB5EA148330"}
 */
function onDataChangeDato() {
	// TODO Auto-generated method stub
	switch (TipoConsulta) {
    case 0: 			    
    		if(FormatoFichero == 0) elements.lblejemplo.text = 'Ejemplo Fichero Clientes.csv'
    		else elements.lblejemplo.text = 'Ejemplo Fichero Clientes.xlsx'
			break;
    case 1: 			    
    		if(FormatoFichero == 0) elements.lblejemplo.text = 'Ejemplo Fichero Proveedores.csv'
    		else elements.lblejemplo.text = 'Ejemplo Fichero Proveedores.xlsx'
			break;
    case 2: 			    
    		if(FormatoFichero == 0) elements.lblejemplo.text = 'Ejemplo Fichero Articulos.csv'
    		else elements.lblejemplo.text = 'Ejemplo Fichero Articulos.xlsx'
			break; 
    case 3: 			    
    		if(FormatoFichero == 0) elements.lblejemplo.text = 'Ejemplo Fichero Familias.csv'
    		else elements.lblejemplo.text = 'Ejemplo Fichero Familias.xlsx'
			break;
    default: break;
}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B2A320C-6178-4700-9647-D0F3F1C8B5C7"}
 */
function btn_lblejemplo(event) {

	var server = application.getServerURL()
	switch (TipoConsulta) {
    case 0: 	
    		if(FormatoFichero == 0) server = server + 'uploads/Clientes.csv'	
    		else server = server + 'uploads/Clientes.xlsx'
		    application.showURL(server,'_blank')
			break;
    case 1: 
    		if(FormatoFichero == 0) server = server + 'uploads/Proveedores.csv'	
    		else server = server + 'uploads/Proveedores.xlsx'
			application.showURL(server,'_blank')
			break;
    case 2: 			    
    		if(FormatoFichero == 0) server = server + 'uploads/Articulos.csv'	
    		else server = server + 'uploads/Articulos.xlsx'
			application.showURL(server,'_blank')
			break;
    case 3: 			    
    		if(FormatoFichero == 0) server = server + 'uploads/Familias.csv'	
    		else server = server + 'uploads/Familias.xlsx'
			application.showURL(server,'_blank')
			break;  
    default: break;
	}
}
