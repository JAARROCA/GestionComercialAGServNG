/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"6712E7EF-0FE0-4236-9FB1-4AD3DED33C1C",variableType:8}
 */
var Detalle = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"F7FACE64-AC21-4A0C-95E8-B5CCEB2E34EC"}
 */
var DOCPDF3 = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"C7298920-F006-4460-A7E5-9F6B75F433B9",variableType:8}
 */
var currentIndex = -1;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"DBB49D30-A03C-495E-9CD5-E739C9B49ED8",variableType:-4}
 */
var files_positions = null;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"66069005-408A-4B44-8A40-7D32F4BC89D7",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"00225773-DF91-4AD6-819E-154ABFB4FF85"}
 */
var subFolder = "/";

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2593FED3-BBD1-492D-8B2A-E0B20F33972C"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	plugins.window.createShortcut('control shift M', handle_shortCut);
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	btn_tabdocu()
}

/**
 * Handle record selected.
 *
 *
 * @properties={typeid:24,uuid:"92A4D660-8C43-40B8-9229-AFC3BDB4BCD8"}
 */
function onRecordSelection() {
	// TODO Auto-generated method stub
	//setup the record status
	
		globals.GCsetupRecordStatus();
	
		
		globals.GCcurID_Operario = id
		if(globals.GCRegistroNuevo == 1)
		{
			if(globals.GCisEditing())
			{
				btn_cancel()
				globals.GCRegistroNuevo = null
				doEdit()
			}
		}
		sub_setPreviewLabels();	
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"A47E1F8E-EAA9-46AB-8C02-B05B3DE056A6"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function onShow(firstShow,event)
{
	if(!globals.GClogin_usuario) globals.btn_SalirGC(event)
	 btn_cancel();
	onLoad(event)
	//make read only
	foundset.loadAllRecords()
	controller.readOnly = true
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)
	globals.GCRegistroNuevo = null
				
	//hide save/cancel btsn
	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
	elements.BtnPais.visible = false
	elements.codigo.visible = false
	elements.lblcodigo.visible = true
	sub_setPreviewLabels();	
}

/**
*
*
 *
 * @properties={typeid:24,uuid:"3A7B5A1F-74DD-4693-ABA5-AF80D971E2C4"}
 */
function btn_tabdocu()
{
	if(globals.GCisEditing()) btn_cancel()
	//{
		tabs_dimAll()
		elements.lbldocu.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 1)
		{
			elements.tabs_mainPanel.tabIndex = 1
		}
	//}
}

/**
*
*
 *
 *
 * @properties={typeid:24,uuid:"D5D43301-CA31-4456-937B-54AA86F02D76"}
 */
function btn_tabtop5()
{
	if(globals.GCisEditing()) btn_cancel()
	//{
		tabs_dimAll()
		elements.lbltop5.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 2)
		{
			elements.tabs_mainPanel.tabIndex = 2
		}
	//}
}

/**
 *
 * @properties={typeid:24,uuid:"8545407B-E75B-4074-AB52-4B73AAF94E66"}
 */
function tabs_dimAll()
{
	elements.lbldocu.bgcolor = '#606060'
	elements.lbltop5.bgcolor = '#606060'	
}

/**
 * @properties={typeid:24,uuid:"C7B9F003-4EED-4425-A5AE-93910EC535BE"}
 */
function doEdit()
{
	_super.doEdit()
	elements.codigo.bgcolor = '#FFFF00';
	elements.fld_nombre.bgcolor = '#FFFF00';
	elements.fld_fechaalta.visible = true
	elements.lblfechaalta.visible = false
	elements.fld_fechabaja.visible = true
	elements.lblfechabaja.visible = false
	elements.BtnPais.visible = true
	elements.btn_histmodificaciones.visible = false
	
}

/**
 * @properties={typeid:24,uuid:"E5E0A06A-0891-4408-AAB3-80642B91A58E"}
 */
