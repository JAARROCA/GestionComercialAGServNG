/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"F53F6F7D-C0DA-4D8C-B02E-447139336540"}
 */
var busyWindowName = 'dialog_DuplicarFacturas2GC';

/**
*
 * @properties={typeid:24,uuid:"DFC16AF6-9FC5-4F0B-A0CB-7C0827D71BA4"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Duplicar Facturas').hide();
	globals.GCenableBgElements();
	
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0135F113-8144-4EAA-9C42-EDB617F8119E"}
 */
var uid = '';

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"B241E2D6-6D5B-46EA-97F8-7BD96AA7C57B"}
 */
var selections = '';

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"01A045A7-733C-43AB-83DB-7C37F9B0142D"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function btn_ok(event)
{
	if(!forms.dlgDuplicarFacturas2GC.FechaFacturaDuplicar){
		forms.dlgDuplicarFacturas2GC.elements.FechaFacturaDuplicar.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta indicar la Fecha de la(s) nueva(s) Factura(s) a duplicar.','¡Error!')
		else globals.GCshowErrorDialog('Falta indicar la Fecha de la(s) nueva(s) Factura(s) a duplicar.',null,'Aceptar',null,null,null)
	}
	else
	{
		uid = null;
		selections  = forms.dlgDuplicarFacturas2GC.selections;
		if(selections)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT) process(event)
			else 
			{
				//if (plugins.busy) startBusy(busyWindowName)
				//else process(event)
				if(plugins.svyBlockUI) {
					//plugins.svyBlockUI.setMessage('Importando Datos... Por favor espere!')
					 // "Rotating plane", "Double bounce", "Wave", "Wandering cubes", "Pulse", "Chasing dots", "Three bounce", "Circle", "Cube grid", "Fading circle", "Folding cube"
					 plugins.svyBlockUI.spinner = "Three bounce";
					 plugins.svyBlockUI.overlayColor = '#000000'
					 plugins.svyBlockUI.overlayOpacity = 0.35;
					 plugins.svyBlockUI.show('Duplicando Facturas... Por favor espere!');
					 
					process(event)
				}
				else process(event);
			}
			
			/*var uuids = selections.split('\n')
			var n = uuids.length
			
				
			var str = str = utils.stringReplace(uuids.toString(),"[","('");
			str = utils.stringReplace(str,"]","')");
			str = utils.stringReplace(str,",","','")
			var query = "select id from tbfacturacabecera where id in "+str+" order by eje_cfa,nup_cfa,ser_cfa"
			var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1)
			var rows = ds.getMaxRowIndex()
			if(rows > 0)
			{
				application.getWindow('Duplicar Facturas').hide();
				globals.GCenableBgElements();
				
				for(var i=1;i<=rows;i++){
					var uuid = ds.getValue(i,1);
					
					var result = forms.FrmFacturasGC.foundset.selectRecord(uuid)
					var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.FrmFacturasGC.foundset.getSize())return;
						forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
						result = forms.FrmFacturasGC.foundset.selectRecord(uuid);
					}
					
					var arg1 = forms.FrmFacturasGC.foundset;					
					var arg2 = new Array('GCtbfacturacabecera_to_tbfacturalinea');
					duplicateRec(arg1,arg2)
					
					
					
					
					forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords()
					result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
					fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize())return;
						forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
						result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
					}
						
					forms.dlg_ParametroAplicacionGC.numfactura = nup_cfa;
					databaseManager.saveData()
					
					forms.FrmFacturasGC.onShow(false,event)
					
					
					forms.FrmFacturasGC.foundset.loadAllRecords()
					result = forms.FrmFacturasGC.foundset.selectRecord(uid)
					fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.FrmFacturasGC.foundset.getSize()) break;
						forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
						result = forms.FrmFacturasGC.foundset.selectRecord(uid);
					}
					forms.FrmFacturasGC.situ = null;
					forms.FrmFacturasGC.situconta = null;
					forms.FrmFacturasGC.fechconta_cfa = null;
					forms.FrmFacturasGC.emailenviado = null;
					if(forms.FrmFacturasGC.fechcobro_cfa < forms.FrmFacturasGC.fecha_cfa) 
					{		
						forms.FrmFacturasGC.fechcobro_cfa = forms.FrmFacturasGC.fecha_cfa;		
						
						var clidiapago = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.diapago1;
						var clidiapago2 = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.diapago2;
						var clidiapago3 = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.diapago3;
						
						if(clidiapago != 0 && clidiapago != null)
						{
							if(forms.FrmFacturasGC.fechcobro_cfa.getDate() <= clidiapago)
							{
								forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth(),clidiapago)
							}
							else if(clidiapago2 != 0 && clidiapago2 != null)
							{
								if(forms.FrmFacturasGC.fechcobro_cfa.getDate() <= clidiapago2)
								{
									forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth(),clidiapago2)
								}
								else if(clidiapago3 != 0 && clidiapago3 != null)
								{
									if(forms.FrmFacturasGC.fechcobro_cfa.getDate() <= clidiapago3)
									{
										forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth(),clidiapago3)
									}
									else
									{
										forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth()+1,clidiapago)
									}
								}
								else
								{
									forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth()+1,clidiapago)
								}
							}
							else
							{
								forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth()+1,clidiapago)
							}
						}
						
						
					}
					databaseManager.saveData()
					
					if(forms.FrmFacturasGC.foundset.GCtbfacturacabecera_to_tbfacturalinea.fecha_lfa)
					{
						// get the foundset updater object
					
						var updater = databaseManager.getFoundSetUpdater(forms.FrmFacturasGC.foundset.GCtbfacturacabecera_to_tbfacturalinea);
					
						// set the column value
					
						updater.setColumn('fecha_lfa', forms.dlgDuplicarFacturasGC.FechaFacturaDuplicar);
						
						 
					
						// update in all the records in the foundset
					
						updater.performUpdate();
						
						databaseManager.saveData()
					}
					//databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
					//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas.foundset,-1)
					//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas_Cuentas.foundset,-1)
					
					forms.frm_nav_buttons_facturasGC.btn_showAll()
					forms.FrmFacturasGC.foundset.selectRecord(uid);
					forms.FrmFacturasGC.Generacion_Efecto_Factura();
					forms.FrmFacturasGC.Generacion_FacturaComision();
					forms.FrmFacturasGC.onRecordSelect();
					forms.lst_FacturasGC.btn_sortDesc();
					
				}
				
			}
			else
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta seleccionar la(s) Factura(s) a duplicar.','¡Error!')
				else globals.GCshowErrorDialog('Falta seleccionar la(s) Factura(s) a duplicar.',null,'Aceptar',null,null,null)
			}*/
		}
		else
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta seleccionar la(s) Factura(s) a duplicar.','¡Error!')
			else globals.GCshowErrorDialog('Falta seleccionar la(s) Factura(s) a duplicar.',null,'Aceptar',null,null,null)
		}
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"080EF425-2D3E-4599-ABE8-BD24DE909565"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
 * @properties={typeid:24,uuid:"51068B86-58F7-4DE0-9A94-D72BF9952D67"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}

