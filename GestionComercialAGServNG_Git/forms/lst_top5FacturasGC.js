/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2B53302C-8E0C-4ED4-A52C-B464EF8064D9"}
 */
var html_sales = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B88E0412-D8C1-4D5A-B7EB-CE6DBB66183F",variableType:4}
 */
var useEastwood = 0;

/**
 * @type {Array<String>}
 *
 *
 * @properties={typeid:35,uuid:"0EBB49EA-D6A1-4614-AC62-796FD177F51A",variableType:-4}
 */
var Colores = ['#0080FF', '#00CC66', '#FF0000', '#FFFF00' , '#CCCCCC', '#99FFFF', '#006666', '#FFCCCC', '#FFCC99', '#FF3399', '#FF8000', '#B266FF', '#999900', '#3333FF','#B2FF66', '#FF0040', '#088A85', '#FF8000', '#58FAAC', '#00BFFF'];

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"904B6462-911D-4C86-8C08-D5D47A9048A8"}
 */
var html = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A92C1FEC-F8FD-49BA-8170-6DF9D2700547"}
 */
var chartjstype = '';

/**
 * @properties={typeid:24,uuid:"B58C9543-FE13-40F1-BE1C-F9C6754C0A6E"}
 * @SuppressWarnings(deprecated)
 */
