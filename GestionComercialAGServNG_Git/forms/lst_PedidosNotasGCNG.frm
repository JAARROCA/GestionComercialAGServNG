borderType:"EmptyBorder,0,0,0,0",
customProperties:"useMinHeight:false,\
useMinWidth:false",
dataSource:"db:/conexiongestioncomercialag/cortrabanotas",
items:[
{
height:272,
partType:5,
typeid:19,
uuid:"7426C67F-1AE9-4A53-A051-0773694E34DB"
},
{
json:{
imageStyleClass:"fas fa-plus",
location:{
x:3,
y:4
},
onActionMethodID:"60AAFE23-F307-4BC4-A11F-23383CAA2583",
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
uuid:"BCF4AC80-E95D-421C-82CB-5616F58E1E7E"
},
{
height:261,
partType:2,
typeid:19,
uuid:"E95A79C9-FD94-4C6F-BACD-DDE8AD7E76F8"
},
{
anchors:15,
json:{
anchors:15,
columns:[
{
id:"editar",
maxWidth:50,
styleClass:"fa fa-pencil",
svyUUID:"D0ABF925-316B-4F64-8D03-599DCE6060C4"
},
{
id:"borrar",
maxWidth:50,
styleClass:"fa fa-trash",
svyUUID:"6FFF65F2-43AB-409A-9402-970D61B307AD"
},
{
dataprovider:"icon_pdf",
id:"icon_pdf",
maxWidth:50,
showAs:"sanitizedHtml",
styleClassDataprovider:null,
svyUUID:"06BDB8E4-7339-495B-BF3B-F49BBA5D2D55"
},
{
dataprovider:"fecha",
format:"dd-MM-yyyy",
headerTitle:"FECHA",
id:"fecha",
styleClassDataprovider:null,
svyUUID:"875425B5-59CB-42C2-99F5-F73156C36C01"
},
{
dataprovider:"nota",
headerTitle:"NOTA",
id:"nota",
styleClassDataprovider:null,
svyUUID:"9FE8A025-0272-4982-BB71-53B874C8018A"
}
],
location:{
x:41,
y:4
},
onCellClick:"0A23481E-39CB-48D2-A05E-BAE22C16D766",
onCellDoubleClick:"F8938A4D-C7ED-4C66-AB19-1B6C5FAF64B3",
size:{
height:256,
width:641
},
styleClass:"ag-theme-servoy",
toolPanelConfig:{
suppressColumnSelectAll:true,
suppressRowGroups:true,
suppressSideButtons:true,
svyUUID:"D25E011D-4FA6-4D2B-8BF3-C516D8C97D45"
}
},
location:"41,4",
name:"table_PedidoNotas",
size:"641,256",
styleClass:"ag-theme-servoy",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"F29E0A1E-AC4B-4254-BE6C-0FFFB2671913"
}
],
name:"lst_PedidosNotasGCNG",
onLoadMethodID:"-1",
onShowMethodID:"64EF7681-59EB-42DD-B00E-FCA46EA2C6E9",
paperPrintScale:100,
scrollbars:33,
size:"687,272",
styleName:"svyWebCrm",
typeid:3,
uuid:"91235705-5C34-4D06-9F8F-432D0A0D6164",
view:3