/**
 * @type {JSFoundset}
 *
 *
 *
 * @properties={typeid:35,uuid:"EBBF59C5-786F-45AF-87A7-6EC7DAB330CD",variableType:-4}
 */
var related;

/**
 * 
 * @param {JSFoundset} arg1
 * 
 * @param {Array} arg2
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"1537C670-EB8F-4063-8E05-47CBC4221601"}
 */
function duplicateRec(arg1,arg2) {
	var fs = arg1;
	var relatedFsArray = arg2;

	// Duplicate master record.
	var dup = fs.getRecord(fs.duplicateRecord(true,false));
	//*********	
	var ident = dup.eje_cfa+dup.nup_cfa+ser_cfa
	validate_autoEnter()
	dup.id = application.getUUID()
	uid = dup.id
	dup.eje_cfa = eje_cfa
	dup.ser_cfa = ser_cfa
	dup.nup_cfa = nup_cfa	
	dup.mac = null
	dup.ctbai = null
	dup.cqr = null
	dup.fechaenviofichero = null
	dup.fichero_respuesta_tbai = null
	dup.firmafactura = null
	dup.xml_enviado_tbai = null
	dup.fecha_cfa = forms.dlgDuplicarFacturas2GC.FechaFacturaDuplicar
	//*********
	databaseManager.saveData();
	var rows = relatedFsArray.length
	
	for(var k=0;k<rows;k++)
	{
		related = fs[relatedFsArray[k]];
		related.loadAllRecords();
		var fsCount = databaseManager.getFoundSetCount(related);
		//var fsCount = related.getSize();
	   for(var z=1;z<=fsCount;z++)
	   {
	       var relatedOriginal = related.getRecord(z);
	       var relatedDub = dup[relatedFsArray[k]].getRecord(dup[relatedFsArray[k]].newRecord(false,false));
	       databaseManager.copyMatchingFields( relatedOriginal,  relatedDub);
	   }	   
	}
	
	databaseManager.saveData();
	//*********
	
	
	return ident;
	//*********
	}

