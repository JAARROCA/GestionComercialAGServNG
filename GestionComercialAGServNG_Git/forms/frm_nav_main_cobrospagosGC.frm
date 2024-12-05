borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/ccobrospagos",
items:[
{
formIndex:10000,
horizontalAlignment:0,
imageMediaID:"B90CD7AC-81CF-4231-AA76-885E57DA1DA6",
location:"181,15",
mediaOptions:14,
name:"btn_principal",
onActionMethodID:"019675E9-6241-44ED-ACFC-E836D945BFC8",
rolloverCursor:12,
showFocus:false,
size:"68,32",
toolTipText:"Inicio/Principal",
transparent:true,
typeid:7,
uuid:"00652683-9CAF-4687-BFB8-0E3A394014D4",
verticalAlignment:0
},
{
formIndex:10100,
location:"1,2",
mediaOptions:14,
name:"lbl_search",
size:"50,17",
styleClass:"whtctr",
tabSeq:-1,
text:"Buscar",
transparent:true,
typeid:7,
uuid:"44852A86-3435-4497-AA04-8E350366F091"
},
{
formIndex:1,
imageMediaID:"914C1DE9-1055-41D9-8BCE-2AA18CA7419F",
location:"131,24",
mediaOptions:14,
name:"btnClearSearch",
onActionMethodID:"A66D9374-B95F-46F6-9988-FEBE9DB9546D",
rolloverImageMediaID:"8A1F4F07-53C3-4EA9-B9C7-399445FA45DD",
showClick:false,
showFocus:false,
size:"14,14",
typeid:7,
uuid:"5C0EF88D-AA52-4379-83BD-20865C523FBB"
},
{
anchors:12,
borderType:"EmptyBorder,0,0,0,0",
formIndex:10200,
items:[
{
containsFormID:"18D46C44-BEAC-4085-8E34-B755D5D91503",
location:"6,0",
relationName:"gcsolution_navigation_cobrospagos_to_solution_navigation_cobrospagos",
text:"lst_solution_navigation_gccobrospagoGC",
typeid:15,
uuid:"3DB971AF-B8D9-4EBC-B5A0-73B38D1C905B"
}
],
location:"0,399",
name:"tabs_solNav",
printable:false,
size:"249,240",
tabOrientation:-1,
typeid:16,
uuid:"888CC062-2DC8-40D6-8788-185D827F036E"
},
{
background:"#004080",
height:47,
partType:2,
typeid:19,
uuid:"AF36CF4A-8E64-444B-9331-9E2215615CFC"
},
{
formIndex:10000,
horizontalAlignment:0,
imageMediaID:"44ba5f7e-9ebd-4d7d-b556-244e37c83ede",
location:"152,20",
mediaOptions:1,
name:"btn_search",
onActionMethodID:"38D244F5-D93A-4ECD-BC68-F97414142B05",
rolloverCursor:12,
rolloverImageMediaID:"133470B1-41E1-44D0-8427-223B043DE501",
showClick:false,
showFocus:false,
size:"24,22",
toolTipText:"Buscar...",
transparent:true,
typeid:7,
uuid:"BF0A87FD-8AD3-4ECD-A0E4-B9356CF15883",
verticalAlignment:0
},
{
anchors:13,
borderType:"EmptyBorder,0,0,0,0",
formIndex:10400,
items:[
{
containsFormID:"F2D3FA84-7D9A-4064-B459-E3CFB74C77AF",
location:"26,73",
text:"lst_CobrosPagosGC",
typeid:15,
uuid:"200B6279-197E-4CC0-B68C-795370630D2E"
},
{
containsFormID:"7B8429EC-7D69-4005-8D21-56FC4120F101",
location:"70,154",
text:"lst_FormaPago2GC",
typeid:15,
uuid:"C1267B6F-C909-4CA6-8F92-98CE8D356276"
},
{
containsFormID:"4DC51915-2D07-4F73-BC37-F3E952717B22",
location:"58,113",
text:"lst_BancosCuentasCargo2GC",
typeid:15,
uuid:"D1B50E53-C976-45FC-B2A1-DC319EBD29FE"
}
],
location:"0,47",
name:"tabs_recList",
printable:false,
size:"249,352",
tabOrientation:-1,
typeid:16,
uuid:"CB78A6D0-958C-4A80-AAB8-DB565D0B4B53"
},
{
height:640,
partType:5,
typeid:19,
uuid:"D5A288A8-529D-4A9C-8983-48D8B82DDCC9"
},
{
background:"#ebebeb",
borderType:"LineBorder,1,#969696",
dataProviderID:"scopes.globals.GCnav_search",
location:"4,20",
name:"fld_search",
onActionMethodID:"38D244F5-D93A-4ECD-BC68-F97414142B05",
placeholderText:"Introduzca búsqueda",
size:"143,22",
toolTipText:"Introduzca un criterio de busqueda y clicke el icono de la lupa o presione enter",
typeid:4,
uuid:"E0BB8487-679B-4F89-8F37-AFE907BF7F8D"
}
],
name:"frm_nav_main_cobrospagosGC",
navigatorID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"-1",
paperPrintScale:100,
scrollbars:36,
size:"250,640",
styleName:"svyWebCrm",
typeid:3,
uuid:"9D784566-8985-40F8-BDAC-53C8CB1010A3",
view:5