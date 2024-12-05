/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"48485FB8-F48D-4E98-90B0-3741EB32A21D",variableType:4}
 */
var Detalles = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"DBBA992B-9D72-4F4D-BA4B-23FB3E75AD0B"}
 */
var HastaAgente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C3FE5165-EFBA-4E22-A5BA-FA5B0EDC51E0"}
 */
var DesdeAgente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"198225FB-B7DF-4C50-AB94-6F7982371786",variableType:93}
 */
var HastaFecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3E6B01DA-924A-4B26-B7DB-7E00BCEABB31",variableType:93}
 */
var DesdeFecha = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"40377AE6-9200-4743-96D2-3451AD6F7DEC"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"7A81A7F5-9677-459B-B45F-8756A47CEE45"}
 * @SuppressWarnings(deprecated)
 * @SuppressWarnings(wrongparameters)
 */
function onShow() {
	// TODO Auto-generated method stub
	var fechdes = new Date()
	fechdes.setMonth(0,1)
	fechdes = utils.dateFormat(fechdes,'dd-MM-yyyy')
	DesdeFecha = utils.parseDate(fechdes,'dd-MM-yyyy')
	HastaFecha = null
	DesdeAgente = null
	HastaAgente = null
	Detalles = null;
	
	elements.Cliente.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"1E9730D3-5DCF-4CD7-9937-2397B765AC7E"}
 */
function onActiondesdeFecha() {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F749B7C-D5E3-470C-9107-E70917DB228D"}
 */
function onActiondesdecliente(event) {
	// TODO Auto-generated method stub
	elements.Clientec.requestFocus()
	elements.Clientec.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"A0C1DE18-87CF-4E0F-A5A1-83C1CB3BEE4F"}
 */
function onActionhastacliente(event) {
	// TODO Auto-generated method stub
	elements.DesdeFecha.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"755471B1-6D18-4503-8490-B48C1FD91F19"}
 */
function BtnDesdeCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_InformeComisionGC1';
	//globals.GCshowDialogAgentes('Comisionistas', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialogAgentes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialogAgentes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Representantes';
	//win.resizable = true;
	//win.show(forms.dialog_AgentesGC)
	win.show(forms.dlgAgentesGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"20ED847C-1ED3-499B-A963-70418B00A99B"}
 */
function BtnHastaCliente(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_InformeComisionGC2';
	//globals.GCshowDialogAgentes('Clientes', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('dialogAgentes')
	if(win != null) win.destroy();
	 
	win = application.createWindow("dialogAgentes", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Representantes';
	//win.resizable = true;
	//win.show(forms.dialog_AgentesGC)
	win.show(forms.dlgAgentesGC)
}
