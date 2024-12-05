/**
 * Auto Logout Custom Properties. Modify accordingly
 * 
 * @enum 
 * 
 *
 * @properties={typeid:35,uuid:"703857BF-EFB0-4A97-B75A-318B73C89E24",variableType:-4}
 */
var AUTO_LOGOUT_CUSTOM_PROPERTIES = {
	
	IDLE_TIME_TO_TRIGGER_LOGOUT_IN_SECONDS	: 300,								// The time in Seconds for logout. After this time the logout dialog will appear. Logout to apply this effect.
	WARNING_DURATION_IN_SECONDS				: 30,								// After this much second the system will logout automatically. Logout to apply this effect.
	HEADER_MSG 								: 'Sesión Expirando',
	BODY_MESSAGE 							: 'La sesión está a punto de caducar debido a una larga inactividad.\n \
												Por favor, haga clic en Continuar para permanecer en la sesión.',
	WIDTH 									: 500,
	HEIGHT 									: 250
};

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3DDBF711-724E-472E-A6D0-173D8DFA61F4",variableType:8}
 */
var allowReinitialize = 1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"70DE89F9-608B-4886-8188-ACCD3AD8FD70"}
 */
var var_progressbar = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1F0C63FB-DA8D-4655-8833-3EA139B04B04"}
 */
var var_progressbar_message = AUTO_LOGOUT_CUSTOM_PROPERTIES.BODY_MESSAGE;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"6C159DBD-53DF-4E8A-A051-48713FC8BC11",variableType:8}
 */
var progressbar_value = AUTO_LOGOUT_CUSTOM_PROPERTIES.WARNING_DURATION_IN_SECONDS;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"19385ACB-3CE3-4B54-9AD5-084F488290C2"}
 */
var t = '';

/**
 * @properties={typeid:35,uuid:"9B6B8CC6-3391-4EE9-81CB-B38DC34258F0",variableType:-4}
 */
var continueLoop = true;

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"8C559376-B715-4068-8BDE-C580ACCCC84F"}
 */
var progressbar_value_text = '';

/**
 * @return {Boolean}
 * @properties={typeid:24,uuid:"F80A7C2B-F2E9-491C-A361-52FFD867635D"}
 */
function continueCurrentSession(){
	plugins.scheduler.removeJob('inseconds');
	application.getWindow('auto_logout_warn_dialog_NGGC').hide();
	//plugins.window.cancelFormPopup();
	if(allowReinitialize==0) {
		return true;
		} 
		//plugins.WebClientUtils.executeClientSideJS(scopes.autologout.js);
		return false
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"88FBF03E-B3FA-4338-BE23-48018C7D229F"}
 */
function onShow(firstShow, event) {
	//plugins.WebClientUtils.addJsReference("media:///bootstrap.min.js");
	var jobs = new Array()
	jobs = plugins.scheduler.getCurrentJobNames();
	if(jobs.includes('inseconds')) plugins.scheduler.removeJob('inseconds');
	
	allowReinitialize=1;
	var_progressbar = AUTO_LOGOUT_CUSTOM_PROPERTIES.BODY_MESSAGE;
	progressbar_value = AUTO_LOGOUT_CUSTOM_PROPERTIES.WARNING_DURATION_IN_SECONDS;
	progressbar_value_text = progressbar_value + ' segundos para cerrar la sesión';
	elements.progressbar_autologout.type = 'warning';
	elements.progressbar_autologout.styleClass = 'progress-bar-orange';
	elements.progressbar_autologout.value = progressbar_value;
	elements.progressbar_autologout.valueText = progressbar_value_text;
	/*while(progressbar_value > 0) {		
		updateProgressBar(event, progressbar_value)
	}*/
	
	var startDate = new Date();
	startDate.setTime(startDate.getTime());
	var endDate = new Date(startDate.getTime()+100000);
	plugins.scheduler.addJob('inseconds',startDate,setinterval,1000,AUTO_LOGOUT_CUSTOM_PROPERTIES.WARNING_DURATION_IN_SECONDS,endDate)
	
}

/**
 * @properties={typeid:24,uuid:"27EC0330-A815-4690-A08E-2E129CAB3CBE"}
 */
function continueSession(){
	plugins.scheduler.removeJob('inseconds');
	progressbar_value = 0;
	allowReinitialize=1;
	//plugins.window.cancelFormPopup();
	application.getWindow('auto_logout_warn_dialog_NGGC').hide();
}

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"243F357E-1D5B-4637-8F31-E20A8EA4B4AA"}
 */
function logoutSession(event){
	plugins.scheduler.removeJob('inseconds');
	allowReinitialize=0;
	//plugins.window.cancelFormPopup();
	application.getWindow('auto_logout_warn_dialog_NGGC').hide();
	logoutMethod(event);
}

/**
 * This is the custom Logout Method. Need to call your logout method from here
 * This method is used by the Auto logout system to logout the user
 * 
 * @author pradipta
 * @since 5/13/2015
 * @param {JSEvent} event the event that triggered the action
 *
 * 
 *
 *
 * @properties={typeid:24,uuid:"E1BC72E3-22CB-4C24-B4C8-44301404BFAA"}
 */
function logoutMethod(event) {
	
	// Logout
	//application.exit()
	security.logout('GestionComercialAGServNG');
	//scopes.globals.btn_SalirConta(event)
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} currenttime
 * @param event
 *
 * @properties={typeid:24,uuid:"13D4D133-352D-4943-BAC0-11730774182B"}
 */
function updateProgressBar(event, currenttime) {
	setinterval(event)
	
}

/**
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"12AF32AD-DC17-4D70-93B7-205DC8DC1C81"}
 */
function setinterval(event) {
	/*if (!document.getElementById("autologoutprogressbar")) {
		clearInterval(m);
		m = null;
		return;
	}*/
	
	if (progressbar_value > 0) {
		progressbar_value -= 1;
		if(progressbar_value >= 10) {
			elements.progressbar_autologout.type = 'warning';	
			elements.progressbar_autologout.styleClass = 'progress-bar-orange';			
		}
		else {
			elements.progressbar_autologout.type = 'danger';	
			elements.progressbar_autologout.styleClass = 'progress-bar-red';			
		}
		
		 /*document.getElementById("autologoutprogressbar").setAttribute("style", 
		 			"width:" + ((100/AUTO_LOGOUT_CUSTOM_PROPERTIES.WARNING_DURATION_IN_SECONDS) * 
		 					(AUTO_LOGOUT_CUSTOM_PROPERTIES.WARNING_DURATION_IN_SECONDS-progressbar_value)) +"%;height:100%;");
		*/
		if(progressbar_value > 0) progressbar_value_text = progressbar_value + ' segundos para cerrar la sesión';
		elements.progressbar_autologout.value = ((100/AUTO_LOGOUT_CUSTOM_PROPERTIES.WARNING_DURATION_IN_SECONDS) * 
			(AUTO_LOGOUT_CUSTOM_PROPERTIES.WARNING_DURATION_IN_SECONDS-progressbar_value));
		elements.progressbar_autologout.valueText = progressbar_value_text;
		application.updateUI()
	} else {		
		// Logout
		logoutSession(event)
	}

}

/**
 *
 *
 * @properties={typeid:24,uuid:"34B1E6E2-A55C-4584-BD35-852564FF679B"}
 */
function resetTimer() {
	
	if(continueLoop == true) {
		//clearTimeout(t);
		//t = setTimeout(logout, durationInMiliseconds);			  	// Time is in milliseconds
	}
}
