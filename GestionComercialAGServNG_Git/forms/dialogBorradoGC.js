/**
 *
 * @properties={typeid:24,uuid:"BF819109-E080-4BCB-A6C4-7C8C2AFC2019"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Borrado Datos').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"C4E52A92-6522-4AD5-B302-8E8E3290A7E0"}
 * @SuppressWarnings(unused)
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	switch(globals.GCTipoConsulta){
		case 0:
			BorrarPresupuestos()
			break;
		case 1:
			BorrarAlbaranes()
			break;
		case 2:
			BorrarFacturas()
			break;		
		default: break;
		
	}
	application.getWindow('Borrado Datos').hide();
	globals.GCenableBgElements();	
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"397E593E-99D2-431C-8E35-71FCC49F747C"}
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
 * @properties={typeid:24,uuid:"2BC34CA3-5640-4E21-8770-A0B315CC7ED1"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Borrado Datos').hide();
	globals.GCenableBgElements();
	return true
}

/**
*
* @SuppressWarnings(unused)
*
 * @properties={typeid:24,uuid:"F1A74972-7AEE-40F6-A6D7-C3E904229E26"}
 * @SuppressWarnings(deprecated)
 */
function BorrarPresupuestos()
{
	var DC = globals.GCDesdeCodigo
	if(DC == null || DC == '') DC = '1';
	var HC = globals.GCHastaCodigo
	if(HC == null || HC == '') HC = '99999999';
	var DFECH = forms.dlg_BorradoGC.DesdeFecha
	if(DFECH == null || DFECH == '') DFECH = '01-01-1970';
	else  DFECH = utils.dateFormat(forms.dlg_BorradoGC.DesdeFecha,'dd-MM-yyyy');
	var HFECH = forms.dlg_BorradoGC.HastaFecha
	if(HFECH == null || HFECH == '') HFECH = utils.dateFormat(new Date(),'dd-MM-yyyy');
	else  HFECH = utils.dateFormat(forms.dlg_BorradoGC.HastaFecha,'dd-MM-yyyy');
	var DN = forms.dlg_BorradoGC.DesdeN;
	if(DN == null || DN == '') DN = 0;
	var HN = globals.GCHastaCodigo
	if(HN == null || HN == '') HN = 99999999;
	
	var query = "SELECT cod_cof FROM [dbo].[cofertas] "+
				"WHERE (clie_cof between "+DC+" and "+HC+") and "+
				"(cod_cof between "+DN+" and "+HN+") and "+
				"(fecha_cof between '"+DFECH+"' and '"+HFECH+"') "+
				"order by cod_cof";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999999)
    var rows = dataset.getMaxRowIndex();
	
	for(var i=1;i<=rows;i++)
	{
		var presup = dataset.getValue(i,1)
		// Get the dataset by quering to database
		query = "DELETE FROM [dbo].[cofertas] "+
					"WHERE cod_cof = "+presup;
		
	
		var done = plugins.rawSQL.executeSQL(globals.GCconex,"cofertas",query)
		if (done)
		{
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache(globals.GCconex,"cofertas")			
		}
		else
		{
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('SQLException '+msg,'¡Error!')
			else globals.GCshowErrorDialog('SQLException '+msg, null, null, null, null, null)
		}
		
		query = "DELETE FROM [dbo].[lofertas] "+
				"WHERE nup_lof = "+presup;


		done = plugins.rawSQL.executeSQL(globals.GCconex,"lofertas",query)
		if (done)
		{
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache(globals.GCconex,"lofertas")			
		}
		else
		{
			msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('SQLException '+msg,'¡Error!')
			else globals.GCshowErrorDialog('SQLException '+msg, null, null, null, null, null)
		}
	}
}

/**
*
* @SuppressWarnings(unused)
*
 *
 * @properties={typeid:24,uuid:"55CA3F91-85D5-4045-8F83-557379CD316F"}
 * @SuppressWarnings(deprecated)
 */
function BorrarAlbaranes()
{
	var DC = globals.GCDesdeCodigo
	if(DC == null || DC == '') DC = '1';
	var HC = globals.GCHastaCodigo
	if(HC == null || HC == '') HC = '99999999';
	var DFECH = forms.dlg_BorradoGC.DesdeFecha
	if(DFECH == null || DFECH == '') DFECH = '01-01-1970';
	else  DFECH = utils.dateFormat(forms.dlg_BorradoGC.DesdeFecha,'dd-MM-yyyy');
	var HFECH = forms.dlg_BorradoGC.HastaFecha
	if(HFECH == null || HFECH == '') HFECH = utils.dateFormat(new Date(),'dd-MM-yyyy');
	else  HFECH = utils.dateFormat(forms.dlg_BorradoGC.HastaFecha,'dd-MM-yyyy');
	var DN = forms.dlg_BorradoGC.DesdeN;
	if(DN == null || DN == '') DN = 0;
	var HN = globals.GCHastaCodigo
	if(HN == null || HN == '') HN = 99999999;
	
	var query = "SELECT cod_cal FROM [dbo].[calbaran] "+
				"WHERE (clie_cal between "+DC+" and "+HC+") and "+
				"(cod_cal between "+DN+" and "+HN+") and "+
				"(fecha_cal between '"+DFECH+"' and '"+HFECH+"') "+
				"order by cod_cal";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999999)
    var rows = dataset.getMaxRowIndex();
	
	for(var i=1;i<=rows;i++)
	{
		var alb = dataset.getValue(i,1)
		// Get the dataset by quering to database
		query = "DELETE FROM [dbo].[calbaran] "+
					"WHERE cod_cal = "+alb;
		
	
		var done = plugins.rawSQL.executeSQL(globals.GCconex,"calbaran",query)
		if (done)
		{
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache(globals.GCconex,"calbaran")			
		}
		else
		{
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('SQLException '+msg,'¡Error!')
			else globals.GCshowErrorDialog('SQLException '+msg, null, null, null, null, null)
		}
		
		query = "DELETE FROM [dbo].[lalbaran] "+
				"WHERE nup_lal = "+alb;


		done = plugins.rawSQL.executeSQL(globals.GCconex,"lalbaran",query)
		if (done)
		{
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache(globals.GCconex,"lalbaran")			
		}
		else
		{
			msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('SQLException '+msg,'¡Error!')
			else globals.GCshowErrorDialog('SQLException '+msg, null, null, null, null, null)
		}
	}
}

