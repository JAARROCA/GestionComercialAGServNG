/**
 *
 *
 *
 * @properties={typeid:35,uuid:"F2BE7717-91C4-44FF-94EE-29D91F0C6873",variableType:-4}
 */
var files_positions = null;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"0A4B1AAA-46A7-4241-BC60-17357521D923",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"D91EEE93-3AF9-4948-AA02-FBE3CCD9A634"}
 */
var subFolder = "/";

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"6A8543B1-82E6-4FBC-A539-9637DA328C7B"}
 */
var DOCPDF = null;

/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"60AAFE23-F307-4BC4-A11F-23383CAA2583"}
 */
function btn_newLinea()
{
	var ro = forms.FrmPedidosGC.elements.fld_fecha_cot.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera del Pedido antes de agregar Notas.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero la cabecera del Pedido antes de agregar Notas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var ped = forms.FrmPedidosGC.cod_cot;
		if(!ped) ped = -99;
		var query = "select * from [dbo].[cortraba] where [cod_cot] =" + ped;
					
		//var ds = controller.getDataSource().split('/');
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Pedido = dataset.getValue(1, 1)
		
		if(Pedido == null)
		{
			var msg = '<html>¡El Pedido aún no existe!<br><br>Cree uno y grabelo antes de añadir Notas.</html>'
			scopes.svyCustomDialogs.showErrorDialog('Error',msg,'Aceptar');
			//globals.GCshowErrorDialog('El Pedido aún no existe!\n\n Cree uno y grabelo antes de añadir Notas.',null,'Aceptar',null,null,null)
		}
		else
		{
			Pedido= forms.FrmPedidosGC.cod_cot;
			
			//if there's no transaction, start one - so they can "cancel"
			if(!globals.GCisEditing()) 
			{
				globals.GCstartEditing()
		
			//make a new record
				forms.dlgPedidosNotasGC.foundset.newRecord(false)
			
				
				forms.dlgPedidosNotasGC.cod_cot = Pedido;
				forms.dlgPedidosNotasGC.validate_autoEnter();
				
			
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogPedidosNotas('Nueva Nota', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlgPedidosNotasGC.elements.titulo.requestFocus()
			}
		}
	}	
}

/**
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"897B1A01-3E33-4ED9-B26D-9DF66BA6EC32"}
 */
function btn_showPedidoLinea()
{
	var ro = forms.FrmPedidosGC.elements.fld_fecha_cot.readOnly;
	//select the right row
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera del Pedido antes de editar Líneas.');
		//globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		if(rec) {
			var uid = rec['id'];
			//var uid = id
			var result = forms.dlgPedidosNotasGC.foundset.selectRecord(uid)
			var fsCount = databaseManager.getFoundSetCount(forms.dlgPedidosNotasGC.foundset);
			while(result==false)
			{
				if(fsCount == forms.dlgPedidosNotasGC.foundset.getSize()) return;
				forms.dlgPedidosNotasGC.foundset.setSelectedIndex(forms.dlgPedidosNotasGC.foundset.getSize());
				result = forms.dlgPedidosNotasGC.foundset.selectRecord(uid);
			}
			//start a transaction
			if(!globals.GCisEditing()) globals.GCstartEditing()
		
			//setup the method to execute when the dialog closes
			globals.GCdialog_performMethod = 'forms.lst_PedidosNotasGCNG.sub_deletePedidosNotas()'
			
			//show the "fake" dialog
			globals.GCshowDialogPedidosNotas('Editar Nota', 1, null, null, true, 'Borrar Nota', null, null, null, null);
		}
	}
}

/**
 *
 * @properties={typeid:24,uuid:"5E8EE30C-55E8-4B12-994A-7E96958FF7F1"}
 */
function sub_deletePedidoLinea()
{
	var query = 'select savepedidos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para borrar Notas de Pedido.','Aceptar');
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Pedido.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCdialog_buttonPressed == 'Borrar Nota')
		{
			if(rec) foundset.deleteRecord(rec);	
			else foundset.deleteRecord();			
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"087C10DC-268C-41AF-9977-9EA0351AE5DF"}
 */
