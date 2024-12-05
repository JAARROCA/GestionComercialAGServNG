/**
 * @properties={typeid:24,uuid:"5A0F6D9F-1F83-4FD7-B5FF-8DE3D0024243"}
 * @SuppressWarnings(deprecated)
 */
function btn_print()
{
	//see what form is front-most
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	//execute the "print_default" method on each form
	forms[frm].print_default()
}

/**
 * @properties={typeid:24,uuid:"AF2EACEE-E48F-4B47-AB2B-7B5A773A29B8"}
 * @AllowToRunInFind
 * @SuppressWarnings(deprecated)
 */
function btn_showAll()
{
	//see what form is front-most
	forms.FrmBalance.onDataChange()
}

/**
 * @properties={typeid:24,uuid:"C3627968-5712-4A9B-BDF8-CD678D633B22"}
 * @SuppressWarnings(deprecated)
 */
function onShow()
{
	//see if the record status has as "(" in it - if so, it's a foundset
	/*if(globals.GCrecord_status.indexOf("(") > 0)
	{*/
	elements.btn_excel.enabled = false;	
	elements.lbl_excel.enabled = false;	
	//elements.btn_print.enabled = false;	
	//elements.lbl_print.enabled = false;	
	sub_showShowAll();
	/*}
	else
	{
		sub_hideShowAll();
	}*/
	
}

/**
 * @properties={typeid:24,uuid:"DBD582AB-F561-4371-89CA-CD4FAD80DB40"}
 */
function sub_hideShowAll()
{
	elements.btn_showAll.visible = false
	elements.lbl_showAll.visible = false
	elements.grc_divLine.visible = false
}

/**
 * @properties={typeid:24,uuid:"5957C10B-DECE-4E0B-81C8-7155DA4E78D9"}
 */
function sub_showShowAll()
{
	elements.btn_showAll.visible = true
	elements.lbl_showAll.visible = true
	elements.grc_divLine.visible = true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"269E1921-C019-4A5E-83D3-964DAE04CB75"}
 * @SuppressWarnings(deprecated)
 */
function btn_excel(event) {
	// TODO Auto-generated method stub
	/*var frm = currentcontroller.getName()
	if(frm == 'FrmFacturasGC')
	{
		if(globals.GCisEditing()) forms.FrmFacturasGC.btn_cancel()
		if(forms.FrmFacturasGC.fecha_cfa)
		{
			globals.GCCriterios = 0;
    		globals.GCTipoConsulta = 7;
    		globals.GCDesdeCodigo = forms.FrmFacturasGC.clie_cfa;
    		globals.GCHastaCodigo = forms.FrmFacturasGC.clie_cfa;
    		forms.dlg_ExportacionDatosGC.DesdeEje = forms.FrmFacturasGC.eje_cfa;
			forms.dlg_ExportacionDatosGC.HastaEje = forms.FrmFacturasGC.eje_cfa;
			forms.dlg_ExportacionDatosGC.DesdeSer = forms.FrmFacturasGC.ser_cfa;
			forms.dlg_ExportacionDatosGC.HastaSer = forms.FrmFacturasGC.ser_cfa;
			forms.dlg_ExportacionDatosGC.DesdeNup = forms.FrmFacturasGC.nup_cfa;
			forms.dlg_ExportacionDatosGC.HastaNup = forms.FrmFacturasGC.nup_cfa;
			
			globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null)
		}
	}
	if(frm == 'FrmCajaCabecera')
	{
		if(globals.GCisEditing()) forms.FrmCajaCabecera.btn_cancel()
		if(forms.FrmCajaCabecera.fecha_cfa && forms.FrmCajaCabecera.ncaja)
		{
			globals.GCCriterios = 0;
    		globals.GCTipoConsulta = 6;
    		globals.GCshowDialogExportacionDatos('Exportación de Datos',1,null,null,null,null,null,null,null,null)
		}
	}
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"25C029EC-361A-465C-86E8-752180A18E99"}
 * @SuppressWarnings(deprecated)
 */
function btn_Salir(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) {
		if(gcparametrosaplicacion_to_parametrosaplicacion && gcparametrosaplicacion_to_parametrosaplicacion.empresa) var nombreempresa = gcparametrosaplicacion_to_parametrosaplicacion.empresa;
		else nombreempresa = 'GestionComercialAGServNG';
		/*var custom_dlg = scopes.svyCustomDialogs.createCustomDialog(
		'custom_servoy_theme_properties.less',
		nombreempresa,
		'<html>¿Desea realmente salir de la Alicación?<br>',
		scopes.svyCustomDialogs.DEFAULT_ICON.INFO,
		['No', 'Si']);*/	
		
		var custom_dlg = scopes.svyCustomDialogs.showQuestionDialog(nombreempresa,'¿Desea realmente salir de la Aplicación?','Si','No')
		if(custom_dlg == "Si") 
		{
			//application.closeAllWindows();
			//controller.show(null);
			//scopes.svySecurity.logout();
			application.exit();
		}
	}
	else globals.GCshowDialogSalir('Salir de la Aplicación', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	//}
	//else
	//{
	//	var respuesta = plugins.dialogs.showQuestionDialog('Salir de Gestión ERP','¿Desea terminar la Sesión?','Si','No')
	//}
	//if(respuesta =='Si')
	//{
	//	application.exit();
	//}
}
