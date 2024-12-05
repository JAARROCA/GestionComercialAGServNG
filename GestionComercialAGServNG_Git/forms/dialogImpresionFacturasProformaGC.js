/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"A9E8F8CB-0A61-4AA1-89A7-0486E37EE283",variableType:-4}
 */
var Letras = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

//,'GB'

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"F3972763-DF78-49B1-B11A-87A73C3BB15E",variableType:-4}
 */
var UE = new Array('DE','AT','BE','BG','CY','HR','DK','SK','SI','EE','FI','FR','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','CZ','RO','SE');

/**
 *
 * @properties={typeid:24,uuid:"61F8544F-0CAE-40DC-82C5-45D065F6FFF9"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Impresion Facturas Proforma').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"B6C3FBB8-011D-415C-8803-6EFBA3701235"}
 * @SuppressWarnings(wrongparameters)
 * 
 * @AllowToRunInFind
 */
function btn_ok()
{	
	var desdeeje = forms.dlg_ImpresionFacturasProformaGC.DesdeEje
	if(desdeeje == null || desdeeje == '') desdeeje = 0
	var desdeser = forms.dlg_ImpresionFacturasProformaGC.DesdeSer
	if(desdeser == null || desdeser == '') desdeser = '';
	var desdenup = forms.dlg_ImpresionFacturasProformaGC.DesdeNup
	if(desdenup == null || desdenup == '') desdenup = 1
	var hastaeje = forms.dlg_ImpresionFacturasProformaGC.HastaEje
	if(hastaeje == null || hastaeje == '') hastaeje = 9999
	var hastaser = forms.dlg_ImpresionFacturasProformaGC.HastaSer
	if(hastaser == null || hastaser == '') hastaser = 'ZZ';
	var hastanup = forms.dlg_ImpresionFacturasProformaGC.HastaNup
	if(hastanup == null || hastanup == '') hastanup = 999999
	var desdecli = forms.dlg_ImpresionFacturasProformaGC.DesdeCliente
	if(desdecli == null || desdecli == '') desdecli = 1
	var hastacli = forms.dlg_ImpresionFacturasProformaGC.HastaCliente
	if(hastacli == null || hastacli == '') hastacli = 999999
	var fprof = forms.dlg_ImpresionFacturasProformaGC.FacturaProForma;
	
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
 * @properties={typeid:24,uuid:"E32B3A8B-F99D-4309-BFBE-8A722FF94F94"}
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
 * @properties={typeid:24,uuid:"CE26CCC8-5156-46DE-AE38-0D88A904CDF1"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Impresion Facturas Proforma').hide();
	globals.GCenableBgElements();
	return true
}

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"B6EF1566-B382-41F6-8EB1-8CF11E5FAD89"}
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
 * @properties={typeid:24,uuid:"807174E4-2D41-4034-9624-F3E8B7B4CA1C"}
 */
function GenerarXML30()
{	
	
}

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"CA42C474-671E-4810-9C00-08220BB2804E",variableType:-4}
 */
var SchemaVersion;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"AB1F2898-8D53-4460-A144-5259D08C514D",variableType:-4}
 */
var InvoiceIssuerType;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"0C1DD8F1-B9BF-44B4-AEED-7F56BF3AE29E",variableType:-4}
 */
var BatchIdentifier;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"EC12015C-DF67-4325-BF07-EE0EBF4BE167",variableType:-4}
 */
var InvoicesCount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"D06932B7-3972-4C38-BBEE-3F8DB92C05C8",variableType:-4}
 */
var TotalInvoicesAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"46E384CE-BF54-4A61-B5A6-77E86338F5AE",variableType:-4}
 */
var TotalAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"CE014DBB-53BB-4987-BA78-C0232CCF1B72",variableType:-4}
 */
var TotalOutstandingAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"48062834-E0C7-4CA7-899C-0C1E32112BA2",variableType:-4}
 */
var TotalExecutableAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DF0B085F-7536-480A-B2F0-9A0DB54086DE",variableType:-4}
 */
var InvoiceCurrencyCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"22CEA6B5-213F-4940-828B-2AE04BFF3191",variableType:-4}
 */
var Parties;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"93C99754-610D-48BC-B935-3D4CE022B79F",variableType:-4}
 */
var SellerParty;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"409F7555-BC72-461B-B676-DF6B21D48142",variableType:-4}
 */
var TaxIdentification;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"AC63E4FC-E781-4BB5-A2CA-467A91E6C234",variableType:-4}
 */
var PersonTypeCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C9F3F5F1-B760-49C3-9A9E-BB9BF6C302D5",variableType:-4}
 */
var ResidenceTypeCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"08E595E0-2C97-496E-9E7D-536D3A57FE79",variableType:-4}
 */
var TaxIdentificationNumber;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"34225419-B9CA-47AE-94DD-44B1F8B5F142",variableType:-4}
 */
var LegalEntity;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"8E3D2D20-EFA2-4C4B-9307-DE8D99BFC473",variableType:-4}
 */
var CorporateName;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"4D6BAFD6-43D5-43AA-9DAA-0D00DCBC0718",variableType:-4}
 */
var TradeName;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"76782C81-EBB3-43C0-9122-AE502C4D3E99",variableType:-4}
 */
var RegistrationData;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"932FE8FC-99ED-4BD7-A93C-3EFD9B558B7D",variableType:-4}
 */
var Book;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C789F358-5BBC-42C1-B1B9-A76D9F246636",variableType:-4}
 */
var RegisterOfCompaniesLocation;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DBA048C7-40F9-4F9B-8401-D8149605FD50",variableType:-4}
 */
var Sheet;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C66AAFD3-835D-4901-8FDD-6AEC8DFB774A",variableType:-4}
 */
var Folio;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"1B85A7C6-8A28-421D-A7E4-529C6F77B977",variableType:-4}
 */
var Section;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"900F826F-28C1-4A18-988A-FCA701CC2908",variableType:-4}
 */
var Volume;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E52C30C8-DFC3-4841-8A09-B86CA3827EF7",variableType:-4}
 */
var AdditionalRegistrationData;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"679DD6AA-DC1D-423A-A6DB-E1FF8BC31871",variableType:-4}
 */
var AddressInSpain;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A2C7D614-1C5A-41C3-8704-6EC50D677364",variableType:-4}
 */
var Address;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DB9C572A-5146-4B27-8AA4-0069FC93292A",variableType:-4}
 */
var PostCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"FC658982-DC21-4D12-9CFC-0E95E618645B",variableType:-4}
 */
var Town;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"5E644D64-6544-40D6-904A-25A5CBEA3AFC",variableType:-4}
 */
var Province;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"2B63D331-7704-49E1-8C77-85275F854220",variableType:-4}
 */
var CountryCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"90FF65E0-2682-4285-AC26-3CFE51B48129",variableType:-4}
 */
var ContactDetails;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E17843B8-3864-449A-B8BA-31506B5EFE3B",variableType:-4}
 */
var Telephone;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"60E6F840-E195-45A2-8D40-294CA6C8FD9A",variableType:-4}
 */
var TeleFax;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"B4C40412-6348-4529-B821-00EB703277C3",variableType:-4}
 */
var WebAddress;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"4F06BD40-09E1-4210-A418-999D668FEF7B",variableType:-4}
 */
var ElectronicMail;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"2270016D-6AE9-4C67-849D-61D5EA66F3B9",variableType:-4}
 */
var BuyerParty;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"A2B049DB-EDD8-4358-9880-8623AD2A172A",variableType:-4}
 */
var AdministrativeCentres;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"7D84DBEB-EF74-4FD6-9D59-FB810F79372C",variableType:-4}
 */
var AdministrativeCentre;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"ABBBFDFF-3544-4E7B-9E0D-CFA76F00E0D9",variableType:-4}
 */
var Name;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C02C5D69-D66F-4601-9C30-CF6FF940B22F",variableType:-4}
 */
var OverseasAddress;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"69BFBD0E-526B-4850-BC41-DEA9C6B80B0B",variableType:-4}
 */
