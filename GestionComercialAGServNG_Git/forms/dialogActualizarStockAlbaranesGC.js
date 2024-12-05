/**
 * @properties={typeid:24,uuid:"AE6A72C7-1D42-4700-89EC-D2416E18748C"}
 */
function btn_cancel()
{
	//set a global to the text of the button pressed
	application.getWindow('Actualizar Stock Albaran').hide();
	globals.GCenableBgElements();
}

/**
 * @properties={typeid:24,uuid:"1E2D78A7-49E1-49EE-A9D0-05DBF3D1C6FC"}
 */
function btn_ok()
{
	if(gcfechalimite_usuarios.taop_007=='1') 
	{
		if(!forms.dlg_Actualizar_Stock_AlbaranesGC.DesdeAlbaran)
		{
			var desdeAlb = 1
		}
		else
		{
			desdeAlb = forms.dlg_Actualizar_Stock_AlbaranesGC.DesdeAlbaran
		}
		if(!forms.dlg_Actualizar_Stock_AlbaranesGC.HastaAlbaran)
		{
			var hastaAlb = 999999999
		}
		else
		{
			hastaAlb = forms.dlg_Actualizar_Stock_AlbaranesGC.HastaAlbaran
		}
		if(!forms.dlg_Actualizar_Stock_AlbaranesGC.DesdeFecha == null)
		{
			var desdeFech = '1-1-1900'
		}
		else
		{
			desdeFech = utils.dateFormat(forms.dlg_Actualizar_Stock_AlbaranesGC.DesdeFecha,'dd-MM-yyyy')
			
		}
		if(forms.dlg_Actualizar_Stock_AlbaranesGC.HastaFecha == null)
		{
			var hastaFech = new Date()
			var dia = hastaFech.getDate()
			var mes = hastaFech.getMonth() + 1
			var agno = hastaFech.getFullYear()
			hastaFech = dia + '-' + mes + '-' + agno + ' 23:59:59'
		}
		else
		{
			hastaFech = utils.dateFormat(forms.dlg_Actualizar_Stock_AlbaranesGC.HastaFecha,'dd-MM-yyyy') + ' 23:59:59'
		}
		if(globals.GCCriterios == 0) var ord = 'nup_lal,nli_lal'
		else ord = 'fecha_cal,nup_lal,nli_lal'
		
		var query = "select nup_lal,nli_lal,cant1_lal,refm_lal,unme_lal from [dbo].[lalbaran] " +
		"inner join [dbo].[calbaran] ON [dbo].[calbaran].cod_cal = [dbo].[lalbaran].nup_lal "+
		"where ([dbo].[lalbaran].[nup_lal] between " + desdeAlb + " AND "+hastaAlb+") AND ([dbo].[calbaran].[fecha_cal] between '"+desdeFech+"' and '"+hastaFech+"') and"+
					" ([dbo].[lalbaran].[situ_lal] is NULL or [dbo].[lalbaran].[situ_lal] = '') ORDER BY "+ord;
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, -1)
		
		var rows = dataset.getMaxRowIndex()
		for(var i=1;i<=rows;i++)
		{
			var Albaran = dataset.getValue(i, 1)
			var Linea = dataset.getValue(i, 2)
			var unid = dataset.getValue(i, 3)
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
				if(record)
				{
					var exis = record.exis_a;
					if(!exis) exis = 0;
					exis -= cant;
					record.exis_a = exis;
					
					databaseManager.saveData(record)
					
					/*forms.FrmArticulosGC.foundset.loadAllRecords();
					var result = forms.FrmArticulosGC.foundset.selectRecord(uuid)
					var fsCount = databaseManager.getFoundSetCount(forms.FrmArticulosGC.foundset);
					while(result==false)
					{
						if(fsCount == forms.FrmArticulosGC.foundset.getSize()) break;
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
					databaseManager.saveData(forms.FrmArticulosGC.foundset)*/
					
					//Inserto un nuevo movimento de Salida
					var fecha = new Date();
					
					
					var tip1 = sub_setTip1()		
					var stock = sub_stock(art)
					
					
					forms.FrmMoviArtiGC.foundset.newRecord(true)	
					forms.FrmMoviArtiGC.id = application.getUUID()
					forms.FrmMoviArtiGC.cod_ms = art
					forms.FrmMoviArtiGC.fecha_ms = fecha
					forms.FrmMoviArtiGC.tip1_ms = tip1
					forms.FrmMoviArtiGC.tipo_ms = 'S'
					forms.FrmMoviArtiGC.ndoc_ms = Albaran
					forms.FrmMoviArtiGC.ndoc1_ms = Linea
					forms.FrmMoviArtiGC.movi_ms = cant
					forms.FrmMoviArtiGC.exis_ms = stock
					forms.FrmMoviArtiGC.ferm_ms = fecha
					forms.FrmMoviArtiGC.nusu_ms = globals.GClogin_usuario;
					databaseManager.saveData()
				}	
				//Actualizo situación Linea Albarán
				forms.lst_Albaran_LineasGC.foundset.loadAllRecords();
				var result = forms.lst_Albaran_LineasGC.foundset.selectRecord([Linea,Albaran])
				var fsCount = databaseManager.getFoundSetCount(forms.lst_Albaran_LineasGC.foundset);
				while(result==false)
				{
					if(fsCount == forms.lst_Albaran_LineasGC.foundset.getSize()) break//return;
					forms.lst_Albaran_LineasGC.foundset.setSelectedIndex(forms.lst_Albaran_LineasGC.foundset.getSize());
					result = forms.lst_Albaran_LineasGC.foundset.selectRecord([Linea,Albaran]);
				}
				if(result == true){
					forms.lst_Albaran_LineasGC.foundset.situ_lal = 'A'
					databaseManager.saveData(forms.lst_Albaran_LineasGC.foundset)
				}
				else{
					query = "UPDATE lalbaran SET situ_lal = 'A' "+    
		                			"WHERE nup_lal = "+Albaran+" AND nli_lal = "+Linea
		            var done = plugins.rawSQL.executeSQL(globals.GCconex,query)
		            if (done)
		            {
		            	//flush is required when changes are made in db
		            	plugins.rawSQL.flushAllClientsCache(globals.GCconex,"lalbaran")							
		            }
				}
			}
			
		}
		
		application.getWindow('Actualizar Stock Albaran').hide();
		globals.GCenableBgElements();
	}
	else
	{
		globals.GCshowErrorDialog('Este usuario no tiene permiso para actualizar Stock de Albaranes!\n\nPóngase en contacto con el Administrador', null, null, null, null, null)
	}
}

/**
 * @return {Number}
 * @properties={typeid:24,uuid:"BF99D07C-5468-4081-84DD-D9B1FA7DE97C"}
 */
function sub_setTip1()
{
	var query = 'select tip1_ms from [dbo].[moviarti] order by tip1_ms desc'
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)
	var tip1 = dataset.getValue(1,1) + 1
	
	return tip1
	
}

/**
 * @properties={typeid:24,uuid:"0F596161-23D6-4679-91D5-829E5C208D79"}
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
 * @properties={typeid:24,uuid:"981EB1F3-E716-49F5-A1CF-F4F619C4CC66"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	globals.GCenableBgElements()
	return true
}