function draw_chart()
{
	if(forms.FrmFacturasGC.foundset.getSize() > 0)
	{
		var i;
		var HTML = '<html><body>'
		var year = forms.FrmFacturasGC.fecha_cfa.getFullYear()
	
		var maxReturedRows = 5;
		var query = "select cli.DescCliente, ISNULL(SUM(oi.impbie_cfa),0)+ISNULL(SUM(oi.impbie2_cfa),0)+ISNULL(SUM(oi.impbie3_cfa),0) "+//SUM(oi.impnee_cfa)
					"from [tbFacturaCabecera] oi LEFT JOIN "+
					"[tbMaestroClientes] cli ON oi.clie_cfa = cli.IdCliente "+
					"where year(fecha_cfa) = "+year+
					" group by cli.DescCliente order by 2 desc";
				
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
			HTML += "<div align='center'><b class='largeRed'>No hay facturas.</b></div>";  //</html>
			html_sales = HTML
			//elements.chart_pie.visible = false;
		}
		else
		{
	//		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
			HTML += "<table width='100%' border='0' cellpadding='1' bgcolor='#ffffff'>"
			HTML += "<tr bgcolor='#cccccc'><td colspan='2' class='body'><b>Top 5 Clientes ("+year+")</b></td></tr>"
	
			//elements.chart_pie.visible = true;
	
			for( i = 1 ; i <= maxRows ; i++ )
			{
				dataset.rowIndex = i;
				if(dataset[1] != null && dataset[2] != null)
				{					
					HTML += "<tr><td nowrap class='body'>"+ utils.stringLeft(dataset[1],40)+
					"</td><td nowrap align='right' class='body'>"+ utils.numberFormat(dataset[2], '###,###,##0.00 €')+"</td></tr>";
				}
			}
	
			var myPie = ''//plugins.VelocityReport.getChart(CHART.PIE, getPieChartDef(dataset),true, 1);			
			//var server = plugins.VelocityReport.getServerURL()
			//if(myPie) myPie = utils.stringReplace(myPie.toString(),server+'eastwood/chart','http://chart.apis.google.com/chart')
			//if(myPie) myPie = utils.stringReplace(myPie.toString(),server+'eastwood/chart','https://quickchart.io/chart')
			/*https://quickchart.io/chart?v=2.9.4&c=%7B%0A%20%20%22type%22%3A%20%22outlabeledPie%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22ONE%22%2C%20%22TWO%22%2C%20%22THREE%22%2C%20%22FOUR%22%2C%20%22FIVE%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%5B%22%23FF3784%22%2C%20%22%2336A2EB%22%2C%20%22%234BC0C0%22%2C%20%22%23F77825%22%2C%20%22%239966FF%22%5D%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%0A%20%20%20%20%7D%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22plugins%22%3A%20%7B%0A%20%20%20%20%20%20%22legend%22%3A%20false%2C%0A%20%20%20%20%20%20%22outlabels%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22text%22%3A%20%22%25l%20%25p%22%2C%0A%20%20%20%20%20%20%20%20%22color%22%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%22stretch%22%3A%2035%2C%0A%20%20%20%20%20%20%20%20%22font%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22resizable%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%22minSize%22%3A%2012%2C%0A%20%20%20%20%20%20%20%20%20%20%22maxSize%22%3A%2018%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D
			 * myPie = "https://quickchart.io/chart?c={type:'pie',data:{labels:["
			if(maxRows == 5) myPie += "'"+utils.stringLeft(dataset.getValue(1,1),40)+"','"+utils.stringLeft(dataset.getValue(2,1),40)+"', '"+utils.stringLeft(dataset.getValue(3,1),40)+"','"+utils.stringLeft(dataset.getValue(4,1),40)+"', '"+utils.stringLeft(dataset.getValue(5,1),40)+"'], datasets:[{data:["+utils.numberFormat(dataset.getValue(1,2), '###,###,##0.00')+","+utils.numberFormat(dataset.getValue(2,2), '###,###,##0.00')+","+utils.numberFormat(dataset.getValue(3,2), '###,###,##0.00')+","+utils.numberFormat(dataset.getValue(4,2), '###,###,##0.00')+","+utils.numberFormat(dataset.getValue(5,2), '###,###,##0.00')+"]}]}}"
			else if(maxRows == 4) myPie += "'"+utils.stringLeft(dataset.getValue(1,1),40)+"','"+utils.stringLeft(dataset.getValue(2,1),40)+"', '"+utils.stringLeft(dataset.getValue(3,1),40)+"','"+utils.stringLeft(dataset.getValue(4,1),40)+"], datasets:[{data:["+utils.numberFormat(dataset.getValue(1,2), '###,###,##0.00 €')+","+utils.numberFormat(dataset.getValue(2,2), '###,###,##0.00 €')+","+utils.numberFormat(dataset.getValue(3,2), '###,###,##0.00 €')+","+utils.numberFormat(dataset.getValue(4,2), '###,###,##0.00 €')+"]}]}}"
			else if(maxRows == 3) myPie += myPie += "'"+utils.stringLeft(dataset.getValue(1,1),40)+"','"+utils.stringLeft(dataset.getValue(2,1),40)+"', '"+utils.stringLeft(dataset.getValue(3,1),40)+"'], datasets:[{data:["+utils.numberFormat(dataset.getValue(1,2), '###,###,##0.00 €')+","+utils.numberFormat(dataset.getValue(2,2), '###,###,##0.00 €')+","+utils.numberFormat(dataset.getValue(3,2), '###,###,##0.00 €')+"]}]}}"
			else if(maxRows == 2) myPie += myPie += "'"+utils.stringLeft(dataset.getValue(1,1),40)+"','"+utils.stringLeft(dataset.getValue(2,1),40)+"'], datasets:[{data:["+utils.numberFormat(dataset.getValue(1,2), '###,###,##0.00 €')+","+utils.numberFormat(dataset.getValue(2,2), '###,###,##0.00 €')+"]}]}}"
			else if(maxRows == 1) myPie += myPie += myPie += "'"+utils.stringLeft(dataset.getValue(1,1),40)+"'], datasets:[{data:["+utils.numberFormat(dataset.getValue(1,2), '###,###,##0.00 €')+"]}]}}"
			application.output(myPie)*/
			html = '<html><head></head><body>'+myPie+'</body></html>';
			/*crear un gráfico circular en 3D
			 <html>
				  <head>
				    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
				    <script type="text/javascript">
				      google.charts.load("current", {packages:["corechart"]});
				      google.charts.setOnLoadCallback(drawChart);
				      function drawChart() {
				        var data = google.visualization.arrayToDataTable([
				          ['Task', 'Top 5 Facturas Clientes'],
				          ['Work',     11],
				          ['Eat',      2],
				          ['Commute',  2],
				          ['Watch TV', 2],
				          ['Sleep',    7]
				        ]);
				
				        var options = {
				          title: 'Top 5 Facturas Clientes',
				          is3D: true,
				        };
				
				        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
				        chart.draw(data, options);
				      }
				    </script>
				  </head>
				  <body>
				    <div id="piechart_3d" style="width: 900px; height: 500px;"></div>
				  </body>
				</html>
			 */
			
			application.output(html)
			//put total line at bottom
			/** @type String */
			var totalLine = dataset.getColumnAsArray(2)
			totalLine = totalLine.join('+')
			totalLine = eval(totalLine);
			HTML += "<tr><td nowrap colspan='2' align='right' class='body'><b>Total: "+
			utils.numberFormat(totalLine, '###,###,##0.00 €') + "</b></td></tr>";
	
			HTML += "</table>"+"</body>" +'</html>'
	
			html_sales = HTML
			
			//var chartURL = 'http://chart.apis.google.com/chart?chs=372x201&chd=t:20,35,20,25&cht=p3&chl=JAN|FEB|MAR|APR';

		    //globals.chartImage=plugins.http.getMediaData(chartURL);

			
		}
		
	}
}