var PostCodeAndTown;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"295151CF-4497-449C-8C1B-D45ADD2D8BC4",variableType:-4}
 */
var Individual;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"D61EDD57-C4A8-4909-A5D2-A418E1BB9EB8",variableType:-4}
 */
var FirstSurname;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"C1106F55-9CD5-48BE-B471-02A87399BF86",variableType:-4}
 */
var Invoices;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"BF4337F0-86DD-457C-BAE3-0BE6C7274642",variableType:-4}
 */
var PaymentDetails;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"7DA36709-79A1-423D-B80F-DBD12C23A4A2",variableType:-4}
 */
var Installment;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"7C2897C5-65E3-47A8-B597-31107CDF82A6",variableType:-4}
 */
var InstallmentDueDate;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"242D5FE9-9DC5-4FA2-A4C5-5425F6B97DCF",variableType:-4}
 */
var InstallmentAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"6D8BDFD1-59BD-4ECC-A5CD-B9FF5891F7EB",variableType:-4}
 */
var PaymentMeans;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DD1C6276-8A53-4A3C-B9E1-DE41B8DD94AB",variableType:-4}
 */
var AccountToBeCredited;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"03A88234-0C84-4112-B601-1ECA40C1FDE6",variableType:-4}
 */
var IBAN;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"BC057176-B7D3-4E02-9D08-30EF38D95707",variableType:-4}
 */
var BIC;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"7D635C52-4B83-49D5-881E-E677F529EC27",variableType:-4}
 */
var Invoice;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"466260C7-E714-4559-B2E7-38D10FEC4A5D",variableType:-4}
 */
var InvoiceHeader;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"CFBCB357-292A-4F76-818C-EBDDDE54A827",variableType:-4}
 */
var InvoiceNumber;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"B0DAE13E-DB1A-4AB5-A172-0EC2B697B0DA",variableType:-4}
 */
var InvoiceSeriesCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DDEA3399-87D4-4AAF-9C4C-BEC72C8FF016",variableType:-4}
 */
var InvoiceDocumentType;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"68AC90D6-E080-4B07-89C5-A9EBE89E3D45",variableType:-4}
 */
var InvoiceClass;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"1940F7D1-D03A-4722-BE53-EF961AF8D250",variableType:-4}
 */
var InvoiceIssueData;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"1DC9A9E5-506E-4D52-894A-3596462C40A1",variableType:-4}
 */
var IssueDate;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"9E9B8089-C0ED-418F-B8DC-CF80CE4E3023",variableType:-4}
 */
var OperationDate;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"2501A8E6-5B30-4CD2-9B60-0AEEDFE969E3",variableType:-4}
 */
var PlaceOfIssue;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3A0EF570-1A6E-4533-AE77-42F99B029322",variableType:-4}
 */
var PlaceOfIssueDescription;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E925F1F4-2E08-4DC9-B887-6028B6254FCA",variableType:-4}
 */
var TaxCurrencyCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"CD5126A5-4415-4048-9AAD-DC2C0C38C30E",variableType:-4}
 */
var LanguageName;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"88C98311-73FE-439B-8011-835CE91CF32C",variableType:-4}
 */
var TaxesOutputs;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3A69C078-A72A-4213-B753-A2F89C719846",variableType:-4}
 */
var Tax;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"2DE081E0-A7E3-4C81-9C01-B46EFC42188B",variableType:-4}
 */
var TaxTypeCode;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"E3E9308B-E1C9-45E8-A52A-63B4A1749039",variableType:-4}
 */
var TaxRate;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"EDA5949A-B277-449F-A381-7773F5643CB8",variableType:-4}
 */
var TaxableBase;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"F52D21D8-ABD8-443E-9CF4-66D82D0B992D",variableType:-4}
 */
var TaxAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"AD2BAA73-ED40-47C1-8CFB-2B87ECED4432",variableType:-4}
 */
var EquivalenceSurcharge;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3E0243B8-8B77-4B3D-A03B-B20FD42DAD01",variableType:-4}
 */
var EquivalenceSurchargeAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"9EDE5C37-FDAE-448E-ACB6-05D60FE885A1",variableType:-4}
 */
var InvoiceTotals;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"45965EFC-43CF-4431-B984-315601348E98",variableType:-4}
 */
var TotalGrossAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"8B5DEEE1-1800-4E2A-98EB-3D6B9918A5FB",variableType:-4}
 */
var TotalGeneralDiscounts;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"27AA83F5-EB06-4460-B40B-ED269FB0012F",variableType:-4}
 */
var TotalGeneralSurcharges;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"3E2575CD-8D03-4146-81E0-AC543096073A",variableType:-4}
 */
var TotalGrossAmountBeforeTaxes;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"B6B3459D-7E30-4A74-91CA-9FBF95EF402B",variableType:-4}
 */
var TotalTaxOutputs;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"D25EFCC7-CDD0-48FC-ADE6-4E07E47EE0C2",variableType:-4}
 */
var TotalTaxesWithheld;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"2F99B219-8DAD-4948-877A-CE5723408730",variableType:-4}
 */
var InvoiceTotal;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"41E0E265-D3F3-4AE1-97D5-A6FC31A951D1",variableType:-4}
 */
var InvoiceLine;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"6FB25188-5526-4F85-8EA9-4BA8EF1CD348",variableType:-4}
 */
var ItemDescription;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"AAE9ADF7-32EC-4445-AB25-3256E5FC2A0D",variableType:-4}
 */
var Quantity;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"39620681-8D99-4202-B490-21485DF54660",variableType:-4}
 */
var UnitOfMeasure;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"AC1A9AB7-6E2A-4A1B-A614-27CD09EEF77A",variableType:-4}
 */
var UnitPriceWithoutTax;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"09745CA9-D172-4CD9-BE83-B6A81FEB79EB",variableType:-4}
 */
var TotalCost;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"DFEFD2B0-1621-408A-B11E-48D6B15088F5",variableType:-4}
 */
var DiscountsAndRebates;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"8DAFA89E-FDB9-4CA4-BE39-D1A884806C6D",variableType:-4}
 */
var Discount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"B9C39CDC-65E4-4DF2-BCAD-D1D8B9FF3396",variableType:-4}
 */
var DiscountReason;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"0DC62C01-F24B-4773-BAD1-D125DA1C58A1",variableType:-4}
 */
var DiscountRate;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"28F47891-AB02-44D0-AFDF-FF5E5C76EF83",variableType:-4}
 */
var DiscountAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"0D5D8B63-2539-46A8-B19E-33F782C8FAB4",variableType:-4}
 */
var Charges;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"112E09C6-1BB2-40B8-ADF1-FBD8D4718736",variableType:-4}
 */
var Charge;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"28DFAFAF-327A-493B-BBA4-92971F03FDC8",variableType:-4}
 */
var ChargeReason;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"80121774-F155-4040-A16D-412E35DB2BC8",variableType:-4}
 */
var ChargeRate;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"021A9CED-B2C8-4189-B01A-B3916955A505",variableType:-4}
 */
var ChargeAmount;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"4C9C3A5A-580E-47B2-906B-73A179ACE2E3",variableType:-4}
 */
var GrossAmount;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F35D4BA1-87B0-4B99-99C2-6A1D82708B7C"}
 */
var newxml = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"933DE854-1930-4204-A0AB-C8041A33965E"}
 */
var htm = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DBB544C9-69C5-4159-B6D4-746DDFDB4587"}
 */
var serverURL = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A7C9FAB9-27A3-4BA5-BC3A-F5B9793D2777"}
 */
var nom = '';

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"8D054FED-8121-4B9D-BC8F-33E0AB465EE0",variableType:-4}
 */