function btndeletePedidoLinea(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(globals.GCisEditing()) forms[frm].btn_cancel()
	
	var query = 'select savepedidos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para borrar Notas de Pedido.','Aceptar');
		//globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Líneas de Pedido.',null,'Aceptar',null,null,null)
	}
	else
	{
		var resp = scopes.svyCustomDialogs.showQuestionDialog('Borrar Nota','¿Deseas realmente borrar esta Nota?','No','Si');
		if(resp == 'Si') {
			globals.core_dlg_buttonPressed = 'Si';
			BorraloLinea(event)
		}
		//var methd = 'forms.lst_Pedido_LineasGCNG.BorraloLinea(event)'
		//globals.GCshowQuestionDialog('Deseas realmente borrar esta línea?',methd,'No','Si',null,null)	
	}
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"896AB0A6-FB71-401C-8F59-A91853FDA6C8"}
 */
function BorraloLinea(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{	
		if(rec) foundset.deleteRecord(rec);
		else foundset.deleteRecord();
	}
}

/**
 * @type {JSRecord}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"3798DF4A-1832-4338-BBA5-206575AE67A7",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"8FCD314D-4928-4332-8DDD-DE05AAA2A710",variableType:8}
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
 * @properties={typeid:24,uuid:"F8938A4D-C7ED-4C66-AB19-1B6C5FAF64B3"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var column = elements.table_PedidoNotas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if(column.id != "editar" && column.id != "borrar" && column.id != "icon_pdf") {
		if(foundsetindex && columnindex && record) btn_showPedidoLinea();
	}
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
 * @properties={typeid:24,uuid:"0A23481E-39CB-48D2-A05E-BAE22C16D766"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
var column = elements.table_PedidoNotas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if (column.id === "editar") {
		btn_showPedidoLinea()
	}
	else if (column.id === "borrar") {
		btndeletePedidoLinea(event)
	}
	else if (column.id === "icon_pdf") {
		btn_PDF(event)
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"64EF7681-59EB-42DD-B00E-FCA46EA2C6E9"}
 */
function onShow(firstShow, event) {
	rec,fsindex = null;
	//forms.lst_PedidosNotasGCNG.elements.table_PedidoNotas.myFoundset.foundset.sort('nli_lot asc')
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"B7F9B67E-50C0-453B-836A-1D5627277FB9"}
 */
function btn_PDF(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmPedidosGC.btn_cancel()
	if(rec && rec['docupdf'])
	{	
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Visualizar Documento';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, MenuDocu, 'media:///ver.png');
		titulo = 'Borrar Documento';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, MenuDocu, 'media:///borrado.png');
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			menu.show(event.getSource(),20,16);				
		}
		//get the position of the last "." in the file name 
		/*var a = filename.lastIndexOf(".")*/
		//var b = "temp"
		/*var b = filename.substring(0,a)*/
		//get the 3 letter extension - INCLUDING the "."
		/*var c = filename.substring(a)*/
		//var tempFile = /*plugins.file.createFile(filename)*/plugins.file.createTempFile(b,c);
		/*var success = plugins.file.writeFile(tempFile, docupdf);
		uploadCallbackFunction2(tempFile)
		*/
	}
	else
	{
		if(globals.GCNombreUsuario == 'DEMO') {
			var msg ='<html>El usuario DEMO no tiene permiso para subir ficheros.<br><br>Póngase en contacto con AG Informática.</html>'
			scopes.svyCustomDialogs.showErrorDialog('Error',msg,'Aceptar');
			//globals.GCshowErrorDialog('El usuario DEMO no tiene permiso para subir ficheros.\nPóngase en contacto con AG Informática.', null, null, null, null, null)
		}
		else 
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT )
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"E4FF55B3-4318-45A0-B1EA-DA4E68C90B40"}
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
 * @properties={typeid:24,uuid:"6FDE8AD9-FFDA-4E7A-9BAE-1EB9EEC2D6AC"}
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
		        databaseManager.saveData();
			}		        			
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"6BBBF46A-7CA4-45D8-A3A9-CB7257703A60"}
 */