/**
  *
 * @properties={typeid:24,uuid:"8C27B351-9FB3-4A67-BCC8-F898FA438EAB"}
 * @SuppressWarnings(deprecated)
 */
function draw_chartjs()
{
	if(forms.FrmFacturasGC.foundset.getSize() > 0)
	{
		var i;
		var HTML = '<html><body>';
		var year = forms.FrmFacturasGC.fecha_cfa.getFullYear();
		elements.chart_topfacturas.clearChart();
		elements.chart_topfacturas.drawChart()
	
		var maxReturedRows = 5;
		var query = "select cli.DescCliente, ISNULL(SUM(oi.impbie_cfa),0)+ISNULL(SUM(oi.impbie2_cfa),0)+ISNULL(SUM(oi.impbie3_cfa),0) "+//SUM(oi.impnee_cfa)
					"from [tbFacturaCabecera] oi LEFT JOIN "+
					"[tbMaestroClientes] cli ON oi.clie_cfa = cli.IdCliente "+
					"where year(fecha_cfa) = "+year+
					" group by cli.DescCliente order by 2 desc";
				
		var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, maxReturedRows);
		var maxRows = ds.getMaxRowIndex()
		if(maxRows == 0)
		{
			totalsum = 0;
		}
		else
		{
			var ds_totalarray = ds.getColumnAsArray(2);
			var totalsum = ds_totalarray.reduce( function(total, amount) {
			  return total + amount
			});
			if(!totalsum) totalsum = 0;
		}
		
		if(maxRows == 0)
		{
			//nothing sold to this customer
			HTML += "<div align='center'><b class='largeRed'>No hay facturas.</b></div>";  //</html>
			html_sales = HTML
			//elements.chart_pie.visible = false;
		}
		else
		{
			HTML += "<table width='100%' border='0' cellpadding='1' bgcolor='#ffffff'>"
			HTML += "<tr bgcolor='#cccccc'><td colspan='2' class='body'><b>Top 5 Clientes ("+year+")</b></td></tr>"
	
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
				if(ds[1] != null && ds[2] != null && ds[2] != 0)
				{	
					if(totalsum && totalsum != 0) {
						var ventascli = ds[2];
						var percentage = (ventascli / totalsum) * 100;		
						percentage = globals.GCROUND(percentage,2);
						percentage = utils.numberFormat(percentage, '###,###,##0.00');
					}
					else percentage = null;
					HTML += "<tr><td nowrap class='body'><b>"+ utils.stringLeft(ds[1],40)
					if(!percentage) HTML += "</td><td nowrap align='right' class='body'><b>"+ utils.numberFormat(ds[2], '###,###,##0.00 €')+"</b></td></tr>";
					else HTML += "</td><td nowrap align='right' class='body'><b>"+ "("+percentage+"%) "+ utils.numberFormat(ds[2], '###,###,##0.00 €')+"</b></td></tr>";
					
					data.data.labels.push(utils.stringLeft(ds[1],40));
					datadatasets.data.push(ds[2]);
					datadatasets.backgroundColor.push(Colores[i-1]);
				}
				if(i==maxRows) {
					data.data.datasets.push(datadatasets)
				}
			}
			elements.chart_topfacturas.setData(data);
			elements.chart_topfacturas.setOptions(options);
			
			
			//put total line at bottom
			//** @type String */
			//var totalLine = ds.getColumnAsArray(2)
			//totalLine = totalLine.join('+')
			//totalLine = eval(totalLine);
			//HTML += "<tr><td nowrap colspan='2' align='right' class='body'><b>Total: "+
			//utils.numberFormat(totalLine, '###,###,##0.00 €') + "</p></td></tr>";
			HTML += "<tr><td nowrap colspan='2' align='right' class='body'><b>Total: "+
			utils.numberFormat(totalsum, '###,###,##0.00 €') + "</b></td></tr>";
	
			HTML += "</table>"+"</body>" +'</html>'
			
			html_sales = HTML;
			
		}
		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D9AEEA5-B55F-4EEA-9516-26DA03F0CE83"}
 */
