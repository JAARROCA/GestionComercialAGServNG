/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"32AB4A78-45CE-41FD-8970-8CD9F0662A15",variableType:8}
 */
var Detalle = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"FFA2133A-A41B-4965-ADC7-216513491DD4"}
 */
var DOCPDF3 = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"1BD0ECD6-089E-4C76-B427-1C368328F541",variableType:8}
 */
var currentIndex = -1;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"E33EB499-73A1-4A04-9A77-D7D6B0A8BB5F",variableType:-4}
 */
var files_positions = null;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"309427F0-C97F-4897-89E6-8634FBBE6CB1",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"C7703ACF-1A17-4BC1-BFF3-1C296A3FD912"}
 */
var subFolder = "/";

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7062AF33-B7B8-4D0E-8805-CECF86B8B9E1"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	btn_tabdocu()
}

/**
 * Handle record selected.
 *
 *
 * @properties={typeid:24,uuid:"2A3F511F-2CA0-4F65-8086-EB13077A4C8E"}
 */
function onRecordSelection() {
	// TODO Auto-generated method stub
	//setup the record status
	
		globals.GCsetupRecordStatus();
	
		
		globals.GCcurID_Agente = id
		if(globals.GCRegistroNuevo == 1)
		{
			if(globals.GCisEditing())
			{
				btn_cancel()
				doEdit()
			}
		}
		sub_setPreviewLabels();	
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"500EF6D6-D519-4BD0-A087-9AB6C9615378"}
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
 * @properties={typeid:24,uuid:"3F05F028-4CB9-40F5-AE87-759F251215EC"}
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
 * @properties={typeid:24,uuid:"883CEC67-6A03-4424-A548-3991A2283C1E"}
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
 * @properties={typeid:24,uuid:"45F6111E-592E-4B9E-B235-84FFD23B42BF"}
 */
function tabs_dimAll()
{
	elements.lbldocu.bgcolor = '#606060'
	elements.lbltop5.bgcolor = '#606060'	
}

/**
 * @properties={typeid:24,uuid:"9B15CEAE-03A6-4CA4-A430-A4F4534C0F37"}
 */
function doEdit()
{
	_super.doEdit()
	elements.codigo.bgcolor = '#FFFF00';
	elements.fld_descripcion.bgcolor = '#FFFF00';
	elements.BtnPais.visible = true
	elements.btn_histmodificaciones.visible = false
	
}

/**
 * @properties={typeid:24,uuid:"2881DD03-BF96-41AD-9A0C-6F80C770CC8C"}
 */
