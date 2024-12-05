/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4239D780-C126-4413-BBF1-D2CBBD8A2301"}
 */
var FPID = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"50238AFE-7250-4080-8F81-A2C267436D17"}
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
*
 * @properties={typeid:24,uuid:"54C06C1D-DA04-4E21-A07F-75CE2BC38F33"}
 */
function onActioncodigofp(event) {
	// TODO Auto-generated method stub
	elements.fld_denom_fp.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"502E21A5-C61B-4482-9325-BEBC7BF4598F"}
 */
function onActiondenom(event) {
	// TODO Auto-generated method stub
	elements.fld_ngiro_fp.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"9E3E1AB7-95D2-4E8D-A06A-06D2336ADFAE"}
 */
function onActionngiro(event) {
	// TODO Auto-generated method stub
	elements.fld_mefec_fp.requestFocus()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"9C0E759F-694C-45B5-A622-EC1C0D2118F8"}
 */
function onActionmefec(event) {
	// TODO Auto-generated method stub
	elements.fld_mprve_fp.requestFocus()
	
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"2FDAFE79-49EA-4E8C-B776-425162107BAC"}
 */
function onDataChangecodig() {
	// TODO Auto-generated method stub
	var query = "select [codig_fp] from [tbMaestroformpago] where [codig_fp] = '" + codig_fp + "'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var n = dataset.getValue(1,1)
	if(n != null)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Forma de Pago duplicada!','¡Error!')
		else {
			var methd = 'forms.dlg_FormaspagoGC.foco()';
			globals.GCshowErrorDialog('Forma de Pago duplicada!',methd,'Aceptar',null,null,null)
		}
	}
}

/**
 * Handle changed data.
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"D13D7302-36CC-4ECA-9370-AD7A52EA670D"}
 */
function foco() {
	elements.codig_fp.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"B5CB9308-743A-4583-9AE2-AB8D693ECED5"}
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
			if(frm.indexOf('Formaspago') >= 0)
			{
				if (!forms[frm].controller.find()) return; //cannot enter find, previous edits can't be saved?
				//there is no numeric or date data - so show dialog
				forms[frm]['codig_fp'] = searchStr
					forms[frm].foundset.newRecord()
					forms[frm]['denom_fp'] = searchStr
					
			
				
						
				//perform the search
				var found = forms[frm].controller.search()

				//see if anything was found
				if(found == 0)
				{
					//globals.GCshowErrorDialog('No se han encontrado coincidencias con la búsqueda realizada.', null, null, null, null, null)
					forms[frm].foundset.loadAllRecords()
					forms[frm].foundset.sort('codig_fp asc')
				}
				else
				{
					//show the "show all" button
					//databaseManager.refreshRecordFromDatabase(forms.dlg_TiposPescados.foundset,-1);		
					var query = "select [ID] from [tbMaestroformpago] "+
								"where [codig_fp] LIKE '"+searchStr+"' OR [denom_fp] LIKE '"+
								searchStr+"'";		
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
			forms[frm].foundset.sort('codig_fp asc')
		}
		
	}

/**
 * Callback method for when form is shown.
 *
 * @properties={typeid:24,uuid:"61DD9BC7-12A5-43EC-9200-4061AA027BEB"}
 * @AllowToRunInFind
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = null;
	foundset.loadAllRecords()
	foundset.sort('codig_fp ASC')
	elements.codig_fp.editable = false
	elements.codig_fp.bgcolor = '#f0f0f0';
}

/**
 * Handle changed data.
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"AB4AD8C9-3D2E-42EE-99A3-65CE61867DBB"}
 */
function onDataChangeListadoFamilias() {
	// TODO Auto-generated method stub
	if(FPID)
	{
		forms.dlg_FormaspagoGC.elements.codig_fp.editable = false;
		forms.dlg_FormaspagoGC.elements.codig_fp.bgcolor = '#f0f0f0';
		var result = foundset.selectRecord(FPID)
		var fsCount = databaseManager.getFoundSetCount(foundset);
		while(result==false)
		{
			if(fsCount == foundset.getSize()) return;
			foundset.setSelectedIndex(foundset.getSize());
			result = foundset.selectRecord(FPID);
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"C7739291-4BA3-4020-8B87-D065375373B0"}
 */
function btn_print(event) {
	// TODO Auto-generated method stub
	if(codig_fp)
	{
		
		globals.btn_runJasperReportListadoFP()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"F5D66522-6F91-430D-94D2-875942A1F270"}
 */
function btn_clearsearch(event) {
	// TODO Auto-generated method stub
	globals.GCnav_search2 = '';
	btn_search()
	elements.fld_search_usuario.requestFocus()
}
