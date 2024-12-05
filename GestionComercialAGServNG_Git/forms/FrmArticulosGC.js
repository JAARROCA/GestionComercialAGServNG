/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"0C9BEC60-3FD8-4AB7-B738-2C38CAE5D6F4",variableType:8}
 */
var Detalle = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"0C340466-7097-4F04-94B3-E836A03F0EB1"}
 */
var DOCPDF3 = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"266CD898-5EEB-490F-B26E-42E09C38D0DF",variableType:8}
 */
var currentIndex = -1;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"625554EB-529E-43A3-A732-ECD9202FBCCA",variableType:-4}
 */
var files_positions = null;

/**
 *
 *
 *
 * @properties={typeid:35,uuid:"CF553629-C91B-48E7-AED0-CC80C1294739",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"ABEB4FA7-8ED2-453D-8C2C-FDD9499F0BC7"}
 */
var subFolder = "/";

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E96D1BA-6D92-4A65-83E1-70F7C48E8DCB"}
 * @SuppressWarnings(unused)
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	var success = foundset.removeFoundSetFilterParam('FiltradoArticulosActivos') 
	plugins.window.createShortcut('control shift M', handle_shortCut);
	elements.tabs_mainPanel2.tabIndex = 0;
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * Handle record selected.
 *
 *
 * @properties={typeid:24,uuid:"06DC3377-FA23-43D0-9588-182974F85423"}
 */
