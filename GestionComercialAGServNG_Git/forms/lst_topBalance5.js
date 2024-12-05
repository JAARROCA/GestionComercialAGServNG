/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"7D23980D-B703-4BAA-984C-8C159CDBB5FE"}
 */
var html_resumen = null;

/**
 * @type {Array<String>}
 *
 *
 *
 * @properties={typeid:35,uuid:"3AFAF7AC-E3B5-4591-BA5B-D3350856FCC6",variableType:-4}
 */
var Colores = ['#0080FF', '#00CC66', '#FF0000', '#FFFF00' , '#CCCCCC', '#99FFFF', '#006666', '#FFCCCC', '#FFCC99', '#FF3399', '#FF8000', '#B266FF', '#999900', '#3333FF','#B2FF66', '#FF0040', '#088A85', '#FF8000', '#58FAAC', '#00BFFF'];

/**
 * @type {String}
 *
 *
 *
 * @properties={typeid:35,uuid:"1771FAEF-2BE2-47FB-A027-6C33101D162D"}
 */
var htmlresum = null;

/**
 * @type {String}
 *
  *
 *
 *
 *
 *
 * @properties={typeid:35,uuid:"8262BB5F-5BD3-465F-B99F-F3C85FB3A867"}
 */
var chartjstype = 'pie';

/**
 * @return {String}
 * @properties={typeid:24,uuid:"92A0C511-8B7F-41E7-A5DD-EB23E4374693"}
 * @SuppressWarnings(deprecated)
 */