var Document;

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
 * @properties={typeid:24,uuid:"3E5D07C5-452F-4400-B37D-5E87B95E418F"}
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
					var js = plugins.file.showFileSaveDialog('FacturaE321.xml', 'Selecciona localización para salvar el fichero');
					if (!js) return;			
								
					// Write the file in the selected location
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
				}
				else
				{*/
					/*nom = 'FacturaE321.xml';
								
					
					serverURL = application.getServerURL() 
					js = serverURL + "\\uploads\\" + nom
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');	*/
					
					var jsFile = plugins.file.createTempFile('FacturaE321','.xml');
					
					var success = plugins.file.writeXMLFile(jsFile , newxml.toString());
					if (!success) application.output('Could not write file.');
					
					//plugins.file.streamFilesToServer(jsFile)
					//plugins.file.openFile(jsFile,"_blank",'application/xml')
					else plugins.file.openFile('FacturaE321.xml',jsFile.getBytes(),'application/txt')
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
 * @properties={typeid:24,uuid:"C265C757-0210-4E0D-BD1A-36D214F59132"}
 */
function GenerarXML31()
{	
	
}

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"117E342E-C00A-49FD-B0D8-2A9654901435",variableType:-4}
 */
var FileHeader;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"130B65BE-F383-4360-AF73-432E00010A85",variableType:-4}
 */
var Modality;

/**
 * @type {XML}
 *
 * @properties={typeid:35,uuid:"F7E09888-7200-4911-A8F6-00135AB4B0B6",variableType:-4}
 */
var Batch;

/**
 * @type {Namespace}
 *
 * @properties={typeid:35,uuid:"FFACD510-51A6-4427-9E11-5B9C3765E2DD",variableType:-4}
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
 * @properties={typeid:24,uuid:"1154EFC2-0C0A-4D79-B877-1096C2F93869"}
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
					// InvoiceIssuerType.appendChild('RE') 
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
				//Document.appendChild(FileHeader)
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
								//Código País. Código según la ISO 3166-1:2006 Alpha-3.
								//Al ser un domicilio ubicado en España siempre será "ESP".*/
								//CountryCode.appendChild('ESP')											
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
										
									
									Individual = <Individual/>
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
										
							BuyerParty.appendChild(TaxIdentification)
							BuyerParty.appendChild(LegalEntity)		
							BuyerParty.appendChild(Individual)		
						//Parties.appendChild(SellerParty)
						Parties.appendChild(BuyerParty)
						application.output('Facturas')
						Invoices = <Invoices/>
						//Conjunto de facturas que contiene el fichero. Para todos los elementos numéricos, los cálculos se efectuarán siempre redondeando al número de decimales correspondientes.
						var NFactura = null;
						var NFacturaAnterior = null;
						
						for(var i=1;i<=dataset.getMaxRowIndex();i++)
						{
							NFactura = dataset.getValue(i,23)+utils.numberFormat(dataset.getValue(i,25),'00000')+dataset.getValue(i,24);
							application.output('NFactura')
							
							
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
						plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');*/
						
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
 * @return {String}
 *
 * @properties={typeid:24,uuid:"19BCB138-511C-4CEC-9DE5-AE8944D886CD"}
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
 * @properties={typeid:24,uuid:"D13650E0-FA0B-4C36-8F39-65E1727A1182"}
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
 * @properties={typeid:24,uuid:"3A8EE40C-5718-4A71-9085-88212DB7B13D"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2176C99A-EF64-44C9-8DC4-F5AABFB17249",variableType:8}
 */
var numfacturas;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CC65CC7E-483F-480B-86A8-0F0A776D4F03",variableType:8}
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
 * @properties={typeid:24,uuid:"3090781A-4F4B-4052-AF49-371E3017DC90"}
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
 * @properties={typeid:35,uuid:"530AB00C-4F39-4818-B1F7-B21C5E1CB3A2"}
 */
var cifempresa = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"311B60C0-241C-4283-A90B-C4FE2EB47959"}
 */
var tipopersona = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7FEA779F-2DAF-4DEF-9958-174684B18134"}
 */
var pais = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"83D12C3F-BE21-40D7-811E-414FAEF3EEE6"}
 */
var razonsocial = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7646953F-A360-4C11-86AA-77E5EE617156"}
 */
