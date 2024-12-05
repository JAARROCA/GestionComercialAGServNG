/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"CAD8248F-E01F-4BEA-B083-4F095EEFFD5B",variableType:-4}
 */
var Letras = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

//,'GB'

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"0A21FB7F-E7BC-434B-9DDB-AED5124B6B9D",variableType:-4}
 */
var UE = new Array('DE','AT','BE','BG','CY','HR','DK','SK','SI','EE','FI','FR','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','CZ','RO','SE');

/**
 *
 * @properties={typeid:24,uuid:"724C5E40-62F3-4AF6-AD18-AC947ADA6934"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Impresion Facturas').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"F580BFD7-3E3E-4A65-A100-31CCC19DC6A0"}
 * @SuppressWarnings(wrongparameters)
 * 
 * @AllowToRunInFind
 */
function btn_ok()
{	
	var desdeeje = forms.dlg_ImpresionFacturasGC.DesdeEje
	if(desdeeje == null || desdeeje == '') desdeeje = 0
	var desdeser = forms.dlg_ImpresionFacturasGC.DesdeSer
	if(desdeser == null || desdeser == '') desdeser = '';
	var desdenup = forms.dlg_ImpresionFacturasGC.DesdeNup
	if(desdenup == null || desdenup == '') desdenup = 1
	var hastaeje = forms.dlg_ImpresionFacturasGC.HastaEje
	if(hastaeje == null || hastaeje == '') hastaeje = 99999
	var hastaser = forms.dlg_ImpresionFacturasGC.HastaSer
	if(hastaser == null || hastaser == '') hastaser = 'ZZ';
	var hastanup = forms.dlg_ImpresionFacturasGC.HastaNup
	if(hastanup == null || hastanup == '') hastanup = 9999999999
	var desdecli = forms.dlg_ImpresionFacturasGC.DesdeCliente
	if(desdecli == null || desdecli == '') desdecli = 1
	var hastacli = forms.dlg_ImpresionFacturasGC.HastaCliente
	if(hastacli == null || hastacli == '') hastacli = 9999999999
	var fprof = forms.dlg_ImpresionFacturasGC.FacturaProForma;
	
	if(forms.dlg_ImpresionFacturasGC.FacturaE == 1)
	{
		var query = "select facturae from parametrosaplicacion where nºempresa = 1";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		
		var permiso = dataset.getValue(1,1);
		
		if(!permiso)
		{
			globals.GCshowWarningDialog('La genereción de Facturas Electrónicas (FACTURAE) en formato xml no esta contratado. \n\nPónganse en contacto con AG Informática para contratarlo.', null, null, null, null, null)
		}
		else
		{
			query = "select distinct(clie_cfa) from tbfacturacabecera "+
					"WHERE (tbFacturaCabecera.eje_cfa >= "+desdeeje+
				     " AND tbFacturaCabecera.eje_cfa <= "+hastaeje+") "+
				     "AND (tbFacturaCabecera.ser_cfa >= '"+desdeser+"' "+
				     "AND tbFacturaCabecera.ser_cfa <= '"+hastaser+"') "+
				     "AND (tbFacturaCabecera.nup_cfa >= "+desdenup+
				     " AND tbFacturaCabecera.nup_cfa <= "+hastanup+") "+
				     "AND (tbFacturaCabecera.clie_cfa BETWEEN "+desdecli+" AND "+hastacli+")";
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
			var rows = dataset.getMaxRowIndex()
			if(rows > 1)
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Para generar la Factura Electrónica debes elegir facturas de un único cliente.','¡Error!')
				else globals.GCshowErrorDialog('Para generar la Factura Electrónica debes elegir facturas de un único cliente.', null, null, null, null, null)
			}
			else
			{
				var vers = forms.dlg_ImpresionFacturasGC.versFacturaE;
				switch (vers)
				{
					case 0:
					{
						GenerarXML32(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
						break;
					}
					case 1:
					{
						GenerarXML32(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
						break;
					}
					case 2:
					{
						GenerarXML32(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
						break;
					}
					case 3:
					{
						GenerarXML321(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
						break;
					}
					case 4:
					{
						GenerarXML322(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
						break;
					}
					default: break; 
				}
				/*if(vers == 0)
				{
					GenerarXML32(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
				}
				else if(vers == 1)
				{
					GenerarXML32(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
				}
				else if(vers == 2)
				{
					GenerarXML32(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
				}
				else if(vers == 3)
				{
					GenerarXML321(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli)
				}*/
			}
		}
	}
	else
	{
		globals.btn_runJasperReportFacturaVentas(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli,fprof)
	
	//application.getWindow('Impresion Albaranes').hide();
	//globals.GCenableBgElements();	
	
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"F6CE79AD-A572-4E77-9BAB-E584F2052B0C"}
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
 * @properties={typeid:24,uuid:"A2527451-AC07-4854-8CE4-4B57FE5CFA9F"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Impresion Facturas').hide();
	globals.GCenableBgElements();
	return true
}

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"0859E013-102A-49F4-A461-846E870C98C4"}
 */
var xml = '';

/**
 * Callback method when form is destroyed.
 * 
 * 
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"165BB66B-2128-4D79-8BDC-38D5F801F348"}
 */
function GenerarXML30()
{	
	
}

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E2D264BE-8290-4C3D-ACD9-0C30BB55D88C",variableType:-4}
 */
var SchemaVersion;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3AC04D55-3876-450F-96EA-CE07CA707619",variableType:-4}
 */
var InvoiceIssuerType;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"FF21E736-C49D-46E6-B45B-98D953D46ADD",variableType:-4}
 */
var BatchIdentifier;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"1C10B00B-4ACA-4923-94B9-A1CD95122E07",variableType:-4}
 */
var InvoicesCount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3C82731D-319E-4299-AD4D-ECE48C6E547C",variableType:-4}
 */
var TotalInvoicesAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3C56AF5C-EE67-468F-BCF1-D2CB0AA52A46",variableType:-4}
 */
var TotalAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"304A2542-687C-40DD-A084-C3CB0026C3E0",variableType:-4}
 */
var TotalOutstandingAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E27113B7-9295-4C57-9DBA-B40B3E56B2F5",variableType:-4}
 */
var TotalExecutableAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"709A4FBC-2AC2-43F8-B193-A32B31E87944",variableType:-4}
 */
var InvoiceCurrencyCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"6C958096-6722-40DB-A8C3-D4D154D66148",variableType:-4}
 */
var Parties;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"16846141-9BB0-46F9-99F6-DA36E33205D0",variableType:-4}
 */
var SellerParty;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"BD19C5B8-EEF8-4F39-B1B2-ED76DD7ACA70",variableType:-4}
 */
var TaxIdentification;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"5238260D-2508-43A6-A11D-9824A7B196A5",variableType:-4}
 */
var PersonTypeCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C5680FD7-D8FE-4FE5-9CB3-CE4C43349F3E",variableType:-4}
 */
var ResidenceTypeCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"52173AAA-DCCC-422A-9426-9CE6CD105F4D",variableType:-4}
 */
var TaxIdentificationNumber;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"CC6CCCCC-F95E-4786-9A5C-EA201D8AFDB7",variableType:-4}
 */
var LegalEntity;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"EE11E990-E495-4D3D-BFE3-364DFCD76FA4",variableType:-4}
 */
var CorporateName;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"D37D16B9-3C81-4AB2-A000-34CD9E828B28",variableType:-4}
 */
var TradeName;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"1446EF08-4B25-4ED1-B42F-10D6EFCE98C8",variableType:-4}
 */
var RegistrationData;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"24CF70AB-05BA-4017-A11A-DA1829172F1E",variableType:-4}
 */
var Book;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"734C737D-2E3F-4AFB-A021-1EA996B79C08",variableType:-4}
 */
var RegisterOfCompaniesLocation;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"D0BC0147-2867-4D79-B25B-561C9EABDF28",variableType:-4}
 */
var Sheet;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"6F10D7B7-1BCE-4CD2-AAB9-663D41EC0FBB",variableType:-4}
 */
var Folio;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"D6341A6E-B041-4F2E-9BCB-681102941362",variableType:-4}
 */
var Section;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A760B141-9CEB-440A-9842-DF497ED07CB3",variableType:-4}
 */
var Volume;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"9C7B1ED6-08FB-4418-ACD8-B6565AA72B87",variableType:-4}
 */
var AdditionalRegistrationData;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"7091261D-ABA1-4176-8B9F-5D7C38B12990",variableType:-4}
 */
var AddressInSpain;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C171CF43-2C50-4865-9E4A-6FDF2A760A72",variableType:-4}
 */
var Address;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A2EAF148-FD98-4055-8339-29021F5498EB",variableType:-4}
 */
var PostCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E1F2A84F-405B-4191-B070-0C72CEC37063",variableType:-4}
 */
var Town;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"264E379F-E796-4461-9A85-01C2C0D0BB9B",variableType:-4}
 */
var Province;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"06D0BF45-BCB8-44FB-ACBB-FB0C27E6F691",variableType:-4}
 */
var CountryCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E4470563-945C-4C7F-8784-8A4A1EDE8871",variableType:-4}
 */
var ContactDetails;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"5AAA4ACF-A0FF-42AE-B9BA-CCEAADC2969A",variableType:-4}
 */
var Telephone;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A2F3476D-EB9B-428A-A52B-8B5FFF362ECD",variableType:-4}
 */
var TeleFax;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"26365E3A-660D-4BCF-88A4-DC18D9E0FCE7",variableType:-4}
 */
var WebAddress;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3E943064-7AAD-413C-9DFB-F025643942FE",variableType:-4}
 */
var ElectronicMail;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"F2E02390-EFC5-4331-9D60-4675354D6029",variableType:-4}
 */
var BuyerParty;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"6F9A0111-E3A3-47F5-959A-75FB69503055",variableType:-4}
 */
var AdministrativeCentres;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"2422DE49-67EF-417F-9135-BE135D8A426B",variableType:-4}
 */
var AdministrativeCentre;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3E978553-991B-48B3-8B3D-3B1CFFF87646",variableType:-4}
 */
var Name;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"1F401B80-D760-4EB0-9FA1-406F71A2B5CB",variableType:-4}
 */
var OverseasAddress;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3F02FA30-54C4-4BEC-A5BD-E05140C46F21",variableType:-4}
 */
var PostCodeAndTown;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"CFEB8F44-3376-4198-984D-2805568D4B5A",variableType:-4}
 */
var Individual;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"79B3EB32-37D5-4459-BC13-C06E7A5B02B6",variableType:-4}
 */
var FirstSurname;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"8C72139F-EC03-4E12-9709-6F8276EF911C",variableType:-4}
 */
var Invoices;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"99ACF78E-AEAB-4298-A4AC-7BD57144A473",variableType:-4}
 */
var PaymentDetails;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"5AC9FA10-2B9E-42D4-8FAA-C238F42CD1A6",variableType:-4}
 */
var Installment;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E3BD8221-A66F-4B40-8C1E-E74B348FD01D",variableType:-4}
 */
var InstallmentDueDate;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"7546077D-47D5-47C6-9547-0188E77E3450",variableType:-4}
 */
var InstallmentAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A7715098-3F8A-4366-AD3A-510276756523",variableType:-4}
 */
var PaymentMeans;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"D1FE6B15-FD6A-4F47-969E-07D5599C863F",variableType:-4}
 */
var AccountToBeCredited;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"CD0DEBBC-DE4E-4E63-B451-AEC0E53330FE",variableType:-4}
 */
var IBAN;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"BE2AB525-931B-4B60-B3BD-4694F851B2C5",variableType:-4}
 */
var BIC;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"B5750555-7303-41F4-B324-5B8F340EC9F4",variableType:-4}
 */
var Invoice;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"05907CD0-6A19-46A9-9F7A-F4D822DF7162",variableType:-4}
 */
var InvoiceHeader;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"721CB727-500D-416D-9CBD-AFD6850F84C2",variableType:-4}
 */
var InvoiceNumber;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"2F448305-6B69-440E-9962-9D705B3A131E",variableType:-4}
 */
var InvoiceSeriesCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A78EF031-733B-476B-9295-DE665E390269",variableType:-4}
 */
var InvoiceDocumentType;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"EEE47500-929D-4892-91AD-0AC021F57B95",variableType:-4}
 */
var InvoiceClass;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DE90A068-EE58-49F3-BED8-46B81164D9EB",variableType:-4}
 */
var InvoiceIssueData;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"B271A17A-A4AF-41D1-A2B1-5E009DCCB682",variableType:-4}
 */
var IssueDate;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"16DDE8AA-5C12-48EA-BFAF-FF7A3AE9A201",variableType:-4}
 */
var OperationDate;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"7487AA64-5BAD-422C-87B8-DA927D4BA686",variableType:-4}
 */
var PlaceOfIssue;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"2A6A46E2-F259-401D-AC88-AD61D2C6BB20",variableType:-4}
 */
var PlaceOfIssueDescription;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"6BF518A7-1E38-403A-AE97-74D40E56C463",variableType:-4}
 */
var TaxCurrencyCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DF884631-879E-4327-B311-C7620640E8BF",variableType:-4}
 */
var LanguageName;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"B92C78B6-1AB6-45C2-A7D9-63DF45A3775A",variableType:-4}
 */
var TaxesOutputs;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E8098248-E5BA-4002-835C-9A512EDCAE95",variableType:-4}
 */
var Tax;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"4906F2B1-2CA7-4975-B84F-958F516D3E42",variableType:-4}
 */
var TaxTypeCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A562BFD1-9F0E-41BF-8BFF-6FE3E9A8706B",variableType:-4}
 */
var TaxRate;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"5EEDADA7-94C4-4016-B93F-8B5CA5AC6359",variableType:-4}
 */
var TaxableBase;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C2D56D25-032D-4939-A8D8-B5F460A5205A",variableType:-4}
 */
var TaxAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"62EA6F3F-2FBE-4D30-8FE3-6CB5DB560B19",variableType:-4}
 */
var EquivalenceSurcharge;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"F9F70DE4-7C66-409C-BCA8-A9B695BC5A8F",variableType:-4}
 */
var EquivalenceSurchargeAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A441BD9C-87F8-44D8-A66E-9457686A17F1",variableType:-4}
 */
var InvoiceTotals;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"FC20045A-5644-479D-B785-D5F5F08FF1F6",variableType:-4}
 */
var TotalGrossAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"0446FAE5-DC44-4640-9C14-985949F366E8",variableType:-4}
 */
var TotalGeneralDiscounts;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A3188440-9D44-4D99-BF11-CF8D95D1EA22",variableType:-4}
 */
var TotalGeneralSurcharges;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"4147CC92-6E64-4B62-A1BA-93723AC7E66E",variableType:-4}
 */
var TotalGrossAmountBeforeTaxes;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"8375EA9C-2B08-4C7F-B2C5-23AB05C73894",variableType:-4}
 */
var TotalTaxOutputs;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"7C9BD952-873B-4473-B05E-F90B2DD4F0B6",variableType:-4}
 */
var TotalTaxesWithheld;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"826B83DD-AB3A-44CB-BBD6-6F506AEEFACC",variableType:-4}
 */
var InvoiceTotal;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"6BE0C6F7-1B19-46DF-96E9-05EA8D795C7C",variableType:-4}
 */
var InvoiceLine;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"443F3C4D-AD20-4B92-864A-3F5D305EE4CC",variableType:-4}
 */
var ItemDescription;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"870AEDE1-93D7-4A28-B36C-D6500A166C5D",variableType:-4}
 */
var Quantity;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A517516F-FAFA-415B-9481-8C4B205FF173",variableType:-4}
 */
var UnitOfMeasure;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"20594B44-38A4-4DE0-8B3E-B049CDE1CF6A",variableType:-4}
 */
var UnitPriceWithoutTax;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"33B27C48-BA66-4FA7-9410-DA01782C3747",variableType:-4}
 */
var TotalCost;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"4988BFE6-689C-44CC-8210-DCF34C2591CD",variableType:-4}
 */
var DiscountsAndRebates;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"60EDDBBC-1EC0-4310-BCFC-2062FA48BB52",variableType:-4}
 */
var Discount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"14A0F310-AB3B-47C8-AA53-EB185BB2E254",variableType:-4}
 */
var DiscountReason;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"10F8C3CB-9F4A-476C-9121-876B002112AF",variableType:-4}
 */
var DiscountRate;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"641424C0-7C85-47FF-8C37-49E9641E4386",variableType:-4}
 */
var DiscountAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"FA341CF5-691A-46BA-A7D4-078498C80C53",variableType:-4}
 */
var Charges;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"EEFCA4D5-E6A3-4E2A-916A-869EF86C039C",variableType:-4}
 */
var Charge;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E0919E11-2526-418A-9760-AED1664B12AB",variableType:-4}
 */
var ChargeReason;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"87280864-418D-4A0B-8000-10AC903F2C67",variableType:-4}
 */
var ChargeRate;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"70BF2AC8-734D-4F11-AC13-D86A90922A56",variableType:-4}
 */
var ChargeAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"2CC97F4B-F37A-456C-BE4A-2F95C3636CF0",variableType:-4}
 */
var GrossAmount;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4FA68FFE-52DE-4B8B-A012-2A3FA31A4D6C"}
 */
var newxml = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7863B7C8-3FC3-468D-8F9F-2180F6542ECE"}
 */
var htm = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A8E0F82B-1612-4D08-B7FD-D58E8DC22FDD"}
 */
var serverURL = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E3BC7052-3A9A-4641-864C-28FA2328F178"}
 */
var nom = '';

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3F4A779F-C6BA-4443-8A57-946DC76A80C9",variableType:-4}
 */
var Document;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5FD8531E-1F17-49E0-ACC2-2C9EFD003EDD"}
 */
var telefonocliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"375FD044-A1A4-4587-BCE0-1D81ED0E61A1"}
 */
var webcliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9DD2BFDC-52FB-4DCD-A07E-CA20E759846D"}
 */
var emailcliente = '';

/**
 * Callback method when form is destroyed.
 * @param {Number} DEJE
 * @param {String} DSER
 * @param {Number} DNUP
 * @param {Number} HEJE
 * @param {String} HSER
 * @param {Number} HNUP
 * @param {Number} DCLI
 * @param {Number} HCLI
 *
 * @properties={typeid:24,uuid:"6D4DB7BC-358B-4F5F-B382-B85C8E5FB4FD"}
 * @SuppressWarnings(unused)
 */
