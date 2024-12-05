/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D8BC90F-0DDE-4E58-9C1A-B44B51E736DB",variableType:8}
 */
var importerestante = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1DE72CA6-7685-462E-967E-C690D92CC96E"}
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
 * @properties={typeid:24,uuid:"72890298-E2FC-4337-B564-0604AEE5BCD8"}
 */
function onShow() {
	// TODO Auto-generated method stub
	importerestante = forms.FrmFacturasComprasGC.impnee_cfca  - forms.lst_FacturasCompras_PagosGC.sumimporte;
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"12A6D40C-803D-4507-A3D7-86FCE6E07537"}
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
 * @properties={typeid:24,uuid:"E34E6EE0-24A2-4611-8C6D-6BDE2BEA6C89"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	elements.motivo_cob.requestFocus()
	elements.motivo_cob.selectAll()
}

/**
 *
 * @properties={typeid:24,uuid:"A8589526-9E50-4955-9A2F-742E2A18AE59"}
 */
function sub_setNewNumeroLinea()
{
	
	var query = "select [linea_pag] from [tbFacturaCompraCabeceraPagos] where [pro_pag] = " + pro_pag + 
	" AND [nup_pag] = '"+nup_pag+"'";
	" order by linea_pag desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	linea_pag = dataset.getValue(1, 1) + 1	
}

/**
 *
 * @properties={typeid:24,uuid:"9B53B088-6866-4736-A715-CA7A11E8E796"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	fecha_pag = new Date()
	sub_setNewNumeroLinea();	
}
