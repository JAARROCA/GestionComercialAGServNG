/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D887992-7E18-4FFA-8C2B-A3E3694ADE35"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
}

/**
 * @properties={typeid:24,uuid:"BCBFDFB2-C37A-4B4C-9F4E-1BFD8E17F1F7"}
 */
function sub_setNewNumeroLinea()
{
	var ser = 'P'
	var query = "select [nli_lfa] from [tbFacturaProformaLinea] where [eje_lfa] = " + eje_lfa + 
	" AND [ser_lfa] ='"+ser+"' AND [nup_lfa] = "+nup_lfa+
	" order by nli_lfa desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	nli_lfa = dataset.getValue(1, 1) + 1	
}

/**
 * @properties={typeid:24,uuid:"0FAC26DA-B361-44F5-AAE7-6440B30E1C76"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	sub_setNewNumeroLinea();	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BEAB28C2-8E57-4364-BAD7-3D840379EA00"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Linea_FacturaProforma';
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
 * @properties={typeid:24,uuid:"BABD35B3-066B-4427-B575-59268E1571DA"}
 */
function onShow() {
	// TODO Auto-generated method stub
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"80EE4214-90DB-45E0-81AE-61DF4E48FA55"}
 */
function onActionrefpieza(event) {
	// TODO Auto-generated method stub
	//onDataChangerefpieza()
	elements.concepto.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"72838B86-8A01-4031-8729-7C722EC29114"}
 */
function onActioncant(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.dto_lfa.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"FD7BF73A-CC4B-4CC7-B395-7285ACC61221"}
 */
function onActiondto(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.prec_lfa.requestFocus()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"731817F9-3CE8-4A78-8D1D-2C6AD1F4E74F"}
 */
