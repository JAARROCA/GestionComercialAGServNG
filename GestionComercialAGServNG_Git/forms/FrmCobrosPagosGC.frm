dataSource:"db:/conexiongestioncomercialag/ccobrospagos",
encapsulation:0,
extendsID:"04464685-C11E-4E07-97B5-D8B82C292BAA",
items:[
{
formIndex:11300,
location:"256,161",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"122,22",
text:"Importe Factura",
transparent:true,
typeid:7,
uuid:"02059EC4-45F9-4673-98F0-665044C17FB6"
},
{
formIndex:10101,
location:"15,270",
size:"132,20",
text:"Fecha de Negociación",
transparent:true,
typeid:7,
uuid:"0709EE6F-A572-424D-8821-690BD28EAD54"
},
{
formIndex:10101,
location:"382,319",
size:"130,20",
text:"Fecha de Factura",
transparent:true,
typeid:7,
uuid:"1786C922-7C39-471A-A80F-FAB666021544"
},
{
borderType:"EtchedBorder,0,null,null",
dataProviderID:"tipodeudor",
displayType:3,
formIndex:11401,
location:"592,88",
name:"fld_tipodeudor",
size:"128,51",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"201614FD-5073-4B05-B8C4-F9D6961FA719",
valuelistID:"BD2FF9C8-D57B-42AC-8373-E290C78083E7"
},
{
anchors:15,
borderType:"SpecialMatteBorder,0.0,1.0,1.0,1.0,#cccccc,#cccccc,#cccccc,#cccccc,0.0,",
formIndex:12300,
items:[
{
containsFormID:"5678EB2B-1BD6-46F2-9123-F0EBA6C7F2D6",
location:"41,429",
relationName:"gcccobrospagos_to_ccobrospagos",
text:"lst__EfectosPendientesGC",
typeid:15,
uuid:"04795397-D170-4C47-BFEA-A49559A58A03"
}
],
location:"15,397",
name:"tabs_mainPanel",
printable:false,
size:"735,116",
tabOrientation:-1,
tabSeq:15,
typeid:16,
uuid:"21DC41EE-6B7C-4DCE-9522-CBD1EB44F2D4"
},
{
dataProviderID:"numdocumento",
formIndex:11400,
format:"|U",
location:"147,136",
name:"fld_numdocumento",
onActionMethodID:"8830F3A3-4D3F-469B-87CC-A2B29F73CE2D",
onFocusLostMethodID:"-1",
size:"272,20",
tabSeq:3,
typeid:4,
uuid:"2A15A79D-D203-44DF-BD6E-346CAB0E3977"
},
{
anchors:11,
borderType:"SpecialMatteBorder,1.0,0.0,0.0,0.0,#000000,#000000,#000000,#000000,0.0,",
formIndex:12301,
horizontalAlignment:4,
location:"15,392",
size:"730,1",
transparent:true,
typeid:7,
uuid:"2A5C658C-6F1D-40F8-B5A1-F58CF8B7E2AD"
},
{
formIndex:11108,
imageMediaID:"59872c90-974b-4c4e-b035-b56b662db3ce",
location:"123,111",
name:"BtnCuentaContable",
onActionMethodID:"2BBEEE0A-112F-406F-BADE-54099E1B2799",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"20,20",
tabSeq:-2,
toolTipText:"Buscar Cuenta Contable...",
typeid:7,
uuid:"2B388553-063D-4B27-B176-19E2AA6F0F77",
visible:false
},
{
dataProviderID:"idfactura",
formIndex:11400,
format:"|U",
location:"147,319",
name:"fld_idfactura",
onActionMethodID:"58A2C52B-1219-4369-A0F8-F4B670822823",
onFocusLostMethodID:"-1",
size:"230,20",
tabSeq:12,
typeid:4,
uuid:"2C0BA137-B0C5-4D86-869A-872D572D9F2B"
},
{
dataProviderID:"GCccobrospagos_to_maestrobancosctascargo.nombreentidad",
editable:false,
foreground:"#0000ff",
formIndex:11402,
location:"247,294",
size:"320,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"2E2E7BF7-A06D-4064-9FA0-41AA5D38DD4F"
},
{
dataProviderID:"fecharemesa",
displayType:5,
formIndex:12302,
format:"dd-MM-yyyy",
location:"148,270",
name:"fld_fecharemesa",
onActionMethodID:"1942F81C-0744-4CD0-B512-7A271E361476",
onDataChangeMethodID:"-1",
size:"130,20",
typeid:4,
uuid:"2E58280C-6588-4B3C-8DF9-BDCD4499F871"
},
{
dataProviderID:"fechavencimiento",
fontType:"Verdana,1,12",
foreground:"#ff0000",
formIndex:10102,
format:"dd-MM-yyyy",
location:"148,86",
name:"lblfechavencimiento",
onActionMethodID:"-1",
size:"115,20",
styleClass:"noborder",
typeid:4,
uuid:"3E49049E-B721-4072-ACE5-F0443C91339C"
},
{
formIndex:11300,
location:"15,136",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"106,22",
text:"Nº de Documento",
transparent:true,
typeid:7,
uuid:"42F2AA2F-1147-4F9F-8512-665413F683FF"
},
{
dataProviderID:"fechafactura",
displayType:5,
formIndex:12302,
format:"dd-MM-yyyy",
location:"508,319",
name:"fld_fechafactura",
onActionMethodID:"CD5FF829-1BF9-4A60-8D2F-6E9396E3C47A",
onDataChangeMethodID:"-1",
size:"130,20",
typeid:4,
uuid:"44DBF5E9-97D3-41BC-A126-E15B027919D7"
},
{
height:523,
partType:5,
typeid:19,
uuid:"45B6270B-951A-4506-A258-AB1F35A21401"
},
{
anchors:11,
dataProviderID:"observaciones",
formIndex:11400,
format:"|U",
location:"146,345",
name:"fld_observaciones",
onActionMethodID:"-1",
onFocusLostMethodID:"-1",
size:"615,20",
tabSeq:14,
typeid:4,
uuid:"4AE79DBC-F591-41E1-B1AB-20CD47F7C533"
},
{
dataProviderID:"desccuenta",
editable:false,
foreground:"#0000ff",
formIndex:11402,
location:"247,111",
size:"257,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"4D70FD81-93B6-4ABA-94BE-61A5B429EC36"
},
{
anchors:11,
borderType:"EtchedBorder,0,null,null",
dataProviderID:"tipoadeudo",
displayType:3,
formIndex:11401,
location:"509,144",
name:"fld_tipoadeudo",
size:"283,121",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"508B9B6E-F628-4A40-8E10-C8F8790C1E4F",
valuelistID:"BB58860C-56E3-4C45-9EE7-E34909AE5C9A",
visible:false
},
{
formIndex:11300,
location:"419,270",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"37,22",
text:"Tipo",
transparent:true,
typeid:7,
uuid:"54CCDFE0-B312-4697-B519-923CA9928398",
visible:false
},
{
formIndex:11300,
location:"15,294",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"109,22",
text:"Cta. Banco Cargo",
transparent:true,
typeid:7,
uuid:"637869CA-EDE2-4E8D-937C-3C54FB740A09"
},
{
formIndex:11108,
imageMediaID:"59872c90-974b-4c4e-b035-b56b662db3ce",
location:"123,294",
name:"BtnCuentaBancoCargo",
onActionMethodID:"D19FF200-2F36-4786-86C8-BE6B6FC4B7B9",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"20,20",
tabSeq:-2,
toolTipText:"Buscar Cuenta de Cargo del Banco...",
typeid:7,
uuid:"6BC73208-5980-4B1E-87E3-F9018AA3AE24"
},
{
borderType:"EtchedBorder,0,null,null",
dataProviderID:"cobropago",
displayType:3,
formIndex:11401,
location:"509,88",
name:"fld_cobropago",
size:"77,53",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"6DB2A6B4-E71D-4AF1-8967-D78EDB56203C",
valuelistID:"ECDC7E7B-DDC0-4547-BC01-129143890C55"
},
{
formIndex:11300,
location:"15,215",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"105,22",
text:"Forma de Pago",
transparent:true,
typeid:7,
uuid:"73BCFE10-9D50-49E9-982F-A9B91E4FA4FB"
},
{
formIndex:11300,
location:"15,345",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"105,22",
text:"Observación",
transparent:true,
typeid:7,
uuid:"7C7F40F9-50A2-4C9D-A36E-66563EA34594"
},
{
dataProviderID:"importevencimiento",
formIndex:11400,
format:"###,###,###,###.00",
horizontalAlignment:0,
location:"147,161",
name:"fld_importevencimiento",
onActionMethodID:"3BAD445A-01D0-411D-94A1-0D25D05F9F08",
onFocusLostMethodID:"-1",
size:"104,20",
tabSeq:4,
typeid:4,
uuid:"7F938E94-A94F-4946-9302-1A2D1B90F31B"
},
{
dataProviderID:"tipo",
displayType:2,
editable:false,
formIndex:11400,
location:"461,270",
name:"fld_tipo",
onActionMethodID:"-1",
onFocusLostMethodID:"-1",
size:"179,20",
tabSeq:10,
typeid:4,
uuid:"839C5B0B-7144-470B-8FD8-0669B3201A4C",
valuelistID:"B1B1D599-0DDA-4C77-9793-710ED45B9295",
visible:false
},
{
dataProviderID:"fechafactura",
formIndex:10102,
format:"dd-MM-yyyy",
location:"508,319",
name:"lblfechafactura",
onActionMethodID:"-1",
size:"115,20",
styleClass:"noborder",
typeid:4,
uuid:"88B5B548-D0AD-48AF-A1D1-DEA29A2C3151"
},
{
formIndex:11300,
location:"15,242",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"106,22",
text:"Situación Efecto",
transparent:true,
typeid:7,
uuid:"894D16E1-34F2-43F3-BDE6-3FAE6FBD912E"
},
{
dataProviderID:"GCccobrospagos_to_tbmaestroformpago.denom_fp",
editable:false,
foreground:"#0000ff",
formIndex:11402,
location:"186,215",
size:"301,20",
styleClass:"noborder",
tabSeq:-2,
typeid:4,
uuid:"8DC9EF6F-5D54-4035-9A4A-245D8BD00C5A"
},
{
formIndex:11108,
imageMediaID:"59872c90-974b-4c4e-b035-b56b662db3ce",
location:"123,215",
name:"BtnFormaPago",
onActionMethodID:"C2526F61-BEB4-41B8-8F4C-69D5B594FEFA",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"20,20",
tabSeq:-2,
toolTipText:"Buscar Forma de Pago...",
typeid:7,
uuid:"9BE211E2-9AE9-40A5-868E-EF8A564F8E0D"
},
{
dataProviderID:"situacion",
displayType:2,
editable:false,
formIndex:11400,
location:"147,242",
name:"situacion",
onActionMethodID:"-1",
onFocusLostMethodID:"-1",
size:"180,20",
tabSeq:8,
typeid:4,
uuid:"9D212F3B-C415-4AAA-972A-436BB0544B10",
valuelistID:"ADEFF2C3-A506-46A7-A4C5-4FBD1E119256"
},
{
formIndex:11300,
location:"15,161",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"132,22",
text:"Importe Vencimiento",
transparent:true,
typeid:7,
uuid:"9D2E4C1B-A924-4FAF-BA3F-E479F6901BE9"
},
{
dataProviderID:"importefactura",
formIndex:11400,
format:"###,###,###,###.00",
horizontalAlignment:0,
location:"383,161",
name:"fld_importefactura",
onActionMethodID:"2CCA59F6-F69E-4551-A890-F92FE8A626F8",
onFocusLostMethodID:"-1",
size:"104,20",
tabSeq:5,
typeid:4,
uuid:"AD9CAD73-D94F-4504-B3CC-4D26F62B012A"
},
{
dataProviderID:"cuentabanco",
formIndex:11400,
format:"|#[8]",
location:"147,294",
name:"fld_cuentabanco",
onActionMethodID:"DA45D3DB-B976-4FC1-B3FE-C471C47FF1C7",
onFocusLostMethodID:"-1",
size:"95,20",
tabSeq:11,
typeid:4,
uuid:"B17AB3FC-C11E-4A43-9FF8-795681F7FD25"
},
{
dataProviderID:"concepto",
formIndex:11400,
format:"|U",
location:"147,187",
name:"fld_concepto",
onActionMethodID:"BA56720F-B7B5-486A-AFC6-4A1D409BDFFD",
onFocusLostMethodID:"-1",
size:"272,20",
tabSeq:6,
typeid:4,
uuid:"B2428EE7-9F57-4675-AD2E-836802EA0615"
},
{
anchors:11,
displaysTags:true,
fontType:"Verdana,1,12",
formIndex:10100,
location:"5,0",
mediaOptions:14,
name:"lbl_section",
size:"362,47",
styleClass:"label_whtlg",
text:"<html> <head><\/head> <body> Fecha Vencimiento: %%fechaformato%%<br>\
Cuenta Contable: %%cuentacontable%% - %%desccuenta%%  <\/body><\/html>                                                ",
transparent:true,
typeid:7,
uuid:"C3E29C33-B2E3-499D-BD0A-3993CAAACC03"
},
{
dataProviderID:"cuentacontable",
fontType:"Verdana,1,11",
foreground:"#0000ff",
formIndex:10103,
format:"|U",
location:"147,111",
name:"lblcuentacontable",
onActionMethodID:"-1",
size:"94,20",
styleClass:"noborder",
typeid:4,
uuid:"D90E567B-2EA5-4C9D-80FE-32B03F2607C9"
},
{
dataProviderID:"formapago",
formIndex:11400,
format:"|U",
location:"148,215",
name:"fld_formapago",
onActionMethodID:"D8A00751-C0EE-4A85-966F-5348C12F44DD",
onFocusLostMethodID:"-1",
size:"33,20",
tabSeq:7,
typeid:4,
uuid:"E1DCD949-124A-4678-B931-1DC1CB550C47"
},
{
formIndex:11300,
location:"15,319",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"106,22",
text:"Nº Factura",
transparent:true,
typeid:7,
uuid:"E2349EEF-2397-4CD6-B04F-4E911BDF181E"
},
{
formIndex:11300,
location:"15,187",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"106,22",
text:"Concepto",
transparent:true,
typeid:7,
uuid:"E982E069-AF6E-437F-818C-9B7920549111"
},
{
dataProviderID:"fechavencimiento",
displayType:5,
formIndex:12302,
format:"dd-MM-yyyy",
location:"148,86",
name:"fld_fechavencimiento",
onActionMethodID:"7F996517-CDA2-4A96-BBC3-BC72BB4CEF3D",
onDataChangeMethodID:"CE1FDBB5-BE38-4857-8176-801AB84F4642",
size:"130,20",
typeid:4,
uuid:"EC65BB4A-93C4-45C1-8FE0-75F1FA9016EC"
},
{
formIndex:11300,
location:"15,111",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"105,22",
text:"Cuenta",
transparent:true,
typeid:7,
uuid:"EF6AB98D-8AAF-4F33-937D-08F258D30FAA"
},
{
formIndex:10101,
location:"15,86",
size:"130,20",
text:"Fecha de Vencimiento",
transparent:true,
typeid:7,
uuid:"F758BDBB-4399-4434-8A9F-318A1420B705"
},
{
formIndex:10800,
location:"15,371",
mediaOptions:14,
name:"lblEfectosPendientes",
onActionMethodID:"-1",
showClick:false,
showFocus:false,
size:"143,21",
styleClass:"label_darkgrc",
tabSeq:-2,
text:"Efectos Pendientes",
typeid:7,
uuid:"F942E928-67DE-45E9-8E97-325E072944AF"
},
{
dataProviderID:"cuentacontable",
formIndex:11400,
format:"|#[8]",
location:"147,111",
name:"cuentacontable",
onActionMethodID:"FDE4E10F-7D92-4D9F-A9E4-7359D65AFE18",
onDataChangeMethodID:"130CDF50-FFC3-4A8B-8751-E184E905ADE5",
onFocusLostMethodID:"-1",
size:"94,20",
tabSeq:2,
typeid:4,
uuid:"FCB44708-134A-4D4B-8AF4-40246B73981B"
},
{
dataProviderID:"fecharemesa",
fontType:"Verdana,1,12",
foreground:"#ff0000",
formIndex:10102,
format:"dd-MM-yyyy",
location:"148,270",
name:"lblfecharemesa",
onActionMethodID:"-1",
size:"115,20",
styleClass:"noborder",
typeid:4,
uuid:"FFB0381D-0DBD-4728-BCF0-93D95E51916A"
}
],
name:"FrmCobrosPagosGC",
navigatorID:"9D784566-8985-40F8-BDAC-53C8CB1010A3",
onLoadMethodID:"FA5A0CC6-4DF9-4ADA-A557-DF99679279AB",
onNextRecordCmdMethodID:"DAB40BE1-1036-4EE6-95D4-31DE1D0870FE",
onRecordSelectionMethodID:"5030393F-0FEB-4309-A586-2D0EE193BD43",
onShowMethodID:"55969A2A-9EEB-439D-B67F-AD2566288370",
scrollbars:0,
showInMenu:true,
size:"802,706",
typeid:3,
uuid:"FF80C023-C7EF-4A1A-A13C-9902ED92D897"