function GenerarXML321(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
{	
	nfacturas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
	/*query = "select count(*),isnull(sum(impnee_cfa),0) from tbfacturacabecera "+
			"WHERE (tbFacturaCabecera.eje_cfa >= "+DEJE+
		     " AND tbFacturaCabecera.eje_cfa <= "+HEJE+") "+
		     "AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
		     "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') "+
		     "AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
		     " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") "+
		     "AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+")";
	var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
	var numfacturas = dataset2.getValue(1,1);
	var sumfacturas = dataset2.getValue(1,2);*/
	
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
	if(dataset.getMaxRowIndex() > 0)
	{			
				/*var cifempresa = dataset.getValue(1,8);
				var tipopersona = TipoPersona(cifempresa);					
				var pais = dataset.getValue(1,21);
				var razonsocial = dataset.getValue(1,3);
				var regmercantil = dataset.getValue(1,17);
				var hoja = dataset.getValue(1,20);
				var folio = dataset.getValue(1,19);
				var seccion = '';
				var tomo = dataset.getValue(1,18);
				var direccion = dataset.getValue(1,5);
				var codigopostal = dataset.getValue(1,4);
				var ciudad = dataset.getValue(1,6);
				var provincia = dataset.getValue(1,7);
				var telefono = dataset.getValue(1,9);
				var fax = dataset.getValue(1,10);
				var web = dataset.getValue(1,12);
				var correo = dataset.getValue(1,11);
				var primerafactura = DEJE.toString() + utils.numberFormat(DNUP,'00000') + DSER;
				var ultimafactura = HEJE.toString() + utils.numberFormat(HNUP,'00000') + HSER;
				var cifcliente = dataset.getValue(1,90);
				var tipopersonacliente = TipoPersona(cifcliente)	
				var paiscliente = dataset.getValue(1,99);
				//var contactocliente = dataset.getValue(1,85);
				var desccliente = dataset.getValue(1,79);
				var direccioncliente = dataset.getValue(1,80);
				var poblacioncliente = dataset.getValue(1,81);
				var provinciacliente = dataset.getValue(1,82);
				var codpostalcliente = dataset.getValue(1,83);
				var razonsocialcliente = dataset.getValue(1,84);
				var fechacobro = dataset.getValue(1,27);
				//var formapago = dataset.getValue(1,30);
				var cuentaabono = dataset.getValue(1,16);
				var bic = dataset.getValue(1,107);
				*/
				
				datosempresa(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
				
				/*query = "select pai_iso3 from pais where pai_iso2 ='"+paiscliente+"'";				
				var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
				var paisclienteiso3 = dataset2.getValue(1,1)
				*/
				getpaiso3()
							
				xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
				
				Document = <Facturae/>
				ns = new Namespace('fe',"http://www.facturae.es/Facturae/2014/v3.2.1/Facturae")
				Document.addNamespace(ns)							
				
				ns = new Namespace('ds','http://www.w3.org/2000/09/xmldsig#')
				Document.addNamespace(ns)
				//var Document = <Facturae xmlns:ds="http://www.w3.org/2000/09/xmldsig#"/>
				//var ns = new Namespace('xs','http://www.w3.org/2001/XMLSchema')
				//Document.addNamespace(ns)		
				FileHeader = <FileHeader/>//Cabecera del fichero xml
					SchemaVersion = <SchemaVersion/>
					/*Código que indica versión utilizada. Existirá compatibilidad de versiones.*/
					SchemaVersion.appendChild('3.2.1')
					Modality = <Modality/>
						/*Modalidad. Individual o Lote. Si es "individual" (I) los
						  importes de los campos del grupo Batch coincidirán con sus
						  correspondientes campos del grupo InvoiceTotals y el
						  campo InvoicesCount tendrá siempre el valor "1". Si es
						  "lote" (L), el valor del campo InvoicesCount será siempre	> "1".*/
					if(numfacturas > 1) Modality.appendChild('L')
					else if(numfacturas == 1) Modality.appendChild('I')
					InvoiceIssuerType = <InvoiceIssuerType/>
						/*Tipo Emisor Factura. Puede tomar 3 valores (EM, RE y TE), 
						 que se describen como “Proveedor (antes denominado emisor)”,
						 “Destinatario (antes denominado cliente o receptor)” y 
						 “Tercero”, respectivamente. 
						 Si toma el valor "TE" el grupo ThirdParty será obligatorio 
						 cumplimentarlo en todos sus apartados.*/
						 InvoiceIssuerType.appendChild('RE') 
					/*var ThirdParty = <ThirdParty/>
						 var TaxIdentification = <TaxIdentification/>
						 //Identificación fiscal.
						 	var PersonTypeCode = <PersonTypeCode/>
						 		PersonTypeCode.appendChild(tipopersona)
							var ResidenceTypeCode = <ResidenceTypeCode/>
						 		ResidenceTypeCode.appendChild('R')
							var TaxIdentificationNumber = <TaxIdentificationNumber/>
						 		TaxIdentificationNumber.appendChild(pais + cifempresa)						 		
							TaxIdentification.appendChild(PersonTypeCode)
						    TaxIdentification.appendChild(ResidenceTypeCode)
							TaxIdentification.appendChild(TaxIdentificationNumber)
							var LegalEntity = <LegalEntity/>
								//Persona jurídica y otras.
									var CorporateName = <CorporateName/>
									//Razón Social.
									CorporateName.appendChild(razonsocial)
									var TradeName = <TradeName/>
									//Nombre Comercial.
									var RegistrationData = <RegistrationData/>
									//Datos Registrales: Inscripción Registro, Tomo, Folio,…
										var Book = <Book/>
										//Libro
										Book.appendChild('')
										var RegisterOfCompaniesLocation = <RegisterOfCompaniesLocation/>
										// Registro Mercantil.
										RegisterOfCompaniesLocation.appendChild(utils.stringLeft(regmercantil,20));
										var Sheet = <Sheet/>
										//Hoja
										Sheet.appendChild(utils.stringLeft(hoja, 20))
										var Folio = <Folio/>
										//Folio
										Folio.appendChild(utils.stringLeft(folio,20))
										var Section = <Section/>
										//Sección.
										Section.appendChild(utils.stringLeft(seccion,20))
										var Volume = <Volume/>
										//Tomo
										Volume.appendChild(utils.stringLeft(tomo,20))
										var AdditionalRegistrationData = <AdditionalRegistrationData/>
										//Otros datos registrales.
										
										RegistrationData.appendChild(Book)
										RegistrationData.appendChild(RegisterOfCompaniesLocation)
										RegistrationData.appendChild(Sheet)
										RegistrationData.appendChild(Folio)
										RegistrationData.appendChild(Section)
										RegistrationData.appendChild(Volume)
										RegistrationData.appendChild(AdditionalRegistrationData)
									var AddressInSpain = <AddressInSpain/>
									//Dirección Nacional. Dirección en España.
										var Address = <Address/>
										//Dirección. Tipo de vía, nombre, número, piso…
										Address.appendChild(utils.stringLeft(direccion, 80))
										var PostCode = <PostCode/>
										//Código Postal asignado por Correos.
										PostCode.appendChild(utils.stringLeft(codigopostal, 5))
										var Town = <Town/>
										//Población. Correspondiente al C.P.
										Town.appendChild(utils.stringLeft(ciudad, 50))
										var Province = <Province/>
										//Provincia. Donde está situada la Población.
										Province.appendChild(utils.stringLeft(provincia, 20))
										var CountryCode = <CountryCode/>
										CountryCode.appendChild('ESP')											
										AddressInSpain.appendChild(Address)
										AddressInSpain.appendChild(PostCode)
										AddressInSpain.appendChild(Town)
										AddressInSpain.appendChild(Province)
										AddressInSpain.appendChild(CountryCode)										
										var ContactDetails = <ContactDetails/>
											//Datos de contacto.
											var Telephone = <Telephone/>
											//Teléfono. Número de teléfono completo con prefijos del país.
											Telephone.appendChild(utils.stringLeft(('+34'+telefono), 15))
											var TeleFax = <TeleFax/>
											//Teléfono. Número de teléfono completo con prefijos del país.
											if(fax) TeleFax.appendChild(utils.stringLeft(('+34'+fax), 15))											
											var WebAddress = <WebAddress/>
											//Página web. URL de la dirección de Internet.
											WebAddress.appendChild(utils.stringLeft(web, 60))
											var ElectronicMail = <ElectronicMail/>
											//Correo electrónico. Dirección de correo electrónico.
											ElectronicMail.appendChild(utils.stringLeft(correo, 60))
											ContactDetails.appendChild(Telephone)
											ContactDetails.appendChild(TeleFax)
											ContactDetails.appendChild(WebAddress)
											ContactDetails.appendChild(ElectronicMail)										
									LegalEntity.appendChild(CorporateName)
									LegalEntity.appendChild(TradeName)
									LegalEntity.appendChild(RegistrationData)
									LegalEntity.appendChild(AddressInSpain)		
									LegalEntity.appendChild(ContactDetails)								
						 ThirdParty.appendChild(TaxIdentification)
						 ThirdParty.appendChild(LegalEntity)*/
						 Batch = <Batch/>
						 		BatchIdentifier = <BatchIdentifier/>
						 		/*Identificador del lote. Concatenación del nº de documento del emisor con
						 		  el número de la primera factura y el número de serie caso de existir.*/
						 		BatchIdentifier.appendChild(utils.stringLeft((primerafactura+ultimafactura), 70))
						 		InvoicesCount = <InvoicesCount/>
						 		/*Número total de facturas. Refleja, cuando es lote, el número de facturas 
						 		 del mismo. Siempre será valor "1" cuando el campo Modality (Modalidad)
						 		 tenga el valor "I".*/
						 		InvoicesCount.appendChild(numfacturas)
								TotalInvoicesAmount = <TotalInvoicesAmount/>
						 		/*Total facturas. Suma de los importes InvoiceTotal del Fichero. Este importe
						 		 lo es a efectos de total de factura y fiscales, sin tener en cuenta subvenciones,
						 		 anticipos y/o retenciones que pudieran haberse practicado.*/
						 		 	TotalAmount = <TotalAmount/>
						 		 	if(sumfacturas) TotalAmount.appendChild(sumfacturas.toFixed(2))
								TotalInvoicesAmount.appendChild(TotalAmount)
								TotalOutstandingAmount = <TotalOutstandingAmount/>
						 		/*Total a pagar. Suma de los importes TotalOutstandingAmount del Fichero, 
						 		 hasta ocho decimales. Es el importe que efectivamente se adeuda, una vez 
						 		 descontados los anticipos y sin tener en cuenta las retenciones.*/
									TotalAmount = <TotalAmount/>
									if(sumfacturas) TotalAmount.appendChild(sumfacturas.toFixed(2))
								TotalOutstandingAmount.appendChild(TotalAmount)
								TotalExecutableAmount = <TotalExecutableAmount/>
						 		/*Total a Ejecutar. Sumatorio de las diferencias de los importes 
						 		 (TotalOutstandingAmount y WithholdingAmount) del fichero = Sumatorio de los Importes
						 		 TotalExecutableAmount, hasta ocho decimales. Es el importe que se adeuda minorado 
						 		 en un posible importe retenido en garantía de cumplimientos contractuales.*/
									TotalAmount = <TotalAmount/>
									if(sumfacturas) TotalAmount.appendChild(sumfacturas.toFixed(2))
								TotalExecutableAmount.appendChild(TotalAmount)
								InvoiceCurrencyCode = <InvoiceCurrencyCode/>
								/*Código ISO 4217:2001 Alpha-3 de la moneda en la que se emite la factura. 
								 Si difiere de la moneda EURO o del campo ExchangeRateDetails será obligatorio 
								 indicar el contravalor y el tipo/fecha de cambio para los campos de base imponible 
								 y cuota, retenida como repercutida, así como en los totales TotalInvoicesAmount, 
								 TotalOutstandingAmount, y TotalExecutableAmount.*/
								InvoiceCurrencyCode.appendChild('EUR')
								Batch.appendChild(BatchIdentifier)
								Batch.appendChild(InvoicesCount)
								Batch.appendChild(TotalInvoicesAmount)
								Batch.appendChild(TotalOutstandingAmount)
								Batch.appendChild(TotalExecutableAmount)
								Batch.appendChild(InvoiceCurrencyCode)						
					FileHeader.appendChild(SchemaVersion)
					FileHeader.appendChild(Modality)
					FileHeader.appendChild(InvoiceIssuerType)
					//FileHeader.appendChild(ThirdParty)	
					FileHeader.appendChild(Batch)	
					Parties = <Parties/>
					/*Sujetos - Datos del emisor y receptor de la factura*/
						SellerParty = <SellerParty/>
						/*Emisor. Datos básicos del fichero. Son comunes a la factura o facturas que se incluyen.*/
							TaxIdentification = <TaxIdentification/>
							//Identificación fiscal.
							PersonTypeCode = <PersonTypeCode/>
					 		/*Tipo de persona. Física o Jurídica. "F" - Física; "J" - Jurídica.*/
					 		PersonTypeCode.appendChild(tipopersona)
					 		ResidenceTypeCode = <ResidenceTypeCode/>
					 		/*Identificación del tipo de residencia y/o extranjería. "E" - Extranjero; 
					 		 * "R" - Residente; "U" - Residente en la Unión Europea.*/
					 		ResidenceTypeCode.appendChild('R')
						    TaxIdentificationNumber = <TaxIdentificationNumber/>
					 		/*Código de Identificación Fiscal del sujeto. Se trata de las composiciones 
					 		 *de NIF/CIF que marca la Administración correspondiente (precedidas de las 
					 		 *dos letras del país en el caso de operaciones intracomunitarias, es decir, 
					 		 *cuando comprador y vendedor tienen domicilio fiscal en estados miembros de la UE 
					 		 *distintos).*/
							if(utils.stringLeft(cifempresa,2) == pais) var codcif = cifempresa;
							else codcif = pais+cifempresa;
							TaxIdentificationNumber.appendChild(codcif)					 		
						TaxIdentification.appendChild(PersonTypeCode)
					    TaxIdentification.appendChild(ResidenceTypeCode)
						TaxIdentification.appendChild(TaxIdentificationNumber)
						LegalEntity = <LegalEntity/>
								//Persona jurídica y otras.
									CorporateName = <CorporateName/>
									//Razón Social.
									CorporateName.appendChild(razonsocial)
									TradeName = <TradeName/>
									//Nombre Comercial.
									RegistrationData = <RegistrationData/>
									//Datos Registrales: Inscripción Registro, Tomo, Folio,…
										Book = <Book/>
										//Libro
										Book.appendChild('')
										RegisterOfCompaniesLocation = <RegisterOfCompaniesLocation/>
										// Registro Mercantil.
										RegisterOfCompaniesLocation.appendChild(utils.stringLeft(regmercantil,20));
										Sheet = <Sheet/>
										//Hoja
										Sheet.appendChild(utils.stringLeft(hoja, 20))
										Folio = <Folio/>
										//Folio
										Folio.appendChild(utils.stringLeft(folio,20))
										Section = <Section/>
										//Sección.
										Section.appendChild(utils.stringLeft(seccion,20))
										 Volume = <Volume/>
										//Tomo
										Volume.appendChild(utils.stringLeft(tomo,20))
										AdditionalRegistrationData = <AdditionalRegistrationData/>
										//Otros datos registrales.
										AdditionalRegistrationData.appendChild('Sin Datos')
										
										RegistrationData.appendChild(Book)
										RegistrationData.appendChild(RegisterOfCompaniesLocation)
										RegistrationData.appendChild(Sheet)
										RegistrationData.appendChild(Folio)
										RegistrationData.appendChild(Section)
										RegistrationData.appendChild(Volume)
										RegistrationData.appendChild(AdditionalRegistrationData)
									AddressInSpain = <AddressInSpain/>
									//Dirección Nacional. Dirección en España.
									Address = <Address/>
									//Dirección. Tipo de vía, nombre, número, piso…
									Address.appendChild(utils.stringLeft(direccion, 80))
									PostCode = <PostCode/>
									//Código Postal asignado por Correos.
									PostCode.appendChild(utils.stringLeft(codigopostal, 5))
									Town = <Town/>
									//Población. Correspondiente al C.P.
									Town.appendChild(utils.stringLeft(ciudad, 50))
									Province = <Province/>
									//Provincia. Donde está situada la Población.
									Province.appendChild(utils.stringLeft(provincia, 20))
									CountryCode = <CountryCode/>
									/*Código País. Código según la ISO 3166-1:2006 Alpha-3.
									Al ser un domicilio ubicado en España siempre será "ESP".*/
									CountryCode.appendChild('ESP')											
									AddressInSpain.appendChild(Address)
									AddressInSpain.appendChild(PostCode)
									AddressInSpain.appendChild(Town)
									AddressInSpain.appendChild(Province)
									AddressInSpain.appendChild(CountryCode)										
									ContactDetails = <ContactDetails/>
									//Datos de contacto.
										Telephone = <Telephone/>
										//Teléfono. Número de teléfono completo con prefijos del país.
										Telephone.appendChild(utils.stringLeft(('+34'+telefono), 15))
										TeleFax = <TeleFax/>
										//Teléfono. Número de teléfono completo con prefijos del país.
										if(fax) TeleFax.appendChild(utils.stringLeft(('+34'+fax), 15))											
										WebAddress = <WebAddress/>
										//Página web. URL de la dirección de Internet.
										WebAddress.appendChild(utils.stringLeft(web, 60))
										ElectronicMail = <ElectronicMail/>
										//Correo electrónico. Dirección de correo electrónico.
										ElectronicMail.appendChild(utils.stringLeft(correo, 60))
										ContactDetails.appendChild(Telephone)
										ContactDetails.appendChild(TeleFax)
										ContactDetails.appendChild(WebAddress)
										ContactDetails.appendChild(ElectronicMail)										
								LegalEntity.appendChild(CorporateName)
								LegalEntity.appendChild(TradeName)
								LegalEntity.appendChild(RegistrationData)
								LegalEntity.appendChild(AddressInSpain)		
								LegalEntity.appendChild(ContactDetails)	
						
						SellerParty.appendChild(TaxIdentification)
						SellerParty.appendChild(LegalEntity)
						BuyerParty = <BuyerParty/>
							TaxIdentification = <TaxIdentification/>
								PersonTypeCode = <PersonTypeCode/>
								//Tipo de persona. Física o Jurídica. "F" - Física; "J" - Jurídica.
								PersonTypeCode.appendChild(tipopersonacliente)
								ResidenceTypeCode = <ResidenceTypeCode/>
								//Identificación del tipo de residencia y/o extranjería. 
								//"E" - Extranjero; 
								//"R" - Residente; 
								//"U" - Residente en la Unión Europea.
								if(paiscliente == 'ES' || paiscliente == null || paiscliente == '') var tiponacionalidad = 'R'
								else tiponacionalidad = TipoNacionalidad(paiscliente)
								ResidenceTypeCode.appendChild(tiponacionalidad)
								TaxIdentificationNumber = <TaxIdentificationNumber/>
								if(utils.stringLeft(cifcliente,2) == paiscliente) codcif = cifcliente;
								else codcif = paiscliente+cifcliente;
								//Código de Identificación Fiscal del sujeto. Se trata de las composiciones de NIF/CIF que marca la Administración correspondiente (precedidas de las dos letras del país en el caso de operaciones intracomunitarias, es decir, cuando comprador y vendedor tienen domicilio fiscal en estados miembros de la UE distintos).
								TaxIdentificationNumber.appendChild(utils.stringLeft(codcif,30))								
							TaxIdentification.appendChild(PersonTypeCode)
							TaxIdentification.appendChild(ResidenceTypeCode)
							TaxIdentification.appendChild(TaxIdentificationNumber)
							if(tipopersonacliente == 'J')
							{
								LegalEntity = <LegalEntity/>
									CorporateName = <CorporateName/>
									if(razonsocialcliente) CorporateName.appendChild(utils.stringLeft(razonsocialcliente,40))
									else CorporateName.appendChild(utils.stringLeft(desccliente,40))
									/*				<RegistrationData>
													<RegisterOfCompaniesLocation>Guipuzcoa el 28 de E</RegisterOfCompaniesLocation>
													<Sheet>10059, inscripcion 1</Sheet>
													<Folio>129</Folio>
													<Volume>859 de Sociedades S.</Volume>
													<AdditionalRegistrationData>Sin Datos</AdditionalRegistrationData>
												</RegistrationData>
									*/
									AddressInSpain = <AddressInSpain/>
										Address = <Address/>
										Address.appendChild(utils.stringLeft(direccioncliente,80))
										PostCode = <PostCode/>
										PostCode.appendChild(utils.stringLeft(codpostalcliente,5))
										Town = <Town/>
										Town.appendChild(utils.stringLeft(poblacioncliente,50))
										Province = <Province/>
										Province.appendChild(utils.stringLeft(provinciacliente,20))
										CountryCode = <CountryCode/>
										CountryCode.appendChild('ESP')
									AddressInSpain.appendChild(Address)
									AddressInSpain.appendChild(PostCode)
									AddressInSpain.appendChild(Town)
									AddressInSpain.appendChild(Province)										
									AddressInSpain.appendChild(CountryCode)
									ContactDetails = <ContactDetails/>
										Telephone = <Telephone/>
										Telephone.appendChild(telefonocliente)
										WebAddress = <WebAddress/>
										WebAddress.appendChild(webcliente)
										ElectronicMail = <ElectronicMail/>
										ElectronicMail.appendChild(emailcliente)
									ContactDetails.appendChild(Telephone)
									ContactDetails.appendChild(WebAddress)
									ContactDetails.appendChild(ElectronicMail)
								LegalEntity.appendChild(CorporateName)
								LegalEntity.appendChild(AddressInSpain)
								LegalEntity.appendChild(ContactDetails)
							BuyerParty.appendChild(TaxIdentification)
							BuyerParty.appendChild(LegalEntity)
							}
							else
							{
								AdministrativeCentres = <AdministrativeCentres/>
									//Centros
									AdministrativeCentre = <AdministrativeCentre/>
									//Centro
										Name = <Name/>
										//Nombre de la persona responsable o de relación del centro.
										if(razonsocialcliente) Name.appendChild(utils.stringLeft(razonsocialcliente,40))
										else Name.appendChild(utils.stringLeft(desccliente,40))
										AdministrativeCentre.appendChild(Name)
										if(paiscliente == 'ES')
										{
											AddressInSpain = <AddressInSpain/>
												Address = <Address/>
												Address.appendChild(utils.stringLeft(direccioncliente,80))
												PostCode = <PostCode/>
												PostCode.appendChild(utils.stringLeft(codpostalcliente,5))
												Town = <Town/>
												Town.appendChild(utils.stringLeft(poblacioncliente,50))
												Province = <Province/>
												Province.appendChild(utils.stringLeft(provinciacliente,20))
												CountryCode = <CountryCode/>
												CountryCode.appendChild('ESP')
											AddressInSpain.appendChild(Address)
											AddressInSpain.appendChild(PostCode)
											AddressInSpain.appendChild(Town)
											AddressInSpain.appendChild(Province)										
											AddressInSpain.appendChild(CountryCode)										
											AdministrativeCentre.appendChild(AddressInSpain)
										}
										else
										{
											OverseasAddress = <OverseasAddress/>
											//Dirección en el extranjero.
												Address = <Address/>
												Address.appendChild(utils.stringLeft(direccioncliente,80))
												PostCodeAndTown = <PostCodeAndTown/>
												PostCodeAndTown.appendChild(utils.stringLeft(poblacioncliente + ' ' +codpostalcliente,50))
												Province = <Province/>
												Province.appendChild(provinciacliente)
												CountryCode = <CountryCode/>
												CountryCode.appendChild(paisclienteiso3)
											OverseasAddress.appendChild(Address)
											OverseasAddress.appendChild(PostCodeAndTown)
											OverseasAddress.appendChild(Province)
											OverseasAddress.appendChild(CountryCode)										
											AdministrativeCentre.appendChild(OverseasAddress)
										}
										
									AdministrativeCentres.appendChild(AdministrativeCentre)
									Individual = <Individual/>
										//Persona física.		
										Name = <Name/>
										//Nombre de la persona responsable o de relación del centro.
										if(razonsocialcliente) Name.appendChild(utils.stringLeft(razonsocialcliente,40))
										else Name.appendChild(utils.stringLeft(desccliente,40))
										FirstSurname = <FirstSurname/>
										//Nombre de la persona responsable o de relación del centro.
										FirstSurname.appendChild(utils.stringLeft('',40))
										Individual.appendChild(Name)
										Individual.appendChild(FirstSurname)
										if(paiscliente == 'ES')
										{
											AddressInSpain = <AddressInSpain/>
											Address = <Address/>
											Address.appendChild(utils.stringLeft(direccioncliente,80))
											PostCode = <PostCode/>
											PostCode.appendChild(utils.stringLeft(codpostalcliente,5))
											Town = <Town/>
											Town.appendChild(utils.stringLeft(poblacioncliente,50))
											Province = <Province/>
											Province.appendChild(utils.stringLeft(provinciacliente,20))
											CountryCode = <CountryCode/>
											CountryCode.appendChild('ESP')
											AddressInSpain.appendChild(Address)
											AddressInSpain.appendChild(PostCode)
											AddressInSpain.appendChild(Town)
											AddressInSpain.appendChild(Province)										
											AddressInSpain.appendChild(CountryCode)										
											Individual.appendChild(AddressInSpain)
										}
										else
										{
											OverseasAddress = <OverseasAddress/>
											//Dirección en el extranjero.
												Address = <Address/>
												Address.appendChild(utils.stringLeft(direccioncliente,80))
												PostCodeAndTown = <PostCodeAndTown/>
												PostCodeAndTown.appendChild(utils.stringLeft(poblacioncliente + ' ' +codpostalcliente,50))
												Province = <Province/>
												Province.appendChild(provinciacliente)
												CountryCode = <CountryCode/>
												CountryCode.appendChild(paisclienteiso3)
											OverseasAddress.appendChild(Address)
											OverseasAddress.appendChild(PostCodeAndTown)
											OverseasAddress.appendChild(Province)
											OverseasAddress.appendChild(CountryCode)										
											Individual.appendChild(OverseasAddress)
										}
										
							BuyerParty.appendChild(TaxIdentification)
							BuyerParty.appendChild(AdministrativeCentres)		
							BuyerParty.appendChild(Individual)
							}
					Parties.appendChild(SellerParty)
					Parties.appendChild(BuyerParty)
					Invoices = <Invoices/>
					//Conjunto de facturas que contiene el fichero. Para todos los elementos numéricos, los cálculos se efectuarán siempre redondeando al número de decimales correspondientes.
					var NFactura = null;
					var NFacturaAnterior = null;
					
					for(var i=1;i<=dataset.getMaxRowIndex();i++)
					{
						NFactura = dataset.getValue(i,23)+utils.numberFormat(dataset.getValue(i,25),'00000')+dataset.getValue(i,24);
						
						
						if(NFactura != NFacturaAnterior)
						{	
							if(i>1)
							{
								PaymentDetails = <PaymentDetails/>
								//Datos de pago.
									Installment = <Installment/>
									//Vencimiento.
										InstallmentDueDate = <InstallmentDueDate/>
										//Fechas en las que se deben atender los pagos. ISO 8601:2004.
										InstallmentDueDate.appendChild(utils.dateFormat(fechacobro,'yyyy-MM-dd'))
										InstallmentAmount = <InstallmentAmount/>
										//Importe a satisfacer en cada plazo. Siempre con dos decimales.
										if(impnee) InstallmentAmount.appendChild(impnee.toFixed(2))
										PaymentMeans = <PaymentMeans/>
										//Cada vencimiento/importe podrá tener un medio de pago concreto.
										PaymentMeans.appendChild('04')
										/*01 Al contado
										  02 Recibo domiciliado
										  03 Recibo
										  04 Transferencia*/
										AccountToBeCredited = <AccountToBeCredited/>
										//Cuenta de abono. Único formato admitido. Cuando la forma de pago (PaymentMeans) sea "transferencia" este dato será obligatorio.
											IBAN = <IBAN/>
											//IBAN. Único formato admitido para identificar la cuenta. (Recomendado)
											IBAN.appendChild(cuentaabono)		
											BIC = <BIC/>
											//Código SWIFT. Será obligatorio rellenar las 11 posiciones, utilizando los caracteres XXX cuando no se informe de la sucursal.
											BIC.appendChild(bic)
											AccountToBeCredited.appendChild(IBAN)
											AccountToBeCredited.appendChild(BIC)
										//var AccountToBeDebited = <AccountToBeDebited/>
											
										Installment.appendChild(InstallmentDueDate)
										Installment.appendChild(InstallmentAmount)
										Installment.appendChild(PaymentMeans)
										if(cuentaabono && bic && cuentaabono != '' && bic != '') Installment.appendChild(AccountToBeCredited)
									PaymentDetails.appendChild(Installment)
								Invoice.appendChild(InvoiceHeader)
								Invoice.appendChild(InvoiceIssueData)
								Invoice.appendChild(TaxesOutputs)
								Invoice.appendChild(InvoiceTotals)
								Invoice.appendChild(Items)
								Invoice.appendChild(PaymentDetails)
								Invoices.appendChild(Invoice)
								
								/*var fechafactura = dataset.getValue(i,26);
								var impbre = dataset.getValue(i,37);
								var depp = dataset.getValue(i,38);
								//var porcgfi = dataset.getValue(i,50);
								var impgfi = dataset.getValue(i,51);
								var impnee = dataset.getValue(i,49);
								var impbie = dataset.getValue(i,40);
								var piva = dataset.getValue(i,41);
								var cuotaiva = dataset.getValue(i,42);
								var impbie2 = dataset.getValue(i,43);
								var piva2 = dataset.getValue(i,44);
								var cuotaiva2 = dataset.getValue(i,45);
								var impbie3 = dataset.getValue(i,46);
								var piva3 = dataset.getValue(i,47);
								var cuotaiva3 = dataset.getValue(i,48);
								var impre = dataset.getValue(i,52);
								if(impre)
								{
									query = "select ivare from tbmaestrotipoiva "+
											"WHERE factor = "+piva;
									dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
									var porcimpre = dataset2.getValue(1,1)
								}
								var impre2 = dataset.getValue(i,53);
								if(impre2)
								{
									query = "select ivare from tbmaestrotipoiva "+
											"WHERE factor = "+piva2;
									dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
									var porcimpre2 = dataset2.getValue(1,1)
								}						
								var impre3 = dataset.getValue(i,54);
								if(impre3)
								{
									query = "select ivare from tbmaestrotipoiva "+
											"WHERE factor = "+piva3;
									dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
									var porcimpre3 = dataset2.getValue(1,1)
								}
								//var alb = dataset.getValue(i,60);
								//var lalb = dataset.getValue(i,61);
								var concepto = dataset.getValue(i,63)
								var cant = dataset.getValue(i,64)
								var imporlfa = dataset.getValue(i,73)
								var preclfa = dataset.getValue(i,65)
								var dtolfa = dataset.getValue(i,68)
								var impordtolfa = dataset.getValue(i,69)
								*/
								datoslineas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI,i)
							}
							else
							{
								/*fechafactura = dataset.getValue(i,26);
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
									dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
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
								//alb = dataset.getValue(i,60);
								//lalb = dataset.getValue(i,61);
								concepto = dataset.getValue(i,63)
								cant = dataset.getValue(i,64)
								imporlfa = dataset.getValue(i,73)
								preclfa = dataset.getValue(i,65)
								dtolfa = dataset.getValue(i,68)
								impordtolfa = dataset.getValue(i,69)
								*/
								datoslineas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI,i)
							}
							Invoice = <Invoice/>
							InvoiceHeader = <InvoiceHeader/>
								InvoiceNumber = <InvoiceNumber/>
									InvoiceNumber.appendChild(NFactura)
								InvoiceSeriesCode = <InvoiceSeriesCode/>
									if(fechafactura) InvoiceSeriesCode.appendChild(fechafactura.getFullYear().toString())
									else InvoiceSeriesCode.appendChild('')
								InvoiceDocumentType = <InvoiceDocumentType/>
									//Tipo documento factura. Puede tomar 3 valores (FC, FA y AF), 
									//que se describen como “Factura completa u ordinaria”, 
									//“Factura simplificada” y “Código sin uso desde la entrada en 
									//vigor del RD 1789/2010. Se mantiene por compatibilidad hacia atrás. 
									//Antes significaba autofactura. Para indicar que se trata de una 
									//factura expedida por el destinatario, se recomienda emplear 
									//el elemento InvoiceIssuerType empleando el valor RE, que significa 
									//Destinatario”, respectivamente.
									InvoiceDocumentType.appendChild('FC')
								InvoiceClass = <InvoiceClass/>
								//Clase de Factura. Puede tomar 6 valores (OO, OR, OC, CO, CR y CC), 
								//que se describen como “Original”, “Original rectificativa”, 
								//“Original recapitulativa”, “Duplicado original”, 
								//“Duplicado rectificativa” y “Duplicado recapitulativa”.	
									InvoiceClass.appendChild('OO')
								InvoiceHeader.appendChild(InvoiceNumber)
								InvoiceHeader.appendChild(InvoiceSeriesCode)
								InvoiceHeader.appendChild(InvoiceDocumentType)
								InvoiceHeader.appendChild(InvoiceClass)
							InvoiceIssueData = <InvoiceIssueData/>	
							//Datos de la emisión de la factura
								IssueDate = <IssueDate/>
								//Fecha de expedición. Fecha en la que se genera la factura con efectos 
								//fiscales. ISO 8601:2004. Esta fecha no podrá ser posterior a la fecha
								// de la firma electrónica.
								IssueDate.appendChild(utils.dateFormat(fechafactura,'yyyy-MM-dd'))
								OperationDate = <OperationDate/>
								//Fecha de Operación. Fecha en la que se realiza el servicio o se entrega 
								//el bien. ISO 8601:2004. Esta fecha solo será obligatoria si es distinta 
								//de la fecha de expedición.
								OperationDate.appendChild(utils.dateFormat(fechafactura,'yyyy-MM-dd'))
								PlaceOfIssue = <PlaceOfIssue/>
								//Lugar de expedición. Plaza en la que se expide el documento.
									PostCode = <PostCode/>
									PostCode.appendChild(utils.numberFormat(0,'00000'))
									PlaceOfIssueDescription = <PlaceOfIssueDescription/>
									//Texto del nombre del lugar.									
									
									PlaceOfIssue.appendChild(PostCode)
									PlaceOfIssue.appendChild(PlaceOfIssueDescription)
								InvoiceCurrencyCode = <InvoiceCurrencyCode/>
								//Moneda de la operación. Código ISO 4217:2001 Alpha-3 de la moneda en la que se emite la factura. Si la moneda de la operación difiere de la moneda del impuesto (EURO), los campos del contravalor ExchangeRate y
								//ExchangeRateDate deberán cumplimentarse, en cumplimiento del Artº 10.1 del Reglamento sobre facturación. RD 1496/2003 de 28 de Noviembre.
								InvoiceCurrencyCode.appendChild('EUR')
								TaxCurrencyCode = <TaxCurrencyCode/>
								//Moneda del Impuesto. Código ISO 4217:2001 Alpha-3 de la moneda en la que se liquida el impuesto.
								TaxCurrencyCode.appendChild('EUR')
								LanguageName = <LanguageName/>
								//Moneda del Impuesto. Código ISO 4217:2001 Alpha-3 de la moneda en la que se liquida el impuesto.
								LanguageName.appendChild('es')
								
							InvoiceIssueData.appendChild(IssueDate)
							InvoiceIssueData.appendChild(OperationDate)
							InvoiceIssueData.appendChild(PlaceOfIssue)
							InvoiceIssueData.appendChild(InvoiceCurrencyCode)
							InvoiceIssueData.appendChild(TaxCurrencyCode)
							InvoiceIssueData.appendChild(LanguageName)
							TaxesOutputs = <TaxesOutputs/>
							//Impuestos repercutidos.
								Tax = <Tax/>
								//Impuesto.
									TaxTypeCode = <TaxTypeCode/>
									//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
									//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
									TaxTypeCode.appendChild('01')
									TaxRate = <TaxRate/>
									//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
									if(piva) TaxRate.appendChild(piva.toFixed(2))
									TaxableBase = <TaxableBase/>
									//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
										TotalAmount = <TotalAmount/>
										//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
										//sobre facturación, RD 1496/2003 de 28 de Noviembre.
										if(impbie) TotalAmount.appendChild(impbie.toFixed(2))
									TaxableBase.appendChild(TotalAmount)
									TaxAmount = <TaxAmount/>
									//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
										TotalAmount = <TotalAmount/>
										//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
										if(cuotaiva) TotalAmount.appendChild(cuotaiva.toFixed(2))
									TaxAmount.appendChild(TotalAmount)
								Tax.appendChild(TaxTypeCode)
								Tax.appendChild(TaxRate)
								Tax.appendChild(TaxableBase)
								Tax.appendChild(TaxAmount)
									if(impre)
									{
										EquivalenceSurcharge = <EquivalenceSurcharge/>
										//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
										if(porcimpre) EquivalenceSurcharge.appendChild(porcimpre.toFixed(2))
										EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
										//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
											TotalAmount = <TotalAmount/>
											//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
											if(impre) TotalAmount.appendChild(impre.toFixed(2))
										EquivalenceSurchargeAmount.appendChild(TotalAmount)		
										
										Tax.appendChild(EquivalenceSurcharge)
										Tax.appendChild(EquivalenceSurchargeAmount)
									}
								TaxesOutputs.appendChild(Tax)
								if(impbie2)
								{
									Tax = <Tax/>
									//Impuesto.
										TaxTypeCode = <TaxTypeCode/>
										//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
										//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
										TaxTypeCode.appendChild('01')
										TaxRate = <TaxRate/>
										//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
										if(piva2) TaxRate.appendChild(piva2.toFixed(2))
										TaxableBase = <TaxableBase/>
										//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
											TotalAmount = <TotalAmount/>
											//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
											//sobre facturación, RD 1496/2003 de 28 de Noviembre.
											if(impbie2) TotalAmount.appendChild(impbie2.toFixed(2))
										TaxableBase.appendChild(TotalAmount)
										TaxAmount = <TaxAmount/>
										//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
											TotalAmount = <TotalAmount/>
											//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
											if(cuotaiva2) TotalAmount.appendChild(cuotaiva2.toFixed(2))
										TaxAmount.appendChild(TotalAmount)
									Tax.appendChild(TaxTypeCode)
									Tax.appendChild(TaxRate)
									Tax.appendChild(TaxableBase)
									Tax.appendChild(TaxAmount)
										if(impre2)
										{
											EquivalenceSurcharge = <EquivalenceSurcharge/>
											//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
											if(porcimpre2) EquivalenceSurcharge.appendChild(porcimpre2.toFixed(2))
											EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
											//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
												if(impre2) TotalAmount.appendChild(impre2.toFixed(2))
											EquivalenceSurchargeAmount.appendChild(TotalAmount)		
											
											Tax.appendChild(EquivalenceSurcharge)
											Tax.appendChild(EquivalenceSurchargeAmount)
										}
									TaxesOutputs.appendChild(Tax)
								}
								if(impbie3)
								{
									Tax = <Tax/>
									//Impuesto.
										TaxTypeCode = <TaxTypeCode/>
										//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
										//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
										TaxTypeCode.appendChild('01')
										TaxRate = <TaxRate/>
										//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
										if(piva3) TaxRate.appendChild(piva3.toFixed(2))
										TaxableBase = <TaxableBase/>
										//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
											TotalAmount = <TotalAmount/>
											//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
											//sobre facturación, RD 1496/2003 de 28 de Noviembre.
											if(impbie3) TotalAmount.appendChild(impbie3.toFixed(2))
										TaxableBase.appendChild(TotalAmount)
										TaxAmount = <TaxAmount/>
										//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
											TotalAmount = <TotalAmount/>
											//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
											if(cuotaiva3) TotalAmount.appendChild(cuotaiva3.toFixed(2))
										TaxAmount.appendChild(TotalAmount)
									Tax.appendChild(TaxTypeCode)
									Tax.appendChild(TaxRate)
									Tax.appendChild(TaxableBase)
									Tax.appendChild(TaxAmount)
										if(impre3)
										{
											EquivalenceSurcharge = <EquivalenceSurcharge/>
											//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
											if(porcimpre3) EquivalenceSurcharge.appendChild(porcimpre3.toFixed(2))
											EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
											//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
												if(impre3) TotalAmount.appendChild(impre3.toFixed(2))
											EquivalenceSurchargeAmount.appendChild(TotalAmount)		
											
											Tax.appendChild(EquivalenceSurcharge)
											Tax.appendChild(EquivalenceSurchargeAmount)
										}
									TaxesOutputs.appendChild(Tax)
								}
								
								InvoiceTotals = <InvoiceTotals/>
									TotalGrossAmount = <TotalGrossAmount/>
									//Total Importe Bruto. Suma total de importes brutos de los detalles de la factura. Hasta ocho decimales.
									if(impbre) TotalGrossAmount.appendChild(impbre.toFixed(2))
									TotalGeneralDiscounts = <TotalGeneralDiscounts/>
									//Total Importe Bruto. Suma total de importes brutos de los detalles de la factura. Hasta ocho decimales.
									TotalGeneralDiscounts.appendChild(globals.GCROUND(impbre*depp,2).toFixed(2))
									TotalGeneralSurcharges = <TotalGeneralSurcharges/>
									//Total general de cargos. Sumatorio de los importes de los diferentes campos GeneralSurcharges. Hasta ocho decimales.
									TotalGeneralSurcharges.appendChild(globals.GCROUND(impgfi,2).toFixed(2))
									TotalGrossAmountBeforeTaxes = <TotalGrossAmountBeforeTaxes/>
									//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
									TotalGrossAmountBeforeTaxes.appendChild(globals.GCROUND(impbie+impbie2+impbie3,2).toFixed(2))
									TotalTaxOutputs = <TotalTaxOutputs/>
									//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
									TotalTaxOutputs.appendChild(globals.GCROUND(cuotaiva+cuotaiva2+cuotaiva3+impre+impre2+impre3,2).toFixed(2))
									TotalTaxesWithheld = <TotalTaxesWithheld/>
									//Total impuestos retenidos. Hasta ocho decimals.
									TotalTaxesWithheld.appendChild(0)
									InvoiceTotal = <InvoiceTotal/>
									//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
									if(impnee) InvoiceTotal.appendChild(impnee.toFixed(2))
									TotalOutstandingAmount = <TotalOutstandingAmount/>
									//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
									if(impnee) TotalOutstandingAmount.appendChild(impnee.toFixed(2))
									TotalExecutableAmount = <TotalExecutableAmount/>
									//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
									if(impnee) TotalExecutableAmount.appendChild(impnee.toFixed(2))								
								InvoiceTotals.appendChild(TotalGrossAmount)
								InvoiceTotals.appendChild(TotalGeneralDiscounts)
								InvoiceTotals.appendChild(TotalGeneralSurcharges)
								InvoiceTotals.appendChild(TotalGrossAmountBeforeTaxes)
								InvoiceTotals.appendChild(TotalTaxOutputs)
								InvoiceTotals.appendChild(TotalTaxesWithheld)
								InvoiceTotals.appendChild(InvoiceTotal)
								InvoiceTotals.appendChild(TotalOutstandingAmount)
								InvoiceTotals.appendChild(TotalExecutableAmount)
								var Items = <Items/> 
								//Información detallada.
							
						}
						else
						{
							/*fechafactura = dataset.getValue(i,26);
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
								dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
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
							//alb = dataset.getValue(i,60);
							//lalb = dataset.getValue(i,61);
							concepto = dataset.getValue(i,63)
							cant = dataset.getValue(i,64)
							imporlfa = dataset.getValue(i,73)
							preclfa = dataset.getValue(i,65)
							dtolfa = dataset.getValue(i,68)
							impordtolfa = dataset.getValue(i,69)
							*/
							datoslineas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI,i)
						}
						
							InvoiceLine = <InvoiceLine/>
							//Líneas de detalle de la factura.
								/*var IssuerContractReference = <IssuerContractReference/>
								//Referencia del contrato del Emisor.
								var IssuerContractDate = <IssuerContractDate/>
								//Fecha del contrato del emisor.
								var IssuerTransactionReference = <IssuerTransactionReference/>
								//Referencia de la Operación, Número de Pedido, Contrato, etc. del Emisor.
								var IssuerTransactionDate = <IssuerTransactionDate/>
								//Fecha de operación / pedido del emisor.								
								var ReceiverContractReference = <ReceiverContractReference/>
								//Referencia del contrato del Receptor.
								var ReceiverContractDate = <ReceiverContractDate/>
								//Fecha del contrato del receptor.
								var ReceiverTransactionReference = <ReceiverTransactionReference/>
								//Referencia de la Operación, Número de Pedido, Contrato, etc. del Receptor.
								var ReceiverTransactionDate = <ReceiverTransactionDate/>
								//Fecha de operación / pedido del receptor.
								var FileReference = <FileReference/>
								//Referencia del expediente.
								var FileDate = <FileDate/>
								//Fecha del expediente.
								var SequenceNumber = <SequenceNumber/>
								//Número de secuencia o línea del pedido.
								var DeliveryNotesReferences = <DeliveryNotesReferences/>
								//Referencias de albaranes.
									var DeliveryNote = <DeliveryNote/>
									//Información del albarán.
										var DeliveryNoteNumber = <DeliveryNoteNumber/>
										//Número de referencia del albarán.
										if(alb) DeliveryNoteNumber.appendChild(alb);
										var DeliveryNoteDate = <DeliveryNoteDate/>
										//Fecha del albarán.
										if(alb)
										{
											query = 'select fecha_cal from calbaran where cod_cal ='+alb;
											dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
											var fecha_cal = dataset2.getValue(1,1)
											DeliveryNoteDate.appendChild(fecha_cal)
										}										
										DeliveryNote.appendChild(DeliveryNoteNumber)
										DeliveryNote.appendChild(DeliveryNoteDate)
									DeliveryNotesReferences.appendChild(DeliveryNote)*/
								ItemDescription = <ItemDescription/>
								//Descripción del bien o servicio.
								ItemDescription.appendChild(concepto)	
								Quantity = <Quantity/>
								//Cantidad. Número de Unidades servidas/prestadas.
								if(cant) Quantity.appendChild(cant)
								else Quantity.appendChild(globals.GCROUND(0,2).toFixed(2))	
								UnitOfMeasure = <UnitOfMeasure/>
								//Cantidad. Número de Unidades servidas/prestadas.
								UnitOfMeasure.appendChild('01')
								UnitPriceWithoutTax = <UnitPriceWithoutTax/>
								//Precio de la unidad de bien o servicio servido/prestado, en la moneda indicada en la Cabecera de la Factura. Siempre sin Impuestos. Hasta ocho decimales.
								if(preclfa) UnitPriceWithoutTax.appendChild(preclfa.toFixed(2))
								else UnitPriceWithoutTax.appendChild(globals.GCROUND(0,2).toFixed(2))	
								TotalCost = <TotalCost/>
								//Coste Total. Resultado: Quantity x UnitPriceWithoutTax Hasta ocho decimales
								if(imporlfa) TotalCost.appendChild(imporlfa)
								else TotalCost.appendChild(globals.GCROUND(0,2).toFixed(2))	
								
								DiscountsAndRebates = <DiscountsAndRebates/>
									//Descuentos.
										Discount = <Discount/>
										//Descuento.
											DiscountReason = <DiscountReason/>
											DiscountReason.appendChild('Descuento')
											DiscountRate = <DiscountRate/>
											DiscountRate.appendChild(globals.GCROUND(dtolfa,2).toFixed(2))
											DiscountAmount = <DiscountAmount/>
											DiscountAmount.appendChild(globals.GCROUND(impordtolfa,2).toFixed(2))
											Discount.appendChild(DiscountReason)
											Discount.appendChild(DiscountRate)
											Discount.appendChild(DiscountAmount)
								DiscountsAndRebates.appendChild(Discount)
								Charges = <Charges/>	
								//Cargos.
									Charge = <Charge/>	
									//Cargo
										ChargeReason = <ChargeReason/>
										//Concepto por el que se aplica el cargo.
										ChargeReason.appendChild('Cargo')
										ChargeRate = <ChargeRate/>
										//Porcentaje a cargar sobre el TIB. Los porcentajes se reflejan con hasta 8 decimales.
										ChargeRate.appendChild(0)
										ChargeAmount = <ChargeAmount/>
										//Importe a cargar sobre el TIB. Hasta 8 decimales.
										ChargeAmount.appendChild(0)
										Charge.appendChild(ChargeReason)
										Charge.appendChild(ChargeRate)
										Charge.appendChild(ChargeAmount)
								Charges.appendChild(Charge)
								GrossAmount = <GrossAmount/>
									if(imporlfa) GrossAmount.appendChild(imporlfa.toFixed(2))
									else GrossAmount.appendChild(globals.GCROUND(0,2).toFixed(2))	
								TaxesOutputs = <TaxesOutputs/>
								//Impuestos retenidos. Es una secuencia de elementos, cada uno de los cuales contiene la información de un impuesto retenido.
									Tax = <Tax/>										
										TaxTypeCode = <TaxTypeCode/>
										TaxTypeCode.appendChild('01')
										TaxRate = <TaxRate/>
										TaxRate.appendChild(piva.toFixed(2))
										TaxableBase = <TaxableBase/>
											TotalAmount = <TotalAmount/>
											TotalAmount.appendChild(impbie.toFixed(2))
											TaxableBase.appendChild(TotalAmount)
										TaxAmount = <TaxAmount/>
											TotalAmount = <TotalAmount/>
											TotalAmount.appendChild(cuotaiva.toFixed(2))
											TaxAmount.appendChild(TotalAmount)
										Tax.appendChild(TaxTypeCode)
										Tax.appendChild(TaxRate)
										Tax.appendChild(TaxableBase)
										Tax.appendChild(TaxAmount)
										if(impre)
										{
											EquivalenceSurcharge = <EquivalenceSurcharge/>
											//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
											EquivalenceSurcharge.appendChild(porcimpre.toFixed(2))
											EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
											//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(impre.toFixed(2))
											EquivalenceSurchargeAmount.appendChild(TotalAmount)		
											
											Tax.appendChild(EquivalenceSurcharge)
											Tax.appendChild(EquivalenceSurchargeAmount)
										}
									TaxesOutputs.appendChild(Tax)
									if(impbie2)
									{
										Tax = <Tax/>
										//Impuesto.
											TaxTypeCode = <TaxTypeCode/>
											//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
											//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
											TaxTypeCode.appendChild('01')
											TaxRate = <TaxRate/>
											//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
											TaxRate.appendChild(piva2.toFixed(2))
											TaxableBase = <TaxableBase/>
											//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
												//sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(impbie2.toFixed(2))
											TaxableBase.appendChild(TotalAmount)
											TaxAmount = <TaxAmount/>
											//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(cuotaiva2.toFixed(2))
											TaxAmount.appendChild(TotalAmount)
										Tax.appendChild(TaxTypeCode)
										Tax.appendChild(TaxRate)
										Tax.appendChild(TaxableBase)
										Tax.appendChild(TaxAmount)
											if(impre2)
											{
												EquivalenceSurcharge = <EquivalenceSurcharge/>
												//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
												EquivalenceSurcharge.appendChild(porcimpre2.toFixed(2))
												EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
												//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
													TotalAmount = <TotalAmount/>
													//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
													TotalAmount.appendChild(impre2.toFixed(2))
												EquivalenceSurchargeAmount.appendChild(TotalAmount)		
												
												Tax.appendChild(EquivalenceSurcharge)
												Tax.appendChild(EquivalenceSurchargeAmount)
											}
										TaxesOutputs.appendChild(Tax)
									}
									if(impbie3)
									{
										Tax = <Tax/>
										//Impuesto.
											TaxTypeCode = <TaxTypeCode/>
											//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
											//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
											TaxTypeCode.appendChild('01')
											TaxRate = <TaxRate/>
											//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
											TaxRate.appendChild(piva3.toFixed(2))
											TaxableBase = <TaxableBase/>
											//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
												//sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(impbie3.toFixed(2))
											TaxableBase.appendChild(TotalAmount)
											TaxAmount = <TaxAmount/>
											//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(cuotaiva3.toFixed(2))
											TaxAmount.appendChild(TotalAmount)
										Tax.appendChild(TaxTypeCode)
										Tax.appendChild(TaxRate)
										Tax.appendChild(TaxableBase)
										Tax.appendChild(TaxAmount)
											if(impre3)
											{
												EquivalenceSurcharge = <EquivalenceSurcharge/>
												//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
												EquivalenceSurcharge.appendChild(porcimpre3.toFixed(2))
												EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
												//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
													TotalAmount = <TotalAmount/>
													//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
													TotalAmount.appendChild(impre3.toFixed(2))
												EquivalenceSurchargeAmount.appendChild(TotalAmount)		
												
												Tax.appendChild(EquivalenceSurcharge)
												Tax.appendChild(EquivalenceSurchargeAmount)
											}
										TaxesOutputs.appendChild(Tax)
									}
									if(cant && cant != 0 && imporlfa && imporlfa != 0)
									{										
										/*InvoiceLine.appendChild(IssuerContractReference)
										InvoiceLine.appendChild(IssuerContractDate)
										InvoiceLine.appendChild(IssuerTransactionReference)
										InvoiceLine.appendChild(IssuerTransactionDate)
										InvoiceLine.appendChild(ReceiverContractReference)
										InvoiceLine.appendChild(ReceiverContractDate)
										InvoiceLine.appendChild(ReceiverTransactionReference)
										InvoiceLine.appendChild(ReceiverTransactionDate)
										InvoiceLine.appendChild(FileReference)
										InvoiceLine.appendChild(FileDate)
										InvoiceLine.appendChild(SequenceNumber)
										InvoiceLine.appendChild(DeliveryNotesReferences)*/
										InvoiceLine.appendChild(ItemDescription)
										InvoiceLine.appendChild(Quantity)
										InvoiceLine.appendChild(UnitOfMeasure)
										InvoiceLine.appendChild(UnitPriceWithoutTax)
										InvoiceLine.appendChild(TotalCost)	
										InvoiceLine.appendChild(DiscountsAndRebates)
										InvoiceLine.appendChild(Charges)
										InvoiceLine.appendChild(GrossAmount)
										InvoiceLine.appendChild(TaxesOutputs)								
									Items.appendChild(InvoiceLine)
									}
						
								
						NFacturaAnterior = NFactura;
					}
					
					PaymentDetails = <PaymentDetails/>
					//Datos de pago.
						Installment = <Installment/>
						//Vencimiento.
							InstallmentDueDate = <InstallmentDueDate/>
							//Fechas en las que se deben atender los pagos. ISO 8601:2004.
							InstallmentDueDate.appendChild(utils.dateFormat(fechacobro,'yyyy-MM-dd'))
							InstallmentAmount = <InstallmentAmount/>
							//Importe a satisfacer en cada plazo. Siempre con dos decimales.
							InstallmentAmount.appendChild(impnee.toFixed(2))
							PaymentMeans = <PaymentMeans/>
							//Cada vencimiento/importe podrá tener un medio de pago concreto.
							PaymentMeans.appendChild('04')
							/*01 Al contado
							  02 Recibo domiciliado
							  03 Recibo
							  04 Transferencia*/
							AccountToBeCredited = <AccountToBeCredited/>
							//Cuenta de abono. Único formato admitido. Cuando la forma de pago (PaymentMeans) sea "transferencia" este dato será obligatorio.
								IBAN = <IBAN/>
								//IBAN. Único formato admitido para identificar la cuenta. (Recomendado)
								IBAN.appendChild(cuentaabono)		
								BIC = <BIC/>
								//Código SWIFT. Será obligatorio rellenar las 11 posiciones, utilizando los caracteres XXX cuando no se informe de la sucursal.
								BIC.appendChild(bic)
								AccountToBeCredited.appendChild(IBAN)
								AccountToBeCredited.appendChild(BIC)
							//var AccountToBeDebited = <AccountToBeDebited/>
								
							Installment.appendChild(InstallmentDueDate)
							Installment.appendChild(InstallmentAmount)
							Installment.appendChild(PaymentMeans)
							if(cuentaabono && bic && cuentaabono != '' && bic != '') Installment.appendChild(AccountToBeCredited)
						PaymentDetails.appendChild(Installment)
					Invoice.appendChild(InvoiceHeader)
					Invoice.appendChild(InvoiceIssueData)
					Invoice.appendChild(TaxesOutputs)
					Invoice.appendChild(InvoiceTotals)
					Invoice.appendChild(Items)
					Invoice.appendChild(PaymentDetails)
					Invoices.appendChild(Invoice)
				Document.appendChild(FileHeader)
				Document.appendChild(Parties)
				Document.appendChild(Invoices)
				
					
				xml += Document
				//var newxml = xml.toString().replace(' xmlns=""','')
				newxml = utils.stringReplace(xml.toString(),' xmlns=""','')
				newxml = utils.stringReplace(newxml,'<Facturae','<fe:Facturae')
				newxml = utils.stringReplace(newxml, '</Facturae','</fe:Facturae')
				//var xml2 = new XML(newxml)
				application.output(newxml);
				
				
				/*var jsFile = plugins.file.createTempFile('SEPA','.xml');
				
				var success = plugins.file.writeXMLFile(jsFile ,newxml);
				if (!success) application.output('Could not write file.');
				//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
				//{
					plugins.file.streamFilesToServer(jsFile)
					plugins.file.openFile(jsFile,"_blank",application/xml)
				/*}
				else 
				{
					plugins.file.streamFilesToServer(jsFile,doImportFile)
				}*/
				htm = newxml
				if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					/*var d = utils.dateFormat(new Date(),'dd-MM-yyyy');
					d = utils.stringReplace(d,'-','');
					var js = plugins.file.showFileSaveDialog(d+'_FacturaE321.xml', 'Selecciona localización para salvar el fichero');
					if (!js) return;			
								
					// Write the file in the selected location
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');*/
					
					var js = "c:\\tmp\\FacturaE321_"+forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa+'.xml';
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
					
					//Pruebas
					//application.executeProgramInBackground("D:\\Program Files\\AutoFirma\\AutoFirma\\AutoFirma.exe", ["sign -i D:\\descargas\\FacturaE3214705352130645925646.xml -o D:\\tmp\\test-firma.signed -store windows -filter subject.contains:12710839G"]);
					//application.executeProgramInBackground("D:\\Program Files\\Autofirma\\Autofirma\\AutoFirmaCommandLine.exe", ["sign ", "-certgui ", "-i D:\\descargas\\FacturaE3214705352130645925646.xml ", "-o D:\\tmp\\test-firma.signed ", "-format XadES ", "-store windows ", "-filter subject.contains:12710839G ", "-xml ",  "-config xadesSignFormat='XAdES Enveloped' "]);
					//application.executeProgramInBackground('cmd /c D:\\Program Files\\Autofirma\\Autofirma\\AutoFirmaCommandLine.exe sign -certgui -i D:\\descargas\\FacturaE3214705352130645925646.xml -o D:\\tmp\\test-firma.signed -format XadES -store windows -filter subject.contains:12710839G -xml  -config xadesSignFormat="XAdES Enveloped"');
					//application.executeProgram("D:\\Program Files\\Autofirma\\Autofirma\\AutoFirmaCommandLine.exe sign -certgui -i D:\\descargas\\FacturaE3214705352130645925646.xml -o D:\\tmp\\test-firma.signed -format XadES -store windows -filter subject.contains:12710839G -xml  -config xadesSignFormat=\"XAdES Enveloped\"");
					//var str = application.executeProgram("C:\\Users\\goyoarroyo\\AutoFirmaCommandLine.exe", [" sign", " -certgui", " -i C:\\Users\\goyoarroyo\\FacturaE3214705352130645925646.xml", " -o C:\\Users\\goyoarroyo\\test-firma.signed ", " -format XadES", " -store windows", " -filter subject.contains:12710839G", " -xml",  " -config xadesSignFormat=\"XAdES Enveloped\""], null, "C:\\Users\\goyoarroyo\\");
					
					/*
					//is the full path of the program to be executed.
					var ruta_app = "D:\\Program Files\\AutoFirma\\AutoFirma\\AutoFirmaCommandLine.exe";
					
					//Arguments passed to the program
					var params = [" sign", " -certgui", " -i C:\\Users\\goyoarroyo\\FacturaE321.xml", " -o C:\\Users\\goyoarroyo\\test-firma.signed ", " -format XadES", " -store windows", " -filter subject.contains:12710839G", " -xml",  " -config xadesSignFormat=\"XAdES Enveloped\""];
					
					//directory from which your program start executing.
					var startdirectory = "D:\\Program Files\\AutoFirma\\AutoFirma\\";
					
					//environment variables passed to the program
					var enviromentvariables = null;
					
					var str = application.executeProgram(ruta_app, params, null, startdirectory);
					*/
					//plugins.UserManager.executeCommand("c:\\Servoy\\Comando_Autofirma.bat",[js/*"C:\\Users\\goyoarroyo\\FacturaE321.xml"*/, "C:\\tmp\\test-firma.signed"]);
					var rutabat = "c:\\Servoy\\Comando_Autofirma_Servoy.bat";
					var f = plugins.file.convertToJSFile(rutabat);
					if(f && f.exists())
					{
						application.output(rutabat)
						var rutaficherosigned = "C:\\tmp\\FacturaE321_"+forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa+"_firma.signed";
						var str = application.executeProgram(rutabat,[js, rutaficherosigned]);
						application.output(str)
						application.output(rutaficherosigned)						
						// Fichero guardado en c:\\tmp rutaficherosigned
						globals.GCshowInfoDialog("Fichero de Factura generado en "+rutaficherosigned, null, null, null, null, null)
					}
					else
					{
						rutabat = "C:\\Program Files\\AutoFirma\\AutoFirma\\Comando_Autofirma_Servoy.bat";
						f = plugins.file.convertToJSFile(rutabat);
						if(f && f.exists())
						{
							application.output(rutabat)
							rutaficherosigned = "C:\\tmp\\FacturaE321_"+forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa+"_firma.signed";
							str = application.executeProgram(rutabat,[js, rutaficherosigned]);
							application.output(str)
							application.output(rutaficherosigned)
							// Fichero guardado en c:\\tmp rutaficherosigned
							globals.GCshowInfoDialog("Fichero de Factura generado en "+rutaficherosigned, null, null, null, null, null)
						}
						else
						{
							rutabat = "D:\\Program Files\\AutoFirma\\AutoFirma\\Comando_Autofirma_Servoy.bat";
							f = plugins.file.convertToJSFile(rutabat);
							if(f && f.exists())
							{
								application.output(rutabat)
								rutaficherosigned = "C:\\tmp\\FacturaE321_"+forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa+"_firma.signed";
								str = application.executeProgram(rutabat,[js, rutaficherosigned]);
								application.output(str)
								application.output(rutaficherosigned)
								// Fichero guardado en c:\\tmp rutaficherosigned
								globals.GCshowInfoDialog("Fichero de Factura generado en "+rutaficherosigned, null, null, null, null, null)
							}
							else
							{
								application.output("Falta el fichero Comando_Autofirma_Servoy.bat")
								globals.GCshowErrorDialog("Falta el fichero Comando_Autofirma_Servoy.bat", null, null, null, null, null)
							}
						}
						
					}
					//var params = [" sign", " -certgui", " -i C:\\Users\\goyoarroyo\\FacturaE321.xml", " -o C:\\Users\\goyoarroyo\\test-firma.signed ", " -format XadES", " -store windows", " -filter subject.contains:12710839G", " -xml",  " -config xadesSignFormat=\"XAdES Enveloped\""];
					//var str = application.executeProgram("D:\\Program Files\\AutoFirma\\AutoFirma\\AutoFirmaCommandLine.exe", params, null, "D:\\Program Files\\AutoFirma\\AutoFirma");
					//var str = application.executeProgram("D:\\Program Files\\AutoFirma\\AutoFirma\\AutoFirmaCommandLine.exe", [" sign", " -certgui", " -i C:\\Users\\goyoarroyo\\FacturaE3214705352130645925646.xml", " -o C:\\Users\\goyoarroyo\\test-firma.signed ", " -format XadES", " -store windows", " -filter subject.contains:12710839G", " -xml",  " -config xadesSignFormat=\"XAdES Enveloped\""], null, "D:\\Program Files\\AutoFirma\\AutoFirma");
				}
				else
				{
					/*nom = 'FacturaE321.xml';
								
					
					serverURL = application.getServerURL() 
					js = serverURL + "\\uploads\\" + nom
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');*/
					
					var jsFile = plugins.file.createTempFile('FacturaE321_'+forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa+'_','.xml');
					var name = jsFile.getName();
					js = plugins.file.getDefaultUploadLocation() +"\\"+ name;//jsFile.getAbsolutePath();
					var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
					if (!success) application.output('Could not write file.');
					
					//plugins.file.streamFilesToServer(jsFile)
					//plugins.file.openFile(jsFile,"_blank",'application/xml')		
					else plugins.file.openFile('FacturaE321.xml',jsFile.getBytes(),'application/txt')
				}
	}
}

