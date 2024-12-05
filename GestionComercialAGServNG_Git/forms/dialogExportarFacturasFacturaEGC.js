/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"E480FC1A-321B-4595-81C2-A0AE0D991D28",variableType:-4}
 */
var Letras = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

//,'GB'

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"257A8AE2-C332-401F-84FE-4B6EC33DF26E",variableType:-4}
 */
var UE = new Array('DE','AT','BE','BG','CY','HR','DK','SK','SI','EE','FI','FR','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','CZ','RO','SE');

/**
 *
 * @properties={typeid:24,uuid:"29E9DBFD-8151-46DA-B084-3A6DB31CE457"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Exportar Facturas FacturaE').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"C3BB5306-9D44-4473-9EA3-7C28969F4A12"}
 * @SuppressWarnings(wrongparameters)
 * 
 * @AllowToRunInFind
 */
function btn_ok()
{	
	var desdeeje = forms.dlg_ExportarFacturasFacturaEGC.DesdeEje
	if(desdeeje == null || desdeeje == '') desdeeje = 0
	var desdeser = forms.dlg_ExportarFacturasFacturaEGC.DesdeSer
	if(desdeser == null || desdeser == '') desdeser = '';
	var desdenup = forms.dlg_ExportarFacturasFacturaEGC.DesdeNup
	if(desdenup == null || desdenup == '') desdenup = 1
	var hastaeje = forms.dlg_ExportarFacturasFacturaEGC.HastaEje
	if(hastaeje == null || hastaeje == '') hastaeje = 9999
	var hastaser = forms.dlg_ExportarFacturasFacturaEGC.HastaSer
	if(hastaser == null || hastaser == '') hastaser = 'ZZ';
	var hastanup = forms.dlg_ExportarFacturasFacturaEGC.HastaNup
	if(hastanup == null || hastanup == '') hastanup = 999999999
	var desdecli = forms.dlg_ExportarFacturasFacturaEGC.DesdeCliente
	if(desdecli == null || desdecli == '') desdecli = 1
	var hastacli = forms.dlg_ExportarFacturasFacturaEGC.HastaCliente
	if(hastacli == null || hastacli == '') hastacli = 9999999
	//var fprof = forms.dlg_ExportarFacturasFacturaEGC.FacturaProForma;
	
	if(forms.dlg_ExportarFacturasFacturaEGC.FacturaE == 1)
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
				var vers = forms.dlg_ExportarFacturasFacturaEGC.versFacturaE;
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
	/*else
	{
		globals.btn_runJasperReportFacturaVentas(desdeeje,desdeser,desdenup,hastaeje,hastaser,hastanup,desdecli,hastacli,fprof)
	}*/
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"4C54089E-33B3-4656-A626-802671A56D75"}
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
 * @properties={typeid:24,uuid:"1F2BB1F6-4A20-4A05-8E26-E5430CF32DFD"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Exportar Facturas FacturaE').hide();
	globals.GCenableBgElements();
	return true
}

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"D76571A5-0E78-4EB7-BA69-848024FD4A47"}
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
 * @properties={typeid:24,uuid:"4C575B16-F420-4AE0-9B84-2A6BBB4CE8EF"}
 */
function GenerarXML30()
{	
	
}

/**
 * @properties={typeid:35,uuid:"67571FCE-6B1D-48F3-A293-5FC5E5133608",variableType:-4}
 */
var SchemaVersion;

/**
 * @properties={typeid:35,uuid:"BC09604C-8B58-4EAE-B26A-532F551E98A0",variableType:-4}
 */
var InvoiceIssuerType;

/**
 * @properties={typeid:35,uuid:"447746B0-B614-4C7A-AB4E-89E895C53FAD",variableType:-4}
 */
var BatchIdentifier;

/**
 * @properties={typeid:35,uuid:"E13E4B50-1DAA-4A0A-BBDF-A876FA7A4651",variableType:-4}
 */
