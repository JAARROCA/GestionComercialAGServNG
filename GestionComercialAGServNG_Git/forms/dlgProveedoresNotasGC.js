/**
 *
 * @properties={typeid:24,uuid:"C6E2F9F6-97D8-445D-823B-AD2F39D1D7CB"}
 */
function sub_setNewNumero()
{
	var query = "select linea from tbMaestroProveedoresNotas where Codpro = " + codpro + 
	" order by linea desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	linea = dataset.getValue(1, 1) + 1	
}

/**
 *
 * @properties={typeid:24,uuid:"7D79E598-5EA6-4FED-B05B-CA27D446DDE5"}
 */
function validate_autoEnter()
{
	id = application.getUUID();
	fecha = new Date();
	sub_setNewNumero();	
}
