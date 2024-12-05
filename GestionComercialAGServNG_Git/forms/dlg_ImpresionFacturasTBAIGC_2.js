/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9510B7EA-41E2-4761-91DF-5487047157D0",variableType:4}
 */
var entorno_ticketbai = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7C3AC6BE-FA70-4907-92E4-DFE47978C42C",variableType:4}
 */
var anulatbai = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"7DBF22A3-9A36-474F-A0BF-454FFA7B0BD1",variableType:8}
 */
var modificartbai = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2937A8E4-E87E-4A71-B291-A62B14C26B71"}
 */
var macaddress = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"05411363-A894-419B-A846-0B031CB78270",variableType:8}
 */
var xmltbai = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"BD263DBF-2AA3-41FB-A1D7-8A4FC57C0DF4"}
 */
var Certif = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A36EA3EB-94CA-4156-A258-7DCAF33FA076"}
 */
var HastaDescCliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6F7D4542-9A38-4199-8474-0D56CDF121C6"}
 */
var DescDesdeCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"99CC4D4B-CF5D-45FA-84C2-AD3D5CBE974C",variableType:4}
 */
var HastaCliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"25EC72AE-05B7-474C-9833-6A4474AC05CF",variableType:4}
 */
var DesdeCliente = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"8E9C50E0-D8A3-4C83-9DFC-95B001391D65",variableType:8}
 */
var HastaEje = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"220547B3-0006-4580-8627-82CB4496E3C1"}
 */
var HastaSer = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"D3E3FD6F-E7EB-4651-9438-CA84329B34BF",variableType:8}
 */
var HastaNup = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"4E034845-91B7-4476-A32B-7ECAB33B6142",variableType:8}
 */
var DesdeEje = null;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"F8EF77A3-6681-4B33-9712-CCC87BB2F613"}
 */
var DesdeSer = null;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"905720AA-21C9-4101-A9CF-6BC969186577",variableType:8}
 */
var DesdeNup = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FECC7102-1D3C-4F36-8A05-22C295AA5729"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"13591C52-39A9-4184-A2E8-4D81B289093F"}
 */
var ctbai = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"373CDB1B-C3AE-497C-AAAD-7B311465D41B"}
 */
var mactbai = '';

/**
 * @type {Object}
 *
 *
 * @properties={typeid:35,uuid:"705C6FD4-2D84-48A8-9CBA-35B72E6DE0C3",variableType:-4}
 */
var frtbai;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5516DE9D-003A-4F48-95F0-D902261D29F2"}
 */
var qrtbai = '';

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"ED2E6476-AD3D-4558-B814-D8FEC90D675F"}
 */
var firmatbai = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D7B9F808-5C4A-4156-8AA6-136EB544AF51",variableType:93}
 */
var fechtbai;

/**
 * Callback method for when form is shown.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6C1A70ED-21FE-403C-B7C1-1E1E9EDA51B2"}
 * @SuppressWarnings(deprecated)
 */