var regmercantil = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8A509EF7-AA7D-40E1-B6F9-2DD98440CAF3"}
 */
var hoja = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3C7D39F0-111D-4C77-A145-9AF3268288A8"}
 */
var folio = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8C9EE258-5165-4274-9712-132083AAFADC"}
 */
var seccion = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6A94491E-0A4C-4763-ADE4-AD874D7B9557"}
 */
var tomo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0E90E4FF-4A3B-4594-8F85-2C39518298B4"}
 */
var direccion = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"068E3BC3-1C6C-43CB-94A6-34CC0B9A59DE"}
 */
var codigopostal = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D6911197-BBF5-412D-AAA1-1CBBEF354C95"}
 */
var ciudad = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A284419A-D497-4E8B-B0AE-C0A858B0E646"}
 */
var provincia = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6294C9E6-A5DD-4BF3-ABA5-12569C10D504"}
 */
var telefono = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BE0DD8AB-0C54-448C-9496-14BC58261850"}
 */
var fax = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8B235C9A-0588-414A-ADF7-5E0181A48652"}
 */
var web = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DC8AAD89-F0FB-4A8A-B002-B0F9E2B0B1AD"}
 */
var correo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"86483C2B-3F7C-4285-A2F8-7EA98A86069F"}
 */
var primerafactura = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2186243B-4588-4236-9698-2787CC41350D"}
 */
var ultimafactura = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A4760249-9121-4A20-9E6C-BA99B645257C"}
 */
var cifcliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F9BB15E9-0E04-4F1E-B928-AA1498065F59"}
 */
var tipopersonacliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0C3C3F7F-9F02-49D3-9606-766D52873BDF"}
 */
var paiscliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"248440F2-F481-40A1-A00E-B979C0E53CB8"}
 */
var desccliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"31751040-6726-4688-81C9-F24C865C7052"}
 */
var direccioncliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ED7EBB7E-6309-497E-B2B4-4A75F6917A89"}
 */
var poblacioncliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7F04010B-3C95-4005-8D5B-E989F962B862"}
 */
var provinciacliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C79998D5-CDCC-4457-9FFF-301650730A03"}
 */
var codpostalcliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7D800B42-CB90-4BC5-A6E0-0E97D6071B17"}
 */
var razonsocialcliente = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"2370E9D8-4360-47F0-B400-AFAC75A00C63",variableType:93}
 */
var fechacobro;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EC1E5B9F-8C53-4684-B556-BEE0B7FF6E05"}
 */
var cuentaabono = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FD0A9C32-0B71-43E6-A837-7380BF13659F"}
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
 * @properties={typeid:24,uuid:"A79B65AC-494C-4435-B8D0-51821F3C497F"}
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
	
				
				cifempresa = utils.stringTrim(utils.stringReplace(dataset.getValue(1,8),' ',''));
				tipopersona = TipoPersona(cifempresa);					
				pais = utils.stringTrim(dataset.getValue(1,21));
				razonsocial = dataset.getValue(1,3);
				regmercantil = dataset.getValue(1,17);
				hoja = dataset.getValue(1,20);
				folio = dataset.getValue(1,19);
				seccion = '';
				tomo = dataset.getValue(1,18);
				direccion = dataset.getValue(1,5);
				codigopostal = dataset.getValue(1,4);
				ciudad = dataset.getValue(1,6);
				provincia = dataset.getValue(1,7);
				telefono = dataset.getValue(1,9);
				fax = dataset.getValue(1,10);
				web = dataset.getValue(1,12);
				correo = dataset.getValue(1,11);
				primerafactura = DEJE.toString() + utils.numberFormat(DNUP,'00000') + DSER;
				ultimafactura = HEJE.toString() + utils.numberFormat(HNUP,'00000') + HSER;
				cifcliente = utils.stringTrim(utils.stringReplace(dataset.getValue(1,90),' ',''));
				tipopersonacliente = TipoPersona(cifcliente)	
				paiscliente = dataset.getValue(1,99);
				//var contactocliente = dataset.getValue(1,85);
				desccliente = dataset.getValue(1,79);
				direccioncliente = dataset.getValue(1,80);
				poblacioncliente = dataset.getValue(1,81);
				provinciacliente = dataset.getValue(1,82);
				codpostalcliente = dataset.getValue(1,83);
				razonsocialcliente = dataset.getValue(1,84);
				fechacobro = dataset.getValue(1,27);
				//var formapago = dataset.getValue(1,30);
				cuentaabono = dataset.getValue(1,16);
				bic = dataset.getValue(1,107);
}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"14197310-8635-4269-8EC2-6D7C38DD4771",variableType:93}
 */
