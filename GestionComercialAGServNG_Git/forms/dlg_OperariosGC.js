/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"829A6BC8-FDC2-48A9-BBFE-C4E7FF6D1832"}
 */
var OperarioID = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4B5409C7-5CAD-40EF-854B-ABCEB2A5D83B"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"84AD80D5-F2ED-41CD-B0CD-54D7ADF03DD3"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [IDOperario] from [tbMaestroOperario] where [IDOperario] = " + idoperario;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Codigo duplicado!\n\nElija otro.','¡Error!')
		else {
		var methd = 'forms.dlg_OperariosGC.foco()';
		globals.GCshowErrorDialog('Codigo duplicado!\n\nElija otro.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		elements.nombre.requestFocus()
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"2653DDFC-0D6A-47DB-8DF5-67150E68FA56"}
 */
function foco() {
	elements.codigo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"A56C17A6-A663-4A13-8964-EF799E27CB49"}
 * @SuppressWarnings(deprecated)
 * @AllowToRunInFind
 */
function btn_search()
	{
		/** @type String */
		var frm = currentcontroller.getName();
		/** @type String */
		var search = globals.GCnav_search2

		if(search)
		{
			var dataType = 'str'
			var searchStr = '%' + search + '%'
			var op = ""

			//see if there are any operators (< > = !=) entered
			if(search.indexOf('!=') != -1)
			{
				op = '!='
			}
			else if(search.indexOf('>=') != -1)
			{
				op = '>='
			}
			else if(search.indexOf('>') != -1)
			{
				op = '>'
			}
			else if(search.indexOf('<=') != -1)
			{
				op = '<='
			}
			else if(search.indexOf('<') != -1)
			{
				op = '<'
			}
			else if(search.indexOf('=') != -1)
			{
				op = '='
			}

			if(op) search = utils.stringReplace(search, op, '') //take off the operator to see if date or num

			//try to guess what type of data is entered in the search
			if(search.indexOf('/') != -1 || search.indexOf('-') != -1)
			{
				dataType = 'date' //probably a date
				search = new Date(search)
				searchStr = op + search
			}
			else if(search.indexOf('.') != -1 && !isNaN(parseFloat(search)))
			{
				dataType = 'number' //probably a number
				search = parseFloat(search);
				searchStr = op + search
			}
			else if(!isNaN(parseInt(search)) && search.indexOf('.') == -1)
			{
				dataType = 'int' //probably an integer
				search = parseInt(search, 10);
				searchStr = op + search
			}

			//Encontrar Pescado
			if(frm.indexOf('Operarios') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				if(dataType == 'str')
				{
					/*globals.GCshowErrorDialog('There is no numeric or date data to find in clientes.', null, 'OK', null, null, null);
					elements.fld_search.selectAll()
					return*/
					
					forms[frm]['nombre'] = searchStr
					forms[frm].foundset.newRecord()
					forms[frm]['apellido1'] = searchStr
					forms[frm].foundset.newRecord()
					forms[frm]['apellido2'] = searchStr
					forms[frm].foundset.newRecord()
					
				}
				else if(dataType == 'int')
				{
					forms[frm]['idoperario'] = searchStr
				}
						
				//perform the search
				var found = forms[frm].controller.search()

				//see if anything was found
				if(found == 0)
				{
					//globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', null, null, null, null, null)
					forms[frm].foundset.loadAllRecords()
					forms[frm].foundset.sort('idoperario ASC')
				}
				else
				{
					//show the "show all" button
					//databaseManager.refreshRecordFromDatabase(forms.dlg_TiposPescados.foundset,-1);		
					if(dataType == 'str')
					{
						var query = "select [ID] from [tbMaestroOperario] "+
								"where [Nombre] LIKE '"+searchStr+"' OR [Apellido1] LIKE '"+
								searchStr+"' OR [Apellido2] LIKE '"+searchStr+"' ORDER BY [IDOperario]";
					}
					else if(dataType == 'int')
					{
						query = "select [ID] from [tbMaestroOperario] "+
								"where [IDOperario] >= "+search+" ORDER BY [IDOperario]";
					}
					var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var uuid = dataset.getValue(1,1)
					foundset.selectRecord(uuid)
				}
			}
			else
			{
				//empty search - so show all			
				elements.fld_search_usuario.requestFocus(false)
			}
		}
		else
		{
			forms[frm].foundset.loadAllRecords()
			forms[frm].foundset.sort('IDOperario ASC')
		}
		
	}

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"0C818571-C744-4077-9582-F6102F749459"}
 * @AllowToRunInFind
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = null;
	OperarioID = null;
	foundset.loadAllRecords()
	foundset.sort('idoperario ASC')
	elements.codigo.editable = false
	elements.codigo.bgcolor = '#f0f0f0';
	
	
	sub_setPreviewLabels();	
}

/**
*
*
 * @properties={typeid:24,uuid:"EE390A1F-485C-4987-8D2D-A0EAEA134C93"}
 */
