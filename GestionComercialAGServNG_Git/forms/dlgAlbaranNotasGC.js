/**
 *
 * @properties={typeid:24,uuid:"06D378E3-3BB7-4249-B7B8-88A2AD7B46F1"}
 */
function sub_setNewNumero()
{
	var query = "select linea from calbaranNotas where cod_cal = " + cod_cal + 
	" order by linea desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	linea = dataset.getValue(1, 1) + 1	
}

/**
 *
 * @properties={typeid:24,uuid:"523BFDF7-7BC4-4EAB-B44D-388D845414E2"}
 */
function validate_autoEnter()
{
	id = application.getUUID();
	fecha = new Date();
	sub_setNewNumero();	
}
