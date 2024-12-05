/**
 * Callback method for when form is shown.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"42278779-5FE5-414B-8082-2468DF6F9E80"}
 * @SuppressWarnings(unused)
 */
function onShow(event) {
	// TODO Auto-generated method stub
	/*var Ar = new Array('','a','S','R','A','D','N')
		
	var ds = controller.getDataSource().split('/');
	
	var success = databaseManager.addTableFilterParam(globals.conex, 'ccobrospagos', 'situacion', 'in', Ar , 'FiltradoEfectosPendientes')*/
	onLoad(event)
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E4C01B0D-F9B5-425A-A8B0-C56623F84DF2"}
 */
function onLoad(event) {
	
	/*var query = "Select * FROM ctbCuentaContable WHERE [IdEjercicio] = '"+globals.Empresa+
	"' AND ([ClaveDesglose]=0 OR [ClaveDesglose] is NULL) ORDER BY [CuentaContable]"
	var ds = controller.getDataSource().split('/');
	var dataset = databaseManager.getDataSetByQuery(globals.conex, query, null, 99999999999) 
	foundset.loadRecords(dataset) */
}