function btn_sendEmail()
{
	if(email) 
	{
		if(utils.stringPatternCount(email,",") == 0
				&& utils.stringPatternCount(email," ") == 0
				&& utils.stringPatternCount(email,"@") == 1
				&& utils.stringPatternCount(email,".") >= 1)
				{
					if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
					{
						application.showURL( 'mailto:' + email, '_blank');
					}
					else
					{
						globals.GCFormulario = 'dlg_Operarios'
						globals.GCshowDialogEnvioMail('Impresión y Envio Albarán',1,null,null,null,null,null,null,null,null)
					}
				}
				else
				{
					globals.GCshowInfoDialog("Debes introducir una dirección de correo válida.", null,'Aceptar', null, null, null);			
				}
		
	}
	// create a file object
	
}

/**
 *
 * @properties={typeid:24,uuid:"6F6094FC-B7CA-4CF4-A5C9-E91002696898"}
 */
function sub_setPreviewLabels()
{
	/*if(logo && (utils.stringPatternCount(image_mime_type, 'image') == 0 || !image_mime_type))
	{
		//show that there is no preview for this item
		elements.lbl_imagePreview.text = '<html><body><center>No Preview for .' + image_type + ' files</center></body></html>';
		elements.lbl_imagePreview.visible = true;
		application.updateUI(100);
	}
	else*/ 
	if(!foto)
	{
		elements.lbl_imagePreview.text = 'Sin Foto';
		elements.lbl_imagePreview.visible = true;
		application.updateUI(100);
	}
	else
	{
		elements.lbl_imagePreview.text = '';
		elements.lbl_imagePreview.visible = false;
		application.updateUI(100);
	}
}

/**
 *
 * @properties={typeid:24,uuid:"1906120C-8822-43EC-B8A4-A526F6161949"}
 */
function product_image_dataChange() {
	databaseManager.setAutoSave(false);
	
	if (globals.GCsmart_chg == 0) {
		var rawData = foto;

		if(rawData)
		{
			//var fileName = product_image_filename;
			//var ext = utils.stringRight(fileName, 3);
			var type = plugins.images.getImage(rawData);
			var contentType = type.getContentType();

			if(utils.stringPatternCount(contentType, 'image') > 0)
			{
				//it's an image we can display
				//image_thumbnail = application.createJPGImage(rawData, 90, 90);  - depricated method

				var img_raw = plugins.images.getImage(rawData);
				foto = img_raw.resize(200,200);
			}
			else
			{
				//there will be no display
				foto = null;
				//show error message!
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No es una Imagen válida!','¡Error!')
				else globals.GCshowErrorDialog('No es una Imagen válida!',null,null,null,null,null)
				return;
			}
			//image_type = ext;
			//image_name = product_image_filename;
			//image_mime_type = product_image_mimetype;

			sub_setPreviewLabels();
		}
	}
	else {
		globals.GCsmart_chg = 0;
	}
	/*if (product_image_mimetype == null)
	{
		image_mime_type = null
		image_name = null
		image_thumbnail = null
		image_type = null
		product_image = null;
		product_image_filename = null;
		product_image_mimetype = null;
		sub_setPreviewLabels();
	}*/
}

/**
 *
 * @properties={typeid:24,uuid:"82FCD440-C29A-47FD-8D45-A8FED025C615"}
 */