function onRecordSelection() {
	// TODO Auto-generated method stub
	//setup the record status
	
		globals.GCsetupRecordStatus();
	
		
		globals.GCcurID_Articulo = id
		if(globals.GCRegistroNuevo == 1)
		{
			if(globals.GCisEditing())
			{
				btn_cancel()
				globals.GCRegistroNuevo = null
				forms.FrmArticulosGC.doEdit()
			}
		}
		sub_setPreviewLabels();	
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"9E8BDD48-CAEB-4E95-A1C3-17A1D41D3739"}
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
	elements.BtnFamilia.visible = false
	elements.codigo.visible = false
	elements.lblcodigo.visible = true
	sub_setPreviewLabels();	
	
	if(globals.GCFormulario)	
	{
		if(globals.GCFormulario == 'FrmMoviArtiGC')
		{
			if(forms.FrmMoviArtiGC.cod_ms)
			{
				var query = "select [id] from [tbmaestroarticulos] where [codigo] ='"+ forms.FrmMoviArtiGC.cod_ms + "'";
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var uuid = dataset.getValue(1, 1)
				foundset.loadAllRecords()
				var result = foundset.selectRecord(uuid)
				var fsCount = databaseManager.getFoundSetCount(foundset);
				while(result==false)
				{
					if(fsCount == foundset.getSize())
					{
						return;
					}
					foundset.setSelectedIndex(foundset.getSize());
					result = foundset.selectRecord(uuid);
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"EFF0C1DC-1C0D-49E1-86B5-93A7CD40E26F"}
 */
function doEdit()
{
	_super.doEdit()
	elements.BtnFamilia.visible = true
	elements.codigo.bgcolor = '#FFFF00';
	elements.fld_descripcion.bgcolor = '#FFFF00';
	elements.fld_fechavigor.visible = true
	elements.lblfechavigor.visible = false
	elements.btn_cambiarprecios.visible = false
	elements.btn_cambiardescuentos.visible = false
	elements.btn_histmodificaciones.visible = false
	elements.btn_top5.visible = false
	elements.btnCalculadora.visible = true
	elements.btnCalculadorac.visible = true
	if(globals.GCRegistroNuevo == 1) elements.exis_a.readOnly = false
	else elements.exis_a.readOnly = true
	//don't need image buttons for webclient - at all
	
}

/**
 * @properties={typeid:24,uuid:"48B69738-3373-428F-B2A5-2047E4F0D7E8"}
 */
function btn_save()
{
	if(!codigo)
	{
		globals.GCshowErrorDialog('Falta introducir el código del articulo.',null,'Aceptar',null,null,null)
	}
	else if(!descripcion)
	{
		globals.GCshowErrorDialog('Falta introducir la descripción del articulo.',null,'Aceptar',null,null,null)
	}
	else
	{		
		if(globals.GCRegistroNuevo == 1)
		{
			var query = "select [codigo] from [tbMaestroArticulos] where [codigo] = '" + codigo + "'"
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var n = dataset.getValue(1,1)
			if(n != null)
			{
				var methd = 'forms.FrmArticulosGC.foco()';
				globals.GCshowErrorDialog('Código de Artículo duplicado!Elija otro.',methd,'Aceptar',null,null,null)
			}
			else
			{
				var editedRecs = databaseManager.getEditedRecords( foundset)
				if(editedRecs.length > 0)
				{
					for (var x=0;x<editedRecs.length;x++)
					{
						var cod = editedRecs[x]['codigo'];
						dataset = editedRecs[x].getChangedData();
						var rows = dataset.getMaxRowIndex()
						for( var i = 1 ; i <= rows ; i++ )
						{
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
							var record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
				            record.tipo = 'A' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
				inventarioStock()
				var artid = id;
				var result = foundset.selectRecord(artid)
				var fsCount = databaseManager.getFoundSetCount(foundset);
				while(result==false)
				{
					if(fsCount == foundset.getSize()) break;//return;
					foundset.setSelectedIndex(foundset.getSize());
					result = foundset.selectRecord(artid);
				}
				globals.GCRegistroNuevo = null
				elements.BtnFamilia.visible = false
				elements.codigo.bgcolor = '#f0f0f0'
				elements.codigo.readOnly = true
				elements.codigo.visible = false
				elements.lblcodigo.visible = true
				elements.lbl_codrequired.visible = false
				elements.fld_fechavigor.visible = false
				elements.lblfechavigor.visible = true
				elements.btn_cambiarprecios.visible = true
				elements.btn_cambiardescuentos.visible = true
				elements.btn_histmodificaciones.visible = true
				elements.btn_top5.visible = true
				elements.btnCalculadora.visible = false
				elements.btnCalculadorac.visible = false
				elements.exis_a.readOnly = true
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
					cod = editedRecs[x]['codigo'];
					dataset = editedRecs[x].getChangedData();
					rows = dataset.getMaxRowIndex()
					for( i = 1 ; i <= rows ; i++ )
					{
						vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
			            record.tipo = 'A' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
			artid = id;
			result = foundset.selectRecord(artid)
			fsCount = databaseManager.getFoundSetCount(foundset);
			while(result==false)
			{
				if(fsCount == foundset.getSize())
				{
				return;
				}
			foundset.setSelectedIndex(foundset.getSize());
			result = foundset.selectRecord(artid);
			}
			globals.GCRegistroNuevo = null
			elements.BtnFamilia.visible = false
			elements.codigo.bgcolor = '#f0f0f0'
			elements.codigo.readOnly = true
			elements.codigo.visible = false
			elements.lblcodigo.visible = true
			elements.lbl_codrequired.visible = false
			elements.fld_fechavigor.visible = false
			elements.lblfechavigor.visible = true
			elements.btn_cambiarprecios.visible = true
			elements.btn_cambiardescuentos.visible = true
			elements.btn_histmodificaciones.visible = true
			elements.btn_top5.visible = true
			elements.btnCalculadora.visible = false
			elements.btnCalculadorac.visible = false
			sub_setPreviewLabels();
			
			//forms.lst_ArticulosGC.btn_sortAsc()
			//forms.lst_ArticulosGC.foundset.selectRecord(id)
		
			if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) onRecordSelection();
		}
	}
}

/**
 * @properties={typeid:24,uuid:"32E4029C-A6B2-4B09-AD4F-406A984517DD"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	globals.GCRegistroNuevo = null
	elements.BtnFamilia.visible = false
	elements.codigo.bgcolor = '#f0f0f0'
	elements.codigo.readOnly = true
	elements.codigo.visible = false
	elements.lblcodigo.visible = true
	elements.lbl_codrequired.visible = false
	elements.fld_fechavigor.visible = false
	elements.lblfechavigor.visible = true
	elements.btn_cambiarprecios.visible = true
	elements.btn_cambiardescuentos.visible = true
	elements.btn_histmodificaciones.visible = true
	elements.btn_top5.visible = true
	elements.btnCalculadora.visible = false
	elements.btnCalculadorac.visible = false
	elements.exis_a.readOnly = true
	sub_setPreviewLabels();
}

/**
 * @properties={typeid:24,uuid:"414BEB23-850E-4FD8-A3A3-15E0983BBAC9"}
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
		elements.lbl_imagePreview.text = '';//'Sin Imágen';
		elements.lbl_imagePreview.visible = true;
		elements.lbl_imagePreview.imageURL = "media:///no_foto.png";
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
 * @properties={typeid:24,uuid:"8A49DEB5-F5D1-46F5-8D13-C9AF3AE1CF8D"}
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
 * @properties={typeid:24,uuid:"CE47290B-D024-4F1B-8D6C-6B7484FC9B04"}
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
 * @properties={typeid:24,uuid:"DA8164B6-10AC-4E65-BCCC-F8FED18E44B9"}
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
	elements.exis_a.readOnly = false
	multiplo = 1;
	situacion = 'A';
	fechavigor = new Date();
	porcbeneficio = 20;
	piva_a = 21;
	exis_a = 0;
}

/**
 * @properties={typeid:24,uuid:"4D7246F7-7FF6-407F-9387-95DE88A81957"}
 */
function inventarioStock(){
	try{
		var fecha = new Date();
		
		
		var tip1 = sub_setTip1()		
		//var stock = sub_stock(codigo)
		if(!exis_a) exis_a = 0;
		
		forms.FrmMoviArtiGC.foundset.newRecord(true)	
		forms.FrmMoviArtiGC.id = application.getUUID()
		forms.FrmMoviArtiGC.cod_ms = codigo
		forms.FrmMoviArtiGC.fecha_ms = fecha
		forms.FrmMoviArtiGC.tip1_ms = tip1
		forms.FrmMoviArtiGC.tipo_ms = 'I'
		forms.FrmMoviArtiGC.ndoc_ms = 'CREACION'
		forms.FrmMoviArtiGC.ndoc1_ms = null
		forms.FrmMoviArtiGC.movi_ms = null
		forms.FrmMoviArtiGC.exis_ms = exis_a
		forms.FrmMoviArtiGC.ferm_ms = fecha
		forms.FrmMoviArtiGC.nusu_ms = globals.GClogin_usuario;
		databaseManager.saveData()
	}
	catch(e){
		globals.GCshowErrorDialog(e.toString(),null,'Aceptar',null,null,null)
	}
}

/**
 * @return {Number}
 *
 * @properties={typeid:24,uuid:"13BD9B63-CD05-4B4F-A737-D6D5A1C5E875"}
 */
function sub_setTip1()
{
	var query = 'select tip1_ms from [dbo].[moviarti] order by tip1_ms desc'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var tip1 = dataset.getValue(1,1) + 1
	
	return tip1
	
}

/**
 * 
 * TODO generated, please specify type and doc for the params
 * @param {String} art
 * @return {Number}
 *
 * @properties={typeid:24,uuid:"22AAD385-FF89-477C-880B-A9A52FDF81E6"}
 */
function sub_stock(art)
{
	var query = "select exis_a from tbmaestroarticulos where codigo='"+art+"'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var exis = dataset.getValue(1,1)
	
	return exis
	
}

/**
 * @properties={typeid:24,uuid:"7E7A15DB-A738-463B-B37A-9ACA28C37C05"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_Articulos_list();
}

/**
 * @properties={typeid:24,uuid:"F880611F-7C86-4203-9FBB-687CA76DB4F6"}
 * @AllowToRunInFind
 */
function rpt_Articulos_list()
{
	try
	{
		globals.GCshowDialogListadoArticulos('Listado de Articulos',1,null,null,null,null,null,null,null,null)
		
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
 * @properties={typeid:24,uuid:"F9C884A4-B233-4CA4-9E50-D2E5BA39040A"}
 */
function validate_beforeDelete()
{
	var pre = gctbmaestroarticulos_to_lofertas.getSize()
	var alb = gctbmaestroarticulos_to_lalbaran.getSize()
	var fra = gctbmaestroarticulos_to_tbfacturalinea.getSize()
	var pedcompra = gctbmaestroarticulos_to_tbpedidocompralinea.getSize()
	var albcompra = gctbmaestroarticulos_to_lalbapro.getSize()
	var fracompra = gctbmaestroarticulos_to_tbfacturacompralinea.getSize()
	//var cont = companies_to_contacts.getSize()

	if(fra > 0 || pre > 0 || alb > 0 || pedcompra > 0 || albcompra > 0 || fracompra > 0)
	{
		globals.GCshowErrorDialog("No se puede borrar un Artículo que se utiliza en varios documentos.", null,'Aceptar', null, null, null);
		return 1
	}
	else
	{
		return 0;
	
	}
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"47C5F9E5-064F-4E16-9953-4B16840F25EA"}
 */
function onDataChangecoda() {
	// TODO Auto-generated method stub
	var query = "select [codigo] from [tbMaestroArticulos] where [codigo] = '" + codigo + "'"
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		var methd = 'forms.FrmArticulosGC.foco()';
		globals.GCshowErrorDialog('Código de Artículo duplicado!Elija otro.',methd,'Aceptar',null,null,null)
	}
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"C06D4B2D-1FC4-4D61-AF78-5DAFF7249459"}
 */
function foco() {
	elements.codigo.requestFocus()
}

/**
*
* @properties={typeid:24,uuid:"5D579BEA-BDC5-4C53-A6AC-1A8BF04BA8D0"}
*/
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
		var record = vSet.getRecord(vSet.newRecord());
		record.id = application.getUUID()
        record.tipo = 'A' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
		record.codigo = codigo;
		record.fecha = new Date();
		record.datomodif = descripcion;
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
 * @properties={typeid:24,uuid:"280BE594-F57C-4F28-BF39-7CFDA8FF8088"}
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
 * @properties={typeid:24,uuid:"B25CCB6E-218E-44C4-B4A0-1CF6F22F568C"}
 */
function onActiondescripcion(event) {
	// TODO Auto-generated method stub
	elements.fld_refcliente.requestFocus()
	elements.fld_refcliente.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7E84081D-7E10-4293-831D-4A29434C701E"}
 */
function onActionrefcliente(event) {
	// TODO Auto-generated method stub
	elements.fld_fechavigor.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"505B5ADA-506B-4B07-B365-145345FD8E60"}
 */
function onActionsituacionpieza(event) {
	// TODO Auto-generated method stub
	elements.fld_fechavigor.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"66A37239-F458-47DD-BE87-9341FEC18E9C"}
 */
function onActionfechavigor(event) {
	// TODO Auto-generated method stub
	elements.fld_familia.requestFocus()
	elements.fld_familia.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9739176A-E338-46B9-BAAD-5ACAC8AE5C18"}
 */
function onActionfamilia(event) {
	// TODO Auto-generated method stub
	elements.fld_unidmedida.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8FB83395-39E1-4703-942A-0592368D2287"}
 */
function onActionunidmedida(event) {
	// TODO Auto-generated method stub
	elements.fld_pesobruto.requestFocus()
	elements.fld_pesobruto.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F6D7BA19-510C-4844-B419-C97DB5D7697E"}
 */
function onActionpesobruto(event) {
	// TODO Auto-generated method stub
	elements.fld_pesoneto.requestFocus()
	elements.fld_pesoneto.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"DF98757D-826E-4FA2-BEBB-A1B4D964ACE7"}
 */
function onActionpesoneto(event) {
	// TODO Auto-generated method stub
	elements.fld_preciocosto.requestFocus()
	elements.fld_preciocosto.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"C7D156CD-0394-47BA-92AF-E72797DBF4D4"}
 */
function onActionloteecon(event) {
	// TODO Auto-generated method stub
	elements.fld_stockmin.requestFocus()
	elements.fld_stockmin.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4C8657E0-60AF-42B0-8ADF-8DAF60B73232"}
 */
function onActionpreciocosto(event) {
	// TODO Auto-generated method stub
	elements.fld_preciopieza.requestFocus()
	elements.fld_preciopieza.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"0BC73750-0DDE-408B-A6CD-D85C83EC9924"}
 */
function onActionprecio(event) {
	// TODO Auto-generated method stub
	elements.fld_multiplo.requestFocus()
	elements.fld_multiplo.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"074CA556-9187-4557-8B46-1BB3906C5FF3"}
 */
function BtnFamilia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmArticulos';
	//globals.GCshowDialogBDFamilias('Familias', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Familias')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Familias", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Familias';
	//win.resizable = true;
	win.show(forms.dlgFamilias2GC)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F195CF96-5897-406E-816E-268CEA485BD4"}
 */
function btn_cambiarprecios(event) {
	globals.GCshowDialogCambiarPreciosArticulos('Cambiar Precios Articulos',1,null,null,null,null,null,null,null,null)	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"21242A0D-9B67-45A7-8C5D-540366343748"}
 */
function btn_cambiardescuentos(event) {
	globals.GCshowDialogCambiarDtoArticulos('Cambiar Descuento Articulos',1,null,null,null,null,null,null,null,null)    		
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
 * @properties={typeid:24,uuid:"DAB0D5B0-4593-46DF-B279-1EABC91CA5A6"}
 */
function handle_shortCut(v_event)
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	globals.GCevento = null
	if(!globals.GCisEditing() && frm == 'FrmArticulosGC' && v_event.getType() == 'control shift M')
	{
		var DREF = codigo.toString()
		if(DREF == null || DREF == '') DREF = '';
		var HREF = codigo.toString()
		if(HREF == null || HREF == '') HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'A'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"214C9F59-0869-4B8C-8902-153942F30157"}
 */
function btn_histmodif(event) {
	if(!globals.GCisEditing())
	{
		var menu = plugins.window.createPopupMenu();
		
		var titulo = 'Todas las modificaciones de Articulos';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_2.png');
		titulo = 'Modificaciones de este Articulo';	
		titulo = titulo.toUpperCase();				
		menu.addMenuItem(titulo, JasperModificaciones, 'media:///edit_1.png');
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			menu.show(event.getSource(),0,0);				
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"44BE3567-77D8-41CD-AAC5-F87C5EABCAC2"}
 */
function JasperModificaciones(event){
	switch (arguments[4]) {
	case 'Todas las modificaciones de Articulos'.toUpperCase():
		var DREF = '';
		var HREF = 'ZZZZZZ';
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		var DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		var HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		var TIPO = 'A'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
		break;
	case 'Modificaciones de este Articulo'.toUpperCase():
		DREF = forms.FrmArticulosGC.codigo;
		HREF = forms.FrmArticulosGC.codigo;
		/*var DFECH = utils.dateFormat(globals.DesdeFechaERP,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '')*/
		DFECH = utils.dateFormat(new Date(1970,0,1,0,0,0),'dd-MM-yyyy');
		HFECH = utils.dateFormat(new Date(new Date().getFullYear(),11,31,23,59,59),'dd-MM-yyyy');
		TIPO = 'A'		
		globals.btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO)
	break;
	default: break;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3F71922B-6359-445D-937C-1153ABDFBB9E"}
 */
function btn_top5(event) {
	globals.GCshowDialogtop5Articulos('Top 5 Artículos',1,null,null,null,null,null,null,null,null)    		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6803B5FC-DED5-4967-B239-2B95A0BE9AFD"}
 */
function btnrecalcularprecio(event) {
	if(preciocosto)
	{
		if(!porcbeneficio) var pbeneficio = 0;
		else pbeneficio = porcbeneficio
		var beneficio = preciocosto * pbeneficio * 0.01;
		if(!piva_a) var piva = 0;
		else piva = piva_a
		//preciopieza = (preciocosto * 100 / (100 - pbeneficio)) 
		preciopieza = globals.GCROUND((preciocosto + beneficio) * (1 + (piva * 0.01)), 2)
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"402CC858-A28C-45C3-9EAC-655D665B86B3"}
 */
function onDataChangePC(event) {
	//if(!preciopieza)
	//{
		btnrecalcularprecio(event)
	//}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"3D823028-F52E-41EA-AB73-850F031BB9F2"}
 */
function onDataChangetipoiva(event) {
	// TODO Auto-generated method stub
	if(preciocosto && piva_a)
	{
		btnrecalcularprecio(event)
		//preciopieza = preciocosto * (1 + (piva_a * 0.01))
	}
}

/**
 * Handle start of a drag.
 * 
 * @param  file
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"FAF33149-4B71-48FC-8FCA-3F8FF2A177AA"}
 */
function startDrag(file,event)
{
	if(globals.GCisEditing())
	{
		//* @returns {Number} DRAGNDROP.MOVE if a move wil happen, DRAGNDROP.COPY if a copy should happen or DRAGNDROP.NONE if no drag should start
	 	if(file) 
	 	{
	 		//var log = scopes.svyLogManager.getLogger('stb.filednd'),
		    //var  result = false,
		    var content 	
		 		///** @type {plugins.file.JSFile[]} */
		 	    //,files = [];
	 	    var x = file.dataMimeType
	 	   if (file.dataMimeType) 
	 	   {
	 	         if(file.dataMimeType.indexOf('application/x-java-file-list') > -1)
	 	         { 
		 	        content = file.data.toArray();
		 	        var rawData = plugins.file.readFile(content[0].getAbsolutePath());
		
		 			if(rawData)
		 			{
		 				var fileName = file.getName();
		 				var ext = utils.stringRight(fileName, 3);
		 				var type = plugins.images.getImage(rawData);
		 				var contentType = type.getContentType();
		 		
		 				if(utils.stringPatternCount(contentType, 'image') > 0)
		 				{
		 					//it's an image we can display
		// 					image_thumbnail = application.createJPGImage(rawData, 90, 90);
		 					
		 					var img_raw = plugins.images.getImage(rawData);
		 					imag_a = img_raw.resize(90,90);
		 					globals.GCsmart_chg = 1;
		 				}
		 				else
		 				{
		 					//there will be no display
		 					imag_a = null;
		 					//show error message!
		// 					globals.svyCore_dlg_warning('<html>This is<b> NOT an image file!</b><br>Please select a different file.</html>','','OK') - the method is not defined
		 					return;
		 				}
		
		 				//image_name = fileName;
		 				//image_type = ext;
		 				//image_mime_type = contentType;
		 				imag_a = rawData;
		
		 				sub_setPreviewLabels();
		 			}
	 			}
	 	   }
	 	}
		/*var src = event.getSource();
		if(src){
			var data = [];
			var selection = foundset.getSelectedIndexes();
			for(i in selection){
				data.push(foundset.getRecord(selection[i]));
			}
			event.data = data;
			return DRAGNDROP.COPY;
		}
		return DRAGNDROP.NONE*/
	}	
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"81CFAFDB-F74D-48AC-BB7B-AD5750B18365"}
 */
function btn_listadoArticulos(event) {
	
	globals.GCFormulario = 'FrmArticulosGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialog_Articulos3')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialog_Articulos3", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Articulos';
	//win.resizable = true;
	//win.show(forms.dialog_Clientes2GC)
	win.show(forms.lst_Articulos2GC)

}
