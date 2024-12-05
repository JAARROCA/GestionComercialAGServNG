/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8FE9E87D-C5CB-48B8-9C69-DEEC89F68769",variableType:4}
 */
var HastaN = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"29337135-F3DE-46BC-9F70-DF3B0C651F54",variableType:4}
 */
var DesdeN = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"46547AB1-AE2C-46FC-9A12-1848A7A77F62",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"1BB044C7-9BD4-494D-A49A-D7B6D3F74060",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"75F630E8-5D93-4F12-9C30-D9B47C8AF526",variableType:4}
 */
var HastaNup = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C22F2A3B-0EF1-4943-9BEB-3863C0EDA850",variableType:4}
 */
var DesdeNup = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1A94893B-801F-4D06-8BBA-E5C41088D19B"}
 */
var HastaSer = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1DEEA634-D002-43A5-9E24-36B85C19E059"}
 */
var DesdeSer = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D2D7C99E-A40C-4B7F-B935-4EFC335C7FA7",variableType:4}
 */
var HastaEje = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"40142693-7D02-4317-BED9-E247DAFCC44F",variableType:4}
 */
var DesdeEje = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"889BBD26-1975-4E33-AC51-433B6B9E1C3A"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(false)
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"E87398B7-3AE3-41DD-A1C1-919705078149"}
 */
function onShow() {
	// TODO Auto-generated method stub
	//globals.GCCriterios = 0;
	//globals.GCTipoConsulta = 0;
	DesdeFecha = null
	HastaFecha = null
	onDataChangeDatos()
	
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"8B5D9DAE-E2CF-4C8B-81B6-B5FC21C7568D"}
 */
function onDataChangeDatos() {
	// TODO Auto-generated method stub
	switch (globals.GCTipoConsulta) {
		    case 0: 			    
				    elements.lbltitulo.visible = true;
					elements.lbltitulo.text = 'Código Cliente';
					elements.lbldesdecuenta.visible = true;
					elements.lblhastacuenta.visible = true;
					elements.DesdeCodigo.visible = true;
					elements.HastaCodigo.visible = true;
					globals.GCDesdeCodigo = null;
					globals.GCHastaCodigo = null;
					elements.lblfacturas.visible = true;
					elements.lblfacturas.text = 'Presupuestos';
					elements.lbldesdefactura.visible = true;
					elements.lblhastafactura.visible = true;
					elements.lbldesdefactura.text = 'Desde Presupuesto';
					elements.lblhastafactura.text = 'Hasta Presupuesto';
					elements.desdeeje.visible = false;
					elements.hastaeje.visible = false;
					elements.desdeser.visible = false;
					elements.hastaser.visible = false;
					elements.desdenup.visible = false;
					elements.hastanup.visible = false;
					elements.desden.visible = true;
					elements.hastan.visible = true;
					DesdeEje = null;
					HastaEje = null;
					DesdeSer = null;
					HastaSer = null;
					DesdeNup = null;
					HastaNup = null;
					DesdeN = null;
					HastaN = null;
					break;
		    case 1: 			    
				    elements.lbltitulo.visible = true;
					elements.lbltitulo.text = 'Código Cliente';
					elements.lbldesdecuenta.visible = true;
					elements.lblhastacuenta.visible = true;
					elements.DesdeCodigo.visible = true;
					elements.HastaCodigo.visible = true;
					globals.GCDesdeCodigo = null;
					globals.GCHastaCodigo = null;
					elements.lblfacturas.visible = true;
					elements.lblfacturas.text = 'Albaranes';
					elements.lbldesdefactura.visible = true;
					elements.lblhastafactura.visible = true;
					elements.lbldesdefactura.text = 'Desde que Albarán';
					elements.lblhastafactura.text = 'Hasta que Albarán';
					elements.desdeeje.visible = false;
					elements.hastaeje.visible = false;
					elements.desdeser.visible = false;
					elements.hastaser.visible = false;
					elements.desdenup.visible = false;
					elements.hastanup.visible = false;
					elements.desden.visible = true;
					elements.hastan.visible = true;
					DesdeEje = null;
					HastaEje = null;
					DesdeSer = null;
					HastaSer = null;
					DesdeNup = null;
					HastaNup = null;
					DesdeN = null;
					HastaN = null;
					break;
		    case 2: 			    
				    elements.lbltitulo.visible = true;
					elements.lbltitulo.text = 'Código Cliente';
					elements.lbldesdecuenta.visible = true;
					elements.lblhastacuenta.visible = true;
					elements.DesdeCodigo.visible = true;
					elements.HastaCodigo.visible = true;
					globals.GCDesdeCodigo = null;
					globals.GCHastaCodigo = null;
					elements.lblfacturas.visible = true;
					elements.lblfacturas.text = 'Facturas';
					elements.lbldesdefactura.visible = true;
					elements.lblhastafactura.visible = true;
					elements.lbldesdefactura.text = 'Desde que Factura';
					elements.lblhastafactura.text = 'Hasta que Factura';
					elements.desdeeje.visible = true;
					elements.hastaeje.visible = true;
					elements.desdeser.visible = true;
					elements.hastaser.visible = true;
					elements.desdenup.visible = true;
					elements.hastanup.visible = true;
					elements.desden.visible = false;
					elements.hastan.visible = false;
					DesdeEje = null;
					HastaEje = null;
					DesdeSer = null;
					HastaSer = null;
					DesdeNup = null;
					HastaNup = null;
					DesdeN = null;
					HastaN = null;
					break;
		    default: break;
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C487D756-1A08-472B-8AAF-DB22CA94C7F4"}
 */
function onActiondesdeeje(event) {
	// TODO Auto-generated method stub
	elements.desdeser.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"3D06F8C5-2247-4C45-B63E-3A1D84BCD521"}
 */
function onActiondesdeser(event) {
	// TODO Auto-generated method stub
	elements.desdenup.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"653A27E3-9CA6-41BC-9730-344F06CB5D0B"}
 */
function onActiondesdenup(event) {
	// TODO Auto-generated method stub
	elements.hastaeje.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"F781C5A3-15B7-4A6D-B2B4-481073AD418C"}
 */
function onActionhastaeje(event) {
	// TODO Auto-generated method stub
	elements.hastaser.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"9DED7E74-FAD2-4C32-9E73-E35A19F25C0F"}
 */
function onActionhastaser(event) {
	// TODO Auto-generated method stub
	elements.hastanup.requestFocus()
}
