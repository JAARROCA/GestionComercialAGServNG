/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"764FD2A0-06AC-49BE-A3CA-4921EC6D4231",variableType:8}
 */
var Importe;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"E54A6F3A-76AB-42DB-AA13-BC101ACE1A9E"}
 */
var NuevaFactura = '';

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"6F236FD8-29D6-40B7-A19F-82C85C033C30"}
 */
var FraProf = '';

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"6D91B784-3F69-4355-8843-AFF508971D27"}
 */
var Ejer = '';

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"D47CB66D-F0C0-4C62-8E50-41A5A8C2EF7E",variableType:8}
 */
var NF;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"27BFF354-B88A-4C95-84A8-9A056F05A990"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
		
	
}

/**
 *
 * @properties={typeid:24,uuid:"C270577A-1E68-46D4-924D-002DC3E4CE18"}
 */
function sub_setNewNumeroFactura()
{
	FraProf = forms.FrmFacturasProformaGC.eje_cfa+utils.numberFormat(forms.FrmFacturasProformaGC.nup_cfa,'00000')+forms.FrmFacturasProformaGC.ser_cfa;	
	
	
	sub_setEjercicio();
	var query = 'select [NumFactura] from [ParametrosAplicacion]'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	NF = dataset.getValue(1, 1) + 1	
	
	NuevaFactura = Ejer + utils.numberFormat(NF,'00000');	
}

/**
 * @properties={typeid:24,uuid:"16CD1DBD-7EA5-4DEF-A25E-3E6776889704"}
 */
function setImporteTotal()
{
	//var query = 'select [impnee_cof] from [cofertas] where [cof_cof]='+cod_cof
	//var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	Importe = impnee_cfa//dataset.getValue(1, 1)	
}

/**
 *
 * @properties={typeid:24,uuid:"CDEA95A4-73A7-43F7-88D9-54002AAA416E"}
 */
function validate_autoEnter()
{	
	sub_setNewNumeroFactura();	
	
}

/**
 *
 * @properties={typeid:24,uuid:"7EB5034C-7D2A-42BD-AF17-790344E15563"}
 */
function sub_setEjercicio()
{
	var Agno = new Date()
	Agno= Agno.getFullYear()
	var a = new String()
	a = Agno.toString()
	a= a.substr(2,2)
	Ejer = a
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"CD237B0F-D64C-4ECC-A66F-1AE844E75E12"}
 */
function onShow() {
	// TODO Auto-generated method stub
	setImporteTotal();
	validate_autoEnter()
}
