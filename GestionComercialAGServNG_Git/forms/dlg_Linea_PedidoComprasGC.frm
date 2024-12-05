borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/tbpedidocompralinea",
items:[
{
dataProviderID:"cantidad",
formIndex:11400,
horizontalAlignment:0,
location:"5,162",
name:"fld_cantidad",
onActionMethodID:"CB4CB713-CF82-4F6A-B667-F32BD59ACD05",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
size:"124,20",
styleClass:"field_white",
tabSeq:3,
typeid:4,
uuid:"04793F02-5F72-4CD5-9B30-22FD8A7148C8"
},
{
background:"#e6e6e6",
height:249,
partType:5,
typeid:19,
uuid:"0C9BC6C1-9A67-49F9-A498-A40BE61F0D97"
},
{
anchors:9,
location:"5,102",
name:"lblcodcomponentec",
size:"125,20",
text:"Descripción",
transparent:true,
typeid:7,
uuid:"199D4BDD-127B-403E-AE14-62998CBD6EDE"
},
{
anchors:9,
horizontalAlignment:0,
location:"541,135",
size:"116,20",
text:"Dto. (%)",
transparent:true,
typeid:7,
uuid:"236A3594-54E4-47AE-B652-A5196BE03947"
},
{
anchors:11,
dataProviderID:"descripcion",
formIndex:11402,
format:"|U",
location:"162,102",
name:"descripcion",
onActionMethodID:"7C05F48D-A21F-447F-B4BF-AA763F632538",
size:"503,20",
styleClass:"field_white",
tabSeq:2,
typeid:4,
uuid:"2775AD94-F634-4624-8325-F8A750DF730A"
},
{
dataProviderID:"npedido",
editable:false,
fontType:"Verdana,1,14",
foreground:"#ff0000",
formIndex:10400,
location:"88,10",
name:"npedido",
size:"81,22",
styleClass:"noborder",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"2CC6DA87-55D7-41DB-91DB-125A174EA080"
},
{
dataProviderID:"fechaentrega",
displayType:5,
formIndex:11400,
format:"dd-MM-yyyy",
location:"288,162",
name:"fld_fechaentrega",
onActionMethodID:"FF3FF244-CB4D-4CBB-A2DB-E84D94205300",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
size:"130,20",
styleClass:"field_white",
tabSeq:5,
typeid:4,
uuid:"37B6EA21-974A-445D-8B0C-1F55EFA14A5D"
},
{
dataProviderID:"fecha",
editable:false,
foreground:"#0000ff",
formIndex:10600,
format:"dd-MM-yyyy",
location:"243,40",
name:"fecha",
size:"90,22",
styleClass:"noborder",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"485F0468-970A-41F7-B427-D829BC167E4D"
},
{
anchors:9,
location:"5,77",
name:"lblcodcomponente",
size:"125,20",
text:"Código de Articulo",
transparent:true,
typeid:7,
uuid:"49539137-10ED-4A12-B0A2-640E0714B776"
},
{
dataProviderID:"npedidolinea",
editable:false,
foreground:"#0000ff",
formIndex:10600,
location:"88,40",
name:"npedidiolinea",
size:"48,22",
styleClass:"noborder",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"4DC6282E-A5B7-40E3-B03B-27379B1743C0"
},
{
formIndex:11108,
imageMediaID:"59872c90-974b-4c4e-b035-b56b662db3ce",
location:"135,77",
name:"BtnRefencia",
onActionMethodID:"A4525D82-DAE3-4FDA-B777-84EE8A664C92",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"20,20",
tabSeq:-2,
toolTipText:"Buscar Referencia...",
typeid:7,
uuid:"597094D0-30D9-4340-9102-B68F783D154D"
},
{
dataProviderID:"dto",
formIndex:11400,
format:"###,##0.00",
horizontalAlignment:0,
location:"541,162",
name:"dto",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
size:"116,20",
styleClass:"field_white",
tabSeq:7,
typeid:4,
uuid:"5D0A2D6D-071C-4E60-8275-99EBB3AA06C8"
},
{
formIndex:10500,
location:"5,10",
mediaOptions:14,
size:"76,22",
tabSeq:-1,
text:"Nº Pedido",
transparent:true,
typeid:7,
uuid:"7E31C96A-4405-4C98-BBB1-84A104F11216"
},
{
formIndex:10500,
location:"174,10",
mediaOptions:14,
size:"71,22",
text:"Proveedor",
transparent:true,
typeid:7,
uuid:"854161E4-F08F-4F18-B28B-DFBB012ED5A6"
},
{
dataProviderID:"unidsum",
displayType:2,
editable:false,
formIndex:11400,
location:"162,162",
name:"fld_unidadinterna",
onActionMethodID:"ED8D5762-19DF-4D46-8F3B-47EAE945163F",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
size:"120,20",
styleClass:"field_white",
tabSeq:4,
typeid:4,
uuid:"874A3678-BCB1-45D1-A03C-6C8408832FB9",
valuelistID:"789D329F-7791-469E-BA5F-6CC0AF88AF49"
},
{
anchors:9,
horizontalAlignment:0,
location:"5,135",
size:"124,20",
text:"Cantidad",
transparent:true,
typeid:7,
uuid:"9C478C06-EDF1-47AB-AD0C-8AB430E94F59"
},
{
dataProviderID:"proveedor",
editable:false,
foreground:"#0000ff",
formIndex:10400,
format:"######",
horizontalAlignment:0,
location:"243,10",
name:"proveedor",
size:"62,22",
styleClass:"noborder",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"9FC0116D-8B4C-41C8-9A04-623DB7EEB39F"
},
{
dataProviderID:"GCtbpedidocompralinea_to_tbmaestroproveedores.descproveedor",
editable:false,
foreground:"#0000ff",
formIndex:10400,
location:"311,10",
size:"354,22",
styleClass:"noborder",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"A0730918-16FE-4206-97A6-C244C6CF9EF9"
},
{
dataProviderID:"precio",
formIndex:11400,
format:"###,##0.0000",
horizontalAlignment:0,
location:"420,162",
name:"precio",
onActionMethodID:"842D5F72-E9B5-448D-8922-8FEA453352DA",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
size:"116,20",
styleClass:"field_white",
tabSeq:6,
typeid:4,
uuid:"A1C568BC-B9A6-4E05-A145-996B362228EE"
},
{
formIndex:10700,
location:"174,40",
mediaOptions:14,
size:"60,22",
text:"Fecha",
transparent:true,
typeid:7,
uuid:"A3D4AF83-E351-4856-AA35-D1A9068BDF94"
},
{
anchors:9,
horizontalAlignment:0,
location:"420,135",
size:"116,20",
text:"Precio/Unit",
transparent:true,
typeid:7,
uuid:"B1FF2266-D446-47C8-857D-D8C83CF62FAD"
},
{
anchors:9,
location:"5,203",
size:"78,20",
text:"Situación",
transparent:true,
typeid:7,
uuid:"D11775D9-0057-45ED-BC64-35EAA49280AB"
},
{
anchors:9,
horizontalAlignment:0,
location:"162,135",
size:"124,20",
text:"Unidad Medida",
transparent:true,
typeid:7,
uuid:"D5620BE7-0988-4DD4-A72D-BAB3F60033BB"
},
{
formIndex:10700,
location:"5,40",
mediaOptions:14,
size:"76,22",
tabSeq:-1,
text:"Nº Línea",
transparent:true,
typeid:7,
uuid:"E23F3376-8682-4A10-81D1-E0B7A038B447"
},
{
dataProviderID:"refpieza",
formIndex:11400,
format:"|U",
location:"162,77",
name:"refpieza",
onActionMethodID:"49691948-112B-4F8F-ADC2-D5B03E11BE8C",
onDataChangeMethodID:"D7B9E4BE-7469-499E-9521-37DF93CC4BF5",
onFocusLostMethodID:"-1",
size:"94,20",
styleClass:"field_white",
tabSeq:1,
typeid:4,
uuid:"EABAA3A5-4D49-4352-983A-AED070E4FD41"
},
{
dataProviderID:"situacion",
formIndex:10800,
horizontalAlignment:0,
location:"82,203",
name:"situacion",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
size:"55,22",
typeid:4,
uuid:"F3E24147-8C0E-4B52-AE5C-38157AA37245"
},
{
anchors:9,
horizontalAlignment:0,
location:"288,135",
size:"116,20",
text:"Fecha Entrega",
transparent:true,
typeid:7,
uuid:"F840DFE2-3010-4782-94B5-5495D455646E"
}
],
name:"dlg_Linea_PedidoComprasGC",
namedFoundSet:"separate",
navigatorID:"-1",
onLoadMethodID:"36753BBE-F61B-4F4A-AE44-1F87FBE8ECD6",
onShowMethodID:"69E63533-2DFB-43C8-B861-8BD9144F1850",
paperPrintScale:100,
scrollbars:36,
size:"670,500",
styleName:"svyWebCrm",
typeid:3,
uuid:"D12BB10D-0C65-4BEA-9E77-A239CD97D92D"