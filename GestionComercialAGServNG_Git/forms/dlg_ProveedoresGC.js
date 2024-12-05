/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"D82BFDEF-E2A7-4060-B465-91F3ECCA13D1"}
 */
var ProveedorID = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"29C50F96-D4B8-4DED-A911-06968557508D"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	btn_tabContactos()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"85EBDD60-87D2-4FC0-9DA5-6E4A3A64A13C"}
 */
function onActioncodigo(event) {
	// TODO Auto-generated method stub
	elements.fld_nombre.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6EE49153-E346-4DFE-87AA-A59440949441"}
 */
function onActionnom(event) {
	// TODO Auto-generated method stub
	elements.fld_direccion.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB4BB0B9-832A-4692-A40A-571C8A3EDBF3"}
 */
function onActionpob(event) {
	// TODO Auto-generated method stub
	elements.fld_cif.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB959A19-2113-4577-9DF4-EE69127732DB"}
 */
function onActionpro(event) {
	// TODO Auto-generated method stub
	elements.fld_poblacion.requestFocus()
	
}

/**
 * @properties={typeid:24,uuid:"097BBBA9-B79B-404D-8D3B-58CB66F61067"}
 */
function validate_autoEnter()
{
	elements.idcodigo.bgcolor = '#feffe4'
	elements.idcodigo.readOnly = false
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A9EF9F83-24FC-45AF-9E61-7526C7D4A48F"}
 */
function onActiondir(event) {
	// TODO Auto-generated method stub
	elements.fld_codpostal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B375AEF-56DD-4736-87D3-EC44983B9AE4"}
 */
function onActioncif(event) {
	// TODO Auto-generated method stub
	elements.fld_formapago.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"9A5B3205-9A78-4107-AB49-5CE318C2EE79"}
 */
function onActionformapago(event) {
	// TODO Auto-generated method stub
	elements.fld_telf1.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6DD97ABE-5DD8-4038-BBB8-F9B46DD3FE59"}
 */
function onActionfax(event) {
	// TODO Auto-generated method stub
	elements.fld_email.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4B7F3CBB-AEB8-4DDB-AC95-DF1DFAE9C0A5"}
 */
function onActioncontacto(event) {
	// TODO Auto-generated method stub
	elements.fld_cuentacontable.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D2F46D1D-3192-4240-B663-155297946B9F"}
 */
function onActioncodpostal(event) {
	// TODO Auto-generated method stub
	elements.fld_provincia.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F12E5365-B2C3-46C0-9FCB-D4E00F40F29E"}
 */
function onActiontelf1(event) {
	// TODO Auto-generated method stub
	elements.fld_telf2.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"78D5477B-5CD4-446F-AA25-CD072469AED3"}
 */
function onActiontelf2(event) {
	// TODO Auto-generated method stub
	elements.fld_fax.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4F11B7D0-46E5-4C59-B4D5-52474944E3C2"}
 */
function onActionmail(event) {
	// TODO Auto-generated method stub
	elements.fld_contacto.requestFocus()
}

/**
 *
 * @properties={typeid:24,uuid:"4A9E76FA-B253-41E8-A7AC-B924E18E8ABD"}
 */
function btn_sendEmail()
{
	if(email) 
	{				
		if(utils.stringPatternCount(email,",") == 0
		&& utils.stringPatternCount(email," ") == 0
		&& utils.stringPatternCount(email,"@") == 1
		&& utils.stringPatternCount(email,".") >= 1)
		{
			var query = 'select [ServidorCorreoSMTP] from [ParametrosAplicacion]'
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var SMTP = dataset.getValue(1,1)
			if(!SMTP)
			{
				globals.GCshowErrorDialog('No está definido el Servidor de Correo SMTP en los Parametros de la Aplicación.',null,'Aceptar',null,null,null)
			}
			else
			{
				query = 'select imde_us,nuser_us,passw_us from [usuarios] WHERE [cod_us] = ' + globals.GClogin_usuario
				dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var EmailFrom = dataset.getValue(1,1)
				var UserEmail = dataset.getValue(1,2)
				var PasswEmail = dataset.getValue(1,3)
				if(EmailFrom == null || EmailFrom == '')
				{
					globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
				}
				else if(UserEmail == null || UserEmail == '')
				{
					globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
				}
				else if(PasswEmail == null || PasswEmail == '')
				{
					globals.GCshowErrorDialog('No están definidos los datos de la cuenta de correo del usuario en los Usuarios.',null,'Aceptar',null,null,null)
				}
				else
				{
					globals.GCFormulario = 'dlg_Proveedores'
					globals.GCshowDialogEnvioMail('Envio EMail',1,null,null,null,null,null,null,null,null)
				}
			}
		}
		else
		{
			globals.GCshowInfoDialog("Debes introducir una dirección de correo válida.", null,'Aceptar', null, null, null);			
		}
	}
	// create a file object
	
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"5367F9C0-E528-42C8-9668-3C0038CD45B5"}
 */
function validate_beforeDelete()
{
	return 0
}

/**
 * @properties={typeid:24,uuid:"72AA7AF4-907C-46C8-879E-65F88B210280"}
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
 * @properties={typeid:24,uuid:"5212F203-11E3-4F50-83FF-279E14914886"}
 */
function onActionBtnFormaPago(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Proveedores'
	//globals.GCshowDialogFormasPago('Formas de Pago', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Formas Pago')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Formas Pago", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Formas de Pago';
	//win.resizable = true;
	win.show(forms.dlgFormasPagoGCNG)
	//win.show(forms.dialog_FormasPagoGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"3156D217-D752-44AB-9C7C-5054B6DBBD71"}
 */
function onActionBtnPaises(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Proveedores'
	//globals.GCshowDialogPaises('Paises', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialogPaises')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialogPaises", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Paises';
	//win.resizable = true;
	//win.show(forms.dialog_PaisesGC)
	win.show(forms.dlgPaisesGC)
}

/**
* Perform the element default action.
*
* @param {String} myString
*
* @return {String}
*
* @properties={typeid:24,uuid:"F19F1D18-CEBA-4CE6-8D79-9D8503C4C949"}
*/
function trim(myString)
{
	return myString.replace(/^\s+/g,'').replace(/\s+$/g,'');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CEC19D0B-659C-4BAA-A102-5EC14043BC1B"}
 */
function onActionPais(event) {
	// TODO Auto-generated method stub
	
elements.fld_cif.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"B169E439-BA80-4D1E-B08D-AA2CC664B003"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [CodPro] from [tbMaestroProveedores] where  [CodPro] = " + codpro;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Código de Proveedor duplicado!','¡Error!')
		else {
		var methd = 'forms.dlg_ProveedoresGC.foco()';
		globals.GCshowErrorDialog('Código de Proveedor duplicado!',methd,'Aceptar',null,null,null)
		}
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"110F7870-C358-4D5F-808F-75F5EE836CDE"}
 */
function foco() {
	elements.idcodigo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1BD36D0C-32B0-4793-900C-4261230A4AA4"}
 */
function onActionnumproveedor(event) {
	// TODO Auto-generated method stub
	elements.fld_cuentacontable.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9C95CEB8-2D83-4516-9B7E-118D49E7E05B"}
 */
function onActionnumbuzonedi(event) {
	// TODO Auto-generated method stub
	elements.fld_tipoiva.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"86A0B015-7E74-4F22-A204-8529CA942CD1"}
 */
function onActiontipoiva(event) {
	// TODO Auto-generated method stub
	elements.fld_porcirpf.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2EB2789A-7658-4F53-955D-6D7F4CDAEB29"}
 */
function onActioncc(event) {
	// TODO Auto-generated method stub
	elements.fld_ccgastos.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B8D5B483-2DC8-4AD9-BF7C-1E864E3AC280"}
 */
function onActionccgastos(event) {
	// TODO Auto-generated method stub
	elements.fld_tipoiva.requestFocus()
}

/**
*
*
 *
 * @properties={typeid:24,uuid:"74CBC93A-CC13-4F01-967F-C4D1674DB481"}
 */
function btn_tabContactos()
{
	//if(!globals.GCisEditing()) //if there is a transaction - we're editing something
	//{
		tabs_dimAll()
		elements.lblOtrosContactos.bgcolor = '#004080'

		if(elements.tabs_mainPanel.tabIndex != 1)
		{
			elements.tabs_mainPanel.tabIndex = 1
		}
	//}
}

/**
*
 * @properties={typeid:24,uuid:"6CFF1856-33C1-45D3-A367-00FBAEF7E08B"}
 */
function tabs_dimAll()
{
	elements.lblOtrosContactos.bgcolor = '#606060'
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"ACA61B06-5B77-47EE-9179-0CB9E7B36203"}
 */
function btngooglemaps(event) {
	// TODO Auto-generated method stub
	if(direccion)
	{
		var dir = utils.stringReplace(direccion,' ','+')
		var pob = utils.stringReplace(poblacion,' ','+')
		application.showURL( 'http://maps.google.com/maps?q=' + dir + ','+pob,'_blank');
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"BA476BC8-EFD1-4FB4-B7EA-3E4E28AB4E13"}
 */
function btn_print(event) {
	// TODO Auto-generated method stub
	//if(codpro)
	//{
		var dprov = 0
		var hprov = 999999999
		var ddprov = '0'
		var hdprov = 'ZZZZZ'
		var dprovin = 'a'
		var hprovin = 'zzzzzzzz'
		var orden = 0;
		var tipo = 0;
		
		globals.btn_runJasperReportListadoProveedores(dprov, hprov,ddprov,hdprov,orden,tipo,dprovin,hprovin)		
	//}
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"05800B84-526F-401C-B615-2D6E2F891DEB"}
 */
function onDataChangeListadoProveedores() {
	// TODO Auto-generated method stub
	if(ProveedorID)
	{
		forms.dlg_ProveedoresGC.elements.idcodigo.editable = false;
		forms.dlg_ProveedoresGC.elements.idcodigo.bgcolor = '#f0f0f0';
		var result = foundset.selectRecord(ProveedorID)
		var fsCount = databaseManager.getFoundSetCount(foundset);
		while(result==false)
		{
			if(fsCount == foundset.getSize()) return;
			foundset.setSelectedIndex(foundset.getSize());
			result = foundset.selectRecord(ProveedorID);
		}
	}
}

/**
 * Handle changed data.
 *
*
 * @properties={typeid:24,uuid:"4C01CC3E-C638-45A1-AEC3-0FE4567E09BB"}
 */
function onDataChangeEmail() {
	// TODO Auto-generated method stub
	if(utils.stringPatternCount(email,",") == 0
			&& utils.stringPatternCount(email," ") == 0
			&& utils.stringPatternCount(email,"@") == 1
			&& utils.stringPatternCount(email,".") >= 1)
			{
				return
			}
			else
			{
				elements.fld_email.selectAll()
				elements.fld_email.requestFocus()
				globals.GCshowInfoDialog("Debes introducir una dirección de correo válida.", null,'Aceptar', null, null, null);			
			}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
  *
 *
 *
 *
 * @properties={typeid:24,uuid:"6A2E79FF-9C74-45F1-9BB3-0EB71E29F39B"}
 */
function onDataChangecc() {
	// TODO Auto-generated method stub
	if(cuentacontable)
	{
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		var con = dataset.getValue(1,2);
		
		if(!Empresa || !con)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No está realizada ninguna conexión con ninguna Contabilidad.\nNo se puede comprobar la existencia de la Cuenta Contable.','¡Error!')
			else globals.GCshowErrorDialog('No está realizada ninguna conexión con ninguna Contabilidad.\nNo se puede comprobar la existencia de la Cuenta Contable.', null, null, null, null, null)
		}
		else
		{
			query = "select DescCuentaContable,Saldo,CuentaContable,ClaveDesglose from ctbCuentaContable where IdEjercicio ='"+ Empresa+
			"' and CuentaContable='" + cuentacontable + "'"/*"' AND (ClaveDesglose = 0 OR ClaveDesglose IS NULL)"*/
			dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
			var cc = dataset.getValue(1,3)
			var clave = dataset.getValue(1,4)
			if(!cc || clave == 1)
			{
				elements.fld_cuentacontable.selectAll()
				elements.fld_cuentacontable.requestFocus()
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Cuenta Contable no válida o no existe en el PGC de la Empresa ','¡Error!')
				else globals.GCshowErrorDialog("Cuenta Contable no válida o no existe en el PGC de la Empresa '"+Empresa+"'.\nVerifíquela.", null, null, null, null, null)
			}
		}
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
  *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"4BDC4516-E7CF-4500-A4FB-255468DFF338"}
 */
function onDataChangeccgastos() {
	// TODO Auto-generated method stub
	if(ccgastos)
	{
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		var con = dataset.getValue(1,2);
		
		if(!Empresa || !con)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('No está realizada ninguna conexión con ninguna Contabilidad.\nNo se puede comprobar la existencia de la Cuenta Contable.','¡Error!')
			else globals.GCshowErrorDialog('No está realizada ninguna conexión con ninguna Contabilidad.\nNo se puede comprobar la existencia de la Cuenta Contable.', null, null, null, null, null)
		}
		else
		{
			query = "select DescCuentaContable,Saldo,CuentaContable,ClaveDesglose from ctbCuentaContable where IdEjercicio ='"+ Empresa+
			"' and CuentaContable='" + ccgastos + "'"/*"' AND (ClaveDesglose = 0 OR ClaveDesglose IS NULL)"*/
			dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
			var cc = dataset.getValue(1,3)
			var clave = dataset.getValue(1,4)
			if(!cc || clave == 1)
			{
				elements.fld_cuentacontable.selectAll()
				elements.fld_cuentacontable.requestFocus()
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Cuenta Contable no válida o no existe en el PGC de la Empresa ','¡Error!')
				else globals.GCshowErrorDialog("Cuenta Contable no válida o no existe en el PGC de la Empresa '"+Empresa+"'.\nVerifíquela.", null, null, null, null, null)
			}
		}
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"13F61D90-EC6E-400E-9311-699A5DDDA6C0"}
 */
function onDataChangeCIF() {
	// TODO Auto-generated method stub
	/*var ok = true
	if(ok == false){
		elements.fld_cif.requestFocus()
		elements.fld_cif.selectAll()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('CIF no válido!!!.\nVerifíquelo.','¡Error!')
		else globals.GCshowErrorDialog("CIF no válido!!!.\nVerifíquelo.", null, null, null, null, null)
	}*/
	if(cif){
		//cif = utils.stringReplace(cif,'-','');
		cif = utils.stringTrim(cif)
		cif = utils.stringReplace(cif,' ','');
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"BDDDCF61-3AB5-4A77-96F7-73614AAF7FB9"}
 */
function onDataChangeCP() {
	if(codpostal)
	{
		if(codpostal.length == 5)
		{
			var prov = utils.stringLeft(codpostal,2)			
			switch( prov )
			{
				case '01': 
				{
					provincia = 'ÁLAVA';				
					break;
				}
				case '02': 
				{
					provincia = 'ALBACETE';
					break;
				}
				case '03': 
				{
					provincia = 'ALICANTE';					
					break;
				}
				case '04': 
				{
					provincia = 'ALMERÍA';					
					break;
				}
				case '33': 
				{
					provincia = 'ASTURIAS';					
					break;
				}
				case '05': 
				{
					provincia = 'ÁVILA';
					break;
				}
				case '06': 
				{
					provincia = 'BADAJOZ';					
					break;
				}
				case '08': 
				{
					provincia = 'BARCELONA';					
					break;
				}
				case '09': 
				{
					provincia = 'BURGOS';					
					break;
				}
				case '10': 
				{
					provincia = 'CÁCERES';					
					break;
				}
				case '11': 
				{
					provincia = 'CÁDIZ';					
					break;
				}
				case '39': 
				{
					provincia = 'CANTABRIA';					
					break;
				}
				case '12':
				{
					provincia = 'CASTELLÓN';					
					break;
				}
				case '51':
				{
					provincia = 'CEUTA';
					break;
				}
				case '13':
				{
					provincia = 'CIUDAD REAL';					
					break;
				}
				case '14':
				{
					provincia = 'CÓRDOBA';					
					break;
				}
				case '15':
				{
					provincia = 'CORUÑA, A';					
					break;
				}
				case '16':
				{
					provincia = 'CUENCA';					
					break;
				}
				case '17':
				{
					provincia = 'GIRONA';					
					break;
				}
				case '18':
				{
					provincia = 'GRANADA';					
					break;
				}
				case '19':
				{
					provincia = 'GUADALAJARA';					
					break;
				}
				case '20':
				{
					provincia = 'GUIPÚZCOA';					
					break;
				}
				case '21':
				{
					provincia = 'HUELVA';					
					break;
				}
				case '22':
				{
					provincia = 'HUESCA';					
					break;
				}
				case '07':
				{
					provincia = 'ILLES BALEARS';					
					break;
				}
				case '23':
				{
					provincia = 'JAÉN';					
					break;
				}
				case '24':
				{
					provincia = 'LEÓN';					
					break;
				}
				case '25':
				{
					provincia = 'LLEIDA';					
					break;
				}
				case '27':
				{
					provincia = 'LUGO';					
					break;
				}
				case '28':
				{
					provincia = 'MADRID';
					break;
				}
				case '29':
				{
					provincia = 'MÁLAGA';					
					break;
				}
				case '52':
				{
					provincia = 'MELILLA';					
					break;
				}
				case '30':
				{
					provincia = 'MURCIA';					
					break;
				}
				case '31':
				{
					provincia = 'NAVARRA';					
					break;
				}
				case '32':
				{
					provincia = 'OURENSE';					
					break;
				}
				case '34':
				{
					provincia = 'PALENCIA';					
					break;
				}
				case '35':
				{
					provincia = 'PALMAS, LAS';					
					break;
				}
				case '36':
				{
					provincia = 'PONTEVEDRA';					
					break;					
				}
				case '26':
				{
					provincia = 'RIOJA, LA';					
					break;
				}
				case '37':
				{
					provincia = 'SALAMANCA';					
					break;
				}
				case '38':
				{
					provincia = 'S.C.TENERIFE';					
					break;
				}
				case '40':
				{
					provincia = 'SEGOVIA';
					break;
				}
				case '41':
				{
					provincia = 'SEVILLA';					
					break;
				}
				case '42':
				{
					provincia = 'SORIA';					
					break;
				}
				case '43':
				{
					provincia = 'TARRAGONA';					
					break;
				}
				case '44':
				{
					provincia = 'TERUEL';					
					break;
				}
				case '45':
				{
					provincia = 'TOLEDO';					
					break;
				}
				case '46':
				{
					provincia = 'VALENCIA';					
					break;
				}
				case '47':
				{
					provincia = 'VALLADOLID';					
					break;
				}
				case '48':
				{
					provincia = 'VIZCAYA';					
					break;
				}
				case '49':
				{
					provincia = 'ZAMORA';					
					break;
				}
				case '50':
				{
					provincia = 'ZARAGOZA';
					break;
				}
				default: break;		
			}
			var query = "select municipio_nombre from cp_municipios where  codigo_postal = '" + codpostal + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			if(dataset.getValue(1,1)) poblacion = dataset.getValue(1,1);
		}
	}
	
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"A617F6C1-72AB-4911-B388-524D747E928C"}
 */
function btn_web(event) {
	if(web)
	{
		if((web.indexOf('http://',0) >= 0 || web.indexOf('https://',0) >= 0))
		{
			application.showURL(web);	
		}
		else
		{
			application.showURL( 'http://' + web);
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
 * @properties={typeid:24,uuid:"9703CC65-EDA6-4780-A4D8-A8BB13E501A7"}
 */
function onActionBtnProveedor(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ProveedoresGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Proveedores2')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Proveedores2", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Proveedores';
	//win.resizable = true;
	win.show(forms.dialog_Proveedores2GC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"494B8F8A-1C0E-40C2-99B7-67E336D3D8AA"}
 */
function btn_comprcifdni(event) {
	// TODO Auto-generated method stub
	//if(!globals.GCisEditing())
	//{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbciferroneos')  
		vSet.loadAllRecords()
		vSet.deleteAllRecords()
		 
		if(forms.dlg_ProveedoresGC.id) 
		{
			var cifcli = forms.dlg_ProveedoresGC.cif;
			var idcli = forms.dlg_ProveedoresGC.codpro;
			var desccli = forms.dlg_ProveedoresGC.descproveedor;
			var paiscli = forms.dlg_ProveedoresGC.pais;
			var n5 = null;
			var z = 0;
			if(cifcli)
			{				
				//var n = globals.validateCIFGC(cifcli) 
				//if(n == false) application.output(idcli+' '+desccli)
				var n = globals.GCcheckCIF(utils.stringTrim(cifcli))
				//var n2 = globals.GCcheckNIF(cifcli)
				var n3 = globals.GCcheckNSS(utils.stringTrim(cifcli))
				
			
				if(paiscli /*&& paiscli != 'ES'*/)
				{
					var url = new String();
					if(utils.stringLeft(cifcli,2) == paiscli) 
					{
						var cifcl = utils.stringReplace(cifcli,paiscli,'');
						cifcl = utils.stringTrim(cifcl);
						cifcl = utils.stringReplace(cifcl,' ','');
						url = 'https://ec.europa.eu/taxation_customs/vies/rest-api/ms/'+paiscli+'/vat/'+cifcl;
						var pageData = plugins.http.getPageData(url);
						pageData = utils.stringReplace(pageData,'\n','')
						n5 = utils.stringLeft(pageData,20);
					}
					else
					{
						if(!paiscli || paiscli == ' ' || paiscli == '  '){ 
							paiscli = 'ES';
						}
						url = 'https://ec.europa.eu/taxation_customs/vies/rest-api/ms/'+paiscli+'/vat/'+cifcli;
						pageData = plugins.http.getPageData(url);
						pageData = utils.stringReplace(pageData,'\n','')
						n5 = utils.stringLeft(pageData,20);
					}
					//application.showURL(url,'_blank')
				}
				
				if(n == false && n3 == false /*&& n4 == false*/ && n5 != '{  "isValid" : true,') 
				//if(n == false && n3 == false) 
				{
					z+=1;
					application.output(idcli+' '+desccli+ ' '+cifcli)
					  
					//load record by ID in foundset  
					//vSet.loadRecords(databaseManager.convertToDataSet([globals.uuid]))  
					vSet.newRecord();
					vSet.id = application.getUUID();
					vSet.idcli = idcli;
					vSet.descli = desccli;
					vSet.cifcli = cifcli;
					
					
					databaseManager.saveData(vSet);					
										
				}
			}
		}
		if(z>0)
		{
			globals.btn_runJasperReportciferroneos()
		}
		else
		{
			globals.GCshowInfoDialog('El CIF/DNI de este proveedor es correcto.',null,'Aceptar',null,null,null)
		}
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"BC7869D9-F0D7-4D00-B698-46659A6BC843"}
 */
function btn_Documentacion(event) {
	globals.GCFormulario = 'dlg_ProveedoresGC';
	if(codpro)
	{
		globals.COD = codpro;
		globals.GCshowDialogProveedoresDocumentacion('Nuevo Documento', null, null, null, null, null, null, null, null, null);
	}
}
