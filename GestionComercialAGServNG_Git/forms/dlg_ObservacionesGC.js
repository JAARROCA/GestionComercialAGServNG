/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A81B2785-F2C0-4A1F-818F-72936454935A"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"783BDE94-EB83-4088-B70C-43B027CFB61F"}
 */
function onActionCod_us(event) {
	// TODO Auto-generated method stub
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"FAB04271-615C-4179-9B05-1DF7DDF48D16"}
 * @AllowToRunInFind
 */
function onShow() {
	// TODO Auto-generated method stub
	
	elements.fld_denom_fp.requestFocus()
	
}

/**
*
*
 *
 * @properties={typeid:24,uuid:"29AE58E8-EBB9-43B9-9DDC-00604B571AE9"}
 */
function sub_setNewNumeroLinea()
{
	var query = "select [codigo] from [tbmaestroobservaciones] order by codigo desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	codigo = dataset.getValue(1, 1) + 1	
}

/**
 *
 * @properties={typeid:24,uuid:"B515653C-65F0-4412-88A1-C0CCA2EB388C"}
 */
function validate_autoEnter()
{
	id = application.getUUID()
	sub_setNewNumeroLinea();	
}