var InvoicesCount;

/**
 * @properties={typeid:35,uuid:"5766A484-E2FF-4DE3-9FEE-C03FB4766F0F",variableType:-4}
 */
var TotalInvoicesAmount;

/**
 * @properties={typeid:35,uuid:"870C2D3D-B61F-4BE5-A6AA-80042AB27B82",variableType:-4}
 */
var TotalAmount;

/**
 * @properties={typeid:35,uuid:"68BA879B-F056-4DC7-A9AB-757C293F60D4",variableType:-4}
 */
var TotalOutstandingAmount;

/**
 * @properties={typeid:35,uuid:"8CBA91C2-5AA8-4BFD-9B3F-061CD76E25AF",variableType:-4}
 */
var TotalExecutableAmount;

/**
 * @properties={typeid:35,uuid:"6A00D422-5F9F-4F19-AD35-751B0A705A7E",variableType:-4}
 */
var InvoiceCurrencyCode;

/**
 * @properties={typeid:35,uuid:"10A74A99-C5F3-42E2-A05B-05A57EB6F81E",variableType:-4}
 */
var Parties;

/**
 * @properties={typeid:35,uuid:"AC3E8EA9-B481-4F3E-B1E3-13EB26EE939E",variableType:-4}
 */
var SellerParty;

/**
 * @properties={typeid:35,uuid:"D07B51CB-29EC-490F-A679-F6327FC75059",variableType:-4}
 */
var TaxIdentification;

/**
 * @properties={typeid:35,uuid:"D346180C-FB6B-44E9-90FD-9469060139EB",variableType:-4}
 */
var PersonTypeCode;

/**
 * @properties={typeid:35,uuid:"8182700B-7D92-4350-9E7F-1BA4DBDBC940",variableType:-4}
 */
var ResidenceTypeCode;

/**
 * @properties={typeid:35,uuid:"18AA0808-18F0-4ED5-B84C-D0ADAE81DB82",variableType:-4}
 */
var TaxIdentificationNumber;

/**
 * @properties={typeid:35,uuid:"26309261-A876-4018-B77A-5CAEA63FE0AB",variableType:-4}
 */
var LegalEntity;

/**
 * @properties={typeid:35,uuid:"22D5A7D9-C6BF-42A5-84BD-1CAC3505D0E7",variableType:-4}
 */
var CorporateName;

/**
 * @properties={typeid:35,uuid:"3A3A47C0-7A2A-42F3-A8CD-3ECAED15024C",variableType:-4}
 */
var TradeName;

/**
 * @properties={typeid:35,uuid:"363CA536-1759-4926-985A-46C5ADDD25CC",variableType:-4}
 */
var RegistrationData;

/**
 * @properties={typeid:35,uuid:"CF447BA0-3993-4262-A7D9-C842045CF5A9",variableType:-4}
 */
var Book;

/**
 * @properties={typeid:35,uuid:"8C1BDD54-04C2-4484-A4DE-C67C3B4FBEF2",variableType:-4}
 */
var RegisterOfCompaniesLocation;

/**
 * @properties={typeid:35,uuid:"D3F307C2-E2BC-4F20-B1CE-8F52E3163994",variableType:-4}
 */
var Sheet;

/**
 * @properties={typeid:35,uuid:"D0D58E58-5AD8-4082-9932-5A7B65A61624",variableType:-4}
 */
var Folio;

/**
 * @properties={typeid:35,uuid:"4CDD0840-EC1A-4891-B092-0B5C093C0FF9",variableType:-4}
 */
var Section;

/**
 * @properties={typeid:35,uuid:"8083F638-0570-4FE4-B684-EE0F424E3FEA",variableType:-4}
 */
var Volume;

/**
 * @properties={typeid:35,uuid:"C069304B-C6BB-4D1B-8FB3-636FA0B7EA3B",variableType:-4}
 */
var AdditionalRegistrationData;

