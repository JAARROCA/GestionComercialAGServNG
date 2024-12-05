/**
 * @properties={typeid:24,uuid:"7F8F83D6-C482-4C18-975D-70A869026C9A"}
 */
function btn_goRec()
{
	globals.GCcurID_BancosCuentasCargo = id
}

/**
 * @properties={typeid:24,uuid:"59493C30-0A60-4EA4-9253-921D0FB8D91B"}
 */
function btn_sortAsc()
{
	_super.btn_sortAsc()
	foundset.sort("codigoctabanco asc")
}

/**
 * @properties={typeid:24,uuid:"21EA9131-0B63-47C9-B62F-1A132F7C8052"}
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
 * @properties={typeid:24,uuid:"47E1F69B-823A-4F4B-8195-05A3611A8E6F"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
}