/**
 * Callback method when form is destroyed.
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
 * @properties={typeid:24,uuid:"6B99E8B2-EA74-4501-8115-D66986D24D29"}
 */
function GenerarXML322(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
{	
	nfacturas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
	/*query = "select count(*),isnull(sum(impnee_cfa),0) from tbfacturacabecera "+
			"WHERE (tbFacturaCabecera.eje_cfa >= "+DEJE+
		     " AND tbFacturaCabecera.eje_cfa <= "+HEJE+") "+
		     "AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
		     "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') "+
		     "AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
		     " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") "+
		     "AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+")";
	var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
	var numfacturas = dataset2.getValue(1,1);
	var sumfacturas = dataset2.getValue(1,2);*/
	
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
	if(dataset.getMaxRowIndex() > 0)
	{			
				/*var cifempresa = dataset.getValue(1,8);
				var tipopersona = TipoPersona(cifempresa);					
				var pais = dataset.getValue(1,21);
				var razonsocial = dataset.getValue(1,3);
				var regmercantil = dataset.getValue(1,17);
				var hoja = dataset.getValue(1,20);
				var folio = dataset.getValue(1,19);
				var seccion = '';
				var tomo = dataset.getValue(1,18);
				var direccion = dataset.getValue(1,5);
				var codigopostal = dataset.getValue(1,4);
				var ciudad = dataset.getValue(1,6);
				var provincia = dataset.getValue(1,7);
				var telefono = dataset.getValue(1,9);
				var fax = dataset.getValue(1,10);
				var web = dataset.getValue(1,12);
				var correo = dataset.getValue(1,11);
				var primerafactura = DEJE.toString() + utils.numberFormat(DNUP,'00000') + DSER;
				var ultimafactura = HEJE.toString() + utils.numberFormat(HNUP,'00000') + HSER;
				var cifcliente = dataset.getValue(1,90);
				var tipopersonacliente = TipoPersona(cifcliente)	
				var paiscliente = dataset.getValue(1,99);
				//var contactocliente = dataset.getValue(1,85);
				var desccliente = dataset.getValue(1,79);
				var direccioncliente = dataset.getValue(1,80);
				var poblacioncliente = dataset.getValue(1,81);
				var provinciacliente = dataset.getValue(1,82);
				var codpostalcliente = dataset.getValue(1,83);
				var razonsocialcliente = dataset.getValue(1,84);
				var fechacobro = dataset.getValue(1,27);
				//var formapago = dataset.getValue(1,30);
				var cuentaabono = dataset.getValue(1,16);
				var bic = dataset.getValue(1,107);
				*/
				
				datosempresa(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
				
				/*query = "select pai_iso3 from pais where pai_iso2 ='"+paiscliente+"'";				
				var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
				var paisclienteiso3 = dataset2.getValue(1,1)
				*/
				getpaiso3()
							
				xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
				
				Document = <Facturae/>
				ns = new Namespace('fe',"http://www.facturae.es/Facturae/2014/v3.2.1/Facturae")
				Document.addNamespace(ns)							
				
				ns = new Namespace('ds','http://www.w3.org/2000/09/xmldsig#')
				Document.addNamespace(ns)
				//var Document = <Facturae xmlns:ds="http://www.w3.org/2000/09/xmldsig#"/>
				//var ns = new Namespace('xs','http://www.w3.org/2001/XMLSchema')
				//Document.addNamespace(ns)		
				FileHeader = <FileHeader/>//Cabecera del fichero xml
					SchemaVersion = <SchemaVersion/>
					/*Código que indica versión utilizada. Existirá compatibilidad de versiones.*/
					SchemaVersion.appendChild('3.2.1')
					Modality = <Modality/>
						/*Modalidad. Individual o Lote. Si es "individual" (I) los
						  importes de los campos del grupo Batch coincidirán con sus
						  correspondientes campos del grupo InvoiceTotals y el
						  campo InvoicesCount tendrá siempre el valor "1". Si es
						  "lote" (L), el valor del campo InvoicesCount será siempre	> "1".*/
					if(numfacturas > 1) Modality.appendChild('L')
					else if(numfacturas == 1) Modality.appendChild('I')
					InvoiceIssuerType = <InvoiceIssuerType/>
						/*Tipo Emisor Factura. Puede tomar 3 valores (EM, RE y TE), 
						 que se describen como “Proveedor (antes denominado emisor)”,
						 “Destinatario (antes denominado cliente o receptor)” y 
						 “Tercero”, respectivamente. 
						 Si toma el valor "TE" el grupo ThirdParty será obligatorio 
						 cumplimentarlo en todos sus apartados.*/
						 InvoiceIssuerType.appendChild('RE') 
					/*var ThirdParty = <ThirdParty/>
						 var TaxIdentification = <TaxIdentification/>
						 //Identificación fiscal.
						 	var PersonTypeCode = <PersonTypeCode/>
						 		PersonTypeCode.appendChild(tipopersona)
							var ResidenceTypeCode = <ResidenceTypeCode/>
						 		ResidenceTypeCode.appendChild('R')
							var TaxIdentificationNumber = <TaxIdentificationNumber/>
						 		TaxIdentificationNumber.appendChild(pais + cifempresa)						 		
							TaxIdentification.appendChild(PersonTypeCode)
						    TaxIdentification.appendChild(ResidenceTypeCode)
							TaxIdentification.appendChild(TaxIdentificationNumber)
							var LegalEntity = <LegalEntity/>
								//Persona jurídica y otras.
									var CorporateName = <CorporateName/>
									//Razón Social.
									CorporateName.appendChild(razonsocial)
									var TradeName = <TradeName/>
									//Nombre Comercial.
									var RegistrationData = <RegistrationData/>
									//Datos Registrales: Inscripción Registro, Tomo, Folio,…
										var Book = <Book/>
										//Libro
										Book.appendChild('')
										var RegisterOfCompaniesLocation = <RegisterOfCompaniesLocation/>
										// Registro Mercantil.
										RegisterOfCompaniesLocation.appendChild(utils.stringLeft(regmercantil,20));
										var Sheet = <Sheet/>
										//Hoja
										Sheet.appendChild(utils.stringLeft(hoja, 20))
										var Folio = <Folio/>
										//Folio
										Folio.appendChild(utils.stringLeft(folio,20))
										var Section = <Section/>
										//Sección.
										Section.appendChild(utils.stringLeft(seccion,20))
										var Volume = <Volume/>
										//Tomo
										Volume.appendChild(utils.stringLeft(tomo,20))
										var AdditionalRegistrationData = <AdditionalRegistrationData/>
										//Otros datos registrales.
										
										RegistrationData.appendChild(Book)
										RegistrationData.appendChild(RegisterOfCompaniesLocation)
										RegistrationData.appendChild(Sheet)
										RegistrationData.appendChild(Folio)
										RegistrationData.appendChild(Section)
										RegistrationData.appendChild(Volume)
										RegistrationData.appendChild(AdditionalRegistrationData)
									var AddressInSpain = <AddressInSpain/>
									//Dirección Nacional. Dirección en España.
										var Address = <Address/>
										//Dirección. Tipo de vía, nombre, número, piso…
										Address.appendChild(utils.stringLeft(direccion, 80))
										var PostCode = <PostCode/>
										//Código Postal asignado por Correos.
										PostCode.appendChild(utils.stringLeft(codigopostal, 5))
										var Town = <Town/>
										//Población. Correspondiente al C.P.
										Town.appendChild(utils.stringLeft(ciudad, 50))
										var Province = <Province/>
										//Provincia. Donde está situada la Población.
										Province.appendChild(utils.stringLeft(provincia, 20))
										var CountryCode = <CountryCode/>
										CountryCode.appendChild('ESP')											
										AddressInSpain.appendChild(Address)
										AddressInSpain.appendChild(PostCode)
										AddressInSpain.appendChild(Town)
										AddressInSpain.appendChild(Province)
										AddressInSpain.appendChild(CountryCode)										
										var ContactDetails = <ContactDetails/>
											//Datos de contacto.
											var Telephone = <Telephone/>
											//Teléfono. Número de teléfono completo con prefijos del país.
											Telephone.appendChild(utils.stringLeft(('+34'+telefono), 15))
											var TeleFax = <TeleFax/>
											//Teléfono. Número de teléfono completo con prefijos del país.
											if(fax) TeleFax.appendChild(utils.stringLeft(('+34'+fax), 15))											
											var WebAddress = <WebAddress/>
											//Página web. URL de la dirección de Internet.
											WebAddress.appendChild(utils.stringLeft(web, 60))
											var ElectronicMail = <ElectronicMail/>
											//Correo electrónico. Dirección de correo electrónico.
											ElectronicMail.appendChild(utils.stringLeft(correo, 60))
											ContactDetails.appendChild(Telephone)
											ContactDetails.appendChild(TeleFax)
											ContactDetails.appendChild(WebAddress)
											ContactDetails.appendChild(ElectronicMail)										
									LegalEntity.appendChild(CorporateName)
									LegalEntity.appendChild(TradeName)
									LegalEntity.appendChild(RegistrationData)
									LegalEntity.appendChild(AddressInSpain)		
									LegalEntity.appendChild(ContactDetails)								
						 ThirdParty.appendChild(TaxIdentification)
						 ThirdParty.appendChild(LegalEntity)*/
						 Batch = <Batch/>
						 		BatchIdentifier = <BatchIdentifier/>
						 		/*Identificador del lote. Concatenación del nº de documento del emisor con
						 		  el número de la primera factura y el número de serie caso de existir.*/
						 		BatchIdentifier.appendChild(utils.stringLeft((primerafactura+ultimafactura), 70))
						 		InvoicesCount = <InvoicesCount/>
						 		/*Número total de facturas. Refleja, cuando es lote, el número de facturas 
						 		 del mismo. Siempre será valor "1" cuando el campo Modality (Modalidad)
						 		 tenga el valor "I".*/
						 		InvoicesCount.appendChild(numfacturas)
								TotalInvoicesAmount = <TotalInvoicesAmount/>
						 		/*Total facturas. Suma de los importes InvoiceTotal del Fichero. Este importe
						 		 lo es a efectos de total de factura y fiscales, sin tener en cuenta subvenciones,
						 		 anticipos y/o retenciones que pudieran haberse practicado.*/
						 		 	TotalAmount = <TotalAmount/>
						 		 	if(sumfacturas) TotalAmount.appendChild(sumfacturas.toFixed(2))
								TotalInvoicesAmount.appendChild(TotalAmount)
								TotalOutstandingAmount = <TotalOutstandingAmount/>
						 		/*Total a pagar. Suma de los importes TotalOutstandingAmount del Fichero, 
						 		 hasta ocho decimales. Es el importe que efectivamente se adeuda, una vez 
						 		 descontados los anticipos y sin tener en cuenta las retenciones.*/
									TotalAmount = <TotalAmount/>
									if(sumfacturas) TotalAmount.appendChild(sumfacturas.toFixed(2))
								TotalOutstandingAmount.appendChild(TotalAmount)
								TotalExecutableAmount = <TotalExecutableAmount/>
						 		/*Total a Ejecutar. Sumatorio de las diferencias de los importes 
						 		 (TotalOutstandingAmount y WithholdingAmount) del fichero = Sumatorio de los Importes
						 		 TotalExecutableAmount, hasta ocho decimales. Es el importe que se adeuda minorado 
						 		 en un posible importe retenido en garantía de cumplimientos contractuales.*/
									TotalAmount = <TotalAmount/>
									if(sumfacturas) TotalAmount.appendChild(sumfacturas.toFixed(2))
								TotalExecutableAmount.appendChild(TotalAmount)
								InvoiceCurrencyCode = <InvoiceCurrencyCode/>
								/*Código ISO 4217:2001 Alpha-3 de la moneda en la que se emite la factura. 
								 Si difiere de la moneda EURO o del campo ExchangeRateDetails será obligatorio 
								 indicar el contravalor y el tipo/fecha de cambio para los campos de base imponible 
								 y cuota, retenida como repercutida, así como en los totales TotalInvoicesAmount, 
								 TotalOutstandingAmount, y TotalExecutableAmount.*/
								InvoiceCurrencyCode.appendChild('EUR')
								Batch.appendChild(BatchIdentifier)
								Batch.appendChild(InvoicesCount)
								Batch.appendChild(TotalInvoicesAmount)
								Batch.appendChild(TotalOutstandingAmount)
								Batch.appendChild(TotalExecutableAmount)
								Batch.appendChild(InvoiceCurrencyCode)						
					FileHeader.appendChild(SchemaVersion)
					FileHeader.appendChild(Modality)
					FileHeader.appendChild(InvoiceIssuerType)
					//FileHeader.appendChild(ThirdParty)	
					FileHeader.appendChild(Batch)	
					Parties = <Parties/>
					/*Sujetos - Datos del emisor y receptor de la factura*/
						SellerParty = <SellerParty/>
						/*Emisor. Datos básicos del fichero. Son comunes a la factura o facturas que se incluyen.*/
							TaxIdentification = <TaxIdentification/>
							//Identificación fiscal.
							PersonTypeCode = <PersonTypeCode/>
					 		/*Tipo de persona. Física o Jurídica. "F" - Física; "J" - Jurídica.*/
					 		PersonTypeCode.appendChild(tipopersona)
					 		ResidenceTypeCode = <ResidenceTypeCode/>
					 		/*Identificación del tipo de residencia y/o extranjería. "E" - Extranjero; 
					 		 * "R" - Residente; "U" - Residente en la Unión Europea.*/
					 		ResidenceTypeCode.appendChild('R')
						    TaxIdentificationNumber = <TaxIdentificationNumber/>
					 		/*Código de Identificación Fiscal del sujeto. Se trata de las composiciones 
					 		 *de NIF/CIF que marca la Administración correspondiente (precedidas de las 
					 		 *dos letras del país en el caso de operaciones intracomunitarias, es decir, 
					 		 *cuando comprador y vendedor tienen domicilio fiscal en estados miembros de la UE 
					 		 *distintos).*/
							if(utils.stringLeft(cifempresa,2) == pais) var codcif = cifempresa;
							else codcif = pais+cifempresa;
							TaxIdentificationNumber.appendChild(codcif)					 		
						TaxIdentification.appendChild(PersonTypeCode)
					    TaxIdentification.appendChild(ResidenceTypeCode)
						TaxIdentification.appendChild(TaxIdentificationNumber)
						LegalEntity = <LegalEntity/>
								//Persona jurídica y otras.
									CorporateName = <CorporateName/>
									//Razón Social.
									CorporateName.appendChild(razonsocial)
									TradeName = <TradeName/>
									//Nombre Comercial.
									RegistrationData = <RegistrationData/>
									//Datos Registrales: Inscripción Registro, Tomo, Folio,…
										Book = <Book/>
										//Libro
										Book.appendChild('')
										RegisterOfCompaniesLocation = <RegisterOfCompaniesLocation/>
										// Registro Mercantil.
										RegisterOfCompaniesLocation.appendChild(utils.stringLeft(regmercantil,20));
										Sheet = <Sheet/>
										//Hoja
										Sheet.appendChild(utils.stringLeft(hoja, 20))
										Folio = <Folio/>
										//Folio
										Folio.appendChild(utils.stringLeft(folio,20))
										Section = <Section/>
										//Sección.
										Section.appendChild(utils.stringLeft(seccion,20))
										 Volume = <Volume/>
										//Tomo
										Volume.appendChild(utils.stringLeft(tomo,20))
										AdditionalRegistrationData = <AdditionalRegistrationData/>
										//Otros datos registrales.
										AdditionalRegistrationData.appendChild('Sin Datos')
										
										RegistrationData.appendChild(Book)
										RegistrationData.appendChild(RegisterOfCompaniesLocation)
										RegistrationData.appendChild(Sheet)
										RegistrationData.appendChild(Folio)
										RegistrationData.appendChild(Section)
										RegistrationData.appendChild(Volume)
										RegistrationData.appendChild(AdditionalRegistrationData)
									AddressInSpain = <AddressInSpain/>
									//Dirección Nacional. Dirección en España.
									Address = <Address/>
									//Dirección. Tipo de vía, nombre, número, piso…
									Address.appendChild(utils.stringLeft(direccion, 80))
									PostCode = <PostCode/>
									//Código Postal asignado por Correos.
									PostCode.appendChild(utils.stringLeft(codigopostal, 5))
									Town = <Town/>
									//Población. Correspondiente al C.P.
									Town.appendChild(utils.stringLeft(ciudad, 50))
									Province = <Province/>
									//Provincia. Donde está situada la Población.
									Province.appendChild(utils.stringLeft(provincia, 20))
									CountryCode = <CountryCode/>
									/*Código País. Código según la ISO 3166-1:2006 Alpha-3.
									Al ser un domicilio ubicado en España siempre será "ESP".*/
									CountryCode.appendChild('ESP')											
									AddressInSpain.appendChild(Address)
									AddressInSpain.appendChild(PostCode)
									AddressInSpain.appendChild(Town)
									AddressInSpain.appendChild(Province)
									AddressInSpain.appendChild(CountryCode)										
									ContactDetails = <ContactDetails/>
									//Datos de contacto.
										Telephone = <Telephone/>
										//Teléfono. Número de teléfono completo con prefijos del país.
										Telephone.appendChild(utils.stringLeft(('+34'+telefono), 15))
										TeleFax = <TeleFax/>
										//Teléfono. Número de teléfono completo con prefijos del país.
										if(fax) TeleFax.appendChild(utils.stringLeft(('+34'+fax), 15))											
										WebAddress = <WebAddress/>
										//Página web. URL de la dirección de Internet.
										WebAddress.appendChild(utils.stringLeft(web, 60))
										ElectronicMail = <ElectronicMail/>
										//Correo electrónico. Dirección de correo electrónico.
										ElectronicMail.appendChild(utils.stringLeft(correo, 60))
										ContactDetails.appendChild(Telephone)
										ContactDetails.appendChild(TeleFax)
										ContactDetails.appendChild(WebAddress)
										ContactDetails.appendChild(ElectronicMail)										
								LegalEntity.appendChild(CorporateName)
								LegalEntity.appendChild(TradeName)
								LegalEntity.appendChild(RegistrationData)
								LegalEntity.appendChild(AddressInSpain)		
								LegalEntity.appendChild(ContactDetails)	
						
						
						
						
						
						SellerParty.appendChild(TaxIdentification)
						SellerParty.appendChild(LegalEntity)
						BuyerParty = <BuyerParty/>
							TaxIdentification = <TaxIdentification/>
								PersonTypeCode = <PersonTypeCode/>
								//Tipo de persona. Física o Jurídica. "F" - Física; "J" - Jurídica.
								PersonTypeCode.appendChild(tipopersonacliente)
								ResidenceTypeCode = <ResidenceTypeCode/>
								//Identificación del tipo de residencia y/o extranjería. 
								//"E" - Extranjero; 
								//"R" - Residente; 
								//"U" - Residente en la Unión Europea.
								if(paiscliente == 'ES' || paiscliente == null || paiscliente == '')
								{
									var tiponacionalidad = 'R'
								}
								else
								{
									tiponacionalidad = TipoNacionalidad(paiscliente)
								}
								ResidenceTypeCode.appendChild(tiponacionalidad)
								TaxIdentificationNumber = <TaxIdentificationNumber/>
								if(utils.stringLeft(cifcliente,2) == paiscliente) codcif = cifcliente;
								else codcif = paiscliente+cifcliente;
								//Código de Identificación Fiscal del sujeto. Se trata de las composiciones de NIF/CIF que marca la Administración correspondiente (precedidas de las dos letras del país en el caso de operaciones intracomunitarias, es decir, cuando comprador y vendedor tienen domicilio fiscal en estados miembros de la UE distintos).
								TaxIdentificationNumber.appendChild(utils.stringLeft(codcif,30))								
							TaxIdentification.appendChild(PersonTypeCode)
							TaxIdentification.appendChild(ResidenceTypeCode)
							TaxIdentification.appendChild(TaxIdentificationNumber)
							AdministrativeCentres = <AdministrativeCentres/>
								//Centros
								AdministrativeCentre = <AdministrativeCentre/>
								//Centro
									Name = <Name/>
									//Nombre de la persona responsable o de relación del centro.
									if(razonsocialcliente) Name.appendChild(utils.stringLeft(razonsocialcliente,40))
									else Name.appendChild(utils.stringLeft(desccliente,40))
									AdministrativeCentre.appendChild(Name)
									if(paiscliente == 'ES')
									{
										AddressInSpain = <AddressInSpain/>
											Address = <Address/>
											Address.appendChild(utils.stringLeft(direccioncliente,80))
											PostCode = <PostCode/>
											PostCode.appendChild(utils.stringLeft(codpostalcliente,5))
											Town = <Town/>
											Town.appendChild(utils.stringLeft(poblacioncliente,50))
											Province = <Province/>
											Province.appendChild(utils.stringLeft(provinciacliente,20))
											CountryCode = <CountryCode/>
											CountryCode.appendChild('ESP')
										AddressInSpain.appendChild(Address)
										AddressInSpain.appendChild(PostCode)
										AddressInSpain.appendChild(Town)
										AddressInSpain.appendChild(Province)										
										AddressInSpain.appendChild(CountryCode)										
										AdministrativeCentre.appendChild(AddressInSpain)
									}
									else
									{
										OverseasAddress = <OverseasAddress/>
										//Dirección en el extranjero.
											Address = <Address/>
											Address.appendChild(utils.stringLeft(direccioncliente,80))
											PostCodeAndTown = <PostCodeAndTown/>
											PostCodeAndTown.appendChild(utils.stringLeft(poblacioncliente + ' ' +codpostalcliente,50))
											Province = <Province/>
											Province.appendChild(provinciacliente)
											CountryCode = <CountryCode/>
											CountryCode.appendChild(paisclienteiso3)
										OverseasAddress.appendChild(Address)
										OverseasAddress.appendChild(PostCodeAndTown)
										OverseasAddress.appendChild(Province)
										OverseasAddress.appendChild(CountryCode)										
										AdministrativeCentre.appendChild(OverseasAddress)
									}
									
								AdministrativeCentres.appendChild(AdministrativeCentre)
								Individual = <Individual/>
									//Persona física.		
									Name = <Name/>
									//Nombre de la persona responsable o de relación del centro.
									if(razonsocialcliente) Name.appendChild(utils.stringLeft(razonsocialcliente,40))
									else Name.appendChild(utils.stringLeft(desccliente,40))
									FirstSurname = <FirstSurname/>
									//Nombre de la persona responsable o de relación del centro.
									FirstSurname.appendChild(utils.stringLeft('',40))
									Individual.appendChild(Name)
									Individual.appendChild(FirstSurname)
									if(paiscliente == 'ES')
									{
										AddressInSpain = <AddressInSpain/>
										Address = <Address/>
										Address.appendChild(utils.stringLeft(direccioncliente,80))
										PostCode = <PostCode/>
										PostCode.appendChild(utils.stringLeft(codpostalcliente,5))
										Town = <Town/>
										Town.appendChild(utils.stringLeft(poblacioncliente,50))
										Province = <Province/>
										Province.appendChild(utils.stringLeft(provinciacliente,20))
										CountryCode = <CountryCode/>
										CountryCode.appendChild('ESP')
										AddressInSpain.appendChild(Address)
										AddressInSpain.appendChild(PostCode)
										AddressInSpain.appendChild(Town)
										AddressInSpain.appendChild(Province)										
										AddressInSpain.appendChild(CountryCode)										
										Individual.appendChild(AddressInSpain)
									}
									else
									{
										OverseasAddress = <OverseasAddress/>
										//Dirección en el extranjero.
											Address = <Address/>
											Address.appendChild(utils.stringLeft(direccioncliente,80))
											PostCodeAndTown = <PostCodeAndTown/>
											PostCodeAndTown.appendChild(utils.stringLeft(poblacioncliente + ' ' +codpostalcliente,50))
											Province = <Province/>
											Province.appendChild(provinciacliente)
											CountryCode = <CountryCode/>
											CountryCode.appendChild(paisclienteiso3)
										OverseasAddress.appendChild(Address)
										OverseasAddress.appendChild(PostCodeAndTown)
										OverseasAddress.appendChild(Province)
										OverseasAddress.appendChild(CountryCode)										
										Individual.appendChild(OverseasAddress)
									}
									
						BuyerParty.appendChild(TaxIdentification)
						BuyerParty.appendChild(AdministrativeCentres)		
						BuyerParty.appendChild(Individual)		
					Parties.appendChild(SellerParty)
					Parties.appendChild(BuyerParty)
					Invoices = <Invoices/>
					//Conjunto de facturas que contiene el fichero. Para todos los elementos numéricos, los cálculos se efectuarán siempre redondeando al número de decimales correspondientes.
					var NFactura = null;
					var NFacturaAnterior = null;
					
					for(var i=1;i<=dataset.getMaxRowIndex();i++)
					{
						NFactura = dataset.getValue(i,23)+utils.numberFormat(dataset.getValue(i,25),'00000')+dataset.getValue(i,24);
						
						
						if(NFactura != NFacturaAnterior)
						{	
							if(i>1)
							{
								PaymentDetails = <PaymentDetails/>
								//Datos de pago.
									Installment = <Installment/>
									//Vencimiento.
										InstallmentDueDate = <InstallmentDueDate/>
										//Fechas en las que se deben atender los pagos. ISO 8601:2004.
										InstallmentDueDate.appendChild(utils.dateFormat(fechacobro,'yyyy-MM-dd'))
										InstallmentAmount = <InstallmentAmount/>
										//Importe a satisfacer en cada plazo. Siempre con dos decimales.
										if(impnee) InstallmentAmount.appendChild(impnee.toFixed(2))
										PaymentMeans = <PaymentMeans/>
										//Cada vencimiento/importe podrá tener un medio de pago concreto.
										PaymentMeans.appendChild('04')
										/*01 Al contado
										  02 Recibo domiciliado
										  03 Recibo
										  04 Transferencia*/
										AccountToBeCredited = <AccountToBeCredited/>
										//Cuenta de abono. Único formato admitido. Cuando la forma de pago (PaymentMeans) sea "transferencia" este dato será obligatorio.
											IBAN = <IBAN/>
											//IBAN. Único formato admitido para identificar la cuenta. (Recomendado)
											IBAN.appendChild(cuentaabono)		
											BIC = <BIC/>
											//Código SWIFT. Será obligatorio rellenar las 11 posiciones, utilizando los caracteres XXX cuando no se informe de la sucursal.
											BIC.appendChild(bic)
											AccountToBeCredited.appendChild(IBAN)
											AccountToBeCredited.appendChild(BIC)
										//var AccountToBeDebited = <AccountToBeDebited/>
											
										Installment.appendChild(InstallmentDueDate)
										Installment.appendChild(InstallmentAmount)
										Installment.appendChild(PaymentMeans)
										if(cuentaabono && bic && cuentaabono != '' && bic != '') Installment.appendChild(AccountToBeCredited)
									PaymentDetails.appendChild(Installment)
								Invoice.appendChild(InvoiceHeader)
								Invoice.appendChild(InvoiceIssueData)
								Invoice.appendChild(TaxesOutputs)
								Invoice.appendChild(InvoiceTotals)
								Invoice.appendChild(Items)
								Invoice.appendChild(PaymentDetails)
								Invoices.appendChild(Invoice)
								
								/*var fechafactura = dataset.getValue(i,26);
								var impbre = dataset.getValue(i,37);
								var depp = dataset.getValue(i,38);
								//var porcgfi = dataset.getValue(i,50);
								var impgfi = dataset.getValue(i,51);
								var impnee = dataset.getValue(i,49);
								var impbie = dataset.getValue(i,40);
								var piva = dataset.getValue(i,41);
								var cuotaiva = dataset.getValue(i,42);
								var impbie2 = dataset.getValue(i,43);
								var piva2 = dataset.getValue(i,44);
								var cuotaiva2 = dataset.getValue(i,45);
								var impbie3 = dataset.getValue(i,46);
								var piva3 = dataset.getValue(i,47);
								var cuotaiva3 = dataset.getValue(i,48);
								var impre = dataset.getValue(i,52);
								if(impre)
								{
									query = "select ivare from tbmaestrotipoiva "+
											"WHERE factor = "+piva;
									dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
									var porcimpre = dataset2.getValue(1,1)
								}
								var impre2 = dataset.getValue(i,53);
								if(impre2)
								{
									query = "select ivare from tbmaestrotipoiva "+
											"WHERE factor = "+piva2;
									dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
									var porcimpre2 = dataset2.getValue(1,1)
								}						
								var impre3 = dataset.getValue(i,54);
								if(impre3)
								{
									query = "select ivare from tbmaestrotipoiva "+
											"WHERE factor = "+piva3;
									dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
									var porcimpre3 = dataset2.getValue(1,1)
								}
								//var alb = dataset.getValue(i,60);
								//var lalb = dataset.getValue(i,61);
								var concepto = dataset.getValue(i,63)
								var cant = dataset.getValue(i,64)
								var imporlfa = dataset.getValue(i,73)
								var preclfa = dataset.getValue(i,65)
								var dtolfa = dataset.getValue(i,68)
								var impordtolfa = dataset.getValue(i,69)
								*/
								datoslineas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI,i)
							}
							else
							{
								/*fechafactura = dataset.getValue(i,26);
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
									dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
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
								//alb = dataset.getValue(i,60);
								//lalb = dataset.getValue(i,61);
								concepto = dataset.getValue(i,63)
								cant = dataset.getValue(i,64)
								imporlfa = dataset.getValue(i,73)
								preclfa = dataset.getValue(i,65)
								dtolfa = dataset.getValue(i,68)
								impordtolfa = dataset.getValue(i,69)
								*/
								datoslineas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI,i)
							}
							Invoice = <Invoice/>
							InvoiceHeader = <InvoiceHeader/>
								InvoiceNumber = <InvoiceNumber/>
									InvoiceNumber.appendChild(NFactura)
								InvoiceSeriesCode = <InvoiceSeriesCode/>
									if(fechafactura) InvoiceSeriesCode.appendChild(fechafactura.getFullYear().toString())
									else InvoiceSeriesCode.appendChild('')
								InvoiceDocumentType = <InvoiceDocumentType/>
									//Tipo documento factura. Puede tomar 3 valores (FC, FA y AF), 
									//que se describen como “Factura completa u ordinaria”, 
									//“Factura simplificada” y “Código sin uso desde la entrada en 
									//vigor del RD 1789/2010. Se mantiene por compatibilidad hacia atrás. 
									//Antes significaba autofactura. Para indicar que se trata de una 
									//factura expedida por el destinatario, se recomienda emplear 
									//el elemento InvoiceIssuerType empleando el valor RE, que significa 
									//Destinatario”, respectivamente.
									InvoiceDocumentType.appendChild('FC')
								InvoiceClass = <InvoiceClass/>
								//Clase de Factura. Puede tomar 6 valores (OO, OR, OC, CO, CR y CC), 
								//que se describen como “Original”, “Original rectificativa”, 
								//“Original recapitulativa”, “Duplicado original”, 
								//“Duplicado rectificativa” y “Duplicado recapitulativa”.	
									InvoiceClass.appendChild('OO')
								InvoiceHeader.appendChild(InvoiceNumber)
								InvoiceHeader.appendChild(InvoiceSeriesCode)
								InvoiceHeader.appendChild(InvoiceDocumentType)
								InvoiceHeader.appendChild(InvoiceClass)
							InvoiceIssueData = <InvoiceIssueData/>	
							//Datos de la emisión de la factura
								IssueDate = <IssueDate/>
								//Fecha de expedición. Fecha en la que se genera la factura con efectos 
								//fiscales. ISO 8601:2004. Esta fecha no podrá ser posterior a la fecha
								// de la firma electrónica.
								IssueDate.appendChild(utils.dateFormat(fechafactura,'yyyy-MM-dd'))
								OperationDate = <OperationDate/>
								//Fecha de Operación. Fecha en la que se realiza el servicio o se entrega 
								//el bien. ISO 8601:2004. Esta fecha solo será obligatoria si es distinta 
								//de la fecha de expedición.
								OperationDate.appendChild(utils.dateFormat(fechafactura,'yyyy-MM-dd'))
								PlaceOfIssue = <PlaceOfIssue/>
								//Lugar de expedición. Plaza en la que se expide el documento.
									PostCode = <PostCode/>
									PostCode.appendChild(utils.numberFormat(0,'00000'))
									PlaceOfIssueDescription = <PlaceOfIssueDescription/>
									//Texto del nombre del lugar.									
									
									PlaceOfIssue.appendChild(PostCode)
									PlaceOfIssue.appendChild(PlaceOfIssueDescription)
								InvoiceCurrencyCode = <InvoiceCurrencyCode/>
								//Moneda de la operación. Código ISO 4217:2001 Alpha-3 de la moneda en la que se emite la factura. Si la moneda de la operación difiere de la moneda del impuesto (EURO), los campos del contravalor ExchangeRate y
								//ExchangeRateDate deberán cumplimentarse, en cumplimiento del Artº 10.1 del Reglamento sobre facturación. RD 1496/2003 de 28 de Noviembre.
								InvoiceCurrencyCode.appendChild('EUR')
								TaxCurrencyCode = <TaxCurrencyCode/>
								//Moneda del Impuesto. Código ISO 4217:2001 Alpha-3 de la moneda en la que se liquida el impuesto.
								TaxCurrencyCode.appendChild('EUR')
								LanguageName = <LanguageName/>
								//Moneda del Impuesto. Código ISO 4217:2001 Alpha-3 de la moneda en la que se liquida el impuesto.
								LanguageName.appendChild('es')
								
							InvoiceIssueData.appendChild(IssueDate)
							InvoiceIssueData.appendChild(OperationDate)
							InvoiceIssueData.appendChild(PlaceOfIssue)
							InvoiceIssueData.appendChild(InvoiceCurrencyCode)
							InvoiceIssueData.appendChild(TaxCurrencyCode)
							InvoiceIssueData.appendChild(LanguageName)
							TaxesOutputs = <TaxesOutputs/>
							//Impuestos repercutidos.
								Tax = <Tax/>
								//Impuesto.
									TaxTypeCode = <TaxTypeCode/>
									//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
									//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
									TaxTypeCode.appendChild('01')
									TaxRate = <TaxRate/>
									//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
									if(piva) TaxRate.appendChild(piva.toFixed(2))
									TaxableBase = <TaxableBase/>
									//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
										TotalAmount = <TotalAmount/>
										//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
										//sobre facturación, RD 1496/2003 de 28 de Noviembre.
										if(impbie) TotalAmount.appendChild(impbie.toFixed(2))
									TaxableBase.appendChild(TotalAmount)
									TaxAmount = <TaxAmount/>
									//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
										TotalAmount = <TotalAmount/>
										//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
										if(cuotaiva) TotalAmount.appendChild(cuotaiva.toFixed(2))
									TaxAmount.appendChild(TotalAmount)
								Tax.appendChild(TaxTypeCode)
								Tax.appendChild(TaxRate)
								Tax.appendChild(TaxableBase)
								Tax.appendChild(TaxAmount)
									if(impre)
									{
										EquivalenceSurcharge = <EquivalenceSurcharge/>
										//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
										if(porcimpre) EquivalenceSurcharge.appendChild(porcimpre.toFixed(2))
										EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
										//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
											TotalAmount = <TotalAmount/>
											//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
											if(impre) TotalAmount.appendChild(impre.toFixed(2))
										EquivalenceSurchargeAmount.appendChild(TotalAmount)		
										
										Tax.appendChild(EquivalenceSurcharge)
										Tax.appendChild(EquivalenceSurchargeAmount)
									}
								TaxesOutputs.appendChild(Tax)
								if(impbie2)
								{
									Tax = <Tax/>
									//Impuesto.
										TaxTypeCode = <TaxTypeCode/>
										//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
										//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
										TaxTypeCode.appendChild('01')
										TaxRate = <TaxRate/>
										//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
										if(piva2) TaxRate.appendChild(piva2.toFixed(2))
										TaxableBase = <TaxableBase/>
										//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
											TotalAmount = <TotalAmount/>
											//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
											//sobre facturación, RD 1496/2003 de 28 de Noviembre.
											if(impbie2) TotalAmount.appendChild(impbie2.toFixed(2))
										TaxableBase.appendChild(TotalAmount)
										TaxAmount = <TaxAmount/>
										//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
											TotalAmount = <TotalAmount/>
											//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
											if(cuotaiva2) TotalAmount.appendChild(cuotaiva2.toFixed(2))
										TaxAmount.appendChild(TotalAmount)
									Tax.appendChild(TaxTypeCode)
									Tax.appendChild(TaxRate)
									Tax.appendChild(TaxableBase)
									Tax.appendChild(TaxAmount)
										if(impre2)
										{
											EquivalenceSurcharge = <EquivalenceSurcharge/>
											//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
											if(porcimpre2) EquivalenceSurcharge.appendChild(porcimpre2.toFixed(2))
											EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
											//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
												if(impre2) TotalAmount.appendChild(impre2.toFixed(2))
											EquivalenceSurchargeAmount.appendChild(TotalAmount)		
											
											Tax.appendChild(EquivalenceSurcharge)
											Tax.appendChild(EquivalenceSurchargeAmount)
										}
									TaxesOutputs.appendChild(Tax)
								}
								if(impbie3)
								{
									Tax = <Tax/>
									//Impuesto.
										TaxTypeCode = <TaxTypeCode/>
										//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
										//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
										TaxTypeCode.appendChild('01')
										TaxRate = <TaxRate/>
										//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
										if(piva3) TaxRate.appendChild(piva3.toFixed(2))
										TaxableBase = <TaxableBase/>
										//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
											TotalAmount = <TotalAmount/>
											//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
											//sobre facturación, RD 1496/2003 de 28 de Noviembre.
											if(impbie3) TotalAmount.appendChild(impbie3.toFixed(2))
										TaxableBase.appendChild(TotalAmount)
										TaxAmount = <TaxAmount/>
										//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
											TotalAmount = <TotalAmount/>
											//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
											if(cuotaiva3) TotalAmount.appendChild(cuotaiva3.toFixed(2))
										TaxAmount.appendChild(TotalAmount)
									Tax.appendChild(TaxTypeCode)
									Tax.appendChild(TaxRate)
									Tax.appendChild(TaxableBase)
									Tax.appendChild(TaxAmount)
										if(impre3)
										{
											EquivalenceSurcharge = <EquivalenceSurcharge/>
											//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
											if(porcimpre3) EquivalenceSurcharge.appendChild(porcimpre3.toFixed(2))
											EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
											//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
												if(impre3) TotalAmount.appendChild(impre3.toFixed(2))
											EquivalenceSurchargeAmount.appendChild(TotalAmount)		
											
											Tax.appendChild(EquivalenceSurcharge)
											Tax.appendChild(EquivalenceSurchargeAmount)
										}
									TaxesOutputs.appendChild(Tax)
								}
								
								InvoiceTotals = <InvoiceTotals/>
									TotalGrossAmount = <TotalGrossAmount/>
									//Total Importe Bruto. Suma total de importes brutos de los detalles de la factura. Hasta ocho decimales.
									if(impbre) TotalGrossAmount.appendChild(impbre.toFixed(2))
									TotalGeneralDiscounts = <TotalGeneralDiscounts/>
									//Total Importe Bruto. Suma total de importes brutos de los detalles de la factura. Hasta ocho decimales.
									TotalGeneralDiscounts.appendChild(globals.GCROUND(impbre*depp,2).toFixed(2))
									TotalGeneralSurcharges = <TotalGeneralSurcharges/>
									//Total general de cargos. Sumatorio de los importes de los diferentes campos GeneralSurcharges. Hasta ocho decimales.
									TotalGeneralSurcharges.appendChild(globals.GCROUND(impgfi,2).toFixed(2))
									TotalGrossAmountBeforeTaxes = <TotalGrossAmountBeforeTaxes/>
									//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
									TotalGrossAmountBeforeTaxes.appendChild(globals.GCROUND(impbie+impbie2+impbie3,2).toFixed(2))
									TotalTaxOutputs = <TotalTaxOutputs/>
									//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
									TotalTaxOutputs.appendChild(globals.GCROUND(cuotaiva+cuotaiva2+cuotaiva3+impre+impre2+impre3,2).toFixed(2))
									TotalTaxesWithheld = <TotalTaxesWithheld/>
									//Total impuestos retenidos. Hasta ocho decimals.
									TotalTaxesWithheld.appendChild(0)
									InvoiceTotal = <InvoiceTotal/>
									//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
									if(impnee) InvoiceTotal.appendChild(impnee.toFixed(2))
									TotalOutstandingAmount = <TotalOutstandingAmount/>
									//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
									if(impnee) TotalOutstandingAmount.appendChild(impnee.toFixed(2))
									TotalExecutableAmount = <TotalExecutableAmount/>
									//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
									if(impnee) TotalExecutableAmount.appendChild(impnee.toFixed(2))								
								InvoiceTotals.appendChild(TotalGrossAmount)
								InvoiceTotals.appendChild(TotalGeneralDiscounts)
								InvoiceTotals.appendChild(TotalGeneralSurcharges)
								InvoiceTotals.appendChild(TotalGrossAmountBeforeTaxes)
								InvoiceTotals.appendChild(TotalTaxOutputs)
								InvoiceTotals.appendChild(TotalTaxesWithheld)
								InvoiceTotals.appendChild(InvoiceTotal)
								InvoiceTotals.appendChild(TotalOutstandingAmount)
								InvoiceTotals.appendChild(TotalExecutableAmount)
								var Items = <Items/> 
								//Información detallada.
							
						}
						else
						{
							/*fechafactura = dataset.getValue(i,26);
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
								dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
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
							//alb = dataset.getValue(i,60);
							//lalb = dataset.getValue(i,61);
							concepto = dataset.getValue(i,63)
							cant = dataset.getValue(i,64)
							imporlfa = dataset.getValue(i,73)
							preclfa = dataset.getValue(i,65)
							dtolfa = dataset.getValue(i,68)
							impordtolfa = dataset.getValue(i,69)
							*/
							datoslineas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI,i)
						}
						
							InvoiceLine = <InvoiceLine/>
							//Líneas de detalle de la factura.
								/*var IssuerContractReference = <IssuerContractReference/>
								//Referencia del contrato del Emisor.
								var IssuerContractDate = <IssuerContractDate/>
								//Fecha del contrato del emisor.
								var IssuerTransactionReference = <IssuerTransactionReference/>
								//Referencia de la Operación, Número de Pedido, Contrato, etc. del Emisor.
								var IssuerTransactionDate = <IssuerTransactionDate/>
								//Fecha de operación / pedido del emisor.								
								var ReceiverContractReference = <ReceiverContractReference/>
								//Referencia del contrato del Receptor.
								var ReceiverContractDate = <ReceiverContractDate/>
								//Fecha del contrato del receptor.
								var ReceiverTransactionReference = <ReceiverTransactionReference/>
								//Referencia de la Operación, Número de Pedido, Contrato, etc. del Receptor.
								var ReceiverTransactionDate = <ReceiverTransactionDate/>
								//Fecha de operación / pedido del receptor.
								var FileReference = <FileReference/>
								//Referencia del expediente.
								var FileDate = <FileDate/>
								//Fecha del expediente.
								var SequenceNumber = <SequenceNumber/>
								//Número de secuencia o línea del pedido.
								var DeliveryNotesReferences = <DeliveryNotesReferences/>
								//Referencias de albaranes.
									var DeliveryNote = <DeliveryNote/>
									//Información del albarán.
										var DeliveryNoteNumber = <DeliveryNoteNumber/>
										//Número de referencia del albarán.
										if(alb) DeliveryNoteNumber.appendChild(alb);
										var DeliveryNoteDate = <DeliveryNoteDate/>
										//Fecha del albarán.
										if(alb)
										{
											query = 'select fecha_cal from calbaran where cod_cal ='+alb;
											dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
											var fecha_cal = dataset2.getValue(1,1)
											DeliveryNoteDate.appendChild(fecha_cal)
										}										
										DeliveryNote.appendChild(DeliveryNoteNumber)
										DeliveryNote.appendChild(DeliveryNoteDate)
									DeliveryNotesReferences.appendChild(DeliveryNote)*/
								ItemDescription = <ItemDescription/>
								//Descripción del bien o servicio.
								ItemDescription.appendChild(concepto)		
								Quantity = <Quantity/>
								//Cantidad. Número de Unidades servidas/prestadas.
								Quantity.appendChild(cant)
								UnitOfMeasure = <UnitOfMeasure/>
								//Cantidad. Número de Unidades servidas/prestadas.
								UnitOfMeasure.appendChild('01')
								UnitPriceWithoutTax = <UnitPriceWithoutTax/>
								//Precio de la unidad de bien o servicio servido/prestado, en la moneda indicada en la Cabecera de la Factura. Siempre sin Impuestos. Hasta ocho decimales.
								if(preclfa) UnitPriceWithoutTax.appendChild(preclfa.toFixed(2))
								TotalCost = <TotalCost/>
								//Coste Total. Resultado: Quantity x UnitPriceWithoutTax Hasta ocho decimales
								TotalCost.appendChild(imporlfa)
								
								DiscountsAndRebates = <DiscountsAndRebates/>
									//Descuentos.
										Discount = <Discount/>
										//Descuento.
											DiscountReason = <DiscountReason/>
											DiscountReason.appendChild('Descuento')
											DiscountRate = <DiscountRate/>
											DiscountRate.appendChild(globals.GCROUND(dtolfa,2).toFixed(2))
											DiscountAmount = <DiscountAmount/>
											DiscountAmount.appendChild(globals.GCROUND(impordtolfa,2).toFixed(2))
											Discount.appendChild(DiscountReason)
											Discount.appendChild(DiscountRate)
											Discount.appendChild(DiscountAmount)
								DiscountsAndRebates.appendChild(Discount)
								Charges = <Charges/>	
								//Cargos.
									Charge = <Charge/>	
									//Cargo
										ChargeReason = <ChargeReason/>
										//Concepto por el que se aplica el cargo.
										ChargeReason.appendChild('Cargo')
										ChargeRate = <ChargeRate/>
										//Porcentaje a cargar sobre el TIB. Los porcentajes se reflejan con hasta 8 decimales.
										ChargeRate.appendChild(0)
										ChargeAmount = <ChargeAmount/>
										//Importe a cargar sobre el TIB. Hasta 8 decimales.
										ChargeAmount.appendChild(0)
										Charge.appendChild(ChargeReason)
										Charge.appendChild(ChargeRate)
										Charge.appendChild(ChargeAmount)
								Charges.appendChild(Charge)
								GrossAmount = <GrossAmount/>
									if(imporlfa) GrossAmount.appendChild(imporlfa.toFixed(2))	
									else GrossAmount.appendChild(globals.GCROUND(0,2).toFixed(2))	
								TaxesOutputs = <TaxesOutputs/>
								//Impuestos retenidos. Es una secuencia de elementos, cada uno de los cuales contiene la información de un impuesto retenido.
									Tax = <Tax/>										
										TaxTypeCode = <TaxTypeCode/>
										TaxTypeCode.appendChild('01')
										TaxRate = <TaxRate/>
										TaxRate.appendChild(piva.toFixed(2))
										TaxableBase = <TaxableBase/>
											TotalAmount = <TotalAmount/>
											TotalAmount.appendChild(impbie.toFixed(2))
											TaxableBase.appendChild(TotalAmount)
										TaxAmount = <TaxAmount/>
											TotalAmount = <TotalAmount/>
											TotalAmount.appendChild(cuotaiva.toFixed(2))
											TaxAmount.appendChild(TotalAmount)
										Tax.appendChild(TaxTypeCode)
										Tax.appendChild(TaxRate)
										Tax.appendChild(TaxableBase)
										Tax.appendChild(TaxAmount)
										if(impre)
										{
											EquivalenceSurcharge = <EquivalenceSurcharge/>
											//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
											EquivalenceSurcharge.appendChild(porcimpre.toFixed(2))
											EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
											//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(impre.toFixed(2))
											EquivalenceSurchargeAmount.appendChild(TotalAmount)		
											
											Tax.appendChild(EquivalenceSurcharge)
											Tax.appendChild(EquivalenceSurchargeAmount)
										}
									TaxesOutputs.appendChild(Tax)
									if(impbie2)
									{
										Tax = <Tax/>
										//Impuesto.
											TaxTypeCode = <TaxTypeCode/>
											//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
											//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
											TaxTypeCode.appendChild('01')
											TaxRate = <TaxRate/>
											//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
											TaxRate.appendChild(piva2.toFixed(2))
											TaxableBase = <TaxableBase/>
											//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
												//sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(impbie2.toFixed(2))
											TaxableBase.appendChild(TotalAmount)
											TaxAmount = <TaxAmount/>
											//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(cuotaiva2.toFixed(2))
											TaxAmount.appendChild(TotalAmount)
										Tax.appendChild(TaxTypeCode)
										Tax.appendChild(TaxRate)
										Tax.appendChild(TaxableBase)
										Tax.appendChild(TaxAmount)
											if(impre2)
											{
												EquivalenceSurcharge = <EquivalenceSurcharge/>
												//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
												EquivalenceSurcharge.appendChild(porcimpre2.toFixed(2))
												EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
												//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
													TotalAmount = <TotalAmount/>
													//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
													TotalAmount.appendChild(impre2.toFixed(2))
												EquivalenceSurchargeAmount.appendChild(TotalAmount)		
												
												Tax.appendChild(EquivalenceSurcharge)
												Tax.appendChild(EquivalenceSurchargeAmount)
											}
										TaxesOutputs.appendChild(Tax)
									}
									if(impbie3)
									{
										Tax = <Tax/>
										//Impuesto.
											TaxTypeCode = <TaxTypeCode/>
											//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
											//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
											TaxTypeCode.appendChild('01')
											TaxRate = <TaxRate/>
											//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
											TaxRate.appendChild(piva3.toFixed(2))
											TaxableBase = <TaxableBase/>
											//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
												//sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(impbie3.toFixed(2))
											TaxableBase.appendChild(TotalAmount)
											TaxAmount = <TaxAmount/>
											//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(cuotaiva3.toFixed(2))
											TaxAmount.appendChild(TotalAmount)
										Tax.appendChild(TaxTypeCode)
										Tax.appendChild(TaxRate)
										Tax.appendChild(TaxableBase)
										Tax.appendChild(TaxAmount)
											if(impre3)
											{
												EquivalenceSurcharge = <EquivalenceSurcharge/>
												//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
												EquivalenceSurcharge.appendChild(porcimpre3.toFixed(2))
												EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
												//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
													TotalAmount = <TotalAmount/>
													//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
													TotalAmount.appendChild(impre3.toFixed(2))
												EquivalenceSurchargeAmount.appendChild(TotalAmount)		
												
												Tax.appendChild(EquivalenceSurcharge)
												Tax.appendChild(EquivalenceSurchargeAmount)
											}
										TaxesOutputs.appendChild(Tax)
									}
								if(cant && cant != 0 && imporlfa && imporlfa != 0)
								{										
										/*InvoiceLine.appendChild(IssuerContractReference)
										InvoiceLine.appendChild(IssuerContractDate)
										InvoiceLine.appendChild(IssuerTransactionReference)
										InvoiceLine.appendChild(IssuerTransactionDate)
										InvoiceLine.appendChild(ReceiverContractReference)
										InvoiceLine.appendChild(ReceiverContractDate)
										InvoiceLine.appendChild(ReceiverTransactionReference)
										InvoiceLine.appendChild(ReceiverTransactionDate)
										InvoiceLine.appendChild(FileReference)
										InvoiceLine.appendChild(FileDate)
										InvoiceLine.appendChild(SequenceNumber)
										InvoiceLine.appendChild(DeliveryNotesReferences)*/
										InvoiceLine.appendChild(ItemDescription)
										InvoiceLine.appendChild(Quantity)
										InvoiceLine.appendChild(UnitOfMeasure)
										InvoiceLine.appendChild(UnitPriceWithoutTax)
										InvoiceLine.appendChild(TotalCost)	
										InvoiceLine.appendChild(DiscountsAndRebates)
										InvoiceLine.appendChild(Charges)
										InvoiceLine.appendChild(GrossAmount)
										InvoiceLine.appendChild(TaxesOutputs)								
									Items.appendChild(InvoiceLine)
								}
						
								
						NFacturaAnterior = NFactura;
					}
					
					PaymentDetails = <PaymentDetails/>
					//Datos de pago.
						Installment = <Installment/>
						//Vencimiento.
							InstallmentDueDate = <InstallmentDueDate/>
							//Fechas en las que se deben atender los pagos. ISO 8601:2004.
							InstallmentDueDate.appendChild(utils.dateFormat(fechacobro,'yyyy-MM-dd'))
							InstallmentAmount = <InstallmentAmount/>
							//Importe a satisfacer en cada plazo. Siempre con dos decimales.
							InstallmentAmount.appendChild(impnee.toFixed(2))
							PaymentMeans = <PaymentMeans/>
							//Cada vencimiento/importe podrá tener un medio de pago concreto.
							PaymentMeans.appendChild('04')
							/*01 Al contado
							  02 Recibo domiciliado
							  03 Recibo
							  04 Transferencia*/
							AccountToBeCredited = <AccountToBeCredited/>
							//Cuenta de abono. Único formato admitido. Cuando la forma de pago (PaymentMeans) sea "transferencia" este dato será obligatorio.
								IBAN = <IBAN/>
								//IBAN. Único formato admitido para identificar la cuenta. (Recomendado)
								IBAN.appendChild(cuentaabono)		
								BIC = <BIC/>
								//Código SWIFT. Será obligatorio rellenar las 11 posiciones, utilizando los caracteres XXX cuando no se informe de la sucursal.
								BIC.appendChild(bic)
								AccountToBeCredited.appendChild(IBAN)
								AccountToBeCredited.appendChild(BIC)
							//var AccountToBeDebited = <AccountToBeDebited/>
								
							Installment.appendChild(InstallmentDueDate)
							Installment.appendChild(InstallmentAmount)
							Installment.appendChild(PaymentMeans)
							if(cuentaabono && bic && cuentaabono != '' && bic != '') Installment.appendChild(AccountToBeCredited)
						PaymentDetails.appendChild(Installment)
					Invoice.appendChild(InvoiceHeader)
					Invoice.appendChild(InvoiceIssueData)
					Invoice.appendChild(TaxesOutputs)
					Invoice.appendChild(InvoiceTotals)
					Invoice.appendChild(Items)
					Invoice.appendChild(PaymentDetails)
					Invoices.appendChild(Invoice)
				Document.appendChild(FileHeader)
				Document.appendChild(Parties)
				Document.appendChild(Invoices)
				
					
				xml += Document
				//var newxml = xml.toString().replace(' xmlns=""','')
				newxml = utils.stringReplace(xml.toString(),' xmlns=""','')
				newxml = utils.stringReplace(newxml,'<Facturae','<fe:Facturae')
				newxml = utils.stringReplace(newxml, '</Facturae','</fe:Facturae')
				//var xml2 = new XML(newxml)
				application.output(newxml);
				
				
				/*var jsFile = plugins.file.createTempFile('SEPA','.xml');
				
				var success = plugins.file.writeXMLFile(jsFile ,newxml);
				if (!success) application.output('Could not write file.');
				//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
				//{
					plugins.file.streamFilesToServer(jsFile)
					plugins.file.openFile(jsFile,"_blank",application/xml)
				/*}
				else 
				{
					plugins.file.streamFilesToServer(jsFile,doImportFile)
				}*/
				htm = newxml
				/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
				{
					var js = plugins.file.showFileSaveDialog('FacturaE322.xml', 'Selecciona localización para salvar el fichero');
					if (!js) return;			
								
					// Write the file in the selected location
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
				}
				else
				{*/										
					var jsFile = plugins.file.createTempFile('FacturaE322','.xml');
					
					var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
					if (!success) application.output('Could not write file.');
					
					//plugins.file.streamFilesToServer(jsFile)
					//plugins.file.openFile(jsFile,"_blank",'application/xml')
					else plugins.file.openFile('FacturaE322.xml',jsFile.getBytes(),'application/txt')
				//}
	
			
	}

}

