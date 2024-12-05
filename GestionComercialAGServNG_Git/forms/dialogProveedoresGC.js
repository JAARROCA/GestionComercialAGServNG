/**
 * @properties={typeid:24,uuid:"1C69F88E-5634-4D95-A00A-8F6817DB0CDC"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{
			//globals.GCcancelEditing();
			databaseManager.revertEditedRecords(forms.dlg_ProveedoresGC.foundset)	
		}
	}
	application.getWindow('Proveedores').hide();
	globals.GCenableBgElements();
	forms.dlg_ProveedoresGC.ProveedorID = null;
}

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"A682DCE0-7FD6-4870-BF2E-47643A645E3B",variableType:-4}
 */
var editedRecs;

/**
 * @properties={typeid:24,uuid:"28557B5D-3C94-49C8-9732-2952CF5E7169"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	var ok = true;
	//if(forms.dlg_ProveedoresGC.cif) ok = globals.validateCIFGC(forms.dlg_ProveedoresGC.cif)	
	if(!forms.dlg_ProveedoresGC.codpro)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir el código del proveedor.','¡Error!')
		else globals.GCshowErrorDialog('Falta introducir el código del proveedor.',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_ProveedoresGC.descproveedor)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir el nombre del proveedor.','¡Error!')
		else globals.GCshowErrorDialog('Falta introducir el nombre del proveedor.',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_ProveedoresGC.direccion)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir la dirección del proveedor.','¡Error!')
		else globals.GCshowErrorDialog('Falta introducir la dirección del proveedor.',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_ProveedoresGC.cif)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir el CIF del proveedor.','¡Error!')
		else globals.GCshowErrorDialog('Falta introducir el CIF del proveedor.',null,'Aceptar',null,null,null)
	}
	else if(ok == false){
		forms.dlg_ProveedoresGC.elements.fld_cif.requestFocus()
		forms.dlg_ProveedoresGC.elements.fld_cif.selectAll()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('CIF no válido!!!.\nVerifíquelo.','¡Error!')
		else globals.GCshowErrorDialog("CIF no válido!!!.\nVerifíquelo.", null, null, null, null, null)
	}
	else
	{
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		var con = dataset.getValue(1,2);
		editedRecs = databaseManager.getEditedRecords( forms.dlg_ProveedoresGC.foundset)
		
		if(editedRecs.length > 0)
		{	
			for (var x=0;x<editedRecs.length;x++)
			{
				var cod = editedRecs[x]['codpro'];
				dataset = editedRecs[x].getChangedData();
				var rows = dataset.getMaxRowIndex()
				for( var i = 1 ; i <= rows ; i++ )
				{
					var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
					var record = vSet.getRecord(vSet.newRecord());
					record.id = application.getUUID()
		            record.tipo = 'P' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
					record.codigo = cod
					record.fecha = new Date()
					record.datomodif = dataset.getValue(i,1)
					record.anterior = dataset.getValue(i,2)
					record.despues = dataset.getValue(i,3)
					record.usuario = globals.GClogin_usuario
							
					databaseManager.saveData(record)
				    //application.output(cod+' '+dataset.getValue(i,1) +' '+ dataset.getValue(i,2) +' '+ dataset.getValue(i,3));
				}
			}
		}
				
		if(globals.GCokToCommit == 1)
		{
			if(globals.GCisEditing()) 
			{			
				databaseManager.saveData(forms.dlg_ProveedoresGC.foundset);
				//globals.GCsaveEdits()
			}
		}
		
		databaseManager.saveData(forms.dlg_ProveedoresGC.foundset);
		
		
		
		application.getWindow('Proveedores').hide();
		globals.GCenableBgElements();	
		if(editedRecs.length > 0 && Empresa && con)
		{
			var methd = 'forms.dialogProveedoresGC.ActualizarConta(event)'
			globals.GCshowQuestionDialog("¿Desea que los datos modificados se actualicen también en la contabilidad '"+Empresa+"'?",methd,'No','Si',null,null)
		}
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"04D8CB7F-4978-4DC9-B466-09C574F896FD"}
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
 *
*
 *
 *
 * @properties={typeid:24,uuid:"501F0296-2D3E-44CF-BBC2-7134FC191D9C"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) 
		{
			databaseManager.revertEditedRecords(forms.dlg_ProveedoresGC.foundset)
		}
	}
	application.getWindow('Proveedores').hide();
	globals.GCenableBgElements();	
	
	return true
}

/**
 * Callback method for when form is shown.
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"F16C0E80-5CC1-4D7D-97B7-D18784969888"}
 */
