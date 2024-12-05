/**
 * @properties={typeid:24,uuid:"273B084A-AB9D-4398-A062-F2E20C8EF554"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Consulta Albaran').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"E161E291-5CE1-4E36-8E57-C1154BBB87A4"}
 * @SuppressWarnings(wrongparameters)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	
		//application.getWindow('Consulta Albaran').hide();
		//globals.GCenableBgElements();
		var DALB = forms.dlg_Consulta_AlbaranGC.DesdeAlbaran
		if(DALB == null || DALB == '') DALB = 0
		var HALB = forms.dlg_Consulta_AlbaranGC.HastaAlbaran
		if(HALB == null || HALB == '') HALB = 999999999
		var DCLI = forms.dlg_Consulta_AlbaranGC.DesdeCliente
		if(DCLI == null || DCLI == '') DCLI = 1
		var HCLI = forms.dlg_Consulta_AlbaranGC.HastaCliente
		if(HCLI == null || HCLI == '') HCLI = 999999999
		var DREFCLI = forms.dlg_Consulta_AlbaranGC.DesdeRefCliente
		if(DREFCLI == null || DREFCLI == '') DREFCLI = ''
		var HREFCLI = forms.dlg_Consulta_AlbaranGC.HastaRefCliente
		if(HREFCLI == null || HREFCLI == '') HREFCLI = 'ZZZZZZZZ'
		var DFECH = utils.dateFormat(forms.dlg_Consulta_AlbaranGC.DesdeFecha,'dd-MM-yyyy')
		if(DFECH == null || DFECH == '') DFECH = '01-01-1970'
		var HFECH = utils.dateFormat(forms.dlg_Consulta_AlbaranGC.HastaFecha,'dd-MM-yyyy') + ' 23:59:59'
		if(HFECH == null || HFECH == '') HFECH = '31-12-2999'
		var	CRIT = forms.dlg_Consulta_AlbaranGC.Criterios
		if(CRIT == 0) var Orden = 'calbaran.cod_cal'				
		else if(CRIT == 1) Orden = 'calbaran.nomcl_cal'	
		else if(CRIT == 2) Orden = 'calbaran.rcli_cal'			
		else if(CRIT == 3) Orden = 'calbaran.fecha_cal'			
		var	SITUALB = forms.dlg_Consulta_AlbaranGC.SituacionAlbaran
		if(SITUALB == null) var Situacion = " calbaran.situ_cal IS NULL OR calbaran.situ_cal = '' OR calbaran.situ_cal = 'F'"				
		else if(SITUALB == 'F') Situacion = " calbaran.situ_cal = 'F'"	
		else if(SITUALB == 'P') Situacion = " calbaran.situ_cal IS NULL"			
		
		
		
		
		
		globals.btn_runJasperReportConsultaAlbaran(DCLI,HCLI,DALB,HALB,DFECH,HFECH,Situacion,DREFCLI,HREFCLI,Orden)
	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9C90FE41-3425-48F1-96F1-78D85EAF38D7"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E2D52A23-4196-4DD9-875E-2826C1F3AA23"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
