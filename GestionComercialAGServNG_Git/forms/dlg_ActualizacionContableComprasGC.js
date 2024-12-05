/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"86632B73-5096-4C28-9B92-E05AD88F5097",variableType:8}
 */
var AgruparFacturasContabilizar = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"551997F6-C978-4481-809F-62A227D8227D"}
 */
var Ejercicio = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"088D4335-D65C-4C1D-A070-6F22BB448BE4"}
 */
var DesdeFactura = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"268DCB31-5799-4B51-BF4A-E0414F1A9531"}
 */
var HastaFactura = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"78FB4DE1-0519-4848-A896-7C53D2BB1A0E",variableType:8}
 */
var DesdeProveedor = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"EA447312-C94E-41E8-80D2-D4A8F2449468",variableType:8}
 */
var HastaProveedor = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89119CAB-9B7C-4028-9786-514ABF7377C7"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"436D2315-A5E9-4574-85DB-2C237AC82F9D"}
 */
function onShow() {
	// TODO Auto-generated method stub
	/*var query = 'select [EmpresaContable] from [ParametrosAplicacion] where [NºEmpresa] = 1'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Ejercicio = dataset.getValue(1,1)*/
	Ejercicio = gcparametrosaplicacion_to_parametrosaplicacion.empresacontable
	if(Ejercicio == null || Ejercicio == '') Ejercicio = 'NO DEFINIDO'
	globals.GCDesdeFecha = new Date()
	AgruparFacturasContabilizar = 1;
	onDataChangeagrupar()
	DesdeProveedor = null;
	HastaProveedor = null;
	DesdeFactura = null;
	HastaFactura = null;
	//elements.lblfecha.visible = false
	//elements.DesdeFecha.visible = false
	elements.DesdeProveedor.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67BC2AE3-E6EA-4A82-BF54-A849B49899FA"}
 */
function onActiondesdeproveedor(event) {
	// TODO Auto-generated method stub
	elements.HastaProveedor.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"471737D8-576B-447E-A89B-3A72DF87FD32"}
 */
function onActionhastaproveedor(event) {
	// TODO Auto-generated method stub
	elements.DesdeFactura.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"209044A2-7F45-4F3B-A529-40D7EDF07920"}
 */
function onActionDesdeFactura(event) {
	// TODO Auto-generated method stub
	elements.HastaFactura.requestFocus()
}

/**
 * Handle changed data.
 *
  @properties={typeid:24,uuid:"BFE9B25F-60DE-43A7-86A0-D7100BD99B34"}
 */
function onDataChangeagrupar() {
	// TODO Auto-generated method stub
	if(AgruparFacturasContabilizar == 1)
	{
		elements.lblfecha.visible = true
		elements.DesdeFecha.visible = true
	}
	else
	{
		elements.lblfecha.visible = false
		elements.DesdeFecha.visible = false
	}
}
