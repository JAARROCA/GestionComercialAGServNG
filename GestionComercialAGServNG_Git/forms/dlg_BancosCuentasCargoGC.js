/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"6042BD17-E0E5-42F5-875C-43065016662A"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 *
 * @properties={typeid:24,uuid:"0A521440-4047-4481-9494-687061A0F4D0"}
 */
function validate_autoEnter()
{
	//elements.BtnCuentaContable.visible = false
	/*elements.lblidcodigo.bgcolor = '#f0f0f0'
	elements.lblidcodigo.readOnly = true
	elements.swift.bgcolor = '#f0f0f0'
	elements.swift.readOnly = true*/
	//idejercicio = globals.Empresa
	
}

/**
 *
 * @return {Number}
 * @properties={typeid:24,uuid:"EA828B0A-D2BC-4D8A-A373-73D26CF65E40"}
 */
function validate_beforeDelete()
{
	return 0
}

/**
 *
 * @properties={typeid:24,uuid:"8A1E7DD9-A776-4F52-BFBD-1243F47F4A8B"}
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
 *
 * @properties={typeid:24,uuid:"E6270C8B-B0EC-4882-BF6D-6E8B93EEEFB2"}
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
 *
 * @properties={typeid:24,uuid:"C155460F-3051-4E5D-B99E-4CF54C091F80"}
 */
