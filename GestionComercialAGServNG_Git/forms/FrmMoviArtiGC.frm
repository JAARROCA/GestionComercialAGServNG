dataSource:"db:/conexiongestioncomercialag/moviarti",
encapsulation:0,
extendsID:"CDDEA00F-5966-481B-A8C6-492725715134",
initialSort:"fecha_ms desc, cod_ms asc, tip1_ms asc",
items:[
{
dataProviderID:"fecha_ms",
displayType:5,
format:"dd-MM-yyyy",
location:"166,152",
name:"fecha_ms",
onActionMethodID:"09C35CAD-E8D8-4700-87C3-DEA7CFCC9D6E",
size:"95,20",
typeid:4,
uuid:"02A32FB0-4986-4D67-9313-FF07B0AAA9B8"
},
{
anchors:11,
borderType:"SpecialMatteBorder,1.0,0.0,0.0,0.0,#000000,#000000,#000000,#000000,0.0,",
formIndex:14805,
horizontalAlignment:4,
location:"38,312",
size:"753,2",
styleClass:"solidgrc",
typeid:7,
uuid:"0ECE84FC-A9B5-40F0-8396-7483C11DE6D1"
},
{
anchors:15,
borderType:"SpecialMatteBorder,0.0,1.0,1.0,1.0,#cccccc,#cccccc,#cccccc,#cccccc,0.0,",
formIndex:12300,
items:[
{
containsFormID:"589840D3-93A6-4654-BDA1-40F89E8A373D",
location:"63,344",
relationName:"ultimosmovimientos",
text:"lst_UltimasMovStockGC",
typeid:15,
uuid:"26B541C9-FB61-42A8-B720-BB34DC8D2B9B"
}
],
location:"37,315",
name:"tabs_mainPanel",
printable:false,
size:"560,214",
tabOrientation:-1,
typeid:16,
uuid:"0EDFBE39-176A-484F-B7C5-476243111330"
},
{
height:556,
partType:5,
typeid:19,
uuid:"13DA3562-FD0B-4126-9D05-2FD0A76AC59E"
},
{
dataProviderID:"exis_ms",
editable:false,
foreground:"#0000ff",
location:"421,233",
name:"exis_ms",
onActionMethodID:"-1",
size:"72,20",
styleClass:"noborder",
typeid:4,
uuid:"197F87F4-CD42-4E6E-BE40-2929C79521B7"
},
{
extendsID:"235F02EF-38B1-4701-914B-A6F7B1E1AD7F",
items:[
{
extendsID:"B7219E09-A2EB-43DF-A112-29BE2BDDA91E",
location:"508,13",
typeid:15,
uuid:"625243DC-08D2-413C-A756-F527355F3141"
}
],
location:"450,3",
size:"349,43",
typeid:16,
uuid:"30E214B0-DE29-4B9B-B234-5DE15AB7FE0D"
},
{
location:"40,182",
size:"120,20",
text:"Tipo de Movimiento",
transparent:true,
typeid:7,
uuid:"35D52FDB-52A9-43A9-972A-AD06403F6E3D"
},
{
location:"40,122",
size:"86,20",
text:"Articulo",
transparent:true,
typeid:7,
uuid:"394A5561-D9BC-4361-9CF0-1FE766AC6687"
},
{
dataProviderID:"ndoc_ms",
format:"|#(8)",
horizontalAlignment:0,
location:"166,207",
name:"fld_ndoc_ms",
onActionMethodID:"F1EEE94F-C4FA-4DDF-8B71-28B1002BD3C3",
size:"95,20",
typeid:4,
uuid:"3FD14F59-6324-4B56-A74E-0F0E41138CC2"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"248,122",
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
uuid:"49EA58C7-086C-49A7-A571-7055A4806873"
},
{
anchors:11,
dataProviderID:"moviarti_to_usuarios.nom_us",
foreground:"#0000ff",
location:"166,259",
size:"407,20",
transparent:true,
typeid:7,
uuid:"505B1709-D6CE-463C-9B39-9BA6E874234D"
},
{
dataProviderID:"tip1_ms",
editable:false,
horizontalAlignment:0,
location:"460,182",
name:"tip1_ms",
onActionMethodID:"-1",
size:"72,20",
styleClass:"noborder",
typeid:4,
uuid:"5EA35A50-25C6-4C4C-8104-C3DCF18B3182"
},
{
dataProviderID:"tipo_ms",
displayType:2,
editable:false,
location:"165,182",
name:"tipo_ms",
onActionMethodID:"2CE9EFE9-BA0C-4324-B22C-3D531DE9A6A6",
onDataChangeMethodID:"50F591D1-EF14-48E9-8A0B-19F8EA779F78",
size:"155,20",
typeid:4,
uuid:"6129C365-3EA7-498E-83F5-1A5B80F323F3",
valuelistID:"8AC4E049-F2B4-42C7-A49E-D0934B01361C"
},
{
location:"361,182",
size:"98,20",
text:"Nº Movimiento",
transparent:true,
typeid:7,
uuid:"61CB4035-72C6-451A-9CAB-AC7C061389DF"
},
{
horizontalAlignment:4,
location:"330,233",
size:"86,20",
text:"Stock",
transparent:true,
typeid:7,
uuid:"6F6664DC-FF92-4611-923C-0C3CB6A670A5"
},
{
dataProviderID:"cod_ms",
formIndex:1,
format:"|U",
horizontalAlignment:0,
location:"166,122",
name:"cod_ms",
onActionMethodID:"304DB504-6817-43CB-B9FF-5B006E1718E7",
onDataChangeMethodID:"9BE8ACE1-9143-4475-A669-20710C251E28",
onFocusLostMethodID:"-1",
size:"82,20",
typeid:4,
uuid:"82564A44-E03C-4B17-B43D-C15F23CB6E15"
},
{
location:"39,259",
size:"120,20",
text:"Usuario",
transparent:true,
typeid:7,
uuid:"8CA23CEB-57F9-4D86-A35C-F970057728DB"
},
{
formIndex:11108,
imageMediaID:"59872c90-974b-4c4e-b035-b56b662db3ce",
location:"142,122",
name:"BtnRefencia",
onActionMethodID:"89AF94EB-8FFD-4357-A90B-271ACAB982F3",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
showClick:false,
size:"20,20",
toolTipText:"Buscar Referencia...",
typeid:7,
uuid:"9FE4EFAF-7336-44C4-958F-C6FC96608760"
},
{
location:"311,152",
size:"5,20",
text:":",
transparent:true,
typeid:7,
uuid:"A42E8C6C-80DA-4149-945F-786FACA7A703"
},
{
anchors:11,
displaysTags:true,
fontType:"Verdana,1,12",
formIndex:10100,
location:"10,0",
mediaOptions:14,
name:"lbl_section",
size:"440,47",
styleClass:"label_whtlg",
text:"<html> <head><\/head> <body>Fecha: %%fecha_ms%%<br>\
Referencia: %%cod_ms%% %%moviarti_to_tbmaestroarticulos.descripcion%%<\/body><\/html>\
",
transparent:true,
typeid:7,
uuid:"A9DFFE40-D9A2-4D71-B923-265C0027013C"
},
{
location:"40,207",
size:"120,20",
text:"Documento",
transparent:true,
typeid:7,
uuid:"AABCBC6A-09B0-4A91-8472-244EF2AF6CB2"
},
{
formIndex:10800,
location:"38,287",
mediaOptions:14,
name:"lblLineas",
onActionMethodID:"-1",
showClick:false,
showFocus:false,
size:"108,25",
styleClass:"label_darkgrc",
text:"Ult. Movimientos",
typeid:7,
uuid:"AF0FFA09-2C98-4512-AB08-8AAE4F9D7DBE"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"322,182",
name:"lbl_codrequiredccc",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"12,12",
toolTipText:"Obligatorio",
typeid:7,
uuid:"BA06328F-B7E8-4BA3-A84B-FE8B4FE3D7F1"
},
{
location:"40,152",
size:"119,20",
text:"Fecha / Hora",
transparent:true,
typeid:7,
uuid:"BD6517ED-BAA9-4BFC-B696-9B3F4F4B5850"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"241,232",
name:"lbl_codrequiredcccc",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"12,12",
toolTipText:"Obligatorio",
typeid:7,
uuid:"C3BC52FA-01EA-475A-9EAD-87C7D71F999B"
},
{
anchors:11,
dataProviderID:"moviarti_to_tbmaestroarticulos.descripcion",
foreground:"#0000ff",
location:"260,122",
size:"353,20",
transparent:true,
typeid:7,
uuid:"C3D6FDCC-285C-4BDC-A4C7-57454055360D"
},
{
dataProviderID:"nusu_ms",
editable:false,
horizontalAlignment:0,
location:"197,284",
name:"nusu_ms",
onActionMethodID:"-1",
size:"72,20",
styleClass:"noborder",
typeid:4,
uuid:"C5C91971-8700-403C-9FF6-20129C556429",
visible:false
},
{
anchors:3,
fontType:"Segoe UI,1,12",
formIndex:14802,
imageMediaID:"34493176-806E-48F7-AAFE-0C87EF7194EA",
location:"602,316",
mediaOptions:1,
name:"btn_Articulo",
onActionMethodID:"4569634E-9353-46EA-9291-EABE49D2C715",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"190,35",
text:"BD Articulos",
typeid:7,
uuid:"CBED4D72-5822-4130-82D5-675FE4C6A060"
},
{
location:"40,232",
size:"120,20",
text:"Cantidad",
transparent:true,
typeid:7,
uuid:"D24EBCB3-0258-4ABD-B709-C04AC3527DB3"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"349,152",
name:"lbl_codrequiredcc",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"12,12",
toolTipText:"Obligatorio",
typeid:7,
uuid:"DCA45672-8159-445D-96B8-88FF10CA9AE0"
},
{
dataProviderID:"fecha_ms",
format:"HH",
horizontalAlignment:0,
location:"279,152",
name:"hfech_ms",
onActionMethodID:"304DB504-6817-43CB-B9FF-5B006E1718E7",
onFocusLostMethodID:"-1",
size:"31,20",
typeid:4,
uuid:"DF0DA2E4-B28C-45D9-AA4C-54A5DF2CF888"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"262,152",
name:"lbl_codrequiredc",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"12,12",
toolTipText:"Obligatorio",
typeid:7,
uuid:"E6F390D5-8F77-4DB4-A87F-400A0530DF77"
},
{
dataProviderID:"movi_ms",
horizontalAlignment:0,
location:"166,232",
name:"movi_ms",
onActionMethodID:"0C511524-92A9-41EB-91BE-10E2BF42B3C9",
onDataChangeMethodID:"FFE0EED8-EE83-44BB-AD51-7187F84F163C",
onFocusLostMethodID:"-1",
size:"72,20",
typeid:4,
uuid:"F4B45B8B-8139-436B-A665-A1B0E07E2F98"
},
{
dataProviderID:"fecha_ms",
format:"mm",
horizontalAlignment:0,
location:"317,152",
name:"mfech_ms",
onActionMethodID:"304DB504-6817-43CB-B9FF-5B006E1718E7",
onFocusLostMethodID:"-1",
size:"31,20",
typeid:4,
uuid:"F6BE908F-08DD-4BEB-89D8-882573344081"
},
{
dataProviderID:"cod_ms",
editable:false,
foreground:"#0000ff",
format:"|U",
horizontalAlignment:0,
location:"166,122",
name:"lblcodigo",
onDataChangeMethodID:"-1",
size:"82,20",
styleClass:"noborder",
transparent:true,
typeid:4,
uuid:"FF9C0B55-288B-4F8F-BD66-C7B552C3779D"
}
],
name:"FrmMoviArtiGC",
navigatorID:"C0B08875-048E-49F0-8D4E-597173A8E397",
onLoadMethodID:"2766E2DF-4161-4562-A7AE-10F767633D11",
onNextRecordCmdMethodID:"DAB40BE1-1036-4EE6-95D4-31DE1D0870FE",
onRecordSelectionMethodID:"39671994-85F9-4C36-B711-41E5800F9586",
onShowMethodID:"E1F112D6-D12C-4B78-963D-FEBA86C15A97",
scrollbars:0,
showInMenu:true,
typeid:3,
uuid:"7201B2B2-2081-4C4B-B7C0-2C52DC588FCD"