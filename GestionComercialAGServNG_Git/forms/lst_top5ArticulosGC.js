/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"14AE1A06-EA4D-44A6-AF2F-CDB29E115AF4",variableType:4}
 */
var agno = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"93C6A51D-5A74-494E-93E7-C514E4B0D37B"}
 */
var html_sales = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C62BD314-63AA-4A04-94E1-AC5455A85C5F",variableType:4}
 */
var useEastwood = 0;

/**
 * @type {Array<String>}
 *
 *
 * @properties={typeid:35,uuid:"145FB5A0-2943-422F-B3BA-8CCB54EAFE8E",variableType:-4}
 */
var Colores = ['#0080FF', '#00CC66', '#FF0000', '#FFFF00' , '#CCCCCC'];

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1799A0CC-FBF9-44A0-936A-87B8533F19E6"}
 */
var html = '';

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"F39E87BA-DBD5-40F9-95FA-791A3F93CB6E"}
 */
var chartjstype = '';

/**
 * @properties={typeid:24,uuid:"104B6201-0056-4135-965D-969872CD80EA"}
 * @SuppressWarnings(deprecated)
 */
function draw_chart()
{
	if(!agno) agno = new Date().getFullYear()
	if(forms.FrmFacturasGC.foundset.getSize() > 0)
	{
		
		var i;
		var HTML = '<html><body>'
		var year = agno//new Date().getFullYear()
	
		var maxReturedRows = 5;
		var query = "select art.Descripcion, SUM(oi.impor_lfa),art.codigo "+
					"from [tbFacturaLinea] oi LEFT JOIN "+
					"[tbMaestroArticulos] art ON oi.ref_lfa = art.Codigo LEFT JOIN "+
					"[tbFacturaCabecera] ai ON oi.eje_lfa = ai.eje_cfa and "+
					"oi.ser_lfa = ai.ser_cfa and oi.nup_lfa = ai.nup_cfa "+
					"where year(fecha_cfa) = "+year+" AND art.Descripcion IS NOT NULL AND oi.impor_lfa IS NOT NULL "+
					" group by art.Descripcion,art.codigo order by 2 desc";
					
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
			HTML += '<div align="center"><b style="color:red;" class="largeRed">No hay ventas de Articulos.</b></div>';  //</html>
			html_sales = HTML
			html = null
			//elements.chart_pie.visible = false;
		}
		else
		{
	//		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
			HTML += "<table width='100%' border='0' cellpadding='1' bgcolor='#ffffff'>"
			HTML += "<tr bgcolor='#cccccc'><td colspan='2' class='body'><b>Top 5 Articulos ("+year+")</b></td></tr>"
	
			//elements.chart_pie.visible = true;
	
			for( i = 1 ; i <= maxRows ; i++ )
			{
				dataset.rowIndex = i;
				if(dataset[1] != null && dataset[2] != null)
				{
					/*if(elements['chart_pie'] != null)
					{
						var cli  = utils.stringLeft(dataset[1],40)
						elements.chart_pie.setLegends(i-1,cli)// set legends of chart
						elements.chart_pie.setValues(i-1, 0, dataset[2])
						elements.chart_pie.setFont(new java.awt.Font('Verdana','0','12'))
					}*/
					HTML += "<tr><td nowrap class='body'>"+ dataset[3]+' - '+dataset[1]+
					"</td><td nowrap align='right' class='body'>"+ utils.numberFormat(dataset[2], '###,###,##0.00 €')+"</td></tr>";
				}
			}
	
			var myPie = ''//plugins.VelocityReport.getChart(CHART.PIE, getPieChartDef(dataset),true, 1);
			//var server = plugins.VelocityReport.getServerURL()
			//if(myPie) myPie = utils.stringReplace(myPie.toString(),server+'eastwood/chart','http://chart.apis.google.com/chart')
			html = '<html><head></head><body>'+myPie+'</body></html>';
			
			//put total line at bottom
			/** @type String */
			var totalLine = dataset.getColumnAsArray(2)
			totalLine = totalLine.join('+')
			totalLine = eval(totalLine);
			HTML += "<tr><td nowrap colspan='2' align='right' class='body'><b>Total: "+
			utils.numberFormat(totalLine, '###,###,##0.00 €') + "</b></td></tr>";
	
			HTML += "</table>"+"</body>" +'</html>'
	
			html_sales = HTML
		}
		
	}
}