/**
 * @properties={typeid:35,uuid:"C7AA520C-6E05-46A4-B5CC-E4FA41FCE22F",variableType:-4}
 */
var AddressInSpain;

/**
 * @properties={typeid:35,uuid:"E352D133-B285-489C-881C-B0B06FD843FE",variableType:-4}
 */
var Address;

/**
 * @properties={typeid:35,uuid:"78DB3639-895F-48DE-923F-B2BB420A8B2B",variableType:-4}
 */
var PostCode;

/**
 * @properties={typeid:35,uuid:"42297990-30A9-473E-8896-891440A89C68",variableType:-4}
 */
var Town;

/**
 * @properties={typeid:35,uuid:"DAD8F0D3-770B-4D97-AE1E-87DAB1B5A7C1",variableType:-4}
 */
var Province;

/**
 * @properties={typeid:35,uuid:"7B5DCCA5-05E3-4976-8AEB-25D79355E02A",variableType:-4}
 */
var CountryCode;

/**
 * @properties={typeid:35,uuid:"A2B140D4-1361-45A2-B39F-65C12B4EACAA",variableType:-4}
 */
var ContactDetails;

/**
 * @properties={typeid:35,uuid:"C9B8D823-7243-4E1B-BFA5-9A234433F4AE",variableType:-4}
 */
var Telephone;

/**
 * @properties={typeid:35,uuid:"90C3FF92-997B-4EC9-B8FE-4F0CF9AA857A",variableType:-4}
 */
var TeleFax;

/**
 * @properties={typeid:35,uuid:"8A65AC18-0352-45EF-81EB-91FCC2258893",variableType:-4}
 */
var WebAddress;

/**
 * @properties={typeid:35,uuid:"B28BBA12-E832-49B1-B403-E4F9345F27FE",variableType:-4}
 */
var ElectronicMail;

/**
 * @properties={typeid:35,uuid:"24DD2CE4-C4B2-4D3B-9846-D377C0840349",variableType:-4}
 */
var BuyerParty;

/**
 * @properties={typeid:35,uuid:"9F43B2E9-ED42-41CF-AC11-65DDB80524DC",variableType:-4}
 */
var AdministrativeCentres;

/**
 * @properties={typeid:35,uuid:"63D75E5B-429E-42C4-A5D9-FCFAE16FC437",variableType:-4}
 */
var AdministrativeCentre;

/**
 * @properties={typeid:35,uuid:"772B4C79-CC3F-481D-99D9-E2393409F2B9",variableType:-4}
 */
var Name;

/**
 * @properties={typeid:35,uuid:"768B5D45-C798-4453-BA63-D47B86D1C230",variableType:-4}
 */
var OverseasAddress;

/**
 * @properties={typeid:35,uuid:"4ACD4C21-A316-4432-8828-F99970BD04C6",variableType:-4}
 */
var PostCodeAndTown;

/**
 * @properties={typeid:35,uuid:"D255EF00-548B-4730-A963-233564A2D96D",variableType:-4}
 */
var Individual;

/**
 * @properties={typeid:35,uuid:"AC55423B-3B67-434B-A9F3-8720D28DB344",variableType:-4}
 */
var FirstSurname;

/**
 * @properties={typeid:35,uuid:"92FB7DD6-B4E4-465F-AD42-99E72CADA042",variableType:-4}
 */
var Invoices;

/**
 * @properties={typeid:35,uuid:"88364A46-82F7-41E2-9E9F-2A247B497A62",variableType:-4}
 */
var PaymentDetails;

/**
 * @properties={typeid:35,uuid:"EF56CCF6-7238-445A-B03B-828633042A7D",variableType:-4}
 */
var Installment;

/**
 * @properties={typeid:35,uuid:"1616E125-AFB8-49CC-ACED-F2D12820132C",variableType:-4}
 */
var InstallmentDueDate;