/**
*
* @SuppressWarnings(unused)
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"31BD0CC4-3568-4387-912F-3DC11B07F7DB"}
 * @SuppressWarnings(deprecated)
 */
function BorrarFacturas()
{
	var desdeeje = forms.dlg_BorradoGC.DesdeEje
	if(desdeeje == null || desdeeje == '') desdeeje = 0
	var desdeser = forms.dlg_BorradoGC.DesdeSer
	if(desdeser == null || desdeser == '') desdeser = '';
	var desdenup = forms.dlg_BorradoGC.DesdeNup
	if(desdenup == null || desdenup == '') desdenup = 1
	var hastaeje = forms.dlg_BorradoGC.HastaEje
	if(hastaeje == null || hastaeje == '') hastaeje = 9999
	var hastaser = forms.dlg_BorradoGC.HastaSer
	if(hastaser == null || hastaser == '') hastaser = 'ZZ';
	var hastanup = forms.dlg_BorradoGC.HastaNup
	if(hastanup == null || hastanup == '') hastanup = 999999
	var desdecli = globals.GCDesdeCodigo
	if(desdecli == null || desdecli == '') desdecli = 1
	var hastacli = globals.GCHastaCodigo
	if(hastacli == null || hastacli == '') hastacli = 999999
	var DFECH = forms.dlg_BorradoGC.DesdeFecha
	if(DFECH == null || DFECH == '') DFECH = '01-01-1970';
	else  DFECH = utils.dateFormat(forms.dlg_BorradoGC.DesdeFecha,'dd-MM-yyyy');
	var HFECH = forms.dlg_BorradoGC.HastaFecha
	if(HFECH == null || HFECH == '') HFECH = utils.dateFormat(new Date(),'dd-MM-yyyy');
	else  HFECH = utils.dateFormat(forms.dlg_BorradoGC.HastaFecha,'dd-MM-yyyy');
	// Get the dataset by quering to database
	var query = "SELECT ID,eje_cfa,ser_cfa,nup_cfa FROM [tbFacturaCabecera] WHERE ([eje_cfa] BETWEEN "+desdeeje+
				" AND "+hastaeje+") AND ([ser_cfa] BETWEEN '"+desdeser+
				"' AND '"+hastaser+"') AND ([nup_cfa] BETWEEN "+desdenup+
				" AND "+hastanup+") AND ([clie_cfa] BETWEEN "+desdecli+
				" AND "+hastacli+") AND (fecha_cfa BETWEEN '"+DFECH+
				"' AND '"+HFECH+"') "+
				"ORDER BY [eje_cfa] ASC,[ser_cfa] ASC,[nup_cfa] ASC";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 9999999);
	var rows = dataset.getMaxRowIndex();
		
	for(var i=1;i<=rows;i++)
	{
		var fra = dataset.getValue(i,1)
		var eje = dataset.getValue(i,2)
		var ser = dataset.getValue(i,3)
		var nup = dataset.getValue(i,4)
		// Get the dataset by quering to database
		query = "DELETE FROM tbFacturaCabecera "+
					"WHERE id = "+fra;
		
	
		var done = plugins.rawSQL.executeSQL(globals.GCconex,"tbfacturacabecera",query)
		if (done)
		{
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache(globals.GCconex,"tbfacturacabecera")			
		}
		else
		{
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('SQLException '+msg,'¡Error!')
			else globals.GCshowErrorDialog('SQLException '+msg, null, null, null, null, null)
		}
		
		query = "DELETE FROM tbFacturalinea "+
				"WHERE WHERE ([eje_lfa] = "+eje+") AND ([ser_lfa] = '"+ser+
				"') AND ([nup_lfa] = "+nup+")";


		done = plugins.rawSQL.executeSQL(globals.GCconex,"tbfacturalinea",query)
		if (done)
		{
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache(globals.GCconex,"tbfacturalinea")			
		}
		else
		{
			msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('SQLException '+msg,'¡Error!')
			else globals.GCshowErrorDialog('SQLException '+msg, null, null, null, null, null)
		}
	}
	
}
