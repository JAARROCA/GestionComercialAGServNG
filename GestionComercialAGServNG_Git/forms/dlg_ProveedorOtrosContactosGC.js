/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"47814E87-EA25-49BD-81BF-A2E73379EF75"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	//application.setNumpadEnterAsFocusNextEnabled(true)	
}

/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"A564E3BE-811C-4E0B-AA5F-1549845E9A8E"}
 */
function onShow() {
	// TODO Auto-generated method stub
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"042CA5BB-C464-418C-85C7-BC5DFFAD741B"}
 */
function onActionidcontacto(event) {
	// TODO Auto-generated method stub
	onDataChangeidcontacto()
	elements.nombre.requestFocus()
	elements.nombre.selectAll()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0BE44138-0C0B-4BC6-9EE3-5EC4C2023EC6"}
 */
function onActionnombre(event) {
	// TODO Auto-generated method stub
	elements.email.requestFocus()
	elements.email.selectAll()
	
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"20782019-933B-4ED5-97BA-6FDAE894E0A9"}
 */
function onDataChangeidcontacto() {
	// TODO Auto-generated method stub
	
		var query = "select [ID] from [tbMaestroProveedoresContactos] where [CodPro] = " + codpro +
		" AND [IdContacto] = "+idcontacto;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var uuid = dataset.getValue(1,1)
		if(uuid != null)
		{
			if(uuid != null)
			{
				if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Código de Contacto duplicado!','¡Error!')
				else {
				var methd = 'forms.dlg_ProveedorOtrosContactosGC.foco()';
				globals.GCshowErrorDialog('Código de Contacto duplicado!',methd,'Aceptar',null,null,null)
				}
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
 * @properties={typeid:24,uuid:"5A06B166-BC8D-4E24-9FF9-75628643F3B8"}
 */
function foco() {
			elements.idcontacto.requestFocus()
		}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"13B4E8CE-D2B4-4517-BA9C-6CC8A6D4D687"}
 */
function onActionemail(event) {
	// TODO Auto-generated method stub
	elements.puestotrabajo.requestFocus()
	elements.puestotrabajo.selectAll()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3D788395-AAED-42C2-85B2-CA746F60F562"}
 */
function onActionpuestotrabajo(event) {
	// TODO Auto-generated method stub
	elements.telefono.requestFocus()
	elements.telefono.selectAll()
	
}

/**
 * Handle changed data.
 *
 *
 * @properties={typeid:24,uuid:"CDAEFB38-41E0-4E29-B801-6783699EE91A"}
 */
function onDataChangeEmail() {
	// TODO Auto-generated method stub
	if(utils.stringPatternCount(email,",") == 0
			&& utils.stringPatternCount(email," ") == 0
			&& utils.stringPatternCount(email,"@") == 1
			&& utils.stringPatternCount(email,".") >= 1)
			{
				return
			}
			else
			{
				elements.email.requestFocus()
				elements.email.selectAll()
				globals.GCshowInfoDialog("Debes introducir una dirección de correo válida.", null,'Aceptar', null, null, null);			
			}
}
