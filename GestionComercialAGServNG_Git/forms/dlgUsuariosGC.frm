borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/usuarios",
extendsID:"-1",
initialSort:"cod_us asc",
items:[
{
height:68,
partType:2,
typeid:19,
uuid:"048A1C50-F7A1-4207-BEFB-1AE719209FEB"
},
{
background:"#ffffff",
borderType:"LineBorder,1,#969696",
dataProviderID:"scopes.globals.GCnav_search2",
location:"71,6",
name:"fld_search_usuario",
onActionMethodID:"D4D8D3E4-5865-47C2-BB93-E4E345DA12F5",
selectOnEnter:true,
size:"135,22",
toolTipText:"Introduce los criterios de busqueda y clicke el boton buscar o pulse Enter",
typeid:4,
uuid:"0A3137EA-5673-400F-9DBB-602301B56126"
},
{
dataProviderID:"cod_us",
editable:false,
formIndex:10800,
location:"10,73",
name:"cod_us",
onActionMethodID:"17BE193E-234F-4A9D-B050-14AE554B5D4E",
size:"78,18",
styleClass:"white",
tabSeq:3,
typeid:4,
uuid:"415A4B8B-6AEB-4B49-8677-5BF4DC6A8D0E"
},
{
formIndex:10801,
imageMediaID:"AA9E509B-31C6-4B38-9669-1C064C0F702A",
labelFor:"cod_us",
location:"4,36",
mediaOptions:1,
onActionMethodID:"513BFBF2-301E-4F27-A7CF-223C11013457",
rolloverCursor:12,
showClick:false,
size:"78,20",
text:"Código",
transparent:true,
typeid:7,
uuid:"5A49CBFE-7F42-4133-992E-76E6BEFDDABD"
},
{
formIndex:10801,
location:"10,8",
size:"56,20",
text:"Buscar",
transparent:true,
typeid:7,
uuid:"69026685-F6FE-434C-A919-8F5D205E9DA0"
},
{
formIndex:1,
imageMediaID:"914C1DE9-1055-41D9-8BCE-2AA18CA7419F",
location:"189,10",
mediaOptions:14,
name:"btnClearSearch",
onActionMethodID:"DA41F6A6-1C10-404D-B3FF-4B5F7FCCF039",
rolloverImageMediaID:"8A1F4F07-53C3-4EA9-B9C7-399445FA45DD",
showClick:false,
showFocus:false,
size:"14,14",
typeid:7,
uuid:"AF0ADDE7-2A4F-49E4-9B16-BE88AAFC80E8"
},
{
height:300,
partType:5,
typeid:19,
uuid:"D1820FF8-E066-4975-9AC1-23BF9ADC5645"
},
{
formIndex:10000,
horizontalAlignment:0,
imageMediaID:"44ba5f7e-9ebd-4d7d-b556-244e37c83ede",
location:"211,4",
mediaOptions:1,
name:"btn_search",
onActionMethodID:"D4D8D3E4-5865-47C2-BB93-E4E345DA12F5",
rolloverCursor:12,
size:"24,24",
toolTipText:"Buscar...",
transparent:true,
typeid:7,
uuid:"D46E3088-FDE6-4A4C-9725-27D6A6764947",
verticalAlignment:0
},
{
formIndex:10801,
imageMediaID:"AA9E509B-31C6-4B38-9669-1C064C0F702A",
labelFor:"nom_us",
location:"87,36",
mediaOptions:1,
onActionMethodID:"10694917-0E27-419D-8337-C9A45D990AE2",
rolloverCursor:12,
showClick:false,
size:"382,20",
text:"Descripción",
transparent:true,
typeid:7,
uuid:"DEDA682C-4C05-453A-BA06-386CCFE35B76"
},
{
dataProviderID:"nom_us",
editable:false,
formIndex:10400,
location:"93,73",
name:"nom_us",
onActionMethodID:"17BE193E-234F-4A9D-B050-14AE554B5D4E",
size:"382,18",
styleClass:"white",
tabSeq:1,
typeid:4,
uuid:"FB461E98-D9C1-4BC2-A9F1-FEE503FE7BA5"
}
],
name:"dlgUsuariosGC",
navigatorID:"-1",
onFindCmdMethodID:"26EF8E12-2101-4507-99F1-88AA817A3D27",
onSearchCmdMethodID:"675542E5-AB4A-43D2-85DD-994770E4807A",
onShowMethodID:"2D64F8E8-5EBF-4316-AC25-0732ABB35F1F",
paperPrintScale:100,
size:"480,147",
styleName:"svyWebCrm",
typeid:3,
uuid:"E44B360B-B27B-449C-BD2B-E3C0434943CF",
view:3