/**
 * Callback method when form is destroyed.
 * 
 * 
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"75B2DBA9-03E1-4FF6-84EB-4AB8A0C5D98A"}
 */
function GenerarXML31()
{	
	
}

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"2150645B-5673-47D0-A1D5-4D9E792D7C41",variableType:-4}
 */
var FileHeader;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"597C7757-6771-43AF-9965-87A34326AB4F",variableType:-4}
 */
var Modality;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"38A7D026-76DB-4F9B-A13A-BFC5B823567D",variableType:-4}
 */
var Batch;

/**
 * @type {Namespace}
 *
 * @properties={typeid:35,uuid:"DD5EECC5-4F42-4611-9A44-697887AB47BD",variableType:-4}
 */
var ns;

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
 * @properties={typeid:24,uuid:"8A58AF82-5C47-46B0-A456-41C3FFBF1D3D"}
 */
function GenerarXML32(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
{
	try
	{
		application.output('Inicio XML')
		var ok = null;
		nfacturas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)	
		/*query = "select count(*),isnull(sum(impnee_cfa),0) from tbfacturacabecera "+
				"WHERE (tbFacturaCabecera.eje_cfa >= "+DEJE+
			     " AND tbFacturaCabecera.eje_cfa <= "+HEJE+") "+
			     "AND (tbFacturaCabecera.ser_cfa >= '"+DSER+"' "+
			     "AND tbFacturaCabecera.ser_cfa <= '"+HSER+"') "+
			     "AND (tbFacturaCabecera.nup_cfa >= "+DNUP+
			     " AND tbFacturaCabecera.nup_cfa <= "+HNUP+") "+
			     "AND (tbFacturaCabecera.clie_cfa BETWEEN "+DCLI+" AND "+HCLI+")";
		var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
		var numfacturas = dataset2.getValue(1,1);
		var sumfacturas = dataset2.getValue(1,2);*/
		
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
		if(dataset.getMaxRowIndex() > 0)
		{					
			/*var cifempresa = dataset.getValue(1,8);
			var tipopersona = TipoPersona(cifempresa);					
			var pais = dataset.getValue(1,21);
			var razonsocial = dataset.getValue(1,3);
			var regmercantil = dataset.getValue(1,17);
			var hoja = dataset.getValue(1,20);
			var folio = dataset.getValue(1,19);
			var seccion = '';
			var tomo = dataset.getValue(1,18);
			var direccion = dataset.getValue(1,5);
			var codigopostal = dataset.getValue(1,4);
			var ciudad = dataset.getValue(1,6);
			var provincia = dataset.getValue(1,7);
			var telefono = dataset.getValue(1,9);
			var fax = dataset.getValue(1,10);
			var web = dataset.getValue(1,12);
			var correo = dataset.getValue(1,11);
			var primerafactura = DEJE.toString() + utils.numberFormat(DNUP,'00000') + DSER;
			var ultimafactura = HEJE.toString() + utils.numberFormat(HNUP,'00000') + HSER;
			var cifcliente = dataset.getValue(1,90);
			var tipopersonacliente = TipoPersona(cifcliente)	
			var paiscliente = dataset.getValue(1,99);
			//var contactocliente = dataset.getValue(1,85);
			var desccliente = dataset.getValue(1,79);
			var direccioncliente = dataset.getValue(1,80);
			var poblacioncliente = dataset.getValue(1,81);
			var provinciacliente = dataset.getValue(1,82);
			var codpostalcliente = dataset.getValue(1,83);
			var razonsocialcliente = dataset.getValue(1,84);
			var fechacobro = dataset.getValue(1,27);
			//var formapago = dataset.getValue(1,30);
			var cuentaabono = dataset.getValue(1,16);
			var bic = dataset.getValue(1,107);
			*/
			datosempresa(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI)
			//query = "select pai_iso3 from pais where pai_iso2 ='"+paiscliente+"'";				
			//var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
			//var paisclienteiso3 = dataset2.getValue(1,1)
			
			getpaiso3()
						
			xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
			application.output('Cabecera')
			Document = <Facturae/>
			ns = new Namespace('fe',"http://www.facturae.es/Facturae/2009/v3.2/Facturae")
			Document.addNamespace(ns)							
			
			ns = new Namespace('ds','http://www.w3.org/2000/09/xmldsig#')
			Document.addNamespace(ns)
			//var Document = <Facturae xmlns:ds="http://www.w3.org/2000/09/xmldsig#"/>
			//var ns = new Namespace('xs','http://www.w3.org/2001/XMLSchema')
			//Document.addNamespace(ns)		
			FileHeader = <FileHeader/>//Cabecera del fichero xml
				SchemaVersion = <SchemaVersion/>
				//Código que indica versión utilizada. Existirá compatibilidad de versiones.
				SchemaVersion.appendChild('3.2')
				Modality = <Modality/>
					//Modalidad. Individual o Lote. Si es "individual" (I) los
					//importes de los campos del grupo Batch coincidirán con sus
					//correspondientes campos del grupo InvoiceTotals y el
					//campo InvoicesCount tendrá siempre el valor "1". Si es
					//"lote" (L), el valor del campo InvoicesCount será siempre	> "1".
				if(numfacturas > 1) Modality.appendChild('L')
				else if(numfacturas == 1) Modality.appendChild('I')
				InvoiceIssuerType = <InvoiceIssuerType/>
					//Tipo Emisor Factura. Puede tomar 3 valores (EM, RE y TE), 
					// que se describen como “Proveedor (antes denominado emisor)”,
					// “Destinatario (antes denominado cliente o receptor)” y 
					// “Tercero”, respectivamente. 
					// Si toma el valor "TE" el grupo ThirdParty será obligatorio 
					// cumplimentarlo en todos sus apartados.*/
				//InvoiceIssuerType.appendChild('RE') 
				InvoiceIssuerType.appendChild('RE') 
				/*var ThirdParty = <ThirdParty/>
					 var TaxIdentification = <TaxIdentification/>
					 //Identificación fiscal.
					 	var PersonTypeCode = <PersonTypeCode/>
					 		PersonTypeCode.appendChild(tipopersona)
						var ResidenceTypeCode = <ResidenceTypeCode/>
					 		ResidenceTypeCode.appendChild('R')
						var TaxIdentificationNumber = <TaxIdentificationNumber/>
					 		TaxIdentificationNumber.appendChild(pais + cifempresa)						 		
						TaxIdentification.appendChild(PersonTypeCode)
					    TaxIdentification.appendChild(ResidenceTypeCode)
						TaxIdentification.appendChild(TaxIdentificationNumber)
						var LegalEntity = <LegalEntity/>
							//Persona jurídica y otras.
								var CorporateName = <CorporateName/>
								//Razón Social.
								CorporateName.appendChild(razonsocial)
								var TradeName = <TradeName/>
								//Nombre Comercial.
								var RegistrationData = <RegistrationData/>
								//Datos Registrales: Inscripción Registro, Tomo, Folio,…
									var Book = <Book/>
									//Libro
									Book.appendChild('')
									var RegisterOfCompaniesLocation = <RegisterOfCompaniesLocation/>
									// Registro Mercantil.
									RegisterOfCompaniesLocation.appendChild(utils.stringLeft(regmercantil,20));
									var Sheet = <Sheet/>
									//Hoja
									Sheet.appendChild(utils.stringLeft(hoja, 20))
									var Folio = <Folio/>
									//Folio
									Folio.appendChild(utils.stringLeft(folio,20))
									var Section = <Section/>
									//Sección.
									Section.appendChild(utils.stringLeft(seccion,20))
									var Volume = <Volume/>
									//Tomo
									Volume.appendChild(utils.stringLeft(tomo,20))
									var AdditionalRegistrationData = <AdditionalRegistrationData/>
									//Otros datos registrales.
									
									RegistrationData.appendChild(Book)
									RegistrationData.appendChild(RegisterOfCompaniesLocation)
									RegistrationData.appendChild(Sheet)
									RegistrationData.appendChild(Folio)
									RegistrationData.appendChild(Section)
									RegistrationData.appendChild(Volume)
									RegistrationData.appendChild(AdditionalRegistrationData)
								var AddressInSpain = <AddressInSpain/>
								//Dirección Nacional. Dirección en España.
									var Address = <Address/>
									//Dirección. Tipo de vía, nombre, número, piso…
									Address.appendChild(utils.stringLeft(direccion, 80))
									var PostCode = <PostCode/>
									//Código Postal asignado por Correos.
									PostCode.appendChild(utils.stringLeft(codigopostal, 5))
									var Town = <Town/>
									//Población. Correspondiente al C.P.
									Town.appendChild(utils.stringLeft(ciudad, 50))
									var Province = <Province/>
									//Provincia. Donde está situada la Población.
									Province.appendChild(utils.stringLeft(provincia, 20))
									var CountryCode = <CountryCode/>
									CountryCode.appendChild('ESP')											
									AddressInSpain.appendChild(Address)
									AddressInSpain.appendChild(PostCode)
									AddressInSpain.appendChild(Town)
									AddressInSpain.appendChild(Province)
									AddressInSpain.appendChild(CountryCode)										
									var ContactDetails = <ContactDetails/>
										//Datos de contacto.
										var Telephone = <Telephone/>
										//Teléfono. Número de teléfono completo con prefijos del país.
										Telephone.appendChild(utils.stringLeft(('+34'+telefono), 15))
										var TeleFax = <TeleFax/>
										//Teléfono. Número de teléfono completo con prefijos del país.
										if(fax) TeleFax.appendChild(utils.stringLeft(('+34'+fax), 15))											
										var WebAddress = <WebAddress/>
										//Página web. URL de la dirección de Internet.
										WebAddress.appendChild(utils.stringLeft(web, 60))
										var ElectronicMail = <ElectronicMail/>
										//Correo electrónico. Dirección de correo electrónico.
										ElectronicMail.appendChild(utils.stringLeft(correo, 60))
										ContactDetails.appendChild(Telephone)
										ContactDetails.appendChild(TeleFax)
										ContactDetails.appendChild(WebAddress)
										ContactDetails.appendChild(ElectronicMail)										
								LegalEntity.appendChild(CorporateName)
								LegalEntity.appendChild(TradeName)
								LegalEntity.appendChild(RegistrationData)
								LegalEntity.appendChild(AddressInSpain)		
								LegalEntity.appendChild(ContactDetails)								
					 ThirdParty.appendChild(TaxIdentification)
					 ThirdParty.appendChild(LegalEntity)*/
					 Batch = <Batch/>
					 		BatchIdentifier = <BatchIdentifier/>
					 		//Identificador del lote. Concatenación del nº de documento del emisor con
					 		//  el número de la primera factura y el número de serie caso de existir.*/
					 		BatchIdentifier.appendChild(utils.stringLeft((primerafactura+ultimafactura), 70))
					 		InvoicesCount = <InvoicesCount/>
					 		//Número total de facturas. Refleja, cuando es lote, el número de facturas 
					 		// del mismo. Siempre será valor "1" cuando el campo Modality (Modalidad)
					 		// tenga el valor "I".*/
					 		InvoicesCount.appendChild(numfacturas)
							TotalInvoicesAmount = <TotalInvoicesAmount/>
					 		//Total facturas. Suma de los importes InvoiceTotal del Fichero. Este importe
					 		// lo es a efectos de total de factura y fiscales, sin tener en cuenta subvenciones,
					 		// anticipos y/o retenciones que pudieran haberse practicado.*/
					 		 	TotalAmount = <TotalAmount/>
					 		 	TotalAmount.appendChild(sumfacturas.toFixed(2))
							TotalInvoicesAmount.appendChild(TotalAmount)
							TotalOutstandingAmount = <TotalOutstandingAmount/>
					 		//Total a pagar. Suma de los importes TotalOutstandingAmount del Fichero, 
					 		// hasta ocho decimales. Es el importe que efectivamente se adeuda, una vez 
					 		// descontados los anticipos y sin tener en cuenta las retenciones.*/
								TotalAmount = <TotalAmount/>
					 		 	TotalAmount.appendChild(sumfacturas.toFixed(2))
							TotalOutstandingAmount.appendChild(TotalAmount)
							TotalExecutableAmount = <TotalExecutableAmount/>
					 		//Total a Ejecutar. Sumatorio de las diferencias de los importes 
					 		// (TotalOutstandingAmount y WithholdingAmount) del fichero = Sumatorio de los Importes
					 		// TotalExecutableAmount, hasta ocho decimales. Es el importe que se adeuda minorado 
					 		// en un posible importe retenido en garantía de cumplimientos contractuales.*/
								TotalAmount = <TotalAmount/>
					 		 	TotalAmount.appendChild(sumfacturas.toFixed(2))
							TotalExecutableAmount.appendChild(TotalAmount)
							InvoiceCurrencyCode = <InvoiceCurrencyCode/>
							//Código ISO 4217:2001 Alpha-3 de la moneda en la que se emite la factura. 
							// Si difiere de la moneda EURO o del campo ExchangeRateDetails será obligatorio 
							// indicar el contravalor y el tipo/fecha de cambio para los campos de base imponible 
							// y cuota, retenida como repercutida, así como en los totales TotalInvoicesAmount, 
							// TotalOutstandingAmount, y TotalExecutableAmount.*/
							InvoiceCurrencyCode.appendChild('EUR')
							Batch.appendChild(BatchIdentifier)
							Batch.appendChild(InvoicesCount)
							Batch.appendChild(TotalInvoicesAmount)
							Batch.appendChild(TotalOutstandingAmount)
							Batch.appendChild(TotalExecutableAmount)
							Batch.appendChild(InvoiceCurrencyCode)						
				FileHeader.appendChild(SchemaVersion)
				FileHeader.appendChild(Modality)
				FileHeader.appendChild(InvoiceIssuerType)
				//FileHeader.appendChild(ThirdParty)	
				FileHeader.appendChild(Batch)	
				Document.appendChild(FileHeader)
				Parties = <Parties/>
				application.output('Vendedor')
				//Sujetos - Datos del emisor y receptor de la factura*/
					SellerParty = <SellerParty/>
					//Emisor. Datos básicos del fichero. Son comunes a la factura o facturas que se incluyen.*/
						TaxIdentification = <TaxIdentification/>
						//Identificación fiscal.
						PersonTypeCode = <PersonTypeCode/>
				 		//Tipo de persona. Física o Jurídica. "F" - Física; "J" - Jurídica.*/
				 		PersonTypeCode.appendChild(tipopersona)
				 		ResidenceTypeCode = <ResidenceTypeCode/>
				 		//Identificación del tipo de residencia y/o extranjería. "E" - Extranjero; 
				 		// * "R" - Residente; "U" - Residente en la Unión Europea.*/
				 		ResidenceTypeCode.appendChild('R')
					    TaxIdentificationNumber = <TaxIdentificationNumber/>
				 		//Código de Identificación Fiscal del sujeto. Se trata de las composiciones 
				 		// *de NIF/CIF que marca la Administración correspondiente (precedidas de las 
				 		// *dos letras del país en el caso de operaciones intracomunitarias, es decir, 
				 		// *cuando comprador y vendedor tienen domicilio fiscal en estados miembros de la UE 
				 		// *distintos).*/
						if(utils.stringLeft(cifempresa,2) == pais) TaxIdentificationNumber.appendChild(cifempresa)
						else TaxIdentificationNumber.appendChild(pais+cifempresa)					 		
					TaxIdentification.appendChild(PersonTypeCode)
				    TaxIdentification.appendChild(ResidenceTypeCode)
					TaxIdentification.appendChild(TaxIdentificationNumber)
					LegalEntity = <LegalEntity/>
							//Persona jurídica y otras.
								CorporateName = <CorporateName/>
								//Razón Social.
								CorporateName.appendChild(razonsocial)
								//var TradeName = <TradeName/>
								//Nombre Comercial.
								RegistrationData = <RegistrationData/>
								//Datos Registrales: Inscripción Registro, Tomo, Folio,…
									Book = <Book/>
									//Libro
									var libro = ''
									Book.appendChild(libro)
									RegisterOfCompaniesLocation = <RegisterOfCompaniesLocation/>
									// Registro Mercantil.
									RegisterOfCompaniesLocation.appendChild(utils.stringLeft(regmercantil,20));
									Sheet = <Sheet/>
									//Hoja
									Sheet.appendChild(utils.stringLeft(hoja, 20))
									Folio = <Folio/>
									//Folio
									Folio.appendChild(utils.stringLeft(folio,20))
									Section = <Section/>
									//Sección.
									Section.appendChild(utils.stringLeft(seccion,20))
									Volume = <Volume/>
									//Tomo
									Volume.appendChild(utils.stringLeft(tomo,20))
									AdditionalRegistrationData = <AdditionalRegistrationData/>
									//Otros datos registrales.
									AdditionalRegistrationData.appendChild('Sin Datos')
									
									if(libro) RegistrationData.appendChild(Book)
									if(regmercantil) RegistrationData.appendChild(RegisterOfCompaniesLocation)
									if(hoja) RegistrationData.appendChild(Sheet)
									if(folio) RegistrationData.appendChild(Folio)
									if(seccion) RegistrationData.appendChild(Section)
									if(tomo) RegistrationData.appendChild(Volume)
									RegistrationData.appendChild(AdditionalRegistrationData)
								AddressInSpain = <AddressInSpain/>
								//Dirección Nacional. Dirección en España.
								Address = <Address/>
								//Dirección. Tipo de vía, nombre, número, piso…
								Address.appendChild(utils.stringLeft(direccion, 80))
								PostCode = <PostCode/>
								//Código Postal asignado por Correos.
								PostCode.appendChild(utils.stringLeft(codigopostal, 5))
								Town = <Town/>
								//Población. Correspondiente al C.P.
								Town.appendChild(utils.stringLeft(ciudad, 50))
								Province = <Province/>
								//Provincia. Donde está situada la Población.
								Province.appendChild(utils.stringLeft(provincia, 20))
								CountryCode = <CountryCode/>
								//Código País. Código según la ISO 3166-1:2006 Alpha-3.
								//Al ser un domicilio ubicado en España siempre será "ESP".*/
								CountryCode.appendChild('ESP')											
								AddressInSpain.appendChild(Address)
								AddressInSpain.appendChild(PostCode)
								AddressInSpain.appendChild(Town)
								AddressInSpain.appendChild(Province)
								AddressInSpain.appendChild(CountryCode)										
								ContactDetails = <ContactDetails/>
								//Datos de contacto.
									Telephone = <Telephone/>
									//Teléfono. Número de teléfono completo con prefijos del país.
									Telephone.appendChild(utils.stringLeft(('+34'+telefono), 15))
									TeleFax = <TeleFax/>
									//Teléfono. Número de teléfono completo con prefijos del país.
									if(fax) TeleFax.appendChild(utils.stringLeft(('+34'+fax), 15))											
									WebAddress = <WebAddress/>
									//Página web. URL de la dirección de Internet.
									WebAddress.appendChild(utils.stringLeft(web, 60))
									ElectronicMail = <ElectronicMail/>
									//Correo electrónico. Dirección de correo electrónico.
									ElectronicMail.appendChild(utils.stringLeft(correo, 60))
									if(telefono) ContactDetails.appendChild(Telephone)
									if(fax) ContactDetails.appendChild(TeleFax)
									if(web) ContactDetails.appendChild(WebAddress)
									if(correo) ContactDetails.appendChild(ElectronicMail)										
							LegalEntity.appendChild(CorporateName)
							//LegalEntity.appendChild(TradeName)
							LegalEntity.appendChild(RegistrationData)
							LegalEntity.appendChild(AddressInSpain)		
							LegalEntity.appendChild(ContactDetails)	
					
					
					
					
					
					SellerParty.appendChild(TaxIdentification)
					SellerParty.appendChild(LegalEntity)
					Parties.appendChild(SellerParty)
					//Document.appendChild(Parties)
					
							
							application.output('Comprador')
							BuyerParty = <BuyerParty/>
								application.output('IdentificacionComprador')
								TaxIdentification = <TaxIdentification/>
									application.output('Tipo de Persona')
									PersonTypeCode = <PersonTypeCode/>
									//Tipo de persona. Física o Jurídica. "F" - Física; "J" - Jurídica.
									PersonTypeCode.appendChild(tipopersonacliente)
									application.output('Tipo de Residencia')
									ResidenceTypeCode = <ResidenceTypeCode/>
									//Identificación del tipo de residencia y/o extranjería. 
									//"E" - Extranjero; 
									//"R" - Residente; 
									//"U" - Residente en la Unión Europea.
									if(paiscliente == 'ES' || paiscliente == null || paiscliente == '') var tiponacionalidad = 'R'
									else tiponacionalidad = TipoNacionalidad(paiscliente)
									ResidenceTypeCode.appendChild(tiponacionalidad)
									TaxIdentificationNumber = <TaxIdentificationNumber/>
									if(utils.stringLeft(cifcliente,2) == paiscliente) TaxIdentificationNumber.appendChild(utils.stringLeft(cifcliente,30))
									else TaxIdentificationNumber.appendChild(utils.stringLeft(paiscliente+cifcliente,30))	//Código de Identificación Fiscal del sujeto. Se trata de las composiciones de NIF/CIF que marca la Administración correspondiente (precedidas de las dos letras del país en el caso de operaciones intracomunitarias, es decir, cuando comprador y vendedor tienen domicilio fiscal en estados miembros de la UE distintos).
																
								TaxIdentification.appendChild(PersonTypeCode)
								TaxIdentification.appendChild(ResidenceTypeCode)
								TaxIdentification.appendChild(TaxIdentificationNumber)
								application.output('...')
								LegalEntity = <LegalEntity/>
										CorporateName = <CorporateName/>
										application.output('Responsable Cliente')										
										//Nombre de la persona responsable o de relación del centro.
										if(razonsocialcliente) CorporateName.appendChild(utils.stringLeft(razonsocialcliente,40))
										else CorporateName.appendChild(utils.stringLeft(desccliente,40))
										LegalEntity.appendChild(CorporateName)
										if(paiscliente == 'ES')
										{
											application.output('Direccion Cliente')										
											AddressInSpain = <AddressInSpain/>
												Address = <Address/>
												Address.appendChild(utils.stringLeft(direccioncliente,80))
												PostCode = <PostCode/>
												PostCode.appendChild(utils.stringLeft(codpostalcliente,5))
												Town = <Town/>
												Town.appendChild(utils.stringLeft(poblacioncliente,50))
												Province = <Province/>
												Province.appendChild(utils.stringLeft(provinciacliente,20))
												CountryCode = <CountryCode/>
												CountryCode.appendChild('ESP')
											AddressInSpain.appendChild(Address)
											AddressInSpain.appendChild(PostCode)
											AddressInSpain.appendChild(Town)
											AddressInSpain.appendChild(Province)										
											AddressInSpain.appendChild(CountryCode)										
											LegalEntity.appendChild(AddressInSpain)
										}
										else
										{
											OverseasAddress = <OverseasAddress/>
											//Dirección en el extranjero.
												Address = <Address/>
												Address.appendChild(utils.stringLeft(direccioncliente,80))
												PostCodeAndTown = <PostCodeAndTown/>
												PostCodeAndTown.appendChild(utils.stringLeft(poblacioncliente + ' ' +codpostalcliente,50))
												Province = <Province/>
												Province.appendChild(provinciacliente)
												CountryCode = <CountryCode/>
												CountryCode.appendChild(paisclienteiso3)
											OverseasAddress.appendChild(Address)
											OverseasAddress.appendChild(PostCodeAndTown)
											OverseasAddress.appendChild(Province)
											OverseasAddress.appendChild(CountryCode)										
											LegalEntity.appendChild(OverseasAddress)
										}
										
									
									/*Individual = <Individual/>
										application.output('Persona Fisica')										
										//Persona física.		
										Name = <Name/>
										//Nombre de la persona responsable o de relación del centro.
										if(razonsocialcliente) Name.appendChild(utils.stringLeft(razonsocialcliente,40))
										else Name.appendChild(utils.stringLeft(desccliente,40))
										FirstSurname = <FirstSurname/>
										//Nombre de la persona responsable o de relación del centro.
										FirstSurname.appendChild(utils.stringLeft('',40))
										Individual.appendChild(Name)
										Individual.appendChild(FirstSurname)
										if(paiscliente == 'ES')
										{
											AddressInSpain = <AddressInSpain/>
											Address = <Address/>
											Address.appendChild(utils.stringLeft(direccioncliente,80))
											PostCode = <PostCode/>
											PostCode.appendChild(utils.stringLeft(codpostalcliente,5))
											Town = <Town/>
											Town.appendChild(utils.stringLeft(poblacioncliente,50))
											Province = <Province/>
											Province.appendChild(utils.stringLeft(provinciacliente,20))
											CountryCode = <CountryCode/>
											CountryCode.appendChild('ESP')
											AddressInSpain.appendChild(Address)
											AddressInSpain.appendChild(PostCode)
											AddressInSpain.appendChild(Town)
											AddressInSpain.appendChild(Province)										
											AddressInSpain.appendChild(CountryCode)										
											Individual.appendChild(AddressInSpain)
										}
										else
										{
											OverseasAddress = <OverseasAddress/>
											//Dirección en el extranjero.
												Address = <Address/>
												Address.appendChild(utils.stringLeft(direccioncliente,80))
												PostCodeAndTown = <PostCodeAndTown/>
												PostCodeAndTown.appendChild(utils.stringLeft(poblacioncliente + ' ' +codpostalcliente,50))
												Province = <Province/>
												Province.appendChild(provinciacliente)
												CountryCode = <CountryCode/>
												CountryCode.appendChild(paisclienteiso3)
											OverseasAddress.appendChild(Address)
											OverseasAddress.appendChild(PostCodeAndTown)
											OverseasAddress.appendChild(Province)
											OverseasAddress.appendChild(CountryCode)										
											Individual.appendChild(OverseasAddress)
										}
							*/			
							BuyerParty.appendChild(TaxIdentification)
							BuyerParty.appendChild(LegalEntity)		
							//BuyerParty.appendChild(Individual)		
						//Parties.appendChild(SellerParty)
						Parties.appendChild(BuyerParty)
						Document.appendChild(Parties)
						//application.output('Facturas')
						Invoices = <Invoices/>
						//Conjunto de facturas que contiene el fichero. Para todos los elementos numéricos, los cálculos se efectuarán siempre redondeando al número de decimales correspondientes.
						var NFactura = null;
						var NFacturaAnterior = null;
						
						application.output('NFactura')
						for(var i=1;i<=dataset.getMaxRowIndex();i++)
						{
							NFactura = dataset.getValue(i,23)+utils.numberFormat(dataset.getValue(i,25),'00000')+dataset.getValue(i,24);
							
							
							if(NFactura != NFacturaAnterior)
							{	
								if(i>1)
								{
									PaymentDetails = <PaymentDetails/>
									//Datos de pago.
										Installment = <Installment/>
										//Vencimiento.
											InstallmentDueDate = <InstallmentDueDate/>
											//Fechas en las que se deben atender los pagos. ISO 8601:2004.
											InstallmentDueDate.appendChild(utils.dateFormat(fechacobro,'yyyy-MM-dd'))
											InstallmentAmount = <InstallmentAmount/>
											//Importe a satisfacer en cada plazo. Siempre con dos decimales.
											InstallmentAmount.appendChild(impnee.toFixed(2))
											PaymentMeans = <PaymentMeans/>
											//Cada vencimiento/importe podrá tener un medio de pago concreto.
											PaymentMeans.appendChild('04')
											/*01 Al contado
											  02 Recibo domiciliado
											  03 Recibo
											  04 Transferencia*/
											AccountToBeCredited = <AccountToBeCredited/>
											//Cuenta de abono. Único formato admitido. Cuando la forma de pago (PaymentMeans) sea "transferencia" este dato será obligatorio.
												IBAN = <IBAN/>
												//IBAN. Único formato admitido para identificar la cuenta. (Recomendado)
												IBAN.appendChild(cuentaabono)		
												BIC = <BIC/>
												//Código SWIFT. Será obligatorio rellenar las 11 posiciones, utilizando los caracteres XXX cuando no se informe de la sucursal.
												BIC.appendChild(bic)
												AccountToBeCredited.appendChild(IBAN)
												AccountToBeCredited.appendChild(BIC)
											//var AccountToBeDebited = <AccountToBeDebited/>
												
											Installment.appendChild(InstallmentDueDate)
											Installment.appendChild(InstallmentAmount)
											Installment.appendChild(PaymentMeans)
											if(cuentaabono && bic && cuentaabono != '' && bic != '') Installment.appendChild(AccountToBeCredited)
										PaymentDetails.appendChild(Installment)
									Invoice = <Invoice/>
									Invoice.appendChild(InvoiceHeader)
									Invoice.appendChild(InvoiceIssueData)
									Invoice.appendChild(TaxesOutputs)
									Invoice.appendChild(InvoiceTotals)
									Invoice.appendChild(Items)
									Invoice.appendChild(PaymentDetails)
									Invoices.appendChild(Invoice)
									Document.appendChild(Invoices)
							
									/*var fechafactura = dataset.getValue(i,26);
									var impbre = dataset.getValue(i,37);
									var depp = dataset.getValue(i,38);
									//var porcgfi = dataset.getValue(i,50);
									var impgfi = dataset.getValue(i,51);
									var impnee = dataset.getValue(i,49);
									var impbie = dataset.getValue(i,40);
									var piva = dataset.getValue(i,41);
									var cuotaiva = dataset.getValue(i,42);
									var impbie2 = dataset.getValue(i,43);
									var piva2 = dataset.getValue(i,44);
									var cuotaiva2 = dataset.getValue(i,45);
									var impbie3 = dataset.getValue(i,46);
									var piva3 = dataset.getValue(i,47);
									var cuotaiva3 = dataset.getValue(i,48);
									var impre = dataset.getValue(i,52);
									if(impre)
									{
										query = "select ivare from tbmaestrotipoiva "+
												"WHERE factor = "+piva;
										dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
										var porcimpre = dataset2.getValue(1,1)
									}
									var impre2 = dataset.getValue(i,53);
									if(impre2)
									{
										query = "select ivare from tbmaestrotipoiva "+
												"WHERE factor = "+piva2;
										dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
										var porcimpre2 = dataset2.getValue(1,1)
									}						
									var impre3 = dataset.getValue(i,54);
									if(impre3)
									{
										query = "select ivare from tbmaestrotipoiva "+
												"WHERE factor = "+piva3;
										dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
										var porcimpre3 = dataset2.getValue(1,1)
									}
									//var alb = dataset.getValue(i,60);
									//var lalb = dataset.getValue(i,61);
									var concepto = dataset.getValue(i,63)
									var cant = dataset.getValue(i,64)
									var imporlfa = dataset.getValue(i,73)
									var preclfa = dataset.getValue(i,65)
									var dtolfa = dataset.getValue(i,68)
									var impordtolfa = dataset.getValue(i,69)
									*/
									datoslineas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI,i)
								}
								else
								{
									/*fechafactura = dataset.getValue(i,26);
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
										dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
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
									//alb = dataset.getValue(i,60);
									//lalb = dataset.getValue(i,61);
									concepto = dataset.getValue(i,63)
									cant = dataset.getValue(i,64)
									imporlfa = dataset.getValue(i,73)
									preclfa = dataset.getValue(i,65)
									dtolfa = dataset.getValue(i,68)
									impordtolfa = dataset.getValue(i,69)
									*/
									datoslineas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI,i)
								}
								application.output('Cabecera Factura')
								Invoice = <Invoice/>
								InvoiceHeader = <InvoiceHeader/>
									InvoiceNumber = <InvoiceNumber/>
										InvoiceNumber.appendChild(NFactura)
									InvoiceSeriesCode = <InvoiceSeriesCode/>
										if(fechafactura) InvoiceSeriesCode.appendChild(fechafactura.getFullYear().toString())
										else InvoiceSeriesCode.appendChild('')
									InvoiceDocumentType = <InvoiceDocumentType/>
										//Tipo documento factura. Puede tomar 3 valores (FC, FA y AF), 
										//que se describen como “Factura completa u ordinaria”, 
										//“Factura simplificada” y “Código sin uso desde la entrada en 
										//vigor del RD 1789/2010. Se mantiene por compatibilidad hacia atrás. 
										//Antes significaba autofactura. Para indicar que se trata de una 
										//factura expedida por el destinatario, se recomienda emplear 
										//el elemento InvoiceIssuerType empleando el valor RE, que significa 
										//Destinatario”, respectivamente.
										InvoiceDocumentType.appendChild('FC')
									InvoiceClass = <InvoiceClass/>
									//Clase de Factura. Puede tomar 6 valores (OO, OR, OC, CO, CR y CC), 
									//que se describen como “Original”, “Original rectificativa”, 
									//“Original recapitulativa”, “Duplicado original”, 
									//“Duplicado rectificativa” y “Duplicado recapitulativa”.	
										InvoiceClass.appendChild('OO')
									InvoiceHeader.appendChild(InvoiceNumber)
									InvoiceHeader.appendChild(InvoiceSeriesCode)
									InvoiceHeader.appendChild(InvoiceDocumentType)
									InvoiceHeader.appendChild(InvoiceClass)
								InvoiceIssueData = <InvoiceIssueData/>	
								//Datos de la emisión de la factura
									IssueDate = <IssueDate/>
									//Fecha de expedición. Fecha en la que se genera la factura con efectos 
									//fiscales. ISO 8601:2004. Esta fecha no podrá ser posterior a la fecha
									// de la firma electrónica.
									IssueDate.appendChild(utils.dateFormat(fechafactura,'yyyy-MM-dd'))
									
									OperationDate = <OperationDate/>
									//Fecha de Operación. Fecha en la que se realiza el servicio o se entrega 
									//el bien. ISO 8601:2004. Esta fecha solo será obligatoria si es distinta 
									//de la fecha de expedición.
									OperationDate.appendChild(utils.dateFormat(fechafactura,'yyyy-MM-dd'))
									/*PlaceOfIssue = <PlaceOfIssue/>
									//Lugar de expedición. Plaza en la que se expide el documento.
										PostCode = <PostCode/>
										PostCode.appendChild(utils.numberFormat(0,'00000'))
										PlaceOfIssueDescription = <PlaceOfIssueDescription/>
										//Texto del nombre del lugar.									
										
										PlaceOfIssue.appendChild(PostCode)
										PlaceOfIssue.appendChild(PlaceOfIssueDescription)
									*/
									InvoiceCurrencyCode = <InvoiceCurrencyCode/>
									//Moneda de la operación. Código ISO 4217:2001 Alpha-3 de la moneda en la que se emite la factura. Si la moneda de la operación difiere de la moneda del impuesto (EURO), los campos del contravalor ExchangeRate y
									//ExchangeRateDate deberán cumplimentarse, en cumplimiento del Artº 10.1 del Reglamento sobre facturación. RD 1496/2003 de 28 de Noviembre.
									InvoiceCurrencyCode.appendChild('EUR')
									TaxCurrencyCode = <TaxCurrencyCode/>
									//Moneda del Impuesto. Código ISO 4217:2001 Alpha-3 de la moneda en la que se liquida el impuesto.
									TaxCurrencyCode.appendChild('EUR')
									LanguageName = <LanguageName/>
									//Moneda del Impuesto. Código ISO 4217:2001 Alpha-3 de la moneda en la que se liquida el impuesto.
									LanguageName.appendChild('es')
									
								InvoiceIssueData.appendChild(IssueDate)
								//InvoiceIssueData.appendChild(OperationDate)
								//InvoiceIssueData.appendChild(PlaceOfIssue)
								InvoiceIssueData.appendChild(InvoiceCurrencyCode)
								InvoiceIssueData.appendChild(TaxCurrencyCode)
								InvoiceIssueData.appendChild(LanguageName)
								TaxesOutputs = <TaxesOutputs/>
								//Impuestos repercutidos.
									Tax = <Tax/>
									//Impuesto.
										TaxTypeCode = <TaxTypeCode/>
										//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
										//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
										TaxTypeCode.appendChild('01')
										TaxRate = <TaxRate/>
										//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
										TaxRate.appendChild(piva.toFixed(2))
										TaxableBase = <TaxableBase/>
										//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
											TotalAmount = <TotalAmount/>
											//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
											//sobre facturación, RD 1496/2003 de 28 de Noviembre.
											TotalAmount.appendChild(impbie.toFixed(2))
										TaxableBase.appendChild(TotalAmount)
										TaxAmount = <TaxAmount/>
										//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
											TotalAmount = <TotalAmount/>
											//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
											TotalAmount.appendChild(cuotaiva.toFixed(2))
										TaxAmount.appendChild(TotalAmount)
									Tax.appendChild(TaxTypeCode)
									Tax.appendChild(TaxRate)
									Tax.appendChild(TaxableBase)
									Tax.appendChild(TaxAmount)
										if(impre)
										{
											EquivalenceSurcharge = <EquivalenceSurcharge/>
											//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
											EquivalenceSurcharge.appendChild(porcimpre.toFixed(2))
											EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
											//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(impre.toFixed(2))
											EquivalenceSurchargeAmount.appendChild(TotalAmount)		
											
											Tax.appendChild(EquivalenceSurcharge)
											Tax.appendChild(EquivalenceSurchargeAmount)
										}
									TaxesOutputs.appendChild(Tax)
									if(impbie2)
									{
										Tax = <Tax/>
										//Impuesto.
											TaxTypeCode = <TaxTypeCode/>
											//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
											//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
											TaxTypeCode.appendChild('01')
											TaxRate = <TaxRate/>
											//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
											TaxRate.appendChild(piva2.toFixed(2))
											TaxableBase = <TaxableBase/>
											//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
												//sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(impbie2.toFixed(2))
											TaxableBase.appendChild(TotalAmount)
											TaxAmount = <TaxAmount/>
											//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(cuotaiva2.toFixed(2))
											TaxAmount.appendChild(TotalAmount)
										Tax.appendChild(TaxTypeCode)
										Tax.appendChild(TaxRate)
										Tax.appendChild(TaxableBase)
										Tax.appendChild(TaxAmount)
											if(impre2)
											{
												EquivalenceSurcharge = <EquivalenceSurcharge/>
												//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
												EquivalenceSurcharge.appendChild(porcimpre2.toFixed(2))
												EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
												//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
													TotalAmount = <TotalAmount/>
													//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
													TotalAmount.appendChild(impre2.toFixed(2))
												EquivalenceSurchargeAmount.appendChild(TotalAmount)		
												
												Tax.appendChild(EquivalenceSurcharge)
												Tax.appendChild(EquivalenceSurchargeAmount)
											}
										TaxesOutputs.appendChild(Tax)
									}
									if(impbie3)
									{
										Tax = <Tax/>
										//Impuesto.
											TaxTypeCode = <TaxTypeCode/>
											//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
											//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
											TaxTypeCode.appendChild('01')
											TaxRate = <TaxRate/>
											//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
											TaxRate.appendChild(piva3.toFixed(2))
											TaxableBase = <TaxableBase/>
											//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
												//sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(impbie3.toFixed(2))
											TaxableBase.appendChild(TotalAmount)
											TaxAmount = <TaxAmount/>
											//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
												TotalAmount = <TotalAmount/>
												//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
												TotalAmount.appendChild(cuotaiva3.toFixed(2))
											TaxAmount.appendChild(TotalAmount)
										Tax.appendChild(TaxTypeCode)
										Tax.appendChild(TaxRate)
										Tax.appendChild(TaxableBase)
										Tax.appendChild(TaxAmount)
											if(impre3)
											{
												EquivalenceSurcharge = <EquivalenceSurcharge/>
												//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
												EquivalenceSurcharge.appendChild(porcimpre3.toFixed(2))
												EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
												//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
													TotalAmount = <TotalAmount/>
													//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
													TotalAmount.appendChild(impre3.toFixed(2))
												EquivalenceSurchargeAmount.appendChild(TotalAmount)		
												
												Tax.appendChild(EquivalenceSurcharge)
												Tax.appendChild(EquivalenceSurchargeAmount)
											}
										TaxesOutputs.appendChild(Tax)
									}
									
									InvoiceTotals = <InvoiceTotals/>
										TotalGrossAmount = <TotalGrossAmount/>
										//Total Importe Bruto. Suma total de importes brutos de los detalles de la factura. Hasta ocho decimales.
										TotalGrossAmount.appendChild(impbre.toFixed(2))
										TotalGeneralDiscounts = <TotalGeneralDiscounts/>
										//Total Importe Bruto. Suma total de importes brutos de los detalles de la factura. Hasta ocho decimales.
										TotalGeneralDiscounts.appendChild(globals.GCROUND(impbre*depp,2).toFixed(2))
										TotalGeneralSurcharges = <TotalGeneralSurcharges/>
										//Total general de cargos. Sumatorio de los importes de los diferentes campos GeneralSurcharges. Hasta ocho decimales.
										TotalGeneralSurcharges.appendChild(globals.GCROUND(impgfi,2).toFixed(2))
										TotalGrossAmountBeforeTaxes = <TotalGrossAmountBeforeTaxes/>
										//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
										TotalGrossAmountBeforeTaxes.appendChild(globals.GCROUND(impbie+impbie2+impbie3,2).toFixed(2))
										TotalTaxOutputs = <TotalTaxOutputs/>
										//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
										TotalTaxOutputs.appendChild(globals.GCROUND(cuotaiva+cuotaiva2+cuotaiva3+impre+impre2+impre3,2).toFixed(2))
										TotalTaxesWithheld = <TotalTaxesWithheld/>
										//Total impuestos retenidos. Hasta ocho decimals.
										TotalTaxesWithheld.appendChild(0)
										InvoiceTotal = <InvoiceTotal/>
										//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
										InvoiceTotal.appendChild(impnee.toFixed(2))
										TotalOutstandingAmount = <TotalOutstandingAmount/>
										//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
										TotalOutstandingAmount.appendChild(impnee.toFixed(2))
										TotalExecutableAmount = <TotalExecutableAmount/>
										//Total importe bruto antes de impuestos. Resultado de: TotalGrossAmount - TotalGeneralDiscounts + TotalGeneralSurcharges. Hasta ocho decimales.
										TotalExecutableAmount.appendChild(impnee.toFixed(2))								
									InvoiceTotals.appendChild(TotalGrossAmount)
									InvoiceTotals.appendChild(TotalGeneralDiscounts)
									InvoiceTotals.appendChild(TotalGeneralSurcharges)
									InvoiceTotals.appendChild(TotalGrossAmountBeforeTaxes)
									InvoiceTotals.appendChild(TotalTaxOutputs)
									InvoiceTotals.appendChild(TotalTaxesWithheld)
									InvoiceTotals.appendChild(InvoiceTotal)
									InvoiceTotals.appendChild(TotalOutstandingAmount)
									InvoiceTotals.appendChild(TotalExecutableAmount)
									var Items = <Items/> 
									//Información detallada.
								
							}
							else
							{
								/*fechafactura = dataset.getValue(i,26);
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
									dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
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
								//alb = dataset.getValue(i,60);
								//lalb = dataset.getValue(i,61);
								concepto = dataset.getValue(i,63)
								cant = dataset.getValue(i,64)
								imporlfa = dataset.getValue(i,73)
								preclfa = dataset.getValue(i,65)
								dtolfa = dataset.getValue(i,68)
								impordtolfa = dataset.getValue(i,69)
								*/
								datoslineas(DEJE,DSER,DNUP,HEJE,HSER,HNUP,DCLI,HCLI,i)
							}
							
								InvoiceLine = <InvoiceLine/>
								//Líneas de detalle de la factura.
									/*var IssuerContractReference = <IssuerContractReference/>
									//Referencia del contrato del Emisor.
									var IssuerContractDate = <IssuerContractDate/>
									//Fecha del contrato del emisor.
									var IssuerTransactionReference = <IssuerTransactionReference/>
									//Referencia de la Operación, Número de Pedido, Contrato, etc. del Emisor.
									var IssuerTransactionDate = <IssuerTransactionDate/>
									//Fecha de operación / pedido del emisor.								
									var ReceiverContractReference = <ReceiverContractReference/>
									//Referencia del contrato del Receptor.
									var ReceiverContractDate = <ReceiverContractDate/>
									//Fecha del contrato del receptor.
									var ReceiverTransactionReference = <ReceiverTransactionReference/>
									//Referencia de la Operación, Número de Pedido, Contrato, etc. del Receptor.
									var ReceiverTransactionDate = <ReceiverTransactionDate/>
									//Fecha de operación / pedido del receptor.
									var FileReference = <FileReference/>
									//Referencia del expediente.
									var FileDate = <FileDate/>
									//Fecha del expediente.
									var SequenceNumber = <SequenceNumber/>
									//Número de secuencia o línea del pedido.
									var DeliveryNotesReferences = <DeliveryNotesReferences/>
									//Referencias de albaranes.
										var DeliveryNote = <DeliveryNote/>
										//Información del albarán.
											var DeliveryNoteNumber = <DeliveryNoteNumber/>
											//Número de referencia del albarán.
											if(alb) DeliveryNoteNumber.appendChild(alb);
											var DeliveryNoteDate = <DeliveryNoteDate/>
											//Fecha del albarán.
											if(alb)
											{
												query = 'select fecha_cal from calbaran where cod_cal ='+alb;
												dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
												var fecha_cal = dataset2.getValue(1,1)
												DeliveryNoteDate.appendChild(fecha_cal)
											}										
											DeliveryNote.appendChild(DeliveryNoteNumber)
											DeliveryNote.appendChild(DeliveryNoteDate)
										DeliveryNotesReferences.appendChild(DeliveryNote)*/
									ItemDescription = <ItemDescription/>
									//Descripción del bien o servicio.
									ItemDescription.appendChild(concepto)		
									Quantity = <Quantity/>
									//Cantidad. Número de Unidades servidas/prestadas.
									Quantity.appendChild(cant)
									UnitOfMeasure = <UnitOfMeasure/>
									//Cantidad. Número de Unidades servidas/prestadas.
									UnitOfMeasure.appendChild('01')
									UnitPriceWithoutTax = <UnitPriceWithoutTax/>
									//Precio de la unidad de bien o servicio servido/prestado, en la moneda indicada en la Cabecera de la Factura. Siempre sin Impuestos. Hasta ocho decimales.
									if(preclfa) var imp = preclfa
									else imp = 0	
									UnitPriceWithoutTax.appendChild(imp.toFixed(2))
									TotalCost = <TotalCost/>
									//Coste Total. Resultado: Quantity x UnitPriceWithoutTax Hasta ocho decimales
									TotalCost.appendChild(imporlfa)
									
									DiscountsAndRebates = <DiscountsAndRebates/>
										//Descuentos.
											Discount = <Discount/>
											//Descuento.
												DiscountReason = <DiscountReason/>
												DiscountReason.appendChild('Descuento')
												DiscountRate = <DiscountRate/>
												DiscountRate.appendChild(globals.GCROUND(dtolfa,2).toFixed(2))
												DiscountAmount = <DiscountAmount/>
												DiscountAmount.appendChild(globals.GCROUND(impordtolfa,2).toFixed(2))
												Discount.appendChild(DiscountReason)
												Discount.appendChild(DiscountRate)
												Discount.appendChild(DiscountAmount)
									DiscountsAndRebates.appendChild(Discount)
									Charges = <Charges/>	
									//Cargos.
										Charge = <Charge/>	
										//Cargo
											ChargeReason = <ChargeReason/>
											//Concepto por el que se aplica el cargo.
											ChargeReason.appendChild('Cargo')
											ChargeRate = <ChargeRate/>
											//Porcentaje a cargar sobre el TIB. Los porcentajes se reflejan con hasta 8 decimales.
											ChargeRate.appendChild(0)
											ChargeAmount = <ChargeAmount/>
											//Importe a cargar sobre el TIB. Hasta 8 decimales.
											ChargeAmount.appendChild(0)
											Charge.appendChild(ChargeReason)
											Charge.appendChild(ChargeRate)
											Charge.appendChild(ChargeAmount)
									Charges.appendChild(Charge)
									GrossAmount = <GrossAmount/>
										if(imporlfa) imp = imporlfa
										else imp = 0	
										GrossAmount.appendChild(imp.toFixed(2))	
									TaxesOutputs = <TaxesOutputs/>
									//Impuestos retenidos. Es una secuencia de elementos, cada uno de los cuales contiene la información de un impuesto retenido.
										Tax = <Tax/>										
											TaxTypeCode = <TaxTypeCode/>
											TaxTypeCode.appendChild('01')
											TaxRate = <TaxRate/>
											TaxRate.appendChild(piva.toFixed(2))
											TaxableBase = <TaxableBase/>
												TotalAmount = <TotalAmount/>
												TotalAmount.appendChild(impbie.toFixed(2))
												TaxableBase.appendChild(TotalAmount)
											TaxAmount = <TaxAmount/>
												TotalAmount = <TotalAmount/>
												TotalAmount.appendChild(cuotaiva.toFixed(2))
												TaxAmount.appendChild(TotalAmount)
											Tax.appendChild(TaxTypeCode)
											Tax.appendChild(TaxRate)
											Tax.appendChild(TaxableBase)
											Tax.appendChild(TaxAmount)
											if(impre)
											{
												EquivalenceSurcharge = <EquivalenceSurcharge/>
												//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
												EquivalenceSurcharge.appendChild(porcimpre.toFixed(2))
												EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
												//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
													TotalAmount = <TotalAmount/>
													//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
													TotalAmount.appendChild(impre.toFixed(2))
												EquivalenceSurchargeAmount.appendChild(TotalAmount)		
												
												Tax.appendChild(EquivalenceSurcharge)
												Tax.appendChild(EquivalenceSurchargeAmount)
											}
										TaxesOutputs.appendChild(Tax)
										if(impbie2)
										{
											Tax = <Tax/>
											//Impuesto.
												TaxTypeCode = <TaxTypeCode/>
												//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
												//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
												TaxTypeCode.appendChild('01')
												TaxRate = <TaxRate/>
												//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
												TaxRate.appendChild(piva2.toFixed(2))
												TaxableBase = <TaxableBase/>
												//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
													TotalAmount = <TotalAmount/>
													//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
													//sobre facturación, RD 1496/2003 de 28 de Noviembre.
													TotalAmount.appendChild(impbie2.toFixed(2))
												TaxableBase.appendChild(TotalAmount)
												TaxAmount = <TaxAmount/>
												//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
													TotalAmount = <TotalAmount/>
													//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
													TotalAmount.appendChild(cuotaiva2.toFixed(2))
												TaxAmount.appendChild(TotalAmount)
											Tax.appendChild(TaxTypeCode)
											Tax.appendChild(TaxRate)
											Tax.appendChild(TaxableBase)
											Tax.appendChild(TaxAmount)
												if(impre2)
												{
													EquivalenceSurcharge = <EquivalenceSurcharge/>
													//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
													EquivalenceSurcharge.appendChild(porcimpre2.toFixed(2))
													EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
													//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
														TotalAmount = <TotalAmount/>
														//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
														TotalAmount.appendChild(impre2.toFixed(2))
													EquivalenceSurchargeAmount.appendChild(TotalAmount)		
													
													Tax.appendChild(EquivalenceSurcharge)
													Tax.appendChild(EquivalenceSurchargeAmount)
												}
											TaxesOutputs.appendChild(Tax)
										}
										if(impbie3)
										{
											Tax = <Tax/>
											//Impuesto.
												TaxTypeCode = <TaxTypeCode/>
												//Identificador del impuesto por el que se tributa. En caso de que el impuesto no corresponda a ninguno de los relacionados en “TaxTypeCodeType”, utilícese el código “05”, definido como “otro”. En este caso, se empleará el elemento “AditionalLineItemInformation” para identificar el impuesto, donde se incluirá, para ello, la siguiente cadena de caracteres: 05 = [nombre del impuesto]. Si hubiera varios impuestos con el código “05”, se añadirán los valores de sus campos “TaxRate”, “TaxableBase” y “TaxAmount”, en este orden, hasta que sea posible discernirlos; es decir: 05 [valor “TaxRate”] [valor “TaxableBase”] [valor “TaxAmount”] = [nombre del impuesto]. Cuando la operación esté exenta del impuesto o se encuentre en régimen suspensivo, deberá indicarse el motivo en el elemento “AditionalLineItemInformation”. Este elemento se define a nivel de línea, no de impuesto; por ello, para
												//identificar cuál es el impuesto del que está exenta, el motivo irá precedido del código del impuesto; por ejemplo: 07 exenta por….
												TaxTypeCode.appendChild('01')
												TaxRate = <TaxRate/>
												//Tipo impositivo. Téngase en cuenta que no siempre son porcentajes. La legislación del impuesto correspondiente permitirá identificar las unidades y dimensiones del tipo impositivo. Hasta ocho decimales.
												TaxRate.appendChild(piva3.toFixed(2))
												TaxableBase = <TaxableBase/>
												//Base imponible. La legislación del impuesto correspondiente determina cómo se calcula la base imponible. Hasta ocho decimales.
													TotalAmount = <TotalAmount/>
													//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento
													//sobre facturación, RD 1496/2003 de 28 de Noviembre.
													TotalAmount.appendChild(impbie3.toFixed(2))
												TaxableBase.appendChild(TotalAmount)
												TaxAmount = <TaxAmount/>
												//Cuota. La legislación del impuesto correspondiente determina cómo se calcula la cuota. Hasta ocho decimales.
													TotalAmount = <TotalAmount/>
													//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
													TotalAmount.appendChild(cuotaiva3.toFixed(2))
												TaxAmount.appendChild(TotalAmount)
											Tax.appendChild(TaxTypeCode)
											Tax.appendChild(TaxRate)
											Tax.appendChild(TaxableBase)
											Tax.appendChild(TaxAmount)
												if(impre3)
												{
													EquivalenceSurcharge = <EquivalenceSurcharge/>
													//Tipo de recargo de Equivalencia. Siempre con dos decimales.											
													EquivalenceSurcharge.appendChild(porcimpre3.toFixed(2))
													EquivalenceSurchargeAmount = <EquivalenceSurchargeAmount/>
													//Cuota. Importe resultante de aplicar a la Base Imponible, la misma que para el IVA, el porcentaje indicado en “EquivalenceSurchage”. Hasta ocho decimales.
														TotalAmount = <TotalAmount/>
														//Importe en la moneda original de la facturación. Siempre que la divisa de facturación sea distinta de EURO, el elemento EquivalentInEuros deberá cumplimentarse para satisfacer los requerimientos del Art.10.1 del Reglamento sobre facturación, RD 1496/2003 de 28 de Noviembre.
														TotalAmount.appendChild(impre3.toFixed(2))
													EquivalenceSurchargeAmount.appendChild(TotalAmount)		
													
													Tax.appendChild(EquivalenceSurcharge)
													Tax.appendChild(EquivalenceSurchargeAmount)
												}
											TaxesOutputs.appendChild(Tax)
										}
										if(cant && cant != 0 && imporlfa && imporlfa != 0)
										{										
											/*InvoiceLine.appendChild(IssuerContractReference)
											InvoiceLine.appendChild(IssuerContractDate)
											InvoiceLine.appendChild(IssuerTransactionReference)
											InvoiceLine.appendChild(IssuerTransactionDate)
											InvoiceLine.appendChild(ReceiverContractReference)
											InvoiceLine.appendChild(ReceiverContractDate)
											InvoiceLine.appendChild(ReceiverTransactionReference)
											InvoiceLine.appendChild(ReceiverTransactionDate)
											InvoiceLine.appendChild(FileReference)
											InvoiceLine.appendChild(FileDate)
											InvoiceLine.appendChild(SequenceNumber)
											InvoiceLine.appendChild(DeliveryNotesReferences)*/
											InvoiceLine.appendChild(ItemDescription)
											InvoiceLine.appendChild(Quantity)
											InvoiceLine.appendChild(UnitOfMeasure)
											InvoiceLine.appendChild(UnitPriceWithoutTax)
											InvoiceLine.appendChild(TotalCost)	
											InvoiceLine.appendChild(DiscountsAndRebates)
											InvoiceLine.appendChild(Charges)
											InvoiceLine.appendChild(GrossAmount)
											InvoiceLine.appendChild(TaxesOutputs)								
										Items.appendChild(InvoiceLine)
										}
							
									
							NFacturaAnterior = NFactura;
						}
						
						PaymentDetails = <PaymentDetails/>
						//Datos de pago.
							Installment = <Installment/>
							//Vencimiento.
								InstallmentDueDate = <InstallmentDueDate/>
								//Fechas en las que se deben atender los pagos. ISO 8601:2004.
								InstallmentDueDate.appendChild(utils.dateFormat(fechacobro,'yyyy-MM-dd'))
								InstallmentAmount = <InstallmentAmount/>
								//Importe a satisfacer en cada plazo. Siempre con dos decimales.
								InstallmentAmount.appendChild(impnee.toFixed(2))
								PaymentMeans = <PaymentMeans/>
								//Cada vencimiento/importe podrá tener un medio de pago concreto.
								PaymentMeans.appendChild('04')
								/*01 Al contado
								  02 Recibo domiciliado
								  03 Recibo
								  04 Transferencia*/
								AccountToBeCredited = <AccountToBeCredited/>
								//Cuenta de abono. Único formato admitido. Cuando la forma de pago (PaymentMeans) sea "transferencia" este dato será obligatorio.
									IBAN = <IBAN/>
									//IBAN. Único formato admitido para identificar la cuenta. (Recomendado)
									IBAN.appendChild(cuentaabono)		
									BIC = <BIC/>
									//Código SWIFT. Será obligatorio rellenar las 11 posiciones, utilizando los caracteres XXX cuando no se informe de la sucursal.
									BIC.appendChild(bic)
									AccountToBeCredited.appendChild(IBAN)
									AccountToBeCredited.appendChild(BIC)
								//var AccountToBeDebited = <AccountToBeDebited/>
									
								Installment.appendChild(InstallmentDueDate)
								Installment.appendChild(InstallmentAmount)
								Installment.appendChild(PaymentMeans)
								if(cuentaabono && bic && cuentaabono != '' && bic != '') Installment.appendChild(AccountToBeCredited)
							PaymentDetails.appendChild(Installment)
						Invoice.appendChild(InvoiceHeader)
						Invoice.appendChild(InvoiceIssueData)
						Invoice.appendChild(TaxesOutputs)
						Invoice.appendChild(InvoiceTotals)
						Invoice.appendChild(Items)
						Invoice.appendChild(PaymentDetails)
						Invoices.appendChild(Invoice)
					//Document.appendChild(FileHeader)
					//Document.appendChild(Parties)
					Document.appendChild(Invoices)
					
						
					xml += Document.toXMLString()
					application.output(xml)
					//var newxml = xml.toString().replace(' xmlns=""','')
					newxml = utils.stringReplace(xml,' xmlns=""','')
					newxml = utils.stringReplace(newxml,'<Facturae','<fe:Facturae')
					newxml = utils.stringReplace(newxml, '</Facturae','</fe:Facturae')
					//var xml2 = new XML(newxml)
					application.output(newxml);
					
					
					/*var jsFile = plugins.file.createTempFile('SEPA','.xml');
					
					var success = plugins.file.writeXMLFile(jsFile ,newxml);
					if (!success) application.output('Could not write file.');
					//if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
					//{
						plugins.file.streamFilesToServer(jsFile)
						plugins.file.openFile(jsFile,"_blank",application/xml)
					/*}
					else 
					{
						plugins.file.streamFilesToServer(jsFile,doImportFile)
					}*/
					htm = newxml
					/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
					{
						var js = plugins.file.showFileSaveDialog('FacturaE32.xml', 'Selecciona localización para salvar el fichero');
						if (!js) return;			
									
						ok = 1
						// Write the file in the selected location
						plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
					}
					else
					{*/
						ok = 1
						/*js = application.getServerURL()  + "\\uploads\\FacturaE32.xml"
						plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');	*/
						
						var jsFile = plugins.file.createTempFile('FacturaE32','.xml');
						
						var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
						if (!success) application.output('Could not write file.');
						
						//plugins.file.streamFilesToServer(jsFile)
						//plugins.file.openFile(jsFile,"_blank",'application/xml')
						else plugins.file.openFile('FacturaE32.xml',jsFile.getBytes(),'application/txt')
					//}
	
				
		}
	}
	catch (e) 
	{
		application.output("catched exception");
		application.output(e);
	} 
	finally 
	{
		if(ok == 1)
		{
			application.getWindow('Impresion Facturas').hide();
			globals.GCenableBgElements();
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} CIF
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"9C4D8B80-204D-4357-A228-679FAA778529"}
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
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"16A9400B-410C-48DB-A9B7-AAFB148F44F1"}
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
 * @properties={typeid:24,uuid:"D33C8BB4-8ABE-41AE-A687-4F2622DAF317"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6AC9FF4C-7D57-4EF4-B650-8FCDC546E3D7",variableType:8}
 */
var numfacturas;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0CE9716A-DA8A-4455-A2A4-D407D9D6FA46",variableType:8}
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
 * @properties={typeid:24,uuid:"C3331EC6-D459-4464-844C-F815D42E49C0"}
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
 * @properties={typeid:35,uuid:"A93BB265-1428-4F8D-89CC-6FB16134C7DD"}
 */
var cifempresa = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"79A2AFEA-CBDE-46B7-852C-CF5FFF31022C"}
 */