function btn_topventas(event) {
	// TODO Auto-generated method stub
	if(globals.GCisEditing()) forms.FrmFacturasGC.btn_cancel()
	var year = forms.FrmFacturasGC.fecha_cfa.getFullYear()
	globals.btn_runJasperReportVentasClientesGC(year)
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AF48B648-EF6F-4792-9407-22143D7CC49E"}
 */
function onResize(event) {
	//draw_chart()	
	//draw_chart2()	
	//draw_chart3()	
	if(!chartjstype) chartjstype = 'pie';	
	draw_chartjs()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} M
 *
 *@return {String}
 * @properties={typeid:24,uuid:"369B3D8F-329A-4E5C-9FD9-A8D4CB110197"}
 */
function getNomMes(M){
	switch( M )
	{
		case 1: 
		{
			return 'Enero';
			
		}
		case 2: 
		{
			return 'Febrero';
			
		}
		case 3: 
		{
			return 'Marzo';
			
		}
		case 4: 
		{
			return 'Abril';
			
		}
		case 5: 
		{
			return 'Mayo';
			
		}
		case 6: 
		{
			return 'Junio';
			
		}
		case 7: 
		{
			return 'Julio';
			
		}
		case 8: 
		{
			return'Agosto';
			
		}
		case 9: 
		{
			return 'Septiembre';
			
		}
		case 10: 
		{
			return 'Octubre';
			
		}
		case 11: 
		{
			return 'Noviembre';
			
		}
		case 12: 
		{
			return 'Diciembre';
			
		}
		default: 
		{
			return null
		}		
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} M
 *
 *@return {String}
 * @properties={typeid:24,uuid:"B7E2F26F-6857-47C7-91DC-11F549517174"}
 */
function getNomMes2(M){
	switch( M )
	{
		case 1: 
		{
			return 'ENE';
			
		}
		case 2: 
		{
			return 'FEB';
			
		}
		case 3: 
		{
			return 'MAR';
			
		}
		case 4: 
		{
			return 'ABR';
			
		}
		case 5: 
		{
			return 'MAY';
			
		}
		case 6: 
		{
			return 'JUN';
			
		}
		case 7: 
		{
			return 'JUL';
			
		}
		case 8: 
		{
			return'AGO';
			
		}
		case 9: 
		{
			return 'SEP';
			
		}
		case 10: 
		{
			return 'OCT';
			
		}
		case 11: 
		{
			return 'NOV';
			
		}
		case 12: 
		{
			return 'DIC';
			
		}
		default: 
		{
			return null
		}		
	}
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C7E00DC9-9C9A-47F5-B6F0-3F960D4DA508"}
 * @SuppressWarnings(deprecated)
 */
function onRecordSelection(event) {
	elements.chart_topfacturas.clearChart()
	if(forms.FrmFacturasGC.foundset.getSize() > 0)
	{
		if(!chartjstype) chartjstype = 'pie';
		draw_chartjs()
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E84940CF-C4E1-4A95-892C-A9DA06B4BEFE"}
 */
function onShow(firstShow, event) {
	elements.chart_topfacturas.clearChart()
	if(forms.FrmFacturasGC.foundset.getSize() > 0)
	{
		chartjstype = 'pie';
		draw_chartjs()
	}
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"21F71A71-CA9C-4327-A09D-3CA4B1B33602"}
 */
function piechart_selection(event) {
	elements.chart_topfacturas.clearChart()
	if(forms.FrmFacturasGC.foundset.getSize() > 0)
	{
		chartjstype = 'pie';
		elements.chart_topfacturas.type = chartjstype;
		draw_chartjs()
	}
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"444244A6-8E36-4DC1-B1B2-89DB5D994F55"}
 */
function barchart_selection(event) {
	elements.chart_topfacturas.clearChart()
	if(forms.FrmFacturasGC.foundset.getSize() > 0)
	{
		chartjstype = 'bar';
		elements.chart_topfacturas.type = chartjstype;
		draw_chartjs()
	}
}
