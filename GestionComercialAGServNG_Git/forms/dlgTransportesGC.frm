borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/tbmaestrotransportista",
extendsID:"-1",
initialSort:"idtransportista asc",
items:[
{
formIndex:10801,
location:"10,8",
size:"56,20",
text:"Buscar",
transparent:true,
typeid:7,
uuid:"55CC8916-9639-49BA-AA36-C3F1B5A4BA3B"
},
{
formIndex:10801,
imageMediaID:"AA9E509B-31C6-4B38-9669-1C064C0F702A",
labelFor:"codig_fp",
location:"2,36",
mediaOptions:1,
onActionMethodID:"977BC41E-06DE-4843-BF2A-45388F195F82",
rolloverCursor:12,
showClick:false,
size:"79,20",
text:"Código",
transparent:true,
typeid:7,
uuid:"625F0728-E158-41CA-A821-91B804306A30"
},
{
formIndex:1,
imageMediaID:"914C1DE9-1055-41D9-8BCE-2AA18CA7419F",
location:"189,10",
mediaOptions:14,
name:"btnClearSearch",
onActionMethodID:"DD1FC2B8-EDBB-48EE-8586-804AB6347822",
rolloverImageMediaID:"8A1F4F07-53C3-4EA9-B9C7-399445FA45DD",
showClick:false,
showFocus:false,
size:"14,14",
typeid:7,
uuid:"6D464651-2B53-4CDF-9ECA-24B9DA18AF14"
},
{
dataProviderID:"razonsocial",
editable:false,
formIndex:10400,
location:"89,62",
name:"denom_fp",
onActionMethodID:"6405964C-6E6E-4F58-A386-87745A3EFADE",
size:"506,18",
styleClass:"white",
tabSeq:1,
typeid:4,
uuid:"9C1F0304-D5F5-499F-AE32-608C13CC7F2A"
},
{
height:350,
partType:5,
typeid:19,
uuid:"AD489316-B20B-49B7-AEDB-49DFBD36F756"
},
{
formIndex:10801,
imageMediaID:"AA9E509B-31C6-4B38-9669-1C064C0F702A",
labelFor:"denom_fp",
location:"86,36",
mediaOptions:1,
onActionMethodID:"DE9CC830-C14D-41C1-A45E-87529D683F19",
rolloverCursor:12,
showClick:false,
size:"506,20",
text:"Descripción",
transparent:true,
typeid:7,
uuid:"AF6F0BFD-6F32-4369-9D78-B996F1B1F3E3"
},
{
dataProviderID:"idtransportista",
editable:false,
formIndex:10800,
location:"5,62",
name:"codig_fp",
onActionMethodID:"6405964C-6E6E-4F58-A386-87745A3EFADE",
size:"79,18",
styleClass:"white",
tabSeq:3,
typeid:4,
uuid:"C026BFE5-C896-41D1-9508-67F3557D584A"
},
{
height:58,
partType:2,
typeid:19,
uuid:"E11FA655-10EA-48F2-8FF1-29A92083E4F5"
},
{
formIndex:10000,
horizontalAlignment:0,
imageMediaID:"44ba5f7e-9ebd-4d7d-b556-244e37c83ede",
location:"210,4",
mediaOptions:1,
name:"btn_search",
onActionMethodID:"F5D511BB-7482-44F8-B180-AF62520AA6AB",
rolloverCursor:12,
size:"24,24",
toolTipText:"Buscar...",
transparent:true,
typeid:7,
uuid:"E25D87AC-47BB-4905-83D7-CFD267D7AC22",
verticalAlignment:0
},
{
background:"#ffffff",
borderType:"LineBorder,1,#969696",
dataProviderID:"scopes.globals.GCnav_search2",
location:"71,6",
name:"fld_search_cuenta",
onActionMethodID:"F5D511BB-7482-44F8-B180-AF62520AA6AB",
selectOnEnter:true,
size:"135,22",
toolTipText:"Introduce los criterios de busqueda y clicke el boton buscar o pulse Enter",
typeid:4,
uuid:"FEAB7BFE-5329-4E7A-98FF-A216012CA48A"
}
],
name:"dlgTransportesGC",
navigatorID:"-1",
onFindCmdMethodID:"1197F72D-23C8-42DC-AE62-E68ADB4D2B7C",
onLoadMethodID:"FE672199-665C-433E-B4A2-3F013AA8AFD9",
onSearchCmdMethodID:"92B70304-A417-45E0-972E-3B5C4DE1C6EE",
onShowMethodID:"57AF8D3A-CC77-4E10-9CC0-3B4530376FAE",
paperPrintScale:100,
size:"600,350",
styleName:"svyWebCrm",
typeid:3,
uuid:"D22B80E6-6509-4D43-AD00-027B105B9627",
view:3