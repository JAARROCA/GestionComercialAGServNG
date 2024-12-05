/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0D087E5C-1406-46EF-A1B0-935D58FA5126"}
 */
var Articulo = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C2AAA4AF-374A-4CF3-898A-81F493FFD569"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"6B9D2AB8-C42C-4106-893D-D28A58B0412C"}
 */
function onDataChangecoda() {
	// TODO Auto-generated method stub
	var query = "select [codigo] from [tbMaestroArticulos] where [codigo] = '" + codigo + "'"
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Código de Artículo duplicado!Elija otro.','¡Error!')
		else {
			var methd = 'forms.FrmArticulosGC.foco()';
			globals.GCshowErrorDialog('Código de Artículo duplicado!Elija otro.',methd,'Aceptar',null,null,null)
		}
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"E2205602-90D8-43E0-B074-353E7D715215"}
 */
function foco() {
	elements.codigo.requestFocus()
}

/**
*
*
 * @properties={typeid:24,uuid:"EB3013E5-6F03-40D3-AE81-ED5357E1C5DD"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
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
 *
 * @properties={typeid:24,uuid:"79D62DF4-9940-4889-851F-019F4DD2204A"}
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
 *
 * @properties={typeid:24,uuid:"D6FA30A0-AE6D-4BC1-9869-9C57C300F36B"}
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
 *
 * @properties={typeid:24,uuid:"AF90882F-2208-44FB-92AC-063AE827E71E"}
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
 *
 * @properties={typeid:24,uuid:"72B79179-9575-46BF-B717-9502E53A4F51"}
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
 *
 * @properties={typeid:24,uuid:"4DA4FD3B-F571-4D9C-872C-8C085E7DCB07"}
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
 *
 * @properties={typeid:24,uuid:"A99C870B-520C-49CF-A8C2-0D678E598158"}
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
 *
 * @properties={typeid:24,uuid:"A7B19697-5DAC-417C-9053-D31ABAC72139"}
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
 *
 * @properties={typeid:24,uuid:"F96F5349-653A-4373-A664-440703D6BD76"}
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
 *
 * @properties={typeid:24,uuid:"947C9197-B910-4E8E-9336-B6B897C756BA"}
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
 *
 * @properties={typeid:24,uuid:"1C01D140-B4AE-4AA5-8664-1F2E0FA5CCA6"}
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
 *
 * @properties={typeid:24,uuid:"596C4583-216E-4B34-BB4E-B53978E0DBFF"}
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
 *
 * @properties={typeid:24,uuid:"6AC8D927-589C-4951-96F2-F996C53B3878"}
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
 *
 *
 * @properties={typeid:24,uuid:"17B63DAB-E68A-4390-BA56-D4D552FBEE2F"}
 */
function BtnFamilia(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Articulos';
	globals.GCshowDialogBDFamilias('Familias', 1, null, null, true, null, null, null, null, null);
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"C06242E3-D3B6-4A45-B8D9-B8A37C9F5E2C"}
 */
function onDataChangeListadoArticulo() {
	// TODO Auto-generated method stub
	if(Articulo)
	{
		forms.dlg_ArticulosGC.elements.codigo.editable = false;
		forms.dlg_ArticulosGC.elements.codigo.bgcolor = '#f0f0f0';
		forms.dlg_ArticulosGC.elements.codigo.visible = false;
		forms.dlg_ArticulosGC.elements.lblcodigo.visible = true;
		var result = foundset.selectRecord(Articulo)
		var fsCount = databaseManager.getFoundSetCount(foundset);
		while(result==false)
		{
			if(fsCount == foundset.getSize()) return;
			foundset.setSelectedIndex(foundset.getSize());
			result = foundset.selectRecord(Articulo);
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"0060CED1-80C7-4763-A283-EA7D120405B3"}
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
 *
 * @properties={typeid:24,uuid:"19AD7E27-821A-4FCA-95D4-3E88A0FEFC7C"}
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
 *
 * @properties={typeid:24,uuid:"CAD9FB69-4F7E-4424-8FB0-4A78A16129FC"}
 */
function onDataChangetipoiva(event) {
	// TODO Auto-generated method stub
	if(preciocosto && piva_a)
	{
		//preciopieza = preciocosto * (1 + (piva_a * 0.01))
		btnrecalcularprecio(event)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"33DAFE90-21F1-4128-9264-5B561888D3E1"}
 */
function onActionBtnArticulo(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ArticulosGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Articulos2')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Articulos2", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Articulos';
	//win.resizable = true;
	//win.show(forms.dialog_Articulos2GC)
	win.show(forms.dlgArticulos2GC)
}
