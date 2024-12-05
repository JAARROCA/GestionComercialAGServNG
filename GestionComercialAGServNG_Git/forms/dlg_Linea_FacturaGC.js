/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"36A7D9BD-2687-4A69-B350-97ACBF83114D"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * @properties={typeid:24,uuid:"6FB2822A-E490-4490-9F9E-4737CBCD8C32"}
 */
function sub_setNewNumeroLinea()
{
	if(ser_lfa == null)
	{
		var ser = 'IS NULL'
	}
	else
	{
		ser = "= '"+ser_lfa+"'"
	}
	var query = "select [nli_lfa] from [tbFacturaLinea] where [eje_lfa] = " + eje_lfa + 
	" AND [ser_lfa] "+ser+" AND [nup_lfa] = "+nup_lfa+
	" order by nli_lfa desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	nli_lfa = dataset.getValue(1, 1) + 1	
}

/**
 * @properties={typeid:24,uuid:"046FD9D4-94B3-4E6D-A60A-D21171A3975E"}
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
 * @properties={typeid:24,uuid:"C6FC157E-39AC-4735-9566-3B3B52A3DC84"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Linea_Factura';
	//globals.GCshowDialogArticulos('BD Artículos', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Articulos')
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
 * @properties={typeid:24,uuid:"61B08717-59E5-475C-BA7A-BBCF25AA9B96"}
 */
function onShow() {
	// TODO Auto-generated method stub
	//valuelisttipoiva()
	
}

/**
 * @properties={typeid:24,uuid:"F0F79F72-9470-4E4D-A369-B722F819AE9B"}
 */
