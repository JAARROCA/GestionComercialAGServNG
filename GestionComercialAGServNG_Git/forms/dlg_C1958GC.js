/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"618EE8BB-C6EF-4050-BEB6-B9E8E45F0452"}
 */
var TipoFicheroSEPA = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"55ECA1B1-1157-4D4A-96A5-D7EB923B6819"}
 */
var IdentificadorAcreedor = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"BDA0B5EA-7E63-4F29-823B-55F1EF963F10"}
 */
var NombreAcreedor = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"84762A0D-76C5-4615-A943-F68164203A1B"}
 */
var NombreCuenta = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"C72C3915-EAD6-4B53-BFA5-A52E8B6025C3"}
 */
var SWIFT = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"3A5446C4-F4C3-455B-92E4-D84E52493D81"}
 */
var IBAN = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"E5386C91-BD5D-49F9-88FA-E75D8A1939BB"}
 */
var ncuenta = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"CA9A59B1-E7FF-4E0C-90B5-53008947A691"}
 */
var digitocontrol = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"38D3144C-D9D4-4DAE-9404-C0BC5A16D667"}
 */
var sucursal = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"8674FBB6-FDAC-4100-A7EC-91E273FDDAAA"}
 */
var idbanco = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"F8C4A683-0DD2-4F36-8F28-F127D6127A5D",variableType:8}
 */
var FormatoFichero = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"981223D6-F83E-445F-83A1-0B42CAF75326"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"4472AC16-867B-4865-ACA4-54129380812B"}
 */
function onShow() {
	// TODO Auto-generated method stub
	/*if(globals.CobroPago == 1)
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
	}*/
	NombreAcreedor = null;
	globals.TipoCuaderno = 1;	
	application.setValueListItems('NombreCuenta',new Array())
	
	
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT || 
	application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) elements.lblaviso.visible = true;
	else elements.lblaviso.visible = false;
	FormatoFichero = 0;
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
 
    var query = "select [Pais],[CIF] from [parametrosaplicacion]";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Pais = dataset.getValue(1, 1);
	var CIF = dataset.getValue(1, 2);
	query = "select [IDBanco],[Sucursal],[Sufijo],[Pais],[NCuentaIBAN] from [dbo].[MaestroBancosCtasCargo] where [CodigoCtaBanco] = '" + globals.CuentaBanco + "'"
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	//var IDBanco = dataset.getValue(1, 1)
	//var Sucursal = dataset.getValue(1, 2)
	var Sufijo = dataset.getValue(1, 3)
	if(Sufijo == null || Sufijo == '' || Sufijo == '   ')
	{
		Sufijo = '000'
	}
	if(globals.CodigoEmisorSEPA == null)
	{
		if(Pais && CIF)
		{
			var DC = CalculoDC(CIF,Pais)
			globals.CodigoEmisorSEPA = Pais + DC + Sufijo +CIF;			
		}		
	}
	onDataChangecuenta()
	
}

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"86ECF963-82EC-472A-82F5-49EC4A32EBBC"}
 */
var Pais = '';

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"C5C4DBB3-F9E6-4506-90FC-2BFAAB059F29"}
 */
function onDataChangecuenta() {
	// TODO Auto-generated method stub
	application.setValueListItems('NombreCuenta',new Array())
	var query = "select [Pais],[CIF] from [parametrosaplicacion]";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Pais = dataset.getValue(1, 1);
	var CIF = dataset.getValue(1, 2);
	query = "select [IDBanco],[Sucursal],[Sufijo],[Pais],[NCuentaIBAN],[NombreEntidad],[digitocontrol],[ncuenta] from [dbo].[MaestroBancosCtasCargo] "+
	"where [CodigoCtaBanco] = '" + globals.CuentaBanco + "'"
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	idbanco = dataset.getValue(1, 1)
	sucursal = dataset.getValue(1, 2)
	digitocontrol = dataset.getValue(1, 7)
	ncuenta = dataset.getValue(1, 8)
	globals.DescCuentaBanco = dataset.getValue(1, 6)
	var Sufijo = dataset.getValue(1, 3)
	if(Sufijo == null)
	{
		Sufijo = '000'
	}
	
	if(Pais != null && CIF != null)
	{
		CIF = CIF.replace('ES','');
		CIF = utils.stringTrim(CIF);
		var DC = CalculoDC(CIF,Pais)
		globals.CodigoEmisorSEPA = Pais + DC + Sufijo +CIF
	}
	IdentificadorAcreedor = globals.CodigoEmisorSEPA;
	
	var titulo =  new Array(globals.DescCuentaBanco)
	
		/*query = "SELECT nomacreedor FROM cbancoscuentasacreedor "+
				"WHERE IdEjercicio = '" + globals.Empresa + "' and "+
				"cuentabanco ='"+globals.CuentaBanco+"'";
		var dataset2 = databaseManager.getDataSetByQuery(globals.conex, query, null, 99999)
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
 * Perform the element default action.
 *
 * @param {String} CC
 *
 * @param {String} Pa
 *
 * @return {Number}
 *
 * @properties={typeid:24,uuid:"90CBBD24-BBD7-499E-B2DC-8AEBE38FE662"}
 */
function CalculoDC(CC,Pa) {
	  
	//Limpiamos el numero de IBAN
	var account = CC
	account = account.toUpperCase();  //Todo a Mayus
	account = trim(account); //Quitamos blancos de principio y final.
	account  = account.replace(/\s/g, "");  //Quitamos blancos del medio.
	             
	var letra1,letra2,letra3,num1,num2,num3;
	var isbanaux;
	//var numeroSustitucion;
	             
	            //Generamos IBAN Temporal
	var codigopais = Pa.toUpperCase();
	             
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
 * @properties={typeid:24,uuid:"1871CC0C-8E62-4881-AE10-F81FEE4DFF56"}
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
 * @properties={typeid:24,uuid:"92AA7B64-571D-471B-86C6-E0A0659017B6"}
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
 * @properties={typeid:24,uuid:"C618888B-0A65-4977-9161-C835C17A2210"}
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
 *
 * @properties={typeid:24,uuid:"13C9B36C-BB0A-4E76-A41A-B40F427FCDF6"}
 */
function onActionnombrecuenta(event) {
	// TODO Auto-generated method stub
	elements.FechaCargoAbono.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"480B5D86-B677-4191-9AFB-C9DE995D5A4C"}
 */
function onDataChangenombrecuenta() {
	// TODO Auto-generated method stub
	var query = "select [IDBanco],[Sucursal],[Sufijo],[Pais],[NCuentaIBAN],[NombreEntidad],[digitocontrol],[ncuenta],[swift] from [dbo].[MaestroBancosCtasCargo] where [CodigoCtaBanco] = '" + globals.CuentaBanco + "'"
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
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		idbanco = dataset.getValue(1, 3)
		sucursal = dataset.getValue(1, 4)
		digitocontrol = dataset.getValue(1, 5)
		ncuenta = dataset.getValue(1, 6)
		IBAN = dataset.getValue(1, 7)
		IdentificadorAcreedor = dataset.getValue(1, 1);
		NombreAcreedor = NombreCuenta;
	}*/	
}
