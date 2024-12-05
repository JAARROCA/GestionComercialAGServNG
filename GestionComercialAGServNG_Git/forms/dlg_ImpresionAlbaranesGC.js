/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FF21BF87-EC38-494E-BECB-2BBEBA8C58F5",variableType:4}
 */
var sinvalorar = null;

/**
 * @type {Number}
 * 
 *
 * @properties={typeid:35,uuid:"76E7CB77-8AC2-4E6E-9C92-9E4C27EA6243",variableType:8}
 */
var FormatoAlbaran = null;

/**
 * @type {Number}
 * 
 *
 * @properties={typeid:35,uuid:"3D3C52AA-92D8-4A3D-9831-AFC14E7A583F",variableType:8}
 */
var FormatoAlbaran2 = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"9B120533-CD82-4DC8-9DB8-5F7AEFF8B89F"}
 */
var HastaDescCliente = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"F7BF6F4E-D5CE-440F-99A8-36A76CAD7F2A"}
 */
var DescDesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"98E8C66A-B06E-4534-A095-71FE7E1DD27C",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"56A4BD53-D24B-475C-93FA-2B226243EE18",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"8AF19206-A960-4422-8CE2-77B53EB6DF00",variableType:8}
 */
var HastaAlbaran = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"B0193020-FE9F-4E9B-8ADB-A47A60FD9DE2",variableType:8}
 */
var DesdeAlbaran = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"718E9AF5-2B6D-4692-BBE4-567637BA8C4F"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"3B471A81-74E4-4166-8A06-C7E57D4839A0"}
 */
function onShow(event) {
	// TODO Auto-generated method stub
	DesdeCliente = null
	HastaCliente = null
	sinvalorar = null;
	var formato = gcparametrosaplicacion_to_parametrosaplicacion.facturapredet;
	if(!formato) formato = 1
	if(formato == 1){
		onActionFormatoAlbaran1(event)
	}
	else if(formato == 3){
		onActionFormatoAlbaran2(event)
	}
	else {
		onActionFormatoAlbaran1(event)
	}
	
	//FormatoAlbaran = 1;
	//FormatoAlbaran2 = null;
	elements.DesdeAlbaran.requestFocus()
	
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"A022C043-D1C5-46BB-97FA-67BFBB11D6FC"}
 */
function onActiondesdealbaran(event) {
	// TODO Auto-generated method stub
	elements.HastaAlbaran.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"CAC2FEC9-5446-46D3-BAEA-CC2A1B072F60"}
 */
function onActionhastaalbaran(event) {
	// TODO Auto-generated method stub
	elements.DesdeCliente.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"4998C4F3-3E4B-43B4-88FC-2BC9B36E1C3E"}
 */
function btn_DesdeCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionAlbaranes1';
	//globals.GCshowDialogClientes('Clientes', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	var win = application.getWindow('Clientes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Clientes';
	//win.resizable = true;
	win.show(forms.dialog_ClientesGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"7E1946E6-B33B-40FB-93F9-B13A31B84430"}
 */
function btn_HastaCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionAlbaranes2';
	//globals.GCshowDialogClientes('Clientes', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	var win = application.getWindow('Clientes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Clientes';
	//win.resizable = true;
	win.show(forms.dialog_ClientesGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7582B5FE-378F-4CE6-BF92-FE9F7CA4147A"}
 */
function onActionhastanup(event) {
	// TODO Auto-generated method stub
	elements.DesdeCliente.requestFocus()
	elements.DesdeCliente.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2D43CC4D-3359-4591-AD4E-FE8ADF081F8F"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.HastaCliente.requestFocus()
	elements.HastaCliente.selectAll()
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"6BE62CB8-934A-4ED2-9FFC-35E0C55E660D"}
 */
function onDataChangeDesdeCliente() {
	// TODO Auto-generated method stub
	if(DesdeCliente)
	{
		var query = "select desccliente from tbmaestroclientes where idcliente = " + DesdeCliente;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		DescDesdeCliente = dataset.getValue(1,1)
	}
	else
	{
		DescDesdeCliente = null
	}
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"44085848-31C9-4DFF-8E02-18775072F27A"}
 */
function onDataChangeHastaCliente() {
	// TODO Auto-generated method stub
	if(HastaCliente)
	{
		var query = "select desccliente from tbmaestroclientes where idcliente = " + HastaCliente;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		HastaDescCliente = dataset.getValue(1,1)
	}
	else
	{
		HastaDescCliente = null
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F35AC76E-EC67-4FCE-8FB3-CB320FAC4418"}
 */
function onActionFormatoAlbaran1(event) {
	// TODO Auto-generated method stub	
		FormatoAlbaran = 1;
		FormatoAlbaran2 = null;
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"53627659-2C07-4798-BC0E-BC43A7E912CD"}
 */
function onActionFormatoAlbaran2(event) {
	// TODO Auto-generated method stub	
	FormatoAlbaran2 = 1;
	FormatoAlbaran = null;
}
