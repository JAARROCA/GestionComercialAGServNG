/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"90890EC1-9146-4E8C-8576-6AE14FCB71FD"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	elements.ctabancaria.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7BFCE175-17F0-4546-902B-B1BC239C38FF"}
 */
function onActioncta(event) {
	// TODO Auto-generated method stub
	elements.bic.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"585D3C8F-07E1-4E69-9A24-8630F915298D"}
 */
function onActionbic(event) {
	// TODO Auto-generated method stub
	elements.registro.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A5DEF1AE-2289-458C-9B3C-15B240F652B3"}
 */
function onActionregistro(event) {
	// TODO Auto-generated method stub
	elements.tomo.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C57793F9-79DD-4153-ABFD-E6A0614E0ED7"}
 */
function onActiontomo(event) {
	// TODO Auto-generated method stub
	elements.folio.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BF8E46F1-5AB7-4C08-9D57-9723EEF36B3D"}
 */
function onActionfolio(event) {
	// TODO Auto-generated method stub
	elements.hojaregistral.requestFocus()
	
}

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"9A4BF00A-4563-4496-BA12-ED18CB3E2EA4"}
 */
function onShow() {
	// TODO Auto-generated method stub
	elements.ctabancaria.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 *
 * @SuppressWarnings(wrongparameters)
 *
 *
 * @properties={typeid:24,uuid:"A299A6D3-4089-4928-A81D-7918492156B5"}
 */
function btn_CD(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing())
	{
		if(certifdigital)
		{ 
			var msg = "¿Desea borrar de la Base de Datos este Certificado?"
        	var methd = 'forms.dlg_ParametroAplicacionGC.BorradoCD()'
        	globals.GCshowQuestionDialog(msg,methd,'No','Si',null,null) 
		}
		else
		{
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT )
			{
				BtnUpload(event) 
			}
			else
			{
				onActionStreamFileToServer(event) 
			}
		}
	}	
}

/**
*
* @SuppressWarnings(deprecated)
*
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"39F6608B-388A-484E-936E-A8589D8F12E8"}
 */
function BorradoCD()
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		certifdigital = null	
		name_certifdigital = null	
		clave_certifdigital = null	
		//databaseManager.saveData()
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
 * @properties={typeid:24,uuid:"C698D8D7-AF01-4D84-BEE2-C7EBF3FFFA00"}
 */
function BtnUpload(event) 
{
	var startdir = gcfechalimite_usuarios.startdirectory;
	if(!startdir) startdir = null;
	plugins.file.showFileOpenDialog( 1, startdir, false, new Array("p12 and pfx","p12","pfx"), uploadCallbackFunction, 'Seleccione certificado' );
	
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
 * @properties={typeid:24,uuid:"218383D6-5FA3-4F0B-B370-9F0EDAA1938F"}
 */
function onActionStreamFileToServer(event) 
{
	var fromServer = false;
	var subFolder = "/";
	// initialize the progress state
	// validate the relative path if provided
	if(subFolder)
	{
		var startdir = contafechalimite_usuarios.startdirectory;
		if(!startdir) startdir = null;
		var currentFile = plugins.file.showFileOpenDialog( 1, startdir, false,new Array("p12 and pfx","p12","pfx"), null, 'Seleccione certificado' );
		if (currentFile) 
		{
			if(subFolder)
			{
				var rawData = plugins.file.readFile(currentFile)
				certifdigital = rawData
				name_certifdigital = currentFile.getName();
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
 * @properties={typeid:24,uuid:"400970AE-0908-40EE-9CF6-A5407F502D8E"}
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
 * @properties={typeid:24,uuid:"CA507B38-9B9F-4516-93F6-2F826271D9F9"}
 */
function doImportFile(_oFile) {
	    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
	    var NombreFichero = _oFile.getName()
		NombreFichero = globals.GCQuitarCaracteresEspeciales(NombreFichero)		
		var RutaFichero =  _oFile;
		if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT )
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
	    //databaseManager.startTransaction();

	    try {
	        while (_sLine) {
	            _sLine = _oBR.readLine();
	            _nReadLine++;

	            if (_sLine) {

	                // Put your processing code here
	            }
	        }
	        
	        var rawData = plugins.file.readFile(_oFile)
			certifdigital = rawData
			name_certifdigital = NombreFichero;
	        // Save any unsaved data
	        //databaseManager.saveData();

	        //
	        //do NOT forget this close! to prevent memory leaks
	        //
	        _oBR.close();

	        // Close the database transaction
	        //databaseManager.commitTransaction();
	       
	    } catch (_oErr) {
	    	_oBR.close();
	    	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
	    	{
	    		plugins.webnotificationsToastr.error("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+LOGGINGLEVEL.ERROR,'¡Error!')
				plugins.webnotificationsToastr.error("ERROR: " + _oErr+'\n'+LOGGINGLEVEL.ERROR,'¡Error!')
	    	}
			else 
			{
	        globals.GCshowErrorDialog("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
	        //application.output("ERROR: " + _oFile.getName() + " at row " + _nReadLine, LOGGINGLEVEL.ERROR);
	        globals.GCshowErrorDialog("ERROR: " + _oErr+'\n'+LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
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
	       
	        
	    }
	}