/**
	 * 
	 * @param {JSFoundset} arg1
	 * 
	 * @param {Array} arg2
	 * 
	 * @return {String}
	 *
	 *
 * @properties={typeid:24,uuid:"277EE960-2704-4525-8375-3C2949DE89D5"}
 */
function duplicateRec_2(arg1,arg2) {
		var fs = arg1;
		//var relatedFsArray = arg2;
		var e = fs['eje_cfa'];
		var n = fs['nup_cfa'];
		var s = fs['ser_cfa'];
		
		// Duplicate master record.
		var dup = fs.getRecord(fs.duplicateRecord(true,false));
		//*********	
		var ident = dup.eje_cfa+dup.nup_cfa+ser_cfa
		validate_autoEnter()
		dup.id = application.getUUID()
		uid = dup.id
		dup.eje_cfa = eje_cfa
		dup.ser_cfa = ser_cfa
		dup.nup_cfa = nup_cfa	
		dup.mac = null
		dup.ctbai = null
		dup.cqr = null
		dup.fechaenviofichero = null
		dup.fichero_respuesta_tbai = null
		dup.firmafactura = null
		dup.fecha_cfa = forms.dlgDuplicarFacturas2GC.FechaFacturaDuplicar
		//*********
		databaseManager.saveData();
		
		var query = "select * from tbfacturalinea where eje_lfa = "+e+" and nup_lfa = "+n+
		" and ser_lfa ='"+s+"' order by nup_lfa,nli_lfa";
		var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1)
		
		
		var rows = ds.getMaxRowIndex()
		
		for(var i=1;i<=rows;i++)
		{
			forms.dlg_Linea_FacturaGC.foundset.newRecord(true)
			forms.dlg_Linea_FacturaGC.eje_lfa = dup.eje_cfa;
			forms.dlg_Linea_FacturaGC.ser_lfa = dup.ser_cfa;
			forms.dlg_Linea_FacturaGC.nup_lfa = dup.nup_cfa;
			forms.dlg_Linea_FacturaGC.validate_autoEnter()
			if(ds.getValue(i,19)) forms.dlg_Linea_FacturaGC.fecha_lfa = forms.dlgDuplicarFacturas2GC.FechaFacturaDuplicar;
			if(ds.getValue(i,8)) forms.dlg_Linea_FacturaGC.ref_lfa = ds.getValue(i,8);
			if(ds.getValue(i,9)) forms.dlg_Linea_FacturaGC.concep_lfa = ds.getValue(i,9);
			if(ds.getValue(i,10)) forms.dlg_Linea_FacturaGC.cant1_lfa = ds.getValue(i,10);
			if(ds.getValue(i,11)) forms.dlg_Linea_FacturaGC.prec_lfa = ds.getValue(i,11);
			if(ds.getValue(i,12)) forms.dlg_Linea_FacturaGC.unme_lfa = ds.getValue(i,12);
			if(ds.getValue(i,13)) forms.dlg_Linea_FacturaGC.piva_lfa = ds.getValue(i,13);
			if(ds.getValue(i,14)) forms.dlg_Linea_FacturaGC.clie_lfa = ds.getValue(i,14);
			if(ds.getValue(i,16)) forms.dlg_Linea_FacturaGC.precuni_lfa = ds.getValue(i,16);
			if(ds.getValue(i,17)) forms.dlg_Linea_FacturaGC.impor_lfa = ds.getValue(i,17);
			if(ds.getValue(i,18)) forms.dlg_Linea_FacturaGC.importot_lfa = ds.getValue(i,18);
			if(ds.getValue(i,20)) forms.dlg_Linea_FacturaGC.nprograma_lfa = ds.getValue(i,20);
			if(ds.getValue(i,21)) forms.dlg_Linea_FacturaGC.dto_lfa = ds.getValue(i,21);
			if(ds.getValue(i,22)) forms.dlg_Linea_FacturaGC.impdto_lfa = ds.getValue(i,22);
			if(ds.getValue(i,23)) forms.dlg_Linea_FacturaGC.medida_lfa = ds.getValue(i,23);
			
			databaseManager.saveData(forms.dlg_Linea_FacturaGC.foundset)
		}
		
		databaseManager.saveData();
		//*********
		
		
		return ident;
		//*********
		}

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"4C3B1541-6456-4F27-8DD6-4A682DE7B671",variableType:8}
 */
