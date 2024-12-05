/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"063522AF-8537-407E-AED5-0A14DB0BDA70"}
 */
var busyWindowName = 'dialogImportacionDatosGC';

/**
 *
 * @properties={typeid:24,uuid:"10C5FE72-C533-44FD-BB91-C132BFCAEFA0"}
 */
function btn_cancel()
{
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	application.getWindow('Importacion Datos').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"D40D4372-D786-44F7-A576-64EDA74DBD35"}
 * @SuppressWarnings(unused)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	if(globals.RutaFicheroImportar)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT) 
		{
			if(forms.dlg_ImportacionDatosGC.FormatoFichero == 0) process2() 
			else processxlsx2()
		}
		else
		{
			var f = plugins.file.convertToJSFile(globals.RutaFicheroImportar);
		
			if(f && f.exists()) {
				if(forms.dlg_ImportacionDatosGC.FormatoFichero == 0)
				{
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
					else process();
				}
				else
				{
					//if (plugins.busy) startBusyxlsx(busyWindowName)  
					//else processxlsx()
					if(plugins.svyBlockUI) {
						//plugins.svyBlockUI.setMessage('Importando Datos... Por favor espere!')
						 plugins.svyBlockUI.spinner = "Three bounce";
						 plugins.svyBlockUI.overlayColor = '#000000'
						 plugins.svyBlockUI.overlayOpacity = 0.35;
						 plugins.svyBlockUI.show('Importando Datos... Por favor espere!');
						processxlsx()
					}					
					else processxlsx();
				}
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
 * @properties={typeid:24,uuid:"36474D2B-99FE-4DC1-BB45-7CC2F44E99DA"}
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
 * @properties={typeid:24,uuid:"72AD48AD-AC5B-4CDC-AB8E-64947A90AB0E"}
 */
function onHide(event) {
	//if(plugins.busy) plugins.busy.unblock()
	application.getWindow('Importacion Datos').hide();
	globals.GCenableBgElements();
	return true
}

/**
*
* @SuppressWarnings(unused)
*
 * @properties={typeid:24,uuid:"822C852D-E900-4A37-A448-F2F53F692FA9"}
 */
function ImportarClientes()
{
	var ruta = globals.RutaFicheroImportar;
    var texto = new Array();
    
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
    
    if(globals.GCFilaNombresCampos == 1)
    {
    	var j = 1;
    }
    else
    {
    	j = 0;
    }
    
    for (j;j<i;j++)
    {
	    	/*var porc = globals.GCROUND(((j+1)*100/(i+1)),0)
	    	forms.dlg_ImportacionDatosGC.elements.progress.stringPainted = true
	    	forms.dlg_ImportacionDatosGC.elements.progress.string = porc+' %';
	    	forms.dlg_ImportacionDatosGC.elements.progress.value = porc;
	    	forms.dlg_ImportacionDatosGC.elements.progress.maximum = 100;
				
	    	if ( i%5 == 0 ) {
				application.updateUI()
	    	}*/
    		var campos = texto[j].split(';')
			
    		var codigo = utils.stringTrim(campos[0]);
    		var desc = utils.stringTrim(campos[1]);
    		var direc = utils.stringTrim(campos[2]);
    		var pobl = utils.stringTrim(campos[3]);
    		var prov = utils.stringTrim(campos[4]);
    		var cp = utils.stringTrim(campos[5]);
    		if(cp && !prov) prov = onDataChangeCP(cp)
    		var pcontacto = utils.stringTrim(campos[6]);
    		var email = utils.stringTrim(campos[7]);
    		var numprov = utils.stringTrim(campos[8]);
    		var telf1 = utils.stringTrim(campos[9]);
    		var telf2 = utils.stringTrim(campos[10]);
    		var fax = utils.stringTrim(campos[11]);
    		var cif = utils.stringTrim(campos[12]);
    		var cc = utils.stringTrim(campos[13]);
    		var pais = utils.stringTrim(campos[15]);
    		if(!pais && cp && prov) pais = 'ES';
    		else pais = null
    		var piva = utils.stringTrim(campos[14]);
    		if(!piva && pais == 'ES') piva = 21;
    		else piva = 0;
    		var obser = utils.stringTrim(campos[16]);
    		
    		var query = "select id from tbmaestroclientes where idcliente = " + codigo;
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var uuid = dataset.getValue(1, 1)
			if(uuid == null)
			{
				forms.FrmClientesGC.foundset.newRecord(true)
				forms.FrmClientesGC.id = application.getUUID();
				if(codigo != '') forms.FrmClientesGC.idcliente = codigo;
				if(desc != '') forms.FrmClientesGC.desccliente = desc;
				if(direc != '') forms.FrmClientesGC.direccion = direc;
				if(pobl != '') forms.FrmClientesGC.poblacion = pobl;
				if(prov != '') forms.FrmClientesGC.provincia = prov;
				if(cp != '') forms.FrmClientesGC.codpostal = cp;
				if(pcontacto != '') forms.FrmClientesGC.perscontacto = pcontacto;
				if(email != '') forms.FrmClientesGC.emailcontacto = email;
				if(numprov != '') forms.FrmClientesGC.numproveedor = numprov;
				if(telf1 != '') forms.FrmClientesGC.telf1 = telf1;
				if(telf2 != '') forms.FrmClientesGC.telf2 = telf2;
				if(fax != '') forms.FrmClientesGC.fax = fax;
				if(cif != '') forms.FrmClientesGC.cif = cif;
				if(cc != '') forms.FrmClientesGC.cuentacontable = cc;
				if(piva != '') forms.FrmClientesGC.tipoiva = piva;
				if(pais != '') forms.FrmClientesGC.pais = pais;
				if(obser != '') forms.FrmClientesGC.observaciones = obser;
				
				if (j % 10 == 0 || j == (i-1)) databaseManager.saveData();
			}
			else
			{
				forms.FrmClientesGC.foundset.loadAllRecords()
				var result = forms.FrmClientesGC.foundset.selectRecord(uuid)
				var fsCount = databaseManager.getFoundSetCount(forms.FrmClientesGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.FrmClientesGC.foundset.getSize()) return;
					forms.FrmClientesGC.foundset.setSelectedIndex(forms.FrmClientesGC.foundset.getSize());
					result = forms.FrmClientesGC.foundset.selectRecord(uuid);
				}
				
				if(desc != '') forms.FrmClientesGC.desccliente = desc;
				else forms.FrmClientesGC.desccliente = null;
				if(direc != '') forms.FrmClientesGC.direccion = direc;
				else forms.FrmClientesGC.direccion = null;
				if(pobl != '') forms.FrmClientesGC.poblacion = pobl;
				else forms.FrmClientesGC.poblacion = null;
				if(prov != '') forms.FrmClientesGC.provincia = prov;
				else forms.FrmClientesGC.provincia = null;
				if(cp != '') forms.FrmClientesGC.codpostal = cp;
				else forms.FrmClientesGC.codpostal = null;
				if(pcontacto != '') forms.FrmClientesGC.perscontacto = pcontacto;
				else forms.FrmClientesGC.perscontacto = null;
				if(email != '') forms.FrmClientesGC.emailcontacto = email;
				else forms.FrmClientesGC.emailcontacto = null;
				if(numprov != '') forms.FrmClientesGC.numproveedor = numprov;
				else forms.FrmClientesGC.numproveedor = null;
				if(telf1 != '') forms.FrmClientesGC.telf1 = telf1;
				else forms.FrmClientesGC.telf1 = null;
				if(telf2 != '') forms.FrmClientesGC.telf2 = telf2;
				else forms.FrmClientesGC.telf2 = null;
				if(fax != '') forms.FrmClientesGC.fax = fax;
				else forms.FrmClientesGC.fax = null;
				if(cif != '') forms.FrmClientesGC.cif = cif;
				else forms.FrmClientesGC.cif = null;
				if(cc != '') forms.FrmClientesGC.cuentacontable = cc;
				else forms.FrmClientesGC.cuentacontable = null;
				if(piva != '') forms.FrmClientesGC.tipoiva = piva;
				else forms.FrmClientesGC.tipoiva = null;
				if(pais != '') forms.FrmClientesGC.pais = pais;
				else forms.FrmClientesGC.pais = null;
				if(obser != '') forms.FrmClientesGC.observaciones = obser;
				else forms.FrmClientesGC.observaciones = null;
				
				if (j % 10 == 0 || j == (i-1)) databaseManager.saveData();
				
				
			}
    		
    }
}

/**
*
* @SuppressWarnings(unused)
*
 *
 * @properties={typeid:24,uuid:"AADD6CC7-B66B-493F-979E-D41DDEBADC51"}
 */
function ImportarProveedores()
{
	var ruta = globals.RutaFicheroImportar;
    var texto = new Array();
    
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
    
    if(globals.GCFilaNombresCampos == 1)
    {
    	var j = 1;
    }
    else
    {
    	j = 0;
    }
    
    for (j;j<i;j++)
    {
    		var campos = texto[j].split(';')
			
    		var codigo = utils.stringTrim(campos[0]);
    		var cc = utils.stringTrim(campos[1]);
    		var desc = utils.stringTrim(campos[2]);
    		var pobl = utils.stringTrim(campos[3]);
    		var prov = utils.stringTrim(campos[4]);
    		var cp = utils.stringTrim(campos[5]);
    		if(cp && !prov) prov = onDataChangeCP(cp)
    		var pcontacto = utils.stringTrim(campos[6]);
    		var telf1 = utils.stringTrim(campos[7]);
    		var telf2 = utils.stringTrim(campos[8]);
    		var fax = utils.stringTrim(campos[9]);
    		var cif = utils.stringTrim(campos[10]);
    		var pais = utils.stringTrim(campos[15]);
    		if(!pais && cp && prov) pais = 'ES';
    		else pais = null
    		var piva = utils.stringTrim(campos[11]);
    		if(!piva && pais == 'ES') piva = 21;
    		else piva = 0;
    		var pirpf = utils.stringTrim(campos[12]);
    		var email = utils.stringTrim(campos[13]);
    		var direc = utils.stringTrim(campos[14]);
    		
    		var query = "select id from tbmaestroproveedores where codpro = " + codigo;
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var uuid = dataset.getValue(1, 1)
			if(uuid == null)
			{
				forms.FrmProveedoresGC.foundset.newRecord(true)
				forms.FrmProveedoresGC.id = application.getUUID();
				if(codigo != '') forms.FrmProveedoresGC.codpro = codigo;
				if(cc != '') forms.FrmProveedoresGC.cuentacontable = cc;
				if(desc != '') forms.FrmProveedoresGC.descproveedor = desc;
				if(pobl != '') forms.FrmProveedoresGC.poblacion = pobl;
				if(prov != '') forms.FrmProveedoresGC.provincia = prov;
				if(cp != '') forms.FrmProveedoresGC.codpostal = cp;
				if(pcontacto != '') forms.FrmProveedoresGC.perscontacto = pcontacto;
				if(telf1 != '') forms.FrmProveedoresGC.telf1 = telf1;
				if(telf2 != '') forms.FrmProveedoresGC.telf2 = telf2;
				if(fax != '') forms.FrmProveedoresGC.fax = fax;
				if(cif != '') forms.FrmProveedoresGC.cif = cif;
				if(piva != '') forms.FrmProveedoresGC.porciva = piva;
				if(pirpf != '') forms.FrmProveedoresGC.porcirpf = pirpf;
				if(email != '') forms.FrmProveedoresGC.email = email;
				if(direc != '') forms.FrmProveedoresGC.direccion = direc;
				if(pais != '') forms.FrmProveedoresGC.pais = pais;
				
				if (j % 10 == 0 || j == (i-1)) databaseManager.saveData();
			}
			else
			{
				forms.FrmProveedoresGC.foundset.loadAllRecords()
				var result = forms.FrmProveedoresGC.foundset.selectRecord(uuid)
				var fsCount = databaseManager.getFoundSetCount(forms.FrmProveedoresGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.FrmProveedoresGC.foundset.getSize()) return;
					forms.FrmProveedoresGC.foundset.setSelectedIndex(forms.FrmProveedoresGC.foundset.getSize());
					result = forms.FrmProveedoresGC.foundset.selectRecord(uuid);
				}
				
				if(cc != '') forms.FrmProveedoresGC.cuentacontable = cc;
				else forms.FrmProveedoresGC.cuentacontable = null;
				if(desc != '') forms.FrmProveedoresGC.descproveedor = desc;
				else forms.FrmProveedoresGC.descproveedor = null;
				if(pobl != '') forms.FrmProveedoresGC.poblacion = pobl;
				else forms.FrmProveedoresGC.poblacion = null;
				if(prov != '') forms.FrmProveedoresGC.provincia = prov;
				else forms.FrmProveedoresGC.provincia = null;
				if(cp != '') forms.FrmProveedoresGC.codpostal = cp;
				else forms.FrmProveedoresGC.codpostal = null;
				if(pcontacto != '') forms.FrmProveedoresGC.perscontacto = pcontacto;
				else forms.FrmProveedoresGC.perscontacto = null;
				if(telf1 != '') forms.FrmProveedoresGC.telf1 = telf1;
				else forms.FrmProveedoresGC.telf1 = null;
				if(telf2 != '') forms.FrmProveedoresGC.telf2 = telf2;
				else forms.FrmProveedoresGC.telf2 = null;
				if(fax != '') forms.FrmProveedoresGC.fax = fax;
				else forms.FrmProveedoresGC.fax = null;
				if(cif != '') forms.FrmProveedoresGC.cif = cif;
				else forms.FrmProveedoresGC.cif = null;
				if(piva != '') forms.FrmProveedoresGC.porciva = piva;
				else forms.FrmProveedoresGC.porciva = null;
				if(pirpf != '') forms.FrmProveedoresGC.porcirpf = pirpf;
				else forms.FrmProveedoresGC.porcirpf = null;
				if(email != '') forms.FrmProveedoresGC.email = email;
				else forms.FrmProveedoresGC.email = null;
				if(direc != '') forms.FrmProveedoresGC.direccion = direc;
				else forms.FrmProveedoresGC.direccion = null;
				if(pais != '') forms.FrmProveedoresGC.pais = pais;
				else forms.FrmProveedoresGC.pais = null;
				
				if (j % 10 == 0 || j == (i-1)) databaseManager.saveData();
			}
    		
    }
}

