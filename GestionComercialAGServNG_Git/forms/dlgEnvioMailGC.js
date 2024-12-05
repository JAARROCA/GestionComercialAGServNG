/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CC0A6121-8554-4264-8CD8-F34A4E68413D"}
 */
var EmailAsunto = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82C65CAF-A4B2-4BF2-9A59-6394CD95EB48"}
 */
var EmailTexto = null;

/**
 *
 *
 *
 * @type {Array}
 *
 *
 * @properties={typeid:35,uuid:"CEF6108F-0360-43E2-86A3-188AC3986FBD",variableType:-4}
 */
var EmailAdjuntar;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"925BF9A9-6BB6-46DB-9B82-C77A145C84BF"}
 */
var Adjuntar = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"794DA385-C2FC-4C9F-A053-BD5F83F2F64C"}
 */
var EmailCCO = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1673B6F8-72DA-4296-A650-0608B44935EF"}
 */
var EmailCC = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1121F35A-99CF-41E6-8905-2C0FD5AB6C3B"}
 */
var EmailTo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FF10A514-9921-4B72-9E9F-BB4AE7FDDE2A"}
 */
var EmailFrom = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"AC9C4F39-B223-4A3F-9175-46D762E1D4D0"}
 */
var FirmaEmail = null;

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"FF8CBFC7-394E-453C-B7E1-693B9D2DAEC9"}
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(unused)
 */
