/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"28AA7B1D-9FF4-4417-B123-F845E37EBFB3",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"701F2DE4-7176-4C6D-8F64-7C387939F183",variableType:93}
 */
var DesdeFecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"08EC0A94-F313-4538-A9DF-756D59A431B8",variableType:4}
 */
var HastaNup = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9C52E8A8-474D-4DA7-BB4A-56991625E5B7",variableType:4}
 */
var DesdeNup = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"72DCEAC6-B56A-45B3-8C76-E886FC76FB01"}
 */
var HastaSer = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"27D9CCCC-F1AB-4C62-A690-A15A27EFF885"}
 */
var DesdeSer = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"26C94DFC-E8B9-44C9-9D1C-98477C00FD16",variableType:4}
 */
var HastaEje = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"357BDC14-6820-4E72-92EC-AD9555A1144E",variableType:4}
 */
var DesdeEje = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6278EE47-8C18-4046-A2C2-E499CA877AAD"}
 */
var CaracterSeparador = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F133B58A-1F8A-48B7-84DE-5C6607887E9D"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(false)
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"3078D504-21C2-4B61-9C63-EDFB294E5CA8"}
 */
function onShow() {
	// TODO Auto-generated method stub
	//globals.GCCriterios = 0;
	//globals.GCTipoConsulta = 0;
	onDataChangeFicheroSalida()
	onDataChangeDatos()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"4DBD9E5B-523E-470D-B15F-923F11B4DD67"}
 */
function onDataChangeFicheroSalida() {
	// TODO Auto-generated method stub
	switch (globals.GCCriterios) {
			case 0: 			    
				elements.lblcaracter.visible = false;
				elements.caracter.visible = false;  		
				break;
			case 1: 			    
				CaracterSeparador = '|';
				elements.lblcaracter.visible = true;
				elements.caracter.visible = true;  		
				break;
			case 2: 			    
				elements.lblcaracter.visible = false;
				elements.caracter.visible = false;  		
				break;
			default: break;
	}	
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"3288381C-FF77-4B8B-BAB3-A7DB1A26F10F"}
 * @SuppressWarnings(wrongparameters)
 */
