/**
*
 * @properties={typeid:24,uuid:"C19C600A-5160-4DF1-A265-3283AA4A7C7B"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Exportar Datos TBAI').hide();
	globals.GCenableBgElements();
	
}

/**
 * 
 * @param {JSEvent} event the event that triggered the action
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"1AA0559A-97D3-432B-98A3-965ECB6BBCB3"}
 * @AllowToRunInFind
 */
function btn_ok(event)
{
	//set a global to the text of the button pressed
	var deje = forms.dlg_ExportarDatosTBAI.DesdeEje;
	if(!deje) deje = 1;
	var heje = forms.dlg_ExportarDatosTBAI.HastaEje;
	if(!heje) heje = 999999;
	var dnup = forms.dlg_ExportarDatosTBAI.DesdeNup;
	if(!dnup) dnup = 1;
	var hnup = forms.dlg_ExportarDatosTBAI.HastaNup;
	if(!hnup) dnup = 999999;
	var dser = forms.dlg_ExportarDatosTBAI.DesdeSer;
	var hser = forms.dlg_ExportarDatosTBAI.HastaSer;
	application.getWindow('Exportar Datos TBAI').hide();
	globals.GCenableBgElements();
	
	var query = "SELECT tbFacturaCabecera.eje_cfa,tbFacturaCabecera.nup_cfa,tbFacturaCabecera.mac,tbFacturaCabecera.ctbai,"+
	"tbFacturaCabecera.cQR,tbFacturaCabecera.fechaenviofichero,tbFacturaCabecera.firmafactura "+
	"FROM tbFacturaCabecera tbFacturaCabecera "+
	"WHERE tbFacturaCabecera.cQR IS NOT NULL AND tbFacturaCabecera.fechaenviofichero < GETDATE() "+
	"AND (tbFacturaCabecera.eje_cfa between "+deje+" AND "+heje+") "+
	"AND (tbFacturaCabecera.ser_cfa between '"+dser+"' AND  '"+hser+"') "+
	"AND (tbFacturaCabecera.nup_cfa between "+dnup+" AND "+hnup+") "+
	" ORDER BY tbFacturaCabecera.fechaenviofichero ASC";
	var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 999999);
	
	var rows = ds.getMaxRowIndex();
	if(rows > 0)
	{
		/*if(application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT && application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT)
		{
			// Get the dataset by quering to database
			var CD = ';';
			var str = ds.getAsText(CD, '\n', '', true);
			var js = plugins.file.showFileSaveDialog('TBAI_'+dnup+'_'+hnup+'.csv', 'Selecciona localización para salvar el fichero a exportar');
			if (!js) return;
			  
			// Write the file in the selected location
			plugins.file.writeTXTFile(js, str);
		}
		else
		{*/
			var nom = 'TBAI_'+dnup+'_'+hnup+'.csv';
			
			var serverURL = application.getServerURL() 
			var CD = ';'
			var str = ds.getAsText(CD, '\n', '', true);				
			var js = serverURL + "\\uploads\\" + nom
			plugins.file.writeTXTFile(js, str);
							
		//}
	}
	else
	{
		globals.GCshowErrorDialog('No hay datos de TBAI con el filtro de facturas introducidos.',null,'Aceptar',null,null,null)
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"48CC14D9-7D8D-4C9C-B731-8633595B0D8D"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 *
 * @properties={typeid:24,uuid:"AA0DC8C8-11D6-4A47-942E-A0874EA49FA8"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	btn_cancel()
	return true
}