var tipopersona = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B79AC5CE-DA20-4F40-A193-88B7F22F9E11"}
 */
var pais = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82CE1E79-5E82-4639-A159-47705C65E624"}
 */
var razonsocial = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"46821C68-8CD5-4F19-AEC1-E4E268211C2D"}
 */
var regmercantil = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"12FB2323-0980-4D92-B346-FD04CB099BC0"}
 */
var hoja = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"27D019BC-8765-456C-91E4-7ED5A1AD8BFF"}
 */
var folio = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BCB7D680-8F58-45D6-BC2C-52D270B9DC2C"}
 */
var seccion = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C9F2DD93-9D4D-4827-A5D0-3E144B181290"}
 */
var tomo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"655EB195-95F6-4F63-96D3-43E7A56EBB69"}
 */
var direccion = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CF1073B1-4F2C-4439-9D0D-592988221C10"}
 */
var codigopostal = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2EFE3C30-D028-4C16-B0E5-70101304A4A5"}
 */
var ciudad = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EC8E62A0-5843-4583-8856-2F7A15158B17"}
 */
var provincia = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7D6CFAB3-23B9-4702-9F15-7D6EA759ACF8"}
 */
var telefono = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CC39CF8D-777E-4B69-A3FD-82D261BFFF7F"}
 */
