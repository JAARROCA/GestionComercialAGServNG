customProperties:"methods:{\
onDeleteRecordCmdMethodID:{\
arguments:null,\
parameters:null\
},\
onNewRecordCmdMethodID:{\
arguments:null,\
parameters:null\
},\
onNextRecordCmdMethodID:{\
arguments:null,\
parameters:null\
},\
onPreviousRecordCmdMethodID:{\
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
dataSource:"db:/conexiongestioncomercialag/tbmaestromateriales",
encapsulation:0,
extendsID:"C30088CD-E293-4201-A994-4FCC512678E2",
initialSort:"codigo asc",
items:[
{
anchors:3,
dataProviderID:"abreviatura",
format:"|U",
location:"638,86",
name:"fld_abreviatura",
onActionMethodID:"-1",
size:"128,20",
typeid:4,
uuid:"04207B5A-9F70-4BC7-8E21-D2C4EF7E2835"
},
{
dataProviderID:"DisponibleReal",
formIndex:10104,
horizontalAlignment:4,
location:"649,303",
size:"90,20",
styleClass:"noborder",
typeid:4,
uuid:"05FC15FD-6853-4E31-A8F0-DBFDC50C60C3",
visible:false
},
{
dataProviderID:"paso",
formIndex:10104,
format:"###,##0.00",
horizontalAlignment:0,
location:"654,192",
name:"fld_paso",
size:"96,20",
typeid:4,
uuid:"08D62AEB-8FE8-4165-8458-6C8DCB2A5C65"
},
{
dataProviderID:"ntraz",
formIndex:10104,
horizontalAlignment:0,
location:"654,113",
name:"fld_ntraz",
size:"96,20",
typeid:4,
uuid:"1158984E-BE3A-4ECB-8074-11633C4195B0"
},
{
background:"#004080",
formIndex:10800,
horizontalAlignment:2,
imageMediaID:"1d139c7e-0e22-41bd-bcae-6c4f31c0395c",
location:"16,387",
mediaOptions:1,
name:"lblProveedores",
onActionMethodID:"1A958165-947A-41F8-BDE4-73409630C8EE",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"162,25",
styleClass:"label_darkgrc",
text:"Proveedores/Precios",
toolTipText:"Añadir",
typeid:7,
uuid:"11FA23A4-9037-41CD-AF51-50A81D1B3155"
},
{
dataProviderID:"gctbmaestromateriales_to_tbpedidocompralinea.sumcantidad",
formIndex:10104,
format:"###,##0.00",
horizontalAlignment:4,
location:"149,262",
size:"90,20",
styleClass:"noborder",
typeid:4,
uuid:"13A96B23-013B-4FDC-A097-2AD07CE9396C"
},
{
formIndex:10101,
location:"545,113",
size:"104,20",
text:"Nº Trazabilidad",
transparent:true,
typeid:7,
uuid:"185CA517-32E5-4748-AF16-6231989C2886"
},
{
formIndex:10101,
location:"15,112",
size:"120,20",
text:"Calidad",
transparent:true,
typeid:7,
uuid:"190FCD3D-2F13-436D-BE6C-1992E048644F"
},
{
height:600,
partType:5,
typeid:19,
uuid:"1F7AD50A-0E1C-424C-8FC4-1630E2559A50"
},
{
extendsID:"C176239B-ECBF-48EF-ABD9-0576F29FE5C2",
location:"410,0",
size:"390,46",
typeid:16,
uuid:"275E04BC-59A2-41D9-8486-3DF3C946A234"
},
{
dataProviderID:"preciocostostandard",
formIndex:10104,
format:"###,##0.00000",
horizontalAlignment:4,
location:"149,240",
name:"fld_preciocostostandard",
size:"82,20",
typeid:4,
uuid:"2C94F0B9-0EB4-4EDA-9D54-1DF63B32215B"
},
{
formIndex:10101,
location:"15,240",
size:"134,20",
text:"Precio Costo Standar",
transparent:true,
typeid:7,
uuid:"2EF7DD0C-4527-41B1-A0AE-C41EEA704B3D"
},
{
formIndex:11108,
imageMediaID:"59872c90-974b-4c4e-b035-b56b662db3ce",
location:"125,192",
name:"BtnFamilia",
onActionMethodID:"8CF744E7-A00F-4C11-93C4-9671F362FD94",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
showClick:false,
showFocus:false,
size:"20,20",
toolTipText:"Buscar Familia...",
typeid:7,
uuid:"2F819E05-D69C-42DD-A377-B4C0B264675E"
},
{
anchors:3,
fontType:"Segoe UI,1,12",
formIndex:14802,
imageMediaID:"F7E5FF3B-B7EB-4C97-9C5D-89324E981BB9",
location:"609,414",
mediaOptions:1,
name:"btn_histmodificaciones",
onActionMethodID:"1CE4A173-DE68-4A82-AD9A-3C46771080F5",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
size:"185,35",
text:"Hist. Modificaciones",
typeid:7,
uuid:"317444FC-60E4-433B-BE71-A2C9CE5CA965"
},
{
formIndex:10101,
location:"15,262",
size:"119,20",
text:"Bajo Pedido",
transparent:true,
typeid:7,
uuid:"37A3844C-F562-422B-81E4-BCB52AAA373C"
},
{
formIndex:10101,
location:"515,252",
size:"119,20",
text:"Existencia Real",
transparent:true,
typeid:7,
uuid:"3C35130F-0002-4A0B-BE51-6587AD8563FB",
visible:false
},
{
formIndex:10101,
location:"515,275",
size:"119,20",
text:"Reservados/OF",
transparent:true,
typeid:7,
uuid:"3CDB496F-A566-403A-8470-0DA1C2A37F52",
visible:false
},
{
formIndex:10104,
horizontalAlignment:4,
location:"637,275",
size:"90,20",
styleClass:"noborder",
typeid:4,
uuid:"40D070B8-B82B-49A0-A8EA-F217AC01DDF5",
visible:false
},
{
dataProviderID:"pesounit",
formIndex:10104,
format:"###,##0.00",
horizontalAlignment:0,
location:"654,139",
name:"fld_pesounit",
size:"96,20",
typeid:4,
uuid:"45B10EFE-1FAD-4CAE-9B37-29854C0EF641"
},
{
anchors:11,
dataProviderID:"observacion",
formIndex:10104,
location:"149,311",
name:"fld_observacion",
size:"261,20",
typeid:4,
uuid:"48B27E0A-6180-455C-AA45-0C57F296FDBA"
},
{
formIndex:10101,
location:"15,287",
size:"119,20",
text:"Stock Mínimo",
transparent:true,
typeid:7,
uuid:"510D9D5E-93B8-4FE3-9440-5F1D34AEF0F4"
},
{
dataProviderID:"espesor",
formIndex:10104,
format:"###,##0.00",
horizontalAlignment:0,
location:"654,217",
name:"fld_espesor",
size:"96,20",
typeid:4,
uuid:"512489F4-FCDC-41E1-A8D2-B7E46F42125B"
},
{
dataProviderID:"codigo",
formIndex:1,
format:"|U",
horizontalAlignment:0,
location:"149,87",
name:"idcodigo",
onActionMethodID:"-1",
onDataChangeMethodID:"9D8AED71-BFDD-494D-A43C-9B4380CFE7BC",
size:"92,20",
typeid:4,
uuid:"51366DA6-DBB1-4081-9D3D-AE1251B23460"
},
{
anchors:15,
json:{
anchors:15,
columns:[
{
dndSource:true,
headerTitle:null,
id:"id0",
styleClass:"fa fa-arrow-right",
svyUUID:"AE074259-061C-47EA-A998-54C0E38B36DB",
width:20
},
{
dataprovider:"gctbmaestromateriales_to_tbmaestroproveedorespreciomaterial.codpro",
headerTitle:"PROVEEDOR",
id:"gctbmaestromateriales_to_tbmaestroproveedorespreciomaterial.codpro",
styleClassDataprovider:null,
svyUUID:"E3B8410B-6501-4AD5-BF1F-CAE50857ADAF"
},
{
dataprovider:"gctbmaestromateriales_to_tbmaestroproveedorespreciomaterial.gctbmaestroproveedorespreciomaterial_to_tbmaestroproveedores.descproveedor",
id:"gctbmaestromateriales_to_tbmaestroproveedorespreciomaterial.gctbmaestroproveedorespreciomaterial_to_tbmaestroproveedores.descproveedor",
styleClassDataprovider:null,
svyUUID:"89D1C100-28D5-4DCA-BF38-5B516BFB97A5"
},
{
dataprovider:"gctbmaestromateriales_to_tbmaestroproveedorespreciomaterial.precio",
format:"###,##0.00",
headerTitle:"PRECIO",
id:"gctbmaestromateriales_to_tbmaestroproveedorespreciomaterial.precio",
styleClassDataprovider:null,
svyUUID:"E7AB413E-9318-4F15-9D8D-D3F792693E4F"
}
],
enableSorting:false,
location:{
x:12,
y:412
},
onCellClick:"10EEC875-072B-45FE-B64E-309FB6DCEDC9",
onCellDoubleClick:null,
onSort:null,
size:{
height:186,
width:594
},
styleClass:"svyag-theme-quartz"
},
location:"12,412",
name:"tableMaterialesPrecios",
size:"594,186",
styleClass:"svyag-theme-quartz",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"593F452C-88E2-4F3D-BAD0-99943CDE34D5"
},
{
formIndex:10101,
location:"15,192",
size:"94,20",
text:"Familia",
transparent:true,
typeid:7,
uuid:"5BC16684-14C5-4AFC-98DA-4708C82C9BE1"
},
{
formIndex:10101,
location:"15,338",
size:"120,20",
text:"Part. Arancelaria",
transparent:true,
typeid:7,
uuid:"6029AA1E-0146-4586-996C-A661242E9656"
},
{
formIndex:10101,
location:"545,139",
size:"104,20",
text:"Peso Unitario",
transparent:true,
typeid:7,
uuid:"66F6506F-66FC-4E32-8371-C2DC43C00488"
},
{
dataProviderID:"stockminimo",
formIndex:10104,
horizontalAlignment:4,
location:"149,287",
name:"fld_stockminimo",
size:"90,20",
styleClass:"noborder",
typeid:4,
uuid:"67E1799F-EB50-4BDA-85D4-603BEF6CEA2D"
},
{
formIndex:10101,
location:"515,329",
size:"119,20",
text:"Disponible Prev.",
transparent:true,
typeid:7,
uuid:"708BEB46-3EEB-438E-86E7-9D9066E05096",
visible:false
},
{
formIndex:10104,
horizontalAlignment:4,
location:"637,252",
size:"90,20",
styleClass:"noborder",
typeid:4,
uuid:"708DD702-39CB-4118-8823-9DF8A6A3FE20",
visible:false
},
{
dataProviderID:"familia",
formIndex:10104,
horizontalAlignment:0,
location:"149,192",
name:"fld_familia",
size:"63,20",
typeid:4,
uuid:"70B48AC7-5539-47F6-9E09-CCC69ECACDE4"
},
{
formIndex:10101,
location:"515,354",
size:"119,20",
text:"Material en Subcon.",
transparent:true,
typeid:7,
uuid:"7516404F-C017-4320-B94F-6D423BFED6E6",
visible:false
},
{
formIndex:10101,
location:"545,166",
size:"104,20",
text:"Ancho",
transparent:true,
typeid:7,
uuid:"758D41C6-6A15-409B-AA90-29DFE4AF8CEC"
},
{
dataProviderID:"unidalmacenaje",
displayType:2,
editable:false,
formIndex:11301,
location:"379,217",
name:"fld_unidalmacenaje",
size:"117,20",
typeid:4,
uuid:"7D8D95FD-886A-43A8-9DDD-9C8E71F7F099",
valuelistID:"789D329F-7791-469E-BA5F-6CC0AF88AF49"
},
{
dataProviderID:"DisponiblePrev",
formIndex:10104,
horizontalAlignment:4,
location:"649,329",
size:"90,20",
styleClass:"noborder",
typeid:4,
uuid:"808E322A-14E8-4E07-AEF8-6AA54F2787F6",
visible:false
},
{
formIndex:10101,
location:"15,311",
size:"120,20",
text:"Observación",
transparent:true,
typeid:7,
uuid:"836F21B6-F427-435D-B9D9-74E031A4DBB7"
},
{
dataProviderID:"ancho",
formIndex:10104,
format:"###,##0.00",
horizontalAlignment:0,
location:"654,166",
name:"fld_ancho",
size:"96,20",
typeid:4,
uuid:"85B0F4A9-4C71-4230-9F28-488F4891739B"
},
{
dataProviderID:"acabado",
formIndex:10104,
location:"149,138",
name:"fld_acabado",
size:"352,20",
typeid:4,
uuid:"8E9B9A0E-E725-4AE5-B2CF-E7ECC1CB01B0"
},
{
dataProviderID:"materialsubcont",
formIndex:10104,
horizontalAlignment:4,
location:"649,354",
name:"fld_materialsubcont",
size:"90,20",
styleClass:"noborder",
typeid:4,
uuid:"912C74DC-F713-4BE9-82D4-C7B9287ABC9A",
visible:false
},
{
formIndex:10101,
location:"15,362",
size:"179,20",
text:"Ubicación Predeterminada",
transparent:true,
typeid:7,
uuid:"94A99C1B-1A19-43DE-8826-4CDBF0980DA5"
},
{
anchors:3,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"538,86",
name:"lbl_required",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"12,12",
toolTipText:"Obligatorio",
typeid:7,
uuid:"A0B19801-11E5-4BC1-B3E5-12DA4FB2731D"
},
{
anchors:11,
borderType:"SpecialMatteBorder,1.0,0.0,0.0,0.0,#000000,#000000,#000000,#000000,0.0,",
formIndex:14805,
horizontalAlignment:4,
location:"15,411",
showClick:false,
showFocus:false,
size:"780,2",
styleClass:"solidgrc",
typeid:7,
uuid:"A16F2FCC-C446-41CC-97BE-486D2AACFF7D"
},
{
anchors:11,
displaysTags:true,
formIndex:10100,
location:"11,4",
mediaOptions:14,
name:"lbl_section",
size:"396,40",
styleClass:"label_whtctr",
text:"<html> <head><\/head> <body> %%globals.GCNombreEmpresa%%<br>\
Material:  %%codigo%% - %%descripcion%% <\/body><\/html>  ",
transparent:true,
typeid:7,
uuid:"B18F2C07-AAA1-4BC5-B35D-6847F0A0A3D1"
},
{
dataProviderID:"ubicacionpredet",
formIndex:10104,
horizontalAlignment:0,
location:"199,362",
name:"fld_ubicacionpredet",
size:"132,20",
typeid:4,
uuid:"B1AA891C-D840-4FF7-A29E-4574C25EABB0"
},
{
anchors:11,
dataProviderID:"descripcion",
format:"|U",
location:"256,87",
name:"fld_descripcion",
onActionMethodID:"-1",
size:"281,20",
typeid:4,
uuid:"B3151C31-5E05-474D-B29E-A27E14375A66"
},
{
anchors:3,
location:"552,87",
size:"81,20",
text:"Abreviatura",
transparent:true,
typeid:7,
uuid:"B37BA135-3B1E-48B7-B181-15A119A9E41F"
},
{
dataProviderID:"proceso",
formIndex:10104,
location:"149,165",
name:"fld_proceso",
size:"162,20",
typeid:4,
uuid:"B3FCB718-24AB-4960-8952-5FDA5293B361"
},
{
dataProviderID:"gctbmaestromateriales_to_tbmaestrofamila.descfamilia",
foreground:"#0000ff",
formIndex:10101,
location:"214,192",
size:"313,20",
transparent:true,
typeid:7,
uuid:"B44B218C-2854-498D-B39D-72EE7BE0D526"
},
{
formIndex:10101,
location:"15,165",
size:"120,20",
text:"Proceso",
transparent:true,
typeid:7,
uuid:"BA60E778-0868-43AC-ABD6-642FFE7F527A"
},
{
formIndex:10101,
location:"545,217",
size:"104,20",
text:"Espesor",
transparent:true,
typeid:7,
uuid:"C20DD867-2C06-4722-A6D3-C798D14BE627"
},
{
dataProviderID:"materialobsoleto",
displayType:4,
fontType:"Verdana,1,9",
formIndex:11302,
location:"317,165",
name:"fld_materialobsoleto",
size:"211,20",
styleClass:"noborder",
text:"MATERIAL OBSOLETO",
transparent:true,
typeid:4,
uuid:"C6D7805D-4B8E-492E-A05F-933A3469B66E"
},
{
dataProviderID:"codigo",
editable:false,
fontType:"Verdana,1,14",
foreground:"#0000ff",
format:"|U",
horizontalAlignment:0,
location:"149,87",
name:"lblcodigo",
onDataChangeMethodID:"-1",
size:"92,20",
styleClass:"noborder",
transparent:true,
typeid:4,
uuid:"D4DB2571-EE58-4DE2-9042-B48D6348511E"
},
{
location:"15,87",
size:"120,20",
text:"Código Material",
transparent:true,
typeid:7,
uuid:"D9F265F5-717A-41DA-AB99-40F40C7AEC8E"
},
{
formIndex:10101,
location:"15,138",
size:"120,20",
text:"Acabado",
transparent:true,
typeid:7,
uuid:"DE10DA93-B77E-4CD2-97BE-C76A6A5FAF6D"
},
{
dataProviderID:"partarancelaria",
formIndex:10104,
location:"149,338",
name:"fld_partarancelaria",
size:"162,20",
typeid:4,
uuid:"E5FEA1E9-0B13-440A-A454-195BD5DC146C"
},
{
formIndex:10101,
location:"271,217",
size:"107,20",
text:"Unid. Almacenaje.",
transparent:true,
typeid:7,
uuid:"EA9DFCD7-E444-420B-BB94-16001FA97415"
},
{
formIndex:10101,
location:"545,192",
size:"104,20",
text:"Paso",
transparent:true,
typeid:7,
uuid:"EF326CC6-B8E9-4877-837B-1161F15F7275"
},
{
anchors:9,
formIndex:11108,
imageMediaID:"CE6CE735-9B26-4E3F-9D19-DCC38B9BAFAA",
location:"241,86",
name:"lbl_codrequired",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"12,12",
toolTipText:"Obligatorio",
typeid:7,
uuid:"EF3A04C5-C312-4BA0-9D49-55020CDCD276"
},
{
formIndex:10101,
location:"15,217",
size:"120,20",
text:"Unid. Pedido/Sum.",
transparent:true,
typeid:7,
uuid:"F94E98CD-97E9-40C5-A7C2-64A1FA9C0480"
},
{
formIndex:10101,
location:"515,303",
size:"119,20",
text:"Disponible Real",
transparent:true,
typeid:7,
uuid:"FCB60B22-5302-43C9-8B76-B510D44D6404",
visible:false
},
{
dataProviderID:"ncalidad",
formIndex:10104,
location:"149,112",
name:"fld_ncalidad",
size:"352,20",
typeid:4,
uuid:"FEBB77A9-8469-48D6-8DFC-BD9681C3A3E9"
},
{
dataProviderID:"unidpedido",
displayType:2,
editable:false,
formIndex:11301,
location:"149,217",
name:"fld_unidpedido",
size:"117,20",
typeid:4,
uuid:"FF218DE7-ED37-4D04-9497-73BADC2D5A4E",
valuelistID:"789D329F-7791-469E-BA5F-6CC0AF88AF49"
}
],
name:"FrmMaterialesGC",
navigatorID:"96264FD0-75D4-4877-AF92-008C07F790D0",
onDeleteRecordCmdMethodID:"B9C07039-1015-4D55-A30E-98455C2CC8B8",
onLoadMethodID:"D9C12367-1559-4C0E-864B-6EBBAB480DF3",
onNewRecordCmdMethodID:"D8664EE0-3D50-48CE-8B69-5DCACC2B367F",
onNextRecordCmdMethodID:"DAB40BE1-1036-4EE6-95D4-31DE1D0870FE",
onPreviousRecordCmdMethodID:"36AE5688-905D-48DB-9C51-905152F6AAE4",
onPrintPreviewCmdMethodID:"C7D137C7-B81B-418E-BCE5-E665F57F0C61",
onRecordSelectionMethodID:"C81F89FC-C6E4-4454-82D3-573F785513B3",
onSearchCmdMethodID:"85198F18-E700-4434-9BA3-B0BF866D7719",
onShowAllRecordsCmdMethodID:"D4880484-DBF4-40E4-AA93-F1287484E0DA",
onShowMethodID:"3D032A04-34D3-47A4-BF90-5F9A925CCDFD",
scrollbars:0,
showInMenu:true,
typeid:3,
uuid:"BCB5F246-9FB9-406D-BB29-993A576FDF66"