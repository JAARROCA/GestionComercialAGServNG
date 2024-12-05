/**
 * Callback method for when form is shown.
 *
 * @param {JSEvent} event the event that triggered the action
*
 * @properties={typeid:24,uuid:"D44955EA-61DB-47CB-B665-FB2E8582883E"}
 */
function onShow(event) {
	controller.loadRecords(foundset)
	foundset.sort('eje_cfa desc, nup_cfa desc, ser_cfa desc')
	
}