function MenuDocu(event){
	switch (arguments[4]) {
			case 'Visualizar Documento'.toUpperCase():
			//get the position of the last "." in the file name 
			var a = filename.lastIndexOf(".")
			//var b = "temp"
			var b = filename.substring(0,a)
			//get the 3 letter extension - INCLUDING the "."
			var c = filename.substring(a)
			var tempFile = /*plugins.file.createFile(filename)*/plugins.file.createTempFile(b,c);
			var success = plugins.file.writeFile(tempFile, docupdf);
			uploadCallbackFunction2(tempFile)
			break;
		case 'Borrar Documento'.toUpperCase():
		globals.core_dlg_buttonPressed = null;
			var msg = "¿Desea borrar de la Base de Datos este documento?"
			//var methd = 'forms.lst_PedidosNotasGC.BorradoPDF()'
			//globals.GCshowQuestionDialog(msg,methd,'No','Si',null,null)
			var resp = scopes.svyCustomDialogs.showQuestionDialog('Borrar Documento',msg,'No','Si');
			if(resp == 'Si') {
				globals.core_dlg_buttonPressed = 'Si';
				BorradoPDF()
			}
			break;		
		default: break;
	}
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 * @properties={typeid:24,uuid:"12983C39-1ACC-4020-8D01-DD35EC0C768B"}
 */
function uploadCallbackFunction(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
    plugins.file.streamFilesToServer(_oFile, doImportFile);
	
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 * @properties={typeid:24,uuid:"6CD13F48-5528-422C-9D0E-2490EFECBF3E"}
 */
function doImportFile(_oFile) {
    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
    var NombreFichero = _oFile.getName()
	NombreFichero = globals.GCQuitarCaracteresEspeciales(NombreFichero)		
	var RutaFichero =  _oFile;
	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT )
	{
		var rutapred = plugins.file.getDefaultUploadLocation()
	    _oFile = rutapred + "\\" +NombreFichero//_oFile.getName();
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
        databaseManager.saveData();
              

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
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 * @properties={typeid:24,uuid:"8FD59BA0-812B-4827-806F-EE803FA53FAE"}
 */
function uploadCallbackFunction2(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
   var monitor = plugins.file.streamFilesToServer(_oFile, Visualizar);
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile} _oFile
 *
 *
 *
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"96E70353-AE93-4376-8C56-EBAD7F65295D"}
 */
function Visualizar(_oFile)
{
	var ext = _oFile.getContentType()
	if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
	{
		var sw = 0;
		//var name = _oFile.getName();
		//var vFilePath = plugins.file.getDefaultUploadLocation()  +'\\'+ name;
		//var vLocalFilePath = 'C:\\tmp\\'+ _oFile.getName();
		//var s = plugins.UserManager.copyFileFromServer(vFilePath, vLocalFilePath, true)
		
		//Creates a temporary file (will be deleted after application shutdown)

		//get the position of the last "." in the file name 
		var a = filename.lastIndexOf(".")
		//var b = "temp"
		var b = filename.substring(0,a)
		//get the 3 letter extension - INCLUDING the "."
		var c = filename.substring(a)

		//create a temporary file that will be auto-deleted by Servoy when client is exited
		var fname = plugins.file.createTempFile(b,c)

		//write the binary data out to disk at the temporary file location
		plugins.file.writeFile(fname,docupdf); 
		
		var vLocalFilePath = fname.getAbsolutePath();
		//windows
        if (utils.stringMiddle(application.getOSName(), 1, 7) == "Windows") {
        	sw = 1;
            var success = application.executeProgram('rundll32', ['url.dll,FileProtocolHandler', vLocalFilePath])
        }
        //FreeBSD or Linux
        else if (utils.stringMiddle(application.getOSName(), 1, 7) == "FreeBSD" || utils.stringMiddle(application.getOSName(), 1, 5) == "Linux") {
        	sw = 1;
            success = application.executeProgram('mozilla', [vLocalFilePath])
        }
        //Mac OSX
        else if (application.getOSName().match("Mac")) {
        	sw = 1;
            success = application.executeProgram('open', [vLocalFilePath])
        }
        if(sw == 1)
        {
        	
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
			application.showURL(serverURL + "uploads/" + _oFile.getName());
			//plugins.WebClientUtils.executeClientSideJS('location.reload();');
		}
		else
		{
			serverURL = application.getServerURL() 
		    application.showURL(serverURL + "uploads/" + _oFile.getName()+'?nodebug=true','_blank','height=600,width=800,status=yes,toolbar=no,menubar=no,location=no')
			//plugins.WebClientUtils.executeClientSideJS('location.reload();');
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
 * @properties={typeid:24,uuid:"4D268E21-5789-4355-8956-7F9AD8D8B6CF"}
 */
function BorradoPDF()
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		if(rec) {
			rec['docupdf'] = null;	
			rec['filename'] = null;	
			
			databaseManager.saveData(rec)
		}
	}
}