/**
 * @properties={typeid:35,uuid:"009E9CDA-4388-472A-BCBB-8F7D0019BE71",variableType:-4}
 */
var InstallmentAmount;

/**
 * @properties={typeid:35,uuid:"06FC82AA-8049-4E4E-A4F1-32F6632E1923",variableType:-4}
 */
var PaymentMeans;

/**
 * @properties={typeid:35,uuid:"D8CA0288-B018-4B1C-8F35-77FBE9CEF0D7",variableType:-4}
 */
var AccountToBeCredited;

/**
 * @properties={typeid:35,uuid:"FEBF0B76-0B9C-46EB-AB27-0B18470BDD06",variableType:-4}
 */
var IBAN;

/**
 * @properties={typeid:35,uuid:"433A4C7B-D1BF-457A-81D2-40B9681DE9BA",variableType:-4}
 */
var BIC;

/**
 * @properties={typeid:35,uuid:"7728B347-6F65-4BC4-8467-F5D12ACB10B9",variableType:-4}
 */
var Invoice;

/**
 * @properties={typeid:35,uuid:"2B749519-1699-4BFA-B8FF-249C1C2ED701",variableType:-4}
 */
var InvoiceHeader;

/**
 * @properties={typeid:35,uuid:"9507B679-C215-4B2C-A7ED-BA1A52BBE5FF",variableType:-4}
 */
var InvoiceNumber;

/**
 * @properties={typeid:35,uuid:"623096B9-B227-4F15-8252-C15B0DAAF590",variableType:-4}
 */
var InvoiceSeriesCode;

/**
 * @properties={typeid:35,uuid:"69EE06D8-E541-4FBA-B104-02E07063F3AA",variableType:-4}
 */
var InvoiceDocumentType;

/**
 * @properties={typeid:35,uuid:"E1BB177C-29E1-45B6-ACE6-B615F8A10381",variableType:-4}
 */
var InvoiceClass;

/**
 * @properties={typeid:35,uuid:"F1E535C6-645D-4DF5-9008-91226B0D0945",variableType:-4}
 */
var InvoiceIssueData;

/**
 * @properties={typeid:35,uuid:"634A3058-9351-4214-89DA-27857D903347",variableType:-4}
 */
var IssueDate;

/**
 * @properties={typeid:35,uuid:"F9371398-52EE-4672-BF97-4C2CB788A6C3",variableType:-4}
 */
var OperationDate;

/**
 * @properties={typeid:35,uuid:"87D94BDE-2E2A-41EE-B85E-0AECDAF6A709",variableType:-4}
 */
var PlaceOfIssue;

/**
 * @properties={typeid:35,uuid:"6020B710-AE64-43A8-9A8B-4F10BE209E38",variableType:-4}
 */
var PlaceOfIssueDescription;

/**
 * @properties={typeid:35,uuid:"05577781-3073-4760-853C-D49B5E12D2EE",variableType:-4}
 */
var TaxCurrencyCode;

/**
 * @properties={typeid:35,uuid:"31CA893D-7A19-4A84-807E-E45A1C7A87F5",variableType:-4}
 */
var LanguageName;

/**
 * @properties={typeid:35,uuid:"55479D6D-7881-42CE-B9F3-2FBBB065436D",variableType:-4}
 */
var TaxesOutputs;

/**
 * @properties={typeid:35,uuid:"4731E7C2-0D3A-4937-A7F6-62F76A8A4A6A",variableType:-4}
 */
var Tax;

/**
 * @properties={typeid:35,uuid:"6EFD85A5-D9FD-466D-95FC-3BF87D6DB9E8",variableType:-4}
 */
var TaxTypeCode;

/**
 * @properties={typeid:35,uuid:"7FAFFDD6-2BF1-41B3-9AA0-AA5AEA84DE22",variableType:-4}
 */
var TaxRate;

/**
 * @properties={typeid:35,uuid:"48D21329-DAAC-439E-97FB-CB7C09480D9D",variableType:-4}
 */
