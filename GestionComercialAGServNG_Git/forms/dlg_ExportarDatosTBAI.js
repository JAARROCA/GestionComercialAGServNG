/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"4AB0A324-C313-45EE-AB37-598193908995",variableType:8}
 */
var HastaEje = null;

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"811E2E4E-5E83-44C7-9976-7E3480F16E06"}
 */
var HastaSer = null;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"DF836613-D1EF-47F0-A002-81F8C81DA71B",variableType:8}
 */
var HastaNup = null;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"1399F0F7-C4BC-479B-9AFF-CA4598144224",variableType:8}
 */
var DesdeEje = null;

/**
 * @type {String}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"585A64E5-B33B-4A5D-B105-5C9D82057A34"}
 */
var DesdeSer = null;

/**
 * @type {Number}
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"13E3548F-17FF-4C27-B0CA-15AE518D8CA2",variableType:8}
 */
var DesdeNup = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D8B8D63E-A43B-49BC-8B9D-3444B8656CF7"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"14D023CA-76EC-408A-8DD2-186ED9E890AC"}
 */
function onShow() {
	var fechdes = new Date()
	fechdes.setMonth(0,1)
	var a = fechdes.getFullYear().toString().substr(2,2);
	fechdes = utils.dateFormat(fechdes,'dd-MM-yyyy')
	DesdeEje = utils.stringToNumber(a)
	DesdeSer = ''
	if(forms.FrmFacturasGC.id) DesdeNup = forms.FrmFacturasGC.nup_cfa;
	else DesdeNup = null;
	HastaEje = utils.stringToNumber(a)
	HastaSer = ''
	if(forms.FrmFacturasGC.id) HastaNup = forms.FrmFacturasGC.nup_cfa;
	else HastaNup = null;
	
	elements.desdenup.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"0C1EB418-0BFD-4E25-949F-3154C15C3BCC"}
 */
function onActiondesdenup(event) {
	// TODO Auto-generated method stub
	elements.hastanup.requestFocus()
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"9580843A-713F-41F2-809E-2CC1E5115FBA"}
 */
function onDataChangeDnup() {
	if(DesdeEje && DesdeEje > HastaEje) HastaEje = DesdeEje;
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"54814A48-8F0A-4696-9964-EF40E8DC13E2"}
 */
function onDataChangeHnup() {
	if(HastaEje && DesdeEje && DesdeEje > HastaEje) HastaEje = DesdeEje;
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"08A86C12-80C5-4595-982F-7EC93CFE80B4"}
 */
function onDataChangednup() {
	if(DesdeNup && DesdeNup > HastaNup) HastaNup = DesdeNup;
}