var idasiento;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"DFF17833-0F59-4E94-9CF0-40C917791CA6",variableType:93}
 */
var fecha_cfa;

/**
	 *
	 *
	 *
 * @properties={typeid:24,uuid:"661A503F-9BDA-4560-9D1F-CEC39C1B1400"}
 */
function validate_autoEnter()
	{
		fecha_cfa = forms.dlgDuplicarFacturas2GC.FechaFacturaDuplicar
		sub_setEjercicio();
		doEditser_cfa()
		sub_setNewNumeroFacturaOrd();	
		//sub_setMac();
	}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AE31EFA8-3E91-4CE8-8427-2DB4E43EF629",variableType:8}
 */
var eje_cfa;

/**
	 *
 * @properties={typeid:24,uuid:"EAD000D8-B796-4E02-9886-A620F1DF6390"}
 */
function sub_setEjercicio()
	{
		var Agno = fecha_cfa;
		Agno= Agno.getFullYear()
		var a = new String()
		a = Agno.toString()
		a= a.substr(2,2)
		eje_cfa = a
	}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FDE1118B-98F2-4EFE-8BA5-539A2043D2F7"}
 */
var ser_cfa = '';

/**
 *
 * @properties={typeid:24,uuid:"9536B723-A11E-4825-BCD8-1331E9572FB6"}
 */
function doEditser_cfa()
 {
	ser_cfa ='';		
 }

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"332D3488-B222-48D8-8030-EC2886880A3E",variableType:8}
 */
var nup_cfa;

/**
  *
 * @properties={typeid:24,uuid:"D201A2A6-74F9-4CE6-9DF7-2A147B4CF5A9"}
 */
function sub_setNewNumeroFacturaOrd()
 {
 	var query = 'select NumFactura from ParametrosAplicacion'
 	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
 	nup_cfa = dataset.getValue(1, 1) + 1	
 	
 	
 }

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C9A37464-CEA4-4367-81E4-F2890413FE1D"}
 */
var mac = '';

/**
 *
*
 * @properties={typeid:24,uuid:"107E80FD-BD19-402F-AA65-AE7EACAF7561"}
 * @SuppressWarnings(deprecated)
 */
