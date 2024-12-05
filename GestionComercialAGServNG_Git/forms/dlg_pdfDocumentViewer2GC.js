/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"B61BBBB6-73E1-4703-BD88-9E9AF8763DD6"}
 */
var htmlString = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"B3CD264B-0DAB-41FE-8F95-0427171AD9D3"}
 */
var uuid = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AF8258C9-B578-4005-BEC0-35500B099D0A"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"BC72E781-F368-4A06-9374-01E2FF91E970"}
 */
function onShow() {
	// TODO Auto-generated method stub	
	controller.recreateUI();
	application.updateUI();
}