function draw_chart()
{
	html_resumen = null;
	htmlresum = null;
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}

	var HTML = '<html><body>'
	var dfech = forms[frm].DesdeFecha;
	if(!dfech) dfech = new Date(new Date().getFullYear(),new Date().getMonth(),1)
	var hfech = forms[frm].HastaFecha;
	if(!hfech) hfech = new Date(new Date().getFullYear(),new Date().getMonth()+1,0)	
	
	ventasiva_to_ventasiva.loadAllRecords()
	ventasiva_to_ventasiva.deleteAllRecords()
	/*var query = "DELETE FROM comprasiva "+
				"WHERE idusuario ="+globals.GClogin_usuario;
		
		var done = plugins.rawSQL.executeSQL(globals.GCconex,"comprasiva",query)
		if (done)
		{
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache(globals.GCconex,"comprasiva")				
			
		}
		else
		{
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error',  'SQL exception: '+msg,  'Ok')
		}
	*/

	var maxReturedRows = 15;

	var query = "SELECT distinct piva_cfa from tbfacturacabecera " +
				"WHERE piva_cfa IS NOT NULL ORDER BY piva_cfa DESC";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
	var rows = dataset.getMaxRowIndex();
	var Ar = new Array()
	for(var i=1;i<=rows;i++)	
	{		
		Ar[i]= dataset.getValue(i,1)		
	}
	var l = rows
	query = "SELECT distinct piva2_cfa from tbfacturacabecera "+
			"WHERE piva2_cfa IS NOT NULL ORDER BY piva2_cfa DESC"
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
	rows = dataset.getMaxRowIndex();
	for(i=1;i<=rows;i++)	
	{		
		var porc = dataset.getValue(i,1)
		
		if(Ar.indexOf(porc) == -1)
		{
			l += 1;
			Ar[l]= dataset.getValue(i,1)
		}
		
	}
		
	query = "SELECT distinct piva3_cfa from tbfacturacabecera "+
			"WHERE piva3_cfa IS NOT NULL ORDER BY piva3_cfa DESC"
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
	rows = dataset.getMaxRowIndex();
	for(i=1;i<=rows;i++)	
	{		
		porc = dataset.getValue(i,1)
		if(Ar.indexOf(porc) == -1)
		{
			l += 1;
			Ar[l]= dataset.getValue(i,1)
		}
	}
	rows = l;
	
	
	
	for(i=1;i<=rows;i++)
	{
		var Cuotaiva = 0;
		var Baseiva = 0;
		var piva = Ar[i];
		query = "select ISNULL(SUM(oi.cuotaiva_cfa),0),ISNULL(SUM(oi.impbie_cfa),0) "+
				"from [tbFacturaCabecera] oi "+
				"where (cuotaiva_cfa is not null) AND (fecha_cfa between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
				"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+"') AND piva_cfa = "+piva;
				
		var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)	
		Cuotaiva += dataset2.getValue(1,1);
		Baseiva += dataset2.getValue(1,2);
		
		query = "select ISNULL(SUM(oi.cuotaiva2_cfa),0),ISNULL(SUM(oi.impbie2_cfa),0) "+
				"from [tbFacturaCabecera] oi "+
				"where (cuotaiva2_cfa is not null) AND (fecha_cfa between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
				"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+"') AND piva2_cfa = "+piva;
				
		dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)	
		Cuotaiva += dataset2.getValue(1,1);
		Baseiva += dataset2.getValue(1,2);
		
		query = "select ISNULL(SUM(oi.cuotaiva3_cfa),0),ISNULL(SUM(oi.impbie3_cfa),0) "+
				"from [tbFacturaCabecera] oi "+
				"where (cuotaiva3_cfa is not null) AND (fecha_cfa between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
				"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+"') AND piva3_cfa = "+piva;
				
		dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)	
		Cuotaiva += dataset2.getValue(1,1);
		Baseiva += dataset2.getValue(1,2);
		
		if(Baseiva != 0)//(Cuotaiva != 0)
		{
			Cuotaiva = globals.GCROUND(Cuotaiva,2)
			Baseiva = globals.GCROUND(Baseiva,2)
			
			var vSet = databaseManager.getFoundSet(globals.GCconex, 'ventasiva')  
				  
				//load record by ID in foundset  
			//vSet.loadRecords(databaseManager.convertToDataSet([uuid]))
			vSet.newRecord();
			var record = vSet.getRecord(vSet.getSelectedIndex())
			record.id = application.getUUID();
			record.idusuario = globals.GClogin_usuario;
			record.cuotaiva = Cuotaiva;
			record.porciva = Ar[i];
			record.baseiva = Baseiva;
			
			databaseManager.saveData(record)
				
			/*	
			query = "INSERT INTO comprasiva "+ 
			        "(id,idusuario,cuotaiva,porciva) "+
			        "VALUES ('"+application.getUUID()+"','"+globals.GClogin_usuario+"',"+Cuotaiva+","+Ar[i]+")";

			done = plugins.rawSQL.executeSQL(globals.GCconex,"cuotaiva",query)
			if (done)
			{
				//flush is required when changes are made in db
				plugins.rawSQL.flushAllClientsCache(globals.GCconex,"cuotaiva")				
				
			}
			else
			{
				msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
				plugins.dialogs.showErrorDialog('Error',  'SQL exception: '+msg,  'Ok')
			}
			*/
		}

	}

	query = "select PorcIva,CuotaIva,BaseIva,BaseIva+CuotaIva from VentasIVA where idusuario ="+globals.GClogin_usuario+ 
			" order by PorcIva desc ";
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, maxReturedRows);
	var maxRows = dataset.getMaxRowIndex()
	
	if(maxRows == 0)
	{
		//nothing sold to this customer
		HTML += '<div align="left"><b style="color:red;" class="largeRed">NO SE HA EMITIDO IVA EN EL PERIODO INTRODUCIDO</b></div>';  //</html>
		html_resumen = HTML
		htmlresum = null
		
	}
	else
	{
//		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
		HTML += '<table border=0 cellpadding="1"  bgcolor="#ffffff" width="100%">\n'
		HTML += '<tr bgcolor="#cccccc"><td colspan="2" class="body"><b>I.V.A. por tipo</td>'+
				'<td align="right" colspan="2" class="body"><b>Base I.V.A.</td>'+
				'<td align="right" colspan="2" class="body"><b>Cuota I.V.A.</td>'+
				'<td align="right" colspan="2" class="body"><b>Total</td></tr>'

		

		for( i = 1 ; i <= maxRows ; i++ )
		{
			dataset.rowIndex = i;
			if(dataset[1] != null && dataset[2] != null)
			{
				for( i = 1 ; i <= maxRows ; i++ )
				{
					dataset.rowIndex = i;
					if(dataset[1] != null && dataset[2] != null)
					{
						/*if(elements['chart_pie'] != null)
						{
							elements.chart_pie.setLegends(i-1,dataset[1])// set legends of chart
							elements.chart_pie.setValues(i-1, 0, dataset[2])
						}*/
						var baseiva = globals.GCROUND(dataset[3],2)
						var cuotaiva = globals.GCROUND(dataset[2],2)
						var total = globals.GCROUND(dataset[4],2)
						HTML += '<tr><td nowrap class="body">'+ dataset[1]+'%'+
						'</td><td nowrap align="right" colspan="3" class="body">'+ utils.numberFormat(baseiva, '###,###,##0.00 €')+'</td>'+
						'</td><td nowrap align="right" colspan="2" class="body">'+ utils.numberFormat(cuotaiva, '###,###,##0.00 €')+'</td>'+
						'</td><td nowrap align="right" colspan="2" class="body">'+ utils.numberFormat(total, '###,###,##0.00 €')+'</td></tr>';
					}
				}					
			}
		}

		var myPie = ''//plugins.VelocityReport.getChart(CHART.PIE, getPieChartDef(dataset),true, 1);
		//var server = plugins.VelocityReport.getServerURL()
		//if(myPie) myPie = utils.stringReplace(myPie.toString(),server+'eastwood/chart','http://chart.apis.google.com/chart')
		htmlresum = '<html><body>'+myPie+'</html></body>';
		
		//put total line at bottom
		/** @type String */
		var totalLine = dataset.getColumnAsArray(2)
		totalLine = totalLine.join('+')
		totalLine = eval(totalLine);
		/** @type String */
		var totalLine2 = dataset.getColumnAsArray(3)
		totalLine2 = totalLine2.join('+')
		totalLine2 = eval(totalLine2);
		/** @type String */
		var totalLine3 = dataset.getColumnAsArray(4)
		totalLine3 = totalLine3.join('+')
		totalLine3 = eval(totalLine3);
		HTML += '<tr><td nowrap colspan="4" align="right" class="body"><b> '+
		utils.numberFormat(totalLine2, '###,###,##0.00 €') /*+ "</b>"*/;
		HTML += '<td nowrap colspan="2" align="right" class="body"><b>'+
		utils.numberFormat(totalLine, '###,###,##0.00 €'); 
		HTML += '<td nowrap colspan="2" align="right" class="body"><b>'+
		utils.numberFormat(totalLine3, '###,###,##0.00 €') + "</b></td></tr>";
		
		HTML += '</table>\n'+'</body>\n' //+'</html>'

		html_resumen = HTML
	}
	return html_resumen
}

