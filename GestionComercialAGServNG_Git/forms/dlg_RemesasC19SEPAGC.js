/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FAF6D032-D7BF-4B68-B072-F769D5787DF1"}
 */
var IdentificadorAcreedor = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"E8F448C9-5055-40C0-9F18-5BA2C90236C1"}
 */
var NombreAcreedor = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E45B866E-0F64-4CD3-91E2-9953B4FF42BA"}
 */
var NombreCuenta = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3B9649E2-B74C-4B53-850A-345EB0031AB6"}
 */
var SWIFT = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3A4F09F7-B9C7-4E9F-8334-BD8069898874"}
 */
var IBAN = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E80BB273-03D4-45E9-B159-00047F43E1B1"}
 */
var ncuenta = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F123FD79-5D95-4FB1-BB8C-0AE7CF96B245"}
 */
var digitocontrol = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A59C45FC-0543-4B98-B237-FA7A50E39C67"}
 */
var sucursal = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8599EC7B-4623-4189-A4B6-D10FAD040D96"}
 */
var idbanco = null;

/**
 * @type {Number}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"CF15A0D9-0933-4A67-86AB-AFCA9CBF4034",variableType:8}
 */
var FormatoFichero = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"33463FBD-013A-4AD6-8D3B-8252B8BE6BBD"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ) globals.LoadingGC()
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"144CEFD9-0A37-47B1-A848-45B6472E7B53"}
 */
function onShow() {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ) elements.lblaviso.visible = true;
	else elements.lblaviso.visible = false;
	globals.TipoCuaderno = 1;
	FormatoFichero = 0;
	if(globals.CobroPago == 1)
	{
		elements.FormatoFicheroCobros.visible = true
		elements.FormatoFicheroCobros.enabled = true
		elements.FormatoFicheroPagos.visible = false
		elements.FormatoFicheroPagos.enabled = false
	}
	else
	{
		elements.FormatoFicheroCobros.visible = false
		elements.FormatoFicheroCobros.enabled = false
		elements.FormatoFicheroPagos.visible = true
		elements.FormatoFicheroPagos.enabled = true
	}
	onDataChangeCobroPago()
	globals.CuentaBanco = null;
	globals.DescCuentaBanco = null;
	globals.FechaCargoAbono = null;
    globals.CodigoEmisorSEPA = null;
    globals.RefDocumento = null;
	idbanco = null;
	sucursal = null;
	digitocontrol = null;
	ncuenta = null;
	IBAN = null; 
	SWIFT = null;
	NombreCuenta = null;
	NombreAcreedor = null;
	IdentificadorAcreedor = null;
	application.setValueListItems('NombreCuenta',new Array())
}

/**
 * Perform the element default action.
 *
 * @param {String} CC
 *
 * @param {String} Pais
 *
 * @return {Number}
 *
 * @properties={typeid:24,uuid:"D0604A7D-1AA0-450B-9E34-78E323A843F6"}
 */
function CalculoDC(CC,Pais) {
	  
	//Limpiamos el numero de IBAN
	var account = CC
	account = account.toUpperCase();  //Todo a Mayus
	account = trim(account); //Quitamos blancos de principio y final.
	account  = account.replace(/\s/g, "");  //Quitamos blancos del medio.
	             
	var letra1,letra2,letra3,num1,num2,num3;
	var isbanaux;
	//var numeroSustitucion;
	             
	            //Generamos IBAN Temporal
	var codigopais = Pais.toUpperCase();
	             
	isbanaux = codigopais + '00' + account;
	  
	// Cambiamos las letras por numeros.
	letra1 = isbanaux.substring(0, 1);
	letra2 = isbanaux.substring(1, 2);
	letra3 = isbanaux.substring(4, 5);
	             
	num1 = getnumIBAN(letra1);
	num2 = getnumIBAN(letra2); 
	num3 = getnumIBAN(letra3); 
	             
	isbanaux = String(num1) + String(num2) + isbanaux.substr(2, isbanaux.length - 2); 
	isbanaux = isbanaux.substr(0,6) + String(num3) + isbanaux.substr(7);                
	// Movemos los 6 primeros caracteres al final de la cadena.         
	isbanaux = isbanaux.substr(6,isbanaux.length - 6) + isbanaux.substr(0,6);
	
	             
	//Calculamos el resto    
	
	var parte1 = isbanaux.substring(0,13)
	var parte2 = isbanaux.substring(13)
	var n = parte2.length
	var l = Digitos('1',n)
	var resto = ((parte1 % 97)*(l/*10000000000000*/ % 97) + (parte2 % 97)) % 97
	//var resto = isbanaux % 97;            
	var DC = 98 - resto;
	             
	return DC
	
	  
}

