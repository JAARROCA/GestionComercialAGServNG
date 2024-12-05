/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"40DF9903-AEEB-457A-AF9A-FE3D745EAD63"}
 */
var NFactura = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6C79F7F7-3625-446B-9245-EB6343BD2E89"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	elements.nfactura.requestFocus()
}

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5A9A5DE8-B542-4862-9BEA-938C93F82AC8",variableType:93}
 */
var FechaFacturaCompraDuplicar;

/**
 * Callback method for when form is shown.
 *
* @properties={typeid:24,uuid:"6A31DD89-8256-4BEC-B361-2CD5D7555296"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(new Date(),'dd-MM-yyyy')
	FechaFacturaCompraDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
	NFactura = null;
	elements.FechaPresupuestoDuplicar.requestFocus()
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"093373D0-0CFA-4C1C-A998-3BFCC991EE29"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(FechaFacturaCompraDuplicar,'dd-MM-yyyy');
	FechaFacturaCompraDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"DCB5B478-4F5B-44A1-B253-2DA106054F08"}
 */
function onDataChangenup() {
	// TODO Auto-generated method stub
	if(forms.FrmFacturasComprasGC.pro_cfca && NFactura)
	{
		var query = "select pro_cfca,nup_cfca from tbFacturaCompraCabecera where pro_cfca = " + forms.FrmFacturasComprasGC.pro_cfca + 
		" and nup_cfca ='"+NFactura+"'"
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var n = dataset.getValue(1,1)
		if(n != null)
		{
			var methd = 'forms.dlgDuplicarFacturaCompraGC.foco()';
			globals.GCshowErrorDialog('Factura de compra de '+forms.FrmFacturasComprasGC.GCtbfacturacompracabecera_to_tbmaestroproveedores.descproveedor+' y número "'+NFactura+'", ya registrada con anterioridad.\n ¡NO SE PUEDE DUPLICAR! Revisela.',methd,'Aceptar',null,null,null)
		}	
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"E7301E29-D930-4D0D-9FD0-1F3EAAC29A4D"}
 */
function foco() {
	elements.nfactura.requestFocus()
}
