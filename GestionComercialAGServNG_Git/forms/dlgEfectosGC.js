/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0A8D75F3-4373-42F4-BE54-DC818BA46BFC",variableType:8}
 */
var ImporteTotalFactura;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"75C132A5-CB8E-4F96-9CAD-5C347FDCB101",variableType:8}
 */
var ImporteTotalEfectos;

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"6E5080A4-CF8D-4C8C-97DE-743312E3E13C"}
 */
function onShow() {
	// TODO Auto-generated method stub
	/*var query = "select [impnee_cfa] from [tbFacturaCabecera] where [eje_cfa] = " + eje_ef+
				" and [ser_cfa] ='"+ser_ef+"' and [nup_cfa]="+nup_ef
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	ImporteTotalFactura = dataset.getValue(1, 1)
	
	query = "select sum([impo_ef]) from [efectos] where [eje_ef] = " + eje_ef+
				" and [ser_ef] ='"+ser_ef+"' and [nup_ef]="+nup_ef
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	ImporteTotalEfectos = dataset.getValue(1, 1)*/
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"B622CABA-DC98-4DF3-987E-39164C8498FA"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	var fech = utils.dateFormat(fecha_ef,'dd-MM-yyyy') 
	fecha_ef = utils.parseDate(fech,'dd-MM-yyyy')
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"79299789-DE3E-4D0E-BC0D-6984BDF9ACD2"}
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
 * @properties={typeid:24,uuid:"56C6FC63-1994-44E0-AD0B-12226340A4C2"}
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
 * @properties={typeid:24,uuid:"12C84B4C-EF49-4C21-A0A7-59EC2786A144"}
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
 * @properties={typeid:24,uuid:"FCC9F6AF-3E10-4ABC-86D2-37C5962BAB48"}
 */
function onDataChangeporcef() {
	// TODO Auto-generated method stub
	if(porc_ef)
	{
		if(gcefectos_to_tbfacturacabecera && gcefectos_to_tbfacturacabecera.impnee_cfa)
		{
			impo_ef = globals.GCROUND(gcefectos_to_tbfacturacabecera.impnee_cfa * porc_ef * 0.01, 2)
		}
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"0A4C7394-46A0-49F3-9A48-ED0F557D8016"}
 */
function onDataChangeImpef() {
	// TODO Auto-generated method stub
	if(impo_ef)
	{
		if(gcefectos_to_tbfacturacabecera && gcefectos_to_tbfacturacabecera.impnee_cfa)
		{
			porc_ef = globals.GCROUND((impo_ef / gcefectos_to_tbfacturacabecera.impnee_cfa) * 100, 2);			
		}
	}
}
