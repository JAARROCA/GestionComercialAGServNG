/**
 * Callback method for when form is shown.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3433390F-13F7-4E53-AF53-FB7A16AAAE52"}
 * @SuppressWarnings(unused)
 */
function onShow(event) {
	// TODO Auto-generated method stub
	/*var Ar = new Array('','a','S','R','A','D','N')
		
	var ds = controller.getDataSource().split('/');
	
	var success = databaseManager.addTableFilterParam(globals.GCconex, 'ccobrospagos', 'situacion', 'in', Ar , 'FiltradoEfectosPendientes')*/
	onLoad(event)
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DE148310-AA11-4CD8-869A-6CFAE2572611"}
 */
function onLoad(event) {
	
	/*var query = "Select * FROM ctbCuentaContable WHERE [IdEjercicio] = '"+globals.Empresa+
	"' AND ([ClaveDesglose]=0 OR [ClaveDesglose] is NULL) ORDER BY [CuentaContable]"
	var ds = controller.getDataSource().split('/');
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999999) 
	foundset.loadRecords(dataset) */
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"04623190-FA3B-4558-8F0C-013BD3DB2CAF"}
 * @SuppressWarnings(deprecated)
 * @AllowToRunInFind
 */
function onDoubleClick(event) {
	// TODO Auto-generated method stub
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	if(frm == 'FrmCobrosPagosGC')
	{
		var uid = id
		var result = forms.FrmCobrosPagosGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.FrmCobrosPagosGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.FrmCobrosPagosGC.foundset.getSize())
			{
				return;
			}
		forms.FrmCobrosPagosGC.foundset.setSelectedIndex(forms.FrmCobrosPagosGC.foundset.getSize());
		result = forms.FrmCobrosPagosGC.foundset.selectRecord(uid);
		}
	}
}