function onShow() {
	// TODO Auto-generated method stub
	EmailCC = ''
	EmailCCO = ''
	var query = 'select imde_us,passw_us,firmaemail from [usuarios] WHERE [cod_us] = ' + globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	EmailFrom = dataset.getValue(1,1)
	FirmaEmail = dataset.getValue(1,3)
	EmailAdjuntar = null
	Adjuntar = null
	//var server_name = databaseManager.getDataSourceServerName(currentcontroller.getDataSource());
	var server_name = globals.GCconex;
	
	switch (globals.GCFormulario)
	{
		case 'FrmAlbaran':
		{
			if(gcparametrosaplicacion_to_parametrosaplicacion.facturapredet == 1) var reportName = 'AlbaranVentaGC.jrxml';
			else if(gcparametrosaplicacion_to_parametrosaplicacion.facturapredet == 3) reportName = 'AlbaranVenta2GC.jrxml';
			else reportName = 'AlbaranVentaGC.jrxml';
			//var reportName = 'AlbaranVentaGC.jrxml';
			
			var params = new java.util.HashMap()
			params.put('DesdeNAlbaran', forms.FrmAlbaranGC.cod_cal)
			params.put('HastaNAlbaran', forms.FrmAlbaranGC.cod_cal)
			params.put('DesdeCliente', 0)
			params.put('HastaCliente', 9999999999)
			var exportTo = 'pdf';//
			var temp_file = plugins.file.createTempFile('Alb' + utils.numberFormat(forms.FrmAlbaranGC.cod_cal,'00000'), '.'+exportTo);
			//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
	
		    var _attachment = temp_file.getParent() + '\\Alb' + utils.numberFormat(forms.FrmAlbaranGC.cod_cal,'00000')+'.pdf';
			//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
			try{
			plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
			}
			catch(e)
		    {
		    	application.output(e.toString())
		    }
		    
			var rawData = plugins.file.readFile(_attachment)
			
			if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital)
			{
				var tempFile = plugins.file.createFile('Alb' + utils.numberFormat(forms.FrmAlbaranGC.cod_cal,'00000')+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				var success = plugins.file.writeFile(tempFile, rawData);
				
				//tempFile = globals.signPDF(tempFile)
				
				rawData = plugins.file.readFile(tempFile)
			}
			
			var name = '\\Alb' + utils.numberFormat(forms.FrmAlbaranGC.cod_cal,'00000')+'.pdf';
			var myFile = plugins.mail.createBinaryAttachment(name, rawData)
			
			if(globals.GCNombreEmpresa != 'COSTALUZ ASESORES S.L.P.')
			{
				EmailTexto = '<html>Estimado Cliente: <br><br>'+
				 'Reciba adjunta copia del albarán '+utils.numberFormat(forms.FrmAlbaranGC.cod_cal,'00000') +
				 ' con detalle de la mercancia.<br>'+
				 'Dpto.Expediciones. <br><br>'+
				 //'Saludos<br>'+
				 //globals.GCNombreUsuario+'<br>'+
				 FirmaEmail+
				 //'<img src="'+oFile.getName()+'">'+
				 '</html>'
			}
			else
			{
				EmailCCO = EmailFrom
				EmailTexto = '<html>Buenas tardes <br><br>'+
				 'Reciba adjunta copia del albarán '+utils.numberFormat(forms.FrmAlbaranGC.cod_cal,'00000') +
				 ' con detalle de los servicios prestados.<br>'+
				 'Dpto.Expediciones. <br><br>'+
				 //'Saludos<br>'+
				 //globals.GCNombreUsuario+'<br>'+
				 FirmaEmail+
				 //'<img src="'+oFile.getName()+'">'+
				 '</html>'
			}
			EmailAsunto = 'Notificación envio albarán'
			EmailTo = forms.FrmAlbaranGC.GCcalbaran_to_tbmaestroclientes.emailcontacto 			
			EmailAdjuntar = new Array();
			if(forms.FrmAlbaranGC.GCcalbaran_to_tbmaestroclientes && forms.FrmAlbaranGC.GCcalbaran_to_tbmaestroclientes.emailcc) EmailCC = forms.FrmAlbaranGC.GCcalbaran_to_tbmaestroclientes.emailcc;
			if(rawData)	EmailAdjuntar = new Array(myFile);
			if(logo)
			{
				if(rawData)	Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			break;
		}
		case 'dlgrenovacionGC':
		{
			EmailTo = 'aginfo@agissa.com'
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.CONTANombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.CONTANombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = 'Renovación licencia GC '+globals.GCNombreEmpresa;
			EmailTexto = FirmaEmail
			break;
		}
		case 'FrmPresupuesto':
		{
			if(server_name == 'conexiongestionsectorvertical') reportName = 'PresupuestoSVGC.jrxml';
			else reportName = 'PresupuestoGC.jrxml';
			
			params = new java.util.HashMap()
			var DNUP = forms.FrmPresupuestosGC.cod_cof;
			var HNUP = forms.FrmPresupuestosGC.cod_cof;
			var DCLI = forms.FrmPresupuestosGC.clie_cof;
			var HCLI = forms.FrmPresupuestosGC.clie_cof;
			params.put('DesdePresupuesto', DNUP)
			params.put('HastaPresupuesto', HNUP)
			params.put('DesdeCliente', DCLI)
			params.put('HastaCliente', HCLI)
			exportTo = 'pdf';//
			temp_file = plugins.file.createTempFile('Pre' + utils.numberFormat(forms.FrmPresupuestosGC.cod_cof,'00000'), '.'+exportTo);
			//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
	
		    _attachment = temp_file.getParent() + '\\Pre' + utils.numberFormat(forms.FrmPresupuestosGC.cod_cof,'00000')+'.pdf';
			//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
			try{
			plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
			}
			catch(e)
		    {
		    	application.output(e.toString())
		    }
			
			rawData = plugins.file.readFile(_attachment)
			
			if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital)
			{
				tempFile = plugins.file.createFile('Pre' + utils.numberFormat(forms.FrmPresupuestosGC.cod_cof,'00000')+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				success = plugins.file.writeFile(tempFile, rawData);
				
				//tempFile = globals.signPDF(tempFile)
				
				rawData = plugins.file.readFile(tempFile)
			}
			
			name = '\\Pre' + utils.numberFormat(forms.FrmPresupuestosGC.cod_cof,'00000')+'.pdf';
			myFile = plugins.mail.createBinaryAttachment(name, rawData)
			
			if(globals.GCNombreEmpresa != 'COSTALUZ ASESORES S.L.P.')
			{
				EmailTexto = '<html>Estimado Cliente: <br><br>'+
				 'Reciba adjunta copia del presupuesto '+utils.numberFormat(forms.FrmPresupuestosGC.cod_cof,'00000') +
				 ' con detalle de la mercancia.<br>'+
				 'Dpto.Expediciones. <br><br>'+
				 //'Saludos<br>'+
				 //globals.GCNombreUsuario+'<br>'+
				 FirmaEmail+
				 //'<img src="'+oFile.getName()+'">'+
				 '</html>'
			}
			else
			{
				EmailCCO = EmailFrom
				EmailTexto = '<html>Buenas tardes <br><br>'+
					 'Reciba adjunta copia del presupuesto '+utils.numberFormat(forms.FrmPresupuestosGC.cod_cof,'00000') +
					 ' con detalle de los servicios prestados.<br>'+
					 'Dpto.Expediciones. <br><br>'+
					 //'Saludos<br>'+
					 //globals.GCNombreUsuario+'<br>'+
					 FirmaEmail+
					 //'<img src="'+oFile.getName()+'">'+
					 '</html>'
			}
			EmailAsunto = 'Notificación envio presupuesto'
			EmailTo = forms.FrmPresupuestosGC.emacl_cof//.GCcliente_presupuesto.emailcontacto 			
			EmailAdjuntar = new Array();
			if(forms.FrmPresupuestosGC.GCcliente_presupuesto && forms.FrmPresupuestosGC.GCcliente_presupuesto.emailcc) EmailCC = forms.FrmPresupuestosGC.GCcliente_presupuesto.emailcc;
			if(rawData)	EmailAdjuntar = new Array(myFile);
			if(logo)
			{
				if(rawData)	Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			break;
		}
		case 'FrmPetOfertaCompras':
		{
			reportName = 'PeticionOfertaCompraGC.jrxml';			
			
			params = new java.util.HashMap()
			params.put('DesdePeticion', forms.FrmPetOfertaComprasGC.npetoferta)
			params.put('HastaPeticion', forms.FrmPetOfertaComprasGC.npetoferta)
			exportTo = 'pdf';//
			temp_file = plugins.file.createTempFile('Ped' + utils.numberFormat(forms.FrmPetOfertaComprasGC.npetoferta,'00000'), '.'+exportTo);
			//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
	
		    _attachment = temp_file.getParent() + '\\Ped' + utils.numberFormat(forms.FrmPetOfertaComprasGC.npetoferta,'00000')+'.pdf';
			//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
			try{
			plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
			}
			catch(e)
		    {
		    	application.output(e.toString())
		    }
			
			rawData = plugins.file.readFile(_attachment)
			
			
			
			if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital)
			{
				tempFile = plugins.file.createFile('Ped' + utils.numberFormat(forms.FrmPetOfertaComprasGC.npetoferta,'00000')+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				success = plugins.file.writeFile(tempFile, rawData);
				
				//tempFile = globals.signPDF(tempFile)
				
				rawData = plugins.file.readFile(tempFile)
			}
			
			name = '\\Ped' + utils.numberFormat(forms.FrmPetOfertaComprasGC.npetoferta,'00000')+'.pdf';
			myFile = plugins.mail.createBinaryAttachment(name, rawData)
			EmailAdjuntar = new Array();
			if(forms.FrmPetOfertaComprasGC.GCtbpetofertacompracabecera_to_tbmaestroproveedores && 
					forms.FrmPetOfertaComprasGC.GCtbpetofertacompracabecera_to_tbmaestroproveedores.emailcc) EmailCC = forms.FrmPetOfertaComprasGC.GCtbpetofertacompracabecera_to_tbmaestroproveedores.emailcc;
			if(rawData)	EmailAdjuntar = new Array(myFile);
			if(logo)
			{
				if(rawData)	Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			
			EmailTo = forms.FrmPetOfertaComprasGC.GCtbpetofertacompracabecera_to_tbmaestroproveedores.email 
			EmailAsunto = 'Notificación envio Petición de Oferta'
			EmailTexto = '<html>Estimado Proveedor: <br><br>'+
						 'Reciba adjunta copia de la petición de oferta '+forms.FrmPetOfertaComprasGC.npetoferta+
						 ' con detalle de la mercancia.<br>'+
						 'Dpto.Compras. <br><br>'+
						 //'Saludos<br>'+
						// globals.GCNombreUsuario+'<br>'+
						 FirmaEmail+
						 //'<img src="'+oFile.getName()+'">'+
						 '</html>'
			break;
		}
		case 'FrmPedidosCompras':
		{
			reportName = 'PedidoCompraGC.jrxml';			
			
			params = new java.util.HashMap()
			params.put('DesdeNPedido', forms.FrmPedidosComprasGC.npedido)
			params.put('HastaNPedido', forms.FrmPedidosComprasGC.npedido)
			params.put('DesdeProveedor', 0)
			params.put('HastaProveedor', 99999999)
			exportTo = 'pdf';//
			temp_file = plugins.file.createTempFile('PedCompra' + utils.numberFormat(forms.FrmPedidosComprasGC.npedido,'00000'), '.'+exportTo);
			//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
	
		    _attachment = temp_file.getParent() + '\\PedCompra' + utils.numberFormat(forms.FrmPedidosComprasGC.npedido,'00000')+'.pdf';
			//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
			try{
			plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
			}
			catch(e)
		    {
		    	application.output(e.toString())
		    }
			
			rawData = plugins.file.readFile(_attachment)
			
			
			
			if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital)
			{
				tempFile = plugins.file.createFile('PedCompra' + utils.numberFormat(forms.FrmPedidosComprasGC.npedido,'00000')+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				success = plugins.file.writeFile(tempFile, rawData);
				
				//tempFile = globals.signPDF(tempFile)
				
				rawData = plugins.file.readFile(tempFile)
			}
			
			name = '\\PedCompra' + utils.numberFormat(forms.FrmPedidosComprasGC.npedido,'00000')+'.pdf';
			myFile = plugins.mail.createBinaryAttachment(name, rawData)
			EmailAdjuntar = new Array();
			if(rawData)	EmailAdjuntar = new Array(myFile);
			if(logo)
			{
				if(rawData)	Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			
			EmailTo = forms.FrmPedidosComprasGC.GCtbpedidocompracabecera_to_tbmaestroproveedores.email 
			if(forms.FrmPedidosComprasGC.GCtbpedidocompracabecera_to_tbmaestroproveedores && 
					forms.FrmPedidosComprasGC.GCtbpedidocompracabecera_to_tbmaestroproveedores.emailcc) EmailCC = forms.FrmPedidosComprasGC.GCtbpedidocompracabecera_to_tbmaestroproveedores.emailcc;
			EmailAsunto = 'Notificación envio Pedido de Compra'
			EmailTexto = '<html>Estimado Proveedor: <br><br>'+
						 'Reciba adjunta copia del pedido de compra nº '+utils.numberFormat(forms.FrmPedidosComprasGC.npedido,'00000')+
						 ' con detalle de la mercancia.<br>'+
						 'Dpto.Compras. <br><br>'+
						 //'Saludos<br>'+
						 //globals.GCNombreUsuario+'<br>'+
						 FirmaEmail+
						 //'<img src="'+oFile.getName()+'">'+
						 '</html>'
			break;
		}
		case 'FrmFacturas':
		{
			if(gcparametrosaplicacion_to_parametrosaplicacion.ticketbai) reportName = 'FacturaVentaTBAIGC.jrxml';
			else if(gcparametrosaplicacion_to_parametrosaplicacion.facturapredet == 1) reportName = 'FacturaVentaGC.jrxml';
			else if(gcparametrosaplicacion_to_parametrosaplicacion.facturapredet == 2) reportName = 'FacturaVenta2GC.jrxml';
			else if(gcparametrosaplicacion_to_parametrosaplicacion.facturapredet == 3) reportName = 'FacturaVenta3GC.jrxml';
			else if(gcparametrosaplicacion_to_parametrosaplicacion.facturapredet == 4) reportName = 'FacturaVenta4GC.jrxml';
			else reportName = 'FacturaVentaGC.jrxml';
			
			params = new java.util.HashMap()
			params.put('DesdeEjer', forms.FrmFacturasGC.eje_cfa)
			params.put('HastaEjer', forms.FrmFacturasGC.eje_cfa)
			params.put('DesdeSer', forms.FrmFacturasGC.ser_cfa)
			params.put('HastaSer', forms.FrmFacturasGC.ser_cfa)
			params.put('DesdeNFact', forms.FrmFacturasGC.nup_cfa)
			params.put('HastaNFact', forms.FrmFacturasGC.nup_cfa)
			params.put('DesdeCliente', forms.FrmFacturasGC.clie_cfa)
			params.put('HastaCliente', forms.FrmFacturasGC.clie_cfa)
			exportTo = 'pdf';//
			temp_file = plugins.file.createTempFile('Fra'+forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa, '.'+exportTo);
			//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
	
		    _attachment = temp_file.getParent() + '\\Fra' +forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa+'.pdf';
			//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
			try{
			plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
			}
			catch(e)
		    {
		    	application.output(e.toString())
		    }
			
			rawData = plugins.file.readFile(_attachment)
			
			
			
			if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital)
			{
				tempFile = plugins.file.createFile('Fra' + forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000') + forms.FrmFacturasGC.ser_cfa+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				success = plugins.file.writeFile(tempFile, rawData);
				
				//tempFile = globals.signPDF(tempFile)
				
				rawData = plugins.file.readFile(tempFile)
			}
			
			name = '\\Fra'+forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa+'.pdf';
			myFile = plugins.mail.createBinaryAttachment(name, rawData)
			EmailAdjuntar = new Array();
			if(rawData)	EmailAdjuntar = new Array(myFile);
			if(logo)
			{
				if(rawData)	Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			
			EmailTo = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.emailcontacto
			if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes && 
					forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.emailcc) EmailCC = forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.emailcc;
			EmailAsunto = 'Notificación envio Factura de Venta'
			//var URLLogo = getLogo()
			/*EmailTexto = 'Estimado Cliente: \n\n'+
						 'Reciba adjunta copia de la factura '+forms.FrmFacturas.eje_cfa+utils.numberFormat(forms.FrmFacturas.nup_cfa,'00000')+forms.FrmFacturas.ser_cfa+
						 ' con detalle de la mercancia.\n\n'+
						 'Dpto.Facturación. '*/
			if(globals.GCNombreEmpresa != 'COSTALUZ ASESORES S.L.P.')
			{
				EmailTexto = '<html>Buenas tardes <br><br>'+
							 'Reciba adjunta copia de la factura '+forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa +
							 ' con detalle de la mercancia.<br>'+
							 'Dpto.Facturación.<br><br>'+
							 //'Saludos<br>'+
							 //globals.GCNombreUsuario+'<br>'+
							 FirmaEmail+
							 //'<img src="'+oFile.getName()+'">'+
							 '</html>'
			}
			else
			{
				EmailCCO = EmailFrom
				EmailTexto = '<html>Buenas tardes <br><br>'+
				 'Reciba adjunta copia de la factura '+forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa +
				 ' con detalle de los servicios prestados.<br>'+
				 'Dpto.Facturación. <br><br>'+
				 //'Saludos<br>'+
				 //globals.GCNombreUsuario+'<br>'+
				 FirmaEmail+
				 //'<img src="'+oFile.getName()+'">'+
				 '</html>'
			}
							
			/*EmailTexto = 'Estimado Cliente: \n\n'+			 
			'Reciba adjunta copia de la factura '+forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa +
			' con detalle de la mercancia.\n'+
			'Dpto.Facturación.\n\n'+ FirmaEmail*/
			break;
		}	
		case 'FrmFacturasProforma':
		{
			reportName = 'FacturaVentaProformaGC.jrxml';
			
			params = new java.util.HashMap()
			params.put('DesdeEjer', forms.FrmFacturasProformaGC.eje_cfa)
			params.put('HastaEjer', forms.FrmFacturasProformaGC.eje_cfa)
			params.put('DesdeSer', forms.FrmFacturasProformaGC.ser_cfa)
			params.put('HastaSer', forms.FrmFacturasProformaGC.ser_cfa)
			params.put('DesdeNFact', forms.FrmFacturasProformaGC.nup_cfa)
			params.put('HastaNFact', forms.FrmFacturasProformaGC.nup_cfa)
			params.put('DesdeCliente', forms.FrmFacturasProformaGC.clie_cfa)
			params.put('HastaCliente', forms.FrmFacturasProformaGC.clie_cfa)
			exportTo = 'pdf';//
			temp_file = plugins.file.createTempFile('FraProf'+forms.FrmFacturasProformaGC.eje_cfa+utils.numberFormat(forms.FrmFacturasProformaGC.nup_cfa,'00000')+forms.FrmFacturasProformaGC.ser_cfa, '.'+exportTo);
			//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
	
		    _attachment = temp_file.getParent() + '\\FraProf' +forms.FrmFacturasProformaGC.eje_cfa+utils.numberFormat(forms.FrmFacturasProformaGC.nup_cfa,'00000')+forms.FrmFacturasProformaGC.ser_cfa+'.pdf';
			//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
			try{
			plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
			}
			catch(e)
		    {
		    	application.output(e.toString())
		    }
			
			rawData = plugins.file.readFile(_attachment)
			
			
			
			if(gcparametrosaplicacion_to_parametrosaplicacion.certifdigital)
			{
				tempFile = plugins.file.createFile('Fra' + forms.FrmFacturasProformaGC.eje_cfa+utils.numberFormat(forms.FrmFacturasProformaGC.nup_cfa,'00000') + forms.FrmFacturasProformaGC.ser_cfa+'.'+exportTo)//plugins.file.createTempFile(filename,'.pdf');
				success = plugins.file.writeFile(tempFile, rawData);
				
				//tempFile = globals.signPDF(tempFile)
				
				rawData = plugins.file.readFile(tempFile)
			}
			
			name = '\\FraProf'+forms.FrmFacturasProformaGC.eje_cfa+utils.numberFormat(forms.FrmFacturasProformaGC.nup_cfa,'00000')+forms.FrmFacturasProformaGC.ser_cfa+'.pdf';
			myFile = plugins.mail.createBinaryAttachment(name, rawData)
			EmailAdjuntar = new Array();
			if(rawData)	EmailAdjuntar = new Array(myFile);
			if(logo)
			{
				if(rawData)	Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			
			EmailTo = forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes.emailcontacto
			if(forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes && 
					forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes.emailcc) EmailCC = forms.FrmFacturasProformaGC.gctbfacturaproformacabecera_to_tbmaestroclientes.emailcc;
			EmailAsunto = 'Notificación envio Factura Proforma'
			//var URLLogo = getLogo()
			/*EmailTexto = 'Estimado Cliente: \n\n'+
						 'Reciba adjunta copia de la factura '+forms.FrmFacturas.eje_cfa+utils.numberFormat(forms.FrmFacturas.nup_cfa,'00000')+forms.FrmFacturas.ser_cfa+
						 ' con detalle de la mercancia.\n\n'+
						 'Dpto.Facturación. '*/
			if(globals.GCNombreEmpresa != 'COSTALUZ ASESORES S.L.P.')
			{
				 EmailTexto = '<html>Buenas tardes <br><br>'+
							 'Reciba adjunta copia de la factura '+forms.FrmFacturasProformaGC.eje_cfa+utils.numberFormat(forms.FrmFacturasProformaGC.nup_cfa,'00000')+forms.FrmFacturasProformaGC.ser_cfa +
							 ' con detalle de la mercancia.<br>'+
							 'Dpto.Facturación.<br><br>'+
							 //'Saludos<br>'+
							 //globals.GCNombreUsuario+'<br>'+
							 FirmaEmail+
							 //'<img src="'+oFile.getName()+'">'+
							 '</html>'
			}
			else
			{
				EmailCCO = EmailFrom
				EmailTexto = '<html>Buenas tardes <br><br>'+
				 'Reciba adjunta copia de la factura '+forms.FrmFacturasProformaGC.eje_cfa+utils.numberFormat(forms.FrmFacturasProformaGC.nup_cfa,'00000')+forms.FrmFacturasProformaGC.ser_cfa +
				 ' con detalle de los servicios prestados.<br>'+
				 'Dpto.Facturación. <br><br>'+
				 //'Saludos<br>'+
				 //globals.GCNombreUsuario+'<br>'+
				 FirmaEmail+
				 //'<img src="'+oFile.getName()+'">'+
				 '</html>'
			}
			break;
		}	
		case 'FrmNotas':
		{
			reportName = 'NotaVentaGC.jrxml';
			
			params = new java.util.HashMap()
			params.put('DesdeEjer', forms.FrmNotasGC.eje_cfa)
			params.put('HastaEjer', forms.FrmNotasGC.eje_cfa)
			params.put('DesdeNFact', forms.FrmNotasGC.nup_cfa)
			params.put('HastaNFact', forms.FrmNotasGC.nup_cfa)
			params.put('DesdeCliente', 1)
			params.put('HastaCliente', 999999)
			exportTo = 'pdf';//
			temp_file = plugins.file.createTempFile('Nota'+forms.FrmNotasGC.eje_cfa+utils.numberFormat(forms.FrmNotasGC.nup_cfa,'00000'), '.'+exportTo);
			//_temp_file = plugins.file.createTempFile('NameTempFile', '.pdf')
	
		    _attachment = temp_file.getParent() + '\\Nota' +forms.FrmNotasGC.eje_cfa+utils.numberFormat(forms.FrmNotasGC.nup_cfa,'00000')+'.pdf';
			//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
			try{
			plugins.jasperPluginRMI.runReport(server_name,reportName,_attachment,exportTo,params);
			}
			catch(e)
		    {
		    	application.output(e.toString())
		    }
			
			rawData = plugins.file.readFile(_attachment)
			
			
			
			name = '\\Nota'+forms.FrmNotasGC.eje_cfa+utils.numberFormat(forms.FrmNotasGC.nup_cfa,'00000');
			myFile = plugins.mail.createBinaryAttachment(name, rawData)
			EmailAdjuntar = new Array();
			if(rawData)	EmailAdjuntar = new Array(myFile);
			if(logo)
			{
				if(rawData)	Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			
			if(GCtbnotacabecera_to_tbmaestroclientes)	EmailTo = forms.FrmNotasGC.GCtbnotacabecera_to_tbmaestroclientes.emailcontacto;
			else EmailTo = null;
			EmailAsunto = 'Notificación envio Nota'
			EmailTexto = '<html>Estimado Cliente: <br><br>'+
						 'Reciba adjunta copia de la factura '+forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa +
						 ' con detalle de la mercancia.<br>'+
						 'Dpto.Facturación.<br><br>'+
						 //'Saludos<br>'+
						 //globals.GCNombreUsuario+'<br>'+
						 FirmaEmail+
						 //'<img src="'+oFile.getName()+'">'+
						 '</html>'
			break;
		}
		case 'FrmPedidos':
		{
			EmailTo = forms.FrmPedidosGC.emacl_cot 
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = null
			EmailTexto = FirmaEmail
			break;
		}
		case 'dlgOperarios':
		{
			EmailTo = forms.dlg_OperariosGC.email
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = null
			EmailTexto = FirmaEmail
			break;
		}
		case 'FrmOperarios':
		{
			EmailTo = forms.FrmOperariosGC.email
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = null
			EmailTexto = FirmaEmail
			break;
		}
		case 'FrmClientes':
		{
			EmailTo = forms.FrmClientesGC.emailcontacto 
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = null
			EmailTexto = FirmaEmail
			break;
		}
		case 'FrmClientes2':
		{
			EmailTo = forms.FrmClientesGC.emailcc;
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = null
			EmailTexto = FirmaEmail
			break;
		}
		case 'dlg_Clientes':
		{
			EmailTo = forms.dlg_ClientesGC.emailcontacto 
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = null
			EmailTexto = FirmaEmail
			break;
		}
		case 'dlg_Clientes2':
		{
			EmailTo = forms.dlg_ClientesGC.emailcc 
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = null
			EmailTexto = FirmaEmail
			break;
		}
		case 'FrmDelegaciones':
		{
			EmailTo = forms.FrmDelegacionesGC.emailcontacto 
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = null
			EmailTexto = FirmaEmail
			break;
		}
		case 'FrmTransportesGC':
		{
			EmailTo = forms.FrmTransportesGC.email
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = null
			EmailTexto = FirmaEmail
			break;
		}
		case 'dlg_BancosCuentasCargo':
		{
			EmailTo = forms.dlg_BancosCuentasCargoGC.email
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = null
			EmailTexto = FirmaEmail
			break;
		}
		case 'FrmProveedores':
		{
			EmailTo = forms.FrmProveedoresGC.email
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = null
			EmailTexto = FirmaEmail
			break;
		}
		case 'dlg_Proveedores':
		{
			EmailTo = forms.dlg_ProveedoresGC.email
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = null
			EmailTexto = FirmaEmail
			break;
		}
		case 'dlgAyuda':
		{
			EmailTo = forms.dlgAyudaGC.elements.mail.text;
			EmailAdjuntar = new Array()
			if(logo)
			{
				//Adjuntar = name.replace("\\","") + "; "			
				adjuntarLogo1()
				/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
				success = plugins.file.writeFile(oFile, logo);
				myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
				EmailAdjuntar = EmailAdjuntar.concat(myFile)
				Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				if(logo2)
				{
					adjuntarLogo2()
					/*oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
					success = plugins.file.writeFile(oFile, logo2);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
				}
			}
			else
			{
				Adjuntar = null;
			}
			EmailAsunto = null
			EmailTexto = FirmaEmail
			break;
		}
		case 'Docu_FrmFacturasCompras':
		{
			if(forms.FrmFacturasComprasGC.docupdf && forms.FrmFacturasComprasGC.filename)
			{
				var a = forms.FrmFacturasComprasGC.filename.lastIndexOf(".")
				//var b = "temp"
				var b = forms.FrmFacturasComprasGC.filename.substring(0,a)
				//get the 3 letter extension - INCLUDING the "."
				var c = forms.FrmFacturasComprasGC.filename.substring(a)
				tempFile = /*plugins.file.createFile(filename)*/plugins.file.createTempFile(b,c);
				success = plugins.file.writeFile(tempFile, forms.FrmFacturasComprasGC.docupdf);
				rawData = plugins.file.readFile(tempFile)
				name = b.toString()+c.toString();
				myFile = plugins.mail.createBinaryAttachment(name, rawData)
				if(rawData)	EmailAdjuntar = new Array(myFile);
				if(logo)
				{
					if(rawData)	Adjuntar = name.replace("\\","") + "; "			
					adjuntarLogo1()
					/*oFile = plugins.file.createFile('LOGO'+globals.CONTANombreEmpresa+'_1.jpg')
					success = plugins.file.writeFile(oFile, logo);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
					if(logo2)
					{
						adjuntarLogo2()
						/*oFile = plugins.file.createFile('LOGO'+globals.CONTANombreEmpresa+'_2.jpg')
						success = plugins.file.writeFile(oFile, logo2);
						myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
						EmailAdjuntar = EmailAdjuntar.concat(myFile)
						Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
					}
				}
			}
			EmailTo = null
			EmailAsunto = 'Envio Documento'
			//var URLLogo = getLogo()
			/*EmailTexto = 'Estimado Cliente: \n\n'+
						 'Reciba adjunta copia de la factura '+forms.FrmFacturas.eje_cfa+utils.numberFormat(forms.FrmFacturas.nup_cfa,'00000')+forms.FrmFacturas.ser_cfa+
						 ' con detalle de la mercancia.\n\n'+
						 'Dpto.Facturación. '*/
			EmailTexto = FirmaEmail
			break;
		}
		case 'Envio_OSATU':
		{
			if(forms.dlgEditarDatosOSATU.xml_enviado_osatu)
			{
				var filename = 'Envio_OSATU.xml'
				a = filename.lastIndexOf(".")
				//var b = "temp"
				b = filename.substring(0,a)
				//get the 3 letter extension - INCLUDING the "."
				c = filename.substring(a)
				tempFile = /*plugins.file.createFile(filename)*/plugins.file.createTempFile(b,c);
				success = plugins.file.writeFile(tempFile, forms.dlgEditarDatosOSATU.xml_enviado_osatu);
				rawData = plugins.file.readFile(tempFile)
				name = b.toString()+c.toString();
				myFile = plugins.mail.createBinaryAttachment(name, rawData)
				if(rawData)	EmailAdjuntar = new Array(myFile);
				if(logo)
				{
					if(rawData)	Adjuntar = name.replace("\\","") + "; "			
					adjuntarLogo1()
					/*oFile = plugins.file.createFile('LOGO'+globals.CONTANombreEmpresa+'_1.jpg')
					success = plugins.file.writeFile(oFile, logo);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
					if(logo2)
					{
						adjuntarLogo2()
						/*oFile = plugins.file.createFile('LOGO'+globals.CONTANombreEmpresa+'_2.jpg')
						success = plugins.file.writeFile(oFile, logo2);
						myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
						EmailAdjuntar = EmailAdjuntar.concat(myFile)
						Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
					}
				}
			}
			EmailTo = null
			EmailAsunto = 'Envio Documento'
			//var URLLogo = getLogo()
			/*EmailTexto = 'Estimado Cliente: \n\n'+
						 'Reciba adjunta copia de la factura '+forms.FrmFacturas.eje_cfa+utils.numberFormat(forms.FrmFacturas.nup_cfa,'00000')+forms.FrmFacturas.ser_cfa+
						 ' con detalle de la mercancia.\n\n'+
						 'Dpto.Facturación. '*/
			EmailTexto = FirmaEmail
			break;
		}
		case 'Envio_OSATU':
		{
			if(forms.dlgEditarDatosOSATU.fichero_respuesta_osatu)
			{
				filename = 'Respuesta_OSATU.xml'
				a = filename.lastIndexOf(".")
				//var b = "temp"
				b = filename.substring(0,a)
				//get the 3 letter extension - INCLUDING the "."
				c = filename.substring(a)
				tempFile = /*plugins.file.createFile(filename)*/plugins.file.createTempFile(b,c);
				success = plugins.file.writeFile(tempFile, forms.dlgEditarDatosOSATU.xml_enviado_osatu);
				rawData = plugins.file.readFile(tempFile)
				name = b.toString()+c.toString();
				myFile = plugins.mail.createBinaryAttachment(name, rawData)
				if(rawData)	EmailAdjuntar = new Array(myFile);
				if(logo)
				{
					if(rawData)	Adjuntar = name.replace("\\","") + "; "			
					adjuntarLogo1()
					/*oFile = plugins.file.createFile('LOGO'+globals.CONTANombreEmpresa+'_1.jpg')
					success = plugins.file.writeFile(oFile, logo);
					myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo)
					EmailAdjuntar = EmailAdjuntar.concat(myFile)
					Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
					if(logo2)
					{
						adjuntarLogo2()
						/*oFile = plugins.file.createFile('LOGO'+globals.CONTANombreEmpresa+'_2.jpg')
						success = plugins.file.writeFile(oFile, logo2);
						myFile = plugins.mail.createBinaryAttachment(oFile.getName(), logo2)
						EmailAdjuntar = EmailAdjuntar.concat(myFile)
						Adjuntar = Adjuntar + oFile.getName().replace("\\","") + "; "*/
					}
				}
			}
			EmailTo = null
			EmailAsunto = 'Envio Documento'
			//var URLLogo = getLogo()
			/*EmailTexto = 'Estimado Cliente: \n\n'+
						 'Reciba adjunta copia de la factura '+forms.FrmFacturas.eje_cfa+utils.numberFormat(forms.FrmFacturas.nup_cfa,'00000')+forms.FrmFacturas.ser_cfa+
						 ' con detalle de la mercancia.\n\n'+
						 'Dpto.Facturación. '*/
			EmailTexto = FirmaEmail
			break;
		}
		default: break;
	}
	
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"11F09E1D-6D7C-44D6-B05A-2899A89BECA1"}
 */
function onActiondeleteattachment(event) {
	// TODO Auto-generated method stub
	forms.dlgEnvioMailGC.EmailAdjuntar = new Array()
	forms.dlgEnvioMailGC.Adjuntar = null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B439EF8-7B48-43DB-805D-6E0EB18FCC71"}
 */
function onActionAdjuntar(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		BtnUploaddocu(event) 
	}
	else
	{
		onActionStreamFileToServer(event) 
	}
}

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"394C8805-E499-4B08-87DF-209103F13AF6",variableType:8}
 */
var currentIndex = -1;

/**
 *
 * @properties={typeid:35,uuid:"81B373A5-D29D-4CAC-B1F1-5766208B4A1C",variableType:-4}
 */
var files_positions = null;

/**
 *
 * @properties={typeid:35,uuid:"49D7EC46-9DC3-4FDD-88B5-25F005DCAD7B",variableType:-4}
 */
var fromServer = false;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"3E2C4202-DBAC-4329-95B0-19AD10BA85A7"}
 */
var subFolder = "/";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"830A40F7-7587-46A2-B61C-C4826153DD9B"}
 */
var Fichero = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8882D661-F368-4B23-8962-BBEF4B63980F"}
 */
var RutaFichero = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"D073E82B-3F62-414D-A728-27743B287768"}
 */
function onActionStreamFileToServer(event) 
{
	fromServer = false;
	// initialize the progress state
	// validate the relative path if provided
	if(subFolder)
	{
		var currentFile = plugins.file.showFileOpenDialog( 1, gcfechalimite_usuarios.startdirectory, false, null, null, 'Seleccione el Fichero a Adjuntar' );
		if (currentFile) 
		{
			Fichero = currentFile.getName()
			RutaFichero = currentFile
			var monitor;
			currentIndex = -1;
			if(subFolder)
			{
				files_positions = new Array();
				files_positions[0] = currentFile.getName();
				var serverPath = subFolder + currentFile.getName();
				// store in the default location (/application_server/server/webapps/ROOT/uploads)
				//monitor = plugins.file.streamFilesToServer( currentFile, serverPath , null );
				//uploadCallbackFunction(currentFile)
				// show the progress of the files sent to the server
				
				var _attachment = currentFile;
				//plugins.jasperPluginRMI.jasperReport(server_name,reportName,null,'view',params)	
								
				var rawData = plugins.file.readFile(_attachment)
				
				
				
				var name = currentFile.getName();
				var myFile = plugins.mail.createBinaryAttachment(name, rawData)
				//var n = EmailAdjuntar.length
				EmailAdjuntar = EmailAdjuntar.concat(myFile);
				Adjuntar += name.replace("\\","") + "; "
			}
			
		}
	}
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 * @properties={typeid:24,uuid:"30B59747-F094-47FB-A985-EF64DD45FAAE"}
 */
function uploadCallbackFunction(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
    plugins.file.streamFilesToServer(_oFile, doImportFile);
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 * @properties={typeid:24,uuid:"6BE31668-D051-489B-9152-E29A89DC92BC"}
 */
function doImportFile(_oFile) {
    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
    
	RutaFichero =  _oFile.getName();
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		var rutapred = plugins.file.getDefaultUploadLocation()
	    _oFile = rutapred + '/' +_oFile.getName();
		RutaFichero = _oFile
	}
	else
	{
		_oFile = RutaFichero
	}

    //
    // Use BufferedReader so we don't have to read the whole file into memory
    //
    var _oFR = new Packages.java.io.FileInputStream(_oFile),
        _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
        _oBR = new Packages.java.io.BufferedReader(_oIR),
        _sLine = "dummy",
        _nReadLine = 0;

    // using a database transaction (might/will) speed things up
    databaseManager.startTransaction();

    try {
        while (_sLine) {
            _sLine = _oBR.readLine();
            _nReadLine++;

            if (_sLine) {

                // Put your processing code here
            }
        }
        // Save any unsaved data
        databaseManager.saveData();

        //
        //do NOT forget this close! to prevent memory leaks
        //
        _oBR.close();

        // Close the database transaction
        databaseManager.commitTransaction();
       
    } catch (_oErr) {
    	_oBR.close();
    	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) 
    	{
    		plugins.webnotificationsToastr.error("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+LOGGINGLEVEL.ERROR,'¡Error!')
			plugins.webnotificationsToastr.error("ERROR: " + _oErr+'\n'+LOGGINGLEVEL.ERROR,'¡Error!')
    	}
		else 
		{
        globals.GCshowErrorDialog("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
        //application.output("ERROR: " + _oFile.getName() + " at row " + _nReadLine, LOGGINGLEVEL.ERROR);
        globals.GCshowErrorDialog("ERROR: " + _oErr+'\n'+LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
        //application.output("ERROR: " + _oErr, LOGGINGLEVEL.ERROR);
		}
        databaseManager.rollbackTransaction();
    } finally {
        //
        // garbage collection
        //
        _oFR = null;
        _oIR = null;
        _oBR = null;
        Fichero = null
		RutaFichero = null
        
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"574AF7D1-4259-41F9-8B02-4CE9709642A4"}
 */
function BtnUploaddocu(event) 
{
	plugins.file.showFileOpenDialog( 1, gcfechalimite_usuarios.startdirectory, false, null, uploadCallbackFunctiondocu, 'Seleccione documento a adjuntar.' );
	
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
*
 * @properties={typeid:24,uuid:"3BB43A48-DC82-4C1D-9064-86D06194058F"}
 */
function uploadCallbackFunctiondocu(_oFile) {
    // Streaming the file to the server and call the callback method when this is done
    plugins.file.streamFilesToServer(_oFile, doImportFiledocu);
	
}

/**
* @param {plugins.file.JSFile} _oFile
*
 *
 *
 *
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"45625904-5AD9-4FE5-ACCB-120B6E7F96FB"}
 */
function doImportFiledocu(_oFile) {
    // We need to add the upload path defined in the Servoy-Admin pages to the filename 
    var NombreFichero = _oFile.getName()
	//var RutaFichero =  _oFile;
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT)
	{
		var rutapred = plugins.file.getDefaultUploadLocation()
	    _oFile = rutapred + '/' +_oFile.getName();
		RutaFichero = _oFile
	}
	else
	{
		_oFile = RutaFichero
	}

    //
    // Use BufferedReader so we don't have to read the whole file into memory
    //
    var _oFR = new Packages.java.io.FileInputStream(_oFile),
        _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
        _oBR = new Packages.java.io.BufferedReader(_oIR),
        _sLine = "dummy",
        _nReadLine = 0;

    // using a database transaction (might/will) speed things up
    databaseManager.startTransaction();

    try {
        while (_sLine) {
            _sLine = _oBR.readLine();
            _nReadLine++;

            if (_sLine) {

                // Put your processing code here
            }
        }
        
       var rawData = plugins.file.readFile(_oFile)
		
		var name = NombreFichero;
				var myFile = plugins.mail.createBinaryAttachment(name, rawData)
				var n = EmailAdjuntar.length
				EmailAdjuntar = EmailAdjuntar.concat(myFile);
				Adjuntar += name.replace("\\","") + "; "
        //
        //do NOT forget this close! to prevent memory leaks
        //
        _oBR.close();

        // Close the database transaction
        databaseManager.commitTransaction();
       
    } catch (_oErr) {
    	_oBR.close();
    	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) 
    	{
    		plugins.webnotificationsToastr.error("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+LOGGINGLEVEL.ERROR,'¡Error!')
			plugins.webnotificationsToastr.error("ERROR: " + _oErr+'\n'+LOGGINGLEVEL.ERROR,'¡Error!')
    	}
		else 
		{
        globals.GCshowErrorDialog("ERROR: " + _oFile.getName() + " at row " + _nReadLine+'\n'+LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
        //application.output("ERROR: " + _oFile.getName() + " at row " + _nReadLine, LOGGINGLEVEL.ERROR);
        globals.GCshowErrorDialog("ERROR: " + _oErr+'\n'+LOGGINGLEVEL.ERROR,null,'Aceptar',null,null,null)
        //application.output("ERROR: " + _oErr, LOGGINGLEVEL.ERROR);
		}
        databaseManager.rollbackTransaction();
    } finally {
        //
        // garbage collection
        //
        _oFR = null;
        _oIR = null;
        _oBR = null;
       
        
    }
}

/**
 * @properties={typeid:24,uuid:"C8A8876C-589B-44E9-8F98-C14FA4AD2885"}
 * @return {String}
 * @SuppressWarnings(unused)
 * @SuppressWarnings(wrongparameters)
 */
function getLogo()
{
	var oFile = plugins.file.createFile('Logo'/*+'.jpg'*/)//plugins.file.createTempFile(filename,'.pdf');
	var success = plugins.file.writeFile(oFile, logo);
	var tableName = 'parametrosaplicacion';
	var columnName = 'logo';
	var id = nºempresa;
	var mimeType = oFile.getContentType();
	var fileName = oFile.getName();
	var URL = 'media:///servoy_blobloader?servername=' + globals.GCconex
	URL += '&tablename=' + tableName;
	URL += '&dataprovider=' + columnName;
	URL += '&rowid1=' + id;
	URL += '&mimetype=' + mimeType;
	URL += '&filename=' + fileName;
	//return '<html><body><a target="_blank" href="'+URL+'">test</a></body></html>';
	var html = '';
	html += '<table border = "0" ><tr>';
	html += '<img border = "1" src = \"'+URL+'"\ >';
	html += '</td></tr></table>';
	html += '</html>';
	return  html;
	
}

/**
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"C707D90E-7383-4AA4-889A-15B1C3EDF023"}
 * @SuppressWarnings(wrongparameters)
 */
function adjuntarLogo1(){
	//var oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_1.jpg')
	//var success = plugins.file.writeFile(oFile, logo);
	var name = 'LOGO'+globals.GCNombreEmpresa+'_1.jpg';
	var myFile = plugins.mail.createBinaryAttachment(/*oFile.getName()*/name, logo)
	if(EmailAdjuntar.length > 0) EmailAdjuntar = EmailAdjuntar.concat(myFile)
	else EmailAdjuntar = new Array(myFile);
	Adjuntar = Adjuntar + name.replace("\\","") + "; "	
}

/**
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:24,uuid:"DC375AFB-4C3F-4C48-9929-675242D7A308"}
 * @SuppressWarnings(wrongparameters)
 */
function adjuntarLogo2(){
	//var oFile = plugins.file.createFile('LOGO'+globals.NombreEmpresa+'_2.jpg')
	//var success = plugins.file.writeFile(oFile, logo2);
	var name = 'LOGO'+globals.GCNombreEmpresa+'_2.jpg';
	var myFile = plugins.mail.createBinaryAttachment(name, logo2)
	if(EmailAdjuntar.length > 0) EmailAdjuntar = EmailAdjuntar.concat(myFile)
	else EmailAdjuntar = new Array(myFile);
	Adjuntar = Adjuntar + name.replace("\\","") + "; "
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"261B08FC-9E50-4AE2-8DC5-E6BE1C3093A0"}
 */
function btn_firma(event) {
	if(globals.GClogin_usuario != null && globals.GClogin_usuario != '')
	{
		if(globals.GCconex) var conex = globals.GCconex;
		else conex = 'conexiongestioncomercialag';
		
		var query = "select ID from usuarios where cod_us =" + globals.GClogin_usuario;
		var dataset = databaseManager.getDataSetByQuery(conex, query, null, 1)
		var uuid = dataset.getValue(1, 1)
		//var uuid = gcfechalimite_usuarios.id
		var result = forms.dlgFirmaEmailGC.foundset.selectRecord(uuid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlgFirmaEmailGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlgFirmaEmailGC.foundset.getSize())
			{
				forms.dlgFirmaEmailGC.foundset.setSelectedIndex(1)
				break;
			}
			forms.dlgFirmaEmailGC.foundset.setSelectedIndex(forms.dlgFirmaEmailGC.foundset.getSize());
			result = forms.dlgFirmaEmailGC.foundset.selectRecord(uuid);
		}
		
		if(!globals.GCisEditing()) globals.GCstartEditing()
		
		
		
		//setup the method to execute when the dialog closes
		//globals.GCdialog_performMethod = 'forms.lst_Presupuesto_Lineas.sub_deleteAddressItem()'

		//show the "fake" dialog
		
		globals.GCshowDialogFirmaEmail2('Firma de correo electrónico', 1, null, null, true, null, null, null, null, null);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"35510BB9-C209-4131-8203-3E9B663AA227"}
 */
function btn_OtrosContactos(event) {
	if(EmailTo)
	{
		try {
			/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var BBDDMaestras = dataset.getValue(1, 4)
			if(BBDDMaestras == '1')
			{*/
				// create a popup menu
				var menu = plugins.window.createPopupMenu();
				// add a menu item
								
				var query = "select a.email from [tbmaestroclientescontactos] as a inner join tbmaestroclientes as b "+
							"on a.idcliente = b.IdCliente where b.EmailContacto = '"+EmailTo+"'";
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
				var rows = dataset.getMaxRowIndex()
				if(rows > 0)
				{
					for(var i=1;i<=rows;i++)
					{
						var titulo = dataset.getValue(i,1);	
						//titulo = titulo.toUpperCase()
						menu.addMenuItem(titulo, MenuContactos, null);
					}			
					
					
					
					if (event.getSource()) {
						// display the popup over the component which is the source of the event
						menu.show(event.getSource(),20,0);					
					}	
				}
				else
				{
					query = "select a.email from [tbmaestroproveedorescontactos] as a inner join tbmaestroproveedores as b "+
								"on a.idcontacto = b.codpro where b.email = '"+EmailTo+"'";
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
					var rows2 = dataset.getMaxRowIndex()
					if(rows2 > 0)
					{
						for(i=1;i<=rows2;i++)
						{
							titulo = dataset.getValue(i,1);	
							//titulo = titulo.toUpperCase()
							menu.addMenuItem(titulo, MenuContactos, null);
						}			
						
						
						
						if (event.getSource()) {
							// display the popup over the component which is the source of the event
							menu.show(event.getSource(),20,0);					
						}	
					}
					if(!rows && !rows2)
					{
						titulo = 'Esa cuenta de correo no dispone de otros contactos en la ficha maestra.';	
						//titulo = titulo.toUpperCase()
						menu.addMenuItem(titulo, null, null);
						
						if (event.getSource()) {
							// display the popup over the component which is the source of the event
							menu.show(event.getSource(),20,20);					
						}	
					}					
					
				}
			}
			catch (e) {
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(e.toString(),'¡Error!')
				else globals.GCshowErrorDialog(e.toString(),null,'Aceptar',null,null,null)
			}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 *
 *
 * @properties={typeid:24,uuid:"FCBF7820-DE5E-43AE-BF29-53803A0DF2CF"}
 */
function MenuContactos(event) {
	if(EmailCC.indexOf(arguments[4]) < 0)
	{
		if(!EmailCC) EmailCC = arguments[4];
		else EmailCC = EmailCC+','+arguments[4];		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"461B4ED5-8AA4-4B4E-8033-E4B2CECED646"}
 */
function btn_OtrosContactos2(event) {
	if(EmailTo)
	{
		try {
			/*var query = 'select * from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var BBDDMaestras = dataset.getValue(1, 4)
			if(BBDDMaestras == '1')
			{*/
				// create a popup menu
				var menu = plugins.window.createPopupMenu();
				// add a menu item
								
				var query = "select a.email from [tbmaestroclientescontactos] as a inner join tbmaestroclientes as b "+
							"on a.idcliente = b.IdCliente where b.EmailContacto = '"+EmailTo+"'";
				var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
				var rows = dataset.getMaxRowIndex()
				if(rows > 0)
				{
					for(var i=1;i<=rows;i++)
					{
						var titulo = dataset.getValue(i,1);	
						//titulo = titulo.toUpperCase()
						menu.addMenuItem(titulo, MenuContactos2, null);
					}			
					
					
					
					if (event.getSource()) {
						// display the popup over the component which is the source of the event
						menu.show(event.getSource(),20,0);					
					}	
				}
				else
				{
					query = "select a.email from [tbmaestroproveedorescontactos] as a inner join tbmaestroproveedores as b "+
								"on a.idcontacto = b.codpro where b.email = '"+EmailTo+"'";
					dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
					var rows2 = dataset.getMaxRowIndex()
					if(rows2 > 0)
					{
						for(i=1;i<=rows2;i++)
						{
							titulo = dataset.getValue(i,1);	
							//titulo = titulo.toUpperCase()
							menu.addMenuItem(titulo, MenuContactos, null);
						}			
						
						
						
						if (event.getSource()) {
							// display the popup over the component which is the source of the event
							menu.show(event.getSource(),20,0);					
						}						
					}
					if(!rows && !rows2)
					{
						titulo = 'Esa cuenta de correo no dispone de otros contactos en la ficha maestra.';	
						//titulo = titulo.toUpperCase()
						menu.addMenuItem(titulo, null, null);
						
						if (event.getSource()) {
							// display the popup over the component which is the source of the event
							menu.show(event.getSource(),20,20);					
						}	
					}	
				}
			}
			catch (e) {
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error(e.toString(),'¡Error!')
				else globals.GCshowErrorDialog(e.toString(),null,'Aceptar',null,null,null)
			}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"8AD28B0A-1582-47A4-B18B-380B9E4B078B"}
 */
function MenuContactos2(event) {
	if(EmailCCO.indexOf(arguments[4]) < 0)
	{
		if(!EmailCCO) EmailCCO = arguments[4];
		else EmailCCO = EmailCCO+','+arguments[4];		
	}
}