var fax = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EF93862C-0F89-40D1-A818-920240890A70"}
 */
var web = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E8810ED2-0255-415E-BA4A-3773DB9AD66C"}
 */
var correo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B7A5184E-6CD2-4BCB-B8D0-D6E149F6CC33"}
 */
var primerafactura = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9E692084-D36F-4B6E-99AB-C12F829D3F59"}
 */
var ultimafactura = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F1F30B52-1E78-497A-B91F-26AF91E7A0D2"}
 */
var cifcliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"368CCAC3-911F-4599-BD11-476BD153C2DA"}
 */
var tipopersonacliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C128AC1B-361F-4A4A-AA51-840AD0F47A98"}
 */
var paiscliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"909DB36E-E7FB-47A5-AB30-1E7A851BF35F"}
 */
var desccliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0D414E63-6734-4623-914F-D15A185FD55E"}
 */
var direccioncliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7E4BF4F2-9F0C-4E06-A183-02563FBA1585"}
 */
var poblacioncliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DDD7D5AF-0A61-4813-B2C8-165230B942E9"}
 */
var provinciacliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E6F74074-AC8D-40CD-8361-C13BA408E2E0"}
 */
var codpostalcliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"631A0080-413B-48F6-8F5A-1BC02F5A5F24"}
 */