function onShow() {
	// TODO Auto-generated method stub
	globals.GCdialog_buttonPressed = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"A5B6F1CD-F38A-405E-8581-033A9B2EF488"}
 */
function btn_Anterior(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	forms.dlg_ProveedoresGC.controller.setSelectedIndex(forms.dlg_ProveedoresGC.controller.getSelectedIndex() - 1)
	forms.dlg_ProveedoresGC.elements.idcodigo.editable = false
	forms.dlg_ProveedoresGC.elements.idcodigo.bgcolor = '#f0f0f0';
	forms.dlg_ProveedoresGC.elements.idcodigo.visible = false
	forms.dlg_ProveedoresGC.elements.lblidcodigo.visible = true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"31A954ED-F690-48E3-AAA1-57F1911BDD41"}
 */
function btn_Siguiente(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	forms.dlg_ProveedoresGC.controller.setSelectedIndex(forms.dlg_ProveedoresGC.controller.getSelectedIndex() + 1)
	forms.dlg_ProveedoresGC.elements.idcodigo.editable = false
	forms.dlg_ProveedoresGC.elements.idcodigo.bgcolor = '#f0f0f0';
	forms.dlg_ProveedoresGC.elements.idcodigo.visible = false
	forms.dlg_ProveedoresGC.elements.lblidcodigo.visible = true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 *
 *
 * @properties={typeid:24,uuid:"861A7BAE-CA33-4534-9E5D-C402C5834A84"}
 */
function btn_Borrar(event) {
	// TODO Auto-generated method stub
	var query = "SELECT COUNT(*) FROM tbfacturacompracabecera WHERE pro_cfca = "+codpro;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var cont = dataset.getValue(1,1)
	
	var ped = forms.dlg_ProveedoresGC.gctbmaestroproveedores_to_tbpedidocompracabecera.getSize()
	var alb = forms.dlg_ProveedoresGC.gctbmaestroproveedores_to_albapro.getSize()
	var fra = forms.dlg_ProveedoresGC.gctbmaestroproveedores_to_tbfacturacompracabecera.getSize()
	//var cont = companies_to_contacts.getSize()

	if(cont > 0 || ped > 0 || alb > 0 || fra > 0)
	{
		globals.GCshowErrorDialog("No se puede borrar un Proveedor que se utiliza en varios documentos.", null,'Aceptar', null, null, null);
	}
	else
	{
		var msg =  '¿Estás seguro de querer borrarlo?'
		var frm = currentcontroller.getName()
		var methd = 'forms.' + frm + '.sub_doDelete()'
	
		//clear out global - so we don't accidentally delete something
		globals.core_dlg_buttonPressed = null
		//show the tabpanel "dialog"
		globals.GCshowWarningDialog(msg, methd, 'Cancel', 'Borrar', null, null);
	}
}

/**
 * @SuppressWarnings(deprecated)
 *
 *
 *
 * @properties={typeid:24,uuid:"F7345C1A-0A66-4274-A0B9-82F75C61761C"}
 */
function sub_doDelete()
{
	//see what button text was pressed and then delete if necessary
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var query = "SELECT COUNT(*) FROM tbfacturacompracabecera WHERE pro_cfca = "+forms.dlg_ProveedoresGC.codpro;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var cont = dataset.getValue(1,1)
		
		var ped = forms.dlg_ProveedoresGC.gctbmaestroproveedores_to_tbpedidocompracabecera.getSize()
		var alb = forms.dlg_ProveedoresGC.gctbmaestroproveedores_to_albapro.getSize()
		var fra = forms.dlg_ProveedoresGC.gctbmaestroproveedores_to_tbfacturacompracabecera.getSize()
		//var cont = companies_to_contacts.getSize()

		if(cont > 0 || ped > 0 || alb > 0 || fra > 0)
		{
			globals.GCshowErrorDialog("No se puede borrar un Proveedor que se utiliza en varios documentos.", null,'Aceptar', null, null, null);
		}
		else
		{
			var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
			var record = vSet.getRecord(vSet.newRecord());
			record.id = application.getUUID()
	        record.tipo = 'P' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
			record.codigo = forms.dlg_ProveedoresGC.codpro;
			record.fecha = new Date();
			record.datomodif = forms.dlg_ProveedoresGC.descproveedor;
			record.anterior = 'BORRADO DE LA BD';
			record.despues = 'BORRADO DE LA BD';
			record.usuario = globals.GClogin_usuario
			
			databaseManager.saveData(record)
			
			record = forms.dlg_ProveedoresGC.foundset.getSelectedRecord()		
			forms.dlg_ProveedoresGC.foundset.deleteRecord(record)
		}
		//clear out global - so we don't accidentally delete something
		globals.core_dlg_buttonPressed = null
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"50E29B8B-E277-4059-923F-56589BB460B9"}
 */
function btn_Nuevo(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	if(!globals.GCisEditing()) globals.GCstartEditing()	
	forms.dlg_ProveedoresGC.foundset.newRecord(true)
	forms.dlg_ProveedoresGC.id = application.getUUID();
	forms.dlg_ProveedoresGC.pais = 'ES';
	forms.dlg_ProveedoresGC.porciva = 21;
	forms.dlg_ProveedoresGC.elements.idcodigo.editable = true
	forms.dlg_ProveedoresGC.elements.idcodigo.bgcolor = '#ffffff'
	forms.dlg_ProveedoresGC.elements.idcodigo.visible = true
	forms.dlg_ProveedoresGC.elements.lblidcodigo.visible = false
	forms.dlg_ProveedoresGC.elements.idcodigo.requestFocus()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"8D348FE5-1CE1-43AA-B086-3764D3C4FCC5"}
 */
function ActualizarConta(event)
{
	if(globals.core_dlg_buttonPressed == 'Si')
	{
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		var con = dataset.getValue(1,2);
		//var editedRecs = databaseManager.getEditedRecords( foundset)
		for (var x=0;x<editedRecs.length;x++)
		{
			var cod = editedRecs[x]['codpro'];
			query = 'select cuentacontable,descproveedor from tbmaestroproveedores where codpro = '+cod;
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var cc = new String()
			//cc = editedRecs[x]['cuentacontable'];
			//var desccc = editedRecs[x]['descproveedor']
			cc = dataset.getValue(1,1)
			if(!cc) cc = '400'+ PreparaLinea2(cod, 5, 'Right');
			var desccc = dataset.getValue(1,2)
			if(cc)
			{
				var CC8 = cc;
				var CC4 = cc.substr(0, 4);
				var CC3 = cc.substr(0, 3);
				var CC2 = cc.substr(0, 2);
				var CC1 = cc.substr(0, 1);
				var Cuentas = new Array(CC8,CC4,CC3,CC2,CC1);
				for(var i=0;i<Cuentas.length;i++)
				{
					query = "select ID from ctbcuentacontable "+ 
						"where [IdEjercicio] = '"+Empresa+
						"' AND [CuentaContable] = '"+Cuentas[i]+"'";
					dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
					var uuid = dataset.getValue(1,1)
					if(uuid == null)
					{
						CrearCuenta(Cuentas[i],desccc,con,Empresa)
					}
					else if(Cuentas[i] == cc)
					{
						var vSet2 = databaseManager.getFoundSet(con, 'ctbcuentacontable') 
						vSet2.loadRecords(databaseManager.convertToDataSet([uuid])) 
						var record2 = vSet2.getSelectedRecord();
						if(record2['desccuentacontable'] != editedRecs[x]['descproveedor']) record2['desccuentacontable'] = editedRecs[x]['descproveedor'];
						if(record2['contrapartida'] != editedRecs[x]['ccgastos']) record2['contrapartida'] = editedRecs[x]['ccgastos'];
						if(record2['tipoiva'] != editedRecs[x]['porciva']) record2['tipoiva'] = editedRecs[x]['porciva'];
						if(record2.getChangedData().getMaxRowIndex() > 0) databaseManager.saveData(record2)
					}
				}
				
				query = "select ID from cmaestrodatosfiscales where idejercicio = '"+Empresa+"' and "+
						"idcodigo ='"+cc+"'"
				dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
				uuid = dataset.getValue(1,1)
				var vSet = databaseManager.getFoundSet(con, 'cmaestrodatosfiscales') 
				if(uuid)
				{
					vSet.loadRecords(databaseManager.convertToDataSet([uuid])) 
					var record = vSet.getSelectedRecord();
					
					if(record['nombre'] != editedRecs[x]['descproveedor']) record['nombre'] = editedRecs[x]['descproveedor'];
					if(record['direccion'] != editedRecs[x]['direccion']) record['direccion'] = editedRecs[x]['direccion'];
					if(record['codpostal'] != editedRecs[x]['codpostal']) record['codpostal'] = editedRecs[x]['codpostal'];
					if(record['poblacion'] != editedRecs[x]['poblacion']) record['poblacion'] = editedRecs[x]['poblacion'];
					if(record['provincia'] != editedRecs[x]['provincia']) record['provincia'] = editedRecs[x]['provincia'];
					if(record['cif'] != editedRecs[x]['cif']) record['cif'] = editedRecs[x]['cif'];
					if(record['telefono'] != editedRecs[x]['telf1']) record['telefono'] = editedRecs[x]['telf1'];
					if(record['fax'] != editedRecs[x]['fax']) record['fax'] = editedRecs[x]['fax'];
					if(record['contacto'] != editedRecs[x]['perscontacto']) record['contacto'] = editedRecs[x]['perscontacto'];
					/*record['codigobanco'] = editedRecs[x]['codigobanco'];
					record['codigosucursal'] = editedRecs[x]['codigosucursal'];
					record['codigodc'] = editedRecs[x]['codigo1dc'];
					record['codigocuenta'] = editedRecs[x]['codigocuenta'];*/
					if(record['codigopaisue'] != editedRecs[x]['pais']) record['codigopaisue'] = editedRecs[x]['pais'];
					//record['swift'] = editedRecs[x]['swift'];
					//record['codigoiban'] = editedRecs[x]['codigoiban'];
					if(record['mail'] != editedRecs[x]['email']) record['mail'] = editedRecs[x]['email'];
					if(record['formapago'] != editedRecs[x]['codigfp']) record['formapago'] = editedRecs[x]['codigfp'];
					if(record['web'] != editedRecs[x]['web']) record['web'] = editedRecs[x]['web'];
					//if(editedRecs[x]['refmandatosepa'] && (record['refmandatosepa'] != editedRecs[x]['refmandatosepa'])) record['refmandatosepa'] = editedRecs[x]['refmandatosepa'];
					//if(editedRecs[x]['fechafirmamandato'] && (record['fechafirmamandato'] != editedRecs[x]['fechafirmamandato'])) record['fechafirmamandato'] = editedRecs[x]['fechafirmamandato'];
					if(!record['tiponif']) record['tiponif'] = '02';
					
					if(record.getChangedData().getMaxRowIndex() > 0) databaseManager.saveData(record)
				}
				else
				{
					vSet.newRecord();
					vSet['id'] = application.getUUID();
					vSet['idejercicio'] = Empresa;
					vSet['idcodigo'] = cc;
					vSet['nombre'] = editedRecs[x]['descproveedor'];
					vSet['direccion'] = editedRecs[x]['direccion'];
					vSet['codpostal'] = editedRecs[x]['codpostal'];
					vSet['poblacion'] = editedRecs[x]['poblacion'];
					vSet['provincia'] = editedRecs[x]['provincia'];
					vSet['cif'] = editedRecs[x]['cif'];
					vSet['telefono'] = editedRecs[x]['telf1'];
					vSet['fax'] = editedRecs[x]['fax'];
					vSet['contacto'] = editedRecs[x]['perscontacto'];
					/*vSet['codigobanco'] = editedRecs[x]['codigobanco'];
					vSet['codigosucursal'] = editedRecs[x]['codigosucursal'];
					vSet['codigodc'] = editedRecs[x]['codigo1dc'];
					vSet['codigocuenta'] = editedRecs[x]['codigocuenta'];*/
					vSet['codigopaisue'] = editedRecs[x]['pais'];
					/*vSet['swift'] = editedRecs[x]['swift'];
					vSet['codigoiban'] = editedRecs[x]['codigoiban'];*/
					vSet['mail'] = editedRecs[x]['email'];
					vSet['formapago'] = editedRecs[x]['codigfp'];
					vSet['web'] = editedRecs[x]['web'];
					//if(editedRecs[x]['refmandatosepa']) vSet2['refmandatosepa'] = editedRecs[x]['refmandatosepa'];
					//if(editedRecs[x]['fechafirmamandato']) vSet2['fechafirmamandato'] = editedRecs[x]['fechafirmamandato'];
					vSet['tiponif'] = '02';
					
					databaseManager.saveData(vSet)
				}
			}			
		}
	}
}

/**
 * 
 * @param {String} CC
 * 
 * @param {String} DESCCC
 *
 * @param {String} CON
 *
 * @param {String} E
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"19863B64-8E33-439E-9A4E-68346FA69798"}
 */
function CrearCuenta(CC,DESCCC,CON,E)
{
	var query = "select * from [ctbCuentaContable] where IdEjercicio = '"+E+
	"' and [CuentaContable] like '"+CC+"'"+"+'%'"
	var dataset = databaseManager.getDataSetByQuery(CON, query, null, 9999999)
	var rows = dataset.getMaxRowIndex()
	if(rows > 1 ) var clavdesgl = 1;
	else clavdesgl = 0;
	
	var vSet2 = databaseManager.getFoundSet(CON, 'ctbcuentacontable') 
	vSet2.newRecord();	
	vSet2.id = application.getUUID();
	vSet2.idejercicio = globals.Empresa;
	vSet2.cuentacontable = CC;
	vSet2.desccuentacontable = DESCCC;
	vSet2.clavedesglose = clavdesgl;
	vSet2.debeenero = 0;
	vSet2.debefebrero = 0;
	vSet2.debemarzo = 0;
	vSet2.debeabril = 0;
	vSet2.debemayo = 0;
	vSet2.debejunio = 0;
	vSet2.debejulio = 0;
	vSet2.debeagosto = 0;
	vSet2.debeseptiembre = 0;
	vSet2.debeoctubre = 0;
	vSet2.debenoviembre = 0;
	vSet2.debediciembre = 0;
	vSet2.haberenero = 0;
	vSet2.haberfebrero = 0;
	vSet2.habermarzo = 0;
	vSet2.haberabril = 0;
	vSet2.habermayo = 0;
	vSet2.haberjunio = 0;
	vSet2.haberjulio = 0;
	vSet2.haberagosto = 0;
	vSet2.haberseptiembre = 0;
	vSet2.haberoctubre = 0;
	vSet2.habernoviembre = 0;
	vSet2.haberdiciembre = 0;
	vSet2.previsionenero = 0;
	vSet2.previsionfebrero = 0;
	vSet2.previsionmarzo = 0;
	vSet2.previsionabril = 0;
	vSet2.previsionmayo = 0;
	vSet2.previsionjunio = 0;
	vSet2.previsionjulio = 0;
	vSet2.previsionagosto = 0;
	vSet2.previsionseptiembre = 0;
	vSet2.previsionoctubre = 0;
	vSet2.previsionnoviembre = 0;
	vSet2.previsiondiciembre = 0;
	vSet2.previsionanual = 0;	
	vSet2.saldoenero = 0;
	vSet2.saldofebrero = 0;
	vSet2.saldomarzo = 0;
	vSet2.saldoabril = 0;
	vSet2.saldomayo = 0;
	vSet2.saldojunio = 0;
	vSet2.saldojulio = 0;
	vSet2.saldoagosto = 0;
	vSet2.saldoseptiembre = 0;
	vSet2.saldooctubre = 0;
	vSet2.saldonoviembre = 0;
	vSet2.saldodiciembre = 0;
	vSet2.saldoejercicioanterior = 0;
	vSet2.totaldebe = 0;
	vSet2.totalhaber = 0;
	vSet2.saldo = 0;
	
	databaseManager.saveData(vSet2)
}

/**
 * Callback method when form is destroyed.
 * 
 * @param {String} CAMPO
 * 
 * @param {Number} LONGITUD
 *
 * @param {String} ALINEACION
 *
 *
 *
 * @return {String}
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"60729AA6-FF1A-41BC-82BD-54FDCE849FF4"}
 */
function PreparaLinea2(CAMPO,LONGITUD,ALINEACION)
{	
	if(CAMPO == null)
	{
		CAMPO = '';
	}
	var espacios = null
	var n = LONGITUD - CAMPO.length
	for(var i=1;i<=n;i++)
	{
		espacios = espacios + '0';
	}

	if (ALINEACION == 'Left')
	    return CAMPO + espacios;
	else
	    return espacios + CAMPO;
}