function onActionpob(event) {
	// TODO Auto-generated method stub
	elements.fld_codigopaisue.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2236B78A-F93D-4F9D-AEF6-49579E5B1FA0"}
 */
function onActiondir(event) {
	// TODO Auto-generated method stub
	elements.fld_poblacion.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"AAD30EB3-F9E5-4F8C-8BD1-98AAC765DAFE"}
 */
function onActioncif(event) {
	// TODO Auto-generated method stub
	elements.fld_riesgoconcedido.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"9431ECF2-7E50-4D25-9C66-04879442791B"}
 */
function onActioncontacto(event) {
	// TODO Auto-generated method stub
	elements.fld_comisionefecto.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"3706A8BE-66CC-49DD-9E14-E799ED613972"}
 */
function onActioncodpostal(event) {
	// TODO Auto-generated method stub
	elements.fld_cif.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"5736CDFD-A3ED-48E5-80E9-32E47186E8C6"}
 */
function onActionriesgoconcedido(event) {
	// TODO Auto-generated method stub
	elements.fld_email.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"9E537D1B-144C-4A78-A11E-7314B0C20C0F"}
 */
function onActionmail(event) {
	// TODO Auto-generated method stub
	elements.fld_contacto.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"85EB9E2D-C44D-4487-BB9F-4AE71C9C4420"}
 */
function onActioncomisionefecto(event) {
	// TODO Auto-generated method stub
	elements.fld_importeminimo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"288B2E81-3AB2-46E5-B086-8330F8B0FEFD"}
 */
function onActioniban(event) {
	// TODO Auto-generated method stub
	elements.fld_codigobanco.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"243C3533-122A-4011-B5A3-8354F4B4E032"}
 */
function onActioncodigobanco(event) {
	// TODO Auto-generated method stub
	if(pais != null)
	{
		evt_changeItempais()
	}
		elements.fld_codigosucursal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"462CC6CB-AA4E-4B14-9D6E-6C783FD20569"}
 */
function onActioncodigosucursal(event) {
	// TODO Auto-generated method stub
	if(pais != null)
	{
		evt_changeItempais()
	}
	elements.fld_codigodc.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"68BEE96C-CAFE-4229-B6A6-DFB3DD58A9CB"}
 */
function onActioncodigodc(event) {
	// TODO Auto-generated method stub
	if(pais != null)
	{
		evt_changeItempais()
	}
	elements.fld_codigocuenta.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"5449ECDE-A8B9-4906-B318-375BD91EB52E"}
 */
function onActionPais(event) {
	// TODO Auto-generated method stub
	if(idbanco != null && sucursal != null && digitocontrol != null && ncuenta != null)
	{
		evt_changeItempais()
	}
elements.fld_idbanco.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"E9DFA6D9-B6FF-43D3-923B-73EBBBBF110A"}
 */
function onActioncodigoine(event) {
	// TODO Auto-generated method stub
	elements.fld_numlinea.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"79AC168A-39B9-4C22-82B0-659115455F21"}
 */
function onActionnumlinea(event) {
	// TODO Auto-generated method stub
	elements.fld_contacto.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"998F7BC6-4072-4CC1-805D-F64E1A28D9DA"}
 */
function onActionintereses(event) {
	// TODO Auto-generated method stub
	elements.fld_comisionglobal.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"EAA65044-5479-4838-A610-4DBF3DAEA296"}
 */
function onActiondigitoiban(event) {
	// TODO Auto-generated method stub
	elements.fld_idtipoiva.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"32A7B326-63D2-4458-91F8-2137CE7D7160"}
 */
function onActionprefijoccciban(event) {
	// TODO Auto-generated method stub
	elements.fld_sufijo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"627C9DDB-6DB7-4923-A2A9-1317F439E96C"}
 */
function onActionsufijo(event) {
	// TODO Auto-generated method stub
	elements.fld_personacontacto.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"9462B844-2978-4F0E-A869-D40BE3C85796"}
 */
function onActionpersonacontacto(event) {
	// TODO Auto-generated method stub
	elements.fld_webbancaonline.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"1E8AD1EC-9E5A-4B28-967F-19FA86411428"}
 */
function onActiontelefono(event) {
	// TODO Auto-generated method stub
	elements.fld_cif.requestFocus()
}

/**
 *
 *
 * @properties={typeid:24,uuid:"B391BD8A-4744-4058-81DD-7B94614D206E"}
 */
function btn_sendEmail()
{
	globals.GCFormulario = 'dlg_BancosCuentasCargo'
	globals.GCshowDialogEnvioMail('Envio EMail',1,null,null,null,null,null,null,null,null)
	
	
}

/**
 *
 *
 *
 * @properties={typeid:24,uuid:"15A095D9-84E7-41AF-A9DB-55EC664D4CA2"}
 */
function btn_webBanca()
{
	if(webbancaonline) 
	{
		if((webbancaonline.indexOf('http://',0) >= 0 || webbancaonline.indexOf('https://',0) >= 0))
		{
			application.showURL(webbancaonline);	
		}
		else
		{
			application.showURL( 'http://' + webbancaonline);
		}
	}// create a file object
	
}

/**
 *
 *
 *
 * @properties={typeid:24,uuid:"CA2D6D47-3617-4767-8BEE-2C4AA26FAECA"}
 */
function evt_changeItem()
{
	if(idbanco)
	{
		swift = GCmaestrobancosctascargo_to_swiftbancos.bic
	}
	else
	{
		swift = null;
	}
	
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"633F5865-009A-493D-9571-6448770D7688"}
 */
function evt_changeItempais() {
	// TODO Auto-generated method stub
	if(idbanco != null && sucursal != null && digitocontrol != null && ncuenta != null)
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
 * @properties={typeid:24,uuid:"7CD58FB3-B54E-4007-9DE0-9F8C4F7C71CA"}
 */
function CalculoIBAN() {
	  
	//Limpiamos el numero de IBAN
	var account = idbanco + sucursal +	digitocontrol + ncuenta
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
	var DC = 98 - resto;
	             
	if(DC < 10) DC = '0'+ String(DC);
	var Ibanfinal = codigopais + DC + account;
	  
	ncuentaiban = Ibanfinal;
	
	  
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
 * @properties={typeid:24,uuid:"F8F033F8-911E-40C1-8F58-971A19EA81D4"}
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
 * @properties={typeid:24,uuid:"52B34769-11E7-47CD-83F0-532A850CCFBA"}
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
 * @properties={typeid:24,uuid:"6D1B3007-C7F2-4B53-889B-1D3E79558C0F"}
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
 *
 *
 * @properties={typeid:24,uuid:"7DAD08E0-D810-469B-83F9-1E20DA0EF483"}
 */
function onActionBtnPaises(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_BancosCuentasCargo'
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
 *
 * @properties={typeid:24,uuid:"09DCF8F2-9DD2-47D5-98A6-0289FF9BA7E0"}
 */
function onActioncodicocuenta(event) {
	// TODO Auto-generated method stub
	
		if(pais != null)
		{
			evt_changeItempais()
		}
	elements.fld_telefono.requestFocus()
	
}

/**
* Perform the element default action.
*
* @param {String} CodigoCuenta
*
*
* @return {String}
* @AllowToRunInFind
*
 *
 * @properties={typeid:24,uuid:"74F2B6B3-F848-4A06-A84C-F830B6467D47"}
 */
function getSWIFT(CodigoCuenta)
{
	var bic = null
	for(var i=0;i<CB.length;i++)
	{
		if(CB[i] == CodigoCuenta)
		{
			bic =  sw[i]
			break;
		}
	}
	return bic;
	
}

/**
*
*
 *
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"06A4B3A8-E8BF-43E0-B962-5E35F90C51E6",variableType:-4}
 */
var CB = new Array('1478','1479','1480','1488','1491','1494','1497','1502','1505','1506','1508','1522','1524','1525','1534','1538','1545',
	'0147','0151','0160','0161','0164','0166','0169','0171','0177','0178','0195','0199','0203','0206','1452','1460','1485','0106','0107',
	'0108','0131','0144','0145','0149','0150','0152','0154','0155','0156','0159','0162','0163','0167','0168','0172','0174','0179','0180',
	'0190','0196','0197','0201','0212','0213','0218','1451','1453','1454','1457','1459','1462','1463','1464','1465','1466','1467','1468',
	'1469','1470','1471','1472','1473','1474','1475','0003','0009','0011','0024','0030','0031','0042','0043','0048','0049','0050','0059',
	'0061','0063','0065','0083','0069','0072','0078','0086','0087','0089','0095','0104','0200','0202','0205','0208','0216','0189','2024',
	'2073','0004','0016','0021','0036','0056','0076','0082','0088','0109','0111','8835','6852','1127','0118','0127','0182','0185','0198',
	'0215','0217','0224','0226','0227','0239','1490','0488','1004','1302','1544','2000','2013','2038','2048','2080','2085','2086','2090',
	'2095','2100','2103','2108','2010','2017','2030','2031','2032','2037','2040','2041','2043','2051','2052','2054','2056','2069','2071',
	'2074','2077','2081','2092','2094','2096','2098','2099','2101','2104','2105','2106','2045','3001','3005','3007','3008','3009','3016',
	'3017','3018','3020','3023','3063','3064','3066','3067','3070','3076','3078','3080','3081','3096','3098','3102','3104','3111','3112',
	'3113','3114','3115','3117','3118','3119','3121','3123','3127','3159','8512','1113','1116','1156','1168','1164','1000','0013','0015',
	'0019','0046','0057','0058','0073','0075','0081','0085','0094','0096','0097','0100','0101','0113','0121','0122','0125','0128','0129',
	'0130','0132','0133','0136','0137','0138','0142','0184','0186','0188','0209','0210','0211','0219','0220','0221','0223','0225','0228',
	'0229','0231','0232','0233','0234','0235','0236','0237','0238','0486','0487','0489','1001','2066','3021','3022','3025','3029','3035',
	'3045','3056','3058','3059','3060','3061','3062','3082','3083','3084','3085','3089','3092','3093','3094','3095','3105','3110','3128',
	'3130','3134','3135','3138','3140','3144','3146','3147','3150','3152','3157','3160','3161','3162','3165','3166','3174','3172','3179',
	'3181','3183','3186','3187','3189','3190','3191','8233','1182','1191','1193','1196','1197','1173','1199','1209','1210','1221','1222',
	'1224','1227','1231','1248','1233','1234','1236','1238','1239','1240','1241','1242','1245','1249','1251','1252','1255','1273');

/**
*
*
 *
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"ED347005-0F4F-4BA9-B037-021436955498",variableType:-4}
 */
var sw = new Array('MLIBESM1XXX','NATXESMMXXX','VOWAES21XXX','PICTESMMXXX','TRIOESMMXXX','BCITESMMXXX','ESSIESMMXXX','IKBDESM1XXX',
	'ARABESMMXXX','MLCBESM1XXX','RCINFRPPXXX','EFGBESMMXXX','UBIBESMMXXX','BCDMESM1XXX','KBLXESMMXXX','ICBKESMMXXX','AGRIESMMXXX',
	'MGTCESMXXXX','CHASESM3XXX','BOTKESMXXXX','BKTRESM1XXX','BSCEESMMXXX','BESPESMMXXX','NACNESMMXXX','SMITESMXXXX','MITKESM1XXX',
	'ROYCESM1XXX','SANWESM1XXX','CRESESMMXXX','FUJIJPJTXXX','DKBBESM1XXX','UBSWESMMXXX','CRESESMMXXX','BOFAES2XXXX','LOYDESMMXXX',
	'BNLIESM1XXX','SOGEESMMAGM','BESMESMMXXX','PARBESMXXXX','DEUTESM1XXX','BNPAESMSXXX','NWBKESMXXXX','BPLCESMMXXX','BSUIESMMXXX',
	'BRASESMMXXX','ABNAESMMXXX','COBAESMXXXX','MIDLESMMXXX','UNCRESMMXXX','GEBAESMMXXX','BBRUESMXXXX','CCFRESMMXXX','BCITESMMXXX',
	'AGRIESMM','ILBKESMMXXX','BBPIESMMXXX','WELAESMMXXX','BESCESMMXXX','NAPBESMMXXX','COBFFRPPXXX','CARIESMMXXX','FCEFESM1XXX',
	'AGRIESB1XXX','PASCESMMXXX','NEWGESM1XXX','LLISESM1XXX','PRABESMMXXX','ASSCESM1XXX','PSABESM1XXX','NFFSESM1XXX','INGDESMMXXX',
	'FRANESM1XXX','EHYPESMXXXX','EEHDESM1XXX','SHSAESM1XXX','BPIPESM1XXX','ROYCESM1XXX','UCSSESM1XXX','PRIBESMXXXX','CITIESMXXXX',
	'CCSEESM1XXX','BDEPESM1XXX','FICDESM1XXX','ALLFESMMXXX','BALEES22XXX','ESPCESMMXXX','ETCHES2GXXX','BGUIES22XXX','BHROESM2XXX',
	'CGDIES2VXXX','BSCHESMMXXX','BCIOESMMXXX','MADRESMMXXX','BMARES2MXXX','BMAPESM1XXX','BARCESMMXXX','RENBESMMXXX','BAMUES22XXX',
	'PSTRESMMXXX','BAPUES22XXX','NORTESMMXXX','SIBBESBBXXX','CGDIES2CXXX','VASCES2PXXX','EXTEESMMXXX','PRVBESB1XXX','BNARESMMXXX',
	'DECRESM1XXX','CRLEESMMXXX','POHIESMMXXX','IBJTESM1XXX','CECAESMM024','CECAESMM073','BANDESSSXXX','CENTESMM','BCNDESM1XXX',
	'SABNESMMXXX','JOVEESBBXXX','PROGESMM','CASTES2SXXX','BOFAES2XXXX','DEEEESM1XXX','BAFOESMM','SBFCESMMXXX','BMEUESM1XXX',
	'SCBLESM1XXX','ASTUESMMXXX','BBVAESMMXXX','BBVAESMMXXX','UIJOESMMXXX','BCOEESMMXXX','DBOLESM1XXX','HLFXESMMXXX','SCFBESMMXXX',
	'UBSWESMMXXX','UNOEESM1XXX','EVOBESMMXXX','SELFESMMXXX','BFASESMMXXX','BCLEESMMXXX','BBVAESMMXXX','BACAESMMXXX','CECAESMMXXX',
	'CESCESBBXXX','CAHMESMMXXX','CECAESMM048','CAGLESMMVIG','CAZRES2ZXXX','CECAESMM086','CAAMES2AXXX','BASKES2BXXX','CAIXESBBXXX',
	'UCJAES2MXXX','CSPAES2L108','CECAESMM010','CECAESMM017','CECAESMM030','CECAESMM031','CECAESMM032','CECAESMM037','CECAESMM040',
	'CECAESMM041','CECAESMM043','CECAESMM051','CECAESMM052','CANVES2PXXX','CECAESMM056','CECAESMM069','CECAESMM071','CECAESMM074',
	'CVALESVVXXX','CECAESMM081','CECAESMM092','CECAESMM094','CSPAES2LXXX','CECAESMM098','CECAESMM099','CGGKES22XXX','CSSOES2SXXX',
	'CECAESMM105','CECAESMM106','CECAESMM045','BCOEESMM01 ','BCOEESMM005','BCOEESMM007','BCOEESMM008','BCOEESMM009','BCOEESMM016',
	'BCOEESMM017','BCOEESMM018','BCOEESMM020','BCOEESMM023','BCOEESMM063','BCOEESMM064','BCOEESMM066','BCOEESMM067','BCOEESMM070',
	'BCOEESMM076','BCOEESMM078','BCOEESMM080','BCOEESMM081','BCOEESMM096','BCOEESMM098','CCRIES2A102','BCOEESMM104','BCOEESMM111',
	'CCRIES2A112','BCOEESMM113','BCOEESMM114','BCOEESMM115','BCOEESMM117','CCRIES2A118','CCRIES2A119','CCRIES2A121','CCRIES2A123',
	'BCOEESMM127','BCOEESMM159','UCINESMMXXX','BSUDESM1XXX','SCSIESM1XXX','IRVTESM1XXX','BNACESM1XXX','ESBFESM1XXX','ICROESMMXXX',
	'SLBKESBBXXX','CATAESBBXXX','DEUTESBBXXX','GALEES2GXXX','BVADESMMXXX','BNPAESMMXXX','OPENESMMXXX','POPUESMMXXX','BSABESBBXXX',
	'BDERESMMXXX','BVALESMMXXX','PROAESMMXXX','GALIES2VXXX','BVICES21XXX','CBANESBBXXX','INBBESM1XXX','OCBAESM1XXX','CITIES2XXXX',
	'BAOFESM1XXX','BKBKESMMXXX','INALESM1XXX','CGDIESMMXXX','PRNEESM1XXX','MIKBESB1XXX','AREBESMMXXX','BADIESMMXXX','BKOAES22XXX',
	'BPMEESBBXXX','BEDFESM1XXX','BFIVESBBXXX','ALCLESMMXXX','ABBKESM1XXX','MDBOESM1XXX','PROAESMMXXX','BMCEESMMXXX','FIOFESM1XXX',
	'PRABESMMXXX','GEECESB1XXX','FIEIESM1XXX','IXIUESM1XXX','POPLESMMXXX','DSBLESMMXXX','INVLESMMXXX','POPIESMMXXX','CCOCESMMXXX',
	'PIESESM1XXX','LOYIESMMXXX','CSURES2CXXX','PSTRESMMXXX','TRESES2BXXX','GBMNESMMXXX','EMACESMMXXX','BCAEESMM','CECAESMM066',
	'BCOEESMM021','BCOEESMM022','CDENESBBXXX','CCRIES2A029','CLPEES2MXXX','CCRIES2A045','BCOEESMM056','CCRIES2AXXX','BCOEESMM059',
	'BCOEESMM060','CRCPES2CXXX','BCOEESMM062','CCRIES2A082','BCOEESMM083','CVRVES2BXXX','BCOEESMM085','BCOEESMM089','BCOEESMM092',
	'BCOEESM1093','CCRIES2A094','CCRIES2A095','CCRIES2A105','CCRIES2A110','BCOEESMM128','BCOEESMM130','BCOEESMM134','CCRIES2A135',
	'BCOEESMM138','BCOEESMM140','BCOEESMM144','CCCVESM1XXX','BCOEESMM147','BCOEESMM150','CCRIES2A152','CCRIES2A157','CCRIES2A160',
	'BCOEESMM161','BCOEESMM162','CCRIES2A165','BCOEESMM166','BCOEESMM174','CCOCESMMXXX','CCRIES2A179','BCOEESM1181','CASDESBBXXX',
	'CCRIES2A186','BCOEESMM187','BCOEESMM189','BCOEESMM190','BCOEESMM191','CSFAESM1XXX','HYVEESM1XXX','HANDES21XXX','PKBSES21XXX',
	'AEEVESM1XXX','BILLESB1XXX','COURESB1XXX','CRGEESM1XXX','ABCMESM1XXX','REDEESM1XXX','PNBMESM1XXX','PCIBESM1XXX','RHRHESM1XXX',
	'BSSAESB1XXX','BOCAES21XXX','WAFAESM1XXX','BCMAESM1XXX','PRBAESM1XXX','HELAESM1XXX','BIMEESM1XXX','GENOESM1XXX','LOFPESB1XXX',
	'STOLESM1XXX','SOLAESB1XXX','BEIVESM1XXX','NPBSES21XXX','IHZUES21XXX','VONTESM1XXX','AARBESM1XXX','IKBDESM1XXX');

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7A605BC0-03BF-4A02-BAD2-542D3DE02C6B"}
 */
function onActiontipoiva(event) {
	// TODO Auto-generated method stub
	elements.fld_sufijo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"041F4DB9-B321-4B79-AD85-652180D805E5"}
 */
function btngooglemaps(event) {
	// TODO Auto-generated method stub
	if(direccion)
	{
		//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
		//{
		var dircompleta = utils.stringReplace('http://maps.google.com/maps?q=' + direccion + ', '+poblacion,' ','+')
		application.showURL(dircompleta,'_blank');
		//}
		/*else
		{
			application.showURL( 'http://maps.google.com/maps');
		}*/
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
 * @properties={typeid:24,uuid:"A584CFA8-04AB-4AF7-985E-9C4D954BFCB1"}
 */
function onActioncodigo(event) {
	// TODO Auto-generated method stub
	elements.fld_nombre.requestFocus()
	
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"BFC17CDA-A986-44B2-A9AD-5FC546960B0D"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select codigoctabanco from maestrobancosctascargo where codigoctabanco = '" + codigoctabanco + "'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Banco duplicado!','¡Error!')
		else {
			var methd = 'forms.dlg_BancosCtasCargo.foco()';
			globals.GCshowErrorDialog('Banco duplicado!',methd,'Aceptar',null,null,null)
		}
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"FDD1151B-F72A-4176-A34E-49F572C01CCF"}
 */
function foco() {
	elements.codigoctabanco.requestFocus()
	elements.codigoctabanco.selectAll()
}