function onShow(event) {
	// TODO Auto-generated method stub
	/*var A = new Date().getFullYear().toString()
	A = A.substr(2,4)
	DesdeEje = A
	HastaEje = A
	DesdeSer = ''
	HastaSer = ''
	DesdeNup = null
	HastaNup = null*/
	certif()
	/*if(application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
	{
		elements.lbl_clavecertif.visible = false;
		elements.filename.visible = false;
	}
	else
	{
		elements.lbl_clavecertif.visible = true;
		elements.filename.visible = true;
	}
	*/
	/*elements.desdeeje.enabled = false;
	elements.desdeeje.editable = false;
	elements.desdeser.enabled = false;
	elements.desdeser.editable = false;
	elements.desdenup.enabled = false;
	elements.desdenup.editable = false;
	elements.hastaeje.enabled = false;
	elements.hastaeje.editable = false;
	elements.hastaser.enabled = false;
	elements.hastaser.editable = false;
	elements.hastanup.enabled = false;
	elements.hastanup.editable = false;*/
	elements.xmltbai.enabled = false;
	elements.anulatbai.enabled = false;
	elements.modificartbai.enabled = false;
	elements.btn_borrardatosTBAI.enabled = false;
	elements.btn_importardatosTBAI.enabled = false;
	globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC_2';
	
	/*if(gcparametrosaplicacion_to_parametrosaplicacion.codpostal &&
	utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20') elements.btn_datos_enviados_TBAI.imageURL = 'media:///TicketBai_ES.png';
	else if(gcparametrosaplicacion_to_parametrosaplicacion.codpostal &&
	utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01')  elements.btn_datos_enviados_TBAI.imageURL = 'media:///araba_diputacion.gif';
	else if(gcparametrosaplicacion_to_parametrosaplicacion.codpostal &&
	utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48')  elements.btn_datos_enviados_TBAI.imageURL = 'media:///vizcaya_batuz_diputacion.gif';
	else elements.btn_datos_enviados_TBAI.imageURL = 'media:///TicketBai_ES.png';*/
	
	plugins.window.createShortcut('control F10', handle_shortCutGC);
	plugins.window.createShortcut('control alt B', handle_shortCutGC);
	plugins.window.createShortcut('control alt V', handle_shortCutGC);
	macaddress = plugins.UserManager.Client().macAddress;				
	/*var filename = "C:\\Servoy\\mac\\macAddress.txt";
	var jsFile = plugins.file.convertToJSFile(filename);
	if (jsFile.exists()) {
	var texto = new Array();
	 var _oFR = new Packages.java.io.FileInputStream(filename),
        _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
        _oBR = new Packages.java.io.BufferedReader(_oIR),
       
        z = 0;
	    while ((texto[z] = _oBR.readLine()) != null) 
	    {
           z++;            
        }
	    
        _oBR.close();
        macaddress = texto[0]
	}
	else{
		macaddress = 'Falta dirección MAC'
	}*/
	var hfolder = plugins.file.getHomeFolder()+"\\.servoy\\";
	var rutabat = hfolder+"Comando_numero_serie.bat";
	//var rutabat = "c:\\Servoy\\Comando_numero_serie.bat";
	var f = plugins.file.convertToJSFile(rutabat);
	
	if(f && f.exists() && application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
	{
		var str = application.executeProgram(rutabat);
		str = str.replace("SerialNumber","")
		str = str.trim();
		macaddress = str;	
		if(!macaddress) macaddress = plugins.UserManager.Client().macAddress;
	}
	else if(!f || !f.exists() && application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
	{
		var jsFile = plugins.file.createTempFile('Comando_numero_serie','.bat');
		
		var success = plugins.file.writeTXTFile(jsFile,'@echo off\nwmic bios get serialnumber');
		if (!success) application.output('Could not write file.');
		
		str = application.executeProgram(jsFile);
		str = str.replace("SerialNumber","")
		str = str.trim();
		macaddress = str;
		if(!macaddress) macaddress = plugins.UserManager.Client().macAddress;
	}
	
	var query = "SELECT tbFacturaCabecera.ID, tbFacturaCabecera.mac, tbFacturaCabecera.ctbai, tbFacturaCabecera.cqr, tbFacturaCabecera.fechaenviofichero "+
    "FROM tbFacturaCabecera tbFacturaCabecera "+
    "WHERE (tbFacturaCabecera.eje_cfa >= "+DesdeEje+
    " AND tbFacturaCabecera.eje_cfa <= "+HastaEje+") "+
    "AND (tbFacturaCabecera.ser_cfa >= '"+DesdeSer+"' "+
    "AND tbFacturaCabecera.ser_cfa <= '"+HastaSer+"') "+
    "AND (tbFacturaCabecera.nup_cfa >= "+DesdeNup+
    " AND tbFacturaCabecera.nup_cfa <= "+HastaNup+") "
    //"AND (tbFacturaCabecera.clie_cfa BETWEEN "+DesdeCliente+" AND "+HastaCliente+") "+
    //"ORDER BY tbFacturaLinea.eje_lfa ASC,tbFacturaLinea.ser_lfa ASC,"+
    //"tbFacturaLinea.nup_lfa ASC,tbFacturaLinea.nli_lfa ASC";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
	ctbai = dataset.getValue(1,2);
	fechtbai = dataset.getValue(1,5);
	var codqr = dataset.getValue(1,4);
	if(ctbai && fechtbai/*&& application.getApplicationType() != APPLICATION_TYPES.SMART_CLIENT*/)
	{
		xmltbai = 0;
		anulatbai = 0;
		modificartbai = 0;		
	}
	else if(!ctbai && codqr)
	{
		xmltbai = 0;
		anulatbai = 0;
		modificartbai = 0;
	}
	else
	{
		xmltbai = 1;
		anulatbai = 0;
		modificartbai = 0;
	}
	//if(globals.GCNombreUsuario == 'JAVI') entorno_ticketbai = 1;
	if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbaientorno == 1) entorno_ticketbai = 1;
	else entorno_ticketbai = 0;
	/*mactbai = dataset.getValue(1,2);
	qrtbai = dataset.getValue(1,4);
	fechtbai = dataset.getValue(1,5);*/
	elements.desdenup.requestFocus()
	
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"8D52756F-3C98-43F7-BAF3-6E01B5E59DC0"}
 */
function onActiondesdeeje(event) {
	// TODO Auto-generated method stub
	elements.desdeser.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C06A9281-2F4A-4F9D-B01A-0C3C051C18F8"}
 */
function onActiondesdeser(event) {
	// TODO Auto-generated method stub
	elements.desdenup.selectAll()
	elements.desdenup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7366B3B5-497A-4204-8D44-7482855B1A4F"}
 */
function onActiondesdenup(event) {
	// TODO Auto-generated method stub
	elements.hastanup.selectAll()
	elements.hastanup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"2262A65D-E2AE-470F-ACED-BDCD71BDA7AC"}
 */
function onActionhastaeje(event) {
	// TODO Auto-generated method stub
	elements.hastaser.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"55D5AB74-8D56-4A33-8225-A2DDC3021E8E"}
 */
function onActionhastaser(event) {
	// TODO Auto-generated method stub
	elements.hastanup.selectAll()
	elements.hastanup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"17F4CCDA-42F3-4E27-AA2E-029D930C0705"}
 */
function btn_DesdeCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionFacturasTBAI1';
	//globals.GCshowDialogClientes('Clientes', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	var win = application.getWindow('Clientes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Clientes';
	//win.resizable = true;
	win.show(forms.dialog_ClientesGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"33DA72A1-AC08-48CE-A4FA-C8F9E1064A93"}
 */
function btn_HastaCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_ImpresionFacturasTBAI2';
	//globals.GCshowDialogClientes('Clientes', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	var win = application.getWindow('Clientes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Clientes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Clientes';
	//win.resizable = true;
	win.show(forms.dialog_ClientesGC)
}

/**
 * @properties={typeid:24,uuid:"3E4E8DD1-481C-4552-B0AD-58C3A81A4F6E"}
 */
function certif(){
	if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital) Certif = gcparametrosaplicacion_to_parametrosaplicacion.name_certifdigital;
	else Certif = 'NO SE HA GUARDADO CERTIFICADO ALGUNO\n EN LOS PARAMETROS DE LA APLICACIÓN'
	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"3478702D-2188-4A63-9FD9-FA61BEAD981A"}
 */
function onDataChangednup() {
	
	//HastaNup = DesdeNup;
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"3EBBB691-F7C4-44C9-90C3-F6BFFFB95488"}
 */
function onDataChangehnup() {
	
	//DesdeNup = HastaNup;
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"21A2996C-CB15-4DFF-BC36-8114070A7206"}
 */
function onActionDatosTicketBAI(event) {
	var query = "SELECT tbFacturaCabecera.ID, tbFacturaCabecera.mac, tbFacturaCabecera.ctbai, tbFacturaCabecera.cqr, "+
	"tbFacturaCabecera.fechaenviofichero, tbfacturaCabecera.fichero_respuesta_tbai, tbfacturaCabecera.firmafactura "+
    "FROM tbFacturaCabecera tbFacturaCabecera "+
    "WHERE (tbFacturaCabecera.eje_cfa >= "+DesdeEje+
    " AND tbFacturaCabecera.eje_cfa <= "+HastaEje+") "+
    "AND (tbFacturaCabecera.ser_cfa >= '"+DesdeSer+"' "+
    "AND tbFacturaCabecera.ser_cfa <= '"+HastaSer+"') "+
    "AND (tbFacturaCabecera.nup_cfa >= "+DesdeNup+
    " AND tbFacturaCabecera.nup_cfa <= "+HastaNup+") "
    //"AND (tbFacturaCabecera.clie_cfa BETWEEN "+DesdeCliente+" AND "+HastaCliente+") "+
    //"ORDER BY tbFacturaLinea.eje_lfa ASC,tbFacturaLinea.ser_lfa ASC,"+
    //"tbFacturaLinea.nup_lfa ASC,tbFacturaLinea.nli_lfa ASC";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
	ctbai = dataset.getValue(1,3);
	mactbai = dataset.getValue(1,2);
	qrtbai = dataset.getValue(1,4);
	fechtbai = dataset.getValue(1,5);
	frtbai = dataset.getValue(1,6);
	firmatbai = dataset.getValue(1,7);
	
	
	var menu = plugins.window.createPopupMenu();
	
	if(mactbai)	var titulo = 'Serial dispositivo: '+ mactbai;
	else if(!mactbai && qrtbai) titulo = 'Serial dispositivo: FACTURA ANULADA EN TICKETBAI';
	else titulo = 'Serial dispositivo: NO SE HA ENVIDO A TICKETBAI';
	//titulo = titulo.toUpperCase();				
	menu.addMenuItem(titulo, MenuTbai, 'media:///Computer.png');
	if(ctbai/* && mactbai*/)	titulo = 'TBai: '+ctbai;	
	else titulo = 'TBai:  NO SE HA ENVIDO A TICKETBAI';	
	//titulo = titulo.toUpperCase();				
	menu.addMenuItem(titulo, MenuTbai, 'media:///TicketBai_ES.png');
	if(qrtbai/* && mactbai*/) titulo = 'QR: '+qrtbai;
	else titulo = 'QR:  NO SE HA ENVIDO A TICKETBAI';
	//titulo = titulo.toUpperCase();				
	menu.addMenuItem(titulo, MenuTbai, 'media:///QR.JPG');
	if(fechtbai/* && mactbai*/) titulo = 'Fecha Envío: '+utils.dateFormat(fechtbai,'dd-MM-yyyy HH:mm');//utils.dateFormat(fechtbai,'dd-MM-yyyy HH:mm');	
	else titulo = 'Fecha Envío: NO SE HA ENVIDO A TICKETBAI';
	//titulo = titulo.toUpperCase();				
	menu.addMenuItem(titulo, MenuTbai, 'media:///31.PNG');
	if(frtbai/* && mactbai*/) titulo = 'Fichero de respuesta TicketBAI tras el envío ';
	else titulo = 'Fichero de respuesta TicketBAI: NO EXISTE FICHERO DE RESPUESTA DE TICKETBAI';
	//titulo = titulo.toUpperCase();				
	menu.addMenuItem(titulo, MenuTbai, 'media:///admin_24.gif');
	if(firmatbai/* && mactbai*/) titulo = 'Firma: '+firmatbai;
	else titulo = 'Firma: NO SE HA ENVIDO A TICKETBAI';
	//titulo = titulo.toUpperCase();				
	menu.addMenuItem(titulo, MenuTbai, 'media:///login2.png');
	titulo = 'Visualizar XML envío a TicketBAI';
	menu.addMenuItem(titulo, MenuTbai, 'media:///xml.gif');
	titulo = 'Consulta de facturas enviadas a TicketBAI';
	if(gcparametrosaplicacion_to_parametrosaplicacion.codpostal &&
	utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20') menu.addMenuItem(titulo, MenuTbai, 'media:///gipuzkoa_diputacion.gif');
	else if(gcparametrosaplicacion_to_parametrosaplicacion.codpostal &&
	utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01') menu.addMenuItem(titulo, MenuTbai, 'media:///araba_diputacion.gif');
	else if(gcparametrosaplicacion_to_parametrosaplicacion.codpostal &&
	utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48') menu.addMenuItem(titulo, MenuTbai, 'media:///vizcaya_batuz_diputacion.gif');
	else menu.addMenuItem(titulo, MenuTbai, 'media:///consulta.gif');
	
	if (event.getSource()) {
		// display the popup over the component which is the source of the event
		menu.show(event.getSource(),0,0);				
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 *
 * @properties={typeid:24,uuid:"F0333AA6-11F5-48E6-9ABA-E5AB262B6462"}
 */
function MenuTbai(event){
	switch (arguments[4]) {
			case ('Serial dispositivo: ' + mactbai).toUpperCase():
			
			break;
		case ('TBai: '+ctbai):
			if((application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT ||
			application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) && ctbai)
			{
				application.setClipboardContent(ctbai)
				globals.GCshowInfoDialog(ctbai+"\ncopiado al portapapeles.", null, null, null, null, null)
			}
			else if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT && plugins.ngdesktoputils)
			{
				plugins.ngdesktoputils.setClipboardContent(ctbai);				
			}
			break;
		case 'QR: '+qrtbai:
			application.showURL(qrtbai,'_blank')
			break;
		case ('Fecha Envío: '+utils.dateFormat(fechtbai,'dd-MM-yyyy HH:mm')).toUpperCase():
		
		break;
		case ('Fichero de respuesta TicketBAI tras el envío '):
			if(frtbai)
			{
				var tempFile = /*plugins.file.createFile(filename)*/plugins.file.createTempFile('_salida','.xml');
				var success = plugins.file.writeFile(tempFile, frtbai);
				uploadCallbackFunction2(tempFile)
				break;
			}
			else break;
		//case ('Visualizar XML envío a TicketBAI'):
		//	VisualizarXML()
		//break;
		case ('Consulta de facturas enviadas a TicketBAI'):
			if(entorno_ticketbai == 0)//pruebas
			{
				if(gcparametrosaplicacion_to_parametrosaplicacion.codpostal &&
						utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20')//GUIPUZCOA
				{
					application.showURL('http://egoitza.gipuzkoa.eus/WAS/CORP/WATTramiteakWEB/inicio.do','_blank')
				}
				else if(gcparametrosaplicacion_to_parametrosaplicacion.codpostal &&
				utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01')//ARABA
				{
					application.showURL('https://pruebas-ticketbai.araba.eus/tbai/consultafacturas/?idioma=es','_blank')
				}
				else if(gcparametrosaplicacion_to_parametrosaplicacion.codpostal &&
				utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48')//VIZCAYA
				{
					application.showURL('https://batuz.eus/misfacturas','_blank')
				}
				else
				{
					application.showURL('http://egoitza.gipuzkoa.eus/WAS/CORP/WATTramiteakWEB/inicio.do','_blank')
				}
			}
			else//real
			{
				if(gcparametrosaplicacion_to_parametrosaplicacion.codpostal &&
				utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20')//GUIPUZCOA
				{
					application.showURL('http://egoitza.gipuzkoa.eus/WAS/CORP/WATTramiteakWEB/inicio.do','_blank')
				}
				else if(gcparametrosaplicacion_to_parametrosaplicacion.codpostal &&
				utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01')//ARABA
				{
					application.showURL('https://ticketbai.araba.eus/tbai/consultafacturas/?idioma=es','_blank')
				}
				else if(gcparametrosaplicacion_to_parametrosaplicacion.codpostal &&
				utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48')//VIZCAYA
				{
					application.showURL('https://batuz.eus/misfacturas','_blank')
				}
				else
				{
					application.showURL('http://egoitza.gipuzkoa.eus/WAS/CORP/WATTramiteakWEB/inicio.do','_blank')
				}
			}
			break;
		default: break;
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param v_event
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"3F297487-CEFB-4704-9ADA-E3DE3FF0B0E3"}
 */
function handle_shortCutGC(v_event)
{
	globals.GCevento = null
	var frm = currentcontroller.getName();
	if(v_event.getType() == 'control F10')
	{
		elements.xmltbai.enabled = true;
		elements.anulatbai.enabled = true;
		elements.modificartbai.enabled = true;
	}
	else if(v_event.getType() == 'control alt B' && (gcfechalimite_usuarios.taop_019 == '1'/*globals.GCNombreUsuario == 'ADMINISTRADOR' || globals.GCNombreUsuario == 'JAVI'*/))
	{
		var methd = 'forms.dlg_ImpresionFacturasTBAIGC_2.BorrarDatosTicketBAI(event)'
		globals.GCshowQuestionDialog("¿Desea borrar realmente los datos de TicketBAI?",methd,'No','Si',null,null)		
	}
	else if(v_event.getType() == 'control alt V' && (gcfechalimite_usuarios.taop_019 == '1'/*globals.GCNombreUsuario == 'ADMINISTRADOR' || globals.GCNombreUsuario == 'JAVI'*/))
	{
		elements.btn_borrardatosTBAI.enabled = true;	
		elements.btn_importardatosTBAI.enabled = true;	
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"46DAF277-1F79-4B98-96C3-F71284E1F104"}
 */
function BorrarDatosTicketBAI(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		forms.FrmFacturasGC.mac = null;
		forms.FrmFacturasGC.ctbai = null;
		forms.FrmFacturasGC.cqr = null;
		forms.FrmFacturasGC.fechaenviofichero = null;
		forms.FrmFacturasGC.firmafactura = null;
		forms.FrmFacturasGC.mac = null;
		forms.FrmFacturasGC.fichero_respuesta_tbai = null;
		databaseManager.saveData(forms.FrmFacturasGC.foundset)
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"222055AA-A6BA-4823-9F69-1FB4D6CE4AB0"}
 */
function onDataChangemodificartbai() {
	if(modificartbai == 1)
	{
		xmltbai = 0;
		anulatbai = 0;
	}	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"6A4AD91E-B93D-4CEB-8B89-1F16FAB121C1"}
 */
function onDataChangeanulatbai() {
	if(anulatbai == 1)
	{
		xmltbai = 0;
		modificartbai = 0;
	}	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"224FCA45-7246-45E8-818D-F946C2266605"}
 */
function onDataChangexmltbai() {
	if(xmltbai == 1)
	{
		anulatbai = 0;
		modificartbai = 0;
	}	
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 * @SuppressWarnings(unused)
 *
 *
 * @properties={typeid:24,uuid:"1299BF25-069C-4F03-A0AE-1E98C4484736"}
 */
function uploadCallbackFunction2(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
   var monitor = plugins.file.streamFilesToServer(_oFile, Visualizar);
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile} _oFile
 *
 *
 *
 * @properties={typeid:24,uuid:"E91C103C-1BD4-4FBD-8A5D-5C6CC30C2C39"}
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 */
function Visualizar(_oFile)
{
	var ext = _oFile.getContentType()
	if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
	{
		var sw = 0;
		
		//create a temporary file that will be auto-deleted by Servoy when client is exited
		var fname = plugins.file.createTempFile('_salida','.xml')

		//write the binary data out to disk at the temporary file location
		plugins.file.writeFile(fname,frtbai); 
		
		var vLocalFilePath = fname.getAbsolutePath();
		//windows
        if (utils.stringMiddle(application.getOSName(), 1, 7) == "Windows") {
        	sw = 1;
            var success = application.executeProgram('rundll32', ['url.dll,FileProtocolHandler', vLocalFilePath])
        }
        //FreeBSD or Linux
        else if (utils.stringMiddle(application.getOSName(), 1, 7) == "FreeBSD" || utils.stringMiddle(application.getOSName(), 1, 5) == "Linux") {
        	sw = 1;
            success = application.executeProgram('mozilla', [vLocalFilePath])
        }
        //Mac OSX
        else if (application.getOSName().match("Mac")) {
        	sw = 1;
            success = application.executeProgram('open', [vLocalFilePath])
        }
        if(sw == 1)
        {
        	//var msg = "¿Desea borrar de la Base de Datos este documento?"
        	//var methd = 'forms.lst_AsientoContable_Lineas.BorradoPDF()'
        	//globals.CONTAshowQuestionDialog(msg,methd,'No','Si',null,null)
        }
	}
	else
	{
		if(ext == null) ext='text/plain'
			else if(ext == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || ext == 'application/vnd.ms-excel' ||
					ext == 'application/vnd.ms-excel.sheet.binary.macroenabled.12') ext = 'application/msexcel'
			else if(ext == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') ext = 'application/msword'
		if(ext == 'application/msexcel' || ext == 'application/msword')
		{
			var serverURL = application.getServerURL() 
			application.showURL(serverURL + "uploads/" + _oFile.getName());
			//plugins.WebClientUtils.executeClientSideJS('location.reload();');
			 
		}
		else
		{
			serverURL = application.getServerURL() 
		    application.showURL(serverURL + "uploads/" + _oFile.getName()+'?nodebug=true','_blank','height=600,width=800,status=yes,toolbar=no,menubar=no,location=no')
			//plugins.WebClientUtils.executeClientSideJS('location.reload();');
			
		}
	}
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F71DE9CD-2455-4C35-AF23-100A3EE316A5"}
 */
function onActionborrardatosTicketBAI(event) {
	//if(globals.GCNombreUsuario == 'ADMINISTRADOR' || globals.GCNombreUsuario == 'JAVI')
	if(gcfechalimite_usuarios.taop_019 == '1')
	{
		var methd = 'forms.dlg_ImpresionFacturasTBAIGC_2.BorrarDatosTicketBAI(event)'
		globals.GCshowQuestionDialog("¿Desea borrar realmente los datos de TicketBAI?",methd,'No','Si',null,null)		
	}
	else
	{
		globals.GCshowErrorDialog("Este usuario no dispone de permisos para borrar datos TicketBAI.", null, null, null, null, null)
	}
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"BE639566-AA0A-432D-A387-ED4EDC14AFB9"}
 */
function onActionimportardatosTicketBAI(event) {
	//if(globals.GCNombreUsuario == 'ADMINISTRADOR' || globals.GCNombreUsuario == 'JAVI')
	if(gcfechalimite_usuarios.taop_019 == '1')
	{
		globals.GCFormulario = null;
		globals.GCshowImportarDatosTBAI('Importar Datos TBAI desde .csv', 1, null, null, true, null, null, null, null, null);
	}
	else
	{
		globals.GCshowErrorDialog("Este usuario no dispone de permisos para borrar datos TicketBAI.", null, null, null, null, null)
	}
}