var razonsocialcliente = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E76E7E61-AFBC-44C6-A5F4-BDA0A1C7DB8B",variableType:93}
 */
var fechacobro;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"195ADC44-6FFE-43B8-A6F2-BBC4CB07C02F"}
 */
var cuentaabono = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0D4D0954-B326-4732-A85B-B56736AA551F"}
 */
var bic = '';

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
 * @properties={typeid:24,uuid:"95AD014F-F6F7-4389-8F85-FF5FE7F22CB6"}
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
    "tbMaestroArticulos.RefCliente,tbMaestroformpago.denom_fp,ParametrosAplicacion.bic,"+
	"tbMaestroClientes.Telf1,tbMaestroClientes.web,tbMaestroClientes.EmailContacto "+
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
				cifcliente = utils.stringTrim(utils.stringReplace(dataset.getValue(1,90),' ',''));
				tipopersonacliente = globals.GCQuitarCaracteresEspeciales(TipoPersona(cifcliente))	
				paiscliente = dataset.getValue(1,99);
				//var contactocliente = dataset.getValue(1,85);
				desccliente = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,79));
				direccioncliente = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,80));
				poblacioncliente = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,81));
				provinciacliente = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,82));
				codpostalcliente = dataset.getValue(1,83);
				razonsocialcliente = globals.GCQuitarCaracteresEspeciales(dataset.getValue(1,84));
				fechacobro = dataset.getValue(1,27);
				//var formapago = dataset.getValue(1,30);
				cuentaabono = dataset.getValue(1,16);
				bic = dataset.getValue(1,107);
				telefonocliente  = dataset.getValue(1,108);
				webcliente  = dataset.getValue(1,109);
				emailcliente  = dataset.getValue(1,110);
}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C87231FC-8C6B-41CC-ABCA-701DE525A7D0",variableType:93}
 */