/**
*
* @SuppressWarnings(unused)
*
 *
 *
 * @properties={typeid:24,uuid:"774F6FC0-7CA9-4572-9EFB-3D732A4BA1CC"}
 */
function ImportarArticulos()
{
	var ruta = globals.RutaFicheroImportar;
    var texto = new Array();
    
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
    
    if(globals.GCFilaNombresCampos == 1)
    {
    	var j = 1;
    }
    else
    {
    	j = 0;
    }
    
    for (j;j<i;j++)
    {
    		var campos = texto[j].split(';')
			
    		var codigo = utils.stringTrim(campos[0]);
    		var desc = utils.stringTrim(campos[1]);
    		var refcli = utils.stringTrim(campos[2]);
    		var descing = utils.stringTrim(campos[3]);
    		var unid = utils.stringTrim(campos[4]);
    		var pesob = utils.stringTrim(campos[5]);
    		var peson = utils.stringTrim(campos[6]);
    		var preccosto = utils.stringTrim(campos[7]);
    		var loteecon = utils.stringTrim(campos[8]);
    		var stockmin = utils.stringTrim(campos[9]);
    		var obser = utils.stringTrim(campos[10]);
    		var prec = utils.stringTrim(campos[11]);
    		var mult = utils.stringTrim(campos[12]);
    		
    		var query = "select id from tbmaestroarticulos where codigo = '" + codigo +"'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var uuid = dataset.getValue(1, 1)
			if(uuid == null)
			{
				forms.FrmArticulosGC.foundset.newRecord(true)
				forms.FrmArticulosGC.id = application.getUUID();
				if(codigo != '') forms.FrmArticulosGC.codigo = codigo;
				if(desc != '') forms.FrmArticulosGC.descripcion = desc;
				if(refcli != '') forms.FrmArticulosGC.refcliente = refcli;
				if(descing != '') forms.FrmArticulosGC.descingles = descing;
				if(unid != '') forms.FrmArticulosGC.unidmedida = unid;
				if(pesob != '') forms.FrmArticulosGC.pesobruto = pesob;
				if(peson != '') forms.FrmArticulosGC.pesoneto = peson;
				if(preccosto != '') forms.FrmArticulosGC.preciocosto = preccosto;
				if(loteecon != '') forms.FrmArticulosGC.loteecon = loteecon;
				if(stockmin != '') forms.FrmArticulosGC.stockmin = stockmin;
				if(obser != '') forms.FrmArticulosGC.observacion = obser;
				if(prec != '') forms.FrmArticulosGC.preciopieza = prec;
				if(mult != '') forms.FrmArticulosGC.multiplo = mult;
				
				if (j % 10 == 0 || j == (i-1)) databaseManager.saveData();
			}
			else
			{
				forms.FrmArticulosGC.foundset.loadAllRecords()
				var result = forms.FrmArticulosGC.foundset.selectRecord(uuid)
				var fsCount = databaseManager.getFoundSetCount(forms.FrmArticulosGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.FrmArticulosGC.foundset.getSize()) return;
					forms.FrmArticulosGC.foundset.setSelectedIndex(forms.FrmArticulosGC.foundset.getSize());
					result = forms.FrmArticulosGC.foundset.selectRecord(uuid);
				}
				
				if(desc != '') forms.FrmArticulosGC.descripcion = desc;
				else forms.FrmArticulosGC.descripcion = null;
				if(refcli != '') forms.FrmArticulosGC.refcliente = refcli;
				else forms.FrmArticulosGC.refcliente = null;
				if(descing != '') forms.FrmArticulosGC.descingles = descing;
				else forms.FrmArticulosGC.descingles = null;
				if(unid != '') forms.FrmArticulosGC.unidmedida = unid;
				else forms.FrmArticulosGC.unidmedida = null;
				if(pesob != '') forms.FrmArticulosGC.pesobruto = pesob;
				else forms.FrmArticulosGC.pesobruto = null;
				if(peson != '') forms.FrmArticulosGC.pesoneto = peson;
				else forms.FrmArticulosGC.pesoneto = null;
				if(preccosto != '') forms.FrmArticulosGC.preciocosto = preccosto;
				else forms.FrmArticulosGC.preciocosto = null;
				if(loteecon != '') forms.FrmArticulosGC.loteecon = loteecon;
				else forms.FrmArticulosGC.loteecon = null;
				if(stockmin != '') forms.FrmArticulosGC.stockmin = stockmin;
				else forms.FrmArticulosGC.stockmin = null;
				if(obser != '') forms.FrmArticulosGC.observacion = obser;
				else forms.FrmArticulosGC.observacion = null;
				if(prec != '') forms.FrmArticulosGC.preciopieza = prec;
				else forms.FrmArticulosGC.preciopieza = null;
				if(mult != '') forms.FrmArticulosGC.multiplo = mult;
				else forms.FrmArticulosGC.multiplo = null;
				
				if (j % 10 == 0 || j == (i-1)) databaseManager.saveData();			
				
			}
    		
    }
}