var fechafactura;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B1F84915-D06E-41B7-90B5-FD61F37A8D8D",variableType:8}
 */
var impbre;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3EE6E968-5B73-4336-A0DD-24F189FCCA4E",variableType:8}
 */
var depp;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"979768F0-4BF2-4507-AD5C-D260BEECDF08",variableType:8}
 */
var impgfi;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E44829C4-768D-40CB-9F51-F61ACEF9EBA8",variableType:8}
 */
var impnee;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D9B7DBC7-F40B-4D0B-A876-E3C378721A64",variableType:8}
 */
var impbie;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"610B3391-50AD-4B82-B321-CA074F914BB6",variableType:8}
 */
var piva;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6CF98114-18F0-4DF8-AACF-A0B497C81CA6",variableType:8}
 */
var cuotaiva;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A700178C-2815-4052-8ECA-B134D0E35865",variableType:8}
 */
var impbie2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"680D85BD-5994-44D4-B729-82ADB6613B25",variableType:8}
 */
var piva2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"274998D4-DDDA-4677-B881-EAB7199B38BD",variableType:8}
 */
var cuotaiva2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7842A901-2C10-44E0-AD0F-99A35AFFFB9F",variableType:8}
 */
var impbie3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9E82DC09-A9C7-4C63-8768-15BA548311B2",variableType:8}
 */
var piva3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"532248EB-6954-47D8-9186-769C7F7A385C",variableType:8}
 */
var impre;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6F5CC5D6-0142-4283-A1AA-8F771BB98FD8",variableType:8}
 */
var cuotaiva3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BF0FC28A-F325-42E9-B3FB-4040BCB4491D",variableType:8}
 */
var porcimpre;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CD50F571-5391-4502-84B6-02AAB3B7AE81",variableType:8}
 */
var impre2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D4F061B5-4A96-4C92-90F1-B9A0265666EF",variableType:8}
 */
var porcimpre2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5D675F14-6B3E-455B-9F35-6F0A8A90FC57",variableType:8}
 */
var impre3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C24024F8-4E7D-4070-9DF6-2F60CDE59596",variableType:8}
 */
var porcimpre3;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4B03C8D4-3DE1-46E4-884B-E00D10029080"}
 */
var concepto = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2DF9E129-AD99-4CC9-B677-400D396434A6",variableType:8}
 */
var cant;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AD95325C-A867-42D9-AFBE-9F3ED03A3EED",variableType:8}
 */
var imporlfa;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"06B8BAE7-B004-48B2-B382-ADA9B3AC9E1D",variableType:8}
 */
var preclfa;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8D1AF389-F499-4A43-8029-5DB26F7791A5",variableType:8}
 */
var dtolfa;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"370C1BE2-9D96-4357-8E26-E315AADB93D8",variableType:8}
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
 * @properties={typeid:24,uuid:"CB0FA28C-6BEB-497D-9621-1538821476C7"}
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
 * @properties={typeid:35,uuid:"B9FF0276-522C-4D13-B77B-1D4627DD4597"}
 */
var paisclienteiso3 = '';

/**
 * TODO generated, please specify type and doc for the params
 * @properties={typeid:24,uuid:"04A77B4A-43E8-4EDA-92AA-ABB6C55826F8"}
 */
function getpaiso3()
{
	var query = "select pai_iso3 from pais where pai_iso2 ='"+paiscliente+"'";				
	var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null,1)
	paisclienteiso3 = dataset2.getValue(1,1)
}
