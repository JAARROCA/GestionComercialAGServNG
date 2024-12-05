/**
 *
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2A5C1FC3-29EE-4F39-B2D0-9A863EDF14C2"}
 */
var GCFicheroImportacion = null;

/**
 * 
 * @type {String}
 * 
 *
 * @properties={typeid:35,uuid:"409B7323-F1D8-4B34-8C40-411E63FBDAFF"}
 */
var GCFichero43 = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"F4913863-BD54-46FF-9D62-AE1983CB124E"}
 */
var GCRutaFichero43 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FD56A0F8-BD7C-4C2F-AD0A-0E271FA0C8B6",variableType:4}
 */
var GCSalidaPor = null;

/**
 * @properties={typeid:35,uuid:"F943A86F-7F14-4C67-B1E5-2EBE3D9DE2CA",variableType:-4}
 */
var GCfoto_usuario = null;

/**
 * @properties={typeid:35,uuid:"3ECC6B6C-850C-4912-BF40-CD1B66D1195F",variableType:-4}
 */
var chartImage = null;

/**
*
*
*
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"C63F5BDF-E28D-4017-87A7-DBE66FA75A7C",variableType:-4}
 */
var GCPaisesUE = new Array('DE','AU','BE','BG','CY','HR','DK','SK','SI','EE','FI','FR','GR','NL','HU','IE','IT',
	'LV','LT','LU','MT','PL','PT','GB','CZ','RO','SE');

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8A3A3597-0509-4D9B-944C-C0F1CEF863EB",variableType:4}
 */
var COD = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"2C61AE73-CFCC-45B0-9C8A-920964700D0B",variableType:93}
 */
var GCDesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AC09F435-C80E-42F5-B0D2-8DB28CA3433A",variableType:4}
 */
var NuevoPedido = null;

/**
 * @type {String}
 *
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"C11EBC18-8237-412B-BAA5-4A2B8294AA55"}
 */
var _GChtmlmenu = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">'+
'		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>'+
'	</head><body>'+
'<style>body {font-size: 100%;background:#32373d;}'+
'a {text-decoration: none;}'+
'ul, ul ul {margin: 0;padding: 0;list-style: none;}'+
'#wrapper {width: 250px;font-size: 9pt;}'+
'.menu {width: auto;'+
'	height: auto;'+
'	-webkit-box-shadow: 0px 1px 3px 0px rgba(0,0,0,.73), 0px 0px 18px 0px rgba(0,0,0,.13);'+
'	-moz-box-shadow: 0px 1px 3px 0px rgba(0,0,0,.73), 0px 0px 18px 0px rgba(0,0,0,.13);'+
'	box-shadow: 0px 1px 3px 0px rgba(0,0,0,.73), 0px 0px 18px 0px rgba(0,0,0,.13);}'+
'.menu > li > a {background-color: #616975;'+
'	background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(114, 122, 134)),to(rgb(80, 88, 100)));'+
'	background-image: -webkit-linear-gradient(top, rgb(114, 122, 134), rgb(80, 88, 100));'+
'	background-image: -moz-linear-gradient(top, rgb(114, 122, 134), rgb(80, 88, 100));'+
'	background-image: -o-linear-gradient(top, rgb(114, 122, 134), rgb(80, 88, 100));'+
'	background-image: -ms-linear-gradient(top, rgb(114, 122, 134), rgb(80, 88, 100));'+
'	background-image: linear-gradient(top, rgb(114, 122, 134), rgb(80, 88, 100));'+
'	filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr="#727a86", EndColorStr="#505864");'+
'	border-bottom: 1px solid #33373d;'+
'	-webkit-box-shadow: inset 0px 1px 0px 0px #878e98;'+
'	-moz-box-shadow: inset 0px 1px 0px 0px #878e98;'+
'	box-shadow: inset 0px 1px 0px 0px #878e98;'+
'	width: 100%;'+
'	height: 2.75em;'+
'	line-height: 2.75em;'+
'	text-indent: 2.75em;'+
'	display: block;'+
'	position: relative;'+
'	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;'+
'	font-weight: 600;'+
'	color: #fff;'+
'	text-shadow: 0px 1px 0px rgba(0,0,0,.5);}'+
'.menu ul li a {background: #fff;'+
'	border-bottom: 1px solid #efeff0;'+
'	width: 100%;'+
'	height: 2.75em;'+
'	line-height: 2.75em;'+
'	text-indent: 2.75em;'+
'	display: block;'+
'	position: relative;'+
'	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;'+
'	font-size: 0.923em;'+
'	font-weight: bold;'+
'	color: #000000}'+
'.menu ul li:last-child a {border-bottom: 1px solid #33373d;}'+
'.menu > li > a:hover, .menu > li > a.active {background-color: #35afe3;'+
'	background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(69, 199, 235)),to(rgb(38, 152, 219)));'+
'	background-image: -webkit-linear-gradient(top, rgb(69, 199, 235), rgb(38, 152, 219));'+
'	background-image: -moz-linear-gradient(top, rgb(69, 199, 235), rgb(38, 152, 219));'+
'	background-image: -o-linear-gradient(top, rgb(69, 199, 235), rgb(38, 152, 219));'+
'	background-image: -ms-linear-gradient(top, rgb(69, 199, 235), rgb(38, 152, 219));'+
'	background-image: linear-gradient(top, rgb(69, 199, 235), rgb(38, 152, 219));'+
'	filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr="#45c7eb", EndColorStr="#2698db");'+
'	border-bottom: 1px solid #103c56;'+
'	-webkit-box-shadow: inset 0px 1px 0px 0px #6ad2ef;'+
'	-moz-box-shadow: inset 0px 1px 0px 0px #6ad2ef;'+
'	box-shadow: inset 0px 1px 0px 0px #6ad2ef;}'+
'.menu > li > a.active {border-bottom: 1px solid #1a638f;}'+
/*'.menu > li > a:before {'+
'	content: "";'+
'	background-image: url(../images/sprite.png);'+
'	background-repeat: no-repeat;'+
'	font-size: 36px;'+
'	height: 1em;'+
'  	width: 1em;'+
'	position: absolute;'+
'  	left: 0;'+
'	top: 50%;'+
'	margin: -.5em 0 0 0;'+
'}'+
'.item1 > a:before {'+
'	background-position: 0 0;'+
'}'+
'.item2 > a:before {'+
'	background-position: -38px 0;'+
'}'+
'.item3 > a:before {'+
'	background-position: 0 -38px;'+
'}'+
'.item4 > a:before {'+
'	background-position: -38px -38px;'+
'}'+
'.item5 > a:before {'+
'	background-position: -76px 0;'+
'}'+*/
'.menu > li > a span {font-size: 0.857em; '+
'	display: inline-block;'+
'	position: absolute;'+
'	right: 1em;'+
'	top: 50%; '+
'	background: #48515c;'+
'	line-height: 1em;'+
'	height: 1em;'+
'	padding: .4em .6em;'+
'	margin: -.8em 0 0 0; '+
'	color: #fff;'+
'	text-indent: 0;'+
'	text-align: left;'+
'	-webkit-border-radius: .769em;'+
'	-moz-border-radius: .769em;'+
'	border-radius: .769em;'+
'	-webkit-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, .26), 0px 1px 0px 0px rgba(255, 255, 255, .15);'+
'	-moz-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, .26), 0px 1px 0px 0px rgba(255, 255, 255, .15);'+
'	box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, .26), 0px 1px 0px 0px rgba(255, 255, 255, .15);'+
'	text-shadow: 0px 1px 0px rgba(0,0,0,.5);'+
'	font-weight: 500;}'+
'.menu > li > a:hover span, .menu > li a.active span {background: #2173a1;}'+
'.menu > li > ul li a:before{content: "▶";'+
'	font-size: 20px;'+
'	font-weight: bold;'+
'	color: #bcbcbf;'+
'	position: absolute;'+
'	width: 1em;'+
'	height: 1em;'+
'	top: 0;'+
'	left:  -1.0em;}'+
'.menu > li > ul li:hover a,'+
'.menu > li > ul li:hover a span,'+
'.menu > li > ul li:hover a:before {color: #32373D;}'+
'.menu ul > li > a span {font-size: 0.857em; '+
'	display: inline-block;'+
'	position: absolute;'+
'	right: 1em;'+
'	top: 50%; /'+
'	background: #fff;'+
'	border: 1px solid #d0d0d3;'+
'	line-height: 1em;'+
'	height: 1em;'+
'	padding: .4em .7em;'+
'	margin: -.9em 0 0 0; '+
'	color: #878d95;'+
'	text-indent: 0;'+
'	text-align: left;'+
'	-webkit-border-radius: .769em;'+
'	-moz-border-radius: 769em;'+
'	border-radius: 769em;'+
'	text-shadow: 0px 0px 0px rgba(255,255,255,.01));}</style>';

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"1B8CE916-A96F-4199-972C-1A31CD7E5B4C",variableType:8}
 */
var GCFilaNombresCampos = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3F2F0866-59D6-41DA-B9E2-FE251178FFCB"}
 */
var FicheroImportar = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C99FDB55-CFEC-4048-9905-071BE3CF212E"}
 */
var RutaFicheroImportar = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C23BDC69-4374-4225-9800-DAE1845F49E4",variableType:4}
 */
var AlbaranCliente = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"CFCBE6EA-2321-47C8-B8DA-D433D90CC4CC"}
 */
var GCcurID_SWIFTBancos = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"09A238DC-E892-44B7-944C-9D5D15CD19F7"}
 */
var GCcurID_MovArti = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0B9386B9-CAF6-4A45-87E1-D8FD8AFC477F"}
 */
var GCBIC = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"2A12B24C-33EC-408C-A86D-A877E1BB8383",variableType:93}
 */
var GCFechaControlAcceso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E32E8D6-D2CD-4E2E-9132-AC0207838685"}
 */
var GCcurID_CobrosPagos = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E0161C61-204F-4F24-A33E-B11AFF487A55",variableType:93}
 */
var GCg_endDateTimeCriteria = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7AA0C1C6-7D97-4301-B43D-0BA9C9E7732A",variableType:93}
 */
var GCg_startDateTimeCriteria = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FEF800EA-0CD1-4F6E-B123-98E4D66DDE9B",variableType:4}
 */
var GCg_date_time_search = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"96026BE7-2D6F-457B-91D8-826B53D3E209",variableType:4}
 */
var GCg_all_records = 2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2037A76A-0F99-46EF-8732-BE964784C6DB",variableType:4}
 */
var GCg_title_search = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6925375F-59C5-4F61-ACC0-E561266A706F",variableType:4}
 */
var GCg_search_condition = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E057E0E6-CC00-432E-8D8C-9C19558C5CF6",variableType:93}
 */
var GCg_current_date_time = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9B4F33AC-A56C-4FEF-9802-6DBFF8B8C44C",variableType:4}
 */
var GCg_future_appointments_flag = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"8B854012-16E3-4E29-B3AD-67068EC3A9E6",variableType:93}
 */
var GCdayEndDate = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"DE0248F6-FD7D-40D2-A910-E6DDB08CCACD",variableType:93}
 */
var GCdayStartDate = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F3E8FC64-0565-4F60-87CE-F1341C8E95A3",variableType:8}
 */
var GCClaveCalendario = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B69E0277-0062-496F-938C-D4C6DBC3B0ED"}
 */
var GCg_main_cal_name = 'main_cal_1';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"00287C09-54DB-4DC3-B1AA-8D8445CF1273"}
 */
var GCg_nav_cal_name = 'nav_cal_1';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8DEB8F7D-0E84-4BF6-AD1D-4913411AFAE6",variableType:8}
 */
var GCTipoIvaNuevo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4AEBE5EF-3134-4ECD-A050-63F3482569B3",variableType:8}
 */
var GCTipoIvaAnterior = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"786E3BF1-BF35-4D86-87D1-2A89C96E1108"}
 */
var GCcurID_FacturaCompras = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6C627564-D4D8-45C7-8B10-941E6EEDAB2D",variableType:4}
 */
var GChastacliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9E115255-8612-4B96-AD3D-A5E22555E472",variableType:4}
 */
var GCdesdecliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DE12B36A-FA57-47AB-80C3-847740B2138B",variableType:4}
 */
var GCRegistroNuevo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4F0042DB-7D97-42A0-AAC7-F82F0C63F4A4",variableType:4}
 */
var GCCriterios = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5A81F589-D20B-4F82-A2C6-5AE9BF894A47"}
 */
var GCHastaCodigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CDC326C0-B847-43DB-B126-AB57CFEF7FB5"}
 */
var GCDesdeCodigo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DC7F4F65-EBFE-4A49-88CC-422E1A8EE527",variableType:4}
 */
var GCTipoConsulta = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C91C4323-DE2C-454D-80DB-27052F1EFE35"}
 */
var GCcurID_Pedido = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"16FF9919-EA4A-4FCA-BD36-8567127B40F4"}
 */
var GCcurID_AlbaranCompra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AADC98C6-6C6A-4736-84DC-82F2881AA6F7",variableType:4}
 */
var GCcurID_PedidoCompra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FEADA2CE-6868-4C40-AEBB-CD31B9F4083F",variableType:8}
 */
var GCcurID_PetOfertaCompra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"017DFA13-5CE8-47C5-B0CA-A5EAF80D8529"}
 */
var GCcurID_BancosCuentasCargo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82CBA434-290B-46A4-B24F-3633A94E0E19"}
 */
var GCcurID_Albaran = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"5AFA9535-FC73-4E3D-B977-D18FA708E0EE"}
 */
var GCcurID_FacturaProforma = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"050D23C8-C424-4982-8F91-0D2FC3FE4D42"}
 */
var GCcurID_Factura = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"EA933A23-B96C-4A17-875C-5D9799320865"}
 */
var GCcurID_Nota = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D7863286-73E8-4EC0-A558-1CE72BA2C49D"}
 */
var GCcurID_Presupuesto = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B5BD6E9E-1CCB-4EE8-A86B-3C48DC6161B3"}
 */
var GCNombreEmpresa = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"89BF6EE5-F244-4F76-AEA2-512670EB0A7B"}
 */
var GCNomEmp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"06324567-B8FC-4717-96E4-166D0AA80745"}
 */
var GCCIFEmpresa = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"00260FAE-991F-474B-A835-8256BE4F7213",variableType:93}
 */
var GCHoraConex = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1CB64F4C-E019-4807-A342-943420DCDE4D"}
 */
var GCconex = null;

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"8916DB64-AFAF-4814-BDF4-D9EDA28A4070"}
 */
var GCcurID_Observacion = null;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"5CAC9BB9-97C3-4C71-8EC8-CFA617AF558B"}
 */
var GCcurID_Operario = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"08B93DFB-7C02-4B01-8197-2C9E5CB2ADB9"}
 */
var GCcurID_Agente = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"858D71BB-9D15-43AE-A7CD-245A259F312D"}
 */
var GCcurID_Material = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"A91007B7-0E05-4CAD-8E1C-16F408B878AA"}
 */
var GCcurID_Articulo = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"84491261-8E66-4196-8B5A-35510A3FE089"}
 */
var GCcurID_Proveedor = null;

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"3DE39D4D-D2C3-447B-B7BD-3E5D2636077B"}
 */
var GCcurID_TipoIva = null;

/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"6EE739B7-E2EB-4B59-B91A-BFF5DA6D4DB5"}
 */
var GCcurID_Familia = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"4E57FF3F-5282-41CF-AAB9-7E2EAC11D4FA"}
 */
var GCcurID_FormaPago = null;

/**
 * @type {String}
 *
 *
 *
  *
 * @properties={typeid:35,uuid:"A6A355CB-D117-4996-B185-329D610C8C97"}
 */
var GCcurID_UnidMedida = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"8B7408AA-E9F0-4DC8-9E95-3223151A247B"}
 */
var GCcurID_Transportista = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"583FD3BE-1DBB-48E4-A759-2DCC84E64DB8"}
 */
var GCcurID_Delegacion = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"771F6B00-157A-478A-BA01-FFBE71638D8C"}
 */
var GCcurID_Cliente = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"026C6DB5-661F-49E2-A184-AC352FF94D22"}
 */
var GCHaciendaWeb = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"5736E479-A9E9-40C8-8FBB-1456A7D7E06F"}
 */
var GCParametrosHoja = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"2427E20A-DB6A-4795-83B5-CD1988EAA4F2"}
 */
var GCParametrosFolio = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"997B7A68-9E23-490C-A54E-BC440B86E46C"}
 */
var GCParametrosTomo = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"5195985F-F6BA-46E2-BF01-6C61C3F67328"}
 */
var GCParametrosRegistro = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"A3958C5F-71E0-40D7-B939-15CCD70B0B4F"}
 */
var GCParametrosCuentaBancaria = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"BC9DCB72-8231-494F-A5EE-67D83D1F564C",variableType:8}
 */
var GCsmart_chg = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"E9106C1F-FD09-4B7E-9A4F-59A5AF0CC246"}
 */
var GCdefault_image_directory = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"4B009149-47FD-462D-94E7-DF014701E21D"}
 */
var GCClave = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"91D1338D-2FF1-4F5E-ACF6-AA11B9E8E1BB"}
 */
var GCevento = null;

/**
* Returns a numeric expression rounded to a specified number of decimal places 
* 
* @param {Number} nExpression - Specifies the numeric expression whose 
*                               value is to be rounded 
* @param {Number} nDecimalPlaces - Specifies the number of decimal places 
*                                  nExpression is rounded to  
*
*
*
 * @return {Number}
 *
 *
 * @properties={typeid:24,uuid:"E822081D-116A-4F73-B57D-35B31E957C10"}
 */
function GCROUND(nExpression, nDecimalPlaces){
	var sign = nExpression >= 0 ? 1 : -1;
	return (Math.round((nExpression*Math.pow(10,nDecimalPlaces))+(sign*0.001))/Math.pow(10,nDecimalPlaces));
	/*return Math.round(nExpression * Math.pow(10, nDecimalPlaces)) /
        Math.pow(10,nDecimalPlaces);*/
}

/**
 * 
 * @return {Number}
 * @properties={typeid:24,uuid:"4A9564D8-713F-4F21-B1D0-A7AB4DCBBC38"}
 */
function GCimportedpp(eje,ser,nup,depp){
	
	var query = "select DISTINCT(piva_lfa), ISNULL(SUM(impor_lfa),0) "+
		"FROM tbFacturaLinea WHERE eje_lfa = "+eje+
		" AND ser_lfa "+ser+" AND nup_lfa = "+nup+
		" GROUP BY piva_lfa"+
		" ORDER BY piva_lfa DESC";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 3)
	var rows = dataset.getMaxRowIndex()
	var Dtopp = 0;
	
	for(var i=1;i<=rows;i++)
	{
		//if(i == 1) 
		//{
			//var piva = dataset.getValue(i,1)
			var impbie = dataset.getValue(i,2)
			Dtopp += impbie * depp * 0.01
		/*}
		else if(i == 2) 
		{
			
		}
		else if(i == 3) 
		{
			
		}*/
	}
	
	if(Dtopp == 0) Dtopp = null;
	return Dtopp
}

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"F812F65B-75B6-490D-B542-6A8D6DFF4DD2"}
 */
var GCFormulario = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"D9C25BF9-0466-41B7-909E-0B5E724FEF4B"}
 */
var GCNombreUsuario = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"2E4BD5EE-78DD-46E0-B03F-1D2E78DEE9E1",variableType:8}
 */
var GClogin_usuario = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"14A768FE-9E4D-4512-B833-7BCDF976ECF4"}
 */
var GClogin_password = null;

/**
 * Must have a length of at least 8 characters
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"2D1601DE-56E8-448F-8354-86011D1C31F8"}
 */
var GCcryptKey = 'AgiSsa2015';

/**
 * @param {String} _string
 * @param {String} _encoding
 * @return
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"054FD1A8-BD2B-4DA1-B452-B8D5191CF165"}
 */
function GCStringToBytes(_string, _encoding) {
	if (!_encoding) {
		_encoding = "UTF-8";
	}
	return new Packages.java.lang.String(_string).getBytes(_encoding);
}

/**
 * @param {String} _key
 * @return
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"560B97BC-A1B0-4107-A452-640BCFD12396"}
 */
function GCgetKey(_key) {
	var _bytes = GCStringToBytes(_key, "UTF-8");
	var _pass = new Packages.javax.crypto.spec.DESKeySpec(_bytes);
	var _skf = Packages.javax.crypto.SecretKeyFactory.getInstance("DES");
	var _secretKey = _skf.generateSecret(_pass);
	return _secretKey;
}

/**
 * @param {String} _string
 * @param {String} _key
 * @param {String} _operation (D=Descrypt / C=Crypt
 *
 *
 * @return {String}
 *
 *
 * @properties={typeid:24,uuid:"E623B0FE-A9EC-4BF7-86C0-5A53A7FAB330"}
 */
function GCcryptString(_string, _key, _operation) {
	var _secretKey = GCgetKey(_key);
	var _base64 = Packages.org.apache.commons.codec.binary.Base64;
	var _desCipher = Packages.javax.crypto.Cipher.getInstance("DES/ECB/PKCS5Padding");
	var _ciphertext, _clearText;

	if (_operation == "C") {
		// --- Crypt.
		_desCipher.init(Packages.javax.crypto.Cipher.ENCRYPT_MODE, _secretKey);
		_clearText = GCStringToBytes(_string, "UTF-8");
		_ciphertext = _desCipher.doFinal(_clearText);
		return _base64.encodeBase64String(_ciphertext);
	} else if (_operation == "D") {
		// --- Decrypt
		_ciphertext = _base64.decodeBase64(_string);
		_desCipher.init(Packages.javax.crypto.Cipher.DECRYPT_MODE, _secretKey);
		_clearText = _desCipher.doFinal(_ciphertext);
		/** @type String*/
		var _textDecoded = new Packages.java.lang.String(_clearText)
		return (_textDecoded);
	} else {
		return "Invalid Operation";
	}
}

/**
 * @type {String}
 *
 *
 *
*
 *
 * @properties={typeid:35,uuid:"3E1658ED-DD14-43EF-9EE4-C398A5B33F60"}
 */
var GCdialog_buttonPressed = '';

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"AC8F5DF6-3E0E-4EB4-8BCE-C703ABBC4267"}
 */
var GCdialog_instructions01 = '';

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"CF0FAF02-5F31-4AC2-B819-01B365157C47"}
 */
var GCdialog_instructions02 = '';

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"E152F60E-CB13-4F39-B376-91669B8872EC"}
 */
var GCdialog_performMethod = '';

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"A3DB044B-DF69-4473-8C03-89F4677B21D3"}
 */
var GCdialog_text = '';

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"1A60CA93-B876-4922-A2D8-882E221FF5D4"}
 */
var GCnav_itemName = '';

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"10D47869-3EF7-430D-B860-C907E5AF52D7",variableType:8}
 */
var GCnav_node = 1;

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"9B242FD2-3FAE-4AA1-824A-7E1BA3516952"}
 */
var GCnav_search = '';

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"0CF2439E-7390-4B31-8050-569080811066"}
 */
var GCnav_search2 = '';

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"9CE3DCD6-8B07-49C7-8992-DE53CF602F3D"}
 */
var GCnav_solution = '';

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"693E03C7-8E7A-4FBA-ABFD-A0831E6CD2E4",variableType:8}
 */
var GCokToCommit = 1;

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"76710C82-8881-4F5C-BF4B-9A2AE631419A"}
 */
var GCrecord_status = '';

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"B2CF41BC-DBBF-4EB8-AC81-2AA0E497AC10"}
 */
var GCtempHTML = '';

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"B02264E1-1441-4AAE-8D37-C887AECCA904",variableType:8}
 */
var GCthisSolution_ID = 2;

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"F15BBA87-386B-4D22-9A62-4B81784AE543"}
 */
var GCvl_editName = null;

/**
 *
 *
*
 *
 * @properties={typeid:24,uuid:"69C2AB02-3F1D-4C55-8477-EC8285C11E4C"}
 */
function GCcancelEditing()
{
	databaseManager.revertEditedRecords()
	databaseManager.setAutoSave(true);
}

/**
 * @SuppressWarnings(deprecated)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"1A590FB4-6C80-407F-8D07-2874A7384700"}
 */
function GCdisableBgElements()
{
	//disable all the background elements when showing the dialog
	/*var frm = currentcontroller.getName()
	var form = solutionModel.getForm(frm);
	var nav = form.navigator.name;
	
	forms[nav].elements.tabs_recList.enabled = true
	forms[nav].elements.tabs_solNav.enabled = true
	*/
	currentcontroller.enabled = false
}

/**
 * @SuppressWarnings(deprecated)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"1D7B81F6-D4C1-4018-A16E-B9F1413C3A74"}
 */
function GCenableBgElements()
{
	//enable all the background elements when showing the dialog
	/*var frm = currentcontroller.getName()
	var form = solutionModel.getForm(frm);
	var nav = form.navigator.name;
	forms[nav].elements.tabs_recList.enabled = true
	forms[nav].elements.tabs_solNav.enabled = true
	*/
	currentcontroller.enabled = true
	
	/*var frm = currentcontroller.getName()
	if(globals.GCisEditing())
	{
		var _jsForm = solutionModel.getForm(frm)
		//application.output(_jsForm)
		var methods = _jsForm.getMethods();
		
		var match = methods.filter(function( x ) { return (x.getName() == 'doEdit') });
		
		if (match.length > 0)
		{	     
		   	 forms[frm].doEdit();	    
		}
	}*/
}

/**
 *
 *
 * @return {String}
 *
 *
 * @properties={typeid:24,uuid:"1B7988CA-01B3-49E6-96D4-7D835940F0EA"}
 */
function GCgetTopHTML()
{
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT || 
	application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
	{
		//web client
		return '<html><body>'
	}
	else
	{
		return '<html>\n<head>\n<style type="text/css">\n.body {font-family: "Verdana, sans-serif"; font-size: 11pt;}\n' +
		'\n.red {font-family: "Verdana, sans-serif"; font-size: 11pt; color:#990000;}\n' +
		'\n.largeRed {font-family: "Verdana, sans-serif"; font-size: 12pt; color:#990000;}\n' +
		'\n.navList {font-family: "Verdana, sans-serif"; font-size: 12pt; font-weight: bold}' +
		'\n.navListWhite {font-family: "Verdana, sans-serif"; font-size: 12pt; font-weight: bold; color: #ffffff;}' +
		'</style>\n</head>\n<body class="body">\n\n'
	}
}

/**
 *
 *
 * @return {Boolean}
 *
 *
 * @properties={typeid:24,uuid:"14C475DA-3AB4-482D-BC2D-AF9179E37264"}
 */
function GCisEditing()
{
	return !databaseManager.getAutoSave();
}

/**
 * @SuppressWarnings(deprecated)
 *
 *
 *
 * @properties={typeid:24,uuid:"DAB40BE1-1036-4EE6-95D4-31DE1D0870FE"}
 */
function GCnav_nextRecord()
{
	//see what form is front-most
	var frm = currentcontroller.getName();
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	var sort = forms[frm].foundset.getCurrentSort()
	if(sort.indexOf('asc') >= 0) forms[frm].controller.setSelectedIndex(forms[frm].controller.getSelectedIndex() + 1)
	else forms[frm].controller.setSelectedIndex(forms[frm].controller.getSelectedIndex() - 1)
}

/**
 * @SuppressWarnings(deprecated)
 *
 *
 *
 * @properties={typeid:24,uuid:"36AE5688-905D-48DB-9C51-905152F6AAE4"}
 */
function GCnav_prevRecord()
{
	//see what form is front-most
	var frm = currentcontroller.getName();
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	var sort = forms[frm].foundset.getCurrentSort()
	if(sort.indexOf('asc') >= 0) forms[frm].controller.setSelectedIndex(forms[frm].controller.getSelectedIndex() - 1)
	else forms[frm].controller.setSelectedIndex(forms[frm].controller.getSelectedIndex() + 1)
}

/**
 * @param {String} formname //formname
 * 
 * @param {Boolean} rec //record
 * 
*
 *
 *
 *
 * @properties={typeid:24,uuid:"236CD583-A8E6-4905-A1BA-6F17168C0860"}
 */
function GCprintRoutine(formname, rec) {
	var frm = formname;
	var oneRecord = rec;

	if(!oneRecord) oneRecord = false

	if(!frm) return;

	//forms[frm].controller.showPrintPreview(oneRecord)
}

/**
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"F64C07FB-6433-45B8-A86C-C7889C4524B2"}
 */
function GCsaveEdits()
{
	databaseManager.saveData();
	databaseManager.setAutoSave(true);
}

/**
 * 
 * @SuppressWarnings(deprecated)
 *
 *
 *
 * @properties={typeid:24,uuid:"4A20C8AB-D339-458D-BF16-16D71B9969B4"}
 */
function GCsetupRecordStatus()
{
	//see what form is front-most
	var frm = currentcontroller.getName();
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	var win = application.getWindow('Conta');
	var dlg = utils.stringLeft(frm,6);
	var dlg2 = utils.stringLeft(frm,3);
	/*if(frm != 'dialogGenerarNotasSubcontratacion' && frm != 'FrmPrincipalGC' &&
			frm != 'dialogSeleccion_Factura' && frm != 'dialogActualizacionContableGC' &&
			frm != 'dialog_HistoricoOFs' && frm != 'FrmPrincipalGC_web' 
				&& frm != 'dialogActualizacionCarteraCobrosGC' && frm != 'dialogSeleccionRemesaGC' &&
				frm != 'dialogCambiarPreciosArticulosGC' && frm != 'dialogCambiarDtoArticulosGC' &&
				frm != 'dialogProveedoresGC' && win == null && frm != 'dialog_DuplicarFacturasGC' && 
				frm != 'dialogGeneracion_Factura5GC' && frm != 'dialogImpresionFacturasTBAIGC' &&
				frm != 'dialogImportarDatosTBAIGC' && frm != 'dialogFacturacionClientesGC' &&
				frm != 'dialogImpresionFacturasTBAIGC_2' && frm != 'dialogFacturacionClientesGC' &&
				frm != 'dialogFacturacionClientesAgnosGC' && frm != 'dialogConsultaVentasZonasGC' &&
				frm != 'dialogABCFacturacionClientesGC')*/
	if(frm && dlg != 'dialog' && dlg2 != 'lst'  && win == null)
	{
		var fs = databaseManager.getFoundSetCount(forms[frm].foundset)
		var tc = databaseManager.getTableCount(forms[frm].foundset)
		var cr = forms[frm].controller.getSelectedIndex()
	
		globals.GCrecord_status = '<html> <head></head> <body> <b>Registro:</b> ' + cr + ' de ' + fs + '</b>'
	
		if( tc > fs)
		{
			globals.GCrecord_status += '  (REGISTROS TOTALES: ' + tc + ')'
		}
	
		if(globals.GCnav_search)
		{
			globals.GCrecord_status += " - TÉRMINOS DE BUSQUEDA: '" + globals.GCnav_search + "'"
			//globals.GCnav_search = ''
		}
	
		globals.GCrecord_status += '</body></html>'
		var sort = forms[frm].foundset.getCurrentSort()
		if(sort.indexOf('asc') >= 0)
		{
			if(cr == 1) //current record 1 - so hide the "previous" button
			{
				forms[frm].elements['btn_prev'].visible = false;
			}
			else
			{
				forms[frm].elements['btn_prev'].visible = true;
			}
		
			if(cr == fs || cr == tc) //current is last one - so hide the "next" button
			{
				forms[frm].elements['btn_next'].visible = false;
			}
			else
			{
				forms[frm].elements['btn_next'].visible = true
			}
		}
		else
		{
			if(cr == 1) //current record 1 - so hide the "previous" button
			{
				forms[frm].elements['btn_next'].visible = false;
			}
			else
			{
				forms[frm].elements['btn_next'].visible = true;
			}
		
			if(cr == fs || cr == tc) //current is last one - so hide the "next" button
			{
				forms[frm].elements['btn_prev'].visible = false;
			}
			else
			{
				forms[frm].elements['btn_prev'].visible = true
			}
		}
		
	}
}

/**
 * @param {String} arg0 // TODO generated, please specify type and doc
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"E550992A-BE85-4F0D-8B09-3EC17430392C"}
 */
function GCsetupWcValueList(arg0)
{
	//this routine will examine a value list for "-" items - and remove them
	var listName = arg0
	if(!listName) return;

	var dataset = application.getValueListItems(listName)

	if(dataset)
	{
		var myArray = new Array()
		var max = dataset.getMaxRowIndex()
		var temp = ''

		for ( var i = 1 ; i <= max  ; i++ )
		{
			temp = dataset.getValue(i, 1)
			if(temp != '-') myArray.push(temp)
		}

		application.setValueListItems( listName, myArray)
	}
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"DBBC2E67-A7C3-4710-B83C-D19B0780CE12"}
 */
