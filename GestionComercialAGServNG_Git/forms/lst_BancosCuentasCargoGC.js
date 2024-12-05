/**
 * @properties={typeid:24,uuid:"89861AE7-5044-445B-82AA-311045C8A763"}
 */
function btn_goRec()
{
	globals.GCcurID_BancosCuentasCargo = id
}

/**
 * @properties={typeid:24,uuid:"8C43E61E-D61F-4B90-BA42-3E690B0F1680"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("codigoctabanco asc")
}

/**
 * @properties={typeid:24,uuid:"2EA908BB-5468-4B46-8CA9-38AA77EB515E"}
 */
function btn_sortDesc()
{
	_super.btn_sortDesc()
	foundset.sort('codigoctabanco desc')
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7692662C-7372-43FB-8F98-2C8EBAD8301C"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}