var TaxableBase;

/**
 * @properties={typeid:35,uuid:"A9EC6BD3-A11C-402E-A95C-02F2E65014F2",variableType:-4}
 */
var TaxAmount;

/**
 * @properties={typeid:35,uuid:"2B1805A6-31FD-4B78-B38F-3FCAF2BFE0B3",variableType:-4}
 */
var EquivalenceSurcharge;

/**
 * @properties={typeid:35,uuid:"EBD4488C-38F7-4BBB-ADC1-CFC6EA87E15E",variableType:-4}
 */
var EquivalenceSurchargeAmount;

/**
 * @properties={typeid:35,uuid:"E24BD7D5-4F8C-4EC4-A5A5-D498E60C01D2",variableType:-4}
 */
var InvoiceTotals;

/**
 * @properties={typeid:35,uuid:"054049DF-0FA6-4D7A-BAFF-8F1414B78AB5",variableType:-4}
 */
var TotalGrossAmount;

/**
 * @properties={typeid:35,uuid:"D91A8E58-B6FE-4DC3-B2D6-7CB8B6F7938F",variableType:-4}
 */
var TotalGeneralDiscounts;

/**
 * @properties={typeid:35,uuid:"5064EC6E-165D-4B76-82C7-4B2633ABD04E",variableType:-4}
 */
var TotalGeneralSurcharges;

/**
 * @properties={typeid:35,uuid:"A556ADFA-98FA-4BAE-B7B3-06E2C5238CC8",variableType:-4}
 */
var TotalGrossAmountBeforeTaxes;

/**
 * @properties={typeid:35,uuid:"07795EDF-4AB6-4E22-ADD3-5D5ACF692DB0",variableType:-4}
 */
var TotalTaxOutputs;

/**
 * @properties={typeid:35,uuid:"08B36337-2481-485D-925B-56EF7A10E7DC",variableType:-4}
 */
var TotalTaxesWithheld;

/**
 * @properties={typeid:35,uuid:"66BDEA92-64A0-4DF6-89B8-8F7F482D4320",variableType:-4}
 */
var InvoiceTotal;

/**
 * @properties={typeid:35,uuid:"9167D48E-5598-4E05-99F2-24DEB7B7FEC4",variableType:-4}
 */
var InvoiceLine;

/**
 * @properties={typeid:35,uuid:"4DD35A04-8DF9-4A60-A54E-7BA27BBE7293",variableType:-4}
 */
var ItemDescription;

/**
 * @properties={typeid:35,uuid:"010ECA28-EEC2-4EBE-A26F-17ABE49FB640",variableType:-4}
 */
var Quantity;

/**
 * @properties={typeid:35,uuid:"6590A8A9-B442-4ABD-AF49-BA491C40991D",variableType:-4}
 */
var UnitOfMeasure;

/**
 * @properties={typeid:35,uuid:"5287124C-0838-4E61-8384-F431D3F4187C",variableType:-4}
 */
var UnitPriceWithoutTax;

/**
 * @properties={typeid:35,uuid:"3FA790C3-C816-4541-8932-4A30AC08E305",variableType:-4}
 */
var TotalCost;

/**
 * @properties={typeid:35,uuid:"90853587-7BC9-4AE3-96E7-626A6A0E0836",variableType:-4}
 */
var DiscountsAndRebates;

/**
 * @properties={typeid:35,uuid:"B5D09C20-9468-4BC1-BBB3-2DF5BEA5DD82",variableType:-4}
 */
var Discount;

/**
 * @properties={typeid:35,uuid:"10CEE74C-B0FF-4E69-B843-FFECBD1830C5",variableType:-4}
 */
var DiscountReason;

/**
 * @properties={typeid:35,uuid:"435A8F3F-D3B8-4B5F-AAFF-FBC52108D37A",variableType:-4}
 */
var DiscountRate;