function sub_setMac(){
	mac = '';
	//var vServer = plugins.UserManager.Client();
	var hfolder = plugins.file.getHomeFolder()+"\\.servoy\\";
	var rutabat = hfolder+"Comando_numero_serie.bat";
	//var rutabat = "c:\\Servoy\\Comando_numero_serie.bat";
	var f = plugins.file.convertToJSFile(rutabat);
	if(f && f.exists() && application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
	{
		var str = application.executeProgram(rutabat);
		str = str.replace("SerialNumber","")
		str = str.trim();
		mac = str;
		//if(!mac) mac = vServer.macAddress;
	}
	else if(!f || !f.exists() && application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
	{
		var jsFile = plugins.file.createTempFile('Comando_numero_serie','.bat');
		
		var success = plugins.file.writeTXTFile(jsFile,'@echo off\nwmic bios get serialnumber');
		if (!success) application.output('Could not write file.');
		
		str = application.executeProgram(jsFile);
		str = str.replace("SerialNumber","")
		str = str.trim();
		mac = str;
		//if(!mac) mac = plugins.UserManager.Client().macAddress;
	}
	else
	{
		//mac = vServer.macAddress;
	}
	/*var macaddresses = plugins.it2be_tools.client().macAddress;
	if (macaddresses) {
	   /*for (var i = 0 ; i < addresses.length ; i++) {
	      var macaddress = addresses[i]//"MAC address " + (i + 1) + ":\t\t" + addresses[i] + "\n";
	   }*/
	/*	if(macaddresses.length > 1) mac = macaddresses[macaddresses.length - 2]
		else mac = macaddresses[macaddresses.length - 1]
	} else {
	   mac = "Dirección MAC: no disponible";
	}
	var filename = "C:\\Servoy\\mac\\macAddress.txt";
	var jsFile = plugins.file.convertToJSFile(filename);
	if (jsFile.exists()) {
	var texto = new Array();
	var _oFR = new Packages.java.io.FileInputStream(filename),
        _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
        _oBR = new Packages.java.io.BufferedReader(_oIR),
        //_sLine = "dummy",
        i = 0;
	    while ((texto[i] = _oBR.readLine()) != null) 
	    {
            //texto[i] = _oBR.readLine();
            i++;            
        }
	    
        _oBR.close();
        mac = texto[0]
	}
	else{
		mac = 'Falta Fichero MAC'
	}*/
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2D30395E-6609-4E3E-9701-454421FEEE4D"}
 */
function onLoad(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @params {String} theDialogName
 * 
 *
 *
 * @properties={typeid:24,uuid:"7505C039-38F2-4ED7-B0F3-DF418E4520AD"}
 */
function startBusy(theDialogName)
{
	var params = {
         processFunction: process,
         message: 'Duplicando Facturas... Por favor espere!', 
         opacity: 0.5,
         paneColor: '#000000',
         showCancelButton: false,
         cancelButtonText: 'Stop this!'
	};
	if (theDialogName) {
		params.dialogName = theDialogName;
	}
	plugins.busy.block( params );
}

/**
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"0A9AA0DD-2848-4A53-AA9A-E8455FF8BD54"}
 */
function process(event)
{
	application.output("process started");
	try {
		var uuids = selections.split('\n')
		
		
			
		var str = str = utils.stringReplace(uuids.toString(),"[","('");
		str = utils.stringReplace(str,"]","')");
		str = utils.stringReplace(str,",","','")
		var query = "select id from tbfacturacabecera where id in "+str+" order by eje_cfa,nup_cfa,ser_cfa"
		var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1)
		var rows = ds.getMaxRowIndex()
		if(rows > 0)
		{
			application.getWindow('Duplicar Facturas').hide();
			globals.GCenableBgElements();
			
			for(var i=1;i<=rows;i++){
				var uuid = ds.getValue(i,1);
				
				forms.FrmFacturasGC.foundset.loadAllRecords()
				var result = forms.FrmFacturasGC.foundset.selectRecord(uuid)
				var fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.FrmFacturasGC.foundset.getSize()) return;
					forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
					result = forms.FrmFacturasGC.foundset.selectRecord(uuid);
				}
				
				var arg1 = forms.FrmFacturasGC.foundset;					
				var arg2 = new Array('GCtbfacturacabecera_to_tbfacturalinea');
				duplicateRec(arg1,arg2)
				//duplicateRec_2(arg1,arg2)
				
				
				
				
				forms.dlg_ParametroAplicacionGC.foundset.loadAllRecords()
				result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1)
				fsCount = databaseManager.getFoundSetCount(forms.dlg_ParametroAplicacionGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.dlg_ParametroAplicacionGC.foundset.getSize())return;
					forms.dlg_ParametroAplicacionGC.foundset.setSelectedIndex(forms.dlg_ParametroAplicacionGC.foundset.getSize());
					result = forms.dlg_ParametroAplicacionGC.foundset.selectRecord(1);
				}
					
				forms.dlg_ParametroAplicacionGC.numfactura = nup_cfa;
				databaseManager.saveData()
				
				
				forms.FrmFacturasGC.onShow(false,event)
				
				
				forms.FrmFacturasGC.foundset.loadAllRecords()
				result = forms.FrmFacturasGC.foundset.selectRecord(uid)
				fsCount = databaseManager.getFoundSetCount(forms.FrmFacturasGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.FrmFacturasGC.foundset.getSize()) break;
					forms.FrmFacturasGC.foundset.setSelectedIndex(forms.FrmFacturasGC.foundset.getSize());
					result = forms.FrmFacturasGC.foundset.selectRecord(uid);
				}
				forms.FrmFacturasGC.situ = null;
				forms.FrmFacturasGC.situconta = null;
				forms.FrmFacturasGC.fechconta_cfa = null;
				forms.FrmFacturasGC.emailenviado = null;
				forms.FrmFacturasGC.usu_cfa = globals.GClogin_usuario;
				if(forms.FrmFacturasGC.fechcobro_cfa < forms.FrmFacturasGC.fecha_cfa) 
				{		
					forms.FrmFacturasGC.fechcobro_cfa = forms.FrmFacturasGC.fecha_cfa;		
					
					var clidiapago = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.diapago1;
					var clidiapago2 = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.diapago2;
					var clidiapago3 = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.diapago3;
					
					if(clidiapago != 0 && clidiapago != null)
					{
						if(forms.FrmFacturasGC.fechcobro_cfa.getDate() <= clidiapago)
						{
							forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth(),clidiapago)
						}
						else if(clidiapago2 != 0 && clidiapago2 != null)
						{
							if(forms.FrmFacturasGC.fechcobro_cfa.getDate() <= clidiapago2)
							{
								forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth(),clidiapago2)
							}
							else if(clidiapago3 != 0 && clidiapago3 != null)
							{
								if(forms.FrmFacturasGC.fechcobro_cfa.getDate() <= clidiapago3)
								{
									forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth(),clidiapago3)
								}
								else
								{
									forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth()+1,clidiapago)
								}
							}
							else
							{
								forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth()+1,clidiapago)
							}
						}
						else
						{
							forms.FrmFacturasGC.fechcobro_cfa = new Date(forms.FrmFacturasGC.fechcobro_cfa.getFullYear(),forms.FrmFacturasGC.fechcobro_cfa.getMonth()+1,clidiapago)
						}
					}
					
					
				}
				databaseManager.saveData()
				
				if(forms.FrmFacturasGC.foundset.GCtbfacturacabecera_to_tbfacturalinea.fecha_lfa)
				{
					// get the foundset updater object
				
					var updater = databaseManager.getFoundSetUpdater(forms.FrmFacturasGC.foundset.GCtbfacturacabecera_to_tbfacturalinea);
				
					// set the column value
				
					updater.setColumn('fecha_lfa', forms.dlgDuplicarFacturasGC.FechaFacturaDuplicar);
					
					 
				
					// update in all the records in the foundset
				
					updater.performUpdate();
					
					databaseManager.saveData()
				}
				//databaseManager.refreshRecordFromDatabase(forms.FrmAsientosContables.foundset,-1)
				//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas.foundset,-1)
				//databaseManager.refreshRecordFromDatabase(forms.lst_AsientoContable_Lineas_Cuentas.foundset,-1)
				
				forms.frm_nav_buttons_facturasGC.btn_showAll()
				forms.FrmFacturasGC.foundset.selectRecord(uid);
				forms.FrmFacturasGC.Generacion_Efecto_Factura();
				forms.FrmFacturasGC.Generacion_FacturaComision();
				forms.FrmFacturasGC.onRecordSelect();
				forms.lst_FacturasGC.btn_sortDesc();
				
			}
			
		}
		else
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta seleccionar la(s) Factura(s) a duplicar.','¡Error!')
			else globals.GCshowErrorDialog('Falta seleccionar la(s) Factura(s) a duplicar.',null,'Aceptar',null,null,null)
		}
		
	}catch (e) {
		application.output("catched exception");
		application.output(e);		
	} finally {
		//if (plugins.busy) plugins.busy.unblock();		
		if(plugins.svyBlockUI) plugins.svyBlockUI.stop()	
		
		application.getWindow('Duplicar Facturas').hide();
		globals.GCenableBgElements();
	}
	application.output("process end");
	//HoraFin = new Date()
	//var tiempo = getElapsedTime(HoraInicio,HoraFin,'seconds')
	//application.output(tiempo+' segundos');
	
}
