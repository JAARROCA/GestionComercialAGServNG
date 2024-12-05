/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"E8B321B3-DA34-4772-8643-E2A748B63948"}
 */
var HastaDescCliente = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"2D4968F4-F912-4457-83B9-9261AD1790E6"}
 */
var DescDesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4E1F38B6-61A5-41D6-963C-892FFADA9531",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BEF3DB24-C7EC-4517-84B7-59A93C0D027F",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"A335AE4A-5778-42C6-B86F-DDA5D9DBFB65",variableType:8}
 */
var HastaEje = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"39276459-4641-4741-B5F1-E1D94323432D",variableType:8}
 */
var HastaNup = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"2A09A927-D3BE-4B46-8947-6F02D8EB8906",variableType:8}
 */
var DesdeEje = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"94F2111C-FD11-4258-AD23-54B6E00BE37E",variableType:8}
 */
var DesdeNup = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D43EFB0B-42D6-4B88-A078-3CEA198334CF"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"42A1A382-13A4-4D09-929A-A0EA83AB58F7"}
 */
function onShow() {
	// TODO Auto-generated method stub
	/*var A = new Date().getFullYear().toString()
	A = A.substr(2,4)
	DesdeEje = A
	HastaEje = A
	DesdeSer = ''
	HastaSer = ''
	DesdeNup = null
	HastaNup = null*/
	elements.desdeeje.requestFocus()
	
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"41D10E52-9BD7-4DA6-BEC8-8D3CC4FF26F5"}
 */
function onActiondesdeeje(event) {
	// TODO Auto-generated method stub
	elements.desdenup.selectAll()
	elements.desdenup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F4C4D8B9-2ABF-4060-8FA5-A644AEE39F8E"}
 */
function onActiondesdenup(event) {
	// TODO Auto-generated method stub
	elements.hastanup.selectAll()
	elements.hastanup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"DD1CA55F-7096-4053-8B85-F7DD8218761D"}
 */
function onActionhastaeje(event) {
	// TODO Auto-generated method stub
	elements.hastanup.selectAll()
	elements.hastanup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"B19A6D31-9C53-48E1-8630-D5CD8E3022B2"}
 */
function btn_DesdeCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionNotas1';
	//globals.GCshowDialogClientes('Clientes', 1, null, null, true, null, null, null, null, null);
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
 * @properties={typeid:24,uuid:"CC32321A-C4A5-4E23-ACF2-C2427B6ED251"}
 */
function btn_HastaCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionNotas2';
	//globals.GCshowDialogClientes('Clientes', 1, null, null, true, null, null, null, null, null);
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
 * @properties={typeid:24,uuid:"FE860D5D-AC03-4237-8B32-E6B6A131E32A"}
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
 * @properties={typeid:24,uuid:"EECACA97-2E45-46C6-9B4D-6B87B54C0BA9"}
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
 * @properties={typeid:24,uuid:"2B4DEC36-2867-4C36-90EE-3C847CB4304E"}
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
 * @properties={typeid:24,uuid:"1B9102AE-129B-47CC-8226-F117C30A7C8C"}
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