/**
 * @SuppressWarnings(deprecated)
 *
 * @properties={typeid:24,uuid:"8C6B313F-4399-477C-81CB-415721EF4C16"}
 */
function draw_chartjs()
{
	if(!agno) agno = new Date().getFullYear()
	if(forms.FrmFacturasGC.foundset.getSize() > 0)
	{
		
		var i;
		var HTML = '<html><body>'
		var year = agno//new Date().getFullYear()
	
		var maxReturedRows = 5;
		var query = "select art.Descripcion, SUM(oi.impor_lfa),art.codigo "+
					"from [tbFacturaLinea] oi LEFT JOIN "+
					"[tbMaestroArticulos] art ON oi.ref_lfa = art.Codigo LEFT JOIN "+
					"[tbFacturaCabecera] ai ON oi.eje_lfa = ai.eje_cfa and "+
					"oi.ser_lfa = ai.ser_cfa and oi.nup_lfa = ai.nup_cfa "+
					"where year(fecha_cfa) = "+year+" AND art.Descripcion IS NOT NULL AND oi.impor_lfa IS NOT NULL "+
					" group by art.Descripcion,art.codigo order by 2 desc";
					
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
		var ds = databaseManager.getDataSetByQuery(globals.GCconex, query, null, maxReturedRows);
		var maxRows = ds.getMaxRowIndex();
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
			HTML += '<div align="center"><b style="color:red;" class="largeRed">No hay ventas de Articulos.</b></div>';  //</html>
			html_sales = HTML
			html = null
			//elements.chart_pie.visible = false;
		}
		else
		{
	//		HTML += '<table width=145 border=0 cellpadding=1 bgcolor="#ffffff" width=100%>\n'
			HTML += "<table width='100%' border='0' cellpadding='1' bgcolor='#ffffff'>"
			HTML += "<tr bgcolor='#cccccc'><td colspan='2' class='body'><b>Top 5 Articulos ("+year+")</b></td></tr>"
	
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
					HTML += "<tr><td nowrap class='body'>"+ ds[3]+' - '+ds[1]
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
			elements.chart_top5articulos.setData(data);
			elements.chart_top5articulos.setOptions(options);
			
			
			//put total line at bottom
			//** @type String */
			//var totalLine = ds.getColumnAsArray(2)
			//totalLine = totalLine.join('+')
			//totalLine = eval(totalLine);
			//HTML += "<tr><td nowrap colspan='2' align='right' class='body'><b>Total: "+
			//utils.numberFormat(totalLine, '###,###,##0.00 €') + "</b></td></tr>";
			HTML += "<tr><td nowrap colspan='2' align='right' class='body'><b>Total: "+
			utils.numberFormat(totalsum, '###,###,##0.00 €') + "</b></td></tr>";
	
	
			HTML += "</table>"+"</body>" +'</html>'
	
			html_sales = HTML
		}
		
	}
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A4DB2DBA-701D-449A-8BD5-4D50D2291DAE"}
 */
function onResize(event) {
	// TODO Auto-generated method stub
	draw_chartjs()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"191A9641-1B2D-414F-B48E-AE2786F8F901"}
 */
function onShow(firstShow, event) {
	agno = new Date().getFullYear()
	elements.chart_top5articulos.clearChart()
	if(forms.FrmArticulosGC.foundset.getSize() > 0 &&
	forms.FrmFacturasGC.foundset.getSize() > 0)
	{
		chartjstype = 'pie';
		draw_chartjs()
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
  * @properties={typeid:24,uuid:"E029A45D-DD31-48F3-8EB5-FE480FFD4B96"}
 */
function onDataChangeagno() {
	if(!agno) agno = new Date().getFullYear()
	elements.chart_top5articulos.clearChart()
	if(forms.FrmArticulosGC.foundset.getSize() > 0 &&
	forms.FrmFacturasGC.foundset.getSize() > 0)
	{
		chartjstype = 'pie';
		draw_chartjs()
	}
}
