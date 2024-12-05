/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C0E7FC0B-A010-4594-BB0E-4F251A81450F"}
 */
var htmlString = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A97300C3-6609-4757-9DB1-FB7186AF02C2"}
 */
var uuid = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"54F975F7-809E-4B7D-B048-CB1AEBF767EC"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"7FF7C3EF-06A4-4187-A5D4-06E59858CC23"}
 */
function onShow() {
	// TODO Auto-generated method stub	
	controller.recreateUI();
	application.updateUI();
}
