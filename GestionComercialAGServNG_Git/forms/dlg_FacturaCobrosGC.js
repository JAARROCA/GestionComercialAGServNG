/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"511FD0A2-AC83-4427-97F7-C1F90BC5F6B2",variableType:8}
 */
var importerestante = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2D402D8D-E240-461A-B1CA-BF1732CDF059"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"97D70FFC-817D-405F-9145-68BCB4C5BDF1"}
 */
function onShow() {
	// TODO Auto-generated method stub
	importerestante = forms.FrmFacturasGC.impnee_cfa  - forms.lst_Factura_CobrosGC.sumimporte;
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D03D7546-0C05-4B78-B0F2-1B1D599C827F"}
 */
function onActionubicacion(event) {
	// TODO Auto-generated method stub
	elements.impor_cob.requestFocus()
	elements.impor_cob.selectAll()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9D1CD8BC-3FAB-4BEA-9754-10B9FC33D069"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	elements.motivo_cob.requestFocus()
	elements.motivo_cob.selectAll()
}

/**
 *
 * @properties={typeid:24,uuid:"C4E0A269-692D-40EE-AE5C-5182CE22B323"}
 */
function sub_setNewNumeroLinea()
{
	if(ser_cob == null)
	{
		var ser = 'IS NULL'
	}
	else
	{
		ser = "= '"+ser_cob+"'"
	}
	var query = "select [linea_cob] from [tbFacturaCabeceraCobros] where [eje_cob] = " + eje_cob + 
	" AND [ser_cob] "+ser+" AND [nup_cob] = "+nup_cob+
	" order by linea_cob desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	linea_cob = dataset.getValue(1, 1) + 1	
}

/**
 *
 * @properties={typeid:24,uuid:"74489618-554A-490C-9556-DCC520D99EBC"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	fecha_cob = new Date()
	sub_setNewNumeroLinea();	
}
