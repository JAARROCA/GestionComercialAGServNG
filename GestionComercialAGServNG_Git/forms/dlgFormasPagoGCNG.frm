borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/tbmaestroformpago",
extendsID:"-1",
initialSort:"codig_fp asc",
items:[
{
anchors:15,
json:{
anchors:15,
columns:[
{
dataprovider:"codig_fp",
headerTitle:"CÓDIGO",
id:"codig_fp",
maxWidth:150,
styleClassDataprovider:null,
svyUUID:"CB2EBB96-7C1A-4F41-8723-AFCEE6A31A05"
},
{
dataprovider:"denom_fp",
headerTitle:"DESCRIPCIÓN",
id:"denom_fp",
styleClassDataprovider:null,
svyUUID:"AAD42721-1E0F-44CD-9B8D-BF6F18EE3666"
}
],
location:{
x:4,
y:48
},
onCellClick:"12958054-0DD5-45D3-ADF2-30A038F2F667",
size:{
height:341,
width:596
}
},
location:"4,48",
name:"datagrid_formaspago",
size:"596,341",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"132CA112-0717-4915-8EC0-B24B68353006"
},
{
height:389,
partType:2,
typeid:19,
uuid:"42233B8F-1A9E-4ABA-9C79-C419535E54BC"
},
{
json:{
imageStyleClass:"fa fa-search",
location:{
x:144,
y:6
},
onActionMethodID:"BB682FC4-0876-4AD2-B42C-16E8DE92A0F1",
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
uuid:"750432B9-2F23-40B5-9814-8D9563F1D570"
},
{
height:399,
partType:5,
typeid:19,
uuid:"86BD0B64-5F65-4DCD-9C6F-C84FB20D2EF4"
},
{
json:{
dataProviderID:"scopes.globals.GCnav_search2",
location:{
x:4,
y:6
},
onActionMethodID:"BB682FC4-0876-4AD2-B42C-16E8DE92A0F1",
placeholderText:"Buscar...",
size:{
height:30,
width:140
}
},
location:"4,6",
name:"fld_search_cuenta",
size:"140,30",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"9EDE7EEE-1EA9-4658-ACE2-991DA21E1B2F"
},
{
formIndex:1,
imageMediaID:"914C1DE9-1055-41D9-8BCE-2AA18CA7419F",
location:"125,14",
mediaOptions:14,
name:"btnClearSearch",
onActionMethodID:"51BB2F12-78E1-4FA3-8325-BED2AB14ABF8",
rolloverImageMediaID:"8A1F4F07-53C3-4EA9-B9C7-399445FA45DD",
showClick:false,
showFocus:false,
size:"14,14",
typeid:7,
uuid:"BBBEBFB0-D8CB-4463-816A-B8D64A67EA81"
}
],
name:"dlgFormasPagoGCNG",
navigatorID:"-1",
onFindCmdMethodID:"875A3E28-0108-4575-B597-4F97586EDBF3",
onLoadMethodID:"5CF68073-11F4-4791-87A6-622454AD766B",
onSearchCmdMethodID:"0587E1E2-BFBE-4160-BA25-6E0711C30751",
onShowMethodID:"AA67A05F-940D-457F-9D5F-82AA36558278",
paperPrintScale:100,
size:"600,350",
styleName:"svyWebCrm",
typeid:3,
uuid:"B1B34EA3-8E89-4808-8174-46906839F329",
view:3