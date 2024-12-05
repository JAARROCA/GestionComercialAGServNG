borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/tbmaestroagentes",
extendsID:"-1",
initialSort:"idagente asc",
items:[
{
anchors:15,
json:{
anchors:15,
columns:[
{
dataprovider:"idagente",
editFormSize:{
height:18,
width:30
},
headerTitle:"CÓDIGO",
id:"idagente",
maxWidth:120,
styleClassDataprovider:null,
svyUUID:"3CAD9F60-FF35-49D3-A469-1A957EFE01DA"
},
{
dataprovider:"descagente",
headerTitle:"DESCRIPCIÓN",
id:"descagente",
styleClassDataprovider:null,
svyUUID:"2EEC503B-EF06-42F2-A72E-5ECC4CF687C6"
}
],
location:{
x:4,
y:48
},
onCellClick:"C8250ED8-A9D5-456C-9CB8-D87BF6447956",
size:{
height:342,
width:475
}
},
location:"4,48",
name:"datagrid_agentes",
size:"475,342",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"103B917E-96EC-4D46-8B67-50E356320C93"
},
{
height:390,
partType:2,
typeid:19,
uuid:"8D761D25-F018-40B6-8E9E-1A62D3FDD0C2"
},
{
formIndex:1,
imageMediaID:"914C1DE9-1055-41D9-8BCE-2AA18CA7419F",
location:"125,14",
mediaOptions:14,
name:"btnClearSearch",
onActionMethodID:"4257B22B-C2D8-4DF1-9EDC-95D0A544CD31",
rolloverImageMediaID:"8A1F4F07-53C3-4EA9-B9C7-399445FA45DD",
showClick:false,
showFocus:false,
size:"14,14",
typeid:7,
uuid:"97D49FF7-E1E4-4186-8563-AEF8506B1F44"
},
{
json:{
imageStyleClass:"fa fa-search",
location:{
x:144,
y:6
},
onActionMethodID:"E7D79009-0FB6-4018-906C-28FB377A7B05",
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
uuid:"9D0D7CE0-F589-44F9-BF79-F8EEEFAD9076"
},
{
json:{
dataProviderID:"scopes.globals.GCnav_search2",
location:{
x:4,
y:6
},
onActionMethodID:"E7D79009-0FB6-4018-906C-28FB377A7B05",
placeholderText:"Buscar..."
},
location:"4,6",
name:"fld_search_cuenta",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"D29C9905-65B2-4433-B418-CF372E668E8C"
}
],
name:"dlgAgentesGC",
navigatorID:"-1",
onFindCmdMethodID:"AADB624C-6572-4DF7-801B-BE3247A01CC7",
onLoadMethodID:"BA407802-0E57-4316-A358-13449E541AEB",
onSearchCmdMethodID:"1ECF4104-8DDF-48BD-A139-A31D865F7FFC",
onShowMethodID:"260F6361-7859-44F5-8944-5F0C8CD853AE",
paperPrintScale:100,
size:"480,147",
styleName:"svyWebCrm",
typeid:3,
uuid:"FDA72681-FF09-4F00-9A36-444BB7958769",
view:5