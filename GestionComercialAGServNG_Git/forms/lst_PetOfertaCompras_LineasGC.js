/**
 * @properties={typeid:24,uuid:"F6E2BB39-BA5E-4771-A360-F8FFC71CC133"}
 * @SuppressWarnings(deprecated)
 */
function btn_newLinea()
{
	var ro = forms.FrmPetOfertaComprasGC.elements.fld_fecha.readOnly;
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera de la Petición antes de agregar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
		var save = dataset.getValue(1, 1)
		
		if(save != '1')
		{
			globals.GCshowErrorDialog('Este usuario no dispone de permiso para grabar Peticiones de Ofertas.',null,'Aceptar',null,null,null)		
		}
		else
		{
			var Peticion = forms.FrmPetOfertaComprasGC.npetoferta;
			if(Peticion == null) Peticion = 0;
			query = 'select * from [tbPetOfertaCompraCabecera] where [NPetOferta] =' + Peticion
			dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			Peticion = dataset.getValue(1, 1)	
			if(Peticion == null)
			{
				globals.GCshowErrorDialog('Cabecera Inexistente! Cree una y grabela antes de añadir líneas.',null,'Ok',null,null,null)
			}
			else
			{
				
				Peticion = forms.FrmPetOfertaComprasGC.npetoferta;
				var Proveedor = forms.FrmPetOfertaComprasGC.codpro
				
				//if there's no transaction, start one - so they can "cancel"
				if(!globals.GCisEditing()) globals.GCstartEditing()
				//make a new record
				forms.dlg_Linea_PetOfertaComprasGC.foundset.newRecord(true)
			
				forms.dlg_Linea_PetOfertaComprasGC.npetoferta = Peticion;
				forms.dlg_Linea_PetOfertaComprasGC.validate_autoEnter();
				forms.dlg_Linea_PetOfertaComprasGC.codpro = Proveedor;
				
				
				//databaseManager.saveData();
			
				//show the "fake" dialog
				globals.GCshowDialogPeticionOfertaCompraLinea('Nueva Linea', null, null, null, null, null, null, null, null, null);
			
				//go first field
				forms.dlg_Linea_PetOfertaComprasGC.elements.ref.requestFocus();
				
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"1C9C33FB-872F-4A6D-9622-B108808E9B9E"}
 * @SuppressWarnings(deprecated)
 */
function btn_showPedidoLinea()
{
	var ro = forms.FrmPetOfertaComprasGC.elements.fld_fecha.readOnly;
	//select the right row
	if(globals.GCisEditing() && ro == false)
	{
		//forms[frm].btn_cancel()
		globals.GCshowInfoDialog('Grabe primero la cabecera del Petición antes de editar Líneas.',null,'Aceptar',null,null,null)
	}
	else
	{
		if(globals.GCisEditing()) globals.GCcancelEditing()
		forms.dlg_Linea_PetOfertaComprasGC.foundset.loadAllRecords()	
		var result = forms.dlg_Linea_PetOfertaComprasGC.foundset.selectRecord(linea, npetoferta)
		var fsCount = databaseManager.getFoundSetCount(forms.dlg_Linea_PetOfertaComprasGC.foundset);
		while(result==false)
		{
			if(fsCount == forms.dlg_Linea_PetOfertaComprasGC.foundset.getSize())
			{
			return;
			}
		forms.dlg_Linea_PetOfertaComprasGC.foundset.setSelectedIndex(forms.dlg_Linea_PetOfertaComprasGC.foundset.getSize());
		result = forms.dlg_Linea_PetOfertaComprasGC.foundset.selectRecord(linea, npetoferta);
		}
		//start a transaction
		if(!globals.GCisEditing()) globals.GCstartEditing()
	
		//setup the method to execute when the dialog closes
		globals.GCdialog_performMethod = 'forms.lst_PetOfertaCompras_LineasGC.sub_deletePeticionLinea()'
	
		//show the "fake" dialog
		globals.GCshowDialogPeticionOfertaCompraLinea('Editar Línea', 1, null, null, true, 'Borrar Línea', null, null, null, null);
	}
}

/**
 * @properties={typeid:24,uuid:"5EE67FE1-25A6-4D78-A649-FDCBB77A74B1"}
 */
function sub_deletePeticionLinea()
{
	var query = 'select savecompras from [usuarios] where [cod_us] ='+ globals.GClogin_usuario
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var save = dataset.getValue(1, 1)
	
	if(save != '1')
	{
		globals.GCshowErrorDialog('Este usuario no dispone de permiso para borrar Peticiones de Ofertas.',null,'Aceptar',null,null,null)		
	}
	else
	{
		if(globals.GCdialog_buttonPressed == 'Borrar Línea')
		{
			//check to make sure that the address in question isn't used on any orders
			/*var bAdrCnt = addresses_to_orders_billing.getSize()
			var sAdrCnt = addresses_to_orders_shipping.getSize()
	
			if(bAdrCnt == 0 && sAdrCnt == 0)
			{*/
				foundset.deleteRecord()
			/*}
			else
			{
				//there are orders that use this address
				var msg = 'There are orders that use this address as a shipping or billing address.' +
				' Change the orders to a new address, then you can delete this address.'
				globals.GCshowErrorDialog(msg,'forms.frm_company.sub_showCompanyOrders()','OK', null, null, null)
			}*/
		}
	}
}
