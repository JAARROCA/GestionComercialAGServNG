/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"0383E3F6-B8A7-4F5E-8AB9-E1E684C2A082"}
 */
var busyWindowName = 'dialogImportarDatosTBAIGC';

/**
 *
 * @properties={typeid:24,uuid:"2784FB98-8861-4290-AE4A-A215868663AD"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	
	application.getWindow('Importar datos TBAI').hide();
	globals.GCenableBgElements();
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"EA490931-204B-44B8-9738-E5A56D958E3F"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
	/*if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
	    plugins.busy.prepare();
	}*/
}

/**
 * Perform the element default action.
 *
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"31C96273-F0A6-4442-9181-B2DE1DC86B1E"}
 * @SuppressWarnings(unused)
 */
function btn_AceptarFichero() {
	// TODO Auto-generated method stub
	
		if(globals.GCRutaFichero43 != null)
		{
			var f = plugins.file.convertToJSFile(globals.GCRutaFichero43);
			
			if(f && f.exists()) {
				if(globals.GCRutaFichero43.indexOf('.xlsx') >= 0 || globals.GCRutaFichero43.indexOf('.csv') >= 0) 
				{
					//application.output('fichero CSV')
					//if (plugins.busy) startBusy(busyWindowName)  
					//else process()
					
					if(plugins.svyBlockUI) {
						//plugins.svyBlockUI.setMessage('Importando Datos... Por favor espere!')
						 // "Rotating plane", "Double bounce", "Wave", "Wandering cubes", "Pulse", "Chasing dots", "Three bounce", "Circle", "Cube grid", "Fading circle", "Folding cube"
						 plugins.svyBlockUI.spinner = "Three bounce";
						 plugins.svyBlockUI.overlayColor = '#000000'
						 plugins.svyBlockUI.overlayOpacity = 0.35;
						 plugins.svyBlockUI.show('Importando Datos... Por favor espere!');
						 
						process()
					}
				}			
				else 
				{
					plugins.webnotificationsToastr.warning('El fichero a importar debe ser en formato .xlsx o .csv','¡Advertencia!')
					//globals.GCshowWarningDialog('El fichero a importar debe ser en formato .xlsx o .csv',null,'Aceptar',null,null,null)
					return
					
				}
			}
		}
		else
		{
			plugins.webnotificationsToastr.warning('Falta Fichero que importar','¡Advertencia!')
			//globals.GCshowWarningDialog('Falta Fichero que importar',null,'Aceptar',null,null,null)
		}
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"9F657598-19C3-4126-A4C9-352E6ED19A91"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E2D02493-F4CE-44CF-AA98-836E22063DDB"}
 */
function onHide(event) {
	globals.GCFormulario = null;
	application.getWindow('Importar datos TBAI').hide();
	globals.GCenableBgElements();
	return true
}

/**
 * @params {String} theDialogName
 * 
 *
 *
 * @properties={typeid:24,uuid:"A49C2F4A-EB87-47CD-9616-38D875F6A9C8"}
 */
function startBusy(theDialogName)
{
	var params = {
         processFunction: process,
         message: 'Importando datos TBAI... Por favor espere!', 
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
 *
 * @properties={typeid:24,uuid:"87DCC9B6-B90D-40D0-B77D-1F9F08D9D0D7"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(deprecated)
 */
function process()
{
	
	application.output("process started");
	try {
		//var frm = controller.getName();
		var er = 0;
		if(globals.GCFormulario == 'Fichero Clientes Sector Vertical')
		{
			application.output('fichero EXCEL')
			//read workbook
			var workbook = scopes.svyExcelUtils.getWorkbook(globals.GCRutaFichero43);
			//get sheet containing the data
			//var sheet = workbook.getSheet('Hoja1');
			var sheet = workbook.getSheetAt(1);
			//get the data from rows 1 to 5, column 1 and 2
			var data = sheet.getSheetData(true, 1, 9999, 1, 11);
			//output result
			//application.output(data.getAsText('\t', '\n', '', true));
			n = data.getMaxRowIndex();
		    if(globals.GCFilaNombresCampos == 1) j = 2;
	        else j = 1;
	        
	        for (j;j<n;j++)
		    {
		    	var linea = new String()
		    	linea = data.getValue(j,1);
		    	if(linea)
		    	{
		    		var codcli = data.getValue(j,1);
		    		if(codcli) codcli = utils.stringReplace(codcli,'CL','');					
		    		var nomcli = data.getValue(j,2);
		    		var dircli = data.getValue(j,3);
		    		var cpcli = data.getValue(j,5);
		    		var citycli = data.getValue(j,6);
		    		//var provcli = data.getValue(j,7);
		    		var telcli = data.getValue(j,8);
		    		var tel2cli = data.getValue(j,9);
		    		var emailcli = data.getValue(j,10);
		    		var cifcli = data.getValue(j,11);
		    		
		    		application.output(codcli)
		    		var query = "select id from [tbmaestroclientes] where idcliente="+codcli;
					var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					var uid = dataset.getValue(1,1)
					/*if(uid)
					{
						var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbmaestroclientes');  
						  
						//load record by ID in foundset  
						vSet.loadRecords(databaseManager.convertToDataSet([uid]));
						var record = vSet.getRecord(vSet.getSelectedIndex());
						if(record)
						{
							if(nomcli && nomcli != '' && nomcli != null) record.desccliente = nomcli;
				    		else record.desccliente = null;
				    		if(dircli && dircli != '' && dircli != null) record.direccion = dircli;
				    		else record.direccion = null;
				    		if(cpcli && cpcli != '' && cpcli != null) record.codpostal = cpcli.toString();
				    		else record.codpostal = null;
				    		if(citycli && citycli != '' && citycli != null) record.poblacion = citycli;
				    		else record.poblacion = null;
				    		if(provcli && provcli != '' && provcli != null) record.provincia = provcli;
				    		else record.provincia = null;
				    		if(telcli && telcli != '' && telcli != null) record.telf1 = telcli.toString();
				    		else record.telf1 = null;
				    		if(tel2cli && tel2cli != '' && tel2cli != null) record.telf2 = tel2cli.toString();
				    		else record.telf2 = null;
				    		if(emailcli && emailcli != '' && emailcli != null) record.emailcontacto = emailcli;
				    		else record.emailcontacto = null;
				    		if(cifcli && cifcli != '' && cifcli != null) record.cif = cifcli;
				    		else record.cif = null;
				    		record.pais = 'ES'
				    		if(cifcli && utils.stringLeft(cifcli,1) == 'H' && !record.tipoiva) record.tipoiva = 10;
				    		else
				    		{
				    			if(!record.tipoiva) record.tipoiva = 21;
				    		}
							
							databaseManager.saveData(record)
							application.output(codcli)
						}
						
					}					
					else
					{
						record = vSet.getRecord(vSet.newRecord());
						record.id = application.getUUID()
			            record.idcliente = codcli;
						if(nomcli && nomcli != '' && nomcli != null) record.desccliente = nomcli;
			    		else record.desccliente = null;
			    		if(dircli && dircli != '' && dircli != null) record.direccion = dircli;
			    		else record.direccion = null;
			    		if(cpcli && cpcli != '' && cpcli != null) record.codpostal = cpcli.toString();
			    		else record.codpostal = null;
			    		if(citycli && citycli != '' && citycli != null) record.poblacion = citycli;
			    		else record.poblacion = null;
			    		if(provcli && provcli != '' && provcli != null) record.provincia = provcli;
			    		else record.provincia = null;
			    		if(telcli && telcli != '' && telcli != null) record.telf1 = telcli.toString();
			    		else record.telf1 = null;
			    		if(tel2cli && tel2cli != '' && tel2cli != null) record.telf2 = tel2cli.toString();
			    		else record.telf2 = null;
			    		if(emailcli && emailcli != '' && emailcli != null) record.emailcontacto = emailcli;
			    		else record.emailcontacto = null;
			    		if(cifcli && cifcli != '' && cifcli != null) record.cif = cifcli;
			    		else record.cif = null;
			    		record.pais = 'ES'
			    		if(cifcli && utils.stringLeft(cifcli,1) == 'H' && !record.tipoiva) record.tipoiva = 10;
			    		else
			    		{
			    			if(!record.tipoiva) record.tipoiva = 21;
			    		}
						
						databaseManager.saveData(record)
						application.output(codcli)
					}*/
					if(uid)
					{
						forms.FrmClientesGC.foundset.loadAllRecords()
						var result = forms.FrmClientesGC.foundset.selectRecord(uid)
						var fsCount = databaseManager.getFoundSetCount(forms.FrmClientesGC.foundset);
						while(result==false)
						{
							if(fsCount == forms.FrmClientesGC.foundset.getSize()) return;
							forms.FrmClientesGC.foundset.setSelectedIndex(forms.FrmClientesGC.foundset.getSize());
							result = forms.FrmClientesGC.foundset.selectRecord(uid);
						}
					}
					else
					{
						forms.FrmClientesGC.foundset.newRecord(true)
						forms.FrmClientesGC.foundset.id = application.getUUID()
						forms.FrmClientesGC.foundset.idcliente = codcli;
					}
		    		
		    		if(nomcli && nomcli != '' && nomcli != null) forms.FrmClientesGC.foundset.desccliente = nomcli;
		    		else forms.FrmClientesGC.foundset.desccliente = null;
		    		if(dircli && dircli != '' && dircli != null) forms.FrmClientesGC.foundset.direccion = dircli;
		    		else forms.FrmClientesGC.foundset.direccion = null;
		    		if(cpcli && cpcli != '' && cpcli != null) forms.FrmClientesGC.foundset.codpostal = cpcli.toString();
		    		else forms.FrmClientesGC.foundset.codpostal = null;
		    		if(citycli && citycli != '' && citycli != null) forms.FrmClientesGC.foundset.poblacion = citycli;
		    		else forms.FrmClientesGC.foundset.poblacion = null;
		    		if(cpcli) forms.FrmClientesGC.foundset.provincia = onDataChangeCP(cpcli.toString())
		    		//if(provcli && provcli != '' && provcli != null) forms.FrmClientesGC.foundset.provincia = provcli;
		    		//else forms.FrmClientesGC.foundset.provincia = null;
		    		if(telcli && telcli != '' && telcli != null) forms.FrmClientesGC.foundset.telf1 = telcli.toString();
		    		else forms.FrmClientesGC.foundset.telf1 = null;
		    		if(tel2cli && tel2cli != '' && tel2cli != null) forms.FrmClientesGC.foundset.telf2 = tel2cli.toString();
		    		else forms.FrmClientesGC.foundset.telf2 = null;
		    		if(emailcli && emailcli != '' && emailcli != null) forms.FrmClientesGC.foundset.emailcontacto = emailcli;
		    		else forms.FrmClientesGC.foundset.emailcontacto = null;
		    		if(cifcli && cifcli != '' && cifcli != null) forms.FrmClientesGC.foundset.cif = cifcli;
		    		else forms.FrmClientesGC.foundset.cif = null;
		    		forms.FrmClientesGC.foundset.pais = 'ES'
		    		if(cifcli && utils.stringLeft(cifcli,1) == 'H') forms.FrmClientesGC.foundset.tipoiva = 10;
		    		else forms.FrmClientesGC.foundset.tipoiva = 21;
		    		
		    		databaseManager.saveData(forms.FrmClientesGC.foundset)					
		    	}
		    }
	        databaseManager.refreshRecordFromDatabase(forms.FrmClientesGC.foundset,-1)
		}
		else if(globals.GCFormulario == 'Fichero Articulos Sector Vertical')
		{
			application.output('fichero EXCEL')
			//read workbook
			workbook = scopes.svyExcelUtils.getWorkbook(globals.GCRutaFichero43);
			//get sheet containing the data
			//var sheet = workbook.getSheet('Hoja1');
			sheet = workbook.getSheetAt(1);
			//get the data from rows 1 to 5, column 1 and 2
			data = sheet.getSheetData(true, 1, 9999, 1, 8);
			//output result
			//application.output(data.getAsText('\t', '\n', '', true));
			n = data.getMaxRowIndex();
		    if(globals.CONTAFilaNombresCampos == 1) j = 2;
	        else j = 1;
	        
	        for (j;j<n;j++)
		    {
		    	linea = new String()
		    	linea = data.getValue(j,1);
		    	if(linea)
		    	{
		    		var codart = data.getValue(j,1);
		    		var descart = data.getValue(j,2);
		    		var codfamart = data.getValue(j,3);
		    		//var descfamart = data.getValue(j,4);
		    		//var codsubfamart = data.getValue(j,5);
		    		var precart = data.getValue(j,6);
		    		//var pvpart = data.getValue(j,7);
		    		//if(precart && pvpart) var pivaart = Math.abs(globals.GCROUND(((precart - pvpart) / precart) * 100,2))
		    		//else pivaart = null;
		    		var descartdet = data.getValue(j,8);
		    		
		    		application.output(codart)
		    		query = "select id from [tbmaestroarticulos] where codigo='"+codart+"'";
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					uid = dataset.getValue(1,1)
		    		/*if(uid)
					{
						vSet = databaseManager.getFoundSet(globals.GCconex, 'tbmaestroarticulos');  
						  
						//load record by ID in foundset  
						vSet.loadRecords(databaseManager.convertToDataSet([uid]));
						record = vSet.getRecord(vSet.getSelectedIndex());
						if(record)
						{
							if(descart && descart != '' && descart != null) record.descripcion = descart;
				    		else record.descripcion = null;
				    		if(codfamart && codfamart != '' && codfamart != null) record.familia = codfamart;
				    		else record.familia = null;
				    		if(precart && precart != '' && precart != null) record.preciocosto = precart;
				    		else record.preciocosto = 0;
				    		record.piva_a = pivaart;
				    		if(pvpart && pvpart != '' && pvpart != null) record.preciopieza = pvpart;
				    		else record.preciopieza = null;
				    		if(descartdet && descartdet != '' && descartdet != null) record.desc_detalle_a = descartdet;
				    		else record.desc_detalle_a = null;
				    		record.multiplo = 1;
				    		record.situacion = 'A';
				    		record.fechavigor = new Date();
				    		
				    		databaseManager.saveData(record)
							application.output(codart)
						}
						else
						{
							record = vSet.getRecord(vSet.newRecord());
							record.id = application.getUUID()
				            record.codigo = codart;
							if(descart && descart != '' && descart != null) record.descripcion = descart;
				    		else record.descripcion = null;
				    		if(codfamart && codfamart != '' && codfamart != null) record.familia = codfamart;
				    		else record.familia = null;
				    		if(precart && precart != '' && precart != null) record.preciocosto = precart;
				    		else record.preciocosto = 0;
				    		record.piva_a = pivaart;
				    		if(pvpart && pvpart != '' && pvpart != null) record.preciopieza = pvpart;
				    		else record.preciopieza = null;
				    		if(descartdet && descartdet != '' && descartdet != null) record.desc_detalle_a = descartdet;
				    		else record.desc_detalle_a = null;
				    		record.multiplo = 1;
				    		record.situacion = 'A';
				    		record.fechavigor = new Date();
				    		
				    		databaseManager.saveData(record)
							application.output(codart)
						}
					}*/
					if(uid)
					{
						forms.FrmArticulosGC.foundset.loadAllRecords()
						result = forms.FrmArticulosGC.foundset.selectRecord(uid)
						fsCount = databaseManager.getFoundSetCount(forms.FrmArticulosGC.foundset);
						while(result==false)
						{
							if(fsCount == forms.FrmArticulosGC.foundset.getSize()) return;
							forms.FrmArticulosGC.foundset.setSelectedIndex(forms.FrmArticulosGC.foundset.getSize());
							result = forms.FrmArticulosGC.foundset.selectRecord(uid);
						}
					}
					else
					{
						forms.FrmArticulosGC.foundset.newRecord(true)
						forms.FrmArticulosGC.foundset.id = application.getUUID()
						forms.FrmArticulosGC.foundset.codigo = codart;
					}
		    		if(descart && descart != '' && descart != null) forms.FrmArticulosGC.foundset.descripcion = descart;
		    		else forms.FrmArticulosGC.foundset.descripcion = null;
		    		if(codfamart && codfamart != '' && codfamart != null) forms.FrmArticulosGC.foundset.familia = codfamart;
		    		else forms.FrmArticulosGC.foundset.familia = null;
		    		//if(precart && precart != '' && precart != null) forms.FrmArticulosGC.foundset.preciocosto = precart;
		    		//else forms.FrmArticulosGC.foundset.preciocosto = 0;
		    		forms.FrmArticulosGC.foundset.preciocosto = null;
		    		forms.FrmArticulosGC.foundset.piva_a = null;//pivaart;
		    		//if(pvpart && pvpart != '' && pvpart != null) forms.FrmArticulosGC.foundset.preciopieza = pvpart;
		    		//else forms.FrmArticulosGC.foundset.preciopieza = null;
		    		if(precart && precart != '' && precart != null) forms.FrmArticulosGC.foundset.preciopieza = precart;
		    		else forms.FrmArticulosGC.foundset.preciopieza = 0;
		    		if(descartdet && descartdet != '' && descartdet != null) forms.FrmArticulosGC.foundset.desc_detalle_a = descartdet;
		    		else forms.FrmArticulosGC.foundset.desc_detalle_a = null;
		    		forms.FrmArticulosGC.foundset.multiplo = 1;
		    		forms.FrmArticulosGC.foundset.situacion = 'A';
		    		forms.FrmArticulosGC.foundset.fechavigor = new Date();
		    		//forms.FrmArticulosGC.foundset.unidmedida = 'und';
		    		
		    		
		    		databaseManager.saveData(forms.FrmArticulosGC.foundset)					
		    	}
		    }
		    databaseManager.refreshRecordFromDatabase(forms.FrmArticulosGC.foundset,-1)
		}
		else
		{
			if(globals.GCRutaFichero43.indexOf('.csv') >= 0 && globals.GCFormulario == null) 
			{
			/*
				var ruta = globals.GCRutaFichero43;
			    var texto = new Array();
			    
			    var AgnoEjercicio = globals.Ejercicio;
			    var asiento = new Number();
		        var AsientoAnterior = new Number();
		        var fecha = new Date();
		        var fech = utils.dateFormat(fecha,'dd-MM-yyyy')
				fecha = utils.parseDate(fech,'dd-MM-yyyy')
		    	var d = new Number();
		    	var m = new Number();
		    	var a = new Number();
		    	var CC = null;
		    	var descCC = null;
		    	var DH = null;
		    	var BI1 = new String();
		    	var BI2 = new String();
		    	var CU1 = new String();
		    	var CU2 = new String();
		    	var IVA1 = new String();
		    	var IVA2 = new String();
			    
			    
			    var _oFR = new Packages.java.io.FileInputStream(ruta),
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
		        
		        if(globals.CONTAFilaNombresCampos == 1)
		        {
		        	var j = 1;
		        }
		        else
		        {
		        	j = 0;
		        }
		        
			    for (j;j<i;j++)
			    {
			    	var linea = texto[j];
			    	asiento = linea.slice(11, 16);
			    	linea = texto[j];
			    	
			        if (asiento != AsientoAnterior)
			        {
			        	sub_setNewNumeroAsiento();	        	
			        	d = linea.slice(0, 2);
			        	linea = texto[j];
			        	m = linea.slice(2, 4);
			        	linea = texto[j];
			        	m = m - 1;
			        	a = linea.slice(4, 8);
			        	linea = texto[j];
		    			fecha.setDate(d);
		    			fecha.setMonth(m);
						fecha.setFullYear(a);
		    			
		    			if(fecha.getFullYear() == AgnoEjercicio)
		    			{
		    				var vSet = databaseManager.getFoundSet(globals.conexCONTA, 'casientocontablecabecera')  
		
							//load record by ID in foundset  
							//vSet.loadRecords(databaseManager.convertToDataSet([ID]))  
							
					    	var record = vSet.getRecord(vSet.newRecord())	
							record.id = application.getUUID()
		    				record.idejercicio = globals.Empresa;
			    			record.idasiento = Asiento;	
			    			record.fechaasiento = fecha;
			    			record.situacion = 0;
			    			
			    			databaseManager.saveData(record);	  
		    			}
			        }
			        
			        if(fecha.getFullYear() == globals.Ejercicio)
					{
						var vSet2 = databaseManager.getFoundSet(globals.conexCONTA, 'casientocontablelinea')  
		
						//load record by ID in foundset  
						//vSet.loadRecords(databaseManager.convertToDataSet([ID]))  
						
				    	var record2 = vSet2.getRecord(vSet2.newRecord())
						record2.id = application.getUUID()
		    			record2.idasientolinea = linea.slice(17, 21);
				        linea = texto[j];
				        record2.idasiento = Asiento;	
						application.output(record2.idasiento+'/'+record2.idasientolinea)			       
						record2.idejercicio = globals.Empresa;
						record2.fechaasiento = fecha;
						CC = linea.slice(22, 30);
						CC = utils.stringTrim(CC)
						linea = texto[j];
						record2.cuentacontable = CC;
						var query = "select [DescCuentaContable] from [ctbCuentaContable] where [IdEjercicio] = '" + globals.Empresa +
						"' AND [CuentaContable] = '"+CC+"'";
						var dataset3 = databaseManager.getDataSetByQuery(globals.conexCONTA, query, null, 1)
						descCC = dataset3.getValue(1, 1)
						if(descCC == '') descCC = null		    	
						record2.desccuentacontable = descCC;
						record2.concepto = utils.stringTrim(linea.slice(34, 84));
						linea = texto[j];
						record2.moneda = 'EURO';
						DH = linea.slice(99, 100);
						linea = texto[j];
						if(DH == 'D')
						{
							record2.importedebe = linea.slice(85, 98);
							linea = texto[j];
						}
						else if(DH == 'H')
						{
							record2.importehaber = linea.slice(85, 98);
							linea = texto[j];
						}
						
						BI1 = linea.slice(101, 114);
						//BI1 = utils.stringToNumber(BI1)
						linea = texto[j];
						if(utils.stringToNumber(BI1) != 0)
						{
							CU1 = linea.slice(121, 134);
							linea = texto[j];
							IVA1 = linea.slice(115, 120);
							linea = texto[j];
							record2.baseiva1 = BI1;
							record2.cuotaiva1 = CU1;
							record2.porciva1 = IVA1;
						}
						BI2 = linea.slice(135, 148);
						//BI2 = utils.stringToNumber(BI2)
						linea = texto[j];
						if(utils.stringToNumber(BI2) != 0)
						{
							CU2 = linea.slice(155, 168);
							linea = texto[j];
							IVA2 = linea.slice(149, 154);
							linea = texto[j];
							record2.baseiva2 = BI2;
							record2.cuotaiva2 = CU2;
							record2.porciva2 = IVA2;
						}
						
						record2.situacion = '...';
						record2.situacioncobro = '...';
						record2.idusuario = globals.login_usuarioCONTA;
						record2.fechultmodif = new Date();
						
						databaseManager.saveData(record2);
					}
			        
					AsientoAnterior = asiento;
			    }  
			    */
			    var targetFullPath = globals.GCRutaFichero43;//target.getAbsolutePath();  // Obtain the full file path
			    var fileContents = application.readTXTFile(targetFullPath);
			    var sSeparator = ";";  // Change to the separator character used in the definition
			    result = parseCSV(fileContents, false, sSeparator);
			    
			    var n = result.length;
			    if(globals.GCFilaNombresCampos == 1) var j = 1;
		        else j = 0;
		        
			    for (j;j<n;j++)
			    {
			    	linea = new String()
			    	linea = result[j][0].toString();
			    	var campos = linea.split(';')
						
				    var eje = utils.stringTrim(campos[0]);
			    	var ser = '';
				    var nup = utils.stringTrim(campos[1]);
				    var mac = utils.stringTrim(campos[2]);
				    if(!mac || mac == '') mac = null;
				    var ctbai = utils.stringTrim(campos[3]);
				    if(!ctbai || ctbai == '') ctbai = null;
				    var cqr = utils.stringTrim(campos[4]);
				    if(!cqr || cqr == '') cqr = null;
				    var fechenv = utils.parseDate(campos[5],'yyyy-MM-dd HH:mm:ss');
				    if(!fechenv || fechenv == '') fechenv = null;
				    var firma = utils.stringTrim(campos[6]);
				    if(!firma || firma == '') firma = null;
				    		
				   	if(eje && nup /*&& mac && ctbai && cqr && fechenv && firma*/)
				   	{
					   	query = "select ID FROM tbFacturaCabecera WHERE eje_cfa = "+eje+
					   				" AND ser_cfa = '"+ser+"' AND nup_cfa = "+nup;
						dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
							
						uid = dataset.getValue(1,1);
						if(uid)
						{
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturacabecera');  
							  
							//load record by ID in foundset  
							vSet.loadRecords(databaseManager.convertToDataSet([uid]));
							var record = vSet.getRecord(vSet.getSelectedIndex());
							if(record)
							{
								record.mac = mac;
								record.ctbai = ctbai;
								record.cqr = cqr;
								record.fechaenviofichero = fechenv;
								record.firmafactura = firma;
								record.fichero_respuesta_tbai = null;
								
								databaseManager.saveData(record)
							}
					   	}
				   	}
				}
				 databaseManager.refreshRecordFromDatabase(vSet,-1)
			}
	    }		
	}catch (e) {
		er = 1;
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(e.toString(),'¡Error!')
		else globals.GCshowErrorDialog(e.toString(),null,null,null,null,null)
		application.output("catched exception");
		application.output(e);
	} finally {
		globals.GCFormulario = null;
		//if (plugins.busy) plugins.busy.unblock();		
		if(plugins.svyBlockUI) plugins.svyBlockUI.stop()
		/*if (application.getApplicationType() != APPLICATION_TYPES.SMART_CLIENT) {
			plugins.WebClientUtils.executeClientSideJS('location.reload();');
		}*/
		application.getWindow('Importar datos TBAI').hide();
		globals.GCenableBgElements();
		if(er==0){ 
			forms.dlg_ImpresionFacturasTBAIGC.xmltbai = null;
			forms.dlg_ImpresionFacturasTBAIGC.anulatbai = null;
			forms.dlg_ImpresionFacturasTBAIGC.modificartbai = null;
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.success('Importación realizada con éxito','¡Exito!')
			else globals.GCshowInfoDialog('Importación de datos realizada con éxito',null,'Aceptar',null,null,null)
		}
		else {
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('La importación de datos NO se ha realizado','¡Error!')
			else globals.GCshowErrorDialog('La importación de datos NO se ha realizado',null,'Aceptar',null,null,null)
		}
		
	}
	application.output("process end");
	
	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * 
 * TODO generated, please specify type and doc for the params
 * @param {String} CP
 * 
 * @return {String}
 *
 *
 * @properties={typeid:24,uuid:"75234BAB-D911-4ECD-814B-EA1F05AE6531"}
 */
function onDataChangeCP(CP) {
	var provincia = null
	if(CP)
	{
		if(CP.length == 5)
		{
			var prov = utils.stringLeft(CP,2)	
			switch( prov )
			{
				case '01': 
				{
					provincia = 'ÁLAVA';				
					break;
				}
				case '02': 
				{
					provincia = 'ALBACETE';
					break;
				}
				case '03': 
				{
					provincia = 'ALICANTE';					
					break;
				}
				case '04': 
				{
					provincia = 'ALMERÍA';					
					break;
				}
				case '33': 
				{
					provincia = 'ASTURIAS';					
					break;
				}
				case '05': 
				{
					provincia = 'ÁVILA';
					break;
				}
				case '06': 
				{
					provincia = 'BADAJOZ';					
					break;
				}
				case '08': 
				{
					provincia = 'BARCELONA';					
					break;
				}
				case '09': 
				{
					provincia = 'BURGOS';					
					break;
				}
				case '10': 
				{
					provincia = 'CÁCERES';					
					break;
				}
				case '11': 
				{
					provincia = 'CÁDIZ';					
					break;
				}
				case '39': 
				{
					provincia = 'CANTABRIA';					
					break;
				}
				case '12':
				{
					provincia = 'CASTELLÓN';					
					break;
				}
				case '51':
				{
					provincia = 'CEUTA';
					break;
				}
				case '13':
				{
					provincia = 'CIUDAD REAL';					
					break;
				}
				case '14':
				{
					provincia = 'CÓRDOBA';					
					break;
				}
				case '15':
				{
					provincia = 'CORUÑA, A';					
					break;
				}
				case '16':
				{
					provincia = 'CUENCA';					
					break;
				}
				case '17':
				{
					provincia = 'GIRONA';					
					break;
				}
				case '18':
				{
					provincia = 'GRANADA';					
					break;
				}
				case '19':
				{
					provincia = 'GUADALAJARA';					
					break;
				}
				case '20':
				{
					provincia = 'GUIPÚZCOA';					
					break;
				}
				case '21':
				{
					provincia = 'HUELVA';					
					break;
				}
				case '22':
				{
					provincia = 'HUESCA';					
					break;
				}
				case '07':
				{
					provincia = 'ILLES BALEARS';					
					break;
				}
				case '23':
				{
					provincia = 'JAÉN';					
					break;
				}
				case '24':
				{
					provincia = 'LEÓN';					
					break;
				}
				case '25':
				{
					provincia = 'LLEIDA';					
					break;
				}
				case '27':
				{
					provincia = 'LUGO';					
					break;
				}
				case '28':
				{
					provincia = 'MADRID';
					break;
				}
				case '29':
				{
					provincia = 'MÁLAGA';					
					break;
				}
				case '52':
				{
					provincia = 'MELILLA';					
					break;
				}
				case '30':
				{
					provincia = 'MURCIA';					
					break;
				}
				case '31':
				{
					provincia = 'NAVARRA';					
					break;
				}
				case '32':
				{
					provincia = 'OURENSE';					
					break;
				}
				case '34':
				{
					provincia = 'PALENCIA';					
					break;
				}
				case '35':
				{
					provincia = 'PALMAS, LAS';					
					break;
				}
				case '36':
				{
					provincia = 'PONTEVEDRA';					
					break;					
				}
				case '26':
				{
					provincia = 'RIOJA, LA';					
					break;
				}
				case '37':
				{
					provincia = 'SALAMANCA';					
					break;
				}
				case '38':
				{
					provincia = 'S.C.TENERIFE';					
					break;
				}
				case '40':
				{
					provincia = 'SEGOVIA';
					break;
				}
				case '41':
				{
					provincia = 'SEVILLA';					
					break;
				}
				case '42':
				{
					provincia = 'SORIA';					
					break;
				}
				case '43':
				{
					provincia = 'TARRAGONA';					
					break;
				}
				case '44':
				{
					provincia = 'TERUEL';					
					break;
				}
				case '45':
				{
					provincia = 'TOLEDO';					
					break;
				}
				case '46':
				{
					provincia = 'VALENCIA';					
					break;
				}
				case '47':
				{
					provincia = 'VALLADOLID';					
					break;
				}
				case '48':
				{
					provincia = 'VIZCAYA';					
					break;
				}
				case '49':
				{
					provincia = 'ZAMORA';					
					break;
				}
				case '50':
				{
					provincia = 'ZARAGOZA';
					break;
				}
				default: break;		
			}
		}
	}
	return provincia
}

/**
 * @return {Array}
 * @properties={typeid:24,uuid:"CFC07E25-BA41-4763-9BF3-189EFA892D37"}
 */
function parseCSV()
{
   /*
   @method: parseCSV(sData, bTrim, sSeparator)

   @arg sData : [string] The csv data you want to parse
   @opt bTrim : [boolean] optional argument used if you want to trim the white spaces off the fields
   @arg sSeparator : [string] The separator character for columns delimitation

   @return aParsedData : [array] multi-dimensional array of rows and columns

   @description : Takes a string and applies csv rules to it to form an array of rows and columns.
               As there aren't hard standards for csv I applied the rules from the wiki http://en.wikipedia.org/wiki/Comma-separated_values

   @note:   Original by Matt Frizzell of adBlocks, modified by Ben Savignac of LOGIsoft

   @history:   01/07/2010   MSF   Created parseCSV method
               01/21/2010   BRS   Modified parseCSV method
    ********************************************************************************/
   var sData = new String();
   var bTrim = false;

   var aParsedData;
   var aRow;
   var aSearchTemplate;
   var aSearch;
   var bInQuotes;
   var bSpecial;
   var sColumn;
   var sSeparator;


   // If no string to parse was passed there is no reason to run this method so return
   if (!arguments[0])
   {
      return;
   }
   sData = arguments[0];

   // If column data should be trimmed set the marker
   if (arguments[1])
   {
      bTrim = true;
   }

   // If a separator has been defined, set it
   if (arguments[2])
   {
      sSeparator = arguments[2];
      aSearchTemplate = ['"', "\n", "\r", sSeparator];
   } else {
      aSearchTemplate = ['"', "\n", "\r"];
   }
   
   // Set the default character search array made up of the special characters that csv has to deal with
   aSearch = aSearchTemplate.slice(0);

   // Initialize the return array, the first column, and the first row array
   aParsedData = new Array();
   sColumn = "";
   aRow = new Array();

   // Loop through the characters in the string
   for (var i = 0; i < sData.length; i++)
   {
      // Reset the special character marker to false
      bSpecial = false;

      // Loop through the current special character search array
      for (var s = 0; s < aSearch.length; s++)
      {
         // And if we hit a speical character note that
         if ( sData[i] == aSearch[s])
         {
            bSpecial = true;
            break;
         }
      }

      // If this is a special character that we are currently looking for it process it separately
      if ( bSpecial )
      {
         // Switch on the current character (we can only get to separator characters, carriage returns, and line feeds if we aren't in double-quotes which is take care of by the aSearch array)
         switch (sData[i])
         {
         // If the character is the separator OUTSIDE DOUBLE QUOTES then we know this is the end of a column of data, so push it to the row and reinitialize the column string
         case sSeparator:
         if ( !bInQuotes )
         {
            // If we are not inside double-quotes, are currently on the separator, AND the next character is a quote,
            // then we know this is the end of a column of data so push it to the row and reinitialize the column string
            if (sData[i+1] && '"' == sData[i+1])
            {
               if (bTrim)
               {
                  sColumn = utils.stringTrim(sColumn);
               }
               aRow.push(sColumn);
               sColumn = "";
               aSearch = aSearchTemplate.slice(0);
            }
            // If we are not inside quotes but the next character is not another set of double quotes it means this is not really a separator and we just add the character to the data
            else
            {
               sColumn += sData[i];
               aSearch = aSearchTemplate.slice(0);
            }
         }
         // If we are inside a set of double-quotes, this is not really a separator and we just add the character to the data
         else
         {
            sColumn += sData[i];
            aSearch = aSearchTemplate.slice(0);
         }
         break;

         // If this is a carriage return then it is the end of a row so push the column to the row and then push the row to the ParsedData array
         case "\r":
         if (bTrim)
         {
            sColumn = utils.stringTrim(sColumn);
         }
         aRow.push(sColumn);
         aParsedData.push(aRow);
         aRow = new Array();
         sColumn = "";

         // If the next character happens to be a new line then skip it because this is a csv whose rows end with \r\n
         if ( sData[i+1] && "\n" == sData[i+1] )
         {
            i++;
         }
         break;


         // If this is a new line then it is the end of a row so push the column to the row and then push the row to the ParsedData array
         case "\n":
         if (bTrim)
         {
            sColumn = utils.stringTrim(sColumn);
         }
         aRow.push(sColumn);
         aParsedData.push(aRow);
         aRow = new Array();
         sColumn = "";
         break;     

         // Quotes are highly special, read on
         case '"':
         // Check to see if we are already inside a set of double-quotes
         if ( bInQuotes )
         {
            // If we are inside double-quotes, are currently on a quote, AND the next character is a quote it means we have found an escaped quote that we want to allow
            // So add a single quote to the column and then skip the next character by incrementing i
            if (sData[i+1] && '"' == sData[i+1])
            {
               sColumn += '"';
               i++;
            }
            // If we are inside quotes but the next character is not another set of double quotes it means we have reached the quoted data so change the Search array back to our normal set and move on
            else
            {
               aSearch = aSearchTemplate.slice(0);
               bInQuotes = false;
            }
         }
         // If we are not inside a set of double-quotes, this is our first set and means that the next special characters that we care about are closing double-quotes and the separator character
         else
         {
            bInQuotes = true;
            aSearch = ['"', sSeparator];
         }
         break;
         }
      }
      // If this is NOT a special character just add it to the current column's data
      else
      {
         sColumn += sData[i];
      }
   }

   // Finalize the data by adding the last column and row to our return data
   if (bTrim)
   {
      sColumn = utils.stringTrim(sColumn);
   }
   aRow.push(sColumn);
   aParsedData.push(aRow);

   // Enjoy your data
   return aParsedData;
}
