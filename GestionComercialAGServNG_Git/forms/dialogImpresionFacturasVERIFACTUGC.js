/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"C329A76C-AB24-48D1-BBE8-B36906CAFA5B",variableType:-4}
 */
var Letras = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

//,'GB'

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"A60AE4EE-45D1-423B-80A9-0D25009FC276",variableType:-4}
 */
var UE = new Array('DE','AT','BE','BG','CY','HR','DK','SK','SI','EE','FI','FR','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','CZ','RO','SE');

/**
 *
 * @properties={typeid:24,uuid:"230D9ACC-108C-4AC7-B0BB-9199236EC19A"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Impresion Facturas VERIFACTU').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"64A67389-E35C-41A5-B50C-C3EEB31CA5F8"}
 * @SuppressWarnings(wrongparameters)
 * 
 * @AllowToRunInFind
 */
function btn_ok()
{	
	if(!gcparametrosaplicacion_to_parametrosaplicacion.empresa) 
	{
		globals.core_formulario_TBAI = 'dialogImpresionFacturasVERIFACTUGC';
		globals.GCshowErrorDialog("Falta el nombre de la empresa (emisor de la factura) en los parametros de la aplicación.\n\nEs un campo obligatorio para realizar el envío a VERIFACTU.", null, null, null, null, null)
	}
	else if(!gcparametrosaplicacion_to_parametrosaplicacion.cif) 
	{	
		globals.core_formulario_TBAI = 'dialogImpresionFacturasVERIFACTUGC';
		globals.GCshowErrorDialog("Falta el cif de la empresa (emisor de la factura) en los parametros de la aplicación.\n\nEs un campo obligatorio para realizar el envío a VERIFACTU.", null, null, null, null, null)
	}
	/*else if(!gcparametrosaplicacion_to_parametrosaplicacion.cifcertifdigital) 
	{	
		globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
		globals.GCshowErrorDialog("Falta el CIF/DNI del certificado digital a emplear para firmar las facturas a indicar en los parametros de la aplicación.", null, null, null, null, null)
	}*/
	else if(!forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.desccliente) 
	{	
		globals.core_formulario_TBAI = 'dialogImpresionFacturasVERIFACTUGC';
		globals.GCshowErrorDialog("Falta el nombre del cliente en su ficha. Es un campo obligatorio para realizar el envío a VERIFACTU.", null, null, null, null, null)
	}
	else if(!forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.direccion) 
	{	
		globals.core_formulario_TBAI = 'dialogImpresionFacturasVERIFACTUGC';
		globals.GCshowErrorDialog("Falta la dirección del cliente en su ficha. Es un campo obligatorio para realizar el envío a VERIFACTU.", null, null, null, null, null)
	}
	else if(!forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.pais) 
	{	
		globals.core_formulario_TBAI = 'dialogImpresionFacturasVERIFACTUGC';
		globals.GCshowErrorDialog("Falta el pais del cliente en su ficha. Es un campo obligatorio para realizar el envío a VERIFACTU.", null, null, null, null, null)
	}
	else if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.pais == 'ES' && 
			!forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal ) 
	{	
		globals.core_formulario_TBAI = 'dialogImpresionFacturasVERIFACTUGC';
		globals.GCshowErrorDialog("Falta el código postal del cliente en su ficha. Es un campo obligatorio en clientes nacionales para realizar el envío a VERIFACTU.", null, null, null, null, null)
	}
	else
	{
		var desdeeje = forms.dlg_ImpresionFacturasVERIFACTUGC.DesdeEje;
		if(desdeeje == null || desdeeje == '') desdeeje = 0;
		var desdeser = forms.dlg_ImpresionFacturasVERIFACTUGC.DesdeSer;
		if(desdeser == null || desdeser == '') desdeser = '';
		var desdenup = forms.dlg_ImpresionFacturasVERIFACTUGC.DesdeNup;
		if(desdenup == null || desdenup == '') desdenup = 1;
		var hastaeje = forms.dlg_ImpresionFacturasVERIFACTUGC.HastaEje;
		if(hastaeje == null || hastaeje == '') hastaeje = 9999;
		var hastaser = forms.dlg_ImpresionFacturasVERIFACTUGC.HastaSer;
		if(hastaser == null || hastaser == '') hastaser = 'ZZ';
		var hastanup = forms.dlg_ImpresionFacturasVERIFACTUGC.HastaNup;
		if(hastanup == null || hastanup == '') hastanup = 999999999;
		var desdecli = forms.dlg_ImpresionFacturasVERIFACTUGC.DesdeCliente;
		if(desdecli == null || desdecli == '') desdecli = 1;
		var hastacli = forms.dlg_ImpresionFacturasVERIFACTUGC.HastaCliente;
		if(hastacli == null || hastacli == '') hastacli = 9999999999;
		var rutacertificado = '';
		var rutacertificadokey = '';
		
		if(forms.dlg_ImpresionFacturasVERIFACTUGC.FormatoFactura == 1) var ffra = 1;
		else if(forms.dlg_ImpresionFacturasVERIFACTUGC.FormatoFactura2 == 1) ffra = 2;
		else if(forms.dlg_ImpresionFacturasVERIFACTUGC.FormatoFactura3 == 1) ffra = 3;
		
		var xmltbai = forms.dlg_ImpresionFacturasVERIFACTUGC.xmltbai;
		var anulatbai = forms.dlg_ImpresionFacturasVERIFACTUGC.anulatbai
		var modificartbai = forms.dlg_ImpresionFacturasVERIFACTUGC.modificartbai
		var query = "select mac,fechaenviofichero,fecha_cfa from tbfacturacabecera "+
		"WHERE (tbFacturaCabecera.eje_cfa >= "+desdeeje+
	     " AND tbFacturaCabecera.eje_cfa <= "+hastaeje+") "+
	     "AND (tbFacturaCabecera.ser_cfa >= '"+desdeser+"' "+
	     "AND tbFacturaCabecera.ser_cfa <= '"+hastaser+"') "+
	     "AND (tbFacturaCabecera.nup_cfa >= "+desdenup+
	     " AND tbFacturaCabecera.nup_cfa <= "+hastanup+") "+
	     "AND (tbFacturaCabecera.clie_cfa BETWEEN "+desdecli+" AND "+hastacli+")";
	     var dataset55 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
		 var macfra = dataset55.getValue(1,1);
	     var fechenvfra = dataset55.getValue(1,2);
	     var fechfra = dataset55.getValue(1,3);
		if(application.getApplicationType() != APPLICATION_TYPES.SMART_CLIENT)
		{
			if(xmltbai == 1 || anulatbai == 1) 
			{
				globals.core_formulario_TBAI = 'dialogImpresionFacturasVERIFACTUGC';
				globals.GCshowInfoDialog("El envío al servicio VERIFACTU sólo está disponible a traves de aplicación escritorio SmartClient", null, null, null, null, null)
			}
			application.sleep(2000)
			
			if(!anulatbai || anulatbai != 1)
			{
				//if(forms.FrmFacturasGC.mac && forms.FrmFacturasGC.fechaenviofichero) globals.btn_runJasperReportFacturaVentasTBAI(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli,ffra)
				if(macfra && fechenvfra) globals.btn_runJasperReportFacturaVentasTBAI(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli,ffra)
				else
				{	
					globals.core_formulario_TBAI = 'dialogImpresionFacturasVERIFACTUGC';
					globals.GCshowInfoDialog("La factura no ha sido enviada aún a VERIFACTU. No es posible visualizar/imprimir la factura sin antes haberla enviado.", null, null, null, null, null)
				}
			}
		}
		else
		{
			//var n = globals.GCcheckCIF(utils.stringTrim(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.cif))
			//var n3 = globals.GCcheckNSS(utils.stringTrim(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.cif))
			//if(forms.FrmFacturasGC.fecha_cfa > new Date())
			if(fechfra > new Date())
			{
				globals.core_formulario_TBAI = 'dialogImpresionFacturasVERIFACTUGC';
				globals.GCshowInfoDialog("El servicio VERIFACTU no permite enviar facturas con fecha posterior a la actual", null, null, null, null, null)
			}
			/*else if(n == false && n3 == false) 
			{
				globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
				globals.GCshowInfoDialog("El CIF del cliente no es correcto.", null, null, null, null, null)
			}*/
			else if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.autofactura == 1)
			{
				application.sleep(2500)
				
				if(!anulatbai || anulatbai != 1)
				{
					if(macfra && fechenvfra) 
					{
						globals.btn_runJasperReportFacturaVentasTBAI(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli,ffra)
					}
					else 
					{
						globals.core_formulario_TBAI = 'dialogImpresionFacturasVERIFACTUGC';
						globals.GCshowInfoDialog("Este Cliente genera AutoFacturas!!\n\nDebe facilitarte los datos de VERIFACTU de los que dispone tras la emisión de la AutoFactura\nTras importar los datos se podrá visualizar la factura.", null, null, null, null, null)
					}
				}
			}
			else
			{
				if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || 
						gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
						gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || 
						gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){
							if(globals.GCconex == 'conexiongestionmlegazpipruebas') 
							{
								rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\cert_ml.pem";
								rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\cert_ml_key.pem";
							}
							else if(globals.GCconex == 'conexiongestiontmendizabalpruebas') 
							{
								rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\cert_tmendizabal.pem";
								rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\cert_tmendizabal_key.pem";
							}
							else if(globals.GCconex == 'conexiongestionolabemarpruebas') 
							{
								rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\cert_olabemar.pem";
								rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\cert_olabemar_key.pem";
							}
							else if(globals.GCconex == 'conexiongestionsectorvertical') 
							{
								rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\cert_sv.pem";
								rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\cert_sv_key.pem";	
								//rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai.pem";
								//rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai_key.pem";
							}
							else if(globals.GCconex == 'conexiongestionamsorolla') 
							{
								rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\cert_amsorolla.pem";
								rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\cert_amsorolla_key.pem";	
								//rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai.pem";
								//rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai_key.pem";
							}
							else if(globals.GCconex == 'conexiongestiontedelbi') 
							{
								rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\cert_tedelbi.pem";
								rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\cert_tedelbi_key.pem";	
								//rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai.pem";
								//rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai_key.pem";
							}
							else if(globals.GCconex == 'conexiongestiongm') 
							{
								rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\cert_gm.pem";
								rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\cert_gm_key.pem";	
								//rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai.pem";
								//rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai_key.pem";
							}
							/*else if(globals.GCconex == 'conexiongestioncostaluz') 
							{
								rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\cert_costaluz.pem";
								rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\cert_costaluz_key.pem";	
								//rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai.pem";
								//rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai_key.pem";
							}*/
							else if(globals.GCconex == 'conexiongestioncomercialag')
							{
								rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai.pem";
								rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai_key.pem";
							}
							/*else if(globals.GCconex == 'conexiongestioncomercialagdemo' || globals.GCconex == 'conexiongestioncomercialagdemo2')
							{
								rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai_demo.pem";
								rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai_demo_key.pem";
							}*/
				}
				else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || 
						gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
						gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
					rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\certif_vizcaya_ticketbai.pem";
					rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\certif_vizcaya_ticketbai_key.pem";
				}
				else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || 
						gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
						gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || 
						gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
							if(globals.GCconex == 'conexiongestionzusipruebas')
							{
								rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\certif_alaba_ticketbai.pem";
								rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\certif_alaba_ticketbai_key.pem";
							}
				}
				/*else {
					rutacertificado = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai.pem";
					rutacertificadokey = plugins.file.getHomeFolder()+"\\.servoy\\certif_ticketbai_key.pem";
				}*/
				
				var f = plugins.file.convertToJSFile(rutacertificado);
				var f2 = plugins.file.convertToJSFile(rutacertificadokey);
				
				if(f && f.exists() && f2 && f2.exists())
				{
					if(xmltbai == 1)
					{
						/*var client = plugins.http.createNewHttpClient();
						if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
						gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){		
							if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0 || forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == null) 
							{
								var request = client.createGetRequest('https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta');
								var hrequest = client.createHeadRequest('https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta');
								var trequest = client.createTraceRequest('https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta');
							}
							else
							{
								request = client.createGetRequest('https://tbai.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta');
								hrequest = client.createHeadRequest('https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta').executeRequest().getStatusCode();
								trequest = client.createTraceRequest('https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta').executeRequest().getStatusCode();
							}
						}
						else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
						gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
							if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0 || forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == null) 
							{
								request = client.createGetRequest('https://pruesarrerak.bizkaia.eus/N3B4000M/aurkezpena');
							}
							else
							{
								request = client.createGetRequest('https://sarrerak.bizkaia.eus/N3B4000M/aurkezpena');
							}
						}
						else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
						gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
							if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0 || forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == null) 
							{
								request = client.createGetRequest('https://pruebas-ticketbai.araba.eus/TicketBAI/v1/facturas/');
							}
							else
							{
								request = client.createGetRequest('https://ticketbai.araba.eus/TicketBAI/v1/facturas/');
							}
						}
						var response = request.executeRequest();
						var httpCode = response.getStatusCode(); // httpCode 200 is ok"
						var content = response.getResponseBody();
						application.output(content)
						if(httpCode != 200) globals.GCshowErrorDialog("El Servicio TicketBAI de Hacienda no esta disponible en este momento. Probablemente se encuentre en mantenimiento.\n\nEspere a que el servicio se restaure.", null, null, null, null, null)
						else */
							GenerarXMLTBAI(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
					}
					else if(modificartbai == 1)
					{
						GenerarXMLZuzenduAltaTBAI(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
						//GenerarXMLZuzenduSubsanarTBAI(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
					}
					else if(anulatbai == 1)
					{
						globals.core_formulario_TBAI = 'dialogImpresionFacturasVERIFACTUGC';
						var methd = 'forms.dialogImpresionFacturasVERIFACTUGC.AnularTBAIQuestion(event)'
						globals.GCshowQuestionDialog("¿Desea realmente anular la factura enviada a VERIFACTU?\n\n(Una vez anulada en VERIFACTU se debe borrar la factura ya que no hay posibilidad de volver a subirla.)",methd,'No','Si',null,null)
						//GenerarXMLAnulaTBAI(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
					}
					//else if(anulatbai == 1) GenerarXMLZuzenduAnulaTBAI(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
				}
				else
				{
					if(xmltbai == 1 || modificartbai == 1 || anulatbai == 1)
					{
						globals.core_formulario_TBAI = 'dialogImpresionFacturasVERIFACTUGC';
						globals.GCshowErrorDialog("Para realizar el envío a VERIFACTU falta certificado digital en la ruta "+plugins.file.getHomeFolder()+
							"\\.servoy\\ y en formato .pem\n\nPóngase en contacto con AG Informática", null, null, null, null, null)
					}
				}
				application.sleep(2500)
				
				if(!anulatbai || anulatbai != 1)
				{
					query = "select mac,fechaenviofichero,fecha_cfa from tbfacturacabecera "+
					"WHERE (tbFacturaCabecera.eje_cfa >= "+desdeeje+
				     " AND tbFacturaCabecera.eje_cfa <= "+hastaeje+") "+
				     "AND (tbFacturaCabecera.ser_cfa >= '"+desdeser+"' "+
				     "AND tbFacturaCabecera.ser_cfa <= '"+hastaser+"') "+
				     "AND (tbFacturaCabecera.nup_cfa >= "+desdenup+
				     " AND tbFacturaCabecera.nup_cfa <= "+hastanup+") "+
				     "AND (tbFacturaCabecera.clie_cfa BETWEEN "+desdecli+" AND "+hastacli+")";
				     dataset55 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
					 macfra = dataset55.getValue(1,1);
				     fechenvfra = dataset55.getValue(1,2);
				     //if(forms.FrmFacturasGC.mac && forms.FrmFacturasGC.fechaenviofichero) globals.btn_runJasperReportFacturaVentasTBAI(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli,ffra)
					if(macfra && fechenvfra) 
					{
						globals.btn_runJasperReportFacturaVentasTBAI(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli,ffra)
						
						/*if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes && 
						forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.envfraemail &&
								!forms.FrmFacturasGC.emailenviado)
						{
							methd = 'forms.dialogImpresionFacturasTBAIGC.EnviarEmailFactura(event)'
							globals.GCshowQuestionDialog("¿Desea enviar la factura por email?",methd,'No','Si',null,null)
						}*/
					}
					else 
					{
						globals.core_formulario_TBAI = 'dialogImpresionFacturasVERIFACTUGC';
						globals.GCshowInfoDialog("La factura no ha sido enviada aún a VERIFACTU. No es posible visualizar/imprimir la factura con código QR sin antes haberla enviado.", null, null, null, null, null)
						globals.btn_runJasperReportFacturaVentas(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli,null)						
					}
				}			
			}
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 * @properties={typeid:24,uuid:"09F7486B-56B1-4FC6-B8EC-D6C602BC9951"}
 */
function AnularTBAIQuestion(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		var desdeeje = forms.dlg_ImpresionFacturasTBAIGC.DesdeEje;
		if(desdeeje == null || desdeeje == '') desdeeje = 0;
		var desdeser = forms.dlg_ImpresionFacturasTBAIGC.DesdeSer;
		if(desdeser == null || desdeser == '') desdeser = '';
		var desdenup = forms.dlg_ImpresionFacturasTBAIGC.DesdeNup;
		if(desdenup == null || desdenup == '') desdenup = 1;
		var hastaeje = forms.dlg_ImpresionFacturasTBAIGC.HastaEje;
		if(hastaeje == null || hastaeje == '') hastaeje = 9999;
		var hastaser = forms.dlg_ImpresionFacturasTBAIGC.HastaSer;
		if(hastaser == null || hastaser == '') hastaser = 'ZZ';
		var hastanup = forms.dlg_ImpresionFacturasTBAIGC.HastaNup;
		if(hastanup == null || hastanup == '') hastanup = 999999999;
		var desdecli = forms.dlg_ImpresionFacturasTBAIGC.DesdeCliente;
		if(desdecli == null || desdecli == '') desdecli = 1;
		var hastacli = forms.dlg_ImpresionFacturasTBAIGC.HastaCliente;
		if(hastacli == null || hastacli == '') hastacli = 999999999;
		
		GenerarXMLAnulaTBAI(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"A1E0D1BE-72CA-441F-9B35-50D5203963ED"}
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
 * @properties={typeid:24,uuid:"26EFC860-43A0-45B9-9CFD-19CE5E74589A"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Impresion Facturas VERIFACTU').hide();
	globals.core_formulario_TBAI = null;
	globals.GCenableBgElements();
	return true
}

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"A4253569-C69F-46AC-8C81-E2704ADA2E04"}
 */
var xml = '';

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} CIF
 * @return {String}
 *
 * @properties={typeid:24,uuid:"8AAA1EC2-943E-4C10-AF7B-E8A6DB928A58"}
 */
function TipoPersona(CIF)
{
	var l = utils.stringLeft(CIF,1)
	var Letr = 'NO'
	var tippers = ''
	for(var i=0;i<Letras.length;i++)
	{
		if(Letras[i] == l)
		{
			Letr = 'SI'
			break;
		}
	}					
	if(Letr == 'SI')
	{
		tippers = 'J'//Persona Juridica
	}
	else if(Letr == 'NO')
	{
		tippers = 'F'//Persona Física
	}
	return tippers
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} PAIS
 * @return {String}
 *
 * @properties={typeid:24,uuid:"C75E7B2E-4143-4931-B4B6-6B23F13221E1"}
 */
function TipoNacionalidad(PAIS)
{
	var Letr = 'NO'
	var tiponacionalidad = ''
	for(var i=0;i<Letras.length;i++)
	{
		if(Letras[i] == PAIS)
		{
			Letr = 'SI'
			break;
		}
	}					
	if(Letr == 'SI')
	{
		tiponacionalidad = 'U'//Residente en la Unión Europea.
	}
	else if(Letr == 'NO')
	{
		tiponacionalidad = 'E'//Extranjero
	}
	return tiponacionalidad
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C64EA8B9-749D-47D7-B5C6-675C4C8CE3E3"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A844F843-EFFA-4E43-A8AC-DA47F43456EA",variableType:8}
 */
var numfacturas;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"086EE786-6D34-4079-AFD5-DDCFD37A3C02",variableType:8}
 */
var sumfacturas;

/**
 * Callback method when form is destroyed.
 * 
 * 
 * @param {Number} DEJE
 * @param {String} DSER
 * @param {Number} DNUP
 * @param {Number} HEJE
 * @param {String} HSER
 * @param {Number} HNUP
 * @param {Number} DCLI
 * @param {Number} HCLI
 *
 *
 * @properties={typeid:24,uuid:"643B071E-2834-4208-9C84-43CB2373EBD1"}
 */
function nfacturas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
{
	var query = "select count(*),isnull(sum(impnee_cfa),0) from tbfacturacabecera "+
	"WHERE (tbFacturaCabecera.eje_cfa >= "+DEJE+
     " AND tbFacturaCabecera.eje_cfa <= "+HEJE+") "+
     "AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
     "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') "+
     "AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
     " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") "+
     "AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+")";
     var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
     numfacturas = dataset2.getValue(1,1);
     sumfacturas = dataset2.getValue(1,2);
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2FED92E0-C21C-42A4-AC8D-A367A2491312"}
 */
var cifempresa = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FC020575-E3A1-4EF9-B98C-75D987EA7A37"}
 */
var tipopersona = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EFAEEF1F-58AA-4608-A464-D33D52F8E977"}
 */
var pais = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DB1C902C-2D15-4822-8A1B-713CC36FD543"}
 */
var razonsocial = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"76E75911-E761-478C-92C0-6F5A102929EE"}
 */
var regmercantil = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A93B9A2-DBB7-4CD1-9BDC-B16109EA9E3E"}
 */
var hoja = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2321D3B0-57CC-41CC-9F68-ACAA889B5614"}
 */
var folio = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0F853FB9-831B-41CC-A4E7-545EA1AE974D"}
 */
var seccion = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"53F390A4-6BEE-4E75-99DB-C8D282879CCD"}
 */
var tomo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5FA77ADF-8FF9-432C-A29A-317CEC331F95"}
 */
var direccion = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C698E263-A58A-4C6D-B8FA-F61EB55FE054"}
 */
var codigopostal = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"99DC6BDB-9074-4CF9-A6E8-7B3194E6C4C9"}
 */
var ciudad = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"774D8303-6DEA-4705-BBD9-0B3A8533BD71"}
 */
var provincia = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F453A535-C064-4093-8FEA-FF7E9397CA3B"}
 */
var telefono = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1CC7E5F2-A206-4BB4-8FA2-5E4AE103E840"}
 */
var fax = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5848B3B5-281B-45C2-99E4-2D538E582BE8"}
 */
var web = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C3B2511C-7330-4CBB-97C4-9A1CF7FB34A3"}
 */
var correo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"60577DB7-B287-4A02-ADAA-470194020406"}
 */
var primerafactura = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F6433F56-EEC4-488A-BFD1-5304484D6FF2"}
 */
var ultimafactura = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0B4E1D6F-EB4B-4DBB-9E9D-3F85240C4B4F"}
 */
var cifcliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"336EC779-F21C-43C0-B0D9-0F00BEC56C48"}
 */
var tipopersonacliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C62C0607-0E78-4052-99DD-2F1741890592"}
 */
var paiscliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4F99F429-94DB-4A75-939D-469258E992FF"}
 */
var desccliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BBCEF022-AA35-4B6F-BA20-B870FF0F8260"}
 */
var direccioncliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D4EDB472-85FB-4E1F-BB07-9BED85139152"}
 */
var poblacioncliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"40143BEB-DDF3-41EF-AFD4-69D0980C057E"}
 */
var provinciacliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B1AB647E-C686-4425-B77E-B8A4E30B4C56"}
 */
var codpostalcliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8ED65E96-F1B2-443A-9032-74FB3375C881"}
 */
var razonsocialcliente = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"900AC98C-D481-479B-83DE-231E194A879A",variableType:93}
 */
var fechacobro;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"47377C91-9A5A-4891-BD91-875605E5270D"}
 */
var cuentaabono = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C60DCDA4-8E84-4159-BD4C-777B5EE2FD98"}
 */
var bic = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"68FFEF29-FD70-4A74-B3C4-77C4119DBF86"}
 */
var uuid1 = '';

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 * @properties={typeid:24,uuid:"2C7363B3-A23F-4D0F-BC35-6D64279C43A0"}
 */
function AnularFactura(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		var desdeeje = forms.dlg_ImpresionFacturasTBAIGC.DesdeEje;
		if(desdeeje == null || desdeeje == '') desdeeje = 0;
		var desdeser = forms.dlg_ImpresionFacturasTBAIGC.DesdeSer;
		if(desdeser == null || desdeser == '') desdeser = '';
		var desdenup = forms.dlg_ImpresionFacturasTBAIGC.DesdeNup;
		if(desdenup == null || desdenup == '') desdenup = 1;
		var hastaeje = forms.dlg_ImpresionFacturasTBAIGC.HastaEje;
		if(hastaeje == null || hastaeje == '') hastaeje = 9999;
		var hastaser = forms.dlg_ImpresionFacturasTBAIGC.HastaSer;
		if(hastaser == null || hastaser == '') hastaser = 'ZZ';
		var hastanup = forms.dlg_ImpresionFacturasTBAIGC.HastaNup;
		if(hastanup == null || hastanup == '') hastanup = 999999999;
		var desdecli = forms.dlg_ImpresionFacturasTBAIGC.DesdeCliente;
		if(desdecli == null || desdecli == '') desdecli = 1;
		var hastacli = forms.dlg_ImpresionFacturasTBAIGC.HastaCliente;
		if(hastacli == null || hastacli == '') hastacli = 999999999;
		GenerarXMLAnulaTBAI(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
	}
}

/**
 * Callback method when form is destroyed.
 * 
 * 
 * @param {Number} DEJE
 * @param {String} DSER
 * @param {Number} DNUP
 * @param {Number} HEJE
 * @param {String} HSER
 * @param {Number} HNUP
 * @param {Number} DCLI
 * @param {Number} HCLI
 *
 * @properties={typeid:24,uuid:"0B4E3168-6464-46EB-927D-B7340B8686F4"}
 */
function datosempresa(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
{
	var query = "SELECT ParametrosAplicacion.NºEmpresa,ParametrosAplicacion.Propiedad,"+
    "ParametrosAplicacion.Empresa,ParametrosAplicacion.CodPostal,"+
    "ParametrosAplicacion.Direccion,ParametrosAplicacion.Poblacion,"+
    "ParametrosAplicacion.Provincia,ParametrosAplicacion.CIF,"+
    "ParametrosAplicacion.Telefono,ParametrosAplicacion.Fax,"+
    "ParametrosAplicacion.Mail,ParametrosAplicacion.Web,"+
    "ParametrosAplicacion.Logo,ParametrosAplicacion.Logo2,"+
    "ParametrosAplicacion.TelAux,ParametrosAplicacion.CtaBancaria,"+
    "ParametrosAplicacion.Registro,ParametrosAplicacion.Tomo,"+
    "ParametrosAplicacion.Folio,ParametrosAplicacion.HojaRegistral,"+
    "ParametrosAplicacion.pais,"+
    "tbFacturaCabecera.ID,tbFacturaCabecera.eje_cfa,"+
    "tbFacturaCabecera.ser_cfa,tbFacturaCabecera.nup_cfa,"+
    "tbFacturaCabecera.fecha_cfa,tbFacturaCabecera.fechcobro_cfa,"+
    "tbFacturaCabecera.fechconta_cfa,tbFacturaCabecera.clie_cfa,"+
    "tbFacturaCabecera.cfpa_cfa,tbFacturaCabecera.desccfpa_cfa,"+
    "tbFacturaCabecera.repr_cfa,tbFacturaCabecera.obse_cfa,"+
    "tbFacturaCabecera.fenvio,tbFacturaCabecera.situconta,"+
    "tbFacturaCabecera.situ,tbFacturaCabecera.impbre_cfa,"+
    "tbFacturaCabecera.depp_cfa,tbFacturaCabecera.pgfi_cfa,"+
    "tbFacturaCabecera.impbie_cfa,tbFacturaCabecera.piva_cfa,"+
    "tbFacturaCabecera.cuotaiva_cfa,tbFacturaCabecera.impbie2_cfa,"+
    "tbFacturaCabecera.piva2_cfa,tbFacturaCabecera.cuotaiva2_cfa,"+
    "tbFacturaCabecera.impbie3_cfa,tbFacturaCabecera.piva3_cfa,"+
    "tbFacturaCabecera.cuotaiva3_cfa,tbFacturaCabecera.impnee_cfa,"+
    "tbFacturaCabecera.gtosfinan_cfa,tbFacturaCabecera.impgtosfinan,"+
    "tbFacturaCabecera.impre,tbFacturaCabecera.impre2,"+
    "tbFacturaCabecera.impre3,tbFacturaLinea.ID,tbFacturaLinea.eje_lfa,"+
    "tbFacturaLinea.ser_lfa,tbFacturaLinea.nup_lfa,tbFacturaLinea.nli_lfa,"+
    "tbFacturaLinea.nalb_lfa,tbFacturaLinea.lalb_lfa,"+
    "tbFacturaLinea.ref_lfa,tbFacturaLinea.concep_lfa,"+
    "tbFacturaLinea.cant1_lfa,tbFacturaLinea.prec_lfa,"+
    "tbFacturaLinea.unme_lfa,tbFacturaLinea.piva_lfa,"+
    "tbFacturaLinea.dto_lfa,tbFacturaLinea.impdto_lfa,"+
    "tbFacturaLinea.clie_lfa,tbFacturaLinea.situ_lfa,"+
    "tbFacturaLinea.precuni_lfa,tbFacturaLinea.impor_lfa,"+
    "tbFacturaLinea.importot_lfa,tbFacturaLinea.fecha_lfa,"+
    "tbFacturaLinea.nprograma_lfa,tbMaestroClientes.ID,"+
    "tbMaestroClientes.IdCliente,tbMaestroClientes.DescCliente,"+
    "tbMaestroClientes.Direccion,tbMaestroClientes.Poblacion,"+
    "tbMaestroClientes.Provincia,tbMaestroClientes.CodPostal,"+
    "tbMaestroClientes.RazonSocial,tbMaestroClientes.PersContacto,"+
    "tbMaestroClientes.EmailContacto,tbMaestroClientes.Telf1,"+
    "tbMaestroClientes.Telf2,tbMaestroClientes.Fax,"+
    "tbMaestroClientes.CIF,tbMaestroClientes.NumProveedor,"+
    "tbMaestroClientes.CuentaContable,tbMaestroClientes.IdFormaPago,"+
    "tbMaestroClientes.TipoIva,tbMaestroClientes.IdMoneda,"+
    "tbMaestroClientes.DiaPago1,tbMaestroClientes.DiaPago2,tbMaestroClientes.DiaPago3,"+
    "tbMaestroClientes.Pais,tbMaestroClientes.Observaciones,"+
    "tbMaestroClientes.CodigoBanco,tbMaestroClientes.CodigoSucursal,"+
    "tbMaestroClientes.Codigo1DC,tbMaestroClientes.CodigoCuenta,"+
    "tbMaestroArticulos.RefCliente,tbMaestroformpago.denom_fp,ParametrosAplicacion.bic "+
    "FROM tbFacturaCabecera tbFacturaCabecera LEFT JOIN dbo.tbFacturaLinea tbFacturaLinea ON "+
	 "tbFacturaCabecera.eje_cfa = tbFacturaLinea.eje_lfa "+
    "AND tbFacturaCabecera.nup_cfa = tbFacturaLinea.nup_lfa "+
    "AND tbFacturaCabecera.ser_cfa = tbFacturaLinea.ser_lfa "+
    "LEFT JOIN dbo.tbMaestroClientes tbMaestroClientes ON "+
	 "tbFacturaCabecera.clie_cfa = tbMaestroClientes.IdCliente "+
    "LEFT JOIN dbo.tbMaestroformpago tbMaestroformpago ON "+
	 "tbFacturaCabecera.cfpa_cfa = tbMaestroformpago.codig_fp "+
    "LEFT JOIN dbo.tbMaestroArticulos tbMaestroArticulos ON "+
	 "tbFacturaLinea.ref_lfa = tbMaestroArticulos.Codigo,"+
    "dbo.ParametrosAplicacion ParametrosAplicacion "+
    "WHERE (tbFacturaCabecera.eje_cfa >= "+DEJE+
    " AND tbFacturaCabecera.eje_cfa <= "+HEJE+") "+
    "AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
    "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') "+
    "AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
    " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") "+
    "AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+") "+
    "ORDER BY tbFacturaLinea.eje_lfa ASC,tbFacturaLinea.ser_lfa ASC,"+
    "tbFacturaLinea.nup_lfa ASC,tbFacturaLinea.nli_lfa ASC";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null,99999999)
	
				uuid1 = dataset.getValue(1,22);
				cifempresa = globals.GCQuitarCaracteresEspeciales(utils.stringTrim(utils.stringReplace(dataset.getValue(1,8),' ','')));
				tipopersona = globals.GCQuitarCaracteresEspeciales(TipoPersona(cifempresa));					
				pais = utils.stringTrim(dataset.getValue(1,21));
				razonsocial = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,3));
				regmercantil = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,17));
				hoja = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,20));
				folio = dataset.getValue(1,19);
				seccion = '';
				tomo = dataset.getValue(1,18);
				direccion = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,5));
				codigopostal = dataset.getValue(1,4);
				ciudad = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,6));
				provincia = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,7));
				telefono = dataset.getValue(1,9);
				fax = dataset.getValue(1,10);
				web = dataset.getValue(1,12);
				correo = dataset.getValue(1,11);
				primerafactura = DEJE.toString() + utils.numberFormat(DNUP,'00000') + DSER;
				ultimafactura = HEJE.toString() + utils.numberFormat(HNUP,'00000') + HSER;
				paiscliente = dataset.getValue(1,99);
				if(!paiscliente) paiscliente = 'ES';
				cifcliente = utils.stringTrim(utils.stringReplace(dataset.getValue(1,90),' ',''));
				tipopersonacliente = globals.GCQuitarCaracteresEspeciales(TipoPersona(cifcliente))
				if(paiscliente && paiscliente =='GR' /*|| paiscliente == 'GB'*/)
				{
					if(utils.stringLeft(cifcliente,2) == 'GR')	cifcliente = utils.stringReplace(cifcliente,'GR','EL')
					else if(utils.stringLeft(cifcliente,2) != 'EL')
					{							
						if(cifcliente.length == 9)	cifcliente = 'EL'+cifcliente;
					}
				}
				//var contactocliente = dataset.getValue(1,85);
				desccliente = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,79));
				if(!desccliente) desccliente = ' ';
				direccioncliente = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,80));
				if(!direccioncliente) direccioncliente = ' ';
				poblacioncliente = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,81));
				if(!poblacioncliente) poblacioncliente = ' ';
				provinciacliente = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,82));
				if(!provinciacliente) provinciacliente = ' ';
				codpostalcliente = dataset.getValue(1,83);
				if(!codpostalcliente) codpostalcliente = '00000'
				razonsocialcliente = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,84));
				if(!razonsocialcliente) razonsocialcliente = ' ';
				fechacobro = dataset.getValue(1,27);
				//var formapago = dataset.getValue(1,30);
				cuentaabono = dataset.getValue(1,16);
				bic = dataset.getValue(1,107);
}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D65BB217-D0F9-4D7C-8AF0-356056950AB2",variableType:93}
 */
var fechafactura;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4AA6B8DB-4751-43E7-A28A-040717CCD6A3",variableType:8}
 */
var impbre;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"493191D4-AA2B-4A3D-A441-DE30815C0A35",variableType:8}
 */
var depp;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9B648510-58BA-4136-9F0B-3717FD345A4B",variableType:8}
 */
var impgfi;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9E7BD2B2-EA13-4EF2-9581-756B4A17E670",variableType:8}
 */
var impnee;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0EFB69D7-DC75-4BE3-8141-C92B918DD10D",variableType:8}
 */
var impbie;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7B14041E-677B-4639-A0F5-EFC1807308A0",variableType:8}
 */
var piva;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C8746889-02D1-4D3C-BBF4-4AD7B5A1951E",variableType:8}
 */
var cuotaiva;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"985D45E4-C085-4FE8-A3AC-1CB0D3F77A59",variableType:8}
 */
var impbie2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"34E786A7-9A8C-4435-B090-C2420E5CB6E6",variableType:8}
 */
var piva2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7DBF9F05-CAD4-413F-AAF3-590CFC0BD57E",variableType:8}
 */
var cuotaiva2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C866B7AF-C41A-4053-BE09-071BD81E7D7A",variableType:8}
 */
var impbie3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"054B463B-D563-45B0-82F6-D4E81B2BE32A",variableType:8}
 */
var piva3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"15D67BD5-6C25-460A-B727-C68CA363E352",variableType:8}
 */
var impre;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FAB617E5-0094-45DD-932B-57E008275D78",variableType:8}
 */
var cuotaiva3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EFF449C7-14CE-49EF-83A1-A54C2FEC5E75",variableType:8}
 */
var porcimpre;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6CA70EEF-DEC3-47B2-BF68-D9586A621961",variableType:8}
 */
var impre2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B001B4E3-AADF-42D8-91A3-33C8FA846805",variableType:8}
 */
var porcimpre2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"476C8F72-66A4-4216-9F5F-2070322D6F65",variableType:8}
 */
var impre3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4BA4BDDA-7E03-4C2C-906D-5F1384AFD0E1",variableType:8}
 */
var porcimpre3;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2FFCBB19-B93E-4232-96A0-D20F94EEE7E2"}
 */
var concepto = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"14B4013A-1B54-4014-9117-95702A2B6D67",variableType:8}
 */
var cant;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5238B58C-16B6-4459-B23C-3EC8132FC868",variableType:8}
 */
var imporlfa;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D3C4FBB5-B78E-41D5-B306-E0F22C7F608B",variableType:8}
 */
var preclfa;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A7743594-43F5-4B38-B8F1-B9F57E34C364",variableType:8}
 */
var dtolfa;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4504AA75-E520-4B33-9225-F2B903915233",variableType:8}
 */
var impordtolfa;

/**
 * Callback method when form is destroyed.
 * 
 * 
 * @param {Number} DEJE
 * @param {String} DSER
 * @param {Number} DNUP
 * @param {Number} HEJE
 * @param {String} HSER
 * @param {Number} HNUP
 * @param {Number} DCLI
 * @param {Number} HCLI
 * @param {Number} i
 *
 *
 * @properties={typeid:24,uuid:"DF9C7676-0CBA-48D3-AFC0-F5B2C0B97762"}
 */
function datoslineas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI,i)
{
	var query = "SELECT ParametrosAplicacion.NºEmpresa,ParametrosAplicacion.Propiedad,"+
    "ParametrosAplicacion.Empresa,ParametrosAplicacion.CodPostal,"+
    "ParametrosAplicacion.Direccion,ParametrosAplicacion.Poblacion,"+
    "ParametrosAplicacion.Provincia,ParametrosAplicacion.CIF,"+
    "ParametrosAplicacion.Telefono,ParametrosAplicacion.Fax,"+
    "ParametrosAplicacion.Mail,ParametrosAplicacion.Web,"+
    "ParametrosAplicacion.Logo,ParametrosAplicacion.Logo2,"+
    "ParametrosAplicacion.TelAux,ParametrosAplicacion.CtaBancaria,"+
    "ParametrosAplicacion.Registro,ParametrosAplicacion.Tomo,"+
    "ParametrosAplicacion.Folio,ParametrosAplicacion.HojaRegistral,"+
    "ParametrosAplicacion.pais,"+
    "tbFacturaCabecera.ID,tbFacturaCabecera.eje_cfa,"+
    "tbFacturaCabecera.ser_cfa,tbFacturaCabecera.nup_cfa,"+
    "tbFacturaCabecera.fecha_cfa,tbFacturaCabecera.fechcobro_cfa,"+
    "tbFacturaCabecera.fechconta_cfa,tbFacturaCabecera.clie_cfa,"+
    "tbFacturaCabecera.cfpa_cfa,tbFacturaCabecera.desccfpa_cfa,"+
    "tbFacturaCabecera.repr_cfa,tbFacturaCabecera.obse_cfa,"+
    "tbFacturaCabecera.fenvio,tbFacturaCabecera.situconta,"+
    "tbFacturaCabecera.situ,tbFacturaCabecera.impbre_cfa,"+
    "tbFacturaCabecera.depp_cfa,tbFacturaCabecera.pgfi_cfa,"+
    "tbFacturaCabecera.impbie_cfa,tbFacturaCabecera.piva_cfa,"+
    "tbFacturaCabecera.cuotaiva_cfa,tbFacturaCabecera.impbie2_cfa,"+
    "tbFacturaCabecera.piva2_cfa,tbFacturaCabecera.cuotaiva2_cfa,"+
    "tbFacturaCabecera.impbie3_cfa,tbFacturaCabecera.piva3_cfa,"+
    "tbFacturaCabecera.cuotaiva3_cfa,tbFacturaCabecera.impnee_cfa,"+
    "tbFacturaCabecera.gtosfinan_cfa,tbFacturaCabecera.impgtosfinan,"+
    "tbFacturaCabecera.impre,tbFacturaCabecera.impre2,"+
    "tbFacturaCabecera.impre3,tbFacturaLinea.ID,tbFacturaLinea.eje_lfa,"+
    "tbFacturaLinea.ser_lfa,tbFacturaLinea.nup_lfa,tbFacturaLinea.nli_lfa,"+
    "tbFacturaLinea.nalb_lfa,tbFacturaLinea.lalb_lfa,"+
    "tbFacturaLinea.ref_lfa,tbFacturaLinea.concep_lfa,"+
    "tbFacturaLinea.cant1_lfa,tbFacturaLinea.prec_lfa,"+
    "tbFacturaLinea.unme_lfa,tbFacturaLinea.piva_lfa,"+
    "tbFacturaLinea.dto_lfa,tbFacturaLinea.impdto_lfa,"+
    "tbFacturaLinea.clie_lfa,tbFacturaLinea.situ_lfa,"+
    "tbFacturaLinea.precuni_lfa,tbFacturaLinea.impor_lfa,"+
    "tbFacturaLinea.importot_lfa,tbFacturaLinea.fecha_lfa,"+
    "tbFacturaLinea.nprograma_lfa,tbMaestroClientes.ID,"+
    "tbMaestroClientes.IdCliente,tbMaestroClientes.DescCliente,"+
    "tbMaestroClientes.Direccion,tbMaestroClientes.Poblacion,"+
    "tbMaestroClientes.Provincia,tbMaestroClientes.CodPostal,"+
    "tbMaestroClientes.RazonSocial,tbMaestroClientes.PersContacto,"+
    "tbMaestroClientes.EmailContacto,tbMaestroClientes.Telf1,"+
    "tbMaestroClientes.Telf2,tbMaestroClientes.Fax,"+
    "tbMaestroClientes.CIF,tbMaestroClientes.NumProveedor,"+
    "tbMaestroClientes.CuentaContable,tbMaestroClientes.IdFormaPago,"+
    "tbMaestroClientes.TipoIva,tbMaestroClientes.IdMoneda,"+
    "tbMaestroClientes.DiaPago1,tbMaestroClientes.DiaPago2,tbMaestroClientes.DiaPago3,"+
    "tbMaestroClientes.Pais,tbMaestroClientes.Observaciones,"+
    "tbMaestroClientes.CodigoBanco,tbMaestroClientes.CodigoSucursal,"+
    "tbMaestroClientes.Codigo1DC,tbMaestroClientes.CodigoCuenta,"+
    "tbMaestroArticulos.RefCliente,tbMaestroformpago.denom_fp,ParametrosAplicacion.bic "+
    "FROM tbFacturaCabecera tbFacturaCabecera LEFT JOIN dbo.tbFacturaLinea tbFacturaLinea ON "+
	 "tbFacturaCabecera.eje_cfa = tbFacturaLinea.eje_lfa "+
    "AND tbFacturaCabecera.nup_cfa = tbFacturaLinea.nup_lfa "+
    "AND tbFacturaCabecera.ser_cfa = tbFacturaLinea.ser_lfa "+
    "LEFT JOIN dbo.tbMaestroClientes tbMaestroClientes ON "+
	 "tbFacturaCabecera.clie_cfa = tbMaestroClientes.IdCliente "+
    "LEFT JOIN dbo.tbMaestroformpago tbMaestroformpago ON "+
	 "tbFacturaCabecera.cfpa_cfa = tbMaestroformpago.codig_fp "+
    "LEFT JOIN dbo.tbMaestroArticulos tbMaestroArticulos ON "+
	 "tbFacturaLinea.ref_lfa = tbMaestroArticulos.Codigo,"+
    "dbo.ParametrosAplicacion ParametrosAplicacion "+
    "WHERE (tbFacturaCabecera.eje_cfa >= "+DEJE+
    " AND tbFacturaCabecera.eje_cfa <= "+HEJE+") "+
    "AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
    "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') "+
    "AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
    " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") "+
    "AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+") "+
    "ORDER BY tbFacturaLinea.eje_lfa ASC,tbFacturaLinea.ser_lfa ASC,"+
    "tbFacturaLinea.nup_lfa ASC,tbFacturaLinea.nli_lfa ASC";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null,99999999)
	
	fechafactura = dataset.getValue(i,26);
	impbre = dataset.getValue(i,37);
	depp = dataset.getValue(i,38);
	//var porcgfi = dataset.getValue(i,50);
	impgfi = dataset.getValue(i,51);
	impnee = dataset.getValue(i,49);
	impbie = dataset.getValue(i,40);
	piva = dataset.getValue(i,41);
	cuotaiva = dataset.getValue(i,42);
	impbie2 = dataset.getValue(i,43);
	piva2 = dataset.getValue(i,44);
	cuotaiva2 = dataset.getValue(i,45);
	impbie3 = dataset.getValue(i,46);
	piva3 = dataset.getValue(i,47);
	cuotaiva3 = dataset.getValue(i,48);
	impre = dataset.getValue(i,52);
	if(impre)
	{
		query = "select ivare from tbmaestrotipoiva "+
				"WHERE factor = "+piva;
		var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
		porcimpre = dataset2.getValue(1,1)
	}
	impre2 = dataset.getValue(i,53);
	if(impre2)
	{
		query = "select ivare from tbmaestrotipoiva "+
				"WHERE factor = "+piva2;
		dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
		porcimpre2 = dataset2.getValue(1,1)
	}						
	impre3 = dataset.getValue(i,54);
	if(impre3)
	{
		query = "select ivare from tbmaestrotipoiva "+
				"WHERE factor = "+piva3;
		dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
		porcimpre3 = dataset2.getValue(1,1)
	}
	//var alb = dataset.getValue(i,60);
	//var lalb = dataset.getValue(i,61);
	concepto = dataset.getValue(i,63)
	cant = dataset.getValue(i,64)
	imporlfa = dataset.getValue(i,73)
	preclfa = dataset.getValue(i,65)
	dtolfa = dataset.getValue(i,68)
	impordtolfa = dataset.getValue(i,69)
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"83DB010E-F20C-454F-98F3-8250F38A140A"}
 */
var paisclienteiso3 = '';

/**
 * TODO generated, please specify type and doc for the params
 * @properties={typeid:24,uuid:"BA0A8873-4CCC-4A55-8BB9-3C420FB8A7DA"}
 */
function getpaiso3()
{
	var query = "select pai_iso3 from pais where pai_iso2 ='"+paiscliente+"'";				
	var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
	paisclienteiso3 = dataset2.getValue(1,1)
}

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"EA4A930F-7AC2-4F46-9CCA-275490926D35"}
 */
var newxml = '';

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"6F64356A-D14E-44E4-AE67-4EC038BB321B"}
 */
var htm = '';

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"06F6ACA8-2D31-4567-9216-77B14CF8D233"}
 */
var serverURL = '';

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"953752CE-4756-4645-9108-6BB68AFDF882"}
 */
var nom = '';

/**
 * @type {XML}
 *
 *
 * @properties={typeid:35,uuid:"3BA28E4E-CC30-4A7F-A0CE-E8E790C4E94F",variableType:-4}
 */
var Document;

/**
 * @type {Namespace}
 *
 *
 * @properties={typeid:35,uuid:"9FD4DC8A-6060-4FCC-AFE9-FAF859B3AD39",variableType:-4}
 */
var ns;

/**
 * @type {XML}
 *
 *
 * @properties={typeid:35,uuid:"66F69937-A72D-4273-ACF8-9F2E84D0BB12",variableType:-4}
 */
var Cabecera;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"C706B7E1-7991-43E4-AD75-74F604A488E0",variableType:-4}
 */
var IDFactura;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"5117EFFD-D4E8-4D2E-A8DE-A103B543ECCD",variableType:-4}
 */
var Sujetos;

/**
 * @type {XML}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"4328B042-FAD0-4B44-935E-C3A3BAFAF7A6",variableType:-4}
 */
var Emisor;

/**
 * @type {XML}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"C773D223-4D2D-49C8-A321-CF29E1DA7609",variableType:-4}
 */
var NIF;

/**
 * @type {XML}
 *
 *
 * @properties={typeid:35,uuid:"F7118753-6ED5-4FF9-B92F-0F0BB1F4D67A",variableType:-4}
 */
var IDOtro;

/**
 * @type {XML}
 *
 *
 * @properties={typeid:35,uuid:"210DD2D6-0896-4594-ABB1-D4CF5406CABA",variableType:-4}
 */
var CodigoPais;

/**
 * @type {XML}
 *
 *
 * @properties={typeid:35,uuid:"826D7CAE-C5B5-4A17-AC62-DE7054465EB5",variableType:-4}
 */
var IDType;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"039C4CE5-11A0-42EC-9162-9032592D1343",variableType:-4}
 */
var ID;

/**
 * @type {XML}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"8C13A01C-616F-48C7-B60C-900795665F2C",variableType:-4}
 */
var ApellidosNombreRazonSocial;

/**
 * @type {XML}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"3561D591-1505-473C-8AD5-FAAFEE5B1D57",variableType:-4}
 */
var Destinatarios;

/**
 * @type {XML}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"D0360FBA-6011-4962-8D97-D5D30C949B32",variableType:-4}
 */
var IDDestinatario;

/**
 * @type {XML}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"9EB0A0D1-6354-409B-96BD-479B3F0E994B",variableType:-4}
 */
var CodigoPostal;

/**
 * @type {XML}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"4EE3DD35-EF5B-4A34-9F25-EC1F76CED52E",variableType:-4}
 */
var Direccion;

/**
 * @type {XML}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"0563A19D-9561-424F-B2EB-58E0E2A315A1",variableType:-4}
 */
var VariosDestinatarios;

/**
 * @type {XML}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"0DC5CBA6-73C6-4C3B-B0D5-2FC48647DA68",variableType:-4}
 */
var EmitidaPorTercerosODestinatario;

/**
 * @type {XML}
 *
 *
 * @properties={typeid:35,uuid:"34686BE2-99B2-4E4F-86B0-585A904BD66C",variableType:-4}
 */
var IDVersionTBAI;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"E2A88343-2DF5-4F93-B48F-0299FD9E5B18",variableType:-4}
 */
var IDVersion;

/**
 * @type {XML}
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"9B0F34C5-69AF-4D51-B742-1EA948D444AA",variableType:-4}
 */
var Accion;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"0D9FA830-82E4-4B9F-973D-1C274684CDD8",variableType:-4}
 */
var Factura;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C19F03CA-7F4C-443C-9F02-6D4E1370EEDE",variableType:-4}
 */
var FacturaRectificativa;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E2E290BB-FBB9-4925-92A1-0DB16DBEB627",variableType:-4}
 */
var Codigo;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"2507896A-93AE-4520-9225-4CBD2089AE43",variableType:-4}
 */
var Tipo;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"F199B5D6-C475-4944-8087-32088EA97C59",variableType:-4}
 */
var ImporteRectificacionSustitutiva;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"FC077A6A-4175-49E5-9381-D2CE9E4C638B",variableType:-4}
 */
var FacturasRectificadasSustituidas;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"00962845-ADA9-47AC-B161-92EC01F681E4",variableType:-4}
 */
var IDFacturaRectificadaSustituida;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"1B684AE3-0F53-4DEE-93E7-545ED0C4154A",variableType:-4}
 */
var BaseRectificada;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DBEB0A85-B4C4-49B4-8224-8AB37415949B",variableType:-4}
 */
var CuotaRectificada;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3BDC2CE1-2548-4DEB-9128-F23A8062199F",variableType:-4}
 */
var CuotaRecargoRectificada;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"D87AAA01-B1D7-4B92-A3BD-1EFC1F638112",variableType:-4}
 */
var CabeceraFactura;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"F6E0F790-3029-4C4A-9569-0AAB25A8428F",variableType:-4}
 */
var SerieFactura;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"9D3D53AE-97E2-4B5A-A7D2-6EA3D16248FA",variableType:-4}
 */
var NumFactura;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"376A8F69-0007-4059-BC60-1FCDE0F665E5",variableType:-4}
 */
var FechaExpedicionFactura;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"5F7B4BCE-AA4A-4FBE-8205-66F02F47B600",variableType:-4}
 */
var HoraExpedicionFactura;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"921D0EC9-3FA9-4E7A-BEE5-78C070B7A5CE",variableType:-4}
 */
var FacturaSimplificada;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"68FF0BA4-AEA5-480E-8EB7-7C8FDB05D70C",variableType:-4}
 */
var FacturaEmitidaSustitucionSimplificada;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"A628A591-C3F3-4344-AA17-E0805EE742A3",variableType:-4}
 */
var DatosFactura;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"33555AD4-B0C7-49A8-912A-1DB98092DA3C",variableType:-4}
 */
var FechaOperacion;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"68B1CD56-3180-413F-8964-0368BA414A6C",variableType:-4}
 */
var DescripcionFactura;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"63168E85-FB22-40A4-9BF2-C8370F9DDC63",variableType:-4}
 */
var DetallesFactura;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"1DEFACFA-DCAB-4312-9AA8-49ECEFEE203F",variableType:-4}
 */
var IDDetalleFactura;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"2FCB1C51-DD9B-4DD9-8DE0-7976096362C3",variableType:-4}
 */
var DescripcionDetalle;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"B18BF9E5-A020-4F11-A6EC-804947D77BAD",variableType:-4}
 */
var Cantidad;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"DA09039F-8A16-40B6-B4C2-6D3DE67B7C78",variableType:-4}
 */
var ImporteUnitario;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"7F0A1B78-7D34-45C4-B4DF-706F8A9EECA2",variableType:-4}
 */
var Descuento;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"E7558ACB-7A6B-4B27-9AE4-4C1CDEFB32EC",variableType:-4}
 */
var ImporteTotal;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"CC348A38-F3BE-4303-BC01-68155D18F2DC",variableType:-4}
 */
var ImporteTotalFactura;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"0F915ED2-A5A4-4A60-ADA8-8506584C5828",variableType:-4}
 */
var RetencionSoportada;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"923B0641-5B91-49B7-8E9D-6AE7ED467D8A",variableType:-4}
 */
var BaseImponibleACoste;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"083578DC-EC94-456B-99F5-2A3EB402A546",variableType:-4}
 */
var Claves;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"6DAFBB14-7A52-497D-B52E-B61027AA750A",variableType:-4}
 */
var IDClave;

/**
 * @type {XML}
 *
 *
 *
 * @properties={typeid:35,uuid:"28685D5E-675C-478E-8447-AA2553566BBB",variableType:-4}
 */
var ClaveRegimenIvaOpTrascendencia;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"838A5C0D-6E53-488A-9AFE-F375F22B1D2E",variableType:-4}
 */
var TipoDesglose;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E6015D3A-9EC6-4871-A72F-4634B0F3F45F",variableType:-4}
 */
var DesgloseFactura;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"4B8EE632-F43F-43FC-9CF6-2D87EA590D88",variableType:-4}
 */
var Sujeta;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"822AC32E-2EB6-4E20-86CF-7FB0A324A94F",variableType:-4}
 */
var PrestacionServicios;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"BDA259E4-BC45-4CE9-9900-0800A3FE76BC",variableType:-4}
 */
var DesgloseTipoOperacion;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"4B5327AA-AE3F-4560-9DF9-8838959070A0",variableType:-4}
 */
var Entrega;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"CC8A7991-C79C-4A7F-8FE9-7429D9740F28",variableType:-4}
 */
var Exenta;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"1A755CE4-FF30-4D76-A5F0-D990A58A2B04",variableType:-4}
 */
var DetalleExenta;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"9C8F3B39-81E0-4977-A77F-B7D7B569761C",variableType:-4}
 */
var CausaExencion;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"32F5E53A-A0A2-4B36-B9D2-092DD86A3827",variableType:-4}
 */
var NoExenta;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"2C189935-6B78-4B70-A9A2-011172F0E2CE",variableType:-4}
 */
var DetalleNoExenta;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"18DCA22B-BEEF-4C8D-AEFA-7B5C26F0BF3D",variableType:-4}
 */
var TipoNoExenta;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"AFEBD6D3-8E8F-4179-8C5D-9256D442BE52",variableType:-4}
 */
var DesgloseIVA;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"75784E74-5FC3-48FF-8459-E94402C30218",variableType:-4}
 */
var DetalleIVA;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"6CE1AF39-CBA6-4046-A5D7-2903D3787704",variableType:-4}
 */
var TipoRecargoEquivalencia;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C6CEE897-F500-479C-9F21-7AFAB2B96F8C",variableType:-4}
 */
var CuotaRecargoEquivalencia;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"FB424E7D-639C-4964-973A-BF4AAEAFE66A",variableType:-4}
 */
var BaseImponible;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"5EFE534B-EF83-4401-B092-734A1041AEF6",variableType:-4}
 */
var TipoImpositivo;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"8FD794C6-706A-41F1-AF88-6008C94DA67D",variableType:-4}
 */
var CuotaImpuesto;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"10EF6A5C-7016-425F-93C0-D3A40F7C69FF",variableType:-4}
 */
var OperacionEnRecargoDeEquivalenciaORegimenSimplificado;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"F7E0E5CE-CC9F-43E3-B61A-2B1C06C4F992",variableType:-4}
 */
var HuellaTBAI;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"619A719A-4665-4DCB-8C8D-3F11E8639096",variableType:-4}
 */
var SignatureValueFirmaFactura;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"1891523A-E82F-4E22-9699-DCA05A0D3D65",variableType:-4}
 */
var SignatureValueFirmaAnulacion;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"5296D9FE-CFAA-4610-9FFB-88DE49B01C62",variableType:-4}
 */
var Software;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"BD0B8D4D-5BB8-4E52-B03D-E88363757BCA",variableType:-4}
 */
var LicenciaTBAI;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A471C3EA-A30A-47C1-9F1D-EE7EC716C195",variableType:-4}
 */
var EntidadDesarrolladora;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DCE503A5-DE4C-48F5-99BB-1CE0A00D8D51",variableType:-4}
 */
var Nombre;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"B008709B-D0A7-483F-BE9E-881AB2135F59",variableType:-4}
 */
var Version;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"83CD130A-DA10-4539-848E-6C3CF41F9E29",variableType:-4}
 */
var NoSujeta;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"73A05853-07C7-444C-90FF-7108723EAEC3",variableType:-4}
 */
var DetalleNoSujeta;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"AB5025EB-BE97-4CA9-ACAF-2CEA0CCE0AD4",variableType:-4}
 */
var Causa;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"8249C722-D3BE-4A1F-8325-85BD147D802D",variableType:-4}
 */
var Importe;

/**
* @type {XML}
*
*
 * @properties={typeid:35,uuid:"B6F8C341-6EA9-4BE0-921E-EE0445F4F4F4",variableType:-4}
 */
var EncadenamientoFacturaAnterior;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"9A3FFEAD-C15B-41FF-B8AE-0A2AEADFBFAD",variableType:-4}
 */
var SerieFacturaAnterior;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"B212DBB1-85E5-46D0-852A-AE30DB76C662",variableType:-4}
 */
var NumFacturaAnterior;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A799A202-63D5-46FF-844C-D8D3456366F5",variableType:-4}
 */
var FechaExpedicionFacturaAnterior;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"D84B35DA-6093-455F-89C6-6652A0892578",variableType:-4}
 */
var SignatureValueFirmaFacturaAnterior;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"268F7A12-6906-4607-9323-AB6935625382",variableType:-4}
 */
var NumSerieDispositivo;

/**
 * Callback method when form is destroyed.
 * 
 * 
 * @param {Number} DEJE
 * @param {String} DSER
 * @param {Number} DNUP
 * @param {Number} HEJE
 * @param {String} HSER
 * @param {Number} HNUP
 * @param {Number} DCLI
 * @param {Number} HCLI
 *
 * @properties={typeid:24,uuid:"8E9B3FCD-B177-4539-9127-3ACBD461DCD7"}
 * @SuppressWarnings(wrongparameters)
 */
function GenerarXMLTBAI(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
{
	try
	{
		var query = "SELECT ParametrosAplicacion.NºEmpresa,ParametrosAplicacion.Propiedad,"+
	    "ParametrosAplicacion.Empresa,ParametrosAplicacion.CodPostal,"+
	    "ParametrosAplicacion.Direccion,ParametrosAplicacion.Poblacion,"+
	    "ParametrosAplicacion.Provincia,ParametrosAplicacion.CIF,"+
	    "ParametrosAplicacion.Telefono,ParametrosAplicacion.Fax,"+
	    "ParametrosAplicacion.Mail,ParametrosAplicacion.Web,"+
	    "ParametrosAplicacion.Logo,ParametrosAplicacion.Logo2,"+
	    "ParametrosAplicacion.TelAux,ParametrosAplicacion.CtaBancaria,"+
	    "ParametrosAplicacion.Registro,ParametrosAplicacion.Tomo,"+
	    "ParametrosAplicacion.Folio,ParametrosAplicacion.HojaRegistral,"+
	    "ParametrosAplicacion.pais,"+
	    "tbFacturaCabecera.ID,tbFacturaCabecera.eje_cfa,"+
	    "tbFacturaCabecera.ser_cfa,tbFacturaCabecera.nup_cfa,"+
	    "tbFacturaCabecera.fecha_cfa,tbFacturaCabecera.fechcobro_cfa,"+
	    "tbFacturaCabecera.fechconta_cfa,tbFacturaCabecera.clie_cfa,"+
	    "tbFacturaCabecera.cfpa_cfa,tbFacturaCabecera.desccfpa_cfa,"+
	    "tbFacturaCabecera.repr_cfa,tbFacturaCabecera.obse_cfa,"+
	    "tbFacturaCabecera.fenvio,tbFacturaCabecera.situconta,"+
	    "tbFacturaCabecera.situ,tbFacturaCabecera.impbre_cfa,"+
	    "tbFacturaCabecera.depp_cfa,tbFacturaCabecera.pgfi_cfa,"+
	    "tbFacturaCabecera.impbie_cfa,tbFacturaCabecera.piva_cfa,"+
	    "tbFacturaCabecera.cuotaiva_cfa,tbFacturaCabecera.impbie2_cfa,"+
	    "tbFacturaCabecera.piva2_cfa,tbFacturaCabecera.cuotaiva2_cfa,"+
	    "tbFacturaCabecera.impbie3_cfa,tbFacturaCabecera.piva3_cfa,"+
	    "tbFacturaCabecera.cuotaiva3_cfa,tbFacturaCabecera.impnee_cfa,"+
	    "tbFacturaCabecera.gtosfinan_cfa,tbFacturaCabecera.impgtosfinan,"+
	    "tbFacturaCabecera.impre,tbFacturaCabecera.impre2,"+
	    "tbFacturaCabecera.impre3,tbFacturaLinea.ID,tbFacturaLinea.eje_lfa,"+
	    "tbFacturaLinea.ser_lfa,tbFacturaLinea.nup_lfa,tbFacturaLinea.nli_lfa,"+
	    "tbFacturaLinea.nalb_lfa,tbFacturaLinea.lalb_lfa,"+
	    "tbFacturaLinea.ref_lfa,tbFacturaLinea.concep_lfa,"+
	    "tbFacturaLinea.cant1_lfa,tbFacturaLinea.prec_lfa,"+
	    "tbFacturaLinea.unme_lfa,tbFacturaLinea.piva_lfa,"+
	    "tbFacturaLinea.dto_lfa,tbFacturaLinea.impdto_lfa,"+
	    "tbFacturaLinea.clie_lfa,tbFacturaLinea.situ_lfa,"+
	    "tbFacturaLinea.precuni_lfa,tbFacturaLinea.impor_lfa,"+
	    "tbFacturaLinea.importot_lfa,tbFacturaLinea.fecha_lfa,"+
	    "tbFacturaLinea.nprograma_lfa,tbMaestroClientes.ID,"+
	    "tbMaestroClientes.IdCliente,tbMaestroClientes.DescCliente,"+
	    "tbMaestroClientes.Direccion,tbMaestroClientes.Poblacion,"+
	    "tbMaestroClientes.Provincia,tbMaestroClientes.CodPostal,"+
	    "tbMaestroClientes.RazonSocial,tbMaestroClientes.PersContacto,"+
	    "tbMaestroClientes.EmailContacto,tbMaestroClientes.Telf1,"+
	    "tbMaestroClientes.Telf2,tbMaestroClientes.Fax,"+
	    "tbMaestroClientes.CIF,tbMaestroClientes.NumProveedor,"+
	    "tbMaestroClientes.CuentaContable,tbMaestroClientes.IdFormaPago,"+
	    "tbMaestroClientes.TipoIva,tbMaestroClientes.IdMoneda,"+
	    "tbMaestroClientes.DiaPago1,tbMaestroClientes.DiaPago2,tbMaestroClientes.DiaPago3,"+
	    "tbMaestroClientes.Pais,tbMaestroClientes.Observaciones,"+
	    "tbMaestroClientes.CodigoBanco,tbMaestroClientes.CodigoSucursal,"+
	    "tbMaestroClientes.Codigo1DC,tbMaestroClientes.CodigoCuenta,"+
	    "tbMaestroArticulos.RefCliente,tbMaestroformpago.denom_fp,ParametrosAplicacion.bic,tbFacturaCabecera.impirpf,tbFacturaCabecera.pirpf "+
	    "FROM tbFacturaCabecera tbFacturaCabecera LEFT JOIN dbo.tbFacturaLinea tbFacturaLinea ON "+
		 "tbFacturaCabecera.eje_cfa = tbFacturaLinea.eje_lfa "+
	    "AND tbFacturaCabecera.nup_cfa = tbFacturaLinea.nup_lfa "+
	    "AND tbFacturaCabecera.ser_cfa = tbFacturaLinea.ser_lfa "+
	    "LEFT JOIN dbo.tbMaestroClientes tbMaestroClientes ON "+
		 "tbFacturaCabecera.clie_cfa = tbMaestroClientes.IdCliente "+
	    "LEFT JOIN dbo.tbMaestroformpago tbMaestroformpago ON "+
		 "tbFacturaCabecera.cfpa_cfa = tbMaestroformpago.codig_fp "+
	    "LEFT JOIN dbo.tbMaestroArticulos tbMaestroArticulos ON "+
		 "tbFacturaLinea.ref_lfa = tbMaestroArticulos.Codigo,"+
	    "dbo.ParametrosAplicacion ParametrosAplicacion "+
	    "WHERE (tbFacturaCabecera.eje_cfa >= "+DEJE+
	    " AND tbFacturaCabecera.eje_cfa <= "+HEJE+") "+
	    "AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
	    "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') "+
	    "AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
	    " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") "+
	    "AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+") "+
	    "ORDER BY tbFacturaLinea.eje_lfa ASC,tbFacturaLinea.ser_lfa ASC,"+
	    "tbFacturaLinea.nup_lfa ASC,tbFacturaLinea.nli_lfa ASC";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null,99999999)
		var rows = dataset.getMaxRowIndex();
		xml = new String();
		htm = new String();
		newxml = new String();
		if(rows > 0)
		{	
			//var uuidfactura = dataset.getValue(1,22)
			datosempresa(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
			var cliente = dataset.getValue(1,29);
				xml = '<?xml version="1.0" encoding="UTF-8"?>';
				application.output('Cabecera')
				Document = <TicketBai/>
				/*ns = new Namespace('T',"urn:ticketbai:emision")
				Document.addNamespace(ns)							
				
				ns = new Namespace('ds','http://www.w3.org/2000/09/xmldsig#')
				Document.addNamespace(ns)
				
				ns = new Namespace('schemaLocation', 'urn:ticketbai:emision ticketBaiV12.xsd ')
				Document.addNamespace(ns)
				
				ns = new Namespace('xsi','http://www.w3.org/2001/XMLSchema-instance')
				Document.addNamespace(ns)
				*/
				Cabecera = <Cabecera/>
					IDVersionTBAI = <IDVersionTBAI/>
					IDVersionTBAI.appendChild('1.2')
				Cabecera.appendChild(IDVersionTBAI)
				
				Sujetos = <Sujetos/>
					Emisor = <Emisor/>
						NIF = <NIF/>
						NIF.appendChild(gcparametrosaplicacion_to_parametrosaplicacion.cif)
						ApellidosNombreRazonSocial = <ApellidosNombreRazonSocial/>
						ApellidosNombreRazonSocial.appendChild(globals.GCQuitarCaracteresEspeciales(gcparametrosaplicacion_to_parametrosaplicacion.empresa))
					Emisor.appendChild(NIF)
					Emisor.appendChild(ApellidosNombreRazonSocial)
				Sujetos.appendChild(Emisor)
					Destinatarios = <Destinatarios/>
						IDDestinatario = <IDDestinatario/>
							cifempresa = utils.stringRight(cifcliente,9)//cifcliente//forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.cif;
							application.output(cifempresa)
							if(paiscliente && paiscliente == 'ES')
							{
								NIF = <NIF/>
								NIF.appendChild(cifempresa)
							}
							else
							{
								IDOtro = <IDOtro/>
									CodigoPais = <CodigoPais/>
									CodigoPais.appendChild(paiscliente)
									IDType = <IDType/>
									/*02 NIF-IVA.
									  03 Pasaporte
									  04 Documento oficial de identificación expedido por el país o territorio de residencia.
									  05 Certificado de residencia.
									  06 Otro documento probatorio*/
									if(UE.indexOf(paiscliente) != -1) IDType.appendChild('02')
									else IDType.appendChild('04')
									ID = <ID/>
									ID.appendChild(cifcliente)
								IDOtro.appendChild(CodigoPais)
								IDOtro.appendChild(IDType)
								IDOtro.appendChild(ID)
							}
							ApellidosNombreRazonSocial = <ApellidosNombreRazonSocial/>
							razonsocial = globals.GCQuitarCaracteresEspeciales(utils.stringLeft(desccliente,120)) //forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.desccliente;
							ApellidosNombreRazonSocial.appendChild(razonsocial)
							CodigoPostal = <CodigoPostal/>
							codigopostal = codpostalcliente//forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal;
							CodigoPostal.appendChild(codigopostal)
							Direccion = <Direccion/>
							direccion = globals.GCQuitarCaracteresEspeciales(utils.stringLeft(direccioncliente+ ' '+poblacioncliente+' '+provinciacliente,250))//forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.direccion;
							Direccion.appendChild(direccion)
						if(paiscliente && paiscliente == 'ES') IDDestinatario.appendChild(NIF)
						else IDDestinatario.appendChild(IDOtro)
						IDDestinatario.appendChild(ApellidosNombreRazonSocial)
						IDDestinatario.appendChild(CodigoPostal)
						IDDestinatario.appendChild(Direccion)
					Destinatarios.appendChild(IDDestinatario)
				if(cifempresa && cifempresa != '.' && cifempresa != '*'){
				Sujetos.appendChild(Destinatarios)			
					VariosDestinatarios = <VariosDestinatarios/>
					VariosDestinatarios.appendChild('N')
					EmitidaPorTercerosODestinatario = <EmitidaPorTercerosODestinatario/>
					//que en este campo hay 3 opciones. T,N y D (T terceros, N de no y D emitida por el destinatario) 
					EmitidaPorTercerosODestinatario.appendChild('N')
				Sujetos.appendChild(VariosDestinatarios)
				Sujetos.appendChild(EmitidaPorTercerosODestinatario)
				}
				Factura = <Factura/>
					
					CabeceraFactura = <CabeceraFactura/>
						SerieFactura = <SerieFactura/>
						var fechafra = dataset.getValue(1,26);
						SerieFactura.appendChild(fechafra.getFullYear())
						NumFactura = <NumFactura/>
						NumFactura.appendChild(dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24))
						FechaExpedicionFactura = <FechaExpedicionFactura/>
						//FechaExpedicionFactura.appendChild(utils.dateFormat(dataset.getValue(1,26),'dd-MM-yyyy'))
						var fechenvfra = new Date();
						var diafactura = utils.numberFormat(fechenvfra.getDate(),'00');
					    var mesfactura = utils.numberFormat(fechenvfra.getMonth()+1,'00');
					    var anofactura = utils.stringRight(fechenvfra.getFullYear().toString(),2);
					    var s = fechenvfra.getFullYear().toString();
						var nf = dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24);
						var imp = dataset.getValue(1,49);
						FechaExpedicionFactura.appendChild(utils.dateFormat(fechenvfra,'dd-MM-yyyy'))
						HoraExpedicionFactura = <HoraExpedicionFactura/>
						HoraExpedicionFactura.appendChild(utils.dateFormat(fechenvfra,'HH:mm:ss'))					
						FacturaSimplificada = <FacturaSimplificada/>
						if(cifcliente && cifcliente != '.' && cifcliente != '*'){
						FacturaSimplificada.appendChild('N')
						}
						else{
						FacturaSimplificada.appendChild('S')
						}
						FacturaEmitidaSustitucionSimplificada = <FacturaEmitidaSustitucionSimplificada/>
						FacturaEmitidaSustitucionSimplificada.appendChild('N')					
					CabeceraFactura.appendChild(SerieFactura)
					CabeceraFactura.appendChild(NumFactura)
					CabeceraFactura.appendChild(FechaExpedicionFactura)
					CabeceraFactura.appendChild(HoraExpedicionFactura)								
					CabeceraFactura.appendChild(FacturaSimplificada)
					CabeceraFactura.appendChild(FacturaEmitidaSustitucionSimplificada)
					
					//miro si se trata de una factura rectificativa
					var query333 = "select fraoriginal,causarect FROM [tbFacturaCabecera] "+
					"WHERE (tbFacturaCabecera.eje_cfa >= "+DEJE+
				    " AND tbFacturaCabecera.eje_cfa <= "+HEJE+") "+
				    "AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
				    "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') "+
				    "AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
				    " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") "+
				    "AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+") ";
				    var dataset333 = databaseManager.getDataSetByQuery(globals.GCconex, query333, null, 1);
					var fraoriginal = dataset333.getValue(1,1);
					if(fraoriginal && fraoriginal.length == 7)
					{
						var ejerectificada = utils.stringLeft(fraoriginal,2);
						var nuprectificada = utils.stringRight(fraoriginal,5);
						query333 = "select ISNULL(impbie_cfa,0)+ISNULL(impbie2_cfa,0)+ISNULL(impbie3_cfa,0) AS IMPBIE, \
						ISNULL(cuotaiva_cfa,0)+ISNULL(cuotaiva2_cfa,0)+ISNULL(cuotaiva3_cfa,0) AS IMPCUOTA,\
						ISNULL(impre,0)+ISNULL(impre2,0)+ISNULL(impre3,0) AS IMPRE,fecha_cfa,fechaenviofichero from tbFacturaCabecera \
						where eje_cfa = "+ ejerectificada + " and nup_cfa ="+nuprectificada;
						dataset333 = databaseManager.getDataSetByQuery(globals.GCconex, query333, null, 1);
						var impbirect = dataset333.getValue(1,1);
						var cuotarect = dataset333.getValue(1,2);
						var cuotarerect = dataset333.getValue(1,3);
						var fechafrarect = dataset333.getValue(1,4);
						var fechaenvfrarect = dataset333.getValue(1,5);
						FacturaRectificativa = <FacturaRectificativa/>
							Codigo = <Codigo/>
							//R1 Factura rectificativa: error fundado en derecho y Art. 80 Uno, Dos y Seis de la Ley del IVA.
							//R2 Factura rectificativa: artículo 80 Tres de la Ley del IVA.
							//R3 Factura rectificativa: artículo 80 Cuatro de la Ley del IVA.
							//R4 Factura rectificativa: Resto.
							//R5 Factura rectificativa en facturas simplificadas.
							
							Codigo.appendChild('R4')
							Tipo = <Tipo/>
							//S Factura rectificativa por sustitución.
							//I Factura rectificativa por diferencias.
							Tipo.appendChild('S')
							ImporteRectificacionSustitutiva = <ImporteRectificacionSustitutiva/>
								BaseRectificada = <BaseRectificada/>
								BaseRectificada.appendChild(globals.GCROUND(impbirect,2))
								CuotaRectificada = <CuotaRectificada/>
								CuotaRectificada.appendChild(globals.GCROUND(cuotarect,2))
								CuotaRecargoRectificada = <CuotaRecargoRectificada/>
								CuotaRecargoRectificada.appendChild(globals.GCROUND(cuotarerect,2))
							ImporteRectificacionSustitutiva.appendChild(BaseRectificada)
							ImporteRectificacionSustitutiva.appendChild(CuotaRectificada)
							ImporteRectificacionSustitutiva.appendChild(CuotaRecargoRectificada)
						FacturaRectificativa.appendChild(Codigo)	
						FacturaRectificativa.appendChild(Tipo)	
						FacturaRectificativa.appendChild(ImporteRectificacionSustitutiva)	
						FacturasRectificadasSustituidas = <FacturasRectificadasSustituidas/>
							IDFacturaRectificadaSustituida = <IDFacturaRectificadaSustituida/>
								SerieFactura = <SerieFactura/>
								SerieFactura.appendChild('20'+ejerectificada)
								NumFactura = <NumFactura/>
								NumFactura.appendChild(ejerectificada+nuprectificada)
								FechaExpedicionFactura = <FechaExpedicionFactura/>
								if(fechaenvfrarect) FechaExpedicionFactura.appendChild(utils.dateFormat(fechaenvfrarect,'dd-MM-yyyy'))
								else FechaExpedicionFactura.appendChild(utils.dateFormat(fechafrarect,'dd-MM-yyyy'))
							IDFacturaRectificadaSustituida.appendChild(SerieFactura)
							IDFacturaRectificadaSustituida.appendChild(NumFactura)
							IDFacturaRectificadaSustituida.appendChild(FechaExpedicionFactura)
						FacturasRectificadasSustituidas.appendChild(IDFacturaRectificadaSustituida)		
					}
								
				if(fraoriginal)
				{
					CabeceraFactura.appendChild(FacturaRectificativa)
					CabeceraFactura.appendChild(FacturasRectificadasSustituidas)
				}
				Factura.appendChild(CabeceraFactura)
				application.output('Lineas')
					var p1 = dataset.getValue(1,41)
					var p2 = dataset.getValue(1,44)
					var p3 = dataset.getValue(1,47)
					var re1 = dataset.getValue(1,52)
					var re2 = dataset.getValue(1,53)
					var re3 = dataset.getValue(1,54)
					
						DatosFactura = <DatosFactura/>
						FechaOperacion = <FechaOperacion/>
						FechaOperacion.appendChild(utils.dateFormat(dataset.getValue(1,26),'dd-MM-yyyy'))
						DescripcionFactura = <DescripcionFactura/>
						if(dataset.getValue(1,33)) DescripcionFactura.appendChild(globals.GCQuitarCaracteresEspeciales(utils.stringLeft(dataset.getValue(1,33),250)))
						else DescripcionFactura.appendChild(globals.GCQuitarCaracteresEspeciales("FACTURA "+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)))
						DetallesFactura = <DetallesFactura/>
							for(var i=1;i<=rows;i++)
							{
								var c = dataset.getValue(i,64);
								var impuni = dataset.getValue(i,65);
								var implin = dataset.getValue(i,73);
								var imptot = dataset.getValue(i,74);
								var impdto = dataset.getValue(i,69);
								var pivalin = dataset.getValue(i,67);
								var relin = 0;
								var query999 = "select [aplicarre] FROM [tbMaestroClientes] WHERE [idcliente] = "+cliente;
								var dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
								if(dataset999.getValue(1,1) == 1)
								{
									query999 = "select [IvaRE] FROM [tbMaestroTipoIva] WHERE [Factor] = "+pivalin;
									dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
									var trelin = dataset999.getValue(1,1);
									relin = globals.GCROUND(implin*trelin*0.01,2)
									//reimpuni = globals.GCROUND(impuni*trelin*0.01,2)
								}
								
								imptot = imptot + relin;
								/*if((re1 && re1 != 0)) 
								{
									if(re1){
										var query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
										"WHERE [Factor] = "+p1;
										var dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
										var tre = dataset88.getValue(1,1);
										if(!tre) tre = 0;
									}
								}*/
								//if((c && c != 0) && (impuni && impuni != 0) && (imptot && imptot != 0))
								//{
									IDDetalleFactura = <IDDetalleFactura/>
										DescripcionDetalle =<DescripcionDetalle/>
										if(dataset.getValue(i,63)) DescripcionDetalle.appendChild(globals.GCQuitarCaracteresEspeciales(utils.stringLeft(utils.stringReplace(dataset.getValue(i,63),"\n"," "),250)))
										else DescripcionDetalle.appendChild(globals.GCQuitarCaracteresEspeciales("Detalle factura "+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)));
										Cantidad = <Cantidad/>
										if(c) Cantidad.appendChild(dataset.getValue(i,64))
										else Cantidad.appendChild(globals.GCROUND(0,2).toFixed(2))	
										ImporteUnitario =<ImporteUnitario/>
										if(impuni) ImporteUnitario.appendChild(globals.GCROUND(dataset.getValue(i,65),2))
										else ImporteUnitario.appendChild(globals.GCROUND(0,2).toFixed(2))	
										Descuento = <Descuento/>
										if(impdto) Descuento.appendChild(globals.GCROUND(impdto,2).toFixed(2))
										else Descuento.appendChild(globals.GCROUND(0,2).toFixed(2))	
										ImporteTotal =<ImporteTotal/>
										//if(imptot) ImporteTotal.appendChild(globals.GCROUND(dataset.getValue(i,74)+relin,2))
										if(imptot) ImporteTotal.appendChild(globals.GCROUND(imptot,2))
										else ImporteTotal.appendChild(globals.GCROUND(0,2).toFixed(2))	
									IDDetalleFactura.appendChild(DescripcionDetalle)
									IDDetalleFactura.appendChild(Cantidad)
									IDDetalleFactura.appendChild(ImporteUnitario)
									IDDetalleFactura.appendChild(Descuento)
									IDDetalleFactura.appendChild(ImporteTotal)
									DetallesFactura.appendChild(IDDetalleFactura)
								//}
							}
							//miro a ver si existe descuento por pronto pago en la totalidad de la factura. Hay que comunicarlo como una linea más
							var query89 = "select depp_cfa,gtosfinan_cfa,pirpf from tbFacturaCabecera "+
							"WHERE (eje_cfa >= "+DEJE+" AND tbFacturaCabecera.eje_cfa <= "+HEJE+") AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
						    "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
						    " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+") "
							var dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
							var porcdtopp = dataset89.getValue(1,1);
							var porcgtofinan = dataset89.getValue(1,2);
							//var porcirpf = dataset89.getValue(1,3);
							
							query89 = "select distinct(piva_lfa),ISNULL(sum(impor_lfa),0) as impor_lfa "+
										"from tbFacturaLinea "+
										"where eje_lfa = "+DEJE+" AND ser_lfa ='"+DSER+"' AND nup_lfa = "+DNUP+
										" group by piva_lfa order by piva_lfa desc"
							dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,9999999)
							var porcivalin1 = dataset89.getValue(1,1);
							var porcivalin2 = dataset89.getValue(2,1);
							var porcivalin3 = dataset89.getValue(3,1);
							var imporlin1 = dataset89.getValue(1,2);
							var imporlin2 = dataset89.getValue(2,2);
							var imporlin3 = dataset89.getValue(3,2);
							var importelineadescuento = 0;
							var importelineadescuento2 = 0;
							var importelineadescuento3 = 0;
							var ivaimportelineadescuento = 0;
							var ivaimportelineadescuento2 = 0;
							var ivaimportelineadescuento3 = 0;
							var importegtosfinan = 0;
							var importereten = 0;
							
							if(porcdtopp)
							{								
								if(porcivalin1 || porcivalin1 == 0.0)
								{
									//relin = 0;
									importelineadescuento = globals.GCROUND(imporlin1*porcdtopp*0.01,2);
									query999 = "select [aplicarre] FROM [tbMaestroClientes] WHERE [idcliente] = "+cliente;
									dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
									if(dataset999.getValue(1,1) == 1)
									{
										query999 = "select [IvaRE] FROM [tbMaestroTipoIva] WHERE [Factor] = "+porcivalin1;
										dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
										trelin = dataset999.getValue(1,1);
										var relin1 = globals.GCROUND(importelineadescuento*trelin*0.01,2)
									}
									IDDetalleFactura = <IDDetalleFactura/>
									DescripcionDetalle =<DescripcionDetalle/>
									DescripcionDetalle.appendChild("DESCUENTO POR PRONTO PAGO "+porcivalin1+"%")
									Cantidad = <Cantidad/>
									Cantidad.appendChild(1)
									ImporteUnitario =<ImporteUnitario/>
									ImporteUnitario.appendChild("-"+globals.GCROUND(importelineadescuento,2))	
									Descuento = <Descuento/>
									Descuento.appendChild(globals.GCROUND(0,2).toFixed(2))	
									ImporteTotal =<ImporteTotal/>
									//if(relin1) importelineadescuento = globals.GCROUND(importelineadescuento+relin1,2);
									//ivaimportelineadescuento = globals.GCROUND(importelineadescuento*porcivalin1*0.01,2);
									//ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento+ivaimportelineadescuento,2))
									ivaimportelineadescuento = globals.GCROUND(importelineadescuento*porcivalin1*0.01,2);
									if(relin1) importelineadescuento = globals.GCROUND(importelineadescuento+relin1,2);
									ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento+ivaimportelineadescuento,2))
									IDDetalleFactura.appendChild(DescripcionDetalle)
									IDDetalleFactura.appendChild(Cantidad)
									IDDetalleFactura.appendChild(ImporteUnitario)
									IDDetalleFactura.appendChild(Descuento)
									IDDetalleFactura.appendChild(ImporteTotal)
									DetallesFactura.appendChild(IDDetalleFactura)
								}
								if(porcivalin2 || porcivalin2 == 0.0)
								{
									importelineadescuento = globals.GCROUND(imporlin2*porcdtopp*0.01,2);
									query999 = "select [aplicarre] FROM [tbMaestroClientes] WHERE [idcliente] = "+cliente;
									dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
									if(dataset999.getValue(1,1) == 1)
									{
										query999 = "select [IvaRE] FROM [tbMaestroTipoIva] WHERE [Factor] = "+porcivalin1;
										dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
										trelin = dataset999.getValue(1,1);
										var relin2 = globals.GCROUND(importelineadescuento*trelin*0.01,2)
									}
									IDDetalleFactura = <IDDetalleFactura/>
									DescripcionDetalle =<DescripcionDetalle/>
									DescripcionDetalle.appendChild("DESCUENTO POR PRONTO PAGO "+porcivalin2+"%")
									Cantidad = <Cantidad/>
									Cantidad.appendChild(1)
									ImporteUnitario =<ImporteUnitario/>
									importelineadescuento2 = imporlin2*porcdtopp*0.01;
									ImporteUnitario.appendChild("-"+globals.GCROUND(importelineadescuento2,2))	
									Descuento = <Descuento/>
									Descuento.appendChild(globals.GCROUND(0,2).toFixed(2))	
									ImporteTotal =<ImporteTotal/>
									//if(relin2) importelineadescuento = globals.GCROUND(importelineadescuento+relin2,2);
									//ivaimportelineadescuento2 = globals.GCROUND(importelineadescuento2*porcivalin2*0.01,2);
									//ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento2+ivaimportelineadescuento2,2))
									ivaimportelineadescuento = globals.GCROUND(importelineadescuento2*porcivalin2*0.01,2);
									if(relin2) importelineadescuento2 = globals.GCROUND(importelineadescuento2+relin2,2);
									ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento2+ivaimportelineadescuento2,2))
									IDDetalleFactura.appendChild(DescripcionDetalle)
									IDDetalleFactura.appendChild(Cantidad)
									IDDetalleFactura.appendChild(ImporteUnitario)
									IDDetalleFactura.appendChild(Descuento)
									IDDetalleFactura.appendChild(ImporteTotal)
									DetallesFactura.appendChild(IDDetalleFactura)
								}
								if(porcivalin3 || porcivalin3 == 0.0)
								{
									importelineadescuento = globals.GCROUND(imporlin3*porcdtopp*0.01,2);
									query999 = "select [aplicarre] FROM [tbMaestroClientes] WHERE [idcliente] = "+cliente;
									dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
									if(dataset999.getValue(1,1) == 1)
									{
										query999 = "select [IvaRE] FROM [tbMaestroTipoIva] WHERE [Factor] = "+porcivalin1;
										dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
										trelin = dataset999.getValue(1,1);
										var relin3 = globals.GCROUND(importelineadescuento*trelin*0.01,2)
									}
									IDDetalleFactura = <IDDetalleFactura/>
									DescripcionDetalle =<DescripcionDetalle/>
									DescripcionDetalle.appendChild("DESCUENTO POR PRONTO PAGO "+porcivalin3+"%")
									Cantidad = <Cantidad/>
									Cantidad.appendChild(1)
									ImporteUnitario =<ImporteUnitario/>
									importelineadescuento3 = imporlin3*porcdtopp*0.01;
									ImporteUnitario.appendChild("-"+globals.GCROUND(importelineadescuento3,2))	
									Descuento = <Descuento/>
									Descuento.appendChild(globals.GCROUND(0,2).toFixed(2))	
									ImporteTotal =<ImporteTotal/>
									//if(relin3) importelineadescuento3 = globals.GCROUND(importelineadescuento3+relin3,2);
									//ivaimportelineadescuento3 = globals.GCROUND(importelineadescuento3*porcivalin3*0.01,2);
									//ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento3+ivaimportelineadescuento3,2))
									ivaimportelineadescuento3 = globals.GCROUND(importelineadescuento3*porcivalin3*0.01,2);
									if(relin3) importelineadescuento3 = globals.GCROUND(importelineadescuento3+relin3,2);
									ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento3+ivaimportelineadescuento3,2))
									IDDetalleFactura.appendChild(DescripcionDetalle)
									IDDetalleFactura.appendChild(Cantidad)
									IDDetalleFactura.appendChild(ImporteUnitario)
									IDDetalleFactura.appendChild(Descuento)
									IDDetalleFactura.appendChild(ImporteTotal)
									DetallesFactura.appendChild(IDDetalleFactura)
								}
							}	
							if(porcgtofinan)
							{
								importegtosfinan = globals.GCROUND((imporlin1 + imporlin2 + imporlin3) * porcgtofinan  * 0.01, 2);
								
								IDDetalleFactura = <IDDetalleFactura/>
								DescripcionDetalle =<DescripcionDetalle/>
								DescripcionDetalle.appendChild("GASTOS FINANCIEROS")
								Cantidad = <Cantidad/>
								Cantidad.appendChild(1)
								ImporteUnitario =<ImporteUnitario/>
								ImporteUnitario.appendChild(importegtosfinan)	
								Descuento = <Descuento/>
								Descuento.appendChild(0)	
								ImporteTotal =<ImporteTotal/>
								ImporteTotal.appendChild(importegtosfinan)
								IDDetalleFactura.appendChild(DescripcionDetalle)
								IDDetalleFactura.appendChild(Cantidad)
								IDDetalleFactura.appendChild(ImporteUnitario)
								IDDetalleFactura.appendChild(Descuento)
								IDDetalleFactura.appendChild(ImporteTotal)
								DetallesFactura.appendChild(IDDetalleFactura)
							}
							
							//importereten = "-"+globals.GCROUND((imporlin1 + imporlin2 + imporlin3 /*- ImporDto*/) * porcirpf * -0.01, 2);
							var porcirpf = dataset.getValue(1,109)
							var importeirpf = dataset.getValue(1,108)
							if(importeirpf)
							{
								importereten = globals.GCROUND(dataset.getValue(1,108),2).toFixed(2)
								importereten = Math.abs(importereten)
							}
							else importereten = 0;
							/*if(porcirpf)
							{
								/*IDDetalleFactura = <IDDetalleFactura/>
								DescripcionDetalle =<DescripcionDetalle/>
								DescripcionDetalle.appendChild("RETENCIÓN SOPORTADA "+utils.numberFormat(porcirpf,'#,##0.00')+"%")
								Cantidad = <Cantidad/>
								Cantidad.appendChild(1)
								ImporteUnitario =<ImporteUnitario/>
								ImporteUnitario.appendChild(importereten)	
								Descuento = <Descuento/>
								Descuento.appendChild(0)	
								ImporteTotal =<ImporteTotal/>
								ImporteTotal.appendChild(importereten)
								IDDetalleFactura.appendChild(DescripcionDetalle)
								IDDetalleFactura.appendChild(Cantidad)
								IDDetalleFactura.appendChild(ImporteUnitario)
								IDDetalleFactura.appendChild(Descuento)
								IDDetalleFactura.appendChild(ImporteTotal)
								DetallesFactura.appendChild(IDDetalleFactura)
							}*/
							
							/*if((re1 && re1 != 0) || (re2 && re2 != 0) || (re3 && re3 != 0)) 
							{
								var relin = globals.GCROUND(re1+re2+re3,2);
								IDDetalleFactura = <IDDetalleFactura/>
								DescripcionDetalle =<DescripcionDetalle/>
								DescripcionDetalle.appendChild("RECARGO EQUIVALENCIA")
								Cantidad = <Cantidad/>
								Cantidad.appendChild(1)
								ImporteUnitario =<ImporteUnitario/>
								ImporteUnitario.appendChild(relin)	
								Descuento = <Descuento/>
								Descuento.appendChild(0)	
								ImporteTotal =<ImporteTotal/>
								ImporteTotal.appendChild(relin)
								IDDetalleFactura.appendChild(DescripcionDetalle)
								IDDetalleFactura.appendChild(Cantidad)
								IDDetalleFactura.appendChild(ImporteUnitario)
								IDDetalleFactura.appendChild(Descuento)
								IDDetalleFactura.appendChild(ImporteTotal)
								DetallesFactura.appendChild(IDDetalleFactura)
							}*/
							
							
						ImporteTotalFactura = <ImporteTotalFactura/>
						imp = 0;
						imp += dataset.getValue(1,49)
						imp += importereten;
						ImporteTotalFactura.appendChild(globals.GCROUND(imp,2))
						//ImporteTotalFactura.appendChild(dataset.getValue(1,49)+importereten)
						//ImporteTotalFactura.appendChild(dataset.getValue(1,49))
						//imp = dataset.getValue(1,49);
						RetencionSoportada = <RetencionSoportada/>
						//if(dataset.getValue(1,108)) RetencionSoportada.appendChild(globals.GCROUND(dataset.getValue(1,108),2).toFixed(2))
						if(importereten && importereten != 0) RetencionSoportada.appendChild(importereten)
						else RetencionSoportada.appendChild(0)
						/*El campo de <BaseImponibleACoste> solamente podrá informarse cuando
						alguna de las claves de <ClaveRegimenIvaOpTrascendencia> es 06 (Régimen
						especial grupo de entidades de IVA)*/
						//BaseImponibleACoste = <BaseImponibleACoste/>
						//BaseImponibleACoste.appendChild(0)
						Claves = <Claves/>
							IDClave = <IDClave/>
								/*01 Operación de régimen general y cualquier otro supuesto que no esté recogido en los siguientes valores.
								  02 Exportación.
								  03 Operaciones a las que se aplique el régimen especial de bienes usados, objetos de arte, antigüedades y objetos de colección.
								  04 Régimen especial del oro de inversión.
								  05 Régimen especial de las agencias de viajes.
								  06 Régimen especial grupo de entidades en IVA (Nivel Avanzado).
								  07 Régimen especial del criterio de caja.
								  08 Operaciones sujetas al IPSI/IGIC (Impuesto sobre la Producción, los Servicios y la Importación / Impuesto General Indirecto Canario).
								  09 Facturación de las prestaciones de servicios de agencias de viaje que actúan como mediadoras en nombre y por cuenta ajena (disposición adicional 3ª del Reglamento de Facturación).
								  10 Cobros por cuenta de terceros de honorarios profesionales o de derechos derivados de la propiedad industrial, de autor u otros por cuenta de sus socios, socias, asociados, asociadas, colegiados o colegiadas efectuados por sociedades, asociaciones, colegios profesionales u otras entidades querealicen estas funciones de cobro.
								  11 Operaciones de arrendamiento de local de negocio sujetas a retención.
								  12 Operaciones de arrendamiento de local de negocio no sujetas a retención.
								  13 Operaciones de arrendamiento de local de negocio sujetas y no sujetas a retención.
								  14 Factura con  IVA  pendiente  de  devengo  en  certificaciones  de  obra  cuyo  destinatario  sea una Administración Pública.
								  15 Factura con IVA pendiente de devengo en operaciones de tracto sucesivo.
								  317Operación acogida a alguno de los regímenes previstos en el Capítulo XI del Título IX (OSS e IOSS)
								  419Operaciones de actividades incluidas en el Régimen Especial de Agricultura, Ganadería y Pesca (REAGYP)
								  51 Operaciones en recargo de equivalencia.
								  54 Operaciones  realizadas  desde  establecimientos  permanentes  situados  en Canarias, Ceuta y Melilla.*/
								ClaveRegimenIvaOpTrascendencia = <ClaveRegimenIvaOpTrascendencia/>
								if(paiscliente && paiscliente == 'ES') 
								{
									if(codpostalcliente && (utils.stringLeft(codpostalcliente,2) == '35' ||
									utils.stringLeft(codpostalcliente,2) == '38' ||
									utils.stringLeft(codpostalcliente,2) == '51' ||
									utils.stringLeft(codpostalcliente,2) == '52')) ClaveRegimenIvaOpTrascendencia.appendChild('08')
									//else if(re1 && re1 != 0) ClaveRegimenIvaOpTrascendencia.appendChild('51')
									//retencion alquiler
									else if(porcirpf && porcirpf == 19) ClaveRegimenIvaOpTrascendencia.appendChild('11')
									else ClaveRegimenIvaOpTrascendencia.appendChild('01')
								}
								else ClaveRegimenIvaOpTrascendencia.appendChild('02')
							IDClave.appendChild(ClaveRegimenIvaOpTrascendencia)
						Claves.appendChild(IDClave)
					DatosFactura.appendChild(FechaOperacion)
					DatosFactura.appendChild(DescripcionFactura)
					DatosFactura.appendChild(DetallesFactura)
					DatosFactura.appendChild(ImporteTotalFactura)
					if(importereten && importereten != 0) DatosFactura.appendChild(RetencionSoportada)
					//DatosFactura.appendChild(BaseImponibleACoste)
					DatosFactura.appendChild(Claves)
					Factura.appendChild(DatosFactura)
					TipoDesglose = <TipoDesglose/>
					if(paiscliente && paiscliente == 'ES')
					{	
						DesgloseFactura = <DesgloseFactura/>
						/*var p1 = dataset.getValue(1,41)
						var p2 = dataset.getValue(1,44)
						var p3 = dataset.getValue(1,47)
						var re1 = dataset.getValue(1,52)
						var re2 = dataset.getValue(1,53)
						var re3 = dataset.getValue(1,54)*/
						if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.pais &&
						forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.pais != 'ES')
						{
							forms.FrmFacturasGC.sujetaexentaivasii = 'E';
						}
						else if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal &&
								(utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '35' ||
								utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '38' ||
								utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '51' ||
								utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '52'))
						{
							forms.FrmFacturasGC.sujetaexentaivasii = 'NS';
						}
						else
						{
							forms.FrmFacturasGC.sujetaexentaivasii = 'NE';
						}
						var sujetaexentaiva = forms.FrmFacturasGC.sujetaexentaivasii;
						if(!sujetaexentaiva) sujetaexentaiva = 'NE';
						if(sujetaexentaiva == 'NE')
						{
							//if((p1 != null && p1 > 0) ||
							//(p2 != null && p2 > 0) ||
							//(p3 != null && p3 > 0))
							//{
							query89 = "select impbie_cfa,impbie2_cfa,impbie3_cfa,cuotaiva_cfa,cuotaiva2_cfa,cuotaiva3_cfa \
										from tbFacturaCabecera where eje_cfa = "+DEJE+" AND ser_cfa ='"+DSER+"' AND nup_cfa = "+DNUP
							dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
							/*var totalBI = dataset89.getValue(1,1)*/
									Sujeta = <Sujeta/>
										NoExenta = <NoExenta/>
											DetalleNoExenta = <DetalleNoExenta/>
												TipoNoExenta = <TipoNoExenta/>
												//S1 Sin inversión del sujeto pasivo.
												//S2 Con inversión del sujeto pasivo.
												TipoNoExenta.appendChild('S1')
												DesgloseIVA = <DesgloseIVA/>
													//query89 = "select piva_cfa,piva2_cfa,piva3_cfa,impbie_cfa,impbie2_cfa,impbie3_cfa,cuotaiva_cfa,cuotaiva2_cfa,cuotaiva3_cfa "+
													//"from tbFacturaCabecera "+
													//"where eje_cfa = "+DEJE+" AND ser_cfa ='"+DSER+"' AND nup_cfa = "+DNUP;
													//dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
													DetalleIVA = <DetalleIVA/>
														BaseImponible = <BaseImponible/>
														//if(porcirpf) irpfBI = globals.GCROUND(dataset89.getValue(1,1) * porcirpf * 0.01,2)
														if(dataset89.getValue(1,1)) BaseImponible.appendChild(dataset89.getValue(1,1))
														else BaseImponible.appendChild(0)
														//BaseImponible.appendChild(globals.GCROUND(imporlin1-importelineadescuento,2))
														//BaseImponible.appendChild(globals.GCROUND(totalBI,2))
														TipoImpositivo = <TipoImpositivo/>
														//TipoImpositivo.appendChild(dataset89.getValue(1,1))
														TipoImpositivo.appendChild(porcivalin1)
														CuotaImpuesto = <CuotaImpuesto/>
														if(dataset89.getValue(1,4)) CuotaImpuesto.appendChild(dataset89.getValue(1,4))
														else CuotaImpuesto.appendChild(0)
														//CuotaImpuesto.appendChild(globals.GCROUND((imporlin1-importelineadescuento)*porcivalin1*0.01,2))
														//CuotaImpuesto.appendChild(globals.GCROUND(totalBI*porcivalin1*0.01,2))
													DetalleIVA.appendChild(BaseImponible)
													DetalleIVA.appendChild(TipoImpositivo)
													DetalleIVA.appendChild(CuotaImpuesto)
													if((re1 && re1 != 0)) 
													{
														if(re1){
															var query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
															"WHERE [Factor] = "+p1;
															var dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
															var tre = dataset88.getValue(1,1);
															if(!tre) tre = 0;
															TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
															TipoRecargoEquivalencia.appendChild(tre)
															CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
															CuotaRecargoEquivalencia.appendChild(re1)
															//OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
															//OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')
															DetalleIVA.appendChild(TipoRecargoEquivalencia)
															DetalleIVA.appendChild(CuotaRecargoEquivalencia)
															//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
														}
													}
												DesgloseIVA.appendChild(DetalleIVA)
													//if(dataset89.getValue(1,2))
													//if(porcivalin2)
													if(imporlin2 && porcivalin2 != 0)
													{														
															DetalleIVA = <DetalleIVA/>
																BaseImponible = <BaseImponible/>
																if(dataset89.getValue(1,2)) BaseImponible.appendChild(dataset89.getValue(1,2))
																else BaseImponible.appendChild(0)
																//BaseImponible.appendChild(globals.GCROUND(imporlin2-importelineadescuento2,2))
																TipoImpositivo = <TipoImpositivo/>
																//TipoImpositivo.appendChild(dataset89.getValue(1,2))
																TipoImpositivo.appendChild(porcivalin2)
																CuotaImpuesto = <CuotaImpuesto/>
																if(dataset89.getValue(1,5)) CuotaImpuesto.appendChild(dataset89.getValue(1,5))
																else CuotaImpuesto.appendChild(0)
																//CuotaImpuesto.appendChild(globals.GCROUND((imporlin2-importelineadescuento2)*porcivalin2*0.01,2))
															DetalleIVA.appendChild(BaseImponible)
															DetalleIVA.appendChild(TipoImpositivo)
															DetalleIVA.appendChild(CuotaImpuesto)
															if((re2 && re2 != 0)) 
															{	if(re2){
																	query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																	"WHERE [Factor] = "+p2;
																	dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																	tre = dataset88.getValue(1,1);
																	if(!tre) tre = 0;
																	TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																	TipoRecargoEquivalencia.appendChild(tre)
																	CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																	CuotaRecargoEquivalencia.appendChild(re2)
																	//OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
																	//OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')
																	DetalleIVA.appendChild(TipoRecargoEquivalencia)
																	DetalleIVA.appendChild(CuotaRecargoEquivalencia)
																	//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
																}
															}
														
													DesgloseIVA.appendChild(DetalleIVA)
													}
													else if(imporlin2 && porcivalin2 == 0)
													{
														//Sujeta =<Sujeta/>
														Exenta = <Exenta/>
															DetalleExenta = <DetalleExenta/>
																CausaExencion = <CausaExencion/>
																/* E1 Exenta por el artículo 20 de la Ley del IVA
																 * E2 Exenta por el artículo 21 de la Ley del IVA
																 * E3 Exenta por el artículo 22 de la Ley del IVA
																 * E4 Exenta por el artículo 23 y 24 de la Ley del IVA
																 * E5 Exenta por el artículo 25 de la Ley del IVA
																 * E6 Exenta por otra causa
																 **/
																CausaExencion.appendChild('E6')
																BaseImponible = <BaseImponible/>									
																//if(dataset.getValue(1,41) == 0) BaseImponible.appendChild(bi1)
																if(imporlin2)	BaseImponible.appendChild(imporlin2)
																//if(dataset.getValue(1,47) == 0) BaseImponible.appendChild(bi3)
																
															DetalleExenta.appendChild(CausaExencion)
															DetalleExenta.appendChild(BaseImponible)
														Exenta.appendChild(DetalleExenta)
													//Sujeta.appendChild(Exenta)
												//DesgloseFactura.appendChild(Sujeta)
													}
													//if(dataset89.getValue(1,3))
													//if(porcivalin3)
													if(imporlin3 && porcivalin3 != 0)
													{														
															DetalleIVA = <DetalleIVA/>
																BaseImponible = <BaseImponible/>
																if(dataset89.getValue(1,3)) BaseImponible.appendChild(dataset89.getValue(1,3))
																else BaseImponible.appendChild(0)
																//BaseImponible.appendChild(globals.GCROUND(imporlin3-importelineadescuento3,2))
																TipoImpositivo = <TipoImpositivo/>
																//TipoImpositivo.appendChild(dataset89.getValue(1,3))
																TipoImpositivo.appendChild(porcivalin3)
																CuotaImpuesto = <CuotaImpuesto/>
																if(dataset89.getValue(1,6)) CuotaImpuesto.appendChild(dataset89.getValue(1,6))
																else CuotaImpuesto.appendChild(0)
																//CuotaImpuesto.appendChild(globals.GCROUND((imporlin3-importelineadescuento3)*porcivalin3*0.01,2))
															DetalleIVA.appendChild(BaseImponible)
															DetalleIVA.appendChild(TipoImpositivo)
															DetalleIVA.appendChild(CuotaImpuesto)
															if((re3 && re3 != 0)) 
															{	if(re3){
																	query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																	"WHERE [Factor] = "+p3;
																	dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																	tre = dataset88.getValue(1,1);
																	if(!tre) tre = 0;
																	TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																	TipoRecargoEquivalencia.appendChild(tre)
																	CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																	CuotaRecargoEquivalencia.appendChild(re3)
																	//OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
																	//OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')
																	DetalleIVA.appendChild(TipoRecargoEquivalencia)
																	DetalleIVA.appendChild(CuotaRecargoEquivalencia)
																	//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
																}
															}
														
														/*if((re1 && re1 != 0) || (re2 && re2 != 0) || (re3 && re3 != 0)) 
														{	
															OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
															OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('S')													
															DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
														}*/
													DesgloseIVA.appendChild(DetalleIVA)
													}
													else if(imporlin3 && porcivalin3 == 0)
													{
														//Sujeta =<Sujeta/>
														Exenta = <Exenta/>
															DetalleExenta = <DetalleExenta/>
																CausaExencion = <CausaExencion/>
																/* E1 Exenta por el artículo 20 de la Ley del IVA
																 * E2 Exenta por el artículo 21 de la Ley del IVA
																 * E3 Exenta por el artículo 22 de la Ley del IVA
																 * E4 Exenta por el artículo 23 y 24 de la Ley del IVA
																 * E5 Exenta por el artículo 25 de la Ley del IVA
																 * E6 Exenta por otra causa
																 **/
																CausaExencion.appendChild('E6')
																BaseImponible = <BaseImponible/>									
																//if(dataset.getValue(1,41) == 0) BaseImponible.appendChild(bi1)
																if(imporlin3)	BaseImponible.appendChild(imporlin3)
																//if(dataset.getValue(1,47) == 0) BaseImponible.appendChild(bi3)
																
															DetalleExenta.appendChild(CausaExencion)
															DetalleExenta.appendChild(BaseImponible)
														Exenta.appendChild(DetalleExenta)
													//Sujeta.appendChild(Exenta)
												//DesgloseFactura.appendChild(Sujeta)	
													}
													
													
													/*if((re1 && re1 != 0) || (re2 && re2 != 0) || (re3 && re3 != 0)) 
													{
															if(re1){
																var query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																"WHERE [Factor] = "+p1;
																var dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																var tre = dataset88.getValue(1,1);
																if(!tre) tre = 0;
																TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																TipoRecargoEquivalencia.appendChild(tre)
																CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																CuotaRecargoEquivalencia.appendChild(re1)
																DetalleIVA.appendChild(TipoRecargoEquivalencia)
																DetalleIVA.appendChild(CuotaRecargoEquivalencia)
															DesgloseIVA.appendChild(DetalleIVA)
															}
															if(re2){
																query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																"WHERE [Factor] = "+p2;
																dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																tre = dataset88.getValue(1,1);
																if(!tre) tre = 0;
																TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																TipoRecargoEquivalencia.appendChild(tre)
																CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																CuotaRecargoEquivalencia.appendChild(re2)
																DetalleIVA.appendChild(TipoRecargoEquivalencia)
																DetalleIVA.appendChild(CuotaRecargoEquivalencia)
															}
															if(re3){
																query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																"WHERE [Factor] = "+p3;
																dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																tre = dataset88.getValue(1,1);
																if(!tre) tre = 0;
																TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																TipoRecargoEquivalencia.appendChild(tre)
																CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																CuotaRecargoEquivalencia.appendChild(re3)
																DetalleIVA.appendChild(TipoRecargoEquivalencia)
																DetalleIVA.appendChild(CuotaRecargoEquivalencia)
															}
															OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
															OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('S')													
														DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
													}*/	
												//DesgloseIVA.appendChild(DetalleIVA)
											DetalleNoExenta.appendChild(TipoNoExenta)
											DetalleNoExenta.appendChild(DesgloseIVA)
										NoExenta.appendChild(DetalleNoExenta)
									//Sujeta.appendChild(NoExenta)
									//DesgloseFactura.appendChild(Sujeta)
									
										
								if(porcgtofinan && importegtosfinan && importegtosfinan != 0)
								{
										/*NoSujeta =<NoSujeta/>
											DetalleNoSujeta = <DetalleNoSujeta/>
												Causa = <Causa/>
												Causa.appendChild('OT')
												Importe = <Importe/>
												Importe.appendChild(importegtosfinan)
											DetalleNoSujeta.appendChild(Causa)
											DetalleNoSujeta.appendChild(Importe)
										NoSujeta.appendChild(DetalleNoSujeta)
									DesgloseFactura.appendChild(NoSujeta)*/
										Sujeta =<Sujeta/>
										Exenta = <Exenta/>
											DetalleExenta = <DetalleExenta/>
												CausaExencion = <CausaExencion/>	
												/* E1 Exenta por el artículo 20 de la Ley del IVA
												 * E2 Exenta por el artículo 21 de la Ley del IVA
												 * E3 Exenta por el artículo 22 de la Ley del IVA
												 * E4 Exenta por el artículo 23 y 24 de la Ley del IVA
												 * E5 Exenta por el artículo 25 de la Ley del IVA
												 * E6 Exenta por otra causa
												 **/
												CausaExencion.appendChild('E1')
												BaseImponible = <BaseImponible/>									
												BaseImponible.appendChild(importegtosfinan)														
											DetalleExenta.appendChild(CausaExencion)
											DetalleExenta.appendChild(BaseImponible)
										Exenta.appendChild(DetalleExenta)
									Sujeta.appendChild(Exenta)
									Sujeta.appendChild(NoExenta)
								DesgloseFactura.appendChild(Sujeta)
								}
								else
								{
									if((imporlin2 && porcivalin2 == 0) || (imporlin3 && porcivalin3 == 0))
									{
										Sujeta.appendChild(Exenta)
									}
									Sujeta.appendChild(NoExenta)									
								DesgloseFactura.appendChild(Sujeta)								
								}
									/*if(porcirpf && importereten && importereten != 0)
									{
										NoSujeta =<NoSujeta/>
											DetalleNoSujeta = <DetalleNoSujeta/>
												Causa = <Causa/>
												Causa.appendChild('OT')
												Importe = <Importe/>
												Importe.appendChild(importereten)
											DetalleNoSujeta.appendChild(Causa)
											DetalleNoSujeta.appendChild(Importe)
										NoSujeta.appendChild(DetalleNoSujeta)
									DesgloseFactura.appendChild(NoSujeta)
									}*/
							//}
						}
						else if(sujetaexentaiva == 'NS')
						{
							if((p1 == 0) ||
							(p2 == 0) ||
							(p3 == 0))
							{
								
								var bi1 = dataset.getValue(1,40)
								if(!bi1) bi1 = 0;
								//var cuota1 = dataset.getValue(1,42)
								
								var bi2 = dataset.getValue(1,43)
								if(!bi2) bi2 = 0;
								//var cuota2 = dataset.getValue(1,45)
								
								var bi3 = dataset.getValue(1,46)
								if(!bi3) bi3 = 0;
								//var cuota3 = dataset.getValue(1,48)
								
								NoSujeta =<NoSujeta/>
									DetalleNoSujeta = <DetalleNoSujeta/>
										Causa = <Causa/>
										if(codpostalcliente && (utils.stringLeft(codpostalcliente,2) == '35' ||
										utils.stringLeft(codpostalcliente,2) == '38' ||
										utils.stringLeft(codpostalcliente,2) == '51' ||
										utils.stringLeft(codpostalcliente,2) == '52')) Causa.appendChild('RL') 
										else Causa.appendChild('OT')
										Importe = <Importe/>
										if(dataset.getValue(1,41) == 0)	Importe.appendChild(bi1)
										else if(dataset.getValue(1,44) == 0)	Importe.appendChild(bi2)
										else if(dataset.getValue(1,47) == 0)	Importe.appendChild(bi3)
									DetalleNoSujeta.appendChild(Causa)
									DetalleNoSujeta.appendChild(Importe)
									NoSujeta.appendChild(DetalleNoSujeta)
								DesgloseFactura.appendChild(NoSujeta)
							}
						}
						else if(sujetaexentaiva == 'E')
						{
							if((p1 == 0) ||
							(p2 == 0) ||
							(p3 == 0))
							{
								bi1 = dataset.getValue(1,40)
								if(!bi1) bi1 = 0;
								//cuota1 = dataset.getValue(1,42)
								
								bi2 = dataset.getValue(1,43)
								if(!bi2) bi2 = 0;
								//cuota2 = dataset.getValue(1,45)
								
								bi3 = dataset.getValue(1,46)
								if(!bi3) bi3 = 0;
								//cuota3 = dataset.getValue(1,48)
								
								Sujeta =<Sujeta/>
									Exenta = <Exenta/>
										DetalleExenta = <DetalleExenta/>
											CausaExencion = <CausaExencion/>
											/* E1 Exenta por el artículo 20 de la Ley del IVA
											 * E2 Exenta por el artículo 21 de la Ley del IVA
											 * E3 Exenta por el artículo 22 de la Ley del IVA
											 * E4 Exenta por el artículo 23 y 24 de la Ley del IVA
											 * E5 Exenta por el artículo 25 de la Ley del IVA
											 * E6 Exenta por otra causa
											 **/
											CausaExencion.appendChild('E6')
											BaseImponible = <BaseImponible/>									
											if(dataset.getValue(1,41) == 0) BaseImponible.appendChild(bi1)
											if(dataset.getValue(1,44) == 0)	BaseImponible.appendChild(bi2)
											if(dataset.getValue(1,47) == 0) BaseImponible.appendChild(bi3)
											
										DetalleExenta.appendChild(CausaExencion)
										DetalleExenta.appendChild(BaseImponible)
									Exenta.appendChild(DetalleExenta)
								Sujeta.appendChild(Exenta)
							DesgloseFactura.appendChild(Sujeta)
							}
						}
						
						TipoDesglose.appendChild(DesgloseFactura)
						//if(paiscliente && paiscliente == 'ES') Factura.appendChild(DatosFactura)	
						if(paiscliente && paiscliente == 'ES') Factura.appendChild(TipoDesglose)
					}
					else
					{
						DesgloseTipoOperacion = <DesgloseTipoOperacion/>
						/*if(forms.FrmFacturasGC.tipooperacionsii == 'E')
						{
							PrestacionServicios = <PrestacionServicios/>
							Sujeta = <Sujeta/>
							if(forms.FrmFacturasGC.sujetaexentaivasii == 'E' ||
							forms.FrmFacturasGC.sujetaexentaivasii == 'NS')
							{
								Exenta = <Exenta/>
								DetalleExenta = <DetalleExenta/>
							}
							else //if(forms.FrmFacturasGC.sujetaexentaivasii == 'NE')
							{
								NoExenta = <NoExenta/>
									DetalleNoExenta = <DetalleNoExenta/>
										TipoNoExenta = <TipoNoExenta/>
										//S1 Sin inversión del sujeto pasivo.
										//S2 Con inversión del sujeto pasivo.
										TipoNoExenta.appendChild('S1')
										DesgloseIVA = <DesgloseIVA/>
											//query89 = "select piva_cfa,piva2_cfa,piva3_cfa,impbie_cfa,impbie2_cfa,impbie3_cfa,cuotaiva_cfa,cuotaiva2_cfa,cuotaiva3_cfa "+
											//"from tbFacturaCabecera "+
											//"where eje_cfa = "+DEJE+" AND ser_cfa ='"+DSER+"' AND nup_cfa = "+DNUP;
											//dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
											DetalleIVA = <DetalleIVA/>
												BaseImponible = <BaseImponible/>
												//BaseImponible.appendChild(dataset89.getValue(1,4))
												BaseImponible.appendChild(globals.GCROUND(imporlin1-importelineadescuento,2))
												TipoImpositivo = <TipoImpositivo/>
												TipoImpositivo.appendChild(porcivalin1)
												CuotaImpuesto = <CuotaImpuesto/>
												CuotaImpuesto.appendChild(globals.GCROUND((imporlin1-importelineadescuento)*porcivalin1*0.01,2))
												//TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
												//TipoRecargoEquivalencia.appendChild(porcre)
												//CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
												//CuotaRecargoEquivalencia.appendChild(cuotare)
												//OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
												//OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')
											DetalleIVA.appendChild(BaseImponible)
											//DetalleIVA.appendChild(TipoImpositivo)
											//DetalleIVA.appendChild(CuotaImpuesto)
											//DetalleIVA.appendChild(TipoRecargoEquivalencia)
											//DetalleIVA.appendChild(CuotaRecargoEquivalencia)
											//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
										DesgloseIVA.appendChild(DetalleIVA)												
									DetalleNoExenta.appendChild(TipoNoExenta)
									DetalleNoExenta.appendChild(DesgloseIVA)
								NoExenta.appendChild(DetalleNoExenta)
							Sujeta.appendChild(NoExenta)
							PrestacionServicios.appendChild(Sujeta)
							DesgloseTipoOperacion.appendChild(PrestacionServicios)
							}
						}
						else
						{*/
							Entrega = <Entrega/>
								Sujeta = <Sujeta/>
								if(forms.FrmFacturasGC.sujetaexentaivasii == 'E' ||
								forms.FrmFacturasGC.sujetaexentaivasii == 'NS')
								{
									Exenta = <Exenta/>
										DetalleExenta = <DetalleExenta/>
											CausaExencion = <CausaExencion/>
											 /*E1 Exenta por el artículo 20 de la Ley del IVA
											 * E2 Exenta por el artículo 21 de la Ley del IVA
											 * E3 Exenta por el artículo 22 de la Ley del IVA
											 * E4 Exenta por el artículo 23 y 24 de la Ley del IVA
											 * E5 Exenta por el artículo 25 de la Ley del IVA
											 * E6 Exenta por otra causa
											 */
											 CausaExencion.appendChild('E6')
											 BaseImponible = <BaseImponible/>
											 BaseImponible.appendChild(globals.GCROUND(imporlin1-importelineadescuento,2))
										DetalleExenta.appendChild(CausaExencion)	
										DetalleExenta.appendChild(BaseImponible)
									Exenta.appendChild(DetalleExenta)
								Sujeta.appendChild(Exenta)
							Entrega.appendChild(Sujeta)
							DesgloseTipoOperacion.appendChild(Entrega)	
								}
								else 
								{
									NoExenta = <NoExenta/>
										DetalleNoExenta = <DetalleNoExenta/>
											TipoNoExenta = <TipoNoExenta/>
											//S1 Sin inversión del sujeto pasivo.
											//S2 Con inversión del sujeto pasivo.
											TipoNoExenta.appendChild('S1')
											DesgloseIVA = <DesgloseIVA/>
												//query89 = "select piva_cfa,piva2_cfa,piva3_cfa,impbie_cfa,impbie2_cfa,impbie3_cfa,cuotaiva_cfa,cuotaiva2_cfa,cuotaiva3_cfa "+
												//"from tbFacturaCabecera "+
												//"where eje_cfa = "+DEJE+" AND ser_cfa ='"+DSER+"' AND nup_cfa = "+DNUP;
												//dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
												DetalleIVA = <DetalleIVA/>
													BaseImponible = <BaseImponible/>
													//BaseImponible.appendChild(dataset89.getValue(1,4))
													BaseImponible.appendChild(globals.GCROUND(imporlin1-importelineadescuento,2))
													TipoImpositivo = <TipoImpositivo/>
													TipoImpositivo.appendChild(porcivalin1)
													CuotaImpuesto = <CuotaImpuesto/>
													CuotaImpuesto.appendChild(globals.GCROUND((imporlin1-importelineadescuento)*porcivalin1*0.01,2))
													/*TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
													TipoRecargoEquivalencia.appendChild(porcre)
													CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
													CuotaRecargoEquivalencia.appendChild(cuotare)
													OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
													OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')*/
												DetalleIVA.appendChild(BaseImponible)
												//DetalleIVA.appendChild(TipoImpositivo)
												//DetalleIVA.appendChild(CuotaImpuesto)
												//DetalleIVA.appendChild(TipoRecargoEquivalencia)
												//DetalleIVA.appendChild(CuotaRecargoEquivalencia)
												//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
											DesgloseIVA.appendChild(DetalleIVA)												
										DetalleNoExenta.appendChild(TipoNoExenta)
										DetalleNoExenta.appendChild(DesgloseIVA)
									NoExenta.appendChild(DetalleNoExenta)
								Sujeta.appendChild(NoExenta)
							Entrega.appendChild(Sujeta)
							DesgloseTipoOperacion.appendChild(Entrega)
								}
						//}
						TipoDesglose.appendChild(DesgloseTipoOperacion)
						Factura.appendChild(TipoDesglose)
					}
						
					//TipoDesglose.appendChild(DesgloseFactura)
				//Factura.appendChild(DatosFactura)	
				//Factura.appendChild(TipoDesglose)
				application.output('Huella')
				HuellaTBAI = <HuellaTBAI/>
				//Datos Factura anterior a indicar 	
					EncadenamientoFacturaAnterior = <EncadenamientoFacturaAnterior/>
						//query = "SELECT tbFacturaCabecera.ID FROM tbFacturaCabecera tbFacturaCabecera "+
						//		"WHERE tbFacturaCabecera.fechaenviofichero < GETDATE() "+
						//		"ORDER BY tbFacturaCabecera.fechaenviofichero DESC";
						//"WHERE tbFacturaCabecera.mac IS NOT NULL AND tbFacturaCabecera.fechaenviofichero < GETDATE() 
					    var eje = dataset.getValue(1,23);
						var nup = dataset.getValue(1,25);
						var uuidfraanterior = null;
						//var ser = dataset.getValue(1,24)
						
						//consulto el nº de facturas generadas en este ejercicio. Dependiendo de si es la primera o no hago una consulta u otra
						query = "select count(*) from tbFacturaCabecera where eje_cfa = "+eje+" and nup_cfa != "+nup
					    var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1);
					    if(dataset2.getValue(1,1) > 0)
					    {
					    	//consulto la primera factura con fecha de envío a TicketBAI en este ejercicio o anteriores
							query = "select top 1 b.ID, b.eje_cfa, b.nup_cfa, b.fechaenviofichero, b.firmafactura, b.fecha_cfa "+
									"from tbFacturaCabecera a inner join tbFacturaCabecera b "+
									"on b.fechaenviofichero < isnull(a.fechaenviofichero, GETDATE()) "+
									"where a.eje_cfa = "+eje+" and a.nup_cfa = "+nup+
									" order by a.fechaenviofichero, b.fechaenviofichero desc,b.nup_cfa desc"	
					    }
					    else
					    {
					    	//consulto la primera factura del ejercicio anterior con fecha de envío a TicketBAI
					    	query = "select top 1 ID, eje_cfa, nup_cfa, fechaenviofichero, firmafactura, fecha_cfa from tbFacturaCabecera "+
					    			"where eje_cfa < "+eje+" and fechaenviofichero is not null order by fechaenviofichero desc, nup_cfa desc"
					    }
								
						dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1);
						uuidfraanterior = dataset2.getValue(1,1);
						var fechafraanterior = dataset2.getValue(1,6);
						var ejefraanterior = dataset2.getValue(1,2);
						var nupfraanterior = dataset2.getValue(1,3);
						var fechenvfraanterior = dataset2.getValue(1,4);
						var firmafraanterior = dataset2.getValue(1,5);
						//vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturacabecera')  
						//vSet.loadRecords(databaseManager.convertToDataSet([uuid2]))  
						//fraanterior = vSet.getRecord(vSet.getSelectedIndex())
						SerieFacturaAnterior = <SerieFacturaAnterior/>
						if(uuidfraanterior && fechafraanterior) SerieFacturaAnterior.appendChild(fechafraanterior.getFullYear())
						NumFacturaAnterior = <NumFacturaAnterior/>
						if(uuidfraanterior)
						{
							NumFacturaAnterior.appendChild(ejefraanterior+utils.numberFormat(nupfraanterior,'00000'))
							application.output('FACTURA ANTERIOR ENVIADA A TICKETBAI: '+ejefraanterior+utils.numberFormat(nupfraanterior,'00000'));
							application.output(firmafraanterior);
						}
						else application.output('No hay factura anterior enviada')
						FechaExpedicionFacturaAnterior = <FechaExpedicionFacturaAnterior/>
						//if(fraanterior) FechaExpedicionFacturaAnterior.appendChild(utils.dateFormat(fraanterior.fecha_cfa,'ddMMyy'))
						if(uuidfraanterior) FechaExpedicionFacturaAnterior.appendChild(utils.dateFormat(fechenvfraanterior,'dd-MM-yyyy'))
						SignatureValueFirmaFacturaAnterior = <SignatureValueFirmaFacturaAnterior/> 
						if(uuidfraanterior) SignatureValueFirmaFacturaAnterior.appendChild(firmafraanterior)
					EncadenamientoFacturaAnterior.appendChild(SerieFacturaAnterior)	
					EncadenamientoFacturaAnterior.appendChild(NumFacturaAnterior)
					EncadenamientoFacturaAnterior.appendChild(FechaExpedicionFacturaAnterior)	
					EncadenamientoFacturaAnterior.appendChild(SignatureValueFirmaFacturaAnterior)	
					
				if(uuidfraanterior && firmafraanterior && fechenvfraanterior) HuellaTBAI.appendChild(EncadenamientoFacturaAnterior)	
				//Datos del Software AG para Ticketbai
					Software = <Software/>
						LicenciaTBAI = <LicenciaTBAI/>
						if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0)
						{
							if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){
								LicenciaTBAI.appendChild('TBAIGIPRE00000000017')// ENTORNO PRUEBAS GIPUZKOA
							}
							else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
								LicenciaTBAI.appendChild('TBAIGIPRE00000000017')// ENTORNO PRUEBAS VIZCAYA
							}
							else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
								LicenciaTBAI.appendChild('TBAIARbljlFjMdb00711')// ENTORNO PRUEBAS ARABA
							}
							else {
								LicenciaTBAI.appendChild('TBAIGIPRE00000000017')// ENTORNO PRUEBAS GIPUZKOA
							}
						}
						else
						{
							LicenciaTBAI.appendChild('TBAIGI84FAD45BA4608A')// ENTORNO REAL
						}
						EntidadDesarrolladora =<EntidadDesarrolladora/>
							NIF = <NIF/>
							NIF.appendChild('A20170254')
						EntidadDesarrolladora.appendChild(NIF)
						Nombre = <Nombre/>
						Nombre.appendChild('ERP_AG')
						Version = <Version/>
						if(gcparametrosaplicacion_to_parametrosaplicacion.empresa) Version.appendChild(new Date().getFullYear()+'-'+utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.empresa,14));	
						/*if(globals.GCconex == 'conexiongestioncomercialag') Version.appendChild(new Date().getFullYear()+'-AG');	
						else if(globals.GCconex == 'conexiongestionmlegazpipruebas') Version.appendChild(new Date().getFullYear()+'-MLEGAZPI');	
						else if(globals.GCconex == 'conexiongestiontmendizabalpruebas') Version.appendChild(new Date().getFullYear()+'-TMENDIZABAL');	
						else if(globals.GCconex == 'conexiongestionolabemarpruebas') Version.appendChild(new Date().getFullYear()+'-OLABEMAR');	
						else if(globals.GCconex == 'conexiongestioncomercialagdemo') Version.appendChild(new Date().getFullYear()+'-DEMO');	
						else if(globals.GCconex == 'conexiongestioncomercialagdemo2') Version.appendChild(new Date().getFullYear()+'-DEMO2');	
						else if(globals.GCconex == 'conexiongestionzusipruebas') Version.appendChild(new Date().getFullYear()+'-ZUSI');*/	
						else Version.appendChild(new Date().getFullYear()+'-')
					Software.appendChild(LicenciaTBAI)
					Software.appendChild(EntidadDesarrolladora)
					Software.appendChild(Nombre)
					Software.appendChild(Version)
				HuellaTBAI.appendChild(Software)
				//Datos del dispositivo desde el que se emite la factura
					NumSerieDispositivo = <NumSerieDispositivo/>
						
					var macaddress = plugins.UserManager.Client().macAddress;				
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
						macaddress = 'Falta Fichero MAC'
					}*/
					macaddress = forms.dlg_ImpresionFacturasTBAIGC.macaddress;
					application.output(macaddress)
					NumSerieDispositivo.appendChild(macaddress)
				HuellaTBAI.appendChild(NumSerieDispositivo)
			Document.appendChild(Cabecera)
			Document.appendChild(Sujetos)
			Document.appendChild(Factura)
			Document.appendChild(HuellaTBAI)
			
			xml += Document
			//var newxml = xml.toString().replace(' xmlns=""','')
			newxml = utils.stringReplace(xml.toString(),'<TicketBai','<T:TicketBai')
			newxml = utils.stringReplace(newxml,'</TicketBai','</T:TicketBai')
			newxml = utils.stringReplace(newxml,'<T:TicketBai>','<T:TicketBai xmlns:T="urn:ticketbai:emision" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ticketbai:emision ticketBaiV1-2.xsd ">')
			//newxml = utils.stringReplace(newxml,'<T:TicketBai>','<T:TicketBai xmlns:T="urn:ticketbai:emision" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ticketbai:emision ticketBaiV1-2.xsd"> ')
			
			newxml = utils.stringReplace(newxml,' xmlns=""','')
			//var xml2 = new XML(newxml)
			application.output(newxml);
					
					
			/*var jsFile = plugins.file.createTempFile('SEPA','.xml');
					
			var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
			if (!success) application.output('Could not write file.');
			//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ) 
			//{
				plugins.file.streamFilesToServer(jsFile)
				plugins.file.openFile(jsFile,"_blank",application/xml)
			/*}
			else 
			{
				plugins.file.streamFilesToServer(jsFile,doImportFile)
			}*/
	
			var nfactura = dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24);
			htm += newxml
			if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{	
				var folder = plugins.file.convertToJSFile("c:\\tmp");
				var b = plugins.file.createFolder(folder)
				if (b == true) application.output("El directorio c:\\tmp se ha creado correctamente o ya existía.");
				var js = "c:\\tmp\\TBAI"+nfactura+".xml";
				var f = plugins.file.convertToJSFile(js);
				if(f && f.exists()) f.deleteFile()
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
				
				var js2 = "c:\\tmp\\fentrada.xml";
				var f2 = plugins.file.convertToJSFile(js2);
				if(f2 && f2.exists()) f2.deleteFile()
				plugins.file.writeTXTFile(js2, htm, 'UTF8', 'application/xml');			
				
				//is the full path of the program to be executed.
				//var rutabat = "c:\\Servoy\\Comando_Autofirma_Servoy.bat";
				//var rutabat = "C:\\Servoy\\AFCL.exe";
				var hfolder = plugins.file.getHomeFolder()+"\\.servoy\\";
				/*if(globals.GCconex == 'conexiongestionzusipruebas') var rutabat = hfolder+"afirma_bat_zusi.exe";
				else if(globals.GCconex == 'conexiongestionmlegazpipruebas') rutabat = hfolder+"afirma_bat.exe"//rutabat = hfolder+"afirma_bat_mlegazpi.exe";
				else*/
				
				if(gcparametrosaplicacion_to_parametrosaplicacion.cifcertifdigital) var rutabat = hfolder+"afirma_bat_condni.exe";
				else rutabat = hfolder+"afirma_bat_sindni.exe";
				//var rutabat = hfolder+"afirma_bat.exe";
				
				//var rutabat = hfolder+"afirma_bat2.exe";
				//var rutabat = hfolder+"Comando_Autofirma_Servoy.bat";
				
				//PLUGIN
				/*var _result,_lastError='';
				var certif = gcparametrosaplicacion_to_parametrosaplicacion.certifdigital;
				var clavecertif = gcparametrosaplicacion_to_parametrosaplicacion.clave_certifdigital
				plugins.clieAfirmaEtec.POLICY_IDENTIFIER = "urn:ticketbai:dss:policy:1";
				plugins.clieAfirmaEtec.POLICY_DESCRIPTION = "TicketBAI sinadura-politika / Politica de firma TicketBAI";
				plugins.clieAfirmaEtec.POLICY_IDENTIFIER_HASH = "6NrKAm60o7u62FUQwzZew24ra2ve9PRQYwC21AM6In0=";
				plugins.clieAfirmaEtec.POLICY_IDENTIFIER_HASH_ALGORITHM = "http://www.w3.org/2001/04/xmlenc#sha256";
				plugins.clieAfirmaEtec.POLICY_QUALIFIER = "https://www.gipuzkoa.eus/ticketbai/sinadura";
				plugins.clieAfirmaEtec.SIGNATURE_PRODUCTION_CITY="San Sebastian";
			    plugins.clieAfirmaEtec.SIGNATURE_PRODUCTION_PROVINCE="Guipuzcoa";
			    plugins.clieAfirmaEtec.SIGNATURE_PRODUCTION_POSTAL_CODE="20011";
			    plugins.clieAfirmaEtec.SIGNATURE_PRODUCTION_COUNTRY="ESPAÑA";
			    plugins.clieAfirmaEtec.SIGNER_CLAIMED_ROLES="emisor";
	
			    									
				var _result = plugins.clieAfirmaEtec.signature("XADES","DETACHED", null, "SHA256WITHRSA", "PKCS12", "C:\\CERTIF_AG\\cgagfnmt_2.pfx", "@AGag2424", 
					"Software Security Device:12710839G ARROYO GONZALEZ GREGORIO (R: Q2826004-J)'s FNMT-RCM ID","c:\\tmp\\TBAI"+nfactura+".xml","c:\\TBAI"+nfactura+"_firma.xml",null)
				    //_result = plugins.clieAfirmaEtec.signature("FACE","DETACHED",null,"SHA256WITHRSA","PKCS12","C:/Etec/signPruebas/juan.pfx","1234",
				    //"Software Security Device:52845501B JUAN MANUEL RAMIREZ (R: B35925734)'s FNMT-RCM ID","C:/Etec/signPruebas/etec_e-Factura.xml","C:/Etec/signPruebasResult/01Efac_etec_e-Factura.xml",null);
	        	if (_result) application.output('base_signature_testSignature FIRMADO '+ plugins.clieAfirmaEtec.lastInfo);
			    _lastError = plugins.clieAfirmaEtec.getLastError();
			    //if (_lastError)    application.output('base_signature_testSignature getLastError(): '+_lastError,LOGGINGLEVEL.ERROR);
			    //return _lastError;
			    */
				f = plugins.file.convertToJSFile(rutabat);			
				if(f && f.exists())
				{
					
					var rutaficherosigned = "c:\\tmp\\TBAI"+nfactura+"_firma.xml";				
					f = plugins.file.convertToJSFile(rutaficherosigned);				
					if(f && f.exists()) f.deleteFile()
					
					var ficherosalida = "c:\\tmp\\fsalida.xml";				
					f2 = plugins.file.convertToJSFile(ficherosalida);				
					if(f2 && f2.exists()) f2.deleteFile()
					
					if(gcparametrosaplicacion_to_parametrosaplicacion.cifcertifdigital) var str = application.executeProgram(rutabat,[js, rutaficherosigned,gcparametrosaplicacion_to_parametrosaplicacion.cifcertifdigital]);
					else str = application.executeProgram(rutabat,[js, rutaficherosigned]);
					/*var rutabat2 = '@echo off \
									cd C:\Servoy \
									AFCL.exe sign -certgui -i '+rutaficherosigned+' -o '+ficherosalida+' -format XAdES -store windows -filter subject.contains:12710839G -xml  -config "policyIdentifier=urn:ticketbai:dss:policy:1\npolicyDescription=TicketBAI sinadura-politika / Politica de firma TicketBAI\npolicyIdentifierHash=6NrKAm60o7u62FUQwzZew24ra2ve9PRQYwC21AM6In0=\n policyIdentifierHashAlgorithm=http://www.w3.org/2001/04/xmlenc#sha256 \n policyQualifier=https://www.gipuzkoa.eus/ticketbai/sinadura \n format=XAdES Enveloped \
									exit'
					var str = plugins.UserManager.executeCommand(rutabat)*/
					
					if(!str || str == '') {
						globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
						//var programa = 'C:\\Servoy\\AFCL.exe sign -certgui -i '+js+' -o '+rutaficherosigned+' -format XAdES -store windows -filter subject.contains:12710839G -xml  -config "policyIdentifier=urn:ticketbai:dss:policy:1\npolicyDescription=TicketBAI sinadura-politika / Politica de firma TicketBAI\npolicyIdentifierHash=6NrKAm60o7u62FUQwzZew24ra2ve9PRQYwC21AM6In0=\n policyIdentifierHashAlgorithm=http://www.w3.org/2001/04/xmlenc#sha256 \n policyQualifier=https://www.gipuzkoa.eus/ticketbai/sinadura \n format=XAdES Enveloped"'
						globals.GCshowErrorDialog("La factura NO se ha firmado digitalmente de manera correcta.\n"+resp, null, null, null, null, null)
						return;
						//var programa = hfolder+'AFCL sign -certgui -i '+js+' -o '+rutaficherosigned+' -format XAdES -store windows -filter subject.contains:12710839G -xml  -config "policyIdentifier=urn:ticketbai:dss:policy:1\npolicyDescription=TicketBAI sinadura-politika / Politica de firma TicketBAI\npolicyIdentifierHash=6NrKAm60o7u62FUQwzZew24ra2ve9PRQYwC21AM6In0=\n policyIdentifierHashAlgorithm=http://www.w3.org/2001/04/xmlenc#sha256 \n policyQualifier=https://www.gipuzkoa.eus/ticketbai/sinadura \n format=XAdES Enveloped"'
						//str = plugins.UserManager.executeCommand(programa)
					}
					application.output(str)
					application.output(rutaficherosigned)						
					
					//Agrego firma al fichero XML
					
					//leo la firma
					/*var textofirmado = new Array();				    
					_oFR = new Packages.java.io.FileInputStream(rutaficherosigned),
					_oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
					_oBR = new Packages.java.io.BufferedReader(_oIR),
					z = 0;
					var fichfirmado = '';
					while ((textofirmado[z] = _oBR.readLine()) != null) 
					{
					     fichfirmado = fichfirmado+textofirmado[z].toString()
					     z++;            
					}
					_oBR.close()
					application.output(utils.stringReplace(htm,'</T:TicketBai>',''))
					application.output(utils.stringReplace(fichfirmado,'<?xml version="1.0" encoding="UTF-8"?>',""))
					//textofirmado = utils.stringReplace(textofirmado.toString(),'<?xml version="1.0" encoding="UTF-8"?>',"")
					var xml_2 = utils.stringReplace(htm,'</T:TicketBai>','');
					//application.output(xml_2)
					var firma = utils.stringReplace(fichfirmado,'<?xml version="1.0" encoding="UTF-8"?>',"")+'</T:TicketBai>'
					//application.output(firma)
					var xmlfinal = xml_2+firma;
					application.output(xmlfinal)
					rutaficherosigned = "c:\\tmp\\TBAI"+nfactura+'final.xml';
					f = plugins.file.convertToJSFile(rutaficherosigned);
					if(f && f.exists()) f.deleteFile()
					plugins.file.writeTXTFile(rutaficherosigned, xmlfinal, 'UTF8', 'application/xml');*/
					f = plugins.file.convertToJSFile(rutaficherosigned);
					if(f && f.exists())
					{
						f = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml");
						
						if(f && f.exists()) f.deleteFile()
						plugins.file.copyFile(rutaficherosigned,"C:\\tmp\\ficheroenviocurl.xml")
						//leo el fichero firmado
						var texto = new Array();
				    
						 var _oFR = new Packages.java.io.FileInputStream(rutaficherosigned),
					     _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
					     _oBR = new Packages.java.io.BufferedReader(_oIR),
					     z = 0;
						 while ((texto[z] = _oBR.readLine()) != null) 
						 {
					         //texto[i] = _oBR.readLine();
					         z++;            
					     }
					     _oBR.close();
					     
					     
					     macaddress = forms.dlg_ImpresionFacturasTBAIGC.macaddress;
					     /*var linea = texto[0];
					     var nodofirma = linea.slice(38,9471)
						 var SignatureValue = linea.slice(1548, 1561);*/
					     var linea = texto[z-1];
					     var SignatureValue = linea.slice(1687, 1700);
					     var SignatureValue2 = linea.slice(1687, 1787);
					     if(paiscliente && paiscliente == 'ES') linea = texto[24];
					     else linea = texto[29];
					     //var diafactura = linea.slice(30, 32);
					     //var mesfactura = linea.slice(33, 35);
					     //var anofactura = linea.slice(38, 40);
					     var ctbai36 = "TBAI-"+gcparametrosaplicacion_to_parametrosaplicacion.cif + "-" + 
					     				diafactura + mesfactura + anofactura + "-" + SignatureValue + "-"
										
					     /*htm = utils.stringReplace(htm,'</T:TicketBai',nodofirma+'</T:TicketBai')
						 js = "c:\\tmp\\TBAI"+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)+'_2.xml';
						 plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');*/
				
						
						//calculo CRC
						//ctbai36 = 'TBAI-00000006Y-251020-BTFPWP8DCLGAF-' //crc = 237
						//ctbai36 = 'TBAI-00000006Y-251019-btFpwP8dcLGAF-' //crc = 237
						
					    var crc = scopes.netticketbaiCRC8.calculate(ctbai36)
						//var crc = scopes.netticketbaiCRC8.CRC8(null,ctbai36)
						//var crc = scopes.netticketbaiCRC8.entrada(ctbai36)
						application.output(ctbai36+crc)
						
						
						  
						//load record by ID in foundset  
						var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturacabecera')
						vSet.loadRecords(databaseManager.convertToDataSet([uuid1]))  
						var record = vSet.getRecord(vSet.getSelectedIndex())
						/*
						//fecha envio fichero
						record.fechaenviofichero = fechenvfra;
						//mac
						record.mac = macaddress;
						//ctbai
						record.ctbai = ctbai36 + crc;
						//firmafactura
						record.firmafactura = SignatureValue2;
						//QR
						//linea = texto[22];
						//var s = linea.slice(20, 24);
						//linea = texto[23];
						//var nf = linea.slice(18, 25);
						//var imp = record['impnee_cfa'];
						
						//record.cqr = "https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+crc;
						  
						if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0)
						{
							//entorno de pruebas
							//var codqr = scopes.netticketbaiCRC8.calculate('https://batuz.eus/QRTBAI/?id=TBAI-00000006Y-251019-btFpwP8dcLGAF-237&s=T&nf=27174&i=4.70') // cqr = 007
							if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){
								var codqr =  scopes.netticketbaiCRC8.calculate("https://tbai.prep.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
								record.cqr = "https://tbai.prep.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
							}
							else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
								codqr =  scopes.netticketbaiCRC8.calculate("https://batuz.eus/QRTBAI/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
								record.cqr = "https://batuz.eus/QRTBAI/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
							}
							else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
								codqr =  scopes.netticketbaiCRC8.calculate("https://pruebas-ticketbai.araba.eus/tbai/consultafacturas/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
								record.cqr = "https://pruebas-ticketbai.araba.eus/tbai/consultafacturas/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
							}
							else {
								codqr =  scopes.netticketbaiCRC8.calculate("https://tbai.prep.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
								record.cqr = "https://tbai.prep.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
							}								
						}
						else
						{
							//entorno real
							if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){
								codqr =  scopes.netticketbaiCRC8.calculate("https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
								record.cqr = "https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
							}
							else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
								codqr =  scopes.netticketbaiCRC8.calculate("https://batuz.eus/QRTBAI/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
								record.cqr = "https://batuz.eus/QRTBAI/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
							}
							else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
								//codqr =  scopes.netticketbaiCRC8.calculate("https://ticketbai.araba.eus/tbai/consultafacturas/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
								//record.cqr = "https://ticketbai.araba.eus/tbai/consultafacturas/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
								codqr =  scopes.netticketbaiCRC8.calculate("https://ticketbai.araba.eus/tbai/qrtbai/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
								record.cqr = "https://ticketbai.araba.eus/tbai/qrtbai/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
										
							}
							else {
								codqr =  scopes.netticketbaiCRC8.calculate("https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
								record.cqr = "https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
							}
						}
						databaseManager.saveData(record);*/
						
						//ENVIO EL XML AL SISTEMA TICKETBAI
						application.output('ENVIO EL XML AL SISTEMA TICKETBAI CON CURL')
						//var resp = envioTBAI(rutaficherosigned)
						var resp = envioTBAI2(newxml)
						application.output(resp)
						
						if(utils.stringLeft(resp,2) == '00')
						{
							application.output(resp)
							
							ruta = "C:\\TMP\\salida.xml";
							f = plugins.file.convertToJSFile(ruta);
							if(f && f.exists())
							{
								//leo el fichero firmado
								texto = new Array();
								
								_oFR = new Packages.java.io.FileInputStream(ruta),
							    _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
							    _oBR = new Packages.java.io.BufferedReader(_oIR),
							    z = 0;
								while ((texto[z] = _oBR.readLine()) != null) 
								{
							        z++;            
							    }
							    _oBR.close();
							}
							if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
								linea = texto[0];
								//if(linea) var codigoResultadosValidacion = utils.stringTrim(linea.slice(385, 389));
								if(linea) var codigoResultadosValidacion = utils.stringTrim(linea.slice(361, 364));
							}
							else{
								linea = texto[9];
								if(linea) codigoResultadosValidacion = utils.stringTrim(linea.slice(20, 23));
							}
							if(codigoResultadosValidacion != '5040' && codigoResultadosValidacion != '005' 
								&& codigoResultadosValidacion != '029')
							{
								vSet.loadRecords(databaseManager.convertToDataSet([uuid1]))  
								record = vSet.getRecord(vSet.getSelectedIndex())
								
								record.fechaenviofichero = fechenvfra;//new Date();
								//mac
								record.mac = macaddress;
								//ctbai
								record.ctbai = ctbai36 + crc;
								//firmafactura
								record.firmafactura = SignatureValue2;
								//QR
								//record.cqr = "https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+&nf="+nf+"&i="+imp+"&cr="+crc;
								  
								if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0)
								{
									//var codqr = scopes.netticketbaiCRC8.calculate('https://batuz.eus/QRTBAI/?id=TBAI-00000006Y-251019-btFpwP8dcLGAF-237&s=T&nf=27174&i=4.70') // cqr = 007
									if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){
										var codqr =  scopes.netticketbaiCRC8.calculate("https://tbai.prep.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
										record.cqr = "https://tbai.prep.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
									}
									else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
										codqr =  scopes.netticketbaiCRC8.calculate("https://batuz.eus/QRTBAI/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
										record.cqr = "https://batuz.eus/QRTBAI/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
									}
									else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
										codqr =  scopes.netticketbaiCRC8.calculate("https://pruebas-ticketbai.araba.eus/tbai/consultafacturas/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
										record.cqr = "https://pruebas-ticketbai.araba.eus/tbai/consultafacturas/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
									}
									else {
										codqr =  scopes.netticketbaiCRC8.calculate("https://tbai.prep.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
										record.cqr = "https://tbai.prep.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
									}
								}
								else
								{
									if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){
										codqr =  scopes.netticketbaiCRC8.calculate("https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
										record.cqr = "https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
									}
									else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
										codqr =  scopes.netticketbaiCRC8.calculate("https://batuz.eus/QRTBAI/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
										record.cqr = "https://batuz.eus/QRTBAI/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
									}
									else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || 
									gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
										//codqr =  scopes.netticketbaiCRC8.calculate("https://ticketbai.araba.eus/tbai/consultafacturas/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
										//record.cqr = "https://ticketbai.araba.eus/tbai/consultafacturas/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
										codqr =  scopes.netticketbaiCRC8.calculate("https://ticketbai.araba.eus/tbai/qrtbai/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
										record.cqr = "https://ticketbai.araba.eus/tbai/qrtbai/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
									}
									else {
										codqr =  scopes.netticketbaiCRC8.calculate("https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp)
										record.cqr = "https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
									}								
								}
								var ruta = "C:\\TMP\\salida.xml";
								f = plugins.file.convertToJSFile(ruta);
								if(f && f.exists())
								{
									var rawData = plugins.file.readFile(ruta);
									record.fichero_respuesta_tbai = rawData;
								}
								ruta =  "c:\\tmp\\TBAI"+nfactura+"_firma.xml";
								f = plugins.file.convertToJSFile(ruta);
								if(f && f.exists())
								{
									rawData = plugins.file.readFile(ruta);
									record.xml_enviado_tbai = rawData;
								}
								databaseManager.saveData(record);
								databaseManager.refreshRecordFromDatabase(forms.FrmFacturasGC.foundset,-1)
							
								forms.dlg_ImpresionFacturasTBAIGC.xmltbai = 0;
								globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
								globals.GCshowInfoDialog("Fichero enviado correctamente a Ticketbai.", null, null, null, null, null)
							}
							else
							{
								forms.dlg_ImpresionFacturasTBAIGC.xmltbai = 0;
								globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
								globals.GCshowInfoDialog("Factura enviada con anterioridad a Ticketbai.", null, null, null, null, null)
							}
						}
						else
						{
							ruta = "C:\\TMP\\salida.xml";
							f = plugins.file.convertToJSFile(ruta);
							if(f && f.exists())
							{
								//leo el fichero firmado
								texto = new Array();
								
								_oFR = new Packages.java.io.FileInputStream(ruta),
							    _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
							    _oBR = new Packages.java.io.BufferedReader(_oIR),
							    z = 0;
								while ((texto[z] = _oBR.readLine()) != null) 
								{
							        z++;            
							    }
							    _oBR.close();
							}
							if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
								linea = texto[0];
								//if(linea) var codigoResultadosValidacion = utils.stringTrim(linea.slice(385, 389));
								if(linea) codigoResultadosValidacion = utils.stringTrim(linea.slice(363, 366));
							}
							else{
								linea = texto[8];
								if(linea) codigoResultadosValidacion = utils.stringTrim(linea.slice(20, 23));
							}
							if(codigoResultadosValidacion != '5040' && codigoResultadosValidacion != '005'
							&& codigoResultadosValidacion != '029')
							{
								vSet.loadRecords(databaseManager.convertToDataSet([uuid1]))  
								record = vSet.getRecord(vSet.getSelectedIndex())
								record.fechaenviofichero = null
								//mac
								record.mac = null;
								record.fechaenviofichero = null;
								//ctbai
								record.ctbai = null;
								//firmafactura
								//record.firmafactura = null;
								//QR
								record.cqr = null;
								ruta = "C:\\TMP\\salida.xml";
								f = plugins.file.convertToJSFile(ruta);
								if(f && f.exists())
								{
									rawData = plugins.file.readFile(ruta);
									record.fichero_respuesta_tbai = rawData;
								}
								/*ruta =  "c:\\tmp\\TBAI"+nfactura+"_firma.xml";
								f = plugins.file.convertToJSFile(ruta);
								if(f && f.exists())
								{
									rawData = plugins.file.readFile(ruta);
									record.xml_enviado_tbai = rawData;
								}*/
								databaseManager.saveData(record);
							}
							databaseManager.refreshRecordFromDatabase(forms.FrmFacturasGC.foundset,-1)
							forms.dlg_ImpresionFacturasTBAIGC.xmltbai = 0
							/*record.fechaenviofichero = null;
							
							
							//ctbai
							record.ctbai = null;
							//firmafactura
							record.firmafactura = null;
							//QR
							record.cqr = null
							ruta = "C:\\TMP\\salida.xml";
							f = plugins.file.convertToJSFile(ruta);
							if(f && f.exists())
							{
								rawData = plugins.file.readFile(ruta);
								record.fichero_respuesta_tbai = rawData;
							}
							
							*/
							globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
							globals.GCshowErrorDialog("Fichero rechazado al enviar a Ticketbai.\nCódigo: '"+resp+"'", null, null, null, null, null)
						}
					}
				}
				else
				{
					globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
					globals.GCshowErrorDialog("No está instalado el programa "+rutabat, null, null, null, null, null)
				}
			}		
		}
	}
	catch (e) {
		application.output("catched exception");
		application.output(e);
		globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
		globals.CONTAshowErrorDialog(e.toString(),null,'Aceptar',null,null,null)
	}
}

/**
 * Callback method when form is destroyed.
 * 
 * 
 * @param {Number} DEJE
 * @param {String} DSER
 * @param {Number} DNUP
 * @param {Number} HEJE
 * @param {String} HSER
 * @param {Number} HNUP
 * @param {Number} DCLI
 * @param {Number} HCLI
 *
 *
 * @properties={typeid:24,uuid:"691C89EE-705B-414E-8140-A56F12F7AC44"}
 */
function GenerarXMLAnulaTBAI(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
{
	try
	{
		var query = "SELECT ParametrosAplicacion.NºEmpresa,ParametrosAplicacion.Propiedad,"+
	    "ParametrosAplicacion.Empresa,ParametrosAplicacion.CodPostal,"+
	    "ParametrosAplicacion.Direccion,ParametrosAplicacion.Poblacion,"+
	    "ParametrosAplicacion.Provincia,ParametrosAplicacion.CIF,"+
	    "ParametrosAplicacion.Telefono,ParametrosAplicacion.Fax,"+
	    "ParametrosAplicacion.Mail,ParametrosAplicacion.Web,"+
	    "ParametrosAplicacion.Logo,ParametrosAplicacion.Logo2,"+
	    "ParametrosAplicacion.TelAux,ParametrosAplicacion.CtaBancaria,"+
	    "ParametrosAplicacion.Registro,ParametrosAplicacion.Tomo,"+
	    "ParametrosAplicacion.Folio,ParametrosAplicacion.HojaRegistral,"+
	    "ParametrosAplicacion.pais,"+
	    "tbFacturaCabecera.ID,tbFacturaCabecera.eje_cfa,"+
	    "tbFacturaCabecera.ser_cfa,tbFacturaCabecera.nup_cfa,"+
	    "tbFacturaCabecera.fecha_cfa,tbFacturaCabecera.fechcobro_cfa,"+
	    "tbFacturaCabecera.fechconta_cfa,tbFacturaCabecera.clie_cfa,"+
	    "tbFacturaCabecera.cfpa_cfa,tbFacturaCabecera.desccfpa_cfa,"+
	    "tbFacturaCabecera.repr_cfa,tbFacturaCabecera.obse_cfa,"+
	    "tbFacturaCabecera.fenvio,tbFacturaCabecera.situconta,"+
	    "tbFacturaCabecera.situ,tbFacturaCabecera.impbre_cfa,"+
	    "tbFacturaCabecera.depp_cfa,tbFacturaCabecera.pgfi_cfa,"+
	    "tbFacturaCabecera.impbie_cfa,tbFacturaCabecera.piva_cfa,"+
	    "tbFacturaCabecera.cuotaiva_cfa,tbFacturaCabecera.impbie2_cfa,"+
	    "tbFacturaCabecera.piva2_cfa,tbFacturaCabecera.cuotaiva2_cfa,"+
	    "tbFacturaCabecera.impbie3_cfa,tbFacturaCabecera.piva3_cfa,"+
	    "tbFacturaCabecera.cuotaiva3_cfa,tbFacturaCabecera.impnee_cfa,"+
	    "tbFacturaCabecera.gtosfinan_cfa,tbFacturaCabecera.impgtosfinan,"+
	    "tbFacturaCabecera.impre,tbFacturaCabecera.impre2,"+
	    "tbFacturaCabecera.impre3,tbFacturaLinea.ID,tbFacturaLinea.eje_lfa,"+
	    "tbFacturaLinea.ser_lfa,tbFacturaLinea.nup_lfa,tbFacturaLinea.nli_lfa,"+
	    "tbFacturaLinea.nalb_lfa,tbFacturaLinea.lalb_lfa,"+
	    "tbFacturaLinea.ref_lfa,tbFacturaLinea.concep_lfa,"+
	    "tbFacturaLinea.cant1_lfa,tbFacturaLinea.prec_lfa,"+
	    "tbFacturaLinea.unme_lfa,tbFacturaLinea.piva_lfa,"+
	    "tbFacturaLinea.dto_lfa,tbFacturaLinea.impdto_lfa,"+
	    "tbFacturaLinea.clie_lfa,tbFacturaLinea.situ_lfa,"+
	    "tbFacturaLinea.precuni_lfa,tbFacturaLinea.impor_lfa,"+
	    "tbFacturaLinea.importot_lfa,tbFacturaLinea.fecha_lfa,"+
	    "tbFacturaLinea.nprograma_lfa,tbMaestroClientes.ID,"+
	    "tbMaestroClientes.IdCliente,tbMaestroClientes.DescCliente,"+
	    "tbMaestroClientes.Direccion,tbMaestroClientes.Poblacion,"+
	    "tbMaestroClientes.Provincia,tbMaestroClientes.CodPostal,"+
	    "tbMaestroClientes.RazonSocial,tbMaestroClientes.PersContacto,"+
	    "tbMaestroClientes.EmailContacto,tbMaestroClientes.Telf1,"+
	    "tbMaestroClientes.Telf2,tbMaestroClientes.Fax,"+
	    "tbMaestroClientes.CIF,tbMaestroClientes.NumProveedor,"+
	    "tbMaestroClientes.CuentaContable,tbMaestroClientes.IdFormaPago,"+
	    "tbMaestroClientes.TipoIva,tbMaestroClientes.IdMoneda,"+
	    "tbMaestroClientes.DiaPago1,tbMaestroClientes.DiaPago2,tbMaestroClientes.DiaPago3,"+
	    "tbMaestroClientes.Pais,tbMaestroClientes.Observaciones,"+
	    "tbMaestroClientes.CodigoBanco,tbMaestroClientes.CodigoSucursal,"+
	    "tbMaestroClientes.Codigo1DC,tbMaestroClientes.CodigoCuenta,"+
	    "tbMaestroArticulos.RefCliente,tbMaestroformpago.denom_fp,ParametrosAplicacion.bic,tbFacturaCabecera.fechaenviofichero "+
	    "FROM tbFacturaCabecera tbFacturaCabecera LEFT JOIN dbo.tbFacturaLinea tbFacturaLinea ON "+
		 "tbFacturaCabecera.eje_cfa = tbFacturaLinea.eje_lfa "+
	    "AND tbFacturaCabecera.nup_cfa = tbFacturaLinea.nup_lfa "+
	    "AND tbFacturaCabecera.ser_cfa = tbFacturaLinea.ser_lfa "+
	    "LEFT JOIN dbo.tbMaestroClientes tbMaestroClientes ON "+
		 "tbFacturaCabecera.clie_cfa = tbMaestroClientes.IdCliente "+
	    "LEFT JOIN dbo.tbMaestroformpago tbMaestroformpago ON "+
		 "tbFacturaCabecera.cfpa_cfa = tbMaestroformpago.codig_fp "+
	    "LEFT JOIN dbo.tbMaestroArticulos tbMaestroArticulos ON "+
		 "tbFacturaLinea.ref_lfa = tbMaestroArticulos.Codigo,"+
	    "dbo.ParametrosAplicacion ParametrosAplicacion "+
	    "WHERE (tbFacturaCabecera.eje_cfa >= "+DEJE+
	    " AND tbFacturaCabecera.eje_cfa <= "+HEJE+") "+
	    "AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
	    "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') "+
	    "AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
	    " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") "+
	    "AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+") "+
	    "ORDER BY tbFacturaLinea.eje_lfa ASC,tbFacturaLinea.ser_lfa ASC,"+
	    "tbFacturaLinea.nup_lfa ASC,tbFacturaLinea.nli_lfa ASC";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null,99999999)
		var rows = dataset.getMaxRowIndex();
		xml = new String();
		htm = new String();
		newxml = new String();
		if(rows > 0)
		{	
				var uuidfactura = dataset.getValue(1,22)
				datosempresa(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
				
				xml = '<?xml version="1.0" encoding="UTF-8"?>';
				application.output('Cabecera')
				Document = <AnulaTicketBai/>
				/*ns = new Namespace('T',"urn:ticketbai:emision")
				Document.addNamespace(ns)							
				
				ns = new Namespace('ds','http://www.w3.org/2000/09/xmldsig#')
				Document.addNamespace(ns)
				
				ns = new Namespace('schemaLocation', 'urn:ticketbai:emision ticketBaiV12.xsd ')
				Document.addNamespace(ns)
				
				ns = new Namespace('xsi','http://www.w3.org/2001/XMLSchema-instance')
				Document.addNamespace(ns)
				*/
				Cabecera = <Cabecera/>
					IDVersionTBAI = <IDVersionTBAI/>
					IDVersionTBAI.appendChild('1.2')
				Cabecera.appendChild(IDVersionTBAI)
				IDFactura = <IDFactura/>
					Emisor = <Emisor/>
						NIF = <NIF/>
						NIF.appendChild(gcparametrosaplicacion_to_parametrosaplicacion.cif)
						ApellidosNombreRazonSocial = <ApellidosNombreRazonSocial/>
						ApellidosNombreRazonSocial.appendChild(globals.GCQuitarCaracteresEspeciales(gcparametrosaplicacion_to_parametrosaplicacion.empresa))
					Emisor.appendChild(NIF)
					Emisor.appendChild(ApellidosNombreRazonSocial)
					//Factura = <Factura/>
						CabeceraFactura = <CabeceraFactura/>
							SerieFactura = <SerieFactura/>
							var fechafra = dataset.getValue(1,26);
							SerieFactura.appendChild(fechafra.getFullYear())
							NumFactura = <NumFactura/>
							NumFactura.appendChild(dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24))
							FechaExpedicionFactura = <FechaExpedicionFactura/>
							var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturacabecera')  
							vSet.loadRecords(databaseManager.convertToDataSet([uuidfactura]))  
							var record = vSet.getRecord(vSet.getSelectedIndex())
							var fechenvfra = record["fechaenviofichero"];//dataset.getValue(1,106);
							if(!fechenvfra)
							{
								fechenvfra = record["fecha_cfa"];//dataset.getValue(1,26);
								if(!fechenvfra) fechenvfra = new Date();
							}
							FechaExpedicionFactura.appendChild(utils.dateFormat(fechenvfra,'dd-MM-yyyy'))									
						CabeceraFactura.appendChild(SerieFactura)
						CabeceraFactura.appendChild(NumFactura)
						CabeceraFactura.appendChild(FechaExpedicionFactura)				
					//Factura.appendChild(CabeceraFactura)
				IDFactura.appendChild(Emisor)
				//IDFactura.appendChild(Factura)
				IDFactura.appendChild(CabeceraFactura)
				
				HuellaTBAI = <HuellaTBAI/>		
				//Datos del Software AG para Ticketbai
					Software = <Software/>
						LicenciaTBAI = <LicenciaTBAI/>
						if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0)
						{
							if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){
								LicenciaTBAI.appendChild('TBAIGIPRE00000000017')// ENTORNO PRUEBAS GIPUZKOA
							}
							else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
								LicenciaTBAI.appendChild('TBAIGIPRE00000000017')// ENTORNO PRUEBAS VIZCAYA
							}
							else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || 
							gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
								LicenciaTBAI.appendChild('TBAIARbljlFjMdb00711')// ENTORNO PRUEBAS ARABA
							}
							else {
								LicenciaTBAI.appendChild('TBAIGIPRE00000000017')// ENTORNO PRUEBAS GIPUZKOA
							}
						}
						else
						{
							LicenciaTBAI.appendChild('TBAIGI84FAD45BA4608A')// ENTORNO REAL
						}
						EntidadDesarrolladora =<EntidadDesarrolladora/>
							NIF = <NIF/>
							NIF.appendChild('A20170254')
						EntidadDesarrolladora.appendChild(NIF)
						Nombre = <Nombre/>
						Nombre.appendChild('ERP_AG')
						Version = <Version/>
						if(gcparametrosaplicacion_to_parametrosaplicacion.empresa) Version.appendChild(new Date().getFullYear()+'-'+utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.empresa,14));	
						/*if(globals.GCconex == 'conexiongestioncomercialag') Version.appendChild(new Date().getFullYear()+'-AG');	
						else if(globals.GCconex == 'conexiongestionmlegazpipruebas') Version.appendChild(new Date().getFullYear()+'-MLEGAZPI');	
						else if(globals.GCconex == 'conexiongestiontmendizabalpruebas') Version.appendChild(new Date().getFullYear()+'-TMENDIZABAL');	
						else if(globals.GCconex == 'conexiongestionolabemarpruebas') Version.appendChild(new Date().getFullYear()+'-OLABEMAR');	
						else if(globals.GCconex == 'conexiongestioncomercialagdemo') Version.appendChild(new Date().getFullYear()+'-DEMO');	
						else if(globals.GCconex == 'conexiongestioncomercialagdemo2') Version.appendChild(new Date().getFullYear()+'-DEMO2');	
						else if(globals.GCconex == 'conexiongestionzusipruebas') Version.appendChild(new Date().getFullYear()+'-ZUSI');*/	
						else Version.appendChild(new Date().getFullYear())
					Software.appendChild(LicenciaTBAI)
					Software.appendChild(EntidadDesarrolladora)
					Software.appendChild(Nombre)
					Software.appendChild(Version)
				HuellaTBAI.appendChild(Software)
				//Datos del dispositivo desde el que se emite la factura
					NumSerieDispositivo = <NumSerieDispositivo/>
						
					var macaddress = plugins.UserManager.Client().macAddress;				
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
						macaddress = 'Falta Fichero MAC'
					}*/
					macaddress = forms.dlg_ImpresionFacturasTBAIGC.macaddress;
					application.output(macaddress)
					NumSerieDispositivo.appendChild(macaddress)
				HuellaTBAI.appendChild(NumSerieDispositivo)
			Document.appendChild(Cabecera)
			Document.appendChild(IDFactura)
			Document.appendChild(HuellaTBAI)
			
			xml += Document
			//var newxml = xml.toString().replace(' xmlns=""','')
			newxml = utils.stringReplace(xml.toString(),'<AnulaTicketBai','<T:AnulaTicketBai')
			newxml = utils.stringReplace(newxml,'</AnulaTicketBai','</T:AnulaTicketBai')
			newxml = utils.stringReplace(newxml,'<T:AnulaTicketBai>','<T:AnulaTicketBai xmlns:T="urn:ticketbai:anulacion" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ticketbai:anulacion Anula_ticketBaiV1-2.xsd">')
			
			newxml = utils.stringReplace(newxml,' xmlns=""','')
			//var xml2 = new XML(newxml)
			application.output(newxml);
					
					
			/*var jsFile = plugins.file.createTempFile('SEPA','.xml');
					
			var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
			if (!success) application.output('Could not write file.');
			//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ) 
			//{
				plugins.file.streamFilesToServer(jsFile)
				plugins.file.openFile(jsFile,"_blank",application/xml)
			/*}
			else 
			{
				plugins.file.streamFilesToServer(jsFile,doImportFile)
			}*/
		
		
			htm += newxml
			
			if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{
				var folder = plugins.file.convertToJSFile("c:\\tmp");
				var b = plugins.file.createFolder(folder)
				if (b == true) application.output("El directorio c:\\tmp se ha creado correctamente o ya existía.");
				/*
				var js = plugins.file.showFileSaveDialog('TBAI'+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)+'.xml', 'Selecciona localización para salvar el fichero');
				if (!js) return;			
							
					// Write the file in the selected location
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
				*/
				var js = "c:\\tmp\\ANULATBAI"+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)+'.xml';
				var f = plugins.file.convertToJSFile(js);
				if(f && f.exists()) f.deleteFile()
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
				
				var js2 = "c:\\tmp\\fentrada.xml";
				var f2 = plugins.file.convertToJSFile(js2);
				if(f2 && f2.exists()) f2.deleteFile()
				plugins.file.writeTXTFile(js2, htm, 'UTF8', 'application/xml');
				
				/*
				//is the full path of the program to be executed.
				
				var rutabat = "c:\\Servoy\\Comando_Autofirma_Servoy.bat";
				var f = plugins.file.convertToJSFile(rutabat);
				*/
				var hfolder = plugins.file.getHomeFolder()+"\\.servoy\\";
				if(gcparametrosaplicacion_to_parametrosaplicacion.cifcertifdigital) var rutabat = hfolder+"afirma_bat_condni.exe";
				else rutabat = hfolder+"afirma_bat_sindni.exe";
				//var rutabat = hfolder+"afirma_bat.exe";
				//var rutabat = hfolder+"Comando_Autofirma_Servoy.bat";
				
				if(f && f.exists())
				{
					var rutaficherosigned = "c:\\tmp\\ANULATBAI"+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)+"_firma.xml";//"_firma.xsig";
					f = plugins.file.convertToJSFile(rutaficherosigned);				
					if(f && f.exists()) f.deleteFile()
					
					var ficherosalida = "c:\\tmp\\fsalida.xml";				
					f2 = plugins.file.convertToJSFile(ficherosalida);				
					if(f2 && f2.exists()) f2.deleteFile()
					
					if(gcparametrosaplicacion_to_parametrosaplicacion.cifcertifdigital) var str = application.executeProgram(rutabat,[js, rutaficherosigned,gcparametrosaplicacion_to_parametrosaplicacion.cifcertifdigital]);
					else str = application.executeProgram(rutabat,[js, rutaficherosigned]);
					//var str = plugins.UserManager.executeCommand(rutabat)
					//var str = application.executeProgram(rutabat)
					
					
					if(!str || str == '') {
						//var programa = 'C:\\Servoy\\AFCL sign -certgui -i '+js+' -o '+rutaficherosigned+' -format XAdES -store windows -filter subject.contains:12710839G -xml  -config "policyIdentifier=urn:ticketbai:dss:policy:1\npolicyDescription=TicketBAI sinadura-politika / Politica de firma TicketBAI\npolicyIdentifierHash=6NrKAm60o7u62FUQwzZew24ra2ve9PRQYwC21AM6In0=\n policyIdentifierHashAlgorithm=http://www.w3.org/2001/04/xmlenc#sha256 \n policyQualifier=https://www.gipuzkoa.eus/ticketbai/sinadura \n format=XAdES Enveloped"'
						//var programa = hfolder+'\AFCL.exe sign -certgui -i '+js+' -o '+rutaficherosigned+' -format XAdES -store windows -filter subject.contains:12710839G -xml  -config "policyIdentifier=urn:ticketbai:dss:policy:1\npolicyDescription=TicketBAI sinadura-politika / Politica de firma TicketBAI\npolicyIdentifierHash=6NrKAm60o7u62FUQwzZew24ra2ve9PRQYwC21AM6In0=\n policyIdentifierHashAlgorithm=http://www.w3.org/2001/04/xmlenc#sha256 \n policyQualifier=https://www.gipuzkoa.eus/ticketbai/sinadura \n format=XAdES Enveloped"'
						globals.GCshowErrorDialog("La factura NO se ha firmado digitalmente de manera correcta.\n"+resp, null, null, null, null, null)
						//var programa = hfolder+'AFCL.exe sign -certgui -i c:\\tmp\\fentrada.xml -o c:\\tmp\\fsalida.xml -format XAdES -store windows -filter subject.contains:12710839G -xml  -config "policyIdentifier=urn:ticketbai:dss:policy:1\npolicyDescription=TicketBAI sinadura-politika / Politica de firma TicketBAI\npolicyIdentifierHash=6NrKAm60o7u62FUQwzZew24ra2ve9PRQYwC21AM6In0=\n policyIdentifierHashAlgorithm=http://www.w3.org/2001/04/xmlenc#sha256 \n policyQualifier=https://www.gipuzkoa.eus/ticketbai/sinadura \n format=XAdES Enveloped"'
						//str = plugins.UserManager.executeCommand(programa)
					}
					application.output(str)
					application.output(rutaficherosigned)		
					
					f = plugins.file.convertToJSFile(rutaficherosigned);
					if(f && f.exists())
					{
						f = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml");
						
						if(f && f.exists()) f.deleteFile()
						plugins.file.copyFile(rutaficherosigned,"C:\\tmp\\ficheroenviocurl.xml")
						
						//leo el fichero firmado
						var texto = new Array();
				    
						 var _oFR = new Packages.java.io.FileInputStream(rutaficherosigned),
					     _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
					     _oBR = new Packages.java.io.BufferedReader(_oIR),
					     z = 0;
						 while ((texto[z] = _oBR.readLine()) != null) 
						 {
					         //texto[i] = _oBR.readLine();
					         z++;            
					     }
					     _oBR.close();
					     
					     
					     macaddress = forms.dlg_ImpresionFacturasTBAIGC.macaddress;
					     /*var linea = texto[z-1];
					     var SignatureValue = linea.slice(1687, 1700);
					     var SignatureValue2 = linea.slice(1687, 1787);
					     linea = texto[24];
					     var diafactura = linea.slice(30, 32);
					     var mesfactura = linea.slice(33, 35);
					     var anofactura = linea.slice(38, 40);
					     var ctbai36 = "TBAI-"+gcparametrosaplicacion_to_parametrosaplicacion.cif + "-" + 
					     				diafactura + mesfactura + anofactura + "-" + SignatureValue + "-"
					     */
										
					     /*htm = utils.stringReplace(htm,'</T:TicketBai',nodofirma+'</T:TicketBai')
						 js = "c:\\tmp\\TBAI"+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)+'_2.xml';
						 plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');*/
				
						
						//calculo CRC
						//ctbai36 = 'TBAI-00000006Y-251020-BTFPWP8DCLGAF-' //crc = 237
						//ctbai36 = 'TBAI-00000006Y-251019-btFpwP8dcLGAF-' //crc = 237
						/*var crc = scopes.netticketbaiCRC8.calculate(ctbai36)
						//var crc = scopes.netticketbaiCRC8.entrada(ctbai36)
						application.output(ctbai36+crc)
						*/
						
						/*var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturacabecera')  
						  
						//load record by ID in foundset  
						vSet.loadRecords(databaseManager.convertToDataSet([uuid]))  
						var record = vSet.getRecord(vSet.getSelectedIndex())
						//mac
						record.mac = macaddress;
						//ctbai
						record.ctbai = ctbai36 + crc;
						//firmafactura
						record.firmafactura = SignatureValue2;
						//QR
						linea = texto[22];
						var s = linea.slice(20, 24);
						linea = texto[23];
						var nf = linea.slice(18, 25);
						var imp = record['impnee_cfa'];
						
					     
					     
						record.cqr = "https://tbai.prep.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+
						"&nf="+nf+"&i="+imp+"&cr="+crc; // OFICIAL "https://tbai.egoitza.gipuzkoa.eus/qr/?id=";
						//var cqr = scopes.netticketbaiCRC8.calculate('https://batuz.eus/QRTBAI/?id=TBAI-00000006Y-251019-btFpwP8dcLGAF-237&s=T&nf=27174&i=4.70') // cqr = 007
						databaseManager.saveData(record);
						*/
					     
						//ENVIO EL XML AL SISTEMA TICKETBAI
						var resp = envioTBAI2_anulacion(rutaficherosigned)
						application.output(resp)
						if(utils.stringLeft(resp,2) == '00')
						{
							vSet.loadRecords(databaseManager.convertToDataSet([uuid1]))  
							if(record)
							{
								record = vSet.getRecord(vSet.getSelectedIndex())
								record.mac = null;
								databaseManager.saveData(record)
								databaseManager.refreshRecordFromDatabase(forms.FrmFacturasGC.foundset,-1)								
							}
							globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
							globals.GCshowInfoDialog("Factura anulada correctamente en Ticketbai", null, null, null, null, null)
						}
						else
						{
							globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
							globals.GCshowErrorDialog("La factura NO se ha anulado correctamente.\n"+resp, null, null, null, null, null)
						}
					}				
				}
			}		
		}
	}
	catch (e) {
		application.output("catched exception");
		application.output(e);
		globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
		globals.CONTAshowErrorDialog(e.toString(),null,'Aceptar',null,null,null)
	}
}

/**
 * Callback method when form is destroyed.
 * 
 * 
 * @param {Number} DEJE
 * @param {String} DSER
 * @param {Number} DNUP
 * @param {Number} HEJE
 * @param {String} HSER
 * @param {Number} HNUP
 * @param {Number} DCLI
 * @param {Number} HCLI
 *
 *
 *
 * @properties={typeid:24,uuid:"BF57FE05-33B8-49EB-B822-CC35DFD96A59"}
 * @SuppressWarnings(wrongparameters)
 */
function GenerarXMLZuzenduAltaTBAI(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
{
	try
	{
		var query = "SELECT ParametrosAplicacion.NºEmpresa,ParametrosAplicacion.Propiedad,"+
	    "ParametrosAplicacion.Empresa,ParametrosAplicacion.CodPostal,"+
	    "ParametrosAplicacion.Direccion,ParametrosAplicacion.Poblacion,"+
	    "ParametrosAplicacion.Provincia,ParametrosAplicacion.CIF,"+
	    "ParametrosAplicacion.Telefono,ParametrosAplicacion.Fax,"+
	    "ParametrosAplicacion.Mail,ParametrosAplicacion.Web,"+
	    "ParametrosAplicacion.Logo,ParametrosAplicacion.Logo2,"+
	    "ParametrosAplicacion.TelAux,ParametrosAplicacion.CtaBancaria,"+
	    "ParametrosAplicacion.Registro,ParametrosAplicacion.Tomo,"+
	    "ParametrosAplicacion.Folio,ParametrosAplicacion.HojaRegistral,"+
	    "ParametrosAplicacion.pais,"+
	    "tbFacturaCabecera.ID,tbFacturaCabecera.eje_cfa,"+
	    "tbFacturaCabecera.ser_cfa,tbFacturaCabecera.nup_cfa,"+
	    "tbFacturaCabecera.fecha_cfa,tbFacturaCabecera.fechcobro_cfa,"+
	    "tbFacturaCabecera.fechconta_cfa,tbFacturaCabecera.clie_cfa,"+
	    "tbFacturaCabecera.cfpa_cfa,tbFacturaCabecera.desccfpa_cfa,"+
	    "tbFacturaCabecera.repr_cfa,tbFacturaCabecera.obse_cfa,"+
	    "tbFacturaCabecera.fenvio,tbFacturaCabecera.situconta,"+
	    "tbFacturaCabecera.situ,tbFacturaCabecera.impbre_cfa,"+
	    "tbFacturaCabecera.depp_cfa,tbFacturaCabecera.pgfi_cfa,"+
	    "tbFacturaCabecera.impbie_cfa,tbFacturaCabecera.piva_cfa,"+
	    "tbFacturaCabecera.cuotaiva_cfa,tbFacturaCabecera.impbie2_cfa,"+
	    "tbFacturaCabecera.piva2_cfa,tbFacturaCabecera.cuotaiva2_cfa,"+
	    "tbFacturaCabecera.impbie3_cfa,tbFacturaCabecera.piva3_cfa,"+
	    "tbFacturaCabecera.cuotaiva3_cfa,tbFacturaCabecera.impnee_cfa,"+
	    "tbFacturaCabecera.gtosfinan_cfa,tbFacturaCabecera.impgtosfinan,"+
	    "tbFacturaCabecera.impre,tbFacturaCabecera.impre2,"+
	    "tbFacturaCabecera.impre3,tbFacturaLinea.ID,tbFacturaLinea.eje_lfa,"+
	    "tbFacturaLinea.ser_lfa,tbFacturaLinea.nup_lfa,tbFacturaLinea.nli_lfa,"+
	    "tbFacturaLinea.nalb_lfa,tbFacturaLinea.lalb_lfa,"+
	    "tbFacturaLinea.ref_lfa,tbFacturaLinea.concep_lfa,"+
	    "tbFacturaLinea.cant1_lfa,tbFacturaLinea.prec_lfa,"+
	    "tbFacturaLinea.unme_lfa,tbFacturaLinea.piva_lfa,"+
	    "tbFacturaLinea.dto_lfa,tbFacturaLinea.impdto_lfa,"+
	    "tbFacturaLinea.clie_lfa,tbFacturaLinea.situ_lfa,"+
	    "tbFacturaLinea.precuni_lfa,tbFacturaLinea.impor_lfa,"+
	    "tbFacturaLinea.importot_lfa,tbFacturaLinea.fecha_lfa,"+
	    "tbFacturaLinea.nprograma_lfa,tbMaestroClientes.ID,"+
	    "tbMaestroClientes.IdCliente,tbMaestroClientes.DescCliente,"+
	    "tbMaestroClientes.Direccion,tbMaestroClientes.Poblacion,"+
	    "tbMaestroClientes.Provincia,tbMaestroClientes.CodPostal,"+
	    "tbMaestroClientes.RazonSocial,tbMaestroClientes.PersContacto,"+
	    "tbMaestroClientes.EmailContacto,tbMaestroClientes.Telf1,"+
	    "tbMaestroClientes.Telf2,tbMaestroClientes.Fax,"+
	    "tbMaestroClientes.CIF,tbMaestroClientes.NumProveedor,"+
	    "tbMaestroClientes.CuentaContable,tbMaestroClientes.IdFormaPago,"+
	    "tbMaestroClientes.TipoIva,tbMaestroClientes.IdMoneda,"+
	    "tbMaestroClientes.DiaPago1,tbMaestroClientes.DiaPago2,tbMaestroClientes.DiaPago3,"+
	    "tbMaestroClientes.Pais,tbMaestroClientes.Observaciones,"+
	    "tbMaestroClientes.CodigoBanco,tbMaestroClientes.CodigoSucursal,"+
	    "tbMaestroClientes.Codigo1DC,tbMaestroClientes.CodigoCuenta,"+
	    "tbMaestroArticulos.RefCliente,tbMaestroformpago.denom_fp,ParametrosAplicacion.bic,tbFacturaCabecera.fechaenviofichero,tbFacturaCabecera.impirpf,tbFacturaCabecera.pirpf "+
	    "FROM tbFacturaCabecera tbFacturaCabecera LEFT JOIN dbo.tbFacturaLinea tbFacturaLinea ON "+
		 "tbFacturaCabecera.eje_cfa = tbFacturaLinea.eje_lfa "+
	    "AND tbFacturaCabecera.nup_cfa = tbFacturaLinea.nup_lfa "+
	    "AND tbFacturaCabecera.ser_cfa = tbFacturaLinea.ser_lfa "+
	    "LEFT JOIN dbo.tbMaestroClientes tbMaestroClientes ON "+
		 "tbFacturaCabecera.clie_cfa = tbMaestroClientes.IdCliente "+
	    "LEFT JOIN dbo.tbMaestroformpago tbMaestroformpago ON "+
		 "tbFacturaCabecera.cfpa_cfa = tbMaestroformpago.codig_fp "+
	    "LEFT JOIN dbo.tbMaestroArticulos tbMaestroArticulos ON "+
		 "tbFacturaLinea.ref_lfa = tbMaestroArticulos.Codigo,"+
	    "dbo.ParametrosAplicacion ParametrosAplicacion "+
	    "WHERE (tbFacturaCabecera.eje_cfa >= "+DEJE+
	    " AND tbFacturaCabecera.eje_cfa <= "+HEJE+") "+
	    "AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
	    "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') "+
	    "AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
	    " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") "+
	    "AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+") "+
	    "ORDER BY tbFacturaLinea.eje_lfa ASC,tbFacturaLinea.ser_lfa ASC,"+
	    "tbFacturaLinea.nup_lfa ASC,tbFacturaLinea.nli_lfa ASC";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null,999999999)
		var rows = dataset.getMaxRowIndex();
		xml = new String();
		htm = new String();
		newxml = new String();
		if(rows > 0)
		{	
				var uuidfactura = dataset.getValue(1,22)
				var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturacabecera')  
				vSet.loadRecords(databaseManager.convertToDataSet([uuidfactura]))  
				var record = vSet.getRecord(vSet.getSelectedIndex())
				datosempresa(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
				var cliente = dataset.getValue(1,29);
				
				xml = '<?xml version="1.0" encoding="UTF-8"?>';
				application.output('Cabecera')
				Document = <SubsanacionModificacionTicketBAI />
				/*ns = new Namespace('T',"urn:ticketbai:emision")
				Document.addNamespace(ns)							
				
				ns = new Namespace('ds','http://www.w3.org/2000/09/xmldsig#')
				Document.addNamespace(ns)
				
				ns = new Namespace('schemaLocation', 'urn:ticketbai:emision ticketBaiV12.xsd ')
				Document.addNamespace(ns)
				
				ns = new Namespace('xsi','http://www.w3.org/2001/XMLSchema-instance')
				Document.addNamespace(ns)
				*/
				Cabecera = <Cabecera/>
					IDVersion = <IDVersion/>
					IDVersion.appendChild('1.0')
					Accion = <Accion/>
					Accion.appendChild("MODIFICAR")
				Cabecera.appendChild(IDVersion)
				Cabecera.appendChild(Accion)
				Sujetos = <Sujetos/>
					Emisor = <Emisor/>
						NIF = <NIF/>
						NIF.appendChild(gcparametrosaplicacion_to_parametrosaplicacion.cif)
						ApellidosNombreRazonSocial = <ApellidosNombreRazonSocial/>
						ApellidosNombreRazonSocial.appendChild(globals.GCQuitarCaracteresEspeciales(gcparametrosaplicacion_to_parametrosaplicacion.empresa))
					Emisor.appendChild(NIF)
					Emisor.appendChild(ApellidosNombreRazonSocial)
				Sujetos.appendChild(Emisor)
					Destinatarios = <Destinatarios/>
						IDDestinatario = <IDDestinatario/>
							
							cifempresa = utils.stringRight(cifcliente,9)//cifcliente//forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.cif;
							application.output(cifempresa)
							if(paiscliente && paiscliente == 'ES')
							{
								NIF = <NIF/>
								NIF.appendChild(cifempresa)
							}
							else
							{
								IDOtro = <IDOtro/>
									CodigoPais = <CodigoPais/>
									CodigoPais.appendChild(paiscliente)
									IDType = <IDType/>
									/*02 NIF-IVA.
									  03 Pasaporte
									  04 Documento oficial de identificación expedido por el país o territorio de residencia.
									  05 Certificado de residencia.
									  06 Otro documento probatorio*/
									if(UE.indexOf(paiscliente) != -1) IDType.appendChild('02')
									else IDType.appendChild('04')
									ID = <ID/>
									ID.appendChild(cifcliente)
								IDOtro.appendChild(CodigoPais)
								IDOtro.appendChild(IDType)
								IDOtro.appendChild(ID)
							}
							ApellidosNombreRazonSocial = <ApellidosNombreRazonSocial/>
							razonsocial = globals.GCQuitarCaracteresEspeciales(utils.stringLeft(desccliente,120)) //forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.desccliente;
							ApellidosNombreRazonSocial.appendChild(razonsocial)
							CodigoPostal = <CodigoPostal/>
							codigopostal = codpostalcliente//forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal;
							CodigoPostal.appendChild(codigopostal)
							Direccion = <Direccion/>
							direccion = globals.GCQuitarCaracteresEspeciales(utils.stringLeft(direccioncliente+ ' '+poblacioncliente+' '+provinciacliente,250))//forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.direccion;
							Direccion.appendChild(direccion)
						if(paiscliente && paiscliente == 'ES') IDDestinatario.appendChild(NIF)
						else IDDestinatario.appendChild(IDOtro)
						IDDestinatario.appendChild(ApellidosNombreRazonSocial)
						IDDestinatario.appendChild(CodigoPostal)
						IDDestinatario.appendChild(Direccion)
					Destinatarios.appendChild(IDDestinatario)
					if(cifempresa && cifempresa != '.' && cifempresa != '*'){
				Sujetos.appendChild(Destinatarios)			
					}
				Factura = <Factura/>
					CabeceraFactura = <CabeceraFactura/>
						SerieFactura = <SerieFactura/>
						var fechafra = dataset.getValue(1,26);
						SerieFactura.appendChild(fechafra.getFullYear())
						NumFactura = <NumFactura/>
						NumFactura.appendChild(dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24))
						FechaExpedicionFactura = <FechaExpedicionFactura/>
						//FechaExpedicionFactura.appendChild(utils.dateFormat(dataset.getValue(1,26),'dd-MM-yyyy'))
						var fechenvfra = record["fechaenviofichero"];
						FechaExpedicionFactura.appendChild(utils.dateFormat(fechenvfra,'dd-MM-yyyy'))
						HoraExpedicionFactura = <HoraExpedicionFactura/>
						HoraExpedicionFactura.appendChild(utils.dateFormat(fechenvfra,'HH:mm:ss'))					
						FacturaSimplificada = <FacturaSimplificada/>
						if(cifcliente && cifcliente != '.' && cifcliente != '*'){
						FacturaSimplificada.appendChild('N')
						}
						else{
						FacturaSimplificada.appendChild('S')
						}
						FacturaEmitidaSustitucionSimplificada = <FacturaEmitidaSustitucionSimplificada/>
						FacturaEmitidaSustitucionSimplificada.appendChild('N')					
					CabeceraFactura.appendChild(SerieFactura)
					CabeceraFactura.appendChild(NumFactura)
					CabeceraFactura.appendChild(FechaExpedicionFactura)
					CabeceraFactura.appendChild(HoraExpedicionFactura)								
					CabeceraFactura.appendChild(FacturaSimplificada)
					CabeceraFactura.appendChild(FacturaEmitidaSustitucionSimplificada)
					
				Factura.appendChild(CabeceraFactura)
				application.output('Lineas')
					var p1 = dataset.getValue(1,41)
					var p2 = dataset.getValue(1,44)
					var p3 = dataset.getValue(1,47)
					var re1 = dataset.getValue(1,52)
					var re2 = dataset.getValue(1,53)
					var re3 = dataset.getValue(1,54)
					DatosFactura = <DatosFactura/>
						FechaOperacion = <FechaOperacion/>
						FechaOperacion.appendChild(utils.dateFormat(dataset.getValue(1,26),'dd-MM-yyyy'))
						DescripcionFactura = <DescripcionFactura/>
						if(dataset.getValue(1,33)) DescripcionFactura.appendChild(globals.GCQuitarCaracteresEspeciales(utils.stringLeft(dataset.getValue(1,33),250)))
						else DescripcionFactura.appendChild(globals.GCQuitarCaracteresEspeciales("FACTURA "+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)))
						DetallesFactura = <DetallesFactura/>
							for(var i=1;i<=rows;i++)
							{
								var c = dataset.getValue(i,64);
								var impuni = dataset.getValue(i,65);
								var implin = dataset.getValue(i,73);
								var imptot = dataset.getValue(i,74);
								var impdto = dataset.getValue(i,69);
								var pivalin = dataset.getValue(i,67);
								var relin = 0;
								var query999 = "select [aplicarre] FROM [tbMaestroClientes] WHERE [idcliente] = "+cliente;
								var dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
								if(dataset999.getValue(1,1) == 1)
								{
									query999 = "select [IvaRE] FROM [tbMaestroTipoIva] WHERE [Factor] = "+pivalin;
									dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
									var trelin = dataset999.getValue(1,1);
									relin = globals.GCROUND(implin*trelin*0.01,2)
									//reimpuni = globals.GCROUND(impuni*trelin*0.01,2)
								}
								
								imptot = imptot + relin;
								/*if((re1 && re1 != 0)) 
								{
									if(re1){
										var query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
										"WHERE [Factor] = "+p1;
										var dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
										var tre = dataset88.getValue(1,1);
										if(!tre) tre = 0;
									}
								}*/
								//if((c && c != 0) && (impuni && impuni != 0) && (imptot && imptot != 0))
								//{
									IDDetalleFactura = <IDDetalleFactura/>
										DescripcionDetalle =<DescripcionDetalle/>
										if(dataset.getValue(i,63)) DescripcionDetalle.appendChild(globals.GCQuitarCaracteresEspeciales(utils.stringLeft(utils.stringReplace(dataset.getValue(i,63),"\n"," "),250)))
										//else DescripcionDetalle.appendChild(" ");
										else DescripcionDetalle.appendChild(globals.GCQuitarCaracteresEspeciales("Detalle factura "+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)));
										Cantidad = <Cantidad/>
										if(c) Cantidad.appendChild(dataset.getValue(i,64))
										else Cantidad.appendChild(globals.GCROUND(0,2).toFixed(2))	
										ImporteUnitario =<ImporteUnitario/>
										if(impuni) ImporteUnitario.appendChild(globals.GCROUND(dataset.getValue(i,65),2))
										else ImporteUnitario.appendChild(globals.GCROUND(0,2).toFixed(2))	
										Descuento = <Descuento/>
										if(impdto) Descuento.appendChild(globals.GCROUND(impdto,2).toFixed(2))
										else Descuento.appendChild(globals.GCROUND(0,2).toFixed(2))	
										ImporteTotal =<ImporteTotal/>
										//if(imptot) ImporteTotal.appendChild(globals.GCROUND(dataset.getValue(i,74)+relin,2))
										if(imptot) ImporteTotal.appendChild(globals.GCROUND(imptot,2))
										else ImporteTotal.appendChild(globals.GCROUND(0,2).toFixed(2))	
									IDDetalleFactura.appendChild(DescripcionDetalle)
									IDDetalleFactura.appendChild(Cantidad)
									IDDetalleFactura.appendChild(ImporteUnitario)
									IDDetalleFactura.appendChild(Descuento)
									IDDetalleFactura.appendChild(ImporteTotal)
									DetallesFactura.appendChild(IDDetalleFactura)
								//}
							}
							//miro a ver si existe descuento por pronto pago en la totalidad de la factura. Hay que comunicarlo como una linea más
							var query89 = "select depp_cfa,gtosfinan_cfa,pirpf from tbFacturaCabecera "+
							"WHERE (eje_cfa >= "+DEJE+" AND tbFacturaCabecera.eje_cfa <= "+HEJE+") AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
						    "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
						    " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+") "
							var dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
							var porcdtopp = dataset89.getValue(1,1);
							var porcgtofinan = dataset89.getValue(1,2);
							//var porcirpf = dataset89.getValue(1,3);
							
							query89 = "select distinct(piva_lfa),ISNULL(sum(impor_lfa),0) as impor_lfa "+
										"from tbFacturaLinea "+
										"where eje_lfa = "+DEJE+" AND ser_lfa ='"+DSER+"' AND nup_lfa = "+DNUP+
										" group by piva_lfa order by piva_lfa desc"
							dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,9999999)
							var porcivalin1 = dataset89.getValue(1,1);
							var porcivalin2 = dataset89.getValue(2,1);
							var porcivalin3 = dataset89.getValue(3,1);
							var imporlin1 = dataset89.getValue(1,2);
							var imporlin2 = dataset89.getValue(2,2);
							var imporlin3 = dataset89.getValue(3,2);
							var importelineadescuento = 0;
							var importelineadescuento2 = 0;
							var importelineadescuento3 = 0;
							var ivaimportelineadescuento = 0;
							var ivaimportelineadescuento2 = 0;
							var ivaimportelineadescuento3 = 0;
							var importegtosfinan = 0;
							var importereten = 0;
							
							if(porcdtopp)
							{								
								if(porcivalin1 || porcivalin1 == 0.0)
								{
									//relin = 0;
									importelineadescuento = globals.GCROUND(imporlin1*porcdtopp*0.01,2);
									query999 = "select [aplicarre] FROM [tbMaestroClientes] WHERE [idcliente] = "+cliente;
									dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
									if(dataset999.getValue(1,1) == 1)
									{
										query999 = "select [IvaRE] FROM [tbMaestroTipoIva] WHERE [Factor] = "+porcivalin1;
										dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
										trelin = dataset999.getValue(1,1);
										var relin1 = globals.GCROUND(importelineadescuento*trelin*0.01,2)
									}
									IDDetalleFactura = <IDDetalleFactura/>
									DescripcionDetalle =<DescripcionDetalle/>
									DescripcionDetalle.appendChild("DESCUENTO POR PRONTO PAGO "+porcivalin1+"%")
									Cantidad = <Cantidad/>
									Cantidad.appendChild(1)
									ImporteUnitario =<ImporteUnitario/>
									ImporteUnitario.appendChild("-"+globals.GCROUND(importelineadescuento,2))	
									Descuento = <Descuento/>
									Descuento.appendChild(globals.GCROUND(0,2).toFixed(2))	
									ImporteTotal =<ImporteTotal/>
									//if(relin1) importelineadescuento = globals.GCROUND(importelineadescuento+relin1,2);
									//ivaimportelineadescuento = globals.GCROUND(importelineadescuento*porcivalin1*0.01,2);
									//ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento+ivaimportelineadescuento,2))
									ivaimportelineadescuento = globals.GCROUND(importelineadescuento*porcivalin1*0.01,2);
									if(relin1) importelineadescuento = globals.GCROUND(importelineadescuento+relin1,2);
									ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento+ivaimportelineadescuento,2))
									IDDetalleFactura.appendChild(DescripcionDetalle)
									IDDetalleFactura.appendChild(Cantidad)
									IDDetalleFactura.appendChild(ImporteUnitario)
									IDDetalleFactura.appendChild(Descuento)
									IDDetalleFactura.appendChild(ImporteTotal)
									DetallesFactura.appendChild(IDDetalleFactura)
								}
								if(porcivalin2 || porcivalin2 == 0.0)
								{
									importelineadescuento = globals.GCROUND(imporlin2*porcdtopp*0.01,2);
									query999 = "select [aplicarre] FROM [tbMaestroClientes] WHERE [idcliente] = "+cliente;
									dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
									if(dataset999.getValue(1,1) == 1)
									{
										query999 = "select [IvaRE] FROM [tbMaestroTipoIva] WHERE [Factor] = "+porcivalin1;
										dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
										trelin = dataset999.getValue(1,1);
										var relin2 = globals.GCROUND(importelineadescuento*trelin*0.01,2)
									}
									IDDetalleFactura = <IDDetalleFactura/>
									DescripcionDetalle =<DescripcionDetalle/>
									DescripcionDetalle.appendChild("DESCUENTO POR PRONTO PAGO "+porcivalin2+"%")
									Cantidad = <Cantidad/>
									Cantidad.appendChild(1)
									ImporteUnitario =<ImporteUnitario/>
									importelineadescuento2 = imporlin2*porcdtopp*0.01;
									ImporteUnitario.appendChild("-"+globals.GCROUND(importelineadescuento2,2))	
									Descuento = <Descuento/>
									Descuento.appendChild(globals.GCROUND(0,2).toFixed(2))	
									ImporteTotal =<ImporteTotal/>
									//if(relin2) importelineadescuento = globals.GCROUND(importelineadescuento+relin2,2);
									//ivaimportelineadescuento2 = globals.GCROUND(importelineadescuento2*porcivalin2*0.01,2);
									//ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento2+ivaimportelineadescuento2,2))
									ivaimportelineadescuento = globals.GCROUND(importelineadescuento2*porcivalin2*0.01,2);
									if(relin2) importelineadescuento2 = globals.GCROUND(importelineadescuento2+relin2,2);
									ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento2+ivaimportelineadescuento2,2))
									IDDetalleFactura.appendChild(DescripcionDetalle)
									IDDetalleFactura.appendChild(Cantidad)
									IDDetalleFactura.appendChild(ImporteUnitario)
									IDDetalleFactura.appendChild(Descuento)
									IDDetalleFactura.appendChild(ImporteTotal)
									DetallesFactura.appendChild(IDDetalleFactura)
								}
								if(porcivalin3 || porcivalin3 == 0.0)
								{
									importelineadescuento = globals.GCROUND(imporlin3*porcdtopp*0.01,2);
									query999 = "select [aplicarre] FROM [tbMaestroClientes] WHERE [idcliente] = "+cliente;
									dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
									if(dataset999.getValue(1,1) == 1)
									{
										query999 = "select [IvaRE] FROM [tbMaestroTipoIva] WHERE [Factor] = "+porcivalin1;
										dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
										trelin = dataset999.getValue(1,1);
										var relin3 = globals.GCROUND(importelineadescuento*trelin*0.01,2)
									}
									IDDetalleFactura = <IDDetalleFactura/>
									DescripcionDetalle =<DescripcionDetalle/>
									DescripcionDetalle.appendChild("DESCUENTO POR PRONTO PAGO "+porcivalin3+"%")
									Cantidad = <Cantidad/>
									Cantidad.appendChild(1)
									ImporteUnitario =<ImporteUnitario/>
									importelineadescuento3 = imporlin3*porcdtopp*0.01;
									ImporteUnitario.appendChild("-"+globals.GCROUND(importelineadescuento3,2))	
									Descuento = <Descuento/>
									Descuento.appendChild(globals.GCROUND(0,2).toFixed(2))	
									ImporteTotal =<ImporteTotal/>
									//if(relin3) importelineadescuento3 = globals.GCROUND(importelineadescuento3+relin3,2);
									//ivaimportelineadescuento3 = globals.GCROUND(importelineadescuento3*porcivalin3*0.01,2);
									//ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento3+ivaimportelineadescuento3,2))
									ivaimportelineadescuento3 = globals.GCROUND(importelineadescuento3*porcivalin3*0.01,2);
									if(relin3) importelineadescuento3 = globals.GCROUND(importelineadescuento3+relin3,2);
									ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento3+ivaimportelineadescuento3,2))
									IDDetalleFactura.appendChild(DescripcionDetalle)
									IDDetalleFactura.appendChild(Cantidad)
									IDDetalleFactura.appendChild(ImporteUnitario)
									IDDetalleFactura.appendChild(Descuento)
									IDDetalleFactura.appendChild(ImporteTotal)
									DetallesFactura.appendChild(IDDetalleFactura)
								}
							}	
							if(porcgtofinan)
							{
								importegtosfinan = globals.GCROUND((imporlin1 + imporlin2 + imporlin3) * porcgtofinan  * 0.01, 2);
								
								IDDetalleFactura = <IDDetalleFactura/>
								DescripcionDetalle =<DescripcionDetalle/>
								DescripcionDetalle.appendChild("GASTOS FINANCIEROS")
								Cantidad = <Cantidad/>
								Cantidad.appendChild(1)
								ImporteUnitario =<ImporteUnitario/>
								ImporteUnitario.appendChild(importegtosfinan)	
								Descuento = <Descuento/>
								Descuento.appendChild(0)	
								ImporteTotal =<ImporteTotal/>
								   
								ImporteTotal.appendChild(importegtosfinan)
																		   
								IDDetalleFactura.appendChild(DescripcionDetalle)
								IDDetalleFactura.appendChild(Cantidad)
								IDDetalleFactura.appendChild(ImporteUnitario)
								IDDetalleFactura.appendChild(Descuento)
								IDDetalleFactura.appendChild(ImporteTotal)
								DetallesFactura.appendChild(IDDetalleFactura)
							}
							var porcirpf = dataset.getValue(1,110)
							var importeirpf = dataset.getValue(1,109)
							if(importeirpf)
							{
								//importereten = "-"+globals.GCROUND((imporlin1 + imporlin2 + imporlin3 /*- ImporDto*/) * porcirpf * -0.01, 2);
								importereten = globals.GCROUND(dataset.getValue(1,109),2).toFixed(2)
								importereten = Math.abs(importereten)
							}							
							else importereten = 0;
							/*if(porcirpf)
							{
												   
																			
																													   
								/*IDDetalleFactura = <IDDetalleFactura/>
								DescripcionDetalle =<DescripcionDetalle/>
								DescripcionDetalle.appendChild("RETENCIÓN SOPORTADA "+utils.numberFormat(porcirpf,'#,##0.00')+"%")
								Cantidad = <Cantidad/>
								Cantidad.appendChild(1)
								ImporteUnitario =<ImporteUnitario/>
								ImporteUnitario.appendChild(importereten)	
								Descuento = <Descuento/>
								Descuento.appendChild(0)	
								ImporteTotal =<ImporteTotal/>
								ImporteTotal.appendChild(importereten)
								IDDetalleFactura.appendChild(DescripcionDetalle)
								IDDetalleFactura.appendChild(Cantidad)
								IDDetalleFactura.appendChild(ImporteUnitario)
								IDDetalleFactura.appendChild(Descuento)
								IDDetalleFactura.appendChild(ImporteTotal)
								DetallesFactura.appendChild(IDDetalleFactura)
							}*/
							
							/*if((re1 && re1 != 0) || (re2 && re2 != 0) || (re3 && re3 != 0)) 
							{
								var relin = globals.GCROUND(re1+re2+re3,2);
								IDDetalleFactura = <IDDetalleFactura/>
								DescripcionDetalle =<DescripcionDetalle/>
								DescripcionDetalle.appendChild("RECARGO EQUIVALENCIA")
								Cantidad = <Cantidad/>
								Cantidad.appendChild(1)
								ImporteUnitario =<ImporteUnitario/>
								ImporteUnitario.appendChild(relin)	
								Descuento = <Descuento/>
								Descuento.appendChild(0)	
								ImporteTotal =<ImporteTotal/>
								ImporteTotal.appendChild(relin)
								IDDetalleFactura.appendChild(DescripcionDetalle)
								IDDetalleFactura.appendChild(Cantidad)
								IDDetalleFactura.appendChild(ImporteUnitario)
								IDDetalleFactura.appendChild(Descuento)
								IDDetalleFactura.appendChild(ImporteTotal)
								DetallesFactura.appendChild(IDDetalleFactura)
							}*/
						ImporteTotalFactura = <ImporteTotalFactura/>
						imp = 0;
						imp += dataset.getValue(1,49)
						imp += importereten;
						ImporteTotalFactura.appendChild(globals.GCROUND(imp,2))
						//ImporteTotalFactura.appendChild(dataset.getValue(1,49)+importereten)					
						RetencionSoportada = <RetencionSoportada/>
						//if(dataset.getValue(1,109)) RetencionSoportada.appendChild(globals.GCROUND(dataset.getValue(1,108),2).toFixed(2))
						if(importereten && importereten != 0) RetencionSoportada.appendChild(importereten)
						else RetencionSoportada.appendChild(0)
						/*El campo de <BaseImponibleACoste> solamente podrá informarse cuando
						alguna de las claves de <ClaveRegimenIvaOpTrascendencia> es 06 (Régimen
						especial grupo de entidades de IVA)*/
						//BaseImponibleACoste = <BaseImponibleACoste/>
						//BaseImponibleACoste.appendChild(0)
						
						Claves = <Claves/>
							IDClave = <IDClave/>
								/*01 Operación de régimen general y cualquier otro supuesto que no esté recogido en los siguientes valores.
								  02 Exportación.
								  03 Operaciones a las que se aplique el régimen especial de bienes usados, objetos de arte, antigüedades y objetos de colección.
								  04 Régimen especial del oro de inversión.
								  05 Régimen especial de las agencias de viajes.
								  06 Régimen especial grupo de entidades en IVA (Nivel Avanzado).
								  07 Régimen especial del criterio de caja.
								  08 Operaciones sujetas al IPSI/IGIC (Impuesto sobre la Producción, los Servicios y la Importación / Impuesto General Indirecto Canario).
								  09 Facturación de las prestaciones de servicios de agencias de viaje que actúan como mediadoras en nombre y por cuenta ajena (disposición adicional 3ª del Reglamento de Facturación).
								  10 Cobros por cuenta de terceros de honorarios profesionales o de derechos derivados de la propiedad industrial, de autor u otros por cuenta de sus socios, socias, asociados, asociadas, colegiados o colegiadas efectuados por sociedades, asociaciones, colegios profesionales u otras entidades querealicen estas funciones de cobro.
								  11 Operaciones de arrendamiento de local de negocio sujetas a retención.
								  12 Operaciones de arrendamiento de local de negocio no sujetas a retención.
								  13 Operaciones de arrendamiento de local de negocio sujetas y no sujetas a retención.
								  14 Factura con  IVA  pendiente  de  devengo  en  certificaciones  de  obra  cuyo  destinatario  sea una Administración Pública.
								  15 Factura con IVA pendiente de devengo en operaciones de tracto sucesivo.
								  317Operación acogida a alguno de los regímenes previstos en el Capítulo XI del Título IX (OSS e IOSS)
								  419Operaciones de actividades incluidas en el Régimen Especial de Agricultura, Ganadería y Pesca (REAGYP)
								  51 Operaciones en recargo de equivalencia.*/
								ClaveRegimenIvaOpTrascendencia = <ClaveRegimenIvaOpTrascendencia/>
								if(paiscliente && paiscliente == 'ES') 
								{
									if(codpostalcliente && (utils.stringLeft(codpostalcliente,2) == '35' ||
									utils.stringLeft(codpostalcliente,2) == '38' ||
									utils.stringLeft(codpostalcliente,2) == '51' ||
									utils.stringLeft(codpostalcliente,2) == '52')) ClaveRegimenIvaOpTrascendencia.appendChild('08')
									else if(porcirpf && porcirpf == 19) ClaveRegimenIvaOpTrascendencia.appendChild('11')
									else ClaveRegimenIvaOpTrascendencia.appendChild('01')
								}
								else ClaveRegimenIvaOpTrascendencia.appendChild('02')
							IDClave.appendChild(ClaveRegimenIvaOpTrascendencia)
						Claves.appendChild(IDClave)
					DatosFactura.appendChild(FechaOperacion)
					DatosFactura.appendChild(DescripcionFactura)
					DatosFactura.appendChild(DetallesFactura)
					DatosFactura.appendChild(ImporteTotalFactura)
					if(importereten && importereten != 0) DatosFactura.appendChild(RetencionSoportada)
					//DatosFactura.appendChild(BaseImponibleACoste)
					DatosFactura.appendChild(Claves)
					TipoDesglose = <TipoDesglose/>
						DesgloseFactura = <DesgloseFactura/>
						/*var p1 = dataset.getValue(1,41)
						var p2 = dataset.getValue(1,44)
						var p3 = dataset.getValue(1,47)
						var re1 = dataset.getValue(1,52)
						var re2 = dataset.getValue(1,53)
						var re3 = dataset.getValue(1,54)*/
						if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.pais &&
						forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.pais != 'ES')
						{
							forms.FrmFacturasGC.sujetaexentaivasii = 'E';
						}
						else if(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal &&
								(utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '35' ||
								utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '38' ||
								utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '51' ||
								utils.stringLeft(forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal,2) == '52'))
						{
							forms.FrmFacturasGC.sujetaexentaivasii = 'NS';
						}
						else
						{
							forms.FrmFacturasGC.sujetaexentaivasii = 'NE';
						}
						var sujetaexentaiva = forms.FrmFacturasGC.sujetaexentaivasii;
						if(!sujetaexentaiva) sujetaexentaiva = 'NE';
						if(sujetaexentaiva == 'NE')
						{
							//if((p1 != null && p1 > 0) ||
							//(p2 != null && p2 > 0) ||
							//(p3 != null && p3 > 0))
							//{
							query89 = "select impbie_cfa,impbie2_cfa,impbie3_cfa,cuotaiva_cfa,cuotaiva2_cfa,cuotaiva3_cfa \
										from tbFacturaCabecera where eje_cfa = "+DEJE+" AND ser_cfa ='"+DSER+"' AND nup_cfa = "+DNUP
							dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
							/*var totalBI = dataset89.getValue(1,1)*/
									Sujeta = <Sujeta/>
										NoExenta = <NoExenta/>
											DetalleNoExenta = <DetalleNoExenta/>
												//S1 Sin inversión del sujeto pasivo.
												//S2 Con inversión del sujeto pasivo.
												TipoNoExenta = <TipoNoExenta/>
												TipoNoExenta.appendChild('S1')
												DesgloseIVA = <DesgloseIVA/>
													//query89 = "select piva_cfa,piva2_cfa,piva3_cfa,impbie_cfa,impbie2_cfa,impbie3_cfa,cuotaiva_cfa,cuotaiva2_cfa,cuotaiva3_cfa "+
													//"from tbFacturaCabecera "+
													//"where eje_cfa = "+DEJE+" AND ser_cfa ='"+DSER+"' AND nup_cfa = "+DNUP;
													//dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
													DetalleIVA = <DetalleIVA/>
														BaseImponible = <BaseImponible/>
														//BaseImponible.appendChild(dataset89.getValue(1,4))
														//BaseImponible.appendChild(globals.GCROUND(imporlin1-importelineadescuento,2))
														if(dataset89.getValue(1,1)) BaseImponible.appendChild(globals.GCROUND(dataset89.getValue(1,1),2))
														else BaseImponible.appendChild(0)
														TipoImpositivo = <TipoImpositivo/>
														//TipoImpositivo.appendChild(dataset89.getValue(1,1))
														TipoImpositivo.appendChild(porcivalin1)
														CuotaImpuesto = <CuotaImpuesto/>
														//CuotaImpuesto.appendChild(dataset89.getValue(1,7))
														//CuotaImpuesto.appendChild(globals.GCROUND((imporlin1-importelineadescuento)*porcivalin1*0.01,2))
														if(dataset89.getValue(1,4)) CuotaImpuesto.appendChild(globals.GCROUND(dataset89.getValue(1,4),2))
														else CuotaImpuesto.appendChild(0)
													DetalleIVA.appendChild(BaseImponible)
													DetalleIVA.appendChild(TipoImpositivo)
													DetalleIVA.appendChild(CuotaImpuesto)
													if((re1 && re1 != 0)) 
													{
														if(re1){
															var query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
															"WHERE [Factor] = "+p1;
															var dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
															var tre = dataset88.getValue(1,1);
															if(!tre) tre = 0;
															TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
															TipoRecargoEquivalencia.appendChild(tre)
															CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
															CuotaRecargoEquivalencia.appendChild(re1)
															//OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
															//OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')
															DetalleIVA.appendChild(TipoRecargoEquivalencia)
															DetalleIVA.appendChild(CuotaRecargoEquivalencia)
															//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
														}
													}
												DesgloseIVA.appendChild(DetalleIVA)
													//if(dataset89.getValue(1,2))
													//if(porcivalin2)
													if(imporlin2)
													{
														DetalleIVA = <DetalleIVA/>
															BaseImponible = <BaseImponible/>
															if(dataset89.getValue(1,2)) BaseImponible.appendChild(dataset89.getValue(1,2))
															else BaseImponible.appendChild(0)
															//BaseImponible.appendChild(globals.GCROUND(imporlin2-importelineadescuento2,2))
															TipoImpositivo = <TipoImpositivo/>
															//TipoImpositivo.appendChild(dataset89.getValue(1,2))
															TipoImpositivo.appendChild(porcivalin2)
															CuotaImpuesto = <CuotaImpuesto/>
															if(dataset89.getValue(1,5)) CuotaImpuesto.appendChild(dataset89.getValue(1,5))
															else CuotaImpuesto.appendChild(0)
															//CuotaImpuesto.appendChild(globals.GCROUND((imporlin2-importelineadescuento2)*porcivalin2*0.01,2))
														DetalleIVA.appendChild(BaseImponible)
														DetalleIVA.appendChild(TipoImpositivo)
														DetalleIVA.appendChild(CuotaImpuesto)
														if((re2 && re2 != 0)) 
														{	if(re2){
																query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																"WHERE [Factor] = "+p2;
																dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																tre = dataset88.getValue(1,1);
																if(!tre) tre = 0;
																TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																TipoRecargoEquivalencia.appendChild(tre)
																CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																CuotaRecargoEquivalencia.appendChild(re2)
																//OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
																//OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')
																DetalleIVA.appendChild(TipoRecargoEquivalencia)
																DetalleIVA.appendChild(CuotaRecargoEquivalencia)
																//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
															}
														}
														
													DesgloseIVA.appendChild(DetalleIVA)
													}
													//if(dataset89.getValue(1,3))
													//if(porcivalin3)
													if(imporlin3)
													{
														DetalleIVA = <DetalleIVA/>
															BaseImponible = <BaseImponible/>
															if(dataset89.getValue(1,3)) BaseImponible.appendChild(dataset89.getValue(1,3))
															else BaseImponible.appendChild(0)
															//BaseImponible.appendChild(globals.GCROUND(imporlin3-importelineadescuento3,2))
															TipoImpositivo = <TipoImpositivo/>
															//TipoImpositivo.appendChild(dataset89.getValue(1,3))
															TipoImpositivo.appendChild(porcivalin3)
															CuotaImpuesto = <CuotaImpuesto/>
															if(dataset89.getValue(1,6)) CuotaImpuesto.appendChild(dataset89.getValue(1,6))
															else CuotaImpuesto.appendChild(0)
															//CuotaImpuesto.appendChild(globals.GCROUND((imporlin3-importelineadescuento3)*porcivalin3*0.01,2))
														DetalleIVA.appendChild(BaseImponible)
														DetalleIVA.appendChild(TipoImpositivo)
														DetalleIVA.appendChild(CuotaImpuesto)
														if((re3 && re3 != 0)) 
														{	if(re3){
																query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																"WHERE [Factor] = "+p3;
																dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																tre = dataset88.getValue(1,1);
																if(!tre) tre = 0;
																TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																TipoRecargoEquivalencia.appendChild(tre)
																CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																CuotaRecargoEquivalencia.appendChild(re3)
																//OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
																//OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')
																DetalleIVA.appendChild(TipoRecargoEquivalencia)
																DetalleIVA.appendChild(CuotaRecargoEquivalencia)
																//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
															}
														}
														/*if((re1 && re1 != 0) || (re2 && re2 != 0) || (re3 && re3 != 0)) 
														{	
															OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
															OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('S')													
															DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
														}*/
													DesgloseIVA.appendChild(DetalleIVA)
													}
													
													
													
													/*if((re1 && re1 != 0) || (re2 && re2 != 0) || (re3 && re3 != 0)) 
													{
															if(re1){
																var query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																"WHERE [Factor] = "+p1;
																var dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																var tre = dataset88.getValue(1,1);
																if(!tre) tre = 0;
																TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																TipoRecargoEquivalencia.appendChild(tre)
																CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																CuotaRecargoEquivalencia.appendChild(re1)
																DetalleIVA.appendChild(TipoRecargoEquivalencia)
																DetalleIVA.appendChild(CuotaRecargoEquivalencia)
															DesgloseIVA.appendChild(DetalleIVA)
															}
															if(re2){
																query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																"WHERE [Factor] = "+p2;
																dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																tre = dataset88.getValue(1,1);
																if(!tre) tre = 0;
																TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																TipoRecargoEquivalencia.appendChild(tre)
																CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																CuotaRecargoEquivalencia.appendChild(re2)
																DetalleIVA.appendChild(TipoRecargoEquivalencia)
																DetalleIVA.appendChild(CuotaRecargoEquivalencia)
															}
															if(re3){
																query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																"WHERE [Factor] = "+p3;
																dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																tre = dataset88.getValue(1,1);
																if(!tre) tre = 0;
																TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																TipoRecargoEquivalencia.appendChild(tre)
																CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																CuotaRecargoEquivalencia.appendChild(re3)
																DetalleIVA.appendChild(TipoRecargoEquivalencia)
																DetalleIVA.appendChild(CuotaRecargoEquivalencia)
															}
															OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
															OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('S')													
														DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
													}*/	
												//DesgloseIVA.appendChild(DetalleIVA)
											DetalleNoExenta.appendChild(TipoNoExenta)
											DetalleNoExenta.appendChild(DesgloseIVA)
										NoExenta.appendChild(DetalleNoExenta)
									//Sujeta.appendChild(NoExenta)
									//DesgloseFactura.appendChild(Sujeta)
									
								if(porcgtofinan && importegtosfinan && importegtosfinan != 0)
								{
										/*NoSujeta =<NoSujeta/>
											DetalleNoSujeta = <DetalleNoSujeta/>
												Causa = <Causa/>
												Causa.appendChild('OT')
												Importe = <Importe/>
												Importe.appendChild(importegtosfinan)
											DetalleNoSujeta.appendChild(Causa)
											DetalleNoSujeta.appendChild(Importe)
										NoSujeta.appendChild(DetalleNoSujeta)
									DesgloseFactura.appendChild(NoSujeta)*/
										Sujeta =<Sujeta/>
										Exenta = <Exenta/>
											DetalleExenta = <DetalleExenta/>
												CausaExencion = <CausaExencion/>	
												/* E1 Exenta por el artículo 20 de la Ley del IVA
												 * E2 Exenta por el artículo 21 de la Ley del IVA
												 * E3 Exenta por el artículo 22 de la Ley del IVA
												 * E4 Exenta por el artículo 23 y 24 de la Ley del IVA
												 * E5 Exenta por el artículo 25 de la Ley del IVA
												 * E6 Exenta por otra causa
												 **/
												CausaExencion.appendChild('E1')
												BaseImponible = <BaseImponible/>									
												BaseImponible.appendChild(importegtosfinan)														
											DetalleExenta.appendChild(CausaExencion)
											DetalleExenta.appendChild(BaseImponible)
										Exenta.appendChild(DetalleExenta)
									Sujeta.appendChild(Exenta)
									Sujeta.appendChild(NoExenta)
								DesgloseFactura.appendChild(Sujeta)
								}
								else
								{
									Sujeta.appendChild(NoExenta)
								DesgloseFactura.appendChild(Sujeta)
								}
									/*if(porcirpf && importereten && importereten != 0)
									{
										NoSujeta =<NoSujeta/>
											DetalleNoSujeta = <DetalleNoSujeta/>
												Causa = <Causa/>
												Causa.appendChild('OT')
												Importe = <Importe/>
												Importe.appendChild(importereten)
											DetalleNoSujeta.appendChild(Causa)
											DetalleNoSujeta.appendChild(Importe)
										NoSujeta.appendChild(DetalleNoSujeta)
									DesgloseFactura.appendChild(NoSujeta)			
									}*/
							//}
						}
						else if(sujetaexentaiva == 'NS')
						{
							if((p1 == 0) ||
							(p2 == 0) ||
							(p3 == 0))
							{
								var bi1 = dataset.getValue(1,40)
								if(!bi1) bi1 = 0;
								//var cuota1 = dataset.getValue(1,42)
								
								var bi2 = dataset.getValue(1,43)
								if(!bi2) bi2 = 0;
								//var cuota2 = dataset.getValue(1,45)
								
								var bi3 = dataset.getValue(1,46)
								if(!bi3) bi3 = 0;
								//var cuota3 = dataset.getValue(1,48)
								
								NoSujeta =<NoSujeta/>
									DetalleNoSujeta = <DetalleNoSujeta/>
										Causa = <Causa/>
										if(codpostalcliente && (utils.stringLeft(codpostalcliente,2) == '35' ||
										utils.stringLeft(codpostalcliente,2) == '38' ||
										utils.stringLeft(codpostalcliente,2) == '51' ||
										utils.stringLeft(codpostalcliente,2) == '52')) Causa.appendChild('RL') 
										else Causa.appendChild('OT')
										Importe = <Importe/>
										if(dataset.getValue(1,41) == 0)	Importe.appendChild(bi1)
										if(dataset.getValue(1,44) == 0)	Importe.appendChild(bi2)
										if(dataset.getValue(1,47) == 0)	Importe.appendChild(bi3)
									DetalleNoSujeta.appendChild(Causa)
									DetalleNoSujeta.appendChild(Importe)
									NoSujeta.appendChild(DetalleNoSujeta)
								DesgloseFactura.appendChild(NoSujeta)
							}
						}
						else if(sujetaexentaiva == 'E')
						{
							if((p1 == 0) ||
							(p2 == 0) ||
							(p3 == 0))
							{
								bi1 = dataset.getValue(1,40)
								if(!bi1) bi1 = 0;
								//cuota1 = dataset.getValue(1,42)
								
								bi2 = dataset.getValue(1,43)
								if(!bi2) bi2 = 0;
								//cuota2 = dataset.getValue(1,45)
								
								bi3 = dataset.getValue(1,46)
								if(!bi3) bi3 = 0;
								//cuota3 = dataset.getValue(1,48)
								
								Sujeta =<Sujeta/>
									Exenta = <Exenta/>
										DetalleExenta = <DetalleExenta/>
											CausaExencion = <CausaExencion/>
											/* E1 Exenta por el artículo 20 de la Ley del IVA
											 * E2 Exenta por el artículo 21 de la Ley del IVA
											 * E3 Exenta por el artículo 22 de la Ley del IVA
											 * E4 Exenta por el artículo 23 y 24 de la Ley del IVA
											 * E5 Exenta por el artículo 25 de la Ley del IVA
											 * E6 Exenta por otra causa
											 **/
											CausaExencion.appendChild('E6')
											BaseImponible = <BaseImponible/>									
											if(dataset.getValue(1,41) == 0)	BaseImponible.appendChild(bi1)
											if(dataset.getValue(1,44) == 0)	BaseImponible.appendChild(bi2)
											if(dataset.getValue(1,47) == 0)	BaseImponible.appendChild(bi3)
										DetalleExenta.appendChild(CausaExencion)
										DetalleExenta.appendChild(BaseImponible)
									Exenta.appendChild(DetalleExenta)
								Sujeta.appendChild(Exenta)
							DesgloseFactura.appendChild(Sujeta)
							}
						}
						else
						{
							DesgloseTipoOperacion = <DesgloseTipoOperacion/>
							/*if(forms.FrmFacturasGC.tipooperacionsii == 'E')
							{
								PrestacionServicios = <PrestacionServicios/>
								Sujeta = <Sujeta/>
								if(forms.FrmFacturasGC.sujetaexentaivasii == 'E' ||
								forms.FrmFacturasGC.sujetaexentaivasii == 'NS')
								{
									Exenta = <Exenta/>
									DetalleExenta = <DetalleExenta/>
								}
								else //if(forms.FrmFacturasGC.sujetaexentaivasii == 'NE')
								{
									NoExenta = <NoExenta/>
										DetalleNoExenta = <DetalleNoExenta/>
											TipoNoExenta = <TipoNoExenta/>
											//S1 Sin inversión del sujeto pasivo.
											//S2 Con inversión del sujeto pasivo.
											TipoNoExenta.appendChild('S1')
											DesgloseIVA = <DesgloseIVA/>
												//query89 = "select piva_cfa,piva2_cfa,piva3_cfa,impbie_cfa,impbie2_cfa,impbie3_cfa,cuotaiva_cfa,cuotaiva2_cfa,cuotaiva3_cfa "+
												//"from tbFacturaCabecera "+
												//"where eje_cfa = "+DEJE+" AND ser_cfa ='"+DSER+"' AND nup_cfa = "+DNUP;
												//dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
												DetalleIVA = <DetalleIVA/>
													BaseImponible = <BaseImponible/>
													//BaseImponible.appendChild(dataset89.getValue(1,4))
													BaseImponible.appendChild(globals.GCROUND(imporlin1-importelineadescuento,2))
													TipoImpositivo = <TipoImpositivo/>
													TipoImpositivo.appendChild(porcivalin1)
													CuotaImpuesto = <CuotaImpuesto/>
													CuotaImpuesto.appendChild(globals.GCROUND((imporlin1-importelineadescuento)*porcivalin1*0.01,2))
													//TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
													//TipoRecargoEquivalencia.appendChild(porcre)
													//CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
													//CuotaRecargoEquivalencia.appendChild(cuotare)
													//OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
													//OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')
												DetalleIVA.appendChild(BaseImponible)
												//DetalleIVA.appendChild(TipoImpositivo)
												//DetalleIVA.appendChild(CuotaImpuesto)
												//DetalleIVA.appendChild(TipoRecargoEquivalencia)
												//DetalleIVA.appendChild(CuotaRecargoEquivalencia)
												//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
											DesgloseIVA.appendChild(DetalleIVA)												
										DetalleNoExenta.appendChild(TipoNoExenta)
										DetalleNoExenta.appendChild(DesgloseIVA)
									NoExenta.appendChild(DetalleNoExenta)
								Sujeta.appendChild(NoExenta)
								PrestacionServicios.appendChild(Sujeta)
								DesgloseTipoOperacion.appendChild(PrestacionServicios)
								}
							}
							else
							{*/
								Entrega = <Entrega/>
									Sujeta = <Sujeta/>
									if(forms.FrmFacturasGC.sujetaexentaivasii == 'E' ||
									forms.FrmFacturasGC.sujetaexentaivasii == 'NS')
									{
										Exenta = <Exenta/>
											DetalleExenta = <DetalleExenta/>
												CausaExencion = <CausaExencion/>
												 /*E1 Exenta por el artículo 20 de la Ley del IVA
												 * E2 Exenta por el artículo 21 de la Ley del IVA
												 * E3 Exenta por el artículo 22 de la Ley del IVA
												 * E4 Exenta por el artículo 23 y 24 de la Ley del IVA
												 * E5 Exenta por el artículo 25 de la Ley del IVA
												 * E6 Exenta por otra causa
												 */
												 CausaExencion.appendChild('E6')
												 BaseImponible = <BaseImponible/>
												 BaseImponible.appendChild(globals.GCROUND(imporlin1-importelineadescuento,2))
											DetalleExenta.appendChild(CausaExencion)	
											DetalleExenta.appendChild(BaseImponible)
										Exenta.appendChild(DetalleExenta)
									Sujeta.appendChild(Exenta)
								Entrega.appendChild(Sujeta)
								DesgloseTipoOperacion.appendChild(Entrega)	
									}
									else 
									{
										NoExenta = <NoExenta/>
											DetalleNoExenta = <DetalleNoExenta/>
												TipoNoExenta = <TipoNoExenta/>
												//S1 Sin inversión del sujeto pasivo.
												//S2 Con inversión del sujeto pasivo.
												TipoNoExenta.appendChild('S1')
												DesgloseIVA = <DesgloseIVA/>
													//query89 = "select piva_cfa,piva2_cfa,piva3_cfa,impbie_cfa,impbie2_cfa,impbie3_cfa,cuotaiva_cfa,cuotaiva2_cfa,cuotaiva3_cfa "+
													//"from tbFacturaCabecera "+
													//"where eje_cfa = "+DEJE+" AND ser_cfa ='"+DSER+"' AND nup_cfa = "+DNUP;
													//dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
													DetalleIVA = <DetalleIVA/>
														BaseImponible = <BaseImponible/>
														//BaseImponible.appendChild(dataset89.getValue(1,4))
														BaseImponible.appendChild(globals.GCROUND(imporlin1-importelineadescuento,2))
														TipoImpositivo = <TipoImpositivo/>
														TipoImpositivo.appendChild(porcivalin1)
														CuotaImpuesto = <CuotaImpuesto/>
														CuotaImpuesto.appendChild(globals.GCROUND((imporlin1-importelineadescuento)*porcivalin1*0.01,2))
														/*TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
														TipoRecargoEquivalencia.appendChild(porcre)
														CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
														CuotaRecargoEquivalencia.appendChild(cuotare)
														OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
														OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')*/
													DetalleIVA.appendChild(BaseImponible)
													//DetalleIVA.appendChild(TipoImpositivo)
													//DetalleIVA.appendChild(CuotaImpuesto)
													//DetalleIVA.appendChild(TipoRecargoEquivalencia)
													//DetalleIVA.appendChild(CuotaRecargoEquivalencia)
													//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
												DesgloseIVA.appendChild(DetalleIVA)												
											DetalleNoExenta.appendChild(TipoNoExenta)
											DetalleNoExenta.appendChild(DesgloseIVA)
										NoExenta.appendChild(DetalleNoExenta)
									Sujeta.appendChild(NoExenta)
								Entrega.appendChild(Sujeta)
								DesgloseTipoOperacion.appendChild(Entrega)
									}
							//}
							TipoDesglose.appendChild(DesgloseTipoOperacion)
							Factura.appendChild(TipoDesglose)
						}
					TipoDesglose.appendChild(DesgloseFactura)
					//if(paiscliente && paiscliente == 'ES') Factura.appendChild(DatosFactura)	
					//if(paiscliente && paiscliente == 'ES') Factura.appendChild(TipoDesglose)
				Factura.appendChild(DatosFactura)	
				Factura.appendChild(TipoDesglose)
			HuellaTBAI = <HuellaTBAI/>	
			Software = <Software/>
				LicenciaTBAI = <LicenciaTBAI/>
				if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0)
				{
					if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){
						LicenciaTBAI.appendChild('TBAIGIPRE00000000017')// ENTORNO PRUEBAS GIPUZKOA
					}
					else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
						LicenciaTBAI.appendChild('TBAIGIPRE00000000017')// ENTORNO PRUEBAS VIZCAYA
					}
					else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
						LicenciaTBAI.appendChild('TBAIARbljlFjMdb00711')// ENTORNO PRUEBAS ARABA
					}
					else {
						LicenciaTBAI.appendChild('TBAIGIPRE00000000017')// ENTORNO PRUEBAS GIPUZKOA
					}
				}
				else
				{
					LicenciaTBAI.appendChild('TBAIGI84FAD45BA4608A')// ENTORNO REAL
				}
				EntidadDesarrolladora =<EntidadDesarrolladora/>
					NIF = <NIF/>
					NIF.appendChild('A20170254')
				EntidadDesarrolladora.appendChild(NIF)
				Nombre = <Nombre/>
				Nombre.appendChild('ERP_AG')
				Version = <Version/>
				if(gcparametrosaplicacion_to_parametrosaplicacion.empresa) Version.appendChild(new Date().getFullYear()+'-'+utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.empresa,14));	
				/*if(globals.GCconex == 'conexiongestioncomercialag') Version.appendChild(new Date().getFullYear()+'-AG');	
				else if(globals.GCconex == 'conexiongestionmlegazpipruebas') Version.appendChild(new Date().getFullYear()+'-MLEGAZPI');	
				else if(globals.GCconex == 'conexiongestiontmendizabalpruebas') Version.appendChild(new Date().getFullYear()+'-TMENDIZABAL');	
				else if(globals.GCconex == 'conexiongestionolabemarpruebas') Version.appendChild(new Date().getFullYear()+'-OLABEMAR');	
				else if(globals.GCconex == 'conexiongestioncomercialagdemo') Version.appendChild(new Date().getFullYear()+'-DEMO');	
				else if(globals.GCconex == 'conexiongestioncomercialagdemo2') Version.appendChild(new Date().getFullYear()+'-DEMO2');	
				else if(globals.GCconex == 'conexiongestionzusipruebas') Version.appendChild(new Date().getFullYear()+'-ZUSI');*/	
				else Version.appendChild(new Date().getFullYear())
			Software.appendChild(LicenciaTBAI)
			Software.appendChild(EntidadDesarrolladora)
			Software.appendChild(Nombre)
			Software.appendChild(Version)
			HuellaTBAI.appendChild(Software)
			//Datos del dispositivo desde el que se emite la factura
				NumSerieDispositivo = <NumSerieDispositivo/>
				var macaddress = plugins.UserManager.Client().macAddress;				
					macaddress = forms.dlg_ImpresionFacturasTBAIGC.macaddress;
				NumSerieDispositivo.appendChild(macaddress)
			HuellaTBAI.appendChild(NumSerieDispositivo)
			SignatureValueFirmaFactura = <SignatureValueFirmaFactura/>
			SignatureValueFirmaFactura.appendChild(record["firmafactura"])
			
			Document.appendChild(Cabecera)
			Document.appendChild(Sujetos)
			Document.appendChild(Factura)
			Document.appendChild(HuellaTBAI)
			Document.appendChild(SignatureValueFirmaFactura)
				
			
			xml += Document
			//var newxml = xml.toString().replace(' xmlns=""','')
			newxml = utils.stringReplace(xml.toString(),'<SubsanacionModificacionTicketBAI','<ns2:SubsanacionModificacionTicketBAI')
			newxml = utils.stringReplace(newxml,'</SubsanacionModificacionTicketBAI>','</ns2:SubsanacionModificacionTicketBAI>')
			newxml = utils.stringReplace(newxml,'<ns2:SubsanacionModificacionTicketBAI>','<ns2:SubsanacionModificacionTicketBAI  xmlns:ns2="urn:ticketbai:zuzendu-alta">')
			newxml = utils.stringReplace(newxml,'<Sujetos>','<Sujetos  xmlns="">')
			newxml = utils.stringReplace(newxml,'<HuellaTBAI>','<HuellaTBAI  xmlns="">')
			
			//newxml = utils.stringReplace(newxml,' xmlns=""','')
			//var xml2 = new XML(newxml)
			application.output(newxml);
					
					
			/*var jsFile = plugins.file.createTempFile('SEPA','.xml');
					
			var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
			if (!success) application.output('Could not write file.');
			//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ) 
			//{
				plugins.file.streamFilesToServer(jsFile)
				plugins.file.openFile(jsFile,"_blank",application/xml)
			/*}
			else 
			{
				plugins.file.streamFilesToServer(jsFile,doImportFile)
			}*/
		
		
			htm += newxml
			
			if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{
				var folder = plugins.file.convertToJSFile("c:\\tmp");
				var b = plugins.file.createFolder(folder)
				if (b == true) application.output("El directorio c:\\tmp se ha creado correctamente o ya existía.");
				/*
				var js = plugins.file.showFileSaveDialog('TBAI'+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)+'.xml', 'Selecciona localización para salvar el fichero');
				if (!js) return;			
							
					// Write the file in the selected location
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
				*/
				var js = "c:\\tmp\\MODIFICARTBAI"+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)+'.xml';
				var f = plugins.file.convertToJSFile(js);
				if(f && f.exists()) f.deleteFile()
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
				
				var js2 = "c:\\tmp\\fentrada.xml";
				var f2 = plugins.file.convertToJSFile(js2);
				if(f2 && f2.exists()) f2.deleteFile()
				plugins.file.writeTXTFile(js2, htm, 'UTF8', 'application/xml');
				
				var rutaficherosigned =  js;
				/*
				//is the full path of the program to be executed.
				
				var rutabat = "c:\\Servoy\\Comando_Autofirma_Servoy.bat";
				var f = plugins.file.convertToJSFile(rutabat);
				*/
				//var hfolder = plugins.file.getHomeFolder()+"\\.servoy\\";
				//var rutabat = hfolder+"afirma_bat.exe";
				//var rutabat = hfolder+"Comando_Autofirma_Servoy.bat";
				
				if(f && f.exists())
				{
					//var rutaficherosigned = "c:\\tmp\\ANULATBAI"+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)+"_firma.xml";//"_firma.xsig";
					//f = plugins.file.convertToJSFile(rutaficherosigned);				
					//if(f && f.exists()) f.deleteFile()
					
					var ficherosalida = "c:\\tmp\\fsalida.xml";				
					f2 = plugins.file.convertToJSFile(ficherosalida);				
					if(f2 && f2.exists()) f2.deleteFile()
					
					/*var str = application.executeProgram(rutabat,[js, rutaficherosigned]);
					
					
					
					if(!str || str == '') {
						globals.GCshowErrorDialog("La factura NO se ha firmado digitalmente de manera correcta.\n"+resp, null, null, null, null, null)
					}
					application.output(str)
					*/
					application.output(rutaficherosigned)		
					
					f = plugins.file.convertToJSFile(rutaficherosigned);
					if(f && f.exists())
					{
						f = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml");
						
						if(f && f.exists()) f.deleteFile()
						plugins.file.copyFile(rutaficherosigned,"C:\\tmp\\ficheroenviocurl.xml")
						
						//leo el fichero firmado
						var texto = new Array();
				    
						 var _oFR = new Packages.java.io.FileInputStream(rutaficherosigned),
					     _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
					     _oBR = new Packages.java.io.BufferedReader(_oIR),
					     z = 0;
						 while ((texto[z] = _oBR.readLine()) != null) 
						 {
					         //texto[i] = _oBR.readLine();
					         z++;            
					     }
					     _oBR.close();
					     
					     
					     //macaddress = forms.dlg_ImpresionFacturasTBAIGC.macaddress;
					   
					     
						//ENVIO EL XML AL SISTEMA TICKETBAI
						//https://tbai-z.egoitza.gipuzkoa.eus/sarrerak/zuzendu-alta //entorno real
						//https://tbai-z.prep.gipuzkoa.eus/sarrerak/zuzendu-alta    //entorno pruebas
						var resp = envioTBAI2_modificar(rutaficherosigned)
						application.output(resp)
						if(utils.stringLeft(resp,2) == '00')
						{
							texto = new Array();
					    
							 _oFR = new Packages.java.io.FileInputStream("C:\\TMP\\salida.xml"),
						     _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
						     _oBR = new Packages.java.io.BufferedReader(_oIR),
						     z = 0;
							 while ((texto[z] = _oBR.readLine()) != null) 
							 {
						         //texto[i] = _oBR.readLine();
						         z++;            
						     }
						     _oBR.close();
							vSet.loadRecords(databaseManager.convertToDataSet([uuid1]))  
							record = vSet.getRecord(vSet.getSelectedIndex())
							if(record)
							{
								var linea = texto[4];
								fechenvfra = linea.slice(24, 43);
								record.fechaenviofichero = utils.parseDate(fechenvfra,'dd-MM-yyyy HH:mm:ss');//new Date();
								//mac
								//record.mac = macaddress;
								//ctbai
								var diafactura = linea.slice(24, 26);
							    var mesfactura = linea.slice(27, 29);
							    var anofactura = linea.slice(32, 34);
							    var SignatureValue = utils.stringMiddle(record['ctbai'],23,13);
							    var ctbai36 = "TBAI-"+gcparametrosaplicacion_to_parametrosaplicacion.cif + "-" + 
							     				diafactura + mesfactura + anofactura + "-" + SignatureValue + "-"
							    var crc = scopes.netticketbaiCRC8.calculate(ctbai36)
								//var crc = scopes.netticketbaiCRC8.CRC8(null,ctbai36)
								//var crc = scopes.netticketbaiCRC8.entrada(ctbai36)
								application.output(ctbai36+crc)
								record.ctbai = ctbai36 + crc;
								//firmafactura
								//record.firmafactura = SignatureValue2;
								//QR
								var s = record['fecha_cfa'].getFullYear();
								var nf = record['eje_cfa']+utils.numberFormat(record['nup_cfa'],'00000')+record['ser_cfa']
								if(!record['impirpf']) var imp = record['impnee_cfa'];
								else imp = record['impnee_cfa'] - record['impirpf'];
								
								/*record.cqr = "https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+
								"&nf="+nf+"&i="+imp+"&cr="+crc;
								 */ 
								if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0)
								{
									//var codqr = scopes.netticketbaiCRC8.calculate('https://batuz.eus/QRTBAI/?id=TBAI-00000006Y-251019-btFpwP8dcLGAF-237&s=T&nf=27174&i=4.70') // cqr = 007
									var codqr =  scopes.netticketbaiCRC8.calculate("https://tbai.prep.gipuzkoa.eus/qr/?id="+record['ctbai']+"&s="+s+"&nf="+nf+"&i="+imp)
									record.cqr = "https://tbai.prep.gipuzkoa.eus/qr/?id="+record['ctbai']+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
								}
								else
								{
									codqr =  scopes.netticketbaiCRC8.calculate("https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record['ctbai']+"&s="+s+"&nf="+nf+"&i="+imp)
									record.cqr = "https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record['ctbai']+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
								}
								var ruta = "C:\\TMP\\salida.xml";
								f = plugins.file.convertToJSFile(ruta);
								if(f && f.exists())
								{
									var rawData = plugins.file.readFile(ruta);
									record.fichero_respuesta_tbai = rawData;
								}
								databaseManager.saveData(record)
								databaseManager.refreshRecordFromDatabase(forms.FrmFacturasGC.foundset,-1)		
								forms.dlg_ImpresionFacturasTBAIGC.xmltbai = 0
								
							}
							globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
							globals.GCshowInfoDialog("Factura modificada correctamente en Ticketbai", null, null, null, null, null)
						}
						else
						{
							globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
							globals.GCshowErrorDialog("La factura NO se ha modificado correctamente.\n"+resp, null, null, null, null, null)
						}
					}				
				}
			}		
		}
	}
	catch (e) {
		application.output("catched exception");
		application.output(e);
		globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
		globals.CONTAshowErrorDialog(e.toString(),null,'Aceptar',null,null,null)
	}
}

/**
 * Callback method when form is destroyed.
 * 
 * 
 * @param {Number} DEJE
 * @param {String} DSER
 * @param {Number} DNUP
 * @param {Number} HEJE
 * @param {String} HSER
 * @param {Number} HNUP
 * @param {Number} DCLI
 * @param {Number} HCLI
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"7C6F3D11-9767-4C84-9834-DD776EC40950"}
 * @SuppressWarnings(wrongparameters)
 */
function GenerarXMLZuzenduSubsanarTBAI(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
{
	try
	{
		var query = "SELECT ParametrosAplicacion.NºEmpresa,ParametrosAplicacion.Propiedad,"+
	    "ParametrosAplicacion.Empresa,ParametrosAplicacion.CodPostal,"+
	    "ParametrosAplicacion.Direccion,ParametrosAplicacion.Poblacion,"+
	    "ParametrosAplicacion.Provincia,ParametrosAplicacion.CIF,"+
	    "ParametrosAplicacion.Telefono,ParametrosAplicacion.Fax,"+
	    "ParametrosAplicacion.Mail,ParametrosAplicacion.Web,"+
	    "ParametrosAplicacion.Logo,ParametrosAplicacion.Logo2,"+
	    "ParametrosAplicacion.TelAux,ParametrosAplicacion.CtaBancaria,"+
	    "ParametrosAplicacion.Registro,ParametrosAplicacion.Tomo,"+
	    "ParametrosAplicacion.Folio,ParametrosAplicacion.HojaRegistral,"+
	    "ParametrosAplicacion.pais,"+
	    "tbFacturaCabecera.ID,tbFacturaCabecera.eje_cfa,"+
	    "tbFacturaCabecera.ser_cfa,tbFacturaCabecera.nup_cfa,"+
	    "tbFacturaCabecera.fecha_cfa,tbFacturaCabecera.fechcobro_cfa,"+
	    "tbFacturaCabecera.fechconta_cfa,tbFacturaCabecera.clie_cfa,"+
	    "tbFacturaCabecera.cfpa_cfa,tbFacturaCabecera.desccfpa_cfa,"+
	    "tbFacturaCabecera.repr_cfa,tbFacturaCabecera.obse_cfa,"+
	    "tbFacturaCabecera.fenvio,tbFacturaCabecera.situconta,"+
	    "tbFacturaCabecera.situ,tbFacturaCabecera.impbre_cfa,"+
	    "tbFacturaCabecera.depp_cfa,tbFacturaCabecera.pgfi_cfa,"+
	    "tbFacturaCabecera.impbie_cfa,tbFacturaCabecera.piva_cfa,"+
	    "tbFacturaCabecera.cuotaiva_cfa,tbFacturaCabecera.impbie2_cfa,"+
	    "tbFacturaCabecera.piva2_cfa,tbFacturaCabecera.cuotaiva2_cfa,"+
	    "tbFacturaCabecera.impbie3_cfa,tbFacturaCabecera.piva3_cfa,"+
	    "tbFacturaCabecera.cuotaiva3_cfa,tbFacturaCabecera.impnee_cfa,"+
	    "tbFacturaCabecera.gtosfinan_cfa,tbFacturaCabecera.impgtosfinan,"+
	    "tbFacturaCabecera.impre,tbFacturaCabecera.impre2,"+
	    "tbFacturaCabecera.impre3,tbFacturaLinea.ID,tbFacturaLinea.eje_lfa,"+
	    "tbFacturaLinea.ser_lfa,tbFacturaLinea.nup_lfa,tbFacturaLinea.nli_lfa,"+
	    "tbFacturaLinea.nalb_lfa,tbFacturaLinea.lalb_lfa,"+
	    "tbFacturaLinea.ref_lfa,tbFacturaLinea.concep_lfa,"+
	    "tbFacturaLinea.cant1_lfa,tbFacturaLinea.prec_lfa,"+
	    "tbFacturaLinea.unme_lfa,tbFacturaLinea.piva_lfa,"+
	    "tbFacturaLinea.dto_lfa,tbFacturaLinea.impdto_lfa,"+
	    "tbFacturaLinea.clie_lfa,tbFacturaLinea.situ_lfa,"+
	    "tbFacturaLinea.precuni_lfa,tbFacturaLinea.impor_lfa,"+
	    "tbFacturaLinea.importot_lfa,tbFacturaLinea.fecha_lfa,"+
	    "tbFacturaLinea.nprograma_lfa,tbMaestroClientes.ID,"+
	    "tbMaestroClientes.IdCliente,tbMaestroClientes.DescCliente,"+
	    "tbMaestroClientes.Direccion,tbMaestroClientes.Poblacion,"+
	    "tbMaestroClientes.Provincia,tbMaestroClientes.CodPostal,"+
	    "tbMaestroClientes.RazonSocial,tbMaestroClientes.PersContacto,"+
	    "tbMaestroClientes.EmailContacto,tbMaestroClientes.Telf1,"+
	    "tbMaestroClientes.Telf2,tbMaestroClientes.Fax,"+
	    "tbMaestroClientes.CIF,tbMaestroClientes.NumProveedor,"+
	    "tbMaestroClientes.CuentaContable,tbMaestroClientes.IdFormaPago,"+
	    "tbMaestroClientes.TipoIva,tbMaestroClientes.IdMoneda,"+
	    "tbMaestroClientes.DiaPago1,tbMaestroClientes.DiaPago2,tbMaestroClientes.DiaPago3,"+
	    "tbMaestroClientes.Pais,tbMaestroClientes.Observaciones,"+
	    "tbMaestroClientes.CodigoBanco,tbMaestroClientes.CodigoSucursal,"+
	    "tbMaestroClientes.Codigo1DC,tbMaestroClientes.CodigoCuenta,"+
	    "tbMaestroArticulos.RefCliente,tbMaestroformpago.denom_fp,ParametrosAplicacion.bic,tbFacturaCabecera.fechaenviofichero,tbFacturaCabecera.impirpf,tbFacturaCabecera.pirpf "+
	    "FROM tbFacturaCabecera tbFacturaCabecera LEFT JOIN dbo.tbFacturaLinea tbFacturaLinea ON "+
		 "tbFacturaCabecera.eje_cfa = tbFacturaLinea.eje_lfa "+
	    "AND tbFacturaCabecera.nup_cfa = tbFacturaLinea.nup_lfa "+
	    "AND tbFacturaCabecera.ser_cfa = tbFacturaLinea.ser_lfa "+
	    "LEFT JOIN dbo.tbMaestroClientes tbMaestroClientes ON "+
		 "tbFacturaCabecera.clie_cfa = tbMaestroClientes.IdCliente "+
	    "LEFT JOIN dbo.tbMaestroformpago tbMaestroformpago ON "+
		 "tbFacturaCabecera.cfpa_cfa = tbMaestroformpago.codig_fp "+
	    "LEFT JOIN dbo.tbMaestroArticulos tbMaestroArticulos ON "+
		 "tbFacturaLinea.ref_lfa = tbMaestroArticulos.Codigo,"+
	    "dbo.ParametrosAplicacion ParametrosAplicacion "+
	    "WHERE (tbFacturaCabecera.eje_cfa >= "+DEJE+
	    " AND tbFacturaCabecera.eje_cfa <= "+HEJE+") "+
	    "AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
	    "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') "+
	    "AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
	    " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") "+
	    "AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+") "+
	    "ORDER BY tbFacturaLinea.eje_lfa ASC,tbFacturaLinea.ser_lfa ASC,"+
	    "tbFacturaLinea.nup_lfa ASC,tbFacturaLinea.nli_lfa ASC";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null,99999999)
		var rows = dataset.getMaxRowIndex();
		xml = new String();
		htm = new String();
		newxml = new String();
		if(rows > 0)
		{	
				var uuidfactura = dataset.getValue(1,22)
				var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbfacturacabecera')  
				vSet.loadRecords(databaseManager.convertToDataSet([uuidfactura]))  
				var record = vSet.getRecord(vSet.getSelectedIndex())
				datosempresa(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
				var cliente = dataset.getValue(1,29);
				xml = '<?xml version="1.0" encoding="UTF-8"?>';
				application.output('Cabecera')
				Document = <SubsanacionModificacionTicketBAI />
				/*ns = new Namespace('T',"urn:ticketbai:emision")
				Document.addNamespace(ns)							
				
				ns = new Namespace('ds','http://www.w3.org/2000/09/xmldsig#')
				Document.addNamespace(ns)
				
				ns = new Namespace('schemaLocation', 'urn:ticketbai:emision ticketBaiV12.xsd ')
				Document.addNamespace(ns)
				
				ns = new Namespace('xsi','http://www.w3.org/2001/XMLSchema-instance')
				Document.addNamespace(ns)
				*/
				Cabecera = <Cabecera/>
					IDVersion = <IDVersion/>
					IDVersion.appendChild('1.0')
					Accion = <Accion/>
					Accion.appendChild("SUBSANAR")
				Cabecera.appendChild(IDVersion)
				Cabecera.appendChild(Accion)
				Sujetos = <Sujetos/>
					Emisor = <Emisor/>
						NIF = <NIF/>
						NIF.appendChild(gcparametrosaplicacion_to_parametrosaplicacion.cif)
						ApellidosNombreRazonSocial = <ApellidosNombreRazonSocial/>
						ApellidosNombreRazonSocial.appendChild(globals.GCQuitarCaracteresEspeciales(gcparametrosaplicacion_to_parametrosaplicacion.empresa))
					Emisor.appendChild(NIF)
					Emisor.appendChild(ApellidosNombreRazonSocial)
				Sujetos.appendChild(Emisor)
					Destinatarios = <Destinatarios/>
						IDDestinatario = <IDDestinatario/>
							NIF = <NIF/>
							cifempresa = utils.stringRight(cifcliente,9)//cifcliente//forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.cif;
							application.output(cifempresa)
							if(paiscliente && paiscliente == 'ES')
							{
								NIF = <NIF/>
								NIF.appendChild(cifempresa)
							}
							else
							{
								IDOtro = <IDOtro/>
									CodigoPais = <CodigoPais/>
									CodigoPais.appendChild(paiscliente)
									IDType = <IDType/>
									/*02 NIF-IVA.
									  03 Pasaporte
									  04 Documento oficial de identificación expedido por el país o territorio de residencia.
									  05 Certificado de residencia.
									  06 Otro documento probatorio*/
									if(UE.indexOf(paiscliente) != -1) IDType.appendChild('02')
									else IDType.appendChild('04')
									ID = <ID/>
									ID.appendChild(cifcliente)
								IDOtro.appendChild(CodigoPais)
								IDOtro.appendChild(IDType)
								IDOtro.appendChild(ID)
							}
							ApellidosNombreRazonSocial = <ApellidosNombreRazonSocial/>
							razonsocial = globals.GCQuitarCaracteresEspeciales(utils.stringLeft(desccliente,120)) //forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.desccliente;
							ApellidosNombreRazonSocial.appendChild(razonsocial)
							CodigoPostal = <CodigoPostal/>
							codigopostal = codpostalcliente//forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.codpostal;
							CodigoPostal.appendChild(codigopostal)
							Direccion = <Direccion/>
							direccion = globals.GCQuitarCaracteresEspeciales(utils.stringLeft(direccioncliente+ ' '+poblacioncliente+' '+provinciacliente,250))//forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.direccion;
							Direccion.appendChild(direccion)
						if(paiscliente && paiscliente == 'ES') IDDestinatario.appendChild(NIF)
						else IDDestinatario.appendChild(IDOtro)
						IDDestinatario.appendChild(ApellidosNombreRazonSocial)
						IDDestinatario.appendChild(CodigoPostal)
						IDDestinatario.appendChild(Direccion)
					Destinatarios.appendChild(IDDestinatario)
				if(cifempresa && cifempresa != '.' && cifempresa != '*'){
				Sujetos.appendChild(Destinatarios)			
				}
				Factura = <Factura/>
					CabeceraFactura = <CabeceraFactura/>
						SerieFactura = <SerieFactura/>
						var fechafra = dataset.getValue(1,26);
						SerieFactura.appendChild(fechafra.getFullYear())
						NumFactura = <NumFactura/>
						NumFactura.appendChild(dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24))
						FechaExpedicionFactura = <FechaExpedicionFactura/>
						//FechaExpedicionFactura.appendChild(utils.dateFormat(dataset.getValue(1,26),'dd-MM-yyyy'))
						var fechenvfra = record["fechaenviofichero"];
						FechaExpedicionFactura.appendChild(utils.dateFormat(fechenvfra,'dd-MM-yyyy'))
						HoraExpedicionFactura = <HoraExpedicionFactura/>
						HoraExpedicionFactura.appendChild(utils.dateFormat(fechenvfra,'HH:mm:ss'))					
						FacturaSimplificada = <FacturaSimplificada/>
						if(cifcliente && cifcliente != '.' && cifcliente != '*'){
						FacturaSimplificada.appendChild('N')
						}
						else{
						FacturaSimplificada.appendChild('S')
						}
						FacturaEmitidaSustitucionSimplificada = <FacturaEmitidaSustitucionSimplificada/>
						FacturaEmitidaSustitucionSimplificada.appendChild('N')					
					CabeceraFactura.appendChild(SerieFactura)
					CabeceraFactura.appendChild(NumFactura)
					CabeceraFactura.appendChild(FechaExpedicionFactura)
					CabeceraFactura.appendChild(HoraExpedicionFactura)								
					CabeceraFactura.appendChild(FacturaSimplificada)
					CabeceraFactura.appendChild(FacturaEmitidaSustitucionSimplificada)
					
				Factura.appendChild(CabeceraFactura)
				application.output('Lineas')
					var p1 = dataset.getValue(1,41)
					var p2 = dataset.getValue(1,44)
					var p3 = dataset.getValue(1,47)
					var re1 = dataset.getValue(1,52)
					var re2 = dataset.getValue(1,53)
					var re3 = dataset.getValue(1,54)
						DatosFactura = <DatosFactura/>
						FechaOperacion = <FechaOperacion/>
						FechaOperacion.appendChild(utils.dateFormat(dataset.getValue(1,26),'dd-MM-yyyy'))
						DescripcionFactura = <DescripcionFactura/>
						if(dataset.getValue(1,33)) DescripcionFactura.appendChild(globals.GCQuitarCaracteresEspeciales(utils.stringLeft(dataset.getValue(1,33),250)))
						else DescripcionFactura.appendChild(globals.GCQuitarCaracteresEspeciales("FACTURA "+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)))
						DetallesFactura = <DetallesFactura/>
							for(var i=1;i<=rows;i++)
							{
								var c = dataset.getValue(i,64);
								var impuni = dataset.getValue(i,65);
								var implin = dataset.getValue(i,73);
								var imptot = dataset.getValue(i,74);
								var impdto = dataset.getValue(i,69);
								var pivalin = dataset.getValue(i,67);
								var relin = 0;
								var query999 = "select [aplicarre] FROM [tbMaestroClientes] WHERE [idcliente] = "+cliente;
								var dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
								if(dataset999.getValue(1,1) == 1)
								{
									query999 = "select [IvaRE] FROM [tbMaestroTipoIva] WHERE [Factor] = "+pivalin;
									dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
									var trelin = dataset999.getValue(1,1);
									relin = globals.GCROUND(implin*trelin*0.01,2)
									//reimpuni = globals.GCROUND(impuni*trelin*0.01,2)
								}
								
								imptot = imptot + relin;								
								/*if((re1 && re1 != 0)) 
								{
									if(re1){
										var query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
										"WHERE [Factor] = "+p1;
										var dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
										var tre = dataset88.getValue(1,1);
										if(!tre) tre = 0;
									}
								}*/
								//if((c && c != 0) && (impuni && impuni != 0) && (imptot && imptot != 0))
								//{
									IDDetalleFactura = <IDDetalleFactura/>
										DescripcionDetalle =<DescripcionDetalle/>
										if(dataset.getValue(i,63)) DescripcionDetalle.appendChild(globals.GCQuitarCaracteresEspeciales(utils.stringLeft(utils.stringReplace(dataset.getValue(i,63),"\n"," "),250)))
										//else DescripcionDetalle.appendChild(" ");
										else DescripcionDetalle.appendChild(globals.GCQuitarCaracteresEspeciales("Detalle factura "+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)));
										Cantidad = <Cantidad/>
										if(c) Cantidad.appendChild(dataset.getValue(i,64))
										else Cantidad.appendChild(globals.GCROUND(0,2).toFixed(2))	
										ImporteUnitario =<ImporteUnitario/>
										if(impuni) ImporteUnitario.appendChild(globals.GCROUND(dataset.getValue(i,65),2))
										else ImporteUnitario.appendChild(globals.GCROUND(0,2).toFixed(2))	
										Descuento = <Descuento/>
										if(impdto) Descuento.appendChild(globals.GCROUND(impdto,2).toFixed(2))
										else Descuento.appendChild(globals.GCROUND(0,2).toFixed(2))	
										ImporteTotal =<ImporteTotal/>
										//if(imptot) ImporteTotal.appendChild(globals.GCROUND(dataset.getValue(i,74)+relin,2))
										if(imptot) ImporteTotal.appendChild(globals.GCROUND(imptot,2))
										else ImporteTotal.appendChild(globals.GCROUND(0,2).toFixed(2))	
									IDDetalleFactura.appendChild(DescripcionDetalle)
									IDDetalleFactura.appendChild(Cantidad)
									IDDetalleFactura.appendChild(ImporteUnitario)
									IDDetalleFactura.appendChild(Descuento)
									IDDetalleFactura.appendChild(ImporteTotal)
									DetallesFactura.appendChild(IDDetalleFactura)
								//}
							}
							//miro a ver si existe descuento por pronto pago en la totalidad de la factura. Hay que comunicarlo como una linea más
							var query89 = "select depp_cfa,gtosfinan_cfa,pirpf from tbFacturaCabecera "+
							"WHERE (eje_cfa >= "+DEJE+" AND tbFacturaCabecera.eje_cfa <= "+HEJE+") AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
						    "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
						    " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+") "
							var dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
							var porcdtopp = dataset89.getValue(1,1);
							var porcgtofinan = dataset89.getValue(1,2);
							//var porcirpf = dataset89.getValue(1,3);
							
							query89 = "select distinct(piva_lfa),ISNULL(sum(impor_lfa),0) as impor_lfa "+
										"from tbFacturaLinea "+
										"where eje_lfa = "+DEJE+" AND ser_lfa ='"+DSER+"' AND nup_lfa = "+DNUP+
										" group by piva_lfa order by piva_lfa desc"
							dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,9999999)
							var porcivalin1 = dataset89.getValue(1,1);
							var porcivalin2 = dataset89.getValue(2,1);
							var porcivalin3 = dataset89.getValue(3,1);
							var imporlin1 = dataset89.getValue(1,2);
							var imporlin2 = dataset89.getValue(2,2);
							var imporlin3 = dataset89.getValue(3,2);
							var importelineadescuento = 0;
							var importelineadescuento2 = 0;
							var importelineadescuento3 = 0;
							var ivaimportelineadescuento = 0;
							var ivaimportelineadescuento2 = 0;
							var ivaimportelineadescuento3 = 0;
							var importegtosfinan = 0;
							var importereten = 0;
							if(porcdtopp)
							{								
								if(porcivalin1 || porcivalin1 == 0.0)
								{
									//relin = 0;
									importelineadescuento = globals.GCROUND(imporlin1*porcdtopp*0.01,2);
									query999 = "select [aplicarre] FROM [tbMaestroClientes] WHERE [idcliente] = "+cliente;
									dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
									if(dataset999.getValue(1,1) == 1)
									{
										query999 = "select [IvaRE] FROM [tbMaestroTipoIva] WHERE [Factor] = "+porcivalin1;
										dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
										trelin = dataset999.getValue(1,1);
										var relin1 = globals.GCROUND(importelineadescuento*trelin*0.01,2)
									}
									IDDetalleFactura = <IDDetalleFactura/>
									DescripcionDetalle =<DescripcionDetalle/>
									DescripcionDetalle.appendChild("DESCUENTO POR PRONTO PAGO "+porcivalin1+"%")
									Cantidad = <Cantidad/>
									Cantidad.appendChild(1)
									ImporteUnitario =<ImporteUnitario/>
									ImporteUnitario.appendChild("-"+globals.GCROUND(importelineadescuento,2))	
									Descuento = <Descuento/>
									Descuento.appendChild(globals.GCROUND(0,2).toFixed(2))	
									ImporteTotal =<ImporteTotal/>
									//if(relin1) importelineadescuento = globals.GCROUND(importelineadescuento+relin1,2);
									//ivaimportelineadescuento = globals.GCROUND(importelineadescuento*porcivalin1*0.01,2);
									//ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento+ivaimportelineadescuento,2))
									ivaimportelineadescuento = globals.GCROUND(importelineadescuento*porcivalin1*0.01,2);
									if(relin1) importelineadescuento = globals.GCROUND(importelineadescuento+relin1,2);
									ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento+ivaimportelineadescuento,2))
									IDDetalleFactura.appendChild(DescripcionDetalle)
									IDDetalleFactura.appendChild(Cantidad)
									IDDetalleFactura.appendChild(ImporteUnitario)
									IDDetalleFactura.appendChild(Descuento)
									IDDetalleFactura.appendChild(ImporteTotal)
									DetallesFactura.appendChild(IDDetalleFactura)
								}
								if(porcivalin2 || porcivalin2 == 0.0)
								{
									importelineadescuento = globals.GCROUND(imporlin2*porcdtopp*0.01,2);
									query999 = "select [aplicarre] FROM [tbMaestroClientes] WHERE [idcliente] = "+cliente;
									dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
									if(dataset999.getValue(1,1) == 1)
									{
										query999 = "select [IvaRE] FROM [tbMaestroTipoIva] WHERE [Factor] = "+porcivalin1;
										dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
										trelin = dataset999.getValue(1,1);
										var relin2 = globals.GCROUND(importelineadescuento*trelin*0.01,2)
									}
									IDDetalleFactura = <IDDetalleFactura/>
									DescripcionDetalle =<DescripcionDetalle/>
									DescripcionDetalle.appendChild("DESCUENTO POR PRONTO PAGO "+porcivalin2+"%")
									Cantidad = <Cantidad/>
									Cantidad.appendChild(1)
									ImporteUnitario =<ImporteUnitario/>
									importelineadescuento2 = imporlin2*porcdtopp*0.01;
									ImporteUnitario.appendChild("-"+globals.GCROUND(importelineadescuento2,2))	
									Descuento = <Descuento/>
									Descuento.appendChild(globals.GCROUND(0,2).toFixed(2))	
									ImporteTotal =<ImporteTotal/>
									//if(relin2) importelineadescuento = globals.GCROUND(importelineadescuento+relin2,2);
									//ivaimportelineadescuento2 = globals.GCROUND(importelineadescuento2*porcivalin2*0.01,2);
									//ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento2+ivaimportelineadescuento2,2))
									ivaimportelineadescuento = globals.GCROUND(importelineadescuento2*porcivalin2*0.01,2);
									if(relin2) importelineadescuento2 = globals.GCROUND(importelineadescuento2+relin2,2);
									ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento2+ivaimportelineadescuento2,2))
									IDDetalleFactura.appendChild(DescripcionDetalle)
									IDDetalleFactura.appendChild(Cantidad)
									IDDetalleFactura.appendChild(ImporteUnitario)
									IDDetalleFactura.appendChild(Descuento)
									IDDetalleFactura.appendChild(ImporteTotal)
									DetallesFactura.appendChild(IDDetalleFactura)
								}
								if(porcivalin3 || porcivalin3 == 0.0)
								{
									importelineadescuento = globals.GCROUND(imporlin3*porcdtopp*0.01,2);
									query999 = "select [aplicarre] FROM [tbMaestroClientes] WHERE [idcliente] = "+cliente;
									dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
									if(dataset999.getValue(1,1) == 1)
									{
										query999 = "select [IvaRE] FROM [tbMaestroTipoIva] WHERE [Factor] = "+porcivalin1;
										dataset999 = databaseManager.getDataSetByQuery(globals.GCconex, query999, null, 1)
										trelin = dataset999.getValue(1,1);
										var relin3 = globals.GCROUND(importelineadescuento*trelin*0.01,2)
									}
									IDDetalleFactura = <IDDetalleFactura/>
									DescripcionDetalle =<DescripcionDetalle/>
									DescripcionDetalle.appendChild("DESCUENTO POR PRONTO PAGO "+porcivalin3+"%")
									Cantidad = <Cantidad/>
									Cantidad.appendChild(1)
									ImporteUnitario =<ImporteUnitario/>
									importelineadescuento3 = imporlin3*porcdtopp*0.01;
									ImporteUnitario.appendChild("-"+globals.GCROUND(importelineadescuento3,2))	
									Descuento = <Descuento/>
									Descuento.appendChild(globals.GCROUND(0,2).toFixed(2))	
									ImporteTotal =<ImporteTotal/>
									//if(relin3) importelineadescuento3 = globals.GCROUND(importelineadescuento3+relin3,2);
									//ivaimportelineadescuento3 = globals.GCROUND(importelineadescuento3*porcivalin3*0.01,2);
									//ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento3+ivaimportelineadescuento3,2))
									ivaimportelineadescuento3 = globals.GCROUND(importelineadescuento3*porcivalin3*0.01,2);
									if(relin3) importelineadescuento3 = globals.GCROUND(importelineadescuento3+relin3,2);
									ImporteTotal.appendChild("-"+globals.GCROUND(importelineadescuento3+ivaimportelineadescuento3,2))
									IDDetalleFactura.appendChild(DescripcionDetalle)
									IDDetalleFactura.appendChild(Cantidad)
									IDDetalleFactura.appendChild(ImporteUnitario)
									IDDetalleFactura.appendChild(Descuento)
									IDDetalleFactura.appendChild(ImporteTotal)
									DetallesFactura.appendChild(IDDetalleFactura)
								}
							}	
							if(porcgtofinan)
							{
								importegtosfinan = globals.GCROUND((imporlin1 + imporlin2 + imporlin3) * porcgtofinan  * 0.01, 2);
							
								IDDetalleFactura = <IDDetalleFactura/>
								DescripcionDetalle =<DescripcionDetalle/>
								DescripcionDetalle.appendChild("GASTOS FINANCIEROS")
								Cantidad = <Cantidad/>
								Cantidad.appendChild(1)
								ImporteUnitario =<ImporteUnitario/>
								ImporteUnitario.appendChild(importegtosfinan)	
								Descuento = <Descuento/>
								Descuento.appendChild(0)	
								ImporteTotal =<ImporteTotal/>
								ImporteTotal.appendChild(importegtosfinan)
								IDDetalleFactura.appendChild(DescripcionDetalle)
								IDDetalleFactura.appendChild(Cantidad)
								IDDetalleFactura.appendChild(ImporteUnitario)
								IDDetalleFactura.appendChild(Descuento)
								IDDetalleFactura.appendChild(ImporteTotal)
								DetallesFactura.appendChild(IDDetalleFactura)
							}
							var porcirpf = dataset.getValue(1,110)
							var importeirpf = dataset.getValue(1,109)
							if(importeirpf)
							{
							//importereten = "-"+globals.GCROUND((imporlin1 + imporlin2 + imporlin3 /*- ImporDto*/) * porcirpf * -0.01, 2);
							importereten = globals.GCROUND(dataset.getValue(1,109),2).toFixed(2)
							importereten = Math.abs(importereten)
							}
							else importereten = 0;
							/*if(porcirpf)
							{
								importereten = globals.GCROUND(dataset.getValue(1,109),2).toFixed(2)
								IDDetalleFactura = <IDDetalleFactura/>
								DescripcionDetalle =<DescripcionDetalle/>
								DescripcionDetalle.appendChild("RETENCIÓN SOPORTADA "+utils.numberFormat(porcirpf,'#,##0.00')+"%")
								Cantidad = <Cantidad/>
								Cantidad.appendChild(1)
								ImporteUnitario =<ImporteUnitario/>
								ImporteUnitario.appendChild(importereten)	
								Descuento = <Descuento/>
								Descuento.appendChild(0)	
								ImporteTotal =<ImporteTotal/>
								ImporteTotal.appendChild(importereten)
								IDDetalleFactura.appendChild(DescripcionDetalle)
								IDDetalleFactura.appendChild(Cantidad)
								IDDetalleFactura.appendChild(ImporteUnitario)
								IDDetalleFactura.appendChild(Descuento)
								IDDetalleFactura.appendChild(ImporteTotal)
								DetallesFactura.appendChild(IDDetalleFactura)
							}*/
														
							/*if((re1 && re1 != 0) || (re2 && re2 != 0) || (re3 && re3 != 0)) 
							{
								var relin = globals.GCROUND(re1+re2+re3,2);
								IDDetalleFactura = <IDDetalleFactura/>
								DescripcionDetalle =<DescripcionDetalle/>
								DescripcionDetalle.appendChild("RECARGO EQUIVALENCIA")
								Cantidad = <Cantidad/>
								Cantidad.appendChild(1)
								ImporteUnitario =<ImporteUnitario/>
								ImporteUnitario.appendChild(relin)	
								Descuento = <Descuento/>
								Descuento.appendChild(0)	
								ImporteTotal =<ImporteTotal/>
								ImporteTotal.appendChild(relin)
								IDDetalleFactura.appendChild(DescripcionDetalle)
								IDDetalleFactura.appendChild(Cantidad)
								IDDetalleFactura.appendChild(ImporteUnitario)
								IDDetalleFactura.appendChild(Descuento)
								IDDetalleFactura.appendChild(ImporteTotal)
								DetallesFactura.appendChild(IDDetalleFactura)
							}*/
							
						ImporteTotalFactura = <ImporteTotalFactura/>
						imp = 0;
						imp += dataset.getValue(1,49)
						imp += importereten;
						ImporteTotalFactura.appendChild(globals.GCROUND(imp,2))
						//ImporteTotalFactura.appendChild(dataset.getValue(1,49))					
						RetencionSoportada = <RetencionSoportada/>
						//if(record["impirpf"]) RetencionSoportada.appendChild(globals.GCROUND(record["impirpf"],2).toFixed(2))
						if(importereten && importereten != 0) RetencionSoportada.appendChild(importereten)
						else RetencionSoportada.appendChild(0)
						/*El campo de <BaseImponibleACoste> solamente podrá informarse cuando
						alguna de las claves de <ClaveRegimenIvaOpTrascendencia> es 06 (Régimen
						especial grupo de entidades de IVA)*/
						//BaseImponibleACoste = <BaseImponibleACoste/>
						//BaseImponibleACoste.appendChild(0)
						
						Claves = <Claves/>
							IDClave = <IDClave/>
								/*01 Operación de régimen general y cualquier otro supuesto que no esté recogido en los siguientes valores.
								  02 Exportación.
								  03 Operaciones a las que se aplique el régimen especial de bienes usados, objetos de arte, antigüedades y objetos de colección.
								  04 Régimen especial del oro de inversión.
								  05 Régimen especial de las agencias de viajes.
								  06 Régimen especial grupo de entidades en IVA (Nivel Avanzado).
								  07 Régimen especial del criterio de caja.
								  08 Operaciones sujetas al IPSI/IGIC (Impuesto sobre la Producción, los Servicios y la Importación / Impuesto General Indirecto Canario).
								  09 Facturación de las prestaciones de servicios de agencias de viaje que actúan como mediadoras en nombre y por cuenta ajena (disposición adicional 3ª del Reglamento de Facturación).
								  10 Cobros por cuenta de terceros de honorarios profesionales o de derechos derivados de la propiedad industrial, de autor u otros por cuenta de sus socios, socias, asociados, asociadas, colegiados o colegiadas efectuados por sociedades, asociaciones, colegios profesionales u otras entidades querealicen estas funciones de cobro.
								  11 Operaciones de arrendamiento de local de negocio sujetas a retención.
								  12 Operaciones de arrendamiento de local de negocio no sujetas a retención.
								  13 Operaciones de arrendamiento de local de negocio sujetas y no sujetas a retención.
								  14 Factura con  IVA  pendiente  de  devengo  en  certificaciones  de  obra  cuyo  destinatario  sea una Administración Pública.
								  15 Factura con IVA pendiente de devengo en operaciones de tracto sucesivo.
								  317Operación acogida a alguno de los regímenes previstos en el Capítulo XI del Título IX (OSS e IOSS)
								  419Operaciones de actividades incluidas en el Régimen Especial de Agricultura, Ganadería y Pesca (REAGYP)
								  51 Operaciones en recargo de equivalencia.*/
								ClaveRegimenIvaOpTrascendencia = <ClaveRegimenIvaOpTrascendencia/>
								if(paiscliente && paiscliente == 'ES') 
								{
									if(codpostalcliente && (utils.stringLeft(codpostalcliente,2) == '35' ||
									utils.stringLeft(codpostalcliente,2) == '38'||
									utils.stringLeft(codpostalcliente,2) == '51'||
									utils.stringLeft(codpostalcliente,2) == '52')) ClaveRegimenIvaOpTrascendencia.appendChild('08')
									//else if(re1 && re1 != 0) ClaveRegimenIvaOpTrascendencia.appendChild('51')
									else if(porcirpf && porcirpf == 19) ClaveRegimenIvaOpTrascendencia.appendChild('11')
									else ClaveRegimenIvaOpTrascendencia.appendChild('01')
								}
								else ClaveRegimenIvaOpTrascendencia.appendChild('02')
							IDClave.appendChild(ClaveRegimenIvaOpTrascendencia)
						Claves.appendChild(IDClave)
					DatosFactura.appendChild(FechaOperacion)
					DatosFactura.appendChild(DescripcionFactura)
					DatosFactura.appendChild(DetallesFactura)
					DatosFactura.appendChild(ImporteTotalFactura)
					if(importereten && importereten != 0) DatosFactura.appendChild(RetencionSoportada)
					//DatosFactura.appendChild(BaseImponibleACoste)
					DatosFactura.appendChild(Claves)
					Factura.appendChild(DatosFactura)
					TipoDesglose = <TipoDesglose/>
					if(paiscliente && paiscliente == 'ES')
					{	
						DesgloseFactura = <DesgloseFactura/>
						/*var p1 = dataset.getValue(1,41)
						var p2 = dataset.getValue(1,44)
						var p3 = dataset.getValue(1,47)
						var re1 = dataset.getValue(1,52)
						var re2 = dataset.getValue(1,53)
						var re3 = dataset.getValue(1,54)*/
						var sujetaexentaiva = forms.FrmFacturasGC.sujetaexentaivasii;
						if(!sujetaexentaiva) sujetaexentaiva = 'NE';
						if(sujetaexentaiva == 'NE')
						{
							//if((p1 != null && p1 > 0) ||
							//(p2 != null && p2 > 0) ||
							//(p3 != null && p3 > 0))
							//{
								query89 = "select ISNULL(impbie_cfa,0)+ISNULL(impbie2_cfa,0)+ISNULL(impbie3_cfa,0) AS totalbi \
											from tbFacturaCabecera where eje_cfa = "+DEJE+" AND ser_cfa ='"+DSER+"' AND nup_cfa = "+DNUP
								dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,9999999)
								var totalBI = dataset89.getValue(1,1)
									Sujeta = <Sujeta/>
										NoExenta = <NoExenta/>
											DetalleNoExenta = <DetalleNoExenta/>
												//S1 Sin inversión del sujeto pasivo.
												//S2 Con inversión del sujeto pasivo.
												TipoNoExenta = <TipoNoExenta/>
												TipoNoExenta.appendChild('S1')
												DesgloseIVA = <DesgloseIVA/>
													//query89 = "select piva_cfa,piva2_cfa,piva3_cfa,impbie_cfa,impbie2_cfa,impbie3_cfa,cuotaiva_cfa,cuotaiva2_cfa,cuotaiva3_cfa "+
													//"from tbFacturaCabecera "+
													//"where eje_cfa = "+DEJE+" AND ser_cfa ='"+DSER+"' AND nup_cfa = "+DNUP;
													//dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
													DetalleIVA = <DetalleIVA/>
														BaseImponible = <BaseImponible/>
														//BaseImponible.appendChild(dataset89.getValue(1,4))
														//BaseImponible.appendChild(globals.GCROUND(imporlin1-importelineadescuento,2))
														BaseImponible.appendChild(globals.GCROUND(totalBI,2))
														TipoImpositivo = <TipoImpositivo/>
														//TipoImpositivo.appendChild(dataset89.getValue(1,1))
														TipoImpositivo.appendChild(porcivalin1)
														CuotaImpuesto = <CuotaImpuesto/>
														//CuotaImpuesto.appendChild(dataset89.getValue(1,7))
														//CuotaImpuesto.appendChild(globals.GCROUND((imporlin1-importelineadescuento)*porcivalin1*0.01,2))
														CuotaImpuesto.appendChild(globals.GCROUND(totalBI*porcivalin1*0.01,2))
													DetalleIVA.appendChild(BaseImponible)
													DetalleIVA.appendChild(TipoImpositivo)
													DetalleIVA.appendChild(CuotaImpuesto)
													if((re1 && re1 != 0)) 
													{
														if(re1){
															var query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
															"WHERE [Factor] = "+p1;
															var dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
															var tre = dataset88.getValue(1,1);
															if(!tre) tre = 0;
															TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
															TipoRecargoEquivalencia.appendChild(tre)
															CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
															CuotaRecargoEquivalencia.appendChild(re1)
															//OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
															//OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')
															DetalleIVA.appendChild(TipoRecargoEquivalencia)
															DetalleIVA.appendChild(CuotaRecargoEquivalencia)
															//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
														}
													}
												DesgloseIVA.appendChild(DetalleIVA)
													//if(dataset89.getValue(1,2))
													//if(porcivalin2)
													if(imporlin2)
													{
														DetalleIVA = <DetalleIVA/>
															BaseImponible = <BaseImponible/>
															//BaseImponible.appendChild(dataset89.getValue(1,5))
															BaseImponible.appendChild(globals.GCROUND(imporlin2-importelineadescuento2,2))
															TipoImpositivo = <TipoImpositivo/>
															//TipoImpositivo.appendChild(dataset89.getValue(1,2))
															TipoImpositivo.appendChild(porcivalin2)
															CuotaImpuesto = <CuotaImpuesto/>
															//CuotaImpuesto.appendChild(dataset89.getValue(1,8))
															CuotaImpuesto.appendChild(globals.GCROUND((imporlin2-importelineadescuento2)*porcivalin2*0.01,2))
														DetalleIVA.appendChild(BaseImponible)
														DetalleIVA.appendChild(TipoImpositivo)
														DetalleIVA.appendChild(CuotaImpuesto)
														if((re2 && re2 != 0)) 
														{	if(re2){
																query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																"WHERE [Factor] = "+p2;
																dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																tre = dataset88.getValue(1,1);
																if(!tre) tre = 0;
																TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																TipoRecargoEquivalencia.appendChild(tre)
																CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																CuotaRecargoEquivalencia.appendChild(re2)
																//OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
																//OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')
																DetalleIVA.appendChild(TipoRecargoEquivalencia)
																DetalleIVA.appendChild(CuotaRecargoEquivalencia)
																//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
															}
														}
														
													DesgloseIVA.appendChild(DetalleIVA)
													}
													//if(dataset89.getValue(1,3))
													//if(porcivalin3)
													if(imporlin3)
													{
														DetalleIVA = <DetalleIVA/>
															BaseImponible = <BaseImponible/>
															//BaseImponible.appendChild(dataset89.getValue(1,6))
															BaseImponible.appendChild(globals.GCROUND(imporlin3-importelineadescuento3,2))
															TipoImpositivo = <TipoImpositivo/>
															//TipoImpositivo.appendChild(dataset89.getValue(1,3))
															TipoImpositivo.appendChild(0)
															CuotaImpuesto = <CuotaImpuesto/>
															//CuotaImpuesto.appendChild(dataset89.getValue(1,9))
															CuotaImpuesto.appendChild(globals.GCROUND((imporlin3-importelineadescuento3)*porcivalin3*0.01,2))
														DetalleIVA.appendChild(BaseImponible)
														DetalleIVA.appendChild(TipoImpositivo)
														DetalleIVA.appendChild(CuotaImpuesto)
														if((re3 && re3 != 0)) 
														{	if(re3){
																query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																"WHERE [Factor] = "+p3;
																dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																tre = dataset88.getValue(1,1);
																if(!tre) tre = 0;
																TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																TipoRecargoEquivalencia.appendChild(tre)
																CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																CuotaRecargoEquivalencia.appendChild(re3)
																//OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
																//OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')
																DetalleIVA.appendChild(TipoRecargoEquivalencia)
																DetalleIVA.appendChild(CuotaRecargoEquivalencia)
																//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
															}
														}
														if((re1 && re1 != 0) || (re2 && re2 != 0) || (re3 && re3 != 0)) 
														{	
															OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
															OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('S')													
															DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
														}
													DesgloseIVA.appendChild(DetalleIVA)
													}
													
													
													
													/*if((re1 && re1 != 0) || (re2 && re2 != 0) || (re3 && re3 != 0)) 
													{
															if(re1){
																var query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																"WHERE [Factor] = "+p1;
																var dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																var tre = dataset88.getValue(1,1);
																if(!tre) tre = 0;
																TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																TipoRecargoEquivalencia.appendChild(tre)
																CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																CuotaRecargoEquivalencia.appendChild(re1)
																DetalleIVA.appendChild(TipoRecargoEquivalencia)
																DetalleIVA.appendChild(CuotaRecargoEquivalencia)
															DesgloseIVA.appendChild(DetalleIVA)
															}
															if(re2){
																query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																"WHERE [Factor] = "+p2;
																dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																tre = dataset88.getValue(1,1);
																if(!tre) tre = 0;
																TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																TipoRecargoEquivalencia.appendChild(tre)
																CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																CuotaRecargoEquivalencia.appendChild(re2)
																DetalleIVA.appendChild(TipoRecargoEquivalencia)
																DetalleIVA.appendChild(CuotaRecargoEquivalencia)
															}
															if(re3){
																query88 = "select [IvaRE] FROM [tbMaestroTipoIva] "+
																"WHERE [Factor] = "+p3;
																dataset88 = databaseManager.getDataSetByQuery(globals.GCconex, query88, null, 1)
																tre = dataset88.getValue(1,1);
																if(!tre) tre = 0;
																TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
																TipoRecargoEquivalencia.appendChild(tre)
																CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
																CuotaRecargoEquivalencia.appendChild(re3)
																DetalleIVA.appendChild(TipoRecargoEquivalencia)
																DetalleIVA.appendChild(CuotaRecargoEquivalencia)
															}
															OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
															OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('S')													
														DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
													}*/	
												//DesgloseIVA.appendChild(DetalleIVA)
											DetalleNoExenta.appendChild(TipoNoExenta)
											DetalleNoExenta.appendChild(DesgloseIVA)
										NoExenta.appendChild(DetalleNoExenta)
									//Sujeta.appendChild(NoExenta)
									//DesgloseFactura.appendChild(Sujeta)
									
									if(porcgtofinan && importegtosfinan && importegtosfinan != 0)
									{
										/*NoSujeta =<NoSujeta/>
											DetalleNoSujeta = <DetalleNoSujeta/>
												Causa = <Causa/>
												Causa.appendChild('OT')
												Importe = <Importe/>
												Importe.appendChild(importegtosfinan)
											DetalleNoSujeta.appendChild(Causa)
											DetalleNoSujeta.appendChild(Importe)
										NoSujeta.appendChild(DetalleNoSujeta)
									DesgloseFactura.appendChild(NoSujeta)*/														
										Sujeta =<Sujeta/>
										Exenta = <Exenta/>
											DetalleExenta = <DetalleExenta/>
												CausaExencion = <CausaExencion/>	
												/* E1 Exenta por el artículo 20 de la Ley del IVA
												 * E2 Exenta por el artículo 21 de la Ley del IVA
												 * E3 Exenta por el artículo 22 de la Ley del IVA
												 * E4 Exenta por el artículo 23 y 24 de la Ley del IVA
												 * E5 Exenta por el artículo 25 de la Ley del IVA
												 * E6 Exenta por otra causa
												 **/
												CausaExencion.appendChild('E1')
												BaseImponible = <BaseImponible/>									
												BaseImponible.appendChild(importegtosfinan)														
											DetalleExenta.appendChild(CausaExencion)
											DetalleExenta.appendChild(BaseImponible)
										Exenta.appendChild(DetalleExenta)
									Sujeta.appendChild(Exenta)
									Sujeta.appendChild(NoExenta)
								DesgloseFactura.appendChild(Sujeta)
								}
								else
								{
									Sujeta.appendChild(NoExenta)
								DesgloseFactura.appendChild(Sujeta)
								}
								/*if(porcirpf && importereten && importereten != 0)
									{
										NoSujeta =<NoSujeta/>
											DetalleNoSujeta = <DetalleNoSujeta/>
												Causa = <Causa/>
												Causa.appendChild('OT')
												Importe = <Importe/>
												Importe.appendChild(importereten)
											DetalleNoSujeta.appendChild(Causa)
											DetalleNoSujeta.appendChild(Importe)
										NoSujeta.appendChild(DetalleNoSujeta)
									DesgloseFactura.appendChild(NoSujeta)
			
									}*/
							//}
						}
						else if(sujetaexentaiva == 'NS')
						{
							if((p1 == 0) ||
							(p2 == 0) ||
							(p3 == 0))
							{
								
								var bi1 = dataset.getValue(1,40)
								if(!bi1) bi1 = 0;
								//var cuota1 = dataset.getValue(1,42)
								
								var bi2 = dataset.getValue(1,43)
								if(!bi2) bi2 = 0;
								//var cuota2 = dataset.getValue(1,45)
								
								var bi3 = dataset.getValue(1,46)
								if(!bi3) bi3 = 0;
								//var cuota3 = dataset.getValue(1,48)
								
								NoSujeta =<NoSujeta/>
									DetalleNoSujeta = <DetalleNoSujeta/>
										Causa = <Causa/>
										Causa.appendChild('OT')
										Importe = <Importe/>
										if(dataset.getValue(1,41) == 0)	Importe.appendChild(bi1)
										else if(dataset.getValue(1,44) == 0)	Importe.appendChild(bi2)
										else if(dataset.getValue(1,47) == 0)	Importe.appendChild(bi3)
									DetalleNoSujeta.appendChild(Causa)
									DetalleNoSujeta.appendChild(Importe)
									NoSujeta.appendChild(DetalleNoSujeta)
								DesgloseFactura.appendChild(NoSujeta)
							}
						}
						else if(sujetaexentaiva == 'E')
						{
							if((p1 == 0) ||
							(p2 == 0) ||
							(p3 == 0))
							{
								bi1 = dataset.getValue(1,40)
								if(!bi1) bi1 = 0;
								//cuota1 = dataset.getValue(1,42)
								
								bi2 = dataset.getValue(1,43)
								if(!bi2) bi2 = 0;
								//cuota2 = dataset.getValue(1,45)
								
								bi3 = dataset.getValue(1,46)
								if(!bi3) bi3 = 0;
								//cuota3 = dataset.getValue(1,48)
								
								Sujeta =<Sujeta/>
									Exenta = <Exenta/>
										DetalleExenta = <DetalleExenta/>
											CausaExencion = <CausaExencion/>
											/* E1 Exenta por el artículo 20 de la Ley del IVA
											 * E2 Exenta por el artículo 21 de la Ley del IVA
											 * E3 Exenta por el artículo 22 de la Ley del IVA
											 * E4 Exenta por el artículo 23 y 24 de la Ley del IVA
											 * E5 Exenta por el artículo 25 de la Ley del IVA
											 * E6 Exenta por otra causa
											 **/
											CausaExencion.appendChild('E6')
											BaseImponible = <BaseImponible/>									
											if(dataset.getValue(1,41) == 0) BaseImponible.appendChild(bi1)
											if(dataset.getValue(1,44) == 0)	BaseImponible.appendChild(bi2)
											if(dataset.getValue(1,47) == 0) BaseImponible.appendChild(bi3)
											
										DetalleExenta.appendChild(CausaExencion)
										DetalleExenta.appendChild(BaseImponible)
									Exenta.appendChild(DetalleExenta)
								Sujeta.appendChild(Exenta)
							DesgloseFactura.appendChild(Sujeta)
							}
						}
						
					TipoDesglose.appendChild(DesgloseFactura)
					//if(paiscliente && paiscliente == 'ES') Factura.appendChild(DatosFactura)	
					if(paiscliente && paiscliente == 'ES') Factura.appendChild(TipoDesglose)
					}
					else
					{
						DesgloseTipoOperacion = <DesgloseTipoOperacion/>
						/*if(forms.FrmFacturasGC.tipooperacionsii == 'E')
						{
							PrestacionServicios = <PrestacionServicios/>
							Sujeta = <Sujeta/>
							if(forms.FrmFacturasGC.sujetaexentaivasii == 'E' ||
							forms.FrmFacturasGC.sujetaexentaivasii == 'NS')
							{
								Exenta = <Exenta/>
								DetalleExenta = <DetalleExenta/>
							}
							else //if(forms.FrmFacturasGC.sujetaexentaivasii == 'NE')
							{
								NoExenta = <NoExenta/>
									DetalleNoExenta = <DetalleNoExenta/>
										TipoNoExenta = <TipoNoExenta/>
										//S1 Sin inversión del sujeto pasivo.
										//S2 Con inversión del sujeto pasivo.
										TipoNoExenta.appendChild('S1')
										DesgloseIVA = <DesgloseIVA/>
											//query89 = "select piva_cfa,piva2_cfa,piva3_cfa,impbie_cfa,impbie2_cfa,impbie3_cfa,cuotaiva_cfa,cuotaiva2_cfa,cuotaiva3_cfa "+
											//"from tbFacturaCabecera "+
											//"where eje_cfa = "+DEJE+" AND ser_cfa ='"+DSER+"' AND nup_cfa = "+DNUP;
											//dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
											DetalleIVA = <DetalleIVA/>
												BaseImponible = <BaseImponible/>
												//BaseImponible.appendChild(dataset89.getValue(1,4))
												BaseImponible.appendChild(globals.GCROUND(imporlin1-importelineadescuento,2))
												TipoImpositivo = <TipoImpositivo/>
												TipoImpositivo.appendChild(porcivalin1)
												CuotaImpuesto = <CuotaImpuesto/>
												CuotaImpuesto.appendChild(globals.GCROUND((imporlin1-importelineadescuento)*porcivalin1*0.01,2))
												//TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
												//TipoRecargoEquivalencia.appendChild(porcre)
												//CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
												//CuotaRecargoEquivalencia.appendChild(cuotare)
												//OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
												//OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')
											DetalleIVA.appendChild(BaseImponible)
											//DetalleIVA.appendChild(TipoImpositivo)
											//DetalleIVA.appendChild(CuotaImpuesto)
											//DetalleIVA.appendChild(TipoRecargoEquivalencia)
											//DetalleIVA.appendChild(CuotaRecargoEquivalencia)
											//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
										DesgloseIVA.appendChild(DetalleIVA)												
									DetalleNoExenta.appendChild(TipoNoExenta)
									DetalleNoExenta.appendChild(DesgloseIVA)
								NoExenta.appendChild(DetalleNoExenta)
							Sujeta.appendChild(NoExenta)
							PrestacionServicios.appendChild(Sujeta)
							DesgloseTipoOperacion.appendChild(PrestacionServicios)
							}
						}
						else
						{*/
							Entrega = <Entrega/>
								Sujeta = <Sujeta/>
								if(forms.FrmFacturasGC.sujetaexentaivasii == 'E' ||
								forms.FrmFacturasGC.sujetaexentaivasii == 'NS')
								{
									Exenta = <Exenta/>
										DetalleExenta = <DetalleExenta/>
											CausaExencion = <CausaExencion/>
											 /*E1 Exenta por el artículo 20 de la Ley del IVA
											 * E2 Exenta por el artículo 21 de la Ley del IVA
											 * E3 Exenta por el artículo 22 de la Ley del IVA
											 * E4 Exenta por el artículo 23 y 24 de la Ley del IVA
											 * E5 Exenta por el artículo 25 de la Ley del IVA
											 * E6 Exenta por otra causa
											 */
											 CausaExencion.appendChild('E6')
											 BaseImponible = <BaseImponible/>
											 BaseImponible.appendChild(globals.GCROUND(imporlin1-importelineadescuento,2))
										DetalleExenta.appendChild(CausaExencion)	
										DetalleExenta.appendChild(BaseImponible)
									Exenta.appendChild(DetalleExenta)
								Sujeta.appendChild(Exenta)
							Entrega.appendChild(Sujeta)
							DesgloseTipoOperacion.appendChild(Entrega)	
								}
								else 
								{
									NoExenta = <NoExenta/>
										DetalleNoExenta = <DetalleNoExenta/>
											TipoNoExenta = <TipoNoExenta/>
											//S1 Sin inversión del sujeto pasivo.
											//S2 Con inversión del sujeto pasivo.
											TipoNoExenta.appendChild('S1')
											DesgloseIVA = <DesgloseIVA/>
												//query89 = "select piva_cfa,piva2_cfa,piva3_cfa,impbie_cfa,impbie2_cfa,impbie3_cfa,cuotaiva_cfa,cuotaiva2_cfa,cuotaiva3_cfa "+
												//"from tbFacturaCabecera "+
												//"where eje_cfa = "+DEJE+" AND ser_cfa ='"+DSER+"' AND nup_cfa = "+DNUP;
												//dataset89 = databaseManager.getDataSetByQuery(globals.GCconex, query89, null,1)
												DetalleIVA = <DetalleIVA/>
													BaseImponible = <BaseImponible/>
													//BaseImponible.appendChild(dataset89.getValue(1,4))
													BaseImponible.appendChild(globals.GCROUND(imporlin1-importelineadescuento,2))
													TipoImpositivo = <TipoImpositivo/>
													TipoImpositivo.appendChild(porcivalin1)
													CuotaImpuesto = <CuotaImpuesto/>
													CuotaImpuesto.appendChild(globals.GCROUND((imporlin1-importelineadescuento)*porcivalin1*0.01,2))
													/*TipoRecargoEquivalencia = <TipoRecargoEquivalencia/>
													TipoRecargoEquivalencia.appendChild(porcre)
													CuotaRecargoEquivalencia = <CuotaRecargoEquivalencia/>
													CuotaRecargoEquivalencia.appendChild(cuotare)
													OperacionEnRecargoDeEquivalenciaORegimenSimplificado = <OperacionEnRecargoDeEquivalenciaORegimenSimplificado/>
													OperacionEnRecargoDeEquivalenciaORegimenSimplificado.appendChild('N')*/
												DetalleIVA.appendChild(BaseImponible)
												//DetalleIVA.appendChild(TipoImpositivo)
												//DetalleIVA.appendChild(CuotaImpuesto)
												//DetalleIVA.appendChild(TipoRecargoEquivalencia)
												//DetalleIVA.appendChild(CuotaRecargoEquivalencia)
												//DetalleIVA.appendChild(OperacionEnRecargoDeEquivalenciaORegimenSimplificado)
											DesgloseIVA.appendChild(DetalleIVA)												
										DetalleNoExenta.appendChild(TipoNoExenta)
										DetalleNoExenta.appendChild(DesgloseIVA)
									NoExenta.appendChild(DetalleNoExenta)
								Sujeta.appendChild(NoExenta)
							Entrega.appendChild(Sujeta)
							DesgloseTipoOperacion.appendChild(Entrega)
								}
						//}
						TipoDesglose.appendChild(DesgloseTipoOperacion)
						Factura.appendChild(TipoDesglose)
					}
						
					//TipoDesglose.appendChild(DesgloseFactura)
				//Factura.appendChild(DatosFactura)	
				//Factura.appendChild(TipoDesglose)
				application.output('Huella')
				
			HuellaTBAI = <HuellaTBAI/>	
			Software = <Software/>
				LicenciaTBAI = <LicenciaTBAI/>
				if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0)
				{
					if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){
						LicenciaTBAI.appendChild('TBAIGIPRE00000000017')// ENTORNO PRUEBAS GIPUZKOA
					}
					else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
						LicenciaTBAI.appendChild('TBAIGIPRE00000000017')// ENTORNO PRUEBAS VIZCAYA
					}
					else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
						LicenciaTBAI.appendChild('TBAIARbljlFjMdb00711')// ENTORNO PRUEBAS ARABA
					}
					else {
						LicenciaTBAI.appendChild('TBAIGIPRE00000000017')// ENTORNO PRUEBAS GIPUZKOA
					}
				}
				else
				{
					LicenciaTBAI.appendChild('TBAIGI84FAD45BA4608A')// ENTORNO REAL
				}
				EntidadDesarrolladora =<EntidadDesarrolladora/>
					NIF = <NIF/>
					NIF.appendChild('A20170254')
				EntidadDesarrolladora.appendChild(NIF)
				Nombre = <Nombre/>
				Nombre.appendChild('ERP_AG')
				Version = <Version/>
				if(gcparametrosaplicacion_to_parametrosaplicacion.empresa) Version.appendChild(new Date().getFullYear()+'-'+utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.empresa,14));	
				/*if(globals.GCconex == 'conexiongestioncomercialag') Version.appendChild(new Date().getFullYear()+'-AG');	
				else if(globals.GCconex == 'conexiongestionmlegazpipruebas') Version.appendChild(new Date().getFullYear()+'-MLEGAZPI');	
				else if(globals.GCconex == 'conexiongestiontmendizabalpruebas') Version.appendChild(new Date().getFullYear()+'-TMENDIZABAL');	
				else if(globals.GCconex == 'conexiongestionolabemarpruebas') Version.appendChild(new Date().getFullYear()+'-OLABEMAR');	
				else if(globals.GCconex == 'conexiongestioncomercialagdemo') Version.appendChild(new Date().getFullYear()+'-DEMO');	
				else if(globals.GCconex == 'conexiongestioncomercialagdemo2') Version.appendChild(new Date().getFullYear()+'-DEMO2');	
				else if(globals.GCconex == 'conexiongestionzusipruebas') Version.appendChild(new Date().getFullYear()+'-ZUSI');*/	
				else Version.appendChild(new Date().getFullYear())
			Software.appendChild(LicenciaTBAI)
			Software.appendChild(EntidadDesarrolladora)
			Software.appendChild(Nombre)
			Software.appendChild(Version)
			HuellaTBAI.appendChild(Software)
			//Datos del dispositivo desde el que se emite la factura
				NumSerieDispositivo = <NumSerieDispositivo/>
				var macaddress = plugins.UserManager.Client().macAddress;				
					macaddress = forms.dlg_ImpresionFacturasTBAIGC.macaddress;
				NumSerieDispositivo.appendChild(macaddress)
			HuellaTBAI.appendChild(NumSerieDispositivo)
			SignatureValueFirmaFactura = <SignatureValueFirmaFactura/>
			SignatureValueFirmaFactura.appendChild(record["firmafactura"])
			
			Document.appendChild(Cabecera)
			Document.appendChild(Sujetos)
			Document.appendChild(Factura)
			Document.appendChild(HuellaTBAI)
			Document.appendChild(SignatureValueFirmaFactura)
				
			
			xml += Document
			//var newxml = xml.toString().replace(' xmlns=""','')
			newxml = utils.stringReplace(xml.toString(),'<SubsanacionModificacionTicketBAI','<ns2:SubsanacionModificacionTicketBAI')
			newxml = utils.stringReplace(newxml,'</SubsanacionModificacionTicketBAI>','</ns2:SubsanacionModificacionTicketBAI>')
			newxml = utils.stringReplace(newxml,'<ns2:SubsanacionModificacionTicketBAI>','<ns2:SubsanacionModificacionTicketBAI  xmlns:ns2="urn:ticketbai:zuzendu-alta">')
			newxml = utils.stringReplace(newxml,'<Sujetos>','<Sujetos  xmlns="">')
			newxml = utils.stringReplace(newxml,'<HuellaTBAI>','<HuellaTBAI  xmlns="">')
			
			//newxml = utils.stringReplace(newxml,' xmlns=""','')
			//var xml2 = new XML(newxml)
			application.output(newxml);
					
					
			/*var jsFile = plugins.file.createTempFile('SEPA','.xml');
					
			var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
			if (!success) application.output('Could not write file.');
			//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ) 
			//{
				plugins.file.streamFilesToServer(jsFile)
				plugins.file.openFile(jsFile,"_blank",application/xml)
			/*}
			else 
			{
				plugins.file.streamFilesToServer(jsFile,doImportFile)
			}*/
		
		
			htm += newxml
			
			if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{
				var folder = plugins.file.convertToJSFile("c:\\tmp");
				var b = plugins.file.createFolder(folder)
				if (b == true) application.output("El directorio c:\\tmp se ha creado correctamente o ya existía.");
				/*
				var js = plugins.file.showFileSaveDialog('TBAI'+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)+'.xml', 'Selecciona localización para salvar el fichero');
				if (!js) return;			
							
					// Write the file in the selected location
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
				*/
				var js = "c:\\tmp\\SUBSANARTBAI"+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)+'.xml';
				var f = plugins.file.convertToJSFile(js);
				if(f && f.exists()) f.deleteFile()
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
				
				var js2 = "c:\\tmp\\fentrada.xml";
				var f2 = plugins.file.convertToJSFile(js2);
				if(f2 && f2.exists()) f2.deleteFile()
				plugins.file.writeTXTFile(js2, htm, 'UTF8', 'application/xml');
				
				var rutaficherosigned =  js;
				/*
				//is the full path of the program to be executed.
				
				var rutabat = "c:\\Servoy\\Comando_Autofirma_Servoy.bat";
				var f = plugins.file.convertToJSFile(rutabat);
				*/
				//var hfolder = plugins.file.getHomeFolder()+"\\.servoy\\";
				//var rutabat = hfolder+"afirma_bat.exe";
				//var rutabat = hfolder+"Comando_Autofirma_Servoy.bat";
				
				if(f && f.exists())
				{
					//var rutaficherosigned = "c:\\tmp\\ANULATBAI"+dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24)+"_firma.xml";//"_firma.xsig";
					//f = plugins.file.convertToJSFile(rutaficherosigned);				
					//if(f && f.exists()) f.deleteFile()
					
					var ficherosalida = "c:\\tmp\\fsalida.xml";				
					f2 = plugins.file.convertToJSFile(ficherosalida);				
					if(f2 && f2.exists()) f2.deleteFile()
					
					/*var str = application.executeProgram(rutabat,[js, rutaficherosigned]);
					
					
					
					if(!str || str == '') {
						globals.GCshowErrorDialog("La factura NO se ha firmado digitalmente de manera correcta.\n"+resp, null, null, null, null, null)
					}
					application.output(str)
					*/
					application.output(rutaficherosigned)		
					
					f = plugins.file.convertToJSFile(rutaficherosigned);
					if(f && f.exists())
					{
						f = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml");
						
						if(f && f.exists()) f.deleteFile()
						plugins.file.copyFile(rutaficherosigned,"C:\\tmp\\ficheroenviocurl.xml")
						
						//leo el fichero firmado
						var texto = new Array();
				    
						 var _oFR = new Packages.java.io.FileInputStream(rutaficherosigned),
					     _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
					     _oBR = new Packages.java.io.BufferedReader(_oIR),
					     z = 0;
						 while ((texto[z] = _oBR.readLine()) != null) 
						 {
					         //texto[i] = _oBR.readLine();
					         z++;            
					     }
					     _oBR.close();
					     
					     
					     //macaddress = forms.dlg_ImpresionFacturasTBAIGC.macaddress;
					   
					     
						//ENVIO EL XML AL SISTEMA TICKETBAI
						//https://tbai-z.egoitza.gipuzkoa.eus/sarrerak/zuzendu-alta //entorno real
						//https://tbai-z.prep.gipuzkoa.eus/sarrerak/zuzendu-alta    //entorno pruebas
						var resp = envioTBAI2_modificar(rutaficherosigned)
						application.output(resp)
						if(utils.stringLeft(resp,2) == '00')
						{
							texto = new Array();
					    
							 _oFR = new Packages.java.io.FileInputStream("C:\\TMP\\salida.xml"),
						     _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
						     _oBR = new Packages.java.io.BufferedReader(_oIR),
						     z = 0;
							 while ((texto[z] = _oBR.readLine()) != null) 
							 {
						         //texto[i] = _oBR.readLine();
						         z++;            
						     }
						     _oBR.close();
							vSet.loadRecords(databaseManager.convertToDataSet([uuid1]))  
							record = vSet.getRecord(vSet.getSelectedIndex())
							if(record)
							{
								var linea = texto[4];
								fechenvfra = linea.slice(24, 43);
								record.fechaenviofichero = utils.parseDate(fechenvfra,'dd-MM-yyyy HH:mm:ss');//new Date();
								//mac
								//record.mac = macaddress;
								//ctbai
								var diafactura = linea.slice(24, 26);
							    var mesfactura = linea.slice(27, 29);
							    var anofactura = linea.slice(32, 34);
							    var SignatureValue = utils.stringMiddle(record['ctbai'],23,13);
							    var ctbai36 = "TBAI-"+gcparametrosaplicacion_to_parametrosaplicacion.cif + "-" + 
							     				diafactura + mesfactura + anofactura + "-" + SignatureValue + "-"
							    var crc = scopes.netticketbaiCRC8.calculate(ctbai36)
								//var crc = scopes.netticketbaiCRC8.CRC8(null,ctbai36)
								//var crc = scopes.netticketbaiCRC8.entrada(ctbai36)
								application.output(ctbai36+crc)
								record.ctbai = ctbai36 + crc;
								//firmafactura
								//record.firmafactura = SignatureValue2;
								//QR
								var s = record['fecha_cfa'].getFullYear();
								var nf = record['eje_cfa']+utils.numberFormat(record['nup_cfa'],'00000')+record['ser_cfa']
								var imp = record['impnee_cfa'];
								
								/*record.cqr = "https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record.ctbai+"&s="+s+
								"&nf="+nf+"&i="+imp+"&cr="+crc;
								 */ 
								if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0)
								{
									//var codqr = scopes.netticketbaiCRC8.calculate('https://batuz.eus/QRTBAI/?id=TBAI-00000006Y-251019-btFpwP8dcLGAF-237&s=T&nf=27174&i=4.70') // cqr = 007
									var codqr =  scopes.netticketbaiCRC8.calculate("https://tbai.prep.gipuzkoa.eus/qr/?id="+record['ctbai']+"&s="+s+"&nf="+nf+"&i="+imp)
									record.cqr = "https://tbai.prep.gipuzkoa.eus/qr/?id="+record['ctbai']+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
								}
								else
								{
									codqr =  scopes.netticketbaiCRC8.calculate("https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record['ctbai']+"&s="+s+"&nf="+nf+"&i="+imp)
									record.cqr = "https://tbai.egoitza.gipuzkoa.eus/qr/?id="+record['ctbai']+"&s="+s+"&nf="+nf+"&i="+imp+"&cr="+codqr;
								}
								var ruta = "C:\\TMP\\salida.xml";
								f = plugins.file.convertToJSFile(ruta);
								if(f && f.exists())
								{
									var rawData = plugins.file.readFile(ruta);
									record.fichero_respuesta_tbai = rawData;
								}
								databaseManager.saveData(record)
								databaseManager.refreshRecordFromDatabase(forms.FrmFacturasGC.foundset,-1)
								forms.dlg_ImpresionFacturasTBAIGC.xmltbai = 0
								
							}
							globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
							globals.GCshowInfoDialog("Factura modificada correctamente en Ticketbai", null, null, null, null, null)
						}
						else
						{
							globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
							globals.GCshowErrorDialog("La factura NO se ha modificado correctamente.\n"+resp, null, null, null, null, null)
						}
					}				
				}
			}		
		}
	}
	catch (e) {
		application.output("catched exception");
		application.output(e);
		globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
		globals.CONTAshowErrorDialog(e.toString(),null,'Aceptar',null,null,null)
	}
}

/**
 * Callback method when form is destroyed.
 * 
 * 
 * @param {Number} DEJE
 * @param {String} DSER
 * @param {Number} DNUP
 * @param {Number} HEJE
 * @param {String} HSER
 * @param {Number} HNUP
 * @param {Number} DCLI
 * @param {Number} HCLI
 *
 * @properties={typeid:24,uuid:"FE1044CB-D2C7-4938-B824-A26FC8A093C3"}
 */
function GenerarXMLOSATUTBAI(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
{
	try
	{
		var query = "SELECT ParametrosAplicacion.NºEmpresa,ParametrosAplicacion.Propiedad,"+
	    "ParametrosAplicacion.Empresa,ParametrosAplicacion.CodPostal,"+
	    "ParametrosAplicacion.Direccion,ParametrosAplicacion.Poblacion,"+
	    "ParametrosAplicacion.Provincia,ParametrosAplicacion.CIF,"+
	    "ParametrosAplicacion.Telefono,ParametrosAplicacion.Fax,"+
	    "ParametrosAplicacion.Mail,ParametrosAplicacion.Web,"+
	    "ParametrosAplicacion.Logo,ParametrosAplicacion.Logo2,"+
	    "ParametrosAplicacion.TelAux,ParametrosAplicacion.CtaBancaria,"+
	    "ParametrosAplicacion.Registro,ParametrosAplicacion.Tomo,"+
	    "ParametrosAplicacion.Folio,ParametrosAplicacion.HojaRegistral,"+
	    "ParametrosAplicacion.pais,"+
	    "tbFacturaCabecera.ID,tbFacturaCabecera.eje_cfa,"+
	    "tbFacturaCabecera.ser_cfa,tbFacturaCabecera.nup_cfa,"+
	    "tbFacturaCabecera.fecha_cfa,tbFacturaCabecera.fechcobro_cfa,"+
	    "tbFacturaCabecera.fechconta_cfa,tbFacturaCabecera.clie_cfa,"+
	    "tbFacturaCabecera.cfpa_cfa,tbFacturaCabecera.desccfpa_cfa,"+
	    "tbFacturaCabecera.repr_cfa,tbFacturaCabecera.obse_cfa,"+
	    "tbFacturaCabecera.fenvio,tbFacturaCabecera.situconta,"+
	    "tbFacturaCabecera.situ,tbFacturaCabecera.impbre_cfa,"+
	    "tbFacturaCabecera.depp_cfa,tbFacturaCabecera.pgfi_cfa,"+
	    "tbFacturaCabecera.impbie_cfa,tbFacturaCabecera.piva_cfa,"+
	    "tbFacturaCabecera.cuotaiva_cfa,tbFacturaCabecera.impbie2_cfa,"+
	    "tbFacturaCabecera.piva2_cfa,tbFacturaCabecera.cuotaiva2_cfa,"+
	    "tbFacturaCabecera.impbie3_cfa,tbFacturaCabecera.piva3_cfa,"+
	    "tbFacturaCabecera.cuotaiva3_cfa,tbFacturaCabecera.impnee_cfa,"+
	    "tbFacturaCabecera.gtosfinan_cfa,tbFacturaCabecera.impgtosfinan,"+
	    "tbFacturaCabecera.impre,tbFacturaCabecera.impre2,"+
	    "tbFacturaCabecera.impre3,tbFacturaLinea.ID,tbFacturaLinea.eje_lfa,"+
	    "tbFacturaLinea.ser_lfa,tbFacturaLinea.nup_lfa,tbFacturaLinea.nli_lfa,"+
	    "tbFacturaLinea.nalb_lfa,tbFacturaLinea.lalb_lfa,"+
	    "tbFacturaLinea.ref_lfa,tbFacturaLinea.concep_lfa,"+
	    "tbFacturaLinea.cant1_lfa,tbFacturaLinea.prec_lfa,"+
	    "tbFacturaLinea.unme_lfa,tbFacturaLinea.piva_lfa,"+
	    "tbFacturaLinea.dto_lfa,tbFacturaLinea.impdto_lfa,"+
	    "tbFacturaLinea.clie_lfa,tbFacturaLinea.situ_lfa,"+
	    "tbFacturaLinea.precuni_lfa,tbFacturaLinea.impor_lfa,"+
	    "tbFacturaLinea.importot_lfa,tbFacturaLinea.fecha_lfa,"+
	    "tbFacturaLinea.nprograma_lfa,tbMaestroClientes.ID,"+
	    "tbMaestroClientes.IdCliente,tbMaestroClientes.DescCliente,"+
	    "tbMaestroClientes.Direccion,tbMaestroClientes.Poblacion,"+
	    "tbMaestroClientes.Provincia,tbMaestroClientes.CodPostal,"+
	    "tbMaestroClientes.RazonSocial,tbMaestroClientes.PersContacto,"+
	    "tbMaestroClientes.EmailContacto,tbMaestroClientes.Telf1,"+
	    "tbMaestroClientes.Telf2,tbMaestroClientes.Fax,"+
	    "tbMaestroClientes.CIF,tbMaestroClientes.NumProveedor,"+
	    "tbMaestroClientes.CuentaContable,tbMaestroClientes.IdFormaPago,"+
	    "tbMaestroClientes.TipoIva,tbMaestroClientes.IdMoneda,"+
	    "tbMaestroClientes.DiaPago1,tbMaestroClientes.DiaPago2,tbMaestroClientes.DiaPago3,"+
	    "tbMaestroClientes.Pais,tbMaestroClientes.Observaciones,"+
	    "tbMaestroClientes.CodigoBanco,tbMaestroClientes.CodigoSucursal,"+
	    "tbMaestroClientes.Codigo1DC,tbMaestroClientes.CodigoCuenta,"+
	    "tbMaestroArticulos.RefCliente,tbMaestroformpago.denom_fp,ParametrosAplicacion.bic,tbFacturaCabecera.impirpf,tbFacturaCabecera.pirpf "+
	    "FROM tbFacturaCabecera tbFacturaCabecera LEFT JOIN dbo.tbFacturaLinea tbFacturaLinea ON "+
		 "tbFacturaCabecera.eje_cfa = tbFacturaLinea.eje_lfa "+
	    "AND tbFacturaCabecera.nup_cfa = tbFacturaLinea.nup_lfa "+
	    "AND tbFacturaCabecera.ser_cfa = tbFacturaLinea.ser_lfa "+
	    "LEFT JOIN dbo.tbMaestroClientes tbMaestroClientes ON "+
		 "tbFacturaCabecera.clie_cfa = tbMaestroClientes.IdCliente "+
	    "LEFT JOIN dbo.tbMaestroformpago tbMaestroformpago ON "+
		 "tbFacturaCabecera.cfpa_cfa = tbMaestroformpago.codig_fp "+
	    "LEFT JOIN dbo.tbMaestroArticulos tbMaestroArticulos ON "+
		 "tbFacturaLinea.ref_lfa = tbMaestroArticulos.Codigo,"+
	    "dbo.ParametrosAplicacion ParametrosAplicacion "+
	    "WHERE (tbFacturaCabecera.eje_cfa >= "+DEJE+
	    " AND tbFacturaCabecera.eje_cfa <= "+HEJE+") "+
	    "AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
	    "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') "+
	    "AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
	    " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") "+
	    "AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+") "+
	    "ORDER BY tbFacturaLinea.eje_lfa ASC,tbFacturaLinea.ser_lfa ASC,"+
	    "tbFacturaLinea.nup_lfa ASC,tbFacturaLinea.nli_lfa ASC";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null,99999999)
		var rows = dataset.getMaxRowIndex();
		xml = new String();
		htm = new String();
		newxml = new String();
		if(rows > 0)
		{	
			//var uuidfactura = dataset.getValue(1,22)
			datosempresa(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
			
				xml = '<?xml version="1.0" encoding="UTF-8"?>';
			Document = <OsatuTicketBAI/>
			/*ns = new Namespace('T',"urn:ticketbai:emision")
			Document.addNamespace(ns)							
			
			ns = new Namespace('ds','http://www.w3.org/2000/09/xmldsig#')
			Document.addNamespace(ns)
			
			ns = new Namespace('schemaLocation', 'urn:ticketbai:emision ticketBaiV12.xsd ')
			Document.addNamespace(ns)
			
			ns = new Namespace('xsi','http://www.w3.org/2001/XMLSchema-instance')
			Document.addNamespace(ns)
			*/
			Cabecera = <Cabecera/>
				IDVersion = <IDVersion/>
				IDVersion.appendChild('1.0')
			Cabecera.appendChild(IDVersion)
			IDFactura = <IDFactura/>
				NIF = <NIF/>
				cifempresa = cifcliente//forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.cif;
				NIF.appendChild(cifempresa)
				SerieFactura = <SerieFactura/>
				var fechafra = dataset.getValue(1,26);
				SerieFactura.appendChild(fechafra.getFullYear())
				NumFactura = <NumFactura/>
				NumFactura.appendChild(dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24))
				FechaExpedicionFactura = <FechaExpedicionFactura/>
				//FechaExpedicionFactura.appendChild(utils.dateFormat(dataset.getValue(1,26),'dd-MM-yyyy'))
				var fechenvfra = new Date(); 
				FechaExpedicionFactura.appendChild(utils.dateFormat(fechenvfra,'dd-MM-yyyy'))
			IDFactura.appendChild(NIF)
			IDFactura.appendChild(SerieFactura)
			IDFactura.appendChild(NumFactura)
			IDFactura.appendChild(FechaExpedicionFactura)
			var OsatuOtrosDatosTributarios = <OsatuOtrosDatosTributarios/>
				var ReferenciaExterna = <ReferenciaExterna/>
				ReferenciaExterna.appendChild('REF-111')
				var Inmuebles = <Inmuebles/>
					var DetalleInmueble = <DetalleInmueble/>
						var SituacionInmueble = <SituacionInmueble/>
						SituacionInmueble.appendChild(2)
						var ReferenciaCatastral = <ReferenciaCatastral/>
						ReferenciaCatastral.appendChild('0000000000000000000000000')
					DetalleInmueble.appendChild(SituacionInmueble)
					DetalleInmueble.appendChild(ReferenciaCatastral)
				Inmuebles.appendChild(DetalleInmueble)	
				var ImporteTransmisionInmueblesSujetoAIVA = <ImporteTransmisionInmueblesSujetoAIVA/>
				ImporteTransmisionInmueblesSujetoAIVA.appendChild(100.00)
				var NIFRepresentante = <NIFRepresentante/>
				NIFRepresentante.appendChild('99999970C')
				var NIFRepresentanteContraparte = <NIFRepresentanteContraparte/>
				NIFRepresentanteContraparte.appendChild('12345678Z')
				var EntidadSucedida = <EntidadSucedida/>
					NIF = <NIF/>
					NIF.appendChild('B00000001')
					ApellidosNombreRazonSocial = <ApellidosNombreRazonSocial/>
					razonsocial = globals.GCQuitarCaracteresEspeciales(utils.stringLeft(desccliente,120)) //forms.FrmFacturasGC.GCtbfacturacabecera_to_tbmaestroclientes.desccliente;
					ApellidosNombreRazonSocial.appendChild(razonsocial)
				EntidadSucedida.appendChild(NIF)
				EntidadSucedida.appendChild(ApellidosNombreRazonSocial)
				var Cupon = <Cupon/>
				Cupon.appendChild(2)
			OsatuOtrosDatosTributarios.appendChild(ReferenciaExterna)
			OsatuOtrosDatosTributarios.appendChild(Inmuebles)
			OsatuOtrosDatosTributarios.appendChild(ImporteTransmisionInmueblesSujetoAIVA)
			OsatuOtrosDatosTributarios.appendChild(NIFRepresentante)
			OsatuOtrosDatosTributarios.appendChild(NIFRepresentanteContraparte)
			OsatuOtrosDatosTributarios.appendChild(EntidadSucedida)
			OsatuOtrosDatosTributarios.appendChild(Cupon)
			Document.appendChild(Cabecera)
			Document.appendChild(IDFactura)
			Document.appendChild(OsatuOtrosDatosTributarios)
			
			xml += Document
			//var newxml = xml.toString().replace(' xmlns=""','')
			newxml = utils.stringReplace(xml.toString(),'<OsatuTicketBAI','<T:OsatuTicketBAI')
			newxml = utils.stringReplace(newxml,'</OsatuTicketBAI','</T:OsatuTicketBAI')
			newxml = utils.stringReplace(newxml,'<T:AnulaTicketBai>','<T:AnulaTicketBai xmlns:T="urn:ticketbai:osatu">')
			
			newxml = utils.stringReplace(newxml,' xmlns=""','')
			//var xml2 = new XML(newxml)
			application.output(newxml);
			
			var nfactura = dataset.getValue(1,23)+utils.numberFormat(dataset.getValue(1,25),'00000')+dataset.getValue(1,24);
			htm += newxml
			if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
			{			
				var folder = plugins.file.convertToJSFile("c:\\tmp");
				var b = plugins.file.createFolder(folder)
				if (b == true) application.output("El directorio c:\\tmp se ha creado correctamente o ya existía.");
				var js = "c:\\tmp\\OSATUTBAI"+nfactura+".xml";
				var f = plugins.file.convertToJSFile(js);
				if(f && f.exists()) f.deleteFile()
				plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
					
			}
				
		}
	}
	catch (e) {
		application.output("catched exception");
		application.output(e);
		globals.core_formulario_TBAI = 'dialogImpresionFacturasTBAIGC';
		globals.CONTAshowErrorDialog(e.toString(),null,'Aceptar',null,null,null)
	}
}

//@return {plugins.http.Response}

/**
 * @return {String}
 * @properties={typeid:24,uuid:"65DC3324-25D4-4960-BE11-F1F4595B7509"}
 * @SuppressWarnings(deprecated)
 */
function envioTBAI(myXml){
	/*Alta de facturas (completas, simplificadas o rectificativas)
	https://tbai-z.prep.gipuzkoa.eus/sarrerak/alta
	 Anulación de facturas
	https://tbai-z.prep.gipuzkoa.eus/sarrerak/baja
	 ZUZENDU de facturas (subsanación o modificación) y subsanación de baja
	https://tbai-z.prep.gipuzkoa.eus/sarrerak/zuzendu-alta
	https://tbai-z.prep.gipuzkoa.eus/sarrerak/zuzendu-baja
	*/
	//var url = "https://tbai.egoitza.gipuzkoa.eus/sarrerak/alta"; // --- Entorno https://tbai.egoitza.gipuzkoa.eus/qr/?id=
	//var url = "https://tbai-z.prep.gipuzkoa.eus/sarrerak/alta"; // --- Entorno pruebas.
	var url = "https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta"
	var client = plugins.http.createNewHttpClient(); // Creating new http client
	var poster = client.createPostRequest(url);
	//var certif = 'ARROYO GONZALEZ GREGORIO - 12710839G'//gcparametrosaplicacion_to_parametrosaplicacion.certifdigital;
	//var certifpassword = gcparametrosaplicacion_to_parametrosaplicacion.clave_certifdigital;
		
	
	/*
	
	poster.addParameter('AWSAccessKeyId','AKIAIMWQ2C12345678')
	poster.addParameter('Action','SubmitFeed')
	poster.addParameter('Merchant','A2D9F123456789')
	poster.addParameter('MWSAuthToken','A1PA6123456789')
	poster.addParameter('SignatureVersion','2')
	poster.addParameter('Timestamp',time) // using a time variable -> variable works ( used and tested with other requests)
	poster.addParameter('Version','2009-01-01')
	poster.addParameter('Signature',signature) // Signature is correct ( used and tested with other requests)
	poster.addParameter('SignatureMethod','HmacSHA256')
	poster.addParameter('FeedType','_POST_PRODUCT_DATA_')
	poster.addParameter('PurgeAndReplace','false')
	poster.addParameter('x-amazon-user-agent','AmazonJavascriptScratchpad/1.0 (Language=Javascript)')
	poster.addParameter('Content-MD5','LwpPrQqp+k0hA6qImf+wdQ==') // Value is verfied and works
	poster.addParameter('Content-Type','text/xml')
	
	poster.setBodyContent(xmlFle.toString()) // !!! the error must be here !!!*/
	poster.addHeader("Content-Type", "application/xml");
	poster.addHeader('Accept', 'application/xml');
	//poster.addHeader('Authentication', certif);
	//poster.addHeader('--cert', 'D:\\CERTIF_AG\\cgagfnmt.pem');
	//poster.addHeader('--key', 'D:\\CERTIF_AG\\cgagfnmt_key.pem');
	
	poster.setCharset('UTF-8');
	
	//poster.setBodyContent(myXml,'application/xml');
	poster.addFile(null,'XMLTBAI',myXml,'text/xml');
	
	poster.usePreemptiveAuthentication(true)

	var response = poster.executeRequest()
	
	
	var pageData = response.getResponseBody();
	
	//Get Status Code. 200 is OK
	application.output("Response status code: " + response.getStatusCode());
	application.output("Response reason: " + response.getStatusReasonPhrase());
	application.output("Response body: " + response.getResponseBody());
	application.output("Response exception msg: " + response.getException());
	
	response.close();
	client.close();
	
	
	application.output(pageData) 
	return pageData
}

/**
 * TODO generated, please specify type and doc for the params
 * @param myXml
 * 
 * @return {String}
 * 
 *
 * @properties={typeid:24,uuid:"2475CC99-9C75-447E-9C38-495FE45CD5B2"}
 */
function envioTBAI2(myXml){
	//var rutabat = "c:\\Servoy\\Comando_Curl_Servoy.bat";
	//var rutabat = "D:\\curl\\curl-7.81.0-win64-mingw\\bin\\curl.exe";
	
	var hfolder = plugins.file.getHomeFolder()+"\\.servoy\\";
	if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
	gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){		
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) 
		{
			/*f = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml");
			if(f && f.exists())
			{			
				var f2 = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml.zip");
				if(f2 && f2.exists()) f2.deleteFile()
				f2 = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml.gz");
				if(f2 && f2.exists()) f2.deleteFile()
				plugins.it2be_tools.zip("C:\\tmp\\ficheroenviocurl.xml")
				plugins.file.copyFile("C:\\tmp\\ficheroenviocurl.xml.zip","C:\\tmp\\ficheroenviocurl.gz")				
			}*/
			if(globals.GCconex == 'conexiongestionmlegazpipruebas') var rutabat = hfolder+"CURL_TICKETBAI_ML_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestiontmendizabalpruebas') rutabat = hfolder+"CURL_TICKETBAI_TM_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestionolabemarpruebas') rutabat = hfolder+"CURL_TICKETBAI_OLABEMAR_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestionsectorvertical') rutabat = hfolder+"CURL_TICKETBAI_SV_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestionamsorolla') rutabat = hfolder+"CURL_TICKETBAI_AMSOROLLA_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestiontedelbi') rutabat = hfolder+"CURL_TICKETBAI_TEDELBI_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestiongm') rutabat = hfolder+"CURL_TBAI_GM_PRUEBAS.exe";	
			else rutabat = hfolder+"CURL_TICKETBAI_PRUEBAS.exe";		
		}
		else 
		{			
			if(globals.GCconex == 'conexiongestionmlegazpipruebas') rutabat = hfolder+"CURL_TICKETBAI_ML_OFICIAL.exe";
			else if(globals.GCconex == 'conexiongestiontmendizabalpruebas') rutabat = hfolder+"CURL_TICKETBAI_TM_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestionolabemarpruebas') rutabat = hfolder+"CURL_TICKETBAI_OLABEMAR_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestionsectorvertical') rutabat = hfolder+"CURL_TICKETBAI_SV_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestionamsorolla') rutabat = hfolder+"CURL_TICKETBAI_AMSOROLLA_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestiontedelbi') rutabat = hfolder+"CURL_TICKETBAI_TEDELBI_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestiongm') rutabat = hfolder+"CURL_TBAI_GM_OFICIAL.exe";	
			else rutabat = hfolder+"CURL_TICKETBAI_OFICIAL.exe";
		}
	}
	else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
	gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
		f = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml");
		if(f && f.exists())
		{			
			var f2 = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml.zip");
			if(f2 && f2.exists()) f2.deleteFile()
			f2 = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml.gz");
			if(f2 && f2.exists()) f2.deleteFile()
			plugins.it2be_tools.zip("C:\\tmp\\ficheroenviocurl.xml")
			plugins.file.copyFile("C:\\tmp\\ficheroenviocurl.xml.zip","C:\\tmp\\ficheroenviocurl.gz")				
		}
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) rutabat = hfolder+"CURL_TICKETBAI_VIZCAYA_PRUEBAS.exe";
		else rutabat = hfolder+"CURL_TICKETBAI_VIZCAYA_OFICIAL.exe";
	}
	else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
	gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) rutabat = hfolder+"CURL_TICKETBAI_ALAVA_PRUEBAS.exe";
		else rutabat = hfolder+"CURL_TICKETBAI_ALAVA_OFICIAL.exe";
	}
	else{
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) rutabat = hfolder+"CURL_TICKETBAI_PRUEBAS.exe";
		else rutabat = hfolder+"CURL_TICKETBAI_OFICIAL.exe";
	}
	//var rutabat = hfolder+"Comando_Curl_Servoy.bat";
	var f = plugins.file.convertToJSFile(rutabat);
	//var urlServer = "https://tbai.egoitza.gipuzkoa.eus/sarrerak/alta"; // --- Entorno https://tbai.egoitza.gipuzkoa.eus/qr/?id=
	//var urlServer = "https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta"; // --- Entorno pruebas.
	
	//var resp = 'No existe el .bat';
	var resp = 'No existe el curl.exe';
	if(f && f.exists())
	{
		var ruta = "C:\\TMP\\salida.xml";
		f = plugins.file.convertToJSFile(ruta);
		if(f && f.exists()) f.deleteFile()
		
		//curl --connect-timeout 60 -m 60 -s -S -L --header "Content-Type: application/xml;charset=UTF-8" -H "Accept: application/xml" --cert D:\CERTIF_AG\cgagfnmt.pem --key D:\CERTIF_AG\cgagfnmt_key.pem --data-binary @C:\TMP\ficheroenviocurl.xml  https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta --output c:\tmp\salida.xml -v
	
		//resp = application.executeProgram(rutabat);
		
		resp = plugins.UserManager.executeCommand(rutabat);
		
		//resp = application.executeProgram(rutabat,[myXml,urlServer]);		
		//plugins.UserManager.executeCommand(rutabat+ ' --connect-timeout 60 -m 60 -s -S -L --header "Content-Type: application/xml;charset=UTF-8" -H "Accept: application/xml" --cert D:\CERTIF_AG\cgagfnmt.pem --key D:\CERTIF_AG\cgagfnmt_key.pem --data '+myXml+'  '+urlServer+'  --output c:\tmp\salida.xml -v')
		//resp = application.executeProgram("cmd /c  C:\\Windows\\System32\\cmd.exe");
		
		ruta = "C:\\TMP\\salida.xml";
		f = plugins.file.convertToJSFile(ruta);
		if(f && f.exists())
		{
			//leo el fichero firmado
			var texto = new Array();
			
			 var _oFR = new Packages.java.io.FileInputStream(ruta),
		     _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
		     _oBR = new Packages.java.io.BufferedReader(_oIR),
		     z = 0;
			 while ((texto[z] = _oBR.readLine()) != null) 
			 {
		         //texto[i] = _oBR.readLine();
		         z++;            
		     }
		     _oBR.close();
			     if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
						var linea = texto[0];
						if(linea) resp = utils.stringTrim(linea.slice(258, 260));
						if(resp == '00')
					    {
					    	resp += " - Recibido";
					    }
					    else
					    {
					    	resp += " - Rechazado. Consulte el archivo salida.xml"
					    }
				} 
				else
				{
					linea = texto[5];
					if(linea) resp = utils.stringTrim(linea.slice(16, 18));
					else
					{
						linea = texto[0]
						if(linea) resp = utils.stringTrim(linea.slice(258, 260));
					}
				    if(resp == '00')
				    {
					    linea = texto[6];
					    if(linea)
					    {
					    	resp += " - "+utils.stringTrim(linea.slice(21, 30));			    	
					    }
					    else
					    {
					    	linea = texto[0];
					    	if(linea) resp += " - "+utils.stringTrim(linea.slice(282, 290));		
					    }
				    }
				    else
				    {
				    	if(linea){
					    	 linea = texto[4];
					    	 resp = utils.stringTrim(linea.slice(16, 18));
					    	 linea = texto[5];
							 if(linea)
							 {
							   	resp += " - "+utils.stringTrim(linea.slice(21, 30))+ "\n";			    	
							 }
					    	 linea = texto[8];
					    	 if(linea)
					    	 {
					    		 resp += utils.stringTrim(linea.slice(20, 23));
					    		 linea = texto[9];
					    		 if(linea)
						    	 {
						    		 resp += " - "+utils.stringTrim(linea.slice(25, 77));
						    	 }
					    	 }
				    	}
				    	else resp = 'RECHAZADO EL ENVÍO A TICKETBAI. \nCONSULTE EL FICHERO C:\TMP\salida.xml PARA SABER LA RAZON DE PORQUÉ SE HA RECHAZADO.'
				    }
				}
		}
		else 
		{
			resp = 'No generado fichero C:\\TMP\\salida.xml';
		}
	}
	
	//var resp = plugins.Velocity.invokeService("TicketBAI",{ inPath: 'c:/tmp/ficheroenviocurl.xml', outPath: 'C:/tmp/salida.xml' });
	return resp
}

/**
 * TODO generated, please specify type and doc for the params
 * @param myXml
 * 
 * @return {Array}
 * 
 *
 *
 * @properties={typeid:24,uuid:"96259B77-0EF0-46F0-B12D-5772039F6F94"}
 */
function envioTBAI2_1(myXml){
	//var rutabat = "c:\\Servoy\\Comando_Curl_Servoy.bat";
	//var rutabat = "D:\\curl\\curl-7.81.0-win64-mingw\\bin\\curl.exe";
	var respuesta = new Array()
	var hfolder = plugins.file.getHomeFolder()+"\\.servoy\\";
	if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
	gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){		
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) 
		{
			if(globals.GCconex == 'conexiongestionmlegazpipruebas') var rutabat = hfolder+"CURL_TICKETBAI_ML_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestiontmendizabalpruebas') rutabat = hfolder+"CURL_TICKETBAI_TM_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestionolabemarpruebas') rutabat = hfolder+"CURL_TICKETBAI_OLABEMAR_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestionsectorvertical') rutabat = hfolder+"CURL_TICKETBAI_SV_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestionamsorolla') rutabat = hfolder+"CURL_TICKETBAI_AMSOROLLA_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestiontedelbi') rutabat = hfolder+"CURL_TICKETBAI_TEDELBI_PRUEBAS.exe";	
			else rutabat = hfolder+"CURL_TICKETBAI_PRUEBAS.exe";		
		}
		else 
		{
			if(globals.GCconex == 'conexiongestionmlegazpipruebas') rutabat = hfolder+"CURL_TICKETBAI_ML_OFICIAL.exe";
			else if(globals.GCconex == 'conexiongestiontmendizabalpruebas') rutabat = hfolder+"CURL_TICKETBAI_TM_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestionolabemarpruebas') rutabat = hfolder+"CURL_TICKETBAI_OLABEMAR_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestionsectorvertical') rutabat = hfolder+"CURL_TICKETBAI_SV_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestionamsorolla') rutabat = hfolder+"CURL_TICKETBAI_AMSOROLLA_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestiontedelbi') rutabat = hfolder+"CURL_TICKETBAI_TEDELBI_OFICIAL.exe";	
			else rutabat = hfolder+"CURL_TICKETBAI_OFICIAL.exe";
		}
	}
	else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
	gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) rutabat = hfolder+"CURL_TICKETBAI_PRUEBAS.exe";
		else rutabat = hfolder+"CURL_TICKETBAI_VIZCAYA_OFICIAL.exe";
	}
	else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
	gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) rutabat = hfolder+"CURL_TICKETBAI_ALAVA_PRUEBAS.exe";
		else rutabat = hfolder+"CURL_TICKETBAI_ALAVA_OFICIAL.exe";
	}
	else{
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) rutabat = hfolder+"CURL_TICKETBAI_PRUEBAS.exe";
		else rutabat = hfolder+"CURL_TICKETBAI_OFICIAL.exe";
	}
	//var rutabat = hfolder+"Comando_Curl_Servoy.bat";
	var f = plugins.file.convertToJSFile(rutabat);
	//var urlServer = "https://tbai.egoitza.gipuzkoa.eus/sarrerak/alta"; // --- Entorno https://tbai.egoitza.gipuzkoa.eus/qr/?id=
	//var urlServer = "https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta"; // --- Entorno pruebas.
	
	//var resp = 'No existe el .bat';
	var resp = 'No existe el curl.exe';
	if(f && f.exists())
	{
		var ruta = "C:\\TMP\\salida.xml";
		f = plugins.file.convertToJSFile(ruta);
		if(f && f.exists()) f.deleteFile()
		
		//curl --connect-timeout 60 -m 60 -s -S -L --header "Content-Type: application/xml;charset=UTF-8" -H "Accept: application/xml" --cert D:\CERTIF_AG\cgagfnmt.pem --key D:\CERTIF_AG\cgagfnmt_key.pem --data-binary @C:\TMP\ficheroenviocurl.xml  https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta --output c:\tmp\salida.xml -v
	
		//resp = application.executeProgram(rutabat);
		
		resp = plugins.UserManager.executeCommand(rutabat);
		
		//resp = application.executeProgram(rutabat,[myXml,urlServer]);		
		//plugins.UserManager.executeCommand(rutabat+ ' --connect-timeout 60 -m 60 -s -S -L --header "Content-Type: application/xml;charset=UTF-8" -H "Accept: application/xml" --cert D:\CERTIF_AG\cgagfnmt.pem --key D:\CERTIF_AG\cgagfnmt_key.pem --data '+myXml+'  '+urlServer+'  --output c:\tmp\salida.xml -v')
		//resp = application.executeProgram("cmd /c  C:\\Windows\\System32\\cmd.exe");
		
		ruta = "C:\\TMP\\salida.xml";
		f = plugins.file.convertToJSFile(ruta);
		if(f && f.exists())
		{
			//leo el fichero firmado
			var texto = new Array();
			
			 var _oFR = new Packages.java.io.FileInputStream(ruta),
		     _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
		     _oBR = new Packages.java.io.BufferedReader(_oIR),
		     z = 0;
			 while ((texto[z] = _oBR.readLine()) != null) 
			 {
		         //texto[i] = _oBR.readLine();
		         z++;            
		     }
		     _oBR.close();
			     if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || 
					gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
						var linea = texto[0];
						if(linea) resp = utils.stringTrim(linea.slice(258, 260));
						if(resp == '00')
					    {
					    	respuesta.push(resp)
					    	resp += " - Recibido";
					    }
					    else
					    {
					    	resp += " - Rechazado. Consulte el archivo salida.xml"
					    }
				} 
				else
				{
					linea = texto[5];
					if(linea) resp = utils.stringTrim(linea.slice(16, 18));
					else
					{
						linea = texto[0]
						if(linea) resp = utils.stringTrim(linea.slice(258, 260));
					}
				    if(resp == '00')
				    {
					    linea = texto[6];
					    if(linea)
					    {
					    	resp += " - "+utils.stringTrim(linea.slice(21, 30));			    	
					    }
					    else
					    {
					    	linea = texto[0];
					    	if(linea) resp += " - "+utils.stringTrim(linea.slice(282, 290));		
					    }
				    }
				    else
				    {
				    	if(linea){
					    	 linea = texto[4];
					    	 resp = utils.stringTrim(linea.slice(16, 18));
					    	 linea = texto[5];
							 if(linea)
							 {
							   	resp += " - "+utils.stringTrim(linea.slice(21, 30))+ "\n";			    	
							 }
					    	 linea = texto[8];
					    	 if(linea)
					    	 {
					    		 resp += utils.stringTrim(linea.slice(20, 23));
					    		 linea = texto[9];
					    		 if(linea)
						    	 {
						    		 resp += " - "+utils.stringTrim(linea.slice(25, 77));
						    	 }
					    	 }
				    	}
				    	else resp = 'RECHAZADO EL ENVÍO A TICKETBAI. \nCONSULTE EL FICHERO C:\TMP\salida.xml PARA SABER LA RAZON DE PORQUÉ SE HA RECHAZADO.'
				    }
				}
		}
		else 
		{
			resp = 'No generado fichero C:\TMP\salida.xml';
		}
	}
	
	//var resp = plugins.Velocity.invokeService("TicketBAI",{ inPath: 'c:/tmp/ficheroenviocurl.xml', outPath: 'C:/tmp/salida.xml' });
	return respuesta
}

/**
 * TODO generated, please specify type and doc for the params
 * @param myXml
 * 
 * @return {String}
 *
 *
 * @properties={typeid:24,uuid:"BB107D26-3B29-40A0-B6A9-DD6674951A91"}
 */
function envioTBAI2_anulacion(myXml){
	//var rutabat = "c:\\Servoy\\Comando_Curl_Servoy.bat";
	
	/*https://tbai-z.prep.gipuzkoa.eus/sarrerak/zuzendu-alta
	https://tbai-z.prep.gipuzkoa.eus/sarrerak/zuzendu-baja
	*/
	var hfolder = plugins.file.getHomeFolder()+"\\.servoy\\";
	if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
	gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){		
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) 
		{
			/*f = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml");
			if(f && f.exists())
			{			
				var f2 = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml.zip");
				if(f2 && f2.exists()) f2.deleteFile()
				f2 = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml.gz");
				if(f2 && f2.exists()) f2.deleteFile()
				plugins.it2be_tools.zip("C:\\tmp\\ficheroenviocurl.xml")
				plugins.file.copyFile("C:\\tmp\\ficheroenviocurl.xml.zip","C:\\tmp\\ficheroenviocurl.gz")				
			}*/
			if(globals.GCconex == 'conexiongestionmlegazpipruebas') var rutabat = hfolder+"CURL_ANULACIONTICKETBAI_ML_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestiontmendizabalpruebas') rutabat = hfolder+"CURL_ANULACIONTICKETBAI_TM_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestionolabemarpruebas') rutabat = hfolder+"CURL_ANULACIONTICKETBAI_OLABEMAR_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestionsectorvertical') rutabat = hfolder+"CURL_ANULACIONTICKETBAI_SV_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestionamsorolla') rutabat = hfolder+"CURL_ANULACIONTICKETBAI_AMSOROLLA_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestiontedelbi') rutabat = hfolder+"CURL_ANULACIONTICKETBAI_TEDELBI_PRUEBAS.exe";	
			else rutabat = hfolder+"CURL_ANULACIONTICKETBAI_PRUEBAS.exe";		
		}
		else 
		{			
			if(globals.GCconex == 'conexiongestionmlegazpipruebas') rutabat = hfolder+"CURL_ANULACIONTICKETBAI_ML_OFICIAL.exe";
			else if(globals.GCconex == 'conexiongestiontmendizabalpruebas') rutabat = hfolder+"CURL_ANULACIONTICKETBAI_TM_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestionolabemarpruebas') rutabat = hfolder+"CURL_ANULACIONTICKETBAI_OLABEMAR_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestionsectorvertical') rutabat = hfolder+"CURL_ANULACIONTICKETBAI_SV_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestionamsorolla') rutabat = hfolder+"CURL_ANULACIONTICKETBAI_AMSOROLLA_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestiontedelbi') rutabat = hfolder+"CURL_ANULACIONTICKETBAI_TEDELBI_OFICIAL.exe";	
			else rutabat = hfolder+"CURL_ANULACIONTICKETBAI_OFICIAL.exe";
		}
	}
	else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
	gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
		f = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml");
		if(f && f.exists())
		{			
			var f2 = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml.zip");
			if(f2 && f2.exists()) f2.deleteFile()
			f2 = plugins.file.convertToJSFile("C:\\tmp\\ficheroenviocurl.xml.gz");
			if(f2 && f2.exists()) f2.deleteFile()
			plugins.it2be_tools.zip("C:\\tmp\\ficheroenviocurl.xml")
			plugins.file.copyFile("C:\\tmp\\ficheroenviocurl.xml.zip","C:\\tmp\\ficheroenviocurl.gz")				
		}
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) rutabat = hfolder+"CURL_ANULACIONTICKETBAI_VIZCAYA_PRUEBAS.exe";
		else rutabat = hfolder+"CURL_ANULACIONTICKETBAI_VIZCAYA_OFICIAL.exe";
	}
	else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
	gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) rutabat = hfolder+"CURL_ANULACIONTICKETBAI_ALAVA_PRUEBAS.exe";
		else rutabat = hfolder+"CURL_ANULACIONTICKETBAI_ALAVA_OFICIAL.exe";
	}
	else{
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) rutabat = hfolder+"CURL_ANULACIONTICKETBAI_PRUEBAS.exe";
		else rutabat = hfolder+"CURL_ANULACIONTICKETBAI_OFICIAL.exe";
	}
	
	//if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) var rutabat = hfolder+"CURL_ANULACIONTICKETBAI_PRUEBAS.exe";
	//else rutabat = hfolder+"CURL_ANULACIONTICKETBAI_OFICIAL.exe";
	
	//var rutabat = hfolder+"Comando_Curl_Servoy.bat";
	var f = plugins.file.convertToJSFile(rutabat);
	//var urlServer = "https://tbai-z.egoitza.gipuzkoa.eus/sarrerak/baja"; // 
	//var urlServer = "https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/anulacion"; // --- Entorno pruebas.
	
	//var resp = 'No existe el .bat';
	var resp = 'No existe el '+rutabat;
	if(f && f.exists())
	{
		var ruta = "C:\\TMP\\salida.xml";
		f = plugins.file.convertToJSFile(ruta);
		if(f && f.exists()) f.deleteFile()
		
		//curl --connect-timeout 60 -m 60 -s -S -L --header "Content-Type: application/xml;charset=UTF-8" -H "Accept: application/xml" --cert D:\CERTIF_AG\cgagfnmt.pem --key D:\CERTIF_AG\cgagfnmt_key.pem --data-binary @C:\TMP\ficheroenviocurl.xml  https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta --output c:\tmp\salida.xml -v
	
		//resp = application.executeProgram(rutabat, null, null, hfolder);
		
		resp = plugins.UserManager.executeCommand(rutabat);
		
		//resp = application.executeProgram(rutabat,[myXml,urlServer]);		
		//plugins.UserManager.executeCommand(rutabat+ ' --connect-timeout 60 -m 60 -s -S -L --header "Content-Type: application/xml;charset=UTF-8" -H "Accept: application/xml" --cert D:\CERTIF_AG\cgagfnmt.pem --key D:\CERTIF_AG\cgagfnmt_key.pem --data '+myXml+'  '+urlServer+'  --output c:\tmp\salida.xml -v')
		//resp = application.executeProgram("cmd /c  C:\\Windows\\System32\\cmd.exe");
		
		ruta = "C:\\TMP\\salida.xml";
		f = plugins.file.convertToJSFile(ruta);
		if(f && f.exists())
		{
			//leo el fichero firmado
			var texto = new Array();
			
			 var _oFR = new Packages.java.io.FileInputStream(ruta),
		     _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
		     _oBR = new Packages.java.io.BufferedReader(_oIR),
		     z = 0;
			 while ((texto[z] = _oBR.readLine()) != null) 
			 {
		         //texto[i] = _oBR.readLine();
		         z++;            
		     }
		     _oBR.close();
		     var linea = texto[5];
			 resp = utils.stringTrim(linea.slice(16, 18));
			 if(resp == '00')
			 {
			    linea = texto[6];
			    if(linea)
			    {
			    	resp += " - "+utils.stringTrim(linea.slice(21, 30));			    	
			    }
			 }
			 else
			 {
			   	 linea = texto[5];
			   	 resp = utils.stringTrim(linea.slice(16, 18));
			   	 linea = texto[6];
				 if(linea)
				 {
				   	resp += " - "+utils.stringTrim(linea.slice(21, 30))+ "\n";			    	
				 }
			   	 linea = texto[9];
			   	 if(linea)
			   	 {
			   		 resp += utils.stringTrim(linea.slice(20, 23));
			   		 linea = texto[10];
			   		 if(linea)
			    	 {
			    		 resp += " - "+utils.stringTrim(linea.slice(25, 77));
			    	 }
			   	 }
			 }
		}
		else 
		{
			resp = 'No generado fichero salida.xml';
		}
	}
	
	//var resp = plugins.Velocity.invokeService("TicketBAI",{ inPath: 'c:/tmp/ficheroenviocurl.xml', outPath: 'C:/tmp/salida.xml' });
	return resp
}

/**
 * TODO generated, please specify type and doc for the params
 * @param myXml
 * 
 * @return {String}
 *
 *
 *
 * @properties={typeid:24,uuid:"C6E193AA-C75A-4CB7-90FA-4CE2362BB5E7"}
 */
function envioTBAI2_modificar(myXml){
	//var rutabat = "c:\\Servoy\\Comando_Curl_Servoy.bat";
	
	/*https://tbai-z.prep.gipuzkoa.eus/sarrerak/zuzendu-alta
	https://tbai-z.prep.gipuzkoa.eus/sarrerak/zuzendu-baja
	*/
	var hfolder = plugins.file.getHomeFolder()+"\\.servoy\\";
	if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '20' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPÚZCOA' || 
	gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GIPUZKOA' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'GUIPUZCOA'){		
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) 
		{
			if(globals.GCconex == 'conexiongestionmlegazpipruebas') var rutabat = hfolder+"CURL_MODIFICARTICKETBAI_ML_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestiontmendizabalpruebas') rutabat = hfolder+"CURL_MODIFICARTICKETBAI_TM_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestionolabemarpruebas') rutabat = hfolder+"CURL_MODIFICARTICKETBAI_OLABEMAR_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestionsectorvertical') rutabat = hfolder+"CURL_MODIFICARTICKETBAI_SV_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestionamsorolla') rutabat = hfolder+"CURL_MODIFICARTICKETBAI_AMSOROLLA_PRUEBAS.exe";	
			else if(globals.GCconex == 'conexiongestiontedelbi') rutabat = hfolder+"CURL_MODIFICARTICKETBAI_TEDELBI_PRUEBAS.exe";	
			else rutabat = hfolder+"CURL_MODIFICARTICKETBAI_PRUEBAS.exe";		
		}
		else 
		{
			if(globals.GCconex == 'conexiongestionmlegazpipruebas') rutabat = hfolder+"CURL_MODIFICARTICKETBAI_ML_OFICIAL.exe";
			else if(globals.GCconex == 'conexiongestiontmendizabalpruebas') rutabat = hfolder+"CURL_MODIFICARTICKETBAI_TM_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestionolabemarpruebas') rutabat = hfolder+"CURL_MODIFICARTICKETBAI_OLABEMAR_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestionsectorvertical') rutabat = hfolder+"CURL_MODIFICARTICKETBAI_SV_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestionamsorolla') rutabat = hfolder+"CURL_MODIFICARTICKETBAI_AMSOROLLA_OFICIAL.exe";	
			else if(globals.GCconex == 'conexiongestiontedelbi') rutabat = hfolder+"CURL_MODIFICARTICKETBAI_TEDELBI_OFICIAL.exe";	
			else rutabat = hfolder+"CURL_MODIFICARTICKETBAI_OFICIAL.exe";
		}
	}
	else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '48' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'VIZCAYA' || 
	gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'BIZCAIA'){
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) rutabat = hfolder+"CURL_MODIFICARTICKETBAI_VIZCAYA_PRUEBAS.exe";
		else rutabat = hfolder+"CURL_MODIFICARTICKETBAI_VIZCAYA_OFICIAL.exe";
	}
	else if(utils.stringLeft(gcparametrosaplicacion_to_parametrosaplicacion.codpostal,2) == '01' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ÁLAVA' || 
	gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ALAVA' || gcparametrosaplicacion_to_parametrosaplicacion.provincia == 'ARABA'){
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) rutabat = hfolder+"CURL_MODIFICARTICKETBAI_ALAVA_PRUEBAS.exe";
		else rutabat = hfolder+"CURL_MODIFICARTICKETBAI_ALAVA_OFICIAL.exe";
	}
	else{
		if(forms.dlg_ImpresionFacturasTBAIGC.entorno_ticketbai == 0) rutabat = hfolder+"CURL_MODIFICARTICKETBAI_PRUEBAS.exe";
		else rutabat = hfolder+"CURL_MODIFICARTICKETBAI_OFICIAL.exe";
	}
	//var rutabat = hfolder+"Comando_Curl_Servoy.bat";
	var f = plugins.file.convertToJSFile(rutabat);
	//var urlServer = "https://tbai-z.egoitza.gipuzkoa.eus/sarrerak/baja"; // 
	//var urlServer = "https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/anulacion"; // --- Entorno pruebas.
	
	//var resp = 'No existe el .bat';
	var resp = 'No existe el '+rutabat;
	if(f && f.exists())
	{
		var ruta = "C:\\TMP\\salida.xml";
		f = plugins.file.convertToJSFile(ruta);
		if(f && f.exists()) f.deleteFile()
		
		//curl --connect-timeout 60 -m 60 -s -S -L --header "Content-Type: application/xml;charset=UTF-8" -H "Accept: application/xml" --cert D:\CERTIF_AG\cgagfnmt.pem --key D:\CERTIF_AG\cgagfnmt_key.pem --data-binary @C:\TMP\ficheroenviocurl.xml  https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta --output c:\tmp\salida.xml -v
	
		//resp = application.executeProgram(rutabat, null, null, hfolder);
		
		resp = plugins.UserManager.executeCommand(rutabat);
		
		//resp = application.executeProgram(rutabat,[myXml,urlServer]);		
		//plugins.UserManager.executeCommand(rutabat+ ' --connect-timeout 60 -m 60 -s -S -L --header "Content-Type: application/xml;charset=UTF-8" -H "Accept: application/xml" --cert D:\CERTIF_AG\cgagfnmt.pem --key D:\CERTIF_AG\cgagfnmt_key.pem --data '+myXml+'  '+urlServer+'  --output c:\tmp\salida.xml -v')
		//resp = application.executeProgram("cmd /c  C:\\Windows\\System32\\cmd.exe");
		
		ruta = "C:\\TMP\\salida.xml";
		f = plugins.file.convertToJSFile(ruta);
		if(f && f.exists())
		{
			//leo el fichero firmado
			var texto = new Array();
			
			 var _oFR = new Packages.java.io.FileInputStream(ruta),
		     _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
		     _oBR = new Packages.java.io.BufferedReader(_oIR),
		     z = 0;
			 while ((texto[z] = _oBR.readLine()) != null) 
			 {
		         //texto[i] = _oBR.readLine();
		         z++;            
		     }
		     _oBR.close();
		     var linea = texto[5];
			 resp = utils.stringTrim(linea.slice(16, 18));
			 if(resp == '00')
			 {
			    linea = texto[6];
			    if(linea)
			    {
			    	resp += " - "+utils.stringTrim(linea.slice(21, 30));			    	
			    }
			 }
			 else
			 {
			   	 linea = texto[4];
			   	 resp = utils.stringTrim(linea.slice(16, 18));
			   	 linea = texto[5];
				 if(linea)
				 {
				   	resp += " - "+utils.stringTrim(linea.slice(21, 30))+ "\n";			    	
				 }
			   	 linea = texto[8];
			   	 if(linea)
			   	 {
			   		 resp += utils.stringTrim(linea.slice(20, 23));
			   		 linea = texto[9];
			   		 if(linea)
			    	 {
			    		 resp += " - "+utils.stringTrim(linea.slice(25, 77));
			    	 }
			   	 }
			 }
		}
		else 
		{
			resp = 'No generado fichero salida.xml';
		}
	}
	
	//var resp = plugins.Velocity.invokeService("TicketBAI",{ inPath: 'c:/tmp/ficheroenviocurl.xml', outPath: 'C:/tmp/salida.xml' });
	return resp
}

/**
 * TODO generated, please specify type and doc for the params
 * @param myxml
 *
 * @properties={typeid:24,uuid:"3D975CED-C26C-41D8-8358-D00AB25363E2"}
 */
function envioTBAI4(myxml){
	//var sURL = "https://tbai.egoitza.gipuzkoa.eus/sarrerak/alta"; // --- Entorno https://tbai.egoitza.gipuzkoa.eus/qr/?id=
	//var sURL = "https://tbai-z.prep.gipuzkoa.eus/sarrerak/alta"; // --- Entorno pruebas.
	var sURL = "https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta"
	/*var oJSON = {"employees":[
	    {"firstName":"John", "lastName":"Doe"},
	    {"firstName":"Anna", "lastName":"Smith"},
	    {"firstName":"Peter", "lastName":"Jones"}
	]};*/
	var certif = 'ARROYO GONZALEZ GREGORIO - 12710839G'//gcparametrosaplicacion_to_parametrosaplicacion.certifdigital;
	var certifpassword = gcparametrosaplicacion_to_parametrosaplicacion.clave_certifdigital;
	var sClient = plugins.http.createNewHttpClient(); // HTTP plugin object
	var sPoster = sClient.createPostRequest(sURL); // Post request object
	
	sPoster.addHeader("Content-Type", "application/xml");
	sPoster.addHeader('Accept', 'application/xml');
	sPoster.setCharset('UTF-8');
	//sPoster.setBodyContent(JSON.stringify(oJSON));
	sPoster.setBodyContent(myxml,'application/xml');
	sPoster.addFile(null,'XMLTBAI',myxml,'application/xml')
	
	
	application.output('Executing HTTP POST request and waiting for response from '+sURL, LOGGINGLEVEL.INFO);
	
	var sResponse = null;
	var sResponseData = "";
	var nHttpStatusCode = 0;
	var sCaughtException = '';
	
	 
	  
	try {
	    nHttpStatusCode = (sResponse = sPoster.executeRequest(certif, certifpassword,forms.dlg_ImpresionFacturasTBAIGC.macaddress,'tbai-prep.egoitza.gipuzkoa.eus:443')).getStatusCode(); // POST JSON request to API
	   		
	}
	catch (e) {
	
	    // This handles the case when the domain called does not exist or the server is down, etc.
	    // in this case there will be no HTTP status code returned so we must handle this differently 
	    // to prevent the Servoy application from crashing
	
	    sCaughtException = e['rhinoException'].getMessage();
	
	    if (-1 != sCaughtException.indexOf('TypeError: Cannot call method "getStatusCode"')) {
	        application.output('WARNING: Could not determine HTTP status code. The server might be down or its URL might be invalid.', LOGGINGLEVEL.WARNING);
	    }
	    else {
	        application.output('WARNING: caught unknown HTTP POST exception: '+sCaughtException, LOGGINGLEVEL.WARNING);
	    }
	
	}
	
	// SUCCESS!:
	
	if (200 == nHttpStatusCode) { // HTTP Ready Status
	
	    sResponseData = sResponse.getResponseBody(); // Get the server's response text
	    application.output('Successful, response received from server:',LOGGINGLEVEL.INFO);
	    application.output(sResponseData, LOGGINGLEVEL.INFO);
	
	    // put your code to handle a successful response from the server here
	
	}
	else {
	
	    // insert your code to handle various standard HTTP error codes (404 page not found, 403 Forbidden, etc.)
	
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param myXml
 *
 * @properties={typeid:24,uuid:"1933EED6-E97B-4541-9CEA-7440B35F60F4"}
 * @SuppressWarnings(deprecated)
 */
function envioTBAI99(myXml)
{
	var bearerToken = "abcde";

	//Create Post Request

	var url = "https://tbai-prep.egoitza.gipuzkoa.eus/WAS/HACI/HTBRecepcionFacturasWEB/rest/recepcionFacturas/alta";

	var client = plugins.http.createNewHttpClient();
	var postRequest = client.createPostRequest(url);
	postRequest.addHeader('Authentication', 'bearer ' + bearerToken);
	postRequest.addHeader('Accept', 'application/json');
	postRequest.addFile('File', "fileToBeUploaded1.txt", "e:/fileToBeUploaded1.txt");
	postRequest.forceMultipart(true);
	postRequest.usePreemptiveAuthentication(true);
	postRequest.setCharset('UTF-8');
	
	var response = postRequest.executeRequest("myUsername","myPassword");
	
	application.output("Response status code: " + response.getStatusCode());
	application.output("Response reason: " + response.getStatusReasonPhrase());
	application.output("Response body: " + response.getResponseBody());
	application.output("Response exception msg: " + response.getException());
	
	response.close();
	client.close();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 * @properties={typeid:24,uuid:"EC2064F3-82A0-4A28-88D5-4F65EDBBC919"}
 */
function EnviarEmailFactura(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		forms.FrmFacturasGC.onActionEnviarEmail(event)
	}
}
