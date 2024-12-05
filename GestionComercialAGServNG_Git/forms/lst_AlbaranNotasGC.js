/**
 *
 * @properties={typeid:24,uuid:"F57C1635-6D55-41EA-AE15-604C837AFB3F"}
 * @SuppressWarnings(deprecated)
 */
function btn_newEmpresaPExtra()
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	var ro = forms.FrmAlbaranGC.elements.fld_fecha_cal.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero la cabecera del albarán antes de agregar Líneas.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero el albarán antes de agregar Notas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savealbaran from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			scopes.svyCustomDialogs.showErrorDialog('Error','Este usuario no dispone de permiso para grabar Notas de Albaran.','Aceptar');
			//globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Líneas de Albaran.',null,'Aceptar',null,null,null)
		}
		else
		{
			var alb = forms.FrmAlbaranGC.cod_cal;
			if(!alb) alb = -99;
			query = "select * from [dbo].[calbaran] where [cod_cal] =" + alb;
						
			//var ds = controller.getDataSource().split('/');
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var Albaran = dataset.getValue(1, 1)
			
			if(Albaran == null)
			{
				var msg = '<html>El Albarán aún no existe!<br><br>Cree uno y grabelo antes de añadir Notas.</html>'
				scopes.svyCustomDialogs.showErrorDialog('Error',msg,'Aceptar');
				//globals.GCshowErrorDialog('El Albarán aún no existe!\n\n Cree uno y grabelo antes de añadir Notas.',null,'Aceptar',null,null,null)
			}
			else
			{
				Albaran= forms.FrmAlbaranGC.cod_cal;
				
				//if there's no transaction, start one - so they can "cancel"
				if(!globals.GCisEditing()) 
				{
					globals.GCstartEditing()
			
					//make a new record
					forms.dlgAlbaranNotasGC.foundset.newRecord(false)
				
					
					forms.dlgAlbaranNotasGC.cod_cal = Albaran;
					forms.dlgAlbaranNotasGC.validate_autoEnter();
					
				
					//databaseManager.saveData();
				
					//show the "fake" dialog
					globals.GCshowDialogAlbaranNotas('Nueva Nota', null, null, null, null, null, null, null, null, null);
				
					//go first field
					forms.dlgAlbaranNotasGC.elements.titulo.requestFocus()
				}
			}
		}	
	}
}

/**
 *
 * @properties={typeid:24,uuid:"D3EB70AB-E89A-427A-B73D-A0659E09117F"}
 * @SuppressWarnings(deprecated)
 */
function btn_showEmpresaPExtra()
{
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	var ro = forms.FrmAlbaranGC.elements.fld_fecha_cal.readOnly;
	//var frm = currentcontroller.getName()
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		scopes.svyCustomDialogs.showInfoDialog('Info','Grabe primero el albarán antes de editar Notas.','Aceptar');
		//globals.GCshowInfoDialog('Grabe primero el albarán antes de editar Notas.',null,'Aceptar',null,null,null)
	}
	else
	{	
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var uid = id
		var result = forms.dlgAlbaranNotasGC.foundset.selectRecord(uid)
		var fsCount = databaseManager.getFoundSetCount(forms.dlgAlbaranNotasGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlgAlbaranNotasGC.foundset.getSize()) return;
			forms.dlgAlbaranNotasGC.foundset.setSelectedIndex(forms.dlgAlbaranNotasGC.foundset.getSize());
			result = forms.dlgAlbaranNotasGC.foundset.selectRecord(uid);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_AlbaranNotasGC.sub_deleteAlbaranNotas()'
		
		//show the "fake" dialog
		globals.GCshowDialogAlbaranNotas('Editar Nota', 1, null, null, true, 'Borrar Nota', null, null, null, null);
	}
}

/**
 *
 * @properties={typeid:24,uuid:"7E9495CC-63CF-4521-BB43-9C94993CE525"}
 */
function sub_deleteAlbaranNotas()
{
	if(globals.GCdialog_buttonPressed == 'Borrar Nota')
	{
		if(rec) forms.lst_AlbaranNotasGC.foundset.deleteRecord(rec);
		else forms.lst_AlbaranNotasGC.foundset.deleteRecord()
	}
}

/**
 * @type {JSRecord}
 *
 *
 * @properties={typeid:35,uuid:"A39E9765-7BB1-468E-9E67-55C44D472BD5",variableType:-4}
 */
var rec;

/**
 * @type {Number}
 *
 *
 *
 * @properties={typeid:35,uuid:"5191B4FA-4D87-43C5-908F-6B4CB8EC4D52",variableType:8}
 */
var fsindex;

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 *
 * @properties={typeid:24,uuid:"FAE573E3-49C6-4298-8A88-A81D3AA6C0D7"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	// TODO Auto-generated method stub
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if(foundsetindex && columnindex && record) btn_showEmpresaPExtra();
	
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 *
 *
 * @properties={typeid:24,uuid:"8D3E2915-3067-438A-B50B-B5FD438E9EB4"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	var column = elements.table_AlbaranNotas.getColumn(columnindex);
	
	//var notaRecord = foundset.suppliers_to_products.getSelectedRecord();
	rec = record;
	fsindex = foundsetindex;
	if (column.id === "editar") {
		btn_showEmpresaPExtra();
	}
	/*else if (column.id === "borrar") {
		btn_delete(event)
	}
	else if (column.id === "docu") {
		btnshowDocument(event)
	}*/
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"5911D267-AB6A-4F5A-B271-938D306BEFA2"}
 */
function onShow(firstShow, event) {
	rec = null;
	fsindex = null;
	elements.table_AlbaranNotas.myFoundset.foundset.sort('linea asc')
}