/**
 * @properties={typeid:35,uuid:"A7127696-D152-4BFF-9EAF-BAA1CFB6C6AE",variableType:-4}
 */
var DiscountAmount;

/**
 * @properties={typeid:35,uuid:"8A45C3D4-7B74-4A08-B07D-D6F4F245AB4F",variableType:-4}
 */
var Charges;

/**
 * @properties={typeid:35,uuid:"E20BD56E-C7A7-41F0-9783-D47344199CB2",variableType:-4}
 */
var Charge;

/**
 * @properties={typeid:35,uuid:"9C50A80A-E95F-4FCF-AAC9-9D15D055B2DF",variableType:-4}
 */
var ChargeReason;

/**
 * @properties={typeid:35,uuid:"80F80A36-C7F4-4706-A09D-692BA35F74CF",variableType:-4}
 */
var ChargeRate;

/**
 * @properties={typeid:35,uuid:"6D72A5F7-2454-4444-9880-1EEFBA874667",variableType:-4}
 */
var ChargeAmount;

/**
 * @properties={typeid:35,uuid:"889CCFBC-1345-41F0-A84A-60E09EB3A4C9",variableType:-4}
 */
var GrossAmount;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9816C9A8-78A8-4EAD-8FFD-D0A8A3A566CF"}
 */
var newxml = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C81B44E5-C798-409A-A3B5-EFA77631163F"}
 */
var htm = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ECE016C9-6450-4FC4-A070-3FEA8901A8C0"}
 */
var serverURL = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5450536A-F4D2-4E02-8F8E-E62CCB550C4F"}
 */
var nom = '';

/**
 * @properties={typeid:35,uuid:"F6CF833A-5A23-4E46-B941-69C2360BDFD5",variableType:-4}
 */
var Document;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F895540E-2262-4E1A-BE45-BDEE27737526"}
 */
var telefonocliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"26374066-06ED-4635-BE71-6DBD85FF3877"}
 */
var webcliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0BFAF644-0F5C-4DCE-995C-A3BBE71A60D1"}
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
 * @properties={typeid:24,uuid:"CC6ECDAA-E097-422C-BFC1-7B20274A8B3C"}
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
					/*
					var js = plugins.file.showFileSaveDialog('FacturaE321.xml', 'Selecciona localización para salvar el fichero');
					if (!js) return;			
								
					// Write the file in the selected location
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');
					*/
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
					else plugins.file.openFile('FacturaE321_'+forms.FrmFacturasGC.eje_cfa+utils.numberFormat(forms.FrmFacturasGC.nup_cfa,'00000')+forms.FrmFacturasGC.ser_cfa+'_'+".xml",jsFile.getBytes(),'application/txt')
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
 * @properties={typeid:24,uuid:"869474EE-202B-438E-A0CD-687E68B0B93A"}
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
					/*nom = 'FacturaE321.xml';
								
					
					serverURL = application.getServerURL() 
					js = serverURL + "\\uploads\\" + nom
					plugins.file.writeTXTFile(js, htm, 'UTF8', 'application/xml');*/
					
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
 * @properties={typeid:24,uuid:"E63246D5-9BF0-4A9D-858F-C43A8A9A73EE"}
 */
function GenerarXML31()
{	
	
}

/**
 * @properties={typeid:35,uuid:"6F2FE917-2255-48F4-93D2-732333D22EE9",variableType:-4}
 */
var FileHeader;

/**
 * @properties={typeid:35,uuid:"8E0CECF0-9B98-4565-9FEB-0055F5D7F646",variableType:-4}
 */
var Modality;

/**
 * @properties={typeid:35,uuid:"AC807930-EC18-4C23-809F-E4975A972850",variableType:-4}
 */
var Batch;

