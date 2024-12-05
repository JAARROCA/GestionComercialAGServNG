/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8FD93A9C-E030-4632-8F73-F38B466A876C",variableType:4}
 */
var PendEnvioTBAI = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"ACB177AC-755C-4A24-A44E-7C32C26397A8"}
 */
var HastaDescCliente = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"9983F928-2AC2-48CB-B5F3-A576480F820F"}
 */
var DescDesdeCliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"90852071-CFAF-4DC3-B23C-68EF9B017E78"}
 */
var SituConta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1B70B688-9B1F-4A75-8C59-980A06BABCE7",variableType:4}
 */
var Abono = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"63FC7AD6-CA0D-4800-AD9D-BADA93488EE1",variableType:4}
 */
var Cargo = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"907378BD-2CD7-4DA4-81D4-E4E4D0922101",variableType:8}
 */
var PendCobro = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CFCC397A-E9CF-4067-B9B1-4078ACBD0991",variableType:4}
 */
var Rectificativas = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E1422BD1-BD0C-4C83-AA4E-BA6AA2F23142",variableType:4}
 */
var Detalles = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"E2FE0C53-3119-4EBC-9EB3-C3FA0DEFBB36",variableType:8}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"34C3AA9D-EEE1-43B9-8E01-CA7D72B6471B",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"8F4BB077-687C-40BF-9C18-35847AA7117F",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"99F0D5C1-A7E4-4AA7-A791-FD4C258E1BBB",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D29A220B-329A-4350-9394-D453037CE354",variableType:4}
 */
var Orden = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"AA2CDAFF-07B6-430E-9806-F1C738FDCF18",variableType:8}
 */
var HastaEje = null;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"3D930244-26C6-49A6-83B9-7BC48534867F"}
 */
var HastaSer = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"C2712851-7257-40C5-B9D9-154C2307FB87",variableType:8}
 */
var HastaNup = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"89EAF945-AB77-4117-8FCB-1F4AD7D5A306",variableType:8}
 */
var DesdeEje = null;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"E6D0A6E0-6ED6-4D7F-A14A-57F25CC66E94"}
 */
var DesdeSer = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"0DC1E204-3D6C-4AFE-B4DD-9EA2C42BAE0B",variableType:8}
 */
var DesdeNup = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2DA2B7CE-90E3-4416-9F42-C5314933D4D0"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(false)
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"D75028DB-33E1-449F-8928-48118C5160C8"}
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 */
function onShow() {
	// TODO Auto-generated method stub
	var fechdes = new Date()
	fechdes.setMonth(0,1)
	var a = fechdes.getFullYear().toString().substr(2,2);
	fechdes = utils.dateFormat(fechdes,'dd-MM-yyyy')
	DesdeFecha = utils.parseDate(fechdes,'dd-MM-yyyy')
	HastaFecha = null
	DesdeCliente = null
	HastaCliente = null
	DesdeEje = utils.stringToNumber(a)
	DesdeSer = ''
	DesdeNup = null
	HastaEje = utils.stringToNumber(a)
	HastaSer = ''
	HastaNup = null
	Abono = null;
	Cargo = null;
	Rectificativas = null;
	PendCobro = null;
	PendEnvioTBAI = null;
	Detalles = null;
	Orden = 1
	SituConta = 'T'
	onDataChangeCriterios()
}

/**
 * @properties={typeid:24,uuid:"3C884F4C-C538-48D2-947B-97781EF8F586"}
 */
function onActiondesdeFecha() {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
	
}

/**
 *
 * @properties={typeid:24,uuid:"6712F403-4F36-4D97-A9BC-A6A6D55357BE"}
 */
function onActionhastaFecha() {
	// TODO Auto-generated method stub
	elements.desdeeje.requestFocus()
	elements.desdeeje.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38E1CCFA-012F-42F7-A001-F35099EFF0F2"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.Clientec.requestFocus()
	elements.Clientec.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"5569FACD-D5D8-444E-9FC2-23EC3A745DA3"}
 */
function BtnDesdeCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_DiarioFacturacion1';
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
 * @properties={typeid:24,uuid:"E076785B-8BA4-4EDA-8317-DD864F149E9E"}
 */
function BtnHastaCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_DiarioFacturacion2';
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



/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"59FABB31-5697-43E0-A836-A1C6DB85C0E5"}
 */
function onDataChangeCriterios() {
	// TODO Auto-generated method stub
	if(Orden == 1) elements.desdeeje.requestFocus()
	else if(Orden == 2) elements.DesdeFecha.requestFocus()
	else if(Orden == 3) elements.Cliente.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"4FDBC989-D425-4C6C-A05D-382D2EFB7029"}
 */
function onActiondesdeeje(event) {
	// TODO Auto-generated method stub
	elements.desdeser.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"DCF73A82-61BF-4FBB-A535-58DE50B4F7DC"}
 */
function onActiondesdeser(event) {
	// TODO Auto-generated method stub
	elements.desdenup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"134F8DA1-7053-4B61-ABCE-185B92457396"}
 */
function onActiondesdenup(event) {
	// TODO Auto-generated method stub
	if(HastaEje == null || HastaEje == '')
	{
		elements.hastaeje.requestFocus()
	}
	else
	{
		elements.hastanup.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"3BAA3053-9D24-4434-95FA-E56C8D121A43"}
 */
function onActionhastaeje(event) {
	// TODO Auto-generated method stub
	elements.hastaser.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"FEDA1586-7BA1-43E4-8379-F0276CD9A446"}
 */
function onActionhastaser(event) {
	// TODO Auto-generated method stub
	elements.hastanup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"88BF5085-EF5D-4177-A030-D7884877EA2F"}
 */
function onActionhastanup(event) {
	// TODO Auto-generated method stub
	elements.Cliente.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"12FADE7A-382A-4683-BEDC-D377EA795779"}
 */
function onActionrectificativas(event) {
	// TODO Auto-generated method stub
	if(Rectificativas == 1)
	{
		Cargo = null;
		Abono = null;
		DesdeSer = 'R';
		HastaSer = 'R'
	}
	else
	{
		Cargo = null;
		Abono = null;
		DesdeSer = '';
		HastaSer = ''
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"140288F7-DC17-4169-80EA-3696C8235A09"}
 */
function onActioncargo(event) {
	// TODO Auto-generated method stub
	if(Cargo == 1)
	{
		Rectificativas = null;
		Abono = null;
		DesdeSer = 'C';
		HastaSer = 'C'
	}
	else
	{
		Cargo = null;
		Abono = null;
		DesdeSer = '';
		HastaSer = ''
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C35F9794-1049-4C6B-AE68-037A08A995E8"}
 */
function onActionabono(event) {
	// TODO Auto-generated method stub
	if(Abono == 1)
	{
		Rectificativas = null;
		Cargo = null;
		DesdeSer = 'A';
		HastaSer = 'A'
	}
	else
	{
		Cargo = null;
		Abono = null;
		DesdeSer = '';
		HastaSer = ''
	}
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"AE4FFE0E-2A39-4AC3-B43C-7122E1020D12"}
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
 * @properties={typeid:24,uuid:"57C371F0-6736-4DD0-BBB0-6C78B70F0972"}
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
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"F87C30A1-488D-4F0D-B4BA-A319CE973393"}
 */
function onDataChangeDnup() {
	if(DesdeEje && DesdeEje > HastaEje) HastaEje = DesdeEje;
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"E3E6517B-E4A7-4714-B94C-095495FACF24"}
 */
function onDataChangeHnup() {
	if(HastaEje && DesdeEje && DesdeEje > HastaEje) HastaEje = DesdeEje;
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"AC9E9990-BADB-4727-844C-3F8ED519A355"}
 */
function onDataChangedfecha() {
	if(DesdeFecha){
		var a = DesdeFecha.getFullYear().toString().substr(2,2);
		DesdeEje = utils.stringToNumber(a)
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"8D40E73D-EA06-401F-921A-66C620686FF8"}
 */
function onDataChangehfecha() {
	if(HastaFecha){
		var a = HastaFecha.getFullYear().toString().substr(2,2);
		HastaEje = utils.stringToNumber(a)
	}
}
