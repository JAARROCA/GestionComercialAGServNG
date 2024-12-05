/**
 * @properties={typeid:24,uuid:"CE574B32-2330-4C52-90C6-22CEDB7DF7E3"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_cancel.text
	
	if(globals.GCokToCommit == 1)
	{
		if(globals.GCisEditing()) 
		{
			databaseManager.revertEditedRecords(forms.dlg_ClientesGC.foundset)
		}
	}
	application.getWindow('Clientes').hide();
	globals.GCenableBgElements();
	forms.dlg_ClientesGC.ClienteID = null;
	
}

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"6FB0F7CF-2DB8-4E30-B7C1-6A56F7798ED9",variableType:-4}
 */
var editedRecs;

/**
 * @properties={typeid:24,uuid:"E80EB1E2-5029-470F-8CF2-899D3B40FD73"}
 */
function btn_ok()
{
	//set a global to the text of the button pressed
	globals.GCdialog_buttonPressed = elements.btn_ok.text
	
	var ok = true;
	//if(forms.dlg_ClientesGC.cif) ok = globals.validateCIFGC(forms.dlg_ClientesGC.cif)	
	if(!forms.dlg_ClientesGC.idcliente)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir el código del cliente.','¡Error!')
		else globals.GCshowErrorDialog('Falta introducir el código del cliente.',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_ClientesGC.desccliente)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir el nombre del cliente.','¡Error!')
		else globals.GCshowErrorDialog('Falta introducir el nombre del cliente.',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_ClientesGC.direccion)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir la dirección del cliente.','¡Error!')
		else globals.GCshowErrorDialog('Falta introducir la dirección del cliente.',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_ClientesGC.cif)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir el CIF del cliente.','¡Error!')
		else globals.GCshowErrorDialog('Falta introducir el CIF del cliente.',null,'Aceptar',null,null,null)
	}
	else if(!forms.dlg_ClientesGC.pais)
	{
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('Falta introducir el país del cliente.','¡Error!')
		else globals.GCshowErrorDialog('Falta introducir el país del cliente.',null,'Aceptar',null,null,null)
	}
	else if(ok == false){
		forms.dlg_ClientesGC.elements.fld_cif.requestFocus()
		forms.dlg_ClientesGC.elements.fld_cif.selectAll()
		if(application.getApplicationType() == APPLICATION_TYPES.NG_CLIENT) plugins.webnotificationsToastr.error('CIF no válido!!!.\nVerifíquelo.','¡Error!')
		else globals.GCshowErrorDialog("CIF no válido!!!.\nVerifíquelo.", null, null, null, null, null)
	}
	else
	{	
		var query = 'select EmpresaContable,conexconta from ParametrosAplicacion where NºEmpresa = 1'
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var Empresa = dataset.getValue(1,1);
		var con = dataset.getValue(1,2);
		editedRecs = databaseManager.getEditedRecords( forms.dlg_ClientesGC.foundset)
		
		
		if(editedRecs.length > 0)
		{
			for (var x=0;x<editedRecs.length;x++)
			{
				var cod = editedRecs[x]['idcliente'];
				dataset = editedRecs[x].getChangedData();
				var rows = dataset.getMaxRowIndex()
				for( var i = 1 ; i <= rows ; i++ )
				{
					var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
					var record = vSet.getRecord(vSet.newRecord());
					record.id = application.getUUID()
		            record.tipo = 'C' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift)
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
				databaseManager.saveData(forms.dlg_ClientesGC.foundset);
				//globals.GCsaveEdits()
			}
		}
		
		databaseManager.saveData(forms.dlg_ClientesGC.foundset);
		forms.dlg_ClientesGC.ClienteID = null;
		
		
		application.getWindow('Clientes').hide();
		globals.GCenableBgElements();	
		if(editedRecs.length > 0 && Empresa && con)
		{
			var methd = 'forms.dialogClientesGC.ActualizarConta(event)'
			globals.GCshowQuestionDialog("¿Desea que los datos modificados se actualicen también en la contabilidad '"+Empresa+"'?",methd,'No','Si',null,null)
		}
	}
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5939717-3A2E-4A36-8D2E-EECA425BB989"}
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
 * @properties={typeid:24,uuid:"BE6DF78D-49E4-4C68-9E60-5696E1F43263"}
 * @SuppressWarnings(deprecated)
  */