/**
*
* @SuppressWarnings(unused)
*
*
*
*
 * @properties={typeid:24,uuid:"9F3F471D-60F8-4149-A00F-950A5C81F3B5"}
 */
function ImportarFamilias()
{
	var ruta = globals.RutaFicheroImportar;
    var texto = new Array();
    
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
    
    if(globals.GCFilaNombresCampos == 1)
    {
    	var j = 1;
    }
    else
    {
    	j = 0;
    }
    
    for (j;j<i;j++)
    {
    		var campos = texto[j].split(';')
			
    		var codigo = utils.stringTrim(campos[0]);
    		var desc = utils.stringTrim(campos[1]);
    		
    		var query = "select id from tbmaestrofamila where idfamilia = '" + codigo +"'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var uuid = dataset.getValue(1, 1)
			if(uuid == null)
			{
				forms.FrmFamiliasGC.foundset.newRecord(true)
				forms.FrmFamiliasGC.id = application.getUUID();
				if(codigo != '') forms.FrmFamiliasGC.idfamilia = codigo;
				if(desc != '') forms.FrmFamiliasGC.descfamilia = desc;
				
				if (j % 10 == 0 || j == (i-1)) databaseManager.saveData();
			}
			else
			{
				forms.FrmFamiliasGC.foundset.loadAllRecords()
				var result = forms.FrmFamiliasGC.foundset.selectRecord(uuid)
				var fsCount = databaseManager.getFoundSetCount(forms.FrmFamiliasGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.FrmFamiliasGC.foundset.getSize()) return;
					forms.FrmFamiliasGC.foundset.setSelectedIndex(forms.FrmFamiliasGC.foundset.getSize());
					result = forms.FrmFamiliasGC.foundset.selectRecord(uuid);
				}
				
				if(desc != '') forms.FrmFamiliasGC.descfamilia = desc;
				else forms.FrmFamiliasGC.descfamilia = null;
				
				if (j % 10 == 0 || j == (i-1)) databaseManager.saveData();
			}
    }
}