function GCshowDialogEnvioMail(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_DatosConexionGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_EnvioMailGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_EnvioMailGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_EnvioMailGC.controller.enabled = true
	forms.dialog_EnvioMailGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Envio Mail", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_EnvioMailGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"2C27839D-5840-4C10-963B-91702EAE374D"}
 */
function GCshowDialogActualizacionCarteraCobros(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogActualizacionCarteraCobrosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogActualizacionCarteraCobrosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogActualizacionCarteraCobrosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogActualizacionCarteraCobrosGC.controller.enabled = true
	forms.dialogActualizacionCarteraCobrosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Actualizacion Cartera Cobros", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogActualizacionCarteraCobrosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"82D2AFD9-EB04-4979-8967-3295B4D464ED"}
 */
function GCshowDialogActualizacionCarteraPagos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogActualizacionCarteraPagosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogActualizacionCarteraPagosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogActualizacionCarteraPagosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogActualizacionCarteraPagosGC.controller.enabled = true
	forms.dialogActualizacionCarteraPagosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Actualizacion Cartera Pagos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogActualizacionCarteraPagosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"08B7D6E3-AC28-4CDA-B0C1-33AD320AEE5B"}
 */
function GCshowDialogActualizacionContable(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogActualizacionContableGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogActualizacionContableGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogActualizacionContableGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogActualizacionContableGC.controller.enabled = true
	forms.dialogActualizacionContableGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Actualizacion Contable", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogActualizacionContableGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"F23A008B-BDDC-4A88-AB04-607D385C0DD1"}
 */
function GCshowDialogActualizacionContableCompras(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogActualizacionContableComprasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogActualizacionContableComprasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogActualizacionContableComprasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogActualizacionContableComprasGC.controller.enabled = true
	forms.dialogActualizacionContableComprasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Actualizacion Contable", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogActualizacionContableComprasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A36214B9-5795-41EF-8B8B-793BB875A876"}
 */
function GCshowDialogPDFViewer(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogpdfDocumentGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogpdfDocumentGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogpdfDocumentGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogpdfDocumentGC.controller.enabled = true
	forms.dialogpdfDocumentGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("PDF", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogpdfDocumentGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"35C6DF13-4FA5-4DC8-891C-55F846664871"}
 */
function GCshowDialogPDFViewer3(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogpdfDocument3GC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogpdfDocument3GC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogpdfDocument3GC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogpdfDocument3GC.controller.enabled = true
	forms.dialogpdfDocument3GC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("PDF", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogpdfDocument3GC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"353F25DC-0630-4260-9E86-DE0245866EE4"}
 */
function GCshowDialogClientes(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_ClientesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_ClientesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_ClientesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_ClientesGC.controller.enabled = true
	forms.dialog_ClientesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_ClientesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"624CC152-183F-4CCD-81A1-FF9C82104D37"}
 */
function GCshowDialogBDFamilias(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogFamiliasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogFamiliasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogFamiliasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogFamiliasGC.controller.enabled = true
	forms.dialogFamiliasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Familias", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogFamiliasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"BE9356A8-5E23-4F97-8B1B-CBA36E8302DC"}
 */
function GCshowDialogProveedores(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_ProveedoresGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_ProveedoresGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_ProveedoresGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_ProveedoresGC.controller.enabled = true
	forms.dialog_ProveedoresGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Proveedores", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_ProveedoresGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"3E5265A5-DBDB-4E6C-9709-772E367BC034"}
 */
function GCshowDialogCliente(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogClientesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogClientes.elements.btn_3.text = btn3Label
		forms.dialogClientes.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogClientes.elements.btn_3.visible = false
	}
	*/
	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogClientesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogClientesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogClientesGC.controller.enabled = true
	forms.dialogClientesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogClientesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"B2CE5DDF-F44B-4493-B874-E613DCDACDA5"}
 */
function GCshowDialogArticulo(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogArticulosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogClientes.elements.btn_3.text = btn3Label
		forms.dialogClientes.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogClientes.elements.btn_3.visible = false
	}
	*/
	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogArticulosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogArticulosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogArticulosGC.controller.enabled = true
	forms.dialogArticulosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Articulos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogArticulosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"9AED036F-0283-4993-8160-8E1D54C3C00D"}
 */
function GCshowDialogActualizarIVA(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialogActualizarIVAGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogActualizarIVAGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		//forms.dialogDesactualizacionAsientos.elements.btn_3.text = btn3Label
		//forms.dialogDesactualizacionAsientos.elements.btn_3.visible = true

	}
	else
	{
		//forms.dialogDesactualizacionAsientos.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogActualizarIVAGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogActualizarIVAGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogActualizarIVAGC.controller.enabled = true
	forms.dialogActualizarIVAGC.controller.readOnly = false
	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Actualizar IVA", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogActualizarIVAGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 * @properties={typeid:24,uuid:"EC22B58D-93ED-4359-A29D-88C48E33B60B"}
 */
function GCshowDialogCambiarPreciosArticulos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialogCambiarPreciosArticulosGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogCambiarPreciosArticulosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		//forms.dialogDesactualizacionAsientos.elements.btn_3.text = btn3Label
		//forms.dialogDesactualizacionAsientos.elements.btn_3.visible = true

	}
	else
	{
		//forms.dialogDesactualizacionAsientos.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogCambiarPreciosArticulosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogCambiarPreciosArticulosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogCambiarPreciosArticulosGC.controller.enabled = true
	forms.dialogCambiarPreciosArticulosGC.controller.readOnly = false
	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Cambiar Precios Articulos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogCambiarPreciosArticulosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D6C21633-F291-4ED1-8118-1C6BCFDE55E5"}
 */
function GCshowDialogCambiarDtoArticulos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialogCambiarDtoArticulosGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogCambiarDtoArticulosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		//forms.dialogDesactualizacionAsientos.elements.btn_3.text = btn3Label
		//forms.dialogDesactualizacionAsientos.elements.btn_3.visible = true

	}
	else
	{
		//forms.dialogDesactualizacionAsientos.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogCambiarDtoArticulosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogCambiarDtoArticulosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogCambiarDtoArticulosGC.controller.enabled = true
	forms.dialogCambiarDtoArticulosGC.controller.readOnly = false
	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Cambiar Dto Articulos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogCambiarDtoArticulosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A99781AB-3048-4E15-BE66-994E48900D89"}
 */
function GCshowDialogtop5Articulos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_top5ArticulosGC.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_top5ArticulosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		//forms.dialogDesactualizacionAsientos.elements.btn_3.text = btn3Label
		//forms.dialogDesactualizacionAsientos.elements.btn_3.visible = true

	}
	else
	{
		//forms.dialogDesactualizacionAsientos.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_top5ArticulosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_top5ArticulosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_top5ArticulosGC.controller.enabled = true
	forms.dialog_top5ArticulosGC.controller.readOnly = false
	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("top5Articulos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_top5ArticulosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"827C2D61-D24D-4DEE-94EC-F39C362E3D52"}
 */
function GCshowDialogProveedor(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogProveedoresGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogProveedores.elements.btn_3.text = btn3Label
		forms.dialogProveedores.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogProveedores.elements.btn_3.visible = false
	}
*/
	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogProveedoresGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogProveedoresGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogProveedoresGC.controller.enabled = true
	forms.dialogProveedoresGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Proveedores", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogProveedoresGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D7781DC3-C02B-425D-8961-B0C7EDD2EBAB"}
 */
function GCshowDialogFormaPago(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogFormaspagoGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogFormaspagoGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogFormaspagoGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogFormaspagoGC.controller.enabled = true
	forms.dialogFormaspagoGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("FormasPago", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogFormaspagoGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"381198FF-B87D-4026-B981-58422D6E1610"}
 */
function GCshowDialogBancosCtasCargo(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogBancosCtasCargoGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogBancosCtasCargoGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogBancosCtasCargoGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogBancosCtasCargoGC.controller.enabled = true
	forms.dialogBancosCtasCargoGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Bancos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogBancosCtasCargoGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"E595FB80-4956-4F3F-AB9A-B01947A47BFB"}
 */
function GCshowDialogTiposIva(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_TipoIVAGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_TipoIVAGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_TipoIVAGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_TipoIVAGC.controller.enabled = true
	forms.dialog_TipoIVAGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("DialogTipoIVA", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_TipoIVAGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"6ECBDE37-2955-45A9-B3D9-74A9E43B564E"}
 */
function GCshowDialogFamilias(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_FamiliasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_FamiliasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_FamiliasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_FamiliasGC.controller.enabled = true
	forms.dialog_FamiliasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("DialogFamilias", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_FamiliasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"B02F70B9-0CAB-4268-93B3-84600CD81001"}
 */
function GCshowDialogDiarioFacturacion(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogDiarioFacturacionGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogDiarioFacturacionGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogDiarioFacturacionGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogDiarioFacturacionGC.controller.enabled = true
	forms.dialogDiarioFacturacionGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Diario Facturacion", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogDiarioFacturacionGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"F11393C8-C987-4DF6-A041-5D3192D12788"}
 */
function GCshowDialogInformeComision(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogInformeComisionGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogInformeComisionGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogInformeComisionGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogInformeComisionGC.controller.enabled = true
	forms.dialogInformeComisionGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Informe Comision", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogInformeComisionGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"60FE3D22-6151-4D45-ACC9-E3432F97064C"}
 */
function GCshowDialogDiarioNotas(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogDiarioNotasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogDiarioNotasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogDiarioNotasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogDiarioNotasGC.controller.enabled = true
	forms.dialogDiarioNotasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Diario Notas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogDiarioNotasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"CE13D104-9FDC-41E9-A279-72C2375F4179"}
 */
function GCshowDialogImpresionFacturas(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogImpresionFacturasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogImpresionFacturasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogImpresionFacturasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogImpresionFacturasGC.controller.enabled = true
	forms.dialogImpresionFacturasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Impresion Facturas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogImpresionFacturasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"DF568C55-CD20-4567-8729-A42B7DB821A2"}
 */
function GCshowDialogImpresionFacturasTBAI(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogImpresionFacturasTBAIGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogImpresionFacturasTBAIGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogImpresionFacturasTBAIGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogImpresionFacturasTBAIGC.controller.enabled = true
	forms.dialogImpresionFacturasTBAIGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Impresion Facturas TBAI", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogImpresionFacturasTBAIGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"00DEC421-956A-4CB1-B47A-51363046B0DE"}
 */
function GCshowDialogImpresionFacturasVERIFACTU(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogImpresionFacturasVERIFACTUGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogImpresionFacturasVERIFACTUGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogImpresionFacturasVERIFACTUGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogImpresionFacturasVERIFACTUGC.controller.enabled = true
	forms.dialogImpresionFacturasVERIFACTUGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Impresion Facturas VERIFACTU", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogImpresionFacturasVERIFACTUGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"731ACAC1-68C5-4999-8D56-AA8925291B0E"}
 */
function GCshowDialogExportarFacturasFacturaE(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogExportarFacturasFacturaEGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogExportarFacturasFacturaEGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogExportarFacturasFacturaEGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogExportarFacturasFacturaEGC.controller.enabled = true
	forms.dialogExportarFacturasFacturaEGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Exportar Facturas FacturaE", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogExportarFacturasFacturaEGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"02E25FD6-757A-4EEB-BC57-EE7E09E65F34"}
 */
function GCshowDialogImpresionFacturasTBAI_2(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogImpresionFacturasTBAIGC_2.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogImpresionFacturasTBAIGC_2.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogImpresionFacturasTBAIGC_2.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogImpresionFacturasTBAIGC_2.controller.enabled = true
	forms.dialogImpresionFacturasTBAIGC_2.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Impresion Facturas TBAI", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogImpresionFacturasTBAIGC_2);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"5B292E15-9B68-4D59-8FB8-4C6D5B5FEC71"}
 */
function GCshowDialogFacturacionClientes(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogFacturacionClientesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogFacturacionClientesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogFacturacionClientesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogFacturacionClientesGC.controller.enabled = true
	forms.dialogFacturacionClientesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Facturacion Clientes", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogFacturacionClientesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"13F0CB04-4202-40F3-AC96-5EADA566D289"}
 */
function GCshowDialogFacturacionClientesAgnos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogFacturacionClientesAgnosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogFacturacionClientesAgnosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogFacturacionClientesAgnosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogFacturacionClientesAgnosGC.controller.enabled = true
	forms.dialogFacturacionClientesAgnosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Facturacion Clientes Agnos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogFacturacionClientesAgnosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"57E2A92B-5009-403A-8704-BC2AEE4A0DA8"}
 */
function GCshowDialogFacturacionProveedores(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogFacturacionProveedoresGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogFacturacionProveedoresGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogFacturacionProveedoresGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogFacturacionProveedoresGC.controller.enabled = true
	forms.dialogFacturacionProveedoresGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Facturacion Proveedores", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogFacturacionProveedoresGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"9289EFDF-F04B-411B-8497-E4A968866C1B"}
 */
function GCshowDialogFacturacionProveedoresAgnos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogFacturacionProveedoresAgnosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogFacturacionProveedoresAgnosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogFacturacionProveedoresAgnosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogFacturacionProveedoresAgnosGC.controller.enabled = true
	forms.dialogFacturacionProveedoresAgnosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Facturacion Proveedores Agnos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogFacturacionProveedoresAgnosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"75E832D1-131E-42EF-9F2E-BD51BC7B6A1E"}
 */
function GCshowDialogImpresionFacturasProforma(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogImpresionFacturasProformaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogImpresionFacturasProformaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogImpresionFacturasProformaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogImpresionFacturasProformaGC.controller.enabled = true
	forms.dialogImpresionFacturasProformaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Impresion Facturas Proforma", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogImpresionFacturasProformaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"B40F0ABF-1A4A-490E-8CAB-A2F45B2E99D6"}
 */
function GCshowDialogImpresionNotas(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogImpresionNotasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogImpresionNotasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogImpresionNotasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogImpresionNotasGC.controller.enabled = true
	forms.dialogImpresionNotasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Impresion Notas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogImpresionNotasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"38C71ABD-DF33-4353-8F84-08E2F15AE690"}
 */
function GCshowDialogExportacionDatos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogExportacionDatosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogExportacionDatosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogExportacionDatosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogExportacionDatosGC.controller.enabled = true
	forms.dialogExportacionDatosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Exportacion Datos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogExportacionDatosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"05973B20-CDA7-40C0-B5C2-B00ACCB302FB"}
 */
function GCshowDialogImportacionDatos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogImportacionDatosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogImportacionDatosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogImportacionDatosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogImportacionDatosGC.controller.enabled = true
	forms.dialogImportacionDatosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Importacion Datos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogImportacionDatosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"960E9BD0-34FE-44AB-B618-58DC91CAB9BD"}
 */
function GCshowDialogBorradoDatos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogBorradoGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogBorradoGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogBorradoGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogBorradoGC.controller.enabled = true
	forms.dialogBorradoGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Borrado Datos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogBorradoGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A06B1BE7-EE76-49A5-8DD8-1E093587E733"}
 */
function GCshowDialogImpresionAlbaranes(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogImpresionAlbaranesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogImpresionAlbaranesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogImpresionAlbaranesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogImpresionAlbaranesGC.controller.enabled = true
	forms.dialogImpresionAlbaranesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Impresion Albaranes", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogImpresionAlbaranesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"F1D1BBA6-031B-4581-AFC0-3D29BC244D40"}
 */
function GCshowDialogImpresionPresupuestos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogImpresionPresupuestosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogImpresionPresupuestosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogImpresionPresupuestosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogImpresionPresupuestosGC.controller.enabled = true
	forms.dialogImpresionPresupuestosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Impresion Presupuestos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogImpresionPresupuestosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"3E9AC9AA-E415-4A83-8705-CDB7052F8F1A"}
 */
function GCshowDialogConsultaPresupuestos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaPresupuestosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaPresupuestosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaPresupuestosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaPresupuestosGC.controller.enabled = true
	forms.dialogConsultaPresupuestosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Presupuestos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaPresupuestosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"7C1335B1-E3CC-4346-A233-3AF197EA7560"}
 */
function GCshowDialogConsultaVentasArticulos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaVentasArticulosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaVentasArticulosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaVentasArticulosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaVentasArticulosGC.controller.enabled = true
	forms.dialogConsultaVentasArticulosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Ventas Articulos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaVentasArticulosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D1CC5B39-CE19-4336-B37A-24912A57069B"}
 */
function GCshowDialogConsultaBeneficiosArticulos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaBeneficiosArticulosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaBeneficiosArticulosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaBeneficiosArticulosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaBeneficiosArticulosGC.controller.enabled = true
	forms.dialogConsultaBeneficiosArticulosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Beneficios Articulos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaBeneficiosArticulosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"E64B818D-0A00-43D3-B6D2-F6A8ADF6463C"}
 */
function GCshowDialogConsultaVentasZonas(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaVentasZonasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaVentasZonasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaVentasZonasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaVentasZonasGC.controller.enabled = true
	forms.dialogConsultaVentasZonasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Ventas Zonas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaVentasZonasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"271FE50A-A319-434B-86D0-3CF65AE32A23"}
 */
function GCshowDialogABCFacturacionClientes(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogABCFacturacionClientesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogABCFacturacionClientesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogABCFacturacionClientesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogABCFacturacionClientesGC.controller.enabled = true
	forms.dialogABCFacturacionClientesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("ABC Facturacion Clientes", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogABCFacturacionClientesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"CF5AF25F-3CC0-438C-8F32-561687BACC5A"}
 */
function GCshowDialogConsultaComprasArticulos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaComprasArticulosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaComprasArticulosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaComprasArticulosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaComprasArticulosGC.controller.enabled = true
	forms.dialogConsultaComprasArticulosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Compras Articulos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaComprasArticulosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"14998888-9C54-4262-B556-513EA4D6F558"}
 */
function GCshowDialogConsultaComprasProveedores(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaComprasProveedoresGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaComprasProveedoresGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaComprasProveedoresGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaComprasProveedoresGC.controller.enabled = true
	forms.dialogConsultaComprasProveedoresGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Compras Proveedores", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaComprasProveedoresGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"C2614310-F42D-4F52-95C1-0B674F4316EA"}
 */
function GCshowDialogConsultaVentasFamilias(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaVentasFamiliasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaVentasFamiliasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaVentasFamiliasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaVentasFamiliasGC.controller.enabled = true
	forms.dialogConsultaVentasFamiliasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Ventas Familias", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaVentasFamiliasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A1AF5D07-E8B0-4834-8FB3-7487E9B93CC2"}
 */
function GCshowDialogConsultaBeneficiosFamilias(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaBeneficiosFamiliasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaBeneficiosFamiliasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaBeneficiosFamiliasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaBeneficiosFamiliasGC.controller.enabled = true
	forms.dialogConsultaBeneficiosFamiliasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Beneficios Familias", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaBeneficiosFamiliasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"0190B36B-66C6-4427-BAAD-2573599655AA"}
 */
function GCshowDialogConsultaComprasFamilias(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaComprasFamiliasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaComprasFamiliasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaComprasFamiliasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaComprasFamiliasGC.controller.enabled = true
	forms.dialogConsultaComprasFamiliasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Compras Familias", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaComprasFamiliasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"5C9381CC-C8C9-4282-B11D-FAF00DA80E4C"}
 */
function GCshowDialogConsultaVentasClientes(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaVentasClientesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaVentasClientesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaVentasClientesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaVentasClientesGC.controller.enabled = true
	forms.dialogConsultaVentasClientesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Ventas Clientes", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaVentasClientesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"7496749A-C3F2-46D9-830D-AF4BE1FA55DE"}
 */
function GCshowDialogConsultaBeneficiosClientes(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaBeneficiosClientesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaBeneficiosClientesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaBeneficiosClientesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaBeneficiosClientesGC.controller.enabled = true
	forms.dialogConsultaBeneficiosClientesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Beneficios Clientes", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaBeneficiosClientesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"202361C4-0F83-4F39-AC0F-ED48DAB68C9D"}
 */
function GCshowDialogConsultaPedidos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaPedidosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaPedidosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaPedidosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaPedidosGC.controller.enabled = true
	forms.dialogConsultaPedidosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Pedidos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaPedidosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"3640D192-B61C-4941-A9A8-0CDC18DFDF67"}
 */
function GCshowDialogConsultaFacturasCompras(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaFacturasComprasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaFacturasComprasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaFacturasComprasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaFacturasComprasGC.controller.enabled = true
	forms.dialogConsultaFacturasComprasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Facturas Compras", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaFacturasComprasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D283140E-0B11-48C7-BE2E-C6BDC9BEEC2F"}
 */
function GCshowDialogConsultaAlbaranesCompras(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaAlbaranesComprasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaAlbaranesComprasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaAlbaranesComprasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaAlbaranesComprasGC.controller.enabled = true
	forms.dialogConsultaAlbaranesComprasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Albaranes Compras", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaAlbaranesComprasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"9D8D672B-D2EA-4146-B95E-B13A260416EE"}
 */
function GCshowDialogConsultaPedidosCompras(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaPedidosComprasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaPedidosComprasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaPedidosComprasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaPedidosComprasGC.controller.enabled = true
	forms.dialogConsultaPedidosComprasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Pedidos Compras", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaPedidosComprasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"15E0D758-1963-4025-8E00-8A146DB35327"}
 */
function GCshowDialogImpresionPedidosCompras(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogImpresionPedidosComprasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogImpresionPedidosComprasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogImpresionPedidosComprasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogImpresionPedidosComprasGC.controller.enabled = true
	forms.dialogImpresionPedidosComprasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Impresion Pedidos Compras", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogImpresionPedidosComprasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"162484C2-90FE-4EAD-8782-924515CD9785"}
 */
function GCshowDialogAlbaranesPendFacturar(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaAlbaranesPendientesFacturarGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaAlbaranesPendientesFacturarGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaAlbaranesPendientesFacturarGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaAlbaranesPendientesFacturarGC.controller.enabled = true
	forms.dialogConsultaAlbaranesPendientesFacturarGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Albaranes Pendientes Facturar", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaAlbaranesPendientesFacturarGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"18356A2E-1704-4690-AD8B-03EE9382C1BB"}
 */
function GCshowDialogActualizarStockAlbaranes(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogActualizarStockAlbaranesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogActualizarStockAlbaranesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogActualizarStockAlbaranesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogActualizarStockAlbaranesGC.controller.enabled = true
	forms.dialogActualizarStockAlbaranesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Actualizar Stock Albaran", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogActualizarStockAlbaranesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"DB9E5D33-298F-4FDB-A72C-A728A3AD02E7"}
 */
function GCshowDialogActualizarStockAlbaranesCompras(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogActualizarStockAlbaranesComprasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogActualizarStockAlbaranesComprasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogActualizarStockAlbaranesComprasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogActualizarStockAlbaranesComprasGC.controller.enabled = true
	forms.dialogActualizarStockAlbaranesComprasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Actualizar Stock Albaran Compras", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogActualizarStockAlbaranesComprasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"8C168921-2761-449F-B250-990B3583CF5C"}
 */
function GCshowDialogConsultaAlbaranes(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaAlbaranGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaAlbaranGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaAlbaranGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaAlbaranGC.controller.enabled = true
	forms.dialogConsultaAlbaranGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Albaran", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaAlbaranGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"5A96CBFF-98FA-49A7-A9A4-766760771227"}
 */
function GCshowDialogPDFViewer2(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_DatosConexionGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	//forms.dialog_DatosConexion.elements.tabs_dlg.tabIndex = whatTab
	//forms.dialog_DatosConexion.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogpdfDocumentViewer2GC.controller.enabled = true
	forms.dialogpdfDocumentViewer2GC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("PDF", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogpdfDocumentViewer2GC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"0CD65AA6-B604-47F6-AF3B-E107A55484D0"}
 */
function GCshowDialogDatosConexion(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_DatosConexionGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	//forms.dialog_DatosConexion.elements.tabs_dlg.tabIndex = whatTab
	//forms.dialog_DatosConexion.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DatosConexionGC.controller.enabled = true
	forms.dialog_DatosConexionGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Datos Conexion", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DatosConexionGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A1283C96-406D-482F-979C-8BB3CC82499B"}
 */
function GCshowDialogFormasPago(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_FormasPagoGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_FormasPagoGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_FormasPagoGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_FormasPagoGC.controller.enabled = true
	forms.dialog_FormasPagoGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Formas Pago", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_FormasPagoGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"29680A27-F00C-40DD-AA0D-BCC8726ADBCC"}
 */
function GCshowDialogObservacion(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_FormasPagoGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_ObservacionGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_ObservacionGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_ObservacionGC.controller.enabled = true
	forms.dialog_ObservacionGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Observaciones", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_ObservacionGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
  *
 * @properties={typeid:24,uuid:"1BBCE46C-53F6-4ADC-8146-FA438F0B65FC"}
 */
function GCshowDialogTransportistas(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_FormasPagoGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_TransportesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_TransportesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_TransportesGC.controller.enabled = true
	forms.dialog_TransportesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Transportistas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_TransportesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"AD4EF8AB-D991-4492-B32D-0C27E572B6DF"}
 */
function GCshowDialogAgentes(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_FormasPagoGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_AgentesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_AgentesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_AgentesGC.controller.enabled = true
	forms.dialog_AgentesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Agentes", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_AgentesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A0C6B254-7477-4BEB-A373-377C9BDED804"}
 */
function GCshowDialogGeneracionAlbaran(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogGeneracion_AlbaranGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogGeneracion_AlbaranGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogGeneracion_AlbaranGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogGeneracion_AlbaranGC.controller.enabled = true
	forms.dialogGeneracion_AlbaranGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Generacion Albaran", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialogGeneracion_AlbaranGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"2B5B6DDD-A1AA-4187-8605-090CE01EC41E"}
 */
function GCshowDialogGeneracionAlbaran2(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogGeneracion_Albaran2GC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogGeneracion_Albaran2GC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogGeneracion_Albaran2GC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogGeneracion_Albaran2GC.controller.enabled = true
	forms.dialogGeneracion_Albaran2GC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Generacion Albaran", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialogGeneracion_Albaran2GC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"2D30C4D8-F23E-4B4D-B407-FECFB326AE46"}
 */
function GCshowDialogGeneracionFactura(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogGeneracion_FacturaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogGeneracion_FacturaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogGeneracion_FacturaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogGeneracion_FacturaGC.controller.enabled = true
	forms.dialogGeneracion_FacturaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Generacion Factura", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialogGeneracion_FacturaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"0F1D9B57-4AC4-40DC-90D2-12A1EE65A29E"}
 */
function GCshowDialogGeneracionFactura2(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogGeneracion_Factura2GC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogGeneracion_Factura2GC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogGeneracion_Factura2GC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogGeneracion_Factura2GC.controller.enabled = true
	forms.dialogGeneracion_Factura2GC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Generacion Factura", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialogGeneracion_Factura2GC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"350B2415-7319-4259-BF1E-04B5D9B2124F"}
 */
function GCshowDialogGeneracionFactura4(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogGeneracion_Factura4GC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogGeneracion_Factura4GC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogGeneracion_Factura4GC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogGeneracion_Factura4GC.controller.enabled = true
	forms.dialogGeneracion_Factura4GC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Generacion Factura", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialogGeneracion_Factura4GC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"9C43B417-C3C1-4695-A8F3-E93DB859AA5B"}
 */
function GCshowDialogGeneracionFactura3(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogGeneracion_Factura3GC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogGeneracion_Factura3GC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogGeneracion_Factura3GC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogGeneracion_Factura3GC.controller.enabled = true
	forms.dialogGeneracion_Factura3GC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Generacion Factura Proforma", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialogGeneracion_Factura3GC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"01A3F34A-0674-4892-8BB6-959E18CD61F7"}
 */
function GCshowDialogGeneracionFactura5(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogGeneracion_Factura5GC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogGeneracion_Factura5GC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogGeneracion_Factura5GC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogGeneracion_Factura5GC.controller.enabled = true
	forms.dialogGeneracion_Factura5GC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Generacion Factura", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialogGeneracion_Factura5GC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"86E6BAEE-3518-407A-8A54-3CDE7E687203"}
 */
function GCshowDialogPaises(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_PaisesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_PaisesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_PaisesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_PaisesGC.controller.enabled = true
	forms.dialog_PaisesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Paises", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_PaisesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"447A22D2-20D8-45FC-BE11-01337A5FB988"}
 */
function GCshowDialogAyuda(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_AyudaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_AyudaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_AyudaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_AyudaGC.controller.enabled = true
	forms.dialog_AyudaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Ayuda", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_AyudaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"2EE40FD6-03C2-425C-8575-EFE594365C59"}
 */
function GCshowDialogParametrosAplicacion(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogParametrosAplicacionGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogParametrosAplicacionGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogParametrosAplicacionGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogParametrosAplicacionGC.controller.enabled = true
	forms.dialogParametrosAplicacionGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Parametros Aplicacion", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialogParametrosAplicacionGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"2BBC338D-BC43-4BA9-8102-29653046707A"}
 */
function GCshowDialogRenovacion(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_renovacionGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_renovacionGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_renovacionGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_renovacionGC.controller.enabled = true
	forms.dialog_renovacionGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Renovación", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_renovacionGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"87C7445B-85B1-4B2F-9C56-B2460670C63B"}
 */
function GCshowDialogAgendaUsuarioLineas(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_AgendaUsuario_LineasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_AgendaUsuario_LineasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_AgendaUsuario_LineasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_AgendaUsuario_LineasGC.controller.enabled = true
	forms.dialog_AgendaUsuario_LineasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Agenda Usuario Lineas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_AgendaUsuario_LineasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"25DA9A5E-A86F-4520-9A47-340BB273DA2B"}
 */
function GCshowDialogArticulos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_ArticulosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_ArticulosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_ArticulosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_ArticulosGC.controller.enabled = true
	forms.dialog_ArticulosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Articulos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_ArticulosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"804E569F-2F58-42DB-AC77-B02823D914DB"}
 */
function GCshowDialogMateriales(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_ArticulosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_MaterialesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_MaterialesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_MaterialesGC.controller.enabled = true
	forms.dialog_MaterialesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Materiales", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_MaterialesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"0F568799-A6C8-434E-AD06-F839E0C22614"}
 */
function GCshowDialogOperarios(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_OperariosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_OperariosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_OperariosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_OperariosGC.controller.enabled = true
	forms.dialog_OperariosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("DialogOperarios", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_OperariosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"298B5743-5CA4-4E59-8BC4-2A1FD4C3A12E"}
 */
function GCshowDialogFacturaLinea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogFacturaLineaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogFacturaLineaGC.elements.btn_3.text = btn3Label
		forms.dialogFacturaLineaGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogFacturaLineaGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogFacturaLineaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogFacturaLineaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogFacturaLineaGC.controller.enabled = true
	forms.dialogFacturaLineaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Factura Linea", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogFacturaLineaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D1D6BE31-69B3-47FA-85D0-8F167903F458"}
 */
function GCshowExportacionDatosTBAI(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_ExportarDatosTBAI.elements.btn_cancel.text = cancelBtnLabel
	}

	

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_ExportarDatosTBAI.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_ExportarDatosTBAI.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_ExportarDatosTBAI.controller.enabled = true
	forms.dialog_ExportarDatosTBAI.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Exportar Datos TBAI", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_ExportarDatosTBAI);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"70F022AD-7D58-43A7-89E3-FAE8AB4213D5"}
 */
function GCshowImportarDatosTBAI(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogImportarDatosTBAIGC.elements.btn_cancel.text = cancelBtnLabel
	}

	

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogImportarDatosTBAIGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogImportarDatosTBAIGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogImportarDatosTBAIGC.controller.enabled = true
	forms.dialogImportarDatosTBAIGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Importar datos TBAI", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogImportarDatosTBAIGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D2EB7C4D-394F-42F4-B42A-F24D884B4A00"}
 */
function GCshowDialogObserv(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogObservacionesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogObservacionesGC.elements.btn_3.text = btn3Label
		forms.dialogObservacionesGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogObservacionesGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogObservacionesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogObservacionesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogObservacionesGC.controller.enabled = true
	forms.dialogObservacionesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Observacion", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogObservacionesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
  *
 * @properties={typeid:24,uuid:"F8DE9A34-362C-4D56-A200-E401F4895294"}
 */
function GCshowDialogFP(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogFormaPagoGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogFormaPagoGC.elements.btn_3.text = btn3Label
		forms.dialogFormaPagoGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogFormaPagoGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogFormaPagoGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogFormaPagoGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogFormaPagoGC.controller.enabled = true
	forms.dialogFormaPagoGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Forma Pago", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogFormaPagoGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"05B11EA3-5967-437E-B2EB-A9FD83FFA248"}
 */
function GCshowDialogClientesNotas(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogClientesNotasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogClientesNotasGC.elements.btn_3.text = btn3Label
		forms.dialogClientesNotasGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogClientesNotasGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogClientesNotasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogClientesNotasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogClientesNotasGC.controller.enabled = true
	forms.dialogClientesNotasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Clientes Notas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogClientesNotasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"5E80EBAD-9B08-49F0-B04B-DF56D951F1FB"}
 */
function GCshowDialogAlbaranNotas(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogAlbaranNotasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogAlbaranNotasGC.elements.btn_3.text = btn3Label
		forms.dialogAlbaranNotasGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogAlbaranNotasGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogAlbaranNotasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogAlbaranNotasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogAlbaranNotasGC.controller.enabled = true
	forms.dialogAlbaranNotasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Albaran Notas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogAlbaranNotasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"350EE3CC-EB69-4A41-9ACE-3C1603710045"}
 */
function GCshowDialogPedidosNotas(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogPedidosNotasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogPedidosNotasGC.elements.btn_3.text = btn3Label
		forms.dialogPedidosNotasGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogPedidosNotasGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogPedidosNotasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogPedidosNotasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogPedidosNotasGC.controller.enabled = true
	forms.dialogPedidosNotasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Pedidos Notas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogPedidosNotasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"864CA786-034F-4ADD-B8AF-CD813A3F2BD3"}
 */
function GCshowDialogArticulosNotas(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogArticulosNotasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogArticulosNotasGC.elements.btn_3.text = btn3Label
		forms.dialogArticulosNotasGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogArticulosNotasGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogArticulosNotasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogArticulosNotasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogArticulosNotasGC.controller.enabled = true
	forms.dialogArticulosNotasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Articulos Notas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogArticulosNotasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"6A36B61E-9414-497D-8EF2-F64E980898A4"}
 */
function GCshowDialogProveedoresNotas(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogProveedoresNotasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogProveedoresNotasGC.elements.btn_3.text = btn3Label
		forms.dialogProveedoresNotasGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogProveedoresNotasGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogProveedoresNotasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogProveedoresNotasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogProveedoresNotasGC.controller.enabled = true
	forms.dialogProveedoresNotasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Proveedores Notas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogProveedoresNotasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"62C743D2-1561-4D24-961A-660F3456E281"}
 */
function GCshowDialogClientesDireccionFacturacion(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogClientesDireccionFacturacionGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogClientesDireccionFacturacionGC.elements.btn_3.text = btn3Label
		forms.dialogClientesDireccionFacturacionGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogClientesDireccionFacturacionGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogClientesDireccionFacturacionGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogClientesDireccionFacturacionGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogClientesDireccionFacturacionGC.controller.enabled = true
	forms.dialogClientesDireccionFacturacionGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Clientes Direccion Facturacion", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogClientesDireccionFacturacionGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"1966E5A9-3ACA-46CD-9BE9-486E2D65EFCA"}
 */
function GCshowDialogClientesDocumentacion(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialogClientesDocumentacionGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		//forms.dialogClientesDocumentacionGC.elements.btn_3.text = btn3Label
		//forms.dialogClientesDocumentacionGC.elements.btn_3.visible = true

	}
	else
	{
		//forms.dialogClientesDocumentacionGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogClientesDocumentacionGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogClientesDocumentacionGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogClientesDocumentacionGC.controller.enabled = true
	forms.dialogClientesDocumentacionGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Clientes Documentacion", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogClientesDocumentacionGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"494B0E17-11BB-4A2D-A516-B5F6A219FB07"}
 */
function GCshowDialogClientesVacaciones(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialogClientesDocumentacionGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		//forms.dialogClientesDocumentacionGC.elements.btn_3.text = btn3Label
		//forms.dialogClientesDocumentacionGC.elements.btn_3.visible = true

	}
	else
	{
		//forms.dialogClientesDocumentacionGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogClientesVacacionesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogClientesVacacionesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogClientesVacacionesGC.controller.enabled = true
	forms.dialogClientesVacacionesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Clientes Vacaciones", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogClientesVacacionesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"2004843A-C7BF-4B92-9DA4-9D2927FABB34"}
 */
function GCshowDialogProveedoresDocumentacion(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialogProveedoresDocumentacionGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		//forms.dialogProveedoresDocumentacionGC.elements.btn_3.text = btn3Label
		//forms.dialogProveedoresDocumentacionGC.elements.btn_3.visible = true

	}
	else
	{
		//forms.dialogProveedoresDocumentacionGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogProveedoresDocumentacionGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogProveedoresDocumentacionGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogProveedoresDocumentacionGC.controller.enabled = true
	forms.dialogClientesDocumentacionGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Proveedores Documentacion", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogProveedoresDocumentacionGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"1E45CB32-13EE-4E9E-991E-ED208B6F2C17"}
 */
function GCshowDialogClientesContactos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogClientesContactosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogClientesContactosGC.elements.btn_3.text = btn3Label
		forms.dialogClientesContactosGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogClientesContactosGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogClientesContactosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogClientesContactosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogClientesContactosGC.controller.enabled = true
	forms.dialogClientesContactosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Clientes Persona Contacto", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogClientesContactosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"9A41F76F-984E-4768-8D1D-3A12FD92E0E7"}
 */
function GCshowDialogClienteVacaciones(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogClienteVacacionesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogClienteVacacionesGC.elements.btn_3.text = btn3Label
		forms.dialogClienteVacacionesGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogClienteVacacionesGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogClienteVacacionesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogClienteVacacionesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogClienteVacacionesGC.controller.enabled = true
	forms.dialogClienteVacacionesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Cliente Vacaciones", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogClienteVacacionesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D5EABB33-C095-4634-B9B5-6E1C4BD7ECC3"}
 */
function GCshowDialogClientesPrecioArticulo(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogClientesPrecioArticuloGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogClientesPrecioArticuloGC.elements.btn_3.text = btn3Label
		forms.dialogClientesPrecioArticuloGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogClientesPrecioArticuloGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogClientesPrecioArticuloGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogClientesPrecioArticuloGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogClientesPrecioArticuloGC.controller.enabled = true
	forms.dialogClientesPrecioArticuloGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Clientes Precio Articulo", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogClientesPrecioArticuloGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"9361922B-E1CF-4130-BA48-61566B351C92"}
 */
function GCshowDialogProveedoresPrecioMaterial(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogProveedoresPrecioMaterialGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogProveedoresPrecioMaterialGC.elements.btn_3.text = btn3Label
		forms.dialogProveedoresPrecioMaterialGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogProveedoresPrecioMaterialGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogProveedoresPrecioMaterialGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogProveedoresPrecioMaterialGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogProveedoresPrecioMaterialGC.controller.enabled = true
	forms.dialogProveedoresPrecioMaterialGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Proveedores Precio Material", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogProveedoresPrecioMaterialGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"C9D84840-B9DE-4C41-93CD-A0C019721CA2"}
 */
function GCshowDialogArticuloPrecioClientes(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogArticulosPrecioClientesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogArticulosPrecioClientesGC.elements.btn_3.text = btn3Label
		forms.dialogArticulosPrecioClientesGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogArticulosPrecioClientesGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogArticulosPrecioClientesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogArticulosPrecioClientesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogArticulosPrecioClientesGC.controller.enabled = true
	forms.dialogArticulosPrecioClientesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Articulo Precio Clientes", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogArticulosPrecioClientesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"BFF83318-842D-4C57-9112-EF498335EBC5"}
 */
function GCshowDialogMaterialPrecioProveedores(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogMaterialPrecioProveedoresGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogMaterialPrecioProveedoresGC.elements.btn_3.text = btn3Label
		forms.dialogMaterialPrecioProveedoresGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogMaterialPrecioProveedoresGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogMaterialPrecioProveedoresGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogMaterialPrecioProveedoresGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogMaterialPrecioProveedoresGC.controller.enabled = true
	forms.dialogMaterialPrecioProveedoresGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Material Precio Proveedores", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogMaterialPrecioProveedoresGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D58F9DE6-5D95-4130-8D16-2558C3DE7F6E"}
 */
function GCshowDialogFacturaCobros(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_FacturaCobrosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog_FacturaCobrosGC.elements.btn_3.text = btn3Label
		forms.dialog_FacturaCobrosGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog_FacturaCobrosGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_FacturaCobrosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_FacturaCobrosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_FacturaCobrosGC.controller.enabled = true
	forms.dialog_FacturaCobrosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Factura Cobro", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_FacturaCobrosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A48E09D0-AD8E-4AEC-B4D2-E189C80708DB"}
 */
function GCshowDialogFacturaPagos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_FacturaPagosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog_FacturaPagosGC.elements.btn_3.text = btn3Label
		forms.dialog_FacturaPagosGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog_FacturaPagosGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_FacturaPagosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_FacturaPagosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_FacturaPagosGC.controller.enabled = true
	forms.dialog_FacturaPagosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Factura Pagos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_FacturaPagosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"7905F058-40CD-4007-9340-A741FFB527B5"}
 */
function GCshowDialogFacturaProformaLinea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogFacturaProformaLineaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogFacturaProformaLineaGC.elements.btn_3.text = btn3Label
		forms.dialogFacturaProformaLineaGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogFacturaProformaLineaGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogFacturaProformaLineaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogFacturaProformaLineaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogFacturaProformaLineaGC.controller.enabled = true
	forms.dialogFacturaProformaLineaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Factura Proforma Linea", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogFacturaProformaLineaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"3DBD654B-02B6-4607-822B-E17F65979CFD"}
 */
function GCshowDialogCobrosPagosPendientes(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogConsultaCobrosPagosPendientesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogConsultaCobrosPagosPendientesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogConsultaCobrosPagosPendientesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogConsultaCobrosPagosPendientesGC.controller.enabled = true
	forms.dialogConsultaCobrosPagosPendientesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Consulta Cobros Pagos Pendientes", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogConsultaCobrosPagosPendientesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"E3D617DA-8918-4302-B26B-0623777A7DF3"}
 */
function GCshowDialogContacta(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_ContactaCONTA.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_ContactaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_ContactaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_ContactaGC.controller.enabled = true
	forms.dialog_ContactaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("ContactaGC", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= "Solicitud credenciales Login";
	win.resizable = false;
	win.show(forms.dialog_ContactaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"516F9DF3-6C10-4CB8-A09D-CCC0B310323C"}
 */
function GCshowDialogNotaLinea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogNotaLineaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogNotaLineaGC.elements.btn_3.text = btn3Label
		forms.dialogNotaLineaGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogNotaLineaGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogNotaLineaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogNotaLineaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogNotaLineaGC.controller.enabled = true
	forms.dialogNotaLineaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Nota Linea", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogNotaLineaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"52A0E0BD-A191-41D0-A38A-0C11AD814AB3"}
 */
function GCshowDialogImagenArticulo(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialogImagenArticuloGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogNotaLinea.elements.btn_3.text = btn3Label
		forms.dialogNotaLinea.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogNotaLinea.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogImagenArticuloGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogImagenArticuloGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogImagenArticuloGC.controller.enabled = true
	forms.dialogImagenArticuloGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Imagen Articulo", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogImagenArticuloGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"E760BDD3-2E4B-4880-9BC5-AE45F43A580C"}
 */
function GCshowDialogFicheroGenerar(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogC1958GC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogC1958GC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogC1958GC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogC1958GC.controller.enabled = true
	forms.dialogC1958GC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("C1958GC", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.resizable = false;
	win.show(forms.dialogC1958GC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"B63641DF-6BE5-4C39-884F-8C3F89476E2F"}
 */
function GCshowDialogFacturaCompraLinea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogFacturaCompraLineaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogFacturaCompraLineaGC.elements.btn_3.text = btn3Label
		forms.dialogFacturaCompraLineaGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogFacturaCompraLineaGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogFacturaCompraLineaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogFacturaCompraLineaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogFacturaCompraLineaGC.controller.enabled = true
	forms.dialogFacturaCompraLineaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Factura Compra Linea", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogFacturaCompraLineaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"4034BCEE-3BAB-4B06-98C1-53FA95FEBB81"}
 */
function GCshowDialogPedidoCompraLinea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogPedidoCompraLineaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogPedidoCompraLineaGC.elements.btn_3.text = btn3Label
		forms.dialogPedidoCompraLineaGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogPedidoCompraLineaGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogPedidoCompraLineaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogPedidoCompraLineaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogPedidoCompraLineaGC.controller.enabled = true
	forms.dialogPedidoCompraLineaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Pedido Compra Linea", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogPedidoCompraLineaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"83C84E7C-4D00-4A25-85EA-AF47A2E4633A"}
 */
function GCshowDialogAlbaranCompraLinea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogAlbaranCompraLineaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogAlbaranCompraLineaGC.elements.btn_3.text = btn3Label
		forms.dialogAlbaranCompraLineaGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogAlbaranCompraLineaGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogAlbaranCompraLineaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogAlbaranCompraLineaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogAlbaranCompraLineaGC.controller.enabled = true
	forms.dialogAlbaranCompraLineaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Albaran Compra Linea", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogAlbaranCompraLineaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"2C7DA3DD-EECB-4554-9166-F3D6A024BFB9"}
 */
function GCshowDialogPeticionOfertaCompraLinea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogPetOfertaCompraLineaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogPetOfertaCompraLineaGC.elements.btn_3.text = btn3Label
		forms.dialogPetOfertaCompraLineaGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogPetOfertaCompraLineaGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogPetOfertaCompraLineaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogPetOfertaCompraLineaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogPetOfertaCompraLineaGC.controller.enabled = true
	forms.dialogPetOfertaCompraLineaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Peticion Oferta Compra Linea", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogPetOfertaCompraLineaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"841D1B9D-7E73-46CE-8445-619032441B1A"}
 */
function GCshowDialogDuplicarCobroPago(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_DuplicarCobrosPagosGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DuplicarCobrosPagosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DuplicarCobrosPagosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DuplicarCobrosPagosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DuplicarCobrosPagosGC.controller.enabled = true
	forms.dialog_DuplicarCobrosPagosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Duplicar CobroPago GC", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_DuplicarCobrosPagosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"0C40790E-4CE6-4779-953E-760E5979104B"}
 */
function GCshowDialogPresupuestoLinea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogPresupuestoLineaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogPresupuestoLineaGC.elements.btn_3.text = btn3Label
		forms.dialogPresupuestoLineaGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogPresupuestoLineaGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogPresupuestoLineaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogPresupuestoLineaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogPresupuestoLineaGC.controller.enabled = true
	forms.dialogPresupuestoLineaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Presupuesto Linea", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogPresupuestoLineaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D7F5D01A-B056-4BC7-946C-1F8408265905"}
 */
function GCshowDialogPresupuestoNotasLinea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogPresupuestoNotasLineaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogPresupuestoNotasLineaGC.elements.btn_3.text = btn3Label
		forms.dialogPresupuestoNotasLineaGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogPresupuestoNotasLineaGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogPresupuestoNotasLineaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogPresupuestoNotasLineaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogPresupuestoNotasLineaGC.controller.enabled = true
	forms.dialogPresupuestoNotasLineaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Presupuesto Notas Linea", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogPresupuestoNotasLineaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"B8CCCC1D-936E-48AA-96DC-A02706C5C471"}
 */
function showDialogInventarioGC(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialogInventarioGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogInventarioGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogGeneracionFactura.elements.btn_3.text = btn3Label
		forms.dialogGeneracionFactura.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogGeneracionFactura.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogInventarioGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogInventarioGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.disableBgElements1()
	forms.dialogInventarioGC.controller.enabled = true
	forms.dialogInventarioGC.controller.readOnly = false
	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Inventario de Stocks", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= "Empresa: "+globals.Empresa+" Usuario: "+globals.GClogin_usuario+" "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogInventarioGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"CA216D5B-C77E-44D9-9457-BF1E82896320"}
 */
function showDialogExtractoMovGC(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialogExtractoMovGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogExtractoMovGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogGeneracionFactura.elements.btn_3.text = btn3Label
		forms.dialogGeneracionFactura.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogGeneracionFactura.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogExtractoMovGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogExtractoMovGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.disableBgElements1()
	forms.dialogExtractoMovGC.controller.enabled = true
	forms.dialogExtractoMovGC.controller.readOnly = false
	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Extracto de Movimiento de Almacen", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogExtractoMovGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 * @properties={typeid:24,uuid:"92F9181D-E520-4235-BA71-3A0A18AC3173"}
 */
function showDialogDiarioMovGC(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialogDiarioMovGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogDiarioMovGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogGeneracionFactura.elements.btn_3.text = btn3Label
		forms.dialogGeneracionFactura.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogGeneracionFactura.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogDiarioMovGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogDiarioMovGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.disableBgElements1()
	forms.dialogDiarioMovGC.controller.enabled = true
	forms.dialogDiarioMovGC.controller.readOnly = false
	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Diario de Movimiento de Almacen", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogDiarioMovGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"85A6DE96-A8E7-4652-B6AB-74C65D1606F6"}
 */
function GCshowDialogPedidoLinea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogPedidoLineaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogPedidoLineaGC.elements.btn_3.text = btn3Label
		forms.dialogPedidoLineaGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogPedidoLineaGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogPedidoLineaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogPedidoLineaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogPedidoLineaGC.controller.enabled = true
	forms.dialogPedidoLineaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Pedido Linea", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogPedidoLineaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"9B1A9DFF-2C63-44D5-8CFA-31DABBCF45E7"}
 */
function GCshowDialogAlbaranLinea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogAlbaranLineaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogAlbaranLineaGC.elements.btn_3.text = btn3Label
		forms.dialogAlbaranLineaGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogAlbaranLineaGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogAlbaranLineaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogAlbaranLineaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogAlbaranLineaGC.controller.enabled = true
	forms.dialogAlbaranLineaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Albaran Linea", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogAlbaranLineaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"7890F643-2F7F-4929-B1D4-D627D85C17AF"}
 */
function GCshowDialogProveedorOtrosContactos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogProveedoresOtrosContactosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialogProveedoresOtrosContactosGC.elements.btn_3.text = btn3Label
		forms.dialogProveedoresOtrosContactosGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialogProveedoresOtrosContactosGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogProveedoresOtrosContactosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogProveedoresOtrosContactosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogProveedoresOtrosContactosGC.controller.enabled = true
	forms.dialogProveedoresOtrosContactosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Proveedores Otros Contactos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogProveedoresOtrosContactosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D35E22BF-B89E-449B-A481-9E31C8288E1A"}
 */
function GCshowDialogSeleccionRemesa(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogSeleccionRemesaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogSeleccionRemesaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogSeleccionRemesaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogSeleccionRemesaGC.controller.enabled = true
	forms.dialogSeleccionRemesaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Seleccion Remesa GC", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogSeleccionRemesaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 * @properties={typeid:24,uuid:"3B17DAB4-9A61-474B-9861-07D0916FF6F8"}
 */
function GCshowDialogSelecCobrosProcesar(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogSelecCobrosProcesarGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogSelecCobrosProcesarGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogSelecCobrosProcesarGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogSelecCobrosProcesarGC.controller.enabled = true
	forms.dialogSelecCobrosProcesarGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Seleccion Cobros a Procesar GC", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogSelecCobrosProcesarGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"0CA132F4-8A13-4A5D-99B4-043D2FC67350"}
 */
function GCshowDialogRemesasC19SEPA(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogRemesasC19SEPAGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogRemesasC19SEPAGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogRemesasC19SEPAGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogRemesasC19SEPAGC.controller.enabled = true
	forms.dialogRemesasC19SEPAGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("C1958", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogRemesasC19SEPAGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"681B4265-A048-488A-AB74-96DF4169A7ED"}
 */
function GCshowDialogEfectoFactura(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_EfectosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog_EfectosGC.elements.btn_3.text = btn3Label
		forms.dialog_EfectosGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog_EfectosGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_EfectosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_EfectosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_EfectosGC.controller.enabled = true
	forms.dialog_EfectosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Efecto", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_EfectosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"FA73684E-8479-4B2B-A8DD-A4FCEF29219C"}
 */
function GCshowDialogEfectoFacturaCompras(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_EfectosComprasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog_EfectosComprasGC.elements.btn_3.text = btn3Label
		forms.dialog_EfectosComprasGC.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog_EfectosComprasGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_EfectosComprasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_EfectosComprasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_EfectosComprasGC.controller.enabled = true
	forms.dialog_EfectosComprasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Efecto", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialog_EfectosComprasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"41E4A733-269B-42F5-B097-543643A4A0C3"}
 */
function showDialogGeneracionPedidoGC(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialogGeneracion_PedidoGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogGeneracion_PedidoGC.elements.btn_cancel.text = cancelBtnLabel
	}

	//if(showBtn3 && btn3Label)
	//{
		//show the 3rd button
	//	forms.dialogGeneracion_Pedido.elements.btn_3.text = btn3Label
	//	forms.dialogGeneracion_Pedido.elements.btn_3.visible = true

	//}
	//else
	//{
	//	forms.dialogGeneracion_Pedido.elements.btn_3.visible = false
	//}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogGeneracion_PedidoGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogGeneracion_PedidoGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogGeneracion_PedidoGC.controller.enabled = true
	forms.dialogGeneracion_PedidoGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Generacion Pedido", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa+" Usuario: "+globals.GCNombreUsuario;
	win.resizable = false;
	win.show(forms.dialogGeneracion_PedidoGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"DA7F311F-2BFD-495E-A4BE-19B20000BCE3"}
 */
function GCshowDialogPoliticaProteccionDatos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialogpoliticaProteccionDatosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogpoliticaProteccionDatosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogpoliticaProteccionDatosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogpoliticaProteccionDatosGC.controller.enabled = true
	forms.dialogpoliticaProteccionDatosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Politica Proteccion Datos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= "Política de Protección de Datos";
	win.resizable = false;
	win.show(forms.dialogpoliticaProteccionDatosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"19C6B196-335F-42DE-B707-E012849DC22F"}
 */
function GCshowDialogOlvidoContraseña(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_OlvidoContraseñaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_OlvidoContraseñaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_OlvidoContraseñaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_OlvidoContraseñaGC.controller.enabled = true
	forms.dialog_OlvidoContraseñaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Restablecer Contraseña", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= "";
	win.resizable = false;
	win.show(forms.dialog_OlvidoContraseñaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"0BF84F12-111A-4555-A4FD-43DE18EB93C2"}
 */
function GCshowDialogDatosRegistro(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DatosRegistroGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DatosRegistroGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DatosRegistroGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DatosRegistroGC.controller.enabled = true
	forms.dialog_DatosRegistroGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Datos del Registro Mercantil de la Sociedad", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DatosRegistroGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"3773670C-C18E-4A7E-83AD-FBA583FAB10A"}
 */
function GCshowDialogFirmaEmail(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_FirmaEmailGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_FirmaEmailGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_FirmaEmailGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_FirmaEmailGC.controller.enabled = true
	forms.dialog_FirmaEmailGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Firma Email", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_FirmaEmailGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"3ACD1B99-E6C5-4796-934E-1D8DC6D71A93"}
 */
function GCshowDialogFirmaEmail2(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_FirmaEmail2GC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_FirmaEmail2GC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_FirmaEmail2GC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_FirmaEmail2GC.controller.enabled = true
	forms.dialog_FirmaEmail2GC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Firma Email", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_FirmaEmail2GC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"B01ACBD4-AFE8-482C-88A8-BA6904460BF2"}
 */
function GCshowDialogDatosRegistro2(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DatosRegistro2GC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DatosRegistro2GC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DatosRegistro2GC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DatosRegistro2GC.controller.enabled = true
	forms.dialog_DatosRegistro2GC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Datos del Registro Mercantil de la Sociedad", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DatosRegistro2GC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"3914B7ED-14F3-4651-B574-606B24A547C5"}
 */
function GCshowDialogEditarDatosTBAI(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_EditarDatosTBAI.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_EditarDatosTBAI.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_EditarDatosTBAI.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_EditarDatosTBAI.controller.enabled = true
	forms.dialog_EditarDatosTBAI.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Editar Datos TBAI", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_EditarDatosTBAI);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"E2A70C37-9021-45F4-AC69-F6E8E281DFD0"}
 */
function GCshowDialogEditarDatosOSATU(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_EditarDatosOSATU.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_EditarDatosOSATU.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_EditarDatosOSATU.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_EditarDatosOSATU.controller.enabled = true
	forms.dialog_EditarDatosOSATU.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Editar Datos OSATU", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_EditarDatosOSATU);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"8FB660B2-8058-4A46-B5FC-76804C111EF8"}
 */
function GCshowDialogListadoClientes(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogListadoClientesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogListadoClientesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogListadoClientesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogListadoClientesGC.controller.enabled = true
	forms.dialogListadoClientesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Listado Clientes", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialogListadoClientesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"156764F2-0776-4730-9C52-34E887BC3ECC"}
 */
function GCshowDialogListadoAgentes(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogListadoAgentesGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogListadoAgentesGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogListadoAgentesGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogListadoAgentesGC.controller.enabled = true
	forms.dialogListadoAgentesGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Listado Agentes", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialogListadoAgentesGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"774D4709-8891-465D-8CC8-6FEFB191143B"}
 */
function GCshowDialogListadoArticulos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogListadoArticulosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogListadoArticulosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogListadoArticulosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogListadoArticulosGC.controller.enabled = true
	forms.dialogListadoArticulosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Listado Articulos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialogListadoArticulosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"ADD42450-20F8-4444-8B9F-2DAE18213F65"}
 */
function GCshowDialogEditarPerfilUsuario(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogEditarPerfilUsuarioGC.elements.btn_cancel.text = cancelBtnLabel
	}

	if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		//forms.dialogEditarPerfilUsuarioGC.elements.btn_3.text = btn3Label
		//forms.dialogEditarPerfilUsuarioGC.elements.btn_3.visible = true

	}
	else
	{
		//forms.dialogEditarPerfilUsuarioGC.elements.btn_3.visible = false
	}

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogEditarPerfilUsuarioGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogEditarPerfilUsuarioGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogEditarPerfilUsuarioGC.controller.enabled = true
	forms.dialogEditarPerfilUsuarioGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Editar Perfil Usuario", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialogEditarPerfilUsuarioGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"4F931F9D-E81A-4150-84DA-A4531C2B52AA"}
 */
function GCshowDialogListadoProveedores(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialogListadoProveedoresGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogListadoProveedoresGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogListadoProveedoresGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogListadoProveedoresGC.controller.enabled = true
	forms.dialogListadoProveedoresGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Listado Proveedores", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialogListadoProveedoresGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"1BBB7730-7DBE-4B60-B387-AEFC621AFB6C"}
 */
function GCshowDialogCuentasBancos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialog_CuentasBancosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_CuentasBancosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_CuentasBancosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_CuentasBancosGC.controller.enabled = true
	forms.dialog_CuentasBancosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Cuentas Bancos", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_CuentasBancosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"8B551A94-4298-4FF4-801C-959911DE7F54"}
 */
function GCshowDialogClave(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_ClaveGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_ClaveGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_ClaveGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_ClaveGC.controller.enabled = true
	forms.dialog_ClaveGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("DialogClave", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_ClaveGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"AB7A7907-7699-4DF1-B53C-A1176A312C0B"}
 */
function GCshowDialogElijeEmpresa(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_ElijeEmpresaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_ElijeEmpresaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_ElijeEmpresaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_ElijeEmpresaGC.controller.enabled = true
	forms.dialog_ElijeEmpresaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Elije Empresa", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= "";
	win.resizable = false;
	win.show(forms.dialog_ElijeEmpresaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"C24187B2-1A25-4ECB-AF6C-9221845A0DBC"}
 */
function GCshowDialogSalir(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_SalirGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_SalirGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_SalirGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_SalirGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_SalirGC.controller.enabled = true
	forms.dialog_SalirGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("DialogSalir", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= "Salir de la Aplicación";
	win.resizable = false;
	win.show(forms.dialog_SalirGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"C6A6F106-C5E8-4021-B0DD-2CEEB6DFBC54"}
 */
function GCshowDialogDuplicarFactura(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_DuplicarFacturaGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DuplicarFacturaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DuplicarFacturaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DuplicarFacturaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DuplicarFacturaGC.controller.enabled = true
	forms.dialog_DuplicarFacturaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Duplicar Factura", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DuplicarFacturaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"7A7CC8DB-C31F-4C97-AB2E-981AE67F4084"}
 */
function GCshowDialogDuplicarFacturas(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_DuplicarFacturasGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DuplicarFacturasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DuplicarFacturasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DuplicarFacturasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DuplicarFacturasGC.controller.enabled = true
	forms.dialog_DuplicarFacturasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Duplicar Facturas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DuplicarFacturasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"AAE0F7A3-E07F-45D6-BAF0-2DE25A800EA2"}
 */
function GCshowDialogDuplicarFacturas2(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_DuplicarFacturas2GC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DuplicarFacturas2GC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DuplicarFacturas2GC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DuplicarFacturas2GC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DuplicarFacturas2GC.controller.enabled = true
	forms.dialog_DuplicarFacturas2GC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Duplicar Facturas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DuplicarFacturas2GC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"AE3DA3BA-E0BF-4605-B7A8-B99EC540CDC2"}
 */
function GCshowDialogDuplicarAlbaran(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_DuplicarAlbaranGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DuplicarAlbaranGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DuplicarAlbaranGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DuplicarAlbaranGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DuplicarAlbaranGC.controller.enabled = true
	forms.dialog_DuplicarAlbaranGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Duplicar Albaran", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DuplicarAlbaranGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"2C3DDE97-544B-42ED-9E2B-FE7E8ED76D74"}
 */
function GCshowDialogDuplicarPresupuesto(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_DuplicarPresupuestoGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DuplicarPresupuestoGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DuplicarPresupuestoGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DuplicarPresupuestoGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DuplicarPresupuestoGC.controller.enabled = true
	forms.dialog_DuplicarPresupuestoGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Duplicar Presupuesto", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DuplicarPresupuestoGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"C924CD28-32E7-4007-9605-C17C541A88C0"}
 */
function GCshowDialogDuplicarPedido(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_DuplicarPedidoGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DuplicarPedidoGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DuplicarPedidoGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DuplicarPedidoGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DuplicarPedidoGC.controller.enabled = true
	forms.dialog_DuplicarPedidoGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Duplicar Pedido", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DuplicarPedidoGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"CEDC162D-60E6-4FAA-9421-1FA47D873CA3"}
 */
function GCshowDialogDuplicarPedidoCompras(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_DuplicarPedidoComprasGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DuplicarPedidoComprasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DuplicarPedidoComprasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DuplicarPedidoComprasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DuplicarPedidoComprasGC.controller.enabled = true
	forms.dialog_DuplicarPedidoComprasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Duplicar Pedido Compras", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DuplicarPedidoComprasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"45CA85F2-0651-4484-A8D4-AAE019E91C36"}
 */
function GCshowDialogDuplicarPeticionOfertaCompras(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_DuplicarPeticionOfertaComprasGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DuplicarPeticionOfertaComprasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DuplicarPeticionOfertaComprasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DuplicarPeticionOfertaComprasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DuplicarPeticionOfertaComprasGC.controller.enabled = true
	forms.dialog_DuplicarPeticionOfertaComprasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Duplicar Peticion Compras", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DuplicarPeticionOfertaComprasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A1EA78E8-44A4-4684-8E8E-BF7A7C3098D1"}
 */
function GCshowDialogDuplicarFacturaCompras(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_DuplicarFacturaComprasGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DuplicarFacturaComprasGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DuplicarFacturaComprasGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DuplicarFacturaComprasGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DuplicarFacturaComprasGC.controller.enabled = true
	forms.dialog_DuplicarFacturaComprasGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Duplicar Factura Compras", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DuplicarFacturaComprasGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"DE122B8A-E5FE-4EFB-973A-A5C8F40812A8"}
 */
function GCshowDialogDuplicarPresupuestos(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_DuplicarPresupuestosGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DuplicarPresupuestosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DuplicarPresupuestosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DuplicarPresupuestosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DuplicarPresupuestosGC.controller.enabled = true
	forms.dialog_DuplicarPresupuestosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Duplicar Presupuesto", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DuplicarPresupuestosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"63EE0566-12E6-448C-8005-9E5AB1691A48"}
 */
function GCshowDialogDuplicarFacturaProforma(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_DuplicarFacturaProformaGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DuplicarFacturaProformaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DuplicarFacturaProformaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DuplicarFacturaProformaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DuplicarFacturaProformaGC.controller.enabled = true
	forms.dialog_DuplicarFacturaProformaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Duplicar Factura Proforma", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DuplicarFacturaProformaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A6F329B3-E695-44A8-B761-AAC93D2CCF18"}
 */
function GCshowDialogDuplicarNota(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		forms.dialog_DuplicarNotaGC.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_DuplicarNotaGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_DuplicarNotaGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_DuplicarNotaGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_DuplicarNotaGC.controller.enabled = true
	forms.dialog_DuplicarNotaGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Duplicar Nota", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= globals.GCNombreEmpresa;
	win.resizable = false;
	win.show(forms.dialog_DuplicarNotaGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"63989972-5A3C-47B4-8279-A58E0173CEEC"}
 */
function GCshowDialogUsuario(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		if(cancelBtnLabel) forms.dialog_UsuariosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialog_UsuariosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialog_UsuariosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialog_UsuariosGC.controller.enabled = true
	forms.dialog_UsuariosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("DialogUsuarios", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= "Usuarios";
	win.resizable = false;
	win.show(forms.dialog_UsuariosGC);
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 * @param {Object} arg4 // TODO generated, please specify type and doc
 * @param {Object} arg5 // TODO generated, please specify type and doc
 * @param {Object} arg6 // TODO generated, please specify type and doc
 * @param {Object} arg7 // TODO generated, please specify type and doc
 * @param {Object} arg8 // TODO generated, please specify type and doc
 * @param {Object} arg9 // TODO generated, please specify type and doc
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D5AB8456-BFC8-4F4F-BFEB-0425B6B2A66C"}
 */
function GCshowDialogUsuarios(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
{
	var title = arg0;
	var whatTab = arg1;
	var showCancelBtnOnly = arg2; //anything that is not null is a vaid value
	var cancelBtnLabel = arg3;
	var showBtn3 = arg4; //anything that is not null is valid value
	var btn3Label = arg5;
	var x = arg6;
	var y = arg7;
	var width = arg8;
	var height = arg9;

	if(showCancelBtnOnly)
	{
		//hide the OK button
		//forms.dialog_Articulo.elements.btn_ok.visible = false

		//if(cancelBtnLabel) forms.dialogUsuariosGC.elements.btn_cancel.text = cancelBtnLabel
	}

	/*if(showBtn3 && btn3Label)
	{
		//show the 3rd button
		forms.dialog2.elements.btn_3.text = btn3Label
		forms.dialog2.elements.btn_3.visible = true

	}
	else
	{
		forms.dialog2.elements.btn_3.visible = false
	}*/

	if(!whatTab || whatTab == undefined) whatTab = 1

	if(!title || title == undefined) title = ''

	forms.dialogUsuariosGC.elements.tabs_dlg.tabIndex = whatTab
	forms.dialogUsuariosGC.elements.lbl_title.text = title

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	forms.dialogUsuariosGC.controller.enabled = true
	forms.dialogUsuariosGC.controller.readOnly = false

	//show the tabpanel "dialog"
//	application.showFormInDialog(forms.dialog,  -1,-1, -1,-1,  "Dialog",  false,  false,  "Dialog",  true)
	var win = application.createWindow("Usuarios", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(-1, -1, -1, -1);
	win.title= "Usuarios";
	win.resizable = false;
	win.show(forms.dialogUsuariosGC);
}

/**
 * @public 
 * @param {JSRecord|JSFoundset} data
 * 
 * @param {String} windowName
 * 
 * @properties={typeid:24,uuid:"357FBF93-9290-43F9-9BB1-5470C0E15015"}
 */
function GCopenModalDialog(data, windowName) 
{
	// foundset to work on
    if (data) {
    	//loadFoundSet(data)
    }
    
 // Open as a non-modal form
    var win = application.getWindow(windowName)
    if(win != null) win.destroy();
	
	win = application.createWindow(windowName, JSWindow.MODAL_DIALOG);
	win.show(this)
}

/**
* Open the form as a non-modal dialog and load the data that was passed in
*
* @public
* @param {JSRecord|JSFoundset} [fs]
*
* @param {String} windowName
 *
 * @properties={typeid:24,uuid:"B68C8D4D-21E3-4524-8D13-11850200C886"}
 */
function GCopenNonModal(fs,windowName ) {
   // foundset to work on
        if (fs) {
     //loadFoundSet(fs)
        }

   // Open as a non-modal form
   var win = application.getWindow(windowName)
   if(win != null) win.destroy();
   
   win = application.createWindow(windowName, JSWindow.DIALOG)
   
  
   win.resizable = true
   win.undecorated = false
   win.show(this)
}

/**
 * 
 * @param {String} IN
 * 
 * @return {String}
 *
 *
 * @properties={typeid:24,uuid:"9E337BCB-5E11-4EA2-8CBB-297B487974C6"}
 */
function GCQuitarCaracteresEspeciales(IN)
{
	var original = "áàäéèëíìïóòöúùuñÁÀÄÉÈËÍÌÏÓÒÖÚÙÜÑçÇ";
    // Cadena de caracteres ASCII que reemplazarán los originales.
    var ascii = "aaaeeeiiiooouuunAAAEEEIIIOOOUUUNcC";
    var output = IN;
    if(output)
    {
	    for (var i=0; i<original.length; i++) {
	        // Reemplazamos los caracteres especiales.
	        output = output.replace(original.charAt(i), ascii.charAt(i));
	    }//for i
    }
    return output;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param dataProviders
 * @param columNames
 * @param template
 * @param fs
 *
 * @properties={typeid:24,uuid:"D8FD39BE-43DC-437E-BD15-C587E7DD0DE3"}
 */
function excelExport(dataProviders, columNames, template, fs){
	if(!dataProviders){
		var table = databaseManager.getTable(fs)
		dataProviders = table.getColumnNames();
	}
	
	if(!columNames){
		columNames = dataProviders;
	}
	
	var Bytes = plugins.excelxport.excelExport(fs,dataProviders,template)
	
	writeFileforDownload(Bytes,'export.xls')
}

/**
 * TODO generated, please specify type and doc for the params
 * @param Bytes
 * @param fileName
 *
 * @properties={typeid:24,uuid:"53524C63-1879-4217-BA1A-5634AFEC9746"}
 */
function writeFileforDownload(Bytes, fileName){
	
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"CA1BC8DB-C765-4278-A5EA-DECDDCF32E5B"}
 */
function uploadCallbackFunctionGC(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
   var monitor = plugins.file.streamFilesToServer(_oFile, VisualizarGC);
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile} _oFile
 *
 *
 *
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"A4D532FB-F161-43FD-B34A-458ABA7F0B67"}
 */
function VisualizarGC(_oFile)
{
	var serverURL = application.getServerURL() 
    application.showURL(serverURL + "uploads/" + _oFile.getName()+'?nodebug=true','_blank','height=600,width=800,status=yes,toolbar=no,menubar=no,location=no')
	//application.showURL(serverURL + "/uploads/" + _oFile.getName(),'_blank')
	//plugins.WebClientUtils.executeClientSideJS('location.reload();');
	/*var ext = _oFile.getContentType()
	
	forms.dlg_pdfDocumentViewer2GC.htmlString = '<html>'+
												'<body>'+
												"</body>"+
												'<div align="center";>'+
													'<embed width="825" height="525" name="plugin" src="../uploads/'+_oFile.getName()+'" type="'+ext+'">'+
												'</div>'+
											 '</html>'	
											
	        								
	      								
	globals.GCshowDialogPDFViewer2(_oFile.getName(), 1, null, null, true, null, null, null, null, null);
	plugins.WebClientUtils.executeClientSideJS('location.reload();');*/
}

/**
 * @param {String} arg0 // TODO generated, please specify type and doc
 * @param {String} arg1 // TODO generated, please specify type and doc
 * @param {String} arg2 // TODO generated, please specify type and doc
 * @param {String} arg3 // TODO generated, please specify type and doc
 * @param {String} arg4 // TODO generated, please specify type and doc
 * @param {String} arg5 // TODO generated, please specify type and doc
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"72439462-7EFB-466A-BD14-C927810DF4ED"}
 */
function GCshowErrorDialog(arg0, arg1, arg2, arg3, arg4, arg5)
{
	var msg = arg0;  //accept the error message as an argument
	var methd = arg1; //method to execute after dialog closes
	var btn1 = arg2;
	var btn2 = arg3;
	var btn3 = arg4;
	var btn4 = arg5;

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()

	//call the generic routine in the svyCore solution
	globals.core_showWcGenericDialog('Error', msg, methd, 'error', btn1, btn2, btn3, btn4);	
}

/**
 * @param {String} arg0 // TODO generated, please specify type and doc
 * @param {String} arg1 // TODO generated, please specify type and doc
 * @param {String} arg2 // TODO generated, please specify type and doc
 * @param {String} arg3 // TODO generated, please specify type and doc
 * @param {String} arg4 // TODO generated, please specify type and doc
 * @param {String} arg5 // TODO generated, please specify type and doc
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"741A6AC4-3FB3-428B-8B3D-D75C0616BE64"}
 */
function GCshowForbiddenDialog(arg0, arg1, arg2, arg3, arg4, arg5)
{
	var msg = arg0;  //accept the error message as an argument
	var methd = arg1; //method to execute after dialog closes
	var btn1 = arg2;
	var btn2 = arg3;
	var btn3 = arg4;
	var btn4 = arg5;

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()

	//call the generic routine in the svyCore solution
	globals.core_showWcGenericDialog('No Access', msg, methd, 'forbidden', btn1, btn2, btn3, btn4);	
}

/**
 * @param {String} arg0 // TODO generated, please specify type and doc
 * @param {String} arg1 // TODO generated, please specify type and doc
 * @param {String} arg2 // TODO generated, please specify type and doc
 * @param {String} arg3 // TODO generated, please specify type and doc
 * @param {String} arg4 // TODO generated, please specify type and doc
 * @param {String} arg5 // TODO generated, please specify type and doc
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"491E9E74-AAC0-44C2-8926-D9EAF72CE882"}
 */
function GCshowInfoDialog(arg0, arg1, arg2, arg3, arg4, arg5)
{
	var msg = arg0;  //accept the error message as an argument
	var methd = arg1; //method to execute after dialog closes
	var btn1 = arg2;
	var btn2 = arg3;
	var btn3 = arg4;
	var btn4 = arg5;

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()
	
	//call the generic routine in the svyCore solution
	globals.core_showWcGenericDialog('Info', msg, methd, 'info', btn1, btn2, btn3, btn4);	
}

/**
 * @param {String} arg0 // TODO generated, please specify type and doc
 * @param {String} arg1 // TODO generated, please specify type and doc
 * @param {String} arg2 // TODO generated, please specify type and doc
 * @param {String} arg3 // TODO generated, please specify type and doc
 * @param {String} arg4 // TODO generated, please specify type and doc
 * @param {String} arg5 // TODO generated, please specify type and doc
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"5037A002-A052-47FB-BAB8-D6D943C8CC95"}
 */
function GCshowQuestionDialog(arg0, arg1, arg2, arg3, arg4, arg5)
{
	var msg = arg0;  //accept the error message as an argument
	var methd = arg1; //method to execute after dialog closes
	var btn1 = arg2;
	var btn2 = arg3;
	var btn3 = arg4;
	var btn4 = arg5;

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()

	//call the generic routine in the svyCore solution
	globals.core_showWcGenericDialog('Question', msg, methd, 'question', btn1, btn2, btn3, btn4);	
}

/**
 * @param {String} arg0 // TODO generated, please specify type and doc
 * @param {String} arg1 // TODO generated, please specify type and doc
 * @param {String} arg2 // TODO generated, please specify type and doc
 * @param {String} arg3 // TODO generated, please specify type and doc
 * @param {String} arg4 // TODO generated, please specify type and doc
 * @param {String} arg5 // TODO generated, please specify type and doc
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D9DA2D3F-AEAE-4A79-9326-74AA8A404905"}
 */
function GCshowWarningDialog(arg0, arg1, arg2, arg3, arg4, arg5)
{
	var msg = arg0;  //accept the error message as an argument
	var methd = arg1; //method to execute after dialog closes
	var btn1 = arg2;
	var btn2 = arg3;
	var btn3 = arg4;
	var btn4 = arg5;

	//disable all the background elements when showing the dialog
	globals.GCdisableBgElements()

	//call the generic routine in the svyCore solution
	globals.core_showWcGenericDialog('Warning!', msg, methd, 'warning', btn1, btn2, btn3, btn4);	
}

/**
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"4DEE99D2-7757-49DF-9FF5-EFBB2BFDA06E"}
 */
function GCstartEditing()
{
	databaseManager.setAutoSave(false);
}

/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"4CDFB69E-AA10-4125-BDBC-FFD2DE09CB47"}
 * @SuppressWarnings(deprecated)
 */
function onSolutionOpenGC(arg, queryParams) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) application.putClientProperty(APP_UI_PROPERTY.TABLEVIEW_WC_DEFAULT_SCROLLABLE, true);
	//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) application.putClientProperty(APP_UI_PROPERTY.TABLEVIEW_WC_SCROLLABLE_KEEP_LOADED_ROWS, true)
	/*if(plugins.UserManager){
		var success = plugins.UserManager.register( "Javi Arroyo", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCNv4Gdo+5pL7xygrui6xoEH9Sa8zN9ctl" );
		var vRegInfo = plugins.UserManager.getRegistration()  
		var vServer = plugins.UserManager.Server();
		if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT || 
		application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
		{	
			if(vServer)	vServer.maxWebClientIdleTime = 5;
			//if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.ngclientutils.setOnUnloadConfirmation(true)
		}
		else if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
		{		
			if(vServer)	vServer.maxSmartClientIdleTime = 25;	
		}
	}*/
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
	var frm = solutionModel.getForm('auto_logout_warn_dialog_NGGC')
	//Then call the onIdle method and pass in callback methods to execute when idle or when windows become hidden/active.
	//plugins.svyIdle.onIdle(idle,null,null,null,null,300000,true,false,false);
	if(frm && forms.auto_logout_warn_dialog_NGGC.AUTO_LOGOUT_CUSTOM_PROPERTIES.IDLE_TIME_TO_TRIGGER_LOGOUT_IN_SECONDS &&
	forms.auto_logout_warn_dialog_NGGC.AUTO_LOGOUT_CUSTOM_PROPERTIES.IDLE_TIME_TO_TRIGGER_LOGOUT_IN_SECONDS > 0) {
		plugins.svyIdle.onIdle(idle,null,null,null,null,(forms.auto_logout_warn_dialog_NGGC.AUTO_LOGOUT_CUSTOM_PROPERTIES.IDLE_TIME_TO_TRIGGER_LOGOUT_IN_SECONDS * 1000),true,false,false);
	}
	else {		
		plugins.svyIdle.onIdle(idle,null,null,null,null,60000,true,false,false);
	}
	//application.setUIProperty(APP_WEB_PROPERTY.WEBCLIENT_TEMPLATES_DIR, 'custom22');
	
	var img = solutionModel.getMedia("LogoAGMin.gif");
	var imgAsBase64 = new Packages.org.apache.commons.codec.binary.Base64().encodeAsString(img.bytes);
	var imgHref = "data:image/png;base64," + imgAsBase64;
	application.putClientProperty(APP_NG_PROPERTY.WINDOW_BRANDING_ICON_32, imgHref);
}

/**
 * @properties={typeid:24,uuid:"169A21CD-5F69-4911-B934-238DB69CBFE0"}
 */
function idle() {		
	application.output('Idle...');
	var frm = application.getActiveWindow().controller.getName();
	//scopes.autologout.showLogoutWarning()
	
	if(frm != 'FrmLoginGC') {
		showLogoutWarning()
	}
	//application.exit();
}

/**
 * @properties={typeid:24,uuid:"8E6226D6-0FB4-47B3-BE00-2DB8F7D028A8"}
 */
function showLogoutWarning() {
	var win = application.getWindow("auto_logout_warn_dialog_NGGC")
	if(win != null) win.destroy();
	
	win = application.createWindow("auto_logout_warn_dialog_NGGC", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, 550, 175);
	win.title = "SESIÓN EXPIRANDO";
	
	win.show(forms.auto_logout_warn_dialog_NGGC)
	//var formName = 'auto_logout_warn_dialog_NGGC'
	//plugins.window.showFormPopup(null,forms[formName], /*scopes.autologoutNGGC*/null, 'dummy');
	
}

/**
 * Callback method for when solution is closed, force boolean argument tells if this is a force (not stoppable) close or not.
 *
 * @param {Boolean} force if false then solution close can be stopped by returning false
 *
 * @return {Boolean}
 *
 *
 * @properties={typeid:24,uuid:"80230030-BC0C-4A14-9262-FCB2BE62275B"}
 */
function onSolutionCloseGC(force) {
	application.exit()
	return true
}

/**
 * Callback method for when an error occurred (the error can be a JavaScript or Servoy Java error).
 *
 * @param {*} ex exception to handle
 *
 * 
 *
 * @SuppressWarnings(deprecated)
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"73174D64-77F7-41E2-8931-C1474AC66D73"}
 */
function onErrorGC(ex) {
	// TODO Auto-generated method stub
	var svyExpList = new java.util.HashMap();
	//var servoyException = ex;

	//Add your message to the respective Exceptions 
	svyExpList.put(ServoyException.ACQUIRE_LOCK_FAILURE, "Acquire Lock Failure");
	svyExpList.put(ServoyException.BAD_SQL_SYNTAX, "Bad Sql Syntax");
	svyExpList.put(ServoyException.DATA_ACCESS_RESOURCE_FAILURE, "Data Access Failure");
	svyExpList.put(ServoyException.DATA_INTEGRITY_VIOLATION, "Data Integrity Violation.");
	svyExpList.put(ServoyException.DEADLOCK, "Dead Lock");
	svyExpList.put(ServoyException.DELETE_NOT_GRANTED, "Delete not Granted.");
	svyExpList.put(ServoyException.EXECUTE_PROGRAM_FAILED, "Execute Program failed.");
	svyExpList.put(ServoyException.INCORRECT_LOGIN, "Incorrect login");
	svyExpList.put(ServoyException.INVALID_INPUT, "Invalid Input");
	svyExpList.put(ServoyException.INVALID_INPUT_FORMAT, "Invalid Input Format");
	svyExpList.put(ServoyException.INVALID_RESULTSET_ACCESS, "Invalid Resultset Access");
	svyExpList.put(ServoyException.NO_ACCESS, "No Access");
	svyExpList.put(ServoyException.NO_CREATE_ACCESS, "No Create Access");
	svyExpList.put(ServoyException.NO_DELETE_ACCESS, "No Delete Access");
	svyExpList.put(ServoyException.NO_LICENSE, "No License");
	svyExpList.put(ServoyException.NO_MODIFY_ACCESS, "No Modify Access");
	svyExpList.put(ServoyException.NO_PARENT_DELETE_WITH_RELATED_RECORDS, "No Parent Delete with Related Record");
	svyExpList.put(ServoyException.NO_RELATED_CREATE_ACCESS, "No Related Create Access");
	svyExpList.put(ServoyException.PERMISSION_DENIED, "Permission Denaid");
	svyExpList.put(ServoyException.RECORD_LOCKED, "Record Locked");
	svyExpList.put(ServoyException.SAVE_FAILED, "Save Failed");
	svyExpList.put(ServoyException.UNKNOWN_DATABASE_EXCEPTION, "Unknown Database Exception");

	var exception = arguments[0]; //Occurred Exception

	if (exception) //Servoy Exception
	{
		var msg = exception;
		globals.GCshowErrorDialog(msg.toString(),null,'Aceptar',null,null,null)
	}
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param v_event
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"19C46EEC-912E-4288-B47D-EC28746F7C58"}
 */
function handle_shortCutGC(v_event)
{
	globals.GCevento = null
	var frm = currentcontroller.getName();
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(v_event.getType() == 'control A')
	{
		if(frm == 'FrmPrincipalGC' || frm == 'FrmLoginGC' || frm == 'FrmPrincipalGC_web')
		{
			globals.GCevento = 'control A'
			globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);							
		}
		
	}
	else if (v_event.getType() == 'ESCAPE')
	{
		globals.GCevento = 'ESCAPE'
		var frm2 = forms[frm].controller.getName()
		var win = application.getWindow("Conta"); 
		if(frm == 'FrmPrincipalGC' || frm == 'FrmLoginGC' || frm == 'FrmPrincipalGC_web')
		{
			globals.GCshowDialogSalir('Salir de la Aplicación', 1, null, null, true, null, null, null, null, null);
			
		}
		else if(frm.indexOf('dialog') >= 0)
		{
			forms[frm].onHide(v_event)
		}	
		else if(win != null)
		{
			application.getWindow('Conta').hide();
			win.destroy()
		}
		else
		{
			if(forms[frm].btn_cancel && globals.GCisEditing()) forms[frm].btn_cancel()			
			globals.GCenableBgElements();
			win = application.getWindow("Maestros");
			if(win != null)
			{
				application.getWindow('Maestros').hide();
				win.destroy()
			}
			else{
				win = application.getWindow("Factura Lineas");
				if(win != null)
				{
					application.getWindow('Factura Lineas').hide();
					win.destroy()
				}	
				//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) forms.FrmPrincipalGC_web.controller.show()
				//else 
					forms.FrmPrincipalGC.controller.show()				
			}
		}
	}
	else if (v_event.getType() == 'control Z')
	{
		if(frm == 'FrmPrincipalGC' || frm == 'FrmLoginGC' || frm == 'FrmPrincipalGC_web')
		{
			globals.GCevento = 'control Z'
			globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);
		}
	}
	else if (v_event.getType() == 'control alt B')
	{		
		if(frm == 'FrmPrincipalGC')
		{
			if(forms.frm_nav_main_principalGC.elements.Notas.visible == false)
			{
				forms.frm_nav_main_principalGC.elements.ImagNotas.visible = true;
				forms.frm_nav_main_principalGC.elements.ImagNotas.enabled = true;
				forms.frm_nav_main_principalGC.elements.Notas.visible = true;
				forms.frm_nav_main_principalGC.elements.Notas.enabled = true;
				forms.frm_nav_main_principalGC.elements.btn_menuNotas.visible = true;
				forms.frm_nav_main_principalGC.elements.btn_menuNotas.enabled = true;
			}
			else
			{
				forms.frm_nav_main_principalGC.elements.ImagNotas.visible = false;
				forms.frm_nav_main_principalGC.elements.ImagNotas.enabled = false;
				forms.frm_nav_main_principalGC.elements.Notas.visible = false;
				forms.frm_nav_main_principalGC.elements.Notas.enabled = false;
				forms.frm_nav_main_principalGC.elements.btn_menuNotas.visible = false;
				forms.frm_nav_main_principalGC.elements.btn_menuNotas.enabled = false;
			}
		}		
	}
	else if(v_event.getType() == 'control F10')
	{
		if(frm == 'dialogAlbaranLineaGC')
		{
			forms.dlg_Linea_AlbaranGC.elements.situ_lal.readOnly = false;	
			forms.dlg_Linea_AlbaranGC.elements.situ_lal.bgcolor = '#ffffff';
			forms.dlg_Linea_AlbaranGC.elements.sifa_lal.readOnly = false;	
			forms.dlg_Linea_AlbaranGC.elements.sifa_lal.bgcolor = '#ffffff';
		}
		else if(frm == 'dialogPedidoCompraLineaGC')
		{
			forms.dlg_Linea_PedidoComprasGC.elements.situacion.readOnly = false;	
			forms.dlg_Linea_PedidoComprasGC.elements.situacion.bgcolor = '#ffffff';
			
		}
		
	}
	else if (v_event.getType() == 'alt U')
	{
		if(frm == 'dialogFacturaLineaGC')
		{
			if(forms.dlg_Linea_FacturaGC.concep_lfa)
			{
				forms.dlg_Linea_FacturaGC.concep_lfa = forms.dlg_Linea_FacturaGC.concep_lfa.toUpperCase()
			}
		}
	}
	else if (v_event.getType() == 'alt L')
	{
		if(frm == 'dialogFacturaLineaGC')
		{
			if(forms.dlg_Linea_FacturaGC.concep_lfa)
			{
				forms.dlg_Linea_FacturaGC.concep_lfa = forms.dlg_Linea_FacturaGC.concep_lfa.toLowerCase()
			}
		}
	}
	else if (v_event.getType() == 'control alt P')
	{
		if(frm == 'FrmLoginGC')
		{
			if(globals.GCNombreUsuario)
			{
				var query = "select [cod_us],[cifemp_us],[emp_us] from [usuarios] where nom_us = '" + globals.GCNombreUsuario + "' COLLATE Latin1_General_CS_AS "
				var dataset = databaseManager.getDataSetByQuery('conexiongestioncomercialag', query, null, 1)
				var cod = dataset.getValue(1,1)
				if(cod)	globals.btn_runJasperReportControlAccesoGC()
			}
			
		}		
	}
	else if(frm == 'FrmPrincipalNGGC' && v_event.getType() == 'control shift C' && globals.GCNombreUsuario == 'ADMINISTRADOR')
	{
		globals.GCFormulario = 'Fichero Clientes Sector Vertical';
		globals.GCshowImportarDatosTBAI('Fichero Clientes Sector Vertical', 1, null, null, true, null, null, null, null, null);		
	}
	else if(frm == 'FrmPrincipalNGGC' && v_event.getType() == 'control shift A' && globals.GCNombreUsuario == 'ADMINISTRADOR')
	{
		globals.GCFormulario = 'Fichero Articulos Sector Vertical';
		globals.GCshowImportarDatosTBAI('Fichero Articulos Sector Vertical', 1, null, null, true, null, null, null, null, null);		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 * @properties={typeid:24,uuid:"87892C61-E178-4317-9A07-A4EB97374019"}
 */
function GCMenuPrincipal(event) {
	try
	{
		// create a popup menu
		var menu = plugins.window.createPopupMenu();
		// add a menu item
		titulo = 'Principal'.toUpperCase()
		menu.addMenuItem(titulo, globals.GCMP, 'media:///principal.png');
		titulo = 'BBDD MAESTRAS'.toUpperCase()
		menu.addMenuItem(titulo, globals.GCMP, 'media:///database_3.png');
		titulo = 'Presupuestos'.toUpperCase()
		menu.addMenuItem(titulo, globals.GCMP, 'media:///admin_24.gif');
		titulo = 'Pedidos'.toUpperCase()
		menu.addMenuItem(titulo, globals.GCMP, 'media:///orders_24.gif');
		titulo = 'Albaranes'.toUpperCase()
		menu.addMenuItem(titulo, globals.GCMP, 'media:///FacturasEmitidas.gif');
		titulo = 'Facturación'.toUpperCase()
		menu.addMenuItem(titulo, globals.GCMP, 'media:///factura.gif');
		titulo = 'Compras'.toUpperCase()
		menu.addMenuItem(titulo, globals.GCMP, 'media:///compras.gif');
		titulo = 'Cobros/Pagos Tesorería'.toUpperCase()
		menu.addMenuItem(titulo, globals.GCMP, 'media:///RegistraPago.png');
		titulo = 'Stock'.toUpperCase()
		menu.addMenuItem(titulo, globals.GCMP, 'media:///inventario.gif');
		titulo = 'Informes'.toUpperCase()
		menu.addMenuItem(titulo, globals.GCMP, 'media:///extracto2.gif');
		//titulo = 'Salir'.toUpperCase()
		//menu.addMenuItem(titulo, globals.GCMP, 'media:///Salida.gif');
		
		if (event.getSource()) {
			// display the popup over the component which is the source of the event
			menu.show(event.getSource(),0,32);					
		}	
	}
	catch (e) {
		globals.GCshowErrorDialog(e.toString(),null,'Aceptar',null,null,null)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 * @properties={typeid:24,uuid:"6677D20B-F7ED-4A92-9813-38077129C9C3"}
 */
function GCMP(event) 
{
	switch (arguments[4]) {
		case 'Principal'.toUpperCase(): 
		forms.FrmPrincipalGC.controller.show()
		break;
		case 'BBDD MAESTRAS'.toUpperCase(): 
		/*var query = 'select taop_001 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Maestros = dataset.getValue(1, 1)*/
		if(gcfechalimite_usuarios.taop_001 == '1')
		//if(Maestros == '1')
		{
			globals.GCnav_search = null
			globals.GCnav_search2 = null
			forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
	
			//change tabs
			forms.lst_solution_navigation_maestrosGC.btn_goForm();	
		}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}		
		break;
		case 'Presupuestos'.toUpperCase(): 
		/*query = 'select taop_002 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Ofertas = dataset.getValue(1, 1)*/
		if(gcfechalimite_usuarios.taop_002 == '1')
		//if(Ofertas == '1')
		{
			globals.GCnav_search = null
			globals.GCnav_search2 = null
			forms.lst_solution_navigation_presupuestosGC.controller.setSelectedIndex(1) 
	
			//change tabs
			forms.lst_solution_navigation_presupuestosGC.btn_goForm();	
		}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}
		break;
		case 'Pedidos'.toUpperCase(): 
		/*query = 'select taop_008 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Pedidos = dataset.getValue(1, 1)*/
		if(gcfechalimite_usuarios.taop_008 == '1')
		//if(Pedidos == '1')
		{
			globals.GCnav_search = null
			globals.GCnav_search2 = null
			forms.lst_solution_navigation_pedidosGC.controller.setSelectedIndex(1) 
	
			//change tabs
			forms.lst_solution_navigation_pedidosGC.btn_goForm();	
		}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}
		break;
		case 'Albaranes'.toUpperCase(): 
		/*query = 'select taop_003 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Albaranes = dataset.getValue(1, 1)*/
		if(gcfechalimite_usuarios.taop_003 == '1')
		//if(Albaranes == '1')
		{
			globals.GCnav_search = null
			globals.GCnav_search2 = null
			forms.lst_solution_navigation_albaranGC.controller.setSelectedIndex(1) 
	
			//change tabs
			forms.lst_solution_navigation_albaranGC.btn_goForm();	
		}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}
		break;
		case 'Facturación'.toUpperCase(): 
		/*query = 'select taop_004 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Facturacion = dataset.getValue(1, 1)*/
		if(gcfechalimite_usuarios.taop_004 == '1')
		//if(Facturacion == '1')
		{
			globals.GCnav_search = null
			globals.GCnav_search2 = null
			forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) 
	
			//change tabs
			forms.lst_solution_navigation_facturasGC.btn_goForm();	
		}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}
		break;
		case 'Compras'.toUpperCase(): 
		/*query = 'select taop_005 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Compras = dataset.getValue(1, 1)*/
		if(gcfechalimite_usuarios.taop_005 == '1')
		//if(Compras == '1')
		{
			globals.GCnav_search = null
			globals.GCnav_search2 = null
			forms.lst_solution_navigation_comprasGC.controller.setSelectedIndex(1) 
	
			//change tabs
			forms.lst_solution_navigation_comprasGC.btn_goForm();	
		}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}
		break;
		case 'Cobros/Pagos Tesorería'.toUpperCase(): 
		/*query = 'select taop_010 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var CobrosPagos = dataset.getValue(1, 1)*/
		if(gcfechalimite_usuarios.taop_010 == '1')
		//if(CobrosPagos == '1')
		{
			globals.GCnav_search = null
			globals.GCnav_search2 = null
			forms.lst_solution_navigation_gccobrospagoGC.controller.setSelectedIndex(1) 
	
			//change tabs
			forms.lst_solution_navigation_gccobrospagoGC.btn_goForm();	
		}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}
		break;
		case 'Stock'.toUpperCase(): 
		/*query = 'select taop_007 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Stock = dataset.getValue(1, 1)*/
		if(gcfechalimite_usuarios.taop_007 == '1')
		//if(Stock == '1')
		{
			globals.GCnav_search = null
			globals.GCnav_search2 = null
			forms.lst_solution_navigation_controlstockGC.controller.setSelectedIndex(1) 
	
			//change tabs
			forms.lst_solution_navigation_controlstockGC.btn_goForm();	
		}
		else
		{
			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
		}
		break;
		case 'Informes'.toUpperCase(): 		
		forms.FrmBalance.controller.show()
			break;		
		default: break;
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"91C96D4F-F928-44C5-83D5-922A8B60387B"}
 */
function MenuMaestrosGC(event) 
{
	/*var query = 'select taop_001 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var BBDDMaestras = dataset.getValue(1, 1)*/
	var BBDDMaestras = gcfechalimite_usuarios.taop_001;
	if(BBDDMaestras == '1')
	{
		switch (arguments[4]) {
		    case 'BD de Clientes'.toUpperCase(): 
		    		/*globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();*/
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					//var mainForm = solutionModel.getForm("FrmPrincipalGC");
				    //var fc = mainForm.getWebComponent("lst_solution_navigation_maestrosNGGC");
				   
				    //forms.frm_nav_main_maestrosNGGC.controller.setSelectedIndex(1) 					
					//forms.frm_nav_main_maestrosNGGC.btn_goForm();	
				    forms.FrmClientesGC.controller.show()
				    
				    break;
		    case 'BD de Proveedores'.toUpperCase(): 
				    /*globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(2) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();*/
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(2) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    break;
		    case 'BD de Operarios'.toUpperCase(): 	
		    		//globals.GCshowDialogOperarios('BD Operarios', 1, null, null, true, null, null, null, null, null);
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(3) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
		    		break;
		    case 'BD de Articulos'.toUpperCase(): 
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(4) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    break;
		    case 'BD de Materiales'.toUpperCase(): 
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(5) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    break;
		    case 'BD de Familias'.toUpperCase(): 
				    //globals.GCshowDialogFamilias('BD Familias', 1, null, null, true, null, null, null, null, null);
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(6) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    break;
		    case 'BD de Formas de Pago'.toUpperCase(): 
				    //globals.GCshowDialogFormaPago('BD Formas de Pago', 1, null, null, true, null, null, null, null, null);
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(7) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    break;	    
		    case 'BD de Tipos de I.V.A.'.toUpperCase(): 
				    //globals.GCshowDialogTiposIva('BD de Tipos de I.V.A.', 1, null, null, true, null, null, null, null, null);
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(8) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    break;	    
		    case 'BD de Delegaciones'.toUpperCase(): 
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(9) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
					break;	
		    case 'BD de Bancos'.toUpperCase(): 
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(10) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
		    case 'BD de Comisionistas'.toUpperCase(): 
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(11) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
					break;	  
		    case 'SWIFT/BIC Bancos'.toUpperCase(): 
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(12) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
					break;
		    case 'BD de Transportistas'.toUpperCase(): 
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(13) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
					break;
		    case 'BD de Unidades Medida'.toUpperCase(): 
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(14) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
					break;
		    case 'BD de Observaciones'.toUpperCase(): 
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
					forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(1) 
			
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
				    forms.lst_solution_navigation_maestrosGC.controller.setSelectedIndex(15) 
					
					//change tabs
					forms.lst_solution_navigation_maestrosGC.btn_goForm();
					break;
    default: break;
		    
			}
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"348BD023-7D22-44CD-A044-6C70459F85C3"}
 */
function MenuSkype(event) 
{
	var frm = currentcontroller.getName();
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	switch (arguments[4]) {
		    case 'Llamada Skype': 
		    		forms[frm].startCallUsingSkype()			    
				    break;
		    case 'Chat Skype': 
		    		forms[frm].startChatUsingSkype()
				    break;		    
		default: break;
    
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"E865122C-DBB6-46DE-B776-1FB90C7996D0"}
 */
function MenuPresupuestos(event) 
{
	/*var query = 'select taop_002 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Ofertas = dataset.getValue(1, 1)*/
	var Ofertas = gcfechalimite_usuarios.taop_002;
	if(Ofertas == '1')
	{
		switch (arguments[4]) {
		    case 'Gestión de Presupuestos'.toUpperCase(): 			    
		    		globals.GCnav_search = null
					globals.GCnav_search2 = null
							
					forms.lst_solution_navigation_presupuestosGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_presupuestosGC.btn_goForm();		
		    		break;
		    case 'Consulta de Presupuestos'.toUpperCase(): 
		    		globals.GCshowDialogConsultaPresupuestos('Presupuestos a Clientes',1,null,null,null,null,null,null,null,null)
		    		break;	
		    case 'Impresión de Presupuestos'.toUpperCase(): 
		    		forms.dlg_ImpresionPresupuestosGC.DesdePresupuesto = null
		    		forms.dlg_ImpresionPresupuestosGC.HastaPresupuesto = null
    				globals.GCshowDialogImpresionPresupuestos('Impresión de Presupuestos',1,null,null,null,null,null,null,null,null)
					break;	
		    default: break;
			}	
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"8F3D3448-07A7-45F4-92C2-ABA48720E721"}
 */
function MenuCobrosPagoGC(event) 
{
	/*var query = 'select taop_002 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var CP = dataset.getValue(1, 1)*/
	var CP = gcfechalimite_usuarios.taop_010;
	if(CP == '1')
	{
		switch (arguments[4]) {
		    case 'BD Cobros y Pagos'.toUpperCase(): 			    
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
							
					forms.lst_solution_navigation_gccobrospagoGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_gccobrospagoGC.btn_goForm();		
		    		break;
		    case 'Cobros/Pagos Pendientes'.toUpperCase(): 
		    globals.GCshowDialogCobrosPagosPendientes('Cobros y Pagos Pendientes', 1, null, null, true, null, null, null, null, null);
		    		break;	
		    case 'Cobros a procesar SEPA'.toUpperCase(): 
		    globals.GCshowDialogSelecCobrosProcesar('Selección Cobros/Pagos a remesar', 1, null, null, true, null, null, null, null, null);    		
					break;	
		    case 'Remesas/Transf. SEPA XML'.toUpperCase(): 
		    	globals.CobroPago = 1
		    globals.GCshowDialogRemesasC19SEPA('Remesas/Transf. SEPA XML', 1, null, null, true, null, null, null, null, null);
		    		break;	
		    case 'BD Bancos + Ctas. Cargo'.toUpperCase(): 
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
							
					forms.lst_solution_navigation_gccobrospagoGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_gccobrospagoGC.btn_goForm();	
				    forms.lst_solution_navigation_gccobrospagoGC.controller.setSelectedIndex(5) 
					
					//change tabs
					forms.lst_solution_navigation_gccobrospagoGC.btn_goForm();
		    		break;	
		    case 'Formas de Pago'.toUpperCase(): 
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
							
					forms.lst_solution_navigation_gccobrospagoGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_gccobrospagoGC.btn_goForm();	
				    forms.lst_solution_navigation_gccobrospagoGC.controller.setSelectedIndex(6) 
					
					//change tabs
					forms.lst_solution_navigation_gccobrospagoGC.btn_goForm();
		    		break;	
		    default: break;
		}	
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"735ABF07-90B3-42AB-9F0B-B6700C9EAE14"}
 */
function MenuPedidos(event) 
{
	/*var query = 'select taop_008 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Pedidos = dataset.getValue(1, 1)*/
	var Pedidos = gcfechalimite_usuarios.taop_008;
	if(Pedidos == '1')
	{
		switch (arguments[4]) {
		    case 'Gestión de Pedidos'.toUpperCase(): 			    
		    		globals.GCnav_search = null
					globals.GCnav_search2 = null
							
					forms.lst_solution_navigation_pedidosGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_pedidosGC.btn_goForm();		
		    		break;
		    case 'Consulta de Pedidos'.toUpperCase(): 
		    		globals.GCshowDialogConsultaPedidos('Pedidos de Clientes',1,null,null,null,null,null,null,null,null)
		    		break;		   
			default: break;
			}
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"2CD66C30-3C4D-441A-8FF4-CE264D83B3D2"}
 */
function MenuInformes(event)
{
	switch (arguments[4]) {
		case 'Balance Ingresos/Gastos'.toUpperCase(): 
		forms.FrmBalance.controller.show()
		break;
    case 'Compras - Artículos'.toUpperCase(): 
    globals.GCshowDialogConsultaComprasArticulos('Compras - Artículos',1,null,null,null,null,null,null,null,null)
    break;
    case 'Compras - Familias'.toUpperCase(): 
    globals.GCshowDialogConsultaComprasFamilias('Compras - Familias',1,null,null,null,null,null,null,null,null)
	break;
    case 'Compras - Proveedores'.toUpperCase(): 
    globals.GCshowDialogConsultaComprasProveedores('Compras - Proveedores',1,null,null,null,null,null,null,null,null)
	break;
    case 'Compras / Meses'.toUpperCase(): 
    globals.GCshowDialogFacturacionProveedores('Compras / Meses',1,null,null,null,null,null,null,null,null)
	break;
    case 'Compras / Años'.toUpperCase(): 
    globals.GCshowDialogFacturacionProveedoresAgnos('Compras / Años',1,null,null,null,null,null,null,null,null)
	break;
    case 'Ventas - Artículos'.toUpperCase(): 
    globals.GCshowDialogConsultaVentasArticulos('Ventas - Artículos',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas - Familias'.toUpperCase(): 
	 globals.GCshowDialogConsultaVentasFamilias('Ventas - Familias',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas - Clientes'.toUpperCase(): 
	globals.GCshowDialogConsultaVentasClientes('Ventas - Clientes',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas / Meses'.toUpperCase(): 
	globals.GCshowDialogFacturacionClientes('Ventas / Meses',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas / Años'.toUpperCase(): 
	globals.GCshowDialogFacturacionClientesAgnos('Ventas / Años',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas / Zonas'.toUpperCase(): 
	globals.GCshowDialogConsultaVentasZonas('Ventas / Zonas',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas y Beneficios - Artículos'.toUpperCase(): 
	globals.GCshowDialogConsultaBeneficiosArticulos('Beneficios - Artículos',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas y Beneficios - Familias'.toUpperCase(): 
	globals.GCshowDialogConsultaBeneficiosFamilias('Beneficios - Familias',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas y Beneficios - Clientes'.toUpperCase(): 
	globals.GCshowDialogConsultaBeneficiosClientes('Beneficios - Clientes',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas y Beneficios - Comisionista'.toUpperCase(): 
	break;
	case 'Compras / Ventas - Artículos'.toUpperCase(): 
	break;
	case 'Compras / Ventas - Familias'.toUpperCase(): 
	break;
	case 'Compras / Ventas - Clientes'.toUpperCase(): 
	break;
	case 'Compras / Ventas - Comisionista'.toUpperCase(): 
	break;
	case 'Informe de Comisiones'.toUpperCase():
	globals.GCshowDialogInformeComision('Informe de Comisiones',1,null,null,null,null,null,null,null,null)    		
	break
    default: break;
	}
}

/**
 * @param {String} menuItemId
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"2EBEA1D2-FCB8-475F-844C-45A1AC6B6884"}
 */
function MenuInformesNG(event, menuItemId)
{
	switch (menuItemId) {
		case 'Balance Ingresos/Gastos'.toUpperCase(): 
		forms.FrmBalance.controller.show()
		break;
    case 'Compras - Artículos'.toUpperCase(): 
    globals.GCshowDialogConsultaComprasArticulos('Compras - Artículos',1,null,null,null,null,null,null,null,null)
    break;
    case 'Compras - Familias'.toUpperCase(): 
    globals.GCshowDialogConsultaComprasFamilias('Compras - Familias',1,null,null,null,null,null,null,null,null)
	break;
    case 'Compras - Proveedores'.toUpperCase(): 
    globals.GCshowDialogConsultaComprasProveedores('Compras - Proveedores',1,null,null,null,null,null,null,null,null)
	break;
    case 'Compras / Meses'.toUpperCase(): 
    globals.GCshowDialogFacturacionProveedores('Compras / Meses',1,null,null,null,null,null,null,null,null)
	break;
    case 'Compras / Años'.toUpperCase(): 
    globals.GCshowDialogFacturacionProveedoresAgnos('Compras / Años',1,null,null,null,null,null,null,null,null)
	break;
    case 'Ventas - Artículos'.toUpperCase(): 
    globals.GCshowDialogConsultaVentasArticulos('Ventas - Artículos',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas - Familias'.toUpperCase(): 
	 globals.GCshowDialogConsultaVentasFamilias('Ventas - Familias',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas - Clientes'.toUpperCase(): 
	globals.GCshowDialogConsultaVentasClientes('Ventas - Clientes',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas / Meses'.toUpperCase(): 
	globals.GCshowDialogFacturacionClientes('Ventas / Meses',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas / Años'.toUpperCase(): 
	globals.GCshowDialogFacturacionClientesAgnos('Ventas / Años',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas / Zonas'.toUpperCase(): 
	globals.GCshowDialogConsultaVentasZonas('Ventas / Zonas',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas y Beneficios - Artículos'.toUpperCase(): 
	globals.GCshowDialogConsultaBeneficiosArticulos('Beneficios - Artículos',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas y Beneficios - Familias'.toUpperCase(): 
	globals.GCshowDialogConsultaBeneficiosFamilias('Beneficios - Familias',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas y Beneficios - Clientes'.toUpperCase(): 
	globals.GCshowDialogConsultaBeneficiosClientes('Beneficios - Clientes',1,null,null,null,null,null,null,null,null)
	break;
	case 'Ventas y Beneficios - Comisionista'.toUpperCase(): 
	break;
	case 'Compras / Ventas - Artículos'.toUpperCase(): 
	break;
	case 'Compras / Ventas - Familias'.toUpperCase(): 
	break;
	case 'Compras / Ventas - Clientes'.toUpperCase(): 
	break;
	case 'Compras / Ventas - Comisionista'.toUpperCase(): 
	break;
	case 'Informe de Comisiones'.toUpperCase():
	globals.GCshowDialogInformeComision('Informe de Comisiones',1,null,null,null,null,null,null,null,null)    		
	break
    default: break;
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"12735966-C651-4D8B-9A92-1F095CC08005"}
 * @SuppressWarnings(deprecated)
 */
function MenuFacturas(event) 
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	/*var query = 'select taop_004 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Facturacion = dataset.getValue(1, 1)*/
	var Facturacion = gcfechalimite_usuarios.taop_004;
	if(Facturacion == '1')
	{
		switch (arguments[4]) {
		    case 'BD Facturas a Clientes'.toUpperCase(): 
				    var win = application.getWindow('Conta')
					//setup the record status
					if(win != null)
					{
						win.destroy();
					}
		    		globals.GCnav_search = null
					globals.GCnav_search2 = null
					globals.GCFormulario = null
							
					forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_facturasGC.btn_goForm(event);		
		    		break;
		    case 'Diario de Facturación'.toUpperCase(): 
		    		globals.GCshowDialogDiarioFacturacion('Diario de Facturación',1,null,null,null,null,null,null,null,null)
		    		break;	
		    case 'Impresión de Facturas'.toUpperCase(): 
				    var tbai = gcparametrosaplicacion_to_parametrosaplicacion.ticketbai;
					var verifactu = gcparametrosaplicacion_to_parametrosaplicacion.verifactu;
					if(forms.FrmFacturasGC.foundset.getSize() == 0){
						globals.GCshowErrorDialog('No se ha registrado aún ninguna factura.',null,'Aceptar',null,null,null)
					}
					else if(forms.FrmFacturasGC.foundset.getSize() > 0 && tbai){
						/*forms.dlg_ImpresionFacturasTBAIGC_2.DesdeEje = forms.FrmFacturasGC.eje_cfa;
						forms.dlg_ImpresionFacturasTBAIGC_2.HastaEje = forms.FrmFacturasGC.eje_cfa;
						forms.dlg_ImpresionFacturasTBAIGC_2.DesdeSer = forms.FrmFacturasGC.ser_cfa;
						forms.dlg_ImpresionFacturasTBAIGC_2.HastaSer = forms.FrmFacturasGC.ser_cfa;
						forms.dlg_ImpresionFacturasTBAIGC_2.DesdeNup = forms.FrmFacturasGC.nup_cfa;
						forms.dlg_ImpresionFacturasTBAIGC_2.HastaNup = forms.FrmFacturasGC.nup_cfa;
						globals.GCshowDialogImpresionFacturasTBAI_2('Impresión de Facturas TBAI',1,null,null,null,null,null,null,null,null)
						*/
						forms.dlg_ImpresionFacturasTBAIGC.DesdeEje = forms.FrmFacturasGC.eje_cfa;
						forms.dlg_ImpresionFacturasTBAIGC.HastaEje = forms.FrmFacturasGC.eje_cfa;
						forms.dlg_ImpresionFacturasTBAIGC.DesdeSer = forms.FrmFacturasGC.ser_cfa;
						forms.dlg_ImpresionFacturasTBAIGC.HastaSer = forms.FrmFacturasGC.ser_cfa;
						forms.dlg_ImpresionFacturasTBAIGC.DesdeNup = forms.FrmFacturasGC.nup_cfa;
						forms.dlg_ImpresionFacturasTBAIGC.HastaNup = forms.FrmFacturasGC.nup_cfa;
						//forms.dlg_ImpresionFacturasTBAIGC.DesdeCliente = null
						//forms.dlg_ImpresionFacturasTBAIGC.onDataChangeDesdeCliente()
						//forms.dlg_ImpresionFacturasTBAIGC.HastaCliente = null
						//forms.dlg_ImpresionFacturasTBAIGC.onDataChangeHastaCliente()
						globals.GCshowDialogImpresionFacturasTBAI('Impresión de Facturas TBAI',1,null,null,null,null,null,null,null,null)
					}
					else if(forms.FrmFacturasGC.foundset.getSize() > 0 && verifactu){
						forms.dlg_ImpresionFacturasVERIFACTUGC.DesdeEje = forms.FrmFacturasGC.eje_cfa;
						forms.dlg_ImpresionFacturasVERIFACTUGC.HastaEje = forms.FrmFacturasGC.eje_cfa;
						forms.dlg_ImpresionFacturasVERIFACTUGC.DesdeSer = forms.FrmFacturasGC.ser_cfa;
						forms.dlg_ImpresionFacturasVERIFACTUGC.HastaSer = forms.FrmFacturasGC.ser_cfa;
						forms.dlg_ImpresionFacturasVERIFACTUGC.DesdeNup = forms.FrmFacturasGC.nup_cfa;
						forms.dlg_ImpresionFacturasVERIFACTUGC.HastaNup = forms.FrmFacturasGC.nup_cfa;
						forms.dlg_ImpresionFacturasVERIFACTUGC.DesdeCliente = null
						forms.dlg_ImpresionFacturasVERIFACTUGC.DescDesdeCliente = null
						//forms.dlg_ImpresionFacturasTBAIGC.onDataChangeDesdeCliente()
						forms.dlg_ImpresionFacturasVERIFACTUGC.HastaCliente = null
						forms.dlg_ImpresionFacturasVERIFACTUGC.HastaDescCliente = null
						globals.GCshowDialogImpresionFacturasVERIFACTU('Impresión de Facturas VERIFACTU',1,null,null,null,null,null,null,null,null)
						
					}
					else{
						    var A = new Date().getFullYear().toString()
							A = A.substr(2,4)
							forms.dlg_ImpresionFacturasGC.DesdeEje = A
							forms.dlg_ImpresionFacturasGC.HastaEje = A
							forms.dlg_ImpresionFacturasGC.DesdeSer = ''
							forms.dlg_ImpresionFacturasGC.HastaSer = ''
							forms.dlg_ImpresionFacturasGC.DesdeNup = null
							forms.dlg_ImpresionFacturasGC.HastaNup = null
							forms.dlg_ImpresionFacturasGC.DesdeCliente = null
							forms.dlg_ImpresionFacturasGC.DescDesdeCliente = null
							forms.dlg_ImpresionFacturasGC.HastaCliente = null
							forms.dlg_ImpresionFacturasGC.HastaDescCliente = null			
							forms.dlg_ImpresionFacturasGC.FacturaProForma = null
							forms.dlg_ImpresionFacturasGC.FacturaE = null
							globals.GCshowDialogImpresionFacturas('Impresión de Facturas',1,null,null,null,null,null,null,null,null)
							
							
					}
					break;	
		    case 'Ventas / Meses'.toUpperCase(): 
		    		globals.GCshowDialogFacturacionClientes('Ventas / Meses',1,null,null,null,null,null,null,null,null)
		    		break;
		    case 'Ventas / Años'.toUpperCase(): 
		    		globals.GCshowDialogFacturacionClientesAgnos('Ventas / Años',1,null,null,null,null,null,null,null,null)
		    		break;
    		case 'Ventas / Zonas'.toUpperCase(): 
		    		globals.GCshowDialogConsultaVentasZonas('Ventas / Zonas',1,null,null,null,null,null,null,null,null)
		    		break;
    		case 'ABC de Ventas por clientes'.toUpperCase(): 
    				var year = new Date().getFullYear()
    				globals.btn_runJasperReportVentasClientesGC(year)
    				break;
    		case 'Asientos Conta AG Web'.toUpperCase(): 
				    var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
					var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var Conta = dataset.getValue(1, 12)
					if(Conta == '1' || globals.GCNombreUsuario == 'DEMO')
					{
					    /*query = 'select [EmpresaContable] from [ParametrosAplicacion]'
						dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
						var EC = dataset.getValue(1,1)*/
						var EC = gcparametrosaplicacion_to_parametrosaplicacion.empresacontable
						if(EC == null || EC == '')
						{
							globals.GCshowErrorDialog('No está definida la Empresa Contable en los Parametros de la Aplicación.',null,'Aceptar',null,null,null)
						}
						else
						{
							if(frm == 'FrmFacturasGC')
							{
								forms.dlg_ActualizacionContableGC.DesdeEjer = forms.FrmFacturasGC.eje_cfa;
								forms.dlg_ActualizacionContableGC.HastaEjer = forms.FrmFacturasGC.eje_cfa;
								forms.dlg_ActualizacionContableGC.DesdeSer = forms.FrmFacturasGC.ser_cfa;
								forms.dlg_ActualizacionContableGC.HastaSer = forms.FrmFacturasGC.ser_cfa;
								forms.dlg_ActualizacionContableGC.DesdeNup = forms.FrmFacturasGC.nup_cfa;
								forms.dlg_ActualizacionContableGC.HastaNup = forms.FrmFacturasGC.nup_cfa;							
							}
							else
							{
								A = utils.stringRight(new Date().getFullYear().toString(),2)
								//A = A.substr(2,4)
								forms.dlg_ActualizacionContableGC.DesdeEjer = A;
								forms.dlg_ActualizacionContableGC.HastaEjer = A;
								forms.dlg_ActualizacionContableGC.DesdeSer = '';
								forms.dlg_ActualizacionContableGC.HastaSer = '';
								forms.dlg_ActualizacionContableGC.DesdeNup = null;
								forms.dlg_ActualizacionContableGC.HastaNup = null;							
							}
							
							
							globals.GCshowDialogActualizacionContable('Actualización Contable',1,null,null,null,null,null,null,null,null)
						}
					}
					else
					{
						globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
					}
		    		break;	
		    case 'Asientos Conta AG Win'.toUpperCase(): 
				    if(frm == 'FrmFacturasGC')
					{
			    		globals.GCCriterios = 2;
			    		globals.GCTipoConsulta = 3;
			    		//globals.GCDesdeCodigo = forms.FrmFacturasGC.clie_cfa;
			    		//globals.GCHastaCodigo = forms.FrmFacturasGC.clie_cfa;
			    		globals.GCDesdeCodigo = null;
			    		globals.GCHastaCodigo = null;
			    		forms.dlg_ExportacionDatosGC.DesdeEje = forms.FrmFacturasGC.eje_cfa;
						forms.dlg_ExportacionDatosGC.HastaEje = forms.FrmFacturasGC.eje_cfa;
						forms.dlg_ExportacionDatosGC.DesdeSer = forms.FrmFacturasGC.ser_cfa;
						forms.dlg_ExportacionDatosGC.HastaSer = forms.FrmFacturasGC.ser_cfa;
						forms.dlg_ExportacionDatosGC.DesdeNup = forms.FrmFacturasGC.nup_cfa;
						forms.dlg_ExportacionDatosGC.HastaNup = forms.FrmFacturasGC.nup_cfa;						
					}
					else
					{
						A = new Date().getFullYear().toString()
						A = A.substr(2,4)
						globals.GCCriterios = 2;
			    		globals.GCTipoConsulta = 3;
			    		globals.GCDesdeCodigo = null;
			    		globals.GCHastaCodigo = null;
			    		forms.dlg_ExportacionDatosGC.DesdeEje = A;
						forms.dlg_ExportacionDatosGC.HastaEje = A;
						forms.dlg_ExportacionDatosGC.DesdeSer = '';
						forms.dlg_ExportacionDatosGC.HastaSer = '';
						forms.dlg_ExportacionDatosGC.DesdeNup = null;
						forms.dlg_ExportacionDatosGC.HastaNup = null;
					}
					globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null)
		    		break;	
    		case 'Actualización de Cobros'.toUpperCase(): 
    				query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					Conta = dataset.getValue(1, 12)
					if(Conta == '1' || globals.GCNombreUsuario == 'DEMO')
					{
			    		forms.dlg_ActualizacionCarteraCobrosGC.DesdeEjer=null;
						forms.dlg_ActualizacionCarteraCobrosGC.HastaEjer=null;
						forms.dlg_ActualizacionCarteraCobrosGC.DesdeSer='';
						forms.dlg_ActualizacionCarteraCobrosGC.HastaSer='';
						forms.dlg_ActualizacionCarteraCobrosGC.DesdeNup=null;
						forms.dlg_ActualizacionCarteraCobrosGC.HastaNup=null;	
						globals.GCshowDialogActualizacionCarteraCobros('Actualización Cartera de Cobros',1,null,null,null,null,null,null,null,null)
					}
					else
					{
						globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
					}
				    break;
    		case 'Mantenimiento BD de Cobros'.toUpperCase(): 
		    		//query = 'select [EmpresaContable] from [ParametrosAplicacion] where [NºEmpresa] = 1'
		    		//dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					/*
		    		globals.GCnav_search = null
					globals.GCnav_search2 = null
							
					forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_facturasGC.btn_goForm(event);
					
		    		forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(7) 
					
					//change tabs
					forms.lst_solution_navigation_facturasGC.btn_goForm(event);
					*/
					forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(12) 
    				var action_method = 'CobrosPagosGC';
					var item_name = 'Mantenimiento BD de Cobros';
					forms['Frm'+action_method].controller.show()
					var tabCount = forms.frm_nav_main_facturasGC.elements.tabs_recList.getMaxTabIndex();
					for (var index = 1; index <= tabCount; index++) 
					{
						var tname = forms.frm_nav_main_facturasGC.elements.tabs_recList.getTabFormNameAt(index);
						if (tname.substr(4) == action_method)
						{
							forms.frm_nav_main_facturasGC.elements.tabs_recList.tabIndex = index;
							break;
						}
					}
				
					if (item_name != null)
					if (item_name.indexOf('Admin') == -1)
					{
						//update the record information
						globals.GCsetupRecordStatus();
				
						//hide search stuff
						forms.frm_nav_main_facturasGC.elements.lbl_search.visible = true
						forms.frm_nav_main_facturasGC.elements.fld_search.visible = true
						forms.frm_nav_main_facturasGC.elements.btn_search.visible = true
					}
					else
					{
						//hide search stuff
						forms.frm_nav_main_facturasGC.elements.lbl_search.visible = false
						forms.frm_nav_main_facturasGC.elements.fld_search.visible = false
						forms.frm_nav_main_facturasGC.elements.btn_search.visible = false
					}
		    		//globals.GCshowInfoDialog('Póngase en contacto con el Departamento Comercial si desea contratarlo.', null, null, null, null, null)
		    		break;
	    	case 'Informe de cobros pendientes'.toUpperCase(): 
	    			globals.GCshowDialogCobrosPagosPendientes('Cobros y Pagos Pendientes', 1, null, null, true, null, null, null, null, null);
	    			//globals.GCshowInfoDialog('Póngase en contacto con el Departamento Comercial si desea contratarlo.', null, null, null, null, null)
	    			break;
	    	case 'Generación Remesas SEPA'.toUpperCase(): 
	    			globals.GCshowDialogSelecCobrosProcesar('Selección Cobros/Pagos a remesar', 1, null, null, true, null, null, null, null, null);
					//globals.GCshowInfoDialog('Póngase en contacto con el Departamento Comercial si desea contratarlo.', null, null, null, null, null)
					break;
	    	case 'BD Bancos ctas. cargo'.toUpperCase(): 
			    	//globals.GCshowInfoDialog('Póngase en contacto con el Departamento Comercial si desea contratarlo.', null, null, null, null, null)
					globals.GCshowDialogBancosCtasCargo('BD Bancos Ctas. Cargo', 1, null, null, true, null, null, null, null, null);
					break;
	    	case 'BD formas de pago'.toUpperCase(): 
			    	globals.GCshowDialogFormaPago('BD Formas de Pago', 1, null, null, true, null, null, null, null, null);
				    break;
	    	case 'Albaranes Pend. de Facturar'.toUpperCase(): 
	    			globals.GCshowDialogAlbaranesPendFacturar('Albaranes Pendientes de Facturar',1,null,null,null,null,null,null,null,null);
		    		break;
	    	case 'Generar Factura Alb. Pend.'.toUpperCase(): 
			    	query = 'select savefactura from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
					var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var save = dataset2.getValue(1, 1)
					
					if(save != '1')
					{
						globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Facturas.',null,'Aceptar',null,null,null)
					}
					else
					{
						
								//start a transaction
								globals.AlbaranCliente = null;
								/*if(lalbaranpendfacturar)
								{
									if(lalbaranpendfacturar.getSize() > 0)
									{*/
										if(!globals.GCisEditing()) globals.GCstartEditing()
										
										//setup the method to execute when the dialog closes
										//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deletePresupuestoLinea()'
									
										//show the "fake" dialog
										globals.GCshowDialogGeneracionFactura5('Generación Factura', 1, null, null, true, null, null, null, null, null);
									/*}
									else 
									{
										globals.GCshowErrorDialog('No existen líneas de albarán por facturar a este cliente.',null,'Aceptar',null,null,null)
									}
								}
								else 
								{
									globals.GCshowErrorDialog('No existen líneas de albarán por facturar a este cliente.',null,'Aceptar',null,null,null)
								}
							*/
						
					}
	    			break;
    		case 'BD Facturas Proforma'.toUpperCase(): 
				    win = application.getWindow('Conta')
					//setup the record status
					if(win != null)
					{
						win.destroy();
					}
		    		globals.GCnav_search = null
					globals.GCnav_search2 = null
							
					forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_facturasGC.btn_goForm(event);	
		    		forms.lst_solution_navigation_facturasGC.controller.setSelectedIndex(10) 
					
					//change tabs
					forms.lst_solution_navigation_facturasGC.btn_goForm(event);		
					break;    
	    	case 'Informe de Comisiones'.toUpperCase(): 
	    			globals.GCshowDialogInformeComision('Informe de Comisiones',1,null,null,null,null,null,null,null,null)    		
	    			break;
	    	case 'Generar XML Facturas Emitidas'.toUpperCase(): 
	    			globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con AG Informática para contratarlo', null, null, null, null, null)
					break;
			case 'Generar XML Facturas Recibidas'.toUpperCase(): 
					globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con AG Informática para contratarlo', null, null, null, null, null)
					break;
			case 'Generar XML Facturas Bienes Inversión'.toUpperCase(): 
					globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con AG Informática para contratarlo', null, null, null, null, null)
					break;
			case 'Conexión web SII transf. Archivos'.toUpperCase(): 
					globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con AG Informática para contratarlo', null, null, null, null, null)
					break;
	    	default: break;
			}
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"9856C04A-5571-4D09-990D-00E27CF9E468"}
 */
function MenuNotas(event) 
{
	/*var query = 'select taop_004 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Facturacion = dataset.getValue(1, 1)*/
	var Facturacion = gcfechalimite_usuarios.taop_004;
	if(Facturacion == '1')
	{
		switch (arguments[4]) {
		    case 'Notas a Clientes'.toUpperCase(): 			    
		    		globals.GCnav_search = null
					globals.GCnav_search2 = null
							
					forms.lst_solution_navigation_notasGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_notasGC.btn_goForm();		
		    		break;
		    case 'Diario de Notas'.toUpperCase(): 
		    		globals.GCshowDialogDiarioNotas('Diario de Notas',1,null,null,null,null,null,null,null,null)
		    		break;	
		    case 'Impresión de Notas'.toUpperCase(): 
				    var A = new Date().getFullYear().toString()
					A = A.substr(2,4)
					forms.dlg_ImpresionNotasGC.DesdeEje = A
					forms.dlg_ImpresionNotasGC.HastaEje = A
					forms.dlg_ImpresionNotasGC.DesdeNup = null
					forms.dlg_ImpresionNotasGC.HastaNup = null
					forms.dlg_ImpresionNotasGC.DesdeCliente = null
					forms.dlg_ImpresionNotasGC.HastaCliente = null
					globals.GCshowDialogImpresionNotas('Impresión de Notas',1,null,null,null,null,null,null,null,null)
					break;	
		    case 'Notas pendientes liquidar'.toUpperCase(): 
		    		globals.btn_runJasperReportNotasPendCobro()
					break;
			default: break;
			}
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"F18CE81B-6000-45B7-912E-E077472B2ADF"}
 */
function MenuMantenimientoGC(event) 
{
	/*var query = 'select taop_006 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Mant = dataset.getValue(1, 1)*/
	var Mant = gcfechalimite_usuarios.taop_006;
	if(Mant == '1')
	{
		switch (arguments[4]) {
		    case 'Parametros de la Aplicación'.toUpperCase(): 
				    //if(globals.GCNombreUsuario == 'DEMO')
		    		//{
		    			var query = "select NºEmpresa from ParametrosAplicacion where NºEmpresa = 1";
		    			if(globals.GCconex == null) var con = 'conexiongestioncomercialag'
		    			else con = globals.GCconex
		    			var dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
		    			var emp = dataset.getValue(1,1);
		    			if(emp == null) 
		    			{
		    				forms.dlg_ParametroAplicacionGC.foundset.newRecord(true)
		    				
		    				forms.dlg_ParametroAplicacionGC.nºempresa = 1;
		    				forms.dlg_ParametroAplicacionGC.propiedad = 'AG Informática y Servicios S.A.'
		    				forms.dlg_ParametroAplicacionGC.facturapredet = 1;
		    				databaseManager.saveData()
		    			
		    			}
		    			forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)

		    			//start a transaction
		    			if(!globals.GCisEditing()) globals.GCstartEditing()

		    			//setup the method to execute when the dialog closes
		    			//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deleteAddressItem()'

		    			//show the "fake" dialog
		    			
		    			globals.GCshowDialogParametrosAplicacion('Editar Parámetros Aplicación', 1, null, null, true, 'Borrar Línea', null, null, null, null);
		    			
		    		/*}
		    		else
		    		{
					    globals.GCevento = 'control A'
						globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);
		    		}*/
		    		break;
		    case 'Usuarios'.toUpperCase(): 
				    globals.GCevento = 'control Z'
					globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);
		    		break;	
		    case 'EDITAR PERFIL USUARIO': 				    
			    	forms.FrmPrincipalGC.btn_editarperfil(event);
					break;
			case 'Exportación de Datos'.toUpperCase(): 
		    		globals.GCCriterios = 0;
		    		globals.GCTipoConsulta = 0;
		    		globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null)
					break;
		    case 'Importación de Datos'.toUpperCase(): 
		    		globals.GCshowDialogImportacionDatos('Importación de Datos',1,null,null,null,null,null,null,null,null)
					break;
			case 'Actualizar tipos de I.V.A. en Maestros'.toUpperCase(): 
					globals.GCshowDialogActualizarIVA('Actualizar tipos de I.V.A.',1,null,null,null,null,null,null,null,null)
					break;
		    case 'Borrado de Presupuestos'.toUpperCase(): 
				    globals.GCevento = 'Borrado de Presupuestos'
					globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);			
					break;
		    case 'Borrado de Albaranes'.toUpperCase(): 
				    globals.GCevento = 'Borrado de Albaranes'
					globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);			
					break;
		    case 'Borrado de Facturas'.toUpperCase(): 
				    globals.GCevento = 'Borrado de Facturas'
					globals.GCshowDialogClave('Clave', 1, null, null, true, null, null, null, null, null);			
					break;
		    case 'Cambiar Precios Articulos'.toUpperCase():
		    		globals.GCshowDialogCambiarPreciosArticulos('Cambiar Precios Articulos',1,null,null,null,null,null,null,null,null)
		    		break;
		    case 'Cambiar Descuentos Articulos'.toUpperCase():
		    		globals.GCshowDialogCambiarDtoArticulos('Cambiar Descuento Articulos',1,null,null,null,null,null,null,null,null)    		
		    		break;
			default: break;
			}
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"DE2DB8F3-1D86-4DD8-BB35-9DBF2DF05FFE"}
 */
function MenuStock(event) 
{
	/*var query = 'select taop_007 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Stock = dataset.getValue(1, 1)*/
	var Stock = gcfechalimite_usuarios.taop_007;
	if(Stock == '1')
	{
		switch (arguments[4]) {
		    case 'Movimientos de Stock'.toUpperCase(): 		
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
							
					forms.lst_solution_navigation_controlstockGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_controlstockGC.btn_goForm();		
				    break;
		    case 'Inventario Produc. Terminados'.toUpperCase(): 
		    		globals.showDialogInventarioGC('Inventario', 1, null, null, true, null, null, null, null, null);			
				    break;	
		    case 'Extracto de Mov. Stock'.toUpperCase(): 
		    		globals.showDialogExtractoMovGC('Extracto de Movimentos de Stock', 1, null, null, true, null, null, null, null, null);			
		    		break;
		    case 'Diario de movimientos'.toUpperCase(): 
		    		globals.showDialogDiarioMovGC('Diario de Movimientos',1,null,null,null,null,null,null,null,null)
					break;
		    default: break;
			}
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"3C1F638B-A904-441A-B65A-4B0B67BF3E00"}
 */
function MenuAlbaran(event) 
{
	/*var query = 'select taop_003 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Expediciones = dataset.getValue(1, 1)*/
	var Expediciones = gcfechalimite_usuarios.taop_003;
	if(Expediciones == '1')
	{
		switch (arguments[4]) {
		    case 'BD de Albaranes'.toUpperCase(): 			    
		    		globals.GCnav_search = null
					globals.GCnav_search2 = null
					globals.GCFormulario = null
							
					forms.lst_solution_navigation_albaranGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_albaranGC.btn_goForm();		
		    		break;
		    case 'Consulta de Albaranes'.toUpperCase(): 
				    globals.GCshowDialogConsultaAlbaranes('Consulta de Albaranes',1,null,null,null,null,null,null,null,null)
					break;	
		    case 'Impresión de Albaranes'.toUpperCase(): 
		    		forms.dlg_ImpresionAlbaranesGC.DesdeAlbaran = null
		    		forms.dlg_ImpresionAlbaranesGC.HastaAlbaran = null
				    globals.GCshowDialogImpresionAlbaranes('Impresión de Albaranes',1,null,null,null,null,null,null,null,null)
					break;	
		    case 'Albaranes Pend. de Facturar'.toUpperCase(): 
				    globals.GCshowDialogAlbaranesPendFacturar('Albaranes Pendientes de Facturar',1,null,null,null,null,null,null,null,null)
					break;
		    case 'Actualizar Stock Albaranes'.toUpperCase(): 
		    		if(gcfechalimite_usuarios.taop_007=='1') globals.GCshowDialogActualizarStockAlbaranes('Actualizar Stock Albaranes',1,null,null,null,null,null,null,null,null)
					else globals.GCshowErrorDialog('Este usuario no tiene permiso para actualizar Stock de Albaranes!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
					break;
		   default: break;
		}	
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A6F34117-78B7-43AB-B5EC-14E21FEB7E8B"}
 */
function MenuCompras(event) 
{
	/*var query = 'select taop_005 from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var Programas = dataset.getValue(1, 1)*/
	var Programas = gcfechalimite_usuarios.taop_005;
	if(Programas == '1')
	{
		switch (arguments[4]) {
		    case 'Gestión Pedidos a Proveedores'.toUpperCase(): 			    
		    		globals.GCnav_search = null
					globals.GCnav_search2 = null
							
					forms.lst_solution_navigation_comprasGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_comprasGC.btn_goForm(event);		
		    		break;
		    case 'Impresión de Pedidos a Proveedores'.toUpperCase(): 	
		    		globals.GCshowDialogImpresionPedidosCompras('Impresión Pedidos a Proveedores',1,null,null,null,null,null,null,null,null)
		    		break;
		    case 'Consulta Pedidos a Proveedores'.toUpperCase():
		    		globals.GCshowDialogConsultaPedidosCompras('Consulta Pedidos a Proveedores',1,null,null,null,null,null,null,null,null)
		    		break;
		    case 'BD Albaranes de Proveedor'.toUpperCase(): 			    
					globals.GCnav_search = null
					globals.GCnav_search2 = null
							
					forms.lst_solution_navigation_comprasGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_comprasGC.btn_goForm(event);
				    forms.lst_solution_navigation_comprasGC.controller.setSelectedIndex(2) 
					
					//change tabs
					forms.lst_solution_navigation_comprasGC.btn_goForm(event);	
					break;
		    case 'Consulta Albaranes de Proveedor'.toUpperCase(): 	
		    		globals.GCshowDialogConsultaAlbaranesCompras('Consulta Albaranes de Proveedores',1,null,null,null,null,null,null,null,null)
		    		break;
    		case 'BD Facturas de Proveedor'.toUpperCase(): 			    
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
							
					forms.lst_solution_navigation_comprasGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_comprasGC.btn_goForm(event);
				    forms.lst_solution_navigation_comprasGC.controller.setSelectedIndex(3) 
					
					//change tabs
					forms.lst_solution_navigation_comprasGC.btn_goForm(event);	
					break;
    		case 'Consulta Facturas de Proveedor'.toUpperCase(): 	
    				globals.GCshowDialogConsultaFacturasCompras('Consulta Facturas de Proveedores',1,null,null,null,null,null,null,null,null)
    				break;
    		case 'Petición de Ofertas'.toUpperCase(): 
				    globals.GCnav_search = null
					globals.GCnav_search2 = null
							
					forms.lst_solution_navigation_comprasGC.controller.setSelectedIndex(1) 
						
							//change tabs
					forms.lst_solution_navigation_comprasGC.btn_goForm(event);
				    forms.lst_solution_navigation_comprasGC.controller.setSelectedIndex(4) 
					
					//change tabs
					forms.lst_solution_navigation_comprasGC.btn_goForm(event);
		    		break;	    		
    		case 'Actualización Albaranes Stock'.toUpperCase(): 	
    				if(gcfechalimite_usuarios.taop_007=='1') globals.GCshowDialogActualizarStockAlbaranesCompras('Actualizar Stock Albaranes',1,null,null,null,null,null,null,null,null)
					else globals.GCshowErrorDialog('Este usuario no tiene permiso para actualizar Stock de Albaranes!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
					break;
    		case 'Contabilizar Facturas de Proveedor'.toUpperCase(): 	
		    		forms.dlg_ActualizacionContableComprasGC.DesdeProveedor = null;
		    		forms.dlg_ActualizacionContableComprasGC.HastaProveedor = null;
		    		forms.dlg_ActualizacionContableComprasGC.DesdeFactura = null;
		    		forms.dlg_ActualizacionContableComprasGC.HastaFactura = null;
		    		globals.GCshowDialogActualizacionContableCompras('Actualización Contable',1,null,null,null,null,null,null,null,null)
					break;
    		case 'Compras / Meses'.toUpperCase(): 
    				globals.GCshowDialogFacturacionProveedores('Compras / Meses',1,null,null,null,null,null,null,null,null)
    				break;
    		case 'Generar XML Facturas Emitidas'.toUpperCase(): 
    				globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con AG Informática para contratarlo', null, null, null, null, null)
					break;
			case 'Generar XML Facturas Recibidas'.toUpperCase(): 
					globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con AG Informática para contratarlo', null, null, null, null, null)
					break;
			case 'Generar XML Facturas Bienes Inversión'.toUpperCase(): 
					globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con AG Informática para contratarlo', null, null, null, null, null)
					break;
			case 'Conexión web SII transf. Archivos'.toUpperCase(): 
					globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con AG Informática para contratarlo', null, null, null, null, null)
					break;
			default: break;
			}	
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para acceder a este módulo!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Date} DFECH
 * 
 * @param {Date} HFECH
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 *
 * @param {Number} DEJE
 *
 * @param {Number} HEJE
 *
 * @param {String} DSER
 *
 * @param {String} HSER
 *
 * @param {Number} DNUP
 *
 * @param {Number} HNUP
 *
 * @param {Number} ORD
 * 
 * @param {Number} DET
 *
 * @param {String} SITU
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"5F179DCE-D7CA-4A77-826C-A693BE654DCE"}
 */
function btn_runJasperReportDiarioFacturacion(DFECH,HFECH,DCLI,HCLI,DEJE,HEJE,DSER,HSER,DNUP,HNUP,ORD,DET,SITU) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())			
		}
		server_name = globals.GCconex
		if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai)
		{
			if(DET == 1) var reportName = 'Diario_FacturacionDetalladoTBAIGC.jrxml';
			else reportName = 'Diario_Facturacion_TBAIGC.jrxml';
		}
		else
		{
			if(DET == 1) reportName = 'Diario_FacturacionDetalladoGC.jrxml';
			else reportName = 'Diario_FacturacionGC.jrxml';
		}
		
		var params = new java.util.HashMap()
		
		if(DFECH != null)
		{
			var fech = utils.dateFormat(DFECH,'dd-MM-yyyy')			
			params.put('DesdeFecha', fech)
		}
		else
		{
			fech = new Date()
			fech.setMonth(0,1)
			fech = utils.dateFormat(fech,'dd-MM-yyyy')
			params.put('DesdeFecha', fech)
		}
		if(HFECH != null)
		{
			fech = utils.dateFormat(HFECH,'dd-MM-yyyy')			
			params.put('HastaFecha', fech)
		}
		else
		{
			fech = new Date(2999,11,31)
			//fech.setMonth(11,31)
			fech = utils.dateFormat(fech,'dd-MM-yyyy')
			params.put('HastaFecha', fech)
		}
		if(DCLI != null)
		{
			params.put('DesdeCliente', DCLI)
			
		}
		else
		{
			params.put('DesdeCliente', 0)
			
		}
		if(HCLI != null)
		{
			params.put('HastaCliente', HCLI)
			
		}
		else
		{
			params.put('HastaCliente', 999999)
			
		}
		if(DEJE != null)
		{
			params.put('DesdeEjer', DEJE)
			
		}
		else
		{
			params.put('DesdeEjer', 1)
			
		}
		if(HEJE != null)
		{
			params.put('HastaEjer', HEJE)
			
		}
		else
		{
			params.put('HastaEjer', 999999)
			
		}
		params.put('DesdeSer', DSER)			
		params.put('HastaSer', HSER)	
		
		if(DNUP != null)
		{
			params.put('DesdeNFact', DNUP)
			
		}
		else
		{
			params.put('DesdeNFact', 1)
			
		}
		if(HNUP != null)
		{
			params.put('HastaNFact', HNUP)
			
		}
		else
		{
			params.put('HastaNFact', 999999)
			
		}
		if(reportName == 'Diario_FacturacionDetalladoGC.jrxml' || 
				reportName == 'Diario_FacturacionDetalladoTBAIGC.jrxml')
		{
			if(ORD == 1)
			{
				var orden = '[eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC,nli_lfa ASC'
			}
			else if(ORD == 2)
			{
				orden = '[fecha_cfa] ASC, [eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC,nli_lfa ASC'
			}
			else if(ORD == 3)
			{
				orden = '[clie_cfa] ASC, [eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC,nli_lfa ASC'
			}
			else if(ORD == 4)
			{
				orden = '[eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC,nli_lfa ASC'
			}
		}
		else 
		{
			if(ORD == 1)
			{
				orden = '[eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC'
			}
			else if(ORD == 2)
			{
				orden = '[fecha_cfa] ASC, [eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC'
			}
			else if(ORD == 3)
			{
				orden = '[clie_cfa] ASC, [eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC'
			}
			else if(ORD == 4)
			{
				orden = 'fechconta_cfa asc,[eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC'
			}
		}
		
		params.put('Orden', orden)
		
		if(SITU == 'T')
		{
				var situacion = "is null or tbFacturaCabecera.situconta = 'C'";
		}
		else if(SITU == null)
		{
			situacion = 'is null';
		}
		else if(SITU == 'C')
		{
			situacion = "='C'"
		}
		params.put('Situacion', situacion)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Diario Facturacion';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Diario Facturacion';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Date} DFECH
 * 
 * @param {Date} HFECH
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 *
 * @param {Number} DEJE
 *
 * @param {Number} HEJE
 *
 * @param {String} DSER
 *
 * @param {String} HSER
 *
 * @param {Number} DNUP
 *
 * @param {Number} HNUP
 *
 * @param {Number} ORD
 * 
 * @param {Number} DET
 *
 * @param {String} SITU
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"174D5DBB-B5A6-450C-A48F-1BB947F90FA3"}
 */
function btn_runJasperReportDiarioFacturacionPendCobro(DFECH,HFECH,DCLI,HCLI,DEJE,HEJE,DSER,HSER,DNUP,HNUP,ORD,DET,SITU) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())			
		}
		server_name = globals.GCconex
		if(DET == 1) var reportName = 'Diario_FacturacionPendCobroDetalladoGC.jrxml';
		else reportName = 'Diario_FacturacionPendCobroGC.jrxml';
		
		
		var params = new java.util.HashMap()
		
		if(DFECH != null)
		{
			var fech = utils.dateFormat(DFECH,'dd-MM-yyyy')			
			params.put('DesdeFecha', fech)
		}
		else
		{
			fech = new Date()
			fech.setMonth(0,1)
			fech = utils.dateFormat(fech,'dd-MM-yyyy')
			params.put('DesdeFecha', fech)
		}
		if(HFECH != null)
		{
			fech = utils.dateFormat(HFECH,'dd-MM-yyyy')			
			params.put('HastaFecha', fech)
		}
		else
		{
			fech = new Date(2999,11,31)
			//fech.setMonth(11,31)
			fech = utils.dateFormat(fech,'dd-MM-yyyy')
			params.put('HastaFecha', fech)
		}
		if(DCLI != null)
		{
			params.put('DesdeCliente', DCLI)
			
		}
		else
		{
			params.put('DesdeCliente', 0)
			
		}
		if(HCLI != null)
		{
			params.put('HastaCliente', HCLI)
			
		}
		else
		{
			params.put('HastaCliente', 999999)
			
		}
		if(DEJE != null)
		{
			params.put('DesdeEjer', DEJE)
			
		}
		else
		{
			params.put('DesdeEjer', 1)
			
		}
		if(HEJE != null)
		{
			params.put('HastaEjer', HEJE)
			
		}
		else
		{
			params.put('HastaEjer', 999999)
			
		}
		params.put('DesdeSer', DSER)			
		params.put('HastaSer', HSER)	
		
		if(DNUP != null)
		{
			params.put('DesdeNFact', DNUP)
			
		}
		else
		{
			params.put('DesdeNFact', 1)
			
		}
		if(HNUP != null)
		{
			params.put('HastaNFact', HNUP)
			
		}
		else
		{
			params.put('HastaNFact', 999999)
			
		}
		if(reportName == 'Diario_FacturacionPendCobroDetalladoGC.jrxml')
		{
			if(ORD == 1)
			{
				var orden = '[eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC,nli_lfa ASC'
			}
			else if(ORD == 2)
			{
				orden = '[fecha_cfa] ASC, [eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC,nli_lfa ASC'
			}
			else if(ORD == 3)
			{
				orden = '[clie_cfa] ASC, [eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC,nli_lfa ASC'
			}
			else if(ORD == 4)
			{
				orden = '[eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC,nli_lfa ASC'
			}
		}
		else 
		{
			if(ORD == 1)
			{
				orden = '[eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC'
			}
			else if(ORD == 2)
			{
				orden = '[fecha_cfa] ASC, [eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC'
			}
			else if(ORD == 3)
			{
				orden = '[clie_cfa] ASC, [eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC'
			}
			else if(ORD == 4)
			{
				orden = 'fechconta_cfa asc,[eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC'
			}
		}
		
		params.put('Orden', orden)
		
		if(SITU == 'T')
		{
				var situacion = "is null or tbFacturaCabecera.situconta = 'C'";
		}
		else if(SITU == null)
		{
			situacion = 'is null';
		}
		else if(SITU == 'C')
		{
			situacion = "='C'"
		}
		params.put('Situacion', situacion)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Diario Facturacion';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Diario Facturacion';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Date} DFECH
 * 
 * @param {Date} HFECH
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 *
 * @param {Number} DEJE
 *
 * @param {Number} HEJE
 *
 * @param {String} DNUP
 *
 * @param {String} HNUP
 *
 * @param {Number} ORD
 * 
 * @param {Number} DET
 *
 * @param {String} SITU
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"1A1A8EBD-F07A-4A92-A2B9-B8AE82D41209"}
 */
function btn_runJasperReportDiarioNotas(DFECH,HFECH,DCLI,HCLI,DEJE,HEJE,DNUP,HNUP,ORD,DET,SITU) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())			
		}
		server_name = globals.GCconex
		if(DET == 1) var reportName = 'Diario_NotasDetalladoGC.jrxml';
		else reportName = 'Diario_NotasGC.jrxml';
		
		
		var params = new java.util.HashMap()
		
		if(DFECH != null)
		{
			var fech = utils.dateFormat(DFECH,'dd-MM-yyyy')			
			params.put('DesdeFecha', fech)
		}
		else
		{
			fech = new Date()
			fech.setMonth(0,1)
			fech = utils.dateFormat(fech,'dd-MM-yyyy')
			params.put('DesdeFecha', fech)
		}
		if(HFECH != null)
		{
			fech = utils.dateFormat(HFECH,'dd-MM-yyyy')			
			params.put('HastaFecha', fech)
		}
		else
		{
			fech = new Date(2999,11,31)
			//fech.setMonth(11,31)
			fech = utils.dateFormat(fech,'dd-MM-yyyy')
			params.put('HastaFecha', fech)
		}
		if(DCLI != null)
		{
			params.put('DesdeCliente', DCLI)
			
		}
		else
		{
			params.put('DesdeCliente', 0)
			
		}
		if(HCLI != null)
		{
			params.put('HastaCliente', HCLI)
			
		}
		else
		{
			params.put('HastaCliente', 999999)
			
		}
		if(DEJE != null)
		{
			params.put('DesdeEjer', DEJE)
			
		}
		else
		{
			params.put('DesdeEjer', 1)
			
		}
		if(HEJE != null)
		{
			params.put('HastaEjer', HEJE)
			
		}
		else
		{
			params.put('HastaEjer', 999999)
			
		}
		
		if(DNUP != null)
		{
			params.put('DesdeNFact', DNUP)
			
		}
		else
		{
			params.put('DesdeNFact', 1)
			
		}
		if(HNUP != null)
		{
			params.put('HastaNFact', HNUP)
			
		}
		else
		{
			params.put('HastaNFact', 999999)
			
		}
		if(reportName == 'Diario_NotasDetalladoGC.jrxml')
		{
			if(ORD == 1)
			{
				var orden = '[eje_cfa] ASC,[nup_cfa] ASC,nli_lfa ASC'
			}
			else if(ORD == 2)
			{
				orden = '[fecha_cfa] ASC, [eje_cfa] ASC,[nup_cfa] ASC,nli_lfa ASC'
			}
			else if(ORD == 3)
			{
				orden = '[clie_cfa] ASC, [eje_cfa] ASC,[nup_cfa] ASC,nli_lfa ASC'
			}
			else if(ORD == 4)
			{
				orden = '[eje_cfa] ASC,[nup_cfa] ASC,nli_lfa ASC'
			}
		}
		else 
		{
			if(ORD == 1)
			{
				orden = '[eje_cfa] ASC,[nup_cfa] ASC'
			}
			else if(ORD == 2)
			{
				orden = '[fecha_cfa] ASC, [eje_cfa] ASC,[nup_cfa] ASC'
			}
			else if(ORD == 3)
			{
				orden = '[clie_cfa] ASC, [eje_cfa] ASC,[nup_cfa] ASC'
			}
			else if(ORD == 4)
			{
				orden = '[eje_cfa] ASC,[nup_cfa] ASC'
			}
		}
		
		params.put('Orden', orden)
		
		if(SITU == 'T')
		{
				var situacion = "is null or tbNotaCabecera.situcobrado = 'C'";
		}
		else if(SITU == null)
		{
			situacion = 'is null';
		}
		else if(SITU == 'C')
		{
			situacion = "='C'"
		}
		params.put('Situacion', situacion)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Diario Notas';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Diario Notas';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Date} DFECH
 * 
 * @param {Date} HFECH
 * 
 * @param {String} DCLI
 *
 * @param {String} HCLI
 *
 * @param {Number} DET
 *
  *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"C6312064-21B0-43D7-B321-9FD9E9A806CD"}
 */
function btn_runJasperReportInformeComision(DFECH,HFECH,DCLI,HCLI,DET) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		var reportName = 'InformeComisionesGC.jrxml';
		
		
		var params = new java.util.HashMap()
		
		if(DFECH != null)
		{
			var fech = utils.dateFormat(DFECH,'dd-MM-yyyy')			
			params.put('DesdeFecha', fech)
		}
		else
		{
			fech = new Date()
			fech.setMonth(0,1)
			fech = utils.dateFormat(fech,'dd-MM-yyyy')
			params.put('DesdeFecha', fech)
		}
		if(HFECH != null)
		{
			fech = utils.dateFormat(HFECH,'dd-MM-yyyy')			
			params.put('HastaFecha', fech)
		}
		else
		{
			fech = new Date(2999,11,31)
			//fech.setMonth(11,31)
			fech = utils.dateFormat(fech,'dd-MM-yyyy')
			params.put('HastaFecha', fech)
		}
		if(DCLI != null)
		{
			params.put('DesdeAgente', DCLI)
			
		}
		else
		{
			params.put('DesdeAgente', '')
			
		}
		if(HCLI != null)
		{
			params.put('HastaAgente', HCLI)
			
		}
		else
		{
			params.put('HastaAgente', 'ZZZZZZZ')
			
		}
				
		params.put('Detalle', DET)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Informe Comisiones';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Informe Comisiones';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Number} DYEAR
 * 
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"205078C8-686E-4162-AF62-3E6BFD87DF2B"}
 */
function btn_runJasperReporttop5Articulos(DYEAR) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		var reportName = 'Ventas_top5ArticulosGC.jrxml';
		
		
		var params = new java.util.HashMap()
		
		params.put('Agno', DYEAR)
		
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'VENTAS POR ARTICULO';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'VENTAS POR ARTICULO';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * 
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"95D1C98E-DBDD-4F84-9925-40270BBCEEAE"}
 */
function btn_runJasperReportciferroneos() {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		var reportName = 'Consulta_ciferroneosGC.jrxml';
		
		
		var params = new java.util.HashMap()
		
		
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'CIF_DNI_Erroneos';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'CIF_DNI_Erroneos';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
*
*
 *
 *
 * @properties={typeid:24,uuid:"7E10A235-F814-453E-A12F-148A86E93DB5"}
 */
function btn_runJasperReportSWIFTBancosGC() {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		var reportName = 'Consulta_BancosSWIFTGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		
		var params = new java.util.HashMap()
		//params.put('IdEjercicio', globals.Empresa)
				
		
		
		
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Consulta SWIFT Bancos';
			//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Consulta SWIFT Bancos';
				nom = GCQuitarCaracteresEspeciales(nom)
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
*
*
 *
 *
 *
 * @properties={typeid:24,uuid:"F415A374-DFE4-4860-9F07-1F864A3D3165"}
 */
function btn_runJasperReportUnidMedidaGC() {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		var reportName = 'Consulta_UnidMedidaGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		
		var params = new java.util.HashMap()
		//params.put('IdEjercicio', globals.Empresa)
				
		
		
		
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Consulta Unidades Medida';
			//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Consulta Unidades Medida';
				nom = GCQuitarCaracteresEspeciales(nom)
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Number} DEJER
 *
 * @param {String} DSER
 *
 * @param {Number} DNUP
 * 
 * @param {Number} HEJER
 *
 * @param {String} HSER
 *
 * @param {Number} HNUP
 * 
 * @param {Number} DCLI
 * 
 * @param {Number} HCLI
 *
 * @param {Number} FPROF
 *
 *
 * @properties={typeid:24,uuid:"11A26E02-74D8-4354-842C-F7342B1C76B8"}
 */
function btn_runJasperReportFacturaVentas(DEJER,DSER,DNUP,HEJER,HSER,HNUP,DCLI,HCLI,FPROF) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		
		if(FPROF == 1)
		{
			var reportName = /*'cagwe501d.RPV'*/'FacturaVentaProformaGC.jrxml';
		}
		else
		{
			if(forms.dlg_ImpresionFacturasGC.FormatoFactura == 1) reportName = /*'cagwe501d.RPV'*/'FacturaVentaGC.jrxml';
			else if(forms.dlg_ImpresionFacturasGC.FormatoFactura2 == 1) reportName = /*'cagwe501d.RPV'*/'FacturaVenta2GC.jrxml';
			else if(forms.dlg_ImpresionFacturasGC.FormatoFactura3 == 1) reportName = /*'cagwe501d.RPV'*/'FacturaVenta3GC.jrxml';
			else if(forms.dlg_ImpresionFacturasGC.FormatoFactura4 == 1) reportName = /*'cagwe501d.RPV'*/'FacturaVenta4GC.jrxml';
			else reportName = /*'cagwe501d.RPV'*/'FacturaVentaGC.jrxml';
		}
		
		
		var params = new java.util.HashMap()
		params.put('DesdeEjer', DEJER)
		params.put('DesdeSer', DSER)
		params.put('DesdeNFact', DNUP)
		params.put('HastaEjer', HEJER)
		params.put('HastaSer', HSER)
		params.put('HastaNFact', HNUP)
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Factura Ventas';
			if(globals.GCSalidaPor == 1) plugins.jasperPluginRMI.runReport(server_name,reportName,'FinePrint',OUTPUT_FORMAT.PRINT,params)
			else plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
				var exportTo = 'pdf';//plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF
				var nom = 'Factura Ventas';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				var n = Math.random().toString()
				n = utils.stringRight(n,10)
				
				var tempFile = plugins.file.createFile(nom+'_'+n+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//Firmo con certificado el PDF
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Number} DEJER
 *
 * @param {String} DSER
 *
 * @param {Number} DNUP
 * 
 * @param {Number} HEJER
 *
 * @param {String} HSER
 *
 * @param {Number} HNUP
 * 
 * @param {Number} DCLI
 * 
 * @param {Number} HCLI
 *
 * @param {Number} FORMATO
 *
 *
 *
 * @properties={typeid:24,uuid:"B207EF5B-094E-47B8-8D8A-0C20C8792DA8"}
 */
function btn_runJasperReportPrevFacturaVentasTBAI(DEJER,DSER,DNUP,HEJER,HSER,HNUP,DCLI,HCLI,FORMATO) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		
		if(FORMATO == 1) var reportName = 'FacturaVentaGC.jrxml';
		else if(FORMATO == 2) reportName = 'FacturaVenta3GC.jrxml';
		else reportName = 'FacturaVenta2GC.jrxml';			
		
		
		
		var params = new java.util.HashMap()
		params.put('DesdeEjer', DEJER)
		params.put('DesdeSer', DSER)
		params.put('DesdeNFact', DNUP)
		params.put('HastaEjer', HEJER)
		params.put('HastaSer', HSER)
		params.put('HastaNFact', HNUP)
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Factura Ventas';
			if(globals.GCSalidaPor == 1) plugins.jasperPluginRMI.runReport(server_name,reportName,'FinePrint',OUTPUT_FORMAT.PRINT,params)
			else plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
				var exportTo = 'pdf';//plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF
				var nom = 'Factura Ventas';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				var n = Math.random().toString()
				n = utils.stringRight(n,10)
				
				var tempFile = plugins.file.createFile(nom+'_'+n+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//Firmo con certificado el PDF
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Number} DEJER
 *
 * @param {String} DSER
 *
 * @param {Number} DNUP
 * 
 * @param {Number} HEJER
 *
 * @param {String} HSER
 *
 * @param {Number} HNUP
 * 
 * @param {Number} DCLI
 * 
 * @param {Number} HCLI
 *
 * @param {Number} FORMATO
 *
 * @properties={typeid:24,uuid:"0F331FB3-2972-44B8-BD85-BE0638D5748F"}
 */
function btn_runJasperReportFacturaVentasTBAI(DEJER,DSER,DNUP,HEJER,HSER,HNUP,DCLI,HCLI,FORMATO) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		
		
		if(FORMATO == 1) var reportName = 'FacturaVentaTBAIGC.jrxml';
		else if(FORMATO == 2) reportName = 'FacturaVentaTBAI2GC.jrxml';
		else reportName = 'FacturaVentaTBAI3GC.jrxml';
		
		
		
		var params = new java.util.HashMap()
		params.put('DesdeEjer', DEJER)
		params.put('DesdeSer', DSER)
		params.put('DesdeNFact', DNUP)
		params.put('HastaEjer', HEJER)
		params.put('HastaSer', HSER)
		params.put('HastaNFact', HNUP)
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Factura Ventas TBAI';
			//plugins.jasperPluginRMI.runReport(server_name,reportName,'FinePrint','print',params)
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
				var exportTo = 'pdf';//plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF
				var nom = 'Factura Ventas TBAI';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//Firmo con certificado el PDF
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DC
 * @param {Number} HC
 * @param {Number} YEAR
 * @param {Number} DM
 * @param {Number} HM
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 * @properties={typeid:24,uuid:"BF11B0B7-E363-48C2-B642-163F1950D908"}
 */
function btn_runJasperReportFacturacionClientesGC(DC,HC,YEAR,DM,HM) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex;
		var reportName = 'InformeVentasClientesArticulos3GC.jrxml';
		
		
		var params = new java.util.HashMap()
		if(DC != null)
		{
			params.put('dcli',DC)
		}
		else
		{
			params.put('dcli', 0)
			
		}
		if(HC != null)
		{
			params.put('hcli', HC)
		}
		else
		{
			params.put('hcli', 999999)
		}
		
		params.put('Year', YEAR)
		//params.put('Year', new Date().getFullYear())
		if(DM != null)
		{
			params.put('dmes',DM)
		}
		else
		{
			params.put('dmes', 1)
			
		}
		if(HM != null)
		{
			params.put('hmes', HM)
		}
		else
		{
			params.put('hmes', 12)
		}
		
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			//if(application.getApplicationType() != 5)
			{
					var name = 'FACTURACIÓN POR CLIENTES';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF;
					var nom = 'FACTURACIÓN POR CLIENTES '+YEAR;
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DC
 * @param {Number} HC
 * @param {Number} YEAR
 * @param {Number} DM
 * @param {Number} HM
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D1737760-2057-4E3C-9AE5-8BD5415EE41D"}
 */
function btn_runJasperReportFacturacionClientes_2GC(DC,HC,YEAR,DM,HM) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex;
		var reportName = 'InformeVentasClientesArticulos3_2GC.jrxml';
		
		
		var params = new java.util.HashMap()
		if(DC != null)
		{
			params.put('dcli',DC)
		}
		else
		{
			params.put('dcli', 0)
			
		}
		if(HC != null)
		{
			params.put('hcli', HC)
		}
		else
		{
			params.put('hcli', 999999)
		}
		
		params.put('Year', YEAR)
		//params.put('Year', new Date().getFullYear())
		if(DM != null)
		{
			params.put('dmes',DM)
		}
		else
		{
			params.put('dmes', 1)
			
		}
		if(HM != null)
		{
			params.put('hmes', HM)
		}
		else
		{
			params.put('hmes', 12)
		}
		
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			//if(application.getApplicationType() != 5)
			{
					var name = 'FACTURACIÓN POR CLIENTES';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF;
					var nom = 'FACTURACIÓN POR CLIENTES '+YEAR;
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DC
 * @param {Number} HC
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"51277D29-625A-480D-993E-C28DA945213B"}
 */
function btn_runJasperReportFacturacionClientesAgnosGC(DC,HC) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex;
		var reportName = 'InformeVentasClientesAgnosGC.jrxml';
		
		
		var params = new java.util.HashMap()
		if(DC != null)
		{
			params.put('dcli',DC)
		}
		else
		{
			params.put('dcli', 0)
			
		}
		if(HC != null)
		{
			params.put('hcli', HC)
		}
		else
		{
			params.put('hcli', 999999)
		}
		
		//params.put('Year', new Date().getFullYear())
		
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			//if(application.getApplicationType() != 5)
				{
					var name = 'FACTURACIÓN POR CLIENTES AÑOS';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF;
					var nom = 'FACTURACIÓN POR CLIENTES AÑOS';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {String} DF
 * @param {String} HF
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"EED0AE8A-88A5-4EBC-9F98-12A8C5FE51AB"}
 */
function btn_runJasperReportBalanceGC(DF,HF) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex;
		var reportName = 'BalanceGC.jrxml';
		
		
		var params = new java.util.HashMap()
		params.put('dfech',DF)
		params.put('hfech', HF)
		
		//params.put('Year', new Date().getFullYear())
		
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			//if(application.getApplicationType() != 5)
				{
					var name = 'Balance';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF;
					var nom = 'Balance';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DC
 * @param {Number} HC
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"2DC5263E-368F-4216-9716-E0F5C5F98EAC"}
 */
function btn_runJasperReportFacturacionProveedoresAgnosGC(DC,HC) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex;
		var reportName = 'InformeComprasProveedoresAgnosGC.jrxml';
		
		
		var params = new java.util.HashMap()
		if(DC != null)
		{
			params.put('dcli',DC)
		}
		else
		{
			params.put('dcli', 0)
			
		}
		if(HC != null)
		{
			params.put('hcli', HC)
		}
		else
		{
			params.put('hcli', 999999)
		}
		
		//params.put('Year', new Date().getFullYear())
		
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			//if(application.getApplicationType() != 5)
				{
					var name = 'FACTURACIÓN POR PROVEEDORES AÑOS';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF;
					var nom = 'FACTURACIÓN POR PROVEEDORES AÑOS';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DC
 * @param {Number} HC
 * @param {Number} YEAR
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"FBB76448-B480-4C43-8A5F-93ED3E7B24C9"}
 */
function btn_runJasperReportFacturacionProveedoresGC(DC,HC,YEAR) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex;
		var reportName = 'InformeComprasArticulos3GC.jrxml';
		
		
		var params = new java.util.HashMap()
		if(DC != null)
		{
			params.put('dcli',DC)
		}
		else
		{
			params.put('dcli', 0)
			
		}
		if(HC != null)
		{
			params.put('hcli', HC)
		}
		else
		{
			params.put('hcli', 999999)
		}
		
		params.put('Year', YEAR)
		//params.put('Year', new Date().getFullYear())
		
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			//if(application.getApplicationType() != 5)
				{
					var name = 'FACTURACIÓN POR PROVEEDORES';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF;
					var nom = 'FACTURACIÓN POR PROVEEDORES';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {String} DREF
 *
 * @param {String} HREF
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 *  @param {String} TIPO
 *  
 *
 *
 *
 * @properties={typeid:24,uuid:"05435140-A085-4E4F-93F5-8F0E0C9D4E93"}
 */
function btn_runJasperReportConsultaModificacionDatosGC(DREF,HREF,DFECH,HFECH,TIPO) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex	
		var reportName = 'InformeModificacionesDatosGC.jrxml';
		
		
		var params = new java.util.HashMap()
		params.put('DesdeCodigo', DREF)
		params.put('HastaCodigo', HREF)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		//(A=Piezas) (M=Materiales) (E=Procesos) (R=Estructuras) (C=Clientes) (P=Proveedores)
		if(TIPO == null)
		{
			TIPO = "= 'C' OR tbHistoricoModificacionDatos.Tipo = 'P' OR "+
					"tbHistoricoModificacionDatos.Tipo = 'A' OR " +
					"tbHistoricoModificacionDatos.Tipo = 'O' OR " +
					"tbHistoricoModificacionDatos.Tipo = 'F' OR " +
					"tbHistoricoModificacionDatos.Tipo = 'FP' OR " +
					"tbHistoricoModificacionDatos.Tipo = 'IVA' OR " +
					"tbHistoricoModificacionDatos.Tipo = 'D' OR " +
					"tbHistoricoModificacionDatos.Tipo = 'B' OR " +
					"tbHistoricoModificacionDatos.Tipo = 'COM' OR " +
					"tbHistoricoModificacionDatos.Tipo = 'SW' OR " +
					"tbHistoricoModificacionDatos.Tipo = 'TR' OR " +
					"tbHistoricoModificacionDatos.Tipo = 'DEL' OR " + 
					"tbHistoricoModificacionDatos.Tipo = 'BAN' OR " +
					"tbHistoricoModificacionDatos.Tipo = 'AG' OR " +
					"tbHistoricoModificacionDatos.Tipo = 'UM' OR "+
					"tbHistoricoModificacionDatos.Tipo = 'M' OR "+
					"tbHistoricoModificacionDatos.Tipo = 'OB' "
		}
		else if(TIPO == 'A')
		{
			TIPO = "= 'A'";
		}
		else if(TIPO == 'C')
		{
			TIPO = "= 'C'";
		}
		else if(TIPO == 'P')
		{
			TIPO = "= 'P'";
		}
		else if(TIPO == 'O')
		{
			TIPO = "= 'O'";
		}
		else if(TIPO == 'F')
		{
			TIPO = "= 'F'";
		}
		else if(TIPO == 'FP')
		{
			TIPO = "= 'FP'";
		}
		else if(TIPO == 'IVA')
		{
			TIPO = "= 'IVA'";
		}
		else if(TIPO == 'D')
		{
			TIPO = "= 'D'";
		}
		else if(TIPO == 'B')
		{
			TIPO = "= 'B'";
		}
		else if(TIPO == 'COM')
		{
			TIPO = "= 'COM'";
		}
		else if(TIPO == 'SW')
		{
			TIPO = "= 'SW'";
		}
		else if(TIPO == 'TR')
		{
			TIPO = "= 'TR'";
		}
		else if(TIPO == 'DEL')
		{
			TIPO = "= 'DEL'";
		}
		else if(TIPO == 'BAN')
		{
			TIPO = "= 'BAN'";
		}
		else if(TIPO == 'AG')
		{
			TIPO = "= 'AG'";
		}
		else if(TIPO == 'UM')
		{
			TIPO = "= 'UM'";
		}
		else if(TIPO == 'M')
		{
			TIPO = "= 'M'";
		}
		else if(TIPO == 'OB')
		{
			TIPO = "= 'OB'";
		}
		params.put('Tipo', TIPO)
		//Hecho con RPV
		/*if(globals.GCCriterios == 0) var ord = 'cAsientoContableLinea.FechaAsiento, cAsientoContableLinea.IdAsiento'
		else if(globals.GCCriterios == 1) ord = 'cAsientoContableLinea.IdAsiento, cAsientoContableLinea.FechaAsiento'
		
		var query = "SELECT Distinct (IdAsiento),FechaAsiento FROM [dbo].[cAsientoContableLinea] "+
					"WHERE [IdEjercicio] = '"+globals.Empresa+"' AND ([IdAsiento] BETWEEN "+
					desasi + " AND "+ hasasi+ 
					") AND ([FechaAsiento] BETWEEN '"+ desfech + "' AND '"+ hasfech+ 
					"') AND ([Situacion] = "+ Situacion +
					") ORDER BY "+ ord
		var ds = forms.FrmLoginERP.controller.getDataSource().split('/');
		var dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 999999)
		var rows = dataset.getMaxRowIndex()
		
		var f = plugins.file.createTempFile('RPVDATDI','.RPx');
		var lin = 'TEMPLATE=c:\\temp\\'+reportName
		var lon = lin.length
		var linea = PreparaLinea(lin, lon, 'Left');
    	InsertaLinea(linea,f)
		lin = '|titulos|'+globals.NombreEmpresa+'  |'+globals.Empresa+'|'+globals.Ejercicio+
			  '|INFORME DEL DIARIO DE APUNTES   |Filtro:'+globals.DesdeAsiento+' - '+globals.HastaAsiento+
			  ' PERIODO: '+utils.dateFormat(globals.DesdeFechaERP,'dd/MM/yyyy')+'  '+utils.dateFormat(globals.HastaFechaERP,'dd/MM/yyyy')+'|'
		lon = 131
		linea = PreparaLinea(lin, lon, 'Left');
		InsertaLinea(linea,f)
		
		for(var i=1;i<=rows;i++)
		{
			var Asiento = dataset.getValue(i,1);
			var FechaAsiento = utils.dateFormat(dataset.getValue(i,2),'dd/MM/yyyy')
			lin = '|LINEAAS|Asiento Num: '+Asiento+'| Fecha: '+FechaAsiento+'|'
			lon = 155
			linea = PreparaLinea(lin, lon, 'Left');
			InsertaLinea(linea,f)
			
			query = "SELECT [IdAsientoLinea],[Situacion],[CuentaContable],[DescCuentaContable],"+
			"[Concepto],[ImporteDebe],[ImporteHaber],[BaseIva1],[PorcIva1],[CuotaIva1],"+
			"[BaseIva2],[PorcIva2],[CuotaIva2],[BaseIva3],[PorcIva3],[CuotaIva3] "+
			"FROM [dbo].[cAsientoContableLinea] "+
			"WHERE [IdEjercicio] = '"+globals.Empresa+"' AND ([IdAsiento] = "+ Asiento +
			") AND ([FechaAsiento] BETWEEN '"+ desfech + "' AND '"+ hasfech+ 
			"') AND ([Situacion] = "+ Situacion +
			") ORDER BY "+ Orden
			var dataset2 = databaseManager.getDataSetByQuery(ds[1], query, null, 999999999)
			var rows2 = dataset2.getMaxRowIndex()
			for(var j=1;j<=rows2;j++)
			{
				var AsientoLinea = dataset2.getValue(j,1)
				var situ = dataset2.getValue(j,2)
				var cc = dataset2.getValue(j,3)
				var desccc = dataset2.getValue(j,4)
				var concep = dataset2.getValue(j,5)
				var importedebe = dataset2.getValue(j,6)
				var importehaber = dataset2.getValue(j,7)
				var BI1 = dataset2.getValue(j,8)
				var P1 = dataset2.getValue(j,9)
				var CU1 = dataset2.getValue(j,10)
				var BI2 = dataset2.getValue(j,11)
				var P2 = dataset2.getValue(j,12)
				var CU2 = dataset2.getValue(j,13)
				var BI3 = dataset2.getValue(j,14)
				var P3 = dataset2.getValue(j,15)
				var CU3 = dataset2.getValue(j,16)
				
				lin = '|LINEA|'
				linea = PreparaLinea(lin, 7, 'Left');
				lin= AsientoLinea + situ + '|'
				linea = linea + PreparaLinea2(lin, 6, 'Right');
				lin= cc
				linea = linea + PreparaLinea(lin, 8, 'Left');
				lin= '|'+desccc 
				linea = linea + PreparaLinea(lin, 48, 'Left');
				lin= '|'+concep
				linea = linea + PreparaLinea(lin, 50, 'Left');
				lin= '|'
				linea = linea + PreparaLinea(lin, 1, 'Left');
				lin= utils.numberFormat(importedebe,'###,###,##0.00') + '|'
				linea = linea + PreparaLinea(lin, 15, 'Right');
				lin= utils.numberFormat(importehaber,'###,###,##0.00') + '|'
				linea = linea + PreparaLinea(lin, 15, 'Right');
				InsertaLinea(linea,f)
				
				if(globals.DetallarIva == 1)
				{
					if(BI1 != null && BI1 != 0)
					{
						lin = '|LINEAIVA|'
						lon = lin.length
						linea = PreparaLinea(lin, lon, 'Left');
						lin = 'Base Imp.: '
						lon = lin.length
						linea = linea + PreparaLinea(lin, lon, 'Left');
						lin = utils.numberFormat(BI1,'###,###,##0.00') + '|'
						lon = lin.length
						linea = linea + PreparaLinea(lin, lon, 'Right');
						lin = 'Tipo: '
						lon = lin.length
						linea = linea + PreparaLinea(lin, lon, 'Left');
						lin = utils.numberFormat(P1,'###,###,##0.00') + '|'
						lon = (lin+'%').length
						linea = linea + PreparaLinea(lin, lon, 'Right');
						//lin = 'Cuota: '
						//lon = lin.length
						//linea = linea + PreparaLinea(lin, lon, 'Left');
						lin = utils.numberFormat(CU1,'###,###,##0.00') + '|'
						lon = lin.length
						linea = linea + PreparaLinea(lin, lon, 'Right');
						InsertaLinea(linea,f)
					}
					if(BI2 != null && BI2 != 0)
					{
						lin = '|LINEAIVA|'
						lon = lin.length
						linea = PreparaLinea(lin, lon, 'Left');
						lin = 'Base Imp.: '
						lon = lin.length
						linea = linea + PreparaLinea(lin, lon, 'Left');
						lin = utils.numberFormat(BI2,'###,###,##0.00') + '|'
						lon = lin.length
						linea = linea + PreparaLinea(lin, lon, 'Right');
						lin = 'Tipo: '
						lon = lin.length
						linea = linea + PreparaLinea(lin, lon, 'Left');
						lin = utils.numberFormat(P2,'###,###,##0.00') + '|'
						lon = (lin+'%').length
						linea = linea + PreparaLinea(lin, lon, 'Right');
						//lin = 'Cuota: '
						//lon = lin.length
						//linea = linea + PreparaLinea(lin, lon, 'Left');
						lin = utils.numberFormat(CU2,'###,###,##0.00') + '|'
						lon = lin.length
						linea = linea + PreparaLinea(lin, lon, 'Right');
						InsertaLinea(linea,f)
					}
					if(BI3 != null && BI3 != 0)
					{
						lin = '|LINEAIVA|'
						lon = lin.length
						linea = PreparaLinea(lin, lon, 'Left');
						lin = 'Base Imp.:'
						lon = lin.length
						linea = linea + PreparaLinea(lin, lon, 'Left');
						lin = utils.numberFormat(BI3,'###,###,##0.00') + '|'
						lon = lin.length
						linea = linea + PreparaLinea(lin, lon, 'Right');
						lin = 'Tipo: '
						lon = lin.length
						linea = linea + PreparaLinea(lin, lon, 'Left');
						lin = utils.numberFormat(P3,'###,###,##0.00') + '|'
						lon = (lin+'%').length
						linea = linea + PreparaLinea(lin, lon, 'Right');
						//lin = 'Cuota: '
						//lon = lin.length
						//linea = linea + PreparaLinea(lin, lon, 'Left');
						lin = utils.numberFormat(CU3,'###,###,##0.00') + '|'
						lon = lin.length
						linea = linea + PreparaLinea(lin, lon, 'Right');
						InsertaLinea(linea,f)
					}
				}
			}
			query = "SELECT ISNULL(SUM(ImporteDebe),0), ISNULL(SUM(ImporteHaber),0) "+
					"FROM [dbo].[cAsientoContableLinea] "+
					"WHERE [IdEjercicio] = '"+globals.Empresa+"' AND IdAsiento = "+ Asiento;
			dataset2 = databaseManager.getDataSetByQuery(ds[1], query, null, 1)
			var ID = dataset2.getValue(1,1);
			ID = utils.numberFormat(ID,'###,###,##0.00')
			var IH = dataset2.getValue(1,2);
			IH = utils.numberFormat(IH,'###,###,##0.00')
			
			lin = '|TOTALES|TOTAL ASIENTO...     |'
			linea = PreparaLinea(lin, 31, 'Left');
			lin= ID + '|'
			linea = linea + PreparaLinea(lin, 15, 'Right');
			lin= IH + '|'
			linea = linea + PreparaLinea(lin, 15, 'Right');
			InsertaLinea(linea,f)
		}
		
		query = "SELECT ISNULL(SUM(ImporteDebe),0), ISNULL(SUM(ImporteHaber),0) "+
		"FROM [dbo].[cAsientoContableLinea] "+
		"WHERE [IdEjercicio] = '"+globals.Empresa+"' AND ([IdAsiento] BETWEEN "+
		desasi + " AND "+ hasasi+ 
		") AND ([FechaAsiento] BETWEEN '"+ desfech + "' AND '"+ hasfech+ 
		"') AND ([Situacion] = "+ Situacion + ") ";
		dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 1)
		var ITD = dataset.getValue(1,1);
		ITD = utils.numberFormat(ITD,'###,###,##0.00')
		var ITH = dataset.getValue(1,2);
		ITH = utils.numberFormat(ITH,'###,###,##0.00')
		
		lin = '|TOTALES|{c=2}TOTAL DIARIO...     |'
		linea = PreparaLinea(lin, 36, 'Left');
		lin= ITD + '|'
		linea = linea + PreparaLinea(lin, 15, 'Right');
		lin= ITH + '|'
		linea = linea + PreparaLinea(lin, 15, 'Right');
		InsertaLinea(linea,f)
		
		var fcopy = plugins.file.createFile("c:/temp/RPVDATDI.RPx");
        if (!fcopy.createNewFile())
        {
        	fcopy.deleteFile()
			fcopy = plugins.file.createFile("c:/temp/RPVDATDI.RPx");
        }
        plugins.file.copyFile(f, fcopy)
		
		if(globals.DetallarIva == 0)
		{
			plugins.file.copyFile("C:/Servoy/Reportes/cagwe501d.RPV", "C:/temp/cagwe501d.RPV");
		}
		else if(globals.DetallarIva == 1)
		{
			plugins.file.copyFile("C:/Servoy/Reportes/cagwe501d.RPV", "C:/temp/cagwe501d.RPV");
		}
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			if(utils.stringMiddle(application.getOSName(),1,7) == "Windows")
			{
				// Open a file with the default application associated with it. (on Windows)
			    application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", "C:/temp/RPVDATDI.RPx"]);
			} 
			else
			{
				if (utils.stringLeftWords(application.getOSName(), 1) == "Mac")
				{
					application.executeProgram('open', "C:/temp/RPVDATDI.RPx");
				}
			}
			
		}
		else			
		{
			application.showURL('viewrpvreport:c:\\\\temp\\\\RPVDATDI.RPx');	
			
			
			

			
			
			
			
		}*/
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Modificacion de Datos';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF;
				var nom = 'Modificacion de Datos';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 * 
 * TODO generated, please specify type and doc for the params
 * @param {Number} ELE
 * @param {Date} FECH
 * @param {Number} ORD
 *
 * @properties={typeid:24,uuid:"F23CB1A3-8B34-4BFC-99C0-EB677ADE4C08"}
 */
function btn_runJasperReportInventario(ELE,FECH,ORD) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(ELE == 0)
		{
			var reportName = 'InventarioGC.jrxml';
		}
		else
		{
			reportName = 'InventarioMGC.jrxml';
		}
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		/*if(globals.DesdeArticulo != null)
		{
			params.put('DesdeArticulo', globals.DesdeArticulo)
		}
		else
		{
			params.put('DesdeArticulo', 1)
		}
		if(globals.HastaArticulo != null)
		{
			params.put('HastaArticulo', globals.HastaArticulo)
		}
		else
		{
			params.put('HastaArticulo', "zzzzzzz")
		}*/
		
		
		
		if(FECH != null)
		{
			var fech = utils.dateFormat(FECH,'dd-MM-yyyy')+' 23:59:59'
			params.put('Fecha', fech)
		}
		else
		{
			fech = fech = utils.dateFormat(new Date(),'dd-MM-yyyy')+' 23:59:59'
			params.put('Fecha', fech)
		} 
		if(globals.GCCriterios == 0)
		{
			params.put('Orden', 'articulos.codigo')
		}
		else if(globals.GCCriterios == 1)
		{
			params.put('Orden', 'articulos.descripcion')
		}
		
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Inventario de Stock';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
				var exportTo = 'pdf';//
				var nom = 'Inventario de Stock';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @param {String} CRI
 * @param {String} DART
 * @param {String} HART
 * @param {Date} DFECH
 * @param {Date} HFECH
 * 
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"E922AC21-2851-40DE-A5A0-202A18ED2412"}
 */
function btn_runJasperReportExtractoMovAlmacen(CRI,DART,HART,DFECH,HFECH) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'ExtractoMovAlmacenGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		if(DART != null)
		{
			params.put('DesdeArticulo', DART)
		}
		else
		{
			params.put('DesdeArticulo', '')
		}
		if(HART != null)
		{
			params.put('HastaArticulo', HART)
		}
		else
		{
			params.put('HastaArticulo', "ZZZZZZZ")
		}
		
		
		
		if(DFECH != null)
		{
			var fech = utils.dateFormat(DFECH,'dd-MM-yyyy')
			params.put('DesdeFecha', fech)
		}
		else
		{
			var desfechAlb= '01-01-1900'
			
			params.put('DesdeFecha', desfechAlb)
		}
		if(globals.HastaFecha != null)
		{
			fech = utils.dateFormat(DFECH,'dd-MM-yyyy')+' 23:59:59'			
			params.put('HastaFecha', fech)
		}
		else
		{
			
			fech = utils.dateFormat(new Date(),'dd-MM-yyyy')+' 23:59:59'		
			params.put('HastaFecha', fech)
		}
		
		if(globals.GCCriterios == '0')
		{
			var Tip = "'E','S','I'"		
			params.put('Tipo', Tip)
		}
		else if(globals.GCCriterios == 1)
		{
			Tip = "'E'"
			params.put('Tipo', Tip)
		}
		else if(globals.GCCriterios == 2)
		{
			Tip = "'S'"
			params.put('Tipo', Tipo)
		}
		else if(globals.GCCriterios == 3)
		{
			Tip = "'I'"
			params.put('Tipo', Tipo)
		}
		else 
		{
			Tipo = "'E','S','I'"	
			params.put('Tipo', Tipo)
		}
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Extracto Movimientos de Almacen';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Extracto Movimientos de Almacen';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"8FDB6959-88A8-401D-9A53-2CF73311B946"}
 */
function btn_runJasperReportConsultaBancosCuentasCargoGC() {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		var reportName = 'Consulta_BancosCuentasCargoGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		//params.put('IdEjercicio', globals.Empresa)
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Listado Bancos y sus Cuentas de Cargo';
			//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Listado Bancos y sus Cuentas de Cargo';
				nom = GCQuitarCaracteresEspeciales(nom)
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"4A0C56F5-2F32-4266-AD05-46D95ADFC3AD"}
 */
function GCbtn_runJasperReportConsultaCobrosPagosPendientes() {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		if(!forms.dlg_ConsultaCobrosPagosPendientesGC.agrupar &&
		!forms.dlg_ConsultaCobrosPagosPendientesGC.agrupar2) var reportName = 'Informe_CobrosPagosGC.jrxml';
		else if(forms.dlg_ConsultaCobrosPagosPendientesGC.agrupar2) reportName = 'Informe_CobrosPagos3GC.jrxml';
		else reportName = 'Informe_CobrosPagos2GC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		if(forms.dlg_ConsultaCobrosPagosPendientesGC.DesdeCuenta != null)
		{
			params.put('DesdeCuenta', forms.dlg_ConsultaCobrosPagosPendientesGC.DesdeCuenta)
		}
		else
		{
			params.put('DesdeCuenta', '1')
		}
		if(forms.dlg_ConsultaCobrosPagosPendientesGC.HastaCuenta != null)
		{
			params.put('HastaCuenta', forms.dlg_ConsultaCobrosPagosPendientesGC.HastaCuenta)
		}
		else
		{
			params.put('HastaCuenta', '99999999')
		}	
		if(forms.dlg_ConsultaCobrosPagosPendientesGC.DesdeFecha != null)
		{
			var dia = forms.dlg_ConsultaCobrosPagosPendientesGC.DesdeFecha.getDate()
			var mes = forms.dlg_ConsultaCobrosPagosPendientesGC.DesdeFecha.getMonth()+1
			var agno = forms.dlg_ConsultaCobrosPagosPendientesGC.DesdeFecha.getFullYear()
			var fech = dia+'-'+mes+'-'+agno+' 00:00:00'
			params.put('DesdeFecha', fech)
		}
		else
		{
			var desfech = '01-01-1900'
			
			params.put('DesdeFecha', desfech)
		}
		if(forms.dlg_ConsultaCobrosPagosPendientesGC.HastaFecha != null)
		{
			dia = forms.dlg_ConsultaCobrosPagosPendientesGC.HastaFecha.getDate()
			mes = forms.dlg_ConsultaCobrosPagosPendientesGC.HastaFecha.getMonth()+1
			agno = forms.dlg_ConsultaCobrosPagosPendientesGC.HastaFecha.getFullYear()
			fech = dia+'-'+mes+'-'+ agno +' 23:59:59'		
			params.put('HastaFecha', fech)
		}
		else
		{
			fech = '31-12-2999'
			params.put('HastaFecha', fech)
		}
		
		if(forms.dlg_ConsultaCobrosPagosPendientesGC.DesdeImporte != null)
		{
			params.put('DesdeImporte',forms.dlg_ConsultaCobrosPagosPendientesGC.DesdeImporte )
		}
		else
		{
			params.put('DesdeImporte', -9999999)
		}
		if(forms.dlg_ConsultaCobrosPagosPendientesGC.HastaImporte != null)
		{
			params.put('HastaImporte',forms.dlg_ConsultaCobrosPagosPendientesGC.HastaImporte )
		}
		else
		{
			params.put('HastaImporte', 9999999999)
		}
		
		if(forms.dlg_ConsultaCobrosPagosPendientesGC.DesdeFP != null)
		{
			params.put('DesdeFP',forms.dlg_ConsultaCobrosPagosPendientesGC.DesdeFP )
		}
		else
		{
			params.put('DesdeFP', '')
		}
		if(forms.dlg_ConsultaCobrosPagosPendientesGC.HastaFP != null)
		{
			params.put('HastaFP',forms.dlg_ConsultaCobrosPagosPendientesGC.HastaFP )
		}
		else
		{
			params.put('HastaFP', 'ZZ')
		}
		
		
		if(globals.GCCriterios == 0)
		{
			var Orden = 'cCobrosPagos.FechaVencimiento, cCobrosPagos.fechafactura'
			params.put('Orden', Orden)
		}
		else if(globals.GCCriterios == 1)
		{
			Orden = 'cCobrosPagos.CuentaContable, cCobrosPagos.FechaVencimiento, cCobrosPagos.fechafactura'
			params.put('Orden', Orden)
		}
		else if(globals.GCCriterios == 2)
		{
			Orden = 'cCobrosPagos.CuentaContable, cCobrosPagos.IdFactura, cCobrosPagos.FechaVencimiento, cCobrosPagos.fechafactura'
			params.put('Orden', Orden)
		}
		else if(globals.GCCriterios == 3)
		{
			Orden = 'cCobrosPagos.ImporteVencimiento DESC, cCobrosPagos.FechaVencimiento ASC, cCobrosPagos.fechafactura ASC'
			params.put('Orden', Orden)
		}
		else if(globals.GCCriterios == 4)
		{
			Orden = 'cCobrosPagos.IdFactura ASC, cCobrosPagos.FechaVencimiento asc, cCobrosPagos.fechafacturaasc'
			params.put('Orden', Orden)
		}
		
		if(forms.dlg_ConsultaCobrosPagosPendientesGC.CriterioCobroPago == 1)
		{
			var Titulo = 'COBROS PENDIENTES'
			params.put('CobroPago', forms.dlg_ConsultaCobrosPagosPendientesGC.CriterioCobroPago)	
			params.put('Titulo', Titulo)
		}
		else if(forms.dlg_ConsultaCobrosPagosPendientesGC.CriterioCobroPago == 2)
		{
			Titulo = 'PAGOS PENDIENTES'
			params.put('CobroPago', forms.dlg_ConsultaCobrosPagosPendientesGC.CriterioCobroPago)	
			params.put('Titulo', Titulo)
		}
		
		if(forms.dlg_ConsultaCobrosPagosPendientesGC.SituacionCobroPago == '1')
		{
			var Situ = 'IS NULL';
			params.put('Situacion', Situ)
		}
		else if(forms.dlg_ConsultaCobrosPagosPendientesGC.SituacionCobroPago == '2')
		{
			Situ = "IS NULL OR cCobrosPagos.Situacion = 'R'";
			params.put('Situacion', Situ)
		}
		else if(forms.dlg_ConsultaCobrosPagosPendientesGC.SituacionCobroPago == 'S')
		{
			Situ = "= 'S'";
			params.put('Situacion', Situ)
		}
		else if(forms.dlg_ConsultaCobrosPagosPendientesGC.SituacionCobroPago == 'R')
		{
			Situ = "= 'R'";
			params.put('Situacion', Situ)
		}
		else if(forms.dlg_ConsultaCobrosPagosPendientesGC.SituacionCobroPago == 'C')
		{
			Situ = "= 'C'";
			params.put('Situacion', Situ)
		}
		else if(forms.dlg_ConsultaCobrosPagosPendientesGC.SituacionCobroPago == 'A')
		{
			Situ = "= 'A'";
			params.put('Situacion', Situ)
		}
		else if(forms.dlg_ConsultaCobrosPagosPendientesGC.SituacionCobroPago == 'D')
		{
			Situ = "= 'D'";
			params.put('Situacion', Situ)
		}
		else if(forms.dlg_ConsultaCobrosPagosPendientesGC.SituacionCobroPago == 'a')
		{
			Situ = "= 'a'";
			params.put('Situacion', Situ)
		}
		else if(forms.dlg_ConsultaCobrosPagosPendientesGC.SituacionCobroPago == 'N')
		{
			Situ = "= 'N'";
			params.put('Situacion', Situ)
		}
		else if(forms.dlg_ConsultaCobrosPagosPendientesGC.SituacionCobroPago == 'T')
		{
			Situ = "IS NULL OR cCobrosPagos.Situacion = 'S' OR cCobrosPagos.Situacion = 'R' "+
					"OR cCobrosPagos.Situacion = 'C' OR cCobrosPagos.Situacion = 'A' OR cCobrosPagos.Situacion = 'D' "+
					"OR cCobrosPagos.Situacion = 'a' OR cCobrosPagos.Situacion = 'N'";
			params.put('Situacion', Situ)
		}
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Informe Cobros Pagos Pendientes';
			//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Informe Cobros Pagos Pendientes';
				nom = GCQuitarCaracteresEspeciales(nom)
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
  *
 *
 *
 * @properties={typeid:24,uuid:"83F2348E-91AF-4E8F-A149-E8CA7903FB33"}
 */
function btn_runJasperReportControlAccesoGC() {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(!server_name)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())
			
		}
		//server_name = globals.conex
			
		var reportName = 'ControlAccesoGC.jrxml';
		
		var params = new java.util.HashMap()
		params.put('Usuario',globals.GCNombreUsuario)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			//if(application.getApplicationType() != 5)
		{
			var name = 'Control Acceso';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF;
				var nom = 'Control Acceso';
				//nom = QuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @param {String} CRI
 * @param {String} DART
 * @param {String} HART
 * @param {Date} DFECH
 * @param {Date} HFECH
 * 
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 * @properties={typeid:24,uuid:"6C35F03E-7C07-4119-9806-D0B3B0E7B2F9"}
 */
function btn_runJasperReportDiarioMovAlmacen(CRI,DART,HART,DFECH,HFECH) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'DiarioMovAlmacenGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		if(DART != null)
		{
			params.put('DesdeArticulo', DART)
		}
		else
		{
			params.put('DesdeArticulo', '')
		}
		if(HART != null)
		{
			params.put('HastaArticulo', HART)
		}
		else
		{
			params.put('HastaArticulo', "ZZZZZZZ")
		}
		
		
		
		if(DFECH != null)
		{
			var fech = utils.dateFormat(DFECH,'dd-MM-yyyy')
			params.put('DesdeFecha', fech)
		}
		else
		{
			var desfechAlb= '01-01-1900'
			
			params.put('DesdeFecha', desfechAlb)
		}
		if(globals.HastaFecha != null)
		{
			fech = utils.dateFormat(DFECH,'dd-MM-yyyy')+' 23:59:59'			
			params.put('HastaFecha', fech)
		}
		else
		{
			
			fech = utils.dateFormat(new Date(),'dd-MM-yyyy')+' 23:59:59'		
			params.put('HastaFecha', fech)
		}
		
		if(CRI == '0')
		{
			var Tip = "'E' or moviarti.tipo_ms = 'S' or moviarti.tipo_ms = 'I'";		
			params.put('Tipo', Tip)
		}
		else if(CRI == 'E')
		{
			params.put('Tipo', "'E'")
		}
		else if(CRI == 'S')
		{
			
			params.put('Tipo', "'S'")
		}
		else if(CRI == 'I')
		{
			params.put('Tipo', "'I'")
		}
		else 
		{
			Tip = "'E' or moviarti.tipo_ms = 'S' or moviarti.tipo_ms = 'I'";	
			params.put('Tipo', Tip)
		}
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Diario Movimientos de Almacen';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Diario Movimientos de Almacen';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"08638E1B-F366-4D83-9C90-9436B69D5C8E"}
 */
function btn_runJasperReportConsultaCobrosPagosSeleccionGC() {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		var reportName = 'Informe_CobrosPagos_SeleccionGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('Usuario', globals.GClogin_usuario)
		
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Informe Cobros Pagos Seleccionados';
			//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Informe Cobros Pagos Seleccionados';
				nom = GCQuitarCaracteresEspeciales(nom)
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Number} DNPEDCOM
 *
 * @param {Number} HNPEDCOM
 * 
 * @param {Number} DPROV
 *
 * @param {Number} HPROV
 * 
 *
 *
 *
 * @properties={typeid:24,uuid:"A276E8FB-73D3-45DB-98BB-23AE3CA73365"}
 */
function btn_runJasperReportPedidoCompra(DNPEDCOM,HNPEDCOM,DPROV,HPROV) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())
			
		}
		server_name = globals.GCconex
			
		var reportName = /*'cagwe501d.RPV'*/'PedidoCompraGC.jrxml';
		
		var params = new java.util.HashMap()
		params.put('DesdeNPedido', DNPEDCOM)
		params.put('HastaNPedido', HNPEDCOM)
		params.put('DesdeProveedor', DPROV)
		params.put('HastaProveedor', HPROV)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Pedido Compras';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Pedido Compras';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {String} DFECH
 *
 * @param {String} HFECH
 * 
 *
 * @properties={typeid:24,uuid:"A7A3438B-E7F8-442F-BB23-88C293532CF4"}
 */
function btn_runJasperConsultaCalendarioUsuarioGC(DFECH,HFECH) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())
			
		}
		server_name = globals.GCconex
			
		var reportName = 'Consulta_CalendarioGC.jrxml';
		
		var params = new java.util.HashMap()
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		params.put('IdUsuario', globals.GClogin_usuario)
		params.put('NombreUsuario', globals.GCNombreUsuario)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Calendario';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Calendario';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 *
 *
 * @properties={typeid:24,uuid:"CEA63D7B-FE8B-4A58-AFF4-DD4D723BDBF5"}
 */
function btn_runJasperReportNotasPendCobro() {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
			
		var reportName = 'InformeNotasPendCobroGC.jrxml';
		
		var params = new java.util.HashMap()
		
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'InformeNotasPendCobro';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'InformeNotasPendCobro';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @param {Number} YEAR
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"EB58D167-D939-4D88-B490-64DED39B3EC4"}
 */
function btn_runJasperReportVentasClientesGC(YEAR) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		var reportName = 'Ventas_a_ClientesGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('Agno',YEAR)
		
		
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Ventas a Clientes '+YEAR;
			//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Ventas a Clientes '+YEAR;
				nom = GCQuitarCaracteresEspeciales(nom)
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Number} DEJER
 *
 * @param {Number} DNUP
 * 
 * @param {Number} HEJER
 *
 * @param {Number} HNUP
 * 
 * @param {Number} DCLI
 * 
 * @param {Number} HCLI
 *
 *
 *
 * @properties={typeid:24,uuid:"B5E87DC7-566B-4C65-B1CA-9159C39094B3"}
 */
function btn_runJasperReportNotaVentas(DEJER,DNUP,HEJER,HNUP,DCLI,HCLI) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())
			
		}
		server_name = globals.GCconex
			
		var reportName = 'NotaVentaGC.jrxml';
		
		var params = new java.util.HashMap()
		params.put('DesdeEjer', DEJER)
		params.put('DesdeNFact', DNUP)
		params.put('HastaEjer', HEJER)
		params.put('HastaNFact', HNUP)
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Nota Ventas';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Nota Ventas';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 *
 * @param {String} DDCLI
 * 
 * @param {String} HDCLI
 *
 * @param {Number} ORD
 *
 * @param {Number} TIPO
 *
 * @param {String} DPROV
 * 
 * @param {String} HPROV
 *
 *
 *
 * @properties={typeid:24,uuid:"D67A4B08-5035-45B8-A7A6-162C40D2E032"}
 */
function btn_runJasperReportListadoClientes(DCLI,HCLI,DDCLI,HDCLI,ORD,TIPO,DPROV,HPROV) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		if(TIPO == 0) var reportName = 'Consulta_ClientesGC.jrxml';
		else reportName = 'Consulta_ClientesFichaGC.jrxml';
		
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeDescCliente', DDCLI)
		params.put('HastaDescCliente', HDCLI)
		params.put('DesdeProvincia', DPROV)
		params.put('HastaProvincia', HPROV)
		if(TIPO == 0)
		{ 
			if(ORD == 0) var ord = 'clientes.IdCliente';
			else ord = 'clientes.DescCliente';
		}
		else
		{
			if(ORD == 0) ord = 'clientes.IdCliente,tbFacturaCabecera.eje_cfa,tbFacturaCabecera.nup_cfa,tbFacturaCabecera.ser_cfa';
			else ord = 'clientes.DescCliente,tbFacturaCabecera.eje_cfa, tbFacturaCabecera.nup_cfa,tbFacturaCabecera.ser_cfa';
		}
		params.put('Orden', ord)
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			if(TIPO == 0) var name = 'Listado de Clientes';
			else name = 'Ficha de Clientes';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				if(TIPO == 0) var nom = 'Listado de Clientes';
				else nom = 'Ficha de Clientes';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {String} DCLI
 *
 * @param {String} HCLI
 *
 * @param {String} DDCLI
 * 
 * @param {String} HDCLI
 *
 * @param {Number} ORD
 *
 * @param {Number} TIPO
 *
 *
 * @properties={typeid:24,uuid:"A9EB2D6A-3A7E-4C1A-AA9E-42B25ED20C2F"}
 */
function btn_runJasperReportListadoComisionistas(DCLI,HCLI,DDCLI,HDCLI,ORD,TIPO) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		if(TIPO == 0) var reportName = 'Consulta_ComisionistasGC.jrxml';
		else reportName = 'Consulta_ComisionistasFichaGC.jrxml';
		
		var params = new java.util.HashMap()
		params.put('DesdeAgente', DCLI)
		params.put('HastaAgente', HCLI)
		params.put('DesdeDescAgente', DDCLI)
		params.put('HastaDescAgente', HDCLI)
		if(TIPO == 0)
		{ 
			if(ORD == 0) var ord = 'agentes.idagente';
			else ord = 'agentes.descagente';
		}
		else
		{
			if(ORD == 0) ord = 'agentes.idagente,tbfacturacomision.eje_cfa,tbfacturacomision.nup_cfa,tbfacturacomision.ser_cfa';
			else ord = 'agentes.descagente,tbfacturacomision.eje_cfa, tbfacturacomision.nup_cfa,tbfacturacomision.ser_cfa';
		}
		params.put('Orden', ord)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			if(TIPO == 0) var name = 'Listado de Comisionistas';
			else name = 'Ficha de Comisionistas';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				if(TIPO == 0) name = 'Listado de Comisionistas';
				else name = 'Ficha de Comisionistas';
				var nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"E56331B6-9CBE-4C83-A066-C3124BD0E0A8"}
 */
function btn_runJasperReportListadoDelegaciones() {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())
			
		}
		server_name = globals.GCconex
		var reportName = 'Consulta_DelegacionesGC.jrxml';
		
		var params = new java.util.HashMap()
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Listado de Delegaciones';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Listado de Delegaciones';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"252B5010-D36E-400D-AF59-08471DA3FFE7"}
 */
function btn_runJasperReportListadoTransportistas() {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())
			
		}
		server_name = globals.GCconex
		var reportName = 'Consulta_TransportistasGC.jrxml';
		
		var params = new java.util.HashMap()
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Listado de Transportistas';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Listado de Transportistas';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {String} DFAM
 *
 * @param {String} HFAM
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"5D461FB4-9F22-4763-8F19-4608B7B4196A"}
 */
function btn_runJasperReportListadoFamilias(DFAM,HFAM) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		var reportName = 'Consulta_FamiliasGC.jrxml';
		
		var params = new java.util.HashMap()
		params.put('DesdeFamilia', DFAM)
		params.put('HastaFamilia', HFAM)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Listado de Familias';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Listado de Familias';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Number} DOBS
 *
 * @param {Number} HOBS
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"5A40B1FF-7F26-4046-89D5-15F6096F0267"}
 */
function btn_runJasperReportListadoObservacion(DOBS,HOBS) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		var reportName = 'Consulta_ObservacionesGC.jrxml';
		
		var params = new java.util.HashMap()
		params.put('DesdeObservacion', DOBS)
		params.put('HastaObservacion', HOBS)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Listado de Observaciones';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Listado de Observaciones';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"51EED42E-0E99-4EB3-BCF0-BB9D2299A0B3"}
 */
function btn_runJasperReportListadoFP() {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		var reportName = 'Consulta_FormasPagoGC.jrxml';
		
		var params = new java.util.HashMap()
		//params.put('DesdeFamilia', DFAM)
		//params.put('HastaFamilia', HFAM)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Listado de Formas Pago';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Listado de Formas Pago';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"B2234A6C-9338-4567-9FCE-9968DFFA02B1"}
 */
function btn_runJasperReportListadoOperario() {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		var reportName = 'Consulta_OperariosGC.jrxml';
		
		var params = new java.util.HashMap()
		//params.put('DesdeFamilia', DFAM)
		//params.put('HastaFamilia', HFAM)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Listado de Operarios';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Listado de Operarios';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {String} DART
 *
 * @param {String} HART
 *
 * @param {String} DDART
 * 
 * @param {String} HDART
 *
 * @param {Number} ORD
 *
 * @param {Number} FOT
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"F01B67FD-F992-4B6A-9060-1EEAACE6771F"}
 */
function btn_runJasperReportListadoArticulos(DART,HART,DDART,HDART,ORD,FOT) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())
			
		}
		server_name = globals.GCconex
		if(!FOT) var reportName = 'Consulta_ArticulosGC.jrxml';
		else reportName = 'Consulta_Articulos2GC.jrxml';
		
		var params = new java.util.HashMap()
		params.put('DesdeArticulo', DART)
		params.put('HastaArticulo', HART)
		params.put('DesdeDescArticulo', DDART)
		params.put('HastaDescArticulo', HDART)
		if(ORD == 0) var ord = 'articulos.Codigo';
		else ord = 'articulos.Descripcion';
		
		params.put('Orden', ord)
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Listado de Articulos';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Listado de Articulos';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {String} DART
 *
 * @param {String} HART
 *
 * @param {String} DDART
 * 
 * @param {String} HDART
 *
 * @param {Number} ORD
 *
 * @param {Number} FOT
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"4EB25249-BD7F-4FAE-81F4-BE7D0C1831DD"}
 */
function btn_runJasperReportListadoMateriales(DART,HART,DDART,HDART,ORD,FOT) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex
		/*if(!FOT)*/
		var reportName = 'Consulta_MaterialesGC.jrxml';
		//else reportName = 'Consulta_Articulos2GC.jrxml';
		
		var params = new java.util.HashMap()
		params.put('DesdeArticulo', DART)
		params.put('HastaArticulo', HART)
		params.put('DesdeDescArticulo', DDART)
		params.put('HastaDescArticulo', HDART)
		if(ORD == 0) var ord = 'articulos.Codigo';
		else ord = 'articulos.Descripcion';
		
		params.put('Orden', ord)
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Listado de Materiales';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Listado de Materiales';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Number} DPROV
 *
 * @param {Number} HPROV
 *
 * @param {String} DDPROV
 * 
 * @param {String} HDPROV
 *
 * @param {String} DPROVIN
 * 
 * @param {String} HPROVIN
 *
 * @param {Number} ORD
 *
 * @param {Number} TIPO
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"621B3699-8DA4-47FD-8B24-DBD1C95C8A61"}
 */
function btn_runJasperReportListadoProveedores(DPROV,HPROV,DDPROV,HDPROV,ORD,TIPO,DPROVIN,HPROVIN) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())
			
		}
		server_name = globals.GCconex
		
		if(TIPO == 0) var reportName = 'Consulta_ProveedoresGC.jrxml';
		else reportName = 'Consulta_ProveedoresFichaGC.jrxml';
		
		
		var params = new java.util.HashMap()
		params.put('DesdeProveedor', DPROV)
		params.put('HastaProveedor', HPROV)
		params.put('DesdeDescProveedor', DDPROV)
		params.put('HastaDescProveedor', HDPROV)
		params.put('DesdeProvincia', DPROVIN)
		params.put('HastaProvincia', HPROVIN)
		if(TIPO == 0)
		{ 
			if(ORD == 0) var ord = 'tbMaestroProveedores.Codpro';
			else ord = 'tbMaestroProveedores.DescProveedor';
		}
		else
		{
			if(ORD == 0) ord = 'proveedores_codpro,tbFacturaCompraCabecera.nup_cfca';
			else ord = 'proveedores_DescProveedor,tbFacturaCompraCabecera.nup_cfca';
		}
		params.put('Orden', ord)
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			if(TIPO == 0) var name = 'Listado de Proveedores';
			else name = 'Ficha de Proveedores';
						
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				if(TIPO == 0) var nom = 'Listado de Proveedores';
				else nom = 'Ficha de Proveedores';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Number} DNUP
 * 
 * @param {Number} HNUP
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 *
 * @param {Number} SV
 *
 *
 * @properties={typeid:24,uuid:"63D93313-CF83-4E5E-B327-8AAFE3DBA1AF"}
 */
function btn_runJasperReportAlbaranVentas(DNUP,HNUP,DCLI,HCLI,SV) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())
			
		}
		server_name = globals.GCconex
			
		if(forms.dlg_ImpresionAlbaranesGC.FormatoAlbaran == 1)
		{
			if(SV == 1)	var reportName = 'AlbaranVentaSinGC.jrxml';
			else reportName = 'AlbaranVentaGC.jrxml';
		}
		else if(forms.dlg_ImpresionAlbaranesGC.FormatoAlbaran2 == 1)
		{
			if(SV == 1)	reportName = 'AlbaranVenta2SinGC.jrxml';
			else reportName = 'AlbaranVenta2GC.jrxml';
		}
		
		var params = new java.util.HashMap()
		params.put('DesdeNAlbaran', DNUP)
		params.put('HastaNAlbaran', HNUP)
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Albaran Ventas';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Albaran Ventas';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Number} DOFERT
 * 
 * @param {Number} HOFERT
 * 
 *
 *
 *
 * @properties={typeid:24,uuid:"1078B0F3-5906-4335-9445-15B7108BDF4C"}
 */
function btn_runJasperReportPeticionOfertas(DOFERT,HOFERT) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())
			
		}
		server_name = globals.GCconex;
			
		var reportName = 'PeticionOfertaCompraGC.jrxml';
		
		var params = new java.util.HashMap()
		params.put('DesdePeticion', DOFERT)
		params.put('HastaPeticion', HOFERT)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Peticion Oferta';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Peticion Oferta';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Number} DNUP
 * 
 * @param {Number} HNUP
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 *
 *
 *
 * @properties={typeid:24,uuid:"B7614AA8-DAEF-4788-9335-B48741B73667"}
 */
function btn_runJasperReportPresupuestoVentas(DNUP,HNUP,DCLI,HCLI) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())
			
		}
		server_name = globals.GCconex
		
		if(server_name == 'conexiongestionsectorvertical') var reportName = 'PresupuestoSVGC.jrxml';
		else reportName = 'PresupuestoGC.jrxml';
		
		var params = new java.util.HashMap()
		params.put('DesdePresupuesto', DNUP)
		params.put('HastaPresupuesto', HNUP)
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Presupuesto';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Presupuesto';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)
					
				}
			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @SuppressWarnings(hides)
 * @SuppressWarnings(unused)
 * 
 * @param {Number} DNUP
 * 
 * @param {Number} HNUP
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 *
 * @param {String} DFECH
 *
 * @param {String} HFECH
 *
 * @param {Number} CRIT
 *
 *
 *
 * @properties={typeid:24,uuid:"1BBEA5D8-FD55-496F-8926-851FBBAAF582"}
 */
function btn_runJasperReportConsultaAlbaranesPendientesFacturar(DNUP,HNUP,DCLI,HCLI,DFECH,HFECH,CRIT) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(server_name == null)
		{
			server_name = databaseManager.getDataSourceServerName(forms.FrmLoginGC.controller.getDataSource())
			
		}
		server_name = globals.GCconex
			
		var reportName = 'Consulta_AlbaranesPendientesFacturarGC.jrxml';
		
		var params = new java.util.HashMap()
		params.put('DesdeAlbaran', DNUP)
		params.put('HastaAlbaran', HNUP)
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		if(CRIT == 0)
		{
			var Orden = 'calbaran.cod_cal'			
			params.put('Orden', Orden)
		}
		else if(CRIT == 1)
		{
			Orden = 'calbaran.nomcl_cal'			
			params.put('Orden', Orden)
		}
		else if(CRIT == 2)
		{
			Orden = 'calbaran.rcli_cal'			
			params.put('Orden', Orden)
		}
		else if(CRIT == 3)
		{
			Orden = 'calbaran.fecha_cal'			
			params.put('Orden', Orden)
		}
		
		//JasperReport
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			var name = 'Albaranes Pendientes Facturar';
			
			plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
		}
		else
		{
			
				var exportTo = 'pdf';//
				var nom = 'Albaranes Pendientes Facturar';
				nom = GCQuitarCaracteresEspeciales(nom);
				var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
				//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
				
			    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
			   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
				plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
				
				
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				
				var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				if(success)
				{
					//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
					
					uploadCallbackFunctionGC(tempFile)					
				}			
		}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 * 
 * @param {Number} DALB
 * 
 * @param {Number} HALB
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @param {String} SITUALB
 * 
 * @param {String} DREFCLI
 *
 * @param {String} HREFCLI
 * 
 * @param {String} CRIT
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"587455CD-3908-4103-BBFC-9F89661A7482"}
 */
function btn_runJasperReportConsultaAlbaran(DCLI,HCLI,DALB,HALB,DFECH,HFECH,SITUALB,DREFCLI,HREFCLI,CRIT) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'Consulta_AlbaranesGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeAlbaran', DALB)
		params.put('HastaAlbaran', HALB)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		params.put('Situacion', SITUALB)
		params.put('DesdeRefCliente', DREFCLI)
		params.put('HastaRefCliente', HREFCLI)
		params.put('Orden', CRIT)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Informe Albaranes Clientes';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Informe Albaranes Clientes';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 * 
 * @param {Number} DART
 * 
 * @param {Number} HART
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 * @properties={typeid:24,uuid:"CB8B6C36-4A95-48C6-A271-4A2DBA6BDCBC"}
 */
function btn_runJasperReportConsultaVentasArticulo(DCLI,HCLI,DART,HART,DFECH,HFECH) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'Consulta_VentasArticulosGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeArticulo', DART)
		params.put('HastaArticulo', HART)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Informe Ventas-Artículos';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Informe Ventas-Artículos';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 * 
 * @param {Number} DART
 * 
 * @param {Number} HART
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 * @properties={typeid:24,uuid:"86859F34-AA80-44B9-A8C4-91673D81CCBD"}
 */
function btn_runJasperReportConsultaBeneficiosArticulo(DCLI,HCLI,DART,HART,DFECH,HFECH) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'Consulta_VentasBeneficiosArticulosGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeArticulo', DART)
		params.put('HastaArticulo', HART)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Informe Beneficios-Artículos';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Informe Beneficios-Artículos';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 * 
 * @param {Number} DZON
 * 
 * @param {Number} HZON
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 * @properties={typeid:24,uuid:"F22DACBF-AD5F-463C-BBAE-F91CFA5C0AD1"}
 */
function btn_runJasperReportConsultaVentasZonas(DCLI,HCLI,DZON,HZON,DFECH,HFECH) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'Consulta_VentasZonasGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeProvincia', DZON)
		params.put('HastaProvincia', HZON)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Informe Ventas por Zonas';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Informe Ventas por Zonas';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 * 
 * @param {Number} DART
 * 
 * @param {Number} HART
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 * @properties={typeid:24,uuid:"101076F8-D61E-4667-AA9F-B2B0951790D3"}
 */
function btn_runJasperReportConsultaComprasArticulo(DCLI,HCLI,DART,HART,DFECH,HFECH) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'Consulta_ComprasArticulosGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeArticulo', DART)
		params.put('HastaArticulo', HART)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Informe Compras-Articulos';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Informe Compras-Articulos';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 * 
 * @param {Number} DART
 * 
 * @param {Number} HART
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"3A949DD0-7978-433C-93F6-B82A1250F2C9"}
 */
function btn_runJasperReportConsultaComprasProveedores(DCLI,HCLI,DART,HART,DFECH,HFECH) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'Consulta_ComprasProveedoresGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeArticulo', DART)
		params.put('HastaArticulo', HART)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Informe Compras-Proveedores';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Informe Compras-Proveedores';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 * 
 * @param {Number} DART
 * 
 * @param {Number} HART
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 * @properties={typeid:24,uuid:"B4369FA5-7F1A-46A8-95FE-B61E8730C179"}
 */
function btn_runJasperReportConsultaVentasClientes(DCLI,HCLI,DART,HART,DFECH,HFECH) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'Consulta_VentasClientesGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeArticulo', DART)
		params.put('HastaArticulo', HART)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Informe Ventas-Cliente';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Informe Ventas-Cliente';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 * 
 * @param {Number} DART
 * 
 * @param {Number} HART
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"CF949633-BFD6-4E00-AA73-34EA86587178"}
 */
function btn_runJasperReportConsultaBeneficiosClientes(DCLI,HCLI,DART,HART,DFECH,HFECH) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'Consulta_VentasBeneficiosGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeArticulo', DART)
		params.put('HastaArticulo', HART)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Informe Beneficios-Cliente';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Informe Beneficios-Cliente';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 * 
 * @param {Number} DART
 * 
 * @param {Number} HART
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @param {String} DFAM
 * 
 * @param {String} HFAM
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"39D97BC3-4A1F-4DBC-BCBE-E0C5BA9D7DE9"}
 */
function btn_runJasperReportConsultaVentasFamilias(DCLI,HCLI,DART,HART,DFECH,HFECH,DFAM,HFAM) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'Consulta_VentasFamiliasGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeArticulo', DART)
		params.put('HastaArticulo', HART)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		params.put('DesdeFamilia', DFAM)
		params.put('HastaFamilia', HFAM)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Informe Ventas-Familia';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Informe Ventas-Familia';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 * 
 * @param {Number} DART
 * 
 * @param {Number} HART
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @param {String} DFAM
 * 
 * @param {String} HFAM
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"B16FDC6B-ABB7-4352-9B53-4CF354769904"}
 */
function btn_runJasperReportConsultaBeneficiosFamilias(DCLI,HCLI,DART,HART,DFECH,HFECH,DFAM,HFAM) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'Consulta_BeneficiosFamiliasGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeArticulo', DART)
		params.put('HastaArticulo', HART)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		params.put('DesdeFamilia', DFAM)
		params.put('HastaFamilia', HFAM)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Informe Beneficios-Familia';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Informe Beneficios-Familia';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 * 
 * @param {Number} DART
 * 
 * @param {Number} HART
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @param {String} DFAM
 * 
 * @param {String} HFAM
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"8E9EB18D-7162-4D0C-98DD-2D78CEA7D040"}
 */
function btn_runJasperReportConsultaComprasFamilias(DCLI,HCLI,DART,HART,DFECH,HFECH,DFAM,HFAM) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'Consulta_ComprasFamiliasGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeArticulo', DART)
		params.put('HastaArticulo', HART)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		params.put('DesdeFamilia', DFAM)
		params.put('HastaFamilia', HFAM)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Informe Compras-Familia';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Informe Compras-Familia';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 * 
 * @param {Number} DPRE
 *    
 * @param {Number} HPRE
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @param {String} SITUPRE
 * 
 * @param {String} DREFCLI
 *
 * @param {String} HREFCLI
 * 
 * @param {String} CRIT
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 * @properties={typeid:24,uuid:"2F1C8232-FCBF-4544-B301-600D90E62B34"}
 */
function btn_runJasperReportConsultaPresupuestos(DCLI,HCLI,DPRE,HPRE,DFECH,HFECH,SITUPRE,DREFCLI,HREFCLI,CRIT) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'Consulta_PresupuestosGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeAlbaran', DPRE)
		params.put('HastaAlbaran', HPRE)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		params.put('Situacion', SITUPRE)
		params.put('DesdeRefCliente', DREFCLI)
		params.put('HastaRefCliente', HREFCLI)
		params.put('Orden', CRIT)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Informe Presupuestos Clientes';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Informe Presupuestos Clientes';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DCLI
 *
 * @param {Number} HCLI
 * 
 * @param {Number} DPRE
 *    
 * @param {Number} HPRE
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @param {String} SITUPRE
 * 
 * @param {String} DREFCLI
 *
 * @param {String} HREFCLI
 * 
 * @param {String} CRIT
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 * @properties={typeid:24,uuid:"4C3FF5CF-B2D1-4ED7-9168-5C622BD036B6"}
 */
function btn_runJasperReportConsultaPedidos(DCLI,HCLI,DPRE,HPRE,DFECH,HFECH,SITUPRE,DREFCLI,HREFCLI,CRIT) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		var reportName = 'Consulta_PedidosGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeCliente', DCLI)
		params.put('HastaCliente', HCLI)
		params.put('DesdeAlbaran', DPRE)
		params.put('HastaAlbaran', HPRE)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		params.put('Situacion', SITUPRE)
		params.put('DesdeRefCliente', DREFCLI)
		params.put('HastaRefCliente', HREFCLI)
		params.put('Orden', CRIT)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Informe Pedidos Clientes';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Informe Pedidos Clientes';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DPROV
 *
 * @param {Number} HPROV
 * 
 * @param {String} DFACT
 *    
 * @param {String} HFACT
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @param {Number} SITU
 * 
 * @param {Number} DET
 * 
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 * @properties={typeid:24,uuid:"D36A12F5-325F-4FD4-AE41-5EE007CA862D"}
 */
function btn_runJasperReportConsultaFacturasCompras(DPROV,HPROV,DFACT,HFACT,DFECH,HFECH,SITU,DET) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(DET == 1) var reportName = 'ConsultaFacturasComprasDetalleGC.jrxml';
		else reportName = 'ConsultaFacturasComprasGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeProveedor', DPROV)
		params.put('HastaProveedor', HPROV)
		params.put('DesdeFactura', DFACT)
		params.put('HastaFactura', HFACT)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		if(SITU == null || SITU == '') var situ = "IS NULL OR tbFacturaCompraCabecera.situconta = '' OR tbFacturaCompraCabecera.situconta = 'C'" 
		else situ = "IS NULL OR tbFacturaCompraCabecera.situconta = ''"
		params.put('Situacion', situ)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Facturas de Proveedor';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Facturas de Proveedor';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DPROV
 *
 * @param {Number} HPROV
 * 
 * @param {String} DFACT
 *    
 * @param {String} HFACT
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @param {Number} SITU
 * 
 * @param {Number} DET
 * 
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"029705C4-B307-4924-A379-72F7C9C95B70"}
 */
function btn_runJasperReportConsultaAlbaranesCompras(DPROV,HPROV,DFACT,HFACT,DFECH,HFECH,SITU,DET) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(DET == 1) var reportName = 'ConsultaAlbaranesComprasGC.jrxml';
		else reportName = 'ConsultaAlbaranesComprasGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeProveedor', DPROV)
		params.put('HastaProveedor', HPROV)
		params.put('DesdeFactura', DFACT)
		params.put('HastaFactura', HFACT)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		if(SITU == null || SITU == '') var situ = "IS NULL OR albapro.situ_ap = ''"
		else situ = "IS NULL OR albapro.situ_ap = '' OR albapro.situ_ap = 'F'"
		params.put('Situacion', situ)
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Albaranes de Proveedor';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Albaranes de Proveedor';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * 
 * @param {Number} DPROV
 *
 * @param {Number} HPROV
 * 
 * @param {Number} DFACT
 *    
 * @param {Number} HFACT
 * 
 * @param {String} DFECH
 * 
 * @param {String} HFECH
 * 
 * @param {Number} SITU
 * 
 * @param {Number} DET
 * 
 * 
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"AD563D05-4618-4139-B77C-01FF584A4728"}
 */
function btn_runJasperReportConsultaPedidosCompras(DPROV,HPROV,DFACT,HFACT,DFECH,HFECH,SITU,DET) {
	// TODO Auto-generated method stub
	try
	{
		var server_name = globals.GCconex//databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
		if(DET == 1) var reportName = 'ConsultaPedidosComprasGC.jrxml';
		else reportName = 'ConsultaPedidosComprasGC.jrxml';
		//var exportTo = "pdf";
		//plugins.jasperPluginRMI.runReport(server_name,reportName , 'Presupuesto.'+exportTo , exportTo, argus, null);
		//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		var params = new java.util.HashMap()
		params.put('DesdeProveedor', DPROV)
		params.put('HastaProveedor', HPROV)
		params.put('DesdePedido', DFACT)
		params.put('HastaPedido', HFACT)
		params.put('DesdeFecha', DFECH)
		params.put('HastaFecha', HFECH)
		/*if(SITU == null || SITU == '') var situ = "IS NULL OR albapro.situ_ap = ''"
		else situ = "IS NULL OR albapro.situ_ap = '' OR albapro.situ_ap = 'F'"
		params.put('Situacion', situ)*/
		
		
		if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var name = 'Pedidos a Proveedor';
					//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,name,'view',params)
				}
				else
				{
				
					var exportTo = 'pdf';//
					var nom = 'Pedidos a Proveedor';
					var temp_file = plugins.file.createTempFile(nom,'.'+exportTo);
					//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
					
				    var _attachment = temp_file.getParent() + '\\' + temp_file.getName();
				   //plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
					plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
					
					
					var rawData = plugins.file.readFile(_attachment)
					
					
					
					
					var tempFile = plugins.file.createFile(nom+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
					var success = plugins.file.writeFile(tempFile, rawData);
					if(success)
					{
						//if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) tempFile = signPDF(tempFile)
						
						uploadCallbackFunctionGC(tempFile)
						
					}
				}
	}
	catch (e)
	{
		application.output(e)
	}
}

/**
 * @properties={typeid:24,uuid:"CB86ACA4-211A-4428-94E8-105D8E7CEA29"}
 */
function LoadingGC()
{
	var js = 'function centerElem(elem) {\
	       var parent = window;\
	       elem.css({\
	          "background-color": "transparent",\
	           "position": "absolute",\
	           "top": ((($(parent).height()) / 2) + $(parent).scrollTop() + "px"),\
	           "left": ((($(parent).width()) / 2) + $(parent).scrollLeft() + "px")\
	       });\
	   }\
	   centerElem($("#indicator"));\
	   $("#indicator").html("<img src=\'/images/load.gif\' />");'
	   plugins.WebClientUtils.executeClientSideJS(js)
	
}

/**
 * Load all records into a foundset.
 * 
 * @param _fs {JSFoundset}
 * @return {Boolean} true if did load all records, false otherwise.
 *
 *
 * @properties={typeid:24,uuid:"17390C52-8464-4EB7-A6C8-470555C1251D"}
 */
function reallyLoadAllRecordsGC(_fs) {
    var r = false;

    if (! _fs) return r;
    try {
        r = _fs.loadAllRecords();
        if (r) _fs.getRecord(databaseManager.getFoundSetCount(_fs));
    } catch(e) {application.output(e.message + '\n' + e.stack, LOGGINGLEVEL.ERROR);}

    return r;
}

/**
 * 
 * TODO generated, please specify type and doc for the params
 * @param NALB
 * @return {JSDataSet}
 * @properties={typeid:24,uuid:"0F978141-ED79-4AA9-91F9-460B31C63BBD"}
 */
function SituacionAlbaran(NALB)
{
	var query = "SELECT sifa_lal "+
	  "FROM [dbo].[lalbaran] "+
	  "where nup_lal ="+NALB+
		" order by nli_lal";
	  var dataset = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 9999999999)
	  
	  return dataset
}

/**
 * Tiene que recibir el cif sin espacios ni guiones
 * 
 * TODO generated, please specify type and doc for the params
 * @param cif
 *
 * @return {Boolean}
 * @properties={typeid:24,uuid:"765144CF-F5F5-4F02-8D53-A56D80C0561D"}
 * @SuppressWarnings(wrongparameters)
 */
function validateCIFGC(cif)
{
	//Quitamos el primer caracter y el ultimo digito
	var valueCif= new String()
	valueCif = cif.substr(1,cif.length-2);
 
	var suma=0;
 
	//Sumamos las cifras pares de la cadena
	for(var i=1;i<valueCif.length;i=i+2)
	{
		suma=suma+parseInt(valueCif.substr(i,1));
	}
 
	var suma2=0;
 
	//Sumamos las cifras impares de la cadena
	for(i=0;i<valueCif.length;i=i+2)
	{
		var result=parseInt(valueCif.substr(i,1))*2;
		if(String(result).length==1)
		{
			// Un solo caracter
			suma2=suma2+parseInt(result);
		}else{
			// Dos caracteres. Los sumamos...
			suma2=suma2+parseInt(String(result).substr(0,1))+parseInt(String(result).substr(1,1));
		}
	}
 
	// Sumamos las dos sumas que hemos realizado
	suma=suma+suma2;
 
	var unidad = "";
	//var unidad=String(suma).substr(1,1)
	//unidad=10-parseInt(unidad);
	if(suma > 9){
		unidad=String(suma).substr(1,1); 
	}else{
	unidad=String(suma);
	}
 
	var primerCaracter= new String()
	var lastchar=new String()
	var lastcharchar=lastchar;
	primerCaracter = cif.substr(0,1).toUpperCase();
	lastchar=cif.substr(cif.length-1,1);
	
	if(!isNaN(utils.stringToNumber(lastchar))){
		lastcharchar=String.fromCharCode(64+parseInt(lastchar));
	}
	
	if(primerCaracter.match(/^[FJKNPQRSUVW]$/))
	{
		//Empieza por .... Comparamos la ultima letra
		if(String.fromCharCode(64+unidad).toUpperCase()==lastcharchar)//cif.substr(cif.length-1,1).toUpperCase())
			return true;
	}else if(primerCaracter.match(/^[XYZ]$/)){
		//Se valida como un dni
		var newcif;
		if(primerCaracter=="X")
			newcif=cif.substr(1);
		else if(primerCaracter=="Y")
			newcif="1"+cif.substr(1);
		else if(primerCaracter=="Z")
			newcif="2"+cif.substr(1);
		return validateDNIGC(newcif);
	}else if(primerCaracter.match(/^[ABCDEFGHLM]$/)){
		//Se revisa que el ultimo valor coincida con el calculo
		if(unidad==10)
			unidad=0;
		if(cif.substr(cif.length-1,1)==String(unidad))
			return true;
	}else{
		//Se valida como un dni
		return validateDNIGC(cif);
	}
	return false;
}

/*
 * Tiene que recibir el dni sin espacios ni guiones
 * Esta funcion es llamada
 */

/**
 * TODO generated, please specify type and doc for the params
 * @param dni
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"8315BEB6-7A62-4A8C-A6C3-4E05C4645258"}
 */
function validateDNIGC(dni)
{
	var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
	var valueDni=dni.substr(0,dni.length-1);
	var letra=dni.substr(dni.length-1,1).toUpperCase();
 
	if(lockup.charAt(valueDni % 23)==letra)
		return true;
	return false;
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"2941E5E4-0622-4D1B-BDC5-8FF7E853C377"}
 */
function btn_SalirGC(event){
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(globals.GCisEditing() && forms[frm].btn_cancel()) forms[frm].btn_cancel()
	application.closeAllWindows()
	if(frm == 'FrmLoginGC') 
	{
		//security.logout()
		application.exit();
	}		
	else 
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT)
		{
			//security.logout()
			//application.showURL('http://aplicacioneswebag.agissa.com:8081/servoy-webclient/solutions/solution/GestionComercialAGServ', '_self');  //Web Client only
			//application.exit();
			if(!globals.GCNombreEmpresa) {
				if(gcparametrosaplicacion_to_parametrosaplicacion && gcparametrosaplicacion_to_parametrosaplicacion.empresa) globals.GCNombreEmpresa = gcparametrosaplicacion_to_parametrosaplicacion.empresa;
				else globals.GCNombreEmpresa = 'GestionComercialAGServNG';
			}
			var custom_dlg = scopes.svyCustomDialogs.showQuestionDialog(globals.GCNombreEmpresa,'¿Desea realmente salir de la Aplicación?','Si','No')
			if(custom_dlg == "Si") 
			{
				//application.closeAllWindows();
				//controller.show(null);
				//scopes.svySecurity.logout();
				application.exit();
			}
		}
		else
		{
			application.exit();
		}
			//forms.FrmLogin.controller.show()
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param cf
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"7E10CD30-DDE5-4F70-AAB1-B5314DFADE56"}
 */
function GCcheckCIF(cf)
{
	var i,temp = 0;
	var v1 = new Array(0,2,4,6,8,1,3,5,7,9);
	cf = cf.toUpperCase();
	if (GCcheckNIF(cf)) return true;
	else if (!/^[A-Za-z0-9]{9}$/.test(cf)) return false
	//else if (!/^[ABCDEFGHKLMNPQS]/.test(cf)) return false
	else if (!/^[ABCDEFGHJKLMNPQRS]/.test(cf)) return false
	else
		{
		for(i=2; i<=6; i+=2)
			{
			temp += v1[parseInt(cf.substr(i-1, 1))];
			temp += parseInt(cf.substr(i, 1));
			}
		temp = temp + v1[parseInt(cf.substr(7,1))];
		temp = (10 - ( temp % 10));
		if(temp == 10 && (cf.charAt(cf.length-1) == 'J' || cf.charAt(cf.length-1) == 0)) return true;
		else if (cf.charAt(cf.length-1) == temp || cf.charAt(cf.length-1) == String.fromCharCode(64 + temp)) return true;
		else return false;
		}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 * @param config
 * @return
 * @properties={typeid:24,uuid:"77D80C02-C52E-4827-AB3D-6095A52619B8"}
 */
function checkVatNumber(value, config) {
	  
	  var countryCode = value.slice(0, 2).toUpperCase();
	  var vatnumber = value.slice(2);
	  
	  if (config.countries && config.countries.indexOf(countryCode) === -1) {
	    return false
	  }
	  
	  var vat = {
	    BE: {
	      pattern: /^(BE)(0?\d{9})$/,
	      VATCheckNumber: BEVATcheckNumber
	    }
	  };
	 
	  if (vat[countryCode] && vat[countryCode].pattern.test(value)) {
	      return vat[countryCode].VATCheckNumber(vatnumber);
	  } else {
	      return false;
	  }
	  
	}

/**
 * TODO generated, please specify type and doc for the params
 * @param vatnumber
 * @return 
 * @properties={typeid:24,uuid:"B6298A71-B705-41AE-9B0A-C362A79155AE"}
 */
function BEVATcheckNumber(vatnumber) {
	  
	  // Nine digit numbers have a 0 inserted at the front.
	  vatnumber = (vatnumber.length === 9) ? "0" + vatnumber : vatnumber;

	  if (vatnumber.slice(1,2) === 0) {
	    return false;
	  }
	  
	  // Modulus 97 check on last nine digits
	  if (97 - vatnumber.slice (0,8) % 97 == vatnumber.slice (8,10)) {
	    return true;
	  } else {
	    return false;
	  }
	}

/**
 * TODO generated, please specify type and doc for the params
 * @param nif
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"B300159A-65BA-4103-BC62-940530124236"}
 */
function GCcheckNIF(nif) {
if (!nif) return false;
var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
if (nif.length != 9) return false;
else {
	var letra = new String();
	letra = nif.substr(8, 1); 
	letra = letra.toUpperCase();
	var dni = new String();
	dni = nif.substr(0, 8);
	dni = dni.toUpperCase(); 
	dni = dni.replace('X','0');
	dni = dni.replace('Y','1'); 
	dni = dni.replace('Z','2'); 
	dni -= parseInt(dni/23) * 23;
	//alert (letras.charAt(dni) + " - " + letra);
	if (letras.charAt(utils.stringToNumber(dni)) != letra) return false; 
	else return true;
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param nss
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"6B59C386-BB3A-43C3-B7BA-7C6E5607A0D0"}
 */
function GCcheckNSS(nss) {
	if (!nss) return false;
	if (nss.length != 11 && nss.length != 12) return false;
	if (nss.substr(2, 1) == 0) nss = "" + nss.substr(0, 2) + nss.substr(3, nss.length-1);
	//if (mod(nss.substr(0, nss.length-2), 97) == nss.substr(nss.length-2, 2)) return true;
	if (nss.substr(0, nss.length-2)% 97 == nss.substr(nss.length-2, 2)) return true;
	else return false;
}

/**
 * @param {JSImage} file
 * @return {JSImage}
 * 
 *
 * @properties={typeid:24,uuid:"7DFB6AA4-B3CA-4E53-A645-8C9F67F7D0ED"}
 */
function resizeImageRatio(file) {
	var imageToConvert = plugins.images.getImage(file)
	var maxWidth = 140;
	var maxHeight = 140;
	var ratio = 0;
	var width = imageToConvert.getWidth();
	var height = imageToConvert.getHeight();

	// Check if the current width is larger than the max
	if (width > maxWidth) {
		ratio = maxWidth / width;
		imageToConvert = imageToConvert.resize(maxWidth, (height * ratio));
		height = height * ratio;
		width = width * ratio;
	}

	if (height > maxHeight) {
		ratio = maxHeight / height;
		imageToConvert = imageToConvert.resize( (width * ratio), maxHeight);
		height = height * ratio;
		width = width * ratio;
	}
	
	return imageToConvert
}

/**
 * @param {plugins.file.JSFile} FILE
 * @return {plugins.file.JSFile}
 * 
 * @properties={typeid:24,uuid:"9E2A3157-A67A-46B7-91D3-9D6059A1C13E"}
 * @SuppressWarnings(unused)
 */
function signPDF(FILE){
	var certif = gcparametrosaplicacion_to_parametrosaplicacion.name_certifdigital.split('.')
	if(certif[1] == 'pfx' || certif[1] == 'p12') 
	{
		var pdf = plugins.PdfDS.initPdf();
		var ruta = FILE.getAbsolutePath();
		var r = ruta.split('.')
		pdf.fi = ruta;//"d:\\descargas\\Fra1909159.pdf";
		pdf.fo = r[0]+'_s'+'.'+r[1];//"d:\\descargas\\Fra1909159_s.pdf";
		var temp_file = plugins.file.createTempFile(certif[0],'.'+certif[1]);	
		var rawData = gcparametrosaplicacion_to_parametrosaplicacion.certifdigital;
		var tempFile = plugins.file.createFile(certif[0]+'.'+certif[1])
		var success = plugins.file.writeFile(tempFile, rawData);
		pdf.fcert = tempFile.getAbsolutePath();//"d:\\descargas\\gag2010.p12";
		pdf.passwdCert = gcparametrosaplicacion_to_parametrosaplicacion.clave_certifdigital;
		pdf.visible = true;
		pdf.reason = "pdf";
		pdf.contact = gcparametrosaplicacion_to_parametrosaplicacion.empresa;
		pdf.location = gcparametrosaplicacion_to_parametrosaplicacion.poblacion;
		try{
			var bool = plugins.PdfDS.signPdf(pdf);	
		}
		catch(e){ 
			application.output(e.toString())
		}
		
		rawData = plugins.file.readFile(pdf.fo)
		
		
		
		
		tempFile = plugins.file.createFile(r[0]+'_s'+'.'+r[1])//plugins.file.createTempFile(filename,'.pdf');
		success = plugins.file.writeFile(tempFile, rawData);
		
		return tempFile
	}
	else
	{
		return FILE
	}
}

/**
 * @param {Number} CLI
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"D1B86CEC-1E58-4765-94B2-758D7B394212"}
 * @SuppressWarnings(unused)
 */
function totalPendienteCobroCliente(CLI){
	
	if(!CLI) CLI = -999;
	var query = "SELECT ISNULL(SUM (tbFacturaCabecera.impnee_cfa),0) - ISNULL(SUM (tbFacturaCabeceraCobros.impor_cob),0) \
	FROM tbFacturaCabecera as tbFacturaCabecera left join tbFacturaCabeceraCobros as tbFacturaCabeceraCobros \
	on tbFacturaCabecera.eje_cfa = tbFacturaCabeceraCobros.eje_cob and \
	tbFacturaCabecera.nup_cfa = tbFacturaCabeceraCobros.nup_cob and \
	tbFacturaCabecera.ser_cfa = tbFacturaCabeceraCobros.ser_cob \
	where tbFacturaCabecera.clie_cfa = "+CLI;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var imppendcobro = dataset.getValue(1,1)
					
	
	return imppendcobro;
}

/**
 * @param {Number} CLI
 * @return {Number}
 * 
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"6C35B393-DAFC-448B-A6D5-6041158275F0"}
 */
function totalFacturasCliente(CLI){
	
	if(!CLI) CLI = -999;
	var query = "SELECT ISNULL(SUM (tbFacturaCabecera.impnee_cfa),0) \
	FROM tbFacturaCabecera as tbFacturaCabecera where tbFacturaCabecera.clie_cfa = "+CLI;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var impsumfacturas = dataset.getValue(1,1)					
	
	return impsumfacturas;
}
