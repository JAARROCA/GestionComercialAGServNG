borderType:"EmptyBorder,0,0,0,0",
customProperties:"methods:{\
onLoadMethodID:{\
arguments:null,\
parameters:null\
}\
}",
dataSource:"db:/conexiongestioncomercialag/tbfacturacabecera",
extendsID:"-1",
initialSort:"eje_cfa desc, nup_cfa desc, ser_cfa asc",
items:[
{
height:399,
partType:5,
typeid:19,
uuid:"07F22D49-86B9-43B9-AC36-0B4C8C585529"
},
{
height:389,
partType:2,
typeid:19,
uuid:"44F3F9F0-A878-46F0-A086-34AD0348ACF7"
},
{
anchors:15,
json:{
anchors:15,
columns:[
{
dataprovider:"enviadaTicketBAI",
id:"enviadaTicketBAI",
maxWidth:20,
showAs:"sanitizedHtml",
styleClassDataprovider:null,
svyUUID:"4A9CB940-B6C2-41BE-A261-082818627C06"
},
{
dataprovider:"icon_display",
editFormSize:{
height:20,
width:20
},
id:"icon_display",
maxWidth:20,
showAs:"sanitizedHtml",
styleClassDataprovider:null,
svyUUID:"FE83144E-DA3D-49A0-960F-91C9E68CE9F9"
},
{
dataprovider:"list_display",
headerTitle:"FACTURAS A CLIENTES",
id:"list_display",
styleClassDataprovider:null,
svyUUID:"5E900B9C-2D06-4498-A104-C82C4CAA1934"
},
{
dataprovider:"fecha_cfa",
format:"dd-MM-yyyy",
headerTitle:"FECHA",
id:"fecha_cfa",
styleClassDataprovider:null,
svyUUID:"ACABF1D6-A778-486D-9409-9E5FBE687C38"
}
],
enableColumnMove:false,
enableColumnResize:false,
enableSorting:false,
location:{
x:4,
y:2
},
onCellClick:"BAB6C02C-C1F4-49B1-A81A-CD0FF7339237",
size:{
height:387,
width:639
}
},
location:"4,2",
name:"datagrid_facturas",
size:"639,387",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"45EE42FE-080A-4C3E-9FCF-CCB42C62E124"
}
],
name:"lst_Facturas2GC",
navigatorID:"-1",
onFindCmdMethodID:"ACC3D735-C91C-4C79-8D49-4582143B0A41",
onLoadMethodID:"8F792FA9-1136-4467-B5BA-EF17958E344C",
onSearchCmdMethodID:"BB577239-D6EA-45E9-97BD-5CB2D1FCD747",
onShowMethodID:"EEBAAF87-46EA-440C-954E-437BA1E9F6DA",
paperPrintScale:100,
size:"644,399",
styleName:"svyWebCrm",
typeid:3,
uuid:"F4006C6A-E847-473C-B054-7DF8EA0986D0",
view:3