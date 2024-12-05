/**
 *
 *
 *
 * @properties={typeid:35,uuid:"ADA788E1-91A7-4E5B-B09A-6554F3E567A9",variableType:-4}
 */
var files_positions = null;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"218A7894-BB5F-4F82-93DE-5D86D95B8BCF",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"F47EF761-51C2-4920-8B16-629A2F65A133"}
 */
var subFolder = "/";

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"3BAF6517-29E0-4114-B7E4-24A90BB318EA"}
 */
var DOCPDF = null;

/**
 *
 * @properties={typeid:24,uuid:"D5901991-1B1D-474C-9175-5D36E7639248"}
 * @SuppressWarnings(deprecated)
 */
function btn_newEmpresaPExtra()
{
	var ro = forms.FrmPedidosGC.elements.fld_fecha_cot.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el pedido antes de agregar Notas.',null,'Aceptar',null,null,null)
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
			globals.GCshowErrorDialog('El Pedido aún no existe!\n\n Cree uno y grabelo antes de añadir Notas.',null,'Aceptar',null,null,null)
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
 *
 * @properties={typeid:24,uuid:"ABE8413D-7BF5-4E01-93DF-3BB59E086AF3"}
 * @SuppressWarnings(deprecated)
 */
function btn_showEmpresaPExtra()
{
	var ro = forms.FrmPedidosComprasGC.elements.fld_fecha_cot.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero el pedido antes de editar Notas.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		var result = forms.dlgPedidosNotasGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlgPedidosNotasGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlgPedidosNotasGC.foundset.getSize())
			{
			return;
			}
		forms.dlgPedidosNotasGC.foundset.setSelectedIndex(forms.dlgPedidosNotasGC.foundset.getSize());
		result = forms.dlgPedidosNotasGC.foundset.selectRecord(uid);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_PedidosNotasGC.sub_deletePedidosNotas()'
		
		//show the "fake" dialog
		globals.GCshowDialogPedidosNotas('Editar Nota', 1, null, null, true, 'Borrar Nota', null, null, null, null);
	}
}

/**
 *
 * @properties={typeid:24,uuid:"008688DF-6125-4B9D-9A58-6AD2FE510C84"}
 */
function sub_deletePedidosNotas()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Nota')
	{
		//check to make sure that the address in question isn't used on any orders
		/*var bAdrCnt = addresses_to_orders_billing.getSize()
		var sAdrCnt = addresses_to_orders_shipping.getSize()

		if(bAdrCnt == 0 && sAdrCnt == 0)
		{*/
		forms.lst_PedidosNotasGC.foundset.deleteRecord()
		/*}
		else
		{
			//there are orders that use this address
			var msg = 'There are orders that use this address as a shipping or billing address.' +
			' Change the orders to a new address, then you can delete this address.'
			globals.GCshowErrorDialog(msg,'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null)
		}*/
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
 * @properties={typeid:24,uuid:"93683DD0-FC31-4DD1-9458-288973D0B55E"}
 */
function btndeletePedidoNotaLinea(event) {
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
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar en los Pedidos.',null,'Aceptar',null,null,null)
	}
	else
	{
		globals.GCdialog_buttonPressed = null;
		var methd = 'forms.lst_PedidosNotasGC.BorraloLinea(event)';
		globals.GCshowQuestionDialog('Deseas realmente borrar esta línea?',methd,'No','Si',null,null)
	}
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 *
 *
 * @properties={typeid:24,uuid:"FE2009EA-120F-4CE4-B10B-34CA6DFB15D1"}
 */
function BorraloLinea(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{	
		foundset.deleteRecord()	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"55111184-1CB5-4D8F-A1EF-1D31A188D367"}
 */
function btn_PDF(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmPedidosGC.btn_cancel()
	if(docupdf)
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
		if(globals.GCNombreUsuario == 'DEMO') globals.GCshowErrorDialog('El usuario DEMO no tiene permiso para subir ficheros.\nPóngase en contacto con AG Informática.', null, null, null, null, null)
		//else if(globals.Permiso != '1') globals.GCshowErrorDialog("El usuario '"+globals.GClogin_usuario+"' no tiene permiso para subir ficheros.", null, null, null, null, null)
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"85902D69-6B6E-4C65-AE2C-C20602A61471"}
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
 * @properties={typeid:24,uuid:"AF0E1D5A-B58A-47FB-99FD-E473155ACF57"}
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
 * @properties={typeid:24,uuid:"7C68611C-B8E2-46FE-92D7-B5A89237269F"}
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
			var msg = "¿Desea borrar de la Base de Datos este documento?"
			var methd = 'forms.lst_PedidosNotasGC.BorradoPDF()'
			globals.GCshowQuestionDialog(msg,methd,'No','Si',null,null)
			break;		
		default: break;
	}
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 * @properties={typeid:24,uuid:"C92A6E66-20DC-46D3-A1AA-69086DAFE0E8"}
 */
function uploadCallbackFunction(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
    plugins.file.streamFilesToServer(_oFile, doImportFile);
	
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 * @properties={typeid:24,uuid:"DBDC113B-EAD7-452F-B86B-422CA8E698B3"}
 */
function doImportFile(_oFile) {
    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
    var NombreFichero = _oFile.getName()
	NombreFichero = globals.GCQuitarCaracteresEspeciales(NombreFichero)		
	var RutaFichero =  _oFile;
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT )
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
 * @properties={typeid:24,uuid:"6B58F74B-D919-4CEF-A8F8-EC5A6868B334"}
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
 * @properties={typeid:24,uuid:"FC663A34-60CB-4A78-8E79-52FD78562E3C"}
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
 * @properties={typeid:24,uuid:"9ECAF3BD-FD1A-4F7F-AE43-3553F99A9FE3"}
 */
function BorradoPDF()
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		forms.lst_PedidosNotasGC.docupdf = null	
		forms.lst_PedidosNotasGC.filename = null	
		
		databaseManager.saveData()
	}
}
