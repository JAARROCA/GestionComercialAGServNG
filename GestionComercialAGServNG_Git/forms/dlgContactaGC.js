/**
 * @type {String}
 *
 *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"8AD956C0-83EB-4E16-9DE8-0C7C8BE71165"}
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
 * @properties={typeid:35,uuid:"28949F24-3FAC-412F-A113-2B9694519955"}
 */
var AvisoLegal = "<a href='https://agissa.com/sobre-nosotros/aviso-legal/' target='_blank'>Aviso Legal</a>";

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"856C3F16-E5A9-4251-8C47-56EF6DD1199C"}
 */
function btnweb(event) {
	// TODO Auto-generated method stub
	application.showURL( 'https://agissa.com/contacta/','_blank');
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F6961A63-1774-4234-860F-EB346FD68883"}
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