function btn_save()
{
	var ok = true;
	//if(cif) ok = globals.validateCIFGC(cif)
	if(!idagente)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir el código del representante.','¡Error!')
		else globals.GCshowErrorDialog('Falta introducir el código del representante.',null,'Aceptar',null,null,null)
	}
	else if(!descagente)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir la descripción del representante.','¡Error!')
		else globals.GCshowErrorDialog('Falta introducir la descripción del representante.',null,'Aceptar',null,null,null)
	}
	else if(ok == false){
		elements.fld_cif.requestFocus()
		elements.fld_cif.selectAll()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('CIF no válido!!!.\nVerifíquelo.','¡Error!')
		else globals.GCshowErrorDialog("CIF no válido!!!.\nVerifíquelo.", null, null, null, null, null)
	}
	else
	{		
		if(globals.GCRegistroNuevo == 1)
		{
			var query = "select [idagente] from [tbmaestroagentes] where [idagente] = '" + idagente + "'"
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n != null)
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Código de Representante duplicado!Elija otro.','¡Error!')
				else 
				{
					var methd = 'forms.FrmAgentesGC.foco()';
					globals.GCshowErrorDialog('Código de Representante duplicado!Elija otro.',methd,'Aceptar',null,null,null)
				}
			}
			else
			{
				var editedRecs2 = databaseManager.getEditedRecords( foundset)
				
				if(editedRecs2.length > 0)
				{
					for (var x=0;x<editedRecs2.length;x++)
					{
						var cod = editedRecs2[x]['codigoctabanco'];
						dataset = editedRecs2[x].getChangedData();
						var rows = dataset.getMaxRowIndex()
						for( var i = 1 ; i <= rows ; i++ )
						{
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
							var record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
				            record.tipo = 'AG' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (TR=Transportistas) (BAN = Bancos) (AG = Agentes)
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
				sub_setPreviewLabels();
				
				//forms.lst_ArticulosGC.btn_sortAsc()
				//forms.lst_ArticulosGC.foundset.selectRecord(id)
			
				if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelection();
			}
		}
		else
		{
			editedRecs2 = databaseManager.getEditedRecords( foundset)
			
			if(editedRecs2.length > 0)
			{
				for (x=0;x<editedRecs2.length;x++)
				{
					cod = editedRecs2[x]['codigoctabanco'];
					dataset = editedRecs2[x].getChangedData();
					rows = dataset.getMaxRowIndex()
					for( i = 1 ; i <= rows ; i++ )
					{
						vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
			            record.tipo = 'AG' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (TR=Transportistas) (BAN = Bancos) (AG = Agentes)
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
			elements.btn_histmodificaciones.visible = true
			elements.codigo.bgcolor = '#f0f0f0'
			elements.codigo.readOnly = true
			elements.codigo.visible = false
			elements.lblcodigo.visible = true
			elements.lbl_codrequired.visible = false
			sub_setPreviewLabels();
			
			//forms.lst_ArticulosGC.btn_sortAsc()
			//forms.lst_ArticulosGC.foundset.selectRecord(id)
		
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelection();
		}
	}
}

/**
 * @properties={typeid:24,uuid:"27072B2F-91DB-46E2-A565-6B4136B7643D"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	globals.GCRegistroNuevo = null
	elements.BtnPais.visible = false
	elements.btn_histmodificaciones.visible = true
	elements.codigo.bgcolor = '#f0f0f0'
	elements.codigo.readOnly = true
	elements.codigo.visible = false
	elements.lblcodigo.visible = true
	elements.lbl_codrequired.visible = false
	sub_setPreviewLabels();
}

/**
 * @properties={typeid:24,uuid:"95111D3A-FF97-4814-B234-965D3919E41C"}
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
	if(!imag_a)
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
 * @properties={typeid:24,uuid:"CB8D5526-B0CB-4EB5-A89C-CA0A9ABEF19E"}
 */
function product_image_dataChange() {
	databaseManager.setAutoSave(false);
	
	if (globals.GCsmart_chg == 0) {
		var rawData = imag_a;

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
				imag_a = img_raw.resize(500,500);
			}
			else
			{
				//there will be no display
				imag_a = null;
				//show error message!
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No es una Imágen válida!','¡Error!')
				else globals.GCshowErrorDialog('No es una Imágen válida!',null,null,null,null,null)
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
 * @properties={typeid:24,uuid:"014CF8F5-2276-43B5-BAC2-54C444448734"}
 */
function btn_deleteImage()
{
	if(imag_a)
	{
		//show a warning dialog
		//globals.GCshowWarningDialog('¿¿Estás seguro que quieres borrar este Logo?', 'forms.dlg_ParametroAplicacion.sub_clearImage()','Cancel','Delete', null, null)
		imag_a = null
		sub_setPreviewLabels();
	}
}

/**
 * @properties={typeid:24,uuid:"C76A4730-2A26-4FFB-BA4D-E248E1BFD02E"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	globals.GCRegistroNuevo = 1
	pais = 'ES'
	elements.codigo.bgcolor = '#feffe4'
	elements.codigo.readOnly = false
	elements.codigo.visible = true
	elements.lblcodigo.visible = false
	elements.lbl_codrequired.visible = true
	
}

/**
 * @properties={typeid:24,uuid:"2D5E5A72-AF26-4C6E-928F-C04F133F88B1"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Agentes_list();
}

/**
 * @properties={typeid:24,uuid:"B7AED5BA-7CB8-4F7D-A598-3E7CC88283B5"}
 * @AllowToRunInFind
 */
function rpt_Agentes_list()
{
	try
	{
		globals.GCshowDialogListadoAgentes('Listado de Comisionistas',1,null,null,null,null,null,null,null,null)			
		
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
 * @properties={typeid:24,uuid:"4268BAFA-B9BA-44C3-A091-0090D7EA60E5"}
 */
function validate_beforeDelete()
{
	var query = "SELECT COUNT(*) FROM tbfacturacomision WHERE comisionista_cfa = '"+idagente+"'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var cont = dataset.getValue(1,1)
	
	
	if(cont > 0)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No se puede borrar un Respresentante que tiene comisiones de Facturas.','¡Error!')
		else globals.GCshowErrorDialog("No se puede borrar un Respresentante que tiene comisiones de Facturas.", null,'Aceptar', null, null, null);
		return 1
	}
	else
	{
		return 0
	}
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"9ADB02BC-E543-4B01-99CE-BC79E6E0BFBF"}
 */
function onDataChangecoda() {
	// TODO Auto-generated method stub
	var query = "select [idagente] from [tbMaestroAgentes] where [idagente] = '" + idagente + "'"
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Código de Representante duplicado!Elija otro.','¡Error!')
		else 
		{
			var methd = 'forms.FrmAgentesGC.foco()';
			globals.GCshowErrorDialog('Código de Representante duplicado!Elija otro.',methd,'Aceptar',null,null,null)
		}
	}
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"E802D536-5C23-419A-940D-586575959996"}
 */
function foco() {
	elements.codigo.requestFocus()
}

/**
*
* @properties={typeid:24,uuid:"DE166E27-A837-4970-A421-A45FF4A85768"}
*/
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'COM' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = idagente;
		record.fecha = new Date();
		record.datomodif = descagente;
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
 * @properties={typeid:24,uuid:"4CB32CE1-DC09-4A4B-BCAC-8958E1B22E31"}
 */
function onActionCodPieza(event) {
	// TODO Auto-generated method stub
	elements.fld_descripcion.requestFocus()
	elements.fld_descripcion.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"1E3B644D-97B4-4EA7-B18D-AB36805A58F6"}
 */
function onActiondescripcion(event) {
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
 * @properties={typeid:24,uuid:"B488FE4C-2DCC-44D4-840E-37CC2CE90788"}
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
 * @properties={typeid:24,uuid:"79F85DFC-ED2B-4C97-BB82-4DE9D703C72C"}
 */
function onActionpoblacion(event) {
	// TODO Auto-generated method stub
	elements.fld_codpostal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"5D8EC5AC-8BC9-44D9-A97E-C46FF87598EB"}
 */
function onActionprovincia(event) {
	// TODO Auto-generated method stub
	elements.fld_codigopaisue.requestFocus()
	elements.fld_codigopaisue.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"68519E7E-ABCD-4C85-8A04-5761D87BD252"}
 */
function onActioncodpostal(event) {
	// TODO Auto-generated method stub
	elements.fld_provincia.requestFocus()
	elements.fld_provincia.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"023B9FE8-6CB1-4C01-93F6-C3A5BD8F4BF9"}
 */
function onActionemail(event) {
	// TODO Auto-generated method stub
	elements.fld_telf1.requestFocus()
	elements.fld_telf1.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"47A3EE26-DB93-4FF3-A676-56EDF1388631"}
 */
function onActiontelf1(event) {
	// TODO Auto-generated method stub
	elements.fld_telf2.requestFocus()
	elements.fld_telf2.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"21177F21-E05C-4FE0-B26E-775B7BFFE96A"}
 */
function onActiontelf2(event) {
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
 * @properties={typeid:24,uuid:"694781F7-511F-4830-8BDA-62566D750C27"}
 */
function onActionfax(event) {
	// TODO Auto-generated method stub
	elements.fld_cif.requestFocus()
	elements.fld_cif.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"C14A0E2C-5CA1-4EF4-A6A8-16F5779F9300"}
 */
function onActioncif(event) {
	// TODO Auto-generated method stub
	elements.fld_porccomision.requestFocus()
	elements.fld_porccomision.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"055DEC01-506B-4720-9789-E926F82C9F93"}
 */
function onActionporccomision(event) {
	// TODO Auto-generated method stub
	elements.fld_piva.requestFocus()
	elements.fld_piva.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"A4ACBF5E-443A-46A0-A40B-A170FA6B2694"}
 */
function onActionpiva(event) {
	// TODO Auto-generated method stub
	elements.fld_observaciones.requestFocus()
	elements.fld_observaciones.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"81D3954E-B051-4FD2-BC27-B149116A3FAB"}
 */
function btnSkype(event) {
	// TODO Auto-generated method stub
	var popUpObj = plugins.window.createPopupMenu();
	popUpObj.addMenuItem("Llamada Skype", globals.MenuSkype, "media:///SkypeLlamadas.GIF");
	popUpObj.addMenuItem("Chat Skype", globals.MenuSkype, "media:///SkypeChat.GIF");
	popUpObj.addSeparator();
	
	if (event.getSource()) {
		// display the popup over the component which is the source of the event
		popUpObj.show(event.getSource(),25,0);				
	}
}

/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"1FD62E08-FDEE-47F9-97F8-2DE3A68FDDFB"}
 */
function startCallUsingSkype()

{

/*

          method name : startCallUsingSkype

          usage: startCallUsingSkype(countryCode, phoneNumber

                                      , [isSkypeName])

 

          input: countryCode: text representing valid country code,

                                      prefixed by sign '+'.Ex. +91 - For India.

                      phoneNumber: integer representing the phone number to

                                           make a call.

                      isSkypeName (opt):  boolean value indicating whether

                                                   want to call a skype name. Calling to

                                                   a skype name does not require a country code.

 

          output: The script will establish a call to the specified number

                     or the specified skype name, if the third argument,

                     isSkypeName, has been passed as true, from your servoy

                     solution. The script can be used in Windows and Mac to

                     make call from your Servoy Solution.

     note:

 

          Change history:

          04/04/09             Arup Ranjan Sahoo            Created method

 *********************************************************************/

         

          var countryCode = /*arguments[0]*/pais;

          var phoneNumber = /*arguments[1]*/telf1;

          var isSkypeName = /*arguments[2] != null?arguments[2]:*/false;

         

          //Check for OS Type

          if(utils.stringMiddle(application.getOSName(),1,7) == "Windows") 
          {
                   //Windows Detected
                   //Check for Client Type
                   if(application.getApplicationType() == 2 || application.getApplicationType() == 3
                      || application.getApplicationType() == 4 ) 
                   {
                	   //Make a Skype Call for Rich Client in Windows
                       //Prepare a Call String to call the Number Using Skype
                             var callString = '';
                             if(isSkypeName)
                             {
                                      callString = '/callto:' + phoneNumber;
                             } 
                             else 
                             {
                                      callString = '/callto:' + countryCode + phoneNumber;
                             }

                            

                             //Get the Path for Skype Executable

                             //Default Path is C:\Documents and Settings

                             //\Program Files\Skype\Phone\Skype.exe

                             var pathToSkype = plugins.file.getHomeDirectory().getAbsolutePath()

                             pathToSkype = pathToSkype.substring(0
                                      ,pathToSkype.indexOf("Documents and Settings"))
                                                          + "Program Files\\Skype\\Phone\\Skype.exe";
                             //Call the number Using Skype
                             application.executeProgram(pathToSkype, callString)
                   }
                   else if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
                   {
                             //Make a Skype Call for WebClient in Windows

                             //Call the number Using Skype

                             if(isSkypeName)
                             {
                                      application.showURL('skype:'
                                                + phoneNumber +'?call','_self');
                             } 
                             else 
                             {
                                      application.showURL('skype:'
                                                + countryCode + phoneNumber +'?call','_self');
                             }
                   }
          } 
          else if(utils.stringMiddle(application.getOSName(),1,3) == "Mac") 
          {
                   //Mac OS Detected
                   //Check for Client Type

                   if(application.getApplicationType() == 2 || application.getApplicationType() == 3
                                      || application.getApplicationType() == 4 ) 
                   {
                             //Make a Skype Call for Rich Client in Mac

                             //Prepare a Call String to call the Number Using Skype
                             callString = '';

                             if(isSkypeName)
                             {
                                      callString = 'skype:'
                                                + phoneNumber + '?call';
                             }
                             else 
                             {
                                      callString = 'skype:'
                                                + countryCode + phoneNumber + '?call';
                             }

                            

                             //Call the number Using Skype

                             application.executeProgram("open", callString);

                   } 
                   else if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
                   {
                             //Make a Skype Call for WebClient in Windows

                             //Call the number Using Skype

                             if(isSkypeName)
                             {
                                      application.showURL('skype:'
                                                + phoneNumber +'?call','_self');
                             } 
                             else 
                             {
                                      application.showURL('skype:'
                                                + countryCode + phoneNumber +'?call','_self');
                             }
                   }
          }
}

/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"AE6D6E87-29C5-4F8B-AF28-0F40A0C107C8"}
 */
function startChatUsingSkype()

{

/*

          method name : startChatUsingSkype

          usage: startChatUsingSkype(skypeName)

 

          input: skypeName: text representing the Skype Name to start

                                     the Chat with.

 

          output: The script will start a chart with the Skype Name

                     passed as an argument to the method. The script

                     can be used in Windows and Mac to start the Skype Chat.

      note:

 

          Change history:

          04/04/09         Arup Ranjan Sahoo               Created method

 *******************************************************************/

         

          var skypeName = arguments[0];

         

          //Check for OS Type

          if(utils.stringMiddle(application.getOSName(),1,7) == "Windows") 
          {
                   //Windows Detected

                   //Check for Client Type

                   if(application.getApplicationType() == 2 || application.getApplicationType() == 3
                                      || application.getApplicationType() == 4 ) 
                   {
                             //Start a Skype Chat for Rich Client in Windows

                             //Prepare a chat String to chat with the Skype Name

                             var chatString = 'skype:'+ skypeName +'?chat';

                             //Start the Chat

                             application.executeProgram('rundll32'
                                      , 'url.dll,FileProtocolHandler',chatString);
                   } 
                   else if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
                   {
                             //Start a Skype Chat for WebClient in Windows                       

                             application.showURL('skype:'
                                      + skypeName +'?chat','_self');
                   }
          } 
          else if(utils.stringMiddle(application.getOSName(),1,3) == "Mac") 
          {
                   //Mac OS Detected

                   //Check for Client Type

                   if(application.getApplicationType() == 2 || application.getApplicationType() == 3
                                      || application.getApplicationType() == 4 ) 
                   {
                             //Start a Skype Chat for Rich Client in Mac

                             //Prepare a chat String to chat with the Skype Name

                             var callString = 'skype:'
                                      + skypeName + '?chat';

                            

                             //Start the Chat

                             application.executeProgram("open", callString);
                   } 
                   else if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
                   {
                             //Start a Skype Chat for Web Client in Mac

                             application.showURL('skype:'
                                      + skypeName +'?chat','_self');
                   }
          }
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"149B9235-BF51-4A8F-9A1A-2CE6C0CB3A22"}
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
 * @properties={typeid:24,uuid:"BBA4B9F8-93BA-418F-9F87-BEA46B4C1C61"}
 */
function onActionBtnPaises(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmAgentes'
	//globals.GCshowDialogPaises('Paises', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialogPaises')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialogPaises", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Paises';
	//win.resizable = true;
	win.show(forms.dlgPaisesGC)
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"9334A6ED-F4FD-4FBD-AAA3-820CF698E152"}
 */
function onDataChangeCIF() {
	// TODO Auto-generated method stub
	var ok = true
	//if(cif) ok = globals.validateCIF(cif)
	if(ok == false){
		elements.fld_cif.requestFocus()
		elements.fld_cif.selectAll()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('CIF no válido!!!.\nVerifíquelo.','¡Error!')
		else globals.GCshowErrorDialog("CIF no válido!!!.\nVerifíquelo.", null, null, null, null, null)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"30A7B9A6-805E-4D65-8194-F2E99774BA7E"}
 */
function onActionpais(event) {
	elements.fld_email.requestFocus()
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"BC0D3E22-2B4B-4D2B-9D7E-A057062E8F72"}
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"343F9F81-A321-47A9-97CB-2283739A5C4C"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Comisionista';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de este Comisionista';	
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
  *
 *
 *
 * @properties={typeid:24,uuid:"DFEDDF3B-D7D3-4428-9937-41E68A85DE5A"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Comisionista'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'AG'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de este Comisionista'.toUpperCase():
		DREF = forms.FrmBancosCuentasCargoGC.codigoctabanco.toString();
		HREF = forms.FrmBancosCuentasCargoGC.codigoctabanco.toString();
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'AG'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"AF5010AE-0B25-4B10-A61D-5A080599481E"}
 */
function btn_listadoAgentes(event) {
	
	globals.GCFormulario = 'FrmAgentesGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialog_Agentes3')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialog_Agentes3", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'Agentes';
	//win.resizable = true;
	//win.show(forms.dialog_Clientes2GC)
	win.show(forms.lst_Agentes2GC)

}
