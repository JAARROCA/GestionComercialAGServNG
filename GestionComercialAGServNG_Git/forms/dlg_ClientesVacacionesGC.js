/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B293F04E-B974-4FE6-B472-8B12229ECFB7"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"F4C3CE9B-6939-417A-A0F8-5A0D6B741F78"}
 */
function onShow() {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"A7065F5F-7122-4CFD-8217-8BDF69E17920"}
 */
function onActionnombre(event) {
	// TODO Auto-generated method stub
	elements.cif.requestFocus()
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38C267D9-21C2-4D92-95E9-3679E6395F3C"}
 */
function onActioncif(event) {
	// TODO Auto-generated method stub
	elements.razonsocial.requestFocus()
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"422BECE4-7011-456D-AF45-D095880C98C9"}
 */
function onActionrazonsocial(event) {
	// TODO Auto-generated method stub
	elements.direccionfiscal.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7474086C-87CA-40E8-AFBE-4067D35D26B0"}
 */
function onActiondireccionfiscal(event) {
	// TODO Auto-generated method stub
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"ACDF4788-D895-4D7D-8524-A4313B64C652"}
 */
function sub_setNewNumeroLinea()
{
	var query = "select [nperiodo] from [tbMaestroClientesVacaciones] where [idcliente] = " + idcliente + 
	" order by nperiodo desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	nperiodo = dataset.getValue(1, 1) + 1	
}

/**
 *
 * @properties={typeid:24,uuid:"3C31FE12-4961-4B88-AB37-CC50D7660205"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	sub_setNewNumeroLinea();	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"8CF75C2B-F306-4E7C-A776-C64ACEE0F76A"}
 */
function onDataChangefechapago() {
	// TODO Auto-generated method stub
	
		var clidiapago1 = gctbmaestroclientesvacaciones_to_tbmaestroclientes.diapago1;
		var clidiapago2 = gctbmaestroclientesvacaciones_to_tbmaestroclientes.diapago2;
		var clidiapago3 = gctbmaestroclientesvacaciones_to_tbmaestroclientes.diapago3;
		var diafechcobro = fechapagos.getDate();
		if(clidiapago1 != null && clidiapago1 != '')
		{
			if(diafechcobro != clidiapago1 && diafechcobro != clidiapago2 && diafechcobro != clidiapago3)
			{
				var d = clidiapago1;
				if(clidiapago2 != null && clidiapago2 != '')
				{
					d = d+' y el '+clidiapago2;
				}
				if(clidiapago3 != null && clidiapago3 != '')
				{
					d = d+' y el '+clidiapago3;
				}
				d = d+'. Cambie la fecha de cobro.'
				globals.GCshowInfoDialog('El cliente tiene días de pago el '+d, null, null, null, null, null)
				return
			}
		}
	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 * @properties={typeid:24,uuid:"258F22CA-BFC3-42BB-9CA3-E3310942805D"}
 */
function onDataChangefechafin() {
	if(fechainicio && !fechafin || fechafin < fechainicio)	fechafin = fechainicio;
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"BF25D18B-C08C-49D8-8F9E-45CBC62BEAE8"}
 */
function onDataChangefechainicio() {
	if(fechainicio && !fechafin || fechafin < fechainicio)	fechafin = fechainicio;
	
}
