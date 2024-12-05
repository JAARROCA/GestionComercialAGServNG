borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/tbmaestroarticulos",
initialSort:"codigo asc",
items:[
{
formIndex:10900,
location:"245,266",
mediaOptions:14,
size:"37,22",
text:"para",
transparent:true,
typeid:7,
uuid:"0E93E8F8-DCE7-4E5D-A629-6A068F7AC5E8"
},
{
formIndex:10101,
location:"16,129",
size:"109,20",
text:"Fecha Vigor",
transparent:true,
typeid:7,
uuid:"109A714E-9264-4E8A-B7C9-4F3DD3E6E726"
},
{
anchors:9,
formIndex:10101,
imageMediaID:"A91F0868-7529-4713-918E-1D88AB049B0C",
location:"373,238",
mediaOptions:14,
name:"btnCalculadorac",
onActionMethodID:"0060CED1-80C7-4763-A283-EA7D120405B3",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
toolTipText:"Recalcular precio venta a partir del Precio de Coste y el % de Beneficio",
transparent:true,
typeid:7,
uuid:"1122EC1A-480A-4925-A25B-620525109A31"
},
{
anchors:11,
formIndex:10101,
location:"16,30",
size:"108,20",
text:"Código",
transparent:true,
typeid:7,
uuid:"146DA76D-7468-4F2B-96B2-BE35D5A9567E"
},
{
anchors:9,
formIndex:10101,
imageMediaID:"A91F0868-7529-4713-918E-1D88AB049B0C",
location:"212,266",
mediaOptions:14,
name:"btnCalculadora",
onActionMethodID:"0060CED1-80C7-4763-A283-EA7D120405B3",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
toolTipText:"Recalcular precio venta a partir del Precio de Coste y el % de Beneficio",
transparent:true,
typeid:7,
uuid:"191A7D28-66B1-48B0-84EE-20953E9FC8E1"
},
{
dataProviderID:"GCtbmaestroarticulos_to_tbmaestrofamila.descfamilia",
foreground:"#0000ff",
formIndex:10101,
location:"185,157",
size:"432,20",
transparent:true,
typeid:7,
uuid:"1CAEDC47-4DE8-400D-855C-E576FDC2FF37"
},
{
dataProviderID:"pesobruto",
formIndex:10108,
format:"0.0000",
horizontalAlignment:4,
location:"124,212",
name:"fld_pesobruto",
onActionMethodID:"F96F5349-653A-4373-A664-440703D6BD76",
selectOnEnter:true,
size:"100,20",
styleClass:"white",
typeid:4,
uuid:"22192007-A3A4-431A-BE98-AFA877BE9F28"
},
{
dataProviderID:"fechavigor",
displayType:5,
formIndex:10105,
format:"dd-MM-yyyy",
location:"125,129",
name:"fld_fechavigor",
onActionMethodID:"4DA4FD3B-F571-4D9C-872C-8C085E7DCB07",
selectOnEnter:true,
size:"130,20",
styleClass:"white",
typeid:4,
uuid:"23ACAE74-F48E-4901-A35A-4D586A81BBB6"
},
{
formIndex:10101,
location:"15,212",
size:"104,20",
text:"Peso Bruto Pza.",
transparent:true,
typeid:7,
uuid:"30AD50D5-BBE8-41D7-A10F-D733D00A00DB"
},
{
dataProviderID:"situacion",
displayType:2,
editable:false,
formIndex:14802,
location:"125,103",
name:"fld_situacionpieza",
onActionMethodID:"72B79179-9575-46BF-B717-9502E53A4F51",
size:"112,20",
styleClass:"white",
typeid:4,
uuid:"3315D963-D1C6-4AB2-80F8-CAB2626BB984",
valuelistID:"35CF8BAA-90AB-4C82-A703-7EB4F5BA913F"
},
{
background:"#e6e6e6",
height:400,
partType:5,
typeid:19,
uuid:"3DFADA71-132F-4AB7-B21B-AC49FB56B2BB"
},
{
formIndex:10101,
location:"229,212",
size:"103,20",
text:"Peso Neto Pza.",
transparent:true,
typeid:7,
uuid:"4030C1F3-29BF-4618-9D37-BBF70D8BACD6"
},
{
borderType:"BevelBorder,0",
dataProviderID:"Articulo",
displayType:2,
editable:false,
formIndex:10102,
location:"215,30",
name:"articulos",
onActionMethodID:"-1",
onDataChangeMethodID:"C06242E3-D3B6-4A45-B8D9-B8A37C9F5E2C",
size:"580,20",
styleClass:"white",
typeid:4,
uuid:"46C204B1-A81A-4859-91FB-430BA8C62BF5",
valuelistID:"9868B628-DC82-4E1C-BF72-2DE5850A0392",
visible:false
},
{
anchors:9,
enabled:false,
formIndex:10101,
location:"16,320",
size:"123,20",
text:"Pedidos Firmes",
transparent:true,
typeid:7,
uuid:"4890B65C-A99A-41A0-8DB0-69054079E3F1"
},
{
formIndex:11108,
imageMediaID:"59872c90-974b-4c4e-b035-b56b662db3ce",
location:"125,2",
name:"BtnArticulos",
onActionMethodID:"33DAFE90-21F1-4128-9264-5B561888D3E1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
toolTipText:"Buscar Articulos...",
typeid:7,
uuid:"50DE2820-7781-450E-89BF-E6433AC5EF47"
},
{
dataProviderID:"pesoneto",
formIndex:10109,
format:"0.0000",
horizontalAlignment:4,
location:"338,212",
name:"fld_pesoneto",
onActionMethodID:"947C9197-B910-4E8E-9336-B6B897C756BA",
selectOnEnter:true,
size:"94,20",
styleClass:"white",
typeid:4,
uuid:"5EE7E2F1-8CE7-492C-BCF5-0789A71DDB69"
},
{
anchors:11,
formIndex:10101,
location:"16,55",
size:"108,20",
text:"Descripción",
transparent:true,
typeid:7,
uuid:"671CAE91-CBB1-4C96-B856-6324AC485E61"
},
{
formIndex:10101,
location:"15,157",
size:"78,20",
text:"Familia",
transparent:true,
typeid:7,
uuid:"6B6F6F26-4D98-4079-A1ED-0C2EB4ADA65B"
},
{
dataProviderID:"preciopieza",
formIndex:10108,
format:"###,##0.0000",
horizontalAlignment:4,
location:"125,266",
name:"fld_preciopieza",
onActionMethodID:"6AC8D927-589C-4951-96F2-F996C53B3878",
selectOnEnter:true,
size:"85,20",
styleClass:"white",
typeid:4,
uuid:"71E19716-14F4-4ACC-A055-8282521C64C8"
},
{
dataProviderID:"unidmedida",
displayType:2,
editable:false,
formIndex:10106,
location:"125,185",
name:"fld_unidmedida",
onActionMethodID:"A7B19697-5DAC-417C-9053-D31ABAC72139",
size:"116,20",
styleClass:"white",
typeid:4,
uuid:"73787574-AC4D-4189-8962-A6AE29E18662",
valuelistID:"789D329F-7791-469E-BA5F-6CC0AF88AF49"
},
{
background:"#ffff00",
dataProviderID:"codigo",
formIndex:10102,
format:"|U",
location:"125,30",
name:"codigo",
onActionMethodID:"79D62DF4-9940-4889-851F-019F4DD2204A",
onDataChangeMethodID:"6B9D2AB8-C42C-4106-893D-D28A58B0412C",
size:"88,20",
typeid:4,
uuid:"75E7D602-AFD3-4950-9367-F90B2B313421"
},
{
formIndex:10101,
location:"15,185",
size:"98,20",
text:"Unid. Medida",
transparent:true,
typeid:7,
uuid:"78692C1C-A1EE-4D2A-B227-A5557AA1FF9E"
},
{
dataProviderID:"dto",
format:"#0.00",
horizontalAlignment:0,
location:"457,266",
name:"fld_dto",
onActionMethodID:"-1",
selectOnEnter:true,
size:"40,20",
styleClass:"white",
typeid:4,
uuid:"7C36654C-E67E-4571-AC0D-17C3B55D40EA"
},
{
formIndex:10101,
horizontalAlignment:4,
location:"223,238",
size:"90,20",
text:"% Beneficio",
transparent:true,
typeid:7,
uuid:"87376B20-62F6-4FBC-B981-7DC134765429"
},
{
location:"414,266",
size:"43,20",
text:"% dto.",
transparent:true,
typeid:7,
uuid:"889E4404-A118-4D10-8B8F-8B8AAF101787"
},
{
dataProviderID:"piva_a",
format:"#0.00",
horizontalAlignment:0,
location:"457,238",
name:"fld_tipoiva",
onActionMethodID:"596C4583-216E-4B34-BB4E-B53978E0DBFF",
onDataChangeMethodID:"CAD9FB69-4F7E-4424-8FB0-4A78A16129FC",
selectOnEnter:true,
size:"40,20",
styleClass:"white",
typeid:4,
uuid:"93338F31-AC70-4AC7-B0A8-CFE5C952A18E",
valuelistID:"9C27E40E-DE6A-4EF3-8EBD-F100CC3C723A"
},
{
anchors:11,
formIndex:10101,
location:"16,2",
size:"108,20",
text:"Articulos",
transparent:true,
typeid:7,
uuid:"95C7C262-3B36-42EB-8FFF-3CF343466002"
},
{
anchors:9,
dataProviderID:"stockmin",
foreground:"#0000ff",
formIndex:10104,
horizontalAlignment:4,
location:"125,368",
name:"fld_stockmin",
selectOnEnter:true,
size:"104,20",
styleClass:"white",
typeid:4,
uuid:"9952818B-EBD3-427E-89A7-405D8B5A219C"
},
{
dataProviderID:"familia",
formIndex:10106,
format:"|U",
location:"125,157",
name:"fld_familia",
onActionMethodID:"A99C870B-520C-49CF-A8C2-0D678E598158",
selectOnEnter:true,
size:"54,20",
styleClass:"white",
typeid:4,
uuid:"A37AF0A5-55C1-4408-A45F-BF2839707094"
},
{
location:"409,238",
size:"48,20",
text:"% I.V.A.",
transparent:true,
typeid:7,
uuid:"AF2F2D81-3DB0-4ABF-893F-0A52D82E8697"
},
{
formIndex:11108,
imageMediaID:"59872c90-974b-4c4e-b035-b56b662db3ce",
location:"100,157",
name:"BtnFamilia",
onActionMethodID:"17B63DAB-E68A-4390-BA56-D4D552FBEE2F",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
showClick:false,
size:"22,20",
toolTipText:"Buscar Familia...",
typeid:7,
uuid:"B3CC4AEC-3FC6-4E80-8012-4FFAFD87DDC0"
},
{
anchors:9,
editable:false,
enabled:false,
foreground:"#0000ff",
formIndex:10104,
horizontalAlignment:4,
location:"125,344",
size:"104,20",
styleClass:"noborder",
typeid:4,
uuid:"B89441A8-BD7E-4E22-8587-AAFAB9A60182"
},
{
formIndex:10101,
location:"16,238",
size:"102,20",
text:"Precio Coste",
transparent:true,
typeid:7,
uuid:"B93A24F7-C134-4691-8874-9C13A8FE407C"
},
{
formIndex:10900,
location:"340,266",
mediaOptions:14,
size:"61,22",
text:"Unidades",
transparent:true,
typeid:7,
uuid:"BD2962DC-DDD6-4AD8-8D0E-FA59E49251B6"
},
{
anchors:11,
background:"#ffff00",
dataProviderID:"descripcion",
formIndex:10103,
format:"|U",
location:"125,55",
name:"fld_descripcion",
onActionMethodID:"D6FA30A0-AE6D-4BC1-9869-9C57C300F36B",
selectOnEnter:true,
size:"670,20",
styleClass:"white",
typeid:4,
uuid:"BE049359-8916-4D7A-8CE3-5FECBF14C74F"
},
{
anchors:9,
formIndex:10101,
location:"16,368",
size:"123,20",
text:"Stock Mínimo",
transparent:true,
typeid:7,
uuid:"C11CC05B-1A46-473E-BA0E-FE1F236DAB21"
},
{
dataProviderID:"codigo",
fontType:"Verdana,1,12",
foreground:"#0000ff",
location:"125,30",
name:"lblcodigo",
size:"80,20",
transparent:true,
typeid:7,
uuid:"C58E49B8-2E17-49F3-B80F-7267017121A1"
},
{
dataProviderID:"porcbeneficio",
formIndex:10108,
format:"#0.00",
horizontalAlignment:0,
location:"317,238",
name:"fld_porcbeneficio",
onActionMethodID:"596C4583-216E-4B34-BB4E-B53978E0DBFF",
onDataChangeMethodID:"19AD7E27-821A-4FCA-95D4-3E88A0FEFC7C",
selectOnEnter:true,
size:"54,20",
styleClass:"white",
typeid:4,
uuid:"C944F968-45AA-4B58-ADD1-B99F2EB356FD"
},
{
anchors:9,
editable:false,
enabled:false,
foreground:"#0000ff",
formIndex:10104,
horizontalAlignment:4,
location:"125,320",
size:"104,20",
styleClass:"noborder",
typeid:4,
uuid:"CA8F3A81-D51F-4D88-B52F-C83F1CBA1E6D"
},
{
anchors:11,
formIndex:10101,
location:"16,103",
size:"108,20",
text:"Situación",
transparent:true,
typeid:7,
uuid:"CC3A4F76-25F4-4E55-B5EE-538DDCE25840"
},
{
formIndex:10101,
location:"16,266",
size:"102,20",
text:"Precio",
transparent:true,
typeid:7,
uuid:"D5A00742-DA5D-4799-A462-A9547BDFD2B1"
},
{
anchors:11,
formIndex:10101,
location:"16,78",
size:"108,20",
text:"Ref. Cliente",
transparent:true,
typeid:7,
uuid:"D6580FE6-1441-4A80-892A-FBED0B2CEC62"
},
{
dataProviderID:"preciocosto",
formIndex:10108,
format:"###,##0.000000",
horizontalAlignment:4,
location:"125,238",
name:"fld_preciocosto",
onActionMethodID:"596C4583-216E-4B34-BB4E-B53978E0DBFF",
onDataChangeMethodID:"19AD7E27-821A-4FCA-95D4-3E88A0FEFC7C",
selectOnEnter:true,
size:"85,20",
styleClass:"white",
typeid:4,
uuid:"E36B1F1F-67F3-4904-82A1-C2EF339B4367"
},
{
anchors:9,
enabled:false,
formIndex:10101,
location:"16,344",
size:"123,20",
text:"Disponible real",
transparent:true,
typeid:7,
uuid:"EBA34F9B-26BE-43E9-8BDA-0B49B0228EA9"
},
{
anchors:9,
dataProviderID:"exis_a",
editable:false,
foreground:"#0000ff",
formIndex:10104,
horizontalAlignment:4,
location:"125,294",
size:"104,20",
styleClass:"noborder",
typeid:4,
uuid:"EC99D829-82AA-4253-B65C-D69C4E2E6B30"
},
{
dataProviderID:"multiplo",
formIndex:10800,
horizontalAlignment:4,
location:"284,266",
name:"fld_multiplo",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"51,22",
styleClass:"white",
typeid:4,
uuid:"EC9A72C6-68AF-4BE0-A04C-7F0E646DDCCA"
},
{
anchors:11,
dataProviderID:"refcliente",
formIndex:10103,
format:"|U",
location:"125,78",
name:"fld_refcliente",
onActionMethodID:"AF90882F-2208-44FB-92AC-063AE827E71E",
selectOnEnter:true,
size:"670,20",
styleClass:"white",
typeid:4,
uuid:"F7343303-51C3-49F6-9B7E-0E2F3AB7546F"
},
{
anchors:9,
formIndex:10101,
location:"16,294",
size:"123,20",
text:"Stock Actual",
transparent:true,
typeid:7,
uuid:"F773D31D-E2FC-430A-8D61-CD99C4EB9B2D"
}
],
name:"dlg_ArticulosGC",
namedFoundSet:"separate",
navigatorID:"-1",
onLoadMethodID:"C2AAA4AF-374A-4CF3-898A-81F493FFD569",
onShowMethodID:"-1",
paperPrintScale:100,
scrollbars:36,
size:"800,400",
styleName:"svyWebCrm",
typeid:3,
uuid:"69013099-8362-483E-BC2F-262BDDB30AE4"