borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/tbmaestromateriales",
extendsID:"-1",
initialSort:"codigo asc",
items:[
{
formIndex:10000,
horizontalAlignment:0,
imageMediaID:"44ba5f7e-9ebd-4d7d-b556-244e37c83ede",
location:"210,4",
mediaOptions:1,
name:"btn_search",
onActionMethodID:"0E0C2068-3004-41AA-81FF-8DA26C647261",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"24,24",
toolTipText:"Buscar...",
transparent:true,
typeid:7,
uuid:"1FDC35C3-A756-410B-B947-5F89B21329B3",
verticalAlignment:0
},
{
background:"#ffffff",
borderType:"LineBorder,1,#969696",
dataProviderID:"scopes.globals.GCnav_search2",
location:"71,6",
name:"fld_search_cuenta",
onActionMethodID:"0E0C2068-3004-41AA-81FF-8DA26C647261",
selectOnEnter:true,
size:"135,22",
toolTipText:"Introduce los criterios de busqueda y clicke el boton buscar o pulse Enter",
typeid:4,
uuid:"53D9FE7E-484B-4E0F-8AD4-6FE23C96DAB9"
},
{
height:350,
partType:5,
typeid:19,
uuid:"56D57898-2F37-46FA-A95D-FE452F7903D9"
},
{
formIndex:1,
imageMediaID:"914C1DE9-1055-41D9-8BCE-2AA18CA7419F",
location:"189,10",
mediaOptions:14,
name:"btnClearSearch",
onActionMethodID:"D35A3E6A-58C4-4E77-8398-2745F62A64F3",
rolloverImageMediaID:"8A1F4F07-53C3-4EA9-B9C7-399445FA45DD",
showClick:false,
showFocus:false,
size:"14,14",
typeid:7,
uuid:"5DBBC82D-EBFA-47E6-9033-F9FC9B101DF6"
},
{
formIndex:10801,
imageMediaID:"AA9E509B-31C6-4B38-9669-1C064C0F702A",
labelFor:"descripcion",
location:"88,36",
mediaOptions:1,
name:"lbldescripcion",
onActionMethodID:"72D047B3-28B4-47CD-BCB0-0A6A5295C2D0",
rolloverCursor:12,
showClick:false,
size:"657,20",
text:"Descripción",
transparent:true,
typeid:7,
uuid:"A3C5CD35-9262-4D3A-A5EB-F1ED72370A96"
},
{
height:58,
partType:2,
typeid:19,
uuid:"AEDB7B35-9CCA-4164-A1A0-B7E3B054CB93"
},
{
anchors:11,
dataProviderID:"descripcion",
editable:false,
formIndex:10400,
location:"90,62",
name:"descripcion",
onActionMethodID:"6BDD3E77-FA4E-4416-91E9-CC79FD03C7CB",
size:"660,18",
styleClass:"white",
tabSeq:1,
typeid:4,
uuid:"B213CD70-93A1-4F71-9828-5E739EBCC758"
},
{
formIndex:10801,
imageMediaID:"AA9E509B-31C6-4B38-9669-1C064C0F702A",
labelFor:"codigo",
location:"2,36",
mediaOptions:1,
name:"lblcodigo",
onActionMethodID:"0310641B-A5F2-4183-A5B6-20CCA07018E4",
rolloverCursor:12,
showClick:false,
size:"81,20",
text:"Código",
transparent:true,
typeid:7,
uuid:"C83AEBEE-F856-444C-8FDC-7517C27C20FD"
},
{
formIndex:10801,
location:"10,8",
size:"56,20",
text:"Buscar",
transparent:true,
typeid:7,
uuid:"E01C521D-E46F-4BA1-8F49-09040FF1255C"
},
{
dataProviderID:"codigo",
editable:false,
formIndex:10800,
location:"5,62",
name:"codigo",
onActionMethodID:"6BDD3E77-FA4E-4416-91E9-CC79FD03C7CB",
size:"81,18",
styleClass:"white",
tabSeq:3,
typeid:4,
uuid:"F4AAF6D5-AA5D-497F-8A9F-F124698D88A5"
}
],
name:"dlgMaterialesGC",
navigatorID:"-1",
onFindCmdMethodID:"35363AAD-3DF6-415F-9520-3EE03F965246",
onLoadMethodID:"711B0FAB-95A0-4CEA-9311-A978C9F99F1B",
onSearchCmdMethodID:"0327F219-1709-4A79-BA15-8EE915052322",
onShowMethodID:"9875D86D-70D3-48AF-A1FB-0A59B9E08BC7",
paperPrintScale:100,
size:"750,350",
styleName:"svyWebCrm",
typeid:3,
uuid:"EAB012AF-C26D-4967-903F-79D6E6761B8C",
view:3