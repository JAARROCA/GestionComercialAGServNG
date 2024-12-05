/**
 * @type {String}
 * @properties={typeid:35,uuid:"019E34A5-48D9-4B6A-BCFB-2C0C1C610FDD"}
 */
var selections = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"FB6676CE-B9BC-440B-B950-7CC556400AF3",variableType:93}
 */
var FechaFacturaDuplicar;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"39D6DA6A-449F-4299-BEEF-AB0F695AAD06"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	
}

/**
 * Callback method for when form is shown.
 *
* @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"D2B17016-07A9-4D77-8156-3E39651721B6"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(event) {
	
	valuelistfacturas()
	selections = forms.FrmFacturasGC.id;
	var fech = utils.dateFormat(new Date(),'dd-MM-yyyy');
	FechaFacturaDuplicar = utils.parseDate(fech,'dd-MM-yyyy');
	onDataChangeFacturas(null, forms.FrmFacturasGC.id, event)
	
	elements.FechaFacturaDuplicar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"135AC2CD-9142-4B06-B355-5BA214CEAE0D"}
 */
function valuelistfacturas(){
	application.setValueListItems('FacturasDuplicar2',new Array())
	
	var query = "select a.eje_cfa,a.nup_cfa,a.ser_cfa,b.DescCliente,a.fecha_cfa,a.impnee_cfa,a.id \
				from tbfacturacabecera as a LEFT JOIN \
				tbMaestroClientes AS B ON A.clie_cfa = B.IdCliente \
				ORDER BY eje_cfa desc, nup_cfa desc, ser_cfa desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999999)
	var rows = dataset.getMaxRowIndex()
	var eje = dataset.getValue(1,1);
	var nup = dataset.getValue(1,2);
	var ser = dataset.getValue(1,3);
	var desccli = dataset.getValue(1,4);
	var fech = dataset.getValue(1,5);
	var impnee = dataset.getValue(1,6);
	var id = dataset.getValue(1,7)
	
	var fra = eje.toString()+utils.numberFormat(nup,'00000').toString()+ser;
	fra.length = 8;
	var dc = desccli;
	if(!dc) dc = 'UNDEFINED' 
	if(dc.length < 35)
	{
		for(var j = dc.length;j<=35;j++)
		{
			dc+=' ';
		}
	}
	var titulo =  new Array(fra+'  ║  '+dc+'  ║  '+utils.dateFormat(fech,'dd-MM-yyyy')+ 
				'  ║  '+utils.numberFormat(impnee,'###,###,##0.00¤'));
	var uid = new Array(id)
	/*var str2 = fra+'  ║  '+dc+'  ║  '+utils.dateFormat(fech,'dd-MM-yyyy')+ 
	'  ║  '+utils.numberFormat(impnee,'###,###,##0.00¤');
	application.output(str2)*/
	for(var i=2;i<=rows;i++)
	{
		eje = dataset.getValue(i,1);
		nup = dataset.getValue(i,2);
		ser = dataset.getValue(i,3);
		desccli = dataset.getValue(i,4);
		fech = dataset.getValue(i,5);
		impnee = dataset.getValue(i,6);
		id = dataset.getValue(i,7);
		fra = eje.toString()+utils.numberFormat(nup,'00000').toString()+ser;
		fra.length = 8;
		dc = desccli;
		if(!dc) dc = 'UNDEFINED' 
		if(dc.length < 35)
		{
			for(j = dc.length;j<=35;j++)
			{
				dc+=' ';
			}
		}
		var titulo2 =  new Array(fra+'  ║  '+dc+'  ║  '+utils.dateFormat(fech,'dd-MM-yyyy')+
						'  ║  '+utils.numberFormat(impnee,'###,###,##0.00¤'));
		var uid2 = new Array(id)
		/*str2 = fra+'  ║  '+dc+'  ║  '+utils.dateFormat(fech,'dd-MM-yyyy')+ 
		'  ║  '+utils.numberFormat(impnee,'###,###,##0.00¤');
		application.output(str2)*/
		
		titulo = titulo.concat(titulo2)
		uid = uid.concat(uid2)
	}
	
	application.setValueListItems('FacturasDuplicar2',titulo,uid)
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"4FDAE8F2-ECE4-4B9E-A980-786B278A571D"}
 */
function onDataChangefecha() {
	// TODO Auto-generated method stub
	if(FechaFacturaDuplicar){
		var fech = utils.dateFormat(FechaFacturaDuplicar,'dd-MM-yyyy');
		FechaFacturaDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"117616DC-BFCA-43D6-BEB6-16B70C428059"}
 */
function onDataChangeFacturas(oldValue, newValue, event) {
	// get changed value
	var selected = arguments[1];

	// record was selected
	if(selected){

	    selections['_' + newValue] = true;

	// record was De-Selected
	} else {

	    //selections['_' + newValue] = false; //effectively removes key from hash
	}
	return true
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C9E77734-9454-49F9-91BD-6A250FD46364"}
 */
function onLoad(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}