function onDataChangerefpieza() {
	// TODO Auto-generated method stub
	if(ref_lfa != null)
	{
		var query = "select [ID],[Descripcion] from [tbMaestroArticulos] where [Codigo] = '" + ref_lfa +"'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var uuid = dataset.getValue(1,1)
		if(uuid != null)
		{
			if(gctbfacturaproformalinea_to_tbmaestroarticulos)
			{
				if(gctbfacturaproformalinea_to_tbmaestroarticulos.imag_a != null && 
				gctbfacturaproformalinea_to_tbmaestroarticulos.imag_a != '')
				{
					elements.BtnImagRefencia.enabled = true;
					elements.BtnImagRefencia.visible = true;
				}
				else
				{
					elements.BtnImagRefencia.enabled = false;
					elements.BtnImagRefencia.visible = false;
				}
				if(concep_lfa == null || concep_lfa == '') concep_lfa = dataset.getValue(1,2);		
				else concep_lfa = gctbfacturaproformalinea_to_tbmaestroarticulos.descripcion
				if(gctbfacturaproformalinea_to_tbmaestroarticulos.multiplo != null && 
				gctbfacturaproformalinea_to_tbmaestroarticulos.multiplo != '')
				{
					unme_lfa = gctbfacturaproformalinea_to_tbmaestroarticulos.multiplo					
				}
				if(gctbfacturaproformalinea_to_tbmaestroarticulos.unidmedida != null && 
				gctbfacturaproformalinea_to_tbmaestroarticulos.unidmedida != '')
				{
					medida_lfa = gctbfacturaproformalinea_to_tbmaestroarticulos.unidmedida					
				}
				if(gctbfacturaproformalinea_to_tbmaestroarticulos.piva_a)
				{
					if(gctbfacturaproformalinea_to_tbmaestroclientes.pais == 'ES')
					{
						piva_lfa = gctbfacturaproformalinea_to_tbmaestroarticulos.piva_a;
					}
					else piva_lfa = gctbfacturaproformalinea_to_tbmaestroclientes.tipoiva;
				}
				else if(gctbfacturaproformalinea_to_tbmaestroclientes.tipoiva)
				{
					piva_lfa = GCtbfacturalinea_to_tbmaestroclientes.tipoiva;					
				}
				else piva_lfa = 0;
				//if(prec_lfa == null || prec_lfa == '')
				//{
				if(gctbfacturaproformalinea_to_tbmaestroarticulos.tbmaestroarticulos_to_tbmaestroclientesprecioarticulos &&
				gctbfacturaproformalinea_to_tbmaestroarticulos.tbmaestroarticulos_to_tbmaestroclientesprecioarticulos.getSize() > 0)
				{
					query = "select precio from [dbo].[tbmaestroclientesprecioarticulos] where [idcliente] = " + clie_lfa +
							" and idarticulo ='"+ref_lfa+"'";
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var precio = dataset.getValue(1,1);
					if(precio) prec_lfa = precio;
					else prec_lfa = gctbfacturaproformalinea_to_tbmaestroarticulos.preciopieza;
				}
				else
				{
					prec_lfa = gctbfacturaproformalinea_to_tbmaestroarticulos.preciopieza;					
				}
				onDataChange()
			}
			else
			{
				elements.BtnImagRefencia.enabled = false;
				elements.BtnImagRefencia.visible = false;
			}
		}	
		else
		{
			concep_lfa = null;
			elements.BtnImagRefencia.enabled = false;
			elements.BtnImagRefencia.visible = false;
		}
	}
	else
	{
		concep_lfa = null;
		elements.BtnImagRefencia.enabled = false;
		elements.BtnImagRefencia.visible = false;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FEFB965D-56F0-4D3F-A25F-B6FB5A63B797"}
 */
function onActionconcepto(event) {
	// TODO Auto-generated method stub
	elements.cant1_lfa.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"40C69F4F-50ED-45BF-BFDA-401BCD79A5D6"}
 */
function onActionprec(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.unme_lfa.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E06EC753-3423-488D-BFDB-F70974FC696C"}
 */
function onActionund(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.piva_lfa.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EE3EF785-40A5-4ED7-A090-1DAE541B2FB8"}
 */
function onActionnalb(event) {
	// TODO Auto-generated method stub
	elements.lalb_lfa.requestFocus()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F592651F-64D6-46BF-A79F-C2C95B89E9A5"}
 */
function onActionlalb(event) {
	// TODO Auto-generated method stub
	elements.ref_lfa.requestFocus()	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"E78A0FCE-1901-47DC-99F6-A53CB9AFD49A"}
 */
function onDataChange() {
	// TODO Auto-generated method stub	
	if(unme_lfa == null || unme_lfa == '') unme_lfa = 1;
	if(prec_lfa  != null && prec_lfa != '')
	{
		if(cant1_lfa == null || cant1_lfa == '') cant1_lfa = 1;		
	}
	if(cant1_lfa != null && prec_lfa  != null && unme_lfa  != null) 
	{
		var dto = dto_lfa;
		if(dto == null || dto == '') dto = 0;
		impdto_lfa = ((cant1_lfa * prec_lfa) / unme_lfa) * dto * 0.01
		if(impdto_lfa == 0) impdto_lfa = null; 
		impor_lfa = ((cant1_lfa * prec_lfa) / unme_lfa) - impdto_lfa
		if(piva_lfa != null && piva_lfa != '') var iva = piva_lfa;
		else iva = 0;
		var cuotaiva = globals.GCROUND(impor_lfa * iva * 0.01, 2)
		importot_lfa = globals.GCROUND(impor_lfa + cuotaiva, 2)
	}
	else
	{
		impdto_lfa = null;
		impor_lfa = null;
		importot_lfa = null;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9B2CB278-ABF0-45E0-8B05-3929D73E96B3"}
 */
function onActioniva(event) {
	// TODO Auto-generated method stub
	onDataChange()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"65B199E3-A1B9-42A1-8F12-AE0B62AE9380"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onFocusLostfecha(event)
	elements.nalb_lfa.selectAll()
	elements.nalb_lfa.requestFocus()
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5DC3C885-A1AC-4FE1-A29F-EB3FD519F546"}
 */
function onFocusLostfecha(event) {
	// TODO Auto-generated method stub
	if(fecha_lfa)
	{
		var fech = utils.dateFormat(fecha_lfa,'dd-MM-yyyy')
		fecha_lfa = utils.parseDate(fech,'dd-MM-yyyy')
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"88F57F92-2991-4A83-97DF-ADCE2CE303AA"}
 */
function btn_Imagen(event) {
	// TODO Auto-generated method stub
	var query = "select [ID] from [dbo].[tbMaestroArticulos] where [codigo] = '" + ref_lfa + "'"
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	
	var uuid = dataset.getValue(1,1)
	if(uuid != null)
	{
		var result = forms.dlg_ImagenArticuloGC.foundset.selectRecord(uuid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_ImagenArticuloGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_ImagenArticuloGC.foundset.getSize())
			{
				return;
			}
		forms.dlg_ImagenArticuloGC.foundset.setSelectedIndex(forms.dlg_ImagenArticuloGC.foundset.getSize());
		result = forms.dlg_ImagenArticuloGC.foundset.selectRecord(uuid);
		}
		globals.GCshowDialogImagenArticulo(ref_lfa + ' - ' + GCtbfacturalinea_to_tbmaestroarticulos.descripcion, 1, null, null, true, null, null, null, null, null);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"02A9AB5E-2970-42EF-84B4-51AB675B59BD"}
 */
function btn_Articulo(event) {
	// TODO Auto-generated method stub
	if(ref_lfa)
	{
		var query = "select [ID] from [tbMaestroArticulos] where [codigo] = '" + ref_lfa + "'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var uuid = dataset.getValue(1,1)
		if(uuid)
		{
			var result = forms.dlg_ArticulosGC.foundset.selectRecord(uuid)
			var fsCount = databaseManager.getFoundSetCount(forms.dlg_ArticulosGC.foundset);
			while(result==false)
			{
				if(fsCount == forms.dlg_ArticulosGC.foundset.getSize())
				{
					return;
					
				}
				forms.dlg_ArticulosGC.foundset.setSelectedIndex(forms.dlg_ArticulosGC.foundset.getSize());
			result = forms.dlg_ArticulosGC.foundset.selectRecord(uuid);
			}
			if(!globals.GCisEditing()) globals.GCstartEditing()
			forms.dlg_ArticulosGC.Articulo = uuid;
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
			forms.dlg_ArticulosGC.Articulo = null;
			forms.dlg_ArticulosGC.elements.codigo.readOnly = true;
			forms.dlg_ArticulosGC.elements.codigo.bgcolor = '#f0f0f0';
			forms.dlg_ArticulosGC.elements.codigo.visible = false;
			forms.dlg_ArticulosGC.elements.lblcodigo.visible = true;
			globals.GCshowDialogArticulo('BD Articulos', 1, null, null, true, null, null, null, null, null);
		}
	}
	else
	{
		forms.dlg_ArticulosGC.foundset.setSelectedIndex(1)
		if(!globals.GCisEditing()) globals.GCstartEditing()
		forms.dlg_ArticulosGC.Articulo = null;
		forms.dlg_ArticulosGC.elements.codigo.readOnly = true;
		forms.dlg_ArticulosGC.elements.codigo.bgcolor = '#f0f0f0';
		forms.dlg_ArticulosGC.elements.codigo.visible = false;
		forms.dlg_ArticulosGC.elements.lblcodigo.visible = true;
		globals.GCshowDialogArticulo('BD Articulos', 1, null, null, true, null, null, null, null, null);
	}
}
