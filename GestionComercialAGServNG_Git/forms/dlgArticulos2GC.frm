borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/conexiongestioncomercialag/tbmaestroarticulos",
extendsID:"-1",
initialSort:"codigo asc",
items:[
{
height:390,
partType:2,
typeid:19,
uuid:"0D480E91-5330-4114-A12A-AD9A8E8EEAFF"
},
{
json:{
imageStyleClass:"fa fa-search",
location:{
x:146,
y:4
},
onActionMethodID:"580DC81E-7AE2-4F4B-B132-2D6E34ED6B38",
size:{
height:30,
width:50
},
styleClass:"svy-searchbutton"
},
location:"146,4",
name:"btn_search",
size:"50,30",
styleClass:"svy-searchbutton",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"43D41FB0-18D6-4A78-A11A-7BB8D191F936"
},
{
formIndex:1,
imageMediaID:"914C1DE9-1055-41D9-8BCE-2AA18CA7419F",
location:"127,12",
mediaOptions:14,
name:"btnClearSearch",
onActionMethodID:"63B9F0B4-FF79-405F-B407-DC8A58501BDF",
rolloverImageMediaID:"8A1F4F07-53C3-4EA9-B9C7-399445FA45DD",
showClick:false,
showFocus:false,
size:"14,14",
typeid:7,
uuid:"4F9030A3-150C-47D4-8B80-CE62BEED49A4"
},
{
json:{
dataProviderID:"scopes.globals.GCnav_search2",
location:{
x:6,
y:4
},
onActionMethodID:"580DC81E-7AE2-4F4B-B132-2D6E34ED6B38",
placeholderText:"Buscar..."
},
location:"6,4",
name:"fld_search_cuenta",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"87892556-A25E-46A3-85D9-4918F36DF7B8"
},
{
anchors:15,
json:{
anchors:15,
columns:[
{
dataprovider:"codigo",
editFormSize:{
height:18,
width:81
},
headerTitle:"CÓDIGO",
id:"codigo",
styleClassDataprovider:null,
svyUUID:"EE33C785-1AB8-47BE-92E8-F71581190F0D"
},
{
dataprovider:"descripcion",
editFormSize:{
height:18,
width:660
},
headerTitle:"DESCRIPCIÓN",
id:"descripcion",
styleClassDataprovider:null,
svyUUID:"F72F31E3-A78B-49FF-A1A1-20E0693D2EAD"
}
],
location:{
x:4,
y:48
},
onCellClick:"388FB57E-A91C-406E-B6DD-070897031445",
size:{
height:342,
width:745
}
},
location:"4,48",
name:"datagrid_articulos",
size:"745,342",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"C436CA3F-57A9-4A2C-9962-C247A914A7E8"
}
],
name:"dlgArticulos2GC",
navigatorID:"-1",
onFindCmdMethodID:"76740FB2-057F-4255-9543-BFB0FE3421B4",
onLoadMethodID:"41365F85-8C61-413E-9937-DDFBE56C5CC1",
onSearchCmdMethodID:"57D0DFD3-BDBB-4803-815A-123BD4E5A8E8",
onShowMethodID:"0127FCFB-87B8-4010-8DF7-96F71654C0E0",
paperPrintScale:100,
size:"750,350",
styleName:"svyWebCrm",
typeid:3,
uuid:"A82533C6-4B42-4C88-AE1D-D07BAB2EA954",
view:3