function btn_save()
{
	var ok = true;
	//if(dni) ok = globals.validateCIFGC(dni)
	if(!idoperario)
	{
		globals.GCshowErrorDialog('Falta introducir el código del operario.',null,'Aceptar',null,null,null)
	}
	else if(!nombre)
	{
		globals.GCshowErrorDialog('Falta introducir el nombre del operario.',null,'Aceptar',null,null,null)
	}
	else if(ok == false){
		elements.fld_dni.requestFocus()
		elements.fld_dni.selectAll()
		globals.GCshowErrorDialog("DNI no válido!!!.\nVerifíquelo.", null, null, null, null, null)
	}
	else
	{		
		if(globals.GCRegistroNuevo == 1)
		{
			var query = "select [idoperario] from [tbmaestrooperario] where [idoperario] = " + idoperario
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n != null)
			{
				var methd = 'forms.FrmOperariosGC.foco()';
				globals.GCshowErrorDialog('Código de Operario duplicado!Elija otro.',methd,'Aceptar',null,null,null)
			}
			else
			{
				var editedRecs = databaseManager.getEditedRecords( foundset)
				if(editedRecs.length > 0)
				{
					for (var x=0;x<editedRecs.length;x++)
					{
						var cod = editedRecs[x]['idoperario'];
						dataset = editedRecs[x].getChangedData();
						var rows = dataset.getMaxRowIndex()
						for( var i = 1 ; i <= rows ; i++ )
						{
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
							var record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
				            record.tipo = 'O' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
							record.codigo = cod
							record.fecha = new Date()
							record.datomodif = dataset.getValue(i,1)
							record.anterior = dataset.getValue(i,2)
							record.despues = dataset.getValue(i,3)
							record.usuario = globals.GClogin_usuario
							
							databaseManager.saveData(record)
						    //application.output(cod+' '+dataset.getValue(i,1) +' '+ dataset.getValue(i,2) +' '+ dataset.getValue(i,3));
						}
					}
				}				
				_super.btn_save()
				var agtid = id;
				var result = foundset.selectRecord(agtid)
				var fsCount = databaseManager.getFoundSetCount(foundset);
				while(result==false)
				{
					if(fsCount == foundset.getSize())
					{
					return;
					}
				foundset.setSelectedIndex(foundset.getSize());
				result = foundset.selectRecord(agtid);
				}
				globals.GCRegistroNuevo = null
				elements.BtnPais.visible = false
				elements.codigo.bgcolor = '#f0f0f0'
				elements.codigo.readOnly = true
				elements.codigo.visible = false
				elements.lblcodigo.visible = true
				elements.lbl_codrequired.visible = false
				elements.fld_fechaalta.visible = false
				elements.lblfechaalta.visible = true
				elements.fld_fechabaja.visible = false
				elements.lblfechabaja.visible = true
				elements.btn_histmodificaciones.visible = true
				sub_setPreviewLabels();
				
				//forms.lst_ArticulosGC.btn_sortAsc()
				//forms.lst_ArticulosGC.foundset.selectRecord(id)
			
				if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelection();
			}
		}
		else
		{
			editedRecs = databaseManager.getEditedRecords( foundset)
			if(editedRecs.length > 0)
			{
				for (x=0;x<editedRecs.length;x++)
				{
					cod = editedRecs[x]['idoperario'];
					dataset = editedRecs[x].getChangedData();
					rows = dataset.getMaxRowIndex()
					for( i = 1 ; i <= rows ; i++ )
					{
						vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
			            record.tipo = 'O' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
						record.codigo = cod
						record.fecha = new Date()
						record.datomodif = dataset.getValue(i,1)
						record.anterior = dataset.getValue(i,2)
						record.despues = dataset.getValue(i,3)
						record.usuario = globals.GClogin_usuario
						
						databaseManager.saveData(record)
					    //application.output(cod+' '+dataset.getValue(i,1) +' '+ dataset.getValue(i,2) +' '+ dataset.getValue(i,3));
					}
				}
			}				
			_super.btn_save()
			agtid = id;
			result = foundset.selectRecord(agtid)
			fsCount = databaseManager.getFoundSetCount(foundset);
			while(result==false)
			{
				if(fsCount == foundset.getSize())
				{
				return;
				}
			foundset.setSelectedIndex(foundset.getSize());
			result = foundset.selectRecord(agtid);
			}
			globals.GCRegistroNuevo = null
			elements.BtnPais.visible = false
			elements.codigo.bgcolor = '#f0f0f0'
			elements.codigo.readOnly = true
			elements.codigo.visible = false
			elements.lblcodigo.visible = true
			elements.lbl_codrequired.visible = false
			elements.fld_fechaalta.visible = false
			elements.lblfechaalta.visible = true
			elements.fld_fechabaja.visible = false
			elements.lblfechabaja.visible = true
			elements.btn_histmodificaciones.visible = true
			sub_setPreviewLabels();
			
			//forms.lst_ArticulosGC.btn_sortAsc()
			//forms.lst_ArticulosGC.foundset.selectRecord(id)
		
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelection();
		}
	}
}