/**
 * @properties={typeid:35,uuid:"FE94798B-0A04-482C-8118-90EF61E3B4D3",variableType:-4}
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
 * @properties={typeid:24,uuid:"B0EE28D2-BB7F-4FB6-9ED7-76A4ADE10581"}
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
			application.getWindow('Exportar Facturas FacturaE').hide();
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
 * @properties={typeid:24,uuid:"530FBC4C-AB14-46CD-98FD-1BA9A15743BE"}
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
 * @properties={typeid:24,uuid:"06770442-551E-48A1-90DB-E4CBDA6460B6"}
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
 * @properties={typeid:24,uuid:"6216AC83-3FC3-46B6-915A-ACA2803C21FC"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0F3493A7-E488-4C9E-B229-1D1A4FB88FB9",variableType:8}
 */
var numfacturas;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1A33C1B0-D411-4446-8715-9A99B491407E",variableType:8}
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
 * @properties={typeid:24,uuid:"35845735-99AC-4E9B-9357-10A181C8B670"}
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
 * @properties={typeid:35,uuid:"AAAA842C-49D0-4E1F-92EF-8B3C94CA6F66"}
 */
var cifempresa = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DD7DFB76-9347-4BC5-9154-2E7C38FDDD8B"}
 */
var tipopersona = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"515D95E7-2F07-40C5-822E-0A62BF565D1E"}
 */
var pais = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0B9EB0D7-E26C-4B37-9516-82320AD163BD"}
 */
var razonsocial = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"91BD83D1-D925-4C78-B526-8999C11C1988"}
 */
var regmercantil = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E4715397-E422-4140-ABF4-7A845BE7104C"}
 */
var hoja = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9D1457B8-B2B6-4816-B72E-016207FC7E53"}
 */
var folio = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9C665D15-DAB1-4ABC-BDDF-2A1BAFD09921"}
 */
var seccion = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F9D4D847-5BCF-451F-A3AC-BBCCE46F42C3"}
 */
var tomo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9E15BB07-7700-4B6A-9947-4685F9FDA402"}
 */
var direccion = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0EBA2961-A3CD-46F3-B5F8-5F15968E3906"}
 */
var codigopostal = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EF6520CD-D88E-41D7-BD2C-6DED783EF3B6"}
 */
var ciudad = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82F8BF63-0074-4F03-92FE-F65CF40F814B"}
 */
var provincia = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A5D874E7-0F3F-4091-88E5-802543FA5B35"}
 */
var telefono = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"91F70A80-CA4C-4FE1-AC53-CFFF3CE13317"}
 */
var fax = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CFBD84CB-D5B1-4D44-947D-DC3F2CA9F18B"}
 */
var web = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"14C4DF26-07CF-4A58-AF1F-1C49EFE456EC"}
 */
var correo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C352537B-DF6B-4E51-98CE-1974E63CA817"}
 */
var primerafactura = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6489008A-8803-4C60-B2EE-BE986E348CF3"}
 */
var ultimafactura = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"61D33ED2-7D3E-4833-80D9-6DA86A3511E5"}
 */
var cifcliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F5123891-43D1-49F8-863E-728D3CF34E35"}
 */
var tipopersonacliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8D519AC4-AB89-4631-9302-7DC3364FCD26"}
 */
var paiscliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"25BD9716-F86C-43D1-BE26-8FA6D222BF8A"}
 */
var desccliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3C3A68BD-07F5-4282-8381-A66863ECADD0"}
 */
var direccioncliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FF1DE132-B9E7-4D60-8105-647A19F550B3"}
 */
var poblacioncliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DB2C6FBC-1552-4A3C-AEF1-12D39866F53F"}
 */
var provinciacliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"71BE4B91-57AA-4E3B-B2DC-5BC464890963"}
 */
var codpostalcliente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B1473642-A71E-4469-AA98-57F4A605D9A9"}
 */
var razonsocialcliente = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"1C92B10B-A662-4D5C-ADB3-7C7C8E0E2E90",variableType:93}
 */
