/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"154D0DC5-BCE8-4D4A-B667-C95581527703"}
 */
var frmCryptedText = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"77208744-28D7-40EE-AC0A-1C131567C6B0"}
 */
var frmDecryptedText = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"517DA764-DECB-4B9C-A8F0-7DD4DE8B1F78"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"22AD866C-A245-46CC-80FC-51F11243193E"}
 */
function Desencriptar() 
{
	frmDecryptedText=globals.GCcryptString(frmCryptedText,globals.GCcryptKey,'D');
	//frmDecryptedText=utils.stringMD5HashBase64(frmCryptedText)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C259BBB5-E384-45DC-893A-459A29F49F26"}
 */
function onActionCod_us(event) {
	// TODO Auto-generated method stub
	
	elements.nom_us.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"27031A79-6A36-4960-80B6-C6F7868C1025"}
 */
function btnUsuario(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Usuarios'
	globals.GCshowDialogUsuarios('Usuarios de la Aplicación', 1, null, null, true, null, null, null, null, null);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"30949FD5-951E-4D00-89B4-BAD7F7E83C2A"}
 */
function onActionnom(event) {
	// TODO Auto-generated method stub
	
		elements.cla_us.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8914D248-2148-46CD-95E1-ECEE78914424"}
 */
function onActioncla(event) {
	// TODO Auto-generated method stub
	
		elements.imde_us.requestFocus()
	
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"E26E1117-37A8-46A6-9FF2-210EBCE590A2"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"AACFD024-3896-444E-A2A1-9F190106B26C"}
 */
function foco() {
	elements.cod_us.requestFocus()
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"01578507-E816-43D4-9C87-D6B446B18CC9"}
 */
function onFocusLostcod(event) {
	// TODO Auto-generated method stub
	var ds = controller.getDataSource().split('/');
	if(!globals.GCconex) var con = ds[1];
	else con = globals.GCconex;
	if(cod_us)
	{
		var query = "select [cod_us] from [usuarios] where [cod_us] = " + cod_us;
		var dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
		var n = dataset.getValue(1,1)
		if(n != null)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Codigo Usuario duplicado!\n\nElija otro.','¡Error!')
			else {
			var methd = 'forms.dlg_UsuariosGC.foco()';
			globals.GCshowErrorDialog('Codigo Usuario duplicado!\n\nElija otro.',methd,'Aceptar',null,null,null)
			}
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D9C5174-2DE8-47A9-BA2A-AF944619F3B6"}
 */
function onActionimde(event) {
	// TODO Auto-generated method stub
	elements.nuser_us.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"B2C1F635-5C7D-401C-8610-0B3ECF7E3273"}
 */
function onActionnuser(event) {
	// TODO Auto-generated method stub
	elements.passw_us.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"264D2238-C60F-42C8-B141-D6B068D069AF"}
 */
function onActionfechalimite(event) {
	// TODO Auto-generated method stub
	onDataChangeFechaLimite()
	
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"799A597D-C287-4795-A01E-4E39C4DBA038"}
 */
function onDataChangeFechaLimite() {
	// TODO Auto-generated method stub
	if(fechalimite) fechalimite = fechalimite.setHours(23,59,59)
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"664E040E-D77D-4A66-8974-C73926B15BA9"}
 */
function onShow() {
	// TODO Auto-generated method stub
	if(cla_us != null && cla_us != '')		
	{	     
		frmCryptedText = cla_us
		Desencriptar()
		cla_us = frmDecryptedText
	}
	if(passw_us != null && passw_us != '')
	{
		frmCryptedText = passw_us
		Desencriptar()
		passw_us = frmDecryptedText
	}
	
	elements.cla_us.visible = true;
	elements.cla_us.enabled = true;
	elements.cla_usc.visible = false;
	elements.cla_usc.enabled = false;
	elements.passw_us.visible = true;
	elements.passw_us.enabled = true;
	elements.passw_usc.visible = false;
	elements.passw_usc.enabled = false;
	elements.lbl_claus.imageURL = 'media:///eye.png'
	elements.lbl_claemail.imageURL = 'media:///eye.png'
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1BF66471-60B7-4F3C-A7E4-C837D86A2185"}
 */
function btn_savepresup(event) {
	// TODO Auto-generated method stub
	if(!savepresupuestos) savepresupuestos = '1'; 
	else savepresupuestos = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"74F83040-34E4-4EC6-A809-F6C0BE66778F"}
 */
function btn_savepedido(event) {
	// TODO Auto-generated method stub
	if(!savepedidos) savepedidos = '1'; 
	else savepedidos = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F4264DE3-7EB1-4DFF-B250-5A900F92BC6D"}
 */
function btn_savealbaran(event) {
	// TODO Auto-generated method stub
	if(!savealbaran) savealbaran = '1'; 
	else savealbaran = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"8D5FC36C-0F4F-46B3-9CD5-E83511DB10DA"}
 */
function btn_savefacturas(event) {
	// TODO Auto-generated method stub
	if(!savefactura) savefactura = '1'; 
	else savefactura = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"ED6E7AE1-9813-4C50-9ABD-B258260E7ADD"}
 */
function btn_savecompras(event) {
	// TODO Auto-generated method stub
	if(!savecompras) savecompras = '1'; 
	else savecompras = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2A7C24AD-DD44-4C5F-AFE0-E0CD4B69A4A9"}
 */
function btn_savestock(event) {
	// TODO Auto-generated method stub
	if(!savestock) savestock = '1'; 
	else savestock = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"BC7ABD73-639B-46D1-9BCD-0BE1D8E77BCC"}
 */
function btn_verPassword(event) {
	if(cla_us)
	{
		if(elements.cla_us.visible == false)
		{
		elements.cla_us.visible = true;
		elements.cla_us.enabled = true;
		elements.cla_usc.visible = false;
		elements.cla_usc.enabled = false;
		elements.lbl_claus.imageURL = 'media:///eye.png'
		}
		else
		{
			elements.cla_us.visible = false;
			elements.cla_us.enabled = false;
			elements.cla_usc.visible = true;
			elements.cla_usc.enabled = true;
			elements.lbl_claus.imageURL = 'media:///eye-slash.png'
		}
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
 * @properties={typeid:24,uuid:"F4AD0B35-953C-4C9E-9899-4F95D71DE930"}
 */
function btn_verPassword2(event) {
	if(passw_us)
	{
		if(elements.passw_us.visible == false)
		{
		elements.passw_us.visible = true;
		elements.passw_us.enabled = true;
		elements.passw_usc.visible = false;
		elements.passw_usc.enabled = false;
		elements.lbl_claemail.imageURL = 'media:///eye.png'
		}
		else
		{
			elements.passw_us.visible = false;
			elements.passw_us.enabled = false;
			elements.passw_usc.visible = true;
			elements.passw_usc.enabled = true;
			elements.lbl_claemail.imageURL = 'media:///eye-slash.png'
		}
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
 * @properties={typeid:24,uuid:"D3FA30AF-5D8E-44AB-8847-46E8F1B0CE66"}
 */
function BtnFirmaEmail(event) {
	globals.GCFormulario = 'dlg_UsuariosGC'
	globals.GCshowDialogFirmaEmail('Firma de correo electrónico', 1, null, null, true, null, null, null, null, null);
	
}