function valuelisttipoiva(){
	application.setValueListItems('TipoIva2',new Array())
	var query = "select Factor, IvaRE from [dbo].[tbMaestroTipoIva] order by Factor desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1)
	var rows = dataset.getMaxRowIndex()
	var tipos =  new Array()
	for(var i=1;i<=rows;i++)
	{
		var arraytipo = new Array(utils.numberFormat(dataset.getValue(i,1),'###,###,##0.00'));
		tipos = tipos.concat(arraytipo)
	}
	application.setValueListItems('TipoIva2',tipos,tipos)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D2C61B65-9EC7-44C8-BA4E-69786C89A224"}
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
 * @properties={typeid:24,uuid:"816412DE-1D6A-4118-9CA9-EAF199DECC0C"}
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
 * @properties={typeid:24,uuid:"C32BFCB6-3B24-4697-A290-7773C2E2D740"}
 */
function onActiondto(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.prec_lfa.requestFocus()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"37A4F774-402B-45BF-8B41-12AE365087A4"}
 */
function onDataChangerefpieza() {
	// TODO Auto-generated method stub
	if(ref_lfa)
	{
		var query = "select [ID],[Descripcion] from [tbMaestroArticulos] where [Codigo] = '" + ref_lfa +"'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var uuid = dataset.getValue(1,1)
		if(uuid)
		{
			if(GCtbfacturalinea_to_tbmaestroarticulos)
			{
				if(GCtbfacturalinea_to_tbmaestroarticulos.imag_a != null && 
				GCtbfacturalinea_to_tbmaestroarticulos.imag_a != '')
				{
					elements.BtnImagRefencia.enabled = true;
					elements.BtnImagRefencia.visible = true;
				}
				else
				{
					elements.BtnImagRefencia.enabled = false;
					elements.BtnImagRefencia.visible = false;
				}
				//if(!concep_lfa) 
				//{
					if(GCtbfacturalinea_to_tbmaestroarticulos.descripcion) concep_lfa = GCtbfacturalinea_to_tbmaestroarticulos.descripcion
					else concep_lfa = dataset.getValue(1,2)
					if(GCtbfacturalinea_to_tbmaestroarticulos.desc_detalle_a) concep_lfa = concep_lfa+"\n"+GCtbfacturalinea_to_tbmaestroarticulos.desc_detalle_a;
				//}
				if(GCtbfacturalinea_to_tbmaestroarticulos.multiplo)
				{
					unme_lfa = GCtbfacturalinea_to_tbmaestroarticulos.multiplo					
				}
				if(GCtbfacturalinea_to_tbmaestroarticulos.unidmedida)
				{
					medida_lfa = GCtbfacturalinea_to_tbmaestroarticulos.unidmedida					
				}
				if(GCtbfacturalinea_to_tbmaestroarticulos.dto)
				{
					dto_lfa = GCtbfacturalinea_to_tbmaestroarticulos.dto					
				}
				else
				{
					dto_lfa = null
				}
				if(GCtbfacturalinea_to_tbmaestroarticulos.piva_a)
				{
					if(GCtbfacturalinea_to_tbmaestroclientes.pais == 'ES')
					{
						piva_lfa = GCtbfacturalinea_to_tbmaestroarticulos.piva_a;
					}
					else if(GCtbfacturalinea_to_tbmaestroclientes.tipoiva) piva_lfa = GCtbfacturalinea_to_tbmaestroclientes.tipoiva;
					else piva_lfa = 0;
				}
				else if(GCtbfacturalinea_to_tbmaestroclientes.tipoiva)
				{
					piva_lfa = GCtbfacturalinea_to_tbmaestroclientes.tipoiva;					
				}
				else piva_lfa = 0;
				
				//if(prec_lfa == null || prec_lfa == '')
				//{
				if(GCtbfacturalinea_to_tbmaestroarticulos.tbmaestroarticulos_to_tbmaestroclientesprecioarticulos &&
				GCtbfacturalinea_to_tbmaestroarticulos.tbmaestroarticulos_to_tbmaestroclientesprecioarticulos.getSize() > 0)
				{
					query = "select precio from [dbo].[tbmaestroclientesprecioarticulos] where [idcliente] = " + clie_lfa +
							" and idarticulo ='"+ref_lfa+"'";
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var precio = dataset.getValue(1,1);
					if(precio) prec_lfa = precio;
					else if(GCtbfacturalinea_to_tbmaestroarticulos.preciopieza) prec_lfa = GCtbfacturalinea_to_tbmaestroarticulos.preciopieza;
				}
				else if(GCtbfacturalinea_to_tbmaestroarticulos.preciopieza)
				{
					prec_lfa = GCtbfacturalinea_to_tbmaestroarticulos.preciopieza;					
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
 * @properties={typeid:24,uuid:"E685ACB6-E494-4BAC-AD43-02ADC5AFA5CE"}
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
 * @properties={typeid:24,uuid:"4A8A9E6C-6088-43CA-8A07-F75E51B50335"}
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
 * @properties={typeid:24,uuid:"C98E4B18-B351-4308-8040-78C008A10C66"}
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
 * @properties={typeid:24,uuid:"D5BBEEBF-4E1F-4FCD-AA2A-49ED58D9D6D7"}
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
 * @properties={typeid:24,uuid:"0BC8A812-C797-43F9-A6E5-81C1905E8423"}
 */
function onActionlalb(event) {
	// TODO Auto-generated method stub
	elements.ref_lfa.requestFocus()	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"16901724-A570-4023-A93D-09B6BE50A533"}
 */
function onDataChange() {
	// TODO Auto-generated method stub	
	if(!piva_lfa) piva_lfa = 0.00;
	if(unme_lfa == null || unme_lfa == '') unme_lfa = 1;
	if(prec_lfa  != null && prec_lfa != '')
	{
		if(cant1_lfa == null || cant1_lfa == '') cant1_lfa = 1;		
	}
	if(cant1_lfa != null && (prec_lfa  != null && prec_lfa != '') && unme_lfa  != null) 
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
 * @properties={typeid:24,uuid:"6BFB2BC6-D20E-4EA5-BB9E-429C5BAC67EA"}
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
 * @properties={typeid:24,uuid:"35827430-1DF0-43BC-81F7-841D6F0006CC"}
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
 * @properties={typeid:24,uuid:"41D0E625-07B0-4DAA-B8DC-3C2F6C48D93B"}
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
 * @properties={typeid:24,uuid:"D126D7E5-4E33-4F7F-A9F0-F43D8638194C"}
 */
function btn_Imagen(event) {
	if(ref_lfa)
	{
		var query = "select [ID] from [dbo].[tbMaestroArticulos] where [codigo] = '" + ref_lfa + "'"
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		
		var uuid = dataset.getValue(1,1)
		if(uuid)
		{
			forms.dlg_ImagenArticuloGC.foundset.loadAllRecords()
			var result = forms.dlg_ImagenArticuloGC.foundset.selectRecord(uuid)
			var fsCount = databaseManager.getFoundSetCount(forms.dlg_ImagenArticuloGC.foundset);
			while(result==false)
			{
				if(fsCount == forms.dlg_ImagenArticuloGC.foundset.getSize())return;
				forms.dlg_ImagenArticuloGC.foundset.setSelectedIndex(forms.dlg_ImagenArticuloGC.foundset.getSize());
				result = forms.dlg_ImagenArticuloGC.foundset.selectRecord(uuid);
			}
			globals.GCshowDialogImagenArticulo(ref_lfa + ' - ' + GCtbfacturalinea_to_tbmaestroarticulos.descripcion, 1, null, null, true, null, null, null, null, null);
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4C882691-77C5-450F-B72E-BAC00A1CD599"}
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
				if(fsCount == forms.dlg_ArticulosGC.foundset.getSize()) return;
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