/**
 * @properties={typeid:24,uuid:"50D638BE-266B-4A66-AA4B-676994E2731E"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	globals.GCRegistroNuevo = null
	elements.BtnPais.visible = false
	elements.codigo.bgcolor = '#f0f0f0'
	elements.codigo.readOnly = true
	elements.codigo.visible = false
	elements.lblcodigo.visible = true
	elements.lbl_codrequired.visible = false
	elements.fld_fechaalta.visible = false
	elements.lblfechaalta.visible = true
	elements.fld_fechabaja.visible = false
	elements.lblfechabaja.visible = true
	elements.btn_histmodificaciones.visible = true
	sub_setPreviewLabels();
}

/**
 * @properties={typeid:24,uuid:"0AAB920F-E3B3-482F-A82B-E4A9A7A86DAB"}
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
		elements.lbl_imagePreview.text = '';//elements.lbl_imagePreview.text = 'Sin Imágen';
		elements.lbl_imagePreview.visible = true;
		elements.lbl_imagePreview.imageURL = "media:///noimagen.jpg";
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
 * @properties={typeid:24,uuid:"22A3B437-0868-4B14-8EA2-910D01222AE9"}
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
				foto = img_raw.resize(500,500);
			}
			else
			{
				//there will be no display
				foto = null;
				//show error message!
				globals.GCshowErrorDialog('No es una Imágen válida!',null,null,null,null,null)
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
 * @properties={typeid:24,uuid:"3DC9EBC7-3688-43F9-B094-9D3334403F2A"}
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
 * @properties={typeid:24,uuid:"12717E99-1F15-422B-9085-B78BC26F6AA7"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	globals.GCRegistroNuevo = 1
	elements.codigo.bgcolor = '#feffe4'
	elements.codigo.readOnly = false
	elements.codigo.visible = true
	elements.lblcodigo.visible = false
	elements.lbl_codrequired.visible = true
	fechaalta = new Date()
}

/**
 * @properties={typeid:24,uuid:"92DEC6D9-9267-4A6F-A7D2-CC4F6071E88F"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Agentes_list();
}

/**
 * @properties={typeid:24,uuid:"DA18043E-0840-47CC-A6BA-6B00325E94F6"}
 * @AllowToRunInFind
 */
function rpt_Agentes_list()
{
	try
	{
		globals.btn_runJasperReportListadoOperario()
		
	}
	catch (e) 
	{
	   //plugins.dialogs.showErrorDialog('Error',e.toString(),'Ok')
	   application.output(e);   
	   return;
	}
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"E8906EF2-C2AA-47A2-845F-209AFC4EE956"}
 */
