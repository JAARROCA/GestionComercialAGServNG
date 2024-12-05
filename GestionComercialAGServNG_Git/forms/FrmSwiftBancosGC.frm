customProperties:"methods:{\
onDeleteRecordCmdMethodID:{\
arguments:null,\
parameters:null\
},\
onNewRecordCmdMethodID:{\
arguments:null,\
parameters:null\
},\
onPrintPreviewCmdMethodID:{\
arguments:null,\
parameters:null\
},\
onSearchCmdMethodID:{\
arguments:null,\
parameters:null\
},\
onShowAllRecordsCmdMethodID:{\
arguments:null,\
parameters:null\
}\
}",
dataSource:"db:/conexiongestioncomercialag/swiftbancos",
encapsulation:0,
extendsID:"C30088CD-E293-4201-A994-4FCC512678E2",
initialSort:"nombrebanco asc",
items:[
{
dataProviderID:"idbanco",
fontType:"Verdana,1,12",
foreground:"#0000ff",
format:"|#",
location:"132,92",
name:"lblIdBanco",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
size:"71,20",
styleClass:"noborder",
typeid:4,
uuid:"113B0520-9E04-4C72-B66E-CBC9A7558231"
},
{
location:"5,156",
size:"121,20",
text:"SWIFT/BIC",
transparent:true,
typeid:7,
uuid:"1165068F-1D3F-426C-B539-2EE576F0401D"
},
{
anchors:11,
dataProviderID:"nombrebanco",
format:"|U",
location:"132,123",
name:"fld_nombrebanco",
onActionMethodID:"991C1D8D-40EE-4AE5-8A13-2FED078D33C5",
size:"578,20",
typeid:4,
uuid:"1A5023C8-BFD1-47C0-98B7-2DAAAA4AD81C"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"263,156",
name:"lbl_requiredc",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"12,12",
toolTipText:"Obligatorio",
typeid:7,
uuid:"2051CDC8-785F-46CB-96B9-533D6B154FBB"
},
{
anchors:12,
fontType:"Segoe UI,1,12",
formIndex:14802,
imageMediaID:"F7E5FF3B-B7EB-4C97-9C5D-89324E981BB9",
location:"5,181",
mediaOptions:1,
name:"btn_histmodificaciones",
onActionMethodID:"9EC5ADFA-B410-4EAD-BB4C-BD11C1A226A7",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"185,35",
text:"Hist. Modificaciones",
typeid:7,
uuid:"27BEF7E3-DCCF-4178-AB47-557C6ADF56C3"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"206,93",
name:"lbl_codrequired",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"12,12",
toolTipText:"Obligatorio",
typeid:7,
uuid:"36BDC0CB-F267-41C7-9EC6-A69A2C48913B"
},
{
location:"5,123",
size:"121,20",
text:"Nombre",
transparent:true,
typeid:7,
uuid:"3FCE0143-DDDB-4D7F-B14D-BAE55A887191"
},
{
height:233,
partType:5,
typeid:19,
uuid:"426DE9C4-F8BD-439C-8007-DF279CAFEAF6"
},
{
extendsID:"C176239B-ECBF-48EF-ABD9-0576F29FE5C2",
location:"408,3",
size:"390,43",
typeid:16,
uuid:"5A4A2502-9D53-4BEB-BFDE-E3AE68AD74E2"
},
{
location:"5,92",
size:"121,20",
text:"Id Banco",
transparent:true,
typeid:7,
uuid:"9FFC77A9-BA07-4BA3-B20F-FEDD0CEB91F7"
},
{
anchors:3,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"712,123",
name:"lbl_required",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"12,12",
toolTipText:"Obligatorio",
typeid:7,
uuid:"A03F34FE-7D00-45B9-B7DB-9DE9BCEB7EC4"
},
{
anchors:11,
displaysTags:true,
formIndex:10100,
location:"10,4",
mediaOptions:14,
name:"lbl_section",
size:"398,41",
styleClass:"whtlg",
text:"<html> <head><\/head> <body> %%globals.GCNombreEmpresa%%<br>\
%%nombrebanco%%<\/body><\/html>\
",
transparent:true,
typeid:7,
uuid:"D8B628EF-8D3B-45D4-9AB4-29E872E3AD18"
},
{
borderType:"EtchedBorder,0,null,null",
dataProviderID:"idbanco",
format:"|#",
location:"132,92",
name:"IdBanco",
onActionMethodID:"BAC33FAD-F20B-4E91-A9BA-35C66950D966",
onDataChangeMethodID:"96026F9B-04B7-485D-A33D-AB036C4238ED",
size:"71,20",
typeid:4,
uuid:"E8772F46-A93E-42B7-B75B-9AB5542E65FA"
},
{
dataProviderID:"bic",
location:"131,156",
name:"fld_bic",
onActionMethodID:"-1",
size:"129,20",
typeid:4,
uuid:"F90968B6-64D5-4EC1-8993-60DBC3D5B931"
}
],
name:"FrmSwiftBancosGC",
navigatorID:"96264FD0-75D4-4877-AF92-008C07F790D0",
onDeleteRecordCmdMethodID:"B9C07039-1015-4D55-A30E-98455C2CC8B8",
onLoadMethodID:"D42781B6-998D-4080-8641-CCF0537CA388",
onNewRecordCmdMethodID:"D8664EE0-3D50-48CE-8B69-5DCACC2B367F",
onPrintPreviewCmdMethodID:"C7D137C7-B81B-418E-BCE5-E665F57F0C61",
onRecordSelectionMethodID:"C3574DE3-D423-42D6-B77D-0B5115E51C28",
onSearchCmdMethodID:"85198F18-E700-4434-9BA3-B0BF866D7719",
onShowAllRecordsCmdMethodID:"D4880484-DBF4-40E4-AA93-F1287484E0DA",
onShowMethodID:"777D028E-E056-4908-A7D9-315E8FBEFEE7",
scrollbars:0,
showInMenu:true,
typeid:3,
uuid:"AB3CBB39-4A33-4927-B414-700A70FC777A"