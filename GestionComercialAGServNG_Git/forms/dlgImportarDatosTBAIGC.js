/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0F5221F7-0DB6-4832-84AC-E6A84D3D8FD4",variableType:4}
 */
var currentIndex = -1;

/**
 * @properties={typeid:35,uuid:"5DFEE54D-71E3-4681-BE62-B6FC3A7EB7D4",variableType:-4}
 */
var files_positions = null;

/**
 * @properties={typeid:35,uuid:"1674C58C-9B85-474C-A743-1C41E242B83E",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E103819F-8BAC-428A-81B5-1F78923ABD97"}
 */
var subFolder = "/";

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ABF426D8-18AB-463D-918F-3710E45D7CA5"}
 * @SuppressWarnings(unused)
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
		var currentFile = plugins.file.showFileOpenDialog( 1, startdir, false, null, null, 'Seleccione el Fichero a Importar' );
		if (currentFile) 
		{
			globals.GCFichero43 = currentFile.getName()
			globals.GCRutaFichero43 = currentFile
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
 * @properties={typeid:24,uuid:"B1FFAD42-1A37-4A5E-94B4-4B62C0018F00"}
 */
function uploadCallbackFunction(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
    plugins.file.streamFilesToServer(_oFile, doImportFile);
}

/**
* @param {plugins.file.JSFile} _oFile
*
 * @properties={typeid:24,uuid:"20ED8F5E-4EE7-4E51-88EA-3C889650B30F"}
 */
function doImportFile(_oFile) {
    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
	globals.GCFichero43 =  _oFile.getName();
	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT )
	{
		var rutapred = plugins.file.getDefaultUploadLocation()
	    _oFile = rutapred + '\\' +_oFile.getName();
		globals.GCRutaFichero43 = _oFile
	}
	else
	{
		_oFile = globals.GCRutaFichero43
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
        globals.GCFichero43 = null
		globals.GCRutaFichero43 = null
		globals.RutaFicheroImportar = null
		globals.FicheroImportar = null
		globals.GCFicheroImportacion = null;
    	 
    }
}

/**
 * Callback method for when form is shown.
 * 
 * @param {JSEvent} event the event that triggered the action

 *
 * @properties={typeid:24,uuid:"EDAF8BF7-C3C7-4D76-B42C-BD27FEC3B2C2"}
 */
function onShow(event) {
	// TODO Auto-generated method stub
	globals.GCFicheroImportacion = null;
	globals.GCFilaNombresCampos = 1;
	globals.GCFichero43 = null;
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
 * @properties={typeid:24,uuid:"1A1465BD-04A9-4017-BF5C-6556B5639C5F"}
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
 *
 * @properties={typeid:24,uuid:"560E42D0-00FB-4860-A2DF-6D99B96B5980"}
 */
function btnExaminar(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT )
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
 * @properties={typeid:24,uuid:"730A589F-9D8C-4B32-B124-AAF698EE4A66"}
 */
function btnFormato(event) {
	// TODO Auto-generated method stub
	forms.dialog_FormatoDatosImportar.html_formatodatosimportar = null
	var HTML = '<html><body>'
	
	HTML += '<p><strong><span style="text-decoration: underline;">FORMATO DE FICHERO PLANO A IMPORTAR</span></strong></p>'+
	'<table style="height: 110px; width: 339px;" border="0">'+
	'<tbody>'+
	'<tr>'+
	'<td style="text-align: left;"><span style="text-decoration: underline;">ORDEN</span></td>'+
	'<td style="text-align: left;"><span style="text-decoration: underline;">CAMPO</span></td>'+
	'<td style="text-align: left;"><span style="text-decoration: underline;">TAM. BYTES</span></td>'+
	'<td style="text-align: left;"><span style="text-decoration: underline;">FORMATO</span></td>'+
	'<td style="text-align: left;"><span style="text-decoration: underline;">COMENTARIO</span></td>'+
	'</tr>'+
	'<tr>'+
	'<td style="text-align: center;">1</td>'+
	'<td>N&ordm; CUENTA &nbsp;</td>'+
	'<td>Num. 8 pos</td>'+
	'<td>&nbsp;</td>'+
	'<td>&nbsp;</td>'+
	'</tr>'+
	'<tr>'+
	'<td style="text-align: center;">2</td>'+
	'<td>DESCRIPCI&Oacute;N</td>'+
	'<td>&nbsp;</td>'+
	'<td>&nbsp;</td>'+
	'<td>&nbsp;</td>'+
	'</tr>'+
	'<tr>'+
	'<td style="text-align: center;">3</td>'+
	'<td>CLAVE DESGLOSE</td>'+
	'<td>&nbsp;</td>'+
	'<td>&nbsp;</td>'+
	'<td>&nbsp;</td>'+
	'</tr>'+
	'<tr>'+
	'<td style="text-align: center;">4</td>'+
	'<td>TIPO IVA</td>'+
	'<td>&nbsp;</td>'+
	'<td>&nbsp;</td>'+
	'<td>&nbsp;</td>'+
	'</tr>'+
	'<tr>'+
	'<td style="text-align: center;">5</td>'+
	'<td>&nbsp;</td>'+
	'<td>&nbsp;</td>'+
	'<td>&nbsp;</td>'+
	'<td>&nbsp;</td>'+
	'</tr>'+
	'</tbody>'+
	'</table>'+
	'p>&nbsp;</p>'
	
	
	forms.dialog_FormatoDatosImportar.html_formatodatosimportar = HTML
		
		
	//globals.showDialogFormatoDatosImportar(null,1,null,null,null,null,null,null,null,null)
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"30D67976-DF25-48EC-A3F1-C5890A686CCB"}
 */
function lblejemplofihero(event) {
	var server = application.getServerURL()
	server = server + 'uploads/Ejemplo_Fichero_datos_TBAI.csv'
    application.showURL(server,'_blank')
}
