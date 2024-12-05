/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B5720575-7512-43BC-842C-AC8A86366FDB",variableType:4}
 */
var foto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4F78D67F-D2D4-4411-B79E-5F26758ADB0E",variableType:4}
 */
var Criterio = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"4BF1638D-16D9-40CF-8C4A-A4A8AB48AC83"}
 */
var HastaDescArticulo = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"9E9792E7-6D5F-4E79-9E00-6BB9C1317932"}
 */
var DesdeDescArticulo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"49C1E6B5-95B6-4D1E-8FDD-7AB9F0ED90CE"}
 */
var HastaArticulo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"93EE0221-C68E-4828-91FD-5C4DF2E11F12"}
 */
var DesdeArticulo = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"92776A32-5DB2-454C-B77B-C6BFA45D80A6"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"5AFCE5DA-3DCF-4ED9-9417-BA92FB4964D1"}
 */
function onShow() {
	// TODO Auto-generated method stub
	DesdeArticulo = null
	HastaArticulo = null
	DesdeDescArticulo = null
	HastaDescArticulo = null
	Criterio = 0;
	foto = null
	elements.DesdeArticulo.requestFocus()
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B7D2F909-B32D-4651-81FC-17750E533AFA"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.HastaArticulo.requestFocus()
}
