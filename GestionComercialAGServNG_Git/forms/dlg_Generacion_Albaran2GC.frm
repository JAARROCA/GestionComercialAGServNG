borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/cortraba",
items:[
{
dataProviderID:"cod_cot",
editable:false,
fontType:"Verdana,1,12",
foreground:"#0000ff",
formIndex:10400,
format:"00000",
location:"125,10",
name:"cod_cot",
size:"100,20",
styleClass:"noborder",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"1A776F6F-C2CC-4FAB-B321-1FA8CA046D32"
},
{
anchors:11,
borderType:"SpecialMatteBorder,1.0,0.0,0.0,0.0,#000000,#000000,#000000,#000000,0.0,",
formIndex:14805,
horizontalAlignment:4,
location:"12,97",
size:"638,2",
styleClass:"solidgrc",
typeid:7,
uuid:"1BB967F5-B25E-4405-AF75-ACC407C1E47D"
},
{
anchors:15,
borderType:"SpecialMatteBorder,0.0,1.0,1.0,1.0,#cccccc,#cccccc,#cccccc,#cccccc,0.0,",
formIndex:12300,
items:[
{
containsFormID:"65FD6F65-B122-4FD5-BB31-EE50ACAB05B3",
location:"32,141",
relationName:"GCcortraba_to_lortraba",
text:"lst__Pedido_Lineas2",
typeid:15,
uuid:"425EEDDD-BD05-40F7-A3FA-7F2E9550537E"
}
],
location:"12,101",
name:"tabs_mainPanel",
printable:false,
size:"638,214",
tabOrientation:-1,
typeid:16,
uuid:"1E798A57-2AEF-4D37-A814-E4CD18421917"
},
{
dataProviderID:"NuevoAlbaran",
editable:false,
fontType:"Verdana,1,12",
foreground:"#0000ff",
formIndex:12301,
format:"00000",
location:"496,10",
size:"100,20",
styleClass:"noborder",
transparent:true,
typeid:4,
uuid:"2383A421-1CAF-452C-9C84-CCAE254FD823"
},
{
formIndex:10800,
location:"12,76",
mediaOptions:14,
name:"lblLineas",
onActionMethodID:"-1",
showClick:false,
showFocus:false,
size:"108,21",
styleClass:"label_darkgrc",
text:"Líneas",
typeid:7,
uuid:"24D0F0A4-2DCF-4985-B743-46B641AF11D3"
},
{
formIndex:10500,
location:"10,10",
mediaOptions:14,
size:"110,22",
tabSeq:-1,
text:"Pedido",
transparent:true,
typeid:7,
uuid:"5E233454-CAAA-42B5-8549-B645346C0017"
},
{
formIndex:10500,
location:"10,37",
mediaOptions:14,
size:"110,22",
text:"Total Pedido",
transparent:true,
typeid:7,
uuid:"5EF50B63-5B88-46F8-9778-FCC30199BD9B"
},
{
background:"#e6e6e6",
height:323,
partType:5,
typeid:19,
uuid:"950DE0DB-EDED-4CBA-ACBB-51D0454BDB81"
},
{
formIndex:10500,
location:"362,37",
mediaOptions:14,
size:"130,22",
text:"Total Albarán",
transparent:true,
typeid:7,
uuid:"A4C40D7D-FE6E-41D1-B959-20D0E7A59F75"
},
{
formIndex:10500,
location:"362,10",
mediaOptions:14,
size:"130,22",
text:"Nº Albarán a generar",
transparent:true,
typeid:7,
uuid:"BEA9687B-64E1-450E-88B1-1CDF522A7A9C"
},
{
dataProviderID:"Importe",
editable:false,
fontType:"Verdana,1,12",
foreground:"#ff0000",
formIndex:12302,
format:"###,###,##0.00",
location:"497,37",
size:"100,20",
styleClass:"noborder",
transparent:true,
typeid:4,
uuid:"C402329F-410F-4984-8E65-2DCC19C0D589"
},
{
dataProviderID:"Importe",
editable:false,
fontType:"Verdana,1,12",
foreground:"#ff0000",
formIndex:12302,
format:"###,###,##0.00",
location:"125,37",
size:"100,20",
styleClass:"noborder",
transparent:true,
typeid:4,
uuid:"E63C0D23-451C-4DE5-BD6E-2AE596469CC5"
}
],
name:"dlg_Generacion_Albaran2GC",
namedFoundSet:"separate",
navigatorID:"-1",
onLoadMethodID:"35D40F32-D27C-4B65-AB86-2CD947604BC8",
onShowMethodID:"F5415F76-8B2A-4181-A7B1-17535D3967B5",
paperPrintScale:100,
scrollbars:36,
size:"659,323",
styleName:"svyWebCrm",
typeid:3,
uuid:"EC54AA3E-AE3E-4A26-94E8-DD89BE19C5EB"