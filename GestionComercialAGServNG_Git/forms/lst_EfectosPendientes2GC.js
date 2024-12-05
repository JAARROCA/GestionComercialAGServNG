/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E586BB2C-D258-4683-9F98-045C61479394"}
 * @SuppressWarnings(deprecated)
 */
function onActionsituacion(event) {
	// TODO Auto-generated method stub
	
	if(situacion == 'S')
	{
		var fech = utils.dateFormat(fechavencimiento,'d MMM yyyy HH:mm:ss:SS')
		var query = "DELETE FROM [CCobrosPagosImpresion] "+
					"WHERE [Usuario] ="+globals.GClogin_usuario+" AND [FechaVencimiento] ='"+ fech+"' AND [CuentaContable] = '"+cuentacontable+
					"' AND [ImporteVencimiento] = "+importevencimiento;

		var done = plugins.rawSQL.executeSQL(globals.GCconex,"CCobrosPagosImpresion",query)
		if (done)
		{
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache(globals.GCconex,"CCobrosPagosImpresion")				
			
		}
		else
		{
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error',  'SQL exception: '+msg,  'Ok')
		}
		situacion = null
		controller.recreateUI()
		application.updateUI();		
		globals.FechaVtoSel = null
		globals.CuentaSel = null
		globals.DescCuentaSel = null
		globals.NFacturaSel = null
		globals.DocuSel = null
		globals.ConceptoSel = null
		globals.ImporteSel = null
		globals.ImporteAcumSel -= importevencimiento
		globals.FPSel = null
	}
	else
	{
		var vSet = databaseManager.getFoundSet(globals.GCconex, 'ccobrospagosimpresion') 
		fech = utils.dateFormat(fechavencimiento,'dd-MM-yyyy')
		var fechfactura = utils.dateFormat(fechafactura,'dd-MM-yyyy')
		var Obser = observaciones
		if(Obser == null)
		{
			Obser = 'NULL'
		}
		else
		{
			Obser = "'"+Obser+"'"
		}
		vSet.newRecord();
		vSet['usuario'] = globals.GClogin_usuario;
		vSet['fechavencimiento'] = utils.parseDate(fech,'dd-MM-yyyy')
		vSet['cuentacontable'] = cuentacontable
		vSet['importevencimiento'] = importevencimiento
		vSet['desccuentacontable'] = gcccobrospagos_to_tbmaestroclientes.desccliente;
		vSet['idfactura'] = idfactura;
		vSet['fechafactura'] = utils.parseDate(fechfactura,'dd-MM-yyyy')
		vSet['formapago'] = formapago;
		vSet['cuentabanco'] = globals.CuentaBanco;
		vSet['idbanco'] = gcccobrospagos_to_maestrobancosctascargo2.idbanco;
		vSet['sucursal'] = gcccobrospagos_to_maestrobancosctascargo2.sucursal;
		vSet['digitocontrol'] = gcccobrospagos_to_maestrobancosctascargo2.digitocontrol;
		vSet['ncuenta'] = gcccobrospagos_to_maestrobancosctascargo2.ncuenta;
		if(Obser == 'NULL') vSet['observaciones'] = null;
		else vSet['observaciones'] = Obser;
		vSet['cobropago'] = cobropago;
		vSet['tipodeudor'] = tipodeudor;
		vSet['tipoadeudo'] = tipoadeudo;
		
		
		
		databaseManager.saveData(vSet)
		/*query = "INSERT INTO [CCobrosPagosImpresion] "+
				"([Usuario],[FechaVencimiento],[CuentaContable]"+
				",[ImporteVencimiento],[DescCuentaContable],[IdFactura]"+
				",[FechaFactura],[FormaPago],[CuentaBanco]"+
				",[IdBanco],[Sucursal],[DigitoControl],[NCuenta]"+
				",[Observaciones],[CobroPago],[TipoDeudor],[TipoAdeudo]) "+
				"VALUES ("+globals.GClogin_usuario+
				",'"+ fech+
				"','"+cuentacontable+"',"+importevencimiento+
				",'"+GCccobrospagos_to_tbmaestroclientes.desccliente+
				"','"+idfactura+"','"+fechfactura+
				"','"+formapago+"','"+globals.CuentaBanco+
				"','"+gcccobrospagos_to_maestrobancosctascargo2.idbanco+
				"','"+gcccobrospagos_to_maestrobancosctascargo2.sucursal+
				"','"+gcccobrospagos_to_maestrobancosctascargo2.digitocontrol+
				"','"+gcccobrospagos_to_maestrobancosctascargo2.ncuenta+
				"',"+Obser+
				","+cobropago+
				",'"+tipodeudor+
				"','"+tipoadeudo+"')";
				
				
		done = plugins.rawSQL.executeSQL(globals.GCconex,"CCobrosPagosImpresion",query)
		if (done)
		{
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache(globals.GCconex,"CCobrosPagosImpresion")				
			
		}
		else
		{
			msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error',  'SQL exception: '+msg,  'Ok')
		}
		*/
		situacion = 'S'
		controller.recreateUI()
		application.updateUI();
		globals.FechaVtoSel = fechavencimiento
		globals.CuentaSel = cuentacontable
		globals.DescCuentaSel = gcccobrospagos_to_ccobrospagos2.gcccobrospagos_to_tbmaestroclientes.desccliente
		globals.NFacturaSel = idfactura
		globals.DocuSel = numdocumento
		globals.ConceptoSel = concepto
		globals.ImporteSel = importevencimiento
		globals.ImporteAcumSel += importevencimiento
		globals.FPSel = formapago
	}
}

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"770E57FE-808A-4BF4-841D-F0D7DABEE914"}
 */
function onShow() {
	// TODO Auto-generated method stub
	databaseManager.setAutoSave(false)
	
}