var fechacobro;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A288438-6499-4B72-9DB5-10EAC0DDA47E"}
 */
var cuentaabono = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4682D089-AF08-416B-9F19-C28F0647074E"}
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
 * @properties={typeid:24,uuid:"679521CD-748B-4C40-9734-48BB0D4250CD"}
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
 * @properties={typeid:35,uuid:"3017E02D-35D1-4A31-9A2A-C3F93323CA36",variableType:93}
 */
var fechafactura;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"32C85595-05A5-4AEC-8EA3-1D9336678EBB",variableType:8}
 */
var impbre;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E2B4C4D6-A9AD-4A76-91CC-3ACB00691263",variableType:8}
 */
var depp;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F282CAB6-0FDA-4F9A-B5BD-E38FAA0B5D58",variableType:8}
 */
var impgfi;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"499749DB-D88D-482B-9007-AF196E41144A",variableType:8}
 */
var impnee;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F81B964C-5B9B-4D54-A00E-58D60646518F",variableType:8}
 */
var impbie;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"50FB17FD-D5DE-4BBD-900B-F8EC56AB04D3",variableType:8}
 */
var piva;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"250DB732-9348-45A8-8173-646127F42FB8",variableType:8}
 */
var cuotaiva;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EF20DF29-C12B-45F8-86D5-7544AA0F1B28",variableType:8}
 */
var impbie2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"11BF60C1-935D-4EF6-89FA-D59638101FE0",variableType:8}
 */
var piva2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D8319EE8-B568-4C18-8D8C-9A0727139019",variableType:8}
 */
var cuotaiva2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FEDA7901-08E6-4058-9A6E-058D9B19253E",variableType:8}
 */
var impbie3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BF8B3B3B-5879-49D4-A7C4-AD4058BF7E6F",variableType:8}
 */
var piva3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"21614405-42BC-4E24-AB7B-4EB0B780A514",variableType:8}
 */
var impre;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ECF9177D-C3B3-4380-8E48-3CAD7DD41F71",variableType:8}
 */
var cuotaiva3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"99364BF4-5D56-4E41-AA1E-A6AC49B196F1",variableType:8}
 */
var porcimpre;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9863D263-ED9D-4477-A701-BCF0EFC78621",variableType:8}
 */
var impre2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C3626B78-7AE4-4A7B-B32E-17F3886CDC4B",variableType:8}
 */
var porcimpre2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D127E20D-6F19-4C3C-B065-7B206ABD8329",variableType:8}
 */
var impre3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3CE910B-6DF0-4944-928E-462E3760AA26",variableType:8}
 */
var porcimpre3;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F6896424-AA84-427E-83CC-08C081554352"}
 */
var concepto = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"28E024CD-1108-44F3-A31A-132488763A23",variableType:8}
 */
var cant;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8C09D2E6-342C-49F3-9A4B-D1D7A1537597",variableType:8}
 */
var imporlfa;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5229FCFC-0286-4A89-B494-F41C0D0D1B31",variableType:8}
 */
var preclfa;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C30F5EA2-4787-448A-B824-CF06EC2267C0",variableType:8}
 */
var dtolfa;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"515891FF-7BA3-47F6-AD77-F5447B9B3BE1",variableType:8}
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
 * @properties={typeid:24,uuid:"BD92BC37-83B2-4A81-AAEC-E2F464BFF2CF"}
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
 * @properties={typeid:35,uuid:"CF233806-CD18-4A91-9AEE-DEBDB3F9C3E3"}
 */
var paisclienteiso3 = '';

/**
 * TODO generated, please specify type and doc for the params
 * @properties={typeid:24,uuid:"FE19819D-49BD-45F4-95F8-22B64C85096A"}
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
 * @properties={typeid:24,uuid:"631927E0-2918-485C-80BA-7EDEF00D162D"}
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
 * @properties={typeid:24,uuid:"048A0809-C811-453A-80F9-2D023789E356"}
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
