/**
 * @properties={typeid:24,uuid:"BB208CA0-8091-4C5B-9148-25D674150A71"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Editar Datos TBAI').hide();
	globals.GCenableBgElements();
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.xmltbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.anulatbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.modificartbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_borrardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_importardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.codcrc = null;
	forms.dlg_ImpresionFacturasTBAIGC.crcurl = null;
	if(globals.GCNombreUsuario == 'JAVI' || globals.GCNombreUsuario == 'ADMINISTRADOR')
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = true
		if(gcparametrosaplicacion_to_parametrosaplicacion.osatu) forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = true
		else forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
	else
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = false
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"21B5323A-7F0F-43F0-8398-9DE22680E4A5"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.xmltbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.anulatbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.modificartbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_borrardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_importardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.codcrc = null;
	forms.dlg_ImpresionFacturasTBAIGC.crcurl = null;
	if(globals.GCNombreUsuario == 'JAVI' || globals.GCNombreUsuario == 'ADMINISTRADOR')
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = true
		if(gcparametrosaplicacion_to_parametrosaplicacion.osatu) forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = true
		else forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
	else
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = false
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
}

/**
 * @properties={typeid:24,uuid:"0C14722A-A1A0-454B-AE6A-F485E93CA6ED"}
 * @SuppressWarnings(deprecated)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	if(!forms.dlgEditarDatosTBAI.mac)
	{
		forms.dlgEditarDatosTBAI.mac = plugins.UserManager.Client().macAddress;				
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
			forms.dlgEditarDatosTBAI.mac = str;	
			if(!forms.dlgEditarDatosTBAI.mac) forms.dlgEditarDatosTBAI.mac = plugins.UserManager.Client().macAddress;
		}
		else if(!f || !f.exists() && application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
		{
			var jsFile = plugins.file.createTempFile('Comando_numero_serie','.bat');
			
			var success = plugins.file.writeTXTFile(jsFile,'@echo off\nwmic bios get serialnumber');
			if (!success) application.output('Could not write file.');
			
			str = application.executeProgram(jsFile);
			str = str.replace("SerialNumber","")
			str = str.trim();
			forms.dlgEditarDatosTBAI.mac = str;
			if(!forms.dlgEditarDatosTBAI.mac) forms.dlgEditarDatosTBAI.mac = plugins.UserManager.Client().macAddress;
		}
	}
	if(!forms.dlgEditarDatosTBAI.fechaenviofichero && forms.dlgEditarDatosTBAI.mac && forms.dlgEditarDatosTBAI.ctbai &&
	forms.dlgEditarDatosTBAI.cqr && forms.dlgEditarDatosTBAI.firmafactura)
	{
		forms.dlgEditarDatosTBAI.fechaenviofichero = new Date()
	}
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) globals.GCsaveEdits()
	}
	
	databaseManager.saveData();	
	
	
	application.getWindow('Editar Datos TBAI').hide();
	globals.GCenableBgElements();	
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.xmltbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.anulatbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.modificartbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_borrardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_importardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.codcrc = null;
	forms.dlg_ImpresionFacturasTBAIGC.crcurl = null;
	if(globals.GCNombreUsuario == 'JAVI' || globals.GCNombreUsuario == 'ADMINISTRADOR')
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = true;
		if(gcparametrosaplicacion_to_parametrosaplicacion.osatu) forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = true
		else forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
	else
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = false
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
*
 *
 * @properties={typeid:24,uuid:"15F182D7-42AE-4F3D-9737-62BDBEBA2EF5"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
	}
	application.getWindow('Editar Datos TBAI').hide();
	globals.GCenableBgElements();	
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdeser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.desdenup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaeje.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastaser.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.hastanup.editable = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.xmltbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.anulatbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.modificartbai.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_borrardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.elements.btn_importardatosTBAI.enabled = false;
	forms.dlg_ImpresionFacturasTBAIGC.codcrc = null;
	forms.dlg_ImpresionFacturasTBAIGC.crcurl = null;
	if(globals.GCNombreUsuario == 'JAVI' || globals.GCNombreUsuario == 'ADMINISTRADOR')
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = true;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = true;
		if(gcparametrosaplicacion_to_parametrosaplicacion.osatu) forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = true
		else forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
	else
	{
		forms.dlg_ImpresionFacturasTBAIGC.elements.crcurl.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.codcrc.visible = false;
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosTBAI.visible = false
		forms.dlg_ImpresionFacturasTBAIGC.elements.btn_editardatosOSATU.visible = false
	}
	return true
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"B1DBACC1-06CA-45BC-9DFA-F15FA79ECEF3"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}