function validate_beforeDelete()
{
	/*var query = "SELECT COUNT(*) FROM tbfacturacomision WHERE comisionista_cfa = '"+idagente+"'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var cont = dataset.getValue(1,1)
	
	
	if(cont > 0)
	{
		globals.GCshowErrorDialog("No se puede borrar un Respresentante que tiene comisiones de Facturas.", null,'Aceptar', null, null, null);
		return 1
	}
	else
	{*/
		return 0
	//}
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"838EA407-5A96-40D0-AA7B-9FD3D4F1DA79"}
 */
function onDataChangecoda() {
	// TODO Auto-generated method stub
	var query = "select [idoperario] from [tbmaestrooperario] where [idoperario] = " + idoperario 
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		var methd = 'forms.FrmOperariosGC.foco()';
		globals.GCshowErrorDialog('Código de Operario duplicado!Elija otro.',methd,'Aceptar',null,null,null)
	}
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"70491255-C7D8-42A3-A087-0011E3A8872C"}
 */
function foco() {
	elements.codigo.requestFocus()
}

/**
*
* @properties={typeid:24,uuid:"5D6FB51A-5186-492B-A556-CEA1BC534DC7"}
*/
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'O' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = idoperario;
		record.fecha = new Date();
		record.datomodif = nombre+' '+apellido1+' '+apellido2
		record.anterior = 'BORRADO DE LA BD';
		record.despues = 'BORRADO DE LA BD';
		record.usuario = globals.GClogin_usuario
		
		databaseManager.saveData(record)
		//check to make sure that the address in question isn't used on any orders
		/*var bAdrCnt = addresses_to_orders_billing.getSize()
		var sAdrCnt = addresses_to_orders_shipping.getSize()

		if(bAdrCnt == 0 && sAdrCnt == 0)
		{*/
			foundset.deleteRecord()
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
 * @properties={typeid:24,uuid:"93AA07A3-3669-442A-A10B-2CD345A80B62"}
 */
function onActionCodPieza(event) {
	// TODO Auto-generated method stub
	elements.fld_nombre.requestFocus()
	elements.fld_nombre.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"8965A1FB-8F65-4D45-B8F3-A0F4A3533303"}
 */
function onActiondescripcion(event) {
	// TODO Auto-generated method stub
	elements.fld_apellido1.requestFocus()
	elements.fld_apellido1.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"365CD9A2-DA0E-48CE-A55A-19181D07878D"}
 */
function onActionapel1(event) {
	// TODO Auto-generated method stub
	elements.fld_apellido2.requestFocus()
	elements.fld_apellido2.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"BB2D0D1A-8389-40E8-8175-6C4F9589694F"}
 */
