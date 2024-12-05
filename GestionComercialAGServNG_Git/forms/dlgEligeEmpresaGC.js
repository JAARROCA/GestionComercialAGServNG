/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DFEE5EE1-3B22-4447-A64A-B1580ECD4AD9",variableType:4}
 */
var Tipo = null;

/**
 * Callback method for when form is shown.
 *
* @properties={typeid:24,uuid:"69CFDD3E-06B3-4B86-984D-C6007D924432"}
 */
function onShow() {
	
	if(globals.GCNombreUsuario == 'ADMINISTRADOR'){
		application.setValueListItems('NombreEmpresaGC',new Array('AG INFORMATICA Y SERVICIOS, S.A.','COSTALUZ ASESORES, S.L.P.','ZUSI PRUEBAS','MECANIZADOS LEGAZPI PRUEBAS','TALLERES MENDIZABAL PRUEBAS','OLABEMAR PRUEBAS','SECTOR VERTICAL S.L.','AM SOROLLA S.L.U.','TEDELBI S.L.','GARAGE MODERNO PABLO IRIZAR S. L.'),new Array(1,2,3,4,5,6,7,8,9,10))
		
	}
	else if(globals.GCNombreUsuario == 'DEMO'){
		application.setValueListItems('NombreEmpresaGC',new Array('EMPRESA DEMO, S.A.','EMPRESA DEMO 2, S.A.'),new Array(1,2))
	}
	Tipo = null;
	elements.empresa.requestFocus()
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 *
 * @properties={typeid:24,uuid:"D9E79D40-28C3-491A-B83A-58597B2F579A"}
 */
function onDataChange() {
	if(Tipo){
		forms.dialog_ElijeEmpresaGC.btn_ok()
	}
}
