borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/tbmaestroobservaciones",
extendsID:"-1",
initialSort:"codigo asc",
items:[
{
json:{
dataProviderID:"scopes.globals.GCnav_search2",
location:{
x:4,
y:6
},
onActionMethodID:"598170F5-034E-430C-BC4E-7B55F3ED8EA7",
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
uuid:"013B90E4-F107-447D-A6C7-50FDDFF91C6C"
},
{
formIndex:1,
imageMediaID:"914C1DE9-1055-41D9-8BCE-2AA18CA7419F",
location:"125,14",
mediaOptions:14,
name:"btnClearSearch",
onActionMethodID:"87640C6D-973D-45C4-BD22-DBFC64A2B933",
rolloverImageMediaID:"8A1F4F07-53C3-4EA9-B9C7-399445FA45DD",
showClick:false,
showFocus:false,
size:"14,14",
typeid:7,
uuid:"0A274CF5-1DD7-4E15-998B-CF9A0996408E"
},
{
json:{
imageStyleClass:"fa fa-search",
location:{
x:144,
y:6
},
onActionMethodID:"598170F5-034E-430C-BC4E-7B55F3ED8EA7",
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
uuid:"1680E7CB-F52F-4442-B85F-6D6B97D0F733"
},
{
anchors:15,
json:{
anchors:15,
columns:[
{
dataprovider:"codigo",
headerTitle:"CÓDIGO",
id:"codigo",
maxWidth:150,
styleClassDataprovider:null,
svyUUID:"7C79422E-7522-4DCF-867F-7978CD4BDAB0"
},
{
dataprovider:"descripcion",
headerTitle:"DESCRIPCIÓN",
id:"descripcion",
styleClassDataprovider:null,
svyUUID:"FDFC2332-1D09-49E8-BFC4-41EAF3BA4B99"
}
],
location:{
x:4,
y:48
},
onCellClick:"FE352C67-EFCA-4C61-B8BD-ACFFBDE07EBE",
size:{
height:341,
width:751
}
},
location:"4,48",
name:"datagrid_formaspago",
size:"751,341",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"47E15A34-22FD-4DE2-BFAD-9CD07B6E30DD"
},
{
height:389,
partType:2,
typeid:19,
uuid:"9A2ADB40-25EA-4AA1-8B96-B567C219BEED"
},
{
height:399,
partType:5,
typeid:19,
uuid:"D8AF851B-8F8C-49D7-B069-18009D348592"
}
],
name:"dlgObservacionGCNG",
navigatorID:"-1",
onFindCmdMethodID:"F2AE4297-AA6F-4410-BF16-4DA7D1C6105C",
onLoadMethodID:"D9639414-3A36-4F08-B74C-E7067240AC5E",
onSearchCmdMethodID:"FAE2E2D4-2FBD-479D-9FD5-DF1E4DA596B6",
onShowMethodID:"A6D335EB-C863-4B5A-B062-77F9542BBAF9",
paperPrintScale:100,
size:"756,399",
styleName:"svyWebCrm",
typeid:3,
uuid:"B68FA688-A4BD-46D1-98F9-6D10330928FA",
view:3