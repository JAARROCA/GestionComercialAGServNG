dataSource:"db:/conexiongestioncomercialag/cofertas",
extendsID:"F634A30A-6124-4707-8048-FCB91740992C",
items:[
{
anchors:9,
dataProviderID:"cdpcl_cof",
format:"|#[5]",
horizontalAlignment:0,
location:"106,181",
name:"fld_cdpcl_cof",
onActionMethodID:"38DAD607-F041-4DFD-9D78-8792207D07D2",
onDataChangeMethodID:"357A6F80-E037-484A-A71A-2D04CC38B24A",
selectOnEnter:true,
size:"76,20",
tabSeq:5,
typeid:4,
uuid:"01051C22-5931-4E38-B1D9-03CB210937CE"
},
{
dataProviderID:"fechavalidez_cof",
displayType:5,
format:"dd-MM-yyyy",
location:"578,279",
name:"fld_fechavalidez_cof",
size:"130,20",
tabSeq:15,
typeid:4,
uuid:"03B89AD3-BC87-4C99-A4B3-D541C3EAE2EE"
},
{
anchors:3,
displaysTags:true,
formIndex:14800,
imageMediaID:"7304EAA8-7F6F-4029-BC18-B5204E4E5177",
location:"499,131",
mediaOptions:14,
name:"btn_googlemaps",
onActionMethodID:"DB6DFC8B-4F38-49DF-BD8F-E74B683272B0",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
tabSeq:-2,
toolTipText:"Ver dirección",
transparent:true,
typeid:7,
uuid:"04E6ABF9-27D1-4285-A49C-6DDC2A66E781"
},
{
anchors:3,
formIndex:11300,
location:"543,131",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"101,22",
tabSeq:-2,
text:"Dto. PPGO (%)",
transparent:true,
typeid:7,
uuid:"05024627-CDAE-4F35-B77E-99B8170A344F"
},
{
anchors:11,
dataProviderID:"pobcl_cof",
format:"|U",
location:"106,157",
name:"fld_pobcl_cof",
onActionMethodID:"2E61D8B6-7DF6-4950-897A-AB6B3A53DCB6",
selectOnEnter:true,
size:"389,20",
tabSeq:4,
typeid:4,
uuid:"06737A59-FA48-4E09-BCC4-EC18B6F59F80"
},
{
anchors:3,
location:"245,255",
size:"97,20",
tabSeq:-2,
text:"Hace la Oferta",
transparent:true,
typeid:7,
uuid:"07403C68-969E-4FE9-B212-E872D8DCCA90"
},
{
anchors:3,
horizontalAlignment:4,
location:"460,301",
size:"111,20",
text:"Usuario registró",
transparent:true,
typeid:7,
uuid:"0CE92D1B-B7F8-4F43-B4D1-23E0FE694A56"
},
{
extendsID:"EEC923D4-1CEE-4B37-8D04-DE88143F6282",
tabSeq:-2,
typeid:7,
uuid:"1A67BA6E-A4A5-49B9-B3F3-DCF32A9F00E6"
},
{
anchors:15,
json:{
anchors:15,
height:"100%",
location:{
x:5,
y:332
},
size:{
height:252,
width:590
},
styleClass:"nav nav-pills li",
tabs:[
{
containedForm:"015458A9-606D-4EE1-B364-9FCEB2138854",
iconStyleClass:"fas fa-grip-lines",
name:"Presupuesto_Lineas",
relationName:"GCcofertas_to_lofertas",
svyUUID:"9B7AD8B2-AF4F-4B9B-8DEE-AB56EBA994A1",
text:"LÍNEAS"
},
{
containedForm:"0C17DFB2-366B-4D79-817B-7886C3C3B3E2",
iconStyleClass:"fas fa-archive",
name:"Presupuesto_Notas",
relationName:"gccofertas_to_lofertasnotas",
styleClass:"nav-tabs li a",
svyUUID:"9C71A0E4-FB34-41EF-8930-A9E251E1D581",
text:"NOTAS/DOCUMENTACIÓN ADJUNTA"
}
]
},
location:"5,332",
name:"tabs_mainPanelpresupuestos",
size:"590,252",
styleClass:"nav nav-pills li",
typeName:"bootstrapcomponents-tabpanel",
typeid:47,
uuid:"1DD393CA-7D0C-4770-B5C7-A6C618856870"
},
{
anchors:3,
dataProviderID:"impcie_cof",
editable:false,
foreground:"#0000ff",
formIndex:11400,
format:"###,###,##0.00",
location:"714,156",
name:"impcie_cof",
size:"82,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"1FC512EE-5F78-441E-ABFC-C569BC0CAE62"
},
{
extendsID:"364AFEFD-99DA-4AAC-8A72-0C535224A087",
tabSeq:-2,
typeid:7,
uuid:"1FE19F84-1C98-4664-B7F6-6318F6CD0924"
},
{
extendsID:"60C2761E-7FF6-47D7-8C5D-F0E7D549537E",
tabSeq:-2,
typeid:7,
uuid:"211F19FB-0739-4DF2-AA58-D722D6EE3550"
},
{
anchors:11,
displaysTags:true,
formIndex:10100,
location:"51,0",
mediaOptions:14,
name:"lbl_section",
size:"347,46",
styleClass:"label_whtlg",
tabSeq:-2,
text:"<html> <head><\/head> <body> Presupuesto: %%cod_cof%%  - %%nomcl_cof%%<\/body><\/html>\
\
",
transparent:true,
typeid:7,
uuid:"22EA7966-2533-42FA-B782-41081E92E7D0"
},
{
anchors:3,
dataProviderID:"impnee_cof",
editable:false,
fontType:"Verdana,1,13",
foreground:"#ff0000",
formIndex:11400,
format:"###,###,##0.00¤",
horizontalAlignment:4,
location:"655,182",
name:"impnee_cof",
size:"101,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"2647B05C-D40A-42D0-BDDD-7BCDE93C0385"
},
{
extendsID:"8833CCB9-D79F-4D0C-8047-B741AF30795C",
tabSeq:-2,
typeid:7,
uuid:"2A50395E-66AB-4D85-9C81-7BEFC5D4940B"
},
{
anchors:3,
formIndex:11300,
location:"543,156",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"102,22",
tabSeq:-2,
text:"I.V.A.",
transparent:true,
typeid:7,
uuid:"2B29A4B4-2F9B-45F4-A465-D4028AFBA613"
},
{
location:"6,255",
size:"89,20",
tabSeq:-2,
text:"Portes",
transparent:true,
typeid:7,
uuid:"2E7352EE-5037-4772-B190-74C4832FA199"
},
{
anchors:9,
dataProviderID:"faxcl_cof",
format:"|#",
horizontalAlignment:0,
location:"651,207",
name:"fld_faxcl_cof",
onActionMethodID:"0A9713A4-3E58-4978-833D-726D2BC524D6",
selectOnEnter:true,
size:"102,20",
tabSeq:9,
typeid:4,
uuid:"2F706FE3-0EDC-4F83-AD41-9804C5AE2F5A"
},
{
json:{
location:{
x:71,
y:107
},
onActionMethodID:"14D76B0B-1D70-41FD-9C31-29265F24D7AC",
size:{
height:20,
width:32
},
styleClass:"btn btn-primary",
text:"?",
toolTipText:"Buscar Cliente..."
},
location:"71,107",
name:"BtnCliente",
size:"32,20",
styleClass:"btn btn-primary",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"42A93202-D313-45ED-8D12-B26952D67703"
},
{
anchors:3,
formIndex:11300,
location:"543,107",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"101,22",
tabSeq:-2,
text:"PAGO ANTICIPO",
transparent:true,
typeid:7,
uuid:"46F77216-586F-4860-94EC-0118BF3B848E"
},
{
height:600,
partType:5,
typeid:19,
uuid:"473D166E-6237-476E-89BE-FCBB0D46AC81"
},
{
location:"6,230",
size:"89,20",
tabSeq:-2,
text:"Referencia",
transparent:true,
typeid:7,
uuid:"47828138-401C-4EB2-8CCE-8BDB119EA504"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"483,81",
name:"lbl_requiredc",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"12,12",
tabSeq:-2,
toolTipText:"Obligatorio",
typeid:7,
uuid:"4A150DB7-469A-4859-B771-4776402BF7B1"
},
{
location:"5,157",
size:"89,20",
tabSeq:-2,
text:"Población",
transparent:true,
typeid:7,
uuid:"4BE39AA4-86E8-4718-A65D-EF28A67A3B3F"
},
{
anchors:9,
location:"5,181",
size:"94,20",
tabSeq:-2,
text:"Código Postal",
transparent:true,
typeid:7,
uuid:"4C4BCB8B-386B-467C-AFE4-A662A8879F87"
},
{
anchors:3,
fontType:"Segoe UI,1,12",
formIndex:14801,
imageMediaID:"A96D7DEC-489E-42CD-960A-B6F3B1999810",
location:"602,443",
mediaOptions:1,
name:"btnGenFactura",
onActionMethodID:"8DA9EFCA-E9BD-4582-B5CC-023931B8EB58",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"183,37",
styleClass:"button",
tabSeq:-2,
text:"Generar Factura",
typeid:7,
uuid:"4EB8CE4A-57AF-4ACE-AC1D-6FD90B1C36BB"
},
{
dataProviderID:"fechavalidez_cof",
foreground:"#0000ff",
formIndex:1,
format:"dd-MM-yyyy",
location:"578,279",
name:"lblfechavalidez_cof",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"50DF2E95-6D27-4317-861C-2F5145475340"
},
{
anchors:3,
dataProviderID:"hace_cof",
format:"|U",
location:"348,255",
name:"fld_hce_cof",
onActionMethodID:"-1",
selectOnEnter:true,
size:"139,20",
tabSeq:13,
typeid:4,
uuid:"513A313E-36EC-4A25-9A1F-E494C3004612"
},
{
location:"5,131",
size:"89,20",
tabSeq:-2,
text:"Dirección",
transparent:true,
typeid:7,
uuid:"55C946D1-BDB6-4492-B8EF-D84533FF737C"
},
{
json:{
location:{
x:84,
y:279
},
onActionMethodID:"B14EE474-5634-4104-BCCE-C9AC1B1F05C9",
size:{
height:20,
width:32
},
styleClass:"btn btn-primary",
text:"?",
toolTipText:"Buscar Forma de Pago..."
},
location:"84,279",
name:"BtnFormaPago",
size:"32,20",
styleClass:"btn btn-primary",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"5EC606C2-F70F-4CE6-92DE-342EEDAC12A3"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"712,279",
name:"lbl_requiredcc",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"12,12",
tabSeq:-2,
toolTipText:"Obligatorio",
typeid:7,
uuid:"5F57EF24-CF58-4829-AD14-95918A6551EB"
},
{
location:"224,181",
size:"67,20",
tabSeq:-2,
text:"Provincia",
transparent:true,
typeid:7,
uuid:"61888299-3AC0-45BC-A6AB-3B7D421671B8"
},
{
dataProviderID:"procl_cof",
horizontalAlignment:0,
location:"296,181",
name:"fld_procl_cof",
onActionMethodID:"49052EFD-1647-4E07-B5C3-5387AAB9E8CB",
selectOnEnter:true,
size:"148,20",
tabSeq:6,
typeid:4,
uuid:"64473CD2-226F-40CB-986D-F2718D72844E",
valuelistID:"8BD0A1B4-F919-4E5B-8921-0330914D30F2"
},
{
extendsID:"95BADE3C-1607-4ADB-B39E-4AF2BDF0453E",
items:[
{
extendsID:"113E1927-2864-4374-803E-859E7243F1AD",
location:"456,13",
typeid:15,
uuid:"3558B81C-75AB-4F1F-8465-06D2C9411740"
}
],
location:"398,0",
size:"400,46",
tabSeq:17,
typeid:16,
uuid:"6962C645-EF9C-49BD-99F6-F3088795CB1F"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"E1094464-0BD2-4E82-8A80-B39E5E170B84",
location:"390,207",
name:"BtnContactos",
onActionMethodID:"A90B6E76-E628-45C2-ACDC-BCF8AC8347D5",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
tabSeq:22,
toolTipText:"Otros Contactos...",
typeid:7,
uuid:"6B065CBE-5617-4478-A79A-D6CAD323525F"
},
{
dataProviderID:"clie_cof",
format:"0|#(5)",
horizontalAlignment:0,
location:"106,106",
name:"fld_clie_cof",
onActionMethodID:"4D81529F-DB15-471C-BC32-5763BE67A6BB",
onDataChangeMethodID:"460CE6E9-1C0B-4FE3-B52E-F6513BDF2639",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"56,20",
tabSeq:1,
typeid:4,
uuid:"75BEF415-7AC9-4E91-84FC-7534AA84E10E"
},
{
dataProviderID:"rcli_cof",
format:"|U",
location:"106,230",
name:"fld_rcli_cof",
onActionMethodID:"7AF5617A-BA0B-4BE7-B9B7-1A94B53A1A2B",
selectOnEnter:true,
size:"281,20",
tabSeq:10,
typeid:4,
uuid:"7A0A4910-EFD1-4FB6-928F-40AD3D5551B0"
},
{
anchors:3,
location:"548,255",
size:"87,20",
tabSeq:-2,
text:"Situación",
transparent:true,
typeid:7,
uuid:"7ABD742C-45AE-41C7-8E1B-D2525910BEA7"
},
{
anchors:3,
dataProviderID:"piva_cof",
formIndex:11400,
format:"#0.00",
horizontalAlignment:4,
location:"655,156",
name:"fld_piva_cof",
onActionMethodID:"213887FA-E915-4F04-920B-75349CFF7971",
onDataChangeMethodID:"242AA847-C26C-4550-8436-8708FF21EFC0",
onFocusLostMethodID:"-1",
size:"55,20",
tabSeq:21,
typeid:4,
uuid:"7E5970A7-557E-4EC4-9326-83E0A7F1CB75"
},
{
dataProviderID:"cfpa_cof",
horizontalAlignment:0,
location:"119,279",
name:"fld_cfpa_cof",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"45,20",
tabSeq:24,
typeid:4,
uuid:"83049017-5544-4F2A-9A48-931B94261791"
},
{
location:"6,107",
size:"64,20",
tabSeq:-2,
text:"Cliente",
transparent:true,
typeid:7,
uuid:"86C72E54-0A82-40E6-BEBF-C4F0A262289D"
},
{
anchors:3,
enabled:false,
fontType:"Segoe UI,1,12",
formIndex:14801,
imageMediaID:"BE393915-6255-4290-AA19-0D58A89CC134",
location:"602,480",
mediaOptions:1,
name:"btnGenFacturaProforma",
onActionMethodID:"1FE307F5-71A3-42AB-B3FD-0C8BA741D84A",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"183,37",
styleClass:"button",
tabSeq:-2,
text:"Factura Profroma",
typeid:7,
uuid:"8BA2E661-0825-413B-AF94-500D04E66E6D"
},
{
location:"5,81",
size:"89,20",
tabSeq:-2,
text:"Presupuesto",
transparent:true,
typeid:7,
uuid:"90F458C7-F60E-4786-B15D-254B8D9D5D46"
},
{
anchors:9,
dataProviderID:"telcl_cof",
format:"|#",
horizontalAlignment:0,
location:"492,207",
name:"fld_telcl_cof",
onActionMethodID:"38DAD607-F041-4DFD-9D78-8792207D07D2",
selectOnEnter:true,
size:"87,20",
tabSeq:8,
typeid:4,
uuid:"96AA5DFC-46E5-4CAE-B063-313D525362FF"
},
{
anchors:11,
dataProviderID:"gccofertas_to_tbmaestroformpago.denom_fp",
foreground:"#0000ff",
location:"168,279",
size:"314,20",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"98B15CDE-C414-4240-A527-193CA837D128"
},
{
anchors:3,
dataProviderID:"gccofertas_to_usuarios.nom_us",
fontType:"Verdana,1,8",
foreground:"#0000ff",
location:"576,301",
name:"lblusu",
size:"195,20",
transparent:true,
typeid:7,
uuid:"98C5C6E0-0B86-4498-8425-2ACCA94A301C"
},
{
anchors:3,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"490,106",
name:"lbl_required",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"12,12",
tabSeq:-2,
toolTipText:"Obligatorio",
typeid:7,
uuid:"99AC7914-E915-49A4-B32F-9B77E1256878"
},
{
extendsID:"5E4F99D6-7A7A-4F4A-B4C1-CC5605611E21",
tabSeq:-2,
typeid:7,
uuid:"9BBD7399-2624-4071-ACC8-939922D9022C"
},
{
dataProviderID:"fecha_cof",
displayType:5,
format:"dd-MM-yyyy",
location:"348,81",
name:"fld_fecha_cof",
onActionMethodID:"BD9DE74A-65AD-433B-90E1-BCD81D67EA6A",
onDataChangeMethodID:"4B0447B3-E062-4670-A14F-CCF9770DDE19",
selectOnEnter:true,
size:"130,20",
tabSeq:18,
typeid:4,
uuid:"9DC15023-4386-40E7-92EB-9AE24E211BAF"
},
{
location:"486,279",
size:"86,20",
tabSeq:-2,
text:"Fecha Validez",
transparent:true,
typeid:7,
uuid:"A41CA77D-CF68-407C-AF95-B539CBC9A448"
},
{
json:{
imageStyleClass:"fas fa fa-list",
location:{
x:3,
y:5
},
onActionMethodID:"7F63607F-77D6-4E29-AE1A-14C58DB2A3BA",
size:{
height:30,
width:42
},
toolTipText:"Listado Presupuestos"
},
location:"3,5",
name:"btn_listadoPresupuestos",
size:"42,30",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"A501DF57-3AB5-423E-92B3-59A4D0531B82"
},
{
anchors:11,
dataProviderID:"portes_cof",
location:"107,255",
name:"fld_portes_cof",
onActionMethodID:"39A027D3-99E1-46B7-A198-1E10BF4DF0FB",
selectOnEnter:true,
size:"133,20",
tabSeq:12,
typeid:4,
uuid:"AA54B025-4953-4405-8C2F-E5E2C38EDEFF"
},
{
anchors:3,
formIndex:11300,
location:"543,81",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"101,22",
tabSeq:-2,
text:"Importe Bruto",
transparent:true,
typeid:7,
uuid:"AD50A6E4-993D-41BB-9AD0-ED496682BD1D"
},
{
anchors:11,
dataProviderID:"dircl_cof",
format:"|U",
location:"106,132",
name:"fld_dircl_cof",
onActionMethodID:"0B42978D-166C-4C95-8168-D5DA5C92169B",
selectOnEnter:true,
size:"389,20",
tabSeq:3,
typeid:4,
uuid:"B0AF10CD-0CD4-44FB-8800-3FCCACE757F5"
},
{
anchors:3,
fontType:"Segoe UI,1,12",
formIndex:14802,
imageMediaID:"E1094464-0BD2-4E82-8A80-B39E5E170B84",
location:"602,332",
mediaOptions:1,
name:"btn_Cliente",
onActionMethodID:"299569FB-8D90-4831-B8B3-EBB135CA2169",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"183,37",
styleClass:"button",
tabSeq:-2,
text:"BD Clientes",
typeid:7,
uuid:"B0FC69B6-02AD-4DD1-AFC3-7D2B89327F2C"
},
{
dataProviderID:"cod_cof",
fontType:"Verdana,1,16",
foreground:"#ff0000",
format:"00000",
location:"100,81",
name:"cod_cof",
size:"100,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"B9E895CD-E5B2-4859-97D7-0878599EFBD6"
},
{
anchors:3,
dataProviderID:"situ_cof",
displayType:2,
editable:false,
formIndex:1,
location:"640,255",
name:"situ_cof",
size:"131,20",
tabSeq:14,
typeid:4,
uuid:"BA2EE993-9B81-4F39-8026-77E636015393",
valuelistID:"D101DB8A-381A-4317-BF4E-D58E977F1B8B"
},
{
anchors:3,
dataProviderID:"Situacion",
fontType:"Verdana,1,10",
foreground:"#ff0000",
location:"640,255",
name:"lblsitu_cof",
size:"131,20",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"C4716923-34C2-4676-9C8E-3560F1D4AB2F"
},
{
anchors:11,
dataProviderID:"nomcl_cof",
format:"|U",
location:"164,106",
name:"fld_nomcl_cof",
onActionMethodID:"0546BB91-EA0C-4B40-9CF2-DC8565EA35C2",
selectOnEnter:true,
size:"325,20",
tabSeq:2,
typeid:4,
uuid:"C4DBF15E-22E0-4CC0-BE6A-0030B9D50F61"
},
{
location:"7,279",
size:"78,20",
tabSeq:-2,
text:"Forma Pago",
transparent:true,
typeid:7,
uuid:"CB6A1CF0-4264-4050-8B49-C630F93B15F9"
},
{
anchors:3,
fontType:"Segoe UI,1,12",
formIndex:14801,
imageMediaID:"9db178bf-0cf0-4b26-959e-f825c8e467c1",
location:"602,518",
mediaOptions:1,
name:"btnEnvMail",
onActionMethodID:"69ACF0E3-5777-40E8-934B-1EB7384DDC72",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"183,37",
styleClass:"button",
tabSeq:-2,
text:"Enviar por EMail",
typeid:7,
uuid:"CE0762AC-10BD-4CC4-BC49-7406ECC54920"
},
{
anchors:3,
formIndex:11300,
location:"543,182",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"107,22",
tabSeq:-2,
text:"NETO PRESUPUESTO",
transparent:true,
typeid:7,
uuid:"CE753EB8-D0B7-427A-8231-B59E845074FE"
},
{
anchors:3,
fontType:"Segoe UI,1,12",
formIndex:14801,
imageMediaID:"9D721D33-A507-4E3F-BAAE-92DC14F6B393",
location:"602,369",
mediaOptions:1,
name:"btnGenPed",
onActionMethodID:"A28E558E-3EEB-416A-AE43-0230AEDAF910",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"183,37",
styleClass:"button",
tabSeq:25,
text:"Generar Pedido",
typeid:7,
uuid:"D006EC2E-E5E5-435A-A359-B01267908249"
},
{
location:"293,82",
size:"54,20",
tabSeq:-2,
text:"Fecha",
transparent:true,
typeid:7,
uuid:"D76BABEB-C9B5-4475-A84A-066D580734A8"
},
{
anchors:9,
location:"423,232",
size:"69,20",
tabSeq:-2,
text:"EMail",
transparent:true,
typeid:7,
uuid:"D77EBC36-BA53-4BAB-B52F-8FA98DC06BAC"
},
{
dataProviderID:"attcl_cof",
format:"|U",
location:"106,207",
name:"fld_attcl_cof",
onActionMethodID:"24C39BDF-BEFE-4C34-8DFB-32843204A640",
selectOnEnter:true,
size:"281,20",
tabSeq:7,
typeid:4,
uuid:"D9CC20E1-AC74-4E3F-9D81-4D97968FF342"
},
{
extendsID:"92BD84F7-65CC-4126-A97D-F9AE31558CB7",
tabSeq:-2,
typeid:7,
uuid:"DD2FB160-DDC3-47E5-A367-C0F56E5DD65E"
},
{
anchors:3,
dataProviderID:"anticipo_cof",
formIndex:11400,
format:"###,###,##0.00¤|#.00",
horizontalAlignment:4,
location:"655,107",
name:"fld_anticipo_cof",
onActionMethodID:"4FA888A5-A403-41AB-B8B1-87787F59D5CA",
size:"101,20",
tabSeq:19,
typeid:4,
uuid:"E3BBDBB3-59EC-43AA-8D9C-E304C3641F5B"
},
{
anchors:3,
formIndex:11108,
imageMediaID:"4CF16EE2-ECF9-4DF0-B05D-76545215AAAE",
location:"499,106",
name:"BtnAddCliente",
onActionMethodID:"4764EEAC-A6F5-4139-9761-71FD89F91CF9",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
tabSeq:-2,
toolTipText:"Añadir Cliente...",
typeid:7,
uuid:"E3E0A8A2-051C-4F17-BECB-733D116F6380"
},
{
location:"5,207",
size:"89,20",
tabSeq:-2,
text:"Att.",
transparent:true,
typeid:7,
uuid:"E6450F0F-708F-44F2-8A43-A223A47E685B"
},
{
anchors:9,
formIndex:10101,
imageMediaID:"FF3408EE-85DB-495D-894A-E381699B2F36",
location:"202,80",
mediaOptions:14,
name:"btnUltimoPresupuesto",
onActionMethodID:"914A4092-408D-43DD-8ED8-8E4BD90665CE",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"25,25",
tabSeq:-2,
toolTipText:"Ir a la último Presupuesto registrado",
transparent:true,
typeid:7,
uuid:"E6EFDD7A-544D-43A4-9E6A-27AEB9CBD23B"
},
{
anchors:3,
fontType:"Segoe UI,1,12",
formIndex:14801,
imageMediaID:"0316FDAE-0FB1-4812-B113-FCED61AD8377",
location:"602,406",
mediaOptions:1,
name:"btnGenAlb",
onActionMethodID:"859ED370-1786-4673-A262-3DE0E843E262",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"183,37",
styleClass:"button",
tabSeq:-2,
text:"Generar Albarán",
typeid:7,
uuid:"E70389FC-C5FD-447F-955E-3507E92D8FB5"
},
{
dataProviderID:"emacl_cof",
location:"492,232",
name:"fld_emacl_cof",
onActionMethodID:"622A49E9-310D-4854-8E38-DA133CD4EA7F",
selectOnEnter:true,
size:"279,20",
tabSeq:11,
typeid:4,
uuid:"EB7A66FF-E71D-40A7-B6FE-9094006ECD0C"
},
{
dataProviderID:"fecha_cof",
foreground:"#0000ff",
formIndex:1,
format:"dd-MM-yyyy",
location:"348,81",
name:"lblfecha_cof",
size:"106,20",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"EB9BA014-C846-4F53-A847-E2EEF508210B"
},
{
anchors:3,
dataProviderID:"impbre_cof",
editable:false,
foreground:"#0000ff",
formIndex:11400,
format:"###,###,##0.00",
horizontalAlignment:4,
location:"655,81",
name:"impbre_cof",
selectOnEnter:true,
size:"101,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"F001328F-8F7E-4190-843B-5D6E7C8664AA"
},
{
anchors:9,
location:"616,207",
size:"29,20",
tabSeq:-2,
text:"Fax",
transparent:true,
typeid:7,
uuid:"F356761D-AA31-4AFC-8BDB-DA1EFB85F992"
},
{
anchors:3,
dataProviderID:"depp_cof",
formIndex:11400,
format:"#,##0.00",
horizontalAlignment:4,
location:"655,131",
name:"fld_depp_cof",
onActionMethodID:"EC89CA59-2667-4716-9C6D-004BC73966E9",
onDataChangeMethodID:"D6FEF05A-CE7A-45E9-9570-EF682C786293",
onFocusLostMethodID:"-1",
size:"56,20",
tabSeq:20,
typeid:4,
uuid:"F38C13D7-7EA8-4234-B4CE-5E71CEBA6C31"
},
{
anchors:9,
location:"422,207",
size:"69,20",
tabSeq:-2,
text:"Teléfono",
transparent:true,
typeid:7,
uuid:"FBC70250-964E-4333-B831-40DEB855B7EA"
}
],
name:"FrmPresupuestosGC",
navigatorID:"751382F5-8433-4DC6-AE15-6A2D8F7D09C4",
onLoadMethodID:"A2486D4F-EE3B-48F0-B1A5-3506B7D8C2DF",
onRecordSelectionMethodID:"B819CE6F-2B4B-4748-B4D7-B4375E1526A5",
onShowMethodID:"46966846-5A1E-4AAD-9009-7160B87BA743",
scrollbars:0,
showInMenu:true,
typeid:3,
uuid:"4C329784-A8AF-44D0-B9B3-296AC9FA40D2"