/**
 * @properties={typeid:24,uuid:"3D4049BD-BDA1-4494-A0F9-B8AB4A0D7F0A"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Actualizar Stock Albaran Compras').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"08689E15-384F-4C50-B596-4086193DAB24"}
 */
function btn_ok()
{
	if(gcfechalimite_usuarios.taop_007=='1') 
	{
		if(!forms.dlg_Actualizar_Stock_AlbaranesComprasGC.DesdeFecha == null)
		{
			var desdeFech = '1-1-1900'
		}
		else
		{
			desdeFech = utils.dateFormat(forms.dlg_Actualizar_Stock_AlbaranesComprasGC.DesdeFecha,'dd-MM-yyyy')
			
		}
		if(forms.dlg_Actualizar_Stock_AlbaranesComprasGC.HastaFecha == null)
		{
			var hastaFech = new Date()
			var dia = hastaFech.getDate()
			var mes = hastaFech.getMonth() + 1
			var agno = hastaFech.getFullYear()
			hastaFech = dia + '-' + mes + '-' + agno + ' 23:59:59'
		}
		else
		{
			hastaFech = utils.dateFormat(forms.dlg_Actualizar_Stock_AlbaranesComprasGC.HastaFecha,'dd-MM-yyyy') + ' 23:59:59'
		}
		
		
		var query = "SELECT [prov_lap],[nup_lap],[nli_lap]"+
					",[refa_lap],[cant_lap],[prec_lap] "+      
					"FROM [dbo].[lalbapro] inner join [dbo].[albapro] on "+
					"[dbo].[albapro].pro_ap = [dbo].[lalbapro].prov_lap and "+
					"[dbo].[albapro].nup_ap = [dbo].[lalbapro].nup_lap "+
					"WHERE [dbo].[albapro].fech_ap between '"+desdeFech+
					"' and '"+hastaFech+"'";
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 100000)
		
		var rows = dataset.getMaxRowIndex()
		for(var i=1;i<=rows;i++)
		{
			var prov = dataset.getValue(i, 1)
			var Albaran = dataset.getValue(i, 2)
			var Linea = dataset.getValue(i, 3)
			var unid = dataset.getValue(i, 5)
			var art = dataset.getValue(i, 4)
			//var unme = dataset.getValue(i, 5)
			
			
			/*if(unme == 'm2')
			{
				var cant = unid * m2			
			}
			else if(unme== 'ml')
			{
				cant = unid * mlin
			}
			else if(unme== 'und')
			{*/
				var cant = unid
			/*}
			else if(unme== 'kgr')
			{
				cant = unid
			}
			else if(unme== 'H')
			{
				cant = unid
			}*/
			globals.GCROUND(cant,2)
			
					
			//Actualizo Stock Articulo
			query = "Select [ID] from [dbo].[tbmaestroarticulos] WHERE [codigo]='"+art+"'";
			var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
			var uuid = dataset2.getValue(1,1)
			if(uuid)
			{
				var vSet = databaseManager.getFoundSet(globals.GCconex, 'tbmaestroarticulos')  
						  
				//load record by ID in foundset  
				vSet.loadRecords(databaseManager.convertToDataSet([uuid]))
				var record = vSet.getRecord(vSet.getSelectedIndex())
				
				var exis = record.exis_a;
				if(!exis) exis = 0;
				exis += cant;
				record.exis_a = exis;
				
				databaseManager.saveData(record)
				
				/*forms.FrmArticulosGC.foundset.loadAllRecords();
				var result = forms.FrmArticulosGC.foundset.selectRecord(uuid)
				var fsCount = databaseManager.getFoundSetCount(forms.FrmArticulosGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.FrmArticulosGC.foundset.getSize())
					{
						return;
					}
				forms.FrmArticulosGC.foundset.setSelectedIndex(forms.FrmArticulosGC.foundset.getSize());
				result = forms.FrmArticulosGC.foundset.selectRecord(uuid);
				}
				
				var exis = forms.FrmArticulosGC.foundset.exis_a;
				exis -= cant;
				//var disp = forms.FrmArticulosGC.foundset.disp_a
				//disp -= cant;
				forms.FrmArticulosGC.foundset.exis_a = exis;
				//forms.FrmArticulosGC.foundset.disp_a = disp
				databaseManager.saveData()*/
				
				//Inserto un nuevo movimento de Salida
				var fecha = new Date();
				
				
				var tip1 = sub_setTip1()		
				var stock = sub_stock(art)
				
				
				forms.FrmMoviArtiGC.foundset.newRecord(true)	
				forms.FrmMoviArtiGC.id = application.getUUID()
				forms.FrmMoviArtiGC.cod_ms = art
				forms.FrmMoviArtiGC.fecha_ms = fecha
				forms.FrmMoviArtiGC.tip1_ms = tip1
				forms.FrmMoviArtiGC.tipo_ms = 'E'
				forms.FrmMoviArtiGC.ndoc_ms = Albaran
				forms.FrmMoviArtiGC.ndoc1_ms = Linea
				forms.FrmMoviArtiGC.movi_ms = cant
				forms.FrmMoviArtiGC.exis_ms = stock
				forms.FrmMoviArtiGC.ferm_ms = fecha
				forms.FrmMoviArtiGC.nusu_ms = globals.GClogin_usuario;
				databaseManager.saveData(forms.FrmMoviArtiGC.foundset)
			}	
			//Actualizo situación Linea Albarán
			forms.lst_AlbaranCompra_LineasGC.foundset.loadAllRecords();
			var result = forms.lst_AlbaranCompra_LineasGC.foundset.selectRecord(Linea,Albaran,prov)
			var fsCount = databaseManager.getFoundSetCount(forms.lst_AlbaranCompra_LineasGC.foundset);
			while(result==false)
			{
				if(fsCount == forms.lst_AlbaranCompra_LineasGC.foundset.getSize()) break;
				forms.lst_AlbaranCompra_LineasGC.foundset.setSelectedIndex(forms.lst_AlbaranCompra_LineasGC.foundset.getSize());
				result = forms.lst_AlbaranCompra_LineasGC.foundset.selectRecord(Linea,Albaran,prov);
			}
			if(result == true){
				forms.lst_AlbaranCompra_LineasGC.foundset.situ_lap = 'A'
				databaseManager.saveData(forms.lst_AlbaranCompra_LineasGC.foundset)
			}
			else{
				query = "UPDATE lalbapro SET situ_lap = 'A' "+    
	                			"WHERE prov_lap = "+prov+" and nup_lap = '"+Albaran+"' AND nli_lap = "+Linea
	            var done = plugins.rawSQL.executeSQL(globals.GCconex,query)
	            if (done)
	            {
	            	//flush is required when changes are made in db
	            	plugins.rawSQL.flushAllClientsCache(globals.GCconex,"lalbapro")							
	            }
			}
		}
		
		application.getWindow('Actualizar Stock Albaran Compras').hide();
		globals.GCenableBgElements();
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para actualizar Stock de Albaranes!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"D8A59137-335C-4ECF-9368-6D9C02702D29"}
 */
function sub_setTip1()
{
	var query = 'select tip1_ms from [dbo].[moviarti] order by tip1_ms desc'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var tip1 = dataset.getValue(1,1) + 1
	
	return tip1
	
}

/**
 * @properties={typeid:24,uuid:"CB00D8F1-B37A-4439-BFE4-9B3AD0BA2686"}
 * {String} art
 * @return {Number}
 */
function sub_stock(art)
{
	var query = "select exis_a from tbmaestroarticulos where codigo='"+art+"'";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var exis = dataset.getValue(1,1)
	
	return exis
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C05BAD58-E121-436B-B363-E350C6351CA1"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
