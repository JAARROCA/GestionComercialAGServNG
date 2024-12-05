borderType:"EmptyBorder,0,0,0,0",
customProperties:"useMinHeight:false,\
useMinWidth:false",
dataSource:"db:/conexiongestioncomercialag/efectos",
items:[
{
anchors:15,
json:{
anchors:15,
columns:[
{
id:"editar",
maxWidth:50,
styleClass:"fa fa-pencil",
svyUUID:"EB541FBE-F769-4EA4-B7C6-53A5A1A1798F"
},
{
id:"duplicar",
maxWidth:50,
styleClass:"fa fa-copy",
svyUUID:"9D06AB53-F576-47A2-82EA-B319F0249E94"
},
{
dataprovider:"nli_ef",
headerTitle:"LÍNEA",
id:"nli_ef",
styleClassDataprovider:null,
svyUUID:"67858ACC-B030-41FF-A290-9AE4036B01F9"
},
{
dataprovider:"fecha_ef",
format:"dd-MM-yyyy",
headerTitle:"FECHA",
id:"fecha_ef",
styleClassDataprovider:null,
svyUUID:"BAB53D37-C4C7-4B1F-8572-2CB3161C31F6"
},
{
dataprovider:"impo_ef",
format:"###,##0.00",
headerTitle:"IMPORTE",
id:"impo_ef",
styleClassDataprovider:null,
svyUUID:"4E1E0F6C-FFF9-4AB9-BA66-3B37F1D2EEA0"
},
{
dataprovider:"cfpa_ef",
headerTitle:"FORMA PAGO",
id:"cfpa_ef",
styleClassDataprovider:null,
svyUUID:"77946AAD-D060-42AC-A6B1-7D15B541B14A"
},
{
dataprovider:"GCefectos_to_tbmaestroformpago.denom_fp",
id:"GCefectos_to_tbmaestroformpago.denom_fp",
styleClassDataprovider:null,
svyUUID:"458D8D26-78EB-480F-A738-281C17241931"
}
],
location:{
x:39,
y:4
},
onCellClick:"D10C2B4E-7151-4A3D-8DF8-471994586C9E",
onCellDoubleClick:"E3DC6B78-6D65-4B2E-9FBD-34A57F717C80",
size:{
height:256,
width:564
},
styleClass:"ag-theme-servoy",
toolPanelConfig:{
suppressColumnSelectAll:true,
suppressRowGroups:true,
suppressSideButtons:true,
svyUUID:"008D7393-F911-4D78-B171-4B3BB624CBEC"
}
},
location:"39,4",
name:"table_FacturaEfectos",
size:"564,256",
styleClass:"ag-theme-servoy",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"0A7D2D43-C1DF-44EB-9541-53A0F4448F1F"
},
{
height:272,
partType:5,
typeid:19,
uuid:"1C5FE27D-18FC-4C51-897A-D5DDA3CB80ED"
},
{
height:261,
partType:2,
typeid:19,
uuid:"20D8C558-0A40-49F1-BB6D-3E4716431E9B"
},
{
json:{
imageStyleClass:"fas fa-plus",
location:{
x:3,
y:4
},
onActionMethodID:"D328A540-C884-458B-9A72-CBEA4BBE74E9",
size:{
height:35,
width:35
},
styleClass:"btn btn-success",
toolTipText:"Añadir nueva linea"
},
location:"3,4",
name:"button_1",
size:"35,35",
styleClass:"btn btn-success",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"7C6F9490-81C8-4551-A85E-E76046D7FE8F"
}
],
name:"lst_EfectosFacturaGCNG",
onLoadMethodID:"-1",
onShowMethodID:"23FBF8FA-EEF7-4F9F-96C5-B255587BB63C",
paperPrintScale:100,
scrollbars:33,
size:"605,272",
styleName:"svyWebCrm",
typeid:3,
uuid:"98558940-F5C3-4FF7-87ED-F9DC1F599D56",
view:3