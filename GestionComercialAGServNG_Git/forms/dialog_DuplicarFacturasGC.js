/**
 * @type {String}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"1CE37CD8-4857-4A8E-8A5C-47AB05FD677E"}
 */
var busyWindowName = 'dialog_DuplicarFacturasGC';

/**
*
 * @properties={typeid:24,uuid:"6DF853DC-C738-4A47-B9DF-2377409D9C72"}
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
 * @properties={typeid:35,uuid:"05E82938-9F88-4117-BC53-9B3F9A967789"}
 */
var uid = '';

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"3BCD42E0-6103-4A49-9022-EA90227D3585"}
 */
var selections = '';

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"C73D282D-0B68-497C-A8F4-5AD30CA7084E"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function btn_ok(event)
{
	if(!forms.dlgDuplicarFacturasGC.FechaFacturaDuplicar){
		forms.dlgDuplicarFacturasGC.elements.FechaFacturaDuplicar.requestFocus()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta indicar la Fecha de la(s) nueva(s) Factura(s) a duplicar.','¡Error!')
		else globals.GCshowErrorDialog('Falta indicar la Fecha de la(s) nueva(s) Factura(s) a duplicar.',null,'Aceptar',null,null,null)
	}
	else
	{
		uid = null;
		selections  = forms.dlgDuplicarFacturasGC.selections;
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
 * @properties={typeid:24,uuid:"815607FA-7C9E-4146-8D9E-6B4CE6125B08"}
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
 * @properties={typeid:24,uuid:"CA637EDE-CB39-4257-8607-4BB72F4CE0FC"}
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
 * @properties={typeid:35,uuid:"93A79DF2-4885-4E34-A166-A5C01EF6A8B0",variableType:-4}
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
 * @properties={typeid:24,uuid:"A9E9354C-D529-40F3-B965-C2D3996EE6BB"}
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
	dup.fecha_cfa = forms.dlgDuplicarFacturasGC.FechaFacturaDuplicar
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
 * @properties={typeid:24,uuid:"52218DFE-81BD-44E9-815F-EE0B50EB728D"}
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
		dup.fecha_cfa = forms.dlgDuplicarFacturasGC.FechaFacturaDuplicar
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
			if(ds.getValue(i,19)) forms.dlg_Linea_FacturaGC.fecha_lfa = forms.dlgDuplicarFacturasGC.FechaFacturaDuplicar;
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
 * @properties={typeid:35,uuid:"2FD6F51E-1433-4758-9151-4BFFC90A8164",variableType:8}
 */
var idasiento;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"23A1C615-DA6D-41B7-B04B-E3CA7B51EB1E",variableType:93}
 */
var fecha_cfa;

/**
	 *
	 *
	 *
 * @properties={typeid:24,uuid:"6CEA6288-C202-4DB3-AFB3-CEA853B734B6"}
 */
function validate_autoEnter()
	{
		fecha_cfa = forms.dlgDuplicarFacturasGC.FechaFacturaDuplicar
		sub_setEjercicio();
		doEditser_cfa()
		sub_setNewNumeroFacturaOrd();	
		//sub_setMac();
	}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"645D7A93-FD91-44C9-9615-BF675009A27B",variableType:8}
 */
var eje_cfa;

/**
	 *
 * @properties={typeid:24,uuid:"DFE21B53-21AE-4698-82D8-3773DC9163C7"}
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
 * @properties={typeid:35,uuid:"E4CE864D-BC60-4745-B3CD-1F77B46D9662"}
 */
var ser_cfa = '';

/**
 *
 * @properties={typeid:24,uuid:"89A88FE7-6611-44F0-AB48-69B7DE51CC73"}
 */
function doEditser_cfa()
 {
	ser_cfa ='';		
 }

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2245638A-E9B8-4AE3-BEE0-84827C96E404",variableType:8}
 */
var nup_cfa;

/**
  *
 * @properties={typeid:24,uuid:"C0C9009F-3B46-4DA5-976D-73678FC62444"}
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
 * @properties={typeid:35,uuid:"7ABE908D-1415-4F2F-A9A7-C249A9501559"}
 */
var mac = '';

/**
 *
*
 * @properties={typeid:24,uuid:"447E8B30-F156-4F92-956A-44A28FEA6097"}
 * @SuppressWarnings(deprecated)
 */
function sub_setMac(){
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
 * @properties={typeid:24,uuid:"A0D700AF-6266-4DF9-8A31-D4ECD9EC74C9"}
 */
function onLoad(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @params {String} theDialogName
 * 
 *
 *
 * @properties={typeid:24,uuid:"BBAA6C7F-C929-48BC-9FA5-5DF3CD79DECE"}
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
 * @properties={typeid:24,uuid:"8CD73F11-9FF4-4353-BE1C-D181FDF6C23D"}
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

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"64B67EBC-64BE-4D75-B925-4AE78571F649"}
 */
function onShow(firstShow, event) {
	/*if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ||
	application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) {
		if (plugins.busy) plugins.busy.prepare();
	}*/
}
