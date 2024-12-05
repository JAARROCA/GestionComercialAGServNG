/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D88E4A19-0DBA-4EF7-86B6-79ED91819E62"}
 */
var html_sales = '';

/**
 * @type {Array<String>}
 *
 *
 *
 * @properties={typeid:35,uuid:"AB9BF4AA-AEDC-44CD-8122-E34B7EEDDDEA",variableType:-4}
 */
var Colores = ['#0080FF', '#00CC66', '#FF0000', '#FFFF00' , '#CCCCCC', '#99FFFF', '#006666', '#FFCCCC', '#FFCC99', '#FF3399', '#FF8000', '#B266FF', '#999900', '#3333FF','#B2FF66', '#FF0040', '#088A85', '#FF8000', '#58FAAC', '#00BFFF'];

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"09EEFB3F-F9D5-43F8-AA9A-38AA99E49D02"}
 */
var html = '';

/**
 * @properties={typeid:24,uuid:"0A8F8CE5-3279-4597-BED4-AEE1B35B875B"}
 * @SuppressWarnings(deprecated)
 */
function draw_chart()
{
	if(forms.FrmPedidosGC.foundset.getSize() > 0)
	{
		var i;
		var HTML = '<html><body>'
		var year = forms.FrmPedidosGC.fecha_cot.getFullYear()
		
		var maxReturedRows = 5;
		var query = "select oi.nomcl_cot , SUM(oi.impbre_cot) "+
		"from cortraba oi "+
		"where year(oi.fecha_cot) = "+year+
		" group by oi.nomcl_cot "+
		"order by 2 desc"
	
		//clear pieChart
		/*for(i =1 ; i<=5 ; i++)
		{
			if(elements['chart_pie'] != null)
			{
				var vMyColor = Packages.com.servoy.j2db.util.PersistHelper.createColor(Colores[i-1])
				elements.chart_pie.setColors(i-1,vMyColor)
				elements.chart_pie.setLegends(i-1,"")// set legends of chart
				elements.chart_pie.setValues(i-1, 0, 0)
				elements.chart_pie.setFont(new java.awt.Font('Verdana','0','12'))
			}
		}*/
		var dataset = databaseManager.getDataSetByQuery(globals.GCconex, query, null, maxReturedRows);
		var maxRows = dataset.getMaxRowIndex()
	
		if(maxRows == 0)
		{
			//nothing sold to this customer
			HTML += '<div align="center"><b class="largeRed">No hay pedidos.</b></div>';  //</html>
			html_sales = HTML
			//elements.chart_pie.visible = false;
		}
		else
		{
	//		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
			HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff">\n'
			HTML += '<tr bgcolor="#cccccc"><td colspan=2 class="body"><b>Top 5 Clientes</b></td></tr>'
	
			//elements.chart_pie.visible = true;
	
			for( i = 1 ; i <= maxRows ; i++ )
			{
				dataset.rowIndex = i;
				if(dataset[1] != null && dataset[2] != null)
				{
					/*if(elements['chart_pie'] != null)
					{
						elements.chart_pie.setLegends(i-1,dataset[1])// set legends of chart
						elements.chart_pie.setValues(i-1, 0, dataset[2])
						elements.chart_pie.setFont(new java.awt.Font('Verdana','0','12'))
					}*/
					HTML += '<tr><td nowrap class="body">'+ dataset[1]+
					'</td><td nowrap align="right" class="body">'+ utils.numberFormat(dataset[2], '###,###,##0.00 €')+'</td></tr>';
				}
			}
	
			//var myPie = plugins.VelocityReport.getChart(CHART.PIE, getPieChartDef(dataset),true, 1);
			//var server = plugins.VelocityReport.getServerURL()
			//if(myPie) myPie = utils.stringReplace(myPie.toString(),server+'eastwood/chart','http://chart.apis.google.com/chart')
			//html = '<html><body>'+myPie+'</html></body>';
			
			//put total line at bottom
			/** @type String */
			var totalLine = dataset.getColumnAsArray(2)
			totalLine = totalLine.join('+')
			totalLine = eval(totalLine);
			HTML += '<tr><td nowrap colspan=2 align="right" class="body"><b>Total: '+
			utils.numberFormat(totalLine, '###,###,##0.00 €') + "</b></td></tr>";
	
			HTML += '</table>\n'+'</body>\n' //+'</html>'
	
			html_sales = HTML
		}
	}
}

