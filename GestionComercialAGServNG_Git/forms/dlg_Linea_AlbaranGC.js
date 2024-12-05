/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"292FCD25-8B47-4DB3-BB14-FE33D70A283D"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
}

/**
 * @properties={typeid:24,uuid:"78D7EB6C-838B-4C52-AD7A-B67110E9BCD5"}
 */
function sub_setNewNumeroLinea()
{
	var query = "select [nli_lal] from [lalbaran] where [nup_lal] = "+nup_lal+
	" order by nli_lal desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	nli_lal = dataset.getValue(1, 1) + 1	
}

/**
 * @properties={typeid:24,uuid:"1F24DB09-0F68-417E-BE24-24D5346FB34C"}
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
 * @properties={typeid:24,uuid:"83B7E4B4-8A36-4E8F-B0DA-CA1C6B183CE4"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Linea_Albaran';
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
 * @properties={typeid:24,uuid:"9C85892E-2316-4234-88C2-FAC9EAB3D1AC"}
 */
function onShow() {
	if(refm_lal && GClalbaran_to_tbmaestroarticulos){
		elements.lbl_Stock_Actual.visible = true;
		elements.fld_exis_a.visible = true;
	}
	else{
		elements.lbl_Stock_Actual.visible = false;
		elements.fld_exis_a.visible = false;
	}
	elements.situ_lal.readOnly = true;
	elements.situ_lal.bgcolor = '#f0f0f0';
	elements.sifa_lal.readOnly = true;
	elements.sifa_lal.bgcolor = '#f0f0f0';
	plugins.window.createShortcut('control F10', globals.handle_shortCutGC);
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"43302942-7F4C-4929-B3B6-DD2181FD82F4"}
 */