/**
 * @return {String}
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"4CADD121-0B98-4910-BB9B-117734374B3E"}
 */
function draw_chartjs()
{
	html_resumen = null;
	htmlresum = null;
	var frm = currentcontroller.getName()
	if(frm == 'frm_nav_main_principalNGGC') {
		frm = forms.frm_nav_main_principalNGGC.elements.sidenav.containedForm;
	}
	elements.chart_topbalance5.clearChart();
	elements.chart_topbalance5.drawChart();

	var HTML = '<html><body>'
	var dfech = forms[frm].DesdeFecha;
	if(!dfech) dfech = new Date(new Date().getFullYear(),new Date().getMonth(),1)
	var hfech = forms[frm].HastaFecha;
	if(!hfech) hfech = new Date(new Date().getFullYear(),new Date().getMonth()+1,0)	
	
	ventasiva_to_ventasiva.loadAllRecords()
	ventasiva_to_ventasiva.deleteAllRecords()
	/*var query = "DELETE FROM comprasiva "+
				"WHERE idusuario ="+globals.GClogin_usuario;
		
		var done = plugins.rawSQL.executeSQL(globals.GCconex,"comprasiva",query)
		if (done)
		{
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache(globals.GCconex,"comprasiva")				
			
		}
		else
		{
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error',  'SQL exception: '+msg,  'Ok')
		}
	*/

	var maxReturedRows = 15;

	var query = "SELECT distinct piva_cfa from tbfacturacabecera " +
				"WHERE piva_cfa IS NOT NULL ORDER BY piva_cfa DESC";
	var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
	var rows = dataset.getMaxRowIndex();
	var Ar = new Array()
	for(var i=1;i<=rows;i++)	
	{		
		Ar[i]= dataset.getValue(i,1)		
	}
	var l = rows
	query = "SELECT distinct piva2_cfa from tbfacturacabecera "+
			"WHERE piva2_cfa IS NOT NULL ORDER BY piva2_cfa DESC"
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
	rows = dataset.getMaxRowIndex();
	for(i=1;i<=rows;i++)	
	{		
		var porc = dataset.getValue(i,1)
		
		if(Ar.indexOf(porc) == -1)
		{
			l += 1;
			Ar[l]= dataset.getValue(i,1)
		}
		
	}
		
	query = "SELECT distinct piva3_cfa from tbfacturacabecera "+
			"WHERE piva3_cfa IS NOT NULL ORDER BY piva3_cfa DESC"
	dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 99999999)
	rows = dataset.getMaxRowIndex();
	for(i=1;i<=rows;i++)	
	{		
		porc = dataset.getValue(i,1)
		if(Ar.indexOf(porc) == -1)
		{
			l += 1;
			Ar[l]= dataset.getValue(i,1)
		}
	}
	rows = l;
	
	
	
	for(i=1;i<=rows;i++)
	{
		var Cuotaiva = 0;
		var Baseiva = 0;
		var piva = Ar[i];
		query = "select ISNULL(SUM(oi.cuotaiva_cfa),0),ISNULL(SUM(oi.impbie_cfa),0) "+
				"from [tbFacturaCabecera] oi "+
				"where (cuotaiva_cfa is not null) AND (fecha_cfa between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
				"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+"') AND piva_cfa = "+piva;
				
		var dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)	
		Cuotaiva += dataset2.getValue(1,1);
		Baseiva += dataset2.getValue(1,2);
		
		query = "select ISNULL(SUM(oi.cuotaiva2_cfa),0),ISNULL(SUM(oi.impbie2_cfa),0) "+
				"from [tbFacturaCabecera] oi "+
				"where (cuotaiva2_cfa is not null) AND (fecha_cfa between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
				"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+"') AND piva2_cfa = "+piva;
				
		dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)	
		Cuotaiva += dataset2.getValue(1,1);
		Baseiva += dataset2.getValue(1,2);
		
		query = "select ISNULL(SUM(oi.cuotaiva3_cfa),0),ISNULL(SUM(oi.impbie3_cfa),0) "+
				"from [tbFacturaCabecera] oi "+
				"where (cuotaiva3_cfa is not null) AND (fecha_cfa between '"+utils.dateFormat(dfech,'dd-MM-yyyy')+
				"' and '"+utils.dateFormat(hfech,'dd-MM-yyyy')+"') AND piva3_cfa = "+piva;
				
		dataset2 = databaseManager.getDataSetByQuery(globals.GCconex, query, null, 1)	
		Cuotaiva += dataset2.getValue(1,1);
		Baseiva += dataset2.getValue(1,2);
		
		if(Baseiva != 0)//(Cuotaiva != 0)
		{
			Cuotaiva = globals.GCROUND(Cuotaiva,2)
			Baseiva = globals.GCROUND(Baseiva,2)
			
			var vSet = databaseManager.getFoundSet(globals.GCconex, 'ventasiva')  
				  
				//load record by ID in foundset  
			//vSet.loadRecords(databaseManager.convertToDataSet([uuid]))
			vSet.newRecord();
			var record = vSet.getRecord(vSet.getSelectedIndex())
			record.id = application.getUUID();
			record.idusuario = globals.GClogin_usuario;
			record.cuotaiva = Cuotaiva;
			record.porciva = Ar[i];
			record.baseiva = Baseiva;
			
			databaseManager.saveData(record)
				
			/*	
			query = "INSERT INTO comprasiva "+ 
			        "(id,idusuario,cuotaiva,porciva) "+
			        "VALUES ('"+application.getUUID()+"','"+globals.GClogin_usuario+"',"+Cuotaiva+","+Ar[i]+")";

			done = plugins.rawSQL.executeSQL(globals.GCconex,"cuotaiva",query)
			if (done)
			{
				//flush is required when changes are made in db
				plugins.rawSQL.flushAllClientsCache(globals.GCconex,"cuotaiva")				
				
			}
			else
			{
				msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
				plugins.dialogs.showErrorDialog('Error',  'SQL exception: '+msg,  'Ok')
			}
			*/
		}

	}

	query = "select PorcIva,CuotaIva,BaseIva,BaseIva+CuotaIva from VentasIVA where idusuario ="+globals.GClogin_usuario+ 
			" order by PorcIva desc ";
	var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, maxReturedRows);
	var maxRows = ds.getMaxRowIndex()
	
	if(maxRows == 0)
	{
		//nothing sold to this customer
		HTML += '<div align="left"><b style="color:red;" class="largeRed">NO SE HA EMITIDO IVA EN EL PERIODO INTRODUCIDO</b></div>';  //</html>
		html_resumen = HTML
		htmlresum = null
		
	}
	else
	{
//		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
		HTML += '<table border=0 cellpadding="1"  bgcolor="#ffffff" width="100%">\n'
		HTML += '<tr bgcolor="#cccccc"><td colspan="2" class="body"><b>I.V.A. por tipo</td>'+
				'<td align="right" colspan="2" class="body"><b>Base I.V.A.</td>'+
				'<td align="right" colspan="2" class="body"><b>Cuota I.V.A.</td>'+
				'<td align="right" colspan="2" class="body"><b>Total</td></tr>'
				
				var data = {
					type: '',
					data: {
						labels: [],
						datasets: []
					}
				}
				var datadatasets = {
					data: [],
					backgroundColor: [],
					hoverOffset: 4
				}
				//var label_callback2 = clientutils.generateBrowserFunction("function(context) { return ' $'+context.dataset.data[context.dataIndex] }");
				var options = {
					responsive: true,
					tooltips: {
						callbacks: {
							label: {
								isFunction: true,
								params: ['tooltipItem', 'data'],
								expression: "return ' $'+data.datasets[0].data[tooltipItem.index];"			
							}						
						}
					},
					plugins: {
			            legend: {
			                labels: {
			                    font: {
			                        /*family: 'Arial',
			                        size: 12,  */ 
			                        fontColor: 'black',
			                    	style: 'normal',
			                        weight: 'bold'
			                    }
			                }
			            }
			        }
				}
				
				
				if(!chartjstype) chartjstype = 'pie';
				data.type = chartjstype;
		

		for( i = 1 ; i <= maxRows ; i++ )
		{
			ds.rowIndex = i;
			if(ds[1] != null && ds[2] != null)
			{
				for( i = 1 ; i <= maxRows ; i++ )
				{
					ds.rowIndex = i;
					if(ds[1] != null && ds[2] != null && ds[3] != null && ds[4] != null)
					{
						/*if(elements['chart_pie'] != null)
						{
							elements.chart_pie.setLegends(i-1,dataset[1])// set legends of chart
							elements.chart_pie.setValues(i-1, 0, dataset[2])
						}*/
						var baseiva = globals.GCROUND(ds[3],2)
						var cuotaiva = globals.GCROUND(ds[2],2)
						var total = globals.GCROUND(ds[4],2)
						HTML += '<tr><td nowrap class="body">'+ ds[1]+'%'+
						'</td><td nowrap align="right" colspan="3" class="body">'+ utils.numberFormat(baseiva, '###,###,##0.00 €')+'</td>'+
						'</td><td nowrap align="right" colspan="2" class="body">'+ utils.numberFormat(cuotaiva, '###,###,##0.00 €')+'</td>'+
						'</td><td nowrap align="right" colspan="2" class="body">'+ utils.numberFormat(total, '###,###,##0.00 €')+'</td></tr>';
						
						data.data.labels.push(ds[1]+' %');
						datadatasets.data.push(total);
						datadatasets.backgroundColor.push(Colores[i-1]);
					}
					if(i==maxRows) {
						data.data.datasets.push(datadatasets)
					}
				}	
				elements.chart_topbalance5.setData(data);
				elements.chart_topbalance5.setOptions(options);
			}
		}

		
		
		//put total line at bottom
		/** @type String */
		var totalLine = ds.getColumnAsArray(2)
		totalLine = totalLine.join('+')
		totalLine = eval(totalLine);
		/** @type String */
		var totalLine2 = ds.getColumnAsArray(3)
		totalLine2 = totalLine2.join('+')
		totalLine2 = eval(totalLine2);
		/** @type String */
		var totalLine3 = ds.getColumnAsArray(4)
		totalLine3 = totalLine3.join('+')
		totalLine3 = eval(totalLine3);
		HTML += '<tr><td nowrap colspan="4" align="right" class="body"><b> '+
		utils.numberFormat(totalLine2, '###,###,##0.00 €') /*+ "</b>"*/;
		HTML += '<td nowrap colspan="2" align="right" class="body"><b>'+
		utils.numberFormat(totalLine, '###,###,##0.00 €'); 
		HTML += '<td nowrap colspan="2" align="right" class="body"><b>'+
		utils.numberFormat(totalLine3, '###,###,##0.00 €') + "</b></td></tr>";
		
		HTML += '</table>\n'+'</body>\n' //+'</html>'

		html_resumen = HTML
	}
	return html_resumen
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D955CB2A-7900-4B59-9AF2-BFD5EC54D27B"}
 */
function onResize(event) {
	if(!chartjstype) chartjstype = 'pie';	
	draw_chartjs()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 *
 *
 *
 * @properties={typeid:24,uuid:"F6DA79B2-90F8-4FC3-9B65-74A628BD9DFD"}
 */
function onShow(firstShow, event) {
	elements.chart_topbalance5.clearChart()
	chartjstype = 'pie';
	draw_chartjs()
	
}