function onHide(event) {
	// TODO Auto-generated method stub
	forms.dlg_ClientesGC.ClienteID = null;	
	if(globals.GCdialog_buttonPressed != elements.btn_ok.text)
	{
		if(globals.GCisEditing()) 
		{
			databaseManager.revertEditedRecords(forms.dlg_ClientesGC.foundset)
			
		}
	}
	application.getWindow('Clientes').hide();
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
 * @properties={typeid:24,uuid:"475EE9A3-269B-4E79-8198-47FB1D960AF0"}
 */
function onShow() {
	elements.btn_anterior.imageURL = "media:///nav_left_blue_greyBg.gif";
	elements.btn_siguiente.imageURL = "media:///nav_right_blue_greyBg.gif";
	elements.btn_Borrar.imageURL = "media:///papelera.GIF";
	elements.btn_Nuevo.imageURL = "media:///NEW.gif";
	elements.btn_ok.imageURL = "media:///guardar.gif";
	elements.btn_cancel.imageURL = "media:///cal_delete.gif";
	globals.GCdialog_buttonPressed = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"38347C50-744B-4FD9-8AF9-42BC742EE825"}
 */
function btn_Anterior(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords(forms.dlg_ClientesGC.foundset)
	forms.dlg_ClientesGC.controller.setSelectedIndex(forms.dlg_ClientesGC.controller.getSelectedIndex() - 1)
	forms.dlg_ClientesGC.elements.idcodigo.editable = false;
	forms.dlg_ClientesGC.elements.idcodigo.bgcolor = '#FFFF00'//'#f0f0f0';
	forms.dlg_ClientesGC.elements.idcodigo.visible = false;
	forms.dlg_ClientesGC.elements.lblidcodigo.visible = true;
	forms.dlg_ClientesGC.elements.btn_print.enabled = true;
	forms.dlg_ClientesGC.ClienteID = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"2D538CC2-7AE4-448F-8B9D-C8A84B907A08"}
 */
function btn_Siguiente(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords(forms.dlg_ClientesGC.foundset)
	forms.dlg_ClientesGC.controller.setSelectedIndex(forms.dlg_ClientesGC.controller.getSelectedIndex() + 1)
	forms.dlg_ClientesGC.elements.idcodigo.editable = false;
	forms.dlg_ClientesGC.elements.idcodigo.bgcolor = '#FFFF00'//'#f0f0f0';
	forms.dlg_ClientesGC.elements.idcodigo.visible = false;
	forms.dlg_ClientesGC.elements.lblidcodigo.visible = true;
	forms.dlg_ClientesGC.elements.btn_print.enabled = true;	
	forms.dlg_ClientesGC.ClienteID = null;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @SuppressWarnings(deprecated)
 *
 *
 * @properties={typeid:24,uuid:"97B0472B-01BD-49BF-A9D7-23DB5111011F"}
 */
function btn_Borrar(event) {
	var idcli = forms.dlg_ClientesGC.idcliente;
	if(!idcli) idcli = -99999999
	var query = "SELECT COUNT(*) FROM tbfacturacabecera WHERE clie_cfa = "+ idcli;
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var cont = dataset.getValue(1,1)
	
	query = "SELECT COUNT(*) FROM tbfacturaproformacabecera WHERE clie_cfa = "+ idcli;
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var cont2 = dataset.getValue(1,1)
	
	var pre = forms.dlg_ClientesGC.gctbmaestroclientes_to_lofertas.getSize()
	var alb = forms.dlg_ClientesGC.gctbmaestroclientes_to_lalbaran.getSize()
	var fra = forms.dlg_ClientesGC.gctbmaestroclientes_to_tbfacturalinea.getSize()
	//var cont = companies_to_contacts.getSize()

	if(fra > 0 || cont > 0 || pre > 0 || alb > 0 || cont2 > 0 )
	{
		globals.GCshowErrorDialog("No se puede borrar un Cliente que se utiliza en varios documentos.", null,'Aceptar', null, null, null);
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
 * @properties={typeid:24,uuid:"F9BED891-763C-49BD-845B-AFF96674BD7F"}
 */
function sub_doDelete()
{
	//see what button text was pressed and then delete if necessary
	if(globals.core_dlg_buttonPressed == 'Borrar')
	{
		var idcli = forms.dlg_ClientesGC.idcliente;
		if(!idcli) idcli = -99999999
		var query = "SELECT COUNT(*) FROM tbfacturacabecera WHERE clie_cfa = "+idcli;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var cont = dataset.getValue(1,1)
		
		query = "SELECT COUNT(*) FROM tbfacturaproformacabecera WHERE clie_cfa = "+idcli;
		dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var cont2 = dataset.getValue(1,1)
		
		var pre = forms.dlg_ClientesGC.gctbmaestroclientes_to_lofertas.getSize()
		var alb = forms.dlg_ClientesGC.gctbmaestroclientes_to_lalbaran.getSize()
		var fra = forms.dlg_ClientesGC.gctbmaestroclientes_to_tbfacturalinea.getSize()
		//var cont = companies_to_contacts.getSize()

		if(fra > 0 || cont > 0 || pre > 0 || alb > 0 || cont2 > 0 )
		{
			globals.GCshowErrorDialog("No se puede borrar un Cliente que se utiliza en varios documentos.", null,'Aceptar', null, null, null);
		}
		else
		{
			var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbhistoricomodificaciondatos') 
			var record = vSet.getRecord(vSet.newRecord());
			record.id = application.getUUID()
	        record.tipo = 'C' //(C=Clientes) (P=Proveedores) (A=Articulos) (O=Operarios) (F=Familias) (FP=FormasPago) (IVA=IVA) (D=Delegaciones) (B=Bancos) (COM=Comisionistas) (SW=Swift) (UM=Unidad Medida)
			record.codigo = forms.dlg_ClientesGC.idcliente;
			record.fecha = new Date();
			record.datomodif = forms.dlg_ClientesGC.desccliente;
			record.anterior = 'BORRADO DE LA BD';
			record.despues = 'BORRADO DE LA BD';
			record.usuario = globals.GClogin_usuario
			
			databaseManager.saveData(record)
			
			record = forms.dlg_ClientesGC.foundset.getSelectedRecord()		
			forms.dlg_ClientesGC.foundset.deleteRecord(record)
		}
		//clear out global - so we don't accidentally delete something
		globals.core_dlg_buttonPressed = null
		forms.dlg_ClientesGC.ClienteID = null;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"B088F61D-E017-40B6-937C-D812A1124D94"}
 */
function btn_Nuevo(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords()
	if(!globals.GCisEditing()) globals.GCstartEditing()	
	forms.dlg_ClientesGC.ClienteID = null;
	forms.dlg_ClientesGC.foundset.newRecord(true)
	forms.dlg_ClientesGC.id = application.getUUID();
	forms.dlg_ClientesGC.pais = 'ES';
	forms.dlg_ClientesGC.tipoiva = 21;
	forms.dlg_ClientesGC.elements.idcodigo.editable = true
	forms.dlg_ClientesGC.elements.idcodigo.bgcolor = '#FFFF00'//'#ffffff'
	forms.dlg_ClientesGC.elements.idcodigo.visible = true
	forms.dlg_ClientesGC.elements.lblidcodigo.visible = false	
	forms.dlg_ClientesGC.elements.btn_print.enabled = false	
	forms.dlg_ClientesGC.elements.idcodigo.requestFocus()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 *
 * @properties={typeid:24,uuid:"770BF27A-53F8-4616-952F-E4BC9969B9E7"}
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
			//var cod = editedRecs[x]['idcliente'];
			var cod = editedRecs[x]['idcliente'];
			query = 'select cuentacontable,desccliente from tbmaestroclientes where idcliente = '+cod;
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var cc = new String()
			//cc = editedRecs[x]['cuentacontable'];
			//var desccc = editedRecs[x]['desccliente']
			cc = dataset.getValue(1,1)
			if(!cc) cc = '430'+ PreparaLinea2(cod, 5, 'Right');
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
						var vSet = databaseManager.getFoundSet(con, 'ctbcuentacontable') 
						vSet.loadRecords(databaseManager.convertToDataSet([uuid])) 
						var record2 = vSet.getSelectedRecord();
						if(record2['desccuentacontable'] != editedRecs[x]['desccliente']) record2['desccuentacontable'] = editedRecs[x]['desccliente'];
						if(record2['contrapartida'] != editedRecs[x]['cuentacontableventas']) record2['contrapartida'] = editedRecs[x]['cuentacontableventas'];
						if(record2['tipoiva'] != editedRecs[x]['tipoiva']) record2['tipoiva'] = editedRecs[x]['tipoiva'];
						if(record2.getChangedData().getMaxRowIndex() > 0) databaseManager.saveData(record2)
					}
				}
				
				
				query = "select ID from cmaestrodatosfiscales where idejercicio = '"+Empresa+"' and "+
						"idcodigo ='"+cc+"'"
				dataset = databaseManager.getDataSetByQuery(con, query, null, 1)
				uuid = dataset.getValue(1,1)
				var vSet2 = databaseManager.getFoundSet(con, 'cmaestrodatosfiscales') 
				if(uuid)
				{
					vSet2.loadRecords(databaseManager.convertToDataSet([uuid])) 
					var record = vSet2.getSelectedRecord();
					
					if( record['nombre'] != editedRecs[x]['desccliente']) record['nombre'] = editedRecs[x]['desccliente'];
					if(record['direccion'] != editedRecs[x]['direccion']) record['direccion'] = editedRecs[x]['direccion'];
					if(record['codpostal'] != editedRecs[x]['codpostal']) record['codpostal'] = editedRecs[x]['codpostal'];
					if(record['poblacion'] != editedRecs[x]['poblacion']) record['poblacion'] = editedRecs[x]['poblacion'];
					if(record['provincia'] != editedRecs[x]['provincia']) record['provincia'] = editedRecs[x]['provincia'];
					if(record['cif'] != editedRecs[x]['cif']) record['cif'] = editedRecs[x]['cif'];
					if(record['telefono'] != editedRecs[x]['telf1']) record['telefono'] = editedRecs[x]['telf1'];
					if(record['fax'] != editedRecs[x]['fax']) record['fax'] = editedRecs[x]['fax'];
					if(record['contacto'] != editedRecs[x]['perscontacto']) record['contacto'] = editedRecs[x]['perscontacto'];
					if(record['codigobanco'] != editedRecs[x]['codigobanco']) record['codigobanco'] = editedRecs[x]['codigobanco'];
					if(record['codigosucursal'] != editedRecs[x]['codigosucursal']) record['codigosucursal'] = editedRecs[x]['codigosucursal'];
					if(record['codigodc'] != editedRecs[x]['codigo1dc']) record['codigodc'] = editedRecs[x]['codigo1dc'];
					if(record['codigocuenta'] != editedRecs[x]['codigocuenta']) record['codigocuenta'] = editedRecs[x]['codigocuenta'];
					if(record['codigopaisue'] != editedRecs[x]['pais']) record['codigopaisue'] = editedRecs[x]['pais'];
					if(record['swift'] != editedRecs[x]['swift']) record['swift'] = editedRecs[x]['swift'];
					if(record['codigoiban'] != editedRecs[x]['codigoiban']) record['codigoiban'] = editedRecs[x]['codigoiban'];
					if(record['mail'] != editedRecs[x]['emailcontacto']) record['mail'] = editedRecs[x]['emailcontacto'];
					if(record['formapago'] != editedRecs[x]['idformapago']) record['formapago'] = editedRecs[x]['idformapago'];
					if(record['web'] != editedRecs[x]['web']) record['web'] = editedRecs[x]['web'];
					if(editedRecs[x]['refmandatosepa'] && (record['refmandatosepa'] != editedRecs[x]['refmandatosepa'])) record['refmandatosepa'] = editedRecs[x]['refmandatosepa'];
					if(editedRecs[x]['fechafirmamandato'] && (record['fechafirmamandato'] != editedRecs[x]['fechafirmamandato'])) record['fechafirmamandato'] = editedRecs[x]['fechafirmamandato'];
					if(!record['tiponif']) record['tiponif'] = '02';
					
					if(record.getChangedData().getMaxRowIndex() > 0) databaseManager.saveData(record)
				}
				else
				{
					vSet2.newRecord();
					vSet2['id'] = application.getUUID();
					vSet2['idejercicio'] = Empresa;
					vSet2['idcodigo'] = cc;
					vSet2['nombre'] = editedRecs[x]['desccliente'];
					vSet2['direccion'] = editedRecs[x]['direccion'];
					vSet2['codpostal'] = editedRecs[x]['codpostal'];
					vSet2['poblacion'] = editedRecs[x]['poblacion'];
					vSet2['provincia'] = editedRecs[x]['provincia'];
					vSet2['cif'] = editedRecs[x]['cif'];
					vSet2['telefono'] = editedRecs[x]['telf1'];
					vSet2['fax'] = editedRecs[x]['fax'];
					vSet2['contacto'] = editedRecs[x]['perscontacto'];
					vSet2['codigobanco'] = editedRecs[x]['codigobanco'];
					vSet2['codigosucursal'] = editedRecs[x]['codigosucursal'];
					vSet2['codigodc'] = editedRecs[x]['codigo1dc'];
					vSet2['codigocuenta'] = editedRecs[x]['codigocuenta'];
					vSet2['codigopaisue'] = editedRecs[x]['pais'];
					vSet2['swift'] = editedRecs[x]['swift'];
					vSet2['codigoiban'] = editedRecs[x]['codigoiban'];
					vSet2['mail'] = editedRecs[x]['emailcontacto'];
					vSet2['formapago'] = editedRecs[x]['idformapago'];
					vSet2['web'] = editedRecs[x]['web'];
					if(editedRecs[x]['refmandatosepa']) vSet2['refmandatosepa'] = editedRecs[x]['refmandatosepa'];
					if(editedRecs[x]['fechafirmamandato']) vSet2['fechafirmamandato'] = editedRecs[x]['fechafirmamandato'];
					vSet2['tiponif'] = '02';
					
					databaseManager.saveData(vSet2)
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
 * @properties={typeid:24,uuid:"FAE5C0F8-852F-45D6-B424-562971F02FBE"}
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
	vSet2.idejercicio = E;
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
 * @return {String}
 *
*
 *
 *
 *
 * @properties={typeid:24,uuid:"25A795CB-19DC-45DE-B6A9-108BEE0B0759"}
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