function onDataChangeDatos() {
	// TODO Auto-generated method stub
	switch (globals.GCTipoConsulta) {
		    case 0: 			    
		    		elements.Criterios.visible = true;
		    		elements.Criteriosc.visible = false;
    				elements.lbltitulo.visible = true;
					elements.lbltitulo.text = 'Código Cliente';
					elements.lbldesdecuenta.visible = true;
					elements.lblhastacuenta.visible = true;
					elements.DesdeCodigo.visible = true;
					elements.HastaCodigo.visible = true;
					globals.GCDesdeCodigo = null;
					globals.GCHastaCodigo = null;
					elements.lblfacturas.visible = false;
					elements.lbldesdefactura.visible = false;
					elements.lblhastafactura.visible = false;
					elements.desdeeje.visible = false;
					elements.hastaeje.visible = false;
					elements.desdeser.visible = false;
					elements.hastaser.visible = false;
					elements.desdeserc.visible = false;
					elements.hastaserc.visible = false;
					elements.desdenup.visible = false;
					elements.hastanup.visible = false;
					elements.lbldesdefechafactura.visible = false;
					elements.DesdeFecha.visible = false;
					elements.lblhastafechafactura.visible = false;
					elements.HastaFecha.visible = false;
					DesdeEje = utils.stringRight(new Date().getFullYear().toString(),2)// null;
					HastaEje = utils.stringRight(new Date().getFullYear().toString(),2)//null;
					DesdeSer = ''//null;
					HastaSer = ''//null;
					DesdeNup = null;
					HastaNup = null;
					var fechdes = new Date()
					fechdes.setMonth(0,1)
					fechdes.getFullYear().toString().substr(2,2);
					fechdes = utils.dateFormat(fechdes,'dd-MM-yyyy')
					DesdeFecha = utils.parseDate(fechdes,'dd-MM-yyyy')
					HastaFecha = null
					break;
		    case 1: 			    
				    elements.Criterios.visible = true;
		    		elements.Criteriosc.visible = false;
					elements.lbltitulo.visible = true;
					elements.lbltitulo.text = 'Código Proveedor';
					elements.lbldesdecuenta.visible = true;
					elements.lblhastacuenta.visible = true;
					elements.DesdeCodigo.visible = true;
					elements.HastaCodigo.visible = true;
					globals.GCDesdeCodigo = null;
					globals.GCHastaCodigo = null;
					elements.lblfacturas.visible = false;
					elements.lbldesdefactura.visible = false;
					elements.lblhastafactura.visible = false;
					elements.desdeeje.visible = false;
					elements.hastaeje.visible = false;
					elements.desdeser.visible = false;
					elements.hastaser.visible = false;
					elements.desdeserc.visible = false;
					elements.hastaserc.visible = false;
					elements.desdenup.visible = false;
					elements.hastanup.visible = false;
					elements.lbldesdefechafactura.visible = false;
					elements.DesdeFecha.visible = false;
					elements.lblhastafechafactura.visible = false;
					elements.HastaFecha.visible = false;
					DesdeEje = null;
					HastaEje = null;
					DesdeSer = null;
					HastaSer = null;
					DesdeNup = null;
					HastaNup = null;
					DesdeFecha = null;
					HastaFecha = null;
					break;
		    case 2: 			    
				    elements.Criterios.visible = true;
		    		elements.Criteriosc.visible = false;
					elements.lbltitulo.visible = true;
					elements.lbltitulo.text = 'Código Articulo';
					elements.lbldesdecuenta.visible = true;
					elements.lblhastacuenta.visible = true;
					elements.DesdeCodigo.visible = true;
					elements.HastaCodigo.visible = true;
					globals.GCDesdeCodigo = null;
					globals.GCHastaCodigo = null;
					elements.lblfacturas.visible = false;
					elements.lbldesdefactura.visible = false;
					elements.lblhastafactura.visible = false;
					elements.desdeeje.visible = false;
					elements.hastaeje.visible = false;
					elements.desdeser.visible = false;
					elements.hastaser.visible = false;
					elements.desdeserc.visible = false;
					elements.hastaserc.visible = false;
					elements.desdenup.visible = false;
					elements.hastanup.visible = false;
					elements.lbldesdefechafactura.visible = false;
					elements.DesdeFecha.visible = false;
					elements.lblhastafechafactura.visible = false;
					elements.HastaFecha.visible = false;
					DesdeEje = null;
					HastaEje = null;
					DesdeSer = null;
					HastaSer = null;
					DesdeNup = null;
					HastaNup = null;
					DesdeFecha = null;
					HastaFecha = null;
					break;
		    case 3: 
		    		elements.Criterios.visible = false;
		    		elements.Criteriosc.visible = true;
				    elements.lbltitulo.visible = true;
					elements.lbltitulo.text = 'Código Cliente';
					elements.lbldesdecuenta.visible = true;
					elements.lblhastacuenta.visible = true;
					elements.DesdeCodigo.visible = true;
					elements.HastaCodigo.visible = true;
					elements.lblfacturas.visible = true;
					elements.lbldesdefactura.visible = true;
					elements.lblhastafactura.visible = true;
					elements.desdeeje.visible = true;
					elements.hastaeje.visible = true;
					elements.desdeser.visible = true;
					elements.hastaser.visible = true;
					elements.desdeserc.visible = false;
					elements.hastaserc.visible = false;
					elements.desdenup.visible = true;
					elements.hastanup.visible = true;
					elements.lbldesdefechafactura.visible = true;
					elements.DesdeFecha.visible = true;
					elements.lblhastafechafactura.visible = true;
					elements.HastaFecha.visible = true;
					DesdeEje = utils.stringRight(new Date().getFullYear().toString(),2)// null;
					HastaEje = utils.stringRight(new Date().getFullYear().toString(),2)//null;
					DesdeSer = ''//null;
					HastaSer = ''//null;
					DesdeNup = null;
					HastaNup = null;
					fechdes = new Date()
					fechdes.setMonth(0,1)
					fechdes.getFullYear().toString().substr(2,2);
					fechdes = utils.dateFormat(fechdes,'dd-MM-yyyy')
					DesdeFecha = utils.parseDate(fechdes,'dd-MM-yyyy')
					HastaFecha = null
					break;
		    case 4: 			    
				    elements.Criterios.visible = true;
		    		elements.Criteriosc.visible = false;
					elements.lbltitulo.visible = true;
					elements.lbltitulo.text = 'Código Cliente';
					elements.lbldesdecuenta.visible = true;
					elements.lblhastacuenta.visible = true;
					elements.DesdeCodigo.visible = true;
					elements.HastaCodigo.visible = true;
					elements.lblfacturas.visible = true;
					elements.lbldesdefactura.visible = true;
					elements.lblhastafactura.visible = true;
					elements.desdeeje.visible = true;
					elements.hastaeje.visible = true;
					elements.desdeserc.visible = true;
					elements.hastaserc.visible = true;
					elements.desdeser.visible = false;
					elements.hastaser.visible = false;
					elements.desdenup.visible = true;
					elements.hastanup.visible = true;
					elements.lbldesdefechafactura.visible = true;
					elements.DesdeFecha.visible = true;
					elements.lblhastafechafactura.visible = true;
					elements.HastaFecha.visible = true;
					DesdeEje = utils.stringRight(new Date().getFullYear().toString(),2)// null;
					HastaEje = utils.stringRight(new Date().getFullYear().toString(),2)//null;
					DesdeSer = 'P'//null;
					HastaSer = 'P'//null;
					DesdeNup = null;
					HastaNup = null;
					fechdes = new Date()
					fechdes.setMonth(0,1)
					fechdes.getFullYear().toString().substr(2,2);
					fechdes = utils.dateFormat(fechdes,'dd-MM-yyyy')
					DesdeFecha = utils.parseDate(fechdes,'dd-MM-yyyy')
					HastaFecha = null
					break;
		    case 5: 			    
				    elements.Criterios.visible = true;
		    		elements.Criteriosc.visible = false;
					elements.lbltitulo.visible = true;
					elements.lbltitulo.text = 'Código Delegación';
					elements.lbldesdecuenta.visible = true;
					elements.lblhastacuenta.visible = true;
					elements.DesdeCodigo.visible = true;
					elements.HastaCodigo.visible = true;
					globals.GCDesdeCodigo = null;
					globals.GCHastaCodigo = null;
					elements.lblfacturas.visible = false;
					elements.lbldesdefactura.visible = false;
					elements.lblhastafactura.visible = false;
					elements.desdeeje.visible = false;
					elements.hastaeje.visible = false;
					elements.desdeser.visible = false;
					elements.hastaser.visible = false;
					elements.desdeserc.visible = false;
					elements.hastaserc.visible = false;
					elements.desdenup.visible = false;
					elements.hastanup.visible = false;
					elements.lbldesdefechafactura.visible = false;
					elements.DesdeFecha.visible = false;
					elements.lblhastafechafactura.visible = false;
					elements.HastaFecha.visible = false;
					DesdeEje = null;
					HastaEje = null;
					DesdeSer = null;
					HastaSer = null;
					DesdeNup = null;
					HastaNup = null;
					DesdeFecha = null;
					HastaFecha = null;
					break;
		    case 6: 			    
				    elements.Criterios.visible = true;
		    		elements.Criteriosc.visible = false;
					elements.lbltitulo.visible = true;
					elements.lbltitulo.text = 'Código Cta Banco';
					elements.lbldesdecuenta.visible = true;
					elements.lblhastacuenta.visible = true;
					elements.DesdeCodigo.visible = true;
					elements.HastaCodigo.visible = true;
					globals.GCDesdeCodigo = null;
					globals.GCHastaCodigo = null;
					elements.lblfacturas.visible = false;
					elements.lbldesdefactura.visible = false;
					elements.lblhastafactura.visible = false;
					elements.desdeeje.visible = false;
					elements.hastaeje.visible = false;
					elements.desdeser.visible = false;
					elements.hastaser.visible = false;
					elements.desdeserc.visible = false;
					elements.hastaserc.visible = false;
					elements.desdenup.visible = false;
					elements.hastanup.visible = false;
					elements.lbldesdefechafactura.visible = false;
					elements.DesdeFecha.visible = false;
					elements.lblhastafechafactura.visible = false;
					elements.HastaFecha.visible = false;
					DesdeEje = null;
					HastaEje = null;
					DesdeSer = null;
					HastaSer = null;
					DesdeNup = null;
					HastaNup = null;
					DesdeFecha = null;
					HastaFecha = null;
					break;
		    case 7: 			    
				    elements.Criterios.visible = true;
		    		elements.Criteriosc.visible = false;
					elements.lbltitulo.visible = true;
					elements.lbltitulo.text = 'Código Comisionista';
					elements.lbldesdecuenta.visible = true;
					elements.lblhastacuenta.visible = true;
					elements.DesdeCodigo.visible = true;
					elements.HastaCodigo.visible = true;
					globals.GCDesdeCodigo = null;
					globals.GCHastaCodigo = null;
					elements.lblfacturas.visible = false;
					elements.lbldesdefactura.visible = false;
					elements.lblhastafactura.visible = false;
					elements.desdeeje.visible = false;
					elements.hastaeje.visible = false;
					elements.desdeser.visible = false;
					elements.hastaser.visible = false;
					elements.desdeserc.visible = false;
					elements.hastaserc.visible = false;
					elements.desdenup.visible = false;
					elements.hastanup.visible = false;
					elements.lbldesdefechafactura.visible = false;
					elements.DesdeFecha.visible = false;
					elements.lblhastafechafactura.visible = false;
					elements.HastaFecha.visible = false;
					DesdeEje = null;
					HastaEje = null;
					DesdeSer = null;
					HastaSer = null;
					DesdeNup = null;
					HastaNup = null;
					DesdeFecha = null;
					HastaFecha = null;
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
 * @properties={typeid:24,uuid:"7F8DA335-BE25-4CD7-9AE9-1A7592F09E80"}
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
 * @properties={typeid:24,uuid:"BA50FFA2-D05E-4354-B798-72CF7A4AAE39"}
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
 * @properties={typeid:24,uuid:"35F59A82-2F97-48C3-95A5-42A34BD08CF3"}
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
 * @properties={typeid:24,uuid:"A7D61D9D-3522-4AB3-B9C5-7C4B1AA57317"}
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
 * @properties={typeid:24,uuid:"B77018DF-7693-4CB5-9BA0-8964A37D857B"}
 */
function onActionhastaser(event) {
	// TODO Auto-generated method stub
	elements.hastanup.requestFocus()
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"8723CBD3-F587-4614-9597-67ABC24E8F44"}
 */
function onDataChangedfecha() {
	if(DesdeFecha){
		var a = DesdeFecha.getFullYear().toString().substr(2,2);
		DesdeEje = utils.stringToNumber(a)
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"52C05ECF-6AC9-46E8-971C-DBA3D01EE79A"}
 */
function onDataChangehfecha() {
	if(HastaFecha){
		var a = HastaFecha.getFullYear().toString().substr(2,2);
		HastaEje = utils.stringToNumber(a)
	}
}
