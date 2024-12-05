/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DB0BED35-E11C-4CC9-89A7-0A20ED0A74D1",variableType:4}
 */
var Descuento = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"96C15AF5-FCE9-4E3C-AA6E-C9D23F870722"}
 */
var Familia = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2084CF8A-8A0B-4ABD-ACA6-9BC52726972B"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"7AF41A64-1B19-4672-AA7C-234FABAA90A0"}
 */
function onShow() {
	// TODO Auto-generated method stub	
	Familia = null
	Descuento = 0	
	elements.Descuento.requestFocus()
	elements.Descuento.selectAll()
}
