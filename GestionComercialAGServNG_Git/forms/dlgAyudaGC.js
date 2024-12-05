/**
 * @type {String}
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"224E305D-7905-4204-9113-245B1B4A3983"}
 */
var Politica = "<a href='https://agissa.com/politica-privacidad/' target='_blank'>Política de Privacidad</a>";

/**
 * @type {String}
 *
 *
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"25DA7310-0070-41F6-95C5-831FAA6E0BBF"}
 */
var AvisoLegal = "<a href='https://agissa.com/sobre-nosotros/aviso-legal/' target='_blank'>Aviso Legal</a>";

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CED21265-B636-4C55-A857-0D26EC66DB93"}
 */
function btnweb(event) {
	// TODO Auto-generated method stub
	application.showURL( 'https://'+elements.web.text,'_blank');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"BAB86230-1945-4A99-B553-AE811F94A84A"}
 */
function btnsoporte(event) {
	// TODO Auto-generated method stub
	application.showURL( /*'https://get.teamviewer.com/a4adp4q'*/'https://agissa.com/Supremo_ag.exe','_blank');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5C319561-E433-4989-BA25-0016DE523664"}
 */
function btnmail(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlgAyuda'
	globals.GCshowDialogEnvioMail('Envio EMail',1,null,null,null,null,null,null,null,null)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"6DC66ECE-62CB-4157-AE3F-198D48933782"}
 */
function onShow(firstShow, event) {
	if(application.getApplicationType() != APPLICATION_TYPES.SMART_CLIENT)
	{
		elements.lblavisolegal.visible = true;
		elements.lblpolitica.visible = true;		
		elements.lblavisolegal.enabled = true;
		elements.lblpolitica.enabled = true;		
		//elements.btn_OnlineDemo.visible = true;
	}
	else
	{
		elements.lblavisolegal.visible = false;
		elements.lblpolitica.visible = false;		
		elements.lblavisolegal.enabled = false;
		elements.lblpolitica.enabled = false;		
		//elements.btn_OnlineDemo.visible = false;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"9AB032C2-D350-4794-B95C-BAC0F3E26D43"}
 */
function btnverifactudeclaracionresponsable(event) {
	// TODO Auto-generated method stub
	application.showURL('https://agissa.com/documents/Declaracion_medidas_antifraude_Con_firma_digital.pdf','_blank');
}