/**
* Perform the element default action.
*
* @param {String} myString
*
*
* @return {String}
*
*
 * @properties={typeid:24,uuid:"8797D0AD-0155-43F4-8251-716FDFA49747"}
 */
function trim(myString)
{
	return myString.replace(/^\s+/g,'').replace(/\s+$/g,'');
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
 * @properties={typeid:24,uuid:"F1AC38DD-E37D-4398-AE3C-93863D125E2E"}
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
 * @properties={typeid:24,uuid:"0682B735-852F-4D3D-B4F3-B0B94034E14D"}
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
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F9BD3029-32BF-4253-A1C6-D79B12770637"}
 */
function onActioncuentabanco(event) {
	// TODO Auto-generated method stub
	onDataChangecuenta()
	elements.fechacargoabono.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C466648F-CB9D-400C-99D0-D7A80F204AAF"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	elements.refdocumento.requestFocus()
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4F922820-534B-4CB9-B64E-0B5D87C34A56"}
 */
var Pais = '';

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"1033AEB6-674B-4492-B0EF-4E0E24C67005"}
 */
function onDataChangecuenta() {
	// TODO Auto-generated method stub
	application.setValueListItems('NombreCuenta',new Array())
	Pais = gcparametrosaplicacion_to_parametrosaplicacion.pais;
	globals.CodigoEmisorSEPA = null;
	var CIF = gcparametrosaplicacion_to_parametrosaplicacion.cif;
	CIF = utils.stringTrim(utils.stringReplace(CIF,'ES',''))
	var query = "select [IDBanco],[Sucursal],[Sufijo],[Pais],[NCuentaIBAN],[NombreEntidad],[digitocontrol],[ncuenta] from [MaestroBancosCtasCargo] where " + 
	" [CodigoCtaBanco] = '" + globals.CuentaBanco + "'"
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	idbanco = dataset.getValue(1, 1)
	sucursal = dataset.getValue(1, 2)
	digitocontrol = dataset.getValue(1, 7)
	ncuenta = dataset.getValue(1, 8)
	globals.DescCuentaBanco = dataset.getValue(1, 6)
	IdentificadorAcreedor = globals.CodigoEmisorSEPA;
	var Sufijo = dataset.getValue(1, 3)
	if(! Sufijo || Sufijo == null || Sufijo == '' || Sufijo == '   ')
	{
		Sufijo = '000'
	}
	
		if(Pais != null && CIF != null)
		{
			var DC = CalculoDC(CIF,Pais)
			globals.CodigoEmisorSEPA = Pais + DC + Sufijo +CIF
			
		}
	var titulo =  new Array(globals.DescCuentaBanco)
	
		/*query = "SELECT nomacreedor FROM cbancoscuentasacreedor "+
				"WHERE IdEjercicio = '" + globals.Empresa + "' and "+
				"cuentabanco ='"+globals.CuentaBanco+"'";
		var dataset2 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 99999)
		var rows = dataset2.getMaxRowIndex()
		if(rows > 0)
		{
			titulo = titulo.concat(dataset2.getColumnAsArray(1))
		}
		*/
		
		application.setValueListItems('NombreCuenta',titulo)
		NombreCuenta = globals.DescCuentaBanco
		onDataChangenombrecuenta()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"4E282228-5A76-4091-B300-1080F15A7A22"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	if(globals.FechaCargoAbono != null)
	{
		var Fecha = globals.FechaCargoAbono
	    var dia = Fecha.getDate();
		dia = dia.toString()
	    if (dia.length < 2)
	    {
	        dia = "0" + dia;
	    }
	    var mes = Fecha.getMonth() + 1;
	    mes = mes.toString()
	    if (mes.length < 2)
	    {
	        mes = "0" + mes;
	    }
	    var agno = Fecha.getFullYear()
	    agno = agno.toString()
		globals.FechaFichero = globals.CuentaBanco+dia+mes+agno
	    globals.FicheroGenerar = "C:/tmp/"+globals.FechaFichero+".dat";
	    globals.NombreFichero347 = globals.FechaFichero+".dat";
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"1CCA595C-274B-42AA-8B80-3E0B408CCC1E"}
 */
function onActionBtnCuenta(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_RemesasC19SEPAGC'
	globals.GCshowDialogCuentasBancos('Cuentas Bancos', 1, null, null, true, null, null, null, null, null);
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"63B0923B-37D9-4E3F-8788-F5CED8666E42"}
 */
function onDataChangeCobroPago() {
	// TODO Auto-generated method stub
	if(globals.CobroPago == 1)
	{
		elements.FormatoFicheroCobros.visible = true;
		elements.FormatoFicheroPagos.visible = false;
		FormatoFichero = 0
	}
	else if(globals.CobroPago == 2)
	{
		elements.FormatoFicheroCobros.visible = false;
		elements.FormatoFicheroPagos.visible = true;
		FormatoFichero = 0
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"98FA61F5-6676-4B10-87FD-7B8465DEF5E2"}
 */
function btnBancos(event) {
	// TODO Auto-generated method stub
	if(globals.CuentaBanco)
	{
		var win = application.getWindow('Maestros')
		//setup the record status
		if(win != null)
		{
			win.destroy();
		}
		
		win = application.createWindow("Maestros", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(10, 10, 1100, 600);
		win.title = 'BD Bancos';
		globals.GCnav_search = null;
		globals.GCFormulario = 'dlg_RemesasC19SEPAGC';
		forms.FrmBancosCuentasCargoGC.controller.show(win);
		forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(9) 
		
	}
	else
	{
		 win = application.getWindow('Maestros')
			//setup the record status
			if(win != null)
			{
				win.destroy();
			}
			
			win = application.createWindow("Maestros", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(10, 10, 1100, 600);
			win.title = 'BD Bancos';
			globals.GCnav_search = null;
			globals.GCFormulario = 'dlg_RemesasC19SEPAGC';
			forms.FrmBancosCuentasCargoGC.controller.show(win);
			forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(9) 
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4C07E17D-8BA4-4976-9990-76DEAFA1F4EC"}
 */
function onActionnombrecuenta(event) {
	// TODO Auto-generated method stub
	elements.fechacargoabono.requestFocus()
}

/**
 * Handle changed data.
 *
* @properties={typeid:24,uuid:"D5B954E6-760D-4C66-A134-651AF8B5AFEA"}
 */
function onDataChangenombrecuenta() {
	// TODO Auto-generated method stub
	var query = "select [IDBanco],[Sucursal],[Sufijo],[Pais],[NCuentaIBAN],[NombreEntidad],[digitocontrol],[ncuenta],[swift] from [MaestroBancosCtasCargo] where " + 
	" [CodigoCtaBanco] = '" + globals.CuentaBanco + "'"
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	idbanco = dataset.getValue(1, 1)
	sucursal = dataset.getValue(1, 2)
	digitocontrol = dataset.getValue(1, 7)
	ncuenta = dataset.getValue(1, 8)
	IBAN = dataset.getValue(1, 5)
	SWIFT = dataset.getValue(1, 9)
	IdentificadorAcreedor = globals.CodigoEmisorSEPA;
	NombreAcreedor = globals.GCNombreEmpresa;
	/*var nom = dataset.getValue(1, 6)
	if(nom != NombreCuenta)
	{
		query = "SELECT [Identificador],[NomAcreedor],[CodigoBanco]"+
				",[CodigoSucursal],[CodigoDC],[CodigoCuenta],[CodigoIBAN] "+
				"FROM [dbo].[cBancosCuentasAcreedor] where IdEjercicio = '" + globals.Empresa +
				"' AND [NomAcreedor] = '" + NombreCuenta + "'";
		dataset = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 1)
		idbanco = dataset.getValue(1, 3)
		sucursal = dataset.getValue(1, 4)
		digitocontrol = dataset.getValue(1, 5)
		ncuenta = dataset.getValue(1, 6)
		IBAN = dataset.getValue(1, 7)
		IdentificadorAcreedor = dataset.getValue(1, 1);
		NombreAcreedor = NombreCuenta;
	}*/	
}
