/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA5A0CC6-4DF9-4ADA-A557-DF99679279AB"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) globals.LoadingGC()
	
	/*var ds = controller.getDataSource().split('/');
	databaseManager.removeTableFilterParam(globals.GCconex,'FiltradoCobrosPagos')
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	foundset.loadAllRecords()*/
	forms.lst_CobrosPagosGC.foundset.loadAllRecords()
	forms.lst_CobrosPagosGC.btn_sortDesc();
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)
	plugins.window.createShortcut('control F10', handle_shortCut);
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5030393F-0FEB-4309-A586-2D0EE193BD43"}
 */
function onRecordSelection(event) {
	// TODO Auto-generated method stub
	//setup the record status
	
		globals.GCsetupRecordStatus();
	
		
		globals.GCcurID_CobrosPagos = id;
		if(globals.GCRegistroNuevo == 1)
		{
			if(globals.GCisEditing())
			{
				btn_cancel()
				doEdit()
			}
		}
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event the event that triggered the action 
 * @properties={typeid:24,uuid:"55969A2A-9EEB-439D-B67F-AD2566288370"}
 * @SuppressWarnings(unused)
 * @AllowToRunInFind
 */
function onShow(firstShow,event)
{
	if(!globals.GClogin_usuario) globals.btn_SalirGC(event)
	 btn_cancel();
	onLoad(event)
	
	globals.GCnav_search = null
	foundset.loadAllRecords()
	controller.readOnly = true
	if(controller.getSelectedIndex() != 1) controller.setSelectedIndex(1)


 	
	//make read only
	controller.readOnly = true
	elements.fld_cobropago.readOnly = true
	elements.fld_tipoadeudo.readOnly = true
	elements.fld_tipodeudor.readOnly = true

	//hide save/cancel btsn
	elements.btn_save.visible = false
	elements.btn_cancel.visible = false
	elements.BtnCuentaContable.visible = false
	elements.BtnFormaPago.visible = false
	elements.BtnCuentaBancoCargo.visible = false
	elements.fld_fechafactura.visible =false
	elements.fld_fecharemesa.visible =false
	elements.fld_fechavencimiento.visible =false
	elements.lblfechafactura.visible = true
	elements.lblfecharemesa.visible = true
	elements.lblfechavencimiento.visible = true
	elements.lblcuentacontable.visible = true
	elements.cuentacontable.visible = false	
	//forms.frm_nav_buttons_facturasGC.elements.btn_duplicate.enabled = true;
	//forms.frm_nav_buttons_facturasGC.elements.lbl_duplicate.enabled = true;
	globals.GCnav_search = null
	globals.GCsetupRecordStatus();
	
	
	//globals.SituacionEfectosSel = null
	//globals.SituacionEfectos = null
}

/**
 * @properties={typeid:24,uuid:"DE14A742-0CA5-4E9F-8896-3D4A18B08C7F"}
 */
function doEdit()
{
	_super.doEdit()
	elements.fld_cobropago.readOnly = false
	elements.fld_tipoadeudo.readOnly = false
	elements.fld_tipodeudor.readOnly = false
	//elements.BtnCuentaContable.visible = true
	elements.BtnFormaPago.visible = true
	elements.BtnCuentaBancoCargo.visible = true
	elements.fld_fechafactura.visible =true
	elements.fld_fecharemesa.visible = true
	elements.fld_fechavencimiento.visible = true
	elements.lblfechafactura.visible = false
	elements.lblfecharemesa.visible = false
	elements.lblfechavencimiento.visible = false
	
	
}

/**
*
 * @properties={typeid:24,uuid:"191B552B-2B1C-482E-BADF-CA14E3350481"}
 */
function btn_save()
{
	/*if(situacion == 'C')
	{
		_super.btn_cancel()
	}
	else
	{*/
		_super.btn_save()
	//}
	globals.GCRegistroNuevo = null
	elements.fld_cobropago.readOnly = true
	elements.fld_tipoadeudo.readOnly = true
	elements.fld_tipodeudor.readOnly = true
	
	elements.situacion.bgcolor = '#f0f0f0'
	elements.situacion.readOnly = true
	
	//elements.fechavencimiento.bgcolor = '#f0f0f0'
	//elements.fechavencimiento.readOnly = true	
	elements.cuentacontable.bgcolor = '#f0f0f0'
	elements.cuentacontable.readOnly = true	
	/*elements.importevencimiento.bgcolor = '#f0f0f0'
	elements.importevencimiento.readOnly = true
	elements.importefactura.bgcolor = '#f0f0f0'
	elements.importefactura.readOnly = true*/
	
	elements.BtnCuentaContable.visible = false
	elements.BtnFormaPago.visible = false
	elements.BtnCuentaBancoCargo.visible = false
	
	elements.fld_fechafactura.visible =false
	elements.fld_fecharemesa.visible =false
	elements.fld_fechavencimiento.visible =false
	elements.lblfechafactura.visible = true
	elements.lblfecharemesa.visible = true
	elements.lblfechavencimiento.visible = true
	elements.lblcuentacontable.visible = true
	elements.cuentacontable.visible = false
	
}

/**
 *
 * @properties={typeid:24,uuid:"7CBD98B1-DFAA-4CA2-9717-98559B67A478"}
 */
function btn_cancel()
{
	_super.btn_cancel()
	
	globals.GCRegistroNuevo = null
	elements.fld_cobropago.readOnly = true
	elements.fld_tipoadeudo.readOnly = true
	elements.fld_tipodeudor.readOnly = true
	
	elements.situacion.bgcolor = '#f0f0f0'
	elements.situacion.readOnly = true
	
	//elements.fechavencimiento.bgcolor = '#f0f0f0'
	//elements.fechavencimiento.readOnly = true	
	elements.cuentacontable.bgcolor = '#f0f0f0'
	elements.cuentacontable.readOnly = true	
	/*elements.importevencimiento.bgcolor = '#f0f0f0'
	elements.importevencimiento.readOnly = true
	elements.importefactura.bgcolor = '#f0f0f0'
	elements.importefactura.readOnly = true*/
	
	
	elements.BtnCuentaContable.visible = false
	elements.BtnFormaPago.visible = false
	elements.BtnCuentaBancoCargo.visible = false
	
	elements.fld_fechafactura.visible =false
	elements.fld_fecharemesa.visible =false
	elements.fld_fechavencimiento.visible =false
	elements.lblfechafactura.visible = true
	elements.lblfecharemesa.visible = true
	elements.lblfechavencimiento.visible = true
	elements.lblcuentacontable.visible = true
	elements.cuentacontable.visible = false
	
}

/**
 * @properties={typeid:24,uuid:"53188374-2977-44EE-9D12-1DDBE9F2478D"}
 */
function validate_autoEnter()
{
	globals.GCRegistroNuevo = 1
	id = application.getUUID()
	fechavencimiento = new Date()	
	//elements.fechavencimiento.bgcolor = '#feffe4'
	//elements.fechavencimiento.readOnly = false
	
	elements.cuentacontable.bgcolor = '#feffe4'
	elements.cuentacontable.readOnly = false
	elements.lblcuentacontable.visible = false
	elements.cuentacontable.visible = true
	
	/*elements.importevencimiento.bgcolor = '#feffe4'
	elements.importevencimiento.readOnly = false
	
	elements.importefactura.bgcolor = '#feffe4'
	elements.importefactura.readOnly = false*/
	tipoadeudo = '4'
	//cobropago = 1
	//tipodeudor = 1
	
	elements.BtnCuentaContable.visible = true
	elements.BtnFormaPago.visible = true
	elements.BtnCuentaBancoCargo.visible = true
	
}

/**
 * @properties={typeid:24,uuid:"BFF41865-1CBA-4278-9007-E5A3B53D4DD8"}
 */
function print_default()
{
	if(foundset.getSize() > 0) rpt_CobrosPagos_list();
}

/**
 * @properties={typeid:24,uuid:"B5EE4A59-E6E2-4932-A596-E1A39135F301"}
 * @AllowToRunInFind
 */
function rpt_CobrosPagos_list()
{
	try
	{
		globals.GCshowDialogCobrosPagosPendientes('Cobros y Pagos Pendientes', 1, null, null, true, null, null, null, null, null);
		
		
	}
	catch (e) 
	{
	   //plugins.dialogs.showErrorDialog('Error',e.toString(),'Ok')
	   application.output(e);   
	   return;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2BBEEE0A-112F-406F-BADE-54099E1B2799"}
 */
function onActionBtnCuenta(event) {
	// TODO Auto-generated method stub
	//globals.GCFormulario = 'FrmCobrosPagos'
	//globals.showDialogCuentasContables('Cuentas Contables', 1, null, null, true, null, null, null, null, null);
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"BA1BFA7F-CAEA-48C1-BC93-E47D6EF02108"}
 */
function validate_beforeDelete()
{
	return 0
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C2526F61-BEB4-41B8-8F4C-69D5B594FEFA"}
 */
function onActionBtnFormaPago(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmCobrosPagosGC'
	//globals.GCshowDialogFormasPago('Formas de Pago', 1, null, null, true, null, null, null, null, null);
	var win = application.getWindow('Formas Pago')
	if(win != null) win.destroy();
	 
	win = application.createWindow("Formas Pago", JSWindow.MODAL_DIALOG);
	//win.setInitialBounds(10, 10, 1100, 600);
	win.title = 'BD Formas de Pago';
	//win.resizable = true;
	win.show(forms.dlgFormasPagoGCNG)
	//win.show(forms.dialog_FormasPagoGC)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D19FF200-2F36-4786-86C8-BE6B6FC4B7B9"}
 */
function onActionBtnCtaBancoCargo(event) {
	// TODO Auto-generated method stub
	globals.GCFormulario = 'FrmCobrosPagos'
	globals.GCshowDialogCuentasBancos('Cuentas de Cargo Bancos', 1, null, null, true, null, null, null, null, null);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7F996517-CDA2-4A96-BBC3-BC72BB4CEF3D"}
 */
function onActionfechavenc(event) {
	// TODO Auto-generated method stub
	onDataChangeFecha()
	elements.cuentacontable.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"CE1FDBB5-BE38-4857-8176-801AB84F4642"}
 */
function onDataChangeFecha() {
	// TODO Auto-generated method stub
	var fech = fechavencimiento
	fech = utils.dateFormat(fech,'dd-MM-yyyy')
	fechavencimiento = utils.parseDate(fech,'dd-MM-yyyy')
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FDE4E10F-7D92-4D9F-A9E4-7359D65AFE18"}
 */
function onActioncuenta(event) {
	// TODO Auto-generated method stub
	elements.fld_numdocumento.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8830F3A3-4D3F-469B-87CC-A2B29F73CE2D"}
 */
function onActionnumdocumento(event) {
	// TODO Auto-generated method stub
	elements.fld_importevencimiento.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3BAD445A-01D0-411D-94A1-0D25D05F9F08"}
 */
function onActionimportevenc(event) {
	// TODO Auto-generated method stub
	elements.fld_importefactura.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2CCA59F6-F69E-4551-A890-F92FE8A626F8"}
 */
function onActionimportefact(event) {
	// TODO Auto-generated method stub
	elements.fld_concepto.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BA56720F-B7B5-486A-AFC6-4A1D409BDFFD"}
 */
function onActionconcepto(event) {
	// TODO Auto-generated method stub
	elements.fld_formapago.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D8A00751-C0EE-4A85-966F-5348C12F44DD"}
 */
function onActionformapago(event) {
	// TODO Auto-generated method stub
	elements.fld_fecharemesa.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1942F81C-0744-4CD0-B512-7A271E361476"}
 */
function onActionfecharemesa(event) {
	// TODO Auto-generated method stub
	elements.fld_cuentabanco.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DA45D3DB-B976-4FC1-B3FE-C471C47FF1C7"}
 */
function onActioncuentabanco(event) {
	// TODO Auto-generated method stub
	elements.fld_idfactura.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"58A2C52B-1219-4369-A0F8-F4B670822823"}
 */
function onActionidfactura(event) {
	// TODO Auto-generated method stub
	elements.fld_fechafactura.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD5FF829-1BF9-4A60-8D2F-6E9396E3C47A"}
 */
function onActionfechafactura(event) {
	// TODO Auto-generated method stub
	elements.fld_observaciones.requestFocus()
}

/**
 *
 * @properties={typeid:24,uuid:"120CA665-BAC3-464C-BAAC-B6DA934AB439"}
 */
function sub_doDelete()
{
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		foundset.deleteRecord()		
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} v_event
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"7AA49300-F905-4D82-8F0F-419A1243FDAC"}
 */
function handle_shortCut(v_event)
{
	if(v_event.getType() == 'control F10')
	{
		if(globals.GCisEditing())
		{
			elements.situacion.bgcolor = '#feffe4'
			elements.situacion.readOnly = false
		}
	}
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"130CDF50-FFC3-4A8B-8751-E184E905ADE5"}
 */
function onDataChangeCC() {
	// TODO Auto-generated method stub
	if(cobropago == 1)
	{
		var cif = gcccobrospagos_to_tbmaestroclientes.cif;
		formapago = gcccobrospagos_to_tbmaestroclientes.idformapago;
	}
	else
	{
		cif = gcccobrospagos_to_tbmaestroproveedores.cif;
		formapago = gcccobrospagos_to_tbmaestroproveedores.codigfp;
	}
	if(cif != null && cif != '')
	{
		var l = utils.stringLeft(cif,1)
		var Letr = 'NO'
		for(var i=0;i<Letras.length;i++)
		{
			if(Letras[i] == l)
			{
				Letr = 'SI'
				break;
			}
		}
		
		if(Letr == 'SI')
		{
			forms.FrmCobrosPagosGC.tipodeudor = 1
		}
		else if(Letr == 'NO')
		{
			forms.FrmCobrosPagosGC.tipodeudor = 2
		}
	}
	else
	{
		forms.FrmCobrosPagosGC.tipodeudor = 1
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"62A4A7ED-8106-4315-878D-D28F1B273BD9"}
 */
function btn_duplicarefecto(event) {
	// TODO Auto-generated method stub
	globals.GCshowDialogDuplicarCobroPago('Duplicar Cobro/Pago',1,null, null, null, null, null, null, null, null);
}

/**
*
*
*
*
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"6544258C-F501-4B36-AA3C-D13A2EF8BA71",variableType:-4}
 */
var Letras = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
