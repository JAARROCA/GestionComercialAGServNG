/**
 * @type {String}
 * @properties={typeid:35,uuid:"700F3E1B-3AA6-4AE0-A0F4-A4091CF99F46"}
 */
var selections = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"CC344FC4-5E8F-4DC6-A732-8FD5B26BF63A",variableType:93}
 */
var FechaFacturaDuplicar;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"580F8024-9434-4F78-8393-36E344C40E8D"}
 */
function onActionfecha(event) {
	// TODO Auto-generated method stub
	onDataChangefecha()
	
}

/**
 * Callback method for when form is shown.
 *
* @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"CC334E70-2D11-4994-8A78-FD14253E0731"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(event) {
	valuelistfacturas()
	selections = forms.FrmPresupuestosGC.id;//'';
	var fech = utils.dateFormat(new Date(),'dd-MM-yyyy')
	FechaFacturaDuplicar = utils.parseDate(fech,'dd-MM-yyyy')
	onDataChangeFacturas(null, forms.FrmPresupuestosGC.id, event)
	
	elements.FechaFacturaDuplicar.requestFocus()
}

/**
 *
 * @properties={typeid:24,uuid:"5733D590-74C1-4247-8288-C05852455FB5"}
 */
function valuelistfacturas(){
	application.setValueListItems('PresupuestosDuplicar2',new Array())
	
	var query = "select a.cod_cof,a.nomcl_cof,a.fecha_cof,a.impnee_cof,a.id \
				from cofertas as a ORDER BY cod_cof desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999999)
	var rows = dataset.getMaxRowIndex()
	var nup = dataset.getValue(1,1);
	var desccli = dataset.getValue(1,2);
	var fech = dataset.getValue(1,3);
	var impnee = dataset.getValue(1,4);
	var id = dataset.getValue(1,5)
	
	var titulo =  new Array(utils.numberFormat(nup,'00000').toString()+'  ║  '+desccli+'  ║  '+utils.dateFormat(fech,'dd-MM-yyyy')+ 
				'  ║  '+utils.numberFormat(impnee,'###,###,##0.00¤'));
	var uid = new Array(id)
	
	for(var i=2;i<=rows;i++)
	{
		nup = dataset.getValue(i,1);
		desccli = dataset.getValue(i,2);
		fech = dataset.getValue(i,3);
		impnee = dataset.getValue(i,4)
		id = dataset.getValue(i,5)
		var titulo2 =  new Array(utils.numberFormat(nup,'00000').toString()+'  ║  '+desccli+'  ║  '+utils.dateFormat(fech,'dd-MM-yyyy')+
						'  ║  '+utils.numberFormat(impnee,'###,###,##0.00¤'));
		var uid2 = new Array(id)
		
		titulo = titulo.concat(titulo2)
		uid = uid.concat(uid2)
	}
	
	application.setValueListItems('PresupuestosDuplicar2',titulo,uid)
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"ACE23002-5353-4F6E-8C2F-9E454C5C6580"}
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
 * @properties={typeid:24,uuid:"2778FBBC-6966-4000-8CD2-51CCB523A946"}
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
 * @properties={typeid:24,uuid:"A316D4FB-6244-420E-9C17-0CB98B539D34"}
 */
function onLoad(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}