function onActionapel2(event) {
	// TODO Auto-generated method stub
	elements.fld_fechaalta.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6176CA8A-BDF5-4AF2-AF99-638D06CAB2B7"}
 */
function onActionfechaalta(event) {
	// TODO Auto-generated method stub
	elements.fld_fechabaja.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"DCFFCE64-C7B6-48B9-BE67-96EAAD38F934"}
 */
function onActionfechabaja(event) {
	// TODO Auto-generated method stub
	elements.fld_direccion.requestFocus()
	elements.fld_direccion.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"B580F77C-9463-4C77-A1C8-0A51095D5180"}
 */
function onActiondireccion(event) {
	// TODO Auto-generated method stub
	elements.fld_poblacion.requestFocus()
	elements.fld_poblacion.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"BB73EE2A-FC41-442D-A11A-C36F94D6E014"}
 */
function onActionpoblacion(event) {
	// TODO Auto-generated method stub
	elements.fld_codpostal.requestFocus()
	elements.fld_codpostal.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"DC2DABAD-3565-49AF-B0DA-7382BA8945EA"}
 */
function onActionprovincia(event) {
	// TODO Auto-generated method stub
	elements.fld_idpais.requestFocus()
	elements.fld_idpais.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"37729960-059B-4117-A17F-DE6A065826E7"}
 */
function onActionpais(event) {
	// TODO Auto-generated method stub
	elements.fld_email.requestFocus()
	elements.fld_email.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D6F3D3E-B606-4F59-976C-2E04E0332B1C"}
 */
function onActioncodpostal(event) {
	// TODO Auto-generated method stub
	elements.fld_provincia.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3AEE1A5A-02D8-4AAE-B442-6517C8E3FDCF"}
 */
function onActionemail(event) {
	// TODO Auto-generated method stub
	elements.fld_telefono.requestFocus()
	elements.fld_telefono.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AEA26CEA-B6BC-4411-8853-60313738D3FC"}
 */
function onActiontelf1(event) {
	// TODO Auto-generated method stub
	elements.fld_fax.requestFocus()
	elements.fld_fax.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"05682B6F-49E3-4035-B63A-95AB493409C3"}
 */
function onActionfax(event) {
	// TODO Auto-generated method stub
	elements.fld_dni.requestFocus()
	elements.fld_dni.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"40148A12-B158-47CC-98D4-5BBFFA787870"}
 */
function onActiondni(event) {
	// TODO Auto-generated method stub
	elements.fld_categoria.requestFocus()
	elements.fld_categoria.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9EB084C4-7C99-4164-9B51-1BE67E022F90"}
 */
function onActioncategoria(event) {
	// TODO Auto-generated method stub
	elements.fld_turnotrabajo.requestFocus()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2BBA6D8B-842C-418A-95AD-3F8B8DD8868B"}
 */
function onActionturnotrabajo(event) {
	// TODO Auto-generated method stub
	elements.fld_manoobra.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"25DB79EA-4E73-44A7-9101-3B8E93E4E183"}
 */
function onDataChangeEmail() {
	// TODO Auto-generated method stub
	if(utils.stringPatternCount(email,",") == 0
			&& utils.stringPatternCount(email," ") == 0
			&& utils.stringPatternCount(email,"@") == 1
			&& utils.stringPatternCount(email,".") >= 1)
			{
				return
			}
			else
			{
				elements.fld_email.selectAll()
				elements.fld_email.requestFocus()
				globals.GCshowInfoDialog("Debes introducir una dirección de correo válida.", null,'Aceptar', null, null, null);			
			}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"02AB146F-314E-4D8D-AF22-CD54D5B2A0DF"}
 */
function onActionBtnPaises(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmOperarios'
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
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"63B5E9D2-6D4A-4FB4-8F78-112295847A4E"}
 */
function onDataChangeCIF() {
	// TODO Auto-generated method stub
	var ok = true
	//if(dni) ok = globals.validateCIF(dni)
	if(ok == false){
		elements.fld_dni.requestFocus()
		elements.fld_dni.selectAll()
		globals.GCshowErrorDialog("DNI no válido!!!.\nVerifíquelo.", null, null, null, null, null)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E9CC3BB5-BDED-40B8-9BE8-DCF35FC8DD66"}
 */
function onActionmanoobra(event) {
	// TODO Auto-generated method stub
	elements.fld_horasdia.requestFocus()
	elements.fld_horasdia.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"E09FF48B-C027-4E50-AAE2-7DBDC45940C6"}
 */
function onActionhorasdia(event) {
	elements.fld_puestotrabajo.requestFocus()
	elements.fld_puestotrabajo.selectAll()
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
 *
 * @properties={typeid:24,uuid:"ED6C6785-ADC7-4089-9CAD-62E1983E9324"}
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
*
*
*
 * @properties={typeid:24,uuid:"BC2A7F58-2AB7-4C31-98DD-32CFEE57E62D"}
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
					var query = 'select [ServidorCorreoSMTP] from [ParametrosAplicacion]'
					var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var SMTP = dataset.getValue(1,1)
					if(!SMTP)
					{
						scopes.svyCustomDialogs.showErrorDialog('Error','No está definido el Servidor de Correo SMTP en los Parametros de la Aplicación.','Aceptar');
						//globals.GCshowErrorDialog('No está definido el Servidor de Correo SMTP en los Parametros de la Aplicación.',null,'Aceptar',null,null,null)
					}
					else
					{
						query = 'select imde_us,nuser_us,passw_us from [usuarios] WHERE [cod_us] = ' + globals.GClogin_usuario
						dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
						var EmailFrom = dataset.getValue(1,1)
						var UserEmail = dataset.getValue(1,2)
						var PasswEmail = dataset.getValue(1,3)
						if(EmailFrom == null || EmailFrom == '')
						{
							scopes.svyCustomDialogs.showErrorDialog('Error','No están definidos los datos de la cuenta de correo del usuario en los Usuarios.','Aceptar');
							//globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
						}
						else if(UserEmail == null || UserEmail == '')
						{
							scopes.svyCustomDialogs.showErrorDialog('Error','No están definidos los datos de la cuenta de correo del usuario en los Usuarios.','Aceptar');
							//globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
						}
						else if(PasswEmail == null || PasswEmail == '')
						{
							scopes.svyCustomDialogs.showErrorDialog('Error','No están definidos los datos de la cuenta de correo del usuario en los Usuarios.','Aceptar');
							//globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
						}
						else
						{
							globals.GCFormulario = 'FrmOperarios'
							globals.GCshowDialogEnvioMail('Envio Email',1,null,null,null,null,null,null,null,null)
						}
					}
					
				}
				else
				{
					scopes.svyCustomDialogs.showInfoDialog('Error','Debes introducir una dirección de correo válida.','Aceptar');
					//globals.GCshowInfoDialog("Debes introducir una dirección de correo válida.", null,'Aceptar', null, null, null);			
				}
		
	}
	// create a file object
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param v_event
 *
 * @SuppressWarnings(deprecated)
 *
 *
  * @SuppressWarnings(unused)
 *
 *
 *
 * @properties={typeid:24,uuid:"062CEA57-D413-4634-B40E-9B915C2CCE3B"}
 */
function handle_shortCut(v_event)
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	globals.GCevento = null
	if(!globals.GCisEditing() && frm == 'FrmOperariosGC' && v_event.getType() == 'control shift M')
	{
		var DREF = idoperario.toString()
		if(DREF == null || DREF == '') DREF = '0';
		var HREF = idoperario.toString()
		if(HREF == null || HREF == '') HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'O'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"973D2AFC-8E89-4263-8B61-31BED79137D9"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Operarios';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de este Operario';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_1.png');
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			menu.show(event.getSource(),0,40);				
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 * @properties={typeid:24,uuid:"7C5F65F0-6498-4D9A-A55B-5108F310D4A0"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Operarios'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'O'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de este Operario'.toUpperCase():
		DREF = forms.FrmOperariosGC.idoperario.toString();
		HREF = forms.FrmOperariosGC.idoperario.toString();
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'O'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"1FEB98DD-533D-4665-8B4C-5EE9994E2785"}
 */
function onDataChangeCP() {
	if(codpostal)
	{
		if(codpostal.length == 5)
		{
			var prov = utils.stringLeft(codpostal,2)			
			switch( prov )
			{
				case '01': 
				{
					provincia = 'ÁLAVA';				
					break;
				}
				case '02': 
				{
					provincia = 'ALBACETE';
					break;
				}
				case '03': 
				{
					provincia = 'ALICANTE';					
					break;
				}
				case '04': 
				{
					provincia = 'ALMERÍA';					
					break;
				}
				case '33': 
				{
					provincia = 'ASTURIAS';					
					break;
				}
				case '05': 
				{
					provincia = 'ÁVILA';
					break;
				}
				case '06': 
				{
					provincia = 'BADAJOZ';					
					break;
				}
				case '08': 
				{
					provincia = 'BARCELONA';					
					break;
				}
				case '09': 
				{
					provincia = 'BURGOS';					
					break;
				}
				case '10': 
				{
					provincia = 'CÁCERES';					
					break;
				}
				case '11': 
				{
					provincia = 'CÁDIZ';					
					break;
				}
				case '39': 
				{
					provincia = 'CANTABRIA';					
					break;
				}
				case '12':
				{
					provincia = 'CASTELLÓN';					
					break;
				}
				case '51':
				{
					provincia = 'CEUTA';
					break;
				}
				case '13':
				{
					provincia = 'CIUDAD REAL';					
					break;
				}
				case '14':
				{
					provincia = 'CÓRDOBA';					
					break;
				}
				case '15':
				{
					provincia = 'CORUÑA, A';					
					break;
				}
				case '16':
				{
					provincia = 'CUENCA';					
					break;
				}
				case '17':
				{
					provincia = 'GIRONA';					
					break;
				}
				case '18':
				{
					provincia = 'GRANADA';					
					break;
				}
				case '19':
				{
					provincia = 'GUADALAJARA';					
					break;
				}
				case '20':
				{
					provincia = 'GUIPÚZCOA';					
					break;
				}
				case '21':
				{
					provincia = 'HUELVA';					
					break;
				}
				case '22':
				{
					provincia = 'HUESCA';					
					break;
				}
				case '07':
				{
					provincia = 'ILLES BALEARS';					
					break;
				}
				case '23':
				{
					provincia = 'JAÉN';					
					break;
				}
				case '24':
				{
					provincia = 'LEÓN';					
					break;
				}
				case '25':
				{
					provincia = 'LLEIDA';					
					break;
				}
				case '27':
				{
					provincia = 'LUGO';					
					break;
				}
				case '28':
				{
					provincia = 'MADRID';
					break;
				}
				case '29':
				{
					provincia = 'MÁLAGA';					
					break;
				}
				case '52':
				{
					provincia = 'MELILLA';					
					break;
				}
				case '30':
				{
					provincia = 'MURCIA';					
					break;
				}
				case '31':
				{
					provincia = 'NAVARRA';					
					break;
				}
				case '32':
				{
					provincia = 'OURENSE';					
					break;
				}
				case '34':
				{
					provincia = 'PALENCIA';					
					break;
				}
				case '35':
				{
					provincia = 'PALMAS, LAS';					
					break;
				}
				case '36':
				{
					provincia = 'PONTEVEDRA';					
					break;					
				}
				case '26':
				{
					provincia = 'RIOJA, LA';					
					break;
				}
				case '37':
				{
					provincia = 'SALAMANCA';					
					break;
				}
				case '38':
				{
					provincia = 'S.C.TENERIFE';					
					break;
				}
				case '40':
				{
					provincia = 'SEGOVIA';
					break;
				}
				case '41':
				{
					provincia = 'SEVILLA';					
					break;
				}
				case '42':
				{
					provincia = 'SORIA';					
					break;
				}
				case '43':
				{
					provincia = 'TARRAGONA';					
					break;
				}
				case '44':
				{
					provincia = 'TERUEL';					
					break;
				}
				case '45':
				{
					provincia = 'TOLEDO';					
					break;
				}
				case '46':
				{
					provincia = 'VALENCIA';					
					break;
				}
				case '47':
				{
					provincia = 'VALLADOLID';					
					break;
				}
				case '48':
				{
					provincia = 'VIZCAYA';					
					break;
				}
				case '49':
				{
					provincia = 'ZAMORA';					
					break;
				}
				case '50':
				{
					provincia = 'ZARAGOZA';
					break;
				}
				default: break;		
			}
			var query = "select municipio_nombre from cp_municipios where  codigo_postal = '" + codpostal + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			if(dataset.getValue(1,1)) poblacion = dataset.getValue(1,1);
		}
	}
	
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"9D9674A9-E05E-4C4C-A47D-9E0DC699D3F6"}
 */
function btn_listadoOperarios(event) {
	
	globals.GCFormulario = 'FrmOperariosGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialog_Operarios3')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialog_Operarios3", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Operarios';
	//win.resizable = true;
	//win.show(forms.dialog_Clientes2GC)
	win.show(forms.lst_Operarios2GC)

}
