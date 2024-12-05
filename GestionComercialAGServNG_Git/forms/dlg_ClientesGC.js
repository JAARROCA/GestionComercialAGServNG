/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F5A9ED77-1E35-4182-9AF5-03825AF76C3E"}
 */
var ClienteID = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0693CF42-2B2D-4895-A970-54594541671A"}
 */
var selections = '';

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"8481B694-73D2-4D72-B9DE-CF5F8655BAF5"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"BBBBA177-A826-487D-ADEB-AE2E0476AA16"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [IdCliente] from [tbMaestroClientes] where  [IdCliente] = " + idcliente;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		var methd = 'forms.dlg_ClientesGC.foco()';
		globals.GCshowErrorDialog('Código de Cliente duplicado!',methd,'Aceptar',null,null,null)
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A7693E88-6570-4D24-829D-D5538C396303"}
 */
function foco() {
	idcliente = null
	elements.idcodigo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A3045962-C9E6-442E-BB53-167FA64DFE31"}
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
 * @properties={typeid:24,uuid:"B709BE03-24BD-4B0F-AA0B-5F9ABF8BC7F3"}
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
 * @properties={typeid:24,uuid:"9518BB92-B480-4534-8100-CBFF4918B6FC"}
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
 * @properties={typeid:24,uuid:"6C276B44-6A40-44EF-918E-12DC449334B2"}
 */
function onActionpro(event) {
	// TODO Auto-generated method stub
	elements.fld_poblacion.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"913C4D34-96AB-40E0-83F9-F064DE2C9088"}
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
 * @properties={typeid:24,uuid:"7DBD969B-E5DA-4667-BFF1-305887FE3E0B"}
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
 * @properties={typeid:24,uuid:"B0EBE912-DD4B-4487-9F9F-5ECB45AE0DE4"}
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
 * @properties={typeid:24,uuid:"9217B870-A497-41A6-B45D-B02D3E89771C"}
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
 * @properties={typeid:24,uuid:"4128CE89-AEA9-4553-9A4A-3532D5C75469"}
 */
function onActioncontacto(event) {
	// TODO Auto-generated method stub
	elements.fld_numproveedor.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB7D16A5-4A27-4A4E-BED4-E192F4BD02B4"}
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
 * @properties={typeid:24,uuid:"2D94D761-2A61-4273-8DFF-F49082A69DBC"}
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
 * @properties={typeid:24,uuid:"CEC2AE3D-6BCB-467B-9B31-74FE94C96129"}
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
 * @properties={typeid:24,uuid:"57624342-A34A-4BDD-A932-14CF332B4CBF"}
 */
function onActionmail(event) {
	// TODO Auto-generated method stub
	elements.fld_emailcc.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1C8BA914-B1BF-44E8-8703-FE7876444D08"}
 */
function onActioncuentacontable(event) {
	// TODO Auto-generated method stub
	elements.fld_cuentacontableventas.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"996E3FB7-CC61-4F58-A060-6E98987C37FF"}
 */
function onActioncuentacontableventas(event) {
	// TODO Auto-generated method stub
	elements.fld_tipoiva.requestFocus()
}

/**
 *
 * @properties={typeid:24,uuid:"E9B2F464-6DDD-450C-B823-293B29568B6F"}
 */
function btn_sendEmail()
{
	if(emailcontacto) 
	{
		
		if(utils.stringPatternCount(emailcontacto,",") == 0
				&& utils.stringPatternCount(emailcontacto," ") == 0
				&& utils.stringPatternCount(emailcontacto,"@") == 1
				&& utils.stringPatternCount(emailcontacto,".") >= 1)
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
							globals.GCFormulario = 'dlg_Clientes'
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FED83502-01A0-4DEB-A842-F2DEFA7822EB"}
 */
function onActionBtnFormaPago(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Clientes'
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
 * @properties={typeid:24,uuid:"58655E03-D3E0-4962-956B-A3E397E39AE1"}
 */
function onActionBtnPaises(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Clientes'
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
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9716A8E3-BB1D-407B-BC94-232DB71411DD"}
 */
function onActiondiapago1(event) {
	// TODO Auto-generated method stub
	elements.fld_diapago2.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"030FCE90-CA00-4F32-B3A1-07F074D2783F"}
 */
function onActiondiapago2(event) {
	// TODO Auto-generated method stub
	elements.fld_diapago3.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"13983213-9FAB-4336-8237-BFF34486C466"}
 */
function onActiondiapago3(event) {
	// TODO Auto-generated method stub
	elements.fld_observaciones.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E45BA757-7E47-4F37-ADE5-4F77BA44767F"}
 */
function onActionPais(event) {
	// TODO Auto-generated method stub
	
elements.fld_cif.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A439B5C-7188-427F-834C-B540555B152F"}
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
 * @properties={typeid:24,uuid:"93211C88-1282-4856-BA96-CF25DE835DF8"}
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
 * @properties={typeid:24,uuid:"2263284F-C348-48D5-AFC2-F435B256BED8"}
 */
function onActiontipoiva(event) {
	// TODO Auto-generated method stub
	elements.fld_diapago1.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"3F852D44-495D-4FB3-9CCF-D74FD8EFEE96"}
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
 * @properties={typeid:24,uuid:"57D60DEF-DE49-40B4-830F-442F345989B2"}
 */
function onActioncodigobanco(event) {
	// TODO Auto-generated method stub
	evt_changeItem()
	elements.fld_codigosucursal.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"47793D1C-2EE8-4197-A450-C7EDD344F0B2"}
 */
function onActioncodigosucursal(event) {
	// TODO Auto-generated method stub
	onDataChangeCodigobanco()
	evt_changeItem()
	elements.fld_codigodc.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"732A9931-E177-4368-B626-A005C39EA5D4"}
 */
function onActioncodigodc(event) {
	// TODO Auto-generated method stub
	onDataChangeCodigobanco()
	evt_changeItem()
	elements.fld_codigocuenta.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"4320C511-5E30-40BF-BA02-5CF83A666664"}
 */
function onActioncodigocuenta(event) {
	// TODO Auto-generated method stub
	onDataChangeCodigobanco()
	evt_changeItem()
	//elements.fld_codigoiban.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"09A18BB5-CFC8-41F5-B8E5-F6A13402CBC0"}
 */
function onActioncodigoiban(event) {
	// TODO Auto-generated method stub
	//elements.fld_swift.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"296228C8-DB86-4CBA-BDF0-BA8066454C95"}
 */
function evt_changeItem() {
	// TODO Auto-generated method stub
	if(codigobanco  && codigosucursal && codigo1dc && codigocuenta && pais)
	{
		CalculoIBAN() 
	}	
}

/**
 * Perform the element default action.
 *
 
 *
 *
 *
 * @properties={typeid:24,uuid:"E92272E7-34BB-41ED-AD90-E4DB7408285D"}
 */
function CalculoIBAN() {
	  
	//Limpiamos el numero de IBAN
	var account = codigobanco + codigosucursal +	codigo1dc + codigocuenta
	account = account.toUpperCase();  //Todo a Mayus
	account = trim(account); //Quitamos blancos de principio y final.
	account  = account.replace(/\s/g, "");  //Quitamos blancos del medio.
	             
	var letra1,letra2,num1,num2;
	var isbanaux;
	//var numeroSustitucion;
	             
	            //Generamos IBAN Temporal
	var codigopais = pais.toUpperCase();
	             
	isbanaux = codigopais + '00' + account;
	  
	// Cambiamos las letras por numeros.
	letra1 = isbanaux.substring(0, 1);
	letra2 = isbanaux.substring(1, 2);
	             
	num1 = getnumIBAN(letra1);
	num2 = getnumIBAN(letra2);      
	             
	isbanaux = String(num1) + String(num2) + isbanaux.substr(2, isbanaux.length - 2);   
	             
	// Movemos los 6 primeros caracteres al final de la cadena.         
	isbanaux = isbanaux.substr(6,isbanaux.length - 6) + isbanaux.substr(0,6);
	
	             
	//Calculamos el resto    
	
	var parte1 = isbanaux.substring(0,13)
	var parte2 = isbanaux.substring(13)
	var n = parte2.length
	var l = Digitos('1',n)
	var resto = ((parte1 % 97)*(l/*10000000000000*/ % 97) + (parte2 % 97)) % 97
	//var resto = isbanaux % 97;            
	var digitocontrol = 98 - resto;
	             
	if(digitocontrol < 10) digitocontrol = '0'+ String(digitocontrol);
	var Ibanfinal = codigopais + digitocontrol + account;
	  
	codigoiban = Ibanfinal;
	
	  
}

/**
* Perform the element default action.
*
* @param {String} letra
*
*
* @return {Number}
* @AllowToRunInFind
*
 *
 * @properties={typeid:24,uuid:"931D4ADA-1B57-42B1-BD5D-E0FDC3BA5753"}
 */
function getnumIBAN(letra)
{
	    var ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';           
	    return ls_letras.search(letra) + 10;
}

/**
 * Callback method when form is destroyed.
 * 
 * @param {String} CAMPO
 * 
 * @param {Number} LONGITUD
 * 
 * @return {String}
 *
 *
 * @properties={typeid:24,uuid:"D84B02B5-74FD-4B0E-87FC-3EE7B9861BFF"}
 */
function Digitos(CAMPO,LONGITUD)
{	
	var espacios = '0'
	var n = LONGITUD - CAMPO.length
	for(var i=1;i<=n;i++)
	{
		espacios = espacios + '0';
	}
    return (CAMPO + espacios);
}

/**
* Perform the element default action.
*
* @param {String} myString
*
* @return {String}
*
*
 * @properties={typeid:24,uuid:"C7DCD6CE-CF4F-4BAD-8335-94E3FB5C9EEE"}
 */
function trim(myString)
{
	return myString.replace(/^\s+/g,'').replace(/\s+$/g,'');
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"8F74DD46-3797-4205-85F5-1722E4C2AD6B"}
 */
function onDataChangeCodigobanco() {
	// TODO Auto-generated method stub
	if(codigobanco)
	{
		swift = GCtbmaestroclientes_to_swiftbancos.bic
		evt_changeItem()
	}
	else
	{
		swift = null;
	}
	/*if(swift == null)
	{		
		globals.GCshowErrorDialog('Codigo bancario no válido.',null,'Aceptar',null,null,null)
	}
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0ECFF7E2-0584-496F-97D7-6F036A4216A1"}
 */
function btn_print(event) {
	// TODO Auto-generated method stub
	if(idcliente)
	{
		var dcli = idcliente
		var hcli = idcliente
		var ddcli = 'a'
		var hdcli = 'ZZZZZ'
		var dprovin = 'a'
		var hprovin = 'zzzzzzzz'
		var orden = 0;
		var tipo = 1;
		
		globals.btn_runJasperReportListadoClientes(dcli, hcli,ddcli,hdcli,orden,tipo,dprovin,hprovin)
		
		//globals.GCshowDialogListadoClientes('Listado de Clientes',1,null,null,null,null,null,null,null,null)
	}
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"732C6123-4881-46FD-B8E4-0DAC68ADC356"}
 */
function onDataChangeListadoClientes() {
	// TODO Auto-generated method stub
	if(ClienteID)
	{
		forms.dlg_ClientesGC.elements.idcodigo.editable = false;
		forms.dlg_ClientesGC.elements.idcodigo.bgcolor = '#f0f0f0';
		var result = foundset.selectRecord(ClienteID)
		var fsCount = databaseManager.getFoundSetCount(foundset);
		while(result==false)
		{
			if(fsCount == foundset.getSize()) return;
			foundset.setSelectedIndex(foundset.getSize());
			result = foundset.selectRecord(ClienteID);
		}
	}
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"6CFFDD1F-7F33-42C6-B254-9625B3314984"}
 */
function onDataChangeEmail() {
	// TODO Auto-generated method stub
	if(utils.stringPatternCount(emailcontacto,",") == 0
			&& utils.stringPatternCount(emailcontacto," ") == 0
			&& utils.stringPatternCount(emailcontacto,"@") == 1
			&& utils.stringPatternCount(emailcontacto,".") >= 1)
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"43AEEB98-8FFC-4A23-B618-E55FBBBB4A3A"}
 */
function onActionBtnAgentes(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_Clientes'
	//globals.GCshowDialogAgentes('Representantes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialogAgentes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialogAgentes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Representantes';
	//win.resizable = true;
	//win.show(forms.dialog_AgentesGC)
	win.show(forms.dlgAgentesGC)
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"7A3019F9-ABB6-4F82-B404-D3E220592258"}
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
	if(cif)
	{
		//cif = utils.stringReplace(cif,'-','');
		cif = utils.stringTrim(cif);
		cif = utils.stringReplace(cif,' ','');
		if(pais == 'ES' && cif.length != 9) 
		{
			globals.GCshowErrorDialog('En España el CIF se compone de 9 cifras. Corrijalo.',null,'Aceptar',null,null,null)
			elements.fld_cif.requestFocus()
			elements.fld_cif.selectAll()
		}
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"F45A281E-8A56-4C18-B78A-02AF5B6E2BF3"}
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
					tipoiva = 21;
					break;
				}
				case '02': 
				{
					provincia = 'ALBACETE';
					tipoiva = 21;
					break;
				}
				case '03': 
				{
					provincia = 'ALICANTE';					
					tipoiva = 21;
					break;
				}
				case '04': 
				{
					provincia = 'ALMERÍA';					
					tipoiva = 21;
					break;
				}
				case '33': 
				{
					provincia = 'ASTURIAS';					
					tipoiva = 21;
					break;
				}
				case '05': 
				{
					provincia = 'ÁVILA';
					tipoiva = 21;
					break;
				}
				case '06': 
				{
					provincia = 'BADAJOZ';					
					tipoiva = 21;
					break;
				}
				case '08': 
				{
					provincia = 'BARCELONA';					
					tipoiva = 21;
					break;
				}
				case '09': 
				{
					provincia = 'BURGOS';					
					tipoiva = 21;
					break;
				}
				case '10': 
				{
					provincia = 'CÁCERES';					
					tipoiva = 21;
					break;
				}
				case '11': 
				{
					provincia = 'CÁDIZ';					
					tipoiva = 21;
					break;
				}
				case '39': 
				{
					provincia = 'CANTABRIA';					
					tipoiva = 21;
					break;
				}
				case '12':
				{
					provincia = 'CASTELLÓN';					
					tipoiva = 21;
					break;
				}
				case '51':
				{
					provincia = 'CEUTA';
					tipoiva = 0;
					break;
				}
				case '13':
				{
					provincia = 'CIUDAD REAL';					
					tipoiva = 21;
					break;
				}
				case '14':
				{
					provincia = 'CÓRDOBA';					
					tipoiva = 21;
					break;
				}
				case '15':
				{
					provincia = 'CORUÑA, A';					
					tipoiva = 21;
					break;
				}
				case '16':
				{
					provincia = 'CUENCA';					
					tipoiva = 21;
					break;
				}
				case '17':
				{
					provincia = 'GIRONA';					
					tipoiva = 21;
					break;
				}
				case '18':
				{
					provincia = 'GRANADA';					
					tipoiva = 21;
					break;
				}
				case '19':
				{
					provincia = 'GUADALAJARA';					
					tipoiva = 21;
					break;
				}
				case '20':
				{
					provincia = 'GUIPÚZCOA';					
					tipoiva = 21;
					break;
				}
				case '21':
				{
					provincia = 'HUELVA';					
					tipoiva = 21;
					break;
				}
				case '22':
				{
					provincia = 'HUESCA';					
					tipoiva = 21;
					break;
				}
				case '07':
				{
					provincia = 'ILLES BALEARS';					
					tipoiva = 21;
					break;
				}
				case '23':
				{
					provincia = 'JAÉN';					
					tipoiva = 21;
					break;
				}
				case '24':
				{
					provincia = 'LEÓN';					
					tipoiva = 21;
					break;
				}
				case '25':
				{
					provincia = 'LLEIDA';					
					tipoiva = 21;
					break;
				}
				case '27':
				{
					provincia = 'LUGO';					
					tipoiva = 21;
					break;
				}
				case '28':
				{
					provincia = 'MADRID';
					tipoiva = 21;
					break;
				}
				case '29':
				{
					provincia = 'MÁLAGA';					
					tipoiva = 21;
					break;
				}
				case '52':
				{
					provincia = 'MELILLA';					
					tipoiva = 0;
					break;
				}
				case '30':
				{
					provincia = 'MURCIA';					
					tipoiva = 21;
					break;
				}
				case '31':
				{
					provincia = 'NAVARRA';					
					tipoiva = 21;
					break;
				}
				case '32':
				{
					provincia = 'OURENSE';					
					tipoiva = 21;
					break;
				}
				case '34':
				{
					provincia = 'PALENCIA';					
					tipoiva = 21;
					break;
				}
				case '35':
				{
					provincia = 'PALMAS, LAS';	
					tipoiva = 0;
					break;
				}
				case '36':
				{
					provincia = 'PONTEVEDRA';					
					tipoiva = 21;
					break;					
				}
				case '26':
				{
					provincia = 'RIOJA, LA';					
					tipoiva = 21;
					break;
				}
				case '37':
				{
					provincia = 'SALAMANCA';					
					tipoiva = 21;
					break;
				}
				case '38':
				{
					provincia = 'S.C.TENERIFE';		
					tipoiva = 0;
					break;
				}
				case '40':
				{
					provincia = 'SEGOVIA';
					tipoiva = 21;
					break;
				}
				case '41':
				{
					provincia = 'SEVILLA';					
					tipoiva = 21;
					break;
				}
				case '42':
				{
					provincia = 'SORIA';					
					tipoiva = 21;
					break;
				}
				case '43':
				{
					provincia = 'TARRAGONA';					
					tipoiva = 21;
					break;
				}
				case '44':
				{
					provincia = 'TERUEL';					
					tipoiva = 21;
					break;
				}
				case '45':
				{
					provincia = 'TOLEDO';					
					tipoiva = 21;
					break;
				}
				case '46':
				{
					provincia = 'VALENCIA';					
					tipoiva = 21;
					break;
				}
				case '47':
				{
					provincia = 'VALLADOLID';					
					tipoiva = 21;
					break;
				}
				case '48':
				{
					provincia = 'VIZCAYA';					
					tipoiva = 21;
					break;
				}
				case '49':
				{
					provincia = 'ZAMORA';					
					tipoiva = 21;
					break;
				}
				case '50':
				{
					provincia = 'ZARAGOZA';
					tipoiva = 21;
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"EB671316-69F1-48B7-AD4B-99CAD62A735D"}
 */
function onActionmailcc(event) {
	// TODO Auto-generated method stub
	elements.fld_numproveedor.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"696B474D-E068-434E-B81D-CB3DA69ACB14"}
 */
function onDataChangeEmailCC() {
	if(emailcc){
	if(utils.stringPatternCount(emailcc,",") == 0
			&& utils.stringPatternCount(emailcc," ") == 0
			&& utils.stringPatternCount(emailcc,"@") == 1
			&& utils.stringPatternCount(emailcc,".") >= 1)
			{
				return
			}
			else
			{
				elements.fld_emailcc.selectAll()
				elements.fld_emailcc.requestFocus()
				globals.GCshowInfoDialog("Debes introducir una dirección de correo válida.", null,'Aceptar', null, null, null);			
			}
	}
}

/**
*
* @SuppressWarnings(deprecated)
*
*
 * @properties={typeid:24,uuid:"5A29C3D2-FC6F-4A88-B673-E466794D8EA1"}
 */
function btn_sendEmail2()
{
	if(emailcc) 
	{		
		
		if(utils.stringPatternCount(emailcc,",") == 0
		&& utils.stringPatternCount(emailcc," ") == 0
		&& utils.stringPatternCount(emailcc,"@") == 1
		&& utils.stringPatternCount(emailcc,".") >= 1)
		{
			/*if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
			{
				//var url = 'mailto:your.friend@doesntexist.com?cc=another.friend@doesntexist.com,yetanother.friend@doesntexist.com&bcc=yourboss@doesntexist.com&reply-to=me@myadress.com&subject=mailto%20scheme&body=Hello%20Everybody'
				
				var url = 'mailto:'+emailcontacto+'?'
				//application.showURL(url)
				if(utils.stringMiddle(application.getOSName(),1,7) == "Windows")
				{
					application.executeProgram('rundll32', 'url.dll,FileProtocolHandler', url)
				}
			}
			else
			{*/
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
					globals.GCFormulario = 'dlg_Clientes2'
					globals.GCshowDialogEnvioMail('Envio EMail',1,null,null,null,null,null,null,null,null)
				}
			}
			//}
		}
		else
		{
			globals.GCshowInfoDialog("Debes introducir una dirección de correo válida.", null,'Aceptar', null, null, null);			
		}
	}
	
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"65D19A5F-FEE8-41A6-B7F0-5FE0C9E6BD62"}
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
*
*
*
 * @properties={typeid:24,uuid:"3C763174-5CB2-44CC-87A5-BC94D169821A"}
 */
function valuelistclientes(){
	application.setValueListItems('ListaClientes2GC',new Array())
	
	var query = "select id,idcliente,DescCliente from tbmaestroclientes \
				ORDER BY idcliente";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999999)
	var rows = dataset.getMaxRowIndex()
	//var uuid = dataset.getValue(1,1);
	var codcli = dataset.getValue(1,2);
	var desccli = dataset.getValue(1,3);
	
	var tit =  new Array(codcli+'  -  '+desccli);	
	var uid = new Array(codcli.toString());
	
	for(var i=2;i<=rows;i++)
	{
		var uuid = dataset.getValue(i,1);
		//codcli = dataset.getValue(i,2);
		desccli = dataset.getValue(i,3);
		
		var titulo2 =  new Array(codcli+'  -  '+desccli);	
		//var uid2 = new Array(codcli.toString());
		var uid2 = new Array(uuid);
		
		tit = tit.concat(titulo2)
		uid = uid.concat(uid2)
	}
	//application.setValueListItems('ListaClientes2GC',tit,uid)
	application.setValueListItems('ListaClientes2GC',/*dataset*/tit,uid)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2FE3F46E-463A-4A1E-99FF-26D759CF904F"}
 */
function onShow(firstShow, event) {
	if(foundset.getSize() > 1) valuelistclientes()

}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"4CDFFF65-D029-4855-8CDA-CC85D5F9CC40"}
 */
function onDataChangePais() {
	if(pais)
	{
		if(pais != 'ES')
		{
			tipoiva = 0;
		}
		else
		{
			tipoiva = 21;
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"365E999B-1820-4034-8884-80B0BCFC65B5"}
 */
function onActionBtnCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ClientesGC';
	//globals.GCshowDialogClientes('BD Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Clientes2')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Clientes2", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Clientes';
	//win.resizable = true;
	//win.show(forms.dialog_Clientes2GC)
	win.show(forms.dlgClientes2GC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F8E889D5-AE54-4656-A25A-A5F5F96DFD6A"}
 */
function btn_comprcifdni(event) {
	// TODO Auto-generated method stub
	//if(!globals.GCisEditing())
	//{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbciferroneos')  
		vSet.loadAllRecords()
		vSet.deleteAllRecords()
		 
		if(forms.dlg_ClientesGC.id) 
		{
			var cifcli = forms.dlg_ClientesGC.cif;
			var idcli = forms.dlg_ClientesGC.idcliente;
			var desccli = forms.dlg_ClientesGC.desccliente;
			var paiscli = forms.dlg_ClientesGC.pais;
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
			globals.GCshowInfoDialog('El CIF/DNI de este cliente es correcto.',null,'Aceptar',null,null,null)
		}
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"F1F9879B-2EB7-46A3-B1F7-76DA79338D0B"}
 */
function btn_Documentacion(event) {
	//if(globals.GCisEditing()) forms.FrmClientesGC.btn_cancel()
	globals.GCFormulario = 'dlg_ClientesGC'; 
	if(idcliente)
	{
		globals.COD = idcliente;
		globals.GCshowDialogClientesDocumentacion('Nuevo Documento', null, null, null, null, null, null, null, null, null);
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
 *
 *
 * @properties={typeid:24,uuid:"6087CB92-291C-4E71-8F41-FA6056BE4267"}
 */
function onActionObservacion(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ClientesGC';
	//globals.GCshowDialogObservacion('BD Observaciones', 1, null, null, true,null, null, null, null, null);
	var win = application.getWindow('Observaciones')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Observaciones", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Observaciones';
	//win.resizable = true;
	win.show(forms.dlgObservacionGCNG)
	//win.show(forms.dialog_ObservacionGC)
}
