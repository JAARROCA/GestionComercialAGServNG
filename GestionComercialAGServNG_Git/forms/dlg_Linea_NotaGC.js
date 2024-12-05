/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B6527973-2937-4AFA-9F81-DE0C9642EDF7"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
}

/**
 * @properties={typeid:24,uuid:"8268086E-9534-4515-B1F3-B3F5DD25A09B"}
 */
function sub_setNewNumeroLinea()
{
	var query = "select [nli_lfa] from [tbNotaLinea] where [eje_lfa] = " + eje_lfa + 
	" AND [nup_lfa] = "+nup_lfa+
	" order by nli_lfa desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	nli_lfa = dataset.getValue(1, 1) + 1	
}

/**
 * @properties={typeid:24,uuid:"938B41CC-BA41-492B-B5DE-65E55EA0B1EE"}
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
 * @properties={typeid:24,uuid:"7D4ADBBB-55CB-4160-B105-CA22F40D8FBE"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Linea_Nota';
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
 * @properties={typeid:24,uuid:"EA52B9CF-4E2E-4D92-A188-D28919B42E3B"}
 */
function onShow() {
	// TODO Auto-generated method stub
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6A948A0E-9705-47B9-AA28-733CAD02246F"}
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
 * @properties={typeid:24,uuid:"0A174685-24ED-4E0D-83C1-0230112EE505"}
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
 * @properties={typeid:24,uuid:"1D8EAB8B-24F2-4F42-9BDC-4BC92D728612"}
 */
function onActiondto(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.prec_lfa.requestFocus()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"6CFDC89F-257A-4F85-AFA0-94996786F5A7"}
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
			if(GCtbnotalinea_to_tbmaestroarticulos)
			{
				if(GCtbnotalinea_to_tbmaestroarticulos.imag_a != null && 
				GCtbnotalinea_to_tbmaestroarticulos.imag_a != '')
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
				else concep_lfa = GCtbnotalinea_to_tbmaestroarticulos.descripcion
				if(GCtbnotalinea_to_tbmaestroarticulos.multiplo)
				{
					unme_lfa = GCtbnotalinea_to_tbmaestroarticulos.multiplo					
				}
				if(GCtbnotalinea_to_tbmaestroarticulos.unidmedida)
				{
					medida_lfa = GCtbnotalinea_to_tbmaestroarticulos.unidmedida					
				}
				if(GCtbnotalinea_to_tbmaestroarticulos.tbmaestroarticulos_to_tbmaestroclientesprecioarticulos &&
				GCtbnotalinea_to_tbmaestroarticulos.tbmaestroarticulos_to_tbmaestroclientesprecioarticulos.getSize() > 0)
				{
					query = "select precio from [dbo].[tbmaestroclientesprecioarticulos] where [idcliente] = " + clie_lfa +
							" and idarticulo ='"+ref_lfa+"'";
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var precio = dataset.getValue(1,1);
					if(precio) prec_lfa = precio;
					else prec_lfa = GCtbnotalinea_to_tbmaestroarticulos.preciopieza;
				}
				else
				{
					prec_lfa = GCtbnotalinea_to_tbmaestroarticulos.preciopieza;					
				}
				onDataChange()			
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
 * @properties={typeid:24,uuid:"7B40F4EE-57B5-4766-8CC9-D0852072E6A8"}
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
 * @properties={typeid:24,uuid:"19143AD2-256A-4C16-9B17-30B9E0FFEAD4"}
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
 * @properties={typeid:24,uuid:"9FB1F2C9-8CA5-4D41-A68B-7424D0E624C5"}
 */
function onActionund(event) {
	// TODO Auto-generated method stub
	onDataChange()
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E1C0010-167B-4CEE-A67B-EAEBB4A5DFCA"}
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
 * @properties={typeid:24,uuid:"04E10D38-C1ED-4B19-9F15-11FE2917E51C"}
 */
function onActionlalb(event) {
	// TODO Auto-generated method stub
	elements.ref_lfa.requestFocus()	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"06CD3ED9-8C85-4EA1-A428-15041203B451"}
 */
function onDataChange() {
	// TODO Auto-generated method stub
	if(unme_lfa == null || unme_lfa == '') unme_lfa = 1;
	if(prec_lfa  != null)
	{
		if(cant1_lfa == null || cant1_lfa == '') cant1_lfa = 1;		
	}
	if(cant1_lfa != null && prec_lfa  != null && unme_lfa  != null) 
	{
		var dto = dto_lfa;
		if(dto == null || dto == '') dto = 0;
		impdto_lfa = ((cant1_lfa * prec_lfa) / unme_lfa) * dto * 0.01
		if(impdto_lfa == 0) impdto_lfa = null; 
		impor_lfa = globals.GCROUND(((cant1_lfa * prec_lfa) / unme_lfa) - impdto_lfa,2)		
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
 * @properties={typeid:24,uuid:"F7500ABE-2368-45E9-AE94-EA16161CBDBB"}
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
 * @properties={typeid:24,uuid:"30D4EBCA-FCFB-4496-A40B-FDDD651B80BF"}
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
 * @properties={typeid:24,uuid:"2F002CA7-90A4-4798-8934-378A6CC6C06E"}
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
 *
 *
 * @properties={typeid:24,uuid:"3E43B3F5-6101-4098-8FDD-EE751EDB1336"}
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
		globals.GCshowDialogImagenArticulo(ref_lfa + ' - ' + GCtbnotalinea_to_tbmaestroarticulos.descripcion, 1, null, null, true, null, null, null, null, null);
	}
}
