/**
 *
 * @properties={typeid:24,uuid:"94254E97-36F8-44A5-B6C1-3AF7828E3D41"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	
	application.getWindow('Seleccion Cobros a Procesar GC').hide();
	globals.GCenableBgElements();
}

/**
 *
 * @properties={typeid:24,uuid:"596580EE-95AA-41E9-99AA-31D14B2026A6"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
		if(!globals.CuentaBanco || !globals.DescCuentaBanco)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir una cuenta de banco correcta','¡Error!')
			else globals.GCshowErrorDialog('Falta introducir una cuenta de banco correcta',null,'Aceptar',null,null,null)
		}
		else if(!globals.FechaCargoAbono)
		{
			if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir una fecha de cargo','¡Error!')
			else globals.GCshowErrorDialog('Falta introducir una fecha de cargo',null,'Aceptar',null,null,null)
		}
		else
		{
			if(!globals.DesdeFecha)
			{
				globals.DesdeFecha = new Date(new Date().getFullYear(),0,1)
				/*globals.DesdeFecha = globals.DesdeFecha.setDate(1)
				globals.DesdeFecha = globals.DesdeFecha.setMonth(0)
				globals.DesdeFecha = globals.DesdeFecha.setFullYear(utils.stringToNumber(globals.Ejercicio))
				globals.DesdeFecha = globals.DesdeFecha.setHours(0,0,0,0)*/
			}
			if(!globals.HastaFecha)
			{
				globals.HastaFecha = new Date(new Date().getFullYear(),11,31)
				/*globals.DesdeFecha = globals.DesdeFecha.setDate(1)
				globals.DesdeFecha = globals.DesdeFecha.setMonth(0)
				globals.DesdeFecha = globals.DesdeFecha.setFullYear(utils.stringToNumber(globals.Ejercicio))
				globals.DesdeFecha = globals.DesdeFecha.setHours(0,0,0,0)*/
			}
			
			//application.getWindow('Seleccion Cobros a Procesar').hide();
			//globals.enableBgElements1();
			//globals.enableBgElements();		
			globals.GCshowDialogSeleccionRemesa('Selección Remesa', 1, null, null, true, null, null, null, null, null);
		}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"05B8F3F7-FEC6-4FF5-B012-8D0A5C24E34A"}
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F6F7732F-C041-4A6C-AF0C-4B0ADFDBFB4D"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	application.getWindow('Seleccion Cobros a Procesar GC').hide();
	globals.GCenableBgElements();
	return true
}
