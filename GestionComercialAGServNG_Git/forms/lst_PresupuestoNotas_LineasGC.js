/**
 * @properties={typeid:24,uuid:"7532EFDE-3977-4E79-BBF6-4C4E83C02F6D"}
 * @SuppressWarnings(deprecated)
 */
function btn_newLinea()
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	var ro = forms.FrmPresupuestosGC.elements.fld_fecha_cof.readOnly;
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera del Presupuesto antes de agregar Líneas.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero la cabecera de la Factura antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savepresupuestos from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		if(save != '1')
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Líneas de Presupuestos.','Aceptar');
			//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Presupuestos.',null,'Aceptar',null,null,null)
		}
		else
		{
			if(forms.FrmPresupuestosGC.cod_cof)
			{
				query = 'select * from [cofertas] where cod_cof =' + forms.FrmPresupuestosGC.cod_cof
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var Presupuesto = dataset.getValue(1, 1)
				
				if(Presupuesto == null)
				{
					scopes.svyCustomDialogs.showErrorDialog('Error','Cabecera Inexistente! Cree una y grabela antes de añadir Notas.','Aceptar');
					//globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir Notas.',null,'Aceptar',null,null,null)
				}
				else
				{
					Presupuesto= forms.FrmPresupuestosGC.cod_cof
					//if there's no transaction, start one - so they can "cancel"
					if(!globals.GCisEditing()) 
					{
						
						globals.GCstartEditing()
					
						//make a new record
						forms.dlg_Linea_PresupuestoNotasGC.foundset.newRecord(true)
					
						forms.dlg_Linea_PresupuestoNotasGC.nup_lofnotas = Presupuesto
						forms.dlg_Linea_PresupuestoNotasGC.validate_autoEnter()
						
						//databaseManager.saveData();
					
						//show the "fake" dialog
						globals.GCshowDialogPresupuestoNotasLinea('Nueva Nota', null, null, null, null, null, null, null, null, null);
					
						//go first field
						forms.dlg_Linea_PresupuestoNotasGC.controller.focusFirstField()
					}
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"0DECE3A1-3E62-4A68-A297-7C399584E2F8"}
 * @SuppressWarnings(deprecated)
 */
function btn_showPresupuestoLinea()
{
	var ro = forms.FrmPresupuestosGC.elements.fld_fecha_cof.readOnly;
	var Presupuesto= forms.FrmPresupuestosGC.cod_cof	
	if(globals.GCisEditing() && ro == false)
	{
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera del Presupuesto antes de editar Líneas.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero la cabecera del Presupuesto antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		//select the right row
		var frm = currentcontroller.getName()
		if(frm == 'frm_nav_main_principalNGGC') {
			frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
		}
		if(globals.GCisEditing()) forms[frm].btn_cancel()
		
		var result = forms.dlg_Linea_PresupuestoNotasGC.foundset.selectRecord(nli_lofnotas, Presupuesto)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_PresupuestoNotasGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_Linea_PresupuestoNotasGC.foundset.getSize()) return;
			forms.dlg_Linea_PresupuestoNotasGC.foundset.setSelectedIndex(forms.dlg_Linea_PresupuestoNotasGC.foundset.getSize());
			result = forms.dlg_Linea_PresupuestoNotasGC.foundset.selectRecord(nli_lofnotas, Presupuesto);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
		
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_PresupuestoNotas_LineasGC.sub_deletePresupuestoLinea()'
	
		//show the "fake" dialog
		globals.GCshowDialogPresupuestoNotasLinea('Editar Nota', 1, null, null, true, 'Borrar Nota', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"BCB71CE7-F048-47A3-A95A-70CA3F0F51A1"}
 */
function sub_deletePresupuestoLinea()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Nota')
	{
		if(rec) forms.lst_PresupuestoNotas_LineasGC.foundset.deleteRecord(rec);
		else forms.lst_PresupuestoNotas_LineasGC.foundset.deleteRecord();		
	}
}

/**
*
*
 *
 * @properties={typeid:24,uuid:"8B2BBB42-171F-4AC5-B05F-713345650B0E"}
 */
function BorraloLinea(){
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		if(rec) foundset.deleteRecord(rec)
		else foundset.deleteRecord()		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"77976540-2F7D-4CB2-A7AC-018409177707"}
 */
function btn_delete(event) {
	var resp = scopes.svyCustomDialogs.showQuestionDialog('Borrar Nota/Documentación','¿Deseas realmente borrar esta Nota/Documentación?','No','Si');
	if(resp=='Si') {
		globals.core_dlg_buttonPressed = 'Si';
		BorraloLinea();
	}
	//var methd = 'forms.lst_PresupuestoNotas_LineasGC.BorraloLinea()'
	//globals.GCshowQuestionDialog('Deseas realmente borrar esta Nota?',methd,'No','Si',null,null)

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"43BE2D8E-AAA9-431E-98C0-122DD8EC9B64"}
 * @SuppressWarnings(wrongparameters)
 */
function btnshowDocument(event) {
	// TODO Auto-generated method stub
	if(rec && rec['docu'] && rec['filename'])
	{   
		var tempFile = plugins.file.createFile(rec['filename'])//plugins.file.createTempFile(filename,'.pdf');
		var success = plugins.file.writeFile(tempFile, rec['docu']);
		uploadCallbackFunctiondocu2(tempFile)
		
	}
	else if(rec && rec['filename'])
	{
		if((rec['filename'].indexOf('http://',0) >= 0 || rec['filename'].indexOf('https://',0) >= 0))
		{
			application.showURL(rec['filename']);	
		}
		else
		{
			application.showURL( 'http://' + rec['filename']);
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
 * @properties={typeid:24,uuid:"26E643B9-4ABF-4FF5-AC95-F4E9C1C35FF6"}
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
 * @properties={typeid:24,uuid:"4D0EDAFE-4246-4C9A-9F24-55CA0A566E08"}
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
			var docpdf = _oFile.getBytes()
			plugins.file.writeFile(fname,docpdf); 
			
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
			//plugins.WebClientUtils.executeClientSideJS('location.reload();');
			
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

/**
 * @type {JSRecord}
 *
 * @properties={typeid:35,uuid:"F4C314F4-EC3B-4087-A453-19554D0D5692",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"C125B7F7-A777-48C6-B3FB-1EB480A4A2DE",variableType:8}
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
 * @properties={typeid:24,uuid:"E711D2D8-45F0-45A2-951C-657E1C156F56"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	// TODO Auto-generated method stub
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if(foundsetindex && columnindex && record) btn_showPresupuestoLinea();
	
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
 * @properties={typeid:24,uuid:"8529347B-45D0-4A5B-9D27-CDA82AA0735B"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	var column = elements.table_PresupuestoNotas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if (column.id === "editar") {
		btn_showPresupuestoLinea();
	}
	else if (column.id === "borrar") {
		btn_delete(event)
	}
	else if (column.id === "docu") {
		btnshowDocument(event)
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"902C1FE8-AF6A-48CD-BF0B-5E067E3B9D3A"}
 */
function onShow(firstShow, event) {
	rec = null;
	fsindex = null;
	elements.table_PresupuestoNotas.myFoundset.foundset.sort('nli_lofnotas asc')
}
