/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"0A22D5D5-DAEF-4344-95BF-7A8C90484467",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"71D0CDB1-1723-44AB-A510-07108E1841B0",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E73BFC1C-3905-482F-B77F-0C730F18AED2",variableType:4}
 */
var HastaAlbaran = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"71903C2C-A357-40C6-8FE8-FBDE7DB21E41",variableType:4}
 */
var DesdeAlbaran = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"20ADA94F-9A72-4ADF-B03A-E83167470A27"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"A29FA3AA-5403-4A75-A498-FED5549508EE"}
 */
function onShow() {
	// TODO Auto-generated method stub
	HastaFecha = new Date();		
	DesdeFecha = null
	globals.GCCriterios = 0
	DesdeAlbaran = null
	HastaAlbaran = null
	elements.DesdeAlbaran.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0216C0B1-9925-4C1D-AB37-E3872563FFA0"}
 */
function onActionCriterio(event) {
	// TODO Auto-generated method stub
	if(globals.GCCriterios==0)
	{
		elements.DesdeAlbaran.requestFocus();
	}
	else
	{
		elements.DesdeFecha.requestFocus();
	}
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1B147EF7-AAEA-4B97-9D3E-A3100D617CF3"}
 */
function onActiondalbaran(event) {
	elements.HastaAlbaran.requestFocus()
}
