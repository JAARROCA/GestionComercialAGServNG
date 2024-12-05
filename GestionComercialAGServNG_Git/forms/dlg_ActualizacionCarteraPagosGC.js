/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"11EE5F01-E031-476A-84FB-F3205DEA6C63"}
 */
var HastaFactura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3AFD7AEC-83A8-4AE2-94D3-7D0F51D59914"}
 */
var DesdeFactura = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C3B910A7-4589-4EA2-992A-72A9A9A5E537",variableType:4}
 */
var HastaProveedor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"77CAFC21-7744-44BC-A73E-6B6B85390BDC",variableType:4}
 */
var DesdeProveedor = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"33FD008A-DA9C-43F3-A2E2-6BD19292886A"}
 */
var Ejercicio = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D63ACE4D-550F-4EA8-8CEC-730FC83368DB"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"3BA489A7-1B6E-480A-955E-4DA8AD3F41B8"}
 */
function onShow() {
	// TODO Auto-generated method stub
	/*var query = 'select [EmpresaContable] from [ParametrosAplicacion] where [NºEmpresa] = 1'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Ejercicio = dataset.getValue(1,1)*/
	Ejercicio = gcparametrosaplicacion_to_parametrosaplicacion.empresacontable
	if(Ejercicio == null || Ejercicio == '') Ejercicio = 'NO DEFINIDO'
	elements.DesdeProveedor.requestFocus();
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"057A2C59-FC12-4E55-9BA8-0F8FBB3E5DFB"}
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
 * @properties={typeid:24,uuid:"CE6C705A-A582-4871-9234-A46350A8DD69"}
 */
function onActionHastaproveedor(event) {
	// TODO Auto-generated method stub
	elements.DesdeFactura.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8FCD7F07-3162-481C-8C29-FF6FBB6F8428"}
 */
function onActiondesdefact(event) {
	// TODO Auto-generated method stub
	elements.HastaFactura.requestFocus()
}
