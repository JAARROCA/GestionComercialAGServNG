/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D85ADEFF-594D-4237-9818-67C297284250",variableType:8}
 */
var ImporteTotalFactura;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ECCB8961-F39D-4C92-AF4E-21FBD40CDCB9",variableType:8}
 */
var ImporteTotalEfectos;

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"10A01C8B-6D40-4415-BCC0-587CC32D76B5"}
 */
function onShow() {
	// TODO Auto-generated method stub
	/*var query = "select [impnee_cfca] from [tbFacturaCompraCabecera] where [pro_cfca] = " + pro_efc+
				" and [nup_cfca] ='"+nup_efc+"'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	ImporteTotalFactura = dataset.getValue(1, 1)
	
	query = "select sum([impo_efc]) from [efectoscompras] where [pro_efc] = " + pro_efc+
				" and [nup_efc] ='"+nup_efc+"'";
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	ImporteTotalEfectos = dataset.getValue(1, 1)*/
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"5A71ABB1-0D12-4BAD-A47B-C93D4283FA1C"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(fecha_efc,'dd-MM-yyyy') 
	fecha_efc = utils.parseDate(fech,'dd-MM-yyyy')
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"698C9E05-4404-4633-AEF3-EE1E58F159D5"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	elements.porc_ef.requestFocus()
	elements.porc_ef.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"10619853-ED35-4EE2-8159-1F5B25883935"}
 */
function onActionporcef(event) {
	// TODO Auto-generated method stub
	elements.impo_ef.requestFocus()
	elements.impo_ef.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"594E041C-5102-46AC-8587-CE0488B699DF"}
 */
function onActionimpo(event) {
	// TODO Auto-generated method stub
	elements.cfpa_ef.requestFocus()
	elements.cfpa_ef.selectAll()
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"40168A4D-50AD-4E08-B1DA-DC16EA78596D"}
 */
function onDataChangeporcef() {
	// TODO Auto-generated method stub
	if(porc_efc)
	{
		if(gcefectoscompras_to_tbfacturacompracabecera && gcefectoscompras_to_tbfacturacompracabecera.impnee_cfca)
		{
			impo_efc = globals.GCROUND(gcefectoscompras_to_tbfacturacompracabecera.impnee_cfca * porc_efc * 0.01, 2)
		}
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"C6B43323-741F-4CBC-A230-C99018AFEDFE"}
 */
function onDataChangeImpef() {
	// TODO Auto-generated method stub
	if(impo_efc)
	{
		if(gcefectoscompras_to_tbfacturacompracabecera && gcefectoscompras_to_tbfacturacompracabecera.impnee_cfca)
		{
			porc_efc = globals.GCROUND((impo_efc / gcefectoscompras_to_tbfacturacompracabecera.impnee_cfca) * 100, 2);			
		}
	}
}