function onActionrefpieza(event) {
	// TODO Auto-generated method stub
	//onDataChangerefpieza()
	elements.descrip.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8823909C-3BFE-4D88-A31A-4449AB722F39"}
 */
function onActioncant(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.dto_lal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"44B89361-8136-43B4-80E8-0DFB6931626D"}
 */
function onActiondto(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.prec_lal.requestFocus()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"9B27FB4C-6730-40D6-873F-A4136721EE93"}
 */
function onDataChangerefpieza() {
	// TODO Auto-generated method stub
	if(refm_lal != null)
	{
		var query = "select [ID],[Descripcion] from [tbMaestroArticulos] where [Codigo] = '" + refm_lal +"'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var uuid = dataset.getValue(1,1)
		if(uuid != null)
		{
			if(GClalbaran_to_tbmaestroarticulos)
			{
				if(GClalbaran_to_tbmaestroarticulos.imag_a != null && 
				GClalbaran_to_tbmaestroarticulos.imag_a != '')
				{
					elements.BtnImagRefencia.enabled = true;
					elements.BtnImagRefencia.visible = true;
				}
				else
				{
					elements.BtnImagRefencia.enabled = false;
					elements.BtnImagRefencia.visible = false;
				}
				//if(!desc_lal)
				//{
					if(GClalbaran_to_tbmaestroarticulos.descripcion) desc_lal = GClalbaran_to_tbmaestroarticulos.descripcion
					else desc_lal = dataset.getValue(1,2)
					if(GClalbaran_to_tbmaestroarticulos.desc_detalle_a) desc_lal = desc_lal+"\n"+GClalbaran_to_tbmaestroarticulos.desc_detalle_a;				
				//}
				if(GClalbaran_to_tbmaestroarticulos.multiplo != null && 
				GClalbaran_to_tbmaestroarticulos.multiplo != '')
				{
					unme_lal = GClalbaran_to_tbmaestroarticulos.multiplo					
				}
				if(GClalbaran_to_tbmaestroarticulos.dto != null && 
				GClalbaran_to_tbmaestroarticulos.dto != '')
				{
					dto_lal = GClalbaran_to_tbmaestroarticulos.dto					
				}
				else
				{
					dto_lal = null
				}
				if(GClalbaran_to_tbmaestroarticulos.piva_a)
				{
					if(GClalbaran_to_tbmaestroclientes.pais == 'ES')
					{
						piva_lal = GClalbaran_to_tbmaestroarticulos.piva_a;
					}
					else piva_lal = GClalbaran_to_tbmaestroclientes.tipoiva;
				}
				else if(GClalbaran_to_tbmaestroclientes.tipoiva)
				{
					piva_lal = GClalbaran_to_tbmaestroclientes.tipoiva;					
				}
				else piva_lal = 0;
				//if(prec_lal == null || prec_lal == '')
				if(GClalbaran_to_tbmaestroarticulos.tbmaestroarticulos_to_tbmaestroclientesprecioarticulos &&
				GClalbaran_to_tbmaestroarticulos.tbmaestroarticulos_to_tbmaestroclientesprecioarticulos.getSize() > 0)
				{
					query = "select precio from [dbo].[tbmaestroclientesprecioarticulos] where [idcliente] = " + clie_lal +
							" and idarticulo ='"+refm_lal+"'";
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var precio = dataset.getValue(1,1);
					if(precio) prec_lal = precio;
					else if(GClalbaran_to_tbmaestroarticulos.preciopieza) prec_lal = GClalbaran_to_tbmaestroarticulos.preciopieza;
				}
				else if(GClalbaran_to_tbmaestroarticulos.preciopieza)
				{
					prec_lal = GClalbaran_to_tbmaestroarticulos.preciopieza;					
				}
				elements.lbl_Stock_Actual.visible = true;
				elements.fld_exis_a.visible = true;
				onDataChange()
				
			}
		}	
		else
		{
			desc_lal = null;
			elements.lbl_Stock_Actual.visible = false;
			elements.fld_exis_a.visible = false;
			elements.BtnImagRefencia.enabled = false;
			elements.BtnImagRefencia.visible = false;
		}
	}
	else
	{
		desc_lal = null;
		elements.lbl_Stock_Actual.visible = false;
		elements.fld_exis_a.visible = false;
		elements.BtnImagRefencia.enabled = false;
		elements.BtnImagRefencia.visible = false;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5EC2653-9BB6-4764-B956-7253E752F908"}
 */
function onActionconcepto(event) {
	// TODO Auto-generated method stub
	elements.cant1_lal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8D76C346-986C-48AD-9122-73A9B7F00494"}
 */
function onActionprec(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.unme_lal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D2C98495-3525-4887-9111-D3C971E9FD6F"}
 */
function onActionund(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.piva_lal.requestFocus()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"7A8172FF-0A4E-4C67-AA3C-011640AE0778"}
 */
function onDataChange() {
	
	if(unme_lal == null || unme_lal == '') unme_lal = 1;
	if(prec_lal  != null)
	{
		if(refm_lal && GClalbaran_to_tbmaestroarticulos)
		{
			if(cant1_lal == null || cant1_lal == '') cant1_lal = 1;
			var stock = GClalbaran_to_tbmaestroarticulos.exis_a;
			if(!stock) stock = 0;
			if(cant1_lal > stock)
			{
				if(stock > 0) cant1_lal = stock;
				else cant1_lal = null;
			}
		}
		else
		{
			if(cant1_lal == null || cant1_lal == '') cant1_lal = 1;
		}
	}
	if(cant1_lal != null && prec_lal  != null && unme_lal  != null) 
	{
		var dto = dto_lal;
		if(dto == null || dto == '') dto = 0;
		impdto_lal = ((cant1_lal * prec_lal) / unme_lal) * dto * 0.01
		if(impdto_lal == 0) impdto_lal = null; 
		impor_lal = ((cant1_lal * prec_lal) / unme_lal) - impdto_lal
	}
	else
	{
		impdto_lal = null;
		impor_lal = null;
		importot_lal = null;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"120EE60B-C660-4AF3-A1E4-E1AC3DA50395"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha(event)
	elements.ref_lal.requestFocus()
	elements.ref_lal.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"49C5AA5F-A089-4C2F-B60F-4EB6E7694DB5"}
 */
function onDataChangefecha(event) {
	// TODO Auto-generated method stub
	if(fecha_lal)
	{
		var fech = utils.dateFormat(fecha_lal,'dd-MM-yyyy')
		fecha_lal = utils.parseDate(fech,'dd-MM-yyyy')
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"A81150CB-A56F-40E3-A7CD-6F8333264CD3"}
 */
function btn_Imagen(event) {
	// TODO Auto-generated method stub
	var query = "select [ID] from [dbo].[tbMaestroArticulos] where [codigo] = '" + refm_lal + "'"
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
		globals.GCshowDialogImagenArticulo(refm_lal + ' - ' + GClalbaran_to_tbmaestroarticulos.descripcion, 1, null, null, true, null, null, null, null, null);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"940D4B2B-3DBD-4922-A9D3-A049CBA29974"}
 */
function btn_Articulo(event) {
	// TODO Auto-generated method stub
	if(refm_lal)
	{
		var query = "select [ID] from [tbMaestroArticulos] where [codigo] = '" + refm_lal + "'";
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
