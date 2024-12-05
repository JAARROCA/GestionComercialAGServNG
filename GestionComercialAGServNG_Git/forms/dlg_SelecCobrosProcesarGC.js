/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B0E3B87-19FC-463A-9A68-AC5F96B11E74"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"CD745238-7869-47BE-8C75-8C61AD0F61E1"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.CobroPago = 1;
	globals.DesdeFecha = new Date();
	globals.HastaFecha = null;
	globals.CuentaBanco = null;
	globals.DescCuentaBanco = null;
	globals.FechaCargoAbono = new Date();
	globals.RefDocumento = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3DB589E4-202A-4CE3-973A-06796E9E0020"}
 */
function onActiondesdefecha(event) {
	// TODO Auto-generated method stub
	elements.HastaFecha.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD003D29-CC54-4F78-8506-A7DAE3925BA9"}
 */
function onActionhastafecha(event) {
	// TODO Auto-generated method stub
	elements.fld_cuentabanco.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"47011D98-4521-4EA9-A680-4575931420AA"}
 */
function onActionBtnCtaBancoCargo(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'dlg_SelecCobrosProcesarGC'
	globals.GCshowDialogCuentasBancos('Cuentas de Cargo Bancos', 1, null, null, true, null, null, null, null, null);
}

/**
*
*
*
*
*
 * @properties={typeid:24,uuid:"24218EDB-FE2C-45BE-824C-ED0DDC6DF037"}
 */
function evt_changeItem()
{
	if(globals.CuentaBanco != null && globals.CuentaBanco != '')
	{
		var tam = globals.CuentaBanco.length
		if(tam == 5 || tam == 6 || tam == 7)
		{
			elements.fld_cuentabanco.selectAll()
			elements.fld_cuentabanco.requestFocus()
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Cuenta Contable de tamaño incorrecto!','¡Error!')
			else globals.GCshowErrorDialog('Cuenta Contable de tamaño incorrecto!',null,'Aceptar',null,null,null)
		}
		else
		{
			var query = "select [NombreEntidad],[CodigoCtaBanco] from [dbo].[MaestroBancosCtasCargo] where [CodigoCtaBanco]='" + globals.CuentaBanco + "'";
			var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			globals.DescCuentaBanco = dataset.getValue(1,1)	
			var ccbanco = dataset.getValue(1,2)
			if(ccbanco == null)
			{
				elements.fld_cuentabanco.selectAll()
				elements.fld_cuentabanco.requestFocus()
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Cuenta Contable inexistente!','¡Error!')
				else globals.GCshowErrorDialog('Cuenta Contable inexistente!',null,'Aceptar',null,null,null)				
			}
		}
	}
	else
	{
		globals.CuentaBanco = null;
		globals.DescCuentaBanco = null;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B966A891-251E-4DE4-AA98-66CFAF705ABA"}
 */
function onActioncuentabanco(event) {
	// TODO Auto-generated method stub
	evt_changeItem()
	elements.FechaCargoAbono.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F908893-F166-4EB6-97AC-46347E60AD11"}
 */
function onActionfechacargoabono(event) {
	// TODO Auto-generated method stub
	elements.RefDocumento.requestFocus()
}
