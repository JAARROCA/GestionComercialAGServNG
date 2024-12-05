/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DFB406E0-C0E9-4F9C-9162-21B9B58BE16C"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
}

/**
 * @properties={typeid:24,uuid:"CC9A5FDE-D0AF-4DF5-A3F2-B8823E2DA526"}
 */
function sub_setNewNumeroLinea()
{
	var query = "select [nli_lot] from [lortraba] where [nup_lot] = "+nup_lot+
	" order by nli_lot desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	nli_lot = dataset.getValue(1, 1) + 1	
}

/**
 * @properties={typeid:24,uuid:"967BBB9D-DD55-4C8B-A6E5-5AFF56845ECC"}
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
 * @properties={typeid:24,uuid:"312DF36E-5DA3-447A-89CC-FA0E81A6D306"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Linea_Pedido';
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
 * @properties={typeid:24,uuid:"4EC8695D-D5DF-441D-B42F-681D2787F6DD"}
 */
function onShow() {
	// TODO Auto-generated method stub
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CBEB7406-224F-4625-B897-EFAB87BB9765"}
 */
function onActionrefpieza(event) {
	// TODO Auto-generated method stub
	onDataChangerefpieza()
	elements.descrip.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"529B5D32-7A39-40AD-8F8E-43BE658BC2AE"}
 */
function onActioncant(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.dto_lot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"4CD930E7-C9D0-49D8-A437-13676B8FF980"}
 */
function onActiondto(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.prec_lot.requestFocus()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"CDC4F17B-BB8D-44B9-89E5-E354B0323854"}
 */
function onDataChangerefpieza() {
	// TODO Auto-generated method stub
	if(refm_lot != null)
	{
		var query = "select [ID],[Descripcion] from [tbMaestroArticulos] where [Codigo] = '" + refm_lot +"'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var uuid = dataset.getValue(1,1)
		if(uuid != null)
		{
			if(GCtbfacturalinea_to_tbmaestroarticulos)
			{
				//if(!detalle_lot)
				//{
					if(GClofertas_to_tbmaestroarticulos.descripcion) detalle_lot = GClofertas_to_tbmaestroarticulos.descripcion
					else detalle_lot = dataset.getValue(1,2);		
					if(GClofertas_to_tbmaestroarticulos.desc_detalle_a) detalle_lot = detalle_lot+"\n"+GClofertas_to_tbmaestroarticulos.desc_detalle_a;
				
				//}
				if(GClofertas_to_tbmaestroarticulos.tbmaestroarticulos_to_tbmaestroclientesprecioarticulos &&
				GClofertas_to_tbmaestroarticulos.tbmaestroarticulos_to_tbmaestroclientesprecioarticulos.getSize() > 0)
				{
					query = "select precio from [dbo].[tbmaestroclientesprecioarticulos] where [idcliente] = " + clie_lot +
							" and idarticulo ='"+refm_lot+"'";
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var precio = dataset.getValue(1,1);
					if(precio) prec_lot = precio;
					else if(GClofertas_to_tbmaestroarticulos.preciopieza) prec_lot = GClofertas_to_tbmaestroarticulos.preciopieza;
				}
				else if(GClofertas_to_tbmaestroarticulos.preciopieza)
				{
					prec_lot = GClofertas_to_tbmaestroarticulos.preciopieza;					
				}
				if(unme_lot == null || unme_lot == '')
				{
					unme_lot = GClortraba_to_tbmaestroarticulos.multiplo
				}
			}
		}	
		
	}
	else
	{
		detalle_lot = null;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA4C1455-7A29-4E0E-BBA0-E9EC61A74888"}
 */
function onActionconcepto(event) {
	// TODO Auto-generated method stub
	elements.cant1_lot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7FF37920-1770-4CEB-8D67-3FADCC619DA6"}
 */
function onActionprec(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.unme_lot.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AC616A53-899D-49FE-9DD3-EE136FDEF94E"}
 */
function onActionund(event) {
	// TODO Auto-generated method stub
	onDataChange()
	elements.piva_lot.requestFocus()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"45C6D24B-2077-46A1-A388-BF200528ECEC"}
 */
function onDataChange() {
	// TODO Auto-generated method stub
	if(unme_lot == null || unme_lot == '') unme_lot = 1;
	if(prec_lot  != null)
	{
		if(cant1_lot == null || cant1_lot == '') cant1_lot = 1;		
	}
	if(cant1_lot != null && prec_lot  != null && unme_lot  != null) 
	{
		var dto = dto_lot;
		if(dto == null || dto == '') dto = 0;
		var impdto_lot = ((cant1_lot * prec_lot) / unme_lot) * dto * 0.01
		//if(impdto_lof == 0) impdto_lof = null; 
		impor_lot = ((cant1_lot * prec_lot) / unme_lot) - impdto_lot
	}
	else
	{
		impdto_lot = null;
		impor_lot = null;
		importot_lot = null;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE0AA679-959D-413B-9D33-7651828CFD60"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha(event)
	elements.refm_lot.requestFocus()
	elements.refm_lot.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C85EEBCC-9674-4777-8633-A04033C2D3DC"}
 */
function onDataChangefecha(event) {
	// TODO Auto-generated method stub
	if(fecha_lot)
	{
		var fech = utils.dateFormat(fecha_lot,'dd-MM-yyyy')
		fecha_lot = utils.parseDate(fech,'dd-MM-yyyy')
	}
}