/**
*
* @SuppressWarnings(deprecated)
*
 * @properties={typeid:24,uuid:"3324960D-B74A-4459-A1E8-2A75DAA45B70"}
 */
function draw_chartjs()
{
	if(forms.FrmFacturasGC.foundset.getSize() > 0)
	{
		var i;
		var HTML = '<html><body>';
		var year = forms.FrmPedidosGC.fecha_cot.getFullYear();
		elements.chart_toppedidos.clearChart();
		elements.chart_toppedidos.drawChart()
	
		var maxReturedRows = 5;
		var query = "select oi.nomcl_cot , SUM(oi.impbre_cot) "+
		"from cortraba oi "+
		"where year(oi.fecha_cot) = "+year+
		" group by oi.nomcl_cot "+
		"order by 2 desc"
				
		var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, maxReturedRows);
		var maxRows = ds.getMaxRowIndex()
	
		if(maxRows == 0)
		{
			//nothing sold to this customer
			HTML += "<div align='center'><b class='largeRed'>No hay pedidos.</b></div>";  //</html>
			html_sales = HTML
			//elements.chart_pie.visible = false;
		}
		else
		{
			HTML += "<table width='100%' border='0' cellpadding='1' bgcolor='#ffffff'>"
			HTML += "<tr bgcolor='#cccccc'><td colspan='2' class='body'><b>Top 5 Clientes ("+year+")</b></td></tr>"
	
			var data = {
				type: 'pie',
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
				}
			}
	
			for( i = 1 ; i <= maxRows ; i++ )
			{
				ds.rowIndex = i;
				if(ds[1] != null && ds[2] != null && ds[2] != 0)
				{					
					HTML += "<tr><td nowrap class='body'>"+ utils.stringLeft(ds[1],40)+
					"</td><td nowrap align='right' class='body'>"+ utils.numberFormat(ds[2], '###,###,##0.00 €')+"</td></tr>";
					
					
					data.data.labels.push(utils.stringLeft(ds[1],40));
					datadatasets.data.push(ds[2]);
					datadatasets.backgroundColor.push(Colores[i-1]);
				}
				if(i==maxRows) {
					data.data.datasets.push(datadatasets)
				}
			}
			elements.chart_toppedidos.setData(data);
			elements.chart_toppedidos.setOptions(options);
			
			
			//put total line at bottom
			/** @type String */
			var totalLine = ds.getColumnAsArray(2)
			totalLine = totalLine.join('+')
			totalLine = eval(totalLine);
			HTML += "<tr><td nowrap colspan='2' align='right' class='body'><b>Total: "+
			utils.numberFormat(totalLine, '###,###,##0.00 €') + "</b></td></tr>";
	
			HTML += "</table>"+"</body>" +'</html>'
	
			html_sales = HTML;
			
		}
		
	}
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"4318FC91-5227-4872-B280-06E724B12DC2"}
 */
function onResize(event) {
	elements.chart_toppedidos.clearChart()
	if(forms.FrmPedidosGC.foundset.getSize() > 0)
	{
		draw_chartjs()
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"EA6893C2-89BA-4C6A-BB5C-DEADDB316989"}
 */
function onShow(firstShow, event) {
	elements.chart_toppedidos.clearChart()
	if(forms.FrmPedidosGC.foundset.getSize() > 0)
	{
		draw_chartjs()
	}
}