function btn_deleteImage()
{
	if(foto)
	{
		//show a warning dialog
		//globals.GCshowWarningDialog('¿¿Estás seguro que quieres borrar este Logo?', 'forms.dlg_ParametroAplicacion.sub_clearImage()','Cancel','Delete', null, null)
		foto = null
		sub_setPreviewLabels();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"7CBE836B-66AD-46BB-AB40-C18228ABCF64"}
 */
function onActionBtnPaises(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Operarios'
	//globals.GCshowDialogPaises('Paises', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialogPaises')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialogPaises", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Paises';
	//win.resizable = true;
	//win.show(forms.dialog_PaisesGC)
	win.show(forms.dlgPaisesGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9C9E6270-7ABA-4DB3-85E9-8AC09390A935"}
 */
function onActioncodigo(event) {
	// TODO Auto-generated method stub
	elements.nombre.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"795DEE5E-89C8-4FA4-9FD1-3160ADC7323C"}
 */
function onActionnombre(event) {
	// TODO Auto-generated method stub
	elements.apellido1.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6C5376B2-8B91-41B6-95C8-668B1E072C15"}
 */
function onActionapel1(event) {
	// TODO Auto-generated method stub
	elements.apellido2.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CBCFA5F2-E74B-449A-BF7C-AF83AEE09E90"}
 */
function onActionapel2(event) {
	// TODO Auto-generated method stub
	elements.fechaalta.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C4848D99-C207-4B29-B12A-3E735F10AF28"}
 */
function onActionfechaalta(event) {
	// TODO Auto-generated method stub
	elements.fechabaja.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C70609FE-9EE5-4A36-8006-20CEA5EE09C2"}
 */
function onActionfechabaja(event) {
	// TODO Auto-generated method stub
	elements.direccion.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9603E290-CCD7-4BCA-9638-B5ADA026CFA0"}
 */
function onActiondir(event) {
	// TODO Auto-generated method stub
	elements.poblacion.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F345D61A-A777-47E3-B3CE-8DC9B8A76284"}
 */
function onActionpobl(event) {
	// TODO Auto-generated method stub
	elements.codpostal.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5781E981-9A6D-4A36-A063-44A42B85193F"}
 */
function onActioncp(event) {
	// TODO Auto-generated method stub
	elements.provincia.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B0D39CB-3F2E-434A-B453-50B653E416AB"}
 */
function onActionprov(event) {
	// TODO Auto-generated method stub
	elements.idpais.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F0F8DE20-8B22-413E-A069-998898EB5621"}
 */
function onActionpais(event) {
	// TODO Auto-generated method stub
	elements.email.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CFFCC6D2-67E7-4F32-B13A-60B5AD25616D"}
 */
function onActionemail(event) {
	// TODO Auto-generated method stub
	elements.telefono.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"A5908AA9-EE83-41B5-B108-01A52A47F144"}
 */
function onActiontelefono(event) {
	// TODO Auto-generated method stub
	elements.fax.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D898CA57-A0EF-479C-A3B5-9F9CC11FF382"}
 */
function onActionfax(event) {
	// TODO Auto-generated method stub
	elements.dni.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"656869CC-C4F6-4BAA-BAC3-D05C745DDAED"}
 */
function onActiondni(event) {
	// TODO Auto-generated method stub
	elements.categoria.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F79E2D0F-14F2-4EF1-BD6C-DC818A2DC8D3"}
 */
function onActioncategoria(event) {
	// TODO Auto-generated method stub
	elements.turnotrabajo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"44287333-1C6C-4DA2-80E8-145A7184EC25"}
 */
function onActionturnotrabajo(event) {
	// TODO Auto-generated method stub
	elements.manoobra.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4F2C365E-BFDE-45D7-9B06-0FAFD08F9E4A"}
 */
function onActionmanoobra(event) {
	// TODO Auto-generated method stub
	elements.horasdia.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E97C59E8-8433-4F0B-A53D-4A081FFC90A3"}
 */
function onActionhorasdia(event) {
	// TODO Auto-generated method stub
	elements.puestotrabajo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"061920A0-44AB-4660-97D6-425C8A3501D7"}
 */
function btn_decrypt(event) {
	// TODO Auto-generated method stub
	// Get the form name
	   var jsForm= solutionModel.getForm('dlg_OperariosGC');
	   // Get the field by passing the name of the field
	   var jsField = jsForm.getField('claveautStock');
	   // Check the display type 
	   if(jsField .displayType == JSField.TEXT_FIELD) {
	      
	      // Set the Display type
	      jsField .displayType = JSField.PASSWORD;
	   }
	   else if(jsField .displayType == JSField.PASSWORD)
	   {
		   jsField .displayType = JSField.TEXT_FIELD;
	   }
	   
	   //Recreate the UI
	   controller.recreateUI();
	   
		sub_setPreviewLabels();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D23AE76A-1436-463F-842D-6EE5B547B703"}
 */
function btngooglemaps(event) {
	// TODO Auto-generated method stub
	if(direccion)
	{
		var dir = utils.stringReplace(direccion,' ','+')
		var pob = utils.stringReplace(poblacion,' ','+')
		application.showURL( 'http://maps.google.com/maps?q=' + dir + ','+pob,'_blank');
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38E8F662-8468-4E7B-AA91-4D7A7A3427EE"}
 */
function btnprint(event) {
	if(idoperario)
	{
		globals.btn_runJasperReportListadoOperario()
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"B67132C4-86F0-4AD9-99F0-3F1758E9FBBF"}
 */
function onDataChangeListadoOperario() {
	// TODO Auto-generated method stub
	if(OperarioID)
	{
		forms.dlg_OperariosGC.elements.codigo.editable = false;
		forms.dlg_OperariosGC.elements.codigo.bgcolor = '#f0f0f0';
		var result = foundset.selectRecord(OperarioID)
		var fsCount = databaseManager.getFoundSetCount(foundset);
		while(result==false)
		{
			if(fsCount == foundset.getSize()) return;
			foundset.setSelectedIndex(foundset.getSize());
			result = foundset.selectRecord(OperarioID);
		}
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"824781B6-62E3-4868-9165-2BB7791431C1"}
 */
function onDataChangeCIF() {
	// TODO Auto-generated method stub
	var ok = true
	//if(dni) ok = globals.validateCIF(dni)
	if(ok == false){
		elements.dni.requestFocus()
		elements.dni.selectAll()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('DNI no válido!!!.\nVerifíquelo.','¡Error!')
		else globals.GCshowErrorDialog("DNI no válido!!!.\nVerifíquelo.", null, null, null, null, null)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"11EA04BF-27E5-43FE-A93C-437C0DD9819B"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_usuario.requestFocus()
}
