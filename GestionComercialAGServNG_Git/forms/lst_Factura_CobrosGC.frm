borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/tbfacturacabeceracobros",
items:[
{
foreground:"#0000ff",
formIndex:10300,
horizontalAlignment:4,
location:"20,179",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"120,20",
text:"Total cobrado",
transparent:true,
typeid:7,
uuid:"01489536-F121-411A-8034-88E81BF93894"
},
{
dataProviderID:"motivo_cob",
formIndex:11412,
location:"271,40",
onDoubleClickMethodID:"BADBD30F-C499-41E0-B5A2-9B09BB69E0BD",
size:"514,20",
toolTipText:"%%concep_lfa%%",
transparent:true,
typeid:7,
uuid:"050DA103-7378-42DD-BEF6-161E0D0B90DD"
},
{
borderType:"SpecialMatteBorder,1.0,0.0,0.0,0.0,#666666,#666666,#666666,#666666,0.0,",
formIndex:11100,
horizontalAlignment:4,
location:"4,25",
mediaOptions:14,
size:"786,2",
tabSeq:-1,
transparent:true,
typeid:7,
uuid:"085F8948-714E-42FB-A03A-6BBB5D8EB34B"
},
{
dataProviderID:"sumimporte",
foreground:"#0000ff",
formIndex:11411,
format:"###,##0.00",
horizontalAlignment:0,
location:"145,179",
onDoubleClickMethodID:"BADBD30F-C499-41E0-B5A2-9B09BB69E0BD",
size:"105,20",
transparent:true,
typeid:7,
uuid:"0F80B319-6E20-42F6-96C1-C87C4A817C25"
},
{
formIndex:10300,
horizontalAlignment:0,
location:"26,8",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"114,17",
tabSeq:-1,
text:"Fecha Cobro",
transparent:true,
typeid:7,
uuid:"509B0702-2F15-4F4E-8F71-331428C453F4"
},
{
formIndex:10300,
location:"145,8",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"105,17",
text:"Cantidad Pagada",
transparent:true,
typeid:7,
uuid:"5C228435-BEB5-4889-BB9F-E60D708BB32B"
},
{
displaysTags:true,
formIndex:11200,
imageMediaID:"1d139c7e-0e22-41bd-bcae-6c4f31c0395c",
location:"5,5",
mediaOptions:1,
name:"btn_newLinea",
onActionMethodID:"4F82A890-A186-4993-AEC8-279FC53EE3CB",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"16,16",
toolTipText:"Añadir una nueva Linea",
transparent:true,
typeid:7,
uuid:"5EFAE260-3E94-419C-B0EB-F8A05C0F5A97"
},
{
height:175,
partType:5,
typeid:19,
uuid:"65EA1A99-CDB2-43D2-A52B-590EE9A8DD98"
},
{
enabled:false,
formIndex:10600,
horizontalAlignment:0,
imageMediaID:"5001a7d2-6e60-43a7-9d56-9afde6409a90",
location:"26,40",
mediaOptions:1,
name:"btn_editc",
onActionMethodID:"C05B2818-2ABF-4D23-AEF9-A33FCCE97F96",
showClick:false,
showFocus:false,
size:"22,20",
toolTipText:"Borrar Línea",
transparent:true,
typeid:7,
uuid:"6B0541E7-DF1D-4F80-A128-DA4707F17F96",
verticalAlignment:0,
visible:false
},
{
dataProviderID:"impor_cob",
formIndex:11411,
format:"###,##0.00",
horizontalAlignment:0,
location:"145,40",
onDoubleClickMethodID:"BADBD30F-C499-41E0-B5A2-9B09BB69E0BD",
size:"121,20",
transparent:true,
typeid:7,
uuid:"6FE0A4AD-9DD1-434F-B453-54493C6BED77"
},
{
dataProviderID:"fecha_cob",
formIndex:11409,
format:"dd-MM-yyyy",
horizontalAlignment:0,
location:"53,40",
onDoubleClickMethodID:"BADBD30F-C499-41E0-B5A2-9B09BB69E0BD",
size:"87,20",
transparent:true,
typeid:7,
uuid:"7614227F-0D66-40A2-BEBE-5CD0EE20BFAD"
},
{
height:28,
partType:2,
typeid:19,
uuid:"7969553B-24D2-4F23-ACAE-31D98401E817"
},
{
height:205,
partType:7,
typeid:19,
uuid:"8ED79CD6-31ED-4C19-BF5B-AB497B79FE3B"
},
{
enabled:false,
formIndex:10600,
horizontalAlignment:0,
imageMediaID:"f68b7908-1d37-454d-84f5-486b490013ec",
location:"0,40",
mediaOptions:1,
name:"btn_edit",
onActionMethodID:"BADBD30F-C499-41E0-B5A2-9B09BB69E0BD",
showClick:false,
showFocus:false,
size:"25,20",
toolTipText:"Ir a la Línea",
transparent:true,
typeid:7,
uuid:"C3F2F929-AC2B-4FDF-AA55-1A4861A4E82C",
verticalAlignment:0,
visible:false
},
{
formIndex:10300,
location:"260,8",
mediaOptions:14,
showClick:false,
showFocus:false,
size:"285,17",
text:"Pagado a",
transparent:true,
typeid:7,
uuid:"EBC11B6F-D809-42DF-9AF0-CF8C7E97F317"
},
{
anchors:3,
displaysTags:true,
formIndex:11200,
imageMediaID:"4C933172-DC07-4EE3-B3C7-84DD0E3B50E6",
location:"560,5",
mediaOptions:1,
name:"btn_newLineac",
onActionMethodID:"6E8EC9AB-7C40-4DE8-B619-4F82B5413AE7",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"215,20",
text:"Registrar cobro automático",
toolTipText:"Registrar cobro automático",
transparent:true,
typeid:7,
uuid:"FA646ABC-FFFC-436B-8FD7-B028EBE40C50"
}
],
name:"lst_Factura_CobrosGC",
onShowMethodID:"-1",
paperPrintScale:100,
size:"800,195",
styleName:"svyWebCrm",
typeid:3,
uuid:"35CD9D99-8674-4CAF-8D65-59B251465BEF",
view:3