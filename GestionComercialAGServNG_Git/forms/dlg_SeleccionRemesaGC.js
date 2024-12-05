/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6C284B7A-BBA2-49D6-A8F3-40068A599141"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
}

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"3343DDCF-34EC-4291-B239-BE858C6036FE"}
 */
function onShow() {
	// TODO Auto-generated method stub
	gcborradocobrospagosimpresion.loadAllRecords()
	gcborradocobrospagosimpresion.deleteAllRecords()
	/*var query = "DELETE FROM [CCobrosPagosImpresion] "+
	"WHERE [Usuario] ="+globals.login_usuario+" AND [IdEjercicio] = '"+globals.Empresa+"'";

	var done = plugins.rawSQL.executeSQL(globals.conex,"CCobrosPagosImpresion",query)
	if (done)
	{
	//flush is required when changes are made in db
	plugins.rawSQL.flushAllClientsCache(globals.conex,"CCobrosPagosImpresion")				
	
	}
	else
	{
	var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
	plugins.dialogs.showErrorDialog('Error',  'SQL exception: '+msg,  'Ok')
	}*/
	globals.FechaVtoSel = null
	globals.NFacturaSel = null
	globals.ImporteSel = null
	globals.ImporteAcumSel = null
	globals.FPSel = null
	globals.CuentaSel = null
	globals.DescCuentaSel = null
	globals.DocuSel = null
	globals.ConceptoSel = null
	
	if(!globals.GCisEditing()) globals.GCstartEditing()
	forms.dialogSeleccionRemesaGC.elements.btn_ok.enabled = false;
	forms.dialogSeleccionRemesaGC.elements.btn_okc.enabled = false;
	forms.dialogSeleccionRemesaGC.elements.btn_contabilizacion.enabled = false;
	forms.dialogSeleccionRemesaGC.elements.btn_generar.enabled = true;
	forms.lst_EfectosPendientes2GC.elements.Situacion.enabled = true;
}
