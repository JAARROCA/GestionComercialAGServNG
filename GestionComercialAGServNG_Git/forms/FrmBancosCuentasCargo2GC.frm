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
dataSource:"db:/conexiongestioncomercialag/maestrobancosctascargo",
encapsulation:0,
extendsID:"04464685-C11E-4E07-97B5-D8B82C292BAA",
initialSort:"codigoctabanco asc",
items:[
{
dataProviderID:"digitocontrol",
format:"|#[2]",
horizontalAlignment:0,
location:"298,202",
name:"fld_codigodc",
onActionMethodID:"B78A43DB-62FA-4A77-A516-7D8AAF26026C",
onDataChangeMethodID:"8F7F9280-492D-4F85-A36F-7662B5EE4F1D",
size:"32,20",
tabSeq:8,
typeid:4,
uuid:"003348A4-2273-4988-8BE0-BB7726DEAF61"
},
{
dataProviderID:"codigoine",
location:"162,278",
name:"fld_codigoine",
onActionMethodID:"F8FBD3D8-328D-4A70-B3ED-BFBA90171ECE",
size:"98,20",
tabSeq:14,
typeid:4,
uuid:"066F2A18-2D28-49F6-9439-0E02A99973CA"
},
{
anchors:11,
displaysTags:true,
formIndex:10100,
location:"10,4",
mediaOptions:14,
name:"lbl_section",
size:"396,41",
styleClass:"whtlg",
tabSeq:-2,
text:"<html><head><\/head> <body> %%globals.GCNombreEmpresa%%<br>\
%%codigoctabanco%%  -  %%nombreentidad%% <\/body><\/html>",
transparent:true,
typeid:7,
uuid:"0A227A23-5A27-4D0F-85A0-A5831EF837A2"
},
{
anchors:3,
formIndex:11108,
imageMediaID:"59872c90-974b-4c4e-b035-b56b662db3ce",
location:"557,176",
name:"BtnPais",
onActionMethodID:"2294C9C5-6375-4F87-AF3C-20D78AE618F2",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
tabSeq:-2,
toolTipText:"Buscar País...",
typeid:7,
uuid:"0BACCF5D-DAEA-4E89-8160-5A3334D2D7BE"
},
{
extendsID:"B3973CBE-FEC0-4CD2-B969-8E91190B30CE",
tabSeq:-2,
typeid:7,
uuid:"0DB5165C-85BC-4ECF-9CA7-6461A1ED0CA4"
},
{
anchors:3,
fontType:"Segoe UI,1,12",
formIndex:14802,
imageMediaID:"F7E5FF3B-B7EB-4C97-9C5D-89324E981BB9",
location:"610,476",
mediaOptions:1,
name:"btn_histmodificaciones",
onActionMethodID:"19D40694-3F28-445C-9AC5-9EB4E3CC2B6E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"185,35",
text:"Hist. Modificaciones",
typeid:7,
uuid:"170060E1-2CF9-4CC4-B1C6-3DAE498146FC"
},
{
anchors:9,
location:"281,327",
size:"118,20",
tabSeq:-2,
text:"Importe Mínimo",
transparent:true,
typeid:7,
uuid:"19C20F6A-807A-4D65-8EAF-79DD05DBF721"
},
{
extendsID:"A252E523-8B9D-4E2E-91B5-3230860CF054",
tabSeq:31,
typeid:7,
uuid:"1C3C0707-C7F5-4E15-92E2-46F18717049B"
},
{
dataProviderID:"idbanco",
format:"|#[4]",
horizontalAlignment:0,
location:"162,202",
name:"fld_idbanco",
onActionMethodID:"EFF9DC5D-5687-4C0C-8B69-1E80E6CD7BBB",
onDataChangeMethodID:"125D1F70-0FAE-411C-AF3C-1DF094D97E2A",
size:"63,20",
tabSeq:6,
typeid:4,
uuid:"1F6F1183-3EF3-4BFE-A3D7-0115E1747A48"
},
{
anchors:11,
borderType:"SpecialMatteBorder,1.0,0.0,0.0,0.0,#000000,#000000,#000000,#000000,0.0,",
formIndex:12301,
horizontalAlignment:4,
location:"31,471",
showClick:false,
showFocus:false,
size:"768,2",
styleClass:"solidgrc",
tabSeq:-2,
typeid:7,
uuid:"2732D5E7-1F0B-4ABC-8825-F7076B5E191E"
},
{
anchors:3,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"749,121",
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
uuid:"29C583A2-21B7-4AB3-94AB-E696A56A25C8"
},
{
location:"30,404",
size:"127,20",
tabSeq:-2,
text:"Sufijo",
transparent:true,
typeid:7,
uuid:"2A80DBD5-488E-4762-A823-4EB025E156C4"
},
{
extendsID:"D515154A-B4B7-42D1-BD31-9A464C276346",
tabSeq:32,
typeid:7,
uuid:"30602053-E54D-446A-B5AF-F8C05F7AAB18"
},
{
anchors:9,
location:"389,227",
size:"42,20",
tabSeq:-2,
text:"SWIFT",
transparent:true,
typeid:7,
uuid:"3369078C-4A29-4CC4-9984-0BE2B430EBD9"
},
{
dataProviderID:"contacto",
format:"|U",
location:"162,302",
name:"fld_contacto",
onActionMethodID:"2192428D-4173-457D-995A-A31180C1215B",
size:"354,20",
tabSeq:16,
typeid:4,
uuid:"356A8DE2-6263-412A-83F8-E0F63E1C5412"
},
{
dataProviderID:"codigoctabanco",
fontType:"Verdana,1,11",
foreground:"#0000ff",
formIndex:10103,
format:"|U",
location:"164,91",
name:"lbl_codigoctabanco",
onActionMethodID:"-1",
size:"85,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"360A9495-CCEB-48FB-961C-A5C9DFCAFF52"
},
{
dataProviderID:"_intereses",
format:"###,##0.00",
location:"162,352",
name:"fld_intereses",
onActionMethodID:"50C0147F-E5FF-471A-B600-27AF28D0A2DF",
size:"75,20",
tabSeq:20,
typeid:4,
uuid:"3A5BEEB3-C83C-40C5-94A8-2B28CB3CC8CF"
},
{
anchors:11,
dataProviderID:"nombreentidad",
format:"|U",
location:"162,121",
name:"fld_nombre",
onActionMethodID:"FBB76056-76FB-475F-B3CC-5575A161D4EB",
size:"583,20",
tabSeq:2,
typeid:4,
uuid:"3DC343F3-2FE2-4820-A691-BCBCA0BEF518"
},
{
anchors:3,
dataProviderID:"GCmaestrobancosctascargo_to_pais.pai_nombre",
editable:false,
formIndex:11402,
location:"617,176",
size:"147,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"3F2104CA-855E-475A-95C9-CE81F7B34E92"
},
{
anchors:11,
dataProviderID:"webbancaonline",
location:"647,429",
name:"fld_webbancaonline",
onActionMethodID:"-1",
size:"117,20",
tabSeq:25,
typeid:4,
uuid:"41017F0C-32B3-4550-A99A-E26436021E1C"
},
{
formIndex:10800,
location:"31,451",
mediaOptions:14,
name:"lblEfectosPendientes",
onActionMethodID:"8070F831-D765-4C78-B94C-2FE34F1E8DB9",
showClick:false,
showFocus:false,
size:"157,21",
styleClass:"label_darkgrc",
tabSeq:-2,
text:"Efectos Pendientes",
typeid:7,
uuid:"437424E4-5ADC-45EE-8193-9E9D1A03C02E"
},
{
dataProviderID:"riesgoconcedido",
format:"###,###,###,###,##0.00",
horizontalAlignment:4,
location:"162,252",
name:"fld_riesgoconcedido",
onActionMethodID:"88F6CEF6-B8C2-40C3-86E3-C598C94C46DC",
size:"98,20",
tabSeq:13,
typeid:4,
uuid:"44687AB7-858E-442C-9507-8360A2ABAD49"
},
{
location:"294,277",
size:"128,20",
tabSeq:-2,
text:"Num. Línea",
transparent:true,
typeid:7,
uuid:"4673A855-9A2A-4D1F-B841-417E5F0DEDF5"
},
{
location:"29,176",
size:"128,20",
tabSeq:-2,
text:"Población",
transparent:true,
typeid:7,
uuid:"47F49EB2-12CD-4FAA-9CD2-183F06C73A92"
},
{
extendsID:"C86558B0-EA2C-44CB-86CA-566E15EDCD47",
tabSeq:28,
typeid:7,
uuid:"4B8BB4D9-7830-4FD5-A47F-06B30595A5EA"
},
{
location:"30,302",
size:"128,20",
tabSeq:-2,
text:"Contacto",
transparent:true,
typeid:7,
uuid:"50511377-B019-4F83-9C83-19E865FFF0F5"
},
{
anchors:11,
dataProviderID:"poblacion",
format:"|U",
location:"162,176",
name:"fld_poblacion",
onActionMethodID:"79C00CB0-ADA3-42D9-8795-5A33B9B0007A",
size:"345,20",
tabSeq:4,
typeid:4,
uuid:"54612194-40A6-4849-831D-9458C10323DF"
},
{
location:"31,428",
size:"125,20",
tabSeq:-2,
text:"Contacto Oficina",
transparent:true,
typeid:7,
uuid:"57A92B04-31FF-4C03-9768-DB8A0621E1FD"
},
{
extendsID:"C512A492-DFA0-443D-AD42-54BEF504DD8A",
tabSeq:27,
typeid:16,
uuid:"5B72BF5F-8006-4673-A681-F0A4CFFA3008"
},
{
anchors:11,
dataProviderID:"email",
location:"642,302",
name:"fld_email",
onActionMethodID:"71630F59-D9E3-4479-9C3B-92E5D84C9FCB",
size:"128,20",
tabSeq:17,
typeid:4,
uuid:"5DE15073-FE7D-4BEA-A6D0-887E873688BA"
},
{
location:"281,352",
size:"118,20",
tabSeq:-2,
text:"% Comisión Global",
transparent:true,
typeid:7,
uuid:"5EBC05CD-EAAE-4B87-A74A-2AADE8267AE4"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"252,91",
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
uuid:"5EBC830B-7209-4607-84CA-D7DB960DA63C"
},
{
height:649,
partType:5,
typeid:19,
uuid:"61DD32C0-CBA5-4A23-BF22-52ACAE5390CA"
},
{
dataProviderID:"iban",
format:"|U",
horizontalAlignment:0,
location:"162,227",
name:"ncuentaiban",
onActionMethodID:"-1",
size:"203,20",
tabSeq:-2,
typeid:4,
uuid:"6848450D-B51E-4900-89F8-601F985D952D"
},
{
anchors:9,
dataProviderID:"importeminimo",
format:"###,###,###.00",
location:"404,328",
name:"fld_importeminimo",
onActionMethodID:"-1",
size:"123,20",
tabSeq:19,
typeid:4,
uuid:"69DAB9A1-D814-4103-9A07-A33128ED8028"
},
{
borderType:"EtchedBorder,0,null,null",
dataProviderID:"codigoctabanco",
format:"|U[8]",
location:"164,91",
name:"idcodigo",
onActionMethodID:"AF295506-896F-40CC-8C57-7B5D5BD4F07A",
onDataChangeMethodID:"7E932F5D-71F8-4CE8-AB6B-444770DDCE44",
size:"85,20",
tabSeq:1,
typeid:4,
uuid:"6CD3BD3A-6911-4F4A-9685-6BBE27E2375F"
},
{
anchors:3,
location:"517,175",
size:"36,20",
tabSeq:-2,
text:"Pais",
transparent:true,
typeid:7,
uuid:"6E93896E-E9C9-44A5-9352-6536F46E7B71"
},
{
location:"29,227",
size:"128,20",
tabSeq:-2,
text:"Nº Cuenta IBAN",
transparent:true,
typeid:7,
uuid:"7A0A0166-2ABE-46BC-93FD-517D68BB5A41"
},
{
anchors:9,
dataProviderID:"swift",
format:"|U",
horizontalAlignment:0,
location:"432,227",
name:"swift",
onActionMethodID:"-1",
size:"99,20",
tabSeq:-2,
typeid:4,
uuid:"842FF060-1D58-42E5-8BC1-4700659ACEA7"
},
{
dataProviderID:"personacontacto",
format:"|U",
location:"161,429",
name:"fld_personacontacto",
onActionMethodID:"C1769507-BC58-432A-9260-54BE0AA8432E",
size:"320,20",
tabSeq:24,
typeid:4,
uuid:"8641AE34-3F2C-4C4F-B7BA-59086CC4190B"
},
{
location:"29,252",
size:"128,20",
tabSeq:-2,
text:"Riesgo Concedido",
transparent:true,
typeid:7,
uuid:"8759A5FC-1E64-4990-99DB-1D0CEE62E5B3"
},
{
dataProviderID:"idbanco",
format:"|#",
horizontalAlignment:0,
location:"162,202",
name:"fld_codigobanco",
onActionMethodID:"EFF9DC5D-5687-4C0C-8B69-1E80E6CD7BBB",
onDataChangeMethodID:"125D1F70-0FAE-411C-AF3C-1DF094D97E2A",
size:"63,20",
tabSeq:9,
typeid:4,
uuid:"89E6D163-8704-470D-A465-B1DE56E8512B"
},
{
location:"29,121",
size:"128,20",
tabSeq:-2,
text:"Nombre Entidad",
transparent:true,
typeid:7,
uuid:"8A085AE3-809E-4030-A901-A79726EC3737"
},
{
anchors:9,
dataProviderID:"telefono",
format:"|#",
location:"581,202",
name:"fld_telefono",
onActionMethodID:"48CF0F8C-16C0-4B1E-8322-B455343F7B12",
size:"184,20",
tabSeq:11,
typeid:4,
uuid:"8A459C60-8708-40DD-9A35-E5C2E22B9057"
},
{
anchors:9,
dataProviderID:"cif",
format:"|U[13]",
horizontalAlignment:0,
location:"580,227",
name:"fld_cif",
onActionMethodID:"E89518F3-89A6-4CF7-B8F9-26B249DDF78C",
onDataChangeMethodID:"-1",
size:"112,20",
tabSeq:12,
typeid:4,
uuid:"8BC41B45-8FFA-4299-9753-E2B74DC84966"
},
{
dataProviderID:"_comisionglobal",
format:"###,##0.00",
location:"404,352",
name:"fld_comisionglobal",
onActionMethodID:"-1",
size:"75,20",
tabSeq:21,
typeid:4,
uuid:"91B4DBFF-DB7D-45B7-981E-8334968037E2"
},
{
anchors:3,
displaysTags:true,
formIndex:14800,
imageMediaID:"aa201e07-9fcb-4bc8-8f9f-1027868ed516",
location:"769,431",
mediaOptions:14,
name:"btn_webBanca",
onActionMethodID:"0BDDC32F-751A-4103-832E-617E28E93522",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"16,16",
tabSeq:-2,
toolTipText:"Abrir página %%webbancaonline%%",
transparent:true,
typeid:7,
uuid:"9E87C28A-4B9C-4629-BE21-2E4D85E09602"
},
{
dataProviderID:"comisionefecto",
format:"###,##0.00",
location:"162,327",
name:"fld_comisionefecto",
onActionMethodID:"D202FFE4-B0A9-40CE-BB6B-C89B6802C70D",
size:"99,20",
tabSeq:18,
typeid:4,
uuid:"A40592FA-7DE6-4656-9064-60844B9239F3"
},
{
anchors:11,
dataProviderID:"direccion",
format:"|U",
location:"162,149",
name:"fld_direccion",
onActionMethodID:"941512BA-5E85-4237-B8F3-B210DD825F34",
size:"583,20",
tabSeq:3,
typeid:4,
uuid:"A6878BF0-8B4E-47F2-9F77-CD4C43FBE070"
},
{
location:"30,378",
size:"127,20",
tabSeq:-2,
text:"% IVA",
transparent:true,
typeid:7,
uuid:"B02899F9-B59C-4BFE-A7A6-2467BBBFD2E1"
},
{
location:"29,149",
size:"128,20",
tabSeq:-2,
text:"Direccion",
transparent:true,
typeid:7,
uuid:"B29C97C1-905F-4C34-86C8-BF51FEE2C4EB"
},
{
anchors:3,
displaysTags:true,
formIndex:14800,
imageMediaID:"7304EAA8-7F6F-4029-BC18-B5204E4E5177",
location:"748,149",
mediaOptions:14,
name:"btn_googlemaps",
onActionMethodID:"FFCE4CE5-FCD8-4DE1-BF0D-6207F55D668B",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
tabSeq:-2,
toolTipText:"Ver dirección",
transparent:true,
typeid:7,
uuid:"B379B0DA-D40B-48FD-91BF-290B643B3461"
},
{
dataProviderID:"ncuenta",
format:"|#[10]",
horizontalAlignment:0,
location:"335,202",
name:"fld_codigocuenta",
onActionMethodID:"0928111A-3477-4F95-8D88-B17B17C3C204",
onDataChangeMethodID:"8F7F9280-492D-4F85-A36F-7662B5EE4F1D",
size:"172,20",
tabSeq:10,
typeid:4,
uuid:"B8653A8B-00ED-45E5-9B92-A5D27FF7B09E"
},
{
location:"30,327",
size:"127,20",
tabSeq:-2,
text:"Comisión por Efecto",
transparent:true,
typeid:7,
uuid:"BBCEF613-1B69-430C-9EDB-8F53A2705349"
},
{
dataProviderID:"numlinea",
location:"427,277",
name:"fld_numlinea",
onActionMethodID:"84602150-3E5F-498F-9A63-D1FB265CB081",
size:"98,20",
tabSeq:15,
typeid:4,
uuid:"BCEA9810-019F-4024-835B-43B61ED03977"
},
{
location:"29,91",
size:"127,20",
tabSeq:-2,
text:"Código Cta Banco",
transparent:true,
typeid:7,
uuid:"BEBFEA70-EA45-4F81-B604-4FBEBB7AB03F"
},
{
dataProviderID:"sucursal",
format:"|#[4]",
horizontalAlignment:0,
location:"231,202",
name:"fld_codigosucursal",
onActionMethodID:"E7B22404-722E-4D82-96B5-ABFEA7BFB23B",
onDataChangeMethodID:"8F7F9280-492D-4F85-A36F-7662B5EE4F1D",
size:"63,20",
tabSeq:7,
typeid:4,
uuid:"C06677E3-1855-44E2-B187-EDBCC94A9303"
},
{
anchors:3,
dataProviderID:"pais",
formIndex:11400,
format:"|U",
horizontalAlignment:0,
location:"581,176",
name:"fld_codigopaisue",
onActionMethodID:"F3BF76BA-1CCD-4566-80B0-44500BACED91",
onDataChangeMethodID:"8F7F9280-492D-4F85-A36F-7662B5EE4F1D",
onFocusLostMethodID:"-1",
size:"31,20",
tabSeq:5,
typeid:4,
uuid:"C0A1E848-6DB1-4D0C-AA49-C95AAE01A68B"
},
{
dataProviderID:"sufijo",
format:"|#",
location:"162,404",
name:"fld_sufijo",
onActionMethodID:"E1CA7B63-BA88-4C54-A649-CD105A53D753",
size:"75,20",
tabSeq:23,
typeid:4,
uuid:"C851B369-155F-4BA5-9A9B-0BB7288A1218"
},
{
location:"492,429",
size:"150,20",
tabSeq:-2,
text:"Web Banca Online",
transparent:true,
typeid:7,
uuid:"D29B14F9-1E35-4FD5-866F-B080593D090F"
},
{
location:"29,202",
size:"128,20",
tabSeq:-2,
text:"Nº Cuenta Bancaria",
transparent:true,
typeid:7,
uuid:"D504F1D1-3F28-4228-9D1A-FC6BC31A9058"
},
{
anchors:9,
location:"517,202",
size:"62,20",
tabSeq:-2,
text:"Teléfono",
transparent:true,
typeid:7,
uuid:"DD196ACC-9E79-40E5-A826-B59DDEF25F9B"
},
{
location:"29,278",
size:"128,20",
tabSeq:-2,
text:"Código INE",
transparent:true,
typeid:7,
uuid:"E459D1B6-A649-421B-B11F-79C79E954677"
},
{
dataProviderID:"idtipoiva",
format:"|#",
location:"162,378",
name:"fld_idtipoiva",
onActionMethodID:"6DDBAD7C-38E3-4A89-9D3D-DA6A7D099C9B",
size:"75,20",
tabSeq:22,
typeid:4,
uuid:"E5A3DB96-DC8B-4D26-8396-17847C6A14A3"
},
{
anchors:9,
horizontalAlignment:0,
location:"532,227",
size:"47,20",
tabSeq:-2,
text:"CIF",
transparent:true,
typeid:7,
uuid:"E5EEC671-3B77-444A-8A91-7490A096E330"
},
{
anchors:15,
borderType:"SpecialMatteBorder,0.0,1.0,1.0,1.0,#cccccc,#cccccc,#cccccc,#cccccc,0.0,",
formIndex:12300,
items:[
{
containsFormID:"F6EAC7F4-DF2A-4207-B6E8-A7002E40B057",
location:"57,503",
relationName:"gcmaestrobancosctascargo_to_ccobrospagos",
text:"lst__EfectosPendientes1GC",
typeid:15,
uuid:"43EDA2F1-8F1F-491A-8457-DDD0D0D21F4D"
}
],
location:"31,471",
name:"tabs_mainPanel",
printable:false,
size:"576,169",
tabOrientation:-1,
tabSeq:26,
typeid:16,
uuid:"E7383724-6D4B-4FC7-ADAA-D7252D0CD9DD"
},
{
location:"30,352",
size:"127,20",
tabSeq:-2,
text:"% Intereses",
transparent:true,
typeid:7,
uuid:"ECB6F8D7-158D-4C24-B056-73A15C43383B"
},
{
extendsID:"03209E6A-76C8-48FC-AA95-CD52EAA101ED",
tabSeq:30,
typeid:7,
uuid:"F11A5E84-AE3B-4FF0-89DE-0117DE297B27"
},
{
extendsID:"3BCA16F6-A416-4D4B-A9EC-58DC7D92B1A9",
tabSeq:29,
typeid:7,
uuid:"FCF95A16-BD67-440B-82CF-8014BD970ADF"
},
{
anchors:9,
location:"521,302",
size:"118,20",
tabSeq:-2,
text:"EMail de contacto",
transparent:true,
typeid:7,
uuid:"FDA1841B-FB08-485C-9F5A-6A60078B871E"
}
],
name:"FrmBancosCuentasCargo2GC",
navigatorID:"9D784566-8985-40F8-BDAC-53C8CB1010A3",
onDeleteRecordCmdMethodID:"4B9328FF-5686-4868-ABAE-29E29F778D68",
onLoadMethodID:"9E2F10DE-CEF9-4BD6-872D-DEBD3E588960",
onNewRecordCmdMethodID:"45F6F386-59E4-4E16-9834-4A7CE8B520D2",
onPrintPreviewCmdMethodID:"88896203-70C0-4062-B93A-C5BA5A4419D0",
onRecordSelectionMethodID:"716EFAEA-B226-4A8E-AAFD-B8ADD46424CA",
onSearchCmdMethodID:"A464F69D-6439-47A0-9832-3A556E4649DC",
onShowAllRecordsCmdMethodID:"2F32E1CE-09C2-4238-B1B0-D50C15F94A1D",
onShowMethodID:"82F90F6E-CB72-482C-AEAC-04D2277C9048",
scrollbars:0,
showInMenu:true,
typeid:3,
uuid:"D53F4758-8ABB-4E65-8C8F-2A6FECCAA70C"