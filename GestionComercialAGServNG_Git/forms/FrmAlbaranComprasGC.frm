dataSource:"db:/conexiongestioncomercialag/albapro",
extendsID:"3EBE7B94-CF04-4E69-89B3-BBDC75D0EE33",
items:[
{
dataProviderID:"GCalbapro_to_tbmaestroproveedores.poblacion",
location:"109,145",
name:"poblacion",
onActionMethodID:"-1",
size:"315,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"00298627-ADD2-41DE-92B5-CCAA8BD0B7C7"
},
{
anchors:11,
dataProviderID:"GCalbapro_to_tbmaestroproveedores.descproveedor",
editable:false,
location:"195,95",
name:"descproveedor",
onActionMethodID:"-1",
size:"413,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"1D32BEBC-D1D0-41AA-B4F0-2B5A2CCFA8B4"
},
{
extendsID:"5000EBE8-9F04-4DFB-9B24-D0478362E12F",
tabSeq:-2,
typeid:7,
uuid:"1D99E964-E1D5-41BC-A3E9-44A32F2E42FE"
},
{
anchors:3,
location:"528,120",
tabSeq:-2,
text:"C.P.",
transparent:true,
typeid:7,
uuid:"21255D76-70B2-45CF-AAF7-B0347B5996E7"
},
{
anchors:9,
dataProviderID:"GCalbapro_to_tbmaestroproveedores.email",
editable:false,
location:"503,169",
name:"emaprov",
onActionMethodID:"-1",
size:"272,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"21BCC17A-EB74-4518-B0BE-D293BC5F3289"
},
{
extendsID:"0734757A-8B5B-4AE7-A7BD-A7EDF6AD7606",
tabSeq:-2,
typeid:7,
uuid:"2248421D-7AC9-4C81-A572-8D8B937AE9BC"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"250,194",
name:"lbl_codrequiredc",
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
uuid:"26A00792-CDAC-4D88-ACF3-B75269E27008"
},
{
extendsID:"3E2A83AD-6FA0-4CEB-9E30-4F9EC5CFADEE",
tabSeq:-2,
typeid:7,
uuid:"2EE83635-F1D6-47EF-8273-EB83E7C16778"
},
{
anchors:11,
displaysTags:true,
formIndex:10100,
location:"10,4",
mediaOptions:14,
name:"lbl_sectionc",
size:"384,39",
styleClass:"label_whtlg",
tabSeq:-2,
text:"<html> <head><\/head> <body> %%globals.GCNombreEmpresa%%<br>\
Proveedor: %%pro_ap%%    Albarán: %%nup_ap%%<\/body><\/html>\
",
transparent:true,
typeid:7,
uuid:"37D8E145-F865-4553-A6E5-C34503AD4496"
},
{
dataProviderID:"GCalbapro_to_tbmaestroproveedores.telf1",
editable:false,
location:"109,170",
name:"tel1_p",
onActionMethodID:"-1",
size:"113,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"40582E60-DAEB-4075-A957-CF7D601FB746"
},
{
dataProviderID:"pro_ap",
format:"0",
horizontalAlignment:0,
location:"109,95",
name:"pro_ap",
onActionMethodID:"560111B5-ED7A-4A90-A6F3-14D8FC124887",
onDataChangeMethodID:"-1",
size:"54,20",
tabSeq:1,
typeid:4,
uuid:"5C9F8AFB-F1DE-43EA-B845-B4FA37E7EFD5"
},
{
anchors:3,
dataProviderID:"GCalbapro_to_tbmaestroproveedores.codpostal",
editable:false,
location:"613,120",
name:"codpostal",
onActionMethodID:"-1",
size:"99,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"62A9D6F8-B0B0-43D9-9CFF-B888C0358E89"
},
{
anchors:9,
location:"430,145",
size:"67,20",
tabSeq:-2,
text:"Provincia",
transparent:true,
typeid:7,
uuid:"68DF3E85-C65F-4FF8-9D19-70B524A0FAD9"
},
{
anchors:11,
dataProviderID:"GCalbapro_to_tbmaestroproveedores.direccion",
editable:false,
location:"109,120",
name:"direccion",
onActionMethodID:"-1",
size:"414,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"76F81A2D-D7DF-432E-8A50-C9D4FDBB96B6"
},
{
extendsID:"65870F29-11B3-4D23-8C48-81C9E9DA0694",
tabSeq:-2,
typeid:7,
uuid:"777375AC-1253-4900-B380-F681A2637752"
},
{
location:"15,170",
tabSeq:-2,
text:"Teléfono",
transparent:true,
typeid:7,
uuid:"783DB9AC-ABC0-44E5-B57E-7232ACF11172"
},
{
anchors:15,
borderType:"SpecialMatteBorder,0.0,1.0,1.0,1.0,#cccccc,#cccccc,#cccccc,#cccccc,0.0,",
formIndex:12300,
items:[
{
containsFormID:"C18F1DCA-F6DD-497C-8938-4A2337E2C396",
location:"31,267",
relationName:"GCalbapro_to_lalbapro",
text:"lst_AlbaranCompra_LineasGC",
typeid:15,
uuid:"6825C48D-57EF-4247-84CB-A684F6ED807A"
},
{
containsFormID:"CA723E79-294F-45A4-BED4-34CA612833E5",
location:"156,299",
relationName:"GCultimosalbaranes",
text:"lst_GCultimosalbaranesCompras",
typeid:15,
uuid:"F970E239-92AC-4D16-8174-D69B9D8786AC"
}
],
location:"15,249",
name:"tabs_mainPanel",
printable:false,
size:"588,335",
tabOrientation:-1,
tabSeq:4,
typeid:16,
uuid:"7B6180FF-BE51-4B2F-AE1D-7149516C4A5F"
},
{
formIndex:11108,
imageMediaID:"59872c90-974b-4c4e-b035-b56b662db3ce",
location:"88,95",
name:"BtnProveedor",
onActionMethodID:"BD38A83F-BD93-4B8A-AC23-401B2A9945CD",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"20,20",
tabSeq:-2,
toolTipText:"Buscar Proveedor...",
typeid:7,
uuid:"7FF0EE7F-B953-4C1B-82A4-EE466E071C40"
},
{
location:"15,194",
tabSeq:-2,
text:"Nº Albarán",
transparent:true,
typeid:7,
uuid:"89F5DA88-09CD-4414-BF7F-7DE198BF9C1B"
},
{
anchors:3,
fontType:"Segoe UI,1,12",
formIndex:14801,
imageMediaID:"4BF80713-A540-438B-A0A2-58CA3EE7ADED",
location:"604,294",
mediaOptions:1,
name:"btnActStockAlbaran",
onActionMethodID:"E9860F21-25B8-4D62-8522-7033D7F0885B",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"190,38",
text:"<html>Actualizar Stock<br>Albarán<\/html>",
typeid:7,
uuid:"8DAFB7DF-94FA-4B38-B970-882C2B4C2C1E"
},
{
formIndex:10800,
location:"126,221",
mediaOptions:14,
name:"lblUltAlbaranes",
onActionMethodID:"385810BA-257D-4655-9B89-28AACD69C7E7",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"108,25",
styleClass:"label_darkgrc",
tabSeq:-2,
text:"Ult. Albaranes",
typeid:7,
uuid:"8ED195F4-4CA6-4C05-A756-6CF3407A98F0"
},
{
extendsID:"7F550421-1717-4055-BB27-2092BC5ED0C2",
tabSeq:-2,
typeid:7,
uuid:"93065A0B-205D-434A-8DFB-5D71277226AB"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"163,95",
name:"lbl_codrequired",
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
uuid:"94C32081-EFDD-4202-8DE8-C42DEA252FE5"
},
{
dataProviderID:"GCalbapro_to_tbmaestroproveedores.fax",
editable:false,
location:"263,170",
name:"fax",
onActionMethodID:"-1",
size:"141,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"99616CFE-D85B-4DA4-AC4C-0E542CBA9B5B"
},
{
anchors:11,
borderType:"SpecialMatteBorder,1.0,0.0,0.0,0.0,#000000,#000000,#000000,#000000,0.0,",
formIndex:14805,
horizontalAlignment:4,
location:"15,246",
size:"781,2",
styleClass:"solidgrc",
tabSeq:-2,
typeid:7,
uuid:"A33CE6F4-3FA3-447E-BB8B-26EA00B54273"
},
{
anchors:3,
fontType:"Segoe UI,1,12",
formIndex:14802,
imageMediaID:"EAA50BB8-E1BE-4C91-8C86-E66606F0957E",
location:"604,249",
mediaOptions:1,
name:"btn_Proveedor",
onActionMethodID:"7EC2FDFF-42D7-4139-A331-05697EC7F121",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"190,38",
tabSeq:-2,
text:"BD Proveedores",
typeid:7,
uuid:"A6C18DEE-BC9D-4EAD-A6E0-EED660017BE2"
},
{
dataProviderID:"fech_ap",
displayType:5,
format:"dd-MM-yyyy",
location:"357,194",
name:"fld_fecha_ap",
onActionMethodID:"-1",
size:"130,20",
tabSeq:3,
typeid:4,
uuid:"A8F7E9A3-9BF0-4E3A-9D07-207EE8CE2F93"
},
{
extendsID:"7C7B2424-39F3-4D26-A25E-78A63893EFD3",
items:[
{
extendsID:"A92CFE81-1001-4DEC-8EAB-0B0F6B7DB138",
location:"507,13",
typeid:15,
uuid:"8E110C69-8B54-45C0-B0EA-DEF3979BE9B0"
}
],
location:"399,3",
size:"400,43",
tabSeq:5,
typeid:16,
uuid:"AA5FB461-E9F8-4021-99E4-FACD99BC1567"
},
{
formIndex:11108,
imageMediaID:"4CF16EE2-ECF9-4DF0-B05D-76545215AAAE",
location:"175,95",
name:"BtnAddProveedor",
onActionMethodID:"3A4FE0EC-E077-49DC-A863-1D78DBB0BA3B",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
toolTipText:"Añadir Proveedor...",
typeid:7,
uuid:"AB812983-6835-409F-8EB7-E7F100B0780B"
},
{
anchors:9,
dataProviderID:"GCalbapro_to_tbmaestroproveedores.provincia",
editable:false,
location:"503,145",
name:"provincia",
onActionMethodID:"-1",
size:"271,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"B38D58BA-D17A-4F0E-BC99-021A4420C93A"
},
{
height:604,
partType:5,
typeid:19,
uuid:"B543A4CA-03D7-44A7-8EB1-4B70C46691AE"
},
{
location:"228,170",
size:"30,20",
tabSeq:-2,
text:"Fax",
transparent:true,
typeid:7,
uuid:"B63B7773-E9E3-4077-B025-842F4F06F94B"
},
{
location:"15,95",
size:"72,20",
tabSeq:-2,
text:"Proveedor",
transparent:true,
typeid:7,
uuid:"C7F53555-4083-4EC0-BB18-8B30888A3C52"
},
{
anchors:9,
location:"430,169",
size:"67,20",
tabSeq:-2,
text:"EMail",
transparent:true,
typeid:7,
uuid:"CAC83D0F-2B5F-4778-B6C1-3CDA37C11675"
},
{
formIndex:10800,
location:"15,221",
mediaOptions:14,
name:"lblLineas",
onActionMethodID:"4D7CD9CB-4C42-403D-B50A-48ED7CE01BF1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"108,25",
styleClass:"label_darkgrc",
tabSeq:-2,
text:"Líneas",
typeid:7,
uuid:"D17DD781-8497-496E-9205-30BDCE122E95"
},
{
dataProviderID:"nup_ap",
format:"|U[12]",
location:"109,194",
name:"nup_ap",
tabSeq:2,
typeid:4,
uuid:"D408D02E-F045-4513-BE21-602DF95B0F36"
},
{
location:"15,119",
size:"72,20",
tabSeq:-2,
text:"Dirección",
transparent:true,
typeid:7,
uuid:"D4BBBCF7-F3C5-4DC8-9E63-367E81BD105F"
},
{
anchors:9,
displaysTags:true,
formIndex:14800,
imageMediaID:"7304EAA8-7F6F-4029-BC18-B5204E4E5177",
location:"88,119",
mediaOptions:14,
name:"btn_googlemaps",
onActionMethodID:"D22C68BC-7C1E-46EF-B6B5-34D247C46058",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
tabSeq:-2,
toolTipText:"Ver dirección",
transparent:true,
typeid:7,
uuid:"E1443519-039C-4CC7-8DCF-8DB11EEC7320"
},
{
anchors:9,
displaysTags:true,
formIndex:14800,
imageMediaID:"9db178bf-0cf0-4b26-959e-f825c8e467c1",
location:"778,169",
mediaOptions:14,
name:"btn_sendEmail",
onActionMethodID:"3E30FD55-7B10-4FF9-83B9-1B67BD00093C",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"16,16",
tabSeq:-2,
toolTipText:"Enviar EMail a %%scopes.globals.emaprov%%",
transparent:true,
typeid:7,
uuid:"E4D4C096-56C7-49C4-93A6-12332A831368"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"491,194",
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
uuid:"E750814D-812D-47F6-8874-869C0AE56311"
},
{
location:"272,195",
tabSeq:-2,
text:"Fecha",
transparent:true,
typeid:7,
uuid:"FC12C66F-0A27-4E5B-80B7-E639CB2A4CA0"
},
{
location:"15,145",
tabSeq:-2,
text:"Población",
transparent:true,
typeid:7,
uuid:"FDC08A6D-F332-4F79-8BEF-D19DEBBFDD0B"
}
],
name:"FrmAlbaranComprasGC",
navigatorID:"F7AE2F37-FDFB-4C4A-9B49-D9FC629A8303",
onLoadMethodID:"A8436D43-60C1-4E8D-9A76-4D015C2E82D2",
onRecordSelectionMethodID:"0FAF1204-37B1-4575-845D-9F517CFB9EE0",
onShowMethodID:"07ABC9C1-921C-40A0-BE00-97541E982088",
scrollbars:0,
showInMenu:true,
titleText:null,
typeid:3,
uuid:"7C85CD80-C560-4D10-9A01-E23BA7B55B67"