/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C370BBD5-94B4-4E52-9DC6-B2EF025716EE"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
}

/**
 * @properties={typeid:24,uuid:"4F3E821D-136F-4D27-B722-2238B4D83FAB"}
 */
function sub_setNewNumeroLinea()
{
	var query = "select [nli_lof] from [lofertas] where [nup_lof] = "+nup_lof+
	" order by nli_lof desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	nli_lof = dataset.getValue(1, 1) + 1	
}

/**
 * @properties={typeid:24,uuid:"745DD2E1-4891-41CF-BB0D-F2475AE38527"}
 */
function validate_autoEnter()
{
	sub_setNewNumeroLinea();	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"31048BED-4DFA-4157-AA34-0407D0B5D30E"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Linea_Presupuesto';
	//globals.GCshowDialogArticulos('BD Artículos', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Artículos')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Articulos", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Artículos';
	//win.resizable = true;
	//win.show(forms.dialog_ArticulosGC)
	win.show(forms.dlgArticulosGC)
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"C9646696-B4F2-4884-9A75-C10D20B95684"}
 */
function onShow() {
	// TODO Auto-generated method stub
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EB54EC57-CA89-4615-8345-1CD363960E31"}
 */
function onActionrefpieza(event) {
	// TODO Auto-generated method stub
	elements.descrip.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3A844C96-565E-4B85-BB3C-A525BEF20004"}
 */
function onActioncant(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.dto_lof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"70F73B46-28D8-4AB4-87AE-1C3D70B881CA"}
 */
function onActiondto(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.prec_lof.requestFocus()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"CD4F7D92-9575-43D0-BE2B-395085C0BEAF"}
 */
function onDataChangerefpieza() {
	// TODO Auto-generated method stub
	if(refm_lof != null)
	{
		var query = "select [ID],[Descripcion] from [tbMaestroArticulos] where [Codigo] = '" + refm_lof +"'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var uuid = dataset.getValue(1,1)
		if(uuid != null)
		{
			if(GClofertas_to_tbmaestroarticulos)
			{
				//if(!descrip)
				//{
					if(GClofertas_to_tbmaestroarticulos.descripcion) descrip = GClofertas_to_tbmaestroarticulos.descripcion
					else descrip = dataset.getValue(1,2)
					if(GClofertas_to_tbmaestroarticulos.desc_detalle_a) descrip = descrip+"\n"+GClofertas_to_tbmaestroarticulos.desc_detalle_a;
				//}
				
				//if(prec_lof == null || prec_lof == '')
				//{
					//prec_lof = GClofertas_to_tbmaestroarticulos.preciopieza;
				//}
				if(unme_lof == null || unme_lof == '')
				{
					unme_lof = GClofertas_to_tbmaestroarticulos.multiplo
				}
				if(GClofertas_to_tbmaestroarticulos.dto != null && 
				GClofertas_to_tbmaestroarticulos.dto != '')
				{
					dto_lof = GClofertas_to_tbmaestroarticulos.dto					
				}
				else
				{
					dto_lof = null
				}
				if(GClofertas_to_tbmaestroarticulos.tbmaestroarticulos_to_tbmaestroclientesprecioarticulos &&
				GClofertas_to_tbmaestroarticulos.tbmaestroarticulos_to_tbmaestroclientesprecioarticulos.getSize() > 0)
				{
					query = "select precio from [dbo].[tbmaestroclientesprecioarticulos] where [idcliente] = " + clie_lof +
							" and idarticulo ='"+refm_lof+"'";
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var precio = dataset.getValue(1,1);
					if(precio) prec_lof = precio;
					else if(GClofertas_to_tbmaestroarticulos.preciopieza) prec_lof = GClofertas_to_tbmaestroarticulos.preciopieza;
				}
				else if(GClofertas_to_tbmaestroarticulos.preciopieza)
				{
					prec_lof = GClofertas_to_tbmaestroarticulos.preciopieza;					
				}
				if(imag_lof == null || imag_lof == '')
				{
					if(GClofertas_to_tbmaestroarticulos.imag_a)
					{
						imag_lof = GClofertas_to_tbmaestroarticulos.imag_a;
						sub_setPreviewLabels()
					}
				}
				onDataChange()
			}
		}	
		
	}
	else
	{
		descrip = null;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"127E55D0-D4CA-4D1B-9578-542268B6914E"}
 */
function onActionconcepto(event) {
	// TODO Auto-generated method stub
	elements.cant1_lof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BAFEDA03-98E1-493D-9AEA-3F1B27535602"}
 */
function onActionprec(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.unme_lof.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2632377F-651B-4331-AC00-666801936FEF"}
 */
function onActionund(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.piva_lof.requestFocus()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"071DB4F7-AD50-4C03-9002-FD92C519F86E"}
 */
function onDataChange() {
	// TODO Auto-generated method stub
	if(unme_lof == null || unme_lof == '') unme_lof = 1;
	if(prec_lof  != null)
	{
		if(cant1_lof == null || cant1_lof == '') cant1_lof = 1;		
	}
	if(cant1_lof != null && prec_lof  != null && unme_lof  != null) 
	{
		var dto = dto_lof;
		if(dto == null || dto == '') dto = 0;
		impdto_lof = ((cant1_lof * prec_lof) / unme_lof) * dto * 0.01
		impdto_lof = globals.GCROUND(impdto_lof,2)
		if(impdto_lof == 0) impdto_lof = null; 
		impor_lof = ((cant1_lof * prec_lof) / unme_lof) - impdto_lof
		impor_lof = globals.GCROUND(impor_lof,2)
	}
	else
	{
		impdto_lof = null;
		impor_lof = null;
		importot_lof = null;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D2B1C9B-ADC8-47D1-8D87-0D9CEE584682"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha(event)
	elements.ref_lof.requestFocus()
	elements.ref_lof.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7D3E3E12-CF11-4143-92F4-3A9AEA184329"}
 */
function onDataChangefecha(event) {
	// TODO Auto-generated method stub
	if(fecha_lof)
	{
		var fech = utils.dateFormat(fecha_lof,'dd-MM-yyyy')
		fecha_lof = utils.parseDate(fech,'dd-MM-yyyy')
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"8A08CE61-C6D1-4C4E-B2D0-DE9990D63808"}
 */
function btn_Articulo(event) {
	// TODO Auto-generated method stub
	if(refm_lof)
	{
		var query = "select [ID] from [tbMaestroArticulos] where [codigo] = '" + refm_lof + "'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		
		var result = forms.dlg_ArticulosGC.foundset.selectRecord(dataset.getValue(1,1))
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ArticulosGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ArticulosGC.foundset.getSize())
			{
				return;
				
			}
			forms.dlg_ArticulosGC.foundset.setSelectedIndex(forms.dlg_ArticulosGC.foundset.getSize());
		result = forms.dlg_ArticulosGC.foundset.selectRecord(dataset.getValue(1,1));
		}
		if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ArticulosGC.elements.codigo.bgcolor = '#f0f0f0';
		forms.dlg_ArticulosGC.elements.codigo.readOnly = true;
		forms.dlg_ArticulosGC.elements.codigo.visible = false;
		forms.dlg_ArticulosGC.elements.lblcodigo.visible = true;
		globals.GCshowDialogArticulo('BD Articulos', 1, null, null, true, null, null, null, null, null);
	}
	else
	{
		forms.dlg_ArticulosGC.foundset.setSelectedIndex(1)
		if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ArticulosGC.elements.codigo.readOnly = true;
		forms.dlg_ArticulosGC.elements.codigo.bgcolor = '#f0f0f0';
		forms.dlg_ArticulosGC.elements.codigo.visible = false;
		forms.dlg_ArticulosGC.elements.lblcodigo.visible = true;
		globals.GCshowDialogArticulo('BD Articulos', 1, null, null, true, null, null, null, null, null);
	}
}

/**
 *
 * @properties={typeid:24,uuid:"885458CB-B806-4AFF-92C5-D58F3C2A8825"}
 */
function product_image_dataChange() {
	databaseManager.setAutoSave(false);
	
	if (globals.GCsmart_chg == 0) {
		var rawData = imag_lof;

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
				imag_lof = img_raw.resize(300,300);
			}
			else
			{
				//there will be no display
				imag_lof = null;
				//show error message!
//				globals.svyCore_dlg_warning('<html>This is<b> NOT an image file!</b><br>Please select a different file.</html>','','OK') - the method is not defined
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
 * @properties={typeid:24,uuid:"24096FC9-FA04-4F6D-9DD9-0A4C1D21CA90"}
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
	if(!imag_lof)
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
		elements.lbl_imagePreview.imageURL = null
		application.updateUI(100);
	}
	/*if(!logo)
	{
		elements.lbl_imagePreview.text = 'No Logo';
		elements.lbl_imagePreview.visible = true;
		application.updateUI(100);
	}
	else
	{
		elements.lbl_imagePreview.text = '';
		elements.lbl_imagePreview.visible = false;
		application.updateUI(100);
	}*/
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
 * @properties={typeid:24,uuid:"4B1DA976-70AB-486C-A28F-FD972619BC38"}
 * @SuppressWarnings(unused)
 */
function startDrag(file,event)
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
	 					imag_lof = img_raw.resize(90,90);
	 					globals.GCsmart_chg = 1;
	 				}
	 				else
	 				{
	 					//there will be no display
	 					imag_lof = null;
	 					//show error message!
	// 					globals.svyCore_dlg_warning('<html>This is<b> NOT an image file!</b><br>Please select a different file.</html>','','OK') - the method is not defined
	 					return;
	 				}
	
	 				//image_name = fileName;
	 				//image_type = ext;
	 				//image_mime_type = contentType;
	 				imag_lof = rawData;
	
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
