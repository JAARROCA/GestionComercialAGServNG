/**
 *
 * @properties={typeid:24,uuid:"3E5C2D13-6737-4932-96F5-D45774291278"}
 */
function sub_setNewNumero()
{
	var query = "select linea from tbMaestroArticulosNotas where codpieza = '" + codpieza + 
	"' order by linea desc";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	linea = dataset.getValue(1, 1) + 1	
}

/**
 *
 * @properties={typeid:24,uuid:"833E290E-76A5-45A9-A25F-DCA3BFB007DD"}
 */
function validate_autoEnter()
{
	id = application.getUUID();
	sub_setNewNumero();	
}
