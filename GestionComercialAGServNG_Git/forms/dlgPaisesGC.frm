borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/pais",
extendsID:"-1",
initialSort:"pai_nombre asc",
items:[
{
formIndex:1,
imageMediaID:"914C1DE9-1055-41D9-8BCE-2AA18CA7419F",
location:"125,14",
mediaOptions:14,
name:"btnClearSearch",
onActionMethodID:"07C99149-2734-40DA-8C86-ED3471380B35",
rolloverImageMediaID:"8A1F4F07-53C3-4EA9-B9C7-399445FA45DD",
showClick:false,
showFocus:false,
size:"14,14",
typeid:7,
uuid:"6D3B697C-1CD2-424F-914C-974FD3E7A44B"
},
{
height:390,
partType:2,
typeid:19,
uuid:"840FCB03-DFB4-4656-B547-37C0AC4097F3"
},
{
json:{
dataProviderID:"scopes.globals.GCnav_search2",
location:{
x:4,
y:6
},
onActionMethodID:"DC3DF857-38A2-4CB4-87F2-BEAF9F0B9AC3",
placeholderText:"Buscar..."
},
location:"4,6",
name:"fld_search_cuenta",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"8F1BD104-4E2A-45D6-BC1B-2FC13608C2F1"
},
{
json:{
imageStyleClass:"fa fa-search",
location:{
x:144,
y:6
},
onActionMethodID:"DC3DF857-38A2-4CB4-87F2-BEAF9F0B9AC3",
size:{
height:30,
width:50
},
styleClass:"svy-searchbutton"
},
location:"144,6",
name:"btn_search",
size:"50,30",
styleClass:"svy-searchbutton",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"9B457B12-3CA1-4885-A955-E9A95C54A9C5"
},
{
anchors:15,
json:{
anchors:15,
columns:[
{
dataprovider:"pai_iso2",
editFormSize:{
height:18,
width:56
},
headerTitle:null,
id:"pai_iso2",
maxWidth:56,
styleClassDataprovider:null,
svyUUID:"DEFF9E60-40B2-47AB-91C5-F8B40CB3E8E9"
},
{
dataprovider:"pai_nombre",
headerTitle:"NOMBRE",
id:"pai_nombre",
styleClassDataprovider:null,
svyUUID:"15570147-FF6D-484E-8963-66D2C4A51534"
}
],
location:{
x:4,
y:48
},
onCellClick:"940DA3B1-AE8A-48E8-B219-25D270749272",
size:{
height:342,
width:475
}
},
location:"4,48",
name:"datagrid_paises",
size:"475,342",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"E8C06595-60F2-4D79-BBFF-7D314B74CBFE"
}
],
name:"dlgPaisesGC",
navigatorID:"-1",
onFindCmdMethodID:"80542BE2-99AA-4895-AB53-86DE5479337E",
onSearchCmdMethodID:"8A04EF86-B5F6-49F6-924C-7C6EC343708D",
onShowMethodID:"75985E2C-D749-4EAC-8EFC-F8912723FCB2",
paperPrintScale:100,
size:"480,147",
styleName:"svyWebCrm",
typeid:3,
uuid:"A69D306C-A69F-4820-A5D6-D7551F484CC0",
view:5