/**
 * @params {String} theDialogName
 * 
 *
 *
 *
 * @properties={typeid:24,uuid:"46463FB9-D981-4312-A34E-C9B704742E2E"}
 */
function startBusy(theDialogName)
{
	var params = {
         processFunction: process,
         message: 'Importando Datos... Por favor espere!', 
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
 * @params {String} theDialogName
 * 
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"CC1121E2-0D94-4981-8C99-90310617C082"}
 */
function startBusyxlsx(theDialogName)
{
	var params = {
         processFunction: processxlsx,
         message: 'Importando Datos... Por favor espere!', 
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
*
 * @properties={typeid:24,uuid:"F8CB4996-8C6A-42A0-A319-FA85BDE2850B"}
 */
function process()
{
	
	application.output("process started");
	try {
		if(globals.RutaFicheroImportar.indexOf('.csv') >= 0)
		{
			switch(forms.dlg_ImportacionDatosGC.TipoConsulta)
			{
				case 0:
					ImportarClientes()
					break;
				case 1:
					ImportarProveedores()
					break;
				case 2:
					ImportarArticulos()
					break;
				case 3:
					ImportarFamilias()
					break;
				default: break;
			}
		}
		else 
		{
			var options = {
				  /*"closeButton": false,
				  "newestOnTop": false,
				  "positionClass": "toast-top-full-width",
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut",
				  "progressBar": false*/
				  enableHtml : true
				}
			var message = 'El fichero a importar debe ser un archivo .csv<br><br>Con el formato y orden de los campos que se indica en el ejemplo de cada tabla.</html>';
			plugins.webnotificationsToastr.error(message,'Importar datos',options)
			//globals.GCshowWarningDialog('El fichero a importar debe ser un archivo .csv\n\nCon el formato y orden de los campos que se indica en el ejemplo de cada tabla.',null,'Aceptar',null,null,null)
		}			
	} catch (e) {
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(e.toString(),'¡Error!')
		else globals.GCshowErrorDialog(e.toString(),null,null,null,null,null)
		application.output("catched exception");
		application.output(e);
	} finally {
		//if (plugins.busy) plugins.busy.unblock();		
		if(plugins.svyBlockUI) plugins.svyBlockUI.stop()
		
		application.getWindow('Importacion Datos').hide();
		globals.GCenableBgElements();
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) 
		{
			if(forms.dlg_ImportacionDatosGC.FormatoFichero == 0)
			{
				if(globals.RutaFicheroImportar.indexOf('.csv') >= 0) plugins.webnotificationsToastr.success('Importación realizada con éxito','¡Exito!')
			}
			else
			{
				if(globals.RutaFicheroImportar.indexOf('.xlsx') >= 0) plugins.webnotificationsToastr.success('Importación realizada con éxito','¡Exito!')
			}
		}
		else 
		{
			if(forms.dlg_ImportacionDatosGC.FormatoFichero == 0)
			{
				if(globals.RutaFicheroImportar.indexOf('.csv') >= 0) globals.GCshowInfoDialog('Importación realizada con éxito',null,'Aceptar',null,null,null)
		
			}
			else
			{
				if(globals.RutaFicheroImportar.indexOf('.xlsx') >= 0) globals.GCshowInfoDialog('Importación realizada con éxito',null,'Aceptar',null,null,null)
			}
		}
	}
	application.output("process end");

}

/**
*
*
 *
 * @properties={typeid:24,uuid:"B3E7FB85-BFA9-4D34-B0D2-DE4962F1D7FA"}
 */
function processxlsx()
{
	
	application.output("process started");
	try {
		if(globals.RutaFicheroImportar.indexOf('.xlsx') >= 0)
		{
			switch(forms.dlg_ImportacionDatosGC.TipoConsulta)
			{
				case 0:
					ImportarClientesXLSX()
					break;
				case 1:
					ImportarProveedoresXLSX()
					break;
				case 2:
					ImportarArticulosXLSX()
					break;
				case 3:
					ImportarFamiliasXLSX()
					break;
				default: break;
			}
		}
		else 
		{
			var options = {
				  /*"closeButton": false,
				  "newestOnTop": false,
				  "positionClass": "toast-top-full-width",
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut",
				  "progressBar": false*/
				  enableHtml : true
				}
			var message = 'El fichero a importar debe ser un archivo .csv<br><br>Con el formato y orden de los campos que se indica en el ejemplo de cada tabla.</html>';
			plugins.webnotificationsToastr.error(message,'Importar datos',options)
			//globals.GCshowWarningDialog('El fichero a importar debe ser un archivo .csv\n\nCon el formato y orden de los campos que se indica en el ejemplo de cada tabla.',null,'Aceptar',null,null,null)
		}			
	} catch (e) {
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(e.toString(),'¡Error!')
		else globals.GCshowErrorDialog(e.toString(),null,null,null,null,null)
		application.output("catched exception");
		application.output(e);
	} finally {
		//if (plugins.busy) plugins.busy.unblock();		
		if(plugins.svyBlockUI) plugins.svyBlockUI.stop()
		
		application.getWindow('Importacion Datos').hide();
		globals.GCenableBgElements();
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) 
		{
			if(forms.dlg_ImportacionDatosGC.FormatoFichero == 0)
			{
				if(globals.GCRutaFichero43.indexOf('.csv') >= 0) plugins.webnotificationsToastr.success('Importación realizada con éxito','¡Exito!')
			}
			else
			{
				if(globals.GCRutaFichero43.indexOf('.xlsx') >= 0) plugins.webnotificationsToastr.success('Importación realizada con éxito','¡Exito!')
			}
		}
		else 
		{
			if(forms.dlg_ImportacionDatosGC.FormatoFichero == 0)
			{
				if(globals.GCRutaFichero43.indexOf('.csv') >= 0) globals.GCshowInfoDialog('Importación realizada con éxito',null,'Aceptar',null,null,null)
		
			}
			else
			{
				if(globals.GCRutaFichero43.indexOf('.xlsx') >= 0) globals.GCshowInfoDialog('Importación realizada con éxito',null,'Aceptar',null,null,null)
			}
		}
	}
	application.output("process end");

}

/**
*
*
 *
 * @properties={typeid:24,uuid:"37A6AA27-471B-43AA-A42B-EC05A4BBF459"}
 */
function process2()
{
	
	application.output("process started");
	try {
		if(globals.RutaFicheroImportar.indexOf('.csv') >= 0)
		{
			switch(forms.dlg_ImportacionDatosGC.TipoConsulta)
			{
				case 0:
					ImportarClientes()
					break;
				case 1:
					ImportarProveedores()
					break;
				case 2:
					ImportarArticulos()
					break;
				case 3:
					ImportarFamilias()
					break;
				default: break;		
			}
		}
		else 
		{
			globals.GCshowWarningDialog('El fichero a importar debe ser un archivo .csv\n\nCon el formato y orden de los campos que se indica en el ejemplo de cada tabla.',null,'Aceptar',null,null,null)
		}		
	} catch (e) {
		globals.GCshowErrorDialog(e.toString(),null,null,null,null,null)
		application.output("catched exception");
		application.output(e);
	} finally {
		//plugins.busy.unblock();		
		
		application.getWindow('Importacion Datos').hide();
		globals.GCenableBgElements();
		if(globals.RutaFicheroImportar.indexOf('.csv') >= 0)globals.GCshowInfoDialog('Importación realizada con éxito',null,'Aceptar',null,null,null)
	}
	application.output("process end");

}

/**
*
*
 *
 *
 * @properties={typeid:24,uuid:"3CDA38A7-0F8A-46FF-AFF7-C65A22C07C50"}
 */
function processxlsx2()
{
	
	application.output("process started");
	try {
		if(globals.RutaFicheroImportar.indexOf('.xlsx') >= 0)
		{
			switch(forms.dlg_ImportacionDatosGC.TipoConsulta)
			{
				case 0:
					ImportarClientesXLSX()
					break;
				case 1:
					ImportarProveedoresXLSX()
					break;
				case 2:
					ImportarArticulosXLSX()
					break;
				case 3:
					ImportarFamiliasXLSX()
					break;
				default: break;		
			}
		}
		else 
		{
			globals.GCshowWarningDialog('El fichero a importar debe ser un archivo .xlsx\n\nCon el formato y orden de los campos que se indica en el ejemplo de cada tabla.',null,'Aceptar',null,null,null)
		}		
	} catch (e) {
		globals.GCshowErrorDialog(e.toString(),null,null,null,null,null)
		application.output("catched exception");
		application.output(e);
	} finally {
		//plugins.busy.unblock();		
		
		application.getWindow('Importacion Datos').hide();
		globals.GCenableBgElements();
		//if(globals.RutaFicheroImportar.indexOf('.xlsx') >= 0)globals.GCshowInfoDialog('Importación realizada con éxito',null,'Aceptar',null,null,null)
	}
	application.output("process end");

}

/**
 * TODO generated, please specify type and doc for the params
 * @param codpostal
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"E0BB3910-AE62-48FD-B20A-C5F735061901"}
 */
function onDataChangeCP(codpostal) {
	var provincia = null
	if(codpostal)
	{
		if(codpostal.length == 5)
		{
			var prov = utils.stringLeft(codpostal,2)	
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
*
* @SuppressWarnings(wrongparameters)
* @SuppressWarnings(deprecated)
*
 * @properties={typeid:24,uuid:"5B1CFF96-5E47-417C-B74D-25BD8DB64412"}
 */
function ImportarClientesXLSX()
{
	
	application.output("process started");
	try {
		var er = 0;
		if(globals.FicheroImportar.indexOf('.xlsx') >= 0) 
		{
			//read workbook
			var workbook = scopes.svyExcelUtils.getWorkbook(globals.RutaFicheroImportar);
			//get sheet containing the data
			//var sheet = workbook.getSheet('Hoja1');
			var sheet = workbook.getSheetAt(1);
			//get the data from rows 1 to 5, column 1 and 2
			var data = sheet.getSheetData(true, 1, 99999, 1, 17);			
			//output result
			//application.output(data.getAsText('\t', '\n', '', true));
			var n = data.getMaxRowIndex();
		    if(globals.GCFilaNombresCampos == 1) var j = 1;
	        else j = 0;
		    for (j;j<=n;j++)
		    {
		    	var codigo = utils.stringTrim(data.getValue(j,1));
	    		var desc = utils.stringTrim(data.getValue(j,2));
	    		var direc = utils.stringTrim(data.getValue(j,3));
	    		var pobl = utils.stringTrim(data.getValue(j,4));
	    		var prov = utils.stringTrim(data.getValue(j,5));
	    		var cp = utils.stringTrim(data.getValue(j,6));
	    		if(cp && !prov) prov = onDataChangeCP(cp)
	    		var pcontacto = utils.stringTrim(data.getValue(j,7));
	    		var telf1 = utils.stringTrim(data.getValue(j,10));
	    		var telf2 = utils.stringTrim(data.getValue(j,11));
	    		var fax = utils.stringTrim(data.getValue(j,12));
	    		var cif = utils.stringTrim(data.getValue(j,13));
	    		var pais = utils.stringTrim(data.getValue(j,16));
	    		if(!pais && cp && prov) pais = 'ES';
	    		else pais = null
	    		var piva = utils.stringTrim(data.getValue(j,15));
	    		if(!piva && pais == 'ES') piva = 21;
	    		else piva = 0;
	    		//var pirpf = utils.stringTrim(data.getValue(j,13));
	    		var email = utils.stringTrim(data.getValue(j,8));
	    		var numprov = utils.stringTrim(data.getValue(j,9));
	    		var cc = utils.stringTrim(data.getValue(j,14));
	    		var obser = utils.stringTrim(data.getValue(j,17))
		    	
		    	
	    		var query = "select id from tbmaestroclientes where idcliente = " + codigo;
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var uuid = dataset.getValue(1, 1)
				if(uuid == null)
				{
					forms.FrmClientesGC.foundset.newRecord(true)
					forms.FrmClientesGC.id = application.getUUID();
					if(codigo != '') forms.FrmClientesGC.idcliente = codigo;
					if(desc != '') forms.FrmClientesGC.desccliente = desc;
					if(direc != '') forms.FrmClientesGC.direccion = direc;
					if(pobl != '') forms.FrmClientesGC.poblacion = pobl;
					if(prov != '') forms.FrmClientesGC.provincia = prov;
					if(cp != '') forms.FrmClientesGC.codpostal = cp;
					if(pcontacto != '') forms.FrmClientesGC.perscontacto = pcontacto;
					if(email != '') forms.FrmClientesGC.emailcontacto = email;
					if(numprov != '') forms.FrmClientesGC.numproveedor = numprov;
					if(telf1 != '') forms.FrmClientesGC.telf1 = telf1;
					if(telf2 != '') forms.FrmClientesGC.telf2 = telf2;
					if(fax != '') forms.FrmClientesGC.fax = fax;
					if(cif != '') forms.FrmClientesGC.cif = cif;
					if(cc != '') forms.FrmClientesGC.cuentacontable = cc;
					if(piva != '') forms.FrmClientesGC.tipoiva = piva;
					if(pais != '') forms.FrmClientesGC.pais = pais;
					if(obser != '') forms.FrmClientesGC.observaciones = obser;
					
					/*if (j % 10 == 0 || j == (i-1))*/ databaseManager.saveData();
				}
				else
				{
					forms.FrmClientesGC.foundset.loadAllRecords()
					var result = forms.FrmClientesGC.foundset.selectRecord(uuid)
					var fsCount = databaseManager.getFoundSetCount(forms.FrmClientesGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.FrmClientesGC.foundset.getSize()) return;
						forms.FrmClientesGC.foundset.setSelectedIndex(forms.FrmClientesGC.foundset.getSize());
						result = forms.FrmClientesGC.foundset.selectRecord(uuid);
					}
					
					if(desc != '') forms.FrmClientesGC.desccliente = desc;
					else forms.FrmClientesGC.desccliente = null;
					if(direc != '') forms.FrmClientesGC.direccion = direc;
					else forms.FrmClientesGC.direccion = null;
					if(pobl != '') forms.FrmClientesGC.poblacion = pobl;
					else forms.FrmClientesGC.poblacion = null;
					if(cp && !prov) prov = onDataChangeCP(cp)
		    		if(prov != '') forms.FrmClientesGC.provincia = prov;
					else forms.FrmClientesGC.provincia = null;
					if(cp != '') forms.FrmClientesGC.codpostal = cp;
					else forms.FrmClientesGC.codpostal = null;
					if(pcontacto != '') forms.FrmClientesGC.perscontacto = pcontacto;
					else forms.FrmClientesGC.perscontacto = null;
					if(email != '') forms.FrmClientesGC.emailcontacto = email;
					else forms.FrmClientesGC.emailcontacto = null;
					if(numprov != '') forms.FrmClientesGC.numproveedor = numprov;
					else forms.FrmClientesGC.numproveedor = null;
					if(telf1 != '') forms.FrmClientesGC.telf1 = telf1;
					else forms.FrmClientesGC.telf1 = null;
					if(telf2 != '') forms.FrmClientesGC.telf2 = telf2;
					else forms.FrmClientesGC.telf2 = null;
					if(fax != '') forms.FrmClientesGC.fax = fax;
					else forms.FrmClientesGC.fax = null;
					if(cif != '') forms.FrmClientesGC.cif = cif;
					else forms.FrmClientesGC.cif = null;
					if(cc != '') forms.FrmClientesGC.cuentacontable = cc;
					else forms.FrmClientesGC.cuentacontable = null;
					if(piva != '') forms.FrmClientesGC.tipoiva = piva;
					else forms.FrmClientesGC.tipoiva = null;
					if(pais != '') forms.FrmClientesGC.pais = pais;
					else forms.FrmClientesGC.pais = null;
					if(obser != '') forms.FrmClientesGC.observaciones = obser;
					else forms.FrmClientesGC.observaciones = null;
					
					/*if (j % 10 == 0 || j == (i-1))*/ databaseManager.saveData();
					
					
				}
		    }
					    	        
	    }		
	}catch (e) {
		er = 1;
		globals.GCshowErrorDialog(e.toString(),null,null,null,null,null)
		application.output("catched exception");
		application.output(e);
	} finally {
		/*if (application.getApplicationType() != APPLICATION_TYPES.SMART_CLIENT) {
			plugins.WebClientUtils.executeClientSideJS('location.reload();');
		}*/
		//databaseManager.refreshRecordFromDatabase(forms.FrmCuentasContables.foundset,-1)
		application.getWindow('Importacion Datos').hide();
		globals.GCenableBgElements();
		if(er==0) globals.GCshowInfoDialog('Importación de datos realizada con éxito',null,'Aceptar',null,null,null)
		else globals.GCshowErrorDialog('La importación de datos NO se ha realizado',null,'Aceptar',null,null,null)
		
	}
	application.output("process end");
	
	
}

/**
*
* @SuppressWarnings(wrongparameters)
* @SuppressWarnings(deprecated)
*
 *
 * @properties={typeid:24,uuid:"ED48624C-2454-47D1-B2E0-0063FAD14B09"}
 */
function ImportarProveedoresXLSX()
{
	
	application.output("process started");
	try {
		var er = 0;
		if(globals.FicheroImportar.indexOf('.xlsx') >= 0) 
		{
			//read workbook
			var workbook = scopes.svyExcelUtils.getWorkbook(globals.RutaFicheroImportar);
			//get sheet containing the data
			//var sheet = workbook.getSheet('Hoja1');
			var sheet = workbook.getSheetAt(1);
			//get the data from rows 1 to 5, column 1 and 2
			var data = sheet.getSheetData(true, 1, 99999, 1, 16);			
			//output result
			//application.output(data.getAsText('\t', '\n', '', true));
			var n = data.getMaxRowIndex();
		    if(globals.GCFilaNombresCampos == 1) var j = 1;
	        else j = 0;
		    for (j;j<=n;j++)
		    {
		    	var codigo = utils.stringTrim(data.getValue(j,1));
		    	var cc = utils.stringTrim(data.getValue(j,2));
	    		var desc = utils.stringTrim(data.getValue(j,3));
	    		var direc = utils.stringTrim(data.getValue(j,15));
	    		var pobl = utils.stringTrim(data.getValue(j,4));
	    		var prov = utils.stringTrim(data.getValue(j,5));
	    		var cp = utils.stringTrim(data.getValue(j,6));
	    		if(cp && !prov) prov = onDataChangeCP(cp)
	    		var pcontacto = utils.stringTrim(data.getValue(j,7));
	    		var telf1 = utils.stringTrim(data.getValue(j,8));
	    		var telf2 = utils.stringTrim(data.getValue(j,9));
	    		var fax = utils.stringTrim(data.getValue(j,10));
	    		var cif = utils.stringTrim(data.getValue(j,11));
	    		var pais = utils.stringTrim(data.getValue(j,16));
	    		if(!pais && cp && prov) pais = 'ES';
	    		else pais = null
	    		var piva = utils.stringTrim(data.getValue(j,12));
	    		if(!piva && pais == 'ES') piva = 21;
	    		else piva = 0;
	    		var pirpf = utils.stringTrim(data.getValue(j,13));
	    		var email = utils.stringTrim(data.getValue(j,14));
	    		
		    	
	    		var query = "select id from tbmaestroproveedores where codpro = " + codigo;
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var uuid = dataset.getValue(1, 1)
				if(uuid == null)
				{
					forms.FrmProveedoresGC.foundset.newRecord(true)
					forms.FrmProveedoresGC.id = application.getUUID();
					if(codigo != '') forms.FrmProveedoresGC.codpro = codigo;
					if(desc != '') forms.FrmProveedoresGC.descproveedor = desc;
					if(direc != '') forms.FrmProveedoresGC.direccion = direc;
					if(pobl != '') forms.FrmProveedoresGC.poblacion = pobl;
					if(prov != '') forms.FrmProveedoresGC.provincia = prov;
					if(cp != '') forms.FrmProveedoresGC.codpostal = cp;
					if(pcontacto != '') forms.FrmProveedoresGC.perscontacto = pcontacto;
					if(email != '') forms.FrmProveedoresGC.email = email;
					if(telf1 != '') forms.FrmProveedoresGC.telf1 = telf1;
					if(telf2 != '') forms.FrmProveedoresGC.telf2 = telf2;
					if(fax != '') forms.FrmProveedoresGC.fax = fax;
					if(cif != '') forms.FrmProveedoresGC.cif = cif;
					if(cc != '') forms.FrmProveedoresGC.cuentacontable = cc;
					if(piva != '') forms.FrmProveedoresGC.porciva = piva;
					if(pais != '') forms.FrmProveedoresGC.pais = pais;
					if(pirpf != '') forms.FrmProveedoresGC.porcirpf = pirpf;
					
					/*if (j % 10 == 0 || j == (i-1))*/ databaseManager.saveData();
				}
				else
				{
					forms.FrmProveedoresGC.foundset.loadAllRecords()
					var result = forms.FrmProveedoresGC.foundset.selectRecord(uuid)
					var fsCount = databaseManager.getFoundSetCount(forms.FrmProveedoresGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.FrmProveedoresGC.foundset.getSize()) return;
						forms.FrmProveedoresGC.foundset.setSelectedIndex(forms.FrmProveedoresGC.foundset.getSize());
						result = forms.FrmProveedoresGC.foundset.selectRecord(uuid);
					}
					
					if(desc != '') forms.FrmProveedoresGC.descproveedor = desc;
					else forms.FrmProveedoresGC.descproveedor = null;
					if(direc != '') forms.FrmProveedoresGC.direccion = direc;
					else forms.FrmProveedoresGC.direccion = null;
					if(pobl != '') forms.FrmProveedoresGC.poblacion = pobl;
					else forms.FrmProveedoresGC.poblacion = null;
					if(prov != '') forms.FrmProveedoresGC.provincia = prov;
					else forms.FrmProveedoresGC.provincia = null;
					if(cp != '') forms.FrmProveedoresGC.codpostal = cp;
					else forms.FrmProveedoresGC.codpostal = null;
					if(pcontacto != '') forms.FrmProveedoresGC.perscontacto = pcontacto;
					else forms.FrmProveedoresGC.perscontacto = null;
					if(email != '') forms.FrmProveedoresGC.email = email;
					else forms.FrmProveedoresGC.email = null;
					if(telf1 != '') forms.FrmProveedoresGC.telf1 = telf1;
					else forms.FrmProveedoresGC.telf1 = null;
					if(telf2 != '') forms.FrmProveedoresGC.telf2 = telf2;
					else forms.FrmProveedoresGC.telf2 = null;
					if(fax != '') forms.FrmProveedoresGC.fax = fax;
					else forms.FrmProveedoresGC.fax = null;
					if(cif != '') forms.FrmProveedoresGC.cif = cif;
					else forms.FrmProveedoresGC.cif = null;
					if(cc != '') forms.FrmProveedoresGC.cuentacontable = cc;
					else forms.FrmProveedoresGC.cuentacontable = null;
					if(piva != '') forms.FrmProveedoresGC.porciva = piva;
					else forms.FrmProveedoresGC.porciva = null;
					if(pais != '') forms.FrmProveedoresGC.pais = pais;
					else forms.FrmProveedoresGC.pais = null;
					if(pirpf != '') forms.FrmProveedoresGC.porcirpf = pirpf;
					else forms.FrmProveedoresGC.porcirpf = null;
					
					/*if (j % 10 == 0 || j == (i-1))*/ databaseManager.saveData();
					
					
				}
		    }
					    	        
	    }		
	}catch (e) {
		er = 1;
		globals.GCshowErrorDialog(e.toString(),null,null,null,null,null)
		application.output("catched exception");
		application.output(e);
	} finally {
		/*if (application.getApplicationType() != APPLICATION_TYPES.SMART_CLIENT) {
			plugins.WebClientUtils.executeClientSideJS('location.reload();');
		}*/
		//databaseManager.refreshRecordFromDatabase(forms.FrmCuentasContables.foundset,-1)
		application.getWindow('Importacion Datos').hide();
		globals.GCenableBgElements();
		if(er==0) globals.GCshowInfoDialog('Importación de datos realizada con éxito',null,'Aceptar',null,null,null)
		else globals.GCshowErrorDialog('La importación de datos NO se ha realizado',null,'Aceptar',null,null,null)
		
	}
	application.output("process end");
	
	
}

/**
*
* @SuppressWarnings(wrongparameters)
* @SuppressWarnings(deprecated)
*
 *
 *
 * @properties={typeid:24,uuid:"43C6B385-C3A2-4C6C-9CDA-0485867DD9F8"}
 */
function ImportarArticulosXLSX()
{
	
	application.output("process started");
	try {
		var er = 0;
		if(globals.FicheroImportar.indexOf('.xlsx') >= 0) 
		{
			//read workbook
			var workbook = scopes.svyExcelUtils.getWorkbook(globals.RutaFicheroImportar);
			//get sheet containing the data
			//var sheet = workbook.getSheet('Hoja1');
			var sheet = workbook.getSheetAt(1);
			//get the data from rows 1 to 5, column 1 and 2
			var data = sheet.getSheetData(true, 1, 99999, 1, 13);			
			//output result
			//application.output(data.getAsText('\t', '\n', '', true));
			var n = data.getMaxRowIndex();
		    if(globals.GCFilaNombresCampos == 1) var j = 1;
	        else j = 0;
		    for (j;j<=n;j++)
		    {
		    	var codigo = utils.stringTrim(data.getValue(j,1));
		    	var desc = utils.stringTrim(data.getValue(j,2));
		    	var refcli = utils.stringTrim(data.getValue(j,3));
		    	var descingles = utils.stringTrim(data.getValue(j,4));
		    	var unidmedida = utils.stringTrim(data.getValue(j,5));
		    	var pesob = utils.stringTrim(data.getValue(j,6));
		    	var peson = utils.stringTrim(data.getValue(j,7));
		    	var preciocosto = utils.stringTrim(data.getValue(j,8));
		    	var preciopieza = utils.stringTrim(data.getValue(j,12));
		    	var loteecon = utils.stringTrim(data.getValue(j,9));
		    	var stockmin = utils.stringTrim(data.getValue(j,10));
		    	var obser = utils.stringTrim(data.getValue(j,11));
		    	var multiplo = utils.stringTrim(data.getValue(j,13));
	    		
	    		
		    	
	    		var query = "select id from tbmaestroarticulos where codigo = '" + codigo+"'";
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var uuid = dataset.getValue(1, 1)
				if(uuid == null)
				{
					forms.FrmArticulosGC.foundset.newRecord(true)
					forms.FrmArticulosGC.id = application.getUUID();
					if(codigo != '') forms.FrmArticulosGC.codigo = codigo;
					if(desc != '') forms.FrmArticulosGC.descripcion = desc;
					if(refcli != '') forms.FrmArticulosGC.refcliente = refcli;
					if(descingles != '') forms.FrmArticulosGC.descingles = descingles;
					if(unidmedida != '') forms.FrmArticulosGC.unidmedida = unidmedida;
					if(pesob != '') forms.FrmArticulosGC.pesobruto = pesob;
					if(peson != '') forms.FrmArticulosGC.pesoneto = peson;
					if(preciocosto != '') forms.FrmArticulosGC.preciocosto = preciocosto;
					if(preciopieza != '') forms.FrmArticulosGC.preciopieza = preciopieza;
					if(loteecon != '') forms.FrmArticulosGC.loteecon = loteecon;
					if(stockmin != '') forms.FrmArticulosGC.stockmin = stockmin;
					if(obser != '') forms.FrmArticulosGC.observacion = obser;
					if(multiplo != '') forms.FrmArticulosGC.multiplo = multiplo;
					
					/*if (j % 10 == 0 || j == (i-1))*/ databaseManager.saveData();
				}
				else
				{
					forms.FrmArticulosGC.foundset.loadAllRecords()
					var result = forms.FrmArticulosGC.foundset.selectRecord(uuid)
					var fsCount = databaseManager.getFoundSetCount(forms.FrmArticulosGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.FrmArticulosGC.foundset.getSize()) return;
						forms.FrmArticulosGC.foundset.setSelectedIndex(forms.FrmArticulosGC.foundset.getSize());
						result = forms.FrmArticulosGC.foundset.selectRecord(uuid);
					}
					
					if(desc != '') forms.FrmArticulosGC.descripcion = desc;
					else forms.FrmArticulosGC.descripcion = null;
					if(refcli != '') forms.FrmArticulosGC.refcliente = refcli;
					else forms.FrmArticulosGC.refcliente = null;
					if(descingles != '') forms.FrmArticulosGC.descingles = descingles;
					else forms.FrmArticulosGC.descingles = null;
					if(unidmedida != '') forms.FrmArticulosGC.unidmedida = unidmedida;
					else forms.FrmArticulosGC.unidmedida = null;
					if(pesob != '') forms.FrmArticulosGC.pesobruto = pesob;
					else forms.FrmArticulosGC.pesobruto = null;
					if(peson != '') forms.FrmArticulosGC.pesoneto = peson;
					else forms.FrmArticulosGC.pesoneto = null;
					if(preciocosto != '') forms.FrmArticulosGC.preciocosto = preciocosto;
					else forms.FrmArticulosGC.preciocosto = null;
					if(preciopieza != '') forms.FrmArticulosGC.preciopieza = preciopieza;
					else forms.FrmArticulosGC.preciopieza = null;
					if(loteecon != '') forms.FrmArticulosGC.loteecon = loteecon;
					else forms.FrmArticulosGC.loteecon = null;
					if(stockmin != '') forms.FrmArticulosGC.stockmin = stockmin;
					else forms.FrmArticulosGC.stockmin = null;
					if(obser != '') forms.FrmArticulosGC.observacion = obser;
					else forms.FrmArticulosGC.observacion = null;
					if(multiplo != '') forms.FrmArticulosGC.multiplo = multiplo;
					else forms.FrmArticulosGC.multiplo = null;
					
					/*if (j % 10 == 0 || j == (i-1))*/ databaseManager.saveData();
					
					
				}
		    }
					    	        
	    }		
	}catch (e) {
		er = 1;
		globals.GCshowErrorDialog(e.toString(),null,null,null,null,null)
		application.output("catched exception");
		application.output(e);
	} finally {
		/*if (application.getApplicationType() != APPLICATION_TYPES.SMART_CLIENT) {
			plugins.WebClientUtils.executeClientSideJS('location.reload();');
		}*/
		application.getWindow('Importacion Datos').hide();
		globals.GCenableBgElements();
		if(er==0) globals.GCshowInfoDialog('Importación de datos realizada con éxito',null,'Aceptar',null,null,null)
		else globals.GCshowErrorDialog('La importación de datos NO se ha realizado',null,'Aceptar',null,null,null)
		
	}
	application.output("process end");
	
	
}

/**
*
* @SuppressWarnings(wrongparameters)
* @SuppressWarnings(deprecated)
*
 *
 *
 * @properties={typeid:24,uuid:"07A15337-C7FC-4DBA-B960-2063B4802D9C"}
 */
function ImportarFamiliasXLSX()
{
	
	application.output("process started");
	try {
		var er = 0;
		if(globals.FicheroImportar.indexOf('.xlsx') >= 0) 
		{
			//read workbook
			var workbook = scopes.svyExcelUtils.getWorkbook(globals.RutaFicheroImportar);
			//get sheet containing the data
			//var sheet = workbook.getSheet('Hoja1');
			var sheet = workbook.getSheetAt(1);
			//get the data from rows 1 to 5, column 1 and 2
			var data = sheet.getSheetData(true, 1, 9999, 1, 2);			
			//output result
			//application.output(data.getAsText('\t', '\n', '', true));
			var n = data.getMaxRowIndex();
		    if(globals.GCFilaNombresCampos == 1) var j = 1;
	        else j = 0;
		    for (j;j<=n;j++)
		    {
		    	var codigo = utils.stringTrim(data.getValue(j,1));
		    	var desc = utils.stringTrim(data.getValue(j,2));
	    		
		    	
	    		var query = "select id from tbmaestrofamila where idfamilia = '" + codigo+"'";
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
				var uuid = dataset.getValue(1, 1)
				if(uuid == null)
				{
					forms.FrmFamiliasGC.foundset.newRecord(true)
					forms.FrmFamiliasGC.id = application.getUUID();
					if(codigo != '') forms.FrmFamiliasGC.idfamilia = codigo;
					if(desc != '') forms.FrmFamiliasGC.descfamilia = desc;
					
					
					/*if (j % 10 == 0 || j == (i-1))*/ databaseManager.saveData();
				}
				else
				{
					forms.FrmFamiliasGC.foundset.loadAllRecords()
					var result = forms.FrmFamiliasGC.foundset.selectRecord(uuid)
					var fsCount = databaseManager.getFoundSetCount(forms.FrmFamiliasGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.FrmFamiliasGC.foundset.getSize()) return;
						forms.FrmFamiliasGC.foundset.setSelectedIndex(forms.FrmFamiliasGC.foundset.getSize());
						result = forms.FrmFamiliasGC.foundset.selectRecord(uuid);
					}
					
					if(desc != '') forms.FrmFamiliasGC.descfamilia = desc;
					else forms.FrmFamiliasGC.descfamilia = null;
					
					/*if (j % 10 == 0 || j == (i-1))*/ databaseManager.saveData();
					
					
				}
		    }
					    	        
	    }		
	}catch (e) {
		er = 1;
		globals.GCshowErrorDialog(e.toString(),null,null,null,null,null)
		application.output("catched exception");
		application.output(e);
	} finally {
		/*if (application.getApplicationType() != APPLICATION_TYPES.SMART_CLIENT) {
			plugins.WebClientUtils.executeClientSideJS('location.reload();');
		}*/
		application.getWindow('Importacion Datos').hide();
		globals.GCenableBgElements();
		if(er==0) globals.GCshowInfoDialog('Importación de datos realizada con éxito',null,'Aceptar',null,null,null)
		else globals.GCshowErrorDialog('La importación de datos NO se ha realizado',null,'Aceptar',null,null,null)
		
	}
	application.output("process end");
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1C841165-3355-41B9-A8C6-59A95454E75A"}
 */
function onShow(firstShow, event) {
	/*if (application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) {
	    plugins.busy.prepare();
	}*/
}