var fechafactura;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A1B8F1E5-28E9-43A4-908C-31515683859A",variableType:8}
 */
var impbre;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"78CED35A-4D2D-4F46-91EF-BAAC403E4EBF",variableType:8}
 */
var depp;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0E323E93-B959-48F6-A7CE-3553BCDDDD96",variableType:8}
 */
var impgfi;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2467E98F-DDBE-4037-97B0-B468E0665CCB",variableType:8}
 */
var impnee;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F6CC512A-F667-49B1-84CD-8B7E862A7B5A",variableType:8}
 */
var impbie;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"69CF3695-0629-4B40-A868-4AE30C88EF5C",variableType:8}
 */
var piva;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FD34D6DD-3A3E-4F20-BCE0-B67A4414DC8B",variableType:8}
 */
var cuotaiva;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A7719246-DC1A-4EF6-AE67-A5FF26688BBC",variableType:8}
 */
var impbie2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3ACF8F5D-1133-4A34-AE79-40BB102432B0",variableType:8}
 */
var piva2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7799C882-5BDF-46CB-B16E-8427F8EA6A55",variableType:8}
 */
var cuotaiva2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FDAC3133-229E-457D-8443-26263C2B62A1",variableType:8}
 */
var impbie3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6EB1C914-6EAB-44C9-AD6C-6F20E1E423FA",variableType:8}
 */
var piva3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A3FD52BC-997E-4FF6-AD6E-CE6AD91B14FA",variableType:8}
 */
var impre;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5296D0B1-A57D-4A85-AF9A-41234B7C8C4F",variableType:8}
 */
var cuotaiva3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C673BD58-E537-4514-B403-C23B4AEE27CD",variableType:8}
 */
var porcimpre;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A8835FE0-2DAE-473D-8968-8A682DCE5577",variableType:8}
 */
var impre2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"02CD6207-8D1B-4768-BBA9-E85C955A2F17",variableType:8}
 */
var porcimpre2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D8CB8936-5620-41D1-85FD-D703F0BAEFFD",variableType:8}
 */
var impre3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EEE41586-60A5-4D4D-A138-7E49465C35E6",variableType:8}
 */
var porcimpre3;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BC95C170-E819-49FD-92BC-87811958A0D1"}
 */
var concepto = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EC922543-CEC2-4A0D-BC4E-28225364B114",variableType:8}
 */
var cant;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8A390251-FDB8-4348-BC37-35327865589A",variableType:8}
 */
var imporlfa;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DC0611BF-3BD2-44B3-B506-0ECD1DF229C8",variableType:8}
 */
var preclfa;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DFD0AA50-092E-48A2-AABF-D834BADA1BD0",variableType:8}
 */
var dtolfa;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1A01093C-12D4-4788-94C6-91486CC186BD",variableType:8}
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
 * @properties={typeid:24,uuid:"0E794D92-21EE-43BF-9AC2-D6AAD8A34531"}
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
 * @properties={typeid:35,uuid:"177C1FBD-6E49-4011-B87C-783CADA4D2C9"}
 */
var paisclienteiso3 = '';

/**
 * TODO generated, please specify type and doc for the params
 * @properties={typeid:24,uuid:"DBA8584E-A4A2-4A64-86C8-4D7F7540D18A"}
 */
function getpaiso3()
{
	var query = "select pai_iso3 from pais where pai_iso2 ='"+paiscliente+"'";				
	var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
	paisclienteiso3 = dataset2.getValue(1,1)
}

/**
 * @param {plugins.file.JSFile} tempfile
 *  
 * @return {plugins.file.JSFile}
 * 
 * @properties={typeid:24,uuid:"2473FB6C-E2E3-4536-A236-AD81DAA32CB3"}
 */
function FirmarXMl(tempfile)
{
	//var tempFile = globals.signPDF(tempFile)
	var tempFile = tempfile//globals.signPDF(tempFile)
	
	var n = globals.uploadCallbackFunctionGC(tempFile)
	
	return n
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {plugins.file.JSFile} FILE
 *
 * @return {plugins.file.JSFile}
 *
 * @properties={typeid:24,uuid:"7AEE8472-F090-4788-835C-8C8D6452D1BB"}
 */
function signXML(FILE)
{
	var certif = gcparametrosaplicacion_to_parametrosaplicacion.name_certifdigital.split('.')
	if(certif[1] == 'pfx' || certif[1] == 'p12') 
	{
		/*var pdf = plugins.PdfDS.initPdf();
		//plugins.XmlReader.readXmlDocumentFromFile(argument)
		var ruta = FILE.getAbsolutePath();
		var r = ruta.split('.')
		pdf.fi = ruta;//"d:\\descargas\\Fra1909159.pdf";
		pdf.fo = r[0]+'_s'+'.'+r[1];//"d:\\descargas\\Fra1909159_s.pdf";
		var temp_file = plugins.file.createTempFile(certif[0],'.'+certif[1]);	
		var rawData = gcparametrosaplicacion_to_parametrosaplicacion.certifdigital;
		var tempFile = plugins.file.createFile(certif[0]+'.'+certif[1])
		var success = plugins.file.writeFile(tempFile, rawData);
		pdf.fcert = tempFile.getAbsolutePath();//"d:\\descargas\\gag2010.p12";
		pdf.passwdCert = gcparametrosaplicacion_to_parametrosaplicacion.clave_certifdigital;
		pdf.visible = true;
		pdf.reason = "pdf";
		pdf.contact = gcparametrosaplicacion_to_parametrosaplicacion.empresa;
		pdf.location = gcparametrosaplicacion_to_parametrosaplicacion.poblacion;
		plugins.PdfDS.signPdf(pdf);	
		
		
		rawData = plugins.file.readFile(pdf.fo)
		
		
		
		
		tempFile = plugins.file.createFile(r[0]+'_s'+'.'+r[1])//plugins.file.createTempFile(filename,'.pdf');
		success = plugins.file.writeFile(tempFile, rawData);
		
		return tempFile
		*/
		return FILE
	}
	else 
	{
		return FILE
	}
}
