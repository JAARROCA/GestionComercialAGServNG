borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/maestrobancosctascargo",
items:[
{
background:"#e6e6e6",
height:449,
partType:5,
typeid:19,
uuid:"01E957F3-C6E3-4BC0-BDA5-47CC19AE2EEA"
},
{
anchors:3,
dataProviderID:"GCmaestrobancosctascargo_to_pais.pai_nombre",
editable:false,
formIndex:11402,
location:"599,87",
size:"147,20",
styleClass:"noborder",
transparent:true,
typeid:4,
uuid:"05CCC284-176B-4603-ADAD-9877CF7838B4"
},
{
dataProviderID:"iban",
editable:false,
format:"|U",
horizontalAlignment:0,
location:"144,138",
name:"ncuentaiban",
onActionMethodID:"-1",
selectOnEnter:true,
size:"203,20",
styleClass:"white",
typeid:4,
uuid:"0684748D-738F-40F3-A9B1-E3B2F84ABEB4"
},
{
dataProviderID:"numlinea",
location:"145,212",
name:"fld_numlinea",
onActionMethodID:"79AC168A-39B9-4C22-82B0-659115455F21",
selectOnEnter:true,
size:"98,20",
styleClass:"white",
typeid:4,
uuid:"095D81CC-B853-463B-970C-97F298F4E8A0"
},
{
location:"13,367",
size:"125,20",
text:"Persona de Contacto",
transparent:true,
typeid:7,
uuid:"1D28D43C-AD23-45BC-B228-DB58F5973178"
},
{
anchors:3,
dataProviderID:"pais",
formIndex:11400,
format:"|U",
horizontalAlignment:0,
location:"563,87",
name:"fld_codigopaisue",
onActionMethodID:"5449ECDE-A8B9-4906-B318-375BD91EB52E",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"31,20",
styleClass:"white",
typeid:4,
uuid:"1EB78F64-8746-4FF0-B3A8-B0C7DF5F8FE4"
},
{
anchors:3,
displaysTags:true,
formIndex:14800,
imageMediaID:"aa201e07-9fcb-4bc8-8f9f-1027868ed516",
location:"751,370",
mediaOptions:14,
name:"btn_webBanca",
onActionMethodID:"15A095D9-84E7-41AF-A9DB-55EC664D4CA2",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"16,16",
toolTipText:"Abrir página %%webbancaonline%%",
transparent:true,
typeid:7,
uuid:"2578506D-F90E-456A-9DB7-1F02D4A9EA63"
},
{
location:"12,212",
size:"128,20",
text:"Num. Línea",
transparent:true,
typeid:7,
uuid:"27AE4D5E-C2F1-446C-B8C9-337FC5E8CDFD"
},
{
dataProviderID:"idbanco",
format:"|#[4]",
horizontalAlignment:0,
location:"144,113",
name:"fld_idbanco",
onActionMethodID:"243C3533-122A-4011-B5A3-8354F4B4E032",
onDataChangeMethodID:"CA2D6D47-3617-4767-8BEE-2C4AA26FAECA",
selectOnEnter:true,
size:"63,20",
styleClass:"white",
typeid:4,
uuid:"313B72AD-91F8-4DFE-BE8D-29C4FFF9C75C"
},
{
location:"11,7",
size:"120,20",
text:"Código",
transparent:true,
typeid:7,
uuid:"3239662F-74C8-4719-8724-2390FF3F107E"
},
{
anchors:9,
dataProviderID:"importeminimo",
format:"###,###,###.00",
location:"386,267",
name:"fld_importeminimo",
onActionMethodID:"-1",
selectOnEnter:true,
size:"123,20",
styleClass:"white",
typeid:4,
uuid:"33E86BE3-36AA-4810-90F9-88483DA6D8E6"
},
{
anchors:9,
location:"263,266",
size:"118,20",
text:"Importe Mínimo",
transparent:true,
typeid:7,
uuid:"37E9FA1A-E5B7-413B-905E-BA51728C3DEC"
},
{
anchors:9,
location:"276,163",
size:"118,20",
text:"EMail de contacto",
transparent:true,
typeid:7,
uuid:"3A09788F-A8F3-40CA-B047-FFBC4D1AA42D"
},
{
dataProviderID:"idbanco",
format:"|#",
location:"144,113",
name:"fld_codigobanco",
onActionMethodID:"243C3533-122A-4011-B5A3-8354F4B4E032",
size:"63,20",
styleClass:"white",
typeid:4,
uuid:"3E0C7AA9-7380-4262-A782-80D31512759B"
},
{
dataProviderID:"riesgoconcedido",
format:"###,###,###,###,##0.00",
location:"144,163",
name:"fld_riesgoconcedido",
onActionMethodID:"5736CDFD-A3ED-48E5-80E9-32E47186E8C6",
selectOnEnter:true,
size:"98,20",
styleClass:"white",
typeid:4,
uuid:"3F9CE32C-A54C-4D40-8495-EDDCE0D65EB0"
},
{
location:"263,291",
size:"118,20",
text:"% Comisión Global",
transparent:true,
typeid:7,
uuid:"403E9066-3FD7-4211-A81D-4CE8BC51F078"
},
{
anchors:9,
displaysTags:true,
formIndex:14800,
imageMediaID:"9db178bf-0cf0-4b26-959e-f825c8e467c1",
location:"624,163",
mediaOptions:14,
name:"btn_sendEmail",
onActionMethodID:"B391BD8A-4744-4058-81DD-7B94614D206E",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"16,16",
toolTipText:"Enviar EMail a %%mail_c%%",
transparent:true,
typeid:7,
uuid:"420BD0FD-94CD-4A97-B841-0C135D7EE02B"
},
{
dataProviderID:"idtipoiva",
format:"|#",
location:"144,317",
name:"fld_idtipoiva",
onActionMethodID:"7A605BC0-03BF-4A02-BAD2-542D3DE02C6B",
selectOnEnter:true,
size:"75,20",
styleClass:"white",
typeid:4,
uuid:"46E2BB9B-FF0C-48AC-A255-298EF2247E35"
},
{
dataProviderID:"digitocontrol",
format:"|#[2]",
horizontalAlignment:0,
location:"280,113",
name:"fld_codigodc",
onActionMethodID:"68BEE96C-CAFE-4229-B6A6-DFB3DD58A9CB",
selectOnEnter:true,
size:"32,20",
styleClass:"white",
typeid:4,
uuid:"49D74EA6-0960-438A-B147-60968D1E313E"
},
{
location:"12,266",
size:"127,20",
text:"Comisión por Efecto",
transparent:true,
typeid:7,
uuid:"52BBD3F3-B772-4A06-8F01-8D88C4401A9E"
},
{
dataProviderID:"_intereses",
format:"###,##0.00",
location:"144,291",
name:"fld_intereses",
onActionMethodID:"998F7BC6-4072-4CC1-805D-F64E1A28D9DA",
selectOnEnter:true,
size:"75,20",
styleClass:"white",
typeid:4,
uuid:"56F6633C-FBFA-4B19-9EE5-36527849B249"
},
{
anchors:3,
formIndex:11108,
imageMediaID:"59872c90-974b-4c4e-b035-b56b662db3ce",
location:"539,87",
name:"BtnPais",
onActionMethodID:"7DAD08E0-D810-469B-83F9-1E20DA0EF483",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
toolTipText:"Buscar País...",
typeid:7,
uuid:"57442BC4-F745-492A-B710-4B4F3E24288B"
},
{
dataProviderID:"codigoctabanco",
format:"|U",
location:"145,7",
name:"codigoctabanco",
onActionMethodID:"A584CFA8-04AB-4AF7-985E-9C4D954BFCB1",
onDataChangeMethodID:"BFC17CDA-A986-44B2-A9AD-5FC546960B0D",
size:"108,20",
styleClass:"white",
typeid:4,
uuid:"5D062535-6ADE-42AD-B1F4-EDF2F432F8F0"
},
{
location:"12,317",
size:"127,20",
text:"% IVA",
transparent:true,
typeid:7,
uuid:"6B4718D8-712C-4142-B91D-61F7793E90F4"
},
{
dataProviderID:"sufijo",
format:"|#",
location:"144,343",
name:"fld_sufijo",
onActionMethodID:"627C9DDB-6DB7-4923-A2A9-1317F439E96C",
selectOnEnter:true,
size:"75,20",
styleClass:"white",
typeid:4,
uuid:"6B6D424B-E7A2-42A6-B9FB-F938BF03D1F0"
},
{
anchors:11,
dataProviderID:"webbancaonline",
location:"563,368",
name:"fld_webbancaonline",
onActionMethodID:"-1",
selectOnEnter:true,
size:"183,20",
styleClass:"white",
typeid:4,
uuid:"6E85DBFB-2337-48E8-85F2-21B76FC2ACA1"
},
{
anchors:9,
dataProviderID:"swift",
editable:false,
format:"|U",
horizontalAlignment:0,
location:"393,138",
name:"swift",
onActionMethodID:"-1",
selectOnEnter:true,
size:"99,20",
styleClass:"white",
typeid:4,
uuid:"7350506D-B7EA-40D3-99C3-7D8BE47DE438"
},
{
location:"12,238",
size:"128,20",
text:"Contacto",
transparent:true,
typeid:7,
uuid:"77A4D6D4-9999-437D-A839-AFEEA921DF81"
},
{
dataProviderID:"sucursal",
format:"|#[4]",
horizontalAlignment:0,
location:"213,113",
name:"fld_codigosucursal",
onActionMethodID:"462CC6CB-AA4E-4B14-9D6E-6C783FD20569",
selectOnEnter:true,
size:"63,20",
styleClass:"white",
typeid:4,
uuid:"787219CF-E9F5-448B-94EA-1F43CFD55318"
},
{
dataProviderID:"codigoine",
location:"144,189",
name:"fld_codigoine",
onActionMethodID:"E9DFA6D9-B6FF-43D3-923B-73EBBBBF110A",
selectOnEnter:true,
size:"98,20",
styleClass:"white",
typeid:4,
uuid:"7C6BFC22-B85A-44C9-B158-206D90910253"
},
{
location:"11,60",
size:"128,20",
text:"Direccion",
transparent:true,
typeid:7,
uuid:"7DABB7E0-8D17-47DC-8A5A-E5CD607EC19D"
},
{
location:"408,368",
size:"150,20",
text:"Web Banca Online",
transparent:true,
typeid:7,
uuid:"8361CC25-7CEE-42D2-BCA8-9F6A978FA713"
},
{
dataProviderID:"codigoctabanco",
fontType:"Verdana,1,12",
foreground:"#0000ff",
location:"145,7",
name:"lblidcodigo",
size:"90,20",
transparent:true,
typeid:7,
uuid:"8C5D636F-2044-41DF-903C-59DBDC97DAC3"
},
{
location:"12,291",
size:"127,20",
text:"% Intereses",
transparent:true,
typeid:7,
uuid:"937EF75F-F92F-4429-8493-66F1EC156725"
},
{
anchors:9,
dataProviderID:"cif",
format:"|U",
location:"562,138",
name:"fld_cif",
onActionMethodID:"AAD30EB3-F9E5-4F8C-8BD1-98AAC765DAFE",
selectOnEnter:true,
size:"184,20",
styleClass:"white",
typeid:4,
uuid:"94726D83-309C-4F96-954F-3018AA47849C"
},
{
location:"11,189",
size:"128,20",
text:"Código INE",
transparent:true,
typeid:7,
uuid:"99815455-9218-446B-B4B2-D6C8E5B8924A"
},
{
location:"12,343",
size:"127,20",
text:"Sufijo",
transparent:true,
typeid:7,
uuid:"9DEA3A2A-53B4-48F7-8038-D1DA4A693E8A"
},
{
anchors:9,
location:"350,138",
size:"42,20",
text:"SWIFT",
transparent:true,
typeid:7,
uuid:"A7B59ADA-D6E1-4B1A-9AD3-878295BFD68E"
},
{
anchors:3,
displaysTags:true,
formIndex:14800,
imageMediaID:"7304EAA8-7F6F-4029-BC18-B5204E4E5177",
location:"730,60",
mediaOptions:14,
name:"btn_googlemaps",
onActionMethodID:"041F4DB9-B321-4B79-AD85-652180D805E5",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"16,20",
toolTipText:"Ver dirección",
transparent:true,
typeid:7,
uuid:"A9C1A0F0-56CE-477D-AA0B-97C846521018"
},
{
anchors:9,
location:"499,113",
size:"62,20",
text:"Teléfono",
transparent:true,
typeid:7,
uuid:"AB688CEB-7435-4E1A-9E90-5E94860391E1"
},
{
anchors:3,
location:"499,86",
size:"36,20",
text:"Pais",
transparent:true,
typeid:7,
uuid:"AD16DEDF-4A05-4B14-9D03-82AA8AFDDF0D"
},
{
location:"11,163",
size:"128,20",
text:"Riesgo Concedido",
transparent:true,
typeid:7,
uuid:"ADE5F185-C95F-43FA-B024-49A9113B6DBF"
},
{
anchors:9,
dataProviderID:"email",
location:"397,163",
name:"fld_email",
onActionMethodID:"9E537D1B-144C-4A78-A11E-7314B0C20C0F",
selectOnEnter:true,
size:"221,20",
styleClass:"white",
typeid:4,
uuid:"B015F507-D93D-4B4A-99CD-290D54E141B4"
},
{
location:"11,32",
size:"128,20",
text:"Nombre Entidad",
transparent:true,
typeid:7,
uuid:"B45AC3AD-6836-4D0D-A72F-4C2C7248667F"
},
{
dataProviderID:"comisionefecto",
format:"###,##0.00",
location:"144,266",
name:"fld_comisionefecto",
onActionMethodID:"85EB9E2D-C44D-4487-BB9F-4AE71C9C4420",
selectOnEnter:true,
size:"99,20",
styleClass:"white",
typeid:4,
uuid:"C34C4B9F-7019-48DC-A77E-92E3211E9374"
},
{
dataProviderID:"ncuenta",
format:"|#[10]",
horizontalAlignment:0,
location:"317,113",
name:"fld_codigocuenta",
onActionMethodID:"09DCF8F2-9DD2-47D5-98A6-0289FF9BA7E0",
selectOnEnter:true,
size:"172,20",
styleClass:"white",
typeid:4,
uuid:"D03C529F-3F32-4752-97B6-FC04E5BBF5A7"
},
{
dataProviderID:"_comisionglobal",
format:"###,##0.00",
location:"386,291",
name:"fld_comisionglobal",
onActionMethodID:"-1",
selectOnEnter:true,
size:"75,20",
styleClass:"white",
typeid:4,
uuid:"D0DB036A-2083-4746-8FDB-96E6591AE8FE"
},
{
dataProviderID:"contacto",
format:"|U",
location:"144,238",
name:"fld_contacto",
onActionMethodID:"9431ECF2-7E50-4D25-9C66-04879442791B",
selectOnEnter:true,
size:"602,20",
styleClass:"white",
typeid:4,
uuid:"D12C0E9D-4615-43B2-8AA2-8E269CF1D1A4"
},
{
anchors:11,
dataProviderID:"poblacion",
format:"|U",
location:"144,87",
name:"fld_poblacion",
onActionMethodID:"C155460F-3051-4E5D-B99E-4CF54C091F80",
selectOnEnter:true,
size:"345,20",
styleClass:"white",
typeid:4,
uuid:"DD0005AB-F4D4-4DDB-B7DC-DC4A9C17BA0F"
},
{
dataProviderID:"personacontacto",
format:"|U",
location:"143,368",
name:"fld_personacontacto",
onActionMethodID:"9462B844-2978-4F0E-A869-D40BE3C85796",
selectOnEnter:true,
size:"255,20",
styleClass:"white",
typeid:4,
uuid:"DE933631-8B83-4E4D-A9F8-1C9508B00157"
},
{
location:"11,87",
size:"128,20",
text:"Población",
transparent:true,
typeid:7,
uuid:"E18430EF-4C3E-4C98-96C7-215B40095CE3"
},
{
location:"11,138",
size:"128,20",
text:"Nº Cuenta IBAN",
transparent:true,
typeid:7,
uuid:"E37B0C00-88EF-43A4-B79F-FB0F3CD4C73F"
},
{
anchors:9,
dataProviderID:"telefono",
format:"|#",
location:"563,113",
name:"fld_telefono",
onActionMethodID:"1E8AD1EC-9E5A-4B28-967F-19FA86411428",
selectOnEnter:true,
size:"184,20",
styleClass:"white",
typeid:4,
uuid:"E4E46650-2339-40B3-B2A2-6D08976AF2F7"
},
{
anchors:11,
dataProviderID:"direccion",
format:"|U",
location:"144,60",
name:"fld_direccion",
onActionMethodID:"2236B78A-F93D-4F9D-AEF6-49579E5B1FA0",
selectOnEnter:true,
size:"583,20",
styleClass:"white",
typeid:4,
uuid:"E6F86906-B1ED-4D22-A967-0F2E0D1682E4"
},
{
location:"11,113",
size:"128,20",
text:"Nº Cuenta Bancaria",
transparent:true,
typeid:7,
uuid:"EA7AC27B-50B2-4C08-BE40-DE8354098E12"
},
{
anchors:11,
dataProviderID:"nombreentidad",
format:"|U",
location:"144,32",
name:"fld_nombre",
onActionMethodID:"E6270C8B-B0EC-4882-BF6D-6E8B93EEEFB2",
selectOnEnter:true,
size:"583,20",
styleClass:"white",
typeid:4,
uuid:"EDA77C44-5629-495B-94CE-D0204258DE53"
},
{
anchors:9,
location:"499,138",
size:"62,20",
text:"CIF",
transparent:true,
typeid:7,
uuid:"F2F0C7C5-D252-4545-81AE-0379057DAE7C"
}
],
name:"dlg_BancosCuentasCargoGC",
namedFoundSet:"separate",
navigatorID:"-1",
onHideMethodID:"-1",
onLoadMethodID:"6042BD17-E0E5-42F5-875C-43065016662A",
onShowMethodID:"-1",
paperPrintScale:100,
scrollbars:36,
size:"770,449",
styleName:"svyWebCrm",
typeid:3,
uuid:"0B8403F2-2F68-48E0-A14A-725E9AEA98F0"