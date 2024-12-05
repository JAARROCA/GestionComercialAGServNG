/**
 *
 * @properties={typeid:24,uuid:"EB6DE133-1BCE-45C2-A8EF-FBE299B9F14B"}
 */
function sub_setNewNumero()
{
	var query = "select linea from tbMaestroClientesNotas where IdCliente = " + idcliente + 
	" order by linea desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	linea = dataset.getValue(1, 1) + 1	
}

/**
 *
 * @properties={typeid:24,uuid:"9B9108FC-DC56-4496-AA8F-73E1A5FF2E9C"}
 */
function validate_autoEnter()
{
	id = application.getUUID();
	fecha = new Date();
	sub_setNewNumero();	
}
