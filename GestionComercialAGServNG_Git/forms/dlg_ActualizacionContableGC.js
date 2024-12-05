/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E2A54D5D-3C7B-4084-A0BF-A327E40BDC8A",variableType:4}
 */
var GenerarPDF = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"913DC63F-F585-46EA-B496-AC594B3D5FD5"}
 */
var Ejercicio = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"38BEAFB9-092B-4CE9-89B2-27855CABB4F3",variableType:8}
 */
var AgruparFacturasContabilizar = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"3348BD21-DAFE-43E0-9DF2-977FC6507F92",variableType:8}
 */
var DesdeNup = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"6CF76146-02C7-4788-9D18-BBBFCD3B7D05"}
 */
var DesdeSer = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"F170BA1B-8D9C-4539-86E8-619DD349EBF6",variableType:8}
 */
var DesdeEjer = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"6CD775CC-AACE-47DA-A5A6-D246BECBE3D3",variableType:8}
 */
var HastaNup = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"F621EF65-B83A-491C-A2D0-15C117A70155"}
 */
var HastaSer = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"390D1BBA-328D-48BB-BB1B-80225CF229DE",variableType:8}
 */
var HastaEjer = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0376B94D-6C78-4F4A-8B34-C37744CC5518"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"096ABF80-5035-4FFF-9247-4A2EFA236A31"}
 */
function onShow() {
	// TODO Auto-generated method stub
	/*var query = 'select [EmpresaContable] from [ParametrosAplicacion] where [NºEmpresa] = 1'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Ejercicio = dataset.getValue(1,1)*/
	Ejercicio = gcparametrosaplicacion_to_parametrosaplicacion.empresacontable
	if(Ejercicio == null || Ejercicio == '') Ejercicio = 'NO DEFINIDO'
	globals.GCDesdeFecha = new Date()
	AgruparFacturasContabilizar = 0;
	GenerarPDF = 1;
	elements.lblfecha.visible = false
	elements.DesdeFecha.visible = false
	elements.DesdeEjer.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F24D5BE-EC09-4BA1-9D87-7D3E82FFEA17"}
 */
function onActiondesdeejer(event) {
	// TODO Auto-generated method stub
	elements.DesdeSer.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD326B98-49CA-441E-824E-0F4D84234813"}
 */
function onActiondesdeser(event) {
	// TODO Auto-generated method stub
	elements.DesdeNup.requestFocus()
	elements.DesdeNup.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1539AD41-A90B-4638-87C5-0998DD3319C0"}
 */
function onActiondesdenfact(event) {
	// TODO Auto-generated method stub	
	elements.HastaNup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"599D86C0-5D62-4919-947E-F456FA10EE19"}
 */
function onActionhastaejer(event) {
	// TODO Auto-generated method stub
	elements.HastaSer.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"279F8076-005E-4D69-B628-BD8DD69D88F0"}
 */
function onActionhastaser(event) {
	// TODO Auto-generated method stub
	elements.HastaNup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B324A64B-EB3E-4995-8796-FCD630D77194"}
 */
function onActionhastanfact(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Handle changed data.
 *
  @properties={typeid:24,uuid:"AC653B38-7256-491E-B048-38B8BD8E89F7"}
 */
function onDataChangeagrupar() {
	// TODO Auto-generated method stub
	if(AgruparFacturasContabilizar == 2)
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
