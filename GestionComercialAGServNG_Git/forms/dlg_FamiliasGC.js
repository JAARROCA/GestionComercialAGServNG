/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"258E2122-1F54-4343-9107-A34E1690D97D"}
 */
var FamiliaID = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B590D6F-EB07-4DD1-8892-A1DD37D7BD66"}
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
 * @properties={typeid:24,uuid:"7A381D2E-1777-43FA-A1BF-BB226D42E87A"}
 */
function onActionCod_us(event) {
	// TODO Auto-generated method stub
	
	elements.descripcion.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"A4B625C0-745C-4AAF-B9B7-BD0482D2D35D"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [IdFamilia] from [tbMaestroFamila] where [IdFamilia] = '" + idfamilia +"'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Codigo duplicado!\n\nElija otro.','¡Error!')
		else {
			var methd = 'forms.dlg_FamiliasGC.foco()';
			globals.GCshowErrorDialog('Codigo duplicado!\n\nElija otro.',methd,'Aceptar',null,null,null)
		}
	}
	else
	{
		elements.descripcion.requestFocus()
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"610450F2-CEFD-49A3-942C-D588A787BA96"}
 */
function foco() {
	elements.codigo.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"0024369E-B0B2-4481-96C0-4EA1AAD1BCF2"}
 * @SuppressWarnings(deprecated)
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function btn_search()
	{
		/** @type String */
		var frm = currentcontroller.getName();
		/** @type String */
		var search = globals.GCnav_search2

		if(search)
		{
			var dataType = 'str'
			var searchStr = '%' + search + '%'
			var op = ""

			//see if there are any operators (< > = !=) entered
			if(search.indexOf('!=') != -1)
			{
				op = '!='
			}
			else if(search.indexOf('>=') != -1)
			{
				op = '>='
			}
			else if(search.indexOf('>') != -1)
			{
				op = '>'
			}
			else if(search.indexOf('<=') != -1)
			{
				op = '<='
			}
			else if(search.indexOf('<') != -1)
			{
				op = '<'
			}
			else if(search.indexOf('=') != -1)
			{
				op = '='
			}

			if(op) search = utils.stringReplace(search, op, '') //take off the operator to see if date or num

			//try to guess what type of data is entered in the search
			if(search.indexOf('/') != -1 || search.indexOf('-') != -1)
			{
				dataType = 'date' //probably a date
				search = new Date(search)
				searchStr = op + search
			}
			else if(search.indexOf('.') != -1 && !isNaN(parseFloat(search)))
			{
				dataType = 'number' //probably a number
				search = parseFloat(search);
				searchStr = op + search
			}
			else if(!isNaN(parseInt(search)) && search.indexOf('.') == -1)
			{
				dataType = 'int' //probably an integer
				search = parseInt(search, 10);
				searchStr = op + search
			}

			//Encontrar Pescado
			if(frm.indexOf('Familias') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				forms[frm]['idfamilia'] = searchStr
				forms[frm].foundset.newRecord()
				forms[frm]['descfamilia'] = searchStr
					
			
				
						
				//perform the search
				var found = forms[frm].controller.search()

				//see if anything was found
				if(found == 0)
				{
					//globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', null, null, null, null, null)
					forms[frm].foundset.loadAllRecords()
					forms[frm].foundset.sort('idfamilia asc')
				}
				else
				{
					//show the "show all" button
					//databaseManager.refreshRecordFromDatabase(forms.dlg_TiposPescados.foundset,-1);		
					var query = "select [ID] from [tbMaestroFamila] "+
								"where [IdFamilia] LIKE '"+searchStr+"' OR [DescFamilia] LIKE '"+
								searchStr+"' ORDER BY [IdFamilia]";		
					var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
					foundset.selectRecord(dataset.getValue(1,1))
				}
			}
			else
			{
				//empty search - so show all			
				elements.fld_search_usuario.requestFocus(false)
			}
		}
		else
		{
			forms[frm].foundset.loadAllRecords()
			forms[frm].foundset.sort('idfamilia asc')
		}
		
	}

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"B54B1B87-D626-435A-80AD-C980FB4D5D06"}
 * @AllowToRunInFind
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = null;
	FamiliaID = null;
	foundset.loadAllRecords()
	foundset.sort('idfamilia ASC')
	elements.codigo.editable = false
	elements.codigo.bgcolor = '#f0f0f0';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"96A5B151-2D9C-4E18-85B4-160A526A930D"}
 */
function onActiondescripcion(event) {
	// TODO Auto-generated method stub
	elements.stockubicacion.requestFocus()
}

/**
 * Handle changed data.
 *
 *
 *
 * @properties={typeid:24,uuid:"FEC95E78-A2D5-4089-B3D5-0EFB74B210A4"}
 */
function onDataChangeListadoFamilias() {
	// TODO Auto-generated method stub
	if(FamiliaID)
	{
		forms.dlg_FamiliasGC.elements.codigo.editable = false;
		forms.dlg_FamiliasGC.elements.codigo.bgcolor = '#f0f0f0';
		var result = foundset.selectRecord(FamiliaID)
		var fsCount = databaseManager.getFoundSetCount(foundset);
		while(result==false)
		{
			if(fsCount == foundset.getSize()) return;
			foundset.setSelectedIndex(foundset.getSize());
			result = foundset.selectRecord(FamiliaID);
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"C36A7E3D-DA01-4189-8445-8893ABE07683"}
 */
function btn_print(event) {
	// TODO Auto-generated method stub
	if(idfamilia)
	{
		var dfam = '0'
		var hfam = 'ZZZZZZ'
		
		globals.btn_runJasperReportListadoFamilias(dfam, hfam)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"14AB1771-9F7F-4C94-BAA4-2CACF33CB863"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_usuario.requestFocus()
}
