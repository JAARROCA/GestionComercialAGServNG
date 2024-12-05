/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A934EA7-4EDF-4479-9051-0681F817FE22"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
}

/**
 * @properties={typeid:24,uuid:"9209E6AA-74DC-444B-AF7E-69F0F790E08F"}
 */
function sub_setNewNumeroLinea()
{
	var query = "select nli_lfca from tbFacturaCompraLinea where pro_lfca = " + pro_lfca + 
	" AND nup_lfca = '"+nup_lfca+
	"' order by nli_lfca desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	nli_lfca = dataset.getValue(1, 1) + 1	
}

/**
 * @properties={typeid:24,uuid:"8D1B436A-F496-4E51-9C74-4A6CC44D620D"}
 */
function validate_autoEnter()
{
	sub_setNewNumeroLinea();	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"1D15CCD1-F007-4BFB-9F99-81209C4BF2C8"}
 */
function onShow() {
	// TODO Auto-generated method stub
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8A15CF37-CEB6-4C34-8E8E-6D26323185B0"}
 */
function onActionrefpieza(event) {
	// TODO Auto-generated method stub
	elements.concept_lfca.requestFocus();
	elements.concept_lfca.selectAll();
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A5BAEF8D-92A9-4160-B4C7-C947CE9BFA41"}
 */
function onActioncant(event) {
	// TODO Auto-generated method stub
	elements.prec_lfca.requestFocus();
	elements.prec_lfca.selectAll();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6EAB0DB7-986F-474C-B6F3-821900E30A3D"}
 */
function onActionconcepto(event) {
	// TODO Auto-generated method stub
	elements.cant1_lfca.requestFocus()
	elements.cant1_lfca.selectAll();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1615A173-DFB3-496D-A1AC-4A580B190B3D"}
 */
function onActionprec(event) {
	// TODO Auto-generated method stub
	elements.piva_lfca.requestFocus();
	elements.piva_lfca.selectAll();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7FC9C833-24E3-4D80-A270-16E3F0F8F8FE"}
 */
function onActionnalb(event) {
	// TODO Auto-generated method stub
	elements.lalb_lfa.requestFocus();
	elements.lalb_lfa.selectAll();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"BFE4AAA5-F28D-4BAB-8BEE-4264A4338D64"}
 */
function onActionlalb(event) {
	// TODO Auto-generated method stub
	elements.ref_lfca.requestFocus()
	elements.ref_lfca.selectAll();
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"AD3D62EF-2C73-4C64-B8F8-E851E703FF88"}
 */
function onDataChange() {
	// TODO Auto-generated method stub
	/*if(cant1_lfca && prec_lfca)
	{
		impor_lfca = globals.GCROUND((cant1_lfca * prec_lfca),2); 
	}
	else
	{
		impor_lfca = 0;
	}*/
	
	if(!piva_lfca) piva_lfca = 0.00;
	if(prec_lfca  != null && prec_lfca != '')
	{
		if(cant1_lfca == null || cant1_lfca == '') cant1_lfca = 1;		
	}
	if(cant1_lfca != null && prec_lfca  != null) 
	{
		impor_lfca = ((cant1_lfca * prec_lfca) )
		if(piva_lfca != null && piva_lfca != '') var iva = piva_lfca;
		else iva = 0;
		var cuotaiva = globals.GCROUND(impor_lfca * iva * 0.01, 2)
		importot_lfca = globals.GCROUND(impor_lfca + cuotaiva, 2)
	}
	else
	{
		impdto_lfca = null;
		impor_lfca = null;
		importot_lfca = null;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"672D8B2C-5628-4117-9D10-063830818115"}
 */
function onActioniva(event) {
	// TODO Auto-generated method stub
	elements.cc_lfca.requestFocus();
	elements.cc_lfca.selectAll();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F4CD9708-9E55-40C1-9BA2-FB9C6489A2C5"}
 */
function onActionBtnRefencia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Linea_FacturaCompra';
	//globals.GCshowDialogArticulos('BD Artículos', 1, null, null, true, null, null, null, null, null);
	//globals.GCshowDialogMateriales('BD Materiales', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Materiales')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Materiales", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Materiales';
	//win.resizable = true;
	win.show(forms.dialog_MaterialesGC)
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"32052BD3-2E11-461C-A4E7-46B6593AA541"}
 */
function onDataChangerefpieza() {
	// TODO Auto-generated method stub
	if(ref_lfca)
	{
		var query = "select [ID],[Descripcion] from [tbMaestroMateriales] where [Codigo] = '" + ref_lfca +"'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var uuid = dataset.getValue(1,1)
		if(uuid)
		{
			if(gctbfacturacompralinea_to_tbmaestromateriales)
			{
				if(!concep_lfca) concep_lfca = dataset.getValue(1,2);		
				else concep_lfca = gctbfacturacompralinea_to_tbmaestromateriales.descripcion
				/*if(gctbfacturacompralinea_to_tbmaestroarticulos.multiplo)
				{
					unme_lfca = gctbfacturacompralinea_to_tbmaestroarticulos.multiplo					
				}
				if(GCtbfacturalinea_to_tbmaestroarticulos.unidmedida)
				{
					medida_lfca = gctbfacturacompralinea_to_tbmaestroarticulos.unidmedida					
				}
				if(gctbfacturacompralinea_to_tbmaestroarticulos.dto)
				{
					dto_lfca = gctbfacturacompralinea_to_tbmaestroarticulos.dto					
				}
				else
				{
					dto_lfca = null
				}*/
				//if(prec_lfa == null || prec_lfa == '')
				//{
					//prec_lfca = gctbfacturacompralinea_to_tbmaestromateriales.p.preciocosto;					
				//}	
				if(gctbfacturacompralinea_to_tbmaestroproveedorespreciomaterial) prec_lfca = gctbfacturacompralinea_to_tbmaestroproveedorespreciomaterial.precio;
				onDataChange()
			}
			
		}	
		else
		{
			concep_lfca = null;			
		}
	}
	else
	{
		concep_lfca = null;		
	}
}
